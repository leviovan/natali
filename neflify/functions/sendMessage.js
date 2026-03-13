const fetch = require('node-fetch');

// Функции валидации
function isValidName(name) {
    return name && typeof name === 'string' && name.length >= 2 && name.length <= 100;
}

function isValidPhone(phone) {
    const phoneRegex = /^[\+\d\s\-\(\)]{10,20}$/;
    return phone && typeof phone === 'string' && phoneRegex.test(phone);
}

function isValidDate(date) {
    if (!date) return true;
    const dateObj = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return dateObj instanceof Date && !isNaN(dateObj) && dateObj >= today;
}

function isValidPeople(people) {
    if (!people) return true;
    const num = parseInt(people);
    return !isNaN(num) && num >= 1 && num <= 20;
}

function isValidCSRFToken(token) {
    // Проверяем, что токен - hex строка длиной 64 символа
    return token && typeof token === 'string' && /^[0-9a-f]{64}$/.test(token);
}

function sanitizeInput(input) {
    if (!input) return input;
    return String(input)
        .replace(/<[^>]*>/g, '')
        .replace(/[<>\"\'\\]/g, '')
        .trim();
}

function logSuspiciousActivity(ip, reason, data) {
    console.log(`[SECURITY] ${new Date().toISOString()} - IP: ${ip}, Reason: ${reason}, Data:`, data);
}

exports.handler = async (event) => {
    // Получаем IP для логирования
    const ip = event.headers['client-ip'] || 
               event.headers['x-forwarded-for'] || 
               event.headers['x-real-ip'] || 
               'unknown';
    
    if (event.httpMethod !== 'POST') {
        logSuspiciousActivity(ip, 'INVALID_METHOD', { method: event.httpMethod });
        return { 
            statusCode: 405, 
            body: JSON.stringify({ error: 'Method Not Allowed' }) 
        };
    }

    try {
        const data = JSON.parse(event.body);
        
        // Проверка CSRF-токена
        if (!isValidCSRFToken(data.csrf_token)) {
            logSuspiciousActivity(ip, 'INVALID_CSRF', { token: data.csrf_token });
            return {
                statusCode: 403,
                body: JSON.stringify({ 
                    success: false, 
                    error: 'Invalid CSRF token' 
                })
            };
        }
        
        // Санитизация
        const name = sanitizeInput(data.name);
        const phone = sanitizeInput(data.phone);
        const tour = sanitizeInput(data.tour || '');
        const date = sanitizeInput(data.date || '');
        const people = sanitizeInput(data.people || '');
        const message = sanitizeInput(data.message || '');
        
        // Валидация
        if (!isValidName(name)) {
            logSuspiciousActivity(ip, 'INVALID_NAME', { name });
            return {
                statusCode: 400,
                body: JSON.stringify({ 
                    success: false, 
                    error: 'Некорректное имя' 
                })
            };
        }
        
        if (!isValidPhone(phone)) {
            logSuspiciousActivity(ip, 'INVALID_PHONE', { phone });
            return {
                statusCode: 400,
                body: JSON.stringify({ 
                    success: false, 
                    error: 'Некорректный телефон' 
                })
            };
        }
        
        if (date && !isValidDate(date)) {
            logSuspiciousActivity(ip, 'INVALID_DATE', { date });
            return {
                statusCode: 400,
                body: JSON.stringify({ 
                    success: false, 
                    error: 'Некорректная дата' 
                })
            };
        }
        
        if (people && !isValidPeople(people)) {
            logSuspiciousActivity(ip, 'INVALID_PEOPLE', { people });
            return {
                statusCode: 400,
                body: JSON.stringify({ 
                    success: false, 
                    error: 'Некорректное количество человек' 
                })
            };
        }

        const token = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (!token || !chatId) {
            console.error('Missing Telegram credentials');
            return {
                statusCode: 500,
                body: JSON.stringify({ 
                    success: false, 
                    error: 'Server configuration error' 
                })
            };
        }

        // Функция экранирования для Telegram Markdown
        function escapeTelegram(text) {
            return text.replace(/([_*\[\]()~`>#+\-=|{}.!])/g, '\\$1');
        }

        const escapedName = escapeTelegram(name);
        const escapedPhone = escapeTelegram(phone);
        const escapedTour = escapeTelegram(tour);
        const escapedDate = escapeTelegram(date);
        const escapedPeople = escapeTelegram(people);
        const escapedMessage = escapeTelegram(message);

        let text = `🔔 Новая заявка с сайта!\n\n👤 Имя: ${escapedName}\n📞 Телефон: ${escapedPhone}`;
        if (escapedTour) text += `\n🚶 Экскурсия: ${escapedTour}`;
        if (escapedDate) text += `\n📅 Желаемая дата: ${escapedDate}`;
        if (escapedPeople) text += `\n👥 Количество человек: ${escapedPeople}`;
        if (escapedMessage) text += `\n💬 Сообщение: ${escapedMessage}`;

        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: text,
                parse_mode: 'MarkdownV2',
            }),
        });

        const result = await response.json();

        if (result.ok) {
            return {
                statusCode: 200,
                body: JSON.stringify({ success: true }),
            };
        } else {
            console.error('Telegram API error:', result);
            logSuspiciousActivity(ip, 'TELEGRAM_ERROR', { error: result });
            return {
                statusCode: 500,
                body: JSON.stringify({ 
                    success: false, 
                    error: 'Failed to send message' 
                }),
            };
        }
    } catch (error) {
        console.error('Function error:', error);
        logSuspiciousActivity(ip, 'INTERNAL_ERROR', { error: error.message });
        return {
            statusCode: 500,
            body: JSON.stringify({ 
                success: false, 
                error: 'Internal server error' 
            }),
        };
    }
};
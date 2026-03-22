// netlify/functions/sendMessage.js
import fetch from 'node-fetch';

export const handler = async (event) => {
    // Разрешаем только POST запросы
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method Not Allowed' })
        };
    }

    try {
        // Получаем данные из формы
        const data = JSON.parse(event.body);
        const { name, phone, tour, date, people, message } = data;

        // Токен бота и chat_id из переменных окружения
        const token = process.env.TELEGRAM_BOT_TOKEN;
        console.log(process,token)
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

        // Формируем красивое сообщение
        const text = `
🔔 <b>НОВАЯ ЗАЯВКА!</b>

👤 <b>Имя:</b> ${name}
📞 <b>Телефон:</b> ${phone}
🚶 <b>Экскурсия:</b> ${tour || 'Не указана'}
📅 <b>Дата:</b> ${date || 'Не указана'}
👥 <b>Человек:</b> ${people || '1'}
💬 <b>Сообщение:</b> ${message || 'Нет'}

⏰ <i>${new Date().toLocaleString('ru-RU')}</i>
        `;

        // Отправляем в Telegram
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: text,
                parse_mode: 'HTML'
            })
        });

        const result = await response.json();

        if (result.ok) {
            return {
                statusCode: 200,
                body: JSON.stringify({ success: true })
            };
        } else {
            console.error('Telegram error:', result);
            return {
                statusCode: 500,
                body: JSON.stringify({
                    success: false,
                    error: 'Telegram error'
                })
            };
        }

    } catch (error) {
        console.error('Function error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                success: false,
                error: error.message
            })
        };
    }
};
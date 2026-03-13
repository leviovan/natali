import { showMessage, isValidName, isValidPhone } from './utils.js';

// Генерация CSRF-токена
function generateCSRFToken() {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

// Установка CSRF-токена в форму
function setCSRFToken(form) {
    let tokenInput = form.querySelector('input[name="csrf_token"]');
    if (!tokenInput) {
        tokenInput = document.createElement('input');
        tokenInput.type = 'hidden';
        tokenInput.name = 'csrf_token';
        form.appendChild(tokenInput);
    }
    tokenInput.value = generateCSRFToken();
    
    // Сохраняем в sessionStorage для проверки на сервере
    sessionStorage.setItem('csrf_token', tokenInput.value);
}

export async function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const messageEl = form.querySelector('.form-message');
    
    // Валидация на клиенте
    if (!isValidName(data.name)) {
        showMessage(messageEl, 'Имя должно содержать минимум 2 символа', 'red');
        return;
    }
    
    if (!isValidPhone(data.phone)) {
        showMessage(messageEl, 'Введите корректный телефон', 'red');
        return;
    }
    
    // Проверяем наличие CSRF-токена
    if (!data.csrf_token) {
        showMessage(messageEl, 'Ошибка безопасности. Обновите страницу.', 'red');
        return;
    }
    
    // Проверяем, что токен совпадает с сохранённым
    const storedToken = sessionStorage.getItem('csrf_token');
    if (data.csrf_token !== storedToken) {
        showMessage(messageEl, 'Ошибка безопасности. Попробуйте снова.', 'red');
        return;
    }
    
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Отправка...';
    
    try {
        const response = await fetch('/.netlify/functions/sendMessage', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        
        const result = await response.json();
        
        if (result.success) {
            showMessage(messageEl, 'Спасибо! Мы свяжемся с вами в ближайшее время.', 'green');
            form.reset();
            // Генерируем новый токен после успешной отправки
            setCSRFToken(form);
        } else {
            showMessage(messageEl, 'Ошибка при отправке. Попробуйте позже.', 'red');
        }
    } catch (error) {
        showMessage(messageEl, 'Ошибка соединения. Проверьте интернет.', 'red');
        console.error('Form error:', error);
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }
}

// Инициализация CSRF-токенов при загрузке страницы
export function initCSRF() {
    document.querySelectorAll('form').forEach(form => {
        if (form.id === 'quick-form' || form.id === 'tour-form') {
            setCSRFToken(form);
        }
    });
}
// js/modules/formHandler.js
export async function handleFormSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const messageEl = form.querySelector('.form-message');

    // Простая валидация
    if (!data.name || data.name.length < 2) {
        showMessage(messageEl, 'Введите имя', 'red');
        return;
    }

    if (!data.phone || data.phone.length < 10) {
        showMessage(messageEl, 'Введите телефон', 'red');
        return;
    }

    // Блокируем кнопку
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Отправка...';

    try {
        // Отправляем на сервер
        const response = await fetch('/netlify/functions/sendMessage', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
            showMessage(messageEl, '✓ Заявка отправлена! Я свяжусь с вами', 'green');
            form.reset();
        } else {
            showMessage(messageEl, 'Ошибка, попробуйте позже', 'red');
        }
    } catch (error) {
        showMessage(messageEl, 'Ошибка соединения', 'red');
        console.error(error);
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }
}

function showMessage(el, text, color) {
    el.textContent = text;
    el.style.color = color;
    setTimeout(() => {
        el.textContent = '';
    }, 5000);
}
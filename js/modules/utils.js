export function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

export function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

export function formatPrice(price) {
    return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0
    }).format(price);
}

export function showMessage(element, text, color = 'green', duration = 5000) {
    element.textContent = text;
    element.style.color = color;

    if (duration > 0) {
        setTimeout(() => {
            element.textContent = '';
        }, duration);
    }
}

export function isValidPhone(phone) {
    return /^[+]?[\d\s-()]{10,}$/.test(phone);
}

export function isValidName(name) {
    return name && name.length >= 2;
}
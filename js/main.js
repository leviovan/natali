import { TourSlider } from './modules/slider.js';
import { TourPage } from './modules/tourPage.js';
import { handleFormSubmit, initCSRF } from './modules/formHandler.js';
import { initSmoothScroll } from './modules/smoothScroll.js';
import { initParallax } from './modules/parallax.js';

document.addEventListener('DOMContentLoaded', () => {
    // Инициализация CSRF-токенов
    initCSRF();
    
    if (document.getElementById('tour-detail')) {
        new TourPage();
    } else {
        new TourSlider('slider-wrapper', 'prevBtn', 'nextBtn', 'slider-dots');
    }
    
    initSmoothScroll();
    initParallax();
    
    document.querySelectorAll('form').forEach(form => {
        if (form.id === 'quick-form' || form.id === 'tour-form') {
            form.addEventListener('submit', handleFormSubmit);
        }
    });
});
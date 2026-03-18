// js/main.js
import { handleFormSubmit } from './modules/formHandler.js';
import { TourSlider } from './modules/slider.js';
import { TourPage } from './modules/tourPage.js';
import { initHeader } from './modules/header.js';

document.addEventListener('DOMContentLoaded', () => {
    // Инициализация хедера
    initHeader();

    // Инициализация слайдера на главной
    if (document.getElementById('slider-wrapper')) {
        new TourSlider('slider-wrapper', 'prevBtn', 'nextBtn', 'slider-dots');
    }

    // Инициализация страницы тура
    if (document.getElementById('tour-detail')) {
        new TourPage();
    }

    // Подключаем обработчики форм
    const quickForm = document.getElementById('quick-form');
    if (quickForm) {
        quickForm.addEventListener('submit', handleFormSubmit);
    }

    const tourForm = document.getElementById('tour-form');
    if (tourForm) {
        tourForm.addEventListener('submit', handleFormSubmit);
    }

    const tourFormMobile = document.getElementById('tour-form-mobile');
    if (tourFormMobile) {
        tourFormMobile.addEventListener('submit', handleFormSubmit);
    }
});
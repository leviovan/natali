import { getTourById, toursData } from './toursData.js';

export class TourPage {
    constructor() {
        const urlParams = new URLSearchParams(window.location.search);
        this.tourId = urlParams.get('id');
        this.tour = getTourById(this.tourId);
        
        if (!this.tour) {
            window.location.href = 'index.html';
            return;
        }
        
        this.currentImageIndex = 0;
        this.init();
    }
    
    init() {
        this.fillBasicInfo();
        this.initDesktopGallery();
        this.initMobileGallery();
        this.initMobileBooking();
        this.initTabs();
        this.initAccordion();
        this.initPriceCalculator(); // Теперь вызывается после заполнения информации
        this.renderSimilarTours();
    }
    
    fillBasicInfo() {
        document.getElementById('tour-title').textContent = this.tour.title;
        
        // Для десктопной формы
        const tourNameHidden = document.getElementById('tour-name-hidden');
        const tourNameHiddenMobile = document.getElementById('tour-name-hidden-mobile');
        if (tourNameHidden) tourNameHidden.value = this.tour.title;
        if (tourNameHiddenMobile) tourNameHiddenMobile.value = this.tour.title;
        
         document.getElementById('tour-meta').innerHTML = `
            <span><i class="fas fa-clock"></i> ${this.tour.durationText}</span>
            <span><i class="fas fa-signal"></i> ${this.tour.difficulty}</span>
            <span><i class="fas fa-users"></i> 1-${this.tour.maxPeople} чел.</span>
            <span><i class="fas fa-tag"></i>От ${this.tour.basePrice}₽</span>
        `;
        
        // Цены в формах
        const priceSpan = document.querySelector('#tour-price span');
        const priceSpanMobile = document.querySelector('#tour-price-mobile span');
        if (priceSpan) {
            priceSpan.textContent = `${this.tour.basePrice} ₽ за группу`;
        }
        if (priceSpanMobile) {
            priceSpanMobile.textContent = `${this.tour.basePrice} ₽ за группу`;
        }
        
        document.getElementById('description').innerHTML = this.tour.description;
        
        // Тарифы
        const tariffsTab = document.getElementById('tariffs');
        if (tariffsTab && this.tour.tariffs) {
            tariffsTab.innerHTML = `
                <div class="tariffs-grid">
                    ${this.tour.tariffs.map((tariff, index) => `
                        <div class="tariff-card" data-tariff-index="${index}">
                            <div class="tariff-icon">
                                <i class="fas fa-${tariff.icon}"></i>
                            </div>
                            <h4>${tariff.name}</h4>
                            <div class="tariff-price">${tariff.price} ₽</div>
                            <p>${tariff.description}</p>
                            <button class="btn-small choose-tariff" data-tariff="${tariff.name}" data-price="${tariff.price}" data-index="${index}">
                                Выбрать
                            </button>
                        </div>
                    `).join('')}
                </div>
            `;
            
            this.initTariffHandlers();
        }
                
        document.getElementById('reviews').innerHTML = this.tour.reviews.map(r => `
            <div class="review-item">
                <p>«${r.text}»</p>
                <cite>— ${r.author}, ${r.date}</cite>
            </div>
        `).join('') + '<a href="https://t.me/nikolaenkonatalia_guidespb" class="btn-small">Все отзывы</a>';
    }
    
    initDesktopGallery() {
        const mainImage = document.getElementById('main-image-desktop');
        const thumbnailsContainer = document.getElementById('thumbnails-desktop');
        
        if (!this.tour.images.length || !mainImage || !thumbnailsContainer) return;
        
        mainImage.src = this.tour.images[0];
        mainImage.alt = this.tour.title;
        
        thumbnailsContainer.innerHTML = this.tour.images.map((img, index) => `
            <div class="thumbnail-item ${index === 0 ? 'active' : ''}" data-index="${index}">
                <img src="${img}" alt="${this.tour.title} - фото ${index + 1}">
            </div>
        `).join('');
        
        thumbnailsContainer.querySelectorAll('.thumbnail-item').forEach(item => {
            item.addEventListener('click', () => {
                const index = parseInt(item.dataset.index);
                mainImage.src = this.tour.images[index];
                
                thumbnailsContainer.querySelectorAll('.thumbnail-item').forEach(el => {
                    el.classList.remove('active');
                });
                item.classList.add('active');
                this.currentImageIndex = index;
            });
        });
    }
    
    initMobileGallery() {
        const wrapper = document.getElementById('mobileSliderWrapper');
        const prevBtn = document.getElementById('mobileSliderPrev');
        const nextBtn = document.getElementById('mobileSliderNext');
        const dotsContainer = document.getElementById('mobileSliderDots');
        
        if (!this.tour.images.length || !wrapper) return;
        
        wrapper.innerHTML = this.tour.images.map(img => `
            <div class="mobile-slider-slide">
                <img src="${img}" alt="${this.tour.title}">
            </div>
        `).join('');
        
        const slides = wrapper.querySelectorAll('.mobile-slider-slide');
        let currentIndex = 0;
        
        const updateSlider = () => {
            wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
            
            if (dotsContainer) {
                const dots = dotsContainer.querySelectorAll('.mobile-slider-dot');
                dots.forEach((dot, i) => {
                    dot.classList.toggle('active', i === currentIndex);
                });
            }
        };
        
        if (dotsContainer) {
            dotsContainer.innerHTML = this.tour.images.map((_, i) => `
                <span class="mobile-slider-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>
            `).join('');
            
            dotsContainer.querySelectorAll('.mobile-slider-dot').forEach(dot => {
                dot.addEventListener('click', () => {
                    currentIndex = parseInt(dot.dataset.index);
                    updateSlider();
                });
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + this.tour.images.length) % this.tour.images.length;
                updateSlider();
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % this.tour.images.length;
                updateSlider();
            });
        }
        
        let touchStartX = 0;
        wrapper.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        wrapper.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].screenX;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    currentIndex = (currentIndex + 1) % this.tour.images.length;
                } else {
                    currentIndex = (currentIndex - 1 + this.tour.images.length) % this.tour.images.length;
                }
                updateSlider();
            }
        });
    }
    
    initMobileBooking() {
        const mobileBtn = document.getElementById('mobileBookingBtn');
        const modal = document.getElementById('bookingModal');
        const closeBtn = document.getElementById('closeModalBtn');
        
        if (!mobileBtn || !modal) return;
        
        mobileBtn.addEventListener('click', () => {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            document.body.classList.add('modal-open');
        });
        
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.classList.remove('active');
                document.body.style.overflow = '';
                document.body.classList.remove('modal-open');
            });
        }
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
                document.body.classList.remove('modal-open');
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
                document.body.classList.remove('modal-open');
            }
        });
    }
    
    initTariffHandlers() {
        document.querySelectorAll('.choose-tariff').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const tariffName = btn.dataset.tariff;
                const tariffPrice = parseInt(btn.dataset.price);
                
                this.updatePriceForTariff(tariffPrice, tariffName);
                
                document.querySelectorAll('.tariff-card').forEach(card => {
                    card.classList.remove('selected-tariff');
                });
                btn.closest('.tariff-card').classList.add('selected-tariff');
            });
        });
        
        document.querySelectorAll('.tariff-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.classList.contains('choose-tariff') && !e.target.closest('.choose-tariff')) {
                    const btn = card.querySelector('.choose-tariff');
                    if (btn) btn.click();
                }
            });
        });
    }
    
    initTabs() {
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');
        
        tabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.dataset.tab;
                tabButtons.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));
                btn.classList.add('active');
                const content = document.getElementById(tabId);
                if (content) content.classList.add('active');
            });
        });
    }
    
    initAccordion() {
        const accordionHeaders = document.querySelectorAll('.accordion-header');
        
        accordionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                header.classList.toggle('active');
                const content = header.nextElementSibling;
                if (content.classList.contains('show')) {
                    content.classList.remove('show');
                    content.style.maxHeight = null;
                } else {
                    content.classList.add('show');
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            });
        });
    }
    
    // ========== НОВЫЙ КАЛЬКУЛЯТОР ==========
initPriceCalculator() {
    const peopleInput = document.getElementById('people-input');
    const peopleInputMobile = document.getElementById('people-input-mobile');
    
    if (!peopleInput) return;
    
    // Максимальное количество человек из данных тура (для информации)
    const maxPeople = this.tour.maxPeople;
    
    // Функция проверки количества
    const checkPeopleCount = (input, isMobile = false) => {
        let count = parseInt(input.value) || 1;
        
        // Проверка на минимальное количество
        if (count < 1) {
            count = 1;
            input.value = 1;
        }
        
        // Проверяем, превышено ли стандартное количество
        this.checkPeopleCount(count, maxPeople, isMobile);
    };
    
    // Добавляем обработчики для десктопной формы
    if (peopleInput) {
        peopleInput.addEventListener('input', () => checkPeopleCount(peopleInput, false));
        peopleInput.addEventListener('change', () => checkPeopleCount(peopleInput, false));
        
        // Запускаем сразу при загрузке
        checkPeopleCount(peopleInput, false);
    }
    
    // Добавляем обработчики для мобильной формы
    if (peopleInputMobile) {
        peopleInputMobile.addEventListener('input', () => checkPeopleCount(peopleInputMobile, true));
        peopleInputMobile.addEventListener('change', () => checkPeopleCount(peopleInputMobile, true));
        
        // Запускаем сразу при загрузке
        checkPeopleCount(peopleInputMobile, true);
    }
}

// Метод для проверки количества человек
checkPeopleCount(count, maxPeople, isMobile = false) {
    const form = isMobile ? 
        document.getElementById('tour-form-mobile') : 
        document.getElementById('tour-form');
    
    if (!form) return;
    
    // Удаляем старое предупреждение, если есть
    const oldWarning = form.querySelector('.people-warning');
    if (oldWarning) oldWarning.remove();
    
    // Если количество превышает стандартное, показываем предупреждение
    if (count > maxPeople) {
        const warning = document.createElement('div');
        warning.className = 'people-warning';
        warning.innerHTML = `
            <i class="fas fa-info-circle"></i>
            <div>
                <strong>Внимание!</strong> Вы выбрали ${count} человек. 
                Стандартная группа рассчитана на ${maxPeople} чел. 
                Цена может отличаться. Уточните при бронировании.
            </div>
        `;
        
        // Вставляем перед кнопкой отправки
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            form.insertBefore(warning, submitBtn);
        }
    }
}

// Обновляем метод updatePriceForTariff
updatePriceForTariff(price, tariffName) {
    // Обновляем отображаемую цену
    const priceSpan = document.querySelector('#tour-price span');
    const priceSpanMobile = document.querySelector('#tour-price-mobile span');
    
    if (priceSpan) {
        priceSpan.textContent = `${price} ₽ (${tariffName})`;
    }
    if (priceSpanMobile) {
        priceSpanMobile.textContent = `${price} ₽ (${tariffName})`;
    }
    
    // Обновляем базовую цену
    this.tour.basePrice = price;
    
    // Проверяем количество человек при смене тарифа
    const peopleInput = document.getElementById('people-input');
    const peopleInputMobile = document.getElementById('people-input-mobile');
    
    if (peopleInput) {
        const count = parseInt(peopleInput.value) || 1;
        this.checkPeopleCount(count, this.tour.maxPeople, false);
    }
    
    if (peopleInputMobile) {
        const count = parseInt(peopleInputMobile.value) || 1;
        this.checkPeopleCount(count, this.tour.maxPeople, true);
    }
    
    // Удаляем старые индикаторы
    [document.getElementById('tour-form'), document.getElementById('tour-form-mobile')].forEach(form => {
        if (form) {
            const oldIndicator = form.querySelector('.selected-tariff-indicator');
            if (oldIndicator) oldIndicator.remove();
        }
    });
    
    // Добавляем метку о выбранном тарифе
    const createIndicator = (form) => {
        const div = document.createElement('div');
        div.className = 'selected-tariff-indicator';
        div.innerHTML = `Выбран тариф: <strong>${tariffName}</strong> (${price} ₽)`;
        return div;
    };
    
    const desktopForm = document.getElementById('tour-form');
    const mobileForm = document.getElementById('tour-form-mobile');
    
    if (desktopForm) {
        desktopForm.insertBefore(createIndicator(desktopForm), desktopForm.querySelector('button'));
    }
    
    if (mobileForm) {
        mobileForm.insertBefore(createIndicator(mobileForm), mobileForm.querySelector('button'));
    }
}

// Обновляем метод updatePriceForTariff
updatePriceForTariff(price, tariffName) {
    // Обновляем отображаемую цену
    const priceSpan = document.querySelector('#tour-price span');
    const priceSpanMobile = document.querySelector('#tour-price-mobile span');
    
    if (priceSpan) {
        priceSpan.textContent = `${price} ₽ (${tariffName})`;
    }
    if (priceSpanMobile) {
        priceSpanMobile.textContent = `${price} ₽ (${tariffName})`;
    }
    
    // Обновляем базовую цену для калькулятора
    this.tour.basePrice = price;
    
    // Обновляем отображение фиксировНатали цены (не зависит от количества)
    const totalSpan = document.getElementById('total');
    const totalSpanMobile = document.getElementById('total-mobile');
    
    if (totalSpan) {
        totalSpan.textContent = price;
    }
    
    if (totalSpanMobile) {
        totalSpanMobile.textContent = price;
    }
    
    // Проверяем количество человек (без изменения цены)
    const peopleInput = document.getElementById('people-input');
    const peopleInputMobile = document.getElementById('people-input-mobile');
    
    if (peopleInput) {
        const count = parseInt(peopleInput.value) || 1;
        this.checkPeopleCount(count, this.tour.maxPeople, false);
    }
    
    if (peopleInputMobile) {
        const count = parseInt(peopleInputMobile.value) || 1;
        this.checkPeopleCount(count, this.tour.maxPeople, true);
    }
    
    // Удаляем старые индикаторы
    [document.getElementById('tour-form'), document.getElementById('tour-form-mobile')].forEach(form => {
        if (form) {
            const oldIndicator = form.querySelector('.selected-tariff-indicator');
            if (oldIndicator) oldIndicator.remove();
        }
    });
    
    // Добавляем метку о выбранном тарифе в форму
    const createIndicator = (form) => {
        const div = document.createElement('div');
        div.className = 'selected-tariff-indicator';
        div.innerHTML = `Выбран тариф: <strong>${tariffName}</strong> (${price} ₽)`;
        return div;
    };
    
    const desktopForm = document.getElementById('tour-form');
    const mobileForm = document.getElementById('tour-form-mobile');
    
    if (desktopForm) {
        desktopForm.insertBefore(createIndicator(desktopForm), desktopForm.querySelector('button'));
    }
    
    if (mobileForm) {
        mobileForm.insertBefore(createIndicator(mobileForm), mobileForm.querySelector('button'));
    }
}
    
    // Метод для проверки количества человек
    checkPeopleCount(count, maxPeople, isMobile = false) {
        const form = isMobile ? 
            document.getElementById('tour-form-mobile') : 
            document.getElementById('tour-form');
        
        if (!form) return;
        
        // Удаляем старое предупреждение, если есть
        const oldWarning = form.querySelector('.people-warning');
        if (oldWarning) oldWarning.remove();
        
        // Если количество превышает стандартное, показываем предупреждение
        if (count > maxPeople) {
            const warning = document.createElement('div');
            warning.className = 'people-warning';
            warning.innerHTML = `
                <i class="fas fa-info-circle"></i>
                <div>
                    <strong>Внимание!</strong> Вы выбрали ${count} человек. 
                    Стандартная группа рассчитана на ${maxPeople} чел. 
                    Цена может отличаться. Уточните при бронировании.
                </div>
            `;
            
            // Вставляем после поля с количеством людей или перед кнопкой
            const totalDiv = form.querySelector('.total-price');
            if (totalDiv) {
                totalDiv.parentNode.insertBefore(warning, totalDiv.nextSibling);
            } else {
                const submitBtn = form.querySelector('button[type="submit"]');
                if (submitBtn) {
                    form.insertBefore(warning, submitBtn);
                }
            }
        }
    }
    
    updatePriceForTariff(price, tariffName) {
        // Обновляем отображаемую цену
        const priceSpan = document.querySelector('#tour-price span');
        const priceSpanMobile = document.querySelector('#tour-price-mobile span');
        
        if (priceSpan) {
            priceSpan.textContent = `${price} ₽ (${tariffName})`;
        }
        if (priceSpanMobile) {
            priceSpanMobile.textContent = `${price} ₽ (${tariffName})`;
        }
        
        // Обновляем базовую цену для калькулятора
        this.tour.basePrice = price;
        
        // Обновляем калькулятор для пересчёта суммы
        const peopleInput = document.getElementById('people-input');
        const peopleInputMobile = document.getElementById('people-input-mobile');
        const totalSpan = document.getElementById('total');
        const totalSpanMobile = document.getElementById('total-mobile');
        
        if (peopleInput && totalSpan) {
            const count = parseInt(peopleInput.value) || 1;
            totalSpan.textContent = price
            this.checkPeopleCount(count, this.tour.maxPeople, false);
        }
        
        if (peopleInputMobile && totalSpanMobile) {
            const count = parseInt(peopleInputMobile.value) || 1;
            totalSpanMobile.textContent = price
            this.checkPeopleCount(count, this.tour.maxPeople, true);
        }
        
        // Удаляем старые индикаторы
        [document.getElementById('tour-form'), document.getElementById('tour-form-mobile')].forEach(form => {
            if (form) {
                const oldIndicator = form.querySelector('.selected-tariff-indicator');
                if (oldIndicator) oldIndicator.remove();
            }
        });
        
        // Добавляем метку о выбранном тарифе в форму
        const createIndicator = (form) => {
            const div = document.createElement('div');
            div.className = 'selected-tariff-indicator';
            div.innerHTML = `Выбран тариф: <strong>${tariffName}</strong> (${price} ₽)`;
            return div;
        };
        
        const desktopForm = document.getElementById('tour-form');
        const mobileForm = document.getElementById('tour-form-mobile');
        
        if (desktopForm) {
            desktopForm.insertBefore(createIndicator(desktopForm), desktopForm.querySelector('button'));
        }
        
        if (mobileForm) {
            mobileForm.insertBefore(createIndicator(mobileForm), mobileForm.querySelector('button'));
        }
    }
    
  renderSimilarTours() {
    const container = document.getElementById('similar-tours');
    if (!container) return;
    
    const similarTours = toursData.filter(t => this.tour.similar.includes(t.id));
    
    if (similarTours.length === 0) {
        container.innerHTML = '<p class="no-similar">Нет похожих экскурсий</p>';
        return;
    }
    
    container.innerHTML = similarTours.map(t => `
        <div class="tour-card">
            <div class="tour-card__image">
                <img src="${t.images[0]}" alt="${t.title}" loading="lazy">
                <div class="tour-card__price-badge">${t.basePrice}₽</div>
            </div>
            <div class="tour-card__content">
                <h3 class="tour-card__title">${t.title}</h3>
                <div class="tour-card__meta">
                    <span><i class="fas fa-clock"></i> ${t.duration} ч</span>
                    <span><i class="fas fa-users"></i> 1-${t.maxPeople} чел</span>
                </div>
                <a href="tour.html?id=${t.id}" class="tour-card__btn">
                    Подробнее <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    `).join('');
}
}
import { toursData } from './toursData.js';
import { debounce } from './utils.js';

export class TourSlider {
    constructor(wrapperId, prevBtnId, nextBtnId, dotsId) {
        this.wrapper = document.getElementById(wrapperId);
        this.prevBtn = document.getElementById(prevBtnId);
        this.nextBtn = document.getElementById(nextBtnId);
        this.dotsContainer = document.getElementById(dotsId);
        
        if (!this.wrapper) {
            console.error('Слайдер: wrapper не найден');
            return;
        }
        
        this.currentIndex = 0;
        this.init();
    }
    
    init() {
        this.renderCards();
        // Даем время на отрисовку карточек
        setTimeout(() => {
            this.cards = this.wrapper.querySelectorAll('.tour-card');
            this.cardCount = this.cards.length;
            
            if (this.cardCount === 0) {
                console.error('Слайдер: карточки не найдены');
                return;
            }
            
            this.cardsPerView = this.getCardsPerView();
            this.createDots();
            this.updateSlider();
            this.bindEvents();
        }, 100);
    }
    
  renderCards() {
    this.wrapper.innerHTML = toursData.map(tour => `
        <div class="tour-card" data-id="${tour.id}">
            <div class="tour-card__image">
                <img 
                    src="${tour.images[0]}" 
                    alt="${tour.title}" 
                    loading="lazy"
                >
                <div class="tour-card__price-badge">
                    ${tour.basePrice}₽
                </div>
            </div>
            
            <div class="tour-card__content">
                <h3 class="tour-card__title">${tour.title}</h3>
                <p class="tour-card__description">${tour.shortDescription}</p>
                
                <div class="tour-card__meta">
                    <div class="tour-card__meta-item">
                        <i class="fas fa-clock"></i>
                        <span>${tour.duration} ч</span>
                    </div>
                    <div class="tour-card__meta-item">
                        <i class="fas fa-users"></i>
                        <span>1-${tour.maxPeople} чел</span>
                    </div>
                </div>
                
                <a href="tour.html?id=${tour.id}" class="tour-card__btn">
                    Подробнее
                    <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    `).join('');
}
    
    getCardsPerView() {
        const width = window.innerWidth;
        if (width <= 576) return 1;
        if (width <= 992) return 2;
        return 3;
    }
    
    createDots() {
        if (!this.dotsContainer) return;
        
        const maxIndex = Math.max(0, this.cardCount - this.cardsPerView);
        let dotsHtml = '';
        
        for (let i = 0; i <= maxIndex; i++) {
            dotsHtml += `<span class="dot ${i === this.currentIndex ? 'active' : ''}" data-index="${i}"></span>`;
        }
        
        this.dotsContainer.innerHTML = dotsHtml;
        
        // Добавляем обработчики на точки
        this.dotsContainer.querySelectorAll('.dot').forEach(dot => {
            dot.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                if (!isNaN(index)) {
                    this.currentIndex = index;
                    this.updateSlider();
                }
            });
        });
    }
    
    updateSlider() {
        if (!this.cards || this.cards.length === 0) return;
        
        const card = this.cards[0];
        const cardWidth = card.offsetWidth;
        const gap = 20; // Должно совпадать с gap в CSS
        const offset = this.currentIndex * (cardWidth + gap);
        
        this.wrapper.style.transform = `translateX(-${offset}px)`;
        
        // Обновляем кнопки
        const maxIndex = this.cardCount - this.cardsPerView;
        if (this.prevBtn) {
            this.prevBtn.classList.toggle('hidden', this.currentIndex <= 0);
        }
        if (this.nextBtn) {
            this.nextBtn.classList.toggle('hidden', this.currentIndex >= maxIndex);
        }
        
        // Обновляем точки
        if (this.dotsContainer) {
            const dots = this.dotsContainer.querySelectorAll('.dot');
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === this.currentIndex);
            });
        }
    }
    
    bindEvents() {
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => {
                if (this.currentIndex > 0) {
                    this.currentIndex--;
                    this.updateSlider();
                }
            });
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => {
                const maxIndex = this.cardCount - this.cardsPerView;
                if (this.currentIndex < maxIndex) {
                    this.currentIndex++;
                    this.updateSlider();
                }
            });
        }
        
        window.addEventListener('resize', debounce(() => {
            const newCardsPerView = this.getCardsPerView();
            
            if (newCardsPerView !== this.cardsPerView) {
                this.cardsPerView = newCardsPerView;
                const maxIndex = Math.max(0, this.cardCount - this.cardsPerView);
                this.currentIndex = Math.min(this.currentIndex, maxIndex);
                this.createDots();
                this.updateSlider();
            } else {
                // Просто обновляем позицию
                this.updateSlider();
            }
        }, 150));
        
        // Обновляем при загрузке изображений
        window.addEventListener('load', () => {
            this.updateSlider();
        });
    }
}
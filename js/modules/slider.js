import { toursData } from './toursData.js';
import { debounce } from './utils.js';

export class TourSlider {
    constructor(wrapperId, prevBtnId, nextBtnId, dotsId) {
        this.wrapper = document.getElementById(wrapperId);
        this.prevBtn = document.getElementById(prevBtnId);
        this.nextBtn = document.getElementById(nextBtnId);
        this.dotsContainer = document.getElementById(dotsId);
        
        if (!this.wrapper) return;
        
        this.currentIndex = 0;
        this.cardsPerView = this.getCardsPerView();
        this.init();
    }
    
    init() {
        this.renderCards();
        this.cards = this.wrapper.querySelectorAll('.card');
        this.cardCount = this.cards.length;
        this.createDots();
        this.updateSlider();
        this.bindEvents();
    }
    
    renderCards() {
        this.wrapper.innerHTML = toursData.map(tour => `
            <div class="card" data-id="${tour.id}">
                <img src="${tour.images[0]}" alt="${tour.title}" loading="lazy">
                <h3>${tour.title}</h3>
                <p>${tour.shortDescription}</p>
                <div class="card-meta">
                    <span><i class="fas fa-clock"></i> ${tour.duration}ч</span>
                    <span><i class="fas fa-tag"></i> ${tour.basePrice}₽</span>
                </div>
                <a href="tour.html?id=${tour.id}" class="btn-small">Подробнее</a>
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
        this.dotsContainer.innerHTML = Array.from({ length: maxIndex + 1 }, (_, i) => 
            `<span class="dot ${i === this.currentIndex ? 'active' : ''}" data-index="${i}"></span>`
        ).join('');
        
        this.dotsContainer.querySelectorAll('.dot').forEach(dot => {
            dot.addEventListener('click', () => {
                this.currentIndex = parseInt(dot.dataset.index);
                this.updateSlider();
            });
        });
    }
    
    updateSlider() {
        const card = this.cards[0];
        if (!card) return;
        
        const cardWidth = card.offsetWidth;
        const gap = 20;
        const offset = this.currentIndex * (cardWidth + gap);
        this.wrapper.style.transform = `translateX(-${offset}px)`;
        
        const maxIndex = this.cardCount - this.cardsPerView;
        if (this.prevBtn) {
            this.prevBtn.classList.toggle('hidden', this.currentIndex === 0);
        }
        if (this.nextBtn) {
            this.nextBtn.classList.toggle('hidden', this.currentIndex >= maxIndex);
        }
        
        if (this.dotsContainer) {
            this.dotsContainer.querySelectorAll('.dot').forEach((dot, i) => {
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
                this.updateSlider();
            }
        }, 150));
    }
}
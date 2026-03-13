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
        
        this.init();
    }
    
    init() {
        this.fillBasicInfo();
        this.initGallery();
        this.initTabs();
        this.initAccordion();
        this.initPriceCalculator();
        this.renderSimilarTours();
    }
    
    fillBasicInfo() {
        document.getElementById('tour-title').textContent = this.tour.title;
        document.getElementById('tour-name-hidden').value = this.tour.title;
        
        document.getElementById('tour-meta').innerHTML = `
            <span><i class="fas fa-clock"></i> ${this.tour.durationText}</span>
            <span><i class="fas fa-signal"></i> ${this.tour.difficulty}</span>
            <span><i class="fas fa-users"></i> До ${this.tour.maxPeople} чел.</span>
            <span><i class="fas fa-tag"></i> ${this.tour.basePrice}₽</span>
        `;
        
        const priceSpan = document.querySelector('#tour-price span');
        if (priceSpan) {
            priceSpan.textContent = `${this.tour.basePrice} ₽ за группу`;
        }
        
        document.getElementById('description').innerHTML = this.tour.description;
        
        document.getElementById('route').innerHTML = `
            <ul>${this.tour.routeItems.map(item => `<li>${item}</li>`).join('')}</ul>
            <div class="map">${this.tour.mapIframe}</div>
        `;
        
        document.getElementById('reviews').innerHTML = this.tour.reviews.map(r => `
            <div class="review-item">
                <p>«${r.text}»</p>
                <cite>— ${r.author}, ${r.date}</cite>
            </div>
        `).join('') + '<a href="#" class="btn-small">Все отзывы</a>';
    }
    
    initGallery() {
        const mainImage = document.getElementById('main-image');
        const thumbnailsContainer = document.getElementById('thumbnails');
        
        if (!this.tour.images.length || !mainImage || !thumbnailsContainer) return;
        
        mainImage.src = this.tour.images[0];
        thumbnailsContainer.innerHTML = this.tour.images.map((img, index) => `
            <img src="${img.replace('800x500', '150x100')}" 
                 alt="Фото ${index + 1}" 
                 class="thumbnail ${index === 0 ? 'active' : ''}" 
                 data-full="${img}">
        `).join('');
        
        thumbnailsContainer.querySelectorAll('.thumbnail').forEach(thumb => {
            thumb.addEventListener('click', () => {
                thumbnailsContainer.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
                mainImage.src = thumb.dataset.full;
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
        
        // Закрываем все аккордеоны при загрузке (кроме первого, если нужно)
        accordionHeaders.forEach((header, index) => {
            const content = header.nextElementSibling;
            if (content) {
                content.classList.remove('show');
                content.style.maxHeight = null;
            }
        });
        
        accordionHeaders.forEach(header => {
            header.addEventListener('click', (e) => {
                e.preventDefault();
                
                const content = header.nextElementSibling;
                const isActive = header.classList.contains('active');
                
                // Плавно закрываем все другие аккордеоны (опционально)
                // Раскомментируйте следующие строки, если хотите, чтобы открывался только один аккордеон
                /*
                accordionHeaders.forEach(otherHeader => {
                    if (otherHeader !== header && otherHeader.classList.contains('active')) {
                        const otherContent = otherHeader.nextElementSibling;
                        otherHeader.classList.remove('active');
                        if (otherContent) {
                            otherContent.classList.remove('show');
                            otherContent.style.maxHeight = null;
                        }
                    }
                });
                */
                
                // Переключаем текущий аккордеон
                header.classList.toggle('active');
                
                if (!isActive) {
                    // Открываем
                    content.classList.add('show');
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    // Закрываем
                    content.classList.remove('show');
                    content.style.maxHeight = null;
                }
            });
        });
    }
    
    initPriceCalculator() {
        const peopleInput = document.getElementById('people-input');
        const totalSpan = document.getElementById('total');
        
        if (!peopleInput || !totalSpan) return;
        
        const updateTotal = () => {
            const count = parseInt(peopleInput.value) || 1;
            totalSpan.textContent = this.tour.basePrice * count;
        };
        
        peopleInput.addEventListener('input', updateTotal);
        updateTotal();
    }
    
    renderSimilarTours() {
        const container = document.getElementById('similar-tours');
        if (!container) return;
        
        const similarTours = toursData.filter(t => this.tour.similar.includes(t.id));
        
        container.innerHTML = similarTours.map(t => `
            <div class="card">
                <img src="${t.images[0]}" alt="${t.title}" loading="lazy">
                <h3>${t.title}</h3>
                <p>${t.shortDescription}</p>
                <a href="tour.html?id=${t.id}" class="btn-small">Подробнее</a>
            </div>
        `).join('');
    }
}
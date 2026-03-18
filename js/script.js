// ============================================
// ДАННЫЕ ЭКСКУРСИЙ
// ============================================
// ============================================
// ДАННЫЕ ЭКСКУРСИЙ (10 уникальных)
// ============================================
const toursData = [
    {
        id: 1,
        title: "Исторический центр",
        duration: "3 часа",
        difficulty: "Лёгкая",
        maxPeople: 5,
        basePrice: 3000,
        description: "<p>Вы прогуляетесь по главным улицам, увидите старинные здания и услышите истории, которые не расскажут в школе. Я покажу вам скрытые дворики и расскажу о знаменитых жителях.</p><p>В программе: посещение трёх соборов, старинной усадьбы и смотровой площадки.</p>",
        routeItems: [
            "🏛️ Площадь Свободы – начало экскурсии",
            "⛪ Соборная улица – 3 храма",
            "🏘️ Купеческий квартал",
            "🌳 Городской парк",
            "🏰 Смотровая башня"
        ],
        mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..." width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        reviews: [
            { text: "Очень познавательная экскурсия, Натали прекрасный рассказчик! Узнали много нового о городе.", author: "Иван", date: "июнь 2025" },
            { text: "Формат прогулки отличный, время пролетело незаметно. Рекомендую!", author: "Ольга", date: "май 2025" }
        ],
        images: [
            "https://via.placeholder.com/800x500?text=Исторический+центр+1",
            "https://via.placeholder.com/800x500?text=Исторический+центр+2",
            "https://via.placeholder.com/800x500?text=Исторический+центр+3",
            "https://via.placeholder.com/800x500?text=Исторический+центр+4"
        ],
        similar: [2, 3, 5]
    },
    {
        id: 2,
        title: "Парки и усадьбы",
        duration: "4 часа",
        difficulty: "Средняя",
        maxPeople: 7,
        basePrice: 4000,
        description: "<p>Зелёные оазисы города и архитектурные жемчужины. Вы посетите старинные парки, усадьбы и узнаете их историю.</p><p>Идеально для семейного отдыха и любителей природы.</p>",
        routeItems: [
            "🌳 Центральный парк",
            "🏛️ Усадьба графа N",
            "🌲 Ботанический сад",
            "⛲ ФонтНаталия площадь"
        ],
        mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..." width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        reviews: [
            { text: "Прекрасная прогулка по паркам, очень живописно!", author: "Алексей", date: "апрель 2025" }
        ],
        images: [
            "https://via.placeholder.com/800x500?text=Парки+и+усадьбы+1",
            "https://via.placeholder.com/800x500?text=Парки+и+усадьбы+2",
            "https://via.placeholder.com/800x500?text=Парки+и+усадьбы+3"
        ],
        similar: [1, 3, 4]
    },
    {
        id: 3,
        title: "Вечерний огонёк",
        duration: "2.5 часа",
        difficulty: "Лёгкая",
        maxPeople: 4,
        basePrice: 3500,
        description: "<p>Ночной город, романтика и небанальные маршруты. Увидите город в огнях и услышите мистические истории.</p><p>Эксклюзивные виды на подсвеченные мосты и крыши.</p>",
        routeItems: [
            "🌃 Набережная",
            "🌉 Подсвеченные мосты",
            "🏰 Старая крепость",
            "✨ Смотровая площадка"
        ],
        mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..." width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        reviews: [
            { text: "Очень атмосферно! Город ночью совсем другой.", author: "Марина", date: "март 2025" }
        ],
        images: [
            "https://via.placeholder.com/800x500?text=Вечерний+огонёк+1",
            "https://via.placeholder.com/800x500?text=Вечерний+огонёк+2",
            "https://via.placeholder.com/800x500?text=Вечерний+огонёк+3"
        ],
        similar: [1, 5, 6]
    },
    {
        id: 4,
        title: "Гастротур",
        duration: "3.5 часа",
        difficulty: "Лёгкая",
        maxPeople: 6,
        basePrice: 4500,
        description: "<p>Погружение в местную кухню: посетим лучшие рестораны, рынки и попробуем традиционные блюда.</p><p>Вас ждут дегустации, рассказы о кулинарных традициях и секретные заведения.</p>",
        routeItems: [
            "🥘 Центральный рынок",
            "🍷 Улица ресторанов",
            "🍰 Дегустация десертов",
            "☕ Кофейная лавка"
        ],
        mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..." width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        reviews: [
            { text: "Очень вкусно! Узнали много о местных продуктах.", author: "Игорь", date: "февраль 2025" }
        ],
        images: [
            "https://via.placeholder.com/800x500?text=Гастротур+1",
            "https://via.placeholder.com/800x500?text=Гастротур+2"
        ],
        similar: [2, 8, 9]
    },
    {
        id: 5,
        title: "Мистический город",
        duration: "3 часа",
        difficulty: "Средняя",
        maxPeople: 6,
        basePrice: 3800,
        description: "<p>Легенды и мифы старого города. Вы узнаете о призраках, тайных обществах и загадочных событиях, которые происходили на этих улицах.</p>",
        routeItems: [
            "👻 Дом с привидениями",
            "🔮 Старая аптека",
            "⚰️ Заброшенное кладбище",
            "🕯️ Подземелья"
        ],
        mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..." width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        reviews: [
            { text: "Мурашки по коже! Очень увлекательно и страшно интересно.", author: "Елена", date: "январь 2025" }
        ],
        images: [
            "https://via.placeholder.com/800x500?text=Мистический+город+1",
            "https://via.placeholder.com/800x500?text=Мистический+город+2",
            "https://via.placeholder.com/800x500?text=Мистический+город+3"
        ],
        similar: [3, 6, 10]
    },
    {
        id: 6,
        title: "Архитектурный модерн",
        duration: "2.5 часа",
        difficulty: "Лёгкая",
        maxPeople: 8,
        basePrice: 3200,
        description: "<p>Шедевры архитектуры в стиле модерн. Дома с историей, необычные фасады и детали, на которые обычно не обращают внимания.</p>",
        routeItems: [
            "🏛️ Доходный дом купца",
            "🎨 Особняк с майоликой",
            "🦉 Дом с совами",
            "🚪 Парадные с витражами"
        ],
        mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..." width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        reviews: [
            { text: "Очень красиво! Узнала много нового о любимом городе.", author: "Наталья", date: "декабрь 2024" }
        ],
        images: [
            "https://via.placeholder.com/800x500?text=Архитектурный+модерн+1",
            "https://via.placeholder.com/800x500?text=Архитектурный+модерн+2"
        ],
        similar: [1, 5, 7]
    },
    {
        id: 7,
        title: "Фотопрогулка",
        duration: "2 часа",
        difficulty: "Лёгкая",
        maxPeople: 4,
        basePrice: 5000,
        description: "<p>Экскурсия для тех, кто хочет получить красивые фото в атмосферных местах. Я покажу лучшие локации и помогу с ракурсами.</p><p>Подходит как для индивидуальных, так и для пар.</p>",
        routeItems: [
            "📸 Смотровая с видом на закат",
            "🏛️ Уютные улочки",
            "🌳 Парк с аллеями",
            "🌉 Мост влюблённых"
        ],
        mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..." width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        reviews: [
            { text: "Фото получились шикарные! Натали знает все секретные места.", author: "Ксения", date: "ноябрь 2024" }
        ],
        images: [
            "https://via.placeholder.com/800x500?text=Фотопрогулка+1",
            "https://via.placeholder.com/800x500?text=Фотопрогулка+2",
            "https://via.placeholder.com/800x500?text=Фотопрогулка+3"
        ],
        similar: [1, 3, 8]
    },
    {
        id: 8,
        title: "Секретные дворики",
        duration: "2 часа",
        difficulty: "Лёгкая",
        maxPeople: 5,
        basePrice: 2800,
        description: "<p>Неформальные достопримечательности, скрытые от глаз туристов. Уютные дворики, граффити, необычные скульптуры и тихие уголки.</p>",
        routeItems: [
            "🏘️ Дворик с муралами",
            "⛲ Дворик с фонтаном",
            "🐱 Кошачий дворик",
            "📚 Дворик с книгами"
        ],
        mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..." width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        reviews: [
            { text: "Очень душевно! Чувствуешь себя местным жителем.", author: "Михаил", date: "октябрь 2024" }
        ],
        images: [
            "https://via.placeholder.com/800x500?text=Секретные+дворики+1",
            "https://via.placeholder.com/800x500?text=Секретные+дворики+2",
            "https://via.placeholder.com/800x500?text=Секретные+дворики+3"
        ],
        similar: [1, 6, 10]
    },
    {
        id: 9,
        title: "Купеческий размах",
        duration: "3 часа",
        difficulty: "Средняя",
        maxPeople: 8,
        basePrice: 4200,
        description: "<p>История купечества: особняки, лавки, традиции. Вы узнаете, как жили богатейшие люди города, и увидите их дома изнутри.</p>",
        routeItems: [
            "💰 Особняк золотопромышленника",
            "🏬 Торговая лавка",
            "🏦 Банк купцов",
            "🏛️ Биржа"
        ],
        mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..." width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        reviews: [
            { text: "Очень атмосферно, будто перенёсся в 19 век.", author: "Денис", date: "сентябрь 2024" }
        ],
        images: [
            "https://via.placeholder.com/800x500?text=Купеческий+размах+1",
            "https://via.placeholder.com/800x500?text=Купеческий+размах+2",
            "https://via.placeholder.com/800x500?text=Купеческий+размах+3"
        ],
        similar: [1, 2, 4]
    },
    {
        id: 10,
        title: "Речная прогулка",
        duration: "2 часа",
        difficulty: "Лёгкая",
        maxPeople: 6,
        basePrice: 5000,
        description: "<p>Путешествие по реке на катере. Увидите город с воды, узнаете историю набережных и мостов. Романтика и свежий воздух.</p>",
        routeItems: [
            "🛥️ Причал №1",
            "🌉 Мост трёх веков",
            "🏰 Кремль с воды",
            "🏞️ Зелёный остров"
        ],
        mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..." width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        reviews: [
            { text: "Незабываемо! Виды открываются потрясающие.", author: "Светлана", date: "август 2024" }
        ],
        images: [
            "https://via.placeholder.com/800x500?text=Речная+прогулка+1",
            "https://via.placeholder.com/800x500?text=Речная+прогулка+2",
            "https://via.placeholder.com/800x500?text=Речная+прогулка+3"
        ],
        similar: [3, 5, 7]
    }
];

// ============================================
// ФУНКЦИЯ ОТПРАВКИ ФОРМ (общая)
// ============================================
async function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const messageEl = form.querySelector('.form-message');

    // Укажите ваш endpoint (для Netlify или другой платформы)
    const endpoint = '/netlify/functions/sendMessage';

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        if (result.success) {
            messageEl.textContent = 'Спасибо! Мы свяжемся с вами в ближайшее время.';
            messageEl.style.color = 'green';
            form.reset();
        } else {
            messageEl.textContent = 'Ошибка при отправке. Попробуйте позже.';
            messageEl.style.color = 'red';
        }
    } catch (error) {
        messageEl.textContent = 'Ошибка соединения. Проверьте интернет.';
        messageEl.style.color = 'red';
        console.error(error);
    }
}

// ============================================
// ФУНКЦИЯ ЗАГРУЗКИ ДАННЫХ ЭКСКУРСИИ (только для tour.html)
// ============================================
function loadTourData() {
    const urlParams = new URLSearchParams(window.location.search);
    const tourId = parseInt(urlParams.get('id'));
    const tour = toursData.find(t => t.id === tourId);

    if (!tour) {
        // Если экскурсия не найдена, перенаправляем на главную
        window.location.href = 'index.html';
        return;
    }

    // Заголовок
    document.getElementById('tour-title').textContent = tour.title;
    document.getElementById('tour-name-hidden').value = tour.title;

    // Мета-информация
    const metaDiv = document.getElementById('tour-meta');
    metaDiv.innerHTML = `
        <span><i class="fas fa-clock"></i> ${tour.duration}</span>
        <span><i class="fas fa-signal"></i> ${tour.difficulty}</span>
        <span><i class="fas fa-users"></i> До ${tour.maxPeople} чел.</span>
        <span><i class="fas fa-tag"></i> ${tour.basePrice}₽</span>
    `;

    // Цена
    document.querySelector('#tour-price span').textContent = `${tour.basePrice} ₽ за группу`;

    // Галерея
    const mainImage = document.getElementById('main-image');
    const thumbnailsContainer = document.getElementById('thumbnails');

    if (tour.images.length > 0) {
        mainImage.src = tour.images[0];
        thumbnailsContainer.innerHTML = '';
        tour.images.forEach((imgSrc, index) => {
            const thumb = document.createElement('img');
            thumb.src = imgSrc.replace('800x500', '150x100'); // для превью
            thumb.alt = `Фото ${index + 1}`;
            thumb.classList.add('thumbnail');
            if (index === 0) thumb.classList.add('active');
            thumb.dataset.full = imgSrc;
            thumb.addEventListener('click', function () {
                document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                mainImage.src = this.dataset.full;
            });
            thumbnailsContainer.appendChild(thumb);
        });
    }

    // Описание
    document.getElementById('description').innerHTML = tour.description;



    // Отзывы
    document.getElementById('reviews').innerHTML = tour.reviews.map(r => `
        <div class="review-item">
            <p>«${r.text}»</p>
            <cite>— ${r.author}, ${r.date}</cite>
        </div>
    `).join('') + '<a href="#" class="btn-small">Все отзывы</a>';

    // Похожие экскурсии
    const similarContainer = document.getElementById('similar-tours');
    const similarTours = toursData.filter(t => tour.similar.includes(t.id));
    similarContainer.innerHTML = similarTours.map(t => `
        <div class="card">
            <img src="${t.images[0]}" alt="${t.title}">
            <h3>${t.title}</h3>
            <p>${t.description.replace(/<[^>]*>/g, '').substring(0, 50)}...</p>
            <a href="tour.html?id=${t.id}" class="btn-small">Подробнее</a>
        </div>
    `).join('');

    // Калькулятор цены
    const peopleInput = document.getElementById('people-input');
    const totalSpan = document.getElementById('total');
    const basePrice = tour.basePrice;

    function updateTotal() {
        const count = parseInt(peopleInput.value) || 1;
        totalSpan.textContent = basePrice * count;
    }

    peopleInput.addEventListener('input', updateTotal);
    updateTotal();
}

// ============================================
// ГЛАВНЫЙ ОБРАБОТЧИК ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    // 1. Код, специфичный для страницы экскурсии (tour.html)
    if (document.getElementById('tour-detail')) {
        loadTourData();

        // Табы
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');
        tabButtons.forEach(btn => {
            btn.addEventListener('click', function () {
                const tabId = this.dataset.tab;
                tabButtons.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));
                this.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });

        // Аккордеон FAQ
        const accordionHeaders = document.querySelectorAll('.accordion-header');
        accordionHeaders.forEach(header => {
            header.addEventListener('click', function () {
                this.classList.toggle('active');
                const content = this.nextElementSibling;
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

    // 2. Код, общий для всех страниц

    // Плавная прокрутка по якорям
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Параллакс для hero-секции (если она есть на странице)
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.backgroundPositionY = -(scrolled * 0.3) + 'px';
        }
    });

    // Обработка форм (если они есть на странице)
    const quickForm = document.getElementById('quick-form');
    if (quickForm) quickForm.addEventListener('submit', handleFormSubmit);

    const tourForm = document.getElementById('tour-form');
    if (tourForm) tourForm.addEventListener('submit', handleFormSubmit);

    // 3. Инициализация слайдера (только на главной)
    initSlider();
});
// ============================================
// СЛАЙДЕР НА ГЛАВНОЙ СТРАНИЦЕ
// ============================================
function initSlider() {
    const wrapper = document.getElementById('slider-wrapper');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('slider-dots');
    
    if (!wrapper) return; // Если слайдера нет на странице, выходим

    // Создаём карточки экскурсий из массива toursData
    function renderCards() {
        wrapper.innerHTML = '';
        toursData.forEach(tour => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${tour.images[0]}" alt="${tour.title}">
                <h3>${tour.title}</h3>
                <p>${tour.description.replace(/<[^>]*>/g, '').substring(0, 80)}...</p>
                <a href="tour.html?id=${tour.id}" class="btn-small">Подробнее</a>
            `;
            wrapper.appendChild(card);
        });
    }

    renderCards();

    const cards = document.querySelectorAll('.slider-wrapper .card');
    const cardCount = cards.length;
    let currentIndex = 0;
    let cardsPerView = getCardsPerView();

    // Определяем количество видимых карточек в зависимости от ширины экрана
    function getCardsPerView() {
        if (window.innerWidth <= 576) return 1;
        if (window.innerWidth <= 992) return 2;
        return 3;
    }

    // Обновляем состояние кнопок и точек
    function updateSlider() {
        const cardWidth = cards[0]?.offsetWidth || 0;
        const gap = 20; // должно совпадать с gap в CSS
        const offset = currentIndex * (cardWidth + gap);
        wrapper.style.transform = `translateX(-${offset}px)`;

        // Прячем кнопки, если нельзя листать дальше
        if (prevBtn) {
            prevBtn.classList.toggle('hidden', currentIndex === 0);
        }
        if (nextBtn) {
            const maxIndex = Math.max(0, cardCount - cardsPerView);
            nextBtn.classList.toggle('hidden', currentIndex >= maxIndex);
        }

        // Обновляем точки
        if (dotsContainer) {
            const dots = dotsContainer.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }
    }

    // Создаём точки навигации
    function createDots() {
        if (!dotsContainer) return;
        dotsContainer.innerHTML = '';
        const maxIndex = Math.max(0, cardCount - cardsPerView);
        for (let i = 0; i <= maxIndex; i++) {
            const dot = document.createElement('span');
            dot.className = 'dot';
            dot.addEventListener('click', () => {
                currentIndex = i;
                updateSlider();
            });
            dotsContainer.appendChild(dot);
        }
        updateSlider();
    }

    // Обработчики кнопок
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const maxIndex = Math.max(0, cardCount - cardsPerView);
            if (currentIndex < maxIndex) {
                currentIndex++;
                updateSlider();
            }
        });
    }

    // Пересчитываем при изменении размера окна
    window.addEventListener('resize', () => {
        const newCardsPerView = getCardsPerView();
        if (newCardsPerView !== cardsPerView) {
            cardsPerView = newCardsPerView;
            currentIndex = Math.min(currentIndex, Math.max(0, cardCount - cardsPerView));
            createDots();
            updateSlider();
        } else {
            updateSlider(); // просто обновляем позицию
        }
    });

    createDots();
}

// Запускаем слайдер после загрузки всех данных
// Добавьте эту строку внутрь DOMContentLoaded, после остального кода:
// initSlider();

// Я обновил основной блок DOMContentLoaded, чтобы он включал слайдер.
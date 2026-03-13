export const toursData = [
    {
        id: 1,
        title: "Исторический центр",
        duration: 3,
        durationText: "3 часа",
        difficulty: "Лёгкая",
        maxPeople: 5,
        basePrice: 3000,
        shortDescription: "Погружение в историю: старинные улочки, соборы и тайны прошлого.",
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
            { text: "Очень познавательная экскурсия, Анна прекрасный рассказчик! Узнали много нового о городе.", author: "Иван", date: "июнь 2025" },
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
        duration: 4,
        durationText: "4 часа",
        difficulty: "Средняя",
        maxPeople: 7,
        basePrice: 4000,
        shortDescription: "Зелёные оазисы города и архитектурные жемчужины.",
        description: "<p>Зелёные оазисы города и архитектурные жемчужины. Вы посетите старинные парки, усадьбы и узнаете их историю.</p><p>Идеально для семейного отдыха и любителей природы.</p>",
        routeItems: [
            "🌳 Центральный парк",
            "🏛️ Усадьба графа N",
            "🌲 Ботанический сад",
            "⛲ Фонтанная площадь"
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
        duration: 2.5,
        durationText: "2.5 часа",
        difficulty: "Лёгкая",
        maxPeople: 4,
        basePrice: 3500,
        shortDescription: "Ночной город, романтика и небанальные маршруты.",
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
        duration: 3.5,
        durationText: "3.5 часа",
        difficulty: "Лёгкая",
        maxPeople: 6,
        basePrice: 4500,
        shortDescription: "Погружение в местную кухню.",
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
        duration: 3,
        durationText: "3 часа",
        difficulty: "Средняя",
        maxPeople: 6,
        basePrice: 3800,
        shortDescription: "Легенды и мифы старого города.",
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
        duration: 2.5,
        durationText: "2.5 часа",
        difficulty: "Лёгкая",
        maxPeople: 8,
        basePrice: 3200,
        shortDescription: "Шедевры архитектуры в стиле модерн.",
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
        duration: 2,
        durationText: "2 часа",
        difficulty: "Лёгкая",
        maxPeople: 4,
        basePrice: 5000,
        shortDescription: "Экскурсия для красивых фото.",
        description: "<p>Экскурсия для тех, кто хочет получить красивые фото в атмосферных местах. Я покажу лучшие локации и помогу с ракурсами.</p><p>Подходит как для индивидуальных, так и для пар.</p>",
        routeItems: [
            "📸 Смотровая с видом на закат",
            "🏛️ Уютные улочки",
            "🌳 Парк с аллеями",
            "🌉 Мост влюблённых"
        ],
        mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..." width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        reviews: [
            { text: "Фото получились шикарные! Анна знает все секретные места.", author: "Ксения", date: "ноябрь 2024" }
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
        duration: 2,
        durationText: "2 часа",
        difficulty: "Лёгкая",
        maxPeople: 5,
        basePrice: 2800,
        shortDescription: "Неформальные достопримечательности.",
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
        duration: 3,
        durationText: "3 часа",
        difficulty: "Средняя",
        maxPeople: 8,
        basePrice: 4200,
        shortDescription: "История купечества и роскоши.",
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
        duration: 2,
        durationText: "2 часа",
        difficulty: "Лёгкая",
        maxPeople: 6,
        basePrice: 5000,
        shortDescription: "Путешествие по реке на катере.",
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

export function getTourById(id) {
    return toursData.find(tour => tour.id === parseInt(id));
}

export function getSimilarTours(ids) {
    return toursData.filter(tour => ids.includes(tour.id));
}
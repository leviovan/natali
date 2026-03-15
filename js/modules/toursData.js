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
        tariffs: [
            { name: "Индивидуальная", price: 3000, description: "до 5 человек", icon: "user" },
            { name: "Групповая", price: 1500, description: "с человека (от 6 чел)", icon: "users" },
            { name: "Фотосессия", price: 5000, description: "1 час + 20 фото", icon: "camera" },
            { name: "Детская", price: 2000, description: "до 10 детей + 2 взрослых", icon: "child" }
        ],
        routeItems: [
            "🏛️ Площадь Свободы – начало экскурсии",
            "⛪ Соборная улица – 3 храма",
            "🏘️ Купеческий квартал",
            "🌳 Городской парк",
            "🏰 Смотровая башня"
        ],
        mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.123456789" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        reviews: [
            { text: "Очень познавательная экскурсия, Анна прекрасный рассказчик! Узнали много нового о городе.", author: "Иван", date: "июнь 2025" },
            { text: "Формат прогулки отличный, время пролетело незаметно. Рекомендую!", author: "Ольга", date: "май 2025" }
        ],
        images: [
            "https://images.unsplash.com/photo-1558383331-5193a52aa2c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
        tariffs: [
            { name: "Индивидуальная", price: 4000, description: "до 7 человек", icon: "user" },
            { name: "Групповая", price: 2000, description: "с человека (от 8 чел)", icon: "users" },
            { name: "Фотосессия", price: 6000, description: "1.5 часа + 30 фото", icon: "camera" },
            { name: "Семейная", price: 5000, description: "до 4 человек + дети", icon: "family" }
        ],
        routeItems: [
            "🌳 Центральный парк",
            "🏛️ Усадьба графа N",
            "🌲 Ботанический сад",
            "⛲ Фонтанная площадь"
        ],
        mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.123456789" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        reviews: [
            { text: "Прекрасная прогулка по паркам, очень живописно!", author: "Алексей", date: "апрель 2025" }
        ],
        images: [
            "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
        tariffs: [
            { name: "Индивидуальная", price: 3500, description: "до 4 человек", icon: "user" },
            { name: "Романтическая", price: 5000, description: "для двоих + шампанское", icon: "heart" },
            { name: "Фотосессия", price: 5500, description: "ночная съёмка", icon: "camera" }
        ],
        routeItems: [
            "🌃 Набережная",
            "🌉 Подсвеченные мосты",
            "🏰 Старая крепость",
            "✨ Смотровая площадка"
        ],
        mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.123456789" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        reviews: [
            { text: "Очень атмосферно! Город ночью совсем другой.", author: "Марина", date: "март 2025" }
        ],
        images: [
            "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        similar: [1, 5, 6]
    },
    {
        id: 4,
        title: "Вечерний огонёк",
        duration: 2.5,
        durationText: "2.5 часа",
        difficulty: "Лёгкая",
        maxPeople: 4,
        basePrice: 3500,
        shortDescription: "Ночной город, романтика и небанальные маршруты.",
        description: "<p>Ночной город, романтика и небанальные маршруты. Увидите город в огнях и услышите мистические истории.</p><p>Эксклюзивные виды на подсвеченные мосты и крыши.</p>",
        tariffs: [
            { name: "Индивидуальная", price: 3500, description: "до 4 человек", icon: "user" },
            { name: "Романтическая", price: 5000, description: "для двоих + шампанское", icon: "heart" },
            { name: "Фотосессия", price: 5500, description: "ночная съёмка", icon: "camera" }
        ],
        routeItems: [
            "🌃 Набережная",
            "🌉 Подсвеченные мосты",
            "🏰 Старая крепость",
            "✨ Смотровая площадка"
        ],
        mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.123456789" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        reviews: [
            { text: "Очень атмосферно! Город ночью совсем другой.", author: "Марина", date: "март 2025" }
        ],
        images: [
            "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        similar: [1, 5, 6]
    },
    {
        id: 4,
        title: "Вечерний огонёк",
        duration: 2.5,
        durationText: "2.5 часа",
        difficulty: "Лёгкая",
        maxPeople: 4,
        basePrice: 3500,
        shortDescription: "Ночной город, романтика и небанальные маршруты.",
        description: "<p>Ночной город, романтика и небанальные маршруты. Увидите город в огнях и услышите мистические истории.</p><p>Эксклюзивные виды на подсвеченные мосты и крыши.</p>",
        tariffs: [
            { name: "Индивидуальная", price: 3500, description: "до 4 человек", icon: "user" },
            { name: "Романтическая", price: 5000, description: "для двоих + шампанское", icon: "heart" },
            { name: "Фотосессия", price: 5500, description: "ночная съёмка", icon: "camera" }
        ],
        routeItems: [
            "🌃 Набережная",
            "🌉 Подсвеченные мосты",
            "🏰 Старая крепость",
            "✨ Смотровая площадка"
        ],
        mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.123456789" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        reviews: [
            { text: "Очень атмосферно! Город ночью совсем другой.", author: "Марина", date: "март 2025" }
        ],
        images: [
            "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        similar: [1, 5, 6]
    }
];

export function getTourById(id) {
    return toursData.find(tour => tour.id === parseInt(id));
}
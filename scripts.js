const cards = document.querySelectorAll('.project-card');

// Анимация появления карточек
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

cards.forEach(card => observer.observe(card));

// Кастомный курсор
const cursor = document.querySelector('.cursor-follower');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// Анимация навбара при скролле
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Переводы
const translations = {
    ru: {
        title: "Портфолио Front-end Разработчика",
        about: "Обо мне",
        projects: "Проекты",
        skills: "Навыки",
        contact: "Контакты",
        heroTitle: "Привет, я <span>Front-end</span><br>Разработчик",
        heroDescription: "Создаю современные и интерактивные веб-приложения, используя передовые технологии и лучшие практики разработки.",
        viewProjects: "Смотреть проекты",
        projectsTitle: "Мои проекты",
        project1Title: "E-commerce платформа",
        project1Description: "Современный интернет-магазин с адаптивным дизайном и корзиной покупок",
        project2Title: "Дашборд аналитики",
        project2Description: "Панель управления с визуализацией данных и real-time обновлениями",
        project3Title: "Социальная платформа",
        project3Description: "Приложение для общения с чатом и системой уведомлений",
        skillsTitle: "Мои навыки",
        contactFormTitle: "Связаться со мной",
        name: "Ваше имя",
        email: "Ваш email",
        message: "Ваше сообщение",
        send: "Отправить",
        footerText: "© 2024 Front-end Developer. Все права защищены.",
    },
    ky: {
        title: "Фронт-энд Разработчик Портфолиосу",
        about: "Мен жөнүндө",
        projects: "Долбоорлор",
        skills: "Көндүмдөр",
        contact: "Байланыш",
        heroTitle: "Салам, мен <span>Фронт-энд</span><br>Разработчикмин",
        heroDescription: "Мен интерактивдүү жана заманбап веб-тиркемелерди жаратам, жаңы технологиялар менен мыкты практикаларды колдонуу аркылуу.",
        viewProjects: "Долбоорлорду көрүү",
        projectsTitle: "Менин долбоорлорум",
        project1Title: "E-commerce платформасы",
        project1Description: "Адаптивдүү дизайн жана соода себети бар заманбап интернет-дүкөн",
        project2Title: "Аналитика дашборду",
        project2Description: "Маалыматтарды визуализациялоочу жана real-time жаңыртуулары бар башкаруу панели",
        project3Title: "Социалдык платформа",
        project3Description: "Чат жана билдирүүлөр системасы бар баарлашуу колдонмосу",
        skillsTitle: "Менин көндүмдөрүм",
        contactFormTitle: "Мага байланышуу",
        name: "Сиздин атыңыз",
        email: "Сиздин email",
        message: "Сиздин билдирүүңүз",
        send: "Жөнөтүү",
        footerText: "© 2024 Фронт-энд Разработчик. Бардык укуктар корголгон.",
    },
};

// Текущий язык
let currentLang = 'ru';

// Переключение языка
document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'ru' ? 'ky' : 'ru';
    document.getElementById('lang-toggle').textContent = currentLang === 'ru' ? 'Кыргыз' : 'Русский';
    updateLanguage();
});

// Обновление текстов
function updateLanguage() {
    // Обновление текста
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerHTML = translations[currentLang][key];
    });

    // Обновление плейсхолдеров
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = translations[currentLang][key];
    });

    // Обновление тайтла
    document.title = translations[currentLang].title;
}

// Инициализация
updateLanguage();

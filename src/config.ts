export type Lang = "en" | "ru";

const en = {
    developer: {
        name: "Mykyta",
        fullName: "Mykyta Koltsov",
        title: "Full-Stack Developer",
        description: "Full-stack developer with an entrepreneur's vision — I automate businesses and build whatever can be coded: web, tools, AI systems and API integrations that make money and run themselves."
    },
    social: {
        github: "calciumchess-debug",
        email: "mykytakoltsov@gmail.com",
        location: "Remote / Dubai"
    },
    about: {
        title: "About Me",
        description: "I'm Mykyta Koltsov — a full-stack developer with an entrepreneur's vision. I spot where a business loses time or money and automate it into a system that pays for itself. If it can be programmed, I build it — web apps, landing pages, dashboards, bots, integrations with any API. My strong side is automation and AI-driven data work: LLMs and computer vision wired into pipelines that filter, classify and decide. Full stack end-to-end — Python/Node, React/TypeScript, PostgreSQL — deployed and running."
    },
    experiences: [
        {
            position: "Automation & Integrations",
            company: "APIs, workflows & control panels",
            period: "AUTO",
            location: "Remote",
            description: "I connect to any API or service and turn manual routine into automated workflows — data collection, processing and reporting — with a clean dashboard or admin panel on top to run it all.",
            responsibilities: [],
            technologies: ["Automation", "REST APIs", "Webhooks", "Dashboards", "Google APIs", "Python"]
        },
        {
            position: "AI & Data Engineering",
            company: "LLM pipelines & data",
            period: "AI",
            location: "Remote",
            description: "I build AI pipelines that understand data by meaning — model-agnostic LLM setups with fallback, computer vision, RAG and cost-optimized cascades — on top of scraping, monitoring and solid databases.",
            responsibilities: [],
            technologies: ["LLMs", "Computer Vision", "RAG", "Scraping", "PostgreSQL", "Pandas"]
        },
        {
            position: "Full-Stack Development",
            company: "Web, backend & products",
            period: "FULL-STACK",
            location: "Remote",
            description: "I ship complete products — web apps, dashboards, APIs and bots — with a React/TypeScript front, Python or Node back and PostgreSQL, payments and admin panels, deployed and self-healing.",
            responsibilities: [],
            technologies: ["React", "TypeScript", "Node", "Python", "PostgreSQL", "Vercel"]
        }
    ],
    projects: [
        { id: 1, title: "Work Telegram Bot", category: "AI Platform", technologies: "Python, PostgreSQL, LLMs, Telethon", image: "/images/worksnipers.png", description: "A production job-search platform that finds the right vacancy for each user instead of drowning them in a feed. It mines Telegram groups and job boards in real time, then a three-tier AI pipeline structures every listing, scores the match and filters out scams — cutting AI cost by ~70%. Runs 24/7 on a VPS: PostgreSQL, multi-account mining, instant search via a pre-indexed crawler.", link: "" },
        { id: 2, title: "AutoFlow", category: "Business Automation · Private commission", technologies: "Python, REST APIs, Google Sheets, Dashboard, VPS", image: "/images/Prodesk.png", description: "A private client commission built to wipe out a full day of manual routine. The system connects to the client's tools by API, pulls data from several sources, cleans and enriches it with rules and AI, then delivers ready results to a live dashboard, Google Sheets and Telegram on schedule. What used to take hours of copy-paste now runs by itself and reports back — deployed on a VPS, monitored, fully hands-off.", link: "" },
        { id: 3, title: "Delist Sniper", category: "Trading Bot", technologies: "Python, Binance API, Strategy, Paper Trading", image: "/images/RedxChess.png", description: "Tracks Binance delisting announcements and opens short positions by strategy. Fully automatic entry/exit logic with a paper-trading mode for safe testing.", link: "" }
    ],
    contact: {
        email: "mykytakoltsov@gmail.com",
        github: "https://github.com/calciumchess-debug",
        linkedin: "https://instagram.com/nick_calcium",
        twitter: "https://instagram.com/nick_calcium",
        facebook: "https://instagram.com/nick_calcium",
        instagram: "https://instagram.com/nick_calcium",
        telegram: "https://t.me/foounder",
        whatsapp: "https://wa.me/971524893133"
    },
    skills: {
        develop: { title: "FULL-STACK DEVELOPMENT", description: "Web apps, landing pages, dashboards & APIs — front to back", details: "Complete products end-to-end — web apps, landing pages and admin dashboards on React/TypeScript, backends and APIs on Python or Node, PostgreSQL underneath. Deployed and monitored.", tools: ["Python", "Node", "React", "TypeScript", "FastAPI", "PostgreSQL", "REST APIs", "Docker", "Git", "Vercel"] },
        design: { title: "AUTOMATION & AI", description: "Automate any workflow, connect any API, add AI on top", details: "I connect to any API and automate workflows end-to-end, then wire in AI — LLM pipelines, computer vision, scraping and monitoring — behind a clean control panel. Deployed on a VPS.", tools: ["Automation", "REST APIs", "Webhooks", "LLMs", "Computer Vision", "Scraping", "Monitoring", "Dashboards", "Pandas", "VPS"] }
    },
    ui: {
        hello: "Hello! I'm",
        an: "",
        roles: ["Full-Stack", "Developer", "AI Engineer"],
        nav: { about: "ABOUT", work: "WORK", contact: "CONTACT" },
        resume: "RESUME",
        hire: "Hire Me",
        careerTitle1: "My", careerTitle2: "skills",
        whatIDo: "WHAT I DO",
        workTitle: "My work",
        contactEmail: "Email", contactLocation: "Location", contactSocial: "Social",
        designedBy: "Designed and Developed",
        by: "by"
    }
};

const ru: typeof en = {
    developer: {
        name: "Никита",
        fullName: "Mykyta Koltsov",
        title: "Full-Stack Developer",
        description: "Full-stack разработчик с предпринимательским видением — автоматизирую бизнес и делаю всё, что можно запрограммировать: веб, инструменты, ИИ-системы и интеграции по API, которые зарабатывают и работают сами."
    },
    social: {
        github: "calciumchess-debug",
        email: "mykytakoltsov@gmail.com",
        location: "Удалённо / Дубай"
    },
    about: {
        title: "Обо мне",
        description: "Я Mykyta Koltsov — full-stack разработчик с предпринимательским видением. Вижу, где бизнес теряет время или деньги, и автоматизирую это в систему, которая себя окупает. Если это можно запрограммировать — сделаю: веб-приложения, лендинги, дашборды, боты, интеграции с любым API. Сильная сторона — автоматизация и работа с данными через ИИ: LLM и компьютерное зрение в конвейерах, которые фильтруют, классифицируют и решают. Весь стек под ключ — Python/Node, React/TypeScript, PostgreSQL — с деплоем."
    },
    experiences: [
        {
            position: "Автоматизация и интеграции",
            company: "API, процессы и панели",
            period: "AUTO",
            location: "Удалённо",
            description: "Подключаюсь к любому API или сервису и превращаю ручную рутину в автоматизированные процессы — сбор, обработка и отчётность — с удобным дашбордом или админ-панелью сверху, чтобы всем этим управлять.",
            responsibilities: [],
            technologies: ["Автоматизация", "REST API", "Webhooks", "Дашборды", "Google API", "Python"]
        },
        {
            position: "ИИ и Data Engineering",
            company: "LLM-конвейеры и данные",
            period: "AI",
            location: "Удалённо",
            description: "Строю ИИ-конвейеры, которые понимают данные по смыслу — модель-агностик LLM-связки с фолбэком, компьютерное зрение, RAG и cost-optimized каскады — поверх парсинга, мониторинга и надёжных баз.",
            responsibilities: [],
            technologies: ["LLM", "Computer Vision", "RAG", "Парсинг", "PostgreSQL", "Pandas"]
        },
        {
            position: "Full-Stack разработка",
            company: "Веб, бэкенд и продукты",
            period: "FULL-STACK",
            location: "Удалённо",
            description: "Собираю продукты целиком — веб-приложения, дашборды, API и ботов — с фронтом на React/TypeScript, бэком на Python или Node и PostgreSQL, оплатами и админ-панелями, задеплоенные и самовосстанавливающиеся.",
            responsibilities: [],
            technologies: ["React", "TypeScript", "Node", "Python", "PostgreSQL", "Vercel"]
        }
    ],
    projects: [
        { id: 1, title: "Work Telegram Bot", category: "ИИ-платформа", technologies: "Python, PostgreSQL, LLM, Telethon", image: "/images/worksnipers.png", description: "Продакшн-платформа поиска работы, которая находит нужную вакансию под человека, а не заваливает лентой. В реальном времени собирает данные из Telegram-групп и с сайтов работы, а трёхуровневый ИИ-конвейер структурирует каждое объявление, оценивает совпадение и отсеивает скам — экономя ~70% на ИИ. Работает 24/7 на VPS: PostgreSQL, мультиаккаунтный майнинг, мгновенный поиск через предындексный краулер.", link: "" },
        { id: 2, title: "AutoFlow", category: "Бизнес-автоматизация · Частный заказ", technologies: "Python, REST API, Google Sheets, Дашборд, VPS", image: "/images/Prodesk.png", description: "Частный заказ — сделан, чтобы убрать целый день ручной рутины. Система по API подключается к сервисам клиента, тянет данные из нескольких источников, чистит и обогащает их правилами и ИИ, затем по расписанию отдаёт готовый результат в живой дашборд, Google Sheets и Telegram. То, что раньше отнимало часы копипаста, теперь работает само и отчитывается — задеплоено на VPS, под мониторингом, полностью без ручного вмешательства.", link: "" },
        { id: 3, title: "Delist Sniper", category: "Торговый бот", technologies: "Python, Binance API, Стратегия, Paper Trading", image: "/images/RedxChess.png", description: "Отслеживает объявления Binance о делистинге монет и открывает шорты по стратегии. Полностью автоматическая логика входа/выхода, режим paper-trading для безопасной обкатки.", link: "" }
    ],
    contact: {
        email: "mykytakoltsov@gmail.com",
        github: "https://github.com/calciumchess-debug",
        linkedin: "https://instagram.com/nick_calcium",
        twitter: "https://instagram.com/nick_calcium",
        facebook: "https://instagram.com/nick_calcium",
        instagram: "https://instagram.com/nick_calcium",
        telegram: "https://t.me/foounder",
        whatsapp: "https://wa.me/971524893133"
    },
    skills: {
        develop: { title: "FULL-STACK РАЗРАБОТКА", description: "Веб-приложения, лендинги, дашборды и API — от фронта до бэка", details: "Продукты целиком — веб-приложения, лендинги и админ-дашборды на React/TypeScript, бэкенды и API на Python или Node, PostgreSQL под капотом. С деплоем и мониторингом.", tools: ["Python", "Node", "React", "TypeScript", "FastAPI", "PostgreSQL", "REST API", "Docker", "Git", "Vercel"] },
        design: { title: "АВТОМАТИЗАЦИЯ И ИИ", description: "Автоматизировать любой процесс, подключить любой API, добавить ИИ", details: "Подключаюсь к любому API и автоматизирую процессы под ключ, сверху добавляю ИИ — LLM, зрение, парсинг, мониторинг — за удобной панелью управления. С деплоем на VPS.", tools: ["Автоматизация", "REST API", "Webhooks", "LLM", "Computer Vision", "Парсинг", "Мониторинг", "Дашборды", "Pandas", "VPS"] }
    },
    ui: {
        hello: "Привет! Я",
        an: "",
        roles: ["Full-Stack", "разработчик", "ИИ-инженер"],
        nav: { about: "ОБО МНЕ", work: "РАБОТЫ", contact: "КОНТАКТ" },
        resume: "РЕЗЮМЕ",
        hire: "Написать",
        careerTitle1: "Мои", careerTitle2: "навыки",
        whatIDo: "ЧТО Я ДЕЛАЮ",
        workTitle: "Мои работы",
        contactEmail: "Почта", contactLocation: "Локация", contactSocial: "Соцсети",
        designedBy: "Дизайн и разработка",
        by: "—"
    }
};

export const translations = { en, ru };

// Default export kept for any non-reactive imports (English)
export const config = en;

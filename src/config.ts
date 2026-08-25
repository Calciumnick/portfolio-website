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
        description: "Companies lose time and money every day to manual routine — reports pulled by hand, leads that slip through, data scattered across a dozen different tools. I turn that routine into software that does the work by itself. I take a project from the first conversation to a result in production: web apps and dashboards, integrations between services, and automation or AI wherever it actually pays off. What you get isn't a prototype that runs on my laptop — it's a stable product on a real server, monitored, and running without anyone babysitting it."
    },
    experiences: [
        {
            position: "Understand the real problem",
            company: "not code for its own sake",
            period: "01",
            location: "Remote",
            description: "First I find where time or money is actually leaking. Often the real task isn't the one that was described — spotting that is half the job.",
            responsibilities: [],
            technologies: []
        },
        {
            position: "Build and connect",
            company: "front, back, integrations",
            period: "02",
            location: "Remote",
            description: "I get a working version up fast, show it, and adjust as we go. I wire in the tools and data that are actually needed instead of over-building.",
            responsibilities: [],
            technologies: []
        },
        {
            position: "Ship it and keep it alive",
            company: "deploy & monitoring",
            period: "03",
            location: "Remote",
            description: "I put it on a real server, set it to run on its own and recover from failures, and stay around to maintain and grow it.",
            responsibilities: [],
            technologies: []
        }
    ],
    projects: [
        { id: 1, title: "Work Telegram Bot", category: "AI Platform", technologies: "Python, PostgreSQL, LLMs, Telethon", image: "/images/worksnipers.png", demo: false, description: "A production job-search platform that finds the right vacancy for each user instead of drowning them in a feed. It mines Telegram groups and job boards in real time, then a three-tier AI pipeline structures every listing, scores the match and filters out scams — cutting AI cost by ~70%. Runs 24/7 on a VPS: PostgreSQL, multi-account mining, instant search via a pre-indexed crawler.", link: "https://t.me/WorkSnipersBot" },
        { id: 2, title: "AutoFlow", category: "Business Automation · Private commission", technologies: "Python, Integrika CRM, PrivatBank API, WayForPay, Meta Ads, Dashboard", image: "/images/autoflow.png", demo: true, description: "A management dashboard for a beauty-salon owner that replaces a morning of manual reporting with one screen. It pulls live data from Integrika CRM, PrivatBank, WayForPay, Checkbox and Meta Ads into real metrics — revenue vs plan, profit, per-master KPIs, no-show and ad ROMI — plus forecasts and automatic alerts. Built as a private commission — client details under NDA.", link: "https://koltsov.work/demos/autoflow.html" },
        { id: 4, title: "PaperTrail", category: "Business Automation · AI Documents", technologies: "Python, Computer Vision, LLM, Google Sheets API, PostgreSQL, FastAPI", image: "/images/papertrail.png", demo: true, description: "An automation that kills manual data entry in a business's accounting. Invoices and receipts arrive by email or photo, and a vision + LLM engine reads each one — vendor, date, totals, VAT, line items — validates the numbers and pushes clean, structured records straight into Google Sheets and the owner's dashboard. Anything doubtful is flagged for a quick human check instead of being silently guessed. What used to be hours of retyping now happens in seconds, on schedule — deployed and running on its own.", link: "https://koltsov.work/demos/papertrail.html" }
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
        develop: { title: "FULL-STACK DEVELOPMENT", description: "Websites, web apps, dashboards and internal tools", details: "Need a website, a client portal, a dashboard or an internal tool? I do the front and the back, database and payments included, and ship it to production. No 'designer here, developer there' — one person owns the whole result.", tools: ["Python", "Node", "React", "TypeScript", "FastAPI", "PostgreSQL", "REST APIs", "Docker", "Git", "Vercel"] },
        design: { title: "AUTOMATION & AI", description: "Kill the manual routine, add AI where it pays off", details: "If something is done by hand every day, it can usually be handed to a program. I connect your tools together, automate collecting and processing data, and where it helps, plug in AI to read documents, sort things and flag what matters — so you open one panel instead of ten tabs.", tools: ["Automation", "REST APIs", "Webhooks", "LLMs", "Computer Vision", "Scraping", "Monitoring", "Dashboards", "Pandas", "VPS"] }
    },
    ui: {
        hello: "Hello! I'm",
        an: "",
        roles: ["Full-Stack", "Developer", "AI Engineer"],
        nav: { about: "ABOUT", work: "WORK", contact: "CONTACT" },
        resume: "RESUME",
        hire: "Hire Me",
        clickHint: "click",
        demoLabel: "DEMO",
        careerTitle1: "My", careerTitle2: "approach",
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
        description: "Каждый день бизнес теряет время и деньги на ручной рутине — отчёты собирают вручную, заявки теряются, данные разбросаны по десятку разных сервисов. Я превращаю эту рутину в софт, который делает работу сам. Веду проект от первого разговора до результата в продакшене: веб-приложения и дашборды, интеграции между сервисами, автоматизация и ИИ там, где он реально окупается. На выходе — не прототип «на ноутбуке», а стабильный продукт на сервере, под мониторингом, работающий без ручного участия."
    },
    experiences: [
        {
            position: "Разбираюсь, что болит",
            company: "не код ради кода",
            period: "01",
            location: "Удалённо",
            description: "Сначала нахожу, где реально утекают время или деньги. Часто настоящая задача — не та, что описали, и увидеть это — половина работы.",
            responsibilities: [],
            technologies: []
        },
        {
            position: "Строю и подключаю",
            company: "фронт, бэк, интеграции",
            period: "02",
            location: "Удалённо",
            description: "Быстро поднимаю рабочую версию, показываю, правлю по ходу. Подключаю нужные сервисы и данные, а не изобретаю лишнее.",
            responsibilities: [],
            technologies: []
        },
        {
            position: "Запускаю и держу живым",
            company: "деплой и мониторинг",
            period: "03",
            location: "Удалённо",
            description: "Выкатываю на реальный сервер, настраиваю так, чтобы работало само и восстанавливалось после сбоев, и остаюсь поддерживать и развивать.",
            responsibilities: [],
            technologies: []
        }
    ],
    projects: [
        { id: 1, title: "Work Telegram Bot", category: "ИИ-платформа", technologies: "Python, PostgreSQL, LLM, Telethon", image: "/images/worksnipers.png", demo: false, description: "Продакшн-платформа поиска работы, которая находит нужную вакансию под человека, а не заваливает лентой. В реальном времени собирает данные из Telegram-групп и с сайтов работы, а трёхуровневый ИИ-конвейер структурирует каждое объявление, оценивает совпадение и отсеивает скам — экономя ~70% на ИИ. Работает 24/7 на VPS: PostgreSQL, мультиаккаунтный майнинг, мгновенный поиск через предындексный краулер.", link: "https://t.me/WorkSnipersBot" },
        { id: 2, title: "AutoFlow", category: "Бизнес-автоматизация · Частный заказ", technologies: "Python, Integrika CRM, ПриватБанк API, WayForPay, Meta Ads, Дашборд", image: "/images/autoflow.png", demo: true, description: "Управленческий дашборд для владельца салона красоты, который заменяет утро ручной отчётности одним экраном. Данные из Integrika CRM, ПриватБанка, WayForPay, Checkbox и Meta Ads превращаются в реальные метрики — оборот против плана, прибыль, KPI мастеров, no-show и ROMI рекламы — плюс прогноз и автоматические оповещения. Частный заказ — детали клиента под NDA.", link: "https://koltsov.work/demos/autoflow.html" },
        { id: 4, title: "PaperTrail", category: "Бизнес-автоматизация · ИИ-документы", technologies: "Python, Computer Vision, LLM, Google Sheets API, PostgreSQL, FastAPI", image: "/images/papertrail.png", demo: true, description: "Автоматизация, которая убирает ручной ввод данных в бухгалтерию бизнеса. Счета и чеки приходят на почту или фото, а движок на зрении и LLM читает каждый — поставщик, дата, суммы, НДС, позиции — сверяет числа и отдаёт чистые структурированные записи прямо в Google Sheets и дашборд владельца. Сомнительное помечается на быструю проверку человеком, а не угадывается втихую. То, что раньше было часами перепечатки, теперь занимает секунды, по расписанию — задеплоено и работает само.", link: "https://koltsov.work/demos/papertrail.html" }
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
        develop: { title: "FULL-STACK РАЗРАБОТКА", description: "Сайты, веб-приложения, дашборды и внутренние инструменты", details: "Нужен сайт, личный кабинет, дашборд или внутренний инструмент? Сделаю фронт и бэк целиком, с базой и оплатами, и выкачу в прод. Без «дизайнер отдельно, программист отдельно» — за результат отвечает один человек.", tools: ["Python", "Node", "React", "TypeScript", "FastAPI", "PostgreSQL", "REST API", "Docker", "Git", "Vercel"] },
        design: { title: "АВТОМАТИЗАЦИЯ И ИИ", description: "Убрать ручную рутину и добавить ИИ там, где он окупается", details: "Если что-то делается руками каждый день — обычно это можно отдать программе. Соединяю ваши сервисы между собой, автоматизирую сбор и обработку данных, а где помогает — подключаю ИИ, чтобы он читал документы, сортировал и подсказывал важное. Вы открываете одну панель вместо десяти вкладок.", tools: ["Автоматизация", "REST API", "Webhooks", "LLM", "Computer Vision", "Парсинг", "Мониторинг", "Дашборды", "Pandas", "VPS"] }
    },
    ui: {
        hello: "Привет! Я",
        an: "",
        roles: ["Full-Stack", "разработчик", "ИИ-инженер"],
        nav: { about: "ОБО МНЕ", work: "РАБОТЫ", contact: "КОНТАКТ" },
        resume: "РЕЗЮМЕ",
        hire: "Написать",
        clickHint: "клик",
        demoLabel: "ДЕМО",
        careerTitle1: "Мой", careerTitle2: "подход",
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

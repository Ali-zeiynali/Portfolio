export type Language = "en" | "fa";

type Nav = {
    expertise: string;
    history: string;
    projects: string;
    contact: string;
    language: string;
    languageLabel: string;
    menu: string;
};

type Hero = {
    name: string;
    title: string;
    intro: string;
};

type ExpertiseCard = {
    title: string;
    description: string;
    stackTitle: string;
};

type Expertise = {
    title: string;
    cards: ExpertiseCard[];
    chips: {
        first: string[];
        second: string[];
        third: string[];
    };
};

type TimelineItem = {
    date: string;
    role: string;
    location: string;
    description: string;
};

type Timeline = {
    title: string;
    items: TimelineItem[];
};

type Projects = {
    title: string;
};

type Contact = {
    title: string;
    subtitle: string;
    emailLabel: string;
    email: string;
};

type Footer = {
    text: string;
    copyright: string;
};

export type Translations = {
    nav: Nav;
    hero: Hero;
    expertise: Expertise;
    timeline: Timeline;
    projects: Projects;
    contact: Contact;
    footer: Footer;
};

const CONTACT_EMAIL = "Azeiynali@gmail.com";

const CHIPS_FIRST: string[] = [
    "Vue.js",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Python",
    "Flask",
    "FastAPI",
    "REST API",
    "SQL",
    "Electron",
];

const CHIPS_SECOND: string[] = [
    "PostgreSQL",
    "Redis",
    "Docker",
    "Linux",
    "Nginx",
    "Git",
    "Elasticsearch",
];

const CHIPS_THIRD: string[] = [
    "Dashboard & Admin UI",
    "State Management",
    "API Contracts",
    "Auth & RBAC",
    "Payments & Wallet Flows",
    "Background Jobs",
    "Caching",
    "Logging & Monitoring",
];

const en: Translations = {
    nav: {
        expertise: "Expertise",
        history: "Experience",
        projects: "Projects",
        contact: "Contact",
        language: "فا",
        languageLabel: "Switch to Persian",
        menu: "Menu",
    },
    hero: {
        name: "Ali Zeiynali",
        title: "Vue Frontend • Python Backend Developer",
        intro: "I build real-world web products from concept to production. My focus is on designing clear architectures, implementing clean and scalable code, and delivering systems that remain stable under growth. I care about correctness, performance, and long-term maintainability — not just shipping features, but building foundations that last.",
    },

    expertise: {
        title: "What I Do",
        cards: [
            {
                title: "Vue Frontend for Real Products",
                description:
                    "I build clean and responsive Vue interfaces for dashboards and admin panels: reusable components, practical state management, and UX details that keep the product fast and consistent.",
                stackTitle: "Frontend focus:",
            },
            {
                title: "Practical DevOps & Delivery",
                description:
                    "I ship software reliably: Docker-based setups, Linux/Nginx configuration, and production-friendly deployment workflows. I keep systems observable and easy to operate, so releases stay predictable and debugging stays straightforward.",
                stackTitle: "Delivery & ops:",
            },
            {
                title: "Backend-First Product Development",
                description:
                    "I design data models and APIs with long-term maintainability in mind: authentication, RBAC, background jobs, integrations, and performance-sensitive flows (including payment and wallet scenarios).",
                stackTitle: "Backend focus:",
            },
        ],
        chips: {
            first: [...CHIPS_FIRST],
            second: [...CHIPS_SECOND],
            third: [...CHIPS_THIRD],
        },
    },
    timeline: {
        title: "Work Experience",
        items: [
            {
                date: "1403/04",
                role: "Senior Software Engineer & Product Manager",
                location: "Repco",
                description:
                    "Leading product direction and technical architecture. Overseeing backend design, frontend implementation, and delivery strategy while aligning product goals with business needs.",
            },
            {
                date: "1402/04",
                role: "Web Developer",
                location: "Anatoa",
                description:
                    "Developing and maintaining web applications with a focus on clean architecture, API-driven design, and maintainable frontend-backend integration.",
            },
            {
                date: "1401/09",
                role: "Data Analyst Intern",
                location: "Hamta",
                description:
                    "Worked on data processing, reporting, and analytical tooling. Assisted in improving operational insights through structured data analysis and automation.",
            },
        ],
    },
    projects: {
        title: "Selected Projects",
    },
    contact: {
        title: "Contact",
        subtitle: "Currently, the best way to communicate is by email.",
        emailLabel: "Email",
        email: CONTACT_EMAIL,
    },
    footer: {
        text: "Portfolio designed and developed by",
        copyright: "All rights reserved.",
    },
};

const fa: Translations = {
    nav: {
        expertise: "مهارت‌ها",
        history: "تجربه‌ها",
        projects: "پروژه‌ها",
        contact: "ارتباط",
        language: "EN",
        languageLabel: "تغییر زبان به انگلیسی",
        menu: "منو",
    },
    hero: {
        name: "علی زینلی",
        title: "فرانت‌اند Vue • بک‌اند Python",
        intro: "محصولات وب را از مرحله ایده تا استقرار نهایی می‌سازم. تمرکز من بر طراحی معماری شفاف، پیاده‌سازی کد تمیز و مقیاس‌پذیر، و تحویل سامانه‌هایی است که در رشد و استفاده واقعی پایدار بمانند. برایم صرفاً تحویل قابلیت مهم نیست؛ ساخت زیرساختی ماندگار، دقیق و قابل نگهداری در اولویت است.",
    },
    expertise: {
        title: "حوزه‌های تمرکز",
        cards: [
            {
                title: "فرانت‌اند Vue برای محصول واقعی",
                description:
                    "رابط‌های تمیز و سریع برای داشبوردها و پنل‌های مدیریتی می‌سازم: کامپوننت‌های قابل استفاده‌مجدد، مدیریت وضعیت منطقی، و جزئیات UX که تجربه کار با محصول را روان و قابل اعتماد می‌کند.",
                stackTitle: "تمرکز فرانت‌اند:",
            },
            {
                title: "DevOps و تحویل پایدار",
                description:
                    "هدف من انتشار بدون دردسر است: کانتینرسازی با Docker، تنظیمات Linux/Nginx و آماده‌سازی جریان استقرار. ترجیح می‌دهم سیستم قابل رصد و ساده باشد تا دیباگ و انتشار سریع‌تر و مطمئن‌تر انجام شود.",
                stackTitle: "استقرار و عملیات:",
            },
            {
                title: "توسعه محصول با نگاه بک‌اند‌محور",
                description:
                    "از مدل داده و قراردادهای API شروع می‌کنم و بک‌اندی می‌سازم که توسعه‌پذیر و مطمئن باشد؛ شامل احراز هویت، نقش‌ها و دسترسی‌ها، صف وظایف، یکپارچه‌سازی‌ها و مسیرهای حساس مثل پرداخت و کیف پول.",
                stackTitle: "تمرکز بک‌اند:",
            },
        ],
        chips: {
            first: [...CHIPS_FIRST],
            second: [...CHIPS_SECOND],
            third: [...CHIPS_THIRD],
        },
    },
    timeline: {
        title: "سوابق کاری",
        items: [
            {
                date: "۱۴۰۳/۰۴",
                role: "برنامه‌نویس ارشد و مدیر محصول",
                location: "رپکو",
                description:
                    "هدایت فنی محصول، طراحی معماری سیستم و هماهنگی بین تیم فنی و اهداف کسب‌وکار.",
            },
            {
                date: "۱۴۰۲/۰۴",
                role: "برنامه‌نویس وب",
                location: "آناتوا",
                description:
                    "توسعه و نگهداری سامانه‌های وب با تمرکز بر معماری تمیز، طراحی مبتنی بر API و یکپارچگی صحیح بین فرانت‌اند و بک‌اند.",
            },
            {
                date: "۱۴۰۱/۰۹",
                role: "کارآموز تحلیل داده",
                location: "همتا",
                description:
                    "تحلیل داده، تهیه گزارش و توسعه ابزارهای تحلیلی با Python جهت بهبود تصمیم‌گیری و بهینه‌سازی فرایندها با اتوماسیون.",
            },
        ],
    },
    projects: {
        title: "پروژه‌های منتخب",
    },
    contact: {
        title: "ارتباط",
        subtitle: "فعلا بهترین راه ارتباطی ایمیل است..",
        emailLabel: "ایمیل",
        email: CONTACT_EMAIL,
    },
    footer: {
        text: "این پورتفولیو طراحی و توسعه شده توسط",
        copyright: "تمامی حقوق محفوظ است.",
    },
};

export const translations: Record<Language, Translations> = { en, fa };

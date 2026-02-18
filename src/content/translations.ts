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
        intro: "I build production-ready web products: fast Vue interfaces, reliable Python backends, and clean APIs. I focus on correctness, performance, and maintainable delivery.",
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
                date: "2022 — Present",
                role: "Backend-Focused Full-Stack Developer",
                location: "Remote",
                description:
                    "Own features end-to-end: Python backend design, API contracts, and Vue implementation. Focus on scalable data models, clean delivery, and production stability.",
            },
            {
                date: "2020 — 2022",
                role: "Full-Stack Engineer",
                location: "Laie, HI",
                description:
                    "Built and maintained product features across backend and frontend. Worked closely with stakeholders, improved internal tooling, and contributed to documentation and team workflows.",
            },
            {
                date: "2021",
                role: "Software Engineering Intern",
                location: "Laie, HI",
                description:
                    "Implemented features, integrated third-party APIs, and improved existing code paths with attention to correctness and readability.",
            },
            {
                date: "2020",
                role: "Data Analyst Intern",
                location: "Tokyo, Japan",
                description:
                    "Worked with data pipelines and reporting, built Python tooling for analysis, and helped improve process efficiency through automation.",
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
        intro: "محصولات وب را برای محیط واقعی می‌سازم: رابط سریع و تمیز با Vue، بک‌اند قابل اتکا با Python، و APIهای روشن و قابل نگهداری. تمرکز من روی کیفیت، کارایی و تحویل قابل پیش‌بینی است.",
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
                date: "۲۰۲۲ — اکنون",
                role: "توسعه‌دهنده فول‌استک با تمرکز بک‌اند",
                location: "دورکار",
                description:
                    "تحویل قابلیت از ابتدا تا انتها: طراحی بک‌اند Python، قراردادهای API، و پیاده‌سازی Vue. تمرکز روی مدل داده مقیاس‌پذیر، تحویل تمیز و پایداری محیط عملیاتی.",
            },
            {
                date: "۲۰۲۰ — ۲۰۲۲",
                role: "مهندس فول‌استک",
                location: "هاوایی",
                description:
                    "توسعه و نگهداری قابلیت‌های محصول در بک‌اند و فرانت‌اند. همکاری نزدیک با ذی‌نفعان، بهبود ابزارهای داخلی و کمک به مستندسازی و روندهای تیمی.",
            },
            {
                date: "۲۰۲۱",
                role: "کارآموز مهندسی نرم‌افزار",
                location: "هاوایی",
                description:
                    "پیاده‌سازی قابلیت‌ها، یکپارچه‌سازی APIهای خارجی، و بهبود بخش‌هایی از کد با توجه به خوانایی و صحت عملکرد.",
            },
            {
                date: "۲۰۲۰",
                role: "کارآموز تحلیل داده",
                location: "توکیو",
                description:
                    "کار با داده و گزارش‌گیری، ساخت ابزارهای تحلیلی با Python، و کمک به بهینه‌سازی فرایندها با اتوماسیون.",
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

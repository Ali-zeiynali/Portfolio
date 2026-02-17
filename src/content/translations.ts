export type Language = 'en' | 'fa';

export const translations = {
    en: {
        nav: {
            expertise: 'Expertise',
            history: 'History',
            projects: 'Projects',
            contact: 'Contact',
            language: 'FA',
            languageLabel: 'Switch to Persian',
        },
        hero: {
            name: 'Ali Zeiynali',
            title: 'Python Backend & Vue Frontend Developer',
            intro: 'Building reliable backend systems with Python and crafting fast frontend experiences with Vue.js',
        },
        expertise: {
            title: 'Expertise',
            cards: [
                {
                    title: 'Python + Vue Product Development',
                    description: 'I build web products end-to-end with a backend-first mindset including robust Python services clean APIs and maintainable Vue.js interfaces',
                    stackTitle: 'Core stack:',
                },
                {
                    title: 'Practical DevOps',
                    description: 'I can containerize apps with Docker configure Linux servers and handle deployment setup for stable releases with a practical delivery-focused approach',
                    stackTitle: 'Tools I use:',
                },
                {
                    title: 'Experience Snapshot',
                    description: 'Focused professional experience levels across backend frontend search and delivery tooling',
                    stackTitle: 'Years of experience:',
                },
            ],
            chips: {
                first: ['Python', 'Flask', 'Vue.js', 'JavaScript', 'HTML', 'CSS', 'Electron', 'REST API', 'SQL'],
                second: ['Docker', 'Linux', 'Git', 'Nginx', 'PostgreSQL', 'Elasticsearch'],
                third: ['Python (4-10 years)', 'Elasticsearch (2-4 years)', 'HTML (2-4 years)', 'CSS (2-4 years)', 'Vue.js (2-4 years)', 'Electron (1-2 years)', 'Git (2-4 years)'],
            },
        },
        timeline: {
            title: 'Career History',
            items: [
                {
                    date: '2022 - Present',
                    role: 'Backend-Focused Full Stack Developer',
                    location: 'Remote',
                    description: 'Python backend architecture API design Vue.js frontend implementation and feature delivery',
                },
                {
                    date: '2020 - 2022',
                    role: 'Full Stack Engineer',
                    location: 'Laie, HI',
                    description: 'Backend development frontend implementation technical documentation and team collaboration',
                },
                {
                    date: '2021',
                    role: 'Staff Engineer Intern',
                    location: 'Laie, HI',
                    description: 'Application feature development API integrations and codebase maintenance',
                },
                {
                    date: '2020',
                    role: 'Data Analyst Intern',
                    location: 'Tokyo, Japan',
                    description: 'Data analysis reporting and process optimization with Python tooling',
                },
            ],
        },
        projects: {
            title: 'Selected Projects',
        },
        contact: {
            title: 'Contact',
            subtitle: 'For now the fastest way to reach me is email',
            emailLabel: 'Test Email',
            email: 'hello@alizeiynali.dev',
        },
        footer: {
            text: 'Portfolio designed and developed by',
        },
    },
    fa: {
        nav: {
            expertise: 'مهارت ها',
            history: 'سابقه کاری',
            projects: 'پروژه ها',
            contact: 'ارتباط',
            language: 'EN',
            languageLabel: 'تغییر زبان به انگلیسی',
        },
        hero: {
            name: 'علی زینعلی',
            title: 'توسعه دهنده بک اند پایتون و فرانت اند Vue',
            intro: 'تمرکز من روی ساخت بک اند قابل اعتماد با Python و تجربه سریع و تمیز در فرانت اند با Vue.js است',
        },
        expertise: {
            title: 'تخصص ها',
            cards: [
                {
                    title: 'توسعه محصول با Python و Vue',
                    description: 'محصول های وب را با نگاه بک اند محور توسعه می دهم از سرویس پایدار Python و API تمیز تا رابط قابل نگهداری با Vue.js',
                    stackTitle: 'پشته اصلی',
                },
                {
                    title: 'DevOps کاربردی',
                    description: 'در حد راه اندازی عملیاتی کانتینرسازی با Docker تنظیم سرور Linux و استقرار پروژه را انجام می دهم',
                    stackTitle: 'ابزارهای مورد استفاده',
                },
                {
                    title: 'خلاصه تجربه',
                    description: 'سطح تجربه حرفه ای در مهارت های کلیدی بک اند فرانت اند و ابزار توسعه',
                    stackTitle: 'بازه تجربه',
                },
            ],
            chips: {
                first: ['Python', 'Flask', 'Vue.js', 'JavaScript', 'HTML', 'CSS', 'Electron', 'REST API', 'SQL'],
                second: ['Docker', 'Linux', 'Git', 'Nginx', 'PostgreSQL', 'Elasticsearch'],
                third: ['Python (۴ تا ۱۰ سال)', 'Elasticsearch (۲ تا ۴ سال)', 'HTML (۲ تا ۴ سال)', 'CSS (۲ تا ۴ سال)', 'Vue.js (۲ تا ۴ سال)', 'Electron (۱ تا ۲ سال)', 'Git (۲ تا ۴ سال)'],
            },
        },
        timeline: {
            title: 'سابقه حرفه ای',
            items: [
                {
                    date: '۲۰۲۲ تا اکنون',
                    role: 'توسعه دهنده فول استک با تمرکز بک اند',
                    location: 'دورکار',
                    description: 'معماری بک اند با Python طراحی API پیاده سازی فرانت اند با Vue.js و تحویل قابلیت',
                },
                {
                    date: '۲۰۲۰ تا ۲۰۲۲',
                    role: 'مهندس فول استک',
                    location: 'هاوایی',
                    description: 'توسعه بک اند پیاده سازی فرانت اند مستندسازی فنی و همکاری تیمی',
                },
                {
                    date: '۲۰۲۱',
                    role: 'کارآموز مهندسی نرم افزار',
                    location: 'هاوایی',
                    description: 'توسعه قابلیت یکپارچه سازی API و نگهداری کد',
                },
                {
                    date: '۲۰۲۰',
                    role: 'کارآموز تحلیل داده',
                    location: 'توکیو',
                    description: 'تحلیل داده گزارش گیری و بهینه سازی فرایند با ابزار Python',
                },
            ],
        },
        projects: {
            title: 'پروژه های منتخب',
        },
        contact: {
            title: 'ارتباط',
            subtitle: 'فعلا بهترین راه ارتباط ایمیل است',
            emailLabel: 'ایمیل تستی',
            email: 'hello@alizeiynali.dev',
        },
        footer: {
            text: 'این پورتفولیو طراحی و توسعه شده توسط',
        },
    },
};

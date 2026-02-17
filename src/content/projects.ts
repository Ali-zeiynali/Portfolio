import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import type { Language } from './translations';

export type ProjectItem = {
    title: string;
    description: string;
    link: string;
    image: string;
};

export const localizedProjects: Record<Language, ProjectItem[]> = {
    en: [
        {
            title: 'Filmate AI',
            description: 'Developed movie finder app with semantic search and sentiment analysis using OpenAI GPT-3.5 Turbo, Qdrant, Vue.js, and Flask.',
            link: 'https://www.filmate.club/',
            image: mock10,
        },
        {
            title: 'High Speed Chase',
            description: 'Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.',
            link: 'https://alizeiynali.itch.io/highspeedchase',
            image: mock09,
        },
        {
            title: 'Astro Raiders',
            description: 'Developed and released a 2D shooting game with C# and Unity. This project is hosted on the Itch.io public marketplace.',
            link: 'https://alizeiynali.itch.io/spacecraft',
            image: mock08,
        },
        {
            title: 'Datum: Integrated Learning Platform',
            description: 'This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.',
            link: 'https://www.datumlearn.com/',
            image: mock07,
        },
        {
            title: 'WeManage: Real Estate Asset Management',
            description: 'This mobile application allows realtors in Japan to securely manage their property information and view future income predictions. This app is built with Ruby on Rails and JavaScript.',
            link: 'http://www.wemanage.jp/',
            image: mock06,
        },
        {
            title: 'COVID-19 Case Management',
            description: 'Built official charts for COVID/vaccination tracking for an educational institution using JavaScript and the Google Sheets API v4. The dashboard served the university\'s leadership in their decision-making processes.',
            link: 'https://www.byuh.edu/covid-19-case-management',
            image: mock05,
        },
        {
            title: 'Multiple Regression Property Analysis',
            description: 'Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.',
            link: 'https://github.com/alizeiynali/multi-reg-analysis',
            image: mock04,
        },
        {
            title: 'Programs of Study',
            description: 'Designed and developed a custom component for a CMS-based platform (e.g., Brightspot) using Java, Handlebars, and LESS. University students can find their majors of interest through this module.',
            link: 'https://holokai.byuh.edu/programs-of-study',
            image: mock03,
        },
        {
            title: 'Transfer Evaluation Matrix',
            description: 'Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students quickly identify eligible credits.',
            link: 'https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix',
            image: mock02,
        },
        {
            title: 'Submeowrine',
            description: 'Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.',
            link: 'https://github.com/alizeiynali/submeowrine',
            image: mock01,
        },
    ],
    fa: [
        {
            title: 'Filmate AI',
            description: 'اپلیکیشن جستجوی فیلم با جستجوی معنایی و تحلیل احساسات با OpenAI GPT-3.5 Turbo، Qdrant، Vue.js و Flask توسعه دادم.',
            link: 'https://www.filmate.club/',
            image: mock10,
        },
        {
            title: 'High Speed Chase',
            description: 'بازی مسابقه ای سه بعدی چندنفره را با C# و Unity طراحی، توسعه و منتشر کردم و روی Itch.io در دسترس قرار دادم.',
            link: 'https://alizeiynali.itch.io/highspeedchase',
            image: mock09,
        },
        {
            title: 'Astro Raiders',
            description: 'یک بازی تیراندازی دوبعدی را با C# و Unity توسعه و منتشر کردم که در مارکت عمومی Itch.io میزبانی می شود.',
            link: 'https://alizeiynali.itch.io/spacecraft',
            image: mock08,
        },
        {
            title: 'Datum: Integrated Learning Platform',
            description: 'یک پلتفرم آموزشی آنلاین با تمرکز بر علوم داده به زبان ژاپنی که کل آن را از صفر با Ruby on Rails پیاده سازی کردم.',
            link: 'https://www.datumlearn.com/',
            image: mock07,
        },
        {
            title: 'WeManage: Real Estate Asset Management',
            description: 'اپلیکیشن موبایل مدیریت دارایی املاک برای مشاوران ژاپن که با Ruby on Rails و JavaScript توسعه داده شد.',
            link: 'http://www.wemanage.jp/',
            image: mock06,
        },
        {
            title: 'COVID-19 Case Management',
            description: 'داشبورد رسمی آمار کووید و واکسیناسیون را با JavaScript و Google Sheets API v4 برای یک مرکز آموزشی توسعه دادم.',
            link: 'https://www.byuh.edu/covid-19-case-management',
            image: mock05,
        },
        {
            title: 'Multiple Regression Property Analysis',
            description: 'با روش های آماری مانند OLS و رگرسیون چندمتغیره، بازار املاک ژاپن را تحلیل و قیمت ها را پیش بینی کردم.',
            link: 'https://github.com/alizeiynali/multi-reg-analysis',
            image: mock04,
        },
        {
            title: 'Programs of Study',
            description: 'یک کامپوننت اختصاصی برای پلتفرم CMS (مثل Brightspot) با Java، Handlebars و LESS ساختم تا دانشجوها رشته مناسب را راحت تر پیدا کنند.',
            link: 'https://holokai.byuh.edu/programs-of-study',
            image: mock03,
        },
        {
            title: 'Transfer Evaluation Matrix',
            description: 'یک ابزار تعاملی تولید جدول CSV با Java، Handlebars و LESS پیاده سازی کردم تا معادل سازی واحدها سریع تر انجام شود.',
            link: 'https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix',
            image: mock02,
        },
        {
            title: 'Submeowrine',
            description: 'یک اپلیکیشن اندروید بازی تیراندازی دوبعدی با Java و Android Studio توسعه و منتشر کردم.',
            link: 'https://github.com/alizeiynali/submeowrine',
            image: mock01,
        },
    ],
};

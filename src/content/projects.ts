import lp0 from "../assets/images/lp-0.png";
import lp1 from "../assets/images/lp-1.jpg";
import lp2 from "../assets/images/lp-2.jpg";
import lp3 from "../assets/images/lp-3.jpg";
import lp4 from "../assets/images/lp-4.jpg";
import lp5 from "../assets/images/lp-5.jpg";
import lp6 from "../assets/images/lp-6.jpg";

import lc0 from "../assets/images/lc-0.png";
import lc1 from "../assets/images/lc-1.jpg";
import lc2 from "../assets/images/lc-2.jpg";
import lc3 from "../assets/images/lc-3.jpg";
import lc4 from "../assets/images/lc-4.jpg";
import lc5 from "../assets/images/lc-5.jpg";
import lc6 from "../assets/images/lc-6.jpg";
import lc7 from "../assets/images/lc-7.jpg";
import lc8 from "../assets/images/lc-8.jpg";

import la0 from "../assets/images/la-0.png";
import la1 from "../assets/images/la-1.jpg";
import la2 from "../assets/images/la-2.jpg";
import la3 from "../assets/images/la-3.jpg";
import la4 from "../assets/images/la-4.jpg";

import gc from "../assets/images/gc.png";

import type { Language } from "./translations";

export type ProjectItem = {
    title: string;
    description: string;
    images: string[];
};

const LUMIPAY_IMAGES = [lp0, lp1, lp2, lp3, lp4, lp5, lp6];
const LUMICC_IMAGES = [lc0, lc1, lc2, lc3, lc4, lc5, lc6, lc7, lc8];
const GASHTCRM_IMAGES = [gc];
const LUMIAI_IMAGES = [la0, la1, la2, la3, la4];

export const localizedProjects: Record<Language, ProjectItem[]> = {
    en: [
        {
            title: "LumiPay",
            description:
                "A wallet layer connecting multiple LendTech providers to merchants through a single integration with unified credit and payment flows.",
            images: [...LUMIPAY_IMAGES],
        },
        {
            title: "LumiCC",
            description:
                "A CRM and customer club platform designed to increase repeat purchases through segmentation, loyalty programs, and campaign tools.",
            images: [...LUMICC_IMAGES],
        },
        {
            title: "LumiAI",
            description:
                "A platform for building and managing chatbots with multi-bot management, prompt configuration, and conversation monitoring.",
            images: [...LUMIAI_IMAGES],
        },
        {
            title: "Gasht CRM",
            description:
                "A CRM platform tailored for an airline company to manage passenger relationships, workflows, and internal coordination.",
            images: [...GASHTCRM_IMAGES],
        },
    ],
    fa: [
        {
            title: "لومی پی (LumiPay)",
            description:
                "کیف پول و لایه اتصال چند لندتک به مرچنت با یکپارچه‌سازی واحد برای مدیریت جریان‌های پرداخت و اعتبار.",
            images: [...LUMIPAY_IMAGES],
        },
        {
            title: "لومیک (LumiCC)",
            description:
                "پلتفرم CRM و باشگاه مشتریان برای افزایش فروش تکرارشونده با ابزارهای دسته‌بندی مشتریان و کمپین.",
            images: [...LUMICC_IMAGES],
        },
        {
            title: "لومیای (LumiAI)",
            description:
                "پلتفرم ساخت و مدیریت چت‌بات با امکان مدیریت چند بات، تنظیم پرامپت و مشاهده مکالمات.",
            images: [...LUMIAI_IMAGES],
        },
        {
            title: "گشت CRM (Gasht CRM)",
            description:
                "سامانه CRM برای شرکت هواپیمایی جهت مدیریت ارتباط با مسافران و فرایندهای داخلی.",
            images: [...GASHTCRM_IMAGES],
        },
    ],
};

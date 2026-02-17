import React, { useEffect, useMemo, useState } from "react";
import {
    Main,
    Timeline,
    Expertise,
    Project,
    Contact,
    Navigation,
    Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import { Language, translations } from './content/translations';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');
    const [language, setLanguage] = useState<Language>('en');

    const t = useMemo(() => translations[language], [language]);

    const handleModeChange = () => {
        setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
    };

    const handleLanguageChange = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'fa' : 'en'));
    };

    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
    }, [language]);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'} ${language === 'fa' ? 'rtl-mode' : 'ltr-mode'}`}>
            <Navigation
                mode={mode}
                modeChange={handleModeChange}
                languageChange={handleLanguageChange}
                nav={t.nav}
            />
            <FadeIn transitionDuration={700}>
                <Main hero={t.hero} language={language} />
                <Expertise expertise={t.expertise} />
                <Timeline timeline={t.timeline} language={language} />
                <Project title={t.projects.title} />
                <Contact contact={t.contact} />
            </FadeIn>
            <Footer footer={t.footer} />
        </div>
    );
}

export default App;

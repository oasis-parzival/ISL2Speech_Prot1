import React from 'react';
// Imports cleaned up
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const Navbar = () => {
    const navigate = useNavigate();
    const { t, language, setLanguage } = useLanguage();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-transparent backdrop-blur-sm transition-all duration-300">
            <div className="max-w-[1600px] mx-auto relative flex items-center justify-between">
                <div className="flex items-center gap-2 cursor-pointer z-20" onClick={() => navigate('/')}>
                    <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
                        <span className="font-heading font-bold text-lg text-white">S</span>
                    </div>
                    <span className="font-heading font-bold text-xl text-white tracking-tight">SignBridge</span>
                </div>

                {/* Centered Navigation Links */}
                <div className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <button onClick={() => navigate('/translate')} className="text-sm font-medium text-grey-400 hover:text-white transition-colors">
                        {t.nav.translator}
                    </button>
                    {['features', 'howItWorks'].map((item) => (
                        <button
                            key={item}
                            onClick={() => {
                                // If on home page, scroll. If not, navigate home then scroll (simple version: navigate home)
                                if (window.location.pathname !== '/') {
                                    navigate('/');
                                    // Timeout to allow nav effect then scroll could be added, but simple nav first is safer
                                    setTimeout(() => {
                                        const el = document.getElementById(item === 'features' ? 'features' : 'how-it-works');
                                        el?.scrollIntoView({ behavior: 'smooth' });
                                    }, 100);
                                } else {
                                    const el = document.getElementById(item === 'features' ? 'features' : 'how-it-works');
                                    el?.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className="text-sm font-medium text-grey-400 hover:text-white transition-colors"
                        >
                            {t.nav[item as keyof typeof t.nav]}
                        </button>
                    ))}
                    <button onClick={() => navigate('/about')} className="text-sm font-medium text-grey-400 hover:text-white transition-colors">
                        {t.nav.about}
                    </button>
                </div>

                <div className="flex items-center gap-4 z-20">
                    <div className="flex items-center bg-white/5 border border-white/10 rounded-lg p-1">
                        {(['EN', 'HI', 'MR', 'GU'] as const).map((lang) => (
                            <button
                                key={lang}
                                onClick={() => setLanguage(lang)}
                                className={`px-2 py-1 text-xs font-medium rounded-md transition-all ${language === lang
                                    ? 'bg-silver-500 text-graphite-950 font-bold'
                                    : 'text-grey-400 hover:text-white'
                                    }`}
                            >
                                {lang}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={() => navigate('/login')}
                        className="text-sm font-medium text-white/80 hover:text-white transition-colors hidden sm:block"
                    >
                        {t.nav.login}
                    </button>
                    <button
                        onClick={() => navigate('/login')}
                        className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-200 transition-colors"
                    >
                        {t.nav.getStarted}
                    </button>
                </div>
            </div>
        </nav>
    );
};

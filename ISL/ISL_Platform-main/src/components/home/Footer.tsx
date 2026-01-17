import { useLanguage } from "../../context/LanguageContext";

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="py-8 bg-graphite-950 border-t border-white/5 text-center text-grey-600 text-sm">
            <p>{t.footer.copyright}</p>
        </footer>
    );
};

export default Footer;

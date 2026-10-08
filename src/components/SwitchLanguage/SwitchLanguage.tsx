import { useTranslation } from "react-i18next";

export const SwitchLanguage = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
    };

    return <div>
        <button onClick={() => changeLanguage('ru')}>РУ</button>
        <button onClick={() => changeLanguage('en')}>EN</button>
    </div>
}

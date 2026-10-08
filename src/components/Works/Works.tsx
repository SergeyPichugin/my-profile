import { useTranslation } from 'react-i18next'

export const Works = () => {
    const { t } = useTranslation()

  return (
    <>
      <div style={{ height: "100px" }}>
          <h2>{t('works')}</h2>
      </div>
          <div style={{ color: "#FFF" }}>{t('loading')}</div>
    </>
  );
};

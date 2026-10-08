import { useTranslation } from 'react-i18next'

import styles from "./Contacts.module.scss";

export const Contacts = () => {
    const { t } = useTranslation()

  return (
    <div className={styles.wrapper}>
      <div>
        <a href="https://github.com/SergeyPichugin" target="_blank">
          github
        </a>
      </div>
      <div>
          <a href="email:sergeypichugin@me.com">@{t('email')}</a>
      </div>
      <div>
        <a href="https://t.me/sergeypichugin" target="_blank">
          @tg
        </a>
      </div>
      <div>
        <a href="https://vk.com/beatbig" target="_blank">
          vk
        </a>
      </div>
    </div>
  );
};

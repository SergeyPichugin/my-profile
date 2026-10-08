import { useTranslation } from 'react-i18next'

import styles from './AbloutBlock.module.scss'
import Ava from '../../assets/screen.png'

export const AboutBlock = () => {
    const { t } = useTranslation();

    return (
        <div>
            <div className={styles.ava}>
                <img src={Ava} />
            </div>
            <p>{t('description', { name: t('name') })}</p>
        </div>
    )
}

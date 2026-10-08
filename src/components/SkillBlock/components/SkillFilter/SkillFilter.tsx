import { useTranslation } from 'react-i18next'

import styles from './SkillFilter.module.scss'

import {
    CATEGORY_SKILLS,
    TAG_SKILLS,
} from '../../../../constants/skill'

interface IProps {
    categories: CATEGORY_SKILLS[]
    tags: TAG_SKILLS[]
    category: CATEGORY_SKILLS | null
    tag: TAG_SKILLS | null
    onChangeCategory: (value: CATEGORY_SKILLS | null) => void
    onChangeTag: (value: TAG_SKILLS | null) => void
}

const SkillFilter = ({
    categories,
    tags,
    category,
    tag,
    onChangeCategory,
    onChangeTag,
}: IProps) => {
    const { t } = useTranslation()

    return (
        <div className={styles.filters}>
            <div className={styles.filterRow}>
                <span className={styles.filterLabel}>{t('category')}:</span>
                <button
                    type="button"
                    className={!category ? styles.chipActive : styles.chip}
                    onClick={() => onChangeCategory(null)}
                >
                    {t('all')}
                </button>
                {categories.map((item) => (
                    <button
                        key={item}
                        type="button"
                        className={
                            category === item ? styles.chipActive : styles.chip
                        }
                        onClick={() =>
                            onChangeCategory(category === item ? null : item)
                        }
                    >
                        {item}
                    </button>
                ))}
            </div>
            <div className={styles.filterRow}>
                <span className={styles.filterLabel}>{t('tag')}:</span>
                <button
                    type="button"
                    className={!tag ? styles.chipActive : styles.chip}
                    onClick={() => onChangeTag(null)}
                >
                    {t('all')}
                </button>
                {tags.map((item) => (
                    <button
                        key={item}
                        type="button"
                        className={tag === item ? styles.chipActive : styles.chip}
                        onClick={() => onChangeTag(tag === item ? null : item)}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default SkillFilter

import { useMemo, useState } from 'react'

import { useTranslation } from 'react-i18next'

import { CATEGORY_SKILLS, SKILL, TAG_SKILLS } from '../../constants/skill'

import styles from './SkillBlock.module.scss'
import ItemSkill from './components/ItemSkill/ItemSkill'

const toList = <T,>(value?: T | T[]): T[] =>
    value === undefined ? [] : Array.isArray(value) ? value : [value]

export const SkillBlock = () => {
    const { t } = useTranslation()
    const [category, setCategory] = useState<CATEGORY_SKILLS | null>(null)
    const [tag, setTag] = useState<TAG_SKILLS | null>(null)

    const shuffled = useMemo(
        () => [...SKILL].sort(() => Math.random() - 0.5),
        []
    )

    const categories = useMemo(
        () =>
            [...new Set(SKILL.flatMap((skill) => toList(skill.category)))],
        []
    )
    const tags = useMemo(
        () => [...new Set(SKILL.flatMap((skill) => toList(skill.tag)))],
        []
    )

    const list = useMemo(
        () =>
            shuffled.filter(
                (skill) =>
                    (category === null ||
                        toList(skill.category).includes(category)) &&
                    (tag === null || toList(skill.tag).includes(tag))
            ),
        [shuffled, category, tag]
    )

    const chipClass = (isActive: boolean) =>
        `${styles.chip}${isActive ? ` ${styles.chipActive}` : ''}`

    return (
        <div>
            <h2>{t('skills')}</h2>
            <div className={styles.filter}>
                <div className={styles.filterGroup}>
                    <span className={styles.filterLabel}>
                        {t('category')}:
                    </span>
                    <button
                        className={chipClass(category === null)}
                        aria-pressed={category === null}
                        onClick={() => setCategory(null)}
                    >
                        {t('all')}
                    </button>
                    {categories.map((item) => (
                        <button
                            key={item}
                            className={chipClass(category === item)}
                            aria-pressed={category === item}
                            onClick={() =>
                                setCategory(category === item ? null : item)
                            }
                        >
                            {item}
                        </button>
                    ))}
                </div>
                <div className={styles.filterGroup}>
                    <span className={styles.filterLabel}>{t('tag')}:</span>
                    <button
                        className={chipClass(tag === null)}
                        aria-pressed={tag === null}
                        onClick={() => setTag(null)}
                    >
                        {t('all')}
                    </button>
                    {tags.map((item) => (
                        <button
                            key={item}
                            className={chipClass(tag === item)}
                            aria-pressed={tag === item}
                            onClick={() => setTag(tag === item ? null : item)}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
            <div className={styles.skillBlocks}>
                {list.map((skill) => (
                    <ItemSkill
                        key={skill.id}
                        id={skill.id}
                        name={skill.name}
                        category={skill.category}
                        tag={skill.tag}
                    />
                ))}
            </div>
            {list.length === 0 && (
                <div className={styles.empty}>{t('noSkills')}</div>
            )}
        </div>
    )
}

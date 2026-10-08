import { useMemo, useState } from 'react'

import { useTranslation } from 'react-i18next'

import {
    CATEGORY_SKILLS,
    SKILL,
    TAG_SKILLS,
} from '../../constants/skill'

import styles from './SkillBlock.module.scss'
import ItemSkill from './components/ItemSkill/ItemSkill'
import SkillFilter from './components/SkillFilter/SkillFilter'

const toArr = <T,>(value?: T | T[]): T[] =>
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
            Object.values(CATEGORY_SKILLS).filter((item) =>
                SKILL.some((skill) => toArr(skill.category).includes(item))
            ),
        []
    )

    const tags = useMemo(
        () =>
            Object.values(TAG_SKILLS).filter((item) =>
                SKILL.some((skill) => toArr(skill.tag).includes(item))
            ),
        []
    )

    const filtered = useMemo(
        () =>
            shuffled.filter(
                (skill) =>
                    (!category || toArr(skill.category).includes(category)) &&
                    (!tag || toArr(skill.tag).includes(tag))
            ),
        [shuffled, category, tag]
    )

    return (
        <div>
            <h2>{t('skills')}</h2>
            <SkillFilter
                categories={categories}
                tags={tags}
                category={category}
                tag={tag}
                onChangeCategory={setCategory}
                onChangeTag={setTag}
            />
            <div className={styles.skillBlocks}>
                {filtered.length ? (
                    filtered.map((skill) => (
                        <ItemSkill
                            key={skill.id}
                            id={skill.id}
                            name={skill.name}
                            category={skill.category}
                            tag={skill.tag}
                        />
                    ))
                ) : (
                    <p className={styles.empty}>{t('nothingFound')}</p>
                )}
            </div>
        </div>
    )
}

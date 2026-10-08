import { useMemo } from 'react'

import { useTranslation } from 'react-i18next'

import { SKILL } from '../../constants/skill'

import styles from './SkillBlock.module.scss'
import ItemSkill from './components/ItemSkill/ItemSkill'

export const SkillBlock = () => {
    const { t } = useTranslation()
    const shuffled = useMemo(
        () => [...SKILL].sort(() => Math.random() - 0.5),
        []
      )

    return (
        <div>
            <h2>{t('skills')}</h2>
            <div className={styles.skillBlocks}>
                {shuffled.map((skill) => (
                    <ItemSkill
                        id={skill.id}
                        name={skill.name}
                        category={skill.category}
                        tag={skill.tag}
                    />
                ))}
            </div>
        </div>
    )
}

import { useMemo } from 'react'

import styles from './ItemSkill.module.scss'

import {
    IPropsSkill,
    CATEGORY_SKILLS,
    TAG_SKILLS,
} from '../../../../constants/skill'
import { randomHexBetween, randomRgb } from '../../../../utils/colors'

const ItemSkill = ({ id, name, category, tag }: IPropsSkill) => {
    const alpha = useMemo(() => Math.random() * 0.5 + 0.5, [])
    const rndColorText = useMemo(
        () => randomHexBetween('#000000', '#333333'),
        [],
    )
    const rndColorBgRgb = randomRgb(200, 255)

    const categoryRender = (catName: CATEGORY_SKILLS | CATEGORY_SKILLS[]) => {
        if (Array.isArray(catName)) {
            return catName.map((item) => (
                <div className={styles.catLabel}>{item}</div>
            ))
        } else {
            return <div className={styles.catLabel}>{catName}</div>
        }
    }

    const tagRender = (tagName: TAG_SKILLS | TAG_SKILLS[]) => {
        if (Array.isArray(tagName)) {
            return tagName.map((item) => (
                <div className={styles.tagLabel}>{item}</div>
            ))
        } else {
            return <div className={styles.tagLabel}>{tagName}</div>
        }
    }

    return (
        <div
            key={id}
            className={styles.item}
            style={
                {
                    '--bg-alpha': alpha,
                    '--rnd-color-item': rndColorText,
                    '--rnd-bg-color-rgb': rndColorBgRgb,
                } as React.CSSProperties
            }
        >
            {name}
            <div>
                <div className={styles.catLabelWrapper}>
                    {categoryRender(category)}
                    {tag && tagRender(tag)}
                </div>
            </div>
        </div>
    )
}

export default ItemSkill

export const randomHexBetween = (min: string, max: string): string => {
    const parse = (hex: string) => {
        const h = hex.replace('#', '')
        return {
            r: parseInt(h.slice(0, 2), 16),
            g: parseInt(h.slice(2, 4), 16),
            b: parseInt(h.slice(4, 6), 16),
        }
    }

    const a = parse(min)
    const b = parse(max)
    const rand = (x: number, y: number) =>
        Math.floor(Math.random() * (y - x + 1)) + x

    const r = rand(a.r, b.r)
    const g = rand(a.g, b.g)
    const b2 = rand(a.b, b.b)

    const toHex = (n: number) => n.toString(16).padStart(2, '0')
    return `#${toHex(r)}${toHex(g)}${toHex(b2)}`
}

export const randomRgb = (min = 0, max = 255): string => {
    // примеры:
    // randomRgb(0, 51)     // '12, 40, 33' — тёмные
    // randomRgb(200, 255)  // '230, 210, 245' — светлые
    // randomRgb()          // '87, 210, 45'  — любые

    const c = () => Math.floor(Math.random() * (max - min + 1)) + min
    return `${c()}, ${c()}, ${c()}`
}

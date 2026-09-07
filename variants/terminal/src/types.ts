export type Color = 'd' | 'b' | 'a' | 'am' | 'cy' | 'r' | 'mg' | 'm'

export type Seg = { t: string; c?: Color; href?: string }

export type Line = Seg[]

export type Entry = {
  id: number
  cmd: string
  output: Line[]
  revealed: number
}

export const ln = (t: string, c?: Color): Seg[] => [{ t, c }]
export const seg = (t: string, c?: Color, href?: string): Seg => ({ t, c, href })

const link = (t: string, href: string): Seg => ({ t, c: 'b', href })

export { link }

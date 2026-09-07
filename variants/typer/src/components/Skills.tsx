import { CodeWindow } from './CodeWindow'
import { CodeBlock } from './CodeBlock'
import { skillGroups } from '@/data'

function buildSkillsCode(): string {
  const lines = ['const skills = {']
  skillGroups.forEach((g) => {
    const arr = g.items.map((i) => `"${i}"`).join(', ')
    lines.push(`  ${g.category}: [${arr}],`)
  })
  lines.push('}')
  return lines.join('\n')
}

const SKILLS_CODE = buildSkillsCode()

export function Skills() {
  return (
    <CodeWindow
      filename="skills.ts"
      lang="ts"
      showGutter
      lineCount={SKILLS_CODE.split('\n').length}
      className="w-full"
      bodyClassName="bg-canvas"
    >
      <CodeBlock code={SKILLS_CODE} />
    </CodeWindow>
  )
}

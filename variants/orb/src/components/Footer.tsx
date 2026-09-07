export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 sm:flex-row">
        <p className="label">{new Date().getFullYear()} · Noor Akhnafal Aban</p>
        <p className="label opacity-60">Built with React · Tailwind · Motion</p>
      </div>
    </footer>
  )
}

import type { ReactNode } from 'react'

export function Divider() {
  return <div aria-hidden="true" className="my-8 flex w-52 items-center justify-center gap-3 text-[#b2935d]"><span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#b2935d]/70" /><span className="text-sm">✦</span><span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#b2935d]/70" /></div>
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-center text-[10px] font-semibold uppercase tracking-[.32em] text-[#987746] sm:text-xs">{children}</p>
}

import { useEffect, useState } from 'react'
import { CalendarDays, Clock3, Copy, MapPin } from 'lucide-react'
import { Divider, Eyebrow } from './InvitationPrimitives'

const TARGET = new Date('2026-11-16T17:00:00+05:30').getTime()

export function WelcomeSection() {
  return <section className="flex flex-col items-center px-2 text-center">
    <p className="arabic text-2xl leading-loose text-[#92794e] sm:text-3xl" lang="ar">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
    <Divider />
    <Eyebrow>With the blessings of Allah</Eyebrow>
    <h1 className="mt-3 text-xs font-semibold uppercase tracking-[.55em] text-[#657052]">The Nikkah of</h1>
    <p className="mt-5 max-w-sm text-base italic leading-relaxed text-[#777762]">With the blessings of Allah and the love and prayers of our families, we warmly invite you to celebrate</p>
    <h2 className="script mt-6 text-7xl leading-none text-[#586349] sm:text-8xl">Faris</h2>
    <p className="mt-2 text-[11px] uppercase tracking-[.16em] text-[#85816c]">Son of Hyderkutty &amp; Ansar Beegum</p>
    <p className="script my-2 text-5xl text-[#b2935d]">&amp;</p>
    <h2 className="script text-7xl leading-none text-[#586349] sm:text-8xl">Shifa</h2>
    <p className="mt-2 text-[11px] uppercase tracking-[.16em] text-[#85816c]">Daughter of Gafoor M &amp; Haseena</p>
    <div className="mt-8 rounded-full border border-[#c3b18c]/70 bg-white/50 px-5 py-2 text-xs tracking-[.2em] text-[#7c725b]">MONDAY · 16 NOVEMBER 2026</div>
  </section>
}

export function VerseSection() {
  return <section className="rounded-[2rem] border border-[#d7caa9]/75 bg-[#f8f6ee]/65 px-6 py-9 text-center shadow-[0_12px_40px_rgba(75,76,52,.05)] sm:px-10">
    <Eyebrow>From the Holy Qur’an · 30:21</Eyebrow>
    <h2 className="script mt-3 text-5xl text-[#92794e]">A sacred promise</h2>
    <p className="arabic mt-5 text-2xl font-bold leading-[2.1] text-[#59634b]" lang="ar" dir="rtl">وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً</p>
    <p className="mt-4 text-sm italic leading-relaxed text-[#777762]">“And of His signs is that He created for you from yourselves mates that you may find tranquillity in them; and He placed between you affection and mercy.”</p>
    <p className="mt-4 text-[10px] uppercase tracking-[.24em] text-[#987746]">Sūrah Ar-Rūm · 30:21</p>
  </section>
}

function Countdown() {
  const [now, setNow] = useState(Date.now())
  useEffect(() => { const timer = window.setInterval(() => setNow(Date.now()), 1000); return () => window.clearInterval(timer) }, [])
  const remaining = Math.max(0, TARGET - now)
  const units = [['Days', Math.floor(remaining / 864e5)], ['Hours', Math.floor(remaining / 36e5) % 24], ['Mins', Math.floor(remaining / 6e4) % 60], ['Secs', Math.floor(remaining / 1e3) % 60]] as const
  return <div className="grid grid-cols-4 gap-2 sm:gap-3">{units.map(([label, value]) => <div key={label} className="rounded-2xl border border-[#d7caa9]/70 bg-white/55 px-1 py-3 sm:py-4"><p className="text-2xl font-medium tabular-nums text-[#59634b] sm:text-3xl">{String(value).padStart(2, '0')}</p><p className="mt-1 text-[8px] uppercase tracking-[.16em] text-[#987746] sm:text-[9px]">{label}</p></div>)}</div>
}

export function DateSection() {
  return <section className="text-center"><Eyebrow>Mark your calendar</Eyebrow><h2 className="script mt-2 text-5xl text-[#92794e] sm:text-6xl">Save the date</h2><div className="mx-auto mt-7 flex max-w-sm items-center justify-center gap-4 rounded-3xl border border-[#d7caa9]/75 bg-white/45 px-5 py-5"><CalendarDays className="text-[#92794e]" size={25} strokeWidth={1.4} /><div className="text-left"><p className="text-lg font-semibold text-[#59634b]">Monday, 16 November 2026</p><p className="text-xs text-[#85816c]">A day we’ll remember forever</p></div></div><div className="mx-auto mt-7 max-w-sm"><Countdown /></div></section>
}

export function EventSection() {
  const [copied, setCopied] = useState(false)
  const address = 'Hiza Convention Center, Udirampoyil'
  const copy = async () => { try { await navigator.clipboard.writeText(address); setCopied(true); window.setTimeout(() => setCopied(false), 1800) } catch { window.prompt('Copy address:', address) } }
  return <section className="text-center"><Eyebrow>Join us as we begin</Eyebrow><h2 className="script mt-2 text-5xl text-[#92794e] sm:text-6xl">Where hearts meet</h2><article className="mt-7 rounded-[2rem] border border-[#d7caa9]/75 bg-white/55 p-6 text-left shadow-[0_12px_40px_rgba(75,76,52,.06)] sm:p-8">
    <div className="flex items-start justify-between gap-4"><div><span className="inline-flex rounded-full bg-[#eae5d5] px-3 py-1 text-[9px] font-semibold uppercase tracking-[.2em] text-[#817149]">Nikkah ceremony</span><h3 className="mt-4 text-2xl font-semibold leading-tight text-[#59634b]">Hiza Convention Center</h3><p className="mt-1 text-sm text-[#85816c]">Udirampoyil</p></div><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ece9dd] text-[#92794e]"><MapPin size={22} strokeWidth={1.5} /></div></div>
    <div className="my-5 h-px bg-[#d7caa9]/75"/><div className="flex items-center gap-2 text-sm text-[#777762]"><CalendarDays size={16} className="text-[#987746]"/> Monday, 16 November 2026</div><div className="mt-3 flex items-center gap-2 text-sm text-[#777762]"><Clock3 size={16} className="text-[#987746]"/> 5:00 PM</div>
    <div className="mt-6 grid grid-cols-2 gap-3"><a href="https://maps.app.goo.gl/ktKtg1LwXNGYUemk9" target="_blank" rel="noreferrer" className="flex min-h-12 items-center justify-center rounded-full bg-[#647052] px-3 text-center text-[9px] font-semibold uppercase tracking-[.16em] text-white transition hover:bg-[#4f5b40] sm:text-[10px]">Get directions <span className="ml-2">↗</span></a><button onClick={copy} className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#b2935d]/50 px-3 text-[9px] font-semibold uppercase tracking-[.13em] text-[#766543] transition hover:bg-[#f0ecdf] sm:text-[10px]"><Copy size={13}/>{copied ? 'Copied!' : 'Copy address'}</button></div>
  </article></section>
}

export function ClosingSection() {
  return <footer className="pb-2 text-center"><Divider /><p className="script text-5xl text-[#92794e]">With love &amp; duas</p><p className="mx-auto mt-3 max-w-xs text-sm italic leading-relaxed text-[#777762]">Your presence and prayers will make our day complete.</p><p className="mt-6 text-[9px] uppercase tracking-[.3em] text-[#8f7954]">Faris &amp; Shifa · 2026</p></footer>
}

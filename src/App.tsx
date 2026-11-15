import { useState } from 'react'
import { EnvelopeLanding } from './components/EnvelopeLanding'
import { ClosingSection, DateSection, EventSection, VerseSection, WelcomeSection } from './components/InvitationSections'

export default function App() {
  const [opened, setOpened] = useState(false)
  return <div className="invitation-bg relative min-h-screen overflow-hidden text-[#4e5942]">
    <div className="pointer-events-none fixed inset-0 opacity-50" aria-hidden="true"><span className="ambient ambient-a"/><span className="ambient ambient-b"/><span className="ambient ambient-c"/></div>
    {opened && <main className="invitation-content relative z-10 mx-auto flex w-full max-w-2xl flex-col gap-12 px-5 pb-16 pt-12 sm:gap-16 sm:px-10 sm:pt-16">
      <WelcomeSection/><VerseSection/><DateSection/><EventSection/><ClosingSection/>
    </main>}
    {!opened && <div className="fixed inset-0 z-10" />}
    <EnvelopeLanding onOpen={() => { setOpened(true); window.scrollTo({ top: 0, behavior: 'smooth' }) }}/>
  </div>
}

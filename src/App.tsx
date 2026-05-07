import { useEffect, useState } from 'react'
import { PhoneFrame, StatusBar } from '@/components/PhoneFrame'
import { BottomNav } from '@/components/BottomNav'
import { Splash } from '@/screens/Splash'
import { Onboarding } from '@/screens/Onboarding'
import { Today } from '@/screens/Today'
import { Club } from '@/screens/Club'
import { Stylist } from '@/screens/Stylist'
import { Wellness } from '@/screens/Wellness'
import { Shop } from '@/screens/Shop'
import { Profile } from '@/screens/Profile'
import type { Screen } from '@/lib/data'

const tabs: Screen[] = ['today', 'club', 'stylist', 'wellness', 'shop']

function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(max-width: 768px)').matches
  })
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return isMobile
}

function ScreenContent({
  screen,
  setScreen,
  showStatusBar,
  darkStatus,
}: {
  screen: Screen
  setScreen: (s: Screen) => void
  showStatusBar: boolean
  darkStatus: boolean
}) {
  return (
    <>
      {showStatusBar && <StatusBar dark={darkStatus} />}
      {screen === 'splash' && <Splash onStart={() => setScreen('onboarding')} />}
      {screen === 'onboarding' && <Onboarding onDone={() => setScreen('today')} />}
      {screen === 'today' && <Today go={setScreen} />}
      {screen === 'club' && <Club />}
      {screen === 'stylist' && <Stylist />}
      {screen === 'wellness' && <Wellness />}
      {screen === 'shop' && <Shop />}
      {screen === 'profile' && <Profile go={setScreen} />}

      {tabs.includes(screen) && <BottomNav active={screen} onChange={setScreen} />}
    </>
  )
}

function App() {
  const [screen, setScreen] = useState<Screen>('splash')
  const isMobile = useIsMobile()

  const darkStatus = screen === 'splash'

  // Mobile: full-screen app, no chrome
  if (isMobile) {
    return (
      <div className="relative h-[100dvh] w-full overflow-hidden bg-background">
        <ScreenContent
          screen={screen}
          setScreen={setScreen}
          showStatusBar={false}
          darkStatus={darkStatus}
        />
      </div>
    )
  }

  // Desktop: showcase view with phone frame and sidebar
  const navItems: { label: string; screen: Screen }[] = [
    { label: 'Главная', screen: 'today' },
    { label: 'Онбординг', screen: 'onboarding' },
    { label: 'Клуб', screen: 'club' },
    { label: 'Стилист', screen: 'stylist' },
    { label: 'Wellness', screen: 'wellness' },
    { label: 'Магазин', screen: 'shop' },
    { label: 'Профиль', screen: 'profile' },
    { label: 'Splash', screen: 'splash' },
  ]

  return (
    <div className="grain min-h-screen w-full bg-[#efeae2]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-10 px-6 py-10 lg:flex-row lg:items-start lg:justify-center lg:gap-16">
        <aside className="w-full max-w-[420px] lg:sticky lg:top-10 lg:max-w-[340px]">
          <div className="flex items-center gap-2 text-[11px] font-medium tracking-[0.3em] text-foreground/70">
            <span>Z A R I N A</span>
            <span className="text-foreground/30">·</span>
            <span>C L U B</span>
          </div>
          <h1 className="mt-3 font-display text-[44px] leading-[0.95]">
            Прототип<br />мобильного<br /><em className="not-italic text-[hsl(var(--brand))]">приложения</em>
          </h1>
          <p className="mt-4 text-[13px] leading-relaxed text-foreground/60">
            Lifestyle-платформа: программа лояльности нового типа, ежедневная геймификация, wellness-контент и AI-стилист в одном приложении.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-2">
            {navItems.map(t => (
              <button
                key={t.screen}
                onClick={() => setScreen(t.screen)}
                className={`rounded-full border px-3 py-2 text-[11px] font-semibold transition-all ${
                  screen === t.screen
                    ? 'border-foreground bg-foreground text-background'
                    : 'border-foreground/15 bg-white/60 text-foreground/70 hover:border-foreground/40'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="mt-7 rounded-2xl border border-foreground/10 bg-white/50 p-4 text-[11px] leading-relaxed text-foreground/65">
            <p className="font-semibold text-foreground/80">Концепция</p>
            <p className="mt-1">
              Лояльность через вовлечение, а не через скидки. Ежедневная точка контакта, геймификация как формирование привычки, покупка — органичный итог сценария.
            </p>
          </div>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {['iOS 14+', 'Android 8+', 'AI-стилист', '152-ФЗ', 'A/B'].map(t => (
              <span
                key={t}
                className="rounded-full border border-foreground/15 bg-white/40 px-2.5 py-1 text-[10px] font-medium text-foreground/65"
              >
                {t}
              </span>
            ))}
          </div>
        </aside>

        <div className="shrink-0">
          <PhoneFrame>
            <ScreenContent
              screen={screen}
              setScreen={setScreen}
              showStatusBar={true}
              darkStatus={darkStatus}
            />
          </PhoneFrame>
          <p className="mt-4 text-center text-[11px] text-foreground/45">iPhone · 390 × 844</p>
        </div>
      </div>
    </div>
  )
}

export default App

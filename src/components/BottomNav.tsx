import { Sun, Sparkles, Heart, ShoppingBag, Crown } from 'lucide-react'
import type { Screen } from '@/lib/data'

const tabs: { id: Screen; label: string; Icon: any }[] = [
  { id: 'today', label: 'Сегодня', Icon: Sun },
  { id: 'club', label: 'Клуб', Icon: Crown },
  { id: 'stylist', label: 'Стилист', Icon: Sparkles },
  { id: 'wellness', label: 'Wellness', Icon: Heart },
  { id: 'shop', label: 'Магазин', Icon: ShoppingBag },
]

export function BottomNav({
  active,
  onChange,
}: {
  active: Screen
  onChange: (s: Screen) => void
}) {
  return (
    <div className="absolute inset-x-0 bottom-0 z-30">
      <div className="pointer-events-none absolute inset-x-0 -top-6 h-6 bg-gradient-to-t from-background to-transparent" />
      <div className="border-t border-border/60 bg-background/90 backdrop-blur-xl">
        <div className="flex items-end justify-between px-2 pb-5 pt-2">
          {tabs.map(({ id, label, Icon }) => {
            const isActive = active === id
            return (
              <button
                key={id}
                onClick={() => onChange(id)}
                className="flex flex-1 flex-col items-center gap-1 py-1"
              >
                <div
                  className={`flex h-7 w-12 items-center justify-center rounded-full transition-all ${
                    isActive ? 'bg-foreground text-background' : 'text-foreground/60'
                  }`}
                >
                  <Icon size={isActive ? 16 : 18} strokeWidth={1.8} />
                </div>
                <span
                  className={`text-[10px] font-medium tracking-wide ${
                    isActive ? 'text-foreground' : 'text-foreground/50'
                  }`}
                >
                  {label}
                </span>
              </button>
            )
          })}
        </div>
        <div className="flex justify-center pb-1.5">
          <div className="h-1 w-32 rounded-full bg-foreground/80" />
        </div>
      </div>
    </div>
  )
}

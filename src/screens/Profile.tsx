import { ArrowLeft, ChevronRight, MapPin, Bell, Shield, HelpCircle, LogOut, Heart, Package, Crown, Settings } from 'lucide-react'
import { user } from '@/lib/data'
import type { Screen } from '@/lib/data'

export function Profile({ go }: { go: (s: Screen) => void }) {
  return (
    <div className="absolute inset-0 overflow-y-auto pb-28 no-scrollbar">
      <div className="px-6 pt-14">
        <div className="flex items-center justify-between">
          <button
            onClick={() => go('today')}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card"
          >
            <ArrowLeft size={17} strokeWidth={1.6} />
          </button>
          <h1 className="text-[14px] font-semibold tracking-wide">Профиль</h1>
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card">
            <Settings size={17} strokeWidth={1.6} />
          </button>
        </div>
      </div>

      {/* User card */}
      <div className="mt-6 px-6">
        <div className="flex flex-col items-center text-center">
          <div className="relative h-20 w-20 overflow-hidden rounded-full bg-foreground text-background flex items-center justify-center">
            <span className="font-display text-[34px]">А</span>
          </div>
          <h2 className="mt-3 font-display text-[28px] leading-tight">{user.name} Соколова</h2>
          <p className="mt-1 text-[12px] text-foreground/55">+7 ··· ··· ·· 12 · {user.city}</p>
          <div className="mt-3 flex items-center gap-1.5 rounded-full bg-[hsl(var(--brand))]/10 px-3 py-1.5">
            <Crown size={12} className="text-[hsl(var(--brand))]" />
            <span className="text-[11px] font-semibold text-[hsl(var(--brand))]">{user.status} · {user.points.toLocaleString('ru')} баллов</span>
          </div>
        </div>
      </div>

      {/* Quick stats */}
      <div className="mt-6 grid grid-cols-3 gap-2 px-6">
        <div className="rounded-2xl border border-border bg-card p-3 text-center">
          <p className="font-display text-[22px] leading-none">{user.streak}</p>
          <p className="mt-1 text-[10px] text-foreground/55">дней подряд</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-3 text-center">
          <p className="font-display text-[22px] leading-none">42</p>
          <p className="mt-1 text-[10px] text-foreground/55">вещи в гардеробе</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-3 text-center">
          <p className="font-display text-[22px] leading-none">18</p>
          <p className="mt-1 text-[10px] text-foreground/55">образов</p>
        </div>
      </div>

      {/* Menu sections */}
      <div className="mt-7 px-6">
        <p className="text-[10px] font-semibold tracking-[0.2em] text-foreground/45 uppercase">Покупки</p>
        <div className="mt-2 overflow-hidden rounded-2xl border border-border bg-card">
          <MenuItem Icon={Package} label="Мои заказы" hint="2 в пути" />
          <MenuItem Icon={Heart} label="Избранное" hint="14" />
          <MenuItem Icon={MapPin} label="Адреса доставки" />
        </div>

        <p className="mt-6 text-[10px] font-semibold tracking-[0.2em] text-foreground/45 uppercase">Настройки</p>
        <div className="mt-2 overflow-hidden rounded-2xl border border-border bg-card">
          <MenuItem Icon={Bell} label="Уведомления" toggle />
          <MenuItem Icon={Shield} label="Согласия и данные" />
          <MenuItem Icon={HelpCircle} label="Поддержка" />
        </div>

        <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border border-border bg-card py-3.5 text-[13px] font-semibold text-foreground/70">
          <LogOut size={14} strokeWidth={1.6} />
          Выйти из аккаунта
        </button>

        <p className="mt-5 text-center text-[10px] text-foreground/40">ZARINA CLUB · v1.0</p>
      </div>
      <div className="h-4" />
    </div>
  )
}

function MenuItem({
  Icon,
  label,
  hint,
  toggle,
}: {
  Icon: any
  label: string
  hint?: string
  toggle?: boolean
}) {
  return (
    <button className="flex w-full items-center gap-3 border-b border-border/60 px-4 py-3.5 last:border-b-0">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-foreground/70">
        <Icon size={16} strokeWidth={1.6} />
      </div>
      <span className="flex-1 text-left text-[13px] font-semibold">{label}</span>
      {hint && <span className="text-[11px] text-foreground/55">{hint}</span>}
      {toggle ? (
        <div className="flex h-6 w-10 items-center rounded-full bg-foreground p-0.5">
          <div className="ml-auto h-5 w-5 rounded-full bg-background" />
        </div>
      ) : (
        <ChevronRight size={14} className="text-foreground/40" />
      )}
    </button>
  )
}

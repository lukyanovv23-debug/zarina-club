import {
  ChevronRight,
  Flame,
  Sparkles,
  Leaf,
  Layers,
  Crown,
  Users,
  Truck,
  Gift,
  Star,
  UserCircle,
  PackageOpen,
  QrCode,
} from 'lucide-react'
import { user, achievements, missions, events, benefits } from '@/lib/data'

const iconMap: Record<string, any> = {
  Flame, Sparkles, Leaf, Layers, Crown, Users, Truck, Gift, Star, UserCircle, PackageOpen,
}

export function Club() {
  return (
    <div className="absolute inset-0 overflow-y-auto pb-28 no-scrollbar">
      <div className="px-6 pt-14">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[12px] tracking-wide text-foreground/50">Программа лояльности</p>
            <h1 className="font-display text-[28px] leading-tight">ZARINA Club</h1>
          </div>
        </div>
      </div>

      {/* Membership card */}
      <div className="mt-6 px-6">
        <div className="relative overflow-hidden rounded-[26px] bg-gradient-to-br from-[#2a1d17] via-[#3d2a20] to-[#1a1410] p-6 text-white">
          <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-[hsl(var(--brand-soft))]/10 blur-2xl" />
          <div className="absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-[hsl(var(--gold))]/10 blur-2xl" />

          <div className="relative flex items-start justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-[10px] font-medium tracking-[0.3em] text-white/60">
                <span>Z A R I N A</span>
                <span>·</span>
                <span>C L U B</span>
              </div>
              <h2 className="mt-4 font-display text-[32px] leading-none">{user.name}</h2>
              <div className="mt-1 flex items-center gap-1.5">
                <Crown size={13} className="text-[hsl(var(--gold))]" />
                <span className="text-[12px] font-medium tracking-wide text-white/80">
                  {user.status} · участник с {user.joined}
                </span>
              </div>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/95">
              <QrCode size={32} className="text-[#1a1410]" strokeWidth={1.5} />
            </div>
          </div>

          <div className="relative mt-7">
            <div className="flex items-baseline justify-between">
              <div>
                <p className="text-[10px] tracking-[0.2em] text-white/50 uppercase">Баллы</p>
                <p className="font-display text-[36px] leading-none">{user.points.toLocaleString('ru')}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] tracking-[0.2em] text-white/50 uppercase">До {user.nextStatus}</p>
                <p className="text-[14px] font-semibold">{user.toNextStatus.toLocaleString('ru')}</p>
              </div>
            </div>
            <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/15">
              <div className="h-full rounded-full bg-gradient-to-r from-[hsl(var(--brand-soft))] to-[hsl(var(--gold))]" style={{ width: '71%' }} />
            </div>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          <button className="rounded-2xl border border-border bg-card py-3 text-center">
            <p className="text-[16px] font-semibold">12</p>
            <p className="text-[10px] text-foreground/55">покупок</p>
          </button>
          <button className="rounded-2xl border border-border bg-card py-3 text-center">
            <p className="text-[16px] font-semibold">38</p>
            <p className="text-[10px] text-foreground/55">квестов</p>
          </button>
          <button className="rounded-2xl border border-border bg-card py-3 text-center">
            <p className="text-[16px] font-semibold">3</p>
            <p className="text-[10px] text-foreground/55">события</p>
          </button>
        </div>
      </div>

      {/* Status journey */}
      <div className="mt-8 px-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] text-foreground/45 uppercase">
              Путь
            </p>
            <h3 className="font-display text-[22px] leading-tight">Статусы клуба</h3>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            { name: 'Welcome', earned: true },
            { name: 'Insider', earned: true, current: true },
            { name: 'Icon', earned: false },
          ].map(s => (
            <div
              key={s.name}
              className={`rounded-2xl border p-3 text-center ${
                s.current
                  ? 'border-[hsl(var(--brand))] bg-[hsl(var(--brand))]/5'
                  : s.earned
                  ? 'border-border bg-card'
                  : 'border-dashed border-border/60 bg-transparent'
              }`}
            >
              <Crown
                size={20}
                className={`mx-auto ${
                  s.current ? 'text-[hsl(var(--brand))]' : s.earned ? 'text-foreground/60' : 'text-foreground/30'
                }`}
                strokeWidth={1.5}
              />
              <p className="mt-1.5 text-[12px] font-semibold">{s.name}</p>
              {s.current && <p className="text-[9px] text-[hsl(var(--brand))]">сейчас</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Missions */}
      <div className="mt-8 px-6">
        <div className="flex items-end justify-between">
          <h3 className="font-display text-[22px] leading-tight">Активные миссии</h3>
          <button className="flex items-center gap-1 text-[12px] text-foreground/60">
            Все <ChevronRight size={14} />
          </button>
        </div>
        <div className="mt-3 space-y-2">
          {missions.map(m => (
            <div key={m.title} className="rounded-2xl border border-border bg-card p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1 pr-3">
                  <h4 className="text-[14px] font-semibold leading-tight">{m.title}</h4>
                  <p className="mt-0.5 text-[11px] text-foreground/55">{m.days}</p>
                </div>
                <div className="rounded-full bg-[hsl(var(--brand))]/10 px-2.5 py-1 text-[11px] font-semibold text-[hsl(var(--brand))]">
                  +{m.reward}
                </div>
              </div>
              <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-secondary">
                <div className="h-full rounded-full bg-foreground" style={{ width: `${m.progress * 100}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="mt-8 px-6">
        <h3 className="font-display text-[22px] leading-tight">Ачивменты</h3>
        <p className="mt-1 text-[12px] text-foreground/55">
          {achievements.filter(a => a.earned).length} из {achievements.length} получено
        </p>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {achievements.map(a => {
            const Icon = iconMap[a.icon] || Sparkles
            return (
              <div
                key={a.name}
                className={`flex flex-col items-center gap-2 rounded-2xl border p-3 text-center ${
                  a.earned ? 'border-border bg-card' : 'border-dashed border-border/50 bg-transparent opacity-50'
                }`}
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    a.earned ? 'bg-[hsl(var(--brand))]/10 text-[hsl(var(--brand))]' : 'bg-secondary text-foreground/40'
                  }`}
                >
                  <Icon size={18} strokeWidth={1.6} />
                </div>
                <p className="text-[10px] font-semibold leading-tight">{a.name}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Benefits */}
      <div className="mt-8 px-6">
        <h3 className="font-display text-[22px] leading-tight">Привилегии</h3>
        <div className="mt-3 space-y-2">
          {benefits.map(b => {
            const Icon = iconMap[b.icon] || Star
            const locked = b.tier === 'Icon'
            return (
              <div
                key={b.title}
                className={`flex items-center gap-3 rounded-2xl border bg-card p-3.5 ${
                  locked ? 'opacity-55' : ''
                }`}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-foreground/70">
                  <Icon size={16} strokeWidth={1.6} />
                </div>
                <div className="flex-1">
                  <p className="text-[13px] font-semibold leading-tight">{b.title}</p>
                  <p className="text-[10px] text-foreground/55 mt-0.5">
                    {locked ? `Откроется на ${b.tier}` : `Доступно на ${b.tier}`}
                  </p>
                </div>
                {locked && (
                  <span className="rounded-full bg-secondary px-2 py-1 text-[9px] font-semibold tracking-wide text-foreground/60">
                    ЗАКРЫТО
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Events */}
      <div className="mt-8 px-6">
        <h3 className="font-display text-[22px] leading-tight">Закрытые события</h3>
        <div className="mt-3 space-y-2">
          {events.map(e => (
            <div key={e.title} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
              <div className="flex w-12 shrink-0 flex-col items-center rounded-xl bg-secondary py-2">
                <span className="text-[9px] font-semibold tracking-wider text-foreground/60 uppercase">
                  {e.date.split(' ')[1]}
                </span>
                <span className="font-display text-[22px] leading-none">{e.date.split(' ')[0]}</span>
              </div>
              <div className="flex-1">
                <h4 className="text-[14px] font-semibold leading-tight">{e.title}</h4>
                <p className="mt-0.5 text-[11px] text-foreground/55">{e.place}</p>
              </div>
              <span
                className={`rounded-full px-2.5 py-1 text-[9px] font-semibold tracking-wide ${
                  e.tag.includes('Insider')
                    ? 'bg-[hsl(var(--brand))]/10 text-[hsl(var(--brand))]'
                    : 'bg-secondary text-foreground/70'
                }`}
              >
                {e.tag.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="h-4" />
    </div>
  )
}

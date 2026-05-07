import type { ReactNode } from 'react'

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      {/* Outer frame */}
      <div className="phone-shadow rounded-[3rem] bg-[#0c0a08] p-[14px]">
        {/* Inner bezel */}
        <div className="relative overflow-hidden rounded-[2.4rem] bg-background w-[390px] h-[844px]">
          {/* Notch */}
          <div className="absolute left-1/2 -translate-x-1/2 top-2 z-50 h-[30px] w-[112px] rounded-full bg-[#0c0a08]" />
          {/* Side buttons */}
          {children}
        </div>
      </div>
      <div className="absolute -left-[3px] top-[120px] h-[34px] w-[3px] rounded-l bg-[#0c0a08]/60" />
      <div className="absolute -left-[3px] top-[180px] h-[58px] w-[3px] rounded-l bg-[#0c0a08]/60" />
      <div className="absolute -left-[3px] top-[260px] h-[58px] w-[3px] rounded-l bg-[#0c0a08]/60" />
      <div className="absolute -right-[3px] top-[200px] h-[90px] w-[3px] rounded-r bg-[#0c0a08]/60" />
    </div>
  )
}

export function StatusBar({ dark = false }: { dark?: boolean }) {
  const c = dark ? 'text-white' : 'text-foreground'
  return (
    <div className={`relative z-40 flex items-center justify-between px-7 pt-3.5 pb-1 text-[14px] font-semibold ${c}`}>
      <span>9:41</span>
      <div className="flex items-center gap-1.5">
        <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
          <path d="M1 6.5h2v3H1zm4-2h2v5H5zm4-2h2v7H9zm4-2h2v9h-2z" />
        </svg>
        <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor">
          <path d="M7.5 2.5c1.7 0 3.3.6 4.5 1.7l1-1A8 8 0 002 3.2l1 1c1.2-1 2.8-1.7 4.5-1.7zM4.5 5l1 1A4 4 0 017.5 5c1 0 2 .4 2.7 1l1-1a5.5 5.5 0 00-6.7 0zm2 2l1 1 1-1a1.5 1.5 0 00-2 0z" />
        </svg>
        <div className="ml-1 flex h-[11px] w-[24px] items-center rounded-[3px] border border-current/60 px-[1px]">
          <div className="h-[7px] w-[18px] rounded-[1px] bg-current" />
        </div>
      </div>
    </div>
  )
}

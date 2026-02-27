import React, { useState } from 'react'

type Screen = 'home' | 'receive' | 'send' | 'history'

interface Props {
  onNavigate: (screen: Screen) => void
}

const transactions = [
  { id: 1, name: 'Priya Sharma', type: 'received', amount: 2500, time: '2 min ago', avatar: 'PS', color: '#e91e63' },
  { id: 2, name: 'Rahul Mehta', type: 'sent', amount: 800, time: '1 hr ago', avatar: 'RM', color: '#9c27b0' },
  { id: 3, name: 'Grocery Store', type: 'paid', amount: 1240, time: 'Yesterday', avatar: 'GS', color: '#00897b' },
  { id: 4, name: 'Netflix', type: 'paid', amount: 649, time: 'Yesterday', avatar: 'N', color: '#e53935' },
  { id: 5, name: 'Arjun Singh', type: 'received', amount: 5000, time: '2 days ago', avatar: 'AS', color: '#1e88e5' },
]

export default function HomeScreen({ onNavigate }: Props) {
  const [activeTab, setActiveTab] = useState<'home' | 'explore' | 'activity' | 'account'>('home')

  return (
    <div style={{ background: '#0f0f0f', minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Header */}
      <div style={{
        padding: '52px 20px 20px',
        background: 'linear-gradient(180deg, #1a1a2e 0%, #0f0f0f 100%)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              fontSize: '24px', fontWeight: '700',
              background: 'linear-gradient(135deg, #4285f4 0%, #34a853 35%, #fbbc04 65%, #ea4335 100%)',
              WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.5px'
            }}>GPey</div>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <button style={{
              background: '#1c1c1e', border: 'none', borderRadius: '50%',
              width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: '#fff'
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
            <div style={{
              width: '38px', height: '38px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #4285f4, #34a853)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '14px', fontWeight: '600', cursor: 'pointer', color: '#fff'
            }}>A</div>
          </div>
        </div>

        {/* Balance */}
        <div style={{ marginTop: '28px', marginBottom: '8px' }}>
          <p style={{ color: '#8e8e93', fontSize: '13px', marginBottom: '4px' }}>Total Balance</p>
          <h1 style={{ fontSize: '38px', fontWeight: '700', letterSpacing: '-1px' }}>₹24,856.00</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
            <div style={{
              background: 'rgba(52, 168, 83, 0.15)', borderRadius: '20px',
              padding: '2px 10px', display: 'inline-flex', alignItems: 'center', gap: '4px'
            }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#34a853">
                <path d="M7 14l5-5 5 5"/>
              </svg>
              <span style={{ color: '#34a853', fontSize: '12px', fontWeight: '600' }}>+₹2,500 today</span>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* HIGHLIGHTED RECEIVE MONEY SECTION           */}
      {/* ═══════════════════════════════════════════ */}
      <div style={{ padding: '0 16px', marginTop: '8px' }}>
        <button
          onClick={() => onNavigate('receive')}
          className="receive-btn"
          style={{
            width: '100%',
            background: 'linear-gradient(135deg, #1a1a00 0%, #2d2600 40%, #1a1a00 100%)',
            border: '1.5px solid rgba(255, 215, 0, 0.6)',
            borderRadius: '20px',
            padding: '20px 24px',
            cursor: 'pointer',
            textAlign: 'left',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 0 30px rgba(255, 215, 0, 0.15), 0 4px 20px rgba(0,0,0,0.4)',
          }}
        >
          {/* Glow background effect */}
          <div style={{
            position: 'absolute', top: '-30px', right: '-30px',
            width: '160px', height: '160px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,215,0,0.2) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Icon */}
            <div
              className="receive-icon-float"
              style={{
                width: '56px', height: '56px', borderRadius: '16px',
                background: 'linear-gradient(135deg, #FFD700, #FFB300)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(255, 215, 0, 0.5)',
                flexShrink: 0
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M12 2v14m0 0l-4-4m4 4l4-4" stroke="#1a1a00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 20h18" stroke="#1a1a00" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>

            <div>
              <div style={{
                fontSize: '18px', fontWeight: '700', marginBottom: '4px',
                display: 'flex', alignItems: 'center', gap: '8px'
              }}>
                <span className="receive-shimmer">Receive Money</span>
                <span
                  className="badge-pop"
                  style={{
                    background: 'linear-gradient(135deg, #FFD700, #FFB300)',
                    color: '#1a1a00', fontSize: '10px', fontWeight: '800',
                    padding: '2px 8px', borderRadius: '20px',
                    letterSpacing: '0.5px', textTransform: 'uppercase'
                  }}
                >
                  ✦ FAST
                </span>
              </div>
              <p style={{ color: 'rgba(255,215,0,0.7)', fontSize: '13px', fontWeight: '400' }}>
                Share your UPI ID or QR code
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div style={{
            width: '36px', height: '36px', borderRadius: '50%',
            background: 'rgba(255, 215, 0, 0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: '1px solid rgba(255,215,0,0.3)', flexShrink: 0
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2.5">
              <path d="M5 12h14m-6-6 6 6-6 6"/>
            </svg>
          </div>
        </button>
      </div>

      {/* Quick Actions Grid */}
      <div style={{ padding: '20px 16px 0' }}>
        <div style={{
          background: '#1c1c1e',
          borderRadius: '20px',
          padding: '20px 10px',
        }}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '8px',
          }}>
            {[
              { icon: SendIcon, label: 'Send', color: '#4285f4', action: 'send' as Screen },
              { icon: BillIcon, label: 'Bills', color: '#34a853', action: null },
              { icon: RechargeIcon, label: 'Recharge', color: '#fbbc04', action: null },
              { icon: MoreIcon, label: 'More', color: '#ea4335', action: null },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => item.action && onNavigate(item.action)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
                  padding: '8px 4px', borderRadius: '12px',
                  transition: 'background 0.15s',
                }}
              >
                <div style={{
                  width: '56px', height: '56px', borderRadius: '16px',
                  background: `${item.color}22`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: `1px solid ${item.color}33`
                }}>
                  <item.icon color={item.color} />
                </div>
                <span style={{ color: '#ebebf5', fontSize: '12px', fontWeight: '500' }}>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Promotions banner */}
      <div style={{ padding: '16px 16px 0' }}>
        <div style={{
          background: 'linear-gradient(135deg, #1a237e, #283593)',
          borderRadius: '16px', padding: '16px 18px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          border: '1px solid rgba(66,133,244,0.3)'
        }}>
          <div>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginBottom: '4px' }}>OFFER</p>
            <p style={{ fontSize: '15px', fontWeight: '600' }}>Cashback on every transfer!</p>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginTop: '2px' }}>Up to ₹50 per transaction</p>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.15)', borderRadius: '10px',
            padding: '8px 14px', fontSize: '13px', fontWeight: '600', color: '#fff', cursor: 'pointer'
          }}>Claim</div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div style={{ padding: '20px 16px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <h2 style={{ fontSize: '17px', fontWeight: '600' }}>Recent</h2>
          <button
            onClick={() => onNavigate('history')}
            style={{ background: 'none', border: 'none', color: '#4285f4', fontSize: '14px', cursor: 'pointer', fontWeight: '500' }}
          >See all</button>
        </div>

        <div style={{ background: '#1c1c1e', borderRadius: '20px', overflow: 'hidden' }}>
          {transactions.map((t, i) => (
            <div
              key={t.id}
              className={`slide-up slide-up-${Math.min(i + 1, 4)}`}
              style={{
                display: 'flex', alignItems: 'center', padding: '14px 16px',
                borderBottom: i < transactions.length - 1 ? '1px solid #2c2c2e' : 'none',
              }}
            >
              <div style={{
                width: '44px', height: '44px', borderRadius: '50%',
                background: t.color + '33', border: `1.5px solid ${t.color}55`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '15px', fontWeight: '700', color: t.color,
                flexShrink: 0, marginRight: '14px'
              }}>{t.avatar}</div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '15px', fontWeight: '500', marginBottom: '2px' }}>{t.name}</p>
                <p style={{ fontSize: '12px', color: '#8e8e93' }}>{t.time}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{
                  fontSize: '15px', fontWeight: '600',
                  color: t.type === 'received' ? '#34a853' : '#fff'
                }}>
                  {t.type === 'received' ? '+' : '-'}₹{t.amount.toLocaleString()}
                </p>
                <p style={{
                  fontSize: '11px', textTransform: 'capitalize',
                  color: t.type === 'received' ? '#34a853' : '#8e8e93'
                }}>{t.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div style={{
        position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)',
        width: '100%', maxWidth: '430px',
        background: 'rgba(18,18,18,0.95)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid #2c2c2e',
        padding: '10px 0 24px',
        display: 'flex', justifyContent: 'space-around', alignItems: 'center',
        zIndex: 100
      }}>
        {[
          { icon: HomeNavIcon, label: 'Home', tab: 'home' as const },
          { icon: ExploreNavIcon, label: 'Explore', tab: 'explore' as const },
          { icon: ActivityNavIcon, label: 'Activity', tab: 'activity' as const },
          { icon: AccountNavIcon, label: 'Account', tab: 'account' as const },
        ].map((item) => (
          <button
            key={item.tab}
            onClick={() => setActiveTab(item.tab)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
              padding: '4px 16px', opacity: activeTab === item.tab ? 1 : 0.5,
              transition: 'opacity 0.2s'
            }}
          >
            <item.icon active={activeTab === item.tab} />
            <span style={{
              fontSize: '11px', fontWeight: activeTab === item.tab ? '600' : '400',
              color: activeTab === item.tab ? '#4285f4' : '#8e8e93'
            }}>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

// SVG Icons
function SendIcon({ color }: { color: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M22 2L11 13" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 2L15 22 11 13 2 9l20-7z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function BillIcon({ color }: { color: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke={color} strokeWidth="2"/>
      <path d="M7 8h10M7 12h10M7 16h6" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function RechargeIcon({ color }: { color: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <rect x="7" y="2" width="10" height="18" rx="2" stroke={color} strokeWidth="2"/>
      <path d="M10 22h4" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M11 11l2-4v4l2 0-2 5v-5h-2z" fill={color}/>
    </svg>
  )
}

function MoreIcon({ color }: { color: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <circle cx="5" cy="12" r="2" fill={color}/>
      <circle cx="12" cy="12" r="2" fill={color}/>
      <circle cx="19" cy="12" r="2" fill={color}/>
    </svg>
  )
}

function HomeNavIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? '#4285f4' : 'none'} stroke={active ? '#4285f4' : '#8e8e93'} strokeWidth="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  )
}

function ExploreNavIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? '#4285f4' : '#8e8e93'} strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill={active ? '#4285f4' : 'none'}/>
    </svg>
  )
}

function ActivityNavIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? '#4285f4' : '#8e8e93'} strokeWidth="2">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  )
}

function AccountNavIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? '#4285f4' : 'none'} stroke={active ? '#4285f4' : '#8e8e93'} strokeWidth="2">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  )
}

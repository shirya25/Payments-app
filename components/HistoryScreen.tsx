import React, { useState } from 'react'

interface Props {
  onBack: () => void
}

const allTransactions = [
  { id: 1, name: 'Priya Sharma', type: 'received', amount: 2500, time: '2 min ago', date: 'Today', avatar: 'PS', color: '#e91e63', upi: 'priya@gpey' },
  { id: 2, name: 'Rahul Mehta', type: 'sent', amount: 800, time: '1 hr ago', date: 'Today', avatar: 'RM', color: '#9c27b0', upi: 'rahul@okaxis' },
  { id: 3, name: 'Grocery Store', type: 'paid', amount: 1240, time: '10 AM', date: 'Yesterday', avatar: 'GS', color: '#00897b', upi: 'grocery@ybl' },
  { id: 4, name: 'Netflix', type: 'paid', amount: 649, time: '12 PM', date: 'Yesterday', avatar: 'N', color: '#e53935', upi: 'netflix@icici' },
  { id: 5, name: 'Arjun Singh', type: 'received', amount: 5000, time: '3 PM', date: 'Mon, Feb 25', avatar: 'AS', color: '#1e88e5', upi: 'arjun@gpey' },
  { id: 6, name: 'Electricity Bill', type: 'paid', amount: 2100, time: '11 AM', date: 'Mon, Feb 25', avatar: 'EB', color: '#f57c00', upi: 'bescom@paytm' },
  { id: 7, name: 'Shreya Nair', type: 'received', amount: 1500, time: '6 PM', date: 'Sun, Feb 24', avatar: 'SN', color: '#26a69a', upi: 'shreya@gpey' },
  { id: 8, name: 'Swiggy', type: 'paid', amount: 340, time: '8 PM', date: 'Sun, Feb 24', avatar: 'SW', color: '#ff5722', upi: 'swiggy@icici' },
]

export default function HistoryScreen({ onBack }: Props) {
  const [filter, setFilter] = useState<'all' | 'received' | 'sent'>('all')

  const filtered = allTransactions.filter((t) => {
    if (filter === 'all') return true
    if (filter === 'received') return t.type === 'received'
    if (filter === 'sent') return t.type === 'sent' || t.type === 'paid'
    return true
  })

  const grouped = filtered.reduce<Record<string, typeof allTransactions>>((acc, t) => {
    if (!acc[t.date]) acc[t.date] = []
    acc[t.date].push(t)
    return acc
  }, {})

  return (
    <div style={{ background: '#0f0f0f', minHeight: '100vh', paddingBottom: '40px' }}>
      <div style={{ display: 'flex', alignItems: 'center', padding: '52px 20px 20px' }}>
        <button onClick={onBack} style={{
          background: '#1c1c1e', border: 'none', borderRadius: '50%',
          width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', color: '#fff', marginRight: '16px'
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
        </button>
        <h1 style={{ fontSize: '20px', fontWeight: '700' }}>Transaction History</h1>
      </div>

      {/* Filter tabs */}
      <div style={{
        display: 'flex', margin: '0 20px 20px',
        background: '#1c1c1e', borderRadius: '14px', padding: '4px',
      }}>
        {(['all', 'received', 'sent'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              flex: 1, padding: '10px',
              background: filter === f ? '#2c2c2e' : 'none',
              border: 'none', borderRadius: '10px',
              color: filter === f ? '#fff' : '#8e8e93',
              fontSize: '13px', fontWeight: '600', cursor: 'pointer',
              textTransform: 'capitalize', transition: 'all 0.2s'
            }}
          >{f}</button>
        ))}
      </div>

      {/* Grouped transactions */}
      {Object.entries(grouped).map(([date, txns]) => (
        <div key={date} style={{ padding: '0 20px 16px' }}>
          <p style={{ color: '#8e8e93', fontSize: '12px', fontWeight: '600', marginBottom: '10px', letterSpacing: '0.5px' }}>
            {date.toUpperCase()}
          </p>
          <div style={{ background: '#1c1c1e', borderRadius: '20px', overflow: 'hidden' }}>
            {txns.map((t, i) => (
              <div
                key={t.id}
                style={{
                  display: 'flex', alignItems: 'center', padding: '14px 16px',
                  borderBottom: i < txns.length - 1 ? '1px solid #2c2c2e' : 'none',
                }}
              >
                <div style={{
                  width: '44px', height: '44px', borderRadius: '50%',
                  background: t.color + '33',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '14px', fontWeight: '700', color: t.color,
                  marginRight: '14px', border: `1.5px solid ${t.color}55`, flexShrink: 0
                }}>{t.avatar}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: '15px', fontWeight: '500', marginBottom: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t.name}</p>
                  <p style={{ fontSize: '11px', color: '#8e8e93' }}>{t.time} · {t.upi}</p>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: '12px' }}>
                  <p style={{
                    fontSize: '15px', fontWeight: '600',
                    color: t.type === 'received' ? '#34a853' : '#fff'
                  }}>
                    {t.type === 'received' ? '+' : '-'}₹{t.amount.toLocaleString()}
                  </p>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '3px',
                    background: t.type === 'received' ? 'rgba(52,168,83,0.15)' : '#2c2c2e',
                    padding: '1px 8px', borderRadius: '20px', marginTop: '2px'
                  }}>
                    <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: t.type === 'received' ? '#34a853' : '#8e8e93' }} />
                    <span style={{ fontSize: '10px', color: t.type === 'received' ? '#34a853' : '#8e8e93', textTransform: 'capitalize' }}>
                      {t.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

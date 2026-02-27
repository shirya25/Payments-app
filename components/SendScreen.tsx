import React, { useState } from 'react'

interface Props {
  onBack: () => void
}

const contacts = [
  { name: 'Priya Sharma', upi: 'priya@gpey', avatar: 'PS', color: '#e91e63' },
  { name: 'Rahul Mehta', upi: 'rahul@okaxis', avatar: 'RM', color: '#9c27b0' },
  { name: 'Neha Gupta', upi: 'neha@ybl', avatar: 'NG', color: '#00897b' },
  { name: 'Vikram Patel', upi: 'vikram@gpey', avatar: 'VP', color: '#f57c00' },
]

export default function SendScreen({ onBack }: Props) {
  const [amount, setAmount] = useState('')
  const [selected, setSelected] = useState<number | null>(null)
  const [sent, setSent] = useState(false)

  const handleSend = () => {
    if (!amount || selected === null) return
    setSent(true)
    setTimeout(() => { setSent(false); onBack() }, 2000)
  }

  if (sent) {
    return (
      <div style={{
        background: '#0f0f0f', minHeight: '100vh',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
      }}>
        <div style={{
          width: '100px', height: '100px', borderRadius: '50%',
          background: 'rgba(52,168,83,0.15)', border: '3px solid #34a853',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: '24px', animation: 'pulse-ring 1s ease-in-out'
        }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#34a853" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}>Payment Sent!</h2>
        <p style={{ color: '#8e8e93' }}>₹{parseInt(amount).toLocaleString()} to {selected !== null ? contacts[selected].name : ''}</p>
      </div>
    )
  }

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
        <h1 style={{ fontSize: '20px', fontWeight: '700' }}>Send Money</h1>
      </div>

      {/* Amount input */}
      <div style={{
        margin: '0 20px 24px',
        background: '#1c1c1e', borderRadius: '20px', padding: '24px',
        border: '1px solid #2c2c2e'
      }}>
        <p style={{ color: '#8e8e93', fontSize: '13px', marginBottom: '8px' }}>Enter amount</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '32px', fontWeight: '700', color: '#4285f4' }}>₹</span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0"
            style={{
              background: 'none', border: 'none', outline: 'none',
              fontSize: '36px', fontWeight: '700', color: '#fff',
              width: '100%', fontFamily: 'inherit'
            }}
          />
        </div>
        <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
          {[500, 1000, 2000, 5000].map((q) => (
            <button
              key={q}
              onClick={() => setAmount(String(q))}
              style={{
                flex: 1, padding: '8px 4px',
                background: amount === String(q) ? 'rgba(66,133,244,0.2)' : '#2c2c2e',
                border: `1px solid ${amount === String(q) ? '#4285f4' : 'transparent'}`,
                borderRadius: '8px', color: amount === String(q) ? '#4285f4' : '#8e8e93',
                fontSize: '12px', fontWeight: '600', cursor: 'pointer'
              }}
            >₹{q}</button>
          ))}
        </div>
      </div>

      {/* Contacts */}
      <div style={{ padding: '0 20px' }}>
        <h2 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '12px', color: '#8e8e93' }}>FREQUENT CONTACTS</h2>
        <div style={{ background: '#1c1c1e', borderRadius: '20px', overflow: 'hidden' }}>
          {contacts.map((c, i) => (
            <div
              key={i}
              onClick={() => setSelected(i)}
              style={{
                display: 'flex', alignItems: 'center', padding: '14px 16px',
                borderBottom: i < contacts.length - 1 ? '1px solid #2c2c2e' : 'none',
                cursor: 'pointer',
                background: selected === i ? 'rgba(66,133,244,0.1)' : 'none',
                transition: 'background 0.15s'
              }}
            >
              <div style={{
                width: '44px', height: '44px', borderRadius: '50%',
                background: c.color + '33',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '14px', fontWeight: '700', color: c.color,
                marginRight: '14px', border: `1.5px solid ${c.color}55`
              }}>{c.avatar}</div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '15px', fontWeight: '500', marginBottom: '2px' }}>{c.name}</p>
                <p style={{ fontSize: '12px', color: '#8e8e93' }}>{c.upi}</p>
              </div>
              {selected === i && (
                <div style={{
                  width: '24px', height: '24px', borderRadius: '50%',
                  background: '#4285f4',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Send button */}
      <div style={{ padding: '24px 20px 0' }}>
        <button
          onClick={handleSend}
          disabled={!amount || selected === null}
          style={{
            width: '100%', padding: '16px',
            background: !amount || selected === null
              ? '#2c2c2e'
              : 'linear-gradient(135deg, #4285f4, #1565c0)',
            border: 'none', borderRadius: '16px',
            color: !amount || selected === null ? '#8e8e93' : '#fff',
            fontSize: '16px', fontWeight: '700', cursor: !amount || selected === null ? 'not-allowed' : 'pointer',
            boxShadow: !amount || selected === null ? 'none' : '0 4px 20px rgba(66,133,244,0.4)',
            transition: 'all 0.3s'
          }}
        >
          {amount && selected !== null ? `Pay ₹${parseInt(amount).toLocaleString()}` : 'Enter Amount & Select Contact'}
        </button>
      </div>
    </div>
  )
}

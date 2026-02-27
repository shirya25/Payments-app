import React, { useState } from 'react'

interface Props {
  onBack: () => void
}

export default function ReceiveScreen({ onBack }: Props) {
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState<'qr' | 'upi'>('qr')

  const upiId = 'alex@gpey'

  const handleCopy = () => {
    navigator.clipboard?.writeText(upiId).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div style={{ background: '#0f0f0f', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Ambient background glow */}
      <div style={{
        position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,215,0,0.12) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0
      }} />

      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'center', padding: '52px 20px 20px',
        position: 'relative', zIndex: 1
      }}>
        <button onClick={onBack} style={{
          background: '#1c1c1e', border: 'none', borderRadius: '50%',
          width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', color: '#fff', marginRight: '16px', flexShrink: 0
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
        </button>
        <h1 style={{ fontSize: '20px', fontWeight: '700' }}>Receive Money</h1>

        {/* Gold badge */}
        <div style={{
          marginLeft: 'auto',
          background: 'linear-gradient(135deg, #FFD700, #FFB300)',
          color: '#1a1a00', fontSize: '11px', fontWeight: '800',
          padding: '4px 12px', borderRadius: '20px',
          letterSpacing: '0.5px'
        }}>✦ INSTANT</div>
      </div>

      {/* Avatar & Name */}
      <div style={{ textAlign: 'center', padding: '10px 20px 0', position: 'relative', zIndex: 1 }}>
        <div style={{
          width: '72px', height: '72px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #4285f4, #34a853)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '28px', fontWeight: '700', margin: '0 auto 12px',
          border: '3px solid rgba(255,215,0,0.3)',
          boxShadow: '0 0 24px rgba(255,215,0,0.2)'
        }}>A</div>
        <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '2px' }}>Alex Kumar</h2>
        <p style={{ color: '#8e8e93', fontSize: '14px' }}>+91 98765 43210</p>
      </div>

      {/* Tab switcher */}
      <div style={{
        display: 'flex', margin: '24px 20px 0',
        background: '#1c1c1e', borderRadius: '14px', padding: '4px',
        position: 'relative', zIndex: 1
      }}>
        {(['qr', 'upi'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              flex: 1, padding: '10px',
              background: activeTab === tab
                ? 'linear-gradient(135deg, #2d2600, #3d3400)'
                : 'none',
              border: activeTab === tab ? '1px solid rgba(255,215,0,0.4)' : '1px solid transparent',
              borderRadius: '10px',
              color: activeTab === tab ? '#FFD700' : '#8e8e93',
              fontSize: '14px', fontWeight: '600', cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            {tab === 'qr' ? 'QR Code' : 'UPI ID'}
          </button>
        ))}
      </div>

      {/* QR Code Panel */}
      {activeTab === 'qr' && (
        <div style={{ padding: '20px', position: 'relative', zIndex: 1 }}>
          <div style={{
            background: '#1c1c1e',
            border: '1.5px solid rgba(255,215,0,0.3)',
            borderRadius: '24px',
            padding: '28px',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            boxShadow: '0 0 40px rgba(255,215,0,0.08)',
            position: 'relative', overflow: 'hidden'
          }}>
            {/* Corner accents */}
            {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((pos) => (
              <div key={pos} style={{
                position: 'absolute',
                top: pos.includes('top') ? '12px' : 'auto',
                bottom: pos.includes('bottom') ? '12px' : 'auto',
                left: pos.includes('left') ? '12px' : 'auto',
                right: pos.includes('right') ? '12px' : 'auto',
                width: '24px', height: '24px',
                borderTop: pos.includes('top') ? '2.5px solid #FFD700' : 'none',
                borderBottom: pos.includes('bottom') ? '2.5px solid #FFD700' : 'none',
                borderLeft: pos.includes('left') ? '2.5px solid #FFD700' : 'none',
                borderRight: pos.includes('right') ? '2.5px solid #FFD700' : 'none',
              }} />
            ))}

            {/* QR Code SVG (stylized) */}
            <div style={{
              background: '#fff',
              borderRadius: '16px', padding: '16px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.4)'
            }}>
              <svg width="180" height="180" viewBox="0 0 180 180" style={{ display: 'block' }}>
                {/* QR Pattern - stylized representative */}
                <rect width="180" height="180" fill="white"/>
                {/* Top-left finder */}
                <rect x="10" y="10" width="50" height="50" fill="none" stroke="#000" strokeWidth="5"/>
                <rect x="22" y="22" width="26" height="26" fill="#000"/>
                {/* Top-right finder */}
                <rect x="120" y="10" width="50" height="50" fill="none" stroke="#000" strokeWidth="5"/>
                <rect x="132" y="22" width="26" height="26" fill="#000"/>
                {/* Bottom-left finder */}
                <rect x="10" y="120" width="50" height="50" fill="none" stroke="#000" strokeWidth="5"/>
                <rect x="22" y="132" width="26" height="26" fill="#000"/>
                {/* Data modules - representative pattern */}
                {[
                  [75,10],[85,10],[95,10],[105,10],
                  [75,20],[95,20],[105,20],
                  [75,30],[85,30],[105,30],
                  [75,40],[95,40],
                  [75,50],[85,50],[95,50],[105,50],
                  [10,75],[20,75],[40,75],[50,75],
                  [10,85],[30,85],[50,85],
                  [10,95],[20,95],[40,95],[50,95],
                  [10,105],[30,105],[50,105],
                  [10,115],[20,115],[40,115],
                  [75,75],[95,75],[115,75],[125,75],[145,75],[155,75],[165,75],
                  [75,85],[85,85],[105,85],[125,85],[145,85],
                  [75,95],[95,95],[105,95],[115,95],[135,95],[155,95],
                  [75,105],[85,105],[125,105],[145,105],[165,105],
                  [75,115],[95,115],[105,115],[115,115],[135,115],[155,115],
                  [75,125],[85,125],[95,125],[115,125],[125,125],[145,125],
                  [75,135],[95,135],[105,135],[135,135],[155,135],[165,135],
                  [75,145],[85,145],[105,145],[115,145],[125,145],[145,145],
                  [75,155],[95,155],[115,155],[135,155],[155,155],
                  [120,75],[120,85],[120,95],[120,105],[120,115],[120,125],
                ].map(([x, y], i) => (
                  <rect key={i} x={x} y={y} width="8" height="8" fill="#000"/>
                ))}
                {/* Center logo */}
                <rect x="72" y="72" width="36" height="36" rx="6" fill="#fff"/>
                <text x="90" y="96" textAnchor="middle" fontSize="16" fontWeight="800" fill="#4285f4">G</text>
              </svg>
            </div>

            <p style={{ color: '#FFD700', fontSize: '13px', fontWeight: '600', marginTop: '16px' }}>
              Scan with any UPI app
            </p>
            <p style={{ color: '#8e8e93', fontSize: '12px', marginTop: '4px' }}>{upiId}</p>
          </div>
        </div>
      )}

      {/* UPI ID Panel */}
      {activeTab === 'upi' && (
        <div style={{ padding: '20px', position: 'relative', zIndex: 1 }}>
          <div style={{
            background: '#1c1c1e',
            border: '1.5px solid rgba(255,215,0,0.3)',
            borderRadius: '24px',
            padding: '32px 24px',
            boxShadow: '0 0 40px rgba(255,215,0,0.08)',
          }}>
            <p style={{ color: '#8e8e93', fontSize: '13px', marginBottom: '12px', textAlign: 'center' }}>Your UPI ID</p>
            <div style={{
              background: '#2c2c2e',
              borderRadius: '14px', padding: '20px',
              textAlign: 'center', marginBottom: '16px',
              border: '1px solid rgba(255,215,0,0.2)'
            }}>
              <p style={{ fontSize: '22px', fontWeight: '700', color: '#FFD700', letterSpacing: '0.5px' }}>
                {upiId}
              </p>
            </div>
            <button
              onClick={handleCopy}
              style={{
                width: '100%', padding: '14px',
                background: copied ? 'rgba(52,168,83,0.15)' : 'rgba(255,215,0,0.1)',
                border: `1.5px solid ${copied ? 'rgba(52,168,83,0.5)' : 'rgba(255,215,0,0.4)'}`,
                borderRadius: '12px',
                color: copied ? '#34a853' : '#FFD700',
                fontSize: '15px', fontWeight: '600', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                transition: 'all 0.3s'
              }}
            >
              {copied ? (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34a853" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                  </svg>
                  Copy UPI ID
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Share button */}
      <div style={{ padding: '0 20px', position: 'relative', zIndex: 1 }}>
        <button style={{
          width: '100%', padding: '16px',
          background: 'linear-gradient(135deg, #FFD700, #FFB300)',
          border: 'none', borderRadius: '16px',
          color: '#1a1a00', fontSize: '16px', fontWeight: '700', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
          boxShadow: '0 4px 20px rgba(255,215,0,0.4)',
          transition: 'transform 0.15s, box-shadow 0.15s'
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a00" strokeWidth="2.5">
            <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
          </svg>
          Share Payment Request
        </button>
      </div>

      {/* Info cards */}
      <div style={{ padding: '20px 20px 40px', display: 'flex', gap: '12px', position: 'relative', zIndex: 1 }}>
        {[
          { icon: '⚡', title: 'Instant', desc: 'Money arrives in seconds' },
          { icon: '🔒', title: 'Secure', desc: 'Bank-grade encryption' },
          { icon: '₹0', title: 'Free', desc: 'No charges ever' },
        ].map((item) => (
          <div key={item.title} style={{
            flex: 1, background: '#1c1c1e',
            borderRadius: '14px', padding: '14px 10px',
            textAlign: 'center', border: '1px solid #2c2c2e'
          }}>
            <div style={{ fontSize: '20px', marginBottom: '6px' }}>{item.icon}</div>
            <p style={{ fontSize: '12px', fontWeight: '700', marginBottom: '2px' }}>{item.title}</p>
            <p style={{ fontSize: '10px', color: '#8e8e93', lineHeight: '1.3' }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

import Head from 'next/head'
import { useState } from 'react'
import HomeScreen from '../components/HomeScreen'
import ReceiveScreen from '../components/ReceiveScreen'
import SendScreen from '../components/SendScreen'
import HistoryScreen from '../components/HistoryScreen'

type Screen = 'home' | 'receive' | 'send' | 'history'

export default function Home() {
  const [screen, setScreen] = useState<Screen>('home')

  return (
    <>
      <Head>
        <title>GPey</title>
        <meta name="description" content="GPey - Fast & Secure Payments" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        {screen === 'home' && <HomeScreen onNavigate={setScreen} />}
        {screen === 'receive' && <ReceiveScreen onBack={() => setScreen('home')} />}
        {screen === 'send' && <SendScreen onBack={() => setScreen('home')} />}
        {screen === 'history' && <HistoryScreen onBack={() => setScreen('home')} />}
      </div>
    </>
  )
}

import Sidebar from './components/Sidebar'
import BentoGrid from './components/BentoGrid'
import Hero from './components/Hero'

function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 space-y-10">
        <Hero />
        <BentoGrid />
      </main>
    </div>
  )
}

export default App
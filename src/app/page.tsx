import IntegratedProfile from '@/components/IntegratedProfile'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-slate-800">
          My Space
        </h1>
        <IntegratedProfile />
      </div>
    </main>
  )
}

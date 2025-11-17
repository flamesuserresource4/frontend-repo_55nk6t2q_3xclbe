import { useEffect, useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || ''

function FixtureCard({ f }) {
  return (
    <div className="p-4 rounded-lg bg-white/80 border border-green-100 shadow-sm">
      <div className="text-sm text-green-600">{f.date} • {f.home_away}</div>
      <div className="font-semibold text-green-900 mt-1">vs {f.opposition}</div>
      <div className="text-sm text-green-800/80">{f.competition}</div>
      {f.ground && <div className="text-sm text-green-800/70">{f.ground}</div>}
      {f.start_time && <div className="text-sm text-green-800/70">Start {f.start_time}</div>}
    </div>
  )
}

function ResultCard({ r }) {
  return (
    <div className="p-4 rounded-lg bg-white/80 border border-green-100 shadow-sm">
      <div className="text-sm text-green-600">{r.date} • {r.home_away}</div>
      <div className="font-semibold text-green-900 mt-1">vs {r.opposition}</div>
      <div className="text-sm text-green-800/80">{r.competition}</div>
      {r.result && <div className="text-sm mt-2 text-green-900">{r.result}</div>}
      {r.score && <div className="text-sm text-green-800/70">{r.score}</div>}
    </div>
  )
}

export default function HomeSections() {
  const [fixtures, setFixtures] = useState([])
  const [results, setResults] = useState([])

  useEffect(() => {
    fetch(`${BACKEND}/api/fixtures?limit=4`).then(r => r.json()).then(d => setFixtures(d.items || [])).catch(()=>{})
    fetch(`${BACKEND}/api/results?limit=4`).then(r => r.json()).then(d => setResults(d.items || [])).catch(()=>{})
  }, [])

  return (
    <section className="max-w-6xl mx-auto px-4 pb-16 grid gap-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-green-800 mb-4">Upcoming Fixtures</h2>
          <div className="grid gap-3">
            {fixtures.map((f, i) => <FixtureCard key={i} f={f} />)}
            {fixtures.length === 0 && <div className="text-green-700">No upcoming fixtures.</div>}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-green-800 mb-4">Recent Results</h2>
          <div className="grid gap-3">
            {results.map((r, i) => <ResultCard key={i} r={r} />)}
            {results.length === 0 && <div className="text-green-700">No recent results.</div>}
          </div>
        </div>
      </div>
    </section>
  )
}

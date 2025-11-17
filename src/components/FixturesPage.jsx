import { useEffect, useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || ''

export default function FixturesPage() {
  const [fixtures, setFixtures] = useState([])
  const [results, setResults] = useState([])

  useEffect(() => {
    fetch(`${BACKEND}/api/fixtures?limit=50`).then(r => r.json()).then(d => setFixtures(d.items || [])).catch(()=>{})
    fetch(`${BACKEND}/api/results?limit=50`).then(r => r.json()).then(d => setResults(d.items || [])).catch(()=>{})
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Fixtures & Results</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-green-700 mb-3">Fixtures</h2>
          <div className="grid gap-3">
            {fixtures.map((f, i) => (
              <div key={i} className="p-4 rounded-lg bg-white/80 border border-green-100">
                <div className="text-sm text-green-600">{f.date} • {f.home_away}</div>
                <div className="font-semibold text-green-900 mt-1">vs {f.opposition}</div>
                <div className="text-sm text-green-800/80">{f.competition}</div>
                {f.ground && <div className="text-sm text-green-800/70">{f.ground}</div>}
              </div>
            ))}
            {fixtures.length === 0 && <div className="text-green-700">No fixtures found.</div>}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-green-700 mb-3">Results</h2>
          <div className="grid gap-3">
            {results.map((r, i) => (
              <div key={i} className="p-4 rounded-lg bg-white/80 border border-green-100">
                <div className="text-sm text-green-600">{r.date} • {r.home_away}</div>
                <div className="font-semibold text-green-900 mt-1">vs {r.opposition}</div>
                <div className="text-sm text-green-800/80">{r.competition}</div>
                {r.result && <div className="text-sm mt-2 text-green-900">{r.result}</div>}
                {r.score && <div className="text-sm text-green-800/70">{r.score}</div>}
              </div>
            ))}
            {results.length === 0 && <div className="text-green-700">No results found.</div>}
          </div>
        </div>
      </div>
    </div>
  )
}

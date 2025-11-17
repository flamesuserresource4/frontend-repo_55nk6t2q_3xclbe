import { useEffect, useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || ''

export default function PlayersPage() {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    fetch(`${BACKEND}/api/players`).then(r => r.json()).then(d => setPlayers(d.items || [])).catch(()=>{})
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Squad</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {players.map((p, i) => (
          <div key={i} className="rounded-xl overflow-hidden border border-green-100 bg-white/80 shadow-sm">
            {p.photo_url && (
              <img src={p.photo_url} alt={p.name} className="h-40 w-full object-cover" />
            )}
            <div className="p-4">
              <div className="font-semibold text-green-900">{p.name}</div>
              <div className="text-sm text-green-700">{p.role}</div>
              <div className="text-xs text-green-800/70 mt-2">
                {p.batting_style && <span className="mr-3">Bat: {p.batting_style}</span>}
                {p.bowling_style && <span>Bowl: {p.bowling_style}</span>}
              </div>
              <div className="grid grid-cols-4 gap-2 text-center mt-4 text-xs">
                <div><div className="font-bold text-green-800">{p.matches}</div><div className="text-green-700">M</div></div>
                <div><div className="font-bold text-green-800">{p.runs}</div><div className="text-green-700">R</div></div>
                <div><div className="font-bold text-green-800">{p.wickets}</div><div className="text-green-700">W</div></div>
                <div><div className="font-bold text-green-800">{p.catches}</div><div className="text-green-700">C</div></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

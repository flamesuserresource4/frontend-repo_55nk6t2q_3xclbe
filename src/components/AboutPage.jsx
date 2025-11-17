import { useEffect, useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || ''

export default function AboutPage() {
  const [founders, setFounders] = useState([])

  useEffect(() => {
    fetch(`${BACKEND}/api/founders`).then(r => r.json()).then(d => setFounders(d.items || [])).catch(()=>{})
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-green-800 mb-6">About Sankalp</h1>
      <p className="text-green-900/80 max-w-3xl">
        Founded by local cricket enthusiasts, Sankalp Cricket Club brings together players of all ages and backgrounds. Our mission is to foster sportsmanship, skill development, and a strong community spirit.
      </p>

      <h2 className="text-2xl font-semibold text-green-800 mt-10 mb-4">Founding Members</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {founders.map((f, i) => (
          <div key={i} className="rounded-xl overflow-hidden border border-green-100 bg-white/80">
            {f.photo_url && <img src={f.photo_url} alt={f.name} className="h-40 w-full object-cover" />}
            <div className="p-4">
              <div className="font-semibold text-green-900">{f.name}</div>
              {f.role && <div className="text-sm text-green-700">{f.role}</div>}
              {f.year && <div className="text-xs text-green-800/70">Since {f.year}</div>}
              {f.bio && <p className="text-sm text-green-800/80 mt-2">{f.bio}</p>}
            </div>
          </div>
        ))}
        {founders.length === 0 && <div className="text-green-700">No founders available.</div>}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white" />
      </div>
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-green-800">
          Sankalp Cricket Club
        </h1>
        <p className="mt-4 text-lg md:text-xl text-green-900/80 max-w-2xl">
          A community-focused club with a passion for the game. Follow our fixtures, results, and meet the players.
        </p>
      </div>
    </section>
  )
}

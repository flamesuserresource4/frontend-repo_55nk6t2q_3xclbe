export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Contact</h1>
      <p className="text-green-900/80 max-w-3xl">We'd love to hear from you. For fixtures, sponsorship, or joining the club, drop us a message.</p>
      <form className="mt-6 grid gap-4 max-w-xl">
        <div>
          <label className="block text-sm text-green-700 mb-1">Name</label>
          <input className="w-full border border-green-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm text-green-700 mb-1">Email</label>
          <input type="email" className="w-full border border-green-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-sm text-green-700 mb-1">Message</label>
          <textarea rows="4" className="w-full border border-green-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="How can we help?" />
        </div>
        <button type="button" className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md w-fit">Send</button>
      </form>
      <div className="mt-8 text-sm text-green-800/80">
        Or email us at contact@sankalpcc.org
      </div>
    </div>
  )
}

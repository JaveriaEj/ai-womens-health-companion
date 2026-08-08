import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col items-center text-center bg-linear-to-b from-blush/40 to-transparent rounded-b-[40px]">
      <span className="bg-blush text-wine px-4 py-1 rounded-full text-sm font-medium mb-6">
        Your AI-powered health companion
      </span>

      <h1 className="font-heading text-5xl md:text-6xl font-bold text-wine mb-6 leading-tight">
        Understand your body,<br />
        <span className="text-rose">one cycle at a time</span>
      </h1>

      <p className="text-lg text-taupe max-w-xl mb-10">
        Cycle tracking, AI symptom insights, nutrition guidance, and mental
        wellness support — built for every stage of your health journey.
      </p>

      <div className="flex gap-4">
        <Link
          to="/dashboard"
          className="bg-wine text-white px-8 py-3 rounded-full font-medium hover:bg-wine-dark transition-colors shadow-lg shadow-blush"
        >
          Get Started
        </Link>
        <Link
          to="/features"
          className="bg-white text-wine px-8 py-3 rounded-full font-medium hover:bg-blush/50 transition-colors border border-blush"
        >
          Explore Features
        </Link>
      </div>
    </section>
  )
}

export default Hero
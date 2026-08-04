import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col items-center text-center">
      <span className="bg-pink-100 text-pink-600 px-4 py-1 rounded-full text-sm font-medium mb-6">
        Your AI-powered health companion
      </span>

      <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
        Understand your body,<br />
        <span className="text-pink-600">one cycle at a time</span>
      </h1>

      <p className="text-lg text-gray-600 max-w-xl mb-10">
        Cycle tracking, AI symptom insights, nutrition guidance, and mental
        wellness support — built for every stage of your health journey.
      </p>

      <div className="flex gap-4">
        <Link
          to="/dashboard"
          className="bg-pink-500 text-white px-8 py-3 rounded-full font-medium hover:bg-pink-600 transition-colors shadow-lg shadow-pink-200"
        >
          Get Started
        </Link>
        <Link
          to="/features"
          className="bg-white text-gray-700 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors border border-gray-200"
        >
          Explore Features
        </Link>
      </div>
    </section>
  )
}

export default Hero
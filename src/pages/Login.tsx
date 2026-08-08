import { useState } from 'react'
import { Link } from 'react-router-dom'
import { signIn } from '../services/authService'

function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const { error } = await signIn(email, password)

    setLoading(false)

    if (error) {
      setError(error.message)
      return
    }

    window.location.href = '/dashboard'
  }

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-4xl mb-4">🌸</div>

          <h1 className="font-heading text-3xl font-semibold text-wine mb-2">
            Welcome back
          </h1>

          <p className="text-taupe">
            Sign in to continue your journey
          </p>
        </div>

        {/* Login Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-card shadow-sm border border-blush p-8 space-y-5"
        >

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-wine mb-2">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 rounded-2xl border border-blush bg-cream focus:outline-none focus:ring-2 focus:ring-rose text-sm"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-wine mb-2">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 rounded-2xl border border-blush bg-cream focus:outline-none focus:ring-2 focus:ring-rose text-sm pr-16"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-taupe hover:text-wine transition-colors"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          {/* Remember Me / Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-taupe cursor-pointer">
              <input
                type="checkbox"
                className="accent-wine"
              />

              <span>Remember me</span>
            </label>

            <Link
              to="/forgot-password"
              className="text-wine font-medium hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-500 text-sm text-center">
              {error}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-wine text-white py-3 rounded-full font-medium hover:bg-wine-dark transition-colors disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        {/* Register */}
        <p className="text-center text-sm text-taupe mt-6">
          Don't have an account?{' '}

          <Link
            to="/register"
            className="text-wine font-semibold hover:underline"
          >
            Sign up
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Login
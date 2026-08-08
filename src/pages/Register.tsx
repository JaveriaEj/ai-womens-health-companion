import { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [error, setError] = useState('')

  function getPasswordStrength(pw: string): { label: string; color: string } {
    if (pw.length === 0) return { label: '', color: '' }
    if (pw.length < 6) return { label: 'Weak', color: 'bg-red-400' }
    if (pw.length < 10) return { label: 'Medium', color: 'bg-yellow-400' }
    return { label: 'Strong', color: 'bg-green-500' }
  }

  const strength = getPasswordStrength(password)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    if (!agreed) {
      setError('Please agree to the Terms & Conditions.')
      return
    }

    // Mock auth — real Supabase auth comes in Phase 2
    alert('Account creation is a UI demo for now — real authentication comes in Phase 2.')
  }

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-cream px-6 py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <p className="text-4xl mb-2">🌸</p>
          <h1 className="font-heading text-3xl text-wine mb-2">Create your account</h1>
          <p className="text-taupe text-sm">Start your personalized health journey</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-card shadow-sm border border-blush p-8 space-y-5"
        >
          <div>
            <label className="block text-sm font-medium text-wine mb-2">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Doe"
              required
              className="w-full px-4 py-3 rounded-2xl border border-blush bg-cream focus:outline-none focus:ring-2 focus:ring-rose text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-wine mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 rounded-2xl border border-blush bg-cream focus:outline-none focus:ring-2 focus:ring-rose text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-wine mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 rounded-2xl border border-blush bg-cream focus:outline-none focus:ring-2 focus:ring-rose text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-taupe hover:text-wine"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {password && (
              <div className="mt-2 flex items-center gap-2">
                <div className="flex-1 h-1.5 bg-blush rounded-full overflow-hidden">
                  <div className={`h-full ${strength.color} transition-all`} style={{ width: password.length < 6 ? '33%' : password.length < 10 ? '66%' : '100%' }} />
                </div>
                <span className="text-xs text-taupe">{strength.label}</span>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-wine mb-2">Confirm Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-4 py-3 rounded-2xl border border-blush bg-cream focus:outline-none focus:ring-2 focus:ring-rose text-sm"
            />
          </div>

          <label className="flex items-start gap-2 text-sm text-taupe">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="accent-wine mt-0.5"
            />
            I agree to the Terms & Conditions and Privacy Policy
          </label>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-wine text-white py-3 rounded-full font-medium hover:bg-wine-dark transition-colors"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-taupe mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-wine font-semibold hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register
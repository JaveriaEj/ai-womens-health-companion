import { useState } from 'react'
import { Link } from 'react-router-dom'

function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    // Mock — real password reset email comes with Supabase Auth in Phase 2
    setSubmitted(true)
  }

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-cream px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <p className="text-4xl mb-2">🔑</p>
          <h1 className="font-heading text-3xl text-wine mb-2">Reset your password</h1>
          <p className="text-taupe text-sm">
            {submitted
              ? "We'll send reset instructions if this account exists."
              : "Enter your email and we'll send you a reset link."}
          </p>
        </div>

        <div className="bg-white rounded-card shadow-sm border border-blush p-8">
          {submitted ? (
            <div className="text-center py-4">
              <p className="text-3xl mb-3">📬</p>
              <p className="text-wine font-medium mb-2">Check your email</p>
              <p className="text-taupe text-sm mb-6">
                If an account exists for <span className="font-medium">{email}</span>, you'll receive reset
                instructions shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-wine text-sm font-medium hover:underline"
              >
                Try a different email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
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

              <button
                type="submit"
                className="w-full bg-wine text-white py-3 rounded-full font-medium hover:bg-wine-dark transition-colors"
              >
                Send Reset Link
              </button>
            </form>
          )}
        </div>

        <p className="text-center text-sm text-taupe mt-6">
          Remember your password?{' '}
          <Link to="/login" className="text-wine font-semibold hover:underline">
            Back to Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}

export default ForgotPassword
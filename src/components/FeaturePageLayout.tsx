import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface FeaturePageLayoutProps {
  icon: string
  title: string
  tagline: string
  children: ReactNode
}

function FeaturePageLayout({
  icon,
  title,
  tagline,
  children,
}: FeaturePageLayoutProps) {
  return (
    <div className="min-h-screen bg-cream">
      {/* Page Header */}
      <section className="bg-linear-to-r from-blush to-rose">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-18">
          <Link
            to="/features"
            className="inline-flex items-center gap-2 text-wine text-sm font-medium mb-8 hover:underline"
          >
            ← Back to Features
          </Link>

          <div className="flex flex-col md:flex-row md:items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/70 backdrop-blur-sm flex items-center justify-center text-4xl shadow-sm">
              {icon}
            </div>

            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-wine leading-tight">
                {title}
              </h1>

              <p className="text-taupe mt-2 max-w-2xl">
                {tagline}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Page Content */}
      <main className="max-w-6xl mx-auto px-6 py-10 md:py-14">
        {children}
      </main>
    </div>
  )
}

export default FeaturePageLayout
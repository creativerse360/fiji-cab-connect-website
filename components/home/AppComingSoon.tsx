'use client'

import { useState } from 'react'
import { 
  DevicePhoneMobileIcon, 
  MapPinIcon, 
  CreditCardIcon,
  ClockIcon,
  BellAlertIcon,
  SparklesIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

export default function AppComingSoon() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'App Launch Notification',
          email: email,
          phone: '',
          subject: 'app-launch-notification',
          message: `Please notify me when the FIJICAB app launches. Email: ${email}`,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to subscribe.')
      }
      
      setStatus('success')
      setEmail('')
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error: any) {
      setStatus('error')
      setErrorMessage(error.message || 'Something went wrong. Please try again.')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const appFeatures = [
    {
      icon: DevicePhoneMobileIcon,
      title: 'Book in seconds',
      description: 'One-tap booking from anywhere. Request a ride faster than ever before.',
    },
    {
      icon: MapPinIcon,
      title: 'Track your driver',
      description: 'See your driver\'s location when they\'re on the way. Know exactly when they\'ll arrive.',
    },
    {
      icon: CreditCardIcon,
      title: 'Flexible payment',
      description: 'Multiple payment options planned for the app. Start with cash, more options coming.',
    },
    {
      icon: ClockIcon,
      title: 'Ride history',
      description: 'View all your past trips, receipts, and favorite locations in one place.',
    },
    {
      icon: BellAlertIcon,
      title: 'Instant notifications',
      description: 'Get updates about your ride, driver arrival, and special offers.',
    },
    {
      icon: SparklesIcon,
      title: 'Exclusive features',
      description: 'Schedule rides in advance, save favorite locations, and earn rewards.',
    },
  ]

  return (
    <section id="app-coming-soon" className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-24 md:py-32 overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <SparklesIcon className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              Launching Soon
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-gray-900 mb-6 leading-tight">
            Our app is<br />coming soon
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Book rides even faster with our mobile app. Be the first to know when we launch.
          </p>
        </div>

        {/* App Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {appFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={index} 
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* Email Capture Section - Featured Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-10 md:p-16 shadow-2xl">
          <div className="text-center mb-10">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
              Get notified at launch
            </h3>
            <p className="text-xl text-white/90 leading-relaxed">
              Join our waitlist and be among the first to access the FIJICAB booking platform. Get exclusive launch offers!
            </p>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-5 rounded-xl text-lg text-gray-900 placeholder-gray-500 focus:ring-4 focus:ring-primary/30 outline-none shadow-lg"
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="px-10 py-5 bg-gray-900 hover:bg-black text-white rounded-xl font-bold text-lg transition-all hover:scale-[1.02] shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Submitting...' : 'Notify Me'}
              </button>
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="flex items-start gap-3 bg-white/20 border-2 border-white/50 text-white px-6 py-4 rounded-xl backdrop-blur-sm">
                <CheckCircleIcon className="w-6 h-6 text-white flex-shrink-0 mt-0.5" strokeWidth={2} />
                <div>
                  <p className="font-semibold text-lg">You're on the list!</p>
                  <p className="text-sm text-white/90">We'll email you as soon as the app launches.</p>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="bg-red-500/20 border-2 border-red-300 text-white px-6 py-4 rounded-xl backdrop-blur-sm">
                <p className="font-semibold text-lg">⚠ Oops! Something went wrong.</p>
                <p className="text-sm text-white/90">{errorMessage}</p>
              </div>
            )}
          </form>

          {/* App Store Badges */}
          <div className="mt-12 pt-10 border-t border-white/20">
            <p className="text-center text-white/70 mb-6 text-sm uppercase tracking-wider font-semibold">
              Available soon on
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {/* App Store Badge */}
              <div className="flex items-center gap-4 px-8 py-4 bg-white/10 rounded-2xl border border-white/30 backdrop-blur-sm hover:bg-white/20 transition-all cursor-pointer">
                <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                <div className="text-left text-white">
                  <p className="text-xs text-white/70">Download on the</p>
                  <p className="text-xl font-bold">App Store</p>
                </div>
              </div>

              {/* Google Play Badge */}
              <div className="flex items-center gap-4 px-8 py-4 bg-white/10 rounded-2xl border border-white/30 backdrop-blur-sm hover:bg-white/20 transition-all cursor-pointer">
                <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left text-white">
                  <p className="text-xs text-white/70">Get it on</p>
                  <p className="text-xl font-bold">Google Play</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 bg-gray-100 rounded-3xl p-10 md:p-12 border border-gray-200">
          <p className="text-2xl font-bold text-gray-900 mb-4">
            Need a ride right now?
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Call us! No app needed yet.
          </p>
          <a 
            href="tel:+6799680798"
            className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-xl font-bold text-lg transition-all hover:scale-[1.02] shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
          >
            <DevicePhoneMobileIcon className="w-6 h-6" strokeWidth={2.5} />
            Call: +679 9680798
          </a>
        </div>
      </div>
    </section>
  )
}

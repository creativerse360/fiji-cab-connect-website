'use client'

import { useEffect, useState } from 'react'
import { Bars3Icon, PhoneIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { createPortal } from 'react-dom'
import Button from '@/components/ui/Button'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Lock scroll when mobile drawer is open
  useEffect(() => {
    if (!isClient) return
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isClient, mobileMenuOpen])

  const navigation = [
    { name: 'Ride', href: '/#home' },
    { name: 'How it works', href: '/#how-it-works' },
    { name: 'Features', href: '/#features' },
    { name: 'Tourists', href: '/#tourists' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Safety', href: '/#safety' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Drive', href: '/#drivers' },
    { name: 'App', href: '/#app-coming-soon', badge: 'Soon' },
  ]

  // Compact desktop nav: keep key items visible at lg widths, show full nav at xl+
  const compactDesktopNavNames = new Set(['Ride', 'How it works', 'Features', 'Drive', 'App'])
  const compactDesktopNavigation = navigation.filter((item) => compactDesktopNavNames.has(item.name))

  return (
    <header className="bg-white/80 backdrop-blur-xl border-b border-gray-100 sticky top-0 z-50">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-50 focus:bg-white focus:text-black focus:px-6 focus:py-3 focus:rounded-xl focus:shadow-lg focus:border focus:border-gray-200"
      >
        Skip to main content
      </a>
      <nav className="max-w-7xl mx-auto px-6 lg:px-20" aria-label="Global">
        <div className="flex items-center justify-between h-20">
          {/* Logo - FIJICAB CONNECT */}
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5 flex items-center">
              <Image
                src="/logo/logo-horizontal.svg"
                alt="FIJICAB CONNECT"
                width={260}
                height={52}
                priority
                className="h-9 sm:h-10 md:h-11 w-auto"
              />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">{mobileMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop navigation - Compact on lg, full on xl */}
          <div className="hidden lg:flex xl:hidden lg:gap-x-4 lg:items-center">
            {compactDesktopNavigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-xs font-medium leading-6 text-black hover:text-primary transition-colors inline-flex items-center gap-2 whitespace-nowrap"
              >
                {item.name}
                {item.badge && (
                  <span className="px-2 py-0.5 text-[10px] font-bold bg-primary text-white rounded-full">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="hidden xl:flex xl:gap-x-6 xl:items-center">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium leading-6 text-black hover:text-primary transition-colors inline-flex items-center gap-2 whitespace-nowrap"
              >
                {item.name}
                {item.badge && (
                  <span className="px-2 py-0.5 text-xs font-bold bg-primary text-white rounded-full">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </div>

          {/* Desktop CTA - Phone + Contact */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-3">
            <a 
              href="tel:+6799680798"
              className="inline-flex items-center gap-2 px-4 py-2 bg-black hover:bg-gray-900 text-white rounded-full font-semibold text-sm transition-all"
              aria-label="Call to book by phone"
            >
              <PhoneIcon className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
              Call now
            </a>
            <Button variant="primary" href="/#contact" className="rounded-full px-5 py-2 text-sm font-semibold">
              Contact
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile menu - Premium */}
      {isClient && mobileMenuOpen
        ? createPortal(
            <div
              className="lg:hidden fixed inset-0 z-[1000] bg-white overflow-y-auto"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
            >
              <div className="px-6 py-6">
                <div className="flex items-center justify-between">
                  <a href="/" className="-m-1.5 p-1.5">
                    <Image
                      src="/logo/logo-horizontal.svg"
                      alt="FIJI CAB CONNECT logo"
                      width={220}
                      height={44}
                      className="h-8 w-auto"
                    />
                  </a>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-black"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-10">
                  <div className="space-y-2" role="navigation" aria-label="Mobile">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-between py-3 text-lg font-semibold text-black hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span>{item.name}</span>
                        {item.badge && (
                          <span className="px-3 py-1 text-xs font-bold bg-primary text-white rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </a>
                    ))}
                  </div>
                  <div className="mt-10 space-y-4">
                    <a
                      href="tel:+6799680798"
                      className="block w-full text-center px-6 py-4 bg-black text-white rounded-full font-bold text-base hover:bg-gray-900 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Call: +679 9680798
                    </a>
                    <Button
                      variant="primary"
                      href="/#contact"
                      className="w-full rounded-full py-4 text-base font-semibold"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Contact us
                    </Button>
                  </div>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </header>
  )
}

import React from 'react'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: 'white' | 'gray' | 'gradient'
}

export default function Section({ 
  children, 
  className = '', 
  id,
  background = 'white' 
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-primary-light via-secondary-light to-accent-light',
  }

  return (
    <section 
      id={id}
      className={`py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-16 ${backgrounds[background]} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  )
}

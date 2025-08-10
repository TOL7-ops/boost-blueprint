"use client"

import { useEffect, useState } from "react"

export function StickyBuyButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer')
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top
        const windowHeight = window.innerHeight
        
        // Show button on mobile, hide when footer is in view
        setIsVisible(window.innerWidth < 768 && footerTop > windowHeight)
      }
    }

    // Initial check
    handleScroll()

    // Add scroll listener
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <a
        href="https://merchant.heleket.com/pay/YOUR_PRODUCT_ID"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Buy Boost Blueprint Starter Kit"
        className="bg-primary text-primary-foreground px-6 py-3 text-lg font-semibold rounded-full shadow-lg hover:bg-primary/90 transition-colors"
      >
        Buy Now
      </a>
    </div>
  )
} 
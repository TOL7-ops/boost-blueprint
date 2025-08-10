"use client"

import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">BB</span>
              </div>
              <span className="font-bold text-xl">Boost Blueprint</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              The $20 toolkit that helps YouTubers fix flopped videos fast. 
              Stop guessing, start fixing.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Twitter
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                YouTube
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Discord
              </Link>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <span>📧</span>
                <a 
                  href="mailto:boostblueprints@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  boostblueprints@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span>🌐</span>
                <a 
                  href="https://boost-blueprint.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  boost-blueprint.vercel.app
                </a>
              </div>
            </div>
          </div>

          {/* Buy Now Button */}
          <div className="flex flex-col items-start md:items-end space-y-4">
            <h3 className="font-semibold">Get Started</h3>
            <a
              href="https://merchant.heleket.com/pay/YOUR_PRODUCT_ID"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Buy Boost Blueprint Starter Kit"
              className="bg-primary text-primary-foreground px-6 py-3 text-lg font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Buy Now
            </a>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 Boost Blueprint. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 
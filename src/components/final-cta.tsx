"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-32 scroll-mt-20 md:scroll-mt-24" id="pricing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-12">
            <Badge variant="outline" className="mb-4">
              💵 Price Section
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              $20. One-time. Instant delivery.
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Use it tonight.
            </p>
          </div>

          {/* Final CTA Card */}
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-8 lg:p-12">
              <div className="mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Stop guessing. Start fixing.
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  If your video underperformed, this will tell you exactly what to do — in 10 minutes or less.
                </p>
              </div>

              {/* Price Display */}
              <div className="mb-8">
                <div className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-full">
                  <span className="text-2xl font-bold">$20</span>
                  <span className="text-sm opacity-90">USD</span>
                </div>
              </div>

              {/* CTA Button */}
              <Button size="lg" className="text-lg px-8 py-6 h-auto text-base">
                👉 Get the Boost Blueprint – $20
              </Button>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <span>⚡</span>
                  <span>Instant Access</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>🔒</span>
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>💯</span>
                  <span>30-Day Guarantee</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Join 2,847+ creators who've already rescued their videos with this toolkit.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 
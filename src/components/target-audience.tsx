"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const audienceTypes = [
  {
    title: "Creators thinking: \"Why is my video dying?\"",
    description: "You've put in the work but the algorithm isn't rewarding you",
    icon: "🤔",
  },
  {
    title: "Small & mid-sized YouTubers",
    description: "You have an audience but need help with consistency",
    icon: "📈",
  },
  {
    title: "Anyone tired of guessing what to fix",
    description: "You want a systematic approach, not trial and error",
    icon: "🎯",
  },
]

export function TargetAudience() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              👇 Who This Is For
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Stop Guessing. Start Fixing.
            </h2>
            <p className="text-xl text-muted-foreground">
              If you're struggling with underperforming videos, this toolkit is your lifeline.
            </p>
          </div>

          {/* Audience Types */}
          <div className="space-y-6">
            {audienceTypes.map((audience, index) => (
              <Card key={index} className="group hover:shadow-md transition-all duration-300">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl flex-shrink-0">{audience.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {audience.title}
                      </h3>
                      <p className="text-muted-foreground text-lg">
                        {audience.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Card */}
          <div className="mt-12">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Rescue Your Next Flop?
                </h3>
                <p className="text-lg opacity-90 mb-6">
                  Join thousands of creators who've turned their dead videos into winners.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="text-3xl font-bold">$20</div>
                  <div className="text-lg opacity-90">One-time. Instant delivery.</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
} 
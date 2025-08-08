"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "10-Minute Rescue Flowchart",
    description: "Step-by-step process to diagnose and fix any flop",
    icon: "⚡",
  },
  {
    title: "CTR Swipe File",
    description: "50+ proven title and thumbnail templates",
    icon: "📈",
  },
  {
    title: "Retention Reboot Checklist",
    description: "Find and fix the exact moment viewers leave",
    icon: "🎯",
  },
  {
    title: "Fix a Flop Training Video",
    description: "8-minute walkthrough of the entire process",
    icon: "🎥",
  },
  {
    title: "Video Autopsy Template",
    description: "Analyze any video's performance systematically",
    icon: "🔍",
  },
  {
    title: "YouTube Starter Kit (PDF + Notion Hub)",
    description: "→ Tools, templates, and strategy to grow faster — beginner-friendly and ready to use.",
    icon: "✔️",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-32" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              ⚡ What You Get
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Everything You Need to Fix Any Flop
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              No more guessing. This toolkit gives you the exact process, templates, and tools to rescue any underperforming video.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{feature.icon}</div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bonus Section */}
          <div className="mt-16 text-center">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <span className="text-2xl">🎁</span>
                  <h3 className="text-2xl font-bold text-primary">Bonus: Community Access</h3>
                </div>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Join our private Discord where creators share their rescue stories and get help from the community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
} 
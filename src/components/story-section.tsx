"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export function StorySection() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              🧨 The Story
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              From 113 Views to Viral
            </h2>
          </div>

          {/* Story Content */}
          <div className="space-y-8">
            {/* Problem */}
            <Card>
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-xl font-semibold mb-4 text-destructive">
                  The Problem
                </h3>
                <p className="text-lg text-muted-foreground mb-4">
                  I spent hours scripting, editing, and thumbnailing a video I thought would crush it.
                </p>
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-4">
                  <p className="text-destructive font-semibold">
                    It got 113 views.
                  </p>
                  <p className="text-destructive/80">
                    Not a single comment. CTR was trash. YouTube stopped pushing it in 24 hours.
                  </p>
                </div>
                <p className="text-lg text-muted-foreground">
                  I was ready to delete it.
                </p>
              </CardContent>
            </Card>

            {/* Solution */}
            <Card>
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  The Solution
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Instead, I used this 10-minute fix-it process — and everything changed:
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-foreground text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Updated the title</h4>
                      <p className="text-muted-foreground">Found the right hook that resonated</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-foreground text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Swapped in a better thumbnail</h4>
                      <p className="text-muted-foreground">Used proven CTR patterns</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-foreground text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Found the pacing drop</h4>
                      <p className="text-muted-foreground">Identified where viewers left</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-foreground text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Re-promoted with pinned comment</h4>
                      <p className="text-muted-foreground">Boosted engagement signals</p>
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />
                
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                  <p className="text-primary font-semibold text-lg">
                    Within 3 hours, views doubled. By next day, it was back on track.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
} 
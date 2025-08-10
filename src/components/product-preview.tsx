"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export function ProductPreview() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-12">
            <Badge variant="outline" className="mb-4">
              📦 What's Inside
            </Badge>
            <h2 className="text-2xl font-bold mb-4">
              Your Boost Blueprint YouTube Ultimate Guide Includes
            </h2>
          </div>

          {/* Product Image */}
          <Image
            src="/boost-blueprint.png"
            alt="Boost Blueprint YouTube Ultimate Guide Preview"
            width={1280}
            height={720}
            className="rounded-lg shadow-lg max-w-3xl w-full mx-auto mb-8"
            priority
          />

          {/* Buy Now Button */}
          <a
            href="https://merchant.heleket.com/pay/YOUR_PRODUCT_ID"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Buy Boost Blueprint Starter Kit"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 text-lg font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Buy Now
          </a>
        </div>
      </div>
    </section>
  )
} 
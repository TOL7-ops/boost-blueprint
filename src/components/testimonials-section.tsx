"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Alex Chen",
    quote: "This toolkit saved my channel! My video went from 200 views to 15K in just one day.",
    company: "TechReviews Pro",
    avatar: "AC",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Johnson",
    quote: "I was about to give up on YouTube. This blueprint changed everything for me.",
    company: "Lifestyle Vlogs",
    avatar: "SJ",
    rating: 5
  },
  {
    id: 3,
    name: "Mike Rodriguez",
    quote: "The CTR swipe file alone is worth 10x the price. Incredible value!",
    company: "Gaming Central",
    avatar: "MR",
    rating: 5
  },
  {
    id: 4,
    name: "Emma Thompson",
    quote: "Used the 10-minute process on 3 videos. All three took off within hours.",
    company: "Beauty & Wellness",
    avatar: "ET",
    rating: 5
  },
  {
    id: 5,
    name: "David Park",
    quote: "Finally, a systematic approach that actually works. No more guessing!",
    company: "Fitness Journey",
    avatar: "DP",
    rating: 5
  },
  {
    id: 6,
    name: "Lisa Wang",
    quote: "The video autopsy template helped me identify exactly what went wrong.",
    company: "Cooking Adventures",
    avatar: "LW",
    rating: 5
  },
  {
    id: 7,
    name: "James Wilson",
    quote: "Turned my worst performing video into my channel's biggest hit!",
    company: "Business Tips",
    avatar: "JW",
    rating: 5
  },
  {
    id: 8,
    name: "Maria Garcia",
    quote: "The retention reboot checklist is a game-changer. Simple but powerful.",
    company: "Travel Stories",
    avatar: "MG",
    rating: 5
  },
  {
    id: 9,
    name: "Ryan Davis",
    quote: "Best $20 I've ever spent. My analytics improved across the board.",
    company: "Music Production",
    avatar: "RD",
    rating: 5
  },
  {
    id: 10,
    name: "Sophie Brown",
    quote: "The training video alone taught me more than hours of YouTube tutorials.",
    company: "Art & Design",
    avatar: "SB",
    rating: 5
  },
  {
    id: 11,
    name: "Tom Anderson",
    quote: "Finally understand why my videos weren't performing. This fixed it fast!",
    company: "DIY Projects",
    avatar: "TA",
    rating: 5
  },
  {
    id: 12,
    name: "Rachel Kim",
    quote: "Went from 500 to 50K views using these exact strategies. Mind blown!",
    company: "Photography Tips",
    avatar: "RK",
    rating: 5
  },
  {
    id: 13,
    name: "Chris Martinez",
    quote: "The community access is incredible. So much support and shared wins!",
    company: "Sports Commentary",
    avatar: "CM",
    rating: 5
  },
  {
    id: 14,
    name: "Amanda Foster",
    quote: "Every creator needs this toolkit. It should be mandatory viewing!",
    company: "Parenting Hacks",
    avatar: "AF",
    rating: 5
  },
  {
    id: 15,
    name: "Kevin Lee",
    quote: "The flowchart process is so simple yet effective. Brilliant system!",
    company: "Tech Tutorials",
    avatar: "KL",
    rating: 5
  },
  {
    id: 16,
    name: "Julia Roberts",
    quote: "My CTR doubled overnight after implementing the thumbnail strategies.",
    company: "Fashion & Style",
    avatar: "JR",
    rating: 5
  },
  {
    id: 17,
    name: "Mark Taylor",
    quote: "Finally cracked the code on why my content wasn't connecting. Amazing!",
    company: "Educational Content",
    avatar: "MT",
    rating: 5
  },
  {
    id: 18,
    name: "Nicole Adams",
    quote: "This toolkit paid for itself with just one rescued video. Pure gold!",
    company: "Health & Wellness",
    avatar: "NA",
    rating: 5
  },
  {
    id: 19,
    name: "Steve Campbell",
    quote: "The systematic approach takes all the guesswork out. Love it!",
    company: "Home Improvement",
    avatar: "SC",
    rating: 5
  },
  {
    id: 20,
    name: "Hannah White",
    quote: "Transformed my entire content strategy. Results speak for themselves!",
    company: "Personal Growth",
    avatar: "HW",
    rating: 5
  }
]

// Split testimonials into two rows
const firstRowTestimonials = testimonials.slice(0, 10)
const secondRowTestimonials = testimonials.slice(10, 20)

interface TestimonialCardProps {
  testimonial: typeof testimonials[0]
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="w-80 flex-shrink-0 mx-4 hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4 mb-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${testimonial.name}`} />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {testimonial.avatar}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h4 className="font-semibold text-sm">{testimonial.name}</h4>
            <p className="text-xs text-muted-foreground">{testimonial.company}</p>
            <div className="flex mt-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xs">★</span>
              ))}
            </div>
          </div>
        </div>
        <blockquote className="text-sm text-muted-foreground italic leading-relaxed">
          "{testimonial.quote}"
        </blockquote>
      </CardContent>
    </Card>
  )
}

interface AnimatedRowProps {
  testimonials: typeof testimonials
  direction: "left" | "right"
}

function AnimatedRow({ testimonials, direction }: AnimatedRowProps) {
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]
  
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex"
        animate={{
          x: direction === "left" ? [0, -100 * testimonials.length] : [0, 100 * testimonials.length]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 50,
            ease: "linear"
          }
        }}
        style={{
          width: `${duplicatedTestimonials.length * 320}px`
        }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.id}-${index}`}
            testimonial={testimonial}
          />
        ))}
      </motion.div>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 overflow-hidden scroll-mt-20" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <Badge variant="outline" className="mb-4">
            💬 What Creators Say
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            2,847+ Creators Can't Be Wrong
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of YouTubers who've transformed their failing videos into viral hits with our proven system.
          </p>
        </div>
      </div>

      {/* First Row - Scrolling Left */}
      <div className="mb-8">
        <AnimatedRow testimonials={firstRowTestimonials} direction="left" />
      </div>

      {/* Second Row - Scrolling Right */}
      <div>
        <AnimatedRow testimonials={secondRowTestimonials} direction="right" />
      </div>
    </section>
  )
} 
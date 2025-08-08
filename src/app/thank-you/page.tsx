import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ThankYouPage() {
  return (
    <main className="min-h-[70vh] md:min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-xl text-center space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">
          ✅ Thank You for Purchasing Boost Blueprint
        </h1>
        <p className="text-muted-foreground">
          Your payment was successful! You’re now ready to fix your underperforming videos in 10 minutes or less — even if you’re just starting out.
        </p>
        <div>
          <Button asChild size="lg" className="font-semibold">
            <a
              href="https://drive.google.com/file/d/1btDXt4BfElEdQ91TDA57886zaLbFSTXK/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
            >
              📎 Download the Ultimate YouTube Guide
            </a>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Need help? Contact us at{' '}
          <Link href="mailto:support@boostblueprint.com" className="underline">
            support@boostblueprint.com
          </Link>
        </p>
      </div>
    </main>
  )
} 
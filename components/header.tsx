"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="/" className="flex flex-col hover:opacity-80 transition-opacity">
            <div className="text-2xl font-semibold tracking-tight text-foreground">SYLVA-PAT</div>
            <div className="text-xs text-muted-foreground">INTERNATIONAL LIMITED</div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/services"
              className="text-sm font-medium text-muted-foreground hover:text-[oklch(0.65_0.15_85)] transition-colors"
            >
              Services
            </a>
            <a
              href="/products"
              className="text-sm font-medium text-muted-foreground hover:text-[oklch(0.65_0.15_85)] transition-colors"
            >
              Products
            </a>
            <a
              href="/watch-funeral"
              className="text-sm font-medium text-muted-foreground hover:text-[oklch(0.65_0.15_85)] transition-colors"
            >
              Watch Funeral
            </a>
            <a
              href="/#about"
              className="text-sm font-medium text-muted-foreground hover:text-[oklch(0.65_0.15_85)] transition-colors"
            >
              About
            </a>
            <a
              href="/#contact"
              className="text-sm font-medium text-muted-foreground hover:text-[oklch(0.65_0.15_85)] transition-colors"
            >
              Contact
            </a>
            <Button className="bg-[oklch(0.65_0.15_85)] text-foreground hover:bg-[oklch(0.60_0.15_85)]">
              24/7 Support
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-4 border-t border-border">
            <a
              href="/services"
              className="text-sm font-medium text-muted-foreground hover:text-[oklch(0.65_0.15_85)] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="/products"
              className="text-sm font-medium text-muted-foreground hover:text-[oklch(0.65_0.15_85)] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </a>
            <a
              href="/watch-funeral"
              className="text-sm font-medium text-muted-foreground hover:text-[oklch(0.65_0.15_85)] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Watch Funeral
            </a>
            <a
              href="/#about"
              className="text-sm font-medium text-muted-foreground hover:text-[oklch(0.65_0.15_85)] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="/#contact"
              className="text-sm font-medium text-muted-foreground hover:text-[oklch(0.65_0.15_85)] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="bg-[oklch(0.65_0.15_85)] text-foreground hover:bg-[oklch(0.60_0.15_85)] w-full">
              24/7 Support
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}

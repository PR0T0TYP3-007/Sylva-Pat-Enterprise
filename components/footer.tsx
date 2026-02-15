export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">SYLVA-PAT INTERNATIONAL LIMITED</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Providing compassionate funeral and burial services with dignity and respect across Nigeria.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-primary-foreground/80 hover:text-[oklch(0.65_0.15_85)] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-primary-foreground/80 hover:text-[oklch(0.65_0.15_85)] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-primary-foreground/80 hover:text-[oklch(0.65_0.15_85)] transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-[oklch(0.65_0.15_85)] transition-colors">
                  Pre-Planning
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>1-2 CMO Plaza, Regina Caeli Hospital Road</li>
              <li>Awka, Anambra State, Nigeria</li>
              <li>+234 803 668 1993</li>
              <li>info@sylvapat.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/70 text-sm">
          <p>&copy; {new Date().getFullYear()} SYLVA-PAT INTERNATIONAL LIMITED. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

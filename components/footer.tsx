import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-deep-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-warm-orange to-orange-600 rounded-lg"></div>
              <span className="font-space-grotesk font-bold text-xl">Adammyhill Solutions</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Drive conversions with precision messaging. We build messaging strategies that turn interest into revenue.
            </p>
            <p className="text-sm text-gray-400">Austin, TX • United States</p>
          </div>

          <div>
            <h3 className="font-space-grotesk font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-warm-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-warm-orange transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-warm-orange transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-warm-orange transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-space-grotesk font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-warm-orange transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-warm-orange transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-warm-orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Adammyhill Solutions. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Powered by{" "}
            <Link
              href="https://salescentri.com?utm_source=adammyhill.com&utm_medium=footer&utm_campaign=partner_network"
              className="text-warm-orange hover:underline"
            >
              Sales Intelligence Platform
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

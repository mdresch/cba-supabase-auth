import Link from "next/link"
import NewsletterForm from "./newsletter-form"

export default function FooterUnauth() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-left">TechCorp</h3> {/* Left-aligned h3 */}
            <p className="text-gray-600">Innovative solutions for modern businesses</p>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div className="text-left">
            <div className="flex flex-col items-end text-left"> {/* Flex container to align items to the end (right) */}
              <h3 className="text-lg font-semibold mb-4 text-left">Contact Us</h3> {/* Right-aligned h3 */}
              
                <p className="text-gray-600">Email: info@techcorp.com</p>
                <p className="text-gray-600">Phone: (123) 456-7890</p>
                <NewsletterForm />
              
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">&copy; 2023 TechCorp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
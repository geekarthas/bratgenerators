import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-center py-4 bg-black/10 backdrop-blur-sm text-sm">
      <div className="max-w-7xl mx-auto px-4">
        <p>
          Choose "custom color" in color preset if your brat summer is giving a different color combo.
        </p>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-600 mb-4 md:mb-0">
            © {new Date().getFullYear()} bratgenerators. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
              Terms of Use
            </Link>
            <Link href="/cookies" className="text-sm text-gray-600 hover:text-gray-900">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
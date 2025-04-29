import Header from '@/components/bratgenerator/Header';
import Footer from '@/components/bratgenerator/Footer';

export default function CookiesPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Cookies Policy</h1>
        <div className="prose max-w-none">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-4">1. What Are Cookies</h2>
          <p className="mb-4">
            Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide a better user experience.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">2. How We Use Cookies</h2>
          <p className="mb-4">
            We use cookies for the following purposes:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Essential cookies: Required for the website to function properly</li>
            <li>Analytics cookies: Help us understand how visitors interact with our website</li>
            <li>Preference cookies: Remember your settings and preferences</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">3. Types of Cookies We Use</h2>
          <p className="mb-4">
            Our website uses the following types of cookies:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Session cookies: Temporary cookies that expire when you close your browser</li>
            <li>Persistent cookies: Remain on your device for a set period of time</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">4. Managing Cookies</h2>
          <p className="mb-4">
            You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">5. Changes to This Policy</h2>
          <p className="mb-4">
            We may update our Cookies Policy from time to time. We will notify you of any changes by posting the new policy on this page.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
} 
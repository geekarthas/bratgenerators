import Header from '@/components/bratgenerator/Header';
import Footer from '@/components/bratgenerator/Footer';

export default function TermsOfUse() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mt-6 mb-4">Terms of Use</h2>
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">2. Use License</h2>
          <h3 className="text-xl font-semibold mt-4 mb-2">2.1 Personal Use</h3>
          <p className="mb-4">
            Permission is granted to temporarily use this website for personal, non-commercial transitory viewing only.
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-2">2.2 Restrictions</h3>
          <p className="mb-4">
            You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, transfer, or sell any information obtained from this website.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">3. User Responsibilities</h2>
          <h3 className="text-xl font-semibold mt-4 mb-2">3.1 Prohibited Activities</h3>
          <p className="mb-4">
            You agree not to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Use the service for any illegal purpose</li>
            <li>Upload or transmit any viruses or malicious code</li>
            <li>Attempt to gain unauthorized access to any portion of the service</li>
          </ul>
          <h3 className="text-xl font-semibold mt-4 mb-2">3.2 Content Guidelines</h3>
          <p className="mb-4">
            You are responsible for ensuring that any content you generate complies with applicable laws and regulations.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">4. Intellectual Property</h2>
          <p className="mb-4">
            The service and its original content, features, and functionality are owned by us and are protected by international copyright, trademark, and other intellectual property laws.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">5. Limitation of Liability</h2>
          <p className="mb-4">
            In no event shall we be liable for any indirect, incidental, special, consequential or punitive damages arising out of or relating to your use of the service.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">6. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify these terms at any time. Your continued use of the service following any changes indicates your acceptance of the new terms.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
} 
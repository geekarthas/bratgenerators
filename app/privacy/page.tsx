import Header from '@/components/bratgenerator/Header';
import Footer from '@/components/bratgenerator/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mt-6 mb-4">Privacy Policy</h2>
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-4">1. Introduction</h2>
          <p className="mb-4">
            This Privacy Policy describes how we collect, use, and handle your personal information when you use our website.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">2. Information We Collect</h2>
          <p className="mb-4">
            We collect information that you provide directly to us, including but not limited to:
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-2">2.1 User Input</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Text input for image generation</li>
            <li>Color preferences</li>
          </ul>
          <h3 className="text-xl font-semibold mt-4 mb-2">2.2 Usage Data</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Analytics information</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">3. How We Use Your Information</h2>
          <h3 className="text-xl font-semibold mt-4 mb-2">3.1 Service Provision</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide and improve our services</li>
            <li>Generate images based on your input</li>
          </ul>
          <h3 className="text-xl font-semibold mt-4 mb-2">3.2 Analytics</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Analyze usage patterns</li>
            <li>Improve user experience</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">4. Data Storage</h2>
          <p className="mb-4">
            All processing is done locally in your browser. We do not store your input data on our servers.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">5. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
} 
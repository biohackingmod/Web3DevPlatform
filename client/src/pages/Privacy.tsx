import { Link } from "wouter";

export default function Privacy() {
  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Last Updated: April 16, 2023
          </p>
        </div>
        <div className="mt-12">
          <div className="prose prose-indigo prose-lg text-gray-500 mx-auto">
            <h2>Introduction</h2>
            <p>
              Welcome to BlockchainKit! Your privacy is important to us. This Privacy Policy explains how BlockchainKit ("we", "us", or "our") collects, uses, shares, and protects your personal information when you use our website, services, and products (collectively, the "Services").
            </p>
            <p>
              By using our Services, you agree to the collection and use of information in accordance with this policy.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We collect several types of information for various purposes to provide and improve our Services to you:
            </p>
            <ul>
              <li>
                <strong>Personal Information</strong>: When you register for an account, we collect your name, email address, and payment information.
              </li>
              <li>
                <strong>Usage Data</strong>: We collect information on how you interact with our Services, including the pages you visit, the features you use, and the time spent on our platform.
              </li>
              <li>
                <strong>API Usage</strong>: We monitor and log your API calls, request patterns, and usage metrics to improve our services and for billing purposes.
              </li>
              <li>
                <strong>Technical Data</strong>: We collect information about your device, browser, IP address, and system settings when you access our Services.
              </li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect for various purposes, including:
            </p>
            <ul>
              <li>Providing, operating, and maintaining our Services</li>
              <li>Improving, personalizing, and expanding our Services</li>
              <li>Understanding and analyzing how you use our Services</li>
              <li>Developing new products, services, features, and functionality</li>
              <li>Processing your transactions and managing your account</li>
              <li>Sending you technical notices, updates, security alerts, and support messages</li>
              <li>Communicating with you about products, services, offers, promotions, and events</li>
              <li>Protecting against, identifying, and preventing fraud and other illegal activity</li>
            </ul>

            <h2>Sharing Your Information</h2>
            <p>
              We may share your information with:
            </p>
            <ul>
              <li>
                <strong>Service Providers</strong>: Third-party companies who help us provide and improve our Services (e.g., payment processors, cloud hosting providers).
              </li>
              <li>
                <strong>Business Partners</strong>: Companies we partner with to offer integrated or co-branded services.
              </li>
              <li>
                <strong>Legal Requirements</strong>: When required by law, to protect our rights, or in response to a legal process.
              </li>
            </ul>
            <p>
              We do not sell your personal information to third parties.
            </p>

            <h2>Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul>
              <li>Access to your personal information</li>
              <li>Correction of inaccurate or incomplete information</li>
              <li>Deletion of your personal information</li>
              <li>Restriction or objection to processing</li>
              <li>Data portability</li>
            </ul>
            <p>
              To exercise these rights, please contact us at privacy@blockchainkit.com.
            </p>

            <h2>Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            <p>
              We recommend reviewing this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <ul>
              <li>Email: privacy@blockchainkit.com</li>
              <li>
                Address: 123 Blockchain Street, San Francisco, CA 94107, United States
              </li>
            </ul>
            <p className="mt-8">
              <Link href="/terms">
                <span className="text-indigo-600 hover:text-indigo-500 cursor-pointer">
                  View our Terms of Service
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
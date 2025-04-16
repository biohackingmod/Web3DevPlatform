import { Link } from "wouter";

export default function Terms() {
  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Last Updated: April 16, 2023
          </p>
        </div>
        <div className="mt-12">
          <div className="prose prose-indigo prose-lg text-gray-500 mx-auto">
            <h2>Introduction</h2>
            <p>
              Welcome to BlockchainKit. These Terms of Service ("Terms") govern your access to and use of BlockchainKit's website, services, and products (collectively, the "Services"). Please read these Terms carefully before using our Services.
            </p>
            <p>
              By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Services.
            </p>

            <h2>Account Registration</h2>
            <p>
              To use certain features of our Services, you may need to register for an account. When you register, you agree to:
            </p>
            <ul>
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Keep your account credentials secure</li>
              <li>Not share your account with anyone else</li>
            </ul>
            <p>
              You are responsible for all activities that occur under your account, regardless of whether you authorized the activity or not.
            </p>

            <h2>API Usage and Rate Limits</h2>
            <p>
              Our Services include access to APIs subject to the following terms:
            </p>
            <ul>
              <li>API access is subject to rate limits based on your subscription plan</li>
              <li>You may not attempt to circumvent rate limits or monitoring</li>
              <li>You may not use our APIs in a manner that adversely impacts the stability or availability of our Services</li>
              <li>We reserve the right to modify, suspend, or discontinue the APIs at any time</li>
            </ul>

            <h2>Subscription and Billing</h2>
            <p>
              Certain Services require a paid subscription. For such Services:
            </p>
            <ul>
              <li>You agree to pay all fees associated with your selected plan</li>
              <li>Subscription fees are billed in advance on a monthly or annual basis</li>
              <li>You authorize us to charge your payment method for all fees incurred</li>
              <li>All fees are non-refundable unless otherwise specified</li>
              <li>We may change subscription fees upon notice, typically at least 30 days before the change takes effect</li>
            </ul>

            <h2>Intellectual Property Rights</h2>
            <p>
              BlockchainKit and its licensors own all intellectual property rights in the Services:
            </p>
            <ul>
              <li>You may not copy, modify, distribute, sell, or lease any part of our Services</li>
              <li>You may not reverse engineer or attempt to extract the source code of our software</li>
              <li>The BlockchainKit name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of BlockchainKit or its affiliates</li>
            </ul>

            <h2>Your Content</h2>
            <p>
              You retain ownership of any content you submit, post, or display on or through our Services. By submitting content, you grant BlockchainKit a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute such content in connection with providing and improving our Services.
            </p>

            <h2>Prohibited Uses</h2>
            <p>
              You agree not to use our Services:
            </p>
            <ul>
              <li>In any way that violates any applicable law or regulation</li>
              <li>To engage in any activity that interferes with or disrupts our Services</li>
              <li>To attempt to gain unauthorized access to any part of our Services</li>
              <li>To transmit any viruses, malware, or other harmful code</li>
              <li>For any fraudulent or deceptive purpose</li>
            </ul>

            <h2>Termination</h2>
            <p>
              We may terminate or suspend your access to our Services, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Services will immediately cease.
            </p>

            <h2>Disclaimer of Warranties</h2>
            <p>
              OUR SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              IN NO EVENT WILL BLOCKCHAINKIT, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND ARISING FROM THE USE OF OR INABILITY TO USE OUR SERVICES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
            </p>

            <h2>Changes to These Terms</h2>
            <p>
              We may revise these Terms from time to time. The most current version will always be on this page. If the revision, in our sole discretion, is material, we will notify you via email or through the Services. By continuing to access or use our Services after those revisions become effective, you agree to be bound by the revised Terms.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms and your use of the Services shall be governed by and construed in accordance with the laws of the State of California, without giving effect to any choice or conflict of law provision or rule.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <ul>
              <li>Email: legal@blockchainkit.com</li>
              <li>
                Address: 123 Blockchain Street, San Francisco, CA 94107, United States
              </li>
            </ul>
            <p className="mt-8">
              <Link href="/privacy">
                <span className="text-indigo-600 hover:text-indigo-500 cursor-pointer">
                  View our Privacy Policy
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
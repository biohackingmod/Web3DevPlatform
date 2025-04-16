import { Link } from "wouter";

export default function Cookies() {
  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Cookie Policy
          </h1>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Last Updated: April 16, 2023
          </p>
        </div>
        <div className="mt-12">
          <div className="prose prose-indigo prose-lg text-gray-500 mx-auto">
            <h2>What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
            </p>
            <p>
              Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device when you go offline, while session cookies are deleted as soon as you close your web browser.
            </p>

            <h2>How We Use Cookies</h2>
            <p>
              We use cookies for the following purposes:
            </p>
            <ul>
              <li>
                <strong>Essential Cookies</strong>: These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and account access. You cannot opt out of these cookies.
              </li>
              <li>
                <strong>Functionality Cookies</strong>: These cookies allow us to remember choices you make and provide enhanced features. They may be set by us or by third-party providers whose services we have added to our pages.
              </li>
              <li>
                <strong>Analytics Cookies</strong>: These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They help us improve our website and services.
              </li>
              <li>
                <strong>Performance Cookies</strong>: These cookies collect information about how visitors use our website, such as which pages they visit most often. This helps us improve our website and applications.
              </li>
              <li>
                <strong>Marketing Cookies</strong>: These cookies track your online activity to help advertisers deliver more relevant advertising or limit the number of times you see an ad. These cookies can share information with other organizations or advertisers.
              </li>
            </ul>

            <h2>Types of Cookies We Use</h2>
            <p>
              Specifically, we use the following cookies:
            </p>
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Cookie Name</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">_session</td>
                  <td className="border border-gray-300 px-4 py-2">Used to maintain your session</td>
                  <td className="border border-gray-300 px-4 py-2">Session</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">_pk_id</td>
                  <td className="border border-gray-300 px-4 py-2">Analytics cookie for understanding usage patterns</td>
                  <td className="border border-gray-300 px-4 py-2">1 year</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">_pk_ses</td>
                  <td className="border border-gray-300 px-4 py-2">Short-term analytics cookie</td>
                  <td className="border border-gray-300 px-4 py-2">30 minutes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">_bc_preferences</td>
                  <td className="border border-gray-300 px-4 py-2">Remembers your cookie preferences</td>
                  <td className="border border-gray-300 px-4 py-2">1 year</td>
                </tr>
              </tbody>
            </table>

            <h2>Third-Party Cookies</h2>
            <p>
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics, deliver advertisements, and so on. These cookies may include:
            </p>
            <ul>
              <li>Google Analytics cookies to analyze website traffic</li>
              <li>Intercom cookies for customer support chat functionality</li>
              <li>Stripe cookies for payment processing</li>
            </ul>

            <h2>Managing Cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their settings. Here's how you can manage cookies in various browsers:
            </p>
            <ul>
              <li>
                <strong>Chrome</strong>: Settings &gt; Privacy and security &gt; Cookies and other site data
              </li>
              <li>
                <strong>Firefox</strong>: Options &gt; Privacy & Security &gt; Cookies and Site Data
              </li>
              <li>
                <strong>Safari</strong>: Preferences &gt; Privacy &gt; Cookies and website data
              </li>
              <li>
                <strong>Edge</strong>: Settings &gt; Site permissions &gt; Cookies and site data
              </li>
            </ul>
            <p>
              You can also opt out of specific third-party cookies by visiting the Network Advertising Initiative opt-out page: <a href="http://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">http://optout.networkadvertising.org/</a>
            </p>

            <h2>What Happens If You Disable Cookies</h2>
            <p>
              If you disable or decline cookies, some features of our website may not function properly. For example, you might not be able to log in or access certain areas of the website.
            </p>

            <h2>Changes to Our Cookie Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.
            </p>
            <p>
              We recommend reviewing this Cookie Policy periodically for any changes. Changes to this Cookie Policy are effective when they are posted on this page.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact us at:
            </p>
            <ul>
              <li>Email: privacy@blockchainkit.com</li>
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
              {" | "}
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
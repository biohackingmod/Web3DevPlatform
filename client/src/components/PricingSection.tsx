import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "Free",
      description: "Perfect for exploring and testing your ideas.",
      price: "$0",
      period: "/month",
      highlighted: false,
      features: [
        "100K API requests / month",
        "Ethereum and Polygon support",
        "Basic analytics dashboard",
        "Community support"
      ],
      cta: "Get started"
    },
    {
      name: "Growth",
      description: "For projects that need more power and features.",
      price: "$99",
      period: "/month",
      highlighted: true,
      features: [
        "1M API requests / month",
        "All supported blockchains",
        "Advanced analytics dashboard",
        "WebSocket support",
        "Email support"
      ],
      cta: "Get started"
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large-scale applications.",
      price: "Custom",
      period: "",
      highlighted: false,
      features: [
        "Unlimited API requests",
        "Dedicated infrastructure",
        "99.99% uptime SLA",
        "Custom contract indexing",
        "24/7 priority support",
        "Dedicated account manager"
      ],
      cta: "Contact us"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Choose the plan that's right for your project, from startups to enterprise solutions.
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`
                border rounded-lg shadow-sm divide-y divide-gray-200 bg-white
                ${plan.highlighted ? 'border-primary' : 'border-gray-200'}
              `}
            >
              <div className="p-6">
                <h2 className="text-lg font-medium text-gray-900">{plan.name}</h2>
                <p className="mt-4 text-sm text-gray-500">{plan.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="text-base font-medium text-gray-500">{plan.period}</span>
                </p>
                <Button className="mt-8 block w-full">
                  {plan.cta}
                </Button>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex space-x-3">
                      <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

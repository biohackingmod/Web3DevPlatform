import PricingSection from "@/components/PricingSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Transparent Pricing for Every Stage
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            From startups to enterprise solutions, we have plans to support your blockchain journey at every step.
          </p>
        </div>
        
        <PricingSection />
        
        <div className="max-w-3xl mx-auto mt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                How do I know which plan is right for me?
              </AccordionTrigger>
              <AccordionContent>
                We recommend starting with our Free plan to explore our platform. As your needs grow, you can upgrade to the Growth or Enterprise plan. If you're unsure, our team is happy to provide recommendations based on your specific requirements.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                Can I change plans later?
              </AccordionTrigger>
              <AccordionContent>
                Yes, you can upgrade, downgrade, or cancel your plan at any time. Upgrades take effect immediately, while downgrades or cancellations take effect at the end of your current billing cycle.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                What happens if I exceed my API request limit?
              </AccordionTrigger>
              <AccordionContent>
                If you exceed your API request limit, we'll notify you and provide options to upgrade to a higher plan or purchase additional requests. We won't cut you off unexpectedly.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                Do you offer custom plans for specific needs?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we offer custom plans for businesses with specific requirements. Our Enterprise plan is highly configurable, and we can tailor a solution to meet your unique needs. Contact our sales team to discuss custom options.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                What payment methods do you accept?
              </AccordionTrigger>
              <AccordionContent>
                We accept all major credit cards, and for Enterprise customers, we also support wire transfers and invoicing. For cryptocurrency payments, please contact our sales team.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="mt-12 text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Still have questions?</h3>
            <p className="text-gray-500 mb-6">
              Our team is ready to help you find the perfect plan for your project.
            </p>
            <Button>
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

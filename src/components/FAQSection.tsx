
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is the delivery time for superbikes?',
    answer: 'Delivery time varies by location and bike availability. Typically, it takes 7-15 business days for delivery within India. We provide real-time tracking for all orders.'
  },
  {
    question: 'Do you offer financing options?',
    answer: 'Yes, we offer flexible financing options with competitive interest rates. EMI options start from 12 months up to 60 months. We work with leading banks and financial institutions.'
  },
  {
    question: 'Are all bikes genuine and come with warranty?',
    answer: 'Absolutely! All our bikes are 100% genuine and come with manufacturer warranty. We are authorized dealers for all the brands we sell.'
  },
  {
    question: 'Can I test ride before purchasing?',
    answer: 'Yes, we encourage test rides. Please visit our showrooms in major cities or contact us to arrange a test ride. Valid driving license required.'
  },
  {
    question: 'What about insurance and registration?',
    answer: 'We assist with insurance and registration processes. Our team will help you get the best insurance deals and handle all paperwork for registration.'
  },
  {
    question: 'Do you provide after-sales service?',
    answer: 'Yes, we have authorized service centers across India. We also provide 24/7 roadside assistance and regular maintenance packages.'
  }
];

const FAQSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. Here are the most common questions about buying superbikes from us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

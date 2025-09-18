import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How quickly will I receive my followers?",
    answer: "Delivery starts immediately after purchase and completes within 10-25 minutes depending on the package size. Our advanced delivery system guarantees fast and reliable results."
  },
  {
    question: "Is this service safe for my account?", 
    answer: "Absolutely. Our methods are completely safe and comply with Instagram's and TikTok's terms of service. We use gradual delivery to mimic organic growth patterns."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards and PayPal for secure payments. All transactions are processed through PayPal's secure payment gateway."
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 30-day money back guarantee if you're not satisfied with our service. Customer satisfaction is our top priority."
  },
  {
    question: "Are the followers real people?",
    answer: "Yes, we provide high-quality followers who are real accounts with profile pictures and active engagement. No bots or fake accounts."
  },
  {
    question: "Will my account be banned?",
    answer: "No, our service is 100% safe. We've been operating for years without any account bans. Our delivery methods are designed to be completely undetectable."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Have questions? We have answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index}
              className="card-premium transition-all duration-300 hover:scale-[1.02]"
            >
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                <ChevronDown 
                  className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? 'max-h-96 mt-4' : 'max-h-0'
              }`}>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
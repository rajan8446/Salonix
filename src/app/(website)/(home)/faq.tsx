"use client";

import { useState } from "react";
import { GoPlus } from "react-icons/go";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "How do you find salons near me?",
    answer:
      "Our trading platform is a state-of-the-art, user-friendly interface designed to cater to both beginners and advanced traders.",
  },
  {
    question: "How do I sign up?",
    answer:
      "You can sign up by clicking the 'Register' button on the top right of the page and filling out the registration form.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including credit/debit cards, PayPal, and bank transfers.",
  },
  {
    question: "How do I securely store my cryptocurrencies?",
    answer:
      "It's important to use a secure wallet for storing your cryptocurrencies. We offer both hot and cold storage solutions.",
  },
  {
    question: "Will I learn how to pick winning stocks?",
    answer:
      "Our platform offers a variety of resources, including educational materials and expert analysis, to help you make informed trading decisions.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including credit/debit cards, PayPal, and bank transfers.",
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="p-4 py-3 sm:my-12">
      <div className="max-w-[1250px] mx-auto gap-8 flex flex-col">
        <div className="text-center mb-8">
          <h2 className="text-4xl text-dark-950">Help & Info</h2>
        </div>
        <div className="space-y-4 w-full">
          {faqData.map((faq, index) => (
            <div key={index} className="border-[1px] border-dark-400 p-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full font-lato text-left text-base sm:text-lg font-medium text-dark-600 flex justify-between items-center focus:outline-none"
              >
                {faq.question}
                <span
                  className={`transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <GoPlus />
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="mt-4 text-gray-600 text-sm sm:text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const faqs = [
  {
    question: "What is your return policy?",
    answer: "Our return policy lasts 30 days from the purchase date.",
  },
  {
    question: "How do I track my order?",
    answer: "Our return policy lasts 30 days from the purchase date.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Our return policy lasts 30 days from the purchase date.",
  },
  {
    question: "Can I change my shipping address?",
    answer: "Our return policy lasts 30 days from the purchase date.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "Our return policy lasts 30 days from the purchase date.",
  },
  {
    question: "What is your return policy?",
    answer: "Our return policy lasts 30 days from the purchase date.",
  },
  {
    question: "How can I contact customer support?",
    answer: "Our return policy lasts 30 days from the purchase date.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" w-full   flex flex-col xl:items-end xl:justify-end">
      <div className="w-full mt-10 xl:mt-16">
        <h2 className="text-2xl xl:text-4xl font-titillium font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4  w-full">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <div
                className="flex justify-between items-center cursor-pointer py-3"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <span className="text-xl text-textClr">
                  {activeIndex === index ? <FaAngleUp /> : <FaAngleDown />}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-textClr">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

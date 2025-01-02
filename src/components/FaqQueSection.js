import React, { useState } from 'react';
import './FaqQueSection.css'; // Import the CSS file

const FaqQueSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqData = [
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, you can try us for free for 30 days. If you want, we\'ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    },
    {
      question: 'Can I change my plan later?',
      answer: 'Yes, you can easily change your plan at any time.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'You can cancel your subscription at any time.',
    },
    {
      question: 'Can other info be added to an invoice?',
      answer: 'Yes, you can add additional information to your invoices.',
    },
    {
      question: 'How does billing work?',
      answer: 'We use Stripe for secure and easy billing.',
    },
    {
      question: 'How do I change my account email?',
      answer: 'You can change your account email in your account settings.',
    },
  ];

  return (
    <div className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>

      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer(index)}>
              {faq.question}
              <span className="plus-minus">{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqQueSection;
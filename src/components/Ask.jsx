import React, { useState } from 'react';

const Ask = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);  
    } else {
      setActiveIndex(index); 
    }
  };

  const faqItems = [
    {
      question: "Is any of my personal information stored in the App?",
      answer: "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus..."
    },
    {
      question: "What formats can I download my transaction history in?",
      answer: "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus..."
    },
    {
      question: "Can I change my account settings?",
      answer: "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus..."
    },
    {
      question: "How do I contact customer support?",
      answer: "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus..."
    },
    {
      question: "What payment methods are supported?",
      answer: "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus..."
    }
  ];

  return (
    <section className="container6">
      <div className="left-column">
        <div className="ask">
          <h2>Any questions? Check out the FAQs</h2>
          <p>Still have unanswered questions and need to get in touch?</p>
        </div>
        <div className="call">
          <img src="/bilder/call.svg" alt="A picture with phone" />
        </div>
        <div className="call">
          <img src="/bilder/sms.svg" alt="A picture with sms" />
        </div>
      </div>

      <div className="right-column">
        <div className="faq-main">
          <div className="faq-container">
            {faqItems.map((item, index) => (
              <div className="faq-iteam" key={index}>
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  <h3>{item.question}</h3>
                  <i className={`fa-regular fa-angle-${activeIndex === index ? 'up' : 'down'}`}></i>
                </div>
                {activeIndex === index && <p>{item.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ask;

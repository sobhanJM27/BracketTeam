import React, { useState } from "react";
import "./FaqPage.css";
import { faqItems1, faqItems2 } from "../../Constants/faqItems";
import ServicesContent from "../ServicesContent/ServicesContent";
import { useInView } from "react-intersection-observer";
import { withTranslation } from "react-i18next";

const FaqPage = ({ t }) => {
  const [openIndexes, setOpenIndexes] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndexes((prevIndex) => (prevIndex === index ? null : index));
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="faqpage">
      <h2>{t("navbar.questions")}</h2>
      <div className="faqpage-contents" ref={ref}>
        <div className={`fade-up ${inView ? "show" : ""}`}>
          {faqItems1.map((item) => {
            const isOpen = item.key === openIndexes;
            return (
              <div key={item.key} className="faqpage-content">
                <div
                  onClick={() => toggleAnswer(item.key)}
                  className="faqpage-content-question"
                >
                  <h3>{t(item.question)}</h3>
                  <span>{isOpen ? "-" : "+"}</span>
                </div>
                <div
                  className={
                    isOpen
                      ? "faqpage-content-answer-show"
                      : "faqpage-content-answer"
                  }
                >
                  <p>{t(item.answer)}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className={`fade-up2 ${inView ? "show" : ""}`}>
          {faqItems2.map((item) => {
            const isOpen = item.key === openIndexes;
            return (
              <div key={item.key} className="faqpage-content">
                <div
                  onClick={() => toggleAnswer(item.key)}
                  className="faqpage-content-question"
                >
                  <h3>{t(item.question)}</h3>
                  <span>{isOpen ? "-" : "+"}</span>
                </div>
                <div
                  className={
                    isOpen
                      ? "faqpage-content-answer-show"
                      : "faqpage-content-answer"
                  }
                >
                  <p>{t(item.answer)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="faqpage-services-content">
        <ServicesContent />
      </div>
    </div>
  );
};

export default withTranslation()(FaqPage);

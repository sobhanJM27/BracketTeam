import React, { useState } from 'react';
import './FaqPage.css';
import { faqItems1, faqItems2 } from '../../Constants/faqItems';
import ServicesContent from '../ServicesContent/ServicesContent';

const FaqPage = () => {

    const [openIndexes, setOpenIndexes] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndexes(prevIndex => (prevIndex === index ? null : index));
    }

    return (
        <div className="faqpage">
            <h2>سوالات متداول</h2>
            <div className="faqpage-contents">
                <div>
                    {
                        faqItems1.map((item) => {
                            const isOpen = item.key === openIndexes;
                            return (
                                <div
                                    key={item.key}
                                    className="faqpage-content"
                                >
                                    <div
                                        onClick={() => toggleAnswer(item.key)}
                                        className="faqpage-content-question"
                                    >
                                        <h3>{item.question}</h3>
                                        <span>{isOpen ? '-' : '+'}</span>
                                    </div>
                                    <div className={isOpen ? 'faqpage-content-answer-show' : 'faqpage-content-answer'}>
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    {
                        faqItems2.map((item) => {
                            const isOpen = item.key === openIndexes;
                            return (
                                <div
                                    key={item.key}
                                    className="faqpage-content"
                                >
                                    <div
                                        onClick={() => toggleAnswer(item.key)}
                                        className="faqpage-content-question"
                                    >
                                        <h3>{item.question}</h3>
                                        <span>{isOpen ? '-' : '+'}</span>
                                    </div>
                                    <div className={isOpen ? 'faqpage-content-answer-show' : 'faqpage-content-answer'}>
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='faqpage-services-content'>
                <ServicesContent />
            </div>
        </div>
    )
}

export default FaqPage;

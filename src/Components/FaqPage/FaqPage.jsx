import React, { useState } from 'react';
import './FaqPage.css';
import { CSSTransition } from 'react-transition-group';
import image1 from '../Assets/Images/bg-section-1.webp';
import { Link } from 'react-router-dom';

const FaqPage = () => {

    const [showAnswers, setShowAnswers] = useState({ question1: false });

    const toggleAnswer = (question) => {
        setShowAnswers((prevShowAnswers) => ({
            ...prevShowAnswers,
            [question]: !prevShowAnswers[question],
        }));
    };


    return (
        <div className="faqpage">
            <div className="faqpage-header">
                <h1>نظرات</h1>
                <h2>سوالات متداول</h2>
            </div>
            <div className="faqpage-content">
                <div className="right">
                    <div className="faqpage-content-text">
                        <div className="faqpage-content-text-question" onClick={() => toggleAnswer('question1')}>
                            <h2>چقدر زمان میبرد برای ساخت یک سایت؟</h2><span style={{ right: '460px', top: '5.5px' }}>{showAnswers['question1'] ? '-' : '+'}</span>
                        </div>
                        <CSSTransition
                            in={showAnswers['question1']}
                            timeout={300}
                            classNames="my-fade"
                            unmountOnExit
                        >
                            <p className={`answer ${showAnswers['question1'] ? 'show' : ''}`}>برای تولید و توسعه سایت، نیازمند تعیین ساختار و ویژگی‌های دقیق سایت مورد نظر شما هستیم. آیا نیاز به سایتی با کدنویسی اختصاصی دارید یا از سیستم مدیریت محتوا وردپرس استفاده می‌کنید؟ همچنین، تعداد صفحات مورد نیاز و مقیاس پروژه شما نیز برای تعیین نیازمندی‌های دقیق مهم است.با در نظر گرفتن این جزئیات، ما می‌توانیم بهترین زمان مورد نیاز را به شما بگوییم</p>
                        </CSSTransition>
                        <hr />
                    </div>
                    <div className="faqpage-content-text">
                        <div className="faqpage-content-text-question" onClick={() => toggleAnswer('question2')}>
                            <h2>هزینه سایت چه مقدار است؟</h2><span style={{ right: '460px', top: '5.5px' }}>{showAnswers['question2'] ? '-' : '+'}</span>
                        </div>
                        <CSSTransition
                            in={showAnswers['question2']}
                            timeout={300}
                            classNames="my-fade"
                            unmountOnExit
                        >
                            <p className={`answer ${showAnswers['question2'] ? 'show' : ''}`}>هزینه تولید سایت بستگی به نوع سایت، مقیاس پروژه و ویژگی‌های مورد نظر از طرف شما وابسته است. هر سایت دارای نیازها و مشخصه‌های خاص خود می‌باشد که از این جهت اطلاعات دقیقی برای تعیین هزینه لازم است.

                                از طرف ما، با توجه به این جزئیات و دقت در بررسی نیازها و اطلاعات مورد نیاز، هزینه‌های مرتبط با تولید سایت را به شما اعلام می‌کنیم. این برآورد شامل هزینه‌های طراحی، توسعه، اجرا، نگهداری و سایر خدمات مرتبط با سایت مورد نظر شما خواهد بود.

                                با در نظر گرفتن این موارد، ما نه تنها بهترین راهکارها را برای نیازهای مخصوص شما ارائه می‌دهیم، بلکه همچنین به شما اطلاعات دقیق و کامل درباره هزینه‌های مرتبط با سایت خود را نیز ارائه خواهیم کرد.</p>
                        </CSSTransition>
                        <hr />
                    </div>
                    <div className='faqpage-content-text'>
                        <div onClick={() => toggleAnswer('question3')} className="faqpage-content-text-question">
                            <h2>ایا هزینه هاست و دامنه با تیم شما است؟</h2><span style={{ right: '460px', top: '5.5px' }}>{showAnswers['question3'] ? '-' : '+'}</span>
                        </div>
                        <CSSTransition
                            in={showAnswers['question3']}
                            timeout={300}
                            classNames="my-fade"
                            unmountOnExit
                        >
                            <p className={`answer ${showAnswers['question3'] ? 'show' : ''}`}>هزینه‌ی دامنه و هاست متعلق به کارفرماست و از هزینه‌ی ساخت و طراحی سایت مجزا است. این امر در قرارداد مابین ما و کارفرما تعیین شده است. ما متعهدیم که شما را در فرآیند خرید دامنه و انتخاب هاست به صورت مشاوره‌ای همراهی کنیم و راهنمایی‌های لازم را در اختیارتان قرار دهیم. اما هزینه‌ی خرید دامنه و هاست به عهده‌ی کارفرما است و به‌صورت جداگانه از هزینه‌های ساخت و طراحی سایت در نظر گرفته می‌شود.</p>
                        </CSSTransition>
                        <hr />
                    </div>
                    <div className="faqpage-content-text">
                        <div onClick={() => toggleAnswer('question4')} className="faqpage-content-text-question">
                            <h2>ایا تیم شما شامل پشتیبانی هم می باشد؟</h2><span style={{ right: '460px', top: '5.5px' }}>{showAnswers['question4'] ? '-' : '+'}</span>
                        </div>
                        <CSSTransition
                            in={showAnswers['question4']}
                            timeout={300}
                            classNames="my-fade"
                            unmountOnExit
                        >
                            <p className={`answer ${showAnswers['question4'] ? 'show' : ''}`}>بعد از تکمیل پروژه و تحویل سایت به کارفرما، تیم ما تعهد دارد که به مدت 2 ماه پشتیبانی رایگان را ارائه دهد، که این مسئولیت به طور کامل در قرارداد ذکر شده است. این بخش از قرارداد نشان می‌دهد که ما بر تقدیر از رضایت کارفرما و تأیید صحت عملکرد سایت پس از تحویل تمرکز داریم. در این مدت، تیم ما پشتیبانی کامل و رایگان را در اختیار کارفرما قرار می‌دهد و هرگونه مشکلات فنی را برطرف می‌کنیم. این تعهد ما به کارفرما نشان می‌دهد که ما به عنوان تیم فنی پروژه تا انتهای دوره پشتیبانی پایداری و پاسخگویی خواهیم داشت.</p>
                        </CSSTransition>
                        <hr />
                    </div>
                    <div className="faqpage-content-text">
                        <div onClick={() => toggleAnswer('question5')} className="faqpage-content-text-question">
                            <h2>ایا سایت کارفرما در نمونه کار های براکت تیم شما نمایش داده می شود؟</h2><span style={{ right: '460px', top: '5.5px' }}>{showAnswers['question5'] ? '-' : '+'}</span>
                        </div>
                        <CSSTransition
                            in={showAnswers['question5']}
                            timeout={300}
                            classNames="my-fade"
                            unmountOnExit
                        >
                            <p className={`answer ${showAnswers['question5'] ? 'show' : ''}`}>نمونه‌های ساخت سایت، با اجازه و رضایت کارفرما در برگه نمونه‌کارهایمان قرار می‌گیرد.</p>
                        </CSSTransition>
                        <hr />
                    </div>
                </div>
                <div className="left">
                    <div className="faqpage-content-text">
                        <div onClick={() => toggleAnswer('question6')} className="faqpage-content-text-question">
                            <h2>ایا قراردادی میان کارفرما و سایت شما برقرار است؟</h2><span style={{ right: '460px', top: '5.5px' }}>{showAnswers['question6'] ? '-' : '+'}</span>
                        </div>
                        <CSSTransition
                            in={showAnswers['question6']}
                            timeout={300}
                            classNames="my-fade"
                            unmountOnExit
                        >
                            <p className={`answer ${showAnswers['question6'] ? 'show' : ''}`}>تیم ما دارای یک قرارداد دوطرفه با کارفرما می‌باشد که در آن اطلاعات و جزئیات مختلفی از جمله تاریخ شروع و پایان پروژه، قیمت و عوامل تعیین قیمت، قوانین و قواعد و سایر جنبه‌های مرتبط آن بیان شده است. این قرارداد در نظر گرفته شده است تا هر دو طرف بتوانند از طریق تعهدات و توافقات مشخص، به طور حساب‌شده و منظم به کارهای خود بپردازند. این قرارداد نقطه شروع همکاری را تعیین می‌کند و دقت و روشنی در اجرای آن از اهمیت بالایی برخوردار است.</p>
                        </CSSTransition>
                        <hr />
                    </div>
                    <div className="faqpage-content-text">
                        <div onClick={() => toggleAnswer('question7')} className="faqpage-content-text-question">
                            <h2>ایا بعد از پرداخت کامل سایت کامل به کارفرما واگذار می شود؟</h2><span style={{ right: '460px', top: '5.5px' }}>{showAnswers['question7'] ? '-' : '+'}</span>
                        </div>
                        <CSSTransition
                            in={showAnswers['question7']}
                            timeout={300}
                            classNames="my-fade"
                            unmountOnExit
                        >
                            <p className={`answer ${showAnswers['question7'] ? 'show' : ''}`}>بلافاصله پس از پرداخت کامل هزینه سایت و تأیید رضایت کامل کارفرما، تیم ما در اجرای قرارداد مذکور پیش برده و سایت کامل به اختیار کارفرما تحویل داده می‌شود. این مرحله نقطه فوق العاده مهمی در پروسه همکاری است و تضمین می‌کند که تمامی جزئیات و نیازمندی‌های کارفرما به درستی و به طور کامل در سایت پیاده سازی شده است. ما در این مرحله تکلیف خود را به عنوان تیم فنی به عنوان مجری پروژه به پایان می‌رسانیم و مسئولیت تأمین رضایت کارفرما را به عهده می‌گیریم.</p>
                        </CSSTransition>
                        <hr />
                    </div>
                    <div className="faqpage-content-text">
                        <div onClick={() => toggleAnswer('question8')} className="faqpage-content-text-question">
                            <h2>ایا بازگشت وجه وجود دارد؟</h2><span style={{ right: '460px', top: '5.5px' }}>{showAnswers['question8'] ? '-' : '+'}</span>
                        </div>
                        <CSSTransition
                            in={showAnswers['question8']}
                            timeout={300}
                            classNames="my-fade"
                            unmountOnExit
                        >
                            <p className={`answer ${showAnswers['question8'] ? 'show' : ''}`}>تیم ما در صورتی که نتوانسته باشد تمامی خواسته‌ها و نیازمندی‌های کارفرما را به درستی اجرا کند، متعهد است که مطابق قرارداد امضاء شده، مبلغ پرداختی را به صورت کامل به کارفرما بازپرداخت نماید. این تعهد نشان دهنده مسئولیت و صداقت ما در همکاری با کارفرماست و تأکید می‌کند که سعی ما در پروژه‌ای که به ما اعتماد شده، ارائه کیفیت و رضایت کارفرما است. همچنین، این تضمین نشان می‌دهد که ما تمام تلاش خود را برای احترام به توافقات و نیازمندی‌های کارفرما به کار می‌گیریم و در صورت عدم ارضای این نیازمندی‌ها، مسئولیت و خسارت‌ها را جبران خواهیم کرد</p>
                        </CSSTransition>
                        <hr />
                    </div>
                    <div className="faqpage-content-text">
                        <div onClick={() => toggleAnswer('question9')} className="faqpage-content-text-question">
                            <h2>ایا تیم شما بعد از انجام پروژه ویژگی جدید به سایت اظافه می کند؟</h2><span style={{ right: '460px', top: '5.5px' }}>{showAnswers['question9'] ? '-' : '+'}</span>
                        </div>
                        <CSSTransition
                            in={showAnswers['question9']}
                            timeout={300}
                            classNames="my-fade"
                            unmountOnExit
                        >
                            <p className={`answer ${showAnswers['question9'] ? 'show' : ''}`}>تیم ما قادر به اضافه کردن ویژگی‌های جدیدی که کارفرما مطالبه کرده است به سایت می‌باشد. با این حال، لازم به ذکر است که هزینه اضافی مرتبط با افزودن این ویژگی‌ها بر عهده کارفرما قرار خواهد گرفت. این امر نیازمند هماهنگی و توافق مجدد در مورد هزینه بوده و در قرارداد ما بین دو طرف مشخص شده است. به این ترتیب، کارفرما موظف به پرداخت هزینه اضافی مربوطه می باشد که با انجام این عمل، تیم ما به اضافه کردن ویژگی‌های مورد نظر کارفرما به سایت اقدام خواهد کرد.</p>
                        </CSSTransition>
                        <hr />
                    </div>
                </div>
                <div className='image'>
                    <div className="image-text-right">
                        <h1>برای صحبت با یک متخصص اماده هستید؟</h1>
                        <p>همراهی ما را جهت راهبری موثر در کسب و کار و تقویت برند خود تجربه کنید، با ما تماس بگیرید</p>
                    </div>
                    <div className="image-text-left">
                        <Link to='/service' className='image-text-left-link'>شروع کنید</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqPage;

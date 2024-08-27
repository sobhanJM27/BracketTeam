import React from 'react';
import './BlogSection.css';
import image from '../Assets/Images/blogs.png';
import arrow_left from '../Assets/Images/icons8-arrow-30 (2).png';

const BlogSection = () => {
    return (
        <div className="blog-section">
            <p className="blog-section-text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <ul className="blog-section-title">
                <li className="blog-section-title-text">محتوا</li>
            </ul>
            <div className="blog-section-boxes">
                <div className="blog-section-box">
                    <div className="blog-section-box-right">
                        <img
                            src={image}
                            alt='blogSection'
                            className='blog-section-box-image'
                        />
                        <div className="blog-section-box-middle">
                            <span className="blog-section-box-middle-text1">31 تیر, 1401</span>
                            <span className="blog-section-box-middle-text2">15 متن تخصصی برای پیشرفت</span>
                        </div>
                    </div>
                    <img
                        src={arrow_left}
                        alt="arrowLeft"
                    />
                </div>
            </div>
        </div>
    )
}

export default BlogSection;
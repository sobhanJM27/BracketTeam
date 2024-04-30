import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React, { useState } from 'react';
// import './CSS/Weblog.css';

// const Weblog = () => {

//     const [like, setLike] = useState(0);

//     return (
//         <div className="weblog">
//             <div className="weblog-header">
//                 <div className="weblog-header-right">
//                     <p className="weblog-header-right-text">وبلاگ</p>
//                     <h1>بلاگ های متفاوت و مفید</h1>
//                     <div className="weblog-header-right-icon">
//                         <div className="header-icon">
//                             <i className="fa fa-calendar"></i>
//                             <p>24 اذر, 1380</p>
//                         </div>
//                         <div className="header-icon">
//                             <i className="fa fa-user"></i>
//                             <p>توسط اعضای تیم</p>
//                         </div>
//                         <div className="header-icon">
//                             <i className='fa fa-comment'></i>
//                             <p>0 دیدگاه</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div onClick={() => setLike(like + 1)} className="weblog-header-left">
//                     <i className='fa fa-heart'></i>
//                     <p>{like} لایک</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Weblog;

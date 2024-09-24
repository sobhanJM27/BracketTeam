// import { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// export const CheckLangRedirect = () => {

//     const location = useLocation();
//     const navigate = useNavigate();
    
//     useEffect(() => {
//         const pathSegments = location.pathname.split(`/`);;
//         if (pathSegments[1] !== 'fa' | pathSegments[1] !== 'en') {
//             navigate('/fa' + location.pathname);
//         }
//     }, []);

//     return null;
// };
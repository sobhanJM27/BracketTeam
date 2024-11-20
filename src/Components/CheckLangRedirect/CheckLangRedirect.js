import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const CheckLangRedirect = () => {

    const location = useLocation();
    const navigate = useNavigate();
    
    useEffect(() => {
        const pathSegments = location.pathname.split(`/`);
        const langSegment = pathSegments[1];
        if (langSegment !== 'fa' && langSegment !== 'en') {
            navigate(`/fa${location.pathname}`);
        }
    }, [location.pathname, navigate]);

    return null;
};
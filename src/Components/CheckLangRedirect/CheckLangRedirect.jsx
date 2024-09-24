import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const CheckLangRedirect = () => {
    const location = useLocation();

    useEffect(() => {
        const pathSegments = location.pathname.split('/');
        const lang = pathSegments[1];
        if (!lang) {
            window.location.replace('/fa' + location.pathname);
        }
    }, [location]);

    return null;
};
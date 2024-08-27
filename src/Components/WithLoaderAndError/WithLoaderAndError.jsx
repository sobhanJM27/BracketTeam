import ErrorComponent from "../ErrorComponent/ErrorComponent";
import Loader from "../Laoder/Loader";

const WithLoaderAndError = ({
    isError,
    isLoading,
    data,
    error,
    children,
}) => {
    if (isError) {
        return <ErrorComponent error={error} resetErrorBoundary={() => { }} />;
    }

    if (isLoading) return <Loader />;

    if (!data) {
        return <div>اطلاعاتی یافت نشد</div>;
    }
    return <>{children}</>;
};

export default WithLoaderAndError;
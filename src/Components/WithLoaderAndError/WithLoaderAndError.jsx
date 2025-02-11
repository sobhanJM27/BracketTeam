import ErrorComponent from '../ErrorComponent/ErrorComponent';
import Loader from '../Laoder/Loader';
import { withTranslation } from 'react-i18next';

const WithLoaderAndError = ({
  data,
  isLoading,
  isError,
  error,
  children,
  t,
}) => {
  if (isError) {
    return <ErrorComponent error={error} resetErrorBoundary={() => {}} />;
  }

  if (isLoading) return <Loader />;

  if (!data) {
    return <div>{t('error.error1')}</div>;
  }
  return <>{children}</>;
};

export default withTranslation()(WithLoaderAndError);

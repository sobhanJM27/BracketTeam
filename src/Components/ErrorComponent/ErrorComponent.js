import { useEffect } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

export default function ErrorComponent({ error }) {

  const { t } = useTranslation();

  useEffect(() => {
    console.error(error);
    toast.error(t('error.error2'));
  });
  return <></>;
}
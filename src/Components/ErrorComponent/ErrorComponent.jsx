import { useEffect } from "react";
import toast from "react-hot-toast";

export default function ErrorComponent({ error }) {
  useEffect(() => {
    console.error(error);
    toast.error("خطا در برقراری ارتباط");
  });
  return <></>;
}
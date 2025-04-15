"use client"; // لأن هذا مكون يعمل على الـ Client
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // بديل useRouter في app router
import HeaderPage from "./header/header";
import LoadingPage from "@/app/loading";
import FooterPage from "./footer/Footer";
import FooterButton from "./footer/FooterButton";
import HeaderScroll from "./header/headerScroll";
export default function ClientLayout({ children }) {
  const pathname = usePathname(); // لمراقبة تغييرات الصفحة
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true); // بدء التحميل عند تغيير الصفحة
    const timer = setTimeout(() => {
      setLoading(false); // انتهاء التحميل بعد فترة
    },2000); // يمكنك تعديل المدة حسب الحاجة

    return () => clearTimeout(timer);
  }, [pathname]); // يتفاعل عند تغيير الصفحة

  return loading ? (
    <LoadingPage /> // عرض صفحة التحميل عند تغيير الصفحة
  ) : (
    <>
      <HeaderPage />
      <HeaderScroll/>
      {children}
      <FooterButton/>
      <FooterPage/>
    </>
  );
}

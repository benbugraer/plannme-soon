import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Sayfa Bulunamadı</h2>
      <p className="mb-4">Aradığınız sayfaya ulaşılamadı.</p>
      <Link href="/" className="text-blue-500 hover:text-blue-700 underline">
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-9xl font-bold text-gray-800">404</h1>
      <p className="text-2xl font-medium text-gray-600 mb-6">
        Sayfa Bulunamadı
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}

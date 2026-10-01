import Link from "next/link";

export const metadata = { title: "Halaman tidak ditemukan" };

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center bg-linen px-6 pt-20">
      <div className="mx-auto max-w-md text-center">
        <p className="spec-caps text-brass-w">Woodora · 404</p>
        <h1 className="mt-4 text-5xl font-semibold text-walnut">Ukurannya meleset</h1>
        <div aria-hidden="true" className="measure-line mx-auto mt-6 w-40 text-walnut" />
        <p className="mt-6 leading-relaxed">Halaman ini tidak ada di gambar kerja kami. Mungkin alamatnya salah ketik.</p>
        <Link href="/katalog" className="mt-7 inline-flex bg-walnut px-6 py-3.5 font-semibold text-linen hover:bg-walnut-2">Lihat katalog</Link>
      </div>
    </main>
  );
}

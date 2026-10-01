import Link from 'next/link';
import { KATALOG, SITE, rp } from '@/lib/kayu';
import { GambarKerja } from '../components/Kayu';
import { namaKayu } from '../components/Beranda';

export const metadata = {
  title: 'Katalog',
  description: 'Enam perabot kayu solid Woodora — meja makan, bangku, kursi, rak buku, meja kerja, dan meja kopi — lengkap dengan gambar kerja bertanda ukuran.',
  alternates: { canonical: `${SITE}/katalog` },
};

const RUANG = [...new Set(KATALOG.map((k) => k.ruang))];

export default function Katalog() {
  return (
    <main className="bg-linen px-6 pt-32 pb-24">
      <div className="mx-auto max-w-6xl">
        <p className="spec-caps text-brass-w">Katalog</p>
        <h1 className="mt-4 max-w-3xl text-[2.7rem] leading-[1.04] font-semibold text-walnut md:text-6xl">Enam gambar kerja, siap diubah</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed">Setiap perabot di sini sudah pernah kami buat. Ukurannya titik awal — Anda boleh mengubah panjang, lebar, tinggi, dan jenis kayunya.</p>

        {RUANG.map((r) => (
          <section key={r} aria-labelledby={`r-${r}`} className="mt-16">
            <div className="flex items-baseline gap-4">
              <h2 id={`r-${r}`} className="shrink-0 text-3xl font-semibold text-walnut">{r}</h2>
              <div aria-hidden="true" className="measure-line flex-1 text-walnut" />
            </div>
            <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {KATALOG.filter((k) => k.ruang === r).map((k) => (
                <li key={k.slug}>
                  <Link href={`/katalog/${k.slug}`} className="flex h-full flex-col border border-walnut/15 bg-linen-2 p-5 transition-colors hover:border-walnut">
                    <GambarKerja item={k} />
                    <h3 className="mt-4 text-xl font-semibold text-walnut">{k.nama}</h3>
                    <span className="mt-2 text-sm leading-relaxed">{k.ringkas}</span>
                    <dl className="mt-auto grid grid-cols-2 gap-x-4 gap-y-2 border-t border-walnut/15 pt-4 text-sm">
                      <dt className="spec-caps">Mulai</dt><dd className="text-right font-semibold text-walnut">{rp(k.mulai)}</dd>
                      <dt className="spec-caps">Kayu</dt><dd className="text-right">{namaKayu(k.kayu)}</dd>
                      <dt className="spec-caps">Produksi</dt><dd className="text-right">{k.minggu} minggu</dd>
                    </dl>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}

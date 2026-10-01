import Link from 'next/link';
import { notFound } from 'next/navigation';
import { KATALOG, SITE, katalogBySlug, kayuBySlug, rp } from '@/lib/kayu';
import { ContohKayu, GambarKerja } from '../../components/Kayu';

export function generateStaticParams() {
  return KATALOG.map((k) => ({ slug: k.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const k = katalogBySlug(slug);
  if (!k) return {};
  return {
    title: k.nama,
    description: `${k.nama}: ${k.p} × ${k.l} × ${k.t} cm, kayu ${k.kayu.map((s) => kayuBySlug(s).nama.toLowerCase()).join(' atau ')}, mulai ${rp(k.mulai)}. ${k.ringkas}`,
    alternates: { canonical: `${SITE}/katalog/${k.slug}` },
  };
}

const UBAH = [
  ['Ukuran', 'Panjang, lebar, dan tinggi menyesuaikan ruang — gambar kerja dibuat ulang setelah ukur.'],
  ['Kayu', 'Pilih dari jenis kayu yang tercantum; kayu lain bisa dibicarakan.'],
  ['Lapisan akhir', 'Minyak alami (tampak kayu mentah, dirawat setahun sekali) atau melamin doff (lebih tahan noda).'],
  ['Tambahan', 'Laci, sekat, lubang kabel, atau ukiran inisial kecil di bagian bawah.'],
];

export default async function DetailKatalog({ params }) {
  const { slug } = await params;
  const k = katalogBySlug(slug);
  if (!k) notFound();
  const lain = KATALOG.filter((x) => x.slug !== k.slug && x.ruang === k.ruang).concat(KATALOG.filter((x) => x.ruang !== k.ruang)).slice(0, 3);

  return (
    <main className="bg-linen px-6 pt-28 pb-24">
      <div className="mx-auto max-w-6xl">
        <nav aria-label="Remah roti" className="spec-caps flex flex-wrap gap-2">
          <Link href="/katalog" className="text-brass-w hover:text-walnut">Katalog</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{k.nama}</span>
        </nav>

        <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div>
            <p className="spec-caps text-brass-w">{k.ruang}</p>
            <h1 className="mt-3 text-[2.6rem] leading-[1.04] font-semibold text-walnut md:text-6xl">{k.nama}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed">{k.ringkas}</p>
            <figure className="mt-10 border border-walnut/15 bg-linen-2 p-5 sm:p-8">
              <GambarKerja item={k} />
              <figcaption className="spec-caps mt-4">Gambar kerja · skala menyesuaikan · ukuran dalam cm</figcaption>
            </figure>
          </div>

          <aside aria-label="Ringkasan pesanan" className="self-start border-2 border-walnut bg-linen p-6 lg:sticky lg:top-24">
            <p className="spec-caps">Mulai dari</p>
            <p className="mt-1 font-[family-name:var(--font-lora)] text-4xl font-semibold text-walnut">{rp(k.mulai)}</p>
            <dl className="mt-6 space-y-3 border-t border-walnut/15 pt-5 text-sm">
              <div className="flex justify-between gap-4"><dt>Ukuran standar</dt><dd className="font-semibold text-walnut">{k.p} × {k.l} × {k.t} cm</dd></div>
              <div className="flex justify-between gap-4"><dt>Waktu produksi</dt><dd className="font-semibold text-walnut">{k.minggu} minggu</dd></div>
              <div className="flex justify-between gap-4"><dt>Uang muka</dt><dd className="font-semibold text-walnut">50% setelah gambar disetujui</dd></div>
            </dl>
            <Link href={`/?perabot=${k.slug}#ukur`} className="mt-6 flex justify-center bg-walnut px-6 py-4 font-semibold text-linen hover:bg-walnut-2">Ubah ukuran & jadwalkan ukur</Link>
            <p className="mt-3 text-xs leading-relaxed">Harga adalah contoh purwarupa desain.</p>
          </aside>
        </div>

        <section aria-labelledby="kayu" className="mt-20">
          <h2 id="kayu" className="text-3xl font-semibold text-walnut">Pilihan kayu</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {k.kayu.map((s) => {
              const w = kayuBySlug(s);
              return (
                <li key={s} className="border border-walnut/15">
                  <ContohKayu kayu={w} className="h-28 w-full" />
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-walnut">{w.nama} <span className="text-base font-normal italic">{w.latin}</span></h3>
                    <p className="mt-2 text-sm leading-relaxed">{w.catatan}</p>
                    <Link href={`/jenis-kayu#${w.slug}`} className="spec-caps mt-4 inline-block border-b border-walnut text-walnut">Watak {w.nama.toLowerCase()}</Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        <section aria-labelledby="ubah" className="mt-20 grid gap-10 border-t-2 border-walnut pt-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <h2 id="ubah" className="text-3xl font-semibold text-walnut">Yang bisa diubah</h2>
          <dl className="grid gap-6 sm:grid-cols-2">
            {UBAH.map(([j, d]) => (
              <div key={j}>
                <dt className="text-lg font-semibold text-walnut">{j}</dt>
                <dd className="mt-1 leading-relaxed">{d}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="lain" className="mt-20">
          <h2 id="lain" className="text-3xl font-semibold text-walnut">Perabot lain</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {lain.map((x) => (
              <li key={x.slug}>
                <Link href={`/katalog/${x.slug}`} className="block border border-walnut/15 bg-linen-2 p-4 hover:border-walnut">
                  <GambarKerja item={x} />
                  <span className="mt-3 block font-semibold text-walnut">{x.nama}</span>
                  <span className="text-sm">mulai {rp(x.mulai)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

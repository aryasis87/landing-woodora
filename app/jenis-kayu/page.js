import Image from 'next/image';
import Link from 'next/link';
import { KATALOG, KAYU, SITE } from '@/lib/kayu';
import { ContohKayu } from '../components/Kayu';

export const metadata = {
  title: 'Panduan Jenis Kayu',
  description: 'Jati, mahoni, sungkai, mindi, dan sonokeling — kekerasan, kestabilan, harga relatif, asal, dan perabot yang cocok untuk tiap kayu.',
  alternates: { canonical: `${SITE}/jenis-kayu` },
};

const SKALA = [['keras', 'Kekerasan'], ['stabil', 'Kestabilan'], ['harga', 'Harga relatif']];

function Titik({ n, label }) {
  return (
    <span className="flex gap-1" role="img" aria-label={`${label} ${n} dari 5`}>
      {[1, 2, 3, 4, 5].map((i) => <span key={i} className={`h-2.5 w-5 ${i <= n ? 'bg-walnut' : 'bg-walnut/15'}`} />)}
    </span>
  );
}

export default function JenisKayu() {
  return (
    <main className="bg-linen px-6 pt-32 pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div>
            <p className="spec-caps text-brass-w">Panduan jenis kayu</p>
            <h1 className="mt-4 text-[2.7rem] leading-[1.04] font-semibold text-walnut md:text-6xl">Pilih kayu dari wataknya, bukan dari namanya</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed">Kayu yang paling mahal belum tentu paling cocok. Meja makan butuh kestabilan; kursi anak butuh ringan; rak terbuka butuh corak yang enak dilihat.</p>
          </div>
          <figure>
            <Image src="/images/foto/permukaan.webp" alt="Permukaan meja kayu dengan serat memanjang yang terlihat jelas" width={960} height={1200} className="aspect-[4/3] w-full object-cover" />
            <figcaption className="spec-caps mt-3">Foto: STIL (CC0)</figcaption>
          </figure>
        </div>

        <div className="mt-16 overflow-x-auto" tabIndex={0} role="region" aria-label="Tabel perbandingan jenis kayu">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="sr-only">Perbandingan lima jenis kayu, skala 1 sampai 5</caption>
            <thead>
              <tr className="border-b-2 border-walnut">
                <th scope="col" className="spec-caps py-3 pr-4">Kayu</th>
                {SKALA.map(([, n]) => <th key={n} scope="col" className="spec-caps py-3 pr-4">{n}</th>)}
              </tr>
            </thead>
            <tbody>
              {KAYU.map((k) => (
                <tr key={k.slug} className="border-b border-walnut/15">
                  <th scope="row" className="py-4 pr-4">
                    <a href={`#${k.slug}`} className="flex items-center gap-3 font-semibold text-walnut">
                      <ContohKayu kayu={k} className="h-6 w-10 shrink-0" />{k.nama}
                    </a>
                  </th>
                  {SKALA.map(([d, n]) => <td key={d} className="py-4 pr-4"><Titik n={k[d]} label={n} /></td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {KAYU.map((k, i) => {
        const dipakai = KATALOG.filter((x) => x.kayu.includes(k.slug));
        return (
          <section key={k.slug} id={k.slug} aria-labelledby={`h-${k.slug}`} className="mx-auto mt-20 max-w-6xl scroll-mt-20">
            <div className="grid gap-8 border-t-2 border-walnut pt-10 md:grid-cols-[minmax(0,0.6fr)_minmax(0,1.4fr)]">
              <ContohKayu kayu={k} className="aspect-[16/7] w-full md:aspect-[4/3]" />
              <div>
                <p className="spec-caps text-brass-w">{String(i + 1).padStart(2, '0')} · {k.asal}</p>
                <h2 id={`h-${k.slug}`} className="mt-3 text-4xl font-semibold text-walnut">{k.nama} <span className="text-2xl font-normal italic">{k.latin}</span></h2>
                <p className="mt-4 max-w-xl text-lg leading-relaxed">{k.catatan}</p>
                <dl className="mt-8 grid gap-5 sm:grid-cols-3">
                  {SKALA.map(([d, n]) => (
                    <div key={d}>
                      <dt className="spec-caps mb-2">{n}</dt>
                      <dd><Titik n={k[d]} label={n} /></dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-8 leading-relaxed"><strong className="text-walnut">Cocok untuk:</strong> {k.cocok}.</p>
                {dipakai.length > 0 && (
                  <p className="mt-3 leading-relaxed">
                    <strong className="text-walnut">Di katalog:</strong>{' '}
                    {dipakai.map((x, j) => (
                      <span key={x.slug}>{j > 0 && ', '}<Link href={`/katalog/${x.slug}`} className="border-b border-walnut/40 text-walnut hover:border-walnut">{x.nama}</Link></span>
                    ))}
                  </p>
                )}
              </div>
            </div>
          </section>
        );
      })}

      <p className="spec-caps mx-auto mt-20 max-w-6xl leading-[1.9]">Skala 1–5 adalah perbandingan antarkayu di bengkel kami untuk purwarupa desain, bukan hasil uji laboratorium. Contoh warna dibuat dengan CSS dan hanya mendekati aslinya.</p>
    </main>
  );
}

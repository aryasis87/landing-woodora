import Image from 'next/image';
import Link from 'next/link';
import { FAQ as DAFTAR, KATALOG, KAYU, PROSES, kayuBySlug, rp } from '@/lib/kayu';
import { ContohKayu, GambarKerja } from './Kayu';

export function Hero() {
  return (
    <section className="bg-linen px-6 pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div>
          <p className="spec-caps text-brass-w">Furnitur kayu solid · dibuat sesuai ukuran</p>
          <h1 className="mt-5 text-[2.7rem] leading-[1.04] font-semibold text-walnut sm:text-6xl">Diukur di rumah Anda, dibuat di bengkel kami.</h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed">
            Meja, kursi, dan rak dari jati, mahoni, atau sungkai — dengan gambar kerja bertanda ukuran yang Anda setujui sebelum satu papan pun dipotong.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href="#ukur" className="inline-flex justify-center bg-walnut px-7 py-4 font-semibold text-linen hover:bg-walnut-2">Jadwalkan ukur gratis</Link>
            <Link href="/katalog" className="inline-flex justify-center border-2 border-walnut px-7 py-4 font-semibold text-walnut hover:bg-walnut hover:text-linen">Lihat katalog</Link>
          </div>
          <div aria-hidden="true" className="mt-12 flex gap-2">
            {KAYU.map((k) => <ContohKayu key={k.slug} kayu={k} className="h-10 flex-1" />)}
          </div>
          <p className="spec-caps mt-2">{KAYU.map((k) => k.nama).join(' · ')}</p>
        </div>
        <figure>
          <Image src="/images/foto/kursi-meja.webp" alt="Kursi kayu bersandaran lengkung di samping meja bundar kayu dengan secangkir kopi" width={960} height={1200} priority className="h-auto w-full" />
          <figcaption className="spec-caps mt-3">Foto suasana (CC0) — Ryan Riggins</figcaption>
        </figure>
      </div>
    </section>
  );
}

export function Katalog() {
  return (
    <section className="bg-linen-2 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="spec-caps text-brass-w">Katalog</p>
            <h2 className="mt-4 text-[2.2rem] leading-[1.08] font-semibold text-walnut md:text-5xl">Ukuran di sini hanya titik awal</h2>
          </div>
          <Link href="/katalog" className="spec-caps shrink-0 border-b-2 border-walnut pb-1 text-walnut">Semua perabot</Link>
        </div>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {KATALOG.map((k) => (
            <li key={k.slug}>
              <Link href={`/katalog/${k.slug}`} className="flex h-full flex-col border border-walnut/15 bg-linen p-5 transition-colors hover:border-walnut">
                <GambarKerja item={k} />
                <span className="spec-caps mt-4 text-brass-w">{k.ruang}</span>
                <h3 className="mt-1 text-xl font-semibold text-walnut">{k.nama}</h3>
                <span className="mt-2 text-sm leading-relaxed">{k.ringkas}</span>
                <span className="mt-auto flex items-baseline justify-between gap-4 pt-5">
                  <span className="text-walnut">mulai <strong>{rp(k.mulai)}</strong></span>
                  <span className="spec-caps">{k.minggu} minggu</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Proses() {
  return (
    <section id="proses" className="scroll-mt-16 bg-linen px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="space-y-4">
          <Image src="/images/foto/ukur.webp" alt="Tangan tukang kayu mengukur bulatan kayu dengan jangka sorong" width={960} height={640} className="h-auto w-full" />
          <Image src="/images/foto/amplas.webp" alt="Tukang kayu mengamplas papan kayu di bengkel penuh serbuk" width={1024} height={683} className="h-auto w-full" />
        </div>
        <div>
          <p className="spec-caps text-brass-w">Proses</p>
          <h2 className="mt-4 text-[2.2rem] leading-[1.08] font-semibold text-walnut md:text-5xl">Empat langkah, satu gambar kerja</h2>
          <ol className="mt-10 space-y-8">
            {PROSES.map(([j, d], i) => (
              <li key={j} className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-3">
                <span className="font-[family-name:var(--font-lora)] text-4xl font-semibold text-brass-w">{i + 1}</span>
                <div>
                  <h3 className="text-2xl font-semibold text-walnut">{j}</h3>
                  <div aria-hidden="true" className="measure-line mt-2 text-walnut" />
                  <p className="mt-3 leading-relaxed">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function KayuTeaser() {
  return (
    <section className="bg-walnut px-6 py-20 text-linen md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="spec-caps text-linen/80">Jenis kayu</p>
            <h2 className="mt-4 text-[2.2rem] leading-[1.08] font-semibold text-linen md:text-5xl">Lima kayu, lima watak</h2>
          </div>
          <Link href="/jenis-kayu" className="spec-caps shrink-0 border-b-2 border-linen pb-1 text-linen">Panduan lengkap</Link>
        </div>
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {KAYU.map((k) => (
            <li key={k.slug}>
              <Link href={`/jenis-kayu#${k.slug}`} className="block">
                <ContohKayu kayu={k} className="aspect-[3/4] w-full" />
                <span className="mt-3 block font-[family-name:var(--font-lora)] text-xl font-semibold">{k.nama}</span>
                <span className="text-sm text-linen/80 italic">{k.latin}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function FAQ() {
  return (
    <section className="bg-linen-2 px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div>
          <p className="spec-caps text-brass-w">Pertanyaan</p>
          <h2 className="mt-4 text-[2.2rem] leading-[1.08] font-semibold text-walnut md:text-5xl">Sebelum memesan</h2>
        </div>
        <div className="border-t-2 border-walnut">
          {DAFTAR.map((f) => (
            <details key={f.t} className="group border-b border-walnut/15">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-semibold text-walnut [&::-webkit-details-marker]:hidden">
                {f.t}
                <span aria-hidden="true" className="text-brass-w transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="pb-6 leading-relaxed">{f.j}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export const namaKayu = (slugs) => slugs.map((s) => kayuBySlug(s).nama).join(', ');

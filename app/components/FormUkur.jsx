'use client';

import { useEffect, useState } from 'react';
import { KATALOG, kayuBySlug, rp } from '@/lib/kayu';
import { ContohKayu, GambarKerja } from './Kayu';

const BATAS = { p: [0.6, 1.5], l: [0.7, 1.4], t: [0.8, 1.25] };
const jepit = (v, a, b) => Math.min(b, Math.max(a, v));

export default function FormUkur() {
  const [slug, setSlug] = useState(KATALOG[0].slug);
  const [ukuran, setUkuran] = useState({ p: KATALOG[0].p, l: KATALOG[0].l, t: KATALOG[0].t });
  const [kayu, setKayu] = useState(KATALOG[0].kayu[0]);
  const [selesai, setSelesai] = useState(false);

  const gantiPerabot = (s) => {
    const k = KATALOG.find((x) => x.slug === s);
    if (!k) return;
    setSlug(s);
    setUkuran({ p: k.p, l: k.l, t: k.t });
    setKayu(k.kayu[0]);
  };

  useEffect(() => {
    const s = new URLSearchParams(window.location.search).get('perabot');
    if (s) gantiPerabot(s);
  }, []);

  const item = KATALOG.find((k) => k.slug === slug);
  const rentang = (d) => [Math.round(item[d] * BATAS[d][0]), Math.round(item[d] * BATAS[d][1])];
  const ubah = (d, v) => setUkuran((u) => ({ ...u, [d]: v }));
  const rapikan = (d) => { const [a, b] = rentang(d); setUkuran((u) => ({ ...u, [d]: jepit(Math.round(Number(u[d]) || item[d]), a, b) })); };
  const pratinjau = { ...item, ...Object.fromEntries(Object.entries(ukuran).map(([d, v]) => [d, jepit(Number(v) || item[d], ...rentang(d))])) };
  const input = 'w-full border border-walnut/25 bg-linen px-4 py-3 text-walnut focus:border-walnut focus:outline-none';

  return (
    <section id="ukur" className="scroll-mt-16 bg-linen px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="spec-caps text-brass-w">Jadwalkan ukur</p>
        <h2 className="mt-4 max-w-2xl text-[2.2rem] leading-[1.08] font-semibold text-walnut md:text-5xl">Coret dulu ukurannya, kami datang memastikan</h2>
        <p className="mt-5 max-w-xl leading-relaxed">Ubah angka di bawah dan lihat gambar kerjanya ikut berubah. Ukur ke rumah gratis untuk Jawa Tengah dan DIY; harga final ditetapkan setelah ukur.</p>

        {selesai ? (
          <div role="status" className="mt-12 border-2 border-walnut bg-linen-2 p-8">
            <p className="spec-caps text-brass-w">Tercatat · {item.nama}</p>
            <p className="mt-4 text-2xl font-semibold text-walnut">{pratinjau.p} × {pratinjau.l} × {pratinjau.t} cm, kayu {kayuBySlug(kayu).nama.toLowerCase()}.</p>
            <p className="mt-3 max-w-xl leading-relaxed">Ini purwarupa desain: tidak ada jadwal ukur yang benar-benar dibuat dan tidak ada data yang dikirim.</p>
            <button type="button" onClick={() => setSelesai(false)} className="spec-caps mt-6 border border-walnut/30 px-4 py-3 text-walnut hover:border-walnut">Ubah lagi</button>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); ['p', 'l', 't'].forEach(rapikan); setSelesai(true); }} className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="border border-walnut/15 bg-linen-2 p-5 sm:p-8">
              <GambarKerja item={pratinjau} />
              <div className="mt-6 flex items-center gap-4">
                <ContohKayu kayu={kayuBySlug(kayu)} className="h-12 w-20 shrink-0" />
                <p className="text-sm leading-relaxed"><strong className="text-walnut">{kayuBySlug(kayu).nama}</strong> — {kayuBySlug(kayu).catatan}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label htmlFor="perabot" className="spec-caps mb-2 block text-walnut">Perabot</label>
                <select id="perabot" value={slug} onChange={(e) => gantiPerabot(e.target.value)} className={input}>
                  {KATALOG.map((k) => <option key={k.slug} value={k.slug}>{k.nama} — mulai {rp(k.mulai)}</option>)}
                </select>
              </div>

              <fieldset>
                <legend className="spec-caps mb-2 text-walnut">Ukuran (cm)</legend>
                <div className="grid grid-cols-3 gap-3">
                  {[['p', 'Panjang'], ['l', 'Lebar'], ['t', 'Tinggi']].map(([d, n]) => {
                    const [a, b] = rentang(d);
                    return (
                      <div key={d}>
                        <label htmlFor={`uk-${d}`} className="mb-1 block text-sm">{n}</label>
                        <input id={`uk-${d}`} type="number" inputMode="numeric" min={a} max={b} value={ukuran[d]} onChange={(e) => ubah(d, e.target.value)} onBlur={() => rapikan(d)} className={input} aria-describedby={`uk-${d}-r`} />
                        <span id={`uk-${d}-r`} className="mt-1 block text-xs">{a}–{b}</span>
                      </div>
                    );
                  })}
                </div>
              </fieldset>

              <fieldset>
                <legend className="spec-caps mb-2 text-walnut">Kayu</legend>
                <div className="flex flex-wrap gap-2">
                  {item.kayu.map((s) => (
                    <label key={s} className={`flex cursor-pointer items-center gap-2 border px-3 py-2 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-brass-w ${kayu === s ? 'border-walnut bg-walnut text-linen' : 'border-walnut/25 text-walnut'}`}>
                      <input type="radio" name="kayu" value={s} checked={kayu === s} onChange={() => setKayu(s)} className="sr-only" />
                      <ContohKayu kayu={kayuBySlug(s)} className="h-5 w-5" />
                      {kayuBySlug(s).nama}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="nama" className="spec-caps mb-2 block text-walnut">Nama</label>
                  <input id="nama" name="nama" required autoComplete="name" className={input} />
                </div>
                <div>
                  <label htmlFor="kota" className="spec-caps mb-2 block text-walnut">Kota</label>
                  <input id="kota" name="kota" required autoComplete="address-level2" className={input} />
                </div>
              </div>
              <div>
                <label htmlFor="telepon" className="spec-caps mb-2 block text-walnut">Nomor WhatsApp</label>
                <input id="telepon" name="telepon" type="tel" required autoComplete="tel" className={input} />
              </div>
              <button type="submit" className="w-full bg-walnut py-4 font-semibold text-linen hover:bg-walnut-2">Minta jadwal ukur</button>
              <p className="text-xs leading-relaxed">Purwarupa desain — formulir ini tidak mengirim data ke mana pun.</p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

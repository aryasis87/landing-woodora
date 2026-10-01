/* Contoh serat kayu dari gradien CSS, dan gambar kerja SVG tampak depan &
   samping dengan garis ukur — dua motif "lembar kayu" Woodora. */

export function ContohKayu({ kayu, className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        backgroundColor: kayu.dasar,
        backgroundImage: [
          `repeating-linear-gradient(91deg, ${kayu.serat}cc 0 1px, transparent 1px 6px)`,
          `repeating-linear-gradient(88deg, ${kayu.serat}66 0 2px, transparent 2px 17px)`,
          `radial-gradient(ellipse 40% 18% at 35% 55%, ${kayu.serat}aa, transparent 70%)`,
          'linear-gradient(180deg, rgb(255 255 255 / 0.08), rgb(0 0 0 / 0.12))',
        ].join(','),
      }}
    />
  );
}

const GARIS = '#3b2a1d';

function Ukur({ x1, y1, x2, y2, label, tegak = false }) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  return (
    <g stroke={GARIS} strokeWidth="1">
      <line x1={x1} y1={y1} x2={x2} y2={y2} />
      {tegak ? (
        <>
          <line x1={x1 - 4} y1={y1} x2={x1 + 4} y2={y1} />
          <line x1={x2 - 4} y1={y2} x2={x2 + 4} y2={y2} />
          <text x={mx - 9} y={my} fontSize="15" fill={GARIS} stroke="none" textAnchor="middle" transform={`rotate(-90 ${mx - 9} ${my})`}>{label}</text>
        </>
      ) : (
        <>
          <line x1={x1} y1={y1 - 4} x2={x1} y2={y1 + 4} />
          <line x1={x2} y1={y2 - 4} x2={x2} y2={y2 + 4} />
          <text x={mx} y={my + 19} fontSize="15" fill={GARIS} stroke="none" textAnchor="middle">{label}</text>
        </>
      )}
    </g>
  );
}

function Rangka({ x0, lantai, lebar, tinggi, s, kaki, samping = false }) {
  const atas = lantai - tinggi;
  const tebal = Math.max(3, 3.5 * s);
  const kakiW = Math.max(3, 5 * s);
  const g = { fill: '#e7dfd1', stroke: GARIS, strokeWidth: 1.2 };
  if (kaki === 'kursi') {
    const duduk = lantai - 45 * s;
    const tiang = Math.max(3, 3 * s);
    return (
      <g>
        <rect x={x0} y={duduk} width={lebar} height={tebal} {...g} />
        <rect x={x0 + 2 * s} y={duduk + tebal} width={kakiW} height={lantai - duduk - tebal} {...g} />
        <rect x={x0 + lebar - 2 * s - kakiW} y={duduk + tebal} width={kakiW} height={lantai - duduk - tebal} {...g} />
        {samping ? (
          <path d={`M${x0 + lebar - 2 * s - kakiW / 2} ${duduk} L${x0 + lebar + 4 * s} ${atas}`} stroke={GARIS} strokeWidth={tiang * 1.6} strokeLinecap="square" />
        ) : (
          <>
            <rect x={x0 + 2 * s} y={atas} width={tiang} height={duduk - atas} {...g} />
            <rect x={x0 + lebar - 2 * s - tiang} y={atas} width={tiang} height={duduk - atas} {...g} />
            <rect x={x0 + 2 * s} y={atas + 2 * s} width={lebar - 4 * s} height={Math.max(8, 12 * s)} {...g} />
          </>
        )}
      </g>
    );
  }
  if (kaki === 'panel') {
    const rak = [1, 2, 3, 4].map((i) => atas + (tinggi * i) / 5);
    return (
      <g>
        <rect x={x0} y={atas} width={lebar} height={tinggi} {...g} />
        {rak.map((y) => <line key={y} x1={x0} x2={x0 + lebar} y1={y} y2={y} stroke={GARIS} strokeWidth="1" />)}
      </g>
    );
  }
  if (kaki === 'serong') {
    return (
      <g>
        <rect x={x0} y={atas} width={lebar} height={tebal} {...g} />
        <path d={`M${x0 + lebar * 0.2} ${atas + tebal} L${x0 + lebar * 0.06} ${lantai} M${x0 + lebar * 0.8} ${atas + tebal} L${x0 + lebar * 0.94} ${lantai}`} stroke={GARIS} strokeWidth={kakiW} strokeLinecap="square" />
      </g>
    );
  }
  return (
    <g>
      <rect x={x0} y={atas} width={lebar} height={tebal} {...g} />
      <rect x={x0 + 2 * s} y={atas + tebal} width={kakiW} height={tinggi - tebal} {...g} />
      <rect x={x0 + lebar - 2 * s - kakiW} y={atas + tebal} width={kakiW} height={tinggi - tebal} {...g} />
    </g>
  );
}

// Lebar kanvas tetap supaya huruf ukur sama besar di setiap kartu; gambar
// diskalakan agar tampak depan + samping muat, lalu diletakkan di tengah.
const W = 460;

export function GambarKerja({ item }) {
  const { p, l, t, kaki } = item;
  const s = Math.min(320 / (p + l), 190 / t);
  const lantai = 240;
  const x0 = 56 + Math.max(0, (380 - (p + l) * s - 60) / 2);
  const x1 = x0 + p * s + 60;
  return (
    <svg viewBox={`0 0 ${W} 290`} className="h-auto w-full" role="img" aria-label={`Gambar kerja ${item.nama}: panjang ${p} cm, lebar ${l} cm, tinggi ${t} cm`}>
      <text x={x0} y="24" fontSize="12" letterSpacing="2" fill={GARIS}>DEPAN</text>
      <text x={x1} y="24" fontSize="12" letterSpacing="2" fill={GARIS}>SAMPING</text>
      <line x1="20" x2={W - 10} y1={lantai} y2={lantai} stroke={GARIS} strokeOpacity="0.35" strokeDasharray="4 4" />
      <Rangka x0={x0} lantai={lantai} lebar={p * s} tinggi={t * s} s={s} kaki={kaki} />
      <Rangka x0={x1} lantai={lantai} lebar={l * s} tinggi={t * s} s={s} kaki={kaki} samping />
      <Ukur x1={x0} y1={lantai + 18} x2={x0 + p * s} y2={lantai + 18} label={`${p} cm`} />
      <Ukur x1={x0 - 22} y1={lantai} x2={x0 - 22} y2={lantai - t * s} label={`${t} cm`} tegak />
      <Ukur x1={x1} y1={lantai + 18} x2={x1 + l * s} y2={lantai + 18} label={`${l} cm`} />
    </svg>
  );
}

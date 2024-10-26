import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>PRODUK</h1>
      <br />
      <Link  href="/petik-stroberi">petik stroberi</Link>  
      <br/>
      <Link href="/edukasi-tanaman">edukasi tanaman</Link>
      <br />
      <Link href="/lumbung-cafe">Lumbung Cafe</Link>
      <br />
      <Link href="/market-fresh">MARKET FRESH</Link>
      <br />
      <Link href="/rafting-tubing">RAFTING DAN TUBING</Link>
      <br />
      <Link href="/paintball-outbound">POINTBALL DAN OUTBOUND</Link>
      <br />
      <Link href="/coban-lanang-piteng">COBAN LANANG DAN PITENG</Link>
    </>
  );
}

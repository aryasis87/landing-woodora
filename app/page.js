import { FAQ, Hero, Katalog, KayuTeaser, Proses } from "./components/Beranda";
import FormUkur from "./components/FormUkur";

export default function Home() {
  return (
    <main>
      <Hero />
      <Katalog />
      <Proses />
      <KayuTeaser />
      <FormUkur />
      <FAQ />
    </main>
  );
}

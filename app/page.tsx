import ExtraInformation from "./components/home/extra-information/extra-information";
import Films from "./components/home/films";
import Introduction from "./components/home/introduction";
import OurProducts from "./components/home/our-products";
import PhonesOptions from "./components/home/phones-options";

export default function Home() {
  return (
    <main>
        <Introduction></Introduction>
        <PhonesOptions></PhonesOptions>
        <OurProducts></OurProducts>
        <Films></Films>
        <ExtraInformation></ExtraInformation>
    </main>
  );
}

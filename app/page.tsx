import Introduction from "./components/home/introduction";
import OurProducts from "./components/home/our-products";
import PhonesOptions from "./components/home/phones-options";
import Layout from "./components/layout/layout";

export default function Home() {
  return (
    <main>
      <Layout>
        <Introduction></Introduction>
        <PhonesOptions></PhonesOptions>
        <OurProducts></OurProducts>
      </Layout>
    </main>
  );
}

import Introduction from "./components/home/introduction";
import Header from "./components/layout/header";

export default function Home() {
  return (
    <main className="container">
      <Header></Header>
      <Introduction></Introduction>
    </main>
  );
}

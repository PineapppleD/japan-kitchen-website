import { Header } from "./components/layout/Header";
import { Hero } from "./components/layout/main/Hero";

export default function Home() {
  return (
    <div className="bg-body-bg">
      <Header />
      <Hero />
    </div>
  );
}

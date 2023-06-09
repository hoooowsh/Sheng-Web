import Experience from "../components/Experience";
import HomePage from "../components/HomePage";
import Portfolio from "../components/Portfolio";
import Me from "../components/Me";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <HomePage />
      <Portfolio />
      <Experience />
      <Me />
      <Contact />
    </div>
  );
}

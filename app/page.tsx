import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollAnimation from "./components/ScrollAnimation";

export default function Home() {
  return (
    <div className="bg-secondary">
      <Header />
      <main className="isolate">
        <Hero />
        <ScrollAnimation>
          <Menu />
        </ScrollAnimation>
        <ScrollAnimation>
          <About />
        </ScrollAnimation>
        <ScrollAnimation>
          <Contact />
        </ScrollAnimation>
      </main>
      <Footer />
    </div>
  );
}

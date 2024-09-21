import {
  Download,
  Faq,
  Features,
  Footer,
  Header,
  Hero,
  Pricing,
} from "./sections";
import Testimonials from "./sections/Testimonials";

function App() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  );
}

export default App;

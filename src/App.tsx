import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Story from './components/Story/Story';
import Features from './components/Features/Features';
import Showcase from './components/Showcase/Showcase';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Features />
        <Showcase />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

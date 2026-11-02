import About from '@/components/About';
import Approach from '@/components/Approach';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import SurveyRequest from '@/components/SurveyRequest';
import TenderChecklist from '@/components/TenderChecklist';
import Ticker from '@/components/Ticker';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <Projects />
        <Approach />
        <SurveyRequest />
        <TenderChecklist />
        <About />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

export default App;

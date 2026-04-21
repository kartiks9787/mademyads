import { Hero, WhyChooseUs, Services } from '../components/HomeSections';
import { Process, Portfolio, Testimonials, FAQ, CTA } from '../components/HomeSectionsMore';

export const Home = () => {
  return (
    <main className="bg-black">
      <Hero />
      <WhyChooseUs />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
};

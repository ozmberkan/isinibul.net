import Features from "@/components/Features/Features";
import Guide from "@/components/Guide/Guide";
import Hero from "@/components/Hero/Hero";

const Home = () => {
  return (
    <div className="flex flex-col gap-8">
      <Hero />
      <Features />
      <Guide />
    </div>
  );
};

export default Home;

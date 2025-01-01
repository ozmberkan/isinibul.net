import Features from "@/components/Features/Features";
import Hero from "@/components/Hero/Hero";

const Home = () => {
  return (
    <div className="flex flex-col gap-8">
      <Hero />
      <Features />
    </div>
  );
};

export default Home;

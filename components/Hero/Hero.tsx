import PopularSearchComp from "./PopularSearchComp";
import SearchForm from "./SearchForm";

const Hero = () => {
  return (
    <div className="h-[450px] rounded-xl bg-pattern p-12 flex flex-col gap-2">
      <h1 className="font-extrabold text-white text-3xl">
        Kolayca işini ara, hemen işini bul!
      </h1>
      <p className="text-white">
        İş arayanlar ve işverenleri bir araya getiren bir platform olan
        <strong> işinibul.net</strong> ile iş aramak artık çok kolay
      </p>
      <SearchForm />
      <PopularSearchComp />
    </div>
  );
};

export default Hero;

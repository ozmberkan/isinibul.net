import { featuresText } from "@/constants/data";
import FeatureBox from "./FeatureBox";
import { IconType } from "react-icons";

interface Feature {
  id: number;
  title: string;
  icon: IconType;
}

const Features = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <h1 className="font-semibold text-2xl">Özelliklerimiz</h1>
      <div className="w-full grid grid-cols-4 gap-5">
        {featuresText.map((feature: Feature) => (
          <FeatureBox feature={feature} key={feature.id} />
        ))}
      </div>
    </div>
  );
};

export default Features;

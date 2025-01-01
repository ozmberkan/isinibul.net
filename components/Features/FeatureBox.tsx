import { IconType } from "react-icons";

interface FeatureBoxProps {
  feature: {
    id: number;
    title: string;
    icon: IconType;
  };
}

const FeatureBox = ({ feature }: FeatureBoxProps) => {
  return (
    <div className="p-5 shadow rounded-xl border flex items-center gap-x-5 relative overflow-hidden">
      <span className="bg-primary flex justify-center items-center rounded-full p-2">
        <feature.icon size={20} className="text-white" />
      </span>
      <p className="font-semibold text-lg">{feature.title}</p>
    </div>
  );
};

export default FeatureBox;

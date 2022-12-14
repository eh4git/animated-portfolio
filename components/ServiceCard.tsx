import { FunctionComponent } from "react";
import { Service } from "../type";

const ServiceCard: FunctionComponent<{ service: Service }> = ({
  service: { Icon, about, title },
}) => {
  const createMarkup = () => {
    return {
      __html: about,
    };
  };

  return (
    <div className="flex items-center justify-between p-2 space-x-4">
      <Icon className="w-12 h-12 text-night-700" />
      <div className="w-11/12">
        <h4 className="font-bold">{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
// className="flex justify-between p-2 space-x-4"
// "grid items-center grid-cols-5"

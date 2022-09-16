import { FunctionComponent } from "react";
import { Skill } from "../type";

const Bar: FunctionComponent<{ data: Skill }> = ({
  data: { Icon, name, level },
}) => {
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300">
      <div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-500"
        style={{ width: level }}
      >
        <Icon className="mr-3" />
        {name}
      </div>
    </div>
  );
};

export default Bar;

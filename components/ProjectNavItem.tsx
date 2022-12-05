import { FunctionComponent } from "react";
import { Category } from "../type";

const ProjectNavItem: FunctionComponent<{
  value: Category | "all";
  handleFilteredCategories: Function;
  active: string;
}> = ({ value, handleFilteredCategories, active }) => {
  // let className = "capitalize cursor-pointer select-none hover:text-green";
  // if (active === value) className += " text-green";

  return (
    <li
      className={
        active === value
          ? "capitalize cursor-pointer select-none hover:text-night-300 text-green-200"
          : "capitalize cursor-pointer select-none hover:text-green-200"
      }
      onClick={() => handleFilteredCategories(value)}
    >
      {value}
    </li>
  );
};

export default ProjectNavItem;

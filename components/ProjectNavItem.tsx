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
          ? "capitalize cursor-pointer select-none hover:text-green text-green"
          : "capitalize cursor-pointer select-none hover:text-green"
      }
      onClick={() => handleFilteredCategories(value)}
    >
      {value}
    </li>
  );
};

export default ProjectNavItem;

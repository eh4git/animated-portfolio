import { FunctionComponent } from "react";
import { Category } from "../type";

export const NavItem: FunctionComponent<{
  value: Category | "all";
  handleFilteredCategories: Function;
  active: string;
}> = ({ value, handleFilteredCategories, active }) => {
  let className = "capitalize cursor-pointer select-none hover:text-green";
  if (active === value) className += " text-green";

  return (
    <li className={className} onClick={() => handleFilteredCategories(value)}>
      {value}
    </li>
  );
};

const ProjectNavbar: FunctionComponent<{
  handleFilteredCategories: Function;
  active: string;
}> = props => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="react" {...props} />
      <NavItem value="node" {...props} />
      <NavItem value="express" {...props} />
      <NavItem value="mysql" {...props} />
      <NavItem value="mongodb" {...props} />
    </div>
  );
};

export default ProjectNavbar;

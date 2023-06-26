import { FunctionComponent } from "react";
import { Category } from "../type";
import ProjectNavItem from "./ProjectNavItem";

const ProjectNavbar: FunctionComponent<{
  handleFilteredCategories: Function;
  active: string;
}> = props => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <ProjectNavItem value="front-end" {...props} />
      <ProjectNavItem value="back-end" {...props} />
      <ProjectNavItem value="full-Stack" {...props} />
      <ProjectNavItem value="mobile" {...props} />
    </div>
  );
};

export default ProjectNavbar;

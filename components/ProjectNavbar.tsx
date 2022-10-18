import { FunctionComponent } from "react";
import { Category } from "../type";
import ProjectNavItem from "./ProjectNavItem";

const ProjectNavbar: FunctionComponent<{
  handleFilteredCategories: Function;
  active: string;
}> = props => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <ProjectNavItem value="javaScript" {...props} />
      <ProjectNavItem value="react" {...props} />
      <ProjectNavItem value="node" {...props} />
      <ProjectNavItem value="express" {...props} />
      <ProjectNavItem value="mysql" {...props} />
      <ProjectNavItem value="mongoDB" {...props} />
    </div>
  );
};

export default ProjectNavbar;

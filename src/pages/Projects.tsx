import { NextPage } from "next";
import Projects from "../components/projects/Projects";

const ProjectPage: NextPage = () => {
  return (
    <>
      <main className="min-h-screen items-center justify-center p-4 lg:px-40 xl:px-96">
        <div className="static h-full overflow-y-auto pt-12 pb-12">
          <div className="mx-8 space-y-8 md:mx-20">
            <Projects/>
          </div>
        </div>
      </main>
    </>
  );
};
export default ProjectPage;

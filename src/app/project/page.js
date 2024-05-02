import ProjectItem from "../component/projects/projectItem";
import getData from "../utils/getData";

export default async function Project() {
  const { projects } = await getData();
  console.log("클라이언트" + projects);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-5 py-24 mb-10">
      <h1 className="text-3xl font-bold sm:text-5xl">
        총 프로젝트 :
        <span className="pl-4 text-blue-500">{projects.results.length}</span>
      </h1>
      <div className="grid md:grid-cols-3 xm:w-full py-10 m-6 gap-8">
        {projects.results.map((item) => (
          <ProjectItem key={item.id} projects={item} />
        ))}
      </div>
    </div>
  );
}

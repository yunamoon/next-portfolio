import getData from "@/app/lib/getData";
import ProjectItem from "./project-item/projectItem";
export default async function Project() {
  const { projects } = await getData();
  return (
    <section className="flex min-h-screen flex-col items-center justify-center  text-gray-900 body-font ">
      <div className="container px-5 py-24 mx-auto ">
        <div className="flex flex-wrap w-full mb-20 ">
          <div className="w-full mb-6 lg:mb-0  ">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Projects
            </h1>
            <div className="h-1 w-20 bg-yellow-400 rounded"></div>
            {/* <p className="w-full leading-relaxed text-gray-500 pt-2 -mb-3">
              실무에서 경험한 프로젝트와 개인적으로 진행한 토이 프로젝트에 대한
              내용을 기록합니다.
            </p> */}
            <p className="w-full leading-relaxed text-gray-500 ">
              <br className="inline-block" />
              <span className="text-yellow-400">●</span> Front-End: JavaScript,
              TypeScript, React.js, Next.js, Dart, Flutter, HTML/CSS
              <br className="inline-block" />
              <span className="text-yellow-400">●</span> Back-End: Node.js, Java
              <br className="inline-block" />{" "}
              <span className="text-yellow-400">●</span> Database: Firebase,
              Mongo DB, GCP, AWS
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center  flex-wrap -m-4">
          {projects.results.map((item) => (
            <ProjectItem key={item.id} projects={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

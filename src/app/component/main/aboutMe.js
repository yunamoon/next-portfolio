import Link from "next/link";
import Moon from "./moon";

export default function AboutMe() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center  text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ">
            안녕하세요,
            <br className="hidden lg:inline-block" />
            프론트엔드 개발자 문유나입니다.
          </h1>
          <p className="mb-8 leading-relaxed">
            3년 차 프론트엔드 개발자입니다. 대학 졸업 이후 부트캠프를 수료하고
            스타트업에서 초기 개발자로 근무하며 실무 경험을 쌓았습니다.
            프로젝트를 통해 사용자 편의성을 개선하여 사용자에게 좋은 경험을
            남기는 것을 중요하게 생각하며, 필요에 따라 새로운 기술을 습득하고
            도입하는 것에도 열린 마음을 가지고 있습니다.
          </p>
          <div className="flex justify-center">
            <a
              href="https://resonant-hub-d0e.notion.site/d002b1983b9c45969f36a4d872f90717?pvs=4"
              target="/blank"
              className="inline-flex text-white  dark:text-gray-600 bg-yellow-400 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-500 rounded text-lg"
            >
              Resume
            </a>
            <Link
              href="/project"
              className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
            >
              Project
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Moon />
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function ProjectItem({ projects }) {
  const imgSrc = projects.cover.external.url || projects.cover.file.url;
  const title = projects.properties.Name.title[0].plain_text;
  const start = projects.properties.WorkPeriod.date.start;
  const end = projects.properties.WorkPeriod.date.end;
  const description = projects.properties.Description.rich_text[0].plain_text;
  const tags = projects.properties.Tag.multi_select;
  const github = projects.properties.Github.url;
  const classify = projects.properties.Classify.rich_text[0].plain_text;

  return (
    <>
      <div className="xl:w-1/4 md:w-1/2 p-4 card">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            alt="cover image"
            src={imgSrc}
            quality={0}
            width={0}
            height={30}
            objectFit="cover"
          />
          {/* <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content"> */}
          <h3 className="tracking-widest text-yellow-500 text-xs font-medium title-font">
            {classify}
          </h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
            {title}
          </h2>
          <p className="leading-relaxed text-base">{description}</p>

          <a href={github}>깃허브 바로가기</a>

          <div className="flex items-start mt-2">
            {tags.map((item) => (
              <h1
                className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30 text-xs"
                key={item.id}
              >
                {item.name}
              </h1>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="project-card ">
      <Image
        className="rounded-t-md w-full"
        alt="cover image"
        src={imgSrc}
        quality={0}
        width={0}
        height={30}
        objectFit="cover"
      />
      <div className="p-4">
        <h1 className="text-2xl">{title}</h1>
        <h3>{description}</h3>
        <a href={github}> 깃허브 바로가기</a>

        <h3>
          작업기간 : {start} ~ {end}
        </h3>
        <div className="flex items-start mt-2">
          {tags.map((item) => (
            <h1
              className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"
              key={item.id}
            >
              {item.name}
            </h1>
          ))}
        </div>
      </div>
    </div> */}
    </>
  );
}

import Image from "next/image";

export default function ProjectItem({ projects }) {
  const imgSrc = projects.cover.external.url || projects.cover.file.url;
  const title = projects.properties.Name.title[0].plain_text;
  const description = projects.properties.Description.rich_text[0].plain_text;
  const github = projects.properties.Github.url;

  return (
    <div className="p-6 m-3 bg-slate-400 rounded-md">
      <Image
        className="rounded-t-md w-full"
        alt="cover image"
        src={imgSrc}
        quality={100}
        width={100}
        height={100}
        layout="responsive"
        objectFit="cover"
      />
      <div className="p-4">
        <h1>{title}</h1>
        <h1>{description}</h1>
        <a href={github}> 깃허브 바로가기</a>
      </div>
    </div>
  );
}

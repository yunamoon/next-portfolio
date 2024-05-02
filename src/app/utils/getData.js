const { Client } = require("@notionhq/client");
import { DATABASE_ID, TOKEN } from "../config";

export default async function getData() {
  const notion = new Client({ auth: TOKEN });
  const databaseId = DATABASE_ID;
  const projects = await notion.databases.query({
    database_id: databaseId,
  });

  // const projectId = projects.results.map((project) => project.id);
  // const projectName = projects.results.map((project) => {
  //   if (
  //     project &&
  //     project.properties &&
  //     project.properties.Name &&
  //     project.properties.Name.title &&
  //     project.properties.Name.title[0] &&
  //     project.properties.Name.title[0].plain_text
  //   ) {
  //     return project.properties.Name.title[0].plain_text;
  //   } else {
  //     return null;
  //   }
  // });
  return { projects };
}

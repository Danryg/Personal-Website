import { ProjectFromDatabase } from "./projects";
import { SuccessResponseWithValue } from "./ServiceResponses";

export const fetchProjects = async (): Promise<SuccessResponseWithValue> => {
  let projects: ProjectFromDatabase[] = [];
  const proj: ProjectFromDatabase = {
    title: "Test1",
    describtion: "This is a test describtion",
    pictures: ["", ""],
    contributors: ["cont1 hej", "cont2 hej2", "cont3 hej3"],
    date: Date.prototype,
    gitLink:
      "https://github.com/emilsvennesson/dat257-xzibit/blob/main/app/src/pages/SellingPage/SellingPage.tsx",
  };

  return { success: true, value: projects };
};

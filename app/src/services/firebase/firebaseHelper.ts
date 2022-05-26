import { Project } from "./projects";
import { SuccessResponseWithValue } from "./ServiceResponses";

export default class fbHelper {
  static async getName(): Promise<SuccessResponseWithValue> {
    return { success: true, value: "Daniel Rygaard" };
  }

  static async getOccupation(): Promise<SuccessResponseWithValue> {
    return { success: true, value: "" };
  }

  static async getProjects(): Promise<SuccessResponseWithValue> {
    let projects: Project[] = [];
    const proj: Project = {
      title: "Test1",
      describtion: "This is a test describtion",
      pictures: ["", ""],
      contributors: ["cont1 hej", "cont2 hej2", "cont3 hej3"],
      date: Date.prototype,
      gitLink:
        "https://github.com/emilsvennesson/dat257-xzibit/blob/main/app/src/pages/SellingPage/SellingPage.tsx",
    };

    projects.push(proj);

    return { success: true, value: projects };
  }
}

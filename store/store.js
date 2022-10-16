import { defineStore } from "pinia";
import api from "../utils/axios";

export const useStore = defineStore("useStore", {
  state: () => {
    return {
      projects: [],
    };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    async getProjects() {
      try {
        const { data } = await api.get("/api/myProjects");
        this.projects = data
          .sort((a, b) => b.projectID - a.projectID)
          .filter((p) => p.featured == "true");

        console.log(this.projects);
      } catch (error) {
        console.log(error);
      }
    },
    setProjects(payload) {
      console.log(payload);
    },
  },
});

<template>
  <div class="single-project-page">
    <SocialHead
      v-if="project.fields"
      :title="project.fields.name"
      :description="project.projectDesc"
      :image="project.fields.img[0].url"
    />

    <div class="article-section">
      <ProjectDescription :project="project.fields" />
      <div>
        <div v-html="$md.render(projectReadMe)"></div>
      </div>
    </div>

    <Sidebar style="margin-top: 0" :tags="tags" />
  </div>
</template>

<script setup>
import { useAsync, useContext, ref, useFetch } from "@nuxtjs/composition-api";
import axios from "axios";
const { $http } = useContext();
let readMePath = ref("");
let projectReadMe = ref("");

const project = useAsync(() =>
  $http.$get(`http://localhost:8888/api/project?id=receiw2vcbjeufHKY`)
);

if (project.value) {
  let gitUrl = project.value.fields.gitUrl.split("/");
  readMePath.value = gitUrl[gitUrl.length - 1];
  const getProjectReadMe = async () => {
    try {
      const res = await axios(
        `https://raw.githubusercontent.com/maxrpark/${readMePath.value}/main/README.md`
      );
      projectReadMe.value = res.data;
    } catch (error) {
      console.log(error);
    }
  };
  getProjectReadMe();
}
</script>

<script>
export default {
  head() {
    return {
      title: `|| Maxi Ruti`,
      meta: [
        {
          hid: "description",
          name: "description",
        },
      ],
    };
  },
};
</script>

<style scoped>
.article-section {
  background-color: var(--white-color);
  border-radius: 20px;
  box-shadow: var(--box-shadow);
}

.single-project-page {
  min-height: 100vh;
  color: var(--text-color-two);
}
.single-project-page p {
  line-height: 2rem;
}

@media screen and (min-width: 1240px) {
  .article-section {
    padding: 1rem 2rem;
    box-sizing: content-box;
  }
}
</style>

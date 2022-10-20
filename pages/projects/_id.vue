<template>
  <div class="single-project-page"></div>
</template>

<script>
import api from "../../utils/axios";
export default {
  head() {
    return {
      title: `${this.project.name} || Maxi Ruti`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.projectDesc.description,
        },
      ],
    };
  },
  data() {
    return {
      project: [],
      text: null,
      img: "",
      loading: true,
    };
  },
  async asyncData({ $content, params }) {
    const tags = await $content("tags")
      .only(["name", "description", "img", "slug"])
      .sortBy("createdAt", "asc")
      .fetch();
    const projectDesc = await $content("projects", params.id)
      .only(["title", "description", "body", "toc", "img"])
      .fetch();

    const { data } = await api.get(`/api/project?id=receiw2vcbjeufHKY`);
    // const { data } = await api.get(`/api/project?id=${id}`);
    // console.log(data);
    return {
      tags,
      projectDesc,
    };
  },
  mounted() {
    //   const getProject = async () => {
    //     try {
    //       const id = this.$route.params.id;
    //       const {
    //         data: { fields },
    //       } = await api.get(`/api/project?id=${id}`);
    //       this.project = fields;
    //       const { img } = fields;
    //       const url = img[0].url;
    //       this.img = url;
    //       this.loading = false;
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
    //   getProject();
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
}
.version {
  text-align: center;
}
.project-detail h3,
.table-contents h5 {
  margin-bottom: 0.5rem;
}
.project-detail h3 {
  text-align: center;
}
.table-contents li {
  margin-bottom: 0.2rem;
}
.single-project-page {
  color: var(--text-color-two);
}
.single-project-page p {
  line-height: 2rem;
}
.project-detail {
  margin-bottom: 1rem;
}
.links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 1rem;
}
.links a {
  width: 8rem;
  text-align: center;
}
@media screen and (min-width: 1240px) {
  .article-section {
    padding: 1rem 2rem;
    box-sizing: content-box;
  }
}
</style>

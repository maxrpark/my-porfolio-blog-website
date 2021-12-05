<template>
  <div>
    <Hero title="Maxi Ruti" desc="About me" />
    <div class="about-me">
      <article>
        <h2>Few things about Me</h2>
        <p>
          My name is Maxi Ruti and I am from Argentina, but currently living in
          South Korea.
        </p>
        <p>
          I have always been interested in web development but I never thought
          It will eventually become my profession.
        </p>
        <p>
          Since I was young I was always creating blogs or websites with Blogger
          or Wix just for fun, because I liked all the processes of design it
          and trying to make it look nice.
        </p>
        <h3>My Firsts real websites</h3>
        <p>
          In 2020 I created my firsts website using WordPress, which is called
          <nuxt-link to="/projects/reck8lMlwTFTGRTOg"
            >Aprende Coreano Paso a Paso</nuxt-link
          >. The learning curve, especially the first weeks was hard, but after
          that, I learn many things and the most important thing I learned was
          that there is always a solution to the trouble you may face if you
          google it.
        </p>
        <p>
          After that I built another two WordPress sites,
          <nuxt-link to="/projects/recDAWmOo6ZixT6OD"
            >All About Mendoza</nuxt-link
          >, which is a travel guide about my hometown, and
          <nuxt-link to="/projects/rec30gHV1ne6J0nPj"
            >Vegetariano en Corea</nuxt-link
          >, a personal blog where I share my life in South Korea.
        </p>
        <h3>Becoming a Webdeveloper</h3>
        <p>
          This year I decided to learn front-end and back-end web development. I
          did not much about that when I started, but even if it sounds silly I
          am glad I had some WordPress experience because It helps me to
          understand some things faster, especially when I started learning HTML
          & CSS.
        </p>
        <p>
          I started learning as most self-taught web developers do, through
          google and youtube videos. Soon after that, I decided to take some
          Udemy courses.
        </p>
        <p>
          Even though all the information you may need to know to become a web
          developer is out there for free, I like Udemy because the courses are
          well organized, you can download and rewatch the lessons any time you
          want.
        </p>
        <p>
          So I spent 3 months learning HTML&CSS and JavaScript, I studied for
          more than 10 hours every day even on weekends.
        </p>
        <h3>My first job as Web developer</h3>
        <p>
          Just when I was starting to learn React I got my first job interview
          and the most amazing that that is that I got the job. Which of course
          it is still unbelievable.
        </p>
        <p>
          I am learning so much at my job and I am also learning in my free time
          that is all I do. Learn, learn and keep learning.
        </p>

        <p>
          Yes, I love web development and this is my Portfolio - Blog created
          with Nuxt js.
        </p>
      </article>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.about-me {
  max-width: 720px;
  margin: 1rem;
}
h2,
h3 {
  text-align: center;
}
a {
  display: inline-block;
  font-weight: 400;
  font-size: 1.125rem;
  color: var(--text-color-one);
  text-decoration: underline 2px var(--text-color-one);
}
a:hover {
  color: var(--text-color-two);
}
@media screen and (min-width: 768px) {
  .about-me {
    margin: 1rem auto;
  }
}
</style>

<template>
  <div id="home">


    <span id="presentation">
      <p>Grand curieux et passionné, j’aime particulièrement trouver des solutions à tout type
      de problème. <b>Je conçois, développe et déploie des application web responsive de A à Z</b>.</p>
      <p>Ayant un fort attrait pour le web, je suis tout de même ouvert à toute proposition.</p>
      <span id="text"></span>
    </span>
    <div id="programming-container">
      <Programming id="programming" :view-box.camel="programmingViewBox" />
    </div>
  </div>
</template>

<script>
import { Power3, gsap } from "gsap";
import { color1, color2 } from "@/variables";
import Profile from "@/assets/svgs/profile.svg";
import Programming from "@/assets/svgs/programming.svg";
import Typewriter from "typewriter-effect/dist/core";

export default {
  name: "HomeView",
  components: {
    Profile,
    Programming,
  },
  data() {
    return {
      profileViewBox: "0 0 698 698",
      programmingViewBox: "0 0 1041.32 554.17",
    };
  },
  mounted() {
    let tl = gsap.timeline();
    tl
      .to("#presentation", { duration: 2, opacity: 1 }, 0)
      .to("#profile-container", { duration: 2, opacity: 1 }, "-=2")
      .to(
        "#programming",
        { duration: 2, opacity: 1, x: 0, ease: "elastic" },
        "-=2"
      )
      .to("#programming", { duration: 20, scale: 1.25, y: 50 }, "-=1");
    let text = document.getElementById("text");
    let typewriter = new Typewriter(text, {});

    typewriter
        .pauseFor(2500)
        .typeString(
            "Un projet ? <a href='mailto:contact@pierrecaretero.fr'>Contactez-moi</a>, le devis est gratuit !"
        )
        .start();
  },
};
</script>

<style lang="scss">
#home {
  align-items: center;
}
#profile-container {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: 0 0 5px 1px rgba(178, 147, 160, 0.3);
  opacity: 0;
}
#profile {
  max-width: 100%;
  height: auto;
  transition: transform 2s;
  transform: rotate(-0deg);
  &:hover {
    transform: rotate(360deg);
    cursor: pointer;
  }
}
#presentation {
  text-align: center;
  padding: 3rem;
  line-height: 2rem;
  opacity: 0;
  max-width: 600px;
}
#text a {
  font-size: 1rem;
  color: #000;
  text-decoration: underline;
}
#programming {
  opacity: 0;
  max-height: 50vh;
  transform: translateX(-50vh);
}
.home #text {
  opacity: 1;
  transform: translateY(-50%);
}
@media (min-width: 768px) {
  #profile-container {
    margin-top: 5px;
  }
}
@media (max-width: 767px) {
  #programming {
    transform: scale(1) !important;
  }
}
</style>

<template>
  <div id="home">
    <span id="profile-container">
      <Profile id="profile" :view-box.camel="profileViewBox" />
    </span>

    <span id="presentation">
      Diplômé d’un Master Technologie de l’Internet de l’Université de Pau et
      des Pays de l’Adour en 2015, je travaille en tant qu’ingénieur d’études et
      développement pour le compte de la société rue des écoles depuis lors. À
      ce titre, j'ai eu l’occasion de faire beaucoup de
      <b>développement web</b> (une dizaine de sites développés par an, de
      différentes tailles), fréquemment de l’<b>administration système</b>
      (gestion du parc de 13 serveurs sous distributions GNU/Linux) mais
      également un peu d’<b>administration réseau</b>. Grand curieux et
      touche-à-tout, j’aime particulièrement trouver des solutions à tout type
      de problème.
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
    tl.to("#particles", { duration: 1, height: "100vh" })
      .to("#presentation", { duration: 2, opacity: 1 }, 0)
      .to("#profile-container", { duration: 2, opacity: 1 }, "-=2")
      .to(
        "#programming",
        { duration: 2, opacity: 1, x: 0, ease: "elastic" },
        "-=2"
      )
      .to("#programming", { duration: 20, scale: 1.25, y: 50 }, "-=1");

    let color = color1;
    document.querySelector("#profile").onclick = function () {
      let tl = gsap.timeline();
      color = color === color1 ? color2 : color1;
      let textColor = color === color2 ? "#fff" : "#000";
      let paths = document.querySelectorAll(".color"),
        i;
      tl.addLabel("color", 0);
      for (i = 0; i < paths.length; ++i) {
        tl.to(
          paths[i],
          { duration: 2, fill: color, ease: Power3.easeOut },
          "color"
        );
      }
      tl.to(
        "#particles",
        { duration: 2, background: color, ease: Power3.easeOut },
        "color"
      );
      tl.to(
        "#text",
        { duration: 2, color: textColor, ease: Power3.easeOut },
        "color"
      );
      tl.play("color");
    };
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

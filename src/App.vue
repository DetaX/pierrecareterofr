<template>
  <main :class="$route.name">
    <div id="particles" class="particles">
      <span id="text" >Je développe votre site web</span>
    </div>
    <nav>
      <span>
        <router-link to="/"> À propos </router-link>
      </span>
      <span>
        <router-link to="/cv"> CV </router-link>
      </span>
      <span>
        <router-link to="/projets"> Projets </router-link>
      </span>
    </nav>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" class="left" />
      </transition>
    </router-view>
  </main>
</template>

<script>
import { Power3, gsap } from "gsap";
import { color1 } from "./variables";

import Typewriter from "typewriter-effect/dist/core";

export default {
  name: "App",
  mounted() {
    window.particlesJS.load(
      "particles",
      "assets/particles.json",
      function () {}
    );
    let w = window.outerWidth;

    window.onresize = function () {
      if (w < window.outerWidth && window.outerWidth > 768)
        window.scrollTo(0, 0);
      w = window.outerWidth;
    };
    let tl = gsap.timeline();
    tl.to("#particles", {
      duration: 2,
      background: color1,
      ease: Power3.easeOut,
    }).to("nav", { duration: 3, x: 0, ease: "elastic" }, "-=2");
    let text = document.getElementById("text");
    let typewriter = new Typewriter(text, {});

    typewriter
      .changeDelay(10)
      .typeString(
        "Je conçois et développe des applications et sites web responsive de A à Z."
      )
      .pauseFor(1000)
      .typeString(
        "<br>Un projet ? <a href='mailto:contact@pierrecaretero.fr'>Contactez moi</a>, le devis est gratuit !"
      )
      .pauseFor(5000)
      .start();
  },
};
</script>

<style lang="scss">
/* latin-ext */
@font-face {
  font-family: "Comfortaa";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/comfortaa/v27/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4WjMDr0fIA9c.woff2)
    format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: "Comfortaa";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/comfortaa/v27/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4WjMDrMfIA.woff2)
    format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

html {
  overflow-x: hidden;
}
body {
  margin: 0;
}
main {
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  margin: 0;
  font-family: "Comfortaa", cursive;
  overflow-x: hidden;
}
.left {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 50px);
  z-index: 1;
  flex-grow: 1;
  margin-top: 25px;
  width: 100%;
}
#particles {
  background: #fff;
  height: 100vh;
  flex-grow: 1;
  text-align: center;
  width: 100%;
  z-index: 0;
  canvas {
    z-index: -1;
  }

}
.particles-js-canvas-el {
  position: absolute;
  left: 0;
}
nav {
  position: absolute;
  right: 25px;
  top: 25px;
  z-index: 2;
  transform: translateX(calc(100% + 25px));
  display: flex;
  flex-direction: column;
  text-align: right;
  span {
    margin-bottom: 1rem;
  }
  a {
    margin: 5px;
    &:hover {
      color: #000;
      position: relative;
      &:after {
        width: 100%;
        transition: width 0.5s;
      }
    }
    &:after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      border-bottom: 2px solid black;
    }
  }
}
a {
  text-decoration: none;
  color: #cecece;
  font-size: 1.2rem;
}

#text {
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(calc(-50vh - 100%));
  text-align: center;
  padding: 3rem;
  font-size: 1rem;
  line-height: 1.4rem;
  transition: transform 2s, opacity 2s;
  a {
    font-size: 1rem;
    color: inherit;
    text-decoration: underline;
  }
}
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
  opacity: 0;
}
.router-link-active {
  color: #000;
}
@media (min-width: 768px) {
  main {
    overflow: hidden;
    flex-direction: row;
  }
  .left {
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    margin-top: 75px;
    & > *:last-child {
      margin-bottom: 75px;
    }
  }
  html {
    overflow: hidden;
  }
  a {
    font-size: 1.4rem;
  }
  nav {
    flex-direction: row;
    text-align: center;
    a {
      margin: 15px;
    }
  }
  #particles {
    height: 100vh !important;
  }
  ::-webkit-scrollbar {
    width: 5px;
  }
  #text {
    width: calc(50vw - 6rem);
    opacity: 1;
    transform: translateY(-50%);
  }
  ::-webkit-scrollbar-track {
    background: #fff;
  }

  ::-webkit-scrollbar-thumb {
    background: #cacaca;
  }
}
</style>

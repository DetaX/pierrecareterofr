<template>
  <main :class="$route.name">
    <div id="particles" class="particles">
      <div class="title_wrapper">
        <router-link to="/"><img src="/assets/picture.jpg" alt="Photo" /></router-link>
        <router-link to="/"><span class="title">Pierre Caretero</span></router-link>
        <router-link to="/"><span class="subtitle">Consultant informatique spécialiste du web</span></router-link>
      </div>
      <nav id="navbar">
        <theme-button id="theme_buttton" />

        <span>
        <router-link to="/projets"> Projets </router-link>
      </span>
        <span>
        <router-link to="/cv"> CV </router-link>
      </span>
    <span>
      <a href="https://github.com/DetaX/pierrecareterofr" id="github" title="Voir le code sur Github">
        <Github />
      </a>
    </span>
      </nav>
    </div>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" class="left" />
      </transition>
    </router-view>
  </main>
</template>

<script>
import Github from "@/assets/svgs/github.svg";
import ThemeButton from "@/components/ThemeButton.vue";
import { useHead } from '@vueuse/head'

export default {
  name: "App",
  components: {
    Github,
    ThemeButton
  },
  mounted() {
    useHead({
      titleTemplate: (title) => !title ? 'Pierre Caretero - Consultant informatique spécialiste du web' : `${title} - Pierre Caretero - Consultant informatique spécialiste du web`,
  });
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

    window.onscroll = function() {myFunction()};

    let navbar = document.getElementById("navbar");
    let sticky = navbar.offsetTop;
    function myFunction() {
      if (navbar.offsetTop > 0) sticky = navbar.offsetTop;
      if (window.scrollY >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }
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
  src: url(/assets/fonts/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4WjMDr0fIA9c.woff2)
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
  src: url(/assets/fonts/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4WjMDrMfIA.woff2)
    format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

:root {
  --background-color-primary: #fff;
  --background-color-secondary: #f9f9f9;
  --text-primary-color: #222;
  --text-secondary-color: #6b6b6b;
  --particles-color: #8DA9C4;
  --nav-default-color: #cecece;
  --nav-active-color: #000;
  --nav-mobile-color: #6c879b;
  --element-size: 3rem;
}

:root.dark-theme {
  --background-color-primary: #1f2329;
  --background-color-secondary: #181c22;
  --text-primary-color: #ddd;
  --text-secondary-color: #6b6b6b;
  --particles-color: #2f343d;
  --nav-default-color: #707070;
  --nav-active-color: #fff;
  --nav-mobile-color: #252a30;
}

html {
  overflow-x: hidden;
}
body {
  margin: 0;
}
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}

main {
  width: 100%;
  transition: background-color .3s ease, color .3s ease;
  background: var(--background-color-primary);
  color: var(--text-primary-color);
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
  transition: background-color .3s ease;
  background: var(--particles-color);
  height: 50vh;
  min-height: 250px;
  flex-grow: 1;
  text-align: center;
  width: 100%;
  z-index: 2;
  display: flex;
  align-items: center;
  position: relative;
  canvas {
    z-index: -1;
  }
}
#theme_buttton {
  margin: auto 0;
}
.particles-js-canvas-el {
  position: absolute;
  left: 0;
}
.title_wrapper {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 53px;
  outline: none;

  .title {
    display: flex;
    margin: .75rem auto 0;
    font-size: 1.6rem
  }
  .subtitle {
    font-size: 1rem;
    display: flex;
    margin: auto;
    padding: 0 1rem;
  }
  img {
    max-width: 15%;
    min-width: 100px;
    border-radius: 50%;
    margin: auto;
  }
  a {
    color: var(--text-primary-color);
    transition: color .3s ease;
    display: contents;
  }
}
nav {
  position: absolute;
  bottom: 0;
  z-index: 2;
  display: flex;
  flex-direction: row;
  background: rgb(0 0 0 / 20%);
  justify-content: space-evenly;
  width: 100%;
  height: 53px;
  transition: background-color .3s ease;
  &.sticky {
    background: var(--nav-mobile-color);
  }
  & > span {
    padding: 1rem;
  }
  a {
    color: var(--nav-default-color);
    font-size: 1.2rem;
    &:hover {
      color: var(--nav-active-color);
      position: relative;
    }
    &#github {
      svg {
        fill: var(--nav-default-color);
      }
    }
  }
}
a {
  text-decoration: none;
}

.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
  opacity: 0;
}
.router-link-active {
  color: var(--nav-active-color);
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
      margin-bottom: 90px;
    }
  }
  html {
    overflow: hidden;
  }
  a {
    font-size: 1.4rem;
  }
  .title_wrapper {
    margin-bottom: 0;
  }
  nav {
    top: 25px;
    bottom: revert;
    background: none;
    right: -100%;
    justify-content: flex-end;
    align-items: center;
    & > span {
      padding: 0.25rem;
    }
    a#github {
      &:hover {
        svg {
          fill: var(--nav-active-color);
        }
      }
      &:after {
        content: none;
      }
    }
    a {
      margin: 15px;
      &:not(.router-link-active):hover:after {
        width: 100%;
        transition: width 0.5s;
      }
      &:after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        border-bottom: 2px solid var(--nav-active-color);;
      }
    }
  }
  #particles {
    height: 100vh !important;
  }
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #fff;
  }

  ::-webkit-scrollbar-thumb {
    background: #cacaca;
  }
}
</style>

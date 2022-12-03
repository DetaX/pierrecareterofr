<template>
  <div id="projects">
    <div class="contact">Votre projet ici ? Demandez un devis gratuitement par e-mail à <a href="mailto:contact@pierrecaretero.fr">contact@pierrecaretero.fr</a>.</div>
    <div class="project">
      <div class="text-container">
        <div class="title">PhasmoTools</div>
        <div class="technologies">Développement Vue.Js</div>
        <div class="description">Divers outils pour le jeu Phasmophobia (configurateur de difficulté à partager, système de preuve du jeu, ...).</div>
      </div>
      <a href="https://phasmo.detax.eu" title="Visiter le site"><img src="/assets/phasmotools.png" alt="PhasmoTools" data-src="phasmotools, phasmotools1" data-current-src=0 /></a>
    </div>

    <div class="project">
      <div class="text-container">
        <div class="title">Frogged TV</div>
        <div class="technologies">Développement Symfony + Hébergement</div>
        <div class="description">FroggedTV est une association tourner autour du jeu vidéo Dota 2. Ils commentent sur Twitch les compétitions officiels et organisent aussi une ligue francophone.</div>
      </div>
      <a href="https://frogged.tv" title="Visiter le site"><img src="/assets/froggedtv.png" alt="FroggedTV" /></a>
    </div>

    <div class="project">
      <div class="text-container">
        <div class="title">Gagner plus d'argent</div>
        <div class="technologies">Développement WordPress + Hébergement</div>
        <div class="description">Le blog gagner plus d’argent présente différentes manières de gagner de l’argent, des idées de jobs en ligne ou des astuces pratiques sur le thème de l’argent.</div>
      </div>
      <a href="https://gagnerplusargent.fr" title="Visiter le site"><img src="/assets/gagnerplusargent.png" alt="Gagner plus d'argent" /></a>
    </div>

    <div class="project">
      <div class="text-container">
        <div class="title">Les trouvailles de Martyna</div>
        <div class="technologies">Développement WordPress + Hébergement</div>
        <div class="description">Les trouvailles de Martyna est le blog d’une jeune polonaise qui écrit sur différents sujets liés aux thèmes du voyage et du vin.</div>
      </div>
      <a href="https://martyna.fr" title="Visiter le site"><img src="/assets/martyna.png" alt="Les trouvailles de Martyna" /></a>
    </div>
  </div>
</template>

<script>


import {gsap, Power3} from "gsap";

export default {
  name: "ProjectsView",
  mounted() {
    let tl = gsap.timeline();
    tl.fromTo(".text-container", {opacity: 0}, { duration: 2, opacity: 1 }, 0)
        .fromTo(".project img",  {opacity: 0}, {
      duration: 1,
      opacity: 1,
      ease: Power3.easeIn
    }, "=-2");
    document.querySelectorAll('img[data-src]').forEach(function(img) {
      setInterval(function(){
        let currentSrc = img.getAttribute('data-current-src');
        let sources = img.getAttribute('data-src').split(',');
        let nextSrc = (++currentSrc)% sources.length;
        tl.to(img, {duration: 0.75, opacity: 0.05, ease: Power3.easeInOut, onComplete: function() {
            img.setAttribute('data-current-src', nextSrc);
            img.src = "/assets/"+sources[nextSrc].trim()+".png";
            tl.to(img, { duration: 0.75, ease: Power3.easeOut, opacity: 1 } );
          } })


      }, 5000);
    })
  }
};
</script>

<style lang="scss">
  #projects {
    .contact {
      padding: 2rem;
      text-align: center;
      background: #393d3f;
      color: #fff;
      margin-top: 1rem;
      a {
        font-size: 1rem;
        color: #E07A5F;
      }
    }
    .technologies {
      font-size: .8rem;
      margin-top: .25rem;
    }
    .description {
      margin-top: 0.5rem;
    }
    .project {
      display: flex;
      background: #f9f9f9;
      margin-top: 2rem;
      flex-direction: column;
      transition: all .15s;
      .title {
        font-size: 1.4rem;
      }
    }
    a {
      display: contents;
    }
    .text-container {
      padding: 2rem;
      opacity: 0;
    }
    img {
      max-width: 350px;
      margin: 0 auto;
      transition: filter .25s;
      opacity: 0;
      &:hover {
        filter: grayscale(1);
      }
    }
  }
  @media(min-width: 1280px) {
    #projects {
      .project {
        flex-direction: row;
        &:nth-child(odd) {
          flex-direction: row-reverse;
        }
      }
    }
  }
</style>
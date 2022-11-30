<template>
  <div id="cv">
    <Work
        id="work"
        :view-box.camel="workViewBox"
    />
    <div id="experiences">

      <div class="block-title">
        Expériences professionnelles
      </div>
      <div class="experience">
        <div class="date">
          octobre 2015 - aujourd'hui
        </div>
        <div class="title">
          Rue des écoles
        </div>
        <div class="description">
          En charge du développement d'applications web ou mobiles ainsi que de la gestion du parc interne et externe de serveurs
        </div>
      </div>
      <div class="experience">
        <div class="date">
          février 2015 - juin 2015
        </div>
        <div class="title">
          Direction du Numérique, Université de Pau et des Pays de l'Adour
        </div>
        <div class="description">
          Développement d'un outil (Python/Django) permettant d'assurer le suivi de tous les sites web de l'université.
        </div>
      </div>
    </div>
    <div id="formations">
      <div class="block-title">
        Formation
      </div>
      <div class="formation">
        <div class="date">
          2013 - 2015
        </div>
        <div class="title">
          Master Technologie de l'internet
        </div>
        <div class="description">
          Université de Pau et des Pays de l'Adour
        </div>
      </div>
      <div class="formation">
        <div class="date">
          2010 - 2013
        </div>
        <div class="title">
          Licence Informatique
        </div>
        <div class="description">
          Université de Pau et des Pays de l'Adour
        </div>
      </div>
      <div class="formation">
        <div class="date">
          2010
        </div>
        <div class="title">
          Baccalauréat Scientifique, option Sciences de l'Ingénieur, <i>Mention AB</i>
        </div>
        <div class="description">
          Lycée St-Cricq
        </div>
      </div>
    </div>
    <div id="skills">
      <div class="block-title">
        Compétences
      </div>
      <div class="skill">
        <div class="title">
          Développement
        </div>
        <div class="description">
          Java, Java EE, Python, C++, Android, C, PHP, JavaScript, HTML, CSS, SCSS, XML, XSLT, OpenGL, SQL, Scheme, Assembleur
        </div>
      </div>
      <div class="skill">
        <div class="title">
          Outils
        </div>
        <div class="description">
          UML/OCL, SysML, Merise, Git, LaTeX
        </div>
      </div>
      <div class="skill">
        <div class="title">
          Réseau
        </div>
        <div class="description">
          Protocoles, Services, QOS
        </div>
      </div>
      <div class="skill">
        <div class="title">
          Divers
        </div>
        <div class="description">
          IA, Virtualisation(VMware)
        </div>
      </div>
      <div class="skill">
        <div class="title">
          Système d'exploitation
        </div>
        <div class="description">
          Windows, Linux
        </div>
      </div>
    </div>
    <div id="languages">
      <div class="block-title">
        Langages
      </div>
      <div class="language">
        <div class="title">
          Français
        </div>
        <div class="description">
          Langue maternelle
        </div>
      </div>
      <div class="language">
        <div class="title">
          Anglais
        </div>
        <div class="description">
          Courant
        </div>
        <div class="subdescription">
          TOEIC 975 (2015)
        </div>
      </div>
      <div class="language">
        <div class="title">
          Espagnol
        </div>
        <div class="description">
          Notions
        </div>
      </div>
    </div>

    <div id="hobbies">
      <div class="block-title">
        Centres d'intérêts
      </div>
    </div>
  </div>
</template>

<script>
import {gsap} from "gsap";
import Work from "../assets/svgs/work.svg"

export default {
  name: "CVView",
  components: {
    Work
  },
  data() {
    return {
      workViewBox: "0 0 873.53 801.44",
    }
  },
  mounted() {
    let tl = gsap.timeline();
    tl.to("#particles", {duration: 1, height: "50vh"})
    ;
    setTimeout(function() {document.querySelector('#cv').classList.add('loaded');}, 100);
  }
};
</script>

<style lang="scss">

  #cv {
    position: relative;
    & > div {
      padding-right: 20px;
      padding-left: 20px;
    }
    &.loaded .block-title:after {
      width: 100%;
    }
  }
  #work {
    position: absolute;
    right: 0;
    top:0;
    opacity: .1;
    z-index: -1;
    transform: rotateY(180deg);

    @media (min-width: 768px) {
      max-width: 50vw ;
      max-height: calc(100vh - 75px);
    }
  }
  .block-title {
    display: inline-block;
    padding-bottom: 10px;
    margin-top: 25px;
    margin-bottom: 10px;
    font-size: 1.5rem;
    position: relative;
    &:after {
      -webkit-transition: width 1s;
      transition: width 1s;
      content: '';
      width: 0;
      border-bottom: 5px solid #8DA9C4;
      position: absolute;
      bottom: -5px;
      left: 0;
    }
  }
  .experience, .formation, .language, .skill {
    margin-top: 10px;
  }
  .title {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
  .date {
    line-height: 1.5rem;
    color: #cacaca;
  }
  .description {
    font-size: 0.9rem;
    color: #6b6b6b;
  }
  .subdescription {
    font-size: 0.8rem;
    font-style: italic;
    color: #6b6b6b;
  }
  i {
    font-size: 1rem;
  }
</style>
<template>
  <div id="home">
    <span id="profile-container">
      <Profile
        id="profile"
        :view-box.camel="profileViewBox"
      />
    </span>

    <span id="presentation">
      <p>Pellentesque laoreet venenatis convallis. Duis sit amet odio turpis. In hac habitasse platea dictumst. Phasellus volutpat malesuada laoreet. Proin porta nec leo ac consequat. Mauris bibendum dolor eu rhoncus euismod. Nunc ut dapibus arcu. Nulla a justo gravida, consectetur mi eu, posuere nibh. Integer quis nisl sit amet sapien eleifend blandit nec id risus. Aliquam vitae iaculis neque, ut tincidunt lorem. Praesent in nibh ornare, elementum turpis finibus, finibus metus. In pharetra mauris ac pellentesque elementum. Fusce ullamcorper augue id posuere suscipit. In gravida enim nisl, et vehicula purus gravida blandit. Integer iaculis libero at arcu fringilla vehicula ac vitae purus.</p>

      <p>Quisque sollicitudin volutpat est id dictum. Vestibulum facilisis justo non erat mollis, in tincidunt ante pharetra. Donec elementum sed dui sit amet eleifend. Mauris semper convallis neque, sed accumsan nisl condimentum quis. Ut dapibus, orci eget convallis ullamcorper, felis neque interdum quam, sed ullamcorper arcu.</p>
    </span>
    <div id="programming-container">
      <Programming
        id="programming"
        :view-box.camel="programmingViewBox"
      />
    </div>
  </div>
</template>

<script>
import {Power3, gsap} from "gsap";
import {color1, color2} from "../variables";
import Profile from "../svgs/profile.svg"
import Programming from "../svgs/programming.svg"

export default {
  name: "Home",
  components: {
    Profile,
    Programming
  },
  data() {
    return {
      profileViewBox: "0 0 698 698",
      programmingViewBox: "0 0 1041.32 554.17"
    }
  },
  mounted() {
    let tl = gsap.timeline();
    tl.to("#particles", {duration: 1, height: "100vh"})
      .to("#text", {duration: 1, y: "50vh"}, 0)
      .to("#presentation", {duration: 2, opacity: 1}, 0)
      .to("#profile-container", {duration: 2, opacity: 1}, "-=2")
      .to("#programming", {duration: 2, opacity: 1, x:0, ease: "elastic"}, "-=2")
      .to("#programming", {duration: 20, scale: 1.25, y: 50}, "-=1")
    ;

    let color = color1;
    document.querySelector('#profile').onclick = function() {
      let tl = gsap.timeline();
      color = (color === color1) ? color2 : color1;
      let paths = document.querySelectorAll(".color"), i;
      tl.addLabel("color", 0);
      for (i = 0; i < paths.length; ++i) {
        tl.to(paths[i], {duration: 2, fill: color, ease: Power3.easeOut}, "color");
      }
      tl.to("#particles", {duration: 2, background: color, ease: Power3.easeOut}, "color");

      tl.play("color");
    }
  }
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
    padding: 20px;
    opacity: 0;
  }
  #programming {
    opacity: 0;
    max-height: 50vh;
    transform: translateX(-50vh);
  }
  @media(min-width: 768px) {
    #profile-container {
      margin-top: 5px;
    }
  }
  @media(max-width: 767px) {
    #programming {
      transform: scale(1)!important;
    }
  }
</style>
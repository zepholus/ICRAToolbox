<template lang="pug">
  #app
    router-view
</template>




<style>
  @import "http://fonts.googleapis.com/css?family=Lato:400,700";

  :root {
    --font-family-primary: 'Lato', sans-serif;
    --text-main-color: #2F2F2F;
    --text-nav-color: #5c6a72;
    --dark-gray: #5a6870;
    --orange-icra: #ea9e26;
    --blue-icra: #00b8ef;
    --blue-icra-hovered: #008fba;
    --bold-text: 600;
    --text-weight: 400;

    /*--green-primary: #5d8f49;
    --green-oldDesign: #3fcb9a;
    --green-secondary: #c2dcb8;
    --gray-font-color: #706f6f;
    --questions-font-color: #343a40;
    --dark-red: #c51e23;
    --light-gray-secondary: #f8f9fa;
    --light-gray-primary: #e9ecef;
    --height-child-comp: calc(100vh - 4rem);*/
  }

  #app {
    max-width: 1200px;
    overflow: hidden;
    margin: 15px auto 15px auto;
    font-family: var(--font-family-primary);
    color: var(--text-nav-color);
    font-weight: var(--text-weight);
    font-size: 14px;
  }


  /*div {
    font-family: var(--font-family-primary);
    color: var(--gray-font-color);
    font-weight: var(--text-weight);
  }


  .banner {
    position: relative;
  }
  .bannerTitle {
    color: white;
    position: absolute;
    bottom: 52%;
    top: 48%;
    left: 20%;
  }

  .bannerTitle > p {
    font-size: 2vw;
    font-weight: var(--bold-text);
  }



  .col-form-label {
    color: var(--questions-font-color);
  }


  .buttonRed.btn-secondary {
    color: #fff;
    background-color: var(--dark-red);
    border-color: var(--dark-red);
    font-weight: var(--bold-text);
    font-size: small;
    overflow: hidden;
    min-width: fit-content;
  }

  .buttonRed.btn-secondary:hover {
    color: #fff;
  }

  .buttonGreen.btn-secondary  {
    color: #fff;
    background-color: var(--green-primary);
    border-color: var(--green-primary);
    font-weight: var(--bold-text);
    font-size: small;
    overflow: hidden;
    min-width: fit-content;
  }

  .buttonGreenSmall.btn-secondary {
    width: 50%;
    min-width: fit-content;
    border-radius: 1rem;
    color: #fff;
    background-color: var(--green-primary);
    border-color: var(--green-primary);
    font-weight: bold;
    font-size: x-small;
    overflow: hidden
  }*/


</style>


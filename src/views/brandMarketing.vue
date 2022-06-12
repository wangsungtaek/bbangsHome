<script>


export default {
  components: {
  },
  created() {
    for (let i = 0; i < 4; i++) {
      this.imageList[i] = require(`@/assets/images/brandMarketing/brandMarketing_${i+1}.jpg`);
    }
  },
  data() {
    return {
      imageList: []
    };
  },
  
};
</script>

<template>
  <div id="onlineMarketing">
    <Navbar />
    <div v-scroll-spy>
      <section
        class="hero-8 bg-center position-relative"
        :style="{
          'background-image':
            'url(' + require('@/assets/images/brandMarketing/brandMarketing_0.jpg') + ')',
        }"
        id="brandMarketing"
      >
        <div class="bg-overlay bg-dark"></div>
        <vue-particles
          class="particles-effect"
          color="#dedede"
          :moveSpeed="6"
          :particleSize="4"
        ></vue-particles>
      </section>

      <!-- Content -->
      <div class="container">
        <div class="row justify-content-center" v-for="imgPath in imageList" :key="imgPath" data-aos="zoom-in">
          <div class="col-lg-12">
            <img :src="imgPath" class="img-fluid d-block ms-auto rounded shadow" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>


<style lang="scss" scoped>
#brandMarketing {
  .particles-effect {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
  }
}
</style>
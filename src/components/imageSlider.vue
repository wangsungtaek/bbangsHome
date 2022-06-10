<template>
  <section class="section bg-light" id="imageSlide">
        <div class="row justify-content-center">
          <div class="col-lg-12 text-center">
            <h2 class="fw-bold">Example</h2>
            <p class="text-muted">
              다양한 고객 사례
            </p>
          </div>
        </div>
        <div class="row justify-content-center" data-aos="zoom-in">
          <div class="col-lg-10 text-center">
            <vueper-slides
              class="no-shadow"
              :visible-slides="3"
              :slide-ratio="1 / 4"
              :gap="3"
              slide-multiple
              :dragging-distance="70">
              <vueper-slide v-for="imgPath in imageList" :key="imgPath" :image="imgPath" @click.native="test(imgPath)" />
            </vueper-slides>
          </div>
        </div>
  </section>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'

export default {
  name: 'imageSlider',
  components: { VueperSlides, VueperSlide },
  created() {
    for (let i = 1; i <= 22; i++) {
      this.imageList[i-1] = require(`@/assets/images/example/example_${i}.jpg`);
    }
  },
  data: () => ({
    imageList: []
  }),
  methods: {
    test(ev, i) {
      console.log(ev)
      console.log(i)
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
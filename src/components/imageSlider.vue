<template>
  <section class="section bg-light" id="example">
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
              <vueper-slide v-for="imgPath in imageList" :key="imgPath.path" :image="imgPath.path" @click.native="move(imgPath.link)" />
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
      this.imageList[i-1] = {
        path: require(`@/assets/images/example/example_${i}.jpg`),
        link: this.link[i-1]
      };
    }
  },
  data: () => ({
    imageList: [],
    link: [
      "https://blog.naver.com/ejrnfdl6/222812512676",         /* 광동어린이젤리스틱 */
      "https://blog.naver.com/lael_v_v/222699406411",         /* 빌드림 */
      "https://blog.naver.com/son8199/222829423053",          /* 호식이두마리치킨 */
      "https://blog.naver.com/3jwhjhy/222698990110",          /* 닥터그루트 */
      "https://blog.naver.com/gittygittygitty/222750596580",  /* 아라제이 */
      "https://www.instagram.com/p/CdfW8A_Pes2",              /* 마크제이콥스 */
      "https://www.instagram.com/p/CfjRBd9PT8e/",             /* 장수촌 */
      "https://www.instagram.com/p/CVUPD42ps3B/",             /* 월화고기 */
    ]
  }),
  methods: {
    move(path) {
      if(path) {
        window.open(path);
      }
    }
  }
}
</script>
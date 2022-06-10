<template>
  <div>
    <Navbar />
    <div v-scroll-spy>
      <section
        class="hero-8 bg-center position-relative"
        :style="{
          'background-image':
            'url(' + require('@/assets/images/hero-9-bg.jpg') + ')',
        }"
        id="home"
      >
        <div class="bg-overlay bg-dark"></div>
        <div class="container">
          <div class="row justify-content-center hero-content">
            <div class="col-lg-9">
              <div class="text-center">
                <star-icon
                  class="text-white sw-1_5 icon-lg icon-spin mb-4"
                ></star-icon>
                <h1 class="font-weight-semibold mb-4 text-white hero-8-title">
                  BANG's COMPANY
                </h1>
                <p class="mb-5 text-white-70 w-lg-75 mx-auto">
                  저희 빵스컴퍼니(BANG's Company)는 <strong>네이버 인플루언서가 직접 운영</strong>하여<br>
                  믿음 가는 태도로 필요한 것들을 만들어내는 <strong>온라인 통합 마켓팅 회사</strong>입니다.
                </p>
                
              </div>
            </div>
          </div>
        </div>
        <vue-particles
          class="particles-effect"
          color="#dedede"
          :moveSpeed="6"
          :particleSize="4"
        ></vue-particles>
      </section>

      <Business />
      <Video />
      <Strong />
      <ImageSlider />
      <Collaborate />
      <Contact />
      <Footer />
    </div>
  </div>
</template>

<script>
import { StarIcon } from "vue-feather-icons";

import Business from "@/components/business";
import Video from "@/components/video";
import Strong from "@/components/strong";
import Collaborate from "@/components/collaborate";
import Contact from "@/components/contact";
import ImageSlider from '@/components/imageSlider';


export default {
  components: {
    StarIcon,
    Business,
    Video,
    Strong,
    ImageSlider,
    Collaborate,
    Contact,

  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.particles-effect {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
}
</style>
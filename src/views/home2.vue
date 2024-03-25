<template>
  <div>
    <NavbarV2 />
    <div v-scroll-spy>

      <div class="row" style="padding-top: 76px; background-color: #FBCF43;">
        <div class="col-lg-12">
          <img v-if="width >= 750" src="@/assets/images/bg_2.jpeg" style="width: 100%;"/>
          <img v-else src="@/assets/images/bg_4.jpeg" style="width: 100%;"/>
        </div>
        <div class="col-lg-4" style="position: absolute; right: 5%;" :style="{ top: positionTop + '%' }">
          <video
            v-if="width >= 992"
            controls
            autoplay
            src="@/assets/images/home/kt.mp4"
            style="width: 100%;"
          />
        </div>
      </div>
        <!-- <div class="topImg" v-if="width >= 750" src="@/assets/images/bg_2.jpeg"></div> -->
        <!-- <div
          v-if="width >= 750"
          class="topImg col-lg-12"
          :style="{ 'background-image': 'url(' + backgroundImg + ')' }"
        >
          <div class="row justify-content-center">
            <div class="col-lg-7"></div>
            <div class="col-lg-5">
              <video
                v-if="width >= 992"
                controls
                autoplay
                src="@/assets/images/home/kt.mp4"
              />
            </div>
          </div>
        </div>
          
        <img v-else src="@/assets/images/bg_4.jpeg"> -->
        <!-- <div class="col-lg-4" style="position: absolute; right: 5%;" :style="{ top: positionTop + '%' }">
          <video
            v-if="width >= 992"
            controls
            autoplay
            src="@/assets/images/home/kt.mp4"
            style="width: 100%;"
          />
          autoplay
        </div> -->
      <!-- </div>
      <div v-if="width <= 750">
        <video
          autoplay
          controls
          src="@/assets/images/home/kt.mp4"
          style="width: 100%;"
        />
      </div> -->

      <WinouCard />
      <Strong2 />
      <imageSliderV3 />

      <!-- <div v-if="width >= 650">
        <CollaborateV2 />
      </div> -->
      
      <!-- <Video />
      <Strong /> -->
      <Contact />
      <Footer />
    </div>
  </div>
</template>

<script>

import WinouCard from "@/components/winouCard";
import Strong2 from "@/components/strong2";
import imageSliderV3 from '@/components/imageSliderV3';
// import CollaborateV2 from "@/components/collaborate_v2";
import Contact from "@/components/contact";



export default {
  components: {
    WinouCard,
    Strong2,
    imageSliderV3,
    // CollaborateV2,
    Contact,
  },
  data() {
    return {
      width: '',
      height: '',
      positionTop: '',
      backgroundImg: '',
      point1: { x: 2400, y: 35 },
      point2: { x: 800, y: 17 },
      slope: '',
      intercept: ''
    };
  },
  created() {
    this.backgroundImg = require('@/assets/images/bg_2.jpeg');

    // 기울기
    this.slope = (this.point2.y - this.point1.y) / (this.point2.x - this.point1.x);
    this.intercept = this.point1.y - this.slope * this.point1.x;
  },
  mounted() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.videoResiz();

    // 사이즈 조절시 이벤트 발생.
    window.addEventListener('resize', this.handleResiz);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResiz() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;

      this.videoResiz();

    },
    videoResiz() {
      
      this.positionTop = this.calculateY(this.width);
      console.log(this.positionTop)

      // if(this.width >= 2409) this.positionTop = 42;
      // else if(this.width >= 2200) this.positionTop = 40;
      // else if(this.width >= 1900) this.positionTop = 36;
      // else if(this.width >= 1600) this.positionTop = 34;
      // else if(this.width >= 1300) this.positionTop = 30;
      // else if(this.width >= 1000) this.positionTop = 26;
      // else if(this.width >= 900) this.positionTop = 24;
      // else this.positionTop = 10;
    },

    calculateY(x) {
      return this.slope * x + this.intercept;
    }
  }

};
</script>

<style scoped>
.topImg {
  background-size: cover; /* 배경 이미지를 div에 맞게 늘리거나 축소 */
  background-position: center; /* 배경 이미지의 위치를 가운데로 설정 */
  background-repeat: no-repeat;
}

</style>
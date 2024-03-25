<template>
  <section class="section bg-light" id="homeImg">
    <div class="row justify-content-center pb-5">
      <div class="col-lg-12 text-center">
        <h2 class="fw-bold">BANG'S PROJECT</h2>
        <p class="text-muted">
          다양한 고객 사례
        </p>
      </div>
    </div>
    <div class="row justify-content-center" data-aos="zoom-in">
      <div
        class="col-lg-3 imgCol"
        v-for="(coverImg, idx) in imageList"
        :key="coverImg.path"
        @click="move(idx)"
      >
        <img :src="coverImg.path">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'imageSlider',
  created() {
    for (let i = 1; i <= 20; i++) {
      this.imageList[i-1] = {
        path: require(`@/assets/images/home/img/${i}.jpg`),
      };
    }  
  },
  data: () => ({
    imageList: [],
  }),
  methods: {
    move(idx) {
      let path = '';
      if(idx == 0) {
        path = '/winnowMarketing/detail?num=1'
      } else if(idx == 1) {
        path = '/winnowMarketing/detail?num=2'
      } else if(idx == 2) {
        path = '/winnowMarketing/detail?num=7'
      } else if(idx == 3) {
        path = '/winnowMarketing/detail?num=3'
      } else if(idx == 4) {
        path = '/winnowMarketing/detail?num=4'
      } else if(idx == 5) {
        path = '/winnowMarketing/detail?num=5'
      } else if(idx == 6) {
        path = '/winnowMarketing/detail?num=18'
      } else if(idx == 7) {
        path = '/winnowMarketing/detail?num=22'
      } else if(idx == 8) {
        path = '/winnowPlanning/detail?num=1'
      } else if(idx == 9) {
        path = '/winnowMarketing/detail?num=9'
      } else if(idx == 10) {
        path = '/winnowMarketing/detail?num=10'
      } else if(idx == 11) {
        path = '/winnowMarketing/detail?num=11'
      } else if(idx == 12) {
        path = '/winnowMarketing/detail?num=12'
      } else if(idx == 13) {
        path = '/winnowMarketing/detail?num=13'
      } else if(idx == 14) {
        path = '/winnowPlanning/detail?num=6'
      } else if(idx == 15) {
        path = '/winnowMarketing/detail?num=15'
      } else if(idx == 16) {
        path = '/winnowMarketing/detail?num=16'
      } else if(idx == 17) {
        path = '/winnowMarketing/detail?num=17'
      } else if(idx == 18) {
        path = '/winnowMarketing/detail?num=6'
      } else if(idx == 19) {
        path = '/winnowMarketing/detail?num=19'
      }

      this.$router.push(path);
    }
  }
}
</script>
<style lang="scss" scoped>
#homeImg {
  padding-bottom: 0px;
  img {
    width: 100%;
    
  }
  .imgCol {
    padding: 0px;
  }
  .imgCol:hover {
    cursor: pointer;
  }
}
</style>
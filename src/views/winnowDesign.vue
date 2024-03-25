<template>
  <div id="winnowDesign">
    <NavbarV2 />
    <div v-scroll-spy>
      <img v-if="width >= 750" src="@/assets/images/banner/winnowDesignL.jpeg">
      <img v-else src="@/assets/images/banner/winnowDesignS.jpeg">
      
      <div id="content">
        <div id="categoryGroup" class="row justify-content-center">
          <div
            class="col-sm-1 categoryBtn"
            :class="(currentCategory == 'category01')? 'categoryAct':''"
            @click="getCategoryImg('category01', 10)"
          >
            브랜딩 디자인
          </div>
          <div
            class="col-sm-1 categoryBtn"
            :class="(currentCategory == 'category02')? 'categoryAct':''"
            @click="getCategoryImg('category02', 24)"
          >
            웹디자인
          </div>
          <div
            class="col-sm-1 categoryBtn"
            :class="(currentCategory == 'category03')? 'categoryAct':''"
            @click="getCategoryImg('category03', 8)"
          >
            출력물
          </div>
        </div>

        <div class="row">
          <div 
            class="imgCol"
            v-for="(img, idx) in imgList"
            :key="img.path"
            :class="(img.category == currentCategory)? 'col-lg-3':'' "
          >
            <router-link
              :to="`/winnowDesign/detail?category=${currentCategory}&num=${idx+1}`"
              v-if="img.category == currentCategory"
            >
              <img :src="img.path">
            </router-link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>
<script>
export default {
  components: {
  },
  created() {
    let category = window.localStorage.getItem('category');
    let num = 10;
    if(category == 'category03') { num = 8; }
    else if(category == 'category02') { num = 24; }
    else {
      category = 'category01';
      num = 10;
    }

    this.getCategoryImg(category, num);
  },
  data() {
    return {
      width: '',
      height: '',

      imgList: [],      

      currentCategory: 'category01',
    };
  },
  mounted() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;

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
    },

    getCategoryImg(category, totalNum) {
      this.currentCategory = category;
      window.localStorage.setItem('category', category);

      for(let i = 1; i <= totalNum; i++) {
        this.imgList[i-1] = {
          path: require(`@/assets/images/winnowDesign/${category}/${i}.jpg`),
          category: category
        };
      }
    }
  },
};
</script>

<style lang="scss" scoped>
/* mobile 규격 */
@media screen and (max-width: 600px){
  #winnowDesign {
    #categoryGroup { 
      top: -170px !important;
    }
  }
}

#winnowDesign {
  img {
    width: 100%;
  }
  #content {
    position: relative;
    img {
      width: 100%;
      // height: 500px;
      // filter: brightness(70%)
  }
    #categoryGroup {
      position: absolute;
      top: -100px;
      color: rgba(255, 255, 255, 0.684);
      width: 100%;
      text-align: center;
      font-size: 20px;
      z-index: 1;
      font-weight: 400;

      .categoryAct {
        color: #478df4;
        font-weight: bold;
      }
    }
    .categoryBtn {
      padding: 10px;
    }
    .categoryBtn:hover {
      cursor: pointer;
    }
    .imgCol {
      padding: 0px;
    }
    .imgCol:hover {
      cursor: pointer;
    }
  }
}
</style>
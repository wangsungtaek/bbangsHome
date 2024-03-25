<template>
  <div id="detailDesign">
    <NavbarV2 />
    <div v-scroll-spy>
      <img v-if="width >= 750" src="@/assets/images/banner/winnowMarketingL.jpeg" class="mainImg">
      <img v-else src="@/assets/images/banner/winnowMarketingS.jpeg" class="mainImg">

      <div id="container" class="mb-5">

        <!-- Title -->
        <div id="detailTitle" class="mb-5" data-aos="zoom-out">
          <div class="row justify-content-center my-5">
            <div class="col-lg-8 text-center">
              <h2 class="mainTitle">{{ mainTitle }}</h2>
              <p class="subTitle">{{ subTitle }}</p>
            </div>
          </div>
          <div class="row justify-content-center mt-5">
            <div class="col-lg-3 text-center mb-3">
              <div class="optionTitle mb-3">Campaign Place</div>
              <p class="optionAnswer">{{ place }}</p>
            </div>
            <div class="col-lg-3 text-center mb-3">
              <div class="optionTitle mb-3">Campaign Leader</div>
              <p class="optionAnswer">BANG's Company</p>
            </div>
          </div>
        </div>
        
        <!-- Detail content -->
        
        <div class="row">
          <img class="detailImg" :src="detailImg" />
        </div>

      </div>
      <Footer />
    </div>
  </div>
</template>
<script>
import {designData} from './designData.js';
export default {
  components: {
  },
  created() {
    const num = this.$route.query.num;
    const category = this.$route.query.category;
    const dataObj = designData(category, num);

    this.mainTitle = dataObj.mainTitle;
    this.subTitle = dataObj.subTitle;
    this.place = dataObj.place;
    this.detailImg = dataObj.img;
    

  },
  data() {
    return {
      width: '',
      height: '',
      // title
      mainTitle: '',
      subTitle: '',
      place: '',
      detailImg: ''
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
    }
  }
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1024px){
  #detailDesign {
    #container {
      padding-left: 5% !important;
      padding-right: 5% !important;
    }
  }
}
#detailDesign {
  .mainImg {
    width: 100%;
  }
  #container {
    padding-left: 20%;
    padding-right: 20%;
    .detailImg {
      width: 100%;
    }

    // 제목
    #detailTitle {
      h2::before {
        display: block;
        height: 5px;
        background-color: #000;
        content: " ";
        width: 30px;
        margin: 0 auto;
        margin-bottom: 30px;  
      }
      .mainTitle {
        font-weight: 600;
        font-size: 50px;
      }
      .subTitle {
        font-size: 20px;
        color: #9b9b9b;
      }
  
      .optionTitle {
        font-size: 20px;
        color: #a7a7a7;
      }
  
      .optionTitle::before {
        display: block;
        height: 1px;
        background-color: #a7a7a7;
        content: " ";
        width: 14px;
        margin: 0 auto;
        margin-bottom: 10px;
      }
      .optionAnswer {
        font-size: 17px;
        color: #6f6f6f;
        font-weight: 600;
      }
    }
    .detailImg {
      padding: 0px;
    }
  }
}
</style>
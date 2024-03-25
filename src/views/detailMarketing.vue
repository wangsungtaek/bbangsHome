<template>
  <div id="detailMarketing">
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
        <div id="content" data-aos="zoom-in">
          <div class="row mb-5">
            <div class="col-lg-3">
              <img src="@/assets/images/common/idea.png">
            </div>
            <div class="col-lg-7">
              <h4 class="pt-3" id="idea">{{ ideaTitle }}</h4>
              <p id="ideaDetail">{{ ideaDetail }}</p>
            </div>
          </div>
          <div class="row mb-5">
            <div class="col-lg-3">
              <img src="@/assets/images/common/creative.png">
            </div>
          </div>

          <!-- Image -->
          <div class="row" id="imgContainer">
            <div class="col-lg-3" :key="imgPath" v-for="imgPath in detailImgList" >
              <img class="detailImg" :src="imgPath" data-aos="zoom-in">
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  </div>
</template>
<script>
import {marketingData} from './marketingData.js';
export default {
  components: {
  },
  created() {
    const num = this.$route.query.num;
    const dataObj = marketingData(num);

    this.mainTitle = dataObj.mainTitle;
    this.subTitle = dataObj.subTitle;
    this.place = dataObj.place;
    this.ideaTitle = dataObj.ideaTitle;
    this.ideaDetail = dataObj.ideaDetail;
    this.detailImgList = dataObj.imgs;
  },
  data() {
    return {
      width: '',
      height: '',
      // title
      mainTitle: '광동제약',
      subTitle: 'testImage',
      place: '망고드랍',
      // contetn
      ideaTitle: '',
      ideaDetail: '',
      detailImgList: [],
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
#detailMarketing {
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
  }

  // 콘텐트
  #content {
    margin-top: 150px;
    #idea {
      font-size: 40px;
    }
    #ideaDetail {
      font-size: 24px;
      color: #7d7d7d;
    }
    #imgContainer {
      margin-top: 100px;
      .detailImg {
        border-radius: 5px;
        border: 1px solid gainsboro;
        height: 80%;
      }
    }
  }
}
</style>
<template>
  <div id="detailPlanning">
    <NavbarV2 />
    <div v-scroll-spy>
      <img v-if="width >= 750" src="@/assets/images/banner/winnowPlanningL.jpeg" class="mainImg">
      <img v-else src="@/assets/images/banner/winnowPlanningS.jpeg" class="mainImg">

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
            <div class="col-lg-9">
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
          <div class="row justify-content-center" id="imgContainer">
            <div class="col-lg-6" :key="imgPath" v-for="imgPath in detailImgList" >
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
export default {
  components: {
  },
  created() {
    const num = this.$route.query.num;
    if(num == 1) {
      this.mainTitle = 'Fam Tour';
      this.subTitle = '안양시 팸투어 기획운영';
      this.place = '안양시';
      this.ideaTitle = '관광 상품 홍보';
      this.ideaDetail = '지역 관광 상품 홍보를 위한 행사 기획 및 맟춤 여행 인플루언서 홍보 진행';
      this.detailImgList[0] = require("@/assets/images/winnowPlanning/detail/01-01.jpg");
      this.detailImgList[1] = require("@/assets/images/winnowPlanning/detail/01-02.jpg");
    } else if(num == 2) {
      this.mainTitle = 'Marketing Lecture';
      this.subTitle = '안양시 여성기업 마케팅강의';
      this.place = '안양시';
      this.ideaTitle = '정보 제공';
      this.ideaDetail = '기업들에게 필요한 마케팅 강의를 통하여 정보 및 전문지식 제공';
      this.detailImgList[0] = require("@/assets/images/winnowPlanning/detail/02-01.jpg");
      this.detailImgList[1] = require("@/assets/images/winnowPlanning/detail/02-02.jpg");
    } else if(num == 3) {
      this.mainTitle = 'SNS Lecture';
      this.subTitle = '순천제일대학교 SNS강의';
      this.place = '순천제일대학교';
      this.ideaTitle = '전문지식 제공';
      this.ideaDetail = '학생들에게 필요한 내용을 부분 맞춤 SNS강의를 통하여 정보 제공';
      this.detailImgList[0] = require("@/assets/images/winnowPlanning/detail/03-01.jpg");
    } else if(num == 4) {
      this.mainTitle = 'Event Planning & Operation';
      this.subTitle = '아크로상가 행사 기획운영';
      this.place = '아크로상가';
      this.ideaTitle = '맞춤 행사 기획';
      this.ideaDetail = '상권에 맞는 행사 기획 및 운영을 통한 해당 상권 및 상인회 홍보 및 행사 진행';
      this.detailImgList[0] = require("@/assets/images/winnowPlanning/detail/04-01.jpg");
      this.detailImgList[1] = require("@/assets/images/winnowPlanning/detail/04-02.jpg");
    } else if(num == 5) {
      this.mainTitle = 'Event Planning & Operation';
      this.subTitle = '석수본동 행사 기획운영';
      this.place = '석수본동';
      this.ideaTitle = '맞춤 행사 기획';
      this.ideaDetail = '상권에 맞는 행사 기획 및 운영을 통한 해당 상권 및 상인회 홍보 및 행사 진행';
      this.detailImgList[0] = require("@/assets/images/winnowPlanning/detail/05-01.jpg");
      this.detailImgList[1] = require("@/assets/images/winnowPlanning/detail/05-02.jpg");
    } else if(num == 6) {
      this.mainTitle = 'Stamp Tour';
      this.subTitle = '석수본동 스탬프투어 기획운영';
      this.place = '석수본동';
      this.ideaTitle = '상권 홍보 중점';
      this.ideaDetail = '재방문율을 높이기 위한 스탬프투어 기획 및 운영을 통한 상권 홍보';
      this.detailImgList[0] = require("@/assets/images/winnowPlanning/detail/06-01.jpg");
      this.detailImgList[1] = require("@/assets/images/winnowPlanning/detail/06-02.jpg");
    } else if(num == 7) {
      this.mainTitle = 'Contest Planning & Operation';
      this.subTitle = '아크로상가 콘테스트 기획운영';
      this.place = '아크로상가';
      this.ideaTitle = '다양성 강조';
      this.ideaDetail = '상인회 다양한 홍보를 위한 새로운 콘테스트 기획 및 행사 운영 진행';
      this.detailImgList[0] = require("@/assets/images/winnowPlanning/detail/07-01.jpg");
      this.detailImgList[1] = require("@/assets/images/winnowPlanning/detail/07-02.jpg");
    } else if(num == 8) {
      this.mainTitle = 'Advanced Knowledge';
      this.subTitle = '석수본동 선진지견학 기획운영';
      this.place = '석수본동';
      this.ideaTitle = '관광 상품 홍보';
      this.ideaDetail = '지역 관광 상품 홍보를 위한 행사 기획 및 맟춤 여행 인플루언서 홍보 진행';
      this.detailImgList[0] = require("@/assets/images/winnowPlanning/detail/08-01.jpg");
      this.detailImgList[1] = require("@/assets/images/winnowPlanning/detail/08-02.jpg");
    }
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
#detailPlanning {
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
      margin-top: 50px;
      .detailImg {
        border-radius: 5px;
        border: 1px solid gainsboro;
        height: 100%;
      }
    }
  }
}
</style>
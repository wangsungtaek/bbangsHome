<template>
  <!-- Services start -->
  <section class="section" id="business">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-7 text-center">
          <h2 class="fw-bold">BANG'S SERVICES</h2>
          <p class="text-muted">
            빵스컴퍼니는 브랜드의 마음으로 고민하고<br>
            특화된 역량과 창의력으로 솔류션을 제시 합니다.
          </p>
        </div>
      </div>

      <!-- 위노우 기획 -->
      <div class="row">
        <div class="col-lg-4" data-aos="zoom-in" @click="move('/winnowPlanning')" style="cursor : pointer;">
          <div class="service-box text-center px-4 py-5 position-relative mb-4">
            <div class="service-box-content p-4">
              <img class="w-75 mb-5" src="@/assets/images/home/planning.png"/>
              <h4 class="mb-3 font-size-22">위노우 기획</h4>
              <p class="text-muted mb-0">
                제품 기획 | 광고 기획 | 행사 기획
              </p>
            </div>
          </div>
        </div>
        
        <!-- 위노우 마케팅 -->
        <div class="col-lg-4" data-aos="zoom-in" @click="move('/winnowMarketing')" style="cursor : pointer;">
          <div class="service-box text-center px-4 py-5 position-relative mb-4">
            <div class="service-box-content p-4">
              <img class="w-75 mb-5" src="@/assets/images/home/marketing.png"/>
              <h4 class="mb-3 font-size-22">위노우 마케팅</h4>
              <p class="text-muted mb-0">
                온라인 마케팅 | 오프라인 마케팅
              </p>
            </div>
          </div>
        </div>

        <!-- 위노우 디자인 -->
        <div class="col-lg-4" data-aos="zoom-in" @click="move('/winnowDesign')" style="cursor : pointer;">
          <div class="service-box text-center px-4 py-5 position-relative mb-4">
            <div class="service-box-content p-4">
              <img class="w-75 mb-5" src="@/assets/images/home/design.png"/>
              <h4 class="mb-3 font-size-22">위노우 디자인</h4>
              <p class="text-muted mb-0">
                브랜딩 디자인 | 웹 디자인 | 출력물
              </p>
            </div>
          </div>
        </div>

      </div>
      <!-- end row -->
    </div>
    <!-- end container -->
  </section>
  <!-- Services end -->
</template>

<script>

export default {
  components: { },
  data() {
    return {};
  },
  methods: {
    move(to) {
      this.$router.push(to)
    }
  }
};
</script>
<style lang="scss" scoped>
.service-box-content {
  border: 1px solid rgb(202, 198, 198);
  border-radius: 10px;
}
</style>
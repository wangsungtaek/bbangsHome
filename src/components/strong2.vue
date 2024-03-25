<script>

export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div>
    <section class="section">
      <div
        class="bg-overlay-img"
        :style="{
          'background-image':
            'url(' + require('@/assets/images/home/strongBanner.jpg') + ')',
        }"
      ></div>      
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="text-center" data-aos="zoom-in">
              <h1 class="text-white mb-4">빵스컴퍼니</h1>
              <p class="text-white mb-2 font-size-16">
                브랜딩부터 퍼포먼스까지 빵스컴퍼니의 풍부한 경험을 바탕으로<br>
                광고주 맞춤형 서비스를 제공합니다.<br>
              </p>
              <b-button variant="outline-light mt-4" to="/about">자세히보기</b-button>
            </div>
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </section>
    <!-- Cta end -->
  </div>
</template>
<style lang="scss" scoped>
.bg-overlay-img {
  background-size: cover;
  background-position-y: -150px;
}
</style>
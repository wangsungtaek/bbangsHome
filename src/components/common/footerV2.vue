<template>
  <!-- Footer Start -->
  <footer
    class="footer"
    :style="{
      'background-image':
        'url(' + require('@/assets/images/common/footer.jpg') + ')',
    }"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="mb-4">
            <router-link to="/"
              ><img
                src="@/assets/images/logo/logo8.png"
                alt=""
                class=""
                height="100"
            /></router-link>
            <p class="text-white-50 my-4">
              저희 빵스컴퍼니(BANG's Company)는 네이버 인플루언서가<br>
              직접 운영하여 믿음 가는 태도로 필요한 것들을 만들어내는<br>
              통합 마케팅 회사입니다.
            </p>
          </div>
        </div>
        <!-- end col -->

        <div class="col-lg-6 ms-lg-auto">
          <div class="row">

            <div class="col-lg-3" @click="move('/winnowPlanning')">
              <div class="mt-4 mt-lg-0">
                <h4 class="text-white font-size-18 mb-3">위노우 기획</h4>
              </div>
            </div>

            <div class="col-lg-3" @click="move('/winnowMarketing')">
              <div class="mt-4 mt-lg-0">
                <h4 class="text-white font-size-18 mb-3">위노우 마케팅</h4>
              </div>
            </div>

            <div class="col-lg-3" @click="move('/winnowDesign')">
              <div class="mt-4 mt-lg-0">
                <h4 class="text-white font-size-18 mb-3">위노우 디자인</h4>
              </div>
            </div>

          </div>
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->

      <div class="row">
        <div class="col-lg-12">
          <div class="text-center mt-5">
            <p class="text-white-50 f-15 mb-0">
              {{ new Date().getFullYear() }}
              © Bbangs Company.
            </p>
          </div>
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
    </div>
    <!-- end container -->
  </footer>
  <!-- Footer End -->
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    move(to) {
      this.$router.push(to);
      // window.location.href = to
    }
  }
};
</script>
<style lang="scss" scoped>
.footer {
  background-size: cover;
  background-position-y: -240px;
}

.text-white-50 {
  color: white !important;
}
</style>
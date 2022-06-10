<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <!-- Footer Start -->
  <footer
    class="footer"
    :style="{
      'background-image':
        'url(' + require('@/assets/images/footer-bg.png') + ')',
    }"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="mb-4">
            <router-link to="/"
              ><img
                src="@/assets/images/logo.png"
                alt=""
                class=""
                height="30"
            /></router-link>
            <p class="text-white-50 my-4">
              저희 빵스컴퍼니(BANG's Company)는 네이버 인플루언서가<br>
              직접 운영하여 믿음 가는 태도로 필요한 것들을 만들어내는<br>
              온라인 통합 마케팅 회사입니다.
            </p>
          </div>
        </div>
        <!-- end col -->

        <div class="col-lg-6 ms-lg-auto">
          <div class="row">
            <div class="col-lg-4">
              <div class="mt-4 mt-lg-0">
                <h4 class="text-white font-size-18 mb-3">온라인 마케팅</h4>
                <ul class="list-unstyled footer-sub-menu">
                  <!-- <li>
                    <a href="javascript: void(0);" class="footer-link">Works</a>
                  </li>
                  <li>
                    <a href="javascript: void(0);" class="footer-link"
                      >Strategy</a
                    >
                  </li>
                  <li>
                    <a href="javascript: void(0);" class="footer-link"
                      >Releases</a
                    >
                  </li>
                  <li>
                    <a href="javascript: void(0);" class="footer-link">Press</a>
                  </li>
                  <li>
                    <a href="javascript: void(0);" class="footer-link"
                      >Mission</a
                    >
                  </li> -->
                </ul>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="mt-4 mt-lg-0">
                <h4 class="text-white font-size-18 mb-3">오프라인 마케팅</h4>
                <ul class="list-unstyled footer-sub-menu">
                  <!-- <li>
                    <a href="javascript: void(0);" class="footer-link"
                      >Trending</a
                    >
                  </li>
                  <li>
                    <a href="javascript: void(0);" class="footer-link"
                      >Popular</a
                    >
                  </li>
                  <li>
                    <a href="javascript: void(0);" class="footer-link"
                      >Customers</a
                    >
                  </li>
                  <li>
                    <a href="javascript: void(0);" class="footer-link"
                      >Features</a
                    >
                  </li> -->
                </ul>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="mt-4 mt-lg-0">
                <h4 class="text-white font-size-18 mb-3">사례</h4>
                <ul class="list-unstyled footer-sub-menu">
                  <!-- <li>
                    <a href="javascript: void(0);" class="footer-link"
                      >Developers</a
                    >
                  </li>
                  <li>
                    <a href="javascript: void(0);" class="footer-link"
                      >Support</a
                    >
                  </li>
                  <li>
                    <a href="javascript: void(0);" class="footer-link"
                      >Customer Service</a
                    >
                  </li>
                  <li>
                    <a href="javascript: void(0);" class="footer-link"
                      >Get Started</a
                    >
                  </li>
                  <li>
                    <a href="javascript: void(0);" class="footer-link">Guide</a>
                  </li> -->
                </ul>
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
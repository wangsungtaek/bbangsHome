<script>

export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div>
    <!-- Features start -->
    <section class="section bg-light" id="strongPoint">
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-lg-7 text-center">
            <h2 class="fw-bold">Strong Point</h2>
            <p class="text-muted">
              국내 유일, 네이버 인플루언서 직접 운영 실행사
            </p>
          </div>
        </div>

        <!-- 1 Row -->
        <div class="row align-items-center justify-content-center mb-5">
          
          <!-- #1 -->
          <b-card class="col-lg-5 text-center" title="온라인 플랫폼 운영 노하우" data-aos="flip-left" data-aos-duration="1000">
            <b-card-text>
              <div class="mt-4 mb-2">
                <b-icon icon="check-circle" font-scale="1" variant="success" class="mb-1" />
                10,000건 이상의 리뷰를 통한 온라인 플랫폼 운영 노하우 보유
              </div>
            </b-card-text>
          </b-card>

          <div class="col-lg-1" />

          <!-- #2 -->
          <b-card class="col-lg-5 text-center" title="인플루언서 다수 보유" data-aos="flip-right" data-aos-duration="1500">
            <b-card-text>
              <div class="mt-4 mb-2">
                <b-icon icon="check-circle" font-scale="1" variant="success" class="mb-1" />
                플랫폼 내의 인증한 인플루언서 다수 보유
              </div>
            </b-card-text>
          </b-card>

        </div>

        <!-- 2 Row -->
        <div class="row align-items-center justify-content-center mb-5">
          
          <!-- #3 -->
          <b-card class="col-lg-5 text-center" title="아이디어 제공" data-aos="flip-left" data-aos-duration="2000">
            <b-card-text>
              <div class="mt-4 mb-2">
                <b-icon icon="check-circle" font-scale="1" variant="success" class="mb-1" />
                다년간의 SNS 직접 운영을 통한 경험에서 나오는 차별화된 아이디어
              </div>
            </b-card-text>
          </b-card>

          <div class="col-lg-1" />

          <!-- #4 -->
          <b-card class="col-lg-5 text-center" title="특성에 맞는 홍보 방법" data-aos="flip-right" data-aos-duration="2500">
            <b-card-text>
              <div class="mt-4 mb-2">
                <b-icon icon="check-circle" font-scale="1" variant="success" class="mb-1" />
                특성에 맞는 홍보 방법 컨설팅 및 운영
              </div>
            </b-card-text>
          </b-card>
          
        </div>
        

      </div>
      <!-- end container -->
    </section>
    <!-- Features end -->

    <section class="section bg-gradient-primary">
      <div
        class="bg-overlay-img"
        :style="{
          'background-image':
            'url(' + require('@/assets/images/demos.png') + ')',
        }"
      ></div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="text-center" data-aos="zoom-in">
              <h1 class="text-white mb-4">아직도 단순 홍보로만 생각하시나요 ?</h1>
              <p class="text-white mb-2 font-size-16">
                내 브랜드, 내 가게 단순 홍보를 뛰어넘어 컨텐츠가 필요한 지금,<br>
                컨텐츠와 트렌드를 잘 아는 빵스컴퍼니와 만나<br>
                다양한 컨텐츠를 잠재고객을 충성고객으로 만들어보세요.
              </p>
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
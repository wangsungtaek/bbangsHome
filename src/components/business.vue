<script>
import { BoxIcon, LayersIcon, ServerIcon } from "vue-feather-icons";

export default {
  components: { BoxIcon, LayersIcon, ServerIcon },
  data() {
    return {};
  },
};
</script>

<template>
  <!-- Services start -->
  <section class="section" id="business">
    <div class="container">
      <div class="row justify-content-center mb-5">
        <div class="col-lg-7 text-center">
          <h2 class="fw-bold">Business</h2>
          <p class="text-muted">
            저희 빵스컴퍼니는 아래와 같은 비지니스
          </p>
        </div>
      </div>

      <!-- 브랜딩 -->
      <div class="row">
        <div class="col-lg-4" data-aos="zoom-in">
          <div class="service-box text-center px-4 py-5 position-relative mb-4 active">
            <div class="service-box-content p-4">
              <div class="icon-mono service-icon avatar-md mx-auto mb-4">
                <box-icon class=""></box-icon>
              </div>
              <h4 class="mb-3 font-size-22">Branding</h4>
              <p class="text-muted mb-0">
                브랜드 기획 | 제품 기획 | 촬영
              </p>
            </div>
          </div>
        </div>
        
        <!-- 인플루언서 -->
        <div class="col-lg-4" data-aos="zoom-in">
          <div class="service-box text-center px-4 py-5 position-relative mb-4">
            <div class="service-box-content p-4">
              <div class="icon-mono service-icon avatar-md mx-auto mb-4">
                <layers-icon class=""></layers-icon>
              </div>
              <h4 class="mb-3 font-size-22">Influencer</h4>
              <p class="text-muted mb-0">
                체험단 | 기자단 | 상위 노출
              </p>
            </div>
          </div>
        </div>

        <!-- 플랫폼 -->
        <div class="col-lg-4" data-aos="zoom-in">
          <div class="service-box text-center px-4 py-5 position-relative mb-4 active">
            <div class="service-box-content p-4">
              <div class="icon-mono service-icon avatar-md mx-auto mb-4">
                <server-icon class=""></server-icon>
              </div>
              <h4 class="mb-3 font-size-22">Platform</h4>
              <p class="text-muted mb-0">
                웹사이트 | 상세페이지 | 스토어팜 | 플레이스 | 예약
              </p>
            </div>
          </div>
        </div>

        <!-- 인터랙티브 -->
        <div class="col-lg-4" data-aos="zoom-in">
          <div class="service-box text-center px-4 py-5 position-relative mb-4">
            <div class="service-box-content p-4">
              <div class="icon-mono service-icon avatar-md mx-auto mb-4">
                <server-icon class=""></server-icon>
              </div>
              <h4 class="mb-3 font-size-22">Interactive</h4>
              <p class="text-muted mb-0">
                옥외광고 | 마케팅 강의
              </p>
            </div>
          </div>
        </div>

        <!-- 온라인 마켓팅 -->
        <div class="col-lg-4" data-aos="zoom-in">
          <div class="service-box text-center px-4 py-5 position-relative mb-4 active">
            <div class="service-box-content p-4">
              <div class="icon-mono service-icon avatar-md mx-auto mb-4">
                <server-icon class=""></server-icon>
              </div>
              <h4 class="mb-3 font-size-22">Online Marketing</h4>
              <p class="text-muted mb-0">
                공식 채널 운영 | 온라인뉴스 | 스폰서 광고 | 지식인
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
<script>
import ComCollabo from '@/components/common/ComCollabo.vue'

export default {
  data() {
    return {};
  },
  components: {
    ComCollabo
  }
};
</script>

<template>
  <div>
    <!-- Features start -->
    <section class="section" id="partners">
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-lg-7 text-center">
            <h2 class="fw-bold">Our Partners</h2>
            <p class="text-muted">
              빵스컴퍼니와 함께하는 파트너사
            </p>
          </div>
        </div>

        <ComCollabo 
          imgNm_1='collaborate_01.png'
          imgNm_2='collaborate_02.png'
          imgNm_3='collaborate_03.png'
          imgNm_4='collaborate_04.png'
        />

        <ComCollabo 
          imgNm_1='collaborate_05.png'
          imgNm_2='collaborate_06.png'
          imgNm_3='collaborate_07.png'
          imgNm_4='collaborate_08.png'
        />

        <ComCollabo 
          imgNm_1='collaborate_09.png'
          imgNm_2='collaborate_10.png'
          imgNm_3='collaborate_11.png'
          imgNm_4='collaborate_12.png'
        />

        <ComCollabo 
          imgNm_1='collaborate_13.png'
          imgNm_2='collaborate_14.png'
          imgNm_3='collaborate_15.png'
          imgNm_4='collaborate_16.png'
        />

        <ComCollabo 
          imgNm_1='collaborate_17.png'
          imgNm_2='collaborate_18.png'
          imgNm_3='collaborate_19.png'
          imgNm_4='collaborate_20.png'
        />

        <ComCollabo 
          imgNm_1='collaborate_21.png'
          imgNm_2='collaborate_22.png'
          imgNm_3='collaborate_23.png'
          imgNm_4='collaborate_24.png'
        />

        <ComCollabo 
          imgNm_1='collaborate_25.png'
          imgNm_2='falco.png'
          imgNm_3='동아.png'
          imgNm_4='abc.png'
        />
        

      </div>
      <!-- end container -->
    </section>
    <!-- Features end -->

  </div>
</template>
<style scoped>
.collaborate {
  height: 200px;
}

.collaborate .boxBorder {
  border: 1px solid lightgrey;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.collaborate img {
  width: 80%;
}
</style>
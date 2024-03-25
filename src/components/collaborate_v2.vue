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
        <div id="imgBox">
          <img src="@/assets/images/collaborate/230823/1.png" class="collImg" />
          <img src="@/assets/images/collaborate/230823/2.png" class="collImg" />
          <img src="@/assets/images/collaborate/230823/3.png" class="collImg" />
          <img src="@/assets/images/collaborate/230823/4.png" class="collImg" />
          <img src="@/assets/images/collaborate/230823/5.png" class="collImg" />
          <img src="@/assets/images/collaborate/230823/6.png" class="collImg" />
          <img src="@/assets/images/collaborate/230823/7.png" class="collImg" />
          <img src="@/assets/images/collaborate/230823/8.png" class="collImg" />
          <img src="@/assets/images/collaborate/230823/9.png" class="collImg" />
          <img src="@/assets/images/collaborate/230823/10.png" class="collImg" />
          <img src="@/assets/images/collaborate/230823/11.png" class="collImg" />
          <img src="@/assets/images/collaborate/230823/12.png" class="collImg" />
          <img src="@/assets/images/collaborate/230823/13.png" class="collImg" />
          <img src="@/assets/images/collaborate/230823/14.png" class="collImg" />
          <img src="@/assets/images/collaborate/230823/15.png" class="collImg" />
          <img src="@/assets/images/collaborate/230823/16.png" class="collImg" />
          <img src="@/assets/images/collaborate/230823/17.png" class="collImg" />
          <img src="@/assets/images/collaborate/230823/18.png" class="collImg" />
          <img src="@/assets/images/collaborate/230823/19.png" class="collImg" />
          <img src="@/assets/images/collaborate/230823/20.png" class="collImg" />
          <img src="@/assets/images/collaborate/230823/21.png" class="collImg" />
          <img src="@/assets/images/collaborate/230823/22.png" class="collImg" />
          <img src="@/assets/images/collaborate/230823/23.png" class="collImg" />
          <img src="@/assets/images/collaborate/230823/24.png" class="collImg" />
          <img src="@/assets/images/collaborate/230823/25.png" class="collImg" />
        </div>

      </div>
      <!-- end container -->
    </section>
    <!-- Features end -->

  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {
  }
};
</script>
<style lang="scss" scoped>
#partners {
  background: #eeeeee;
  .collaborate img {
    width: 80%;
    max-height: 80%;
  }

  #imgBox {
    text-align: center;

    .collImg {
      width: 150px;
      height: 150px;
      background: white;
      box-shadow: 8px 8px 8px #ccc;
      border-radius: 20px;
      margin: 20px;
    }
  }
}
</style>
<template>
  <div class="row align-items-center justify-content-center m-0">
    <div class="col-lg-3 text-center collaborate p-1" data-aos="zoom-in">
      <div class="boxBorder">
        <img :src=image_1 v-if="imgNm_1"/>
      </div>
    </div>
    <div class="col-lg-3 text-center collaborate p-1" data-aos="zoom-in">
      <div class="boxBorder">
        <img :src=image_2 v-if="imgNm_2" />
      </div>
    </div>
    <div class="col-lg-3 text-center collaborate p-1" data-aos="zoom-in">
      <div class="boxBorder">
        <img :src=image_3 v-if="imgNm_3" />
      </div>
    </div>
    <div class="col-lg-3 text-center collaborate p-1" data-aos="zoom-in">
      <div class="boxBorder">
        <img :src=image_4 v-if="imgNm_4" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgNm_1: {
      type: String,
      default: ''
    },
    imgNm_2: {
      type: String,
      default: ''
    },
    imgNm_3: {
      type: String,
      default: ''
    },
    imgNm_4: {
      type: String,
      default: ''
    },
  },
  computed: {
    image_1() {
      return require(`@/assets/images/collaborate/${this.imgNm_1}`);
    },
    image_2() {
      return require(`@/assets/images/collaborate/${this.imgNm_2}`);
    },
    image_3() {
      return require(`@/assets/images/collaborate/${this.imgNm_3}`);
    },
    image_4() {
      return require(`@/assets/images/collaborate/${this.imgNm_4}`);
    }
  }
}
</script>

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
  max-height: 80%;
}
</style>
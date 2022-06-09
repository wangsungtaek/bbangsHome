<script>
import { PlayIcon } from "vue-feather-icons";

export default {
  data() {
    return {};
  },
  components: {
    PlayIcon
  }
};
</script>

<template>
<div v-scroll-spy>
  <section
    class="hero-5 position-relative bg-light"
    :style="{
      'background-image':
        'url(' + require('@/assets/images/hero-5-bg.png') + ')',
    }"
    id="interview"
  >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <div class="text-center">
                <h2 class="fw-bold">Interview</h2>
                <p class="text-muted">
                  장수촌, 열정쟁이 인터뷰를 확인해보세요.
                </p>
              </div>
              <div class="row justify-content-center mt-5">
                <div class="col-lg-5">
                  <div class="position-relative overflow-hidden rounded-lg shadow-lg">
                    <img src="@/assets/videos/video_cover_1.png" class="img-fluid d-block mx-auto" />
                    <div class="bg-overlay bg-dark"></div>
                    <div class="hero-5-img-content">
                      <div
                        class="d-inline-block"
                        v-b-modal.video_1
                        header-class="video_1"
                      >
                        <a href="javascript: void(0);" class="play-icon-circle video-play-icon">
                          <play-icon class="icon ps-1"></play-icon>
                        </a>
                      </div>
                    </div>
                  </div>

                  <!-- Modal -->
                  <b-modal
                    id="video_1"
                    hide-footer
                    size="lg"
                    centered
                    header-class="video_1"
                  >
                    <video
                    controls
                      autoplay
                      width="750"
                      height="450"
                    >
                      <source src="@/assets/videos/video_1.mp4" type="video/mp4">
                    </video>
                  </b-modal>
                </div>
                
                <div class="col-lg-1"></div>

                <div class="col-lg-5">
                  <div class="position-relative overflow-hidden rounded-lg shadow-lg">
                    <img src="@/assets/videos/video_cover_2.png" class="img-fluid d-block mx-auto" />
                    <div class="bg-overlay bg-dark"></div>
                    <div class="hero-5-img-content">
                      <div
                        class="d-inline-block"
                        v-b-modal.video_2
                        header-class="video_2"
                      >
                        <a href="javascript: void(0);" class="play-icon-circle video-play-icon">
                          <play-icon class="icon ps-1"></play-icon>
                        </a>
                      </div>
                    </div>
                  </div>

                  <!-- Modal -->
                  <b-modal
                    id="video_2"
                    hide-footer
                    size="lg"
                    centered
                    header-class="video_2"
                  >
                    <video
                      controls
                      autoplay
                      width="750"
                      height="450"
                    >
                      <source src="@/assets/videos/video_2.mp4" type="video/mp4">
                    </video>
                  </b-modal>
                  <!-- end modal -->
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
</div>
</template>
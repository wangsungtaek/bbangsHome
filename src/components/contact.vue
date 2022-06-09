<script>
import {
  MailIcon,
  PhoneIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  MapPinIcon
} from "vue-feather-icons";

export default {
  components: { MailIcon, PhoneIcon, FacebookIcon, TwitterIcon, InstagramIcon,MapPinIcon },
  data() {
    return {};
  },
};
</script>

<template>
  <!-- Contact us start -->
  <section class="section" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h2 class="fw-bold mb-4">Contact us</h2>

          <div>
            <form method="post" name="myForm" onsubmit="return validateForm()">
              <p id="error-msg"></p>
              <div id="simple-msg"></div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="mb-4">
                    <label for="name" class="text-muted form-label">이름</label>
                    <input
                      name="name"
                      id="name"
                      type="text"
                      class="form-control"
                      placeholder="이름을 입력해주세요."
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mb-4">
                    <label for="email" class="text-muted form-label"
                      >이메일</label
                    >
                    <input
                      name="email"
                      id="email"
                      type="email"
                      class="form-control"
                      placeholder="이메일을 입력해주세요."
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="mb-4">
                    <label for="subject" class="text-muted form-label"
                      >제목</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="subject"
                      name="subject"
                      placeholder="제목을 입력해주세요."
                    />
                  </div>

                  <div class="mb-4 pb-2">
                    <label for="comments" class="text-muted form-label"
                      >문의내용</label
                    >
                    <b-form-textarea
                      rows="8"
                      placeholder="문의내용을 입력해주세요."
                    ></b-form-textarea>
                  </div>

                  <button
                    type="button"
                    id="submit"
                    name="send"
                    class="btn btn-primary"
                  >
                    문의하기
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <!-- end col -->

        <div class="col-lg-5 ms-lg-auto">
          <div class="mt-5 mt-lg-0">
            <img
              src="@/assets/images/contact.png"
              alt=""
              class="img-fluid d-block"
            />
            <p class="text-muted mt-5 mb-3">
              <mail-icon class="me-2 text-muted icon icon-xs"></mail-icon>
              bbangs_blog@naver.com
            </p>
            <p class="text-muted mb-3">
              <phone-icon class="me-2 text-muted icon icon-xs"></phone-icon>
              +91 123 4556 789
            </p>
            <p class="text-muted mb-3">
              <map-pin-icon
                class="me-2 text-muted icon icon-xs"
              ></map-pin-icon>
              경기도 광명시 일직로 72 광명국제무역센터 c동 812호
            </p>
            <ul class="list-inline pt-4">
              <li class="list-inline-item me-3">
                <a
                  href="javascript: void(0);"
                  class="social-icon icon-mono avatar-xs rounded-circle"
                  ><facebook-icon class="icon-xs"></facebook-icon
                ></a>
              </li>
              <li class="list-inline-item me-3">
                <a
                  href="javascript: void(0);"
                  class="social-icon icon-mono avatar-xs rounded-circle"
                  ><twitter-icon class="icon-xs"></twitter-icon
                ></a>
              </li>
              <li class="list-inline-item">
                <a
                  href="javascript: void(0);"
                  class="social-icon icon-mono avatar-xs rounded-circle"
                  ><instagram-icon class="icon-xs"></instagram-icon
                ></a>
              </li>
            </ul>
          </div>
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
    </div>
    <!-- end container -->
  </section>
  <!-- Contact us end -->
</template>
<template>
  <!-- Contact us start -->
  <section class="section" id="contact"  data-aos="zoom-in">
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
              src="@/assets/images/home/contact.png"
              alt=""
              class="img-fluid d-block"
            />
            <p class="text-muted mt-5 mb-3">
              <mail-icon class="me-2 text-muted icon icon-xs"></mail-icon>
              카카오톡 플러스 친구 "빵스컴퍼니" 검색
            </p>
            <p class="text-muted mb-3">
              <phone-icon class="me-2 text-muted icon icon-xs"></phone-icon>
              070 - 7724 - 2657
            </p>
            <p class="text-muted mb-3">
              <map-pin-icon
                class="me-2 text-muted icon icon-xs"
              ></map-pin-icon>
              경기도 안양시 안양로111
            </p>
            <ul class="list-inline pt-4">
              <li class="list-inline-item me-3">
                <a
                  href="https://blog.naver.com/PostList.naver?blogId=bbangs_blog"
                  ><img src="@/assets/images/blog.png" style="width: 50px; "/>
                </a>
              </li>
              <li class="list-inline-item me-3">
                <a
                  href="http://pf.kakao.com/_JdNbxb"
                  ><img src="@/assets/images/kakao.png" style="width: 45px; border-radius: 20px;"/>
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  href="https://instagram.com/bbangs_company"
                  ><img src="@/assets/images/insta.png" style="width: 43px;"/>
                </a>
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
<script>
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
} from "vue-feather-icons";

export default {
  components: { MailIcon, PhoneIcon, MapPinIcon },
  data() {
    return {};
  },
};
</script>
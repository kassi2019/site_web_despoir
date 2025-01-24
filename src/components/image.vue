<template>
  <!-- Navbar & Carousel Start -->
  <div>
    <div
      id="header-carousel"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="w-100" src="img/imgfond1.jpg" alt="Image" />
          <div
            class="carousel-caption d-flex flex-column align-items-center justify-content-center"
          >
            <div class="p-3" style="max-width: 1000px">
              <!-- <h5 class="text-white text-uppercase mb-3 animated slideInDown">
                Votre restaurateur
              </h5> -->
              <h3
                class="display-1 text-white mb-md-4 animated zoomIn"
                style="text-align: center"
              >
                <p>Votre restaurateur responsable,</p>
                <p>service du sain et du bon</p>
              </h3>
              <a
                href="quote.html"
                class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                style="
                  background-color: #114090 !important;
                  font-size: 25px !important;
                "
                >Découvrez nos solutions sur mesure</a
              >
              <a
                href=""
                class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                >Contact Us</a
              >
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img class="w-100" src="img/carousel-2.jpg" alt="Image" />
          <div
            class="carousel-caption d-flex flex-column align-items-center justify-content-center"
          >
            <div class="p-3" style="max-width: 900px">
              <h5 class="text-white text-uppercase mb-3 animated slideInDown">
                Creative & Innovative
              </h5>
              <h1 class="display-1 text-white mb-md-4 animated zoomIn">
                Creative & Innovative Digital Solution
              </h1>
              <a
                href="quote.html"
                class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                >Free Quote</a
              >
              <a
                href=""
                class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                >Contact Us</a
              >
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#header-carousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#header-carousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <!-- Full Screen Search Start -->
    <div class="modal fade" id="searchModal" tabindex="-1">
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content" style="background: rgba(9, 30, 62, 0.7)">
          <div class="modal-header border-0">
            <button
              type="button"
              class="btn bg-white btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div
            class="modal-body d-flex align-items-center justify-content-center"
          >
            <div class="input-group" style="max-width: 600px">
              <input
                type="text"
                class="form-control bg-transparent border-primary p-3"
                placeholder="Type search keyword"
              />
              <button class="btn btn-primary px-4">
                <i class="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Full Screen Search End -->
  </div>
  <!-- Navbar & Carousel End -->
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

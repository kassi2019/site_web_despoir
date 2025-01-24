<template>
    <div
        id="header-carousel"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="w-100" src="img/carousel-1.jpg" alt="Image" />
            <div
              class="carousel-caption d-flex flex-column align-items-center justify-content-center"
            >
              <div class="p-3" style="max-width: 900px">
                <h1
                  class="text-white text-uppercase mb-3 animated slideInDown effet"
                >
                  Bienvenue chez Despoir
                </h1>
                <h4
                  class="display-1 text-white mb-md-4 animated zoomIn"
                  style="font-size: 45px"
                >
                  L'excellence de la restauration collective en Côte d'Ivoire
                </h4>
                <a
                  style="
                    background-color: #b9121b;
                    border: 1px solid #b9121b;
                    text-transform: uppercase;
                  "
                  href="quote.html"
                  class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >Decouvrez nos solution sur mesure
                  <i class="bi bi-arrow-right"></i
                ></a>
                <!-- <a
                  href=""
                  class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                  >Contact Us</a
                > -->
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img class="w-100" src="img/carousel-2.jpg" alt="Image" />
            <div
              class="carousel-caption d-flex flex-column align-items-center justify-content-center"
            >
              <div class="p-3" style="max-width: 900px">
                <!-- <h5 class="text-white text-uppercase mb-3 animated slideInDown">
                  Creative & Innovative
                </h5> -->
                <h1 class="display-1 text-white mb-md-4 animated zoomIn  effet3">
                  la restauration collective autrement en Côte d’Ivoire
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
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.effet {
  font-size: 60px;
  font-weight: 600;
  color: #2c3e50;

  letter-spacing: 2px;
  text-align: center;
  margin-top: 50px;
  transition: transform 0.3s ease, color 0.3s ease;
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
}
.effet3 {
  font-size: 60px;
  font-weight: 600;
  color: #2c3e50;
  letter-spacing: 2px;
  text-align: center;
  margin-top: 50px;
  transition: transform 0.3s ease, color 0.3s ease;
  text-shadow: 14px 14px 14px rgba(0, 0, 0, 0.3);
}
</style>

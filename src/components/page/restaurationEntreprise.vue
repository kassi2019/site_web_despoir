<template>
  <div>
    <div
      id="header-carousel"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="w-100"
            src="img/e1.jpg"
            alt="Image"
            style="height: 550px !important"
          />
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
                style="font-size: 30px"
              >
                RESTAURATION D'ENTREPRISE
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
      </div>
    </div>

    <!-- Blog Start -->
    <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container py-5">
        <div
          class="position-relative pb-3 mb-5 mx-auto"
          style="text-align: center"
        >
          <h1 class="mb-0 effet">Restauration d’entreprise</h1>
        </div>
        <!-- About Start -->
        <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div class="container py-5">
            <div class="row g-5">
              <div class="col-lg-7">
                <div class="section-title position-relative pb-3 mb-5">
                  <!-- <h5 class="fw-bold text-primary text-uppercase">About Us</h5> -->
                  <h1 class="mb-0">
                    The Best IT Solution With 10 Years of Experience
                  </h1>
                </div>
                <p>
                  Nous comprenons l'importance de fournir des repas de qualité à
                  vos employés.
                </p>
                <p>
                  DesPoir propose des menus variés et équilibrés, conçus pour
                  améliorer le bien-être et la productivité des équipes. Nos
                  prestations incluent
                </p>
                <div class="row g-0 mb-3">
                  <div class="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                    <h5 class="mb-6">
                      <i class="fa fa-check text-primary me-3"></i>Descantines
                      d'entreprise entièrement gérées par nos soins.
                    </h5>
                    <h5 class="mb-6">
                      <i class="fa fa-check text-primary me-3"></i>Desrepas
                      livrés directement sur site.
                    </h5>
                  </div>
                </div>
                <div
                  class="d-flex align-items-center mb-4 wow fadeIn"
                  data-wow-delay="0.6s"
                ></div>
              </div>
              <div class="col-lg-5" style="min-height: 500px">
                <div class="position-relative h-100">
                  <img
                    class="position-absolute w-100 h-100 rounded wow zoomIn"
                    data-wow-delay="0.9s"
                    src="img/about.jpg"
                    style="object-fit: cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- About End -->
      </div>
    </div>

    <!-- About Start -->
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  transition: all 0.3s ease;
  cursor: pointer;
  filter: saturate(150%);
  display: block; /* Nécessaire pour appliquer margin:auto */
  margin-left: auto;
  margin-right: auto;
  width: 500%;
  height: 350%;
}

img:hover {
  transform: rotate(15deg);
  filter: grayscale(50%) brightness(1.2);
  cursor: pointer;
}

.effet {
  font-size: 3rem;
  font-weight: 600;
  color: #2c3e50;

  letter-spacing: 2px;
  text-align: center;
  margin-top: 50px;
  transition: transform 0.3s ease, color 0.3s ease;
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
}

.effet:hover {
  color: #e74c3c;
  transform: scale(1.1);
  cursor: pointer;
}

.ombre {
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(0, 0, 0, 0.1);
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

<template>
  <div>
    <div
      id="header-carousel"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="w-100 imgcarousel" src="img/carousel-1.jpg" alt="Image" />
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
          <img class="w-100 imgcarousel" src="img/carousel-2.jpg" alt="Image" />
          <div
            class="carousel-caption d-flex flex-column align-items-center justify-content-center"
          >
            <div class="p-3" style="max-width: 900px">
              <!-- <h5 class="text-white text-uppercase mb-3 animated slideInDown">
                  Creative & Innovative
                </h5> -->
              <h1 class="display-1 text-white mb-md-4 animated zoomIn effet3">
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
    <!-- Blog Start -->
    <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container py-5">
        <div
          class="position-relative pb-3 mb-5 mx-auto"
          style="text-align: center"
        >
          <h1 class="mb-0 effet">
            Des solutions de restauration uniques et adaptées à chaque marché
          </h1>
        </div>
        <div class="row g-5">
          <div class="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
            <div class="blog-item bg-light rounded overflow-hidden ombre">
              <div class="blog-img position-relative overflow-hidden">
                <img class="img-fluid" src="img/blog-1.jpg" alt="" />
                <a
                  class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                  href=""
                  style="background-color: #b9121b !important"
                  >Web Design</a
                >
              </div>
              <div class="p-4">
                <!-- <div class="d-flex mb-3">
                                <small class="me-3"><i class="far fa-user text-primary me-2"></i>John Doe</small>
                                <small><i class="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                            </div> -->
                <h4 class="mb-3" style="color: #b9121b">
                  Entreprises et administrations
                </h4>
                <p>
                  Dans un monde en constante évolution, Despoir vous accompagne
                  pour proposer à vos collaborateurs des solutions de
                  restauration en phase avec leurs attentes et en cohérence avec
                  la politique sociale de votre entreprise.
                </p>
                <a class="text-uppercase" href="" style="color: #b9121b"
                  >En savoir plus <i class="bi bi-arrow-right"></i
                ></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
            <div class="blog-item bg-light rounded overflow-hidden ombre">
              <div class="blog-img position-relative overflow-hidden">
                <img class="img-fluid" src="img/blog-2.jpg" alt="" />
                <a
                  class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                  href=""
                  style="background-color: #b9121b !important"
                  >Web Design</a
                >
              </div>
              <div class="p-4">
                <h4 class="mb-3" style="color: #b9121b">
                  Etablissements de santé
                </h4>
                <p>
                  En établissement de santé, nous faisons la part belle au
                  partage et à l’autonomie. Selon le type de séjour, la
                  pathologie ou le handicap, nous réinventons la pause repas
                  pour qu’elle soit toujours un moment privilégié pour manger
                  bien et aller mieux.
                </p>
                <a class="text-uppercase" href="" style="color: #b9121b"
                  >En savoir plus <i class="bi bi-arrow-right"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
            <div class="blog-item bg-light rounded overflow-hidden ombre">
              <div class="blog-img position-relative overflow-hidden">
                <img class="img-fluid" src="img/blog-3.jpg" alt="" />
                <a
                  class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                  style="background-color: #b9121b !important"
                  href=""
                  >Web Design</a
                >
              </div>
              <div class="p-4">
                <h4 class="mb-3" style="color: #b9121b">
                  Collectivités et enseignement privé
                </h4>
                <p>
                  Fini l’ennui et la monotonie à l’école, nos chefs réveillent
                  la cuisine ! De mon 1er resto à Weeky, le concept pionnier
                  pour attirer les lycéens les plus exigeants, ce sont les
                  jeunes qui inspirent vos restaurants.
                </p>
                <a class="text-uppercase" href="" style="color: #b9121b"
                  >En savoir plus <i class="bi bi-arrow-right"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- About Start -->
    <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container py-5">
        <div class="row g-5">
          <div class="col-lg-7">
            <div class="section-title position-relative pb-3 mb-5">
              <h1 class="mb-0 effet">Nous rejoindre</h1>
            </div>
            <div class="mb-4">
              Vous êtes passionné par la gastronomie et le service client ? Chez
              DesPoir, nous croyons au potentiel de nos collaborateurs. Nous
              offrons :<br /><br />

              <p>● Desformations continues pour développer vos compétences.</p>
              <p>
                ● Desopportunités de carrière variées dans un environnement
                dynamique.
              </p>
              <p>● Uncadredetravail inclusif et motivant.</p>
              <p>
                Consultez nos offres d’emploi directement sur notre site ou
                contactez notre service RH.
              </p>
            </div>

            <a
              href="quote.html"
              class="btn btn-primary py-3 px-5 mt-3 wow zoomIn"
              style="background-color: #b9121b"
              data-wow-delay="0.9s"
              >NOUS REJOINDRE<i class="bi bi-arrow-right"></i
            ></a>
          </div>
          <div class="col-lg-5" style="min-height: 500px">
            <div class="position-relative h-100">
              <img
                class="position-absolute w-100 h-100 rounded wow zoomIn"
                data-wow-delay="0.9s"
                src="img/restauration.jpg"
                style="object-fit: cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- About End -->
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
.imgcarousel{
   width: 100% !important; /* L'image prend toute la largeur de son parent */
    height: auto !important; /* La hauteur s'ajuste automatiquement en fonction de la largeur */
}
</style>

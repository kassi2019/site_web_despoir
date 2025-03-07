<template>
  <div>
    <div class="image-text-container ombre41" style="">
      <img src="img/47.jpg" alt="Image" />
      <div class="text-content">
        <h1 class="mb-3" style="color: #fff !important; text-align: center">
          Collectivités
        </h1>
        <p style="color: #fff !important; font-size: 20px !important">
          Les collectivités locales L’atout Despoir : un partenariat de
          confiance Performance,attractivité,
        </p>
        <p style="color: #fff !important; font-size: 20px !important">
          amélioration des services aux usagers et respect des réglementations
          en vigueur…
        </p>
        <p style="color: #fff !important; font-size: 20px !important">
          Pour accompagner les collectivités locales, nous misons sur une
          approche de proximité et proposons des solutions sur mesure, adaptées
          à leurs exigences de qualité et de conformité.
        </p>
      </div>
    </div>

    <!-- Blog Start -->
    <br />
    <div class="container-fluid wow fadeInUp" data-wow-delay="0.1s">
      <div class="container">
        <div
          class="position-relative pb-3 mb-5 mx-auto"
          style="text-align: center"
        >
          <h3 class="mb-0 effet" style="font-size: 30px !important">
            Des chiffres qui reflètent notre engagement :
          </h3>
        </div>

        <div class="row g-5">
          <div class="col-lg-5" style="min-height: 500px">
            <div class="position-relative h-100 ombre7">
              <img
                class="position-absolute w-100 h-100 rounded wow zoomIn"
                data-wow-delay="0.9s"
                src="img/Photo1.jpg"
                style="object-fit: cover"
              />
            </div>
          </div>
          <div class="col-lg-7">
            <div class="mb-4">
              <p class="page">
                <span
                  style="
                    font-weight: 900 !important;
                    font-size: 25px !important;
                  "
                  >Un service de restauration durable pour les
                  collectivités</span
                >
              </p>

              <p
                style="
                  text-align: justify !important;
                  font-size: 20px !important;
                "
              >
                De la crèche au portage de repas à domicile pour les personnes
                âgées, en passant par le primaire ou le collège, nos services de
                restauration collective s'adaptent aux besoins spécifiques des
                collectivités. Chaque jour, nos équipes proposent des menus
                variés, sains, équilibrés et gourmands qui respectent les
                saisons et privilégient les produits de qualité issus de
                filières locales. Cette offre intègre des enjeux d’éducation
                alimentaire et s’inscrit dans une démarche de durabilité et de
                respect de l’environnement.
              </p>
            </div>
          </div>
        </div>
        <br />

        <div class="row g-5">
          <div class="col-lg-7">
            <div class="mb-4">
              <p class="page">
                <span
                  style="
                    font-weight: 900 !important;
                    font-size: 25px !important;
                  "
                  >Un approvisionnement responsable pour le développement
                  territorial</span
                >
              </p>

              <p
                style="
                  text-align: justify !important;
                  font-size: 20px !important;
                "
              >
                Pour nous, l'approvisionnement alimentaire responsable est une
                priorité. Nous privilégions des partenariats durables avec des
                producteurs locaux. Cette démarche nous permet de soutenir des
                filières agricoles de qualité, tout en promouvant une politique
                d’achats inclusive qui bénéficie à l'ensemble de l’économie
                locale.
              </p>
            </div>
          </div>

          <div class="col-lg-5" style="min-height: 500px">
            <div class="position-relative h-100 ombre7">
              <img
                class="position-absolute w-100 h-100 rounded wow zoomIn"
                data-wow-delay="0.9s"
                src="img/Photo3.jpg"
                style="object-fit: cover"
              />
            </div>
          </div>
        </div>

        <br /><br />
        <div class="image-text-container ombre41" style="">
          <img src="img/Photo-4.jpg" alt="Image" />
          <div class="text-content">
            <h1 class="mb-3" style="color: #fff !important; text-align: center">
              L’insertion par l’emploi
            </h1>
            <p style="color: #fff !important; font-size: 20px !important">
              Pour renforcer le dynamisme économique et la cohésion sociale des
              territoires, nous recrutons des talents issus des bassins
              d’activité locaux et nous
            </p>
            <p style="color: #fff !important; font-size: 20px !important">
              agissons en faveur de l’insertion professionnelle des jeunes ou de
              personnes éloignées de l’emploi.
            </p>
          </div>
        </div>
        <br /><br />
        <div class="row g-5">
          <div class="col-lg-7">
            <div class="mb-4">
              <p class="page">
                <span
                  style="
                    font-weight: 900 !important;
                    font-size: 25px !important;
                  "
                  >Un engagement en faveur de la transition alimentaire</span
                >
              </p>

              <p
                style="
                  text-align: justify !important;
                  font-size: 20px !important;
                "
              >
                En tant qu’acteur responsable engagé au sein des territoires,
                nous plaçons la transition alimentaire au cœur de notre
                démarche.
              </p>
              <p style="
                  text-align: justify !important;
                  font-size: 20px !important;
                ">Sélection de produits locaux et de qualité, réduction du
                  gaspillage alimentaire, végétalisation des menus…, : nos
                  actions sont variées pour promouvoir une alimentation plus
                  saine et durable pour tous.</p>
            </div>
          </div>
          <div class="col-lg-5" style="min-height: 500px">
            <div class="position-relative h-100 ombre7">
              <img
                class="position-absolute w-100 h-100 rounded wow zoomIn"
                data-wow-delay="0.9s"
                src="img/engagement.jpeg"
                style="object-fit: cover"
              />
            </div>
          </div>
        </div>
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
.tailleImg {
  width: 90% !important; /* Largeur de 50% */
  height: 70% !important;
}
img:hover {
  transform: rotateY(45deg);
  filter: brightness(50%);
  cursor: pointer;
}
.effet9 {
  font-size: 3rem;
  font-weight: 600;
  color: #2c3e50;

  letter-spacing: 2px;
  text-align: center;
  margin-top: 50px;
  transition: transform 0.3s ease, color 0.3s ease;
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
}
.effet {
  font-size: 20px !important;
  font-weight: 600;
  color: #2c3e50;

  letter-spacing: 10px;
  text-align: center;
  margin-top: 5px;
  transition: transform 0.3s ease, color 0.3s ease;
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
}

.effet:hover {
  color: #e74c3c;
  transform: scale(1.1);
  cursor: pointer;
}

.ombre7 {
  transition: transform 0.5s ease;
}
.ombre7 img:hover {
  transform: scale(1.1);
}

.ombre8 img:hover {
  transform: translateX(20px); /* Déplace l'élément de 20px vers la droite */
  transform: translateY(-10px); /* Déplace l'élément de 10px vers le haut */
  transform: translate(
    20px,
    -10px
  ); /* Déplace l'élément de 20px vers la droite et 10px vers le haut */
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

.page {
  display: block;
  margin: 0;
  padding: 0;
}

.page span {
  display: block; /* Pour que chaque phrase soit sur une ligne distincte */
  position: relative; /* Nécessaire pour positionner les puces */
  padding-left: 20px; /* Décalage pour laisser de la place pour la puce */
  margin-bottom: 10px; /* Espacement entre les phrases */
}

.page span::before {
  content: "•"; /* Utilisation de la puce (symbole Unicode) */
  font-size: 20px; /* Taille de la puce */
  color: #000; /* Couleur de la puce */
  position: absolute;
  left: 0; /* Positionnement à gauche de chaque ligne */
  top: 0;
  font-weight: 900 !important;
}

.image-text-container {
  display: flex;
  align-items: center; /* Aligne verticalement */
  gap: 20px; /* Espacement entre l'image et le texte */
  background-color: #283897;
}

.image-text-container img {
  width: 50%; /* Taille de l'image */
  height: auto;
  border-radius: 10px; /* Coins arrondis */
}

.text-content {
  max-width: 50%; /* Empêche le texte de s'étaler trop large */
  font-size: 18px;
  line-height: 1.5;
}

.ombre41 {
  transition: transform 0.5s ease;
}
.ombre41 img:hover {
  transform: scale(1.1);
}
</style>

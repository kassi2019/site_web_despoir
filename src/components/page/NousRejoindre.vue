<template>
  <div>
    <div class="container">
      <div class="box1">
        <h1 class="mb-3" style="text-align: justify; color: #fff !important">
          Chez Despoir à chacun sa chance !
        </h1>
        <p style="font-size: 20px !important">
          Despoir recrute près de chez vous. Nous favorisons la proximité et
          nous œuvrons pour l’accès des jeunes générations à nos métiers
          (apprentissage, graduate program…). Nous encourageons le retour à
          l’emploi des personnes éloignées du monde du travail et des personnes
          en situation de handicap. La diversité de nos métiers et notre
          politique RH permet à chacun d’avoir sa chance.
        </p>
        <p style="font-size: 20px !important">En quête de challenge ?</p>
        <p style="font-size: 20px !important">
          Nous vous accompagnons dans votre évolution !
        </p>
        <p style="font-size: 20px !important">
          Chez Despoir, nous nous engageons à vous accueillir, vous former et
          vous faire évoluer. Notre objectif : assurer votre épanouissement tout
          au long de votre carrière. L’Académie de Formation Despoir, organisme
          de formation interne, dispense tout un panel de formations métiers
          mais aussi des formations pour le développement personnel et des
          formations en matière de communication et de management. Des parcours
          de formation diplômants sont également proposés à de nombreux niveaux
          de fonctions, pour accompagner l’évolution professionnelle de nos
          collaborateurs.
        </p>
      </div>

      <div class="box">
        <p>
          <a
            data-wow-delay="0.9s"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            >Nous rejoindre<i class="bi bi-arrow-right"></i
          ></a>
        </p>
        <p>
          <a
            data-wow-delay="0.9s"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop2"
            >Mobilité interne<i class="bi bi-arrow-right"></i
          ></a>
        </p>
      </div>
    </div>

    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">Nous rejoindre</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Understood</button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="staticBackdrop2"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">Mobilité interne</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Understood</button>
          </div>
        </div>
      </div>
    </div>
    <!-- About Start -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "app",

  props: {
    source: String,
  },

  data() {
    return {
      user: {
        email: "",
        password: "",
      },

      mydata: false,
    };
  },

  created() {},
  computed: {
    ...mapGetters("Utilisateurs", []),
  },

  methods: {
    ...mapActions("Utilisateurs", ["login", "getUtilisateur"]),

    async affichePage(route_name) {
      this.$router.push({
        name: route_name,
      });
    },
  },
  watch: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex; /* Disposition des divs côte à côte */
  gap: 20px; /* Espacement entre les divs */
}

.box1 {
  width: 70%; /* Chaque div prend 45% de la largeur du conteneur */
  padding: 20px;
  border: 7px solid #ccc; /* Bordure autour de chaque div */
  border-radius: 8px; /* Coins arrondis pour une apparence plus douce */
  box-shadow: 50px 50px 50px rgba(0, 0, 0, 0.2); /* Ombre pour chaque div */
  color: #fff !important;
  background-color: rgb(40, 56, 151);
}
.box {
  width: 30%; /* Chaque div prend 45% de la largeur du conteneur */
  padding: 80px;
  border: 7px solid #ccc; /* Bordure autour de chaque div */
  border-radius: 8px; /* Coins arrondis pour une apparence plus douce */
  box-shadow: 45px 10px 45px rgba(0, 0, 0, 0.2); /* Ombre pour chaque div */
  font-size: 20px !important;
  color: #b9121b !important;
  cursor: pointer;
}
h2 {
  margin-top: 0;
}

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

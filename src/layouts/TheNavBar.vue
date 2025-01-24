<template>
  <nav class="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
    <a href="index.html" class="navbar-brand p-0">
      <h4 class="m-0" style="color: #b9121b">
        <i class="fa fa-user-tie me-2"></i>Despoir
      </h4>
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span class="fa fa-bars"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <div class="navbar-nav ms-auto py-0">
        <a
          href="index.html"
          class="nav-item nav-link active"
          @click.prevent="routeAccueil()"
          >Accueil</a
        >
        <div class="nav-item dropdown">
          <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
            >Nos Services</a
          >
          <div class="dropdown-menu m-0">
            <a
              href="feature.html"
              class="dropdown-item"
              @click.prevent="restaurationEntreprise()"
              >Restauration d’entreprise
            </a>
            <a href="team.html" class="dropdown-item">Restauration scolaire</a>
            <a href="testimonial.html" class="dropdown-item"
              >Service traiteur pour événements</a
            >
            <a href="testimonial.html" class="dropdown-item"
              >Partenariats institutionnels</a
            >
          </div>
        </div>
        <div class="nav-item dropdown">
          <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
            >Pourquoi DesPoir ?</a
          >
          <div class="dropdown-menu m-0">
            <a href="price.html" class="dropdown-item"
              >Une expertise locale, un impact national</a
            >
            <a href="feature.html" class="dropdown-item"
              >Des menus adaptés à vos besoins</a
            >
            <a href="team.html" class="dropdown-item"
              >Une technologie de pointe</a
            >
            <a href="testimonial.html" class="dropdown-item"
              >Une démarche écoresponsable</a
            >
          </div>
        </div>
        <a href="contact.html" class="nav-item nav-link">Nos engagements</a>
        <a href="contact.html" class="nav-item nav-link">Qui sommes-nous ?</a>
        <a href="contact.html" class="nav-item nav-link">Contact</a>
      </div>
      <!-- <butaton
            type="button"
            class="btn text-primary ms-3"
            data-bs-toggle="modal"
            data-bs-target="#searchModal"
            ><i class="fa fa-search"></i
          ></butaton> -->
    </div>
  </nav>
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
    routeAccueil() {
      this.$router.push({
        name: "Accueil",
      });
    },
    restaurationEntreprise() {
      this.$router.push({
        name: "restaurationEntreprise",
      });
    },

    ContratPrestationServiceSIGDOS() {
      this.$router.push({
        name: "restaurateurAvantTout",
      });
    },
    activedOptionMenu(route_name) {
      this.$router.push({
        name: route_name,
      });
    },
  },
  watch: {},
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

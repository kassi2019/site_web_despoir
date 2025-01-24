<template>
  <!-- Navbar & Carousel Start -->
  <div class="container-fluid position-relative p-0">
    <nav class="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
      <a href="index.html" class="navbar-brand p-0">
        <img class="img-fluid" src="img/logo1.png" alt="" style="width: 50%" />
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
          <!-- <a href="index.html" class="nav-item nav-link active">Home</a>
          <a href="about.html" class="nav-item nav-link">About</a>
          <a href="service.html" class="nav-item nav-link">Services</a>
          <div class="nav-item dropdown">
            <a
              href="#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              >Blog</a
            >
            <div class="dropdown-menu m-0">
              <a href="blog.html" class="dropdown-item">Blog Grid</a>
              <a href="detail.html" class="dropdown-item">Blog Detail</a>
            </div>
          </div> -->
          <div class="nav-item dropdown">
            <a
              href="#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              >Nous connaître</a
            >
            <div class="dropdown-menu m-0">
              <a
                href="price.html"
                class="dropdown-item"
                @click.prevent="activedOptionMenu('restaurateurAvantTout')"
                >Nos fondamentaux</a
              >
              <a href="feature.html" class="dropdown-item">Nos 6 engagements</a>
              <a href="team.html" class="dropdown-item">Notre histoire</a>
              <a href="testimonial.html" class="dropdown-item">Gouvernance</a>
              <!-- <a href="quote.html" class="dropdown-item">Free Quote</a> -->
            </div>
          </div>
          <div class="nav-item dropdown">
            <a
              href="#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              >Nos offres</a
            >
            <div class="dropdown-menu m-0">
              <a href="price.html" class="dropdown-item">Pricing Plan</a>
              <a href="feature.html" class="dropdown-item">Our features</a>
              <a href="team.html" class="dropdown-item">Team Members</a>
              <a href="testimonial.html" class="dropdown-item">Testimonial</a>
              <a href="quote.html" class="dropdown-item">Free Quote</a>
            </div>
          </div>
          <div class="nav-item dropdown">
            <a
              href="#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              >Nous rejoindre</a
            >
            <div class="dropdown-menu m-0">
              <a href="price.html" class="dropdown-item">Pricing Plan</a>
              <a href="feature.html" class="dropdown-item">Our features</a>
              <a href="team.html" class="dropdown-item">Team Members</a>
              <a href="testimonial.html" class="dropdown-item">Testimonial</a>
              <a href="quote.html" class="dropdown-item">Free Quote</a>
            </div>
          </div>
          <a href="contact.html" class="nav-item nav-link">Nos actualités</a>
        </div>
        <butaton
          type="button"
          class="btn text-primary ms-3"
          data-bs-toggle="modal"
          data-bs-target="#searchModal"
          ><i class="fa fa-search"></i
        ></butaton>
        <a
          href="https://htmlcodex.com/startup-company-website-template"
          class="btn btn-primary py-2 px-4 ms-3"
          style="background-color: #114090 !important"
          >Contacter nous</a
        >
      </div>
    </nav>
  </div>
  <!-- Navbar & Carousel End -->
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
    activedOptionMenu(route_name) {
      this.$router.push({
        name: route_name,
      });
    },
  },
  watch: {},
};
</script>
<style scoped></style>

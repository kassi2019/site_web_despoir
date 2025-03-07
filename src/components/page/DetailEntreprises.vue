<template>
  <div>
    <div class="image-text-container ombre41" style="">
      <img src="img/Hero1.jpg" alt="Image" />
      <div class="text-content">
        <h1 class="mb-3" style="color: #fff !important; text-align: center">
          Entreprises et administrations
        </h1>
        <p style="color: #fff !important; font-size: 20px !important">
          Dans un monde en perpétuelle évolution, Despoir vous aide à offrir à
          vos collaborateurs des solutions de restauration
        </p>
        <p style="color: #fff !important; font-size: 20px !important">
          adaptées à leurs attentes, tout en alignant votre offre avec la
          politique sociale de votre entreprise.
        </p>
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

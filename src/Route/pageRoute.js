import restaurationEntreprise from "../components/page/restaurationEntreprise.vue"
import restaurationScolaire from "../components/page/restaurationScolaire.vue"
import adapteBesoin from "../components/page/adapteBesoin.vue"
import demarcheEcoresponsable from "../components/page/demarcheEcoresponsable.vue"
import Detailcollectivites from "../components/page/Detailcollectivites.vue"
import DetailEnseignement from "../components/page/DetailEnseignement.vue"
import DetailEntreprises from "../components/page/DetailEntreprises.vue"
import NousRejoindre from "../components/page/NousRejoindre.vue"
const nouvelleRoute = [
   {
    path: "/NousRejoindre",
    name: "NousRejoindre",
    component: NousRejoindre
    },
   {
    path: "/DetailEntreprises",
    name: "DetailEntreprises",
    component: DetailEntreprises
    },
  {
    path: "/DetailEnseignement",
    name: "DetailEnseignement",
    component: DetailEnseignement
    },
  {
    path: "/Detailcollectivites",
    name: "Detailcollectivites",
    component: Detailcollectivites
    },
  {
    path: "/demarcheEcoresponsable",
    name: "demarcheEcoresponsable",
    component: demarcheEcoresponsable
    },
   {
    path: "/adapteBesoin",
    name: "adapteBesoin",
    component: adapteBesoin
    },
    {
    path: "/restaurationEntreprise",
    name: "restaurationEntreprise",
    component: restaurationEntreprise
    },

  {
    path: "/restaurationScolaire",
    name: "restaurationScolaire",
    component: restaurationScolaire
    },
];

export default nouvelleRoute;

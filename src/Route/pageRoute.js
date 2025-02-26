import restaurationEntreprise from "../components/page/restaurationEntreprise.vue"
import restaurationScolaire from "../components/page/restaurationScolaire.vue"
import adapteBesoin from "../components/page/adapteBesoin.vue"
import demarcheEcoresponsable from "../components/page/demarcheEcoresponsable.vue"
const nouvelleRoute = [
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

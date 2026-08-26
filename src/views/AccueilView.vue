<script setup>
import { computed, ref } from "vue";
import { obtenirTaches } from "../services/tachesService";

const taches = ref(obtenirTaches());

const totalTaches = computed(() => taches.value.length);

const tachesAFaire = computed(() =>
  taches.value.filter((tache) => tache.statut === "À faire").length
);

const tachesEnCours = computed(() =>
  taches.value.filter((tache) => tache.statut === "En cours").length
);

const tachesTerminees = computed(() =>
  taches.value.filter((tache) => tache.statut === "Terminée").length
);
</script>

<template>
  <section class="page accueil">
    <p class="etiquette">Gestion de tâches</p>

    <h1>Tableau de bord</h1>

    <p>
      Bienvenue dans votre application de gestion de tâches.
    </p>

    <div class="statistiques">
      <div class="carte-statistique">
        <h2>{{ totalTaches }}</h2>
        <p>Total des tâches</p>
      </div>

      <div class="carte-statistique">
        <h2>{{ tachesAFaire }}</h2>
        <p>À faire</p>
      </div>

      <div class="carte-statistique">
        <h2>{{ tachesEnCours }}</h2>
        <p>En cours</p>
      </div>

      <div class="carte-statistique">
        <h2>{{ tachesTerminees }}</h2>
        <p>Terminées</p>
      </div>
    </div>

    <RouterLink :to="{ name: 'nouvelle-tache' }">
      Ajouter une nouvelle tâche
    </RouterLink>
  </section>
</template>
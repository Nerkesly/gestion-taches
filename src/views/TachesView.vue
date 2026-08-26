<script setup>
import { computed, ref } from "vue";
import {
  obtenirTaches,
  terminerTache,
  supprimerTache,
} from "../services/tachesService";
import TacheCard from "../components/TacheCard.vue";

const taches = ref([...obtenirTaches()]);
const recherche = ref("");
const filtreStatut = ref("Tous");

function actualiserTaches() {
  taches.value = [...obtenirTaches()];
}

function marquerTerminee(id) {
  terminerTache(id);
  actualiserTaches();
}

function supprimer(id) {
  supprimerTache(id);
  actualiserTaches();
}

const tachesFiltrees = computed(() => {
  const texte = recherche.value.toLowerCase().trim();

  return taches.value.filter((tache) => {
    const correspondRecherche =
      !texte ||
      tache.titre.toLowerCase().includes(texte) ||
      tache.description.toLowerCase().includes(texte);

    const correspondStatut =
      filtreStatut.value === "Tous" ||
      tache.statut === filtreStatut.value;

    return correspondRecherche && correspondStatut;
  });
});
</script>

<template>
  <section class="page">
    <p class="etiquette">Mes tâches</p>

    <h1>Liste des tâches</h1>

    <p>Consultez et gérez toutes vos tâches ici.</p>

    <div class="recherche">
      <label for="recherche">Rechercher une tâche</label>

      <input
        id="recherche"
        v-model="recherche"
        type="search"
        placeholder="Ex. frontend, README..."
      />
    </div>

    <div class="filtre">
      <label for="statut">Filtrer par statut</label>

      <select id="statut" v-model="filtreStatut">
        <option>Tous</option>
        <option>À faire</option>
        <option>En cours</option>
        <option>Terminée</option>
      </select>
    </div>

    <p>{{ tachesFiltrees.length }} tâche(s) affichée(s)</p>

    <div v-if="tachesFiltrees.length === 0">
      <p>Aucune tâche trouvée.</p>
    </div>

    <div v-else class="liste-taches">
      <TacheCard
        v-for="tache in tachesFiltrees"
        :key="tache.id"
        :tache="tache"
        @terminer="marquerTerminee"
        @supprimer="supprimer"
      />
    </div>
  </section>
</template>
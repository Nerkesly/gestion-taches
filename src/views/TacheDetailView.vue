<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { obtenirTaches } from "../services/tachesService";

const route = useRoute();

const tache = computed(() => {
  const id = Number(route.params.id);
  return obtenirTaches().find((tache) => tache.id === id);
});
</script>

<template>
  <main>
    <div v-if="tache">
      <h1>{{ tache.titre }}</h1>

      <p>{{ tache.description }}</p>

      <p>
        <strong>Priorité :</strong>
        {{ tache.priorite }}
      </p>

      <p>
        <strong>Statut :</strong>
        {{ tache.statut }}
      </p>

      <p>
        <strong>Date d'échéance :</strong>
        {{ tache.dateEcheance }}
      </p>

      <RouterLink to="/taches">
        ← Retour aux tâches
      </RouterLink>
    </div>

    <div v-else>
      <h1>Tâche introuvable</h1>

      <RouterLink to="/taches">
        ← Retour aux tâches
      </RouterLink>
    </div>
  </main>
</template>
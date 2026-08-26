<script setup>
defineProps({
  tache: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["terminer", "supprimer"]);
</script>

<template>
  <article class="carte-tache">
    <h2>{{ tache.titre }}</h2>

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

    <button
      v-if="tache.statut !== 'Terminée'"
      type="button"
      @click="emit('terminer', tache.id)"
    >
      Marquer comme terminée
    </button>

    <button
      type="button"
      @click="emit('supprimer', tache.id)"
    >
      Supprimer
    </button>
  </article>
</template>
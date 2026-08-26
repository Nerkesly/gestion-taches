<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { ajouterTache } from "../services/tachesService";

const router = useRouter();

const erreur = ref("");

const formulaire = reactive({
  titre: "",
  description: "",
  priorite: "Moyenne",
  statut: "À faire",
  dateEcheance: "",
});

function soumettreFormulaire() {
  erreur.value = "";

  if (formulaire.titre.trim().length < 3) {
    erreur.value = "Le titre doit contenir au moins 3 caractères.";
    return;
  }

  if (formulaire.description.trim().length < 5) {
    erreur.value = "La description doit contenir au moins 5 caractères.";
    return;
  }

  if (!formulaire.dateEcheance) {
    erreur.value = "Veuillez choisir une date d'échéance.";
    return;
  }

  ajouterTache({
    titre: formulaire.titre,
    description: formulaire.description,
    priorite: formulaire.priorite,
    statut: formulaire.statut,
    dateEcheance: formulaire.dateEcheance,
  });

  router.push({ name: "taches" });
}
</script>

<template>
  <section class="page">
    <p class="etiquette">Nouvelle tâche</p>

    <h1>Ajouter une tâche</h1>

    <p v-if="erreur" class="message-erreur">
      {{ erreur }}
    </p>

    <form @submit.prevent="soumettreFormulaire">
      <div>
        <label for="titre">Titre</label>

        <input
          id="titre"
          v-model="formulaire.titre"
          type="text"
        />
      </div>

      <div>
        <label for="description">Description</label>

        <textarea
          id="description"
          v-model="formulaire.description"
        ></textarea>
      </div>

      <div>
        <label for="priorite">Priorité</label>

        <select
          id="priorite"
          v-model="formulaire.priorite"
        >
          <option>Basse</option>
          <option>Moyenne</option>
          <option>Haute</option>
        </select>
      </div>

      <div>
        <label for="statut">Statut</label>

        <select
          id="statut"
          v-model="formulaire.statut"
        >
          <option>À faire</option>
          <option>En cours</option>
          <option>Terminée</option>
        </select>
      </div>

      <div>
        <label for="dateEcheance">
          Date d'échéance
        </label>

        <input
          id="dateEcheance"
          v-model="formulaire.dateEcheance"
          type="date"
        />
      </div>

      <button type="submit">
        Ajouter la tâche
      </button>
    </form>
  </section>
</template>
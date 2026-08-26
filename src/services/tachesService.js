let taches = [
  {
    id: 1,
    titre: "Terminer le frontend",
    description: "Continuer le développement du projet Vue.",
    priorite: "Haute",
    statut: "En cours",
    dateEcheance: "2026-09-01",
  },
  {
    id: 2,
    titre: "Réviser le projet",
    description: "Vérifier que toutes les fonctionnalités demandées fonctionnent.",
    priorite: "Moyenne",
    statut: "À faire",
    dateEcheance: "2026-09-03",
  },
  {
    id: 3,
    titre: "Préparer la remise",
    description: "Vérifier le README et préparer la version finale.",
    priorite: "Haute",
    statut: "À faire",
    dateEcheance: "2026-09-05",
  },
];

export function obtenirTaches() {
  return taches;
}

export function ajouterTache(nouvelleTache) {
  const tache = {
    id: Date.now(),
    ...nouvelleTache,
  };

  taches.push(tache);

  return tache;
}

export function terminerTache(id) {
  const tache = taches.find((tache) => tache.id === id);

  if (tache) {
    tache.statut = "Terminée";
  }
}

export function supprimerTache(id) {
  taches = taches.filter((tache) => tache.id !== id);
}
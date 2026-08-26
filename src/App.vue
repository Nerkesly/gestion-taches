<template>
  <div class="application">
    <header class="barre-navigation">
      <RouterLink class="logo" :to="{ name: 'accueil' }">
        Gestion Tâches
      </RouterLink>

      <nav>
        <RouterLink :to="{ name: 'accueil' }">
          Accueil
        </RouterLink>

        <RouterLink :to="{ name: 'taches' }">
          Mes tâches
        </RouterLink>

        <RouterLink :to="{ name: 'nouvelle-tache' }">
          Nouvelle tâche
        </RouterLink>
      </nav>
    </header>

    <main class="conteneur-principal">
      <RouterView />
    </main>
  </div>
</template>
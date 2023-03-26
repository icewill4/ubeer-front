
<template>
    <div id="Brasseries">
      <Brasseries />
    </div>
    <div id="Bieres">
      <Bieres />
    </div>
    <div id="Commandes">
      <Commandes />
    </div>
  </template>
  
  <script setup>
    import Brasseries from "../components/Brasseries.vue"
    import Bieres from "../components/Bieres.vue"
    import Commandes from "../components/Commandes.vue"
  </script>
  
  <script>
  
    export default {
      components: {
        Brasseries,
        Bieres,
        Commandes
      } 
    }
  </script>
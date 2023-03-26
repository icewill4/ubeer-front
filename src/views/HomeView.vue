
<template>
  <div>
    <a href="/brasseries">Brasseries     </a>
    <a href="/commandes">Commandes       </a>
    <a href="/bieres">Bieres             </a>
  </div>
</template>

<script setup>
  import Brasseries from "../components/Brasseries.vue"
  import Commandes from "../components/Commandes.vue"
  import Bieres from "../components/Bieres.vue"
</script>

<script>

  export default {
    components: {
      Brasseries,
      Commandes,
      Bieres
    } 
  }
</script>
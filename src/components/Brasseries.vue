<template>
  <h1>Brasseries</h1>
  <div id="BrasseriesList">
        <div v-for="brasserie in brasseries" :key="brasserie.id">
          //make the div clickable

          <div class="brasserieCard"
          @click="goToBrasserie(brasserie.id_brasserie)">
                <h2>{{ brasserie.nom_brasserie }}</h2>
                <p>{{ brasserie.ville }}</p>
                <p>{{ brasserie.pays }}</p>
                <p>{{ brasserie.date_creation }}</p>
                <img>{{ brasserie.image }}
                <button @click="updateBiere(biere.id)">Modifier</button>
                <button @click="deleteBiere(biere.id)">Supprimer</button>
            </div>
        </div>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        brasseries: []
      }
    },
    mounted() {
    fetch("http://localhost:3000/brasseries")
      .then(response => response.json())
      .then(data => {
        this.brasseries = data;
      });
  },
  methods: {
    goToBrasserie(id) {
      this.$router.push(`/brasseries/${id}`);
    },
  },
  }
</script>

<style>
#BrasseriesList {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .brasserieCard {
    display: flex;
    width: 400px;
    height: 500px;
    border-radius: 20px;
    margin: 50px;
    padding: 20px;
    flex-direction: column;
    align-items: center;
    background-color: antiquewhite;
  }

  .brasserieCard h2 {
    font-size: 1.5em;
    margin: 0;
  }

  .brasserieCard p {
    margin-top: 10px;
    text-align: center;
    color: black;
  }

  .brasserieCard img {
    width: 300px;
    height: 300px;
    border-radius: 10px;
    margin-top: 20px;
    border: 1px solid black;
  }
</style>
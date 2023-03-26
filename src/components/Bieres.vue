<template>    
    <h1>Bieres</h1>
    <div id="BieresList">
        <div v-for="biere in bieres" :key="biere.id">
            <div class="biereCard">
                <h2>{{ biere.nom_biere }}</h2>
                <p>{{ biere.type }}</p>
                <p>{{ biere.description }}</p>
                <p>{{ biere.brasserie }}</p>
                <img>{{ biere.image }}
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
        bieres: [],
        id: "test",
      };
    },
    async mounted() {
      await this.getBieres();
    },
    methods: {
      async getBieres() {
        try {
            console.log("test");
          const response = await fetch("http://localhost:3000/bieres");
          const data = await response.json();
          this.bieres = data;
        } catch (error) {
          console.error(error);
        }
      },
      async getBiere(id) {
        try {
          const response = await fetch(`http://localhost:3000/bieres/${id}`);
          const data = await response.json();
          this.bieres = this.bieres.filter(biere => biere.id !== id);
        } catch (error) {
          console.error(error);
        }
      },
      async deleteBiere(id) {
        try {
          await fetch(`http://localhost:3000/bieres/${id}`, {
            method: "DELETE"
          });
          this.bieres = this.bieres.filter(biere => biere.id !== id);
        } catch (error) {
          console.error(error);
        }
      },
      async updateBiere(id) {
        try {
          await fetch(`http://localhost:3000/bieres/${id}`, {
            method: "PUT"
          });
          this.bieres = this.bieres.filter(biere => biere.id !== id);
        } catch (error) {
          console.error(error);
        }
      },
      async addBiere() {
        try {
          await fetch(`http://localhost:3000/bieres`, {
            method: "POST"
          });
          await this.getBieres();
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
  </script>
  
  <style>
  #BieresList {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .biereCard {
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
  .biereCard h2 {
    margin: 0;
  }

  .biereCard p {
    margin-top: 10px;
    text-align: center;
    color: black;
  }

  .biereCard img {
    width: 300px;
    height: 300px;
    border-radius: 10px;
    margin-top: 20px;
    border: 1px solid black;
  }
  </style>
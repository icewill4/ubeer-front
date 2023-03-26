<template>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/bieres">Bieres</router-link></li>
        <li><router-link to="/brasseries">Brasseries</router-link></li>
        <li><router-link to="/commandes">Commandes</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
    export default {
        name: "Navbar"
    };
  </script>
  
  <style>
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    background-color: #333;
    flex-direction: row;
    color: #fff;
    width: 100%;
  }
  
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  li {
    margin-left: 1rem;
  }
  
  a {
    color: #fff;
    text-decoration: none;
  }
  </style>
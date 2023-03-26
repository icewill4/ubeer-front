<template>
    <div>
      <h2>Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Beer Name</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td>{{ order.id }}</td>
            <td>{{ order.customerName }}</td>
            <td>{{ order.beerName }}</td>
            <td>{{ order.quantity }}</td>
            <td>{{ order.totalPrice }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        orders: [],
      };
    },
    mounted() {
      // Fetch orders from the API when the component is mounted
      this.fetchOrders();
    },
    methods: {
      async fetchOrders() {
        const response = await fetch("http://localhost:3000/commandes");
        const orders = await response.json();
        this.orders = orders;
      },
    },
  };
  </script>
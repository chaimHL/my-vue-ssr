<!-- src\App.vue -->
<script setup></script>

<template>
  <div>
    <router-link to="/">
      <button>home</button>
    </router-link>
    <router-link to="/about">
      <button>about</button>
    </router-link>
    <router-view />
  </div>
</template>

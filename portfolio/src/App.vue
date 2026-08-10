<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
const menus = [{ name: 'About', hash: '#about' }, { name: 'Skills', hash: '#skills' }, { name: 'Projects', hash: '#projects' }, { name: 'Contact', hash: '#contact' }]
</script>

<template>
  <div class="site-shell"><header class="site-header"><RouterLink class="logo" :to="{ path: '/', hash: '#home' }">Junseon Lee</RouterLink><nav><RouterLink v-for="menu in menus" :key="menu.hash" :to="{ path: '/', hash: menu.hash }">{{ menu.name }}</RouterLink></nav></header><main><RouterView /></main></div>
</template>

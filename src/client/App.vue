<script setup lang="ts">
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Services from './components/Services.vue';
import Contact from './components/Contact.vue';
import ServerStatus from './components/ServerStatus.vue';
</script>

<template>
  <nav className="navbar">
    <a href="#hero">Home</a>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#contact">Contact</a>
  </nav>
  <Hero />
  <About />
  <Services />
  <Contact />
  <ServerStatus />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

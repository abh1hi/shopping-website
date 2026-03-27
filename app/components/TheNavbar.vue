<template>
  <nav :class="['navbar', { 'is-scrolled': isScrolled }]">
    <div class="navbar-container container">
      <div class="nav-left">
        <NuxtLink to="/collection" class="nav-link text-xs">Shop</NuxtLink>
        <NuxtLink to="/collection" class="nav-link text-xs">Collection</NuxtLink>
      </div>

      
      <div class="nav-brand">
        <NuxtLink to="/" class="brand-link">NOIR</NuxtLink>
      </div>
      
      <div class="nav-right">
        <NuxtLink to="/" class="nav-link text-xs">Search</NuxtLink>
        <NuxtLink to="/" class="nav-link text-xs">Cart (0)</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 1000;
  background: transparent;
  display: flex;
  align-items: center;
  transition: all 0.5s var(--transition-smooth);
}

.navbar.is-scrolled {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  height: 60px;
  border-bottom: 1px solid var(--border-color);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-left, .nav-right {
  display: flex;
  gap: 2rem;
  flex: 1;
}

.nav-right {
  justify-content: flex-end;
}

.nav-link {
  font-weight: 500;
  transition: opacity 0.3s ease;
}

.brand-link {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  letter-spacing: 0.15em;
  font-weight: 700;
}

@media (max-width: 768px) {
  .nav-left {
    display: none;
  }
}
</style>

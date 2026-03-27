<template>
  <div class="hero">
    <div class="hero-image">
      <img src="/images/hero.png" alt="Gothic Minimalist Hero">
    </div>
    
    <div class="hero-content container">
      <h1 class="text-display fade-in">NOIR</h1>
      <p class="text-xs fade-in" style="animation-delay: 0.2s;">Gothic Minimalist Essence</p>
      <NuxtLink to="/" class="button-link fade-in" style="animation-delay: 0.4s;">Discover Collection</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: contrast(1.1) brightness(0.9);
}

.hero-content {
  text-align: center;
  color: var(--black);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

h1 {
  font-weight: 700;
  letter-spacing: 0.2em;
}

.button-link {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 1rem 3rem;
  border: 1px solid var(--black);
  margin-top: 1rem;
  transition: all 0.5s var(--transition-smooth);
}

.button-link:hover {
  background: var(--black);
  color: var(--white);
  border-color: var(--white);
}

@media (max-width: 768px) {
  .hero-content {
    padding: 0 1rem;
  }
}
</style>

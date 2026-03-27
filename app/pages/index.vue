<template>
  <div class="home-page">
    <TheHero />
    
    <section class="ticker-section">
      <div class="ticker-wrapper">
        <div class="ticker-content text-xs">
          <span>NEW COLLECTION 2026 // </span>
          <span>GOTHIC MINIMALISM // </span>
          <span>LIMITED EDITION // </span>
          <span>SHIPPING GLOBALLY // </span>
          <span>NOIR ESSENTIALS // </span>
          <span>NEW COLLECTION 2026 // </span>
          <span>GOTHIC MINIMALISM // </span>
          <span>LIMITED EDITION // </span>
          <span>SHIPPING GLOBALLY // </span>
          <span>NOIR ESSENTIALS // </span>
        </div>
      </div>
    </section>

    <ProductGrid :products="newArrivals" />

    <section class="fabric-section">
      <div class="container flex-grid">
        <div class="fabric-image-container">
          <img src="/images/textile.png" alt="Fabric Detail">
        </div>
        <div class="fabric-content">
          <h2 class="text-xl">THE FABRIC</h2>
          <p class="text-sm">We source only the finest Egyptian cottons, Italian wools, and recycled synthetics to create textures that feel as profound as they look.</p>
          <ul class="fabric-stats text-xs">
            <li>100% RESPONSIBLE</li>
            <li>HAND CRAFTED</li>
            <li>ETERNALLY DURABLE</li>
          </ul>
        </div>
      </div>
    </section>
    
    <section class="ethos-section">
      <div class="container">
        <div class="ethos-center">
          <h2 class="text-display">ABSENCE OF COLOR</h2>
          <p class="text-base italic">"Black is not a color; it is an attitude. It is the silence between the notes, the space where structure speaks loudest."</p>
        </div>
      </div>
    </section>

    <section class="editorial-section">
      <div class="container">
        <div class="editorial-grid">
          <div class="editorial-content">
            <h2 class="text-2xl">THE GOTHIC MINIMALIST</h2>
            <p class="text-sm">A symphony of shadows and sharp lines. Designed for the modern observer who finds beauty in the absence of color.</p>
            <NuxtLink to="/collection" class="underline text-xs">Read the story</NuxtLink>
          </div>
          <div class="editorial-image">
            <img src="/images/hero.png" alt="Editorial Fashion">
          </div>
        </div>
      </div>
    </section>

    <section class="grid-gallery-section">
      <div class="gallery-grid">
        <div class="gallery-item"><img src="/images/product-1.png" alt="Gallery"></div>
        <div class="gallery-item"><img src="/images/textile.png" alt="Gallery"></div>
        <div class="gallery-item"><img src="/images/product-2.png" alt="Gallery"></div>
        <div class="gallery-item"><img src="/images/hero.png" alt="Gallery"></div>
      </div>
    </section>

    <section class="stores-section">
      <div class="container">
        <div class="stores-grid">
          <div class="store-item">
            <h4 class="text-xs">PARIS</h4>
            <p class="text-xs">RUE DES ARCHIVES, 75004</p>
          </div>
          <div class="store-item">
            <h4 class="text-xs">TOKYO</h4>
            <p class="text-xs">AOYAMA, MINATO-KU</p>
          </div>
          <div class="store-item">
            <h4 class="text-xs">LONDON</h4>
            <p class="text-xs">MARYLEBONE HIGH ST, W1U</p>
          </div>
        </div>
      </div>
    </section>

    <section class="banner-section">
      <div class="banner-container">
        <h2 class="text-display" style="color: #fff; text-align: center;">NOIR ESSENTIALS</h2>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

const { data: products } = await useAsyncData('products', () => queryContent('/products').findOne());
const newArrivals = products.value ? products.value.slice(0, 4) : [];

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('section').forEach(section => {
    section.setAttribute('data-scroll', '');
    observer.observe(section);
  });
});
</script>


<style scoped>
.home-page {
  width: 100%;
}

.section-header {
  text-align: center;
  margin: 4rem 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* Ticker Section */
.ticker-section {
  padding: 2rem 0;
  border-bottom: 1px solid var(--border-color);
  overflow: hidden;
  background: var(--white);
}

.ticker-wrapper {
  white-space: nowrap;
}

.ticker-content {
  display: inline-block;
  animation: scrollLeft 40s linear infinite;
  font-weight: 600;
  letter-spacing: 0.3em;
}

@keyframes scrollLeft {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

/* Fabric Section */
.fabric-section {
  background: var(--white);
}

.flex-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
  align-items: center;
}

.fabric-image-container {
  aspect-ratio: 1/1;
  overflow: hidden;
}

.fabric-image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fabric-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.fabric-stats {
  border-left: 2px solid var(--black);
  padding-left: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Ethos Section */
.ethos-section {
  padding: 15rem 0;
  background: var(--black);
  color: var(--white);
  text-align: center;
}

.ethos-center {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.ethos-center h2 {
  color: #fff;
}

.italic {
  font-family: var(--font-serif);
  font-weight: 300;
  opacity: 0.8;
}

/* Gallery Section */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 60vh;
}

.gallery-item {
  overflow: hidden;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 2s ease;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

/* Stores Section */
.stores-section {
  padding: 10rem 0;
  border-top: 1px solid var(--border-color);
}

.stores-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
}

.store-item {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.store-item p {
  color: var(--text-secondary);
}

/* Editorial Section */
.collection-section {
  background: var(--white);
}

.editorial-section {
  background: var(--near-white);
  padding: 15rem 0;
}

.editorial-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 6rem;
}

.editorial-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.editorial-content h2 {
  letter-spacing: 0.25em;
  font-weight: 300;
}

.editorial-content p {
  color: var(--text-secondary);
  line-height: 1.8;
  max-width: 400px;
}

.editorial-image {
  aspect-ratio: 4/5;
  overflow: hidden;
}

.editorial-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner-section {
  background: var(--black);
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.banner-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.underline {
  text-decoration: underline;
  text-underline-offset: 4px;
}

@media (max-width: 768px) {
  .editorial-grid, .flex-grid, .stores-grid {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    height: auto;
  }
}
</style>


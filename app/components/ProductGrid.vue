<template>
  <div class="product-grid container">
    <div class="product-card" v-for="product in products" :key="product.id">
      <NuxtLink :to="`/products/${product.id}`" class="product-link">
        <div class="product-image">
          <img :src="product.image" :alt="product.name">
          <button class="quick-add text-xs">Quick Add</button>
        </div>
        <div class="product-info">
          <h3 class="product-name text-sm">{{ product.name }}</h3>
          <p class="product-price text-xs">${{ product.price }}</p>
        </div>
      </NuxtLink>
    </div>

  </div>
</template>

<script setup>
const props = defineProps(['products']);
</script>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 4rem 1rem;
}

.product-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.product-image {
  overflow: hidden;
  position: relative;
  aspect-ratio: 4/5;
  background: var(--near-white);
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.2s var(--transition-smooth);
}

.product-card:hover .product-image img {
  transform: scale(1.05);
}

.quick-add {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0,0,0,0.8);
  color: #fff;
  padding: 1rem;
  transform: translateY(100%);
  transition: transform 0.4s var(--transition-smooth);
}

.product-card:hover .quick-add {
  transform: translateY(0);
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.product-name {
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-family: var(--font-sans);
  font-weight: 500;
}

.product-price {
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
}
</style>

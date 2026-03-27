<template>
  <div class="product-detail">
    <div class="container detail-container">
      <div class="product-gallery">
        <div class="gallery-image">
          <img :src="product.image" :alt="product.name">
        </div>
      </div>
      
      <div class="product-sidebar">
        <div class="product-header">
          <p class="text-xs">NEW COLLECTION</p>
          <h1 class="text-xl">{{ product.name }}</h1>
          <p class="text-lg">${{ product.price }}</p>
        </div>
        
        <div class="product-options">
          <div class="option-group">
            <p class="text-xs">Color: Mid Black</p>
            <div class="color-swatch-black"></div>
          </div>
          
          <div class="option-group">
            <p class="text-xs">Select Size</p>
            <div class="size-grid">
              <button v-for="size in ['S', 'M', 'L', 'XL']" :key="size" class="size-btn text-xs">{{ size }}</button>
            </div>
          </div>
        </div>
        
        <button class="add-to-cart-btn text-xs">Add to Shopping Bag</button>
        
        <div class="product-description">
          <p class="text-sm">Minimalist gothic structured silhouette. Premium blend of Italian wool and recycled polyester. Featuring sharp lapels and hidden closure for a clean, avant-garde aesthetic.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const { data: products } = await useAsyncData('products-single', () => queryContent('/products').findOne());
const product = products.value ? products.value.find(p => p.id == route.params.id) : null;
</script>


<style scoped>
.product-detail {
  padding: 8rem 0;
}

.detail-container {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 6rem;
}

.gallery-image {
  aspect-ratio: 4/5;
  background: var(--near-white);
  overflow: hidden;
}

.gallery-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-sidebar {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  position: sticky;
  top: 120px;
  height: max-content;
}

.product-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.product-header h1 {
  font-weight: 300;
  letter-spacing: 0.15em;
}

.product-options {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.option-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.color-swatch-black {
  width: 24px;
  height: 24px;
  background: #000;
  border: 1px solid #ddd;
}

.size-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.size-btn {
  border: 1px solid var(--border-color);
  padding: 1rem;
  transition: all 0.3s ease;
}

.size-btn:hover {
  background: #000;
  color: #fff;
  border-color: #000;
}

.add-to-cart-btn {
  background: #000;
  color: #fff;
  padding: 1.25rem;
  width: 100%;
  letter-spacing: 0.1em;
  transition: opacity 0.3s ease;
}

.add-to-cart-btn:hover {
  opacity: 0.9;
}

.product-description {
  color: var(--text-secondary);
  line-height: 1.8;
}

@media (max-width: 992px) {
  .detail-container {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
}
</style>

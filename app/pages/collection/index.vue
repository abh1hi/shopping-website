<template>
  <div class="collection-page">
    <div class="container banner flex items-center justify-center">
      <h1 class="text-2xl">THE PERMANENT COLLECTION</h1>
    </div>
    
    <div class="container filters flex justify-between items-center text-xs">
      <div class="filter-left flex gap-4">
        <span>CATEGORIES (2)</span>
        <button class="filter-btn">COATS</button>
        <button class="filter-btn">DRESSES</button>
      </div>
      <div class="filter-right flex gap-2">
        <span>SORT BY:</span>
        <select class="text-xs">
          <option>LATEST</option>
          <option>LOW TO HIGH</option>
          <option>HIGH TO LOW</option>
        </select>
      </div>
    </div>
    
    <ProductGrid :products="allProducts" />
  </div>
</template>

<script setup>
const { data: products } = await useAsyncData('products-all', () => queryContent('/products').findOne());
const allProducts = products.value || [];
</script>


<style scoped>
.collection-page {
  padding-top: 100px;
}

.banner {
  height: 30vh;
  background: var(--near-white);
  margin-bottom: 2rem;
  letter-spacing: 0.3em;
}

.filters {
  padding: 2rem 0;
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 4rem;
}

.filter-btn {
  color: var(--text-secondary);
  transition: color 0.3s ease;
}

.filter-btn:hover {
  color: var(--black);
}

select {
  border: none;
  background: transparent;
  outline: none;
  font-family: var(--font-sans);
  font-weight: 500;
  letter-spacing: 0.1em;
}

@media (max-width: 768px) {
  .filters {
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;
  }
}
</style>

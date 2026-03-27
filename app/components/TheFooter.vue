<template>
  <footer class="footer">
    <div class="footer-container container">
      <div class="footer-section">
        <h4 class="text-xs">Help</h4>
        <ul class="text-xs">
          <li><NuxtLink to="/">Contact us</NuxtLink></li>
          <li><NuxtLink to="/">Shipping</NuxtLink></li>
          <li><NuxtLink to="/">Returns</NuxtLink></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h4 class="text-xs">Company</h4>
        <ul class="text-xs">
          <li><NuxtLink to="/">About us</NuxtLink></li>
          <li><NuxtLink to="/">Sustainability</NuxtLink></li>
          <li><NuxtLink to="/">Terms</NuxtLink></li>
        </ul>
      </div>
      
      <div class="footer-section newsletter">
        <h4 class="text-xs">Newsletter</h4>
        <div class="newsletter-input">
          <input type="email" placeholder="ENTER YOUR EMAIL" class="text-xs">
          <button class="text-xs">Subscribe</button>
        </div>
      </div>
    </div>
    <div class="footer-bottom container text-xs">
      <p>&copy; 2026 NOIR. ALL RIGHTS RESERVED.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--near-black);
  color: #fff;
  padding: 8rem 0 2rem;
  border-top: 1px solid var(--border-color);
}

.footer-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  margin-bottom: 4rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.footer-section h4 {
  font-weight: 700;
  color: #fff;
}

.footer-section ul {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-section a {
  color: #888;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: #fff;
}

.newsletter-input {
  display: flex;
  border-bottom: 1px solid #444;
  padding-bottom: 0.5rem;
}

.newsletter input {
  background: transparent;
  border: none;
  color: #fff;
  outline: none;
  width: 100%;
}

.footer-bottom {
  border-top: 1px solid #222;
  padding-top: 2rem;
  color: #444;
  text-align: center;
}

@media (max-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
</style>

//Filtering 
document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll('input[name="tags"]');
  const products = document.querySelectorAll(".product");

  function filterProducts() {
    // Collect all checked values
    const checkedValues = Array.from(checkboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value.toLowerCase());

    products.forEach(product => {
      const tags = product.querySelector("tags").textContent.toLowerCase();

      // If no checkbox selected → show all
      if (checkedValues.length === 0) {
        product.style.display = "block";
      } else {
        // Check if product tags contain ANY selected value
        const match = checkedValues.some(val => tags.includes(val));
        product.style.display = match ? "block" : "none";
      }
    });
  }

  // Listen for checkbox changes
  checkboxes.forEach(cb => cb.addEventListener("change", filterProducts));
});

//Closing offerbox
document.addEventListener("DOMContentLoaded", function () {
  const closeBtn = document.getElementById("offer-close");
  const offerBar = document.querySelector(".offer-bar");

  closeBtn.addEventListener("click", function () {
    offerBar.style.display = "none";
  });
});



/* -------- Search (title + tags) -------- */
document.addEventListener("DOMContentLoaded", () => {
  const searchForm  = document.querySelector(".navbar-search");
  const searchInput = document.querySelector(".navbar-search input[type='search']");
  const products    = document.querySelectorAll(".product");

  if (!searchInput) return;

  // prevent form submit refresh
  if (searchForm) searchForm.addEventListener("submit", e => e.preventDefault());

  function searchProducts() {
    const q = searchInput.value.toLowerCase().trim();

    products.forEach(product => {
      const title = product.querySelector("h1")?.textContent.toLowerCase() || "";
      const tags  = product.querySelector("tags")?.textContent.toLowerCase() || "";

      const show = q === "" || title.includes(q) || tags.includes(q);
      product.hidden = !show;
    });
  }

  searchInput.addEventListener("input", searchProducts); // fires on every change
  searchProducts(); // initial
});


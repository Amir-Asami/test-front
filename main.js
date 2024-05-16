const searchButton = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const productList = document.getElementById("product-container");

searchButton.addEventListener("click", async () => {
  const searchQuery = searchInput.value;
  getProducts(searchQuery)
});

async function getProducts(searchQuery="") {

  try {
    const response = await fetch(
      `http://localhost:3100/api/v1/products/search?name=${searchQuery}`
    );

    if (!response.ok) {
      throw new Error(`Error fetching products: ${response.status}`);
    }

    const data = await response.json();
    productList.innerHTML = ""; // Clear previous results

    if (data.products.length === 0) {
      productList.innerHTML = "<p>No products found.</p>";
    } else {
      const productItems = data.products
        .map(
          (product) => `
        <div class="pro">
            <img src="img/crpt01.jpg" alt="" />
            <div class="des">
                <span>فرش</span>
                <h5>${product.name}</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>63 M</h4>
            </div>
            <p>${product.description}</p>
            <p>${product.price}</p>
            <a href="#">
                <div class="cart">
                    <i class="fas fa-cart-shopping gg"></i>
                </div>
            </a>
        </div>
      `
        )
        .join("");

      productList.innerHTML = productItems;
    }
  } catch (error) {
    console.error("Error:", error);
    productList.innerHTML = "<p>Error fetching products.</p>";
  }
}

const searchButton = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const productList = document.getElementById("product-container");

searchButton.addEventListener("click", async () => {
  const searchQuery = searchInput.value;
  const products = await fetchProducts(searchQuery);
  displayProducts(products);
});

async function fetchProducts(searchQuery = "") {
  try {
    const response = await fetch(
      `http://localhost:3100/api/v1/products/search?name=${searchQuery}`
    );

    if (!response.ok) {
      throw new Error(`Error fetching products: ${response.status}`);
    }

    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return an empty array if there's an error
  }
}

function displayProducts(products) {
  productList.innerHTML = ""; // Clear previous results

  if (products.length === 0) {
    productList.innerHTML = "<p>No products found.</p>";
  } else {
    const productItems = products
      .map(
        (product) => `
        <div class="pro" onclick="navigateToProductPage('${product.id}')">
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
}
async function fetchProductByID(ID = "") {
  try {
    const response = await fetch(
      `http://localhost:3100/api/v1/products/${ID}`
    );

    if (!response.ok) {
      throw new Error(`Error fetching products: ${response.status}`);
    }

    const data = await response.json();
    return data.product;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return an empty array if there's an error
  }
}
function navigateToProductPage(productId) {
  
  const productUrl = `product.html?id=${productId}`; // Construct URL with product ID
  window.location.href = productUrl;
}

async function getCartItems() {
  try {
    const response = await fetch(
      `http://localhost:3100/api/v1/order/showAllMyOrders`
    );

    if (!response.ok) {
      throw new Error(`Error fetching products: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return an empty array if there's an error
  }
}

async function updateCart(itemID, quantity) {
  try {
    const response = await fetch(
      `http://localhost:3100/api/v1/orders/update`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          itemId: itemID,
          quantity: quantity,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Error updating cart: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating cart:", error);
    return []; // Return an empty array if there's an error
  }
}

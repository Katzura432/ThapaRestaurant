class RestaurantFoodProduct {
    constructor(name, pictureUrl, description, price, amountSold = 0, origin, tasteType, prepTime, prepMethod) {
        this.name = name;
        this.pictureUrl = pictureUrl;
        this.description = description;
        this.price = price;
        this.amountSold = amountSold;
        this.origin = origin;        // Origin of the food
        this.tasteType = tasteType;  // Taste type (e.g., spicy, sweet, etc.)
        this.prepTime = prepTime;    // Time to prepare
        this.prepMethod = prepMethod;// How to prepare
    }

    // Method to render the food product in HTML
    render() {
        return `
            <div class="product-card" onclick="redirectToProductDetail('${this.name}')">
                <img src="${this.pictureUrl}" alt="${this.name}" class="product-image">
                <div class="product-info">
                    <h2 class="product-name">${this.name}</h2>
                    <p class="product-description">${this.description}</p>
                    <p class="product-price">Price: $${this.price.toFixed(2)}</p>
                    <p class="product-amount-sold">Amount Sold: ${this.amountSold}</p>
                </div>
            </div>
        `;
    }
}

// Function to redirect to the product detail page
function redirectToProductDetail(productName) {
    const product = foodProducts.find(p => p.name === productName);
    if (product) {
        // Store product details in local storage
        localStorage.setItem('selectedProduct', JSON.stringify(product));
        // Redirect to the product detail page
        window.location.href = 'product-detail.html';
    }
}

// Create instances for each food product
const momo = new RestaurantFoodProduct(
    "Momo",
    "items/momo.jpg",
    "Steamed dumplings filled with minced meat or vegetables.",
    4.99,
    150,
    "Nepal",
    "Savory",
    "30 minutes",
    "Steamed dumplings with minced meat or vegetables."
);

const sekuwa = new RestaurantFoodProduct(
    "Sekuwa",
    "items/sekuwa.jpg", // Replace with actual image URL
    "Grilled meat skewers marinated with Nepalese spices.",
    5.99,
    100,
    "Nepal",
    "Spicy",
    "1 hour",
    "Grilled meat skewers marinated with traditional spices."
);

const bhutan = new RestaurantFoodProduct(
    "Bhutan",
    "items/Bhutan.png",
    "Fried or grilled goat lungs, a popular Nepalese delicacy.",
    3.99,
    75,
    "Nepal",
    "Savory",
    "45 minutes",
    "Fried or grilled goat lungs, seasoned with spices."
);

const bhatmas = new RestaurantFoodProduct(
    "Bhatmas",
    "items/bhatmas.webp",
    "Fried soybeans served with onions and spices.",
    2.99,
    120,
    "Nepal",
    "Crispy",
    "15 minutes",
    "Fried soybeans served with onions and spices."
);

const khajaSet = new RestaurantFoodProduct(
    "Khaja Set",
    "items/khajaset.jpg",
    "A traditional Nepali snack platter.",
    6.99,
    80,
    "Nepal",
    "Varied",
    "1 hour",
    "A traditional Nepali snack platter with various items."
);

// Array of all food products
const foodProducts = [momo, sekuwa, bhutan, bhatmas, khajaSet];

// Display all products
displayProducts(foodProducts);

function displayProducts(products) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = products.map(product => product.render()).join('');
}
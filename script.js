// Initialize order array
let order = [];
// Function to add item to the order
function addToOrder(name, price) {
  // Add the item to the order array
  order.push({ name: name, price: parseFloat(price) });
  // Update the order summary in the modal
  updateOrderSummary();
  // Add animation to the button when item is added
  const btn = document.querySelector(`[data-name="${name}"]`);
  btn.classList.add('added');
  setTimeout(() => {
    btn.classList.remove('added');
  }, 500);
}
// Add scroll effect to navbar
window.onscroll = function() {
    const navbar = document.getElementById('navbar');
    if (window.pageYOffset > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };  
  // Highlight active section link
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar a');  
  window.addEventListener('scroll', () => {
    let current = '';    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 50;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });  
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
// Function to update the order summary in the modal
function updateOrderSummary() {
  const orderList = document.getElementById('modal-order-list');
  const orderTotal = document.getElementById('modal-order-total');  
  // Clear the current order list in the modal
  orderList.innerHTML = '';
  // Calculate total price
  let total = 0;
  order.forEach(item => {
    total += item.price;
    // Add item to the order list in the modal
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - ${item.price.toFixed(2)}`;
    orderList.appendChild(listItem);
  });
  // Update the total price in the modal
  orderTotal.textContent = total.toFixed(2);
}
// Handle "Add to Order" button clicks
document.querySelectorAll('.order-btn').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-name');
    const price = button.getAttribute('data-price');
    addToOrder(name, price);
  });
});
// Modal handling
const modal = document.getElementById('order-modal');
const viewCartBtn = document.getElementById('view-cart-btn');
const closeModal = document.querySelector('.close');
// Open modal when "View Cart" button is clicked
viewCartBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
  updateOrderSummary(); // Make sure the summary is updated
});
// Close modal when the close button is clicked
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});
// Close modal when clicking outside of modal content
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
// Handle order submission
document.getElementById('modal-checkout-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Your order has been placed successfully!');
  // Clear the form and reset the order
  this.reset();
  order = [];
  modal.style.display = 'none';
  updateOrderSummary();
});
//// new code /

document.addEventListener("DOMContentLoaded", function () {
  // Select all order buttons
  const orderButtons = document.querySelectorAll(".order-btn");

  orderButtons.forEach(button => {
      button.addEventListener("click", function () {
          let itemName = this.getAttribute("data-name");
          let itemPrice = this.getAttribute("data-price");

          // Retrieve existing orders from localStorage or create an empty array
          let orders = JSON.parse(localStorage.getItem("orders")) || [];

          // Add new order
          orders.push({ name: itemName, price: itemPrice });

          // Save updated orders back to localStorage
          localStorage.setItem("orders", JSON.stringify(orders));

          alert(`${itemName} has been added to your order!`);
      });
  });
});
function toggleContactInfo() {
  var contactInfo = document.getElementById("contact-info");
  if (contactInfo.style.display === "block") {
      contactInfo.style.display = "none";
  } else {
      contactInfo.style.display = "block";
  }
}


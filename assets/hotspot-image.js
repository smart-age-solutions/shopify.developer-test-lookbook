/**
 * Shopify AJAX API: https://shopify.dev/docs/api/ajax
 * Shopify Product API Reference: https://shopify.dev/docs/api/ajax/reference/product
 */

document.addEventListener("DOMContentLoaded", function () {
  const desktopHotspots = document.querySelectorAll(
    ".hotspot__hotspots--desktop .hotspot__item"
  );
  const mobileHotspots = document.querySelectorAll(
    ".hotspot__hotspots--mobile .hotspot__item"
  );
  const productContainer = document.querySelector(".hotspot__product");
  const productTitle = document.getElementById("hotspot-product-title");
  const productImage = document.getElementById("hotspot-product-image");
  const productLink = document.getElementById("hotspot-product-link");

  /**
   * Handles the click event on a hotspot.
   * Fetches product data and displays it dynamically.
   * @param {Event} event - The click event.
   */
  function handleHotspotClick(event) {
    const productId = this.getAttribute("data-product-id");
    if (!productId) {
      console.warn("No product linked to this hotspot.");
      return;
    }

    fetch(`${window.Shopify.routes.root}products/${productId}.js`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok (${response.status})`);
        }
        return response.json();
      })
      .then((product) => {
        if (product?.images?.length > 0) {
          productImage.src = product.featured_image || product.images[0];
          productImage.alt = product.title;
          productImage.style.display = "block";
          productContainer.classList.add("fade-in");
        }

        if (productTitle) {
          productTitle.textContent = product.title;
          productTitle.style.display = "block";
        }

        if (productLink) {
          productLink.href = `/products/${product.handle}`;
          productLink.style.display = "block";
        }
      })

      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }

  /**
   * Attaches click event listeners to visible hotspots.
   * Ensures that only relevant hotspots (desktop or mobile) have listeners.
   */
  function attachHotspotListeners() {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    // Remove existing listeners + attach to visible set
    desktopHotspots.forEach((hotspot) => {
      console.log("click");
      hotspot.removeEventListener("click", handleHotspotClick);
    });
    mobileHotspots.forEach((hotspot) => {
      hotspot.removeEventListener("click", handleHotspotClick);
    });

    if (isDesktop) {
      desktopHotspots.forEach((hotspot) => {
        hotspot.addEventListener("click", handleHotspotClick);
      });
    } else {
      mobileHotspots.forEach((hotspot) => {
        hotspot.addEventListener("click", handleHotspotClick);
      });
    }
  }

  // Initial attachment
  attachHotspotListeners();

  // Re-attach listeners on window resize
  window.addEventListener("resize", function () {
    attachHotspotListeners();
  });
});

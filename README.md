# Lookbook Hotspot Feature for Shopify

This Shopify section enables administrators to add interactive, customizable hotspots to images on the Lookbook page. Each hotspot links to a specific product, dynamically displaying the product's image and details when clicked. The feature is fully responsive and designed to work seamlessly across desktop and mobile devices.

## **Live Demo Store**

[Click here to explore the live demo of the Lookbook Hotspot feature!](https://lookbook-feature.myshopify.com/pages/lookbook)

Store password: rolex

Make sure to check the page ["Lookbook"](https://lookbook-feature.myshopify.com/pages/lookbook) It's available on the header's menu

---

## **Overview**

This custom Shopify section allows store administrators to:

- Add multiple interactive hotspots to images.
- Link each hotspot to a product from the Shopify catalog.
- Customize the appearance and placement of hotspots.
- Display the linked product image and title dynamically without reloading the page.
- Configure responsive images for both desktop and mobile views.

## **Key Features**

- **Admin Controls**: Add, remove, and position hotspots easily via the Shopify customizer.
- **Customization**: Configure hotspot colors, hover effects, and product card positioning.
- **Responsive Design**: Separate images for desktop and mobile views, ensuring a consistent experience across devices.
- **Dynamic Product Loading**: Hotspot interaction loads product information smoothly, without requiring a page reload.
- **Fully Documented**: Well-documented code with relevant comments, setup instructions, and clear admin guidelines.

## **Setup & Installation**

1. **Add the Section**  
   In your Shopify admin, go to the **Customize theme** section. From there, add the **Hotspot Image** section to your Lookbook or any desired page.

2. **Configure Settings**

   - Upload **desktop** and **mobile** images for your Lookbook.
   - Add hotspots by specifying their position (X and Y percentages) and linking each to a product in your store.
   - Customize the appearance of the hotspots using color pickers and sliders.

3. **Customize Hotspot Appearance**  
   Adjust the hotspot background, border colors, and hover effects to align with your store’s theme. Position the product card that appears on interaction as per your preference.

4. **Save & Preview**  
   After setting up your hotspots, save the configuration and preview it on both desktop and mobile to ensure the responsive design fits perfectly.

## **Customization Options**

### **Section Settings**

- **Desktop Lookbook Image**: Upload the main image for desktop view.
- **Mobile Lookbook Image**: Upload the main image for mobile view.
- **Full Width**: Choose whether the section spans the full width of the screen or is constrained by a set max-width.
- **Hotspot Styling**: Set the background color, border color, and hover effects of the hotspots.
- **Product Card Positioning**: Adjust the vertical and horizontal alignment of the product card displayed when a hotspot is clicked.

### **Block Settings (Hotspot)**

Each hotspot allows for the following configurations:

- **Hotspot Label**: Name or short description of the hotspot.
- **Position**: Set the X and Y coordinates as percentages to define the hotspot's position on the image.
- **Linked Product**: Select the product from the Shopify catalog to link to this hotspot.

## **Detailed Documentation**

Refer to the comments within the `hotspot-image.liquid` file for a detailed breakdown of functionality and dependencies. Key components are as follows:

- **Product Card Rendering**: The product's image and details are dynamically displayed within the designated product card area upon clicking the hotspot.
- **Responsive Logic**: Media queries ensure the correct image and layout are used based on screen size (desktop vs. mobile).
- **Admin Controls**: All necessary fields are exposed in the Shopify customizer, with intuitive ranges and options for easy customization.

## **Testing Instructions**

1. **Hotspot Functionality**: Ensure that each hotspot is clickable and displays the correct product image and title dynamically.
2. **Responsive Behavior**: Test the section on both desktop and mobile devices to confirm that the correct image loads and hotspots are positioned accurately.
3. **Performance Check**: Confirm that the feature does not impact page load times and performs smoothly during interaction.

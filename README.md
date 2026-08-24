# 3D Print Catalog

A modern and minimal product catalog for 3D-printed products, built with React and Vite.

The website is designed to showcase 3D-printed products for artistic, decorative, and engineering applications.

## Live Website

[Visit Chop3D](https://chop3d.ir)

## Features

- Persian RTL user interface
- Responsive design for desktop and mobile
- Minimal and professional visual design
- Product categorization
- Artistic and engineering product categories
- Dedicated product detail pages
- Multi-image product gallery
- Product ordering through a contact/order page
- Client-side routing with React Router
- JSON-based product data
- Static hosting support

## Product Data

Product information is managed through a separate `products.json` file.

The React application fetches product data from this file, allowing products to be added or updated without modifying the React components.

### Example

```json
{
  "id": 1,
  "name": "Geometric Vase",
  "category": "art",
  "description": "A decorative geometric vase.",
  "fulldesc": "",
  "images": [
    "/images/products/geometric-vase/01.webp",
    "/images/products/geometric-vase/02.webp",
    "/images/products/geometric-vase/03.webp"
  ]
}
```

Each product can contain multiple images using the `images` array.

The first image is used as the main image in the product catalog, while all images are available in the product detail gallery.

The `fulldesc` field is used for the full product description displayed on the `ProductDetails` page. The shorter `description` field is used in product cards.

## Adding Products

Adding a new product does not require modifying the React application.

1. Add the product images to the appropriate directory.
2. Add the product information to `products.json`.
3. Build and deploy the project.

### Example Directory Structure

```text
public/
├── products.json
└── images/
    └── products/
        └── geometric-vase/
            ├── 01.webp
            ├── 02.webp
            └── 03.webp
```

This approach keeps product content separate from the application logic.

## Future Content Management

The current catalog uses `products.json` as a simple and lightweight content source.

In the future, an admin page could be added to make content management easier. Such an interface could allow authorized users to:

- Add and edit products
- Update product descriptions
- Upload product images
- Manage product categories
- Update the `products.json` data automatically

This would allow the catalog to be managed without manually editing JSON files or uploading images through the hosting control panel.

## Tech Stack

- React
- Vite
- JavaScript
- Material UI
- React Router
- JSON

## Project Structure

```text
src/
├── components/
│   └── Product/
├── pages/
├── theme/
└── App.jsx

public/
├── products.json
├── images/
└── .htaccess
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Create Production Build

```bash
npm run build
```

The production-ready files will be generated in the `dist` directory.

## Deployment

The project is designed to work as a static React application and can be deployed on a standard Linux hosting environment.

After creating a production build, upload the contents of the `dist` directory to the website's public directory.

The included `.htaccess` configuration allows React Router routes to work correctly when users directly access or reload nested pages.

## Design Goals

The project focuses on:

- Simplicity
- Performance
- Maintainability
- Responsive design
- Clear product presentation
- Easy content management

Product content is intentionally separated from the React application so that the catalog can be updated without changing the application's UI or business logic.

## License

Copyright (c) 2026 Hossein Kiumarcy. All Rights Reserved.

This source code is available for viewing and evaluation purposes only.
Copying, modifying, redistributing, or using the code in personal,
commercial, or production projects is not permitted without prior
written permission.

See the [LICENSE](LICENSE) file for the full terms.
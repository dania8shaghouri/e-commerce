import productModel from "../models/productModel.js";

export const getAllProducts = async () => {
  return await productModel.find();
};

export const seedInitialProducts = async () => {
  try {
    const products = [
      { title: "test 1", image: "image1.jpg", price: 10.99, stock: 50 },
      // { title: "Product 2", image: "image2.jpg", price: 12.99, stock: 40 },
      // { title: "Product 3", image: "image3.jpg", price: 9.99, stock: 60 },
      // { title: "Product 4", image: "image4.jpg", price: 15.99, stock: 35 },
      // { title: "Product 5", image: "image5.jpg", price: 8.99, stock: 70 },
      // { title: "Product 6", image: "image6.jpg", price: 18.99, stock: 25 },
      // { title: "Product 7", image: "image7.jpg", price: 22.99, stock: 30 },
      // { title: "Product 8", image: "image8.jpg", price: 14.99, stock: 45 },
      // { title: "Product 9", image: "image9.jpg", price: 19.99, stock: 20 },
      // { title: "Product 10", image: "image10.jpg", price: 11.99, stock: 55 },
    ];

    const existingProducts = await getAllProducts();
    if (existingProducts.length === 0) {
      await productModel.insertMany(products);
    }
  } catch (err) {
    console.error("cannot see database ", err);
  }
};

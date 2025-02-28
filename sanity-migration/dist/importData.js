"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });

const axios_1 = __importDefault(require("axios"));
const sanityClient_js_1 = require("./sanityClient.js");

async function uploadImageToSanity(imageUrl) {
    try {
        if (!imageUrl) {
            console.warn("⚠️ Skipping image upload: No image URL provided.");
            return null; // Skip upload if imageUrl is missing
        }

        // Fetch image from URL and convert to buffer
        const response = await axios_1.default.get(imageUrl, { responseType: "arraybuffer" });
        const buffer = Buffer.from(response.data);

        // Upload image to Sanity
        const asset = await sanityClient_js_1.client.assets.upload("image", buffer, {
            filename: imageUrl.split("/").pop() || "unknown-image",
        });

        console.log("✅ Image uploaded:", asset);
        return asset._id;
    } catch (error) {
        console.error("❌ Failed to upload image:", imageUrl, error);
        return null; // Return null if image upload fails
    }
}

async function importData() {
    try {
        // Fetch data from external API
        const response = await axios_1.default.get("https://template6-six.vercel.app/api/products");
        const products = response.data;

        // Debugging: Log fetched products
        console.log("Fetched products from API:", products);

        for (const product of products) {
            let imageRef = null;

            // Ensure `_id` exists or generate a fallback
            const productId = product._id || `fallback-${product.title.replace(/\s+/g, "-").toLowerCase()}`;

            // Upload image if available
            if (product.imageUrl) {
                imageRef = await uploadImageToSanity(product.imageUrl);
            }

            const sanityProduct = {
                _id: `product-${productId}`, // Use fallback if `_id` is missing
                _type: "product",
                title: product.title,
                price: product.price,
                discountPercentage: product.discountPercentage || 0,
                tags: product.tags || [],
                image: imageRef
                    ? { _type: "image", asset: { _type: "reference", _ref: imageRef } }
                    : undefined, // Avoid invalid references
                description: product.description,
                isNew: product.isNew ?? false,
            };

            console.log("Uploading product:", sanityProduct);

            // Import data into Sanity
            await sanityClient_js_1.client.createOrReplace(sanityProduct);
            console.log(`✅ Imported product: ${sanityProduct.title}`);
        }

        console.log("✅ Data import completed!");
    } catch (error) {
        console.error("❌ Error importing data:", error);
    }
}

// Execute the data import function
importData();

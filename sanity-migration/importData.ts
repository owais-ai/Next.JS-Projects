import axios from "axios";
import { client } from "./sanityClient.js";

async function uploadImageToSanity(imageUrl: string): Promise<string | null> {
  try {
    // Fetch image from URL and convert it to buffer
    const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
    const buffer = Buffer.from(response.data);

    // Upload image to Sanity
    const asset = await client.assets.upload("image", buffer, {
      filename: imageUrl.split("/").pop() || "unknown-image", // Extract filename safely
    });

    console.log("✅ Image uploaded:", asset);
    return asset._id; // Return Sanity image asset reference
  } catch (error) {
    console.error("❌ Failed to upload image:", imageUrl, error);
    return null; // Return null if image upload fails
  }
}

async function importData() {
  try {
    // Fetch data from external API
    const response = await axios.get("https://template6-six.vercel.app/api/products");
    const products = response.data;

    for (const product of products) {
      let imageRef: string | null = null;

      // Upload image and get asset reference if it exists
      if (product.imageUrl) {
        imageRef = await uploadImageToSanity(product.imageUrl);
      }

      const sanityProduct = {
        _id: `product-${product._id}`, // Use API _id instead of id
        _type: "product",
        title: product.title, // Use correct field name
        price: product.price,
        discountPercentage: product.discountPercentage || 0,
        tags: product.tags || [], // Store all tags
        image: imageRef
          ? { _type: "image", asset: { _type: "reference", _ref: imageRef } }
          : null, // Set null if upload fails
        description: product.description,
        isNew: product.isNew ?? false, // Ensure default value
      };

      console.log("Uploading product:", sanityProduct);

      // Import data into Sanity
      await client.createOrReplace(sanityProduct);
      console.log(`✅ Imported product: ${sanityProduct.title}`);
    }

    console.log("✅ Data import completed!");
  } catch (error) {
    console.error("❌ Error importing data:", error);
  }
}

// Execute the data import function
importData();

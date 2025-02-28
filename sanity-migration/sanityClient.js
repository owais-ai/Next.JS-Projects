"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// sanityClient.ts
var client_1 = require("@sanity/client");
exports.client = (0, client_1.createClient)({
    projectId: 'q1ltcarj', // Replace with your project ID
    dataset: 'production', // Or your dataset name
    apiVersion: '2024-01-25', // Today's date or latest API version
    useCdn: false, // Disable CDN for real-time updates
    token: "skwUEjkQIIdbfCTkLjAKkaApoFfNCm9ecD4R3ZZNhwn6FF4QAmn75vWSniyOFW0siJWhlnVtGMbUhEuFR8qr5B3KFi0CuHlosEyj8jLK9OVOYTfcqGeuHV9iyZPaCTX2dsRZAQX306vECotMDQaw8mfITITpJ1uh4Raet7wGanUHdmzF5oSe"
});

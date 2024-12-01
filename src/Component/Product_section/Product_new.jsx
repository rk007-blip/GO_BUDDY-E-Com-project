import React from 'react';

const Product_new = () => {
  // Sample product data based on the provided image
  const product = {
    name: 'Acer 54.61 cm (21.5 inch) Full HD IPS Panel',
    price: '₹4,999',
    originalPrice: '₹8,499',
    discount: '41%',
    rating: 4.3,
    reviews: 757,
    features: [
      'Full HD (1920x1080) IPS Display',
      '99% sRGB Color Gamut',
      'VESA Supportive, ENERGY STAR Certified',
      'HDMI, VGA Support',
      '1ms Response Time, 100Hz Refresh Rate',
      'AMD FreeSync',
      'Ergonomic Stand, ZeroFrame Design',
    ],
    imageSrc: 'https://example.com/image-of-monitor', // Replace with actual image path
    offerEnd: '05 hrs : 33 mins',
  };

  return (
    <div className="bg-white p-5">
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
        {/* Product Image Section */}
        <div className="flex-1">
          <img
            src={product.imageSrc}
            alt={product.name}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details Section */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-green-600 text-xl font-semibold mt-3">
            Special price: {product.price}
          </p>
          <p className="line-through text-gray-500">Original price: {product.originalPrice}</p>
          <p className="text-red-600">{product.discount} OFF</p>
          <p className="mt-2 text-yellow-500">
            {product.rating} ★ ({product.reviews} reviews)
          </p>

          {/* Product Specification List */}
          <div className="mt-5">
            <h2 className="text-xl font-semibold text-gray-700">Specifications:</h2>
            <ul className="list-disc list-inside space-y-2 mt-2 text-gray-600">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Offers and Time Countdown */}
          <div className="mt-5">
            <p className="bg-yellow-100 text-yellow-800 px-3 py-2 rounded-lg">
              Offer ends in: {product.offerEnd}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-5 flex space-x-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-all">
              Buy Now
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-all">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_new;

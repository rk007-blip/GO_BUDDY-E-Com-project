import React from 'react'

const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: 'From ₹39',
    imageSrc: 'water.webp',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Casual shoes for mens',
    href: '#',
    price: 'From ₹199',
    imageSrc: 'shoes1.jpeg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'mens shirts',
    href: '#',
    price: 'From ₹299',
    imageSrc: 'tshirt.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Boat Watches',
    href: '#',
    price: 'From ₹899',
    imageSrc: 'watch1.webp',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
];
const Newproducts = [
  {
    id: 1,
    name: 'Waisted Bow Tie Straps Dress ',
    href: '#',
    price: 'From ₹399',
    imageSrc: 'womens1.jpeg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Summer Casual',
    href: '#',
    price: 'From ₹429',
    imageSrc: 'womens6.jpeg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Womens Sweater Dresses ',
    href: '#',
    price: 'From ₹599',
    imageSrc: 'womens9.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: "Winter Dress Women's Slim Turtleneck",
    href: '#',
    price: 'From ₹2,999',
    imageSrc: 'womens10.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: 'From ₹99',
    imageSrc: 'mens1.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  
  {
    id: 6,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: 'From ₹99',
    imageSrc: 'mens2.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  
  {
    id: 7,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: 'From ₹99',
    imageSrc: 'mens3.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  
  {
    id: 8,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: 'From ₹99',
    imageSrc: 'mens4.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
];

const ProductWithOffer = () => {
  return (
    <div className="bg-white ">
      <div className="mx-auto max-w-2xl px-4 py-3 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8">
        <h2 className="text-black pb-7 text-start font-bold font-serif text-2xl">Limited Offer Sales</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 relative">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              {/* Limited Offer button */}
              <button className="bg-pink-800 text-white px-3 py-1 mt-2 rounded-full shadow-lg hover:bg-gradient-to-r from-pink-600 to-pink-800 transition-all duration-300 transform hover:scale-110">
                Limited Offer
              </button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductWithoutOffer = () => {
  return (
    <div className="bg-white text-lg ">
      <div className="mx-auto max-w-2xl px-4 py-1 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-1">
        <h2 className="text-black pb-7 text-start font-bold font-serif text-xl">You might like</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {Newproducts.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 relative">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-72 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              {/* No offer button */}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductSection = () => {
  return (
    <>
      {/* First display products with Limited Offer */}
      <ProductWithOffer />

      {/* Then display products without Limited Offer */}
      <ProductWithoutOffer />
    </>
  );
};

export default ProductSection;

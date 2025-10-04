import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

const selectedProduct = {
  name: "Stylish jacket",
  price: 120,
  originalPrice: 123,
  description: "This is a jacket",
  brand: "Fashion Brand",
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["green", "Black"],
  images: [
    {
      url: "https://picsum.photos/500?random=1",
      altText: "Stylish Jacket 1",
    },
    {
      url: "https://picsum.photos/500?random=2",
      altText: "Stylish Jacket 2",
    },
  ],
};

const similarProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 100,
    image: [{ url: "https://picsum.photos/id/1015/400/300" }],
  },
  {
    _id: 2,
    name: "Product 2",
    price: 120,
    image: [{ url: "https://picsum.photos/id/1025/400/300" }],
  },
  {
    _id: 3,
    name: "Product 3",
    price: 90,
    image: [{ url: "https://picsum.photos/id/1035/400/300" }],
  },
  {
    _id: 4,
    name: "Product 4",
    price: 150,
    image: [{ url: "https://picsum.photos/id/1045/400/300" }],
  },
];

const ProductDetails = () => {
  const [mainImage, setMainimage] = useState("");
  const [selectedSize, setSeletedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [Quantity, setQuantity] = useState(1);
  const [isButtomDisabled, setIsButtonDisabled] = useState(false);

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      toast.error("Please select a size and color before proceeding", {
        duration: 1000,
      });
      return;
    }
    setIsButtonDisabled(true);

    setTimeout(() => {
      toast.success("Product added to cart", {
        duration: 1000,
      });
      setIsButtonDisabled(false);
    }, 500);
  };
  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainimage(selectedProduct.images[0].url);
    }
  }, [selectedProduct]);
  return (
    <section className="container mx-auto px-4 py-6">
      {/* Main Container */}
      <div className="flex  flex-col items-center justify-center md:flex-row md:items-start md:justify-center gap-6 max-w-6xl mx-auto min-h-[500px]">
        {/* Products */}
        <div className=" hidden sm:block  h-full w-[70px] items-center pt-2 ">
          {selectedProduct.images.map((image, index) => {
            return (
              <img
                key={index}
                className={`w-[50px] h-[70px] object-cover rounded  border-2  mb-2 ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
                src={image.url}
                alt={image.altText}
                onClick={() => setMainimage(image.url)}
              />
            );
          })}
        </div>
        {/* Selected */}
        <div className=" h-full w-[350px] mr-2">
          <img
            className="w-full h-[600px] rounded object-cover"
            src={mainImage}
            alt="MAin Product"
          />
        </div>
        <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
          {selectedProduct.images.map((image, index) => {
            return (
              <img
                key={index}
                className={`w-[50px] h-[70px] object-cover rounded  border-2  mb-2 ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
                src={image.url}
                alt={image.altText}
                onClick={() => setMainimage(image.url)}
              />
            );
          })}
        </div>
        {/* Details */}
        <div className=" h-full w-[350px]">
          <h1 className="text-2xl font-bold mb-2">{ProductDetails.name}</h1>
          <p className="text-md text-gray-500 mb-1">$ 34.99</p>
          <p className="text-md text-gray-600 mb-2 line-through">
            $
            {selectedProduct.originalPrice &&
              `${selectedProduct.originalPrice}`}
          </p>
          <p className="text-sm text-gray-500 mb-3">
            {selectedProduct.description}
          </p>
          <p className="text-gray-500 text-sm">Color:</p>
          <div className="flex gap-2 mt-2">
            {selectedProduct.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full border ${
                  selectedColor === color
                    ? "border-4 border-black"
                    : "border-gray-300"
                }`}
                style={{
                  backgroundColor: color.toLocaleLowerCase(),
                  filter: "brightness(1)",
                }}
              ></button>
            ))}
          </div>
          <div className="mb-4">
            <p className="text-gray-500">Size</p>
            <div className="flex gap-2 mt-2">
              {selectedProduct.sizes.map((size) => (
                <button
                  className={` px-4 py-2 rounded border ${
                    selectedSize === size
                      ? "border-4 border-black"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSeletedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <p className="text-gray-500">Quantity:</p>
            <div className="flex items-center space-x-4 mt-2">
              <button
                className="px-2 bg-gray-200 rounded text-lg hover:bg-gray-300"
                onClick={() => setQuantity(Quantity === 1 ? 1 : Quantity - 1)}
              >
                -
              </button>
              <span className="text-lg">{Quantity}</span>
              <button
                className="px-2 bg-gray-200 rounded text-lg hover:bg-gray-300"
                onClick={() => setQuantity(Quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            disabled={isButtomDisabled}
            className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${
              isButtomDisabled
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-gray-900"
            }`}
          >
            {isButtomDisabled ? "Adding...." : "Add to cart"}
          </button>
          <div className="mt-10 text-gray-500">
            <h3 className="text-xl font-bold mb-4">Characteristics</h3>
            <table className="w-full text-left text-sm text-gray-500">
              <tbody>
                <tr>
                  <td className="py-1">Brand</td>
                  <td className="py-1">{selectedProduct.brand}</td>
                </tr>
                <tr>
                  <td className="py-1">Material</td>
                  <td className="py-1">{selectedProduct.material}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="p-20">
        <div className="mt-20">
          <h2 className="text-2xl text-center font-medium mb-4">
            You May Also Like
          </h2>
          <ProductGrid products={similarProducts} />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

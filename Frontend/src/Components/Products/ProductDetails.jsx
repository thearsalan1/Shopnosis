import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductDetails,
  fetchSimilarProducts,
} from "../../Redux/slices/productsSlice";
import { addToCart } from "../../Redux/slices/cartSlice";

const ProductDetails = ({ productId }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct, loading, error, similarProducts } = useSelector(
    (state) => state.products
  );
  const { user, guestId } = useSelector((state) => state.auth);

  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const productFetchId = productId || id;

  useEffect(() => {
    if (productFetchId) {
      dispatch(fetchProductDetails(productFetchId));
      dispatch(fetchSimilarProducts({ id: productFetchId }));
    }
  }, [dispatch, productFetchId]);

  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, [selectedProduct]);

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      toast.error("Please select a size and color before proceeding", {
        duration: 1000,
      });
      return;
    }

    setIsButtonDisabled(true);

    console.log("Dispatching addToCart with:", {
      productId: productFetchId,
      quantity,
      size: selectedSize,
      color: selectedColor,
      guestId,
      userId: user?._id,
    });

    dispatch(
      addToCart({
        productId: productFetchId,
        quantity,
        size: selectedSize,
        color: selectedColor,
        guestId,
        userId: user?._id,
      })
    )
      .then(() => {
        toast.success("Product added to the cart!", { duration: 1000 });
      })
      .finally(() => {
        setIsButtonDisabled(false);
      });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!selectedProduct) return <p>Product not found.</p>;

  return (
    <section className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto min-h-[500px]">
        {/* Thumbnail Images */}
        <div className="hidden sm:block w-[70px] pt-2">
          {selectedProduct.images?.map((image, index) => (
            <img
              key={index}
              className={`w-[50px] h-[70px] object-cover rounded border-2 mb-2 ${
                mainImage === image.url ? "border-black" : "border-gray-300"
              }`}
              src={image.url}
              alt={image.altText}
              onClick={() => setMainImage(image.url)}
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="w-[350px] mr-2">
          <img
            className="w-full h-[600px] rounded object-cover"
            src={
              mainImage || selectedProduct.images?.[0]?.url || "/fallback.jpg"
            }
            alt="Main Product"
          />
        </div>

        {/* Mobile Thumbnails */}
        <div className="md:hidden flex overflow-x-scroll space-x-4 mb-4">
          {selectedProduct.images?.map((image, index) => (
            <img
              key={index}
              className={`w-[50px] h-[70px] object-cover rounded border-2 mb-2 ${
                mainImage === image.url ? "border-black" : "border-gray-300"
              }`}
              src={image.url}
              alt={image.altText}
              onClick={() => setMainImage(image.url)}
            />
          ))}
        </div>

        {/* Product Details */}
        <div className="w-[350px]">
          <h1 className="text-2xl font-bold mb-2">{selectedProduct?.name}</h1>
          <p className="text-md text-gray-500 mb-1">
            ${selectedProduct?.price || "N/A"}
          </p>
          {selectedProduct?.originalPrice && (
            <p className="text-md text-gray-600 mb-2 line-through">
              ${selectedProduct.originalPrice}
            </p>
          )}
          <p className="text-sm text-gray-500 mb-3">
            {selectedProduct?.description}
          </p>

          {/* Color Selection */}
          <p className="text-gray-500 text-sm">Color:</p>
          <div className="flex gap-2 mt-2">
            {selectedProduct.colors?.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full border ${
                  selectedColor === color
                    ? "border-4 border-black"
                    : "border-gray-300"
                }`}
                style={{
                  backgroundColor: color.toLowerCase(),
                  filter: "brightness(1)",
                }}
              ></button>
            ))}
          </div>

          {/* Size Selection */}
          <div className="mb-4">
            <p className="text-gray-500">Size</p>
            <div className="flex gap-2 mt-2">
              {selectedProduct.sizes?.map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 rounded border ${
                    selectedSize === size
                      ? "border-4 border-black"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <p className="text-gray-500">Quantity:</p>
            <div className="flex items-center space-x-4 mt-2">
              <button
                className="px-2 bg-gray-200 rounded text-lg hover:bg-gray-300"
                onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}
              >
                -
              </button>
              <span className="text-lg">{quantity}</span>
              <button
                className="px-2 bg-gray-200 rounded text-lg hover:bg-gray-300"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            disabled={isButtonDisabled}
            className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${
              isButtonDisabled
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-gray-900"
            }`}
          >
            {isButtonDisabled ? "Adding..." : "Add to cart"}
          </button>

          {/* Characteristics */}
          <div className="mt-10 text-gray-500">
            <h3 className="text-xl font-bold mb-4">Characteristics</h3>
            <table className="w-full text-left text-sm">
              <tbody>
                <tr>
                  <td className="py-1">Brand</td>
                  <td className="py-1">{selectedProduct?.brand}</td>
                </tr>
                <tr>
                  <td className="py-1">Material</td>
                  <td className="py-1">{selectedProduct?.material}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Similar Products */}
      <div className="p-20">
        <h2 className="text-2xl text-center font-medium mb-4">
          You May Also Like
        </h2>
        <ProductGrid
          products={similarProducts}
          loading={loading}
          error={error}
        />
      </div>
    </section>
  );
};

export default ProductDetails;

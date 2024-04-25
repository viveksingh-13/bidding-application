"use client";
import { useEffect, useState } from "react";
import withPrivateLayout from "@/utils/withPrivateLayout";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

const ProductDetailPage = ({ params }: { params: { id: string | number } }) => {
  const router = useRouter();
  const query = useSearchParams();
  const currentHighestBid = query.get("currentHighestBid");
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${params.id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error: any) {
        console.error("Error fetching product:", error.message);
        setLoading(false);
      }
    };

    if (params.id) {
      fetchProduct();
    }
  }, [params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h3 className="text-center text-gray-600 text-2xl font-semibold">
        {product.title}
      </h3>
      <div className="flex justify-center">
        <div className="relative h-40 w-40 rounded-lg overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-3xl font-semibold mb-4">${product.price}</h1>
        <p className="text-gray-600">
          Current Highest Bid: ${currentHighestBid}
        </p>
        <p className="text-gray-600">{product.description}</p>
      </div>
    </div>
  );
};

export default withPrivateLayout(ProductDetailPage);

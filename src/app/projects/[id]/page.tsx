"use client";
import { useParams } from "next/navigation";
import { offerArray } from "@/constants";
import Title from "@/components/Title";
import Image from "next/image";

const OfferDetails = () => {
  const params = useParams(); // Get the dynamic route parameters
  const { id } = params;

  // Find the offer details based on the `id` from params
  const offer = offerArray.find((item) => item._id === id);

  if (!offer) {
    return <div className="py-10 px-5 text-center">Offer not found</div>;
  }

  return (
    <div className="py-10 px-5 max-w-4xl mx-auto">
      <Title className="text-3xl">{offer.title}</Title>
      <Image
        src={offer.images}
        alt={offer.title}
        width={800}
        height={400}
        className="rounded-md my-5"
      />
      <p className="text-lg text-gray-600">{offer.des}</p>
      <p className="text-base text-gray-500 mt-4">
        More details: {offer.des || "No additional details available."}
      </p>
    </div>
  );
};

export default OfferDetails;

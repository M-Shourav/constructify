"use client";
import { useParams } from "next/navigation";
import { offerArray } from "@/constants";
import Title from "@/components/Title";
import Image from "next/image";
import Container from "@/components/Container";
import Button from "@/components/ui/Button";

const OfferDetails = () => {
  const params = useParams(); // Get the dynamic route parameters
  const { id } = params;

  // Find the offer details based on the `id` from params
  const offer = offerArray.find((item) => item._id === id);

  if (!offer) {
    return <div className="py-10 px-5 text-center">Offer not found</div>;
  }

  return (
    <Container className="w-full py-10 lg:py-20 flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-10">
      <div className="w-full border border-black rounded-md">
        <Image
          src={offer?.images}
          alt="project_Images"
          className="w-full object-cover rounded-md"
        />
      </div>
      <div className="w-full flex flex-col gap-y-2">
        <Title className="md:text-3xl ">{offer?.title}</Title>
        <p>
          {offer?.des} Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Esse, non dolorum? Aliquid dolorem, eum repellendus dolores sit harum
          veniam unde nobis sequi ducimus nostrum aspernatur quibusdam quidem
          enim provident nam. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Vitae pariatur incidunt eveniet deserunt asperiores molestiae
          blanditiis molestias nam voluptas doloremque, iusto nulla suscipit in
          aut amet corrupti at eos esse?
        </p>
        <Button
          href="/"
          className="w-40 h-15 flex items-center justify-center hover:text-white"
        >
          Go To Home
        </Button>
      </div>
    </Container>
  );
};

export default OfferDetails;

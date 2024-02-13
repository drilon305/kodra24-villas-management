"use client"

import { Image as ImageType} from "@/models/room"
import Image from "next/image"
import { FC, useState } from "react";

const VillasGallery: FC<{ photos: ImageType[] }> = ({ photos }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [showModal, setShowModal] = useState(false)

  const openModal = (index: number) => {
    setCurrentPhotoIndex(index)
    setShowModal(true)
  }

  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 relative gap-5 px-3">
        <div className="h-[540px] relative rounded-2xl overflow-hidden">
          <div className="hidden md:flex justify-center items-center w-full h-full">
            <Image
              src={photos[0].url}
              alt={`Room Photo ${currentPhotoIndex + 1}`}
              className="img scale-animation cursor-pointer"
              width={150}
              height={150}
              onClick={openModal.bind(this, 0)}
            />
          </div>
          <div className="md:hidden flex justify-center items-center w-full h-full">
            <Image
              src={photos[currentPhotoIndex].url}
              alt={`Room Photo ${currentPhotoIndex + 1}`}
              className="img"
              width={150}
              height={150}
              onClick={openModal.bind(this, 0)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VillasGallery;
"use client";

import { getRoom } from "@/libs/apis";
import useSWR from "swr";
import LoadingSpinner from "../../loading";
import VillasGallery from "@/components/VillasGallery/VillasGallery";

const RoomDetails = (props: { params: { slug: string } }) => {
  const {
    params: { slug },
  } = props;

  const fetchRoom = async () => getRoom(slug);
  const { data: room, error, isLoading } = useSWR("/api/room", fetchRoom);

  if (error) throw new Error("Cannot fetch data");
  if (typeof room === "undefined" && !isLoading)
    throw new Error("Cannot fetch data");

  if (!room) return <LoadingSpinner />;

  console.log(room);

  return (
    <div>
      <VillasGallery photos={room.images} />

      <div className="container mx-auto mt-20">
        <div className="md:grid md:grid-cols-12 gap-10 px-3">
          <div className="md:col-span-8 md:w-full">
            <div>
              <h2 className="font-bold text-left text-lg md:text-2xl">
                {room.name}
              </h2>
              <div className="flex my-11">
                {room.offeredAmenities.map((amenity) => (
                  <div
                    key={amenity._key}
                    className="md:w-44 w-fit text-center px-2 md:px-0 h-20 
                  md:h-40 mr-3 bg-[#eff0f2] dark:bg-gray-800 rounded-lg grid place-content-center"
                  >
                    <i className={`fa-solid ${amenity.icon} md:text-2xl`}></i>
                    <p className="text-xs md:text-base pt-3">
                      {amenity.amenity}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mb-11">
                <h2 className="font-bold text-3xl mb-2">Description</h2>
                <p>{room.description}</p>
              </div>

              <div className="mb-11">
                <h2 className="font-bold text-3xl mb-2">Offered Amenities</h2>
                <div className="grid grid-cols-2">
                  {room.offeredAmenities.map(amenity => (
                    <div key={amenity._key} className="flex items-center md:my-0  my-1">
                      <i className={`fa-solid ${amenity.icon}`}></i>
                    <p className="text-xs md:text-base ml-2">
                      {amenity.amenity}
                    </p>
                     </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 rounded-xl shadow-lg dark:shadow dark:shadow-white sticky top-10 h-fit overflow-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;

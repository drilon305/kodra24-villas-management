import axios from "axios";
import { CreateBookingDto, Room } from "@/models/room";
import sanityClient from "./sanity";
import * as queries from './sanityQueries'



export async function getFeaturedRoom() {
    const result = await sanityClient.fetch<Room>(queries.getFeaturedRoomQuery, {}, {cache: 'no-cache'});

    return result;
}

export async function getRooms() {
    const result = await sanityClient.fetch<Room[]>(queries.getRoomsQuery, {}, {cache: 'no-cache'})
    return result;
}


export async function getRoom(slug: string) {
    const result = await sanityClient.fetch<Room>(queries.getRoom, {slug}, {cache: 'no-cache'})

    return result;
}

export const createBooking = async ({
  user,
  numberOfDays,
  checkinDate,
  checkoutDate,
  totalPrice,
  discount,
  villaRoom,
  children,
  adults,
}: CreateBookingDto) => {
  const mutation = {
    mutations: [
      {
        create: {
          _type: "booking",
          user: { _type: "reference", _ref: user },
          villaRoom: { _type: "reference", _ref: villaRoom },
          checkinDate,
          checkoutDate,
          numberOfDays,
          discount,
          totalPrice,
          adults,
          children,
        },
      },
    ],
  };

  const { data } = await axios.post(
    `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-2021/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
    mutation,
    { headers: { Authorization: `Bearer ${process.env.SANITY_STUDIO_TOKEN}` } }
  );

  return data;
};

export const updateVillaRoom = async (villaRoomId: string) => {
  const mutation = {
    mutations: [
      {
        patch: {
          id: villaRoomId,
          set: {
            isBooked: true,
          },
        },
      },
    ],
  };

  const { data } = await axios.post(
    `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-2021/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
    mutation,
    { headers: { Authorization: `Bearer ${process.env.SANITY_STUDIO_TOKEN}` } }
  );

  return data;
}
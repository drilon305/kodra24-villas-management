import { getRoom } from "@/libs/apis";
import { authOptions } from "@/libs/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import Stripe from "stripe";


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2024-04-10',
});

type RequestData = {
    checkinDate: string;
    checkoutDate: string;
    adults: number;
    children: number;
    numberOfDays: number;
    villaRoomSlug: string;

}

export async function POST(req: Request, res: Response) {
    const { checkinDate, checkoutDate, children, adults, numberOfDays, villaRoomSlug } : RequestData = await req.json();

    if(!checkinDate || !checkoutDate || adults || numberOfDays || villaRoomSlug) {
        return new NextResponse('Please all fields are required', { status: 400})
    }

    const origin = req.headers.get('origin')

    const session = await getServerSession(authOptions)

    if(!session) {
        return new NextResponse('Authentication required', { status: 400})
    }

    const userId = session.user.id;
    const formattedCheckoutDate = checkoutDate.split('T')[0]
    const formattedCheckinDate = checkinDate.split('T')[0]

    try {
        const room = await getRoom(villaRoomSlug)
        const discountPrice = room.price - (room.price / 100) * room.discount;
        const totalPrice = discountPrice * numberOfDays;
        
    } catch (error) {
        console.log('Payment failed', error)
        return new NextResponse(error, { status: 500 })
    }

}
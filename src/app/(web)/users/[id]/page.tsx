"use client"

import useSWR from "swr"
import { getUserBookings } from "@/libs/apis"
import axios from "axios";



const UserDetails = (props: { params: { id: string }}) => {
  const {params: { id: userId}} = props;

  const fetchUserBooking = async () => getUserBookings(userId)
  const fetchUserData = async () => {
    const { data } = await axios.get('/api/users')
    return data
  }

  const {data: userBookings, error, isLoading } = useSWR('/api/userbooking', )

  const {data: userData, isLoading: loadingUserData, error: errorGettingUserData} = useSWR('/api/users', fetchUserData)

  if (error || errorGettingUserData) throw new Error('Cannot fetch data');
  if (typeof userBookings === 'undefined' && !isLoading)
    throw new Error('Cannot fetch data');

  console.log(userBookings)


  return (
    <div>UserDetails</div>
  )
}

export default UserDetails
"use client"

const RoomDetails = (props: {params: {slug : string}}) => {
const {params: { slug }} = props;

console.log(slug)
  return (
    <div>RoomDetails</div>
  )
}

export default RoomDetails
"use client";



import { deleteReservation } from '../_lib/action';
import ReservationCard from './ReservationCard'
import { useOptimistic } from "react"

export default function ReservationList({ bookings }) {
   const [optimisticBookings, optimisticDelete] = useOptimistic(bookings, (curBookings, bookingId) => {
        return curBookings.filter(booking => booking.id !== bookingId);
   })

   async function handleDelete(bookingId) {
    optimisticDelete(bookingId);
    await deleteReservation(bookingId);
   }
   console.log(optimisticBookings);
   
  return (
    <ul className="space-y-6">
          {optimisticBookings?.map((booking) => (
            <ReservationCard onDelete={handleDelete} booking={booking} key={booking.id} />
          ))}
        </ul>
  )
}

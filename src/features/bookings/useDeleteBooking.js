import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";

export const useDeleteBooking = function () {
  const queryClient = useQueryClient();

  const { isLoading: isDeletingBooking, mutate: deleteBooking } = useMutation({
    mutationFn: (bookingId) => deleteBookingApi(bookingId),
    onSuccess: () => {
      toast.success("Booking successfull deleted");
      queryClient.invalidateQueries({
        active: true,
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeletingBooking, deleteBooking };
};

"use server";
import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function UpdateGuest(formData) {
  const session = await auth();
  if (!session) throw new Error("You Must Be Logged In");

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Provide a Vaild NationalID");

  const updateData = { nationality, countryFlag, nationalID };

  const { data, error } = await supabase
    .from("Guests")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) throw new Error("Guest could not be updated");

  revalidatePath("/account/profile");
}

export async function DeleteReservation(bookingId) {
  const session = await auth();
  if (!session) throw new Error("You Must be Logged In");

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);

  if(!guestBookingIds.includes(bookingId))
    throw new Error('You are not allowed to delete this booking')

  const { error } = await supabase
  .from("bookings")
  .delete()
  .eq("id", bookingId);

  if (error)
    throw new Error("Booking could not be deleted");
  revalidatePath('/account/reservations');
}

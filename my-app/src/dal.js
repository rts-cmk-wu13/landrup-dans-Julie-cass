"use server";

import { cookies } from "next/headers"
import { redirect } from "next/navigation";

 export async function getUserById(id) {
    const cookieStore = await cookies();
    if (!cookieStore.has("accessToken")) return redirect("/no-access");

    const response = await fetch(`http://localhost:4000/v1/users/${id}`);
    if(!response.ok){
        throw new Error({message: "Events could not be fetched"})
    }
const data = await response.json()
console.log("LOGIN DATA:", data)

cookieStore.set("accessToken", data.accessToken)
cookieStore.set("username", data.name)
cookieStore.set("role", data.role)

console.log("ROLE SET:", data.role)
}
 

export async function getTestimonials() {
  const response = await fetch("http://localhost:4000/api/v1/testimonials");

  console.log("STATUS:", response.status);

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  const data = await response.json();
  console.log("DATA:", data);

  return data;
}

export async function getActivities() {
  const response = await fetch(`http://localhost:4000/api/v1/activities/`)

  if (!response.ok) {
    throw new Error("Something went wrong while fetching activities.");
  }
  return await response.json()

}
export async function getActivitiesById(id) {
  const response = await fetch(`http://localhost:4000/api/v1/activities/${id}`)

  if (!response.ok) {
    throw new Error("Something went wrong while fetching activity by ID.");
  }
  return await response.json()

}


/* export async function getUsersById(id) {
const response = await fetch(`http://localhost:4000/api/v1/users/${id}`);

  if (!response.ok) {
    throw new Error("Something went wrong while fetching the user.");
  }
  const data = await response.json();
  console.log("user infomation::", data);

  return data;
}

 */
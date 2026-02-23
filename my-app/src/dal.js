"use server";

import { cookies } from "next/headers"
import { redirect } from "next/navigation";

export async function getUserById() {
    //Second line of defense (apart from proxy)
    const cookieStore = await cookies();
    //Guard clause
    if (!cookieStore.has("authToken")) return redirect("/no-access");

    const response = await fetch(`http://localhost:4000/v1/users/${id}`);
    if(!response.ok){
        throw new Error({message: "Events could not be fetched"})
    }
    const userData = await response.json();
    console.log(userData);
    
    return userData;
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
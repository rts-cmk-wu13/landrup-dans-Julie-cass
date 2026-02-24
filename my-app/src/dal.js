"use server";
import { cookies } from "next/headers"


export async function getUsersById(userId) {
  const cookieStore = await cookies()
  const authToken = cookieStore.get("authToken")
  console.log("USER ID:", userId);
  console.log("TOKEN:", authToken);

  const response = await fetch(
    `http://localhost:4000/api/v1/users/${userId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken?.value}`,
      },
    }
  );

  console.log("STATUS:", response.status);

  if (!response.ok) {
    const errorText = await response.text();
    console.log("SERVER ERROR:", errorText);
    throw new Error("Failed fetching user");
  }

  return await response.json();
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



"use server"

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

export async function getActivities(){
    const response = await fetch(`http://localhost:4000/api/v1/activities/`)

    if (!response.ok) {
        throw new Error({ message: "something went wrong" })
    }
    return await response.json()

}
export async function getActivitiesById(id) {
    const response = await fetch(`http://localhost:4000/api/v1/activities/${id}`)

    if (!response.ok) {
        throw new Error({ message: "something went wrong" })
    }
    return await response.json()

}

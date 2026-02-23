"use client"

import "./activityBox.css"
import Link from "next/link";

export default function ActivityBox({ activity }) {
  return (
    <>
      <section className="ActivitySection">
        <div className="ActivityContainer" key={activity.id}>
          <figure>
          <Link href={`/activities/${activity.id}`}>
            <img className="ActivityImage" src={activity.asset.url} alt="" />


            <div className="ActivityDescription">
              <h3 className="ActivityName">{activity.name}</h3>
              <p className="minToMaxAge">{activity.minAge} - {activity.maxAge} år</p>
            </div>
          </Link>
          </figure>
        </div>
      </section>
    </>
  )
}
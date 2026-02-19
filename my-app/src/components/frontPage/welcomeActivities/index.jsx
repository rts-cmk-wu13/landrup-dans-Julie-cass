import ActivityOne from "./activityOne";
import ActivityTwo from "./activityTwo";
import ActivityThree from "./activityThree";
import ActivityFour from "./activityFour";

import "./Activities.css"

export default function Activities() {
    return (
        <>
            <section className="ActivitiesContainer">
                     <h2 id="TeamTypes">Vores holdtyper</h2>

                <ActivityOne />
                <ActivityTwo />
                <ActivityThree />
                < ActivityFour />
            </section>
        </>
    )
}
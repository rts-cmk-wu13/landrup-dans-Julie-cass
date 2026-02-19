import ActivitiesContainer from "@/components/activitiesPage";
import { getActivities } from "@/lib/dal";

export default async function ActivitiesPage() {
    const ACTIVITY = await getActivities();



    return (

        <>
            <h1>Aktiviteter</h1>
            {ACTIVITY.map((a) => (
                <ActivitiesContainer key={a.id} activity={a} />
            ))}
        </>
    )
}
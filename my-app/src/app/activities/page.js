import ActivitiesContainer from "@/components/activitiesPage";
import NavigationMenu  from "@/components/navigatonMenu";
import { getActivities } from "@/lib/dal";

export default async function ActivitiesPage() {
    const ACTIVITY = await getActivities();

    return (

        <>
            <h1 className="ActivityTitle">Aktiviteter</h1>
            {ACTIVITY.map((a) => (
                <ActivitiesContainer key={a.id} activity={a} />
            ))}
            <NavigationMenu />
        </>
    )
}
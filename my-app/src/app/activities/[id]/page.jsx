import ActivityDetail from "@/components/activityDetail/ActivityDetail";
import NavigationMenu from "@/components/navigatonMenu";
import { getActivitiesById } from "@/lib/dal"

export default async function ActivityDetails({ params }) {

    const { id } = await params;
    const ACTIVITY = await getActivitiesById(id)
    
    return (
        <>
           <ActivityDetail ACTIVITY={ACTIVITY}/>

           <NavigationMenu />
        </>
    )
}
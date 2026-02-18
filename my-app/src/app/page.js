import FrontPageHeader from "@/components/frontPage";
import Newsletter from "@/components/newsletter";
import Activities from "@/components/welcomeActivities";


export default function Home() {
  return (
    <div>
      <main>
     <FrontPageHeader />

     <Activities />

     <Newsletter />
      </main>
    </div>
  );
}

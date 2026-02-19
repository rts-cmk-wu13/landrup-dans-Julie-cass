import Testimonials from "@/components/comments/Testimonials";
import FrontPageHeader from "@/components/frontPage";
import Newsletter from "@/components/frontPage/newsletter";
import Activities from "@/components/frontPage/welcomeActivities";


export default function Home() {
  return (
    <div>
      <main>
     <FrontPageHeader />

     <Activities />

     <Newsletter />

     <Testimonials />
      </main>
    </div>
  );
}

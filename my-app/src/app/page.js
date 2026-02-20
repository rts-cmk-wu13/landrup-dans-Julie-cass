import Testimonials from "@/components/comments/Testimonials";
import FrontPageHeader from "@/components/frontPage";
import Newsletter from "@/components/frontPage/newsletter";
import Activities from "@/components/frontPage/welcomeActivities";

import { getTestimonials } from "@/lib/dal";

export default async function Home() {
      const testimonial = await getTestimonials()
  
  return (
    <div>
      <main>
     <FrontPageHeader />

     <Activities />

     <Newsletter />

      
  <Testimonials testimonial={testimonial}/>         
 
   
      </main>
    </div>
  );
}

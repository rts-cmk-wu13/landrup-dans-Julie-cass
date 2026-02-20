import TestimonialCards from "./TestamonialCards";


export default function Testimonials({ testimonial }) {
  return (
   <>
   <section className="TestimonialSecContainer">
    <div className="TestimonialDivBox">
   <h2 className="testmonialTitle">Det siger vores kunder om os</h2>
    <TestimonialCards testimonial={testimonial} />
    </div>
    </section>
    </>
  );
}
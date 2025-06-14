import TestimonialCard from "@/components/Cards/TestimonialCard";

const testimonials = [
  {
    text: "We've been using their services for months, and the difference is incredible. Our waste is collected on time, and their eco-friendly approach aligns perfectly with our values. Highly recommended!",
    name: "Claudia Alves",
    role: "Customer",
    image: "/assets/images/testimonial-1.jpg",
  },
  {
    text: "Managing waste used to be a challenge, but this company made it seamless. Their team is professional, and their recycling initiatives make us feel good about reducing our environmental impact.",
    name: "Reese Miller",
    role: "Customer",
    image: "/assets/images/testimonial-2.jpg",
  },
  {
    text: "Their waste management service is top-notch! They offer flexible scheduling, great customer support, and reasonable pricing. I’m glad we found a reliable partner for our waste disposal needs.",
    name: "Lars Peeters",
    role: "Customer",
    image: "/assets/images/testimonial-3.jpg",
  },
  {
    text: "I love that they prioritize sustainability while ensuring excellent service. Their team is always on time, and they handle waste responsibly. It's a win-win for us and the environment!",
    name: "Shawn Garcia",
    role: "Customer",
    image: "/assets/images/testimonial-4.jpg",
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-[#f9f7f2] py-12 px-4 sm:px-6 md:px-20 text-gray-900">
      <div className="max-w-7xl mx-auto text-center">
         <h6 className="uppercase font-semibold text-[#2A4E1A] tracking-wider mb-6 sm:mb-5 text-center">
            Testimonial
          </h6>
        <h2 className="text-2xl sm:text-3xl md:text-6xl font-[600] mb-6 sm:mb-8">
          What Our Clients Say About Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}


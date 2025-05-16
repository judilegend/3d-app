"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    quote:
      "Working with this team was a game-changer for our business. The design and functionality of our new website exceeded all expectations. Their attention to detail and commitment to our vision was impressive.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, GrowthLabs",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    quote:
      "The team delivered our mobile app on time and on budget. The user experience is fantastic and our customers love it. We've seen a 40% increase in engagement since launch.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, StyleHouse",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
    quote:
      "The e-commerce platform they built for us has transformed our business. Sales are up, customer complaints are down, and we're able to manage everything easily. Highly recommended!",
    rating: 5,
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="container mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Our Clients Say
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t just take our word for it. Here&apos;s what our clients
          have to say about working with us.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-bold">Client Testimonials</h3>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              className="w-10 h-10 rounded-full p-0 flex items-center justify-center"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </Button>
            <Button
              variant="ghost"
              className="w-10 h-10 rounded-full p-0 flex items-center justify-center"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
              </svg>
            </Button>
          </div>
        </div>

        <Card className="p-8 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 relative rounded-full overflow-hidden">
              <Image
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold text-lg">
                {testimonials[activeIndex].name}
              </h4>
              <p className="text-sm text-gray-500">
                {testimonials[activeIndex].role}
              </p>
            </div>
          </div>

          <div className="mb-6">
            <svg
              className="text-gray-300 w-10 h-10 mb-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
            </svg>
            <p className="text-gray-600 text-lg italic">
              {testimonials[activeIndex].quote}
            </p>
          </div>

          <div className="flex text-yellow-400">
            {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
        </Card>

        <div className="flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === activeIndex
                  ? "bg-primary-500"
                  : "bg-gray-300 hover:bg-primary-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

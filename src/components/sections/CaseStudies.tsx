import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const caseStudies = [
  {
    title: "Modern E-Commerce Experience",
    category: "E-Commerce",
    description:
      "Revolutionizing how customers shop online with AI-powered recommendations and a seamless checkout process.",
    image: "https://images.unsplash.com/photo-1542744095-291d1f67b221",
    duration: "4 months",
  },
  {
    title: "Fitness App",
    category: "Mobile App",
    description:
      "A complete fitness solution with workout tracking, nutrition guides, and social features for motivation.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    duration: "3 months",
  },
  {
    title: "Banking Dashboard",
    category: "FinTech",
    description:
      "Secure and intuitive banking interface for managing finances, with real-time analytics and insights.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    duration: "5 months",
  },
];

export function CaseStudies() {
  return (
    <section
      id="portfolio"
      className="container mx-auto px-6 py-24 bg-gray-50 rounded-3xl"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our portfolio of successful projects that have helped
          businesses achieve their digital goals.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-900 rounded-3xl p-8 text-white relative overflow-hidden group h-[500px]">
          <Image
            src={caseStudies[0].image}
            alt={caseStudies[0].title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
          />
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 bg-primary-500 rounded-full text-sm font-medium mb-4">
                {caseStudies[0].category}
              </span>
              <h3 className="text-3xl font-bold mb-4">
                {caseStudies[0].title}
              </h3>
              <p className="mb-6 max-w-md text-white/80">
                {caseStudies[0].description}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-white/70">
                Completed in {caseStudies[0].duration}
              </span>
              <Button
                variant="ghost"
                className="text-white hover:text-primary-300 hover:bg-white/10"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  </svg>
                }
                iconPosition="right"
              >
                View Case Study
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {caseStudies.slice(1).map((study, index) => (
            <Card
              key={index}
              className="p-6 flex flex-col md:flex-row gap-6 items-center"
            >
              <div className="w-full md:w-1/3 h-40 relative rounded-xl overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="w-full md:w-2/3">
                <span className="inline-block px-2 py-1 bg-primary-100 text-primary-600 rounded-full text-xs font-medium mb-2">
                  {study.category}
                </span>
                <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {study.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">
                    Completed in {study.duration}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-10 h-10 rounded-full p-0 flex items-center justify-center"
                    aria-label={`View ${study.title} case study`}
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
            </Card>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Button
          variant="outline"
          size="lg"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
            </svg>
          }
        >
          View All Projects
        </Button>
      </div>
    </section>
  );
}

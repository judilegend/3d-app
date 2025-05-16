import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section id="home" className="container mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 text-transparent bg-clip-text mb-6 leading-tight">
            Create Beautiful Digital Experiences
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            Transform your ideas into stunning digital solutions with our
            cutting-edge design and development services. We build products that
            people love to use.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              variant="primary"
              size="lg"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.13 22.19L11.5 18.36C13.07 17.78 14.54 17 15.9 16.09L13.13 22.19M5.64 12.5L3.57 10.43C7.91 6.08 14.07 4.92 19.27 6.65L17.97 8.42C14.68 7.43 11.31 8.07 8.45 10.24L5.64 12.5M19.93 19.38L17.68 17.97L19.5 15.5L21.53 16.07L19.93 19.38M20.36 12.27L18.7 13.4C18.49 12.84 18.24 12.28 17.91 11.75L19.5 10.5L21.45 11.82C21.41 11.96 20.36 12.27 20.36 12.27Z" />
                </svg>
              }
            >
              Get Started
            </Button>
            <Button
              variant="secondary"
              size="lg"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5.14v14l11-7-11-7z" />
                </svg>
              }
            >
              Watch Demo
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                >
                  <Image
                    src={`https://randomuser.me/api/portraits/men/${
                      i + 20
                    }.jpg`}
                    alt={`User ${i}`}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div>
              <div className="font-medium">Trusted by 2,000+ users</div>
              <div className="text-sm text-gray-500">
                Join our growing community
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 bg-gradient-to-tr from-purple-500 to-primary-500 rounded-3xl p-8 text-white flex flex-col justify-center relative overflow-hidden">
          <div className="absolute w-40 h-40 bg-white/10 rounded-full -top-20 -right-20"></div>
          <div className="absolute w-60 h-60 bg-white/10 rounded-full -bottom-32 -left-32"></div>

          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-sm font-medium">
              <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-green-400"></span>
              New Feature
            </div>

            <h2 className="text-3xl font-bold mb-4">AI-Powered Design Tools</h2>
            <p className="mb-6 opacity-90">
              Create stunning designs in seconds with our new AI-powered design
              assistant.
            </p>

            <Button
              className="bg-white text-primary-600 hover:bg-white/90"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z" />
                </svg>
              }
            >
              Explore Now
            </Button>
          </div>

          <div className="absolute bottom-4 right-4 flex items-center gap-2 text-xs bg-white/20 rounded-full px-3 py-1">
            <span className="animate-ping absolute h-2 w-2 rounded-full bg-white opacity-75"></span>
            <span className="relative h-2 w-2 rounded-full bg-white"></span>
            Live Demo Available
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Target, Users, Award } from "lucide-react";

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center mt-[-.3rem]">
        <div className="absolute inset-0 z-0 ">
          <img
            src="https://utfs.io/f/i6Pi14ucLDbfBLad6w9ejpPWHL4JUhyz0iuNQnw65ldDFt9f"
            alt="Team working"
            className="w-full h-full  brightness-50 object-cover object-center "
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-5xl font-bold mb-6 font-secondary">
            About SafeCross
          </h1>
          <p className="text-xl max-w-2xl">
            We're on a mission to transform urban mobility and make cities more
            inclusive for the visually impaired community.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <Target className="h-12 w-12 text-indigo-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-4 font-secondary">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To create innovative solutions that empower visually impaired
                individuals to navigate urban environments safely and
                independently.
              </p>
            </div>

            <div>
              <Users className="h-12 w-12 text-indigo-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-4 font-secondary">
                Our Team
              </h3>
              <p className="text-gray-600">
                A dedicated group of engineers, Software, Electrical, Mechanical
                Civil and Architectural working together to create positive
                change.
              </p>
            </div>

            <div>
              <Award className="h-12 w-12 text-indigo-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-4 font-secondary">
                Our Impact
              </h3>
              <p className="text-gray-600">
                Able to create the potential to assist thousands of visually
                impaired pedestrians in navigating safely each day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://utfs.io/f/i6Pi14ucLDbfOWjhvBQ2dRc61FUGhjNg5qQDiXI0sx3m9VEL"
                alt="Our story"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 font-secondary">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6">
                Founded in 2024 through the vision of an integrated engineering
                team, SafeCross was born from a simple yet profound observation:
                traditional traffic systems often fall short of inclusivity.
                Motivated by personal experiences with visually impaired family
                members, we embarked on a mission to revolutionize urban
                navigation with accessibility at its core.
              </p>
              <p className="text-gray-600">
                Today, SafeCross stands at the forefront of smart city
                innovation, seamlessly blending IoT technology and universal
                design principles to create safer, more inclusive streets for
                everyone.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

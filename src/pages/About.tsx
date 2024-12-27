import React from "react";
import { Target, Users, Award } from "lucide-react";

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/ietp.jpg"
            alt="Team working"
            className="w-full h-full object-cover brightness-50"
          />
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
                A dedicated group of engineers, accessibility experts, and urban
                planners working together to create positive change.
              </p>
            </div>

            <div>
              <Award className="h-12 w-12 text-indigo-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-4 font-secondary">
                Our Impact
              </h3>
              <p className="text-gray-600">
                Successfully implemented in 50+ cities, helping thousands of
                visually impaired pedestrians navigate safely every day.
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
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
                alt="Our story"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 font-secondary">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6">
                Founded in 2024, SafeCross emerged from a simple observation:
                traditional traffic systems weren't serving everyone equally.
                We, inspired by personal experiences with visually impaired
                family members and relatives, set out to create a solution that
                would make urban navigation more accessible.
              </p>
              <p className="text-gray-600">
                Today, we're proud to be at the forefront of smart city
                technology, combining IoT, and universal design principles to
                create safer streets for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import { ArrowRight, Shield, Volume2, Map } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative flex items-center">
        <img
          src="https://img.freepik.com/free-vector/blind-people-with-walking-cane-concept-illustration_114360-17339.jpg"
          alt="City crossing"
          className="w-[50%] h-[50%] object-cover "
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-black">
          <h1 className="text-4xl font-semibold font-secondary mb-6">
            Smart Traffic Solutions for <br />
            Visually Impaired Pedestrians
          </h1>
          <p className="text-l mb-8 max-w-2xl">
            Revolutionizing urban mobility with modern and sensored traffic
            systems that make crossing streets safer and more accessible for the
            visually impaired community.
          </p>
          <Link
            to={"/about"}
            className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Learn More <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 font-secondary">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 font-secondary">
                Smart Detection
              </h3>
              <p className="text-gray-600">
                Advanced sensors detect visually impaired pedestrians and
                automatically adjust traffic signals, providing a 20-second
                interval for vehicles to halt. The system also offers
                sound-guided instructions to assist visually impaired
                individuals seamlessly.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Volume2 className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 font-secondary">
                Audio Guidance
              </h3>
              <p className="text-gray-600">
                Clear audio cues and voice instructions guide pedestrians safely
                across intersections.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Map className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 font-secondary">
                Connected Network
              </h3>
              <p className="text-gray-600">
                City-wide integration creates a seamless network of smart
                crossings and navigation aids.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Make Your City More Accessible?
          </h2>
          <p className="text-xl mb-8">
            Join us in creating safer streets for everyone. Contact us to learn
            how to implement SafeCross in your city.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-indigo-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
}

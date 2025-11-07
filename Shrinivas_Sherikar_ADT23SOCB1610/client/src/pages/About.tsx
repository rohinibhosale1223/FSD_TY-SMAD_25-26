
import { Link } from 'react-router-dom'
import { Users, Eye, Lightbulb, Rocket } from 'lucide-react'

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Lead Developer",
    img: "https://placehold.co/400x400/1a1a1a/a8a5ff/png?text=AJ"
  },
  {
    name: "Maria Garcia",
    role: "UX/UI Designer",
    img: "https://placehold.co/400x400/1a1a1a/a8a5ff/png?text=MG"
  },
  {
    name: "Sam Lee",
    role: "Product Manager",
    img: "https://placehold.co/400x400/1a1a1a/a8a5ff/png?text=SL"
  }
];

function About() {
  return (
    <div className="pt-36 pb-20 container mx-auto px-4 text-white">
      <div className="max-w-4xl mx-auto">
   
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About DrawKit</h1>
          <p className="text-xl text-gray-300">
            We're on a mission to make collaboration visual, intuitive, and accessible for everyone.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-semibold text-primary-custom mb-4">Our Story</h2>
            <p className="text-gray-400 mb-4">
              DrawKit started as a simple idea: what if teams could brainstorm as freely online as they do on a physical whiteboard? Frustrated by clunky and restrictive tools, our founders set out to build a platform that was fluid, fast, and, most importantly, collaborative at its core.
            </p>
            <p className="text-gray-400">
              Today, DrawKit is used by thousands of teams—from startups to Fortune 500 companies—to bring their best ideas to life.
            </p>
          </div>
          <div>
            <img 
              src="https://placehold.co/500x350/1a1a1a/a8a5ff/png?text=Our+Team" 
              className="rounded-lg shadow-2xl" 
              alt="Our team collaborating"
            />
          </div>
        </div>

        <div className="text-center mb-20">
          <h2 className="text-3xl font-semibold text-primary-custom mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
        
            <div className="bg-dark-custom p-8 rounded-lg shadow-lg border border-gray-800">
              <Eye size={40} className="text-primary-custom mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Simplicity</h3>
              <p className="text-gray-400">
                Great tools should be easy to use. We focus on an intuitive experience that gets out of your way.
              </p>
            </div>
            <div className="bg-dark-custom p-8 rounded-lg shadow-lg border border-gray-800">
              <Users size={40} className="text-primary-custom mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Collaboration</h3>
              <p className="text-gray-400">
                We believe the best ideas are built together. Our platform is designed for seamless teamwork.
              </p>
            </div>
            <div className="bg-dark-custom p-8 rounded-lg shadow-lg border border-gray-800">
              <Lightbulb size={40} className="text-primary-custom mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-400">
                We're constantly pushing boundaries to create new and better ways for you to visualize and create.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-20">
          <h2 className="text-3xl font-semibold text-primary-custom mb-12">Meet the Team</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-dark-custom p-6 rounded-lg shadow-lg border border-gray-800">
                <img 
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-700"
                />
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-primary-custom">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center bg-dark-custom border border-gray-800 p-10 rounded-lg">
           <Rocket size={48} className="text-primary-custom mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Ready to Start Drawing?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto">
            Join thousands of teams building their next big idea on DrawKit.
            Sign up for free, no credit card required.
          </p>
          <Link
            to="/register"
            className="py-3 px-8 bg-primary-custom text-black rounded-md hover:bg-opacity-90 transition-colors font-medium text-lg"
          >
            Start for Free
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
import React from 'react';
import { Award, Code, Users, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Award,
      value: "10+",
      label: "Years Experience",
      color: "text-blue-600"
    },
    {
      icon: Code,
      value: "50+",
      label: "Apps Delivered",
      color: "text-purple-600"
    },
    {
      icon: Users,
      value: "100%",
      label: "Client Satisfaction",
      color: "text-accent-600"
    },
    {
      icon: Zap,
      value: "72hrs",
      label: "Avg Delivery Time",
      color: "text-orange-600"
    }
  ];

  const values = [
    {
      title: "Speed Without Compromise",
      description: "AI accelerates development, but we never sacrifice quality. Every line of code is reviewed and optimized."
    },
    {
      title: "Transparent Process",
      description: "No black box. You're involved at every step and understand exactly what you're getting."
    },
    {
      title: "Future-Proof Technology",
      description: "We use cutting-edge tools and frameworks that will scale with your business for years to come."
    }
  ];

  return (
    <section id="about" className="section bg-gray-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="inline-block bg-accent-100 text-accent-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              About Mancini Tech
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              One Developer.
              <span className="gradient-text"> Infinite Possibilities.</span>
            </h2>
            <div className="space-y-4 text-gray-600 text-lg">
              <p>
                I'm Jon Mancini, and I've spent the last decade solving technical problems and building 
                solutions for businesses of all sizes. But traditional development was too slow and too expensive 
                for most businesses that needed custom software.
              </p>
              <p>
                Then AI changed everything. Tools like GPT-4, Lovable, and Grok now let me build in days what 
                used to take months—without sacrificing quality or customization.
              </p>
              <p>
                As a solo developer leveraging AI, I offer you something unique: <strong>the speed and cost-efficiency 
                of no-code tools combined with the flexibility and quality of custom development.</strong>
              </p>
              <p>
                You get a dedicated expert who understands your business, not a ticket in a queue. You get apps 
                that actually work, not generic templates. And you get all of this in days, not months.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 space-y-4">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats & Visual */}
          <div>
            {/* Image Placeholder */}
            <div className="bg-gradient-to-br from-primary-600 to-accent-500 rounded-3xl p-12 text-white mb-8 shadow-2xl">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                  <Code className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-2">AI-Powered Development</h3>
                <p className="text-white/80">
                  Combining human expertise with artificial intelligence to deliver exceptional results
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gray-100 flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-4">Powered By</h4>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind', 'GPT-4', 'Lovable', 'Vercel', 'Render'].map((tech, idx) => (
                  <span key={idx} className="bg-gradient-to-r from-primary-100 to-accent-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl shadow-xl p-8 max-w-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Ready to work together?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's chat about your project and see if we're a good fit
            </p>
            <button className="btn-accent">
              Schedule a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

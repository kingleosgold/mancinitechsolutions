import React from 'react';
import { Check, Zap, Star, Crown } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Discovery",
      icon: Zap,
      price: "497",
      period: "one-time",
      description: "Perfect for validating your idea before full development",
      features: [
        "AI-powered consultation",
        "Detailed requirements document",
        "Interactive prototype mockup",
        "Technology recommendations",
        "Project roadmap & timeline",
        "Budget breakdown"
      ],
      cta: "Start Discovery",
      popular: false,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      name: "Launch",
      icon: Star,
      price: "2,997",
      period: "one-time",
      description: "Full app or website ready to launch and generate revenue",
      features: [
        "Everything in Discovery",
        "Fully functional web app/website",
        "Custom design & branding",
        "Database & API integration",
        "2 rounds of revisions",
        "30 days of support",
        "First month hosting FREE"
      ],
      cta: "Launch Your App",
      popular: true,
      gradient: "from-purple-500 to-purple-600"
    },
    {
      name: "Enterprise",
      icon: Crown,
      price: "7,997",
      period: "starting at",
      description: "Complex applications with advanced features and integrations",
      features: [
        "Everything in Launch",
        "Advanced integrations",
        "Mobile app development",
        "Unlimited revisions",
        "Priority support (24/7)",
        "3 months managed hosting",
        "Ongoing maintenance included",
        "Dedicated project manager"
      ],
      cta: "Contact Sales",
      popular: false,
      gradient: "from-accent-500 to-accent-600"
    }
  ];

  const hostingPlans = [
    {
      name: "Basic",
      price: "99",
      description: "Perfect for small websites and landing pages",
      features: [
        "Up to 10,000 visitors/month",
        "50GB bandwidth",
        "SSL certificate included",
        "Daily backups",
        "Email support",
        "99.9% uptime SLA"
      ]
    },
    {
      name: "Business",
      price: "149",
      description: "Great for web apps and growing businesses",
      features: [
        "Up to 50,000 visitors/month",
        "200GB bandwidth",
        "Everything in Basic",
        "Priority support",
        "Staging environment",
        "Monthly performance reports"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "299",
      description: "For high-traffic apps and mission-critical sites",
      features: [
        "Unlimited traffic",
        "Custom infrastructure",
        "Everything in Business",
        "24/7 phone support",
        "Custom SLA agreement",
        "White-glove service"
      ]
    }
  ];

  return (
    <section id="pricing" className="section">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Transparent Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            No Hidden Fees.
            <span className="gradient-text"> Just Clear Value.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the package that fits your needs. All prices are transparent and include everything listed.
          </p>
        </div>

        {/* Development Plans */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Development Packages
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`card relative ${plan.popular ? 'ring-2 ring-primary-600 shadow-2xl scale-105' : ''}`}>
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary-600 to-accent-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-4`}>
                  <plan.icon className="w-7 h-7 text-white" />
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-gray-600 text-sm">{plan.period}</span>
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 pb-6 border-b border-gray-200">
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <Check className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full ${plan.popular ? 'btn-accent' : 'btn-secondary'}`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Hosting Plans */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
            Monthly Hosting Plans
          </h3>
          <p className="text-center text-gray-600 mb-8">
            Keep your app running smoothly with our managed hosting
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {hostingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl p-8 border-2 ${plan.popular ? 'border-primary-600' : 'border-gray-200'}`}>
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
                      Recommended
                    </span>
                  </div>
                )}
                
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h4>
                
                <div className="mb-4">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600 ml-2">/month</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-6 pb-6 border-b border-gray-200">
                  {plan.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <Check className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full ${plan.popular ? 'btn-primary' : 'btn-secondary'} text-sm py-3`}>
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bundle Discount */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">
            💰 Bundle & Save
          </h3>
          <p className="text-white/90 mb-6">
            Get your first year of hosting for just <span className="font-bold text-2xl">$99/month</span> when you bundle with any development package
          </p>
          <button className="bg-white text-primary-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors">
            Claim This Offer
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

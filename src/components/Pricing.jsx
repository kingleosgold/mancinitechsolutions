const Pricing = () => {
  const pricingTiers = [
    {
      name: "Starter Website",
      price: "$1,997",
      description: "Perfect for small businesses getting online",
      features: [
        "5-page custom website",
        "Mobile-responsive design",
        "Basic SEO optimization",
        "Contact form integration",
        "2-week delivery",
        "30-day support included"
      ],
      cta: "Get Started",
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional Website",
      price: "$2,997",
      description: "For businesses ready to grow",
      features: [
        "10-page custom website",
        "Advanced design & animations",
        "SEO optimization",
        "AI chat integration",
        "3-week delivery",
        "60-day support included"
      ],
      cta: "Most Popular",
      popular: true,
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "Custom Automation",
      price: "Starting at $5,997",
      description: "Custom business tools & solutions",
      features: [
        "Custom calculators & tools",
        "API integrations",
        "Shopify customization",
        "Business process automation",
        "Ongoing support available",
        "Timeline varies by scope"
      ],
      cta: "Let's Talk",
      popular: false,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const hostingTiers = [
    {
      name: "Basic",
      price: "$149",
      period: "/month",
      features: [
        "Reliable cloud hosting",
        "SSL certificate included",
        "Regular backups",
        "Minor updates & fixes",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      features: [
        "Everything in Basic",
        "AI chat maintenance",
        "Priority support",
        "Monthly performance reports",
        "Content updates (up to 2 hrs/mo)"
      ]
    },
    {
      name: "Enterprise",
      price: "$499",
      period: "/month",
      features: [
        "Everything in Professional",
        "Custom SLA agreement",
        "Dedicated support",
        "Advanced monitoring",
        "Unlimited minor updates"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No hidden fees. No surprises. Just straightforward pricing for quality work.
          </p>
        </div>

        {/* Development Pricing */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Website & Development
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  tier.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className={`inline-block px-6 py-2 bg-gradient-to-r ${tier.color} text-white text-sm font-bold rounded-full shadow-lg`}>
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="p-8">
                  {/* Header */}
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    {tier.name}
                  </h4>
                  <p className="text-gray-600 mb-6">
                    {tier.description}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-gray-900">
                      {tier.price}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href="#contact"
                    className={`block text-center px-6 py-4 rounded-lg font-semibold transition-all duration-200 ${
                      tier.popular
                        ? `bg-gradient-to-r ${tier.color} text-white hover:shadow-xl`
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {tier.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hosting Pricing */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Hosting & Support Plans
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {hostingTiers.map((tier, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border-2 border-gray-200 p-8 hover:border-blue-500 hover:shadow-lg transition-all duration-300"
              >
                {/* Header */}
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {tier.name}
                </h4>
                
                {/* Price */}
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900">
                    {tier.price}
                  </span>
                  <span className="text-gray-600">
                    {tier.period}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* What's Included */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Every Project Includes
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Discovery & Planning</h4>
              <p className="text-sm text-gray-600">We understand your needs before building</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Clean, Modern Code</h4>
              <p className="text-sm text-gray-600">Maintainable and scalable solutions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Training & Docs</h4>
              <p className="text-sm text-gray-600">Learn how to use and update your solution</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Post-Launch Support</h4>
              <p className="text-sm text-gray-600">We're here when you need us</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Need something custom? Let's discuss your specific requirements.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

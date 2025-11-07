
import { CheckCircle2, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    borderColor: "border-gray-700",
    highlight: null,
    ctaText: "Get Started for Free",
    ctaColor: "border border-secondary-custom text-gray-300 hover:bg-gray-700",
    ctaLink: "/register",
    planId: null,
    features: [
      "3 Boards",
      "Real-Time Collaboration",
      "Basic Drawing Tools",
      "Community Support",
      "Custom Templates",
      "Private Boards",
    ],
    available: [true, true, true, true, false, false],
  },
  {
    name: "Pro",
    price: "$12",
    period: "user/month",
    borderColor: "border-primary-custom",
    highlight: "Recommended",
    ctaText: "Start Pro Trial",
    ctaColor: "bg-primary-custom text-black hover:bg-opacity-90",
    ctaLink: "/register", 
    planId: "pro-plan-id", 
    features: [
      "Unlimited Boards",
      "Real-Time Collaboration",
      "Advanced Drawing Tools",
      "Priority Support",
      "Custom Templates",
      "Private Boards",
    ],
    available: [true, true, true, true, true, true],
  },
];

export default function PricingSection() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 justify-center lg:items-start mt-8 w-full max-w-4xl">
      {plans.map((plan) => (
        <div 
          key={plan.name} 
          className={`relative bg-dark-custom border ${plan.borderColor} rounded-xl w-full max-w-md p-6 flex flex-col min-h-[0px] shadow-lg`}
        >
          {plan.highlight && (
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 text-xs text-black font-medium rounded-full bg-primary-custom">
              {plan.highlight}
            </span>
          )}
          <h3 className="text-lg font-bold text-white">{plan.name}</h3>
          <div className="my-4">
            <span className="text-4xl font-extrabold text-white">{plan.price}</span>
            <span className="text-gray-400 text-sm ml-1">/{plan.period}</span>
          </div>
          <Link
            to={plan.ctaLink}
            className={`w-full ${plan.ctaColor} font-semibold py-2 rounded mb-5 hover:opacity-90 transition text-center`}
          >
            {plan.ctaText}
          </Link>
          
          <ul className="flex-1 space-y-3 text-gray-300 text-sm">
            {plan.features.map((feature, i) => (
              <li key={feature} className="flex items-start gap-3">
                {plan.available[i] ? (
                  <CheckCircle2 className="text-primary-custom w-5 h-5 flex-shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="text-red-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                )}
                <span className={plan.available[i] ? "" : "line-through text-gray-500"}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
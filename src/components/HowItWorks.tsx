import { Check } from "lucide-react";

const steps = [
  {
    title: "Connect to Sepolia Testnet",
    description: "Connect your wallet to Sepolia testnet to access XMRT token functionality",
  },
  {
    title: "Verify XMRT Token Holdings",
    description: "Confirm your XMRT token balance and smart contract interaction capabilities",
  },
  {
    title: "Complete Anonymous Signup",
    description: "Finish the privacy-focused signup process while maintaining your anonymity",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.title} className="flex items-start gap-4 mb-8">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Check className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
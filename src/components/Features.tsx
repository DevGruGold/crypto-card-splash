import { Wallet, Globe, Shield, Zap } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    title: "Privacy-First Transactions",
    description: "Experience anonymous transactions with XMRT tokens built for privacy and security",
    icon: Shield,
  },
  {
    title: "Decentralized Identity",
    description: "Your identity remains private while accessing global Web3 services",
    icon: Globe,
  },
  {
    title: "XMRT Token Integration",
    description: "Seamlessly interact with XMRT tokens on Sepolia testnet for true decentralization",
    icon: Wallet,
  },
  {
    title: "Testnet Ready",
    description: "Built and tested on Sepolia testnet with full smart contract integration",
    icon: Zap,
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose XMRT SignUp Card?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="border-none shadow-lg">
              <CardHeader>
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
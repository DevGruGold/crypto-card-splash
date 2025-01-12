import { Wallet, Globe, Shield, Zap } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    title: "Instant Crypto Conversion",
    description: "Spend your crypto assets instantly with real-time conversion at point of sale",
    icon: Wallet,
  },
  {
    title: "Global Acceptance",
    description: "Use your card anywhere that accepts traditional debit cards worldwide",
    icon: Globe,
  },
  {
    title: "Bank-Grade Security",
    description: "Your assets are protected with military-grade encryption and secure storage",
    icon: Shield,
  },
  {
    title: "Zero Hidden Fees",
    description: "Transparent pricing with no monthly fees and competitive exchange rates",
    icon: Zap,
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose CryptoCard?
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
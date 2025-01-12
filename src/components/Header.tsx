import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            CryptoCard
          </h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="text-sm hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm hover:text-primary transition-colors">How it works</a>
            <a href="#faq" className="text-sm hover:text-primary transition-colors">FAQ</a>
          </nav>
        </div>
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          Get Started
        </Button>
      </div>
    </header>
  );
};
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Globe, Shield, Wallet } from "lucide-react";

export const XMRTInfoDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg">
          Learn About XMRT
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Wallet className="w-6 h-6 text-primary" />
            XMRT Project Information
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">About XMRT Token</h3>
            <p className="text-sm text-muted-foreground">
              XMRT is a privacy-focused token deployed on Sepolia testnet, designed to enable 
              anonymous transactions and decentralized identity management. Built with privacy 
              as a core principle, inspired by Monero's privacy-first approach.
            </p>
          </div>
          
          <div className="grid gap-4">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <h4 className="font-medium">Privacy First</h4>
                <p className="text-sm text-muted-foreground">
                  Anonymous transactions with enhanced privacy features
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Globe className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <h4 className="font-medium">Testnet Deployment</h4>
                <p className="text-sm text-muted-foreground">
                  Currently deployed on Sepolia testnet for development and testing
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Contract Information</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Network:</span>
                <span>Sepolia Testnet</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Contract:</span>
                <div className="flex items-center gap-2">
                  <code className="text-xs bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded">
                    0x77307DFbc436224d5e6f2048d2b6bDfA66998a15
                  </code>
                  <a 
                    href="https://sepolia.etherscan.io/token/0x77307DFbc436224d5e6f2048d2b6bDfA66998a15"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button asChild className="flex-1">
              <a 
                href="https://sepolia.etherscan.io/token/0x77307DFbc436224d5e6f2048d2b6bDfA66998a15"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                View on Etherscan
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="outline" asChild className="flex-1">
              <a 
                href="https://xmrt.io"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Visit XMRT.io
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">Features</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">Security</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">About</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">Careers</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">Blog</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">Documentation</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">Help Center</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">Privacy</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">Terms</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} CryptoCard. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
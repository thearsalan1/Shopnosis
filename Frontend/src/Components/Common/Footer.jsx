import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-xs text-gray-700 border-t border-gray-300 py-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center md:text-left border-b border-gray-300">
        <div>
          <h3 className="font-bold mb-2">🧭 Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Categories</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
            <li>
              <a href="">Track Your Order</a>
            </li>
            <li>
              <a href="">Return & Refund Policy</a>
            </li>
            <li>
              <a href="">Terms & Conditions</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">📞 Customer Support</h3>
          <ul className="space-y-1">
            <li>
              <a href="">📧 support@yourstore.com</a>
            </li>
            <li>
              <a href="">☎️ +91-XXXXXXXXX</a>
            </li>
            <li>
              <a href="">🕒 Mon–Sat, 9 AM – 6 PM IST</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">🚚 Shipping & Returns</h3>
          <ul className="space-y-1">
            <li>
              <a href="">Free shipping over ₹999</a>
            </li>
            <li>
              <a href="">7-day return policy</a>
            </li>
            <li>
              <a href="">Fast delivery</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">💳 We Accept</h3>
          <ul className="space-y-1">
            <li>Visa, MasterCard, UPI, Paytm, Google Pay</li>
            <li>Cash on Delivery available</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">📱 Follow Us</h3>
          <ul className="space-y-1">
            <li>Instagram, Facebook, Twitter, Pinterest</li>
            <li>Subscribe for exclusive deals</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">🛡️ Trust & Security</h3>
          <ul className="space-y-1">
            <li>SSL Secured Checkout</li>
            <li>100% Genuine Products</li>
          </ul>
        </div>
      </div>
      <div className="mt-6 text-center text-sm">
        <h3>© 2025 Shopnosis</h3>
        <p>Designed with ❤️ in India. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

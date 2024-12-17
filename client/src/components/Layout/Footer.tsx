import { useState } from "react"
import { COMPANY_NAME } from '../../constant';
import { FaFacebook, FaTwitter, FaLinkedin, FaDribbble } from 'react-icons/fa';

const footerData = {
    description: "Combined with a handy platform and top-notch support from our in-house production team",
    resources: [
        { label: "• About", href: "/about" },
        { label: "• Contact", href: "/contact" },
        { label: "• Blog", href: "/blog" },
        { label: "• Affiliates", href: "/affiliates" },
        { label: "• Help", href: "/help" }
    ],
    primaryPages: [
        { label: "• Privacy", href: "/privacy" },
        { label: "• Press", href: "/press" },
        { label: "• Terms & Conditions", href: "/terms" },
        { label: "• Refund Policy", href: "/refund" },
        { label: "• Sitemap", href: "/sitemap" }
    ]
};

const socialLinks = [
    { icon: <FaFacebook />, href: '#' },
    { icon: <FaTwitter />, href: '#' },
    { icon: <FaLinkedin />, href: '#' },
    { icon: <FaDribbble />, href: '#' },
];

function Footer() {
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Newsletter subscription:', email);
    };

    return (
        <footer className="bg-[#0B0F19] text-white w-full">
            {/* Main Footer Section */}
            <div className="container mx-auto px-6 md:px-10 py-20 grid grid-cols-1 lg:grid-cols-4 gap-12">
                {/* Company Info */}
                <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                        <span className="text-3xl font-bold">{COMPANY_NAME}</span>
                    </div>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        {footerData.description}
                    </p>
                    <div className="flex space-x-4">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="text-gray-400 hover:text-white transition-colors p-3 rounded-full bg-gray-800 hover:bg-gray-700"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Resources</h3>
                    <ul className="space-y-3">
                        {footerData.resources.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="text-gray-400 text-lg hover:text-white transition-colors"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Primary Pages */}
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Primary Pages</h3>
                    <ul className="space-y-3">
                        {footerData.primaryPages.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="text-gray-400 text-lg hover:text-white transition-colors"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Newsletter Subscription */}
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        Stay updated with the latest features and news. Join our mailing list today!
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-wrap gap-3">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email Address"
                            className="flex-1 px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                            required
                        />
                        <button
                            type="submit"
                            className="btn px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="bg-[#05060A] py-6">
                <div className="container mx-auto px-6 md:px-10 text-center">
                    <p className="text-gray-400 text-lg font-medium">
                        © {currentYear}{' '}
                        <a
                            href="/"
                            className="text-[#7C3AED] hover:text-[#6D28D9] transition-colors"
                        >
                            AI Headshot
                        </a>
                        , Inc. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

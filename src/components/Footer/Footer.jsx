import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* College Logo */}
                    <div className="col-span-1 flex items-center justify-center md:justify-start">
                        <img className="h-12 w-auto" src="/college-logo.png" alt="College Logo" />
                    </div>

                    {/* Navigation */}
                    <div className="col-span-1 md:col-span-2 space-y-4">
                        <h4 className="text-lg font-semibold">Explore</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#home" className="text-gray-300 hover:text-white">Home</a>
                            </li>
                            <li>
                                <a href="#courses" className="text-gray-300 hover:text-white">Courses</a>
                            </li>
                            <li>
                                <a href="#admissions" className="text-gray-300 hover:text-white">Admissions</a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-span-1 md:col-span-1 space-y-4">
                        <h4 className="text-lg font-semibold">Contact Us</h4>
                        <p className="text-gray-300">123 College St, City</p>
                        <p className="text-gray-300">contact@college.com</p>
                        <p className="text-gray-300">+1 (123) 456-7890</p>
                    </div>

                    {/* Social Media Links */}
                    <div className="col-span-1 md:col-span-1 space-y-4">
                        <h4 className="text-lg font-semibold">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-white">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

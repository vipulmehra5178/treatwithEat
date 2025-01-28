// done 

const Footer = () => (
    <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h4 className="text-2xl font-bold mb-4">Eats & Treats</h4>
                    <p className="mb-4">Where Every Flavor Tells a Story</p>
                    <p>© {new Date().getFullYear()} Eats & Treats. All rights reserved.</p>
                </div>

                <div>
                    <h4 className="text-xl font-bold mb-4">Contact Us</h4>
                    <p className="mb-2">📞 Phone: (+91) 123-4567-890</p>
                    <p className="mb-2">📧 Email: info@eatsandtreats.com</p>
                    <p className="mb-2">⏰ Hours: Mon-Sun: 11:00 AM - 11:00 PM</p>
                </div>

                <div>
                    <h4 className="text-xl font-bold mb-4">Location </h4>
                    <p className="mb-2">23 Rajouri Street</p>
                    <p className="mb-2">Greater Noida</p>
                    <p className="mb-2">UP-201310 , India</p>
                </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-700 text-center">
                <p className="text-sm text-gray-400">
                    Made with ❤️ for food lovers everywhere
                </p>
            </div>
        </div>
    </footer>
);

export default Footer;
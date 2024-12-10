const LongPage = () => {
	return (
		<div className="bg-gray-100 text-gray-800">
			{/* Hero Section */}
			<header className="bg-blue-600 text-white py-16 px-4">
				<div className="max-w-7xl mx-auto text-center">
					<h1 className="text-5xl font-bold mb-4">Welcome to AwesomeApp</h1>
					<p className="text-lg mb-8">
						The ultimate solution to simplify your tasks and boost productivity.
					</p>
					<a
						href="#features"
						className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition"
					>
						Learn More
					</a>
				</div>
			</header>

			{/* Features Section */}
			<section id="features" className="py-16 px-4">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-3xl font-bold text-center mb-8">Features</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="bg-white p-6 rounded-lg shadow">
							<h3 className="text-xl font-semibold mb-4">Feature 1</h3>
							<p>Quickly organize your tasks and never miss a deadline.</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow">
							<h3 className="text-xl font-semibold mb-4">Feature 2</h3>
							<p>Collaborate with your team seamlessly and efficiently.</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow">
							<h3 className="text-xl font-semibold mb-4">Feature 3</h3>
							<p>Access your data securely from any device, anywhere.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section id="testimonials" className="bg-gray-200 py-16 px-4">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-3xl font-bold text-center mb-8">
						What Our Users Say
					</h2>
					<div className="space-y-8">
						<div className="bg-white p-6 rounded-lg shadow">
							<p className="italic">
								{
									"AwesomeApp has completely transformed the way I manage my tasks.It's intuitive and powerful."
								}
							</p>
							<div className="text-right mt-4">- Jane Doe</div>
						</div>
						<div className="bg-white p-6 rounded-lg shadow">
							<p className="italic">
								{
									"Our team productivity has skyrocketed thanks to the collaboration tools in AwesomeApp."
								}
							</p>
							<div className="text-right mt-4">- John Smith</div>
						</div>
					</div>
				</div>
			</section>

			{/* Pricing Section */}
			<section id="pricing" className="py-16 px-4">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-3xl font-bold text-center mb-8">Pricing</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="bg-white p-6 rounded-lg shadow">
							<h3 className="text-xl font-semibold mb-4">Free Plan</h3>
							<p className="text-gray-700">$0 / month</p>
							<ul className="mt-4 space-y-2">
								<li>✔ Basic features</li>
								<li>✔ Single user</li>
								<li>✖ No support</li>
							</ul>
							<button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg">
								Get Started
							</button>
						</div>
						<div className="bg-white p-6 rounded-lg shadow">
							<h3 className="text-xl font-semibold mb-4">Pro Plan</h3>
							<p className="text-gray-700">$10 / month</p>
							<ul className="mt-4 space-y-2">
								<li>✔ All features</li>
								<li>✔ Up to 5 users</li>
								<li>✔ Email support</li>
							</ul>
							<button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg">
								Choose Plan
							</button>
						</div>
						<div className="bg-white p-6 rounded-lg shadow">
							<h3 className="text-xl font-semibold mb-4">Enterprise Plan</h3>
							<p className="text-gray-700">Custom Pricing</p>
							<ul className="mt-4 space-y-2">
								<li>✔ All features</li>
								<li>✔ Unlimited users</li>
								<li>✔ 24/7 support</li>
							</ul>
							<button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg">
								Contact Sales
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* Footer Section */}
			<footer className="bg-blue-600 text-white py-8">
				<div className="max-w-7xl mx-auto text-center">
					<p>&copy; 2024 AwesomeApp. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
};

export default LongPage;

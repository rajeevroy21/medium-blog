import { Link } from "react-router-dom";
import { HomeAppbar } from "../components/Appbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Appbar */}
      <HomeAppbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
                Explore{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  ideas
                </span>{" "}
                & creativity.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600">
                Unlock stories, insights, and expertise from creators across the
                globe. Discover topics that fuel your passion.
              </p>
              <div className="mt-8 flex justify-center md:justify-start gap-4">
                <Link to={"/signin"}>
                  <button className="bg-black hover:bg-white border border-black hover:text-black text-white rounded-full px-6 py-3 text-lg transition duration-300 ease-in-out">
                    Sign in
                  </button>
                </Link>
                <Link to={"https://github.com/rajeevroy21"}>
                  <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:opacity-90 text-white rounded-full px-6 py-3 text-lg transition duration-300 ease-in-out">
                    Explore Now
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex-1 hidden md:flex justify-center">
              <img
                src="https://picsum.photos/600/400?random=1"
                alt="Inspiration"
                className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 border-t">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Discover, Connect, Grow
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            A space for curious minds to share ideas, learn from diverse voices, 
            and build meaningful connections.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">Insights</h3>
              <p className="text-gray-600">
                Fresh perspectives and practical advice you can trust.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">Voices</h3>
              <p className="text-gray-600">
                Real stories from real people, shared with authenticity.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">Connections</h3>
              <p className="text-gray-600">
                Join a community that thrives on ideas and collaboration.
              </p>
            </div>
          </div>
        </section>


        {/* Pricing Section */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
              Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Basic Plan */}
              <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-2xl font-bold mb-2">Basic</h3>
                <p className="text-gray-500 mb-4">For personal exploration</p>
                <p className="text-4xl font-extrabold mb-6">$0</p>
                <ul className="mb-6 text-gray-600 space-y-2">
                  <li>✔ Access to free content</li>
                  <li>✔ Community forums</li>
                  <li>✖ Premium insights</li>
                </ul>
                <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
                  Get Started
                </button>
              </div>
              {/* Pro Plan */}
              <div className="p-6 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl shadow-lg text-center text-white">
                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <p className="mb-4">For professionals & creators</p>
                <p className="text-4xl font-extrabold mb-6">$9/mo</p>
                <ul className="mb-6 space-y-2">
                  <li>✔ All Basic features</li>
                  <li>✔ Premium articles</li>
                  <li>✔ Direct Q&A with authors</li>
                </ul>
                <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-100">
                  Upgrade Now
                </button>
              </div>
              {/* Enterprise Plan */}
              <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <p className="text-gray-500 mb-4">For teams & organizations</p>
                <p className="text-4xl font-extrabold mb-6">$49/mo</p>
                <ul className="mb-6 text-gray-600 space-y-2">
                  <li>✔ All Pro features</li>
                  <li>✔ Team collaboration</li>
                  <li>✔ Priority support</li>
                </ul>
                <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 py-16">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-gray-900">
                What is this platform about?
              </h3>
              <p className="text-gray-600 mt-2">
                Our platform is a hub for stories, insights, and knowledge sharing
                from experts and creators around the world.
              </p>
            </div>
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-gray-900">
                Can I use it for free?
              </h3>
              <p className="text-gray-600 mt-2">
                Yes! We offer a free Basic plan with access to a variety of articles
                and community discussions.
              </p>
            </div>
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-gray-900">
                How can I upgrade to Pro?
              </h3>
              <p className="text-gray-600 mt-2">
                You can upgrade anytime through your account settings and get access
                to premium features and content.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

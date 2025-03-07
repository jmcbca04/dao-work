import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-neutral-900 py-28 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-16 md:mb-0">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Connect with <span className="text-primary">Web3</span> Talent
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 mb-10 leading-relaxed max-w-xl">
              The premier marketplace connecting DAO contributors, Web3 consultants, and crypto professionals with projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/projects" 
                className="bg-black hover:bg-gray-900 text-white font-medium px-8 py-4 rounded-full transition-all hover:shadow-lg text-center"
              >
                Find Projects
              </Link>
              <Link 
                href="/talent" 
                className="bg-transparent hover:bg-gray-100 text-gray-900 font-medium px-8 py-4 rounded-full border border-gray-200 transition-all hover:border-gray-300 text-center"
              >
                Hire Talent
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-4 md:p-6">
                <div className="rounded-xl bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 p-1">
                  <div className="bg-white rounded-lg p-4 h-80 w-64 md:h-96 md:w-80 flex items-center justify-center">
                    <div className="text-center">
                      <div className="flex justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 text-primary">
                          <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.96 49.96 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.89 50.89 0 0 0 3.102 10.08A49.98 49.98 0 0 0 2.815 10a.75.75 0 0 1-.23-1.337A60.64 60.64 0 0 1 11.7 2.805Z" />
                          <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.71 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99 1.984.788 3.904 1.82 5.736 3.094a.75.75 0 0 0 .832 0c1.832-1.274 3.752-2.306 5.736-3.094.897-.356 1.808-.686 2.73-.99Z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-medium mb-2">Portfolio Balance</h3>
                      <p className="text-3xl font-bold text-neutral-900 mb-3">$54,805.32</p>
                      <p className="text-sm text-green-600 font-medium">↑ 12.34% this week</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
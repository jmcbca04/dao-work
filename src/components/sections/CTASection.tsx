import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-32 bg-black text-white">
      <div className="container mx-auto px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-blue-400">Ready to Transform Your Web3 Career?</h2>
          <p className="text-lg mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Join the community of Web3 professionals and DAOs building the future of decentralized work.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/connect" 
              className="bg-white hover:bg-gray-100 text-black font-semibold px-10 py-4 rounded-full transition-all hover:shadow-lg text-center"
            >
              Connect Wallet
            </Link>
            <Link 
              href="/about" 
              className="bg-transparent hover:bg-white/10 text-white border border-white/20 font-semibold px-10 py-4 rounded-full transition-all hover:shadow-lg text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 
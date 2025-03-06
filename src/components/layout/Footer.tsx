import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-neutral text-black">
      <div className="container mx-auto px-4">
        <div className="footer py-10 border-b border-base-content/10">
          <div>
            <Link href="/" className="text-xl font-bold">
              <span className="text-accent">DAO</span>
              <span className="text-black">Work</span>
            </Link>
            <p className="max-w-xs mt-2 text-sm text-black opacity-80">
              The premier marketplace connecting DAO contributors, Web3 consultants, and crypto professionals.
            </p>
          </div>
          <div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-36">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Container */}
          <div className="flex-1 flex justify-center items-start">
            <div className="relative w-72 h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/zubby.jpg"
                alt="ZubbyTech Profile Picture"
                layout="fill"
                objectFit="cover"
                priority
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Text Container */}
          <div className="flex-1 space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-gray-800 font-serif">About Me</h1>
              <h2 className="text-2xl font-semibold text-gray-700">Hello I'm ZubbyTech</h2>
              
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  Full-Stack Software Engineer | Crypto Dev Partner
                </p>
                <p>
                  I turn ideas into deployable, auditable code that showcases your project's potential.
                </p>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Let's Build Something That Gets Noticed:
                  </h3>
                  <ul className="space-y-2 list-inside">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      MVP Development: Launch functional prototypes (dApp, DeFi protocol, NFT platform) in weeks
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      Code as Marketing: Clean, open-source repos that devs want to fork
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      Audit-Ready Smart Contracts: Solidity/Vyper code secure enough for Black Hat
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Why Work With Me?
                  </h3>
                  <ul className="space-y-2 list-disc list-inside pl-4">
                    <li>Portfolio-First Approach: Prioritize innovative projects</li>
                    <li>Crypto-Native Stack: React/Next.js, Solidity/Rust, Web3 integrations</li>
                    <li>Transparent Collaboration: Weekly demos, clean commits, clear docs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Buttons Container */}
            <div className="flex flex-wrap gap-4 pt-6">
              <Link href="/resume" className="px-6 py-3 bg-amber-300 hover:bg-amber-400 rounded-full font-medium transition-colors shadow-md">
                Resume
              </Link>
              <Link href="/projects" className="px-6 py-3 bg-red-300 hover:bg-red-400 rounded-full font-medium transition-colors shadow-md">
                Projects
              </Link>
              <Link href="/contact" className="px-6 py-3 bg-blue-300 hover:bg-blue-400 rounded-full font-medium transition-colors shadow-md">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
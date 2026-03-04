// pages/index.js

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <section className="hero bg-blue-600 text-white text-center p-10">
                    <h1 className="text-4xl font-bold mb-4">Quantum Lattice Token</h1>
                    <p className="text-lg mb-4">Empower your assets with quantum technology.</p>
                </section>
                <section className="features p-10">
                    <h2 className="text-3xl font-semibold mb-6">Features</h2>
                    <ul className="list-disc pl-5">
                        <li>Decentralized Governance</li>
                        <li>NFT Marketplace</li>
                        <li>Token Staking</li>
                    </ul>
                </section>
                <section className="mission p-10">
                    <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
                    <p>To revolutionize the blockchain space with innovative solutions.</p>
                </section>
            </main>
            <Footer />
        </div>
    );
}

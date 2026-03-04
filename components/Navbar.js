import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/marketplace">Marketplace</Link></li>
        <li><Link to="/staking">Staking</Link></li>
        <li><Link to="/governance">Governance</Link></li>
        <li><Link to="/whitepaper">White Paper</Link></li>
        <li><Link to="/roadmap">Roadmap</Link></li>
      </ul>
      <button>Connect Wallet</button>
    </nav>
  );
};

export default Navbar;
import React from 'react';

const Marketplace = () => {
    // Sample data for featured NFTs
    const featuredNFTs = [
        { id: 1, title: 'NFT Art 1', image: 'url_to_image_1', price: 1.5 },
        { id: 2, title: 'NFT Art 2', image: 'url_to_image_2', price: 2.0 },
        { id: 3, title: 'NFT Art 3', image: 'url_to_image_3', price: 3.5 },
    ];

    const handleTrade = (id) => {
        console.log(`Trading NFT with ID: ${id}`);
        // Add trading functionality here
    };

    return (
        <div>
            <h1>Featured NFTs</h1>
            <div className="nft-list">
                {featuredNFTs.map((nft) => (
                    <div className="nft-item" key={nft.id}>
                        <img src={nft.image} alt={nft.title} />
                        <h2>{nft.title}</h2>
                        <p>Price: {nft.price} ETH</p>
                        <button onClick={() => handleTrade(nft.id)}>Trade</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marketplace;
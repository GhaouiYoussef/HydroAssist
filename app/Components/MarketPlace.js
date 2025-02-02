import React, { useState } from 'react';
import lettuceImage from "../statics/lettuce.jpeg"
import pepperImage from '../statics/pepper.jpeg';
import basilImage from '../statics/basil.jpg';
import cucumbersImage from '../statics/cucumber.jpeg';
import spinachImage from '../statics/spinach.webp';
import broccoliImage from '../statics/brocoli.jpg';
import Image from 'next/image'
const MarketPlace = () => {
    const [offers, setOffers] = useState([
        { id: 1, title: 'John Doe', description: '200 kg of Lettuce', price: 2000, image: lettuceImage, rating: 4.5 },
        { id: 2, title: 'Jane Smith', description: '50 kg of Pepper', price: 200, image: pepperImage, rating: 4.0 },
        { id: 3, title: 'Michael Johnson', description: '150 kg of Basil', price: 300, image: basilImage, rating: 4.8 },
        { id: 5, title: 'David Brown', description: '75 kg of Cucumbers', price: 150, image: cucumbersImage, rating: 3.9 },
        { id: 6, title: 'Sarah Wilson', description: '120 kg of Spinach', price: 240, image: spinachImage, rating: 4.7 },
        { id: 8, title: 'Anna White', description: '60 kg of Broccoli', price: 180, image: broccoliImage, rating: 4.6 },
    ]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Market Place</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {offers.map(offer => (
                    <li key={offer.id} className="p-4 border rounded-lg shadow-md flex flex-col">
                        <Image src={offer.image} alt={offer.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                        <div className="flex-1">
                            <h2 className="text-xl font-semibold">{offer.title}</h2>
                            <p className="text-gray-700">{offer.description}</p>
                            <p className="text-green-600 font-bold">Price: ${offer.price}</p>
                            <div className="flex items-center">
                                <span className="text-yellow-500">{'★'.repeat(Math.floor(offer.rating))}</span>
                                <span className="text-gray-400">{'★'.repeat(5 - Math.floor(offer.rating))}</span>
                                <span className="ml-2 text-gray-600">{offer.rating}</span>
                            </div>
                            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg">Contact Seller</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MarketPlace;

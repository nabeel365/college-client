import React from 'react';

const Reviews = () => {
    // Sample reviews data (you can replace it with actual data)
    const reviews = [
        {
            name: "John Doe",
            college: "Example University",
            reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac aliquam magna.",
            rating: 4.5,
        },
        {
            name: "Jane Smith",
            college: "Another College",
            reviewText: "Vivamus nec orci eu tellus ultrices vestibulum. Sed viverra sem vel dui varius.",
            rating: 5.0,
        },
        {
            name: "Michael Johnson",
            college: "ABC College",
            reviewText: "In hac habitasse platea dictumst. Sed porttitor ullamcorper neque sit amet efficitur.",
            rating: 4.0,
        },
        {
            name: "Emily Adams",
            college: "XYZ University",
            reviewText: "Integer nec leo vestibulum, euismod erat in, euismod augue.",
            rating: 3.5,
        },
        {
            name: "William Clark",
            college: "University of Science",
            reviewText: "Fusce in ultrices mi. Maecenas id dui facilisis, malesuada felis a, feugiat ex.",
            rating: 4.8,
        },
        {
            name: "Sophia Lee",
            college: "Global College",
            reviewText: "Donec eu libero eget quam varius accumsan et a ex. Ut pellentesque ac odio sit amet facilisis.",
            rating: 4.2,
        },
    ];

    return (

        <div>

<h2 className="text-2xl font-semibold mb-4">College Reviews</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews.map((review, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">{review.name}</h3>
                    <p className="text-sm mb-1">{review.college}</p>
                    <p className="mb-4">{review.reviewText}</p>
                    <div className="flex items-center">
                        <div className="text-yellow-500 mr-2">
                            {/* Assuming rating is out of 5 */}
                            {Array.from({ length: 5 }).map((_, i) => (
                                <svg
                                    key={i}
                                    className={`w-5 h-5 fill-current ${
                                        i < review.rating ? 'text-yellow-500' : 'text-gray-400'
                                    }`}
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 1c-.553 0-1 .447-1 1v7H2c-.553 0-1 .447-1 1v2c0 .553.447 1 1 1h7v7c0 .553.447 1 1 1s1-.447 1-1v-7h7c.553 0 1-.447 1-1v-2c0-.553-.447-1-1-1h-7V2c0-.553-.447-1-1-1zm0 2h7l.001 7H10V3zm-8 8V4H3v7h7V8H5V6h7c1.104 0 2 .896 2 2v2c0 1.104-.896 2-2 2H5z"
                                    />
                                </svg>
                            ))}
                        </div>
                        <span className="text-sm text-gray-500">
                            {review.rating.toFixed(1)}
                        </span>
                    </div>
                </div>
            ))}
        </div>

        </div>
    );
};

export default Reviews;

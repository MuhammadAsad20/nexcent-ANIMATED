import React from 'react';
import Logo1 from "../assets/Images/Logo1.png";
import Logo2 from "../assets/Images/Logo2.png";
import Logo3 from "../assets/Images/Logo3.png";
import Logo4 from "../assets/Images/Logo4.png";
import Logo5 from "../assets/Images/Logo5.png";
import Logo6 from "../assets/Images/Logo6.png";

function Customers() {
    const icons = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];

    return (
        <section className="text-gray-600 body-font">
            <div className="max-w-7xl mx-auto px-5 py-24 flex flex-col items-center md:flex-row md:items-start text-gray-500 font-semibold">

                {/* Image Section */}
                <div className="lg:max-w-xs lg:w-1/5 md:w-1/6 w-1/3 mb-10 md:mb-0">
                    {/* If you want to add an image here, you can add it inside this div */}
                </div>

                {/* Text Content */}
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <p className="mb-8 leading-relaxed">
                        Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                    </p>
                    <h1 className="title-font sm:text-2xl text-5xl mb-4 font-medium text-lime-600">
                        Tim Smith
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        British Dragon Boat Racing Association
                    </p>

                    {/* Logo Grid */}
                    <div className="max-w-2xl w-full">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-6">
                            {icons.map((icon, index) => (
                                <div key={index} className="py-6 flex justify-center">
                                    <img
                                        src={icon}
                                        alt={`logo-${index + 1}`}
                                        className="w-12 h-12 object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Meet All Customers */}
                    <div className="flex items-center w-full mt-6 justify-center md:justify-start">
                        <a
                            href="#"
                            className="text-lime-600 font-medium cursor-pointer hover:underline flex items-center"
                        >
                            <span>Meet all customers</span>
                            <span className="text-2xl ml-1">→</span>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Customers;

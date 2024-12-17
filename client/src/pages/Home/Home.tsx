import { useState, useEffect } from "react";
import Header from '../../components/Layout/Header'
import Footer from "../../components/Layout/Footer"
import { Image } from '../../types/types';
import { logos } from '../../components/logoData';
import { FaDownload } from 'react-icons/fa';
import imageService from "../../services/image.service";
import "./custom.css"

const SAMPLE_IMAGES = [
    { url: '/images/1.jpg', prompt: 'Autumn leaves in abstract style' },
    { url: '/images/2.jpg', prompt: 'Melting golden sculpture' },
    { url: '/images/3.jpg', prompt: 'Colorful fantasy castle' },
    { url: '/images/4.jpg', prompt: 'Surreal landscape with floating elements' }
];

const contentText = `With our AI, you can create never before seen headshots for new purposes.`;

function Home() {

    const [images] = useState<Image[]>(SAMPLE_IMAGES);
    const [goTop, setGoTop] = useState(false);

    const [inputText, setInputText] = useState('');

    const generateImage = async () => {
        imageService.generateImage({inputText});
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Enables smooth scrolling
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setGoTop(true);
            } else {
                setGoTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <Header />
            <div className="content-section">
                <div className="container-wrapper">
                    <div className="text-section">
                        <div className="text-[#6600FF] text-lg lg:text-xl">Instant Headshot</div>
                        <div className="text-2xl font-semibold lg:text-[60px] lg:leading-[64px]">
                            AI <span className="text-[#6600FF]">Headshots</span> Generator
                        </div>
                        <p className="text-base text-gray-500 lg:text-xl">
                            Convert words into an headshot in mere seconds with the Image Generator. Type a detailed description.
                        </p>
                        <div className="input-part">
                            <input
                                type="text"
                                placeholder="Describe what you want see."
                                className="input input-bordered input-lg rounded-full w-full hover:border-[#6600FF]"
                                value={inputText}
                                onChange={(ev) => {
                                    setInputText(ev.target.value);
                                }}
                            />
                            <button className="input-part-button btn-lg rounded-full hover:bg-[#6D28D9]"
                                onClick={generateImage}
                            >
                                Generate
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 px-4 lg:pl-[60px] sm:px-6">
                        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4">
                            <img
                                src="/images/shape-1.png"
                                alt="Generated artwork"
                                className="absolute w-200 h-200 object-cover left-[50.5%] top-[4%] z-[-2] hidden md:block"
                            />

                            <img
                                src="/images/shape-2.png"
                                alt="Generated artwork"
                                className="absolute w-200 h-200 object-cover right-[14%] top-[17%] z-[-2] hidden md:block"
                            />
                            {images.map((image, index) => (
                                <div key={index} className="rounded-lg overflow-hidden shadow-lg transition-transform">
                                    <img
                                        src={image.url}
                                        alt="Generated artwork"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="logo-slider lg:flex flex-wrap  px-4 sm:px-6">
                    <div className="slider-track flex flex-wrap justify-around">
                        {logos.map((logo, index) => (
                            <div key={index} className="slide aspect-square flex items-center justify-center">
                                <img
                                    src={logo.src}
                                    alt={logo.name}
                                    className="logo-image w-full h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="how-it-works-section">
                    <div className="mx-auto px-4 sm:px-2">
                        <div className="text-center">
                            <span className="text-purple-600 font-medium">HOW IT WORKS</span>
                            <h2 className="text-4xl font-bold mt-2">How to Generate Headshot</h2>

                            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-20 mt-12">
                                <div className="text-center">
                                    <div className="relative block bg-[#F9F6FF] rounded-[10px] p-[40px] mb-[32px] h-[180px]">
                                        <span className="sm:overflow-hidden h-[100px] block bg-white rounded-[5px] shadow-[0px_10px_50px_0px_rgba(7,2,74,0.1)] p-[20px] text-left text-[15px]">
                                            AI Content Generator Tool creates content
                                            for a wide range professional needs. From
                                            headlines to entire articles
                                        </span>
                                    </div>
                                    <h3 className="text-xl sm:text-lg font-bold mb-4">Type the Prompt</h3>
                                    <p className="text-sm text-gray-600">{contentText}</p>
                                </div>

                                <div className="text-center">
                                    <div className="relative block bg-[#F9F6FF] rounded-[10px] p-[40px] mb-[32px] h-[180px]">
                                        <div className="h-[100px] relative block bg-white rounded-[5px] shadow-[0px_10px_50px_0px_rgba(7,2,74,0.1)] p-[20px] text-left">
                                            <span className=" grid place-items-center text-[18px] font-medium p-[14px_30px] w-full border border-1 border-[#6600FF] rounded-[5px]">
                                                Generate Headshot
                                            </span>
                                            <span className="absolute right-[20px] bottom-[3px] w-[40px] h-[45px] bg-[url('/src/assets/icon-1.png')] bg-no-repeat" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl sm:text-lg font-bold mb-4">Click on Generate</h3>
                                    <p className="text-sm text-gray-600">{contentText}</p>
                                </div>

                                <div className="text-center">
                                    <div className="relative block bg-[#F9F6FF] rounded-[10px] p-[40px] mb-[32px] h-[180px]">
                                        <div className="h-[100px] block bg-white rounded-[5px] shadow-[0px_10px_50px_0px_rgba(7,2,74,0.1)] text-left">
                                            <img src="/images/working-1.jpg" alt="Generated artwork" className="w-full h-full object-cover rounded-[5px]" />
                                            <button className="absolute flex items-center justify-around bg-[#6600FF] inline-block left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30px] h-[30px] leading-[30px] text-center rounded-full text-white">
                                                <FaDownload />
                                            </button>
                                        </div>
                                    </div>
                                    <h3 className="text-xl sm:text-lg font-bold mb-4">Download Image</h3>
                                    <p className="text-sm text-gray-600">{contentText}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div>
                <h3>Generated Image:</h3>
                <img src={imageUrl} alt="Generated Headshot" style={{ width: '300px', borderRadius: '10px' }} />
            </div> */}

            <div>
                {goTop && (
                    <button
                        className="btn btn-circle btn-inline top-button"
                        onClick={scrollToTop}
                    >
                        Top
                    </button>
                )}
            </div>
            <Footer />
        </>
    )
}

export default Home;

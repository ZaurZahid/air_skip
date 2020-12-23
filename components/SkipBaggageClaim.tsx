import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SkipBaggageClaim: React.FC = () => {
    return (
        <div className="flex flex-wrap pb-40 text-dark">
            <div className="w-full md:w-1/2 px-8 md:pl-16 lg:pl-32 xl:pl-64">
                <p
                    className="pt-24 text-5xl md:text-giant"
                    style={{ fontFamily: 'Gilroy', fontWeight: 600, lineHeight: 1 }}>
                    Skip Baggage Claim
                </p>
                <div className="flex">
                    <p
                        className="mt-4 mr-1 text-base md:text-xl"
                        style={{ fontFamily: 'SegoeScript', fontWeight: 700 }}>
                        Avoid The Crowd, Prevent The Spread
                    </p>
                    <img src='/images/virus.svg' style={{ height: 48 }} />
                </div>
                <p className="mt-10" style={{ fontFamily: 'Gilroy', fontSize: 20 }}>
                    Stop wasting time &amp; effort at baggage claim.
                    Meet your items at your home, hotel, airbnb, or any destination in
                    <b style={{ color: '#00ff44' }}> under an hour.</b>
                </p>
                <div className="flex mt-6 flex-wrap">
                    <input
                        className="m-2 ml-0 pl-4 flex-grow"
                        style={{
                            fontFamily: 'Gilroy', fontSize: 18,
                            height: 51, borderRadius: 5, outline: 'none',
                            boxShadow: '0px 4px 26px rgba(0, 0, 0, 0.05)'
                        }}
                        placeholder='Enter email'
                    />
                    <button
                        className="m-2 ml-0 flex-grow"
                        style={{
                            fontFamily: 'Gilroy',
                            fontSize: 18,
                            height: 51,
                            color: '#1E3944',
                            opacity: 0.4,
                            outline: 'none',
                            backgroundColor: 'white',
                            borderRadius: 5,
                            boxShadow: '0px 4px 26px rgba(0, 0, 0, 0.05)'
                        }}>
                        <FontAwesomeIcon
                            icon={faSearch}
                            size="lg"
                            style={{ color: '#200E32' }}
                            className="mr-3"
                        />
                        Preferred airport
                    </button>
                </div>
                <div className='w-full flex justify-center'
                    style={{ position: 'relative', paddingTop: 53 }}>
                    <svg
                        style={{
                            width: 112,
                            height: 112,
                            stroke: '#51E59E',
                            strokeWidth: 2,
                            fill: 'none',
                            position: 'absolute',
                            left: '50%',
                            transform: 'translate(-50%, 0)',

                        }}
                    >
                        <path d=" M 1 56 A 55 55 0 0 1 111 56" />
                    </svg>
                    <button
                        className="mx-auto rounded-full bg-dark text-white mt-2"
                        style={{
                            fontFamily: 'Gilroy',
                            fontSize: 18,
                            width: 90,
                            height: 90,
                            outline: 'none',
                            marginTop: 11,
                            zIndex: 99,
                            boxShadow: '0px 13px 26px #1E3944'

                        }}>
                        Early Access
                    </button>
                </div>
            </div>
            <div className="w-full md:w-1/2 mt-4 flex justify-end" style={{ position: 'relative' }}>
                <img
                    src="/images/baggage.png"
                    style={{ position: 'absolute', left: '50%', transform: 'translate(-50%, 0)', maxHeight: 768 }}
                />
                <img src="/images/decoration.svg" />

            </div>
        </div>
    )
}

export default SkipBaggageClaim
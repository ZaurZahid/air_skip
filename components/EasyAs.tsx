import React from 'react'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const EasyAs: React.FC = () => {
    return (
        <div className='text-dark pb-8'>
            <div className="flex justify-center mt-8 flex-wrap">
                <p
                    className="text-4xl  md:text-large"
                    style={{ fontFamily: 'SegoeScript', fontWeight: 700 }}
                >
                    Easy as&nbsp;
                </p>
                <div className="flex">
                    {["Scan", "Swipe", "Skip"].map((value, index) => (
                        <div key={index}>
                            <p
                                className="text-4xl md:text-large"
                                style={{ fontFamily: 'SegoeScript', fontWeight: 700 }}
                            >
                                {index + 1}{index < 2 ? ',' : ''}&nbsp;
                            </p>
                            <p
                                className="text-xl md:text-2xl"
                                style={{ fontFamily: 'SegoeScript', fontWeight: 700 }}
                            >
                                {value}{index < 2 ? ',' : ''}&nbsp;
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-wrap justify-around">
                <div className="flex flex-col justify-between my-24 mx-4">
                    <p
                        className="text-giant md:text-extreme"
                        style={{ fontFamily: 'Gilroy', fontWeight: 400 }}
                    >
                        01
                    </p>
                    <div>
                        <p
                            style={{ fontFamily: 'Gilroy', fontWeight: 600, fontSize: 20 }}
                        >
                            Where should we deliver your items?
                        </p>
                        <div className="border-b-2 border-gray-300 flex items-center" >
                            <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" style={{ color: '#E01933' }} />
                            <input
                                style={{ fontFamily: 'Gilroy', outline: 'none' }}
                                placeholder="Enter delivery address"
                                className="p-4 flex-grow bg-transparent"
                            />
                        </div>
                    </div>
                </div>
                <img src="/images/scan.png" style={{ maxHeight: 768 }} />
                <div className="mt-24 mx-4">
                    <p
                        className="text-large md:text-ultra"
                        style={{ fontFamily: 'Gilroy', fontWeight: 600 }}
                    >
                        Scan
                    </p>
                    <p
                        style={{ fontFamily: 'Gilroy', fontWeight: 500, fontSize: 24 }}
                    >
                        Uploading a screenshot of your<br /> digital boarding pass to scan it.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default EasyAs
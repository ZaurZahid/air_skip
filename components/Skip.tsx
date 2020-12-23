import React from 'react'

const Skip: React.FC = () => {
    return (
        <div className="text-dark flex flex-wrap">
            <div
                className="pt-8 md:pt-16 lg:pt-24 pl-4 md:pl-16 w-full md:w-1/4"
                style={{ position: 'relative' }}
            >
                <div>
                    <p
                        className="text-large md:text-ultra"
                        style={{ fontFamily: 'Gilroy', fontWeight: 600 }}
                    >
                        Skip
                    </p>
                    <p style={{ fontFamily: 'Gilroy', fontWeight: 500, fontSize: 24 }}>
                        Skip baggage claim, meet your items at your destination with real time monitoring.
                    </p>
                </div>

                <img src="/images/group.png" className="hidden md:block" style={{ position: 'absolute', left: '20%' }} />
                <img src="/images/group.png" className="block md:hidden" />
                <p
                    className="text-right text-giant md:text-extreme md:pt-32 lg:pt-56 xl:pt-64 pr-2"
                    style={{ fontFamily: 'Gilroy', fontWeight: 400 }}
                >
                    03
                </p>
            </div>
            <div className="w-full md:w-3/4" style={{ background: 'linear-gradient(to right, rgba(241,245,246,1) 0%, rgba(241,245,246,0) 15%, rgba(241,245,246,0) 100%), url(\'/images/map.png\')', height: 947, maxWidth: 1182 }} />
        </div>
    )
}

export default Skip
import React from 'react'

const Swipe: React.FC = () => {
    return (
        <div className='text-dark flex flex-wrap mt-16 justify-around pb-16'>
            <div className="my-24 mx-4">
                <p
                    className="text-large md:text-ultra"
                    style={{ fontFamily: 'Gilroy', fontWeight: 600 }}
                >
                    Swipe
                </p>
                <p
                    style={{ fontFamily: 'Gilroy', fontWeight: 500, fontSize: 24 }}
                >
                    Let us know many items we'll be<br /> picking up, and simply swipe to skip the<br /> crowd and hassle of baggage claim.
                </p>
            </div>
            <img src="/images/swipe.png" style={{ maxHeight: 768 }} />
            <div className="flex items-end">
                <p
                    className="text-giant md:text-extreme"
                    style={{ fontFamily: 'Gilroy', fontWeight: 400 }}
                >
                    02
                </p>
            </div>
        </div>
    )
}

export default Swipe
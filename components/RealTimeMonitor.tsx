import React from 'react'

const RealTimeMonitor: React.FC = () => {
    return (
        <div className="text-dark flex flex-wrap justify-center mt-48 pb-8">
            <img src="/images/monitor.png" style={{ maxHeight: 712 }} />
            <div className="flex flex-col justify-center w-full md:w-1/3 p-4 md:p-0">
                <p
                    className="text-5xl md:text-ultra"
                    style={{ fontFamily: 'Gilroy', fontWeight: 600, lineHeight: 1.3 }}
                >
                    Real time monitoring.
                </p>
                <p style={{ fontFamily: 'Gilroy', fontWeight: 500, fontSize: 24 }}>
                    Get step-by-step real time notifications of where your
                    items are. Rest assured your items will get to you safely
                    and on time.
                </p>
            </div>
        </div>
    )
}

export default RealTimeMonitor
import React from 'react';

const CompanyStars = () => {
    const companies = [
        { name: "Google", top: "15%", left: "5%", rotate: "-5deg", opacity: 0.5 },
        { name: "Amazon", top: "10%", left: "25%", rotate: "3deg", opacity: 0.4 },
        { name: "Nvidia", top: "8%", left: "80%", rotate: "-2deg", opacity: 0.5 },
        { name: "Apple", top: "18%", left: "85%", rotate: "6deg", opacity: 0.45 },
        { name: "Meta", top: "35%", left: "2%", rotate: "-4deg", opacity: 0.4 },
        { name: "Microsoft", top: "45%", left: "90%", rotate: "2deg", opacity: 0.45 },
        { name: "OpenAI", top: "25%", left: "40%", rotate: "-3deg", opacity: 0.5 },
        { name: "Tesla", top: "60%", left: "8%", rotate: "5deg", opacity: 0.4 },
        { name: "Samsung", top: "80%", left: "88%", rotate: "-2deg", opacity: 0.35 },
        { name: "Intel", top: "70%", left: "15%", rotate: "5deg", opacity: 0.4 },
        { name: "TSMC", top: "55%", left: "80%", rotate: "-3deg", opacity: 0.5 },
        { name: "ASML", top: "90%", left: "40%", rotate: "4deg", opacity: 0.35 },
        { name: "Qualcomm", top: "40%", left: "70%", rotate: "-5deg", opacity: 0.4 },
        { name: "IBM", top: "85%", left: "5%", rotate: "2deg", opacity: 0.35 },
        { name: "Adobe", top: "22%", left: "90%", rotate: "-4deg", opacity: 0.4 },
        { name: "Salesforce", top: "65%", left: "90%", rotate: "3deg", opacity: 0.35 },
        { name: "Oracle", top: "50%", left: "15%", rotate: "6deg", opacity: 0.4 },
        { name: "Broadcom", top: "75%", left: "60%", rotate: "-3deg", opacity: 0.35 },
        { name: "Cisco", top: "30%", left: "95%", rotate: "4deg", opacity: 0.4 },
        { name: "AMD", top: "5%", left: "40%", rotate: "-2deg", opacity: 0.5 },
    ];

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 font-handwriting text-gray-400 select-none h-full">
            {companies.map((c, i) => (
                <div
                    key={i}
                    className="absolute text-xl md:text-3xl font-bold transition-opacity duration-1000 ease-in-out hover:opacity-80 hover:text-white cursor-default"
                    style={{
                        top: c.top,
                        left: c.left,
                        transform: `rotate(${c.rotate})`,
                        opacity: c.opacity,
                        zIndex: 0
                    }}
                >
                    {c.name}
                </div>
            ))}
        </div>
    );
};

export default CompanyStars;

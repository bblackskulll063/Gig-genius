import React from 'react'

const ProfileItems = [
    {
        image: "profile1.png",
        name: "Barack Obama",
        status: "DAD, HUSBAND, PRESIDENT, CITIZEN",
    },
    {
        image: "profile2.png",
        name: "Michael Chapon",
        status: "NOVELIST, SCREENWRITER, AND COLUMNIST",
    },
    {
        image: "profile3.png",
        name: "Camille Fournier",
        status: "ENGINEER, CTO, AND AUTHOR",
    },
    {
        image: "profile4.png",
        name: "Carvell Wallace",
        status: "NEW YORK,TIMES BESTSELLING AUTHOR AND PODCASTER",
    },
    {
        image: "profile5.png",
        name: "Devon Price",
        status: "SOCIAL PSYCHOLOGIST AND AUTHOR",
    },
    {
        image: "profile6.png",
        name: "Susan Orlean",
        status: "WRITER FOR THE NEW YORKER, AUTHOR",
    },
]
const Networks = () => {
    return (
        <div className='px-10 bg-black text-white'>
            <div className="grid md:grid-cols-2 sm:grid-cols-1">
                <h1 className='pt-5 md:text-7xl text-5xl md:w-2/3'>Join a network of curious minds.</h1>
                <div className='p-8'>
                    <hr />
                    {ProfileItems.map((profile,index) => (
                        <div key={index} className='flex border-b py-1'>
                            <img src={profile.image} alt="" className='rounded-full object-cover h-12 w-12 p-1 mr-2 ' />
                            <div className='py-1'>
                                <h2 className='text-lg'>{profile.name}</h2>
                                <p className='text-xs'>{profile.status}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Networks

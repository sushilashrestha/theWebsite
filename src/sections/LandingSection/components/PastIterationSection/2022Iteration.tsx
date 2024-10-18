import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
    CoinSparkle,
    DiamondSword,
    NepalCity,
    ClickArea,
    Book
} from '@/components/Assets';

const Rounds = [
    { title: "Preliminary", icon: ClickArea },
    { title: "AR Hunt", icon: NepalCity }
]

const Stats = {
    year: "2022",
    title: "AR Treasure Hunt V1",
    prizePool: "10,000",
    participants: "100+",
    college: "10+"
}

export default function Iteration22() {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="bg-orange-900 md:p-8 text-white">
            <h2 className="text-4xl md:text-7xl font-bold mb-1">{Stats.year}</h2>
            <p className="text-xl md:text-5xl mb-24 text-[#FEA52A]">({Stats.title})</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-[#702412] border-none col-span-2 md:col-span-3 relative p-4 h-36 sm:h-52 rounded-lg flex">
                    <img src={CoinSparkle} alt="Prize" className="absolute top-[-40%] right-10 self-end w-48 sm:w-80 h-auto" />
                    <div className="flex flex-col justify-end h-full">
                        <p className="text-3xl text-[#F79F29]">Total Prize Pool</p>
                        <p className="text-3xl md:text-8xl font-bold text-[#F79F29]">
                            NRs.<span className='text-[#FFD219]'> {Stats.prizePool}</span>+
                        </p>
                    </div>
                </div>

                <div className="bg-[#04312B] border-none col-span-1 mt-16  sm:mt-24 md:mt-0 flex items-center justify-center rounded-lg relative p-4 h-32 sm:h-52">
                    <img src={DiamondSword} alt="Participants" className="absolute top-[-50%] w-24 h-24 sm:w-48 sm:h-48" />
                    <div className="flex flex-col justify-end h-full">
                        <p className="text-2xl text-[#30D3BB]">Participants</p>
                        <p className="text-5xl md:text-7xl font-bold text-[#B1FCFA]">{Stats.participants}</p>
                    </div>
                </div>

                <div className="bg-black border-none col-span-1 mt-16 sm:mt-24 md:hidden flex items-center justify-center rounded-lg relative p-4 h-32 sm:h-52">
                    <img src={Book} alt="Participants" className="absolute top-[-50%] w-24 h-24 sm:w-48 sm:h-48" />
                    <div className="flex flex-col justify-end h-full">
                        <p className="text-2xl text-[#30D3BB]">College/Uni</p>
                        <p className="text-5xl md:text-7xl font-bold text-[#B1FCFA]">{Stats.college}</p>
                    </div>
                </div>
            </div>

            <div className="md:block hidden">
                <h3 className="text-5xl md:text-7xl font-bold mb-32 text-[#F79F29]">The <span className='text-[#FFD219]'>Three</span> Rounds</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 z-30">
                    {Rounds.map((round, index) => (
                        <div className='relative'>
                            <img src={round.icon} alt={round.title} className="absolute top-[-45%] left-1/2 transform -translate-x-1/2 z-0 max-w-[200px] h-auto opacity-90" />
                            <div key={index} className="bg-[#702412] relative border-none rounded-lg h-52 p-4 z-10">
                                <h4 className="text-3xl font-bold mb-2 text-[#FFDDBD] z-10">{round.title}</h4>
                                <hr className='bg-[#FFDDBD] h-[2px]' />
                            </div>
                        </div>
                    ))}
                </div>
                <Card className="bg-[#702412] border-none mt-4">
                    <CardContent className="p-4">
                        <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 text-[#FFDDBD]">Some Details</h4>
                        <p className="text-base sm:text-lg md:text-xl text-[#FFDDBD]">
                            AR Treasure Hunt combines the excitement of a traditional treasure hunt with the immersive experience of Augmented Reality. Participants use their smartphones or AR devices to find virtual clues, solve puzzles, and interact with digital objects that are overlaid on real-world locations.
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="md:hidden">
                <Button
                    onClick={() => setShowDetails(!showDetails)}
                    className="w-full bg-yellow-400 text-black hover:bg-yellow-500 mt-4"
                >
                    {showDetails ? 'Hide full details' : 'Read full details'}
                </Button>

                {showDetails && (
                    <div className="mt-4">
                        <h3 className="text-2xl font-bold text-yellow-400 mb-24 sm:mb-36">The Three Rounds</h3>
                        <div className="space-y-36">
                            {Rounds.map((round, index) => (
                                <div className='relative'>
                                    <img src={round.icon} alt={round.title} className="absolute top-[-60%] sm:top[-20%] left-1/2 transform -translate-x-1/2 z-0 max-w-[200px] sm:max-w-[300px] h-auto opacity-90" />
                                    <div key={index} className="bg-[#702412] relative border-none rounded-lg h-44 sm:h-56 p-4 z-10">
                                        <h4 className="text-3xl font-bold mb-2 text-[#FFDDBD] z-10">{round.title}</h4>
                                        <hr className='bg-[#FFDDBD] h-[2px]' />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Card className="bg-[#702412] border-none mt-4">
                            <CardContent className="p-4">
                                <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 text-[#FFDDBD]">Some Details</h4>
                                <p className="text-base sm:text-lg md:text-xl text-[#FFDDBD]">
                                    AR Treasure Hunt combines the excitement of a traditional treasure hunt with the immersive experience of Augmented Reality. Participants use their smartphones or AR devices to find virtual clues, solve puzzles, and interact with digital objects that are overlaid on real-world locations.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                )}
            </div>
        </div>
    );
}
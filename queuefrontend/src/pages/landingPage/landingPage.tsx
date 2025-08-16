import spotifyLogo from '../../images/Spotify_Primary_Logo_RGB_Green-300x300.png'
export default function LandingPage(){
    return(
        <div className="bg-gradient-to-br from-stone-950 to-zinc-900 h-screen w-screen h-auto flex flex-col align-items-center">
            <div className="flex flex-col justify-content-center  w-screen">
                <h1 className="text-green-800 text-[6rem] text-shadow-lg text-shadow-pink-600 ">Find Your Next Song</h1>
                <h2 className="text-green-800 text-[5rem] text-shadow-md text-shadow-green-600">Find new songs to add to the queue.</h2>

            </div>
            <div className="flex flex-col h-[40%] justify-between items-center w-screen">
                <img className='w-[10%] h=[10%]' src={spotifyLogo}></img>
                <div>
                    <p className="text-white font-bold text-[1.5rem]">Queue uses your relevent Spotify listening data to bring you self-tailored suggestions.</p>
                    <p className="text-white font-bold text-[1.5rem]">By clicking the button below you allow authorize Queue to access this data.</p>
                </div>
                <button className="h-[20%] w-[25%] rounded-full bg-gradient-to-br shadow-green-800 shadow-md from-stone-950 to-zinc-900"><p className="text-white font-bold text-[1.5rem]">Give Access</p></button>
            </div>
        </div>
    )
}
import Profile from "./Profile";
import Verse from "./Verse";
import Avatar from "../assets/Avatar.png";

function Hero() {
    return (    
        <div className="relative text-light">
            <div className="absolute top-0 left-0 w-full bg-[url('/src/assets/HeroBackgroundImage.png')] bg-cover bg-no-repeat h-60 bg-center rounded-b-2xl"></div>
            <div className="relative z-10 px-5 pt-8 flex flex-col gap-8">
                <Profile 
                    greeting='Good Morning' 
                    name=' Akhi | Ukhti 👋🏻' 
                    avatar={Avatar} 
                />
                <Verse
                    verse="“He said: ‘Therein you shall live, and therein you shall die, and from it you shall be brought out (i.e. resurrected).’ ”"
                    surah="Al-A’raaf (7:25)"
                /> 
            </div>
        </div>
    );
}

export default Hero;
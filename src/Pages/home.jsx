import Navbar from "../components/homepage/Navbar";
import AdBar from "../components/homepage/AdBar";
import HouseCard from "../components/homepage/HouseCard";
import MainCard from "../components/homepage/MainCard";
import ReasonForCard from "../components/homepage/ReasonForCard";
import RecommandCard from "../components/homepage/RecommandCard"
import Announce from '../components/homepage/Announce'
import Footer from '../components/homepage/Footer'

const Home=()=>{
    return (
        <>
            <Navbar/>
            <main>
                <AdBar/>
            </main>
            <HouseCard/>
            <MainCard/>
            <ReasonForCard/>
            <RecommandCard/>
            <Announce/>
            <Footer/>
        </>
    )
}

export default Home;
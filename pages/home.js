import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import Movies from "../components/Movies/Movies";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";

function Main() {
    return (
        <main>
            <Hero />
            <Movies />
        </main>
    );
}
 
function Home() {
    return(
        <div>
            <Navbar />
            <Main />
            <Footer /> 
            <AddMovieForm />
        </div>
    );
};

export default Home;
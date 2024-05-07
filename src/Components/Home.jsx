import filmData from "../utils/filmData";
import Card from "./Card";
const Home = () => {
    console.log(filmData);
    return (
        <>
            <div className="flex justify-center items-center  flex-col gap-10">
            {
                    filmData.map(film => (
                        <Card key={film.id} imgUrl={film.Poster} Title={film.Title} Year={film.Year} runtime={film.Runtime}
                            plot={film.Plot} actors={film.Actors} genres={film.Genre} display={film.Images} />
                    ))
                }
            </div>
        </>
    )
}
export  default Home;
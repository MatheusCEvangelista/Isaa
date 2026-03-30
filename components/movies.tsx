import { movies } from "@/data/movies"

export default function MoviesList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {movies.map((movie, index) => (
        <div key={index} className="rounded-xl overflow-hidden shadow">
          <img src={movie.image} alt={movie.title} />
          <p className="text-center mt-2">{movie.title}</p>
        </div>
      ))}
    </div>
  )
}
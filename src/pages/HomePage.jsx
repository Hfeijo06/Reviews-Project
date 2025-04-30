import { react } from "react";
import Navbar from "../components/Navbar";
import CardReviews from "../components/CardReviews";
import AddReviews from "../components/btnAddReviews";

function HomePage() {
  const reviews = [
    {
      title: "Filme Horrivél",
      author: "@Henrique Feijó",
      content:
        "O filme em questão é o 'Até o Último Homem', cujo o enredo é forçado e mal feito!",
      rating: 2,
    },
    {
      title: "Review do filme Matrix",
      author: "@neo",
      content: "Um clássico da ficção científica, com ótimos efeitos.",
      rating: 5,
    },
    {
      title: "Review do livro JavaScript",
      author: "@devguru",
      content: "Um guia essencial para programadores iniciantes.",
      rating: 4,
    },
  ];

  return (
    <div>
      <Navbar />
      <AddReviews />
      <div className="flex-row w-full h-screen justify-center items-center text-center bg-gray-200 pt-18">
        <h1 className="text-4xl font-bold text-black mb-2">
          Reviews mais recentes
        </h1>
        <p className="text-lg text-gray-500">
          Veja o que os outros estão dizendo sobre seus produtos favoritos!
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 p-2">
          {reviews.map((review, index) => (
            <CardReviews
              key={index}
              title={review.title}
              author={review.author}
              content={review.content}
              rating={review.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;

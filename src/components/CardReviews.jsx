function CardReviews({ author, title, content, rating }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-5">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-gray-500">by {author}</p>
      <div className="flex items-center justify-center mt-2">
        {Array(rating)
          .fill("★")
          .map((star, index) => (
            <span key={index} className="text-yellow-500">
              {star}
            </span>
          ))}
      </div>
      <p className="mt-2">{content}</p>
    </div>
  );
}

export default CardReviews;

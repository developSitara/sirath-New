import React, { useState } from "react";
import ReactRating from "react-rating";
import { FaStar } from "react-icons/fa";


const ReviewCard = ({ userImg, userName, profession, comment, img ,rating}) => {
  return (
    <div className="w-full  border-b border-gray-200 pb-4 mb-4 flex flex-col">
      {/* User Info */}
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
          <img
            src={userImg}
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-semibold">{userName}</p>
          <p className="text-sm text-gray-500">{profession}</p>
        </div>
      </div>

      {/* Star Rating */}
      <div className="flex items-center mt-2">
        <ReactRating
          className="flex items-center justify-center gap-5"
          initialRating={rating}
          readonly
          emptySymbol={<FaStar size={20} className="text-gray-300" />}
          fullSymbol={<FaStar size={20} className="text-blue" />}
        />
      </div>

      {/* Comment */}
      <p className="mt-2 text-gray-700">{comment}</p>

      {/* Review Images */}
      {img.length > 0 && (
        <div className="flex space-x-2 mt-3">
          {img.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Review"
              className="w-16 h-16 rounded-md object-cover"
            />
          ))}
        </div>
      )}
    </div>
  );
};

const ReviewSection = ({ product }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const reviewsPerPage = 3;
//   const totalPages = 4;

//   const indexOfLastReview = currentPage * reviewsPerPage;
//   const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
//   const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  return (
    <div className="w-full mt-10 flex flex-col ">
      {/* Render Current Page Reviews */}
      {product.map((review, index) => (
        <ReviewCard
          userImg={review.userImg}
          userName={review.userName}
          profession={review.profession}
          comment={review.comment}
          img={review.img}
          rating={review.rating}
        />
      ))}

      {/* Pagination */}
      {/* <div className=" space-x-2 mt-5">
                <button
                    className={`px-3 py-1 border rounded-full ${currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-blue border-blue hover:bg-blue hover:text-white"
                        }`}
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                >
                    ‹
                </button>

                {[1, 2, 3, 4].map((num) => (
                    <button
                        key={num}
                        className={`px-3 py-1 border rounded-full ${currentPage === num ? "bg-blue text-white" : "border-gray-600 text-gray-600 hover:bg-gray-200"
                            }`}
                        onClick={() => setCurrentPage(num)}
                    >
                        {num}
                    </button>
                ))}

                <button
                    className={`px-3 py-1 border rounded-full ${currentPage === totalPages ? "text-gray-600 cursor-not-allowed" : "text-blue border-blue hover:bg-blue hover:text-white"
                        }`}
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                >
                    ›
                </button>
            </div> */}
    </div>
  );
};

export default ReviewSection;

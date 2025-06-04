import { reviews } from "../constants";
import { star } from "../assets/icons";

const CustomerReviews = () => {
  return (
    <section id="customer-reviews" className="max-container">
      <div className="flex flex-col items-center">
        <h3 className="text-4xl font-palanquin font-semibold text-center">
          What Our <span className="text-coral-red">Customers</span> Say?
        </h3>
        <p className="info-text max-w-lg text-center">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
      <div className="flex w-full max-lg:flex-col justify-evenly flex-1">
        {reviews.map((review) => {
          return (
            <div className="flex flex-col items-center mt-20 w-full">
              <img
                src={review.imgURL}
                alt=""
                width={120}
                height={120}
                className="rounded-full"
              />
              <p className="max-w-sm text-slate-gray text-xl leading-8 text-center mt-5">
                {review.feedback}
              </p>
              <div className="flex items-center justify-start gap-2 mt-3">
                <img src={star} alt="" className="w-6 h-6" />
                <span className="font-montserrat text-slate-gray text-xl">
                  {"(4.5)"}
                </span>
              </div>
              <h3 className="mt-3 text-2xl font-bold font-montserrat">
                {review.customerName}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CustomerReviews;

import "./indexReview.css";

function IndexReview({}) {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      ratings: 5,
      comment:
        "I love this event booking app! It's so user-friendly and efficient. I've used it to book tickets for concerts and sports events, and it always delivers. The interface is sleek, and I appreciate the option to choose my seats. Plus, the notifications keep me updated about any changes. Highly recommended",
    },
    {
      id: 2,
      name: "Jane Doe",
      ratings: 5,
      comment:
        "Overall, a solid event booking app. It's easy to find and purchase tickets for various events. The only reason I didn't give it five stars is that the search function could use some improvement. Sometimes it's challenging to filter events based on location and date. But, once you find what you're looking for, the booking process is smooth.",
    },
    {
      id: 3,
      name: "Lisa Turner",
      ratings: 4,
      comment:
        "I've been using this app for a while now, and it's been a reliable source for booking tickets to my favorite events. The layout is intuitive, and the variety of events available is impressive. However, I wish they had more filters to refine the search results. Still, it's a go-to app for event enthusiasts like me.",
    },
    {
      id: 4,
      name: "Anonymous",
      ratings: 3,
      comment:
        "Decent app, but it has its quirks. I've encountered some glitches when trying to complete transactions, and customer support wasn't always quick to respond. It's good for booking events, but it needs improvement in terms of technical stability and support.",
    },
    {
      id: 5,
      name: "Richard White",
      ratings: 5,
      comment:
        "I've had a good experience with this app for the most part. It's convenient and easy to use. The only downside is the service fees, which can sometimes feel a bit high. But if you're willing to overlook that, it's a handy app for booking tickets to your favorite events.",
    },
  ];

  const createReviewCarousel = () => {
    return reviews.map((review) => {
      let stars = "";
      for (let i = 0; i < review.ratings; i++) {
        stars = `${stars}★`;
      }
      return (
        <div key={review.id} className="index-review">
          <p>&ldquo;{review.comment}&rdquo;</p>
          <div>
            {<p>{stars}</p>}
            <p>-{review.name}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="review-container">
      <h2>What people say about us</h2>
      <div className="review-carousel-container">{createReviewCarousel()}</div>
    </div>
  );
}

export default IndexReview;

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const createCheckoutSession = async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "buy me a coffee",
            },
            unit_amount: 1000,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:5173",
      cancel_url: "http://localhost:5173",
    });

    console.log(session); // Log the session object here

    // Send the session URL to the client
    res.json({ url: session.url });
  } catch (error) {
    console.error("Error creating Stripe checkout session:", error.message);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  createCheckoutSession,
};
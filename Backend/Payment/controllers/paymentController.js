const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const createCheckoutSession = async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "visa payment",
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

    console.log(session);

    res.json({
      url: session.url,
      message: "Payment session created successfully",
    });
  } catch (error) {
    console.error("Error creating Stripe checkout session:", error.message);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  createCheckoutSession,
};

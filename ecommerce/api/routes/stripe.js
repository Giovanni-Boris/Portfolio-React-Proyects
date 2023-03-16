const router = require("express").Router();

//doesn not work procces.env.STRIPE KEY
//console.log(process.env.STRIPE_KEY);
const stripe = require("stripe")(
  "sk_test_51Ma7znGAinVgIbiYAL3DXz5flFBTrBPqxqaOrDbW6rzJBZ2qcTyw0j2VcdK0NCzsWKuNjjitO7DPt744VRXxHT8i00eqWiH6zT"
);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        console.log(stripeErr);
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;

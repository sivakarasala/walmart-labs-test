const pricingData = {
  pricing: {
    subtotal: 102.96,
    savings: 3.85,
    tax: 8.92,
    total: 108.03,
    zip: 85050
  },
  itemDetails: {
    item_name:
      "Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red",
    quantity: 1
  }
};

const cartReducer = (state = pricingData, action) => {
  return state;
};

export default cartReducer;

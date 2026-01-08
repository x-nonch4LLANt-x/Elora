const products = [
  {
    id: "1",
    name: "ELORA Mini Pro",
    price: 25e3,
    category: "Mini",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCU2DYwp5YFA7yBXyWGZlrWehmFEzVn8-3izSaANqc--HquHgTpSBaXTxS4JzAfO5uBj85ENMS64siSSMsp1orgF40S_xqJYXYvTB1SgUXEaeEKb2ctTGtWgtSHN0b-aICLaFa71oV28SHL6Tsp8eFaPm17Po09QtDQxw4tjQEy8mHNBuNcZeRLy111UtQ7SRGxxYio_ogQLNk6Fy3qL3x7WhSXhXrsUP_Ap-0SUJVf_jYfkKa5nhZPCicdD9o2Y6ikPLY-Q5wxlGc",
    description: "Compact & Bright"
  },
  {
    id: "2",
    name: "Smart Beam 4K",
    price: 55e3,
    category: "Smart",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLD__HVtjt8jaqYCVN9-eXbVIbpGoOVPZe-Nl5UmHMJrCElGiXYtasqA4eQDhX2p_PUxUGAbqkkOPNzXPRXr91jMWvij_yF_kxLz2x2qWqAlmV02JBI62eo_8Qnk7BwDJWgc1H-IhSVxpWoww2A2GDQO7G4-Gh6b9Wb83tkupS2ESh3vVAGX_tq5kW8RxFnLRHwxCZYoTmOXI7FNIXKNeGBMo874AFohHHfSGcObdLkyLJxbjE2v92BCVA53Q2APoa7tlxbD5nJnY",
    description: "Ultra HD Home"
  },
  {
    id: "3",
    name: "Outdoor Cinema X",
    price: 45e3,
    category: "Outdoor",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCU2DYwp5YFA7yBXyWGZlrWehmFEzVn8-3izSaANqc--HquHgTpSBaXTxS4JzAfO5uBj85ENMS64siSSMsp1orgF40S_xqJYXYvTB1SgUXEaeEKb2ctTGtWgtSHN0b-aICLaFa71oV28SHL6Tsp8eFaPm17Po09QtDQxw4tjQEy8mHNBuNcZeRLy111UtQ7SRGxxYio_ogQLNk6Fy3qL3x7WhSXhXrsUP_Ap-0SUJVf_jYfkKa5nhZPCicdD9o2Y6ikPLY-Q5wxlGc",
    description: "Weather Resistant"
  }
];
async function getProducts() {
  await new Promise((resolve) => setTimeout(resolve, 50));
  return products;
}
const load = async () => {
  const products2 = await getProducts();
  return {
    products: products2
  };
};
export {
  load
};

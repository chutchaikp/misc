import './hover.scss';
const Hover = () => {
  const data = [
    {
      id: 1,
      img: 'https://data.mecshopping.it/imgprodotto/womens-boyfriend-model-jeans-with-embroidered-pockets_608552_zoom.jpg',
      img2: 'https://data.mecshopping.it/imgprodotto/womens-boyfriend-model-jeans-with-embroidered-pockets_608360_zoom.jpg',
      title: 'Long Sleeve Graphic T-Shirt',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: 'https://data.mecshopping.it/imgprodotto/womens-boyfriend-model-jeans-with-embroidered-pockets_608552_zoom.jpg',
      img2: 'https://data.mecshopping.it/imgprodotto/womens-boyfriend-model-jeans-with-embroidered-pockets_608360_zoom.jpg',
      title: 'Long Sleeve Graphic T-Shirt',
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: 'https://data.mecshopping.it/imgprodotto/womens-boyfriend-model-jeans-with-embroidered-pockets_608552_zoom.jpg',
      img2: 'https://data.mecshopping.it/imgprodotto/womens-boyfriend-model-jeans-with-embroidered-pockets_608360_zoom.jpg',
      title: 'Long Sleeve Graphic T-Shirt',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: 'https://data.mecshopping.it/imgprodotto/womens-boyfriend-model-jeans-with-embroidered-pockets_608552_zoom.jpg',
      img2: 'https://data.mecshopping.it/imgprodotto/womens-boyfriend-model-jeans-with-embroidered-pockets_608360_zoom.jpg',
      title: 'Long Sleeve Graphic T-Shirt',
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 5,
      img: 'https://data.mecshopping.it/imgprodotto/womens-boyfriend-model-jeans-with-embroidered-pockets_608552_zoom.jpg',
      img2: 'https://data.mecshopping.it/imgprodotto/womens-boyfriend-model-jeans-with-embroidered-pockets_608360_zoom.jpg',
      title: 'Long Sleeve Graphic T-Shirt',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 6,
      img: 'https://data.mecshopping.it/imgprodotto/womens-boyfriend-model-jeans-with-embroidered-pockets_608552_zoom.jpg',
      img2: 'https://data.mecshopping.it/imgprodotto/womens-boyfriend-model-jeans-with-embroidered-pockets_608360_zoom.jpg',
      title: 'Long Sleeve Graphic T-Shirt',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 7,
      img: 'https://data.mecshopping.it/imgprodotto/womens-boyfriend-model-jeans-with-embroidered-pockets_608552_zoom.jpg',
      img2: 'https://data.mecshopping.it/imgprodotto/womens-boyfriend-model-jeans-with-embroidered-pockets_608360_zoom.jpg',
      title: 'Long Sleeve Graphic T-Shirt',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];

  return (
    <div className="hover">
      <h1> Hover </h1>
      <div className="card">
        <div className="images">
          <img src={data[0].img} alt="" className="firstImg" />
          <img src={data[0].img2} alt="" className="secondImg" />
        </div>
      </div>
    </div>
  );
};
export default Hover;

const { MensModel } = require("../Model/Men.model");

const getMenData = async (req, res) => {
  const { brand, color, categories, price } = req.query;
  if (brand) {
    const menData = await MensModel.find({ brand: brand });
    res.send(menData);
  } else if (color) {
    const menData = await MensModel.find({ color: color });
    res.send(menData);
  } else if (categories) {
    const menData = await MensModel.find({ categories: categories });
    res.send(menData);
  } else if (price) {
    const menData = await MensModel.find({ price: price });
    res.send(menData);
  } else {
    const menData = await MensModel.find();
    res.send(menData);
  }
};

const filterdata = async (req, res) => {
  const { brand, color, categories, price } = req.query;
  const filterData = await MensModel.find({
    $or: [
      { brand: brand },
      { color: color },
      { categories: categories },
      { price: price },
    ],
  });
  res.send(filterData);
};

const getBrand = async (req, res) => {
  const brandData = await MensModel.find({ brand: req.params.brand });
  res.send(brandData);
};

const postMensData = async (req, res) => {
  const {
    Idno,
    categories,
    title,
    price,
    gender,
    sizes,
    description,
    brand,
    color,
    discount,
    off_price,
    images,
    rating,
  } = req.body;
  const data = new MensModel(req.body);
  if (
    Idno &&
    categories &&
    title &&
    price &&
    gender &&
    sizes &&
    description &&
    brand &&
    color &&
    discount &&
    off_price &&
    images &&
    rating
  ) {
    data.save();
    res.send("Posted Successfully");
  } else {
    console.log(req.body);
    res.send("Please send all the Fields");
  }
};

const MensDataController = {
  getMenData,
  filterdata,
  getBrand,
  postMensData,
};

module.exports = { MensDataController };

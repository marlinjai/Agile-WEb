exports.sendReqParam = (req, res) => {
  let veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
};
exports.index = (req, res) => {
  res.sendFile("index.html", { root: "./views" });
};

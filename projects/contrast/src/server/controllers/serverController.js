const list = [
  {
    name: "iPhone XS Max",
    img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    id: 100,
    pros: [{description : "Video", idTwo: 0}, {description : "iMessage", idTwo: 1}, {description : "Build Quality", idTwo: 2}, {description : "Ease-of-use", idTwo: 3}, {description : "Ecosystem", idTwo: 4}],
    cons: [{description : "Price", idTwo: 0}, {description : "No Expandable Storage", idTwo: 1}, {description : "No Headphone Jack" ,idTwo: 2}]
  },

  {
    name: "Google Pixel 3",
    img:
      "https://images.unsplash.com/photo-1511373277659-c604b1f2d61e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
    id: 101,
    pros: [{description : "Best Camera", idTwo: 0}, {description : "Stock Android", idTwo: 1}, {description : "Fastest Updates", idTwo: 2}],
    cons: [{description : "3 Gigs of ram", idTwo: 0}, {description : "No headphone Jack", idTwo: 1}, {description : "Thicc Bezels", idTwo: 2}]
  },

  {
    name: "Samsung Galaxy S10",
    img:
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    id: 103,
    pros: [{description :  "Best Screen", idTwo: 0}, {description : "Up-to 12 gb RAM", idTwo: 1}, {description : "Expandable Storage", idTwo: 2}, {description : "In-desplay Fingerprint Scan" ,idTwo: 3}],
    cons: [{description : "Slow Updates", idTwo: 0}, {description : "Easily damaged (curved screen)" ,idTwo: 1}]
  },

  {
    name: "One Plus 7 Pro",
    img:
      "data:image/jpeg;base64,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",
    id: 104,
    pros: [{description : "Fastest Screen Refresh", idTwo: 0}, {description : "12 GB Ram" ,idTwo: 1}, {description : "No Notch",idTwo: 2}, {description : "Fast Updates" ,idTwo: 3}, {description : "Cheaper", idTwo: 4}],
    cons: [{description : "Pop-up Cam", idTwo: 0}, {description : "No Wireless Charging", idTwo: 1}, {description : "Easily Damaged (curved screen)" ,idTwo: 2}]
  }
];

let id = 0;

module.exports = {
  fullList(req, res) {
    res.status(200).send(list);
  },

  addListItem(req, res) {
    console.log(req.body)
    let { name, img } = req.body;
    let newItem = {
      name,
      img,
      id,
      pros: [""],
      cons: [""]
    };
    id++;
    list.unshift(newItem);
    res.status(200).send(list);
  },

  deleteItem(req, res) {
    let { id } = req.params;
    let index = list.findIndex(listVar => listVar.id === +id);
    if (list[index].id === +id) {
      list.splice(index, 1);
    }
    //   index !== -1 && list.splice(index,1)
    res.status(200).send(list);
  },

//   deletePro(req, res) {
//     let { id } = req.params;
//     let index = list.findIndex(listVar => listVar.id === +id);
//     if (list[index].id === +id) {
//       list[index].pros.splice(index, 1);
//     }
//     //   index !== -1 && list.splice(index,1)
//     res.status(200).send(list);
//   }
};

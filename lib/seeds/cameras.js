module.exports = db => {
  const cameras = [{
      "name": "Nikon D850",
      "price": 3033.04,
      "picture": "https://images-na.ssl-images-amazon.com/images/I/71HJnJrxzEL._SX425_.jpg",
      "rating": 3,
      "inCart": false,
      "onSale": true
    },
    {
      "name": "Sony Alpha A7R III",
      "price": 1173.46,
      "picture": "https://www.bhphotovideo.com/images/images2500x2500/sony_ilce7rm2_b_alpha_a7r_iii_mirrorless_1369441.jpg",
      "rating": 4,
      "inCart": false,
      "onSale": true
    },
    {
      "name": "Fujifilm X-T2",
      "price": 3105.86,
      "picture": "https://images-na.ssl-images-amazon.com/images/I/81CUJvIrFML._SX425_.jpg",
      "rating": 1,
      "inCart": false,
      "onSale": false
    },
    {
      "name": "Nikon D3400",
      "price": 2854.78,
      "picture": "http://imaging.nikon.com/lineup/dslr/d3400/img/d3400_01_01.png",
      "rating": 5,
      "inCart": false,
      "onSale": false
    },
    {
      "name": "Olympus OM-D E-M10 Mark III",
      "price": 2714.61,
      "picture": "https://www.bhphotovideo.com/images/images2000x2000/olympus_v207072su010_om_d_e_m10_mark_iii_1351009.jpg",
      "rating": 4,
      "inCart": false,
      "onSale": false
    },
    {
      "name": "Panasonic Lumix ZS100",
      "price": 3924.20,
      "picture": "https://www.dpreview.com/files/p/E~products/panasonic_dmczs100/shots/8ae99cfa353d477fbf090a00d5b7d9b5.png",
      "rating": 2,
      "inCart": false,
      "onSale": false
    },
    {
      "name": "Canon EOS Rebel T7i",
      "price": 3907.96,
      "picture": "https://shop.usa.canon.com/wcsstore/ExtendedSitesCatalogAssetStore/eos-t7i-18-55_1_xl.jpg",
      "rating": 4,
      "inCart": false,
      "onSale": true
    }
  ]

  cameras.forEach(camera => db.cameras.insert(camera))
}

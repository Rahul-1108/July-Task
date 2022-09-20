$(document).ready(function(){

let products = [{
    "name": "T-shirts",
    "category": "Clothes",
    "price": "1000",
    "img": "https://cdn.pixabay.com/photo/2014/08/26/21/48/sweatshirts-428607__340.jpg",
  },
  {
    "name": "pent-T shirts",
    "category": "Clothes",
    "price": "1500",
    "img": "https://media.istockphoto.com/photos/confident-and-handsome-picture-id494349086?b=1&k=20&m=494349086&s=170667a&w=0&h=nGzr3t8urtg2kUAPuB-E6SR1CrolYgV8ftIYN9sCaUQ=",
  },

  {
    "name": "pent-T shirts",
    "category": "Clothes",
    "price": "2000",
    "img": "https://media.istockphoto.com/photos/fashionable-mens-clothing-jeans-and-shoes-on-light-background-picture-id849125092?b=1&k=20&m=849125092&s=170667a&w=0&h=3cZr9JWrBGMRLM5bootgi-YbHTAxIGqoUpRDk_BHVLM=",
  },
  {
    "name": "shirts",
    "category": "Clothes",
    "price": "1000",
    "img": "https://media.istockphoto.com/photos/classic-mens-shirts-stacked-on-white-background-picture-id876424182?b=1&k=20&m=876424182&s=170667a&w=0&h=2GESFXGmrUqjPv4X93ldFOKOGjLDqmkGbXrHYvbxUuw=",
  },
  {
    "name": "i-Phone",
    "category": "Mobile",
    "price": "65000",
    "img": "https://cdn.pixabay.com/photo/2014/03/22/22/17/phone-292994__340.jpg",
  },
  {
    "name": "i-Phone",
    "category": "Mobile",
    "price": "75000",
    "img": "https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311__340.jpg",
  },
  {
    "name": "i-Phone",
    "category": "Mobile",
    "price": "78000",
    "img": "https://cdn.pixabay.com/photo/2017/08/01/09/07/mobile-2563782__340.jpg",
  },

  
  {
    "name": "i-Phone",
    "category": "Mobile",
    "price": "100000",
    "img": "https://cdn.pixabay.com/photo/2018/04/27/03/51/technology-3353701__340.jpg",
  },
  
  {
    "name": "Dell",
    "category": "laptop",
    "price": "45000",
    "img": "https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196__340.jpg",
  },

  {
    "name": "Dell",
    "category": "laptop",
    "price": "49000",
    "img": "https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270__340.jpg",
  },
  {
    "name": "Dell",
    "category": "laptop",
    "price": "55000",
    "img": "https://cdn.pixabay.com/photo/2016/11/29/08/41/apple-1868496__340.jpg",
  },
  {
    "name": "Dell",
    "category": "laptop",
    "price": "65000",
    "img": "https://cdn.pixabay.com/photo/2016/11/20/09/06/laptop-1842297__340.jpg",
  },
  
  ]
//product Display
  productsDisplay(products);

  function productsDisplay(products) {
    for (var i = 0; i < products.length; i++) {
      $('#product').append(`
          <div class="item ${products[i].category}">
          <img src="${products[i].img}">
          <h4>${products[i].name.toUpperCase()}</h4>
          <p> Rs. ${products[i].price}</p>
      </div>
      `);
    }
  }

  
//Filtering a Product
  $('#filterOptions li a').click(function() {
    var ourClass = $(this).attr('class');
    console.log(ourClass);
    $('#filterOptions li').removeClass('active');
    $(this).parent().addClass('active');
  
    if(ourClass == 'all') {
      $('#product').children('div.item').show();
    }
    else {
      $('#product').children('div:not(.' + ourClass + ')').hide();
      $('#product').children('div.' + ourClass).show();
    }
    return false;
  });

  //Sorting Product
  
  $('#htolsort').click(function() {
    var sortedProduct =  products.sort(function(a, b){
      return a.price - b.price
    });
    sortedProduct.reverse(sortedProduct);
    $("#product").html("");
    productsDisplay(sortedProduct);
  });
  
  $('#ltohsort').click(function() {
    var sortedProduct =  products.sort(function(a, b){
      return a.price - b.price
    });
    $("#product").html("");
    productsDisplay(sortedProduct);
  });

  
//Searching Product in jquery
//Search 

$("#search-input").on("keyup", function() {
	var value = $(this).val().toLowerCase();
  console.log(value);
	if (value) {
		$("#product").html("");
		$.each(products, function(_,i) {	
		  if (i.name.toLowerCase().indexOf(value) != -1) { //search name wise
  			$("#product").append("<div class='item "+i.category+"'><img src='"+i.img+"'><h4>"+i.name.toUpperCase()+"</h4><p>₹ "+i.price+"</p></div>");
		  }
		});
	  }
});

});













  
 


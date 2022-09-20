let product = [
  {
    image:
      "https://cdn.pixabay.com/photo/2014/08/26/21/48/sweatshirts-428607__340.jpg",
    productName: "T-Shirts",
    price: 2000,
    unit: 0,
  },
  {
    image:
      "https://media.istockphoto.com/photos/fashionable-mens-clothing-jeans-and-shoes-on-light-background-picture-id849125092?b=1&k=20&m=849125092&s=170667a&w=0&h=3cZr9JWrBGMRLM5bootgi-YbHTAxIGqoUpRDk_BHVLM=",
    productName: "Clothes",
    price: 100,
    unit: 0,
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2014/03/22/22/17/phone-292994__340.jpg",
    productName: "Android phone",
    price: 20000,
    unit: 0,
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311__340.jpg",
    productName: "I-Phone",
    price: 55000,
    unit: 0,
  },
];

//...................Display data...................//

$(document).ready(function () {
  $.each(product, function (index, ele) {
    /* console.log(index);
    console.log(ele); */

    $("#tbltbody").append(`<tr>
    <td id='tdimage'> <img height='100' class='image' src='` + ele.image + `'> </td>
    <td id='tdpname'> <span id='pname'>` + ele.productName + `</span> </td>
    <td id='tdprice'> <span id='price` + index + `'>` + ele.price + `</span> </td>
    <td id='tdunit'> 
    <input type='number' class='inpUnit' onkeyup='calculateSub(` + index + `)' id='unit`+ index + `' value=` + ele.unit +`> 
        </td>
   <td id='tdprice'> <span class='sbt' id='subtotal` + index + `'>` + ele.price * ele.unit + `</span> </td>
   <td id='tdclear'> <input id='clear` + index + `' value='Clear' 'btn-btn-danger' type='button' onclick='claerall(` + index + `)'></td>

    </tr>`);
  });
});

 //..................calculateSubtotal....................//


function calculateSub(index) {

console.log($("#unit" + index).val());
console.log($("#price" + index).text());

  $("#subtotal" + index).text(
    parseInt($("#unit" + index).val()) * parseInt($("#price" + index).text())
  );

  calculategrand();
}

//..................calculategrandtotal....................//
/*  */
function calculategrand(){

  var gt = 0;

  // $(".sbt").each(function( index, ele ) {
  //   gt += parseInt($(ele).text());
  // });

  $.each(product, function (index) {
    gt += parseInt($("#subtotal" + index).text());
  });


  $("#grandtotal").text(gt);
}

function claerall(index){
  //  $("#subtotal" + index).text(0);
  $("#unit" + index).val(0);
  $("#unit" + index).trigger("onkeyup");

  calculategrand();
}


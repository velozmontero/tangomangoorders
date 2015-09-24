var orderStyle= document.getElementById("order-style");
var styleColor= document.getElementById("order-color");
var sizexs= document.getElementById("size-xs");
var sizes= document.getElementById("size-s");
var sizem= document.getElementById("size-m");
var sizel= document.getElementById("size-l");
var sizexl= document.getElementById("size-xl");
var sizexxl= document.getElementById("size-xxl");
var sizexxx= document.getElementById("size-1x");
var sizexxxx= document.getElementById("size-2x");
var sizexxxxx= document.getElementById("size-3x");
var rPrice= document.getElementById("r-price");
var xPrice= document.getElementById("x-price");
   

$('#add-style').on('click', function(){
    
    $('#order-ow').find('tbody:last-child').append(
        '<tr><td>'+ orderStyle.value +
        '</td><td>'+ styleColor.value +
        '</td><td>'+ sizexs.value +
        '</td><td>'+ sizes.value +
        '</td><td>'+ sizem.value +
        '</td><td>'+ sizel.value +
        '</td><td>'+ sizexl.value +
        '</td><td>'+ sizexxl.value +
        '</td><td>'+ sizexxx.value +
        '</td><td>'+ sizexxxx.value +
        '</td><td>'+ sizexxxxx.value +
        '</td></tr>');
    

    var arrReg= [parseInt(sizexs.value) , parseInt(sizes.value) , parseInt(sizem.value) , parseInt(sizel.value) , parseInt(sizexl.value) , parseInt(sizexxl.value)];
    console.log(arrReg);
    
    var arrXPlus= [parseInt(sizexxx.value) , parseInt(sizexxxx.value) , parseInt(sizexxxxx.value)];
    console.log(arrXPlus);
    
    
    var totalReg= 0;
    arrReg.forEach(function(elem, index, arrReg) {
       if (elem && typeof elem === "number"){
           totalReg += elem;
       }    
    });
    console.log(totalReg);
    
    
    var totalXPlus= 0;
    arrXPlus.forEach(function(elem, index, arrReg) {
       if (elem && typeof elem === "number"){
           totalXPlus += elem;
       }    
    });
    console.log(totalXPlus);
    
    
    //jquery version 
   /*     
    var totalReg= 0;
    
   $.each(arrReg, function(elem, index, arrReg) {
       if (elem && typeof elem === "number"){
       totalReg += this;
       }
   });
   console.log(totalReg);
    
    
    
    var totalXPlus= 0;
    
   $.each(arrXPlus, function(elem, index, arrReg) {
       if (elem && typeof elem === "number"){ 
       totalXPlus += this;
       }
   });
   console.log(totalXPlus);
   */
});


$('#clear-style').on('click', function(){
    $("#order-style").val("").trigger( "focusout" );
    $("#order-color").val("").trigger( "focusout" );
    $("#size-xs").val("").trigger( "focusout" );
    $("#size-s").val("").trigger( "focusout" );
    $("#size-m").val("").trigger( "focusout" );
    $("#size-l").val("").trigger( "focusout" );
    $("#size-xl").val("").trigger( "focusout" );
    $("#size-xxl").val("").trigger( "focusout" );
    $("#size-1x").val("").trigger( "focusout" );
    $("#size-2x").val("").trigger( "focusout" );
    $("#size-3x").val("").trigger( "focusout" );
    $("#x-price").val("").trigger( "focusout" );
    $("#r-price").val("").trigger( "focusout" );
    $("#special-instructions").val("").trigger( "focusout" );
});
                   


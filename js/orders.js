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
var sInstr= document.getElementById("special-instructions");

var oDate= document.getElementById("odate");


var globalArr= [];

var oNum1= Math.floor (Math.random()*9 + 1);
var oNum2= Math.floor (Math.random()*9 + 1);
var oNum3= Math.floor (Math.random()*9 + 1);
var oNum4= Math.floor (Math.random()*9 + 1);
var oNum5= Math.floor (Math.random()*9 + 1);
var oNum6= Math.floor (Math.random()*9 + 1);





//Random order number generator start //----------------------

$('#order-number').html("PO#: "+oNum1+oNum2+oNum3+oNum4+oNum5+oNum6);

//Random order number generator end //----------------------/

$('#add-style').on('click', function(){ 
    
    
    
    //Insert dates on order start //------------------------
    
    $('#order-date').html("Order date: "+ odate.value);
    
    $('#ship-date').html("Ship start: "+ sdate.value);
    
    $('#cancel-date').html("Cancel date: "+ cdate.value);
    
    //Insert dates on order start //------------------------/
    
    
    
    //regular sizes info start //------------------------
    
    var arrRegPcs= [parseInt(sizexs.value) , parseInt(sizes.value) , parseInt(sizem.value) , parseInt(sizel.value) , parseInt(sizexl.value) , parseInt(sizexxl.value)];
    console.log(arrRegPcs);
    
    var totalRegPcs= 0;
    arrRegPcs.forEach(function(elem, index, arrRegPcs) {
       if (elem && typeof elem === "number"){
           totalRegPcs += elem;
       }    
    });
    console.log(totalRegPcs);
    
    //----------------------------------------
    
    isNaN(rPrice.value);
    var regTotalCost = rPrice.value * totalRegPcs ; 
    console.log(regTotalCost);
    
   //regular sizes info end //------------------------/ 
    
    
    
    //Plus sizes info start //------------------------
    
    var arrXPlusPcs= [parseInt(sizexxx.value) , parseInt(sizexxxx.value) , parseInt(sizexxxxx.value)];
    console.log(arrXPlusPcs);
    
    var totalXPlusPcs= 0;
    arrXPlusPcs.forEach(function(elem, index, arrXPlusPcs) {
       if (elem && typeof elem === "number"){
           totalXPlusPcs += elem;
       }    
    });
    console.log(totalXPlusPcs);
    
    //----------------------------------------
    isNaN(xPrice.value);
    var xTotalCost= xPrice.value * totalXPlusPcs;
    console.log(xTotalCost);
    
    //Plus sizes info end //------------------------/
    
    
    
    //Total data combined start//------------------------
    
    var addRandP= totalRegPcs + totalXPlusPcs;
    console.log(addRandP);
    
    var totalAmount= regTotalCost + xTotalCost;
    console.log(totalAmount); 
    
     //Total data combined start//------------------------/
    
    
    
    //push info to global array start//------------------------
    
    globalArr.push({
        style: orderStyle.value,
        color: styleColor.value,
        xs: sizexs.value,
        s: sizes.value,
        m: sizem.value,
        l: sizel.value,
        xl: sizexl.value,
        xxl: sizexxl.value,
        xxx: sizexxx.value,
        xxxx: sizexxxx.value,
        xxxxx: sizexxxxx.value,
        rPrice: rPrice.value,
        xPrice: xPrice.value,
        sInstr: sInstr.value,
        
        totalRegPcs: totalRegPcs,
        totalXPlusPcs: totalXPlusPcs,
        totalRegPcsCost: regTotalCost,
        totalXPlusPcsCost: xTotalCost,
        
        totalPcsCombined: addRandP,
        TotalPriceCombined: totalAmount 
    });
    
    //push info to global array end//------------------------/
});


//Total values start//------------------

$('#add-style').on('click', function(){
    
    var orderTotalPcs=0;
    for (var x=0; x<globalArr.length; x++) {
        orderTotalPcs += globalArr[x].totalPcsCombined;
    }
    console.log(orderTotalPcs);
    
    
    var orderTotalMoney=0;
    for (var x=0; x<globalArr.length; x++) {
        orderTotalMoney += globalArr[x].TotalPriceCombined;
    }
    console.log(orderTotalMoney);
    
    
    
    var globalPcs = document.getElementById("tpcs")
    globalPcs.innerHTML = orderTotalPcs;
    
    var globalmoney = document.getElementById("tmoney")
    globalmoney.innerHTML = "$ "+orderTotalMoney.toFixed(2);
});

//Total values end//------------------/


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
  
$('td').on('click', function(){
    
})


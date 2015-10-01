function isValidName(storeName) {
    var pattern = new RegExp(/^[a-z ]{2,30}$/ig);
    return pattern.test(storeName);
}

function isValidPhone(phone) {
    var phoneNum = new RegExp(/^[0-9]{3}[-. ]{0,1}[0-9]{3}[-. ]{0,1}[0-9]{4}$/);
    return phoneNum.test(phone);
}

function validateForm(theForm) {
    event.preventDefault();
    var sName = theForm.store-name.value;
    if (!isValidName (sName)){
        Materialize.toast('Please enter a valid store name', 4000);
    }
    
    var phoneNum = theForm.phone.value;
    if (!isValidPhone(phoneNum)) {
        Materialize.toast('Please enter a valid phone number', 4000);
        return false;
    }
    console.log("validation successful"); 
    
    var emailBody= document.getElementById("main-email-body").innerHTML;
    $('#htmltable').val("<table>"+emailBody+"</table>");
    
    $('#btn').addClass("hidden");
    $('#msg').removeClass("hidden");
    $('#msg').html("Your Order is being processed...");
    
    var form= $('#form'); 
    
    $.ajax({
        type: "POST",
        url: "http://velozmontero.fvi-grad.com:3001/email",
        data: form.serialize(),
        success: function (response) {
          $('#msg').html("Thank you for your business");    
          console.log(response);    
        }
    });
}



        





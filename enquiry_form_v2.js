$(document).ready(function(){
    

    $("button").click(function(){
        var email1 = $('#emailId').val();
        var regularExpression= /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        var upper_text= new RegExp('[A-Z]');
        var lower_text= new RegExp('[a-z]');
        var number_check=new RegExp('[0-9]');
        var special_char= new RegExp('[!/\'^�$%&*()}{@#~?><>,|=_+�-\]');
        
        if($("#fName").val()==""){
            alert("enter your fname");
            return false;
        }
        else if($("#lName").val()==""){
            alert("enter your lname");
            return false;
        }
        else if($("#phoneNumber").val()==""){
            alert("enter phone number");
            return false;
        }
        else if($("#phoneNumber").val().length!=10){
            alert("enter 10 digit valid phone number");
            return false;
        }
        else if(isNaN($("#phoneNumber").val())){
            alert("enter only numeric values");
            return false;
        }
        else if($("#officeNumber").val()==""){
            alert("enter office number");
            return false;
        }
        else if($("#officeNumber").val().length!=10){
            alert("enter 10 digit valid office number");
            return false;
        }
        else if(isNaN($("#officeNumber").val())){
            alert("enter only numeric values");
            return false;
        }
        
        else if($("#emailId").val()==""){
            alert("enter email-id");
            return false;
        }
        else if(!regularExpression.test(email1)){
            alert("enter valid email");
            return false;
        }
        else if($("#pass").val()==""){
            alert("enter password");
            return false;
        }
        else if($("#pass").val().length<7){
            alert("password length should between 7 to 12");
            return false;
        }
        else if(!($("#pass").val().match(lower_text))){
            alert("password contain at least one lower case");
            return false;
        }
        else if(!($("#pass").val().match(upper_text))){
            alert("password contains at least one upper case");
            return false;
        }
        else if($("#cpass").val()==""){
            alert("conferm your password");
            return false;
        }
        else if(($("#pass").val())!=($("#cpass").val())){
            alert("password does not match");
            return false;
        }
        else if($("#monthValidation").val()=="months"){
            alert("select birth month");
            return false;
        }
        else if($("#dateValidation").val()=="date"){
            alert("select birth date");

            return false;
  
        }
        //varificationForFeb();
         
        else if($("#yearValidation").val()=="years"){
            alert("select birth year");
            return false;
        }
        else if(($("#dateValidation").val()!="date")&&($("#monthValidation").val()!="months")&&($("#yearValidation").val()!="years")){
            return varificationForFeb();

            
        }

        else
        {
            return true;
        }
        
    });

    function varificationForFeb(){
        var bDate=$("#dateValidation").val();
        var bMonth=$("#monthValidation").val();
        var bYear=$("#yearValidation").val();

        var birthDate=new Date(bYear,bMonth,bDate);
        var toDay=new Date();

        if(birthDate.getFullYear()!=bYear || birthDate.getMonth()!=bMonth || birthDate.getDate()!=bDate){
            alert("check your birth date");
            
            //return false ;
        }
        else{
            var ageInYear=toDay.getFullYear()-birthDate.getFullYear();
            $("#calAge").val(ageInYear);
            $("#calAge").show();
        }

    }
});

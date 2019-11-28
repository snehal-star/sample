/**
 * @function to check inlut validation
 * 
 */
function testValidation()
{
    /**
     * @first name validation
     */
    var fname=document.forms["form1"]["firstname"];
    var lname=document.forms["form1"]["lastname"];
    var pnumber=document.forms["form1"]["phone"];
    var officeNo=document.forms["form1"]["office"];
    var emailId=document.forms["form1"]["email"];
    var regexp=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var pass=document.forms["form1"]["password"];
    var cpass=document.forms["form1"]["cpassword"];
    var bmonth=document.forms["form1"]["month"];
    var bdate=document.forms["form1"]["day"];
    var byear=document.forms["form1"]["year"];
    var yourage=document.forms["form1"]["age"];
    var radio1=document.getElementById('residence1').checked;
    var radio2=document.getElementById('residence2').checked;
    var checkbox1=document.getElementById('checkbox_sample18').checked;
    var checkbox2=document.getElementById('checkbox_sample19').checked;
    var checkbox3=document.getElementById('checkbox_sample20').checked;
    var text=document.forms["form1"]["write"].value;

   // var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if(fname.value=="")
    {
        alert("please enter your name");
        
        return false;
    } else if(lname.value=="") { // lastname validation
        alert("please enter your lastname");
        return false;
    }
    /**
     * @phone_no validation
     */
    else if(pnumber.value==""||isNaN(pnumber.value)||pnumber.value.length!=10)
    {
        alert("enter valid phone number");
        return false;
    }
    else if(officeNo.value==""){ //office number validation
        alert("please enter office number");
        return false;
    }
    
    else if(emailId.value==""){//email id validation for null value
        alert("enter email -id");
        return false;
    }
    else if(!regexp.test(emailId.value)){//email id validation
        //document.getElementById('alertmessage').innerHTML="*";
        alert("enter valid email-id");
        return false;
    }
    else if(pass.value.length < 7||pass.value.length > 10 ){
        alert("password length shold between7 to 10");
        return false;
    }
    else if(pass.value.search(/[0-9]/)==-1){
        alert("password contain at least 1 number");
        return false;
    }
    else if(pass.value.search(/[A-Z]/)==-1)
    {
        alert("password should contain at least 1 upper case");
        return false;
    }
    else if(pass.value.search(/[a-z]/)==-1){
        alert("password should contain at least one lowwer case");
        return false;

    }
    else if(pass.value.search(/['!\@\#\$\%\^\&\(\)\_\+\,\:\;]/)==-1){
        alert("pass shoud contain at least one spl charecter");
        return false;
    }
    else if(pass.value!=cpass.value){
        alert("password does not match");
        return false;
    }
    else if(bmonth.value=="months"){
        alert("please select month");
        return false;
    }
    else if(bdate.value=="date"){
        alert("please select date");
        return false;

    }
    else if(byear.value=="years"){
        alert("please select year");
        return false;
    }
    else if(yourage.value==""){
        alert("please enter age");
        return false;

    }
    /*else if(yourage.value.length<18){
        alert("you are not valid for form submission");
        return false;

    }*/
    else if(radio1==""&&radio2==""){
       alert("please select one");
        return false;
    }
    else if(checkbox1==""){
        alert("please select");
        return false;
    }
    else if(checkbox2==""){
        alert("please select");
        return false;
    }
    else if(checkbox3==""){
        alert("please select");
        return false;
    }
    else if(text.length==0){
        alert("please write about yourself");
        return false;
    }
    else{
        return true;
    }
}
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
    if(fname.value=="")
    {
        alert("please enter your name");
        
        return false;
    }
    
    /**
     * @last name validation
     */
    else if(lname.value=="")
    {
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
    else
    {
        return true;
    }
}
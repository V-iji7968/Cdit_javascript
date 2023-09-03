function submitFunction()
{
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;

    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    var phonenumber=document.getElementById('phonenumber').value;
    var phoneexpression = /^[6-9]{1}[0-9]{9}$/;

    let female=document.getElementById('radio1');
    let male=document.getElementById('radio2');

    let address=document.getElementById('address').value;

    let complaint=document.getElementById('complaint').value;

    let date=document.getElementById('date').value;
  

    if(name=="")
    {
        document.getElementById("name").placeholder="Please enter the name";
        document.getElementById('name').style.border="1px solid red";
        return false;

    }
    else if(!isNaN(name))
    {
        document.getElementById('name').placeholder="Please enter the name";  
        document.getElementById('name').style.border="1px solid red";
        return false;
    }
    else if(!pattern.test(email))
    {
        document.getElementById("email").placeholder="Please enter your email";
        document.getElementById('email').style.border="1px solid red";
        return false;

    }
    else if(!phoneexpression.test(phonenumber))
    {
        document.getElementById("phonenumber").placeholder="Please enter your phone";
        document.getElementById('phonenumber').style.border="1px solid red"; 
        return false;
    }
    else if(!female.checked && !male.checked)
    {
    document.getElementById('id4').innerHTML="Please select gender";
    document.getElementById('id4').style.border="1px solid red"; 
    return false;
    }
   else if(address=="")
    {
        document.getElementById("name").placeholder="Please enter the name";
        document.getElementById('name').style.border="1px solid red";
        return false;

    }
   else if(complaint=="")
    {
        document.getElementById("complaint").placeholder="Please enter the name";
        document.getElementById('complaint').style.border="1px solid red";
        return false;
    }
  else if(date=="")
    {
        document.getElementById("date").placeholder="Enter valid Date";
        document.getElementById("date").style.border="1px solid red";
        return false;

}
}


function namevalidate()
{
    let name=document.getElementById('name').value;
    if(name=="")
    {
          
        document.getElementById("name").value="";
        document.getElementById("name").placeholder="Please enter the name";
        document.getElementById('name').style.border="1px solid red";

    }
    else if(!isNaN(name))
    {
        document.getElementById("name").value="";
        document.getElementById('name').placeholder="Please enter the name";  
        document.getElementById('name').style.border="1px solid red";
    }
    else
    {
        document.getElementById('name').placeholder="";  
        document.getElementById('name').style.border="1px solid grey";
    }
}


function emailvalidate()
{
    let email=document.getElementById('email').value;

    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!pattern.test(email))
    {
        document.getElementById("email").value="";
        document.getElementById("email").placeholder="Please enter your email";
        document.getElementById('email').style.border="1px solid red";

    }
    else
    {
        document.getElementById('email').placeholder="";  
        document.getElementById('email').style.border="1px solid grey";
    }

    }




function phonevalidate()
{
    var phonenumber=document.getElementById('phonenumber').value;
    var phoneexpression = /^[6-9]{1}[0-9]{9}$/;
    if(!phoneexpression.test(phonenumber))
    {
        document.getElementById("phonenumber").value="";
        document.getElementById("phonenumber").placeholder="Please enter your email";
        document.getElementById('phonenumber').style.border="1px solid red"; 
    }
    else{

    }  document.getElementById("phonenumber").placeholder="";
        document.getElementById('phonenumber').style.border="1px solid red";
 
}


function radio()
{
    let female=document.getElementById('radio1');
    let male=document.getElementById('radio2');
    if(!female.checked && !male.checked)
    document.getElementById('id4').innerHTML="Please select gender";
}

function addressvalidate()
{
    let address=document.getElementById('address').value;
    if(address=="")
    {
          
        document.getElementById("address").value="";
        document.getElementById("address").placeholder="Please enter the name";
        document.getElementById('address').style.border="1px solid red";

    }
    else
    {
        document.getElementById('address').placeholder="";  
        document.getElementById('address').style.border="1px solid grey";
    }
}

function complaintvalidate()
{
    let complaint=document.getElementById('complaint').value;
    if(complaint=="")
    {
          
        document.getElementById("complaint").value="";
        document.getElementById("complaint").placeholder="Please enter the name";
        document.getElementById('complaint').style.border="1px solid red";

    }
    else
    {
        document.getElementById('complaint').placeholder="";  
        document.getElementById('complaint').style.border="1px solid grey";
    }
}

function datevalidate()
{
    let date=document.getElementById("date").value;
    if(date=="")
    {
        document.getElementById("date").placeholder="Enter valid Date";
        document.getElementById("date").style.border="1px solid red";
    }
    else
    {
        document.getElementById('date').placeholder="";  
        document.getElementById('date').style.border="1px solid grey";
    }
}
function dis(val)            
{                
document.getElementById("result").value+=val		
return val
}  
function solve()            
{                
var x = document.getElementById("result").value                
y = eval(x)                
document.getElementById("result").value=y		
return y            
}   
function percent()
{
var value1 = document.getElementById("result").value;
var value2 = document.getElementById("result").value;
result = value1*value2/100;
document.getElementById("result").value = result;
return result;
}       
function clr()            
{                
document.getElementById("result").value=""            
}            
function square()
{     
var y  = document.getElementById("result").value           
var x =Math.sqrt(Number(document.getElementById("result").value))
if(y%x === 0){
document.getElementById("result").value = x
return x      }
else
{
x = x.toFixed(3)
document.getElementById("result").value=x
return x
}       
}
function absolute()
{
var x=Math.abs(Number(document.getElementById("result").value))
document.getElementById("result").value=x
return x
}

function validation()
{
var users = document.myforms.names;
var usernumber = document.myforms.numbers;
var useremail = document.myforms.emails;
if(letters(users))
{
if(validatenumber(usernumber))
{
if(validateemail(useremail))
{
}
}
return false;
}
}
function letters(users)
{
var letter = /^[A-Za-z]+$/;
if(users.value.match(letter)){
return true;
}
else
{
alert("user name should contain only letters");
users.focus();
return false;
}
}
function validatenumber(usernumber)
{
var phnno = /^\d{10}$/;
if(usernumber.value.match(phnno)){
return true;
}
else
{
alert("no should be 10 digits");
return false;}
}
function validateemail(useremail)
{var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(useremail.value.match(mail)){
return true;
}else
{
alert("invalid email address");
useremail.focus();
return false;
}
}
function palindromefunc()
{
var string = document.getElementById("palin").value;
var reversestr = string.split("").reverse().join("");
if(string == "")
{
alert("enter a string");
return false;
}
else{
if(string == reversestr)
{
document.getElementById("demo1").innerHTML = "This string is  a palindrome";
return true;
}
else
{
document.getElementById("demo1").innerHTML = "This string is not a palindrome";
return false;
}
}
}
function anagramfunc()
{
var str1=document.getElementById("strana1").value;
var str2=document.getElementById("strana2").value;
if(str1 == ""||str2=="")
{
alert("Enter strings ");
return false;
}
if(str1.length != str2.length)
{
document.getElementById("ana1").innerHTML = "The strings are not anagrams";
return false;
}
else{
var sortstring1 = str1.split("").sort().join("");
var sortstring2 = str2.split("").sort().join("");
if(sortstring1 == sortstring2)
{
document.getElementById("ana1").innerHTML = "The strings are anagrams";
return true;
}
else
{
document.getElementById("ana1").innerHTML = "The strings are not anagrams";
return false;
}
}
}
function mapfunc()
{
var a = Math.floor(Math.random()*1001);
var b = Math.floor(Math.random()*1001);
document.getElementById("number1").value=a;
document.getElementById("number2").value=b;
}
function findfunc()
{
var a = document.getElementById("number1").value;
var b = document.getElementById("number2").value;
var c = a%3;
var d = b%3;
if(c == 0)
{
document.getElementById("string1").value="cockroach";
}
else if(c == 1)
{
document.getElementById("string1").value="Human";
}
else
{
document.getElementById("string1").value="Nuclearbomb";
}
if(d == 0)
{
document.getElementById("string2").value="cockroach";
}
else if(d == 1)
{
document.getElementById("string2").value="Human";
}
else
{
document.getElementById("string2").value="Nuclearbomb";
}
var str1 = document.getElementById("string1").value;
var str2 = document.getElementById("string2").value;
if(str1 == str2)
{
alert("Tie");
return true;
}
if(((str1=="Nuclearbomb") || (str2=="Nuclearbomb")) && ( (str1 == "cockroach")|| (str2=="cockroach")))
{
alert("cockroach wins...!");
return true;
}
else if(((str1=="Nuclearbomb") || (str2=="Nuclearbomb")) && ((str2=="Human") || (str1=="Human")))
{
alert("NuclearBomb  wins...!");
return true;
}
else if(((str1=="cockroach") || (str2=="cockroach")) && ((str2="Human") || (str1="Human")))
{
alert("Human wins...!");
return true;
}
}


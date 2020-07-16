function array() {
var e = document.getElementById("ar");
var strUser = e.options[e.selectedIndex].text;
document.getElementById("r").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words";
document.getElementById("s").innerHTML="(select the buttons in proper order)";
document.getElementById('reform').innerHTML="";  
document.getElementById('ref').innerHTML="";
document.getElementById("reform").style.display='';
document.getElementById("ref").style.display='';
document.getElementById('b').innerHTML="";
document.getElementById('i').innerHTML="";
for(var i=0;i<=9;i++){
var k=i+'';
var k2=i+'h';
document.getElementById(k).innerHTML="";
document.getElementById(k2).innerHTML="";
}
if(strUser=="English"){
document.getElementById("h2h").innerHTML="";
document.getElementById('reform').style.display = '';
document.getElementById('reform').innerHTML="";
for(var i=0;i<=9;i++){
var p=i+'h';
var p2=i+'';
document.getElementById(p).style.display = 'none';
document.getElementById(p2).style.display = '';
}

array[1]=["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"];
array[2]=["some students like to study in the night","at night some students like to study"];
array[3]=["John and Mary went to church","Mary and John went to church"];
array[4]=["John went to church after eating","after eating John went to church","John after eating went to church"];
array[5]=["did he go to market","he did go to market"];
array[6]=["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"]
array[7]=["John goes to the library and studies","John studies and goes to the library"];
array[8]=["John ate an apple so did she","she ate an apple so did John"];
array[9]=["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"];
array[10]=["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her","yesterday I bought a book that I told her"];
var x = Math.floor((Math.random() * 10) + 1);
var res=shuffle(array[x][0]);
//document.getElementById('selected_sentence').value=res
var words = res.split(" ");
var l=words.length;
for (var i = 0; i <l; i++) {
words[i] += " ";
}
for( var i=0;i<l;i++){
var butid=i+'b'
var element = document.createElement("input");
element.setAttribute("type", 'button');
element.setAttribute("value", words[i]);  
element.setAttribute('id',butid)
var foo = document.getElementById(i+'');
foo.appendChild(element);
}  
}
else if(strUser=="Hindi"){
document.getElementById("h2id").innerHTML="";
 document.getElementById('ref').style.display = '';
 document.getElementById("ref").innerHTML="";
for( var i=0;i<=9;i++){
  var r=i+'';
  var r2=i+'h';
  document.getElementById(r).style.display = 'none';
  document.getElementById(r2).style.display = '';
}

array[1]=["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"];
array[2]=["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"];
array[3]=["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"];
array[4]=["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"];
array[5]=["बिल्लियों को मारकर कुत्ता सो गया","मारकर बिल्लियों को कुत्ता सो गया","बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता","कुत्ता सो गया बिल्लियों को मारकर","कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"];
array[6]=["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"];
array[7]=["एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब","है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"];
var y = Math.floor((Math.random() * 7) + 1);
var res=shuffle(array[y][0]);
var words = res.split(" ");
var l=words.length;
for (var i = 0; i <l; i++) {
words[i] += " ";
}
for( var i=0;i<l;i++){
var butid=i+'hx'
var element = document.createElement("input");
element.setAttribute("type", 'button');
element.setAttribute("value", words[i]);  
element.setAttribute('id',butid)
var foo = document.getElementById(i+'h');
foo.appendChild(element);
}
}
}
function getRandomInt(n) {
return Math.floor(Math.random() * n);
}
function shuffle(s) {
var arr = s.split(' ');          
var n = arr.length;              
for(var i=0 ; i<n-1 ; ++i) {
var j = getRandomInt(n);      
var temp = arr[i];            
arr[i] = arr[j];
arr[j] = temp;
}
return arr.join(' ');              
}
function sec(clicked){
  document.getElementById('reform').style.display = '';
  document.getElementById('b').style.display = '';
  document.getElementById('i').style.display = '';
var function_count = document.getElementById('start_function_count').value
document.getElementById('b').innerHTML="Formed Sentence";
document.getElementById('i').innerHTML=" (after selecting words):"; 
document.getElementById('reform').innerHTML="";
document.getElementById('ref').innerHTML="";

var element = document.createElement("input");
element.setAttribute("type", 'button');
element.setAttribute("value", "Re-form the sentence");
element.setAttribute("id", "reformbtn");
var foo = document.getElementById("reform");
foo.appendChild(element);
document.getElementById('reformbtn').setAttribute( "onClick", "javascript: reform_sentence()" );
 
document.getElementById('start_function_count').value='1'

var clickid=clicked+'b'
document.getElementById('h2id').innerHTML+=document.getElementById(clickid).value;
document.getElementById(clickid).style.display = 'none';
}
function reform_sentence()
{
document.getElementById('h2id').innerHTML=''
for(var i=0;i<9;i++){
var clickid=i+"b"
document.getElementById('b').innerHTML="Formed Sentence";
document.getElementById('i').innerHTML=" (after selecting words):";
document.getElementById(i+'').style.display = '';  
document.getElementById(clickid).style.display = '';
document.getElementById('i').style.display = "none";
document.getElementById('b').style.display = "none";
document.getElementById('reform').style.display = "none";
}

}
function hin(clicked){
  document.getElementById('ref').style.display = '';
  document.getElementById('b').style.display = '';
  document.getElementById('i').style.display = '';
var function_count = document.getElementById('selected_sentence').value
document.getElementById('b').innerHTML="Formed Sentence";
document.getElementById('i').innerHTML=" (after selecting words):"; 
document.getElementById('reform').innerHTML="";
document.getElementById('ref').innerHTML="";
var element = document.createElement("input");
element.setAttribute("type", 'button');
element.setAttribute("value", "Re-form the sentence");
element.setAttribute("id", "reformbtnhin");
var foo = document.getElementById("ref");
foo.appendChild(element);
document.getElementById('reformbtnhin').setAttribute( "onClick", "javascript: reform_hin_sentence()" );
 
document.getElementById('selected_sentence').value='1'


var clickid=clicked+'x'
//alert(clickid);
document.getElementById('h2h').innerHTML+=document.getElementById(clickid).value;
document.getElementById(clickid).style.display = 'none';
}

function reform_hin_sentence()
{
document.getElementById('h2h').innerHTML=''
for(var i=0;i<9;i++){
var clickid=i+"hx"
document.getElementById('b').innerHTML="Formed Sentence";
document.getElementById('i').innerHTML=" (after selecting words):";
document.getElementById(i+'h').style.display = '';  
document.getElementById(clickid).style.display = '';
document.getElementById('i').style.display = "none";
document.getElementById('b').style.display = "none";
document.getElementById('ref').style.display = "none";
}
//document.getElementById('ref').style.display = '';

}

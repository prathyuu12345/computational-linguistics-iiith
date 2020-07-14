function array() {
var e = document.getElementById("ar");
    var strUser = e.options[e.selectedIndex].text;
    document.getElementById("r").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words";
    document.getElementById("s").innerHTML="(select the buttons in proper order)";
    document.getElementById('reform').innerHTML="";   
document.getElementById('ref').innerHTML="";
document.getElementById('b').innerHTML="";
document.getElementById('i').innerHTML="";
document.getElementById('0').innerHTML="";
document.getElementById('1').innerHTML="";
document.getElementById('2').innerHTML="";
document.getElementById('3').innerHTML="";
document.getElementById('4').innerHTML="";
document.getElementById('5').innerHTML="";
document.getElementById('6').innerHTML="";
document.getElementById('7').innerHTML="";
document.getElementById('8').innerHTML="";
document.getElementById('9').innerHTML="";
document.getElementById('0h').innerHTML="";
document.getElementById('1h').innerHTML="";
document.getElementById('2h').innerHTML="";
document.getElementById('3h').innerHTML="";
document.getElementById('4h').innerHTML="";
document.getElementById('5h').innerHTML="";
document.getElementById('6h').innerHTML="";
document.getElementById('7h').innerHTML="";
document.getElementById('8h').innerHTML="";
document.getElementById('9h').innerHTML="";
    if(strUser=="English"){
     document.getElementById("h2h").innerHTML="";
   //  document.getElementById('reform').innerHTML="";
      document.getElementById("0h").style.display = 'none';
        document.getElementById("1h").style.display = 'none';
         document.getElementById("2h").style.display = 'none';
          document.getElementById("3h").style.display = 'none';
           document.getElementById("4h").style.display = 'none';
            document.getElementById("5h").style.display = 'none';
             document.getElementById("6h").style.display = 'none';
              document.getElementById("7h").style.display = 'none';
               document.getElementById("8h").style.display = 'none';
                document.getElementById("9h").style.display = 'none';
      document.getElementById("0").style.display = '';
        document.getElementById("2").style.display = '';
          document.getElementById("3").style.display = '';
           document.getElementById("4").style.display = '';
            document.getElementById("5").style.display = '';
             document.getElementById("6").style.display = '';
              document.getElementById("7").style.display = '';
               document.getElementById("8").style.display = '';
                document.getElementById("9").style.display = '';
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
    var words = res.split(" ");
    var l=words.length;
    for (var i = 0; i <l; i++) {
        words[i] += " ";
    }
 
    for( var i=0;i<l;i++){
    if(i==0){
var element = document.createElement("input");
element.setAttribute("type", 'button');
   element.setAttribute("value", words[i]);  
   element.setAttribute('id','0b')
   var foo = document.getElementById("0");
   foo.appendChild(element);
}
if(i==1){
var element = document.createElement("input");
element.setAttribute("type", 'button');
   element.setAttribute("value", words[i]);  
   element.setAttribute('id','1b')
   var foo = document.getElementById("1");
   foo.appendChild(element);
}
if(i==2){
var element = document.createElement("input");
element.setAttribute("type", 'button');
   element.setAttribute("value", words[i]); 
    element.setAttribute('id','2b') 
   var foo = document.getElementById("2");
   foo.appendChild(element);
}
if(i==3){
var element = document.createElement("input");
element.setAttribute("type", 'button');
   element.setAttribute("value", words[i]);  
    element.setAttribute('id','3b')
   var foo = document.getElementById("3");
   foo.appendChild(element);
}
if(i==4){
var element = document.createElement("input");
element.setAttribute("type", 'button');
   element.setAttribute("value", words[i]);  
    element.setAttribute('id','4b')
   var foo = document.getElementById("4");
   foo.appendChild(element);
}
if(i==5){
var element = document.createElement("input");
element.setAttribute("type", 'button');
   element.setAttribute("value", words[i]);  
    element.setAttribute('id','5b')
   var foo = document.getElementById("5");
   foo.appendChild(element);
}
 if(i==6){
var element = document.createElement("input");
element.setAttribute("type", 'button');
   element.setAttribute("value", words[i]); 
    element.setAttribute('id','6b') 
   var foo = document.getElementById("6");
   foo.appendChild(element);
}
if(i==7){
var element = document.createElement("input");
element.setAttribute("type", 'button');
   element.setAttribute("value", words[i]); 
    element.setAttribute('id','7b') 
   var foo = document.getElementById("7");
   foo.appendChild(element);
}
if(i==8){
var element = document.createElement("input");
element.setAttribute("type", 'button');
   element.setAttribute("value", words[i]);  
   element.setAttribute('id','8b') 
   var foo = document.getElementById("8");
   foo.appendChild(element);
}
if(i==9){
var element = document.createElement("input");
element.setAttribute("type", 'button');
   element.setAttribute("value", words[i]);  
   element.setAttribute('id','9b') 
   var foo = document.getElementById("9");
   foo.appendChild(element);
}  
}  

    }
    else if(strUser=="Hindi"){
      document.getElementById("h2id").innerHTML="";
    //  document.getElementById('ref').innerHTML="";
      document.getElementById("0").style.display = 'none';
        document.getElementById("1").style.display = 'none';
         document.getElementById("2").style.display = 'none';
          document.getElementById("3").style.display = 'none';
           document.getElementById("4").style.display = 'none';
            document.getElementById("5").style.display = 'none';
             document.getElementById("6").style.display = 'none';
              document.getElementById("7").style.display = 'none';
               document.getElementById("8").style.display = 'none';
                document.getElementById("9").style.display = 'none';
                 
                 document.getElementById("0h").style.display = '';
        document.getElementById("1h").style.display = '';
         document.getElementById("2h").style.display = '';
          document.getElementById("3h").style.display = '';
           document.getElementById("4h").style.display = '';
            document.getElementById("5h").style.display = '';
             document.getElementById("6h").style.display = '';
              document.getElementById("7h").style.display = '';
               document.getElementById("8h").style.display = '';
                document.getElementById("9h").style.display = '';

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
      if(i==0){
var element = document.createElement("input");
element.setAttribute("type", 'button');
   element.setAttribute("value", words[i]);
   element.setAttribute('id','0x')
   var foo = document.getElementById("0h");
   foo.appendChild(element);
 }
   if(i==1){
var element = document.createElement("input");
element.setAttribute("type", 'button');
   element.setAttribute("value", words[i]);  
   element.setAttribute('id','1x')
   var foo = document.getElementById("1h");
   foo.appendChild(element);
}
if(i==2){
var element = document.createElement("input");
element.setAttribute("type", 'button');
   element.setAttribute("value", words[i]); 
    element.setAttribute('id','2x') 
   var foo = document.getElementById("2h");
   foo.appendChild(element);
}
if(i==3){
var element = document.createElement("input");
element.setAttribute("type", 'button');
   element.setAttribute("value", words[i]);  
    element.setAttribute('id','3x')
   var foo = document.getElementById("3h");
   foo.appendChild(element);
}
if(i==4){
var element = document.createElement("input");
element.setAttribute("type", 'button');
   element.setAttribute("value", words[i]);  
    element.setAttribute('id','4x')
   var foo = document.getElementById("4h");
   foo.appendChild(element);
}
if(i==5){
var element = document.createElement("input");
element.setAttribute("type", 'button');
   element.setAttribute("value", words[i]);  
    element.setAttribute('id','5x')
   var foo = document.getElementById("5h");
   foo.appendChild(element);
}
 if(i==6){
var element = document.createElement("input");
element.setAttribute("type", 'button');
   element.setAttribute("value", words[i]); 
    element.setAttribute('id','6x') 
   var foo = document.getElementById("6h");
   foo.appendChild(element);
}
if(i==7){
var element = document.createElement("input");
element.setAttribute("type", 'button');
   element.setAttribute("value", words[i]); 
    element.setAttribute('id','7x') 
   var foo = document.getElementById("7h");
   foo.appendChild(element);
}
if(i==8){
var element = document.createElement("input");
element.setAttribute("type", 'button');
   element.setAttribute("value", words[i]);  
   element.setAttribute('id','8x') 
   var foo = document.getElementById("8h");
   foo.appendChild(element);
}
if(i==9){
var element = document.createElement("input");
element.setAttribute("type", 'button');
   element.setAttribute("value", words[i]);  
   element.setAttribute('id','9x') 
   var foo = document.getElementById("9h");
   foo.appendChild(element);
}  
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
  document.getElementById('reform').innerHTML="";
  document.getElementById('ref').innerHTML="";
   var element = document.createElement("input");
   element.setAttribute("type", 'button');
   element.setAttribute("value", "Re-form the sentence"); 
   var foo = document.getElementById("reform");
   foo.appendChild(element);
document.getElementById('b').innerHTML="Formed Sentence";
document.getElementById('i').innerHTML=" (after selecting words):";
//document.getElementById('h2id').innerHTML+=clicked;
//alert(document.getElementById('h2id').innerHTML)
  if(clicked==0){
  document.getElementById('h2id').innerHTML+=document.getElementById('0b').value;
   document.getElementById("0b").style.display = 'none';
  }
  else if(clicked==1){
  document.getElementById('h2id').innerHTML+=document.getElementById('1b').value;
   document.getElementById("1b").style.display = 'none';
  }
  else  if(clicked==2){
  document.getElementById('h2id').innerHTML+=document.getElementById('2b').value;
   document.getElementById("2b").style.display = 'none';
  }
  else if(clicked==3){
  document.getElementById('h2id').innerHTML+=document.getElementById('3b').value;
   document.getElementById("3b").style.display = 'none';
  }
  else if(clicked==4){
  document.getElementById('h2id').innerHTML+=document.getElementById('4b').value;
   document.getElementById("4b").style.display = 'none';
  }
  else if(clicked==5){
  document.getElementById('h2id').innerHTML+=document.getElementById('5b').value;
   document.getElementById("5b").style.display = 'none';
  }
  else if(clicked==6){
  document.getElementById('h2id').innerHTML+=document.getElementById('6b').value;
   document.getElementById("6b").style.display = 'none';
  }
  else if(clicked==7){
  document.getElementById('h2id').innerHTML+=document.getElementById('7b').value;
   document.getElementById("7b").style.display = 'none';
  }
  else if(clicked==8){
  document.getElementById('h2id').innerHTML+=document.getElementById('8b').value;
   document.getElementById("8b").style.display = 'none';
  }
  else if(clicked==9){
  document.getElementById('h2id').innerHTML+=document.getElementById('9b').value;
   document.getElementById("9b").style.display = 'none';
  }

}
function hin(clicked){
  document.getElementById('reform').innerHTML="";
  document.getElementById('ref').innerHTML="";
  var element = document.createElement("input");
   element.setAttribute("type", 'button');
   element.setAttribute("value", "Re-form the sentence"); 
   var foo = document.getElementById("ref");
   foo.appendChild(element);
   
document.getElementById('b').innerHTML="Formed Sentence";
document.getElementById('i').innerHTML=" (after selecting words):";
   if(clicked=='0h'){
  document.getElementById('h2h').innerHTML+=document.getElementById('0x').value;
   document.getElementById("0x").style.display = 'none';
  }
  else if(clicked=='1h'){
  document.getElementById('h2h').innerHTML+=document.getElementById('1x').value;
   document.getElementById("1x").style.display = 'none';
  }
  else  if(clicked=='2h'){
  document.getElementById('h2h').innerHTML+=document.getElementById('2x').value;
   document.getElementById("2x").style.display = 'none';
  }
  else if(clicked=='3h'){
  document.getElementById('h2h').innerHTML+=document.getElementById('3x').value;
   document.getElementById("3x").style.display = 'none';
  }
  else if(clicked=='4h'){
  document.getElementById('h2h').innerHTML+=document.getElementById('4x').value;
   document.getElementById("4x").style.display = 'none';
  }
  else if(clicked=='5h'){
  document.getElementById('h2h').innerHTML+=document.getElementById('5x').value;
   document.getElementById("5x").style.display = 'none';
  }
  else if(clicked=='6h'){
  document.getElementById('h2h').innerHTML+=document.getElementById('6x').value;
   document.getElementById("6x").style.display = 'none';
  }
  else if(clicked=='7h'){
  document.getElementById('h2h').innerHTML+=document.getElementById('7x').value;
   document.getElementById("7x").style.display = 'none';
  }
  else if(clicked=='8h'){
  document.getElementById('h2h').innerHTML+=document.getElementById('8x').value;
   document.getElementById("8x").style.display = 'none';
  }
  else if(clicked=='9h'){
  document.getElementById('h2h').innerHTML+=document.getElementById('9x').value;
   document.getElementById("9x").style.display = 'none';
  }



}
/*function two(){
  if(two.done) return;
   var element = document.createElement("input");
   element.setAttribute("type", 'button');
   element.setAttribute("value", "Re-form the sentence"); 
   var foo = document.getElementById("ref");
   foo.appendChild(element);
   two.done=true;
 }

function once(){
  if(once.done) return;
   var element = document.createElement("input");
   element.setAttribute("type", 'button');
   element.setAttribute("value", "Re-form the sentence"); 
   var foo = document.getElementById("reform");
   foo.appendChild(element);
   once.done=true;
 }*/

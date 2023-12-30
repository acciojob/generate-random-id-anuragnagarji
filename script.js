function makeid(l) {
    let str="";
    while(str.length!=l){
     let temp =Math.ceil(Math.random()*130);
    if((temp>=48&&temp<=57)||(temp>=65&&temp<=91)||(temp>=97&&temp<=122)){
      str+=String.fromCharCode(temp);
      //console.log(temp+" "+str);
    }
    
}
  return str;
  }

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));

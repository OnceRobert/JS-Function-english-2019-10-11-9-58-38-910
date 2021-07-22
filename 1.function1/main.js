function reverseString(message){
  x = message.length;
  for(i=0;i<x+1;i++){
   document.write(message.charAt(x-i));
  }
}
reverseString('hello');

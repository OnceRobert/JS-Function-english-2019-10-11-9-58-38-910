function palindrome(message){
  x = message.length;
  for(i=0;i<(x/2);i++){
   t = message.charAt(i) == message.charAt(x-i-1);
   document.write(t);
   if(!t){
   	return false;
    }
    return true;
  }
  
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true

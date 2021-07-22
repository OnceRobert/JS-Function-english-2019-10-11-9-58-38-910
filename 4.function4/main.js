function countWords(message){
  x = message.split(' ');
  return x.length;
}
countWords('Good morning, I love JavaScript.'); // should return 5

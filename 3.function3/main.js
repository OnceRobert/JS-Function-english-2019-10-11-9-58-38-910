function alphabetsort(message){
  x = message.length;
  t = [];
  for(i = 0;i<x;i++){   //convert string to array
    t[i] = message.charAt(i);
  }
  for(i = 0;i<x;i++){
     for(j = i+1;j<x;j++){
     		if(t[i]<t[j]){
        	tmp = t[i];
          t[i] = t[j];
          t[j] = tmp; 
        }
     }
  }
  sorted = '';
  for(i = 0;i<x;i++){   //array to string
    sorted = sorted.concat(t[i]);
  }
  return sorted;
}

alphabetsort('Hello');

function flippingBits(N) {
 
    let s = N.toString(2);
  
    let to_flip = [];
    for (let i = 0; i < 32-s.length; i++){
        to_flip[i]='0';
    } 
    let index=0;
    for(let i=32-s.length;i<32;i++){
       
     to_flip[i]=s[index];
     index++;
    }
    
    
    
 


   
   for(let i=0;i<to_flip.length;i++){
       if(to_flip[i]=="0"){
          
           to_flip[i]="1";
       }else{
           to_flip[i]="0";
       }
   }
   to_flip = to_flip.join("");

   return parseInt(to_flip,2);

}
flippingBits(2147483647);
function sockMerchant(n, ar) {

let arr = new Array(n);
let pairs = 0;
arr.fill(true);

for(let i=0;i<ar.length;i++){
 
   for(let j=i+1;j<arr.length;j++){
    if(ar[i]===ar[j] && arr[i]!=false && arr[j]!=false){
       pairs++;
       arr[i]=false;
       arr[j]=false;
    }
     
   }
}
return pairs;

}


sockMerchant(10,[10 ,20 ,20 ,10 ,10 ,30 ,50 ,10 ,20]);
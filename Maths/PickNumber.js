 
function pickingNumbers(a) {
  a.sort();

let count=0;
let max=0;
for(let i=0;i<a.length;i++){
    for(let j=i;j<a.length;j++){
        if(Math.abs(a[j]-a[i])<=1){
            count++;
        }
    }
    if(count>max){
        max=count;
       
    }
    count=0;    
}
 //console.log(max)
return max;
}

  
pickingNumbers([4,6,5,3,3,1]);


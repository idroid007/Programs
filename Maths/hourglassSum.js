function hourglassSum(arr) {
    console.log(-6 > -9)
let global_sum = -99999;

for(let i=0;i<arr.length-2;i++){
   
   
    for(let j=0;j<arr[i].length-2;j++){
        let sum=0;
        for(let k=j;k<j+3;k++){
        sum+=arr[i][k]+arr[i+2][k];
        
        }
        
          
       
          
       sum+=arr[i+1][j+1];
         if(sum>global_sum){
             global_sum=sum;
         }
    }
 
}
return global_sum;
}




hourglassSum([[1 ,1 ,1 ,0 ,0 ,0],
    [0 ,1, 0, 0, 0, 0],
    [1 ,1 ,1 ,0 ,0 ,0],
    [0 ,0, 2, 4, 4, 0],
    [0 ,0 ,0 ,2 ,0 ,0],
    [0 ,0 ,1 ,2 ,4 ,0]]);


function maximumToys(prices, k) {

   let sum=0;
   let count = 0;
     prices.sort((a,b)=>a-b);
     console.log(prices)
     prices.forEach( (e) =>{
         
        //  if(sum<=k){
        //      sum+=e;
        //  }
         sum = sum<=k ? sum+e : sum;
            // if(!(e>k)  && sum<=k){
              
            //     count++;
            // }
            count = (!(e>k)  && sum<=k) ? count+1 : count;
     })

    console.log(count)
}

maximumToys([1,12,5,111,200,1000,10],50)
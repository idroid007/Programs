/*

Anna and Brian are sharing a meal at a restuarant and they agree to split the bill equally. Brian wants to order something that Anna is allergic to though, and they agree that Anna won't pay for that item. Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.

For example, assume the bill has the following prices: bill=[2,4,6] . Anna declines to eat item k=bill[2]  which costs 6 . If Brian calculates the bill correctly, Anna will pay (2+4)/2=3. If he includes the cost of bill[2], he will calculate (2+4+6)/2 = 6. In the second case, he should refund 3 to Anna.





*/


function bonAppetit(bill, k, b) {
  let sum=0;
    bill.forEach( (e,i)=>{
       sum = k==i ? sum : sum+e;
    })
    sum/=2;
    if(sum==b){
      console.log("Bon Appetit");
    }else{
        console.log(Math.abs(sum-b));
    }
}


bonAppetit([3,10,2,9],1,7);
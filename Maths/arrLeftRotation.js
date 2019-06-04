 /*

A left rotation operation on an array shifts each of the array's elements  unit to the left. For example, if  2 left rotations are performed on array [1,2,3,4,5] , then the array would become [3,4,5,1,2].

Given an array  of  integers and a number, , perform  left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.
 */

// function rotLeft(a, d) {
    
//     let length = a.length;
//     let i=0;
//    let index=0;
//   while(i<=length){
//       let nl = (i+ (length-d) )% length;
//       console.log(nl)
     
//           let temp=a[nl-1];
//         for(let j=nl-1; j>0;j--){
//                a[j]=a[j-1]
//         }
//         a[0]=temp;
//         index++;
//       }
//       i++;
  
//       console.log(a)
// }

function rotLeft(a, d) {
     let b=[];

     for(let i=0;i<a.length;i++){
         b[i]=a[(i+d)%a.length];
     }

     return b;

}
rotLeft([1,2,3,4,5],4)
function pageCount(n, p) {
    /*
     * Write your code here.
     */

     
   let total = Math.floor(n/2);
   let right = Math.floor(p/2);

   let left = total - right;

   return left<right? left:right;

}
 
pageCount(6,2);
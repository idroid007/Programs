 /*

You are given a string containing characters A and B only. Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string.

Your task is to find the minimum number of required deletions.

For example, given the string s=AABAAB , remove an A at positions 0 and 3 to make s=ABAB in 2 deletions.
 */

function alternatingCharacters(s) {
  let sum=0;
    for(let i=0;i<s.length;){
      let c = s[i];
      let count =0;
        while(i<=s.length-1 && c==s[i])
        {
            count++;
            i++
        }
        if(count>1){
            
            count=count-1;
            sum=sum+count;
        }
    }
    return sum;

}

alternatingCharacters("AABBBCCCCCC")
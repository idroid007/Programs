 /*
Sample Input 0

hackerhappy
hackerrank
9

Sample Output 0

Yes

Explanation 0

We perform 5 delete operations to reduce string s to hacker. Next, we perform 4 append operations (i.e., r, a, n, and k), to get hackerrank. Because we were able to convert s to t by performing exactly k=9 operations, we print Yes.



Sample Input 1

aba
aba
7
Sample Output 1

Yes
Explanation 1

We perform 4 delete operations to reduce string s to the empty string (recall that, though the string will be empty after 3 deletions, 
    we can still perform a delete operation on an empty string to get the empty string). Next, we perform 3 append operations (i.e., a, b, and a). 
    Because we were able to convert s to t by performing exactly k=7 operations, we print Yes.


 */

function appendAndDelete(s, t, k) {
    let s_s = s.split("").sort();
    let t_s = t.split("").sort();

    let max = s_s.length > t_s.length ? s_s.length : t_s.length;
    let count = 0;
    for (let i = 0; i < max; i++){

        if (s_s[i] == undefined || t_s[i] == undefined) {
            count++;
        }else if (s_s[i] != t_s[i]) {
            count += 2;
        }
        console.log("iteration "+i+" count: "+count)
    }
    console.log(s_s);
    console.log(t_s);
    console.log(count);
    console.log( count == k ? "YES" : "NO");
}


appendAndDelete("hackerhappy","hackerrank",9);

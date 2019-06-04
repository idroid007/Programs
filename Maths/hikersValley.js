function countingValleys(n, s) {

    let status=true;
    let tracker=0;
    let valleys=0;
    for(let i=0;i<s.length;i++){
     if(s[i]=="D"){
         tracker--;
        status = false;
     }   else{
        tracker++

     }
     if(tracker==0 && s[i]=='U'){
         valleys++;
     }
    }
   return valleys;
}

countingValleys(8,"UDDDUDUU")
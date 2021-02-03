// Given an array of ints, return True if the array contains a 2 next to a 2 somewhere.
//
// has22([1, 2, 2]) → true
//
// has22([1, 2, 1, 2]) → false
//
// has22([2, 1, 2]) → false

function has22(arr){
    
    //loop through each int.
    for ( let i=0; i<arr.length; i++ ) {
        
        // check if arr[i] is 2 and if arr[i+1] is 2 
        if ( arr[i] === 2 && arr[i+1] === 2) {    

            return true;
            }

        //return t/f by assuming false until true
        } return false;
} 

// trial line:
// console.log(has22([1, 2, 1, 2]));

module.exports = has22;



var arr = [1,2,3,4,5]

arr.forEach(item => {
    console.log(item + " x " + item + " = " + (item * item))
})


arr.forEach(function(item, index, arr2){

    arr2.forEach(item2 =>     console.log(item + " x " + item2 + " = " + (item * item2)))

})
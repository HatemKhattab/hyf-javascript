//working with multi dimentional array

//3 dimArray
const arr3d =[
              [ [1,2,3], [4,5,6], [7,8,9] ],
              [ [10,11,12], [13,14,15], [16,17,18] ],
            ];

function printValuesOf3dArray(arr){
  arr.forEach(level2 => {
    level2.forEach(level3 => {
      level3.forEach(element => {console.log(element)});
    });
  });
}

printValuesOf3dArray(arr3d);
console.log(arr3d);
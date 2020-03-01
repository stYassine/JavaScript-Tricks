///
/// Falsy values, are values when converted into boolean always becomes false
///
/// 5 falsy values in JS
/// '', 0, undefined, null, NaN

/// undefined is what know as falsy value
let temp =[30, 19, -25, undefined, 13, 0, '', null, NaN];


/// the filter method converts all values to boolean & it's truthy it's kept within the array
let filterTemp =temp.filter((val) => val != false);



console.log(filterTemp);
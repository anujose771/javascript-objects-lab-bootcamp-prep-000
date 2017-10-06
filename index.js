var recipes = {};

var obj = { prop: 1 };
function updateObjectWithKeyAndValue(obj, key, value){
  obj = {key : value};
}
updateObjectWithKeyAndValue(obj, 'prop2', 2);

var recipes = {};

var obj = { prop: 1 };
function updateObjectWithKeyAndValue(obj, key, value){
  obj = {key : value};
  return obj;
}
updateObjectWithKeyAndValue(obj, 'prop2', 2);


function updateObjectWithKeyAndValue(obj, key, value){
   return Object.assign({}, obj, { [key]: value })
}
updateObjectWithKeyAndValue(obj, 'prop2', 2);

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  //object[key] = value; 
  object = {key : value};

  return object;
}
destructivelyUpdateObjectWithKeyAndValue(obj, 'prop2', 2);




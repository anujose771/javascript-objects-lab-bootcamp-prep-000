var recipes = {};

var obj = { prop: 1 };
function updateObjectWithKeyAndValue(obj, key, value){
  object[key] = value;
  return obj;
}
updateObjectWithKeyAndValue(obj, 'prop2', 2);

function updateObjectWithKeyAndValue(obj, key, value){
   return Object.assign({}, obj, { [key]: value })
}
updateObjectWithKeyAndValue(obj, 'prop2', 2);

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}
destructivelyUpdateObjectWithKeyAndValue(obj, 'prop2', 2);

function deleteFromObjectByKey(obj, key){
  var temp = Object.assign ({}, obj);
  delete temp.key ;
  return temp;
}
deleteFromObjectByKey(obj, 'prop')

function deleteFromObjectByKey(obj, key){
  delete obj.key ;
  return obj;
}
deleteFromObjectByKey(obj, 'prop')

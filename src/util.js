function split(s,splitter,limit){
  let list = s.split(splitter,limit);
  if(list[list.length-1]===''){
    list.pop();
  }
  return list;
}

module.exports = {
  split
}
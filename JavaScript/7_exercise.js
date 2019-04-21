function ArrayToList(a){
  let head= new Node(a[0]);
  for (let i=1; i<a.length; i++){
    AddNodeToList(a[i],head);
  }
  return head;
}


function Node(b){
  this.value=b;
  this.next=null;
}

function AddNodeToList(value,head){
  let addedNode= new Node(value);
  let currentNode=head;
  while(currentNode.next){
    currentNode=currentNode.next;
  }
  currentNode.next=addedNode;
}

function ListToArray(list){
  let currentNode=list;
  let result=[];
  while(currentNode){
    result.push(currentNode.value);
    currentNode=currentNode.next;
  }
  return result;
}

function prepend(value,head){
  let newHead= new Node(value);
  let currentNode=head;
  while(currentNode){
    AddNodeToList(currentNode.value,newHead);
    currentNode=currentNode.next;
  }
  return newHead;
}
function nth(list,order_number){
  let result='';
  let order=0;
  let currentNode=list;
  while(order<=order_number){
    if(!currentNode){
      result=undefined;
      break;
    }
    else{
      result=currentNode.value;
    }
    order++;
    currentNode=currentNode.next;
  }
  return result;
}

function nthRec(list,order_number){
  let result='';
  if(order_number==0){
    result=list.value;
    }
  else if(list.next){
    result=nthRec(list.next, order_number-1);
  }
  else{
    result=undefined;
  }
  return result;
}


let a=[1,2,3];
console.log(ArrayToList(a));
let list=ArrayToList(a);
console.log(ListToArray(list));
console.log(prepend(5,list))
console.log(nth(list,2));
console.log(nthRec(list,2));





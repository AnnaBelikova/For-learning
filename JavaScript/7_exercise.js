function arrayToList(a){
  let head= new node(a[a.length-1]);
  for (let i=a.length-2; i>=0; i--){
   // head = prepend (a[i],head);
   let newNode= new node (a[i]);
   newNode.next=head;
   head = newNode;
  }
  return head;
}


function node(b){
  this.value=b;
  this.next=null;
}

function addNodeToList(value,head){
  let addedNode= new node(value);
  let currentNode=head;
  while(currentNode.next){
    currentNode=currentNode.next;
  }
  currentNode.next=addedNode;
}

function listToArray(list){
  let currentNode=list;
  let result=[];
  while(currentNode){
    result.push(currentNode.value);
    currentNode=currentNode.next;
  }
  return result;
}

function prepend(value,head){
  let newHead= new node(value);
  let currentNode=head;
  while(currentNode){
    addNodeToList(currentNode.value,newHead);
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
console.log(arrayToList(a));

let list=arrayToList(a);
console.log(listToArray(list));
console.log(prepend(5,list));
console.log(nth(list,1));
console.log(nthRec(list,2));

function LinkedList () {
    this.head = null;
}

LinkedList.prototype.push = function (val) {
    var node = {value: val, next: null};

    if (!this.head) {
        this.head = node;    
    }else{
        current = this.head;
        while(current.next) {
            current = current.next;
        }
        current.next = node;
    }
};

LinkedList.prototype.remove = function (val) {
    current = this.head;

    //1. if head is the remove item.
    if (current.value == val) {
        this.head = current.next;
    }else{
        //2. If item in between head and tail
        previous = current;
        current = current.next;
        while(current.next){
            if (current.value == val) {
                previous.next = current.next;
            }
            previous = current;
            current = current.next;
        }

        //3. if item in the tail
        if (current.value == val) {
            previous.next = null;
        }
    }
};

LinkedList.prototype.reverse = function (){
    
    if (!this.head || !this.head.next) {
        return ;
    }

    previous = null;
    current = this.head;
    var next;

    while(current) {
        next = current.next;
        current.next = previous;

        previous = current;
        current = next;
    }

    this.head = previous;
};

LinkedList.prototype.removeDuplicates = function () {
    if (!this.head || !this.head.next) {
        return ;
    }

    var previous, current,hashNodes = {},
        dupplicateCount = 0,
        dupplicates = [];

        previous = this.head;
        current = previous.next;
        hashNodes[previous.value] = true;
        

    while (current){
        
        //if already in hashmap 
        if (hashNodes[current.value]) {
            previous.next = current.next;

            dupplicateCount ++;
            dupplicates.push(current.value);
        }else{
            hashNodes[current.value] = true;
            previous = current;
        }

        current = current.next;
    }

    console.log('Total Duplicates:', dupplicateCount, 'duplicate items: ', dupplicates);
};




LinkedList.prototype.show = function () {
    if (!this.head) {
        console.log('empty list');
        return;
    }
    current = this.head;
    do {
        console.log('>>', current.value);
        current = current.next;
    }while(current);

    console.log('----- Finish -----');
};

function deep_copy (obj) 
{
    var temp = JSON.stringify(obj); 
    return JSON.parse(temp);
}

LinkedList.prototype.is_palindrome = function () 
{
    var l1 = this,
        l2 = deep_copy(this);

    Object.setPrototypeOf(l2, this);    
    l2.reverse();    

    current = l1.head;
    reverseCurrent = l2.head;

    isTrue = true;

    while(current) {

        if (current.value != reverseCurrent.value) {
            isTrue = false;
            break;
        }

        current = current.next;
        reverseCurrent = reverseCurrent.next;
    }
    
    return isTrue;

}


//Test 

let ll = new LinkedList();

// ll.push(1);
// ll.push(1);
// ll.push(2);
// ll.push(3);
// ll.push(3);
// ll.push(4);
// ll.push(5);
// ll.push(3);
// ll.push(6);
// ll.push(7);
// ll.push(8);
// ll.push(5);
// ll.push(3);
// ll.push(10);

// ll.show();

// //ll.reverse();
// //ll.show();

// ll.removeDuplicates();
// ll.show();

[1,2,3,2,1,5].forEach((val) => {
    ll.push(val);
});
console.log(ll.is_palindrome());
console.log(ll);

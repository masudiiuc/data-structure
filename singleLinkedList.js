function Node(val) {
    this.data = val;
    this.next = null;
}

function LinkedList() {
    this.length = 0;
    this.head = null;
};

LinkedList.prototype.add = function (value) {
    var node = new Node(value),
        currentNode = this.head;

    if (!currentNode) {
        this.head = node;
        this.length++;
        return node;
    }

    while(currentNode.next) {
        currentNode = currentNode.next;
    }
    currentNode.next = node;
    this.length++;
    return node;
};

LinkedList.prototype.addAndSort = function (value) {
    var node = new Node(value),
        currentNode = this.head;

    if (!currentNode) {
        this.head = node;
        this.length++;
        return node;
    }
    console.log("---------------------------------------\n");
    while(currentNode.next) {
        if (value == currentNode.data && this.head != currentNode) {
            
            node.next = currentNode.next;
            currentNode.next = node;
            this.length++;
            break;

        }else if (value < currentNode.data && this.head == currentNode) {

            node.next = currentNode;
            this.head = node;
            this.length++;
            break;

        }else if (value > currentNode.data && value < currentNode.next.data) { 
            debugger;
            if (!currentNode.next) {
                //insert after
                currentNode.next = node;
                this.length++;
            }else if (currentNode.next && value > currentNode.next.data) {
                //insert after current node
            }  
            break;     
        } 

        currentNode = currentNode.next;
    }
    
    return node;
};

LinkedList.prototype.show = function () {
    var pointer = this.head;

    while(pointer != null) {
        console.log('>>', pointer);
        pointer = pointer.next;
    }
}

var ll = new LinkedList();

ll.add('2');
ll.add('3');
ll.add('4');

console.log(ll.show());

ll.addAndSort('1');
ll.addAndSort('3');
ll.addAndSort('5');

console.log(ll.show());
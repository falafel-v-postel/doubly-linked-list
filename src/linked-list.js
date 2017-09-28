const Node = require('./node');

class LinkedList {
    constructor() {
        this._length=0;
        this.head=null;
        this.tail=null;
    }

    append(data) {
        var node=new Node (data);
        if (this._length) {
            this.tail.next=node;
            node.previous=this.tail;
            this.tail=node;
        } else {
            this.tail=node;
            this.head=node;
        }
            this._length++;
        
            return node;
    }

    head() {}

    tail() {}

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;

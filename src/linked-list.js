const Node = require('./node');

class LinkedList {
    constructor() {
        this.length=0;
        this._head=null;
        this._tail=null;
    }

    append(data) {
        const node=new Node (data);
        if (this.length) {
            this._tail.next=node;
            node.previous=this._tail;
            this._tail=node;
        } else {
            this._tail=node;
            this._head=node;
        }
        this.length++;
        return node;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        let currentNode=this._head;
        for (let i=0; i<index; i++) {
            currentNode=currentNode.next;
        }    
        return currentNode.data;      
    }

    insertAt(index, data) {

    }

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {
        let currentNode=this._head;
        for(let i=0; i<length; i++) {
            currentNode.next = currentNode.reverse(); // [ 3, 2, 1]
        }
        return this; // 3, 2, 1
        
    }

    indexOf(data) {
        let i=0;
        let currentNode=this._head;
        while (data!==currentNode.data){
            if (!currentNode.next) {return -1}; // если ничего не нашли   
        currentNode = currentNode.next;   
        i++;
        }          
        return i;         
    }
}

module.exports = LinkedList;

/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    
    if( !l1 && !l2 ) return null
    
    //add all items to an array
    var xs = []
    var count = 0
    var newList = new ListNode()
    
    while( l1 ) {
        xs.push( l1.val )
        count++
        l1 = l1.next
    }
    while( l2 ) {
        xs.push( l2.val )
        count++
        l2 = l2.next
    }
    
    xs.sort( (a,b) => { return a-b } )
    
    newList.val = xs[0]
    newList.next = null
    var newListTail = newList
    for( var i = 1; i < count; i++ ) {
        var tempNode = new ListNode()
        tempNode.val = xs[i]
        tempNode.next = null
        newListTail.next = tempNode
        newListTail = tempNode
    }
    
    return newList
};

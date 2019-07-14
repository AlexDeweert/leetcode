/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {

    let discovered = {}
    //push and shift
    let queue = []
    //init discovery
    for( word in wordList ) {
        discovered[wordList[word]] = [0,'']
    }
    discovered[beginWord] = [0,'']
    
    //enqueue start vertex
    queue.push(beginWord)
    
    //mark discovered
    discovered[beginWord][0] = 1
    //while q not empty:
    while( queue.length > 0 ) {
        //v = queue.shift
        let v = queue.shift()
        //if v is goal, calculate distance (backtrack parents and count)
        if( v == endWord) return distance(discovered,endWord,beginWord,1)
        //else for all adjacent nodes
        else {
            for( let i = 0; i < wordList.length; i++ ) {
                if( wordsDifferByOne(v,wordList[i]) ) {
                    //if node not discovered
                    if( discovered[wordList[i]][0] != 1) {
                        //mark as discovered
                        discovered[wordList[i]][0] = 1
                        //set parent of adj node to v
                        discovered[wordList[i]][1] = v
                        //enqueue node
                        queue.push(wordList[i])
                    }
                }
            }
        }
    }
    return 0
};

/**
 * @param {string} w1
 * @param {string} w2
 * @return {boolean}
 */
var wordsDifferByOne = function(w1,w2) {
    //Compare each word letter by letter, keep track of num differences
    //if num differences at any time exceed one, return false, else return true
    let difference = 0
    
    //compare each letter in w1 and w2
    for( let i = 0; i < w1.length; i++ ) {
        if( w1[i] != w2[i] ) difference++
        if( difference > 1 ) return false
    }
    return true
}

/**
 *@return {number}
 */
var distance = function(dict,start,root,dist) {
    if( start == root ) return dist
    return distance(dict,dict[start][1],root,dist+1)
};

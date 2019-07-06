/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
 
    var visited = {}
    var result = 0
    
    for( let i = 0; i < grid.length; i++ ) {
        for( let j = 0; j < grid[0].length; j++ ) {
            if( grid[i][j] == 1 && visited[[i,j]] == null ) {
                dfs(i,j,visited,grid)
                result++
            }
        }
    }    
    return result
};

 var dfs = function(nodeRow,nodeCol,visited,grid) {
     
     let root = [nodeRow,nodeCol] //rows,cols
     let stack = []
     stack.push(root)
     //while stack has stuff do a dfs
     while( stack.length > 0 ) {
         
         let root = stack.pop()
         let rootRow = root[0]
         let rootCol = root[1]
         
         if( grid[rootRow][rootCol] == 1 && visited[root] == null ) {
             // console.log("Visiting" + " rootRow: " + rootRow + ", rootCol: " + rootCol)
             visited[root] = 1
             //Check up, down, left, right for adj nodes
             let up = 0
             if( rootRow > 0 ) {
                 up = grid[rootRow-1][rootCol]
             }
             let down = 0
             if( rootRow < grid.length-1 ) {
                 down = grid[rootRow+1][rootCol]
             }
             let left = 0
             if( rootCol > 0 ) {
                 left = grid[rootRow][rootCol-1]
             }
             let right = 0
             if( rootCol < grid[0].length-1 ) {
                 right = grid[rootRow][rootCol+1]
             }

             //push any adjacent nodes
             if( up ) stack.push([rootRow-1,rootCol])
             if( down ) stack.push([rootRow+1,rootCol])
             if( left ) stack.push([rootRow,rootCol-1])
             if( right ) stack.push([rootRow,rootCol+1])    
         }
     }
     //if we got here a DFS was completed, 
     
 }


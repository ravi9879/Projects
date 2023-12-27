function is_safe( r , c , oard , v ) {
    let e = 0 , f = 0 ;
    for(let i = 0 ; i < 9 ; i++){
        if(oard[r][i] === v){
            return false ;
        }
        if(oard[i][c] === v){
            return false ;
        }
        e = 3*(Math.floor(r/3)) + Math.floor(i/3) ;
        f = 3*(Math.floor(c/3)) + Math.floor(i%3)  ;
        
        if(oard[e][f] === v){
            return false ;
        } 
    } 
    return true ;
    
}



function suduko_solver( oard ){
    let n = 9;
    for(let r = 0 ; r < n ; r++){
        for(let c = 0 ; c < n ; c++ ){
            if(oard[r][c] === 0){
                for(let v = 1 ; v <= 9 ; v++){
                    if(is_safe(r,c, oard ,v)){
                        oard[r][c] = v ; 
                        const as = suduko_solver(oard);
                        if(as){
                            return true ;
                        }
                        else {
                            oard[r][c] = 0 ;
                        }
                    }
                }
                return false ;
            }
        }
    }
    return true ;
}

let oard = [[1,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]

let ans =  suduko_solver(oard) ;
console.log(ans) ;

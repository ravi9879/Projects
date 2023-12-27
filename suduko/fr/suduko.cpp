#include<iostream>
using namespace std ;
 
// bool sfa1(int r , int c ,int oard[9][9] ,int v ) {
//     int e = 0 , f = 0 ;
//     for(int i = 0 ; i < 9 ; i++){
//         if(oard[r][i] == v){
//             return false ;
//         }
//     }
//     for(int i = 0 ; i < 9 ; i++){ 
//         if(oard[i][c] == v){
//             return false ;
//         }
//     }  
//     e =  r - r%3  ;
//     f = c - c%3; 
//     for(int j = 0 ; j < 9 ; j++){
//         for(int i = 0 ; i < 9 ; i++){
//             if(oard[j + e ][i + f] == v){ 
//                 return false ;
//             }
//         } 
//     } 
//     return true ; 
// }






// bool asolve1(int oard[9][9] ,int r ,int c ) {
//     int n = 9;
//     if(r == 8 && c == 9){
//         return true ;
//     }
//     if( c == 9){
//         r++ ;
//         c = 0 ; 
//     }
//     if(oard[r][c] > 0){
//         return asolve1(oard , r , c) ;
//     }

//     for(int p = 1 ; p <= n ; p++){ 
//         if(sfa1(r,c, oard ,p)){
//             oard[r][c] = p ; 
//             bool as = asolve1(oard , r , c );
//                 if(as){
//                     return true ;
//                     cout << 1 ;
//                 } 
//         }
//         oard[r][c] = 0 ; 
//     }
//     return false ; 
// }





 
 
// // int oard[9][9] = {{3,0,6,5,0,8,4,0,0},{5,2,0,0,0,0,0,0,0},{0,0,7,0,0,0,0,3,1},{0,0,3,0,1,0,0,0,0},{0,0,0,8,6,3,0,0,5},{0,5,0,0,9,0,6,0,0},{1,3,0,0,0,0,2,5,0},{0,0,0,0,0,0,0,7,4},{0,0,5,2,0,6,3,0,0} } ;  

// // int oard[9][9] = {{0,0,0,0,0,0,0,0,0},{0,0,2,0,8,0,0,0,0},{0,0,0,7,0,0,2,1,0},{9,0,0,1,0,7,4,0,0},{0,1,0,8,4,0,0,0,5},{0,0,0,0,2,0,0,0,0},{2,0,0,0,0,0,1,0,9},{0,0,6,0,0,0,0,5,8},{4,0,0,0,5,0,7,0,0} } ;  

 

bool sfa3(int r , int c ,int oard[9][9] ,int v ) {
    int e = 0 , f = 0 ;
    for(int i = 0 ; i < 9 ; i++){
        if(oard[r][i] == v){
            return false ;
        }
        if(oard[i][c] == v){
            return false ;
        } 
        // cout << 2 ;
        e = 3*(r/3) + (i/3) ;
        f = 3*(c/3) + (i%3) ;
        if(oard[e][f] == v){
            // cout << 0 ;
            return false ;
        }
    } 
    return true ;
}

bool asolve3(int oard[9][9] ) {
    int n = 9;
    for(int r = 0 ; r < n ; r++){
        for(int c = 0 ; c < n ; c++ ){
            if(oard[r][c] == 0){
                for(int v = 1 ; v <= 9 ; v++){
                    if(sfa3(r,c, oard ,v)){
                        oard[r][c] = v ; 
                        bool as = asolve3(oard);
                        if(as){
                            return true ;
                            // cout << 1 ;
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










int main(){
     
    int oard[9][9] = {{1,0,1,0,0,0,0,0,0},{0,0,2,0,8,0,0,0,0},{0,0,0,7,0,0,2,1,0},{9,0,0,1,0,7,4,0,0},{0,1,0,8,4,0,0,0,5},{0,0,0,0,2,0,0,0,0},{2,0,0,0,0,0,1,0,9},{0,0,6,0,0,0,0,5,8},{4,0,0,0,5,0,7,0,0} } ;  

    // int oard[9][9] = {{3,0,6,5,0,8,4,0,0},{5,2,0,0,0,0,0,0,0},{0,0,7,0,0,0,0,3,1},{0,0,3,0,1,0,0,0,0},{0,0,0,8,6,3,0,0,5},{0,5,0,0,9,0,6,0,0},{1,3,0,0,0,0,2,5,0},{0,0,0,0,0,0,0,7,4},{0,0,5,2,0,6,3,0,0} } ;  

    // cout << asolve3( oard);

    // if( asolve3(oard )){
    //     for(int r = 0 ; r < 9 ; r++){ 
    //         for(int c = 0 ; c < 9 ; c++ ){
    //             cout << oard[r][c] << " ";
    //         }  
    //         cout << endl ;
    //     } 
    // }
    // else {
    //     for(int r = 0 ; r < 9 ; r++){ 
    //         for(int c = 0 ; c < 9 ; c++ ){
    //             cout << oard[r][c] << " ";
    //         }  
    //         cout << endl ;
    //     } 
    // }

    bool ans = asolve3(oard);
    cout << ans ;


    return 0 ;
}
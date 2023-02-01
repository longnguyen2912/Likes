function buttonClick(element){
    var allLike = document.querySelectorAll(".add");
    for( var i = 0; i < allLike.length; i ++ ){
        var currentLike = Number( allLike[i].innerText );
        var newLike = currentLike + 1;
        allLike[i].innerText = Math.round( newLike );
    }
}
function buttonClick2(element){
    var allLike2 = document.querySelectorAll(".add2");
    for( var i = 0; i < allLike2.length; i ++ ){
        var currentLike2 = Number( allLike2[i].innerText );
        var newLike2 = currentLike2 + 1;
        allLike2[i].innerText = Math.round( newLike2 );
    }
}
function buttonClick3(element){
    var allLike3 = document.querySelectorAll(".add3");
    for( var i = 0; i < allLike3.length; i ++ ){
        var currentLike3 = Number( allLike3[i].innerText );
        var newLike3 = currentLike3 + 1;
        allLike3[i].innerText = Math.round( newLike3 );
    }
}
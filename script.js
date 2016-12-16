/* Nav bar open */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "black";
}

/* nav close*/
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

$(function() {

    $('#test').fadeOut(3000, function() {
        $(this).text('Portfolio website').fadeIn(3000);
    });

});
function menu() {
    var nav_id = document.getElementById("mynav");
    if(nav_id.className === "nav") {
        nav_id.className += " responsive";
    }

    else {
        nav_id.className = "nav";
    }
}


function menu() {
  var nav_id = document.getElementById("up-nav");
  let icon_nav = document.getElementById("nav-icon");
  if (nav_id.className === "nav") {
    nav_id.className += " responsive";
    icon_nav.style.transform = "rotateY(180deg)";
    icon_nav.style.boxShadow = "1px 1px 1px 1px solid #efefef"
  } else {
    nav_id.className = "nav";
    icon_nav.style.transform = "rotateY(0deg)"
    icon_nav.style.boxShadow = "1px 1px 1px 1px solid #efefef"
  }
}

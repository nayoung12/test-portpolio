
// 서브메뉴를 토글하는 함수
function toggleSubmenu(menuId) {
    var submenu = document.getElementById(menuId);
    if (submenu.style.display === "block") {
        submenu.style.display = "none";
    } else {
        submenu.style.display = "block";
    }
}
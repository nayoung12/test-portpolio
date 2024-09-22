
// 서브메뉴를 토글하는 함수
function toggleSubmenu(menuId) {
    var submenu = document.getElementById(menuId);
    if (submenu.style.display === "block") {
        submenu.style.display = "none";
    } else {
        submenu.style.display = "block";
    }
}

/*
document.addEventListener("DOMContentLoaded", function() {
    // 모든 ul 태그에 대해 클릭 이벤트를 추가
    const menuLists = document.querySelectorAll("ul");

    menuLists.forEach(function(menu) {
        menu.addEventListener("click", function() {
            // <li> 요소를 토글하는 기능
            const items = this.querySelectorAll("li");
            items.forEach(function(item) {
                if (item.style.display === "block") {
                    item.style.display = "none"; // 숨기기
                } else {
                    item.style.display = "block"; // 보이기
                }
            });
        });
    });
});
 */
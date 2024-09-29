
// 서브메뉴를 토글하는 함수
function toggleSubmenu(menuId, menuItem) {
    var submenu = document.getElementById(menuId);
    var menu = document.getElementById(menuItem);
    if (submenu.style.display === "block") {
        submenu.style.display = "none";
        menu.style.color = ""; // 기본 색상으로 복귀
    } else {
        submenu.style.display = "block";
        menu.style.color = "orange"; // 원하는 색상으로 변경 (예: 빨간색)
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
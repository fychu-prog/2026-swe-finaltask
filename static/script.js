const menuBtn = document.querySelector(".btn-menu"); // 行動版選單按鈕（漢堡按鈕）元素
const navList = document.querySelector(".nav-list"); // 主導覽選單元素

// 事件監聽器（白話翻譯版：當使用者點擊漢堡選單按鈕，我要做什麼事情）
menuBtn.addEventListener("click", function () {
    navList.classList.toggle("active"); // 我要切換主導覽選單元素上的 class，如果有 active 就移除，沒有就加上
    document.body.classList.toggle("menu-open"); // 切換 body 元素上的 class，如果有 menu-open 就移除，沒有就加上
});

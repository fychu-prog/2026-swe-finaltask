// ============================================================
// 漢堡選單開關
// ============================================================

// 1. 先「抓到」要操作的兩個元素
const menuBtn = document.querySelector(".btn-menu");   // 漢堡按鈕
const navList = document.querySelector(".nav-list");   // 選單清單 ul

// 2. 監聽漢堡按鈕的「點擊」事件
//    白話：當使用者點漢堡按鈕時，執行裡面這個 function
menuBtn.addEventListener("click", function () {
    // toggle = 切換：navList 上若已有 active 就移除、沒有就加上
    // 加上 active → CSS 的 .nav-list.active 生效 → 選單顯示
    // 移除 active → 選單收回去
    navList.classList.toggle("active");
});

// 確保在引入 anime.js 之後運行此代碼

function animateHeader() {
    // 標題 (H1) 動畫
    anime({
        targets: 'h1',
        translateY: [-20, 0], // 從上方 20px 滑到原位
        opacity: [0, 1],      // 從完全透明淡入
        duration: 800,
        easing: 'easeOutQuad'
    });

    // 導航列連結 (使用 stagger 錯開延遲)
    anime({
        targets: '.nav-list-custom .nav-item',
        opacity: [0, 1],
        translateX: [50, 0],  // 從右邊 50px 滑入
        delay: anime.stagger(100, {start: 300}), // 每個連結延遲 100ms，從 300ms 後開始
        duration: 500,
        easing: 'easeOutQuad'
    });
}

// 在頁面載入完成後執行
window.onload = animateHeader;


const profileSection = document.getElementById('section1');

// 監聽 #section1 進入視窗
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 照片動畫 (僅執行一次)
            anime({
                targets: '.profile-photo',
                scale: [0.8, 1],     // 從 80% 放大到 100%
                rotate: [-5, 0],     // 輕微逆時針旋轉後回正
                opacity: [0, 1],
                duration: 1200,
                easing: 'easeOutElastic(1, .8)'
            });

            // 學歷資訊動畫 (Stagger)
            anime({
                targets: '.degree',
                translateY: [20, 0], // 從下方 20px 滑入
                opacity: [0, 1],
                delay: anime.stagger(150, {start: 500}), // 錯開延遲
                duration: 600,
                easing: 'easeOutQuad'
            });

            // 停止觀察，避免重複觸發
            observer.unobserve(profileSection);
        }
    });
}, { threshold: 0.2 }); // 當 20% 的區塊進入視窗時觸發

observer.observe(profileSection);

const skillsSection = document.getElementById('section3');
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            // 讓 H4 標題依序強調 (透過改變顏色)
            anime({
                targets: '#section3 h4',
                color: [
                    { value: '#000000', duration: 100, delay: 0 }, // 快速變黑
                    { value: 'var(--text-dark)', duration: 400, delay: 50 }  // 變回預設顏色
                ],
                // 每個標題執行一次，並錯開 150ms 啟動
                delay: anime.stagger(150),
                easing: 'easeInOutQuad'
            });

            skillsObserver.unobserve(skillsSection);
        }
    });
}, { threshold: 0.5 });

skillsObserver.observe(skillsSection);

document.querySelectorAll('.btn-link, .btn-custom-color').forEach(button => {
    button.addEventListener('mouseenter', (e) => {
        // 懸停時，輕微上下彈跳
        anime({
            targets: e.target,
            scale: [1, 1.05, 1], // 放大到 105% 後彈回
            duration: 500,
            easing: 'easeOutQuad'
        });
    });
});
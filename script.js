/*
 * script.js
 * This file contains simple JavaScript to simulate an AI video analysis demo.
 * When the "분석 시작" button is clicked on the services page, it shows an
 * overlay indicating the analysis is in progress. After a delay, it displays
 * a completion message and hides the overlay. This is a placeholder that can
 * be replaced with actual AI integration later.
 */

document.addEventListener('DOMContentLoaded', function () {
  const demoButton = document.getElementById('demoAnalyzeBtn');
  const demoOverlay = document.getElementById('demoOverlay');
  if (demoButton && demoOverlay) {
    const overlayTitle = demoOverlay.querySelector('h5');
    const overlayMessage = demoOverlay.querySelector('p');
    demoButton.addEventListener('click', function () {
      // Show overlay with initial message
      demoOverlay.classList.remove('d-none');
      overlayTitle.textContent = 'AI 분석 중...';
      overlayMessage.textContent = '잠시만 기다려주세요.';
      // Simulate analysis time
      setTimeout(() => {
        overlayTitle.textContent = '분석 완료';
        overlayMessage.textContent = '위험 요소가 발견되지 않았습니다.';
        // Hide overlay after displaying result
        setTimeout(() => {
          demoOverlay.classList.add('d-none');
        }, 4000);
      }, 5000);
    });
  }
});
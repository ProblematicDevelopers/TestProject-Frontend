<template>
  <footer class="main-footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="footer-title">서비스</h3>
          <ul class="footer-links">
            <li><a href="#">송금</a></li>
            <li><a href="#">카드</a></li>
            <li><a href="#">대출</a></li>
            <li><a href="#">투자</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3 class="footer-title">고객지원</h3>
          <ul class="footer-links">
            <li><a href="#">공지사항</a></li>
            <li><a href="#">자주 묻는 질문</a></li>
            <li><a href="#">이용약관</a></li>
            <li><a href="#">개인정보처리방침</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3 class="footer-title">회사</h3>
          <ul class="footer-links">
            <li><a href="#">회사 소개</a></li>
            <li><a href="#">채용</a></li>
            <li><a href="#">보도자료</a></li>
            <li><a href="#">블로그</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3 class="footer-title">문의</h3>
          <p class="footer-contact">고객센터: 1599-0000</p>
          <p class="footer-contact">이메일: support@pd.com</p>
          <div class="social-links">
            <a href="#" class="social-link">📘</a>
            <a href="#" class="social-link">📷</a>
            <a href="#" class="social-link">🐦</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="copyright">© 2024 PD. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.main-footer {
  background-color: #f9fafb;
  padding: 80px 0 40px;
  margin-top: 120px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 48px;
  margin-bottom: 48px;
}

.footer-section {
  color: #4e5968;
}

.footer-title {
  font-size: 16px;
  font-weight: 700;
  color: #191f28;
  margin-bottom: 16px;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  color: #6b7684;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: #191f28;
}

.footer-contact {
  font-size: 14px;
  color: #6b7684;
  margin-bottom: 8px;
}

.social-links {
  display: flex;
  gap: 16px;
  margin-top: 16px;
}

.social-link {
  font-size: 24px;
  text-decoration: none;
  transition: transform 0.2s ease;
}

.social-link:hover {
  transform: scale(1.1);
}

.footer-bottom {
  padding-top: 32px;
  border-top: 1px solid #e5e8eb;
  text-align: center;
}

.copyright {
  font-size: 14px;
  color: #8b95a1;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 32px;
  }

  .main-footer {
    padding: 60px 0 30px;
  }
}
</style>
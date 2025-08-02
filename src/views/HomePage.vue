<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <h1 class="hero-title">
          <span class="title-line">시험 준비의 모든 것</span>
          <span class="title-line">문제은행에서 스마트하게</span>
        </h1>
        <div class="hero-buttons">
          <button class="cta-btn primary">무료 체험 시작하기</button>
          <button class="cta-btn outline">더 알아보기</button>
          <button class="cta-btn test" @click="testAPI">API 테스트</button>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-icon">📖</div>
            <h3 class="feature-title">문제 은행</h3>
            <p class="feature-desc">30만 개 이상의 고품질 문제 보유</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎓</div>
            <h3 class="feature-title">맞춤 학습</h3>
            <p class="feature-desc">AI 기반 개인 맞춤형 학습 커리큘럼</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📊</div>
            <h3 class="feature-title">성취도 분석</h3>
            <p class="feature-desc">실시간 학습 진도 및 취약점 분석</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🏆</div>
            <h3 class="feature-title">모의고사</h3>
            <p class="feature-desc">실제 시험과 동일한 환경의 모의고사</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2 class="cta-title">오늘부터 시작하세요</h2>
        <p class="cta-desc">성공적인 시험 준비의 첫걸음을 함께하세요</p>
        <button class="cta-button">무료 체험 시작하기</button>
      </div>
    </section>
    <FooterComponent />
  </div>
</template>

<script setup>
import FooterComponent from '@/components/FooterComponent.vue'
import { ref } from 'vue'
import { config, apiClient } from '@/config/api.js'

const testAPI = async () => {
  try {
    const response = await apiClient.get(config.API_ENDPOINTS.test)
    alert(response.message)
  } catch (error) {
    alert('API 연결 실패: ' + error.message)
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.home-page {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: #191f28;
  background-color: #ffffff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(180deg, #f9fafb 0%, #ffffff 100%);
  padding-top: 80px;
}

.hero-title {
  font-size: clamp(48px, 8vw, 80px);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 48px;
  color: #191f28;
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.title-line {
  display: block;
}

.hero-buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  animation: fadeInUp 1s ease-out 0.3s both;
}

.cta-btn {
  padding: 16px 32px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.cta-btn.primary {
  background-color: #3182f6;
  color: #ffffff;
}

.cta-btn.primary:hover {
  background-color: #2272eb;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(49, 130, 246, 0.3);
}

.cta-btn.outline {
  background-color: transparent;
  color: #3182f6;
  border: 2px solid #3182f6;
}

.cta-btn.outline:hover {
  background-color: #3182f6;
  color: #ffffff;
}

.cta-btn.test {
  background-color: #10b981;
  color: #ffffff;
  font-size: 14px;
  padding: 12px 24px;
}

.cta-btn.test:hover {
  background-color: #059669;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.3);
}


/* Features Section */
.features-section {
  padding: 120px 0;
  background-color: #f9fafb;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  margin-top: 80px;
}

.feature-card {
  background: #ffffff;
  padding: 48px 32px;
  border-radius: 24px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
}

.feature-icon {
  font-size: 64px;
  margin-bottom: 24px;
}

.feature-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #191f28;
}

.feature-desc {
  font-size: 16px;
  line-height: 1.6;
  color: #6b7684;
}

/* CTA Section */
.cta-section {
  padding: 120px 0;
  text-align: center;
  background: linear-gradient(135deg, #3182f6 0%, #2272eb 100%);
  color: #ffffff;
}

.cta-title {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 16px;
}

.cta-desc {
  font-size: 20px;
  margin-bottom: 48px;
  opacity: 0.9;
}

.cta-button {
  padding: 16px 48px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  background-color: #ffffff;
  color: #3182f6;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-section {
    padding: 80px 0;
    min-height: auto;
  }

  .feature-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .features-section,
  .cta-section {
    padding: 80px 0;
  }
}
</style>
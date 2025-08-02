<template>
  <header class="main-header" :class="{ 'scrolled': isScrolled }">
    <div class="header-container">
      <div class="logo">
        <a href="/" class="logo-text" style="text-decoration-line: none"> 문제적 개발자들 </a>
      </div>
      <nav class="nav-menu">
        <a href="#" class="nav-link">문제은행</a>
        <a href="#" class="nav-link">모의고사</a>
        <a href="#" class="nav-link">학습분석</a>
        <a href="#" class="nav-link">커뮤니티</a>
        <a href="#" class="nav-link">이용안내</a>
      </nav>
      <div class="header-actions">
        <router-link to="/signup" class="auth-btn outline">회원가입</router-link>
        <router-link to="/login" class="auth-btn primary">로그인</router-link>
      </div>
      <button class="mobile-menu-btn" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.main-header.scrolled {
  background-color: rgba(255, 255, 255, 0.98);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-text {
  font-size: 28px;
  font-weight: 700;
  color: #3182f6;
  cursor: pointer;
}

.nav-menu {
  display: flex;
  gap: 32px;
  align-items: center;
}

.nav-link {
  color: #4e5968;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.2s ease;
  position: relative;
}

.nav-link:hover {
  color: #191f28;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #3182f6;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.auth-btn {
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  text-decoration: none;
  display: inline-block;
}

.auth-btn.outline {
  background-color: transparent;
  color: #4e5968;
  border: 1px solid #e5e8eb;
}

.auth-btn.outline:hover {
  background-color: #f9fafb;
  border-color: #d1d6db;
}

.auth-btn.primary {
  background-color: #3182f6;
  color: #ffffff;
}

.auth-btn.primary:hover {
  background-color: #2272eb;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(49, 130, 246, 0.25);
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
  border: none;
  background: transparent;
  cursor: pointer;
}

.mobile-menu-btn span {
  width: 24px;
  height: 2px;
  background-color: #191f28;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }
}
</style>

<template>
  <div class="auth-page">
    <div class="auth-container">
      <div class="auth-header">
        <router-link to="/" class="logo-link">
          <h1 class="logo">문제적 개발자들</h1>
        </router-link>
      </div>
      
      <div class="auth-content">
        <h2 class="auth-title">회원가입</h2>
        <p class="auth-subtitle">학습을 시작하기 위해 계정을 만들어주세요</p>
        
        <form @submit.prevent="handleSignup" class="auth-form">
          <div class="form-group">
            <label for="name" class="form-label">이름</label>
            <input
              id="name"
              v-model="name"
              type="text"
              class="form-input"
              placeholder="이름을 입력하세요"
              required
            />
          </div>
          
          <div class="form-group">
            <label for="email" class="form-label">이메일</label>
            <input
              id="email"
              v-model="email"
              type="email"
              class="form-input"
              placeholder="이메일을 입력하세요"
              required
            />
          </div>
          
          <div class="form-group">
            <label for="password" class="form-label">비밀번호</label>
            <input
              id="password"
              v-model="password"
              type="password"
              class="form-input"
              placeholder="8자 이상 입력하세요"
              required
              minlength="8"
            />
            <p class="form-hint">영문, 숫자, 특수문자를 포함해주세요</p>
          </div>
          
          <div class="form-group">
            <label for="passwordConfirm" class="form-label">비밀번호 확인</label>
            <input
              id="passwordConfirm"
              v-model="passwordConfirm"
              type="password"
              class="form-input"
              placeholder="비밀번호를 다시 입력하세요"
              required
            />
          </div>
          
          <div class="terms-group">
            <label class="checkbox-label">
              <input type="checkbox" v-model="agreeAll" @change="handleAgreeAll" />
              <span class="checkbox-text bold">전체 동의</span>
            </label>
            
            <div class="terms-list">
              <label class="checkbox-label">
                <input type="checkbox" v-model="agreeTerms" required />
                <span class="checkbox-text">[필수] 이용약관 동의</span>
              </label>
              <label class="checkbox-label">
                <input type="checkbox" v-model="agreePrivacy" required />
                <span class="checkbox-text">[필수] 개인정보 수집 및 이용 동의</span>
              </label>
              <label class="checkbox-label">
                <input type="checkbox" v-model="agreeMarketing" />
                <span class="checkbox-text">[선택] 마케팅 정보 수신 동의</span>
              </label>
            </div>
          </div>
          
          <button type="submit" class="submit-btn">회원가입</button>
        </form>
        
        <div class="divider">
          <span>또는</span>
        </div>
        
        <div class="social-login">
          <button class="social-btn google">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
              <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
            </svg>
            Google로 계속하기
          </button>
          <button class="social-btn kakao">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 0C4.029 0 0 3.12 0 6.98c0 2.42 1.576 4.555 3.971 5.8l-.982 3.677a.374.374 0 00.577.416L7.38 14.41c.525.065 1.066.1 1.62.1 4.971 0 9-3.12 9-6.98S13.971 0 9 0" fill="#000"/>
            </svg>
            카카오로 계속하기
          </button>
          <button class="social-btn naver">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M12.24 9.68L5.46 0H0v18h5.76V8.32L12.54 18H18V0h-5.76v9.68z" fill="#fff"/>
            </svg>
            네이버로 계속하기
          </button>
        </div>
        
        <p class="auth-link">
          이미 계정이 있으신가요? 
          <router-link to="/login" class="link">로그인</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const name = ref('')
const email = ref('')
const password = ref('')
const passwordConfirm = ref('')
const agreeAll = ref(false)
const agreeTerms = ref(false)
const agreePrivacy = ref(false)
const agreeMarketing = ref(false)

const handleAgreeAll = () => {
  agreeTerms.value = agreeAll.value
  agreePrivacy.value = agreeAll.value
  agreeMarketing.value = agreeAll.value
}

watch([agreeTerms, agreePrivacy, agreeMarketing], () => {
  agreeAll.value = agreeTerms.value && agreePrivacy.value && agreeMarketing.value
})

const handleSignup = () => {
  if (password.value !== passwordConfirm.value) {
    alert('비밀번호가 일치하지 않습니다.')
    return
  }
  
  // TODO: 실제 회원가입 로직 구현
  console.log('Signup attempt:', { 
    name: name.value, 
    email: email.value,
    agreeTerms: agreeTerms.value,
    agreePrivacy: agreePrivacy.value,
    agreeMarketing: agreeMarketing.value
  })
  // 회원가입 성공 시 로그인 페이지로 이동
  // router.push('/login')
}
</script>

<style scoped>
.auth-page {
  min-height: 100vh;
  background-color: #f9fafb;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 20px 20px;
}

.auth-container {
  width: 100%;
  max-width: 440px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  padding: 48px;
}

.auth-header {
  text-align: center;
  margin-bottom: 40px;
}

.logo-link {
  text-decoration: none;
}

.logo {
  font-size: 24px;
  font-weight: 700;
  color: #3182f6;
}

.auth-content {
  width: 100%;
}

.auth-title {
  font-size: 28px;
  font-weight: 700;
  color: #191f28;
  margin-bottom: 8px;
  text-align: center;
}

.auth-subtitle {
  font-size: 16px;
  color: #6b7684;
  text-align: center;
  margin-bottom: 32px;
}

.auth-form {
  width: 100%;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #333d4b;
  margin-bottom: 8px;
}

.form-input {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #e5e8eb;
  border-radius: 8px;
  font-size: 16px;
  color: #191f28;
  transition: all 0.2s ease;
  box-sizing: border-box;
}

.form-input:focus {
  outline: none;
  border-color: #3182f6;
  box-shadow: 0 0 0 3px rgba(49, 130, 246, 0.1);
}

.form-input::placeholder {
  color: #b0b8c1;
}

.form-hint {
  margin-top: 6px;
  font-size: 13px;
  color: #8b95a1;
}

.terms-group {
  margin-bottom: 24px;
  padding: 16px;
  background-color: #f9fafb;
  border-radius: 8px;
}

.terms-list {
  margin-top: 12px;
  padding-left: 24px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  cursor: pointer;
}

.checkbox-label:last-child {
  margin-bottom: 0;
}

.checkbox-label input {
  margin-right: 8px;
}

.checkbox-text {
  font-size: 14px;
  color: #4e5968;
}

.checkbox-text.bold {
  font-weight: 600;
  color: #191f28;
}

.submit-btn {
  width: 100%;
  padding: 16px;
  background-color: #3182f6;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.submit-btn:hover {
  background-color: #2272eb;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(49, 130, 246, 0.25);
}

.divider {
  position: relative;
  text-align: center;
  margin: 32px 0;
}

.divider::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background-color: #e5e8eb;
}

.divider span {
  position: relative;
  padding: 0 16px;
  background-color: #ffffff;
  color: #8b95a1;
  font-size: 14px;
}

.social-login {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;
}

.social-btn {
  width: 100%;
  padding: 14px;
  border: 1px solid #e5e8eb;
  border-radius: 8px;
  background-color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.social-btn:hover {
  background-color: #f9fafb;
  border-color: #d1d6db;
}

.social-btn.kakao {
  background-color: #FEE500;
  border-color: #FEE500;
}

.social-btn.kakao:hover {
  background-color: #FDD800;
  border-color: #FDD800;
}

.social-btn.naver {
  background-color: #03C75A;
  border-color: #03C75A;
  color: #ffffff;
}

.social-btn.naver:hover {
  background-color: #02B550;
  border-color: #02B550;
}

.auth-link {
  text-align: center;
  font-size: 14px;
  color: #6b7684;
}

.link {
  color: #3182f6;
  text-decoration: none;
  font-weight: 600;
}

.link:hover {
  text-decoration: underline;
}

@media (max-width: 480px) {
  .auth-container {
    padding: 32px 24px;
  }
  
  .auth-title {
    font-size: 24px;
  }
}
</style>
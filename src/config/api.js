// API 설정
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080'
const ENV = import.meta.env.VITE_ENV || 'development'

// 환경별 설정
const envConfig = {
  development: {
    API_BASE_URL: 'http://localhost:8080',
    DEBUG: true
  },
  local: {
    API_BASE_URL: 'http://localhost:8080',
    DEBUG: true
  },
  production: {
    API_BASE_URL: 'http://52.79.176.109:8080',
    DEBUG: false
  }
}

// 현재 환경 설정 가져오기
const currentConfig = envConfig[ENV] || envConfig.development

export const config = {
  API_BASE_URL: API_BASE_URL || currentConfig.API_BASE_URL,
  DEBUG: currentConfig.DEBUG,
  ENV,
  API_ENDPOINTS: {
    // 인증 관련
    login: '/api/auth/login',
    register: '/api/auth/register',
    logout: '/api/auth/logout',
    refresh: '/api/auth/refresh',
    
    // 사용자 관련
    users: '/api/users',
    profile: '/api/users/profile',
    
    // 문제은행 관련
    problems: '/api/problems',
    categories: '/api/categories',
    exams: '/api/exams',
    
    // 추가 엔드포인트들...
  }
}

// 디버그 모드일 때 설정 정보 출력
if (config.DEBUG) {
  console.log('API Configuration:', {
    ENV: config.ENV,
    API_BASE_URL: config.API_BASE_URL
  })
}

// Axios 또는 Fetch 래퍼 함수
export const apiClient = {
  get: async (endpoint) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`)
    return response.json()
  },

  post: async (endpoint, data) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    return response.json()
  },

  // PUT, DELETE 등 추가...
}

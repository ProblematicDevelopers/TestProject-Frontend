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
    // 인증 관련야
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

    // 테스트
    test: '/api/v1/demo/test',

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

import axios from 'axios'

// Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: config.API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
})

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    // 토큰이 있으면 헤더에 추가
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    if (error.response?.status === 401) {
      // 인증 에러 처리
      localStorage.removeItem('token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

// API 클라이언트
export const apiClient = {
  get: (endpoint, params) => axiosInstance.get(endpoint, { params }),
  post: (endpoint, data) => axiosInstance.post(endpoint, data),
  put: (endpoint, data) => axiosInstance.put(endpoint, data),
  delete: (endpoint) => axiosInstance.delete(endpoint),
  patch: (endpoint, data) => axiosInstance.patch(endpoint, data)
}

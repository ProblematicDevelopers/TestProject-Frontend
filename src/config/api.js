// API 설정
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://52.79.176.109:8080'

export const config = {
  API_BASE_URL,
  API_ENDPOINTS: {
    // 예시 엔드포인트들
    login: '/api/auth/login',
    register: '/api/auth/register',
    users: '/api/users',
    // 추가 엔드포인트들...
  }
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

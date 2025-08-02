# 빌드 스테이지 - 멀티 플랫폼 지원
FROM node:20-alpine as build-stage

WORKDIR /app

# package.json만 먼저 복사 (캐시 활용)
COPY package.json ./

# npm install로 설치 (package-lock.json 무시)
# 각 플랫폼에서 적절한 패키지가 설치됨
RUN npm install

# 소스 코드 복사
COPY . .

# 빌드
RUN npm run build

# 프로덕션 스테이지
FROM nginx:alpine

# nginx 설정 파일
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 빌드된 파일 복사
COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

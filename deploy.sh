#!/bin/bash

# Frontend 배포 스크립트
# 위치: frontend 레포의 deploy.sh

echo "=== Frontend 배포 시작 ==="

# 최신 코드 가져오기
git pull origin main

# Docker 이미지 빌드
docker build -t pd-test-frontend:latest .

# 상위 디렉토리로 이동하여 docker-compose 실행
cd ..
docker-compose stop frontend
docker-compose rm -f frontend
docker-compose up -d frontend

# 로그 확인
echo "=== Frontend 로그 ==="
docker-compose logs --tail=50 frontend

echo "=== Frontend 배포 완료 ==="

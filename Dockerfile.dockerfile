# Используем более новый базовый образ Node.js
FROM node:16

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости с флагом --legacy-peer-deps
RUN npm install --legacy-peer-deps

# Копируем остальные файлы проекта в контейнер
COPY . .

# Открываем порт приложения
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"]

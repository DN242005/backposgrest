# Usar una imagen oficial de Node.js
FROM node:18

# Crear el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Exponer el puerto 3000 (por si después usas servidor)
EXPOSE 3000

# Comando para correr el proyecto (por ahora el script de migración)
CMD ["node", "run-migration.js"]

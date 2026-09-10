# Usa a imagem oficial do Node.js na versão 20 (compatível com nosso workflow)
FROM node:20-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala apenas as dependências de produção (ou todas se preferir rodar testes)
RUN npm ci

# Copia o restante do código da aplicação
COPY . .

# Expõe a porta que a aplicação Express utiliza (geralmente porta 3000 ou 8080)
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
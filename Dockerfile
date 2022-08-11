FROM node:16
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
ENV PORT=9000
#CMD [ "npm", "start" ]

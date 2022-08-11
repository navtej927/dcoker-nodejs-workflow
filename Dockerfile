FROM node:14-alpine as base
WORKDIR /app
COPY package.json .
COPY package-lock.json .

FROM base as test
RUN npm ci
COPY . .
RUN npm run test

FROM base as prod
RUN npm ci --production
ENV PORT=9000
COPY . .
CMD [ "npm", "start" ]
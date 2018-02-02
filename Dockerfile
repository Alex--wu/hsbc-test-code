FROM node:8.2.1

RUN node -v
RUN npm -v

ENV NODE_ENV=development
ENV TZ=Asia/Shanghai
EXPOSE 3000
ADD . /usr/src/app
WORKDIR /usr/src/app

RUN npm config set registry https://registry.npm.taobao.org && \
    npm install --production

CMD [ "npm", "start" ]

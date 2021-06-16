FROM node:16-alpine
WORKDIR /usr/app
RUN mkdir -p dist/tasks
COPY ./package.json ./
RUN npm install
COPY ./ ./
RUN npx kretes build
RUN chown -R node:node /usr/app
EXPOSE 5544
USER node
CMD [ "npx", "kretes", "start", "--production" ]
FROM resin/raspberrypi3-node:6
COPY package.json /app/package.json
WORKDIR /app
RUN npm i --production

FROM resin/raspberrypi3-node:6-slim
COPY --from=0 /app/node_modules node_modules
WORKDIR /app
COPY . .
CMD ["node", "index.js"]
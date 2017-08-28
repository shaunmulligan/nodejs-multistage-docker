# This is the base for our build step container
# which has all our build essentials
FROM resin/raspberrypi3-node:8.1 AS buildstep

# Copy in package.json, install 
# and build all node modules
WORKDIR /usr/src/app
COPY package.json .
RUN JOBS=MAX npm install --production --unsafe-perm

# This is our runtime container that will end up
# running on the device.
FROM resin/raspberrypi3-node:8.1-slim

WORKDIR /usr/src/app

# Copy our node_modules into our deployable container context.
COPY --from=buildstep /usr/src/app/node_modules node_modules
COPY . .

# Launch our App.
CMD ["node", "main.js"]

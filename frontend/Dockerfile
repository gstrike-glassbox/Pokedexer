# pull official base image
FROM node:alpine
EXPOSE 80
EXPOSE 443
VOLUME /tmp
# set working directory
# add `/app/node_modules/.bin` to $PATH
ENV PATH /frontend/node_modules/.bin:$PATH
# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm i
# add app
COPY . ./
# start app
CMD ["npm", "run", "start"]

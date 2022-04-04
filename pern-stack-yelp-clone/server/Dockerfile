# pull official base image
FROM node:17.8.0-alpine3.14

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY ["package.json", "package-lock.json", "./"]
RUN npm install

# add app
COPY . ./
EXPOSE 3001
# start app
CMD ["npm", "start"]
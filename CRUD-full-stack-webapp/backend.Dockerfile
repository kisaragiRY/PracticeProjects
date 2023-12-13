FROM node:21.4.0

WORKDIR /app

RUN npm install -g npm

# setup express
COPY ./backend $WORKDIR
# RUN npm install -g express-generator
RUN express .

# setup nodemon
# RUN npm install -D nodemon

# setup for sql connection
# RUN npm install mysql2 sequelize sequelize-cli
RUN npx sequelize-cli init

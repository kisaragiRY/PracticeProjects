FROM node:21.4.0

WORKDIR /app

RUN npm install -g npm

# setup react
# RUN cd $WORKDIR
# RUN npx --yes create-react-app ./
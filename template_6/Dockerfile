FROM public.ecr.aws/bitnami/node:18
WORKDIR /usr/src/build
COPY . .
ARG NPM_TOKEN
RUN echo "//npm.pkg.github.com/:_authToken=${NPM_TOKEN}" >> .npmrc && \
    npm install && \
    rm -f .npmrc

RUN npm run build
EXPOSE 8080
CMD [ "npm", "run", "start" ]

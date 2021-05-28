// following along this tutorial
https://www.youtube.com/playlist?list=PLN3n1USn4xlma1bBu3Tloe4NyYn9Ko8Gs

yarn init -y
yarn add apollo-server-express express graphql reflect-metadata type-graphql

// apollo-server-express --> as a server
// reflect-metadata --> is a library needed for metadata

yarn add -D @types/express @types/graphql @types/node nodemon ts-node typescript

// ts-node --> to run it
// nodemon --> to watch our files as we make changes

touch tsconfig.json

// tsconfig.json --> tell typescript how to compile code

// copy the code from this file into your tsconfig.js file
https://github.com/benawad/monorepo-boilerplate/blob/9257937fa169d8cb2ee036d94b08ae9aee8072d1/packages/server/tsconfig.json

// remove references on bottom line of that file

// create server:
mkdir src
cd src
touch index.ts

// after code written in index.ts
// go to package.json file and add this at the bottom of the file // under devDependencies

"scripts": {
"start": "nodemon --exec ts-node src/index.ts"
}

terminal command: yarn start
visit: http://localhost:4000/graphql to see the graphql playground

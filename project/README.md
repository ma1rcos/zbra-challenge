# Test finished

##### Some observations about commits: 

I made a single commit to avoid the risk of someone interpreting that the project was finished and blocking my access to the repository. I know the importance of clarity in commits. But in this case, I had to opt for this approach.

##### An observation about index.ts file:

The index.ts file was not used. The file is created by default, when starting a node project, with the npm init -y command. I chose not to delete it, so that the evaluators could be clear about the command used.

##### Directory organization:

###### build:

The build directory contains code written in typescript transpiled to javascript. This directory is important because it contains the code that will be interpreted by the V8 engine. This engine does not interpret typescript, only javascript. Hence the need for transpilation.

###### models:

Contains the classes used to solve the tests.

###### static:

Contains static files, that is, they will not be changed, but are useful to the program. It is worth noting that the files found there must remain there.

###### tests:

Contains tests for each class method, with jest.

##### About first and second files:

These files contain the instances of the classes necessary to solve each test, respectively.

##### How to test the project?:

At the root of the project, run the command `npm i`.

To run the tests, At the root of the project, run the command: `npx jest`.

To get the answers to the first question, at the root of the project, run the command: `node ./src/build/first.js`.

To get the answer to the second question, at the root of the project, run the command: `node ./src/build/second.js`.

##### Important:

Files contained in the project root must remain in the project root, such as package.json and tsconfig.json. These are required for project configuration.
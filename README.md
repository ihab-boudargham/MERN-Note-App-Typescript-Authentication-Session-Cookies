# A - BACKEND

## A.1 - Setting the Environment and Installing Libraries

1. Create package.json file
   npm init -y
2. Set typescript
   npm instal --save-dev typescript
3. Set tsconfig.json
   npx tsc --init
4. Install Express
   npm install express
   npm i --save-dev @types/express
5. Create an express app
6. npm install --save-dev nodemon
7. npm install -D ts-node
8. Add "scripts": {
   "start": "nodemon src/server.ts"}
   this will let you use npm start dev
9. Change to "main": "dist/server.js",
10. npm i -D eslint, to check for errors
11. npx eslint . --ext .ts , to check for problems in the selected file
12. Add "lint": "eslint . --ext .ts" to scripts so that we can use directly npm run lint
13. install the pluggin ESLInt

## A.2 - Setting MongoDB and Mongoose Setup

1. Create our cluster
2. .env file to write the DATABASE_URL and the PORT.
3. npm i dotenv
4. npm i mongoose
5. import .env and mongoose in server.ts
6. Connect mongoose.
7. Keep in mind that it returns a promise so after that we should define what will hapen next, like starting and listening up to the server, so we use .then(()=>{}) incase everything run succesfully. After that we should add .catch(console.error) to return the error.
8. npm i envalid.
   If we didnt provide the server with a port, the server will run on an undefined port which is dangerous.
   For this reason we use cleanEnv from envalid and we pass through it all the important information regarding the URL and Port in validateEnv.ts in util. So we can get rid of writing process.env and instead write .env

## A.3 - MongoDB Model setup

1. Crate the note model in models.
2. create a schema for our notes wich each contains a title and a text and timestamps. then we created the typescript for our model and finally exported it.
3. in app.ts we will have all of our endpints
4. get the notes of our database and return them using app.get
   app.get('/', async (req,res) => {
   try {
   // if it was able to get them, get them by json(notes)
   const notes = await Notemodel.find().exec()
   res.status(200).json(notes)

   } catch (error) {
   // if it coudnt get them
   console.error(error);
   res.status(500)
   }
   })

5. Instead of repating the catching error we can use app.use((error: unknown, req: Request, res: Response, next: NextFunction) => { }

## A.4 Routes

1. In app.ts, we arent going to write the whole code instead:
   app.use('/api/notes', RouteComponent)
   and the RouteComponenets takes the fucntion:
   router.get('/', NotesController.getNotes);
   and the NotesController has the async function

2. Now to Post a note:

   1. First, app.use(express.json());, this means that the body can accept json from us
   2. it needs three parts:
      1. request from body what will be added
      2. try { the function of NoteModels.create(title, text)} and respond the note using.json
      3. catch(error) {next(error)}

3. npm i morgan
   npm i --save-dev @types/morgan, to show in the terminal what have we run on postamn, like:
   POST /api/notes 201 154.958 ms - 137

## A.5 Error handling

1. npm i http-errors
2. npm i -D @types/http-errors

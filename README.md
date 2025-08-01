# Clipr
A URL Trimmer Extension

## Installation
```bash
git clone https://github.com/SANJOY-PAUL-0981/Clipr.git
```
```bash
cd Clipr
```
## How To Run Locally
First Open the folder in VS code or ur prefered text editor, and Open new terminal or shell

### Frontend Setup
First move the directory to client
```bash
cd client
```
```bash
npm install
```
or
```bash
yarn install
```
or
```bash
pnpm install
```
or
```bash
bun install
```
Then After installation run this command to run [Vite](https://vite.dev/) server - 
```bash
npm run dev
```
Then go to http://localhost:5173/ in your browser

### Backend Setup
Open a new terminal and move the directory to server -
```bash
cd server
```
```bash
npm install
```
or
```bash
yarn install
```
or
```bash
pnpm install
```
or
```bash
bun install
```
Make an `.env` file and paste your MongoDb credentials like mentioned in `.env.example`, 

After This installation run this command to run backend server
```bash
npm run dev
```

### Extension Setup
- Go to chrome://extensions
- Enable Developer Mode from top right corner
- click 'Load Unpacked'
- Select your extension folder (where `manifest.json` is)
- Then run it

## Technologies Used
- [Vite](https://vite.dev/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [NodeJs](https://nodejs.org/en)
- [ExpressJs](https://expressjs.com/)
- [MongoDb](https://www.mongodb.com/)
- [Nodemon](https://nodemon.io/)


#### Will Add QR generator Later(in react)
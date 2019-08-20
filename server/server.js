require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const authCtrl = require("./controllers/authController");
const metaCtrl = require("./controllers/metaDataController");
const dnaCtrl = require("./controllers/dnaController");
const rnaCtrl = require("./controllers/rnaController");

const app = express();

app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 }
  })
);

app.use("/static", express.static("./media"))

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  app.listen(SERVER_PORT, () => console.log(`Server ${SERVER_PORT} is aware`));
});

//------------------------ENDPOINTS---------------------------------

app.post("/auth/register", authCtrl.register)
app.post("/auth/login", authCtrl.login)
app.delete("/auth/logout", authCtrl.logout)
app.get("/auth/currentuser", authCtrl.currentUser)

app.get("/api/metadata/genes/:userId", metaCtrl.getGenes)
app.delete("/api/metadata/genes/:geneId", metaCtrl.deleteGene)

app.post("/api/geneticmaterial/dnaOrRna", dnaCtrl.createDNA)
app.put("/api/geneticmaterial/rna", rnaCtrl.createRNA)


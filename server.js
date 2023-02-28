const express = require("express");
const path = require("path");

const bodyParser = require("body-parser");
const { setStatics } = require("./utils/statics");
const sequelize = require("./utils/database");

const adminRoutes = require("./routes/admin");
const indexedRoutes = require("./routes/index");
const { get404 } = require("./controllers/error");

const app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
// middleware end

// ejs
app.set("view engine", "ejs");
// ejs end

//statics
setStatics(app);
//statics end

//routes
app.use(indexedRoutes);
app.use("/admin", adminRoutes);
//routes end

//404
app.use(get404);
//404 end

sequelize
  .sync()
  .then((result) => {
    console.log(result);
    app.listen(3000, () => console.log("Server is running"));
  })
  .catch((err) => console.log(err));

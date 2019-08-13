const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    const db = req.app.get("db");
    const { username, email, userImage, password } = req.body;
    const user = await db.find_email([email]);
    if (user.length > 0) {
      return res.status(400).send({ message: "Email in use." });
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const newUser = await db.create_user({
      username,
      email,
      user_image: userImage
    });
    db.create_credentials({ password, hash, user_id: newUser[0].user_id })
      .then(() => {
        req.session.user = newUser[0];
        res.status(200).send({ message: "Logged in", user: req.session.user });
      })
      .catch(() => {
        res.status(500).send({ message: "Failed to register" });
      });
  },

  login: async (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;
    const user = await db.find_user_and_hash([username]);
    if (user.length === 0) {
      return res.status(400).send({ message: "Username not found" });
    }
    const result = bcrypt.compareSync(password, user[0].hash);
    if (result) {
      delete user[0].hash;
      delete user[0].password;
      req.session.user = user[0];
      return res
        .status(200)
        .send({ message: "Logged in", user: req.session.user });
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    res.status(200).send({ message: "Logged out" });
  }
};

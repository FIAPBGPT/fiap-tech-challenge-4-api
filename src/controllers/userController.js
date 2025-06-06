const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const saltRounds = 10;

// Register new user
// const registerUser = async (req, res) => {
//   const { username, email, password } = req.body;
//   try {
//     const userExists = await User.findOne({ username });
//     if (userExists)
//       return res.status(400).json({ message: "Usuário Já Existe!" });

//     const widgets = null;

//     const newUser = new User({
//       username: username,
//       email: email,
//       password: password,
//       widgets: widgets,
//     });
//     await newUser.save();
//     res.status(201).json({ message: "Usuário Cadastrado com Sucesso!" });
//   } catch (error) {
//     res.status(500).json({ message: "Erro ao Cadastrar Usuário" });
//   }
// };

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Verifica se o usuário já existe pelo e-mail
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "Usuário já existe!" });

    const widgets = null;

    // Criação do novo usuário
    const newUser = new User({
      username,
      email,
      password: password, // ← senha segura!
      widgets: widgets,
    });
    await newUser.save();

    res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    res.status(500).json({ message: "Erro ao cadastrar usuário" });
  }
};

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    const usersFormatted = users.map((user) => {
      return {
        _id: user._id,
        username: user.username,
        email: user.email,
        widgets: user.widgets,
      };
    });
    res.status(200).json({
      total: users.length,
      result: usersFormatted,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single user by ID
const getUserByID = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById({ _id: id });
    if (!user) {
      return res.status(404).json({ message: "Usuário não Encontrado..." });
    }
    const userFormatted = {
      _id: user._id,
      username: user.username,
      email: user.email,
      widgets: user.widgets,
    };
    res.status(200).json(userFormatted);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single user by email
const getUserByEmail = async (req, res) => {
  const { email } = req.params;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Usuário não Encontrado..." });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a user
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, email, password, widgets } = req.body;
  const passwordEncrypted = bcrypt.hash(password, saltRounds);

  try {
    if (
      username !== "" &&
      username !== "string" &&
      email !== "" &&
      email !== "string" &&
      password !== "" &&
      password !== "string" &&
      widgets !== "" &&
      widgets !== "string"
    ) {
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { username, email, passwordEncrypted, widgets },
        { new: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ message: "Usuário não Encontrado..." });
      }
      res.status(200).json({
        message: "Usuário Atualizado com Sucesso!",
        result: updatedUser,
      });
    } else if (
      username !== "" &&
      username !== "string" &&
      email !== "" &&
      email !== "string" &&
      widgets !== "" &&
      widgets !== "string"
    ) {
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { username, email, widgets },
        { new: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ message: "Usuário não Encontrado..." });
      }
      res.status(200).json({
        message: "Usuário Atualizado com Sucesso!",
        result: updatedUser,
      });
    } else if (
      username !== "" &&
      username !== "string" &&
      password !== "" &&
      password !== "string" &&
      widgets !== "" &&
      widgets !== "string"
    ) {
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { username, passwordEncrypted, widgets },
        { new: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ message: "Usuário não Encontrado..." });
      }
      res.status(200).json({
        message: "Usuário Atualizado com Sucesso!",
        result: updatedUser,
      });
    } else if (
      email !== "" &&
      email !== "string" &&
      password !== "" &&
      password !== "string" &&
      widgets !== "" &&
      widgets !== "string"
    ) {
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { email, passwordEncrypted, widgets },
        { new: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ message: "Usuário não Encontrado..." });
      }
      res.status(200).json({
        message: "Usuário Atualizado com Sucesso!",
        result: updatedUser,
      });
    } else if (
      username !== "" &&
      username !== "string" &&
      widgets !== "" &&
      widgets !== "string"
    ) {
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { username, widgets },
        { new: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ message: "Usuário não Encontrado..." });
      }
      res.status(200).json({
        message: "Usuário Atualizado com Sucesso!",
        result: updatedUser,
      });
    } else if (
      email !== "" &&
      email !== "string" &&
      widgets !== "" &&
      widgets !== "string"
    ) {
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { email, widgets },
        { new: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ message: "Usuário não Encontrado..." });
      }
      res.status(200).json({
        message: "Usuário Atualizado com Sucesso!",
        result: updatedUser,
      });
    } else if (
      password !== "" &&
      password !== "string" &&
      widgets !== "" &&
      widgets !== "string"
    ) {
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { passwordEncrypted, widgets },
        { new: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ message: "Usuário não Encontrado..." });
      }
      res.status(200).json({
        message: "Usuário Atualizado com Sucesso!",
        result: updatedUser,
      });
    } else if (username !== "" && username !== "string") {
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { username },
        { new: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ message: "Usuário não Encontrado..." });
      }
      res.status(200).json({
        message: "Usuário Atualizado com Sucesso!",
        result: updatedUser,
      });
    } else if (email !== "" && email !== "string") {
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { email },
        { new: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ message: "Usuário não Encontrado..." });
      }
      res.status(200).json({
        message: "Usuário Atualizado com Sucesso!",
        result: updatedUser,
      });
    } else if (password !== "" && password !== "string") {
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { passwordEncrypted },
        { new: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ message: "Usuário não Encontrado..." });
      }
      res.status(200).json({
        message: "Usuário Atualizado com Sucesso!",
        result: updatedUser,
      });
    } else if (widgets !== "" && widgets !== "string") {
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { widgets },
        { new: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ message: "Usuário não Encontrado..." });
      }
      res.status(200).json({
        message: "Usuário Atualizado com Sucesso!",
        result: updatedUser,
      });
    } else {
      return res.status(400).json({ message: "Dados Inválidos!" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "Usuário não Encontrado..." });
    }
    res.status(200).json({ message: "Usuário Apagado com Sucesso!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Login user
// const loginUser = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: "Dados Inválidos!" });

//     const isMatch = await user.matchPassword(password);
//     if (!isMatch) return res.status(400).json({ message: "Dados Inválidos!" });

//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "12h",
//     });
//     res.json({
//       message: "Usuário Autenticado com Sucesso!",
//       result: {
//         token,
//         username: user.username,
//         widgets: user.widgets,
//         user_id: user._id
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Erro ao Realizar Login!" });
//   }
// };

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Dados Inválidos!" }); // Mensagem genética, para que um possível invasor não saiba onde está o erro

    // Compara a senha digitada com a senha hashada salva
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Dados Inválidos!" }); // Mensagem genética, para que um possível invasor não saiba onde está o erro

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "12h",
    });

    res.json({
      message: "Usuário Autenticado com Sucesso!",
      result: {
        token,
        username: user.username,
        widgets: user.widgets,
        user_id: user._id,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao Realizar Login!" });
  }
};

// Get Token
const getToken = (token) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    return null;
  }
};

module.exports = {
  registerUser,
  getUsers,
  getUserByID,
  getUserByEmail,
  updateUser,
  deleteUser,
  loginUser,
  getToken,
};

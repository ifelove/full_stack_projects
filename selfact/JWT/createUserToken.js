const createTokenUser = (user) => {
  return {
    firstname: user.firstname,
    lastname: user.lastname,
    othername: user.othername,
    role: user.role,
    userId: user._id,
  };
};

module.exports = createTokenUser;

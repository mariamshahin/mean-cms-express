export const checkId = (id) => id.match(/^[0-9a-fA-F]{24}$/);

export const deletePw = (user) => {
  const updatedUser = { ...user._doc };
  delete updatedUser.password;
  return updatedUser;
};

export const getSubstr = (str, char) => {
  const res = str.substring(0, char);
  return res;
};

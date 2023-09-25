const authHeader = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const parsedToken = JSON.parse(token);

    return {
      Authorization: `Bearer ${parsedToken}`,
    };
  } else {
    return {};
  }
};

export default authHeader;

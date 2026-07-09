const USERS_KEY = "gigshieldUsers";
const SESSION_KEY = "gigshieldSession";


export function getUsers() {
  try {
    const users = localStorage.getItem(USERS_KEY);

    return users ? JSON.parse(users) : [];
  } catch (error) {
    console.error("Unable to read users:", error);

    return [];
  }
}


export function registerUser(userData) {
  const users = getUsers();

  const existingUser = users.find(
    (user) =>
      user.email.toLowerCase() ===
        userData.email.toLowerCase() ||
      user.mobile === userData.mobile
  );

  if (existingUser) {
    return {
      success: false,
      message:
        "An account already exists with this email or mobile number.",
    };
  }


  const newUser = {
    id: `GSU${Date.now()}`,

    fullName: userData.fullName,

    email: userData.email.toLowerCase(),

    mobile: userData.mobile,

    password: userData.password,

    createdAt: new Date().toISOString(),
  };


  const updatedUsers = [
    ...users,
    newUser,
  ];


  localStorage.setItem(
    USERS_KEY,
    JSON.stringify(updatedUsers)
  );


  return {
    success: true,
    user: newUser,
  };
}


export function loginUser(identifier, password) {
  const users = getUsers();


  const user = users.find(
    (currentUser) =>
      currentUser.email.toLowerCase() ===
        identifier.toLowerCase() ||
      currentUser.mobile === identifier
  );


  if (!user) {
    return {
      success: false,
      message: "Account not found.",
    };
  }


  if (user.password !== password) {
    return {
      success: false,
      message: "Incorrect password.",
    };
  }


  const session = {
    userId: user.id,
    fullName: user.fullName,
    email: user.email,
    mobile: user.mobile,
    loggedIn: true,
  };


  localStorage.setItem(
    SESSION_KEY,
    JSON.stringify(session)
  );


  return {
    success: true,
    user,
  };
}


export function getSession() {
  try {
    const session =
      localStorage.getItem(SESSION_KEY);

    return session
      ? JSON.parse(session)
      : null;
  } catch (error) {
    console.error(
      "Unable to read session:",
      error
    );

    return null;
  }
}


export function logoutUser() {
  localStorage.removeItem(SESSION_KEY);
}


export function isAuthenticated() {
  const session = getSession();

  return Boolean(session?.loggedIn);
}
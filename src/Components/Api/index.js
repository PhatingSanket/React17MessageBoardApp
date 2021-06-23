export const fetchMessages = async () => {
  try {
    const url = "http://localhost:5000/messages";
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const saveMessage = async (messageInfo) => {
  try {
    const url = "http://localhost:5000/messages";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageInfo),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteMessage = async (id) => {
  try {
    const url = `http://localhost:5000/messages/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: null,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const updateMessage = async (messageInfo) => {
  try {
    const url = `http://localhost:5000/messages/${messageInfo.id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageInfo),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const register = async (userInfo) => {
  try {
    const url = "http://localhost:5000/login";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const authenticate = async (email, password) => {
  try {
    const url = `http://localhost:5000/login?email=${email}&password=${password}`;
    const response = await fetch(url);
    // const data = await response.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};

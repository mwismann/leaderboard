const getScores = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return new Error(response.statusText);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

const postScore = async (url, userData) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (!response.ok) {
      return new Error(response.statusText);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

export { getScores, postScore };
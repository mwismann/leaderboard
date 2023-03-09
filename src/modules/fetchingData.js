// In this file we define the async functions necessary to consume the API

// getScores will take the url from our specific game endpoint
const getScores = async (url) => {
  try {
    // we wait for the fetch promise response
    const response = await fetch(url);
    // then we store the json() result in a data variable
    const data = await response.json();

    return data;
  } catch (error) {
    // here we catch an error in case there's no data
    return error;
  }
};

// postScore will send the user score to the provided API endpoint url
const postScore = async (url, userData) => {
  try {
    // we wait for the fetch promise response
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    // then we store the json() result in a data variable
    const data = await response.json();

    return data;
  } catch (error) {
    // here we catch an error in case there's no data
    return error;
  }
};

export { getScores, postScore };
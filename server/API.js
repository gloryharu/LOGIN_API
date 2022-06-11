export const API = async ({endPoint, method, isLogin = false, param,token}) => {
  try {
    const response = await fetch(
      "http://i-web.com.vn/api/v1/auth/" + endPoint,
      {
        method: method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Authorization": isLogin ? null : "Bearer " + token,
        },
        body: JSON.stringify(param),
      }
    );
    const json = await response.json();
    // const data = json?.data;
    return json;
  } catch (error) {
    console.log(error);
  }
};

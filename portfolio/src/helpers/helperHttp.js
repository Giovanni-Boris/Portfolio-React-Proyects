export const helpHttp = () => {
  const customFetch = (endpoint, options) => {
    //accepts this sort of response
    const defaultHeaders = {
      accept: "application/json",
    };
    //about request manually with abort controller
    const controller = new AbortController();
    options.signal = controller.signal;
    //if there is no method, only use GET
    options.method = options.method || "GET";
    options.headers = options.headers
      ? { ...defaultHeaders, ...options.headers }
      : defaultHeaders;
    //
    //if there is no body due to the GET you give false because later I will do a validation
    //we can't send body false or empty so we remove it
    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;
    //abort the request afert 3 seconds
    setTimeout(() => controller.abort(), 3000);
    //"hay algunas api que nos dan status tambien status text "
    return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: res.statusText || "An error occurred",
            })
      )
      .catch((err) => err);
  };
  const post = (url, options = {}) => {
    options.method = "POST";
    return customFetch(url, options);
  };

  return {
    post,
  };
};

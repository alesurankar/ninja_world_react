const API = { // Exporting an object named API
  async login(username: string) { // async function to handle login
    const res = await fetch("/login", { // making a POST request to /login
      method: "POST", // HTTP method
      headers: { "Content-Type": "application/json" }, // setting content type to JSON
      body: JSON.stringify({ username }), // sending username in the request body
    });

    if (!res.ok) { // checking if the response is not ok
      const err = await res.json(); // parsing the error response
      throw new Error(err.detail?.[0]?.msg || "Login failed"); // throwing an error with the message
    }

    return res.json(); // returning the parsed JSON response
  },

  async signup(username: string) { // async function to handle signup
    const res = await fetch("/signup", { // making a POST request to /signup
      method: "POST", // HTTP method
      headers: { "Content-Type": "application/json" }, // setting content type to JSON
      body: JSON.stringify({ username }), // sending username in the request body
    });

    if (!res.ok) { // checking if the response is not ok
      const err = await res.json(); // parsing the error response
      throw new Error(err.detail?.[0]?.msg || "Signup failed"); // throwing an error with the message
    }

    return this.login(username); // calling login function after successful signup
  },
};

export default API;
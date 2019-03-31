import { request } from "graphql-request";

const email = "";
const password = "";
const username = "";

const newemail = "";
const newpassword = "";
const newusername = "";

const login = `
  mutation {
    login(email: "${email}", password: "${password}") {
      token
    }
  }
`;

const signup = `
  mutation {
    signup(email: "${email}", password: "${password}", username: "${username}") {
      user {
        id
        email
        username
        role
      }
    },
  }
`;

const newSignup = `
  mutation {
    signup(email: "${newemail}", password: "${newpassword}", username: "${newusername}") {
      user {
        id
        email
        username
        role
      }
    },
  }
`;

describe("authentication flow where email exists", () => {
  it("exists and should throw error with message when signing up", async () => {
    try {
      await request("http://localhost:4000", signup);
    } catch (err) {
      const errorMessage = err.response.errors[0].message;
      expect(errorMessage).toEqual(
        "Unique constraint violated on User. Mutation did not complete."
      );
    }
  });

  it("should be able to login still", async () => {
    const response = await request("http://localhost:4000", login);
    expect(response).toBeTruthy();
  });
});

describe("authentication flow first time sign up where email doesn't exist", () => {
  it("doesn't exist and should not throw error with message when signing up", async () => {
    try {
      const response = await request("http://localhost:4000", newSignup);
      console.log(response);
      expect(response).not.toBeNull();
    } catch (err) {
      throw err;
    }
  });

  it("should be able to login with new account", async () => {
    const response = await request("http://localhost:4000", login);
    expect(response).toBeTruthy();
  });
});

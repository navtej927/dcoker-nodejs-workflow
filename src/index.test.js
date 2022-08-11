const { app } = require("./app");
const request = require("supertest");

describe("GET /user",  () => {
  it("responds with json", async () => {
    const res = await request(app).get("/");
    expect(res.status).toEqual(200);
    expect(res.body).toEqual({1:1});
  });
});

const request = require("supertest");
const app = require("../app");

describe("GET /api/movies", () => {
  it("should return all movies", async () => {
    const response = await request(app).get("/api/movies");

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  });
});

describe("GET /api/movies", () => {
    it("should return a movie by id", async () => {
        const testId = 1;
        const response = await request(app).get(`/api/movies/${testId}`);



        expect(response.headers["content-type"]).toMatch(/json/);
        expect(response.status).toEqual(200);
    });

    it("should return 404 for a movie that doesn't exist", async () => {
        const testId = 0;
        const response = await request(app).get(`/api/movies/${testId}`);


        expect(response.status).toEqual(404);
    });
});
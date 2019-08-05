const supertest = require('supertest');
const app = require('../app');

describe("GET /api/timestamp/:date_string", () => {
    test("When request has valid date string parameter, return JSON object with unix and utc keys.", 
        async () => {
            const response = await supertest(app).get("/api/timestamp/2019-07-01");
            // test for a successful response
            expect(response.statusCode).toBe(200);
            // test for a JSON response
            expect(response.type).toMatch(/application\/json/);
            // test that there are only two keys present in the JSON object 
            expect(Object.keys(response.body).length).toBe(2);
            // test that the expected unix key/value is present
            expect(response.body).toHaveProperty('unix', 1561939200000);
            // test that the expected utc key/value is present
            expect(response.body).toHaveProperty('utc', 'Mon, 01 Jul 2019 00:00:00 GMT');
    });
});

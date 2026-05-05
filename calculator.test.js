const request = require("supertest");
const app = require("./app");

describe("Calculator API Tests", () => {

  // ─── Addition ───────────────────────────────────────────────
  describe("POST /add", () => {
    test("should add two numbers correctly", async () => {
      const res = await request(app).post("/add").send({ a: 10, b: 5 });
      expect(res.statusCode).toBe(200);
      expect(res.body.result).toBe(15);
      expect(res.body.operation).toBe("addition");
    });

    test("should handle negative numbers", async () => {
      const res = await request(app).post("/add").send({ a: -5, b: -3 });
      expect(res.statusCode).toBe(200);
      expect(res.body.result).toBe(-8);
    });

    test("should return 400 if inputs are missing", async () => {
      const res = await request(app).post("/add").send({ a: 10 });
      expect(res.statusCode).toBe(400);
    });
  });

  // ─── Subtraction ────────────────────────────────────────────
  describe("POST /subtract", () => {
    test("should subtract two numbers correctly", async () => {
      const res = await request(app).post("/subtract").send({ a: 10, b: 3 });
      expect(res.statusCode).toBe(200);
      expect(res.body.result).toBe(7);
      expect(res.body.operation).toBe("subtraction");
    });

    test("should handle negative result", async () => {
      const res = await request(app).post("/subtract").send({ a: 3, b: 10 });
      expect(res.statusCode).toBe(200);
      expect(res.body.result).toBe(-7);
    });

    test("should return 400 if inputs are missing", async () => {
      const res = await request(app).post("/subtract").send({ b: 5 });
      expect(res.statusCode).toBe(400);
    });
  });

  // ─── Multiplication ─────────────────────────────────────────
  describe("POST /multiply", () => {
    test("should multiply two numbers correctly", async () => {
      const res = await request(app).post("/multiply").send({ a: 6, b: 7 });
      expect(res.statusCode).toBe(200);
      expect(res.body.result).toBe(42);
      expect(res.body.operation).toBe("multiplication");
    });

    test("should return 0 when multiplied by zero", async () => {
      const res = await request(app).post("/multiply").send({ a: 100, b: 0 });
      expect(res.statusCode).toBe(200);
      expect(res.body.result).toBe(0);
    });

    test("should return 400 if inputs are missing", async () => {
      const res = await request(app).post("/multiply").send({});
      expect(res.statusCode).toBe(400);
    });
  });

  // ─── Division ───────────────────────────────────────────────
  describe("POST /divide", () => {
    test("should divide two numbers correctly", async () => {
      const res = await request(app).post("/divide").send({ a: 20, b: 4 });
      expect(res.statusCode).toBe(200);
      expect(res.body.result).toBe(5);
      expect(res.body.operation).toBe("division");
    });

    test("should return 400 when dividing by zero", async () => {
      const res = await request(app).post("/divide").send({ a: 10, b: 0 });
      expect(res.statusCode).toBe(400);
      expect(res.body.error).toBe("Cannot divide by zero");
    });

    test("should return 400 if inputs are missing", async () => {
      const res = await request(app).post("/divide").send({ a: 10 });
      expect(res.statusCode).toBe(400);
    });
  });

});

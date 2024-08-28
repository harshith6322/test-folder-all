import { describe, expect, test, it } from "@jest/globals";
import request from "supertest";
import { app } from "../index";

describe("POST /sum", () => {
  it("should return the sum of two numbers", async () => {
    const res = await request(app).post("/sum").send({
      a: 1,
      b: 2,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(3);
  });

  it("should return the sum of two negative numbers", async () => {
    const res = await request(app).post("/sum").send({
      a: -1,
      b: -2,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(-3);
  });

  it("should return the sum of two zero number", async () => {
    const res = await request(app).post("/sum").send({
      a: 0,
      b: 0,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(0);
  });
});

describe("sub/post", () => {
  it("5-2 equal to 3", async () => {
    const res = await request(app).post("/sub").send({
      a: 5,
      b: 2,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.ans).toBe(3);
  });

  it("-5 - -2", async () => {
    const res = await request(app).post("/sub").send({
      a: -5,
      b: -2,
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.ans).toBe(-3);
  });
});

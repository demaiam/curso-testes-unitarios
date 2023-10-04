import { faker } from "@faker-js/faker";

import { createOrder, getOrderByProtocol } from "../../src/order-service";
import * as orderRepository from "../../src/order-repository";
import { OrderInput } from "../../src/validator";

describe("Order Service Tests", () => {
  it("should create an order", async () => {
    const orderType: OrderInput = {
      client: faker.person.fullName(),
      description: faker.person.bio()
    }

    const order = await createOrder(orderType);

    expect(order).toEqual({
      protocol: expect.any(String),
      status: expect.any(String)
    })
  });

  it("should return an order based on the protocol", async () => {
    jest
      .spyOn(orderRepository, "getByProtocol")
      .mockImplementation((): any => {
        return {
          protocol: expect.any(String),
          status: expect.any(String)
        }
      })
  });

  it("should return status INVALID when protocol doesn't exists", async () => {
    
    
    //expect(order.status).toBe("INVALID");
  });
});
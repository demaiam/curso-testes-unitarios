import { User } from "@prisma/client";
import { faker } from "@faker-js/faker";
import * as userRepository from "../../src/users-repository";
import { getInfractionsFrom } from "infractions-repository";


describe("Infractions Service Tests", () => {
  it("should get infractions from user", async () => {
    const user: User = {
      id: 1,
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      licenseId: "123"
    }
    jest
      .spyOn(userRepository, "getUserByDocument")
      .mockImplementationOnce((): any => {
        return {
          user
        }
      })
    const infractions = await getInfractionsFrom(123);
    expect(infractions).toEqual({
      user,
      infractions: []
    });
  });

  it("should throw an error when driver license does not exists", async () => {
    const infractions = await getInfractionsFrom(1235678);

    expect(infractions).toBe({});
  })
});
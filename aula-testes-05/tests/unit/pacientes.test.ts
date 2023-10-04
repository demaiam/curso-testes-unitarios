import { v4 as uuid } from "uuid";
import { generateProtocolForPacient } from "protocols-generator";

jest.mock("uuid", () => {
  return {
    v4: () => { return "valor simulado no mock" }
  }
});

it("should generate a pacient protocol", () => {
  const value = generateProtocolForPacient("Lorem", "Ipsum", true);
  expect(value.protocol).toBe("valor simulado no mock")
})
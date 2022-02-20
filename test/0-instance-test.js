const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Instance = await ethers.getContractFactory("Instance");
    const instance = await Instance.deploy("password123");
    await instance.deployed();

    expect(await instance.password()).to.equal("password123");
  });
});

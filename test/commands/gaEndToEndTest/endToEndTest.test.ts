import { expect } from "chai";
import { gaTestEndToEndHandler } from "../../../src/commands/githubActions/endToEndTest/index.js";
import { attestanceProof } from "../../../src/commands/githubActions/endToEndTest/testCheckers.js";
import { testDir, cleanTestDir } from "../../testUtils.js";
import { initHandler } from "../../../src/commands/init.js";

describe("command / gaEndToEndTest", function () {
  // tests could take a while, set timeout to 20 minutes
  this.timeout(1200 * 1000);

  before(async () => {
    cleanTestDir();
    await initHandler({ dir: testDir, yes: true, force: true });
  });

  it("should execute end to end tests on a real dappnode environment", async () => {
    await gaTestEndToEndHandler({
      dir: testDir,
      // healthCheckUrl: "http://dappnodesdk.public.dappnode",
      errorLogsTimeout: 30
    });
    expect(true).to.equal(true);
  });

  it.only("should execute end to end tests on a real dappnode environment", async () => {
    expect(await attestanceProof("prater")).to.not.throw;
  }); 
});

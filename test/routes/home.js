const chai = require("chai");
const chaiHTTP = require("chai-http");

const mainEntryPoint = require("../../routes/home");

chai.should();
chai.use(chaiHTTP);

describe("Entry point", () => {
    context("GET /", () => {
        it("should get greeting back", (done) => {
            chai.request(mainEntryPoint)
                .get("/")
                .end((err, res) => {
                    if (err) throw err;
                    res.should.equal("Hello World!");
                    done();
                });
        });
    });
});

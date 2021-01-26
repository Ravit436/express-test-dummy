const chai = require("chai");
const chaiHTTP = require("chai-http");

const mainEntryPoint = require("../../index");

chai.should();
chai.use(chaiHTTP);

describe("Entry point", () => {
    context("GET /", () => {
        it("should get greeting back", (done) => {
            chai.request(mainEntryPoint)
                .get("/home")
                .end((err, res) => {
                    if (err) throw err;
                    res.text.should.equal("Hello World!");
                    done();
                });
        });
    });
});


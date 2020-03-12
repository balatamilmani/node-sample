import {MisUtil} from "../../src/util/MisUtil";
const chai = require('chai');

const { expect } = chai;

describe("-----------------------Unit tests for MisUtil-----------------------", () => {
    it("MisUtil test isExpired return true", async () => {
        
        let dateStr = 'Tue Mar 03 2020 20:57:37 GMT+0000';
        let response = MisUtil.isExpired(dateStr, 500);
        expect(response).to.be.true;
    });

    it("MisUtil test isExpired return false", async () => {
        let dateStr = 'Tue Mar 03 2020 20:57:37 GMT+0000';
        let response = MisUtil.isExpired(dateStr, 5000000);
        expect(response).to.be.false;
    });

    it("MisUtil test isExpired return false", async () => {
        let dateStr = 'Tue Mar 03 2020 20:57:37 GMT+0000';
        let response = MisUtil.isExpired(dateStr, undefined);
        expect(response).to.be.false;
    });
});
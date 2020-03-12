import {CacheHandler} from "../src/cacheHandler";
const chai = require('chai');
const { expect } = chai;

describe("-----------------------Unit tests for CacheHander-----------------------", () => {

    let cacheHandler = new CacheHandler();
    it("CacheHander test isExpired return true", async () => {
        
        let dateStr = 'Tue Mar 03 2020 20:57:37 GMT+0000';
        let response = cacheHandler.isExpired(dateStr, 500);
        expect(response).to.be.true;
    });

    it("CacheHander test isExpired return false", async () => {
        let dateStr = 'Tue Mar 03 2020 20:57:37 GMT+0000';
        let response = cacheHandler.isExpired(dateStr, 5000000);
        expect(response).to.be.false;
    });

    it("CacheHander test isExpired return false", async () => {
        let dateStr = 'Tue Mar 03 2020 20:57:37 GMT+0000';
        let response = cacheHandler.isExpired(dateStr, undefined);
        expect(response).to.be.false;
    });

    it("CacheHander test saveContent return false", async () => {
        let response = cacheHandler.saveContent();
        console.log(response);
        
    });
});
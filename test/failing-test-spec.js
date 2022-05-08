'use strict'

const chai = require('chai')
const expect = chai.expect
const hotels = require('../src/main')
const getCheapestHotel = hotels.getCheapestHotel 

describe('test', function () {
  it('should return Lakewood', function () {
    expect(getCheapestHotel("Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)")).to.equal("Lakewood");
  });
  it('should return Bridgewood', function () {
    expect(getCheapestHotel("Regular: 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)")).to.equal("Bridgewood");
  });
  it('should return Ridgewood', function () {
    expect(getCheapestHotel("Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)")).to.equal("Ridgewood");
  });
  it('3 weekdays rewards should return Lakewood', function () {
    expect(getCheapestHotel("Rewards: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)")).to.equal("Lakewood");
  });
  it('1 weekday and 2 weekend rewards should return Ridgewood', function () {
    expect(getCheapestHotel("Rewards: 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)")).to.equal("Ridgewood");
  });
  it('2 weekday and 1 weekend regular should return Lakewood', function () {
    expect(getCheapestHotel("Regular: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)")).to.equal("Lakewood");
  });
  it('One week regular: should return Lakewood', function () {
    expect(getCheapestHotel("Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed), 19Mar2009(thur), 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)")).to.equal("Lakewood");
  });
  it('One week reward: should return Lakewood', function () {
    expect(getCheapestHotel("Rewards: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed), 19Mar2009(thur), 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)")).to.equal("Lakewood");
  });
  it('One weekday regular: should return Lakewood', function () {
    expect(getCheapestHotel("Regular: 20Mar2009(fri)")).to.equal("Lakewood");
  });
  it('One weekday reward: should return Lakewood', function () {
    expect(getCheapestHotel("Rewards: 20Mar2009(fri)")).to.equal("Lakewood");
  });
  it('One weekend regular: should return Bridgewood', function () {
    expect(getCheapestHotel("Regular: 20Mar2009(sat)")).to.equal("Bridgewood");
  });
  it('One weekend reward: should return Ridgewood', function () {
    expect(getCheapestHotel("Rewards: 20Mar2009(sat)")).to.equal("Ridgewood");
  });
  it('3 weekday and 2 weekend Regular: should return Lakewood', function () {
    expect(getCheapestHotel("Regular: 18Mar2009(wed), 19Mar2009(thur), 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)")).to.equal("Lakewood");
  });
  it('3 weekday and 2 weekend Rewards: should return Lakewood', function () {
    expect(getCheapestHotel("Rewards: 18Mar2009(wed), 19Mar2009(thur), 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)")).to.equal("Ridgewood");
  });
  it('8 days Regular: should return Lakewood', function () {
    expect(getCheapestHotel("Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed), 19Mar2009(thur), 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun), 23Mar2009(mon)")).to.equal("Lakewood");
  });
  it('8 days Reward: should return Lakewood', function () {
    expect(getCheapestHotel("Rewards: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed), 19Mar2009(thur), 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun), 23Mar2009(mon)")).to.equal("Lakewood");
  });
  it('A lot of random days Regular: should return Lakewood', function () {
    expect(getCheapestHotel("Regular: (fri), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat)")).to.equal("Lakewood");
  });
  it('A lot of random days Rewards: should return Ridgewood', function () {
    expect(getCheapestHotel("Rewards: (fri), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat), (fri), (sat)")).to.equal("Ridgewood");
  });
  it('A lot of weekends Regular: should return Bridgewood', function () {
    expect(getCheapestHotel("Regular: (sat), (sun), (sat), (sun), (sat), (sun), (sat), (sun), (sun), (sat), (sun), (sat), (sun), (sat), (sun), (sun), (sat), (sun), (sat), (sun), (sat), (sun), (sun), (sat), (sun), (sat), (sun), (sat), (sun), (sun), (sat), (sun), (sat), (sun), (sat), (sun), (sun), (sat), (sun), (sat), (sun), (sat), (sun), (sun), (sat), (sun), (sat), (sun), (sat), (sun), (sun), (sat), (sun), (sat), (sun), (sat), (sun), (sun), (sat), (sun), (sat), (sun), (sat), (sun), (sun), (sat), (sun), (sat), (sun), (sat), (sun), (sun), (sat), (sun), (sat), (sun), (sat), (sun), (sun), (sat), (sun), (sat), (sun), (sat), (sun), (sun), (sat), (sun), (sat), (sun), (sat), (sun), (sun), (sat), (sun), (sat), (sun), (sat), (sun), (sun), (sat), (sun), (sat), (sun), (sat), (sun), (sun), (sat), (sun), (sat), (sun), (sat), (sun), (sun), (sat), (sun), (sat), (sun), (sat), (sun), (sun), (sat), (sun), (sat), (sun), (sat), (sun), (sun), (sat), (sun), (sat), (sun), (sat), (sun)")).to.equal("Bridgewood");
  });
  it('A lot of weekends Rewards: should return Ridgewood', function () {
    expect(getCheapestHotel("Rewards: (sat), (sun), (sat), (sun), (sat), (sun), (sat), (sun), (sun), (sat), (sun), (sat), (sun), (sat), (sun), (sun), (sat), (sun), (sat), (sun), (sat), (sun), (sun), (sat), (sun), (sat), (sun), (sat), (sun), (sun), (sat), (sun), (sat), (sun), (sat), (sun), (sun), (sat), (sun), (sat), (sun), (sat), (sun), (sun), (sat), (sun), (sat), (sun), (sat), (sun), (sun), (sat), (sun), (sat), (sun), (sat), (sun), (sun), (sat), (sun), (sat), (sun), (sat), (sun), (sun), (sat), (sun), (sat), (sun), (sat), (sun), (sun), (sat), (sun), (sat), (sun), (sat), (sun), (sun), (sat), (sun), (sat), (sun), (sat), (sun), (sun), (sat), (sun), (sat), (sun), (sat), (sun), (sun), (sat), (sun), (sat), (sun), (sat), (sun), (sun), (sat), (sun), (sat), (sun), (sat), (sun), (sun), (sat), (sun), (sat), (sun), (sat), (sun), (sun), (sat), (sun), (sat), (sun), (sat), (sun), (sun), (sat), (sun), (sat), (sun), (sat), (sun), (sun), (sat), (sun), (sat), (sun), (sat), (sun)")).to.equal("Ridgewood");
  });

  it('void function () should return Invalid Input', function () {
    expect(getCheapestHotel()).to.equal("Invalid Input!");
  });
})
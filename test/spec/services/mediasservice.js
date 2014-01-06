'use strict';

describe('Service: Mediasservice', function () {

  // load the service's module
  beforeEach(module('uiMediaApp'));

  // instantiate service
  var Mediasservice;
  beforeEach(inject(function (_Mediasservice_) {
    Mediasservice = _Mediasservice_;
  }));

  it('should do something', function () {
    expect(!!Mediasservice).toBe(true);
  });

});

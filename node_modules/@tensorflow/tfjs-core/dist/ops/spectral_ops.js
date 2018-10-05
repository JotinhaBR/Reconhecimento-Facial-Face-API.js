"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("../environment");
var operation_1 = require("../ops/operation");
var util_1 = require("../util");
function fft_(input) {
    util_1.assert(input.dtype === 'complex64', 'dtype must be complex64');
    util_1.assert(input.rank === 1, 'input rank must be 1');
    var ret = environment_1.ENV.engine.runKernel(function (backend) { return backend.fft(input); }, { input: input });
    return ret;
}
exports.fft = operation_1.op({ fft_: fft_ });
//# sourceMappingURL=spectral_ops.js.map
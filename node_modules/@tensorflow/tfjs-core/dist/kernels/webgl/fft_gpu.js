"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMPLEX_FFT = {
    REAL: 'return real * expR - imag * expI;',
    IMAG: 'return real * expI + imag * expR;'
};
var FFTProgram = (function () {
    function FFTProgram(op, inputShape) {
        this.variableNames = ['real', 'imag'];
        var size = inputShape[0];
        this.outputShape = [size];
        this.userCode = "\n      float unaryOpComplex(float real, float expR, float imag, float expI) {\n        " + op + "\n      }\n\n      float mulMatDFT(int row) {\n        // TODO: Gather constants in one place?\n        const float PI = 3.1415926535897932384626433832795;\n        float result = 0.0;\n\n        for (int i = 0; i < " + size + "; i++) {\n          float x = -2.0 * PI * float(row * i) / float(" + size + ");\n          float expR = cos(x);\n          float expI = sin(x);\n          float real = getReal(i);\n          float imag = getImag(i);\n\n          result += unaryOpComplex(real, expR, imag, expI);\n        }\n\n        return result;\n      }\n\n      void main() {\n        int row = getOutputCoords();\n        setOutput(mulMatDFT(row));\n      }\n    ";
    }
    return FFTProgram;
}());
exports.FFTProgram = FFTProgram;
//# sourceMappingURL=fft_gpu.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agComponent = void 0;
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
function agComponent(_options) {
    return (_tree, _context) => {
        _options.name = (0, core_1.basename)(_options.name);
        _options.path = (0, core_1.normalize)('/' + (0, core_1.dirname)((_options.path + '/' + _options.name)));
        const templateSource = (0, schematics_1.apply)((0, schematics_1.url)('./files'), [
            (0, schematics_1.template)(Object.assign(Object.assign({}, _options), { classify: core_1.strings.classify, dasherize: core_1.strings.dasherize })),
            (0, schematics_1.move)(_options.path),
        ]);
        return (0, schematics_1.chain)([
            (0, schematics_1.externalSchematic)('@schematics/angular', 'component', _options),
            (0, schematics_1.mergeWith)(templateSource, schematics_1.MergeStrategy.Overwrite),
        ]);
    };
}
exports.agComponent = agComponent;
//# sourceMappingURL=index.js.map
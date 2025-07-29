"use strict";
module.exports = inquire;

/**
 * Requires a module only if available.
 * @memberof util
 * @param {string} moduleName Module to require
 * @returns {?Object} Required module if available and not empty, otherwise `null`
 */
// https://github.com/protobufjs/protobuf.js/pull/1941/files
// https://github.com/protobufjs/protobuf.js/blob/f42297b29d15c8e0382744a83f5147a1aa978f42/CHANGELOG.md?plain=1#L55
// changed in 2025-04-15, version 7.5.0
function inquire(moduleName) {
    try {
        if (typeof require !== "function") {
            return null;
        }
        var mod = require(moduleName);
        if (mod && (mod.length || Object.keys(mod).length)) return mod;
        return null;
    } catch (err) {
        // ignore
        return null;
    }
}

/*
// maybe worth a shot to prevent renaming issues:
// see: https://github.com/webpack/webpack/blob/master/lib/dependencies/CommonJsRequireDependencyParserPlugin.js
// triggers on:
// - expression require.cache
// - expression require (???)
// - call require
// - call require:commonjs:item
// - call require:commonjs:context

Object.defineProperty(Function.prototype, "__self", { get: function() { return this; } });
var r = require.__self;
delete Function.prototype.__self;
*/

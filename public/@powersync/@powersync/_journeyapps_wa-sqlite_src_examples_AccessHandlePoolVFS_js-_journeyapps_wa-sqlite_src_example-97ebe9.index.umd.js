(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@journeyapps/wa-sqlite"), require("@powersync/common"), require("comlink"), require("async-mutex"), require("@journeyapps/wa-sqlite/src/examples/OPFSCoopSyncVFS.js"), require("@journeyapps/wa-sqlite/src/examples/AccessHandlePoolVFS.js"), require("@journeyapps/wa-sqlite/src/examples/IDBBatchAtomicVFS.js"));
	else if(typeof define === 'function' && define.amd)
		define(["@journeyapps/wa-sqlite", "@powersync/common", "comlink", "async-mutex", "@journeyapps/wa-sqlite/src/examples/OPFSCoopSyncVFS.js", "@journeyapps/wa-sqlite/src/examples/AccessHandlePoolVFS.js", "@journeyapps/wa-sqlite/src/examples/IDBBatchAtomicVFS.js"], factory);
	else if(typeof exports === 'object')
		exports["sdk_web"] = factory(require("@journeyapps/wa-sqlite"), require("@powersync/common"), require("comlink"), require("async-mutex"), require("@journeyapps/wa-sqlite/src/examples/OPFSCoopSyncVFS.js"), require("@journeyapps/wa-sqlite/src/examples/AccessHandlePoolVFS.js"), require("@journeyapps/wa-sqlite/src/examples/IDBBatchAtomicVFS.js"));
	else
		root["sdk_web"] = factory(root["@journeyapps/wa-sqlite"], root["@powersync/common"], root["comlink"], root["async-mutex"], root["@journeyapps/wa-sqlite/src/examples/OPFSCoopSyncVFS.js"], root["@journeyapps/wa-sqlite/src/examples/AccessHandlePoolVFS.js"], root["@journeyapps/wa-sqlite/src/examples/IDBBatchAtomicVFS.js"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__journeyapps_wa_sqlite__, __WEBPACK_EXTERNAL_MODULE__powersync_common__, __WEBPACK_EXTERNAL_MODULE_comlink__, __WEBPACK_EXTERNAL_MODULE_async_mutex__, __WEBPACK_EXTERNAL_MODULE__journeyapps_wa_sqlite_src_examples_OPFSCoopSyncVFS_js__, __WEBPACK_EXTERNAL_MODULE__journeyapps_wa_sqlite_src_examples_AccessHandlePoolVFS_js__, __WEBPACK_EXTERNAL_MODULE__journeyapps_wa_sqlite_src_examples_IDBBatchAtomicVFS_js__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@journeyapps/wa-sqlite"
/*!*****************************************!*\
  !*** external "@journeyapps/wa-sqlite" ***!
  \*****************************************/
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__journeyapps_wa_sqlite__;

/***/ },

/***/ "@journeyapps/wa-sqlite/src/examples/AccessHandlePoolVFS.js"
/*!*****************************************************************************!*\
  !*** external "@journeyapps/wa-sqlite/src/examples/AccessHandlePoolVFS.js" ***!
  \*****************************************************************************/
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__journeyapps_wa_sqlite_src_examples_AccessHandlePoolVFS_js__;

/***/ },

/***/ "@journeyapps/wa-sqlite/src/examples/IDBBatchAtomicVFS.js"
/*!***************************************************************************!*\
  !*** external "@journeyapps/wa-sqlite/src/examples/IDBBatchAtomicVFS.js" ***!
  \***************************************************************************/
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__journeyapps_wa_sqlite_src_examples_IDBBatchAtomicVFS_js__;

/***/ },

/***/ "@journeyapps/wa-sqlite/src/examples/OPFSCoopSyncVFS.js"
/*!*************************************************************************!*\
  !*** external "@journeyapps/wa-sqlite/src/examples/OPFSCoopSyncVFS.js" ***!
  \*************************************************************************/
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__journeyapps_wa_sqlite_src_examples_OPFSCoopSyncVFS_js__;

/***/ },

/***/ "@powersync/common"
/*!************************************!*\
  !*** external "@powersync/common" ***!
  \************************************/
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__powersync_common__;

/***/ },

/***/ "async-mutex"
/*!******************************!*\
  !*** external "async-mutex" ***!
  \******************************/
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE_async_mutex__;

/***/ },

/***/ "comlink"
/*!**************************!*\
  !*** external "comlink" ***!
  \**************************/
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE_comlink__;

/***/ },

/***/ "./lib/src/worker/db/SharedWASQLiteConnection.js"
/*!*******************************************************!*\
  !*** ./lib/src/worker/db/SharedWASQLiteConnection.js ***!
  \*******************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedWASQLiteConnection: () => (/* binding */ SharedWASQLiteConnection)
/* harmony export */ });
class SharedWASQLiteConnection {
    options;
    isClosing;
    // Keeps track if this current hold if the shared connection has a hold
    activeHoldId;
    constructor(options) {
        this.options = options;
        // Add this client ID to the set of known clients
        this.clientIds.add(options.clientId);
        this.isClosing = false;
        this.activeHoldId = null;
    }
    get logger() {
        return this.options.logger;
    }
    get dbEntry() {
        return this.options.dbMap.get(this.options.dbFilename);
    }
    get connection() {
        return this.dbEntry.db;
    }
    get clientIds() {
        return this.dbEntry.clientIds;
    }
    async init() {
        // No-op since the connection is already initialized when it was created
    }
    async markHold() {
        this.activeHoldId = await this.connection.markHold();
        return this.activeHoldId;
    }
    async releaseHold(id) {
        try {
            await this.connection.releaseHold(id);
        }
        finally {
            this.activeHoldId = null;
        }
    }
    async isAutoCommit() {
        return this.connection.isAutoCommit();
    }
    /**
     * Handles closing of a shared connection.
     * The connection is only closed if there are no active clients using it.
     */
    async close() {
        // This prevents further statements on this connection from being executed
        this.isClosing = true;
        const { clientIds, logger } = this;
        const { clientId, dbFilename, dbMap } = this.options;
        logger.debug(`Close requested from client ${clientId} of ${[...clientIds]}`);
        clientIds.delete(clientId);
        if (this.activeHoldId) {
            // We can't cleanup here since we're not in a lock context.
            // The cleanup will occur once a new hold is acquired.
            this.logger.info(`Hold ${this.activeHoldId} was still active when the connection was closed. Cleanup will occur once a new hold is acquired.`);
        }
        if (clientIds.size == 0) {
            logger.debug(`Closing connection to ${this.options}.`);
            const connection = this.connection;
            dbMap.delete(dbFilename);
            await connection.close();
            return;
        }
        logger.debug(`Connection to ${dbFilename} not closed yet due to active clients.`);
        return;
    }
    async withClosing(action) {
        if (this.isClosing) {
            throw new Error('Connection is closing');
        }
        return action();
    }
    async execute(sql, params) {
        return this.withClosing(() => this.connection.execute(sql, params));
    }
    async executeRaw(sql, params) {
        return this.withClosing(() => this.connection.executeRaw(sql, params));
    }
    executeBatch(sql, params) {
        return this.withClosing(() => this.connection.executeBatch(sql, params));
    }
    registerOnTableChange(callback) {
        return this.connection.registerOnTableChange(callback);
    }
    getConfig() {
        return this.connection.getConfig();
    }
}


/***/ },

/***/ "./lib/src/worker/db/WASQLiteDB.worker.js"
/*!************************************************!*\
  !*** ./lib/src/worker/db/WASQLiteDB.worker.js ***!
  \************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _journeyapps_wa_sqlite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @journeyapps/wa-sqlite */ "@journeyapps/wa-sqlite");
/* harmony import */ var _powersync_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @powersync/common */ "@powersync/common");
/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! comlink */ "comlink");
/* harmony import */ var _shared_navigator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/navigator.js */ "./lib/src/shared/navigator.js");
/* harmony import */ var _SharedWASQLiteConnection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SharedWASQLiteConnection.js */ "./lib/src/worker/db/SharedWASQLiteConnection.js");
/* harmony import */ var _WorkerWASQLiteConnection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WorkerWASQLiteConnection.js */ "./lib/src/worker/db/WorkerWASQLiteConnection.js");
/**
 * Supports both shared and dedicated workers, based on how the worker is constructed (new SharedWorker vs new Worker()).
 */






const baseLogger = (0,_powersync_common__WEBPACK_IMPORTED_MODULE_1__.createBaseLogger)();
baseLogger.useDefaults();
const logger = (0,_powersync_common__WEBPACK_IMPORTED_MODULE_1__.createLogger)('db-worker');
const DBMap = new Map();
const OPEN_DB_LOCK = 'open-wasqlite-db';
let nextClientId = 1;
const openDBShared = async (options) => {
    // Prevent multiple simultaneous opens from causing race conditions
    return (0,_shared_navigator_js__WEBPACK_IMPORTED_MODULE_3__.getNavigatorLocks)().request(OPEN_DB_LOCK, async () => {
        const clientId = nextClientId++;
        const { dbFilename, logLevel } = options;
        logger.setLevel(logLevel);
        if (!DBMap.has(dbFilename)) {
            const clientIds = new Set();
            // This format returns proxy objects for function callbacks
            const connection = new _WorkerWASQLiteConnection_js__WEBPACK_IMPORTED_MODULE_5__.WorkerWASQLiteConnection(options);
            await connection.init();
            connection.registerListener({
                holdOverwritten: async () => {
                    /**
                     * The previous hold has been overwritten, without being released.
                     * we need to cleanup any resources associated with it.
                     * We can perform a rollback to release any potential transactions that were started.
                     */
                    await connection.execute('ROLLBACK').catch(() => { });
                }
            });
            DBMap.set(dbFilename, {
                clientIds,
                db: connection
            });
        }
        // Associates this clientId with the shared connection entry
        const sharedConnection = new _SharedWASQLiteConnection_js__WEBPACK_IMPORTED_MODULE_4__.SharedWASQLiteConnection({
            dbMap: DBMap,
            dbFilename,
            clientId,
            logger
        });
        return comlink__WEBPACK_IMPORTED_MODULE_2__.proxy(sharedConnection);
    });
};
// Check if we're in a SharedWorker context
if (typeof SharedWorkerGlobalScope !== 'undefined') {
    const _self = self;
    _self.onconnect = function (event) {
        const port = event.ports[0];
        comlink__WEBPACK_IMPORTED_MODULE_2__.expose(openDBShared, port);
    };
}
else {
    // A dedicated worker can be shared externally
    comlink__WEBPACK_IMPORTED_MODULE_2__.expose(openDBShared);
}
addEventListener('unload', () => {
    Array.from(DBMap.values()).forEach(async (dbConnection) => {
        const { db } = dbConnection;
        db.close?.();
    });
});


/***/ },

/***/ "./lib/src/worker/db/WorkerWASQLiteConnection.js"
/*!*******************************************************!*\
  !*** ./lib/src/worker/db/WorkerWASQLiteConnection.js ***!
  \*******************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkerWASQLiteConnection: () => (/* binding */ WorkerWASQLiteConnection)
/* harmony export */ });
/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! comlink */ "comlink");
/* harmony import */ var _db_adapters_wa_sqlite_WASQLiteConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../db/adapters/wa-sqlite/WASQLiteConnection.js */ "./lib/src/db/adapters/wa-sqlite/WASQLiteConnection.js");


/**
 * A Small proxy wrapper around the WASqliteConnection.
 * This ensures that certain return types are properly proxied.
 */
class WorkerWASQLiteConnection extends _db_adapters_wa_sqlite_WASQLiteConnection_js__WEBPACK_IMPORTED_MODULE_1__.WASqliteConnection {
    async registerOnTableChange(callback) {
        // Proxy the callback remove function
        return comlink__WEBPACK_IMPORTED_MODULE_0__.proxy(await super.registerOnTableChange(callback));
    }
}


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["main"], () => (__webpack_require__("./lib/src/worker/db/WASQLiteDB.worker.js")))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and chunks that the entrypoint depends on
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = self.location + "";
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			"_journeyapps_wa-sqlite_src_examples_AccessHandlePoolVFS_js-_journeyapps_wa-sqlite_src_example-97ebe9": 1
/******/ 		};
/******/ 		
/******/ 		// importScripts chunk loading
/******/ 		var installChunk = (data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			while(chunkIds.length)
/******/ 				installedChunks[chunkIds.pop()] = 1;
/******/ 			parentChunkLoadingFunction(data);
/******/ 		};
/******/ 		__webpack_require__.f.i = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					importScripts(__webpack_require__.p + __webpack_require__.u(chunkId));
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksdk_web"] = self["webpackChunksdk_web"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = installChunk;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			return Promise.all([
/******/ 		
/******/ 			]).then(next);
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=_journeyapps_wa-sqlite_src_examples_AccessHandlePoolVFS_js-_journeyapps_wa-sqlite_src_example-97ebe9.index.umd.js.map
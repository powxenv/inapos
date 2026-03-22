(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@powersync/common"), require("async-mutex"), require("comlink"), require("@journeyapps/wa-sqlite"), require("@journeyapps/wa-sqlite/src/examples/OPFSCoopSyncVFS.js"), require("@journeyapps/wa-sqlite/src/examples/AccessHandlePoolVFS.js"), require("@journeyapps/wa-sqlite/src/examples/IDBBatchAtomicVFS.js"));
	else if(typeof define === 'function' && define.amd)
		define(["@powersync/common", "async-mutex", "comlink", "@journeyapps/wa-sqlite", "@journeyapps/wa-sqlite/src/examples/OPFSCoopSyncVFS.js", "@journeyapps/wa-sqlite/src/examples/AccessHandlePoolVFS.js", "@journeyapps/wa-sqlite/src/examples/IDBBatchAtomicVFS.js"], factory);
	else if(typeof exports === 'object')
		exports["sdk_web"] = factory(require("@powersync/common"), require("async-mutex"), require("comlink"), require("@journeyapps/wa-sqlite"), require("@journeyapps/wa-sqlite/src/examples/OPFSCoopSyncVFS.js"), require("@journeyapps/wa-sqlite/src/examples/AccessHandlePoolVFS.js"), require("@journeyapps/wa-sqlite/src/examples/IDBBatchAtomicVFS.js"));
	else
		root["sdk_web"] = factory(root["@powersync/common"], root["async-mutex"], root["comlink"], root["@journeyapps/wa-sqlite"], root["@journeyapps/wa-sqlite/src/examples/OPFSCoopSyncVFS.js"], root["@journeyapps/wa-sqlite/src/examples/AccessHandlePoolVFS.js"], root["@journeyapps/wa-sqlite/src/examples/IDBBatchAtomicVFS.js"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__powersync_common__, __WEBPACK_EXTERNAL_MODULE_async_mutex__, __WEBPACK_EXTERNAL_MODULE_comlink__, __WEBPACK_EXTERNAL_MODULE__journeyapps_wa_sqlite__, __WEBPACK_EXTERNAL_MODULE__journeyapps_wa_sqlite_src_examples_OPFSCoopSyncVFS_js__, __WEBPACK_EXTERNAL_MODULE__journeyapps_wa_sqlite_src_examples_AccessHandlePoolVFS_js__, __WEBPACK_EXTERNAL_MODULE__journeyapps_wa_sqlite_src_examples_IDBBatchAtomicVFS_js__) => {
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

/***/ "./lib/src/db/adapters/LockedAsyncDatabaseAdapter.js"
/*!***********************************************************!*\
  !*** ./lib/src/db/adapters/LockedAsyncDatabaseAdapter.js ***!
  \***********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LockedAsyncDatabaseAdapter: () => (/* binding */ LockedAsyncDatabaseAdapter)
/* harmony export */ });
/* harmony import */ var _powersync_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @powersync/common */ "@powersync/common");
/* harmony import */ var _shared_navigator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/navigator.js */ "./lib/src/shared/navigator.js");
/* harmony import */ var _WorkerWrappedAsyncDatabaseConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WorkerWrappedAsyncDatabaseConnection.js */ "./lib/src/db/adapters/WorkerWrappedAsyncDatabaseConnection.js");
/* harmony import */ var _wa_sqlite_WASQLiteConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wa-sqlite/WASQLiteConnection.js */ "./lib/src/db/adapters/wa-sqlite/WASQLiteConnection.js");




/**
 * @internal
 * Wraps a {@link AsyncDatabaseConnection} and provides exclusive locking functions in
 * order to implement {@link DBAdapter}.
 */
class LockedAsyncDatabaseAdapter extends _powersync_common__WEBPACK_IMPORTED_MODULE_0__.BaseObserver {
    options;
    logger;
    dbGetHelpers;
    debugMode;
    _dbIdentifier;
    initPromise;
    _db = null;
    _disposeTableChangeListener = null;
    _config = null;
    pendingAbortControllers;
    requiresHolds;
    databaseOpenPromise = null;
    closing;
    closed;
    constructor(options) {
        super();
        this.options = options;
        this._dbIdentifier = options.name;
        this.logger = options.logger ?? (0,_powersync_common__WEBPACK_IMPORTED_MODULE_0__.createLogger)(`LockedAsyncDatabaseAdapter - ${this._dbIdentifier}`);
        this.pendingAbortControllers = new Set();
        this.closed = false;
        this.closing = false;
        this.requiresHolds = null;
        // Set the name if provided. We can query for the name if not available yet
        this.debugMode = options.debugMode ?? false;
        if (this.debugMode) {
            const originalExecute = this._execute.bind(this);
            this._execute = async (sql, bindings) => {
                const start = performance.now();
                try {
                    const r = await originalExecute(sql, bindings);
                    performance.measure(`[SQL] ${sql}`, { start });
                    return r;
                }
                catch (e) {
                    performance.measure(`[SQL] [ERROR: ${e.message}] ${sql}`, { start });
                    throw e;
                }
            };
        }
        this.dbGetHelpers = this.generateDBHelpers({
            execute: (query, params) => this.acquireLock(() => this._execute(query, params)),
            executeRaw: (query, params) => this.acquireLock(() => this._executeRaw(query, params)),
            executeBatch: (query, params) => this.acquireLock(() => this._executeBatch(query, params))
        });
        this.initPromise = this._init();
    }
    get baseDB() {
        if (!this._db) {
            throw new Error(`Initialization has not completed yet. Cannot access base db`);
        }
        return this._db;
    }
    get name() {
        return this._dbIdentifier;
    }
    /**
     * Init is automatic, this helps catch errors or explicitly await initialization
     */
    async init() {
        return this.initPromise;
    }
    async openInternalDB() {
        /**
         * Execute opening of the db in a lock in order not to interfere with other operations.
         */
        return this._acquireLock(async () => {
            // Dispose any previous table change listener.
            this._disposeTableChangeListener?.();
            this._disposeTableChangeListener = null;
            this._db?.close().catch((ex) => this.logger.warn(`Error closing database before opening new instance`, ex));
            const isReOpen = !!this._db;
            this._db = null;
            this._db = await this.options.openConnection();
            await this._db.init();
            this._config = await this._db.getConfig();
            await this.registerOnChangeListener(this._db);
            if (isReOpen) {
                this.iterateListeners((cb) => cb.databaseReOpened?.());
            }
            /**
             * This is only required for the long-lived shared IndexedDB connections.
             */
            this.requiresHolds = this._config.vfs == _wa_sqlite_WASQLiteConnection_js__WEBPACK_IMPORTED_MODULE_3__.WASQLiteVFS.IDBBatchAtomicVFS;
        });
    }
    _reOpen() {
        this.databaseOpenPromise = this.openInternalDB().finally(() => {
            this.databaseOpenPromise = null;
        });
        return this.databaseOpenPromise;
    }
    /**
     * Re-opens the underlying database.
     * Returns a pending operation if one is already in progress.
     */
    async reOpenInternalDB() {
        if (this.closing || !this.options.reOpenOnConnectionClosed) {
            // No-op
            return;
        }
        else if (this.databaseOpenPromise) {
            // Already busy opening
            return this.databaseOpenPromise;
        }
        else {
            return this._reOpen();
        }
    }
    async _init() {
        /**
         * For OPFS, we can see this open call sometimes fail due to NoModificationAllowedError.
         * We should be able to recover from this by re-opening the database.
         */
        const maxAttempts = 3;
        for (let count = 0; count < maxAttempts; count++) {
            try {
                await this.openInternalDB();
                break;
            }
            catch (ex) {
                if (count == maxAttempts - 1) {
                    throw ex;
                }
                this.logger.warn(`Attempt ${count + 1} of ${maxAttempts} to open database failed, retrying in 1 second...`, ex);
                await new Promise((resolve) => setTimeout(resolve, 1000));
            }
        }
        this.iterateListeners((cb) => cb.initialized?.());
    }
    getConfiguration() {
        if (!this._config) {
            throw new Error(`Cannot get config before initialization is completed`);
        }
        return {
            ...this._config,
            // This can be overridden by the adapter later
            requiresPersistentTriggers: false
        };
    }
    async waitForInitialized() {
        // Awaiting this will expose errors on function calls like .execute etc
        await this.initPromise;
    }
    async shareConnection() {
        if (false == this._db instanceof _WorkerWrappedAsyncDatabaseConnection_js__WEBPACK_IMPORTED_MODULE_2__.WorkerWrappedAsyncDatabaseConnection) {
            throw new Error(`Only worker connections can be shared`);
        }
        return this._db.shareConnection();
    }
    /**
     * Registers a table change notification callback with the base database.
     * This can be extended by custom implementations in order to handle proxy events.
     */
    async registerOnChangeListener(db) {
        this._disposeTableChangeListener = await db.registerOnTableChange((event) => {
            this.iterateListeners((cb) => cb.tablesUpdated?.(event));
        });
    }
    /**
     * This is currently a no-op on web
     */
    async refreshSchema() { }
    async execute(query, params) {
        return this.writeLock((ctx) => ctx.execute(query, params));
    }
    async executeRaw(query, params) {
        return this.writeLock((ctx) => ctx.executeRaw(query, params));
    }
    async executeBatch(query, params) {
        return this.writeLock((ctx) => this._executeBatch(query, params));
    }
    /**
     * Attempts to close the connection.
     * Shared workers might not actually close the connection if other
     * tabs are still using it.
     */
    async close() {
        this.closing = true;
        /**
         * Note that we obtain a reference to the callback to avoid calling the callback with `this` as the context.
         * This is to avoid Comlink attempting to clone `this` when calling the method.
         */
        const dispose = this._disposeTableChangeListener;
        if (dispose) {
            dispose();
        }
        this.pendingAbortControllers.forEach((controller) => controller.abort('Closed'));
        await this.baseDB?.close?.();
        this.closed = true;
    }
    async getAll(sql, parameters) {
        await this.waitForInitialized();
        return this.dbGetHelpers.getAll(sql, parameters);
    }
    async getOptional(sql, parameters) {
        await this.waitForInitialized();
        return this.dbGetHelpers.getOptional(sql, parameters);
    }
    async get(sql, parameters) {
        await this.waitForInitialized();
        return this.dbGetHelpers.get(sql, parameters);
    }
    async readLock(fn, options) {
        // Read and write locks are the same because we only have one underlying connection.
        return this.writeLock(fn, options);
    }
    async writeLock(fn, options) {
        await this.waitForInitialized();
        return this.acquireLock(async () => fn(this.generateDBHelpers({
            execute: this._execute,
            executeRaw: this._executeRaw,
            executeBatch: this._executeBatch
        })), {
            timeoutMs: options?.timeoutMs ?? this.options.defaultLockTimeoutMs
        });
    }
    async _acquireLock(callback, options) {
        if (this.closing) {
            throw new Error(`Cannot acquire lock, the database is closing`);
        }
        const abortController = new AbortController();
        this.pendingAbortControllers.add(abortController);
        const { timeoutMs } = options ?? {};
        const timeoutId = timeoutMs
            ? setTimeout(() => {
                abortController.abort(`Timeout after ${timeoutMs}ms`);
                this.pendingAbortControllers.delete(abortController);
            }, timeoutMs)
            : null;
        return (0,_shared_navigator_js__WEBPACK_IMPORTED_MODULE_1__.getNavigatorLocks)().request(`db-lock-${this._dbIdentifier}`, { signal: abortController.signal }, async () => {
            this.pendingAbortControllers.delete(abortController);
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            return await callback();
        });
    }
    async acquireLock(callback, options) {
        await this.waitForInitialized();
        // The database is being (re)opened in the background. Wait for it here.
        if (this.databaseOpenPromise) {
            await this.databaseOpenPromise;
        }
        else if (!this._db) {
            /**
             * The database is not open anymore, we might need to re-open it.
             * Typically, _db, can be `null` if we tried to reOpen the database, but failed to succeed in re-opening.
             * This can happen when disconnecting the client.
             * Note: It is safe to re-enter this method multiple times.
             */
            await this.reOpenInternalDB();
        }
        return this._acquireLock(async () => {
            let holdId = null;
            try {
                /**
                 * We can't await this since it uses the same lock as we're in now.
                 * If there is a pending open, this call will throw.
                 * If there is no pending open, but there is also no database - the open
                 * might have failed. We need to re-open the database.
                 */
                if (this.databaseOpenPromise || !this._db) {
                    throw new _powersync_common__WEBPACK_IMPORTED_MODULE_0__.ConnectionClosedError('Connection is busy re-opening');
                }
                holdId = this.requiresHolds ? await this.baseDB.markHold() : null;
                return await callback();
            }
            catch (ex) {
                if (_powersync_common__WEBPACK_IMPORTED_MODULE_0__.ConnectionClosedError.MATCHES(ex)) {
                    // Immediately re-open the database. We need to miss as little table updates as possible.
                    // Note, don't await this since it uses the same lock as we're in now.
                    this.reOpenInternalDB();
                }
                throw ex;
            }
            finally {
                if (holdId) {
                    await this.baseDB.releaseHold(holdId);
                }
            }
        }, options);
    }
    async readTransaction(fn, options) {
        return this.readLock(this.wrapTransaction(fn));
    }
    writeTransaction(fn, options) {
        return this.writeLock(this.wrapTransaction(fn, true));
    }
    generateDBHelpers(tx) {
        return {
            ...tx,
            /**
             *  Execute a read-only query and return results
             */
            async getAll(sql, parameters) {
                const res = await tx.execute(sql, parameters);
                return res.rows?._array ?? [];
            },
            /**
             * Execute a read-only query and return the first result, or null if the ResultSet is empty.
             */
            async getOptional(sql, parameters) {
                const res = await tx.execute(sql, parameters);
                return res.rows?.item(0) ?? null;
            },
            /**
             * Execute a read-only query and return the first result, error if the ResultSet is empty.
             */
            async get(sql, parameters) {
                const res = await tx.execute(sql, parameters);
                const first = res.rows?.item(0);
                if (!first) {
                    throw new Error('Result set is empty');
                }
                return first;
            }
        };
    }
    /**
     * Wraps a lock context into a transaction context
     */
    wrapTransaction(cb, write = false) {
        return async (tx) => {
            await this._execute(write ? 'BEGIN EXCLUSIVE' : 'BEGIN');
            let finalized = false;
            const commit = async () => {
                if (finalized) {
                    return { rowsAffected: 0 };
                }
                finalized = true;
                return this._execute('COMMIT');
            };
            const rollback = () => {
                finalized = true;
                return this._execute('ROLLBACK');
            };
            try {
                const result = await cb({
                    ...tx,
                    commit,
                    rollback
                });
                if (!finalized) {
                    await commit();
                }
                return result;
            }
            catch (ex) {
                this.logger.debug('Caught ex in transaction', ex);
                try {
                    await rollback();
                }
                catch (ex2) {
                    // In rare cases, a rollback may fail.
                    // Safe to ignore.
                }
                throw ex;
            }
        };
    }
    /**
     * Wraps the worker execute function, awaiting for it to be available
     */
    _execute = async (sql, bindings) => {
        await this.waitForInitialized();
        const result = await this.baseDB.execute(sql, bindings);
        return {
            ...result,
            rows: {
                ...result.rows,
                item: (idx) => result.rows._array[idx]
            }
        };
    };
    /**
     * Wraps the worker executeRaw function, awaiting for it to be available
     */
    _executeRaw = async (sql, bindings) => {
        await this.waitForInitialized();
        return await this.baseDB.executeRaw(sql, bindings);
    };
    /**
     * Wraps the worker executeBatch function, awaiting for it to be available
     */
    _executeBatch = async (query, params) => {
        await this.waitForInitialized();
        const result = await this.baseDB.executeBatch(query, params);
        return {
            ...result,
            rows: undefined
        };
    };
}


/***/ },

/***/ "./lib/src/db/adapters/WorkerWrappedAsyncDatabaseConnection.js"
/*!*********************************************************************!*\
  !*** ./lib/src/db/adapters/WorkerWrappedAsyncDatabaseConnection.js ***!
  \*********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkerWrappedAsyncDatabaseConnection: () => (/* binding */ WorkerWrappedAsyncDatabaseConnection)
/* harmony export */ });
/* harmony import */ var _powersync_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @powersync/common */ "@powersync/common");
/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! comlink */ "comlink");


/**
 * Wraps a provided instance of {@link AsyncDatabaseConnection}, providing necessary proxy
 * functions for worker listeners.
 */
class WorkerWrappedAsyncDatabaseConnection extends _powersync_common__WEBPACK_IMPORTED_MODULE_0__.BaseObserver {
    options;
    lockAbortController = new AbortController();
    notifyRemoteClosed;
    constructor(options) {
        super();
        this.options = options;
        if (options.remoteCanCloseUnexpectedly) {
            this.notifyRemoteClosed = new AbortController();
        }
    }
    get baseConnection() {
        return this.options.baseConnection;
    }
    init() {
        return this.baseConnection.init();
    }
    /**
     * Marks the remote as closed.
     *
     * This can sometimes happen outside of our control, e.g. when a shared worker requests a connection from a tab. When
     * it happens, all methods on the {@link baseConnection} would never resolve. To avoid livelocks in this scenario, we
     * throw on all outstanding promises and forbid new calls.
     */
    markRemoteClosed() {
        // Can non-null assert here because this function is only supposed to be called when remoteCanCloseUnexpectedly was
        // set.
        this.notifyRemoteClosed.abort();
    }
    markHold() {
        return this.withRemote(() => this.baseConnection.markHold());
    }
    releaseHold(holdId) {
        return this.withRemote(() => this.baseConnection.releaseHold(holdId));
    }
    isAutoCommit() {
        return this.withRemote(() => this.baseConnection.isAutoCommit());
    }
    withRemote(workerPromise, fireActionOnAbort = false) {
        const controller = this.notifyRemoteClosed;
        if (controller) {
            return new Promise((resolve, reject) => {
                if (controller.signal.aborted) {
                    reject(new _powersync_common__WEBPACK_IMPORTED_MODULE_0__.ConnectionClosedError('Called operation on closed remote'));
                    if (!fireActionOnAbort) {
                        // Don't run the operation if we're going to reject
                        // We might want to fire-and-forget the operation in some cases (like a close operation)
                        return;
                    }
                }
                function handleAbort() {
                    reject(new _powersync_common__WEBPACK_IMPORTED_MODULE_0__.ConnectionClosedError('Remote peer closed with request in flight'));
                }
                function completePromise(action) {
                    controller.signal.removeEventListener('abort', handleAbort);
                    action();
                }
                controller.signal.addEventListener('abort', handleAbort);
                workerPromise()
                    .then((data) => completePromise(() => resolve(data)))
                    .catch((e) => completePromise(() => reject(e)));
            });
        }
        else {
            // Can't close, so just return the inner worker promise unguarded.
            return workerPromise();
        }
    }
    /**
     * Get a MessagePort which can be used to share the internals of this connection.
     */
    async shareConnection() {
        const { identifier, remote } = this.options;
        /**
         * Hold a navigator lock in order to avoid features such as Chrome's frozen tabs,
         * or Edge's sleeping tabs from pausing the thread for this connection.
         * This promise resolves once a lock is obtained.
         * This lock will be held as long as this connection is open.
         * The `shareConnection` method should not be called on multiple tabs concurrently.
         */
        await new Promise((resolve, reject) => navigator.locks
            .request(`shared-connection-${this.options.identifier}-${Date.now()}-${Math.round(Math.random() * 10000)}`, {
            signal: this.lockAbortController.signal
        }, async () => {
            resolve();
            // Free the lock when the connection is already closed.
            if (this.lockAbortController.signal.aborted) {
                return;
            }
            // Hold the lock while the shared connection is in use.
            await new Promise((releaseLock) => {
                this.lockAbortController.signal.addEventListener('abort', () => {
                    releaseLock();
                });
            });
        })
            // We aren't concerned with abort errors here
            .catch((ex) => {
            if (ex.name == 'AbortError') {
                resolve();
            }
            else {
                reject(ex);
            }
        }));
        const newPort = await remote[comlink__WEBPACK_IMPORTED_MODULE_1__.createEndpoint]();
        return { port: newPort, identifier };
    }
    /**
     * Registers a table change notification callback with the base database.
     * This can be extended by custom implementations in order to handle proxy events.
     */
    async registerOnTableChange(callback) {
        return this.baseConnection.registerOnTableChange(comlink__WEBPACK_IMPORTED_MODULE_1__.proxy(callback));
    }
    async close() {
        // Abort any pending lock requests.
        this.lockAbortController.abort();
        try {
            // fire and forget the close operation
            await this.withRemote(() => this.baseConnection.close(), true);
        }
        finally {
            this.options.remote[comlink__WEBPACK_IMPORTED_MODULE_1__.releaseProxy]();
            this.options.onClose?.();
            this.iterateListeners((l) => l.closing?.());
        }
    }
    execute(sql, params) {
        return this.withRemote(() => this.baseConnection.execute(sql, params));
    }
    executeRaw(sql, params) {
        return this.withRemote(() => this.baseConnection.executeRaw(sql, params));
    }
    executeBatch(sql, params) {
        return this.withRemote(() => this.baseConnection.executeBatch(sql, params));
    }
    getConfig() {
        return this.withRemote(() => this.baseConnection.getConfig());
    }
}


/***/ },

/***/ "./lib/src/db/sync/WebRemote.js"
/*!**************************************!*\
  !*** ./lib/src/db/sync/WebRemote.js ***!
  \**************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebRemote: () => (/* binding */ WebRemote)
/* harmony export */ });
/* harmony import */ var _powersync_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @powersync/common */ "@powersync/common");
/* harmony import */ var _userAgent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userAgent.js */ "./lib/src/db/sync/userAgent.js");


/*
 * Depends on browser's implementation of global fetch.
 */
class WebFetchProvider extends _powersync_common__WEBPACK_IMPORTED_MODULE_0__.FetchImplementationProvider {
    getFetch() {
        return fetch.bind(globalThis);
    }
}
class WebRemote extends _powersync_common__WEBPACK_IMPORTED_MODULE_0__.AbstractRemote {
    connector;
    logger;
    _bson;
    constructor(connector, logger = _powersync_common__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_REMOTE_LOGGER, options) {
        super(connector, logger, {
            ...(options ?? {}),
            fetchImplementation: options?.fetchImplementation ?? new WebFetchProvider()
        });
        this.connector = connector;
        this.logger = logger;
    }
    getUserAgent() {
        let ua = [super.getUserAgent(), `powersync-web`];
        try {
            ua.push(...(0,_userAgent_js__WEBPACK_IMPORTED_MODULE_1__.getUserAgentInfo)());
        }
        catch (e) {
            this.logger.warn('Failed to get user agent info', e);
        }
        return ua.join(' ');
    }
    async getBSON() {
        if (this._bson) {
            return this._bson;
        }
        /**
         * Dynamic import to be used only when needed.
         */
        const { BSON } = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! bson */ "../../node_modules/.pnpm/bson@6.10.4/node_modules/bson/lib/bson.mjs"));
        this._bson = BSON;
        return this._bson;
    }
}


/***/ },

/***/ "./lib/src/db/sync/WebStreamingSyncImplementation.js"
/*!***********************************************************!*\
  !*** ./lib/src/db/sync/WebStreamingSyncImplementation.js ***!
  \***********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebStreamingSyncImplementation: () => (/* binding */ WebStreamingSyncImplementation)
/* harmony export */ });
/* harmony import */ var _powersync_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @powersync/common */ "@powersync/common");
/* harmony import */ var _shared_navigator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/navigator.js */ "./lib/src/shared/navigator.js");


class WebStreamingSyncImplementation extends _powersync_common__WEBPACK_IMPORTED_MODULE_0__.AbstractStreamingSyncImplementation {
    constructor(options) {
        // Super will store and provide default values for options
        super(options);
    }
    get webOptions() {
        return this.options;
    }
    async obtainLock(lockOptions) {
        const identifier = `streaming-sync-${lockOptions.type}-${this.webOptions.identifier}`;
        if (lockOptions.type == _powersync_common__WEBPACK_IMPORTED_MODULE_0__.LockType.SYNC) {
            this.logger.debug('requesting lock for ', identifier);
        }
        return (0,_shared_navigator_js__WEBPACK_IMPORTED_MODULE_1__.getNavigatorLocks)().request(identifier, { signal: lockOptions.signal }, lockOptions.callback);
    }
}


/***/ },

/***/ "./lib/src/db/sync/userAgent.js"
/*!**************************************!*\
  !*** ./lib/src/db/sync/userAgent.js ***!
  \**************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getUserAgentInfo: () => (/* binding */ getUserAgentInfo)
/* harmony export */ });
/**
 * Get a minimal representation of browser, version and operating system.
 *
 * The goal is to get enough environemnt info to reproduce issues, but no
 * more.
 */
function getUserAgentInfo(nav) {
    nav ??= navigator;
    const browser = getBrowserInfo(nav);
    const os = getOsInfo(nav);
    // The cast below is to cater for TypeScript < 5.5.0
    return [browser, os].filter((v) => v != null);
}
function getBrowserInfo(nav) {
    const brands = nav.userAgentData?.brands;
    if (brands != null) {
        const tests = [
            { name: 'Google Chrome', value: 'Chrome' },
            { name: 'Opera', value: 'Opera' },
            { name: 'Edge', value: 'Edge' },
            { name: 'Chromium', value: 'Chromium' }
        ];
        for (let { name, value } of tests) {
            const brand = brands.find((b) => b.brand == name);
            if (brand != null) {
                return `${value}/${brand.version}`;
            }
        }
    }
    const ua = nav.userAgent;
    const regexps = [
        { re: /(?:firefox|fxios)\/(\d+)/i, value: 'Firefox' },
        { re: /(?:edg|edge|edga|edgios)\/(\d+)/i, value: 'Edge' },
        { re: /opr\/(\d+)/i, value: 'Opera' },
        { re: /(?:chrome|chromium|crios)\/(\d+)/i, value: 'Chrome' },
        { re: /version\/(\d+).*safari/i, value: 'Safari' }
    ];
    for (let { re, value } of regexps) {
        const match = re.exec(ua);
        if (match != null) {
            return `${value}/${match[1]}`;
        }
    }
    return null;
}
function getOsInfo(nav) {
    if (nav.userAgentData?.platform != null) {
        return nav.userAgentData.platform.toLowerCase();
    }
    const ua = nav.userAgent;
    const regexps = [
        { re: /windows/i, value: 'windows' },
        { re: /android/i, value: 'android' },
        { re: /linux/i, value: 'linux' },
        { re: /iphone|ipad|ipod/i, value: 'ios' },
        { re: /macintosh|mac os x/i, value: 'macos' }
    ];
    for (let { re, value } of regexps) {
        if (re.test(ua)) {
            return value;
        }
    }
    return null;
}


/***/ },

/***/ "./lib/src/worker/sync/BroadcastLogger.js"
/*!************************************************!*\
  !*** ./lib/src/worker/sync/BroadcastLogger.js ***!
  \************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BroadcastLogger: () => (/* binding */ BroadcastLogger)
/* harmony export */ });
/* harmony import */ var _powersync_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @powersync/common */ "@powersync/common");

/**
 * Broadcasts logs to all clients
 */
class BroadcastLogger {
    clients;
    TRACE;
    DEBUG;
    INFO;
    TIME;
    WARN;
    ERROR;
    OFF;
    currentLevel = _powersync_common__WEBPACK_IMPORTED_MODULE_0__.LogLevel.INFO;
    constructor(clients) {
        this.clients = clients;
        this.TRACE = _powersync_common__WEBPACK_IMPORTED_MODULE_0__.LogLevel.TRACE;
        this.DEBUG = _powersync_common__WEBPACK_IMPORTED_MODULE_0__.LogLevel.DEBUG;
        this.INFO = _powersync_common__WEBPACK_IMPORTED_MODULE_0__.LogLevel.INFO;
        this.TIME = _powersync_common__WEBPACK_IMPORTED_MODULE_0__.LogLevel.TIME;
        this.WARN = _powersync_common__WEBPACK_IMPORTED_MODULE_0__.LogLevel.WARN;
        this.ERROR = _powersync_common__WEBPACK_IMPORTED_MODULE_0__.LogLevel.ERROR;
        this.OFF = _powersync_common__WEBPACK_IMPORTED_MODULE_0__.LogLevel.OFF;
    }
    trace(...x) {
        if (!this.enabledFor(this.TRACE))
            return;
        console.trace(...x);
        const sanitized = this.sanitizeArgs(x);
        this.iterateClients((client) => client.clientProvider.trace(...sanitized));
    }
    debug(...x) {
        if (!this.enabledFor(this.DEBUG))
            return;
        console.debug(...x);
        const sanitized = this.sanitizeArgs(x);
        this.iterateClients((client) => client.clientProvider.debug(...sanitized));
    }
    info(...x) {
        if (!this.enabledFor(this.INFO))
            return;
        console.info(...x);
        const sanitized = this.sanitizeArgs(x);
        this.iterateClients((client) => client.clientProvider.info(...sanitized));
    }
    log(...x) {
        if (!this.enabledFor(this.INFO))
            return;
        console.log(...x);
        const sanitized = this.sanitizeArgs(x);
        this.iterateClients((client) => client.clientProvider.log(...sanitized));
    }
    warn(...x) {
        if (!this.enabledFor(this.WARN))
            return;
        console.warn(...x);
        const sanitized = this.sanitizeArgs(x);
        this.iterateClients((client) => client.clientProvider.warn(...sanitized));
    }
    error(...x) {
        if (!this.enabledFor(this.ERROR))
            return;
        console.error(...x);
        const sanitized = this.sanitizeArgs(x);
        this.iterateClients((client) => client.clientProvider.error(...sanitized));
    }
    time(label) {
        if (!this.enabledFor(this.TIME))
            return;
        console.time(label);
        this.iterateClients((client) => client.clientProvider.time(label));
    }
    timeEnd(label) {
        if (!this.enabledFor(this.TIME))
            return;
        console.timeEnd(label);
        this.iterateClients((client) => client.clientProvider.timeEnd(label));
    }
    /**
     * Set the global log level.
     */
    setLevel(level) {
        this.currentLevel = level;
    }
    /**
     * Get the current log level.
     */
    getLevel() {
        return this.currentLevel;
    }
    /**
     * Returns true if the given level is enabled.
     */
    enabledFor(level) {
        return level.value >= this.currentLevel.value;
    }
    /**
     * Iterates all clients, catches individual client exceptions
     * and proceeds to execute for all clients.
     */
    async iterateClients(callback) {
        for (const client of this.clients) {
            try {
                await callback(client);
            }
            catch (ex) {
                console.error('Caught exception when iterating client', ex);
            }
        }
    }
    /**
     * Guards against any logging errors.
     * We don't want a logging exception to cause further issues upstream
     */
    sanitizeArgs(x) {
        const sanitizedParams = x.map((param) => {
            try {
                // Try and clone here first. If it fails it won't be passable over a MessagePort
                return structuredClone(param);
            }
            catch (ex) {
                console.error(ex);
                return 'Could not serialize log params. Check shared worker logs for more details.';
            }
        });
        return sanitizedParams;
    }
}


/***/ },

/***/ "./lib/src/worker/sync/SharedSyncImplementation.js"
/*!*********************************************************!*\
  !*** ./lib/src/worker/sync/SharedSyncImplementation.js ***!
  \*********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedSyncClientEvent: () => (/* binding */ SharedSyncClientEvent),
/* harmony export */   SharedSyncImplementation: () => (/* binding */ SharedSyncImplementation)
/* harmony export */ });
/* harmony import */ var _powersync_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @powersync/common */ "@powersync/common");
/* harmony import */ var async_mutex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! async-mutex */ "async-mutex");
/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! comlink */ "comlink");
/* harmony import */ var _db_sync_WebRemote_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../db/sync/WebRemote.js */ "./lib/src/db/sync/WebRemote.js");
/* harmony import */ var _db_sync_WebStreamingSyncImplementation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../db/sync/WebStreamingSyncImplementation.js */ "./lib/src/db/sync/WebStreamingSyncImplementation.js");
/* harmony import */ var _db_adapters_LockedAsyncDatabaseAdapter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../db/adapters/LockedAsyncDatabaseAdapter.js */ "./lib/src/db/adapters/LockedAsyncDatabaseAdapter.js");
/* harmony import */ var _db_adapters_WorkerWrappedAsyncDatabaseConnection_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../db/adapters/WorkerWrappedAsyncDatabaseConnection.js */ "./lib/src/db/adapters/WorkerWrappedAsyncDatabaseConnection.js");
/* harmony import */ var _BroadcastLogger_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BroadcastLogger.js */ "./lib/src/worker/sync/BroadcastLogger.js");








/**
 * @internal
 * Manual message events for shared sync clients
 */
var SharedSyncClientEvent;
(function (SharedSyncClientEvent) {
    /**
     * This client requests the shared sync manager should
     * close it's connection to the client.
     */
    SharedSyncClientEvent["CLOSE_CLIENT"] = "close-client";
    SharedSyncClientEvent["CLOSE_ACK"] = "close-ack";
})(SharedSyncClientEvent || (SharedSyncClientEvent = {}));
/**
 * HACK: The shared implementation wraps and provides its own
 * PowerSyncBackendConnector when generating the streaming sync implementation.
 * We provide this unused placeholder when connecting with the ConnectionManager.
 */
const CONNECTOR_PLACEHOLDER = {};
/**
 * @internal
 * Shared sync implementation which runs inside a shared webworker
 */
class SharedSyncImplementation extends _powersync_common__WEBPACK_IMPORTED_MODULE_0__.BaseObserver {
    ports;
    isInitialized;
    statusListener;
    fetchCredentialsController;
    uploadDataController;
    syncParams;
    logger;
    lastConnectOptions;
    portMutex;
    subscriptions = [];
    connectionManager;
    syncStatus;
    broadCastLogger;
    distributedDB;
    constructor() {
        super();
        this.ports = [];
        this.syncParams = null;
        this.logger = (0,_powersync_common__WEBPACK_IMPORTED_MODULE_0__.createLogger)('shared-sync');
        this.lastConnectOptions = undefined;
        this.portMutex = new async_mutex__WEBPACK_IMPORTED_MODULE_1__.Mutex();
        this.isInitialized = new Promise((resolve) => {
            const callback = this.registerListener({
                initialized: () => {
                    resolve();
                    callback?.();
                }
            });
        });
        // Should be configured once we get params
        this.distributedDB = null;
        this.syncStatus = new _powersync_common__WEBPACK_IMPORTED_MODULE_0__.SyncStatus({});
        this.broadCastLogger = new _BroadcastLogger_js__WEBPACK_IMPORTED_MODULE_7__.BroadcastLogger(this.ports);
        this.connectionManager = new _powersync_common__WEBPACK_IMPORTED_MODULE_0__.ConnectionManager({
            createSyncImplementation: async () => {
                await this.waitForReady();
                const sync = this.generateStreamingImplementation();
                const onDispose = sync.registerListener({
                    statusChanged: (status) => {
                        this.updateAllStatuses(status.toJSON());
                    }
                });
                return {
                    sync,
                    onDispose
                };
            },
            logger: this.logger
        });
    }
    get lastSyncedAt() {
        return this.connectionManager.syncStreamImplementation?.lastSyncedAt;
    }
    get isConnected() {
        return this.connectionManager.syncStreamImplementation?.isConnected ?? false;
    }
    /**
     * Gets the last client port which we know is safe from unexpected closes.
     */
    async getLastWrappedPort() {
        // Find the last port which is not closing
        return await this.portMutex.runExclusive(() => {
            for (let i = this.ports.length - 1; i >= 0; i--) {
                if (!this.ports[i].isClosing) {
                    return this.ports[i];
                }
            }
            return;
        });
    }
    /**
     * In some very rare cases a specific tab might not respond to requests.
     * This returns a random port which is not closing.
     */
    async getRandomWrappedPort() {
        return await this.portMutex.runExclusive(() => {
            const nonClosingPorts = this.ports.filter((p) => !p.isClosing);
            return nonClosingPorts[Math.floor(Math.random() * nonClosingPorts.length)];
        });
    }
    async waitForStatus(status) {
        return this.withSyncImplementation(async (sync) => {
            return sync.waitForStatus(status);
        });
    }
    async waitUntilStatusMatches(predicate) {
        return this.withSyncImplementation(async (sync) => {
            return sync.waitUntilStatusMatches(predicate);
        });
    }
    async waitForReady() {
        return this.isInitialized;
    }
    collectActiveSubscriptions() {
        this.logger.debug('Collecting active stream subscriptions across tabs');
        const active = new Map();
        for (const port of this.ports) {
            for (const stream of port.currentSubscriptions) {
                const serializedKey = JSON.stringify(stream);
                active.set(serializedKey, stream);
            }
        }
        this.subscriptions = [...active.values()];
        this.logger.debug('Collected stream subscriptions', this.subscriptions);
        this.connectionManager.syncStreamImplementation?.updateSubscriptions(this.subscriptions);
    }
    updateSubscriptions(port, subscriptions) {
        port.currentSubscriptions = subscriptions;
        this.collectActiveSubscriptions();
    }
    setLogLevel(level) {
        this.logger.setLevel(level);
        this.broadCastLogger.setLevel(level);
    }
    /**
     * Configures the DBAdapter connection and a streaming sync client.
     */
    async setParams(params) {
        await this.portMutex.runExclusive(async () => {
            this.collectActiveSubscriptions();
        });
        if (this.syncParams) {
            // Cannot modify already existing sync implementation params
            return;
        }
        // First time setting params
        this.syncParams = params;
        if (params.streamOptions?.flags?.broadcastLogs) {
            this.logger = this.broadCastLogger;
        }
        const lockedAdapter = new _db_adapters_LockedAsyncDatabaseAdapter_js__WEBPACK_IMPORTED_MODULE_5__.LockedAsyncDatabaseAdapter({
            name: params.dbParams.dbFilename,
            openConnection: async () => {
                // Gets a connection from the clients when a new connection is requested.
                const db = await this.openInternalDB();
                db.registerListener({
                    closing: () => {
                        lockedAdapter.reOpenInternalDB();
                    }
                });
                return db;
            },
            logger: this.logger,
            reOpenOnConnectionClosed: true
        });
        this.distributedDB = lockedAdapter;
        await lockedAdapter.init();
        lockedAdapter.registerListener({
            databaseReOpened: () => {
                // We may have missed some table updates while the database was closed.
                // We can poke the crud in case we missed any updates.
                this.connectionManager.syncStreamImplementation?.triggerCrudUpload();
                /**
                 * FIXME or IMPROVE ME
                 * The Rust client implementation stores sync state on the connection level.
                 * Reopening the database causes a state machine error which should cause the
                 * StreamingSyncImplementation to reconnect. It would be nicer if we could trigger
                 * this reconnect earlier.
                 * This reconnect is not required for IndexedDB.
                 */
            }
        });
        self.onerror = (event) => {
            // Share any uncaught events on the broadcast logger
            this.logger.error('Uncaught exception in PowerSync shared sync worker', event);
        };
        this.iterateListeners((l) => l.initialized?.());
    }
    async dispose() {
        await this.waitForReady();
        this.statusListener?.();
        return this.connectionManager.close();
    }
    /**
     * Connects to the PowerSync backend instance.
     * Multiple tabs can safely call this in their initialization.
     * The connection will simply be reconnected whenever a new tab
     * connects.
     */
    async connect(options) {
        this.lastConnectOptions = options;
        return this.connectionManager.connect(CONNECTOR_PLACEHOLDER, options ?? {});
    }
    async disconnect() {
        return this.connectionManager.disconnect();
    }
    /**
     * Adds a new client tab's message port to the list of connected ports
     */
    async addPort(port) {
        return await this.portMutex.runExclusive(() => {
            const portProvider = {
                port,
                clientProvider: comlink__WEBPACK_IMPORTED_MODULE_2__.wrap(port),
                currentSubscriptions: [],
                closeListeners: [],
                isClosing: false
            };
            this.ports.push(portProvider);
            // Give the newly connected client the latest status
            const status = this.connectionManager.syncStreamImplementation?.syncStatus;
            if (status) {
                portProvider.clientProvider.statusChanged(status.toJSON());
            }
            return portProvider;
        });
    }
    /**
     * Removes a message port client from this manager's managed
     * clients.
     */
    async removePort(port) {
        // Ports might be removed faster than we can process them.
        port.isClosing = true;
        // Remove the port within a mutex context.
        // Warns if the port is not found. This should not happen in practice.
        // We return early if the port is not found.
        return await this.portMutex.runExclusive(async () => {
            const index = this.ports.findIndex((p) => p == port);
            if (index < 0) {
                this.logger.warn(`Could not remove port ${port} since it is not present in active ports.`);
                return () => { };
            }
            const trackedPort = this.ports[index];
            // Remove from the list of active ports
            this.ports.splice(index, 1);
            /**
             * The port might currently be in use. Any active functions might
             * not resolve. Abort them here.
             */
            [this.fetchCredentialsController, this.uploadDataController].forEach((abortController) => {
                if (abortController?.activePort == port) {
                    abortController.controller.abort(new _powersync_common__WEBPACK_IMPORTED_MODULE_0__.AbortOperation('Closing pending requests after client port is removed'));
                }
            });
            // Close the worker wrapped database connection, we can't accurately rely on this connection
            for (const closeListener of trackedPort.closeListeners) {
                await closeListener();
            }
            this.collectActiveSubscriptions();
            return () => trackedPort.clientProvider[comlink__WEBPACK_IMPORTED_MODULE_2__.releaseProxy]();
        });
    }
    triggerCrudUpload() {
        this.withSyncImplementation(async (sync) => {
            sync.triggerCrudUpload();
        });
    }
    async hasCompletedSync() {
        return this.withSyncImplementation(async (sync) => {
            return sync.hasCompletedSync();
        });
    }
    async getWriteCheckpoint() {
        return this.withSyncImplementation(async (sync) => {
            return sync.getWriteCheckpoint();
        });
    }
    async withSyncImplementation(callback) {
        await this.waitForReady();
        if (this.connectionManager.syncStreamImplementation) {
            return callback(this.connectionManager.syncStreamImplementation);
        }
        const sync = await new Promise((resolve) => {
            const dispose = this.connectionManager.registerListener({
                syncStreamCreated: (sync) => {
                    resolve(sync);
                    dispose?.();
                }
            });
        });
        return callback(sync);
    }
    generateStreamingImplementation() {
        // This should only be called after initialization has completed
        const syncParams = this.syncParams;
        // Create a new StreamingSyncImplementation for each connect call. This is usually done is all SDKs.
        return new _db_sync_WebStreamingSyncImplementation_js__WEBPACK_IMPORTED_MODULE_4__.WebStreamingSyncImplementation({
            adapter: new _powersync_common__WEBPACK_IMPORTED_MODULE_0__.SqliteBucketStorage(this.distributedDB, this.logger),
            remote: new _db_sync_WebRemote_js__WEBPACK_IMPORTED_MODULE_3__.WebRemote({
                invalidateCredentials: async () => {
                    const lastPort = await this.getLastWrappedPort();
                    if (!lastPort) {
                        throw new Error('No client port found to invalidate credentials');
                    }
                    try {
                        this.logger.log('calling the last port client provider to invalidate credentials');
                        lastPort.clientProvider.invalidateCredentials();
                    }
                    catch (ex) {
                        this.logger.error('error invalidating credentials', ex);
                    }
                },
                fetchCredentials: async () => {
                    const lastPort = await this.getLastWrappedPort();
                    if (!lastPort) {
                        throw new Error('No client port found to fetch credentials');
                    }
                    return new Promise(async (resolve, reject) => {
                        const abortController = new AbortController();
                        this.fetchCredentialsController = {
                            controller: abortController,
                            activePort: lastPort
                        };
                        abortController.signal.onabort = reject;
                        try {
                            this.logger.log('calling the last port client provider for credentials');
                            resolve(await lastPort.clientProvider.fetchCredentials());
                        }
                        catch (ex) {
                            reject(ex);
                        }
                        finally {
                            this.fetchCredentialsController = undefined;
                        }
                    });
                }
            }, this.logger),
            uploadCrud: async () => {
                const lastPort = await this.getLastWrappedPort();
                if (!lastPort) {
                    throw new Error('No client port found to upload crud');
                }
                return new Promise(async (resolve, reject) => {
                    const abortController = new AbortController();
                    this.uploadDataController = {
                        controller: abortController,
                        activePort: lastPort
                    };
                    // Resolving will make it retry
                    abortController.signal.onabort = () => resolve();
                    try {
                        resolve(await lastPort.clientProvider.uploadCrud());
                    }
                    catch (ex) {
                        reject(ex);
                    }
                    finally {
                        this.uploadDataController = undefined;
                    }
                });
            },
            ...syncParams.streamOptions,
            subscriptions: this.subscriptions,
            // Logger cannot be transferred just yet
            logger: this.logger
        });
    }
    /**
     * Opens a worker wrapped database connection. Using the last connected client port.
     */
    async openInternalDB() {
        const client = await this.getRandomWrappedPort();
        if (!client) {
            // Should not really happen in practice
            throw new Error(`Could not open DB connection since no client is connected.`);
        }
        // Fail-safe timeout for opening a database connection.
        const timeout = setTimeout(() => {
            abortController.abort();
        }, 10_000);
        /**
         * Handle cases where the client might close while opening a connection.
         */
        const abortController = new AbortController();
        const closeListener = () => {
            abortController.abort();
        };
        const removeCloseListener = () => {
            const index = client.closeListeners.indexOf(closeListener);
            if (index >= 0) {
                client.closeListeners.splice(index, 1);
            }
        };
        client.closeListeners.push(closeListener);
        const workerPort = await withAbort({
            action: () => client.clientProvider.getDBWorkerPort(),
            signal: abortController.signal,
            cleanupOnAbort: (port) => {
                port.close();
            }
        }).catch((ex) => {
            removeCloseListener();
            throw ex;
        });
        const remote = comlink__WEBPACK_IMPORTED_MODULE_2__.wrap(workerPort);
        const identifier = this.syncParams.dbParams.dbFilename;
        /**
         * The open could fail if the tab is closed while we're busy opening the database.
         * This operation is typically executed inside an exclusive portMutex lock.
         * We typically execute the closeListeners using the portMutex in a different context.
         * We can't rely on the closeListeners to abort the operation if the tab is closed.
         */
        const db = await withAbort({
            action: () => remote(this.syncParams.dbParams),
            signal: abortController.signal,
            cleanupOnAbort: (db) => {
                db.close();
            }
        }).finally(() => {
            // We can remove the close listener here since we no longer need it past this point.
            removeCloseListener();
        });
        clearTimeout(timeout);
        const wrapped = new _db_adapters_WorkerWrappedAsyncDatabaseConnection_js__WEBPACK_IMPORTED_MODULE_6__.WorkerWrappedAsyncDatabaseConnection({
            remote,
            baseConnection: db,
            identifier,
            // It's possible for this worker to outlive the client hosting the database for us. We need to be prepared for
            // that and ensure pending requests are aborted when the tab is closed.
            remoteCanCloseUnexpectedly: true
        });
        client.closeListeners.push(async () => {
            this.logger.info('Aborting open connection because associated tab closed.');
            /**
             * Don't await this close operation. It might never resolve if the tab is closed.
             * We mark the remote as closed first, this will reject any pending requests.
             * We then call close. The close operation is configured to fire-and-forget, the main promise will reject immediately.
             */
            wrapped.markRemoteClosed();
            wrapped.close().catch((ex) => this.logger.warn('error closing database connection', ex));
        });
        return wrapped;
    }
    /**
     * A method to update the all shared statuses for each
     * client.
     */
    updateAllStatuses(status) {
        this.syncStatus = new _powersync_common__WEBPACK_IMPORTED_MODULE_0__.SyncStatus(status);
        this.ports.forEach((p) => p.clientProvider.statusChanged(status));
    }
}
/**
 * Runs the action with an abort controller.
 */
function withAbort(options) {
    const { action, signal, cleanupOnAbort } = options;
    return new Promise((resolve, reject) => {
        if (signal.aborted) {
            reject(new _powersync_common__WEBPACK_IMPORTED_MODULE_0__.AbortOperation('Operation aborted by abort controller'));
            return;
        }
        function handleAbort() {
            signal.removeEventListener('abort', handleAbort);
            reject(new _powersync_common__WEBPACK_IMPORTED_MODULE_0__.AbortOperation('Operation aborted by abort controller'));
        }
        signal.addEventListener('abort', handleAbort, { once: true });
        function completePromise(action) {
            signal.removeEventListener('abort', handleAbort);
            action();
        }
        action()
            .then((data) => {
            // We already rejected due to the abort, allow for cleanup
            if (signal.aborted) {
                return completePromise(() => cleanupOnAbort?.(data));
            }
            completePromise(() => resolve(data));
        })
            .catch((e) => completePromise(() => reject(e)));
    });
}


/***/ },

/***/ "./lib/src/worker/sync/SharedSyncImplementation.worker.js"
/*!****************************************************************!*\
  !*** ./lib/src/worker/sync/SharedSyncImplementation.worker.js ***!
  \****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _powersync_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @powersync/common */ "@powersync/common");
/* harmony import */ var _SharedSyncImplementation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharedSyncImplementation.js */ "./lib/src/worker/sync/SharedSyncImplementation.js");
/* harmony import */ var _WorkerClient_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WorkerClient.js */ "./lib/src/worker/sync/WorkerClient.js");



const _self = self;
const logger = (0,_powersync_common__WEBPACK_IMPORTED_MODULE_0__.createBaseLogger)();
logger.useDefaults();
const sharedSyncImplementation = new _SharedSyncImplementation_js__WEBPACK_IMPORTED_MODULE_1__.SharedSyncImplementation();
_self.onconnect = async function (event) {
    const port = event.ports[0];
    new _WorkerClient_js__WEBPACK_IMPORTED_MODULE_2__.WorkerClient(sharedSyncImplementation, port);
};


/***/ },

/***/ "./lib/src/worker/sync/WorkerClient.js"
/*!*********************************************!*\
  !*** ./lib/src/worker/sync/WorkerClient.js ***!
  \*********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkerClient: () => (/* binding */ WorkerClient)
/* harmony export */ });
/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! comlink */ "comlink");
/* harmony import */ var _shared_navigator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/navigator.js */ "./lib/src/shared/navigator.js");
/* harmony import */ var _SharedSyncImplementation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SharedSyncImplementation.js */ "./lib/src/worker/sync/SharedSyncImplementation.js");



/**
 * A client to the shared sync worker.
 *
 * The shared sync implementation needs a per-client view of subscriptions so that subscriptions of closed tabs can
 * automatically be evicted later.
 */
class WorkerClient {
    sync;
    port;
    resolvedPort = null;
    resolvedPortPromise = null;
    constructor(sync, port) {
        this.sync = sync;
        this.port = port;
        comlink__WEBPACK_IMPORTED_MODULE_0__.expose(this, this.port);
        /**
         * Adds an extra listener which can remove this port
         * from the list of monitored ports.
         */
        this.port.addEventListener('message', async (event) => {
            const payload = event.data;
            if (payload?.event == _SharedSyncImplementation_js__WEBPACK_IMPORTED_MODULE_2__.SharedSyncClientEvent.CLOSE_CLIENT) {
                await this.removePort();
            }
        });
    }
    async removePort() {
        if (this.resolvedPort) {
            const resolved = this.resolvedPort;
            this.resolvedPort = null;
            const release = await this.sync.removePort(resolved);
            this.resolvedPort = null;
            this.port.postMessage({
                event: _SharedSyncImplementation_js__WEBPACK_IMPORTED_MODULE_2__.SharedSyncClientEvent.CLOSE_ACK,
                data: {}
            });
            release?.();
        }
    }
    /**
     * Called by a client after obtaining a lock with a random name.
     *
     * When the client tab is closed, its lock will be returned. So when the shared worker attempts to acquire the lock,
     * it can consider the connection to be closed.
     */
    async addLockBasedCloseSignal(name) {
        // Only add the port once the lock has been obtained on the client.
        this.resolvedPort = await this.sync.addPort(this.port);
        // Don't await this lock request
        (0,_shared_navigator_js__WEBPACK_IMPORTED_MODULE_1__.getNavigatorLocks)().request(name, async () => {
            await this.removePort();
        });
    }
    setLogLevel(level) {
        this.sync.setLogLevel(level);
    }
    triggerCrudUpload() {
        return this.sync.triggerCrudUpload();
    }
    setParams(params, subscriptions) {
        this.resolvedPort.currentSubscriptions = subscriptions;
        return this.sync.setParams(params);
    }
    getWriteCheckpoint() {
        return this.sync.getWriteCheckpoint();
    }
    hasCompletedSync() {
        return this.sync.hasCompletedSync();
    }
    connect(options) {
        return this.sync.connect(options);
    }
    updateSubscriptions(subscriptions) {
        if (this.resolvedPort) {
            this.sync.updateSubscriptions(this.resolvedPort, subscriptions);
        }
    }
    disconnect() {
        return this.sync.disconnect();
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
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["main"], () => (__webpack_require__("./lib/src/worker/sync/SharedSyncImplementation.worker.js")))
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
/******/ 			"_journeyapps_wa-sqlite-_journeyapps_wa-sqlite_src_examples_AccessHandlePoolVFS_js-_journeyapp-89f0ba": 1
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
//# sourceMappingURL=_journeyapps_wa-sqlite-_journeyapps_wa-sqlite_src_examples_AccessHandlePoolVFS_js-_journeyapp-89f0ba.index.umd.js.map
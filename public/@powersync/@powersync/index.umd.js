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

/***/ "../../node_modules/.pnpm/@journeyapps+wa-sqlite@1.5.0/node_modules/@journeyapps/wa-sqlite/dist/mc-wa-sqlite-async.wasm"
/*!******************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@journeyapps+wa-sqlite@1.5.0/node_modules/@journeyapps/wa-sqlite/dist/mc-wa-sqlite-async.wasm ***!
  \******************************************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b4c6283dc473b6b3fd24.wasm";

/***/ },

/***/ "../../node_modules/.pnpm/@journeyapps+wa-sqlite@1.5.0/node_modules/@journeyapps/wa-sqlite/dist/mc-wa-sqlite.wasm"
/*!************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@journeyapps+wa-sqlite@1.5.0/node_modules/@journeyapps/wa-sqlite/dist/mc-wa-sqlite.wasm ***!
  \************************************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "26d61ca9f5694d064635.wasm";

/***/ },

/***/ "../../node_modules/.pnpm/@journeyapps+wa-sqlite@1.5.0/node_modules/@journeyapps/wa-sqlite/dist/wa-sqlite-async.wasm"
/*!***************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@journeyapps+wa-sqlite@1.5.0/node_modules/@journeyapps/wa-sqlite/dist/wa-sqlite-async.wasm ***!
  \***************************************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ca59e199e1138b553fad.wasm";

/***/ },

/***/ "../../node_modules/.pnpm/@journeyapps+wa-sqlite@1.5.0/node_modules/@journeyapps/wa-sqlite/dist/wa-sqlite.wasm"
/*!*********************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@journeyapps+wa-sqlite@1.5.0/node_modules/@journeyapps/wa-sqlite/dist/wa-sqlite.wasm ***!
  \*********************************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c78985091a0b22aaef03.wasm";

/***/ },

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

/***/ "../../node_modules/.pnpm/@journeyapps+wa-sqlite@1.5.0/node_modules/@journeyapps/wa-sqlite/dist/mc-wa-sqlite-async.mjs"
/*!*****************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@journeyapps+wa-sqlite@1.5.0/node_modules/@journeyapps/wa-sqlite/dist/mc-wa-sqlite-async.mjs ***!
  \*****************************************************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function Module(moduleArg={}){var moduleRtn;var Module=moduleArg;var ENVIRONMENT_IS_WEB=!!globalThis.window;var ENVIRONMENT_IS_WORKER=!!globalThis.WorkerGlobalScope;var ENVIRONMENT_IS_NODE=globalThis.process?.versions?.node&&globalThis.process?.type!="renderer";var arguments_=[];var thisProgram="./this.program";var quit_=(status,toThrow)=>{throw toThrow};var _scriptName="file:///home/runner/work/powersync-js/powersync-js/node_modules/.pnpm/@journeyapps+wa-sqlite@1.5.0/node_modules/@journeyapps/wa-sqlite/dist/mc-wa-sqlite-async.mjs";var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var readAsync,readBinary;if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){try{scriptDirectory=new URL(".",_scriptName).href}catch{}{if(ENVIRONMENT_IS_WORKER){readBinary=url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)}}readAsync=async url=>{var response=await fetch(url,{credentials:"same-origin"});if(response.ok){return response.arrayBuffer()}throw new Error(response.status+" : "+response.url)}}}else{}var out=console.log.bind(console);var err=console.error.bind(console);var wasmBinary;var ABORT=false;var EXITSTATUS;var readyPromiseResolve,readyPromiseReject;var HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;var runtimeInitialized=false;function updateMemoryViews(){var b=wasmMemory.buffer;HEAP8=new Int8Array(b);HEAP16=new Int16Array(b);Module["HEAPU8"]=HEAPU8=new Uint8Array(b);HEAPU16=new Uint16Array(b);Module["HEAP32"]=HEAP32=new Int32Array(b);HEAPU32=new Uint32Array(b);HEAPF32=new Float32Array(b);HEAPF64=new Float64Array(b)}function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(onPreRuns)}function initRuntime(){runtimeInitialized=true;if(!Module["noFSInit"]&&!FS.initialized)FS.init();TTY.init();wasmExports["ra"]();FS.ignorePermissions=false}function preMain(){}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(onPostRuns)}function abort(what){Module["onAbort"]?.(what);what="Aborted("+what+")";err(what);ABORT=true;what+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(what);readyPromiseReject?.(e);throw e}var wasmBinaryFile;function findWasmBinary(){if(Module["locateFile"]){return locateFile("mc-wa-sqlite-async.wasm")}return new URL(/* asset import */ __webpack_require__(/*! mc-wa-sqlite-async.wasm */ "../../node_modules/.pnpm/@journeyapps+wa-sqlite@1.5.0/node_modules/@journeyapps/wa-sqlite/dist/mc-wa-sqlite-async.wasm"), __webpack_require__.b).href}function getBinarySync(file){if(file==wasmBinaryFile&&wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(file)}throw"both async and sync fetching of the wasm failed"}async function getWasmBinary(binaryFile){if(!wasmBinary){try{var response=await readAsync(binaryFile);return new Uint8Array(response)}catch{}}return getBinarySync(binaryFile)}async function instantiateArrayBuffer(binaryFile,imports){try{var binary=await getWasmBinary(binaryFile);var instance=await WebAssembly.instantiate(binary,imports);return instance}catch(reason){err(`failed to asynchronously prepare wasm: ${reason}`);abort(reason)}}async function instantiateAsync(binary,binaryFile,imports){if(!binary){try{var response=fetch(binaryFile,{credentials:"same-origin"});var instantiationResult=await WebAssembly.instantiateStreaming(response,imports);return instantiationResult}catch(reason){err(`wasm streaming compile failed: ${reason}`);err("falling back to ArrayBuffer instantiation")}}return instantiateArrayBuffer(binaryFile,imports)}function getWasmImports(){var imports={a:wasmImports};return imports}async function createWasm(){function receiveInstance(instance,module){wasmExports=instance.exports;wasmExports=Asyncify.instrumentWasmExports(wasmExports);assignWasmExports(wasmExports);updateMemoryViews();return wasmExports}function receiveInstantiationResult(result){return receiveInstance(result["instance"])}var info=getWasmImports();if(Module["instantiateWasm"]){return new Promise((resolve,reject)=>{Module["instantiateWasm"](info,(inst,mod)=>{resolve(receiveInstance(inst,mod))})})}wasmBinaryFile??=findWasmBinary();var result=await instantiateAsync(wasmBinary,wasmBinaryFile,info);var exports=receiveInstantiationResult(result);return exports}var tempDouble;var tempI64;class ExitStatus{name="ExitStatus";constructor(status){this.message=`Program terminated with exit(${status})`;this.status=status}}var callRuntimeCallbacks=callbacks=>{while(callbacks.length>0){callbacks.shift()(Module)}};var onPostRuns=[];var addOnPostRun=cb=>onPostRuns.push(cb);var onPreRuns=[];var addOnPreRun=cb=>onPreRuns.push(cb);var dynCalls={};function getValue(ptr,type="i8"){if(type.endsWith("*"))type="*";switch(type){case"i1":return HEAP8[ptr];case"i8":return HEAP8[ptr];case"i16":return HEAP16[ptr>>1];case"i32":return HEAP32[ptr>>2];case"i64":abort("to do getValue(i64) use WASM_BIGINT");case"float":return HEAPF32[ptr>>2];case"double":return HEAPF64[ptr>>3];case"*":return HEAPU32[ptr>>2];default:abort(`invalid type for getValue: ${type}`)}}var noExitRuntime=true;function setValue(ptr,value,type="i8"){if(type.endsWith("*"))type="*";switch(type){case"i1":HEAP8[ptr]=value;break;case"i8":HEAP8[ptr]=value;break;case"i16":HEAP16[ptr>>1]=value;break;case"i32":HEAP32[ptr>>2]=value;break;case"i64":abort("to do setValue(i64) use WASM_BIGINT");case"float":HEAPF32[ptr>>2]=value;break;case"double":HEAPF64[ptr>>3]=value;break;case"*":HEAPU32[ptr>>2]=value;break;default:abort(`invalid type for setValue: ${type}`)}}var stackRestore=val=>__emscripten_stack_restore(val);var stackSave=()=>_emscripten_stack_get_current();var UTF8Decoder=new TextDecoder;var findStringEnd=(heapOrArray,idx,maxBytesToRead,ignoreNul)=>{var maxIdx=idx+maxBytesToRead;if(ignoreNul)return maxIdx;while(heapOrArray[idx]&&!(idx>=maxIdx))++idx;return idx};var UTF8ToString=(ptr,maxBytesToRead,ignoreNul)=>{if(!ptr)return"";var end=findStringEnd(HEAPU8,ptr,maxBytesToRead,ignoreNul);return UTF8Decoder.decode(HEAPU8.subarray(ptr,end))};var ___assert_fail=(condition,filename,line,func)=>abort(`Assertion failed: ${UTF8ToString(condition)}, at: `+[filename?UTF8ToString(filename):"unknown filename",line,func?UTF8ToString(func):"unknown function"]);var PATH={isAbs:path=>path.charAt(0)==="/",splitPath:filename=>{var splitPathRe=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return splitPathRe.exec(filename).slice(1)},normalizeArray:(parts,allowAboveRoot)=>{var up=0;for(var i=parts.length-1;i>=0;i--){var last=parts[i];if(last==="."){parts.splice(i,1)}else if(last===".."){parts.splice(i,1);up++}else if(up){parts.splice(i,1);up--}}if(allowAboveRoot){for(;up;up--){parts.unshift("..")}}return parts},normalize:path=>{var isAbsolute=PATH.isAbs(path),trailingSlash=path.slice(-1)==="/";path=PATH.normalizeArray(path.split("/").filter(p=>!!p),!isAbsolute).join("/");if(!path&&!isAbsolute){path="."}if(path&&trailingSlash){path+="/"}return(isAbsolute?"/":"")+path},dirname:path=>{var result=PATH.splitPath(path),root=result[0],dir=result[1];if(!root&&!dir){return"."}if(dir){dir=dir.slice(0,-1)}return root+dir},basename:path=>path&&path.match(/([^\/]+|\/)\/*$/)[1],join:(...paths)=>PATH.normalize(paths.join("/")),join2:(l,r)=>PATH.normalize(l+"/"+r)};var initRandomFill=()=>view=>crypto.getRandomValues(view);var randomFill=view=>{(randomFill=initRandomFill())(view)};var PATH_FS={resolve:(...args)=>{var resolvedPath="",resolvedAbsolute=false;for(var i=args.length-1;i>=-1&&!resolvedAbsolute;i--){var path=i>=0?args[i]:FS.cwd();if(typeof path!="string"){throw new TypeError("Arguments to path.resolve must be strings")}else if(!path){return""}resolvedPath=path+"/"+resolvedPath;resolvedAbsolute=PATH.isAbs(path)}resolvedPath=PATH.normalizeArray(resolvedPath.split("/").filter(p=>!!p),!resolvedAbsolute).join("/");return(resolvedAbsolute?"/":"")+resolvedPath||"."},relative:(from,to)=>{from=PATH_FS.resolve(from).slice(1);to=PATH_FS.resolve(to).slice(1);function trim(arr){var start=0;for(;start<arr.length;start++){if(arr[start]!=="")break}var end=arr.length-1;for(;end>=0;end--){if(arr[end]!=="")break}if(start>end)return[];return arr.slice(start,end-start+1)}var fromParts=trim(from.split("/"));var toParts=trim(to.split("/"));var length=Math.min(fromParts.length,toParts.length);var samePartsLength=length;for(var i=0;i<length;i++){if(fromParts[i]!==toParts[i]){samePartsLength=i;break}}var outputParts=[];for(var i=samePartsLength;i<fromParts.length;i++){outputParts.push("..")}outputParts=outputParts.concat(toParts.slice(samePartsLength));return outputParts.join("/")}};var UTF8ArrayToString=(heapOrArray,idx=0,maxBytesToRead,ignoreNul)=>{var endPtr=findStringEnd(heapOrArray,idx,maxBytesToRead,ignoreNul);return UTF8Decoder.decode(heapOrArray.buffer?heapOrArray.subarray(idx,endPtr):new Uint8Array(heapOrArray.slice(idx,endPtr)))};var FS_stdin_getChar_buffer=[];var lengthBytesUTF8=str=>{var len=0;for(var i=0;i<str.length;++i){var c=str.charCodeAt(i);if(c<=127){len++}else if(c<=2047){len+=2}else if(c>=55296&&c<=57343){len+=4;++i}else{len+=3}}return len};var stringToUTF8Array=(str,heap,outIdx,maxBytesToWrite)=>{if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.codePointAt(i);if(u<=127){if(outIdx>=endIdx)break;heap[outIdx++]=u}else if(u<=2047){if(outIdx+1>=endIdx)break;heap[outIdx++]=192|u>>6;heap[outIdx++]=128|u&63}else if(u<=65535){if(outIdx+2>=endIdx)break;heap[outIdx++]=224|u>>12;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}else{if(outIdx+3>=endIdx)break;heap[outIdx++]=240|u>>18;heap[outIdx++]=128|u>>12&63;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63;i++}}heap[outIdx]=0;return outIdx-startIdx};var intArrayFromString=(stringy,dontAddNull,length)=>{var len=length>0?length:lengthBytesUTF8(stringy)+1;var u8array=new Array(len);var numBytesWritten=stringToUTF8Array(stringy,u8array,0,u8array.length);if(dontAddNull)u8array.length=numBytesWritten;return u8array};var FS_stdin_getChar=()=>{if(!FS_stdin_getChar_buffer.length){var result=null;if(globalThis.window?.prompt){result=window.prompt("Input: ");if(result!==null){result+="\n"}}else{}if(!result){return null}FS_stdin_getChar_buffer=intArrayFromString(result,true)}return FS_stdin_getChar_buffer.shift()};var TTY={ttys:[],init(){},shutdown(){},register(dev,ops){TTY.ttys[dev]={input:[],output:[],ops};FS.registerDevice(dev,TTY.stream_ops)},stream_ops:{open(stream){var tty=TTY.ttys[stream.node.rdev];if(!tty){throw new FS.ErrnoError(43)}stream.tty=tty;stream.seekable=false},close(stream){stream.tty.ops.fsync(stream.tty)},fsync(stream){stream.tty.ops.fsync(stream.tty)},read(stream,buffer,offset,length,pos){if(!stream.tty||!stream.tty.ops.get_char){throw new FS.ErrnoError(60)}var bytesRead=0;for(var i=0;i<length;i++){var result;try{result=stream.tty.ops.get_char(stream.tty)}catch(e){throw new FS.ErrnoError(29)}if(result===undefined&&bytesRead===0){throw new FS.ErrnoError(6)}if(result===null||result===undefined)break;bytesRead++;buffer[offset+i]=result}if(bytesRead){stream.node.atime=Date.now()}return bytesRead},write(stream,buffer,offset,length,pos){if(!stream.tty||!stream.tty.ops.put_char){throw new FS.ErrnoError(60)}try{for(var i=0;i<length;i++){stream.tty.ops.put_char(stream.tty,buffer[offset+i])}}catch(e){throw new FS.ErrnoError(29)}if(length){stream.node.mtime=stream.node.ctime=Date.now()}return i}},default_tty_ops:{get_char(tty){return FS_stdin_getChar()},put_char(tty,val){if(val===null||val===10){out(UTF8ArrayToString(tty.output));tty.output=[]}else{if(val!=0)tty.output.push(val)}},fsync(tty){if(tty.output?.length>0){out(UTF8ArrayToString(tty.output));tty.output=[]}},ioctl_tcgets(tty){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(tty,optional_actions,data){return 0},ioctl_tiocgwinsz(tty){return[24,80]}},default_tty1_ops:{put_char(tty,val){if(val===null||val===10){err(UTF8ArrayToString(tty.output));tty.output=[]}else{if(val!=0)tty.output.push(val)}},fsync(tty){if(tty.output?.length>0){err(UTF8ArrayToString(tty.output));tty.output=[]}}}};var zeroMemory=(ptr,size)=>HEAPU8.fill(0,ptr,ptr+size);var alignMemory=(size,alignment)=>Math.ceil(size/alignment)*alignment;var mmapAlloc=size=>{size=alignMemory(size,65536);var ptr=_emscripten_builtin_memalign(65536,size);if(ptr)zeroMemory(ptr,size);return ptr};var MEMFS={ops_table:null,mount(mount){return MEMFS.createNode(null,"/",16895,0)},createNode(parent,name,mode,dev){if(FS.isBlkdev(mode)||FS.isFIFO(mode)){throw new FS.ErrnoError(63)}MEMFS.ops_table||={dir:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr,lookup:MEMFS.node_ops.lookup,mknod:MEMFS.node_ops.mknod,rename:MEMFS.node_ops.rename,unlink:MEMFS.node_ops.unlink,rmdir:MEMFS.node_ops.rmdir,readdir:MEMFS.node_ops.readdir,symlink:MEMFS.node_ops.symlink},stream:{llseek:MEMFS.stream_ops.llseek}},file:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr},stream:{llseek:MEMFS.stream_ops.llseek,read:MEMFS.stream_ops.read,write:MEMFS.stream_ops.write,mmap:MEMFS.stream_ops.mmap,msync:MEMFS.stream_ops.msync}},link:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr,readlink:MEMFS.node_ops.readlink},stream:{}},chrdev:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr},stream:FS.chrdev_stream_ops}};var node=FS.createNode(parent,name,mode,dev);if(FS.isDir(node.mode)){node.node_ops=MEMFS.ops_table.dir.node;node.stream_ops=MEMFS.ops_table.dir.stream;node.contents={}}else if(FS.isFile(node.mode)){node.node_ops=MEMFS.ops_table.file.node;node.stream_ops=MEMFS.ops_table.file.stream;node.usedBytes=0;node.contents=null}else if(FS.isLink(node.mode)){node.node_ops=MEMFS.ops_table.link.node;node.stream_ops=MEMFS.ops_table.link.stream}else if(FS.isChrdev(node.mode)){node.node_ops=MEMFS.ops_table.chrdev.node;node.stream_ops=MEMFS.ops_table.chrdev.stream}node.atime=node.mtime=node.ctime=Date.now();if(parent){parent.contents[name]=node;parent.atime=parent.mtime=parent.ctime=node.atime}return node},getFileDataAsTypedArray(node){if(!node.contents)return new Uint8Array(0);if(node.contents.subarray)return node.contents.subarray(0,node.usedBytes);return new Uint8Array(node.contents)},expandFileStorage(node,newCapacity){var prevCapacity=node.contents?node.contents.length:0;if(prevCapacity>=newCapacity)return;var CAPACITY_DOUBLING_MAX=1024*1024;newCapacity=Math.max(newCapacity,prevCapacity*(prevCapacity<CAPACITY_DOUBLING_MAX?2:1.125)>>>0);if(prevCapacity!=0)newCapacity=Math.max(newCapacity,256);var oldContents=node.contents;node.contents=new Uint8Array(newCapacity);if(node.usedBytes>0)node.contents.set(oldContents.subarray(0,node.usedBytes),0)},resizeFileStorage(node,newSize){if(node.usedBytes==newSize)return;if(newSize==0){node.contents=null;node.usedBytes=0}else{var oldContents=node.contents;node.contents=new Uint8Array(newSize);if(oldContents){node.contents.set(oldContents.subarray(0,Math.min(newSize,node.usedBytes)))}node.usedBytes=newSize}},node_ops:{getattr(node){var attr={};attr.dev=FS.isChrdev(node.mode)?node.id:1;attr.ino=node.id;attr.mode=node.mode;attr.nlink=1;attr.uid=0;attr.gid=0;attr.rdev=node.rdev;if(FS.isDir(node.mode)){attr.size=4096}else if(FS.isFile(node.mode)){attr.size=node.usedBytes}else if(FS.isLink(node.mode)){attr.size=node.link.length}else{attr.size=0}attr.atime=new Date(node.atime);attr.mtime=new Date(node.mtime);attr.ctime=new Date(node.ctime);attr.blksize=4096;attr.blocks=Math.ceil(attr.size/attr.blksize);return attr},setattr(node,attr){for(const key of["mode","atime","mtime","ctime"]){if(attr[key]!=null){node[key]=attr[key]}}if(attr.size!==undefined){MEMFS.resizeFileStorage(node,attr.size)}},lookup(parent,name){if(!MEMFS.doesNotExistError){MEMFS.doesNotExistError=new FS.ErrnoError(44);MEMFS.doesNotExistError.stack="<generic error, no stack>"}throw MEMFS.doesNotExistError},mknod(parent,name,mode,dev){return MEMFS.createNode(parent,name,mode,dev)},rename(old_node,new_dir,new_name){var new_node;try{new_node=FS.lookupNode(new_dir,new_name)}catch(e){}if(new_node){if(FS.isDir(old_node.mode)){for(var i in new_node.contents){throw new FS.ErrnoError(55)}}FS.hashRemoveNode(new_node)}delete old_node.parent.contents[old_node.name];new_dir.contents[new_name]=old_node;old_node.name=new_name;new_dir.ctime=new_dir.mtime=old_node.parent.ctime=old_node.parent.mtime=Date.now()},unlink(parent,name){delete parent.contents[name];parent.ctime=parent.mtime=Date.now()},rmdir(parent,name){var node=FS.lookupNode(parent,name);for(var i in node.contents){throw new FS.ErrnoError(55)}delete parent.contents[name];parent.ctime=parent.mtime=Date.now()},readdir(node){return[".","..",...Object.keys(node.contents)]},symlink(parent,newname,oldpath){var node=MEMFS.createNode(parent,newname,511|40960,0);node.link=oldpath;return node},readlink(node){if(!FS.isLink(node.mode)){throw new FS.ErrnoError(28)}return node.link}},stream_ops:{read(stream,buffer,offset,length,position){var contents=stream.node.contents;if(position>=stream.node.usedBytes)return 0;var size=Math.min(stream.node.usedBytes-position,length);if(size>8&&contents.subarray){buffer.set(contents.subarray(position,position+size),offset)}else{for(var i=0;i<size;i++)buffer[offset+i]=contents[position+i]}return size},write(stream,buffer,offset,length,position,canOwn){if(buffer.buffer===HEAP8.buffer){canOwn=false}if(!length)return 0;var node=stream.node;node.mtime=node.ctime=Date.now();if(buffer.subarray&&(!node.contents||node.contents.subarray)){if(canOwn){node.contents=buffer.subarray(offset,offset+length);node.usedBytes=length;return length}else if(node.usedBytes===0&&position===0){node.contents=buffer.slice(offset,offset+length);node.usedBytes=length;return length}else if(position+length<=node.usedBytes){node.contents.set(buffer.subarray(offset,offset+length),position);return length}}MEMFS.expandFileStorage(node,position+length);if(node.contents.subarray&&buffer.subarray){node.contents.set(buffer.subarray(offset,offset+length),position)}else{for(var i=0;i<length;i++){node.contents[position+i]=buffer[offset+i]}}node.usedBytes=Math.max(node.usedBytes,position+length);return length},llseek(stream,offset,whence){var position=offset;if(whence===1){position+=stream.position}else if(whence===2){if(FS.isFile(stream.node.mode)){position+=stream.node.usedBytes}}if(position<0){throw new FS.ErrnoError(28)}return position},mmap(stream,length,position,prot,flags){if(!FS.isFile(stream.node.mode)){throw new FS.ErrnoError(43)}var ptr;var allocated;var contents=stream.node.contents;if(!(flags&2)&&contents&&contents.buffer===HEAP8.buffer){allocated=false;ptr=contents.byteOffset}else{allocated=true;ptr=mmapAlloc(length);if(!ptr){throw new FS.ErrnoError(48)}if(contents){if(position>0||position+length<contents.length){if(contents.subarray){contents=contents.subarray(position,position+length)}else{contents=Array.prototype.slice.call(contents,position,position+length)}}HEAP8.set(contents,ptr)}}return{ptr,allocated}},msync(stream,buffer,offset,length,mmapFlags){MEMFS.stream_ops.write(stream,buffer,0,length,offset,false);return 0}}};var FS_modeStringToFlags=str=>{var flagModes={r:0,"r+":2,w:512|64|1,"w+":512|64|2,a:1024|64|1,"a+":1024|64|2};var flags=flagModes[str];if(typeof flags=="undefined"){throw new Error(`Unknown file open mode: ${str}`)}return flags};var FS_getMode=(canRead,canWrite)=>{var mode=0;if(canRead)mode|=292|73;if(canWrite)mode|=146;return mode};var asyncLoad=async url=>{var arrayBuffer=await readAsync(url);return new Uint8Array(arrayBuffer)};var FS_createDataFile=(...args)=>FS.createDataFile(...args);var getUniqueRunDependency=id=>id;var runDependencies=0;var dependenciesFulfilled=null;var removeRunDependency=id=>{runDependencies--;Module["monitorRunDependencies"]?.(runDependencies);if(runDependencies==0){if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}};var addRunDependency=id=>{runDependencies++;Module["monitorRunDependencies"]?.(runDependencies)};var preloadPlugins=[];var FS_handledByPreloadPlugin=async(byteArray,fullname)=>{if(typeof Browser!="undefined")Browser.init();for(var plugin of preloadPlugins){if(plugin["canHandle"](fullname)){return plugin["handle"](byteArray,fullname)}}return byteArray};var FS_preloadFile=async(parent,name,url,canRead,canWrite,dontCreateFile,canOwn,preFinish)=>{var fullname=name?PATH_FS.resolve(PATH.join2(parent,name)):parent;var dep=getUniqueRunDependency(`cp ${fullname}`);addRunDependency(dep);try{var byteArray=url;if(typeof url=="string"){byteArray=await asyncLoad(url)}byteArray=await FS_handledByPreloadPlugin(byteArray,fullname);preFinish?.();if(!dontCreateFile){FS_createDataFile(parent,name,byteArray,canRead,canWrite,canOwn)}}finally{removeRunDependency(dep)}};var FS_createPreloadedFile=(parent,name,url,canRead,canWrite,onload,onerror,dontCreateFile,canOwn,preFinish)=>{FS_preloadFile(parent,name,url,canRead,canWrite,dontCreateFile,canOwn,preFinish).then(onload).catch(onerror)};var FS={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:false,ignorePermissions:true,filesystems:null,syncFSRequests:0,ErrnoError:class{name="ErrnoError";constructor(errno){this.errno=errno}},FSStream:class{shared={};get object(){return this.node}set object(val){this.node=val}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(val){this.shared.flags=val}get position(){return this.shared.position}set position(val){this.shared.position=val}},FSNode:class{node_ops={};stream_ops={};readMode=292|73;writeMode=146;mounted=null;constructor(parent,name,mode,rdev){if(!parent){parent=this}this.parent=parent;this.mount=parent.mount;this.id=FS.nextInode++;this.name=name;this.mode=mode;this.rdev=rdev;this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(val){val?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(val){val?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return FS.isDir(this.mode)}get isDevice(){return FS.isChrdev(this.mode)}},lookupPath(path,opts={}){if(!path){throw new FS.ErrnoError(44)}opts.follow_mount??=true;if(!PATH.isAbs(path)){path=FS.cwd()+"/"+path}linkloop:for(var nlinks=0;nlinks<40;nlinks++){var parts=path.split("/").filter(p=>!!p);var current=FS.root;var current_path="/";for(var i=0;i<parts.length;i++){var islast=i===parts.length-1;if(islast&&opts.parent){break}if(parts[i]==="."){continue}if(parts[i]===".."){current_path=PATH.dirname(current_path);if(FS.isRoot(current)){path=current_path+"/"+parts.slice(i+1).join("/");nlinks--;continue linkloop}else{current=current.parent}continue}current_path=PATH.join2(current_path,parts[i]);try{current=FS.lookupNode(current,parts[i])}catch(e){if(e?.errno===44&&islast&&opts.noent_okay){return{path:current_path}}throw e}if(FS.isMountpoint(current)&&(!islast||opts.follow_mount)){current=current.mounted.root}if(FS.isLink(current.mode)&&(!islast||opts.follow)){if(!current.node_ops.readlink){throw new FS.ErrnoError(52)}var link=current.node_ops.readlink(current);if(!PATH.isAbs(link)){link=PATH.dirname(current_path)+"/"+link}path=link+"/"+parts.slice(i+1).join("/");continue linkloop}}return{path:current_path,node:current}}throw new FS.ErrnoError(32)},getPath(node){var path;while(true){if(FS.isRoot(node)){var mount=node.mount.mountpoint;if(!path)return mount;return mount[mount.length-1]!=="/"?`${mount}/${path}`:mount+path}path=path?`${node.name}/${path}`:node.name;node=node.parent}},hashName(parentid,name){var hash=0;for(var i=0;i<name.length;i++){hash=(hash<<5)-hash+name.charCodeAt(i)|0}return(parentid+hash>>>0)%FS.nameTable.length},hashAddNode(node){var hash=FS.hashName(node.parent.id,node.name);node.name_next=FS.nameTable[hash];FS.nameTable[hash]=node},hashRemoveNode(node){var hash=FS.hashName(node.parent.id,node.name);if(FS.nameTable[hash]===node){FS.nameTable[hash]=node.name_next}else{var current=FS.nameTable[hash];while(current){if(current.name_next===node){current.name_next=node.name_next;break}current=current.name_next}}},lookupNode(parent,name){var errCode=FS.mayLookup(parent);if(errCode){throw new FS.ErrnoError(errCode)}var hash=FS.hashName(parent.id,name);for(var node=FS.nameTable[hash];node;node=node.name_next){var nodeName=node.name;if(node.parent.id===parent.id&&nodeName===name){return node}}return FS.lookup(parent,name)},createNode(parent,name,mode,rdev){var node=new FS.FSNode(parent,name,mode,rdev);FS.hashAddNode(node);return node},destroyNode(node){FS.hashRemoveNode(node)},isRoot(node){return node===node.parent},isMountpoint(node){return!!node.mounted},isFile(mode){return(mode&61440)===32768},isDir(mode){return(mode&61440)===16384},isLink(mode){return(mode&61440)===40960},isChrdev(mode){return(mode&61440)===8192},isBlkdev(mode){return(mode&61440)===24576},isFIFO(mode){return(mode&61440)===4096},isSocket(mode){return(mode&49152)===49152},flagsToPermissionString(flag){var perms=["r","w","rw"][flag&3];if(flag&512){perms+="w"}return perms},nodePermissions(node,perms){if(FS.ignorePermissions){return 0}if(perms.includes("r")&&!(node.mode&292)){return 2}if(perms.includes("w")&&!(node.mode&146)){return 2}if(perms.includes("x")&&!(node.mode&73)){return 2}return 0},mayLookup(dir){if(!FS.isDir(dir.mode))return 54;var errCode=FS.nodePermissions(dir,"x");if(errCode)return errCode;if(!dir.node_ops.lookup)return 2;return 0},mayCreate(dir,name){if(!FS.isDir(dir.mode)){return 54}try{var node=FS.lookupNode(dir,name);return 20}catch(e){}return FS.nodePermissions(dir,"wx")},mayDelete(dir,name,isdir){var node;try{node=FS.lookupNode(dir,name)}catch(e){return e.errno}var errCode=FS.nodePermissions(dir,"wx");if(errCode){return errCode}if(isdir){if(!FS.isDir(node.mode)){return 54}if(FS.isRoot(node)||FS.getPath(node)===FS.cwd()){return 10}}else if(FS.isDir(node.mode)){return 31}return 0},mayOpen(node,flags){if(!node){return 44}if(FS.isLink(node.mode)){return 32}var mode=FS.flagsToPermissionString(flags);if(FS.isDir(node.mode)){if(mode!=="r"||flags&(512|64)){return 31}}return FS.nodePermissions(node,mode)},checkOpExists(op,err){if(!op){throw new FS.ErrnoError(err)}return op},MAX_OPEN_FDS:4096,nextfd(){for(var fd=0;fd<=FS.MAX_OPEN_FDS;fd++){if(!FS.streams[fd]){return fd}}throw new FS.ErrnoError(33)},getStreamChecked(fd){var stream=FS.getStream(fd);if(!stream){throw new FS.ErrnoError(8)}return stream},getStream:fd=>FS.streams[fd],createStream(stream,fd=-1){stream=Object.assign(new FS.FSStream,stream);if(fd==-1){fd=FS.nextfd()}stream.fd=fd;FS.streams[fd]=stream;return stream},closeStream(fd){FS.streams[fd]=null},dupStream(origStream,fd=-1){var stream=FS.createStream(origStream,fd);stream.stream_ops?.dup?.(stream);return stream},doSetAttr(stream,node,attr){var setattr=stream?.stream_ops.setattr;var arg=setattr?stream:node;setattr??=node.node_ops.setattr;FS.checkOpExists(setattr,63);setattr(arg,attr)},chrdev_stream_ops:{open(stream){var device=FS.getDevice(stream.node.rdev);stream.stream_ops=device.stream_ops;stream.stream_ops.open?.(stream)},llseek(){throw new FS.ErrnoError(70)}},major:dev=>dev>>8,minor:dev=>dev&255,makedev:(ma,mi)=>ma<<8|mi,registerDevice(dev,ops){FS.devices[dev]={stream_ops:ops}},getDevice:dev=>FS.devices[dev],getMounts(mount){var mounts=[];var check=[mount];while(check.length){var m=check.pop();mounts.push(m);check.push(...m.mounts)}return mounts},syncfs(populate,callback){if(typeof populate=="function"){callback=populate;populate=false}FS.syncFSRequests++;if(FS.syncFSRequests>1){err(`warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`)}var mounts=FS.getMounts(FS.root.mount);var completed=0;function doCallback(errCode){FS.syncFSRequests--;return callback(errCode)}function done(errCode){if(errCode){if(!done.errored){done.errored=true;return doCallback(errCode)}return}if(++completed>=mounts.length){doCallback(null)}}for(var mount of mounts){if(mount.type.syncfs){mount.type.syncfs(mount,populate,done)}else{done(null)}}},mount(type,opts,mountpoint){var root=mountpoint==="/";var pseudo=!mountpoint;var node;if(root&&FS.root){throw new FS.ErrnoError(10)}else if(!root&&!pseudo){var lookup=FS.lookupPath(mountpoint,{follow_mount:false});mountpoint=lookup.path;node=lookup.node;if(FS.isMountpoint(node)){throw new FS.ErrnoError(10)}if(!FS.isDir(node.mode)){throw new FS.ErrnoError(54)}}var mount={type,opts,mountpoint,mounts:[]};var mountRoot=type.mount(mount);mountRoot.mount=mount;mount.root=mountRoot;if(root){FS.root=mountRoot}else if(node){node.mounted=mount;if(node.mount){node.mount.mounts.push(mount)}}return mountRoot},unmount(mountpoint){var lookup=FS.lookupPath(mountpoint,{follow_mount:false});if(!FS.isMountpoint(lookup.node)){throw new FS.ErrnoError(28)}var node=lookup.node;var mount=node.mounted;var mounts=FS.getMounts(mount);for(var[hash,current]of Object.entries(FS.nameTable)){while(current){var next=current.name_next;if(mounts.includes(current.mount)){FS.destroyNode(current)}current=next}}node.mounted=null;var idx=node.mount.mounts.indexOf(mount);node.mount.mounts.splice(idx,1)},lookup(parent,name){return parent.node_ops.lookup(parent,name)},mknod(path,mode,dev){var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;var name=PATH.basename(path);if(!name){throw new FS.ErrnoError(28)}if(name==="."||name===".."){throw new FS.ErrnoError(20)}var errCode=FS.mayCreate(parent,name);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.mknod){throw new FS.ErrnoError(63)}return parent.node_ops.mknod(parent,name,mode,dev)},statfs(path){return FS.statfsNode(FS.lookupPath(path,{follow:true}).node)},statfsStream(stream){return FS.statfsNode(stream.node)},statfsNode(node){var rtn={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:FS.nextInode,ffree:FS.nextInode-1,fsid:42,flags:2,namelen:255};if(node.node_ops.statfs){Object.assign(rtn,node.node_ops.statfs(node.mount.opts.root))}return rtn},create(path,mode=438){mode&=4095;mode|=32768;return FS.mknod(path,mode,0)},mkdir(path,mode=511){mode&=511|512;mode|=16384;return FS.mknod(path,mode,0)},mkdirTree(path,mode){var dirs=path.split("/");var d="";for(var dir of dirs){if(!dir)continue;if(d||PATH.isAbs(path))d+="/";d+=dir;try{FS.mkdir(d,mode)}catch(e){if(e.errno!=20)throw e}}},mkdev(path,mode,dev){if(typeof dev=="undefined"){dev=mode;mode=438}mode|=8192;return FS.mknod(path,mode,dev)},symlink(oldpath,newpath){if(!PATH_FS.resolve(oldpath)){throw new FS.ErrnoError(44)}var lookup=FS.lookupPath(newpath,{parent:true});var parent=lookup.node;if(!parent){throw new FS.ErrnoError(44)}var newname=PATH.basename(newpath);var errCode=FS.mayCreate(parent,newname);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.symlink){throw new FS.ErrnoError(63)}return parent.node_ops.symlink(parent,newname,oldpath)},rename(old_path,new_path){var old_dirname=PATH.dirname(old_path);var new_dirname=PATH.dirname(new_path);var old_name=PATH.basename(old_path);var new_name=PATH.basename(new_path);var lookup,old_dir,new_dir;lookup=FS.lookupPath(old_path,{parent:true});old_dir=lookup.node;lookup=FS.lookupPath(new_path,{parent:true});new_dir=lookup.node;if(!old_dir||!new_dir)throw new FS.ErrnoError(44);if(old_dir.mount!==new_dir.mount){throw new FS.ErrnoError(75)}var old_node=FS.lookupNode(old_dir,old_name);var relative=PATH_FS.relative(old_path,new_dirname);if(relative.charAt(0)!=="."){throw new FS.ErrnoError(28)}relative=PATH_FS.relative(new_path,old_dirname);if(relative.charAt(0)!=="."){throw new FS.ErrnoError(55)}var new_node;try{new_node=FS.lookupNode(new_dir,new_name)}catch(e){}if(old_node===new_node){return}var isdir=FS.isDir(old_node.mode);var errCode=FS.mayDelete(old_dir,old_name,isdir);if(errCode){throw new FS.ErrnoError(errCode)}errCode=new_node?FS.mayDelete(new_dir,new_name,isdir):FS.mayCreate(new_dir,new_name);if(errCode){throw new FS.ErrnoError(errCode)}if(!old_dir.node_ops.rename){throw new FS.ErrnoError(63)}if(FS.isMountpoint(old_node)||new_node&&FS.isMountpoint(new_node)){throw new FS.ErrnoError(10)}if(new_dir!==old_dir){errCode=FS.nodePermissions(old_dir,"w");if(errCode){throw new FS.ErrnoError(errCode)}}FS.hashRemoveNode(old_node);try{old_dir.node_ops.rename(old_node,new_dir,new_name);old_node.parent=new_dir}catch(e){throw e}finally{FS.hashAddNode(old_node)}},rmdir(path){var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;var name=PATH.basename(path);var node=FS.lookupNode(parent,name);var errCode=FS.mayDelete(parent,name,true);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.rmdir){throw new FS.ErrnoError(63)}if(FS.isMountpoint(node)){throw new FS.ErrnoError(10)}parent.node_ops.rmdir(parent,name);FS.destroyNode(node)},readdir(path){var lookup=FS.lookupPath(path,{follow:true});var node=lookup.node;var readdir=FS.checkOpExists(node.node_ops.readdir,54);return readdir(node)},unlink(path){var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;if(!parent){throw new FS.ErrnoError(44)}var name=PATH.basename(path);var node=FS.lookupNode(parent,name);var errCode=FS.mayDelete(parent,name,false);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.unlink){throw new FS.ErrnoError(63)}if(FS.isMountpoint(node)){throw new FS.ErrnoError(10)}parent.node_ops.unlink(parent,name);FS.destroyNode(node)},readlink(path){var lookup=FS.lookupPath(path);var link=lookup.node;if(!link){throw new FS.ErrnoError(44)}if(!link.node_ops.readlink){throw new FS.ErrnoError(28)}return link.node_ops.readlink(link)},stat(path,dontFollow){var lookup=FS.lookupPath(path,{follow:!dontFollow});var node=lookup.node;var getattr=FS.checkOpExists(node.node_ops.getattr,63);return getattr(node)},fstat(fd){var stream=FS.getStreamChecked(fd);var node=stream.node;var getattr=stream.stream_ops.getattr;var arg=getattr?stream:node;getattr??=node.node_ops.getattr;FS.checkOpExists(getattr,63);return getattr(arg)},lstat(path){return FS.stat(path,true)},doChmod(stream,node,mode,dontFollow){FS.doSetAttr(stream,node,{mode:mode&4095|node.mode&~4095,ctime:Date.now(),dontFollow})},chmod(path,mode,dontFollow){var node;if(typeof path=="string"){var lookup=FS.lookupPath(path,{follow:!dontFollow});node=lookup.node}else{node=path}FS.doChmod(null,node,mode,dontFollow)},lchmod(path,mode){FS.chmod(path,mode,true)},fchmod(fd,mode){var stream=FS.getStreamChecked(fd);FS.doChmod(stream,stream.node,mode,false)},doChown(stream,node,dontFollow){FS.doSetAttr(stream,node,{timestamp:Date.now(),dontFollow})},chown(path,uid,gid,dontFollow){var node;if(typeof path=="string"){var lookup=FS.lookupPath(path,{follow:!dontFollow});node=lookup.node}else{node=path}FS.doChown(null,node,dontFollow)},lchown(path,uid,gid){FS.chown(path,uid,gid,true)},fchown(fd,uid,gid){var stream=FS.getStreamChecked(fd);FS.doChown(stream,stream.node,false)},doTruncate(stream,node,len){if(FS.isDir(node.mode)){throw new FS.ErrnoError(31)}if(!FS.isFile(node.mode)){throw new FS.ErrnoError(28)}var errCode=FS.nodePermissions(node,"w");if(errCode){throw new FS.ErrnoError(errCode)}FS.doSetAttr(stream,node,{size:len,timestamp:Date.now()})},truncate(path,len){if(len<0){throw new FS.ErrnoError(28)}var node;if(typeof path=="string"){var lookup=FS.lookupPath(path,{follow:true});node=lookup.node}else{node=path}FS.doTruncate(null,node,len)},ftruncate(fd,len){var stream=FS.getStreamChecked(fd);if(len<0||(stream.flags&2097155)===0){throw new FS.ErrnoError(28)}FS.doTruncate(stream,stream.node,len)},utime(path,atime,mtime){var lookup=FS.lookupPath(path,{follow:true});var node=lookup.node;var setattr=FS.checkOpExists(node.node_ops.setattr,63);setattr(node,{atime,mtime})},open(path,flags,mode=438){if(path===""){throw new FS.ErrnoError(44)}flags=typeof flags=="string"?FS_modeStringToFlags(flags):flags;if(flags&64){mode=mode&4095|32768}else{mode=0}var node;var isDirPath;if(typeof path=="object"){node=path}else{isDirPath=path.endsWith("/");var lookup=FS.lookupPath(path,{follow:!(flags&131072),noent_okay:true});node=lookup.node;path=lookup.path}var created=false;if(flags&64){if(node){if(flags&128){throw new FS.ErrnoError(20)}}else if(isDirPath){throw new FS.ErrnoError(31)}else{node=FS.mknod(path,mode|511,0);created=true}}if(!node){throw new FS.ErrnoError(44)}if(FS.isChrdev(node.mode)){flags&=~512}if(flags&65536&&!FS.isDir(node.mode)){throw new FS.ErrnoError(54)}if(!created){var errCode=FS.mayOpen(node,flags);if(errCode){throw new FS.ErrnoError(errCode)}}if(flags&512&&!created){FS.truncate(node,0)}flags&=~(128|512|131072);var stream=FS.createStream({node,path:FS.getPath(node),flags,seekable:true,position:0,stream_ops:node.stream_ops,ungotten:[],error:false});if(stream.stream_ops.open){stream.stream_ops.open(stream)}if(created){FS.chmod(node,mode&511)}return stream},close(stream){if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if(stream.getdents)stream.getdents=null;try{if(stream.stream_ops.close){stream.stream_ops.close(stream)}}catch(e){throw e}finally{FS.closeStream(stream.fd)}stream.fd=null},isClosed(stream){return stream.fd===null},llseek(stream,offset,whence){if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if(!stream.seekable||!stream.stream_ops.llseek){throw new FS.ErrnoError(70)}if(whence!=0&&whence!=1&&whence!=2){throw new FS.ErrnoError(28)}stream.position=stream.stream_ops.llseek(stream,offset,whence);stream.ungotten=[];return stream.position},read(stream,buffer,offset,length,position){if(length<0||position<0){throw new FS.ErrnoError(28)}if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if((stream.flags&2097155)===1){throw new FS.ErrnoError(8)}if(FS.isDir(stream.node.mode)){throw new FS.ErrnoError(31)}if(!stream.stream_ops.read){throw new FS.ErrnoError(28)}var seeking=typeof position!="undefined";if(!seeking){position=stream.position}else if(!stream.seekable){throw new FS.ErrnoError(70)}var bytesRead=stream.stream_ops.read(stream,buffer,offset,length,position);if(!seeking)stream.position+=bytesRead;return bytesRead},write(stream,buffer,offset,length,position,canOwn){if(length<0||position<0){throw new FS.ErrnoError(28)}if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if((stream.flags&2097155)===0){throw new FS.ErrnoError(8)}if(FS.isDir(stream.node.mode)){throw new FS.ErrnoError(31)}if(!stream.stream_ops.write){throw new FS.ErrnoError(28)}if(stream.seekable&&stream.flags&1024){FS.llseek(stream,0,2)}var seeking=typeof position!="undefined";if(!seeking){position=stream.position}else if(!stream.seekable){throw new FS.ErrnoError(70)}var bytesWritten=stream.stream_ops.write(stream,buffer,offset,length,position,canOwn);if(!seeking)stream.position+=bytesWritten;return bytesWritten},mmap(stream,length,position,prot,flags){if((prot&2)!==0&&(flags&2)===0&&(stream.flags&2097155)!==2){throw new FS.ErrnoError(2)}if((stream.flags&2097155)===1){throw new FS.ErrnoError(2)}if(!stream.stream_ops.mmap){throw new FS.ErrnoError(43)}if(!length){throw new FS.ErrnoError(28)}return stream.stream_ops.mmap(stream,length,position,prot,flags)},msync(stream,buffer,offset,length,mmapFlags){if(!stream.stream_ops.msync){return 0}return stream.stream_ops.msync(stream,buffer,offset,length,mmapFlags)},ioctl(stream,cmd,arg){if(!stream.stream_ops.ioctl){throw new FS.ErrnoError(59)}return stream.stream_ops.ioctl(stream,cmd,arg)},readFile(path,opts={}){opts.flags=opts.flags||0;opts.encoding=opts.encoding||"binary";if(opts.encoding!=="utf8"&&opts.encoding!=="binary"){abort(`Invalid encoding type "${opts.encoding}"`)}var stream=FS.open(path,opts.flags);var stat=FS.stat(path);var length=stat.size;var buf=new Uint8Array(length);FS.read(stream,buf,0,length,0);if(opts.encoding==="utf8"){buf=UTF8ArrayToString(buf)}FS.close(stream);return buf},writeFile(path,data,opts={}){opts.flags=opts.flags||577;var stream=FS.open(path,opts.flags,opts.mode);if(typeof data=="string"){data=new Uint8Array(intArrayFromString(data,true))}if(ArrayBuffer.isView(data)){FS.write(stream,data,0,data.byteLength,undefined,opts.canOwn)}else{abort("Unsupported data type")}FS.close(stream)},cwd:()=>FS.currentPath,chdir(path){var lookup=FS.lookupPath(path,{follow:true});if(lookup.node===null){throw new FS.ErrnoError(44)}if(!FS.isDir(lookup.node.mode)){throw new FS.ErrnoError(54)}var errCode=FS.nodePermissions(lookup.node,"x");if(errCode){throw new FS.ErrnoError(errCode)}FS.currentPath=lookup.path},createDefaultDirectories(){FS.mkdir("/tmp");FS.mkdir("/home");FS.mkdir("/home/web_user")},createDefaultDevices(){FS.mkdir("/dev");FS.registerDevice(FS.makedev(1,3),{read:()=>0,write:(stream,buffer,offset,length,pos)=>length,llseek:()=>0});FS.mkdev("/dev/null",FS.makedev(1,3));TTY.register(FS.makedev(5,0),TTY.default_tty_ops);TTY.register(FS.makedev(6,0),TTY.default_tty1_ops);FS.mkdev("/dev/tty",FS.makedev(5,0));FS.mkdev("/dev/tty1",FS.makedev(6,0));var randomBuffer=new Uint8Array(1024),randomLeft=0;var randomByte=()=>{if(randomLeft===0){randomFill(randomBuffer);randomLeft=randomBuffer.byteLength}return randomBuffer[--randomLeft]};FS.createDevice("/dev","random",randomByte);FS.createDevice("/dev","urandom",randomByte);FS.mkdir("/dev/shm");FS.mkdir("/dev/shm/tmp")},createSpecialDirectories(){FS.mkdir("/proc");var proc_self=FS.mkdir("/proc/self");FS.mkdir("/proc/self/fd");FS.mount({mount(){var node=FS.createNode(proc_self,"fd",16895,73);node.stream_ops={llseek:MEMFS.stream_ops.llseek};node.node_ops={lookup(parent,name){var fd=+name;var stream=FS.getStreamChecked(fd);var ret={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>stream.path},id:fd+1};ret.parent=ret;return ret},readdir(){return Array.from(FS.streams.entries()).filter(([k,v])=>v).map(([k,v])=>k.toString())}};return node}},{},"/proc/self/fd")},createStandardStreams(input,output,error){if(input){FS.createDevice("/dev","stdin",input)}else{FS.symlink("/dev/tty","/dev/stdin")}if(output){FS.createDevice("/dev","stdout",null,output)}else{FS.symlink("/dev/tty","/dev/stdout")}if(error){FS.createDevice("/dev","stderr",null,error)}else{FS.symlink("/dev/tty1","/dev/stderr")}var stdin=FS.open("/dev/stdin",0);var stdout=FS.open("/dev/stdout",1);var stderr=FS.open("/dev/stderr",1)},staticInit(){FS.nameTable=new Array(4096);FS.mount(MEMFS,{},"/");FS.createDefaultDirectories();FS.createDefaultDevices();FS.createSpecialDirectories();FS.filesystems={MEMFS}},init(input,output,error){FS.initialized=true;input??=Module["stdin"];output??=Module["stdout"];error??=Module["stderr"];FS.createStandardStreams(input,output,error)},quit(){FS.initialized=false;for(var stream of FS.streams){if(stream){FS.close(stream)}}},findObject(path,dontResolveLastLink){var ret=FS.analyzePath(path,dontResolveLastLink);if(!ret.exists){return null}return ret.object},analyzePath(path,dontResolveLastLink){try{var lookup=FS.lookupPath(path,{follow:!dontResolveLastLink});path=lookup.path}catch(e){}var ret={isRoot:false,exists:false,error:0,name:null,path:null,object:null,parentExists:false,parentPath:null,parentObject:null};try{var lookup=FS.lookupPath(path,{parent:true});ret.parentExists=true;ret.parentPath=lookup.path;ret.parentObject=lookup.node;ret.name=PATH.basename(path);lookup=FS.lookupPath(path,{follow:!dontResolveLastLink});ret.exists=true;ret.path=lookup.path;ret.object=lookup.node;ret.name=lookup.node.name;ret.isRoot=lookup.path==="/"}catch(e){ret.error=e.errno}return ret},createPath(parent,path,canRead,canWrite){parent=typeof parent=="string"?parent:FS.getPath(parent);var parts=path.split("/").reverse();while(parts.length){var part=parts.pop();if(!part)continue;var current=PATH.join2(parent,part);try{FS.mkdir(current)}catch(e){if(e.errno!=20)throw e}parent=current}return current},createFile(parent,name,properties,canRead,canWrite){var path=PATH.join2(typeof parent=="string"?parent:FS.getPath(parent),name);var mode=FS_getMode(canRead,canWrite);return FS.create(path,mode)},createDataFile(parent,name,data,canRead,canWrite,canOwn){var path=name;if(parent){parent=typeof parent=="string"?parent:FS.getPath(parent);path=name?PATH.join2(parent,name):parent}var mode=FS_getMode(canRead,canWrite);var node=FS.create(path,mode);if(data){if(typeof data=="string"){var arr=new Array(data.length);for(var i=0,len=data.length;i<len;++i)arr[i]=data.charCodeAt(i);data=arr}FS.chmod(node,mode|146);var stream=FS.open(node,577);FS.write(stream,data,0,data.length,0,canOwn);FS.close(stream);FS.chmod(node,mode)}},createDevice(parent,name,input,output){var path=PATH.join2(typeof parent=="string"?parent:FS.getPath(parent),name);var mode=FS_getMode(!!input,!!output);FS.createDevice.major??=64;var dev=FS.makedev(FS.createDevice.major++,0);FS.registerDevice(dev,{open(stream){stream.seekable=false},close(stream){if(output?.buffer?.length){output(10)}},read(stream,buffer,offset,length,pos){var bytesRead=0;for(var i=0;i<length;i++){var result;try{result=input()}catch(e){throw new FS.ErrnoError(29)}if(result===undefined&&bytesRead===0){throw new FS.ErrnoError(6)}if(result===null||result===undefined)break;bytesRead++;buffer[offset+i]=result}if(bytesRead){stream.node.atime=Date.now()}return bytesRead},write(stream,buffer,offset,length,pos){for(var i=0;i<length;i++){try{output(buffer[offset+i])}catch(e){throw new FS.ErrnoError(29)}}if(length){stream.node.mtime=stream.node.ctime=Date.now()}return i}});return FS.mkdev(path,mode,dev)},forceLoadFile(obj){if(obj.isDevice||obj.isFolder||obj.link||obj.contents)return true;if(globalThis.XMLHttpRequest){abort("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.")}else{try{obj.contents=readBinary(obj.url)}catch(e){throw new FS.ErrnoError(29)}}},createLazyFile(parent,name,url,canRead,canWrite){class LazyUint8Array{lengthKnown=false;chunks=[];get(idx){if(idx>this.length-1||idx<0){return undefined}var chunkOffset=idx%this.chunkSize;var chunkNum=idx/this.chunkSize|0;return this.getter(chunkNum)[chunkOffset]}setDataGetter(getter){this.getter=getter}cacheLength(){var xhr=new XMLHttpRequest;xhr.open("HEAD",url,false);xhr.send(null);if(!(xhr.status>=200&&xhr.status<300||xhr.status===304))abort("Couldn't load "+url+". Status: "+xhr.status);var datalength=Number(xhr.getResponseHeader("Content-length"));var header;var hasByteServing=(header=xhr.getResponseHeader("Accept-Ranges"))&&header==="bytes";var usesGzip=(header=xhr.getResponseHeader("Content-Encoding"))&&header==="gzip";var chunkSize=1024*1024;if(!hasByteServing)chunkSize=datalength;var doXHR=(from,to)=>{if(from>to)abort("invalid range ("+from+", "+to+") or no bytes requested!");if(to>datalength-1)abort("only "+datalength+" bytes available! programmer error!");var xhr=new XMLHttpRequest;xhr.open("GET",url,false);if(datalength!==chunkSize)xhr.setRequestHeader("Range","bytes="+from+"-"+to);xhr.responseType="arraybuffer";if(xhr.overrideMimeType){xhr.overrideMimeType("text/plain; charset=x-user-defined")}xhr.send(null);if(!(xhr.status>=200&&xhr.status<300||xhr.status===304))abort("Couldn't load "+url+". Status: "+xhr.status);if(xhr.response!==undefined){return new Uint8Array(xhr.response||[])}return intArrayFromString(xhr.responseText||"",true)};var lazyArray=this;lazyArray.setDataGetter(chunkNum=>{var start=chunkNum*chunkSize;var end=(chunkNum+1)*chunkSize-1;end=Math.min(end,datalength-1);if(typeof lazyArray.chunks[chunkNum]=="undefined"){lazyArray.chunks[chunkNum]=doXHR(start,end)}if(typeof lazyArray.chunks[chunkNum]=="undefined")abort("doXHR failed!");return lazyArray.chunks[chunkNum]});if(usesGzip||!datalength){chunkSize=datalength=1;datalength=this.getter(0).length;chunkSize=datalength;out("LazyFiles on gzip forces download of the whole file when length is accessed")}this._length=datalength;this._chunkSize=chunkSize;this.lengthKnown=true}get length(){if(!this.lengthKnown){this.cacheLength()}return this._length}get chunkSize(){if(!this.lengthKnown){this.cacheLength()}return this._chunkSize}}if(globalThis.XMLHttpRequest){if(!ENVIRONMENT_IS_WORKER)abort("Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc");var lazyArray=new LazyUint8Array;var properties={isDevice:false,contents:lazyArray}}else{var properties={isDevice:false,url}}var node=FS.createFile(parent,name,properties,canRead,canWrite);if(properties.contents){node.contents=properties.contents}else if(properties.url){node.contents=null;node.url=properties.url}Object.defineProperties(node,{usedBytes:{get:function(){return this.contents.length}}});var stream_ops={};for(const[key,fn]of Object.entries(node.stream_ops)){stream_ops[key]=(...args)=>{FS.forceLoadFile(node);return fn(...args)}}function writeChunks(stream,buffer,offset,length,position){var contents=stream.node.contents;if(position>=contents.length)return 0;var size=Math.min(contents.length-position,length);if(contents.slice){for(var i=0;i<size;i++){buffer[offset+i]=contents[position+i]}}else{for(var i=0;i<size;i++){buffer[offset+i]=contents.get(position+i)}}return size}stream_ops.read=(stream,buffer,offset,length,position)=>{FS.forceLoadFile(node);return writeChunks(stream,buffer,offset,length,position)};stream_ops.mmap=(stream,length,position,prot,flags)=>{FS.forceLoadFile(node);var ptr=mmapAlloc(length);if(!ptr){throw new FS.ErrnoError(48)}writeChunks(stream,HEAP8,ptr,length,position);return{ptr,allocated:true}};node.stream_ops=stream_ops;return node}};var SYSCALLS={calculateAt(dirfd,path,allowEmpty){if(PATH.isAbs(path)){return path}var dir;if(dirfd===-100){dir=FS.cwd()}else{var dirstream=SYSCALLS.getStreamFromFD(dirfd);dir=dirstream.path}if(path.length==0){if(!allowEmpty){throw new FS.ErrnoError(44)}return dir}return dir+"/"+path},writeStat(buf,stat){HEAPU32[buf>>2]=stat.dev;HEAPU32[buf+4>>2]=stat.mode;HEAPU32[buf+8>>2]=stat.nlink;HEAPU32[buf+12>>2]=stat.uid;HEAPU32[buf+16>>2]=stat.gid;HEAPU32[buf+20>>2]=stat.rdev;tempI64=[stat.size>>>0,(tempDouble=stat.size,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+24>>2]=tempI64[0],HEAP32[buf+28>>2]=tempI64[1];HEAP32[buf+32>>2]=4096;HEAP32[buf+36>>2]=stat.blocks;var atime=stat.atime.getTime();var mtime=stat.mtime.getTime();var ctime=stat.ctime.getTime();tempI64=[Math.floor(atime/1e3)>>>0,(tempDouble=Math.floor(atime/1e3),+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+40>>2]=tempI64[0],HEAP32[buf+44>>2]=tempI64[1];HEAPU32[buf+48>>2]=atime%1e3*1e3*1e3;tempI64=[Math.floor(mtime/1e3)>>>0,(tempDouble=Math.floor(mtime/1e3),+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+56>>2]=tempI64[0],HEAP32[buf+60>>2]=tempI64[1];HEAPU32[buf+64>>2]=mtime%1e3*1e3*1e3;tempI64=[Math.floor(ctime/1e3)>>>0,(tempDouble=Math.floor(ctime/1e3),+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+72>>2]=tempI64[0],HEAP32[buf+76>>2]=tempI64[1];HEAPU32[buf+80>>2]=ctime%1e3*1e3*1e3;tempI64=[stat.ino>>>0,(tempDouble=stat.ino,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+88>>2]=tempI64[0],HEAP32[buf+92>>2]=tempI64[1];return 0},writeStatFs(buf,stats){HEAPU32[buf+4>>2]=stats.bsize;HEAPU32[buf+60>>2]=stats.bsize;tempI64=[stats.blocks>>>0,(tempDouble=stats.blocks,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+8>>2]=tempI64[0],HEAP32[buf+12>>2]=tempI64[1];tempI64=[stats.bfree>>>0,(tempDouble=stats.bfree,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+16>>2]=tempI64[0],HEAP32[buf+20>>2]=tempI64[1];tempI64=[stats.bavail>>>0,(tempDouble=stats.bavail,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+24>>2]=tempI64[0],HEAP32[buf+28>>2]=tempI64[1];tempI64=[stats.files>>>0,(tempDouble=stats.files,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+32>>2]=tempI64[0],HEAP32[buf+36>>2]=tempI64[1];tempI64=[stats.ffree>>>0,(tempDouble=stats.ffree,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+40>>2]=tempI64[0],HEAP32[buf+44>>2]=tempI64[1];HEAPU32[buf+48>>2]=stats.fsid;HEAPU32[buf+64>>2]=stats.flags;HEAPU32[buf+56>>2]=stats.namelen},doMsync(addr,stream,len,flags,offset){if(!FS.isFile(stream.node.mode)){throw new FS.ErrnoError(43)}if(flags&2){return 0}var buffer=HEAPU8.slice(addr,addr+len);FS.msync(stream,buffer,offset,len,flags)},getStreamFromFD(fd){var stream=FS.getStreamChecked(fd);return stream},varargs:undefined,getStr(ptr){var ret=UTF8ToString(ptr);return ret}};function ___syscall_chmod(path,mode){try{path=SYSCALLS.getStr(path);FS.chmod(path,mode);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_faccessat(dirfd,path,amode,flags){try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);if(amode&~7){return-28}var lookup=FS.lookupPath(path,{follow:true});var node=lookup.node;if(!node){return-44}var perms="";if(amode&4)perms+="r";if(amode&2)perms+="w";if(amode&1)perms+="x";if(perms&&FS.nodePermissions(node,perms)){return-2}return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_fchmod(fd,mode){try{FS.fchmod(fd,mode);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_fchown32(fd,owner,group){try{FS.fchown(fd,owner,group);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var syscallGetVarargI=()=>{var ret=HEAP32[+SYSCALLS.varargs>>2];SYSCALLS.varargs+=4;return ret};var syscallGetVarargP=syscallGetVarargI;function ___syscall_fcntl64(fd,cmd,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD(fd);switch(cmd){case 0:{var arg=syscallGetVarargI();if(arg<0){return-28}while(FS.streams[arg]){arg++}var newStream;newStream=FS.dupStream(stream,arg);return newStream.fd}case 1:case 2:return 0;case 3:return stream.flags;case 4:{var arg=syscallGetVarargI();stream.flags|=arg;return 0}case 12:{var arg=syscallGetVarargP();var offset=0;HEAP16[arg+offset>>1]=2;return 0}case 13:case 14:return 0}return-28}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_fstat64(fd,buf){try{return SYSCALLS.writeStat(buf,FS.fstat(fd))}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var convertI32PairToI53Checked=(lo,hi)=>hi+2097152>>>0<4194305-!!lo?(lo>>>0)+hi*4294967296:NaN;function ___syscall_ftruncate64(fd,length_low,length_high){var length=convertI32PairToI53Checked(length_low,length_high);try{if(isNaN(length))return-61;FS.ftruncate(fd,length);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var stringToUTF8=(str,outPtr,maxBytesToWrite)=>stringToUTF8Array(str,HEAPU8,outPtr,maxBytesToWrite);function ___syscall_getcwd(buf,size){try{if(size===0)return-28;var cwd=FS.cwd();var cwdLengthInBytes=lengthBytesUTF8(cwd)+1;if(size<cwdLengthInBytes)return-68;stringToUTF8(cwd,buf,size);return cwdLengthInBytes}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_lstat64(path,buf){try{path=SYSCALLS.getStr(path);return SYSCALLS.writeStat(buf,FS.lstat(path))}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_mkdirat(dirfd,path,mode){try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);FS.mkdir(path,mode,0);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_newfstatat(dirfd,path,buf,flags){try{path=SYSCALLS.getStr(path);var nofollow=flags&256;var allowEmpty=flags&4096;flags=flags&~6400;path=SYSCALLS.calculateAt(dirfd,path,allowEmpty);return SYSCALLS.writeStat(buf,nofollow?FS.lstat(path):FS.stat(path))}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_openat(dirfd,path,flags,varargs){SYSCALLS.varargs=varargs;try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);var mode=varargs?syscallGetVarargI():0;return FS.open(path,flags,mode).fd}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_readlinkat(dirfd,path,buf,bufsize){try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);if(bufsize<=0)return-28;var ret=FS.readlink(path);var len=Math.min(bufsize,lengthBytesUTF8(ret));var endChar=HEAP8[buf+len];stringToUTF8(ret,buf,bufsize+1);HEAP8[buf+len]=endChar;return len}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_rmdir(path){try{path=SYSCALLS.getStr(path);FS.rmdir(path);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_stat64(path,buf){try{path=SYSCALLS.getStr(path);return SYSCALLS.writeStat(buf,FS.stat(path))}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_unlinkat(dirfd,path,flags){try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);if(!flags){FS.unlink(path)}else if(flags===512){FS.rmdir(path)}else{return-28}return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var readI53FromI64=ptr=>HEAPU32[ptr>>2]+HEAP32[ptr+4>>2]*4294967296;function ___syscall_utimensat(dirfd,path,times,flags){try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path,true);var now=Date.now(),atime,mtime;if(!times){atime=now;mtime=now}else{var seconds=readI53FromI64(times);var nanoseconds=HEAP32[times+8>>2];if(nanoseconds==1073741823){atime=now}else if(nanoseconds==1073741822){atime=null}else{atime=seconds*1e3+nanoseconds/(1e3*1e3)}times+=16;seconds=readI53FromI64(times);nanoseconds=HEAP32[times+8>>2];if(nanoseconds==1073741823){mtime=now}else if(nanoseconds==1073741822){mtime=null}else{mtime=seconds*1e3+nanoseconds/(1e3*1e3)}}if((mtime??atime)!==null){FS.utime(path,atime,mtime)}return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var __abort_js=()=>abort("");var runtimeKeepaliveCounter=0;var __emscripten_runtime_keepalive_clear=()=>{noExitRuntime=false;runtimeKeepaliveCounter=0};var isLeapYear=year=>year%4===0&&(year%100!==0||year%400===0);var MONTH_DAYS_LEAP_CUMULATIVE=[0,31,60,91,121,152,182,213,244,274,305,335];var MONTH_DAYS_REGULAR_CUMULATIVE=[0,31,59,90,120,151,181,212,243,273,304,334];var ydayFromDate=date=>{var leap=isLeapYear(date.getFullYear());var monthDaysCumulative=leap?MONTH_DAYS_LEAP_CUMULATIVE:MONTH_DAYS_REGULAR_CUMULATIVE;var yday=monthDaysCumulative[date.getMonth()]+date.getDate()-1;return yday};function __localtime_js(time_low,time_high,tmPtr){var time=convertI32PairToI53Checked(time_low,time_high);var date=new Date(time*1e3);HEAP32[tmPtr>>2]=date.getSeconds();HEAP32[tmPtr+4>>2]=date.getMinutes();HEAP32[tmPtr+8>>2]=date.getHours();HEAP32[tmPtr+12>>2]=date.getDate();HEAP32[tmPtr+16>>2]=date.getMonth();HEAP32[tmPtr+20>>2]=date.getFullYear()-1900;HEAP32[tmPtr+24>>2]=date.getDay();var yday=ydayFromDate(date)|0;HEAP32[tmPtr+28>>2]=yday;HEAP32[tmPtr+36>>2]=-(date.getTimezoneOffset()*60);var start=new Date(date.getFullYear(),0,1);var summerOffset=new Date(date.getFullYear(),6,1).getTimezoneOffset();var winterOffset=start.getTimezoneOffset();var dst=(summerOffset!=winterOffset&&date.getTimezoneOffset()==Math.min(winterOffset,summerOffset))|0;HEAP32[tmPtr+32>>2]=dst}function __mmap_js(len,prot,flags,fd,offset_low,offset_high,allocated,addr){var offset=convertI32PairToI53Checked(offset_low,offset_high);try{var stream=SYSCALLS.getStreamFromFD(fd);var res=FS.mmap(stream,len,offset,prot,flags);var ptr=res.ptr;HEAP32[allocated>>2]=res.allocated;HEAPU32[addr>>2]=ptr;return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function __munmap_js(addr,len,prot,flags,fd,offset_low,offset_high){var offset=convertI32PairToI53Checked(offset_low,offset_high);try{var stream=SYSCALLS.getStreamFromFD(fd);if(prot&2){SYSCALLS.doMsync(addr,stream,len,flags,offset)}}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var timers={};var handleException=e=>{if(e instanceof ExitStatus||e=="unwind"){return EXITSTATUS}quit_(1,e)};var keepRuntimeAlive=()=>noExitRuntime||runtimeKeepaliveCounter>0;var _proc_exit=code=>{EXITSTATUS=code;if(!keepRuntimeAlive()){Module["onExit"]?.(code);ABORT=true}quit_(code,new ExitStatus(code))};var exitJS=(status,implicit)=>{EXITSTATUS=status;_proc_exit(status)};var _exit=exitJS;var maybeExit=()=>{if(!keepRuntimeAlive()){try{_exit(EXITSTATUS)}catch(e){handleException(e)}}};var callUserCallback=func=>{if(ABORT){return}try{return func()}catch(e){handleException(e)}finally{maybeExit()}};var _emscripten_get_now=()=>performance.now();var __setitimer_js=(which,timeout_ms)=>{if(timers[which]){clearTimeout(timers[which].id);delete timers[which]}if(!timeout_ms)return 0;var id=setTimeout(()=>{delete timers[which];callUserCallback(()=>__emscripten_timeout(which,_emscripten_get_now()))},timeout_ms);timers[which]={id,timeout_ms};return 0};var __tzset_js=(timezone,daylight,std_name,dst_name)=>{var currentYear=(new Date).getFullYear();var winter=new Date(currentYear,0,1);var summer=new Date(currentYear,6,1);var winterOffset=winter.getTimezoneOffset();var summerOffset=summer.getTimezoneOffset();var stdTimezoneOffset=Math.max(winterOffset,summerOffset);HEAPU32[timezone>>2]=stdTimezoneOffset*60;HEAP32[daylight>>2]=Number(winterOffset!=summerOffset);var extractZone=timezoneOffset=>{var sign=timezoneOffset>=0?"-":"+";var absOffset=Math.abs(timezoneOffset);var hours=String(Math.floor(absOffset/60)).padStart(2,"0");var minutes=String(absOffset%60).padStart(2,"0");return`UTC${sign}${hours}${minutes}`};var winterName=extractZone(winterOffset);var summerName=extractZone(summerOffset);if(summerOffset<winterOffset){stringToUTF8(winterName,std_name,17);stringToUTF8(summerName,dst_name,17)}else{stringToUTF8(winterName,dst_name,17);stringToUTF8(summerName,std_name,17)}};var _emscripten_date_now=()=>Date.now();var getHeapMax=()=>2147483648;var growMemory=size=>{var oldHeapSize=wasmMemory.buffer.byteLength;var pages=(size-oldHeapSize+65535)/65536|0;try{wasmMemory.grow(pages);updateMemoryViews();return 1}catch(e){}};var _emscripten_resize_heap=requestedSize=>{var oldSize=HEAPU8.length;requestedSize>>>=0;var maxHeapSize=getHeapMax();if(requestedSize>maxHeapSize){return false}for(var cutDown=1;cutDown<=4;cutDown*=2){var overGrownHeapSize=oldSize*(1+.2/cutDown);overGrownHeapSize=Math.min(overGrownHeapSize,requestedSize+100663296);var newSize=Math.min(maxHeapSize,alignMemory(Math.max(requestedSize,overGrownHeapSize),65536));var replacement=growMemory(newSize);if(replacement){return true}}return false};var ENV={};var getExecutableName=()=>thisProgram||"./this.program";var getEnvStrings=()=>{if(!getEnvStrings.strings){var lang=(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8";var env={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:lang,_:getExecutableName()};for(var x in ENV){if(ENV[x]===undefined)delete env[x];else env[x]=ENV[x]}var strings=[];for(var x in env){strings.push(`${x}=${env[x]}`)}getEnvStrings.strings=strings}return getEnvStrings.strings};var _environ_get=(__environ,environ_buf)=>{var bufSize=0;var envp=0;for(var string of getEnvStrings()){var ptr=environ_buf+bufSize;HEAPU32[__environ+envp>>2]=ptr;bufSize+=stringToUTF8(string,ptr,Infinity)+1;envp+=4}return 0};var _environ_sizes_get=(penviron_count,penviron_buf_size)=>{var strings=getEnvStrings();HEAPU32[penviron_count>>2]=strings.length;var bufSize=0;for(var string of strings){bufSize+=lengthBytesUTF8(string)+1}HEAPU32[penviron_buf_size>>2]=bufSize;return 0};function _fd_close(fd){try{var stream=SYSCALLS.getStreamFromFD(fd);FS.close(stream);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}function _fd_fdstat_get(fd,pbuf){try{var rightsBase=0;var rightsInheriting=0;var flags=0;{var stream=SYSCALLS.getStreamFromFD(fd);var type=stream.tty?2:FS.isDir(stream.mode)?3:FS.isLink(stream.mode)?7:4}HEAP8[pbuf]=type;HEAP16[pbuf+2>>1]=flags;tempI64=[rightsBase>>>0,(tempDouble=rightsBase,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[pbuf+8>>2]=tempI64[0],HEAP32[pbuf+12>>2]=tempI64[1];tempI64=[rightsInheriting>>>0,(tempDouble=rightsInheriting,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[pbuf+16>>2]=tempI64[0],HEAP32[pbuf+20>>2]=tempI64[1];return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}var doReadv=(stream,iov,iovcnt,offset)=>{var ret=0;for(var i=0;i<iovcnt;i++){var ptr=HEAPU32[iov>>2];var len=HEAPU32[iov+4>>2];iov+=8;var curr=FS.read(stream,HEAP8,ptr,len,offset);if(curr<0)return-1;ret+=curr;if(curr<len)break;if(typeof offset!="undefined"){offset+=curr}}return ret};function _fd_read(fd,iov,iovcnt,pnum){try{var stream=SYSCALLS.getStreamFromFD(fd);var num=doReadv(stream,iov,iovcnt);HEAPU32[pnum>>2]=num;return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}function _fd_seek(fd,offset_low,offset_high,whence,newOffset){var offset=convertI32PairToI53Checked(offset_low,offset_high);try{if(isNaN(offset))return 61;var stream=SYSCALLS.getStreamFromFD(fd);FS.llseek(stream,offset,whence);tempI64=[stream.position>>>0,(tempDouble=stream.position,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[newOffset>>2]=tempI64[0],HEAP32[newOffset+4>>2]=tempI64[1];if(stream.getdents&&offset===0&&whence===0)stream.getdents=null;return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}var _fd_sync=function(fd){let innerFunc=()=>{try{var stream=SYSCALLS.getStreamFromFD(fd);var rtn=stream.stream_ops?.fsync?.(stream);return new Promise(resolve=>{var mount=stream.node.mount;if(mount?.type.syncfs){mount.type.syncfs(mount,false,err=>resolve(err?29:0))}else{resolve(rtn)}})}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}};return Asyncify.handleAsync(innerFunc)};_fd_sync.isAsync=true;var doWritev=(stream,iov,iovcnt,offset)=>{var ret=0;for(var i=0;i<iovcnt;i++){var ptr=HEAPU32[iov>>2];var len=HEAPU32[iov+4>>2];iov+=8;var curr=FS.write(stream,HEAP8,ptr,len,offset);if(curr<0)return-1;ret+=curr;if(curr<len){break}if(typeof offset!="undefined"){offset+=curr}}return ret};function _fd_write(fd,iov,iovcnt,pnum){try{var stream=SYSCALLS.getStreamFromFD(fd);var num=doWritev(stream,iov,iovcnt);HEAPU32[pnum>>2]=num;return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}var adapters_support=function(){const handleAsync=typeof Asyncify==="object"?Asyncify.handleAsync.bind(Asyncify):null;Module["handleAsync"]=handleAsync;const targets=new Map;Module["setCallback"]=(key,target)=>targets.set(key,target);Module["getCallback"]=key=>targets.get(key);Module["deleteCallback"]=key=>targets.delete(key);adapters_support=function(isAsync,key,...args){const receiver=targets.get(key);let methodName=null;const f=typeof receiver==="function"?receiver:receiver[methodName=UTF8ToString(args.shift())];if(isAsync){if(handleAsync){return handleAsync(()=>f.apply(receiver,args))}throw new Error("Synchronous WebAssembly cannot call async function")}const result=f.apply(receiver,args);if(typeof result?.then=="function"){console.error("unexpected Promise",f);throw new Error(`${methodName} unexpectedly returned a Promise`)}return result}};function _ipp(...args){return adapters_support(false,...args)}function _ipp_async(...args){return adapters_support(true,...args)}_ipp_async.isAsync=true;function _ippipppp(...args){return adapters_support(false,...args)}function _ippipppp_async(...args){return adapters_support(true,...args)}_ippipppp_async.isAsync=true;function _ippp(...args){return adapters_support(false,...args)}function _ippp_async(...args){return adapters_support(true,...args)}_ippp_async.isAsync=true;function _ipppi(...args){return adapters_support(false,...args)}function _ipppi_async(...args){return adapters_support(true,...args)}_ipppi_async.isAsync=true;function _ipppiii(...args){return adapters_support(false,...args)}function _ipppiii_async(...args){return adapters_support(true,...args)}_ipppiii_async.isAsync=true;function _ipppiiip(...args){return adapters_support(false,...args)}function _ipppiiip_async(...args){return adapters_support(true,...args)}_ipppiiip_async.isAsync=true;function _ipppip(...args){return adapters_support(false,...args)}function _ipppip_async(...args){return adapters_support(true,...args)}_ipppip_async.isAsync=true;function _ipppj(...args){return adapters_support(false,...args)}function _ipppj_async(...args){return adapters_support(true,...args)}_ipppj_async.isAsync=true;function _ipppp(...args){return adapters_support(false,...args)}function _ipppp_async(...args){return adapters_support(true,...args)}_ipppp_async.isAsync=true;function _ippppi(...args){return adapters_support(false,...args)}function _ippppi_async(...args){return adapters_support(true,...args)}_ippppi_async.isAsync=true;function _ippppij(...args){return adapters_support(false,...args)}function _ippppij_async(...args){return adapters_support(true,...args)}_ippppij_async.isAsync=true;function _ippppip(...args){return adapters_support(false,...args)}function _ippppip_async(...args){return adapters_support(true,...args)}_ippppip_async.isAsync=true;function _ipppppip(...args){return adapters_support(false,...args)}function _ipppppip_async(...args){return adapters_support(true,...args)}_ipppppip_async.isAsync=true;function _random_get(buffer,size){try{randomFill(HEAPU8.subarray(buffer,buffer+size));return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}function _vppippii(...args){return adapters_support(false,...args)}function _vppippii_async(...args){return adapters_support(true,...args)}_vppippii_async.isAsync=true;function _vppp(...args){return adapters_support(false,...args)}function _vppp_async(...args){return adapters_support(true,...args)}_vppp_async.isAsync=true;function _vpppip(...args){return adapters_support(false,...args)}function _vpppip_async(...args){return adapters_support(true,...args)}_vpppip_async.isAsync=true;var runAndAbortIfError=func=>{try{return func()}catch(e){abort(e)}};var runtimeKeepalivePush=()=>{runtimeKeepaliveCounter+=1};var runtimeKeepalivePop=()=>{runtimeKeepaliveCounter-=1};var Asyncify={instrumentWasmImports(imports){var importPattern=/^(ipp|ipp_async|ippp|ippp_async|vppp|vppp_async|ipppj|ipppj_async|ipppi|ipppi_async|ipppp|ipppp_async|ipppip|ipppip_async|vpppip|vpppip_async|ippppi|ippppi_async|ippppij|ippppij_async|ipppiii|ipppiii_async|ippppip|ippppip_async|ippipppp|ippipppp_async|ipppppip|ipppppip_async|ipppiiip|ipppiiip_async|vppippii|vppippii_async|invoke_.*|__asyncjs__.*)$/;for(let[x,original]of Object.entries(imports)){if(typeof original=="function"){let isAsyncifyImport=original.isAsync||importPattern.test(x)}}},instrumentFunction(original){var wrapper=(...args)=>{Asyncify.exportCallStack.push(original);try{return original(...args)}finally{if(!ABORT){var top=Asyncify.exportCallStack.pop();Asyncify.maybeStopUnwind()}}};Asyncify.funcWrappers.set(original,wrapper);return wrapper},instrumentWasmExports(exports){var ret={};for(let[x,original]of Object.entries(exports)){if(typeof original=="function"){var wrapper=Asyncify.instrumentFunction(original);ret[x]=wrapper}else{ret[x]=original}}return ret},State:{Normal:0,Unwinding:1,Rewinding:2,Disabled:3},state:0,StackSize:16384,currData:null,handleSleepReturnValue:0,exportCallStack:[],callstackFuncToId:new Map,callStackIdToFunc:new Map,funcWrappers:new Map,callStackId:0,asyncPromiseHandlers:null,sleepCallbacks:[],getCallStackId(func){if(!Asyncify.callstackFuncToId.has(func)){var id=Asyncify.callStackId++;Asyncify.callstackFuncToId.set(func,id);Asyncify.callStackIdToFunc.set(id,func)}return Asyncify.callstackFuncToId.get(func)},maybeStopUnwind(){if(Asyncify.currData&&Asyncify.state===Asyncify.State.Unwinding&&Asyncify.exportCallStack.length===0){Asyncify.state=Asyncify.State.Normal;runAndAbortIfError(_asyncify_stop_unwind);if(typeof Fibers!="undefined"){Fibers.trampoline()}}},whenDone(){return new Promise((resolve,reject)=>{Asyncify.asyncPromiseHandlers={resolve,reject}})},allocateData(){var ptr=_malloc(12+Asyncify.StackSize);Asyncify.setDataHeader(ptr,ptr+12,Asyncify.StackSize);Asyncify.setDataRewindFunc(ptr);return ptr},setDataHeader(ptr,stack,stackSize){HEAPU32[ptr>>2]=stack;HEAPU32[ptr+4>>2]=stack+stackSize},setDataRewindFunc(ptr){var bottomOfCallStack=Asyncify.exportCallStack[0];var rewindId=Asyncify.getCallStackId(bottomOfCallStack);HEAP32[ptr+8>>2]=rewindId},getDataRewindFunc(ptr){var id=HEAP32[ptr+8>>2];var func=Asyncify.callStackIdToFunc.get(id);return func},doRewind(ptr){var original=Asyncify.getDataRewindFunc(ptr);var func=Asyncify.funcWrappers.get(original);return callUserCallback(func)},handleSleep(startAsync){if(ABORT)return;if(Asyncify.state===Asyncify.State.Normal){var reachedCallback=false;var reachedAfterCallback=false;startAsync((handleSleepReturnValue=0)=>{if(ABORT)return;Asyncify.handleSleepReturnValue=handleSleepReturnValue;reachedCallback=true;if(!reachedAfterCallback){return}Asyncify.state=Asyncify.State.Rewinding;runAndAbortIfError(()=>_asyncify_start_rewind(Asyncify.currData));if(typeof MainLoop!="undefined"&&MainLoop.func){MainLoop.resume()}var asyncWasmReturnValue,isError=false;try{asyncWasmReturnValue=Asyncify.doRewind(Asyncify.currData)}catch(err){asyncWasmReturnValue=err;isError=true}var handled=false;if(!Asyncify.currData){var asyncPromiseHandlers=Asyncify.asyncPromiseHandlers;if(asyncPromiseHandlers){Asyncify.asyncPromiseHandlers=null;(isError?asyncPromiseHandlers.reject:asyncPromiseHandlers.resolve)(asyncWasmReturnValue);handled=true}}if(isError&&!handled){throw asyncWasmReturnValue}});reachedAfterCallback=true;if(!reachedCallback){Asyncify.state=Asyncify.State.Unwinding;Asyncify.currData=Asyncify.allocateData();if(typeof MainLoop!="undefined"&&MainLoop.func){MainLoop.pause()}runAndAbortIfError(()=>_asyncify_start_unwind(Asyncify.currData))}}else if(Asyncify.state===Asyncify.State.Rewinding){Asyncify.state=Asyncify.State.Normal;runAndAbortIfError(_asyncify_stop_rewind);_free(Asyncify.currData);Asyncify.currData=null;Asyncify.sleepCallbacks.forEach(callUserCallback)}else{abort(`invalid state: ${Asyncify.state}`)}return Asyncify.handleSleepReturnValue},handleAsync:startAsync=>Asyncify.handleSleep(async wakeUp=>{wakeUp(await startAsync())})};var getWasmTableEntry=funcPtr=>wasmTable.get(funcPtr);var updateTableMap=(offset,count)=>{if(functionsInTableMap){for(var i=offset;i<offset+count;i++){var item=getWasmTableEntry(i);if(item){functionsInTableMap.set(item,i)}}}};var functionsInTableMap;var getFunctionAddress=func=>{if(!functionsInTableMap){functionsInTableMap=new WeakMap;updateTableMap(0,wasmTable.length)}return functionsInTableMap.get(func)||0};var freeTableIndexes=[];var getEmptyTableSlot=()=>{if(freeTableIndexes.length){return freeTableIndexes.pop()}return wasmTable["grow"](1)};var setWasmTableEntry=(idx,func)=>wasmTable.set(idx,func);var uleb128EncodeWithLen=arr=>{const n=arr.length;return[n%128|128,n>>7,...arr]};var wasmTypeCodes={i:127,p:127,j:126,f:125,d:124,e:111};var generateTypePack=types=>uleb128EncodeWithLen(Array.from(types,type=>{var code=wasmTypeCodes[type];return code}));var convertJsFunctionToWasm=(func,sig)=>{var bytes=Uint8Array.of(0,97,115,109,1,0,0,0,1,...uleb128EncodeWithLen([1,96,...generateTypePack(sig.slice(1)),...generateTypePack(sig[0]==="v"?"":sig[0])]),2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0);var module=new WebAssembly.Module(bytes);var instance=new WebAssembly.Instance(module,{e:{f:func}});var wrappedFunc=instance.exports["f"];return wrappedFunc};var addFunction=(func,sig)=>{var rtn=getFunctionAddress(func);if(rtn){return rtn}var ret=getEmptyTableSlot();try{setWasmTableEntry(ret,func)}catch(err){if(!(err instanceof TypeError)){throw err}var wrapped=convertJsFunctionToWasm(func,sig);setWasmTableEntry(ret,wrapped)}functionsInTableMap.set(func,ret);return ret};var getCFunc=ident=>{var func=Module["_"+ident];return func};var writeArrayToMemory=(array,buffer)=>{HEAP8.set(array,buffer)};var stackAlloc=sz=>__emscripten_stack_alloc(sz);var stringToUTF8OnStack=str=>{var size=lengthBytesUTF8(str)+1;var ret=stackAlloc(size);stringToUTF8(str,ret,size);return ret};var ccall=(ident,returnType,argTypes,args,opts)=>{var toC={string:str=>{var ret=0;if(str!==null&&str!==undefined&&str!==0){ret=stringToUTF8OnStack(str)}return ret},array:arr=>{var ret=stackAlloc(arr.length);writeArrayToMemory(arr,ret);return ret}};function convertReturnValue(ret){if(returnType==="string"){return UTF8ToString(ret)}if(returnType==="boolean")return Boolean(ret);return ret}var func=getCFunc(ident);var cArgs=[];var stack=0;if(args){for(var i=0;i<args.length;i++){var converter=toC[argTypes[i]];if(converter){if(stack===0)stack=stackSave();cArgs[i]=converter(args[i])}else{cArgs[i]=args[i]}}}var previousAsync=Asyncify.currData;var ret=func(...cArgs);function onDone(ret){runtimeKeepalivePop();if(stack!==0)stackRestore(stack);return convertReturnValue(ret)}var asyncMode=opts?.async;runtimeKeepalivePush();if(Asyncify.currData!=previousAsync){return Asyncify.whenDone().then(onDone)}ret=onDone(ret);if(asyncMode)return Promise.resolve(ret);return ret};var cwrap=(ident,returnType,argTypes,opts)=>{var numericArgs=!argTypes||argTypes.every(type=>type==="number"||type==="boolean");var numericRet=returnType!=="string";if(numericRet&&numericArgs&&!opts){return getCFunc(ident)}return(...args)=>ccall(ident,returnType,argTypes,args,opts)};var getTempRet0=val=>__emscripten_tempret_get();var stringToUTF16=(str,outPtr,maxBytesToWrite)=>{maxBytesToWrite??=2147483647;if(maxBytesToWrite<2)return 0;maxBytesToWrite-=2;var startPtr=outPtr;var numCharsToWrite=maxBytesToWrite<str.length*2?maxBytesToWrite/2:str.length;for(var i=0;i<numCharsToWrite;++i){var codeUnit=str.charCodeAt(i);HEAP16[outPtr>>1]=codeUnit;outPtr+=2}HEAP16[outPtr>>1]=0;return outPtr-startPtr};var stringToUTF32=(str,outPtr,maxBytesToWrite)=>{maxBytesToWrite??=2147483647;if(maxBytesToWrite<4)return 0;var startPtr=outPtr;var endPtr=startPtr+maxBytesToWrite-4;for(var i=0;i<str.length;++i){var codePoint=str.codePointAt(i);if(codePoint>65535){i++}HEAP32[outPtr>>2]=codePoint;outPtr+=4;if(outPtr+4>endPtr)break}HEAP32[outPtr>>2]=0;return outPtr-startPtr};var AsciiToString=ptr=>{var str="";while(1){var ch=HEAPU8[ptr++];if(!ch)return str;str+=String.fromCharCode(ch)}};var UTF16Decoder=new TextDecoder("utf-16le");var UTF16ToString=(ptr,maxBytesToRead,ignoreNul)=>{var idx=ptr>>1;var endIdx=findStringEnd(HEAPU16,idx,maxBytesToRead/2,ignoreNul);return UTF16Decoder.decode(HEAPU16.subarray(idx,endIdx))};var UTF32ToString=(ptr,maxBytesToRead,ignoreNul)=>{var str="";var startIdx=ptr>>2;for(var i=0;!(i>=maxBytesToRead/4);i++){var utf32=HEAPU32[startIdx+i];if(!utf32&&!ignoreNul)break;str+=String.fromCodePoint(utf32)}return str};var intArrayToString=array=>{var ret=[];for(var i=0;i<array.length;i++){var chr=array[i];if(chr>255){chr&=255}ret.push(String.fromCharCode(chr))}return ret.join("")};var _getTempRet0=getTempRet0;FS.createPreloadedFile=FS_createPreloadedFile;FS.preloadFile=FS_preloadFile;FS.staticInit();adapters_support();{if(Module["noExitRuntime"])noExitRuntime=Module["noExitRuntime"];if(Module["preloadPlugins"])preloadPlugins=Module["preloadPlugins"];if(Module["print"])out=Module["print"];if(Module["printErr"])err=Module["printErr"];if(Module["wasmBinary"])wasmBinary=Module["wasmBinary"];if(Module["arguments"])arguments_=Module["arguments"];if(Module["thisProgram"])thisProgram=Module["thisProgram"];if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].shift()()}}}Module["getTempRet0"]=getTempRet0;Module["ccall"]=ccall;Module["cwrap"]=cwrap;Module["addFunction"]=addFunction;Module["setValue"]=setValue;Module["getValue"]=getValue;Module["UTF8ToString"]=UTF8ToString;Module["stringToUTF8"]=stringToUTF8;Module["lengthBytesUTF8"]=lengthBytesUTF8;Module["intArrayFromString"]=intArrayFromString;Module["intArrayToString"]=intArrayToString;Module["AsciiToString"]=AsciiToString;Module["UTF16ToString"]=UTF16ToString;Module["stringToUTF16"]=stringToUTF16;Module["UTF32ToString"]=UTF32ToString;Module["stringToUTF32"]=stringToUTF32;Module["writeArrayToMemory"]=writeArrayToMemory;Module["_getTempRet0"]=_getTempRet0;var _powersync_init_static,_sqlite3_status64,_sqlite3_status,_sqlite3_msize,_sqlite3_db_status,_sqlite3_vfs_find,_sqlite3_vfs_register,_sqlite3_vfs_unregister,_sqlite3_release_memory,_sqlite3_soft_heap_limit64,_sqlite3_memory_used,_sqlite3_hard_heap_limit64,_sqlite3_memory_highwater,_sqlite3_malloc,_sqlite3_malloc64,_sqlite3_free,_sqlite3_realloc,_sqlite3_realloc64,_sqlite3_str_vappendf,_sqlite3_str_append,_sqlite3_str_appendchar,_sqlite3_str_appendall,_sqlite3_str_appendf,_sqlite3_str_finish,_sqlite3_str_errcode,_sqlite3_str_length,_sqlite3_str_value,_sqlite3_str_reset,_sqlite3_str_new,_sqlite3_vmprintf,_sqlite3_mprintf,_sqlite3_vsnprintf,_sqlite3_snprintf,_sqlite3_log,_sqlite3_randomness,_sqlite3_stricmp,_sqlite3_strnicmp,_sqlite3_os_init,_sqlite3_os_end,_sqlite3_serialize,_sqlite3_prepare_v2,_sqlite3_step,_sqlite3_column_int64,_sqlite3_reset,_sqlite3_exec,_sqlite3_column_int,_sqlite3_finalize,_sqlite3_deserialize,_sqlite3_database_file_object,_sqlite3_backup_init,_sqlite3_backup_step,_sqlite3_backup_finish,_sqlite3_backup_remaining,_sqlite3_backup_pagecount,_sqlite3_clear_bindings,_sqlite3_value_blob,_sqlite3_value_text,_sqlite3_value_bytes,_sqlite3_value_bytes16,_sqlite3_value_double,_sqlite3_value_int,_sqlite3_value_int64,_sqlite3_value_subtype,_sqlite3_value_pointer,_sqlite3_value_text16,_sqlite3_value_text16be,_sqlite3_value_text16le,_sqlite3_value_type,_sqlite3_value_encoding,_sqlite3_value_nochange,_sqlite3_value_frombind,_sqlite3_value_dup,_sqlite3_value_free,_sqlite3_result_blob,_sqlite3_result_blob64,_sqlite3_result_double,_sqlite3_result_error,_sqlite3_result_error16,_sqlite3_result_int,_sqlite3_result_int64,_sqlite3_result_null,_sqlite3_result_pointer,_sqlite3_result_subtype,_sqlite3_result_text,_sqlite3_result_text64,_sqlite3_result_text16,_sqlite3_result_text16be,_sqlite3_result_text16le,_sqlite3_result_value,_sqlite3_result_error_toobig,_sqlite3_result_zeroblob,_sqlite3_result_zeroblob64,_sqlite3_result_error_code,_sqlite3_result_error_nomem,_sqlite3_user_data,_sqlite3_context_db_handle,_sqlite3_vtab_nochange,_sqlite3_vtab_in_first,_sqlite3_vtab_in_next,_sqlite3_aggregate_context,_sqlite3_get_auxdata,_sqlite3_set_auxdata,_sqlite3_column_count,_sqlite3_data_count,_sqlite3_column_blob,_sqlite3_column_bytes,_sqlite3_column_bytes16,_sqlite3_column_double,_sqlite3_column_text,_sqlite3_column_value,_sqlite3_column_text16,_sqlite3_column_type,_sqlite3_column_name,_sqlite3_column_name16,_sqlite3_bind_blob,_sqlite3_bind_blob64,_sqlite3_bind_double,_sqlite3_bind_int,_sqlite3_bind_int64,_sqlite3_bind_null,_sqlite3_bind_pointer,_sqlite3_bind_text,_sqlite3_bind_text64,_sqlite3_bind_text16,_sqlite3_bind_value,_sqlite3_bind_zeroblob,_sqlite3_bind_zeroblob64,_sqlite3_bind_parameter_count,_sqlite3_bind_parameter_name,_sqlite3_bind_parameter_index,_sqlite3_db_handle,_sqlite3_stmt_readonly,_sqlite3_stmt_isexplain,_sqlite3_stmt_explain,_sqlite3_stmt_busy,_sqlite3_next_stmt,_sqlite3_stmt_status,_sqlite3_sql,_sqlite3_expanded_sql,_sqlite3_value_numeric_type,_sqlite3_blob_open,_sqlite3_blob_close,_sqlite3_blob_read,_sqlite3_blob_write,_sqlite3_blob_bytes,_sqlite3_blob_reopen,_sqlite3_set_authorizer,_sqlite3_strglob,_sqlite3_strlike,_sqlite3_errmsg,_sqlite3_load_extension,_sqlite3_enable_load_extension,_sqlite3_auto_extension,_sqlite3_cancel_auto_extension,_sqlite3_reset_auto_extension,_sqlite3_prepare,_sqlite3_prepare_v3,_sqlite3_prepare16,_sqlite3_prepare16_v2,_sqlite3_prepare16_v3,_sqlite3_get_table,_sqlite3_free_table,_sqlite3_create_module,_sqlite3_create_module_v2,_sqlite3_drop_modules,_sqlite3_declare_vtab,_sqlite3_vtab_on_conflict,_sqlite3_vtab_config,_sqlite3_vtab_collation,_sqlite3_vtab_in,_sqlite3_vtab_rhs_value,_sqlite3_vtab_distinct,_sqlite3_keyword_name,_sqlite3_keyword_count,_sqlite3_keyword_check,_sqlite3_complete,_sqlite3_complete16,_sqlite3_libversion,_sqlite3_libversion_number,_sqlite3_threadsafe,_sqlite3_initialize,_sqlite3_shutdown,_sqlite3_config,_sqlite3_db_mutex,_sqlite3_db_release_memory,_sqlite3_db_cacheflush,_sqlite3_db_config,_sqlite3_last_insert_rowid,_sqlite3_set_last_insert_rowid,_sqlite3_changes64,_sqlite3_changes,_sqlite3_total_changes64,_sqlite3_total_changes,_sqlite3_txn_state,_sqlite3_close,_sqlite3_close_v2,_sqlite3_busy_handler,_sqlite3_progress_handler,_sqlite3_busy_timeout,_sqlite3_interrupt,_sqlite3_is_interrupted,_sqlite3_create_function,_sqlite3_create_function_v2,_sqlite3_create_window_function,_sqlite3_create_function16,_sqlite3_overload_function,_sqlite3_trace_v2,_sqlite3_commit_hook,_sqlite3_update_hook,_sqlite3_rollback_hook,_sqlite3_autovacuum_pages,_sqlite3_wal_autocheckpoint,_sqlite3_wal_hook,_sqlite3_wal_checkpoint_v2,_sqlite3_wal_checkpoint,_sqlite3_error_offset,_sqlite3_errmsg16,_sqlite3_errcode,_sqlite3_extended_errcode,_sqlite3_system_errno,_sqlite3_errstr,_sqlite3_limit,_sqlite3_open,_sqlite3_open_v2,_sqlite3_open16,_sqlite3_create_collation,_sqlite3_create_collation_v2,_sqlite3_create_collation16,_sqlite3_collation_needed,_sqlite3_collation_needed16,_sqlite3_get_clientdata,_sqlite3_set_clientdata,_sqlite3_get_autocommit,_sqlite3_table_column_metadata,_sqlite3_sleep,_sqlite3_extended_result_codes,_sqlite3_file_control,_sqlite3_test_control,_sqlite3_create_filename,_sqlite3_free_filename,_sqlite3_uri_parameter,_sqlite3_uri_key,_sqlite3_uri_boolean,_sqlite3_uri_int64,_sqlite3_filename_database,_sqlite3_filename_journal,_sqlite3_filename_wal,_sqlite3_db_name,_sqlite3_db_filename,_sqlite3_db_readonly,_sqlite3_compileoption_used,_sqlite3_compileoption_get,_sqlite3_sourceid,_sqlite3mc_config,_sqlite3mc_cipher_count,_sqlite3mc_cipher_index,_sqlite3mc_cipher_name,_sqlite3mc_config_cipher,_sqlite3mc_vfs_create,_memcmp,_malloc,_free,_memset,_RegisterExtensionFunctions,_getSqliteFree,_main,_libauthorizer_set_authorizer,_libfunction_create_function,_libhook_commit_hook,_libhook_update_hook,_libprogress_progress_handler,_libvfs_vfs_register,_memcpy,_emscripten_builtin_memalign,__emscripten_timeout,__emscripten_tempret_get,__emscripten_stack_restore,__emscripten_stack_alloc,_emscripten_stack_get_current,dynCall_iii,dynCall_viiiij,dynCall_ii,dynCall_vi,dynCall_iiii,dynCall_viii,dynCall_iiiiiii,dynCall_iiiiii,dynCall_iiiii,dynCall_vii,dynCall_viiii,dynCall_iiiiiiiii,dynCall_vijii,dynCall_viiiii,dynCall_iiiij,dynCall_viji,dynCall_iij,dynCall_iidiiii,dynCall_iijii,dynCall_iiji,dynCall_i,dynCall_iiiiiij,dynCall_iiid,dynCall_iiij,dynCall_dii,dynCall_jii,dynCall_ji,dynCall_vid,dynCall_vij,dynCall_iiiiiiiiii,dynCall_di,dynCall_iiiiijii,dynCall_j,dynCall_jj,dynCall_jiij,dynCall_iiiiji,dynCall_iiiijii,dynCall_ij,dynCall_v,dynCall_viiji,dynCall_viijii,dynCall_iiiiiiiiiii,dynCall_iiiijji,dynCall_iiiiiiii,_asyncify_start_unwind,_asyncify_stop_unwind,_asyncify_start_rewind,_asyncify_stop_rewind,memory,_sqlite3_version,__indirect_function_table,wasmMemory,wasmTable;function assignWasmExports(wasmExports){_powersync_init_static=Module["_powersync_init_static"]=wasmExports["sa"];_sqlite3_status64=Module["_sqlite3_status64"]=wasmExports["ta"];_sqlite3_status=Module["_sqlite3_status"]=wasmExports["ua"];_sqlite3_msize=Module["_sqlite3_msize"]=wasmExports["va"];_sqlite3_db_status=Module["_sqlite3_db_status"]=wasmExports["wa"];_sqlite3_vfs_find=Module["_sqlite3_vfs_find"]=wasmExports["xa"];_sqlite3_vfs_register=Module["_sqlite3_vfs_register"]=wasmExports["ya"];_sqlite3_vfs_unregister=Module["_sqlite3_vfs_unregister"]=wasmExports["za"];_sqlite3_release_memory=Module["_sqlite3_release_memory"]=wasmExports["Aa"];_sqlite3_soft_heap_limit64=Module["_sqlite3_soft_heap_limit64"]=wasmExports["Ba"];_sqlite3_memory_used=Module["_sqlite3_memory_used"]=wasmExports["Ca"];_sqlite3_hard_heap_limit64=Module["_sqlite3_hard_heap_limit64"]=wasmExports["Da"];_sqlite3_memory_highwater=Module["_sqlite3_memory_highwater"]=wasmExports["Ea"];_sqlite3_malloc=Module["_sqlite3_malloc"]=wasmExports["Fa"];_sqlite3_malloc64=Module["_sqlite3_malloc64"]=wasmExports["Ga"];_sqlite3_free=Module["_sqlite3_free"]=wasmExports["Ha"];_sqlite3_realloc=Module["_sqlite3_realloc"]=wasmExports["Ia"];_sqlite3_realloc64=Module["_sqlite3_realloc64"]=wasmExports["Ja"];_sqlite3_str_vappendf=Module["_sqlite3_str_vappendf"]=wasmExports["Ka"];_sqlite3_str_append=Module["_sqlite3_str_append"]=wasmExports["La"];_sqlite3_str_appendchar=Module["_sqlite3_str_appendchar"]=wasmExports["Ma"];_sqlite3_str_appendall=Module["_sqlite3_str_appendall"]=wasmExports["Na"];_sqlite3_str_appendf=Module["_sqlite3_str_appendf"]=wasmExports["Oa"];_sqlite3_str_finish=Module["_sqlite3_str_finish"]=wasmExports["Pa"];_sqlite3_str_errcode=Module["_sqlite3_str_errcode"]=wasmExports["Qa"];_sqlite3_str_length=Module["_sqlite3_str_length"]=wasmExports["Ra"];_sqlite3_str_value=Module["_sqlite3_str_value"]=wasmExports["Sa"];_sqlite3_str_reset=Module["_sqlite3_str_reset"]=wasmExports["Ta"];_sqlite3_str_new=Module["_sqlite3_str_new"]=wasmExports["Ua"];_sqlite3_vmprintf=Module["_sqlite3_vmprintf"]=wasmExports["Va"];_sqlite3_mprintf=Module["_sqlite3_mprintf"]=wasmExports["Wa"];_sqlite3_vsnprintf=Module["_sqlite3_vsnprintf"]=wasmExports["Xa"];_sqlite3_snprintf=Module["_sqlite3_snprintf"]=wasmExports["Ya"];_sqlite3_log=Module["_sqlite3_log"]=wasmExports["Za"];_sqlite3_randomness=Module["_sqlite3_randomness"]=wasmExports["_a"];_sqlite3_stricmp=Module["_sqlite3_stricmp"]=wasmExports["$a"];_sqlite3_strnicmp=Module["_sqlite3_strnicmp"]=wasmExports["ab"];_sqlite3_os_init=Module["_sqlite3_os_init"]=wasmExports["bb"];_sqlite3_os_end=Module["_sqlite3_os_end"]=wasmExports["cb"];_sqlite3_serialize=Module["_sqlite3_serialize"]=wasmExports["db"];_sqlite3_prepare_v2=Module["_sqlite3_prepare_v2"]=wasmExports["eb"];_sqlite3_step=Module["_sqlite3_step"]=wasmExports["fb"];_sqlite3_column_int64=Module["_sqlite3_column_int64"]=wasmExports["gb"];_sqlite3_reset=Module["_sqlite3_reset"]=wasmExports["hb"];_sqlite3_exec=Module["_sqlite3_exec"]=wasmExports["ib"];_sqlite3_column_int=Module["_sqlite3_column_int"]=wasmExports["jb"];_sqlite3_finalize=Module["_sqlite3_finalize"]=wasmExports["kb"];_sqlite3_deserialize=Module["_sqlite3_deserialize"]=wasmExports["lb"];_sqlite3_database_file_object=Module["_sqlite3_database_file_object"]=wasmExports["mb"];_sqlite3_backup_init=Module["_sqlite3_backup_init"]=wasmExports["nb"];_sqlite3_backup_step=Module["_sqlite3_backup_step"]=wasmExports["ob"];_sqlite3_backup_finish=Module["_sqlite3_backup_finish"]=wasmExports["pb"];_sqlite3_backup_remaining=Module["_sqlite3_backup_remaining"]=wasmExports["qb"];_sqlite3_backup_pagecount=Module["_sqlite3_backup_pagecount"]=wasmExports["rb"];_sqlite3_clear_bindings=Module["_sqlite3_clear_bindings"]=wasmExports["sb"];_sqlite3_value_blob=Module["_sqlite3_value_blob"]=wasmExports["tb"];_sqlite3_value_text=Module["_sqlite3_value_text"]=wasmExports["ub"];_sqlite3_value_bytes=Module["_sqlite3_value_bytes"]=wasmExports["vb"];_sqlite3_value_bytes16=Module["_sqlite3_value_bytes16"]=wasmExports["wb"];_sqlite3_value_double=Module["_sqlite3_value_double"]=wasmExports["xb"];_sqlite3_value_int=Module["_sqlite3_value_int"]=wasmExports["yb"];_sqlite3_value_int64=Module["_sqlite3_value_int64"]=wasmExports["zb"];_sqlite3_value_subtype=Module["_sqlite3_value_subtype"]=wasmExports["Ab"];_sqlite3_value_pointer=Module["_sqlite3_value_pointer"]=wasmExports["Bb"];_sqlite3_value_text16=Module["_sqlite3_value_text16"]=wasmExports["Cb"];_sqlite3_value_text16be=Module["_sqlite3_value_text16be"]=wasmExports["Db"];_sqlite3_value_text16le=Module["_sqlite3_value_text16le"]=wasmExports["Eb"];_sqlite3_value_type=Module["_sqlite3_value_type"]=wasmExports["Fb"];_sqlite3_value_encoding=Module["_sqlite3_value_encoding"]=wasmExports["Gb"];_sqlite3_value_nochange=Module["_sqlite3_value_nochange"]=wasmExports["Hb"];_sqlite3_value_frombind=Module["_sqlite3_value_frombind"]=wasmExports["Ib"];_sqlite3_value_dup=Module["_sqlite3_value_dup"]=wasmExports["Jb"];_sqlite3_value_free=Module["_sqlite3_value_free"]=wasmExports["Kb"];_sqlite3_result_blob=Module["_sqlite3_result_blob"]=wasmExports["Lb"];_sqlite3_result_blob64=Module["_sqlite3_result_blob64"]=wasmExports["Mb"];_sqlite3_result_double=Module["_sqlite3_result_double"]=wasmExports["Nb"];_sqlite3_result_error=Module["_sqlite3_result_error"]=wasmExports["Ob"];_sqlite3_result_error16=Module["_sqlite3_result_error16"]=wasmExports["Pb"];_sqlite3_result_int=Module["_sqlite3_result_int"]=wasmExports["Qb"];_sqlite3_result_int64=Module["_sqlite3_result_int64"]=wasmExports["Rb"];_sqlite3_result_null=Module["_sqlite3_result_null"]=wasmExports["Sb"];_sqlite3_result_pointer=Module["_sqlite3_result_pointer"]=wasmExports["Tb"];_sqlite3_result_subtype=Module["_sqlite3_result_subtype"]=wasmExports["Ub"];_sqlite3_result_text=Module["_sqlite3_result_text"]=wasmExports["Vb"];_sqlite3_result_text64=Module["_sqlite3_result_text64"]=wasmExports["Wb"];_sqlite3_result_text16=Module["_sqlite3_result_text16"]=wasmExports["Xb"];_sqlite3_result_text16be=Module["_sqlite3_result_text16be"]=wasmExports["Yb"];_sqlite3_result_text16le=Module["_sqlite3_result_text16le"]=wasmExports["Zb"];_sqlite3_result_value=Module["_sqlite3_result_value"]=wasmExports["_b"];_sqlite3_result_error_toobig=Module["_sqlite3_result_error_toobig"]=wasmExports["$b"];_sqlite3_result_zeroblob=Module["_sqlite3_result_zeroblob"]=wasmExports["ac"];_sqlite3_result_zeroblob64=Module["_sqlite3_result_zeroblob64"]=wasmExports["bc"];_sqlite3_result_error_code=Module["_sqlite3_result_error_code"]=wasmExports["cc"];_sqlite3_result_error_nomem=Module["_sqlite3_result_error_nomem"]=wasmExports["dc"];_sqlite3_user_data=Module["_sqlite3_user_data"]=wasmExports["ec"];_sqlite3_context_db_handle=Module["_sqlite3_context_db_handle"]=wasmExports["fc"];_sqlite3_vtab_nochange=Module["_sqlite3_vtab_nochange"]=wasmExports["gc"];_sqlite3_vtab_in_first=Module["_sqlite3_vtab_in_first"]=wasmExports["hc"];_sqlite3_vtab_in_next=Module["_sqlite3_vtab_in_next"]=wasmExports["ic"];_sqlite3_aggregate_context=Module["_sqlite3_aggregate_context"]=wasmExports["jc"];_sqlite3_get_auxdata=Module["_sqlite3_get_auxdata"]=wasmExports["kc"];_sqlite3_set_auxdata=Module["_sqlite3_set_auxdata"]=wasmExports["lc"];_sqlite3_column_count=Module["_sqlite3_column_count"]=wasmExports["mc"];_sqlite3_data_count=Module["_sqlite3_data_count"]=wasmExports["nc"];_sqlite3_column_blob=Module["_sqlite3_column_blob"]=wasmExports["oc"];_sqlite3_column_bytes=Module["_sqlite3_column_bytes"]=wasmExports["pc"];_sqlite3_column_bytes16=Module["_sqlite3_column_bytes16"]=wasmExports["qc"];_sqlite3_column_double=Module["_sqlite3_column_double"]=wasmExports["rc"];_sqlite3_column_text=Module["_sqlite3_column_text"]=wasmExports["sc"];_sqlite3_column_value=Module["_sqlite3_column_value"]=wasmExports["tc"];_sqlite3_column_text16=Module["_sqlite3_column_text16"]=wasmExports["uc"];_sqlite3_column_type=Module["_sqlite3_column_type"]=wasmExports["vc"];_sqlite3_column_name=Module["_sqlite3_column_name"]=wasmExports["wc"];_sqlite3_column_name16=Module["_sqlite3_column_name16"]=wasmExports["xc"];_sqlite3_bind_blob=Module["_sqlite3_bind_blob"]=wasmExports["yc"];_sqlite3_bind_blob64=Module["_sqlite3_bind_blob64"]=wasmExports["zc"];_sqlite3_bind_double=Module["_sqlite3_bind_double"]=wasmExports["Ac"];_sqlite3_bind_int=Module["_sqlite3_bind_int"]=wasmExports["Bc"];_sqlite3_bind_int64=Module["_sqlite3_bind_int64"]=wasmExports["Cc"];_sqlite3_bind_null=Module["_sqlite3_bind_null"]=wasmExports["Dc"];_sqlite3_bind_pointer=Module["_sqlite3_bind_pointer"]=wasmExports["Ec"];_sqlite3_bind_text=Module["_sqlite3_bind_text"]=wasmExports["Fc"];_sqlite3_bind_text64=Module["_sqlite3_bind_text64"]=wasmExports["Gc"];_sqlite3_bind_text16=Module["_sqlite3_bind_text16"]=wasmExports["Hc"];_sqlite3_bind_value=Module["_sqlite3_bind_value"]=wasmExports["Ic"];_sqlite3_bind_zeroblob=Module["_sqlite3_bind_zeroblob"]=wasmExports["Jc"];_sqlite3_bind_zeroblob64=Module["_sqlite3_bind_zeroblob64"]=wasmExports["Kc"];_sqlite3_bind_parameter_count=Module["_sqlite3_bind_parameter_count"]=wasmExports["Lc"];_sqlite3_bind_parameter_name=Module["_sqlite3_bind_parameter_name"]=wasmExports["Mc"];_sqlite3_bind_parameter_index=Module["_sqlite3_bind_parameter_index"]=wasmExports["Nc"];_sqlite3_db_handle=Module["_sqlite3_db_handle"]=wasmExports["Oc"];_sqlite3_stmt_readonly=Module["_sqlite3_stmt_readonly"]=wasmExports["Pc"];_sqlite3_stmt_isexplain=Module["_sqlite3_stmt_isexplain"]=wasmExports["Qc"];_sqlite3_stmt_explain=Module["_sqlite3_stmt_explain"]=wasmExports["Rc"];_sqlite3_stmt_busy=Module["_sqlite3_stmt_busy"]=wasmExports["Sc"];_sqlite3_next_stmt=Module["_sqlite3_next_stmt"]=wasmExports["Tc"];_sqlite3_stmt_status=Module["_sqlite3_stmt_status"]=wasmExports["Uc"];_sqlite3_sql=Module["_sqlite3_sql"]=wasmExports["Vc"];_sqlite3_expanded_sql=Module["_sqlite3_expanded_sql"]=wasmExports["Wc"];_sqlite3_value_numeric_type=Module["_sqlite3_value_numeric_type"]=wasmExports["Xc"];_sqlite3_blob_open=Module["_sqlite3_blob_open"]=wasmExports["Yc"];_sqlite3_blob_close=Module["_sqlite3_blob_close"]=wasmExports["Zc"];_sqlite3_blob_read=Module["_sqlite3_blob_read"]=wasmExports["_c"];_sqlite3_blob_write=Module["_sqlite3_blob_write"]=wasmExports["$c"];_sqlite3_blob_bytes=Module["_sqlite3_blob_bytes"]=wasmExports["ad"];_sqlite3_blob_reopen=Module["_sqlite3_blob_reopen"]=wasmExports["bd"];_sqlite3_set_authorizer=Module["_sqlite3_set_authorizer"]=wasmExports["cd"];_sqlite3_strglob=Module["_sqlite3_strglob"]=wasmExports["dd"];_sqlite3_strlike=Module["_sqlite3_strlike"]=wasmExports["ed"];_sqlite3_errmsg=Module["_sqlite3_errmsg"]=wasmExports["fd"];_sqlite3_load_extension=Module["_sqlite3_load_extension"]=wasmExports["gd"];_sqlite3_enable_load_extension=Module["_sqlite3_enable_load_extension"]=wasmExports["hd"];_sqlite3_auto_extension=Module["_sqlite3_auto_extension"]=wasmExports["id"];_sqlite3_cancel_auto_extension=Module["_sqlite3_cancel_auto_extension"]=wasmExports["jd"];_sqlite3_reset_auto_extension=Module["_sqlite3_reset_auto_extension"]=wasmExports["kd"];_sqlite3_prepare=Module["_sqlite3_prepare"]=wasmExports["ld"];_sqlite3_prepare_v3=Module["_sqlite3_prepare_v3"]=wasmExports["md"];_sqlite3_prepare16=Module["_sqlite3_prepare16"]=wasmExports["nd"];_sqlite3_prepare16_v2=Module["_sqlite3_prepare16_v2"]=wasmExports["od"];_sqlite3_prepare16_v3=Module["_sqlite3_prepare16_v3"]=wasmExports["pd"];_sqlite3_get_table=Module["_sqlite3_get_table"]=wasmExports["qd"];_sqlite3_free_table=Module["_sqlite3_free_table"]=wasmExports["rd"];_sqlite3_create_module=Module["_sqlite3_create_module"]=wasmExports["sd"];_sqlite3_create_module_v2=Module["_sqlite3_create_module_v2"]=wasmExports["td"];_sqlite3_drop_modules=Module["_sqlite3_drop_modules"]=wasmExports["ud"];_sqlite3_declare_vtab=Module["_sqlite3_declare_vtab"]=wasmExports["vd"];_sqlite3_vtab_on_conflict=Module["_sqlite3_vtab_on_conflict"]=wasmExports["wd"];_sqlite3_vtab_config=Module["_sqlite3_vtab_config"]=wasmExports["xd"];_sqlite3_vtab_collation=Module["_sqlite3_vtab_collation"]=wasmExports["yd"];_sqlite3_vtab_in=Module["_sqlite3_vtab_in"]=wasmExports["zd"];_sqlite3_vtab_rhs_value=Module["_sqlite3_vtab_rhs_value"]=wasmExports["Ad"];_sqlite3_vtab_distinct=Module["_sqlite3_vtab_distinct"]=wasmExports["Bd"];_sqlite3_keyword_name=Module["_sqlite3_keyword_name"]=wasmExports["Cd"];_sqlite3_keyword_count=Module["_sqlite3_keyword_count"]=wasmExports["Dd"];_sqlite3_keyword_check=Module["_sqlite3_keyword_check"]=wasmExports["Ed"];_sqlite3_complete=Module["_sqlite3_complete"]=wasmExports["Fd"];_sqlite3_complete16=Module["_sqlite3_complete16"]=wasmExports["Gd"];_sqlite3_libversion=Module["_sqlite3_libversion"]=wasmExports["Hd"];_sqlite3_libversion_number=Module["_sqlite3_libversion_number"]=wasmExports["Id"];_sqlite3_threadsafe=Module["_sqlite3_threadsafe"]=wasmExports["Jd"];_sqlite3_initialize=Module["_sqlite3_initialize"]=wasmExports["Kd"];_sqlite3_shutdown=Module["_sqlite3_shutdown"]=wasmExports["Ld"];_sqlite3_config=Module["_sqlite3_config"]=wasmExports["Md"];_sqlite3_db_mutex=Module["_sqlite3_db_mutex"]=wasmExports["Nd"];_sqlite3_db_release_memory=Module["_sqlite3_db_release_memory"]=wasmExports["Od"];_sqlite3_db_cacheflush=Module["_sqlite3_db_cacheflush"]=wasmExports["Pd"];_sqlite3_db_config=Module["_sqlite3_db_config"]=wasmExports["Qd"];_sqlite3_last_insert_rowid=Module["_sqlite3_last_insert_rowid"]=wasmExports["Rd"];_sqlite3_set_last_insert_rowid=Module["_sqlite3_set_last_insert_rowid"]=wasmExports["Sd"];_sqlite3_changes64=Module["_sqlite3_changes64"]=wasmExports["Td"];_sqlite3_changes=Module["_sqlite3_changes"]=wasmExports["Ud"];_sqlite3_total_changes64=Module["_sqlite3_total_changes64"]=wasmExports["Vd"];_sqlite3_total_changes=Module["_sqlite3_total_changes"]=wasmExports["Wd"];_sqlite3_txn_state=Module["_sqlite3_txn_state"]=wasmExports["Xd"];_sqlite3_close=Module["_sqlite3_close"]=wasmExports["Yd"];_sqlite3_close_v2=Module["_sqlite3_close_v2"]=wasmExports["Zd"];_sqlite3_busy_handler=Module["_sqlite3_busy_handler"]=wasmExports["_d"];_sqlite3_progress_handler=Module["_sqlite3_progress_handler"]=wasmExports["$d"];_sqlite3_busy_timeout=Module["_sqlite3_busy_timeout"]=wasmExports["ae"];_sqlite3_interrupt=Module["_sqlite3_interrupt"]=wasmExports["be"];_sqlite3_is_interrupted=Module["_sqlite3_is_interrupted"]=wasmExports["ce"];_sqlite3_create_function=Module["_sqlite3_create_function"]=wasmExports["de"];_sqlite3_create_function_v2=Module["_sqlite3_create_function_v2"]=wasmExports["ee"];_sqlite3_create_window_function=Module["_sqlite3_create_window_function"]=wasmExports["fe"];_sqlite3_create_function16=Module["_sqlite3_create_function16"]=wasmExports["ge"];_sqlite3_overload_function=Module["_sqlite3_overload_function"]=wasmExports["he"];_sqlite3_trace_v2=Module["_sqlite3_trace_v2"]=wasmExports["ie"];_sqlite3_commit_hook=Module["_sqlite3_commit_hook"]=wasmExports["je"];_sqlite3_update_hook=Module["_sqlite3_update_hook"]=wasmExports["ke"];_sqlite3_rollback_hook=Module["_sqlite3_rollback_hook"]=wasmExports["le"];_sqlite3_autovacuum_pages=Module["_sqlite3_autovacuum_pages"]=wasmExports["me"];_sqlite3_wal_autocheckpoint=Module["_sqlite3_wal_autocheckpoint"]=wasmExports["ne"];_sqlite3_wal_hook=Module["_sqlite3_wal_hook"]=wasmExports["oe"];_sqlite3_wal_checkpoint_v2=Module["_sqlite3_wal_checkpoint_v2"]=wasmExports["pe"];_sqlite3_wal_checkpoint=Module["_sqlite3_wal_checkpoint"]=wasmExports["qe"];_sqlite3_error_offset=Module["_sqlite3_error_offset"]=wasmExports["re"];_sqlite3_errmsg16=Module["_sqlite3_errmsg16"]=wasmExports["se"];_sqlite3_errcode=Module["_sqlite3_errcode"]=wasmExports["te"];_sqlite3_extended_errcode=Module["_sqlite3_extended_errcode"]=wasmExports["ue"];_sqlite3_system_errno=Module["_sqlite3_system_errno"]=wasmExports["ve"];_sqlite3_errstr=Module["_sqlite3_errstr"]=wasmExports["we"];_sqlite3_limit=Module["_sqlite3_limit"]=wasmExports["xe"];_sqlite3_open=Module["_sqlite3_open"]=wasmExports["ye"];_sqlite3_open_v2=Module["_sqlite3_open_v2"]=wasmExports["ze"];_sqlite3_open16=Module["_sqlite3_open16"]=wasmExports["Ae"];_sqlite3_create_collation=Module["_sqlite3_create_collation"]=wasmExports["Be"];_sqlite3_create_collation_v2=Module["_sqlite3_create_collation_v2"]=wasmExports["Ce"];_sqlite3_create_collation16=Module["_sqlite3_create_collation16"]=wasmExports["De"];_sqlite3_collation_needed=Module["_sqlite3_collation_needed"]=wasmExports["Ee"];_sqlite3_collation_needed16=Module["_sqlite3_collation_needed16"]=wasmExports["Fe"];_sqlite3_get_clientdata=Module["_sqlite3_get_clientdata"]=wasmExports["Ge"];_sqlite3_set_clientdata=Module["_sqlite3_set_clientdata"]=wasmExports["He"];_sqlite3_get_autocommit=Module["_sqlite3_get_autocommit"]=wasmExports["Ie"];_sqlite3_table_column_metadata=Module["_sqlite3_table_column_metadata"]=wasmExports["Je"];_sqlite3_sleep=Module["_sqlite3_sleep"]=wasmExports["Ke"];_sqlite3_extended_result_codes=Module["_sqlite3_extended_result_codes"]=wasmExports["Le"];_sqlite3_file_control=Module["_sqlite3_file_control"]=wasmExports["Me"];_sqlite3_test_control=Module["_sqlite3_test_control"]=wasmExports["Ne"];_sqlite3_create_filename=Module["_sqlite3_create_filename"]=wasmExports["Oe"];_sqlite3_free_filename=Module["_sqlite3_free_filename"]=wasmExports["Pe"];_sqlite3_uri_parameter=Module["_sqlite3_uri_parameter"]=wasmExports["Qe"];_sqlite3_uri_key=Module["_sqlite3_uri_key"]=wasmExports["Re"];_sqlite3_uri_boolean=Module["_sqlite3_uri_boolean"]=wasmExports["Se"];_sqlite3_uri_int64=Module["_sqlite3_uri_int64"]=wasmExports["Te"];_sqlite3_filename_database=Module["_sqlite3_filename_database"]=wasmExports["Ue"];_sqlite3_filename_journal=Module["_sqlite3_filename_journal"]=wasmExports["Ve"];_sqlite3_filename_wal=Module["_sqlite3_filename_wal"]=wasmExports["We"];_sqlite3_db_name=Module["_sqlite3_db_name"]=wasmExports["Xe"];_sqlite3_db_filename=Module["_sqlite3_db_filename"]=wasmExports["Ye"];_sqlite3_db_readonly=Module["_sqlite3_db_readonly"]=wasmExports["Ze"];_sqlite3_compileoption_used=Module["_sqlite3_compileoption_used"]=wasmExports["_e"];_sqlite3_compileoption_get=Module["_sqlite3_compileoption_get"]=wasmExports["$e"];_sqlite3_sourceid=Module["_sqlite3_sourceid"]=wasmExports["af"];_sqlite3mc_config=Module["_sqlite3mc_config"]=wasmExports["bf"];_sqlite3mc_cipher_count=Module["_sqlite3mc_cipher_count"]=wasmExports["cf"];_sqlite3mc_cipher_index=Module["_sqlite3mc_cipher_index"]=wasmExports["df"];_sqlite3mc_cipher_name=Module["_sqlite3mc_cipher_name"]=wasmExports["ef"];_sqlite3mc_config_cipher=Module["_sqlite3mc_config_cipher"]=wasmExports["ff"];_sqlite3mc_vfs_create=Module["_sqlite3mc_vfs_create"]=wasmExports["gf"];_memcmp=Module["_memcmp"]=wasmExports["hf"];_malloc=Module["_malloc"]=wasmExports["jf"];_free=Module["_free"]=wasmExports["kf"];_memset=Module["_memset"]=wasmExports["lf"];_RegisterExtensionFunctions=Module["_RegisterExtensionFunctions"]=wasmExports["nf"];_getSqliteFree=Module["_getSqliteFree"]=wasmExports["of"];_main=Module["_main"]=wasmExports["pf"];_libauthorizer_set_authorizer=Module["_libauthorizer_set_authorizer"]=wasmExports["qf"];_libfunction_create_function=Module["_libfunction_create_function"]=wasmExports["rf"];_libhook_commit_hook=Module["_libhook_commit_hook"]=wasmExports["sf"];_libhook_update_hook=Module["_libhook_update_hook"]=wasmExports["tf"];_libprogress_progress_handler=Module["_libprogress_progress_handler"]=wasmExports["uf"];_libvfs_vfs_register=Module["_libvfs_vfs_register"]=wasmExports["vf"];_memcpy=Module["_memcpy"]=wasmExports["wf"];_emscripten_builtin_memalign=wasmExports["yf"];__emscripten_timeout=wasmExports["zf"];__emscripten_tempret_get=wasmExports["Af"];__emscripten_stack_restore=wasmExports["Bf"];__emscripten_stack_alloc=wasmExports["Cf"];_emscripten_stack_get_current=wasmExports["Df"];dynCall_iii=dynCalls["iii"]=wasmExports["Ef"];dynCall_viiiij=dynCalls["viiiij"]=wasmExports["Ff"];dynCall_ii=dynCalls["ii"]=wasmExports["Gf"];dynCall_vi=dynCalls["vi"]=wasmExports["Hf"];dynCall_iiii=dynCalls["iiii"]=wasmExports["If"];dynCall_viii=dynCalls["viii"]=wasmExports["Jf"];dynCall_iiiiiii=dynCalls["iiiiiii"]=wasmExports["Kf"];dynCall_iiiiii=dynCalls["iiiiii"]=wasmExports["Lf"];dynCall_iiiii=dynCalls["iiiii"]=wasmExports["Mf"];dynCall_vii=dynCalls["vii"]=wasmExports["Nf"];dynCall_viiii=dynCalls["viiii"]=wasmExports["Of"];dynCall_iiiiiiiii=dynCalls["iiiiiiiii"]=wasmExports["Pf"];dynCall_vijii=dynCalls["vijii"]=wasmExports["Qf"];dynCall_viiiii=dynCalls["viiiii"]=wasmExports["Rf"];dynCall_iiiij=dynCalls["iiiij"]=wasmExports["Sf"];dynCall_viji=dynCalls["viji"]=wasmExports["Tf"];dynCall_iij=dynCalls["iij"]=wasmExports["Uf"];dynCall_iidiiii=dynCalls["iidiiii"]=wasmExports["Vf"];dynCall_iijii=dynCalls["iijii"]=wasmExports["Wf"];dynCall_iiji=dynCalls["iiji"]=wasmExports["Xf"];dynCall_i=dynCalls["i"]=wasmExports["Yf"];dynCall_iiiiiij=dynCalls["iiiiiij"]=wasmExports["Zf"];dynCall_iiid=dynCalls["iiid"]=wasmExports["_f"];dynCall_iiij=dynCalls["iiij"]=wasmExports["$f"];dynCall_dii=dynCalls["dii"]=wasmExports["ag"];dynCall_jii=dynCalls["jii"]=wasmExports["bg"];dynCall_ji=dynCalls["ji"]=wasmExports["cg"];dynCall_vid=dynCalls["vid"]=wasmExports["dg"];dynCall_vij=dynCalls["vij"]=wasmExports["eg"];dynCall_iiiiiiiiii=dynCalls["iiiiiiiiii"]=wasmExports["fg"];dynCall_di=dynCalls["di"]=wasmExports["gg"];dynCall_iiiiijii=dynCalls["iiiiijii"]=wasmExports["hg"];dynCall_j=dynCalls["j"]=wasmExports["ig"];dynCall_jj=dynCalls["jj"]=wasmExports["jg"];dynCall_jiij=dynCalls["jiij"]=wasmExports["kg"];dynCall_iiiiji=dynCalls["iiiiji"]=wasmExports["lg"];dynCall_iiiijii=dynCalls["iiiijii"]=wasmExports["mg"];dynCall_ij=dynCalls["ij"]=wasmExports["ng"];dynCall_v=dynCalls["v"]=wasmExports["og"];dynCall_viiji=dynCalls["viiji"]=wasmExports["pg"];dynCall_viijii=dynCalls["viijii"]=wasmExports["qg"];dynCall_iiiiiiiiiii=dynCalls["iiiiiiiiiii"]=wasmExports["rg"];dynCall_iiiijji=dynCalls["iiiijji"]=wasmExports["sg"];dynCall_iiiiiiii=dynCalls["iiiiiiii"]=wasmExports["tg"];_asyncify_start_unwind=wasmExports["ug"];_asyncify_stop_unwind=wasmExports["vg"];_asyncify_start_rewind=wasmExports["wg"];_asyncify_stop_rewind=wasmExports["xg"];memory=wasmMemory=wasmExports["qa"];_sqlite3_version=Module["_sqlite3_version"]=wasmExports["mf"].value;__indirect_function_table=wasmTable=wasmExports["xf"]}var wasmImports={a:___assert_fail,aa:___syscall_chmod,ca:___syscall_faccessat,ba:___syscall_fchmod,$:___syscall_fchown32,b:___syscall_fcntl64,_:___syscall_fstat64,y:___syscall_ftruncate64,U:___syscall_getcwd,Y:___syscall_lstat64,Q:___syscall_mkdirat,W:___syscall_newfstatat,O:___syscall_openat,M:___syscall_readlinkat,L:___syscall_rmdir,Z:___syscall_stat64,J:___syscall_unlinkat,I:___syscall_utimensat,ea:__abort_js,E:__emscripten_runtime_keepalive_clear,w:__localtime_js,u:__mmap_js,v:__munmap_js,F:__setitimer_js,P:__tzset_js,n:_emscripten_date_now,g:_emscripten_get_now,G:_emscripten_resize_heap,R:_environ_get,S:_environ_sizes_get,o:_fd_close,H:_fd_fdstat_get,N:_fd_read,x:_fd_seek,V:_fd_sync,K:_fd_write,s:_ipp,t:_ipp_async,la:_ippipppp,pa:_ippipppp_async,j:_ippp,k:_ippp_async,c:_ipppi,d:_ipppi_async,ha:_ipppiii,ia:_ipppiii_async,ja:_ipppiiip,ka:_ipppiiip_async,h:_ipppip,i:_ipppip_async,z:_ipppj,A:_ipppj_async,e:_ipppp,f:_ipppp_async,fa:_ippppi,ga:_ippppi_async,B:_ippppij,C:_ippppij_async,p:_ippppip,q:_ippppip_async,ma:_ipppppip,na:_ipppppip_async,D:_proc_exit,T:_random_get,oa:_vppippii,r:_vppippii_async,l:_vppp,m:_vppp_async,X:_vpppip,da:_vpppip_async};function callMain(){var entryFunction=_main;var argc=0;var argv=0;try{var ret=entryFunction(argc,argv);exitJS(ret,true);return ret}catch(e){return handleException(e)}}function run(){if(runDependencies>0){dependenciesFulfilled=run;return}preRun();if(runDependencies>0){dependenciesFulfilled=run;return}function doRun(){Module["calledRun"]=true;if(ABORT)return;initRuntime();preMain();readyPromiseResolve?.(Module);Module["onRuntimeInitialized"]?.();var noInitialRun=Module["noInitialRun"]||false;if(!noInitialRun)callMain();postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout(()=>{setTimeout(()=>Module["setStatus"](""),1);doRun()},1)}else{doRun()}}var wasmExports;wasmExports=await (createWasm());run();(function(){const AsyncFunction=Object.getPrototypeOf(async function(){}).constructor;let pAsyncFlags=0;Module["set_authorizer"]=function(db,xAuthorizer,pApp){if(pAsyncFlags){Module["deleteCallback"](pAsyncFlags);Module["_sqlite3_free"](pAsyncFlags);pAsyncFlags=0}pAsyncFlags=Module["_sqlite3_malloc"](4);setValue(pAsyncFlags,xAuthorizer instanceof AsyncFunction?1:0,"i32");const result=ccall("libauthorizer_set_authorizer","number",["number","number","number"],[db,xAuthorizer?1:0,pAsyncFlags]);if(!result&&xAuthorizer){Module["setCallback"](pAsyncFlags,(_,iAction,p3,p4,p5,p6)=>xAuthorizer(pApp,iAction,p3,p4,p5,p6))}return result}})();(function(){const AsyncFunction=Object.getPrototypeOf(async function(){}).constructor;const FUNC_METHODS=["xFunc","xStep","xFinal"];const mapFunctionNameToKey=new Map;Module["create_function"]=function(db,zFunctionName,nArg,eTextRep,pApp,xFunc,xStep,xFinal){const pAsyncFlags=Module["_sqlite3_malloc"](4);const target={xFunc,xStep,xFinal};setValue(pAsyncFlags,FUNC_METHODS.reduce((mask,method,i)=>{if(target[method]instanceof AsyncFunction){return mask|1<<i}return mask},0),"i32");const result=ccall("libfunction_create_function","number",["number","string","number","number","number","number","number","number"],[db,zFunctionName,nArg,eTextRep,pAsyncFlags,xFunc?1:0,xStep?1:0,xFinal?1:0]);if(!result){if(mapFunctionNameToKey.has(zFunctionName)){const oldKey=mapFunctionNameToKey.get(zFunctionName);Module["deleteCallback"](oldKey)}mapFunctionNameToKey.set(zFunctionName,pAsyncFlags);Module["setCallback"](pAsyncFlags,{xFunc,xStep,xFinal})}return result}})();(function(){const AsyncFunction=Object.getPrototypeOf(async function(){}).constructor;let pAsyncFlags=0;Module["update_hook"]=function(db,xUpdateHook){if(pAsyncFlags){Module["deleteCallback"](pAsyncFlags);Module["_sqlite3_free"](pAsyncFlags);pAsyncFlags=0}pAsyncFlags=Module["_sqlite3_malloc"](4);setValue(pAsyncFlags,xUpdateHook instanceof AsyncFunction?1:0,"i32");ccall("libhook_update_hook","void",["number","number","number"],[db,xUpdateHook?1:0,pAsyncFlags]);if(xUpdateHook){Module["setCallback"](pAsyncFlags,(_,iUpdateType,dbName,tblName,lo32,hi32)=>xUpdateHook(iUpdateType,dbName,tblName,lo32,hi32))}}})();(function(){const AsyncFunction=Object.getPrototypeOf(async function(){}).constructor;let pAsyncFlags=0;Module["commit_hook"]=function(db,xCommitHook){if(pAsyncFlags){Module["deleteCallback"](pAsyncFlags);Module["_sqlite3_free"](pAsyncFlags);pAsyncFlags=0}pAsyncFlags=Module["_sqlite3_malloc"](4);setValue(pAsyncFlags,xCommitHook instanceof AsyncFunction?1:0,"i32");ccall("libhook_commit_hook","void",["number","number","number"],[db,xCommitHook?1:0,pAsyncFlags]);if(xCommitHook){Module["setCallback"](pAsyncFlags,_=>xCommitHook())}}})();(function(){const AsyncFunction=Object.getPrototypeOf(async function(){}).constructor;let pAsyncFlags=0;Module["progress_handler"]=function(db,nOps,xProgress,pApp){if(pAsyncFlags){Module["deleteCallback"](pAsyncFlags);Module["_sqlite3_free"](pAsyncFlags);pAsyncFlags=0}pAsyncFlags=Module["_sqlite3_malloc"](4);setValue(pAsyncFlags,xProgress instanceof AsyncFunction?1:0,"i32");ccall("libprogress_progress_handler","number",["number","number","number","number"],[db,nOps,xProgress?1:0,pAsyncFlags]);if(xProgress){Module["setCallback"](pAsyncFlags,_=>xProgress(pApp))}}})();(function(){const VFS_METHODS=["xOpen","xDelete","xAccess","xFullPathname","xRandomness","xSleep","xCurrentTime","xGetLastError","xCurrentTimeInt64","xClose","xRead","xWrite","xTruncate","xSync","xFileSize","xLock","xUnlock","xCheckReservedLock","xFileControl","xSectorSize","xDeviceCharacteristics","xShmMap","xShmLock","xShmBarrier","xShmUnmap"];const mapVFSNameToKey=new Map;Module["vfs_register"]=function(vfs,makeDefault){let methodMask=0;let asyncMask=0;VFS_METHODS.forEach((method,i)=>{if(vfs[method]){methodMask|=1<<i;if(vfs["hasAsyncMethod"](method)){asyncMask|=1<<i}}});const vfsReturn=Module["_sqlite3_malloc"](4);try{const result=ccall("libvfs_vfs_register","number",["string","number","number","number","number","number"],[vfs.name,vfs.mxPathname,methodMask,asyncMask,makeDefault?1:0,vfsReturn]);if(!result){if(mapVFSNameToKey.has(vfs.name)){const oldKey=mapVFSNameToKey.get(vfs.name);Module["deleteCallback"](oldKey)}const key=getValue(vfsReturn,"*");mapVFSNameToKey.set(vfs.name,key);Module["setCallback"](key,vfs)}return result}finally{Module["_sqlite3_free"](vfsReturn)}}})();if(runtimeInitialized){moduleRtn=Module}else{moduleRtn=new Promise((resolve,reject)=>{readyPromiseResolve=resolve;readyPromiseReject=reject})}
;return moduleRtn}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Module);


/***/ },

/***/ "../../node_modules/.pnpm/@journeyapps+wa-sqlite@1.5.0/node_modules/@journeyapps/wa-sqlite/dist/mc-wa-sqlite.mjs"
/*!***********************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@journeyapps+wa-sqlite@1.5.0/node_modules/@journeyapps/wa-sqlite/dist/mc-wa-sqlite.mjs ***!
  \***********************************************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function Module(moduleArg={}){var moduleRtn;var Module=moduleArg;var ENVIRONMENT_IS_WEB=!!globalThis.window;var ENVIRONMENT_IS_WORKER=!!globalThis.WorkerGlobalScope;var ENVIRONMENT_IS_NODE=globalThis.process?.versions?.node&&globalThis.process?.type!="renderer";var arguments_=[];var thisProgram="./this.program";var quit_=(status,toThrow)=>{throw toThrow};var _scriptName="file:///home/runner/work/powersync-js/powersync-js/node_modules/.pnpm/@journeyapps+wa-sqlite@1.5.0/node_modules/@journeyapps/wa-sqlite/dist/mc-wa-sqlite.mjs";var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var readAsync,readBinary;if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){try{scriptDirectory=new URL(".",_scriptName).href}catch{}{if(ENVIRONMENT_IS_WORKER){readBinary=url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)}}readAsync=async url=>{var response=await fetch(url,{credentials:"same-origin"});if(response.ok){return response.arrayBuffer()}throw new Error(response.status+" : "+response.url)}}}else{}var out=console.log.bind(console);var err=console.error.bind(console);var wasmBinary;var ABORT=false;var EXITSTATUS;var readyPromiseResolve,readyPromiseReject;var HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;var runtimeInitialized=false;function updateMemoryViews(){var b=wasmMemory.buffer;HEAP8=new Int8Array(b);HEAP16=new Int16Array(b);Module["HEAPU8"]=HEAPU8=new Uint8Array(b);HEAPU16=new Uint16Array(b);Module["HEAP32"]=HEAP32=new Int32Array(b);HEAPU32=new Uint32Array(b);HEAPF32=new Float32Array(b);HEAPF64=new Float64Array(b)}function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(onPreRuns)}function initRuntime(){runtimeInitialized=true;if(!Module["noFSInit"]&&!FS.initialized)FS.init();TTY.init();wasmExports["ra"]();FS.ignorePermissions=false}function preMain(){}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(onPostRuns)}function abort(what){Module["onAbort"]?.(what);what="Aborted("+what+")";err(what);ABORT=true;what+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(what);readyPromiseReject?.(e);throw e}var wasmBinaryFile;function findWasmBinary(){if(Module["locateFile"]){return locateFile("mc-wa-sqlite.wasm")}return new URL(/* asset import */ __webpack_require__(/*! mc-wa-sqlite.wasm */ "../../node_modules/.pnpm/@journeyapps+wa-sqlite@1.5.0/node_modules/@journeyapps/wa-sqlite/dist/mc-wa-sqlite.wasm"), __webpack_require__.b).href}function getBinarySync(file){if(file==wasmBinaryFile&&wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(file)}throw"both async and sync fetching of the wasm failed"}async function getWasmBinary(binaryFile){if(!wasmBinary){try{var response=await readAsync(binaryFile);return new Uint8Array(response)}catch{}}return getBinarySync(binaryFile)}async function instantiateArrayBuffer(binaryFile,imports){try{var binary=await getWasmBinary(binaryFile);var instance=await WebAssembly.instantiate(binary,imports);return instance}catch(reason){err(`failed to asynchronously prepare wasm: ${reason}`);abort(reason)}}async function instantiateAsync(binary,binaryFile,imports){if(!binary){try{var response=fetch(binaryFile,{credentials:"same-origin"});var instantiationResult=await WebAssembly.instantiateStreaming(response,imports);return instantiationResult}catch(reason){err(`wasm streaming compile failed: ${reason}`);err("falling back to ArrayBuffer instantiation")}}return instantiateArrayBuffer(binaryFile,imports)}function getWasmImports(){var imports={a:wasmImports};return imports}async function createWasm(){function receiveInstance(instance,module){wasmExports=instance.exports;assignWasmExports(wasmExports);updateMemoryViews();return wasmExports}function receiveInstantiationResult(result){return receiveInstance(result["instance"])}var info=getWasmImports();if(Module["instantiateWasm"]){return new Promise((resolve,reject)=>{Module["instantiateWasm"](info,(inst,mod)=>{resolve(receiveInstance(inst,mod))})})}wasmBinaryFile??=findWasmBinary();var result=await instantiateAsync(wasmBinary,wasmBinaryFile,info);var exports=receiveInstantiationResult(result);return exports}var tempDouble;var tempI64;class ExitStatus{name="ExitStatus";constructor(status){this.message=`Program terminated with exit(${status})`;this.status=status}}var callRuntimeCallbacks=callbacks=>{while(callbacks.length>0){callbacks.shift()(Module)}};var onPostRuns=[];var addOnPostRun=cb=>onPostRuns.push(cb);var onPreRuns=[];var addOnPreRun=cb=>onPreRuns.push(cb);function getValue(ptr,type="i8"){if(type.endsWith("*"))type="*";switch(type){case"i1":return HEAP8[ptr];case"i8":return HEAP8[ptr];case"i16":return HEAP16[ptr>>1];case"i32":return HEAP32[ptr>>2];case"i64":abort("to do getValue(i64) use WASM_BIGINT");case"float":return HEAPF32[ptr>>2];case"double":return HEAPF64[ptr>>3];case"*":return HEAPU32[ptr>>2];default:abort(`invalid type for getValue: ${type}`)}}var noExitRuntime=true;function setValue(ptr,value,type="i8"){if(type.endsWith("*"))type="*";switch(type){case"i1":HEAP8[ptr]=value;break;case"i8":HEAP8[ptr]=value;break;case"i16":HEAP16[ptr>>1]=value;break;case"i32":HEAP32[ptr>>2]=value;break;case"i64":abort("to do setValue(i64) use WASM_BIGINT");case"float":HEAPF32[ptr>>2]=value;break;case"double":HEAPF64[ptr>>3]=value;break;case"*":HEAPU32[ptr>>2]=value;break;default:abort(`invalid type for setValue: ${type}`)}}var stackRestore=val=>__emscripten_stack_restore(val);var stackSave=()=>_emscripten_stack_get_current();var UTF8Decoder=new TextDecoder;var findStringEnd=(heapOrArray,idx,maxBytesToRead,ignoreNul)=>{var maxIdx=idx+maxBytesToRead;if(ignoreNul)return maxIdx;while(heapOrArray[idx]&&!(idx>=maxIdx))++idx;return idx};var UTF8ToString=(ptr,maxBytesToRead,ignoreNul)=>{if(!ptr)return"";var end=findStringEnd(HEAPU8,ptr,maxBytesToRead,ignoreNul);return UTF8Decoder.decode(HEAPU8.subarray(ptr,end))};var ___assert_fail=(condition,filename,line,func)=>abort(`Assertion failed: ${UTF8ToString(condition)}, at: `+[filename?UTF8ToString(filename):"unknown filename",line,func?UTF8ToString(func):"unknown function"]);var PATH={isAbs:path=>path.charAt(0)==="/",splitPath:filename=>{var splitPathRe=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return splitPathRe.exec(filename).slice(1)},normalizeArray:(parts,allowAboveRoot)=>{var up=0;for(var i=parts.length-1;i>=0;i--){var last=parts[i];if(last==="."){parts.splice(i,1)}else if(last===".."){parts.splice(i,1);up++}else if(up){parts.splice(i,1);up--}}if(allowAboveRoot){for(;up;up--){parts.unshift("..")}}return parts},normalize:path=>{var isAbsolute=PATH.isAbs(path),trailingSlash=path.slice(-1)==="/";path=PATH.normalizeArray(path.split("/").filter(p=>!!p),!isAbsolute).join("/");if(!path&&!isAbsolute){path="."}if(path&&trailingSlash){path+="/"}return(isAbsolute?"/":"")+path},dirname:path=>{var result=PATH.splitPath(path),root=result[0],dir=result[1];if(!root&&!dir){return"."}if(dir){dir=dir.slice(0,-1)}return root+dir},basename:path=>path&&path.match(/([^\/]+|\/)\/*$/)[1],join:(...paths)=>PATH.normalize(paths.join("/")),join2:(l,r)=>PATH.normalize(l+"/"+r)};var initRandomFill=()=>view=>crypto.getRandomValues(view);var randomFill=view=>{(randomFill=initRandomFill())(view)};var PATH_FS={resolve:(...args)=>{var resolvedPath="",resolvedAbsolute=false;for(var i=args.length-1;i>=-1&&!resolvedAbsolute;i--){var path=i>=0?args[i]:FS.cwd();if(typeof path!="string"){throw new TypeError("Arguments to path.resolve must be strings")}else if(!path){return""}resolvedPath=path+"/"+resolvedPath;resolvedAbsolute=PATH.isAbs(path)}resolvedPath=PATH.normalizeArray(resolvedPath.split("/").filter(p=>!!p),!resolvedAbsolute).join("/");return(resolvedAbsolute?"/":"")+resolvedPath||"."},relative:(from,to)=>{from=PATH_FS.resolve(from).slice(1);to=PATH_FS.resolve(to).slice(1);function trim(arr){var start=0;for(;start<arr.length;start++){if(arr[start]!=="")break}var end=arr.length-1;for(;end>=0;end--){if(arr[end]!=="")break}if(start>end)return[];return arr.slice(start,end-start+1)}var fromParts=trim(from.split("/"));var toParts=trim(to.split("/"));var length=Math.min(fromParts.length,toParts.length);var samePartsLength=length;for(var i=0;i<length;i++){if(fromParts[i]!==toParts[i]){samePartsLength=i;break}}var outputParts=[];for(var i=samePartsLength;i<fromParts.length;i++){outputParts.push("..")}outputParts=outputParts.concat(toParts.slice(samePartsLength));return outputParts.join("/")}};var UTF8ArrayToString=(heapOrArray,idx=0,maxBytesToRead,ignoreNul)=>{var endPtr=findStringEnd(heapOrArray,idx,maxBytesToRead,ignoreNul);return UTF8Decoder.decode(heapOrArray.buffer?heapOrArray.subarray(idx,endPtr):new Uint8Array(heapOrArray.slice(idx,endPtr)))};var FS_stdin_getChar_buffer=[];var lengthBytesUTF8=str=>{var len=0;for(var i=0;i<str.length;++i){var c=str.charCodeAt(i);if(c<=127){len++}else if(c<=2047){len+=2}else if(c>=55296&&c<=57343){len+=4;++i}else{len+=3}}return len};var stringToUTF8Array=(str,heap,outIdx,maxBytesToWrite)=>{if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.codePointAt(i);if(u<=127){if(outIdx>=endIdx)break;heap[outIdx++]=u}else if(u<=2047){if(outIdx+1>=endIdx)break;heap[outIdx++]=192|u>>6;heap[outIdx++]=128|u&63}else if(u<=65535){if(outIdx+2>=endIdx)break;heap[outIdx++]=224|u>>12;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}else{if(outIdx+3>=endIdx)break;heap[outIdx++]=240|u>>18;heap[outIdx++]=128|u>>12&63;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63;i++}}heap[outIdx]=0;return outIdx-startIdx};var intArrayFromString=(stringy,dontAddNull,length)=>{var len=length>0?length:lengthBytesUTF8(stringy)+1;var u8array=new Array(len);var numBytesWritten=stringToUTF8Array(stringy,u8array,0,u8array.length);if(dontAddNull)u8array.length=numBytesWritten;return u8array};var FS_stdin_getChar=()=>{if(!FS_stdin_getChar_buffer.length){var result=null;if(globalThis.window?.prompt){result=window.prompt("Input: ");if(result!==null){result+="\n"}}else{}if(!result){return null}FS_stdin_getChar_buffer=intArrayFromString(result,true)}return FS_stdin_getChar_buffer.shift()};var TTY={ttys:[],init(){},shutdown(){},register(dev,ops){TTY.ttys[dev]={input:[],output:[],ops};FS.registerDevice(dev,TTY.stream_ops)},stream_ops:{open(stream){var tty=TTY.ttys[stream.node.rdev];if(!tty){throw new FS.ErrnoError(43)}stream.tty=tty;stream.seekable=false},close(stream){stream.tty.ops.fsync(stream.tty)},fsync(stream){stream.tty.ops.fsync(stream.tty)},read(stream,buffer,offset,length,pos){if(!stream.tty||!stream.tty.ops.get_char){throw new FS.ErrnoError(60)}var bytesRead=0;for(var i=0;i<length;i++){var result;try{result=stream.tty.ops.get_char(stream.tty)}catch(e){throw new FS.ErrnoError(29)}if(result===undefined&&bytesRead===0){throw new FS.ErrnoError(6)}if(result===null||result===undefined)break;bytesRead++;buffer[offset+i]=result}if(bytesRead){stream.node.atime=Date.now()}return bytesRead},write(stream,buffer,offset,length,pos){if(!stream.tty||!stream.tty.ops.put_char){throw new FS.ErrnoError(60)}try{for(var i=0;i<length;i++){stream.tty.ops.put_char(stream.tty,buffer[offset+i])}}catch(e){throw new FS.ErrnoError(29)}if(length){stream.node.mtime=stream.node.ctime=Date.now()}return i}},default_tty_ops:{get_char(tty){return FS_stdin_getChar()},put_char(tty,val){if(val===null||val===10){out(UTF8ArrayToString(tty.output));tty.output=[]}else{if(val!=0)tty.output.push(val)}},fsync(tty){if(tty.output?.length>0){out(UTF8ArrayToString(tty.output));tty.output=[]}},ioctl_tcgets(tty){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(tty,optional_actions,data){return 0},ioctl_tiocgwinsz(tty){return[24,80]}},default_tty1_ops:{put_char(tty,val){if(val===null||val===10){err(UTF8ArrayToString(tty.output));tty.output=[]}else{if(val!=0)tty.output.push(val)}},fsync(tty){if(tty.output?.length>0){err(UTF8ArrayToString(tty.output));tty.output=[]}}}};var zeroMemory=(ptr,size)=>HEAPU8.fill(0,ptr,ptr+size);var alignMemory=(size,alignment)=>Math.ceil(size/alignment)*alignment;var mmapAlloc=size=>{size=alignMemory(size,65536);var ptr=_emscripten_builtin_memalign(65536,size);if(ptr)zeroMemory(ptr,size);return ptr};var MEMFS={ops_table:null,mount(mount){return MEMFS.createNode(null,"/",16895,0)},createNode(parent,name,mode,dev){if(FS.isBlkdev(mode)||FS.isFIFO(mode)){throw new FS.ErrnoError(63)}MEMFS.ops_table||={dir:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr,lookup:MEMFS.node_ops.lookup,mknod:MEMFS.node_ops.mknod,rename:MEMFS.node_ops.rename,unlink:MEMFS.node_ops.unlink,rmdir:MEMFS.node_ops.rmdir,readdir:MEMFS.node_ops.readdir,symlink:MEMFS.node_ops.symlink},stream:{llseek:MEMFS.stream_ops.llseek}},file:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr},stream:{llseek:MEMFS.stream_ops.llseek,read:MEMFS.stream_ops.read,write:MEMFS.stream_ops.write,mmap:MEMFS.stream_ops.mmap,msync:MEMFS.stream_ops.msync}},link:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr,readlink:MEMFS.node_ops.readlink},stream:{}},chrdev:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr},stream:FS.chrdev_stream_ops}};var node=FS.createNode(parent,name,mode,dev);if(FS.isDir(node.mode)){node.node_ops=MEMFS.ops_table.dir.node;node.stream_ops=MEMFS.ops_table.dir.stream;node.contents={}}else if(FS.isFile(node.mode)){node.node_ops=MEMFS.ops_table.file.node;node.stream_ops=MEMFS.ops_table.file.stream;node.usedBytes=0;node.contents=null}else if(FS.isLink(node.mode)){node.node_ops=MEMFS.ops_table.link.node;node.stream_ops=MEMFS.ops_table.link.stream}else if(FS.isChrdev(node.mode)){node.node_ops=MEMFS.ops_table.chrdev.node;node.stream_ops=MEMFS.ops_table.chrdev.stream}node.atime=node.mtime=node.ctime=Date.now();if(parent){parent.contents[name]=node;parent.atime=parent.mtime=parent.ctime=node.atime}return node},getFileDataAsTypedArray(node){if(!node.contents)return new Uint8Array(0);if(node.contents.subarray)return node.contents.subarray(0,node.usedBytes);return new Uint8Array(node.contents)},expandFileStorage(node,newCapacity){var prevCapacity=node.contents?node.contents.length:0;if(prevCapacity>=newCapacity)return;var CAPACITY_DOUBLING_MAX=1024*1024;newCapacity=Math.max(newCapacity,prevCapacity*(prevCapacity<CAPACITY_DOUBLING_MAX?2:1.125)>>>0);if(prevCapacity!=0)newCapacity=Math.max(newCapacity,256);var oldContents=node.contents;node.contents=new Uint8Array(newCapacity);if(node.usedBytes>0)node.contents.set(oldContents.subarray(0,node.usedBytes),0)},resizeFileStorage(node,newSize){if(node.usedBytes==newSize)return;if(newSize==0){node.contents=null;node.usedBytes=0}else{var oldContents=node.contents;node.contents=new Uint8Array(newSize);if(oldContents){node.contents.set(oldContents.subarray(0,Math.min(newSize,node.usedBytes)))}node.usedBytes=newSize}},node_ops:{getattr(node){var attr={};attr.dev=FS.isChrdev(node.mode)?node.id:1;attr.ino=node.id;attr.mode=node.mode;attr.nlink=1;attr.uid=0;attr.gid=0;attr.rdev=node.rdev;if(FS.isDir(node.mode)){attr.size=4096}else if(FS.isFile(node.mode)){attr.size=node.usedBytes}else if(FS.isLink(node.mode)){attr.size=node.link.length}else{attr.size=0}attr.atime=new Date(node.atime);attr.mtime=new Date(node.mtime);attr.ctime=new Date(node.ctime);attr.blksize=4096;attr.blocks=Math.ceil(attr.size/attr.blksize);return attr},setattr(node,attr){for(const key of["mode","atime","mtime","ctime"]){if(attr[key]!=null){node[key]=attr[key]}}if(attr.size!==undefined){MEMFS.resizeFileStorage(node,attr.size)}},lookup(parent,name){if(!MEMFS.doesNotExistError){MEMFS.doesNotExistError=new FS.ErrnoError(44);MEMFS.doesNotExistError.stack="<generic error, no stack>"}throw MEMFS.doesNotExistError},mknod(parent,name,mode,dev){return MEMFS.createNode(parent,name,mode,dev)},rename(old_node,new_dir,new_name){var new_node;try{new_node=FS.lookupNode(new_dir,new_name)}catch(e){}if(new_node){if(FS.isDir(old_node.mode)){for(var i in new_node.contents){throw new FS.ErrnoError(55)}}FS.hashRemoveNode(new_node)}delete old_node.parent.contents[old_node.name];new_dir.contents[new_name]=old_node;old_node.name=new_name;new_dir.ctime=new_dir.mtime=old_node.parent.ctime=old_node.parent.mtime=Date.now()},unlink(parent,name){delete parent.contents[name];parent.ctime=parent.mtime=Date.now()},rmdir(parent,name){var node=FS.lookupNode(parent,name);for(var i in node.contents){throw new FS.ErrnoError(55)}delete parent.contents[name];parent.ctime=parent.mtime=Date.now()},readdir(node){return[".","..",...Object.keys(node.contents)]},symlink(parent,newname,oldpath){var node=MEMFS.createNode(parent,newname,511|40960,0);node.link=oldpath;return node},readlink(node){if(!FS.isLink(node.mode)){throw new FS.ErrnoError(28)}return node.link}},stream_ops:{read(stream,buffer,offset,length,position){var contents=stream.node.contents;if(position>=stream.node.usedBytes)return 0;var size=Math.min(stream.node.usedBytes-position,length);if(size>8&&contents.subarray){buffer.set(contents.subarray(position,position+size),offset)}else{for(var i=0;i<size;i++)buffer[offset+i]=contents[position+i]}return size},write(stream,buffer,offset,length,position,canOwn){if(buffer.buffer===HEAP8.buffer){canOwn=false}if(!length)return 0;var node=stream.node;node.mtime=node.ctime=Date.now();if(buffer.subarray&&(!node.contents||node.contents.subarray)){if(canOwn){node.contents=buffer.subarray(offset,offset+length);node.usedBytes=length;return length}else if(node.usedBytes===0&&position===0){node.contents=buffer.slice(offset,offset+length);node.usedBytes=length;return length}else if(position+length<=node.usedBytes){node.contents.set(buffer.subarray(offset,offset+length),position);return length}}MEMFS.expandFileStorage(node,position+length);if(node.contents.subarray&&buffer.subarray){node.contents.set(buffer.subarray(offset,offset+length),position)}else{for(var i=0;i<length;i++){node.contents[position+i]=buffer[offset+i]}}node.usedBytes=Math.max(node.usedBytes,position+length);return length},llseek(stream,offset,whence){var position=offset;if(whence===1){position+=stream.position}else if(whence===2){if(FS.isFile(stream.node.mode)){position+=stream.node.usedBytes}}if(position<0){throw new FS.ErrnoError(28)}return position},mmap(stream,length,position,prot,flags){if(!FS.isFile(stream.node.mode)){throw new FS.ErrnoError(43)}var ptr;var allocated;var contents=stream.node.contents;if(!(flags&2)&&contents&&contents.buffer===HEAP8.buffer){allocated=false;ptr=contents.byteOffset}else{allocated=true;ptr=mmapAlloc(length);if(!ptr){throw new FS.ErrnoError(48)}if(contents){if(position>0||position+length<contents.length){if(contents.subarray){contents=contents.subarray(position,position+length)}else{contents=Array.prototype.slice.call(contents,position,position+length)}}HEAP8.set(contents,ptr)}}return{ptr,allocated}},msync(stream,buffer,offset,length,mmapFlags){MEMFS.stream_ops.write(stream,buffer,0,length,offset,false);return 0}}};var FS_modeStringToFlags=str=>{var flagModes={r:0,"r+":2,w:512|64|1,"w+":512|64|2,a:1024|64|1,"a+":1024|64|2};var flags=flagModes[str];if(typeof flags=="undefined"){throw new Error(`Unknown file open mode: ${str}`)}return flags};var FS_getMode=(canRead,canWrite)=>{var mode=0;if(canRead)mode|=292|73;if(canWrite)mode|=146;return mode};var asyncLoad=async url=>{var arrayBuffer=await readAsync(url);return new Uint8Array(arrayBuffer)};var FS_createDataFile=(...args)=>FS.createDataFile(...args);var getUniqueRunDependency=id=>id;var runDependencies=0;var dependenciesFulfilled=null;var removeRunDependency=id=>{runDependencies--;Module["monitorRunDependencies"]?.(runDependencies);if(runDependencies==0){if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}};var addRunDependency=id=>{runDependencies++;Module["monitorRunDependencies"]?.(runDependencies)};var preloadPlugins=[];var FS_handledByPreloadPlugin=async(byteArray,fullname)=>{if(typeof Browser!="undefined")Browser.init();for(var plugin of preloadPlugins){if(plugin["canHandle"](fullname)){return plugin["handle"](byteArray,fullname)}}return byteArray};var FS_preloadFile=async(parent,name,url,canRead,canWrite,dontCreateFile,canOwn,preFinish)=>{var fullname=name?PATH_FS.resolve(PATH.join2(parent,name)):parent;var dep=getUniqueRunDependency(`cp ${fullname}`);addRunDependency(dep);try{var byteArray=url;if(typeof url=="string"){byteArray=await asyncLoad(url)}byteArray=await FS_handledByPreloadPlugin(byteArray,fullname);preFinish?.();if(!dontCreateFile){FS_createDataFile(parent,name,byteArray,canRead,canWrite,canOwn)}}finally{removeRunDependency(dep)}};var FS_createPreloadedFile=(parent,name,url,canRead,canWrite,onload,onerror,dontCreateFile,canOwn,preFinish)=>{FS_preloadFile(parent,name,url,canRead,canWrite,dontCreateFile,canOwn,preFinish).then(onload).catch(onerror)};var FS={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:false,ignorePermissions:true,filesystems:null,syncFSRequests:0,ErrnoError:class{name="ErrnoError";constructor(errno){this.errno=errno}},FSStream:class{shared={};get object(){return this.node}set object(val){this.node=val}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(val){this.shared.flags=val}get position(){return this.shared.position}set position(val){this.shared.position=val}},FSNode:class{node_ops={};stream_ops={};readMode=292|73;writeMode=146;mounted=null;constructor(parent,name,mode,rdev){if(!parent){parent=this}this.parent=parent;this.mount=parent.mount;this.id=FS.nextInode++;this.name=name;this.mode=mode;this.rdev=rdev;this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(val){val?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(val){val?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return FS.isDir(this.mode)}get isDevice(){return FS.isChrdev(this.mode)}},lookupPath(path,opts={}){if(!path){throw new FS.ErrnoError(44)}opts.follow_mount??=true;if(!PATH.isAbs(path)){path=FS.cwd()+"/"+path}linkloop:for(var nlinks=0;nlinks<40;nlinks++){var parts=path.split("/").filter(p=>!!p);var current=FS.root;var current_path="/";for(var i=0;i<parts.length;i++){var islast=i===parts.length-1;if(islast&&opts.parent){break}if(parts[i]==="."){continue}if(parts[i]===".."){current_path=PATH.dirname(current_path);if(FS.isRoot(current)){path=current_path+"/"+parts.slice(i+1).join("/");nlinks--;continue linkloop}else{current=current.parent}continue}current_path=PATH.join2(current_path,parts[i]);try{current=FS.lookupNode(current,parts[i])}catch(e){if(e?.errno===44&&islast&&opts.noent_okay){return{path:current_path}}throw e}if(FS.isMountpoint(current)&&(!islast||opts.follow_mount)){current=current.mounted.root}if(FS.isLink(current.mode)&&(!islast||opts.follow)){if(!current.node_ops.readlink){throw new FS.ErrnoError(52)}var link=current.node_ops.readlink(current);if(!PATH.isAbs(link)){link=PATH.dirname(current_path)+"/"+link}path=link+"/"+parts.slice(i+1).join("/");continue linkloop}}return{path:current_path,node:current}}throw new FS.ErrnoError(32)},getPath(node){var path;while(true){if(FS.isRoot(node)){var mount=node.mount.mountpoint;if(!path)return mount;return mount[mount.length-1]!=="/"?`${mount}/${path}`:mount+path}path=path?`${node.name}/${path}`:node.name;node=node.parent}},hashName(parentid,name){var hash=0;for(var i=0;i<name.length;i++){hash=(hash<<5)-hash+name.charCodeAt(i)|0}return(parentid+hash>>>0)%FS.nameTable.length},hashAddNode(node){var hash=FS.hashName(node.parent.id,node.name);node.name_next=FS.nameTable[hash];FS.nameTable[hash]=node},hashRemoveNode(node){var hash=FS.hashName(node.parent.id,node.name);if(FS.nameTable[hash]===node){FS.nameTable[hash]=node.name_next}else{var current=FS.nameTable[hash];while(current){if(current.name_next===node){current.name_next=node.name_next;break}current=current.name_next}}},lookupNode(parent,name){var errCode=FS.mayLookup(parent);if(errCode){throw new FS.ErrnoError(errCode)}var hash=FS.hashName(parent.id,name);for(var node=FS.nameTable[hash];node;node=node.name_next){var nodeName=node.name;if(node.parent.id===parent.id&&nodeName===name){return node}}return FS.lookup(parent,name)},createNode(parent,name,mode,rdev){var node=new FS.FSNode(parent,name,mode,rdev);FS.hashAddNode(node);return node},destroyNode(node){FS.hashRemoveNode(node)},isRoot(node){return node===node.parent},isMountpoint(node){return!!node.mounted},isFile(mode){return(mode&61440)===32768},isDir(mode){return(mode&61440)===16384},isLink(mode){return(mode&61440)===40960},isChrdev(mode){return(mode&61440)===8192},isBlkdev(mode){return(mode&61440)===24576},isFIFO(mode){return(mode&61440)===4096},isSocket(mode){return(mode&49152)===49152},flagsToPermissionString(flag){var perms=["r","w","rw"][flag&3];if(flag&512){perms+="w"}return perms},nodePermissions(node,perms){if(FS.ignorePermissions){return 0}if(perms.includes("r")&&!(node.mode&292)){return 2}if(perms.includes("w")&&!(node.mode&146)){return 2}if(perms.includes("x")&&!(node.mode&73)){return 2}return 0},mayLookup(dir){if(!FS.isDir(dir.mode))return 54;var errCode=FS.nodePermissions(dir,"x");if(errCode)return errCode;if(!dir.node_ops.lookup)return 2;return 0},mayCreate(dir,name){if(!FS.isDir(dir.mode)){return 54}try{var node=FS.lookupNode(dir,name);return 20}catch(e){}return FS.nodePermissions(dir,"wx")},mayDelete(dir,name,isdir){var node;try{node=FS.lookupNode(dir,name)}catch(e){return e.errno}var errCode=FS.nodePermissions(dir,"wx");if(errCode){return errCode}if(isdir){if(!FS.isDir(node.mode)){return 54}if(FS.isRoot(node)||FS.getPath(node)===FS.cwd()){return 10}}else if(FS.isDir(node.mode)){return 31}return 0},mayOpen(node,flags){if(!node){return 44}if(FS.isLink(node.mode)){return 32}var mode=FS.flagsToPermissionString(flags);if(FS.isDir(node.mode)){if(mode!=="r"||flags&(512|64)){return 31}}return FS.nodePermissions(node,mode)},checkOpExists(op,err){if(!op){throw new FS.ErrnoError(err)}return op},MAX_OPEN_FDS:4096,nextfd(){for(var fd=0;fd<=FS.MAX_OPEN_FDS;fd++){if(!FS.streams[fd]){return fd}}throw new FS.ErrnoError(33)},getStreamChecked(fd){var stream=FS.getStream(fd);if(!stream){throw new FS.ErrnoError(8)}return stream},getStream:fd=>FS.streams[fd],createStream(stream,fd=-1){stream=Object.assign(new FS.FSStream,stream);if(fd==-1){fd=FS.nextfd()}stream.fd=fd;FS.streams[fd]=stream;return stream},closeStream(fd){FS.streams[fd]=null},dupStream(origStream,fd=-1){var stream=FS.createStream(origStream,fd);stream.stream_ops?.dup?.(stream);return stream},doSetAttr(stream,node,attr){var setattr=stream?.stream_ops.setattr;var arg=setattr?stream:node;setattr??=node.node_ops.setattr;FS.checkOpExists(setattr,63);setattr(arg,attr)},chrdev_stream_ops:{open(stream){var device=FS.getDevice(stream.node.rdev);stream.stream_ops=device.stream_ops;stream.stream_ops.open?.(stream)},llseek(){throw new FS.ErrnoError(70)}},major:dev=>dev>>8,minor:dev=>dev&255,makedev:(ma,mi)=>ma<<8|mi,registerDevice(dev,ops){FS.devices[dev]={stream_ops:ops}},getDevice:dev=>FS.devices[dev],getMounts(mount){var mounts=[];var check=[mount];while(check.length){var m=check.pop();mounts.push(m);check.push(...m.mounts)}return mounts},syncfs(populate,callback){if(typeof populate=="function"){callback=populate;populate=false}FS.syncFSRequests++;if(FS.syncFSRequests>1){err(`warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`)}var mounts=FS.getMounts(FS.root.mount);var completed=0;function doCallback(errCode){FS.syncFSRequests--;return callback(errCode)}function done(errCode){if(errCode){if(!done.errored){done.errored=true;return doCallback(errCode)}return}if(++completed>=mounts.length){doCallback(null)}}for(var mount of mounts){if(mount.type.syncfs){mount.type.syncfs(mount,populate,done)}else{done(null)}}},mount(type,opts,mountpoint){var root=mountpoint==="/";var pseudo=!mountpoint;var node;if(root&&FS.root){throw new FS.ErrnoError(10)}else if(!root&&!pseudo){var lookup=FS.lookupPath(mountpoint,{follow_mount:false});mountpoint=lookup.path;node=lookup.node;if(FS.isMountpoint(node)){throw new FS.ErrnoError(10)}if(!FS.isDir(node.mode)){throw new FS.ErrnoError(54)}}var mount={type,opts,mountpoint,mounts:[]};var mountRoot=type.mount(mount);mountRoot.mount=mount;mount.root=mountRoot;if(root){FS.root=mountRoot}else if(node){node.mounted=mount;if(node.mount){node.mount.mounts.push(mount)}}return mountRoot},unmount(mountpoint){var lookup=FS.lookupPath(mountpoint,{follow_mount:false});if(!FS.isMountpoint(lookup.node)){throw new FS.ErrnoError(28)}var node=lookup.node;var mount=node.mounted;var mounts=FS.getMounts(mount);for(var[hash,current]of Object.entries(FS.nameTable)){while(current){var next=current.name_next;if(mounts.includes(current.mount)){FS.destroyNode(current)}current=next}}node.mounted=null;var idx=node.mount.mounts.indexOf(mount);node.mount.mounts.splice(idx,1)},lookup(parent,name){return parent.node_ops.lookup(parent,name)},mknod(path,mode,dev){var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;var name=PATH.basename(path);if(!name){throw new FS.ErrnoError(28)}if(name==="."||name===".."){throw new FS.ErrnoError(20)}var errCode=FS.mayCreate(parent,name);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.mknod){throw new FS.ErrnoError(63)}return parent.node_ops.mknod(parent,name,mode,dev)},statfs(path){return FS.statfsNode(FS.lookupPath(path,{follow:true}).node)},statfsStream(stream){return FS.statfsNode(stream.node)},statfsNode(node){var rtn={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:FS.nextInode,ffree:FS.nextInode-1,fsid:42,flags:2,namelen:255};if(node.node_ops.statfs){Object.assign(rtn,node.node_ops.statfs(node.mount.opts.root))}return rtn},create(path,mode=438){mode&=4095;mode|=32768;return FS.mknod(path,mode,0)},mkdir(path,mode=511){mode&=511|512;mode|=16384;return FS.mknod(path,mode,0)},mkdirTree(path,mode){var dirs=path.split("/");var d="";for(var dir of dirs){if(!dir)continue;if(d||PATH.isAbs(path))d+="/";d+=dir;try{FS.mkdir(d,mode)}catch(e){if(e.errno!=20)throw e}}},mkdev(path,mode,dev){if(typeof dev=="undefined"){dev=mode;mode=438}mode|=8192;return FS.mknod(path,mode,dev)},symlink(oldpath,newpath){if(!PATH_FS.resolve(oldpath)){throw new FS.ErrnoError(44)}var lookup=FS.lookupPath(newpath,{parent:true});var parent=lookup.node;if(!parent){throw new FS.ErrnoError(44)}var newname=PATH.basename(newpath);var errCode=FS.mayCreate(parent,newname);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.symlink){throw new FS.ErrnoError(63)}return parent.node_ops.symlink(parent,newname,oldpath)},rename(old_path,new_path){var old_dirname=PATH.dirname(old_path);var new_dirname=PATH.dirname(new_path);var old_name=PATH.basename(old_path);var new_name=PATH.basename(new_path);var lookup,old_dir,new_dir;lookup=FS.lookupPath(old_path,{parent:true});old_dir=lookup.node;lookup=FS.lookupPath(new_path,{parent:true});new_dir=lookup.node;if(!old_dir||!new_dir)throw new FS.ErrnoError(44);if(old_dir.mount!==new_dir.mount){throw new FS.ErrnoError(75)}var old_node=FS.lookupNode(old_dir,old_name);var relative=PATH_FS.relative(old_path,new_dirname);if(relative.charAt(0)!=="."){throw new FS.ErrnoError(28)}relative=PATH_FS.relative(new_path,old_dirname);if(relative.charAt(0)!=="."){throw new FS.ErrnoError(55)}var new_node;try{new_node=FS.lookupNode(new_dir,new_name)}catch(e){}if(old_node===new_node){return}var isdir=FS.isDir(old_node.mode);var errCode=FS.mayDelete(old_dir,old_name,isdir);if(errCode){throw new FS.ErrnoError(errCode)}errCode=new_node?FS.mayDelete(new_dir,new_name,isdir):FS.mayCreate(new_dir,new_name);if(errCode){throw new FS.ErrnoError(errCode)}if(!old_dir.node_ops.rename){throw new FS.ErrnoError(63)}if(FS.isMountpoint(old_node)||new_node&&FS.isMountpoint(new_node)){throw new FS.ErrnoError(10)}if(new_dir!==old_dir){errCode=FS.nodePermissions(old_dir,"w");if(errCode){throw new FS.ErrnoError(errCode)}}FS.hashRemoveNode(old_node);try{old_dir.node_ops.rename(old_node,new_dir,new_name);old_node.parent=new_dir}catch(e){throw e}finally{FS.hashAddNode(old_node)}},rmdir(path){var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;var name=PATH.basename(path);var node=FS.lookupNode(parent,name);var errCode=FS.mayDelete(parent,name,true);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.rmdir){throw new FS.ErrnoError(63)}if(FS.isMountpoint(node)){throw new FS.ErrnoError(10)}parent.node_ops.rmdir(parent,name);FS.destroyNode(node)},readdir(path){var lookup=FS.lookupPath(path,{follow:true});var node=lookup.node;var readdir=FS.checkOpExists(node.node_ops.readdir,54);return readdir(node)},unlink(path){var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;if(!parent){throw new FS.ErrnoError(44)}var name=PATH.basename(path);var node=FS.lookupNode(parent,name);var errCode=FS.mayDelete(parent,name,false);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.unlink){throw new FS.ErrnoError(63)}if(FS.isMountpoint(node)){throw new FS.ErrnoError(10)}parent.node_ops.unlink(parent,name);FS.destroyNode(node)},readlink(path){var lookup=FS.lookupPath(path);var link=lookup.node;if(!link){throw new FS.ErrnoError(44)}if(!link.node_ops.readlink){throw new FS.ErrnoError(28)}return link.node_ops.readlink(link)},stat(path,dontFollow){var lookup=FS.lookupPath(path,{follow:!dontFollow});var node=lookup.node;var getattr=FS.checkOpExists(node.node_ops.getattr,63);return getattr(node)},fstat(fd){var stream=FS.getStreamChecked(fd);var node=stream.node;var getattr=stream.stream_ops.getattr;var arg=getattr?stream:node;getattr??=node.node_ops.getattr;FS.checkOpExists(getattr,63);return getattr(arg)},lstat(path){return FS.stat(path,true)},doChmod(stream,node,mode,dontFollow){FS.doSetAttr(stream,node,{mode:mode&4095|node.mode&~4095,ctime:Date.now(),dontFollow})},chmod(path,mode,dontFollow){var node;if(typeof path=="string"){var lookup=FS.lookupPath(path,{follow:!dontFollow});node=lookup.node}else{node=path}FS.doChmod(null,node,mode,dontFollow)},lchmod(path,mode){FS.chmod(path,mode,true)},fchmod(fd,mode){var stream=FS.getStreamChecked(fd);FS.doChmod(stream,stream.node,mode,false)},doChown(stream,node,dontFollow){FS.doSetAttr(stream,node,{timestamp:Date.now(),dontFollow})},chown(path,uid,gid,dontFollow){var node;if(typeof path=="string"){var lookup=FS.lookupPath(path,{follow:!dontFollow});node=lookup.node}else{node=path}FS.doChown(null,node,dontFollow)},lchown(path,uid,gid){FS.chown(path,uid,gid,true)},fchown(fd,uid,gid){var stream=FS.getStreamChecked(fd);FS.doChown(stream,stream.node,false)},doTruncate(stream,node,len){if(FS.isDir(node.mode)){throw new FS.ErrnoError(31)}if(!FS.isFile(node.mode)){throw new FS.ErrnoError(28)}var errCode=FS.nodePermissions(node,"w");if(errCode){throw new FS.ErrnoError(errCode)}FS.doSetAttr(stream,node,{size:len,timestamp:Date.now()})},truncate(path,len){if(len<0){throw new FS.ErrnoError(28)}var node;if(typeof path=="string"){var lookup=FS.lookupPath(path,{follow:true});node=lookup.node}else{node=path}FS.doTruncate(null,node,len)},ftruncate(fd,len){var stream=FS.getStreamChecked(fd);if(len<0||(stream.flags&2097155)===0){throw new FS.ErrnoError(28)}FS.doTruncate(stream,stream.node,len)},utime(path,atime,mtime){var lookup=FS.lookupPath(path,{follow:true});var node=lookup.node;var setattr=FS.checkOpExists(node.node_ops.setattr,63);setattr(node,{atime,mtime})},open(path,flags,mode=438){if(path===""){throw new FS.ErrnoError(44)}flags=typeof flags=="string"?FS_modeStringToFlags(flags):flags;if(flags&64){mode=mode&4095|32768}else{mode=0}var node;var isDirPath;if(typeof path=="object"){node=path}else{isDirPath=path.endsWith("/");var lookup=FS.lookupPath(path,{follow:!(flags&131072),noent_okay:true});node=lookup.node;path=lookup.path}var created=false;if(flags&64){if(node){if(flags&128){throw new FS.ErrnoError(20)}}else if(isDirPath){throw new FS.ErrnoError(31)}else{node=FS.mknod(path,mode|511,0);created=true}}if(!node){throw new FS.ErrnoError(44)}if(FS.isChrdev(node.mode)){flags&=~512}if(flags&65536&&!FS.isDir(node.mode)){throw new FS.ErrnoError(54)}if(!created){var errCode=FS.mayOpen(node,flags);if(errCode){throw new FS.ErrnoError(errCode)}}if(flags&512&&!created){FS.truncate(node,0)}flags&=~(128|512|131072);var stream=FS.createStream({node,path:FS.getPath(node),flags,seekable:true,position:0,stream_ops:node.stream_ops,ungotten:[],error:false});if(stream.stream_ops.open){stream.stream_ops.open(stream)}if(created){FS.chmod(node,mode&511)}return stream},close(stream){if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if(stream.getdents)stream.getdents=null;try{if(stream.stream_ops.close){stream.stream_ops.close(stream)}}catch(e){throw e}finally{FS.closeStream(stream.fd)}stream.fd=null},isClosed(stream){return stream.fd===null},llseek(stream,offset,whence){if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if(!stream.seekable||!stream.stream_ops.llseek){throw new FS.ErrnoError(70)}if(whence!=0&&whence!=1&&whence!=2){throw new FS.ErrnoError(28)}stream.position=stream.stream_ops.llseek(stream,offset,whence);stream.ungotten=[];return stream.position},read(stream,buffer,offset,length,position){if(length<0||position<0){throw new FS.ErrnoError(28)}if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if((stream.flags&2097155)===1){throw new FS.ErrnoError(8)}if(FS.isDir(stream.node.mode)){throw new FS.ErrnoError(31)}if(!stream.stream_ops.read){throw new FS.ErrnoError(28)}var seeking=typeof position!="undefined";if(!seeking){position=stream.position}else if(!stream.seekable){throw new FS.ErrnoError(70)}var bytesRead=stream.stream_ops.read(stream,buffer,offset,length,position);if(!seeking)stream.position+=bytesRead;return bytesRead},write(stream,buffer,offset,length,position,canOwn){if(length<0||position<0){throw new FS.ErrnoError(28)}if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if((stream.flags&2097155)===0){throw new FS.ErrnoError(8)}if(FS.isDir(stream.node.mode)){throw new FS.ErrnoError(31)}if(!stream.stream_ops.write){throw new FS.ErrnoError(28)}if(stream.seekable&&stream.flags&1024){FS.llseek(stream,0,2)}var seeking=typeof position!="undefined";if(!seeking){position=stream.position}else if(!stream.seekable){throw new FS.ErrnoError(70)}var bytesWritten=stream.stream_ops.write(stream,buffer,offset,length,position,canOwn);if(!seeking)stream.position+=bytesWritten;return bytesWritten},mmap(stream,length,position,prot,flags){if((prot&2)!==0&&(flags&2)===0&&(stream.flags&2097155)!==2){throw new FS.ErrnoError(2)}if((stream.flags&2097155)===1){throw new FS.ErrnoError(2)}if(!stream.stream_ops.mmap){throw new FS.ErrnoError(43)}if(!length){throw new FS.ErrnoError(28)}return stream.stream_ops.mmap(stream,length,position,prot,flags)},msync(stream,buffer,offset,length,mmapFlags){if(!stream.stream_ops.msync){return 0}return stream.stream_ops.msync(stream,buffer,offset,length,mmapFlags)},ioctl(stream,cmd,arg){if(!stream.stream_ops.ioctl){throw new FS.ErrnoError(59)}return stream.stream_ops.ioctl(stream,cmd,arg)},readFile(path,opts={}){opts.flags=opts.flags||0;opts.encoding=opts.encoding||"binary";if(opts.encoding!=="utf8"&&opts.encoding!=="binary"){abort(`Invalid encoding type "${opts.encoding}"`)}var stream=FS.open(path,opts.flags);var stat=FS.stat(path);var length=stat.size;var buf=new Uint8Array(length);FS.read(stream,buf,0,length,0);if(opts.encoding==="utf8"){buf=UTF8ArrayToString(buf)}FS.close(stream);return buf},writeFile(path,data,opts={}){opts.flags=opts.flags||577;var stream=FS.open(path,opts.flags,opts.mode);if(typeof data=="string"){data=new Uint8Array(intArrayFromString(data,true))}if(ArrayBuffer.isView(data)){FS.write(stream,data,0,data.byteLength,undefined,opts.canOwn)}else{abort("Unsupported data type")}FS.close(stream)},cwd:()=>FS.currentPath,chdir(path){var lookup=FS.lookupPath(path,{follow:true});if(lookup.node===null){throw new FS.ErrnoError(44)}if(!FS.isDir(lookup.node.mode)){throw new FS.ErrnoError(54)}var errCode=FS.nodePermissions(lookup.node,"x");if(errCode){throw new FS.ErrnoError(errCode)}FS.currentPath=lookup.path},createDefaultDirectories(){FS.mkdir("/tmp");FS.mkdir("/home");FS.mkdir("/home/web_user")},createDefaultDevices(){FS.mkdir("/dev");FS.registerDevice(FS.makedev(1,3),{read:()=>0,write:(stream,buffer,offset,length,pos)=>length,llseek:()=>0});FS.mkdev("/dev/null",FS.makedev(1,3));TTY.register(FS.makedev(5,0),TTY.default_tty_ops);TTY.register(FS.makedev(6,0),TTY.default_tty1_ops);FS.mkdev("/dev/tty",FS.makedev(5,0));FS.mkdev("/dev/tty1",FS.makedev(6,0));var randomBuffer=new Uint8Array(1024),randomLeft=0;var randomByte=()=>{if(randomLeft===0){randomFill(randomBuffer);randomLeft=randomBuffer.byteLength}return randomBuffer[--randomLeft]};FS.createDevice("/dev","random",randomByte);FS.createDevice("/dev","urandom",randomByte);FS.mkdir("/dev/shm");FS.mkdir("/dev/shm/tmp")},createSpecialDirectories(){FS.mkdir("/proc");var proc_self=FS.mkdir("/proc/self");FS.mkdir("/proc/self/fd");FS.mount({mount(){var node=FS.createNode(proc_self,"fd",16895,73);node.stream_ops={llseek:MEMFS.stream_ops.llseek};node.node_ops={lookup(parent,name){var fd=+name;var stream=FS.getStreamChecked(fd);var ret={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>stream.path},id:fd+1};ret.parent=ret;return ret},readdir(){return Array.from(FS.streams.entries()).filter(([k,v])=>v).map(([k,v])=>k.toString())}};return node}},{},"/proc/self/fd")},createStandardStreams(input,output,error){if(input){FS.createDevice("/dev","stdin",input)}else{FS.symlink("/dev/tty","/dev/stdin")}if(output){FS.createDevice("/dev","stdout",null,output)}else{FS.symlink("/dev/tty","/dev/stdout")}if(error){FS.createDevice("/dev","stderr",null,error)}else{FS.symlink("/dev/tty1","/dev/stderr")}var stdin=FS.open("/dev/stdin",0);var stdout=FS.open("/dev/stdout",1);var stderr=FS.open("/dev/stderr",1)},staticInit(){FS.nameTable=new Array(4096);FS.mount(MEMFS,{},"/");FS.createDefaultDirectories();FS.createDefaultDevices();FS.createSpecialDirectories();FS.filesystems={MEMFS}},init(input,output,error){FS.initialized=true;input??=Module["stdin"];output??=Module["stdout"];error??=Module["stderr"];FS.createStandardStreams(input,output,error)},quit(){FS.initialized=false;for(var stream of FS.streams){if(stream){FS.close(stream)}}},findObject(path,dontResolveLastLink){var ret=FS.analyzePath(path,dontResolveLastLink);if(!ret.exists){return null}return ret.object},analyzePath(path,dontResolveLastLink){try{var lookup=FS.lookupPath(path,{follow:!dontResolveLastLink});path=lookup.path}catch(e){}var ret={isRoot:false,exists:false,error:0,name:null,path:null,object:null,parentExists:false,parentPath:null,parentObject:null};try{var lookup=FS.lookupPath(path,{parent:true});ret.parentExists=true;ret.parentPath=lookup.path;ret.parentObject=lookup.node;ret.name=PATH.basename(path);lookup=FS.lookupPath(path,{follow:!dontResolveLastLink});ret.exists=true;ret.path=lookup.path;ret.object=lookup.node;ret.name=lookup.node.name;ret.isRoot=lookup.path==="/"}catch(e){ret.error=e.errno}return ret},createPath(parent,path,canRead,canWrite){parent=typeof parent=="string"?parent:FS.getPath(parent);var parts=path.split("/").reverse();while(parts.length){var part=parts.pop();if(!part)continue;var current=PATH.join2(parent,part);try{FS.mkdir(current)}catch(e){if(e.errno!=20)throw e}parent=current}return current},createFile(parent,name,properties,canRead,canWrite){var path=PATH.join2(typeof parent=="string"?parent:FS.getPath(parent),name);var mode=FS_getMode(canRead,canWrite);return FS.create(path,mode)},createDataFile(parent,name,data,canRead,canWrite,canOwn){var path=name;if(parent){parent=typeof parent=="string"?parent:FS.getPath(parent);path=name?PATH.join2(parent,name):parent}var mode=FS_getMode(canRead,canWrite);var node=FS.create(path,mode);if(data){if(typeof data=="string"){var arr=new Array(data.length);for(var i=0,len=data.length;i<len;++i)arr[i]=data.charCodeAt(i);data=arr}FS.chmod(node,mode|146);var stream=FS.open(node,577);FS.write(stream,data,0,data.length,0,canOwn);FS.close(stream);FS.chmod(node,mode)}},createDevice(parent,name,input,output){var path=PATH.join2(typeof parent=="string"?parent:FS.getPath(parent),name);var mode=FS_getMode(!!input,!!output);FS.createDevice.major??=64;var dev=FS.makedev(FS.createDevice.major++,0);FS.registerDevice(dev,{open(stream){stream.seekable=false},close(stream){if(output?.buffer?.length){output(10)}},read(stream,buffer,offset,length,pos){var bytesRead=0;for(var i=0;i<length;i++){var result;try{result=input()}catch(e){throw new FS.ErrnoError(29)}if(result===undefined&&bytesRead===0){throw new FS.ErrnoError(6)}if(result===null||result===undefined)break;bytesRead++;buffer[offset+i]=result}if(bytesRead){stream.node.atime=Date.now()}return bytesRead},write(stream,buffer,offset,length,pos){for(var i=0;i<length;i++){try{output(buffer[offset+i])}catch(e){throw new FS.ErrnoError(29)}}if(length){stream.node.mtime=stream.node.ctime=Date.now()}return i}});return FS.mkdev(path,mode,dev)},forceLoadFile(obj){if(obj.isDevice||obj.isFolder||obj.link||obj.contents)return true;if(globalThis.XMLHttpRequest){abort("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.")}else{try{obj.contents=readBinary(obj.url)}catch(e){throw new FS.ErrnoError(29)}}},createLazyFile(parent,name,url,canRead,canWrite){class LazyUint8Array{lengthKnown=false;chunks=[];get(idx){if(idx>this.length-1||idx<0){return undefined}var chunkOffset=idx%this.chunkSize;var chunkNum=idx/this.chunkSize|0;return this.getter(chunkNum)[chunkOffset]}setDataGetter(getter){this.getter=getter}cacheLength(){var xhr=new XMLHttpRequest;xhr.open("HEAD",url,false);xhr.send(null);if(!(xhr.status>=200&&xhr.status<300||xhr.status===304))abort("Couldn't load "+url+". Status: "+xhr.status);var datalength=Number(xhr.getResponseHeader("Content-length"));var header;var hasByteServing=(header=xhr.getResponseHeader("Accept-Ranges"))&&header==="bytes";var usesGzip=(header=xhr.getResponseHeader("Content-Encoding"))&&header==="gzip";var chunkSize=1024*1024;if(!hasByteServing)chunkSize=datalength;var doXHR=(from,to)=>{if(from>to)abort("invalid range ("+from+", "+to+") or no bytes requested!");if(to>datalength-1)abort("only "+datalength+" bytes available! programmer error!");var xhr=new XMLHttpRequest;xhr.open("GET",url,false);if(datalength!==chunkSize)xhr.setRequestHeader("Range","bytes="+from+"-"+to);xhr.responseType="arraybuffer";if(xhr.overrideMimeType){xhr.overrideMimeType("text/plain; charset=x-user-defined")}xhr.send(null);if(!(xhr.status>=200&&xhr.status<300||xhr.status===304))abort("Couldn't load "+url+". Status: "+xhr.status);if(xhr.response!==undefined){return new Uint8Array(xhr.response||[])}return intArrayFromString(xhr.responseText||"",true)};var lazyArray=this;lazyArray.setDataGetter(chunkNum=>{var start=chunkNum*chunkSize;var end=(chunkNum+1)*chunkSize-1;end=Math.min(end,datalength-1);if(typeof lazyArray.chunks[chunkNum]=="undefined"){lazyArray.chunks[chunkNum]=doXHR(start,end)}if(typeof lazyArray.chunks[chunkNum]=="undefined")abort("doXHR failed!");return lazyArray.chunks[chunkNum]});if(usesGzip||!datalength){chunkSize=datalength=1;datalength=this.getter(0).length;chunkSize=datalength;out("LazyFiles on gzip forces download of the whole file when length is accessed")}this._length=datalength;this._chunkSize=chunkSize;this.lengthKnown=true}get length(){if(!this.lengthKnown){this.cacheLength()}return this._length}get chunkSize(){if(!this.lengthKnown){this.cacheLength()}return this._chunkSize}}if(globalThis.XMLHttpRequest){if(!ENVIRONMENT_IS_WORKER)abort("Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc");var lazyArray=new LazyUint8Array;var properties={isDevice:false,contents:lazyArray}}else{var properties={isDevice:false,url}}var node=FS.createFile(parent,name,properties,canRead,canWrite);if(properties.contents){node.contents=properties.contents}else if(properties.url){node.contents=null;node.url=properties.url}Object.defineProperties(node,{usedBytes:{get:function(){return this.contents.length}}});var stream_ops={};for(const[key,fn]of Object.entries(node.stream_ops)){stream_ops[key]=(...args)=>{FS.forceLoadFile(node);return fn(...args)}}function writeChunks(stream,buffer,offset,length,position){var contents=stream.node.contents;if(position>=contents.length)return 0;var size=Math.min(contents.length-position,length);if(contents.slice){for(var i=0;i<size;i++){buffer[offset+i]=contents[position+i]}}else{for(var i=0;i<size;i++){buffer[offset+i]=contents.get(position+i)}}return size}stream_ops.read=(stream,buffer,offset,length,position)=>{FS.forceLoadFile(node);return writeChunks(stream,buffer,offset,length,position)};stream_ops.mmap=(stream,length,position,prot,flags)=>{FS.forceLoadFile(node);var ptr=mmapAlloc(length);if(!ptr){throw new FS.ErrnoError(48)}writeChunks(stream,HEAP8,ptr,length,position);return{ptr,allocated:true}};node.stream_ops=stream_ops;return node}};var SYSCALLS={calculateAt(dirfd,path,allowEmpty){if(PATH.isAbs(path)){return path}var dir;if(dirfd===-100){dir=FS.cwd()}else{var dirstream=SYSCALLS.getStreamFromFD(dirfd);dir=dirstream.path}if(path.length==0){if(!allowEmpty){throw new FS.ErrnoError(44)}return dir}return dir+"/"+path},writeStat(buf,stat){HEAPU32[buf>>2]=stat.dev;HEAPU32[buf+4>>2]=stat.mode;HEAPU32[buf+8>>2]=stat.nlink;HEAPU32[buf+12>>2]=stat.uid;HEAPU32[buf+16>>2]=stat.gid;HEAPU32[buf+20>>2]=stat.rdev;tempI64=[stat.size>>>0,(tempDouble=stat.size,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+24>>2]=tempI64[0],HEAP32[buf+28>>2]=tempI64[1];HEAP32[buf+32>>2]=4096;HEAP32[buf+36>>2]=stat.blocks;var atime=stat.atime.getTime();var mtime=stat.mtime.getTime();var ctime=stat.ctime.getTime();tempI64=[Math.floor(atime/1e3)>>>0,(tempDouble=Math.floor(atime/1e3),+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+40>>2]=tempI64[0],HEAP32[buf+44>>2]=tempI64[1];HEAPU32[buf+48>>2]=atime%1e3*1e3*1e3;tempI64=[Math.floor(mtime/1e3)>>>0,(tempDouble=Math.floor(mtime/1e3),+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+56>>2]=tempI64[0],HEAP32[buf+60>>2]=tempI64[1];HEAPU32[buf+64>>2]=mtime%1e3*1e3*1e3;tempI64=[Math.floor(ctime/1e3)>>>0,(tempDouble=Math.floor(ctime/1e3),+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+72>>2]=tempI64[0],HEAP32[buf+76>>2]=tempI64[1];HEAPU32[buf+80>>2]=ctime%1e3*1e3*1e3;tempI64=[stat.ino>>>0,(tempDouble=stat.ino,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+88>>2]=tempI64[0],HEAP32[buf+92>>2]=tempI64[1];return 0},writeStatFs(buf,stats){HEAPU32[buf+4>>2]=stats.bsize;HEAPU32[buf+60>>2]=stats.bsize;tempI64=[stats.blocks>>>0,(tempDouble=stats.blocks,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+8>>2]=tempI64[0],HEAP32[buf+12>>2]=tempI64[1];tempI64=[stats.bfree>>>0,(tempDouble=stats.bfree,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+16>>2]=tempI64[0],HEAP32[buf+20>>2]=tempI64[1];tempI64=[stats.bavail>>>0,(tempDouble=stats.bavail,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+24>>2]=tempI64[0],HEAP32[buf+28>>2]=tempI64[1];tempI64=[stats.files>>>0,(tempDouble=stats.files,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+32>>2]=tempI64[0],HEAP32[buf+36>>2]=tempI64[1];tempI64=[stats.ffree>>>0,(tempDouble=stats.ffree,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+40>>2]=tempI64[0],HEAP32[buf+44>>2]=tempI64[1];HEAPU32[buf+48>>2]=stats.fsid;HEAPU32[buf+64>>2]=stats.flags;HEAPU32[buf+56>>2]=stats.namelen},doMsync(addr,stream,len,flags,offset){if(!FS.isFile(stream.node.mode)){throw new FS.ErrnoError(43)}if(flags&2){return 0}var buffer=HEAPU8.slice(addr,addr+len);FS.msync(stream,buffer,offset,len,flags)},getStreamFromFD(fd){var stream=FS.getStreamChecked(fd);return stream},varargs:undefined,getStr(ptr){var ret=UTF8ToString(ptr);return ret}};function ___syscall_chmod(path,mode){try{path=SYSCALLS.getStr(path);FS.chmod(path,mode);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_faccessat(dirfd,path,amode,flags){try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);if(amode&~7){return-28}var lookup=FS.lookupPath(path,{follow:true});var node=lookup.node;if(!node){return-44}var perms="";if(amode&4)perms+="r";if(amode&2)perms+="w";if(amode&1)perms+="x";if(perms&&FS.nodePermissions(node,perms)){return-2}return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_fchmod(fd,mode){try{FS.fchmod(fd,mode);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_fchown32(fd,owner,group){try{FS.fchown(fd,owner,group);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var syscallGetVarargI=()=>{var ret=HEAP32[+SYSCALLS.varargs>>2];SYSCALLS.varargs+=4;return ret};var syscallGetVarargP=syscallGetVarargI;function ___syscall_fcntl64(fd,cmd,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD(fd);switch(cmd){case 0:{var arg=syscallGetVarargI();if(arg<0){return-28}while(FS.streams[arg]){arg++}var newStream;newStream=FS.dupStream(stream,arg);return newStream.fd}case 1:case 2:return 0;case 3:return stream.flags;case 4:{var arg=syscallGetVarargI();stream.flags|=arg;return 0}case 12:{var arg=syscallGetVarargP();var offset=0;HEAP16[arg+offset>>1]=2;return 0}case 13:case 14:return 0}return-28}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_fstat64(fd,buf){try{return SYSCALLS.writeStat(buf,FS.fstat(fd))}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var convertI32PairToI53Checked=(lo,hi)=>hi+2097152>>>0<4194305-!!lo?(lo>>>0)+hi*4294967296:NaN;function ___syscall_ftruncate64(fd,length_low,length_high){var length=convertI32PairToI53Checked(length_low,length_high);try{if(isNaN(length))return-61;FS.ftruncate(fd,length);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var stringToUTF8=(str,outPtr,maxBytesToWrite)=>stringToUTF8Array(str,HEAPU8,outPtr,maxBytesToWrite);function ___syscall_getcwd(buf,size){try{if(size===0)return-28;var cwd=FS.cwd();var cwdLengthInBytes=lengthBytesUTF8(cwd)+1;if(size<cwdLengthInBytes)return-68;stringToUTF8(cwd,buf,size);return cwdLengthInBytes}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_lstat64(path,buf){try{path=SYSCALLS.getStr(path);return SYSCALLS.writeStat(buf,FS.lstat(path))}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_mkdirat(dirfd,path,mode){try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);FS.mkdir(path,mode,0);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_newfstatat(dirfd,path,buf,flags){try{path=SYSCALLS.getStr(path);var nofollow=flags&256;var allowEmpty=flags&4096;flags=flags&~6400;path=SYSCALLS.calculateAt(dirfd,path,allowEmpty);return SYSCALLS.writeStat(buf,nofollow?FS.lstat(path):FS.stat(path))}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_openat(dirfd,path,flags,varargs){SYSCALLS.varargs=varargs;try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);var mode=varargs?syscallGetVarargI():0;return FS.open(path,flags,mode).fd}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_readlinkat(dirfd,path,buf,bufsize){try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);if(bufsize<=0)return-28;var ret=FS.readlink(path);var len=Math.min(bufsize,lengthBytesUTF8(ret));var endChar=HEAP8[buf+len];stringToUTF8(ret,buf,bufsize+1);HEAP8[buf+len]=endChar;return len}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_rmdir(path){try{path=SYSCALLS.getStr(path);FS.rmdir(path);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_stat64(path,buf){try{path=SYSCALLS.getStr(path);return SYSCALLS.writeStat(buf,FS.stat(path))}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_unlinkat(dirfd,path,flags){try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);if(!flags){FS.unlink(path)}else if(flags===512){FS.rmdir(path)}else{return-28}return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var readI53FromI64=ptr=>HEAPU32[ptr>>2]+HEAP32[ptr+4>>2]*4294967296;function ___syscall_utimensat(dirfd,path,times,flags){try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path,true);var now=Date.now(),atime,mtime;if(!times){atime=now;mtime=now}else{var seconds=readI53FromI64(times);var nanoseconds=HEAP32[times+8>>2];if(nanoseconds==1073741823){atime=now}else if(nanoseconds==1073741822){atime=null}else{atime=seconds*1e3+nanoseconds/(1e3*1e3)}times+=16;seconds=readI53FromI64(times);nanoseconds=HEAP32[times+8>>2];if(nanoseconds==1073741823){mtime=now}else if(nanoseconds==1073741822){mtime=null}else{mtime=seconds*1e3+nanoseconds/(1e3*1e3)}}if((mtime??atime)!==null){FS.utime(path,atime,mtime)}return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var __abort_js=()=>abort("");var runtimeKeepaliveCounter=0;var __emscripten_runtime_keepalive_clear=()=>{noExitRuntime=false;runtimeKeepaliveCounter=0};var isLeapYear=year=>year%4===0&&(year%100!==0||year%400===0);var MONTH_DAYS_LEAP_CUMULATIVE=[0,31,60,91,121,152,182,213,244,274,305,335];var MONTH_DAYS_REGULAR_CUMULATIVE=[0,31,59,90,120,151,181,212,243,273,304,334];var ydayFromDate=date=>{var leap=isLeapYear(date.getFullYear());var monthDaysCumulative=leap?MONTH_DAYS_LEAP_CUMULATIVE:MONTH_DAYS_REGULAR_CUMULATIVE;var yday=monthDaysCumulative[date.getMonth()]+date.getDate()-1;return yday};function __localtime_js(time_low,time_high,tmPtr){var time=convertI32PairToI53Checked(time_low,time_high);var date=new Date(time*1e3);HEAP32[tmPtr>>2]=date.getSeconds();HEAP32[tmPtr+4>>2]=date.getMinutes();HEAP32[tmPtr+8>>2]=date.getHours();HEAP32[tmPtr+12>>2]=date.getDate();HEAP32[tmPtr+16>>2]=date.getMonth();HEAP32[tmPtr+20>>2]=date.getFullYear()-1900;HEAP32[tmPtr+24>>2]=date.getDay();var yday=ydayFromDate(date)|0;HEAP32[tmPtr+28>>2]=yday;HEAP32[tmPtr+36>>2]=-(date.getTimezoneOffset()*60);var start=new Date(date.getFullYear(),0,1);var summerOffset=new Date(date.getFullYear(),6,1).getTimezoneOffset();var winterOffset=start.getTimezoneOffset();var dst=(summerOffset!=winterOffset&&date.getTimezoneOffset()==Math.min(winterOffset,summerOffset))|0;HEAP32[tmPtr+32>>2]=dst}function __mmap_js(len,prot,flags,fd,offset_low,offset_high,allocated,addr){var offset=convertI32PairToI53Checked(offset_low,offset_high);try{var stream=SYSCALLS.getStreamFromFD(fd);var res=FS.mmap(stream,len,offset,prot,flags);var ptr=res.ptr;HEAP32[allocated>>2]=res.allocated;HEAPU32[addr>>2]=ptr;return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function __munmap_js(addr,len,prot,flags,fd,offset_low,offset_high){var offset=convertI32PairToI53Checked(offset_low,offset_high);try{var stream=SYSCALLS.getStreamFromFD(fd);if(prot&2){SYSCALLS.doMsync(addr,stream,len,flags,offset)}}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var timers={};var handleException=e=>{if(e instanceof ExitStatus||e=="unwind"){return EXITSTATUS}quit_(1,e)};var keepRuntimeAlive=()=>noExitRuntime||runtimeKeepaliveCounter>0;var _proc_exit=code=>{EXITSTATUS=code;if(!keepRuntimeAlive()){Module["onExit"]?.(code);ABORT=true}quit_(code,new ExitStatus(code))};var exitJS=(status,implicit)=>{EXITSTATUS=status;_proc_exit(status)};var _exit=exitJS;var maybeExit=()=>{if(!keepRuntimeAlive()){try{_exit(EXITSTATUS)}catch(e){handleException(e)}}};var callUserCallback=func=>{if(ABORT){return}try{return func()}catch(e){handleException(e)}finally{maybeExit()}};var _emscripten_get_now=()=>performance.now();var __setitimer_js=(which,timeout_ms)=>{if(timers[which]){clearTimeout(timers[which].id);delete timers[which]}if(!timeout_ms)return 0;var id=setTimeout(()=>{delete timers[which];callUserCallback(()=>__emscripten_timeout(which,_emscripten_get_now()))},timeout_ms);timers[which]={id,timeout_ms};return 0};var __tzset_js=(timezone,daylight,std_name,dst_name)=>{var currentYear=(new Date).getFullYear();var winter=new Date(currentYear,0,1);var summer=new Date(currentYear,6,1);var winterOffset=winter.getTimezoneOffset();var summerOffset=summer.getTimezoneOffset();var stdTimezoneOffset=Math.max(winterOffset,summerOffset);HEAPU32[timezone>>2]=stdTimezoneOffset*60;HEAP32[daylight>>2]=Number(winterOffset!=summerOffset);var extractZone=timezoneOffset=>{var sign=timezoneOffset>=0?"-":"+";var absOffset=Math.abs(timezoneOffset);var hours=String(Math.floor(absOffset/60)).padStart(2,"0");var minutes=String(absOffset%60).padStart(2,"0");return`UTC${sign}${hours}${minutes}`};var winterName=extractZone(winterOffset);var summerName=extractZone(summerOffset);if(summerOffset<winterOffset){stringToUTF8(winterName,std_name,17);stringToUTF8(summerName,dst_name,17)}else{stringToUTF8(winterName,dst_name,17);stringToUTF8(summerName,std_name,17)}};var _emscripten_date_now=()=>Date.now();var getHeapMax=()=>2147483648;var growMemory=size=>{var oldHeapSize=wasmMemory.buffer.byteLength;var pages=(size-oldHeapSize+65535)/65536|0;try{wasmMemory.grow(pages);updateMemoryViews();return 1}catch(e){}};var _emscripten_resize_heap=requestedSize=>{var oldSize=HEAPU8.length;requestedSize>>>=0;var maxHeapSize=getHeapMax();if(requestedSize>maxHeapSize){return false}for(var cutDown=1;cutDown<=4;cutDown*=2){var overGrownHeapSize=oldSize*(1+.2/cutDown);overGrownHeapSize=Math.min(overGrownHeapSize,requestedSize+100663296);var newSize=Math.min(maxHeapSize,alignMemory(Math.max(requestedSize,overGrownHeapSize),65536));var replacement=growMemory(newSize);if(replacement){return true}}return false};var ENV={};var getExecutableName=()=>thisProgram||"./this.program";var getEnvStrings=()=>{if(!getEnvStrings.strings){var lang=(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8";var env={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:lang,_:getExecutableName()};for(var x in ENV){if(ENV[x]===undefined)delete env[x];else env[x]=ENV[x]}var strings=[];for(var x in env){strings.push(`${x}=${env[x]}`)}getEnvStrings.strings=strings}return getEnvStrings.strings};var _environ_get=(__environ,environ_buf)=>{var bufSize=0;var envp=0;for(var string of getEnvStrings()){var ptr=environ_buf+bufSize;HEAPU32[__environ+envp>>2]=ptr;bufSize+=stringToUTF8(string,ptr,Infinity)+1;envp+=4}return 0};var _environ_sizes_get=(penviron_count,penviron_buf_size)=>{var strings=getEnvStrings();HEAPU32[penviron_count>>2]=strings.length;var bufSize=0;for(var string of strings){bufSize+=lengthBytesUTF8(string)+1}HEAPU32[penviron_buf_size>>2]=bufSize;return 0};function _fd_close(fd){try{var stream=SYSCALLS.getStreamFromFD(fd);FS.close(stream);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}function _fd_fdstat_get(fd,pbuf){try{var rightsBase=0;var rightsInheriting=0;var flags=0;{var stream=SYSCALLS.getStreamFromFD(fd);var type=stream.tty?2:FS.isDir(stream.mode)?3:FS.isLink(stream.mode)?7:4}HEAP8[pbuf]=type;HEAP16[pbuf+2>>1]=flags;tempI64=[rightsBase>>>0,(tempDouble=rightsBase,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[pbuf+8>>2]=tempI64[0],HEAP32[pbuf+12>>2]=tempI64[1];tempI64=[rightsInheriting>>>0,(tempDouble=rightsInheriting,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[pbuf+16>>2]=tempI64[0],HEAP32[pbuf+20>>2]=tempI64[1];return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}var doReadv=(stream,iov,iovcnt,offset)=>{var ret=0;for(var i=0;i<iovcnt;i++){var ptr=HEAPU32[iov>>2];var len=HEAPU32[iov+4>>2];iov+=8;var curr=FS.read(stream,HEAP8,ptr,len,offset);if(curr<0)return-1;ret+=curr;if(curr<len)break;if(typeof offset!="undefined"){offset+=curr}}return ret};function _fd_read(fd,iov,iovcnt,pnum){try{var stream=SYSCALLS.getStreamFromFD(fd);var num=doReadv(stream,iov,iovcnt);HEAPU32[pnum>>2]=num;return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}function _fd_seek(fd,offset_low,offset_high,whence,newOffset){var offset=convertI32PairToI53Checked(offset_low,offset_high);try{if(isNaN(offset))return 61;var stream=SYSCALLS.getStreamFromFD(fd);FS.llseek(stream,offset,whence);tempI64=[stream.position>>>0,(tempDouble=stream.position,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[newOffset>>2]=tempI64[0],HEAP32[newOffset+4>>2]=tempI64[1];if(stream.getdents&&offset===0&&whence===0)stream.getdents=null;return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}function _fd_sync(fd){try{var stream=SYSCALLS.getStreamFromFD(fd);var rtn=stream.stream_ops?.fsync?.(stream);return rtn}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}var doWritev=(stream,iov,iovcnt,offset)=>{var ret=0;for(var i=0;i<iovcnt;i++){var ptr=HEAPU32[iov>>2];var len=HEAPU32[iov+4>>2];iov+=8;var curr=FS.write(stream,HEAP8,ptr,len,offset);if(curr<0)return-1;ret+=curr;if(curr<len){break}if(typeof offset!="undefined"){offset+=curr}}return ret};function _fd_write(fd,iov,iovcnt,pnum){try{var stream=SYSCALLS.getStreamFromFD(fd);var num=doWritev(stream,iov,iovcnt);HEAPU32[pnum>>2]=num;return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}var adapters_support=function(){const handleAsync=typeof Asyncify==="object"?Asyncify.handleAsync.bind(Asyncify):null;Module["handleAsync"]=handleAsync;const targets=new Map;Module["setCallback"]=(key,target)=>targets.set(key,target);Module["getCallback"]=key=>targets.get(key);Module["deleteCallback"]=key=>targets.delete(key);adapters_support=function(isAsync,key,...args){const receiver=targets.get(key);let methodName=null;const f=typeof receiver==="function"?receiver:receiver[methodName=UTF8ToString(args.shift())];if(isAsync){if(handleAsync){return handleAsync(()=>f.apply(receiver,args))}throw new Error("Synchronous WebAssembly cannot call async function")}const result=f.apply(receiver,args);if(typeof result?.then=="function"){console.error("unexpected Promise",f);throw new Error(`${methodName} unexpectedly returned a Promise`)}return result}};function _ipp(...args){return adapters_support(false,...args)}function _ipp_async(...args){return adapters_support(true,...args)}function _ippipppp(...args){return adapters_support(false,...args)}function _ippipppp_async(...args){return adapters_support(true,...args)}function _ippp(...args){return adapters_support(false,...args)}function _ippp_async(...args){return adapters_support(true,...args)}function _ipppi(...args){return adapters_support(false,...args)}function _ipppi_async(...args){return adapters_support(true,...args)}function _ipppiii(...args){return adapters_support(false,...args)}function _ipppiii_async(...args){return adapters_support(true,...args)}function _ipppiiip(...args){return adapters_support(false,...args)}function _ipppiiip_async(...args){return adapters_support(true,...args)}function _ipppip(...args){return adapters_support(false,...args)}function _ipppip_async(...args){return adapters_support(true,...args)}function _ipppj(...args){return adapters_support(false,...args)}function _ipppj_async(...args){return adapters_support(true,...args)}function _ipppp(...args){return adapters_support(false,...args)}function _ipppp_async(...args){return adapters_support(true,...args)}function _ippppi(...args){return adapters_support(false,...args)}function _ippppi_async(...args){return adapters_support(true,...args)}function _ippppij(...args){return adapters_support(false,...args)}function _ippppij_async(...args){return adapters_support(true,...args)}function _ippppip(...args){return adapters_support(false,...args)}function _ippppip_async(...args){return adapters_support(true,...args)}function _ipppppip(...args){return adapters_support(false,...args)}function _ipppppip_async(...args){return adapters_support(true,...args)}function _random_get(buffer,size){try{randomFill(HEAPU8.subarray(buffer,buffer+size));return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}function _vppippii(...args){return adapters_support(false,...args)}function _vppippii_async(...args){return adapters_support(true,...args)}function _vppp(...args){return adapters_support(false,...args)}function _vppp_async(...args){return adapters_support(true,...args)}function _vpppip(...args){return adapters_support(false,...args)}function _vpppip_async(...args){return adapters_support(true,...args)}var getWasmTableEntry=funcPtr=>wasmTable.get(funcPtr);var updateTableMap=(offset,count)=>{if(functionsInTableMap){for(var i=offset;i<offset+count;i++){var item=getWasmTableEntry(i);if(item){functionsInTableMap.set(item,i)}}}};var functionsInTableMap;var getFunctionAddress=func=>{if(!functionsInTableMap){functionsInTableMap=new WeakMap;updateTableMap(0,wasmTable.length)}return functionsInTableMap.get(func)||0};var freeTableIndexes=[];var getEmptyTableSlot=()=>{if(freeTableIndexes.length){return freeTableIndexes.pop()}return wasmTable["grow"](1)};var setWasmTableEntry=(idx,func)=>wasmTable.set(idx,func);var uleb128EncodeWithLen=arr=>{const n=arr.length;return[n%128|128,n>>7,...arr]};var wasmTypeCodes={i:127,p:127,j:126,f:125,d:124,e:111};var generateTypePack=types=>uleb128EncodeWithLen(Array.from(types,type=>{var code=wasmTypeCodes[type];return code}));var convertJsFunctionToWasm=(func,sig)=>{var bytes=Uint8Array.of(0,97,115,109,1,0,0,0,1,...uleb128EncodeWithLen([1,96,...generateTypePack(sig.slice(1)),...generateTypePack(sig[0]==="v"?"":sig[0])]),2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0);var module=new WebAssembly.Module(bytes);var instance=new WebAssembly.Instance(module,{e:{f:func}});var wrappedFunc=instance.exports["f"];return wrappedFunc};var addFunction=(func,sig)=>{var rtn=getFunctionAddress(func);if(rtn){return rtn}var ret=getEmptyTableSlot();try{setWasmTableEntry(ret,func)}catch(err){if(!(err instanceof TypeError)){throw err}var wrapped=convertJsFunctionToWasm(func,sig);setWasmTableEntry(ret,wrapped)}functionsInTableMap.set(func,ret);return ret};var getCFunc=ident=>{var func=Module["_"+ident];return func};var writeArrayToMemory=(array,buffer)=>{HEAP8.set(array,buffer)};var stackAlloc=sz=>__emscripten_stack_alloc(sz);var stringToUTF8OnStack=str=>{var size=lengthBytesUTF8(str)+1;var ret=stackAlloc(size);stringToUTF8(str,ret,size);return ret};var ccall=(ident,returnType,argTypes,args,opts)=>{var toC={string:str=>{var ret=0;if(str!==null&&str!==undefined&&str!==0){ret=stringToUTF8OnStack(str)}return ret},array:arr=>{var ret=stackAlloc(arr.length);writeArrayToMemory(arr,ret);return ret}};function convertReturnValue(ret){if(returnType==="string"){return UTF8ToString(ret)}if(returnType==="boolean")return Boolean(ret);return ret}var func=getCFunc(ident);var cArgs=[];var stack=0;if(args){for(var i=0;i<args.length;i++){var converter=toC[argTypes[i]];if(converter){if(stack===0)stack=stackSave();cArgs[i]=converter(args[i])}else{cArgs[i]=args[i]}}}var ret=func(...cArgs);function onDone(ret){if(stack!==0)stackRestore(stack);return convertReturnValue(ret)}ret=onDone(ret);return ret};var cwrap=(ident,returnType,argTypes,opts)=>{var numericArgs=!argTypes||argTypes.every(type=>type==="number"||type==="boolean");var numericRet=returnType!=="string";if(numericRet&&numericArgs&&!opts){return getCFunc(ident)}return(...args)=>ccall(ident,returnType,argTypes,args,opts)};var getTempRet0=val=>__emscripten_tempret_get();var stringToUTF16=(str,outPtr,maxBytesToWrite)=>{maxBytesToWrite??=2147483647;if(maxBytesToWrite<2)return 0;maxBytesToWrite-=2;var startPtr=outPtr;var numCharsToWrite=maxBytesToWrite<str.length*2?maxBytesToWrite/2:str.length;for(var i=0;i<numCharsToWrite;++i){var codeUnit=str.charCodeAt(i);HEAP16[outPtr>>1]=codeUnit;outPtr+=2}HEAP16[outPtr>>1]=0;return outPtr-startPtr};var stringToUTF32=(str,outPtr,maxBytesToWrite)=>{maxBytesToWrite??=2147483647;if(maxBytesToWrite<4)return 0;var startPtr=outPtr;var endPtr=startPtr+maxBytesToWrite-4;for(var i=0;i<str.length;++i){var codePoint=str.codePointAt(i);if(codePoint>65535){i++}HEAP32[outPtr>>2]=codePoint;outPtr+=4;if(outPtr+4>endPtr)break}HEAP32[outPtr>>2]=0;return outPtr-startPtr};var AsciiToString=ptr=>{var str="";while(1){var ch=HEAPU8[ptr++];if(!ch)return str;str+=String.fromCharCode(ch)}};var UTF16Decoder=new TextDecoder("utf-16le");var UTF16ToString=(ptr,maxBytesToRead,ignoreNul)=>{var idx=ptr>>1;var endIdx=findStringEnd(HEAPU16,idx,maxBytesToRead/2,ignoreNul);return UTF16Decoder.decode(HEAPU16.subarray(idx,endIdx))};var UTF32ToString=(ptr,maxBytesToRead,ignoreNul)=>{var str="";var startIdx=ptr>>2;for(var i=0;!(i>=maxBytesToRead/4);i++){var utf32=HEAPU32[startIdx+i];if(!utf32&&!ignoreNul)break;str+=String.fromCodePoint(utf32)}return str};var intArrayToString=array=>{var ret=[];for(var i=0;i<array.length;i++){var chr=array[i];if(chr>255){chr&=255}ret.push(String.fromCharCode(chr))}return ret.join("")};var _getTempRet0=getTempRet0;FS.createPreloadedFile=FS_createPreloadedFile;FS.preloadFile=FS_preloadFile;FS.staticInit();adapters_support();{if(Module["noExitRuntime"])noExitRuntime=Module["noExitRuntime"];if(Module["preloadPlugins"])preloadPlugins=Module["preloadPlugins"];if(Module["print"])out=Module["print"];if(Module["printErr"])err=Module["printErr"];if(Module["wasmBinary"])wasmBinary=Module["wasmBinary"];if(Module["arguments"])arguments_=Module["arguments"];if(Module["thisProgram"])thisProgram=Module["thisProgram"];if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].shift()()}}}Module["getTempRet0"]=getTempRet0;Module["ccall"]=ccall;Module["cwrap"]=cwrap;Module["addFunction"]=addFunction;Module["setValue"]=setValue;Module["getValue"]=getValue;Module["UTF8ToString"]=UTF8ToString;Module["stringToUTF8"]=stringToUTF8;Module["lengthBytesUTF8"]=lengthBytesUTF8;Module["intArrayFromString"]=intArrayFromString;Module["intArrayToString"]=intArrayToString;Module["AsciiToString"]=AsciiToString;Module["UTF16ToString"]=UTF16ToString;Module["stringToUTF16"]=stringToUTF16;Module["UTF32ToString"]=UTF32ToString;Module["stringToUTF32"]=stringToUTF32;Module["writeArrayToMemory"]=writeArrayToMemory;Module["_getTempRet0"]=_getTempRet0;var _powersync_init_static,_sqlite3_status64,_sqlite3_status,_sqlite3_msize,_sqlite3_db_status,_sqlite3_vfs_find,_sqlite3_vfs_register,_sqlite3_vfs_unregister,_sqlite3_release_memory,_sqlite3_soft_heap_limit64,_sqlite3_memory_used,_sqlite3_hard_heap_limit64,_sqlite3_memory_highwater,_sqlite3_malloc,_sqlite3_malloc64,_sqlite3_free,_sqlite3_realloc,_sqlite3_realloc64,_sqlite3_str_vappendf,_sqlite3_str_append,_sqlite3_str_appendchar,_sqlite3_str_appendall,_sqlite3_str_appendf,_sqlite3_str_finish,_sqlite3_str_errcode,_sqlite3_str_length,_sqlite3_str_value,_sqlite3_str_reset,_sqlite3_str_new,_sqlite3_vmprintf,_sqlite3_mprintf,_sqlite3_vsnprintf,_sqlite3_snprintf,_sqlite3_log,_sqlite3_randomness,_sqlite3_stricmp,_sqlite3_strnicmp,_sqlite3_os_init,_sqlite3_os_end,_sqlite3_serialize,_sqlite3_prepare_v2,_sqlite3_step,_sqlite3_column_int64,_sqlite3_reset,_sqlite3_exec,_sqlite3_column_int,_sqlite3_finalize,_sqlite3_deserialize,_sqlite3_database_file_object,_sqlite3_backup_init,_sqlite3_backup_step,_sqlite3_backup_finish,_sqlite3_backup_remaining,_sqlite3_backup_pagecount,_sqlite3_clear_bindings,_sqlite3_value_blob,_sqlite3_value_text,_sqlite3_value_bytes,_sqlite3_value_bytes16,_sqlite3_value_double,_sqlite3_value_int,_sqlite3_value_int64,_sqlite3_value_subtype,_sqlite3_value_pointer,_sqlite3_value_text16,_sqlite3_value_text16be,_sqlite3_value_text16le,_sqlite3_value_type,_sqlite3_value_encoding,_sqlite3_value_nochange,_sqlite3_value_frombind,_sqlite3_value_dup,_sqlite3_value_free,_sqlite3_result_blob,_sqlite3_result_blob64,_sqlite3_result_double,_sqlite3_result_error,_sqlite3_result_error16,_sqlite3_result_int,_sqlite3_result_int64,_sqlite3_result_null,_sqlite3_result_pointer,_sqlite3_result_subtype,_sqlite3_result_text,_sqlite3_result_text64,_sqlite3_result_text16,_sqlite3_result_text16be,_sqlite3_result_text16le,_sqlite3_result_value,_sqlite3_result_error_toobig,_sqlite3_result_zeroblob,_sqlite3_result_zeroblob64,_sqlite3_result_error_code,_sqlite3_result_error_nomem,_sqlite3_user_data,_sqlite3_context_db_handle,_sqlite3_vtab_nochange,_sqlite3_vtab_in_first,_sqlite3_vtab_in_next,_sqlite3_aggregate_context,_sqlite3_get_auxdata,_sqlite3_set_auxdata,_sqlite3_column_count,_sqlite3_data_count,_sqlite3_column_blob,_sqlite3_column_bytes,_sqlite3_column_bytes16,_sqlite3_column_double,_sqlite3_column_text,_sqlite3_column_value,_sqlite3_column_text16,_sqlite3_column_type,_sqlite3_column_name,_sqlite3_column_name16,_sqlite3_bind_blob,_sqlite3_bind_blob64,_sqlite3_bind_double,_sqlite3_bind_int,_sqlite3_bind_int64,_sqlite3_bind_null,_sqlite3_bind_pointer,_sqlite3_bind_text,_sqlite3_bind_text64,_sqlite3_bind_text16,_sqlite3_bind_value,_sqlite3_bind_zeroblob,_sqlite3_bind_zeroblob64,_sqlite3_bind_parameter_count,_sqlite3_bind_parameter_name,_sqlite3_bind_parameter_index,_sqlite3_db_handle,_sqlite3_stmt_readonly,_sqlite3_stmt_isexplain,_sqlite3_stmt_explain,_sqlite3_stmt_busy,_sqlite3_next_stmt,_sqlite3_stmt_status,_sqlite3_sql,_sqlite3_expanded_sql,_sqlite3_value_numeric_type,_sqlite3_blob_open,_sqlite3_blob_close,_sqlite3_blob_read,_sqlite3_blob_write,_sqlite3_blob_bytes,_sqlite3_blob_reopen,_sqlite3_set_authorizer,_sqlite3_strglob,_sqlite3_strlike,_sqlite3_errmsg,_sqlite3_load_extension,_sqlite3_enable_load_extension,_sqlite3_auto_extension,_sqlite3_cancel_auto_extension,_sqlite3_reset_auto_extension,_sqlite3_prepare,_sqlite3_prepare_v3,_sqlite3_prepare16,_sqlite3_prepare16_v2,_sqlite3_prepare16_v3,_sqlite3_get_table,_sqlite3_free_table,_sqlite3_create_module,_sqlite3_create_module_v2,_sqlite3_drop_modules,_sqlite3_declare_vtab,_sqlite3_vtab_on_conflict,_sqlite3_vtab_config,_sqlite3_vtab_collation,_sqlite3_vtab_in,_sqlite3_vtab_rhs_value,_sqlite3_vtab_distinct,_sqlite3_keyword_name,_sqlite3_keyword_count,_sqlite3_keyword_check,_sqlite3_complete,_sqlite3_complete16,_sqlite3_libversion,_sqlite3_libversion_number,_sqlite3_threadsafe,_sqlite3_initialize,_sqlite3_shutdown,_sqlite3_config,_sqlite3_db_mutex,_sqlite3_db_release_memory,_sqlite3_db_cacheflush,_sqlite3_db_config,_sqlite3_last_insert_rowid,_sqlite3_set_last_insert_rowid,_sqlite3_changes64,_sqlite3_changes,_sqlite3_total_changes64,_sqlite3_total_changes,_sqlite3_txn_state,_sqlite3_close,_sqlite3_close_v2,_sqlite3_busy_handler,_sqlite3_progress_handler,_sqlite3_busy_timeout,_sqlite3_interrupt,_sqlite3_is_interrupted,_sqlite3_create_function,_sqlite3_create_function_v2,_sqlite3_create_window_function,_sqlite3_create_function16,_sqlite3_overload_function,_sqlite3_trace_v2,_sqlite3_commit_hook,_sqlite3_update_hook,_sqlite3_rollback_hook,_sqlite3_autovacuum_pages,_sqlite3_wal_autocheckpoint,_sqlite3_wal_hook,_sqlite3_wal_checkpoint_v2,_sqlite3_wal_checkpoint,_sqlite3_error_offset,_sqlite3_errmsg16,_sqlite3_errcode,_sqlite3_extended_errcode,_sqlite3_system_errno,_sqlite3_errstr,_sqlite3_limit,_sqlite3_open,_sqlite3_open_v2,_sqlite3_open16,_sqlite3_create_collation,_sqlite3_create_collation_v2,_sqlite3_create_collation16,_sqlite3_collation_needed,_sqlite3_collation_needed16,_sqlite3_get_clientdata,_sqlite3_set_clientdata,_sqlite3_get_autocommit,_sqlite3_table_column_metadata,_sqlite3_sleep,_sqlite3_extended_result_codes,_sqlite3_file_control,_sqlite3_test_control,_sqlite3_create_filename,_sqlite3_free_filename,_sqlite3_uri_parameter,_sqlite3_uri_key,_sqlite3_uri_boolean,_sqlite3_uri_int64,_sqlite3_filename_database,_sqlite3_filename_journal,_sqlite3_filename_wal,_sqlite3_db_name,_sqlite3_db_filename,_sqlite3_db_readonly,_sqlite3_compileoption_used,_sqlite3_compileoption_get,_sqlite3_sourceid,_sqlite3mc_config,_sqlite3mc_cipher_count,_sqlite3mc_cipher_index,_sqlite3mc_cipher_name,_sqlite3mc_config_cipher,_sqlite3mc_vfs_create,_memcmp,_malloc,_free,_memset,_RegisterExtensionFunctions,_getSqliteFree,_main,_libauthorizer_set_authorizer,_libfunction_create_function,_libhook_commit_hook,_libhook_update_hook,_libprogress_progress_handler,_libvfs_vfs_register,_memcpy,_emscripten_builtin_memalign,__emscripten_timeout,__emscripten_tempret_get,__emscripten_stack_restore,__emscripten_stack_alloc,_emscripten_stack_get_current,dynCall_viiiij,dynCall_vijii,dynCall_iiiij,dynCall_viji,dynCall_iij,dynCall_iijii,dynCall_iiji,dynCall_iiiiiij,dynCall_iiij,dynCall_jii,dynCall_ji,dynCall_vij,dynCall_iiiiijii,dynCall_j,dynCall_jj,dynCall_jiij,dynCall_iiiiji,dynCall_iiiijii,dynCall_ij,dynCall_viiji,dynCall_viijii,dynCall_iiiijji,memory,_sqlite3_version,__indirect_function_table,wasmMemory,wasmTable;function assignWasmExports(wasmExports){_powersync_init_static=Module["_powersync_init_static"]=wasmExports["sa"];_sqlite3_status64=Module["_sqlite3_status64"]=wasmExports["ta"];_sqlite3_status=Module["_sqlite3_status"]=wasmExports["ua"];_sqlite3_msize=Module["_sqlite3_msize"]=wasmExports["va"];_sqlite3_db_status=Module["_sqlite3_db_status"]=wasmExports["wa"];_sqlite3_vfs_find=Module["_sqlite3_vfs_find"]=wasmExports["xa"];_sqlite3_vfs_register=Module["_sqlite3_vfs_register"]=wasmExports["ya"];_sqlite3_vfs_unregister=Module["_sqlite3_vfs_unregister"]=wasmExports["za"];_sqlite3_release_memory=Module["_sqlite3_release_memory"]=wasmExports["Aa"];_sqlite3_soft_heap_limit64=Module["_sqlite3_soft_heap_limit64"]=wasmExports["Ba"];_sqlite3_memory_used=Module["_sqlite3_memory_used"]=wasmExports["Ca"];_sqlite3_hard_heap_limit64=Module["_sqlite3_hard_heap_limit64"]=wasmExports["Da"];_sqlite3_memory_highwater=Module["_sqlite3_memory_highwater"]=wasmExports["Ea"];_sqlite3_malloc=Module["_sqlite3_malloc"]=wasmExports["Fa"];_sqlite3_malloc64=Module["_sqlite3_malloc64"]=wasmExports["Ga"];_sqlite3_free=Module["_sqlite3_free"]=wasmExports["Ha"];_sqlite3_realloc=Module["_sqlite3_realloc"]=wasmExports["Ia"];_sqlite3_realloc64=Module["_sqlite3_realloc64"]=wasmExports["Ja"];_sqlite3_str_vappendf=Module["_sqlite3_str_vappendf"]=wasmExports["Ka"];_sqlite3_str_append=Module["_sqlite3_str_append"]=wasmExports["La"];_sqlite3_str_appendchar=Module["_sqlite3_str_appendchar"]=wasmExports["Ma"];_sqlite3_str_appendall=Module["_sqlite3_str_appendall"]=wasmExports["Na"];_sqlite3_str_appendf=Module["_sqlite3_str_appendf"]=wasmExports["Oa"];_sqlite3_str_finish=Module["_sqlite3_str_finish"]=wasmExports["Pa"];_sqlite3_str_errcode=Module["_sqlite3_str_errcode"]=wasmExports["Qa"];_sqlite3_str_length=Module["_sqlite3_str_length"]=wasmExports["Ra"];_sqlite3_str_value=Module["_sqlite3_str_value"]=wasmExports["Sa"];_sqlite3_str_reset=Module["_sqlite3_str_reset"]=wasmExports["Ta"];_sqlite3_str_new=Module["_sqlite3_str_new"]=wasmExports["Ua"];_sqlite3_vmprintf=Module["_sqlite3_vmprintf"]=wasmExports["Va"];_sqlite3_mprintf=Module["_sqlite3_mprintf"]=wasmExports["Wa"];_sqlite3_vsnprintf=Module["_sqlite3_vsnprintf"]=wasmExports["Xa"];_sqlite3_snprintf=Module["_sqlite3_snprintf"]=wasmExports["Ya"];_sqlite3_log=Module["_sqlite3_log"]=wasmExports["Za"];_sqlite3_randomness=Module["_sqlite3_randomness"]=wasmExports["_a"];_sqlite3_stricmp=Module["_sqlite3_stricmp"]=wasmExports["$a"];_sqlite3_strnicmp=Module["_sqlite3_strnicmp"]=wasmExports["ab"];_sqlite3_os_init=Module["_sqlite3_os_init"]=wasmExports["bb"];_sqlite3_os_end=Module["_sqlite3_os_end"]=wasmExports["cb"];_sqlite3_serialize=Module["_sqlite3_serialize"]=wasmExports["db"];_sqlite3_prepare_v2=Module["_sqlite3_prepare_v2"]=wasmExports["eb"];_sqlite3_step=Module["_sqlite3_step"]=wasmExports["fb"];_sqlite3_column_int64=Module["_sqlite3_column_int64"]=wasmExports["gb"];_sqlite3_reset=Module["_sqlite3_reset"]=wasmExports["hb"];_sqlite3_exec=Module["_sqlite3_exec"]=wasmExports["ib"];_sqlite3_column_int=Module["_sqlite3_column_int"]=wasmExports["jb"];_sqlite3_finalize=Module["_sqlite3_finalize"]=wasmExports["kb"];_sqlite3_deserialize=Module["_sqlite3_deserialize"]=wasmExports["lb"];_sqlite3_database_file_object=Module["_sqlite3_database_file_object"]=wasmExports["mb"];_sqlite3_backup_init=Module["_sqlite3_backup_init"]=wasmExports["nb"];_sqlite3_backup_step=Module["_sqlite3_backup_step"]=wasmExports["ob"];_sqlite3_backup_finish=Module["_sqlite3_backup_finish"]=wasmExports["pb"];_sqlite3_backup_remaining=Module["_sqlite3_backup_remaining"]=wasmExports["qb"];_sqlite3_backup_pagecount=Module["_sqlite3_backup_pagecount"]=wasmExports["rb"];_sqlite3_clear_bindings=Module["_sqlite3_clear_bindings"]=wasmExports["sb"];_sqlite3_value_blob=Module["_sqlite3_value_blob"]=wasmExports["tb"];_sqlite3_value_text=Module["_sqlite3_value_text"]=wasmExports["ub"];_sqlite3_value_bytes=Module["_sqlite3_value_bytes"]=wasmExports["vb"];_sqlite3_value_bytes16=Module["_sqlite3_value_bytes16"]=wasmExports["wb"];_sqlite3_value_double=Module["_sqlite3_value_double"]=wasmExports["xb"];_sqlite3_value_int=Module["_sqlite3_value_int"]=wasmExports["yb"];_sqlite3_value_int64=Module["_sqlite3_value_int64"]=wasmExports["zb"];_sqlite3_value_subtype=Module["_sqlite3_value_subtype"]=wasmExports["Ab"];_sqlite3_value_pointer=Module["_sqlite3_value_pointer"]=wasmExports["Bb"];_sqlite3_value_text16=Module["_sqlite3_value_text16"]=wasmExports["Cb"];_sqlite3_value_text16be=Module["_sqlite3_value_text16be"]=wasmExports["Db"];_sqlite3_value_text16le=Module["_sqlite3_value_text16le"]=wasmExports["Eb"];_sqlite3_value_type=Module["_sqlite3_value_type"]=wasmExports["Fb"];_sqlite3_value_encoding=Module["_sqlite3_value_encoding"]=wasmExports["Gb"];_sqlite3_value_nochange=Module["_sqlite3_value_nochange"]=wasmExports["Hb"];_sqlite3_value_frombind=Module["_sqlite3_value_frombind"]=wasmExports["Ib"];_sqlite3_value_dup=Module["_sqlite3_value_dup"]=wasmExports["Jb"];_sqlite3_value_free=Module["_sqlite3_value_free"]=wasmExports["Kb"];_sqlite3_result_blob=Module["_sqlite3_result_blob"]=wasmExports["Lb"];_sqlite3_result_blob64=Module["_sqlite3_result_blob64"]=wasmExports["Mb"];_sqlite3_result_double=Module["_sqlite3_result_double"]=wasmExports["Nb"];_sqlite3_result_error=Module["_sqlite3_result_error"]=wasmExports["Ob"];_sqlite3_result_error16=Module["_sqlite3_result_error16"]=wasmExports["Pb"];_sqlite3_result_int=Module["_sqlite3_result_int"]=wasmExports["Qb"];_sqlite3_result_int64=Module["_sqlite3_result_int64"]=wasmExports["Rb"];_sqlite3_result_null=Module["_sqlite3_result_null"]=wasmExports["Sb"];_sqlite3_result_pointer=Module["_sqlite3_result_pointer"]=wasmExports["Tb"];_sqlite3_result_subtype=Module["_sqlite3_result_subtype"]=wasmExports["Ub"];_sqlite3_result_text=Module["_sqlite3_result_text"]=wasmExports["Vb"];_sqlite3_result_text64=Module["_sqlite3_result_text64"]=wasmExports["Wb"];_sqlite3_result_text16=Module["_sqlite3_result_text16"]=wasmExports["Xb"];_sqlite3_result_text16be=Module["_sqlite3_result_text16be"]=wasmExports["Yb"];_sqlite3_result_text16le=Module["_sqlite3_result_text16le"]=wasmExports["Zb"];_sqlite3_result_value=Module["_sqlite3_result_value"]=wasmExports["_b"];_sqlite3_result_error_toobig=Module["_sqlite3_result_error_toobig"]=wasmExports["$b"];_sqlite3_result_zeroblob=Module["_sqlite3_result_zeroblob"]=wasmExports["ac"];_sqlite3_result_zeroblob64=Module["_sqlite3_result_zeroblob64"]=wasmExports["bc"];_sqlite3_result_error_code=Module["_sqlite3_result_error_code"]=wasmExports["cc"];_sqlite3_result_error_nomem=Module["_sqlite3_result_error_nomem"]=wasmExports["dc"];_sqlite3_user_data=Module["_sqlite3_user_data"]=wasmExports["ec"];_sqlite3_context_db_handle=Module["_sqlite3_context_db_handle"]=wasmExports["fc"];_sqlite3_vtab_nochange=Module["_sqlite3_vtab_nochange"]=wasmExports["gc"];_sqlite3_vtab_in_first=Module["_sqlite3_vtab_in_first"]=wasmExports["hc"];_sqlite3_vtab_in_next=Module["_sqlite3_vtab_in_next"]=wasmExports["ic"];_sqlite3_aggregate_context=Module["_sqlite3_aggregate_context"]=wasmExports["jc"];_sqlite3_get_auxdata=Module["_sqlite3_get_auxdata"]=wasmExports["kc"];_sqlite3_set_auxdata=Module["_sqlite3_set_auxdata"]=wasmExports["lc"];_sqlite3_column_count=Module["_sqlite3_column_count"]=wasmExports["mc"];_sqlite3_data_count=Module["_sqlite3_data_count"]=wasmExports["nc"];_sqlite3_column_blob=Module["_sqlite3_column_blob"]=wasmExports["oc"];_sqlite3_column_bytes=Module["_sqlite3_column_bytes"]=wasmExports["pc"];_sqlite3_column_bytes16=Module["_sqlite3_column_bytes16"]=wasmExports["qc"];_sqlite3_column_double=Module["_sqlite3_column_double"]=wasmExports["rc"];_sqlite3_column_text=Module["_sqlite3_column_text"]=wasmExports["sc"];_sqlite3_column_value=Module["_sqlite3_column_value"]=wasmExports["tc"];_sqlite3_column_text16=Module["_sqlite3_column_text16"]=wasmExports["uc"];_sqlite3_column_type=Module["_sqlite3_column_type"]=wasmExports["vc"];_sqlite3_column_name=Module["_sqlite3_column_name"]=wasmExports["wc"];_sqlite3_column_name16=Module["_sqlite3_column_name16"]=wasmExports["xc"];_sqlite3_bind_blob=Module["_sqlite3_bind_blob"]=wasmExports["yc"];_sqlite3_bind_blob64=Module["_sqlite3_bind_blob64"]=wasmExports["zc"];_sqlite3_bind_double=Module["_sqlite3_bind_double"]=wasmExports["Ac"];_sqlite3_bind_int=Module["_sqlite3_bind_int"]=wasmExports["Bc"];_sqlite3_bind_int64=Module["_sqlite3_bind_int64"]=wasmExports["Cc"];_sqlite3_bind_null=Module["_sqlite3_bind_null"]=wasmExports["Dc"];_sqlite3_bind_pointer=Module["_sqlite3_bind_pointer"]=wasmExports["Ec"];_sqlite3_bind_text=Module["_sqlite3_bind_text"]=wasmExports["Fc"];_sqlite3_bind_text64=Module["_sqlite3_bind_text64"]=wasmExports["Gc"];_sqlite3_bind_text16=Module["_sqlite3_bind_text16"]=wasmExports["Hc"];_sqlite3_bind_value=Module["_sqlite3_bind_value"]=wasmExports["Ic"];_sqlite3_bind_zeroblob=Module["_sqlite3_bind_zeroblob"]=wasmExports["Jc"];_sqlite3_bind_zeroblob64=Module["_sqlite3_bind_zeroblob64"]=wasmExports["Kc"];_sqlite3_bind_parameter_count=Module["_sqlite3_bind_parameter_count"]=wasmExports["Lc"];_sqlite3_bind_parameter_name=Module["_sqlite3_bind_parameter_name"]=wasmExports["Mc"];_sqlite3_bind_parameter_index=Module["_sqlite3_bind_parameter_index"]=wasmExports["Nc"];_sqlite3_db_handle=Module["_sqlite3_db_handle"]=wasmExports["Oc"];_sqlite3_stmt_readonly=Module["_sqlite3_stmt_readonly"]=wasmExports["Pc"];_sqlite3_stmt_isexplain=Module["_sqlite3_stmt_isexplain"]=wasmExports["Qc"];_sqlite3_stmt_explain=Module["_sqlite3_stmt_explain"]=wasmExports["Rc"];_sqlite3_stmt_busy=Module["_sqlite3_stmt_busy"]=wasmExports["Sc"];_sqlite3_next_stmt=Module["_sqlite3_next_stmt"]=wasmExports["Tc"];_sqlite3_stmt_status=Module["_sqlite3_stmt_status"]=wasmExports["Uc"];_sqlite3_sql=Module["_sqlite3_sql"]=wasmExports["Vc"];_sqlite3_expanded_sql=Module["_sqlite3_expanded_sql"]=wasmExports["Wc"];_sqlite3_value_numeric_type=Module["_sqlite3_value_numeric_type"]=wasmExports["Xc"];_sqlite3_blob_open=Module["_sqlite3_blob_open"]=wasmExports["Yc"];_sqlite3_blob_close=Module["_sqlite3_blob_close"]=wasmExports["Zc"];_sqlite3_blob_read=Module["_sqlite3_blob_read"]=wasmExports["_c"];_sqlite3_blob_write=Module["_sqlite3_blob_write"]=wasmExports["$c"];_sqlite3_blob_bytes=Module["_sqlite3_blob_bytes"]=wasmExports["ad"];_sqlite3_blob_reopen=Module["_sqlite3_blob_reopen"]=wasmExports["bd"];_sqlite3_set_authorizer=Module["_sqlite3_set_authorizer"]=wasmExports["cd"];_sqlite3_strglob=Module["_sqlite3_strglob"]=wasmExports["dd"];_sqlite3_strlike=Module["_sqlite3_strlike"]=wasmExports["ed"];_sqlite3_errmsg=Module["_sqlite3_errmsg"]=wasmExports["fd"];_sqlite3_load_extension=Module["_sqlite3_load_extension"]=wasmExports["gd"];_sqlite3_enable_load_extension=Module["_sqlite3_enable_load_extension"]=wasmExports["hd"];_sqlite3_auto_extension=Module["_sqlite3_auto_extension"]=wasmExports["id"];_sqlite3_cancel_auto_extension=Module["_sqlite3_cancel_auto_extension"]=wasmExports["jd"];_sqlite3_reset_auto_extension=Module["_sqlite3_reset_auto_extension"]=wasmExports["kd"];_sqlite3_prepare=Module["_sqlite3_prepare"]=wasmExports["ld"];_sqlite3_prepare_v3=Module["_sqlite3_prepare_v3"]=wasmExports["md"];_sqlite3_prepare16=Module["_sqlite3_prepare16"]=wasmExports["nd"];_sqlite3_prepare16_v2=Module["_sqlite3_prepare16_v2"]=wasmExports["od"];_sqlite3_prepare16_v3=Module["_sqlite3_prepare16_v3"]=wasmExports["pd"];_sqlite3_get_table=Module["_sqlite3_get_table"]=wasmExports["qd"];_sqlite3_free_table=Module["_sqlite3_free_table"]=wasmExports["rd"];_sqlite3_create_module=Module["_sqlite3_create_module"]=wasmExports["sd"];_sqlite3_create_module_v2=Module["_sqlite3_create_module_v2"]=wasmExports["td"];_sqlite3_drop_modules=Module["_sqlite3_drop_modules"]=wasmExports["ud"];_sqlite3_declare_vtab=Module["_sqlite3_declare_vtab"]=wasmExports["vd"];_sqlite3_vtab_on_conflict=Module["_sqlite3_vtab_on_conflict"]=wasmExports["wd"];_sqlite3_vtab_config=Module["_sqlite3_vtab_config"]=wasmExports["xd"];_sqlite3_vtab_collation=Module["_sqlite3_vtab_collation"]=wasmExports["yd"];_sqlite3_vtab_in=Module["_sqlite3_vtab_in"]=wasmExports["zd"];_sqlite3_vtab_rhs_value=Module["_sqlite3_vtab_rhs_value"]=wasmExports["Ad"];_sqlite3_vtab_distinct=Module["_sqlite3_vtab_distinct"]=wasmExports["Bd"];_sqlite3_keyword_name=Module["_sqlite3_keyword_name"]=wasmExports["Cd"];_sqlite3_keyword_count=Module["_sqlite3_keyword_count"]=wasmExports["Dd"];_sqlite3_keyword_check=Module["_sqlite3_keyword_check"]=wasmExports["Ed"];_sqlite3_complete=Module["_sqlite3_complete"]=wasmExports["Fd"];_sqlite3_complete16=Module["_sqlite3_complete16"]=wasmExports["Gd"];_sqlite3_libversion=Module["_sqlite3_libversion"]=wasmExports["Hd"];_sqlite3_libversion_number=Module["_sqlite3_libversion_number"]=wasmExports["Id"];_sqlite3_threadsafe=Module["_sqlite3_threadsafe"]=wasmExports["Jd"];_sqlite3_initialize=Module["_sqlite3_initialize"]=wasmExports["Kd"];_sqlite3_shutdown=Module["_sqlite3_shutdown"]=wasmExports["Ld"];_sqlite3_config=Module["_sqlite3_config"]=wasmExports["Md"];_sqlite3_db_mutex=Module["_sqlite3_db_mutex"]=wasmExports["Nd"];_sqlite3_db_release_memory=Module["_sqlite3_db_release_memory"]=wasmExports["Od"];_sqlite3_db_cacheflush=Module["_sqlite3_db_cacheflush"]=wasmExports["Pd"];_sqlite3_db_config=Module["_sqlite3_db_config"]=wasmExports["Qd"];_sqlite3_last_insert_rowid=Module["_sqlite3_last_insert_rowid"]=wasmExports["Rd"];_sqlite3_set_last_insert_rowid=Module["_sqlite3_set_last_insert_rowid"]=wasmExports["Sd"];_sqlite3_changes64=Module["_sqlite3_changes64"]=wasmExports["Td"];_sqlite3_changes=Module["_sqlite3_changes"]=wasmExports["Ud"];_sqlite3_total_changes64=Module["_sqlite3_total_changes64"]=wasmExports["Vd"];_sqlite3_total_changes=Module["_sqlite3_total_changes"]=wasmExports["Wd"];_sqlite3_txn_state=Module["_sqlite3_txn_state"]=wasmExports["Xd"];_sqlite3_close=Module["_sqlite3_close"]=wasmExports["Yd"];_sqlite3_close_v2=Module["_sqlite3_close_v2"]=wasmExports["Zd"];_sqlite3_busy_handler=Module["_sqlite3_busy_handler"]=wasmExports["_d"];_sqlite3_progress_handler=Module["_sqlite3_progress_handler"]=wasmExports["$d"];_sqlite3_busy_timeout=Module["_sqlite3_busy_timeout"]=wasmExports["ae"];_sqlite3_interrupt=Module["_sqlite3_interrupt"]=wasmExports["be"];_sqlite3_is_interrupted=Module["_sqlite3_is_interrupted"]=wasmExports["ce"];_sqlite3_create_function=Module["_sqlite3_create_function"]=wasmExports["de"];_sqlite3_create_function_v2=Module["_sqlite3_create_function_v2"]=wasmExports["ee"];_sqlite3_create_window_function=Module["_sqlite3_create_window_function"]=wasmExports["fe"];_sqlite3_create_function16=Module["_sqlite3_create_function16"]=wasmExports["ge"];_sqlite3_overload_function=Module["_sqlite3_overload_function"]=wasmExports["he"];_sqlite3_trace_v2=Module["_sqlite3_trace_v2"]=wasmExports["ie"];_sqlite3_commit_hook=Module["_sqlite3_commit_hook"]=wasmExports["je"];_sqlite3_update_hook=Module["_sqlite3_update_hook"]=wasmExports["ke"];_sqlite3_rollback_hook=Module["_sqlite3_rollback_hook"]=wasmExports["le"];_sqlite3_autovacuum_pages=Module["_sqlite3_autovacuum_pages"]=wasmExports["me"];_sqlite3_wal_autocheckpoint=Module["_sqlite3_wal_autocheckpoint"]=wasmExports["ne"];_sqlite3_wal_hook=Module["_sqlite3_wal_hook"]=wasmExports["oe"];_sqlite3_wal_checkpoint_v2=Module["_sqlite3_wal_checkpoint_v2"]=wasmExports["pe"];_sqlite3_wal_checkpoint=Module["_sqlite3_wal_checkpoint"]=wasmExports["qe"];_sqlite3_error_offset=Module["_sqlite3_error_offset"]=wasmExports["re"];_sqlite3_errmsg16=Module["_sqlite3_errmsg16"]=wasmExports["se"];_sqlite3_errcode=Module["_sqlite3_errcode"]=wasmExports["te"];_sqlite3_extended_errcode=Module["_sqlite3_extended_errcode"]=wasmExports["ue"];_sqlite3_system_errno=Module["_sqlite3_system_errno"]=wasmExports["ve"];_sqlite3_errstr=Module["_sqlite3_errstr"]=wasmExports["we"];_sqlite3_limit=Module["_sqlite3_limit"]=wasmExports["xe"];_sqlite3_open=Module["_sqlite3_open"]=wasmExports["ye"];_sqlite3_open_v2=Module["_sqlite3_open_v2"]=wasmExports["ze"];_sqlite3_open16=Module["_sqlite3_open16"]=wasmExports["Ae"];_sqlite3_create_collation=Module["_sqlite3_create_collation"]=wasmExports["Be"];_sqlite3_create_collation_v2=Module["_sqlite3_create_collation_v2"]=wasmExports["Ce"];_sqlite3_create_collation16=Module["_sqlite3_create_collation16"]=wasmExports["De"];_sqlite3_collation_needed=Module["_sqlite3_collation_needed"]=wasmExports["Ee"];_sqlite3_collation_needed16=Module["_sqlite3_collation_needed16"]=wasmExports["Fe"];_sqlite3_get_clientdata=Module["_sqlite3_get_clientdata"]=wasmExports["Ge"];_sqlite3_set_clientdata=Module["_sqlite3_set_clientdata"]=wasmExports["He"];_sqlite3_get_autocommit=Module["_sqlite3_get_autocommit"]=wasmExports["Ie"];_sqlite3_table_column_metadata=Module["_sqlite3_table_column_metadata"]=wasmExports["Je"];_sqlite3_sleep=Module["_sqlite3_sleep"]=wasmExports["Ke"];_sqlite3_extended_result_codes=Module["_sqlite3_extended_result_codes"]=wasmExports["Le"];_sqlite3_file_control=Module["_sqlite3_file_control"]=wasmExports["Me"];_sqlite3_test_control=Module["_sqlite3_test_control"]=wasmExports["Ne"];_sqlite3_create_filename=Module["_sqlite3_create_filename"]=wasmExports["Oe"];_sqlite3_free_filename=Module["_sqlite3_free_filename"]=wasmExports["Pe"];_sqlite3_uri_parameter=Module["_sqlite3_uri_parameter"]=wasmExports["Qe"];_sqlite3_uri_key=Module["_sqlite3_uri_key"]=wasmExports["Re"];_sqlite3_uri_boolean=Module["_sqlite3_uri_boolean"]=wasmExports["Se"];_sqlite3_uri_int64=Module["_sqlite3_uri_int64"]=wasmExports["Te"];_sqlite3_filename_database=Module["_sqlite3_filename_database"]=wasmExports["Ue"];_sqlite3_filename_journal=Module["_sqlite3_filename_journal"]=wasmExports["Ve"];_sqlite3_filename_wal=Module["_sqlite3_filename_wal"]=wasmExports["We"];_sqlite3_db_name=Module["_sqlite3_db_name"]=wasmExports["Xe"];_sqlite3_db_filename=Module["_sqlite3_db_filename"]=wasmExports["Ye"];_sqlite3_db_readonly=Module["_sqlite3_db_readonly"]=wasmExports["Ze"];_sqlite3_compileoption_used=Module["_sqlite3_compileoption_used"]=wasmExports["_e"];_sqlite3_compileoption_get=Module["_sqlite3_compileoption_get"]=wasmExports["$e"];_sqlite3_sourceid=Module["_sqlite3_sourceid"]=wasmExports["af"];_sqlite3mc_config=Module["_sqlite3mc_config"]=wasmExports["bf"];_sqlite3mc_cipher_count=Module["_sqlite3mc_cipher_count"]=wasmExports["cf"];_sqlite3mc_cipher_index=Module["_sqlite3mc_cipher_index"]=wasmExports["df"];_sqlite3mc_cipher_name=Module["_sqlite3mc_cipher_name"]=wasmExports["ef"];_sqlite3mc_config_cipher=Module["_sqlite3mc_config_cipher"]=wasmExports["ff"];_sqlite3mc_vfs_create=Module["_sqlite3mc_vfs_create"]=wasmExports["gf"];_memcmp=Module["_memcmp"]=wasmExports["hf"];_malloc=Module["_malloc"]=wasmExports["jf"];_free=Module["_free"]=wasmExports["kf"];_memset=Module["_memset"]=wasmExports["lf"];_RegisterExtensionFunctions=Module["_RegisterExtensionFunctions"]=wasmExports["nf"];_getSqliteFree=Module["_getSqliteFree"]=wasmExports["of"];_main=Module["_main"]=wasmExports["pf"];_libauthorizer_set_authorizer=Module["_libauthorizer_set_authorizer"]=wasmExports["qf"];_libfunction_create_function=Module["_libfunction_create_function"]=wasmExports["rf"];_libhook_commit_hook=Module["_libhook_commit_hook"]=wasmExports["sf"];_libhook_update_hook=Module["_libhook_update_hook"]=wasmExports["tf"];_libprogress_progress_handler=Module["_libprogress_progress_handler"]=wasmExports["uf"];_libvfs_vfs_register=Module["_libvfs_vfs_register"]=wasmExports["vf"];_memcpy=Module["_memcpy"]=wasmExports["wf"];_emscripten_builtin_memalign=wasmExports["yf"];__emscripten_timeout=wasmExports["zf"];__emscripten_tempret_get=wasmExports["Af"];__emscripten_stack_restore=wasmExports["Bf"];__emscripten_stack_alloc=wasmExports["Cf"];_emscripten_stack_get_current=wasmExports["Df"];dynCall_viiiij=wasmExports["dynCall_viiiij"];dynCall_vijii=wasmExports["dynCall_vijii"];dynCall_iiiij=wasmExports["dynCall_iiiij"];dynCall_viji=wasmExports["dynCall_viji"];dynCall_iij=wasmExports["dynCall_iij"];dynCall_iijii=wasmExports["dynCall_iijii"];dynCall_iiji=wasmExports["dynCall_iiji"];dynCall_iiiiiij=wasmExports["dynCall_iiiiiij"];dynCall_iiij=wasmExports["dynCall_iiij"];dynCall_jii=wasmExports["dynCall_jii"];dynCall_ji=wasmExports["dynCall_ji"];dynCall_vij=wasmExports["dynCall_vij"];dynCall_iiiiijii=wasmExports["dynCall_iiiiijii"];dynCall_j=wasmExports["dynCall_j"];dynCall_jj=wasmExports["dynCall_jj"];dynCall_jiij=wasmExports["dynCall_jiij"];dynCall_iiiiji=wasmExports["dynCall_iiiiji"];dynCall_iiiijii=wasmExports["dynCall_iiiijii"];dynCall_ij=wasmExports["dynCall_ij"];dynCall_viiji=wasmExports["dynCall_viiji"];dynCall_viijii=wasmExports["dynCall_viijii"];dynCall_iiiijji=wasmExports["dynCall_iiiijji"];memory=wasmMemory=wasmExports["qa"];_sqlite3_version=Module["_sqlite3_version"]=wasmExports["mf"].value;__indirect_function_table=wasmTable=wasmExports["xf"]}var wasmImports={a:___assert_fail,aa:___syscall_chmod,ca:___syscall_faccessat,ba:___syscall_fchmod,$:___syscall_fchown32,b:___syscall_fcntl64,_:___syscall_fstat64,y:___syscall_ftruncate64,U:___syscall_getcwd,Y:___syscall_lstat64,Q:___syscall_mkdirat,W:___syscall_newfstatat,O:___syscall_openat,M:___syscall_readlinkat,L:___syscall_rmdir,Z:___syscall_stat64,J:___syscall_unlinkat,I:___syscall_utimensat,ea:__abort_js,E:__emscripten_runtime_keepalive_clear,w:__localtime_js,u:__mmap_js,v:__munmap_js,F:__setitimer_js,P:__tzset_js,n:_emscripten_date_now,g:_emscripten_get_now,G:_emscripten_resize_heap,R:_environ_get,S:_environ_sizes_get,o:_fd_close,H:_fd_fdstat_get,N:_fd_read,x:_fd_seek,V:_fd_sync,K:_fd_write,s:_ipp,t:_ipp_async,la:_ippipppp,pa:_ippipppp_async,j:_ippp,k:_ippp_async,c:_ipppi,d:_ipppi_async,ha:_ipppiii,ia:_ipppiii_async,ja:_ipppiiip,ka:_ipppiiip_async,h:_ipppip,i:_ipppip_async,z:_ipppj,A:_ipppj_async,e:_ipppp,f:_ipppp_async,fa:_ippppi,ga:_ippppi_async,B:_ippppij,C:_ippppij_async,p:_ippppip,q:_ippppip_async,ma:_ipppppip,na:_ipppppip_async,D:_proc_exit,T:_random_get,oa:_vppippii,r:_vppippii_async,l:_vppp,m:_vppp_async,X:_vpppip,da:_vpppip_async};function callMain(){var entryFunction=_main;var argc=0;var argv=0;try{var ret=entryFunction(argc,argv);exitJS(ret,true);return ret}catch(e){return handleException(e)}}function run(){if(runDependencies>0){dependenciesFulfilled=run;return}preRun();if(runDependencies>0){dependenciesFulfilled=run;return}function doRun(){Module["calledRun"]=true;if(ABORT)return;initRuntime();preMain();readyPromiseResolve?.(Module);Module["onRuntimeInitialized"]?.();var noInitialRun=Module["noInitialRun"]||false;if(!noInitialRun)callMain();postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout(()=>{setTimeout(()=>Module["setStatus"](""),1);doRun()},1)}else{doRun()}}var wasmExports;wasmExports=await (createWasm());run();(function(){const AsyncFunction=Object.getPrototypeOf(async function(){}).constructor;let pAsyncFlags=0;Module["set_authorizer"]=function(db,xAuthorizer,pApp){if(pAsyncFlags){Module["deleteCallback"](pAsyncFlags);Module["_sqlite3_free"](pAsyncFlags);pAsyncFlags=0}pAsyncFlags=Module["_sqlite3_malloc"](4);setValue(pAsyncFlags,xAuthorizer instanceof AsyncFunction?1:0,"i32");const result=ccall("libauthorizer_set_authorizer","number",["number","number","number"],[db,xAuthorizer?1:0,pAsyncFlags]);if(!result&&xAuthorizer){Module["setCallback"](pAsyncFlags,(_,iAction,p3,p4,p5,p6)=>xAuthorizer(pApp,iAction,p3,p4,p5,p6))}return result}})();(function(){const AsyncFunction=Object.getPrototypeOf(async function(){}).constructor;const FUNC_METHODS=["xFunc","xStep","xFinal"];const mapFunctionNameToKey=new Map;Module["create_function"]=function(db,zFunctionName,nArg,eTextRep,pApp,xFunc,xStep,xFinal){const pAsyncFlags=Module["_sqlite3_malloc"](4);const target={xFunc,xStep,xFinal};setValue(pAsyncFlags,FUNC_METHODS.reduce((mask,method,i)=>{if(target[method]instanceof AsyncFunction){return mask|1<<i}return mask},0),"i32");const result=ccall("libfunction_create_function","number",["number","string","number","number","number","number","number","number"],[db,zFunctionName,nArg,eTextRep,pAsyncFlags,xFunc?1:0,xStep?1:0,xFinal?1:0]);if(!result){if(mapFunctionNameToKey.has(zFunctionName)){const oldKey=mapFunctionNameToKey.get(zFunctionName);Module["deleteCallback"](oldKey)}mapFunctionNameToKey.set(zFunctionName,pAsyncFlags);Module["setCallback"](pAsyncFlags,{xFunc,xStep,xFinal})}return result}})();(function(){const AsyncFunction=Object.getPrototypeOf(async function(){}).constructor;let pAsyncFlags=0;Module["update_hook"]=function(db,xUpdateHook){if(pAsyncFlags){Module["deleteCallback"](pAsyncFlags);Module["_sqlite3_free"](pAsyncFlags);pAsyncFlags=0}pAsyncFlags=Module["_sqlite3_malloc"](4);setValue(pAsyncFlags,xUpdateHook instanceof AsyncFunction?1:0,"i32");ccall("libhook_update_hook","void",["number","number","number"],[db,xUpdateHook?1:0,pAsyncFlags]);if(xUpdateHook){Module["setCallback"](pAsyncFlags,(_,iUpdateType,dbName,tblName,lo32,hi32)=>xUpdateHook(iUpdateType,dbName,tblName,lo32,hi32))}}})();(function(){const AsyncFunction=Object.getPrototypeOf(async function(){}).constructor;let pAsyncFlags=0;Module["commit_hook"]=function(db,xCommitHook){if(pAsyncFlags){Module["deleteCallback"](pAsyncFlags);Module["_sqlite3_free"](pAsyncFlags);pAsyncFlags=0}pAsyncFlags=Module["_sqlite3_malloc"](4);setValue(pAsyncFlags,xCommitHook instanceof AsyncFunction?1:0,"i32");ccall("libhook_commit_hook","void",["number","number","number"],[db,xCommitHook?1:0,pAsyncFlags]);if(xCommitHook){Module["setCallback"](pAsyncFlags,_=>xCommitHook())}}})();(function(){const AsyncFunction=Object.getPrototypeOf(async function(){}).constructor;let pAsyncFlags=0;Module["progress_handler"]=function(db,nOps,xProgress,pApp){if(pAsyncFlags){Module["deleteCallback"](pAsyncFlags);Module["_sqlite3_free"](pAsyncFlags);pAsyncFlags=0}pAsyncFlags=Module["_sqlite3_malloc"](4);setValue(pAsyncFlags,xProgress instanceof AsyncFunction?1:0,"i32");ccall("libprogress_progress_handler","number",["number","number","number","number"],[db,nOps,xProgress?1:0,pAsyncFlags]);if(xProgress){Module["setCallback"](pAsyncFlags,_=>xProgress(pApp))}}})();(function(){const VFS_METHODS=["xOpen","xDelete","xAccess","xFullPathname","xRandomness","xSleep","xCurrentTime","xGetLastError","xCurrentTimeInt64","xClose","xRead","xWrite","xTruncate","xSync","xFileSize","xLock","xUnlock","xCheckReservedLock","xFileControl","xSectorSize","xDeviceCharacteristics","xShmMap","xShmLock","xShmBarrier","xShmUnmap"];const mapVFSNameToKey=new Map;Module["vfs_register"]=function(vfs,makeDefault){let methodMask=0;let asyncMask=0;VFS_METHODS.forEach((method,i)=>{if(vfs[method]){methodMask|=1<<i;if(vfs["hasAsyncMethod"](method)){asyncMask|=1<<i}}});const vfsReturn=Module["_sqlite3_malloc"](4);try{const result=ccall("libvfs_vfs_register","number",["string","number","number","number","number","number"],[vfs.name,vfs.mxPathname,methodMask,asyncMask,makeDefault?1:0,vfsReturn]);if(!result){if(mapVFSNameToKey.has(vfs.name)){const oldKey=mapVFSNameToKey.get(vfs.name);Module["deleteCallback"](oldKey)}const key=getValue(vfsReturn,"*");mapVFSNameToKey.set(vfs.name,key);Module["setCallback"](key,vfs)}return result}finally{Module["_sqlite3_free"](vfsReturn)}}})();if(runtimeInitialized){moduleRtn=Module}else{moduleRtn=new Promise((resolve,reject)=>{readyPromiseResolve=resolve;readyPromiseReject=reject})}
;return moduleRtn}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Module);


/***/ },

/***/ "../../node_modules/.pnpm/@journeyapps+wa-sqlite@1.5.0/node_modules/@journeyapps/wa-sqlite/dist/wa-sqlite-async.mjs"
/*!**************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@journeyapps+wa-sqlite@1.5.0/node_modules/@journeyapps/wa-sqlite/dist/wa-sqlite-async.mjs ***!
  \**************************************************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function Module(moduleArg={}){var moduleRtn;var Module=moduleArg;var ENVIRONMENT_IS_WEB=!!globalThis.window;var ENVIRONMENT_IS_WORKER=!!globalThis.WorkerGlobalScope;var ENVIRONMENT_IS_NODE=globalThis.process?.versions?.node&&globalThis.process?.type!="renderer";var arguments_=[];var thisProgram="./this.program";var quit_=(status,toThrow)=>{throw toThrow};var _scriptName="file:///home/runner/work/powersync-js/powersync-js/node_modules/.pnpm/@journeyapps+wa-sqlite@1.5.0/node_modules/@journeyapps/wa-sqlite/dist/wa-sqlite-async.mjs";var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var readAsync,readBinary;if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){try{scriptDirectory=new URL(".",_scriptName).href}catch{}{if(ENVIRONMENT_IS_WORKER){readBinary=url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)}}readAsync=async url=>{var response=await fetch(url,{credentials:"same-origin"});if(response.ok){return response.arrayBuffer()}throw new Error(response.status+" : "+response.url)}}}else{}var out=console.log.bind(console);var err=console.error.bind(console);var wasmBinary;var ABORT=false;var EXITSTATUS;var readyPromiseResolve,readyPromiseReject;var HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;var runtimeInitialized=false;function updateMemoryViews(){var b=wasmMemory.buffer;HEAP8=new Int8Array(b);HEAP16=new Int16Array(b);Module["HEAPU8"]=HEAPU8=new Uint8Array(b);HEAPU16=new Uint16Array(b);Module["HEAP32"]=HEAP32=new Int32Array(b);HEAPU32=new Uint32Array(b);HEAPF32=new Float32Array(b);HEAPF64=new Float64Array(b)}function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(onPreRuns)}function initRuntime(){runtimeInitialized=true;if(!Module["noFSInit"]&&!FS.initialized)FS.init();TTY.init();wasmExports["qa"]();FS.ignorePermissions=false}function preMain(){}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(onPostRuns)}function abort(what){Module["onAbort"]?.(what);what="Aborted("+what+")";err(what);ABORT=true;what+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(what);readyPromiseReject?.(e);throw e}var wasmBinaryFile;function findWasmBinary(){if(Module["locateFile"]){return locateFile("wa-sqlite-async.wasm")}return new URL(/* asset import */ __webpack_require__(/*! wa-sqlite-async.wasm */ "../../node_modules/.pnpm/@journeyapps+wa-sqlite@1.5.0/node_modules/@journeyapps/wa-sqlite/dist/wa-sqlite-async.wasm"), __webpack_require__.b).href}function getBinarySync(file){if(file==wasmBinaryFile&&wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(file)}throw"both async and sync fetching of the wasm failed"}async function getWasmBinary(binaryFile){if(!wasmBinary){try{var response=await readAsync(binaryFile);return new Uint8Array(response)}catch{}}return getBinarySync(binaryFile)}async function instantiateArrayBuffer(binaryFile,imports){try{var binary=await getWasmBinary(binaryFile);var instance=await WebAssembly.instantiate(binary,imports);return instance}catch(reason){err(`failed to asynchronously prepare wasm: ${reason}`);abort(reason)}}async function instantiateAsync(binary,binaryFile,imports){if(!binary){try{var response=fetch(binaryFile,{credentials:"same-origin"});var instantiationResult=await WebAssembly.instantiateStreaming(response,imports);return instantiationResult}catch(reason){err(`wasm streaming compile failed: ${reason}`);err("falling back to ArrayBuffer instantiation")}}return instantiateArrayBuffer(binaryFile,imports)}function getWasmImports(){var imports={a:wasmImports};return imports}async function createWasm(){function receiveInstance(instance,module){wasmExports=instance.exports;wasmExports=Asyncify.instrumentWasmExports(wasmExports);assignWasmExports(wasmExports);updateMemoryViews();return wasmExports}function receiveInstantiationResult(result){return receiveInstance(result["instance"])}var info=getWasmImports();if(Module["instantiateWasm"]){return new Promise((resolve,reject)=>{Module["instantiateWasm"](info,(inst,mod)=>{resolve(receiveInstance(inst,mod))})})}wasmBinaryFile??=findWasmBinary();var result=await instantiateAsync(wasmBinary,wasmBinaryFile,info);var exports=receiveInstantiationResult(result);return exports}var tempDouble;var tempI64;class ExitStatus{name="ExitStatus";constructor(status){this.message=`Program terminated with exit(${status})`;this.status=status}}var callRuntimeCallbacks=callbacks=>{while(callbacks.length>0){callbacks.shift()(Module)}};var onPostRuns=[];var addOnPostRun=cb=>onPostRuns.push(cb);var onPreRuns=[];var addOnPreRun=cb=>onPreRuns.push(cb);var dynCalls={};function getValue(ptr,type="i8"){if(type.endsWith("*"))type="*";switch(type){case"i1":return HEAP8[ptr];case"i8":return HEAP8[ptr];case"i16":return HEAP16[ptr>>1];case"i32":return HEAP32[ptr>>2];case"i64":abort("to do getValue(i64) use WASM_BIGINT");case"float":return HEAPF32[ptr>>2];case"double":return HEAPF64[ptr>>3];case"*":return HEAPU32[ptr>>2];default:abort(`invalid type for getValue: ${type}`)}}var noExitRuntime=true;function setValue(ptr,value,type="i8"){if(type.endsWith("*"))type="*";switch(type){case"i1":HEAP8[ptr]=value;break;case"i8":HEAP8[ptr]=value;break;case"i16":HEAP16[ptr>>1]=value;break;case"i32":HEAP32[ptr>>2]=value;break;case"i64":abort("to do setValue(i64) use WASM_BIGINT");case"float":HEAPF32[ptr>>2]=value;break;case"double":HEAPF64[ptr>>3]=value;break;case"*":HEAPU32[ptr>>2]=value;break;default:abort(`invalid type for setValue: ${type}`)}}var stackRestore=val=>__emscripten_stack_restore(val);var stackSave=()=>_emscripten_stack_get_current();var UTF8Decoder=new TextDecoder;var findStringEnd=(heapOrArray,idx,maxBytesToRead,ignoreNul)=>{var maxIdx=idx+maxBytesToRead;if(ignoreNul)return maxIdx;while(heapOrArray[idx]&&!(idx>=maxIdx))++idx;return idx};var UTF8ToString=(ptr,maxBytesToRead,ignoreNul)=>{if(!ptr)return"";var end=findStringEnd(HEAPU8,ptr,maxBytesToRead,ignoreNul);return UTF8Decoder.decode(HEAPU8.subarray(ptr,end))};var ___assert_fail=(condition,filename,line,func)=>abort(`Assertion failed: ${UTF8ToString(condition)}, at: `+[filename?UTF8ToString(filename):"unknown filename",line,func?UTF8ToString(func):"unknown function"]);var PATH={isAbs:path=>path.charAt(0)==="/",splitPath:filename=>{var splitPathRe=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return splitPathRe.exec(filename).slice(1)},normalizeArray:(parts,allowAboveRoot)=>{var up=0;for(var i=parts.length-1;i>=0;i--){var last=parts[i];if(last==="."){parts.splice(i,1)}else if(last===".."){parts.splice(i,1);up++}else if(up){parts.splice(i,1);up--}}if(allowAboveRoot){for(;up;up--){parts.unshift("..")}}return parts},normalize:path=>{var isAbsolute=PATH.isAbs(path),trailingSlash=path.slice(-1)==="/";path=PATH.normalizeArray(path.split("/").filter(p=>!!p),!isAbsolute).join("/");if(!path&&!isAbsolute){path="."}if(path&&trailingSlash){path+="/"}return(isAbsolute?"/":"")+path},dirname:path=>{var result=PATH.splitPath(path),root=result[0],dir=result[1];if(!root&&!dir){return"."}if(dir){dir=dir.slice(0,-1)}return root+dir},basename:path=>path&&path.match(/([^\/]+|\/)\/*$/)[1],join:(...paths)=>PATH.normalize(paths.join("/")),join2:(l,r)=>PATH.normalize(l+"/"+r)};var initRandomFill=()=>view=>crypto.getRandomValues(view);var randomFill=view=>{(randomFill=initRandomFill())(view)};var PATH_FS={resolve:(...args)=>{var resolvedPath="",resolvedAbsolute=false;for(var i=args.length-1;i>=-1&&!resolvedAbsolute;i--){var path=i>=0?args[i]:FS.cwd();if(typeof path!="string"){throw new TypeError("Arguments to path.resolve must be strings")}else if(!path){return""}resolvedPath=path+"/"+resolvedPath;resolvedAbsolute=PATH.isAbs(path)}resolvedPath=PATH.normalizeArray(resolvedPath.split("/").filter(p=>!!p),!resolvedAbsolute).join("/");return(resolvedAbsolute?"/":"")+resolvedPath||"."},relative:(from,to)=>{from=PATH_FS.resolve(from).slice(1);to=PATH_FS.resolve(to).slice(1);function trim(arr){var start=0;for(;start<arr.length;start++){if(arr[start]!=="")break}var end=arr.length-1;for(;end>=0;end--){if(arr[end]!=="")break}if(start>end)return[];return arr.slice(start,end-start+1)}var fromParts=trim(from.split("/"));var toParts=trim(to.split("/"));var length=Math.min(fromParts.length,toParts.length);var samePartsLength=length;for(var i=0;i<length;i++){if(fromParts[i]!==toParts[i]){samePartsLength=i;break}}var outputParts=[];for(var i=samePartsLength;i<fromParts.length;i++){outputParts.push("..")}outputParts=outputParts.concat(toParts.slice(samePartsLength));return outputParts.join("/")}};var UTF8ArrayToString=(heapOrArray,idx=0,maxBytesToRead,ignoreNul)=>{var endPtr=findStringEnd(heapOrArray,idx,maxBytesToRead,ignoreNul);return UTF8Decoder.decode(heapOrArray.buffer?heapOrArray.subarray(idx,endPtr):new Uint8Array(heapOrArray.slice(idx,endPtr)))};var FS_stdin_getChar_buffer=[];var lengthBytesUTF8=str=>{var len=0;for(var i=0;i<str.length;++i){var c=str.charCodeAt(i);if(c<=127){len++}else if(c<=2047){len+=2}else if(c>=55296&&c<=57343){len+=4;++i}else{len+=3}}return len};var stringToUTF8Array=(str,heap,outIdx,maxBytesToWrite)=>{if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.codePointAt(i);if(u<=127){if(outIdx>=endIdx)break;heap[outIdx++]=u}else if(u<=2047){if(outIdx+1>=endIdx)break;heap[outIdx++]=192|u>>6;heap[outIdx++]=128|u&63}else if(u<=65535){if(outIdx+2>=endIdx)break;heap[outIdx++]=224|u>>12;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}else{if(outIdx+3>=endIdx)break;heap[outIdx++]=240|u>>18;heap[outIdx++]=128|u>>12&63;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63;i++}}heap[outIdx]=0;return outIdx-startIdx};var intArrayFromString=(stringy,dontAddNull,length)=>{var len=length>0?length:lengthBytesUTF8(stringy)+1;var u8array=new Array(len);var numBytesWritten=stringToUTF8Array(stringy,u8array,0,u8array.length);if(dontAddNull)u8array.length=numBytesWritten;return u8array};var FS_stdin_getChar=()=>{if(!FS_stdin_getChar_buffer.length){var result=null;if(globalThis.window?.prompt){result=window.prompt("Input: ");if(result!==null){result+="\n"}}else{}if(!result){return null}FS_stdin_getChar_buffer=intArrayFromString(result,true)}return FS_stdin_getChar_buffer.shift()};var TTY={ttys:[],init(){},shutdown(){},register(dev,ops){TTY.ttys[dev]={input:[],output:[],ops};FS.registerDevice(dev,TTY.stream_ops)},stream_ops:{open(stream){var tty=TTY.ttys[stream.node.rdev];if(!tty){throw new FS.ErrnoError(43)}stream.tty=tty;stream.seekable=false},close(stream){stream.tty.ops.fsync(stream.tty)},fsync(stream){stream.tty.ops.fsync(stream.tty)},read(stream,buffer,offset,length,pos){if(!stream.tty||!stream.tty.ops.get_char){throw new FS.ErrnoError(60)}var bytesRead=0;for(var i=0;i<length;i++){var result;try{result=stream.tty.ops.get_char(stream.tty)}catch(e){throw new FS.ErrnoError(29)}if(result===undefined&&bytesRead===0){throw new FS.ErrnoError(6)}if(result===null||result===undefined)break;bytesRead++;buffer[offset+i]=result}if(bytesRead){stream.node.atime=Date.now()}return bytesRead},write(stream,buffer,offset,length,pos){if(!stream.tty||!stream.tty.ops.put_char){throw new FS.ErrnoError(60)}try{for(var i=0;i<length;i++){stream.tty.ops.put_char(stream.tty,buffer[offset+i])}}catch(e){throw new FS.ErrnoError(29)}if(length){stream.node.mtime=stream.node.ctime=Date.now()}return i}},default_tty_ops:{get_char(tty){return FS_stdin_getChar()},put_char(tty,val){if(val===null||val===10){out(UTF8ArrayToString(tty.output));tty.output=[]}else{if(val!=0)tty.output.push(val)}},fsync(tty){if(tty.output?.length>0){out(UTF8ArrayToString(tty.output));tty.output=[]}},ioctl_tcgets(tty){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(tty,optional_actions,data){return 0},ioctl_tiocgwinsz(tty){return[24,80]}},default_tty1_ops:{put_char(tty,val){if(val===null||val===10){err(UTF8ArrayToString(tty.output));tty.output=[]}else{if(val!=0)tty.output.push(val)}},fsync(tty){if(tty.output?.length>0){err(UTF8ArrayToString(tty.output));tty.output=[]}}}};var zeroMemory=(ptr,size)=>HEAPU8.fill(0,ptr,ptr+size);var alignMemory=(size,alignment)=>Math.ceil(size/alignment)*alignment;var mmapAlloc=size=>{size=alignMemory(size,65536);var ptr=_emscripten_builtin_memalign(65536,size);if(ptr)zeroMemory(ptr,size);return ptr};var MEMFS={ops_table:null,mount(mount){return MEMFS.createNode(null,"/",16895,0)},createNode(parent,name,mode,dev){if(FS.isBlkdev(mode)||FS.isFIFO(mode)){throw new FS.ErrnoError(63)}MEMFS.ops_table||={dir:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr,lookup:MEMFS.node_ops.lookup,mknod:MEMFS.node_ops.mknod,rename:MEMFS.node_ops.rename,unlink:MEMFS.node_ops.unlink,rmdir:MEMFS.node_ops.rmdir,readdir:MEMFS.node_ops.readdir,symlink:MEMFS.node_ops.symlink},stream:{llseek:MEMFS.stream_ops.llseek}},file:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr},stream:{llseek:MEMFS.stream_ops.llseek,read:MEMFS.stream_ops.read,write:MEMFS.stream_ops.write,mmap:MEMFS.stream_ops.mmap,msync:MEMFS.stream_ops.msync}},link:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr,readlink:MEMFS.node_ops.readlink},stream:{}},chrdev:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr},stream:FS.chrdev_stream_ops}};var node=FS.createNode(parent,name,mode,dev);if(FS.isDir(node.mode)){node.node_ops=MEMFS.ops_table.dir.node;node.stream_ops=MEMFS.ops_table.dir.stream;node.contents={}}else if(FS.isFile(node.mode)){node.node_ops=MEMFS.ops_table.file.node;node.stream_ops=MEMFS.ops_table.file.stream;node.usedBytes=0;node.contents=null}else if(FS.isLink(node.mode)){node.node_ops=MEMFS.ops_table.link.node;node.stream_ops=MEMFS.ops_table.link.stream}else if(FS.isChrdev(node.mode)){node.node_ops=MEMFS.ops_table.chrdev.node;node.stream_ops=MEMFS.ops_table.chrdev.stream}node.atime=node.mtime=node.ctime=Date.now();if(parent){parent.contents[name]=node;parent.atime=parent.mtime=parent.ctime=node.atime}return node},getFileDataAsTypedArray(node){if(!node.contents)return new Uint8Array(0);if(node.contents.subarray)return node.contents.subarray(0,node.usedBytes);return new Uint8Array(node.contents)},expandFileStorage(node,newCapacity){var prevCapacity=node.contents?node.contents.length:0;if(prevCapacity>=newCapacity)return;var CAPACITY_DOUBLING_MAX=1024*1024;newCapacity=Math.max(newCapacity,prevCapacity*(prevCapacity<CAPACITY_DOUBLING_MAX?2:1.125)>>>0);if(prevCapacity!=0)newCapacity=Math.max(newCapacity,256);var oldContents=node.contents;node.contents=new Uint8Array(newCapacity);if(node.usedBytes>0)node.contents.set(oldContents.subarray(0,node.usedBytes),0)},resizeFileStorage(node,newSize){if(node.usedBytes==newSize)return;if(newSize==0){node.contents=null;node.usedBytes=0}else{var oldContents=node.contents;node.contents=new Uint8Array(newSize);if(oldContents){node.contents.set(oldContents.subarray(0,Math.min(newSize,node.usedBytes)))}node.usedBytes=newSize}},node_ops:{getattr(node){var attr={};attr.dev=FS.isChrdev(node.mode)?node.id:1;attr.ino=node.id;attr.mode=node.mode;attr.nlink=1;attr.uid=0;attr.gid=0;attr.rdev=node.rdev;if(FS.isDir(node.mode)){attr.size=4096}else if(FS.isFile(node.mode)){attr.size=node.usedBytes}else if(FS.isLink(node.mode)){attr.size=node.link.length}else{attr.size=0}attr.atime=new Date(node.atime);attr.mtime=new Date(node.mtime);attr.ctime=new Date(node.ctime);attr.blksize=4096;attr.blocks=Math.ceil(attr.size/attr.blksize);return attr},setattr(node,attr){for(const key of["mode","atime","mtime","ctime"]){if(attr[key]!=null){node[key]=attr[key]}}if(attr.size!==undefined){MEMFS.resizeFileStorage(node,attr.size)}},lookup(parent,name){if(!MEMFS.doesNotExistError){MEMFS.doesNotExistError=new FS.ErrnoError(44);MEMFS.doesNotExistError.stack="<generic error, no stack>"}throw MEMFS.doesNotExistError},mknod(parent,name,mode,dev){return MEMFS.createNode(parent,name,mode,dev)},rename(old_node,new_dir,new_name){var new_node;try{new_node=FS.lookupNode(new_dir,new_name)}catch(e){}if(new_node){if(FS.isDir(old_node.mode)){for(var i in new_node.contents){throw new FS.ErrnoError(55)}}FS.hashRemoveNode(new_node)}delete old_node.parent.contents[old_node.name];new_dir.contents[new_name]=old_node;old_node.name=new_name;new_dir.ctime=new_dir.mtime=old_node.parent.ctime=old_node.parent.mtime=Date.now()},unlink(parent,name){delete parent.contents[name];parent.ctime=parent.mtime=Date.now()},rmdir(parent,name){var node=FS.lookupNode(parent,name);for(var i in node.contents){throw new FS.ErrnoError(55)}delete parent.contents[name];parent.ctime=parent.mtime=Date.now()},readdir(node){return[".","..",...Object.keys(node.contents)]},symlink(parent,newname,oldpath){var node=MEMFS.createNode(parent,newname,511|40960,0);node.link=oldpath;return node},readlink(node){if(!FS.isLink(node.mode)){throw new FS.ErrnoError(28)}return node.link}},stream_ops:{read(stream,buffer,offset,length,position){var contents=stream.node.contents;if(position>=stream.node.usedBytes)return 0;var size=Math.min(stream.node.usedBytes-position,length);if(size>8&&contents.subarray){buffer.set(contents.subarray(position,position+size),offset)}else{for(var i=0;i<size;i++)buffer[offset+i]=contents[position+i]}return size},write(stream,buffer,offset,length,position,canOwn){if(buffer.buffer===HEAP8.buffer){canOwn=false}if(!length)return 0;var node=stream.node;node.mtime=node.ctime=Date.now();if(buffer.subarray&&(!node.contents||node.contents.subarray)){if(canOwn){node.contents=buffer.subarray(offset,offset+length);node.usedBytes=length;return length}else if(node.usedBytes===0&&position===0){node.contents=buffer.slice(offset,offset+length);node.usedBytes=length;return length}else if(position+length<=node.usedBytes){node.contents.set(buffer.subarray(offset,offset+length),position);return length}}MEMFS.expandFileStorage(node,position+length);if(node.contents.subarray&&buffer.subarray){node.contents.set(buffer.subarray(offset,offset+length),position)}else{for(var i=0;i<length;i++){node.contents[position+i]=buffer[offset+i]}}node.usedBytes=Math.max(node.usedBytes,position+length);return length},llseek(stream,offset,whence){var position=offset;if(whence===1){position+=stream.position}else if(whence===2){if(FS.isFile(stream.node.mode)){position+=stream.node.usedBytes}}if(position<0){throw new FS.ErrnoError(28)}return position},mmap(stream,length,position,prot,flags){if(!FS.isFile(stream.node.mode)){throw new FS.ErrnoError(43)}var ptr;var allocated;var contents=stream.node.contents;if(!(flags&2)&&contents&&contents.buffer===HEAP8.buffer){allocated=false;ptr=contents.byteOffset}else{allocated=true;ptr=mmapAlloc(length);if(!ptr){throw new FS.ErrnoError(48)}if(contents){if(position>0||position+length<contents.length){if(contents.subarray){contents=contents.subarray(position,position+length)}else{contents=Array.prototype.slice.call(contents,position,position+length)}}HEAP8.set(contents,ptr)}}return{ptr,allocated}},msync(stream,buffer,offset,length,mmapFlags){MEMFS.stream_ops.write(stream,buffer,0,length,offset,false);return 0}}};var FS_modeStringToFlags=str=>{var flagModes={r:0,"r+":2,w:512|64|1,"w+":512|64|2,a:1024|64|1,"a+":1024|64|2};var flags=flagModes[str];if(typeof flags=="undefined"){throw new Error(`Unknown file open mode: ${str}`)}return flags};var FS_getMode=(canRead,canWrite)=>{var mode=0;if(canRead)mode|=292|73;if(canWrite)mode|=146;return mode};var asyncLoad=async url=>{var arrayBuffer=await readAsync(url);return new Uint8Array(arrayBuffer)};var FS_createDataFile=(...args)=>FS.createDataFile(...args);var getUniqueRunDependency=id=>id;var runDependencies=0;var dependenciesFulfilled=null;var removeRunDependency=id=>{runDependencies--;Module["monitorRunDependencies"]?.(runDependencies);if(runDependencies==0){if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}};var addRunDependency=id=>{runDependencies++;Module["monitorRunDependencies"]?.(runDependencies)};var preloadPlugins=[];var FS_handledByPreloadPlugin=async(byteArray,fullname)=>{if(typeof Browser!="undefined")Browser.init();for(var plugin of preloadPlugins){if(plugin["canHandle"](fullname)){return plugin["handle"](byteArray,fullname)}}return byteArray};var FS_preloadFile=async(parent,name,url,canRead,canWrite,dontCreateFile,canOwn,preFinish)=>{var fullname=name?PATH_FS.resolve(PATH.join2(parent,name)):parent;var dep=getUniqueRunDependency(`cp ${fullname}`);addRunDependency(dep);try{var byteArray=url;if(typeof url=="string"){byteArray=await asyncLoad(url)}byteArray=await FS_handledByPreloadPlugin(byteArray,fullname);preFinish?.();if(!dontCreateFile){FS_createDataFile(parent,name,byteArray,canRead,canWrite,canOwn)}}finally{removeRunDependency(dep)}};var FS_createPreloadedFile=(parent,name,url,canRead,canWrite,onload,onerror,dontCreateFile,canOwn,preFinish)=>{FS_preloadFile(parent,name,url,canRead,canWrite,dontCreateFile,canOwn,preFinish).then(onload).catch(onerror)};var FS={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:false,ignorePermissions:true,filesystems:null,syncFSRequests:0,ErrnoError:class{name="ErrnoError";constructor(errno){this.errno=errno}},FSStream:class{shared={};get object(){return this.node}set object(val){this.node=val}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(val){this.shared.flags=val}get position(){return this.shared.position}set position(val){this.shared.position=val}},FSNode:class{node_ops={};stream_ops={};readMode=292|73;writeMode=146;mounted=null;constructor(parent,name,mode,rdev){if(!parent){parent=this}this.parent=parent;this.mount=parent.mount;this.id=FS.nextInode++;this.name=name;this.mode=mode;this.rdev=rdev;this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(val){val?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(val){val?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return FS.isDir(this.mode)}get isDevice(){return FS.isChrdev(this.mode)}},lookupPath(path,opts={}){if(!path){throw new FS.ErrnoError(44)}opts.follow_mount??=true;if(!PATH.isAbs(path)){path=FS.cwd()+"/"+path}linkloop:for(var nlinks=0;nlinks<40;nlinks++){var parts=path.split("/").filter(p=>!!p);var current=FS.root;var current_path="/";for(var i=0;i<parts.length;i++){var islast=i===parts.length-1;if(islast&&opts.parent){break}if(parts[i]==="."){continue}if(parts[i]===".."){current_path=PATH.dirname(current_path);if(FS.isRoot(current)){path=current_path+"/"+parts.slice(i+1).join("/");nlinks--;continue linkloop}else{current=current.parent}continue}current_path=PATH.join2(current_path,parts[i]);try{current=FS.lookupNode(current,parts[i])}catch(e){if(e?.errno===44&&islast&&opts.noent_okay){return{path:current_path}}throw e}if(FS.isMountpoint(current)&&(!islast||opts.follow_mount)){current=current.mounted.root}if(FS.isLink(current.mode)&&(!islast||opts.follow)){if(!current.node_ops.readlink){throw new FS.ErrnoError(52)}var link=current.node_ops.readlink(current);if(!PATH.isAbs(link)){link=PATH.dirname(current_path)+"/"+link}path=link+"/"+parts.slice(i+1).join("/");continue linkloop}}return{path:current_path,node:current}}throw new FS.ErrnoError(32)},getPath(node){var path;while(true){if(FS.isRoot(node)){var mount=node.mount.mountpoint;if(!path)return mount;return mount[mount.length-1]!=="/"?`${mount}/${path}`:mount+path}path=path?`${node.name}/${path}`:node.name;node=node.parent}},hashName(parentid,name){var hash=0;for(var i=0;i<name.length;i++){hash=(hash<<5)-hash+name.charCodeAt(i)|0}return(parentid+hash>>>0)%FS.nameTable.length},hashAddNode(node){var hash=FS.hashName(node.parent.id,node.name);node.name_next=FS.nameTable[hash];FS.nameTable[hash]=node},hashRemoveNode(node){var hash=FS.hashName(node.parent.id,node.name);if(FS.nameTable[hash]===node){FS.nameTable[hash]=node.name_next}else{var current=FS.nameTable[hash];while(current){if(current.name_next===node){current.name_next=node.name_next;break}current=current.name_next}}},lookupNode(parent,name){var errCode=FS.mayLookup(parent);if(errCode){throw new FS.ErrnoError(errCode)}var hash=FS.hashName(parent.id,name);for(var node=FS.nameTable[hash];node;node=node.name_next){var nodeName=node.name;if(node.parent.id===parent.id&&nodeName===name){return node}}return FS.lookup(parent,name)},createNode(parent,name,mode,rdev){var node=new FS.FSNode(parent,name,mode,rdev);FS.hashAddNode(node);return node},destroyNode(node){FS.hashRemoveNode(node)},isRoot(node){return node===node.parent},isMountpoint(node){return!!node.mounted},isFile(mode){return(mode&61440)===32768},isDir(mode){return(mode&61440)===16384},isLink(mode){return(mode&61440)===40960},isChrdev(mode){return(mode&61440)===8192},isBlkdev(mode){return(mode&61440)===24576},isFIFO(mode){return(mode&61440)===4096},isSocket(mode){return(mode&49152)===49152},flagsToPermissionString(flag){var perms=["r","w","rw"][flag&3];if(flag&512){perms+="w"}return perms},nodePermissions(node,perms){if(FS.ignorePermissions){return 0}if(perms.includes("r")&&!(node.mode&292)){return 2}if(perms.includes("w")&&!(node.mode&146)){return 2}if(perms.includes("x")&&!(node.mode&73)){return 2}return 0},mayLookup(dir){if(!FS.isDir(dir.mode))return 54;var errCode=FS.nodePermissions(dir,"x");if(errCode)return errCode;if(!dir.node_ops.lookup)return 2;return 0},mayCreate(dir,name){if(!FS.isDir(dir.mode)){return 54}try{var node=FS.lookupNode(dir,name);return 20}catch(e){}return FS.nodePermissions(dir,"wx")},mayDelete(dir,name,isdir){var node;try{node=FS.lookupNode(dir,name)}catch(e){return e.errno}var errCode=FS.nodePermissions(dir,"wx");if(errCode){return errCode}if(isdir){if(!FS.isDir(node.mode)){return 54}if(FS.isRoot(node)||FS.getPath(node)===FS.cwd()){return 10}}else if(FS.isDir(node.mode)){return 31}return 0},mayOpen(node,flags){if(!node){return 44}if(FS.isLink(node.mode)){return 32}var mode=FS.flagsToPermissionString(flags);if(FS.isDir(node.mode)){if(mode!=="r"||flags&(512|64)){return 31}}return FS.nodePermissions(node,mode)},checkOpExists(op,err){if(!op){throw new FS.ErrnoError(err)}return op},MAX_OPEN_FDS:4096,nextfd(){for(var fd=0;fd<=FS.MAX_OPEN_FDS;fd++){if(!FS.streams[fd]){return fd}}throw new FS.ErrnoError(33)},getStreamChecked(fd){var stream=FS.getStream(fd);if(!stream){throw new FS.ErrnoError(8)}return stream},getStream:fd=>FS.streams[fd],createStream(stream,fd=-1){stream=Object.assign(new FS.FSStream,stream);if(fd==-1){fd=FS.nextfd()}stream.fd=fd;FS.streams[fd]=stream;return stream},closeStream(fd){FS.streams[fd]=null},dupStream(origStream,fd=-1){var stream=FS.createStream(origStream,fd);stream.stream_ops?.dup?.(stream);return stream},doSetAttr(stream,node,attr){var setattr=stream?.stream_ops.setattr;var arg=setattr?stream:node;setattr??=node.node_ops.setattr;FS.checkOpExists(setattr,63);setattr(arg,attr)},chrdev_stream_ops:{open(stream){var device=FS.getDevice(stream.node.rdev);stream.stream_ops=device.stream_ops;stream.stream_ops.open?.(stream)},llseek(){throw new FS.ErrnoError(70)}},major:dev=>dev>>8,minor:dev=>dev&255,makedev:(ma,mi)=>ma<<8|mi,registerDevice(dev,ops){FS.devices[dev]={stream_ops:ops}},getDevice:dev=>FS.devices[dev],getMounts(mount){var mounts=[];var check=[mount];while(check.length){var m=check.pop();mounts.push(m);check.push(...m.mounts)}return mounts},syncfs(populate,callback){if(typeof populate=="function"){callback=populate;populate=false}FS.syncFSRequests++;if(FS.syncFSRequests>1){err(`warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`)}var mounts=FS.getMounts(FS.root.mount);var completed=0;function doCallback(errCode){FS.syncFSRequests--;return callback(errCode)}function done(errCode){if(errCode){if(!done.errored){done.errored=true;return doCallback(errCode)}return}if(++completed>=mounts.length){doCallback(null)}}for(var mount of mounts){if(mount.type.syncfs){mount.type.syncfs(mount,populate,done)}else{done(null)}}},mount(type,opts,mountpoint){var root=mountpoint==="/";var pseudo=!mountpoint;var node;if(root&&FS.root){throw new FS.ErrnoError(10)}else if(!root&&!pseudo){var lookup=FS.lookupPath(mountpoint,{follow_mount:false});mountpoint=lookup.path;node=lookup.node;if(FS.isMountpoint(node)){throw new FS.ErrnoError(10)}if(!FS.isDir(node.mode)){throw new FS.ErrnoError(54)}}var mount={type,opts,mountpoint,mounts:[]};var mountRoot=type.mount(mount);mountRoot.mount=mount;mount.root=mountRoot;if(root){FS.root=mountRoot}else if(node){node.mounted=mount;if(node.mount){node.mount.mounts.push(mount)}}return mountRoot},unmount(mountpoint){var lookup=FS.lookupPath(mountpoint,{follow_mount:false});if(!FS.isMountpoint(lookup.node)){throw new FS.ErrnoError(28)}var node=lookup.node;var mount=node.mounted;var mounts=FS.getMounts(mount);for(var[hash,current]of Object.entries(FS.nameTable)){while(current){var next=current.name_next;if(mounts.includes(current.mount)){FS.destroyNode(current)}current=next}}node.mounted=null;var idx=node.mount.mounts.indexOf(mount);node.mount.mounts.splice(idx,1)},lookup(parent,name){return parent.node_ops.lookup(parent,name)},mknod(path,mode,dev){var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;var name=PATH.basename(path);if(!name){throw new FS.ErrnoError(28)}if(name==="."||name===".."){throw new FS.ErrnoError(20)}var errCode=FS.mayCreate(parent,name);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.mknod){throw new FS.ErrnoError(63)}return parent.node_ops.mknod(parent,name,mode,dev)},statfs(path){return FS.statfsNode(FS.lookupPath(path,{follow:true}).node)},statfsStream(stream){return FS.statfsNode(stream.node)},statfsNode(node){var rtn={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:FS.nextInode,ffree:FS.nextInode-1,fsid:42,flags:2,namelen:255};if(node.node_ops.statfs){Object.assign(rtn,node.node_ops.statfs(node.mount.opts.root))}return rtn},create(path,mode=438){mode&=4095;mode|=32768;return FS.mknod(path,mode,0)},mkdir(path,mode=511){mode&=511|512;mode|=16384;return FS.mknod(path,mode,0)},mkdirTree(path,mode){var dirs=path.split("/");var d="";for(var dir of dirs){if(!dir)continue;if(d||PATH.isAbs(path))d+="/";d+=dir;try{FS.mkdir(d,mode)}catch(e){if(e.errno!=20)throw e}}},mkdev(path,mode,dev){if(typeof dev=="undefined"){dev=mode;mode=438}mode|=8192;return FS.mknod(path,mode,dev)},symlink(oldpath,newpath){if(!PATH_FS.resolve(oldpath)){throw new FS.ErrnoError(44)}var lookup=FS.lookupPath(newpath,{parent:true});var parent=lookup.node;if(!parent){throw new FS.ErrnoError(44)}var newname=PATH.basename(newpath);var errCode=FS.mayCreate(parent,newname);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.symlink){throw new FS.ErrnoError(63)}return parent.node_ops.symlink(parent,newname,oldpath)},rename(old_path,new_path){var old_dirname=PATH.dirname(old_path);var new_dirname=PATH.dirname(new_path);var old_name=PATH.basename(old_path);var new_name=PATH.basename(new_path);var lookup,old_dir,new_dir;lookup=FS.lookupPath(old_path,{parent:true});old_dir=lookup.node;lookup=FS.lookupPath(new_path,{parent:true});new_dir=lookup.node;if(!old_dir||!new_dir)throw new FS.ErrnoError(44);if(old_dir.mount!==new_dir.mount){throw new FS.ErrnoError(75)}var old_node=FS.lookupNode(old_dir,old_name);var relative=PATH_FS.relative(old_path,new_dirname);if(relative.charAt(0)!=="."){throw new FS.ErrnoError(28)}relative=PATH_FS.relative(new_path,old_dirname);if(relative.charAt(0)!=="."){throw new FS.ErrnoError(55)}var new_node;try{new_node=FS.lookupNode(new_dir,new_name)}catch(e){}if(old_node===new_node){return}var isdir=FS.isDir(old_node.mode);var errCode=FS.mayDelete(old_dir,old_name,isdir);if(errCode){throw new FS.ErrnoError(errCode)}errCode=new_node?FS.mayDelete(new_dir,new_name,isdir):FS.mayCreate(new_dir,new_name);if(errCode){throw new FS.ErrnoError(errCode)}if(!old_dir.node_ops.rename){throw new FS.ErrnoError(63)}if(FS.isMountpoint(old_node)||new_node&&FS.isMountpoint(new_node)){throw new FS.ErrnoError(10)}if(new_dir!==old_dir){errCode=FS.nodePermissions(old_dir,"w");if(errCode){throw new FS.ErrnoError(errCode)}}FS.hashRemoveNode(old_node);try{old_dir.node_ops.rename(old_node,new_dir,new_name);old_node.parent=new_dir}catch(e){throw e}finally{FS.hashAddNode(old_node)}},rmdir(path){var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;var name=PATH.basename(path);var node=FS.lookupNode(parent,name);var errCode=FS.mayDelete(parent,name,true);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.rmdir){throw new FS.ErrnoError(63)}if(FS.isMountpoint(node)){throw new FS.ErrnoError(10)}parent.node_ops.rmdir(parent,name);FS.destroyNode(node)},readdir(path){var lookup=FS.lookupPath(path,{follow:true});var node=lookup.node;var readdir=FS.checkOpExists(node.node_ops.readdir,54);return readdir(node)},unlink(path){var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;if(!parent){throw new FS.ErrnoError(44)}var name=PATH.basename(path);var node=FS.lookupNode(parent,name);var errCode=FS.mayDelete(parent,name,false);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.unlink){throw new FS.ErrnoError(63)}if(FS.isMountpoint(node)){throw new FS.ErrnoError(10)}parent.node_ops.unlink(parent,name);FS.destroyNode(node)},readlink(path){var lookup=FS.lookupPath(path);var link=lookup.node;if(!link){throw new FS.ErrnoError(44)}if(!link.node_ops.readlink){throw new FS.ErrnoError(28)}return link.node_ops.readlink(link)},stat(path,dontFollow){var lookup=FS.lookupPath(path,{follow:!dontFollow});var node=lookup.node;var getattr=FS.checkOpExists(node.node_ops.getattr,63);return getattr(node)},fstat(fd){var stream=FS.getStreamChecked(fd);var node=stream.node;var getattr=stream.stream_ops.getattr;var arg=getattr?stream:node;getattr??=node.node_ops.getattr;FS.checkOpExists(getattr,63);return getattr(arg)},lstat(path){return FS.stat(path,true)},doChmod(stream,node,mode,dontFollow){FS.doSetAttr(stream,node,{mode:mode&4095|node.mode&~4095,ctime:Date.now(),dontFollow})},chmod(path,mode,dontFollow){var node;if(typeof path=="string"){var lookup=FS.lookupPath(path,{follow:!dontFollow});node=lookup.node}else{node=path}FS.doChmod(null,node,mode,dontFollow)},lchmod(path,mode){FS.chmod(path,mode,true)},fchmod(fd,mode){var stream=FS.getStreamChecked(fd);FS.doChmod(stream,stream.node,mode,false)},doChown(stream,node,dontFollow){FS.doSetAttr(stream,node,{timestamp:Date.now(),dontFollow})},chown(path,uid,gid,dontFollow){var node;if(typeof path=="string"){var lookup=FS.lookupPath(path,{follow:!dontFollow});node=lookup.node}else{node=path}FS.doChown(null,node,dontFollow)},lchown(path,uid,gid){FS.chown(path,uid,gid,true)},fchown(fd,uid,gid){var stream=FS.getStreamChecked(fd);FS.doChown(stream,stream.node,false)},doTruncate(stream,node,len){if(FS.isDir(node.mode)){throw new FS.ErrnoError(31)}if(!FS.isFile(node.mode)){throw new FS.ErrnoError(28)}var errCode=FS.nodePermissions(node,"w");if(errCode){throw new FS.ErrnoError(errCode)}FS.doSetAttr(stream,node,{size:len,timestamp:Date.now()})},truncate(path,len){if(len<0){throw new FS.ErrnoError(28)}var node;if(typeof path=="string"){var lookup=FS.lookupPath(path,{follow:true});node=lookup.node}else{node=path}FS.doTruncate(null,node,len)},ftruncate(fd,len){var stream=FS.getStreamChecked(fd);if(len<0||(stream.flags&2097155)===0){throw new FS.ErrnoError(28)}FS.doTruncate(stream,stream.node,len)},utime(path,atime,mtime){var lookup=FS.lookupPath(path,{follow:true});var node=lookup.node;var setattr=FS.checkOpExists(node.node_ops.setattr,63);setattr(node,{atime,mtime})},open(path,flags,mode=438){if(path===""){throw new FS.ErrnoError(44)}flags=typeof flags=="string"?FS_modeStringToFlags(flags):flags;if(flags&64){mode=mode&4095|32768}else{mode=0}var node;var isDirPath;if(typeof path=="object"){node=path}else{isDirPath=path.endsWith("/");var lookup=FS.lookupPath(path,{follow:!(flags&131072),noent_okay:true});node=lookup.node;path=lookup.path}var created=false;if(flags&64){if(node){if(flags&128){throw new FS.ErrnoError(20)}}else if(isDirPath){throw new FS.ErrnoError(31)}else{node=FS.mknod(path,mode|511,0);created=true}}if(!node){throw new FS.ErrnoError(44)}if(FS.isChrdev(node.mode)){flags&=~512}if(flags&65536&&!FS.isDir(node.mode)){throw new FS.ErrnoError(54)}if(!created){var errCode=FS.mayOpen(node,flags);if(errCode){throw new FS.ErrnoError(errCode)}}if(flags&512&&!created){FS.truncate(node,0)}flags&=~(128|512|131072);var stream=FS.createStream({node,path:FS.getPath(node),flags,seekable:true,position:0,stream_ops:node.stream_ops,ungotten:[],error:false});if(stream.stream_ops.open){stream.stream_ops.open(stream)}if(created){FS.chmod(node,mode&511)}return stream},close(stream){if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if(stream.getdents)stream.getdents=null;try{if(stream.stream_ops.close){stream.stream_ops.close(stream)}}catch(e){throw e}finally{FS.closeStream(stream.fd)}stream.fd=null},isClosed(stream){return stream.fd===null},llseek(stream,offset,whence){if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if(!stream.seekable||!stream.stream_ops.llseek){throw new FS.ErrnoError(70)}if(whence!=0&&whence!=1&&whence!=2){throw new FS.ErrnoError(28)}stream.position=stream.stream_ops.llseek(stream,offset,whence);stream.ungotten=[];return stream.position},read(stream,buffer,offset,length,position){if(length<0||position<0){throw new FS.ErrnoError(28)}if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if((stream.flags&2097155)===1){throw new FS.ErrnoError(8)}if(FS.isDir(stream.node.mode)){throw new FS.ErrnoError(31)}if(!stream.stream_ops.read){throw new FS.ErrnoError(28)}var seeking=typeof position!="undefined";if(!seeking){position=stream.position}else if(!stream.seekable){throw new FS.ErrnoError(70)}var bytesRead=stream.stream_ops.read(stream,buffer,offset,length,position);if(!seeking)stream.position+=bytesRead;return bytesRead},write(stream,buffer,offset,length,position,canOwn){if(length<0||position<0){throw new FS.ErrnoError(28)}if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if((stream.flags&2097155)===0){throw new FS.ErrnoError(8)}if(FS.isDir(stream.node.mode)){throw new FS.ErrnoError(31)}if(!stream.stream_ops.write){throw new FS.ErrnoError(28)}if(stream.seekable&&stream.flags&1024){FS.llseek(stream,0,2)}var seeking=typeof position!="undefined";if(!seeking){position=stream.position}else if(!stream.seekable){throw new FS.ErrnoError(70)}var bytesWritten=stream.stream_ops.write(stream,buffer,offset,length,position,canOwn);if(!seeking)stream.position+=bytesWritten;return bytesWritten},mmap(stream,length,position,prot,flags){if((prot&2)!==0&&(flags&2)===0&&(stream.flags&2097155)!==2){throw new FS.ErrnoError(2)}if((stream.flags&2097155)===1){throw new FS.ErrnoError(2)}if(!stream.stream_ops.mmap){throw new FS.ErrnoError(43)}if(!length){throw new FS.ErrnoError(28)}return stream.stream_ops.mmap(stream,length,position,prot,flags)},msync(stream,buffer,offset,length,mmapFlags){if(!stream.stream_ops.msync){return 0}return stream.stream_ops.msync(stream,buffer,offset,length,mmapFlags)},ioctl(stream,cmd,arg){if(!stream.stream_ops.ioctl){throw new FS.ErrnoError(59)}return stream.stream_ops.ioctl(stream,cmd,arg)},readFile(path,opts={}){opts.flags=opts.flags||0;opts.encoding=opts.encoding||"binary";if(opts.encoding!=="utf8"&&opts.encoding!=="binary"){abort(`Invalid encoding type "${opts.encoding}"`)}var stream=FS.open(path,opts.flags);var stat=FS.stat(path);var length=stat.size;var buf=new Uint8Array(length);FS.read(stream,buf,0,length,0);if(opts.encoding==="utf8"){buf=UTF8ArrayToString(buf)}FS.close(stream);return buf},writeFile(path,data,opts={}){opts.flags=opts.flags||577;var stream=FS.open(path,opts.flags,opts.mode);if(typeof data=="string"){data=new Uint8Array(intArrayFromString(data,true))}if(ArrayBuffer.isView(data)){FS.write(stream,data,0,data.byteLength,undefined,opts.canOwn)}else{abort("Unsupported data type")}FS.close(stream)},cwd:()=>FS.currentPath,chdir(path){var lookup=FS.lookupPath(path,{follow:true});if(lookup.node===null){throw new FS.ErrnoError(44)}if(!FS.isDir(lookup.node.mode)){throw new FS.ErrnoError(54)}var errCode=FS.nodePermissions(lookup.node,"x");if(errCode){throw new FS.ErrnoError(errCode)}FS.currentPath=lookup.path},createDefaultDirectories(){FS.mkdir("/tmp");FS.mkdir("/home");FS.mkdir("/home/web_user")},createDefaultDevices(){FS.mkdir("/dev");FS.registerDevice(FS.makedev(1,3),{read:()=>0,write:(stream,buffer,offset,length,pos)=>length,llseek:()=>0});FS.mkdev("/dev/null",FS.makedev(1,3));TTY.register(FS.makedev(5,0),TTY.default_tty_ops);TTY.register(FS.makedev(6,0),TTY.default_tty1_ops);FS.mkdev("/dev/tty",FS.makedev(5,0));FS.mkdev("/dev/tty1",FS.makedev(6,0));var randomBuffer=new Uint8Array(1024),randomLeft=0;var randomByte=()=>{if(randomLeft===0){randomFill(randomBuffer);randomLeft=randomBuffer.byteLength}return randomBuffer[--randomLeft]};FS.createDevice("/dev","random",randomByte);FS.createDevice("/dev","urandom",randomByte);FS.mkdir("/dev/shm");FS.mkdir("/dev/shm/tmp")},createSpecialDirectories(){FS.mkdir("/proc");var proc_self=FS.mkdir("/proc/self");FS.mkdir("/proc/self/fd");FS.mount({mount(){var node=FS.createNode(proc_self,"fd",16895,73);node.stream_ops={llseek:MEMFS.stream_ops.llseek};node.node_ops={lookup(parent,name){var fd=+name;var stream=FS.getStreamChecked(fd);var ret={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>stream.path},id:fd+1};ret.parent=ret;return ret},readdir(){return Array.from(FS.streams.entries()).filter(([k,v])=>v).map(([k,v])=>k.toString())}};return node}},{},"/proc/self/fd")},createStandardStreams(input,output,error){if(input){FS.createDevice("/dev","stdin",input)}else{FS.symlink("/dev/tty","/dev/stdin")}if(output){FS.createDevice("/dev","stdout",null,output)}else{FS.symlink("/dev/tty","/dev/stdout")}if(error){FS.createDevice("/dev","stderr",null,error)}else{FS.symlink("/dev/tty1","/dev/stderr")}var stdin=FS.open("/dev/stdin",0);var stdout=FS.open("/dev/stdout",1);var stderr=FS.open("/dev/stderr",1)},staticInit(){FS.nameTable=new Array(4096);FS.mount(MEMFS,{},"/");FS.createDefaultDirectories();FS.createDefaultDevices();FS.createSpecialDirectories();FS.filesystems={MEMFS}},init(input,output,error){FS.initialized=true;input??=Module["stdin"];output??=Module["stdout"];error??=Module["stderr"];FS.createStandardStreams(input,output,error)},quit(){FS.initialized=false;for(var stream of FS.streams){if(stream){FS.close(stream)}}},findObject(path,dontResolveLastLink){var ret=FS.analyzePath(path,dontResolveLastLink);if(!ret.exists){return null}return ret.object},analyzePath(path,dontResolveLastLink){try{var lookup=FS.lookupPath(path,{follow:!dontResolveLastLink});path=lookup.path}catch(e){}var ret={isRoot:false,exists:false,error:0,name:null,path:null,object:null,parentExists:false,parentPath:null,parentObject:null};try{var lookup=FS.lookupPath(path,{parent:true});ret.parentExists=true;ret.parentPath=lookup.path;ret.parentObject=lookup.node;ret.name=PATH.basename(path);lookup=FS.lookupPath(path,{follow:!dontResolveLastLink});ret.exists=true;ret.path=lookup.path;ret.object=lookup.node;ret.name=lookup.node.name;ret.isRoot=lookup.path==="/"}catch(e){ret.error=e.errno}return ret},createPath(parent,path,canRead,canWrite){parent=typeof parent=="string"?parent:FS.getPath(parent);var parts=path.split("/").reverse();while(parts.length){var part=parts.pop();if(!part)continue;var current=PATH.join2(parent,part);try{FS.mkdir(current)}catch(e){if(e.errno!=20)throw e}parent=current}return current},createFile(parent,name,properties,canRead,canWrite){var path=PATH.join2(typeof parent=="string"?parent:FS.getPath(parent),name);var mode=FS_getMode(canRead,canWrite);return FS.create(path,mode)},createDataFile(parent,name,data,canRead,canWrite,canOwn){var path=name;if(parent){parent=typeof parent=="string"?parent:FS.getPath(parent);path=name?PATH.join2(parent,name):parent}var mode=FS_getMode(canRead,canWrite);var node=FS.create(path,mode);if(data){if(typeof data=="string"){var arr=new Array(data.length);for(var i=0,len=data.length;i<len;++i)arr[i]=data.charCodeAt(i);data=arr}FS.chmod(node,mode|146);var stream=FS.open(node,577);FS.write(stream,data,0,data.length,0,canOwn);FS.close(stream);FS.chmod(node,mode)}},createDevice(parent,name,input,output){var path=PATH.join2(typeof parent=="string"?parent:FS.getPath(parent),name);var mode=FS_getMode(!!input,!!output);FS.createDevice.major??=64;var dev=FS.makedev(FS.createDevice.major++,0);FS.registerDevice(dev,{open(stream){stream.seekable=false},close(stream){if(output?.buffer?.length){output(10)}},read(stream,buffer,offset,length,pos){var bytesRead=0;for(var i=0;i<length;i++){var result;try{result=input()}catch(e){throw new FS.ErrnoError(29)}if(result===undefined&&bytesRead===0){throw new FS.ErrnoError(6)}if(result===null||result===undefined)break;bytesRead++;buffer[offset+i]=result}if(bytesRead){stream.node.atime=Date.now()}return bytesRead},write(stream,buffer,offset,length,pos){for(var i=0;i<length;i++){try{output(buffer[offset+i])}catch(e){throw new FS.ErrnoError(29)}}if(length){stream.node.mtime=stream.node.ctime=Date.now()}return i}});return FS.mkdev(path,mode,dev)},forceLoadFile(obj){if(obj.isDevice||obj.isFolder||obj.link||obj.contents)return true;if(globalThis.XMLHttpRequest){abort("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.")}else{try{obj.contents=readBinary(obj.url)}catch(e){throw new FS.ErrnoError(29)}}},createLazyFile(parent,name,url,canRead,canWrite){class LazyUint8Array{lengthKnown=false;chunks=[];get(idx){if(idx>this.length-1||idx<0){return undefined}var chunkOffset=idx%this.chunkSize;var chunkNum=idx/this.chunkSize|0;return this.getter(chunkNum)[chunkOffset]}setDataGetter(getter){this.getter=getter}cacheLength(){var xhr=new XMLHttpRequest;xhr.open("HEAD",url,false);xhr.send(null);if(!(xhr.status>=200&&xhr.status<300||xhr.status===304))abort("Couldn't load "+url+". Status: "+xhr.status);var datalength=Number(xhr.getResponseHeader("Content-length"));var header;var hasByteServing=(header=xhr.getResponseHeader("Accept-Ranges"))&&header==="bytes";var usesGzip=(header=xhr.getResponseHeader("Content-Encoding"))&&header==="gzip";var chunkSize=1024*1024;if(!hasByteServing)chunkSize=datalength;var doXHR=(from,to)=>{if(from>to)abort("invalid range ("+from+", "+to+") or no bytes requested!");if(to>datalength-1)abort("only "+datalength+" bytes available! programmer error!");var xhr=new XMLHttpRequest;xhr.open("GET",url,false);if(datalength!==chunkSize)xhr.setRequestHeader("Range","bytes="+from+"-"+to);xhr.responseType="arraybuffer";if(xhr.overrideMimeType){xhr.overrideMimeType("text/plain; charset=x-user-defined")}xhr.send(null);if(!(xhr.status>=200&&xhr.status<300||xhr.status===304))abort("Couldn't load "+url+". Status: "+xhr.status);if(xhr.response!==undefined){return new Uint8Array(xhr.response||[])}return intArrayFromString(xhr.responseText||"",true)};var lazyArray=this;lazyArray.setDataGetter(chunkNum=>{var start=chunkNum*chunkSize;var end=(chunkNum+1)*chunkSize-1;end=Math.min(end,datalength-1);if(typeof lazyArray.chunks[chunkNum]=="undefined"){lazyArray.chunks[chunkNum]=doXHR(start,end)}if(typeof lazyArray.chunks[chunkNum]=="undefined")abort("doXHR failed!");return lazyArray.chunks[chunkNum]});if(usesGzip||!datalength){chunkSize=datalength=1;datalength=this.getter(0).length;chunkSize=datalength;out("LazyFiles on gzip forces download of the whole file when length is accessed")}this._length=datalength;this._chunkSize=chunkSize;this.lengthKnown=true}get length(){if(!this.lengthKnown){this.cacheLength()}return this._length}get chunkSize(){if(!this.lengthKnown){this.cacheLength()}return this._chunkSize}}if(globalThis.XMLHttpRequest){if(!ENVIRONMENT_IS_WORKER)abort("Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc");var lazyArray=new LazyUint8Array;var properties={isDevice:false,contents:lazyArray}}else{var properties={isDevice:false,url}}var node=FS.createFile(parent,name,properties,canRead,canWrite);if(properties.contents){node.contents=properties.contents}else if(properties.url){node.contents=null;node.url=properties.url}Object.defineProperties(node,{usedBytes:{get:function(){return this.contents.length}}});var stream_ops={};for(const[key,fn]of Object.entries(node.stream_ops)){stream_ops[key]=(...args)=>{FS.forceLoadFile(node);return fn(...args)}}function writeChunks(stream,buffer,offset,length,position){var contents=stream.node.contents;if(position>=contents.length)return 0;var size=Math.min(contents.length-position,length);if(contents.slice){for(var i=0;i<size;i++){buffer[offset+i]=contents[position+i]}}else{for(var i=0;i<size;i++){buffer[offset+i]=contents.get(position+i)}}return size}stream_ops.read=(stream,buffer,offset,length,position)=>{FS.forceLoadFile(node);return writeChunks(stream,buffer,offset,length,position)};stream_ops.mmap=(stream,length,position,prot,flags)=>{FS.forceLoadFile(node);var ptr=mmapAlloc(length);if(!ptr){throw new FS.ErrnoError(48)}writeChunks(stream,HEAP8,ptr,length,position);return{ptr,allocated:true}};node.stream_ops=stream_ops;return node}};var SYSCALLS={calculateAt(dirfd,path,allowEmpty){if(PATH.isAbs(path)){return path}var dir;if(dirfd===-100){dir=FS.cwd()}else{var dirstream=SYSCALLS.getStreamFromFD(dirfd);dir=dirstream.path}if(path.length==0){if(!allowEmpty){throw new FS.ErrnoError(44)}return dir}return dir+"/"+path},writeStat(buf,stat){HEAPU32[buf>>2]=stat.dev;HEAPU32[buf+4>>2]=stat.mode;HEAPU32[buf+8>>2]=stat.nlink;HEAPU32[buf+12>>2]=stat.uid;HEAPU32[buf+16>>2]=stat.gid;HEAPU32[buf+20>>2]=stat.rdev;tempI64=[stat.size>>>0,(tempDouble=stat.size,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+24>>2]=tempI64[0],HEAP32[buf+28>>2]=tempI64[1];HEAP32[buf+32>>2]=4096;HEAP32[buf+36>>2]=stat.blocks;var atime=stat.atime.getTime();var mtime=stat.mtime.getTime();var ctime=stat.ctime.getTime();tempI64=[Math.floor(atime/1e3)>>>0,(tempDouble=Math.floor(atime/1e3),+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+40>>2]=tempI64[0],HEAP32[buf+44>>2]=tempI64[1];HEAPU32[buf+48>>2]=atime%1e3*1e3*1e3;tempI64=[Math.floor(mtime/1e3)>>>0,(tempDouble=Math.floor(mtime/1e3),+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+56>>2]=tempI64[0],HEAP32[buf+60>>2]=tempI64[1];HEAPU32[buf+64>>2]=mtime%1e3*1e3*1e3;tempI64=[Math.floor(ctime/1e3)>>>0,(tempDouble=Math.floor(ctime/1e3),+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+72>>2]=tempI64[0],HEAP32[buf+76>>2]=tempI64[1];HEAPU32[buf+80>>2]=ctime%1e3*1e3*1e3;tempI64=[stat.ino>>>0,(tempDouble=stat.ino,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+88>>2]=tempI64[0],HEAP32[buf+92>>2]=tempI64[1];return 0},writeStatFs(buf,stats){HEAPU32[buf+4>>2]=stats.bsize;HEAPU32[buf+60>>2]=stats.bsize;tempI64=[stats.blocks>>>0,(tempDouble=stats.blocks,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+8>>2]=tempI64[0],HEAP32[buf+12>>2]=tempI64[1];tempI64=[stats.bfree>>>0,(tempDouble=stats.bfree,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+16>>2]=tempI64[0],HEAP32[buf+20>>2]=tempI64[1];tempI64=[stats.bavail>>>0,(tempDouble=stats.bavail,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+24>>2]=tempI64[0],HEAP32[buf+28>>2]=tempI64[1];tempI64=[stats.files>>>0,(tempDouble=stats.files,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+32>>2]=tempI64[0],HEAP32[buf+36>>2]=tempI64[1];tempI64=[stats.ffree>>>0,(tempDouble=stats.ffree,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+40>>2]=tempI64[0],HEAP32[buf+44>>2]=tempI64[1];HEAPU32[buf+48>>2]=stats.fsid;HEAPU32[buf+64>>2]=stats.flags;HEAPU32[buf+56>>2]=stats.namelen},doMsync(addr,stream,len,flags,offset){if(!FS.isFile(stream.node.mode)){throw new FS.ErrnoError(43)}if(flags&2){return 0}var buffer=HEAPU8.slice(addr,addr+len);FS.msync(stream,buffer,offset,len,flags)},getStreamFromFD(fd){var stream=FS.getStreamChecked(fd);return stream},varargs:undefined,getStr(ptr){var ret=UTF8ToString(ptr);return ret}};function ___syscall_chmod(path,mode){try{path=SYSCALLS.getStr(path);FS.chmod(path,mode);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_faccessat(dirfd,path,amode,flags){try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);if(amode&~7){return-28}var lookup=FS.lookupPath(path,{follow:true});var node=lookup.node;if(!node){return-44}var perms="";if(amode&4)perms+="r";if(amode&2)perms+="w";if(amode&1)perms+="x";if(perms&&FS.nodePermissions(node,perms)){return-2}return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_fchmod(fd,mode){try{FS.fchmod(fd,mode);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_fchown32(fd,owner,group){try{FS.fchown(fd,owner,group);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var syscallGetVarargI=()=>{var ret=HEAP32[+SYSCALLS.varargs>>2];SYSCALLS.varargs+=4;return ret};var syscallGetVarargP=syscallGetVarargI;function ___syscall_fcntl64(fd,cmd,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD(fd);switch(cmd){case 0:{var arg=syscallGetVarargI();if(arg<0){return-28}while(FS.streams[arg]){arg++}var newStream;newStream=FS.dupStream(stream,arg);return newStream.fd}case 1:case 2:return 0;case 3:return stream.flags;case 4:{var arg=syscallGetVarargI();stream.flags|=arg;return 0}case 12:{var arg=syscallGetVarargP();var offset=0;HEAP16[arg+offset>>1]=2;return 0}case 13:case 14:return 0}return-28}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_fstat64(fd,buf){try{return SYSCALLS.writeStat(buf,FS.fstat(fd))}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var convertI32PairToI53Checked=(lo,hi)=>hi+2097152>>>0<4194305-!!lo?(lo>>>0)+hi*4294967296:NaN;function ___syscall_ftruncate64(fd,length_low,length_high){var length=convertI32PairToI53Checked(length_low,length_high);try{if(isNaN(length))return-61;FS.ftruncate(fd,length);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var stringToUTF8=(str,outPtr,maxBytesToWrite)=>stringToUTF8Array(str,HEAPU8,outPtr,maxBytesToWrite);function ___syscall_getcwd(buf,size){try{if(size===0)return-28;var cwd=FS.cwd();var cwdLengthInBytes=lengthBytesUTF8(cwd)+1;if(size<cwdLengthInBytes)return-68;stringToUTF8(cwd,buf,size);return cwdLengthInBytes}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_lstat64(path,buf){try{path=SYSCALLS.getStr(path);return SYSCALLS.writeStat(buf,FS.lstat(path))}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_mkdirat(dirfd,path,mode){try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);FS.mkdir(path,mode,0);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_newfstatat(dirfd,path,buf,flags){try{path=SYSCALLS.getStr(path);var nofollow=flags&256;var allowEmpty=flags&4096;flags=flags&~6400;path=SYSCALLS.calculateAt(dirfd,path,allowEmpty);return SYSCALLS.writeStat(buf,nofollow?FS.lstat(path):FS.stat(path))}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_openat(dirfd,path,flags,varargs){SYSCALLS.varargs=varargs;try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);var mode=varargs?syscallGetVarargI():0;return FS.open(path,flags,mode).fd}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_readlinkat(dirfd,path,buf,bufsize){try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);if(bufsize<=0)return-28;var ret=FS.readlink(path);var len=Math.min(bufsize,lengthBytesUTF8(ret));var endChar=HEAP8[buf+len];stringToUTF8(ret,buf,bufsize+1);HEAP8[buf+len]=endChar;return len}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_rmdir(path){try{path=SYSCALLS.getStr(path);FS.rmdir(path);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_stat64(path,buf){try{path=SYSCALLS.getStr(path);return SYSCALLS.writeStat(buf,FS.stat(path))}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_unlinkat(dirfd,path,flags){try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);if(!flags){FS.unlink(path)}else if(flags===512){FS.rmdir(path)}else{return-28}return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var readI53FromI64=ptr=>HEAPU32[ptr>>2]+HEAP32[ptr+4>>2]*4294967296;function ___syscall_utimensat(dirfd,path,times,flags){try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path,true);var now=Date.now(),atime,mtime;if(!times){atime=now;mtime=now}else{var seconds=readI53FromI64(times);var nanoseconds=HEAP32[times+8>>2];if(nanoseconds==1073741823){atime=now}else if(nanoseconds==1073741822){atime=null}else{atime=seconds*1e3+nanoseconds/(1e3*1e3)}times+=16;seconds=readI53FromI64(times);nanoseconds=HEAP32[times+8>>2];if(nanoseconds==1073741823){mtime=now}else if(nanoseconds==1073741822){mtime=null}else{mtime=seconds*1e3+nanoseconds/(1e3*1e3)}}if((mtime??atime)!==null){FS.utime(path,atime,mtime)}return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var __abort_js=()=>abort("");var runtimeKeepaliveCounter=0;var __emscripten_runtime_keepalive_clear=()=>{noExitRuntime=false;runtimeKeepaliveCounter=0};var isLeapYear=year=>year%4===0&&(year%100!==0||year%400===0);var MONTH_DAYS_LEAP_CUMULATIVE=[0,31,60,91,121,152,182,213,244,274,305,335];var MONTH_DAYS_REGULAR_CUMULATIVE=[0,31,59,90,120,151,181,212,243,273,304,334];var ydayFromDate=date=>{var leap=isLeapYear(date.getFullYear());var monthDaysCumulative=leap?MONTH_DAYS_LEAP_CUMULATIVE:MONTH_DAYS_REGULAR_CUMULATIVE;var yday=monthDaysCumulative[date.getMonth()]+date.getDate()-1;return yday};function __localtime_js(time_low,time_high,tmPtr){var time=convertI32PairToI53Checked(time_low,time_high);var date=new Date(time*1e3);HEAP32[tmPtr>>2]=date.getSeconds();HEAP32[tmPtr+4>>2]=date.getMinutes();HEAP32[tmPtr+8>>2]=date.getHours();HEAP32[tmPtr+12>>2]=date.getDate();HEAP32[tmPtr+16>>2]=date.getMonth();HEAP32[tmPtr+20>>2]=date.getFullYear()-1900;HEAP32[tmPtr+24>>2]=date.getDay();var yday=ydayFromDate(date)|0;HEAP32[tmPtr+28>>2]=yday;HEAP32[tmPtr+36>>2]=-(date.getTimezoneOffset()*60);var start=new Date(date.getFullYear(),0,1);var summerOffset=new Date(date.getFullYear(),6,1).getTimezoneOffset();var winterOffset=start.getTimezoneOffset();var dst=(summerOffset!=winterOffset&&date.getTimezoneOffset()==Math.min(winterOffset,summerOffset))|0;HEAP32[tmPtr+32>>2]=dst}function __mmap_js(len,prot,flags,fd,offset_low,offset_high,allocated,addr){var offset=convertI32PairToI53Checked(offset_low,offset_high);try{var stream=SYSCALLS.getStreamFromFD(fd);var res=FS.mmap(stream,len,offset,prot,flags);var ptr=res.ptr;HEAP32[allocated>>2]=res.allocated;HEAPU32[addr>>2]=ptr;return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function __munmap_js(addr,len,prot,flags,fd,offset_low,offset_high){var offset=convertI32PairToI53Checked(offset_low,offset_high);try{var stream=SYSCALLS.getStreamFromFD(fd);if(prot&2){SYSCALLS.doMsync(addr,stream,len,flags,offset)}}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var timers={};var handleException=e=>{if(e instanceof ExitStatus||e=="unwind"){return EXITSTATUS}quit_(1,e)};var keepRuntimeAlive=()=>noExitRuntime||runtimeKeepaliveCounter>0;var _proc_exit=code=>{EXITSTATUS=code;if(!keepRuntimeAlive()){Module["onExit"]?.(code);ABORT=true}quit_(code,new ExitStatus(code))};var exitJS=(status,implicit)=>{EXITSTATUS=status;_proc_exit(status)};var _exit=exitJS;var maybeExit=()=>{if(!keepRuntimeAlive()){try{_exit(EXITSTATUS)}catch(e){handleException(e)}}};var callUserCallback=func=>{if(ABORT){return}try{return func()}catch(e){handleException(e)}finally{maybeExit()}};var _emscripten_get_now=()=>performance.now();var __setitimer_js=(which,timeout_ms)=>{if(timers[which]){clearTimeout(timers[which].id);delete timers[which]}if(!timeout_ms)return 0;var id=setTimeout(()=>{delete timers[which];callUserCallback(()=>__emscripten_timeout(which,_emscripten_get_now()))},timeout_ms);timers[which]={id,timeout_ms};return 0};var __tzset_js=(timezone,daylight,std_name,dst_name)=>{var currentYear=(new Date).getFullYear();var winter=new Date(currentYear,0,1);var summer=new Date(currentYear,6,1);var winterOffset=winter.getTimezoneOffset();var summerOffset=summer.getTimezoneOffset();var stdTimezoneOffset=Math.max(winterOffset,summerOffset);HEAPU32[timezone>>2]=stdTimezoneOffset*60;HEAP32[daylight>>2]=Number(winterOffset!=summerOffset);var extractZone=timezoneOffset=>{var sign=timezoneOffset>=0?"-":"+";var absOffset=Math.abs(timezoneOffset);var hours=String(Math.floor(absOffset/60)).padStart(2,"0");var minutes=String(absOffset%60).padStart(2,"0");return`UTC${sign}${hours}${minutes}`};var winterName=extractZone(winterOffset);var summerName=extractZone(summerOffset);if(summerOffset<winterOffset){stringToUTF8(winterName,std_name,17);stringToUTF8(summerName,dst_name,17)}else{stringToUTF8(winterName,dst_name,17);stringToUTF8(summerName,std_name,17)}};var _emscripten_date_now=()=>Date.now();var getHeapMax=()=>2147483648;var growMemory=size=>{var oldHeapSize=wasmMemory.buffer.byteLength;var pages=(size-oldHeapSize+65535)/65536|0;try{wasmMemory.grow(pages);updateMemoryViews();return 1}catch(e){}};var _emscripten_resize_heap=requestedSize=>{var oldSize=HEAPU8.length;requestedSize>>>=0;var maxHeapSize=getHeapMax();if(requestedSize>maxHeapSize){return false}for(var cutDown=1;cutDown<=4;cutDown*=2){var overGrownHeapSize=oldSize*(1+.2/cutDown);overGrownHeapSize=Math.min(overGrownHeapSize,requestedSize+100663296);var newSize=Math.min(maxHeapSize,alignMemory(Math.max(requestedSize,overGrownHeapSize),65536));var replacement=growMemory(newSize);if(replacement){return true}}return false};var ENV={};var getExecutableName=()=>thisProgram||"./this.program";var getEnvStrings=()=>{if(!getEnvStrings.strings){var lang=(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8";var env={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:lang,_:getExecutableName()};for(var x in ENV){if(ENV[x]===undefined)delete env[x];else env[x]=ENV[x]}var strings=[];for(var x in env){strings.push(`${x}=${env[x]}`)}getEnvStrings.strings=strings}return getEnvStrings.strings};var _environ_get=(__environ,environ_buf)=>{var bufSize=0;var envp=0;for(var string of getEnvStrings()){var ptr=environ_buf+bufSize;HEAPU32[__environ+envp>>2]=ptr;bufSize+=stringToUTF8(string,ptr,Infinity)+1;envp+=4}return 0};var _environ_sizes_get=(penviron_count,penviron_buf_size)=>{var strings=getEnvStrings();HEAPU32[penviron_count>>2]=strings.length;var bufSize=0;for(var string of strings){bufSize+=lengthBytesUTF8(string)+1}HEAPU32[penviron_buf_size>>2]=bufSize;return 0};function _fd_close(fd){try{var stream=SYSCALLS.getStreamFromFD(fd);FS.close(stream);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}function _fd_fdstat_get(fd,pbuf){try{var rightsBase=0;var rightsInheriting=0;var flags=0;{var stream=SYSCALLS.getStreamFromFD(fd);var type=stream.tty?2:FS.isDir(stream.mode)?3:FS.isLink(stream.mode)?7:4}HEAP8[pbuf]=type;HEAP16[pbuf+2>>1]=flags;tempI64=[rightsBase>>>0,(tempDouble=rightsBase,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[pbuf+8>>2]=tempI64[0],HEAP32[pbuf+12>>2]=tempI64[1];tempI64=[rightsInheriting>>>0,(tempDouble=rightsInheriting,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[pbuf+16>>2]=tempI64[0],HEAP32[pbuf+20>>2]=tempI64[1];return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}var doReadv=(stream,iov,iovcnt,offset)=>{var ret=0;for(var i=0;i<iovcnt;i++){var ptr=HEAPU32[iov>>2];var len=HEAPU32[iov+4>>2];iov+=8;var curr=FS.read(stream,HEAP8,ptr,len,offset);if(curr<0)return-1;ret+=curr;if(curr<len)break;if(typeof offset!="undefined"){offset+=curr}}return ret};function _fd_read(fd,iov,iovcnt,pnum){try{var stream=SYSCALLS.getStreamFromFD(fd);var num=doReadv(stream,iov,iovcnt);HEAPU32[pnum>>2]=num;return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}function _fd_seek(fd,offset_low,offset_high,whence,newOffset){var offset=convertI32PairToI53Checked(offset_low,offset_high);try{if(isNaN(offset))return 61;var stream=SYSCALLS.getStreamFromFD(fd);FS.llseek(stream,offset,whence);tempI64=[stream.position>>>0,(tempDouble=stream.position,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[newOffset>>2]=tempI64[0],HEAP32[newOffset+4>>2]=tempI64[1];if(stream.getdents&&offset===0&&whence===0)stream.getdents=null;return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}var _fd_sync=function(fd){let innerFunc=()=>{try{var stream=SYSCALLS.getStreamFromFD(fd);var rtn=stream.stream_ops?.fsync?.(stream);return new Promise(resolve=>{var mount=stream.node.mount;if(mount?.type.syncfs){mount.type.syncfs(mount,false,err=>resolve(err?29:0))}else{resolve(rtn)}})}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}};return Asyncify.handleAsync(innerFunc)};_fd_sync.isAsync=true;var doWritev=(stream,iov,iovcnt,offset)=>{var ret=0;for(var i=0;i<iovcnt;i++){var ptr=HEAPU32[iov>>2];var len=HEAPU32[iov+4>>2];iov+=8;var curr=FS.write(stream,HEAP8,ptr,len,offset);if(curr<0)return-1;ret+=curr;if(curr<len){break}if(typeof offset!="undefined"){offset+=curr}}return ret};function _fd_write(fd,iov,iovcnt,pnum){try{var stream=SYSCALLS.getStreamFromFD(fd);var num=doWritev(stream,iov,iovcnt);HEAPU32[pnum>>2]=num;return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}var adapters_support=function(){const handleAsync=typeof Asyncify==="object"?Asyncify.handleAsync.bind(Asyncify):null;Module["handleAsync"]=handleAsync;const targets=new Map;Module["setCallback"]=(key,target)=>targets.set(key,target);Module["getCallback"]=key=>targets.get(key);Module["deleteCallback"]=key=>targets.delete(key);adapters_support=function(isAsync,key,...args){const receiver=targets.get(key);let methodName=null;const f=typeof receiver==="function"?receiver:receiver[methodName=UTF8ToString(args.shift())];if(isAsync){if(handleAsync){return handleAsync(()=>f.apply(receiver,args))}throw new Error("Synchronous WebAssembly cannot call async function")}const result=f.apply(receiver,args);if(typeof result?.then=="function"){console.error("unexpected Promise",f);throw new Error(`${methodName} unexpectedly returned a Promise`)}return result}};function _ipp(...args){return adapters_support(false,...args)}function _ipp_async(...args){return adapters_support(true,...args)}_ipp_async.isAsync=true;function _ippipppp(...args){return adapters_support(false,...args)}function _ippipppp_async(...args){return adapters_support(true,...args)}_ippipppp_async.isAsync=true;function _ippp(...args){return adapters_support(false,...args)}function _ippp_async(...args){return adapters_support(true,...args)}_ippp_async.isAsync=true;function _ipppi(...args){return adapters_support(false,...args)}function _ipppi_async(...args){return adapters_support(true,...args)}_ipppi_async.isAsync=true;function _ipppiii(...args){return adapters_support(false,...args)}function _ipppiii_async(...args){return adapters_support(true,...args)}_ipppiii_async.isAsync=true;function _ipppiiip(...args){return adapters_support(false,...args)}function _ipppiiip_async(...args){return adapters_support(true,...args)}_ipppiiip_async.isAsync=true;function _ipppip(...args){return adapters_support(false,...args)}function _ipppip_async(...args){return adapters_support(true,...args)}_ipppip_async.isAsync=true;function _ipppj(...args){return adapters_support(false,...args)}function _ipppj_async(...args){return adapters_support(true,...args)}_ipppj_async.isAsync=true;function _ipppp(...args){return adapters_support(false,...args)}function _ipppp_async(...args){return adapters_support(true,...args)}_ipppp_async.isAsync=true;function _ippppi(...args){return adapters_support(false,...args)}function _ippppi_async(...args){return adapters_support(true,...args)}_ippppi_async.isAsync=true;function _ippppij(...args){return adapters_support(false,...args)}function _ippppij_async(...args){return adapters_support(true,...args)}_ippppij_async.isAsync=true;function _ippppip(...args){return adapters_support(false,...args)}function _ippppip_async(...args){return adapters_support(true,...args)}_ippppip_async.isAsync=true;function _ipppppip(...args){return adapters_support(false,...args)}function _ipppppip_async(...args){return adapters_support(true,...args)}_ipppppip_async.isAsync=true;function _vppippii(...args){return adapters_support(false,...args)}function _vppippii_async(...args){return adapters_support(true,...args)}_vppippii_async.isAsync=true;function _vppp(...args){return adapters_support(false,...args)}function _vppp_async(...args){return adapters_support(true,...args)}_vppp_async.isAsync=true;function _vpppip(...args){return adapters_support(false,...args)}function _vpppip_async(...args){return adapters_support(true,...args)}_vpppip_async.isAsync=true;var runAndAbortIfError=func=>{try{return func()}catch(e){abort(e)}};var runtimeKeepalivePush=()=>{runtimeKeepaliveCounter+=1};var runtimeKeepalivePop=()=>{runtimeKeepaliveCounter-=1};var Asyncify={instrumentWasmImports(imports){var importPattern=/^(ipp|ipp_async|ippp|ippp_async|vppp|vppp_async|ipppj|ipppj_async|ipppi|ipppi_async|ipppp|ipppp_async|ipppip|ipppip_async|vpppip|vpppip_async|ippppi|ippppi_async|ippppij|ippppij_async|ipppiii|ipppiii_async|ippppip|ippppip_async|ippipppp|ippipppp_async|ipppppip|ipppppip_async|ipppiiip|ipppiiip_async|vppippii|vppippii_async|invoke_.*|__asyncjs__.*)$/;for(let[x,original]of Object.entries(imports)){if(typeof original=="function"){let isAsyncifyImport=original.isAsync||importPattern.test(x)}}},instrumentFunction(original){var wrapper=(...args)=>{Asyncify.exportCallStack.push(original);try{return original(...args)}finally{if(!ABORT){var top=Asyncify.exportCallStack.pop();Asyncify.maybeStopUnwind()}}};Asyncify.funcWrappers.set(original,wrapper);return wrapper},instrumentWasmExports(exports){var ret={};for(let[x,original]of Object.entries(exports)){if(typeof original=="function"){var wrapper=Asyncify.instrumentFunction(original);ret[x]=wrapper}else{ret[x]=original}}return ret},State:{Normal:0,Unwinding:1,Rewinding:2,Disabled:3},state:0,StackSize:16384,currData:null,handleSleepReturnValue:0,exportCallStack:[],callstackFuncToId:new Map,callStackIdToFunc:new Map,funcWrappers:new Map,callStackId:0,asyncPromiseHandlers:null,sleepCallbacks:[],getCallStackId(func){if(!Asyncify.callstackFuncToId.has(func)){var id=Asyncify.callStackId++;Asyncify.callstackFuncToId.set(func,id);Asyncify.callStackIdToFunc.set(id,func)}return Asyncify.callstackFuncToId.get(func)},maybeStopUnwind(){if(Asyncify.currData&&Asyncify.state===Asyncify.State.Unwinding&&Asyncify.exportCallStack.length===0){Asyncify.state=Asyncify.State.Normal;runAndAbortIfError(_asyncify_stop_unwind);if(typeof Fibers!="undefined"){Fibers.trampoline()}}},whenDone(){return new Promise((resolve,reject)=>{Asyncify.asyncPromiseHandlers={resolve,reject}})},allocateData(){var ptr=_malloc(12+Asyncify.StackSize);Asyncify.setDataHeader(ptr,ptr+12,Asyncify.StackSize);Asyncify.setDataRewindFunc(ptr);return ptr},setDataHeader(ptr,stack,stackSize){HEAPU32[ptr>>2]=stack;HEAPU32[ptr+4>>2]=stack+stackSize},setDataRewindFunc(ptr){var bottomOfCallStack=Asyncify.exportCallStack[0];var rewindId=Asyncify.getCallStackId(bottomOfCallStack);HEAP32[ptr+8>>2]=rewindId},getDataRewindFunc(ptr){var id=HEAP32[ptr+8>>2];var func=Asyncify.callStackIdToFunc.get(id);return func},doRewind(ptr){var original=Asyncify.getDataRewindFunc(ptr);var func=Asyncify.funcWrappers.get(original);return callUserCallback(func)},handleSleep(startAsync){if(ABORT)return;if(Asyncify.state===Asyncify.State.Normal){var reachedCallback=false;var reachedAfterCallback=false;startAsync((handleSleepReturnValue=0)=>{if(ABORT)return;Asyncify.handleSleepReturnValue=handleSleepReturnValue;reachedCallback=true;if(!reachedAfterCallback){return}Asyncify.state=Asyncify.State.Rewinding;runAndAbortIfError(()=>_asyncify_start_rewind(Asyncify.currData));if(typeof MainLoop!="undefined"&&MainLoop.func){MainLoop.resume()}var asyncWasmReturnValue,isError=false;try{asyncWasmReturnValue=Asyncify.doRewind(Asyncify.currData)}catch(err){asyncWasmReturnValue=err;isError=true}var handled=false;if(!Asyncify.currData){var asyncPromiseHandlers=Asyncify.asyncPromiseHandlers;if(asyncPromiseHandlers){Asyncify.asyncPromiseHandlers=null;(isError?asyncPromiseHandlers.reject:asyncPromiseHandlers.resolve)(asyncWasmReturnValue);handled=true}}if(isError&&!handled){throw asyncWasmReturnValue}});reachedAfterCallback=true;if(!reachedCallback){Asyncify.state=Asyncify.State.Unwinding;Asyncify.currData=Asyncify.allocateData();if(typeof MainLoop!="undefined"&&MainLoop.func){MainLoop.pause()}runAndAbortIfError(()=>_asyncify_start_unwind(Asyncify.currData))}}else if(Asyncify.state===Asyncify.State.Rewinding){Asyncify.state=Asyncify.State.Normal;runAndAbortIfError(_asyncify_stop_rewind);_free(Asyncify.currData);Asyncify.currData=null;Asyncify.sleepCallbacks.forEach(callUserCallback)}else{abort(`invalid state: ${Asyncify.state}`)}return Asyncify.handleSleepReturnValue},handleAsync:startAsync=>Asyncify.handleSleep(async wakeUp=>{wakeUp(await startAsync())})};var getWasmTableEntry=funcPtr=>wasmTable.get(funcPtr);var updateTableMap=(offset,count)=>{if(functionsInTableMap){for(var i=offset;i<offset+count;i++){var item=getWasmTableEntry(i);if(item){functionsInTableMap.set(item,i)}}}};var functionsInTableMap;var getFunctionAddress=func=>{if(!functionsInTableMap){functionsInTableMap=new WeakMap;updateTableMap(0,wasmTable.length)}return functionsInTableMap.get(func)||0};var freeTableIndexes=[];var getEmptyTableSlot=()=>{if(freeTableIndexes.length){return freeTableIndexes.pop()}return wasmTable["grow"](1)};var setWasmTableEntry=(idx,func)=>wasmTable.set(idx,func);var uleb128EncodeWithLen=arr=>{const n=arr.length;return[n%128|128,n>>7,...arr]};var wasmTypeCodes={i:127,p:127,j:126,f:125,d:124,e:111};var generateTypePack=types=>uleb128EncodeWithLen(Array.from(types,type=>{var code=wasmTypeCodes[type];return code}));var convertJsFunctionToWasm=(func,sig)=>{var bytes=Uint8Array.of(0,97,115,109,1,0,0,0,1,...uleb128EncodeWithLen([1,96,...generateTypePack(sig.slice(1)),...generateTypePack(sig[0]==="v"?"":sig[0])]),2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0);var module=new WebAssembly.Module(bytes);var instance=new WebAssembly.Instance(module,{e:{f:func}});var wrappedFunc=instance.exports["f"];return wrappedFunc};var addFunction=(func,sig)=>{var rtn=getFunctionAddress(func);if(rtn){return rtn}var ret=getEmptyTableSlot();try{setWasmTableEntry(ret,func)}catch(err){if(!(err instanceof TypeError)){throw err}var wrapped=convertJsFunctionToWasm(func,sig);setWasmTableEntry(ret,wrapped)}functionsInTableMap.set(func,ret);return ret};var getCFunc=ident=>{var func=Module["_"+ident];return func};var writeArrayToMemory=(array,buffer)=>{HEAP8.set(array,buffer)};var stackAlloc=sz=>__emscripten_stack_alloc(sz);var stringToUTF8OnStack=str=>{var size=lengthBytesUTF8(str)+1;var ret=stackAlloc(size);stringToUTF8(str,ret,size);return ret};var ccall=(ident,returnType,argTypes,args,opts)=>{var toC={string:str=>{var ret=0;if(str!==null&&str!==undefined&&str!==0){ret=stringToUTF8OnStack(str)}return ret},array:arr=>{var ret=stackAlloc(arr.length);writeArrayToMemory(arr,ret);return ret}};function convertReturnValue(ret){if(returnType==="string"){return UTF8ToString(ret)}if(returnType==="boolean")return Boolean(ret);return ret}var func=getCFunc(ident);var cArgs=[];var stack=0;if(args){for(var i=0;i<args.length;i++){var converter=toC[argTypes[i]];if(converter){if(stack===0)stack=stackSave();cArgs[i]=converter(args[i])}else{cArgs[i]=args[i]}}}var previousAsync=Asyncify.currData;var ret=func(...cArgs);function onDone(ret){runtimeKeepalivePop();if(stack!==0)stackRestore(stack);return convertReturnValue(ret)}var asyncMode=opts?.async;runtimeKeepalivePush();if(Asyncify.currData!=previousAsync){return Asyncify.whenDone().then(onDone)}ret=onDone(ret);if(asyncMode)return Promise.resolve(ret);return ret};var cwrap=(ident,returnType,argTypes,opts)=>{var numericArgs=!argTypes||argTypes.every(type=>type==="number"||type==="boolean");var numericRet=returnType!=="string";if(numericRet&&numericArgs&&!opts){return getCFunc(ident)}return(...args)=>ccall(ident,returnType,argTypes,args,opts)};var getTempRet0=val=>__emscripten_tempret_get();var stringToUTF16=(str,outPtr,maxBytesToWrite)=>{maxBytesToWrite??=2147483647;if(maxBytesToWrite<2)return 0;maxBytesToWrite-=2;var startPtr=outPtr;var numCharsToWrite=maxBytesToWrite<str.length*2?maxBytesToWrite/2:str.length;for(var i=0;i<numCharsToWrite;++i){var codeUnit=str.charCodeAt(i);HEAP16[outPtr>>1]=codeUnit;outPtr+=2}HEAP16[outPtr>>1]=0;return outPtr-startPtr};var stringToUTF32=(str,outPtr,maxBytesToWrite)=>{maxBytesToWrite??=2147483647;if(maxBytesToWrite<4)return 0;var startPtr=outPtr;var endPtr=startPtr+maxBytesToWrite-4;for(var i=0;i<str.length;++i){var codePoint=str.codePointAt(i);if(codePoint>65535){i++}HEAP32[outPtr>>2]=codePoint;outPtr+=4;if(outPtr+4>endPtr)break}HEAP32[outPtr>>2]=0;return outPtr-startPtr};var AsciiToString=ptr=>{var str="";while(1){var ch=HEAPU8[ptr++];if(!ch)return str;str+=String.fromCharCode(ch)}};var UTF16Decoder=new TextDecoder("utf-16le");var UTF16ToString=(ptr,maxBytesToRead,ignoreNul)=>{var idx=ptr>>1;var endIdx=findStringEnd(HEAPU16,idx,maxBytesToRead/2,ignoreNul);return UTF16Decoder.decode(HEAPU16.subarray(idx,endIdx))};var UTF32ToString=(ptr,maxBytesToRead,ignoreNul)=>{var str="";var startIdx=ptr>>2;for(var i=0;!(i>=maxBytesToRead/4);i++){var utf32=HEAPU32[startIdx+i];if(!utf32&&!ignoreNul)break;str+=String.fromCodePoint(utf32)}return str};var intArrayToString=array=>{var ret=[];for(var i=0;i<array.length;i++){var chr=array[i];if(chr>255){chr&=255}ret.push(String.fromCharCode(chr))}return ret.join("")};var _getTempRet0=getTempRet0;FS.createPreloadedFile=FS_createPreloadedFile;FS.preloadFile=FS_preloadFile;FS.staticInit();adapters_support();{if(Module["noExitRuntime"])noExitRuntime=Module["noExitRuntime"];if(Module["preloadPlugins"])preloadPlugins=Module["preloadPlugins"];if(Module["print"])out=Module["print"];if(Module["printErr"])err=Module["printErr"];if(Module["wasmBinary"])wasmBinary=Module["wasmBinary"];if(Module["arguments"])arguments_=Module["arguments"];if(Module["thisProgram"])thisProgram=Module["thisProgram"];if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].shift()()}}}Module["getTempRet0"]=getTempRet0;Module["ccall"]=ccall;Module["cwrap"]=cwrap;Module["addFunction"]=addFunction;Module["setValue"]=setValue;Module["getValue"]=getValue;Module["UTF8ToString"]=UTF8ToString;Module["stringToUTF8"]=stringToUTF8;Module["lengthBytesUTF8"]=lengthBytesUTF8;Module["intArrayFromString"]=intArrayFromString;Module["intArrayToString"]=intArrayToString;Module["AsciiToString"]=AsciiToString;Module["UTF16ToString"]=UTF16ToString;Module["stringToUTF16"]=stringToUTF16;Module["UTF32ToString"]=UTF32ToString;Module["stringToUTF32"]=stringToUTF32;Module["writeArrayToMemory"]=writeArrayToMemory;Module["_getTempRet0"]=_getTempRet0;var _powersync_init_static,_sqlite3_status64,_sqlite3_status,_sqlite3_msize,_sqlite3_db_status,_sqlite3_vfs_find,_sqlite3_vfs_register,_sqlite3_vfs_unregister,_sqlite3_release_memory,_sqlite3_soft_heap_limit64,_sqlite3_memory_used,_sqlite3_hard_heap_limit64,_sqlite3_memory_highwater,_sqlite3_malloc,_sqlite3_malloc64,_sqlite3_free,_sqlite3_realloc,_sqlite3_realloc64,_sqlite3_str_vappendf,_sqlite3_str_append,_sqlite3_str_appendchar,_sqlite3_str_appendall,_sqlite3_str_appendf,_sqlite3_str_finish,_sqlite3_str_errcode,_sqlite3_str_length,_sqlite3_str_value,_sqlite3_str_reset,_sqlite3_str_new,_sqlite3_vmprintf,_sqlite3_mprintf,_sqlite3_vsnprintf,_sqlite3_snprintf,_sqlite3_log,_sqlite3_randomness,_sqlite3_stricmp,_sqlite3_strnicmp,_sqlite3_os_init,_sqlite3_os_end,_sqlite3_serialize,_sqlite3_prepare_v2,_sqlite3_step,_sqlite3_column_int64,_sqlite3_reset,_sqlite3_exec,_sqlite3_column_int,_sqlite3_finalize,_sqlite3_deserialize,_sqlite3_database_file_object,_sqlite3_backup_init,_sqlite3_backup_step,_sqlite3_backup_finish,_sqlite3_backup_remaining,_sqlite3_backup_pagecount,_sqlite3_clear_bindings,_sqlite3_value_blob,_sqlite3_value_text,_sqlite3_value_bytes,_sqlite3_value_bytes16,_sqlite3_value_double,_sqlite3_value_int,_sqlite3_value_int64,_sqlite3_value_subtype,_sqlite3_value_pointer,_sqlite3_value_text16,_sqlite3_value_text16be,_sqlite3_value_text16le,_sqlite3_value_type,_sqlite3_value_encoding,_sqlite3_value_nochange,_sqlite3_value_frombind,_sqlite3_value_dup,_sqlite3_value_free,_sqlite3_result_blob,_sqlite3_result_blob64,_sqlite3_result_double,_sqlite3_result_error,_sqlite3_result_error16,_sqlite3_result_int,_sqlite3_result_int64,_sqlite3_result_null,_sqlite3_result_pointer,_sqlite3_result_subtype,_sqlite3_result_text,_sqlite3_result_text64,_sqlite3_result_text16,_sqlite3_result_text16be,_sqlite3_result_text16le,_sqlite3_result_value,_sqlite3_result_error_toobig,_sqlite3_result_zeroblob,_sqlite3_result_zeroblob64,_sqlite3_result_error_code,_sqlite3_result_error_nomem,_sqlite3_user_data,_sqlite3_context_db_handle,_sqlite3_vtab_nochange,_sqlite3_vtab_in_first,_sqlite3_vtab_in_next,_sqlite3_aggregate_context,_sqlite3_get_auxdata,_sqlite3_set_auxdata,_sqlite3_column_count,_sqlite3_data_count,_sqlite3_column_blob,_sqlite3_column_bytes,_sqlite3_column_bytes16,_sqlite3_column_double,_sqlite3_column_text,_sqlite3_column_value,_sqlite3_column_text16,_sqlite3_column_type,_sqlite3_column_name,_sqlite3_column_name16,_sqlite3_bind_blob,_sqlite3_bind_blob64,_sqlite3_bind_double,_sqlite3_bind_int,_sqlite3_bind_int64,_sqlite3_bind_null,_sqlite3_bind_pointer,_sqlite3_bind_text,_sqlite3_bind_text64,_sqlite3_bind_text16,_sqlite3_bind_value,_sqlite3_bind_zeroblob,_sqlite3_bind_zeroblob64,_sqlite3_bind_parameter_count,_sqlite3_bind_parameter_name,_sqlite3_bind_parameter_index,_sqlite3_db_handle,_sqlite3_stmt_readonly,_sqlite3_stmt_isexplain,_sqlite3_stmt_explain,_sqlite3_stmt_busy,_sqlite3_next_stmt,_sqlite3_stmt_status,_sqlite3_sql,_sqlite3_expanded_sql,_sqlite3_value_numeric_type,_sqlite3_blob_open,_sqlite3_blob_close,_sqlite3_blob_read,_sqlite3_blob_write,_sqlite3_blob_bytes,_sqlite3_blob_reopen,_sqlite3_set_authorizer,_sqlite3_strglob,_sqlite3_strlike,_sqlite3_errmsg,_sqlite3_load_extension,_sqlite3_enable_load_extension,_sqlite3_auto_extension,_sqlite3_cancel_auto_extension,_sqlite3_reset_auto_extension,_sqlite3_prepare,_sqlite3_prepare_v3,_sqlite3_prepare16,_sqlite3_prepare16_v2,_sqlite3_prepare16_v3,_sqlite3_get_table,_sqlite3_free_table,_sqlite3_create_module,_sqlite3_create_module_v2,_sqlite3_drop_modules,_sqlite3_declare_vtab,_sqlite3_vtab_on_conflict,_sqlite3_vtab_config,_sqlite3_vtab_collation,_sqlite3_vtab_in,_sqlite3_vtab_rhs_value,_sqlite3_vtab_distinct,_sqlite3_keyword_name,_sqlite3_keyword_count,_sqlite3_keyword_check,_sqlite3_complete,_sqlite3_complete16,_sqlite3_libversion,_sqlite3_libversion_number,_sqlite3_threadsafe,_sqlite3_initialize,_sqlite3_shutdown,_sqlite3_config,_sqlite3_db_mutex,_sqlite3_db_release_memory,_sqlite3_db_cacheflush,_sqlite3_db_config,_sqlite3_last_insert_rowid,_sqlite3_set_last_insert_rowid,_sqlite3_changes64,_sqlite3_changes,_sqlite3_total_changes64,_sqlite3_total_changes,_sqlite3_txn_state,_sqlite3_close,_sqlite3_close_v2,_sqlite3_busy_handler,_sqlite3_progress_handler,_sqlite3_busy_timeout,_sqlite3_interrupt,_sqlite3_is_interrupted,_sqlite3_create_function,_sqlite3_create_function_v2,_sqlite3_create_window_function,_sqlite3_create_function16,_sqlite3_overload_function,_sqlite3_trace_v2,_sqlite3_commit_hook,_sqlite3_update_hook,_sqlite3_rollback_hook,_sqlite3_autovacuum_pages,_sqlite3_wal_autocheckpoint,_sqlite3_wal_hook,_sqlite3_wal_checkpoint_v2,_sqlite3_wal_checkpoint,_sqlite3_error_offset,_sqlite3_errmsg16,_sqlite3_errcode,_sqlite3_extended_errcode,_sqlite3_system_errno,_sqlite3_errstr,_sqlite3_limit,_sqlite3_open,_sqlite3_open_v2,_sqlite3_open16,_sqlite3_create_collation,_sqlite3_create_collation_v2,_sqlite3_create_collation16,_sqlite3_collation_needed,_sqlite3_collation_needed16,_sqlite3_get_clientdata,_sqlite3_set_clientdata,_sqlite3_get_autocommit,_sqlite3_table_column_metadata,_sqlite3_sleep,_sqlite3_extended_result_codes,_sqlite3_file_control,_sqlite3_test_control,_sqlite3_create_filename,_sqlite3_free_filename,_sqlite3_uri_parameter,_sqlite3_uri_key,_sqlite3_uri_boolean,_sqlite3_uri_int64,_sqlite3_filename_database,_sqlite3_filename_journal,_sqlite3_filename_wal,_sqlite3_db_name,_sqlite3_db_filename,_sqlite3_db_readonly,_sqlite3_compileoption_used,_sqlite3_compileoption_get,_sqlite3_sourceid,_memcmp,_malloc,_free,_RegisterExtensionFunctions,_getSqliteFree,_main,_libauthorizer_set_authorizer,_libfunction_create_function,_libhook_commit_hook,_libhook_update_hook,_libprogress_progress_handler,_libvfs_vfs_register,_memcpy,_memset,_emscripten_builtin_memalign,__emscripten_timeout,__emscripten_tempret_get,__emscripten_stack_restore,__emscripten_stack_alloc,_emscripten_stack_get_current,dynCall_iii,dynCall_viiiij,dynCall_ii,dynCall_vi,dynCall_iiii,dynCall_viii,dynCall_iiiiiii,dynCall_iiiiii,dynCall_iiiii,dynCall_vii,dynCall_viiii,dynCall_iiiiiiiii,dynCall_vijii,dynCall_viiiii,dynCall_iiiij,dynCall_viji,dynCall_iij,dynCall_iidiiii,dynCall_iijii,dynCall_iiji,dynCall_i,dynCall_iiiiiij,dynCall_iiid,dynCall_iiij,dynCall_dii,dynCall_jii,dynCall_ji,dynCall_vid,dynCall_vij,dynCall_iiiiiiiiii,dynCall_di,dynCall_iiiiijii,dynCall_j,dynCall_jj,dynCall_jiij,dynCall_iiiiji,dynCall_iiiijii,dynCall_ij,dynCall_v,dynCall_viiji,dynCall_viijii,dynCall_iiiiiiiiiii,dynCall_iiiijji,dynCall_iiiiiiii,_asyncify_start_unwind,_asyncify_stop_unwind,_asyncify_start_rewind,_asyncify_stop_rewind,memory,_sqlite3_version,__indirect_function_table,wasmMemory,wasmTable;function assignWasmExports(wasmExports){_powersync_init_static=Module["_powersync_init_static"]=wasmExports["ra"];_sqlite3_status64=Module["_sqlite3_status64"]=wasmExports["sa"];_sqlite3_status=Module["_sqlite3_status"]=wasmExports["ta"];_sqlite3_msize=Module["_sqlite3_msize"]=wasmExports["ua"];_sqlite3_db_status=Module["_sqlite3_db_status"]=wasmExports["va"];_sqlite3_vfs_find=Module["_sqlite3_vfs_find"]=wasmExports["wa"];_sqlite3_vfs_register=Module["_sqlite3_vfs_register"]=wasmExports["xa"];_sqlite3_vfs_unregister=Module["_sqlite3_vfs_unregister"]=wasmExports["ya"];_sqlite3_release_memory=Module["_sqlite3_release_memory"]=wasmExports["za"];_sqlite3_soft_heap_limit64=Module["_sqlite3_soft_heap_limit64"]=wasmExports["Aa"];_sqlite3_memory_used=Module["_sqlite3_memory_used"]=wasmExports["Ba"];_sqlite3_hard_heap_limit64=Module["_sqlite3_hard_heap_limit64"]=wasmExports["Ca"];_sqlite3_memory_highwater=Module["_sqlite3_memory_highwater"]=wasmExports["Da"];_sqlite3_malloc=Module["_sqlite3_malloc"]=wasmExports["Ea"];_sqlite3_malloc64=Module["_sqlite3_malloc64"]=wasmExports["Fa"];_sqlite3_free=Module["_sqlite3_free"]=wasmExports["Ga"];_sqlite3_realloc=Module["_sqlite3_realloc"]=wasmExports["Ha"];_sqlite3_realloc64=Module["_sqlite3_realloc64"]=wasmExports["Ia"];_sqlite3_str_vappendf=Module["_sqlite3_str_vappendf"]=wasmExports["Ja"];_sqlite3_str_append=Module["_sqlite3_str_append"]=wasmExports["Ka"];_sqlite3_str_appendchar=Module["_sqlite3_str_appendchar"]=wasmExports["La"];_sqlite3_str_appendall=Module["_sqlite3_str_appendall"]=wasmExports["Ma"];_sqlite3_str_appendf=Module["_sqlite3_str_appendf"]=wasmExports["Na"];_sqlite3_str_finish=Module["_sqlite3_str_finish"]=wasmExports["Oa"];_sqlite3_str_errcode=Module["_sqlite3_str_errcode"]=wasmExports["Pa"];_sqlite3_str_length=Module["_sqlite3_str_length"]=wasmExports["Qa"];_sqlite3_str_value=Module["_sqlite3_str_value"]=wasmExports["Ra"];_sqlite3_str_reset=Module["_sqlite3_str_reset"]=wasmExports["Sa"];_sqlite3_str_new=Module["_sqlite3_str_new"]=wasmExports["Ta"];_sqlite3_vmprintf=Module["_sqlite3_vmprintf"]=wasmExports["Ua"];_sqlite3_mprintf=Module["_sqlite3_mprintf"]=wasmExports["Va"];_sqlite3_vsnprintf=Module["_sqlite3_vsnprintf"]=wasmExports["Wa"];_sqlite3_snprintf=Module["_sqlite3_snprintf"]=wasmExports["Xa"];_sqlite3_log=Module["_sqlite3_log"]=wasmExports["Ya"];_sqlite3_randomness=Module["_sqlite3_randomness"]=wasmExports["Za"];_sqlite3_stricmp=Module["_sqlite3_stricmp"]=wasmExports["_a"];_sqlite3_strnicmp=Module["_sqlite3_strnicmp"]=wasmExports["$a"];_sqlite3_os_init=Module["_sqlite3_os_init"]=wasmExports["ab"];_sqlite3_os_end=Module["_sqlite3_os_end"]=wasmExports["bb"];_sqlite3_serialize=Module["_sqlite3_serialize"]=wasmExports["cb"];_sqlite3_prepare_v2=Module["_sqlite3_prepare_v2"]=wasmExports["db"];_sqlite3_step=Module["_sqlite3_step"]=wasmExports["eb"];_sqlite3_column_int64=Module["_sqlite3_column_int64"]=wasmExports["fb"];_sqlite3_reset=Module["_sqlite3_reset"]=wasmExports["gb"];_sqlite3_exec=Module["_sqlite3_exec"]=wasmExports["hb"];_sqlite3_column_int=Module["_sqlite3_column_int"]=wasmExports["ib"];_sqlite3_finalize=Module["_sqlite3_finalize"]=wasmExports["jb"];_sqlite3_deserialize=Module["_sqlite3_deserialize"]=wasmExports["kb"];_sqlite3_database_file_object=Module["_sqlite3_database_file_object"]=wasmExports["lb"];_sqlite3_backup_init=Module["_sqlite3_backup_init"]=wasmExports["mb"];_sqlite3_backup_step=Module["_sqlite3_backup_step"]=wasmExports["nb"];_sqlite3_backup_finish=Module["_sqlite3_backup_finish"]=wasmExports["ob"];_sqlite3_backup_remaining=Module["_sqlite3_backup_remaining"]=wasmExports["pb"];_sqlite3_backup_pagecount=Module["_sqlite3_backup_pagecount"]=wasmExports["qb"];_sqlite3_clear_bindings=Module["_sqlite3_clear_bindings"]=wasmExports["rb"];_sqlite3_value_blob=Module["_sqlite3_value_blob"]=wasmExports["sb"];_sqlite3_value_text=Module["_sqlite3_value_text"]=wasmExports["tb"];_sqlite3_value_bytes=Module["_sqlite3_value_bytes"]=wasmExports["ub"];_sqlite3_value_bytes16=Module["_sqlite3_value_bytes16"]=wasmExports["vb"];_sqlite3_value_double=Module["_sqlite3_value_double"]=wasmExports["wb"];_sqlite3_value_int=Module["_sqlite3_value_int"]=wasmExports["xb"];_sqlite3_value_int64=Module["_sqlite3_value_int64"]=wasmExports["yb"];_sqlite3_value_subtype=Module["_sqlite3_value_subtype"]=wasmExports["zb"];_sqlite3_value_pointer=Module["_sqlite3_value_pointer"]=wasmExports["Ab"];_sqlite3_value_text16=Module["_sqlite3_value_text16"]=wasmExports["Bb"];_sqlite3_value_text16be=Module["_sqlite3_value_text16be"]=wasmExports["Cb"];_sqlite3_value_text16le=Module["_sqlite3_value_text16le"]=wasmExports["Db"];_sqlite3_value_type=Module["_sqlite3_value_type"]=wasmExports["Eb"];_sqlite3_value_encoding=Module["_sqlite3_value_encoding"]=wasmExports["Fb"];_sqlite3_value_nochange=Module["_sqlite3_value_nochange"]=wasmExports["Gb"];_sqlite3_value_frombind=Module["_sqlite3_value_frombind"]=wasmExports["Hb"];_sqlite3_value_dup=Module["_sqlite3_value_dup"]=wasmExports["Ib"];_sqlite3_value_free=Module["_sqlite3_value_free"]=wasmExports["Jb"];_sqlite3_result_blob=Module["_sqlite3_result_blob"]=wasmExports["Kb"];_sqlite3_result_blob64=Module["_sqlite3_result_blob64"]=wasmExports["Lb"];_sqlite3_result_double=Module["_sqlite3_result_double"]=wasmExports["Mb"];_sqlite3_result_error=Module["_sqlite3_result_error"]=wasmExports["Nb"];_sqlite3_result_error16=Module["_sqlite3_result_error16"]=wasmExports["Ob"];_sqlite3_result_int=Module["_sqlite3_result_int"]=wasmExports["Pb"];_sqlite3_result_int64=Module["_sqlite3_result_int64"]=wasmExports["Qb"];_sqlite3_result_null=Module["_sqlite3_result_null"]=wasmExports["Rb"];_sqlite3_result_pointer=Module["_sqlite3_result_pointer"]=wasmExports["Sb"];_sqlite3_result_subtype=Module["_sqlite3_result_subtype"]=wasmExports["Tb"];_sqlite3_result_text=Module["_sqlite3_result_text"]=wasmExports["Ub"];_sqlite3_result_text64=Module["_sqlite3_result_text64"]=wasmExports["Vb"];_sqlite3_result_text16=Module["_sqlite3_result_text16"]=wasmExports["Wb"];_sqlite3_result_text16be=Module["_sqlite3_result_text16be"]=wasmExports["Xb"];_sqlite3_result_text16le=Module["_sqlite3_result_text16le"]=wasmExports["Yb"];_sqlite3_result_value=Module["_sqlite3_result_value"]=wasmExports["Zb"];_sqlite3_result_error_toobig=Module["_sqlite3_result_error_toobig"]=wasmExports["_b"];_sqlite3_result_zeroblob=Module["_sqlite3_result_zeroblob"]=wasmExports["$b"];_sqlite3_result_zeroblob64=Module["_sqlite3_result_zeroblob64"]=wasmExports["ac"];_sqlite3_result_error_code=Module["_sqlite3_result_error_code"]=wasmExports["bc"];_sqlite3_result_error_nomem=Module["_sqlite3_result_error_nomem"]=wasmExports["cc"];_sqlite3_user_data=Module["_sqlite3_user_data"]=wasmExports["dc"];_sqlite3_context_db_handle=Module["_sqlite3_context_db_handle"]=wasmExports["ec"];_sqlite3_vtab_nochange=Module["_sqlite3_vtab_nochange"]=wasmExports["fc"];_sqlite3_vtab_in_first=Module["_sqlite3_vtab_in_first"]=wasmExports["gc"];_sqlite3_vtab_in_next=Module["_sqlite3_vtab_in_next"]=wasmExports["hc"];_sqlite3_aggregate_context=Module["_sqlite3_aggregate_context"]=wasmExports["ic"];_sqlite3_get_auxdata=Module["_sqlite3_get_auxdata"]=wasmExports["jc"];_sqlite3_set_auxdata=Module["_sqlite3_set_auxdata"]=wasmExports["kc"];_sqlite3_column_count=Module["_sqlite3_column_count"]=wasmExports["lc"];_sqlite3_data_count=Module["_sqlite3_data_count"]=wasmExports["mc"];_sqlite3_column_blob=Module["_sqlite3_column_blob"]=wasmExports["nc"];_sqlite3_column_bytes=Module["_sqlite3_column_bytes"]=wasmExports["oc"];_sqlite3_column_bytes16=Module["_sqlite3_column_bytes16"]=wasmExports["pc"];_sqlite3_column_double=Module["_sqlite3_column_double"]=wasmExports["qc"];_sqlite3_column_text=Module["_sqlite3_column_text"]=wasmExports["rc"];_sqlite3_column_value=Module["_sqlite3_column_value"]=wasmExports["sc"];_sqlite3_column_text16=Module["_sqlite3_column_text16"]=wasmExports["tc"];_sqlite3_column_type=Module["_sqlite3_column_type"]=wasmExports["uc"];_sqlite3_column_name=Module["_sqlite3_column_name"]=wasmExports["vc"];_sqlite3_column_name16=Module["_sqlite3_column_name16"]=wasmExports["wc"];_sqlite3_bind_blob=Module["_sqlite3_bind_blob"]=wasmExports["xc"];_sqlite3_bind_blob64=Module["_sqlite3_bind_blob64"]=wasmExports["yc"];_sqlite3_bind_double=Module["_sqlite3_bind_double"]=wasmExports["zc"];_sqlite3_bind_int=Module["_sqlite3_bind_int"]=wasmExports["Ac"];_sqlite3_bind_int64=Module["_sqlite3_bind_int64"]=wasmExports["Bc"];_sqlite3_bind_null=Module["_sqlite3_bind_null"]=wasmExports["Cc"];_sqlite3_bind_pointer=Module["_sqlite3_bind_pointer"]=wasmExports["Dc"];_sqlite3_bind_text=Module["_sqlite3_bind_text"]=wasmExports["Ec"];_sqlite3_bind_text64=Module["_sqlite3_bind_text64"]=wasmExports["Fc"];_sqlite3_bind_text16=Module["_sqlite3_bind_text16"]=wasmExports["Gc"];_sqlite3_bind_value=Module["_sqlite3_bind_value"]=wasmExports["Hc"];_sqlite3_bind_zeroblob=Module["_sqlite3_bind_zeroblob"]=wasmExports["Ic"];_sqlite3_bind_zeroblob64=Module["_sqlite3_bind_zeroblob64"]=wasmExports["Jc"];_sqlite3_bind_parameter_count=Module["_sqlite3_bind_parameter_count"]=wasmExports["Kc"];_sqlite3_bind_parameter_name=Module["_sqlite3_bind_parameter_name"]=wasmExports["Lc"];_sqlite3_bind_parameter_index=Module["_sqlite3_bind_parameter_index"]=wasmExports["Mc"];_sqlite3_db_handle=Module["_sqlite3_db_handle"]=wasmExports["Nc"];_sqlite3_stmt_readonly=Module["_sqlite3_stmt_readonly"]=wasmExports["Oc"];_sqlite3_stmt_isexplain=Module["_sqlite3_stmt_isexplain"]=wasmExports["Pc"];_sqlite3_stmt_explain=Module["_sqlite3_stmt_explain"]=wasmExports["Qc"];_sqlite3_stmt_busy=Module["_sqlite3_stmt_busy"]=wasmExports["Rc"];_sqlite3_next_stmt=Module["_sqlite3_next_stmt"]=wasmExports["Sc"];_sqlite3_stmt_status=Module["_sqlite3_stmt_status"]=wasmExports["Tc"];_sqlite3_sql=Module["_sqlite3_sql"]=wasmExports["Uc"];_sqlite3_expanded_sql=Module["_sqlite3_expanded_sql"]=wasmExports["Vc"];_sqlite3_value_numeric_type=Module["_sqlite3_value_numeric_type"]=wasmExports["Wc"];_sqlite3_blob_open=Module["_sqlite3_blob_open"]=wasmExports["Xc"];_sqlite3_blob_close=Module["_sqlite3_blob_close"]=wasmExports["Yc"];_sqlite3_blob_read=Module["_sqlite3_blob_read"]=wasmExports["Zc"];_sqlite3_blob_write=Module["_sqlite3_blob_write"]=wasmExports["_c"];_sqlite3_blob_bytes=Module["_sqlite3_blob_bytes"]=wasmExports["$c"];_sqlite3_blob_reopen=Module["_sqlite3_blob_reopen"]=wasmExports["ad"];_sqlite3_set_authorizer=Module["_sqlite3_set_authorizer"]=wasmExports["bd"];_sqlite3_strglob=Module["_sqlite3_strglob"]=wasmExports["cd"];_sqlite3_strlike=Module["_sqlite3_strlike"]=wasmExports["dd"];_sqlite3_errmsg=Module["_sqlite3_errmsg"]=wasmExports["ed"];_sqlite3_load_extension=Module["_sqlite3_load_extension"]=wasmExports["fd"];_sqlite3_enable_load_extension=Module["_sqlite3_enable_load_extension"]=wasmExports["gd"];_sqlite3_auto_extension=Module["_sqlite3_auto_extension"]=wasmExports["hd"];_sqlite3_cancel_auto_extension=Module["_sqlite3_cancel_auto_extension"]=wasmExports["id"];_sqlite3_reset_auto_extension=Module["_sqlite3_reset_auto_extension"]=wasmExports["jd"];_sqlite3_prepare=Module["_sqlite3_prepare"]=wasmExports["kd"];_sqlite3_prepare_v3=Module["_sqlite3_prepare_v3"]=wasmExports["ld"];_sqlite3_prepare16=Module["_sqlite3_prepare16"]=wasmExports["md"];_sqlite3_prepare16_v2=Module["_sqlite3_prepare16_v2"]=wasmExports["nd"];_sqlite3_prepare16_v3=Module["_sqlite3_prepare16_v3"]=wasmExports["od"];_sqlite3_get_table=Module["_sqlite3_get_table"]=wasmExports["pd"];_sqlite3_free_table=Module["_sqlite3_free_table"]=wasmExports["qd"];_sqlite3_create_module=Module["_sqlite3_create_module"]=wasmExports["rd"];_sqlite3_create_module_v2=Module["_sqlite3_create_module_v2"]=wasmExports["sd"];_sqlite3_drop_modules=Module["_sqlite3_drop_modules"]=wasmExports["td"];_sqlite3_declare_vtab=Module["_sqlite3_declare_vtab"]=wasmExports["ud"];_sqlite3_vtab_on_conflict=Module["_sqlite3_vtab_on_conflict"]=wasmExports["vd"];_sqlite3_vtab_config=Module["_sqlite3_vtab_config"]=wasmExports["wd"];_sqlite3_vtab_collation=Module["_sqlite3_vtab_collation"]=wasmExports["xd"];_sqlite3_vtab_in=Module["_sqlite3_vtab_in"]=wasmExports["yd"];_sqlite3_vtab_rhs_value=Module["_sqlite3_vtab_rhs_value"]=wasmExports["zd"];_sqlite3_vtab_distinct=Module["_sqlite3_vtab_distinct"]=wasmExports["Ad"];_sqlite3_keyword_name=Module["_sqlite3_keyword_name"]=wasmExports["Bd"];_sqlite3_keyword_count=Module["_sqlite3_keyword_count"]=wasmExports["Cd"];_sqlite3_keyword_check=Module["_sqlite3_keyword_check"]=wasmExports["Dd"];_sqlite3_complete=Module["_sqlite3_complete"]=wasmExports["Ed"];_sqlite3_complete16=Module["_sqlite3_complete16"]=wasmExports["Fd"];_sqlite3_libversion=Module["_sqlite3_libversion"]=wasmExports["Gd"];_sqlite3_libversion_number=Module["_sqlite3_libversion_number"]=wasmExports["Hd"];_sqlite3_threadsafe=Module["_sqlite3_threadsafe"]=wasmExports["Id"];_sqlite3_initialize=Module["_sqlite3_initialize"]=wasmExports["Jd"];_sqlite3_shutdown=Module["_sqlite3_shutdown"]=wasmExports["Kd"];_sqlite3_config=Module["_sqlite3_config"]=wasmExports["Ld"];_sqlite3_db_mutex=Module["_sqlite3_db_mutex"]=wasmExports["Md"];_sqlite3_db_release_memory=Module["_sqlite3_db_release_memory"]=wasmExports["Nd"];_sqlite3_db_cacheflush=Module["_sqlite3_db_cacheflush"]=wasmExports["Od"];_sqlite3_db_config=Module["_sqlite3_db_config"]=wasmExports["Pd"];_sqlite3_last_insert_rowid=Module["_sqlite3_last_insert_rowid"]=wasmExports["Qd"];_sqlite3_set_last_insert_rowid=Module["_sqlite3_set_last_insert_rowid"]=wasmExports["Rd"];_sqlite3_changes64=Module["_sqlite3_changes64"]=wasmExports["Sd"];_sqlite3_changes=Module["_sqlite3_changes"]=wasmExports["Td"];_sqlite3_total_changes64=Module["_sqlite3_total_changes64"]=wasmExports["Ud"];_sqlite3_total_changes=Module["_sqlite3_total_changes"]=wasmExports["Vd"];_sqlite3_txn_state=Module["_sqlite3_txn_state"]=wasmExports["Wd"];_sqlite3_close=Module["_sqlite3_close"]=wasmExports["Xd"];_sqlite3_close_v2=Module["_sqlite3_close_v2"]=wasmExports["Yd"];_sqlite3_busy_handler=Module["_sqlite3_busy_handler"]=wasmExports["Zd"];_sqlite3_progress_handler=Module["_sqlite3_progress_handler"]=wasmExports["_d"];_sqlite3_busy_timeout=Module["_sqlite3_busy_timeout"]=wasmExports["$d"];_sqlite3_interrupt=Module["_sqlite3_interrupt"]=wasmExports["ae"];_sqlite3_is_interrupted=Module["_sqlite3_is_interrupted"]=wasmExports["be"];_sqlite3_create_function=Module["_sqlite3_create_function"]=wasmExports["ce"];_sqlite3_create_function_v2=Module["_sqlite3_create_function_v2"]=wasmExports["de"];_sqlite3_create_window_function=Module["_sqlite3_create_window_function"]=wasmExports["ee"];_sqlite3_create_function16=Module["_sqlite3_create_function16"]=wasmExports["fe"];_sqlite3_overload_function=Module["_sqlite3_overload_function"]=wasmExports["ge"];_sqlite3_trace_v2=Module["_sqlite3_trace_v2"]=wasmExports["he"];_sqlite3_commit_hook=Module["_sqlite3_commit_hook"]=wasmExports["ie"];_sqlite3_update_hook=Module["_sqlite3_update_hook"]=wasmExports["je"];_sqlite3_rollback_hook=Module["_sqlite3_rollback_hook"]=wasmExports["ke"];_sqlite3_autovacuum_pages=Module["_sqlite3_autovacuum_pages"]=wasmExports["le"];_sqlite3_wal_autocheckpoint=Module["_sqlite3_wal_autocheckpoint"]=wasmExports["me"];_sqlite3_wal_hook=Module["_sqlite3_wal_hook"]=wasmExports["ne"];_sqlite3_wal_checkpoint_v2=Module["_sqlite3_wal_checkpoint_v2"]=wasmExports["oe"];_sqlite3_wal_checkpoint=Module["_sqlite3_wal_checkpoint"]=wasmExports["pe"];_sqlite3_error_offset=Module["_sqlite3_error_offset"]=wasmExports["qe"];_sqlite3_errmsg16=Module["_sqlite3_errmsg16"]=wasmExports["re"];_sqlite3_errcode=Module["_sqlite3_errcode"]=wasmExports["se"];_sqlite3_extended_errcode=Module["_sqlite3_extended_errcode"]=wasmExports["te"];_sqlite3_system_errno=Module["_sqlite3_system_errno"]=wasmExports["ue"];_sqlite3_errstr=Module["_sqlite3_errstr"]=wasmExports["ve"];_sqlite3_limit=Module["_sqlite3_limit"]=wasmExports["we"];_sqlite3_open=Module["_sqlite3_open"]=wasmExports["xe"];_sqlite3_open_v2=Module["_sqlite3_open_v2"]=wasmExports["ye"];_sqlite3_open16=Module["_sqlite3_open16"]=wasmExports["ze"];_sqlite3_create_collation=Module["_sqlite3_create_collation"]=wasmExports["Ae"];_sqlite3_create_collation_v2=Module["_sqlite3_create_collation_v2"]=wasmExports["Be"];_sqlite3_create_collation16=Module["_sqlite3_create_collation16"]=wasmExports["Ce"];_sqlite3_collation_needed=Module["_sqlite3_collation_needed"]=wasmExports["De"];_sqlite3_collation_needed16=Module["_sqlite3_collation_needed16"]=wasmExports["Ee"];_sqlite3_get_clientdata=Module["_sqlite3_get_clientdata"]=wasmExports["Fe"];_sqlite3_set_clientdata=Module["_sqlite3_set_clientdata"]=wasmExports["Ge"];_sqlite3_get_autocommit=Module["_sqlite3_get_autocommit"]=wasmExports["He"];_sqlite3_table_column_metadata=Module["_sqlite3_table_column_metadata"]=wasmExports["Ie"];_sqlite3_sleep=Module["_sqlite3_sleep"]=wasmExports["Je"];_sqlite3_extended_result_codes=Module["_sqlite3_extended_result_codes"]=wasmExports["Ke"];_sqlite3_file_control=Module["_sqlite3_file_control"]=wasmExports["Le"];_sqlite3_test_control=Module["_sqlite3_test_control"]=wasmExports["Me"];_sqlite3_create_filename=Module["_sqlite3_create_filename"]=wasmExports["Ne"];_sqlite3_free_filename=Module["_sqlite3_free_filename"]=wasmExports["Oe"];_sqlite3_uri_parameter=Module["_sqlite3_uri_parameter"]=wasmExports["Pe"];_sqlite3_uri_key=Module["_sqlite3_uri_key"]=wasmExports["Qe"];_sqlite3_uri_boolean=Module["_sqlite3_uri_boolean"]=wasmExports["Re"];_sqlite3_uri_int64=Module["_sqlite3_uri_int64"]=wasmExports["Se"];_sqlite3_filename_database=Module["_sqlite3_filename_database"]=wasmExports["Te"];_sqlite3_filename_journal=Module["_sqlite3_filename_journal"]=wasmExports["Ue"];_sqlite3_filename_wal=Module["_sqlite3_filename_wal"]=wasmExports["Ve"];_sqlite3_db_name=Module["_sqlite3_db_name"]=wasmExports["We"];_sqlite3_db_filename=Module["_sqlite3_db_filename"]=wasmExports["Xe"];_sqlite3_db_readonly=Module["_sqlite3_db_readonly"]=wasmExports["Ye"];_sqlite3_compileoption_used=Module["_sqlite3_compileoption_used"]=wasmExports["Ze"];_sqlite3_compileoption_get=Module["_sqlite3_compileoption_get"]=wasmExports["_e"];_sqlite3_sourceid=Module["_sqlite3_sourceid"]=wasmExports["$e"];_memcmp=Module["_memcmp"]=wasmExports["af"];_malloc=Module["_malloc"]=wasmExports["bf"];_free=Module["_free"]=wasmExports["cf"];_RegisterExtensionFunctions=Module["_RegisterExtensionFunctions"]=wasmExports["ef"];_getSqliteFree=Module["_getSqliteFree"]=wasmExports["ff"];_main=Module["_main"]=wasmExports["gf"];_libauthorizer_set_authorizer=Module["_libauthorizer_set_authorizer"]=wasmExports["hf"];_libfunction_create_function=Module["_libfunction_create_function"]=wasmExports["jf"];_libhook_commit_hook=Module["_libhook_commit_hook"]=wasmExports["kf"];_libhook_update_hook=Module["_libhook_update_hook"]=wasmExports["lf"];_libprogress_progress_handler=Module["_libprogress_progress_handler"]=wasmExports["mf"];_libvfs_vfs_register=Module["_libvfs_vfs_register"]=wasmExports["nf"];_memcpy=Module["_memcpy"]=wasmExports["of"];_memset=Module["_memset"]=wasmExports["pf"];_emscripten_builtin_memalign=wasmExports["rf"];__emscripten_timeout=wasmExports["sf"];__emscripten_tempret_get=wasmExports["tf"];__emscripten_stack_restore=wasmExports["uf"];__emscripten_stack_alloc=wasmExports["vf"];_emscripten_stack_get_current=wasmExports["wf"];dynCall_iii=dynCalls["iii"]=wasmExports["xf"];dynCall_viiiij=dynCalls["viiiij"]=wasmExports["yf"];dynCall_ii=dynCalls["ii"]=wasmExports["zf"];dynCall_vi=dynCalls["vi"]=wasmExports["Af"];dynCall_iiii=dynCalls["iiii"]=wasmExports["Bf"];dynCall_viii=dynCalls["viii"]=wasmExports["Cf"];dynCall_iiiiiii=dynCalls["iiiiiii"]=wasmExports["Df"];dynCall_iiiiii=dynCalls["iiiiii"]=wasmExports["Ef"];dynCall_iiiii=dynCalls["iiiii"]=wasmExports["Ff"];dynCall_vii=dynCalls["vii"]=wasmExports["Gf"];dynCall_viiii=dynCalls["viiii"]=wasmExports["Hf"];dynCall_iiiiiiiii=dynCalls["iiiiiiiii"]=wasmExports["If"];dynCall_vijii=dynCalls["vijii"]=wasmExports["Jf"];dynCall_viiiii=dynCalls["viiiii"]=wasmExports["Kf"];dynCall_iiiij=dynCalls["iiiij"]=wasmExports["Lf"];dynCall_viji=dynCalls["viji"]=wasmExports["Mf"];dynCall_iij=dynCalls["iij"]=wasmExports["Nf"];dynCall_iidiiii=dynCalls["iidiiii"]=wasmExports["Of"];dynCall_iijii=dynCalls["iijii"]=wasmExports["Pf"];dynCall_iiji=dynCalls["iiji"]=wasmExports["Qf"];dynCall_i=dynCalls["i"]=wasmExports["Rf"];dynCall_iiiiiij=dynCalls["iiiiiij"]=wasmExports["Sf"];dynCall_iiid=dynCalls["iiid"]=wasmExports["Tf"];dynCall_iiij=dynCalls["iiij"]=wasmExports["Uf"];dynCall_dii=dynCalls["dii"]=wasmExports["Vf"];dynCall_jii=dynCalls["jii"]=wasmExports["Wf"];dynCall_ji=dynCalls["ji"]=wasmExports["Xf"];dynCall_vid=dynCalls["vid"]=wasmExports["Yf"];dynCall_vij=dynCalls["vij"]=wasmExports["Zf"];dynCall_iiiiiiiiii=dynCalls["iiiiiiiiii"]=wasmExports["_f"];dynCall_di=dynCalls["di"]=wasmExports["$f"];dynCall_iiiiijii=dynCalls["iiiiijii"]=wasmExports["ag"];dynCall_j=dynCalls["j"]=wasmExports["bg"];dynCall_jj=dynCalls["jj"]=wasmExports["cg"];dynCall_jiij=dynCalls["jiij"]=wasmExports["dg"];dynCall_iiiiji=dynCalls["iiiiji"]=wasmExports["eg"];dynCall_iiiijii=dynCalls["iiiijii"]=wasmExports["fg"];dynCall_ij=dynCalls["ij"]=wasmExports["gg"];dynCall_v=dynCalls["v"]=wasmExports["hg"];dynCall_viiji=dynCalls["viiji"]=wasmExports["ig"];dynCall_viijii=dynCalls["viijii"]=wasmExports["jg"];dynCall_iiiiiiiiiii=dynCalls["iiiiiiiiiii"]=wasmExports["kg"];dynCall_iiiijji=dynCalls["iiiijji"]=wasmExports["lg"];dynCall_iiiiiiii=dynCalls["iiiiiiii"]=wasmExports["mg"];_asyncify_start_unwind=wasmExports["ng"];_asyncify_stop_unwind=wasmExports["og"];_asyncify_start_rewind=wasmExports["pg"];_asyncify_stop_rewind=wasmExports["qg"];memory=wasmMemory=wasmExports["pa"];_sqlite3_version=Module["_sqlite3_version"]=wasmExports["df"].value;__indirect_function_table=wasmTable=wasmExports["qf"]}var wasmImports={a:___assert_fail,aa:___syscall_chmod,da:___syscall_faccessat,ba:___syscall_fchmod,$:___syscall_fchown32,b:___syscall_fcntl64,_:___syscall_fstat64,y:___syscall_ftruncate64,U:___syscall_getcwd,Y:___syscall_lstat64,R:___syscall_mkdirat,X:___syscall_newfstatat,P:___syscall_openat,N:___syscall_readlinkat,M:___syscall_rmdir,Z:___syscall_stat64,K:___syscall_unlinkat,J:___syscall_utimensat,F:__abort_js,E:__emscripten_runtime_keepalive_clear,w:__localtime_js,u:__mmap_js,v:__munmap_js,G:__setitimer_js,Q:__tzset_js,n:_emscripten_date_now,g:_emscripten_get_now,H:_emscripten_resize_heap,S:_environ_get,T:_environ_sizes_get,o:_fd_close,I:_fd_fdstat_get,O:_fd_read,x:_fd_seek,V:_fd_sync,L:_fd_write,s:_ipp,t:_ipp_async,ka:_ippipppp,oa:_ippipppp_async,j:_ippp,k:_ippp_async,c:_ipppi,d:_ipppi_async,ga:_ipppiii,ha:_ipppiii_async,ia:_ipppiiip,ja:_ipppiiip_async,h:_ipppip,i:_ipppip_async,z:_ipppj,A:_ipppj_async,e:_ipppp,f:_ipppp_async,ea:_ippppi,fa:_ippppi_async,B:_ippppij,C:_ippppij_async,p:_ippppip,q:_ippppip_async,la:_ipppppip,ma:_ipppppip_async,D:_proc_exit,na:_vppippii,r:_vppippii_async,l:_vppp,m:_vppp_async,W:_vpppip,ca:_vpppip_async};function callMain(){var entryFunction=_main;var argc=0;var argv=0;try{var ret=entryFunction(argc,argv);exitJS(ret,true);return ret}catch(e){return handleException(e)}}function run(){if(runDependencies>0){dependenciesFulfilled=run;return}preRun();if(runDependencies>0){dependenciesFulfilled=run;return}function doRun(){Module["calledRun"]=true;if(ABORT)return;initRuntime();preMain();readyPromiseResolve?.(Module);Module["onRuntimeInitialized"]?.();var noInitialRun=Module["noInitialRun"]||false;if(!noInitialRun)callMain();postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout(()=>{setTimeout(()=>Module["setStatus"](""),1);doRun()},1)}else{doRun()}}var wasmExports;wasmExports=await (createWasm());run();(function(){const AsyncFunction=Object.getPrototypeOf(async function(){}).constructor;let pAsyncFlags=0;Module["set_authorizer"]=function(db,xAuthorizer,pApp){if(pAsyncFlags){Module["deleteCallback"](pAsyncFlags);Module["_sqlite3_free"](pAsyncFlags);pAsyncFlags=0}pAsyncFlags=Module["_sqlite3_malloc"](4);setValue(pAsyncFlags,xAuthorizer instanceof AsyncFunction?1:0,"i32");const result=ccall("libauthorizer_set_authorizer","number",["number","number","number"],[db,xAuthorizer?1:0,pAsyncFlags]);if(!result&&xAuthorizer){Module["setCallback"](pAsyncFlags,(_,iAction,p3,p4,p5,p6)=>xAuthorizer(pApp,iAction,p3,p4,p5,p6))}return result}})();(function(){const AsyncFunction=Object.getPrototypeOf(async function(){}).constructor;const FUNC_METHODS=["xFunc","xStep","xFinal"];const mapFunctionNameToKey=new Map;Module["create_function"]=function(db,zFunctionName,nArg,eTextRep,pApp,xFunc,xStep,xFinal){const pAsyncFlags=Module["_sqlite3_malloc"](4);const target={xFunc,xStep,xFinal};setValue(pAsyncFlags,FUNC_METHODS.reduce((mask,method,i)=>{if(target[method]instanceof AsyncFunction){return mask|1<<i}return mask},0),"i32");const result=ccall("libfunction_create_function","number",["number","string","number","number","number","number","number","number"],[db,zFunctionName,nArg,eTextRep,pAsyncFlags,xFunc?1:0,xStep?1:0,xFinal?1:0]);if(!result){if(mapFunctionNameToKey.has(zFunctionName)){const oldKey=mapFunctionNameToKey.get(zFunctionName);Module["deleteCallback"](oldKey)}mapFunctionNameToKey.set(zFunctionName,pAsyncFlags);Module["setCallback"](pAsyncFlags,{xFunc,xStep,xFinal})}return result}})();(function(){const AsyncFunction=Object.getPrototypeOf(async function(){}).constructor;let pAsyncFlags=0;Module["update_hook"]=function(db,xUpdateHook){if(pAsyncFlags){Module["deleteCallback"](pAsyncFlags);Module["_sqlite3_free"](pAsyncFlags);pAsyncFlags=0}pAsyncFlags=Module["_sqlite3_malloc"](4);setValue(pAsyncFlags,xUpdateHook instanceof AsyncFunction?1:0,"i32");ccall("libhook_update_hook","void",["number","number","number"],[db,xUpdateHook?1:0,pAsyncFlags]);if(xUpdateHook){Module["setCallback"](pAsyncFlags,(_,iUpdateType,dbName,tblName,lo32,hi32)=>xUpdateHook(iUpdateType,dbName,tblName,lo32,hi32))}}})();(function(){const AsyncFunction=Object.getPrototypeOf(async function(){}).constructor;let pAsyncFlags=0;Module["commit_hook"]=function(db,xCommitHook){if(pAsyncFlags){Module["deleteCallback"](pAsyncFlags);Module["_sqlite3_free"](pAsyncFlags);pAsyncFlags=0}pAsyncFlags=Module["_sqlite3_malloc"](4);setValue(pAsyncFlags,xCommitHook instanceof AsyncFunction?1:0,"i32");ccall("libhook_commit_hook","void",["number","number","number"],[db,xCommitHook?1:0,pAsyncFlags]);if(xCommitHook){Module["setCallback"](pAsyncFlags,_=>xCommitHook())}}})();(function(){const AsyncFunction=Object.getPrototypeOf(async function(){}).constructor;let pAsyncFlags=0;Module["progress_handler"]=function(db,nOps,xProgress,pApp){if(pAsyncFlags){Module["deleteCallback"](pAsyncFlags);Module["_sqlite3_free"](pAsyncFlags);pAsyncFlags=0}pAsyncFlags=Module["_sqlite3_malloc"](4);setValue(pAsyncFlags,xProgress instanceof AsyncFunction?1:0,"i32");ccall("libprogress_progress_handler","number",["number","number","number","number"],[db,nOps,xProgress?1:0,pAsyncFlags]);if(xProgress){Module["setCallback"](pAsyncFlags,_=>xProgress(pApp))}}})();(function(){const VFS_METHODS=["xOpen","xDelete","xAccess","xFullPathname","xRandomness","xSleep","xCurrentTime","xGetLastError","xCurrentTimeInt64","xClose","xRead","xWrite","xTruncate","xSync","xFileSize","xLock","xUnlock","xCheckReservedLock","xFileControl","xSectorSize","xDeviceCharacteristics","xShmMap","xShmLock","xShmBarrier","xShmUnmap"];const mapVFSNameToKey=new Map;Module["vfs_register"]=function(vfs,makeDefault){let methodMask=0;let asyncMask=0;VFS_METHODS.forEach((method,i)=>{if(vfs[method]){methodMask|=1<<i;if(vfs["hasAsyncMethod"](method)){asyncMask|=1<<i}}});const vfsReturn=Module["_sqlite3_malloc"](4);try{const result=ccall("libvfs_vfs_register","number",["string","number","number","number","number","number"],[vfs.name,vfs.mxPathname,methodMask,asyncMask,makeDefault?1:0,vfsReturn]);if(!result){if(mapVFSNameToKey.has(vfs.name)){const oldKey=mapVFSNameToKey.get(vfs.name);Module["deleteCallback"](oldKey)}const key=getValue(vfsReturn,"*");mapVFSNameToKey.set(vfs.name,key);Module["setCallback"](key,vfs)}return result}finally{Module["_sqlite3_free"](vfsReturn)}}})();if(runtimeInitialized){moduleRtn=Module}else{moduleRtn=new Promise((resolve,reject)=>{readyPromiseResolve=resolve;readyPromiseReject=reject})}
;return moduleRtn}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Module);


/***/ },

/***/ "../../node_modules/.pnpm/@journeyapps+wa-sqlite@1.5.0/node_modules/@journeyapps/wa-sqlite/dist/wa-sqlite.mjs"
/*!********************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@journeyapps+wa-sqlite@1.5.0/node_modules/@journeyapps/wa-sqlite/dist/wa-sqlite.mjs ***!
  \********************************************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function Module(moduleArg={}){var moduleRtn;var Module=moduleArg;var ENVIRONMENT_IS_WEB=!!globalThis.window;var ENVIRONMENT_IS_WORKER=!!globalThis.WorkerGlobalScope;var ENVIRONMENT_IS_NODE=globalThis.process?.versions?.node&&globalThis.process?.type!="renderer";var arguments_=[];var thisProgram="./this.program";var quit_=(status,toThrow)=>{throw toThrow};var _scriptName="file:///home/runner/work/powersync-js/powersync-js/node_modules/.pnpm/@journeyapps+wa-sqlite@1.5.0/node_modules/@journeyapps/wa-sqlite/dist/wa-sqlite.mjs";var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var readAsync,readBinary;if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){try{scriptDirectory=new URL(".",_scriptName).href}catch{}{if(ENVIRONMENT_IS_WORKER){readBinary=url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)}}readAsync=async url=>{var response=await fetch(url,{credentials:"same-origin"});if(response.ok){return response.arrayBuffer()}throw new Error(response.status+" : "+response.url)}}}else{}var out=console.log.bind(console);var err=console.error.bind(console);var wasmBinary;var ABORT=false;var EXITSTATUS;var readyPromiseResolve,readyPromiseReject;var HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;var runtimeInitialized=false;function updateMemoryViews(){var b=wasmMemory.buffer;HEAP8=new Int8Array(b);HEAP16=new Int16Array(b);Module["HEAPU8"]=HEAPU8=new Uint8Array(b);HEAPU16=new Uint16Array(b);Module["HEAP32"]=HEAP32=new Int32Array(b);HEAPU32=new Uint32Array(b);HEAPF32=new Float32Array(b);HEAPF64=new Float64Array(b)}function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(onPreRuns)}function initRuntime(){runtimeInitialized=true;if(!Module["noFSInit"]&&!FS.initialized)FS.init();TTY.init();wasmExports["qa"]();FS.ignorePermissions=false}function preMain(){}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(onPostRuns)}function abort(what){Module["onAbort"]?.(what);what="Aborted("+what+")";err(what);ABORT=true;what+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(what);readyPromiseReject?.(e);throw e}var wasmBinaryFile;function findWasmBinary(){if(Module["locateFile"]){return locateFile("wa-sqlite.wasm")}return new URL(/* asset import */ __webpack_require__(/*! wa-sqlite.wasm */ "../../node_modules/.pnpm/@journeyapps+wa-sqlite@1.5.0/node_modules/@journeyapps/wa-sqlite/dist/wa-sqlite.wasm"), __webpack_require__.b).href}function getBinarySync(file){if(file==wasmBinaryFile&&wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(file)}throw"both async and sync fetching of the wasm failed"}async function getWasmBinary(binaryFile){if(!wasmBinary){try{var response=await readAsync(binaryFile);return new Uint8Array(response)}catch{}}return getBinarySync(binaryFile)}async function instantiateArrayBuffer(binaryFile,imports){try{var binary=await getWasmBinary(binaryFile);var instance=await WebAssembly.instantiate(binary,imports);return instance}catch(reason){err(`failed to asynchronously prepare wasm: ${reason}`);abort(reason)}}async function instantiateAsync(binary,binaryFile,imports){if(!binary){try{var response=fetch(binaryFile,{credentials:"same-origin"});var instantiationResult=await WebAssembly.instantiateStreaming(response,imports);return instantiationResult}catch(reason){err(`wasm streaming compile failed: ${reason}`);err("falling back to ArrayBuffer instantiation")}}return instantiateArrayBuffer(binaryFile,imports)}function getWasmImports(){var imports={a:wasmImports};return imports}async function createWasm(){function receiveInstance(instance,module){wasmExports=instance.exports;assignWasmExports(wasmExports);updateMemoryViews();return wasmExports}function receiveInstantiationResult(result){return receiveInstance(result["instance"])}var info=getWasmImports();if(Module["instantiateWasm"]){return new Promise((resolve,reject)=>{Module["instantiateWasm"](info,(inst,mod)=>{resolve(receiveInstance(inst,mod))})})}wasmBinaryFile??=findWasmBinary();var result=await instantiateAsync(wasmBinary,wasmBinaryFile,info);var exports=receiveInstantiationResult(result);return exports}var tempDouble;var tempI64;class ExitStatus{name="ExitStatus";constructor(status){this.message=`Program terminated with exit(${status})`;this.status=status}}var callRuntimeCallbacks=callbacks=>{while(callbacks.length>0){callbacks.shift()(Module)}};var onPostRuns=[];var addOnPostRun=cb=>onPostRuns.push(cb);var onPreRuns=[];var addOnPreRun=cb=>onPreRuns.push(cb);function getValue(ptr,type="i8"){if(type.endsWith("*"))type="*";switch(type){case"i1":return HEAP8[ptr];case"i8":return HEAP8[ptr];case"i16":return HEAP16[ptr>>1];case"i32":return HEAP32[ptr>>2];case"i64":abort("to do getValue(i64) use WASM_BIGINT");case"float":return HEAPF32[ptr>>2];case"double":return HEAPF64[ptr>>3];case"*":return HEAPU32[ptr>>2];default:abort(`invalid type for getValue: ${type}`)}}var noExitRuntime=true;function setValue(ptr,value,type="i8"){if(type.endsWith("*"))type="*";switch(type){case"i1":HEAP8[ptr]=value;break;case"i8":HEAP8[ptr]=value;break;case"i16":HEAP16[ptr>>1]=value;break;case"i32":HEAP32[ptr>>2]=value;break;case"i64":abort("to do setValue(i64) use WASM_BIGINT");case"float":HEAPF32[ptr>>2]=value;break;case"double":HEAPF64[ptr>>3]=value;break;case"*":HEAPU32[ptr>>2]=value;break;default:abort(`invalid type for setValue: ${type}`)}}var stackRestore=val=>__emscripten_stack_restore(val);var stackSave=()=>_emscripten_stack_get_current();var UTF8Decoder=new TextDecoder;var findStringEnd=(heapOrArray,idx,maxBytesToRead,ignoreNul)=>{var maxIdx=idx+maxBytesToRead;if(ignoreNul)return maxIdx;while(heapOrArray[idx]&&!(idx>=maxIdx))++idx;return idx};var UTF8ToString=(ptr,maxBytesToRead,ignoreNul)=>{if(!ptr)return"";var end=findStringEnd(HEAPU8,ptr,maxBytesToRead,ignoreNul);return UTF8Decoder.decode(HEAPU8.subarray(ptr,end))};var ___assert_fail=(condition,filename,line,func)=>abort(`Assertion failed: ${UTF8ToString(condition)}, at: `+[filename?UTF8ToString(filename):"unknown filename",line,func?UTF8ToString(func):"unknown function"]);var PATH={isAbs:path=>path.charAt(0)==="/",splitPath:filename=>{var splitPathRe=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return splitPathRe.exec(filename).slice(1)},normalizeArray:(parts,allowAboveRoot)=>{var up=0;for(var i=parts.length-1;i>=0;i--){var last=parts[i];if(last==="."){parts.splice(i,1)}else if(last===".."){parts.splice(i,1);up++}else if(up){parts.splice(i,1);up--}}if(allowAboveRoot){for(;up;up--){parts.unshift("..")}}return parts},normalize:path=>{var isAbsolute=PATH.isAbs(path),trailingSlash=path.slice(-1)==="/";path=PATH.normalizeArray(path.split("/").filter(p=>!!p),!isAbsolute).join("/");if(!path&&!isAbsolute){path="."}if(path&&trailingSlash){path+="/"}return(isAbsolute?"/":"")+path},dirname:path=>{var result=PATH.splitPath(path),root=result[0],dir=result[1];if(!root&&!dir){return"."}if(dir){dir=dir.slice(0,-1)}return root+dir},basename:path=>path&&path.match(/([^\/]+|\/)\/*$/)[1],join:(...paths)=>PATH.normalize(paths.join("/")),join2:(l,r)=>PATH.normalize(l+"/"+r)};var initRandomFill=()=>view=>crypto.getRandomValues(view);var randomFill=view=>{(randomFill=initRandomFill())(view)};var PATH_FS={resolve:(...args)=>{var resolvedPath="",resolvedAbsolute=false;for(var i=args.length-1;i>=-1&&!resolvedAbsolute;i--){var path=i>=0?args[i]:FS.cwd();if(typeof path!="string"){throw new TypeError("Arguments to path.resolve must be strings")}else if(!path){return""}resolvedPath=path+"/"+resolvedPath;resolvedAbsolute=PATH.isAbs(path)}resolvedPath=PATH.normalizeArray(resolvedPath.split("/").filter(p=>!!p),!resolvedAbsolute).join("/");return(resolvedAbsolute?"/":"")+resolvedPath||"."},relative:(from,to)=>{from=PATH_FS.resolve(from).slice(1);to=PATH_FS.resolve(to).slice(1);function trim(arr){var start=0;for(;start<arr.length;start++){if(arr[start]!=="")break}var end=arr.length-1;for(;end>=0;end--){if(arr[end]!=="")break}if(start>end)return[];return arr.slice(start,end-start+1)}var fromParts=trim(from.split("/"));var toParts=trim(to.split("/"));var length=Math.min(fromParts.length,toParts.length);var samePartsLength=length;for(var i=0;i<length;i++){if(fromParts[i]!==toParts[i]){samePartsLength=i;break}}var outputParts=[];for(var i=samePartsLength;i<fromParts.length;i++){outputParts.push("..")}outputParts=outputParts.concat(toParts.slice(samePartsLength));return outputParts.join("/")}};var UTF8ArrayToString=(heapOrArray,idx=0,maxBytesToRead,ignoreNul)=>{var endPtr=findStringEnd(heapOrArray,idx,maxBytesToRead,ignoreNul);return UTF8Decoder.decode(heapOrArray.buffer?heapOrArray.subarray(idx,endPtr):new Uint8Array(heapOrArray.slice(idx,endPtr)))};var FS_stdin_getChar_buffer=[];var lengthBytesUTF8=str=>{var len=0;for(var i=0;i<str.length;++i){var c=str.charCodeAt(i);if(c<=127){len++}else if(c<=2047){len+=2}else if(c>=55296&&c<=57343){len+=4;++i}else{len+=3}}return len};var stringToUTF8Array=(str,heap,outIdx,maxBytesToWrite)=>{if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.codePointAt(i);if(u<=127){if(outIdx>=endIdx)break;heap[outIdx++]=u}else if(u<=2047){if(outIdx+1>=endIdx)break;heap[outIdx++]=192|u>>6;heap[outIdx++]=128|u&63}else if(u<=65535){if(outIdx+2>=endIdx)break;heap[outIdx++]=224|u>>12;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}else{if(outIdx+3>=endIdx)break;heap[outIdx++]=240|u>>18;heap[outIdx++]=128|u>>12&63;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63;i++}}heap[outIdx]=0;return outIdx-startIdx};var intArrayFromString=(stringy,dontAddNull,length)=>{var len=length>0?length:lengthBytesUTF8(stringy)+1;var u8array=new Array(len);var numBytesWritten=stringToUTF8Array(stringy,u8array,0,u8array.length);if(dontAddNull)u8array.length=numBytesWritten;return u8array};var FS_stdin_getChar=()=>{if(!FS_stdin_getChar_buffer.length){var result=null;if(globalThis.window?.prompt){result=window.prompt("Input: ");if(result!==null){result+="\n"}}else{}if(!result){return null}FS_stdin_getChar_buffer=intArrayFromString(result,true)}return FS_stdin_getChar_buffer.shift()};var TTY={ttys:[],init(){},shutdown(){},register(dev,ops){TTY.ttys[dev]={input:[],output:[],ops};FS.registerDevice(dev,TTY.stream_ops)},stream_ops:{open(stream){var tty=TTY.ttys[stream.node.rdev];if(!tty){throw new FS.ErrnoError(43)}stream.tty=tty;stream.seekable=false},close(stream){stream.tty.ops.fsync(stream.tty)},fsync(stream){stream.tty.ops.fsync(stream.tty)},read(stream,buffer,offset,length,pos){if(!stream.tty||!stream.tty.ops.get_char){throw new FS.ErrnoError(60)}var bytesRead=0;for(var i=0;i<length;i++){var result;try{result=stream.tty.ops.get_char(stream.tty)}catch(e){throw new FS.ErrnoError(29)}if(result===undefined&&bytesRead===0){throw new FS.ErrnoError(6)}if(result===null||result===undefined)break;bytesRead++;buffer[offset+i]=result}if(bytesRead){stream.node.atime=Date.now()}return bytesRead},write(stream,buffer,offset,length,pos){if(!stream.tty||!stream.tty.ops.put_char){throw new FS.ErrnoError(60)}try{for(var i=0;i<length;i++){stream.tty.ops.put_char(stream.tty,buffer[offset+i])}}catch(e){throw new FS.ErrnoError(29)}if(length){stream.node.mtime=stream.node.ctime=Date.now()}return i}},default_tty_ops:{get_char(tty){return FS_stdin_getChar()},put_char(tty,val){if(val===null||val===10){out(UTF8ArrayToString(tty.output));tty.output=[]}else{if(val!=0)tty.output.push(val)}},fsync(tty){if(tty.output?.length>0){out(UTF8ArrayToString(tty.output));tty.output=[]}},ioctl_tcgets(tty){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(tty,optional_actions,data){return 0},ioctl_tiocgwinsz(tty){return[24,80]}},default_tty1_ops:{put_char(tty,val){if(val===null||val===10){err(UTF8ArrayToString(tty.output));tty.output=[]}else{if(val!=0)tty.output.push(val)}},fsync(tty){if(tty.output?.length>0){err(UTF8ArrayToString(tty.output));tty.output=[]}}}};var zeroMemory=(ptr,size)=>HEAPU8.fill(0,ptr,ptr+size);var alignMemory=(size,alignment)=>Math.ceil(size/alignment)*alignment;var mmapAlloc=size=>{size=alignMemory(size,65536);var ptr=_emscripten_builtin_memalign(65536,size);if(ptr)zeroMemory(ptr,size);return ptr};var MEMFS={ops_table:null,mount(mount){return MEMFS.createNode(null,"/",16895,0)},createNode(parent,name,mode,dev){if(FS.isBlkdev(mode)||FS.isFIFO(mode)){throw new FS.ErrnoError(63)}MEMFS.ops_table||={dir:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr,lookup:MEMFS.node_ops.lookup,mknod:MEMFS.node_ops.mknod,rename:MEMFS.node_ops.rename,unlink:MEMFS.node_ops.unlink,rmdir:MEMFS.node_ops.rmdir,readdir:MEMFS.node_ops.readdir,symlink:MEMFS.node_ops.symlink},stream:{llseek:MEMFS.stream_ops.llseek}},file:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr},stream:{llseek:MEMFS.stream_ops.llseek,read:MEMFS.stream_ops.read,write:MEMFS.stream_ops.write,mmap:MEMFS.stream_ops.mmap,msync:MEMFS.stream_ops.msync}},link:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr,readlink:MEMFS.node_ops.readlink},stream:{}},chrdev:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr},stream:FS.chrdev_stream_ops}};var node=FS.createNode(parent,name,mode,dev);if(FS.isDir(node.mode)){node.node_ops=MEMFS.ops_table.dir.node;node.stream_ops=MEMFS.ops_table.dir.stream;node.contents={}}else if(FS.isFile(node.mode)){node.node_ops=MEMFS.ops_table.file.node;node.stream_ops=MEMFS.ops_table.file.stream;node.usedBytes=0;node.contents=null}else if(FS.isLink(node.mode)){node.node_ops=MEMFS.ops_table.link.node;node.stream_ops=MEMFS.ops_table.link.stream}else if(FS.isChrdev(node.mode)){node.node_ops=MEMFS.ops_table.chrdev.node;node.stream_ops=MEMFS.ops_table.chrdev.stream}node.atime=node.mtime=node.ctime=Date.now();if(parent){parent.contents[name]=node;parent.atime=parent.mtime=parent.ctime=node.atime}return node},getFileDataAsTypedArray(node){if(!node.contents)return new Uint8Array(0);if(node.contents.subarray)return node.contents.subarray(0,node.usedBytes);return new Uint8Array(node.contents)},expandFileStorage(node,newCapacity){var prevCapacity=node.contents?node.contents.length:0;if(prevCapacity>=newCapacity)return;var CAPACITY_DOUBLING_MAX=1024*1024;newCapacity=Math.max(newCapacity,prevCapacity*(prevCapacity<CAPACITY_DOUBLING_MAX?2:1.125)>>>0);if(prevCapacity!=0)newCapacity=Math.max(newCapacity,256);var oldContents=node.contents;node.contents=new Uint8Array(newCapacity);if(node.usedBytes>0)node.contents.set(oldContents.subarray(0,node.usedBytes),0)},resizeFileStorage(node,newSize){if(node.usedBytes==newSize)return;if(newSize==0){node.contents=null;node.usedBytes=0}else{var oldContents=node.contents;node.contents=new Uint8Array(newSize);if(oldContents){node.contents.set(oldContents.subarray(0,Math.min(newSize,node.usedBytes)))}node.usedBytes=newSize}},node_ops:{getattr(node){var attr={};attr.dev=FS.isChrdev(node.mode)?node.id:1;attr.ino=node.id;attr.mode=node.mode;attr.nlink=1;attr.uid=0;attr.gid=0;attr.rdev=node.rdev;if(FS.isDir(node.mode)){attr.size=4096}else if(FS.isFile(node.mode)){attr.size=node.usedBytes}else if(FS.isLink(node.mode)){attr.size=node.link.length}else{attr.size=0}attr.atime=new Date(node.atime);attr.mtime=new Date(node.mtime);attr.ctime=new Date(node.ctime);attr.blksize=4096;attr.blocks=Math.ceil(attr.size/attr.blksize);return attr},setattr(node,attr){for(const key of["mode","atime","mtime","ctime"]){if(attr[key]!=null){node[key]=attr[key]}}if(attr.size!==undefined){MEMFS.resizeFileStorage(node,attr.size)}},lookup(parent,name){if(!MEMFS.doesNotExistError){MEMFS.doesNotExistError=new FS.ErrnoError(44);MEMFS.doesNotExistError.stack="<generic error, no stack>"}throw MEMFS.doesNotExistError},mknod(parent,name,mode,dev){return MEMFS.createNode(parent,name,mode,dev)},rename(old_node,new_dir,new_name){var new_node;try{new_node=FS.lookupNode(new_dir,new_name)}catch(e){}if(new_node){if(FS.isDir(old_node.mode)){for(var i in new_node.contents){throw new FS.ErrnoError(55)}}FS.hashRemoveNode(new_node)}delete old_node.parent.contents[old_node.name];new_dir.contents[new_name]=old_node;old_node.name=new_name;new_dir.ctime=new_dir.mtime=old_node.parent.ctime=old_node.parent.mtime=Date.now()},unlink(parent,name){delete parent.contents[name];parent.ctime=parent.mtime=Date.now()},rmdir(parent,name){var node=FS.lookupNode(parent,name);for(var i in node.contents){throw new FS.ErrnoError(55)}delete parent.contents[name];parent.ctime=parent.mtime=Date.now()},readdir(node){return[".","..",...Object.keys(node.contents)]},symlink(parent,newname,oldpath){var node=MEMFS.createNode(parent,newname,511|40960,0);node.link=oldpath;return node},readlink(node){if(!FS.isLink(node.mode)){throw new FS.ErrnoError(28)}return node.link}},stream_ops:{read(stream,buffer,offset,length,position){var contents=stream.node.contents;if(position>=stream.node.usedBytes)return 0;var size=Math.min(stream.node.usedBytes-position,length);if(size>8&&contents.subarray){buffer.set(contents.subarray(position,position+size),offset)}else{for(var i=0;i<size;i++)buffer[offset+i]=contents[position+i]}return size},write(stream,buffer,offset,length,position,canOwn){if(buffer.buffer===HEAP8.buffer){canOwn=false}if(!length)return 0;var node=stream.node;node.mtime=node.ctime=Date.now();if(buffer.subarray&&(!node.contents||node.contents.subarray)){if(canOwn){node.contents=buffer.subarray(offset,offset+length);node.usedBytes=length;return length}else if(node.usedBytes===0&&position===0){node.contents=buffer.slice(offset,offset+length);node.usedBytes=length;return length}else if(position+length<=node.usedBytes){node.contents.set(buffer.subarray(offset,offset+length),position);return length}}MEMFS.expandFileStorage(node,position+length);if(node.contents.subarray&&buffer.subarray){node.contents.set(buffer.subarray(offset,offset+length),position)}else{for(var i=0;i<length;i++){node.contents[position+i]=buffer[offset+i]}}node.usedBytes=Math.max(node.usedBytes,position+length);return length},llseek(stream,offset,whence){var position=offset;if(whence===1){position+=stream.position}else if(whence===2){if(FS.isFile(stream.node.mode)){position+=stream.node.usedBytes}}if(position<0){throw new FS.ErrnoError(28)}return position},mmap(stream,length,position,prot,flags){if(!FS.isFile(stream.node.mode)){throw new FS.ErrnoError(43)}var ptr;var allocated;var contents=stream.node.contents;if(!(flags&2)&&contents&&contents.buffer===HEAP8.buffer){allocated=false;ptr=contents.byteOffset}else{allocated=true;ptr=mmapAlloc(length);if(!ptr){throw new FS.ErrnoError(48)}if(contents){if(position>0||position+length<contents.length){if(contents.subarray){contents=contents.subarray(position,position+length)}else{contents=Array.prototype.slice.call(contents,position,position+length)}}HEAP8.set(contents,ptr)}}return{ptr,allocated}},msync(stream,buffer,offset,length,mmapFlags){MEMFS.stream_ops.write(stream,buffer,0,length,offset,false);return 0}}};var FS_modeStringToFlags=str=>{var flagModes={r:0,"r+":2,w:512|64|1,"w+":512|64|2,a:1024|64|1,"a+":1024|64|2};var flags=flagModes[str];if(typeof flags=="undefined"){throw new Error(`Unknown file open mode: ${str}`)}return flags};var FS_getMode=(canRead,canWrite)=>{var mode=0;if(canRead)mode|=292|73;if(canWrite)mode|=146;return mode};var asyncLoad=async url=>{var arrayBuffer=await readAsync(url);return new Uint8Array(arrayBuffer)};var FS_createDataFile=(...args)=>FS.createDataFile(...args);var getUniqueRunDependency=id=>id;var runDependencies=0;var dependenciesFulfilled=null;var removeRunDependency=id=>{runDependencies--;Module["monitorRunDependencies"]?.(runDependencies);if(runDependencies==0){if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}};var addRunDependency=id=>{runDependencies++;Module["monitorRunDependencies"]?.(runDependencies)};var preloadPlugins=[];var FS_handledByPreloadPlugin=async(byteArray,fullname)=>{if(typeof Browser!="undefined")Browser.init();for(var plugin of preloadPlugins){if(plugin["canHandle"](fullname)){return plugin["handle"](byteArray,fullname)}}return byteArray};var FS_preloadFile=async(parent,name,url,canRead,canWrite,dontCreateFile,canOwn,preFinish)=>{var fullname=name?PATH_FS.resolve(PATH.join2(parent,name)):parent;var dep=getUniqueRunDependency(`cp ${fullname}`);addRunDependency(dep);try{var byteArray=url;if(typeof url=="string"){byteArray=await asyncLoad(url)}byteArray=await FS_handledByPreloadPlugin(byteArray,fullname);preFinish?.();if(!dontCreateFile){FS_createDataFile(parent,name,byteArray,canRead,canWrite,canOwn)}}finally{removeRunDependency(dep)}};var FS_createPreloadedFile=(parent,name,url,canRead,canWrite,onload,onerror,dontCreateFile,canOwn,preFinish)=>{FS_preloadFile(parent,name,url,canRead,canWrite,dontCreateFile,canOwn,preFinish).then(onload).catch(onerror)};var FS={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:false,ignorePermissions:true,filesystems:null,syncFSRequests:0,ErrnoError:class{name="ErrnoError";constructor(errno){this.errno=errno}},FSStream:class{shared={};get object(){return this.node}set object(val){this.node=val}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(val){this.shared.flags=val}get position(){return this.shared.position}set position(val){this.shared.position=val}},FSNode:class{node_ops={};stream_ops={};readMode=292|73;writeMode=146;mounted=null;constructor(parent,name,mode,rdev){if(!parent){parent=this}this.parent=parent;this.mount=parent.mount;this.id=FS.nextInode++;this.name=name;this.mode=mode;this.rdev=rdev;this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(val){val?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(val){val?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return FS.isDir(this.mode)}get isDevice(){return FS.isChrdev(this.mode)}},lookupPath(path,opts={}){if(!path){throw new FS.ErrnoError(44)}opts.follow_mount??=true;if(!PATH.isAbs(path)){path=FS.cwd()+"/"+path}linkloop:for(var nlinks=0;nlinks<40;nlinks++){var parts=path.split("/").filter(p=>!!p);var current=FS.root;var current_path="/";for(var i=0;i<parts.length;i++){var islast=i===parts.length-1;if(islast&&opts.parent){break}if(parts[i]==="."){continue}if(parts[i]===".."){current_path=PATH.dirname(current_path);if(FS.isRoot(current)){path=current_path+"/"+parts.slice(i+1).join("/");nlinks--;continue linkloop}else{current=current.parent}continue}current_path=PATH.join2(current_path,parts[i]);try{current=FS.lookupNode(current,parts[i])}catch(e){if(e?.errno===44&&islast&&opts.noent_okay){return{path:current_path}}throw e}if(FS.isMountpoint(current)&&(!islast||opts.follow_mount)){current=current.mounted.root}if(FS.isLink(current.mode)&&(!islast||opts.follow)){if(!current.node_ops.readlink){throw new FS.ErrnoError(52)}var link=current.node_ops.readlink(current);if(!PATH.isAbs(link)){link=PATH.dirname(current_path)+"/"+link}path=link+"/"+parts.slice(i+1).join("/");continue linkloop}}return{path:current_path,node:current}}throw new FS.ErrnoError(32)},getPath(node){var path;while(true){if(FS.isRoot(node)){var mount=node.mount.mountpoint;if(!path)return mount;return mount[mount.length-1]!=="/"?`${mount}/${path}`:mount+path}path=path?`${node.name}/${path}`:node.name;node=node.parent}},hashName(parentid,name){var hash=0;for(var i=0;i<name.length;i++){hash=(hash<<5)-hash+name.charCodeAt(i)|0}return(parentid+hash>>>0)%FS.nameTable.length},hashAddNode(node){var hash=FS.hashName(node.parent.id,node.name);node.name_next=FS.nameTable[hash];FS.nameTable[hash]=node},hashRemoveNode(node){var hash=FS.hashName(node.parent.id,node.name);if(FS.nameTable[hash]===node){FS.nameTable[hash]=node.name_next}else{var current=FS.nameTable[hash];while(current){if(current.name_next===node){current.name_next=node.name_next;break}current=current.name_next}}},lookupNode(parent,name){var errCode=FS.mayLookup(parent);if(errCode){throw new FS.ErrnoError(errCode)}var hash=FS.hashName(parent.id,name);for(var node=FS.nameTable[hash];node;node=node.name_next){var nodeName=node.name;if(node.parent.id===parent.id&&nodeName===name){return node}}return FS.lookup(parent,name)},createNode(parent,name,mode,rdev){var node=new FS.FSNode(parent,name,mode,rdev);FS.hashAddNode(node);return node},destroyNode(node){FS.hashRemoveNode(node)},isRoot(node){return node===node.parent},isMountpoint(node){return!!node.mounted},isFile(mode){return(mode&61440)===32768},isDir(mode){return(mode&61440)===16384},isLink(mode){return(mode&61440)===40960},isChrdev(mode){return(mode&61440)===8192},isBlkdev(mode){return(mode&61440)===24576},isFIFO(mode){return(mode&61440)===4096},isSocket(mode){return(mode&49152)===49152},flagsToPermissionString(flag){var perms=["r","w","rw"][flag&3];if(flag&512){perms+="w"}return perms},nodePermissions(node,perms){if(FS.ignorePermissions){return 0}if(perms.includes("r")&&!(node.mode&292)){return 2}if(perms.includes("w")&&!(node.mode&146)){return 2}if(perms.includes("x")&&!(node.mode&73)){return 2}return 0},mayLookup(dir){if(!FS.isDir(dir.mode))return 54;var errCode=FS.nodePermissions(dir,"x");if(errCode)return errCode;if(!dir.node_ops.lookup)return 2;return 0},mayCreate(dir,name){if(!FS.isDir(dir.mode)){return 54}try{var node=FS.lookupNode(dir,name);return 20}catch(e){}return FS.nodePermissions(dir,"wx")},mayDelete(dir,name,isdir){var node;try{node=FS.lookupNode(dir,name)}catch(e){return e.errno}var errCode=FS.nodePermissions(dir,"wx");if(errCode){return errCode}if(isdir){if(!FS.isDir(node.mode)){return 54}if(FS.isRoot(node)||FS.getPath(node)===FS.cwd()){return 10}}else if(FS.isDir(node.mode)){return 31}return 0},mayOpen(node,flags){if(!node){return 44}if(FS.isLink(node.mode)){return 32}var mode=FS.flagsToPermissionString(flags);if(FS.isDir(node.mode)){if(mode!=="r"||flags&(512|64)){return 31}}return FS.nodePermissions(node,mode)},checkOpExists(op,err){if(!op){throw new FS.ErrnoError(err)}return op},MAX_OPEN_FDS:4096,nextfd(){for(var fd=0;fd<=FS.MAX_OPEN_FDS;fd++){if(!FS.streams[fd]){return fd}}throw new FS.ErrnoError(33)},getStreamChecked(fd){var stream=FS.getStream(fd);if(!stream){throw new FS.ErrnoError(8)}return stream},getStream:fd=>FS.streams[fd],createStream(stream,fd=-1){stream=Object.assign(new FS.FSStream,stream);if(fd==-1){fd=FS.nextfd()}stream.fd=fd;FS.streams[fd]=stream;return stream},closeStream(fd){FS.streams[fd]=null},dupStream(origStream,fd=-1){var stream=FS.createStream(origStream,fd);stream.stream_ops?.dup?.(stream);return stream},doSetAttr(stream,node,attr){var setattr=stream?.stream_ops.setattr;var arg=setattr?stream:node;setattr??=node.node_ops.setattr;FS.checkOpExists(setattr,63);setattr(arg,attr)},chrdev_stream_ops:{open(stream){var device=FS.getDevice(stream.node.rdev);stream.stream_ops=device.stream_ops;stream.stream_ops.open?.(stream)},llseek(){throw new FS.ErrnoError(70)}},major:dev=>dev>>8,minor:dev=>dev&255,makedev:(ma,mi)=>ma<<8|mi,registerDevice(dev,ops){FS.devices[dev]={stream_ops:ops}},getDevice:dev=>FS.devices[dev],getMounts(mount){var mounts=[];var check=[mount];while(check.length){var m=check.pop();mounts.push(m);check.push(...m.mounts)}return mounts},syncfs(populate,callback){if(typeof populate=="function"){callback=populate;populate=false}FS.syncFSRequests++;if(FS.syncFSRequests>1){err(`warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`)}var mounts=FS.getMounts(FS.root.mount);var completed=0;function doCallback(errCode){FS.syncFSRequests--;return callback(errCode)}function done(errCode){if(errCode){if(!done.errored){done.errored=true;return doCallback(errCode)}return}if(++completed>=mounts.length){doCallback(null)}}for(var mount of mounts){if(mount.type.syncfs){mount.type.syncfs(mount,populate,done)}else{done(null)}}},mount(type,opts,mountpoint){var root=mountpoint==="/";var pseudo=!mountpoint;var node;if(root&&FS.root){throw new FS.ErrnoError(10)}else if(!root&&!pseudo){var lookup=FS.lookupPath(mountpoint,{follow_mount:false});mountpoint=lookup.path;node=lookup.node;if(FS.isMountpoint(node)){throw new FS.ErrnoError(10)}if(!FS.isDir(node.mode)){throw new FS.ErrnoError(54)}}var mount={type,opts,mountpoint,mounts:[]};var mountRoot=type.mount(mount);mountRoot.mount=mount;mount.root=mountRoot;if(root){FS.root=mountRoot}else if(node){node.mounted=mount;if(node.mount){node.mount.mounts.push(mount)}}return mountRoot},unmount(mountpoint){var lookup=FS.lookupPath(mountpoint,{follow_mount:false});if(!FS.isMountpoint(lookup.node)){throw new FS.ErrnoError(28)}var node=lookup.node;var mount=node.mounted;var mounts=FS.getMounts(mount);for(var[hash,current]of Object.entries(FS.nameTable)){while(current){var next=current.name_next;if(mounts.includes(current.mount)){FS.destroyNode(current)}current=next}}node.mounted=null;var idx=node.mount.mounts.indexOf(mount);node.mount.mounts.splice(idx,1)},lookup(parent,name){return parent.node_ops.lookup(parent,name)},mknod(path,mode,dev){var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;var name=PATH.basename(path);if(!name){throw new FS.ErrnoError(28)}if(name==="."||name===".."){throw new FS.ErrnoError(20)}var errCode=FS.mayCreate(parent,name);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.mknod){throw new FS.ErrnoError(63)}return parent.node_ops.mknod(parent,name,mode,dev)},statfs(path){return FS.statfsNode(FS.lookupPath(path,{follow:true}).node)},statfsStream(stream){return FS.statfsNode(stream.node)},statfsNode(node){var rtn={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:FS.nextInode,ffree:FS.nextInode-1,fsid:42,flags:2,namelen:255};if(node.node_ops.statfs){Object.assign(rtn,node.node_ops.statfs(node.mount.opts.root))}return rtn},create(path,mode=438){mode&=4095;mode|=32768;return FS.mknod(path,mode,0)},mkdir(path,mode=511){mode&=511|512;mode|=16384;return FS.mknod(path,mode,0)},mkdirTree(path,mode){var dirs=path.split("/");var d="";for(var dir of dirs){if(!dir)continue;if(d||PATH.isAbs(path))d+="/";d+=dir;try{FS.mkdir(d,mode)}catch(e){if(e.errno!=20)throw e}}},mkdev(path,mode,dev){if(typeof dev=="undefined"){dev=mode;mode=438}mode|=8192;return FS.mknod(path,mode,dev)},symlink(oldpath,newpath){if(!PATH_FS.resolve(oldpath)){throw new FS.ErrnoError(44)}var lookup=FS.lookupPath(newpath,{parent:true});var parent=lookup.node;if(!parent){throw new FS.ErrnoError(44)}var newname=PATH.basename(newpath);var errCode=FS.mayCreate(parent,newname);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.symlink){throw new FS.ErrnoError(63)}return parent.node_ops.symlink(parent,newname,oldpath)},rename(old_path,new_path){var old_dirname=PATH.dirname(old_path);var new_dirname=PATH.dirname(new_path);var old_name=PATH.basename(old_path);var new_name=PATH.basename(new_path);var lookup,old_dir,new_dir;lookup=FS.lookupPath(old_path,{parent:true});old_dir=lookup.node;lookup=FS.lookupPath(new_path,{parent:true});new_dir=lookup.node;if(!old_dir||!new_dir)throw new FS.ErrnoError(44);if(old_dir.mount!==new_dir.mount){throw new FS.ErrnoError(75)}var old_node=FS.lookupNode(old_dir,old_name);var relative=PATH_FS.relative(old_path,new_dirname);if(relative.charAt(0)!=="."){throw new FS.ErrnoError(28)}relative=PATH_FS.relative(new_path,old_dirname);if(relative.charAt(0)!=="."){throw new FS.ErrnoError(55)}var new_node;try{new_node=FS.lookupNode(new_dir,new_name)}catch(e){}if(old_node===new_node){return}var isdir=FS.isDir(old_node.mode);var errCode=FS.mayDelete(old_dir,old_name,isdir);if(errCode){throw new FS.ErrnoError(errCode)}errCode=new_node?FS.mayDelete(new_dir,new_name,isdir):FS.mayCreate(new_dir,new_name);if(errCode){throw new FS.ErrnoError(errCode)}if(!old_dir.node_ops.rename){throw new FS.ErrnoError(63)}if(FS.isMountpoint(old_node)||new_node&&FS.isMountpoint(new_node)){throw new FS.ErrnoError(10)}if(new_dir!==old_dir){errCode=FS.nodePermissions(old_dir,"w");if(errCode){throw new FS.ErrnoError(errCode)}}FS.hashRemoveNode(old_node);try{old_dir.node_ops.rename(old_node,new_dir,new_name);old_node.parent=new_dir}catch(e){throw e}finally{FS.hashAddNode(old_node)}},rmdir(path){var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;var name=PATH.basename(path);var node=FS.lookupNode(parent,name);var errCode=FS.mayDelete(parent,name,true);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.rmdir){throw new FS.ErrnoError(63)}if(FS.isMountpoint(node)){throw new FS.ErrnoError(10)}parent.node_ops.rmdir(parent,name);FS.destroyNode(node)},readdir(path){var lookup=FS.lookupPath(path,{follow:true});var node=lookup.node;var readdir=FS.checkOpExists(node.node_ops.readdir,54);return readdir(node)},unlink(path){var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;if(!parent){throw new FS.ErrnoError(44)}var name=PATH.basename(path);var node=FS.lookupNode(parent,name);var errCode=FS.mayDelete(parent,name,false);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.unlink){throw new FS.ErrnoError(63)}if(FS.isMountpoint(node)){throw new FS.ErrnoError(10)}parent.node_ops.unlink(parent,name);FS.destroyNode(node)},readlink(path){var lookup=FS.lookupPath(path);var link=lookup.node;if(!link){throw new FS.ErrnoError(44)}if(!link.node_ops.readlink){throw new FS.ErrnoError(28)}return link.node_ops.readlink(link)},stat(path,dontFollow){var lookup=FS.lookupPath(path,{follow:!dontFollow});var node=lookup.node;var getattr=FS.checkOpExists(node.node_ops.getattr,63);return getattr(node)},fstat(fd){var stream=FS.getStreamChecked(fd);var node=stream.node;var getattr=stream.stream_ops.getattr;var arg=getattr?stream:node;getattr??=node.node_ops.getattr;FS.checkOpExists(getattr,63);return getattr(arg)},lstat(path){return FS.stat(path,true)},doChmod(stream,node,mode,dontFollow){FS.doSetAttr(stream,node,{mode:mode&4095|node.mode&~4095,ctime:Date.now(),dontFollow})},chmod(path,mode,dontFollow){var node;if(typeof path=="string"){var lookup=FS.lookupPath(path,{follow:!dontFollow});node=lookup.node}else{node=path}FS.doChmod(null,node,mode,dontFollow)},lchmod(path,mode){FS.chmod(path,mode,true)},fchmod(fd,mode){var stream=FS.getStreamChecked(fd);FS.doChmod(stream,stream.node,mode,false)},doChown(stream,node,dontFollow){FS.doSetAttr(stream,node,{timestamp:Date.now(),dontFollow})},chown(path,uid,gid,dontFollow){var node;if(typeof path=="string"){var lookup=FS.lookupPath(path,{follow:!dontFollow});node=lookup.node}else{node=path}FS.doChown(null,node,dontFollow)},lchown(path,uid,gid){FS.chown(path,uid,gid,true)},fchown(fd,uid,gid){var stream=FS.getStreamChecked(fd);FS.doChown(stream,stream.node,false)},doTruncate(stream,node,len){if(FS.isDir(node.mode)){throw new FS.ErrnoError(31)}if(!FS.isFile(node.mode)){throw new FS.ErrnoError(28)}var errCode=FS.nodePermissions(node,"w");if(errCode){throw new FS.ErrnoError(errCode)}FS.doSetAttr(stream,node,{size:len,timestamp:Date.now()})},truncate(path,len){if(len<0){throw new FS.ErrnoError(28)}var node;if(typeof path=="string"){var lookup=FS.lookupPath(path,{follow:true});node=lookup.node}else{node=path}FS.doTruncate(null,node,len)},ftruncate(fd,len){var stream=FS.getStreamChecked(fd);if(len<0||(stream.flags&2097155)===0){throw new FS.ErrnoError(28)}FS.doTruncate(stream,stream.node,len)},utime(path,atime,mtime){var lookup=FS.lookupPath(path,{follow:true});var node=lookup.node;var setattr=FS.checkOpExists(node.node_ops.setattr,63);setattr(node,{atime,mtime})},open(path,flags,mode=438){if(path===""){throw new FS.ErrnoError(44)}flags=typeof flags=="string"?FS_modeStringToFlags(flags):flags;if(flags&64){mode=mode&4095|32768}else{mode=0}var node;var isDirPath;if(typeof path=="object"){node=path}else{isDirPath=path.endsWith("/");var lookup=FS.lookupPath(path,{follow:!(flags&131072),noent_okay:true});node=lookup.node;path=lookup.path}var created=false;if(flags&64){if(node){if(flags&128){throw new FS.ErrnoError(20)}}else if(isDirPath){throw new FS.ErrnoError(31)}else{node=FS.mknod(path,mode|511,0);created=true}}if(!node){throw new FS.ErrnoError(44)}if(FS.isChrdev(node.mode)){flags&=~512}if(flags&65536&&!FS.isDir(node.mode)){throw new FS.ErrnoError(54)}if(!created){var errCode=FS.mayOpen(node,flags);if(errCode){throw new FS.ErrnoError(errCode)}}if(flags&512&&!created){FS.truncate(node,0)}flags&=~(128|512|131072);var stream=FS.createStream({node,path:FS.getPath(node),flags,seekable:true,position:0,stream_ops:node.stream_ops,ungotten:[],error:false});if(stream.stream_ops.open){stream.stream_ops.open(stream)}if(created){FS.chmod(node,mode&511)}return stream},close(stream){if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if(stream.getdents)stream.getdents=null;try{if(stream.stream_ops.close){stream.stream_ops.close(stream)}}catch(e){throw e}finally{FS.closeStream(stream.fd)}stream.fd=null},isClosed(stream){return stream.fd===null},llseek(stream,offset,whence){if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if(!stream.seekable||!stream.stream_ops.llseek){throw new FS.ErrnoError(70)}if(whence!=0&&whence!=1&&whence!=2){throw new FS.ErrnoError(28)}stream.position=stream.stream_ops.llseek(stream,offset,whence);stream.ungotten=[];return stream.position},read(stream,buffer,offset,length,position){if(length<0||position<0){throw new FS.ErrnoError(28)}if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if((stream.flags&2097155)===1){throw new FS.ErrnoError(8)}if(FS.isDir(stream.node.mode)){throw new FS.ErrnoError(31)}if(!stream.stream_ops.read){throw new FS.ErrnoError(28)}var seeking=typeof position!="undefined";if(!seeking){position=stream.position}else if(!stream.seekable){throw new FS.ErrnoError(70)}var bytesRead=stream.stream_ops.read(stream,buffer,offset,length,position);if(!seeking)stream.position+=bytesRead;return bytesRead},write(stream,buffer,offset,length,position,canOwn){if(length<0||position<0){throw new FS.ErrnoError(28)}if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if((stream.flags&2097155)===0){throw new FS.ErrnoError(8)}if(FS.isDir(stream.node.mode)){throw new FS.ErrnoError(31)}if(!stream.stream_ops.write){throw new FS.ErrnoError(28)}if(stream.seekable&&stream.flags&1024){FS.llseek(stream,0,2)}var seeking=typeof position!="undefined";if(!seeking){position=stream.position}else if(!stream.seekable){throw new FS.ErrnoError(70)}var bytesWritten=stream.stream_ops.write(stream,buffer,offset,length,position,canOwn);if(!seeking)stream.position+=bytesWritten;return bytesWritten},mmap(stream,length,position,prot,flags){if((prot&2)!==0&&(flags&2)===0&&(stream.flags&2097155)!==2){throw new FS.ErrnoError(2)}if((stream.flags&2097155)===1){throw new FS.ErrnoError(2)}if(!stream.stream_ops.mmap){throw new FS.ErrnoError(43)}if(!length){throw new FS.ErrnoError(28)}return stream.stream_ops.mmap(stream,length,position,prot,flags)},msync(stream,buffer,offset,length,mmapFlags){if(!stream.stream_ops.msync){return 0}return stream.stream_ops.msync(stream,buffer,offset,length,mmapFlags)},ioctl(stream,cmd,arg){if(!stream.stream_ops.ioctl){throw new FS.ErrnoError(59)}return stream.stream_ops.ioctl(stream,cmd,arg)},readFile(path,opts={}){opts.flags=opts.flags||0;opts.encoding=opts.encoding||"binary";if(opts.encoding!=="utf8"&&opts.encoding!=="binary"){abort(`Invalid encoding type "${opts.encoding}"`)}var stream=FS.open(path,opts.flags);var stat=FS.stat(path);var length=stat.size;var buf=new Uint8Array(length);FS.read(stream,buf,0,length,0);if(opts.encoding==="utf8"){buf=UTF8ArrayToString(buf)}FS.close(stream);return buf},writeFile(path,data,opts={}){opts.flags=opts.flags||577;var stream=FS.open(path,opts.flags,opts.mode);if(typeof data=="string"){data=new Uint8Array(intArrayFromString(data,true))}if(ArrayBuffer.isView(data)){FS.write(stream,data,0,data.byteLength,undefined,opts.canOwn)}else{abort("Unsupported data type")}FS.close(stream)},cwd:()=>FS.currentPath,chdir(path){var lookup=FS.lookupPath(path,{follow:true});if(lookup.node===null){throw new FS.ErrnoError(44)}if(!FS.isDir(lookup.node.mode)){throw new FS.ErrnoError(54)}var errCode=FS.nodePermissions(lookup.node,"x");if(errCode){throw new FS.ErrnoError(errCode)}FS.currentPath=lookup.path},createDefaultDirectories(){FS.mkdir("/tmp");FS.mkdir("/home");FS.mkdir("/home/web_user")},createDefaultDevices(){FS.mkdir("/dev");FS.registerDevice(FS.makedev(1,3),{read:()=>0,write:(stream,buffer,offset,length,pos)=>length,llseek:()=>0});FS.mkdev("/dev/null",FS.makedev(1,3));TTY.register(FS.makedev(5,0),TTY.default_tty_ops);TTY.register(FS.makedev(6,0),TTY.default_tty1_ops);FS.mkdev("/dev/tty",FS.makedev(5,0));FS.mkdev("/dev/tty1",FS.makedev(6,0));var randomBuffer=new Uint8Array(1024),randomLeft=0;var randomByte=()=>{if(randomLeft===0){randomFill(randomBuffer);randomLeft=randomBuffer.byteLength}return randomBuffer[--randomLeft]};FS.createDevice("/dev","random",randomByte);FS.createDevice("/dev","urandom",randomByte);FS.mkdir("/dev/shm");FS.mkdir("/dev/shm/tmp")},createSpecialDirectories(){FS.mkdir("/proc");var proc_self=FS.mkdir("/proc/self");FS.mkdir("/proc/self/fd");FS.mount({mount(){var node=FS.createNode(proc_self,"fd",16895,73);node.stream_ops={llseek:MEMFS.stream_ops.llseek};node.node_ops={lookup(parent,name){var fd=+name;var stream=FS.getStreamChecked(fd);var ret={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>stream.path},id:fd+1};ret.parent=ret;return ret},readdir(){return Array.from(FS.streams.entries()).filter(([k,v])=>v).map(([k,v])=>k.toString())}};return node}},{},"/proc/self/fd")},createStandardStreams(input,output,error){if(input){FS.createDevice("/dev","stdin",input)}else{FS.symlink("/dev/tty","/dev/stdin")}if(output){FS.createDevice("/dev","stdout",null,output)}else{FS.symlink("/dev/tty","/dev/stdout")}if(error){FS.createDevice("/dev","stderr",null,error)}else{FS.symlink("/dev/tty1","/dev/stderr")}var stdin=FS.open("/dev/stdin",0);var stdout=FS.open("/dev/stdout",1);var stderr=FS.open("/dev/stderr",1)},staticInit(){FS.nameTable=new Array(4096);FS.mount(MEMFS,{},"/");FS.createDefaultDirectories();FS.createDefaultDevices();FS.createSpecialDirectories();FS.filesystems={MEMFS}},init(input,output,error){FS.initialized=true;input??=Module["stdin"];output??=Module["stdout"];error??=Module["stderr"];FS.createStandardStreams(input,output,error)},quit(){FS.initialized=false;for(var stream of FS.streams){if(stream){FS.close(stream)}}},findObject(path,dontResolveLastLink){var ret=FS.analyzePath(path,dontResolveLastLink);if(!ret.exists){return null}return ret.object},analyzePath(path,dontResolveLastLink){try{var lookup=FS.lookupPath(path,{follow:!dontResolveLastLink});path=lookup.path}catch(e){}var ret={isRoot:false,exists:false,error:0,name:null,path:null,object:null,parentExists:false,parentPath:null,parentObject:null};try{var lookup=FS.lookupPath(path,{parent:true});ret.parentExists=true;ret.parentPath=lookup.path;ret.parentObject=lookup.node;ret.name=PATH.basename(path);lookup=FS.lookupPath(path,{follow:!dontResolveLastLink});ret.exists=true;ret.path=lookup.path;ret.object=lookup.node;ret.name=lookup.node.name;ret.isRoot=lookup.path==="/"}catch(e){ret.error=e.errno}return ret},createPath(parent,path,canRead,canWrite){parent=typeof parent=="string"?parent:FS.getPath(parent);var parts=path.split("/").reverse();while(parts.length){var part=parts.pop();if(!part)continue;var current=PATH.join2(parent,part);try{FS.mkdir(current)}catch(e){if(e.errno!=20)throw e}parent=current}return current},createFile(parent,name,properties,canRead,canWrite){var path=PATH.join2(typeof parent=="string"?parent:FS.getPath(parent),name);var mode=FS_getMode(canRead,canWrite);return FS.create(path,mode)},createDataFile(parent,name,data,canRead,canWrite,canOwn){var path=name;if(parent){parent=typeof parent=="string"?parent:FS.getPath(parent);path=name?PATH.join2(parent,name):parent}var mode=FS_getMode(canRead,canWrite);var node=FS.create(path,mode);if(data){if(typeof data=="string"){var arr=new Array(data.length);for(var i=0,len=data.length;i<len;++i)arr[i]=data.charCodeAt(i);data=arr}FS.chmod(node,mode|146);var stream=FS.open(node,577);FS.write(stream,data,0,data.length,0,canOwn);FS.close(stream);FS.chmod(node,mode)}},createDevice(parent,name,input,output){var path=PATH.join2(typeof parent=="string"?parent:FS.getPath(parent),name);var mode=FS_getMode(!!input,!!output);FS.createDevice.major??=64;var dev=FS.makedev(FS.createDevice.major++,0);FS.registerDevice(dev,{open(stream){stream.seekable=false},close(stream){if(output?.buffer?.length){output(10)}},read(stream,buffer,offset,length,pos){var bytesRead=0;for(var i=0;i<length;i++){var result;try{result=input()}catch(e){throw new FS.ErrnoError(29)}if(result===undefined&&bytesRead===0){throw new FS.ErrnoError(6)}if(result===null||result===undefined)break;bytesRead++;buffer[offset+i]=result}if(bytesRead){stream.node.atime=Date.now()}return bytesRead},write(stream,buffer,offset,length,pos){for(var i=0;i<length;i++){try{output(buffer[offset+i])}catch(e){throw new FS.ErrnoError(29)}}if(length){stream.node.mtime=stream.node.ctime=Date.now()}return i}});return FS.mkdev(path,mode,dev)},forceLoadFile(obj){if(obj.isDevice||obj.isFolder||obj.link||obj.contents)return true;if(globalThis.XMLHttpRequest){abort("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.")}else{try{obj.contents=readBinary(obj.url)}catch(e){throw new FS.ErrnoError(29)}}},createLazyFile(parent,name,url,canRead,canWrite){class LazyUint8Array{lengthKnown=false;chunks=[];get(idx){if(idx>this.length-1||idx<0){return undefined}var chunkOffset=idx%this.chunkSize;var chunkNum=idx/this.chunkSize|0;return this.getter(chunkNum)[chunkOffset]}setDataGetter(getter){this.getter=getter}cacheLength(){var xhr=new XMLHttpRequest;xhr.open("HEAD",url,false);xhr.send(null);if(!(xhr.status>=200&&xhr.status<300||xhr.status===304))abort("Couldn't load "+url+". Status: "+xhr.status);var datalength=Number(xhr.getResponseHeader("Content-length"));var header;var hasByteServing=(header=xhr.getResponseHeader("Accept-Ranges"))&&header==="bytes";var usesGzip=(header=xhr.getResponseHeader("Content-Encoding"))&&header==="gzip";var chunkSize=1024*1024;if(!hasByteServing)chunkSize=datalength;var doXHR=(from,to)=>{if(from>to)abort("invalid range ("+from+", "+to+") or no bytes requested!");if(to>datalength-1)abort("only "+datalength+" bytes available! programmer error!");var xhr=new XMLHttpRequest;xhr.open("GET",url,false);if(datalength!==chunkSize)xhr.setRequestHeader("Range","bytes="+from+"-"+to);xhr.responseType="arraybuffer";if(xhr.overrideMimeType){xhr.overrideMimeType("text/plain; charset=x-user-defined")}xhr.send(null);if(!(xhr.status>=200&&xhr.status<300||xhr.status===304))abort("Couldn't load "+url+". Status: "+xhr.status);if(xhr.response!==undefined){return new Uint8Array(xhr.response||[])}return intArrayFromString(xhr.responseText||"",true)};var lazyArray=this;lazyArray.setDataGetter(chunkNum=>{var start=chunkNum*chunkSize;var end=(chunkNum+1)*chunkSize-1;end=Math.min(end,datalength-1);if(typeof lazyArray.chunks[chunkNum]=="undefined"){lazyArray.chunks[chunkNum]=doXHR(start,end)}if(typeof lazyArray.chunks[chunkNum]=="undefined")abort("doXHR failed!");return lazyArray.chunks[chunkNum]});if(usesGzip||!datalength){chunkSize=datalength=1;datalength=this.getter(0).length;chunkSize=datalength;out("LazyFiles on gzip forces download of the whole file when length is accessed")}this._length=datalength;this._chunkSize=chunkSize;this.lengthKnown=true}get length(){if(!this.lengthKnown){this.cacheLength()}return this._length}get chunkSize(){if(!this.lengthKnown){this.cacheLength()}return this._chunkSize}}if(globalThis.XMLHttpRequest){if(!ENVIRONMENT_IS_WORKER)abort("Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc");var lazyArray=new LazyUint8Array;var properties={isDevice:false,contents:lazyArray}}else{var properties={isDevice:false,url}}var node=FS.createFile(parent,name,properties,canRead,canWrite);if(properties.contents){node.contents=properties.contents}else if(properties.url){node.contents=null;node.url=properties.url}Object.defineProperties(node,{usedBytes:{get:function(){return this.contents.length}}});var stream_ops={};for(const[key,fn]of Object.entries(node.stream_ops)){stream_ops[key]=(...args)=>{FS.forceLoadFile(node);return fn(...args)}}function writeChunks(stream,buffer,offset,length,position){var contents=stream.node.contents;if(position>=contents.length)return 0;var size=Math.min(contents.length-position,length);if(contents.slice){for(var i=0;i<size;i++){buffer[offset+i]=contents[position+i]}}else{for(var i=0;i<size;i++){buffer[offset+i]=contents.get(position+i)}}return size}stream_ops.read=(stream,buffer,offset,length,position)=>{FS.forceLoadFile(node);return writeChunks(stream,buffer,offset,length,position)};stream_ops.mmap=(stream,length,position,prot,flags)=>{FS.forceLoadFile(node);var ptr=mmapAlloc(length);if(!ptr){throw new FS.ErrnoError(48)}writeChunks(stream,HEAP8,ptr,length,position);return{ptr,allocated:true}};node.stream_ops=stream_ops;return node}};var SYSCALLS={calculateAt(dirfd,path,allowEmpty){if(PATH.isAbs(path)){return path}var dir;if(dirfd===-100){dir=FS.cwd()}else{var dirstream=SYSCALLS.getStreamFromFD(dirfd);dir=dirstream.path}if(path.length==0){if(!allowEmpty){throw new FS.ErrnoError(44)}return dir}return dir+"/"+path},writeStat(buf,stat){HEAPU32[buf>>2]=stat.dev;HEAPU32[buf+4>>2]=stat.mode;HEAPU32[buf+8>>2]=stat.nlink;HEAPU32[buf+12>>2]=stat.uid;HEAPU32[buf+16>>2]=stat.gid;HEAPU32[buf+20>>2]=stat.rdev;tempI64=[stat.size>>>0,(tempDouble=stat.size,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+24>>2]=tempI64[0],HEAP32[buf+28>>2]=tempI64[1];HEAP32[buf+32>>2]=4096;HEAP32[buf+36>>2]=stat.blocks;var atime=stat.atime.getTime();var mtime=stat.mtime.getTime();var ctime=stat.ctime.getTime();tempI64=[Math.floor(atime/1e3)>>>0,(tempDouble=Math.floor(atime/1e3),+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+40>>2]=tempI64[0],HEAP32[buf+44>>2]=tempI64[1];HEAPU32[buf+48>>2]=atime%1e3*1e3*1e3;tempI64=[Math.floor(mtime/1e3)>>>0,(tempDouble=Math.floor(mtime/1e3),+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+56>>2]=tempI64[0],HEAP32[buf+60>>2]=tempI64[1];HEAPU32[buf+64>>2]=mtime%1e3*1e3*1e3;tempI64=[Math.floor(ctime/1e3)>>>0,(tempDouble=Math.floor(ctime/1e3),+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+72>>2]=tempI64[0],HEAP32[buf+76>>2]=tempI64[1];HEAPU32[buf+80>>2]=ctime%1e3*1e3*1e3;tempI64=[stat.ino>>>0,(tempDouble=stat.ino,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+88>>2]=tempI64[0],HEAP32[buf+92>>2]=tempI64[1];return 0},writeStatFs(buf,stats){HEAPU32[buf+4>>2]=stats.bsize;HEAPU32[buf+60>>2]=stats.bsize;tempI64=[stats.blocks>>>0,(tempDouble=stats.blocks,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+8>>2]=tempI64[0],HEAP32[buf+12>>2]=tempI64[1];tempI64=[stats.bfree>>>0,(tempDouble=stats.bfree,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+16>>2]=tempI64[0],HEAP32[buf+20>>2]=tempI64[1];tempI64=[stats.bavail>>>0,(tempDouble=stats.bavail,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+24>>2]=tempI64[0],HEAP32[buf+28>>2]=tempI64[1];tempI64=[stats.files>>>0,(tempDouble=stats.files,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+32>>2]=tempI64[0],HEAP32[buf+36>>2]=tempI64[1];tempI64=[stats.ffree>>>0,(tempDouble=stats.ffree,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+40>>2]=tempI64[0],HEAP32[buf+44>>2]=tempI64[1];HEAPU32[buf+48>>2]=stats.fsid;HEAPU32[buf+64>>2]=stats.flags;HEAPU32[buf+56>>2]=stats.namelen},doMsync(addr,stream,len,flags,offset){if(!FS.isFile(stream.node.mode)){throw new FS.ErrnoError(43)}if(flags&2){return 0}var buffer=HEAPU8.slice(addr,addr+len);FS.msync(stream,buffer,offset,len,flags)},getStreamFromFD(fd){var stream=FS.getStreamChecked(fd);return stream},varargs:undefined,getStr(ptr){var ret=UTF8ToString(ptr);return ret}};function ___syscall_chmod(path,mode){try{path=SYSCALLS.getStr(path);FS.chmod(path,mode);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_faccessat(dirfd,path,amode,flags){try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);if(amode&~7){return-28}var lookup=FS.lookupPath(path,{follow:true});var node=lookup.node;if(!node){return-44}var perms="";if(amode&4)perms+="r";if(amode&2)perms+="w";if(amode&1)perms+="x";if(perms&&FS.nodePermissions(node,perms)){return-2}return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_fchmod(fd,mode){try{FS.fchmod(fd,mode);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_fchown32(fd,owner,group){try{FS.fchown(fd,owner,group);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var syscallGetVarargI=()=>{var ret=HEAP32[+SYSCALLS.varargs>>2];SYSCALLS.varargs+=4;return ret};var syscallGetVarargP=syscallGetVarargI;function ___syscall_fcntl64(fd,cmd,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD(fd);switch(cmd){case 0:{var arg=syscallGetVarargI();if(arg<0){return-28}while(FS.streams[arg]){arg++}var newStream;newStream=FS.dupStream(stream,arg);return newStream.fd}case 1:case 2:return 0;case 3:return stream.flags;case 4:{var arg=syscallGetVarargI();stream.flags|=arg;return 0}case 12:{var arg=syscallGetVarargP();var offset=0;HEAP16[arg+offset>>1]=2;return 0}case 13:case 14:return 0}return-28}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_fstat64(fd,buf){try{return SYSCALLS.writeStat(buf,FS.fstat(fd))}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var convertI32PairToI53Checked=(lo,hi)=>hi+2097152>>>0<4194305-!!lo?(lo>>>0)+hi*4294967296:NaN;function ___syscall_ftruncate64(fd,length_low,length_high){var length=convertI32PairToI53Checked(length_low,length_high);try{if(isNaN(length))return-61;FS.ftruncate(fd,length);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var stringToUTF8=(str,outPtr,maxBytesToWrite)=>stringToUTF8Array(str,HEAPU8,outPtr,maxBytesToWrite);function ___syscall_getcwd(buf,size){try{if(size===0)return-28;var cwd=FS.cwd();var cwdLengthInBytes=lengthBytesUTF8(cwd)+1;if(size<cwdLengthInBytes)return-68;stringToUTF8(cwd,buf,size);return cwdLengthInBytes}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_lstat64(path,buf){try{path=SYSCALLS.getStr(path);return SYSCALLS.writeStat(buf,FS.lstat(path))}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_mkdirat(dirfd,path,mode){try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);FS.mkdir(path,mode,0);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_newfstatat(dirfd,path,buf,flags){try{path=SYSCALLS.getStr(path);var nofollow=flags&256;var allowEmpty=flags&4096;flags=flags&~6400;path=SYSCALLS.calculateAt(dirfd,path,allowEmpty);return SYSCALLS.writeStat(buf,nofollow?FS.lstat(path):FS.stat(path))}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_openat(dirfd,path,flags,varargs){SYSCALLS.varargs=varargs;try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);var mode=varargs?syscallGetVarargI():0;return FS.open(path,flags,mode).fd}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_readlinkat(dirfd,path,buf,bufsize){try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);if(bufsize<=0)return-28;var ret=FS.readlink(path);var len=Math.min(bufsize,lengthBytesUTF8(ret));var endChar=HEAP8[buf+len];stringToUTF8(ret,buf,bufsize+1);HEAP8[buf+len]=endChar;return len}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_rmdir(path){try{path=SYSCALLS.getStr(path);FS.rmdir(path);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_stat64(path,buf){try{path=SYSCALLS.getStr(path);return SYSCALLS.writeStat(buf,FS.stat(path))}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_unlinkat(dirfd,path,flags){try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);if(!flags){FS.unlink(path)}else if(flags===512){FS.rmdir(path)}else{return-28}return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var readI53FromI64=ptr=>HEAPU32[ptr>>2]+HEAP32[ptr+4>>2]*4294967296;function ___syscall_utimensat(dirfd,path,times,flags){try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path,true);var now=Date.now(),atime,mtime;if(!times){atime=now;mtime=now}else{var seconds=readI53FromI64(times);var nanoseconds=HEAP32[times+8>>2];if(nanoseconds==1073741823){atime=now}else if(nanoseconds==1073741822){atime=null}else{atime=seconds*1e3+nanoseconds/(1e3*1e3)}times+=16;seconds=readI53FromI64(times);nanoseconds=HEAP32[times+8>>2];if(nanoseconds==1073741823){mtime=now}else if(nanoseconds==1073741822){mtime=null}else{mtime=seconds*1e3+nanoseconds/(1e3*1e3)}}if((mtime??atime)!==null){FS.utime(path,atime,mtime)}return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var __abort_js=()=>abort("");var runtimeKeepaliveCounter=0;var __emscripten_runtime_keepalive_clear=()=>{noExitRuntime=false;runtimeKeepaliveCounter=0};var isLeapYear=year=>year%4===0&&(year%100!==0||year%400===0);var MONTH_DAYS_LEAP_CUMULATIVE=[0,31,60,91,121,152,182,213,244,274,305,335];var MONTH_DAYS_REGULAR_CUMULATIVE=[0,31,59,90,120,151,181,212,243,273,304,334];var ydayFromDate=date=>{var leap=isLeapYear(date.getFullYear());var monthDaysCumulative=leap?MONTH_DAYS_LEAP_CUMULATIVE:MONTH_DAYS_REGULAR_CUMULATIVE;var yday=monthDaysCumulative[date.getMonth()]+date.getDate()-1;return yday};function __localtime_js(time_low,time_high,tmPtr){var time=convertI32PairToI53Checked(time_low,time_high);var date=new Date(time*1e3);HEAP32[tmPtr>>2]=date.getSeconds();HEAP32[tmPtr+4>>2]=date.getMinutes();HEAP32[tmPtr+8>>2]=date.getHours();HEAP32[tmPtr+12>>2]=date.getDate();HEAP32[tmPtr+16>>2]=date.getMonth();HEAP32[tmPtr+20>>2]=date.getFullYear()-1900;HEAP32[tmPtr+24>>2]=date.getDay();var yday=ydayFromDate(date)|0;HEAP32[tmPtr+28>>2]=yday;HEAP32[tmPtr+36>>2]=-(date.getTimezoneOffset()*60);var start=new Date(date.getFullYear(),0,1);var summerOffset=new Date(date.getFullYear(),6,1).getTimezoneOffset();var winterOffset=start.getTimezoneOffset();var dst=(summerOffset!=winterOffset&&date.getTimezoneOffset()==Math.min(winterOffset,summerOffset))|0;HEAP32[tmPtr+32>>2]=dst}function __mmap_js(len,prot,flags,fd,offset_low,offset_high,allocated,addr){var offset=convertI32PairToI53Checked(offset_low,offset_high);try{var stream=SYSCALLS.getStreamFromFD(fd);var res=FS.mmap(stream,len,offset,prot,flags);var ptr=res.ptr;HEAP32[allocated>>2]=res.allocated;HEAPU32[addr>>2]=ptr;return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function __munmap_js(addr,len,prot,flags,fd,offset_low,offset_high){var offset=convertI32PairToI53Checked(offset_low,offset_high);try{var stream=SYSCALLS.getStreamFromFD(fd);if(prot&2){SYSCALLS.doMsync(addr,stream,len,flags,offset)}}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var timers={};var handleException=e=>{if(e instanceof ExitStatus||e=="unwind"){return EXITSTATUS}quit_(1,e)};var keepRuntimeAlive=()=>noExitRuntime||runtimeKeepaliveCounter>0;var _proc_exit=code=>{EXITSTATUS=code;if(!keepRuntimeAlive()){Module["onExit"]?.(code);ABORT=true}quit_(code,new ExitStatus(code))};var exitJS=(status,implicit)=>{EXITSTATUS=status;_proc_exit(status)};var _exit=exitJS;var maybeExit=()=>{if(!keepRuntimeAlive()){try{_exit(EXITSTATUS)}catch(e){handleException(e)}}};var callUserCallback=func=>{if(ABORT){return}try{return func()}catch(e){handleException(e)}finally{maybeExit()}};var _emscripten_get_now=()=>performance.now();var __setitimer_js=(which,timeout_ms)=>{if(timers[which]){clearTimeout(timers[which].id);delete timers[which]}if(!timeout_ms)return 0;var id=setTimeout(()=>{delete timers[which];callUserCallback(()=>__emscripten_timeout(which,_emscripten_get_now()))},timeout_ms);timers[which]={id,timeout_ms};return 0};var __tzset_js=(timezone,daylight,std_name,dst_name)=>{var currentYear=(new Date).getFullYear();var winter=new Date(currentYear,0,1);var summer=new Date(currentYear,6,1);var winterOffset=winter.getTimezoneOffset();var summerOffset=summer.getTimezoneOffset();var stdTimezoneOffset=Math.max(winterOffset,summerOffset);HEAPU32[timezone>>2]=stdTimezoneOffset*60;HEAP32[daylight>>2]=Number(winterOffset!=summerOffset);var extractZone=timezoneOffset=>{var sign=timezoneOffset>=0?"-":"+";var absOffset=Math.abs(timezoneOffset);var hours=String(Math.floor(absOffset/60)).padStart(2,"0");var minutes=String(absOffset%60).padStart(2,"0");return`UTC${sign}${hours}${minutes}`};var winterName=extractZone(winterOffset);var summerName=extractZone(summerOffset);if(summerOffset<winterOffset){stringToUTF8(winterName,std_name,17);stringToUTF8(summerName,dst_name,17)}else{stringToUTF8(winterName,dst_name,17);stringToUTF8(summerName,std_name,17)}};var _emscripten_date_now=()=>Date.now();var getHeapMax=()=>2147483648;var growMemory=size=>{var oldHeapSize=wasmMemory.buffer.byteLength;var pages=(size-oldHeapSize+65535)/65536|0;try{wasmMemory.grow(pages);updateMemoryViews();return 1}catch(e){}};var _emscripten_resize_heap=requestedSize=>{var oldSize=HEAPU8.length;requestedSize>>>=0;var maxHeapSize=getHeapMax();if(requestedSize>maxHeapSize){return false}for(var cutDown=1;cutDown<=4;cutDown*=2){var overGrownHeapSize=oldSize*(1+.2/cutDown);overGrownHeapSize=Math.min(overGrownHeapSize,requestedSize+100663296);var newSize=Math.min(maxHeapSize,alignMemory(Math.max(requestedSize,overGrownHeapSize),65536));var replacement=growMemory(newSize);if(replacement){return true}}return false};var ENV={};var getExecutableName=()=>thisProgram||"./this.program";var getEnvStrings=()=>{if(!getEnvStrings.strings){var lang=(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8";var env={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:lang,_:getExecutableName()};for(var x in ENV){if(ENV[x]===undefined)delete env[x];else env[x]=ENV[x]}var strings=[];for(var x in env){strings.push(`${x}=${env[x]}`)}getEnvStrings.strings=strings}return getEnvStrings.strings};var _environ_get=(__environ,environ_buf)=>{var bufSize=0;var envp=0;for(var string of getEnvStrings()){var ptr=environ_buf+bufSize;HEAPU32[__environ+envp>>2]=ptr;bufSize+=stringToUTF8(string,ptr,Infinity)+1;envp+=4}return 0};var _environ_sizes_get=(penviron_count,penviron_buf_size)=>{var strings=getEnvStrings();HEAPU32[penviron_count>>2]=strings.length;var bufSize=0;for(var string of strings){bufSize+=lengthBytesUTF8(string)+1}HEAPU32[penviron_buf_size>>2]=bufSize;return 0};function _fd_close(fd){try{var stream=SYSCALLS.getStreamFromFD(fd);FS.close(stream);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}function _fd_fdstat_get(fd,pbuf){try{var rightsBase=0;var rightsInheriting=0;var flags=0;{var stream=SYSCALLS.getStreamFromFD(fd);var type=stream.tty?2:FS.isDir(stream.mode)?3:FS.isLink(stream.mode)?7:4}HEAP8[pbuf]=type;HEAP16[pbuf+2>>1]=flags;tempI64=[rightsBase>>>0,(tempDouble=rightsBase,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[pbuf+8>>2]=tempI64[0],HEAP32[pbuf+12>>2]=tempI64[1];tempI64=[rightsInheriting>>>0,(tempDouble=rightsInheriting,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[pbuf+16>>2]=tempI64[0],HEAP32[pbuf+20>>2]=tempI64[1];return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}var doReadv=(stream,iov,iovcnt,offset)=>{var ret=0;for(var i=0;i<iovcnt;i++){var ptr=HEAPU32[iov>>2];var len=HEAPU32[iov+4>>2];iov+=8;var curr=FS.read(stream,HEAP8,ptr,len,offset);if(curr<0)return-1;ret+=curr;if(curr<len)break;if(typeof offset!="undefined"){offset+=curr}}return ret};function _fd_read(fd,iov,iovcnt,pnum){try{var stream=SYSCALLS.getStreamFromFD(fd);var num=doReadv(stream,iov,iovcnt);HEAPU32[pnum>>2]=num;return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}function _fd_seek(fd,offset_low,offset_high,whence,newOffset){var offset=convertI32PairToI53Checked(offset_low,offset_high);try{if(isNaN(offset))return 61;var stream=SYSCALLS.getStreamFromFD(fd);FS.llseek(stream,offset,whence);tempI64=[stream.position>>>0,(tempDouble=stream.position,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[newOffset>>2]=tempI64[0],HEAP32[newOffset+4>>2]=tempI64[1];if(stream.getdents&&offset===0&&whence===0)stream.getdents=null;return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}function _fd_sync(fd){try{var stream=SYSCALLS.getStreamFromFD(fd);var rtn=stream.stream_ops?.fsync?.(stream);return rtn}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}var doWritev=(stream,iov,iovcnt,offset)=>{var ret=0;for(var i=0;i<iovcnt;i++){var ptr=HEAPU32[iov>>2];var len=HEAPU32[iov+4>>2];iov+=8;var curr=FS.write(stream,HEAP8,ptr,len,offset);if(curr<0)return-1;ret+=curr;if(curr<len){break}if(typeof offset!="undefined"){offset+=curr}}return ret};function _fd_write(fd,iov,iovcnt,pnum){try{var stream=SYSCALLS.getStreamFromFD(fd);var num=doWritev(stream,iov,iovcnt);HEAPU32[pnum>>2]=num;return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}var adapters_support=function(){const handleAsync=typeof Asyncify==="object"?Asyncify.handleAsync.bind(Asyncify):null;Module["handleAsync"]=handleAsync;const targets=new Map;Module["setCallback"]=(key,target)=>targets.set(key,target);Module["getCallback"]=key=>targets.get(key);Module["deleteCallback"]=key=>targets.delete(key);adapters_support=function(isAsync,key,...args){const receiver=targets.get(key);let methodName=null;const f=typeof receiver==="function"?receiver:receiver[methodName=UTF8ToString(args.shift())];if(isAsync){if(handleAsync){return handleAsync(()=>f.apply(receiver,args))}throw new Error("Synchronous WebAssembly cannot call async function")}const result=f.apply(receiver,args);if(typeof result?.then=="function"){console.error("unexpected Promise",f);throw new Error(`${methodName} unexpectedly returned a Promise`)}return result}};function _ipp(...args){return adapters_support(false,...args)}function _ipp_async(...args){return adapters_support(true,...args)}function _ippipppp(...args){return adapters_support(false,...args)}function _ippipppp_async(...args){return adapters_support(true,...args)}function _ippp(...args){return adapters_support(false,...args)}function _ippp_async(...args){return adapters_support(true,...args)}function _ipppi(...args){return adapters_support(false,...args)}function _ipppi_async(...args){return adapters_support(true,...args)}function _ipppiii(...args){return adapters_support(false,...args)}function _ipppiii_async(...args){return adapters_support(true,...args)}function _ipppiiip(...args){return adapters_support(false,...args)}function _ipppiiip_async(...args){return adapters_support(true,...args)}function _ipppip(...args){return adapters_support(false,...args)}function _ipppip_async(...args){return adapters_support(true,...args)}function _ipppj(...args){return adapters_support(false,...args)}function _ipppj_async(...args){return adapters_support(true,...args)}function _ipppp(...args){return adapters_support(false,...args)}function _ipppp_async(...args){return adapters_support(true,...args)}function _ippppi(...args){return adapters_support(false,...args)}function _ippppi_async(...args){return adapters_support(true,...args)}function _ippppij(...args){return adapters_support(false,...args)}function _ippppij_async(...args){return adapters_support(true,...args)}function _ippppip(...args){return adapters_support(false,...args)}function _ippppip_async(...args){return adapters_support(true,...args)}function _ipppppip(...args){return adapters_support(false,...args)}function _ipppppip_async(...args){return adapters_support(true,...args)}function _vppippii(...args){return adapters_support(false,...args)}function _vppippii_async(...args){return adapters_support(true,...args)}function _vppp(...args){return adapters_support(false,...args)}function _vppp_async(...args){return adapters_support(true,...args)}function _vpppip(...args){return adapters_support(false,...args)}function _vpppip_async(...args){return adapters_support(true,...args)}var getWasmTableEntry=funcPtr=>wasmTable.get(funcPtr);var updateTableMap=(offset,count)=>{if(functionsInTableMap){for(var i=offset;i<offset+count;i++){var item=getWasmTableEntry(i);if(item){functionsInTableMap.set(item,i)}}}};var functionsInTableMap;var getFunctionAddress=func=>{if(!functionsInTableMap){functionsInTableMap=new WeakMap;updateTableMap(0,wasmTable.length)}return functionsInTableMap.get(func)||0};var freeTableIndexes=[];var getEmptyTableSlot=()=>{if(freeTableIndexes.length){return freeTableIndexes.pop()}return wasmTable["grow"](1)};var setWasmTableEntry=(idx,func)=>wasmTable.set(idx,func);var uleb128EncodeWithLen=arr=>{const n=arr.length;return[n%128|128,n>>7,...arr]};var wasmTypeCodes={i:127,p:127,j:126,f:125,d:124,e:111};var generateTypePack=types=>uleb128EncodeWithLen(Array.from(types,type=>{var code=wasmTypeCodes[type];return code}));var convertJsFunctionToWasm=(func,sig)=>{var bytes=Uint8Array.of(0,97,115,109,1,0,0,0,1,...uleb128EncodeWithLen([1,96,...generateTypePack(sig.slice(1)),...generateTypePack(sig[0]==="v"?"":sig[0])]),2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0);var module=new WebAssembly.Module(bytes);var instance=new WebAssembly.Instance(module,{e:{f:func}});var wrappedFunc=instance.exports["f"];return wrappedFunc};var addFunction=(func,sig)=>{var rtn=getFunctionAddress(func);if(rtn){return rtn}var ret=getEmptyTableSlot();try{setWasmTableEntry(ret,func)}catch(err){if(!(err instanceof TypeError)){throw err}var wrapped=convertJsFunctionToWasm(func,sig);setWasmTableEntry(ret,wrapped)}functionsInTableMap.set(func,ret);return ret};var getCFunc=ident=>{var func=Module["_"+ident];return func};var writeArrayToMemory=(array,buffer)=>{HEAP8.set(array,buffer)};var stackAlloc=sz=>__emscripten_stack_alloc(sz);var stringToUTF8OnStack=str=>{var size=lengthBytesUTF8(str)+1;var ret=stackAlloc(size);stringToUTF8(str,ret,size);return ret};var ccall=(ident,returnType,argTypes,args,opts)=>{var toC={string:str=>{var ret=0;if(str!==null&&str!==undefined&&str!==0){ret=stringToUTF8OnStack(str)}return ret},array:arr=>{var ret=stackAlloc(arr.length);writeArrayToMemory(arr,ret);return ret}};function convertReturnValue(ret){if(returnType==="string"){return UTF8ToString(ret)}if(returnType==="boolean")return Boolean(ret);return ret}var func=getCFunc(ident);var cArgs=[];var stack=0;if(args){for(var i=0;i<args.length;i++){var converter=toC[argTypes[i]];if(converter){if(stack===0)stack=stackSave();cArgs[i]=converter(args[i])}else{cArgs[i]=args[i]}}}var ret=func(...cArgs);function onDone(ret){if(stack!==0)stackRestore(stack);return convertReturnValue(ret)}ret=onDone(ret);return ret};var cwrap=(ident,returnType,argTypes,opts)=>{var numericArgs=!argTypes||argTypes.every(type=>type==="number"||type==="boolean");var numericRet=returnType!=="string";if(numericRet&&numericArgs&&!opts){return getCFunc(ident)}return(...args)=>ccall(ident,returnType,argTypes,args,opts)};var getTempRet0=val=>__emscripten_tempret_get();var stringToUTF16=(str,outPtr,maxBytesToWrite)=>{maxBytesToWrite??=2147483647;if(maxBytesToWrite<2)return 0;maxBytesToWrite-=2;var startPtr=outPtr;var numCharsToWrite=maxBytesToWrite<str.length*2?maxBytesToWrite/2:str.length;for(var i=0;i<numCharsToWrite;++i){var codeUnit=str.charCodeAt(i);HEAP16[outPtr>>1]=codeUnit;outPtr+=2}HEAP16[outPtr>>1]=0;return outPtr-startPtr};var stringToUTF32=(str,outPtr,maxBytesToWrite)=>{maxBytesToWrite??=2147483647;if(maxBytesToWrite<4)return 0;var startPtr=outPtr;var endPtr=startPtr+maxBytesToWrite-4;for(var i=0;i<str.length;++i){var codePoint=str.codePointAt(i);if(codePoint>65535){i++}HEAP32[outPtr>>2]=codePoint;outPtr+=4;if(outPtr+4>endPtr)break}HEAP32[outPtr>>2]=0;return outPtr-startPtr};var AsciiToString=ptr=>{var str="";while(1){var ch=HEAPU8[ptr++];if(!ch)return str;str+=String.fromCharCode(ch)}};var UTF16Decoder=new TextDecoder("utf-16le");var UTF16ToString=(ptr,maxBytesToRead,ignoreNul)=>{var idx=ptr>>1;var endIdx=findStringEnd(HEAPU16,idx,maxBytesToRead/2,ignoreNul);return UTF16Decoder.decode(HEAPU16.subarray(idx,endIdx))};var UTF32ToString=(ptr,maxBytesToRead,ignoreNul)=>{var str="";var startIdx=ptr>>2;for(var i=0;!(i>=maxBytesToRead/4);i++){var utf32=HEAPU32[startIdx+i];if(!utf32&&!ignoreNul)break;str+=String.fromCodePoint(utf32)}return str};var intArrayToString=array=>{var ret=[];for(var i=0;i<array.length;i++){var chr=array[i];if(chr>255){chr&=255}ret.push(String.fromCharCode(chr))}return ret.join("")};var _getTempRet0=getTempRet0;FS.createPreloadedFile=FS_createPreloadedFile;FS.preloadFile=FS_preloadFile;FS.staticInit();adapters_support();{if(Module["noExitRuntime"])noExitRuntime=Module["noExitRuntime"];if(Module["preloadPlugins"])preloadPlugins=Module["preloadPlugins"];if(Module["print"])out=Module["print"];if(Module["printErr"])err=Module["printErr"];if(Module["wasmBinary"])wasmBinary=Module["wasmBinary"];if(Module["arguments"])arguments_=Module["arguments"];if(Module["thisProgram"])thisProgram=Module["thisProgram"];if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].shift()()}}}Module["getTempRet0"]=getTempRet0;Module["ccall"]=ccall;Module["cwrap"]=cwrap;Module["addFunction"]=addFunction;Module["setValue"]=setValue;Module["getValue"]=getValue;Module["UTF8ToString"]=UTF8ToString;Module["stringToUTF8"]=stringToUTF8;Module["lengthBytesUTF8"]=lengthBytesUTF8;Module["intArrayFromString"]=intArrayFromString;Module["intArrayToString"]=intArrayToString;Module["AsciiToString"]=AsciiToString;Module["UTF16ToString"]=UTF16ToString;Module["stringToUTF16"]=stringToUTF16;Module["UTF32ToString"]=UTF32ToString;Module["stringToUTF32"]=stringToUTF32;Module["writeArrayToMemory"]=writeArrayToMemory;Module["_getTempRet0"]=_getTempRet0;var _powersync_init_static,_sqlite3_status64,_sqlite3_status,_sqlite3_msize,_sqlite3_db_status,_sqlite3_vfs_find,_sqlite3_vfs_register,_sqlite3_vfs_unregister,_sqlite3_release_memory,_sqlite3_soft_heap_limit64,_sqlite3_memory_used,_sqlite3_hard_heap_limit64,_sqlite3_memory_highwater,_sqlite3_malloc,_sqlite3_malloc64,_sqlite3_free,_sqlite3_realloc,_sqlite3_realloc64,_sqlite3_str_vappendf,_sqlite3_str_append,_sqlite3_str_appendchar,_sqlite3_str_appendall,_sqlite3_str_appendf,_sqlite3_str_finish,_sqlite3_str_errcode,_sqlite3_str_length,_sqlite3_str_value,_sqlite3_str_reset,_sqlite3_str_new,_sqlite3_vmprintf,_sqlite3_mprintf,_sqlite3_vsnprintf,_sqlite3_snprintf,_sqlite3_log,_sqlite3_randomness,_sqlite3_stricmp,_sqlite3_strnicmp,_sqlite3_os_init,_sqlite3_os_end,_sqlite3_serialize,_sqlite3_prepare_v2,_sqlite3_step,_sqlite3_column_int64,_sqlite3_reset,_sqlite3_exec,_sqlite3_column_int,_sqlite3_finalize,_sqlite3_deserialize,_sqlite3_database_file_object,_sqlite3_backup_init,_sqlite3_backup_step,_sqlite3_backup_finish,_sqlite3_backup_remaining,_sqlite3_backup_pagecount,_sqlite3_clear_bindings,_sqlite3_value_blob,_sqlite3_value_text,_sqlite3_value_bytes,_sqlite3_value_bytes16,_sqlite3_value_double,_sqlite3_value_int,_sqlite3_value_int64,_sqlite3_value_subtype,_sqlite3_value_pointer,_sqlite3_value_text16,_sqlite3_value_text16be,_sqlite3_value_text16le,_sqlite3_value_type,_sqlite3_value_encoding,_sqlite3_value_nochange,_sqlite3_value_frombind,_sqlite3_value_dup,_sqlite3_value_free,_sqlite3_result_blob,_sqlite3_result_blob64,_sqlite3_result_double,_sqlite3_result_error,_sqlite3_result_error16,_sqlite3_result_int,_sqlite3_result_int64,_sqlite3_result_null,_sqlite3_result_pointer,_sqlite3_result_subtype,_sqlite3_result_text,_sqlite3_result_text64,_sqlite3_result_text16,_sqlite3_result_text16be,_sqlite3_result_text16le,_sqlite3_result_value,_sqlite3_result_error_toobig,_sqlite3_result_zeroblob,_sqlite3_result_zeroblob64,_sqlite3_result_error_code,_sqlite3_result_error_nomem,_sqlite3_user_data,_sqlite3_context_db_handle,_sqlite3_vtab_nochange,_sqlite3_vtab_in_first,_sqlite3_vtab_in_next,_sqlite3_aggregate_context,_sqlite3_get_auxdata,_sqlite3_set_auxdata,_sqlite3_column_count,_sqlite3_data_count,_sqlite3_column_blob,_sqlite3_column_bytes,_sqlite3_column_bytes16,_sqlite3_column_double,_sqlite3_column_text,_sqlite3_column_value,_sqlite3_column_text16,_sqlite3_column_type,_sqlite3_column_name,_sqlite3_column_name16,_sqlite3_bind_blob,_sqlite3_bind_blob64,_sqlite3_bind_double,_sqlite3_bind_int,_sqlite3_bind_int64,_sqlite3_bind_null,_sqlite3_bind_pointer,_sqlite3_bind_text,_sqlite3_bind_text64,_sqlite3_bind_text16,_sqlite3_bind_value,_sqlite3_bind_zeroblob,_sqlite3_bind_zeroblob64,_sqlite3_bind_parameter_count,_sqlite3_bind_parameter_name,_sqlite3_bind_parameter_index,_sqlite3_db_handle,_sqlite3_stmt_readonly,_sqlite3_stmt_isexplain,_sqlite3_stmt_explain,_sqlite3_stmt_busy,_sqlite3_next_stmt,_sqlite3_stmt_status,_sqlite3_sql,_sqlite3_expanded_sql,_sqlite3_value_numeric_type,_sqlite3_blob_open,_sqlite3_blob_close,_sqlite3_blob_read,_sqlite3_blob_write,_sqlite3_blob_bytes,_sqlite3_blob_reopen,_sqlite3_set_authorizer,_sqlite3_strglob,_sqlite3_strlike,_sqlite3_errmsg,_sqlite3_load_extension,_sqlite3_enable_load_extension,_sqlite3_auto_extension,_sqlite3_cancel_auto_extension,_sqlite3_reset_auto_extension,_sqlite3_prepare,_sqlite3_prepare_v3,_sqlite3_prepare16,_sqlite3_prepare16_v2,_sqlite3_prepare16_v3,_sqlite3_get_table,_sqlite3_free_table,_sqlite3_create_module,_sqlite3_create_module_v2,_sqlite3_drop_modules,_sqlite3_declare_vtab,_sqlite3_vtab_on_conflict,_sqlite3_vtab_config,_sqlite3_vtab_collation,_sqlite3_vtab_in,_sqlite3_vtab_rhs_value,_sqlite3_vtab_distinct,_sqlite3_keyword_name,_sqlite3_keyword_count,_sqlite3_keyword_check,_sqlite3_complete,_sqlite3_complete16,_sqlite3_libversion,_sqlite3_libversion_number,_sqlite3_threadsafe,_sqlite3_initialize,_sqlite3_shutdown,_sqlite3_config,_sqlite3_db_mutex,_sqlite3_db_release_memory,_sqlite3_db_cacheflush,_sqlite3_db_config,_sqlite3_last_insert_rowid,_sqlite3_set_last_insert_rowid,_sqlite3_changes64,_sqlite3_changes,_sqlite3_total_changes64,_sqlite3_total_changes,_sqlite3_txn_state,_sqlite3_close,_sqlite3_close_v2,_sqlite3_busy_handler,_sqlite3_progress_handler,_sqlite3_busy_timeout,_sqlite3_interrupt,_sqlite3_is_interrupted,_sqlite3_create_function,_sqlite3_create_function_v2,_sqlite3_create_window_function,_sqlite3_create_function16,_sqlite3_overload_function,_sqlite3_trace_v2,_sqlite3_commit_hook,_sqlite3_update_hook,_sqlite3_rollback_hook,_sqlite3_autovacuum_pages,_sqlite3_wal_autocheckpoint,_sqlite3_wal_hook,_sqlite3_wal_checkpoint_v2,_sqlite3_wal_checkpoint,_sqlite3_error_offset,_sqlite3_errmsg16,_sqlite3_errcode,_sqlite3_extended_errcode,_sqlite3_system_errno,_sqlite3_errstr,_sqlite3_limit,_sqlite3_open,_sqlite3_open_v2,_sqlite3_open16,_sqlite3_create_collation,_sqlite3_create_collation_v2,_sqlite3_create_collation16,_sqlite3_collation_needed,_sqlite3_collation_needed16,_sqlite3_get_clientdata,_sqlite3_set_clientdata,_sqlite3_get_autocommit,_sqlite3_table_column_metadata,_sqlite3_sleep,_sqlite3_extended_result_codes,_sqlite3_file_control,_sqlite3_test_control,_sqlite3_create_filename,_sqlite3_free_filename,_sqlite3_uri_parameter,_sqlite3_uri_key,_sqlite3_uri_boolean,_sqlite3_uri_int64,_sqlite3_filename_database,_sqlite3_filename_journal,_sqlite3_filename_wal,_sqlite3_db_name,_sqlite3_db_filename,_sqlite3_db_readonly,_sqlite3_compileoption_used,_sqlite3_compileoption_get,_sqlite3_sourceid,_memcmp,_malloc,_free,_RegisterExtensionFunctions,_getSqliteFree,_main,_libauthorizer_set_authorizer,_libfunction_create_function,_libhook_commit_hook,_libhook_update_hook,_libprogress_progress_handler,_libvfs_vfs_register,_memcpy,_memset,_emscripten_builtin_memalign,__emscripten_timeout,__emscripten_tempret_get,__emscripten_stack_restore,__emscripten_stack_alloc,_emscripten_stack_get_current,dynCall_viiiij,dynCall_vijii,dynCall_iiiij,dynCall_viji,dynCall_iij,dynCall_iijii,dynCall_iiji,dynCall_iiiiiij,dynCall_iiij,dynCall_jii,dynCall_ji,dynCall_vij,dynCall_iiiiijii,dynCall_j,dynCall_jj,dynCall_jiij,dynCall_iiiiji,dynCall_iiiijii,dynCall_ij,dynCall_viiji,dynCall_viijii,dynCall_iiiijji,memory,_sqlite3_version,__indirect_function_table,wasmMemory,wasmTable;function assignWasmExports(wasmExports){_powersync_init_static=Module["_powersync_init_static"]=wasmExports["ra"];_sqlite3_status64=Module["_sqlite3_status64"]=wasmExports["sa"];_sqlite3_status=Module["_sqlite3_status"]=wasmExports["ta"];_sqlite3_msize=Module["_sqlite3_msize"]=wasmExports["ua"];_sqlite3_db_status=Module["_sqlite3_db_status"]=wasmExports["va"];_sqlite3_vfs_find=Module["_sqlite3_vfs_find"]=wasmExports["wa"];_sqlite3_vfs_register=Module["_sqlite3_vfs_register"]=wasmExports["xa"];_sqlite3_vfs_unregister=Module["_sqlite3_vfs_unregister"]=wasmExports["ya"];_sqlite3_release_memory=Module["_sqlite3_release_memory"]=wasmExports["za"];_sqlite3_soft_heap_limit64=Module["_sqlite3_soft_heap_limit64"]=wasmExports["Aa"];_sqlite3_memory_used=Module["_sqlite3_memory_used"]=wasmExports["Ba"];_sqlite3_hard_heap_limit64=Module["_sqlite3_hard_heap_limit64"]=wasmExports["Ca"];_sqlite3_memory_highwater=Module["_sqlite3_memory_highwater"]=wasmExports["Da"];_sqlite3_malloc=Module["_sqlite3_malloc"]=wasmExports["Ea"];_sqlite3_malloc64=Module["_sqlite3_malloc64"]=wasmExports["Fa"];_sqlite3_free=Module["_sqlite3_free"]=wasmExports["Ga"];_sqlite3_realloc=Module["_sqlite3_realloc"]=wasmExports["Ha"];_sqlite3_realloc64=Module["_sqlite3_realloc64"]=wasmExports["Ia"];_sqlite3_str_vappendf=Module["_sqlite3_str_vappendf"]=wasmExports["Ja"];_sqlite3_str_append=Module["_sqlite3_str_append"]=wasmExports["Ka"];_sqlite3_str_appendchar=Module["_sqlite3_str_appendchar"]=wasmExports["La"];_sqlite3_str_appendall=Module["_sqlite3_str_appendall"]=wasmExports["Ma"];_sqlite3_str_appendf=Module["_sqlite3_str_appendf"]=wasmExports["Na"];_sqlite3_str_finish=Module["_sqlite3_str_finish"]=wasmExports["Oa"];_sqlite3_str_errcode=Module["_sqlite3_str_errcode"]=wasmExports["Pa"];_sqlite3_str_length=Module["_sqlite3_str_length"]=wasmExports["Qa"];_sqlite3_str_value=Module["_sqlite3_str_value"]=wasmExports["Ra"];_sqlite3_str_reset=Module["_sqlite3_str_reset"]=wasmExports["Sa"];_sqlite3_str_new=Module["_sqlite3_str_new"]=wasmExports["Ta"];_sqlite3_vmprintf=Module["_sqlite3_vmprintf"]=wasmExports["Ua"];_sqlite3_mprintf=Module["_sqlite3_mprintf"]=wasmExports["Va"];_sqlite3_vsnprintf=Module["_sqlite3_vsnprintf"]=wasmExports["Wa"];_sqlite3_snprintf=Module["_sqlite3_snprintf"]=wasmExports["Xa"];_sqlite3_log=Module["_sqlite3_log"]=wasmExports["Ya"];_sqlite3_randomness=Module["_sqlite3_randomness"]=wasmExports["Za"];_sqlite3_stricmp=Module["_sqlite3_stricmp"]=wasmExports["_a"];_sqlite3_strnicmp=Module["_sqlite3_strnicmp"]=wasmExports["$a"];_sqlite3_os_init=Module["_sqlite3_os_init"]=wasmExports["ab"];_sqlite3_os_end=Module["_sqlite3_os_end"]=wasmExports["bb"];_sqlite3_serialize=Module["_sqlite3_serialize"]=wasmExports["cb"];_sqlite3_prepare_v2=Module["_sqlite3_prepare_v2"]=wasmExports["db"];_sqlite3_step=Module["_sqlite3_step"]=wasmExports["eb"];_sqlite3_column_int64=Module["_sqlite3_column_int64"]=wasmExports["fb"];_sqlite3_reset=Module["_sqlite3_reset"]=wasmExports["gb"];_sqlite3_exec=Module["_sqlite3_exec"]=wasmExports["hb"];_sqlite3_column_int=Module["_sqlite3_column_int"]=wasmExports["ib"];_sqlite3_finalize=Module["_sqlite3_finalize"]=wasmExports["jb"];_sqlite3_deserialize=Module["_sqlite3_deserialize"]=wasmExports["kb"];_sqlite3_database_file_object=Module["_sqlite3_database_file_object"]=wasmExports["lb"];_sqlite3_backup_init=Module["_sqlite3_backup_init"]=wasmExports["mb"];_sqlite3_backup_step=Module["_sqlite3_backup_step"]=wasmExports["nb"];_sqlite3_backup_finish=Module["_sqlite3_backup_finish"]=wasmExports["ob"];_sqlite3_backup_remaining=Module["_sqlite3_backup_remaining"]=wasmExports["pb"];_sqlite3_backup_pagecount=Module["_sqlite3_backup_pagecount"]=wasmExports["qb"];_sqlite3_clear_bindings=Module["_sqlite3_clear_bindings"]=wasmExports["rb"];_sqlite3_value_blob=Module["_sqlite3_value_blob"]=wasmExports["sb"];_sqlite3_value_text=Module["_sqlite3_value_text"]=wasmExports["tb"];_sqlite3_value_bytes=Module["_sqlite3_value_bytes"]=wasmExports["ub"];_sqlite3_value_bytes16=Module["_sqlite3_value_bytes16"]=wasmExports["vb"];_sqlite3_value_double=Module["_sqlite3_value_double"]=wasmExports["wb"];_sqlite3_value_int=Module["_sqlite3_value_int"]=wasmExports["xb"];_sqlite3_value_int64=Module["_sqlite3_value_int64"]=wasmExports["yb"];_sqlite3_value_subtype=Module["_sqlite3_value_subtype"]=wasmExports["zb"];_sqlite3_value_pointer=Module["_sqlite3_value_pointer"]=wasmExports["Ab"];_sqlite3_value_text16=Module["_sqlite3_value_text16"]=wasmExports["Bb"];_sqlite3_value_text16be=Module["_sqlite3_value_text16be"]=wasmExports["Cb"];_sqlite3_value_text16le=Module["_sqlite3_value_text16le"]=wasmExports["Db"];_sqlite3_value_type=Module["_sqlite3_value_type"]=wasmExports["Eb"];_sqlite3_value_encoding=Module["_sqlite3_value_encoding"]=wasmExports["Fb"];_sqlite3_value_nochange=Module["_sqlite3_value_nochange"]=wasmExports["Gb"];_sqlite3_value_frombind=Module["_sqlite3_value_frombind"]=wasmExports["Hb"];_sqlite3_value_dup=Module["_sqlite3_value_dup"]=wasmExports["Ib"];_sqlite3_value_free=Module["_sqlite3_value_free"]=wasmExports["Jb"];_sqlite3_result_blob=Module["_sqlite3_result_blob"]=wasmExports["Kb"];_sqlite3_result_blob64=Module["_sqlite3_result_blob64"]=wasmExports["Lb"];_sqlite3_result_double=Module["_sqlite3_result_double"]=wasmExports["Mb"];_sqlite3_result_error=Module["_sqlite3_result_error"]=wasmExports["Nb"];_sqlite3_result_error16=Module["_sqlite3_result_error16"]=wasmExports["Ob"];_sqlite3_result_int=Module["_sqlite3_result_int"]=wasmExports["Pb"];_sqlite3_result_int64=Module["_sqlite3_result_int64"]=wasmExports["Qb"];_sqlite3_result_null=Module["_sqlite3_result_null"]=wasmExports["Rb"];_sqlite3_result_pointer=Module["_sqlite3_result_pointer"]=wasmExports["Sb"];_sqlite3_result_subtype=Module["_sqlite3_result_subtype"]=wasmExports["Tb"];_sqlite3_result_text=Module["_sqlite3_result_text"]=wasmExports["Ub"];_sqlite3_result_text64=Module["_sqlite3_result_text64"]=wasmExports["Vb"];_sqlite3_result_text16=Module["_sqlite3_result_text16"]=wasmExports["Wb"];_sqlite3_result_text16be=Module["_sqlite3_result_text16be"]=wasmExports["Xb"];_sqlite3_result_text16le=Module["_sqlite3_result_text16le"]=wasmExports["Yb"];_sqlite3_result_value=Module["_sqlite3_result_value"]=wasmExports["Zb"];_sqlite3_result_error_toobig=Module["_sqlite3_result_error_toobig"]=wasmExports["_b"];_sqlite3_result_zeroblob=Module["_sqlite3_result_zeroblob"]=wasmExports["$b"];_sqlite3_result_zeroblob64=Module["_sqlite3_result_zeroblob64"]=wasmExports["ac"];_sqlite3_result_error_code=Module["_sqlite3_result_error_code"]=wasmExports["bc"];_sqlite3_result_error_nomem=Module["_sqlite3_result_error_nomem"]=wasmExports["cc"];_sqlite3_user_data=Module["_sqlite3_user_data"]=wasmExports["dc"];_sqlite3_context_db_handle=Module["_sqlite3_context_db_handle"]=wasmExports["ec"];_sqlite3_vtab_nochange=Module["_sqlite3_vtab_nochange"]=wasmExports["fc"];_sqlite3_vtab_in_first=Module["_sqlite3_vtab_in_first"]=wasmExports["gc"];_sqlite3_vtab_in_next=Module["_sqlite3_vtab_in_next"]=wasmExports["hc"];_sqlite3_aggregate_context=Module["_sqlite3_aggregate_context"]=wasmExports["ic"];_sqlite3_get_auxdata=Module["_sqlite3_get_auxdata"]=wasmExports["jc"];_sqlite3_set_auxdata=Module["_sqlite3_set_auxdata"]=wasmExports["kc"];_sqlite3_column_count=Module["_sqlite3_column_count"]=wasmExports["lc"];_sqlite3_data_count=Module["_sqlite3_data_count"]=wasmExports["mc"];_sqlite3_column_blob=Module["_sqlite3_column_blob"]=wasmExports["nc"];_sqlite3_column_bytes=Module["_sqlite3_column_bytes"]=wasmExports["oc"];_sqlite3_column_bytes16=Module["_sqlite3_column_bytes16"]=wasmExports["pc"];_sqlite3_column_double=Module["_sqlite3_column_double"]=wasmExports["qc"];_sqlite3_column_text=Module["_sqlite3_column_text"]=wasmExports["rc"];_sqlite3_column_value=Module["_sqlite3_column_value"]=wasmExports["sc"];_sqlite3_column_text16=Module["_sqlite3_column_text16"]=wasmExports["tc"];_sqlite3_column_type=Module["_sqlite3_column_type"]=wasmExports["uc"];_sqlite3_column_name=Module["_sqlite3_column_name"]=wasmExports["vc"];_sqlite3_column_name16=Module["_sqlite3_column_name16"]=wasmExports["wc"];_sqlite3_bind_blob=Module["_sqlite3_bind_blob"]=wasmExports["xc"];_sqlite3_bind_blob64=Module["_sqlite3_bind_blob64"]=wasmExports["yc"];_sqlite3_bind_double=Module["_sqlite3_bind_double"]=wasmExports["zc"];_sqlite3_bind_int=Module["_sqlite3_bind_int"]=wasmExports["Ac"];_sqlite3_bind_int64=Module["_sqlite3_bind_int64"]=wasmExports["Bc"];_sqlite3_bind_null=Module["_sqlite3_bind_null"]=wasmExports["Cc"];_sqlite3_bind_pointer=Module["_sqlite3_bind_pointer"]=wasmExports["Dc"];_sqlite3_bind_text=Module["_sqlite3_bind_text"]=wasmExports["Ec"];_sqlite3_bind_text64=Module["_sqlite3_bind_text64"]=wasmExports["Fc"];_sqlite3_bind_text16=Module["_sqlite3_bind_text16"]=wasmExports["Gc"];_sqlite3_bind_value=Module["_sqlite3_bind_value"]=wasmExports["Hc"];_sqlite3_bind_zeroblob=Module["_sqlite3_bind_zeroblob"]=wasmExports["Ic"];_sqlite3_bind_zeroblob64=Module["_sqlite3_bind_zeroblob64"]=wasmExports["Jc"];_sqlite3_bind_parameter_count=Module["_sqlite3_bind_parameter_count"]=wasmExports["Kc"];_sqlite3_bind_parameter_name=Module["_sqlite3_bind_parameter_name"]=wasmExports["Lc"];_sqlite3_bind_parameter_index=Module["_sqlite3_bind_parameter_index"]=wasmExports["Mc"];_sqlite3_db_handle=Module["_sqlite3_db_handle"]=wasmExports["Nc"];_sqlite3_stmt_readonly=Module["_sqlite3_stmt_readonly"]=wasmExports["Oc"];_sqlite3_stmt_isexplain=Module["_sqlite3_stmt_isexplain"]=wasmExports["Pc"];_sqlite3_stmt_explain=Module["_sqlite3_stmt_explain"]=wasmExports["Qc"];_sqlite3_stmt_busy=Module["_sqlite3_stmt_busy"]=wasmExports["Rc"];_sqlite3_next_stmt=Module["_sqlite3_next_stmt"]=wasmExports["Sc"];_sqlite3_stmt_status=Module["_sqlite3_stmt_status"]=wasmExports["Tc"];_sqlite3_sql=Module["_sqlite3_sql"]=wasmExports["Uc"];_sqlite3_expanded_sql=Module["_sqlite3_expanded_sql"]=wasmExports["Vc"];_sqlite3_value_numeric_type=Module["_sqlite3_value_numeric_type"]=wasmExports["Wc"];_sqlite3_blob_open=Module["_sqlite3_blob_open"]=wasmExports["Xc"];_sqlite3_blob_close=Module["_sqlite3_blob_close"]=wasmExports["Yc"];_sqlite3_blob_read=Module["_sqlite3_blob_read"]=wasmExports["Zc"];_sqlite3_blob_write=Module["_sqlite3_blob_write"]=wasmExports["_c"];_sqlite3_blob_bytes=Module["_sqlite3_blob_bytes"]=wasmExports["$c"];_sqlite3_blob_reopen=Module["_sqlite3_blob_reopen"]=wasmExports["ad"];_sqlite3_set_authorizer=Module["_sqlite3_set_authorizer"]=wasmExports["bd"];_sqlite3_strglob=Module["_sqlite3_strglob"]=wasmExports["cd"];_sqlite3_strlike=Module["_sqlite3_strlike"]=wasmExports["dd"];_sqlite3_errmsg=Module["_sqlite3_errmsg"]=wasmExports["ed"];_sqlite3_load_extension=Module["_sqlite3_load_extension"]=wasmExports["fd"];_sqlite3_enable_load_extension=Module["_sqlite3_enable_load_extension"]=wasmExports["gd"];_sqlite3_auto_extension=Module["_sqlite3_auto_extension"]=wasmExports["hd"];_sqlite3_cancel_auto_extension=Module["_sqlite3_cancel_auto_extension"]=wasmExports["id"];_sqlite3_reset_auto_extension=Module["_sqlite3_reset_auto_extension"]=wasmExports["jd"];_sqlite3_prepare=Module["_sqlite3_prepare"]=wasmExports["kd"];_sqlite3_prepare_v3=Module["_sqlite3_prepare_v3"]=wasmExports["ld"];_sqlite3_prepare16=Module["_sqlite3_prepare16"]=wasmExports["md"];_sqlite3_prepare16_v2=Module["_sqlite3_prepare16_v2"]=wasmExports["nd"];_sqlite3_prepare16_v3=Module["_sqlite3_prepare16_v3"]=wasmExports["od"];_sqlite3_get_table=Module["_sqlite3_get_table"]=wasmExports["pd"];_sqlite3_free_table=Module["_sqlite3_free_table"]=wasmExports["qd"];_sqlite3_create_module=Module["_sqlite3_create_module"]=wasmExports["rd"];_sqlite3_create_module_v2=Module["_sqlite3_create_module_v2"]=wasmExports["sd"];_sqlite3_drop_modules=Module["_sqlite3_drop_modules"]=wasmExports["td"];_sqlite3_declare_vtab=Module["_sqlite3_declare_vtab"]=wasmExports["ud"];_sqlite3_vtab_on_conflict=Module["_sqlite3_vtab_on_conflict"]=wasmExports["vd"];_sqlite3_vtab_config=Module["_sqlite3_vtab_config"]=wasmExports["wd"];_sqlite3_vtab_collation=Module["_sqlite3_vtab_collation"]=wasmExports["xd"];_sqlite3_vtab_in=Module["_sqlite3_vtab_in"]=wasmExports["yd"];_sqlite3_vtab_rhs_value=Module["_sqlite3_vtab_rhs_value"]=wasmExports["zd"];_sqlite3_vtab_distinct=Module["_sqlite3_vtab_distinct"]=wasmExports["Ad"];_sqlite3_keyword_name=Module["_sqlite3_keyword_name"]=wasmExports["Bd"];_sqlite3_keyword_count=Module["_sqlite3_keyword_count"]=wasmExports["Cd"];_sqlite3_keyword_check=Module["_sqlite3_keyword_check"]=wasmExports["Dd"];_sqlite3_complete=Module["_sqlite3_complete"]=wasmExports["Ed"];_sqlite3_complete16=Module["_sqlite3_complete16"]=wasmExports["Fd"];_sqlite3_libversion=Module["_sqlite3_libversion"]=wasmExports["Gd"];_sqlite3_libversion_number=Module["_sqlite3_libversion_number"]=wasmExports["Hd"];_sqlite3_threadsafe=Module["_sqlite3_threadsafe"]=wasmExports["Id"];_sqlite3_initialize=Module["_sqlite3_initialize"]=wasmExports["Jd"];_sqlite3_shutdown=Module["_sqlite3_shutdown"]=wasmExports["Kd"];_sqlite3_config=Module["_sqlite3_config"]=wasmExports["Ld"];_sqlite3_db_mutex=Module["_sqlite3_db_mutex"]=wasmExports["Md"];_sqlite3_db_release_memory=Module["_sqlite3_db_release_memory"]=wasmExports["Nd"];_sqlite3_db_cacheflush=Module["_sqlite3_db_cacheflush"]=wasmExports["Od"];_sqlite3_db_config=Module["_sqlite3_db_config"]=wasmExports["Pd"];_sqlite3_last_insert_rowid=Module["_sqlite3_last_insert_rowid"]=wasmExports["Qd"];_sqlite3_set_last_insert_rowid=Module["_sqlite3_set_last_insert_rowid"]=wasmExports["Rd"];_sqlite3_changes64=Module["_sqlite3_changes64"]=wasmExports["Sd"];_sqlite3_changes=Module["_sqlite3_changes"]=wasmExports["Td"];_sqlite3_total_changes64=Module["_sqlite3_total_changes64"]=wasmExports["Ud"];_sqlite3_total_changes=Module["_sqlite3_total_changes"]=wasmExports["Vd"];_sqlite3_txn_state=Module["_sqlite3_txn_state"]=wasmExports["Wd"];_sqlite3_close=Module["_sqlite3_close"]=wasmExports["Xd"];_sqlite3_close_v2=Module["_sqlite3_close_v2"]=wasmExports["Yd"];_sqlite3_busy_handler=Module["_sqlite3_busy_handler"]=wasmExports["Zd"];_sqlite3_progress_handler=Module["_sqlite3_progress_handler"]=wasmExports["_d"];_sqlite3_busy_timeout=Module["_sqlite3_busy_timeout"]=wasmExports["$d"];_sqlite3_interrupt=Module["_sqlite3_interrupt"]=wasmExports["ae"];_sqlite3_is_interrupted=Module["_sqlite3_is_interrupted"]=wasmExports["be"];_sqlite3_create_function=Module["_sqlite3_create_function"]=wasmExports["ce"];_sqlite3_create_function_v2=Module["_sqlite3_create_function_v2"]=wasmExports["de"];_sqlite3_create_window_function=Module["_sqlite3_create_window_function"]=wasmExports["ee"];_sqlite3_create_function16=Module["_sqlite3_create_function16"]=wasmExports["fe"];_sqlite3_overload_function=Module["_sqlite3_overload_function"]=wasmExports["ge"];_sqlite3_trace_v2=Module["_sqlite3_trace_v2"]=wasmExports["he"];_sqlite3_commit_hook=Module["_sqlite3_commit_hook"]=wasmExports["ie"];_sqlite3_update_hook=Module["_sqlite3_update_hook"]=wasmExports["je"];_sqlite3_rollback_hook=Module["_sqlite3_rollback_hook"]=wasmExports["ke"];_sqlite3_autovacuum_pages=Module["_sqlite3_autovacuum_pages"]=wasmExports["le"];_sqlite3_wal_autocheckpoint=Module["_sqlite3_wal_autocheckpoint"]=wasmExports["me"];_sqlite3_wal_hook=Module["_sqlite3_wal_hook"]=wasmExports["ne"];_sqlite3_wal_checkpoint_v2=Module["_sqlite3_wal_checkpoint_v2"]=wasmExports["oe"];_sqlite3_wal_checkpoint=Module["_sqlite3_wal_checkpoint"]=wasmExports["pe"];_sqlite3_error_offset=Module["_sqlite3_error_offset"]=wasmExports["qe"];_sqlite3_errmsg16=Module["_sqlite3_errmsg16"]=wasmExports["re"];_sqlite3_errcode=Module["_sqlite3_errcode"]=wasmExports["se"];_sqlite3_extended_errcode=Module["_sqlite3_extended_errcode"]=wasmExports["te"];_sqlite3_system_errno=Module["_sqlite3_system_errno"]=wasmExports["ue"];_sqlite3_errstr=Module["_sqlite3_errstr"]=wasmExports["ve"];_sqlite3_limit=Module["_sqlite3_limit"]=wasmExports["we"];_sqlite3_open=Module["_sqlite3_open"]=wasmExports["xe"];_sqlite3_open_v2=Module["_sqlite3_open_v2"]=wasmExports["ye"];_sqlite3_open16=Module["_sqlite3_open16"]=wasmExports["ze"];_sqlite3_create_collation=Module["_sqlite3_create_collation"]=wasmExports["Ae"];_sqlite3_create_collation_v2=Module["_sqlite3_create_collation_v2"]=wasmExports["Be"];_sqlite3_create_collation16=Module["_sqlite3_create_collation16"]=wasmExports["Ce"];_sqlite3_collation_needed=Module["_sqlite3_collation_needed"]=wasmExports["De"];_sqlite3_collation_needed16=Module["_sqlite3_collation_needed16"]=wasmExports["Ee"];_sqlite3_get_clientdata=Module["_sqlite3_get_clientdata"]=wasmExports["Fe"];_sqlite3_set_clientdata=Module["_sqlite3_set_clientdata"]=wasmExports["Ge"];_sqlite3_get_autocommit=Module["_sqlite3_get_autocommit"]=wasmExports["He"];_sqlite3_table_column_metadata=Module["_sqlite3_table_column_metadata"]=wasmExports["Ie"];_sqlite3_sleep=Module["_sqlite3_sleep"]=wasmExports["Je"];_sqlite3_extended_result_codes=Module["_sqlite3_extended_result_codes"]=wasmExports["Ke"];_sqlite3_file_control=Module["_sqlite3_file_control"]=wasmExports["Le"];_sqlite3_test_control=Module["_sqlite3_test_control"]=wasmExports["Me"];_sqlite3_create_filename=Module["_sqlite3_create_filename"]=wasmExports["Ne"];_sqlite3_free_filename=Module["_sqlite3_free_filename"]=wasmExports["Oe"];_sqlite3_uri_parameter=Module["_sqlite3_uri_parameter"]=wasmExports["Pe"];_sqlite3_uri_key=Module["_sqlite3_uri_key"]=wasmExports["Qe"];_sqlite3_uri_boolean=Module["_sqlite3_uri_boolean"]=wasmExports["Re"];_sqlite3_uri_int64=Module["_sqlite3_uri_int64"]=wasmExports["Se"];_sqlite3_filename_database=Module["_sqlite3_filename_database"]=wasmExports["Te"];_sqlite3_filename_journal=Module["_sqlite3_filename_journal"]=wasmExports["Ue"];_sqlite3_filename_wal=Module["_sqlite3_filename_wal"]=wasmExports["Ve"];_sqlite3_db_name=Module["_sqlite3_db_name"]=wasmExports["We"];_sqlite3_db_filename=Module["_sqlite3_db_filename"]=wasmExports["Xe"];_sqlite3_db_readonly=Module["_sqlite3_db_readonly"]=wasmExports["Ye"];_sqlite3_compileoption_used=Module["_sqlite3_compileoption_used"]=wasmExports["Ze"];_sqlite3_compileoption_get=Module["_sqlite3_compileoption_get"]=wasmExports["_e"];_sqlite3_sourceid=Module["_sqlite3_sourceid"]=wasmExports["$e"];_memcmp=Module["_memcmp"]=wasmExports["af"];_malloc=Module["_malloc"]=wasmExports["bf"];_free=Module["_free"]=wasmExports["cf"];_RegisterExtensionFunctions=Module["_RegisterExtensionFunctions"]=wasmExports["ef"];_getSqliteFree=Module["_getSqliteFree"]=wasmExports["ff"];_main=Module["_main"]=wasmExports["gf"];_libauthorizer_set_authorizer=Module["_libauthorizer_set_authorizer"]=wasmExports["hf"];_libfunction_create_function=Module["_libfunction_create_function"]=wasmExports["jf"];_libhook_commit_hook=Module["_libhook_commit_hook"]=wasmExports["kf"];_libhook_update_hook=Module["_libhook_update_hook"]=wasmExports["lf"];_libprogress_progress_handler=Module["_libprogress_progress_handler"]=wasmExports["mf"];_libvfs_vfs_register=Module["_libvfs_vfs_register"]=wasmExports["nf"];_memcpy=Module["_memcpy"]=wasmExports["of"];_memset=Module["_memset"]=wasmExports["pf"];_emscripten_builtin_memalign=wasmExports["rf"];__emscripten_timeout=wasmExports["sf"];__emscripten_tempret_get=wasmExports["tf"];__emscripten_stack_restore=wasmExports["uf"];__emscripten_stack_alloc=wasmExports["vf"];_emscripten_stack_get_current=wasmExports["wf"];dynCall_viiiij=wasmExports["dynCall_viiiij"];dynCall_vijii=wasmExports["dynCall_vijii"];dynCall_iiiij=wasmExports["dynCall_iiiij"];dynCall_viji=wasmExports["dynCall_viji"];dynCall_iij=wasmExports["dynCall_iij"];dynCall_iijii=wasmExports["dynCall_iijii"];dynCall_iiji=wasmExports["dynCall_iiji"];dynCall_iiiiiij=wasmExports["dynCall_iiiiiij"];dynCall_iiij=wasmExports["dynCall_iiij"];dynCall_jii=wasmExports["dynCall_jii"];dynCall_ji=wasmExports["dynCall_ji"];dynCall_vij=wasmExports["dynCall_vij"];dynCall_iiiiijii=wasmExports["dynCall_iiiiijii"];dynCall_j=wasmExports["dynCall_j"];dynCall_jj=wasmExports["dynCall_jj"];dynCall_jiij=wasmExports["dynCall_jiij"];dynCall_iiiiji=wasmExports["dynCall_iiiiji"];dynCall_iiiijii=wasmExports["dynCall_iiiijii"];dynCall_ij=wasmExports["dynCall_ij"];dynCall_viiji=wasmExports["dynCall_viiji"];dynCall_viijii=wasmExports["dynCall_viijii"];dynCall_iiiijji=wasmExports["dynCall_iiiijji"];memory=wasmMemory=wasmExports["pa"];_sqlite3_version=Module["_sqlite3_version"]=wasmExports["df"].value;__indirect_function_table=wasmTable=wasmExports["qf"]}var wasmImports={a:___assert_fail,aa:___syscall_chmod,da:___syscall_faccessat,ba:___syscall_fchmod,$:___syscall_fchown32,b:___syscall_fcntl64,_:___syscall_fstat64,y:___syscall_ftruncate64,U:___syscall_getcwd,Y:___syscall_lstat64,R:___syscall_mkdirat,X:___syscall_newfstatat,P:___syscall_openat,N:___syscall_readlinkat,M:___syscall_rmdir,Z:___syscall_stat64,K:___syscall_unlinkat,J:___syscall_utimensat,F:__abort_js,E:__emscripten_runtime_keepalive_clear,w:__localtime_js,u:__mmap_js,v:__munmap_js,G:__setitimer_js,Q:__tzset_js,n:_emscripten_date_now,g:_emscripten_get_now,H:_emscripten_resize_heap,S:_environ_get,T:_environ_sizes_get,o:_fd_close,I:_fd_fdstat_get,O:_fd_read,x:_fd_seek,V:_fd_sync,L:_fd_write,s:_ipp,t:_ipp_async,ka:_ippipppp,oa:_ippipppp_async,j:_ippp,k:_ippp_async,c:_ipppi,d:_ipppi_async,ga:_ipppiii,ha:_ipppiii_async,ia:_ipppiiip,ja:_ipppiiip_async,h:_ipppip,i:_ipppip_async,z:_ipppj,A:_ipppj_async,e:_ipppp,f:_ipppp_async,ea:_ippppi,fa:_ippppi_async,B:_ippppij,C:_ippppij_async,p:_ippppip,q:_ippppip_async,la:_ipppppip,ma:_ipppppip_async,D:_proc_exit,na:_vppippii,r:_vppippii_async,l:_vppp,m:_vppp_async,W:_vpppip,ca:_vpppip_async};function callMain(){var entryFunction=_main;var argc=0;var argv=0;try{var ret=entryFunction(argc,argv);exitJS(ret,true);return ret}catch(e){return handleException(e)}}function run(){if(runDependencies>0){dependenciesFulfilled=run;return}preRun();if(runDependencies>0){dependenciesFulfilled=run;return}function doRun(){Module["calledRun"]=true;if(ABORT)return;initRuntime();preMain();readyPromiseResolve?.(Module);Module["onRuntimeInitialized"]?.();var noInitialRun=Module["noInitialRun"]||false;if(!noInitialRun)callMain();postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout(()=>{setTimeout(()=>Module["setStatus"](""),1);doRun()},1)}else{doRun()}}var wasmExports;wasmExports=await (createWasm());run();(function(){const AsyncFunction=Object.getPrototypeOf(async function(){}).constructor;let pAsyncFlags=0;Module["set_authorizer"]=function(db,xAuthorizer,pApp){if(pAsyncFlags){Module["deleteCallback"](pAsyncFlags);Module["_sqlite3_free"](pAsyncFlags);pAsyncFlags=0}pAsyncFlags=Module["_sqlite3_malloc"](4);setValue(pAsyncFlags,xAuthorizer instanceof AsyncFunction?1:0,"i32");const result=ccall("libauthorizer_set_authorizer","number",["number","number","number"],[db,xAuthorizer?1:0,pAsyncFlags]);if(!result&&xAuthorizer){Module["setCallback"](pAsyncFlags,(_,iAction,p3,p4,p5,p6)=>xAuthorizer(pApp,iAction,p3,p4,p5,p6))}return result}})();(function(){const AsyncFunction=Object.getPrototypeOf(async function(){}).constructor;const FUNC_METHODS=["xFunc","xStep","xFinal"];const mapFunctionNameToKey=new Map;Module["create_function"]=function(db,zFunctionName,nArg,eTextRep,pApp,xFunc,xStep,xFinal){const pAsyncFlags=Module["_sqlite3_malloc"](4);const target={xFunc,xStep,xFinal};setValue(pAsyncFlags,FUNC_METHODS.reduce((mask,method,i)=>{if(target[method]instanceof AsyncFunction){return mask|1<<i}return mask},0),"i32");const result=ccall("libfunction_create_function","number",["number","string","number","number","number","number","number","number"],[db,zFunctionName,nArg,eTextRep,pAsyncFlags,xFunc?1:0,xStep?1:0,xFinal?1:0]);if(!result){if(mapFunctionNameToKey.has(zFunctionName)){const oldKey=mapFunctionNameToKey.get(zFunctionName);Module["deleteCallback"](oldKey)}mapFunctionNameToKey.set(zFunctionName,pAsyncFlags);Module["setCallback"](pAsyncFlags,{xFunc,xStep,xFinal})}return result}})();(function(){const AsyncFunction=Object.getPrototypeOf(async function(){}).constructor;let pAsyncFlags=0;Module["update_hook"]=function(db,xUpdateHook){if(pAsyncFlags){Module["deleteCallback"](pAsyncFlags);Module["_sqlite3_free"](pAsyncFlags);pAsyncFlags=0}pAsyncFlags=Module["_sqlite3_malloc"](4);setValue(pAsyncFlags,xUpdateHook instanceof AsyncFunction?1:0,"i32");ccall("libhook_update_hook","void",["number","number","number"],[db,xUpdateHook?1:0,pAsyncFlags]);if(xUpdateHook){Module["setCallback"](pAsyncFlags,(_,iUpdateType,dbName,tblName,lo32,hi32)=>xUpdateHook(iUpdateType,dbName,tblName,lo32,hi32))}}})();(function(){const AsyncFunction=Object.getPrototypeOf(async function(){}).constructor;let pAsyncFlags=0;Module["commit_hook"]=function(db,xCommitHook){if(pAsyncFlags){Module["deleteCallback"](pAsyncFlags);Module["_sqlite3_free"](pAsyncFlags);pAsyncFlags=0}pAsyncFlags=Module["_sqlite3_malloc"](4);setValue(pAsyncFlags,xCommitHook instanceof AsyncFunction?1:0,"i32");ccall("libhook_commit_hook","void",["number","number","number"],[db,xCommitHook?1:0,pAsyncFlags]);if(xCommitHook){Module["setCallback"](pAsyncFlags,_=>xCommitHook())}}})();(function(){const AsyncFunction=Object.getPrototypeOf(async function(){}).constructor;let pAsyncFlags=0;Module["progress_handler"]=function(db,nOps,xProgress,pApp){if(pAsyncFlags){Module["deleteCallback"](pAsyncFlags);Module["_sqlite3_free"](pAsyncFlags);pAsyncFlags=0}pAsyncFlags=Module["_sqlite3_malloc"](4);setValue(pAsyncFlags,xProgress instanceof AsyncFunction?1:0,"i32");ccall("libprogress_progress_handler","number",["number","number","number","number"],[db,nOps,xProgress?1:0,pAsyncFlags]);if(xProgress){Module["setCallback"](pAsyncFlags,_=>xProgress(pApp))}}})();(function(){const VFS_METHODS=["xOpen","xDelete","xAccess","xFullPathname","xRandomness","xSleep","xCurrentTime","xGetLastError","xCurrentTimeInt64","xClose","xRead","xWrite","xTruncate","xSync","xFileSize","xLock","xUnlock","xCheckReservedLock","xFileControl","xSectorSize","xDeviceCharacteristics","xShmMap","xShmLock","xShmBarrier","xShmUnmap"];const mapVFSNameToKey=new Map;Module["vfs_register"]=function(vfs,makeDefault){let methodMask=0;let asyncMask=0;VFS_METHODS.forEach((method,i)=>{if(vfs[method]){methodMask|=1<<i;if(vfs["hasAsyncMethod"](method)){asyncMask|=1<<i}}});const vfsReturn=Module["_sqlite3_malloc"](4);try{const result=ccall("libvfs_vfs_register","number",["string","number","number","number","number","number"],[vfs.name,vfs.mxPathname,methodMask,asyncMask,makeDefault?1:0,vfsReturn]);if(!result){if(mapVFSNameToKey.has(vfs.name)){const oldKey=mapVFSNameToKey.get(vfs.name);Module["deleteCallback"](oldKey)}const key=getValue(vfsReturn,"*");mapVFSNameToKey.set(vfs.name,key);Module["setCallback"](key,vfs)}return result}finally{Module["_sqlite3_free"](vfsReturn)}}})();if(runtimeInitialized){moduleRtn=Module}else{moduleRtn=new Promise((resolve,reject)=>{readyPromiseResolve=resolve;readyPromiseReject=reject})}
;return moduleRtn}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Module);


/***/ },

/***/ "../../node_modules/.pnpm/bson@6.10.4/node_modules/bson/lib/bson.mjs"
/*!***************************************************************************!*\
  !*** ../../node_modules/.pnpm/bson@6.10.4/node_modules/bson/lib/bson.mjs ***!
  \***************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BSON: () => (/* binding */ bson),
/* harmony export */   BSONError: () => (/* binding */ BSONError),
/* harmony export */   BSONOffsetError: () => (/* binding */ BSONOffsetError),
/* harmony export */   BSONRegExp: () => (/* binding */ BSONRegExp),
/* harmony export */   BSONRuntimeError: () => (/* binding */ BSONRuntimeError),
/* harmony export */   BSONSymbol: () => (/* binding */ BSONSymbol),
/* harmony export */   BSONType: () => (/* binding */ BSONType),
/* harmony export */   BSONValue: () => (/* binding */ BSONValue),
/* harmony export */   BSONVersionError: () => (/* binding */ BSONVersionError),
/* harmony export */   Binary: () => (/* binding */ Binary),
/* harmony export */   Code: () => (/* binding */ Code),
/* harmony export */   DBRef: () => (/* binding */ DBRef),
/* harmony export */   Decimal128: () => (/* binding */ Decimal128),
/* harmony export */   Double: () => (/* binding */ Double),
/* harmony export */   EJSON: () => (/* binding */ EJSON),
/* harmony export */   Int32: () => (/* binding */ Int32),
/* harmony export */   Long: () => (/* binding */ Long),
/* harmony export */   MaxKey: () => (/* binding */ MaxKey),
/* harmony export */   MinKey: () => (/* binding */ MinKey),
/* harmony export */   ObjectId: () => (/* binding */ ObjectId),
/* harmony export */   Timestamp: () => (/* binding */ Timestamp),
/* harmony export */   UUID: () => (/* binding */ UUID),
/* harmony export */   calculateObjectSize: () => (/* binding */ calculateObjectSize),
/* harmony export */   deserialize: () => (/* binding */ deserialize),
/* harmony export */   deserializeStream: () => (/* binding */ deserializeStream),
/* harmony export */   onDemand: () => (/* binding */ onDemand),
/* harmony export */   serialize: () => (/* binding */ serialize),
/* harmony export */   serializeWithBufferAndIndex: () => (/* binding */ serializeWithBufferAndIndex),
/* harmony export */   setInternalBufferSize: () => (/* binding */ setInternalBufferSize)
/* harmony export */ });
const TypedArrayPrototypeGetSymbolToStringTag = (() => {
    const g = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), Symbol.toStringTag).get;
    return (value) => g.call(value);
})();
function isUint8Array(value) {
    return TypedArrayPrototypeGetSymbolToStringTag(value) === 'Uint8Array';
}
function isAnyArrayBuffer(value) {
    return (typeof value === 'object' &&
        value != null &&
        Symbol.toStringTag in value &&
        (value[Symbol.toStringTag] === 'ArrayBuffer' ||
            value[Symbol.toStringTag] === 'SharedArrayBuffer'));
}
function isRegExp(regexp) {
    return regexp instanceof RegExp || Object.prototype.toString.call(regexp) === '[object RegExp]';
}
function isMap(value) {
    return (typeof value === 'object' &&
        value != null &&
        Symbol.toStringTag in value &&
        value[Symbol.toStringTag] === 'Map');
}
function isDate(date) {
    return date instanceof Date || Object.prototype.toString.call(date) === '[object Date]';
}
function defaultInspect(x, _options) {
    return JSON.stringify(x, (k, v) => {
        if (typeof v === 'bigint') {
            return { $numberLong: `${v}` };
        }
        else if (isMap(v)) {
            return Object.fromEntries(v);
        }
        return v;
    });
}
function getStylizeFunction(options) {
    const stylizeExists = options != null &&
        typeof options === 'object' &&
        'stylize' in options &&
        typeof options.stylize === 'function';
    if (stylizeExists) {
        return options.stylize;
    }
}

const BSON_MAJOR_VERSION = 6;
const BSON_VERSION_SYMBOL = Symbol.for('@@mdb.bson.version');
const BSON_INT32_MAX = 0x7fffffff;
const BSON_INT32_MIN = -2147483648;
const BSON_INT64_MAX = Math.pow(2, 63) - 1;
const BSON_INT64_MIN = -Math.pow(2, 63);
const JS_INT_MAX = Math.pow(2, 53);
const JS_INT_MIN = -Math.pow(2, 53);
const BSON_DATA_NUMBER = 1;
const BSON_DATA_STRING = 2;
const BSON_DATA_OBJECT = 3;
const BSON_DATA_ARRAY = 4;
const BSON_DATA_BINARY = 5;
const BSON_DATA_UNDEFINED = 6;
const BSON_DATA_OID = 7;
const BSON_DATA_BOOLEAN = 8;
const BSON_DATA_DATE = 9;
const BSON_DATA_NULL = 10;
const BSON_DATA_REGEXP = 11;
const BSON_DATA_DBPOINTER = 12;
const BSON_DATA_CODE = 13;
const BSON_DATA_SYMBOL = 14;
const BSON_DATA_CODE_W_SCOPE = 15;
const BSON_DATA_INT = 16;
const BSON_DATA_TIMESTAMP = 17;
const BSON_DATA_LONG = 18;
const BSON_DATA_DECIMAL128 = 19;
const BSON_DATA_MIN_KEY = 0xff;
const BSON_DATA_MAX_KEY = 0x7f;
const BSON_BINARY_SUBTYPE_DEFAULT = 0;
const BSON_BINARY_SUBTYPE_UUID_NEW = 4;
const BSONType = Object.freeze({
    double: 1,
    string: 2,
    object: 3,
    array: 4,
    binData: 5,
    undefined: 6,
    objectId: 7,
    bool: 8,
    date: 9,
    null: 10,
    regex: 11,
    dbPointer: 12,
    javascript: 13,
    symbol: 14,
    javascriptWithScope: 15,
    int: 16,
    timestamp: 17,
    long: 18,
    decimal: 19,
    minKey: -1,
    maxKey: 127
});

class BSONError extends Error {
    get bsonError() {
        return true;
    }
    get name() {
        return 'BSONError';
    }
    constructor(message, options) {
        super(message, options);
    }
    static isBSONError(value) {
        return (value != null &&
            typeof value === 'object' &&
            'bsonError' in value &&
            value.bsonError === true &&
            'name' in value &&
            'message' in value &&
            'stack' in value);
    }
}
class BSONVersionError extends BSONError {
    get name() {
        return 'BSONVersionError';
    }
    constructor() {
        super(`Unsupported BSON version, bson types must be from bson ${BSON_MAJOR_VERSION}.x.x`);
    }
}
class BSONRuntimeError extends BSONError {
    get name() {
        return 'BSONRuntimeError';
    }
    constructor(message) {
        super(message);
    }
}
class BSONOffsetError extends BSONError {
    get name() {
        return 'BSONOffsetError';
    }
    constructor(message, offset, options) {
        super(`${message}. offset: ${offset}`, options);
        this.offset = offset;
    }
}

let TextDecoderFatal;
let TextDecoderNonFatal;
function parseUtf8(buffer, start, end, fatal) {
    if (fatal) {
        TextDecoderFatal ??= new TextDecoder('utf8', { fatal: true });
        try {
            return TextDecoderFatal.decode(buffer.subarray(start, end));
        }
        catch (cause) {
            throw new BSONError('Invalid UTF-8 string in BSON document', { cause });
        }
    }
    TextDecoderNonFatal ??= new TextDecoder('utf8', { fatal: false });
    return TextDecoderNonFatal.decode(buffer.subarray(start, end));
}

function tryReadBasicLatin(uint8array, start, end) {
    if (uint8array.length === 0) {
        return '';
    }
    const stringByteLength = end - start;
    if (stringByteLength === 0) {
        return '';
    }
    if (stringByteLength > 20) {
        return null;
    }
    if (stringByteLength === 1 && uint8array[start] < 128) {
        return String.fromCharCode(uint8array[start]);
    }
    if (stringByteLength === 2 && uint8array[start] < 128 && uint8array[start + 1] < 128) {
        return String.fromCharCode(uint8array[start]) + String.fromCharCode(uint8array[start + 1]);
    }
    if (stringByteLength === 3 &&
        uint8array[start] < 128 &&
        uint8array[start + 1] < 128 &&
        uint8array[start + 2] < 128) {
        return (String.fromCharCode(uint8array[start]) +
            String.fromCharCode(uint8array[start + 1]) +
            String.fromCharCode(uint8array[start + 2]));
    }
    const latinBytes = [];
    for (let i = start; i < end; i++) {
        const byte = uint8array[i];
        if (byte > 127) {
            return null;
        }
        latinBytes.push(byte);
    }
    return String.fromCharCode(...latinBytes);
}
function tryWriteBasicLatin(destination, source, offset) {
    if (source.length === 0)
        return 0;
    if (source.length > 25)
        return null;
    if (destination.length - offset < source.length)
        return null;
    for (let charOffset = 0, destinationOffset = offset; charOffset < source.length; charOffset++, destinationOffset++) {
        const char = source.charCodeAt(charOffset);
        if (char > 127)
            return null;
        destination[destinationOffset] = char;
    }
    return source.length;
}

function nodejsMathRandomBytes(byteLength) {
    return nodeJsByteUtils.fromNumberArray(Array.from({ length: byteLength }, () => Math.floor(Math.random() * 256)));
}
const nodejsRandomBytes = nodejsMathRandomBytes;
const nodeJsByteUtils = {
    toLocalBufferType(potentialBuffer) {
        if (Buffer.isBuffer(potentialBuffer)) {
            return potentialBuffer;
        }
        if (ArrayBuffer.isView(potentialBuffer)) {
            return Buffer.from(potentialBuffer.buffer, potentialBuffer.byteOffset, potentialBuffer.byteLength);
        }
        const stringTag = potentialBuffer?.[Symbol.toStringTag] ?? Object.prototype.toString.call(potentialBuffer);
        if (stringTag === 'ArrayBuffer' ||
            stringTag === 'SharedArrayBuffer' ||
            stringTag === '[object ArrayBuffer]' ||
            stringTag === '[object SharedArrayBuffer]') {
            return Buffer.from(potentialBuffer);
        }
        throw new BSONError(`Cannot create Buffer from the passed potentialBuffer.`);
    },
    allocate(size) {
        return Buffer.alloc(size);
    },
    allocateUnsafe(size) {
        return Buffer.allocUnsafe(size);
    },
    equals(a, b) {
        return nodeJsByteUtils.toLocalBufferType(a).equals(b);
    },
    fromNumberArray(array) {
        return Buffer.from(array);
    },
    fromBase64(base64) {
        return Buffer.from(base64, 'base64');
    },
    toBase64(buffer) {
        return nodeJsByteUtils.toLocalBufferType(buffer).toString('base64');
    },
    fromISO88591(codePoints) {
        return Buffer.from(codePoints, 'binary');
    },
    toISO88591(buffer) {
        return nodeJsByteUtils.toLocalBufferType(buffer).toString('binary');
    },
    fromHex(hex) {
        return Buffer.from(hex, 'hex');
    },
    toHex(buffer) {
        return nodeJsByteUtils.toLocalBufferType(buffer).toString('hex');
    },
    toUTF8(buffer, start, end, fatal) {
        const basicLatin = end - start <= 20 ? tryReadBasicLatin(buffer, start, end) : null;
        if (basicLatin != null) {
            return basicLatin;
        }
        const string = nodeJsByteUtils.toLocalBufferType(buffer).toString('utf8', start, end);
        if (fatal) {
            for (let i = 0; i < string.length; i++) {
                if (string.charCodeAt(i) === 0xfffd) {
                    parseUtf8(buffer, start, end, true);
                    break;
                }
            }
        }
        return string;
    },
    utf8ByteLength(input) {
        return Buffer.byteLength(input, 'utf8');
    },
    encodeUTF8Into(buffer, source, byteOffset) {
        const latinBytesWritten = tryWriteBasicLatin(buffer, source, byteOffset);
        if (latinBytesWritten != null) {
            return latinBytesWritten;
        }
        return nodeJsByteUtils.toLocalBufferType(buffer).write(source, byteOffset, undefined, 'utf8');
    },
    randomBytes: nodejsRandomBytes,
    swap32(buffer) {
        return nodeJsByteUtils.toLocalBufferType(buffer).swap32();
    }
};

function isReactNative() {
    const { navigator } = globalThis;
    return typeof navigator === 'object' && navigator.product === 'ReactNative';
}
function webMathRandomBytes(byteLength) {
    if (byteLength < 0) {
        throw new RangeError(`The argument 'byteLength' is invalid. Received ${byteLength}`);
    }
    return webByteUtils.fromNumberArray(Array.from({ length: byteLength }, () => Math.floor(Math.random() * 256)));
}
const webRandomBytes = (() => {
    const { crypto } = globalThis;
    if (crypto != null && typeof crypto.getRandomValues === 'function') {
        return (byteLength) => {
            return crypto.getRandomValues(webByteUtils.allocate(byteLength));
        };
    }
    else {
        if (isReactNative()) {
            const { console } = globalThis;
            console?.warn?.('BSON: For React Native please polyfill crypto.getRandomValues, e.g. using: https://www.npmjs.com/package/react-native-get-random-values.');
        }
        return webMathRandomBytes;
    }
})();
const HEX_DIGIT = /(\d|[a-f])/i;
const webByteUtils = {
    toLocalBufferType(potentialUint8array) {
        const stringTag = potentialUint8array?.[Symbol.toStringTag] ??
            Object.prototype.toString.call(potentialUint8array);
        if (stringTag === 'Uint8Array') {
            return potentialUint8array;
        }
        if (ArrayBuffer.isView(potentialUint8array)) {
            return new Uint8Array(potentialUint8array.buffer.slice(potentialUint8array.byteOffset, potentialUint8array.byteOffset + potentialUint8array.byteLength));
        }
        if (stringTag === 'ArrayBuffer' ||
            stringTag === 'SharedArrayBuffer' ||
            stringTag === '[object ArrayBuffer]' ||
            stringTag === '[object SharedArrayBuffer]') {
            return new Uint8Array(potentialUint8array);
        }
        throw new BSONError(`Cannot make a Uint8Array from passed potentialBuffer.`);
    },
    allocate(size) {
        if (typeof size !== 'number') {
            throw new TypeError(`The "size" argument must be of type number. Received ${String(size)}`);
        }
        return new Uint8Array(size);
    },
    allocateUnsafe(size) {
        return webByteUtils.allocate(size);
    },
    equals(a, b) {
        if (a.byteLength !== b.byteLength) {
            return false;
        }
        for (let i = 0; i < a.byteLength; i++) {
            if (a[i] !== b[i]) {
                return false;
            }
        }
        return true;
    },
    fromNumberArray(array) {
        return Uint8Array.from(array);
    },
    fromBase64(base64) {
        return Uint8Array.from(atob(base64), c => c.charCodeAt(0));
    },
    toBase64(uint8array) {
        return btoa(webByteUtils.toISO88591(uint8array));
    },
    fromISO88591(codePoints) {
        return Uint8Array.from(codePoints, c => c.charCodeAt(0) & 0xff);
    },
    toISO88591(uint8array) {
        return Array.from(Uint16Array.from(uint8array), b => String.fromCharCode(b)).join('');
    },
    fromHex(hex) {
        const evenLengthHex = hex.length % 2 === 0 ? hex : hex.slice(0, hex.length - 1);
        const buffer = [];
        for (let i = 0; i < evenLengthHex.length; i += 2) {
            const firstDigit = evenLengthHex[i];
            const secondDigit = evenLengthHex[i + 1];
            if (!HEX_DIGIT.test(firstDigit)) {
                break;
            }
            if (!HEX_DIGIT.test(secondDigit)) {
                break;
            }
            const hexDigit = Number.parseInt(`${firstDigit}${secondDigit}`, 16);
            buffer.push(hexDigit);
        }
        return Uint8Array.from(buffer);
    },
    toHex(uint8array) {
        return Array.from(uint8array, byte => byte.toString(16).padStart(2, '0')).join('');
    },
    toUTF8(uint8array, start, end, fatal) {
        const basicLatin = end - start <= 20 ? tryReadBasicLatin(uint8array, start, end) : null;
        if (basicLatin != null) {
            return basicLatin;
        }
        return parseUtf8(uint8array, start, end, fatal);
    },
    utf8ByteLength(input) {
        return new TextEncoder().encode(input).byteLength;
    },
    encodeUTF8Into(uint8array, source, byteOffset) {
        const bytes = new TextEncoder().encode(source);
        uint8array.set(bytes, byteOffset);
        return bytes.byteLength;
    },
    randomBytes: webRandomBytes,
    swap32(buffer) {
        if (buffer.length % 4 !== 0) {
            throw new RangeError('Buffer size must be a multiple of 32-bits');
        }
        for (let i = 0; i < buffer.length; i += 4) {
            const byte0 = buffer[i];
            const byte1 = buffer[i + 1];
            const byte2 = buffer[i + 2];
            const byte3 = buffer[i + 3];
            buffer[i] = byte3;
            buffer[i + 1] = byte2;
            buffer[i + 2] = byte1;
            buffer[i + 3] = byte0;
        }
        return buffer;
    }
};

const hasGlobalBuffer = typeof Buffer === 'function' && Buffer.prototype?._isBuffer !== true;
const ByteUtils = hasGlobalBuffer ? nodeJsByteUtils : webByteUtils;

class BSONValue {
    get [BSON_VERSION_SYMBOL]() {
        return BSON_MAJOR_VERSION;
    }
    [Symbol.for('nodejs.util.inspect.custom')](depth, options, inspect) {
        return this.inspect(depth, options, inspect);
    }
}

const FLOAT = new Float64Array(1);
const FLOAT_BYTES = new Uint8Array(FLOAT.buffer, 0, 8);
FLOAT[0] = -1;
const isBigEndian = FLOAT_BYTES[7] === 0;
const NumberUtils = {
    isBigEndian,
    getNonnegativeInt32LE(source, offset) {
        if (source[offset + 3] > 127) {
            throw new RangeError(`Size cannot be negative at offset: ${offset}`);
        }
        return (source[offset] |
            (source[offset + 1] << 8) |
            (source[offset + 2] << 16) |
            (source[offset + 3] << 24));
    },
    getInt32LE(source, offset) {
        return (source[offset] |
            (source[offset + 1] << 8) |
            (source[offset + 2] << 16) |
            (source[offset + 3] << 24));
    },
    getUint32LE(source, offset) {
        return (source[offset] +
            source[offset + 1] * 256 +
            source[offset + 2] * 65536 +
            source[offset + 3] * 16777216);
    },
    getUint32BE(source, offset) {
        return (source[offset + 3] +
            source[offset + 2] * 256 +
            source[offset + 1] * 65536 +
            source[offset] * 16777216);
    },
    getBigInt64LE(source, offset) {
        const hi = BigInt(source[offset + 4] +
            source[offset + 5] * 256 +
            source[offset + 6] * 65536 +
            (source[offset + 7] << 24));
        const lo = BigInt(source[offset] +
            source[offset + 1] * 256 +
            source[offset + 2] * 65536 +
            source[offset + 3] * 16777216);
        return (hi << BigInt(32)) + lo;
    },
    getFloat64LE: isBigEndian
        ? (source, offset) => {
            FLOAT_BYTES[7] = source[offset];
            FLOAT_BYTES[6] = source[offset + 1];
            FLOAT_BYTES[5] = source[offset + 2];
            FLOAT_BYTES[4] = source[offset + 3];
            FLOAT_BYTES[3] = source[offset + 4];
            FLOAT_BYTES[2] = source[offset + 5];
            FLOAT_BYTES[1] = source[offset + 6];
            FLOAT_BYTES[0] = source[offset + 7];
            return FLOAT[0];
        }
        : (source, offset) => {
            FLOAT_BYTES[0] = source[offset];
            FLOAT_BYTES[1] = source[offset + 1];
            FLOAT_BYTES[2] = source[offset + 2];
            FLOAT_BYTES[3] = source[offset + 3];
            FLOAT_BYTES[4] = source[offset + 4];
            FLOAT_BYTES[5] = source[offset + 5];
            FLOAT_BYTES[6] = source[offset + 6];
            FLOAT_BYTES[7] = source[offset + 7];
            return FLOAT[0];
        },
    setInt32BE(destination, offset, value) {
        destination[offset + 3] = value;
        value >>>= 8;
        destination[offset + 2] = value;
        value >>>= 8;
        destination[offset + 1] = value;
        value >>>= 8;
        destination[offset] = value;
        return 4;
    },
    setInt32LE(destination, offset, value) {
        destination[offset] = value;
        value >>>= 8;
        destination[offset + 1] = value;
        value >>>= 8;
        destination[offset + 2] = value;
        value >>>= 8;
        destination[offset + 3] = value;
        return 4;
    },
    setBigInt64LE(destination, offset, value) {
        const mask32bits = BigInt(0xffff_ffff);
        let lo = Number(value & mask32bits);
        destination[offset] = lo;
        lo >>= 8;
        destination[offset + 1] = lo;
        lo >>= 8;
        destination[offset + 2] = lo;
        lo >>= 8;
        destination[offset + 3] = lo;
        let hi = Number((value >> BigInt(32)) & mask32bits);
        destination[offset + 4] = hi;
        hi >>= 8;
        destination[offset + 5] = hi;
        hi >>= 8;
        destination[offset + 6] = hi;
        hi >>= 8;
        destination[offset + 7] = hi;
        return 8;
    },
    setFloat64LE: isBigEndian
        ? (destination, offset, value) => {
            FLOAT[0] = value;
            destination[offset] = FLOAT_BYTES[7];
            destination[offset + 1] = FLOAT_BYTES[6];
            destination[offset + 2] = FLOAT_BYTES[5];
            destination[offset + 3] = FLOAT_BYTES[4];
            destination[offset + 4] = FLOAT_BYTES[3];
            destination[offset + 5] = FLOAT_BYTES[2];
            destination[offset + 6] = FLOAT_BYTES[1];
            destination[offset + 7] = FLOAT_BYTES[0];
            return 8;
        }
        : (destination, offset, value) => {
            FLOAT[0] = value;
            destination[offset] = FLOAT_BYTES[0];
            destination[offset + 1] = FLOAT_BYTES[1];
            destination[offset + 2] = FLOAT_BYTES[2];
            destination[offset + 3] = FLOAT_BYTES[3];
            destination[offset + 4] = FLOAT_BYTES[4];
            destination[offset + 5] = FLOAT_BYTES[5];
            destination[offset + 6] = FLOAT_BYTES[6];
            destination[offset + 7] = FLOAT_BYTES[7];
            return 8;
        }
};

class Binary extends BSONValue {
    get _bsontype() {
        return 'Binary';
    }
    constructor(buffer, subType) {
        super();
        if (!(buffer == null) &&
            typeof buffer === 'string' &&
            !ArrayBuffer.isView(buffer) &&
            !isAnyArrayBuffer(buffer) &&
            !Array.isArray(buffer)) {
            throw new BSONError('Binary can only be constructed from Uint8Array or number[]');
        }
        this.sub_type = subType ?? Binary.BSON_BINARY_SUBTYPE_DEFAULT;
        if (buffer == null) {
            this.buffer = ByteUtils.allocate(Binary.BUFFER_SIZE);
            this.position = 0;
        }
        else {
            this.buffer = Array.isArray(buffer)
                ? ByteUtils.fromNumberArray(buffer)
                : ByteUtils.toLocalBufferType(buffer);
            this.position = this.buffer.byteLength;
        }
    }
    put(byteValue) {
        if (typeof byteValue === 'string' && byteValue.length !== 1) {
            throw new BSONError('only accepts single character String');
        }
        else if (typeof byteValue !== 'number' && byteValue.length !== 1)
            throw new BSONError('only accepts single character Uint8Array or Array');
        let decodedByte;
        if (typeof byteValue === 'string') {
            decodedByte = byteValue.charCodeAt(0);
        }
        else if (typeof byteValue === 'number') {
            decodedByte = byteValue;
        }
        else {
            decodedByte = byteValue[0];
        }
        if (decodedByte < 0 || decodedByte > 255) {
            throw new BSONError('only accepts number in a valid unsigned byte range 0-255');
        }
        if (this.buffer.byteLength > this.position) {
            this.buffer[this.position++] = decodedByte;
        }
        else {
            const newSpace = ByteUtils.allocate(Binary.BUFFER_SIZE + this.buffer.length);
            newSpace.set(this.buffer, 0);
            this.buffer = newSpace;
            this.buffer[this.position++] = decodedByte;
        }
    }
    write(sequence, offset) {
        offset = typeof offset === 'number' ? offset : this.position;
        if (this.buffer.byteLength < offset + sequence.length) {
            const newSpace = ByteUtils.allocate(this.buffer.byteLength + sequence.length);
            newSpace.set(this.buffer, 0);
            this.buffer = newSpace;
        }
        if (ArrayBuffer.isView(sequence)) {
            this.buffer.set(ByteUtils.toLocalBufferType(sequence), offset);
            this.position =
                offset + sequence.byteLength > this.position ? offset + sequence.length : this.position;
        }
        else if (typeof sequence === 'string') {
            throw new BSONError('input cannot be string');
        }
    }
    read(position, length) {
        length = length && length > 0 ? length : this.position;
        const end = position + length;
        return this.buffer.subarray(position, end > this.position ? this.position : end);
    }
    value() {
        return this.buffer.length === this.position
            ? this.buffer
            : this.buffer.subarray(0, this.position);
    }
    length() {
        return this.position;
    }
    toJSON() {
        return ByteUtils.toBase64(this.buffer.subarray(0, this.position));
    }
    toString(encoding) {
        if (encoding === 'hex')
            return ByteUtils.toHex(this.buffer.subarray(0, this.position));
        if (encoding === 'base64')
            return ByteUtils.toBase64(this.buffer.subarray(0, this.position));
        if (encoding === 'utf8' || encoding === 'utf-8')
            return ByteUtils.toUTF8(this.buffer, 0, this.position, false);
        return ByteUtils.toUTF8(this.buffer, 0, this.position, false);
    }
    toExtendedJSON(options) {
        options = options || {};
        if (this.sub_type === Binary.SUBTYPE_VECTOR) {
            validateBinaryVector(this);
        }
        const base64String = ByteUtils.toBase64(this.buffer);
        const subType = Number(this.sub_type).toString(16);
        if (options.legacy) {
            return {
                $binary: base64String,
                $type: subType.length === 1 ? '0' + subType : subType
            };
        }
        return {
            $binary: {
                base64: base64String,
                subType: subType.length === 1 ? '0' + subType : subType
            }
        };
    }
    toUUID() {
        if (this.sub_type === Binary.SUBTYPE_UUID) {
            return new UUID(this.buffer.subarray(0, this.position));
        }
        throw new BSONError(`Binary sub_type "${this.sub_type}" is not supported for converting to UUID. Only "${Binary.SUBTYPE_UUID}" is currently supported.`);
    }
    static createFromHexString(hex, subType) {
        return new Binary(ByteUtils.fromHex(hex), subType);
    }
    static createFromBase64(base64, subType) {
        return new Binary(ByteUtils.fromBase64(base64), subType);
    }
    static fromExtendedJSON(doc, options) {
        options = options || {};
        let data;
        let type;
        if ('$binary' in doc) {
            if (options.legacy && typeof doc.$binary === 'string' && '$type' in doc) {
                type = doc.$type ? parseInt(doc.$type, 16) : 0;
                data = ByteUtils.fromBase64(doc.$binary);
            }
            else {
                if (typeof doc.$binary !== 'string') {
                    type = doc.$binary.subType ? parseInt(doc.$binary.subType, 16) : 0;
                    data = ByteUtils.fromBase64(doc.$binary.base64);
                }
            }
        }
        else if ('$uuid' in doc) {
            type = 4;
            data = UUID.bytesFromString(doc.$uuid);
        }
        if (!data) {
            throw new BSONError(`Unexpected Binary Extended JSON format ${JSON.stringify(doc)}`);
        }
        return type === BSON_BINARY_SUBTYPE_UUID_NEW ? new UUID(data) : new Binary(data, type);
    }
    inspect(depth, options, inspect) {
        inspect ??= defaultInspect;
        const base64 = ByteUtils.toBase64(this.buffer.subarray(0, this.position));
        const base64Arg = inspect(base64, options);
        const subTypeArg = inspect(this.sub_type, options);
        return `Binary.createFromBase64(${base64Arg}, ${subTypeArg})`;
    }
    toInt8Array() {
        if (this.sub_type !== Binary.SUBTYPE_VECTOR) {
            throw new BSONError('Binary sub_type is not Vector');
        }
        if (this.buffer[0] !== Binary.VECTOR_TYPE.Int8) {
            throw new BSONError('Binary datatype field is not Int8');
        }
        validateBinaryVector(this);
        return new Int8Array(this.buffer.buffer.slice(this.buffer.byteOffset + 2, this.buffer.byteOffset + this.position));
    }
    toFloat32Array() {
        if (this.sub_type !== Binary.SUBTYPE_VECTOR) {
            throw new BSONError('Binary sub_type is not Vector');
        }
        if (this.buffer[0] !== Binary.VECTOR_TYPE.Float32) {
            throw new BSONError('Binary datatype field is not Float32');
        }
        validateBinaryVector(this);
        const floatBytes = new Uint8Array(this.buffer.buffer.slice(this.buffer.byteOffset + 2, this.buffer.byteOffset + this.position));
        if (NumberUtils.isBigEndian)
            ByteUtils.swap32(floatBytes);
        return new Float32Array(floatBytes.buffer);
    }
    toPackedBits() {
        if (this.sub_type !== Binary.SUBTYPE_VECTOR) {
            throw new BSONError('Binary sub_type is not Vector');
        }
        if (this.buffer[0] !== Binary.VECTOR_TYPE.PackedBit) {
            throw new BSONError('Binary datatype field is not packed bit');
        }
        validateBinaryVector(this);
        return new Uint8Array(this.buffer.buffer.slice(this.buffer.byteOffset + 2, this.buffer.byteOffset + this.position));
    }
    toBits() {
        if (this.sub_type !== Binary.SUBTYPE_VECTOR) {
            throw new BSONError('Binary sub_type is not Vector');
        }
        if (this.buffer[0] !== Binary.VECTOR_TYPE.PackedBit) {
            throw new BSONError('Binary datatype field is not packed bit');
        }
        validateBinaryVector(this);
        const byteCount = this.length() - 2;
        const bitCount = byteCount * 8 - this.buffer[1];
        const bits = new Int8Array(bitCount);
        for (let bitOffset = 0; bitOffset < bits.length; bitOffset++) {
            const byteOffset = (bitOffset / 8) | 0;
            const byte = this.buffer[byteOffset + 2];
            const shift = 7 - (bitOffset % 8);
            const bit = (byte >> shift) & 1;
            bits[bitOffset] = bit;
        }
        return bits;
    }
    static fromInt8Array(array) {
        const buffer = ByteUtils.allocate(array.byteLength + 2);
        buffer[0] = Binary.VECTOR_TYPE.Int8;
        buffer[1] = 0;
        const intBytes = new Uint8Array(array.buffer, array.byteOffset, array.byteLength);
        buffer.set(intBytes, 2);
        const bin = new this(buffer, this.SUBTYPE_VECTOR);
        validateBinaryVector(bin);
        return bin;
    }
    static fromFloat32Array(array) {
        const binaryBytes = ByteUtils.allocate(array.byteLength + 2);
        binaryBytes[0] = Binary.VECTOR_TYPE.Float32;
        binaryBytes[1] = 0;
        const floatBytes = new Uint8Array(array.buffer, array.byteOffset, array.byteLength);
        binaryBytes.set(floatBytes, 2);
        if (NumberUtils.isBigEndian)
            ByteUtils.swap32(new Uint8Array(binaryBytes.buffer, 2));
        const bin = new this(binaryBytes, this.SUBTYPE_VECTOR);
        validateBinaryVector(bin);
        return bin;
    }
    static fromPackedBits(array, padding = 0) {
        const buffer = ByteUtils.allocate(array.byteLength + 2);
        buffer[0] = Binary.VECTOR_TYPE.PackedBit;
        buffer[1] = padding;
        buffer.set(array, 2);
        const bin = new this(buffer, this.SUBTYPE_VECTOR);
        validateBinaryVector(bin);
        return bin;
    }
    static fromBits(bits) {
        const byteLength = (bits.length + 7) >>> 3;
        const bytes = new Uint8Array(byteLength + 2);
        bytes[0] = Binary.VECTOR_TYPE.PackedBit;
        const remainder = bits.length % 8;
        bytes[1] = remainder === 0 ? 0 : 8 - remainder;
        for (let bitOffset = 0; bitOffset < bits.length; bitOffset++) {
            const byteOffset = bitOffset >>> 3;
            const bit = bits[bitOffset];
            if (bit !== 0 && bit !== 1) {
                throw new BSONError(`Invalid bit value at ${bitOffset}: must be 0 or 1, found ${bits[bitOffset]}`);
            }
            if (bit === 0)
                continue;
            const shift = 7 - (bitOffset % 8);
            bytes[byteOffset + 2] |= bit << shift;
        }
        return new this(bytes, Binary.SUBTYPE_VECTOR);
    }
}
Binary.BSON_BINARY_SUBTYPE_DEFAULT = 0;
Binary.BUFFER_SIZE = 256;
Binary.SUBTYPE_DEFAULT = 0;
Binary.SUBTYPE_FUNCTION = 1;
Binary.SUBTYPE_BYTE_ARRAY = 2;
Binary.SUBTYPE_UUID_OLD = 3;
Binary.SUBTYPE_UUID = 4;
Binary.SUBTYPE_MD5 = 5;
Binary.SUBTYPE_ENCRYPTED = 6;
Binary.SUBTYPE_COLUMN = 7;
Binary.SUBTYPE_SENSITIVE = 8;
Binary.SUBTYPE_VECTOR = 9;
Binary.SUBTYPE_USER_DEFINED = 128;
Binary.VECTOR_TYPE = Object.freeze({
    Int8: 0x03,
    Float32: 0x27,
    PackedBit: 0x10
});
function validateBinaryVector(vector) {
    if (vector.sub_type !== Binary.SUBTYPE_VECTOR)
        return;
    const size = vector.position;
    const datatype = vector.buffer[0];
    const padding = vector.buffer[1];
    if ((datatype === Binary.VECTOR_TYPE.Float32 || datatype === Binary.VECTOR_TYPE.Int8) &&
        padding !== 0) {
        throw new BSONError('Invalid Vector: padding must be zero for int8 and float32 vectors');
    }
    if (datatype === Binary.VECTOR_TYPE.Float32) {
        if (size !== 0 && size - 2 !== 0 && (size - 2) % 4 !== 0) {
            throw new BSONError('Invalid Vector: Float32 vector must contain a multiple of 4 bytes');
        }
    }
    if (datatype === Binary.VECTOR_TYPE.PackedBit && padding !== 0 && size === 2) {
        throw new BSONError('Invalid Vector: padding must be zero for packed bit vectors that are empty');
    }
    if (datatype === Binary.VECTOR_TYPE.PackedBit && padding > 7) {
        throw new BSONError(`Invalid Vector: padding must be a value between 0 and 7. found: ${padding}`);
    }
}
const UUID_BYTE_LENGTH = 16;
const UUID_WITHOUT_DASHES = /^[0-9A-F]{32}$/i;
const UUID_WITH_DASHES = /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i;
class UUID extends Binary {
    constructor(input) {
        let bytes;
        if (input == null) {
            bytes = UUID.generate();
        }
        else if (input instanceof UUID) {
            bytes = ByteUtils.toLocalBufferType(new Uint8Array(input.buffer));
        }
        else if (ArrayBuffer.isView(input) && input.byteLength === UUID_BYTE_LENGTH) {
            bytes = ByteUtils.toLocalBufferType(input);
        }
        else if (typeof input === 'string') {
            bytes = UUID.bytesFromString(input);
        }
        else {
            throw new BSONError('Argument passed in UUID constructor must be a UUID, a 16 byte Buffer or a 32/36 character hex string (dashes excluded/included, format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx).');
        }
        super(bytes, BSON_BINARY_SUBTYPE_UUID_NEW);
    }
    get id() {
        return this.buffer;
    }
    set id(value) {
        this.buffer = value;
    }
    toHexString(includeDashes = true) {
        if (includeDashes) {
            return [
                ByteUtils.toHex(this.buffer.subarray(0, 4)),
                ByteUtils.toHex(this.buffer.subarray(4, 6)),
                ByteUtils.toHex(this.buffer.subarray(6, 8)),
                ByteUtils.toHex(this.buffer.subarray(8, 10)),
                ByteUtils.toHex(this.buffer.subarray(10, 16))
            ].join('-');
        }
        return ByteUtils.toHex(this.buffer);
    }
    toString(encoding) {
        if (encoding === 'hex')
            return ByteUtils.toHex(this.id);
        if (encoding === 'base64')
            return ByteUtils.toBase64(this.id);
        return this.toHexString();
    }
    toJSON() {
        return this.toHexString();
    }
    equals(otherId) {
        if (!otherId) {
            return false;
        }
        if (otherId instanceof UUID) {
            return ByteUtils.equals(otherId.id, this.id);
        }
        try {
            return ByteUtils.equals(new UUID(otherId).id, this.id);
        }
        catch {
            return false;
        }
    }
    toBinary() {
        return new Binary(this.id, Binary.SUBTYPE_UUID);
    }
    static generate() {
        const bytes = ByteUtils.randomBytes(UUID_BYTE_LENGTH);
        bytes[6] = (bytes[6] & 0x0f) | 0x40;
        bytes[8] = (bytes[8] & 0x3f) | 0x80;
        return bytes;
    }
    static isValid(input) {
        if (!input) {
            return false;
        }
        if (typeof input === 'string') {
            return UUID.isValidUUIDString(input);
        }
        if (isUint8Array(input)) {
            return input.byteLength === UUID_BYTE_LENGTH;
        }
        return (input._bsontype === 'Binary' &&
            input.sub_type === this.SUBTYPE_UUID &&
            input.buffer.byteLength === 16);
    }
    static createFromHexString(hexString) {
        const buffer = UUID.bytesFromString(hexString);
        return new UUID(buffer);
    }
    static createFromBase64(base64) {
        return new UUID(ByteUtils.fromBase64(base64));
    }
    static bytesFromString(representation) {
        if (!UUID.isValidUUIDString(representation)) {
            throw new BSONError('UUID string representation must be 32 hex digits or canonical hyphenated representation');
        }
        return ByteUtils.fromHex(representation.replace(/-/g, ''));
    }
    static isValidUUIDString(representation) {
        return UUID_WITHOUT_DASHES.test(representation) || UUID_WITH_DASHES.test(representation);
    }
    inspect(depth, options, inspect) {
        inspect ??= defaultInspect;
        return `new UUID(${inspect(this.toHexString(), options)})`;
    }
}

class Code extends BSONValue {
    get _bsontype() {
        return 'Code';
    }
    constructor(code, scope) {
        super();
        this.code = code.toString();
        this.scope = scope ?? null;
    }
    toJSON() {
        if (this.scope != null) {
            return { code: this.code, scope: this.scope };
        }
        return { code: this.code };
    }
    toExtendedJSON() {
        if (this.scope) {
            return { $code: this.code, $scope: this.scope };
        }
        return { $code: this.code };
    }
    static fromExtendedJSON(doc) {
        return new Code(doc.$code, doc.$scope);
    }
    inspect(depth, options, inspect) {
        inspect ??= defaultInspect;
        let parametersString = inspect(this.code, options);
        const multiLineFn = parametersString.includes('\n');
        if (this.scope != null) {
            parametersString += `,${multiLineFn ? '\n' : ' '}${inspect(this.scope, options)}`;
        }
        const endingNewline = multiLineFn && this.scope === null;
        return `new Code(${multiLineFn ? '\n' : ''}${parametersString}${endingNewline ? '\n' : ''})`;
    }
}

function isDBRefLike(value) {
    return (value != null &&
        typeof value === 'object' &&
        '$id' in value &&
        value.$id != null &&
        '$ref' in value &&
        typeof value.$ref === 'string' &&
        (!('$db' in value) || ('$db' in value && typeof value.$db === 'string')));
}
class DBRef extends BSONValue {
    get _bsontype() {
        return 'DBRef';
    }
    constructor(collection, oid, db, fields) {
        super();
        const parts = collection.split('.');
        if (parts.length === 2) {
            db = parts.shift();
            collection = parts.shift();
        }
        this.collection = collection;
        this.oid = oid;
        this.db = db;
        this.fields = fields || {};
    }
    get namespace() {
        return this.collection;
    }
    set namespace(value) {
        this.collection = value;
    }
    toJSON() {
        const o = Object.assign({
            $ref: this.collection,
            $id: this.oid
        }, this.fields);
        if (this.db != null)
            o.$db = this.db;
        return o;
    }
    toExtendedJSON(options) {
        options = options || {};
        let o = {
            $ref: this.collection,
            $id: this.oid
        };
        if (options.legacy) {
            return o;
        }
        if (this.db)
            o.$db = this.db;
        o = Object.assign(o, this.fields);
        return o;
    }
    static fromExtendedJSON(doc) {
        const copy = Object.assign({}, doc);
        delete copy.$ref;
        delete copy.$id;
        delete copy.$db;
        return new DBRef(doc.$ref, doc.$id, doc.$db, copy);
    }
    inspect(depth, options, inspect) {
        inspect ??= defaultInspect;
        const args = [
            inspect(this.namespace, options),
            inspect(this.oid, options),
            ...(this.db ? [inspect(this.db, options)] : []),
            ...(Object.keys(this.fields).length > 0 ? [inspect(this.fields, options)] : [])
        ];
        args[1] = inspect === defaultInspect ? `new ObjectId(${args[1]})` : args[1];
        return `new DBRef(${args.join(', ')})`;
    }
}

function removeLeadingZerosAndExplicitPlus(str) {
    if (str === '') {
        return str;
    }
    let startIndex = 0;
    const isNegative = str[startIndex] === '-';
    const isExplicitlyPositive = str[startIndex] === '+';
    if (isExplicitlyPositive || isNegative) {
        startIndex += 1;
    }
    let foundInsignificantZero = false;
    for (; startIndex < str.length && str[startIndex] === '0'; ++startIndex) {
        foundInsignificantZero = true;
    }
    if (!foundInsignificantZero) {
        return isExplicitlyPositive ? str.slice(1) : str;
    }
    return `${isNegative ? '-' : ''}${str.length === startIndex ? '0' : str.slice(startIndex)}`;
}
function validateStringCharacters(str, radix) {
    radix = radix ?? 10;
    const validCharacters = '0123456789abcdefghijklmnopqrstuvwxyz'.slice(0, radix);
    const regex = new RegExp(`[^-+${validCharacters}]`, 'i');
    return regex.test(str) ? false : str;
}

let wasm = undefined;
try {
    wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
}
catch {
}
const TWO_PWR_16_DBL = 1 << 16;
const TWO_PWR_24_DBL = 1 << 24;
const TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
const TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;
const TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;
const INT_CACHE = {};
const UINT_CACHE = {};
const MAX_INT64_STRING_LENGTH = 20;
const DECIMAL_REG_EX = /^(\+?0|(\+|-)?[1-9][0-9]*)$/;
class Long extends BSONValue {
    get _bsontype() {
        return 'Long';
    }
    get __isLong__() {
        return true;
    }
    constructor(lowOrValue = 0, highOrUnsigned, unsigned) {
        super();
        const unsignedBool = typeof highOrUnsigned === 'boolean' ? highOrUnsigned : Boolean(unsigned);
        const high = typeof highOrUnsigned === 'number' ? highOrUnsigned : 0;
        const res = typeof lowOrValue === 'string'
            ? Long.fromString(lowOrValue, unsignedBool)
            : typeof lowOrValue === 'bigint'
                ? Long.fromBigInt(lowOrValue, unsignedBool)
                : { low: lowOrValue | 0, high: high | 0, unsigned: unsignedBool };
        this.low = res.low;
        this.high = res.high;
        this.unsigned = res.unsigned;
    }
    static fromBits(lowBits, highBits, unsigned) {
        return new Long(lowBits, highBits, unsigned);
    }
    static fromInt(value, unsigned) {
        let obj, cachedObj, cache;
        if (unsigned) {
            value >>>= 0;
            if ((cache = 0 <= value && value < 256)) {
                cachedObj = UINT_CACHE[value];
                if (cachedObj)
                    return cachedObj;
            }
            obj = Long.fromBits(value, (value | 0) < 0 ? -1 : 0, true);
            if (cache)
                UINT_CACHE[value] = obj;
            return obj;
        }
        else {
            value |= 0;
            if ((cache = -128 <= value && value < 128)) {
                cachedObj = INT_CACHE[value];
                if (cachedObj)
                    return cachedObj;
            }
            obj = Long.fromBits(value, value < 0 ? -1 : 0, false);
            if (cache)
                INT_CACHE[value] = obj;
            return obj;
        }
    }
    static fromNumber(value, unsigned) {
        if (isNaN(value))
            return unsigned ? Long.UZERO : Long.ZERO;
        if (unsigned) {
            if (value < 0)
                return Long.UZERO;
            if (value >= TWO_PWR_64_DBL)
                return Long.MAX_UNSIGNED_VALUE;
        }
        else {
            if (value <= -9223372036854776e3)
                return Long.MIN_VALUE;
            if (value + 1 >= TWO_PWR_63_DBL)
                return Long.MAX_VALUE;
        }
        if (value < 0)
            return Long.fromNumber(-value, unsigned).neg();
        return Long.fromBits(value % TWO_PWR_32_DBL | 0, (value / TWO_PWR_32_DBL) | 0, unsigned);
    }
    static fromBigInt(value, unsigned) {
        const FROM_BIGINT_BIT_MASK = BigInt(0xffffffff);
        const FROM_BIGINT_BIT_SHIFT = BigInt(32);
        return new Long(Number(value & FROM_BIGINT_BIT_MASK), Number((value >> FROM_BIGINT_BIT_SHIFT) & FROM_BIGINT_BIT_MASK), unsigned);
    }
    static _fromString(str, unsigned, radix) {
        if (str.length === 0)
            throw new BSONError('empty string');
        if (radix < 2 || 36 < radix)
            throw new BSONError('radix');
        let p;
        if ((p = str.indexOf('-')) > 0)
            throw new BSONError('interior hyphen');
        else if (p === 0) {
            return Long._fromString(str.substring(1), unsigned, radix).neg();
        }
        const radixToPower = Long.fromNumber(Math.pow(radix, 8));
        let result = Long.ZERO;
        for (let i = 0; i < str.length; i += 8) {
            const size = Math.min(8, str.length - i), value = parseInt(str.substring(i, i + size), radix);
            if (size < 8) {
                const power = Long.fromNumber(Math.pow(radix, size));
                result = result.mul(power).add(Long.fromNumber(value));
            }
            else {
                result = result.mul(radixToPower);
                result = result.add(Long.fromNumber(value));
            }
        }
        result.unsigned = unsigned;
        return result;
    }
    static fromStringStrict(str, unsignedOrRadix, radix) {
        let unsigned = false;
        if (typeof unsignedOrRadix === 'number') {
            (radix = unsignedOrRadix), (unsignedOrRadix = false);
        }
        else {
            unsigned = !!unsignedOrRadix;
        }
        radix ??= 10;
        if (str.trim() !== str) {
            throw new BSONError(`Input: '${str}' contains leading and/or trailing whitespace`);
        }
        if (!validateStringCharacters(str, radix)) {
            throw new BSONError(`Input: '${str}' contains invalid characters for radix: ${radix}`);
        }
        const cleanedStr = removeLeadingZerosAndExplicitPlus(str);
        const result = Long._fromString(cleanedStr, unsigned, radix);
        if (result.toString(radix).toLowerCase() !== cleanedStr.toLowerCase()) {
            throw new BSONError(`Input: ${str} is not representable as ${result.unsigned ? 'an unsigned' : 'a signed'} 64-bit Long ${radix != null ? `with radix: ${radix}` : ''}`);
        }
        return result;
    }
    static fromString(str, unsignedOrRadix, radix) {
        let unsigned = false;
        if (typeof unsignedOrRadix === 'number') {
            (radix = unsignedOrRadix), (unsignedOrRadix = false);
        }
        else {
            unsigned = !!unsignedOrRadix;
        }
        radix ??= 10;
        if (str === 'NaN' && radix < 24) {
            return Long.ZERO;
        }
        else if ((str === 'Infinity' || str === '+Infinity' || str === '-Infinity') && radix < 35) {
            return Long.ZERO;
        }
        return Long._fromString(str, unsigned, radix);
    }
    static fromBytes(bytes, unsigned, le) {
        return le ? Long.fromBytesLE(bytes, unsigned) : Long.fromBytesBE(bytes, unsigned);
    }
    static fromBytesLE(bytes, unsigned) {
        return new Long(bytes[0] | (bytes[1] << 8) | (bytes[2] << 16) | (bytes[3] << 24), bytes[4] | (bytes[5] << 8) | (bytes[6] << 16) | (bytes[7] << 24), unsigned);
    }
    static fromBytesBE(bytes, unsigned) {
        return new Long((bytes[4] << 24) | (bytes[5] << 16) | (bytes[6] << 8) | bytes[7], (bytes[0] << 24) | (bytes[1] << 16) | (bytes[2] << 8) | bytes[3], unsigned);
    }
    static isLong(value) {
        return (value != null &&
            typeof value === 'object' &&
            '__isLong__' in value &&
            value.__isLong__ === true);
    }
    static fromValue(val, unsigned) {
        if (typeof val === 'number')
            return Long.fromNumber(val, unsigned);
        if (typeof val === 'string')
            return Long.fromString(val, unsigned);
        return Long.fromBits(val.low, val.high, typeof unsigned === 'boolean' ? unsigned : val.unsigned);
    }
    add(addend) {
        if (!Long.isLong(addend))
            addend = Long.fromValue(addend);
        const a48 = this.high >>> 16;
        const a32 = this.high & 0xffff;
        const a16 = this.low >>> 16;
        const a00 = this.low & 0xffff;
        const b48 = addend.high >>> 16;
        const b32 = addend.high & 0xffff;
        const b16 = addend.low >>> 16;
        const b00 = addend.low & 0xffff;
        let c48 = 0, c32 = 0, c16 = 0, c00 = 0;
        c00 += a00 + b00;
        c16 += c00 >>> 16;
        c00 &= 0xffff;
        c16 += a16 + b16;
        c32 += c16 >>> 16;
        c16 &= 0xffff;
        c32 += a32 + b32;
        c48 += c32 >>> 16;
        c32 &= 0xffff;
        c48 += a48 + b48;
        c48 &= 0xffff;
        return Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
    }
    and(other) {
        if (!Long.isLong(other))
            other = Long.fromValue(other);
        return Long.fromBits(this.low & other.low, this.high & other.high, this.unsigned);
    }
    compare(other) {
        if (!Long.isLong(other))
            other = Long.fromValue(other);
        if (this.eq(other))
            return 0;
        const thisNeg = this.isNegative(), otherNeg = other.isNegative();
        if (thisNeg && !otherNeg)
            return -1;
        if (!thisNeg && otherNeg)
            return 1;
        if (!this.unsigned)
            return this.sub(other).isNegative() ? -1 : 1;
        return other.high >>> 0 > this.high >>> 0 ||
            (other.high === this.high && other.low >>> 0 > this.low >>> 0)
            ? -1
            : 1;
    }
    comp(other) {
        return this.compare(other);
    }
    divide(divisor) {
        if (!Long.isLong(divisor))
            divisor = Long.fromValue(divisor);
        if (divisor.isZero())
            throw new BSONError('division by zero');
        if (wasm) {
            if (!this.unsigned &&
                this.high === -2147483648 &&
                divisor.low === -1 &&
                divisor.high === -1) {
                return this;
            }
            const low = (this.unsigned ? wasm.div_u : wasm.div_s)(this.low, this.high, divisor.low, divisor.high);
            return Long.fromBits(low, wasm.get_high(), this.unsigned);
        }
        if (this.isZero())
            return this.unsigned ? Long.UZERO : Long.ZERO;
        let approx, rem, res;
        if (!this.unsigned) {
            if (this.eq(Long.MIN_VALUE)) {
                if (divisor.eq(Long.ONE) || divisor.eq(Long.NEG_ONE))
                    return Long.MIN_VALUE;
                else if (divisor.eq(Long.MIN_VALUE))
                    return Long.ONE;
                else {
                    const halfThis = this.shr(1);
                    approx = halfThis.div(divisor).shl(1);
                    if (approx.eq(Long.ZERO)) {
                        return divisor.isNegative() ? Long.ONE : Long.NEG_ONE;
                    }
                    else {
                        rem = this.sub(divisor.mul(approx));
                        res = approx.add(rem.div(divisor));
                        return res;
                    }
                }
            }
            else if (divisor.eq(Long.MIN_VALUE))
                return this.unsigned ? Long.UZERO : Long.ZERO;
            if (this.isNegative()) {
                if (divisor.isNegative())
                    return this.neg().div(divisor.neg());
                return this.neg().div(divisor).neg();
            }
            else if (divisor.isNegative())
                return this.div(divisor.neg()).neg();
            res = Long.ZERO;
        }
        else {
            if (!divisor.unsigned)
                divisor = divisor.toUnsigned();
            if (divisor.gt(this))
                return Long.UZERO;
            if (divisor.gt(this.shru(1)))
                return Long.UONE;
            res = Long.UZERO;
        }
        rem = this;
        while (rem.gte(divisor)) {
            approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));
            const log2 = Math.ceil(Math.log(approx) / Math.LN2);
            const delta = log2 <= 48 ? 1 : Math.pow(2, log2 - 48);
            let approxRes = Long.fromNumber(approx);
            let approxRem = approxRes.mul(divisor);
            while (approxRem.isNegative() || approxRem.gt(rem)) {
                approx -= delta;
                approxRes = Long.fromNumber(approx, this.unsigned);
                approxRem = approxRes.mul(divisor);
            }
            if (approxRes.isZero())
                approxRes = Long.ONE;
            res = res.add(approxRes);
            rem = rem.sub(approxRem);
        }
        return res;
    }
    div(divisor) {
        return this.divide(divisor);
    }
    equals(other) {
        if (!Long.isLong(other))
            other = Long.fromValue(other);
        if (this.unsigned !== other.unsigned && this.high >>> 31 === 1 && other.high >>> 31 === 1)
            return false;
        return this.high === other.high && this.low === other.low;
    }
    eq(other) {
        return this.equals(other);
    }
    getHighBits() {
        return this.high;
    }
    getHighBitsUnsigned() {
        return this.high >>> 0;
    }
    getLowBits() {
        return this.low;
    }
    getLowBitsUnsigned() {
        return this.low >>> 0;
    }
    getNumBitsAbs() {
        if (this.isNegative()) {
            return this.eq(Long.MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
        }
        const val = this.high !== 0 ? this.high : this.low;
        let bit;
        for (bit = 31; bit > 0; bit--)
            if ((val & (1 << bit)) !== 0)
                break;
        return this.high !== 0 ? bit + 33 : bit + 1;
    }
    greaterThan(other) {
        return this.comp(other) > 0;
    }
    gt(other) {
        return this.greaterThan(other);
    }
    greaterThanOrEqual(other) {
        return this.comp(other) >= 0;
    }
    gte(other) {
        return this.greaterThanOrEqual(other);
    }
    ge(other) {
        return this.greaterThanOrEqual(other);
    }
    isEven() {
        return (this.low & 1) === 0;
    }
    isNegative() {
        return !this.unsigned && this.high < 0;
    }
    isOdd() {
        return (this.low & 1) === 1;
    }
    isPositive() {
        return this.unsigned || this.high >= 0;
    }
    isZero() {
        return this.high === 0 && this.low === 0;
    }
    lessThan(other) {
        return this.comp(other) < 0;
    }
    lt(other) {
        return this.lessThan(other);
    }
    lessThanOrEqual(other) {
        return this.comp(other) <= 0;
    }
    lte(other) {
        return this.lessThanOrEqual(other);
    }
    modulo(divisor) {
        if (!Long.isLong(divisor))
            divisor = Long.fromValue(divisor);
        if (wasm) {
            const low = (this.unsigned ? wasm.rem_u : wasm.rem_s)(this.low, this.high, divisor.low, divisor.high);
            return Long.fromBits(low, wasm.get_high(), this.unsigned);
        }
        return this.sub(this.div(divisor).mul(divisor));
    }
    mod(divisor) {
        return this.modulo(divisor);
    }
    rem(divisor) {
        return this.modulo(divisor);
    }
    multiply(multiplier) {
        if (this.isZero())
            return Long.ZERO;
        if (!Long.isLong(multiplier))
            multiplier = Long.fromValue(multiplier);
        if (wasm) {
            const low = wasm.mul(this.low, this.high, multiplier.low, multiplier.high);
            return Long.fromBits(low, wasm.get_high(), this.unsigned);
        }
        if (multiplier.isZero())
            return Long.ZERO;
        if (this.eq(Long.MIN_VALUE))
            return multiplier.isOdd() ? Long.MIN_VALUE : Long.ZERO;
        if (multiplier.eq(Long.MIN_VALUE))
            return this.isOdd() ? Long.MIN_VALUE : Long.ZERO;
        if (this.isNegative()) {
            if (multiplier.isNegative())
                return this.neg().mul(multiplier.neg());
            else
                return this.neg().mul(multiplier).neg();
        }
        else if (multiplier.isNegative())
            return this.mul(multiplier.neg()).neg();
        if (this.lt(Long.TWO_PWR_24) && multiplier.lt(Long.TWO_PWR_24))
            return Long.fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);
        const a48 = this.high >>> 16;
        const a32 = this.high & 0xffff;
        const a16 = this.low >>> 16;
        const a00 = this.low & 0xffff;
        const b48 = multiplier.high >>> 16;
        const b32 = multiplier.high & 0xffff;
        const b16 = multiplier.low >>> 16;
        const b00 = multiplier.low & 0xffff;
        let c48 = 0, c32 = 0, c16 = 0, c00 = 0;
        c00 += a00 * b00;
        c16 += c00 >>> 16;
        c00 &= 0xffff;
        c16 += a16 * b00;
        c32 += c16 >>> 16;
        c16 &= 0xffff;
        c16 += a00 * b16;
        c32 += c16 >>> 16;
        c16 &= 0xffff;
        c32 += a32 * b00;
        c48 += c32 >>> 16;
        c32 &= 0xffff;
        c32 += a16 * b16;
        c48 += c32 >>> 16;
        c32 &= 0xffff;
        c32 += a00 * b32;
        c48 += c32 >>> 16;
        c32 &= 0xffff;
        c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
        c48 &= 0xffff;
        return Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
    }
    mul(multiplier) {
        return this.multiply(multiplier);
    }
    negate() {
        if (!this.unsigned && this.eq(Long.MIN_VALUE))
            return Long.MIN_VALUE;
        return this.not().add(Long.ONE);
    }
    neg() {
        return this.negate();
    }
    not() {
        return Long.fromBits(~this.low, ~this.high, this.unsigned);
    }
    notEquals(other) {
        return !this.equals(other);
    }
    neq(other) {
        return this.notEquals(other);
    }
    ne(other) {
        return this.notEquals(other);
    }
    or(other) {
        if (!Long.isLong(other))
            other = Long.fromValue(other);
        return Long.fromBits(this.low | other.low, this.high | other.high, this.unsigned);
    }
    shiftLeft(numBits) {
        if (Long.isLong(numBits))
            numBits = numBits.toInt();
        if ((numBits &= 63) === 0)
            return this;
        else if (numBits < 32)
            return Long.fromBits(this.low << numBits, (this.high << numBits) | (this.low >>> (32 - numBits)), this.unsigned);
        else
            return Long.fromBits(0, this.low << (numBits - 32), this.unsigned);
    }
    shl(numBits) {
        return this.shiftLeft(numBits);
    }
    shiftRight(numBits) {
        if (Long.isLong(numBits))
            numBits = numBits.toInt();
        if ((numBits &= 63) === 0)
            return this;
        else if (numBits < 32)
            return Long.fromBits((this.low >>> numBits) | (this.high << (32 - numBits)), this.high >> numBits, this.unsigned);
        else
            return Long.fromBits(this.high >> (numBits - 32), this.high >= 0 ? 0 : -1, this.unsigned);
    }
    shr(numBits) {
        return this.shiftRight(numBits);
    }
    shiftRightUnsigned(numBits) {
        if (Long.isLong(numBits))
            numBits = numBits.toInt();
        numBits &= 63;
        if (numBits === 0)
            return this;
        else {
            const high = this.high;
            if (numBits < 32) {
                const low = this.low;
                return Long.fromBits((low >>> numBits) | (high << (32 - numBits)), high >>> numBits, this.unsigned);
            }
            else if (numBits === 32)
                return Long.fromBits(high, 0, this.unsigned);
            else
                return Long.fromBits(high >>> (numBits - 32), 0, this.unsigned);
        }
    }
    shr_u(numBits) {
        return this.shiftRightUnsigned(numBits);
    }
    shru(numBits) {
        return this.shiftRightUnsigned(numBits);
    }
    subtract(subtrahend) {
        if (!Long.isLong(subtrahend))
            subtrahend = Long.fromValue(subtrahend);
        return this.add(subtrahend.neg());
    }
    sub(subtrahend) {
        return this.subtract(subtrahend);
    }
    toInt() {
        return this.unsigned ? this.low >>> 0 : this.low;
    }
    toNumber() {
        if (this.unsigned)
            return (this.high >>> 0) * TWO_PWR_32_DBL + (this.low >>> 0);
        return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
    }
    toBigInt() {
        return BigInt(this.toString());
    }
    toBytes(le) {
        return le ? this.toBytesLE() : this.toBytesBE();
    }
    toBytesLE() {
        const hi = this.high, lo = this.low;
        return [
            lo & 0xff,
            (lo >>> 8) & 0xff,
            (lo >>> 16) & 0xff,
            lo >>> 24,
            hi & 0xff,
            (hi >>> 8) & 0xff,
            (hi >>> 16) & 0xff,
            hi >>> 24
        ];
    }
    toBytesBE() {
        const hi = this.high, lo = this.low;
        return [
            hi >>> 24,
            (hi >>> 16) & 0xff,
            (hi >>> 8) & 0xff,
            hi & 0xff,
            lo >>> 24,
            (lo >>> 16) & 0xff,
            (lo >>> 8) & 0xff,
            lo & 0xff
        ];
    }
    toSigned() {
        if (!this.unsigned)
            return this;
        return Long.fromBits(this.low, this.high, false);
    }
    toString(radix) {
        radix = radix || 10;
        if (radix < 2 || 36 < radix)
            throw new BSONError('radix');
        if (this.isZero())
            return '0';
        if (this.isNegative()) {
            if (this.eq(Long.MIN_VALUE)) {
                const radixLong = Long.fromNumber(radix), div = this.div(radixLong), rem1 = div.mul(radixLong).sub(this);
                return div.toString(radix) + rem1.toInt().toString(radix);
            }
            else
                return '-' + this.neg().toString(radix);
        }
        const radixToPower = Long.fromNumber(Math.pow(radix, 6), this.unsigned);
        let rem = this;
        let result = '';
        while (true) {
            const remDiv = rem.div(radixToPower);
            const intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0;
            let digits = intval.toString(radix);
            rem = remDiv;
            if (rem.isZero()) {
                return digits + result;
            }
            else {
                while (digits.length < 6)
                    digits = '0' + digits;
                result = '' + digits + result;
            }
        }
    }
    toUnsigned() {
        if (this.unsigned)
            return this;
        return Long.fromBits(this.low, this.high, true);
    }
    xor(other) {
        if (!Long.isLong(other))
            other = Long.fromValue(other);
        return Long.fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
    }
    eqz() {
        return this.isZero();
    }
    le(other) {
        return this.lessThanOrEqual(other);
    }
    toExtendedJSON(options) {
        if (options && options.relaxed)
            return this.toNumber();
        return { $numberLong: this.toString() };
    }
    static fromExtendedJSON(doc, options) {
        const { useBigInt64 = false, relaxed = true } = { ...options };
        if (doc.$numberLong.length > MAX_INT64_STRING_LENGTH) {
            throw new BSONError('$numberLong string is too long');
        }
        if (!DECIMAL_REG_EX.test(doc.$numberLong)) {
            throw new BSONError(`$numberLong string "${doc.$numberLong}" is in an invalid format`);
        }
        if (useBigInt64) {
            const bigIntResult = BigInt(doc.$numberLong);
            return BigInt.asIntN(64, bigIntResult);
        }
        const longResult = Long.fromString(doc.$numberLong);
        if (relaxed) {
            return longResult.toNumber();
        }
        return longResult;
    }
    inspect(depth, options, inspect) {
        inspect ??= defaultInspect;
        const longVal = inspect(this.toString(), options);
        const unsignedVal = this.unsigned ? `, ${inspect(this.unsigned, options)}` : '';
        return `new Long(${longVal}${unsignedVal})`;
    }
}
Long.TWO_PWR_24 = Long.fromInt(TWO_PWR_24_DBL);
Long.MAX_UNSIGNED_VALUE = Long.fromBits(0xffffffff | 0, 0xffffffff | 0, true);
Long.ZERO = Long.fromInt(0);
Long.UZERO = Long.fromInt(0, true);
Long.ONE = Long.fromInt(1);
Long.UONE = Long.fromInt(1, true);
Long.NEG_ONE = Long.fromInt(-1);
Long.MAX_VALUE = Long.fromBits(0xffffffff | 0, 0x7fffffff | 0, false);
Long.MIN_VALUE = Long.fromBits(0, 0x80000000 | 0, false);

const PARSE_STRING_REGEXP = /^(\+|-)?(\d+|(\d*\.\d*))?(E|e)?([-+])?(\d+)?$/;
const PARSE_INF_REGEXP = /^(\+|-)?(Infinity|inf)$/i;
const PARSE_NAN_REGEXP = /^(\+|-)?NaN$/i;
const EXPONENT_MAX = 6111;
const EXPONENT_MIN = -6176;
const EXPONENT_BIAS = 6176;
const MAX_DIGITS = 34;
const NAN_BUFFER = ByteUtils.fromNumberArray([
    0x7c, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
].reverse());
const INF_NEGATIVE_BUFFER = ByteUtils.fromNumberArray([
    0xf8, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
].reverse());
const INF_POSITIVE_BUFFER = ByteUtils.fromNumberArray([
    0x78, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
].reverse());
const EXPONENT_REGEX = /^([-+])?(\d+)?$/;
const COMBINATION_MASK = 0x1f;
const EXPONENT_MASK = 0x3fff;
const COMBINATION_INFINITY = 30;
const COMBINATION_NAN = 31;
function isDigit(value) {
    return !isNaN(parseInt(value, 10));
}
function divideu128(value) {
    const DIVISOR = Long.fromNumber(1000 * 1000 * 1000);
    let _rem = Long.fromNumber(0);
    if (!value.parts[0] && !value.parts[1] && !value.parts[2] && !value.parts[3]) {
        return { quotient: value, rem: _rem };
    }
    for (let i = 0; i <= 3; i++) {
        _rem = _rem.shiftLeft(32);
        _rem = _rem.add(new Long(value.parts[i], 0));
        value.parts[i] = _rem.div(DIVISOR).low;
        _rem = _rem.modulo(DIVISOR);
    }
    return { quotient: value, rem: _rem };
}
function multiply64x2(left, right) {
    if (!left && !right) {
        return { high: Long.fromNumber(0), low: Long.fromNumber(0) };
    }
    const leftHigh = left.shiftRightUnsigned(32);
    const leftLow = new Long(left.getLowBits(), 0);
    const rightHigh = right.shiftRightUnsigned(32);
    const rightLow = new Long(right.getLowBits(), 0);
    let productHigh = leftHigh.multiply(rightHigh);
    let productMid = leftHigh.multiply(rightLow);
    const productMid2 = leftLow.multiply(rightHigh);
    let productLow = leftLow.multiply(rightLow);
    productHigh = productHigh.add(productMid.shiftRightUnsigned(32));
    productMid = new Long(productMid.getLowBits(), 0)
        .add(productMid2)
        .add(productLow.shiftRightUnsigned(32));
    productHigh = productHigh.add(productMid.shiftRightUnsigned(32));
    productLow = productMid.shiftLeft(32).add(new Long(productLow.getLowBits(), 0));
    return { high: productHigh, low: productLow };
}
function lessThan(left, right) {
    const uhleft = left.high >>> 0;
    const uhright = right.high >>> 0;
    if (uhleft < uhright) {
        return true;
    }
    else if (uhleft === uhright) {
        const ulleft = left.low >>> 0;
        const ulright = right.low >>> 0;
        if (ulleft < ulright)
            return true;
    }
    return false;
}
function invalidErr(string, message) {
    throw new BSONError(`"${string}" is not a valid Decimal128 string - ${message}`);
}
class Decimal128 extends BSONValue {
    get _bsontype() {
        return 'Decimal128';
    }
    constructor(bytes) {
        super();
        if (typeof bytes === 'string') {
            this.bytes = Decimal128.fromString(bytes).bytes;
        }
        else if (bytes instanceof Uint8Array || isUint8Array(bytes)) {
            if (bytes.byteLength !== 16) {
                throw new BSONError('Decimal128 must take a Buffer of 16 bytes');
            }
            this.bytes = bytes;
        }
        else {
            throw new BSONError('Decimal128 must take a Buffer or string');
        }
    }
    static fromString(representation) {
        return Decimal128._fromString(representation, { allowRounding: false });
    }
    static fromStringWithRounding(representation) {
        return Decimal128._fromString(representation, { allowRounding: true });
    }
    static _fromString(representation, options) {
        let isNegative = false;
        let sawSign = false;
        let sawRadix = false;
        let foundNonZero = false;
        let significantDigits = 0;
        let nDigitsRead = 0;
        let nDigits = 0;
        let radixPosition = 0;
        let firstNonZero = 0;
        const digits = [0];
        let nDigitsStored = 0;
        let digitsInsert = 0;
        let lastDigit = 0;
        let exponent = 0;
        let significandHigh = new Long(0, 0);
        let significandLow = new Long(0, 0);
        let biasedExponent = 0;
        let index = 0;
        if (representation.length >= 7000) {
            throw new BSONError('' + representation + ' not a valid Decimal128 string');
        }
        const stringMatch = representation.match(PARSE_STRING_REGEXP);
        const infMatch = representation.match(PARSE_INF_REGEXP);
        const nanMatch = representation.match(PARSE_NAN_REGEXP);
        if ((!stringMatch && !infMatch && !nanMatch) || representation.length === 0) {
            throw new BSONError('' + representation + ' not a valid Decimal128 string');
        }
        if (stringMatch) {
            const unsignedNumber = stringMatch[2];
            const e = stringMatch[4];
            const expSign = stringMatch[5];
            const expNumber = stringMatch[6];
            if (e && expNumber === undefined)
                invalidErr(representation, 'missing exponent power');
            if (e && unsignedNumber === undefined)
                invalidErr(representation, 'missing exponent base');
            if (e === undefined && (expSign || expNumber)) {
                invalidErr(representation, 'missing e before exponent');
            }
        }
        if (representation[index] === '+' || representation[index] === '-') {
            sawSign = true;
            isNegative = representation[index++] === '-';
        }
        if (!isDigit(representation[index]) && representation[index] !== '.') {
            if (representation[index] === 'i' || representation[index] === 'I') {
                return new Decimal128(isNegative ? INF_NEGATIVE_BUFFER : INF_POSITIVE_BUFFER);
            }
            else if (representation[index] === 'N') {
                return new Decimal128(NAN_BUFFER);
            }
        }
        while (isDigit(representation[index]) || representation[index] === '.') {
            if (representation[index] === '.') {
                if (sawRadix)
                    invalidErr(representation, 'contains multiple periods');
                sawRadix = true;
                index = index + 1;
                continue;
            }
            if (nDigitsStored < MAX_DIGITS) {
                if (representation[index] !== '0' || foundNonZero) {
                    if (!foundNonZero) {
                        firstNonZero = nDigitsRead;
                    }
                    foundNonZero = true;
                    digits[digitsInsert++] = parseInt(representation[index], 10);
                    nDigitsStored = nDigitsStored + 1;
                }
            }
            if (foundNonZero)
                nDigits = nDigits + 1;
            if (sawRadix)
                radixPosition = radixPosition + 1;
            nDigitsRead = nDigitsRead + 1;
            index = index + 1;
        }
        if (sawRadix && !nDigitsRead)
            throw new BSONError('' + representation + ' not a valid Decimal128 string');
        if (representation[index] === 'e' || representation[index] === 'E') {
            const match = representation.substr(++index).match(EXPONENT_REGEX);
            if (!match || !match[2])
                return new Decimal128(NAN_BUFFER);
            exponent = parseInt(match[0], 10);
            index = index + match[0].length;
        }
        if (representation[index])
            return new Decimal128(NAN_BUFFER);
        if (!nDigitsStored) {
            digits[0] = 0;
            nDigits = 1;
            nDigitsStored = 1;
            significantDigits = 0;
        }
        else {
            lastDigit = nDigitsStored - 1;
            significantDigits = nDigits;
            if (significantDigits !== 1) {
                while (representation[firstNonZero + significantDigits - 1 + Number(sawSign) + Number(sawRadix)] === '0') {
                    significantDigits = significantDigits - 1;
                }
            }
        }
        if (exponent <= radixPosition && radixPosition > exponent + (1 << 14)) {
            exponent = EXPONENT_MIN;
        }
        else {
            exponent = exponent - radixPosition;
        }
        while (exponent > EXPONENT_MAX) {
            lastDigit = lastDigit + 1;
            if (lastDigit >= MAX_DIGITS) {
                if (significantDigits === 0) {
                    exponent = EXPONENT_MAX;
                    break;
                }
                invalidErr(representation, 'overflow');
            }
            exponent = exponent - 1;
        }
        if (options.allowRounding) {
            while (exponent < EXPONENT_MIN || nDigitsStored < nDigits) {
                if (lastDigit === 0 && significantDigits < nDigitsStored) {
                    exponent = EXPONENT_MIN;
                    significantDigits = 0;
                    break;
                }
                if (nDigitsStored < nDigits) {
                    nDigits = nDigits - 1;
                }
                else {
                    lastDigit = lastDigit - 1;
                }
                if (exponent < EXPONENT_MAX) {
                    exponent = exponent + 1;
                }
                else {
                    const digitsString = digits.join('');
                    if (digitsString.match(/^0+$/)) {
                        exponent = EXPONENT_MAX;
                        break;
                    }
                    invalidErr(representation, 'overflow');
                }
            }
            if (lastDigit + 1 < significantDigits) {
                let endOfString = nDigitsRead;
                if (sawRadix) {
                    firstNonZero = firstNonZero + 1;
                    endOfString = endOfString + 1;
                }
                if (sawSign) {
                    firstNonZero = firstNonZero + 1;
                    endOfString = endOfString + 1;
                }
                const roundDigit = parseInt(representation[firstNonZero + lastDigit + 1], 10);
                let roundBit = 0;
                if (roundDigit >= 5) {
                    roundBit = 1;
                    if (roundDigit === 5) {
                        roundBit = digits[lastDigit] % 2 === 1 ? 1 : 0;
                        for (let i = firstNonZero + lastDigit + 2; i < endOfString; i++) {
                            if (parseInt(representation[i], 10)) {
                                roundBit = 1;
                                break;
                            }
                        }
                    }
                }
                if (roundBit) {
                    let dIdx = lastDigit;
                    for (; dIdx >= 0; dIdx--) {
                        if (++digits[dIdx] > 9) {
                            digits[dIdx] = 0;
                            if (dIdx === 0) {
                                if (exponent < EXPONENT_MAX) {
                                    exponent = exponent + 1;
                                    digits[dIdx] = 1;
                                }
                                else {
                                    return new Decimal128(isNegative ? INF_NEGATIVE_BUFFER : INF_POSITIVE_BUFFER);
                                }
                            }
                        }
                        else {
                            break;
                        }
                    }
                }
            }
        }
        else {
            while (exponent < EXPONENT_MIN || nDigitsStored < nDigits) {
                if (lastDigit === 0) {
                    if (significantDigits === 0) {
                        exponent = EXPONENT_MIN;
                        break;
                    }
                    invalidErr(representation, 'exponent underflow');
                }
                if (nDigitsStored < nDigits) {
                    if (representation[nDigits - 1 + Number(sawSign) + Number(sawRadix)] !== '0' &&
                        significantDigits !== 0) {
                        invalidErr(representation, 'inexact rounding');
                    }
                    nDigits = nDigits - 1;
                }
                else {
                    if (digits[lastDigit] !== 0) {
                        invalidErr(representation, 'inexact rounding');
                    }
                    lastDigit = lastDigit - 1;
                }
                if (exponent < EXPONENT_MAX) {
                    exponent = exponent + 1;
                }
                else {
                    invalidErr(representation, 'overflow');
                }
            }
            if (lastDigit + 1 < significantDigits) {
                if (sawRadix) {
                    firstNonZero = firstNonZero + 1;
                }
                if (sawSign) {
                    firstNonZero = firstNonZero + 1;
                }
                const roundDigit = parseInt(representation[firstNonZero + lastDigit + 1], 10);
                if (roundDigit !== 0) {
                    invalidErr(representation, 'inexact rounding');
                }
            }
        }
        significandHigh = Long.fromNumber(0);
        significandLow = Long.fromNumber(0);
        if (significantDigits === 0) {
            significandHigh = Long.fromNumber(0);
            significandLow = Long.fromNumber(0);
        }
        else if (lastDigit < 17) {
            let dIdx = 0;
            significandLow = Long.fromNumber(digits[dIdx++]);
            significandHigh = new Long(0, 0);
            for (; dIdx <= lastDigit; dIdx++) {
                significandLow = significandLow.multiply(Long.fromNumber(10));
                significandLow = significandLow.add(Long.fromNumber(digits[dIdx]));
            }
        }
        else {
            let dIdx = 0;
            significandHigh = Long.fromNumber(digits[dIdx++]);
            for (; dIdx <= lastDigit - 17; dIdx++) {
                significandHigh = significandHigh.multiply(Long.fromNumber(10));
                significandHigh = significandHigh.add(Long.fromNumber(digits[dIdx]));
            }
            significandLow = Long.fromNumber(digits[dIdx++]);
            for (; dIdx <= lastDigit; dIdx++) {
                significandLow = significandLow.multiply(Long.fromNumber(10));
                significandLow = significandLow.add(Long.fromNumber(digits[dIdx]));
            }
        }
        const significand = multiply64x2(significandHigh, Long.fromString('100000000000000000'));
        significand.low = significand.low.add(significandLow);
        if (lessThan(significand.low, significandLow)) {
            significand.high = significand.high.add(Long.fromNumber(1));
        }
        biasedExponent = exponent + EXPONENT_BIAS;
        const dec = { low: Long.fromNumber(0), high: Long.fromNumber(0) };
        if (significand.high.shiftRightUnsigned(49).and(Long.fromNumber(1)).equals(Long.fromNumber(1))) {
            dec.high = dec.high.or(Long.fromNumber(0x3).shiftLeft(61));
            dec.high = dec.high.or(Long.fromNumber(biasedExponent).and(Long.fromNumber(0x3fff).shiftLeft(47)));
            dec.high = dec.high.or(significand.high.and(Long.fromNumber(0x7fffffffffff)));
        }
        else {
            dec.high = dec.high.or(Long.fromNumber(biasedExponent & 0x3fff).shiftLeft(49));
            dec.high = dec.high.or(significand.high.and(Long.fromNumber(0x1ffffffffffff)));
        }
        dec.low = significand.low;
        if (isNegative) {
            dec.high = dec.high.or(Long.fromString('9223372036854775808'));
        }
        const buffer = ByteUtils.allocateUnsafe(16);
        index = 0;
        buffer[index++] = dec.low.low & 0xff;
        buffer[index++] = (dec.low.low >> 8) & 0xff;
        buffer[index++] = (dec.low.low >> 16) & 0xff;
        buffer[index++] = (dec.low.low >> 24) & 0xff;
        buffer[index++] = dec.low.high & 0xff;
        buffer[index++] = (dec.low.high >> 8) & 0xff;
        buffer[index++] = (dec.low.high >> 16) & 0xff;
        buffer[index++] = (dec.low.high >> 24) & 0xff;
        buffer[index++] = dec.high.low & 0xff;
        buffer[index++] = (dec.high.low >> 8) & 0xff;
        buffer[index++] = (dec.high.low >> 16) & 0xff;
        buffer[index++] = (dec.high.low >> 24) & 0xff;
        buffer[index++] = dec.high.high & 0xff;
        buffer[index++] = (dec.high.high >> 8) & 0xff;
        buffer[index++] = (dec.high.high >> 16) & 0xff;
        buffer[index++] = (dec.high.high >> 24) & 0xff;
        return new Decimal128(buffer);
    }
    toString() {
        let biased_exponent;
        let significand_digits = 0;
        const significand = new Array(36);
        for (let i = 0; i < significand.length; i++)
            significand[i] = 0;
        let index = 0;
        let is_zero = false;
        let significand_msb;
        let significand128 = { parts: [0, 0, 0, 0] };
        let j, k;
        const string = [];
        index = 0;
        const buffer = this.bytes;
        const low = buffer[index++] | (buffer[index++] << 8) | (buffer[index++] << 16) | (buffer[index++] << 24);
        const midl = buffer[index++] | (buffer[index++] << 8) | (buffer[index++] << 16) | (buffer[index++] << 24);
        const midh = buffer[index++] | (buffer[index++] << 8) | (buffer[index++] << 16) | (buffer[index++] << 24);
        const high = buffer[index++] | (buffer[index++] << 8) | (buffer[index++] << 16) | (buffer[index++] << 24);
        index = 0;
        const dec = {
            low: new Long(low, midl),
            high: new Long(midh, high)
        };
        if (dec.high.lessThan(Long.ZERO)) {
            string.push('-');
        }
        const combination = (high >> 26) & COMBINATION_MASK;
        if (combination >> 3 === 3) {
            if (combination === COMBINATION_INFINITY) {
                return string.join('') + 'Infinity';
            }
            else if (combination === COMBINATION_NAN) {
                return 'NaN';
            }
            else {
                biased_exponent = (high >> 15) & EXPONENT_MASK;
                significand_msb = 0x08 + ((high >> 14) & 0x01);
            }
        }
        else {
            significand_msb = (high >> 14) & 0x07;
            biased_exponent = (high >> 17) & EXPONENT_MASK;
        }
        const exponent = biased_exponent - EXPONENT_BIAS;
        significand128.parts[0] = (high & 0x3fff) + ((significand_msb & 0xf) << 14);
        significand128.parts[1] = midh;
        significand128.parts[2] = midl;
        significand128.parts[3] = low;
        if (significand128.parts[0] === 0 &&
            significand128.parts[1] === 0 &&
            significand128.parts[2] === 0 &&
            significand128.parts[3] === 0) {
            is_zero = true;
        }
        else {
            for (k = 3; k >= 0; k--) {
                let least_digits = 0;
                const result = divideu128(significand128);
                significand128 = result.quotient;
                least_digits = result.rem.low;
                if (!least_digits)
                    continue;
                for (j = 8; j >= 0; j--) {
                    significand[k * 9 + j] = least_digits % 10;
                    least_digits = Math.floor(least_digits / 10);
                }
            }
        }
        if (is_zero) {
            significand_digits = 1;
            significand[index] = 0;
        }
        else {
            significand_digits = 36;
            while (!significand[index]) {
                significand_digits = significand_digits - 1;
                index = index + 1;
            }
        }
        const scientific_exponent = significand_digits - 1 + exponent;
        if (scientific_exponent >= 34 || scientific_exponent <= -7 || exponent > 0) {
            if (significand_digits > 34) {
                string.push(`${0}`);
                if (exponent > 0)
                    string.push(`E+${exponent}`);
                else if (exponent < 0)
                    string.push(`E${exponent}`);
                return string.join('');
            }
            string.push(`${significand[index++]}`);
            significand_digits = significand_digits - 1;
            if (significand_digits) {
                string.push('.');
            }
            for (let i = 0; i < significand_digits; i++) {
                string.push(`${significand[index++]}`);
            }
            string.push('E');
            if (scientific_exponent > 0) {
                string.push(`+${scientific_exponent}`);
            }
            else {
                string.push(`${scientific_exponent}`);
            }
        }
        else {
            if (exponent >= 0) {
                for (let i = 0; i < significand_digits; i++) {
                    string.push(`${significand[index++]}`);
                }
            }
            else {
                let radix_position = significand_digits + exponent;
                if (radix_position > 0) {
                    for (let i = 0; i < radix_position; i++) {
                        string.push(`${significand[index++]}`);
                    }
                }
                else {
                    string.push('0');
                }
                string.push('.');
                while (radix_position++ < 0) {
                    string.push('0');
                }
                for (let i = 0; i < significand_digits - Math.max(radix_position - 1, 0); i++) {
                    string.push(`${significand[index++]}`);
                }
            }
        }
        return string.join('');
    }
    toJSON() {
        return { $numberDecimal: this.toString() };
    }
    toExtendedJSON() {
        return { $numberDecimal: this.toString() };
    }
    static fromExtendedJSON(doc) {
        return Decimal128.fromString(doc.$numberDecimal);
    }
    inspect(depth, options, inspect) {
        inspect ??= defaultInspect;
        const d128string = inspect(this.toString(), options);
        return `new Decimal128(${d128string})`;
    }
}

class Double extends BSONValue {
    get _bsontype() {
        return 'Double';
    }
    constructor(value) {
        super();
        if (value instanceof Number) {
            value = value.valueOf();
        }
        this.value = +value;
    }
    static fromString(value) {
        const coercedValue = Number(value);
        if (value === 'NaN')
            return new Double(NaN);
        if (value === 'Infinity')
            return new Double(Infinity);
        if (value === '-Infinity')
            return new Double(-Infinity);
        if (!Number.isFinite(coercedValue)) {
            throw new BSONError(`Input: ${value} is not representable as a Double`);
        }
        if (value.trim() !== value) {
            throw new BSONError(`Input: '${value}' contains whitespace`);
        }
        if (value === '') {
            throw new BSONError(`Input is an empty string`);
        }
        if (/[^-0-9.+eE]/.test(value)) {
            throw new BSONError(`Input: '${value}' is not in decimal or exponential notation`);
        }
        return new Double(coercedValue);
    }
    valueOf() {
        return this.value;
    }
    toJSON() {
        return this.value;
    }
    toString(radix) {
        return this.value.toString(radix);
    }
    toExtendedJSON(options) {
        if (options && (options.legacy || (options.relaxed && isFinite(this.value)))) {
            return this.value;
        }
        if (Object.is(Math.sign(this.value), -0)) {
            return { $numberDouble: '-0.0' };
        }
        return {
            $numberDouble: Number.isInteger(this.value) ? this.value.toFixed(1) : this.value.toString()
        };
    }
    static fromExtendedJSON(doc, options) {
        const doubleValue = parseFloat(doc.$numberDouble);
        return options && options.relaxed ? doubleValue : new Double(doubleValue);
    }
    inspect(depth, options, inspect) {
        inspect ??= defaultInspect;
        return `new Double(${inspect(this.value, options)})`;
    }
}

class Int32 extends BSONValue {
    get _bsontype() {
        return 'Int32';
    }
    constructor(value) {
        super();
        if (value instanceof Number) {
            value = value.valueOf();
        }
        this.value = +value | 0;
    }
    static fromString(value) {
        const cleanedValue = removeLeadingZerosAndExplicitPlus(value);
        const coercedValue = Number(value);
        if (BSON_INT32_MAX < coercedValue) {
            throw new BSONError(`Input: '${value}' is larger than the maximum value for Int32`);
        }
        else if (BSON_INT32_MIN > coercedValue) {
            throw new BSONError(`Input: '${value}' is smaller than the minimum value for Int32`);
        }
        else if (!Number.isSafeInteger(coercedValue)) {
            throw new BSONError(`Input: '${value}' is not a safe integer`);
        }
        else if (coercedValue.toString() !== cleanedValue) {
            throw new BSONError(`Input: '${value}' is not a valid Int32 string`);
        }
        return new Int32(coercedValue);
    }
    valueOf() {
        return this.value;
    }
    toString(radix) {
        return this.value.toString(radix);
    }
    toJSON() {
        return this.value;
    }
    toExtendedJSON(options) {
        if (options && (options.relaxed || options.legacy))
            return this.value;
        return { $numberInt: this.value.toString() };
    }
    static fromExtendedJSON(doc, options) {
        return options && options.relaxed ? parseInt(doc.$numberInt, 10) : new Int32(doc.$numberInt);
    }
    inspect(depth, options, inspect) {
        inspect ??= defaultInspect;
        return `new Int32(${inspect(this.value, options)})`;
    }
}

class MaxKey extends BSONValue {
    get _bsontype() {
        return 'MaxKey';
    }
    toExtendedJSON() {
        return { $maxKey: 1 };
    }
    static fromExtendedJSON() {
        return new MaxKey();
    }
    inspect() {
        return 'new MaxKey()';
    }
}

class MinKey extends BSONValue {
    get _bsontype() {
        return 'MinKey';
    }
    toExtendedJSON() {
        return { $minKey: 1 };
    }
    static fromExtendedJSON() {
        return new MinKey();
    }
    inspect() {
        return 'new MinKey()';
    }
}

let PROCESS_UNIQUE = null;
const __idCache = new WeakMap();
class ObjectId extends BSONValue {
    get _bsontype() {
        return 'ObjectId';
    }
    constructor(inputId) {
        super();
        let workingId;
        if (typeof inputId === 'object' && inputId && 'id' in inputId) {
            if (typeof inputId.id !== 'string' && !ArrayBuffer.isView(inputId.id)) {
                throw new BSONError('Argument passed in must have an id that is of type string or Buffer');
            }
            if ('toHexString' in inputId && typeof inputId.toHexString === 'function') {
                workingId = ByteUtils.fromHex(inputId.toHexString());
            }
            else {
                workingId = inputId.id;
            }
        }
        else {
            workingId = inputId;
        }
        if (workingId == null || typeof workingId === 'number') {
            this.buffer = ObjectId.generate(typeof workingId === 'number' ? workingId : undefined);
        }
        else if (ArrayBuffer.isView(workingId) && workingId.byteLength === 12) {
            this.buffer = ByteUtils.toLocalBufferType(workingId);
        }
        else if (typeof workingId === 'string') {
            if (ObjectId.validateHexString(workingId)) {
                this.buffer = ByteUtils.fromHex(workingId);
                if (ObjectId.cacheHexString) {
                    __idCache.set(this, workingId);
                }
            }
            else {
                throw new BSONError('input must be a 24 character hex string, 12 byte Uint8Array, or an integer');
            }
        }
        else {
            throw new BSONError('Argument passed in does not match the accepted types');
        }
    }
    get id() {
        return this.buffer;
    }
    set id(value) {
        this.buffer = value;
        if (ObjectId.cacheHexString) {
            __idCache.set(this, ByteUtils.toHex(value));
        }
    }
    static validateHexString(string) {
        if (string?.length !== 24)
            return false;
        for (let i = 0; i < 24; i++) {
            const char = string.charCodeAt(i);
            if ((char >= 48 && char <= 57) ||
                (char >= 97 && char <= 102) ||
                (char >= 65 && char <= 70)) {
                continue;
            }
            return false;
        }
        return true;
    }
    toHexString() {
        if (ObjectId.cacheHexString) {
            const __id = __idCache.get(this);
            if (__id)
                return __id;
        }
        const hexString = ByteUtils.toHex(this.id);
        if (ObjectId.cacheHexString) {
            __idCache.set(this, hexString);
        }
        return hexString;
    }
    static getInc() {
        return (ObjectId.index = (ObjectId.index + 1) % 0xffffff);
    }
    static generate(time) {
        if ('number' !== typeof time) {
            time = Math.floor(Date.now() / 1000);
        }
        const inc = ObjectId.getInc();
        const buffer = ByteUtils.allocateUnsafe(12);
        NumberUtils.setInt32BE(buffer, 0, time);
        if (PROCESS_UNIQUE === null) {
            PROCESS_UNIQUE = ByteUtils.randomBytes(5);
        }
        buffer[4] = PROCESS_UNIQUE[0];
        buffer[5] = PROCESS_UNIQUE[1];
        buffer[6] = PROCESS_UNIQUE[2];
        buffer[7] = PROCESS_UNIQUE[3];
        buffer[8] = PROCESS_UNIQUE[4];
        buffer[11] = inc & 0xff;
        buffer[10] = (inc >> 8) & 0xff;
        buffer[9] = (inc >> 16) & 0xff;
        return buffer;
    }
    toString(encoding) {
        if (encoding === 'base64')
            return ByteUtils.toBase64(this.id);
        if (encoding === 'hex')
            return this.toHexString();
        return this.toHexString();
    }
    toJSON() {
        return this.toHexString();
    }
    static is(variable) {
        return (variable != null &&
            typeof variable === 'object' &&
            '_bsontype' in variable &&
            variable._bsontype === 'ObjectId');
    }
    equals(otherId) {
        if (otherId === undefined || otherId === null) {
            return false;
        }
        if (ObjectId.is(otherId)) {
            return (this.buffer[11] === otherId.buffer[11] && ByteUtils.equals(this.buffer, otherId.buffer));
        }
        if (typeof otherId === 'string') {
            return otherId.toLowerCase() === this.toHexString();
        }
        if (typeof otherId === 'object' && typeof otherId.toHexString === 'function') {
            const otherIdString = otherId.toHexString();
            const thisIdString = this.toHexString();
            return typeof otherIdString === 'string' && otherIdString.toLowerCase() === thisIdString;
        }
        return false;
    }
    getTimestamp() {
        const timestamp = new Date();
        const time = NumberUtils.getUint32BE(this.buffer, 0);
        timestamp.setTime(Math.floor(time) * 1000);
        return timestamp;
    }
    static createPk() {
        return new ObjectId();
    }
    serializeInto(uint8array, index) {
        uint8array[index] = this.buffer[0];
        uint8array[index + 1] = this.buffer[1];
        uint8array[index + 2] = this.buffer[2];
        uint8array[index + 3] = this.buffer[3];
        uint8array[index + 4] = this.buffer[4];
        uint8array[index + 5] = this.buffer[5];
        uint8array[index + 6] = this.buffer[6];
        uint8array[index + 7] = this.buffer[7];
        uint8array[index + 8] = this.buffer[8];
        uint8array[index + 9] = this.buffer[9];
        uint8array[index + 10] = this.buffer[10];
        uint8array[index + 11] = this.buffer[11];
        return 12;
    }
    static createFromTime(time) {
        const buffer = ByteUtils.allocate(12);
        for (let i = 11; i >= 4; i--)
            buffer[i] = 0;
        NumberUtils.setInt32BE(buffer, 0, time);
        return new ObjectId(buffer);
    }
    static createFromHexString(hexString) {
        if (hexString?.length !== 24) {
            throw new BSONError('hex string must be 24 characters');
        }
        return new ObjectId(ByteUtils.fromHex(hexString));
    }
    static createFromBase64(base64) {
        if (base64?.length !== 16) {
            throw new BSONError('base64 string must be 16 characters');
        }
        return new ObjectId(ByteUtils.fromBase64(base64));
    }
    static isValid(id) {
        if (id == null)
            return false;
        if (typeof id === 'string')
            return ObjectId.validateHexString(id);
        try {
            new ObjectId(id);
            return true;
        }
        catch {
            return false;
        }
    }
    toExtendedJSON() {
        if (this.toHexString)
            return { $oid: this.toHexString() };
        return { $oid: this.toString('hex') };
    }
    static fromExtendedJSON(doc) {
        return new ObjectId(doc.$oid);
    }
    isCached() {
        return ObjectId.cacheHexString && __idCache.has(this);
    }
    inspect(depth, options, inspect) {
        inspect ??= defaultInspect;
        return `new ObjectId(${inspect(this.toHexString(), options)})`;
    }
}
ObjectId.index = Math.floor(Math.random() * 0xffffff);

function internalCalculateObjectSize(object, serializeFunctions, ignoreUndefined) {
    let totalLength = 4 + 1;
    if (Array.isArray(object)) {
        for (let i = 0; i < object.length; i++) {
            totalLength += calculateElement(i.toString(), object[i], serializeFunctions, true, ignoreUndefined);
        }
    }
    else {
        if (typeof object?.toBSON === 'function') {
            object = object.toBSON();
        }
        for (const key of Object.keys(object)) {
            totalLength += calculateElement(key, object[key], serializeFunctions, false, ignoreUndefined);
        }
    }
    return totalLength;
}
function calculateElement(name, value, serializeFunctions = false, isArray = false, ignoreUndefined = false) {
    if (typeof value?.toBSON === 'function') {
        value = value.toBSON();
    }
    switch (typeof value) {
        case 'string':
            return 1 + ByteUtils.utf8ByteLength(name) + 1 + 4 + ByteUtils.utf8ByteLength(value) + 1;
        case 'number':
            if (Math.floor(value) === value &&
                value >= JS_INT_MIN &&
                value <= JS_INT_MAX) {
                if (value >= BSON_INT32_MIN && value <= BSON_INT32_MAX) {
                    return (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) + (4 + 1);
                }
                else {
                    return (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) + (8 + 1);
                }
            }
            else {
                return (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) + (8 + 1);
            }
        case 'undefined':
            if (isArray || !ignoreUndefined)
                return (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) + 1;
            return 0;
        case 'boolean':
            return (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) + (1 + 1);
        case 'object':
            if (value != null &&
                typeof value._bsontype === 'string' &&
                value[BSON_VERSION_SYMBOL] !== BSON_MAJOR_VERSION) {
                throw new BSONVersionError();
            }
            else if (value == null || value._bsontype === 'MinKey' || value._bsontype === 'MaxKey') {
                return (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) + 1;
            }
            else if (value._bsontype === 'ObjectId') {
                return (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) + (12 + 1);
            }
            else if (value instanceof Date || isDate(value)) {
                return (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) + (8 + 1);
            }
            else if (ArrayBuffer.isView(value) ||
                value instanceof ArrayBuffer ||
                isAnyArrayBuffer(value)) {
                return ((name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) + (1 + 4 + 1) + value.byteLength);
            }
            else if (value._bsontype === 'Long' ||
                value._bsontype === 'Double' ||
                value._bsontype === 'Timestamp') {
                return (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) + (8 + 1);
            }
            else if (value._bsontype === 'Decimal128') {
                return (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) + (16 + 1);
            }
            else if (value._bsontype === 'Code') {
                if (value.scope != null && Object.keys(value.scope).length > 0) {
                    return ((name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) +
                        1 +
                        4 +
                        4 +
                        ByteUtils.utf8ByteLength(value.code.toString()) +
                        1 +
                        internalCalculateObjectSize(value.scope, serializeFunctions, ignoreUndefined));
                }
                else {
                    return ((name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) +
                        1 +
                        4 +
                        ByteUtils.utf8ByteLength(value.code.toString()) +
                        1);
                }
            }
            else if (value._bsontype === 'Binary') {
                const binary = value;
                if (binary.sub_type === Binary.SUBTYPE_BYTE_ARRAY) {
                    return ((name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) +
                        (binary.position + 1 + 4 + 1 + 4));
                }
                else {
                    return ((name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) + (binary.position + 1 + 4 + 1));
                }
            }
            else if (value._bsontype === 'Symbol') {
                return ((name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) +
                    ByteUtils.utf8ByteLength(value.value) +
                    4 +
                    1 +
                    1);
            }
            else if (value._bsontype === 'DBRef') {
                const ordered_values = Object.assign({
                    $ref: value.collection,
                    $id: value.oid
                }, value.fields);
                if (value.db != null) {
                    ordered_values['$db'] = value.db;
                }
                return ((name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) +
                    1 +
                    internalCalculateObjectSize(ordered_values, serializeFunctions, ignoreUndefined));
            }
            else if (value instanceof RegExp || isRegExp(value)) {
                return ((name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) +
                    1 +
                    ByteUtils.utf8ByteLength(value.source) +
                    1 +
                    (value.global ? 1 : 0) +
                    (value.ignoreCase ? 1 : 0) +
                    (value.multiline ? 1 : 0) +
                    1);
            }
            else if (value._bsontype === 'BSONRegExp') {
                return ((name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) +
                    1 +
                    ByteUtils.utf8ByteLength(value.pattern) +
                    1 +
                    ByteUtils.utf8ByteLength(value.options) +
                    1);
            }
            else {
                return ((name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) +
                    internalCalculateObjectSize(value, serializeFunctions, ignoreUndefined) +
                    1);
            }
        case 'function':
            if (serializeFunctions) {
                return ((name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) +
                    1 +
                    4 +
                    ByteUtils.utf8ByteLength(value.toString()) +
                    1);
            }
            return 0;
        case 'bigint':
            return (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) + (8 + 1);
        case 'symbol':
            return 0;
        default:
            throw new BSONError(`Unrecognized JS type: ${typeof value}`);
    }
}

function alphabetize(str) {
    return str.split('').sort().join('');
}
class BSONRegExp extends BSONValue {
    get _bsontype() {
        return 'BSONRegExp';
    }
    constructor(pattern, options) {
        super();
        this.pattern = pattern;
        this.options = alphabetize(options ?? '');
        if (this.pattern.indexOf('\x00') !== -1) {
            throw new BSONError(`BSON Regex patterns cannot contain null bytes, found: ${JSON.stringify(this.pattern)}`);
        }
        if (this.options.indexOf('\x00') !== -1) {
            throw new BSONError(`BSON Regex options cannot contain null bytes, found: ${JSON.stringify(this.options)}`);
        }
        for (let i = 0; i < this.options.length; i++) {
            if (!(this.options[i] === 'i' ||
                this.options[i] === 'm' ||
                this.options[i] === 'x' ||
                this.options[i] === 'l' ||
                this.options[i] === 's' ||
                this.options[i] === 'u')) {
                throw new BSONError(`The regular expression option [${this.options[i]}] is not supported`);
            }
        }
    }
    static parseOptions(options) {
        return options ? options.split('').sort().join('') : '';
    }
    toExtendedJSON(options) {
        options = options || {};
        if (options.legacy) {
            return { $regex: this.pattern, $options: this.options };
        }
        return { $regularExpression: { pattern: this.pattern, options: this.options } };
    }
    static fromExtendedJSON(doc) {
        if ('$regex' in doc) {
            if (typeof doc.$regex !== 'string') {
                if (doc.$regex._bsontype === 'BSONRegExp') {
                    return doc;
                }
            }
            else {
                return new BSONRegExp(doc.$regex, BSONRegExp.parseOptions(doc.$options));
            }
        }
        if ('$regularExpression' in doc) {
            return new BSONRegExp(doc.$regularExpression.pattern, BSONRegExp.parseOptions(doc.$regularExpression.options));
        }
        throw new BSONError(`Unexpected BSONRegExp EJSON object form: ${JSON.stringify(doc)}`);
    }
    inspect(depth, options, inspect) {
        const stylize = getStylizeFunction(options) ?? (v => v);
        inspect ??= defaultInspect;
        const pattern = stylize(inspect(this.pattern), 'regexp');
        const flags = stylize(inspect(this.options), 'regexp');
        return `new BSONRegExp(${pattern}, ${flags})`;
    }
}

class BSONSymbol extends BSONValue {
    get _bsontype() {
        return 'BSONSymbol';
    }
    constructor(value) {
        super();
        this.value = value;
    }
    valueOf() {
        return this.value;
    }
    toString() {
        return this.value;
    }
    toJSON() {
        return this.value;
    }
    toExtendedJSON() {
        return { $symbol: this.value };
    }
    static fromExtendedJSON(doc) {
        return new BSONSymbol(doc.$symbol);
    }
    inspect(depth, options, inspect) {
        inspect ??= defaultInspect;
        return `new BSONSymbol(${inspect(this.value, options)})`;
    }
}

const LongWithoutOverridesClass = Long;
class Timestamp extends LongWithoutOverridesClass {
    get _bsontype() {
        return 'Timestamp';
    }
    get i() {
        return this.low >>> 0;
    }
    get t() {
        return this.high >>> 0;
    }
    constructor(low) {
        if (low == null) {
            super(0, 0, true);
        }
        else if (typeof low === 'bigint') {
            super(low, true);
        }
        else if (Long.isLong(low)) {
            super(low.low, low.high, true);
        }
        else if (typeof low === 'object' && 't' in low && 'i' in low) {
            if (typeof low.t !== 'number' && (typeof low.t !== 'object' || low.t._bsontype !== 'Int32')) {
                throw new BSONError('Timestamp constructed from { t, i } must provide t as a number');
            }
            if (typeof low.i !== 'number' && (typeof low.i !== 'object' || low.i._bsontype !== 'Int32')) {
                throw new BSONError('Timestamp constructed from { t, i } must provide i as a number');
            }
            const t = Number(low.t);
            const i = Number(low.i);
            if (t < 0 || Number.isNaN(t)) {
                throw new BSONError('Timestamp constructed from { t, i } must provide a positive t');
            }
            if (i < 0 || Number.isNaN(i)) {
                throw new BSONError('Timestamp constructed from { t, i } must provide a positive i');
            }
            if (t > 0xffff_ffff) {
                throw new BSONError('Timestamp constructed from { t, i } must provide t equal or less than uint32 max');
            }
            if (i > 0xffff_ffff) {
                throw new BSONError('Timestamp constructed from { t, i } must provide i equal or less than uint32 max');
            }
            super(i, t, true);
        }
        else {
            throw new BSONError('A Timestamp can only be constructed with: bigint, Long, or { t: number; i: number }');
        }
    }
    toJSON() {
        return {
            $timestamp: this.toString()
        };
    }
    static fromInt(value) {
        return new Timestamp(Long.fromInt(value, true));
    }
    static fromNumber(value) {
        return new Timestamp(Long.fromNumber(value, true));
    }
    static fromBits(lowBits, highBits) {
        return new Timestamp({ i: lowBits, t: highBits });
    }
    static fromString(str, optRadix) {
        return new Timestamp(Long.fromString(str, true, optRadix));
    }
    toExtendedJSON() {
        return { $timestamp: { t: this.t, i: this.i } };
    }
    static fromExtendedJSON(doc) {
        const i = Long.isLong(doc.$timestamp.i)
            ? doc.$timestamp.i.getLowBitsUnsigned()
            : doc.$timestamp.i;
        const t = Long.isLong(doc.$timestamp.t)
            ? doc.$timestamp.t.getLowBitsUnsigned()
            : doc.$timestamp.t;
        return new Timestamp({ t, i });
    }
    inspect(depth, options, inspect) {
        inspect ??= defaultInspect;
        const t = inspect(this.t, options);
        const i = inspect(this.i, options);
        return `new Timestamp({ t: ${t}, i: ${i} })`;
    }
}
Timestamp.MAX_VALUE = Long.MAX_UNSIGNED_VALUE;

const JS_INT_MAX_LONG = Long.fromNumber(JS_INT_MAX);
const JS_INT_MIN_LONG = Long.fromNumber(JS_INT_MIN);
function internalDeserialize(buffer, options, isArray) {
    options = options == null ? {} : options;
    const index = options && options.index ? options.index : 0;
    const size = NumberUtils.getInt32LE(buffer, index);
    if (size < 5) {
        throw new BSONError(`bson size must be >= 5, is ${size}`);
    }
    if (options.allowObjectSmallerThanBufferSize && buffer.length < size) {
        throw new BSONError(`buffer length ${buffer.length} must be >= bson size ${size}`);
    }
    if (!options.allowObjectSmallerThanBufferSize && buffer.length !== size) {
        throw new BSONError(`buffer length ${buffer.length} must === bson size ${size}`);
    }
    if (size + index > buffer.byteLength) {
        throw new BSONError(`(bson size ${size} + options.index ${index} must be <= buffer length ${buffer.byteLength})`);
    }
    if (buffer[index + size - 1] !== 0) {
        throw new BSONError("One object, sized correctly, with a spot for an EOO, but the EOO isn't 0x00");
    }
    return deserializeObject(buffer, index, options, isArray);
}
const allowedDBRefKeys = /^\$ref$|^\$id$|^\$db$/;
function deserializeObject(buffer, index, options, isArray = false) {
    const fieldsAsRaw = options['fieldsAsRaw'] == null ? null : options['fieldsAsRaw'];
    const raw = options['raw'] == null ? false : options['raw'];
    const bsonRegExp = typeof options['bsonRegExp'] === 'boolean' ? options['bsonRegExp'] : false;
    const promoteBuffers = options.promoteBuffers ?? false;
    const promoteLongs = options.promoteLongs ?? true;
    const promoteValues = options.promoteValues ?? true;
    const useBigInt64 = options.useBigInt64 ?? false;
    if (useBigInt64 && !promoteValues) {
        throw new BSONError('Must either request bigint or Long for int64 deserialization');
    }
    if (useBigInt64 && !promoteLongs) {
        throw new BSONError('Must either request bigint or Long for int64 deserialization');
    }
    const validation = options.validation == null ? { utf8: true } : options.validation;
    let globalUTFValidation = true;
    let validationSetting;
    let utf8KeysSet;
    const utf8ValidatedKeys = validation.utf8;
    if (typeof utf8ValidatedKeys === 'boolean') {
        validationSetting = utf8ValidatedKeys;
    }
    else {
        globalUTFValidation = false;
        const utf8ValidationValues = Object.keys(utf8ValidatedKeys).map(function (key) {
            return utf8ValidatedKeys[key];
        });
        if (utf8ValidationValues.length === 0) {
            throw new BSONError('UTF-8 validation setting cannot be empty');
        }
        if (typeof utf8ValidationValues[0] !== 'boolean') {
            throw new BSONError('Invalid UTF-8 validation option, must specify boolean values');
        }
        validationSetting = utf8ValidationValues[0];
        if (!utf8ValidationValues.every(item => item === validationSetting)) {
            throw new BSONError('Invalid UTF-8 validation option - keys must be all true or all false');
        }
    }
    if (!globalUTFValidation) {
        utf8KeysSet = new Set();
        for (const key of Object.keys(utf8ValidatedKeys)) {
            utf8KeysSet.add(key);
        }
    }
    const startIndex = index;
    if (buffer.length < 5)
        throw new BSONError('corrupt bson message < 5 bytes long');
    const size = NumberUtils.getInt32LE(buffer, index);
    index += 4;
    if (size < 5 || size > buffer.length)
        throw new BSONError('corrupt bson message');
    const object = isArray ? [] : {};
    let arrayIndex = 0;
    let isPossibleDBRef = isArray ? false : null;
    while (true) {
        const elementType = buffer[index++];
        if (elementType === 0)
            break;
        let i = index;
        while (buffer[i] !== 0x00 && i < buffer.length) {
            i++;
        }
        if (i >= buffer.byteLength)
            throw new BSONError('Bad BSON Document: illegal CString');
        const name = isArray ? arrayIndex++ : ByteUtils.toUTF8(buffer, index, i, false);
        let shouldValidateKey = true;
        if (globalUTFValidation || utf8KeysSet?.has(name)) {
            shouldValidateKey = validationSetting;
        }
        else {
            shouldValidateKey = !validationSetting;
        }
        if (isPossibleDBRef !== false && name[0] === '$') {
            isPossibleDBRef = allowedDBRefKeys.test(name);
        }
        let value;
        index = i + 1;
        if (elementType === BSON_DATA_STRING) {
            const stringSize = NumberUtils.getInt32LE(buffer, index);
            index += 4;
            if (stringSize <= 0 ||
                stringSize > buffer.length - index ||
                buffer[index + stringSize - 1] !== 0) {
                throw new BSONError('bad string length in bson');
            }
            value = ByteUtils.toUTF8(buffer, index, index + stringSize - 1, shouldValidateKey);
            index = index + stringSize;
        }
        else if (elementType === BSON_DATA_OID) {
            const oid = ByteUtils.allocateUnsafe(12);
            for (let i = 0; i < 12; i++)
                oid[i] = buffer[index + i];
            value = new ObjectId(oid);
            index = index + 12;
        }
        else if (elementType === BSON_DATA_INT && promoteValues === false) {
            value = new Int32(NumberUtils.getInt32LE(buffer, index));
            index += 4;
        }
        else if (elementType === BSON_DATA_INT) {
            value = NumberUtils.getInt32LE(buffer, index);
            index += 4;
        }
        else if (elementType === BSON_DATA_NUMBER) {
            value = NumberUtils.getFloat64LE(buffer, index);
            index += 8;
            if (promoteValues === false)
                value = new Double(value);
        }
        else if (elementType === BSON_DATA_DATE) {
            const lowBits = NumberUtils.getInt32LE(buffer, index);
            const highBits = NumberUtils.getInt32LE(buffer, index + 4);
            index += 8;
            value = new Date(new Long(lowBits, highBits).toNumber());
        }
        else if (elementType === BSON_DATA_BOOLEAN) {
            if (buffer[index] !== 0 && buffer[index] !== 1)
                throw new BSONError('illegal boolean type value');
            value = buffer[index++] === 1;
        }
        else if (elementType === BSON_DATA_OBJECT) {
            const _index = index;
            const objectSize = NumberUtils.getInt32LE(buffer, index);
            if (objectSize <= 0 || objectSize > buffer.length - index)
                throw new BSONError('bad embedded document length in bson');
            if (raw) {
                value = buffer.subarray(index, index + objectSize);
            }
            else {
                let objectOptions = options;
                if (!globalUTFValidation) {
                    objectOptions = { ...options, validation: { utf8: shouldValidateKey } };
                }
                value = deserializeObject(buffer, _index, objectOptions, false);
            }
            index = index + objectSize;
        }
        else if (elementType === BSON_DATA_ARRAY) {
            const _index = index;
            const objectSize = NumberUtils.getInt32LE(buffer, index);
            let arrayOptions = options;
            const stopIndex = index + objectSize;
            if (fieldsAsRaw && fieldsAsRaw[name]) {
                arrayOptions = { ...options, raw: true };
            }
            if (!globalUTFValidation) {
                arrayOptions = { ...arrayOptions, validation: { utf8: shouldValidateKey } };
            }
            value = deserializeObject(buffer, _index, arrayOptions, true);
            index = index + objectSize;
            if (buffer[index - 1] !== 0)
                throw new BSONError('invalid array terminator byte');
            if (index !== stopIndex)
                throw new BSONError('corrupted array bson');
        }
        else if (elementType === BSON_DATA_UNDEFINED) {
            value = undefined;
        }
        else if (elementType === BSON_DATA_NULL) {
            value = null;
        }
        else if (elementType === BSON_DATA_LONG) {
            if (useBigInt64) {
                value = NumberUtils.getBigInt64LE(buffer, index);
                index += 8;
            }
            else {
                const lowBits = NumberUtils.getInt32LE(buffer, index);
                const highBits = NumberUtils.getInt32LE(buffer, index + 4);
                index += 8;
                const long = new Long(lowBits, highBits);
                if (promoteLongs && promoteValues === true) {
                    value =
                        long.lessThanOrEqual(JS_INT_MAX_LONG) && long.greaterThanOrEqual(JS_INT_MIN_LONG)
                            ? long.toNumber()
                            : long;
                }
                else {
                    value = long;
                }
            }
        }
        else if (elementType === BSON_DATA_DECIMAL128) {
            const bytes = ByteUtils.allocateUnsafe(16);
            for (let i = 0; i < 16; i++)
                bytes[i] = buffer[index + i];
            index = index + 16;
            value = new Decimal128(bytes);
        }
        else if (elementType === BSON_DATA_BINARY) {
            let binarySize = NumberUtils.getInt32LE(buffer, index);
            index += 4;
            const totalBinarySize = binarySize;
            const subType = buffer[index++];
            if (binarySize < 0)
                throw new BSONError('Negative binary type element size found');
            if (binarySize > buffer.byteLength)
                throw new BSONError('Binary type size larger than document size');
            if (subType === Binary.SUBTYPE_BYTE_ARRAY) {
                binarySize = NumberUtils.getInt32LE(buffer, index);
                index += 4;
                if (binarySize < 0)
                    throw new BSONError('Negative binary type element size found for subtype 0x02');
                if (binarySize > totalBinarySize - 4)
                    throw new BSONError('Binary type with subtype 0x02 contains too long binary size');
                if (binarySize < totalBinarySize - 4)
                    throw new BSONError('Binary type with subtype 0x02 contains too short binary size');
            }
            if (promoteBuffers && promoteValues) {
                value = ByteUtils.toLocalBufferType(buffer.subarray(index, index + binarySize));
            }
            else {
                value = new Binary(buffer.subarray(index, index + binarySize), subType);
                if (subType === BSON_BINARY_SUBTYPE_UUID_NEW && UUID.isValid(value)) {
                    value = value.toUUID();
                }
            }
            index = index + binarySize;
        }
        else if (elementType === BSON_DATA_REGEXP && bsonRegExp === false) {
            i = index;
            while (buffer[i] !== 0x00 && i < buffer.length) {
                i++;
            }
            if (i >= buffer.length)
                throw new BSONError('Bad BSON Document: illegal CString');
            const source = ByteUtils.toUTF8(buffer, index, i, false);
            index = i + 1;
            i = index;
            while (buffer[i] !== 0x00 && i < buffer.length) {
                i++;
            }
            if (i >= buffer.length)
                throw new BSONError('Bad BSON Document: illegal CString');
            const regExpOptions = ByteUtils.toUTF8(buffer, index, i, false);
            index = i + 1;
            const optionsArray = new Array(regExpOptions.length);
            for (i = 0; i < regExpOptions.length; i++) {
                switch (regExpOptions[i]) {
                    case 'm':
                        optionsArray[i] = 'm';
                        break;
                    case 's':
                        optionsArray[i] = 'g';
                        break;
                    case 'i':
                        optionsArray[i] = 'i';
                        break;
                }
            }
            value = new RegExp(source, optionsArray.join(''));
        }
        else if (elementType === BSON_DATA_REGEXP && bsonRegExp === true) {
            i = index;
            while (buffer[i] !== 0x00 && i < buffer.length) {
                i++;
            }
            if (i >= buffer.length)
                throw new BSONError('Bad BSON Document: illegal CString');
            const source = ByteUtils.toUTF8(buffer, index, i, false);
            index = i + 1;
            i = index;
            while (buffer[i] !== 0x00 && i < buffer.length) {
                i++;
            }
            if (i >= buffer.length)
                throw new BSONError('Bad BSON Document: illegal CString');
            const regExpOptions = ByteUtils.toUTF8(buffer, index, i, false);
            index = i + 1;
            value = new BSONRegExp(source, regExpOptions);
        }
        else if (elementType === BSON_DATA_SYMBOL) {
            const stringSize = NumberUtils.getInt32LE(buffer, index);
            index += 4;
            if (stringSize <= 0 ||
                stringSize > buffer.length - index ||
                buffer[index + stringSize - 1] !== 0) {
                throw new BSONError('bad string length in bson');
            }
            const symbol = ByteUtils.toUTF8(buffer, index, index + stringSize - 1, shouldValidateKey);
            value = promoteValues ? symbol : new BSONSymbol(symbol);
            index = index + stringSize;
        }
        else if (elementType === BSON_DATA_TIMESTAMP) {
            value = new Timestamp({
                i: NumberUtils.getUint32LE(buffer, index),
                t: NumberUtils.getUint32LE(buffer, index + 4)
            });
            index += 8;
        }
        else if (elementType === BSON_DATA_MIN_KEY) {
            value = new MinKey();
        }
        else if (elementType === BSON_DATA_MAX_KEY) {
            value = new MaxKey();
        }
        else if (elementType === BSON_DATA_CODE) {
            const stringSize = NumberUtils.getInt32LE(buffer, index);
            index += 4;
            if (stringSize <= 0 ||
                stringSize > buffer.length - index ||
                buffer[index + stringSize - 1] !== 0) {
                throw new BSONError('bad string length in bson');
            }
            const functionString = ByteUtils.toUTF8(buffer, index, index + stringSize - 1, shouldValidateKey);
            value = new Code(functionString);
            index = index + stringSize;
        }
        else if (elementType === BSON_DATA_CODE_W_SCOPE) {
            const totalSize = NumberUtils.getInt32LE(buffer, index);
            index += 4;
            if (totalSize < 4 + 4 + 4 + 1) {
                throw new BSONError('code_w_scope total size shorter minimum expected length');
            }
            const stringSize = NumberUtils.getInt32LE(buffer, index);
            index += 4;
            if (stringSize <= 0 ||
                stringSize > buffer.length - index ||
                buffer[index + stringSize - 1] !== 0) {
                throw new BSONError('bad string length in bson');
            }
            const functionString = ByteUtils.toUTF8(buffer, index, index + stringSize - 1, shouldValidateKey);
            index = index + stringSize;
            const _index = index;
            const objectSize = NumberUtils.getInt32LE(buffer, index);
            const scopeObject = deserializeObject(buffer, _index, options, false);
            index = index + objectSize;
            if (totalSize < 4 + 4 + objectSize + stringSize) {
                throw new BSONError('code_w_scope total size is too short, truncating scope');
            }
            if (totalSize > 4 + 4 + objectSize + stringSize) {
                throw new BSONError('code_w_scope total size is too long, clips outer document');
            }
            value = new Code(functionString, scopeObject);
        }
        else if (elementType === BSON_DATA_DBPOINTER) {
            const stringSize = NumberUtils.getInt32LE(buffer, index);
            index += 4;
            if (stringSize <= 0 ||
                stringSize > buffer.length - index ||
                buffer[index + stringSize - 1] !== 0)
                throw new BSONError('bad string length in bson');
            const namespace = ByteUtils.toUTF8(buffer, index, index + stringSize - 1, shouldValidateKey);
            index = index + stringSize;
            const oidBuffer = ByteUtils.allocateUnsafe(12);
            for (let i = 0; i < 12; i++)
                oidBuffer[i] = buffer[index + i];
            const oid = new ObjectId(oidBuffer);
            index = index + 12;
            value = new DBRef(namespace, oid);
        }
        else {
            throw new BSONError(`Detected unknown BSON type ${elementType.toString(16)} for fieldname "${name}"`);
        }
        if (name === '__proto__') {
            Object.defineProperty(object, name, {
                value,
                writable: true,
                enumerable: true,
                configurable: true
            });
        }
        else {
            object[name] = value;
        }
    }
    if (size !== index - startIndex) {
        if (isArray)
            throw new BSONError('corrupt array bson');
        throw new BSONError('corrupt object bson');
    }
    if (!isPossibleDBRef)
        return object;
    if (isDBRefLike(object)) {
        const copy = Object.assign({}, object);
        delete copy.$ref;
        delete copy.$id;
        delete copy.$db;
        return new DBRef(object.$ref, object.$id, object.$db, copy);
    }
    return object;
}

const regexp = /\x00/;
const ignoreKeys = new Set(['$db', '$ref', '$id', '$clusterTime']);
function serializeString(buffer, key, value, index) {
    buffer[index++] = BSON_DATA_STRING;
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index = index + numberOfWrittenBytes + 1;
    buffer[index - 1] = 0;
    const size = ByteUtils.encodeUTF8Into(buffer, value, index + 4);
    NumberUtils.setInt32LE(buffer, index, size + 1);
    index = index + 4 + size;
    buffer[index++] = 0;
    return index;
}
function serializeNumber(buffer, key, value, index) {
    const isNegativeZero = Object.is(value, -0);
    const type = !isNegativeZero &&
        Number.isSafeInteger(value) &&
        value <= BSON_INT32_MAX &&
        value >= BSON_INT32_MIN
        ? BSON_DATA_INT
        : BSON_DATA_NUMBER;
    buffer[index++] = type;
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0x00;
    if (type === BSON_DATA_INT) {
        index += NumberUtils.setInt32LE(buffer, index, value);
    }
    else {
        index += NumberUtils.setFloat64LE(buffer, index, value);
    }
    return index;
}
function serializeBigInt(buffer, key, value, index) {
    buffer[index++] = BSON_DATA_LONG;
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index += numberOfWrittenBytes;
    buffer[index++] = 0;
    index += NumberUtils.setBigInt64LE(buffer, index, value);
    return index;
}
function serializeNull(buffer, key, _, index) {
    buffer[index++] = BSON_DATA_NULL;
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    return index;
}
function serializeBoolean(buffer, key, value, index) {
    buffer[index++] = BSON_DATA_BOOLEAN;
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    buffer[index++] = value ? 1 : 0;
    return index;
}
function serializeDate(buffer, key, value, index) {
    buffer[index++] = BSON_DATA_DATE;
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    const dateInMilis = Long.fromNumber(value.getTime());
    const lowBits = dateInMilis.getLowBits();
    const highBits = dateInMilis.getHighBits();
    index += NumberUtils.setInt32LE(buffer, index, lowBits);
    index += NumberUtils.setInt32LE(buffer, index, highBits);
    return index;
}
function serializeRegExp(buffer, key, value, index) {
    buffer[index++] = BSON_DATA_REGEXP;
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    if (value.source && value.source.match(regexp) != null) {
        throw new BSONError('value ' + value.source + ' must not contain null bytes');
    }
    index = index + ByteUtils.encodeUTF8Into(buffer, value.source, index);
    buffer[index++] = 0x00;
    if (value.ignoreCase)
        buffer[index++] = 0x69;
    if (value.global)
        buffer[index++] = 0x73;
    if (value.multiline)
        buffer[index++] = 0x6d;
    buffer[index++] = 0x00;
    return index;
}
function serializeBSONRegExp(buffer, key, value, index) {
    buffer[index++] = BSON_DATA_REGEXP;
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    if (value.pattern.match(regexp) != null) {
        throw new BSONError('pattern ' + value.pattern + ' must not contain null bytes');
    }
    index = index + ByteUtils.encodeUTF8Into(buffer, value.pattern, index);
    buffer[index++] = 0x00;
    const sortedOptions = value.options.split('').sort().join('');
    index = index + ByteUtils.encodeUTF8Into(buffer, sortedOptions, index);
    buffer[index++] = 0x00;
    return index;
}
function serializeMinMax(buffer, key, value, index) {
    if (value === null) {
        buffer[index++] = BSON_DATA_NULL;
    }
    else if (value._bsontype === 'MinKey') {
        buffer[index++] = BSON_DATA_MIN_KEY;
    }
    else {
        buffer[index++] = BSON_DATA_MAX_KEY;
    }
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    return index;
}
function serializeObjectId(buffer, key, value, index) {
    buffer[index++] = BSON_DATA_OID;
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    index += value.serializeInto(buffer, index);
    return index;
}
function serializeBuffer(buffer, key, value, index) {
    buffer[index++] = BSON_DATA_BINARY;
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    const size = value.length;
    index += NumberUtils.setInt32LE(buffer, index, size);
    buffer[index++] = BSON_BINARY_SUBTYPE_DEFAULT;
    if (size <= 16) {
        for (let i = 0; i < size; i++)
            buffer[index + i] = value[i];
    }
    else {
        buffer.set(value, index);
    }
    index = index + size;
    return index;
}
function serializeObject(buffer, key, value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, path) {
    if (path.has(value)) {
        throw new BSONError('Cannot convert circular structure to BSON');
    }
    path.add(value);
    buffer[index++] = Array.isArray(value) ? BSON_DATA_ARRAY : BSON_DATA_OBJECT;
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    const endIndex = serializeInto(buffer, value, checkKeys, index, depth + 1, serializeFunctions, ignoreUndefined, path);
    path.delete(value);
    return endIndex;
}
function serializeDecimal128(buffer, key, value, index) {
    buffer[index++] = BSON_DATA_DECIMAL128;
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    for (let i = 0; i < 16; i++)
        buffer[index + i] = value.bytes[i];
    return index + 16;
}
function serializeLong(buffer, key, value, index) {
    buffer[index++] =
        value._bsontype === 'Long' ? BSON_DATA_LONG : BSON_DATA_TIMESTAMP;
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    const lowBits = value.getLowBits();
    const highBits = value.getHighBits();
    index += NumberUtils.setInt32LE(buffer, index, lowBits);
    index += NumberUtils.setInt32LE(buffer, index, highBits);
    return index;
}
function serializeInt32(buffer, key, value, index) {
    value = value.valueOf();
    buffer[index++] = BSON_DATA_INT;
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    index += NumberUtils.setInt32LE(buffer, index, value);
    return index;
}
function serializeDouble(buffer, key, value, index) {
    buffer[index++] = BSON_DATA_NUMBER;
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    index += NumberUtils.setFloat64LE(buffer, index, value.value);
    return index;
}
function serializeFunction(buffer, key, value, index) {
    buffer[index++] = BSON_DATA_CODE;
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    const functionString = value.toString();
    const size = ByteUtils.encodeUTF8Into(buffer, functionString, index + 4) + 1;
    NumberUtils.setInt32LE(buffer, index, size);
    index = index + 4 + size - 1;
    buffer[index++] = 0;
    return index;
}
function serializeCode(buffer, key, value, index, checkKeys = false, depth = 0, serializeFunctions = false, ignoreUndefined = true, path) {
    if (value.scope && typeof value.scope === 'object') {
        buffer[index++] = BSON_DATA_CODE_W_SCOPE;
        const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
        index = index + numberOfWrittenBytes;
        buffer[index++] = 0;
        let startIndex = index;
        const functionString = value.code;
        index = index + 4;
        const codeSize = ByteUtils.encodeUTF8Into(buffer, functionString, index + 4) + 1;
        NumberUtils.setInt32LE(buffer, index, codeSize);
        buffer[index + 4 + codeSize - 1] = 0;
        index = index + codeSize + 4;
        const endIndex = serializeInto(buffer, value.scope, checkKeys, index, depth + 1, serializeFunctions, ignoreUndefined, path);
        index = endIndex - 1;
        const totalSize = endIndex - startIndex;
        startIndex += NumberUtils.setInt32LE(buffer, startIndex, totalSize);
        buffer[index++] = 0;
    }
    else {
        buffer[index++] = BSON_DATA_CODE;
        const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
        index = index + numberOfWrittenBytes;
        buffer[index++] = 0;
        const functionString = value.code.toString();
        const size = ByteUtils.encodeUTF8Into(buffer, functionString, index + 4) + 1;
        NumberUtils.setInt32LE(buffer, index, size);
        index = index + 4 + size - 1;
        buffer[index++] = 0;
    }
    return index;
}
function serializeBinary(buffer, key, value, index) {
    buffer[index++] = BSON_DATA_BINARY;
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    const data = value.buffer;
    let size = value.position;
    if (value.sub_type === Binary.SUBTYPE_BYTE_ARRAY)
        size = size + 4;
    index += NumberUtils.setInt32LE(buffer, index, size);
    buffer[index++] = value.sub_type;
    if (value.sub_type === Binary.SUBTYPE_BYTE_ARRAY) {
        size = size - 4;
        index += NumberUtils.setInt32LE(buffer, index, size);
    }
    if (value.sub_type === Binary.SUBTYPE_VECTOR) {
        validateBinaryVector(value);
    }
    if (size <= 16) {
        for (let i = 0; i < size; i++)
            buffer[index + i] = data[i];
    }
    else {
        buffer.set(data, index);
    }
    index = index + value.position;
    return index;
}
function serializeSymbol(buffer, key, value, index) {
    buffer[index++] = BSON_DATA_SYMBOL;
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    const size = ByteUtils.encodeUTF8Into(buffer, value.value, index + 4) + 1;
    NumberUtils.setInt32LE(buffer, index, size);
    index = index + 4 + size - 1;
    buffer[index++] = 0;
    return index;
}
function serializeDBRef(buffer, key, value, index, depth, serializeFunctions, path) {
    buffer[index++] = BSON_DATA_OBJECT;
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    let startIndex = index;
    let output = {
        $ref: value.collection || value.namespace,
        $id: value.oid
    };
    if (value.db != null) {
        output.$db = value.db;
    }
    output = Object.assign(output, value.fields);
    const endIndex = serializeInto(buffer, output, false, index, depth + 1, serializeFunctions, true, path);
    const size = endIndex - startIndex;
    startIndex += NumberUtils.setInt32LE(buffer, index, size);
    return endIndex;
}
function serializeInto(buffer, object, checkKeys, startingIndex, depth, serializeFunctions, ignoreUndefined, path) {
    if (path == null) {
        if (object == null) {
            buffer[0] = 0x05;
            buffer[1] = 0x00;
            buffer[2] = 0x00;
            buffer[3] = 0x00;
            buffer[4] = 0x00;
            return 5;
        }
        if (Array.isArray(object)) {
            throw new BSONError('serialize does not support an array as the root input');
        }
        if (typeof object !== 'object') {
            throw new BSONError('serialize does not support non-object as the root input');
        }
        else if ('_bsontype' in object && typeof object._bsontype === 'string') {
            throw new BSONError(`BSON types cannot be serialized as a document`);
        }
        else if (isDate(object) ||
            isRegExp(object) ||
            isUint8Array(object) ||
            isAnyArrayBuffer(object)) {
            throw new BSONError(`date, regexp, typedarray, and arraybuffer cannot be BSON documents`);
        }
        path = new Set();
    }
    path.add(object);
    let index = startingIndex + 4;
    if (Array.isArray(object)) {
        for (let i = 0; i < object.length; i++) {
            const key = `${i}`;
            let value = object[i];
            if (typeof value?.toBSON === 'function') {
                value = value.toBSON();
            }
            const type = typeof value;
            if (value === undefined) {
                index = serializeNull(buffer, key, value, index);
            }
            else if (value === null) {
                index = serializeNull(buffer, key, value, index);
            }
            else if (type === 'string') {
                index = serializeString(buffer, key, value, index);
            }
            else if (type === 'number') {
                index = serializeNumber(buffer, key, value, index);
            }
            else if (type === 'bigint') {
                index = serializeBigInt(buffer, key, value, index);
            }
            else if (type === 'boolean') {
                index = serializeBoolean(buffer, key, value, index);
            }
            else if (type === 'object' && value._bsontype == null) {
                if (value instanceof Date || isDate(value)) {
                    index = serializeDate(buffer, key, value, index);
                }
                else if (value instanceof Uint8Array || isUint8Array(value)) {
                    index = serializeBuffer(buffer, key, value, index);
                }
                else if (value instanceof RegExp || isRegExp(value)) {
                    index = serializeRegExp(buffer, key, value, index);
                }
                else {
                    index = serializeObject(buffer, key, value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, path);
                }
            }
            else if (type === 'object') {
                if (value[BSON_VERSION_SYMBOL] !== BSON_MAJOR_VERSION) {
                    throw new BSONVersionError();
                }
                else if (value._bsontype === 'ObjectId') {
                    index = serializeObjectId(buffer, key, value, index);
                }
                else if (value._bsontype === 'Decimal128') {
                    index = serializeDecimal128(buffer, key, value, index);
                }
                else if (value._bsontype === 'Long' || value._bsontype === 'Timestamp') {
                    index = serializeLong(buffer, key, value, index);
                }
                else if (value._bsontype === 'Double') {
                    index = serializeDouble(buffer, key, value, index);
                }
                else if (value._bsontype === 'Code') {
                    index = serializeCode(buffer, key, value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, path);
                }
                else if (value._bsontype === 'Binary') {
                    index = serializeBinary(buffer, key, value, index);
                }
                else if (value._bsontype === 'BSONSymbol') {
                    index = serializeSymbol(buffer, key, value, index);
                }
                else if (value._bsontype === 'DBRef') {
                    index = serializeDBRef(buffer, key, value, index, depth, serializeFunctions, path);
                }
                else if (value._bsontype === 'BSONRegExp') {
                    index = serializeBSONRegExp(buffer, key, value, index);
                }
                else if (value._bsontype === 'Int32') {
                    index = serializeInt32(buffer, key, value, index);
                }
                else if (value._bsontype === 'MinKey' || value._bsontype === 'MaxKey') {
                    index = serializeMinMax(buffer, key, value, index);
                }
                else if (typeof value._bsontype !== 'undefined') {
                    throw new BSONError(`Unrecognized or invalid _bsontype: ${String(value._bsontype)}`);
                }
            }
            else if (type === 'function' && serializeFunctions) {
                index = serializeFunction(buffer, key, value, index);
            }
        }
    }
    else if (object instanceof Map || isMap(object)) {
        const iterator = object.entries();
        let done = false;
        while (!done) {
            const entry = iterator.next();
            done = !!entry.done;
            if (done)
                continue;
            const key = entry.value ? entry.value[0] : undefined;
            let value = entry.value ? entry.value[1] : undefined;
            if (typeof value?.toBSON === 'function') {
                value = value.toBSON();
            }
            const type = typeof value;
            if (typeof key === 'string' && !ignoreKeys.has(key)) {
                if (key.match(regexp) != null) {
                    throw new BSONError('key ' + key + ' must not contain null bytes');
                }
                if (checkKeys) {
                    if ('$' === key[0]) {
                        throw new BSONError('key ' + key + " must not start with '$'");
                    }
                    else if (key.includes('.')) {
                        throw new BSONError('key ' + key + " must not contain '.'");
                    }
                }
            }
            if (value === undefined) {
                if (ignoreUndefined === false)
                    index = serializeNull(buffer, key, value, index);
            }
            else if (value === null) {
                index = serializeNull(buffer, key, value, index);
            }
            else if (type === 'string') {
                index = serializeString(buffer, key, value, index);
            }
            else if (type === 'number') {
                index = serializeNumber(buffer, key, value, index);
            }
            else if (type === 'bigint') {
                index = serializeBigInt(buffer, key, value, index);
            }
            else if (type === 'boolean') {
                index = serializeBoolean(buffer, key, value, index);
            }
            else if (type === 'object' && value._bsontype == null) {
                if (value instanceof Date || isDate(value)) {
                    index = serializeDate(buffer, key, value, index);
                }
                else if (value instanceof Uint8Array || isUint8Array(value)) {
                    index = serializeBuffer(buffer, key, value, index);
                }
                else if (value instanceof RegExp || isRegExp(value)) {
                    index = serializeRegExp(buffer, key, value, index);
                }
                else {
                    index = serializeObject(buffer, key, value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, path);
                }
            }
            else if (type === 'object') {
                if (value[BSON_VERSION_SYMBOL] !== BSON_MAJOR_VERSION) {
                    throw new BSONVersionError();
                }
                else if (value._bsontype === 'ObjectId') {
                    index = serializeObjectId(buffer, key, value, index);
                }
                else if (value._bsontype === 'Decimal128') {
                    index = serializeDecimal128(buffer, key, value, index);
                }
                else if (value._bsontype === 'Long' || value._bsontype === 'Timestamp') {
                    index = serializeLong(buffer, key, value, index);
                }
                else if (value._bsontype === 'Double') {
                    index = serializeDouble(buffer, key, value, index);
                }
                else if (value._bsontype === 'Code') {
                    index = serializeCode(buffer, key, value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, path);
                }
                else if (value._bsontype === 'Binary') {
                    index = serializeBinary(buffer, key, value, index);
                }
                else if (value._bsontype === 'BSONSymbol') {
                    index = serializeSymbol(buffer, key, value, index);
                }
                else if (value._bsontype === 'DBRef') {
                    index = serializeDBRef(buffer, key, value, index, depth, serializeFunctions, path);
                }
                else if (value._bsontype === 'BSONRegExp') {
                    index = serializeBSONRegExp(buffer, key, value, index);
                }
                else if (value._bsontype === 'Int32') {
                    index = serializeInt32(buffer, key, value, index);
                }
                else if (value._bsontype === 'MinKey' || value._bsontype === 'MaxKey') {
                    index = serializeMinMax(buffer, key, value, index);
                }
                else if (typeof value._bsontype !== 'undefined') {
                    throw new BSONError(`Unrecognized or invalid _bsontype: ${String(value._bsontype)}`);
                }
            }
            else if (type === 'function' && serializeFunctions) {
                index = serializeFunction(buffer, key, value, index);
            }
        }
    }
    else {
        if (typeof object?.toBSON === 'function') {
            object = object.toBSON();
            if (object != null && typeof object !== 'object') {
                throw new BSONError('toBSON function did not return an object');
            }
        }
        for (const key of Object.keys(object)) {
            let value = object[key];
            if (typeof value?.toBSON === 'function') {
                value = value.toBSON();
            }
            const type = typeof value;
            if (typeof key === 'string' && !ignoreKeys.has(key)) {
                if (key.match(regexp) != null) {
                    throw new BSONError('key ' + key + ' must not contain null bytes');
                }
                if (checkKeys) {
                    if ('$' === key[0]) {
                        throw new BSONError('key ' + key + " must not start with '$'");
                    }
                    else if (key.includes('.')) {
                        throw new BSONError('key ' + key + " must not contain '.'");
                    }
                }
            }
            if (value === undefined) {
                if (ignoreUndefined === false)
                    index = serializeNull(buffer, key, value, index);
            }
            else if (value === null) {
                index = serializeNull(buffer, key, value, index);
            }
            else if (type === 'string') {
                index = serializeString(buffer, key, value, index);
            }
            else if (type === 'number') {
                index = serializeNumber(buffer, key, value, index);
            }
            else if (type === 'bigint') {
                index = serializeBigInt(buffer, key, value, index);
            }
            else if (type === 'boolean') {
                index = serializeBoolean(buffer, key, value, index);
            }
            else if (type === 'object' && value._bsontype == null) {
                if (value instanceof Date || isDate(value)) {
                    index = serializeDate(buffer, key, value, index);
                }
                else if (value instanceof Uint8Array || isUint8Array(value)) {
                    index = serializeBuffer(buffer, key, value, index);
                }
                else if (value instanceof RegExp || isRegExp(value)) {
                    index = serializeRegExp(buffer, key, value, index);
                }
                else {
                    index = serializeObject(buffer, key, value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, path);
                }
            }
            else if (type === 'object') {
                if (value[BSON_VERSION_SYMBOL] !== BSON_MAJOR_VERSION) {
                    throw new BSONVersionError();
                }
                else if (value._bsontype === 'ObjectId') {
                    index = serializeObjectId(buffer, key, value, index);
                }
                else if (value._bsontype === 'Decimal128') {
                    index = serializeDecimal128(buffer, key, value, index);
                }
                else if (value._bsontype === 'Long' || value._bsontype === 'Timestamp') {
                    index = serializeLong(buffer, key, value, index);
                }
                else if (value._bsontype === 'Double') {
                    index = serializeDouble(buffer, key, value, index);
                }
                else if (value._bsontype === 'Code') {
                    index = serializeCode(buffer, key, value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, path);
                }
                else if (value._bsontype === 'Binary') {
                    index = serializeBinary(buffer, key, value, index);
                }
                else if (value._bsontype === 'BSONSymbol') {
                    index = serializeSymbol(buffer, key, value, index);
                }
                else if (value._bsontype === 'DBRef') {
                    index = serializeDBRef(buffer, key, value, index, depth, serializeFunctions, path);
                }
                else if (value._bsontype === 'BSONRegExp') {
                    index = serializeBSONRegExp(buffer, key, value, index);
                }
                else if (value._bsontype === 'Int32') {
                    index = serializeInt32(buffer, key, value, index);
                }
                else if (value._bsontype === 'MinKey' || value._bsontype === 'MaxKey') {
                    index = serializeMinMax(buffer, key, value, index);
                }
                else if (typeof value._bsontype !== 'undefined') {
                    throw new BSONError(`Unrecognized or invalid _bsontype: ${String(value._bsontype)}`);
                }
            }
            else if (type === 'function' && serializeFunctions) {
                index = serializeFunction(buffer, key, value, index);
            }
        }
    }
    path.delete(object);
    buffer[index++] = 0x00;
    const size = index - startingIndex;
    startingIndex += NumberUtils.setInt32LE(buffer, startingIndex, size);
    return index;
}

function isBSONType(value) {
    return (value != null &&
        typeof value === 'object' &&
        '_bsontype' in value &&
        typeof value._bsontype === 'string');
}
const keysToCodecs = {
    $oid: ObjectId,
    $binary: Binary,
    $uuid: Binary,
    $symbol: BSONSymbol,
    $numberInt: Int32,
    $numberDecimal: Decimal128,
    $numberDouble: Double,
    $numberLong: Long,
    $minKey: MinKey,
    $maxKey: MaxKey,
    $regex: BSONRegExp,
    $regularExpression: BSONRegExp,
    $timestamp: Timestamp
};
function deserializeValue(value, options = {}) {
    if (typeof value === 'number') {
        const in32BitRange = value <= BSON_INT32_MAX && value >= BSON_INT32_MIN;
        const in64BitRange = value <= BSON_INT64_MAX && value >= BSON_INT64_MIN;
        if (options.relaxed || options.legacy) {
            return value;
        }
        if (Number.isInteger(value) && !Object.is(value, -0)) {
            if (in32BitRange) {
                return new Int32(value);
            }
            if (in64BitRange) {
                if (options.useBigInt64) {
                    return BigInt(value);
                }
                return Long.fromNumber(value);
            }
        }
        return new Double(value);
    }
    if (value == null || typeof value !== 'object')
        return value;
    if (value.$undefined)
        return null;
    const keys = Object.keys(value).filter(k => k.startsWith('$') && value[k] != null);
    for (let i = 0; i < keys.length; i++) {
        const c = keysToCodecs[keys[i]];
        if (c)
            return c.fromExtendedJSON(value, options);
    }
    if (value.$date != null) {
        const d = value.$date;
        const date = new Date();
        if (options.legacy) {
            if (typeof d === 'number')
                date.setTime(d);
            else if (typeof d === 'string')
                date.setTime(Date.parse(d));
            else if (typeof d === 'bigint')
                date.setTime(Number(d));
            else
                throw new BSONRuntimeError(`Unrecognized type for EJSON date: ${typeof d}`);
        }
        else {
            if (typeof d === 'string')
                date.setTime(Date.parse(d));
            else if (Long.isLong(d))
                date.setTime(d.toNumber());
            else if (typeof d === 'number' && options.relaxed)
                date.setTime(d);
            else if (typeof d === 'bigint')
                date.setTime(Number(d));
            else
                throw new BSONRuntimeError(`Unrecognized type for EJSON date: ${typeof d}`);
        }
        return date;
    }
    if (value.$code != null) {
        const copy = Object.assign({}, value);
        if (value.$scope) {
            copy.$scope = deserializeValue(value.$scope);
        }
        return Code.fromExtendedJSON(value);
    }
    if (isDBRefLike(value) || value.$dbPointer) {
        const v = value.$ref ? value : value.$dbPointer;
        if (v instanceof DBRef)
            return v;
        const dollarKeys = Object.keys(v).filter(k => k.startsWith('$'));
        let valid = true;
        dollarKeys.forEach(k => {
            if (['$ref', '$id', '$db'].indexOf(k) === -1)
                valid = false;
        });
        if (valid)
            return DBRef.fromExtendedJSON(v);
    }
    return value;
}
function serializeArray(array, options) {
    return array.map((v, index) => {
        options.seenObjects.push({ propertyName: `index ${index}`, obj: null });
        try {
            return serializeValue(v, options);
        }
        finally {
            options.seenObjects.pop();
        }
    });
}
function getISOString(date) {
    const isoStr = date.toISOString();
    return date.getUTCMilliseconds() !== 0 ? isoStr : isoStr.slice(0, -5) + 'Z';
}
function serializeValue(value, options) {
    if (value instanceof Map || isMap(value)) {
        const obj = Object.create(null);
        for (const [k, v] of value) {
            if (typeof k !== 'string') {
                throw new BSONError('Can only serialize maps with string keys');
            }
            obj[k] = v;
        }
        return serializeValue(obj, options);
    }
    if ((typeof value === 'object' || typeof value === 'function') && value !== null) {
        const index = options.seenObjects.findIndex(entry => entry.obj === value);
        if (index !== -1) {
            const props = options.seenObjects.map(entry => entry.propertyName);
            const leadingPart = props
                .slice(0, index)
                .map(prop => `${prop} -> `)
                .join('');
            const alreadySeen = props[index];
            const circularPart = ' -> ' +
                props
                    .slice(index + 1, props.length - 1)
                    .map(prop => `${prop} -> `)
                    .join('');
            const current = props[props.length - 1];
            const leadingSpace = ' '.repeat(leadingPart.length + alreadySeen.length / 2);
            const dashes = '-'.repeat(circularPart.length + (alreadySeen.length + current.length) / 2 - 1);
            throw new BSONError('Converting circular structure to EJSON:\n' +
                `    ${leadingPart}${alreadySeen}${circularPart}${current}\n` +
                `    ${leadingSpace}\\${dashes}/`);
        }
        options.seenObjects[options.seenObjects.length - 1].obj = value;
    }
    if (Array.isArray(value))
        return serializeArray(value, options);
    if (value === undefined)
        return null;
    if (value instanceof Date || isDate(value)) {
        const dateNum = value.getTime(), inRange = dateNum > -1 && dateNum < 253402318800000;
        if (options.legacy) {
            return options.relaxed && inRange
                ? { $date: value.getTime() }
                : { $date: getISOString(value) };
        }
        return options.relaxed && inRange
            ? { $date: getISOString(value) }
            : { $date: { $numberLong: value.getTime().toString() } };
    }
    if (typeof value === 'number' && (!options.relaxed || !isFinite(value))) {
        if (Number.isInteger(value) && !Object.is(value, -0)) {
            if (value >= BSON_INT32_MIN && value <= BSON_INT32_MAX) {
                return { $numberInt: value.toString() };
            }
            if (value >= BSON_INT64_MIN && value <= BSON_INT64_MAX) {
                return { $numberLong: value.toString() };
            }
        }
        return { $numberDouble: Object.is(value, -0) ? '-0.0' : value.toString() };
    }
    if (typeof value === 'bigint') {
        if (!options.relaxed) {
            return { $numberLong: BigInt.asIntN(64, value).toString() };
        }
        return Number(BigInt.asIntN(64, value));
    }
    if (value instanceof RegExp || isRegExp(value)) {
        let flags = value.flags;
        if (flags === undefined) {
            const match = value.toString().match(/[gimuy]*$/);
            if (match) {
                flags = match[0];
            }
        }
        const rx = new BSONRegExp(value.source, flags);
        return rx.toExtendedJSON(options);
    }
    if (value != null && typeof value === 'object')
        return serializeDocument(value, options);
    return value;
}
const BSON_TYPE_MAPPINGS = {
    Binary: (o) => new Binary(o.value(), o.sub_type),
    Code: (o) => new Code(o.code, o.scope),
    DBRef: (o) => new DBRef(o.collection || o.namespace, o.oid, o.db, o.fields),
    Decimal128: (o) => new Decimal128(o.bytes),
    Double: (o) => new Double(o.value),
    Int32: (o) => new Int32(o.value),
    Long: (o) => Long.fromBits(o.low != null ? o.low : o.low_, o.low != null ? o.high : o.high_, o.low != null ? o.unsigned : o.unsigned_),
    MaxKey: () => new MaxKey(),
    MinKey: () => new MinKey(),
    ObjectId: (o) => new ObjectId(o),
    BSONRegExp: (o) => new BSONRegExp(o.pattern, o.options),
    BSONSymbol: (o) => new BSONSymbol(o.value),
    Timestamp: (o) => Timestamp.fromBits(o.low, o.high)
};
function serializeDocument(doc, options) {
    if (doc == null || typeof doc !== 'object')
        throw new BSONError('not an object instance');
    const bsontype = doc._bsontype;
    if (typeof bsontype === 'undefined') {
        const _doc = {};
        for (const name of Object.keys(doc)) {
            options.seenObjects.push({ propertyName: name, obj: null });
            try {
                const value = serializeValue(doc[name], options);
                if (name === '__proto__') {
                    Object.defineProperty(_doc, name, {
                        value,
                        writable: true,
                        enumerable: true,
                        configurable: true
                    });
                }
                else {
                    _doc[name] = value;
                }
            }
            finally {
                options.seenObjects.pop();
            }
        }
        return _doc;
    }
    else if (doc != null &&
        typeof doc === 'object' &&
        typeof doc._bsontype === 'string' &&
        doc[BSON_VERSION_SYMBOL] !== BSON_MAJOR_VERSION) {
        throw new BSONVersionError();
    }
    else if (isBSONType(doc)) {
        let outDoc = doc;
        if (typeof outDoc.toExtendedJSON !== 'function') {
            const mapper = BSON_TYPE_MAPPINGS[doc._bsontype];
            if (!mapper) {
                throw new BSONError('Unrecognized or invalid _bsontype: ' + doc._bsontype);
            }
            outDoc = mapper(outDoc);
        }
        if (bsontype === 'Code' && outDoc.scope) {
            outDoc = new Code(outDoc.code, serializeValue(outDoc.scope, options));
        }
        else if (bsontype === 'DBRef' && outDoc.oid) {
            outDoc = new DBRef(serializeValue(outDoc.collection, options), serializeValue(outDoc.oid, options), serializeValue(outDoc.db, options), serializeValue(outDoc.fields, options));
        }
        return outDoc.toExtendedJSON(options);
    }
    else {
        throw new BSONError('_bsontype must be a string, but was: ' + typeof bsontype);
    }
}
function parse(text, options) {
    const ejsonOptions = {
        useBigInt64: options?.useBigInt64 ?? false,
        relaxed: options?.relaxed ?? true,
        legacy: options?.legacy ?? false
    };
    return JSON.parse(text, (key, value) => {
        if (key.indexOf('\x00') !== -1) {
            throw new BSONError(`BSON Document field names cannot contain null bytes, found: ${JSON.stringify(key)}`);
        }
        return deserializeValue(value, ejsonOptions);
    });
}
function stringify(value, replacer, space, options) {
    if (space != null && typeof space === 'object') {
        options = space;
        space = 0;
    }
    if (replacer != null && typeof replacer === 'object' && !Array.isArray(replacer)) {
        options = replacer;
        replacer = undefined;
        space = 0;
    }
    const serializeOptions = Object.assign({ relaxed: true, legacy: false }, options, {
        seenObjects: [{ propertyName: '(root)', obj: null }]
    });
    const doc = serializeValue(value, serializeOptions);
    return JSON.stringify(doc, replacer, space);
}
function EJSONserialize(value, options) {
    options = options || {};
    return JSON.parse(stringify(value, options));
}
function EJSONdeserialize(ejson, options) {
    options = options || {};
    return parse(JSON.stringify(ejson), options);
}
const EJSON = Object.create(null);
EJSON.parse = parse;
EJSON.stringify = stringify;
EJSON.serialize = EJSONserialize;
EJSON.deserialize = EJSONdeserialize;
Object.freeze(EJSON);

const BSONElementType = {
    double: 1,
    string: 2,
    object: 3,
    array: 4,
    binData: 5,
    undefined: 6,
    objectId: 7,
    bool: 8,
    date: 9,
    null: 10,
    regex: 11,
    dbPointer: 12,
    javascript: 13,
    symbol: 14,
    javascriptWithScope: 15,
    int: 16,
    timestamp: 17,
    long: 18,
    decimal: 19,
    minKey: 255,
    maxKey: 127
};
function getSize(source, offset) {
    try {
        return NumberUtils.getNonnegativeInt32LE(source, offset);
    }
    catch (cause) {
        throw new BSONOffsetError('BSON size cannot be negative', offset, { cause });
    }
}
function findNull(bytes, offset) {
    let nullTerminatorOffset = offset;
    for (; bytes[nullTerminatorOffset] !== 0x00; nullTerminatorOffset++)
        ;
    if (nullTerminatorOffset === bytes.length - 1) {
        throw new BSONOffsetError('Null terminator not found', offset);
    }
    return nullTerminatorOffset;
}
function parseToElements(bytes, startOffset = 0) {
    startOffset ??= 0;
    if (bytes.length < 5) {
        throw new BSONOffsetError(`Input must be at least 5 bytes, got ${bytes.length} bytes`, startOffset);
    }
    const documentSize = getSize(bytes, startOffset);
    if (documentSize > bytes.length - startOffset) {
        throw new BSONOffsetError(`Parsed documentSize (${documentSize} bytes) does not match input length (${bytes.length} bytes)`, startOffset);
    }
    if (bytes[startOffset + documentSize - 1] !== 0x00) {
        throw new BSONOffsetError('BSON documents must end in 0x00', startOffset + documentSize);
    }
    const elements = [];
    let offset = startOffset + 4;
    while (offset <= documentSize + startOffset) {
        const type = bytes[offset];
        offset += 1;
        if (type === 0) {
            if (offset - startOffset !== documentSize) {
                throw new BSONOffsetError(`Invalid 0x00 type byte`, offset);
            }
            break;
        }
        const nameOffset = offset;
        const nameLength = findNull(bytes, offset) - nameOffset;
        offset += nameLength + 1;
        let length;
        if (type === BSONElementType.double ||
            type === BSONElementType.long ||
            type === BSONElementType.date ||
            type === BSONElementType.timestamp) {
            length = 8;
        }
        else if (type === BSONElementType.int) {
            length = 4;
        }
        else if (type === BSONElementType.objectId) {
            length = 12;
        }
        else if (type === BSONElementType.decimal) {
            length = 16;
        }
        else if (type === BSONElementType.bool) {
            length = 1;
        }
        else if (type === BSONElementType.null ||
            type === BSONElementType.undefined ||
            type === BSONElementType.maxKey ||
            type === BSONElementType.minKey) {
            length = 0;
        }
        else if (type === BSONElementType.regex) {
            length = findNull(bytes, findNull(bytes, offset) + 1) + 1 - offset;
        }
        else if (type === BSONElementType.object ||
            type === BSONElementType.array ||
            type === BSONElementType.javascriptWithScope) {
            length = getSize(bytes, offset);
        }
        else if (type === BSONElementType.string ||
            type === BSONElementType.binData ||
            type === BSONElementType.dbPointer ||
            type === BSONElementType.javascript ||
            type === BSONElementType.symbol) {
            length = getSize(bytes, offset) + 4;
            if (type === BSONElementType.binData) {
                length += 1;
            }
            if (type === BSONElementType.dbPointer) {
                length += 12;
            }
        }
        else {
            throw new BSONOffsetError(`Invalid 0x${type.toString(16).padStart(2, '0')} type byte`, offset);
        }
        if (length > documentSize) {
            throw new BSONOffsetError('value reports length larger than document', offset);
        }
        elements.push([type, nameOffset, nameLength, offset, length]);
        offset += length;
    }
    return elements;
}

const onDemand = Object.create(null);
onDemand.parseToElements = parseToElements;
onDemand.ByteUtils = ByteUtils;
onDemand.NumberUtils = NumberUtils;
Object.freeze(onDemand);

const MAXSIZE = 1024 * 1024 * 17;
let buffer = ByteUtils.allocate(MAXSIZE);
function setInternalBufferSize(size) {
    if (buffer.length < size) {
        buffer = ByteUtils.allocate(size);
    }
}
function serialize(object, options = {}) {
    const checkKeys = typeof options.checkKeys === 'boolean' ? options.checkKeys : false;
    const serializeFunctions = typeof options.serializeFunctions === 'boolean' ? options.serializeFunctions : false;
    const ignoreUndefined = typeof options.ignoreUndefined === 'boolean' ? options.ignoreUndefined : true;
    const minInternalBufferSize = typeof options.minInternalBufferSize === 'number' ? options.minInternalBufferSize : MAXSIZE;
    if (buffer.length < minInternalBufferSize) {
        buffer = ByteUtils.allocate(minInternalBufferSize);
    }
    const serializationIndex = serializeInto(buffer, object, checkKeys, 0, 0, serializeFunctions, ignoreUndefined, null);
    const finishedBuffer = ByteUtils.allocateUnsafe(serializationIndex);
    finishedBuffer.set(buffer.subarray(0, serializationIndex), 0);
    return finishedBuffer;
}
function serializeWithBufferAndIndex(object, finalBuffer, options = {}) {
    const checkKeys = typeof options.checkKeys === 'boolean' ? options.checkKeys : false;
    const serializeFunctions = typeof options.serializeFunctions === 'boolean' ? options.serializeFunctions : false;
    const ignoreUndefined = typeof options.ignoreUndefined === 'boolean' ? options.ignoreUndefined : true;
    const startIndex = typeof options.index === 'number' ? options.index : 0;
    const serializationIndex = serializeInto(buffer, object, checkKeys, 0, 0, serializeFunctions, ignoreUndefined, null);
    finalBuffer.set(buffer.subarray(0, serializationIndex), startIndex);
    return startIndex + serializationIndex - 1;
}
function deserialize(buffer, options = {}) {
    return internalDeserialize(ByteUtils.toLocalBufferType(buffer), options);
}
function calculateObjectSize(object, options = {}) {
    options = options || {};
    const serializeFunctions = typeof options.serializeFunctions === 'boolean' ? options.serializeFunctions : false;
    const ignoreUndefined = typeof options.ignoreUndefined === 'boolean' ? options.ignoreUndefined : true;
    return internalCalculateObjectSize(object, serializeFunctions, ignoreUndefined);
}
function deserializeStream(data, startIndex, numberOfDocuments, documents, docStartIndex, options) {
    const internalOptions = Object.assign({ allowObjectSmallerThanBufferSize: true, index: 0 }, options);
    const bufferData = ByteUtils.toLocalBufferType(data);
    let index = startIndex;
    for (let i = 0; i < numberOfDocuments; i++) {
        const size = NumberUtils.getInt32LE(bufferData, index);
        internalOptions.index = index;
        documents[docStartIndex + i] = internalDeserialize(bufferData, internalOptions);
        index = index + size;
    }
    return index;
}

var bson = /*#__PURE__*/Object.freeze({
    __proto__: null,
    BSONError: BSONError,
    BSONOffsetError: BSONOffsetError,
    BSONRegExp: BSONRegExp,
    BSONRuntimeError: BSONRuntimeError,
    BSONSymbol: BSONSymbol,
    BSONType: BSONType,
    BSONValue: BSONValue,
    BSONVersionError: BSONVersionError,
    Binary: Binary,
    Code: Code,
    DBRef: DBRef,
    Decimal128: Decimal128,
    Double: Double,
    EJSON: EJSON,
    Int32: Int32,
    Long: Long,
    MaxKey: MaxKey,
    MinKey: MinKey,
    ObjectId: ObjectId,
    Timestamp: Timestamp,
    UUID: UUID,
    calculateObjectSize: calculateObjectSize,
    deserialize: deserialize,
    deserializeStream: deserializeStream,
    onDemand: onDemand,
    serialize: serialize,
    serializeWithBufferAndIndex: serializeWithBufferAndIndex,
    setInternalBufferSize: setInternalBufferSize
});


//# sourceMappingURL=bson.mjs.map


/***/ },

/***/ "./lib/src/attachments/IndexDBFileSystemAdapter.js"
/*!*********************************************************!*\
  !*** ./lib/src/attachments/IndexDBFileSystemAdapter.js ***!
  \*********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IndexDBFileSystemStorageAdapter: () => (/* binding */ IndexDBFileSystemStorageAdapter)
/* harmony export */ });
/**
 * IndexDBFileSystemStorageAdapter implements LocalStorageAdapter using IndexedDB.
 * Suitable for web browsers and web-based environments.
 */
class IndexDBFileSystemStorageAdapter {
    databaseName;
    dbPromise;
    constructor(databaseName = 'PowerSyncFiles') {
        this.databaseName = databaseName;
    }
    async initialize() {
        this.dbPromise = new Promise((resolve, reject) => {
            const request = indexedDB.open(this.databaseName, 1);
            request.onupgradeneeded = () => {
                request.result.createObjectStore('files');
            };
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }
    async clear() {
        const db = await this.dbPromise;
        return new Promise((resolve, reject) => {
            const tx = db.transaction('files', 'readwrite');
            const store = tx.objectStore('files');
            const req = store.clear();
            req.onsuccess = () => resolve();
            req.onerror = () => reject(req.error);
        });
    }
    getLocalUri(filename) {
        return `indexeddb://${this.databaseName}/files/${filename}`;
    }
    async getStore(mode = 'readonly') {
        const db = await this.dbPromise;
        const tx = db.transaction('files', mode);
        return tx.objectStore('files');
    }
    async saveFile(filePath, data) {
        const store = await this.getStore('readwrite');
        let dataToStore;
        let size;
        if (typeof data === 'string') {
            const binaryString = atob(data);
            const bytes = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }
            dataToStore = bytes.buffer;
            size = bytes.byteLength;
        }
        else {
            dataToStore = data;
            size = dataToStore.byteLength;
        }
        return await new Promise((resolve, reject) => {
            const req = store.put(dataToStore, filePath);
            req.onsuccess = () => resolve(size);
            req.onerror = () => reject(req.error);
        });
    }
    async readFile(fileUri, options) {
        const store = await this.getStore();
        return new Promise((resolve, reject) => {
            const req = store.get(fileUri);
            req.onsuccess = async () => {
                if (!req.result) {
                    reject(new Error('File not found'));
                    return;
                }
                resolve(req.result);
            };
            req.onerror = () => reject(req.error);
        });
    }
    async deleteFile(uri, options) {
        const store = await this.getStore('readwrite');
        await new Promise((resolve, reject) => {
            const req = store.delete(uri);
            req.onsuccess = () => resolve();
            req.onerror = () => reject(req.error);
        });
    }
    async fileExists(fileUri) {
        const store = await this.getStore();
        return new Promise((resolve, reject) => {
            const req = store.get(fileUri);
            req.onsuccess = () => resolve(!!req.result);
            req.onerror = () => reject(req.error);
        });
    }
    async makeDir(path) {
        // No-op for IndexedDB as it does not have a directory structure
    }
    async rmDir(path) {
        const store = await this.getStore('readwrite');
        const range = IDBKeyRange.bound(path + '/', path + '/\uffff', false, false);
        await new Promise((resolve, reject) => {
            const req = store.delete(range);
            req.onsuccess = () => resolve();
            req.onerror = () => reject(req.error);
        });
    }
}


/***/ },

/***/ "./lib/src/db/NavigatorTriggerClaimManager.js"
/*!****************************************************!*\
  !*** ./lib/src/db/NavigatorTriggerClaimManager.js ***!
  \****************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NAVIGATOR_TRIGGER_CLAIM_MANAGER: () => (/* binding */ NAVIGATOR_TRIGGER_CLAIM_MANAGER)
/* harmony export */ });
/* harmony import */ var _shared_navigator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/navigator.js */ "./lib/src/shared/navigator.js");

/**
 * @internal
 * @experimental
 */
const NAVIGATOR_TRIGGER_CLAIM_MANAGER = {
    async obtainClaim(identifier) {
        return new Promise((resolveReleaser) => {
            (0,_shared_navigator_js__WEBPACK_IMPORTED_MODULE_0__.getNavigatorLocks)().request(identifier, async () => {
                await new Promise((releaseLock) => {
                    resolveReleaser(async () => releaseLock());
                });
            });
        });
    },
    async checkClaim(identifier) {
        const currentState = await (0,_shared_navigator_js__WEBPACK_IMPORTED_MODULE_0__.getNavigatorLocks)().query();
        return currentState.held?.find((heldLock) => heldLock.name == identifier) != null;
    }
};


/***/ },

/***/ "./lib/src/db/PowerSyncDatabase.js"
/*!*****************************************!*\
  !*** ./lib/src/db/PowerSyncDatabase.js ***!
  \*****************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_POWERSYNC_FLAGS: () => (/* binding */ DEFAULT_POWERSYNC_FLAGS),
/* harmony export */   PowerSyncDatabase: () => (/* binding */ PowerSyncDatabase),
/* harmony export */   resolveWebPowerSyncFlags: () => (/* binding */ resolveWebPowerSyncFlags)
/* harmony export */ });
/* harmony import */ var _powersync_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @powersync/common */ "@powersync/common");
/* harmony import */ var async_mutex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! async-mutex */ "async-mutex");
/* harmony import */ var _shared_navigator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/navigator.js */ "./lib/src/shared/navigator.js");
/* harmony import */ var _NavigatorTriggerClaimManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavigatorTriggerClaimManager.js */ "./lib/src/db/NavigatorTriggerClaimManager.js");
/* harmony import */ var _adapters_LockedAsyncDatabaseAdapter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adapters/LockedAsyncDatabaseAdapter.js */ "./lib/src/db/adapters/LockedAsyncDatabaseAdapter.js");
/* harmony import */ var _adapters_wa_sqlite_WASQLiteOpenFactory_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adapters/wa-sqlite/WASQLiteOpenFactory.js */ "./lib/src/db/adapters/wa-sqlite/WASQLiteOpenFactory.js");
/* harmony import */ var _adapters_web_sql_flags_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adapters/web-sql-flags.js */ "./lib/src/db/adapters/web-sql-flags.js");
/* harmony import */ var _sync_SSRWebStreamingSyncImplementation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sync/SSRWebStreamingSyncImplementation.js */ "./lib/src/db/sync/SSRWebStreamingSyncImplementation.js");
/* harmony import */ var _sync_SharedWebStreamingSyncImplementation_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sync/SharedWebStreamingSyncImplementation.js */ "./lib/src/db/sync/SharedWebStreamingSyncImplementation.js");
/* harmony import */ var _sync_WebRemote_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sync/WebRemote.js */ "./lib/src/db/sync/WebRemote.js");
/* harmony import */ var _sync_WebStreamingSyncImplementation_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sync/WebStreamingSyncImplementation.js */ "./lib/src/db/sync/WebStreamingSyncImplementation.js");











const DEFAULT_POWERSYNC_FLAGS = {
    ..._adapters_web_sql_flags_js__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_WEB_SQL_FLAGS,
    externallyUnload: false
};
const resolveWebPowerSyncFlags = (flags) => {
    return {
        ...DEFAULT_POWERSYNC_FLAGS,
        ...flags,
        ...(0,_adapters_web_sql_flags_js__WEBPACK_IMPORTED_MODULE_6__.resolveWebSQLFlags)(flags)
    };
};
/**
 * Asserts that the database options are valid for custom database constructors.
 */
function assertValidDatabaseOptions(options) {
    if ('database' in options && 'encryptionKey' in options) {
        const { database } = options;
        if ((0,_powersync_common__WEBPACK_IMPORTED_MODULE_0__.isSQLOpenFactory)(database) || (0,_powersync_common__WEBPACK_IMPORTED_MODULE_0__.isDBAdapter)(database)) {
            throw new Error(`Invalid configuration: 'encryptionKey' should only be included inside the database object when using a custom ${(0,_powersync_common__WEBPACK_IMPORTED_MODULE_0__.isSQLOpenFactory)(database) ? 'WASQLiteOpenFactory' : 'WASQLiteDBAdapter'} constructor.`);
        }
    }
}
/**
 * A PowerSync database which provides SQLite functionality
 * which is automatically synced.
 *
 * @example
 * ```typescript
 * export const db = new PowerSyncDatabase({
 *  schema: AppSchema,
 *  database: {
 *    dbFilename: 'example.db'
 *  }
 * });
 * ```
 */
class PowerSyncDatabase extends _powersync_common__WEBPACK_IMPORTED_MODULE_0__.AbstractPowerSyncDatabase {
    options;
    static SHARED_MUTEX = new async_mutex__WEBPACK_IMPORTED_MODULE_1__.Mutex();
    unloadListener;
    resolvedFlags;
    constructor(options) {
        super(options);
        this.options = options;
        assertValidDatabaseOptions(options);
        this.resolvedFlags = resolveWebPowerSyncFlags(options.flags);
        if (this.resolvedFlags.enableMultiTabs && !this.resolvedFlags.externallyUnload) {
            this.unloadListener = () => this.close({ disconnect: false });
            window.addEventListener('unload', this.unloadListener);
        }
    }
    async _initialize() {
        if (this.database instanceof _adapters_LockedAsyncDatabaseAdapter_js__WEBPACK_IMPORTED_MODULE_4__.LockedAsyncDatabaseAdapter) {
            /**
             * While init is done automatically,
             * LockedAsyncDatabaseAdapter only exposes config after init.
             * We can explicitly wait for init here in order to access config.
             */
            await this.database.init();
        }
        // In some cases, like the SQLJs adapter, we don't pass a WebDBAdapter, so we need to check.
        if (typeof this.database.getConfiguration == 'function') {
            const config = this.database.getConfiguration();
            if (config.requiresPersistentTriggers) {
                this.triggersImpl.updateDefaults({
                    useStorageByDefault: true
                });
            }
        }
    }
    generateTriggerManagerConfig() {
        return {
            // We need to share hold information between tabs for web
            claimManager: _NavigatorTriggerClaimManager_js__WEBPACK_IMPORTED_MODULE_3__.NAVIGATOR_TRIGGER_CLAIM_MANAGER
        };
    }
    openDBAdapter(options) {
        const defaultFactory = new _adapters_wa_sqlite_WASQLiteOpenFactory_js__WEBPACK_IMPORTED_MODULE_5__.WASQLiteOpenFactory({
            ...options.database,
            flags: resolveWebPowerSyncFlags(options.flags),
            encryptionKey: options.encryptionKey
        });
        return defaultFactory.openDB();
    }
    /**
     * Closes the database connection.
     * By default the sync stream client is only disconnected if
     * multiple tabs are not enabled.
     */
    close(options) {
        if (this.unloadListener) {
            window.removeEventListener('unload', this.unloadListener);
        }
        return super.close({
            // Don't disconnect by default if multiple tabs are enabled
            disconnect: options?.disconnect ?? !this.resolvedFlags.enableMultiTabs
        });
    }
    async loadVersion() {
        if ((0,_adapters_web_sql_flags_js__WEBPACK_IMPORTED_MODULE_6__.isServerSide)()) {
            return;
        }
        return super.loadVersion();
    }
    async resolveOfflineSyncStatus() {
        if ((0,_adapters_web_sql_flags_js__WEBPACK_IMPORTED_MODULE_6__.isServerSide)()) {
            return;
        }
        return super.resolveOfflineSyncStatus();
    }
    generateBucketStorageAdapter() {
        return new _powersync_common__WEBPACK_IMPORTED_MODULE_0__.SqliteBucketStorage(this.database);
    }
    async runExclusive(cb) {
        if (this.resolvedFlags.ssrMode) {
            return PowerSyncDatabase.SHARED_MUTEX.runExclusive(cb);
        }
        return (0,_shared_navigator_js__WEBPACK_IMPORTED_MODULE_2__.getNavigatorLocks)().request(`lock-${this.database.name}`, cb);
    }
    generateSyncStreamImplementation(connector, options) {
        const remote = new _sync_WebRemote_js__WEBPACK_IMPORTED_MODULE_9__.WebRemote(connector, this.logger);
        const syncOptions = {
            ...this.options,
            ...options,
            flags: this.resolvedFlags,
            adapter: this.bucketStorageAdapter,
            remote,
            uploadCrud: async () => {
                await this.waitForReady();
                await connector.uploadData(this);
            },
            identifier: this.database.name,
            logger: this.logger
        };
        switch (true) {
            case this.resolvedFlags.ssrMode:
                return new _sync_SSRWebStreamingSyncImplementation_js__WEBPACK_IMPORTED_MODULE_7__.SSRStreamingSyncImplementation(syncOptions);
            case this.resolvedFlags.enableMultiTabs:
                if (!this.resolvedFlags.broadcastLogs) {
                    const warning = `
            Multiple tabs are enabled, but broadcasting of logs is disabled.
            Logs for shared sync worker will only be available in the shared worker context
          `;
                    const logger = this.options.logger;
                    logger ? logger.warn(warning) : console.warn(warning);
                }
                return new _sync_SharedWebStreamingSyncImplementation_js__WEBPACK_IMPORTED_MODULE_8__.SharedWebStreamingSyncImplementation({
                    ...syncOptions,
                    db: this.database // This should always be the case
                });
            default:
                return new _sync_WebStreamingSyncImplementation_js__WEBPACK_IMPORTED_MODULE_10__.WebStreamingSyncImplementation(syncOptions);
        }
    }
}


/***/ },

/***/ "./lib/src/db/adapters/AbstractWebPowerSyncDatabaseOpenFactory.js"
/*!************************************************************************!*\
  !*** ./lib/src/db/adapters/AbstractWebPowerSyncDatabaseOpenFactory.js ***!
  \************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractWebPowerSyncDatabaseOpenFactory: () => (/* binding */ AbstractWebPowerSyncDatabaseOpenFactory)
/* harmony export */ });
/* harmony import */ var _powersync_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @powersync/common */ "@powersync/common");
/* harmony import */ var _db_PowerSyncDatabase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../db/PowerSyncDatabase.js */ "./lib/src/db/PowerSyncDatabase.js");


/**
 * Intermediate PowerSync Database Open factory for Web which uses a mock
 * SSR DB Adapter if running on server side.
 * Most SQLite DB implementations only run on client side, this will safely return
 * empty query results in SSR which will allow for generating server partial views.
 */
class AbstractWebPowerSyncDatabaseOpenFactory extends _powersync_common__WEBPACK_IMPORTED_MODULE_0__.AbstractPowerSyncDatabaseOpenFactory {
    options;
    constructor(options) {
        super(options);
        this.options = options;
    }
    generateOptions() {
        return {
            ...this.options,
            database: this.openDB(),
            schema: this.schema,
            flags: (0,_db_PowerSyncDatabase_js__WEBPACK_IMPORTED_MODULE_1__.resolveWebPowerSyncFlags)(this.options.flags)
        };
    }
    generateInstance(options) {
        return new _db_PowerSyncDatabase_js__WEBPACK_IMPORTED_MODULE_1__.PowerSyncDatabase(options);
    }
}


/***/ },

/***/ "./lib/src/db/adapters/AbstractWebSQLOpenFactory.js"
/*!**********************************************************!*\
  !*** ./lib/src/db/adapters/AbstractWebSQLOpenFactory.js ***!
  \**********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractWebSQLOpenFactory: () => (/* binding */ AbstractWebSQLOpenFactory)
/* harmony export */ });
/* harmony import */ var _powersync_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @powersync/common */ "@powersync/common");
/* harmony import */ var _SSRDBAdapter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SSRDBAdapter.js */ "./lib/src/db/adapters/SSRDBAdapter.js");
/* harmony import */ var _web_sql_flags_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-sql-flags.js */ "./lib/src/db/adapters/web-sql-flags.js");



class AbstractWebSQLOpenFactory {
    options;
    resolvedFlags;
    logger;
    constructor(options) {
        this.options = options;
        this.resolvedFlags = (0,_web_sql_flags_js__WEBPACK_IMPORTED_MODULE_2__.resolveWebSQLFlags)(options.flags);
        this.logger = options.logger ?? (0,_powersync_common__WEBPACK_IMPORTED_MODULE_0__.createLogger)(`AbstractWebSQLOpenFactory - ${this.options.dbFilename}`);
    }
    /**
     * Opens a {@link DBAdapter} using resolved flags.
     * A SSR implementation is loaded if SSR mode is detected.
     */
    openDB() {
        const { resolvedFlags: { disableSSRWarning, enableMultiTabs, ssrMode = (0,_web_sql_flags_js__WEBPACK_IMPORTED_MODULE_2__.isServerSide)() } } = this;
        if (ssrMode && !disableSSRWarning) {
            this.logger.warn(`
  Running PowerSync in SSR mode.
  Only empty query results will be returned.
  Disable this warning by setting 'disableSSRWarning: true' in options.`);
        }
        if (!enableMultiTabs) {
            this.logger.warn('Multiple tab support is not enabled. Using this site across multiple tabs may not function correctly.');
        }
        if (ssrMode) {
            return new _SSRDBAdapter_js__WEBPACK_IMPORTED_MODULE_1__.SSRDBAdapter();
        }
        return this.openAdapter();
    }
}


/***/ },

/***/ "./lib/src/db/adapters/AsyncDatabaseConnection.js"
/*!********************************************************!*\
  !*** ./lib/src/db/adapters/AsyncDatabaseConnection.js ***!
  \********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);



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

/***/ "./lib/src/db/adapters/SSRDBAdapter.js"
/*!*********************************************!*\
  !*** ./lib/src/db/adapters/SSRDBAdapter.js ***!
  \*********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SSRDBAdapter: () => (/* binding */ SSRDBAdapter)
/* harmony export */ });
/* harmony import */ var _powersync_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @powersync/common */ "@powersync/common");
/* harmony import */ var async_mutex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! async-mutex */ "async-mutex");


const MOCK_QUERY_RESPONSE = {
    rowsAffected: 0
};
/**
 * Implements a Mock DB adapter for use in Server Side Rendering (SSR).
 * This adapter will return empty results for queries, which will allow
 * server rendered views to initially generate scaffolding components
 */
class SSRDBAdapter extends _powersync_common__WEBPACK_IMPORTED_MODULE_0__.BaseObserver {
    name;
    readMutex;
    writeMutex;
    constructor() {
        super();
        this.name = 'SSR DB';
        this.readMutex = new async_mutex__WEBPACK_IMPORTED_MODULE_1__.Mutex();
        this.writeMutex = new async_mutex__WEBPACK_IMPORTED_MODULE_1__.Mutex();
    }
    close() { }
    async readLock(fn, options) {
        return this.readMutex.runExclusive(() => fn(this));
    }
    async readTransaction(fn, options) {
        return this.readLock(() => fn(this.generateMockTransactionContext()));
    }
    async writeLock(fn, options) {
        return this.writeMutex.runExclusive(() => fn(this));
    }
    async writeTransaction(fn, options) {
        return this.writeLock(() => fn(this.generateMockTransactionContext()));
    }
    async execute(query, params) {
        return this.writeMutex.runExclusive(async () => MOCK_QUERY_RESPONSE);
    }
    async executeRaw(query, params) {
        return this.writeMutex.runExclusive(async () => []);
    }
    async executeBatch(query, params) {
        return this.writeMutex.runExclusive(async () => MOCK_QUERY_RESPONSE);
    }
    async getAll(sql, parameters) {
        return [];
    }
    async getOptional(sql, parameters) {
        return null;
    }
    async get(sql, parameters) {
        throw new Error(`No values are returned in SSR mode`);
    }
    /**
     * Generates a mock context for use in read/write transactions.
     * `this` already mocks most of the API, commit and rollback mocks
     *  are added here
     */
    generateMockTransactionContext() {
        return {
            ...this,
            commit: async () => {
                return MOCK_QUERY_RESPONSE;
            },
            rollback: async () => {
                return MOCK_QUERY_RESPONSE;
            }
        };
    }
    async refreshSchema() { }
}


/***/ },

/***/ "./lib/src/db/adapters/WebDBAdapter.js"
/*!*********************************************!*\
  !*** ./lib/src/db/adapters/WebDBAdapter.js ***!
  \*********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);



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

/***/ "./lib/src/db/adapters/wa-sqlite/InternalWASQLiteDBAdapter.js"
/*!********************************************************************!*\
  !*** ./lib/src/db/adapters/wa-sqlite/InternalWASQLiteDBAdapter.js ***!
  \********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InternalWASQLiteDBAdapter: () => (/* binding */ InternalWASQLiteDBAdapter)
/* harmony export */ });
/* harmony import */ var _LockedAsyncDatabaseAdapter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../LockedAsyncDatabaseAdapter.js */ "./lib/src/db/adapters/LockedAsyncDatabaseAdapter.js");
/* harmony import */ var _WASQLiteConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WASQLiteConnection.js */ "./lib/src/db/adapters/wa-sqlite/WASQLiteConnection.js");


/**
 * @internal
 * An intermediary implementation of WASQLiteDBAdapter, which takes the same
 * constructor arguments as {@link LockedAsyncDatabaseAdapter}, but provides some
 * basic WA-SQLite specific functionality.
 * This base class is used to avoid requiring overloading the constructor of {@link WASQLiteDBAdapter}
 */
class InternalWASQLiteDBAdapter extends _LockedAsyncDatabaseAdapter_js__WEBPACK_IMPORTED_MODULE_0__.LockedAsyncDatabaseAdapter {
    getConfiguration() {
        // This is valid since we only handle WASQLite connections
        const baseConfig = super.getConfiguration();
        return {
            ...super.getConfiguration(),
            requiresPersistentTriggers: baseConfig.vfs == _WASQLiteConnection_js__WEBPACK_IMPORTED_MODULE_1__.WASQLiteVFS.OPFSCoopSyncVFS || baseConfig.vfs == _WASQLiteConnection_js__WEBPACK_IMPORTED_MODULE_1__.WASQLiteVFS.AccessHandlePoolVFS
        };
    }
}


/***/ },

/***/ "./lib/src/db/adapters/wa-sqlite/WASQLiteConnection.js"
/*!*************************************************************!*\
  !*** ./lib/src/db/adapters/wa-sqlite/WASQLiteConnection.js ***!
  \*************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncWASQLiteModuleFactory: () => (/* binding */ AsyncWASQLiteModuleFactory),
/* harmony export */   DEFAULT_MODULE_FACTORIES: () => (/* binding */ DEFAULT_MODULE_FACTORIES),
/* harmony export */   MultiCipherAsyncWASQLiteModuleFactory: () => (/* binding */ MultiCipherAsyncWASQLiteModuleFactory),
/* harmony export */   MultiCipherSyncWASQLiteModuleFactory: () => (/* binding */ MultiCipherSyncWASQLiteModuleFactory),
/* harmony export */   SyncWASQLiteModuleFactory: () => (/* binding */ SyncWASQLiteModuleFactory),
/* harmony export */   WASQLiteVFS: () => (/* binding */ WASQLiteVFS),
/* harmony export */   WASqliteConnection: () => (/* binding */ WASqliteConnection)
/* harmony export */ });
/* harmony import */ var _journeyapps_wa_sqlite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @journeyapps/wa-sqlite */ "@journeyapps/wa-sqlite");
/* harmony import */ var _powersync_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @powersync/common */ "@powersync/common");
/* harmony import */ var async_mutex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! async-mutex */ "async-mutex");



/**
 * List of currently tested virtual filesystems
 */
var WASQLiteVFS;
(function (WASQLiteVFS) {
    WASQLiteVFS["IDBBatchAtomicVFS"] = "IDBBatchAtomicVFS";
    WASQLiteVFS["OPFSCoopSyncVFS"] = "OPFSCoopSyncVFS";
    WASQLiteVFS["AccessHandlePoolVFS"] = "AccessHandlePoolVFS";
})(WASQLiteVFS || (WASQLiteVFS = {}));
/**
 * @internal
 */
const AsyncWASQLiteModuleFactory = async () => {
    const { default: factory } = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! @journeyapps/wa-sqlite/dist/wa-sqlite-async.mjs */ "../../node_modules/.pnpm/@journeyapps+wa-sqlite@1.5.0/node_modules/@journeyapps/wa-sqlite/dist/wa-sqlite-async.mjs"));
    return factory();
};
/**
 * @internal
 */
const MultiCipherAsyncWASQLiteModuleFactory = async () => {
    const { default: factory } = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! @journeyapps/wa-sqlite/dist/mc-wa-sqlite-async.mjs */ "../../node_modules/.pnpm/@journeyapps+wa-sqlite@1.5.0/node_modules/@journeyapps/wa-sqlite/dist/mc-wa-sqlite-async.mjs"));
    return factory();
};
/**
 * @internal
 */
const SyncWASQLiteModuleFactory = async () => {
    const { default: factory } = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! @journeyapps/wa-sqlite/dist/wa-sqlite.mjs */ "../../node_modules/.pnpm/@journeyapps+wa-sqlite@1.5.0/node_modules/@journeyapps/wa-sqlite/dist/wa-sqlite.mjs"));
    return factory();
};
/**
 * @internal
 */
const MultiCipherSyncWASQLiteModuleFactory = async () => {
    const { default: factory } = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! @journeyapps/wa-sqlite/dist/mc-wa-sqlite.mjs */ "../../node_modules/.pnpm/@journeyapps+wa-sqlite@1.5.0/node_modules/@journeyapps/wa-sqlite/dist/mc-wa-sqlite.mjs"));
    return factory();
};
/**
 * @internal
 */
const DEFAULT_MODULE_FACTORIES = {
    [WASQLiteVFS.IDBBatchAtomicVFS]: async (options) => {
        let module;
        if (options.encryptionKey) {
            module = await MultiCipherAsyncWASQLiteModuleFactory();
        }
        else {
            module = await AsyncWASQLiteModuleFactory();
        }
        const { IDBBatchAtomicVFS } = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! @journeyapps/wa-sqlite/src/examples/IDBBatchAtomicVFS.js */ "@journeyapps/wa-sqlite/src/examples/IDBBatchAtomicVFS.js", 19));
        return {
            module,
            // @ts-expect-error The types for this static method are missing upstream
            vfs: await IDBBatchAtomicVFS.create(options.dbFileName, module, { lockPolicy: 'exclusive' })
        };
    },
    [WASQLiteVFS.AccessHandlePoolVFS]: async (options) => {
        let module;
        if (options.encryptionKey) {
            module = await MultiCipherSyncWASQLiteModuleFactory();
        }
        else {
            module = await SyncWASQLiteModuleFactory();
        }
        // @ts-expect-error The types for this static method are missing upstream
        const { AccessHandlePoolVFS } = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! @journeyapps/wa-sqlite/src/examples/AccessHandlePoolVFS.js */ "@journeyapps/wa-sqlite/src/examples/AccessHandlePoolVFS.js", 19));
        return {
            module,
            vfs: await AccessHandlePoolVFS.create(options.dbFileName, module)
        };
    },
    [WASQLiteVFS.OPFSCoopSyncVFS]: async (options) => {
        let module;
        if (options.encryptionKey) {
            module = await MultiCipherSyncWASQLiteModuleFactory();
        }
        else {
            module = await SyncWASQLiteModuleFactory();
        }
        // @ts-expect-error The types for this static method are missing upstream
        const { OPFSCoopSyncVFS } = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! @journeyapps/wa-sqlite/src/examples/OPFSCoopSyncVFS.js */ "@journeyapps/wa-sqlite/src/examples/OPFSCoopSyncVFS.js", 19));
        const vfs = await OPFSCoopSyncVFS.create(options.dbFileName, module);
        return {
            module,
            vfs
        };
    }
};
/**
 * @internal
 * WA-SQLite connection which directly interfaces with WA-SQLite.
 * This is usually instantiated inside a worker.
 */
class WASqliteConnection extends _powersync_common__WEBPACK_IMPORTED_MODULE_1__.BaseObserver {
    options;
    _sqliteAPI = null;
    _dbP = null;
    _moduleFactory;
    updatedTables;
    updateTimer;
    statementMutex;
    broadcastChannel;
    /**
     * Unique id for this specific connection. This is used to prevent broadcast table change
     * notification loops.
     */
    connectionId;
    _holdCounter;
    _holdId;
    constructor(options) {
        super();
        this.options = options;
        this.updatedTables = new Set();
        this.updateTimer = null;
        this.broadcastChannel = null;
        this.connectionId = new Date().valueOf() + Math.random();
        this.statementMutex = new async_mutex__WEBPACK_IMPORTED_MODULE_2__.Mutex();
        this._moduleFactory = DEFAULT_MODULE_FACTORIES[this.options.vfs];
        this._holdCounter = 0;
        this._holdId = null;
    }
    /**
     * Gets the id for the current hold.
     * This can be used to check for invalid states.
     */
    get currentHoldId() {
        return this._holdId;
    }
    get sqliteAPI() {
        if (!this._sqliteAPI) {
            throw new Error(`Initialization has not completed`);
        }
        return this._sqliteAPI;
    }
    get dbP() {
        if (!this._dbP) {
            throw new Error(`Initialization has not completed`);
        }
        return this._dbP;
    }
    /**
     * Checks if the database connection is in autocommit mode.
     * @returns true if in autocommit mode, false if in a transaction
     */
    async isAutoCommit() {
        return this.sqliteAPI.get_autocommit(this.dbP) != 0;
    }
    async markHold() {
        const previousHoldId = this._holdId;
        this._holdId = `${++this._holdCounter}`;
        if (previousHoldId) {
            await this.iterateAsyncListeners(async (cb) => cb.holdOverwritten?.(previousHoldId));
        }
        return this._holdId;
    }
    async releaseHold(holdId) {
        if (holdId != this._holdId) {
            throw new Error(`Invalid hold state, expected ${this._holdId} but got ${holdId}`);
        }
        this._holdId = null;
    }
    async openDB() {
        this._dbP = await this.sqliteAPI.open_v2(this.options.dbFilename);
        return this._dbP;
    }
    async executeEncryptionPragma() {
        if (this.options.encryptionKey) {
            await this.executeSingleStatement(`PRAGMA key = "${this.options.encryptionKey}"`);
        }
        return;
    }
    async openSQLiteAPI() {
        const { module, vfs } = await this._moduleFactory({
            dbFileName: this.options.dbFilename,
            encryptionKey: this.options.encryptionKey
        });
        const sqlite3 = _journeyapps_wa_sqlite__WEBPACK_IMPORTED_MODULE_0__.Factory(module);
        sqlite3.vfs_register(vfs, true);
        /**
         * Register the PowerSync core SQLite extension
         */
        module.ccall('powersync_init_static', 'int', []);
        /**
         * Create the multiple cipher vfs if an encryption key is provided
         */
        if (this.options.encryptionKey) {
            const createResult = module.ccall('sqlite3mc_vfs_create', 'int', ['string', 'int'], [this.options.dbFilename, 1]);
            if (createResult !== 0) {
                throw new Error('Failed to create multiple cipher vfs, Database encryption will not work');
            }
        }
        return sqlite3;
    }
    registerBroadcastListeners() {
        this.broadcastChannel = new BroadcastChannel(`${this.options.dbFilename}-table-updates`);
        this.broadcastChannel.addEventListener('message', (event) => {
            const data = event.data;
            if (this.connectionId == data.connectionId) {
                // Ignore messages from the same connection
                return;
            }
            // Ensuring that we don't rebroadcast the same message
            this.queueTableUpdate(data.changedTables, false);
        });
    }
    queueTableUpdate(tableNames, shouldBroadcast = true) {
        tableNames.forEach((tableName) => this.updatedTables.add(tableName));
        if (this.updateTimer == null) {
            this.updateTimer = setTimeout(() => this.fireUpdates(shouldBroadcast), 0);
        }
    }
    async init() {
        this._sqliteAPI = await this.openSQLiteAPI();
        await this.openDB();
        this.registerBroadcastListeners();
        await this.executeSingleStatement(`PRAGMA temp_store = ${this.options.temporaryStorage};`);
        await this.executeEncryptionPragma();
        await this.executeSingleStatement(`PRAGMA cache_size = -${this.options.cacheSizeKb};`);
        this.sqliteAPI.update_hook(this.dbP, (updateType, dbName, tableName) => {
            if (!tableName) {
                return;
            }
            const changedTables = new Set([tableName]);
            this.queueTableUpdate(changedTables);
        });
    }
    async getConfig() {
        return this.options;
    }
    fireUpdates(shouldBroadcast = true) {
        this.updateTimer = null;
        const event = { tables: [...this.updatedTables], groupedUpdates: {}, rawUpdates: [] };
        // Share to other connections
        if (shouldBroadcast) {
            this.broadcastChannel.postMessage({
                changedTables: this.updatedTables,
                connectionId: this.connectionId
            });
        }
        this.updatedTables.clear();
        this.iterateListeners((cb) => cb.tablesUpdated?.(event));
    }
    /**
     * This executes SQL statements in a batch.
     */
    async executeBatch(sql, bindings) {
        return this.acquireExecuteLock(async () => {
            let affectedRows = 0;
            try {
                await this.executeSingleStatement('BEGIN TRANSACTION');
                const wrappedBindings = bindings ? bindings : [];
                for await (const stmt of this.sqliteAPI.statements(this.dbP, sql)) {
                    if (stmt === null) {
                        return {
                            rowsAffected: 0,
                            rows: { _array: [], length: 0 }
                        };
                    }
                    //Prepare statement once
                    for (const binding of wrappedBindings) {
                        // TODO not sure why this is needed currently, but booleans break
                        for (let i = 0; i < binding.length; i++) {
                            const b = binding[i];
                            if (typeof b == 'boolean') {
                                binding[i] = b ? 1 : 0;
                            }
                        }
                        if (bindings) {
                            this.sqliteAPI.bind_collection(stmt, binding);
                        }
                        const result = await this.sqliteAPI.step(stmt);
                        if (result === _journeyapps_wa_sqlite__WEBPACK_IMPORTED_MODULE_0__.SQLITE_DONE) {
                            //The value returned by sqlite3_changes() immediately after an INSERT, UPDATE or DELETE statement run on a view is always zero.
                            affectedRows += this.sqliteAPI.changes(this.dbP);
                        }
                        this.sqliteAPI.reset(stmt);
                    }
                }
                await this.executeSingleStatement('COMMIT');
            }
            catch (err) {
                await this.executeSingleStatement('ROLLBACK');
                return {
                    rowsAffected: 0,
                    rows: { _array: [], length: 0 }
                };
            }
            const result = {
                rowsAffected: affectedRows,
                rows: { _array: [], length: 0 }
            };
            return result;
        });
    }
    /**
     * This executes single SQL statements inside a requested lock.
     */
    async execute(sql, bindings) {
        // Running multiple statements on the same connection concurrently should not be allowed
        return this.acquireExecuteLock(async () => {
            return this.executeSingleStatement(sql, bindings);
        });
    }
    async executeRaw(sql, bindings) {
        return this.acquireExecuteLock(async () => {
            return this.executeSingleStatementRaw(sql, bindings);
        });
    }
    async close() {
        this.broadcastChannel?.close();
        await this.acquireExecuteLock(async () => {
            /**
             * Running the close operation inside the same execute mutex prevents errors like:
             * ```
             * unable to close due to unfinalized statements or unfinished backups
             * ```
             */
            await this.sqliteAPI.close(this.dbP);
        });
    }
    async registerOnTableChange(callback) {
        return this.registerListener({
            tablesUpdated: (event) => callback(event)
        });
    }
    /**
     * This requests a lock for executing statements.
     * Should only be used internally.
     */
    acquireExecuteLock = (callback) => {
        return this.statementMutex.runExclusive(callback);
    };
    /**
     * This executes a single statement using SQLite3.
     */
    async executeSingleStatement(sql, bindings) {
        const results = await this._execute(sql, bindings);
        const rows = [];
        for (const resultSet of results) {
            for (const row of resultSet.rows) {
                const outRow = {};
                resultSet.columns.forEach((key, index) => {
                    outRow[key] = row[index];
                });
                rows.push(outRow);
            }
        }
        const result = {
            insertId: this.sqliteAPI.last_insert_id(this.dbP),
            rowsAffected: this.sqliteAPI.changes(this.dbP),
            rows: {
                _array: rows,
                length: rows.length
            }
        };
        return result;
    }
    /**
     * This executes a single statement using SQLite3 and returns the results as an array of arrays.
     */
    async executeSingleStatementRaw(sql, bindings) {
        const results = await this._execute(sql, bindings);
        return results.flatMap((resultset) => resultset.rows.map((row) => resultset.columns.map((_, index) => row[index])));
    }
    async _execute(sql, bindings) {
        const results = [];
        for await (const stmt of this.sqliteAPI.statements(this.dbP, sql)) {
            let columns;
            const wrappedBindings = bindings ? [bindings] : [[]];
            for (const binding of wrappedBindings) {
                // TODO not sure why this is needed currently, but booleans break
                binding.forEach((b, index, arr) => {
                    if (typeof b == 'boolean') {
                        arr[index] = b ? 1 : 0;
                    }
                });
                this.sqliteAPI.reset(stmt);
                if (bindings) {
                    this.sqliteAPI.bind_collection(stmt, binding);
                }
                const rows = [];
                while ((await this.sqliteAPI.step(stmt)) === _journeyapps_wa_sqlite__WEBPACK_IMPORTED_MODULE_0__.SQLITE_ROW) {
                    const row = this.sqliteAPI.row(stmt);
                    rows.push(row);
                }
                columns = columns ?? this.sqliteAPI.column_names(stmt);
                if (columns.length) {
                    results.push({ columns, rows });
                }
            }
            // When binding parameters, only a single statement is executed.
            if (bindings) {
                break;
            }
        }
        return results;
    }
}


/***/ },

/***/ "./lib/src/db/adapters/wa-sqlite/WASQLiteDBAdapter.js"
/*!************************************************************!*\
  !*** ./lib/src/db/adapters/wa-sqlite/WASQLiteDBAdapter.js ***!
  \************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WASQLiteDBAdapter: () => (/* binding */ WASQLiteDBAdapter)
/* harmony export */ });
/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! comlink */ "comlink");
/* harmony import */ var _PowerSyncDatabase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../PowerSyncDatabase.js */ "./lib/src/db/PowerSyncDatabase.js");
/* harmony import */ var _web_sql_flags_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../web-sql-flags.js */ "./lib/src/db/adapters/web-sql-flags.js");
/* harmony import */ var _WorkerWrappedAsyncDatabaseConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../WorkerWrappedAsyncDatabaseConnection.js */ "./lib/src/db/adapters/WorkerWrappedAsyncDatabaseConnection.js");
/* harmony import */ var _InternalWASQLiteDBAdapter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InternalWASQLiteDBAdapter.js */ "./lib/src/db/adapters/wa-sqlite/InternalWASQLiteDBAdapter.js");
/* harmony import */ var _WASQLiteOpenFactory_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WASQLiteOpenFactory.js */ "./lib/src/db/adapters/wa-sqlite/WASQLiteOpenFactory.js");






/**
 * Adapter for WA-SQLite SQLite connections.
 */
class WASQLiteDBAdapter extends _InternalWASQLiteDBAdapter_js__WEBPACK_IMPORTED_MODULE_4__.InternalWASQLiteDBAdapter {
    constructor(options) {
        super({
            name: options.dbFilename,
            openConnection: async () => {
                const { workerPort, temporaryStorage, cacheSizeKb } = options;
                if (workerPort) {
                    const remote = comlink__WEBPACK_IMPORTED_MODULE_0__.wrap(workerPort);
                    return new _WorkerWrappedAsyncDatabaseConnection_js__WEBPACK_IMPORTED_MODULE_3__.WorkerWrappedAsyncDatabaseConnection({
                        remote,
                        remoteCanCloseUnexpectedly: false,
                        identifier: options.dbFilename,
                        baseConnection: await remote({
                            ...options,
                            temporaryStorage: temporaryStorage ?? _web_sql_flags_js__WEBPACK_IMPORTED_MODULE_2__.TemporaryStorageOption.MEMORY,
                            cacheSizeKb: cacheSizeKb ?? _web_sql_flags_js__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_CACHE_SIZE_KB,
                            flags: (0,_PowerSyncDatabase_js__WEBPACK_IMPORTED_MODULE_1__.resolveWebPowerSyncFlags)(options.flags),
                            encryptionKey: options.encryptionKey
                        })
                    });
                }
                const openFactory = new _WASQLiteOpenFactory_js__WEBPACK_IMPORTED_MODULE_5__.WASQLiteOpenFactory({
                    dbFilename: options.dbFilename,
                    dbLocation: options.dbLocation,
                    debugMode: options.debugMode,
                    flags: options.flags,
                    temporaryStorage,
                    cacheSizeKb,
                    logger: options.logger,
                    vfs: options.vfs,
                    encryptionKey: options.encryptionKey,
                    worker: options.worker
                });
                return openFactory.openConnection();
            },
            debugMode: options.debugMode,
            logger: options.logger
        });
    }
}


/***/ },

/***/ "./lib/src/db/adapters/wa-sqlite/WASQLiteOpenFactory.js"
/*!**************************************************************!*\
  !*** ./lib/src/db/adapters/wa-sqlite/WASQLiteOpenFactory.js ***!
  \**************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WASQLiteOpenFactory: () => (/* binding */ WASQLiteOpenFactory)
/* harmony export */ });
/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! comlink */ "comlink");
/* harmony import */ var _worker_db_open_worker_database_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../worker/db/open-worker-database.js */ "./lib/src/worker/db/open-worker-database.js");
/* harmony import */ var _AbstractWebSQLOpenFactory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AbstractWebSQLOpenFactory.js */ "./lib/src/db/adapters/AbstractWebSQLOpenFactory.js");
/* harmony import */ var _WorkerWrappedAsyncDatabaseConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../WorkerWrappedAsyncDatabaseConnection.js */ "./lib/src/db/adapters/WorkerWrappedAsyncDatabaseConnection.js");
/* harmony import */ var _web_sql_flags_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../web-sql-flags.js */ "./lib/src/db/adapters/web-sql-flags.js");
/* harmony import */ var _InternalWASQLiteDBAdapter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InternalWASQLiteDBAdapter.js */ "./lib/src/db/adapters/wa-sqlite/InternalWASQLiteDBAdapter.js");
/* harmony import */ var _WASQLiteConnection_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WASQLiteConnection.js */ "./lib/src/db/adapters/wa-sqlite/WASQLiteConnection.js");







/**
 * Opens a SQLite connection using WA-SQLite.
 */
class WASQLiteOpenFactory extends _AbstractWebSQLOpenFactory_js__WEBPACK_IMPORTED_MODULE_2__.AbstractWebSQLOpenFactory {
    constructor(options) {
        super(options);
        assertValidWASQLiteOpenFactoryOptions(options);
    }
    get waOptions() {
        // Cast to extended type
        return this.options;
    }
    openAdapter() {
        return new _InternalWASQLiteDBAdapter_js__WEBPACK_IMPORTED_MODULE_5__.InternalWASQLiteDBAdapter({
            name: this.options.dbFilename,
            openConnection: () => this.openConnection(),
            debugMode: this.options.debugMode,
            logger: this.logger
        });
    }
    async openConnection() {
        const { enableMultiTabs, useWebWorker } = this.resolvedFlags;
        const { vfs = _WASQLiteConnection_js__WEBPACK_IMPORTED_MODULE_6__.WASQLiteVFS.IDBBatchAtomicVFS, temporaryStorage = _web_sql_flags_js__WEBPACK_IMPORTED_MODULE_4__.TemporaryStorageOption.MEMORY, cacheSizeKb = _web_sql_flags_js__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_CACHE_SIZE_KB, encryptionKey } = this.waOptions;
        if (!enableMultiTabs) {
            this.logger.warn('Multiple tabs are not enabled in this browser');
        }
        if (useWebWorker) {
            const optionsDbWorker = this.options.worker;
            const workerPort = typeof optionsDbWorker == 'function'
                ? (0,_worker_db_open_worker_database_js__WEBPACK_IMPORTED_MODULE_1__.resolveWorkerDatabasePortFactory)(() => optionsDbWorker({
                    ...this.options,
                    temporaryStorage,
                    cacheSizeKb,
                    flags: this.resolvedFlags,
                    encryptionKey
                }))
                : (0,_worker_db_open_worker_database_js__WEBPACK_IMPORTED_MODULE_1__.openWorkerDatabasePort)(this.options.dbFilename, enableMultiTabs, optionsDbWorker, this.waOptions.vfs);
            const workerDBOpener = comlink__WEBPACK_IMPORTED_MODULE_0__.wrap(workerPort);
            return new _WorkerWrappedAsyncDatabaseConnection_js__WEBPACK_IMPORTED_MODULE_3__.WorkerWrappedAsyncDatabaseConnection({
                remote: workerDBOpener,
                // This tab owns the worker, so we're guaranteed to outlive it.
                remoteCanCloseUnexpectedly: false,
                baseConnection: await workerDBOpener({
                    dbFilename: this.options.dbFilename,
                    vfs,
                    temporaryStorage,
                    cacheSizeKb,
                    flags: this.resolvedFlags,
                    encryptionKey: encryptionKey,
                    logLevel: this.logger.getLevel()
                }),
                identifier: this.options.dbFilename,
                onClose: () => {
                    if (workerPort instanceof Worker) {
                        workerPort.terminate();
                    }
                    else {
                        workerPort.close();
                    }
                }
            });
        }
        else {
            // Don't use a web worker
            return new _WASQLiteConnection_js__WEBPACK_IMPORTED_MODULE_6__.WASqliteConnection({
                dbFilename: this.options.dbFilename,
                dbLocation: this.options.dbLocation,
                debugMode: this.options.debugMode,
                vfs,
                temporaryStorage,
                cacheSizeKb,
                flags: this.resolvedFlags,
                encryptionKey: encryptionKey
            });
        }
    }
}
/**
 * Asserts that the factory options are valid.
 */
function assertValidWASQLiteOpenFactoryOptions(options) {
    // The OPFS VFS only works in dedicated web workers.
    if ('vfs' in options && 'flags' in options) {
        const { vfs, flags = {} } = options;
        if (vfs !== _WASQLiteConnection_js__WEBPACK_IMPORTED_MODULE_6__.WASQLiteVFS.IDBBatchAtomicVFS && 'useWebWorker' in flags && !flags.useWebWorker) {
            throw new Error(`Invalid configuration: The 'useWebWorker' flag must be true when using an OPFS-based VFS (${vfs}).`);
        }
    }
}


/***/ },

/***/ "./lib/src/db/adapters/wa-sqlite/WASQLitePowerSyncDatabaseOpenFactory.js"
/*!*******************************************************************************!*\
  !*** ./lib/src/db/adapters/wa-sqlite/WASQLitePowerSyncDatabaseOpenFactory.js ***!
  \*******************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WASQLitePowerSyncDatabaseOpenFactory: () => (/* binding */ WASQLitePowerSyncDatabaseOpenFactory)
/* harmony export */ });
/* harmony import */ var _db_PowerSyncDatabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../db/PowerSyncDatabase.js */ "./lib/src/db/PowerSyncDatabase.js");
/* harmony import */ var _AbstractWebPowerSyncDatabaseOpenFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AbstractWebPowerSyncDatabaseOpenFactory.js */ "./lib/src/db/adapters/AbstractWebPowerSyncDatabaseOpenFactory.js");
/* harmony import */ var _WASQLiteOpenFactory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WASQLiteOpenFactory.js */ "./lib/src/db/adapters/wa-sqlite/WASQLiteOpenFactory.js");



/**
 * @deprecated {@link PowerSyncDatabase} can now be constructed directly
 * @example
 * ```typescript
 * const powersync = new PowerSyncDatabase({database: {
 *  dbFileName: 'powersync.db'
 * }});
 * ```
 */
class WASQLitePowerSyncDatabaseOpenFactory extends _AbstractWebPowerSyncDatabaseOpenFactory_js__WEBPACK_IMPORTED_MODULE_1__.AbstractWebPowerSyncDatabaseOpenFactory {
    openDB() {
        const factory = new _WASQLiteOpenFactory_js__WEBPACK_IMPORTED_MODULE_2__.WASQLiteOpenFactory(this.options);
        return factory.openDB();
    }
    generateInstance(options) {
        return new _db_PowerSyncDatabase_js__WEBPACK_IMPORTED_MODULE_0__.PowerSyncDatabase(options);
    }
}


/***/ },

/***/ "./lib/src/db/adapters/web-sql-flags.js"
/*!**********************************************!*\
  !*** ./lib/src/db/adapters/web-sql-flags.js ***!
  \**********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_CACHE_SIZE_KB: () => (/* binding */ DEFAULT_CACHE_SIZE_KB),
/* harmony export */   DEFAULT_WEB_SQL_FLAGS: () => (/* binding */ DEFAULT_WEB_SQL_FLAGS),
/* harmony export */   TemporaryStorageOption: () => (/* binding */ TemporaryStorageOption),
/* harmony export */   isServerSide: () => (/* binding */ isServerSide),
/* harmony export */   resolveWebSQLFlags: () => (/* binding */ resolveWebSQLFlags)
/* harmony export */ });
var TemporaryStorageOption;
(function (TemporaryStorageOption) {
    TemporaryStorageOption["MEMORY"] = "memory";
    TemporaryStorageOption["FILESYSTEM"] = "file";
})(TemporaryStorageOption || (TemporaryStorageOption = {}));
const DEFAULT_CACHE_SIZE_KB = 50 * 1024;
function isServerSide() {
    return typeof window == 'undefined';
}
const DEFAULT_WEB_SQL_FLAGS = {
    broadcastLogs: true,
    disableSSRWarning: false,
    ssrMode: isServerSide(),
    /**
     * Multiple tabs are by default not supported on Android, iOS and Safari.
     * Other platforms will have multiple tabs enabled by default.
     */
    enableMultiTabs: typeof globalThis.navigator !== 'undefined' && // For SSR purposes
        typeof SharedWorker !== 'undefined' &&
        !navigator.userAgent.match(/(Android|iPhone|iPod|iPad)/i) &&
        !window.safari,
    useWebWorker: true
};
function resolveWebSQLFlags(flags) {
    const resolvedFlags = {
        ...DEFAULT_WEB_SQL_FLAGS,
        ...(flags ?? {})
    };
    if (typeof flags?.enableMultiTabs != 'undefined') {
        resolvedFlags.enableMultiTabs = flags.enableMultiTabs;
    }
    if (flags?.useWebWorker === false) {
        resolvedFlags.enableMultiTabs = false;
    }
    return resolvedFlags;
}


/***/ },

/***/ "./lib/src/db/sync/SSRWebStreamingSyncImplementation.js"
/*!**************************************************************!*\
  !*** ./lib/src/db/sync/SSRWebStreamingSyncImplementation.js ***!
  \**************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SSRStreamingSyncImplementation: () => (/* binding */ SSRStreamingSyncImplementation)
/* harmony export */ });
/* harmony import */ var _powersync_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @powersync/common */ "@powersync/common");
/* harmony import */ var async_mutex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! async-mutex */ "async-mutex");


class SSRStreamingSyncImplementation extends _powersync_common__WEBPACK_IMPORTED_MODULE_0__.BaseObserver {
    syncMutex;
    crudMutex;
    isConnected;
    lastSyncedAt;
    syncStatus;
    constructor(options) {
        super();
        this.syncMutex = new async_mutex__WEBPACK_IMPORTED_MODULE_1__.Mutex();
        this.crudMutex = new async_mutex__WEBPACK_IMPORTED_MODULE_1__.Mutex();
        this.syncStatus = new _powersync_common__WEBPACK_IMPORTED_MODULE_0__.SyncStatus({});
        this.isConnected = false;
    }
    obtainLock(lockOptions) {
        const mutex = lockOptions.type == _powersync_common__WEBPACK_IMPORTED_MODULE_0__.LockType.CRUD ? this.crudMutex : this.syncMutex;
        return mutex.runExclusive(lockOptions.callback);
    }
    /**
     * This is a no-op in SSR mode
     */
    async connect(options) { }
    async dispose() { }
    /**
     * This is a no-op in SSR mode
     */
    async disconnect() { }
    /**
     * This SSR Mode implementation is immediately ready.
     */
    async waitForReady() { }
    /**
     * This will never resolve in SSR Mode.
     */
    async waitForStatus(status) {
        return this.waitUntilStatusMatches(() => false);
    }
    /**
     * This will never resolve in SSR Mode.
     */
    waitUntilStatusMatches(_predicate) {
        return new Promise(() => { });
    }
    /**
     * Returns a placeholder checkpoint. This should not be used.
     */
    async getWriteCheckpoint() {
        return '1';
    }
    /**
     * The SSR mode adapter will never complete syncing.
     */
    async hasCompletedSync() {
        return false;
    }
    /**
     * This is a no-op in SSR mode.
     */
    triggerCrudUpload() { }
    /**
     * No-op in SSR mode.
     */
    updateSubscriptions() { }
}


/***/ },

/***/ "./lib/src/db/sync/SharedWebStreamingSyncImplementation.js"
/*!*****************************************************************!*\
  !*** ./lib/src/db/sync/SharedWebStreamingSyncImplementation.js ***!
  \*****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedWebStreamingSyncImplementation: () => (/* binding */ SharedWebStreamingSyncImplementation)
/* harmony export */ });
/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! comlink */ "comlink");
/* harmony import */ var _shared_navigator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/navigator.js */ "./lib/src/shared/navigator.js");
/* harmony import */ var _worker_sync_AbstractSharedSyncClientProvider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../worker/sync/AbstractSharedSyncClientProvider.js */ "./lib/src/worker/sync/AbstractSharedSyncClientProvider.js");
/* harmony import */ var _worker_sync_SharedSyncImplementation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../worker/sync/SharedSyncImplementation.js */ "./lib/src/worker/sync/SharedSyncImplementation.js");
/* harmony import */ var _adapters_web_sql_flags_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../adapters/web-sql-flags.js */ "./lib/src/db/adapters/web-sql-flags.js");
/* harmony import */ var _WebStreamingSyncImplementation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WebStreamingSyncImplementation.js */ "./lib/src/db/sync/WebStreamingSyncImplementation.js");






/**
 * The shared worker will trigger methods on this side of the message port
 * via this client provider.
 */
class SharedSyncClientProvider extends _worker_sync_AbstractSharedSyncClientProvider_js__WEBPACK_IMPORTED_MODULE_2__.AbstractSharedSyncClientProvider {
    options;
    statusChanged;
    webDB;
    constructor(options, statusChanged, webDB) {
        super();
        this.options = options;
        this.statusChanged = statusChanged;
        this.webDB = webDB;
    }
    async getDBWorkerPort() {
        const { port } = await this.webDB.shareConnection();
        return comlink__WEBPACK_IMPORTED_MODULE_0__.transfer(port, [port]);
    }
    invalidateCredentials() {
        this.options.remote.invalidateCredentials();
    }
    async fetchCredentials() {
        const credentials = await this.options.remote.getCredentials();
        if (credentials == null) {
            return null;
        }
        /**
         * The credentials need to be serializable.
         * Users might extend [PowerSyncCredentials] to contain
         * items which are not serializable.
         * This returns only the essential fields.
         */
        return {
            endpoint: credentials.endpoint,
            token: credentials.token
        };
    }
    async uploadCrud() {
        /**
         * Don't return anything here, just incase something which is not
         * serializable is returned from the `uploadCrud` function.
         */
        await this.options.uploadCrud();
    }
    get logger() {
        return this.options.logger;
    }
    trace(...x) {
        this.logger?.trace(...x);
    }
    debug(...x) {
        this.logger?.debug(...x);
    }
    info(...x) {
        this.logger?.info(...x);
    }
    log(...x) {
        this.logger?.log(...x);
    }
    warn(...x) {
        this.logger?.warn(...x);
    }
    error(...x) {
        this.logger?.error(...x);
    }
    time(label) {
        this.logger?.time(label);
    }
    timeEnd(label) {
        this.logger?.timeEnd(label);
    }
}
/**
 * The local part of the sync implementation on the web, which talks to a sync implementation hosted in a shared worker.
 */
class SharedWebStreamingSyncImplementation extends _WebStreamingSyncImplementation_js__WEBPACK_IMPORTED_MODULE_5__.WebStreamingSyncImplementation {
    syncManager;
    clientProvider;
    messagePort;
    isInitialized;
    dbAdapter;
    abortOnClose = new AbortController();
    constructor(options) {
        super(options);
        this.dbAdapter = options.db;
        /**
         * Configure or connect to the shared sync worker.
         * This worker will manage all syncing operations remotely.
         */
        const resolvedWorkerOptions = {
            dbFilename: this.options.identifier,
            temporaryStorage: _adapters_web_sql_flags_js__WEBPACK_IMPORTED_MODULE_4__.TemporaryStorageOption.MEMORY,
            cacheSizeKb: _adapters_web_sql_flags_js__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_CACHE_SIZE_KB,
            ...options,
            flags: (0,_adapters_web_sql_flags_js__WEBPACK_IMPORTED_MODULE_4__.resolveWebSQLFlags)(options.flags)
        };
        const syncWorker = options.sync?.worker;
        if (syncWorker) {
            if (typeof syncWorker === 'function') {
                this.messagePort = syncWorker(resolvedWorkerOptions).port;
            }
            else {
                this.messagePort = new SharedWorker(`${syncWorker}`, {
                    /* @vite-ignore */
                    name: `shared-sync-${this.webOptions.identifier}`
                }).port;
            }
        }
        else {
            this.messagePort = new SharedWorker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u("_journeyapps_wa-sqlite-_journeyapps_wa-sqlite_src_examples_AccessHandlePoolVFS_js-_journeyapp-89f0ba"), __webpack_require__.b), {
                /* @vite-ignore */
                name: `shared-sync-${this.webOptions.identifier}`,
                type: undefined
            }).port;
        }
        /**
         * Pass along any sync status updates to this listener
         */
        this.clientProvider = new SharedSyncClientProvider(this.webOptions, (status) => {
            this.updateSyncStatus(status);
        }, options.db);
        this.syncManager = comlink__WEBPACK_IMPORTED_MODULE_0__.wrap(this.messagePort);
        /**
         * The sync worker will call this client provider when it needs
         * to fetch credentials or upload data.
         * This performs bi-directional method calling.
         */
        comlink__WEBPACK_IMPORTED_MODULE_0__.expose(this.clientProvider, this.messagePort);
        this.syncManager.setLogLevel(this.logger.getLevel());
        this.triggerCrudUpload = this.syncManager.triggerCrudUpload;
        /**
         * Opens MessagePort to the existing shared DB worker.
         * The sync worker cannot initiate connections directly to the
         * DB worker, but a port to the DB worker can be transferred to the
         * sync worker.
         */
        this.isInitialized = this._init();
    }
    async _init() {
        /**
         * The general flow of initialization is:
         *  - The client requests a unique navigator lock.
         *    - Once the lock is acquired, we register the lock with the shared worker.
         *    - The shared worker can then request the same lock. The client has been closed if the shared worker can acquire the lock.
         *    - Once the shared worker knows the client's lock, we can guarentee that the shared worker will detect if the client has been closed.
         *    - This makes the client safe for the shared worker to use.
         *    - The client is only added to the SharedSyncImplementation once the lock has been registered.
         *      This ensures we don't ever keep track of dead clients (tabs that closed before the lock was registered).
         *    - The client side lock is held until the client is disposed.
         *    - We resolve the top-level promise after the lock has been registered with the shared worker.
         * - The client sends the params to the shared worker after locks have been registered.
         */
        await new Promise((resolve) => {
            // Request a random lock until this client is disposed. The name of the lock is sent to the shared worker, which
            // will also attempt to acquire it. Since the lock is returned when the tab is closed, this allows the share worker
            // to free resources associated with this tab.
            // We take hold of this lock as soon-as-possible in order to cater for potentially closed tabs.
            (0,_shared_navigator_js__WEBPACK_IMPORTED_MODULE_1__.getNavigatorLocks)().request(`tab-close-signal-${crypto.randomUUID()}`, async (lock) => {
                if (this.abortOnClose.signal.aborted) {
                    return;
                }
                // Awaiting here ensures the worker is waiting for the lock
                await this.syncManager.addLockBasedCloseSignal(lock.name);
                // The lock has been registered, we can continue with the initialization
                resolve();
                await new Promise((r) => {
                    this.abortOnClose.signal.onabort = () => r();
                });
            });
        });
        const { crudUploadThrottleMs, identifier, retryDelayMs } = this.options;
        const flags = { ...this.webOptions.flags, workers: undefined };
        await this.syncManager.setParams({
            dbParams: this.dbAdapter.getConfiguration(),
            streamOptions: {
                crudUploadThrottleMs,
                identifier,
                retryDelayMs,
                flags: flags
            }
        }, this.options.subscriptions);
    }
    /**
     * Starts the sync process, this effectively acts as a call to
     * `connect` if not yet connected.
     */
    async connect(options) {
        await this.waitForReady();
        return this.syncManager.connect(options);
    }
    async disconnect() {
        await this.waitForReady();
        return this.syncManager.disconnect();
    }
    async getWriteCheckpoint() {
        await this.waitForReady();
        return this.syncManager.getWriteCheckpoint();
    }
    async hasCompletedSync() {
        return this.syncManager.hasCompletedSync();
    }
    async dispose() {
        await this.waitForReady();
        await new Promise((resolve) => {
            // Listen for the close acknowledgment from the worker
            this.messagePort.addEventListener('message', (event) => {
                const payload = event.data;
                if (payload?.event === _worker_sync_SharedSyncImplementation_js__WEBPACK_IMPORTED_MODULE_3__.SharedSyncClientEvent.CLOSE_ACK) {
                    resolve();
                }
            });
            // Signal the shared worker that this client is closing its connection to the worker
            const closeMessagePayload = {
                event: _worker_sync_SharedSyncImplementation_js__WEBPACK_IMPORTED_MODULE_3__.SharedSyncClientEvent.CLOSE_CLIENT,
                data: {}
            };
            this.messagePort.postMessage(closeMessagePayload);
        });
        await super.dispose();
        this.abortOnClose.abort();
        // Release the proxy
        this.syncManager[comlink__WEBPACK_IMPORTED_MODULE_0__.releaseProxy]();
        this.messagePort.close();
    }
    async waitForReady() {
        return this.isInitialized;
    }
    updateSubscriptions(subscriptions) {
        this.syncManager.updateSubscriptions(subscriptions);
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

/***/ "./lib/src/shared/navigator.js"
/*!*************************************!*\
  !*** ./lib/src/shared/navigator.js ***!
  \*************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNavigatorLocks: () => (/* binding */ getNavigatorLocks)
/* harmony export */ });
const getNavigatorLocks = () => {
    if ('locks' in navigator && navigator.locks) {
        return navigator.locks;
    }
    throw new Error('Navigator locks are not available in an insecure context. Use a secure context such as HTTPS or http://localhost.');
};


/***/ },

/***/ "./lib/src/worker/db/open-worker-database.js"
/*!***************************************************!*\
  !*** ./lib/src/worker/db/open-worker-database.js ***!
  \***************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWorkerDatabaseOpener: () => (/* binding */ getWorkerDatabaseOpener),
/* harmony export */   isSharedWorker: () => (/* binding */ isSharedWorker),
/* harmony export */   openWorkerDatabasePort: () => (/* binding */ openWorkerDatabasePort),
/* harmony export */   resolveWorkerDatabasePortFactory: () => (/* binding */ resolveWorkerDatabasePortFactory)
/* harmony export */ });
/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! comlink */ "comlink");
/* harmony import */ var _db_adapters_wa_sqlite_WASQLiteConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../db/adapters/wa-sqlite/WASQLiteConnection.js */ "./lib/src/db/adapters/wa-sqlite/WASQLiteConnection.js");


/**
 * Opens a shared or dedicated worker which exposes opening of database connections
 */
function openWorkerDatabasePort(workerIdentifier, multipleTabs = true, worker = '', vfs) {
    const needsDedicated = vfs == _db_adapters_wa_sqlite_WASQLiteConnection_js__WEBPACK_IMPORTED_MODULE_1__.WASQLiteVFS.AccessHandlePoolVFS || vfs == _db_adapters_wa_sqlite_WASQLiteConnection_js__WEBPACK_IMPORTED_MODULE_1__.WASQLiteVFS.OPFSCoopSyncVFS;
    if (worker) {
        return !needsDedicated && multipleTabs
            ? new SharedWorker(`${worker}`, {
                /* @vite-ignore */
                name: `shared-DB-worker-${workerIdentifier}`
            }).port
            : new Worker(`${worker}`, {
                /* @vite-ignore */
                name: `DB-worker-${workerIdentifier}`
            });
    }
    else {
        /**
         *  Webpack V5 can bundle the worker automatically if the full Worker constructor syntax is used
         *  https://webpack.js.org/guides/web-workers/
         *  This enables multi tab support by default, but falls back if SharedWorker is not available
         *  (in the case of Android)
         */
        return !needsDedicated && multipleTabs
            ? new SharedWorker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u("_journeyapps_wa-sqlite_src_examples_AccessHandlePoolVFS_js-_journeyapps_wa-sqlite_src_example-97ebe9"), __webpack_require__.b), {
                /* @vite-ignore */
                name: `shared-DB-worker-${workerIdentifier}`,
                type: undefined
            }).port
            : new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u("_journeyapps_wa-sqlite_src_examples_AccessHandlePoolVFS_js-_journeyapps_wa-sqlite_src_example-97ebe9"), __webpack_require__.b), {
                /* @vite-ignore */
                name: `DB-worker-${workerIdentifier}`,
                type: undefined
            });
    }
}
/**
 * @returns A function which allows for opening database connections inside
 * a worker.
 */
function getWorkerDatabaseOpener(workerIdentifier, multipleTabs = true, worker = '') {
    return comlink__WEBPACK_IMPORTED_MODULE_0__.wrap(openWorkerDatabasePort(workerIdentifier, multipleTabs, worker));
}
function resolveWorkerDatabasePortFactory(worker) {
    const workerInstance = worker();
    return isSharedWorker(workerInstance) ? workerInstance.port : workerInstance;
}
function isSharedWorker(worker) {
    return 'port' in worker;
}


/***/ },

/***/ "./lib/src/worker/sync/AbstractSharedSyncClientProvider.js"
/*!*****************************************************************!*\
  !*** ./lib/src/worker/sync/AbstractSharedSyncClientProvider.js ***!
  \*****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractSharedSyncClientProvider: () => (/* binding */ AbstractSharedSyncClientProvider)
/* harmony export */ });
/**
 * The client side port should provide these methods.
 */
class AbstractSharedSyncClientProvider {
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
/************************************************************************/
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
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".index.umd.js";
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./lib/src/index.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractWebPowerSyncDatabaseOpenFactory: () => (/* reexport safe */ _db_adapters_AbstractWebPowerSyncDatabaseOpenFactory_js__WEBPACK_IMPORTED_MODULE_2__.AbstractWebPowerSyncDatabaseOpenFactory),
/* harmony export */   AbstractWebSQLOpenFactory: () => (/* reexport safe */ _db_adapters_AbstractWebSQLOpenFactory_js__WEBPACK_IMPORTED_MODULE_3__.AbstractWebSQLOpenFactory),
/* harmony export */   AsyncWASQLiteModuleFactory: () => (/* reexport safe */ _db_adapters_wa_sqlite_WASQLiteConnection_js__WEBPACK_IMPORTED_MODULE_5__.AsyncWASQLiteModuleFactory),
/* harmony export */   DEFAULT_CACHE_SIZE_KB: () => (/* reexport safe */ _db_adapters_web_sql_flags_js__WEBPACK_IMPORTED_MODULE_9__.DEFAULT_CACHE_SIZE_KB),
/* harmony export */   DEFAULT_MODULE_FACTORIES: () => (/* reexport safe */ _db_adapters_wa_sqlite_WASQLiteConnection_js__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_MODULE_FACTORIES),
/* harmony export */   DEFAULT_POWERSYNC_FLAGS: () => (/* reexport safe */ _db_PowerSyncDatabase_js__WEBPACK_IMPORTED_MODULE_10__.DEFAULT_POWERSYNC_FLAGS),
/* harmony export */   DEFAULT_WEB_SQL_FLAGS: () => (/* reexport safe */ _db_adapters_web_sql_flags_js__WEBPACK_IMPORTED_MODULE_9__.DEFAULT_WEB_SQL_FLAGS),
/* harmony export */   IndexDBFileSystemStorageAdapter: () => (/* reexport safe */ _attachments_IndexDBFileSystemAdapter_js__WEBPACK_IMPORTED_MODULE_1__.IndexDBFileSystemStorageAdapter),
/* harmony export */   MultiCipherAsyncWASQLiteModuleFactory: () => (/* reexport safe */ _db_adapters_wa_sqlite_WASQLiteConnection_js__WEBPACK_IMPORTED_MODULE_5__.MultiCipherAsyncWASQLiteModuleFactory),
/* harmony export */   MultiCipherSyncWASQLiteModuleFactory: () => (/* reexport safe */ _db_adapters_wa_sqlite_WASQLiteConnection_js__WEBPACK_IMPORTED_MODULE_5__.MultiCipherSyncWASQLiteModuleFactory),
/* harmony export */   PowerSyncDatabase: () => (/* reexport safe */ _db_PowerSyncDatabase_js__WEBPACK_IMPORTED_MODULE_10__.PowerSyncDatabase),
/* harmony export */   SharedWebStreamingSyncImplementation: () => (/* reexport safe */ _db_sync_SharedWebStreamingSyncImplementation_js__WEBPACK_IMPORTED_MODULE_11__.SharedWebStreamingSyncImplementation),
/* harmony export */   SyncWASQLiteModuleFactory: () => (/* reexport safe */ _db_adapters_wa_sqlite_WASQLiteConnection_js__WEBPACK_IMPORTED_MODULE_5__.SyncWASQLiteModuleFactory),
/* harmony export */   TemporaryStorageOption: () => (/* reexport safe */ _db_adapters_web_sql_flags_js__WEBPACK_IMPORTED_MODULE_9__.TemporaryStorageOption),
/* harmony export */   WASQLiteDBAdapter: () => (/* reexport safe */ _db_adapters_wa_sqlite_WASQLiteDBAdapter_js__WEBPACK_IMPORTED_MODULE_6__.WASQLiteDBAdapter),
/* harmony export */   WASQLiteOpenFactory: () => (/* reexport safe */ _db_adapters_wa_sqlite_WASQLiteOpenFactory_js__WEBPACK_IMPORTED_MODULE_7__.WASQLiteOpenFactory),
/* harmony export */   WASQLitePowerSyncDatabaseOpenFactory: () => (/* reexport safe */ _db_adapters_wa_sqlite_WASQLitePowerSyncDatabaseOpenFactory_js__WEBPACK_IMPORTED_MODULE_8__.WASQLitePowerSyncDatabaseOpenFactory),
/* harmony export */   WASQLiteVFS: () => (/* reexport safe */ _db_adapters_wa_sqlite_WASQLiteConnection_js__WEBPACK_IMPORTED_MODULE_5__.WASQLiteVFS),
/* harmony export */   WASqliteConnection: () => (/* reexport safe */ _db_adapters_wa_sqlite_WASQLiteConnection_js__WEBPACK_IMPORTED_MODULE_5__.WASqliteConnection),
/* harmony export */   WebRemote: () => (/* reexport safe */ _db_sync_WebRemote_js__WEBPACK_IMPORTED_MODULE_12__.WebRemote),
/* harmony export */   WebStreamingSyncImplementation: () => (/* reexport safe */ _db_sync_WebStreamingSyncImplementation_js__WEBPACK_IMPORTED_MODULE_13__.WebStreamingSyncImplementation),
/* harmony export */   isServerSide: () => (/* reexport safe */ _db_adapters_web_sql_flags_js__WEBPACK_IMPORTED_MODULE_9__.isServerSide),
/* harmony export */   resolveWebPowerSyncFlags: () => (/* reexport safe */ _db_PowerSyncDatabase_js__WEBPACK_IMPORTED_MODULE_10__.resolveWebPowerSyncFlags),
/* harmony export */   resolveWebSQLFlags: () => (/* reexport safe */ _db_adapters_web_sql_flags_js__WEBPACK_IMPORTED_MODULE_9__.resolveWebSQLFlags)
/* harmony export */ });
/* harmony import */ var _powersync_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @powersync/common */ "@powersync/common");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _powersync_common__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _powersync_common__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _attachments_IndexDBFileSystemAdapter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attachments/IndexDBFileSystemAdapter.js */ "./lib/src/attachments/IndexDBFileSystemAdapter.js");
/* harmony import */ var _db_adapters_AbstractWebPowerSyncDatabaseOpenFactory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db/adapters/AbstractWebPowerSyncDatabaseOpenFactory.js */ "./lib/src/db/adapters/AbstractWebPowerSyncDatabaseOpenFactory.js");
/* harmony import */ var _db_adapters_AbstractWebSQLOpenFactory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./db/adapters/AbstractWebSQLOpenFactory.js */ "./lib/src/db/adapters/AbstractWebSQLOpenFactory.js");
/* harmony import */ var _db_adapters_AsyncDatabaseConnection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./db/adapters/AsyncDatabaseConnection.js */ "./lib/src/db/adapters/AsyncDatabaseConnection.js");
/* harmony import */ var _db_adapters_wa_sqlite_WASQLiteConnection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./db/adapters/wa-sqlite/WASQLiteConnection.js */ "./lib/src/db/adapters/wa-sqlite/WASQLiteConnection.js");
/* harmony import */ var _db_adapters_wa_sqlite_WASQLiteDBAdapter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./db/adapters/wa-sqlite/WASQLiteDBAdapter.js */ "./lib/src/db/adapters/wa-sqlite/WASQLiteDBAdapter.js");
/* harmony import */ var _db_adapters_wa_sqlite_WASQLiteOpenFactory_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./db/adapters/wa-sqlite/WASQLiteOpenFactory.js */ "./lib/src/db/adapters/wa-sqlite/WASQLiteOpenFactory.js");
/* harmony import */ var _db_adapters_wa_sqlite_WASQLitePowerSyncDatabaseOpenFactory_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./db/adapters/wa-sqlite/WASQLitePowerSyncDatabaseOpenFactory.js */ "./lib/src/db/adapters/wa-sqlite/WASQLitePowerSyncDatabaseOpenFactory.js");
/* harmony import */ var _db_adapters_web_sql_flags_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./db/adapters/web-sql-flags.js */ "./lib/src/db/adapters/web-sql-flags.js");
/* harmony import */ var _db_PowerSyncDatabase_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./db/PowerSyncDatabase.js */ "./lib/src/db/PowerSyncDatabase.js");
/* harmony import */ var _db_sync_SharedWebStreamingSyncImplementation_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./db/sync/SharedWebStreamingSyncImplementation.js */ "./lib/src/db/sync/SharedWebStreamingSyncImplementation.js");
/* harmony import */ var _db_sync_WebRemote_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./db/sync/WebRemote.js */ "./lib/src/db/sync/WebRemote.js");
/* harmony import */ var _db_sync_WebStreamingSyncImplementation_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./db/sync/WebStreamingSyncImplementation.js */ "./lib/src/db/sync/WebStreamingSyncImplementation.js");
/* harmony import */ var _db_adapters_WebDBAdapter_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./db/adapters/WebDBAdapter.js */ "./lib/src/db/adapters/WebDBAdapter.js");
















})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.umd.js.map
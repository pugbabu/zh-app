var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20181116_syb_scopedata*/global.__wcc_version__='v0.5vv_20181116_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
var value = $gdc( raw, "", 2 );
return value;
}
else
{
var value = $gdc( raw, "", 2 );
return value;
}
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showLike']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'head'])
Z([3,'__l'])
Z([[6],[[7],[3,'classic']],[3,'text']])
Z([3,'1'])
Z(z[1])
Z([3,'like'])
Z([[6],[[7],[3,'classic']],[3,'fav_nums']])
Z([1,true])
Z(z[7])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'list data-v-5d5109a8'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'fileList']])
Z(z[1])
Z([[7],[3,'item']])
Z([[2,'<'],[[6],[[7],[3,'fileList']],[3,'length']],[[7],[3,'limit']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[1,'uni-tab data-v-6e7cbddf']],[[2,'?:'],[[2,'==='],[[7],[3,'scroll']],[1,true]],[1,'uni-scroll-tab'],[1,'']]]])
Z([3,'index'])
Z([3,'tab'])
Z([[7],[3,'tabList']])
Z(z[1])
Z([3,'__e'])
Z([[4],[[5],[[5],[[5],[[5],[1,'uni-tab-item data-v-6e7cbddf']],[[2,'?:'],[[2,'==='],[[7],[3,'index']],[[7],[3,'value']]],[1,'uni-tab-active'],[1,'']]],[[2,'?:'],[[2,'==='],[[7],[3,'scroll']],[1,true]],[1,'uni-tab-scroll-item'],[1,'']]],[[2,'?:'],[[2,'&&'],[[2,'==='],[[7],[3,'index']],[[7],[3,'value']]],[[2,'==='],[[7],[3,'scroll']],[1,true]]],[1,' uni-tab-scroll-active'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'itemClick']],[[4],[[5],[[5],[[7],[3,'index']]],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'tabList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'color:'],[[2,'?:'],[[2,'==='],[[7],[3,'index']],[[7],[3,'value']]],[[7],[3,'activeColor']],[[7],[3,'defaultColor']]]],[1,';']],[[2,'+'],[[2,'+'],[1,'background-color:'],[[7],[3,'bgColor']]],[1,';']]])
Z([[2,'!='],[[6],[[7],[3,'tab']],[3,'icon']],[1,undefined]])
Z([[2,'!'],[[7],[3,'scroll']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'tag-container tag-class '])
Z([3,'before'])
Z([3,'after'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-swiper__warp data-v-126aaa90'])
Z([[2,'==='],[[7],[3,'mode']],[1,'default']])
Z([[2,'==='],[[7],[3,'mode']],[1,'dot']])
Z([[2,'==='],[[7],[3,'mode']],[1,'round']])
Z([[2,'==='],[[7],[3,'mode']],[1,'nav']])
Z([[2,'==='],[[7],[3,'mode']],[1,'indexes']])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showPopup']])
Z([3,'__e'])
Z([3,'uni-popup data-v-9a7f06fc'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'clear']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'__l'])
Z(z[1])
Z([3,'data-v-9a7f06fc'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'onTap']]]]]]]]])
Z([[4],[[5],[1,'fade']]])
Z([[7],[3,'showTrans']])
Z([[7],[3,'maskClass']])
Z([3,'1'])
Z(z[4])
Z(z[1])
Z(z[6])
Z(z[7])
Z([[7],[3,'ani']])
Z(z[9])
Z([[7],[3,'transClass']])
Z([3,'2'])
Z([[4],[[5],[1,'default']]])
Z(z[1])
Z([3,'uni-popup__wrapper-box data-v-9a7f06fc'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'clear']],[[4],[[5],[1,'$event']]]]]]]]]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isShow']])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'uni-transition vue-ref']],[[6],[[7],[3,'ani']],[3,'in']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'ani'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'transform:'],[[7],[3,'transform']]],[1,';']],[[7],[3,'stylesObject']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[7],[3,'searching']]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'books']])
Z(z[1])
Z([3,'__l'])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'#5886fc'])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'message-tab'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^updateValue']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_sync']],[[4],[[5],[[5],[[5],[1,'$0']],[1,'index']],[1,'$event']]]],[[4],[[5],[1,'']]]]]]]]]]])
Z([3,'#333333'])
Z([[7],[3,'tabList']])
Z([[7],[3,'index']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'classics']])
Z(z[0])
Z([3,'__l'])
Z([3,'preview'])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z(z[1])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^onSuccess']],[[4],[[5],[[4],[[5],[1,'onSuccess']]]]]]]],[[4],[[5],[[5],[1,'^onError']],[[4],[[5],[[4],[[5],[1,'handleError']]]]]]]]])
Z([[7],[3,'fileList']])
Z([[7],[3,'headers']])
Z([1,3])
Z([3,'image'])
Z([[7],[3,'url']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'fade'])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z([[7],[3,'taskModal']])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'trouble-manage'])
Z([3,'__l'])
Z([[7],[3,'current']])
Z([[7],[3,'dotsStyles']])
Z([[7],[3,'troubles']])
Z([[7],[3,'mode']])
Z([3,'height:100%;'])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z(z[1])
Z([3,'vue-ref'])
Z([3,'popup'])
Z([3,'bottom'])
Z([3,'2'])
Z(z[8])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/book/book.wxml','./components/like/like.wxml','./components/preview/preview.wxml','./components/ss-upload-image/ss-upload-image.wxml','./components/sun-tab/sun-tab.wxml','./components/tag/tag.wxml','./components/uni-swiper-dot/uni-swiper-dot.wxml','./node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup.wxml','./node-modules/@dcloudio/uni-ui/lib/uni-transition/uni-transition.wxml','./pages/about/about.wxml','./pages/alarm/alarm.wxml','./pages/book/book.wxml','./pages/electronic/electronic.wxml','./pages/home/home.wxml','./pages/login/login.wxml','./pages/material/material.wxml','./pages/message/message.wxml','./pages/mine/mine.wxml','./pages/monitor/monitor.wxml','./pages/my/my.wxml','./pages/new-trouble/new-trouble.wxml','./pages/report/report.wxml','./pages/shift-repair/shift-repair.wxml','./pages/success/success.wxml','./pages/trouble-manage/trouble-manage.wxml','./pages/work-detail/work-detail.wxml','./pages/work-sheet/work-sheet.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_v()
_(r,oB)
if(_oz(z,0,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var fE=_n('view')
_rz(z,fE,'class',0,e,s,gg)
var cF=_mz(z,'v-tag',['bind:__l',1,'text',1,'vueId',2],[],e,s,gg)
_(fE,cF)
var hG=_mz(z,'v-like',['bind:__l',4,'class',1,'count',2,'like',3,'readOnly',4,'vueId',5],[],e,s,gg)
_(fE,hG)
_(r,fE)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var cI=_n('view')
_rz(z,cI,'class',0,e,s,gg)
var lK=_v()
_(cI,lK)
var aL=function(eN,tM,bO,gg){
var xQ=_v()
_(bO,xQ)
if(_oz(z,5,eN,tM,gg)){xQ.wxVkey=1
}
xQ.wxXCkey=1
return bO
}
lK.wxXCkey=2
_2z(z,3,aL,e,s,gg,lK,'item','index','index')
var oJ=_v()
_(cI,oJ)
if(_oz(z,6,e,s,gg)){oJ.wxVkey=1
}
oJ.wxXCkey=1
_(r,cI)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var fS=_n('view')
_rz(z,fS,'class',0,e,s,gg)
var hU=_v()
_(fS,hU)
var oV=function(oX,cW,lY,gg){
var t1=_mz(z,'view',['bindtap',5,'class',1,'data-event-opts',2,'style',3],[],oX,cW,gg)
var e2=_v()
_(t1,e2)
if(_oz(z,9,oX,cW,gg)){e2.wxVkey=1
}
e2.wxXCkey=1
_(lY,t1)
return lY
}
hU.wxXCkey=2
_2z(z,3,oV,e,s,gg,hU,'tab','index','index')
var cT=_v()
_(fS,cT)
if(_oz(z,10,e,s,gg)){cT.wxVkey=1
}
cT.wxXCkey=1
_(r,fS)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var o4=_n('view')
_rz(z,o4,'class',0,e,s,gg)
var x5=_n('slot')
_rz(z,x5,'name',1,e,s,gg)
_(o4,x5)
var o6=_n('slot')
_rz(z,o6,'name',2,e,s,gg)
_(o4,o6)
_(r,o4)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var c8=_n('view')
_rz(z,c8,'class',0,e,s,gg)
var aDB=_n('slot')
_(c8,aDB)
var h9=_v()
_(c8,h9)
if(_oz(z,1,e,s,gg)){h9.wxVkey=1
}
var o0=_v()
_(c8,o0)
if(_oz(z,2,e,s,gg)){o0.wxVkey=1
}
var cAB=_v()
_(c8,cAB)
if(_oz(z,3,e,s,gg)){cAB.wxVkey=1
}
var oBB=_v()
_(c8,oBB)
if(_oz(z,4,e,s,gg)){oBB.wxVkey=1
}
var lCB=_v()
_(c8,lCB)
if(_oz(z,5,e,s,gg)){lCB.wxVkey=1
}
h9.wxXCkey=1
o0.wxXCkey=1
cAB.wxXCkey=1
oBB.wxXCkey=1
lCB.wxXCkey=1
_(r,c8)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var eFB=_v()
_(r,eFB)
if(_oz(z,0,e,s,gg)){eFB.wxVkey=1
var bGB=_mz(z,'view',['catchtouchmove',1,'class',1,'data-event-opts',2],[],e,s,gg)
var oHB=_mz(z,'uni-transition',['bind:__l',4,'bind:click',1,'class',2,'data-event-opts',3,'modeClass',4,'show',5,'styles',6,'vueId',7],[],e,s,gg)
_(bGB,oHB)
var xIB=_mz(z,'uni-transition',['bind:__l',12,'bind:click',1,'class',2,'data-event-opts',3,'modeClass',4,'show',5,'styles',6,'vueId',7,'vueSlots',8],[],e,s,gg)
var oJB=_mz(z,'view',['catchtap',21,'class',1,'data-event-opts',2],[],e,s,gg)
var fKB=_n('slot')
_(oJB,fKB)
_(xIB,oJB)
_(bGB,xIB)
_(eFB,bGB)
}
eFB.wxXCkey=1
eFB.wxXCkey=3
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var hMB=_v()
_(r,hMB)
if(_oz(z,0,e,s,gg)){hMB.wxVkey=1
var oNB=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2,'data-ref',3,'style',4],[],e,s,gg)
var cOB=_n('slot')
_(oNB,cOB)
_(hMB,oNB)
}
hMB.wxXCkey=1
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var tSB=_v()
_(r,tSB)
if(_oz(z,0,e,s,gg)){tSB.wxVkey=1
var eTB=_v()
_(tSB,eTB)
var bUB=function(xWB,oVB,oXB,gg){
var cZB=_mz(z,'v-book',['bind:__l',5,'book',1,'vueId',2],[],xWB,oVB,gg)
_(oXB,cZB)
return oXB
}
eTB.wxXCkey=4
_2z(z,3,bUB,e,s,gg,eTB,'item','index','index')
}
tSB.wxXCkey=1
tSB.wxXCkey=3
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var a6B=_mz(z,'sun-tab',['activeColor',0,'bind:__l',1,'bind:updateValue',1,'class',2,'data-event-opts',3,'defaultColor',4,'tabList',5,'value',6,'vueId',7],[],e,s,gg)
_(r,a6B)
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var o0B=_v()
_(r,o0B)
var xAC=function(fCC,oBC,cDC,gg){
var oFC=_mz(z,'v-preview',['bind:__l',4,'class',1,'classic',2,'vueId',3],[],fCC,oBC,gg)
_(cDC,oFC)
return cDC
}
o0B.wxXCkey=4
_2z(z,2,xAC,e,s,gg,o0B,'item','index','index')
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var oHC=_mz(z,'ss-upload-image',['bind:__l',0,'bind:onError',1,'bind:onSuccess',1,'data-event-opts',2,'fileList',3,'header',4,'limit',5,'name',6,'url',7,'vueId',8],[],e,s,gg)
_(r,oHC)
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var tKC=_mz(z,'transition',['bind:__l',0,'name',1,'vueId',1,'vueSlots',2],[],e,s,gg)
var eLC=_v()
_(tKC,eLC)
if(_oz(z,4,e,s,gg)){eLC.wxVkey=1
}
eLC.wxXCkey=1
_(r,tKC)
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var xOC=_n('view')
_rz(z,xOC,'class',0,e,s,gg)
var oPC=_mz(z,'swiper-dot',['bind:__l',1,'current',1,'dotsStyles',2,'info',3,'mode',4,'style',5,'vueId',6,'vueSlots',7],[],e,s,gg)
_(xOC,oPC)
var fQC=_mz(z,'uni-popup',['bind:__l',9,'class',1,'data-ref',2,'type',3,'vueId',4,'vueSlots',5],[],e,s,gg)
_(xOC,fQC)
_(r,xOC)
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/home/home","pages/monitor/monitor","pages/trouble-manage/trouble-manage","pages/electronic/electronic","pages/mine/mine","pages/material/material","pages/new-trouble/new-trouble","pages/shift-repair/shift-repair","pages/success/success","pages/message/message","pages/login/login","pages/alarm/alarm","pages/work-sheet/work-sheet","pages/work-detail/work-detail","pages/report/report","pages/about/about","pages/alarm/alarm","pages/book/book","pages/my/my"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"旧岛小厅","navigationBarBackgroundColor":"#fff","backgroundColor":"#FFFFFF"},"tabBar":{"color":"#333333","selectedColor":"#1687e8","backgroundColor":"#ffffff","borderStyle":"black","list":[{"pagePath":"pages/home/home","iconPath":"static/tab/home.png","selectedIconPath":"static/tab/home-active.png","text":"首页"},{"pagePath":"pages/material/material","iconPath":"static/tab/wuliao.png","selectedIconPath":"static/tab/wuliao-active.png","text":"物料库存"},{"pagePath":"pages/mine/mine","iconPath":"static/tab/mine.png","selectedIconPath":"static/tab/mine-active.png","text":"个人中心"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"众合智能运维","compilerVersion":"2.4.2","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/book/book.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/book/book.wxml']=$gwx('./components/book/book.wxml');

__wxAppCode__['components/like/like.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/like/like.wxml']=$gwx('./components/like/like.wxml');

__wxAppCode__['components/preview/preview.json']={"usingComponents":{"v-like":"/components/like/like","v-tag":"/components/tag/tag"},"component":true};
__wxAppCode__['components/preview/preview.wxml']=$gwx('./components/preview/preview.wxml');

__wxAppCode__['components/ss-upload-image/ss-upload-image.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/ss-upload-image/ss-upload-image.wxml']=$gwx('./components/ss-upload-image/ss-upload-image.wxml');

__wxAppCode__['components/sun-tab/sun-tab.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/sun-tab/sun-tab.wxml']=$gwx('./components/sun-tab/sun-tab.wxml');

__wxAppCode__['components/tag/tag.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/tag/tag.wxml']=$gwx('./components/tag/tag.wxml');

__wxAppCode__['components/uni-swiper-dot/uni-swiper-dot.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-swiper-dot/uni-swiper-dot.wxml']=$gwx('./components/uni-swiper-dot/uni-swiper-dot.wxml');

__wxAppCode__['node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup.json']={"usingComponents":{"uni-transition":"/node-modules/@dcloudio/uni-ui/lib/uni-transition/uni-transition"},"component":true};
__wxAppCode__['node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup.wxml']=$gwx('./node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup.wxml');

__wxAppCode__['node-modules/@dcloudio/uni-ui/lib/uni-transition/uni-transition.json']={"usingComponents":{},"component":true};
__wxAppCode__['node-modules/@dcloudio/uni-ui/lib/uni-transition/uni-transition.wxml']=$gwx('./node-modules/@dcloudio/uni-ui/lib/uni-transition/uni-transition.wxml');

__wxAppCode__['pages/about/about.json']={"navigationBarTitleText":"我的","usingComponents":{"v-preview":"/components/preview/preview"}};
__wxAppCode__['pages/about/about.wxml']=$gwx('./pages/about/about.wxml');

__wxAppCode__['pages/alarm/alarm.json']={"navigationBarTitleText":"流行","usingComponents":{}};
__wxAppCode__['pages/alarm/alarm.wxml']=$gwx('./pages/alarm/alarm.wxml');

__wxAppCode__['pages/book/book.json']={"navigationBarTitleText":"书籍","usingComponents":{"v-book":"/components/book/book"}};
__wxAppCode__['pages/book/book.wxml']=$gwx('./pages/book/book.wxml');

__wxAppCode__['pages/electronic/electronic.json']={"navigationBarTitleText":"电子报班","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#5886fc","usingComponents":{}};
__wxAppCode__['pages/electronic/electronic.wxml']=$gwx('./pages/electronic/electronic.wxml');

__wxAppCode__['pages/home/home.json']={"navigationBarTitleText":"","navigationBarBackgroundColor":"#5886fc","usingComponents":{}};
__wxAppCode__['pages/home/home.wxml']=$gwx('./pages/home/home.wxml');

__wxAppCode__['pages/login/login.json']={"navigationBarTitleText":"","navigationBarBackgroundColor":"#5886fc","navigationBarTextStyle":"white","usingComponents":{}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/material/material.json']={"navigationBarTitleText":"","navigationBarBackgroundColor":"#5886fc","usingComponents":{}};
__wxAppCode__['pages/material/material.wxml']=$gwx('./pages/material/material.wxml');

__wxAppCode__['pages/message/message.json']={"navigationBarTitleText":"消息","navigationBarBackgroundColor":"#fff","usingComponents":{"sun-tab":"/components/sun-tab/sun-tab"}};
__wxAppCode__['pages/message/message.wxml']=$gwx('./pages/message/message.wxml');

__wxAppCode__['pages/mine/mine.json']={"navigationBarTitleText":"","navigationBarBackgroundColor":"#fff","usingComponents":{}};
__wxAppCode__['pages/mine/mine.wxml']=$gwx('./pages/mine/mine.wxml');

__wxAppCode__['pages/monitor/monitor.json']={"navigationBarTitleText":"监测","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#5886fc","usingComponents":{}};
__wxAppCode__['pages/monitor/monitor.wxml']=$gwx('./pages/monitor/monitor.wxml');

__wxAppCode__['pages/my/my.json']={"navigationBarTitleText":"喜欢","usingComponents":{"v-preview":"/components/preview/preview"}};
__wxAppCode__['pages/my/my.wxml']=$gwx('./pages/my/my.wxml');

__wxAppCode__['pages/new-trouble/new-trouble.json']={"navigationBarTitleText":"新增故障","navigationBarBackgroundColor":"#F7F8FA","usingComponents":{"ss-upload-image":"/components/ss-upload-image/ss-upload-image"}};
__wxAppCode__['pages/new-trouble/new-trouble.wxml']=$gwx('./pages/new-trouble/new-trouble.wxml');

__wxAppCode__['pages/report/report.json']={"navigationBarTitleText":"监测","usingComponents":{}};
__wxAppCode__['pages/report/report.wxml']=$gwx('./pages/report/report.wxml');

__wxAppCode__['pages/shift-repair/shift-repair.json']={"navigationBarTitleText":"","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#5886fc","usingComponents":{}};
__wxAppCode__['pages/shift-repair/shift-repair.wxml']=$gwx('./pages/shift-repair/shift-repair.wxml');

__wxAppCode__['pages/success/success.json']={"navigationBarTitleText":"","navigationBarBackgroundColor":"#FFFFFF","usingComponents":{}};
__wxAppCode__['pages/success/success.wxml']=$gwx('./pages/success/success.wxml');

__wxAppCode__['pages/trouble-manage/trouble-manage.json']={"navigationBarTitleText":"","navigationBarBackgroundColor":"#F7F8FA","usingComponents":{"swiper-dot":"/components/uni-swiper-dot/uni-swiper-dot","uni-popup":"/node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup"}};
__wxAppCode__['pages/trouble-manage/trouble-manage.wxml']=$gwx('./pages/trouble-manage/trouble-manage.wxml');

__wxAppCode__['pages/work-detail/work-detail.json']={"navigationBarTitleText":"维修工单","usingComponents":{}};
__wxAppCode__['pages/work-detail/work-detail.wxml']=$gwx('./pages/work-detail/work-detail.wxml');

__wxAppCode__['pages/work-sheet/work-sheet.json']={"navigationBarTitleText":"工单","usingComponents":{}};
__wxAppCode__['pages/work-sheet/work-sheet.wxml']=$gwx('./pages/work-sheet/work-sheet.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"00da":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={onLaunch:function(){console.log(n("App Launch"," at App.vue:4"))},onShow:function(){console.log(n("App Show"," at App.vue:7"))},onHide:function(){console.log(n("App Hide"," at App.vue:10"))}};e.default=t}).call(this,t("0de9")["default"])},"8a22":function(n,e,t){"use strict";(function(n){t("a886"),t("921b");var e=u(t("66fd")),o=u(t("d1d8"));function u(n){return n&&n.__esModule?n:{default:n}}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),o.forEach(function(e){r(n,e,t[e])})}return n}function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}e.default.config.productionTip=!1,o.default.mpType="app";var c=new e.default(a({},o.default));n(c).$mount()}).call(this,t("6e42")["createApp"])},a71d:function(n,e,t){},a7df:function(n,e,t){"use strict";t.r(e);var o=t("00da"),u=t.n(o);for(var a in o)"default"!==a&&function(n){t.d(e,n,function(){return o[n]})}(a);e["default"]=u.a},d1d8:function(n,e,t){"use strict";t.r(e);var o=t("a7df");for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);t("d49e");var a,r,c=t("2877"),f=Object(c["a"])(o["default"],a,r,!1,null,null,null);e["default"]=f.exports},d49e:function(n,e,t){"use strict";var o=t("a71d"),u=t.n(o);u.a}},[["8a22","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function n(n) {
    for (var t, r, s = n[0], a = n[1], p = n[2], l = 0, c = []; l < s.length; l++) {
      r = s[l], i[r] && c.push(i[r][0]), i[r] = 0;
    }

    for (t in a) {
      Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
    }

    d && d(n);

    while (c.length) {
      c.shift()();
    }

    return u.push.apply(u, p || []), o();
  }

  function o() {
    for (var e, n = 0; n < u.length; n++) {
      for (var o = u[n], t = !0, r = 1; r < o.length; r++) {
        var s = o[r];
        0 !== i[s] && (t = !1);
      }

      t && (u.splice(n--, 1), e = a(a.s = o[0]));
    }

    return e;
  }

  var t = {},
      r = {
    "common/runtime": 0
  },
      i = {
    "common/runtime": 0
  },
      u = [];

  function s(e) {
    return a.p + "" + e + ".js";
  }

  function a(n) {
    if (t[n]) return t[n].exports;
    var o = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(o.exports, o, o.exports, a), o.l = !0, o.exports;
  }

  a.e = function (e) {
    var n = [],
        o = {
      "components/uni-swiper-dot/uni-swiper-dot": 1,
      "node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup": 1,
      "components/ss-upload-image/ss-upload-image": 1,
      "components/sun-tab/sun-tab": 1,
      "components/preview/preview": 1,
      "components/book/book": 1,
      "node-modules/@dcloudio/uni-ui/lib/uni-transition/uni-transition": 1,
      "components/like/like": 1,
      "components/tag/tag": 1
    };
    r[e] ? n.push(r[e]) : 0 !== r[e] && o[e] && n.push(r[e] = new Promise(function (n, o) {
      for (var t = ({
        "components/uni-swiper-dot/uni-swiper-dot": "components/uni-swiper-dot/uni-swiper-dot",
        "node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup": "node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup",
        "components/ss-upload-image/ss-upload-image": "components/ss-upload-image/ss-upload-image",
        "components/sun-tab/sun-tab": "components/sun-tab/sun-tab",
        "components/preview/preview": "components/preview/preview",
        "components/book/book": "components/book/book",
        "node-modules/@dcloudio/uni-ui/lib/uni-transition/uni-transition": "node-modules/@dcloudio/uni-ui/lib/uni-transition/uni-transition",
        "components/like/like": "components/like/like",
        "components/tag/tag": "components/tag/tag"
      }[e] || e) + ".wxss", i = a.p + t, u = document.getElementsByTagName("link"), s = 0; s < u.length; s++) {
        var p = u[s],
            l = p.getAttribute("data-href") || p.getAttribute("href");
        if ("stylesheet" === p.rel && (l === t || l === i)) return n();
      }

      var c = document.getElementsByTagName("style");

      for (s = 0; s < c.length; s++) {
        p = c[s], l = p.getAttribute("data-href");
        if (l === t || l === i) return n();
      }

      var d = document.createElement("link");
      d.rel = "stylesheet", d.type = "text/css", d.onload = n, d.onerror = function (n) {
        var t = n && n.target && n.target.src || i,
            u = new Error("Loading CSS chunk " + e + " failed.\n(" + t + ")");
        u.request = t, delete r[e], d.parentNode.removeChild(d), o(u);
      }, d.href = i;
      var m = document.getElementsByTagName("head")[0];
      m.appendChild(d);
    }).then(function () {
      r[e] = 0;
    }));
    var t = i[e];
    if (0 !== t) if (t) n.push(t[2]);else {
      var u = new Promise(function (n, o) {
        t = i[e] = [n, o];
      });
      n.push(t[2] = u);
      var p,
          l = document.createElement("script");
      l.charset = "utf-8", l.timeout = 120, a.nc && l.setAttribute("nonce", a.nc), l.src = s(e), p = function p(n) {
        l.onerror = l.onload = null, clearTimeout(c);
        var o = i[e];

        if (0 !== o) {
          if (o) {
            var t = n && ("load" === n.type ? "missing" : n.type),
                r = n && n.target && n.target.src,
                u = new Error("Loading chunk " + e + " failed.\n(" + t + ": " + r + ")");
            u.type = t, u.request = r, o[1](u);
          }

          i[e] = void 0;
        }
      };
      var c = setTimeout(function () {
        p({
          type: "timeout",
          target: l
        });
      }, 12e4);
      l.onerror = l.onload = p, document.head.appendChild(l);
    }
    return Promise.all(n);
  }, a.m = e, a.c = t, a.d = function (e, n, o) {
    a.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: o
    });
  }, a.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, a.t = function (e, n) {
    if (1 & n && (e = a(e)), 8 & n) return e;
    if (4 & n && "object" === typeof e && e && e.__esModule) return e;
    var o = Object.create(null);
    if (a.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var t in e) {
      a.d(o, t, function (n) {
        return e[n];
      }.bind(null, t));
    }
    return o;
  }, a.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return a.d(n, "a", n), n;
  }, a.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, a.p = "/", a.oe = function (e) {
    throw console.error(e), e;
  };
  var p = global["webpackJsonp"] = global["webpackJsonp"] || [],
      l = p.push.bind(p);
  p.push = n, p = p.slice();

  for (var c = 0; c < p.length; c++) {
    n(p[c]);
  }

  var d = l;
  o();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(t,e,n){"use strict";function i(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function r(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(r){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=i(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),o="";if(r.length>1){var a=r.pop();o=r.join("---COMMA---"),0===a.indexOf(" at ")?o+=a:o+="---COMMA---"+a}else o=r[0];return o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},2877:function(t,e,n){"use strict";function i(t,e,n,i,r,o,a,s){var l,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),a?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=l):r&&(l=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,l):[l]}return{exports:t,options:c}}n.d(e,"a",function(){return i})},3403:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={pages:{"pages/home/home":{navigationBarTitleText:"",navigationBarBackgroundColor:"#5886fc"},"pages/monitor/monitor":{navigationBarTitleText:"监测",navigationBarTextStyle:"white",navigationBarBackgroundColor:"#5886fc"},"pages/trouble-manage/trouble-manage":{navigationBarTitleText:"",navigationBarBackgroundColor:"#F7F8FA"},"pages/electronic/electronic":{navigationBarTitleText:"电子报班",navigationBarTextStyle:"white",navigationBarBackgroundColor:"#5886fc"},"pages/mine/mine":{navigationBarTitleText:"",navigationBarBackgroundColor:"#fff"},"pages/material/material":{navigationBarTitleText:"",navigationBarBackgroundColor:"#5886fc"},"pages/new-trouble/new-trouble":{navigationBarTitleText:"新增故障",navigationBarBackgroundColor:"#F7F8FA"},"pages/shift-repair/shift-repair":{navigationBarTitleText:"",navigationBarTextStyle:"white",navigationBarBackgroundColor:"#5886fc"},"pages/success/success":{navigationBarTitleText:"",navigationBarBackgroundColor:"#FFFFFF"},"pages/message/message":{navigationBarTitleText:"消息",navigationBarBackgroundColor:"#fff"},"pages/login/login":{navigationBarTitleText:"",navigationBarBackgroundColor:"#5886fc",navigationBarTextStyle:"white"},"pages/alarm/alarm":{navigationBarTitleText:"流行",usingComponents:{}},"pages/work-sheet/work-sheet":{navigationBarTitleText:"工单"},"pages/work-detail/work-detail":{navigationBarTitleText:"维修工单"},"pages/report/report":{navigationBarTitleText:"监测"},"pages/about/about":{navigationBarTitleText:"我的"},"pages/book/book":{navigationBarTitleText:"书籍"},"pages/my/my":{navigationBarTitleText:"喜欢"}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"旧岛小厅",navigationBarBackgroundColor:"#fff",backgroundColor:"#FFFFFF"}};e.default=i},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function i(t){return void 0===t||null===t}function r(t){return void 0!==t&&null!==t}function o(t){return!0===t}function a(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function l(t){return null!==t&&"object"===typeof t}var c=Object.prototype.toString;function u(t){return"[object Object]"===c.call(t)}function h(t){return"[object RegExp]"===c.call(t)}function p(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function f(t){return r(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function d(t){return null==t?"":Array.isArray(t)||u(t)&&t.toString===c?JSON.stringify(t,null,2):String(t)}function g(t){var e=parseFloat(t);return isNaN(e)?t:e}function v(t,e){for(var n=Object.create(null),i=t.split(","),r=0;r<i.length;r++)n[i[r]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}v("slot,component",!0);var y=v("key,ref,slot,slot-scope,is");function x(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var _=Object.prototype.hasOwnProperty;function m(t,e){return _.call(t,e)}function b(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var A=/-(\w)/g,S=b(function(t){return t.replace(A,function(t,e){return e?e.toUpperCase():""})}),w=b(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),T=/\B([A-Z])/g,P=b(function(t){return t.replace(T,"-$1").toLowerCase()});function k(t,e){function n(n){var i=arguments.length;return i?i>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function O(t,e){return t.bind(e)}var R=Function.prototype.bind?O:k;function D(t,e){e=e||0;var n=t.length-e,i=new Array(n);while(n--)i[n]=t[n+e];return i}function C(t,e){for(var n in e)t[n]=e[n];return t}function $(t){for(var e={},n=0;n<t.length;n++)t[n]&&C(e,t[n]);return e}function L(t,e,n){}var M=function(t,e,n){return!1},E=function(t){return t};function I(t,e){if(t===e)return!0;var n=l(t),i=l(e);if(!n||!i)return!n&&!i&&String(t)===String(e);try{var r=Array.isArray(t),o=Array.isArray(e);if(r&&o)return t.length===e.length&&t.every(function(t,n){return I(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(r||o)return!1;var a=Object.keys(t),s=Object.keys(e);return a.length===s.length&&a.every(function(n){return I(t[n],e[n])})}catch(c){return!1}}function F(t,e){for(var n=0;n<t.length;n++)if(I(t[n],e))return n;return-1}function j(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var B=["component","directive","filter"],N=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],H={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:M,isReservedAttr:M,isUnknownElement:M,getTagNamespace:L,parsePlatformTagName:E,mustUseProp:M,async:!0,_lifecycleHooks:N},z=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function W(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function U(t,e,n,i){Object.defineProperty(t,e,{value:n,enumerable:!!i,writable:!0,configurable:!0})}var V=new RegExp("[^"+z.source+".$_\\d]");function G(t){if(!V.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var Z,J="__proto__"in{},q="undefined"!==typeof window,Y="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,X=Y&&WXEnvironment.platform.toLowerCase(),Q=q&&window.navigator.userAgent.toLowerCase(),K=Q&&/msie|trident/.test(Q),tt=(Q&&Q.indexOf("msie 9.0"),Q&&Q.indexOf("edge/")>0),et=(Q&&Q.indexOf("android"),Q&&/iphone|ipad|ipod|ios/.test(Q)||"ios"===X),nt=(Q&&/chrome\/\d+/.test(Q),Q&&/phantomjs/.test(Q),Q&&Q.match(/firefox\/(\d+)/),{}.watch);if(q)try{var it={};Object.defineProperty(it,"passive",{get:function(){}}),window.addEventListener("test-passive",null,it)}catch(er){}var rt=function(){return void 0===Z&&(Z=!q&&!Y&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),Z},ot=q&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,lt="undefined"!==typeof Symbol&&at(Symbol)&&"undefined"!==typeof Reflect&&at(Reflect.ownKeys);st="undefined"!==typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=L,ut=0,ht=function(){this.id=ut++,this.subs=[]};function pt(t){ht.SharedObject.targetStack.push(t),ht.SharedObject.target=t}function ft(){ht.SharedObject.targetStack.pop(),ht.SharedObject.target=ht.SharedObject.targetStack[ht.SharedObject.targetStack.length-1]}ht.prototype.addSub=function(t){this.subs.push(t)},ht.prototype.removeSub=function(t){x(this.subs,t)},ht.prototype.depend=function(){ht.SharedObject.target&&ht.SharedObject.target.addDep(this)},ht.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},ht.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},ht.SharedObject.target=null,ht.SharedObject.targetStack=[];var dt=function(t,e,n,i,r,o,a,s){this.tag=t,this.data=e,this.children=n,this.text=i,this.elm=r,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},gt={child:{configurable:!0}};gt.child.get=function(){return this.componentInstance},Object.defineProperties(dt.prototype,gt);var vt=function(t){void 0===t&&(t="");var e=new dt;return e.text=t,e.isComment=!0,e};function yt(t){return new dt(void 0,void 0,void 0,String(t))}function xt(t){var e=new dt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var _t=Array.prototype,mt=Object.create(_t),bt=["push","pop","shift","unshift","splice","sort","reverse"];bt.forEach(function(t){var e=_t[t];U(mt,t,function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];var r,o=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":r=n;break;case"splice":r=n.slice(2);break}return r&&a.observeArray(r),a.dep.notify(),o})});var At=Object.getOwnPropertyNames(mt),St=!0;function wt(t){St=t}var Tt=function(t){this.value=t,this.dep=new ht,this.vmCount=0,U(t,"__ob__",this),Array.isArray(t)?(J?t.push!==t.__proto__.push?kt(t,mt,At):Pt(t,mt):kt(t,mt,At),this.observeArray(t)):this.walk(t)};function Pt(t,e){t.__proto__=e}function kt(t,e,n){for(var i=0,r=n.length;i<r;i++){var o=n[i];U(t,o,e[o])}}function Ot(t,e){var n;if(l(t)&&!(t instanceof dt))return m(t,"__ob__")&&t.__ob__ instanceof Tt?n=t.__ob__:St&&!rt()&&(Array.isArray(t)||u(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Tt(t)),e&&n&&n.vmCount++,n}function Rt(t,e,n,i,r){var o=new ht,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,l=a&&a.set;s&&!l||2!==arguments.length||(n=t[e]);var c=!r&&Ot(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ht.SharedObject.target&&(o.depend(),c&&(c.dep.depend(),Array.isArray(e)&&$t(e))),e},set:function(e){var i=s?s.call(t):n;e===i||e!==e&&i!==i||s&&!l||(l?l.call(t,e):n=e,c=!r&&Ot(e),o.notify())}})}}function Dt(t,e,n){if(Array.isArray(t)&&p(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var i=t.__ob__;return t._isVue||i&&i.vmCount?n:i?(Rt(i.value,e,n),i.dep.notify(),n):(t[e]=n,n)}function Ct(t,e){if(Array.isArray(t)&&p(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||m(t,e)&&(delete t[e],n&&n.dep.notify())}}function $t(t){for(var e=void 0,n=0,i=t.length;n<i;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&$t(e)}Tt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Rt(t,e[n])},Tt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Ot(t[e])};var Lt=H.optionMergeStrategies;function Mt(t,e){if(!e)return t;for(var n,i,r,o=lt?Reflect.ownKeys(e):Object.keys(e),a=0;a<o.length;a++)n=o[a],"__ob__"!==n&&(i=t[n],r=e[n],m(t,n)?i!==r&&u(i)&&u(r)&&Mt(i,r):Dt(t,n,r));return t}function Et(t,e,n){return n?function(){var i="function"===typeof e?e.call(n,n):e,r="function"===typeof t?t.call(n,n):t;return i?Mt(i,r):r}:e?t?function(){return Mt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function It(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Ft(n):n}function Ft(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function jt(t,e,n,i){var r=Object.create(t||null);return e?C(r,e):r}Lt.data=function(t,e,n){return n?Et(t,e,n):e&&"function"!==typeof e?t:Et(t,e)},N.forEach(function(t){Lt[t]=It}),B.forEach(function(t){Lt[t+"s"]=jt}),Lt.watch=function(t,e,n,i){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var r={};for(var o in C(r,t),e){var a=r[o],s=e[o];a&&!Array.isArray(a)&&(a=[a]),r[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return r},Lt.props=Lt.methods=Lt.inject=Lt.computed=function(t,e,n,i){if(!t)return e;var r=Object.create(null);return C(r,t),e&&C(r,e),r},Lt.provide=Et;var Bt=function(t,e){return void 0===e?t:e};function Nt(t,e){var n=t.props;if(n){var i,r,o,a={};if(Array.isArray(n)){i=n.length;while(i--)r=n[i],"string"===typeof r&&(o=S(r),a[o]={type:null})}else if(u(n))for(var s in n)r=n[s],o=S(s),a[o]=u(r)?r:{type:r};else 0;t.props=a}}function Ht(t,e){var n=t.inject;if(n){var i=t.inject={};if(Array.isArray(n))for(var r=0;r<n.length;r++)i[n[r]]={from:n[r]};else if(u(n))for(var o in n){var a=n[o];i[o]=u(a)?C({from:o},a):{from:a}}else 0}}function zt(t){var e=t.directives;if(e)for(var n in e){var i=e[n];"function"===typeof i&&(e[n]={bind:i,update:i})}}function Wt(t,e,n){if("function"===typeof e&&(e=e.options),Nt(e,n),Ht(e,n),zt(e),!e._base&&(e.extends&&(t=Wt(t,e.extends,n)),e.mixins))for(var i=0,r=e.mixins.length;i<r;i++)t=Wt(t,e.mixins[i],n);var o,a={};for(o in t)s(o);for(o in e)m(t,o)||s(o);function s(i){var r=Lt[i]||Bt;a[i]=r(t[i],e[i],n,i)}return a}function Ut(t,e,n,i){if("string"===typeof n){var r=t[e];if(m(r,n))return r[n];var o=S(n);if(m(r,o))return r[o];var a=w(o);if(m(r,a))return r[a];var s=r[n]||r[o]||r[a];return s}}function Vt(t,e,n,i){var r=e[t],o=!m(n,t),a=n[t],s=qt(Boolean,r.type);if(s>-1)if(o&&!m(r,"default"))a=!1;else if(""===a||a===P(t)){var l=qt(String,r.type);(l<0||s<l)&&(a=!0)}if(void 0===a){a=Gt(i,r,t);var c=St;wt(!0),Ot(a),wt(c)}return a}function Gt(t,e,n){if(m(e,"default")){var i=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof i&&"Function"!==Zt(e.type)?i.call(t):i}}function Zt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Jt(t,e){return Zt(t)===Zt(e)}function qt(t,e){if(!Array.isArray(e))return Jt(e,t)?0:-1;for(var n=0,i=e.length;n<i;n++)if(Jt(e[n],t))return n;return-1}function Yt(t,e,n){pt();try{if(e){var i=e;while(i=i.$parent){var r=i.$options.errorCaptured;if(r)for(var o=0;o<r.length;o++)try{var a=!1===r[o].call(i,t,e,n);if(a)return}catch(er){Qt(er,i,"errorCaptured hook")}}}Qt(t,e,n)}finally{ft()}}function Xt(t,e,n,i,r){var o;try{o=n?t.apply(e,n):t.call(e),o&&!o._isVue&&f(o)&&!o._handled&&(o.catch(function(t){return Yt(t,i,r+" (Promise/async)")}),o._handled=!0)}catch(er){Yt(er,i,r)}return o}function Qt(t,e,n){if(H.errorHandler)try{return H.errorHandler.call(null,t,e,n)}catch(er){er!==t&&Kt(er,null,"config.errorHandler")}Kt(t,e,n)}function Kt(t,e,n){if(!q&&!Y||"undefined"===typeof console)throw t;console.error(t)}var te,ee=[],ne=!1;function ie(){ne=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&at(Promise)){var re=Promise.resolve();te=function(){re.then(ie),et&&setTimeout(L)}}else if(K||"undefined"===typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())te="undefined"!==typeof setImmediate&&at(setImmediate)?function(){setImmediate(ie)}:function(){setTimeout(ie,0)};else{var oe=1,ae=new MutationObserver(ie),se=document.createTextNode(String(oe));ae.observe(se,{characterData:!0}),te=function(){oe=(oe+1)%2,se.data=String(oe)}}function le(t,e){var n;if(ee.push(function(){if(t)try{t.call(e)}catch(er){Yt(er,e,"nextTick")}else n&&n(e)}),ne||(ne=!0,te()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var ce=new st;function ue(t){he(t,ce),ce.clear()}function he(t,e){var n,i,r=Array.isArray(t);if(!(!r&&!l(t)||Object.isFrozen(t)||t instanceof dt)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(r){n=t.length;while(n--)he(t[n],e)}else{i=Object.keys(t),n=i.length;while(n--)he(t[i[n]],e)}}}var pe=b(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var i="!"===t.charAt(0);return t=i?t.slice(1):t,{name:t,once:n,capture:i,passive:e}});function fe(t,e){function n(){var t=arguments,i=n.fns;if(!Array.isArray(i))return Xt(i,null,arguments,e,"v-on handler");for(var r=i.slice(),o=0;o<r.length;o++)Xt(r[o],null,t,e,"v-on handler")}return n.fns=t,n}function de(t,e,n,r,a,s){var l,c,u,h;for(l in t)c=t[l],u=e[l],h=pe(l),i(c)||(i(u)?(i(c.fns)&&(c=t[l]=fe(c,s)),o(h.once)&&(c=t[l]=a(h.name,c,h.capture)),n(h.name,c,h.capture,h.passive,h.params)):c!==u&&(u.fns=c,t[l]=u));for(l in e)i(t[l])&&(h=pe(l),r(h.name,e[l],h.capture))}function ge(t,e,n){var o=e.options.props;if(!i(o)){var a={},s=t.attrs,l=t.props;if(r(s)||r(l))for(var c in o){var u=P(c);ve(a,l,c,u,!0)||ve(a,s,c,u,!1)}return a}}function ve(t,e,n,i,o){if(r(e)){if(m(e,n))return t[n]=e[n],o||delete e[n],!0;if(m(e,i))return t[n]=e[i],o||delete e[i],!0}return!1}function ye(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function xe(t){return s(t)?[yt(t)]:Array.isArray(t)?me(t):void 0}function _e(t){return r(t)&&r(t.text)&&a(t.isComment)}function me(t,e){var n,a,l,c,u=[];for(n=0;n<t.length;n++)a=t[n],i(a)||"boolean"===typeof a||(l=u.length-1,c=u[l],Array.isArray(a)?a.length>0&&(a=me(a,(e||"")+"_"+n),_e(a[0])&&_e(c)&&(u[l]=yt(c.text+a[0].text),a.shift()),u.push.apply(u,a)):s(a)?_e(c)?u[l]=yt(c.text+a):""!==a&&u.push(yt(a)):_e(a)&&_e(c)?u[l]=yt(c.text+a.text):(o(t._isVList)&&r(a.tag)&&i(a.key)&&r(e)&&(a.key="__vlist"+e+"_"+n+"__"),u.push(a)));return u}function be(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Ae(t){var e=Se(t.$options.inject,t);e&&(wt(!1),Object.keys(e).forEach(function(n){Rt(t,n,e[n])}),wt(!0))}function Se(t,e){if(t){for(var n=Object.create(null),i=lt?Reflect.ownKeys(t):Object.keys(t),r=0;r<i.length;r++){var o=i[r];if("__ob__"!==o){var a=t[o].from,s=e;while(s){if(s._provided&&m(s._provided,a)){n[o]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[o]){var l=t[o].default;n[o]="function"===typeof l?l.call(e):l}else 0}}return n}}function we(t,e){if(!t||!t.length)return{};for(var n={},i=0,r=t.length;i<r;i++){var o=t[i],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==e&&o.fnContext!==e||!a||null==a.slot)o.asyncMeta&&o.asyncMeta.data&&"page"===o.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(o):(n.default||(n.default=[])).push(o);else{var s=a.slot,l=n[s]||(n[s]=[]);"template"===o.tag?l.push.apply(l,o.children||[]):l.push(o)}}for(var c in n)n[c].every(Te)&&delete n[c];return n}function Te(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Pe(t,e,i){var r,o=Object.keys(e).length>0,a=t?!!t.$stable:!o,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&i&&i!==n&&s===i.$key&&!o&&!i.$hasNormal)return i;for(var l in r={},t)t[l]&&"$"!==l[0]&&(r[l]=ke(e,l,t[l]))}else r={};for(var c in e)c in r||(r[c]=Oe(e,c));return t&&Object.isExtensible(t)&&(t._normalized=r),U(r,"$stable",a),U(r,"$key",s),U(r,"$hasNormal",o),r}function ke(t,e,n){var i=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:xe(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:i,enumerable:!0,configurable:!0}),i}function Oe(t,e){return function(){return t[e]}}function Re(t,e){var n,i,o,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),i=0,o=t.length;i<o;i++)n[i]=e(t[i],i);else if("number"===typeof t)for(n=new Array(t),i=0;i<t;i++)n[i]=e(i+1,i);else if(l(t))if(lt&&t[Symbol.iterator]){n=[];var c=t[Symbol.iterator](),u=c.next();while(!u.done)n.push(e(u.value,n.length)),u=c.next()}else for(a=Object.keys(t),n=new Array(a.length),i=0,o=a.length;i<o;i++)s=a[i],n[i]=e(t[s],s,i);return r(n)||(n=[]),n._isVList=!0,n}function De(t,e,n,i){var r,o=this.$scopedSlots[t];o?(n=n||{},i&&(n=C(C({},i),n)),r=o(n)||e):r=this.$slots[t]||e;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},r):r}function Ce(t){return Ut(this.$options,"filters",t,!0)||E}function $e(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Le(t,e,n,i,r){var o=H.keyCodes[e]||n;return r&&i&&!H.keyCodes[e]?$e(r,i):o?$e(o,t):i?P(i)!==e:void 0}function Me(t,e,n,i,r){if(n)if(l(n)){var o;Array.isArray(n)&&(n=$(n));var a=function(a){if("class"===a||"style"===a||y(a))o=t;else{var s=t.attrs&&t.attrs.type;o=i||H.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var l=S(a),c=P(a);if(!(l in o)&&!(c in o)&&(o[a]=n[a],r)){var u=t.on||(t.on={});u["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function Ee(t,e){var n=this._staticTrees||(this._staticTrees=[]),i=n[t];return i&&!e?i:(i=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Fe(i,"__static__"+t,!1),i)}function Ie(t,e,n){return Fe(t,"__once__"+e+(n?"_"+n:""),!0),t}function Fe(t,e,n){if(Array.isArray(t))for(var i=0;i<t.length;i++)t[i]&&"string"!==typeof t[i]&&je(t[i],e+"_"+i,n);else je(t,e,n)}function je(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Be(t,e){if(e)if(u(e)){var n=t.on=t.on?C({},t.on):{};for(var i in e){var r=n[i],o=e[i];n[i]=r?[].concat(r,o):o}}else;return t}function Ne(t,e,n,i){e=e||{$stable:!n};for(var r=0;r<t.length;r++){var o=t[r];Array.isArray(o)?Ne(o,e,n):o&&(o.proxy&&(o.fn.proxy=!0),e[o.key]=o.fn)}return i&&(e.$key=i),e}function He(t,e){for(var n=0;n<e.length;n+=2){var i=e[n];"string"===typeof i&&i&&(t[e[n]]=e[n+1])}return t}function ze(t,e){return"string"===typeof t?e+t:t}function We(t){t._o=Ie,t._n=g,t._s=d,t._l=Re,t._t=De,t._q=I,t._i=F,t._m=Ee,t._f=Ce,t._k=Le,t._b=Me,t._v=yt,t._e=vt,t._u=Ne,t._g=Be,t._d=He,t._p=ze}function Ue(t,e,i,r,a){var s,l=this,c=a.options;m(r,"_uid")?(s=Object.create(r),s._original=r):(s=r,r=r._original);var u=o(c._compiled),h=!u;this.data=t,this.props=e,this.children=i,this.parent=r,this.listeners=t.on||n,this.injections=Se(c.inject,r),this.slots=function(){return l.$slots||Pe(t.scopedSlots,l.$slots=we(i,r)),l.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Pe(t.scopedSlots,this.slots())}}),u&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=Pe(t.scopedSlots,this.$slots)),c._scopeId?this._c=function(t,e,n,i){var o=rn(s,t,e,n,i,h);return o&&!Array.isArray(o)&&(o.fnScopeId=c._scopeId,o.fnContext=r),o}:this._c=function(t,e,n,i){return rn(s,t,e,n,i,h)}}function Ve(t,e,i,o,a){var s=t.options,l={},c=s.props;if(r(c))for(var u in c)l[u]=Vt(u,c,e||n);else r(i.attrs)&&Ze(l,i.attrs),r(i.props)&&Ze(l,i.props);var h=new Ue(i,l,a,o,t),p=s.render.call(null,h._c,h);if(p instanceof dt)return Ge(p,i,h.parent,s,h);if(Array.isArray(p)){for(var f=xe(p)||[],d=new Array(f.length),g=0;g<f.length;g++)d[g]=Ge(f[g],i,h.parent,s,h);return d}}function Ge(t,e,n,i,r){var o=xt(t);return o.fnContext=n,o.fnOptions=i,e.slot&&((o.data||(o.data={})).slot=e.slot),o}function Ze(t,e){for(var n in e)t[S(n)]=e[n]}We(Ue.prototype);var Je={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Je.prepatch(n,n)}else{var i=t.componentInstance=Xe(t,Sn);i.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,i=e.componentInstance=t.componentInstance;kn(i,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Cn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Wn(n):Rn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Dn(e,!0):e.$destroy())}},qe=Object.keys(Je);function Ye(t,e,n,a,s){if(!i(t)){var c=n.$options._base;if(l(t)&&(t=c.extend(t)),"function"===typeof t){var u;if(i(t.cid)&&(u=t,t=dn(u,c),void 0===t))return fn(u,e,n,a,s);e=e||{},pi(t),r(e.model)&&tn(t.options,e);var h=ge(e,t,s);if(o(t.options.functional))return Ve(t,h,e,n,a);var p=e.on;if(e.on=e.nativeOn,o(t.options.abstract)){var f=e.slot;e={},f&&(e.slot=f)}Qe(e);var d=t.options.name||s,g=new dt("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:h,listeners:p,tag:s,children:a},u);return g}}}function Xe(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},i=t.data.inlineTemplate;return r(i)&&(n.render=i.render,n.staticRenderFns=i.staticRenderFns),new t.componentOptions.Ctor(n)}function Qe(t){for(var e=t.hook||(t.hook={}),n=0;n<qe.length;n++){var i=qe[n],r=e[i],o=Je[i];r===o||r&&r._merged||(e[i]=r?Ke(o,r):o)}}function Ke(t,e){var n=function(n,i){t(n,i),e(n,i)};return n._merged=!0,n}function tn(t,e){var n=t.model&&t.model.prop||"value",i=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var o=e.on||(e.on={}),a=o[i],s=e.model.callback;r(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(o[i]=[s].concat(a)):o[i]=s}var en=1,nn=2;function rn(t,e,n,i,r,a){return(Array.isArray(n)||s(n))&&(r=i,i=n,n=void 0),o(a)&&(r=nn),on(t,e,n,i,r)}function on(t,e,n,i,o){if(r(n)&&r(n.__ob__))return vt();if(r(n)&&r(n.is)&&(e=n.is),!e)return vt();var a,s,l;(Array.isArray(i)&&"function"===typeof i[0]&&(n=n||{},n.scopedSlots={default:i[0]},i.length=0),o===nn?i=xe(i):o===en&&(i=ye(i)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||H.getTagNamespace(e),a=H.isReservedTag(e)?new dt(H.parsePlatformTagName(e),n,i,void 0,void 0,t):n&&n.pre||!r(l=Ut(t.$options,"components",e))?new dt(e,n,i,void 0,void 0,t):Ye(l,n,t,i,e)):a=Ye(e,n,t,i);return Array.isArray(a)?a:r(a)?(r(s)&&an(a,s),r(n)&&sn(n),a):vt()}function an(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),r(t.children))for(var a=0,s=t.children.length;a<s;a++){var l=t.children[a];r(l.tag)&&(i(l.ns)||o(n)&&"svg"!==l.tag)&&an(l,e,n)}}function sn(t){l(t.style)&&ue(t.style),l(t.class)&&ue(t.class)}function ln(t){t._vnode=null,t._staticTrees=null;var e=t.$options,i=t.$vnode=e._parentVnode,r=i&&i.context;t.$slots=we(e._renderChildren,r),t.$scopedSlots=n,t._c=function(e,n,i,r){return rn(t,e,n,i,r,!1)},t.$createElement=function(e,n,i,r){return rn(t,e,n,i,r,!0)};var o=i&&i.data;Rt(t,"$attrs",o&&o.attrs||n,null,!0),Rt(t,"$listeners",e._parentListeners||n,null,!0)}var cn,un=null;function hn(t){We(t.prototype),t.prototype.$nextTick=function(t){return le(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,i=n.render,r=n._parentVnode;r&&(e.$scopedSlots=Pe(r.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=r;try{un=e,t=i.call(e._renderProxy,e.$createElement)}catch(er){Yt(er,e,"render"),t=e._vnode}finally{un=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof dt||(t=vt()),t.parent=r,t}}function pn(t,e){return(t.__esModule||lt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),l(t)?e.extend(t):t}function fn(t,e,n,i,r){var o=vt();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:i,tag:r},o}function dn(t,e){if(o(t.error)&&r(t.errorComp))return t.errorComp;if(r(t.resolved))return t.resolved;var n=un;if(n&&r(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),o(t.loading)&&r(t.loadingComp))return t.loadingComp;if(n&&!r(t.owners)){var a=t.owners=[n],s=!0,c=null,u=null;n.$on("hook:destroyed",function(){return x(a,n)});var h=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==c&&(clearTimeout(c),c=null),null!==u&&(clearTimeout(u),u=null))},p=j(function(n){t.resolved=pn(n,e),s?a.length=0:h(!0)}),d=j(function(e){r(t.errorComp)&&(t.error=!0,h(!0))}),g=t(p,d);return l(g)&&(f(g)?i(t.resolved)&&g.then(p,d):f(g.component)&&(g.component.then(p,d),r(g.error)&&(t.errorComp=pn(g.error,e)),r(g.loading)&&(t.loadingComp=pn(g.loading,e),0===g.delay?t.loading=!0:c=setTimeout(function(){c=null,i(t.resolved)&&i(t.error)&&(t.loading=!0,h(!1))},g.delay||200)),r(g.timeout)&&(u=setTimeout(function(){u=null,i(t.resolved)&&d(null)},g.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function gn(t){return t.isComment&&t.asyncFactory}function vn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(r(n)&&(r(n.componentOptions)||gn(n)))return n}}function yn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&bn(t,e)}function xn(t,e){cn.$on(t,e)}function _n(t,e){cn.$off(t,e)}function mn(t,e){var n=cn;return function i(){var r=e.apply(null,arguments);null!==r&&n.$off(t,i)}}function bn(t,e,n){cn=t,de(e,n||{},xn,_n,mn,t),cn=void 0}function An(t){var e=/^hook:/;t.prototype.$on=function(t,n){var i=this;if(Array.isArray(t))for(var r=0,o=t.length;r<o;r++)i.$on(t[r],n);else(i._events[t]||(i._events[t]=[])).push(n),e.test(t)&&(i._hasHookEvent=!0);return i},t.prototype.$once=function(t,e){var n=this;function i(){n.$off(t,i),e.apply(n,arguments)}return i.fn=e,n.$on(t,i),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var i=0,r=t.length;i<r;i++)n.$off(t[i],e);return n}var o,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var s=a.length;while(s--)if(o=a[s],o===e||o.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?D(n):n;for(var i=D(arguments,1),r='event handler for "'+t+'"',o=0,a=n.length;o<a;o++)Xt(n[o],e,i,e,r)}return e}}var Sn=null;function wn(t){var e=Sn;return Sn=t,function(){Sn=e}}function Tn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Pn(t){t.prototype._update=function(t,e){var n=this,i=n.$el,r=n._vnode,o=wn(n);n._vnode=t,n.$el=r?n.__patch__(r,t):n.__patch__(n.$el,t,e,!1),o(),i&&(i.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Cn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||x(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Cn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function kn(t,e,i,r,o){var a=r.data.scopedSlots,s=t.$scopedSlots,l=!!(a&&!a.$stable||s!==n&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key),c=!!(o||t.$options._renderChildren||l);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=o,t.$attrs=r.data.attrs||n,t.$listeners=i||n,e&&t.$options.props){wt(!1);for(var u=t._props,h=t.$options._propKeys||[],p=0;p<h.length;p++){var f=h[p],d=t.$options.props;u[f]=Vt(f,d,e,t)}wt(!0),t.$options.propsData=e}i=i||n;var g=t.$options._parentListeners;t.$options._parentListeners=i,bn(t,i,g),c&&(t.$slots=we(o,r.context),t.$forceUpdate())}function On(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Rn(t,e){if(e){if(t._directInactive=!1,On(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Rn(t.$children[n]);Cn(t,"activated")}}function Dn(t,e){if((!e||(t._directInactive=!0,!On(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Dn(t.$children[n]);Cn(t,"deactivated")}}function Cn(t,e){pt();var n=t.$options[e],i=e+" hook";if(n)for(var r=0,o=n.length;r<o;r++)Xt(n[r],t,null,t,i);t._hasHookEvent&&t.$emit("hook:"+e),ft()}var $n=[],Ln=[],Mn={},En=!1,In=!1,Fn=0;function jn(){Fn=$n.length=Ln.length=0,Mn={},En=In=!1}var Bn=Date.now;if(q&&!K){var Nn=window.performance;Nn&&"function"===typeof Nn.now&&Bn()>document.createEvent("Event").timeStamp&&(Bn=function(){return Nn.now()})}function Hn(){var t,e;for(Bn(),In=!0,$n.sort(function(t,e){return t.id-e.id}),Fn=0;Fn<$n.length;Fn++)t=$n[Fn],t.before&&t.before(),e=t.id,Mn[e]=null,t.run();var n=Ln.slice(),i=$n.slice();jn(),Un(n),zn(i),ot&&H.devtools&&ot.emit("flush")}function zn(t){var e=t.length;while(e--){var n=t[e],i=n.vm;i._watcher===n&&i._isMounted&&!i._isDestroyed&&Cn(i,"updated")}}function Wn(t){t._inactive=!1,Ln.push(t)}function Un(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Rn(t[e],!0)}function Vn(t){var e=t.id;if(null==Mn[e]){if(Mn[e]=!0,In){var n=$n.length-1;while(n>Fn&&$n[n].id>t.id)n--;$n.splice(n+1,0,t)}else $n.push(t);En||(En=!0,le(Hn))}}var Gn=0,Zn=function(t,e,n,i,r){this.vm=t,r&&(t._watcher=this),t._watchers.push(this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Gn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=G(e),this.getter||(this.getter=L)),this.value=this.lazy?void 0:this.get()};Zn.prototype.get=function(){var t;pt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(er){if(!this.user)throw er;Yt(er,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ue(t),ft(),this.cleanupDeps()}return t},Zn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Zn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Zn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Vn(this)},Zn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||l(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(er){Yt(er,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Zn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Zn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Zn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||x(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Jn={enumerable:!0,configurable:!0,get:L,set:L};function qn(t,e,n){Jn.get=function(){return this[e][n]},Jn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Jn)}function Yn(t){t._watchers=[];var e=t.$options;e.props&&Xn(t,e.props),e.methods&&oi(t,e.methods),e.data?Qn(t):Ot(t._data={},!0),e.computed&&ei(t,e.computed),e.watch&&e.watch!==nt&&ai(t,e.watch)}function Xn(t,e){var n=t.$options.propsData||{},i=t._props={},r=t.$options._propKeys=[],o=!t.$parent;o||wt(!1);var a=function(o){r.push(o);var a=Vt(o,e,n,t);Rt(i,o,a),o in t||qn(t,"_props",o)};for(var s in e)a(s);wt(!0)}function Qn(t){var e=t.$options.data;e=t._data="function"===typeof e?Kn(e,t):e||{},u(e)||(e={});var n=Object.keys(e),i=t.$options.props,r=(t.$options.methods,n.length);while(r--){var o=n[r];0,i&&m(i,o)||W(o)||qn(t,"_data",o)}Ot(e,!0)}function Kn(t,e){pt();try{return t.call(e,e)}catch(er){return Yt(er,e,"data()"),{}}finally{ft()}}var ti={lazy:!0};function ei(t,e){var n=t._computedWatchers=Object.create(null),i=rt();for(var r in e){var o=e[r],a="function"===typeof o?o:o.get;0,i||(n[r]=new Zn(t,a||L,L,ti)),r in t||ni(t,r,o)}}function ni(t,e,n){var i=!rt();"function"===typeof n?(Jn.get=i?ii(e):ri(n),Jn.set=L):(Jn.get=n.get?i&&!1!==n.cache?ii(e):ri(n.get):L,Jn.set=n.set||L),Object.defineProperty(t,e,Jn)}function ii(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ht.SharedObject.target&&e.depend(),e.value}}function ri(t){return function(){return t.call(this,this)}}function oi(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?L:R(e[n],t)}function ai(t,e){for(var n in e){var i=e[n];if(Array.isArray(i))for(var r=0;r<i.length;r++)si(t,n,i[r]);else si(t,n,i)}}function si(t,e,n,i){return u(n)&&(i=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,i)}function li(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Dt,t.prototype.$delete=Ct,t.prototype.$watch=function(t,e,n){var i=this;if(u(e))return si(i,t,e,n);n=n||{},n.user=!0;var r=new Zn(i,t,e,n);if(n.immediate)try{e.call(i,r.value)}catch(o){Yt(o,i,'callback for immediate watcher "'+r.expression+'"')}return function(){r.teardown()}}}var ci=0;function ui(t){t.prototype._init=function(t){var e=this;e._uid=ci++,e._isVue=!0,t&&t._isComponent?hi(e,t):e.$options=Wt(pi(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Tn(e),yn(e),ln(e),Cn(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&Ae(e),Yn(e),"mp-toutiao"!==e.mpHost&&be(e),"mp-toutiao"!==e.mpHost&&Cn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function hi(t,e){var n=t.$options=Object.create(t.constructor.options),i=e._parentVnode;n.parent=e.parent,n._parentVnode=i;var r=i.componentOptions;n.propsData=r.propsData,n._parentListeners=r.listeners,n._renderChildren=r.children,n._componentTag=r.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function pi(t){var e=t.options;if(t.super){var n=pi(t.super),i=t.superOptions;if(n!==i){t.superOptions=n;var r=fi(t);r&&C(t.extendOptions,r),e=t.options=Wt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function fi(t){var e,n=t.options,i=t.sealedOptions;for(var r in n)n[r]!==i[r]&&(e||(e={}),e[r]=n[r]);return e}function di(t){this._init(t)}function gi(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=D(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function vi(t){t.mixin=function(t){return this.options=Wt(this.options,t),this}}function yi(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,i=n.cid,r=t._Ctor||(t._Ctor={});if(r[i])return r[i];var o=t.name||n.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Wt(n.options,t),a["super"]=n,a.options.props&&xi(a),a.options.computed&&_i(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,B.forEach(function(t){a[t]=n[t]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=C({},a.options),r[i]=a,a}}function xi(t){var e=t.options.props;for(var n in e)qn(t.prototype,"_props",n)}function _i(t){var e=t.options.computed;for(var n in e)ni(t.prototype,n,e[n])}function mi(t){B.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&u(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function bi(t){return t&&(t.Ctor.options.name||t.tag)}function Ai(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!h(t)&&t.test(e)}function Si(t,e){var n=t.cache,i=t.keys,r=t._vnode;for(var o in n){var a=n[o];if(a){var s=bi(a.componentOptions);s&&!e(s)&&wi(n,o,i,r)}}}function wi(t,e,n,i){var r=t[e];!r||i&&r.tag===i.tag||r.componentInstance.$destroy(),t[e]=null,x(n,e)}ui(di),li(di),An(di),Pn(di),hn(di);var Ti=[String,RegExp,Array],Pi={name:"keep-alive",abstract:!0,props:{include:Ti,exclude:Ti,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)wi(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){Si(t,function(t){return Ai(e,t)})}),this.$watch("exclude",function(e){Si(t,function(t){return!Ai(e,t)})})},render:function(){var t=this.$slots.default,e=vn(t),n=e&&e.componentOptions;if(n){var i=bi(n),r=this,o=r.include,a=r.exclude;if(o&&(!i||!Ai(o,i))||a&&i&&Ai(a,i))return e;var s=this,l=s.cache,c=s.keys,u=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;l[u]?(e.componentInstance=l[u].componentInstance,x(c,u),c.push(u)):(l[u]=e,c.push(u),this.max&&c.length>parseInt(this.max)&&wi(l,c[0],c,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},ki={KeepAlive:Pi};function Oi(t){var e={get:function(){return H}};Object.defineProperty(t,"config",e),t.util={warn:ct,extend:C,mergeOptions:Wt,defineReactive:Rt},t.set=Dt,t.delete=Ct,t.nextTick=le,t.observable=function(t){return Ot(t),t},t.options=Object.create(null),B.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,C(t.options.components,ki),gi(t),vi(t),yi(t),mi(t)}Oi(di),Object.defineProperty(di.prototype,"$isServer",{get:rt}),Object.defineProperty(di.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(di,"FunctionalRenderContext",{value:Ue}),di.version="2.6.10";var Ri="[object Array]",Di="[object Object]";function Ci(t,e){var n={};return $i(t,e),Li(t,e,"",n),n}function $i(t,e){if(t!==e){var n=Ei(t),i=Ei(e);if(n==Di&&i==Di){if(Object.keys(t).length>=Object.keys(e).length)for(var r in e){var o=t[r];void 0===o?t[r]=null:$i(o,e[r])}}else n==Ri&&i==Ri&&t.length>=e.length&&e.forEach(function(e,n){$i(t[n],e)})}}function Li(t,e,n,i){if(t!==e){var r=Ei(t),o=Ei(e);if(r==Di)if(o!=Di||Object.keys(t).length<Object.keys(e).length)Mi(i,n,t);else{var a=function(r){var o=t[r],a=e[r],s=Ei(o),l=Ei(a);if(s!=Ri&&s!=Di)o!=e[r]&&Mi(i,(""==n?"":n+".")+r,o);else if(s==Ri)l!=Ri?Mi(i,(""==n?"":n+".")+r,o):o.length<a.length?Mi(i,(""==n?"":n+".")+r,o):o.forEach(function(t,e){Li(t,a[e],(""==n?"":n+".")+r+"["+e+"]",i)});else if(s==Di)if(l!=Di||Object.keys(o).length<Object.keys(a).length)Mi(i,(""==n?"":n+".")+r,o);else for(var c in o)Li(o[c],a[c],(""==n?"":n+".")+r+"."+c,i)};for(var s in t)a(s)}else r==Ri?o!=Ri?Mi(i,n,t):t.length<e.length?Mi(i,n,t):t.forEach(function(t,r){Li(t,e[r],n+"["+r+"]",i)}):Mi(i,n,t)}}function Mi(t,e,n){t[e]=n}function Ei(t){return Object.prototype.toString.call(t)}function Ii(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var i=0;i<n.length;i++)n[i]()}}function Fi(t){return $n.find(function(e){return t._watcher===e})}function ji(t,e){if(!t.__next_tick_pending&&!Fi(t)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return le(e,t)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var i=t.$scope;console.log("["+ +new Date+"]["+(i.is||i.route)+"]["+t._uid+"]:nextMPTick")}var r;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(er){Yt(er,t,"nextTick")}else r&&r(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){r=t})}function Bi(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var Ni=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var i=this.$scope,r=Object.create(null);try{r=Bi(this)}catch(s){console.error(s)}r.__webviewId__=i.data.__webviewId__;var o=Object.create(null);Object.keys(r).forEach(function(t){o[t]=i.data[t]});var a=Ci(r,o);Object.keys(a).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(i.is||i.route)+"]["+this._uid+"]差量更新",JSON.stringify(a)),this.__next_tick_pending=!0,i.setData(a,function(){n.__next_tick_pending=!1,Ii(n)})):Ii(this)}};function Hi(){}function zi(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Hi),t.$options.render||(t.$options.render=Hi),"mp-toutiao"!==t.mpHost&&Cn(t,"beforeMount");var i=function(){t._update(t._render(),n)};return new Zn(t,i,L,{before:function(){t._isMounted&&!t._isDestroyed&&Cn(t,"beforeUpdate")}},!0),n=!1,t}function Wi(t,e){return r(t)||r(e)?Ui(t,Vi(e)):""}function Ui(t,e){return t?e?t+" "+e:t:e||""}function Vi(t){return Array.isArray(t)?Gi(t):l(t)?Zi(t):"string"===typeof t?t:""}function Gi(t){for(var e,n="",i=0,o=t.length;i<o;i++)r(e=Vi(t[i]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Zi(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Ji=b(function(t){var e={},n=/;(?![^(]*\))/g,i=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(i);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function qi(t){return Array.isArray(t)?$(t):"string"===typeof t?Ji(t):t}var Yi=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Xi(t,e){var n=e.split("."),i=n[0];return 0===i.indexOf("__$n")&&(i=parseInt(i.replace("__$n",""))),1===n.length?t[i]:Xi(t[i],n.slice(1).join("."))}function Qi(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:D(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return ji(this,t)},Yi.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=be,t.prototype.__init_injections=Ae,t.prototype.__call_hook=function(t,e){var n=this;pt();var i,r=n.$options[t],o=t+" hook";if(r)for(var a=0,s=r.length;a<s;a++)i=Xt(r[a],n,e?[e]:null,n,o);return n._hasHookEvent&&n.$emit("hook:"+t),ft(),i},t.prototype.__set_model=function(t,e,n,i){Array.isArray(i)&&(-1!==i.indexOf("trim")&&(n=n.trim()),-1!==i.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return u(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Xi(e||this,t)},t.prototype.__get_class=function(t,e){return Wi(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=qi(t),i=e?C(e,n):n;return Object.keys(i).map(function(t){return P(t)+":"+i[t]}).join(";")},t.prototype.__map=function(t,e){var n,i,r,o,a;if(Array.isArray(t)){for(n=new Array(t.length),i=0,r=t.length;i<r;i++)n[i]=e(t[i],i);return n}if(l(t)){for(o=Object.keys(t),n=Object.create(null),i=0,r=o.length;i<r;i++)a=o[i],n[a]=e(t[a],a,i);return n}return[]}}var Ki=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function tr(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==Ki.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,i=n.created;Ki.forEach(function(t){n[t]=i}),t.prototype.__lifecycle_hooks__=Ki}di.prototype.__patch__=Ni,di.prototype.$mount=function(t,e){return zi(this,t,e)},tr(di),Qi(di),e["default"]=di}.call(this,n("c8ba"))},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=de,e.createComponent=we,e.createPage=Se,e.default=void 0;var i=r(n("66fd"));function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return l(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done);i=!0)if(n.push(a.value),e&&n.length===e)break}catch(l){r=!0,o=l}finally{try{i||null==s["return"]||s["return"]()}finally{if(r)throw o}}return n}function l(t){if(Array.isArray(t))return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){return f(t)||p(t)||h()}function h(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function f(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var d=Object.prototype.toString,g=Object.prototype.hasOwnProperty;function v(t){return"function"===typeof t}function y(t){return"string"===typeof t}function x(t){return"[object Object]"===d.call(t)}function _(t,e){return g.call(t,e)}function m(){}function b(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var A=/-(\w)/g,S=b(function(t){return t.replace(A,function(t,e){return e?e.toUpperCase():""})}),w=["invoke","success","fail","complete","returnValue"],T={},P={};function k(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?O(n):n}function O(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function R(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function D(t,e){Object.keys(e).forEach(function(n){-1!==w.indexOf(n)&&v(e[n])&&(t[n]=k(t[n],e[n]))})}function C(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==w.indexOf(n)&&v(e[n])&&R(t[n],e[n])})}function $(t,e){"string"===typeof t&&x(e)?D(P[t]||(P[t]={}),e):x(t)&&D(T,t)}function L(t,e){"string"===typeof t?x(e)?C(P[t],e):delete P[t]:x(t)&&C(T,t)}function M(t){return function(e){return t(e)||e}}function E(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function I(t,e){for(var n=!1,i=0;i<t.length;i++){var r=t[i];if(n)n=Promise.then(M(r));else{var o=r(e);if(E(o)&&(n=Promise.resolve(o)),!1===o)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function F(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var i=e[n];e[n]=function(e){I(t[n],e).then(function(t){return v(i)&&i(t)||t})}}}),e}function j(t,e){var n=[];Array.isArray(T.returnValue)&&n.push.apply(n,u(T.returnValue));var i=P[t];return i&&Array.isArray(i.returnValue)&&n.push.apply(n,u(i.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function B(t){var e=Object.create(null);Object.keys(T).forEach(function(t){"returnValue"!==t&&(e[t]=T[t].slice())});var n=P[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function N(t,e,n){for(var i=arguments.length,r=new Array(i>3?i-3:0),o=3;o<i;o++)r[o-3]=arguments[o];var a=B(t);if(a&&Object.keys(a).length){if(Array.isArray(a.invoke)){var s=I(a.invoke,n);return s.then(function(t){return e.apply(void 0,[F(a,t)].concat(r))})}return e.apply(void 0,[F(a,n)].concat(r))}return e.apply(void 0,[n].concat(r))}var H={returnValue:function(t){return E(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},z=/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,W=/^create|Manager$/,U=/^on/;function V(t){return W.test(t)}function G(t){return z.test(t)}function Z(t){return U.test(t)&&"onPush"!==t}function J(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function q(t){return!(V(t)||G(t)||Z(t))}function Y(t,e){return q(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];return v(n.success)||v(n.fail)||v(n.complete)?j(t,N.apply(void 0,[t,e,n].concat(r))):j(t,J(new Promise(function(i,o){N.apply(void 0,[t,e,Object.assign({},n,{success:i,fail:o})].concat(r)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var X=1e-4,Q=750,K=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,i=t.windowWidth;tt=i,et=n,K="ios"===e}function it(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/Q*(e||tt);return n<0&&(n=-n),n=Math.floor(n+X),0===n?1!==et&&K?.5:1:t<0?-n:n}var rt={promiseInterceptor:H},ot=Object.freeze({upx2px:it,interceptors:rt,addInterceptor:$,removeInterceptor:L}),at={},st=[],lt=[],ct=["success","fail","cancel","complete"];function ut(t,e,n){return function(i){return e(pt(t,i,n))}}function ht(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(x(e)){var o=!0===r?e:{};for(var a in v(n)&&(n=n(e,o)||{}),e)if(_(n,a)){var s=n[a];v(s)&&(s=s(e[a],e,o)),s?y(s)?o[s]=e[a]:x(s)&&(o[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==ct.indexOf(a)?o[a]=ut(t,e[a],i):r||(o[a]=e[a]);return o}return v(e)&&(e=ut(t,e,i)),e}function pt(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return v(at.returnValue)&&(e=at.returnValue(t,e)),ht(t,e,n,{},i)}function ft(t,e){if(_(at,t)){var n=at[t];return n?function(e,i){var r=n;v(n)&&(r=n(e)),e=ht(t,e,r.args,r.returnValue);var o=[e];"undefined"!==typeof i&&o.push(i);var a=wx[r.name||t].apply(wx,o);return G(t)?pt(t,a,r.returnValue,V(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var dt=Object.create(null),gt=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function vt(t){return function(e){var n=e.fail,i=e.complete,r={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};v(n)&&n(r),v(i)&&i(r)}}gt.forEach(function(t){dt[t]=vt(t)});var yt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new i.default),t};var t}();function xt(t,e,n){return t[e].apply(t,n)}function _t(){return xt(yt(),"$on",Array.prototype.slice.call(arguments))}function mt(){return xt(yt(),"$off",Array.prototype.slice.call(arguments))}function bt(){return xt(yt(),"$once",Array.prototype.slice.call(arguments))}function At(){return xt(yt(),"$emit",Array.prototype.slice.call(arguments))}var St=Object.freeze({$on:_t,$off:mt,$once:bt,$emit:At});function wt(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}function Tt(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,i="0"===t.__uniapp_mask_id?{setStyle:function(t){var e=t.mask;wt("uni-tabview").setMask({color:e})}}:plus.webview.getWebviewById(t.__uniapp_mask_id),r=t.show,o=t.hide,a=t.close,s=function(){i.setStyle({mask:n})},l=function(){i.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return r.apply(t,n)},t.hide=function(){l();for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return o.apply(t,n)},t.close=function(){l(),e=[];for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return a.apply(t,i)}}}function Pt(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&Tt(e),e}var kt=Object.freeze({getSubNVueById:Pt,requireNativePlugin:wt}),Ot=Page,Rt=Component,Dt=/:/g,Ct=b(function(t){return S(t.replace(Dt,"-"))});function $t(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];return e.apply(t,[Ct(n)].concat(r))}}}function Lt(t,e){var n=e[t];e[t]=n?function(){$t(this);for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return n.apply(this,e)}:function(){$t(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Lt("onLoad",t),Ot(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Lt("created",t),Rt(t)};var Mt=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Et(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){_(n,e)&&(t[e]=n[e])})}function It(t,e){if(!e)return!0;if(i.default.options&&Array.isArray(i.default.options[t]))return!0;if(e=e.default||e,v(e))return!!v(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(v(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return It(t,e)}):void 0}function Ft(t,e,n){e.forEach(function(e){It(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function jt(t,e){var n;return e=e.default||e,v(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function Bt(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function Nt(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function Ht(t,e){var n=t.data||{},i=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(r){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(r){}return x(n)||(n={}),Object.keys(i).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||_(n,t)||(n[t]=i[t])}),n}var zt=[String,Number,Boolean,Object,Array,null];function Wt(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function Ut(t,e){var n=t["behaviors"],i=t["extends"],r=t["mixins"],o=t["props"];o||(t["props"]=o=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(o)?(o.push("name"),o.push("value")):(o["name"]={type:String,default:""},o["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),x(i)&&i.props&&a.push(e({properties:Gt(i.props,!0)})),Array.isArray(r)&&r.forEach(function(t){x(t)&&t.props&&a.push(e({properties:Gt(t.props,!0)}))}),a}function Vt(t,e,n,i){return Array.isArray(e)&&1===e.length?e[0]:e}function Gt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:Wt(t)}}):x(t)&&Object.keys(t).forEach(function(e){var i=t[e];if(x(i)){var r=i["default"];v(r)&&(r=r()),i.type=Vt(e,i.type),n[e]={type:-1!==zt.indexOf(i.type)?i.type:null,value:r,observer:Wt(e)}}else{var o=Vt(e,i);n[e]={type:-1!==zt.indexOf(o)?o:null,observer:Wt(e)}}}),n}function Zt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=m,t.preventDefault=m,t.target=t.target||{},_(t,"detail")||(t.detail={}),x(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Jt(t,e){var n=t;return e.forEach(function(e){var i=e[0],r=e[2];if(i||"undefined"!==typeof r){var o=e[1],a=e[3],s=i?t.__get_value(i,n):n;Number.isInteger(s)?n=r:o?Array.isArray(s)?n=s.find(function(e){return t.__get_value(o,e)===r}):x(s)?n=Object.keys(s).find(function(e){return t.__get_value(o,s[e])===r}):console.error("v-for 暂不支持循环数据：",s):n=s[r],a&&(n=t.__get_value(a,n))}}),n}function qt(t,e,n){var i={};return Array.isArray(e)&&e.length&&e.forEach(function(e,r){"string"===typeof e?e?"$event"===e?i["$"+r]=n:0===e.indexOf("$event.")?i["$"+r]=t.__get_value(e.replace("$event.",""),n):i["$"+r]=t.__get_value(e):i["$"+r]=t:i["$"+r]=Jt(t,e)}),i}function Yt(t){for(var e={},n=1;n<t.length;n++){var i=t[n];e[i[0]]=i[1]}return e}function Xt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,a=!1;if(r&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=qt(t,i,e),l=[];return n.forEach(function(t){"$event"===t?"__set_model"!==o||r?r&&!a?l.push(e.detail.__args__[0]):l.push(e):l.push(e.target.value):Array.isArray(t)&&"o"===t[0]?l.push(Yt(t)):"string"===typeof t&&_(s,t)?l.push(s[t]):l.push(t)}),l}var Qt="~",Kt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=Zt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var i=n.eventOpts||n["event-opts"];if(!i)return console.warn("事件信息不存在");var r=t.type,o=[];return i.forEach(function(n){var i=n[0],a=n[1],s=i.charAt(0)===Kt;i=s?i.slice(1):i;var l=i.charAt(0)===Qt;i=l?i.slice(1):i,a&&te(r,i)&&a.forEach(function(n){var i=n[0];if(i){var r=e.$vm;r.$options.generic&&r.$parent&&r.$parent.$parent&&(r=r.$parent.$parent);var a=r[i];if(!v(a))throw new Error(" _vm.".concat(i," is not a function"));if(l){if(a.once)return;a.once=!0}o.push(a.apply(r,Xt(e.$vm,t,n[1],n[2],s,i)))}})}),"input"===r&&1===o.length&&"undefined"!==typeof o[0]?o[0]:void 0}var ne=["onShow","onHide","onError","onPageNotFound"];function ie(t,e){var n=e.mocks,r=e.initRefs;t.$options.store&&(i.default.prototype.$store=t.$options.store),i.default.prototype.mpHost="app-plus",i.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=c({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(r(this),Et(this,n)))}});var o={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};return o.globalData=t.$options.globalData||{},Ft(o,ne),o}var re=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function oe(t,e){var n=t.$children,i=n.find(function(t){return t.$scope._$vueId===e});if(i)return i;for(var r=n.length-1;r>=0;r--)if(i=oe(n[r],e),i)return i}function ae(t){return Behavior(t)}function se(){return!!this.route}function le(t){this.triggerEvent("__l",t)}function ce(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var i=e.selectAllComponents(".vue-ref-in-for");return i.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function ue(t){var e,n=t.detail||t.value,i=n.vuePid,r=n.vueOptions;i&&(e=oe(this.$vm,i)),e||(e=this.$vm),r.parent=e}function he(t){return ie(t,{mocks:re,initRefs:ce})}var pe=["onUniNViewMessage"];function fe(t){var e=he(t);return Ft(e,pe),e}function de(t){return App(fe(t)),t}function ge(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,r=e.initRelation,a=jt(i.default,t),s=o(a,2),l=s[0],c=s[1],u={multipleSlots:!0,addGlobalClass:!0},h={options:u,data:Ht(c,i.default.prototype),behaviors:Ut(c,ae),properties:Gt(c.props,!1,c.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};Nt(t.vueId,this),r.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new l(e),Bt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:ue,__e:ee}};return Array.isArray(c.wxsCallMethods)&&c.wxsCallMethods.forEach(function(t){h.methods[t]=function(e){return this.$vm[t](e)}}),n?h:[h,l]}function ve(t){return ge(t,{isPage:se,initRelation:le})}function ye(t){var e=ve(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var xe=["onShow","onHide","onUnload"];function _e(t,e){e.isPage,e.initRelation;var n=ye(t);return Ft(n.methods,xe,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function me(t){return _e(t,{isPage:se,initRelation:le})}xe.push.apply(xe,Mt);var be=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function Ae(t){var e=me(t);return Ft(e.methods,be),e}function Se(t){return Component(Ae(t))}function we(t){return Component(ye(t))}st.forEach(function(t){at[t]=!1}),lt.forEach(function(t){var e=at[t]&&at[t].name?at[t].name:t;wx.canIUse(e)||(at[t]=!1)});var Te={};Object.keys(ot).forEach(function(t){Te[t]=ot[t]}),Object.keys(St).forEach(function(t){Te[t]=St[t]}),Object.keys(kt).forEach(function(t){Te[t]=Y(t,kt[t])}),Object.keys(wx).forEach(function(t){(_(wx,t)||_(at,t))&&(Te[t]=Y(t,ft(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=Te,t.UniEmitter=St),wx.createApp=de,wx.createPage=Se,wx.createComponent=we;var Pe=Te,ke=Pe;e.default=ke}).call(this,n("c8ba"))},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-24220191115004",_inBundle:!1,_integrity:"sha512-UKnpiHSP7h9c5IFpJFkWkpm1KyWz9iHj1hchrQSUxPhChx+KPOmunnQcKGiQvvBz9CeSi7Se/eauJYha5ch0kw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-24220191115004.tgz",_shasum:"5848f2204f37daaf8c340fb27d9f76b16fcbfdeb",_spec:"@dcloudio/uni-stat@next",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"bcf65737c5111d47398695d3db8ed87305df346e",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-24220191115004"}},"921b":function(t,e,n){"use strict";(function(t){var e=n("8189");function i(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?r(t):e}function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o(t){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},o(t)}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function u(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}var h=e.version,p="https://tongji.dcloud.io/uni/stat",f="https://tongji.dcloud.io/uni/stat.gif",d=1800,g=300,v=10,y="__DC_STAT_UUID",x="__DC_UUID_VALUE";function _(){var e="";if("n"===S()){try{e=plus.runtime.getDCloudId()}catch(n){e=""}return e}try{e=t.getStorageSync(y)}catch(n){e=x}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(y,e)}catch(n){t.setStorageSync(y,x)}}return e}var m=function(t){var e=Object.keys(t),n=e.sort(),i={},r="";for(var o in n)i[n[o]]=t[n[o]],r+=n[o]+"="+t[n[o]]+"&";return{sign:"",options:r.substr(0,r.length-1)}},b=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},A=function(){return parseInt((new Date).getTime()/1e3)},S=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},w=function(){var e="";return"wx"!==S()&&"qq"!==S()||t.canIUse("getAccountInfoSync")&&(e=t.getAccountInfoSync().miniProgram.appId||""),e},T=function(){return"n"===S()?plus.runtime.version:""},P=function(){var t=S(),e="";return"n"===t&&(e=plus.runtime.channel),e},k=function(e){var n=S(),i="";return e||("wx"===n&&(i=t.getLaunchOptionsSync().scene),i)},O="First__Visit__Time",R="Last__Visit__Time",D=function(){var e=t.getStorageSync(O),n=0;return e?n=e:(n=A(),t.setStorageSync(O,n),t.removeStorageSync(R)),n},C=function(){var e=t.getStorageSync(R),n=0;return n=e||"",t.setStorageSync(R,A()),n},$="__page__residence__time",L=0,M=0,E=function(){return L=A(),"n"===S()&&t.setStorageSync($,A()),L},I=function(){return M=A(),"n"===S()&&(L=t.getStorageSync($)),M-L},F="Total__Visit__Count",j=function(){var e=t.getStorageSync(F),n=1;return e&&(n=e,n++),t.setStorageSync(F,n),n},B=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},N=0,H=0,z=function(){var t=(new Date).getTime();return N=t,H=0,t},W=function(){var t=(new Date).getTime();return H=t,t},U=function(t){var e=0;if(0!==N&&(e=H-N),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>g;return{residenceTime:e,overtime:n}}if("page"===t){var i=e>d;return{residenceTime:e,overtime:i}}return{residenceTime:e}},V=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===S()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},G=function(t){var e=getCurrentPages(),n=e[e.length-1],i=n.$vm,r=t._query,o=r&&"{}"!==JSON.stringify(r)?"?"+JSON.stringify(r):"";return t._query="","bd"===S()?i.$mp&&i.$mp.page.is+o:i.$scope&&i.$scope.route+o||i.$mp&&i.$mp.page.route+o},Z=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},J=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},q=n("3403").default,Y=n("db8b").default||n("db8b"),X=t.getSystemInfoSync(),Q=function(){function e(){l(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:_(),ut:S(),mpn:w(),ak:Y.appid,usv:h,v:T(),ch:P(),cn:"",pn:"",ct:"",t:A(),tt:"",p:"android"===X.platform?"a":"i",brand:X.brand||"",md:X.model,sv:X.system.replace(/(Android|iOS)\s/,""),mpsdk:X.SDKVersion||"",mpv:X.version||"",lang:X.language,pr:X.pixelRatio,ww:X.windowWidth,wh:X.windowHeight,sw:X.screenWidth,sh:X.screenHeight}}return u(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){W();var t=U("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,W();var n=U();z();var i=G(this);this._sendHideRequest({urlref:i,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=G(this),e=V();if(this._navigationBarTitle.config=q&&q.pages[e]&&q.pages[e].titleNView&&q.pages[e].titleNView.titleText||q&&q.pages[e]&&q.pages[e].navigationBarTitleText||"",this.__licationShow)return z(),this.__licationShow=!1,void(this._lastPageRoute=t);W(),this._lastPageRoute=t;var n=U("page");if(n.overtime){var i={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(i)}z()}},{key:"_pageHide",value:function(){if(!this.__licationHide){W();var t=U("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=A(),this.statData.sc=k(t.scene),this.statData.fvts=D(),this.statData.lvts=C(),this.statData.tvc=j(),"n"===S()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,i=t.urlref_ts;this._navigationBarTitle.lt="11";var r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:A(),p:this.statData.p};this.request(r)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,i=t.urlref_ts,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:A(),p:this.statData.p};this.request(r,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,i=t.value,r=void 0===i?"":i,o=this._lastPageRoute,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:o,ch:this.statData.ch,e_n:n,e_v:"object"===typeof r?JSON.stringify(r):r.toString(),usv:this.statData.usv,t:A(),p:this.statData.p};this.request(a)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;Y.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,n){var i=this,r=A(),o=this._navigationBarTitle;e.ttn=o.page,e.ttpj=o.config,e.ttc=o.report;var a=this._reportingRequestData;if("n"===S()&&(a=t.getStorageSync("__UNI__STAT__DATA")||{}),a[e.lt]||(a[e.lt]=[]),a[e.lt].push(e),"n"===S()&&t.setStorageSync("__UNI__STAT__DATA",a),!(I()<v)||n){var s=this._reportingRequestData;"n"===S()&&(s=t.getStorageSync("__UNI__STAT__DATA")),E();var l=[],c=[],u=[],p=function(t){var e=s[t];e.forEach(function(e){var n=b(e);0===t?l.push(n):3===t?u.push(n):c.push(n)})};for(var f in s)p(f);l.push.apply(l,c.concat(u));var d={usv:h,t:r,requests:JSON.stringify(l)};this._reportingRequestData={},"n"===S()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==S()||"a"!==this.statData.p?this._sendRequest(d):setTimeout(function(){i._sendRequest(d)},200):this.imageRequest(d)}}},{key:"_sendRequest",value:function(e){var n=this;t.request({url:p,method:"POST",data:e,success:function(){},fail:function(t){++n._retry<3&&setTimeout(function(){n._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=m(B(t)).options;e.src=f+"?"+n}},{key:"sendEvent",value:function(t,e){J(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),K=function(e){function n(){var e;return l(this,n),e=i(this,o(n).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return a(n,e),u(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),u(n,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var n=this;e?t.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,E(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,Z(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,Z(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:A(),p:this.statData.p};this.request(n)}}]),n}(Q),tt=K.getInstance(),et=!1,nt={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),e.call(this,t)}}},onShow:function(){et=!1,tt.show(this)},onHide:function(){et=!0,tt.hide(this)},onUnload:function(){et?et=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function it(){var e=n("66fd");(e.default||e).mixin(nt),t.report=function(t,e){tt.sendEvent(t,e)}}it()}).call(this,n("6e42")["default"])},a886:function(t,e,n){},be4d:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkVEOTUzREE2QkNGMTFFOEI1MTdGQzU0NkNERTFGREUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkVEOTUzREI2QkNGMTFFOEI1MTdGQzU0NkNERTFGREUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0RUVDRDcwRDZCQ0YxMUU4QjUxN0ZDNTQ2Q0RFMUZERSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0RUVDRDcwRTZCQ0YxMUU4QjUxN0ZDNTQ2Q0RFMUZERSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pg0b/fgAAAGuSURBVHjavJc/S8NAHIYvKiJaqAg6dVE6CaH4j64Fd7u461SxoN/DxcFJB/0OKlIcxG7i1KGLSBVBpRRdRKQOwfheeQPXmtZc/twPHkiv/d3zJndJWyH+1gQogQvQAi74AffgCKyI/pUHB+AOtNnb4lwlzt1VVs/rNXAIZsAVqIJnMAbmQRHMgUVQU/qmGG4dPIFThvgCGVAAqwyzDc780u8y8TnI9jnDIbAMhpUxKWiAd7DBz/hVlnO7dHVVkW/s+VyVQTVLeYPH/5VFh0tnp1KgyXQ6cnlGL5RnNPosupp0iy3gDLjsccrVfoduUQGXBuVeSWdFbpglcK3RuMNbrMAgYatKd2dDbGo0jvC2jFrS6crJvsG4RqNDopZ0tuUSPABbmC/pfJQH+1zLUYNy6XqlW+S4D8oGA5TpzHkDJ+DT0FLYdB2rgyl+ubwlHMKmo+Y9BdWaBvUEQ3jyOl2+lVSIQPKkQmjJ4w4RSh5XiEhy9afWbYgQnlz2TkZdw7RmCFWejmsXBw2RiDxoiETlfiFyyviCCXlviA/+Ecnz2IjcL4RxuRrihoSW/wowACLbfsGWfozrAAAAAElFTkSuQmCC"},c238:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkZBN0RCRjQ2QkNFMTFFOEI1MTdGQzU0NkNERTFGREUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkZBN0RCRjU2QkNFMTFFOEI1MTdGQzU0NkNERTFGREUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGRkE3REJGMjZCQ0UxMUU4QjUxN0ZDNTQ2Q0RFMUZERSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGRkE3REJGMzZCQ0UxMUU4QjUxN0ZDNTQ2Q0RFMUZERSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuEuiQQAAAFvSURBVHjaxJfPSwJBGIbXIS8RGUhB905C/0l6jI4SBBFUdNJDh6BDdBIVK8HqUofO5X8S0SG6RpigKXis95NvYJn2x8y07rzwIIwM7zPO7s6a+Wy2PSWrYBtsgAJYBEPwDLqgA3pecBbAFijy3GXwBV7BE7gHI/+EjCJwAM7AvBeeMaiAC2V8EzTBSsTcPjhkkWmE78tLUI8pl6tsgQYtgMdOwENMOSUP7sCpHJjjT7La9cyyD7K8PRXDucfgHdzSFtCev2msPOmQ+JrgCy7tckoOlAVf7a5SEny7uMq64PvcVZZIYOBQYCT4CecqLyTw6FCgSwI34NtB+YTOFcGHxZEDAXoafsizgH6F8xTLr0FNPYyqKUlcgR3wowqkIUHle7I8SGCWEn/KwwRmIRFYHiWQpERoeZxAEhKR5ToC/5GILdcVsJHQKjcRMJHQLjcV0JEwKrcRiJIwLrcVCJKwKvf/L7CVkG+3VuWUXwEGAAICVy4ybmY6AAAAAElFTkSuQmCC"},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"===typeof window&&(n=window)}t.exports=n},db8b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={appid:"__UNI__F62111E"};e.default=i},f311:function(t,e,n){"use strict";(function(e,n){var i={yAxisWidth:15,yAxisSplit:5,xAxisHeight:15,xAxisLineHeight:15,legendHeight:15,yAxisTitleWidth:15,padding:12,pixelRatio:1,rotate:!1,columePadding:3,fontSize:13,dataPointShape:["circle","circle","circle","circle"],colors:["#1890ff","#2fc25b","#facc14","#f04864","#8543e0","#90ed7d","#5caf20","#30b0d7","#ff6d58","#1A79B9","#f97723","#f3792c"],pieChartLinePadding:15,pieChartTextPadding:5,xAxisTextPadding:3,titleColor:"#333333",titleFontSize:20,subtitleColor:"#999999",subtitleFontSize:15,toolTipPadding:3,toolTipBackground:"#000000",toolTipOpacity:.7,toolTipLineHeight:20,radarGridCount:3,radarLabelTextMargin:15,gaugeLabelTextMargin:15};function r(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(t),i=1;i<arguments.length;i++){var r=arguments[i];if(null!=r)for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n}var o={toFixed:function(t,e){return e=e||2,this.isFloat(t)&&(t=t.toFixed(e)),t},isFloat:function(t){return t%1!==0},approximatelyEqual:function(t,e){return Math.abs(t-e)<1e-10},isSameSign:function(t,e){return Math.abs(t)===t&&Math.abs(e)===e||Math.abs(t)!==t&&Math.abs(e)!==e},isSameXCoordinateArea:function(t,e){return this.isSameSign(t.x,e.x)},isCollision:function(t,e){t.end={},t.end.x=t.start.x+t.width,t.end.y=t.start.y-t.height,e.end={},e.end.x=e.start.x+e.width,e.end.y=e.start.y-e.height;var n=e.start.x>t.end.x||e.end.x<t.start.x||e.end.y>t.start.y||e.start.y<t.end.y;return!n}};function a(t,e){var n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,i=t.replace(n,function(t,e,n,i){return e+e+n+n+i+i}),r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i),o=parseInt(r[1],16),a=parseInt(r[2],16),s=parseInt(r[3],16);return"rgba("+o+","+a+","+s+","+e+")"}function s(t,e,n){if(isNaN(t))throw new Error("[wxCharts] unvalid series data!");n=n||10,e=e||"upper";var i=1;while(n<1)n*=10,i*=10;t="upper"===e?Math.ceil(t*i):Math.floor(t*i);while(t%n!==0)"upper"===e?t++:t--;return t/i}function l(t,e,n,i){for(var r=[],o=0;o<t.length;o++){for(var a={data:[],name:e[o],color:n[o]},s=0,l=i.length;s<l;s++)if(s<t[o])a.data.push(null);else{for(var c=0,u=0;u<t[o];u++)c+=i[s-u][1];a.data.push(+(c/t[o]).toFixed(3))}r.push(a)}return r}function c(t,e,n,i){var r=i.width-n.padding-e.xAxisPoints[0],o=e.eachSpacing*i.categories.length,a=t;return t>=0?a=0:Math.abs(t)>=o-r&&(a=r-o),a}function u(t,e,n){function i(t){while(t<0)t+=2*Math.PI;while(t>2*Math.PI)t-=2*Math.PI;return t}return t=i(t),e=i(e),n=i(n),e>n&&(n+=2*Math.PI,t<e&&(t+=2*Math.PI)),t>=e&&t<=n}function h(t,e,n){var i=t,r=n-e,o=i+(n-r-i)/Math.sqrt(2);o*=-1;var a=(n-r)*(Math.sqrt(2)-1)-(n-r-i)/Math.sqrt(2);return{transX:o,transY:a}}function p(t,e){function n(t,e){return!(!t[e-1]||!t[e+1])&&(t[e].y>=Math.max(t[e-1].y,t[e+1].y)||t[e].y<=Math.min(t[e-1].y,t[e+1].y))}var i=.2,r=.2,o=null,a=null,s=null,l=null;if(e<1?(o=t[0].x+(t[1].x-t[0].x)*i,a=t[0].y+(t[1].y-t[0].y)*i):(o=t[e].x+(t[e+1].x-t[e-1].x)*i,a=t[e].y+(t[e+1].y-t[e-1].y)*i),e>t.length-3){var c=t.length-1;s=t[c].x-(t[c].x-t[c-1].x)*r,l=t[c].y-(t[c].y-t[c-1].y)*r}else s=t[e+1].x-(t[e+2].x-t[e].x)*r,l=t[e+1].y-(t[e+2].y-t[e].y)*r;return n(t,e+1)&&(l=t[e+1].y),n(t,e)&&(a=t[e].y),{ctrA:{x:o,y:a},ctrB:{x:s,y:l}}}function f(t,e,n){return{x:n.x+t,y:n.y-e}}function d(t,e){if(e)while(o.isCollision(t,e))t.start.x>0?t.start.y--:t.start.x<0?t.start.y++:t.start.y>0?t.start.y++:t.start.y--;return t}function g(t,e){var n=0;return t.map(function(t){return t.color||(t.color=e.colors[n],n=(n+1)%e.colors.length),t})}function v(t,e){return t.map(function(t){return t.type||(t.type=e.type),t})}function y(t,e){var n=0,i=e-t;return n=i>=1e4?1e3:i>=1e3?100:i>=100?10:i>=10?5:i>=1?1:i>=.1?.1:.01,{minRange:s(t,"lower",n),maxRange:s(e,"upper",n)}}function x(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.fontSize;t=String(t);t=t.split("");for(var n=0,r=0;r<t.length;r++){var o=t[r];/[a-zA-Z]/.test(o)?n+=7:/[0-9]/.test(o)?n+=5.5:/\./.test(o)?n+=2.7:/-/.test(o)?n+=3.25:/[\u4e00-\u9fa5]/.test(o)?n+=10:/\(|\)/.test(o)?n+=3.73:/\s/.test(o)?n+=2.5:/%/.test(o)?n+=8:n+=10}return n*e/10}function _(t){return t.reduce(function(t,e){return(t.data?t.data:t).concat(e.data)},[])}function m(t){for(var e=new Array(t[0].data.length),n=0;n<e.length;n++)e[n]=0;for(var i=0;i<t.length;i++)for(n=0;n<e.length;n++)e[n]+=t[i].data[n];return t.reduce(function(t,n){return(t.data?t.data:t).concat(n.data).concat(e)},[])}function b(t,e,n){var i,r;return t.clientX?e.rotate?(r=e.height-t.clientX*e.pixelRatio,i=(t.pageY-n.currentTarget.offsetTop-e.height/e.pixelRatio/2*(e.pixelRatio-1))*e.pixelRatio):(i=t.clientX*e.pixelRatio,r=(t.pageY-n.currentTarget.offsetTop-e.height/e.pixelRatio/2*(e.pixelRatio-1))*e.pixelRatio):e.rotate?(r=e.height-t.x*e.pixelRatio,i=t.y*e.pixelRatio):(i=t.x*e.pixelRatio,r=t.y*e.pixelRatio),{x:i,y:r}}function A(t,e){for(var n=[],i=0;i<t.length;i++){var r=t[i];if(null!==r.data[e]&&"undefined"!==typeof r.data[e]){var o={};o.color=r.color,o.type=r.type,o.style=r.style,o.shape=r.shape,o.disableLegend=r.disableLegend,o.name=r.name,o.data=r.format?r.format(r.data[e]):r.data[e],n.push(o)}}return n}function S(t){var e=t.map(function(t){return x(t)});return Math.max.apply(null,e)}function w(t){for(var e=2*Math.PI/t,n=[],i=0;i<t;i++)n.push(e*i);return n.map(function(t){return-1*t+Math.PI/2})}function T(t,e,n,i){for(var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=t.map(function(t){return{text:r.format?r.format(t,i[n]):t.name+": "+t.data,color:t.color}}),a=[],s={x:0,y:0},l=0;l<e.length;l++){var c=e[l];"undefined"!==typeof c[n]&&null!==c[n]&&a.push(c[n])}for(var u=0;u<a.length;u++){var h=a[u];s.x=Math.round(h.x),s.y+=h.y}return s.y/=a.length,{textList:o,offset:s}}function P(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=t.map(function(t){return{text:r.format?r.format(t,i[n]):t.name+": "+t.data,color:t.color,disableLegend:!!t.disableLegend}});o=o.filter(function(t){if(!0!==t.disableLegend)return t});for(var a=[],s={x:0,y:0},l=0;l<e.length;l++){var c=e[l];"undefined"!==typeof c[n]&&null!==c[n]&&a.push(c[n])}for(var u=0;u<a.length;u++){var h=a[u];s.x=Math.round(h.x),s.y+=h.y}return s.y/=a.length,{textList:o,offset:s}}function k(t,e,n,i,r,o){arguments.length>6&&void 0!==arguments[6]&&arguments[6];var a=o.color.upFill,s=o.color.downFill,l=[a,a,s,a],c=[],u={text:r[i],color:null};c.push(u),e.map(function(e){0==i&&e.data[1]-e.data[0]<0?l[1]=s:(e.data[0]<t[i-1][1]&&(l[0]=s),e.data[1]<e.data[0]&&(l[1]=s),e.data[2]>t[i-1][1]&&(l[2]=a),e.data[3]<t[i-1][1]&&(l[3]=s));var n={text:"开盘："+e.data[0],color:l[0]},r={text:"收盘："+e.data[1],color:l[1]},o={text:"最低："+e.data[2],color:l[2]},u={text:"最高："+e.data[3],color:l[3]};c.push(n,r,o,u)});for(var h=[],p={x:0,y:0},f=0;f<n.length;f++){var d=n[f];"undefined"!==typeof d[i]&&null!==d[i]&&h.push(d[i])}return p.x=Math.round(h[0][0].x),{textList:c,offset:p}}function O(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=-1;return R(t,n,i)&&e.forEach(function(e,n){t.x+r>e&&(o=n)}),o}function R(t,e,n){return t.x<e.width-n.padding&&t.x>n.padding+n.yAxisWidth+n.yAxisTitleWidth&&t.y>n.padding&&t.y<e.height-n.legendHeight-n.xAxisHeight-n.padding}function D(t,e,n){var i=2*Math.PI/n,r=-1;if($(t,e.center,e.radius)){var o=function(t){return t<0&&(t+=2*Math.PI),t>2*Math.PI&&(t-=2*Math.PI),t},a=Math.atan2(e.center.y-t.y,t.x-e.center.x);a*=-1,a<0&&(a+=2*Math.PI);var s=e.angleList.map(function(t){return t=o(-1*t),t});s.forEach(function(t,e){var n=o(t-i/2),s=o(t+i/2);s<n&&(s+=2*Math.PI),(a>=n&&a<=s||a+2*Math.PI>=n&&a+2*Math.PI<=s)&&(r=e)})}return r}function C(t,e){var n=-1;if($(t,e.center,e.radius)){var i=Math.atan2(e.center.y-t.y,t.x-e.center.x);i=-i;for(var r=0,o=e.series.length;r<o;r++){var a=e.series[r];if(u(i,a._start_,a._start_+2*a._proportion_*Math.PI)){n=r;break}}}return n}function $(t,e,n){return Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)<=Math.pow(n,2)}function L(t){var e=[],n=[];return t.forEach(function(t,i){null!==t?n.push(t):(n.length&&e.push(n),n=[])}),n.length&&e.push(n),e}function M(t,e,n){if(!1===e.legend)return{legendList:[],legendHeight:0};for(var i=5*e.pixelRatio,r=8*e.pixelRatio,o=15*e.pixelRatio,a=[],s=0,l=[],c=0;c<t.length;c++){var u=t[c],h=3*i+o+x(u.name||"undefined");s+h>e.width?(a.push(l),s=h,l=[u]):(s+=h,l.push(u))}return l.length&&a.push(l),{legendList:a,legendHeight:a.length*(n.fontSize+r)+i}}function E(t,e,n){var i={angle:0,xAxisHeight:n.xAxisHeight},r=G(t,e,n),o=r.eachSpacing,a=t.map(function(t){return x(t)}),s=Math.max.apply(this,a);return 1==e.xAxis.rotateLabel&&s+2*n.xAxisTextPadding>o&&(i.angle=45*Math.PI/180,i.xAxisHeight=2*n.xAxisTextPadding+s*Math.sin(i.angle)),i}function I(t,e,n,i,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,a=r.extra.radar||{};a.max=a.max||0;for(var s=Math.max(a.max,Math.max.apply(null,_(i))),l=[],c=function(r){var a=i[r],c={};c.color=a.color,c.data=[],a.data.forEach(function(i,r){var a={};a.angle=t[r],a.proportion=i/s,a.position=f(n*a.proportion*o*Math.cos(a.angle),n*a.proportion*o*Math.sin(a.angle),e),c.data.push(a)}),l.push(c)},u=0;u<i.length;u++)c(u);return l}function F(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=0,r=0,o=0;o<t.length;o++){var a=t[o];a.data=null===a.data?0:a.data,i+=a.data}for(var s=0;s<t.length;s++){var l=t[s];l.data=null===l.data?0:l.data,l._proportion_=0===i?1/t.length*n:l.data/i*n,l._radius_=e}for(var c=0;c<t.length;c++){var u=t[c];u._start_=r,r+=2*u._proportion_*Math.PI}return t}function j(t,e,n,i){for(var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=0,a=0,s=[],l=0;l<t.length;l++){var c=t[l];c.data=null===c.data?0:c.data,o+=c.data,s.push(c.data)}for(var u=s.pop(),h=s.shift(),p=i-n,f=0;f<t.length;f++){var d=t[f];d.data=null===d.data?0:d.data,d._proportion_=0===o||"area"==e?1/t.length*r:d.data/o*r,d._radius_=n+p*((d.data-u)/(h-u))}for(var g=0;g<t.length;g++){var v=t[g];v._start_=a,a+=2*v._proportion_*Math.PI}return t}function B(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;1==n&&(n=.999999);for(var i=0;i<t.length;i++){var r=t[i];r.data=null===r.data?0:r.data;var o=void 0;o="default"==e.type?e.startAngle-e.endAngle+1:2,r._proportion_=o*r.data*n+e.startAngle,r._proportion_>=2&&(r._proportion_=r._proportion_%2)}return t}function N(t,e,n){for(var i=e-n+1,r=e,o=0;o<t.length;o++)t[o].value=null===t[o].value?0:t[o].value,t[o]._startAngle_=r,t[o]._endAngle_=i*t[o].value+e,t[o]._endAngle_>=2&&(t[o]._endAngle_=t[o]._endAngle_%2),r=t[o]._endAngle_;return t}function H(t,e,n){for(var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,r=0;r<t.length;r++){var o=t[r];if(o.data=null===o.data?0:o.data,"auto"==n.pointer.color){for(var a=0;a<e.length;a++)if(o.data<=e[a].value){o.color=e[a].color;break}}else o.color=n.pointer.color;var s=n.startAngle-n.endAngle+1;o._endAngle_=s*o.data+n.startAngle,o._oldAngle_=n.oldAngle,n.oldAngle<n.endAngle&&(o._oldAngle_+=2),o.data>=n.oldData?o._proportion_=(o._endAngle_-o._oldAngle_)*i+n.oldAngle:o._proportion_=o._oldAngle_-(o._oldAngle_-o._endAngle_)*i,o._proportion_>=2&&(o._proportion_=o._proportion_%2)}return t}function z(t){t=F(t);for(var e=0,n=0;n<t.length;n++){var i=t[n],r=i.format?i.format(+i._proportion_.toFixed(2)):o.toFixed(100*i._proportion_)+"%";e=Math.max(e,x(r))}return e}function W(t,e,n,i,r,o){return t.map(function(t){return null===t?null:(t.width=(e-2*r.columePadding)/n,o.extra.column&&o.extra.column.width&&+o.extra.column.width>0?t.width=Math.min(t.width,+o.extra.column.width):t.width=Math.min(t.width,25),t.x+=(i+.5-n/2)*t.width,t)})}function U(t,e,n,i,r,o,a){return t.map(function(t){return null===t?null:(t.width=e-2*r.columePadding,o.extra.column&&o.extra.column.width&&+o.extra.column.width>0?t.width=Math.min(t.width,+o.extra.column.width):t.width=Math.min(t.width,25),i>0&&(t.width-=2*a),t)})}function V(t,e,n,i,r,o,a){return t.map(function(t,n){return null===t?null:(t.width=e-2*r.columePadding,o.extra.column&&o.extra.column.width&&+o.extra.column.width>0?t.width=Math.min(t.width,+o.extra.column.width):t.width=Math.min(t.width,25),t)})}function G(t,e,n){var i=n.yAxisWidth+n.yAxisTitleWidth,r=e.width-2*n.padding-i,o=e.enableScroll?Math.min(e.xAxis.itemCount,t.length):t.length,a=r/o,s=[],l=n.padding+i,c=e.width-n.padding;return t.forEach(function(t,e){s.push(l+e*a)}),!0===e.enableScroll?s.push(l+t.length*a):s.push(c),{xAxisPoints:s,startX:l,endX:c,eachSpacing:a}}function Z(t,e,n,i,r,o,a){var s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,l=[],c=o.height-2*a.padding-a.xAxisHeight-a.legendHeight;return t.forEach(function(t,u){if(null===t)l.push(null);else{var h=[];t.forEach(function(t,l){var p={};p.x=i[u]+Math.round(r/2);var f=t.value||t,d=c*(f-e)/(n-e);d*=s,p.y=o.height-a.xAxisHeight-a.legendHeight-Math.round(d)-a.padding,h.push(p)}),l.push(h)}}),l}function J(t,e,n,i,r,o,a){var s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,l=[],c=o.height-2*a.padding-a.xAxisHeight-a.legendHeight;return t.forEach(function(t,u){if(null===t)l.push(null);else{var h={};h.color=t.color,h.x=i[u]+Math.round(r/2);var p=t;"object"===typeof t&&null!==t&&(p=t.value);var f=c*(p-e)/(n-e);f*=s,h.y=o.height-a.xAxisHeight-a.legendHeight-Math.round(f)-a.padding,l.push(h)}}),l}function q(t,e,n,i,r,o,a,s,l){var c=arguments.length>9&&void 0!==arguments[9]?arguments[9]:1,u=[],h=o.height-2*a.padding-a.xAxisHeight-a.legendHeight;return t.forEach(function(t,p){if(null===t)u.push(null);else{var f={};if(f.color=t.color,f.x=i[p]+Math.round(r/2),s>0){for(var d=0,g=0;g<=s;g++)d+=l[g].data[p];var v=d-t,y=h*(d-e)/(n-e),x=h*(v-e)/(n-e)}else d=t,y=h*(d-e)/(n-e),x=0;var _=x;y*=c,_*=c,f.y=o.height-a.xAxisHeight-a.legendHeight-Math.round(y)-a.padding,f.y0=o.height-a.xAxisHeight-a.legendHeight-Math.round(_)-a.padding,u.push(f)}}),u}function Y(t,e,n,i){var r;r="stack"==i?m(t):_(t);var o=[];r=r.filter(function(t){return"object"===typeof t&&null!==t?t.constructor==Array?null!==t:null!==t.value:null!==t}),r.map(function(t){"object"===typeof t?t.constructor==Array?t.map(function(t){o.push(t)}):o.push(t.value):o.push(t)});var a=0,s=0;if(o.length>0&&(a=Math.min.apply(this,o),s=Math.max.apply(this,o)),"number"===typeof e.yAxis.min&&(a=Math.min(e.yAxis.min,a)),"number"===typeof e.yAxis.max&&(s=Math.max(e.yAxis.max,s)),a===s){var l=s||10;s+=l}for(var c=y(a,s),u=c.minRange,h=c.maxRange,p=[],f=(h-u)/n.yAxisSplit,d=0;d<=n.yAxisSplit;d++)p.push(u+f*d);return p.reverse()}function X(t,e,n){var i=r({},e.extra.column||{type:""}),a=Y(t,e,n,i.type),s=n.yAxisWidth,l=a.map(function(t){return t=o.toFixed(t,2),t=e.yAxis.format?e.yAxis.format(Number(t)):t,s=Math.max(s,x(t)+5),t});return!0===e.yAxis.disabled&&(s=0),{rangesFormat:l,ranges:a,yAxisWidth:s}}function Q(t,e,n,i,r){var o=Y(e,n,i),a=n.height-2*i.padding-i.xAxisHeight-i.legendHeight,s=o[0],l=o[o.length-1],c=i.padding,u=i.padding+a,h=s-(s-l)*(t-c)/(u-c);return h=n.yAxis.format?n.yAxis.format(Number(h)):h,h}function K(t,e){!0!==e.rotateLock?(t.translate(e.height,0),t.rotate(90*Math.PI/180)):!0!==e._rotate_&&(t.translate(e.height,0),t.rotate(90*Math.PI/180),e._rotate_=!0)}function tt(t,e,n,i,r){i.beginPath(),i.setStrokeStyle("#ffffff"),i.setLineWidth(1*r.pixelRatio),i.setFillStyle(e),"diamond"===n?t.forEach(function(t,e){null!==t&&(i.moveTo(t.x,t.y-4.5),i.lineTo(t.x-4.5,t.y),i.lineTo(t.x,t.y+4.5),i.lineTo(t.x+4.5,t.y),i.lineTo(t.x,t.y-4.5))}):"circle"===n?t.forEach(function(t,e){null!==t&&(i.moveTo(t.x+3.5*r.pixelRatio,t.y),i.arc(t.x,t.y,4*r.pixelRatio,0,2*Math.PI,!1))}):"rect"===n?t.forEach(function(t,e){null!==t&&(i.moveTo(t.x-3.5,t.y-3.5),i.rect(t.x-3.5,t.y-3.5,7,7))}):"triangle"===n&&t.forEach(function(t,e){null!==t&&(i.moveTo(t.x,t.y-4.5),i.lineTo(t.x-4.5,t.y+4.5),i.lineTo(t.x+4.5,t.y+4.5),i.lineTo(t.x,t.y-4.5))}),i.closePath(),i.fill(),i.stroke()}function et(t,e,n){var i=t.title.fontSize||e.titleFontSize,r=t.subtitle.fontSize||e.subtitleFontSize,o=t.title.name||"",a=t.subtitle.name||"",s=t.title.color||e.titleColor,l=t.subtitle.color||e.subtitleColor,c=o?i:0,u=a?r:0,h=5;if(a){var p=x(a,r),f=(t.width-p)/2+(t.subtitle.offsetX||0),d=(t.height-e.legendHeight+r)/2+(t.subtitle.offsetY||0);o&&(d-=(c+h)/2),n.beginPath(),n.setFontSize(r),n.setFillStyle(l),n.fillText(a,f,d),n.closePath(),n.stroke()}if(o){var g=x(o,i),v=(t.width-g)/2+(t.title.offsetX||0),y=(t.height-e.legendHeight+i)/2+(t.title.offsetY||0);a&&(y+=(u+h)/2),n.beginPath(),n.setFontSize(i),n.setFillStyle(s),n.fillText(o,v,y),n.closePath(),n.stroke()}}function nt(t,e,n,i){var r=e.data,o=void 0==e.textColor?"#666666":e.textColor;t.forEach(function(t,a){if(null!==t){i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle(o);var s=r[a];"object"===typeof r[a]&&null!==r[a]&&(s=r[a].value);var l=e.format?e.format(s):s;i.fillText(l,t.x-x(l)/2,t.y-2),i.closePath(),i.stroke()}})}function it(t,e,n,i,r,o){e-=t.width/2+r.gaugeLabelTextMargin;for(var a=t.startAngle-t.endAngle+1,s=a/t.splitLine.splitNumber,l=t.endNumber-t.startNumber,c=l/t.splitLine.splitNumber,u=t.startAngle,h=t.startNumber,p=0;p<t.splitLine.splitNumber+1;p++){var f={x:e*Math.cos(u*Math.PI),y:e*Math.sin(u*Math.PI)};f.x+=n.x-x(h)/2,f.y+=n.y;var d=f.x,g=f.y;o.beginPath(),o.setFontSize(r.fontSize),o.setFillStyle(t.labelColor||"#666666"),o.fillText(h,d,g+r.fontSize/2),o.closePath(),o.stroke(),u+=s,u>=2&&(u%=2),h+=c}}function rt(t,e,n,i,r,a){var s=i.extra.radar||{};e+=r.radarLabelTextMargin,t.forEach(function(t,l){var c={x:e*Math.cos(t),y:e*Math.sin(t)},u=f(c.x,c.y,n),h=u.x,p=u.y;o.approximatelyEqual(c.x,0)?h-=x(i.categories[l]||"")/2:c.x<0&&(h-=x(i.categories[l]||"")),a.beginPath(),a.setFontSize(r.fontSize),a.setFillStyle(s.labelColor||"#666666"),a.fillText(i.categories[l]||"",h,p+r.fontSize/2),a.closePath(),a.stroke()})}function ot(t,e,n,i,r,a){for(var s=n.pieChartLinePadding,l=[],c=null,u=t.map(function(t){var e=2*Math.PI-(t._start_+2*Math.PI*t._proportion_/2),n=t.format?t.format(+t._proportion_.toFixed(2)):o.toFixed(100*t._proportion_)+"%",i=t.color,r=t._radius_;return{arc:e,text:n,color:i,radius:r}}),h=0;h<u.length;h++){var p=u[h],g=Math.cos(p.arc)*(p.radius+s),v=Math.sin(p.arc)*(p.radius+s),y=Math.cos(p.arc)*p.radius,_=Math.sin(p.arc)*p.radius,m=g>=0?g+n.pieChartTextPadding:g-n.pieChartTextPadding,b=v,A=x(p.text),S=b;c&&o.isSameXCoordinateArea(c.start,{x:m})&&(S=m>0?Math.min(b,c.start.y):g<0?Math.max(b,c.start.y):b>0?Math.max(b,c.start.y):Math.min(b,c.start.y)),m<0&&(m-=A);var w={lineStart:{x:y,y:_},lineEnd:{x:g,y:v},start:{x:m,y:S},width:A,height:n.fontSize,text:p.text,color:p.color};c=d(w,c),l.push(c)}for(var T=0;T<l.length;T++){var P=l[T],k=f(P.lineStart.x,P.lineStart.y,a),O=f(P.lineEnd.x,P.lineEnd.y,a),R=f(P.start.x,P.start.y,a);i.setLineWidth(1*e.pixelRatio),i.setFontSize(n.fontSize),i.beginPath(),i.setStrokeStyle(P.color),i.setFillStyle(P.color),i.moveTo(k.x,k.y);var D=P.start.x<0?R.x+P.width:R.x,C=P.start.x<0?R.x-5:R.x+5;i.quadraticCurveTo(O.x,O.y,D,R.y),i.moveTo(k.x,k.y),i.stroke(),i.closePath(),i.beginPath(),i.moveTo(R.x+P.width,R.y),i.arc(D,R.y,2,0,2*Math.PI),i.closePath(),i.fill(),i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle("#666666"),i.fillText(P.text,C,R.y+3),i.closePath(),i.stroke(),i.closePath()}}function at(t,e,n,i){var r=e.extra.tooltip||{};r.gridType=void 0==r.gridType?"solid":r.gridType,r.dashLength=void 0==r.dashLength?4:r.dashLength;var o=n.padding,s=e.height-n.padding-n.xAxisHeight-n.legendHeight;if("dash"==r.gridType&&i.setLineDash([r.dashLength,r.dashLength]),i.beginPath(),i.setStrokeStyle(r.gridColor||"#cccccc"),i.setLineWidth(1*e.pixelRatio),i.moveTo(t,o),i.lineTo(t,s),i.closePath(),i.stroke(),i.setLineDash([]),r.xAxisLabel){var l=e.categories[e.tooltip.index];i.setFontSize(n.fontSize);var c=i.measureText(l).width,u=t-n.toolTipPadding-.5*c,h=s;i.beginPath(),i.setFillStyle(a(r.labelBgColor||n.toolTipBackground,r.labelBgOpacity||n.toolTipOpacity)),i.setStrokeStyle(r.labelBgColor||n.toolTipBackground),i.setLineWidth(1*e.pixelRatio),i.rect(u,h,c+2*n.toolTipPadding,n.fontSize+2*n.toolTipPadding),i.closePath(),i.stroke(),i.fill(),i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle(r.labelFontColor||n.fontColor),i.fillText(l,u+2*n.toolTipPadding,h+n.toolTipPadding+n.fontSize),i.closePath(),i.stroke()}}function st(t,e,n,i,r){var o=t.extra.tooltip||{};o.gridType=void 0==o.gridType?"solid":o.gridType,o.dashLength=void 0==o.dashLength?4:o.dashLength;var s=e.padding+e.yAxisWidth+e.yAxisTitleWidth,l=t.width-e.padding;if("dash"==o.gridType&&n.setLineDash([o.dashLength,o.dashLength]),n.beginPath(),n.setStrokeStyle(o.gridColor||"#cccccc"),n.setLineWidth(1*t.pixelRatio),n.moveTo(s,t.tooltip.offset.y),n.lineTo(l,t.tooltip.offset.y),n.closePath(),n.stroke(),n.setLineDash([]),o.yAxisLabel){var c=Q(t.tooltip.offset.y,t.series,t,e,i);n.setFontSize(e.fontSize);var u=n.measureText(c).width,h=s-2*e.toolTipPadding-u,p=t.tooltip.offset.y;n.beginPath(),n.setFillStyle(a(o.labelBgColor||e.toolTipBackground,o.labelBgOpacity||e.toolTipOpacity)),n.setStrokeStyle(o.labelBgColor||e.toolTipBackground),n.setLineWidth(1*t.pixelRatio),n.rect(h,p-.5*e.fontSize-e.toolTipPadding,u+2*e.toolTipPadding,e.fontSize+2*e.toolTipPadding),n.closePath(),n.stroke(),n.fill(),n.beginPath(),n.setFontSize(e.fontSize),n.setFillStyle(o.labelFontColor||e.fontColor),n.fillText(c,h+e.toolTipPadding,p+.5*e.fontSize),n.closePath(),n.stroke()}}function lt(t,e,n,i,r){var o=e.extra.tooltip||{activeBgColor:"#000000",activeBgOpacity:.08};o.activeBgColor=o.activeBgColor?o.activeBgColor:"#000000",o.activeBgOpacity=o.activeBgOpacity?o.activeBgOpacity:.08;var s=n.padding,l=e.height-n.padding-n.xAxisHeight-n.legendHeight;i.beginPath(),i.setFillStyle(a(o.activeBgColor,o.activeBgOpacity)),i.rect(t-r/2,s,r,l-s),i.closePath(),i.fill()}function ct(t,e,n,i,o,s,l){var c=n.extra.tooltip||{bgColor:"#000000",bgOpacity:.7,fontColor:"#FFFFFF"};c.bgColor=c.bgColor?c.bgColor:"#000000",c.bgOpacity=c.bgOpacity?c.bgOpacity:.7,c.fontColor=c.fontColor?c.fontColor:"#FFFFFF";var u=4*n.pixelRatio,h=5*n.pixelRatio,p=8*n.pixelRatio,f=!1;"line"!=n.type&&"area"!=n.type&&"candle"!=n.type&&"mix"!=n.type||at(n.tooltip.offset.x,n,i,o),e=r({x:0,y:0},e),e.y-=8*n.pixelRatio;var d=t.map(function(t){return x(t.text)}),g=u+h+4*i.toolTipPadding+Math.max.apply(null,d),v=2*i.toolTipPadding+t.length*i.toolTipLineHeight;e.x-Math.abs(n._scrollDistance_)+p+g>n.width&&(f=!0),o.beginPath(),o.setFillStyle(a(c.bgColor||i.toolTipBackground,c.bgOpacity||i.toolTipOpacity)),f?(o.moveTo(e.x,e.y+10*n.pixelRatio),o.lineTo(e.x-p,e.y+10*n.pixelRatio-5*n.pixelRatio),o.lineTo(e.x-p,e.y),o.lineTo(e.x-p-Math.round(g),e.y),o.lineTo(e.x-p-Math.round(g),e.y+v),o.lineTo(e.x-p,e.y+v),o.lineTo(e.x-p,e.y+10*n.pixelRatio+5*n.pixelRatio),o.lineTo(e.x,e.y+10*n.pixelRatio)):(o.moveTo(e.x,e.y+10*n.pixelRatio),o.lineTo(e.x+p,e.y+10*n.pixelRatio-5*n.pixelRatio),o.lineTo(e.x+p,e.y),o.lineTo(e.x+p+Math.round(g),e.y),o.lineTo(e.x+p+Math.round(g),e.y+v),o.lineTo(e.x+p,e.y+v),o.lineTo(e.x+p,e.y+10*n.pixelRatio+5*n.pixelRatio),o.lineTo(e.x,e.y+10*n.pixelRatio)),o.closePath(),o.fill(),t.forEach(function(t,n){if(null!==t.color){o.beginPath(),o.setFillStyle(t.color);var r=e.x+p+2*i.toolTipPadding,a=e.y+(i.toolTipLineHeight-i.fontSize)/2+i.toolTipLineHeight*n+i.toolTipPadding+1;f&&(r=e.x-g-p+2*i.toolTipPadding),o.fillRect(r,a,u,i.fontSize),o.closePath()}}),t.forEach(function(t,n){var r=e.x+p+2*i.toolTipPadding+u+h;f&&(r=e.x-g-p+2*i.toolTipPadding+ +u+h);var a=e.y+(i.toolTipLineHeight-i.fontSize)/2+i.toolTipLineHeight*n+i.toolTipPadding;o.beginPath(),o.setFontSize(i.fontSize),o.setFillStyle(c.fontColor),o.fillText(t.text,r,a+i.fontSize),o.closePath(),o.stroke()})}function ut(t,e,n,i){var r=n.xAxisHeight+(e.height-n.xAxisHeight-x(t))/2;i.save(),i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle(e.yAxis.titleFontColor||"#333333"),i.translate(0,e.height),i.rotate(-90*Math.PI/180),i.fillText(t,r,n.padding+.5*n.fontSize),i.closePath(),i.stroke(),i.restore()}function ht(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=e.extra.column||{type:{},meter:{}};o.type=void 0==o.type?"group":o.type,o.meter=o.meter||{},o.meter.border=void 0==o.meter.border?4:o.meter.border,o.meter.fillColor=void 0==o.meter.fillColor?"#FFFFFF":o.meter.fillColor;var a=X(t,e,n),s=a.ranges,l=G(e.categories,e,n),c=l.xAxisPoints,u=l.eachSpacing,h=s.pop(),p=s.shift(),f=[];return i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&i.translate(e._scrollDistance_,0),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===r&&lt(e.tooltip.offset.x,e,n,i,u),t.forEach(function(a,s){var l=a.data;switch(o.type){case"group":var d=J(l,h,p,c,u,e,n,r),g=q(l,h,p,c,u,e,n,s,t,r);f.push(g),d=W(d,u,t.length,s,n,e),d.forEach(function(t,r){if(null!==t){i.beginPath(),i.setFillStyle(t.color||a.color);var o=t.x-t.width/2+1,s=e.height-t.y-n.padding-n.xAxisHeight-n.legendHeight;i.moveTo(o,t.y),i.fillRect(o,t.y,t.width-2,s),i.closePath(),i.fill()}});break;case"stack":d=q(l,h,p,c,u,e,n,s,t,r);f.push(d),d=V(d,u,t.length,s,n,e,t),d.forEach(function(t,r){if(null!==t){i.beginPath(),i.setFillStyle(t.color||a.color);var o=t.x-t.width/2+1,l=e.height-t.y-n.padding-n.xAxisHeight-n.legendHeight,c=e.height-t.y0-n.padding-n.xAxisHeight-n.legendHeight;s>0&&(l-=c),i.moveTo(o,t.y),i.fillRect(o,t.y,t.width-2,l),i.closePath(),i.fill()}});break;case"meter":d=J(l,h,p,c,u,e,n,r);f.push(d),d=U(d,u,t.length,s,n,e,o.meter.border),0==s?d.forEach(function(t,r){if(null!==t){i.beginPath(),i.setFillStyle(o.meter.fillColor);var s=t.x-t.width/2+1,l=e.height-t.y-n.padding-n.xAxisHeight-n.legendHeight;i.moveTo(s,t.y),i.fillRect(s,t.y,t.width-2,l),i.closePath(),i.fill(),i.beginPath(),i.setStrokeStyle(a.color),i.setLineWidth(o.meter.border*e.pixelRatio),i.moveTo(s+.5*o.meter.border,t.y+l),i.lineTo(s+.5*o.meter.border,t.y+.5*o.meter.border),i.lineTo(s+t.width-o.meter.border,t.y+.5*o.meter.border),i.lineTo(s+t.width-o.meter.border,t.y+l),i.stroke()}}):d.forEach(function(t,r){if(null!==t){i.beginPath(),i.setFillStyle(t.color||a.color);var o=t.x-t.width/2+1,s=e.height-t.y-n.padding-n.xAxisHeight-n.legendHeight;i.moveTo(o,t.y),i.rect(o,t.y,t.width-2,s),i.closePath(),i.fill()}});break}}),!1!==e.dataLabel&&1===r&&t.forEach(function(a,s){var l=a.data;switch(o.type){case"group":var f=J(l,h,p,c,u,e,n,r);f=W(f,u,t.length,s,n,e),nt(f,a,n,i);break;case"stack":f=q(l,h,p,c,u,e,n,s,t,r);nt(f,a,n,i);break;case"meter":f=J(l,h,p,c,u,e,n,r);nt(f,a,n,i);break}}),i.restore(),{xAxisPoints:c,calPoints:f,eachSpacing:u}}function pt(t,e,n,i,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,a=n.extra.candle||{color:{},average:{}};a.color.upLine=a.color.upLine?a.color.upLine:"#f04864",a.color.upFill=a.color.upFill?a.color.upFill:"#f04864",a.color.downLine=a.color.downLine?a.color.downLine:"#2fc25b",a.color.downFill=a.color.downFill?a.color.downFill:"#2fc25b",a.average.show=!0===a.average.show,a.average.name=a.average.name?a.average.name:[],a.average.day=a.average.day?a.average.day:[],a.average.color=a.average.color?a.average.color:["#1890ff","#2fc25b","#facc14","#f04864","#8543e0","#90ed7d"],n.extra.candle=a;var s=X(t,n,i),l=s.ranges,c=G(n.categories,n,i),u=c.xAxisPoints,h=c.eachSpacing,f=l.pop(),d=l.shift(),g=[];return r.save(),n._scrollDistance_&&0!==n._scrollDistance_&&!0===n.enableScroll&&r.translate(n._scrollDistance_,0),a.average.show&&e.forEach(function(t,e){var a=t.data,s=J(a,f,d,u,h,n,i,o),l=L(s);l.forEach(function(e,n){r.beginPath(),r.setStrokeStyle(t.color),r.setLineWidth(1),1===e.length?(r.moveTo(e[0].x,e[0].y),r.arc(e[0].x,e[0].y,1,0,2*Math.PI)):(r.moveTo(e[0].x,e[0].y),e.forEach(function(t,n){if(n>0){var i=p(e,n-1);r.bezierCurveTo(i.ctrA.x,i.ctrA.y,i.ctrB.x,i.ctrB.y,t.x,t.y)}}),r.moveTo(e[0].x,e[0].y)),r.closePath(),r.stroke()})}),t.forEach(function(t,e){var s=t.data,l=Z(s,f,d,u,h,n,i,o);g.push(l);var c=L(l);c=c[0],c.forEach(function(t,e){r.beginPath(),s[e][1]-s[e][0]>0?(r.setStrokeStyle(a.color.upLine),r.setFillStyle(a.color.upFill),r.setLineWidth(1*n.pixelRatio),r.moveTo(t[3].x,t[3].y),r.lineTo(t[1].x,t[1].y),r.lineTo(t[1].x-h/4,t[1].y),r.lineTo(t[0].x-h/4,t[0].y),r.lineTo(t[0].x,t[0].y),r.lineTo(t[2].x,t[2].y),r.lineTo(t[0].x,t[0].y),r.lineTo(t[0].x+h/4,t[0].y),r.lineTo(t[1].x+h/4,t[1].y),r.lineTo(t[1].x,t[1].y),r.moveTo(t[3].x,t[3].y)):(r.setStrokeStyle(a.color.downLine),r.setFillStyle(a.color.downFill),r.setLineWidth(1*n.pixelRatio),r.moveTo(t[3].x,t[3].y),r.lineTo(t[0].x,t[0].y),r.lineTo(t[0].x-h/4,t[0].y),r.lineTo(t[1].x-h/4,t[1].y),r.lineTo(t[1].x,t[1].y),r.lineTo(t[2].x,t[2].y),r.lineTo(t[1].x,t[1].y),r.lineTo(t[1].x+h/4,t[1].y),r.lineTo(t[0].x+h/4,t[0].y),r.lineTo(t[0].x,t[0].y),r.moveTo(t[3].x,t[3].y)),r.closePath(),r.fill(),r.stroke()})}),r.restore(),{xAxisPoints:u,calPoints:g,eachSpacing:h}}function ft(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=e.extra.area||{type:"straight",opacity:.5,addLine:!1,width:2};o.type=o.type?o.type:"straight",o.opacity=o.opacity?o.opacity:.2,o.addLine=1==o.addLine,o.width=o.width?o.width:2;var s=X(t,e,n),l=s.ranges,c=G(e.categories,e,n),u=c.xAxisPoints,h=c.eachSpacing,f=l.pop(),d=l.shift(),g=e.height-n.padding-n.xAxisHeight-n.legendHeight,v=[];return i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&i.translate(e._scrollDistance_,0),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===r&&at(e.tooltip.offset.x,e,n,i),t.forEach(function(t,s){var l=t.data,c=J(l,f,d,u,h,e,n,r);v.push(c);for(var y=L(c),x=function(n){var r=y[n];if(i.beginPath(),i.setStrokeStyle(a(t.color,o.opacity)),i.setFillStyle(a(t.color,o.opacity)),i.setLineWidth(o.width*e.pixelRatio),r.length>1){var s=r[0],l=r[r.length-1];i.moveTo(s.x,s.y),"curve"===o.type?r.forEach(function(t,e){if(e>0){var n=p(r,e-1);i.bezierCurveTo(n.ctrA.x,n.ctrA.y,n.ctrB.x,n.ctrB.y,t.x,t.y)}}):r.forEach(function(t,e){e>0&&i.lineTo(t.x,t.y)}),i.lineTo(l.x,g),i.lineTo(s.x,g),i.lineTo(s.x,s.y)}else{var c=r[0];i.moveTo(c.x-h/2,c.y),i.lineTo(c.x+h/2,c.y),i.lineTo(c.x+h/2,g),i.lineTo(c.x-h/2,g),i.moveTo(c.x-h/2,c.y)}i.closePath(),i.fill(),o.addLine&&(i.beginPath(),i.setStrokeStyle(t.color),i.setLineWidth(o.width*e.pixelRatio),1===r.length?(i.moveTo(r[0].x,r[0].y),i.arc(r[0].x,r[0].y,1,0,2*Math.PI)):(i.moveTo(r[0].x,r[0].y),"curve"===o.type?r.forEach(function(t,e){if(e>0){var n=p(r,e-1);i.bezierCurveTo(n.ctrA.x,n.ctrA.y,n.ctrB.x,n.ctrB.y,t.x,t.y)}}):r.forEach(function(t,e){e>0&&i.lineTo(t.x,t.y)}),i.moveTo(r[0].x,r[0].y)),i.closePath(),i.stroke())},_=0;_<y.length;_++)x(_);if(!1!==e.dataPointShape){var m=n.dataPointShape[s%n.dataPointShape.length];tt(c,t.color,m,i,e)}}),!1!==e.dataLabel&&1===r&&t.forEach(function(t,o){var a=t.data,s=J(a,f,d,u,h,e,n,r);nt(s,t,n,i)}),i.restore(),{xAxisPoints:u,calPoints:v,eachSpacing:h}}function dt(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=e.extra.line||{type:"straight",width:2};o.type=o.type?o.type:"straight",o.width=o.width?o.width:2;var a=X(t,e,n),s=a.ranges,l=G(e.categories,e,n),c=l.xAxisPoints,u=l.eachSpacing,h=s.pop(),f=s.shift(),d=[];return i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&i.translate(e._scrollDistance_,0),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===r&&at(e.tooltip.offset.x,e,n,i),t.forEach(function(t,a){var s=t.data,l=J(s,h,f,c,u,e,n,r);d.push(l);var g=L(l);if(g.forEach(function(n,r){i.beginPath(),i.setStrokeStyle(t.color),i.setLineWidth(o.width*e.pixelRatio),1===n.length?(i.moveTo(n[0].x,n[0].y),i.arc(n[0].x,n[0].y,1,0,2*Math.PI)):(i.moveTo(n[0].x,n[0].y),"curve"===o.type?n.forEach(function(t,e){if(e>0){var r=p(n,e-1);i.bezierCurveTo(r.ctrA.x,r.ctrA.y,r.ctrB.x,r.ctrB.y,t.x,t.y)}}):n.forEach(function(t,e){e>0&&i.lineTo(t.x,t.y)}),i.moveTo(n[0].x,n[0].y)),i.closePath(),i.stroke()}),!1!==e.dataPointShape){var v=n.dataPointShape[a%n.dataPointShape.length];tt(l,t.color,v,i,e)}}),!1!==e.dataLabel&&1===r&&t.forEach(function(t,o){var a=t.data,s=J(a,h,f,c,u,e,n,r);nt(s,t,n,i)}),i.restore(),{xAxisPoints:c,calPoints:d,eachSpacing:u}}function gt(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=X(t,e,n),a=o.ranges,s=G(e.categories,e,n),l=s.xAxisPoints,c=s.eachSpacing,u=a.pop(),h=a.shift(),f=e.height-n.padding-n.xAxisHeight-n.legendHeight,d=[],g=0,v=0;if(t.forEach(function(t,e){"column"==t.type&&(v+=1)}),i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&i.translate(e._scrollDistance_,0),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===r&&at(e.tooltip.offset.x,e,n,i),t.forEach(function(t,o){var a=t.data,s=J(a,u,h,l,c,e,n,r);if(d.push(s),"column"==t.type&&(s=W(s,c,v,g,n,e),s.forEach(function(r,o){if(null!==r){i.beginPath(),i.setFillStyle(r.color||t.color);var a=r.x-r.width/2+1,s=e.height-r.y-n.padding-n.xAxisHeight-n.legendHeight;i.moveTo(a,r.y),i.rect(a,r.y,r.width-2,s),i.closePath(),i.fill()}}),g+=1),"area"==t.type)for(var y=L(s),x=function(n){var r=y[n];if(i.beginPath(),i.setStrokeStyle(t.color),i.setFillStyle(t.color),i.setGlobalAlpha(.2),i.setLineWidth(2*e.pixelRatio),r.length>1){m=r[0];var o=r[r.length-1];i.moveTo(m.x,m.y),"curve"===t.style?r.forEach(function(t,e){if(e>0){var n=p(r,e-1);i.bezierCurveTo(n.ctrA.x,n.ctrA.y,n.ctrB.x,n.ctrB.y,t.x,t.y)}}):r.forEach(function(t,e){e>0&&i.lineTo(t.x,t.y)}),i.lineTo(o.x,f),i.lineTo(m.x,f),i.lineTo(m.x,m.y)}else{var a=r[0];i.moveTo(a.x-c/2,a.y),i.lineTo(a.x+c/2,a.y),i.lineTo(a.x+c/2,f),i.lineTo(a.x-c/2,f),i.moveTo(a.x-c/2,a.y)}i.closePath(),i.fill(),i.setGlobalAlpha(1)},_=0;_<y.length;_++){var m;x(_)}if("line"==t.type){var b=L(s);b.forEach(function(n,r){i.beginPath(),i.setStrokeStyle(t.color),i.setLineWidth(2*e.pixelRatio),1===n.length?(i.moveTo(n[0].x,n[0].y),i.arc(n[0].x,n[0].y,1,0,2*Math.PI)):(i.moveTo(n[0].x,n[0].y),"curve"==t.style?n.forEach(function(t,e){if(e>0){var r=p(n,e-1);i.bezierCurveTo(r.ctrA.x,r.ctrA.y,r.ctrB.x,r.ctrB.y,t.x,t.y)}}):n.forEach(function(t,e){e>0&&i.lineTo(t.x,t.y)}),i.moveTo(n[0].x,n[0].y)),i.closePath(),i.stroke()})}if("point"==t.type){b=L(s);b.forEach(function(n,r){i.beginPath(),i.setStrokeStyle(t.color),i.setLineWidth(2*e.pixelRatio),i.moveTo(n[0].x,n[0].y),i.arc(n[0].x,n[0].y,1,0,2*Math.PI),i.closePath(),i.stroke()})}if(!1!==e.dataPointShape&&"column"!==t.type){var A=n.dataPointShape[o%n.dataPointShape.length];tt(s,t.color,A,i,e)}}),!1!==e.dataLabel&&1===r){g=0;t.forEach(function(t,o){var a=t.data,s=J(a,u,h,l,c,e,n,r);"column"!==t.type?nt(s,t,n,i):(s=W(s,c,v,g,n,e),nt(s,t,n,i),g+=1)})}return i.restore(),{xAxisPoints:l,calPoints:d,eachSpacing:c}}function vt(t,e,n,i,r,o){var a=t.extra.tooltip||{};a.horizentalLine&&t.tooltip&&1===i&&("line"==t.type||"area"==t.type||"column"==t.type||"candle"==t.type||"mix"==t.type)&&st(t,e,n,r,o),n.save(),t._scrollDistance_&&0!==t._scrollDistance_&&!0===t.enableScroll&&n.translate(t._scrollDistance_,0),t.tooltip&&t.tooltip.textList&&t.tooltip.textList.length&&1===i&&ct(t.tooltip.textList,t.tooltip.offset,t,e,n,r,o),n.restore()}function yt(t,e,n,i){var r=G(t,e,n),o=r.xAxisPoints,a=r.startX,s=r.endX,l=r.eachSpacing,c=e.height-n.padding-n.xAxisHeight-n.legendHeight,u=n.padding;if(e.enableScroll&&e.xAxis.scrollShow){var p=e.height-n.padding-n.legendHeight+6*e.pixelRatio,f=s-a,d=l*(o.length-1),g=f*f/d,v=0;e._scrollDistance_&&(v=-e._scrollDistance_*f/d),i.beginPath(),i.setLineCap("round"),i.setLineWidth(6*e.pixelRatio),i.setStrokeStyle(e.xAxis.scrollBackgroundColor||"#EFEBEF"),i.moveTo(a,p),i.lineTo(s,p),i.stroke(),i.closePath(),i.beginPath(),i.setLineCap("round"),i.setLineWidth(6*e.pixelRatio),i.setStrokeStyle(e.xAxis.scrollColor||"#A6A6A6"),i.moveTo(a+v,p),i.lineTo(a+v+g,p),i.stroke(),i.setLineCap("butt"),i.closePath()}if(i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&i.translate(e._scrollDistance_,0),i.beginPath(),i.setStrokeStyle(e.xAxis.gridColor||"#cccccc"),i.setLineCap("butt"),i.setLineWidth(1*e.pixelRatio),"dash"==e.xAxis.gridType&&i.setLineDash([e.xAxis.dashLength,e.xAxis.dashLength]),!0!==e.xAxis.disableGrid&&("calibration"===e.xAxis.type?o.forEach(function(t,n){n>0&&(i.moveTo(t-l/2,c),i.lineTo(t-l/2,c+4*e.pixelRatio))}):o.forEach(function(t,e){i.moveTo(t,c),i.lineTo(t,u)})),i.closePath(),i.stroke(),i.setLineDash([]),!0!==e.xAxis.disabled){var y=e.width-2*n.padding-n.yAxisWidth-n.yAxisTitleWidth,_=t.length;0===n._xAxisTextAngle_?e.xAxis.labelCount&&(_=e.xAxis.itemCount?Math.ceil(t.length/e.xAxis.itemCount*e.xAxis.labelCount):e.xAxis.labelCount,_-=1):_=Math.min(t.length,Math.ceil(y/n.fontSize/1.5));for(var m=Math.ceil(t.length/_),b=[],A=t.length,S=0;S<A;S++)S%m!==0?b.push(""):b.push(t[S]);b[A-1]=t[A-1],0===n._xAxisTextAngle_?b.forEach(function(t,r){var a=l/2-x(t)/2;i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle(e.xAxis.fontColor||"#666666"),i.fillText(t,o[r]+a,c+n.fontSize+5),i.closePath(),i.stroke()}):b.forEach(function(t,r){i.save(),i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle(e.xAxis.fontColor||"#666666");var a=x(t),s=l/2-a,u=h(o[r]+l/2,c+n.fontSize/2+5,e.height),p=u.transX,f=u.transY;i.rotate(-1*n._xAxisTextAngle_),i.translate(p,f),i.fillText(t,o[r]+s,c+n.fontSize+5),i.closePath(),i.stroke(),i.restore()})}i.restore()}function xt(t,e,n,i){if(!0!==e.yAxis.disableGrid){for(var r=e.height-2*n.padding-n.xAxisHeight-n.legendHeight,o=Math.floor(r/n.yAxisSplit),a=n.yAxisWidth+n.yAxisTitleWidth,s=n.padding+a,l=G(t,e,n),c=l.xAxisPoints,u=l.eachSpacing,h=u*(c.length-1),p=s+h,f=[],d=0;d<n.yAxisSplit;d++)f.push(n.padding+o*d);f.push(n.padding+o*n.yAxisSplit+2),i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&i.translate(e._scrollDistance_,0),"dash"==e.yAxis.gridType&&i.setLineDash([e.yAxis.dashLength,e.yAxis.dashLength]),i.beginPath(),i.setStrokeStyle(e.yAxis.gridColor||"#cccccc"),i.setLineWidth(1*e.pixelRatio),f.forEach(function(t,e){i.moveTo(s,t),i.lineTo(p,t)}),i.closePath(),i.stroke(),i.setLineDash([]),i.restore()}}function _t(t,e,n,i){if(!0!==e.yAxis.disabled){var r=X(t,e,n),o=r.rangesFormat,a=n.yAxisWidth+n.yAxisTitleWidth,s=e.height-2*n.padding-n.xAxisHeight-n.legendHeight,l=Math.floor(s/n.yAxisSplit),c=n.padding+a,u=e.width-n.padding,h=e.height-n.padding-n.xAxisHeight-n.legendHeight+n.xAxisTextPadding;i.beginPath(),i.setFillStyle(e.background||"#ffffff"),e._scrollDistance_<0&&i.fillRect(0,0,c,h+n.xAxisHeight),i.fillRect(u,0,e.width,h+n.xAxisHeight),i.closePath(),i.stroke();for(var p=[],f=0;f<=n.yAxisSplit;f++)p.push(n.padding+l*f);o.forEach(function(t,r){var o=p[r]?p[r]:h;i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle(e.yAxis.fontColor||"#666666"),i.fillText(t,n.padding+n.yAxisTitleWidth,o+n.fontSize/2),i.closePath(),i.stroke()}),e.yAxis.title&&ut(e.yAxis.title,e,n,i)}}function mt(t,e,n,i){if(!1!==e.legend){var r=M(t,e,n),o=r.legendList,a=5*e.pixelRatio,s=10*e.pixelRatio,l=15*e.pixelRatio;o.forEach(function(t,r){for(var o=0,c=0;c<t.length;c++){var u=t[c];u.name=u.name||"undefined",o+=3*a+x(u.name)+l}var h=(e.width-o)/2+a,p=e.height-n.padding-n.legendHeight+r*(n.fontSize+s)+a+s;i.setFontSize(n.fontSize);for(var f=0;f<t.length;f++){var d=t[f];switch(e.type){case"line":i.beginPath(),i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(d.color),i.setFillStyle(d.color),i.moveTo(h+7.5*e.pixelRatio,p+5*e.pixelRatio),i.arc(h+7.5*e.pixelRatio,p+5*e.pixelRatio,6*e.pixelRatio,0,2*Math.PI),i.closePath(),i.fill(),i.stroke();break;case"pie":i.beginPath(),i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(d.color),i.setFillStyle(d.color),i.moveTo(h+7.5*e.pixelRatio,p+5*e.pixelRatio),i.arc(h+7.5*e.pixelRatio,p+5*e.pixelRatio,6*e.pixelRatio,0,2*Math.PI),i.closePath(),i.fill(),i.stroke();break;case"ring":case"rose":i.beginPath(),i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(d.color),i.setFillStyle(d.color),i.moveTo(h+7.5*e.pixelRatio,p+5*e.pixelRatio),i.arc(h+7.5*e.pixelRatio,p+5*e.pixelRatio,6*e.pixelRatio,0,2*Math.PI),i.closePath(),i.fill(),i.stroke();break;case"gauge":break;case"arcbar":break;default:i.beginPath(),i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(d.color),i.setFillStyle(d.color),i.moveTo(h,p),i.fillRect(h,p,15*e.pixelRatio,10*e.pixelRatio),i.closePath(),i.fill(),i.stroke()}h+=a+l,i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle(e.extra.legendTextColor||"#333333"),i.fillText(d.name,h,p+6*e.pixelRatio+3*e.pixelRatio),i.closePath(),i.stroke(),h+=x(d.name)+2*a}})}}function bt(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=e.extra.pie||{},s={x:e.width/2,y:(e.height-n.legendHeight)/2},l=Math.min(s.x-n.pieChartLinePadding-n.pieChartTextPadding-n._pieTextMaxLength_,s.y-n.pieChartLinePadding-n.pieChartTextPadding);e.dataLabel?l-=10:l-=2*n.padding,t=F(t,l,r);var c=n.pieChartLinePadding/2;if(t=t.map(function(t){return t._start_+=(o.offsetAngle||0)*Math.PI/180,t}),t.forEach(function(t,n){e.tooltip&&e.tooltip.index==n&&(i.beginPath(),i.setFillStyle(a(t.color,e.extra.pie.activeOpacity||.5)),i.moveTo(s.x,s.y),i.arc(s.x,s.y,t._radius_+c,t._start_,t._start_+2*t._proportion_*Math.PI),i.closePath(),i.fill()),i.beginPath(),i.setLineWidth(2*e.pixelRatio),i.lineJoin="round",i.setStrokeStyle("#ffffff"),i.setFillStyle(t.color),i.moveTo(s.x,s.y),i.arc(s.x,s.y,t._radius_,t._start_,t._start_+2*t._proportion_*Math.PI),i.closePath(),i.fill(),!0!==e.disablePieStroke&&i.stroke()}),"ring"===e.type){var u=.6*l;"number"===typeof e.extra.pie.ringWidth&&e.extra.pie.ringWidth>0&&(u=Math.max(0,l-e.extra.pie.ringWidth)),i.beginPath(),i.setFillStyle(e.background||"#ffffff"),i.moveTo(s.x,s.y),i.arc(s.x,s.y,u,0,2*Math.PI),i.closePath(),i.fill()}if(!1!==e.dataLabel&&1===r){for(var h=!1,p=0,f=t.length;p<f;p++)if(t[p].data>0){h=!0;break}h&&ot(t,e,n,i,l,s)}return 1===r&&"ring"===e.type&&et(e,n,i),{center:s,radius:l,series:t}}function At(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=e.extra.rose||{};o.type=o.type||"area";var s={x:e.width/2,y:(e.height-n.legendHeight)/2},l=Math.min(s.x-n.pieChartLinePadding-n.pieChartTextPadding-n._pieTextMaxLength_,s.y-n.pieChartLinePadding-n.pieChartTextPadding);e.dataLabel?l-=10:l-=2*n.padding;var c=o.minRadius||.5*l;t=j(t,o.type,c,l,r);var u=n.pieChartLinePadding/2;if(t=t.map(function(t){return t._start_+=(o.offsetAngle||0)*Math.PI/180,t}),t.forEach(function(t,n){e.tooltip&&e.tooltip.index==n&&(i.beginPath(),i.setFillStyle(a(t.color,o.activeOpacity||.5)),i.moveTo(s.x,s.y),i.arc(s.x,s.y,u+t._radius_,t._start_,t._start_+2*t._proportion_*Math.PI),i.closePath(),i.fill()),i.beginPath(),i.setLineWidth(2*e.pixelRatio),i.lineJoin="round",i.setStrokeStyle("#ffffff"),i.setFillStyle(t.color),i.moveTo(s.x,s.y),i.arc(s.x,s.y,t._radius_,t._start_,t._start_+2*t._proportion_*Math.PI),i.closePath(),i.fill(),!0!==e.disablePieStroke&&i.stroke()}),!1!==e.dataLabel&&1===r){for(var h=!1,p=0,f=t.length;p<f;p++)if(t[p].data>0){h=!0;break}h&&ot(t,e,n,i,l,s)}return{center:s,radius:l,series:t}}function St(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=e.extra.arcbar||{};o.startAngle=o.startAngle?o.startAngle:.75,o.endAngle=o.endAngle?o.endAngle:.25,o.type=o.type?o.type:"default",t=B(t,o,r);var a={x:e.width/2,y:e.height/2},s=Math.min(a.x,a.y);"number"===typeof o.width&&o.width>0?o.width=o.width:o.width=12*e.pixelRatio,s-=n.padding+o.width/2,i.setLineWidth(o.width),i.setStrokeStyle(o.backgroundColor||"#E9E9E9"),i.setLineCap("round"),i.beginPath(),"default"==o.type?i.arc(a.x,a.y,s,o.startAngle*Math.PI,o.endAngle*Math.PI,!1):i.arc(a.x,a.y,s,0,2*Math.PI,!1),i.stroke();for(var l=0;l<t.length;l++){var c=t[l];i.setLineWidth(o.width),i.setStrokeStyle(c.color),i.setLineCap("round"),i.beginPath(),i.arc(a.x,a.y,s,o.startAngle*Math.PI,c._proportion_*Math.PI,!1),i.stroke()}return et(e,n,i),{center:a,radius:s,series:t}}function wt(t,e,n,i,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,a=n.extra.gauge||{};a.startAngle=a.startAngle?a.startAngle:.75,void 0==a.oldAngle&&(a.oldAngle=a.startAngle),void 0==a.oldData&&(a.oldData=0),a.endAngle=a.endAngle?a.endAngle:.25,t=N(t,a.startAngle,a.endAngle);var s={x:n.width/2,y:n.height/2},l=Math.min(s.x,s.y);"number"===typeof a.width&&a.width>0?a.width=a.width:a.width=15*n.pixelRatio,l-=i.padding+a.width/2;var c=l-a.width;r.setLineWidth(a.width),r.setLineCap("butt");for(var u=0;u<t.length;u++){var h=t[u];r.beginPath(),r.setStrokeStyle(h.color),r.arc(s.x,s.y,l,h._startAngle_*Math.PI,h._endAngle_*Math.PI,!1),r.stroke()}r.save();var p=a.startAngle-a.endAngle+1;a.splitLine.fixRadius=a.splitLine.fixRadius?a.splitLine.fixRadius:0,a.splitLine.splitNumber=a.splitLine.splitNumber?a.splitLine.splitNumber:10,a.splitLine.width=a.splitLine.width?a.splitLine.width:15*n.pixelRatio,a.splitLine.color=a.splitLine.color?a.splitLine.color:"#FFFFFF",a.splitLine.childNumber=a.splitLine.childNumber?a.splitLine.childNumber:5,a.splitLine.childWidth=a.splitLine.childWidth?a.splitLine.childWidth:5*n.pixelRatio;var f=p/a.splitLine.splitNumber,d=p/a.splitLine.splitNumber/a.splitLine.childNumber,g=-l-.5*a.width-a.splitLine.fixRadius,v=-l-.5*a.width-a.splitLine.fixRadius+a.splitLine.width,y=-l-.5*a.width-a.splitLine.fixRadius+a.splitLine.childWidth;r.translate(s.x,s.y),r.rotate((a.startAngle-1)*Math.PI);for(var x=0;x<a.splitLine.splitNumber+1;x++)r.beginPath(),r.setStrokeStyle(a.splitLine.color),r.setLineWidth(2*n.pixelRatio),r.moveTo(g,0),r.lineTo(v,0),r.stroke(),r.rotate(f*Math.PI);r.restore(),r.save(),r.translate(s.x,s.y),r.rotate((a.startAngle-1)*Math.PI);for(var _=0;_<a.splitLine.splitNumber*a.splitLine.childNumber+1;_++)r.beginPath(),r.setStrokeStyle(a.splitLine.color),r.setLineWidth(1*n.pixelRatio),r.moveTo(g,0),r.lineTo(y,0),r.stroke(),r.rotate(d*Math.PI);r.restore(),a.pointer.width=a.pointer.width?a.pointer.width:15*n.pixelRatio,void 0==a.pointer.color||"auto"==a.pointer.color?a.pointer.color:(a.pointer.color,a.pointer.color),e=H(e,t,a,o);for(var m=0;m<e.length;m++){var b=e[m];r.save(),r.translate(s.x,s.y),r.rotate((b._proportion_-1)*Math.PI),r.beginPath(),r.setFillStyle(b.color),r.moveTo(a.pointer.width,0),r.lineTo(0,-a.pointer.width/2),r.lineTo(-c,0),r.lineTo(0,a.pointer.width/2),r.lineTo(a.pointer.width,0),r.closePath(),r.fill(),r.beginPath(),r.setFillStyle("#FFFFFF"),r.arc(0,0,a.pointer.width/6,0,2*Math.PI,!1),r.fill(),r.restore()}return!1!==n.dataLabel&&it(a,l,s,n,i,r),et(n,i,r),1===o&&"gauge"===n.type&&(a.oldAngle=e[0]._proportion_,a.oldData=e[0].data),{center:s,radius:l,innerRadius:c,categories:t,totalAngle:p}}function Tt(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=e.extra.radar||{},a=w(e.categories.length),s={x:e.width/2,y:(e.height-n.legendHeight)/2},l=Math.min(s.x-(S(e.categories)+n.radarLabelTextMargin),s.y-n.radarLabelTextMargin);l-=n.padding,i.beginPath(),i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(o.gridColor||"#cccccc"),a.forEach(function(t){var e=f(l*Math.cos(t),l*Math.sin(t),s);i.moveTo(s.x,s.y),i.lineTo(e.x,e.y)}),i.stroke(),i.closePath();for(var c=function(t){var r={};i.beginPath(),i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(o.gridColor||"#cccccc"),a.forEach(function(e,o){var a=f(l/n.radarGridCount*t*Math.cos(e),l/n.radarGridCount*t*Math.sin(e),s);0===o?(r=a,i.moveTo(a.x,a.y)):i.lineTo(a.x,a.y)}),i.lineTo(r.x,r.y),i.stroke(),i.closePath()},u=1;u<=n.radarGridCount;u++)c(u);var h=I(a,s,l,t,e,r);return h.forEach(function(t,r){if(i.beginPath(),i.setFillStyle(t.color),i.setGlobalAlpha(.3),t.data.forEach(function(t,e){0===e?i.moveTo(t.position.x,t.position.y):i.lineTo(t.position.x,t.position.y)}),i.closePath(),i.fill(),i.setGlobalAlpha(1),!1!==e.dataPointShape){var o=n.dataPointShape[r%n.dataPointShape.length],a=t.data.map(function(t){return t.position});tt(a,t.color,o,i,e)}}),rt(a,l,s,e,n,i),{center:s,radius:l,angleList:a}}function Pt(t,e){e.draw()}var kt={easeIn:function(t){return Math.pow(t,3)},easeOut:function(t){return Math.pow(t-1,3)+1},easeInOut:function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},linear:function(t){return t}};function Ot(t){this.isStop=!1,t.duration="undefined"===typeof t.duration?1e3:t.duration,t.timing=t.timing||"linear";var e=17,n=function(){return"undefined"!==typeof requestAnimationFrame?requestAnimationFrame:"undefined"!==typeof setTimeout?function(t,e){setTimeout(function(){var e=+new Date;t(e)},e)}:function(t){t(null)}},i=n(),r=null,o=function(n){if(null===n||!0===this.isStop)return t.onProcess&&t.onProcess(1),void(t.onAnimationFinish&&t.onAnimationFinish());if(null===r&&(r=n),n-r<t.duration){var a=(n-r)/t.duration,s=kt[t.timing];a=s(a),t.onProcess&&t.onProcess(a),i(o,e)}else t.onProcess&&t.onProcess(1),t.onAnimationFinish&&t.onAnimationFinish()};o=o.bind(this),i(o,e)}function Rt(t,e,n,i){var o=this,a=e.series,s=e.categories;a=g(a,n),a=v(a,e);var c=null;if("candle"==t){var u=r({},e.extra.candle.average);u.show&&(c=l(u.day,u.name,u.color,a[0].data),e.seriesMA=c)}var h=M(a,e,n),p=h.legendHeight;n.legendHeight=p;var f=X(a,e,n),d=f.yAxisWidth;if(n.yAxisWidth=d,s&&s.length){var y=E(s,e,n),x=y.xAxisHeight,_=y.angle;n.xAxisHeight=x,n._xAxisTextAngle_=_}"pie"!==t&&"ring"!==t&&"rose"!==t||(n._pieTextMaxLength_=!1===e.dataLabel?0:z(a));var m=e.animation?1e3:0;switch(this.animationInstance&&this.animationInstance.stop(),i.clearRect(0,0,e.width,e.height),t){case"line":this.animationInstance=new Ot({timing:"easeIn",duration:m,onProcess:function(t){e.rotate&&K(i,e),xt(s,e,n,i),yt(s,e,n,i);var r=dt(a,e,n,i,t),l=r.xAxisPoints,c=r.calPoints,u=r.eachSpacing;o.chartData.xAxisPoints=l,o.chartData.calPoints=c,o.chartData.eachSpacing=u,mt(e.series,e,n,i),_t(a,e,n,i),vt(e,n,i,t,u,l),Pt(e,i)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"mix":this.animationInstance=new Ot({timing:"easeIn",duration:m,onProcess:function(t){e.rotate&&K(i,e),xt(s,e,n,i),yt(s,e,n,i);var r=gt(a,e,n,i,t),l=r.xAxisPoints,c=r.calPoints,u=r.eachSpacing;o.chartData.xAxisPoints=l,o.chartData.calPoints=c,o.chartData.eachSpacing=u,mt(e.series,e,n,i),_t(a,e,n,i),vt(e,n,i,t,u,l),Pt(e,i)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"column":this.animationInstance=new Ot({timing:"easeIn",duration:m,onProcess:function(t){e.rotate&&K(i,e),xt(s,e,n,i),yt(s,e,n,i);var r=ht(a,e,n,i,t),l=r.xAxisPoints,c=r.calPoints,u=r.eachSpacing;o.chartData.xAxisPoints=l,o.chartData.calPoints=c,o.chartData.eachSpacing=u,mt(e.series,e,n,i),_t(a,e,n,i),vt(e,n,i,t,u,l),Pt(e,i)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"area":this.animationInstance=new Ot({timing:"easeIn",duration:m,onProcess:function(t){e.rotate&&K(i,e),xt(s,e,n,i),yt(s,e,n,i);var r=ft(a,e,n,i,t),l=r.xAxisPoints,c=r.calPoints,u=r.eachSpacing;o.chartData.xAxisPoints=l,o.chartData.calPoints=c,o.chartData.eachSpacing=u,mt(e.series,e,n,i),_t(a,e,n,i),vt(e,n,i,t,u,l),Pt(e,i)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"ring":case"pie":this.animationInstance=new Ot({timing:"easeInOut",duration:m,onProcess:function(t){e.rotate&&K(i,e),o.chartData.pieData=bt(a,e,n,i,t),mt(e.series,e,n,i),vt(e,n,i,t),Pt(e,i)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"rose":this.animationInstance=new Ot({timing:"easeInOut",duration:m,onProcess:function(t){e.rotate&&K(i,e),o.chartData.pieData=At(a,e,n,i,t),mt(e.series,e,n,i),vt(e,n,i,t),Pt(e,i)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"radar":this.animationInstance=new Ot({timing:"easeInOut",duration:m,onProcess:function(t){e.rotate&&K(i,e),o.chartData.radarData=Tt(a,e,n,i,t),mt(e.series,e,n,i),vt(e,n,i,t),Pt(e,i)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"arcbar":this.animationInstance=new Ot({timing:"easeInOut",duration:m,onProcess:function(t){e.rotate&&K(i,e),o.chartData.arcbarData=St(a,e,n,i,t),Pt(e,i)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"gauge":this.animationInstance=new Ot({timing:"easeInOut",duration:m,onProcess:function(t){e.rotate&&K(i,e),o.chartData.gaugeData=wt(s,a,e,n,i,t),Pt(e,i)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"candle":this.animationInstance=new Ot({timing:"easeIn",duration:m,onProcess:function(t){e.rotate&&K(i,e),xt(s,e,n,i),yt(s,e,n,i);var r=pt(a,c,e,n,i,t),l=r.xAxisPoints,u=r.calPoints,h=r.eachSpacing;o.chartData.xAxisPoints=l,o.chartData.calPoints=u,o.chartData.eachSpacing=h,mt(c||e.series,e,n,i),_t(a,e,n,i),vt(e,n,i,t,h,l),Pt(e,i)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break}}function Dt(){this.events={}}Ot.prototype.stop=function(){this.isStop=!0},Dt.prototype.addEventListener=function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)},Dt.prototype.trigger=function(){for(var t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];var r=n[0],o=n.slice(1);this.events[r]&&this.events[r].forEach(function(t){try{t.apply(null,o)}catch(n){console.error(e(n," at components/leiqch-ucharts/js/u-charts.js:3612"))}})};var Ct=function(t){t.fontSize=t.fontSize?t.fontSize*t.pixelRatio:13*t.pixelRatio,t.title=t.title||{},t.subtitle=t.subtitle||{},t.yAxis=t.yAxis||{},t.yAxis.gridType=t.yAxis.gridType?t.yAxis.gridType:"solid",t.yAxis.dashLength=t.yAxis.dashLength?t.yAxis.dashLength:4*t.pixelRatio,t.xAxis=t.xAxis||{},t.xAxis.rotateLabel=!!t.xAxis.rotateLabel,t.xAxis.type=t.xAxis.type?t.xAxis.type:"calibration",t.xAxis.gridType=t.xAxis.gridType?t.xAxis.gridType:"solid",t.xAxis.dashLength=t.xAxis.dashLength?t.xAxis.dashLength:4*t.pixelRatio,t.xAxis.scrollAlign=t.xAxis.scrollAlign?t.xAxis.scrollAlign:"left",t.extra=t.extra||{},t.legend=!1!==t.legend,t.rotate=!!t.rotate,t.animation=!1!==t.animation;var e=r({},i);if(e.yAxisTitleWidth=!0!==t.yAxis.disabled&&t.yAxis.title?e.yAxisTitleWidth:0,"pie"!=t.type&&"ring"!=t.type||(e.pieChartLinePadding=!1===t.dataLabel?0:t.extra.pie.lableWidth*t.pixelRatio||e.pieChartLinePadding*t.pixelRatio),e.pieChartTextPadding=!1===t.dataLabel?0:e.pieChartTextPadding*t.pixelRatio,e.yAxisSplit=t.yAxis.splitNumber?t.yAxis.splitNumber:i.yAxisSplit,e.rotate=t.rotate,t.rotate){var o=t.width,a=t.height;t.width=a,t.height=o}if(e.yAxisWidth=i.yAxisWidth*t.pixelRatio,e.xAxisHeight=i.xAxisHeight*t.pixelRatio,t.enableScroll&&t.xAxis.scrollShow&&(e.xAxisHeight+=6*t.pixelRatio),e.xAxisLineHeight=i.xAxisLineHeight*t.pixelRatio,e.legendHeight=i.legendHeight*t.pixelRatio,e.padding=i.padding*t.pixelRatio,e.fontSize=t.fontSize,e.titleFontSize=i.titleFontSize*t.pixelRatio,e.subtitleFontSize=i.subtitleFontSize*t.pixelRatio,e.toolTipPadding=i.toolTipPadding*t.pixelRatio,e.toolTipLineHeight=i.toolTipLineHeight*t.pixelRatio,e.columePadding=i.columePadding*t.pixelRatio,i.pixelRatio=t.pixelRatio,i.fontSize=t.fontSize,i.rotate=t.rotate,this.opts=t,this.config=e,t.$this=t.$this?t.$this:this,this.context=n.createCanvasContext(t.canvasId,t.$this),this.chartData={},this.event=new Dt,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0},t.enableScroll&&"right"==t.xAxis.scrollAlign){var s=X(t.series,t,e),l=s.yAxisWidth;e.yAxisWidth=l;var c=0,u=G(t.categories,t,e),h=u.xAxisPoints,p=u.startX,f=u.endX,d=u.eachSpacing,g=d*(h.length-1),v=f-p;c=v-g,this.scrollOption={currentOffset:c,startTouchX:c,distance:0,lastMoveTime:0},t._scrollDistance_=c}Rt.call(this,t.type,t,e,this.context)};Ct.prototype.updateData=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.opts=r({},this.opts,t),this.opts.yAxis.format=t.unit?function(e){return e.toFixed(t.fixed||0)+(t.unit||"")}:this.opts.yAxis.format;var e=t.scrollPosition||"current";switch(e){case"current":this.opts._scrollDistance_=this.scrollOption.currentOffset;break;case"left":this.opts._scrollDistance_=0,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0};break;case"right":var n=X(this.opts.series,this.opts,this.config),i=n.yAxisWidth;this.config.yAxisWidth=i;var o=0,a=G(this.opts.categories,this.opts,this.config),s=a.xAxisPoints,l=a.startX,c=a.endX,u=a.eachSpacing,h=u*(s.length-1),p=c-l;o=p-h,this.scrollOption={currentOffset:o,startTouchX:o,distance:0,lastMoveTime:0},this.opts._scrollDistance_=o;break}var f=void 0==t.animation?this.opts.animation:t.animation;this.opts.animation=f,this.opts.title=r({},this.opts.title,t.title||{}),this.opts.subtitle=r({},this.opts.subtitle,t.subtitle||{}),Rt.call(this,this.opts.type,this.opts,this.config,this.context)},Ct.prototype.zoom=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.opts.xAxis.itemCount;if(!0===this.opts.enableScroll){var n=Math.round(Math.abs(this.scrollOption.currentOffset)/this.chartData.eachSpacing)+Math.round(this.opts.xAxis.itemCount/2);this.opts.animation=!1,this.opts.xAxis.itemCount=t.itemCount;var i=X(this.opts.series,this.opts,this.config),r=i.yAxisWidth;this.config.yAxisWidth=r;var o=0,a=G(this.opts.categories,this.opts,this.config),s=a.xAxisPoints,l=a.startX,c=a.endX,u=a.eachSpacing,h=u*n,p=c-l,f=p-u*(s.length-1);o=p/2-h,o>0&&(o=0),o<f&&(o=f),this.scrollOption={currentOffset:o,startTouchX:o,distance:0,lastMoveTime:0},this.opts._scrollDistance_=o,Rt.call(this,this.opts.type,this.opts,this.config,this.context)}else console.log(e("请启用滚动条后使用！"," at components/leiqch-ucharts/js/u-charts.js:3768"))},Ct.prototype.stopAnimation=function(){this.animationInstance&&this.animationInstance.stop()},Ct.prototype.addEventListener=function(t,e){this.event.addEventListener(t,e)},Ct.prototype.getCurrentDataIndex=function(t){var e=t.mp.changedTouches[0]||t.changedTouches[0];if(e){var n=b(e,this.opts,t);return"pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type?C({x:n.x,y:n.y},this.chartData.pieData):"radar"===this.opts.type?D({x:n.x,y:n.y},this.chartData.radarData,this.opts.categories.length):O({x:n.x,y:n.y},this.chartData.xAxisPoints,this.opts,this.config,Math.abs(this.scrollOption.currentOffset))}return-1},Ct.prototype.showToolTip=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.mp.changedTouches[0]||t.changedTouches[0],i=b(n,this.opts,t);if("line"===this.opts.type||"area"===this.opts.type||"column"===this.opts.type){var o=this.getCurrentDataIndex(t),a=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:a,animation:!1});if(o>-1){var l=A(this.opts.series,o);if(0!==l.length){var c=T(l,this.chartData.calPoints,o,this.opts.categories,e),u=c.textList,h=c.offset;h.y=i.y,s.tooltip={textList:u,offset:h,option:e,index:o}}}Rt.call(this,s.type,s,this.config,this.context)}if("mix"===this.opts.type){o=this.getCurrentDataIndex(t),a=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:a,animation:!1});if(o>-1){l=A(this.opts.series,o);if(0!==l.length){var p=P(l,this.chartData.calPoints,o,this.opts.categories,e);u=p.textList,h=p.offset;h.y=i.y,s.tooltip={textList:u,offset:h,option:e,index:o}}}Rt.call(this,s.type,s,this.config,this.context)}if("candle"===this.opts.type){o=this.getCurrentDataIndex(t),a=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:a,animation:!1});if(o>-1){l=A(this.opts.series,o);if(0!==l.length){c=k(this.opts.series[0].data,l,this.chartData.calPoints,o,this.opts.categories,this.opts.extra.candle,e),u=c.textList,h=c.offset;h.y=i.y,s.tooltip={textList:u,offset:h,option:e,index:o}}}Rt.call(this,s.type,s,this.config,this.context)}if("pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type){o=this.getCurrentDataIndex(t),a=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:a,animation:!1});if(o>-1){l=this.opts.series[o],u=[{text:e.format?e.format(l):l.name+": "+l.data,color:l.color}],h={x:i.x,y:i.y};s.tooltip={textList:u,offset:h,option:e,index:o}}Rt.call(this,s.type,s,this.config,this.context)}if("radar"===this.opts.type){o=this.getCurrentDataIndex(t),a=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:a,animation:!1});if(o>-1){l=A(this.opts.series,o);if(0!==l.length){u=l.map(function(t){return{text:e.format?e.format(t):t.name+": "+t.data,color:t.color}}),h={x:i.x,y:i.y};s.tooltip={textList:u,offset:h,option:e,index:o}}}Rt.call(this,s.type,s,this.config,this.context)}},Ct.prototype.translate=function(t){this.scrollOption={currentOffset:t,startTouchX:t,distance:0,lastMoveTime:0};var e=r({},this.opts,{_scrollDistance_:t,animation:!1});Rt.call(this,this.opts.type,e,this.config,this.context)},Ct.prototype.scrollStart=function(t){var e=t.mp.changedTouches[0]||t.changedTouches[0],n=b(e,this.opts,t);e&&!0===this.opts.enableScroll&&(e.x?this.scrollOption.startTouchX=n.x:this.scrollOption.startTouchX=n.clientX)},Ct.prototype.scroll=function(t){0===this.scrollOption.lastMoveTime&&(this.scrollOption.lastMoveTime=Date.now());var e=this.opts.extra.touchMoveLimit||20,n=Date.now(),i=n-this.scrollOption.lastMoveTime;if(!(i<Math.floor(1e3/e))){this.scrollOption.lastMoveTime=n;var o=t.mp.changedTouches[0]||t.changedTouches[0],a=b(o,this.opts,t);if(o&&!0===this.opts.enableScroll){var s;s=o.x?a.x-this.scrollOption.startTouchX:a.clientX-this.scrollOption.startTouchX;var l=this.scrollOption.currentOffset,u=c(l+s,this.chartData,this.config,this.opts);this.scrollOption.distance=s=u-l;var h=r({},this.opts,{_scrollDistance_:l+s,animation:!1});return Rt.call(this,h.type,h,this.config,this.context),l+s}}},Ct.prototype.scrollEnd=function(t){if(!0===this.opts.enableScroll){var e=this.scrollOption,n=e.currentOffset,i=e.distance;this.scrollOption.currentOffset=n+i,this.scrollOption.distance=0}},t.exports=Ct}).call(this,n("0de9")["default"],n("6e42")["default"])}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/book/book';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/book/book.js';

define('components/book/book.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/book/book"], {
  "2e11": function e11(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("3543"),
        o = e.n(u);

    for (var r in u) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(r);
    }

    t["default"] = o.a;
  },
  "2fb8": function fb8(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("3c95"),
        o = e("2e11");

    for (var r in o) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return o[n];
        });
      }(r);
    }

    e("4dba");
    var a = e("2877"),
        c = Object(a["a"])(o["default"], u["a"], u["b"], !1, null, null, null);
    t["default"] = c.exports;
  },
  3543: function _(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      props: ["book"],
      data: function data() {
        return {
          showLike: !0
        };
      }
    };
    t.default = u;
  },
  "3c95": function c95(n, t, e) {
    "use strict";

    var u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        o = [];

    e.d(t, "a", function () {
      return u;
    }), e.d(t, "b", function () {
      return o;
    });
  },
  "4dba": function dba(n, t, e) {
    "use strict";

    var u = e("5106"),
        o = e.n(u);
    o.a;
  },
  5106: function _(n, t, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/book/book-create-component', {
  'components/book/book-create-component': function componentsBookBookCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("2fb8"));
  }
}, [['components/book/book-create-component']]]);
});
require('components/book/book.js');
__wxRoute = 'components/like/like';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/like/like.js';

define('components/like/like.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/like/like"], {
  3977: function _(t, n, a) {
    "use strict";

    a.r(n);
    var e = a("a308"),
        i = a.n(e);

    for (var u in e) {
      "default" !== u && function (t) {
        a.d(n, t, function () {
          return e[t];
        });
      }(u);
    }

    n["default"] = i.a;
  },
  "4e09": function e09(t, n, a) {
    "use strict";

    var e = function e() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        i = [];

    a.d(n, "a", function () {
      return e;
    }), a.d(n, "b", function () {
      return i;
    });
  },
  "58a2": function a2(t, n, a) {},
  "8c64": function c64(t, n, a) {
    "use strict";

    a.r(n);
    var e = a("4e09"),
        i = a("3977");

    for (var u in i) {
      "default" !== u && function (t) {
        a.d(n, t, function () {
          return i[t];
        });
      }(u);
    }

    a("da48");
    var c = a("2877"),
        r = Object(c["a"])(i["default"], e["a"], e["b"], !1, null, null, null);
    n["default"] = r.exports;
  },
  a308: function a308(t, n, a) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var e = {
      props: ["like", "count", "readOnly"],
      data: function data() {
        return {
          yesSrc: a("c238"),
          noSrc: a("be4d"),
          likeData: null,
          countData: null
        };
      },
      computed: {
        src: function src() {
          return this.likeData ? this.yesSrc : this.noSrc;
        }
      },
      created: function created() {
        this.likeData = this.like, this.countData = this.count;
      },
      methods: {
        onLike: function onLike() {
          this.readOnly || (this.likeData = !this.likeData, this.countData = this.likeData ? this.countData-- : this.countData++, this.$emit("like", {
            behavior: this.likeData ? "like" : "cancel"
          }));
        }
      }
    };
    n.default = e;
  },
  da48: function da48(t, n, a) {
    "use strict";

    var e = a("58a2"),
        i = a.n(e);
    i.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/like/like-create-component', {
  'components/like/like-create-component': function componentsLikeLikeCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("8c64"));
  }
}, [['components/like/like-create-component']]]);
});
require('components/like/like.js');
__wxRoute = 'components/preview/preview';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/preview/preview.js';

define('components/preview/preview.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/preview/preview"], {
  "271a": function a(n, e, t) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;

    var u = function u() {
      return Promise.all([t.e("common/vendor"), t.e("components/like/like")]).then(t.bind(null, "8c64"));
    },
        r = function r() {
      return t.e("components/tag/tag").then(t.bind(null, "14b0"));
    },
        o = {
      props: ["classic"],
      data: function data() {
        return {
          typeText: ""
        };
      },
      components: {
        VLike: u,
        VTag: r
      }
    };

    e.default = o;
  },
  "4ac6": function ac6(n, e, t) {
    "use strict";

    var u = t("60be"),
        r = t.n(u);
    r.a;
  },
  "60be": function be(n, e, t) {},
  b5c2: function b5c2(n, e, t) {
    "use strict";

    t.r(e);
    var u = t("b8e1"),
        r = t("e931");

    for (var o in r) {
      "default" !== o && function (n) {
        t.d(e, n, function () {
          return r[n];
        });
      }(o);
    }

    t("4ac6");
    var a = t("2877"),
        c = Object(a["a"])(r["default"], u["a"], u["b"], !1, null, null, null);
    e["default"] = c.exports;
  },
  b8e1: function b8e1(n, e, t) {
    "use strict";

    var u = function u() {
      var n = this,
          e = n.$createElement;
      n._self._c;
    },
        r = [];

    t.d(e, "a", function () {
      return u;
    }), t.d(e, "b", function () {
      return r;
    });
  },
  e931: function e931(n, e, t) {
    "use strict";

    t.r(e);
    var u = t("271a"),
        r = t.n(u);

    for (var o in u) {
      "default" !== o && function (n) {
        t.d(e, n, function () {
          return u[n];
        });
      }(o);
    }

    e["default"] = r.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/preview/preview-create-component', {
  'components/preview/preview-create-component': function componentsPreviewPreviewCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("b5c2"));
  }
}, [['components/preview/preview-create-component']]]);
});
require('components/preview/preview.js');
__wxRoute = 'components/ss-upload-image/ss-upload-image';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/ss-upload-image/ss-upload-image.js';

define('components/ss-upload-image/ss-upload-image.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/ss-upload-image/ss-upload-image"], {
  "2d90": function d90(e, t, n) {
    "use strict";

    var a = n("ccf4"),
        u = n.n(a);
    u.a;
  },
  "8fe5": function fe5(e, t, n) {
    "use strict";

    n.r(t);
    var a = n("990a"),
        u = n("edec");

    for (var r in u) {
      "default" !== r && function (e) {
        n.d(t, e, function () {
          return u[e];
        });
      }(r);
    }

    n("2d90");
    var o = n("2877"),
        c = Object(o["a"])(u["default"], a["a"], a["b"], !1, null, "5d5109a8", null);
    t["default"] = c.exports;
  },
  "990a": function a(e, t, n) {
    "use strict";

    var a = function a() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        u = [];

    n.d(t, "a", function () {
      return a;
    }), n.d(t, "b", function () {
      return u;
    });
  },
  "9c84": function c84(e, t, n) {
    "use strict";

    (function (e, n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var a = {
        props: {
          limit: {
            type: Number,
            default: 5
          },
          url: {
            type: String,
            required: !0
          },
          name: {
            type: String,
            default: "file"
          },
          formData: {
            type: Object,
            default: function _default() {
              return {};
            }
          },
          header: {
            type: Object,
            default: function _default() {
              return {};
            }
          },
          fileList: {
            type: Array,
            default: function _default() {
              return [];
            }
          }
        },
        data: function data() {
          return {};
        },
        methods: {
          chooseImage: function chooseImage() {
            var t = this;
            e.chooseImage({
              success: function success(a) {
                console.log(n(a, " at components/ss-upload-image/ss-upload-image.vue:58"));
                e.uploadFile({
                  url: t.url,
                  name: t.name,
                  filePath: a.tempFilePaths[0],
                  formData: t.formData,
                  header: t.header,
                  success: function success(e) {
                    t.$emit("on-success", JSON.parse(e.data));
                  },
                  fail: function fail(e) {
                    t.$emit("on-error", e);
                  }
                });
              }
            });
          },
          handleRemove: function handleRemove(e) {
            this.$emit("on-remove", e);
          }
        }
      };
      t.default = a;
    }).call(this, n("6e42")["default"], n("0de9")["default"]);
  },
  ccf4: function ccf4(e, t, n) {},
  edec: function edec(e, t, n) {
    "use strict";

    n.r(t);
    var a = n("9c84"),
        u = n.n(a);

    for (var r in a) {
      "default" !== r && function (e) {
        n.d(t, e, function () {
          return a[e];
        });
      }(r);
    }

    t["default"] = u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/ss-upload-image/ss-upload-image-create-component', {
  'components/ss-upload-image/ss-upload-image-create-component': function componentsSsUploadImageSsUploadImageCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("8fe5"));
  }
}, [['components/ss-upload-image/ss-upload-image-create-component']]]);
});
require('components/ss-upload-image/ss-upload-image.js');
__wxRoute = 'components/sun-tab/sun-tab';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/sun-tab/sun-tab.js';

define('components/sun-tab/sun-tab.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/sun-tab/sun-tab"], {
  "0910": function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var u = {
      name: "uni-tab",
      data: function data() {
        return {
          average: 0,
          back: !1
        };
      },
      props: {
        value: {
          type: Number,
          default: function _default() {
            return 0;
          }
        },
        tabList: {
          type: Array,
          default: function _default() {
            return [];
          }
        },
        bgColor: {
          type: String,
          default: function _default() {
            return "#FFFFFF";
          }
        },
        defaultColor: {
          type: String,
          default: function _default() {
            return "#000000";
          }
        },
        activeColor: {
          type: String,
          default: function _default() {
            return "#1e9fff";
          }
        },
        rangeKey: {
          type: String,
          default: function _default() {
            return "";
          }
        },
        scroll: {
          type: Boolean,
          default: function _default() {
            return !1;
          }
        }
      },
      computed: {
        barLeft: function barLeft() {
          return this.value * this.average + 21;
        },
        barRight: function barRight() {
          var t = this.tabList.length - this.value - 1;
          return t * this.average;
        }
      },
      created: function created() {
        this.average = 100 / this.tabList.length;
      },
      methods: {
        itemClick: function itemClick(t, e) {
          if (this.value == t) return !1;
          this.value > t ? this.back = !0 : this.back = !1, this.$emit("update:value", t), this.$emit("change", {
            tab: e
          });
        }
      }
    };
    e.default = u;
  },
  "0c27": function c27(t, e, n) {
    "use strict";

    var u = function u() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        a = [];

    n.d(e, "a", function () {
      return u;
    }), n.d(e, "b", function () {
      return a;
    });
  },
  "28a5": function a5(t, e, n) {},
  "28c8": function c8(t, e, n) {
    "use strict";

    var u = n("28a5"),
        a = n.n(u);
    a.a;
  },
  7539: function _(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("0c27"),
        a = n("f822");

    for (var r in a) {
      "default" !== r && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(r);
    }

    n("28c8");
    var i = n("2877"),
        f = Object(i["a"])(a["default"], u["a"], u["b"], !1, null, "6e7cbddf", null);
    e["default"] = f.exports;
  },
  f822: function f822(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("0910"),
        a = n.n(u);

    for (var r in u) {
      "default" !== r && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(r);
    }

    e["default"] = a.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/sun-tab/sun-tab-create-component', {
  'components/sun-tab/sun-tab-create-component': function componentsSunTabSunTabCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("7539"));
  }
}, [['components/sun-tab/sun-tab-create-component']]]);
});
require('components/sun-tab/sun-tab.js');
__wxRoute = 'components/tag/tag';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/tag/tag.js';

define('components/tag/tag.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/tag/tag"], {
  "14b0": function b0(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("8a60"),
        a = e("9411");

    for (var r in a) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(r);
    }

    e("c371");
    var c = e("2877"),
        o = Object(c["a"])(a["default"], u["a"], u["b"], !1, null, null, null);
    n["default"] = o.exports;
  },
  "5d15": function d15(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var u = {
      props: ["text"]
    };
    n.default = u;
  },
  "8a60": function a60(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        a = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return a;
    });
  },
  9411: function _(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("5d15"),
        a = e.n(u);

    for (var r in u) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(r);
    }

    n["default"] = a.a;
  },
  ba9e: function ba9e(t, n, e) {},
  c371: function c371(t, n, e) {
    "use strict";

    var u = e("ba9e"),
        a = e.n(u);
    a.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/tag/tag-create-component', {
  'components/tag/tag-create-component': function componentsTagTagCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("14b0"));
  }
}, [['components/tag/tag-create-component']]]);
});
require('components/tag/tag.js');
__wxRoute = 'components/uni-swiper-dot/uni-swiper-dot';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-swiper-dot/uni-swiper-dot.js';

define('components/uni-swiper-dot/uni-swiper-dot.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-swiper-dot/uni-swiper-dot"], {
  1040: function _(t, e, n) {},
  "3bdc": function bdc(t, e, n) {
    "use strict";

    n.r(e);
    var o = n("8beb"),
        i = n.n(o);

    for (var s in o) {
      "default" !== s && function (t) {
        n.d(e, t, function () {
          return o[t];
        });
      }(s);
    }

    e["default"] = i.a;
  },
  8427: function _(t, e, n) {
    "use strict";

    n.r(e);
    var o = n("9e6f"),
        i = n("3bdc");

    for (var s in i) {
      "default" !== s && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(s);
    }

    n("e365");
    var r = n("2877"),
        d = Object(r["a"])(i["default"], o["a"], o["b"], !1, null, "126aaa90", null);
    e["default"] = d.exports;
  },
  "8beb": function beb(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var o = {
      name: "UniSwiperDot",
      props: {
        info: {
          type: Array,
          default: function _default() {
            return [];
          }
        },
        current: {
          type: Number,
          default: 0
        },
        dotsStyles: {
          type: Object,
          default: function _default() {
            return {};
          }
        },
        mode: {
          type: String,
          default: "default"
        },
        field: {
          type: String,
          default: ""
        }
      },
      data: function data() {
        return {
          dots: {
            width: 8,
            height: 8,
            bottom: 10,
            color: "#fff",
            backgroundColor: "rgba(0, 0, 0, .3)",
            border: "1px rgba(0, 0, 0, .3) solid",
            selectedBackgroundColor: "#333",
            selectedBorder: "1px rgba(0, 0, 0, .9) solid"
          }
        };
      },
      watch: {
        dotsStyles: function dotsStyles(t) {
          this.dots = Object.assign(this.dots, this.dotsStyles);
        },
        mode: function mode(t) {
          "indexes" === t ? (this.dots.width = 20, this.dots.height = 20) : (this.dots.width = 8, this.dots.height = 8);
        }
      },
      created: function created() {
        "indexes" === this.mode && (this.dots.width = 20, this.dots.height = 20), this.dots = Object.assign(this.dots, this.dotsStyles);
      }
    };
    e.default = o;
  },
  "9e6f": function e6f(t, e, n) {
    "use strict";

    var o = function o() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        i = [];

    n.d(e, "a", function () {
      return o;
    }), n.d(e, "b", function () {
      return i;
    });
  },
  e365: function e365(t, e, n) {
    "use strict";

    var o = n("1040"),
        i = n.n(o);
    i.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-swiper-dot/uni-swiper-dot-create-component', {
  'components/uni-swiper-dot/uni-swiper-dot-create-component': function componentsUniSwiperDotUniSwiperDotCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("8427"));
  }
}, [['components/uni-swiper-dot/uni-swiper-dot-create-component']]]);
});
require('components/uni-swiper-dot/uni-swiper-dot.js');
__wxRoute = 'node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup';__wxRouteBegin = true;__wxAppCurrentFile__ = 'node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup.js';

define('node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup"], {
  "0263": function _(t, n, i) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;

    var e = function e() {
      return i.e("node-modules/@dcloudio/uni-ui/lib/uni-transition/uni-transition").then(i.bind(null, "5490"));
    },
        o = {
      name: "UniPopup",
      components: {
        uniTransition: e
      },
      props: {
        animation: {
          type: Boolean,
          default: !0
        },
        type: {
          type: String,
          default: "center"
        },
        maskClick: {
          type: Boolean,
          default: !0
        }
      },
      data: function data() {
        return {
          ani: [],
          showPopup: !1,
          showTrans: !1,
          maskClass: {
            position: "fixed",
            bottom: 0,
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)"
          },
          transClass: {
            position: "fixed",
            left: 0,
            right: 0
          }
        };
      },
      watch: {
        type: {
          handler: function handler(t) {
            switch (this.type) {
              case "top":
                this.ani = ["slide-top"], this.transClass = {
                  position: "fixed",
                  left: 0,
                  right: 0
                };
                break;

              case "bottom":
                this.ani = ["slide-bottom"], this.transClass = {
                  position: "fixed",
                  left: 0,
                  right: 0,
                  bottom: 0
                };
                break;

              case "center":
                this.ani = ["zoom-out", "fade"], this.transClass = {
                  position: "fixed",
                  display: "flex",
                  flexDirection: "column",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  top: 0,
                  justifyContent: "center",
                  alignItems: "center"
                };
                break;
            }
          },
          immediate: !0
        }
      },
      created: function created() {},
      methods: {
        clear: function clear(t) {
          t.stopPropagation();
        },
        open: function open() {
          var t = this;
          this.showPopup = !0, this.$nextTick(function () {
            setTimeout(function () {
              t.showTrans = !0;
            }, 50);
          }), this.$emit("change", {
            show: !0
          });
        },
        close: function close(t) {
          var n = this;
          this.showTrans = !1, this.$nextTick(function () {
            clearTimeout(n.timer), n.timer = setTimeout(function () {
              n.$emit("change", {
                show: !1
              }), n.showPopup = !1;
            }, 300);
          });
        },
        onTap: function onTap() {
          this.maskClick && this.close();
        }
      }
    };

    n.default = o;
  },
  "2fa5": function fa5(t, n, i) {
    "use strict";

    var e = function e() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        o = [];

    i.d(n, "a", function () {
      return e;
    }), i.d(n, "b", function () {
      return o;
    });
  },
  "720b": function b(t, n, i) {
    "use strict";

    i.r(n);
    var e = i("0263"),
        o = i.n(e);

    for (var s in e) {
      "default" !== s && function (t) {
        i.d(n, t, function () {
          return e[t];
        });
      }(s);
    }

    n["default"] = o.a;
  },
  cb5b: function cb5b(t, n, i) {},
  df4e: function df4e(t, n, i) {
    "use strict";

    i.r(n);
    var e = i("2fa5"),
        o = i("720b");

    for (var s in o) {
      "default" !== s && function (t) {
        i.d(n, t, function () {
          return o[t];
        });
      }(s);
    }

    i("e609");
    var a = i("2877"),
        u = Object(a["a"])(o["default"], e["a"], e["b"], !1, null, "9a7f06fc", null);
    n["default"] = u.exports;
  },
  e609: function e609(t, n, i) {
    "use strict";

    var e = i("cb5b"),
        o = i.n(e);
    o.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup-create-component', {
  'node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup-create-component': function nodeModulesDcloudioUniUiLibUniPopupUniPopupCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("df4e"));
  }
}, [['node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup-create-component']]]);
});
require('node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup.js');
__wxRoute = 'node-modules/@dcloudio/uni-ui/lib/uni-transition/uni-transition';__wxRouteBegin = true;__wxAppCurrentFile__ = 'node-modules/@dcloudio/uni-ui/lib/uni-transition/uni-transition.js';

define('node-modules/@dcloudio/uni-ui/lib/uni-transition/uni-transition.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["node-modules/@dcloudio/uni-ui/lib/uni-transition/uni-transition"], {
  3670: function _(t, n, e) {
    "use strict";

    var r = function r() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        i = [];

    e.d(n, "a", function () {
      return r;
    }), e.d(n, "b", function () {
      return i;
    });
  },
  5490: function _(t, n, e) {
    "use strict";

    e.r(n);
    var r = e("3670"),
        i = e("9592");

    for (var a in i) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(a);
    }

    e("ff4f");
    var o = e("2877"),
        s = Object(o["a"])(i["default"], r["a"], r["b"], !1, null, null, null);
    n["default"] = s.exports;
  },
  9592: function _(t, n, e) {
    "use strict";

    e.r(n);
    var r = e("f98a"),
        i = e.n(r);

    for (var a in r) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return r[t];
        });
      }(a);
    }

    n["default"] = i.a;
  },
  f8c3: function f8c3(t, n, e) {},
  f98a: function f98a(t, n, e) {
    "use strict";

    function r(t) {
      for (var n = 1; n < arguments.length; n++) {
        var e = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(e);
        "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }))), r.forEach(function (n) {
          i(t, n, e[n]);
        });
      }

      return t;
    }

    function i(t, n, e) {
      return n in t ? Object.defineProperty(t, n, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[n] = e, t;
    }

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var a = {
      name: "uniTransition",
      props: {
        show: {
          type: Boolean,
          default: !1
        },
        modeClass: {
          type: Array,
          default: function _default() {
            return [];
          }
        },
        duration: {
          type: Number,
          default: 300
        },
        styles: {
          type: Object,
          default: function _default() {
            return {};
          }
        }
      },
      data: function data() {
        return {
          isShow: !1,
          transform: "",
          ani: {
            in: "",
            active: ""
          }
        };
      },
      watch: {
        show: {
          handler: function handler(t) {
            t ? this.open() : this.close();
          },
          immediate: !0
        }
      },
      computed: {
        stylesObject: function stylesObject() {
          var t = r({}, this.styles, {
            "transition-duration": this.duration / 1e3 + "s"
          }),
              n = "";

          for (var e in t) {
            var i = this.toLine(e);
            n += i + ":" + t[e] + ";";
          }

          return n;
        }
      },
      created: function created() {},
      methods: {
        change: function change() {
          this.$emit("click", {
            detail: this.isShow
          });
        },
        open: function open() {
          var t = this;

          for (var n in this.isShow = !0, this.transform = "", this.ani.in = "", this.getTranfrom(!1)) {
            "opacity" === n ? this.ani.in = "fade-in" : this.transform += "".concat(this.getTranfrom(!1)[n], " ");
          }

          this.$nextTick(function () {
            setTimeout(function () {
              t._animation(!0);
            }, 50);
          });
        },
        close: function close(t) {
          this._animation(!1);
        },
        _animation: function _animation(t) {
          var n = this,
              e = this.getTranfrom(t);

          for (var r in this.transform = "", e) {
            "opacity" === r ? this.ani.in = "fade-".concat(t ? "out" : "in") : this.transform += "".concat(e[r], " ");
          }

          clearTimeout(this.timer), this.timer = setTimeout(function () {
            t || (n.isShow = !1), n.$emit("change", {
              detail: n.isShow
            });
          }, this.duration);
        },
        getTranfrom: function getTranfrom(t) {
          var n = {
            transform: ""
          };
          return this.modeClass.forEach(function (e) {
            switch (e) {
              case "fade":
                n.opacity = t ? 1 : 0;
                break;

              case "slide-top":
                n.transform += "translateY(".concat(t ? "0" : "-100%", ") ");
                break;

              case "slide-right":
                n.transform += "translateX(".concat(t ? "0" : "100%", ") ");
                break;

              case "slide-bottom":
                n.transform += "translateY(".concat(t ? "0" : "100%", ") ");
                break;

              case "slide-left":
                n.transform += "translateX(".concat(t ? "0" : "-100%", ") ");
                break;

              case "zoom-in":
                n.transform += "scale(".concat(t ? 1 : .8, ") ");
                break;

              case "zoom-out":
                n.transform += "scale(".concat(t ? 1 : 1.2, ") ");
                break;
            }
          }), n;
        },
        _modeClassArr: function _modeClassArr(t) {
          var n = this.modeClass;

          if ("string" !== typeof n) {
            var e = "";
            return n.forEach(function (n) {
              e += n + "-" + t + ",";
            }), e.substr(0, e.length - 1);
          }

          return n + "-" + t;
        },
        toLine: function toLine(t) {
          return t.replace(/([A-Z])/g, "-$1").toLowerCase();
        }
      }
    };
    n.default = a;
  },
  ff4f: function ff4f(t, n, e) {
    "use strict";

    var r = e("f8c3"),
        i = e.n(r);
    i.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['node-modules/@dcloudio/uni-ui/lib/uni-transition/uni-transition-create-component', {
  'node-modules/@dcloudio/uni-ui/lib/uni-transition/uni-transition-create-component': function nodeModulesDcloudioUniUiLibUniTransitionUniTransitionCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("5490"));
  }
}, [['node-modules/@dcloudio/uni-ui/lib/uni-transition/uni-transition-create-component']]]);
});
require('node-modules/@dcloudio/uni-ui/lib/uni-transition/uni-transition.js');

__wxRoute = 'pages/home/home';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/home/home.js';

define('pages/home/home.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/home"],{4638:function(n,t,a){"use strict";var e=a("84ab"),o=a.n(e);o.a},"56c5":function(n,t,a){"use strict";a.r(t);var e=a("5ec3"),o=a("78a5");for(var u in o)"default"!==u&&function(n){a.d(t,n,function(){return o[n]})}(u);a("4638");var c=a("2877"),i=Object(c["a"])(o["default"],e["a"],e["b"],!1,null,null,null);t["default"]=i.exports},"5ec3":function(n,t,a){"use strict";var e=function(){var n=this,t=n.$createElement;n._self._c},o=[];a.d(t,"a",function(){return e}),a.d(t,"b",function(){return o})},"78a5":function(n,t,a){"use strict";a.r(t);var e=a("fab8"),o=a.n(e);for(var u in e)"default"!==u&&function(n){a.d(t,n,function(){return e[n]})}(u);t["default"]=o.a},"84ab":function(n,t,a){},c0ca:function(n,t,a){"use strict";(function(n){a("a886"),a("921b");e(a("66fd"));var t=e(a("56c5"));function e(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,a("6e42")["createPage"])},fab8:function(n,t,a){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{}},methods:{toPage:function(t){var a="../".concat(t,"/").concat(t);n.navigateTo({url:a,animationType:"pop-in",animationDuration:300})},showTip:function(){n.showToast({title:"正在开发中～",icon:"none"})}}};t.default=a}).call(this,a("6e42")["default"])}},[["c0ca","common/runtime","common/vendor"]]]);
});
require('pages/home/home.js');
__wxRoute = 'pages/monitor/monitor';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/monitor/monitor.js';

define('pages/monitor/monitor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/monitor/monitor"],{"03d2":function(t,n,a){"use strict";var i=a("6410"),e=a.n(i);e.a},"0a6a":function(t,n,a){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},e=[];a.d(n,"a",function(){return i}),a.d(n,"b",function(){return e})},6410:function(t,n,a){},"6ac5":function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i,e=o(a("f311"));function o(t){return t&&t.__esModule?t:{default:t}}var u={data:function(){return{canvasRing:null,cWidth:"",cHeight:"",pixelRatio:1,ringData:{series:[{name:"一级报警",data:17},{name:"二级报警",data:29},{name:"三级报警",data:24},{name:"四级报警",data:21}]}}},onLoad:function(){i=this,this.cWidth=t.upx2px(750),this.cHeight=t.upx2px(500),this.init()},methods:{init:function(){this.showRing("canvasRing",this.ringData)},showRing:function(t,n){this.canvaRing=new e.default({$this:i,canvasId:t,type:"ring",fontSize:11,legend:!0,extra:{pie:{offsetAngle:-45,ringWidth:40*i.pixelRatio,labelWidth:15}},background:"#FFFFFF",pixelRatio:i.pixelRatio,series:n.series,animation:!0,width:i.cWidth*i.pixelRatio,height:i.cHeight*i.pixelRatio,disablePieStroke:!0,dataLabel:!0})},touchRing:function(t){this.canvaRing.showToolTip(t,{format:function(t){return t.name+":"+t.data}})}}};n.default=u}).call(this,a("6e42")["default"])},a5ff:function(t,n,a){"use strict";(function(t){a("a886"),a("921b");i(a("66fd"));var n=i(a("c4ba"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,a("6e42")["createPage"])},c0df:function(t,n,a){"use strict";a.r(n);var i=a("6ac5"),e=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(n,t,function(){return i[t]})}(o);n["default"]=e.a},c4ba:function(t,n,a){"use strict";a.r(n);var i=a("0a6a"),e=a("c0df");for(var o in e)"default"!==o&&function(t){a.d(n,t,function(){return e[t]})}(o);a("03d2");var u=a("2877"),c=Object(u["a"])(e["default"],i["a"],i["b"],!1,null,null,null);n["default"]=c.exports}},[["a5ff","common/runtime","common/vendor"]]]);
});
require('pages/monitor/monitor.js');
__wxRoute = 'pages/trouble-manage/trouble-manage';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/trouble-manage/trouble-manage.js';

define('pages/trouble-manage/trouble-manage.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/trouble-manage/trouble-manage"],{"22d2":function(e,n,t){},"471c":function(e,n,t){"use strict";t.r(n);var o=t("e3ee"),u=t("bc8e");for(var r in u)"default"!==r&&function(e){t.d(n,e,function(){return u[e]})}(r);t("eae5");var c=t("2877"),i=Object(c["a"])(u["default"],o["a"],o["b"],!1,null,null,null);n["default"]=i.exports},"67f2":function(e,n,t){"use strict";(function(e){t("a886"),t("921b");o(t("66fd"));var n=o(t("471c"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},bc8e:function(e,n,t){"use strict";t.r(n);var o=t("c1b7"),u=t.n(o);for(var r in o)"default"!==r&&function(e){t.d(n,e,function(){return o[e]})}(r);n["default"]=u.a},c1b7:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(){return t.e("components/uni-swiper-dot/uni-swiper-dot").then(t.bind(null,"8427"))},u=function(){return t.e("node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup").then(t.bind(null,"df4e"))},r={data:function(){return{dotsStyles:{backgroundColor:"#eee",selectedBackgroundColor:"#feb831",border:"none",selectedBorder:"none"},troubles:[{title:"电扶梯不运行故障",station:"1号线近江站",major:"信号专业",deviceCode:"TK2034-F",level:"二级",content:"C出口扶梯停止不动，故障原因不明，需要维修人员查看",subContent:[]},{title:"电扶梯不运行故障",station:"1号线近江站",major:"信号专业",deviceCode:"TK2034-F",level:"二级",content:"C出口扶梯停止不动，故障原因不明，需要维修人员查看",subContent:[]}],info:[{content:"内容 A"},{content:"内容 B"},{content:"内容 C"}],current:0,mode:"round",background:["color1","color2","color3"],indicatorDots:!0,autoplay:!1,interval:2e3,duration:500}},components:{SwiperDot:o,uniPopup:u},methods:{change:function(e){this.current=e.detail.current},closeTrouble:function(){this.$refs.popup.open()}}};n.default=r},e3ee:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement;e._self._c;e._isMounted||(e.e0=function(n){return e.$refs.popup.close()},e.e1=function(n){return e.$refs.popup.close()})},u=[];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return u})},eae5:function(e,n,t){"use strict";var o=t("22d2"),u=t.n(o);u.a}},[["67f2","common/runtime","common/vendor"]]]);
});
require('pages/trouble-manage/trouble-manage.js');
__wxRoute = 'pages/electronic/electronic';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/electronic/electronic.js';

define('pages/electronic/electronic.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/electronic/electronic"],{"0f47":function(t,n,e){"use strict";e.r(n);var u=e("7cc7"),a=e.n(u);for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);n["default"]=a.a},"2e84":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return a})},"47d8":function(t,n,e){"use strict";var u=e("7ea3"),a=e.n(u);a.a},"5dd7":function(t,n,e){"use strict";e.r(n);var u=e("2e84"),a=e("0f47");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("47d8");var o=e("2877"),c=Object(o["a"])(a["default"],u["a"],u["b"],!1,null,null,null);n["default"]=c.exports},"7cc7":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{}},methods:{submit:function(){t.showLoading({title:"报班中"}),setTimeout(function(){t.hideLoading(),t.switchTab({url:"/pages/home/home",animationType:"pop-in",animationDuration:300})},2e3)}}};n.default=e}).call(this,e("6e42")["default"])},"7ea3":function(t,n,e){},"868f":function(t,n,e){"use strict";(function(t){e("a886"),e("921b");u(e("66fd"));var n=u(e("5dd7"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])}},[["868f","common/runtime","common/vendor"]]]);
});
require('pages/electronic/electronic.js');
__wxRoute = 'pages/mine/mine';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mine/mine.js';

define('pages/mine/mine.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/mine"],{"01bc":function(n,t,e){},2873:function(n,t,e){"use strict";e.r(t);var u=e("b4a6"),o=e.n(u);for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);t["default"]=o.a},b2a1:function(n,t,e){"use strict";var u=e("01bc"),o=e.n(u);o.a},b4a6:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{}},methods:{toLogin:function(){n.showModal({content:"确定要注销登录吗？",cancelColor:"#666666",confirmColor:"#5886fc",success:function(t){t.confirm&&n.navigateTo({url:"../login/login"})}})}}};t.default=e}).call(this,e("6e42")["default"])},b963:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return o})},d10c:function(n,t,e){"use strict";(function(n){e("a886"),e("921b");u(e("66fd"));var t=u(e("f395"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},f395:function(n,t,e){"use strict";e.r(t);var u=e("b963"),o=e("2873");for(var c in o)"default"!==c&&function(n){e.d(t,n,function(){return o[n]})}(c);e("b2a1");var a=e("2877"),r=Object(a["a"])(o["default"],u["a"],u["b"],!1,null,null,null);t["default"]=r.exports}},[["d10c","common/runtime","common/vendor"]]]);
});
require('pages/mine/mine.js');
__wxRoute = 'pages/material/material';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/material/material.js';

define('pages/material/material.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/material/material"],{2473:function(n,t,e){},"26cb":function(n,t,e){"use strict";e.r(t);var r=e("902a"),u=e("320e");for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);e("bd09");var c=e("2877"),i=Object(c["a"])(u["default"],r["a"],r["b"],!1,null,null,null);t["default"]=i.exports},"320e":function(n,t,e){"use strict";e.r(t);var r=e("d30c"),u=e.n(r);for(var a in r)"default"!==a&&function(n){e.d(t,n,function(){return r[n]})}(a);t["default"]=u.a},"3f10":function(n,t,e){"use strict";(function(n){e("a886"),e("921b");r(e("66fd"));var t=r(e("26cb"));function r(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"902a":function(n,t,e){"use strict";var r=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return r}),e.d(t,"b",function(){return u})},bd09:function(n,t,e){"use strict";var r=e("2473"),u=e.n(r);u.a},d30c:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={data:function(){return{isShowSearch:!0,tabs:["默认排序","库存","单价","级别","筛选"],currentTab:"默认排序",materials:[{id:"1",name:"消防箱",currentNum:145,warnNum:200,dir:"RN-7772",price:"40.00 / 单位 个"},{id:"2",name:"不锈钢快速接头",currentNum:750,warnNum:200,dir:"RN-7772",price:"40.00 / 单位 个"},{id:"3",name:"刹车片",currentNum:78,warnNum:200,dir:"RN-7772",price:"40.00 / 单位 个"},{id:"4",name:"CA-N门把手",currentNum:740,warnNum:200,dir:"RN-7772",price:"40.00 / 单位 个"}]}},methods:{tabChange:function(n){this.currentTab=n}}};t.default=r}},[["3f10","common/runtime","common/vendor"]]]);
});
require('pages/material/material.js');
__wxRoute = 'pages/new-trouble/new-trouble';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/new-trouble/new-trouble.js';

define('pages/new-trouble/new-trouble.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/new-trouble/new-trouble"],{"15ad":function(e,t,n){"use strict";n.r(t);var o=n("7d1a"),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=a.a},2148:function(e,t,n){"use strict";n.r(t);var o=n("9e01"),a=n("15ad");for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);n("e4f5");var u=n("2877"),s=Object(u["a"])(a["default"],o["a"],o["b"],!1,null,null,null);t["default"]=s.exports},"28fb":function(e,t,n){},"7d1a":function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){return n.e("components/ss-upload-image/ss-upload-image").then(n.bind(null,"8fe5"))},i={data:function(){return{url:"https://api.motherbuy.com/decorate/upload/img",fileList:[],headers:{userLoginId:"287da7dc209d9224a22c4700cc1c9777"},oss:"http://oss.motherbuy.com/",troubleName:"",troubleLevel:"",lineStation:"",deviceName:"",troubleText:""}},components:{ssUploadImage:a},methods:{onSuccess:function(t){if(console.log(e(t," at pages/new-trouble/new-trouble.vue:87")),500!=t.code){var n=this.oss+t.data;this.fileList.push(n)}else o.showToast({title:t.message,icon:"none"})},handleError:function(e){o.showToast({title:"图片上传失败",icon:"none"})},radioChange:function(e){this.troubleLevel=e.detail.value},submit:function(){var e="";this.troubleName?this.troubleLevel?this.lineStation?this.deviceName?this.troubleText||(e="请描述故障内容"):e="请输入设备名称":e="请输入线路车站":e="请选择故障等级":e="请输入故障名称",e?o.showToast({title:e,icon:"none"}):(o.showLoading({title:"登记中"}),setTimeout(function(){o.hideLoading(),o.switchTab({url:"/pages/home/home",animationType:"pop-in",animationDuration:300})},2e3))}}};t.default=i}).call(this,n("0de9")["default"],n("6e42")["default"])},"9e01":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a})},d6c4:function(e,t,n){"use strict";(function(e){n("a886"),n("921b");o(n("66fd"));var t=o(n("2148"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},e4f5:function(e,t,n){"use strict";var o=n("28fb"),a=n.n(o);a.a}},[["d6c4","common/runtime","common/vendor"]]]);
});
require('pages/new-trouble/new-trouble.js');
__wxRoute = 'pages/shift-repair/shift-repair';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/shift-repair/shift-repair.js';

define('pages/shift-repair/shift-repair.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shift-repair/shift-repair"],{1015:function(t,n,e){"use strict";(function(t){e("a886"),e("921b");a(e("66fd"));var n=a(e("68f2"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},1911:function(t,n,e){"use strict";e.r(n);var a=e("f551"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);n["default"]=i.a},"68f2":function(t,n,e){"use strict";e.r(n);var a=e("a805"),i=e("1911");for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);e("f8e4");var c=e("2877"),u=Object(c["a"])(i["default"],a["a"],a["b"],!1,null,null,null);n["default"]=u.exports},a805:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c;t._isMounted||(t.e0=function(n){t.taskModal=!1})},i=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i})},e345:function(t,n,e){},f551:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{taskModal:!1,shifts:[{id:"1",name:"C出口售票机检修",line:"1号线",station:"江陵路站",major:"通信专业",cycle:"日期",date:"2019-06-26",icon:""},{id:"2",name:"18-24号车厢空调检修",line:"1号线",station:"西兴路站",major:"通信专业",cycle:"日期",date:"2019-06-26",icon:""},{id:"3",name:"C出口电梯扶梯检修",line:"1号线",station:"火车东站",major:"通信专业",cycle:"日期",date:"2019-06-26",icon:""},{id:"4",name:"语音广播检修",line:"1号线",station:"九和路站",major:"通信专业",cycle:"日期",date:"2019-06-26",icon:""}]}},methods:{getTask:function(){this.taskModal=!0},confirm:function(){this.taskModal=!1,t.navigateTo({url:"../success/success"})}}};n.default=e}).call(this,e("6e42")["default"])},f8e4:function(t,n,e){"use strict";var a=e("e345"),i=e.n(a);i.a}},[["1015","common/runtime","common/vendor"]]]);
});
require('pages/shift-repair/shift-repair.js');
__wxRoute = 'pages/success/success';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/success/success.js';

define('pages/success/success.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/success/success"],{"30e3":function(t,n,e){},"41fa":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{}},created:function(){setTimeout(function(){t.navigateBack({animationDuration:300,animationType:"pop-out"})},1500)}};n.default=e}).call(this,e("6e42")["default"])},"8f05":function(t,n,e){"use strict";e.r(n);var a=e("dd28"),u=e("a993");for(var c in u)"default"!==c&&function(t){e.d(n,t,function(){return u[t]})}(c);e("ada1");var o=e("2877"),i=Object(o["a"])(u["default"],a["a"],a["b"],!1,null,null,null);n["default"]=i.exports},"959d":function(t,n,e){"use strict";(function(t){e("a886"),e("921b");a(e("66fd"));var n=a(e("8f05"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},a993:function(t,n,e){"use strict";e.r(n);var a=e("41fa"),u=e.n(a);for(var c in a)"default"!==c&&function(t){e.d(n,t,function(){return a[t]})}(c);n["default"]=u.a},ada1:function(t,n,e){"use strict";var a=e("30e3"),u=e.n(a);u.a},dd28:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return u})}},[["959d","common/runtime","common/vendor"]]]);
});
require('pages/success/success.js');
__wxRoute = 'pages/message/message';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/message/message.js';

define('pages/message/message.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/message/message"],{1778:function(e,t,n){"use strict";n.r(t);var u=n("7b4d"),i=n("a375");for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);n("b94e");var o=n("2877"),a=Object(o["a"])(i["default"],u["a"],u["b"],!1,null,null,null);t["default"]=a.exports},4899:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){return n.e("components/sun-tab/sun-tab").then(n.bind(null,"7539"))},i={data:function(){return{index:0,tabList:["通知","公告"],notices:[{id:"1",type:"worksheet",source:"章三",jobNumber:100102001,createTime:"2019-09-21 19:00",endTime:"2019年9月26日"},{id:"2",type:"repair",source:"李四",jobNumber:100102004,createTime:"2019-09-20 09:00",endTime:"2019年9月25日"},{id:"3",type:"worksheet",source:"王五",jobNumber:100102005,createTime:"2019-09-22 10:00",endTime:"2019年9月29日"},{id:"4",type:"worksheet",source:"赵四",jobNumber:100102006,createTime:"2019-09-28 11:00",endTime:"2019年10月2日"}],announcement:[{id:"1",time:"07月23日 09:00",title:"关于仲秋节放假安排",content:"根据国务院办公厅通知精神，2019年仲秋节、国庆节放假安排如下：10月1日（星期日）至10月8日（星期日）放假调休，共8天。9月30日（星期六）上班。"},{id:"2",time:"07月20日 09:00",title:"关于进一步加强和规范值班工作的通知",content:"为进一步加强和规范值班工作，切实改进工作作风，提高工作效率，结合城市管理工作世纪，现将有关事项通知。"},{id:"3",time:"05月23日 09:00",title:"关于端午节放假安排",content:"根据国务院办公厅通知精神，现将2019年端午节放假安排通知如下：6月18日（星期一）放假调休，与周末连休。"}]}},components:{sunTab:u},methods:{onChange:function(){}}};t.default=i},"7b4d":function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return i})},"9c59":function(e,t,n){},a375:function(e,t,n){"use strict";n.r(t);var u=n("4899"),i=n.n(u);for(var r in u)"default"!==r&&function(e){n.d(t,e,function(){return u[e]})}(r);t["default"]=i.a},ad78:function(e,t,n){"use strict";(function(e){n("a886"),n("921b");u(n("66fd"));var t=u(n("1778"));function u(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},b94e:function(e,t,n){"use strict";var u=n("9c59"),i=n.n(u);i.a}},[["ad78","common/runtime","common/vendor"]]]);
});
require('pages/message/message.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"12d4":function(n,t,e){"use strict";e.r(t);var o=e("723a"),a=e("d394");for(var r in a)"default"!==r&&function(n){e.d(t,n,function(){return a[n]})}(r);e("4e79");var u=e("2877"),i=Object(u["a"])(a["default"],o["a"],o["b"],!1,null,null,null);t["default"]=i.exports},"4ca3":function(n,t,e){"use strict";(function(n,e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{username:"",password:"",errorFlag:!1,pwdErrorFlag:!1}},methods:{login:function(){this.username?this.password?n.switchTab({url:"/pages/home/home"}):n.showToast({title:"密码不能为空",duration:1e3,icon:"none"}):n.showToast({title:"用户名不能为空",duration:1e3,icon:"none"})},register:function(){},handleBlur:function(){console.log(e(this.username," at pages/login/login.vue:70")),this.username||(this.errorFlag=!0)},handlePwdBlur:function(){this.password||(this.pwdErrorFlag=!0)}}};t.default=o}).call(this,e("6e42")["default"],e("0de9")["default"])},"4e79":function(n,t,e){"use strict";var o=e("6dc5"),a=e.n(o);a.a},"6dc5":function(n,t,e){},"723a":function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return a})},8871:function(n,t,e){"use strict";(function(n){e("a886"),e("921b");o(e("66fd"));var t=o(e("12d4"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},d394:function(n,t,e){"use strict";e.r(t);var o=e("4ca3"),a=e.n(o);for(var r in o)"default"!==r&&function(n){e.d(t,n,function(){return o[n]})}(r);t["default"]=a.a}},[["8871","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/alarm/alarm';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/alarm/alarm.js';

define('pages/alarm/alarm.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/alarm/alarm"],{"07d3":function(n,t,u){},1388:function(n,t,u){"use strict";(function(n){u("a886"),u("921b");a(u("66fd"));var t=a(u("f34d"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,u("6e42")["createPage"])},"5fbd":function(n,t,u){"use strict";u.r(t);var a=u("07d3"),e=u.n(a);for(var r in a)"default"!==r&&function(n){u.d(t,n,function(){return a[n]})}(r);t["default"]=e.a},a4b1:function(n,t,u){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},e=[];u.d(t,"a",function(){return a}),u.d(t,"b",function(){return e})},f34d:function(n,t,u){"use strict";u.r(t);var a=u("a4b1"),e=u("5fbd");for(var r in e)"default"!==r&&function(n){u.d(t,n,function(){return e[n]})}(r);var f=u("2877"),c=Object(f["a"])(e["default"],a["a"],a["b"],!1,null,null,null);t["default"]=c.exports}},[["1388","common/runtime","common/vendor"]]]);
});
require('pages/alarm/alarm.js');
__wxRoute = 'pages/work-sheet/work-sheet';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/work-sheet/work-sheet.js';

define('pages/work-sheet/work-sheet.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/work-sheet/work-sheet"],{"0de1":function(e,t,n){"use strict";n.r(t);var u=n("f96c"),r=n.n(u);for(var a in u)"default"!==a&&function(e){n.d(t,e,function(){return u[e]})}(a);t["default"]=r.a},5202:function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return r})},"82dc":function(e,t,n){"use strict";var u=n("cf0e"),r=n.n(u);r.a},a6ba:function(e,t,n){"use strict";n.r(t);var u=n("5202"),r=n("0de1");for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);n("82dc");var s=n("2877"),i=Object(s["a"])(r["default"],u["a"],u["b"],!1,null,"73b777be",null);t["default"]=i.exports},cf0e:function(e,t,n){},eb33:function(e,t,n){"use strict";(function(e){n("a886"),n("921b");u(n("66fd"));var t=u(n("a6ba"));function u(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},f96c:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{list:[{title:"钱江路电源屏报警",address:"钱江路",time:"2018.4.24 15:37:24",source:"系统自动推送",suggest:"维修工具箱"},{title:"客运中心DTI报警",address:"客运中心",time:"2018.4.25 12:37:39",source:"智能运维中心-陈磊",suggest:"笔记本"},{title:"板卡报警",address:"钱江路",time:"2018.4.26 10:37:10",source:"智能运维中心-石峰",suggest:"维修工具箱"},{title:"客运中心道岔检修",address:"客运中心",time:"2018.4.26 11:37:34",source:"智能运维中心",suggest:"维修工具箱"},{title:"计轴报警",address:"钱江路",time:"2018.4.27 19:37:22",source:"系统自动推送",suggest:"维修工具箱"}]}},methods:{toDetail:function(){e.navigateTo({url:"../work-detail/work-detail"})}}};t.default=n}).call(this,n("6e42")["default"])}},[["eb33","common/runtime","common/vendor"]]]);
});
require('pages/work-sheet/work-sheet.js');
__wxRoute = 'pages/work-detail/work-detail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/work-detail/work-detail.js';

define('pages/work-detail/work-detail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/work-detail/work-detail"],{"63d4":function(n,t,e){},"82a7":function(n,t,e){"use strict";var u=e("94f4"),a=e.n(u);a.a},"94f4":function(n,t,e){},9882:function(n,t,e){"use strict";e.r(t);var u=e("63d4"),a=e.n(u);for(var f in u)"default"!==f&&function(n){e.d(t,n,function(){return u[n]})}(f);t["default"]=a.a},"9b0d":function(n,t,e){"use strict";e.r(t);var u=e("ed1f"),a=e("9882");for(var f in a)"default"!==f&&function(n){e.d(t,n,function(){return a[n]})}(f);e("82a7");var r=e("2877"),c=Object(r["a"])(a["default"],u["a"],u["b"],!1,null,"3c8cd3ec",null);t["default"]=c.exports},ed1f:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return a})},f5fd:function(n,t,e){"use strict";(function(n){e("a886"),e("921b");u(e("66fd"));var t=u(e("9b0d"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])}},[["f5fd","common/runtime","common/vendor"]]]);
});
require('pages/work-detail/work-detail.js');
__wxRoute = 'pages/report/report';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/report/report.js';

define('pages/report/report.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/report/report"],{"21b1":function(t,a,e){"use strict";(function(t){e("a886"),e("921b");i(e("66fd"));var a=i(e("33c4"));function i(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("6e42")["createPage"])},"27ee":function(t,a,e){},"33c4":function(t,a,e){"use strict";e.r(a);var i=e("9844"),n=e("5eb1");for(var o in n)"default"!==o&&function(t){e.d(a,t,function(){return n[t]})}(o);e("9fcb");var c=e("2877"),u=Object(c["a"])(n["default"],i["a"],i["b"],!1,null,null,null);a["default"]=u.exports},"5eb1":function(t,a,e){"use strict";e.r(a);var i=e("d6b4"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,function(){return i[t]})}(o);a["default"]=n.a},9844:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement;t._self._c},n=[];e.d(a,"a",function(){return i}),e.d(a,"b",function(){return n})},"9fcb":function(t,a,e){"use strict";var i=e("27ee"),n=e.n(i);n.a},d6b4:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i,n=o(e("f311"));function o(t){return t&&t.__esModule?t:{default:t}}var c={data:function(){return{canvasRing:null,canvasPie:null,canvasColumn:null,cWidth:"",cHeight:"",pixelRatio:1,serverData:"",ringData:{series:[{name:"一级报警",data:17},{name:"二级报警",data:29},{name:"三级报警",data:24},{name:"四级报警",data:21}]},pieData:{series:[{name:"板卡故障",data:50},{name:"ATO故障",data:30},{name:"AB系网故障",data:20},{name:"通信故障故障",data:18},{name:"电源屏显示故障",data:8}]},columnData:{categories:["2013","2014","2015","2016","2017","2018"],series:[{name:"ATS",data:[45,{value:40,color:"#f04864"},37,34,23,15]},{name:"CC",data:[34,{value:30,color:"#facc14"},25,20,18,14]}]}}},onLoad:function(){i=this,this.cWidth=t.upx2px(750),this.cHeight=t.upx2px(500),this.init()},methods:{init:function(){this.showPie("canvasPie",this.pieData),this.showColumn("canvasColumn",this.columnData),this.showRing("canvasRing",this.ringData)},showRing:function(t,a){this.canvaRing=new n.default({$this:i,canvasId:t,type:"ring",fontSize:11,legend:!0,extra:{pie:{offsetAngle:-45,ringWidth:40*i.pixelRatio,labelWidth:15}},background:"#FFFFFF",pixelRatio:i.pixelRatio,series:a.series,animation:!0,width:i.cWidth*i.pixelRatio,height:i.cHeight*i.pixelRatio,disablePieStroke:!0,dataLabel:!0})},touchRing:function(t){this.canvaRing.showToolTip(t,{format:function(t){return t.name+":"+t.data}})},showPie:function(t,a){this.canvaPie=new n.default({$this:i,canvasId:t,type:"pie",fontSize:11,legend:{show:!0},background:"#FFFFFF",pixelRatio:i.pixelRatio,series:a.series,animation:!0,width:i.cWidth*i.pixelRatio,height:i.cHeight*i.pixelRatio,dataLabel:!0,extra:{pie:{lableWidth:15}}})},touchPie:function(t){this.canvaPie.showToolTip(t,{format:function(t){return t.name+":"+t.data}})},showColumn:function(t,a){this.canvaColumn=new n.default({$this:i,canvasId:t,type:"column",legend:{show:!0},fontSize:11,background:"#FFFFFF",pixelRatio:i.pixelRatio,animation:!0,categories:a.categories,series:a.series,xAxis:{disableGrid:!0},yAxis:{},dataLabel:!0,width:i.cWidth*i.pixelRatio,height:i.cHeight*i.pixelRatio,extra:{column:{type:"group",width:i.cWidth*i.pixelRatio*.45/a.categories.length}}})},touchColumn:function(t){this.canvaColumn.showToolTip(t,{format:function(t,a){return"object"===typeof t.data?a+" "+t.name+":"+t.data.value:a+" "+t.name+":"+t.data}})}}};a.default=c}).call(this,e("6e42")["default"])}},[["21b1","common/runtime","common/vendor"]]]);
});
require('pages/report/report.js');
__wxRoute = 'pages/about/about';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/about/about.js';

define('pages/about/about.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/about/about"],{"9e3d":function(n,e,t){"use strict";t.r(e);var u=t("aa92"),a=t.n(u);for(var r in u)"default"!==r&&function(n){t.d(e,n,function(){return u[n]})}(r);e["default"]=a.a},a5ee:function(n,e,t){},aa92:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=function(){return t.e("components/preview/preview").then(t.bind(null,"b5c2"))},a={data:function(){return{}},components:{VPreview:u}};e.default=a},d9f8:function(n,e,t){"use strict";(function(n){t("a886"),t("921b");u(t("66fd"));var e=u(t("fc1d"));function u(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},f4b8:function(n,e,t){"use strict";var u=function(){var n=this,e=n.$createElement;n._self._c},a=[];t.d(e,"a",function(){return u}),t.d(e,"b",function(){return a})},fc1d:function(n,e,t){"use strict";t.r(e);var u=t("f4b8"),a=t("9e3d");for(var r in a)"default"!==r&&function(n){t.d(e,n,function(){return a[n]})}(r);t("fc5c");var c=t("2877"),f=Object(c["a"])(a["default"],u["a"],u["b"],!1,null,null,null);e["default"]=f.exports},fc5c:function(n,e,t){"use strict";var u=t("a5ee"),a=t.n(u);a.a}},[["d9f8","common/runtime","common/vendor"]]]);
});
require('pages/about/about.js');
__wxRoute = 'pages/alarm/alarm';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/alarm/alarm.js';

define('pages/alarm/alarm.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/alarm/alarm"],{"07d3":function(n,t,u){},1388:function(n,t,u){"use strict";(function(n){u("a886"),u("921b");a(u("66fd"));var t=a(u("f34d"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,u("6e42")["createPage"])},"5fbd":function(n,t,u){"use strict";u.r(t);var a=u("07d3"),e=u.n(a);for(var r in a)"default"!==r&&function(n){u.d(t,n,function(){return a[n]})}(r);t["default"]=e.a},a4b1:function(n,t,u){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},e=[];u.d(t,"a",function(){return a}),u.d(t,"b",function(){return e})},f34d:function(n,t,u){"use strict";u.r(t);var a=u("a4b1"),e=u("5fbd");for(var r in e)"default"!==r&&function(n){u.d(t,n,function(){return e[n]})}(r);var f=u("2877"),c=Object(f["a"])(e["default"],a["a"],a["b"],!1,null,null,null);t["default"]=c.exports}},[["1388","common/runtime","common/vendor"]]]);
});
require('pages/alarm/alarm.js');
__wxRoute = 'pages/book/book';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/book/book.js';

define('pages/book/book.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/book/book"],{"0618":function(t,e,n){"use strict";(function(t){n("a886"),n("921b");u(n("66fd"));var e=u(n("42c9"));function u(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"1bc3":function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return o})},"42c9":function(t,e,n){"use strict";n.r(e);var u=n("1bc3"),o=n("c522");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("cebd");var a=n("2877"),c=Object(a["a"])(o["default"],u["a"],u["b"],!1,null,null,null);e["default"]=c.exports},4734:function(t,e,n){},"76f5":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=function(){return n.e("components/book/book").then(n.bind(null,"2fb8"))},o={data:function(){return{books:[{title:"忘，刑警",author:"陈浩基",fav_nums:100,image:"https://img3.doubanio.com/view/subject/m/public/s33467424.jpg"},{title:"半泽直树1",author:"池井户润",fav_nums:130,image:"https://img3.doubanio.com/view/subject/m/public/s33487932.jpg"},{title:"张岪与木心",author:"陈丹青",fav_nums:300,image:"https://img1.doubanio.com/view/subject/m/public/s33462098.jpg"},{title:"三月十五",author:"[美]桑顿·怀尔德",fav_nums:1e3,image:"https://img9.doubanio.com/view/subject/m/public/s33472456.jpg"},{title:"日本書紀",author:"[日]舍人亲王",fav_nums:100,image:"https://img3.doubanio.com/view/subject/m/public/s33496954.jpg"},{title:"恐妻家",author:"[日] 伊坂幸太郎",fav_nums:100,image:"https://img3.doubanio.com/view/subject/m/public/s33485390.jpg"}],searching:!1,more:""}},components:{VBook:u},methods:{onSearching:function(){t.showToast({title:"暂不能搜索，抱歉",duration:1e3})}}};e.default=o}).call(this,n("6e42")["default"])},c522:function(t,e,n){"use strict";n.r(e);var u=n("76f5"),o=n.n(u);for(var i in u)"default"!==i&&function(t){n.d(e,t,function(){return u[t]})}(i);e["default"]=o.a},cebd:function(t,e,n){"use strict";var u=n("4734"),o=n.n(u);o.a}},[["0618","common/runtime","common/vendor"]]]);
});
require('pages/book/book.js');
__wxRoute = 'pages/my/my';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/my.js';

define('pages/my/my.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/my"],{4354:function(e,t,n){"use strict";n.r(t);var a=n("623e"),o=n("b7d5");for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);n("8f62");var i=n("2877"),r=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,null,null);t["default"]=r.exports},"623e":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})},"8f62":function(e,t,n){"use strict";var a=n("f13d"),o=n.n(a);o.a},b7d5:function(e,t,n){"use strict";n.r(t);var a=n("d2f3"),o=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);t["default"]=o.a},d2f3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){return n.e("components/preview/preview").then(n.bind(null,"b5c2"))},o={data:function(){return{classics:[{fav_nums:10,text:"电影",image:"https://img1.doubanio.com/view/movie_gallery_frame_hot_rec/normal/public/b92602ba20293eb.jpg",content:"Dave 失戀喪志，終日躲在姐姐家中避世，湊外甥以療情傷"},{fav_nums:10,text:"电影",image:"https://img1.doubanio.com/view/movie_gallery_frame_hot_rec/normal/public/b92602ba20293eb.jpg",content:"Dave 失戀喪志，終日躲在姐姐家中避世，湊外甥以療情傷"},{fav_nums:10,text:"电影",image:"https://img1.doubanio.com/view/movie_gallery_frame_hot_rec/normal/public/b92602ba20293eb.jpg",content:"Dave 失戀喪志，終日躲在姐姐家中避世，湊外甥以療情傷"},{fav_nums:10,text:"电影",image:"https://img1.doubanio.com/view/movie_gallery_frame_hot_rec/normal/public/b92602ba20293eb.jpg",content:"Dave 失戀喪志，終日躲在姐姐家中避世，湊外甥以療情傷"}]}},components:{VPreview:a}};t.default=o},f00b:function(e,t,n){"use strict";(function(e){n("a886"),n("921b");a(n("66fd"));var t=a(n("4354"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},f13d:function(e,t,n){}},[["f00b","common/runtime","common/vendor"]]]);
});
require('pages/my/my.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);


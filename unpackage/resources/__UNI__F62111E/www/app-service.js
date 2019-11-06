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
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'tag-container tag-class '])
Z([3,'before'])
Z([3,'after'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[7],[3,'searching']]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'books']])
Z(z[1])
Z([3,'__l'])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container data-v-66b5c80c'])
Z([3,'header data-v-66b5c80c'])
Z([3,'__l'])
Z([3,'episode data-v-66b5c80c'])
Z([[6],[[7],[3,'classic']],[3,'index']])
Z([3,'1'])
Z(z[2])
Z([3,'__e'])
Z([3,'like data-v-66b5c80c'])
Z([[7],[3,'likeCount']])
Z([[4],[[5],[[4],[[5],[[5],[1,'^like']],[[4],[[5],[[4],[[5],[1,'onLike']]]]]]]]])
Z([[7],[3,'likeStatus']])
Z([3,'2'])
Z(z[2])
Z([3,'data-v-66b5c80c'])
Z([[6],[[7],[3,'classic']],[3,'content']])
Z([[6],[[7],[3,'classic']],[3,'image']])
Z([3,'3'])
Z(z[2])
Z(z[7])
Z(z[7])
Z([3,'navi data-v-66b5c80c'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^left']],[[4],[[5],[[4],[[5],[1,'onNext']]]]]]]],[[4],[[5],[[5],[1,'^right']],[[4],[[5],[[4],[[5],[1,'onPrevious']]]]]]]]])
Z([[7],[3,'first']])
Z([[7],[3,'latest']])
Z([[6],[[7],[3,'classic']],[3,'title']])
Z([3,'4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'classics']])
Z(z[0])
Z([3,'__l'])
Z([3,'preview'])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/book/book.wxml','./components/episode/episode.wxml','./components/like/like.wxml','./components/movie/movie.wxml','./components/navi/navi.wxml','./components/preview/preview.wxml','./components/tag/tag.wxml','./pages/book/book.wxml','./pages/classic/classic.wxml','./pages/my/my.wxml'];d_[x[0]]={}
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
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var oH=_n('view')
_rz(z,oH,'class',0,e,s,gg)
var cI=_mz(z,'v-tag',['bind:__l',1,'text',1,'vueId',2],[],e,s,gg)
_(oH,cI)
var oJ=_mz(z,'v-like',['bind:__l',4,'class',1,'count',2,'like',3,'readOnly',4,'vueId',5],[],e,s,gg)
_(oH,oJ)
_(r,oH)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var aL=_n('view')
_rz(z,aL,'class',0,e,s,gg)
var tM=_n('slot')
_rz(z,tM,'name',1,e,s,gg)
_(aL,tM)
var eN=_n('slot')
_rz(z,eN,'name',2,e,s,gg)
_(aL,eN)
_(r,aL)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var oP=_v()
_(r,oP)
if(_oz(z,0,e,s,gg)){oP.wxVkey=1
var xQ=_v()
_(oP,xQ)
var oR=function(cT,fS,hU,gg){
var cW=_mz(z,'v-book',['bind:__l',5,'book',1,'vueId',2],[],cT,fS,gg)
_(hU,cW)
return hU
}
xQ.wxXCkey=4
_2z(z,3,oR,e,s,gg,xQ,'item','index','index')
}
oP.wxXCkey=1
oP.wxXCkey=3
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var lY=_n('view')
_rz(z,lY,'class',0,e,s,gg)
var aZ=_n('view')
_rz(z,aZ,'class',1,e,s,gg)
var t1=_mz(z,'v-episode',['bind:__l',2,'class',1,'index',2,'vueId',3],[],e,s,gg)
_(aZ,t1)
var e2=_mz(z,'v-like',['bind:__l',6,'bind:like',1,'class',2,'count',3,'data-event-opts',4,'like',5,'vueId',6],[],e,s,gg)
_(aZ,e2)
_(lY,aZ)
var b3=_mz(z,'v-movie',['bind:__l',13,'class',1,'content',2,'img',3,'vueId',4],[],e,s,gg)
_(lY,b3)
var o4=_mz(z,'v-navi',['bind:__l',18,'bind:left',1,'bind:right',2,'class',3,'data-event-opts',4,'first',5,'latest',6,'title',7,'vueId',8],[],e,s,gg)
_(lY,o4)
_(r,lY)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var o6=_v()
_(r,o6)
var f7=function(h9,c8,o0,gg){
var oBB=_mz(z,'v-preview',['bind:__l',4,'class',1,'classic',2,'vueId',3],[],h9,c8,gg)
_(o0,oBB)
return o0
}
o6.wxXCkey=4
_2z(z,2,f7,e,s,gg,o6,'item','index','index')
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
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



__wxAppCode__['app.json']={"pages":["pages/classic/classic","pages/book/book","pages/my/my"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"旧岛小厅","navigationBarBackgroundColor":"#fff","backgroundColor":"#FFFFFF"},"tabBar":{"color":"#000000","selectedColor":"#2F85FC","backgroundColor":"#FFFFFF","borderStyle":"black","list":[{"pagePath":"pages/classic/classic","iconPath":"static/tab/classic.png","selectedIconPath":"static/tab/classic@highlight.png","text":"流行"},{"pagePath":"pages/book/book","iconPath":"static/tab/book.png","selectedIconPath":"static/tab/book@highlight.png","text":"书籍"},{"pagePath":"pages/my/my","iconPath":"static/tab/my.png","selectedIconPath":"static/tab/my@highlight.png","text":"喜欢"}]},"nvueCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"news-app","compilerVersion":"2.3.6","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/book/book.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/book/book.wxml']=$gwx('./components/book/book.wxml');

__wxAppCode__['components/episode/episode.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/episode/episode.wxml']=$gwx('./components/episode/episode.wxml');

__wxAppCode__['components/like/like.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/like/like.wxml']=$gwx('./components/like/like.wxml');

__wxAppCode__['components/movie/movie.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/movie/movie.wxml']=$gwx('./components/movie/movie.wxml');

__wxAppCode__['components/navi/navi.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/navi/navi.wxml']=$gwx('./components/navi/navi.wxml');

__wxAppCode__['components/preview/preview.json']={"usingComponents":{"v-like":"/components/like/like","v-tag":"/components/tag/tag"},"component":true};
__wxAppCode__['components/preview/preview.wxml']=$gwx('./components/preview/preview.wxml');

__wxAppCode__['components/tag/tag.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/tag/tag.wxml']=$gwx('./components/tag/tag.wxml');

__wxAppCode__['pages/book/book.json']={"navigationBarTitleText":"书籍","usingComponents":{"v-book":"/components/book/book"}};
__wxAppCode__['pages/book/book.wxml']=$gwx('./pages/book/book.wxml');

__wxAppCode__['pages/classic/classic.json']={"navigationBarTitleText":"流行","usingComponents":{"v-episode":"/components/episode/episode","v-like":"/components/like/like","v-movie":"/components/movie/movie","v-navi":"/components/navi/navi"}};
__wxAppCode__['pages/classic/classic.wxml']=$gwx('./pages/classic/classic.wxml');

__wxAppCode__['pages/my/my.json']={"navigationBarTitleText":"喜欢","usingComponents":{"v-preview":"/components/preview/preview"}};
__wxAppCode__['pages/my/my.wxml']=$gwx('./pages/my/my.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"00da":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={onLaunch:function(){console.log(n("App Launch"," at App.vue:4"))},onShow:function(){console.log(n("App Show"," at App.vue:7"))},onHide:function(){console.log(n("App Hide"," at App.vue:10"))}};e.default=t}).call(this,t("0de9")["default"])},"8a22":function(n,e,t){"use strict";(function(n){t("a886"),t("921b");var e=u(t("66fd")),o=u(t("d1d8"));function u(n){return n&&n.__esModule?n:{default:n}}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),o.forEach(function(e){r(n,e,t[e])})}return n}function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}e.default.config.productionTip=!1,o.default.mpType="app";var c=new e.default(a({},o.default));n(c).$mount()}).call(this,t("6e42")["createApp"])},a71d:function(n,e,t){},a7df:function(n,e,t){"use strict";t.r(e);var o=t("00da"),u=t.n(o);for(var a in o)"default"!==a&&function(n){t.d(e,n,function(){return o[n]})}(a);e["default"]=u.a},d1d8:function(n,e,t){"use strict";t.r(e);var o=t("a7df");for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);t("d49e");var a,r,c=t("2877"),f=Object(c["a"])(o["default"],a,r,!1,null,null,null);e["default"]=f.exports},d49e:function(n,e,t){"use strict";var o=t("a71d"),u=t.n(o);u.a}},[["8a22","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function t(t) {
    for (var o, r, c = t[0], s = t[1], u = t[2], p = 0, l = []; p < c.length; p++) {
      r = c[p], i[r] && l.push(i[r][0]), i[r] = 0;
    }

    for (o in s) {
      Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o]);
    }

    m && m(t);

    while (l.length) {
      l.shift()();
    }

    return a.push.apply(a, u || []), n();
  }

  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], o = !0, r = 1; r < n.length; r++) {
        var c = n[r];
        0 !== i[c] && (o = !1);
      }

      o && (a.splice(t--, 1), e = s(s.s = n[0]));
    }

    return e;
  }

  var o = {},
      r = {
    "common/runtime": 0
  },
      i = {
    "common/runtime": 0
  },
      a = [];

  function c(e) {
    return s.p + "" + e + ".js";
  }

  function s(t) {
    if (o[t]) return o[t].exports;
    var n = o[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, s), n.l = !0, n.exports;
  }

  s.e = function (e) {
    var t = [],
        n = {
      "components/episode/episode": 1,
      "components/like/like": 1,
      "components/navi/navi": 1,
      "components/movie/movie": 1,
      "components/book/book": 1,
      "components/preview/preview": 1,
      "components/tag/tag": 1
    };
    r[e] ? t.push(r[e]) : 0 !== r[e] && n[e] && t.push(r[e] = new Promise(function (t, n) {
      for (var o = ({
        "components/episode/episode": "components/episode/episode",
        "components/like/like": "components/like/like",
        "components/navi/navi": "components/navi/navi",
        "components/movie/movie": "components/movie/movie",
        "components/book/book": "components/book/book",
        "components/preview/preview": "components/preview/preview",
        "components/tag/tag": "components/tag/tag"
      }[e] || e) + ".wxss", i = s.p + o, a = document.getElementsByTagName("link"), c = 0; c < a.length; c++) {
        var u = a[c],
            p = u.getAttribute("data-href") || u.getAttribute("href");
        if ("stylesheet" === u.rel && (p === o || p === i)) return t();
      }

      var l = document.getElementsByTagName("style");

      for (c = 0; c < l.length; c++) {
        u = l[c], p = u.getAttribute("data-href");
        if (p === o || p === i) return t();
      }

      var m = document.createElement("link");
      m.rel = "stylesheet", m.type = "text/css", m.onload = t, m.onerror = function (t) {
        var o = t && t.target && t.target.src || i,
            a = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
        a.request = o, delete r[e], m.parentNode.removeChild(m), n(a);
      }, m.href = i;
      var f = document.getElementsByTagName("head")[0];
      f.appendChild(m);
    }).then(function () {
      r[e] = 0;
    }));
    var o = i[e];
    if (0 !== o) if (o) t.push(o[2]);else {
      var a = new Promise(function (t, n) {
        o = i[e] = [t, n];
      });
      t.push(o[2] = a);
      var u,
          p = document.createElement("script");
      p.charset = "utf-8", p.timeout = 120, s.nc && p.setAttribute("nonce", s.nc), p.src = c(e), u = function u(t) {
        p.onerror = p.onload = null, clearTimeout(l);
        var n = i[e];

        if (0 !== n) {
          if (n) {
            var o = t && ("load" === t.type ? "missing" : t.type),
                r = t && t.target && t.target.src,
                a = new Error("Loading chunk " + e + " failed.\n(" + o + ": " + r + ")");
            a.type = o, a.request = r, n[1](a);
          }

          i[e] = void 0;
        }
      };
      var l = setTimeout(function () {
        u({
          type: "timeout",
          target: p
        });
      }, 12e4);
      p.onerror = p.onload = u, document.head.appendChild(p);
    }
    return Promise.all(t);
  }, s.m = e, s.c = o, s.d = function (e, t, n) {
    s.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, s.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, s.t = function (e, t) {
    if (1 & t && (e = s(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (s.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) {
      s.d(n, o, function (t) {
        return e[t];
      }.bind(null, o));
    }
    return n;
  }, s.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return s.d(t, "a", t), t;
  }, s.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, s.p = "/", s.oe = function (e) {
    throw console.error(e), e;
  };
  var u = global["webpackJsonp"] = global["webpackJsonp"] || [],
      p = u.push.bind(u);
  u.push = t, u = u.slice();

  for (var l = 0; l < u.length; l++) {
    t(u[l]);
  }

  var m = p;
  n();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(A,g,C){"use strict";function I(A){var g=Object.prototype.toString.call(A);return g.substring(8,g.length-1)}function t(){for(var A=arguments.length,g=new Array(A),C=0;C<A;C++)g[C]=arguments[C];var t=g.map(function(A){var g=Object.prototype.toString.call(A);if("[object object]"===g.toLowerCase())try{A="---BEGIN:JSON---"+JSON.stringify(A)+"---END:JSON---"}catch(t){A="[object object]"}else if(null===A)A="---NULL---";else if(void 0===A)A="---UNDEFINED---";else{var C=I(A).toUpperCase();A="NUMBER"===C||"BOOLEAN"===C?"---BEGIN:"+C+"---"+A+"---END:"+C+"---":String(A)}return A}),e="";if(t.length>1){var n=t.pop();e=t.join("---COMMA---"),0===n.indexOf(" at ")?e+=n:e+="---COMMA---"+n}else e=t[0];return e}Object.defineProperty(g,"__esModule",{value:!0}),g.default=t},2877:function(A,g,C){"use strict";function I(A,g,C,I,t,e,n,r){var i,o="function"===typeof A?A.options:A;if(g&&(o.render=g,o.staticRenderFns=C,o._compiled=!0),I&&(o.functional=!0),e&&(o._scopeId="data-v-"+e),n?(i=function(A){A=A||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,A||"undefined"===typeof __VUE_SSR_CONTEXT__||(A=__VUE_SSR_CONTEXT__),t&&t.call(this,A),A&&A._registeredComponents&&A._registeredComponents.add(n)},o._ssrRegister=i):t&&(i=r?function(){t.call(this,this.$root.$options.shadowRoot)}:t),i)if(o.functional){o._injectStyles=i;var a=o.render;o.render=function(A,g){return i.call(g),a(A,g)}}else{var c=o.beforeCreate;o.beforeCreate=c?[].concat(c,i):[i]}return{exports:A,options:o}}C.d(g,"a",function(){return I})},3403:function(A,g,C){"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0;var I={pages:{"pages/classic/classic":{navigationBarTitleText:"流行"},"pages/book/book":{navigationBarTitleText:"书籍"},"pages/my/my":{navigationBarTitleText:"喜欢"}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"旧岛小厅",navigationBarBackgroundColor:"#fff",backgroundColor:"#FFFFFF"}};g.default=I},"3a1f":function(A,g){A.exports="data:image/png;base64,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0p8zAAA7ImlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoTWFjaW50b3NoKTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAxOC0wNi0yNVQxNToxNzo0MyswODowMDwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDE4LTA2LTI1VDE2OjM5OjU5KzA4OjAwPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxOC0wNi0yNVQxNjozOTo1OSswODowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHBob3Rvc2hvcDpJQ0NQcm9maWxlPnNSR0IgSUVDNjE5NjYtMi4xPC9waG90b3Nob3A6SUNDUHJvZmlsZT4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDpmMDI2YjY0NC1lN2JlLTRjYTktYWQxNi1lZjBhYjA3YTFhNGY8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiYzg3MjgwNS1iOGUxLTExN2ItYjFjYy1mNzg5MTQyZWZhNDE8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDpmNDdhZmQ2MS0wYTZiLTQyMGYtOGUyZC0xOTFlODFmOGI2MGU8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jcmVhdGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6ZjQ3YWZkNjEtMGE2Yi00MjBmLThlMmQtMTkxZTgxZjhiNjBlPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE4LTA2LTI1VDE1OjE3OjQzKzA4OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNvbnZlcnRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6cGFyYW1ldGVycz5mcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nPC9zdEV2dDpwYXJhbWV0ZXJzPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDpmMDI2YjY0NC1lN2JlLTRjYTktYWQxNi1lZjBhYjA3YTFhNGY8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTgtMDYtMjVUMTY6Mzk6NTkrMDg6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChNYWNpbnRvc2gpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgPC9yZGY6U2VxPgogICAgICAgICA8L3htcE1NOkhpc3Rvcnk+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjgwPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjgwPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz6I89g8AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAHbSURBVHja7NzNi01hAMfxz7yYNFZYoKScP8ACqSlRkoW/YCzYDGJhxVbyB7CQRNiwGKmRjY2F8lJjFjb+gKOkUF52XmbStbhnNSn3PKUz1/y+u3vq1unTc57nOc+tO9Lr9aTyRkMQwAAGMIApgAEMYABTAAMYwACmAAYwgAFMAQxgAAOYAviPG+/6Buq6Lv3qGM7jHH7iZFVVcxmBg7UBj3AB65rPN1flCCxoBx5i+7Lr6zMH/r1pzP8BL4vIAPPdJcxiMotIuzbiPg5kFW7fLjzAtuwD23cUL1Yy3koFXIMruIO12Ui3a1Mz3+3Lm0j79mAOW/Mu3L4ZPB82vM4B67qewDXcwkQOE9rhbWke2SlD3HhHeFPN/m6zIW+0A7xpPP0f8LqaA280ez0BTJ0AnsJSAAurqmoW+/EhgOWI89iJlwEsR3zfjMTrASxHXMRpHMdiAMu7rX8C8y6A5S1gN54FsLyPOIirASxvCWdwDD8CWN5d7MXbAJb3Sv+XuScBLO8TDuFyAMv7hbM4gm8BLO+e/gn2mwCW97rZLz5edv1rAAfvCw7jIr7jM050cSMj+eOd1TkCAxjAFMAABjCAAQxBAAMYwACmAAYwgAFMAQxgAAOYAhjA4en3AHY0TN5a4T8cAAAAAElFTkSuQmCC"},"66fd":function(A,g,C){"use strict";C.r(g),function(A){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var C=Object.freeze({});function I(A){return void 0===A||null===A}function t(A){return void 0!==A&&null!==A}function e(A){return!0===A}function n(A){return!1===A}function r(A){return"string"===typeof A||"number"===typeof A||"symbol"===typeof A||"boolean"===typeof A}function i(A){return null!==A&&"object"===typeof A}var o=Object.prototype.toString;function a(A){return"[object Object]"===o.call(A)}function c(A){return"[object RegExp]"===o.call(A)}function u(A){var g=parseFloat(String(A));return g>=0&&Math.floor(g)===g&&isFinite(A)}function s(A){return t(A)&&"function"===typeof A.then&&"function"===typeof A.catch}function l(A){return null==A?"":Array.isArray(A)||a(A)&&A.toString===o?JSON.stringify(A,null,2):String(A)}function p(A){var g=parseFloat(A);return isNaN(g)?A:g}function f(A,g){for(var C=Object.create(null),I=A.split(","),t=0;t<I.length;t++)C[I[t]]=!0;return g?function(A){return C[A.toLowerCase()]}:function(A){return C[A]}}f("slot,component",!0);var d=f("key,ref,slot,slot-scope,is");function v(A,g){if(A.length){var C=A.indexOf(g);if(C>-1)return A.splice(C,1)}}var h=Object.prototype.hasOwnProperty;function y(A,g){return h.call(A,g)}function m(A){var g=Object.create(null);return function(C){var I=g[C];return I||(g[C]=A(C))}}var b=/-(\w)/g,w=m(function(A){return A.replace(b,function(A,g){return g?g.toUpperCase():""})}),Z=m(function(A){return A.charAt(0).toUpperCase()+A.slice(1)}),O=/\B([A-Z])/g,j=m(function(A){return A.replace(O,"-$1").toLowerCase()});function D(A,g){function C(C){var I=arguments.length;return I?I>1?A.apply(g,arguments):A.call(g,C):A.call(g)}return C._length=A.length,C}function _(A,g){return A.bind(g)}var R=Function.prototype.bind?_:D;function G(A,g){g=g||0;var C=A.length-g,I=new Array(C);while(C--)I[C]=A[C+g];return I}function P(A,g){for(var C in g)A[C]=g[C];return A}function M(A){for(var g={},C=0;C<A.length;C++)A[C]&&P(g,A[C]);return g}function N(A,g,C){}var E=function(A,g,C){return!1},k=function(A){return A};function S(A,g){if(A===g)return!0;var C=i(A),I=i(g);if(!C||!I)return!C&&!I&&String(A)===String(g);try{var t=Array.isArray(A),e=Array.isArray(g);if(t&&e)return A.length===g.length&&A.every(function(A,C){return S(A,g[C])});if(A instanceof Date&&g instanceof Date)return A.getTime()===g.getTime();if(t||e)return!1;var n=Object.keys(A),r=Object.keys(g);return n.length===r.length&&n.every(function(C){return S(A[C],g[C])})}catch(o){return!1}}function W(A,g){for(var C=0;C<A.length;C++)if(S(A[C],g))return C;return-1}function x(A){var g=!1;return function(){g||(g=!0,A.apply(this,arguments))}}var Y=["component","directive","filter"],V=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],T={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:E,isReservedAttr:E,isUnknownElement:E,getTagNamespace:N,parsePlatformTagName:k,mustUseProp:E,async:!0,_lifecycleHooks:V},L=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function B(A){var g=(A+"").charCodeAt(0);return 36===g||95===g}function U(A,g,C,I){Object.defineProperty(A,g,{value:C,enumerable:!!I,writable:!0,configurable:!0})}var F=new RegExp("[^"+L.source+".$_\\d]");function K(A){if(!F.test(A)){var g=A.split(".");return function(A){for(var C=0;C<g.length;C++){if(!A)return;A=A[g[C]]}return A}}}var z,Q="__proto__"in{},H="undefined"!==typeof window,X="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,J=X&&WXEnvironment.platform.toLowerCase(),q=H&&window.navigator.userAgent.toLowerCase(),$=q&&/msie|trident/.test(q),AA=(q&&q.indexOf("msie 9.0"),q&&q.indexOf("edge/")>0),gA=(q&&q.indexOf("android"),q&&/iphone|ipad|ipod|ios/.test(q)||"ios"===J),CA=(q&&/chrome\/\d+/.test(q),q&&/phantomjs/.test(q),q&&q.match(/firefox\/(\d+)/),{}.watch);if(H)try{var IA={};Object.defineProperty(IA,"passive",{get:function(){}}),window.addEventListener("test-passive",null,IA)}catch(At){}var tA=function(){return void 0===z&&(z=!H&&!X&&"undefined"!==typeof A&&(A["process"]&&"server"===A["process"].env.VUE_ENV)),z},eA=H&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function nA(A){return"function"===typeof A&&/native code/.test(A.toString())}var rA,iA="undefined"!==typeof Symbol&&nA(Symbol)&&"undefined"!==typeof Reflect&&nA(Reflect.ownKeys);rA="undefined"!==typeof Set&&nA(Set)?Set:function(){function A(){this.set=Object.create(null)}return A.prototype.has=function(A){return!0===this.set[A]},A.prototype.add=function(A){this.set[A]=!0},A.prototype.clear=function(){this.set=Object.create(null)},A}();var oA=N,aA=0,cA=function(){this.id=aA++,this.subs=[]};function uA(A){cA.SharedObject.targetStack.push(A),cA.SharedObject.target=A}function sA(){cA.SharedObject.targetStack.pop(),cA.SharedObject.target=cA.SharedObject.targetStack[cA.SharedObject.targetStack.length-1]}cA.prototype.addSub=function(A){this.subs.push(A)},cA.prototype.removeSub=function(A){v(this.subs,A)},cA.prototype.depend=function(){cA.SharedObject.target&&cA.SharedObject.target.addDep(this)},cA.prototype.notify=function(){var A=this.subs.slice();for(var g=0,C=A.length;g<C;g++)A[g].update()},cA.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},cA.SharedObject.target=null,cA.SharedObject.targetStack=[];var lA=function(A,g,C,I,t,e,n,r){this.tag=A,this.data=g,this.children=C,this.text=I,this.elm=t,this.ns=void 0,this.context=e,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=g&&g.key,this.componentOptions=n,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=r,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},pA={child:{configurable:!0}};pA.child.get=function(){return this.componentInstance},Object.defineProperties(lA.prototype,pA);var fA=function(A){void 0===A&&(A="");var g=new lA;return g.text=A,g.isComment=!0,g};function dA(A){return new lA(void 0,void 0,void 0,String(A))}function vA(A){var g=new lA(A.tag,A.data,A.children&&A.children.slice(),A.text,A.elm,A.context,A.componentOptions,A.asyncFactory);return g.ns=A.ns,g.isStatic=A.isStatic,g.key=A.key,g.isComment=A.isComment,g.fnContext=A.fnContext,g.fnOptions=A.fnOptions,g.fnScopeId=A.fnScopeId,g.asyncMeta=A.asyncMeta,g.isCloned=!0,g}var hA=Array.prototype,yA=Object.create(hA),mA=["push","pop","shift","unshift","splice","sort","reverse"];mA.forEach(function(A){var g=hA[A];U(yA,A,function(){var C=[],I=arguments.length;while(I--)C[I]=arguments[I];var t,e=g.apply(this,C),n=this.__ob__;switch(A){case"push":case"unshift":t=C;break;case"splice":t=C.slice(2);break}return t&&n.observeArray(t),n.dep.notify(),e})});var bA=Object.getOwnPropertyNames(yA),wA=!0;function ZA(A){wA=A}var OA=function(A){this.value=A,this.dep=new cA,this.vmCount=0,U(A,"__ob__",this),Array.isArray(A)?(Q?A.push!==A.__proto__.push?DA(A,yA,bA):jA(A,yA):DA(A,yA,bA),this.observeArray(A)):this.walk(A)};function jA(A,g){A.__proto__=g}function DA(A,g,C){for(var I=0,t=C.length;I<t;I++){var e=C[I];U(A,e,g[e])}}function _A(A,g){var C;if(i(A)&&!(A instanceof lA))return y(A,"__ob__")&&A.__ob__ instanceof OA?C=A.__ob__:wA&&!tA()&&(Array.isArray(A)||a(A))&&Object.isExtensible(A)&&!A._isVue&&(C=new OA(A)),g&&C&&C.vmCount++,C}function RA(A,g,C,I,t){var e=new cA,n=Object.getOwnPropertyDescriptor(A,g);if(!n||!1!==n.configurable){var r=n&&n.get,i=n&&n.set;r&&!i||2!==arguments.length||(C=A[g]);var o=!t&&_A(C);Object.defineProperty(A,g,{enumerable:!0,configurable:!0,get:function(){var g=r?r.call(A):C;return cA.SharedObject.target&&(e.depend(),o&&(o.dep.depend(),Array.isArray(g)&&MA(g))),g},set:function(g){var I=r?r.call(A):C;g===I||g!==g&&I!==I||r&&!i||(i?i.call(A,g):C=g,o=!t&&_A(g),e.notify())}})}}function GA(A,g,C){if(Array.isArray(A)&&u(g))return A.length=Math.max(A.length,g),A.splice(g,1,C),C;if(g in A&&!(g in Object.prototype))return A[g]=C,C;var I=A.__ob__;return A._isVue||I&&I.vmCount?C:I?(RA(I.value,g,C),I.dep.notify(),C):(A[g]=C,C)}function PA(A,g){if(Array.isArray(A)&&u(g))A.splice(g,1);else{var C=A.__ob__;A._isVue||C&&C.vmCount||y(A,g)&&(delete A[g],C&&C.dep.notify())}}function MA(A){for(var g=void 0,C=0,I=A.length;C<I;C++)g=A[C],g&&g.__ob__&&g.__ob__.dep.depend(),Array.isArray(g)&&MA(g)}OA.prototype.walk=function(A){for(var g=Object.keys(A),C=0;C<g.length;C++)RA(A,g[C])},OA.prototype.observeArray=function(A){for(var g=0,C=A.length;g<C;g++)_A(A[g])};var NA=T.optionMergeStrategies;function EA(A,g){if(!g)return A;for(var C,I,t,e=iA?Reflect.ownKeys(g):Object.keys(g),n=0;n<e.length;n++)C=e[n],"__ob__"!==C&&(I=A[C],t=g[C],y(A,C)?I!==t&&a(I)&&a(t)&&EA(I,t):GA(A,C,t));return A}function kA(A,g,C){return C?function(){var I="function"===typeof g?g.call(C,C):g,t="function"===typeof A?A.call(C,C):A;return I?EA(I,t):t}:g?A?function(){return EA("function"===typeof g?g.call(this,this):g,"function"===typeof A?A.call(this,this):A)}:g:A}function SA(A,g){var C=g?A?A.concat(g):Array.isArray(g)?g:[g]:A;return C?WA(C):C}function WA(A){for(var g=[],C=0;C<A.length;C++)-1===g.indexOf(A[C])&&g.push(A[C]);return g}function xA(A,g,C,I){var t=Object.create(A||null);return g?P(t,g):t}NA.data=function(A,g,C){return C?kA(A,g,C):g&&"function"!==typeof g?A:kA(A,g)},V.forEach(function(A){NA[A]=SA}),Y.forEach(function(A){NA[A+"s"]=xA}),NA.watch=function(A,g,C,I){if(A===CA&&(A=void 0),g===CA&&(g=void 0),!g)return Object.create(A||null);if(!A)return g;var t={};for(var e in P(t,A),g){var n=t[e],r=g[e];n&&!Array.isArray(n)&&(n=[n]),t[e]=n?n.concat(r):Array.isArray(r)?r:[r]}return t},NA.props=NA.methods=NA.inject=NA.computed=function(A,g,C,I){if(!A)return g;var t=Object.create(null);return P(t,A),g&&P(t,g),t},NA.provide=kA;var YA=function(A,g){return void 0===g?A:g};function VA(A,g){var C=A.props;if(C){var I,t,e,n={};if(Array.isArray(C)){I=C.length;while(I--)t=C[I],"string"===typeof t&&(e=w(t),n[e]={type:null})}else if(a(C))for(var r in C)t=C[r],e=w(r),n[e]=a(t)?t:{type:t};else 0;A.props=n}}function TA(A,g){var C=A.inject;if(C){var I=A.inject={};if(Array.isArray(C))for(var t=0;t<C.length;t++)I[C[t]]={from:C[t]};else if(a(C))for(var e in C){var n=C[e];I[e]=a(n)?P({from:e},n):{from:n}}else 0}}function LA(A){var g=A.directives;if(g)for(var C in g){var I=g[C];"function"===typeof I&&(g[C]={bind:I,update:I})}}function BA(A,g,C){if("function"===typeof g&&(g=g.options),VA(g,C),TA(g,C),LA(g),!g._base&&(g.extends&&(A=BA(A,g.extends,C)),g.mixins))for(var I=0,t=g.mixins.length;I<t;I++)A=BA(A,g.mixins[I],C);var e,n={};for(e in A)r(e);for(e in g)y(A,e)||r(e);function r(I){var t=NA[I]||YA;n[I]=t(A[I],g[I],C,I)}return n}function UA(A,g,C,I){if("string"===typeof C){var t=A[g];if(y(t,C))return t[C];var e=w(C);if(y(t,e))return t[e];var n=Z(e);if(y(t,n))return t[n];var r=t[C]||t[e]||t[n];return r}}function FA(A,g,C,I){var t=g[A],e=!y(C,A),n=C[A],r=HA(Boolean,t.type);if(r>-1)if(e&&!y(t,"default"))n=!1;else if(""===n||n===j(A)){var i=HA(String,t.type);(i<0||r<i)&&(n=!0)}if(void 0===n){n=KA(I,t,A);var o=wA;ZA(!0),_A(n),ZA(o)}return n}function KA(A,g,C){if(y(g,"default")){var I=g.default;return A&&A.$options.propsData&&void 0===A.$options.propsData[C]&&void 0!==A._props[C]?A._props[C]:"function"===typeof I&&"Function"!==zA(g.type)?I.call(A):I}}function zA(A){var g=A&&A.toString().match(/^\s*function (\w+)/);return g?g[1]:""}function QA(A,g){return zA(A)===zA(g)}function HA(A,g){if(!Array.isArray(g))return QA(g,A)?0:-1;for(var C=0,I=g.length;C<I;C++)if(QA(g[C],A))return C;return-1}function XA(A,g,C){uA();try{if(g){var I=g;while(I=I.$parent){var t=I.$options.errorCaptured;if(t)for(var e=0;e<t.length;e++)try{var n=!1===t[e].call(I,A,g,C);if(n)return}catch(At){qA(At,I,"errorCaptured hook")}}}qA(A,g,C)}finally{sA()}}function JA(A,g,C,I,t){var e;try{e=C?A.apply(g,C):A.call(g),e&&!e._isVue&&s(e)&&!e._handled&&(e.catch(function(A){return XA(A,I,t+" (Promise/async)")}),e._handled=!0)}catch(At){XA(At,I,t)}return e}function qA(A,g,C){if(T.errorHandler)try{return T.errorHandler.call(null,A,g,C)}catch(At){At!==A&&$A(At,null,"config.errorHandler")}$A(A,g,C)}function $A(A,g,C){if(!H&&!X||"undefined"===typeof console)throw A;console.error(A)}var Ag,gg=[],Cg=!1;function Ig(){Cg=!1;var A=gg.slice(0);gg.length=0;for(var g=0;g<A.length;g++)A[g]()}if("undefined"!==typeof Promise&&nA(Promise)){var tg=Promise.resolve();Ag=function(){tg.then(Ig),gA&&setTimeout(N)}}else if($||"undefined"===typeof MutationObserver||!nA(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())Ag="undefined"!==typeof setImmediate&&nA(setImmediate)?function(){setImmediate(Ig)}:function(){setTimeout(Ig,0)};else{var eg=1,ng=new MutationObserver(Ig),rg=document.createTextNode(String(eg));ng.observe(rg,{characterData:!0}),Ag=function(){eg=(eg+1)%2,rg.data=String(eg)}}function ig(A,g){var C;if(gg.push(function(){if(A)try{A.call(g)}catch(At){XA(At,g,"nextTick")}else C&&C(g)}),Cg||(Cg=!0,Ag()),!A&&"undefined"!==typeof Promise)return new Promise(function(A){C=A})}var og=new rA;function ag(A){cg(A,og),og.clear()}function cg(A,g){var C,I,t=Array.isArray(A);if(!(!t&&!i(A)||Object.isFrozen(A)||A instanceof lA)){if(A.__ob__){var e=A.__ob__.dep.id;if(g.has(e))return;g.add(e)}if(t){C=A.length;while(C--)cg(A[C],g)}else{I=Object.keys(A),C=I.length;while(C--)cg(A[I[C]],g)}}}var ug=m(function(A){var g="&"===A.charAt(0);A=g?A.slice(1):A;var C="~"===A.charAt(0);A=C?A.slice(1):A;var I="!"===A.charAt(0);return A=I?A.slice(1):A,{name:A,once:C,capture:I,passive:g}});function sg(A,g){function C(){var A=arguments,I=C.fns;if(!Array.isArray(I))return JA(I,null,arguments,g,"v-on handler");for(var t=I.slice(),e=0;e<t.length;e++)JA(t[e],null,A,g,"v-on handler")}return C.fns=A,C}function lg(A,g,C,t,n,r){var i,o,a,c;for(i in A)o=A[i],a=g[i],c=ug(i),I(o)||(I(a)?(I(o.fns)&&(o=A[i]=sg(o,r)),e(c.once)&&(o=A[i]=n(c.name,o,c.capture)),C(c.name,o,c.capture,c.passive,c.params)):o!==a&&(a.fns=o,A[i]=a));for(i in g)I(A[i])&&(c=ug(i),t(c.name,g[i],c.capture))}function pg(A,g,C){var e=g.options.props;if(!I(e)){var n={},r=A.attrs,i=A.props;if(t(r)||t(i))for(var o in e){var a=j(o);fg(n,i,o,a,!0)||fg(n,r,o,a,!1)}return n}}function fg(A,g,C,I,e){if(t(g)){if(y(g,C))return A[C]=g[C],e||delete g[C],!0;if(y(g,I))return A[C]=g[I],e||delete g[I],!0}return!1}function dg(A){for(var g=0;g<A.length;g++)if(Array.isArray(A[g]))return Array.prototype.concat.apply([],A);return A}function vg(A){return r(A)?[dA(A)]:Array.isArray(A)?yg(A):void 0}function hg(A){return t(A)&&t(A.text)&&n(A.isComment)}function yg(A,g){var C,n,i,o,a=[];for(C=0;C<A.length;C++)n=A[C],I(n)||"boolean"===typeof n||(i=a.length-1,o=a[i],Array.isArray(n)?n.length>0&&(n=yg(n,(g||"")+"_"+C),hg(n[0])&&hg(o)&&(a[i]=dA(o.text+n[0].text),n.shift()),a.push.apply(a,n)):r(n)?hg(o)?a[i]=dA(o.text+n):""!==n&&a.push(dA(n)):hg(n)&&hg(o)?a[i]=dA(o.text+n.text):(e(A._isVList)&&t(n.tag)&&I(n.key)&&t(g)&&(n.key="__vlist"+g+"_"+C+"__"),a.push(n)));return a}function mg(A){var g=A.$options.provide;g&&(A._provided="function"===typeof g?g.call(A):g)}function bg(A){var g=wg(A.$options.inject,A);g&&(ZA(!1),Object.keys(g).forEach(function(C){RA(A,C,g[C])}),ZA(!0))}function wg(A,g){if(A){for(var C=Object.create(null),I=iA?Reflect.ownKeys(A):Object.keys(A),t=0;t<I.length;t++){var e=I[t];if("__ob__"!==e){var n=A[e].from,r=g;while(r){if(r._provided&&y(r._provided,n)){C[e]=r._provided[n];break}r=r.$parent}if(!r)if("default"in A[e]){var i=A[e].default;C[e]="function"===typeof i?i.call(g):i}else 0}}return C}}function Zg(A,g){if(!A||!A.length)return{};for(var C={},I=0,t=A.length;I<t;I++){var e=A[I],n=e.data;if(n&&n.attrs&&n.attrs.slot&&delete n.attrs.slot,e.context!==g&&e.fnContext!==g||!n||null==n.slot)e.asyncMeta&&e.asyncMeta.data&&"page"===e.asyncMeta.data.slot?(C["page"]||(C["page"]=[])).push(e):(C.default||(C.default=[])).push(e);else{var r=n.slot,i=C[r]||(C[r]=[]);"template"===e.tag?i.push.apply(i,e.children||[]):i.push(e)}}for(var o in C)C[o].every(Og)&&delete C[o];return C}function Og(A){return A.isComment&&!A.asyncFactory||" "===A.text}function jg(A,g,I){var t,e=Object.keys(g).length>0,n=A?!!A.$stable:!e,r=A&&A.$key;if(A){if(A._normalized)return A._normalized;if(n&&I&&I!==C&&r===I.$key&&!e&&!I.$hasNormal)return I;for(var i in t={},A)A[i]&&"$"!==i[0]&&(t[i]=Dg(g,i,A[i]))}else t={};for(var o in g)o in t||(t[o]=_g(g,o));return A&&Object.isExtensible(A)&&(A._normalized=t),U(t,"$stable",n),U(t,"$key",r),U(t,"$hasNormal",e),t}function Dg(A,g,C){var I=function(){var A=arguments.length?C.apply(null,arguments):C({});return A=A&&"object"===typeof A&&!Array.isArray(A)?[A]:vg(A),A&&(0===A.length||1===A.length&&A[0].isComment)?void 0:A};return C.proxy&&Object.defineProperty(A,g,{get:I,enumerable:!0,configurable:!0}),I}function _g(A,g){return function(){return A[g]}}function Rg(A,g){var C,I,e,n,r;if(Array.isArray(A)||"string"===typeof A)for(C=new Array(A.length),I=0,e=A.length;I<e;I++)C[I]=g(A[I],I);else if("number"===typeof A)for(C=new Array(A),I=0;I<A;I++)C[I]=g(I+1,I);else if(i(A))if(iA&&A[Symbol.iterator]){C=[];var o=A[Symbol.iterator](),a=o.next();while(!a.done)C.push(g(a.value,C.length)),a=o.next()}else for(n=Object.keys(A),C=new Array(n.length),I=0,e=n.length;I<e;I++)r=n[I],C[I]=g(A[r],r,I);return t(C)||(C=[]),C._isVList=!0,C}function Gg(A,g,C,I){var t,e=this.$scopedSlots[A];e?(C=C||{},I&&(C=P(P({},I),C)),t=e(C)||g):t=this.$slots[A]||g;var n=C&&C.slot;return n?this.$createElement("template",{slot:n},t):t}function Pg(A){return UA(this.$options,"filters",A,!0)||k}function Mg(A,g){return Array.isArray(A)?-1===A.indexOf(g):A!==g}function Ng(A,g,C,I,t){var e=T.keyCodes[g]||C;return t&&I&&!T.keyCodes[g]?Mg(t,I):e?Mg(e,A):I?j(I)!==g:void 0}function Eg(A,g,C,I,t){if(C)if(i(C)){var e;Array.isArray(C)&&(C=M(C));var n=function(n){if("class"===n||"style"===n||d(n))e=A;else{var r=A.attrs&&A.attrs.type;e=I||T.mustUseProp(g,r,n)?A.domProps||(A.domProps={}):A.attrs||(A.attrs={})}var i=w(n),o=j(n);if(!(i in e)&&!(o in e)&&(e[n]=C[n],t)){var a=A.on||(A.on={});a["update:"+n]=function(A){C[n]=A}}};for(var r in C)n(r)}else;return A}function kg(A,g){var C=this._staticTrees||(this._staticTrees=[]),I=C[A];return I&&!g?I:(I=C[A]=this.$options.staticRenderFns[A].call(this._renderProxy,null,this),Wg(I,"__static__"+A,!1),I)}function Sg(A,g,C){return Wg(A,"__once__"+g+(C?"_"+C:""),!0),A}function Wg(A,g,C){if(Array.isArray(A))for(var I=0;I<A.length;I++)A[I]&&"string"!==typeof A[I]&&xg(A[I],g+"_"+I,C);else xg(A,g,C)}function xg(A,g,C){A.isStatic=!0,A.key=g,A.isOnce=C}function Yg(A,g){if(g)if(a(g)){var C=A.on=A.on?P({},A.on):{};for(var I in g){var t=C[I],e=g[I];C[I]=t?[].concat(t,e):e}}else;return A}function Vg(A,g,C,I){g=g||{$stable:!C};for(var t=0;t<A.length;t++){var e=A[t];Array.isArray(e)?Vg(e,g,C):e&&(e.proxy&&(e.fn.proxy=!0),g[e.key]=e.fn)}return I&&(g.$key=I),g}function Tg(A,g){for(var C=0;C<g.length;C+=2){var I=g[C];"string"===typeof I&&I&&(A[g[C]]=g[C+1])}return A}function Lg(A,g){return"string"===typeof A?g+A:A}function Bg(A){A._o=Sg,A._n=p,A._s=l,A._l=Rg,A._t=Gg,A._q=S,A._i=W,A._m=kg,A._f=Pg,A._k=Ng,A._b=Eg,A._v=dA,A._e=fA,A._u=Vg,A._g=Yg,A._d=Tg,A._p=Lg}function Ug(A,g,I,t,n){var r,i=this,o=n.options;y(t,"_uid")?(r=Object.create(t),r._original=t):(r=t,t=t._original);var a=e(o._compiled),c=!a;this.data=A,this.props=g,this.children=I,this.parent=t,this.listeners=A.on||C,this.injections=wg(o.inject,t),this.slots=function(){return i.$slots||jg(A.scopedSlots,i.$slots=Zg(I,t)),i.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return jg(A.scopedSlots,this.slots())}}),a&&(this.$options=o,this.$slots=this.slots(),this.$scopedSlots=jg(A.scopedSlots,this.$slots)),o._scopeId?this._c=function(A,g,C,I){var e=IC(r,A,g,C,I,c);return e&&!Array.isArray(e)&&(e.fnScopeId=o._scopeId,e.fnContext=t),e}:this._c=function(A,g,C,I){return IC(r,A,g,C,I,c)}}function Fg(A,g,I,e,n){var r=A.options,i={},o=r.props;if(t(o))for(var a in o)i[a]=FA(a,o,g||C);else t(I.attrs)&&zg(i,I.attrs),t(I.props)&&zg(i,I.props);var c=new Ug(I,i,n,e,A),u=r.render.call(null,c._c,c);if(u instanceof lA)return Kg(u,I,c.parent,r,c);if(Array.isArray(u)){for(var s=vg(u)||[],l=new Array(s.length),p=0;p<s.length;p++)l[p]=Kg(s[p],I,c.parent,r,c);return l}}function Kg(A,g,C,I,t){var e=vA(A);return e.fnContext=C,e.fnOptions=I,g.slot&&((e.data||(e.data={})).slot=g.slot),e}function zg(A,g){for(var C in g)A[w(C)]=g[C]}Bg(Ug.prototype);var Qg={init:function(A,g){if(A.componentInstance&&!A.componentInstance._isDestroyed&&A.data.keepAlive){var C=A;Qg.prepatch(C,C)}else{var I=A.componentInstance=Jg(A,bC);I.$mount(g?A.elm:void 0,g)}},prepatch:function(A,g){var C=g.componentOptions,I=g.componentInstance=A.componentInstance;jC(I,C.propsData,C.listeners,g,C.children)},insert:function(A){var g=A.context,C=A.componentInstance;C._isMounted||(C._isMounted=!0,GC(C,"mounted")),A.data.keepAlive&&(g._isMounted?LC(C):_C(C,!0))},destroy:function(A){var g=A.componentInstance;g._isDestroyed||(A.data.keepAlive?RC(g,!0):g.$destroy())}},Hg=Object.keys(Qg);function Xg(A,g,C,n,r){if(!I(A)){var o=C.$options._base;if(i(A)&&(A=o.extend(A)),"function"===typeof A){var a;if(I(A.cid)&&(a=A,A=sC(a,o),void 0===A))return uC(a,g,C,n,r);g=g||{},cI(A),t(g.model)&&AC(A.options,g);var c=pg(g,A,r);if(e(A.options.functional))return Fg(A,c,g,C,n);var u=g.on;if(g.on=g.nativeOn,e(A.options.abstract)){var s=g.slot;g={},s&&(g.slot=s)}qg(g);var l=A.options.name||r,p=new lA("vue-component-"+A.cid+(l?"-"+l:""),g,void 0,void 0,void 0,C,{Ctor:A,propsData:c,listeners:u,tag:r,children:n},a);return p}}}function Jg(A,g){var C={_isComponent:!0,_parentVnode:A,parent:g},I=A.data.inlineTemplate;return t(I)&&(C.render=I.render,C.staticRenderFns=I.staticRenderFns),new A.componentOptions.Ctor(C)}function qg(A){for(var g=A.hook||(A.hook={}),C=0;C<Hg.length;C++){var I=Hg[C],t=g[I],e=Qg[I];t===e||t&&t._merged||(g[I]=t?$g(e,t):e)}}function $g(A,g){var C=function(C,I){A(C,I),g(C,I)};return C._merged=!0,C}function AC(A,g){var C=A.model&&A.model.prop||"value",I=A.model&&A.model.event||"input";(g.attrs||(g.attrs={}))[C]=g.model.value;var e=g.on||(g.on={}),n=e[I],r=g.model.callback;t(n)?(Array.isArray(n)?-1===n.indexOf(r):n!==r)&&(e[I]=[r].concat(n)):e[I]=r}var gC=1,CC=2;function IC(A,g,C,I,t,n){return(Array.isArray(C)||r(C))&&(t=I,I=C,C=void 0),e(n)&&(t=CC),tC(A,g,C,I,t)}function tC(A,g,C,I,e){if(t(C)&&t(C.__ob__))return fA();if(t(C)&&t(C.is)&&(g=C.is),!g)return fA();var n,r,i;(Array.isArray(I)&&"function"===typeof I[0]&&(C=C||{},C.scopedSlots={default:I[0]},I.length=0),e===CC?I=vg(I):e===gC&&(I=dg(I)),"string"===typeof g)?(r=A.$vnode&&A.$vnode.ns||T.getTagNamespace(g),n=T.isReservedTag(g)?new lA(T.parsePlatformTagName(g),C,I,void 0,void 0,A):C&&C.pre||!t(i=UA(A.$options,"components",g))?new lA(g,C,I,void 0,void 0,A):Xg(i,C,A,I,g)):n=Xg(g,C,A,I);return Array.isArray(n)?n:t(n)?(t(r)&&eC(n,r),t(C)&&nC(C),n):fA()}function eC(A,g,C){if(A.ns=g,"foreignObject"===A.tag&&(g=void 0,C=!0),t(A.children))for(var n=0,r=A.children.length;n<r;n++){var i=A.children[n];t(i.tag)&&(I(i.ns)||e(C)&&"svg"!==i.tag)&&eC(i,g,C)}}function nC(A){i(A.style)&&ag(A.style),i(A.class)&&ag(A.class)}function rC(A){A._vnode=null,A._staticTrees=null;var g=A.$options,I=A.$vnode=g._parentVnode,t=I&&I.context;A.$slots=Zg(g._renderChildren,t),A.$scopedSlots=C,A._c=function(g,C,I,t){return IC(A,g,C,I,t,!1)},A.$createElement=function(g,C,I,t){return IC(A,g,C,I,t,!0)};var e=I&&I.data;RA(A,"$attrs",e&&e.attrs||C,null,!0),RA(A,"$listeners",g._parentListeners||C,null,!0)}var iC,oC=null;function aC(A){Bg(A.prototype),A.prototype.$nextTick=function(A){return ig(A,this)},A.prototype._render=function(){var A,g=this,C=g.$options,I=C.render,t=C._parentVnode;t&&(g.$scopedSlots=jg(t.data.scopedSlots,g.$slots,g.$scopedSlots)),g.$vnode=t;try{oC=g,A=I.call(g._renderProxy,g.$createElement)}catch(At){XA(At,g,"render"),A=g._vnode}finally{oC=null}return Array.isArray(A)&&1===A.length&&(A=A[0]),A instanceof lA||(A=fA()),A.parent=t,A}}function cC(A,g){return(A.__esModule||iA&&"Module"===A[Symbol.toStringTag])&&(A=A.default),i(A)?g.extend(A):A}function uC(A,g,C,I,t){var e=fA();return e.asyncFactory=A,e.asyncMeta={data:g,context:C,children:I,tag:t},e}function sC(A,g){if(e(A.error)&&t(A.errorComp))return A.errorComp;if(t(A.resolved))return A.resolved;var C=oC;if(C&&t(A.owners)&&-1===A.owners.indexOf(C)&&A.owners.push(C),e(A.loading)&&t(A.loadingComp))return A.loadingComp;if(C&&!t(A.owners)){var n=A.owners=[C],r=!0,o=null,a=null;C.$on("hook:destroyed",function(){return v(n,C)});var c=function(A){for(var g=0,C=n.length;g<C;g++)n[g].$forceUpdate();A&&(n.length=0,null!==o&&(clearTimeout(o),o=null),null!==a&&(clearTimeout(a),a=null))},u=x(function(C){A.resolved=cC(C,g),r?n.length=0:c(!0)}),l=x(function(g){t(A.errorComp)&&(A.error=!0,c(!0))}),p=A(u,l);return i(p)&&(s(p)?I(A.resolved)&&p.then(u,l):s(p.component)&&(p.component.then(u,l),t(p.error)&&(A.errorComp=cC(p.error,g)),t(p.loading)&&(A.loadingComp=cC(p.loading,g),0===p.delay?A.loading=!0:o=setTimeout(function(){o=null,I(A.resolved)&&I(A.error)&&(A.loading=!0,c(!1))},p.delay||200)),t(p.timeout)&&(a=setTimeout(function(){a=null,I(A.resolved)&&l(null)},p.timeout)))),r=!1,A.loading?A.loadingComp:A.resolved}}function lC(A){return A.isComment&&A.asyncFactory}function pC(A){if(Array.isArray(A))for(var g=0;g<A.length;g++){var C=A[g];if(t(C)&&(t(C.componentOptions)||lC(C)))return C}}function fC(A){A._events=Object.create(null),A._hasHookEvent=!1;var g=A.$options._parentListeners;g&&yC(A,g)}function dC(A,g){iC.$on(A,g)}function vC(A,g){iC.$off(A,g)}function hC(A,g){var C=iC;return function I(){var t=g.apply(null,arguments);null!==t&&C.$off(A,I)}}function yC(A,g,C){iC=A,lg(g,C||{},dC,vC,hC,A),iC=void 0}function mC(A){var g=/^hook:/;A.prototype.$on=function(A,C){var I=this;if(Array.isArray(A))for(var t=0,e=A.length;t<e;t++)I.$on(A[t],C);else(I._events[A]||(I._events[A]=[])).push(C),g.test(A)&&(I._hasHookEvent=!0);return I},A.prototype.$once=function(A,g){var C=this;function I(){C.$off(A,I),g.apply(C,arguments)}return I.fn=g,C.$on(A,I),C},A.prototype.$off=function(A,g){var C=this;if(!arguments.length)return C._events=Object.create(null),C;if(Array.isArray(A)){for(var I=0,t=A.length;I<t;I++)C.$off(A[I],g);return C}var e,n=C._events[A];if(!n)return C;if(!g)return C._events[A]=null,C;var r=n.length;while(r--)if(e=n[r],e===g||e.fn===g){n.splice(r,1);break}return C},A.prototype.$emit=function(A){var g=this,C=g._events[A];if(C){C=C.length>1?G(C):C;for(var I=G(arguments,1),t='event handler for "'+A+'"',e=0,n=C.length;e<n;e++)JA(C[e],g,I,g,t)}return g}}var bC=null;function wC(A){var g=bC;return bC=A,function(){bC=g}}function ZC(A){var g=A.$options,C=g.parent;if(C&&!g.abstract){while(C.$options.abstract&&C.$parent)C=C.$parent;C.$children.push(A)}A.$parent=C,A.$root=C?C.$root:A,A.$children=[],A.$refs={},A._watcher=null,A._inactive=null,A._directInactive=!1,A._isMounted=!1,A._isDestroyed=!1,A._isBeingDestroyed=!1}function OC(A){A.prototype._update=function(A,g){var C=this,I=C.$el,t=C._vnode,e=wC(C);C._vnode=A,C.$el=t?C.__patch__(t,A):C.__patch__(C.$el,A,g,!1),e(),I&&(I.__vue__=null),C.$el&&(C.$el.__vue__=C),C.$vnode&&C.$parent&&C.$vnode===C.$parent._vnode&&(C.$parent.$el=C.$el)},A.prototype.$forceUpdate=function(){var A=this;A._watcher&&A._watcher.update()},A.prototype.$destroy=function(){var A=this;if(!A._isBeingDestroyed){GC(A,"beforeDestroy"),A._isBeingDestroyed=!0;var g=A.$parent;!g||g._isBeingDestroyed||A.$options.abstract||v(g.$children,A),A._watcher&&A._watcher.teardown();var C=A._watchers.length;while(C--)A._watchers[C].teardown();A._data.__ob__&&A._data.__ob__.vmCount--,A._isDestroyed=!0,A.__patch__(A._vnode,null),GC(A,"destroyed"),A.$off(),A.$el&&(A.$el.__vue__=null),A.$vnode&&(A.$vnode.parent=null)}}}function jC(A,g,I,t,e){var n=t.data.scopedSlots,r=A.$scopedSlots,i=!!(n&&!n.$stable||r!==C&&!r.$stable||n&&A.$scopedSlots.$key!==n.$key),o=!!(e||A.$options._renderChildren||i);if(A.$options._parentVnode=t,A.$vnode=t,A._vnode&&(A._vnode.parent=t),A.$options._renderChildren=e,A.$attrs=t.data.attrs||C,A.$listeners=I||C,g&&A.$options.props){ZA(!1);for(var a=A._props,c=A.$options._propKeys||[],u=0;u<c.length;u++){var s=c[u],l=A.$options.props;a[s]=FA(s,l,g,A)}ZA(!0),A.$options.propsData=g}I=I||C;var p=A.$options._parentListeners;A.$options._parentListeners=I,yC(A,I,p),o&&(A.$slots=Zg(e,t.context),A.$forceUpdate())}function DC(A){while(A&&(A=A.$parent))if(A._inactive)return!0;return!1}function _C(A,g){if(g){if(A._directInactive=!1,DC(A))return}else if(A._directInactive)return;if(A._inactive||null===A._inactive){A._inactive=!1;for(var C=0;C<A.$children.length;C++)_C(A.$children[C]);GC(A,"activated")}}function RC(A,g){if((!g||(A._directInactive=!0,!DC(A)))&&!A._inactive){A._inactive=!0;for(var C=0;C<A.$children.length;C++)RC(A.$children[C]);GC(A,"deactivated")}}function GC(A,g){uA();var C=A.$options[g],I=g+" hook";if(C)for(var t=0,e=C.length;t<e;t++)JA(C[t],A,null,A,I);A._hasHookEvent&&A.$emit("hook:"+g),sA()}var PC=[],MC=[],NC={},EC=!1,kC=!1,SC=0;function WC(){SC=PC.length=MC.length=0,NC={},EC=kC=!1}var xC=Date.now;if(H&&!$){var YC=window.performance;YC&&"function"===typeof YC.now&&xC()>document.createEvent("Event").timeStamp&&(xC=function(){return YC.now()})}function VC(){var A,g;for(xC(),kC=!0,PC.sort(function(A,g){return A.id-g.id}),SC=0;SC<PC.length;SC++)A=PC[SC],A.before&&A.before(),g=A.id,NC[g]=null,A.run();var C=MC.slice(),I=PC.slice();WC(),BC(C),TC(I),eA&&T.devtools&&eA.emit("flush")}function TC(A){var g=A.length;while(g--){var C=A[g],I=C.vm;I._watcher===C&&I._isMounted&&!I._isDestroyed&&GC(I,"updated")}}function LC(A){A._inactive=!1,MC.push(A)}function BC(A){for(var g=0;g<A.length;g++)A[g]._inactive=!0,_C(A[g],!0)}function UC(A){var g=A.id;if(null==NC[g]){if(NC[g]=!0,kC){var C=PC.length-1;while(C>SC&&PC[C].id>A.id)C--;PC.splice(C+1,0,A)}else PC.push(A);EC||(EC=!0,ig(VC))}}var FC=0,KC=function(A,g,C,I,t){this.vm=A,t&&(A._watcher=this),A._watchers.push(this),I?(this.deep=!!I.deep,this.user=!!I.user,this.lazy=!!I.lazy,this.sync=!!I.sync,this.before=I.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=C,this.id=++FC,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new rA,this.newDepIds=new rA,this.expression="","function"===typeof g?this.getter=g:(this.getter=K(g),this.getter||(this.getter=N)),this.value=this.lazy?void 0:this.get()};KC.prototype.get=function(){var A;uA(this);var g=this.vm;try{A=this.getter.call(g,g)}catch(At){if(!this.user)throw At;XA(At,g,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ag(A),sA(),this.cleanupDeps()}return A},KC.prototype.addDep=function(A){var g=A.id;this.newDepIds.has(g)||(this.newDepIds.add(g),this.newDeps.push(A),this.depIds.has(g)||A.addSub(this))},KC.prototype.cleanupDeps=function(){var A=this.deps.length;while(A--){var g=this.deps[A];this.newDepIds.has(g.id)||g.removeSub(this)}var C=this.depIds;this.depIds=this.newDepIds,this.newDepIds=C,this.newDepIds.clear(),C=this.deps,this.deps=this.newDeps,this.newDeps=C,this.newDeps.length=0},KC.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():UC(this)},KC.prototype.run=function(){if(this.active){var A=this.get();if(A!==this.value||i(A)||this.deep){var g=this.value;if(this.value=A,this.user)try{this.cb.call(this.vm,A,g)}catch(At){XA(At,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,A,g)}}},KC.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},KC.prototype.depend=function(){var A=this.deps.length;while(A--)this.deps[A].depend()},KC.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||v(this.vm._watchers,this);var A=this.deps.length;while(A--)this.deps[A].removeSub(this);this.active=!1}};var zC={enumerable:!0,configurable:!0,get:N,set:N};function QC(A,g,C){zC.get=function(){return this[g][C]},zC.set=function(A){this[g][C]=A},Object.defineProperty(A,C,zC)}function HC(A){A._watchers=[];var g=A.$options;g.props&&XC(A,g.props),g.methods&&tI(A,g.methods),g.data?JC(A):_A(A._data={},!0),g.computed&&AI(A,g.computed),g.watch&&g.watch!==CA&&eI(A,g.watch)}function XC(A,g){var C=A.$options.propsData||{},I=A._props={},t=A.$options._propKeys=[],e=!A.$parent;e||ZA(!1);var n=function(e){t.push(e);var n=FA(e,g,C,A);RA(I,e,n),e in A||QC(A,"_props",e)};for(var r in g)n(r);ZA(!0)}function JC(A){var g=A.$options.data;g=A._data="function"===typeof g?qC(g,A):g||{},a(g)||(g={});var C=Object.keys(g),I=A.$options.props,t=(A.$options.methods,C.length);while(t--){var e=C[t];0,I&&y(I,e)||B(e)||QC(A,"_data",e)}_A(g,!0)}function qC(A,g){uA();try{return A.call(g,g)}catch(At){return XA(At,g,"data()"),{}}finally{sA()}}var $C={lazy:!0};function AI(A,g){var C=A._computedWatchers=Object.create(null),I=tA();for(var t in g){var e=g[t],n="function"===typeof e?e:e.get;0,I||(C[t]=new KC(A,n||N,N,$C)),t in A||gI(A,t,e)}}function gI(A,g,C){var I=!tA();"function"===typeof C?(zC.get=I?CI(g):II(C),zC.set=N):(zC.get=C.get?I&&!1!==C.cache?CI(g):II(C.get):N,zC.set=C.set||N),Object.defineProperty(A,g,zC)}function CI(A){return function(){var g=this._computedWatchers&&this._computedWatchers[A];if(g)return g.dirty&&g.evaluate(),cA.SharedObject.target&&g.depend(),g.value}}function II(A){return function(){return A.call(this,this)}}function tI(A,g){A.$options.props;for(var C in g)A[C]="function"!==typeof g[C]?N:R(g[C],A)}function eI(A,g){for(var C in g){var I=g[C];if(Array.isArray(I))for(var t=0;t<I.length;t++)nI(A,C,I[t]);else nI(A,C,I)}}function nI(A,g,C,I){return a(C)&&(I=C,C=C.handler),"string"===typeof C&&(C=A[C]),A.$watch(g,C,I)}function rI(A){var g={get:function(){return this._data}},C={get:function(){return this._props}};Object.defineProperty(A.prototype,"$data",g),Object.defineProperty(A.prototype,"$props",C),A.prototype.$set=GA,A.prototype.$delete=PA,A.prototype.$watch=function(A,g,C){var I=this;if(a(g))return nI(I,A,g,C);C=C||{},C.user=!0;var t=new KC(I,A,g,C);if(C.immediate)try{g.call(I,t.value)}catch(e){XA(e,I,'callback for immediate watcher "'+t.expression+'"')}return function(){t.teardown()}}}var iI=0;function oI(A){A.prototype._init=function(A){var g=this;g._uid=iI++,g._isVue=!0,A&&A._isComponent?aI(g,A):g.$options=BA(cI(g.constructor),A||{},g),g._renderProxy=g,g._self=g,ZC(g),fC(g),rC(g),GC(g,"beforeCreate"),"mp-toutiao"!==g.mpHost&&bg(g),HC(g),"mp-toutiao"!==g.mpHost&&mg(g),"mp-toutiao"!==g.mpHost&&GC(g,"created"),g.$options.el&&g.$mount(g.$options.el)}}function aI(A,g){var C=A.$options=Object.create(A.constructor.options),I=g._parentVnode;C.parent=g.parent,C._parentVnode=I;var t=I.componentOptions;C.propsData=t.propsData,C._parentListeners=t.listeners,C._renderChildren=t.children,C._componentTag=t.tag,g.render&&(C.render=g.render,C.staticRenderFns=g.staticRenderFns)}function cI(A){var g=A.options;if(A.super){var C=cI(A.super),I=A.superOptions;if(C!==I){A.superOptions=C;var t=uI(A);t&&P(A.extendOptions,t),g=A.options=BA(C,A.extendOptions),g.name&&(g.components[g.name]=A)}}return g}function uI(A){var g,C=A.options,I=A.sealedOptions;for(var t in C)C[t]!==I[t]&&(g||(g={}),g[t]=C[t]);return g}function sI(A){this._init(A)}function lI(A){A.use=function(A){var g=this._installedPlugins||(this._installedPlugins=[]);if(g.indexOf(A)>-1)return this;var C=G(arguments,1);return C.unshift(this),"function"===typeof A.install?A.install.apply(A,C):"function"===typeof A&&A.apply(null,C),g.push(A),this}}function pI(A){A.mixin=function(A){return this.options=BA(this.options,A),this}}function fI(A){A.cid=0;var g=1;A.extend=function(A){A=A||{};var C=this,I=C.cid,t=A._Ctor||(A._Ctor={});if(t[I])return t[I];var e=A.name||C.options.name;var n=function(A){this._init(A)};return n.prototype=Object.create(C.prototype),n.prototype.constructor=n,n.cid=g++,n.options=BA(C.options,A),n["super"]=C,n.options.props&&dI(n),n.options.computed&&vI(n),n.extend=C.extend,n.mixin=C.mixin,n.use=C.use,Y.forEach(function(A){n[A]=C[A]}),e&&(n.options.components[e]=n),n.superOptions=C.options,n.extendOptions=A,n.sealedOptions=P({},n.options),t[I]=n,n}}function dI(A){var g=A.options.props;for(var C in g)QC(A.prototype,"_props",C)}function vI(A){var g=A.options.computed;for(var C in g)gI(A.prototype,C,g[C])}function hI(A){Y.forEach(function(g){A[g]=function(A,C){return C?("component"===g&&a(C)&&(C.name=C.name||A,C=this.options._base.extend(C)),"directive"===g&&"function"===typeof C&&(C={bind:C,update:C}),this.options[g+"s"][A]=C,C):this.options[g+"s"][A]}})}function yI(A){return A&&(A.Ctor.options.name||A.tag)}function mI(A,g){return Array.isArray(A)?A.indexOf(g)>-1:"string"===typeof A?A.split(",").indexOf(g)>-1:!!c(A)&&A.test(g)}function bI(A,g){var C=A.cache,I=A.keys,t=A._vnode;for(var e in C){var n=C[e];if(n){var r=yI(n.componentOptions);r&&!g(r)&&wI(C,e,I,t)}}}function wI(A,g,C,I){var t=A[g];!t||I&&t.tag===I.tag||t.componentInstance.$destroy(),A[g]=null,v(C,g)}oI(sI),rI(sI),mC(sI),OC(sI),aC(sI);var ZI=[String,RegExp,Array],OI={name:"keep-alive",abstract:!0,props:{include:ZI,exclude:ZI,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var A in this.cache)wI(this.cache,A,this.keys)},mounted:function(){var A=this;this.$watch("include",function(g){bI(A,function(A){return mI(g,A)})}),this.$watch("exclude",function(g){bI(A,function(A){return!mI(g,A)})})},render:function(){var A=this.$slots.default,g=pC(A),C=g&&g.componentOptions;if(C){var I=yI(C),t=this,e=t.include,n=t.exclude;if(e&&(!I||!mI(e,I))||n&&I&&mI(n,I))return g;var r=this,i=r.cache,o=r.keys,a=null==g.key?C.Ctor.cid+(C.tag?"::"+C.tag:""):g.key;i[a]?(g.componentInstance=i[a].componentInstance,v(o,a),o.push(a)):(i[a]=g,o.push(a),this.max&&o.length>parseInt(this.max)&&wI(i,o[0],o,this._vnode)),g.data.keepAlive=!0}return g||A&&A[0]}},jI={KeepAlive:OI};function DI(A){var g={get:function(){return T}};Object.defineProperty(A,"config",g),A.util={warn:oA,extend:P,mergeOptions:BA,defineReactive:RA},A.set=GA,A.delete=PA,A.nextTick=ig,A.observable=function(A){return _A(A),A},A.options=Object.create(null),Y.forEach(function(g){A.options[g+"s"]=Object.create(null)}),A.options._base=A,P(A.options.components,jI),lI(A),pI(A),fI(A),hI(A)}DI(sI),Object.defineProperty(sI.prototype,"$isServer",{get:tA}),Object.defineProperty(sI.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(sI,"FunctionalRenderContext",{value:Ug}),sI.version="2.6.10";var _I="[object Array]",RI="[object Object]";function GI(A,g){var C={};return PI(A,g),MI(A,g,"",C),C}function PI(A,g){if(A!==g){var C=EI(A),I=EI(g);if(C==RI&&I==RI){if(Object.keys(A).length>=Object.keys(g).length)for(var t in g){var e=A[t];void 0===e?A[t]=null:PI(e,g[t])}}else C==_I&&I==_I&&A.length>=g.length&&g.forEach(function(g,C){PI(A[C],g)})}}function MI(A,g,C,I){if(A!==g){var t=EI(A),e=EI(g);if(t==RI)if(e!=RI||Object.keys(A).length<Object.keys(g).length)NI(I,C,A);else{var n=function(t){var e=A[t],n=g[t],r=EI(e),i=EI(n);if(r!=_I&&r!=RI)e!=g[t]&&NI(I,(""==C?"":C+".")+t,e);else if(r==_I)i!=_I?NI(I,(""==C?"":C+".")+t,e):e.length<n.length?NI(I,(""==C?"":C+".")+t,e):e.forEach(function(A,g){MI(A,n[g],(""==C?"":C+".")+t+"["+g+"]",I)});else if(r==RI)if(i!=RI||Object.keys(e).length<Object.keys(n).length)NI(I,(""==C?"":C+".")+t,e);else for(var o in e)MI(e[o],n[o],(""==C?"":C+".")+t+"."+o,I)};for(var r in A)n(r)}else t==_I?e!=_I?NI(I,C,A):A.length<g.length?NI(I,C,A):A.forEach(function(A,t){MI(A,g[t],C+"["+t+"]",I)}):NI(I,C,A)}}function NI(A,g,C){A[g]=C}function EI(A){return Object.prototype.toString.call(A)}function kI(A){if(A.__next_tick_callbacks&&A.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var g=A.$scope;console.log("["+ +new Date+"]["+(g.is||g.route)+"]["+A._uid+"]:flushCallbacks["+A.__next_tick_callbacks.length+"]")}var C=A.__next_tick_callbacks.slice(0);A.__next_tick_callbacks.length=0;for(var I=0;I<C.length;I++)C[I]()}}function SI(A){return PC.find(function(g){return A._watcher===g})}function WI(A,g){if(!A.__next_tick_pending&&!SI(A)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var C=A.$scope;console.log("["+ +new Date+"]["+(C.is||C.route)+"]["+A._uid+"]:nextVueTick")}return ig(g,A)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var I=A.$scope;console.log("["+ +new Date+"]["+(I.is||I.route)+"]["+A._uid+"]:nextMPTick")}var t;if(A.__next_tick_callbacks||(A.__next_tick_callbacks=[]),A.__next_tick_callbacks.push(function(){if(g)try{g.call(A)}catch(At){XA(At,A,"nextTick")}else t&&t(A)}),!g&&"undefined"!==typeof Promise)return new Promise(function(A){t=A})}function xI(A){var g=Object.create(null),C=[].concat(Object.keys(A._data||{}),Object.keys(A._computedWatchers||{}));return C.reduce(function(g,C){return g[C]=A[C],g},g),Object.assign(g,A.$mp.data||{}),Array.isArray(A.$options.behaviors)&&-1!==A.$options.behaviors.indexOf("uni://form-field")&&(g["name"]=A.name,g["value"]=A.value),JSON.parse(JSON.stringify(g))}var YI=function(A,g){var C=this;if(null!==g&&("page"===this.mpType||"component"===this.mpType)){var I=this.$scope,t=Object.create(null);try{t=xI(this)}catch(r){console.error(r)}t.__webviewId__=I.data.__webviewId__;var e=Object.create(null);Object.keys(t).forEach(function(A){e[A]=I.data[A]});var n=GI(t,e);Object.keys(n).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(I.is||I.route)+"]["+this._uid+"]差量更新",JSON.stringify(n)),this.__next_tick_pending=!0,I.setData(n,function(){C.__next_tick_pending=!1,kI(C)})):kI(this)}};function VI(){}function TI(A,g,C){if(!A.mpType)return A;"app"===A.mpType&&(A.$options.render=VI),A.$options.render||(A.$options.render=VI),"mp-toutiao"!==A.mpHost&&GC(A,"beforeMount");var I=function(){A._update(A._render(),C)};return new KC(A,I,N,{before:function(){A._isMounted&&!A._isDestroyed&&GC(A,"beforeUpdate")}},!0),C=!1,A}function LI(A,g){return t(A)||t(g)?BI(A,UI(g)):""}function BI(A,g){return A?g?A+" "+g:A:g||""}function UI(A){return Array.isArray(A)?FI(A):i(A)?KI(A):"string"===typeof A?A:""}function FI(A){for(var g,C="",I=0,e=A.length;I<e;I++)t(g=UI(A[I]))&&""!==g&&(C&&(C+=" "),C+=g);return C}function KI(A){var g="";for(var C in A)A[C]&&(g&&(g+=" "),g+=C);return g}var zI=m(function(A){var g={},C=/;(?![^(]*\))/g,I=/:(.+)/;return A.split(C).forEach(function(A){if(A){var C=A.split(I);C.length>1&&(g[C[0].trim()]=C[1].trim())}}),g});function QI(A){return Array.isArray(A)?M(A):"string"===typeof A?zI(A):A}var HI=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function XI(A,g){var C=g.split("."),I=C[0];return 0===I.indexOf("__$n")&&(I=parseInt(I.replace("__$n",""))),1===C.length?A[I]:XI(A[I],C.slice(1).join("."))}function JI(A){A.config.errorHandler=function(A){console.error(A)};var g=A.prototype.$emit;A.prototype.$emit=function(A){return this.$scope&&A&&this.$scope["triggerEvent"](A,{__args__:G(arguments,1)}),g.apply(this,arguments)},A.prototype.$nextTick=function(A){return WI(this,A)},HI.forEach(function(g){A.prototype[g]=function(A){if(this.$scope)return this.$scope[g](A)}}),A.prototype.__init_provide=mg,A.prototype.__init_injections=bg,A.prototype.__call_hook=function(A,g){var C=this;uA();var I,t=C.$options[A],e=A+" hook";if(t)for(var n=0,r=t.length;n<r;n++)I=JA(t[n],C,g?[g]:null,C,e);return C._hasHookEvent&&C.$emit("hook:"+A),sA(),I},A.prototype.__set_model=function(A,g,C,I){Array.isArray(I)&&(-1!==I.indexOf("trim")&&(C=C.trim()),-1!==I.indexOf("number")&&(C=this._n(C))),A||(A=this),A[g]=C},A.prototype.__set_sync=function(A,g,C){A||(A=this),A[g]=C},A.prototype.__get_orig=function(A){return a(A)&&A["$orig"]||A},A.prototype.__get_value=function(A,g){return XI(g||this,A)},A.prototype.__get_class=function(A,g){return LI(g,A)},A.prototype.__get_style=function(A,g){if(!A&&!g)return"";var C=QI(A),I=g?P(g,C):C;return Object.keys(I).map(function(A){return j(A)+":"+I[A]}).join(";")},A.prototype.__map=function(A,g){var C,I,t,e,n;if(Array.isArray(A)){for(C=new Array(A.length),I=0,t=A.length;I<t;I++)C[I]=g(A[I],I);return C}if(i(A)){for(e=Object.keys(A),C=Object.create(null),I=0,t=e.length;I<t;I++)n=e[I],C[n]=g(A[n],n,I);return C}return[]}}var qI=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function $I(A){var g=A.extend;A.extend=function(A){A=A||{};var C=A.methods;return C&&Object.keys(C).forEach(function(g){-1!==qI.indexOf(g)&&(A[g]=C[g],delete C[g])}),g.call(this,A)};var C=A.config.optionMergeStrategies,I=C.created;qI.forEach(function(A){C[A]=I}),A.prototype.__lifecycle_hooks__=qI}sI.prototype.__patch__=YI,sI.prototype.$mount=function(A,g){return TI(this,A,g)},$I(sI),JI(sI),g["default"]=sI}.call(this,C("c8ba"))},"6e42":function(A,g,C){"use strict";(function(A){Object.defineProperty(g,"__esModule",{value:!0}),g.createApp=lg,g.createComponent=Zg,g.createPage=wg,g.default=void 0;var I=t(C("66fd"));function t(A){return A&&A.__esModule?A:{default:A}}function e(A,g){return i(A)||r(A,g)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function r(A,g){var C=[],I=!0,t=!1,e=void 0;try{for(var n,r=A[Symbol.iterator]();!(I=(n=r.next()).done);I=!0)if(C.push(n.value),g&&C.length===g)break}catch(i){t=!0,e=i}finally{try{I||null==r["return"]||r["return"]()}finally{if(t)throw e}}return C}function i(A){if(Array.isArray(A))return A}function o(A,g,C){return g in A?Object.defineProperty(A,g,{value:C,enumerable:!0,configurable:!0,writable:!0}):A[g]=C,A}function a(A){return s(A)||u(A)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(A){if(Symbol.iterator in Object(A)||"[object Arguments]"===Object.prototype.toString.call(A))return Array.from(A)}function s(A){if(Array.isArray(A)){for(var g=0,C=new Array(A.length);g<A.length;g++)C[g]=A[g];return C}}var l=Object.prototype.toString,p=Object.prototype.hasOwnProperty;function f(A){return"function"===typeof A}function d(A){return"string"===typeof A}function v(A){return"[object Object]"===l.call(A)}function h(A,g){return p.call(A,g)}function y(){}function m(A){var g=Object.create(null);return function(C){var I=g[C];return I||(g[C]=A(C))}}var b=/-(\w)/g,w=m(function(A){return A.replace(b,function(A,g){return g?g.toUpperCase():""})}),Z=["invoke","success","fail","complete","returnValue"],O={},j={};function D(A,g){var C=g?A?A.concat(g):Array.isArray(g)?g:[g]:A;return C?_(C):C}function _(A){for(var g=[],C=0;C<A.length;C++)-1===g.indexOf(A[C])&&g.push(A[C]);return g}function R(A,g){var C=A.indexOf(g);-1!==C&&A.splice(C,1)}function G(A,g){Object.keys(g).forEach(function(C){-1!==Z.indexOf(C)&&f(g[C])&&(A[C]=D(A[C],g[C]))})}function P(A,g){A&&g&&Object.keys(g).forEach(function(C){-1!==Z.indexOf(C)&&f(g[C])&&R(A[C],g[C])})}function M(A,g){"string"===typeof A&&v(g)?G(j[A]||(j[A]={}),g):v(A)&&G(O,A)}function N(A,g){"string"===typeof A?v(g)?P(j[A],g):delete j[A]:v(A)&&P(O,A)}function E(A){return function(g){return A(g)||g}}function k(A){return!!A&&("object"===typeof A||"function"===typeof A)&&"function"===typeof A.then}function S(A,g){for(var C=!1,I=0;I<A.length;I++){var t=A[I];if(C)C=Promise.then(E(t));else{var e=t(g);if(k(e)&&(C=Promise.resolve(e)),!1===e)return{then:function(){}}}}return C||{then:function(A){return A(g)}}}function W(A){var g=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(C){if(Array.isArray(A[C])){var I=g[C];g[C]=function(g){S(A[C],g).then(function(A){return f(I)&&I(A)||A})}}}),g}function x(A,g){var C=[];Array.isArray(O.returnValue)&&C.push.apply(C,a(O.returnValue));var I=j[A];return I&&Array.isArray(I.returnValue)&&C.push.apply(C,a(I.returnValue)),C.forEach(function(A){g=A(g)||g}),g}function Y(A){var g=Object.create(null);Object.keys(O).forEach(function(A){"returnValue"!==A&&(g[A]=O[A].slice())});var C=j[A];return C&&Object.keys(C).forEach(function(A){"returnValue"!==A&&(g[A]=(g[A]||[]).concat(C[A]))}),g}function V(A,g,C){for(var I=arguments.length,t=new Array(I>3?I-3:0),e=3;e<I;e++)t[e-3]=arguments[e];var n=Y(A);if(n&&Object.keys(n).length){if(Array.isArray(n.invoke)){var r=S(n.invoke,C);return r.then(function(A){return g.apply(void 0,[W(n,A)].concat(t))})}return g.apply(void 0,[W(n,C)].concat(t))}return g.apply(void 0,[C].concat(t))}var T={returnValue:function(A){return k(A)?A.then(function(A){return A[1]}).catch(function(A){return A[0]}):A}},L=/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,B=/^create|Manager$/,U=/^on/;function F(A){return B.test(A)}function K(A){return L.test(A)}function z(A){return U.test(A)}function Q(A){return A.then(function(A){return[null,A]}).catch(function(A){return[A]})}function H(A){return!(F(A)||K(A)||z(A))}function X(A,g){return H(A)?function(){for(var C=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},I=arguments.length,t=new Array(I>1?I-1:0),e=1;e<I;e++)t[e-1]=arguments[e];return f(C.success)||f(C.fail)||f(C.complete)?x(A,V.apply(void 0,[A,g,C].concat(t))):x(A,Q(new Promise(function(I,e){V.apply(void 0,[A,g,Object.assign({},C,{success:I,fail:e})].concat(t)),Promise.prototype.finally||(Promise.prototype.finally=function(A){var g=this.constructor;return this.then(function(C){return g.resolve(A()).then(function(){return C})},function(C){return g.resolve(A()).then(function(){throw C})})})})))}:g}var J=1e-4,q=750,$=!1,AA=0,gA=0;function CA(){var A=wx.getSystemInfoSync(),g=A.platform,C=A.pixelRatio,I=A.windowWidth;AA=I,gA=C,$="ios"===g}function IA(A,g){if(0===AA&&CA(),A=Number(A),0===A)return 0;var C=A/q*(g||AA);return C<0&&(C=-C),C=Math.floor(C+J),0===C?1!==gA&&$?.5:1:A<0?-C:C}var tA={promiseInterceptor:T},eA=Object.freeze({upx2px:IA,interceptors:tA,addInterceptor:M,removeInterceptor:N}),nA={},rA=[],iA=[],oA=["success","fail","cancel","complete"];function aA(A,g,C){return function(I){return g(uA(A,I,C))}}function cA(A,g){var C=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},I=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},t=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(v(g)){var e=!0===t?g:{};for(var n in f(C)&&(C=C(g,e)||{}),g)if(h(C,n)){var r=C[n];f(r)&&(r=r(g[n],g,e)),r?d(r)?e[r]=g[n]:v(r)&&(e[r.name?r.name:n]=r.value):console.warn("app-plus ".concat(A,"暂不支持").concat(n))}else-1!==oA.indexOf(n)?e[n]=aA(A,g[n],I):t||(e[n]=g[n]);return e}return f(g)&&(g=aA(A,g,I)),g}function uA(A,g,C){var I=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return f(nA.returnValue)&&(g=nA.returnValue(A,g)),cA(A,g,C,{},I)}function sA(A,g){if(h(nA,A)){var C=nA[A];return C?function(g,I){var t=C;f(C)&&(t=C(g)),g=cA(A,g,t.args,t.returnValue);var e=[g];"undefined"!==typeof I&&e.push(I);var n=wx[t.name||A].apply(wx,e);return K(A)?uA(A,n,t.returnValue,F(A)):n}:function(){console.error("app-plus 暂不支持".concat(A))}}return g}var lA=Object.create(null),pA=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function fA(A){return function(g){var C=g.fail,I=g.complete,t={errMsg:"".concat(A,":fail:暂不支持 ").concat(A," 方法")};f(C)&&C(t),f(I)&&I(t)}}pA.forEach(function(A){lA[A]=fA(A)});var dA=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return A||(A=new I.default),A};var A}();function vA(A,g,C){return A[g].apply(A,C)}function hA(){return vA(dA(),"$on",Array.prototype.slice.call(arguments))}function yA(){return vA(dA(),"$off",Array.prototype.slice.call(arguments))}function mA(){return vA(dA(),"$once",Array.prototype.slice.call(arguments))}function bA(){return vA(dA(),"$emit",Array.prototype.slice.call(arguments))}var wA=Object.freeze({$on:hA,$off:yA,$once:mA,$emit:bA});function ZA(A){return"undefined"!==typeof weex?weex.requireModule(A):__requireNativePlugin__(A)}function OA(A){A.$processed=!0,A.postMessage=function(g){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:g},A.id)};var g=[];if(A.onMessage=function(A){g.push(A)},A.$consumeMessage=function(A){g.forEach(function(g){return g(A)})},A.__uniapp_mask_id){var C=A.__uniapp_mask,I="0"===A.__uniapp_mask_id?{setStyle:function(A){var g=A.mask;ZA("uni-tabview").setMask({color:g})}}:plus.webview.getWebviewById(A.__uniapp_mask_id),t=A.show,e=A.hide,n=A.close,r=function(){I.setStyle({mask:C})},i=function(){I.setStyle({mask:"none"})};A.show=function(){r();for(var g=arguments.length,C=new Array(g),I=0;I<g;I++)C[I]=arguments[I];return t.apply(A,C)},A.hide=function(){i();for(var g=arguments.length,C=new Array(g),I=0;I<g;I++)C[I]=arguments[I];return e.apply(A,C)},A.close=function(){i(),g=[];for(var C=arguments.length,I=new Array(C),t=0;t<C;t++)I[t]=arguments[t];return n.apply(A,I)}}}function jA(A){var g=plus.webview.getWebviewById(A);return g&&!g.$processed&&OA(g),g}var DA=Object.freeze({getSubNVueById:jA,requireNativePlugin:ZA}),_A=Page,RA=Component,GA=/:/g,PA=m(function(A){return w(A.replace(GA,"-"))});function MA(A){if(wx.canIUse("nextTick")){var g=A.triggerEvent;A.triggerEvent=function(C){for(var I=arguments.length,t=new Array(I>1?I-1:0),e=1;e<I;e++)t[e-1]=arguments[e];return g.apply(A,[PA(C)].concat(t))}}}function NA(A,g){var C=g[A];g[A]=C?function(){MA(this);for(var A=arguments.length,g=new Array(A),I=0;I<A;I++)g[I]=arguments[I];return C.apply(this,g)}:function(){MA(this)}}Page=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return NA("onLoad",A),_A(A)},Component=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return NA("created",A),RA(A)};var EA=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function kA(A,g){var C=A.$mp[A.mpType];g.forEach(function(g){h(C,g)&&(A[g]=C[g])})}function SA(A,g){if(!g)return!0;if(I.default.options&&Array.isArray(I.default.options[A]))return!0;if(g=g.default||g,f(g))return!!f(g.extendOptions[A])||!!(g.super&&g.super.options&&Array.isArray(g.super.options[A]));if(f(g[A]))return!0;var C=g.mixins;return Array.isArray(C)?!!C.find(function(g){return SA(A,g)}):void 0}function WA(A,g,C){g.forEach(function(g){SA(g,C)&&(A[g]=function(A){return this.$vm&&this.$vm.__call_hook(g,A)})})}function xA(A,g){var C;return g=g.default||g,f(g)?(C=g,g=C.extendOptions):C=A.extend(g),[C,g]}function YA(A,g){if(Array.isArray(g)&&g.length){var C=Object.create(null);g.forEach(function(A){C[A]=!0}),A.$scopedSlots=A.$slots=C}}function VA(A,g){A=(A||"").split(",");var C=A.length;1===C?g._$vueId=A[0]:2===C&&(g._$vueId=A[0],g._$vuePid=A[1])}function TA(A,g){var C=A.data||{},I=A.methods||{};if("function"===typeof C)try{C=C.call(g)}catch(t){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",C)}else try{C=JSON.parse(JSON.stringify(C))}catch(t){}return v(C)||(C={}),Object.keys(I).forEach(function(A){-1!==g.__lifecycle_hooks__.indexOf(A)||h(C,A)||(C[A]=I[A])}),C}var LA=[String,Number,Boolean,Object,Array,null];function BA(A){return function(g,C){this.$vm&&(this.$vm[A]=g)}}function UA(A,g){var C=A["behaviors"],I=A["extends"],t=A["mixins"],e=A["props"];e||(A["props"]=e=[]);var n=[];return Array.isArray(C)&&C.forEach(function(A){n.push(A.replace("uni://","wx".concat("://"))),"uni://form-field"===A&&(Array.isArray(e)?(e.push("name"),e.push("value")):(e["name"]={type:String,default:""},e["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),v(I)&&I.props&&n.push(g({properties:KA(I.props,!0)})),Array.isArray(t)&&t.forEach(function(A){v(A)&&A.props&&n.push(g({properties:KA(A.props,!0)}))}),n}function FA(A,g,C,I){return Array.isArray(g)&&1===g.length?g[0]:g}function KA(A){var g=arguments.length>1&&void 0!==arguments[1]&&arguments[1],C=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return g||(C.vueId={type:String,value:""},C.vueSlots={type:null,value:[],observer:function(A,g){var C=Object.create(null);A.forEach(function(A){C[A]=!0}),this.setData({$slots:C})}}),Array.isArray(A)?A.forEach(function(A){C[A]={type:null,observer:BA(A)}}):v(A)&&Object.keys(A).forEach(function(g){var I=A[g];if(v(I)){var t=I["default"];f(t)&&(t=t()),I.type=FA(g,I.type),C[g]={type:-1!==LA.indexOf(I.type)?I.type:null,value:t,observer:BA(g)}}else{var e=FA(g,I);C[g]={type:-1!==LA.indexOf(e)?e:null,observer:BA(g)}}}),C}function zA(A){try{A.mp=JSON.parse(JSON.stringify(A))}catch(g){}return A.stopPropagation=y,A.preventDefault=y,A.target=A.target||{},h(A,"detail")||(A.detail={}),v(A.detail)&&(A.target=Object.assign({},A.target,A.detail)),A}function QA(A,g){var C=A;return g.forEach(function(g){var I=g[0],t=g[2];if(I||"undefined"!==typeof t){var e=g[1],n=g[3],r=I?A.__get_value(I,C):C;Number.isInteger(r)?C=t:e?Array.isArray(r)?C=r.find(function(g){return A.__get_value(e,g)===t}):v(r)?C=Object.keys(r).find(function(g){return A.__get_value(e,r[g])===t}):console.error("v-for 暂不支持循环数据：",r):C=r[t],n&&(C=A.__get_value(n,C))}}),C}function HA(A,g,C){var I={};return Array.isArray(g)&&g.length&&g.forEach(function(g,t){"string"===typeof g?g?"$event"===g?I["$"+t]=C:0===g.indexOf("$event.")?I["$"+t]=A.__get_value(g.replace("$event.",""),C):I["$"+t]=A.__get_value(g):I["$"+t]=A:I["$"+t]=QA(A,g)}),I}function XA(A){for(var g={},C=1;C<A.length;C++){var I=A[C];g[I[0]]=I[1]}return g}function JA(A,g){var C=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],I=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],t=arguments.length>4?arguments[4]:void 0,e=arguments.length>5?arguments[5]:void 0,n=!1;if(t&&(n=g.currentTarget&&g.currentTarget.dataset&&"wx"===g.currentTarget.dataset.comType,!C.length))return n?[g]:g.detail.__args__||g.detail;var r=HA(A,I,g),i=[];return C.forEach(function(A){"$event"===A?"__set_model"!==e||t?t&&!n?i.push(g.detail.__args__[0]):i.push(g):i.push(g.target.value):Array.isArray(A)&&"o"===A[0]?i.push(XA(A)):"string"===typeof A&&h(r,A)?i.push(r[A]):i.push(A)}),i}var qA="~",$A="^";function Ag(A,g){return A===g||"regionchange"===g&&("begin"===A||"end"===A)}function gg(A){var g=this;A=zA(A);var C=(A.currentTarget||A.target).dataset;if(!C)return console.warn("事件信息不存在");var I=C.eventOpts||C["event-opts"];if(!I)return console.warn("事件信息不存在");var t=A.type,e=[];return I.forEach(function(C){var I=C[0],n=C[1],r=I.charAt(0)===$A;I=r?I.slice(1):I;var i=I.charAt(0)===qA;I=i?I.slice(1):I,n&&Ag(t,I)&&n.forEach(function(C){var I=C[0];if(I){var t=g.$vm;t.$options.generic&&t.$parent&&t.$parent.$parent&&(t=t.$parent.$parent);var n=t[I];if(!f(n))throw new Error(" _vm.".concat(I," is not a function"));if(i){if(n.once)return;n.once=!0}e.push(n.apply(t,JA(g.$vm,A,C[1],C[2],r,I)))}})}),"input"===t&&1===e.length&&"undefined"!==typeof e[0]?e[0]:void 0}var Cg=["onShow","onHide","onError","onPageNotFound"];function Ig(A,g){var C=g.mocks,t=g.initRefs;A.$options.store&&(I.default.prototype.$store=A.$options.store),I.default.prototype.mpHost="app-plus",I.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=o({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(t(this),kA(this,C)))}});var e={onLaunch:function(g){this.$vm||(this.$vm=A,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",g),this.$vm.__call_hook("onLaunch",g))}};return e.globalData=A.$options.globalData||{},WA(e,Cg),e}var tg=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function eg(A,g){var C=A.$children,I=C.find(function(A){return A.$scope._$vueId===g});if(I)return I;for(var t=C.length-1;t>=0;t--)if(I=eg(C[t],g),I)return I}function ng(A){return Behavior(A)}function rg(){return!!this.route}function ig(A){this.triggerEvent("__l",A)}function og(A){var g=A.$scope;Object.defineProperty(A,"$refs",{get:function(){var A={},C=g.selectAllComponents(".vue-ref");C.forEach(function(g){var C=g.dataset.ref;A[C]=g.$vm||g});var I=g.selectAllComponents(".vue-ref-in-for");return I.forEach(function(g){var C=g.dataset.ref;A[C]||(A[C]=[]),A[C].push(g.$vm||g)}),A}})}function ag(A){var g,C=A.detail||A.value,I=C.vuePid,t=C.vueOptions;I&&(g=eg(this.$vm,I)),g||(g=this.$vm),t.parent=g}function cg(A){return Ig(A,{mocks:tg,initRefs:og})}var ug=["onUniNViewMessage"];function sg(A){var g=cg(A);return WA(g,ug),g}function lg(A){return App(sg(A)),A}function pg(A){var g=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},C=g.isPage,t=g.initRelation,n=xA(I.default,A),r=e(n,2),i=r[0],o=r[1],a={options:{multipleSlots:!0,addGlobalClass:!0},data:TA(o,I.default.prototype),behaviors:UA(o,ng),properties:KA(o.props,!1,o.__file),lifetimes:{attached:function(){var A=this.properties,g={mpType:C.call(this)?"page":"component",mpInstance:this,propsData:A};VA(A.vueId,this),t.call(this,{vuePid:this._$vuePid,vueOptions:g}),this.$vm=new i(g),YA(this.$vm,A.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(A){this.$vm&&this.$vm.__call_hook("onPageShow",A)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(A){this.$vm&&this.$vm.__call_hook("onPageResize",A)}},methods:{__l:ag,__e:gg}};return Array.isArray(o.wxsCallMethods)&&o.wxsCallMethods.forEach(function(A){a.methods[A]=function(g){return this.$vm[A](g)}}),C?a:[a,i]}function fg(A){return pg(A,{isPage:rg,initRelation:ig})}function dg(A){var g=fg(A);return g.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},g}var vg=["onShow","onHide","onUnload"];function hg(A,g){g.isPage,g.initRelation;var C=dg(A);return WA(C.methods,vg,A),C.methods.onLoad=function(A){this.$vm.$mp.query=A,this.$vm.__call_hook("onLoad",A)},C}function yg(A){return hg(A,{isPage:rg,initRelation:ig})}vg.push.apply(vg,EA);var mg=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function bg(A){var g=yg(A);return WA(g.methods,mg),g}function wg(A){return Component(bg(A))}function Zg(A){return Component(dg(A))}rA.forEach(function(A){nA[A]=!1}),iA.forEach(function(A){var g=nA[A]&&nA[A].name?nA[A].name:A;wx.canIUse(g)||(nA[A]=!1)});var Og={};Object.keys(eA).forEach(function(A){Og[A]=eA[A]}),Object.keys(wA).forEach(function(A){Og[A]=wA[A]}),Object.keys(DA).forEach(function(A){Og[A]=X(A,DA[A])}),Object.keys(wx).forEach(function(A){(h(wx,A)||h(nA,A))&&(Og[A]=X(A,sA(A,wx[A])))}),"undefined"!==typeof A&&(A.uni=Og,A.UniEmitter=wA),wx.createApp=lg,wx.createPage=wg,wx.createComponent=Zg;var jg=Og,Dg=jg;g.default=Dg}).call(this,C("c8ba"))},8189:function(A){A.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-23620191019001",_inBundle:!1,_integrity:"sha512-gBpkjEOQ/LhTnXBVi266PoTNT5VJtbYoEVy+gZ8/LN9/jKEWeWndd2Lu7vn7hmUySVM5K5UV/Bd5LEVkgXB8mA==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-23620191019001.tgz",_shasum:"5c006b903ae7bc407c8b1786de249ffbf72da996",_spec:"@dcloudio/uni-stat@next",_where:"/Users/fxy/Documents/DCloud/HbuilderX-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"bc995d4b43b68e7fe7914ae6b2112117d36e63a8",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-23620191019001"}},"921b":function(A,g,C){"use strict";(function(A){var g=C("8189");function I(A,g){return!g||"object"!==typeof g&&"function"!==typeof g?t(A):g}function t(A){if(void 0===A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return A}function e(A){return e=Object.setPrototypeOf?Object.getPrototypeOf:function(A){return A.__proto__||Object.getPrototypeOf(A)},e(A)}function n(A,g){if("function"!==typeof g&&null!==g)throw new TypeError("Super expression must either be null or a function");A.prototype=Object.create(g&&g.prototype,{constructor:{value:A,writable:!0,configurable:!0}}),g&&r(A,g)}function r(A,g){return r=Object.setPrototypeOf||function(A,g){return A.__proto__=g,A},r(A,g)}function i(A,g){if(!(A instanceof g))throw new TypeError("Cannot call a class as a function")}function o(A,g){for(var C=0;C<g.length;C++){var I=g[C];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(A,I.key,I)}}function a(A,g,C){return g&&o(A.prototype,g),C&&o(A,C),A}var c=g.version,u="https://tongji.dcloud.io/uni/stat",s="https://tongji.dcloud.io/uni/stat.gif",l=1800,p=300,f=10,d="__DC_STAT_UUID",v="__DC_UUID_VALUE";function h(){var g="";if("n"===w()){try{g=plus.runtime.getDCloudId()}catch(C){g=""}return g}try{g=A.getStorageSync(d)}catch(C){g=v}if(!g){g=Date.now()+""+Math.floor(1e7*Math.random());try{A.setStorageSync(d,g)}catch(C){A.setStorageSync(d,v)}}return g}var y=function(A){var g=Object.keys(A),C=g.sort(),I={},t="";for(var e in C)I[C[e]]=A[C[e]],t+=C[e]+"="+A[C[e]]+"&";return{sign:"",options:t.substr(0,t.length-1)}},m=function(A){var g="";for(var C in A)g+=C+"="+A[C]+"&";return g.substr(0,g.length-1)},b=function(){return parseInt((new Date).getTime()/1e3)},w=function(){var A={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return A["app-plus"]},Z=function(){var g="";return"wx"!==w()&&"qq"!==w()||A.canIUse("getAccountInfoSync")&&(g=A.getAccountInfoSync().miniProgram.appId||""),g},O=function(){return"n"===w()?plus.runtime.version:""},j=function(){var A=w(),g="";return"n"===A&&(g=plus.runtime.channel),g},D=function(g){var C=w(),I="";return g||("wx"===C&&(I=A.getLaunchOptionsSync().scene),I)},_="First__Visit__Time",R="Last__Visit__Time",G=function(){var g=A.getStorageSync(_),C=0;return g?C=g:(C=b(),A.setStorageSync(_,C),A.removeStorageSync(R)),C},P=function(){var g=A.getStorageSync(R),C=0;return C=g||"",A.setStorageSync(R,b()),C},M="__page__residence__time",N=0,E=0,k=function(){return N=b(),"n"===w()&&A.setStorageSync(M,b()),N},S=function(){return E=b(),"n"===w()&&(N=A.getStorageSync(M)),E-N},W="Total__Visit__Count",x=function(){var g=A.getStorageSync(W),C=1;return g&&(C=g,C++),A.setStorageSync(W,C),C},Y=function(A){var g={};for(var C in A)g[C]=encodeURIComponent(A[C]);return g},V=0,T=0,L=function(){var A=(new Date).getTime();return V=A,T=0,A},B=function(){var A=(new Date).getTime();return T=A,A},U=function(A){var g=0;if(0!==V&&(g=T-V),g=parseInt(g/1e3),g=g<1?1:g,"app"===A){var C=g>p;return{residenceTime:g,overtime:C}}if("page"===A){var I=g>l;return{residenceTime:g,overtime:I}}return{residenceTime:g}},F=function(){var A=getCurrentPages(),g=A[A.length-1],C=g.$vm;return"bd"===w()?C.$mp&&C.$mp.page.is:C.$scope&&C.$scope.route||C.$mp&&C.$mp.page.route},K=function(A){var g=getCurrentPages(),C=g[g.length-1],I=C.$vm,t=A._query,e=t&&"{}"!==JSON.stringify(t)?"?"+JSON.stringify(t):"";return A._query="","bd"===w()?I.$mp&&I.$mp.page.is+e:I.$scope&&I.$scope.route+e||I.$mp&&I.$mp.page.route+e},z=function(A){return!!("page"===A.mpType||A.$mp&&"page"===A.$mp.mpType||"page"===A.$options.mpType)},Q=function(A,g){return A?"string"!==typeof A?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):A.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof g&&"object"!==typeof g?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof g&&g.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===A&&"string"!==typeof g?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},H=C("3403").default,X=C("db8b").default||C("db8b"),J=A.getSystemInfoSync(),q=function(){function g(){i(this,g),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:h(),ut:w(),mpn:Z(),ak:X.appid,usv:c,v:O(),ch:j(),cn:"",pn:"",ct:"",t:b(),tt:"",p:"android"===J.platform?"a":"i",brand:J.brand||"",md:J.model,sv:J.system.replace(/(Android|iOS)\s/,""),mpsdk:J.SDKVersion||"",mpv:J.version||"",lang:J.language,pr:J.pixelRatio,ww:J.windowWidth,wh:J.windowHeight,sw:J.screenWidth,sh:J.screenHeight}}return a(g,[{key:"_applicationShow",value:function(){if(this.__licationHide){B();var A=U("app");if(A.overtime){var g={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(g)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(A,g){this.__licationHide=!0,B();var C=U();L();var I=K(this);this._sendHideRequest({urlref:I,urlref_ts:C.residenceTime},g)}},{key:"_pageShow",value:function(){var A=K(this),g=F();if(this._navigationBarTitle.config=H&&H.pages[g]&&H.pages[g].titleNView&&H.pages[g].titleNView.titleText||H&&H.pages[g]&&H.pages[g].navigationBarTitleText||"",this.__licationShow)return L(),this.__licationShow=!1,void(this._lastPageRoute=A);B(),this._lastPageRoute=A;var C=U("page");if(C.overtime){var I={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(I)}L()}},{key:"_pageHide",value:function(){if(!this.__licationHide){B();var A=U("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:A.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(A){this._sendEventRequest({key:A},0)}},{key:"_sendReportRequest",value:function(A){this._navigationBarTitle.lt="1";var g=A.query&&"{}"!==JSON.stringify(A.query)?"?"+JSON.stringify(A.query):"";this.statData.lt="1",this.statData.url=A.path+g||"",this.statData.t=b(),this.statData.sc=D(A.scene),this.statData.fvts=G(),this.statData.lvts=P(),this.statData.tvc=x(),"n"===w()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(A){var g=A.url,C=A.urlref,I=A.urlref_ts;this._navigationBarTitle.lt="11";var t={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:g,tt:this.statData.tt,urlref:C,urlref_ts:I,ch:this.statData.ch,usv:this.statData.usv,t:b(),p:this.statData.p};this.request(t)}},{key:"_sendHideRequest",value:function(A,g){var C=A.urlref,I=A.urlref_ts,t={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:C,urlref_ts:I,ch:this.statData.ch,usv:this.statData.usv,t:b(),p:this.statData.p};this.request(t,g)}},{key:"_sendEventRequest",value:function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},g=A.key,C=void 0===g?"":g,I=A.value,t=void 0===I?"":I,e=this._lastPageRoute,n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:e,ch:this.statData.ch,e_n:C,e_v:"object"===typeof t?JSON.stringify(t):t.toString(),usv:this.statData.usv,t:b(),p:this.statData.p};this.request(n)}},{key:"getNetworkInfo",value:function(){var g=this;A.getNetworkType({success:function(A){g.statData.net=A.networkType,g.getLocation()}})}},{key:"getProperty",value:function(){var A=this;plus.runtime.getProperty(plus.runtime.appid,function(g){A.statData.v=g.version||"",A.getNetworkInfo()})}},{key:"getLocation",value:function(){var g=this;X.getLocation?A.getLocation({type:"wgs84",geocode:!0,success:function(A){A.address&&(g.statData.cn=A.address.country,g.statData.pn=A.address.province,g.statData.ct=A.address.city),g.statData.lat=A.latitude,g.statData.lng=A.longitude,g.request(g.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(g,C){var I=this,t=b(),e=this._navigationBarTitle;g.ttn=e.page,g.ttpj=e.config,g.ttc=e.report;var n=this._reportingRequestData;if("n"===w()&&(n=A.getStorageSync("__UNI__STAT__DATA")||{}),n[g.lt]||(n[g.lt]=[]),n[g.lt].push(g),"n"===w()&&A.setStorageSync("__UNI__STAT__DATA",n),!(S()<f)||C){var r=this._reportingRequestData;"n"===w()&&(r=A.getStorageSync("__UNI__STAT__DATA")),k();var i=[],o=[],a=[],u=function(A){var g=r[A];g.forEach(function(g){var C=m(g);0===A?i.push(C):3===A?a.push(C):o.push(C)})};for(var s in r)u(s);i.push.apply(i,o.concat(a));var l={usv:c,t:t,requests:JSON.stringify(i)};this._reportingRequestData={},"n"===w()&&A.removeStorageSync("__UNI__STAT__DATA"),"h5"!==g.ut?"n"!==w()||"a"!==this.statData.p?this._sendRequest(l):setTimeout(function(){I._sendRequest(l)},200):this.imageRequest(l)}}},{key:"_sendRequest",value:function(g){var C=this;A.request({url:u,method:"POST",data:g,success:function(){},fail:function(A){++C._retry<3&&setTimeout(function(){C._sendRequest(g)},1e3)}})}},{key:"imageRequest",value:function(A){var g=new Image,C=y(Y(A)).options;g.src=s+"?"+C}},{key:"sendEvent",value:function(A,g){Q(A,g)||("title"!==A?this._sendEventRequest({key:A,value:"object"===typeof g?JSON.stringify(g):g},1):this._navigationBarTitle.report=g)}}]),g}(),$=function(g){function C(){var g;return i(this,C),g=I(this,e(C).call(this)),g.instance=null,"function"===typeof A.addInterceptor&&(g.addInterceptorInit(),g.interceptLogin(),g.interceptShare(!0),g.interceptRequestPayment()),g}return n(C,g),a(C,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new C),this.instance}}]),a(C,[{key:"addInterceptorInit",value:function(){var g=this;A.addInterceptor("setNavigationBarTitle",{invoke:function(A){g._navigationBarTitle.page=A.title}})}},{key:"interceptLogin",value:function(){var g=this;A.addInterceptor("login",{complete:function(){g._login()}})}},{key:"interceptShare",value:function(g){var C=this;g?A.addInterceptor("share",{success:function(){C._share()},fail:function(){C._share()}}):C._share()}},{key:"interceptRequestPayment",value:function(){var g=this;A.addInterceptor("requestPayment",{success:function(){g._payment("pay_success")},fail:function(){g._payment("pay_fail")}})}},{key:"report",value:function(A,g){this.self=g,k(),this.__licationShow=!0,this._sendReportRequest(A,!0)}},{key:"load",value:function(A,g){if(!g.$scope&&!g.$mp){var C=getCurrentPages();g.$scope=C[C.length-1]}this.self=g,this._query=A}},{key:"show",value:function(A){this.self=A,z(A)?this._pageShow(A):this._applicationShow(A)}},{key:"ready",value:function(A){}},{key:"hide",value:function(A){this.self=A,z(A)?this._pageHide(A):this._applicationHide(A,!0)}},{key:"error",value:function(A){this._platform;var g="";g=A.message?A.stack:JSON.stringify(A);var C={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:g,usv:this.statData.usv,t:b(),p:this.statData.p};this.request(C)}}]),C}(q),AA=$.getInstance(),gA=!1,CA={onLaunch:function(A){AA.report(A,this)},onReady:function(){AA.ready(this)},onLoad:function(A){if(AA.load(A,this),this.$scope&&this.$scope.onShareAppMessage){var g=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(A){return AA.interceptShare(!1),g.call(this,A)}}},onShow:function(){gA=!1,AA.show(this)},onHide:function(){gA=!0,AA.hide(this)},onUnload:function(){gA?gA=!1:AA.hide(this)},onError:function(A){AA.error(A)}};function IA(){var g=C("66fd");(g.default||g).mixin(CA),A.report=function(A,g){AA.sendEvent(A,g)}}IA()}).call(this,C("6e42")["default"])},a886:function(A,g,C){},a92e:function(A,g){A.exports="data:image/png;base64,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0p8zAAA7ImlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoTWFjaW50b3NoKTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAxOC0wNi0yNVQxNToxNzo0MyswODowMDwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDE4LTA2LTI1VDE2OjM5OjIyKzA4OjAwPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxOC0wNi0yNVQxNjozOToyMiswODowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHBob3Rvc2hvcDpJQ0NQcm9maWxlPnNSR0IgSUVDNjE5NjYtMi4xPC9waG90b3Nob3A6SUNDUHJvZmlsZT4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDo2NzA4MzAzYi1mMGJiLTRmYzgtODVkMS01MzNmN2Y4YzZkZTA8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5ZWQwOGJmMi1iOGUxLTExN2ItYjFjYy1mNzg5MTQyZWZhNDE8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDpiNDQ5ZDZhNS0yYWFkLTQ2ODAtOWIyOC1lMzY1NzhmMmY5NzI8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jcmVhdGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6YjQ0OWQ2YTUtMmFhZC00NjgwLTliMjgtZTM2NTc4ZjJmOTcyPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE4LTA2LTI1VDE1OjE3OjQzKzA4OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNvbnZlcnRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6cGFyYW1ldGVycz5mcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nPC9zdEV2dDpwYXJhbWV0ZXJzPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDo2NzA4MzAzYi1mMGJiLTRmYzgtODVkMS01MzNmN2Y4YzZkZTA8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTgtMDYtMjVUMTY6Mzk6MjIrMDg6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChNYWNpbnRvc2gpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgPC9yZGY6U2VxPgogICAgICAgICA8L3htcE1NOkhpc3Rvcnk+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjgwPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjgwPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz7Gsi5IAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAHhSURBVHja7NzPi8xhAMfx17Ir9uZHoaR8/wCHpXCRJBcX7V44OMmP5OQfkNwUlz0s4cJh/QWKpGxqSjj4A75KCgecSKRxmDntyTzFfJ/dz/s0z2W+T6+eZ+b5zkwz0e/3pfLWhCCAAQxgAFMAAxjAAKYABjCAAUwBDGAAA5gCGMAABjAF8B83+b8v2LbtHG5hGtdwFb9Ln69pmlW3Am9jMzbgMh5iU7bw37dx2fgoXmJ3AMvbhR5OBLC8aSziOtYGsLxLeIwtASzvMF5hTwDL24nnOBXA8tbjHuYxFcDyLuIJtgawvIPD8+K+AJa3A0s4HcDy1uEOFoaPA1jYeTxr23Z7AMvbj9dt2x4IYHnbhivxZADLm8LNAFbYSgH8hXPjuPDkCsD7iNmmaXpZgaPXw8y48GoHXMChpmk+jHMSNW7hn7iAu12YTG2A7zGHF3kXHr0l7O0SXk2A8ziCT12bWNe38A+cxf2uTrDLgO8wa/DlUu5ERuwpZrqO11XAGwY/9/hcw4tzl7bwd4OP6h/UdK7qCuBbHMeb2k7149jCX5eNHw3Pd9XhjQvwDL7gG67g2HBcZRP5453VcysXwACmAAYwgAFMAQxgAAOYAhjAAAYwgCEIYAADGMAUwADW2Z8BAPzzSmFkEud6AAAAAElFTkSuQmCC"},aa23:function(A,g){A.exports="data:image/png;base64,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0p8zAAA7ImlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoTWFjaW50b3NoKTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAxOC0wNi0yNVQxNToxNzo0MyswODowMDwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDE4LTA2LTI1VDE2OjM5OjQxKzA4OjAwPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxOC0wNi0yNVQxNjozOTo0MSswODowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHBob3Rvc2hvcDpJQ0NQcm9maWxlPnNSR0IgSUVDNjE5NjYtMi4xPC9waG90b3Nob3A6SUNDUHJvZmlsZT4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDplNjM3NWU0Mi0zM2Y4LTQ0ODQtYjNmYS0yOTVjMjZhNDY0Zjc8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiMTljNjU0Ni1iOGUxLTExN2ItYjFjYy1mNzg5MTQyZWZhNDE8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDpmODdlY2I5YS05ZGUzLTRlNzktYWQ4OS05NDQwMmMyYjJjYTA8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jcmVhdGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6Zjg3ZWNiOWEtOWRlMy00ZTc5LWFkODktOTQ0MDJjMmIyY2EwPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE4LTA2LTI1VDE1OjE3OjQzKzA4OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNvbnZlcnRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6cGFyYW1ldGVycz5mcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nPC9zdEV2dDpwYXJhbWV0ZXJzPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDplNjM3NWU0Mi0zM2Y4LTQ0ODQtYjNmYS0yOTVjMjZhNDY0Zjc8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTgtMDYtMjVUMTY6Mzk6NDErMDg6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChNYWNpbnRvc2gpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgPC9yZGY6U2VxPgogICAgICAgICA8L3htcE1NOkhpc3Rvcnk+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjgwPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjgwPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz7HuH6gAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAH1SURBVHja7NzPSlRRHMDx7y8rpI24axGBr6BBuomIaNMmFPyzaCUp9BT6ALpx4aY2tahXqIWQBBNRLnwBQYQK1CBQJBenxcxCBqHmCN1zxu8XBmZmMTN8uL8zd+69TKSUsPyuSCCggAIKaAIKKKCAJqCAAgpoAgoooIAmoIACCmgC9htgRExFxH5EHEfEUkQMRAS5t6aL/31eOCIOgeEzT70H5oDDnNdr+rx2E4DnveEO8ATYrg2wlDVwBGgBs66B+d0A3gArwEAtgKWMcHcbwAyw7wjn9QD4Cow5wvndBj4CTwXMbxB4BawB11wD/30NPK9NYBr44RqY1z3gC3DXEc7vVmdLnBcwv+vAC2C9c9818AJ9AiZTSt/cAvMaB7YiYkLA/G4CHyJizhG+WL9SSkNugZXVL4CnwGITb3y1D/C+d76JW26BvdcCRpvCqx1wHbjf5D5grSP8G3gOvCzhw9QGuAdMAZ/9Fu69TeBOSXg1Aa4BD+k6FugI/70TYAF4XeoHLBlwF5ikfXLJXyI9tgGMlo5XKuAq8Ag4qGFxLmmEj2kfqn9b035VKYDZFxddxhH+2fX4XWf/rjq8pgCf0b4W8AhYBh6TeW1gCYV/vHN5fsoJKKAJKKCAApqAAgoooAkooIACCiiBgAIKKKAJKGCd/RkAq3B0i85tVmAAAAAASUVORK5CYII="},be4d:function(A,g){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkVEOTUzREE2QkNGMTFFOEI1MTdGQzU0NkNERTFGREUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkVEOTUzREI2QkNGMTFFOEI1MTdGQzU0NkNERTFGREUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0RUVDRDcwRDZCQ0YxMUU4QjUxN0ZDNTQ2Q0RFMUZERSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0RUVDRDcwRTZCQ0YxMUU4QjUxN0ZDNTQ2Q0RFMUZERSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pg0b/fgAAAGuSURBVHjavJc/S8NAHIYvKiJaqAg6dVE6CaH4j64Fd7u461SxoN/DxcFJB/0OKlIcxG7i1KGLSBVBpRRdRKQOwfheeQPXmtZc/twPHkiv/d3zJndJWyH+1gQogQvQAi74AffgCKyI/pUHB+AOtNnb4lwlzt1VVs/rNXAIZsAVqIJnMAbmQRHMgUVQU/qmGG4dPIFThvgCGVAAqwyzDc780u8y8TnI9jnDIbAMhpUxKWiAd7DBz/hVlnO7dHVVkW/s+VyVQTVLeYPH/5VFh0tnp1KgyXQ6cnlGL5RnNPosupp0iy3gDLjsccrVfoduUQGXBuVeSWdFbpglcK3RuMNbrMAgYatKd2dDbGo0jvC2jFrS6crJvsG4RqNDopZ0tuUSPABbmC/pfJQH+1zLUYNy6XqlW+S4D8oGA5TpzHkDJ+DT0FLYdB2rgyl+ubwlHMKmo+Y9BdWaBvUEQ3jyOl2+lVSIQPKkQmjJ4w4RSh5XiEhy9afWbYgQnlz2TkZdw7RmCFWejmsXBw2RiDxoiETlfiFyyviCCXlviA/+Ecnz2IjcL4RxuRrihoSW/wowACLbfsGWfozrAAAAAElFTkSuQmCC"},c238:function(A,g){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkZBN0RCRjQ2QkNFMTFFOEI1MTdGQzU0NkNERTFGREUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkZBN0RCRjU2QkNFMTFFOEI1MTdGQzU0NkNERTFGREUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGRkE3REJGMjZCQ0UxMUU4QjUxN0ZDNTQ2Q0RFMUZERSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGRkE3REJGMzZCQ0UxMUU4QjUxN0ZDNTQ2Q0RFMUZERSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuEuiQQAAAFvSURBVHjaxJfPSwJBGIbXIS8RGUhB905C/0l6jI4SBBFUdNJDh6BDdBIVK8HqUofO5X8S0SG6RpigKXis95NvYJn2x8y07rzwIIwM7zPO7s6a+Wy2PSWrYBtsgAJYBEPwDLqgA3pecBbAFijy3GXwBV7BE7gHI/+EjCJwAM7AvBeeMaiAC2V8EzTBSsTcPjhkkWmE78tLUI8pl6tsgQYtgMdOwENMOSUP7sCpHJjjT7La9cyyD7K8PRXDucfgHdzSFtCev2msPOmQ+JrgCy7tckoOlAVf7a5SEny7uMq64PvcVZZIYOBQYCT4CecqLyTw6FCgSwI34NtB+YTOFcGHxZEDAXoafsizgH6F8xTLr0FNPYyqKUlcgR3wowqkIUHle7I8SGCWEn/KwwRmIRFYHiWQpERoeZxAEhKR5ToC/5GILdcVsJHQKjcRMJHQLjcV0JEwKrcRiJIwLrcVCJKwKvf/L7CVkG+3VuWUXwEGAAICVy4ybmY6AAAAAElFTkSuQmCC"},c8ba:function(A,g){var C;C=function(){return this}();try{C=C||new Function("return this")()}catch(I){"object"===typeof window&&(C=window)}A.exports=C},db8b:function(A,g,C){"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0;var I={appid:"__UNI__F62111E"};g.default=I},e544:function(A,g){A.exports="data:image/png;base64,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0p8zAAA7ImlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoTWFjaW50b3NoKTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAxOC0wNi0yNVQxNToxNzo0MyswODowMDwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDE4LTA2LTI1VDE2OjQwOjE1KzA4OjAwPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxOC0wNi0yNVQxNjo0MDoxNSswODowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHBob3Rvc2hvcDpJQ0NQcm9maWxlPnNSR0IgSUVDNjE5NjYtMi4xPC9waG90b3Nob3A6SUNDUHJvZmlsZT4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDpiNTg4MzRlYy03YzQzLTQzNjQtOTdkYS00YWZkOTVlZjY5Y2U8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDpjZWZmNmUxMC1iOGUxLTExN2ItYjFjYy1mNzg5MTQyZWZhNDE8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDpkYTU2ZDYzNi1hZjMzLTQyNWItYTZlNS0xM2M5ZmFjNjI4YTY8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jcmVhdGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6ZGE1NmQ2MzYtYWYzMy00MjViLWE2ZTUtMTNjOWZhYzYyOGE2PC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE4LTA2LTI1VDE1OjE3OjQzKzA4OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNvbnZlcnRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6cGFyYW1ldGVycz5mcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nPC9zdEV2dDpwYXJhbWV0ZXJzPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDpiNTg4MzRlYy03YzQzLTQzNjQtOTdkYS00YWZkOTVlZjY5Y2U8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTgtMDYtMjVUMTY6NDA6MTUrMDg6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChNYWNpbnRvc2gpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgPC9yZGY6U2VxPgogICAgICAgICA8L3htcE1NOkhpc3Rvcnk+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjgwPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjgwPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz5DGVsYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAH/SURBVHja7NrBSlRRHIDx76+TRIsWtqhAhF6gRUXhpiCiwK2b2biyoN4iH0AXESFRmxYFUdG6RVAK6qJNLyGBJkEQ2OK4uUKMlXOvDOfcme8DQWZQLj/4nzn33ImUEta8MQkEFFBAAU1AAQUU0AQUUEABTUABBRTQBBRQQAFNwGEHjIimP+MR8TAifkbETkTMZbn+3M+FI6LJn00CL4E7f7y2m1KaFPDoLgLvgQu9b6SUYuRGuGZdYP1veH6I/L9xYAl4BZwq6cI6LcA7A7wGbpZ4caUDXgbeAdNuY+o3D6yVjFcq4AngEfACOFn6+lLaCJ+t1rvrbdkWlAR4FXgLTHkrV78FYLVteNkBI2ICeAI8AybaeJjQyYh3vhrZGVpcJxPeTLW/O0fLG8uA1wU+DQMeZDiNiYgfwOlB/G9PYxzhvroP/B4WwCwHqoP6EBmZEU4prQOXgA1HuDniFnADWBGwOeIe8AC4C+y5BjZbDw9+vQa8Oc798KhvYzaBK8BnR7h534BbwGNHuP4I9zYPPKXGqXSOES79wXqth0reyh3uS4X40TWwedvAbWDZNbD+CPfWBZ7zj28nuAb2l18uOmZfq/3ih57Xd10D++87MAssAr+AHeDeSK6Bbc8TaQEFFFBAE1BAAQU0AQUUUEATUEABBTQBBRRQQBNw0O0PAPfJdnJFk5QWAAAAAElFTkSuQmCC"}}]);
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
__wxRoute = 'components/episode/episode';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/episode/episode.js';

define('components/episode/episode.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/episode/episode"], {
  "097f": function f(t, n, e) {
    "use strict";

    var i = e("e4d8"),
        o = e.n(i);
    o.a;
  },
  "7a00": function a00(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var e = {
        props: ["index"],
        data: function data() {
          return {
            months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            year: 0,
            month: ""
          };
        },
        computed: {
          ind: function ind() {
            return this.index < 10 ? "0" + this.index : this.index;
          }
        },
        created: function created() {
          this.init();
        },
        methods: {
          init: function init() {
            var n = new Date(),
                e = n.getFullYear(),
                i = n.getMonth();
            console.log(t(i, " at components/episode/episode.vue:42")), this.year = e, this.month = this.months[i];
          }
        }
      };
      n.default = e;
    }).call(this, e("0de9")["default"]);
  },
  9085: function _(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("7a00"),
        o = e.n(i);

    for (var u in i) {
      "default" !== u && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(u);
    }

    n["default"] = o.a;
  },
  b574: function b574(t, n, e) {
    "use strict";

    var i = function i() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        o = [];

    e.d(n, "a", function () {
      return i;
    }), e.d(n, "b", function () {
      return o;
    });
  },
  e4d8: function e4d8(t, n, e) {},
  fe8e: function fe8e(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("b574"),
        o = e("9085");

    for (var u in o) {
      "default" !== u && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(u);
    }

    e("097f");
    var a = e("2877"),
        r = Object(a["a"])(o["default"], i["a"], i["b"], !1, null, "d4b2117c", null);
    n["default"] = r.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/episode/episode-create-component', {
  'components/episode/episode-create-component': function componentsEpisodeEpisodeCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("fe8e"));
  }
}, [['components/episode/episode-create-component']]]);
});
require('components/episode/episode.js');
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
__wxRoute = 'components/movie/movie';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/movie/movie.js';

define('components/movie/movie.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/movie/movie"], {
  "058f": function f(n, t, e) {
    "use strict";

    var u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        r = [];

    e.d(t, "a", function () {
      return u;
    }), e.d(t, "b", function () {
      return r;
    });
  },
  "104b": function b(n, t, e) {
    "use strict";

    var u = e("64e2"),
        r = e.n(u);
    r.a;
  },
  "64e2": function e2(n, t, e) {},
  6568: function _(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      props: ["img", "content"],
      data: function data() {
        return {};
      }
    };
    t.default = u;
  },
  "9c5f": function c5f(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("058f"),
        r = e("9cb9");

    for (var c in r) {
      "default" !== c && function (n) {
        e.d(t, n, function () {
          return r[n];
        });
      }(c);
    }

    e("104b");
    var o = e("2877"),
        a = Object(o["a"])(r["default"], u["a"], u["b"], !1, null, null, null);
    t["default"] = a.exports;
  },
  "9cb9": function cb9(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("6568"),
        r = e.n(u);

    for (var c in u) {
      "default" !== c && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(c);
    }

    t["default"] = r.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/movie/movie-create-component', {
  'components/movie/movie-create-component': function componentsMovieMovieCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("9c5f"));
  }
}, [['components/movie/movie-create-component']]]);
});
require('components/movie/movie.js');
__wxRoute = 'components/navi/navi';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/navi/navi.js';

define('components/navi/navi.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/navi/navi"], {
  "0f05": function f05(t, n, a) {
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
  6777: function _(t, n, a) {},
  "9fdd": function fdd(t, n, a) {
    "use strict";

    var e = a("6777"),
        i = a.n(e);
    i.a;
  },
  a1c9: function a1c9(t, n, a) {
    "use strict";

    a.r(n);
    var e = a("f55a"),
        i = a.n(e);

    for (var r in e) {
      "default" !== r && function (t) {
        a.d(n, t, function () {
          return e[t];
        });
      }(r);
    }

    n["default"] = i.a;
  },
  c017: function c017(t, n, a) {
    "use strict";

    a.r(n);
    var e = a("0f05"),
        i = a("a1c9");

    for (var r in i) {
      "default" !== r && function (t) {
        a.d(n, t, function () {
          return i[t];
        });
      }(r);
    }

    a("9fdd");
    var f = a("2877"),
        u = Object(f["a"])(i["default"], e["a"], e["b"], !1, null, null, null);
    n["default"] = u.exports;
  },
  f55a: function f55a(t, n, a) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var e = {
      props: ["title", "first", "latest"],
      data: function data() {
        return {
          disLeftSrc: a("3a1f"),
          leftSrc: a("e544"),
          disRightSrc: a("a92e"),
          rightSrc: a("aa23"),
          firstData: null,
          latestData: null
        };
      },
      created: function created() {
        this.firstData = this.first, this.latestData = this.latest;
      },
      methods: {
        onLeft: function onLeft() {
          this.latestData || this.$emit("left", {});
        },
        onRight: function onRight() {
          this.firstData || this.$emit("right", {});
        }
      }
    };
    n.default = e;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/navi/navi-create-component', {
  'components/navi/navi-create-component': function componentsNaviNaviCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("c017"));
  }
}, [['components/navi/navi-create-component']]]);
});
require('components/navi/navi.js');
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

__wxRoute = 'pages/classic/classic';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/classic/classic.js';

define('pages/classic/classic.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/classic/classic"],{"030f":function(n,e,t){"use strict";t.r(e);var o=t("b76b"),i=t.n(o);for(var c in o)"default"!==c&&function(n){t.d(e,n,function(){return o[n]})}(c);e["default"]=i.a},8996:function(n,e,t){},a1b3:function(n,e,t){"use strict";var o=t("8996"),i=t.n(o);i.a},b76b:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){return Promise.all([t.e("common/vendor"),t.e("components/episode/episode")]).then(t.bind(null,"fe8e"))},i=function(){return Promise.all([t.e("common/vendor"),t.e("components/like/like")]).then(t.bind(null,"8c64"))},c=function(){return t.e("components/movie/movie").then(t.bind(null,"9c5f"))},u=function(){return Promise.all([t.e("common/vendor"),t.e("components/navi/navi")]).then(t.bind(null,"c017"))},a={data:function(){return{classic:{index:1,title:"李安《饮食男女》",content:"人生不能像做菜，把所有的料准备好才下锅",image:"https://img3.doubanio.com/view/movie_gallery_frame_hot_rec/normal/public/22f4b036a58a361.jpg"},likeStatus:!0,likeCount:7,latest:!0,first:!1}},components:{VEpisode:o,VLike:i,VMovie:c,VNavi:u},methods:{onLike:function(){},share:function(){n.showToast({title:"功能暂未开发!",duration:1e3})},onNext:function(){},onPrevious:function(){}}};e.default=a}).call(this,t("6e42")["default"])},c0da:function(n,e,t){"use strict";var o=function(){var n=this,e=n.$createElement;n._self._c},i=[];t.d(e,"a",function(){return o}),t.d(e,"b",function(){return i})},c5d1:function(n,e,t){"use strict";(function(n){t("a886"),t("921b");o(t("66fd"));var e=o(t("fed6"));function o(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},fed6:function(n,e,t){"use strict";t.r(e);var o=t("c0da"),i=t("030f");for(var c in i)"default"!==c&&function(n){t.d(e,n,function(){return i[n]})}(c);t("a1b3");var u=t("2877"),a=Object(u["a"])(i["default"],o["a"],o["b"],!1,null,"66b5c80c",null);e["default"]=a.exports}},[["c5d1","common/runtime","common/vendor"]]]);
});
require('pages/classic/classic.js');
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


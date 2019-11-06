var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20181116_syb_scopedata*/window.__wcc_version__='v0.5vv_20181116_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
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

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
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
Z([3,'book-item-container'])
Z([[6],[[7],[3,'book']],[3,'image']])
Z([3,'description'])
Z([3,'title'])
Z([a,[[6],[[7],[3,'book']],[3,'title']]])
Z([3,'author'])
Z([a,[[6],[[7],[3,'book']],[3,'author']]])
Z([[7],[3,'showLike']])
Z([3,'foot'])
Z([3,'footer'])
Z([a,[[2,'+'],[[6],[[7],[3,'book']],[3,'fav_nums']],[1,' 喜欢']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'like-container'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onLike']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'src']])
Z([a,[[7],[3,'countData']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'preview-item-container'])
Z([3,'head'])
Z([3,'__l'])
Z([[6],[[7],[3,'classic']],[3,'text']])
Z([3,'1'])
Z(z[2])
Z([3,'like'])
Z([[6],[[7],[3,'classic']],[3,'fav_nums']])
Z([1,true])
Z(z[8])
Z([3,'2'])
Z([[4],[[5],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'classic']],[3,'type']],[1,200]],[1,'music-img'],[1,'other-img']]]])
Z([[6],[[7],[3,'classic']],[3,'image']])
Z([3,'text'])
Z([a,[[6],[[7],[3,'classic']],[3,'content']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'tag-container tag-class '])
Z([3,'before'])
Z([a,[[7],[3,'text']]])
Z([3,'after'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'my-container'])
Z([3,'bg'])
Z([3,'../../static/my/my@bg.png'])
Z([3,'avatar-container avatar-position'])
Z([3,'avatar'])
Z([3,'https://shopnc-oss.oss-cn-hangzhou.aliyuncs.com/platform/87e1b00d-69d7-47e4-89d9-8130dd238e9f.jpeg'])
Z([3,'Unittec-小众'])
Z([3,'about-container'])
Z([3,'onJumpToAbout'])
Z([3,'about-us'])
Z([3,'../../static/my/about.png'])
Z([3,'description'])
Z([3,'个人信息'])
Z(z[9])
Z([3,'book-num'])
Z([3,'10'])
Z(z[11])
Z([3,'待处理'])
Z([3,'my-content'])
Z([3,'my-item'])
Z([3,'label'])
Z(z[17])
Z([3,'to-do-list'])
Z([3,'to-do-item'])
Z([3,'ATS设备故障'])
Z([3,'status'])
Z([3,'待响应'])
Z(z[23])
Z([3,'板卡故障'])
Z(z[25])
Z(z[26])
Z(z[23])
Z([3,'CC故障'])
Z(z[25])
Z([3,'background:#2db7f5;'])
Z([3,'处理中'])
Z(z[23])
Z([3,'ZC故障'])
Z(z[25])
Z(z[34])
Z(z[35])
Z(z[19])
Z(z[20])
Z([3,'我的订阅'])
Z([3,'tag-list'])
Z([3,'tag'])
Z([3,'ZC'])
Z(z[45])
Z([3,'CC'])
Z(z[45])
Z([3,'ATS'])
Z(z[45])
Z([3,'CBI'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'_div'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[7],[3,'searching']]])
Z([3,'book-container'])
Z([3,'header'])
Z([3,'__e'])
Z([3,'box'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onSearching']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'../../static/search.png'])
Z([3,'搜索书籍'])
Z([3,'sub-container'])
Z([3,'head-img'])
Z([3,'../../static/quality.png'])
Z([3,'books-container'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'books']])
Z(z[12])
Z([3,'__l'])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'login-wrapper'])
Z([3,'login-head'])
Z([3,'logo'])
Z([3,'../../static/zh_logo.png'])
Z([3,'众合智相伴，运维无难事'])
Z([3,'login-form'])
Z([3,'form-item'])
Z([3,'__e'])
Z([3,'form-item-input'])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'username']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'20'])
Z([3,'username'])
Z([3,'请输入用户名'])
Z([3,'input-placeholder'])
Z([3,'text'])
Z([[7],[3,'username']])
Z(z[6])
Z(z[7])
Z(z[8])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'password']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'password'])
Z([3,'请输入密码'])
Z(z[13])
Z(z[20])
Z([[7],[3,'password']])
Z(z[6])
Z([3,'tip'])
Z([3,'注册即同意《众合科技协议》《隐私保护指引》'])
Z(z[6])
Z(z[7])
Z([3,'login-button'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'login']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'登录'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'my-container'])
Z([3,'bg'])
Z([3,'../../static/my/my@bg.png'])
Z([3,'avatar-container avatar-position'])
Z([3,'avatar'])
Z([3,'https://shopnc-oss.oss-cn-hangzhou.aliyuncs.com/platform/87e1b00d-69d7-47e4-89d9-8130dd238e9f.jpeg'])
Z([3,'大雷'])
Z([3,'about-container'])
Z([3,'onJumpToAbout'])
Z([3,'about-us'])
Z([3,'../../static/my/about.png'])
Z([3,'description'])
Z([3,'关于我'])
Z(z[9])
Z([3,'book-num'])
Z([3,'10'])
Z(z[11])
Z([3,'喜欢的书'])
Z([3,'like-container'])
Z([3,'headline'])
Z([3,'../../static/my/like.png'])
Z([3,'preview-container'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'classics']])
Z(z[22])
Z([3,'__l'])
Z([3,'preview'])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'report-wrapper'])
Z([3,'qiun-columns'])
Z([3,'qiun-bg-white qiun-title-bar qiun-common-mt'])
Z([3,'qiun-title-dot-light'])
Z([3,'报警等级'])
Z([3,'qiun-charts'])
Z([3,'__e'])
Z([3,'canvasRing'])
Z([3,'charts'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchRing']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[7])
Z(z[1])
Z(z[2])
Z(z[3])
Z([3,'1号线设备故障比例'])
Z(z[5])
Z(z[6])
Z([3,'canvasPie'])
Z(z[8])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchPie']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[17])
Z(z[1])
Z(z[2])
Z(z[3])
Z([3,'历年ATS与CC故障'])
Z(z[5])
Z(z[6])
Z([3,'canvasColumn'])
Z(z[8])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchColumn']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[27])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'work-detail-wrapper data-v-f699f716'])
Z([3,'detail data-v-f699f716'])
Z([3,'detail-item data-v-f699f716'])
Z([3,'维修编号：0000000002153'])
Z(z[2])
Z([3,'通知人：系统管理员'])
Z(z[2])
Z([3,'通知时间：2018/5/15'])
Z(z[2])
Z([3,'设备类型：电源屏'])
Z(z[2])
Z([3,'设备名称：钱江路电源屏'])
Z(z[2])
Z([3,'处理要求：要求在2018年05月25日之前完成检修'])
Z(z[2])
Z([3,'维修人：单军'])
Z(z[2])
Z([3,'维修时间：2018/05/20'])
Z(z[2])
Z([3,'故障原因：模块线路老化'])
Z(z[2])
Z([3,'处理方式：单军'])
Z([3,'button data-v-f699f716'])
Z([3,'确定'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'work-wrapper data-v-54c9ee79'])
Z([3,'work-list data-v-54c9ee79'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z([3,'__e'])
Z([3,'work-item data-v-54c9ee79'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toDetail']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'item-left data-v-54c9ee79'])
Z([3,'work-title data-v-54c9ee79'])
Z([a,[[6],[[7],[3,'item']],[3,'title']]])
Z([3,'item item-time data-v-54c9ee79'])
Z([a,[[6],[[7],[3,'item']],[3,'time']]])
Z([3,'item item-source data-v-54c9ee79'])
Z([a,[[2,'+'],[1,'来源:'],[[6],[[7],[3,'item']],[3,'source']]]])
Z([3,'item item-suggest data-v-54c9ee79'])
Z([a,[[2,'+'],[[2,'+'],[1,'建议工具:'],[[6],[[7],[3,'item']],[3,'suggest']]],[1,'']]])
Z([3,'data-v-54c9ee79'])
Z([3,'../../static/WX20191105-181507@2x.png'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/book/book.wxml','./components/like/like.wxml','./components/preview/preview.wxml','./components/tag/tag.wxml','./pages/about/about.wxml','./pages/alarm/alarm.wxml','./pages/book/book.wxml','./pages/login/login.wxml','./pages/my/my.wxml','./pages/report/report.wxml','./pages/work-detail/work-detail.wxml','./pages/work-sheet/work-sheet.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var xC=_n('image')
_rz(z,xC,'src',1,e,s,gg)
_(oB,xC)
var oD=_n('view')
_rz(z,oD,'class',2,e,s,gg)
var cF=_n('text')
_rz(z,cF,'class',3,e,s,gg)
var hG=_oz(z,4,e,s,gg)
_(cF,hG)
_(oD,cF)
var oH=_n('text')
_rz(z,oH,'class',5,e,s,gg)
var cI=_oz(z,6,e,s,gg)
_(oH,cI)
_(oD,oH)
var fE=_v()
_(oD,fE)
if(_oz(z,7,e,s,gg)){fE.wxVkey=1
var oJ=_n('view')
_rz(z,oJ,'class',8,e,s,gg)
var lK=_n('text')
_rz(z,lK,'class',9,e,s,gg)
var aL=_oz(z,10,e,s,gg)
_(lK,aL)
_(oJ,lK)
_(fE,oJ)
}
fE.wxXCkey=1
_(oB,oD)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var eN=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1],[],e,s,gg)
var bO=_n('image')
_rz(z,bO,'src',3,e,s,gg)
_(eN,bO)
var oP=_n('text')
var xQ=_oz(z,4,e,s,gg)
_(oP,xQ)
_(eN,oP)
_(r,eN)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var fS=_n('view')
_rz(z,fS,'class',0,e,s,gg)
var cT=_n('view')
_rz(z,cT,'class',1,e,s,gg)
var hU=_mz(z,'v-tag',['bind:__l',2,'text',1,'vueId',2],[],e,s,gg)
_(cT,hU)
var oV=_mz(z,'v-like',['bind:__l',5,'class',1,'count',2,'like',3,'readOnly',4,'vueId',5],[],e,s,gg)
_(cT,oV)
_(fS,cT)
var cW=_mz(z,'image',['class',11,'src',1],[],e,s,gg)
_(fS,cW)
var oX=_n('view')
_rz(z,oX,'class',13,e,s,gg)
var lY=_oz(z,14,e,s,gg)
_(oX,lY)
_(fS,oX)
_(r,fS)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var t1=_n('view')
_rz(z,t1,'class',0,e,s,gg)
var e2=_n('slot')
_rz(z,e2,'name',1,e,s,gg)
_(t1,e2)
var b3=_n('text')
var o4=_oz(z,2,e,s,gg)
_(b3,o4)
_(t1,b3)
var x5=_n('slot')
_rz(z,x5,'name',3,e,s,gg)
_(t1,x5)
_(r,t1)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var f7=_n('view')
_rz(z,f7,'class',0,e,s,gg)
var c8=_mz(z,'image',['class',1,'src',1],[],e,s,gg)
_(f7,c8)
var h9=_n('view')
_rz(z,h9,'class',3,e,s,gg)
var o0=_mz(z,'image',['class',4,'src',1],[],e,s,gg)
_(h9,o0)
var cAB=_n('text')
var oBB=_oz(z,6,e,s,gg)
_(cAB,oBB)
_(h9,cAB)
_(f7,h9)
var lCB=_n('view')
_rz(z,lCB,'class',7,e,s,gg)
var aDB=_mz(z,'view',['bind:tap',8,'class',1],[],e,s,gg)
var tEB=_n('image')
_rz(z,tEB,'src',10,e,s,gg)
_(aDB,tEB)
var eFB=_n('text')
_rz(z,eFB,'class',11,e,s,gg)
var bGB=_oz(z,12,e,s,gg)
_(eFB,bGB)
_(aDB,eFB)
_(lCB,aDB)
var oHB=_n('view')
_rz(z,oHB,'class',13,e,s,gg)
var xIB=_n('text')
_rz(z,xIB,'class',14,e,s,gg)
var oJB=_oz(z,15,e,s,gg)
_(xIB,oJB)
_(oHB,xIB)
var fKB=_n('text')
_rz(z,fKB,'class',16,e,s,gg)
var cLB=_oz(z,17,e,s,gg)
_(fKB,cLB)
_(oHB,fKB)
_(lCB,oHB)
_(f7,lCB)
var hMB=_n('view')
_rz(z,hMB,'class',18,e,s,gg)
var oNB=_n('view')
_rz(z,oNB,'class',19,e,s,gg)
var cOB=_n('view')
_rz(z,cOB,'class',20,e,s,gg)
var oPB=_oz(z,21,e,s,gg)
_(cOB,oPB)
_(oNB,cOB)
var lQB=_n('view')
_rz(z,lQB,'class',22,e,s,gg)
var aRB=_n('view')
_rz(z,aRB,'class',23,e,s,gg)
var tSB=_n('view')
var eTB=_oz(z,24,e,s,gg)
_(tSB,eTB)
_(aRB,tSB)
var bUB=_n('view')
_rz(z,bUB,'class',25,e,s,gg)
var oVB=_oz(z,26,e,s,gg)
_(bUB,oVB)
_(aRB,bUB)
_(lQB,aRB)
var xWB=_n('view')
_rz(z,xWB,'class',27,e,s,gg)
var oXB=_n('view')
var fYB=_oz(z,28,e,s,gg)
_(oXB,fYB)
_(xWB,oXB)
var cZB=_n('view')
_rz(z,cZB,'class',29,e,s,gg)
var h1B=_oz(z,30,e,s,gg)
_(cZB,h1B)
_(xWB,cZB)
_(lQB,xWB)
var o2B=_n('view')
_rz(z,o2B,'class',31,e,s,gg)
var c3B=_n('view')
var o4B=_oz(z,32,e,s,gg)
_(c3B,o4B)
_(o2B,c3B)
var l5B=_mz(z,'view',['class',33,'style',1],[],e,s,gg)
var a6B=_oz(z,35,e,s,gg)
_(l5B,a6B)
_(o2B,l5B)
_(lQB,o2B)
var t7B=_n('view')
_rz(z,t7B,'class',36,e,s,gg)
var e8B=_n('view')
var b9B=_oz(z,37,e,s,gg)
_(e8B,b9B)
_(t7B,e8B)
var o0B=_mz(z,'view',['class',38,'style',1],[],e,s,gg)
var xAC=_oz(z,40,e,s,gg)
_(o0B,xAC)
_(t7B,o0B)
_(lQB,t7B)
_(oNB,lQB)
_(hMB,oNB)
var oBC=_n('view')
_rz(z,oBC,'class',41,e,s,gg)
var fCC=_n('view')
_rz(z,fCC,'class',42,e,s,gg)
var cDC=_oz(z,43,e,s,gg)
_(fCC,cDC)
_(oBC,fCC)
var hEC=_n('view')
_rz(z,hEC,'class',44,e,s,gg)
var oFC=_n('view')
_rz(z,oFC,'class',45,e,s,gg)
var cGC=_oz(z,46,e,s,gg)
_(oFC,cGC)
_(hEC,oFC)
var oHC=_n('view')
_rz(z,oHC,'class',47,e,s,gg)
var lIC=_oz(z,48,e,s,gg)
_(oHC,lIC)
_(hEC,oHC)
var aJC=_n('view')
_rz(z,aJC,'class',49,e,s,gg)
var tKC=_oz(z,50,e,s,gg)
_(aJC,tKC)
_(hEC,aJC)
var eLC=_n('view')
_rz(z,eLC,'class',51,e,s,gg)
var bMC=_oz(z,52,e,s,gg)
_(eLC,bMC)
_(hEC,eLC)
_(oBC,hEC)
_(hMB,oBC)
_(f7,hMB)
_(r,f7)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var xOC=_n('view')
_rz(z,xOC,'class',0,e,s,gg)
_(r,xOC)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var fQC=_v()
_(r,fQC)
if(_oz(z,0,e,s,gg)){fQC.wxVkey=1
var cRC=_n('view')
_rz(z,cRC,'class',1,e,s,gg)
var hSC=_n('view')
_rz(z,hSC,'class',2,e,s,gg)
var oTC=_mz(z,'view',['bindtap',3,'class',1,'data-event-opts',2],[],e,s,gg)
var cUC=_n('image')
_rz(z,cUC,'src',6,e,s,gg)
_(oTC,cUC)
var oVC=_n('text')
var lWC=_oz(z,7,e,s,gg)
_(oVC,lWC)
_(oTC,oVC)
_(hSC,oTC)
_(cRC,hSC)
var aXC=_n('view')
_rz(z,aXC,'class',8,e,s,gg)
var tYC=_mz(z,'image',['class',9,'src',1],[],e,s,gg)
_(aXC,tYC)
var eZC=_n('view')
_rz(z,eZC,'class',11,e,s,gg)
var b1C=_v()
_(eZC,b1C)
var o2C=function(o4C,x3C,f5C,gg){
var h7C=_mz(z,'v-book',['bind:__l',16,'book',1,'vueId',2],[],o4C,x3C,gg)
_(f5C,h7C)
return f5C
}
b1C.wxXCkey=4
_2z(z,14,o2C,e,s,gg,b1C,'item','index','index')
_(aXC,eZC)
_(cRC,aXC)
_(fQC,cRC)
}
fQC.wxXCkey=1
fQC.wxXCkey=3
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var c9C=_n('view')
_rz(z,c9C,'class',0,e,s,gg)
var o0C=_n('view')
_rz(z,o0C,'class',1,e,s,gg)
var lAD=_mz(z,'image',['class',2,'src',1],[],e,s,gg)
_(o0C,lAD)
var aBD=_n('view')
var tCD=_oz(z,4,e,s,gg)
_(aBD,tCD)
_(o0C,aBD)
_(c9C,o0C)
var eDD=_n('form')
_rz(z,eDD,'class',5,e,s,gg)
var bED=_n('view')
_rz(z,bED,'class',6,e,s,gg)
var oFD=_mz(z,'input',['bindinput',7,'class',1,'data-event-opts',2,'maxlength',3,'name',4,'placeholder',5,'placeholderClass',6,'type',7,'value',8],[],e,s,gg)
_(bED,oFD)
_(eDD,bED)
var xGD=_n('view')
_rz(z,xGD,'class',16,e,s,gg)
var oHD=_mz(z,'input',['bindinput',17,'class',1,'data-event-opts',2,'name',3,'placeholder',4,'placeholderClass',5,'type',6,'value',7],[],e,s,gg)
_(xGD,oHD)
_(eDD,xGD)
var fID=_n('view')
_rz(z,fID,'class',25,e,s,gg)
var cJD=_n('text')
_rz(z,cJD,'class',26,e,s,gg)
var hKD=_oz(z,27,e,s,gg)
_(cJD,hKD)
_(fID,cJD)
_(eDD,fID)
var oLD=_n('view')
_rz(z,oLD,'class',28,e,s,gg)
var cMD=_mz(z,'button',['bindtap',29,'class',1,'data-event-opts',2],[],e,s,gg)
var oND=_oz(z,32,e,s,gg)
_(cMD,oND)
_(oLD,cMD)
_(eDD,oLD)
_(c9C,eDD)
_(r,c9C)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var aPD=_n('view')
_rz(z,aPD,'class',0,e,s,gg)
var tQD=_mz(z,'image',['class',1,'src',1],[],e,s,gg)
_(aPD,tQD)
var eRD=_n('view')
_rz(z,eRD,'class',3,e,s,gg)
var bSD=_mz(z,'image',['class',4,'src',1],[],e,s,gg)
_(eRD,bSD)
var oTD=_n('text')
var xUD=_oz(z,6,e,s,gg)
_(oTD,xUD)
_(eRD,oTD)
_(aPD,eRD)
var oVD=_n('view')
_rz(z,oVD,'class',7,e,s,gg)
var fWD=_mz(z,'view',['bind:tap',8,'class',1],[],e,s,gg)
var cXD=_n('image')
_rz(z,cXD,'src',10,e,s,gg)
_(fWD,cXD)
var hYD=_n('text')
_rz(z,hYD,'class',11,e,s,gg)
var oZD=_oz(z,12,e,s,gg)
_(hYD,oZD)
_(fWD,hYD)
_(oVD,fWD)
var c1D=_n('view')
_rz(z,c1D,'class',13,e,s,gg)
var o2D=_n('text')
_rz(z,o2D,'class',14,e,s,gg)
var l3D=_oz(z,15,e,s,gg)
_(o2D,l3D)
_(c1D,o2D)
var a4D=_n('text')
_rz(z,a4D,'class',16,e,s,gg)
var t5D=_oz(z,17,e,s,gg)
_(a4D,t5D)
_(c1D,a4D)
_(oVD,c1D)
_(aPD,oVD)
var e6D=_n('view')
_rz(z,e6D,'class',18,e,s,gg)
var b7D=_mz(z,'image',['class',19,'src',1],[],e,s,gg)
_(e6D,b7D)
var o8D=_n('view')
_rz(z,o8D,'class',21,e,s,gg)
var x9D=_v()
_(o8D,x9D)
var o0D=function(cBE,fAE,hCE,gg){
var cEE=_mz(z,'v-preview',['bind:__l',26,'class',1,'classic',2,'vueId',3],[],cBE,fAE,gg)
_(hCE,cEE)
return hCE
}
x9D.wxXCkey=4
_2z(z,24,o0D,e,s,gg,x9D,'item','index','index')
_(e6D,o8D)
_(aPD,e6D)
_(r,aPD)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var lGE=_n('view')
_rz(z,lGE,'class',0,e,s,gg)
var aHE=_n('view')
_rz(z,aHE,'class',1,e,s,gg)
var tIE=_n('view')
_rz(z,tIE,'class',2,e,s,gg)
var eJE=_n('view')
_rz(z,eJE,'class',3,e,s,gg)
var bKE=_oz(z,4,e,s,gg)
_(eJE,bKE)
_(tIE,eJE)
_(aHE,tIE)
var oLE=_n('view')
_rz(z,oLE,'class',5,e,s,gg)
var xME=_mz(z,'canvas',['bindtouchstart',6,'canvasId',1,'class',2,'data-event-opts',3,'id',4],[],e,s,gg)
_(oLE,xME)
_(aHE,oLE)
_(lGE,aHE)
var oNE=_n('view')
_rz(z,oNE,'class',11,e,s,gg)
var fOE=_n('view')
_rz(z,fOE,'class',12,e,s,gg)
var cPE=_n('view')
_rz(z,cPE,'class',13,e,s,gg)
var hQE=_oz(z,14,e,s,gg)
_(cPE,hQE)
_(fOE,cPE)
_(oNE,fOE)
var oRE=_n('view')
_rz(z,oRE,'class',15,e,s,gg)
var cSE=_mz(z,'canvas',['bindtouchstart',16,'canvasId',1,'class',2,'data-event-opts',3,'id',4],[],e,s,gg)
_(oRE,cSE)
_(oNE,oRE)
_(lGE,oNE)
var oTE=_n('view')
_rz(z,oTE,'class',21,e,s,gg)
var lUE=_n('view')
_rz(z,lUE,'class',22,e,s,gg)
var aVE=_n('view')
_rz(z,aVE,'class',23,e,s,gg)
var tWE=_oz(z,24,e,s,gg)
_(aVE,tWE)
_(lUE,aVE)
_(oTE,lUE)
var eXE=_n('view')
_rz(z,eXE,'class',25,e,s,gg)
var bYE=_mz(z,'canvas',['bindtouchstart',26,'canvasId',1,'class',2,'data-event-opts',3,'id',4],[],e,s,gg)
_(eXE,bYE)
_(oTE,eXE)
_(lGE,oTE)
_(r,lGE)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var x1E=_n('view')
_rz(z,x1E,'class',0,e,s,gg)
var o2E=_n('view')
_rz(z,o2E,'class',1,e,s,gg)
var f3E=_n('view')
_rz(z,f3E,'class',2,e,s,gg)
var c4E=_oz(z,3,e,s,gg)
_(f3E,c4E)
_(o2E,f3E)
var h5E=_n('view')
_rz(z,h5E,'class',4,e,s,gg)
var o6E=_oz(z,5,e,s,gg)
_(h5E,o6E)
_(o2E,h5E)
var c7E=_n('view')
_rz(z,c7E,'class',6,e,s,gg)
var o8E=_oz(z,7,e,s,gg)
_(c7E,o8E)
_(o2E,c7E)
var l9E=_n('view')
_rz(z,l9E,'class',8,e,s,gg)
var a0E=_oz(z,9,e,s,gg)
_(l9E,a0E)
_(o2E,l9E)
var tAF=_n('view')
_rz(z,tAF,'class',10,e,s,gg)
var eBF=_oz(z,11,e,s,gg)
_(tAF,eBF)
_(o2E,tAF)
var bCF=_n('view')
_rz(z,bCF,'class',12,e,s,gg)
var oDF=_oz(z,13,e,s,gg)
_(bCF,oDF)
_(o2E,bCF)
var xEF=_n('view')
_rz(z,xEF,'class',14,e,s,gg)
var oFF=_oz(z,15,e,s,gg)
_(xEF,oFF)
_(o2E,xEF)
var fGF=_n('view')
_rz(z,fGF,'class',16,e,s,gg)
var cHF=_oz(z,17,e,s,gg)
_(fGF,cHF)
_(o2E,fGF)
var hIF=_n('view')
_rz(z,hIF,'class',18,e,s,gg)
var oJF=_oz(z,19,e,s,gg)
_(hIF,oJF)
_(o2E,hIF)
var cKF=_n('view')
_rz(z,cKF,'class',20,e,s,gg)
var oLF=_oz(z,21,e,s,gg)
_(cKF,oLF)
_(o2E,cKF)
var lMF=_n('view')
_rz(z,lMF,'class',22,e,s,gg)
var aNF=_oz(z,23,e,s,gg)
_(lMF,aNF)
_(o2E,lMF)
_(x1E,o2E)
_(r,x1E)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var ePF=_n('view')
_rz(z,ePF,'class',0,e,s,gg)
var bQF=_n('view')
_rz(z,bQF,'class',1,e,s,gg)
var oRF=_v()
_(bQF,oRF)
var xSF=function(fUF,oTF,cVF,gg){
var oXF=_mz(z,'view',['bindtap',5,'class',1,'data-event-opts',2],[],fUF,oTF,gg)
var cYF=_n('view')
_rz(z,cYF,'class',8,fUF,oTF,gg)
var oZF=_n('view')
_rz(z,oZF,'class',9,fUF,oTF,gg)
var l1F=_oz(z,10,fUF,oTF,gg)
_(oZF,l1F)
_(cYF,oZF)
var a2F=_n('view')
_rz(z,a2F,'class',11,fUF,oTF,gg)
var t3F=_oz(z,12,fUF,oTF,gg)
_(a2F,t3F)
_(cYF,a2F)
var e4F=_n('view')
_rz(z,e4F,'class',13,fUF,oTF,gg)
var b5F=_oz(z,14,fUF,oTF,gg)
_(e4F,b5F)
_(cYF,e4F)
var o6F=_n('view')
_rz(z,o6F,'class',15,fUF,oTF,gg)
var x7F=_oz(z,16,fUF,oTF,gg)
_(o6F,x7F)
_(cYF,o6F)
_(oXF,cYF)
var o8F=_mz(z,'image',['class',17,'src',1],[],fUF,oTF,gg)
_(oXF,o8F)
_(cVF,oXF)
return cVF
}
oRF.wxXCkey=2
_2z(z,4,xSF,e,s,gg,oRF,'item','index','')
_(ePF,bQF)
_(r,ePF)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],["wx-uni-page-head .",[1],"uni-page-head{ }\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/book/book.wxss']=setCssToHead([".",[1],"book-item-container { margin-top: ",[0,30],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; position: relative; -webkit-box-shadow: 2px 2px 3px #e3e3e3; box-shadow: 2px 2px 3px #e3e3e3; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; width: ",[0,240],"; height: ",[0,360],"; }\n.",[1],"book-item-container wx-image { width: 100%; height: 100%; border-radius: 2px; }\n.",[1],"description { width: ",[0,216],"; position: absolute; bottom: 0; background-color: #fff; padding: ",[0,5]," ",[0,10]," ",[0,8]," ",[0,15],"; font-size: ",[0,24],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; border-bottom-right-radius: 2px; border-bottom-left-radius: 2px; }\n.",[1],"title { margin-top: ",[0,10],"; -o-text-overflow: ellipsis; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; }\n.",[1],"author { font-size: ",[0,20],"; color: #999999; margin-bottom: ",[0,10],"; -o-text-overflow: ellipsis; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; }\n.",[1],"foot { font-size: ",[0,20],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; }\n.",[1],"footer { color: #666666; }\n",],undefined,{path:"./components/book/book.wxss"});    
__wxAppCode__['components/book/book.wxml']=$gwx('./components/book/book.wxml');

__wxAppCode__['components/like/like.wxss']=setCssToHead([".",[1],"like-container { display: -webkit-inline-box; display: -webkit-inline-flex; display: -ms-inline-flexbox; display: inline-flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; padding: ",[0,10],"; }\n.",[1],"like-container wx-image { width: ",[0,32],"; height: ",[0,28],"; }\n.",[1],"like-container wx-text { font-size: ",[0,24],"; line-height: ",[0,24],"; color: #bbbbbb; position: relative; bottom: ",[0,10],"; left: ",[0,6],"; }\n",],undefined,{path:"./components/like/like.wxss"});    
__wxAppCode__['components/like/like.wxml']=$gwx('./components/like/like.wxml');

__wxAppCode__['components/preview/preview.wxss']=setCssToHead([".",[1],"preview-item-container { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; width: ",[0,330],"; background-color: #ffffff; }\n.",[1],"head { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; width: 100%; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; height: ",[0,80],"; }\n.",[1],"tag { margin-left: ",[0,20],"; margin-top: ",[0,-2],"; height: ",[0,40],"; width: ",[0,72],"; font-size: ",[0,24],"; background-color: #f7f7f7 !important; }\n.",[1],"like { margin-top: ",[0,4],"; margin-right: ",[0,4],"; }\n.",[1],"other-img { width: 100%; height: ",[0,240],"; }\n.",[1],"music-img { border-radius: 50%; width: ",[0,240],"; height: ",[0,240],"; }\n.",[1],"text { padding: ",[0,30],"; font-size: ",[0,28],"; height: ",[0,130],"; color: #666666; overflow: hidden; }\n",],undefined,{path:"./components/preview/preview.wxss"});    
__wxAppCode__['components/preview/preview.wxml']=$gwx('./components/preview/preview.wxml');

__wxAppCode__['components/tag/tag.wxss']=setCssToHead([".",[1],"tag-container { padding: ",[0,4]," ",[0,12],"; background-color: #f5f5f5; color: #666666; border-radius: 2px; display: -webkit-inline-box; display: -webkit-inline-flex; display: -ms-inline-flexbox; display: inline-flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; font-size: ",[0,28],"; }\n",],undefined,{path:"./components/tag/tag.wxss"});    
__wxAppCode__['components/tag/tag.wxml']=$gwx('./components/tag/tag.wxml');

__wxAppCode__['pages/about/about.wxss']=setCssToHead([".",[1],"my-container { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"bg { width: ",[0,750],"; height: ",[0,574],"; }\n.",[1],"avatar-position { position: absolute; top: ",[0,255],"; left: 50%; -webkit-transform: translateX(-50%); -ms-transform: translateX(-50%); transform: translateX(-50%); }\n.",[1],"my-img { width: ",[0,120],"; height: ",[0,120],"; }\n.",[1],"avatar-container { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"avatar { width: ",[0,120],"; height: ",[0,120],"; overflow: hidden; border-radius: 50%; }\n.",[1],"about-container { padding: 0 ",[0,100],"; width: ",[0,550],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; position: absolute; top: ",[0,440],"; }\n.",[1],"about-us wx-image { width: ",[0,34],"; height: ",[0,34],"; }\n.",[1],"preview-container { margin-top: ",[0,30],"; width: ",[0,690],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; padding: 0 ",[0,30],"; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"preview { margin-bottom: ",[0,30],"; }\n.",[1],"about-us { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"book-num { font-size: ",[0,36],"; color: #000000; }\n.",[1],"description { font-size: ",[0,24],"; color: #999999; }\n.",[1],"about-container\x3ewx-view:nth-child(2) { margin-top: ",[0,-5],"; }\n.",[1],"my-content{ width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; padding-bottom: 50px; }\n.",[1],"my-item{ padding: 0 ",[0,30],"; }\n.",[1],"label{ color: #000; font-size: 17px; line-height: 45px; font-weight: 700; border-bottom: 1px solid #ebebeb; margin-bottom: 10px; }\n.",[1],"to-do-item{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; font-size: 14px; color: #333; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; margin: ",[0,20]," 0; }\n.",[1],"status{ background: #ff9900; height: 24px; font-size: 12px; line-height: 24px; border-radius: 3px; padding: 0 10px; color: #fff; margin-left: ",[0,20],"; }\n.",[1],"tag-list{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"tag-list .",[1],"tag{ border: 1px solid #19be6b; padding: ",[0,10]," ",[0,30],"; font-size: 12px; color: #1a1a1a; line-height: 20px; margin-right: ",[0,30],"; border-radius: 4px; }\n",],undefined,{path:"./pages/about/about.wxss"});    
__wxAppCode__['pages/about/about.wxml']=$gwx('./pages/about/about.wxml');

__wxAppCode__['pages/alarm/alarm.wxss']=undefined;    
__wxAppCode__['pages/alarm/alarm.wxml']=$gwx('./pages/alarm/alarm.wxml');

__wxAppCode__['pages/book/book.wxss']=setCssToHead([".",[1],"book-container { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; width: 100%; }\n.",[1],"sub-container { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; background-color: #f5f5f5; margin-top: ",[0,100],"; width: 100%; padding-bottom: 20px; }\n.",[1],"box { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; border-radius: 50px; background-color: #f5f5f5; height: ",[0,68],"; width: ",[0,700],"; color: #999999; }\n.",[1],"header { position: fixed; background-color: #ffffff; height: ",[0,100],"; width: 100%; border-top: 1px solid #f5f5f5; border-bottom: 1px solid #f5f5f5; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-shadow: 0 0 3px 0 #e3e3e3; box-shadow: 0 0 3px 0 #e3e3e3; z-index: 99; }\n.",[1],"head-img { width: ",[0,106],"; height: ",[0,34],"; margin-top: ",[0,40],"; }\n.",[1],"box wx-image { margin-right: 10px; width: 14px; height: 14px; margin-bottom: -2px; }\n.",[1],"books-container { margin-top: ",[0,10],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; padding: 0 ",[0,90],"; }\n.",[1],"books-container wx-v-book { margin-bottom: ",[0,10],"; }\n",],undefined,{path:"./pages/book/book.wxss"});    
__wxAppCode__['pages/book/book.wxml']=$gwx('./pages/book/book.wxml');

__wxAppCode__['pages/login/login.wxss']=setCssToHead([".",[1],"login-wrapper { width: 100%; min-height: 100vh; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"login-head { background: #0084ff; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; width: 100%; color: #fff; font-size: 16px; height: 150px; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"login-wrapper .",[1],"logo { width: ",[0,280],"; height: ",[0,56],"; margin-bottom: 20px; }\n.",[1],"login-form { width: 100%; padding: 16px; -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"form-item { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; margin-bottom: ",[0,30],"; }\n.",[1],"form-item .",[1],"title { text-align: right; width: ",[0,180],"; color: #17233d; }\n.",[1],"form-item-input { background: #fff; width: 100%; height: 48px; padding-left: ",[0,10],"; border-bottom: ",[0,1]," solid #ebebeb; color: #1a1a1a; line-height: 24px; font-size: 14px; font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei, sans-serif; }\n.",[1],"input-placeholder { color: #8590a6; }\n.",[1],"login-btn { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; margin-top: ",[0,30],"; }\n.",[1],"login-button { width: 100%; margin: 0 ",[0,10],"; color: #fff; background: #0084ff; height: 40px; border-radius: 3px; font-size: 16px; font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei, sans-serif; }\n.",[1],"tip { line-height: 1.5; margin: 0 auto; margin-top: 20px; text-align: center; color: #8590a6; font-size: 12px; }\n",],undefined,{path:"./pages/login/login.wxss"});    
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/my/my.wxss']=setCssToHead([".",[1],"my-container { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"bg { width: ",[0,750],"; height: ",[0,574],"; }\n.",[1],"avatar-position { position: absolute; top: ",[0,255],"; }\n.",[1],"my-img { width: ",[0,120],"; height: ",[0,120],"; }\n.",[1],"avatar-container { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"avatar { width: ",[0,120],"; height: ",[0,120],"; overflow: hidden; border-radius: 50%; }\n.",[1],"about-container { padding: 0 ",[0,100],"; width: ",[0,550],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; position: absolute; top: ",[0,440],"; }\n.",[1],"about-us wx-image { width: ",[0,34],"; height: ",[0,34],"; }\n.",[1],"preview-container { margin-top: ",[0,30],"; width: ",[0,690],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; padding: 0 ",[0,30],"; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"preview { margin-bottom: ",[0,30],"; }\n.",[1],"about-us { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"book-num { font-size: ",[0,36],"; color: #000000; }\n.",[1],"description { font-size: ",[0,24],"; color: #999999; }\n.",[1],"about-container\x3ewx-view:nth-child(2) { margin-top: ",[0,-5],"; }\n.",[1],"like-container { margin-top: ",[0,-13],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; background-color: #f5f5f5; }\n.",[1],"headline { margin-top: ",[0,30],"; width: ",[0,97],"; height: ",[0,42],"; }\n.",[1],"study { width: ",[0,88],"; height: ",[0,88],"; position: absolute; top: ",[0,40],"; right: ",[0,45],"; }\n",],undefined,{path:"./pages/my/my.wxss"});    
__wxAppCode__['pages/my/my.wxml']=$gwx('./pages/my/my.wxml');

__wxAppCode__['pages/report/report.wxss']=setCssToHead(["body { background: #f2f2f2; width: ",[0,750],"; overflow-x: hidden; }\n.",[1],"report-wrapper { }\n.",[1],"qiun-padding { padding: 2%; width: 96%; }\n.",[1],"qiun-wrap { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"qiun-rows { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal !important; -webkit-box-direction: normal !important; -webkit-flex-direction: row !important; -ms-flex-direction: row !important; flex-direction: row !important; }\n.",[1],"qiun-columns { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical !important; -webkit-box-direction: normal !important; -webkit-flex-direction: column !important; -ms-flex-direction: column !important; flex-direction: column !important; margin-bottom: ",[0,10],"; }\n.",[1],"qiun-common-mt { margin-top: ",[0,10],"; }\n.",[1],"qiun-bg-white { background: #ffffff; }\n.",[1],"qiun-title-bar { width: 96%; padding: ",[0,10]," 2%; -webkit-flex-wrap: nowrap; -ms-flex-wrap: nowrap; flex-wrap: nowrap; }\n.",[1],"qiun-title-dot-light { border-left: ",[0,10]," solid #0ea391; padding-left: ",[0,10],"; font-size: ",[0,32],"; color: #000000; }\n.",[1],"qiun-charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #ffffff; }\n.",[1],"charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #ffffff; }\n",],undefined,{path:"./pages/report/report.wxss"});    
__wxAppCode__['pages/report/report.wxml']=$gwx('./pages/report/report.wxml');

__wxAppCode__['pages/work-detail/work-detail.wxss']=setCssToHead([".",[1],"detail.",[1],"data-v-f699f716{ padding: ",[0,30],"; }\n.",[1],"detail-item.",[1],"data-v-f699f716{ color: #515a6e; font-size: 14px; line-height: 30px; margin-bottom: ",[0,30],"; }\n.",[1],"button.",[1],"data-v-f699f716{ position: absolute; bottom: 50px; left: 50%; -webkit-transform: translateX(-50%); -ms-transform: translateX(-50%); transform: translateX(-50%); width: 80%; text-align: center; line-height: 40px; margin: 0 ",[0,10],"; color: #fff; background: #19be6b; height: 40px; border-radius: 3px; font-size: 16px; font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif; }\n",],undefined,{path:"./pages/work-detail/work-detail.wxss"});    
__wxAppCode__['pages/work-detail/work-detail.wxml']=$gwx('./pages/work-detail/work-detail.wxml');

__wxAppCode__['pages/work-sheet/work-sheet.wxss']=setCssToHead([".",[1],"work-wrapper.",[1],"data-v-54c9ee79{ padding: ",[0,20],"; }\n.",[1],"current-title.",[1],"data-v-54c9ee79{ color: #2db7f5; }\n.",[1],"work-list.",[1],"data-v-54c9ee79{ padding-left: ",[0,10],"; }\n.",[1],"work-title.",[1],"data-v-54c9ee79{ font-size: 16px; color: #000; }\n.",[1],"work-item.",[1],"data-v-54c9ee79{ color: #dcdee2; font-size: 14px; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"item.",[1],"data-v-54c9ee79{ font-size: 14px; margin-bottom: ",[0,20],"; line-height: 20px; }\n.",[1],"item-time.",[1],"data-v-54c9ee79{ color: #2db7f5; margin-top: ",[0,10],"; }\n.",[1],"work-item wx-image.",[1],"data-v-54c9ee79{ width: ",[0,300],"; height: ",[0,200],"; }\n",],undefined,{path:"./pages/work-sheet/work-sheet.wxss"});    
__wxAppCode__['pages/work-sheet/work-sheet.wxml']=$gwx('./pages/work-sheet/work-sheet.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();

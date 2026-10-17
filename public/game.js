(()=>{var Rf=0,Mh=1,Cf=2;var Eo=1,pl=2,mr=3,Ji=0,sn=1,$e=2,di=0,Ki=1,Ai=2,Sh=3,bh=4,If=5;var _s=100,Pf=101,Lf=102,Df=103,Nf=104,Uf=200,zf=201,Ff=202,Of=203,Eh=204,wh=205,Bf=206,Hf=207,kf=208,Gf=209,Vf=210,Wf=211,Xf=212,Yf=213,qf=214,La=0,Da=1,Na=2,Ks=3,Ua=4,za=5,Fa=6,Oa=7,ml=0,Zf=1,$f=2,jn=0,Th=1,Ah=2,Rh=3,gr=4,Ch=5,Ih=6,Ph=7;var Lh=300,ji=301,vs=302,gl=303,xl=304,wo=306,js=1e3,li=1001,Ba=1002,ln=1003,Jf=1004;var To=1005;var un=1006,yl=1007;var Qi=1008;var An=1009,Dh=1010,Nh=1011,xr=1012,_l=1013,Qn=1014,Bn=1015,ti=1016,vl=1017,Ml=1018,yr=1020,Uh=35902,zh=35899,Fh=1021,Oh=1022,Hn=1023,hi=1026,ts=1027,Sl=1028,bl=1029,es=1030,El=1031;var wl=1033,Ao=33776,Ro=33777,Co=33778,Io=33779,Tl=35840,Al=35841,Rl=35842,Cl=35843,Il=36196,Pl=37492,Ll=37496,Dl=37488,Nl=37489,Po=37490,Ul=37491,zl=37808,Fl=37809,Ol=37810,Bl=37811,Hl=37812,kl=37813,Gl=37814,Vl=37815,Wl=37816,Xl=37817,Yl=37818,ql=37819,Zl=37820,$l=37821,Jl=36492,Kl=36494,jl=36495,Ql=36283,tc=36284,Lo=36285,ec=36286;var Yr=2300,Ha=2301,Ia=2302,lh=2303,ch=2400,hh=2401,uh=2402;var Kf=3200;var Do=0,jf=1,Ri="",Ne="srgb",qr="srgb-linear",Zr="linear",we="srgb";var Pa=7680;var Qf=519,td=512,ed=513,nd=514,nc=515,id=516,sd=517,ic=518,rd=519,Bh=35044,_r=35048;var Hh="300 es",Jn=2e3,Qs=2001;function c0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function h0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function $r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function od(){let i=$r("canvas");return i.style.display="block",i}var qu={},tr=null;function Jr(...i){let t="THREE."+i.shift();tr?tr("log",t,...i):console.log(t,...i)}function ad(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Qt(...i){i=ad(i);let t="THREE."+i.shift();if(tr)tr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ee(...i){i=ad(i);let t="THREE."+i.shift();if(tr)tr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ps(...i){let t=i.join(" ");t in qu||(qu[t]=!0,Qt(...i))}function ld(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var cd={[La]:Da,[Na]:Fa,[Ua]:Oa,[Ks]:za,[Da]:La,[Fa]:Na,[Oa]:Ua,[za]:Ks},ui=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zu=1234567,Gr=Math.PI/180,er=180/Math.PI;function ci(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]+"-"+dn[t&255]+dn[t>>8&255]+"-"+dn[t>>16&15|64]+dn[t>>24&255]+"-"+dn[e&63|128]+dn[e>>8&255]+"-"+dn[e>>16&255]+dn[e>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function fe(i,t,e){return Math.max(t,Math.min(e,i))}function kh(i,t){return(i%t+t)%t}function u0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function f0(i,t,e){return i!==t?(e-i)/(t-i):0}function Vr(i,t,e){return(1-e)*i+e*t}function d0(i,t,e,n){return Vr(i,t,1-Math.exp(-e*n))}function p0(i,t=1){return t-Math.abs(kh(i,t*2)-t)}function m0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function g0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function x0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function y0(i,t){return i+Math.random()*(t-i)}function _0(i){return i*(.5-Math.random())}function v0(i){i!==void 0&&(Zu=i);let t=Zu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function M0(i){return i*Gr}function S0(i){return i*er}function b0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function E0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function w0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function T0(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),p=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*p,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*p,a*c);break;case"ZYZ":i.set(l*p,l*d,a*u,a*c);break;default:Qt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $n(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Re(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var No={DEG2RAD:Gr,RAD2DEG:er,generateUUID:ci,clamp:fe,euclideanModulo:kh,mapLinear:u0,inverseLerp:f0,lerp:Vr,damp:d0,pingpong:p0,smoothstep:m0,smootherstep:g0,randInt:x0,randFloat:y0,randFloatSpread:_0,seededRandom:v0,degToRad:M0,radToDeg:S0,isPowerOfTwo:b0,ceilPowerOfTwo:E0,floorPowerOfTwo:w0,setQuaternionFromProperEuler:T0,normalize:Re,denormalize:$n},qh=class qh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};qh.prototype.isVector2=!0;var xt=qh,Pn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],f=r[o+0],d=r[o+1],p=r[o+2],y=r[o+3];if(h!==y||l!==f||c!==d||u!==p){let m=l*f+c*d+u*p+h*y;m<0&&(f=-f,d=-d,p=-p,y=-y,m=-m);let x=1-a;if(m<.9995){let S=Math.acos(m),w=Math.sin(S);x=Math.sin(x*S)/w,a=Math.sin(a*S)/w,l=l*x+f*a,c=c*x+d*a,u=u*x+p*a,h=h*x+y*a}else{l=l*x+f*a,c=c*x+d*a,u=u*x+p*a,h=h*x+y*a;let S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return t[e]=a*p+u*h+l*d-c*f,t[e+1]=l*p+u*f+c*h-a*d,t[e+2]=c*p+u*d+a*f-l*h,t[e+3]=u*p-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),f=l(n/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"YZX":this._x=f*u*h+c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h-f*d*p;break;case"XZY":this._x=f*u*h-c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h+f*d*p;break;default:Qt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Zh=class Zh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($u.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($u.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Fc.copy(this).projectOnVector(t),this.sub(Fc)}reflect(t){return this.sub(Fc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Zh.prototype.isVector3=!0;var z=Zh,Fc=new z,$u=new Pn,$h=class $h{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],p=n[8],y=s[0],m=s[3],x=s[6],S=s[1],w=s[4],g=s[7],M=s[2],v=s[5],T=s[8];return r[0]=o*y+a*S+l*M,r[3]=o*m+a*w+l*v,r[6]=o*x+a*g+l*T,r[1]=c*y+u*S+h*M,r[4]=c*m+u*w+h*v,r[7]=c*x+u*g+h*T,r[2]=f*y+d*S+p*M,r[5]=f*m+d*w+p*v,r[8]=f*x+d*g+p*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,p=e*h+n*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return t[0]=h*y,t[1]=(s*c-u*n)*y,t[2]=(a*n-s*o)*y,t[3]=f*y,t[4]=(u*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=d*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return ps("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Oc.makeScale(t,e)),this}rotate(t){return ps("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Oc.makeRotation(-t)),this}translate(t,e){return ps("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Oc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};$h.prototype.isMatrix3=!0;var re=$h,Oc=new re,Ju=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ku=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function A0(){let i={enabled:!0,workingColorSpace:qr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===we&&(s.r=Ei(s.r),s.g=Ei(s.g),s.b=Ei(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===we&&(s.r=Js(s.r),s.g=Js(s.g),s.b=Js(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ri?Zr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ps("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ps("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[qr]:{primaries:t,whitePoint:n,transfer:Zr,toXYZ:Ju,fromXYZ:Ku,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:t,whitePoint:n,transfer:we,toXYZ:Ju,fromXYZ:Ku,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),i}var me=A0();function Ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Js(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ls,ka=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ls===void 0&&(Ls=$r("canvas")),Ls.width=t.width,Ls.height=t.height;let s=Ls.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ls}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=$r("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ei(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ei(e[n]/255)*255):e[n]=Ei(e[n]);return{data:e,width:t.width,height:t.height}}else return Qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},R0=0,nr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=ci(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Bc(s[o].image)):r.push(Bc(s[o]))}else r=Bc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Bc(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?ka.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Qt("Texture: Unable to serialize Texture."),{})}var C0=0,Hc=new z,Sn=class i extends ui{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=li,s=li,r=un,o=Qi,a=Hn,l=An,c=i.DEFAULT_ANISOTROPY,u=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=ci(),this.name="",this.source=new nr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Hc).x}get height(){return this.source.getSize(Hc).y}get depth(){return this.source.getSize(Hc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Qt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case js:t.x=t.x-Math.floor(t.x);break;case li:t.x=t.x<0?0:1;break;case Ba:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case js:t.y=t.y-Math.floor(t.y);break;case li:t.y=t.y<0?0:1;break;case Ba:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=Lh;Sn.DEFAULT_ANISOTROPY=1;var Jh=class Jh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],p=l[9],y=l[2],m=l[6],x=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-y)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+y)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,g=(d+1)/2,M=(x+1)/2,v=(u+f)/4,T=(h+y)/4,_=(p+m)/4;return w>g&&w>M?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=v/n,r=T/n):g>M?g<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),n=v/s,r=_/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=T/r,s=_/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-p)*(m-p)+(h-y)*(h-y)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-p)/S,this.y=(h-y)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+x-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this.w=fe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this.w=fe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Jh.prototype.isVector4=!0;var Oe=Jh,Ga=class extends ui{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Oe(0,0,t,e),this.scissorTest=!1,this.viewport=new Oe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Sn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new nr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tn=class extends Ga{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Kr=class extends Sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Va=class extends Sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var dl=class dl{constructor(t,e,n,s,r,o,a,l,c,u,h,f,d,p,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,h,f,d,p,y,m)}set(t,e,n,s,r,o,a,l,c,u,h,f,d,p,y,m){let x=this.elements;return x[0]=t,x[4]=e,x[8]=n,x[12]=s,x[1]=r,x[5]=o,x[9]=a,x[13]=l,x[2]=c,x[6]=u,x[10]=h,x[14]=f,x[3]=d,x[7]=p,x[11]=y,x[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ds.setFromMatrixColumn(t,0).length(),r=1/Ds.setFromMatrixColumn(t,1).length(),o=1/Ds.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=o*u,d=o*h,p=a*u,y=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+p*c,e[5]=f-y*c,e[9]=-a*l,e[2]=y-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*u,d=l*h,p=c*u,y=c*h;e[0]=f+y*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-p,e[6]=y+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*u,d=l*h,p=c*u,y=c*h;e[0]=f-y*a,e[4]=-o*h,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*u,e[9]=y-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*u,d=o*h,p=a*u,y=a*h;e[0]=l*u,e[4]=p*c-d,e[8]=f*c+y,e[1]=l*h,e[5]=y*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,p=a*l,y=a*c;e[0]=l*u,e[4]=y-f*h,e[8]=p*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+p,e[10]=f-y*h}else if(t.order==="XZY"){let f=o*l,d=o*c,p=a*l,y=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+y,e[5]=o*u,e[9]=d*h-p,e[2]=p*h-d,e[6]=a*u,e[10]=y*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(I0,t,P0)}lookAt(t,e,n){let s=this.elements;return Cn.subVectors(t,e),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Oi.crossVectors(n,Cn),Oi.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Oi.crossVectors(n,Cn)),Oi.normalize(),ia.crossVectors(Cn,Oi),s[0]=Oi.x,s[4]=ia.x,s[8]=Cn.x,s[1]=Oi.y,s[5]=ia.y,s[9]=Cn.y,s[2]=Oi.z,s[6]=ia.z,s[10]=Cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],p=n[2],y=n[6],m=n[10],x=n[14],S=n[3],w=n[7],g=n[11],M=n[15],v=s[0],T=s[4],_=s[8],b=s[12],A=s[1],I=s[5],D=s[9],N=s[13],C=s[2],P=s[6],F=s[10],O=s[14],j=s[3],V=s[7],$=s[11],Z=s[15];return r[0]=o*v+a*A+l*C+c*j,r[4]=o*T+a*I+l*P+c*V,r[8]=o*_+a*D+l*F+c*$,r[12]=o*b+a*N+l*O+c*Z,r[1]=u*v+h*A+f*C+d*j,r[5]=u*T+h*I+f*P+d*V,r[9]=u*_+h*D+f*F+d*$,r[13]=u*b+h*N+f*O+d*Z,r[2]=p*v+y*A+m*C+x*j,r[6]=p*T+y*I+m*P+x*V,r[10]=p*_+y*D+m*F+x*$,r[14]=p*b+y*N+m*O+x*Z,r[3]=S*v+w*A+g*C+M*j,r[7]=S*T+w*I+g*P+M*V,r[11]=S*_+w*D+g*F+M*$,r[15]=S*b+w*N+g*O+M*Z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],p=t[3],y=t[7],m=t[11],x=t[15],S=l*d-c*f,w=a*d-c*h,g=a*f-l*h,M=o*d-c*u,v=o*f-l*u,T=o*h-a*u;return e*(y*S-m*w+x*g)-n*(p*S-m*M+x*v)+s*(p*w-y*M+x*T)-r*(p*g-y*v+m*T)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-n*(r*u-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],p=t[12],y=t[13],m=t[14],x=t[15],S=e*a-n*o,w=e*l-s*o,g=e*c-r*o,M=n*l-s*a,v=n*c-r*a,T=s*c-r*l,_=u*y-h*p,b=u*m-f*p,A=u*x-d*p,I=h*m-f*y,D=h*x-d*y,N=f*x-d*m,C=S*N-w*D+g*I+M*A-v*b+T*_;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/C;return t[0]=(a*N-l*D+c*I)*P,t[1]=(s*D-n*N-r*I)*P,t[2]=(y*T-m*v+x*M)*P,t[3]=(f*v-h*T-d*M)*P,t[4]=(l*A-o*N-c*b)*P,t[5]=(e*N-s*A+r*b)*P,t[6]=(m*g-p*T-x*w)*P,t[7]=(u*T-f*g+d*w)*P,t[8]=(o*D-a*A+c*_)*P,t[9]=(n*A-e*D-r*_)*P,t[10]=(p*v-y*g+x*S)*P,t[11]=(h*g-u*v-d*S)*P,t[12]=(a*b-o*I-l*_)*P,t[13]=(e*I-n*b+s*_)*P,t[14]=(y*w-p*M-m*S)*P,t[15]=(u*M-h*w+f*S)*P,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,p=r*h,y=o*u,m=o*h,x=a*h,S=l*c,w=l*u,g=l*h,M=n.x,v=n.y,T=n.z;return s[0]=(1-(y+x))*M,s[1]=(d+g)*M,s[2]=(p-w)*M,s[3]=0,s[4]=(d-g)*v,s[5]=(1-(f+x))*v,s[6]=(m+S)*v,s[7]=0,s[8]=(p+w)*T,s[9]=(m-S)*T,s[10]=(1-(f+y))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Ds.set(s[0],s[1],s[2]).length(),a=Ds.set(s[4],s[5],s[6]).length(),l=Ds.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Xn.copy(this);let c=1/o,u=1/a,h=1/l;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=u,Xn.elements[5]*=u,Xn.elements[6]*=u,Xn.elements[8]*=h,Xn.elements[9]*=h,Xn.elements[10]*=h,e.setFromRotationMatrix(Xn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Jn,l=!1){let c=this.elements,u=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),p,y;if(l)p=r/(o-r),y=o*r/(o-r);else if(a===Jn)p=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Qs)p=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Jn,l=!1){let c=this.elements,u=2/(e-t),h=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),p,y;if(l)p=1/(o-r),y=o/(o-r);else if(a===Jn)p=-2/(o-r),y=-(o+r)/(o-r);else if(a===Qs)p=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};dl.prototype.isMatrix4=!0;var Se=dl,Ds=new z,Xn=new Se,I0=new z(0,0,0),P0=new z(1,1,1),Oi=new z,ia=new z,Cn=new z,ju=new Se,Qu=new Pn,Ln=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(fe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-fe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ju.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ju,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qu.setFromEuler(this),this.setFromQuaternion(Qu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ln.DEFAULT_ORDER="XYZ";var jr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},L0=0,tf=new z,Ns=new Pn,yi=new Se,sa=new z,Lr=new z,D0=new z,N0=new Pn,ef=new z(1,0,0),nf=new z(0,1,0),sf=new z(0,0,1),rf={type:"added"},U0={type:"removed"},Us={type:"childadded",child:null},kc={type:"childremoved",child:null},Qe=class i extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new z,e=new Ln,n=new Pn,s=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new re}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ns.setFromAxisAngle(t,e),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(t,e){return Ns.setFromAxisAngle(t,e),this.quaternion.premultiply(Ns),this}rotateX(t){return this.rotateOnAxis(ef,t)}rotateY(t){return this.rotateOnAxis(nf,t)}rotateZ(t){return this.rotateOnAxis(sf,t)}translateOnAxis(t,e){return tf.copy(t).applyQuaternion(this.quaternion),this.position.add(tf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ef,t)}translateY(t){return this.translateOnAxis(nf,t)}translateZ(t){return this.translateOnAxis(sf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?sa.copy(t):sa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(Lr,sa,this.up):yi.lookAt(sa,Lr,this.up),this.quaternion.setFromRotationMatrix(yi),s&&(yi.extractRotation(s.matrixWorld),Ns.setFromRotationMatrix(yi),this.quaternion.premultiply(Ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rf),Us.child=t,this.dispatchEvent(Us),Us.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(U0),kc.child=t,this.dispatchEvent(kc),kc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yi.multiply(t.parent.matrixWorld)),t.applyMatrix4(yi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rf),Us.child=t,this.dispatchEvent(Us),Us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,t,D0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,N0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Qe.DEFAULT_UP=new z(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dt=class extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}},z0={type:"move"},ir=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),x=this._getHandJoint(c,y);m!==null&&(x.matrix.fromArray(m.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=m.radius),x.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(z0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Dt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},ra={h:0,s:0,l:0};function Gc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ot=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=me.workingColorSpace){if(t=kh(t,1),e=fe(e,0,1),n=fe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Gc(o,r,t+1/3),this.g=Gc(o,r,t),this.b=Gc(o,r,t-1/3)}return me.colorSpaceToWorking(this,s),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&Qt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Qt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){let n=hd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ei(t.r),this.g=Ei(t.g),this.b=Ei(t.b),this}copyLinearToSRGB(t){return this.r=Js(t.r),this.g=Js(t.g),this.b=Js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return me.workingToColorSpace(pn.copy(this),t),Math.round(fe(pn.r*255,0,255))*65536+Math.round(fe(pn.g*255,0,255))*256+Math.round(fe(pn.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.workingToColorSpace(pn.copy(this),e);let n=pn.r,s=pn.g,r=pn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=me.workingColorSpace){return me.workingToColorSpace(pn.copy(this),e),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=Ne){me.workingToColorSpace(pn.copy(this),t);let e=pn.r,n=pn.g,s=pn.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Bi),this.setHSL(Bi.h+t,Bi.s+e,Bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bi),t.getHSL(ra);let n=Vr(Bi.h,ra.h,e),s=Vr(Bi.s,ra.s,e),r=Vr(Bi.l,ra.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new Ot;Ot.NAMES=hd;var sr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},wi=class extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Yn=new z,_i=new z,Vc=new z,vi=new z,zs=new z,Fs=new z,of=new z,Wc=new z,Xc=new z,Yc=new z,qc=new Oe,Zc=new Oe,$c=new Oe,bi=class i{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Yn.subVectors(t,e),s.cross(Yn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Yn.subVectors(s,e),_i.subVectors(n,e),Vc.subVectors(t,e);let o=Yn.dot(Yn),a=Yn.dot(_i),l=Yn.dot(Vc),c=_i.dot(_i),u=_i.dot(Vc),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,p=(o*u-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vi.x),l.addScaledVector(o,vi.y),l.addScaledVector(a,vi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return qc.setScalar(0),Zc.setScalar(0),$c.setScalar(0),qc.fromBufferAttribute(t,e),Zc.fromBufferAttribute(t,n),$c.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(qc,r.x),o.addScaledVector(Zc,r.y),o.addScaledVector($c,r.z),o}static isFrontFacing(t,e,n,s){return Yn.subVectors(n,e),_i.subVectors(t,e),Yn.cross(_i).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Yn.cross(_i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;zs.subVectors(s,n),Fs.subVectors(r,n),Wc.subVectors(t,n);let l=zs.dot(Wc),c=Fs.dot(Wc);if(l<=0&&c<=0)return e.copy(n);Xc.subVectors(t,s);let u=zs.dot(Xc),h=Fs.dot(Xc);if(u>=0&&h<=u)return e.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(zs,o);Yc.subVectors(t,r);let d=zs.dot(Yc),p=Fs.dot(Yc);if(p>=0&&d<=p)return e.copy(r);let y=d*c-l*p;if(y<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Fs,a);let m=u*p-d*h;if(m<=0&&h-u>=0&&d-p>=0)return of.subVectors(r,s),a=(h-u)/(h-u+(d-p)),e.copy(s).addScaledVector(of,a);let x=1/(m+y+f);return o=y*x,a=f*x,e.copy(n).addScaledVector(zs,o).addScaledVector(Fs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},fi=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,qn):qn.fromBufferAttribute(r,o),qn.applyMatrix4(t.matrixWorld),this.expandByPoint(qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),oa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oa.copy(n.boundingBox)),oa.applyMatrix4(t.matrixWorld),this.union(oa)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qn),qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Dr),aa.subVectors(this.max,Dr),Os.subVectors(t.a,Dr),Bs.subVectors(t.b,Dr),Hs.subVectors(t.c,Dr),Hi.subVectors(Bs,Os),ki.subVectors(Hs,Bs),cs.subVectors(Os,Hs);let e=[0,-Hi.z,Hi.y,0,-ki.z,ki.y,0,-cs.z,cs.y,Hi.z,0,-Hi.x,ki.z,0,-ki.x,cs.z,0,-cs.x,-Hi.y,Hi.x,0,-ki.y,ki.x,0,-cs.y,cs.x,0];return!Jc(e,Os,Bs,Hs,aa)||(e=[1,0,0,0,1,0,0,0,1],!Jc(e,Os,Bs,Hs,aa))?!1:(la.crossVectors(Hi,ki),e=[la.x,la.y,la.z],Jc(e,Os,Bs,Hs,aa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Mi=[new z,new z,new z,new z,new z,new z,new z,new z],qn=new z,oa=new fi,Os=new z,Bs=new z,Hs=new z,Hi=new z,ki=new z,cs=new z,Dr=new z,aa=new z,la=new z,hs=new z;function Jc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){hs.fromArray(i,r);let a=s.x*Math.abs(hs.x)+s.y*Math.abs(hs.y)+s.z*Math.abs(hs.z),l=t.dot(hs),c=e.dot(hs),u=n.dot(hs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var je=new z,ca=new xt,F0=0,Fe=class extends ui{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:F0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Bh,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ca.fromBufferAttribute(this,e),ca.applyMatrix3(t),this.setXY(e,ca.x,ca.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix3(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$n(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$n(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$n(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$n(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array),r=Re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Qr=class extends Fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var to=class extends Fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var pe=class extends Fe{constructor(t,e,n){super(new Float32Array(t),e,n)}},O0=new fi,Nr=new z,Kc=new z,Ti=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):O0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Nr.subVectors(t,this.center);let e=Nr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Nr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Nr.copy(t.center).add(Kc)),this.expandByPoint(Nr.copy(t.center).sub(Kc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},B0=0,On=new Se,jc=new Qe,ks=new z,In=new fi,Ur=new fi,an=new z,Pe=class i extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(c0(t)?to:Qr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new re().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return On.makeRotationFromQuaternion(t),this.applyMatrix4(On),this}rotateX(t){return On.makeRotationX(t),this.applyMatrix4(On),this}rotateY(t){return On.makeRotationY(t),this.applyMatrix4(On),this}rotateZ(t){return On.makeRotationZ(t),this.applyMatrix4(On),this}translate(t,e,n){return On.makeTranslation(t,e,n),this.applyMatrix4(On),this}scale(t,e,n){return On.makeScale(t,e,n),this.applyMatrix4(On),this}lookAt(t){return jc.lookAt(t),jc.updateMatrix(),this.applyMatrix4(jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];In.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let n=this.boundingSphere.center;if(In.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ur.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(In.min,Ur.min),In.expandByPoint(an),an.addVectors(In.max,Ur.max),In.expandByPoint(an)):(In.expandByPoint(Ur.min),In.expandByPoint(Ur.max))}In.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)an.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(an));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)an.fromBufferAttribute(a,c),l&&(ks.fromBufferAttribute(t,c),an.add(ks)),s=Math.max(s,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Fe(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new z,l[_]=new z;let c=new z,u=new z,h=new z,f=new xt,d=new xt,p=new xt,y=new z,m=new z;function x(_,b,A){c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,A),f.fromBufferAttribute(r,_),d.fromBufferAttribute(r,b),p.fromBufferAttribute(r,A),u.sub(c),h.sub(c),d.sub(f),p.sub(f);let I=1/(d.x*p.y-p.x*d.y);isFinite(I)&&(y.copy(u).multiplyScalar(p.y).addScaledVector(h,-d.y).multiplyScalar(I),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(I),a[_].add(y),a[b].add(y),a[A].add(y),l[_].add(m),l[b].add(m),l[A].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let _=0,b=S.length;_<b;++_){let A=S[_],I=A.start,D=A.count;for(let N=I,C=I+D;N<C;N+=3)x(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let w=new z,g=new z,M=new z,v=new z;function T(_){M.fromBufferAttribute(s,_),v.copy(M);let b=a[_];w.copy(b),w.sub(M.multiplyScalar(M.dot(b))).normalize(),g.crossVectors(v,b);let I=g.dot(l[_])<0?-1:1;o.setXYZW(_,w.x,w.y,w.z,I)}for(let _=0,b=S.length;_<b;++_){let A=S[_],I=A.start,D=A.count;for(let N=I,C=I+D;N<C;N+=3)T(t.getX(N+0)),T(t.getX(N+1)),T(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,u=new z,h=new z;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),y=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)an.fromBufferAttribute(t,e),an.normalize(),t.setXYZ(e,an.x,an.y,an.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,p=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?d=l[y]*a.data.stride+a.offset:d=l[y]*u;for(let x=0;x<u;x++)f[p++]=c[d++]}return new Fe(f,u,h)}if(this.index===null)return Qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},eo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Bh,this.updateRanges=[],this.version=0,this.uuid=ci()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Mn=new z,rr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.applyMatrix4(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.applyNormalMatrix(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.transformDirection(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=$n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Re(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=$n(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=$n(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=$n(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=$n(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array),r=Re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Jr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Fe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Jr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Qc=new z,H0=new z,k0=new re,Zn=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Qc.subVectors(n,e).cross(H0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Qc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||k0.getNormalMatrix(t),s=this.coplanarPoint(Qc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},G0=0,Kn=class extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=Ki,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eh,this.blendDst=wh,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pa,this.stencilZFail=Pa,this.stencilZPass=Pa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Qt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ot().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Zn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new xt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},or=class extends Kn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Gs,zr=new z,Vs=new z,Ws=new z,Xs=new xt,Fr=new xt,ud=new Se,ha=new z,Or=new z,ua=new z,af=new xt,th=new xt,lf=new xt,no=class extends Qe{constructor(t=new or){if(super(),this.isSprite=!0,this.type="Sprite",Gs===void 0){Gs=new Pe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new eo(e,5);Gs.setIndex([0,1,2,0,2,3]),Gs.setAttribute("position",new rr(n,3,0,!1)),Gs.setAttribute("uv",new rr(n,2,3,!1))}this.geometry=Gs,this.material=t,this.center=new xt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ee('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vs.setFromMatrixScale(this.matrixWorld),ud.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ws.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vs.multiplyScalar(-Ws.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;fa(ha.set(-.5,-.5,0),Ws,o,Vs,s,r),fa(Or.set(.5,-.5,0),Ws,o,Vs,s,r),fa(ua.set(.5,.5,0),Ws,o,Vs,s,r),af.set(0,0),th.set(1,0),lf.set(1,1);let a=t.ray.intersectTriangle(ha,Or,ua,!1,zr);if(a===null&&(fa(Or.set(-.5,.5,0),Ws,o,Vs,s,r),th.set(0,1),a=t.ray.intersectTriangle(ha,ua,Or,!1,zr),a===null))return;let l=t.ray.origin.distanceTo(zr);l<t.near||l>t.far||e.push({distance:l,point:zr.clone(),uv:bi.getInterpolation(zr,ha,Or,ua,af,th,lf,new xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function fa(i,t,e,n,s,r){Xs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Fr.x=r*Xs.x-s*Xs.y,Fr.y=s*Xs.x+r*Xs.y):Fr.copy(Xs),i.copy(t),i.x+=Fr.x,i.y+=Fr.y,i.applyMatrix4(ud)}var Si=new z,eh=new z,da=new z,pa=new z,io=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Si.copy(this.origin).addScaledVector(this.direction,e),Si.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){eh.copy(t).add(e).multiplyScalar(.5),da.copy(e).sub(t).normalize(),pa.copy(this.origin).sub(eh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(da),a=pa.dot(this.direction),l=-pa.dot(da),c=pa.lengthSq(),u=Math.abs(1-o*o),h,f,d,p;if(u>0)if(h=o*l-a,f=o*a-l,p=r*u,h>=0)if(f>=-p)if(f<=p){let y=1/u;h*=y,f*=y,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-p?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=p?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(eh).addScaledVector(da,f),d}intersectSphere(t,e){if(t.radius<0)return null;Si.subVectors(t.center,this.origin);let n=Si.dot(this.direction),s=Si.dot(Si)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Si)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=t.x-o.x,f=t.y-o.y,d=t.z-o.z,p=e.x-o.x,y=e.y-o.y,m=e.z-o.z,x=n.x-o.x,S=n.y-o.y,w=n.z-o.z,g=Math.abs(l),M=Math.abs(c),v=Math.abs(u),T,_,b,A,I,D,N,C,P,F,O,j;if(g>=M&&g>=v?(b=l,D=h,P=p,j=x,l>=0?(T=c,_=u,A=f,I=d,N=y,C=m,F=S,O=w):(T=u,_=c,A=d,I=f,N=m,C=y,F=w,O=S)):M>=v?(b=c,D=f,P=y,j=S,c>=0?(T=u,_=l,A=d,I=h,N=m,C=p,F=w,O=x):(T=l,_=u,A=h,I=d,N=p,C=m,F=x,O=w)):(b=u,D=d,P=m,j=w,u>=0?(T=l,_=c,A=h,I=f,N=p,C=y,F=x,O=S):(T=c,_=l,A=f,I=h,N=y,C=p,F=S,O=x)),b===0)return null;let V=T/b,$=_/b,Z=1/b,at=A-V*D,pt=I-$*D,Jt=N-V*P,kt=C-$*P,Xt=F-V*j,U=O-$*j,k=Xt*kt-U*Jt,rt=at*U-pt*Xt,gt=Jt*pt-kt*at;if(s){if(k<0||rt<0||gt<0)return null}else if((k<0||rt<0||gt<0)&&(k>0||rt>0||gt>0))return null;let ut=k+rt+gt;if(ut===0)return null;let et=Z*(k*D+rt*P+gt*j);return(ut>0?et<0:et>0)?null:this.at(et/ut,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ye=class extends Kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},cf=new Se,us=new io,ma=new Ti,hf=new z,ga=new z,xa=new z,ya=new z,nh=new z,_a=new z,uf=new z,va=new z,tt=class extends Qe{constructor(t=new Pe,e=new ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){_a.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(nh.fromBufferAttribute(h,t),o?_a.addScaledVector(nh,u):_a.addScaledVector(nh.sub(e),u))}e.add(_a)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(r),us.copy(t.ray).recast(t.near),!(ma.containsPoint(us.origin)===!1&&(us.intersectSphere(ma,hf)===null||us.origin.distanceToSquared(hf)>(t.far-t.near)**2))&&(cf.copy(r).invert(),us.copy(t.ray).applyMatrix4(cf),!(n.boundingBox!==null&&us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,us)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,y=f.length;p<y;p++){let m=f[p],x=o[m.materialIndex],S=Math.max(m.start,d.start),w=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let g=S,M=w;g<M;g+=3){let v=a.getX(g),T=a.getX(g+1),_=a.getX(g+2);s=Ma(this,x,t,n,c,u,h,v,T,_),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let m=p,x=y;m<x;m+=3){let S=a.getX(m),w=a.getX(m+1),g=a.getX(m+2);s=Ma(this,o,t,n,c,u,h,S,w,g),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,y=f.length;p<y;p++){let m=f[p],x=o[m.materialIndex],S=Math.max(m.start,d.start),w=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let g=S,M=w;g<M;g+=3){let v=g,T=g+1,_=g+2;s=Ma(this,x,t,n,c,u,h,v,T,_),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let m=p,x=y;m<x;m+=3){let S=m,w=m+1,g=m+2;s=Ma(this,o,t,n,c,u,h,S,w,g),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function V0(i,t,e,n,s,r,o,a){let l;if(t.side===sn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ji,a),l===null)return null;va.copy(a),va.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(va);return c<e.near||c>e.far?null:{distance:c,point:va.clone(),object:i}}function Ma(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ga),i.getVertexPosition(l,xa),i.getVertexPosition(c,ya);let u=V0(i,t,e,n,ga,xa,ya,uf);if(u){let h=new z;bi.getBarycoord(uf,ga,xa,ya,h),s&&(u.uv=bi.getInterpolatedAttribute(s,a,l,c,h,new xt)),r&&(u.uv1=bi.getInterpolatedAttribute(r,a,l,c,h,new xt)),o&&(u.normal=bi.getInterpolatedAttribute(o,a,l,c,h,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new z,materialIndex:0};bi.getNormal(ga,xa,ya,f.normal),u.face=f,u.barycoord=h}return u}var so=class extends Sn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=ln,u=ln,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ar=class extends Fe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ys=new Se,ff=new Se,Sa=[],df=new fi,W0=new Se,Br=new tt,Hr=new Ti,ro=class extends tt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ar(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,W0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new fi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ys),df.copy(t.boundingBox).applyMatrix4(Ys),this.boundingBox.union(df)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ti),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ys),Hr.copy(t.boundingSphere).applyMatrix4(Ys),this.boundingSphere.union(Hr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Br.geometry=this.geometry,Br.material=this.material,Br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hr.copy(this.boundingSphere),Hr.applyMatrix4(n),t.ray.intersectsSphere(Hr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ys),ff.multiplyMatrices(n,Ys),Br.matrixWorld=ff,Br.raycast(t,Sa);for(let o=0,a=Sa.length;o<a;o++){let l=Sa[o];l.instanceId=r,l.object=this,e.push(l)}Sa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ar(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new so(new Float32Array(s*this.count),s,this.count,Sl,Bn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},fs=new Ti,X0=new xt(.5,.5),ba=new z,lr=class{constructor(t=new Zn,e=new Zn,n=new Zn,s=new Zn,r=new Zn,o=new Zn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Jn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],p=r[8],y=r[9],m=r[10],x=r[11],S=r[12],w=r[13],g=r[14],M=r[15];if(s[0].setComponents(c-o,d-u,x-p,M-S).normalize(),s[1].setComponents(c+o,d+u,x+p,M+S).normalize(),s[2].setComponents(c+a,d+h,x+y,M+w).normalize(),s[3].setComponents(c-a,d-h,x-y,M-w).normalize(),n)s[4].setComponents(l,f,m,g).normalize(),s[5].setComponents(c-l,d-f,x-m,M-g).normalize();else if(s[4].setComponents(c-l,d-f,x-m,M-g).normalize(),e===Jn)s[5].setComponents(c+l,d+f,x+m,M+g).normalize();else if(e===Qs)s[5].setComponents(l,f,m,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(t){fs.center.set(0,0,0);let e=X0.distanceTo(t.center);return fs.radius=.7071067811865476+e,fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ba.x=s.normal.x>0?t.max.x:t.min.x,ba.y=s.normal.y>0?t.max.y:t.min.y,ba.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ba)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var cr=class extends Kn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},pf=new Se,fh=new io,Ea=new Ti,wa=new z,hr=class extends Qe{constructor(t=new Pe,e=new cr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(s),Ea.radius+=r,t.ray.intersectsSphere(Ea)===!1)return;pf.copy(s).invert(),fh.copy(t.ray).applyMatrix4(pf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,y=d;p<y;p++){let m=c.getX(p);wa.fromBufferAttribute(h,m),mf(wa,m,l,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let p=f,y=d;p<y;p++)wa.fromBufferAttribute(h,p),mf(wa,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function mf(i,t,e,n,s,r,o){let a=fh.distanceSqToPoint(i);if(a<e){let l=new z;fh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var oo=class extends Sn{constructor(t=[],e=ji,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},bn=class extends Sn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Vi=class extends Sn{constructor(t,e,n=Qn,s,r,o,a=ln,l=ln,c,u=hi,h=1){if(u!==hi&&u!==ts)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new nr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Wa=class extends Vi{constructor(t,e=Qn,n=ji,s,r,o=ln,a=ln,l,c=hi){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ao=class extends Sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ge=class i extends Pe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(u,3)),this.setAttribute("uv",new pe(h,2));function p(y,m,x,S,w,g,M,v,T,_,b){let A=g/T,I=M/_,D=g/2,N=M/2,C=v/2,P=T+1,F=_+1,O=0,j=0,V=new z;for(let $=0;$<F;$++){let Z=$*I-N;for(let at=0;at<P;at++){let pt=at*A-D;V[y]=pt*S,V[m]=Z*w,V[x]=C,c.push(V.x,V.y,V.z),V[y]=0,V[m]=0,V[x]=v>0?1:-1,u.push(V.x,V.y,V.z),h.push(at/T),h.push(1-$/_),O+=1}}for(let $=0;$<_;$++)for(let Z=0;Z<T;Z++){let at=f+Z+P*$,pt=f+Z+P*($+1),Jt=f+(Z+1)+P*($+1),kt=f+(Z+1)+P*$;l.push(at,pt,kt),l.push(pt,Jt,kt),j+=6}a.addGroup(d,j,b),d+=j,f+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Wi=class i extends Pe{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],u=e/2,h=Math.PI/2*t,f=e,d=2*h+f,p=n*2+r,y=s+1,m=new z,x=new z;for(let S=0;S<=p;S++){let w=0,g=0,M=0,v=0;if(S<=n){let b=S/n,A=b*Math.PI/2;g=-u-t*Math.cos(A),M=t*Math.sin(A),v=-t*Math.cos(A),w=b*h}else if(S<=n+r){let b=(S-n)/r;g=-u+b*e,M=t,v=0,w=h+b*f}else{let b=(S-n-r)/n,A=b*Math.PI/2;g=u+t*Math.sin(A),M=t*Math.cos(A),v=t*Math.sin(A),w=h+f+b*h}let T=Math.max(0,Math.min(1,w/d)),_=0;S===0?_=.5/s:S===p&&(_=-.5/s);for(let b=0;b<=s;b++){let A=b/s,I=A*Math.PI*2,D=Math.sin(I),N=Math.cos(I);x.x=-M*N,x.y=g,x.z=M*D,a.push(x.x,x.y,x.z),m.set(-M*N,v,M*D),m.normalize(),l.push(m.x,m.y,m.z),c.push(A+_,T)}if(S>0){let b=(S-1)*y;for(let A=0;A<s;A++){let I=b+A,D=b+A+1,N=S*y+A,C=S*y+A+1;o.push(I,D,N),o.push(D,C,N)}}}this.setIndex(o),this.setAttribute("position",new pe(a,3)),this.setAttribute("normal",new pe(l,3)),this.setAttribute("uv",new pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},ms=class i extends Pe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new z,u=new xt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){let d=n+h/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new pe(o,3)),this.setAttribute("normal",new pe(a,3)),this.setAttribute("uv",new pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Rt=class i extends Pe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],d=[],p=0,y=[],m=n/2,x=0;S(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new pe(h,3)),this.setAttribute("normal",new pe(f,3)),this.setAttribute("uv",new pe(d,2));function S(){let g=new z,M=new z,v=0,T=(e-t)/n;for(let _=0;_<=r;_++){let b=[],A=_/r,I=A*(e-t)+t;for(let D=0;D<=s;D++){let N=D/s,C=N*l+a,P=Math.sin(C),F=Math.cos(C);M.x=I*P,M.y=-A*n+m,M.z=I*F,h.push(M.x,M.y,M.z),g.set(P,T,F).normalize(),f.push(g.x,g.y,g.z),d.push(N,1-A),b.push(p++)}y.push(b)}for(let _=0;_<s;_++)for(let b=0;b<r;b++){let A=y[b][_],I=y[b+1][_],D=y[b+1][_+1],N=y[b][_+1];(t>0||b!==0)&&(u.push(A,I,N),v+=3),(e>0||b!==r-1)&&(u.push(I,D,N),v+=3)}c.addGroup(x,v,0),x+=v}function w(g){let M=p,v=new xt,T=new z,_=0,b=g===!0?t:e,A=g===!0?1:-1;for(let D=1;D<=s;D++)h.push(0,m*A,0),f.push(0,A,0),d.push(.5,.5),p++;let I=p;for(let D=0;D<=s;D++){let C=D/s*l+a,P=Math.cos(C),F=Math.sin(C);T.x=b*F,T.y=m*A,T.z=b*P,h.push(T.x,T.y,T.z),f.push(0,A,0),v.x=P*.5+.5,v.y=F*.5*A+.5,d.push(v.x,v.y),p++}for(let D=0;D<s;D++){let N=M+D,C=I+D;g===!0?u.push(C,C+1,N):u.push(C+1,C,N),_+=3}c.addGroup(x,_,g===!0?1:2),x+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Le=class i extends Rt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Xa=class i extends Pe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new pe(r,3)),this.setAttribute("normal",new pe(r.slice(),3)),this.setAttribute("uv",new pe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let w=new z,g=new z,M=new z;for(let v=0;v<e.length;v+=3)d(e[v+0],w),d(e[v+1],g),d(e[v+2],M),l(w,g,M,S)}function l(S,w,g,M){let v=M+1,T=[];for(let _=0;_<=v;_++){T[_]=[];let b=S.clone().lerp(g,_/v),A=w.clone().lerp(g,_/v),I=v-_;for(let D=0;D<=I;D++)D===0&&_===v?T[_][D]=b:T[_][D]=b.clone().lerp(A,D/I)}for(let _=0;_<v;_++)for(let b=0;b<2*(v-_)-1;b++){let A=Math.floor(b/2);b%2===0?(f(T[_][A+1]),f(T[_+1][A]),f(T[_][A])):(f(T[_][A+1]),f(T[_+1][A+1]),f(T[_+1][A]))}}function c(S){let w=new z;for(let g=0;g<r.length;g+=3)w.x=r[g+0],w.y=r[g+1],w.z=r[g+2],w.normalize().multiplyScalar(S),r[g+0]=w.x,r[g+1]=w.y,r[g+2]=w.z}function u(){let S=new z;for(let w=0;w<r.length;w+=3){S.x=r[w+0],S.y=r[w+1],S.z=r[w+2];let g=m(S)/2/Math.PI+.5,M=x(S)/Math.PI+.5;o.push(g,1-M)}p(),h()}function h(){for(let S=0;S<o.length;S+=6){let w=o[S+0],g=o[S+2],M=o[S+4],v=Math.max(w,g,M),T=Math.min(w,g,M);v>.9&&T<.1&&(w<.2&&(o[S+0]+=1),g<.2&&(o[S+2]+=1),M<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function d(S,w){let g=S*3;w.x=t[g+0],w.y=t[g+1],w.z=t[g+2]}function p(){let S=new z,w=new z,g=new z,M=new z,v=new xt,T=new xt,_=new xt;for(let b=0,A=0;b<r.length;b+=9,A+=6){S.set(r[b+0],r[b+1],r[b+2]),w.set(r[b+3],r[b+4],r[b+5]),g.set(r[b+6],r[b+7],r[b+8]),v.set(o[A+0],o[A+1]),T.set(o[A+2],o[A+3]),_.set(o[A+4],o[A+5]),M.copy(S).add(w).add(g).divideScalar(3);let I=m(M);y(v,A+0,S,I),y(T,A+2,w,I),y(_,A+4,g,I)}}function y(S,w,g,M){M<0&&S.x===1&&(o[w]=S.x-1),g.x===0&&g.z===0&&(o[w]=M/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function x(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},lo=class i extends Xa{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],f=n[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new xt:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new z,s=[],r=[],o=[],a=new z,l=new Se;for(let d=0;d<=t;d++){let p=d/t;s[d]=this.getTangentAt(p,new z)}r[0]=new z,o[0]=new z;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(fe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(fe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ur=class extends Dn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new xt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ya=class extends ur{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Gh(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var gf=new z,xf=new z,ih=new Gh,sh=new Gh,rh=new Gh,qa=class extends Dn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new z){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(xf.subVectors(s[0],s[1]).add(s[0]),c=xf);let h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(gf.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=gf),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(h),d),y=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);y<1e-4&&(y=1),p<1e-4&&(p=y),m<1e-4&&(m=y),ih.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,p,y,m),sh.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,p,y,m),rh.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,p,y,m)}else this.curveType==="catmullrom"&&(ih.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),sh.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),rh.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(ih.calc(l),sh.calc(l),rh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function yf(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Y0(i,t){let e=1-i;return e*e*t}function q0(i,t){return 2*(1-i)*i*t}function Z0(i,t){return i*i*t}function Wr(i,t,e,n){return Y0(i,t)+q0(i,e)+Z0(i,n)}function $0(i,t){let e=1-i;return e*e*e*t}function J0(i,t){let e=1-i;return 3*e*e*i*t}function K0(i,t){return 3*(1-i)*i*i*t}function j0(i,t){return i*i*i*t}function Xr(i,t,e,n,s){return $0(i,t)+J0(i,e)+K0(i,n)+j0(i,s)}var co=class extends Dn{constructor(t=new xt,e=new xt,n=new xt,s=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new xt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Xr(t,s.x,r.x,o.x,a.x),Xr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Za=class extends Dn{constructor(t=new z,e=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new z){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Xr(t,s.x,r.x,o.x,a.x),Xr(t,s.y,r.y,o.y,a.y),Xr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ho=class extends Dn{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$a=class extends Dn{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},uo=class extends Dn{constructor(t=new xt,e=new xt,n=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new xt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Wr(t,s.x,r.x,o.x),Wr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ja=class extends Dn{constructor(t=new z,e=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new z){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Wr(t,s.x,r.x,o.x),Wr(t,s.y,r.y,o.y),Wr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fo=class extends Dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(yf(a,l.x,c.x,u.x,h.x),yf(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new xt().fromArray(s))}return this}},dh=Object.freeze({__proto__:null,ArcCurve:Ya,CatmullRomCurve3:qa,CubicBezierCurve:co,CubicBezierCurve3:Za,EllipseCurve:ur,LineCurve:ho,LineCurve3:$a,QuadraticBezierCurve:uo,QuadraticBezierCurve3:Ja,SplineCurve:fo}),Ka=class extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new dh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new dh[s.type]().fromJSON(s))}return this}},po=class extends Ka{constructor(t){super(),this.type="Path",this.currentPoint=new xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ho(this.currentPoint.clone(),new xt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new uo(this.currentPoint.clone(),new xt(t,e),new xt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new co(this.currentPoint.clone(),new xt(t,e),new xt(n,s),new xt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new fo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new ur(t,e,n,s,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Xi=class extends po{constructor(t){super(t),this.uuid=ci(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new po().fromJSON(s))}return this}};function Q0(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=fd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=sm(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let u=a,h=l;for(let f=e;f<s;f+=e){let d=i[f],p=i[f+1];d<a&&(a=d),p<l&&(l=p),d>u&&(u=d),p>h&&(h=p)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return mo(r,o,e,a,l,c,0),o}function fd(i,t,e,n,s){let r;if(s===mm(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=_f(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=_f(o/n|0,i[o],i[o+1],r);return r&&fr(r,r.next)&&(xo(r),r=r.next),r}function gs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(fr(e,e.next)||Ve(e.prev,e,e.next)===0)){if(xo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function mo(i,t,e,n,s,r,o){if(!i)return;!o&&r&&cm(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?em(i,n,s,r):tm(i)){t.push(l.i,i.i,c.i),xo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=nm(gs(i),t),mo(i,t,e,n,s,r,2)):o===2&&im(i,t,e,n,s,r):mo(gs(i),t,e,n,s,r,1);break}}}function tm(i){let t=i.prev,e=i,n=i.next;if(Ve(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(s,r,o),h=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=u&&p.x<=f&&p.y>=h&&p.y<=d&&kr(s,a,r,l,o,c,p.x,p.y)&&Ve(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function em(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ve(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,d=Math.min(a,l,c),p=Math.min(u,h,f),y=Math.max(a,l,c),m=Math.max(u,h,f),x=ph(d,p,t,e,n),S=ph(y,m,t,e,n),w=i.prevZ,g=i.nextZ;for(;w&&w.z>=x&&g&&g.z<=S;){if(w.x>=d&&w.x<=y&&w.y>=p&&w.y<=m&&w!==s&&w!==o&&kr(a,u,l,h,c,f,w.x,w.y)&&Ve(w.prev,w,w.next)>=0||(w=w.prevZ,g.x>=d&&g.x<=y&&g.y>=p&&g.y<=m&&g!==s&&g!==o&&kr(a,u,l,h,c,f,g.x,g.y)&&Ve(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;w&&w.z>=x;){if(w.x>=d&&w.x<=y&&w.y>=p&&w.y<=m&&w!==s&&w!==o&&kr(a,u,l,h,c,f,w.x,w.y)&&Ve(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;g&&g.z<=S;){if(g.x>=d&&g.x<=y&&g.y>=p&&g.y<=m&&g!==s&&g!==o&&kr(a,u,l,h,c,f,g.x,g.y)&&Ve(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function nm(i,t){let e=i;do{let n=e.prev,s=e.next.next;!fr(n,s)&&pd(n,e,e.next,s)&&go(n,s)&&go(s,n)&&(t.push(n.i,e.i,s.i),xo(e),xo(e.next),e=i=s),e=e.next}while(e!==i);return gs(e)}function im(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&fm(o,a)){let l=md(o,a);o=gs(o,o.next),l=gs(l,l.next),mo(o,t,e,n,s,r,0),mo(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function sm(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=fd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(um(c))}s.sort(rm);for(let r=0;r<s.length;r++)e=om(s[r],e);return e}function rm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function om(i,t){let e=am(i,t);if(!e)return t;let n=md(e,i);return gs(n,n.next),gs(e,e.next)}function am(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(fr(i,e))return e;do{if(fr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let h=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>r&&(r=h,o=e.x<e.next.x?e:e.next,h===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&dd(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let h=Math.abs(s-e.y)/(n-e.x);go(e,i)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&lm(o,e)))&&(o=e,u=h)}e=e.next}while(e!==a);return o}function lm(i,t){return Ve(i.prev,i,t.prev)<0&&Ve(t.next,i,i.next)<0}function cm(i,t,e,n){let s=i;do s.z===0&&(s.z=ph(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,hm(s)}function hm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function ph(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function um(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function dd(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function kr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&dd(i,t,e,n,s,r,o,a)}function fm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!dm(i,t)&&(go(i,t)&&go(t,i)&&pm(i,t)&&(Ve(i.prev,i,t.prev)||Ve(i,t.prev,t))||fr(i,t)&&Ve(i.prev,i,i.next)>0&&Ve(t.prev,t,t.next)>0)}function Ve(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function fr(i,t){return i.x===t.x&&i.y===t.y}function pd(i,t,e,n){let s=Aa(Ve(i,t,e)),r=Aa(Ve(i,t,n)),o=Aa(Ve(e,n,i)),a=Aa(Ve(e,n,t));return!!(s!==r&&o!==a||s===0&&Ta(i,e,t)||r===0&&Ta(i,n,t)||o===0&&Ta(e,i,n)||a===0&&Ta(e,t,n))}function Ta(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Aa(i){return i>0?1:i<0?-1:0}function dm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&pd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function go(i,t){return Ve(i.prev,i,i.next)<0?Ve(i,t,i.next)>=0&&Ve(i,i.prev,t)>=0:Ve(i,t,i.prev)<0||Ve(i,i.next,t)<0}function pm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function md(i,t){let e=mh(i.i,i.x,i.y),n=mh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function _f(i,t,e,n){let s=mh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function xo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function mh(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function mm(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var gh=class{static triangulate(t,e,n=2){return Q0(t,e,n)}},ds=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];vf(t),Mf(n,t);let o=t.length;e.forEach(vf);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Mf(n,e[l]);let a=gh.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function vf(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Mf(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Yi=class i extends Pe{constructor(t=new Xi([new xt(.5,.5),new xt(-.5,.5),new xt(-.5,-.5),new xt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new pe(s,3)),this.setAttribute("uv",new pe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,x=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:gm,w,g=!1,M,v,T,_;if(x){w=x.getSpacedPoints(u),g=!0,f=!1;let K=x.isCatmullRomCurve3?x.closed:!1;M=x.computeFrenetFrames(u,K),v=new z,T=new z,_=new z}f||(m=0,d=0,p=0,y=0);let b=a.extractPoints(c),A=b.shape,I=b.holes;if(!ds.isClockWise(A)){A=A.reverse();for(let K=0,nt=I.length;K<nt;K++){let ct=I[K];ds.isClockWise(ct)&&(I[K]=ct.reverse())}}function N(K){let ct=10000000000000001e-36,ht=K[0];for(let yt=1;yt<=K.length;yt++){let Gt=yt%K.length,Yt=K[Gt],Kt=Yt.x-ht.x,te=Yt.y-ht.y,B=Kt*Kt+te*te,ve=Math.max(Math.abs(Yt.x),Math.abs(Yt.y),Math.abs(ht.x),Math.abs(ht.y)),ce=ct*ve*ve;if(B<=ce){K.splice(Gt,1),yt--;continue}ht=Yt}}N(A),I.forEach(N);let C=I.length,P=A;for(let K=0;K<C;K++){let nt=I[K];A=A.concat(nt)}function F(K,nt,ct){return nt||ee("ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(nt,ct)}let O=A.length;function j(K,nt,ct){let ht,yt,Gt,Yt=K.x-nt.x,Kt=K.y-nt.y,te=ct.x-K.x,B=ct.y-K.y,ve=Yt*Yt+Kt*Kt,ce=Yt*B-Kt*te;if(Math.abs(ce)>Number.EPSILON){let L=Math.sqrt(ve),E=Math.sqrt(te*te+B*B),W=nt.x-Kt/L,J=nt.y+Yt/L,it=ct.x-B/E,_t=ct.y+te/E,Mt=((it-W)*B-(_t-J)*te)/(Yt*B-Kt*te);ht=W+Yt*Mt-K.x,yt=J+Kt*Mt-K.y;let st=ht*ht+yt*yt;if(st<=2)return new xt(ht,yt);Gt=Math.sqrt(st/2)}else{let L=!1;Yt>Number.EPSILON?te>Number.EPSILON&&(L=!0):Yt<-Number.EPSILON?te<-Number.EPSILON&&(L=!0):Math.sign(Kt)===Math.sign(B)&&(L=!0),L?(ht=-Kt,yt=Yt,Gt=Math.sqrt(ve)):(ht=Yt,yt=Kt,Gt=Math.sqrt(ve/2))}return new xt(ht/Gt,yt/Gt)}let V=[];for(let K=0,nt=P.length,ct=nt-1,ht=K+1;K<nt;K++,ct++,ht++)ct===nt&&(ct=0),ht===nt&&(ht=0),V[K]=j(P[K],P[ct],P[ht]);let $=[],Z,at=V.concat();for(let K=0,nt=C;K<nt;K++){let ct=I[K];Z=[];for(let ht=0,yt=ct.length,Gt=yt-1,Yt=ht+1;ht<yt;ht++,Gt++,Yt++)Gt===yt&&(Gt=0),Yt===yt&&(Yt=0),Z[ht]=j(ct[ht],ct[Gt],ct[Yt]);$.push(Z),at=at.concat(Z)}let pt;if(m===0)pt=ds.triangulateShape(P,I);else{let K=[],nt=[];for(let ct=0;ct<m;ct++){let ht=ct/m,yt=d*Math.cos(ht*Math.PI/2),Gt=p*Math.sin(ht*Math.PI/2)+y;for(let Yt=0,Kt=P.length;Yt<Kt;Yt++){let te=F(P[Yt],V[Yt],Gt);rt(te.x,te.y,-yt),ht===0&&K.push(te)}for(let Yt=0,Kt=C;Yt<Kt;Yt++){let te=I[Yt];Z=$[Yt];let B=[];for(let ve=0,ce=te.length;ve<ce;ve++){let L=F(te[ve],Z[ve],Gt);rt(L.x,L.y,-yt),ht===0&&B.push(L)}ht===0&&nt.push(B)}}pt=ds.triangulateShape(K,nt)}let Jt=pt.length,kt=p+y;for(let K=0;K<O;K++){let nt=f?F(A[K],at[K],kt):A[K];g?(T.copy(M.normals[0]).multiplyScalar(nt.x),v.copy(M.binormals[0]).multiplyScalar(nt.y),_.copy(w[0]).add(T).add(v),rt(_.x,_.y,_.z)):rt(nt.x,nt.y,0)}for(let K=1;K<=u;K++)for(let nt=0;nt<O;nt++){let ct=f?F(A[nt],at[nt],kt):A[nt];g?(T.copy(M.normals[K]).multiplyScalar(ct.x),v.copy(M.binormals[K]).multiplyScalar(ct.y),_.copy(w[K]).add(T).add(v),rt(_.x,_.y,_.z)):rt(ct.x,ct.y,h/u*K)}for(let K=m-1;K>=0;K--){let nt=K/m,ct=d*Math.cos(nt*Math.PI/2),ht=p*Math.sin(nt*Math.PI/2)+y;for(let yt=0,Gt=P.length;yt<Gt;yt++){let Yt=F(P[yt],V[yt],ht);rt(Yt.x,Yt.y,h+ct)}for(let yt=0,Gt=I.length;yt<Gt;yt++){let Yt=I[yt];Z=$[yt];for(let Kt=0,te=Yt.length;Kt<te;Kt++){let B=F(Yt[Kt],Z[Kt],ht);g?rt(B.x,B.y+w[u-1].y,w[u-1].x+ct):rt(B.x,B.y,h+ct)}}}Xt(),U();function Xt(){let K=s.length/3;if(f){let nt=0,ct=O*nt;for(let ht=0;ht<Jt;ht++){let yt=pt[ht];gt(yt[2]+ct,yt[1]+ct,yt[0]+ct)}nt=u+m*2,ct=O*nt;for(let ht=0;ht<Jt;ht++){let yt=pt[ht];gt(yt[0]+ct,yt[1]+ct,yt[2]+ct)}}else{for(let nt=0;nt<Jt;nt++){let ct=pt[nt];gt(ct[2],ct[1],ct[0])}for(let nt=0;nt<Jt;nt++){let ct=pt[nt];gt(ct[0]+O*u,ct[1]+O*u,ct[2]+O*u)}}n.addGroup(K,s.length/3-K,0)}function U(){let K=s.length/3,nt=0;k(P,nt),nt+=P.length;for(let ct=0,ht=I.length;ct<ht;ct++){let yt=I[ct];k(yt,nt),nt+=yt.length}n.addGroup(K,s.length/3-K,1)}function k(K,nt){let ct=K.length;for(;--ct>=0;){let ht=ct,yt=ct-1;yt<0&&(yt=K.length-1);for(let Gt=0,Yt=u+m*2;Gt<Yt;Gt++){let Kt=O*Gt,te=O*(Gt+1),B=nt+ht+Kt,ve=nt+yt+Kt,ce=nt+yt+te,L=nt+ht+te;ut(B,ve,ce,L)}}}function rt(K,nt,ct){l.push(K),l.push(nt),l.push(ct)}function gt(K,nt,ct){et(K),et(nt),et(ct);let ht=s.length/3,yt=S.generateTopUV(n,s,ht-3,ht-2,ht-1);vt(yt[0]),vt(yt[1]),vt(yt[2])}function ut(K,nt,ct,ht){et(K),et(nt),et(ht),et(nt),et(ct),et(ht);let yt=s.length/3,Gt=S.generateSideWallUV(n,s,yt-6,yt-3,yt-2,yt-1);vt(Gt[0]),vt(Gt[1]),vt(Gt[3]),vt(Gt[1]),vt(Gt[2]),vt(Gt[3])}function et(K){s.push(l[K*3+0]),s.push(l[K*3+1]),s.push(l[K*3+2])}function vt(K){r.push(K.x),r.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return xm(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new dh[s.type]().fromJSON(s)),new i(n,t.options)}},gm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new xt(r,o),new xt(a,l),new xt(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[s*3],d=t[s*3+1],p=t[s*3+2],y=t[r*3],m=t[r*3+1],x=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new xt(o,1-l),new xt(c,1-h),new xt(f,1-p),new xt(y,1-x)]:[new xt(a,1-l),new xt(u,1-h),new xt(d,1-p),new xt(m,1-x)]}};function xm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Xe=class i extends Pe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,d=[],p=[],y=[],m=[];for(let x=0;x<u;x++){let S=x*f-o;for(let w=0;w<c;w++){let g=w*h-r;p.push(g,-S,0),y.push(0,0,1),m.push(w/a),m.push(1-x/l)}}for(let x=0;x<l;x++)for(let S=0;S<a;S++){let w=S+c*x,g=S+c*(x+1),M=S+1+c*(x+1),v=S+1+c*x;d.push(w,g,v),d.push(g,M,v)}this.setIndex(d),this.setAttribute("position",new pe(p,3)),this.setAttribute("normal",new pe(y,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var xe=class i extends Pe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new z,f=new z,d=[],p=[],y=[],m=[];for(let x=0;x<=n;x++){let S=[],w=x/n,g=o+w*a,M=t*Math.cos(g),v=Math.sqrt(t*t-M*M),T=0;x===0&&o===0?T=.5/e:x===n&&l===Math.PI&&(T=-.5/e);for(let _=0;_<=e;_++){let b=_/e,A=s+b*r;h.x=-v*Math.cos(A),h.y=M,h.z=v*Math.sin(A),p.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),m.push(b+T,1-w),S.push(c++)}u.push(S)}for(let x=0;x<n;x++)for(let S=0;S<e;S++){let w=u[x][S+1],g=u[x][S],M=u[x+1][S],v=u[x+1][S+1];(x!==0||o>0)&&d.push(w,g,v),(x!==n-1||l<Math.PI)&&d.push(g,M,v)}this.setIndex(d),this.setAttribute("position",new pe(p,3)),this.setAttribute("normal",new pe(y,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var We=class i extends Pe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],h=[],f=new z,d=new z,p=new z;for(let y=0;y<=n;y++){let m=o+y/n*a;for(let x=0;x<=s;x++){let S=x/s*r;d.x=(t+e*Math.cos(m))*Math.cos(S),d.y=(t+e*Math.cos(m))*Math.sin(S),d.z=e*Math.sin(m),c.push(d.x,d.y,d.z),f.x=t*Math.cos(S),f.y=t*Math.sin(S),p.subVectors(d,f).normalize(),u.push(p.x,p.y,p.z),h.push(x/s),h.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){let x=(s+1)*y+m-1,S=(s+1)*(y-1)+m-1,w=(s+1)*(y-1)+m,g=(s+1)*y+m;l.push(x,S,g),l.push(S,w,g)}this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(u,3)),this.setAttribute("uv",new pe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Ms(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Sf(s))s.isRenderTargetTexture?(Qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Sf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function mn(i){let t={};for(let e=0;e<i.length;e++){let n=Ms(i[e]);for(let s in n)t[s]=n[s]}return t}function Sf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ym(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Vh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}var gd={clone:Ms,merge:mn},_m=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,tn=class extends Kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_m,this.fragmentShader=vm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ms(t.uniforms),this.uniformsGroups=ym(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ot().setHex(s.value);break;case"v2":this.uniforms[n].value=new xt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Oe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new re().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Se().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ja=class extends tn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},se=class extends Kn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Do,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},yo=class extends se{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return fe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var _o=class extends Kn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Do,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=ml,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Qa=class extends Kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},tl=class extends Kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function qs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function oh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var qi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},el=class extends qi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ch,endingEnd:ch}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case hh:r=t,a=2*e-n;break;case uh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hh:o=t,l=2*n-e;break;case uh:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(s-e),y=p*p,m=y*p,x=-f*m+2*f*y-f*p,S=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*p+1,w=(-1-d)*m+(1.5+d)*y+.5*p,g=d*m-d*y;for(let M=0;M!==a;++M)r[M]=x*o[u+M]+S*o[c+M]+w*o[l+M]+g*o[h+M];return r}},nl=class extends qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(s-e),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},il=class extends qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},sl=class extends qi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(n-e)/(s-e),y=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*y+o[l+m]*p;return r}let f=a*2,d=t-1;for(let p=0;p!==a;++p){let y=o[c+p],m=o[l+p],x=d*f+p*2,S=h[x],w=h[x+1],g=t*f+p*2,M=u[g],v=u[g+1],T=Sm(n,e,S,M,s);r[p]=xd(T,y,w,v,m)}return r}};function xd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Mm(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Sm(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=xd(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Mm(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Nn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=qs(e,this.TimeBufferType),this.values=qs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:qs(t.times,Array),values:qs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),oh(t.settings)&&(n.settings={inTangents:qs(t.settings.inTangents,Array),outTangents:qs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new il(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new nl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new el(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new sl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Yr:e=this.InterpolantFactoryMethodDiscrete;break;case Ha:e=this.InterpolantFactoryMethodLinear;break;case Ia:e=this.InterpolantFactoryMethodSmooth;break;case lh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Qt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yr;case this.InterpolantFactoryMethodLinear:return Ha;case this.InterpolantFactoryMethodSmooth:return Ia;case this.InterpolantFactoryMethodBezier:return lh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;oh(this.settings)&&(bf(this.settings.inTangents,t),bf(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ee("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ee("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ee("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){ee("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&h0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){ee("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ia,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let p=0;p!==n;++p){let y=e[h+p];if(y!==e[f+p]||y!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[h+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,oh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function bf(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Nn.prototype.ValueTypeName="";Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=Ha;var Zi=class extends Nn{constructor(t,e,n){super(t,e,n)}};Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Yr;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var rl=class extends Nn{constructor(t,e,n,s){super(t,e,n,s)}};rl.prototype.ValueTypeName="color";var ol=class extends Nn{constructor(t,e,n,s){super(t,e,n,s)}};ol.prototype.ValueTypeName="number";var al=class extends qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)Pn.slerpFlat(r,0,o,c-a,o,c,l);return r}},vo=class extends Nn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new al(this.times,this.values,this.getValueSize(),t)}};vo.prototype.ValueTypeName="quaternion";vo.prototype.InterpolantFactoryMethodSmooth=void 0;var $i=class extends Nn{constructor(t,e,n){super(t,e,n)}};$i.prototype.ValueTypeName="string";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=Yr;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var ll=class extends Nn{constructor(t,e,n,s){super(t,e,n,s)}};ll.prototype.ValueTypeName="vector";var cl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],p=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},yd=new cl,hl=class{constructor(t){this.manager=t!==void 0?t:yd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};hl.DEFAULT_MATERIAL_NAME="__DEFAULT";var dr=class extends Qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},xs=class extends dr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ah=new Se,Ef=new z,wf=new z,Mo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lr,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Ef.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ef),wf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){ah.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ah,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Qs||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(ah)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ra=new z,Ca=new Pn,ai=new z,So=class extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ra,Ca,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ra,Ca,ai.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ra,Ca,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ra,Ca,ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Gi=new z,Tf=new xt,Af=new xt,nn=class extends So{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=er*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Gr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return er*2*Math.atan(Math.tan(Gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z)}getViewSize(t,e){return this.getViewBounds(t,Tf,Af),e.subVectors(Af,Tf)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Gr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var xh=class extends Mo{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0}},bo=class extends dr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new xh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},pr=class extends So{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},yh=class extends Mo{constructor(){super(new pr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ys=class extends dr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new yh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Zs=-90,$s=1,ul=class extends Qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new nn(Zs,$s,t,e);s.layers=this.layers,this.add(s);let r=new nn(Zs,$s,t,e);r.layers=this.layers,this.add(r);let o=new nn(Zs,$s,t,e);o.layers=this.layers,this.add(o);let a=new nn(Zs,$s,t,e);a.layers=this.layers,this.add(a);let l=new nn(Zs,$s,t,e);l.layers=this.layers,this.add(l);let c=new nn(Zs,$s,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},fl=class extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Wh="\\[\\]\\.:\\/",bm=new RegExp("["+Wh+"]","g"),Xh="[^"+Wh+"]",Em="[^"+Wh.replace("\\.","")+"]",wm=/((?:WC+[\/:])*)/.source.replace("WC",Xh),Tm=/(WCOD+)?/.source.replace("WCOD",Em),Am=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xh),Rm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xh),Cm=new RegExp("^"+wm+Tm+Am+Rm+"$"),Im=["material","materials","bones","map"],_h=class{constructor(t,e,n){let s=n||He.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},He=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(bm,"")}static parseTrackName(t){let e=Cm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Im.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ee("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ee("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ee("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ee("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ee("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;ee("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};He.Composite=_h;He.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};He.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};He.prototype.GetterByBindingType=[He.prototype._getValue_direct,He.prototype._getValue_array,He.prototype._getValue_arrayElement,He.prototype._getValue_toArray];He.prototype.SetterByBindingTypeAndVersioning=[[He.prototype._setValue_direct,He.prototype._setValue_direct_setNeedsUpdate,He.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[He.prototype._setValue_array,He.prototype._setValue_array_setNeedsUpdate,He.prototype._setValue_array_setMatrixWorldNeedsUpdate],[He.prototype._setValue_arrayElement,He.prototype._setValue_arrayElement_setNeedsUpdate,He.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[He.prototype._setValue_fromArray,He.prototype._setValue_fromArray_setNeedsUpdate,He.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fv=new Float32Array(1);var Kh=class Kh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Kh.prototype.isMatrix2=!0;var vh=Kh;function Yh(i,t,e,n){let s=Pm(n);switch(e){case Fh:return i*t;case Sl:return i*t/s.components*s.byteLength;case bl:return i*t/s.components*s.byteLength;case es:return i*t*2/s.components*s.byteLength;case El:return i*t*2/s.components*s.byteLength;case Oh:return i*t*3/s.components*s.byteLength;case Hn:return i*t*4/s.components*s.byteLength;case wl:return i*t*4/s.components*s.byteLength;case Ao:case Ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Co:case Io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Al:case Cl:return Math.max(i,16)*Math.max(t,8)/4;case Tl:case Rl:return Math.max(i,8)*Math.max(t,8)/2;case Il:case Pl:case Dl:case Nl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ll:case Po:case Ul:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ol:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case kl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Vl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Yl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ql:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Zl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case $l:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Jl:case Kl:case jl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ql:case tc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Lo:case ec:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Pm(i){switch(i){case An:case Dh:return{byteLength:1,components:1};case xr:case Nh:case ti:return{byteLength:2,components:1};case vl:case Ml:return{byteLength:2,components:4};case Qn:case _l:case Bn:return{byteLength:4,components:1};case Uh:case zh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Hd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function zm(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<h.length;d++){let p=h[f],y=h[d];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++f,h[f]=y)}h.length=f+1;for(let d=0,p=h.length;d<p;d++){let y=h[d];i.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Fm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Om=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Bm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,km=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ym=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$m=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Km=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ng=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ig=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,og=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ag=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,cg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ug=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dg="gl_FragColor = linearToOutputTexel( gl_FragColor );",pg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,gg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_g=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Eg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ag=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Cg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ig=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ng=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ug=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Og=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Hg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$g=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,tx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ex=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ox=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ax=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ux=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,dx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,px=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_x=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,vx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ex=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ax=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ix=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Px=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Fx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ox=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Xx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$x=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ty=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ey=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ny=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ry=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ay=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ly=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,py=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,my=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ue={alphahash_fragment:Fm,alphahash_pars_fragment:Om,alphamap_fragment:Bm,alphamap_pars_fragment:Hm,alphatest_fragment:km,alphatest_pars_fragment:Gm,aomap_fragment:Vm,aomap_pars_fragment:Wm,batching_pars_vertex:Xm,batching_vertex:Ym,begin_vertex:qm,beginnormal_vertex:Zm,bsdfs:$m,iridescence_fragment:Jm,bumpmap_pars_fragment:Km,clipping_planes_fragment:jm,clipping_planes_pars_fragment:Qm,clipping_planes_pars_vertex:tg,clipping_planes_vertex:eg,color_fragment:ng,color_pars_fragment:ig,color_pars_vertex:sg,color_vertex:rg,common:og,cube_uv_reflection_fragment:ag,defaultnormal_vertex:lg,displacementmap_pars_vertex:cg,displacementmap_vertex:hg,emissivemap_fragment:ug,emissivemap_pars_fragment:fg,colorspace_fragment:dg,colorspace_pars_fragment:pg,envmap_fragment:mg,envmap_common_pars_fragment:gg,envmap_pars_fragment:xg,envmap_pars_vertex:yg,envmap_physical_pars_fragment:Cg,envmap_vertex:_g,fog_vertex:vg,fog_pars_vertex:Mg,fog_fragment:Sg,fog_pars_fragment:bg,gradientmap_pars_fragment:Eg,lightmap_pars_fragment:wg,lights_lambert_fragment:Tg,lights_lambert_pars_fragment:Ag,lights_pars_begin:Rg,lights_toon_fragment:Ig,lights_toon_pars_fragment:Pg,lights_phong_fragment:Lg,lights_phong_pars_fragment:Dg,lights_physical_fragment:Ng,lights_physical_pars_fragment:Ug,lights_fragment_begin:zg,lights_fragment_maps:Fg,lights_fragment_end:Og,lightprobes_pars_fragment:Bg,logdepthbuf_fragment:Hg,logdepthbuf_pars_fragment:kg,logdepthbuf_pars_vertex:Gg,logdepthbuf_vertex:Vg,map_fragment:Wg,map_pars_fragment:Xg,map_particle_fragment:Yg,map_particle_pars_fragment:qg,metalnessmap_fragment:Zg,metalnessmap_pars_fragment:$g,morphinstance_vertex:Jg,morphcolor_vertex:Kg,morphnormal_vertex:jg,morphtarget_pars_vertex:Qg,morphtarget_vertex:tx,normal_fragment_begin:ex,normal_fragment_maps:nx,normal_pars_fragment:ix,normal_pars_vertex:sx,normal_vertex:rx,normalmap_pars_fragment:ox,clearcoat_normal_fragment_begin:ax,clearcoat_normal_fragment_maps:lx,clearcoat_pars_fragment:cx,iridescence_pars_fragment:hx,opaque_fragment:ux,packing:fx,premultiplied_alpha_fragment:dx,project_vertex:px,dithering_fragment:mx,dithering_pars_fragment:gx,roughnessmap_fragment:xx,roughnessmap_pars_fragment:yx,shadowmap_pars_fragment:_x,shadowmap_pars_vertex:vx,shadowmap_vertex:Mx,shadowmask_pars_fragment:Sx,skinbase_vertex:bx,skinning_pars_vertex:Ex,skinning_vertex:wx,skinnormal_vertex:Tx,specularmap_fragment:Ax,specularmap_pars_fragment:Rx,tonemapping_fragment:Cx,tonemapping_pars_fragment:Ix,transmission_fragment:Px,transmission_pars_fragment:Lx,uv_pars_fragment:Dx,uv_pars_vertex:Nx,uv_vertex:Ux,worldpos_vertex:zx,background_vert:Fx,background_frag:Ox,backgroundCube_vert:Bx,backgroundCube_frag:Hx,cube_vert:kx,cube_frag:Gx,depth_vert:Vx,depth_frag:Wx,distance_vert:Xx,distance_frag:Yx,equirect_vert:qx,equirect_frag:Zx,linedashed_vert:$x,linedashed_frag:Jx,meshbasic_vert:Kx,meshbasic_frag:jx,meshlambert_vert:Qx,meshlambert_frag:ty,meshmatcap_vert:ey,meshmatcap_frag:ny,meshnormal_vert:iy,meshnormal_frag:sy,meshphong_vert:ry,meshphong_frag:oy,meshphysical_vert:ay,meshphysical_frag:ly,meshtoon_vert:cy,meshtoon_frag:hy,points_vert:uy,points_frag:fy,shadow_vert:dy,shadow_frag:py,sprite_vert:my,sprite_frag:gy},Pt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},mi={basic:{uniforms:mn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:mn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Ot(0)},envMapIntensity:{value:1}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:mn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:mn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:mn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:mn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:mn([Pt.points,Pt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:mn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:mn([Pt.common,Pt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:mn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:mn([Pt.sprite,Pt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distance:{uniforms:mn([Pt.common,Pt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distance_vert,fragmentShader:ue.distance_frag},shadow:{uniforms:mn([Pt.lights,Pt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};mi.physical={uniforms:mn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};var sc={r:0,b:0,g:0},xy=new Se,kd=new re;kd.set(-1,0,0,0,1,0,0,0,1);function yy(i,t,e,n,s,r){let o=new Ot(0),a=s===!0?0:1,l,c,u=null,h=0,f=null;function d(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){let g=S.backgroundBlurriness>0;w=t.get(w,g)}return w}function p(S){let w=!1,g=d(S);g===null?m(o,a):g&&g.isColor&&(m(g,1),w=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(S,w){let g=d(w);g&&(g.isCubeTexture||g.mapping===wo)?(c===void 0&&(c=new tt(new ge(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:Ms(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,v,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(xy.makeRotationFromEuler(w.backgroundRotation)).transpose(),g.isCubeTexture&&g.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(kd),c.material.toneMapped=me.getTransfer(g.colorSpace)!==we,(u!==g||h!==g.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=g,h=g.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new tt(new Xe(2,2),new tn({name:"BackgroundMaterial",uniforms:Ms(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=me.getTransfer(g.colorSpace)!==we,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(u!==g||h!==g.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=g,h=g.version,f=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,w){S.getRGB(sc,Vh(i)),e.buffers.color.setClear(sc.r,sc.g,sc.b,w,r)}function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,w=1){o.set(S),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,m(o,a)},render:p,addToRenderList:y,dispose:x}}function _y(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(I,D,N,C,P){let F=!1,O=h(I,C,N,D);r!==O&&(r=O,c(r.object)),F=d(I,C,N,P),F&&p(I,C,N,P),P!==null&&t.update(P,i.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,g(I,D,N,C),P!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function u(I){return i.deleteVertexArray(I)}function h(I,D,N,C){let P=C.wireframe===!0,F=n[D.id];F===void 0&&(F={},n[D.id]=F);let O=I.isInstancedMesh===!0?I.id:0,j=F[O];j===void 0&&(j={},F[O]=j);let V=j[N.id];V===void 0&&(V={},j[N.id]=V);let $=V[P];return $===void 0&&($=f(l()),V[P]=$),$}function f(I){let D=[],N=[],C=[];for(let P=0;P<e;P++)D[P]=0,N[P]=0,C[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:C,object:I,attributes:{},index:null}}function d(I,D,N,C){let P=r.attributes,F=D.attributes,O=0,j=N.getAttributes();for(let V in j)if(j[V].location>=0){let Z=P[V],at=F[V];if(at===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(at=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(at=I.instanceColor)),Z===void 0||Z.attribute!==at||at&&Z.data!==at.data)return!0;O++}return r.attributesNum!==O||r.index!==C}function p(I,D,N,C){let P={},F=D.attributes,O=0,j=N.getAttributes();for(let V in j)if(j[V].location>=0){let Z=F[V];Z===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor));let at={};at.attribute=Z,Z&&Z.data&&(at.data=Z.data),P[V]=at,O++}r.attributes=P,r.attributesNum=O,r.index=C}function y(){let I=r.newAttributes;for(let D=0,N=I.length;D<N;D++)I[D]=0}function m(I){x(I,0)}function x(I,D){let N=r.newAttributes,C=r.enabledAttributes,P=r.attributeDivisors;N[I]=1,C[I]===0&&(i.enableVertexAttribArray(I),C[I]=1),P[I]!==D&&(i.vertexAttribDivisor(I,D),P[I]=D)}function S(){let I=r.newAttributes,D=r.enabledAttributes;for(let N=0,C=D.length;N<C;N++)D[N]!==I[N]&&(i.disableVertexAttribArray(N),D[N]=0)}function w(I,D,N,C,P,F,O){O===!0?i.vertexAttribIPointer(I,D,N,P,F):i.vertexAttribPointer(I,D,N,C,P,F)}function g(I,D,N,C){y();let P=C.attributes,F=N.getAttributes(),O=D.defaultAttributeValues;for(let j in F){let V=F[j];if(V.location>=0){let $=P[j];if($===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&($=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&($=I.instanceColor)),$!==void 0){let Z=$.normalized,at=$.itemSize,pt=t.get($);if(pt===void 0)continue;let Jt=pt.buffer,kt=pt.type,Xt=pt.bytesPerElement,U=kt===i.INT||kt===i.UNSIGNED_INT||$.gpuType===_l;if($.isInterleavedBufferAttribute){let k=$.data,rt=k.stride,gt=$.offset;if(k.isInstancedInterleavedBuffer){for(let ut=0;ut<V.locationSize;ut++)x(V.location+ut,k.meshPerAttribute);I.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ut=0;ut<V.locationSize;ut++)m(V.location+ut);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let ut=0;ut<V.locationSize;ut++)w(V.location+ut,at/V.locationSize,kt,Z,rt*Xt,(gt+at/V.locationSize*ut)*Xt,U)}else{if($.isInstancedBufferAttribute){for(let k=0;k<V.locationSize;k++)x(V.location+k,$.meshPerAttribute);I.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let k=0;k<V.locationSize;k++)m(V.location+k);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let k=0;k<V.locationSize;k++)w(V.location+k,at/V.locationSize,kt,Z,at*Xt,at/V.locationSize*k*Xt,U)}}else if(O!==void 0){let Z=O[j];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(V.location,Z);break;case 3:i.vertexAttrib3fv(V.location,Z);break;case 4:i.vertexAttrib4fv(V.location,Z);break;default:i.vertexAttrib1fv(V.location,Z)}}}}S()}function M(){b();for(let I in n){let D=n[I];for(let N in D){let C=D[N];for(let P in C){let F=C[P];for(let O in F)u(F[O].object),delete F[O];delete C[P]}}delete n[I]}}function v(I){if(n[I.id]===void 0)return;let D=n[I.id];for(let N in D){let C=D[N];for(let P in C){let F=C[P];for(let O in F)u(F[O].object),delete F[O];delete C[P]}}delete n[I.id]}function T(I){for(let D in n){let N=n[D];for(let C in N){let P=N[C];if(P[I.id]===void 0)continue;let F=P[I.id];for(let O in F)u(F[O].object),delete F[O];delete P[I.id]}}}function _(I){for(let D in n){let N=n[D],C=I.isInstancedMesh===!0?I.id:0,P=N[C];if(P!==void 0){for(let F in P){let O=P[F];for(let j in O)u(O[j].object),delete O[j];delete P[F]}delete N[C],Object.keys(N).length===0&&delete n[D]}}}function b(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:A,dispose:M,releaseStatesOfGeometry:v,releaseStatesOfObject:_,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:m,disableUnusedAttributes:S}}function vy(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function My(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Hn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let _=T===ti&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==An&&T!==Bn&&!_&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Qt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),v=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:m,maxAttributes:x,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:g,maxSamples:M,samples:v}}function Sy(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Zn,a=new re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){let p=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,x=i.get(h);if(!s||p===null||p.length===0||r&&!m)r?u(null):c();else{let S=r?0:n,w=S*4,g=x.clippingState||null;l.value=g,g=u(p,f,w,d);for(let M=0;M!==w;++M)g[M]=e[M];x.clippingState=g,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,p){let y=h!==null?h.length:0,m=null;if(y!==0){if(m=l.value,p!==!0||m===null){let x=d+y*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<x)&&(m=new Float32Array(x));for(let w=0,g=d;w!==y;++w,g+=4)o.copy(h[w]).applyMatrix4(S,a),o.normal.toArray(m,g),m[g+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var Mr=4,by=6,Ey=20,wy=256,Uo=new pr,_d=new Ot,jh=null,Qh=0,tu=0,eu=!1,Ty=new z,Ss=new z,bs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Ty}=r;jh=this._renderer.getRenderTarget(),Qh=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Md(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(jh,Qh,tu),this._renderer.xr.enabled=eu,t.scissorTest=!1,vr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ji||t.mapping===vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jh=this._renderer.getRenderTarget(),Qh=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:ti,format:Hn,colorSpace:qr,depthBuffer:!1},s=vd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ay(r)),this._blurMaterial=Cy(r,t,e),this._ggxMaterial=Ry(r,t,e)}return s}_compileMaterial(t){let e=new tt(new Pe,t);this._renderer.compile(e,Uo)}_sceneToCubeUV(t,e,n,s,r){let l=new nn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(_d),h.toneMapping=jn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new tt(new ge,new ye({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,x=!1,S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,x=!0):(m.color.copy(_d),x=!0);for(let w=0;w<6;w++){let g=w%3;g===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[w],r.y,r.z)):g===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[w]));let M=this._cubeSize;vr(s,g*M,w>2?M:0,M,M),h.setRenderTarget(s),x&&h.render(y,l),h.render(t,l)}h.toneMapping=d,h.autoClear=f,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ji||t.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Md());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;vr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Uo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=c*1.25,d=h*f,{_lodMax:p}=this,y=this._sizeLods[n],m=3*y*(n>p-Mr?n-p+Mr:0),x=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,vr(r,m,x,3*y,2*y),s.setRenderTarget(r),s.render(a,Uo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,vr(t,m,x,3*y,2*y),s.setRenderTarget(t),s.render(a,Uo)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],h=3*u*(s>this._lodMax-Mr?s-this._lodMax+Mr:0),f=4*(this._cubeSize-u);vr(e,h,f,3*u,2*u),o.setRenderTarget(e),o.render(l,Uo)}};function Ay(i){let t=[],e=[],n=i,s=i-Mr+1+by;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,f=6,d=3,p=new Float32Array(d*f*h),y=new Float32Array(d*f*h);for(let x=0;x<h;x++){let S=x%3*2/3-1,w=x>2?0:-1,g=[S,w,0,S+2/3,w,0,S+2/3,w+1,0,S,w,0,S+2/3,w+1,0,S,w+1,0];p.set(g,d*f*x);for(let M=0;M<f;M++){let v=u[M*2]*2-1,T=u[M*2+1]*2-1;x===0?Ss.set(1,T,v):x===1?Ss.set(-v,1,-T):x===2?Ss.set(-v,T,1):x===3?Ss.set(-1,T,-v):x===4?Ss.set(-v,-1,T):Ss.set(v,T,-1),Ss.toArray(y,(x*f+M)*d)}}let m=new Pe;m.setAttribute("position",new Fe(p,d)),m.setAttribute("outputDirection",new Fe(y,d)),e.push(new tt(m,null)),n>Mr&&n--}return{lodMeshes:e,sizeLods:t}}function vd(i,t,e){let n=new Tn(i,t,e);return n.texture.mapping=wo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Ry(i,t,e){return new tn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:wy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ac(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Cy(i,t,e){return new tn({name:"SphericalGaussianBlur",defines:{SAMPLES:Ey,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ac(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Md(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Sd(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function ac(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var oc=class extends Tn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new oo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ge(5,5,5),r=new tn({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:di});r.uniforms.tEquirect.value=e;let o=new tt(s,r),a=e.minFilter;return e.minFilter===Qi&&(e.minFilter=un),new ul(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function Iy(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===gl||d===xl)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let y=new oc(p.height);return y.fromEquirectangularTexture(i,f),t.set(f,y),f.addEventListener("dispose",c),a(y.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,p=d===gl||d===xl,y=d===ji||d===vs;if(p||y){let m=e.get(f),x=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return n===null&&(n=new bs(i)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let S=f.image;return p&&S&&S.height>0||y&&S&&l(S)?(n===null&&(n=new bs(i)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,d){return d===gl?f.mapping=ji:d===xl&&(f.mapping=vs),f}function l(f){let d=0,p=6;for(let y=0;y<p;y++)f[y]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function Py(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ps("WebGLRenderer: "+n+" extension not supported."),s}}}function Ly(i,t,e,n){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,p=h.attributes.position,y=0;if(p===void 0)return;if(d!==null){let S=d.array;y=d.version;for(let w=0,g=S.length;w<g;w+=3){let M=S[w+0],v=S[w+1],T=S[w+2];f.push(M,v,v,T,T,M)}}else{let S=p.array;y=p.version;for(let w=0,g=S.length/3-1;w<g;w+=3){let M=w+0,v=w+1,T=w+2;f.push(M,v,v,T,T,M)}}let m=new(p.count>=65535?to:Qr)(f,1);m.version=y;let x=r.get(h);x&&t.remove(x),r.set(h,m)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Dy(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){i.drawElements(n,f,r,h*o),e.update(f,n,1)}function c(h,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,h*o,d),e.update(f,n,d))}function u(h,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,d);let y=0;for(let m=0;m<d;m++)y+=f[m];e.update(y,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Ny(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ee("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Uy(i,t,e){let n=new WeakMap,s=new Oe;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let b=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],w=0;d===!0&&(w=1),p===!0&&(w=2),y===!0&&(w=3);let g=a.attributes.position.count*w,M=1;g>t.maxTextureSize&&(M=Math.ceil(g/t.maxTextureSize),g=t.maxTextureSize);let v=new Float32Array(g*M*4*h),T=new Kr(v,g,M,h);T.type=Bn,T.needsUpdate=!0;let _=w*4;for(let A=0;A<h;A++){let I=m[A],D=x[A],N=S[A],C=g*M*4*A;for(let P=0;P<I.count;P++){let F=P*_;d===!0&&(s.fromBufferAttribute(I,P),v[C+F+0]=s.x,v[C+F+1]=s.y,v[C+F+2]=s.z,v[C+F+3]=0),p===!0&&(s.fromBufferAttribute(D,P),v[C+F+4]=s.x,v[C+F+5]=s.y,v[C+F+6]=s.z,v[C+F+7]=0),y===!0&&(s.fromBufferAttribute(N,P),v[C+F+8]=s.x,v[C+F+9]=s.y,v[C+F+10]=s.z,v[C+F+11]=N.itemSize===4?s.w:1)}}f={count:h,texture:T,size:new xt(g,M)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function zy(i,t,e,n,s){let r=new WeakMap;function o(c){let u=s.render.frame,h=c.geometry,f=t.get(c,h);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var Fy={[Th]:"LINEAR_TONE_MAPPING",[Ah]:"REINHARD_TONE_MAPPING",[Rh]:"CINEON_TONE_MAPPING",[gr]:"ACES_FILMIC_TONE_MAPPING",[Ih]:"AGX_TONE_MAPPING",[Ph]:"NEUTRAL_TONE_MAPPING",[Ch]:"CUSTOM_TONE_MAPPING"};function Oy(i,t,e,n,s,r){let o=new Tn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Pe;c.setAttribute("position",new pe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new pe([0,2,0,0,2,0],2));let u=new ja({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new tt(c,u),f=new pr(-1,1,1,-1,0,1),d=null,p=null,y=!1,m,x=null,S=[],w=!1;this.setSize=function(g,M){o.setSize(g,M),a!==null&&a.setSize(g,M),l!==null&&l.setSize(g,M);for(let v=0;v<S.length;v++){let T=S[v];T.setSize&&T.setSize(g,M)}},this.setEffects=function(g){S=g,w=S.length>0&&S[0].isRenderPass===!0;let M=o.width,v=o.height;S.length>0&&a===null&&(a=new Tn(M,v,{type:ti,depthBuffer:!1,stencilBuffer:!1}),l=new Tn(M,v,{type:ti,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<S.length;T++){let _=S[T];_.setSize&&_.setSize(M,v)}},this.begin=function(g,M){if(y||g.toneMapping===jn&&S.length===0)return!1;if(x=M,M!==null){let v=M.width,T=M.height;(o.width!==v||o.height!==T)&&this.setSize(v,T)}return w===!1&&g.setRenderTarget(o),m=g.toneMapping,g.toneMapping=jn,!0},this.hasRenderPass=function(){return w},this.end=function(g,M){g.toneMapping=m,y=!0;let v=o,T=a;for(let _=0;_<S.length;_++){let b=S[_];b.enabled!==!1&&(b.render(g,T,v,M),b.needsSwap!==!1&&(v=T,T=T===a?l:a))}if(d!==g.outputColorSpace||p!==g.toneMapping){d=g.outputColorSpace,p=g.toneMapping,u.defines={},me.getTransfer(d)===we&&(u.defines.SRGB_TRANSFER="");let _=Fy[p];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=v.texture,g.setRenderTarget(x),g.render(h,f),x=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Gd=new Sn,su=new Vi(1,1),Vd=new Kr,Wd=new Va,Xd=new oo,bd=[],Ed=[],wd=new Float32Array(16),Td=new Float32Array(9),Ad=new Float32Array(4);function br(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=bd[s];if(r===void 0&&(r=new Float32Array(s),bd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function rn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function on(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function lc(i,t){let e=Ed[t];e===void 0&&(e=new Int32Array(t),Ed[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function By(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Hy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;i.uniform2fv(this.addr,t),on(e,t)}}function ky(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(rn(e,t))return;i.uniform3fv(this.addr,t),on(e,t)}}function Gy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;i.uniform4fv(this.addr,t),on(e,t)}}function Vy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),on(e,t)}else{if(rn(e,n))return;Ad.set(n),i.uniformMatrix2fv(this.addr,!1,Ad),on(e,n)}}function Wy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),on(e,t)}else{if(rn(e,n))return;Td.set(n),i.uniformMatrix3fv(this.addr,!1,Td),on(e,n)}}function Xy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),on(e,t)}else{if(rn(e,n))return;wd.set(n),i.uniformMatrix4fv(this.addr,!1,wd),on(e,n)}}function Yy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function qy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;i.uniform2iv(this.addr,t),on(e,t)}}function Zy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;i.uniform3iv(this.addr,t),on(e,t)}}function $y(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;i.uniform4iv(this.addr,t),on(e,t)}}function Jy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ky(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;i.uniform2uiv(this.addr,t),on(e,t)}}function jy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;i.uniform3uiv(this.addr,t),on(e,t)}}function Qy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;i.uniform4uiv(this.addr,t),on(e,t)}}function t_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(su.compareFunction=e.isReversedDepthBuffer()?ic:nc,r=su):r=Gd,e.setTexture2D(t||r,s)}function e_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Wd,s)}function n_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Xd,s)}function i_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Vd,s)}function s_(i){switch(i){case 5126:return By;case 35664:return Hy;case 35665:return ky;case 35666:return Gy;case 35674:return Vy;case 35675:return Wy;case 35676:return Xy;case 5124:case 35670:return Yy;case 35667:case 35671:return qy;case 35668:case 35672:return Zy;case 35669:case 35673:return $y;case 5125:return Jy;case 36294:return Ky;case 36295:return jy;case 36296:return Qy;case 35678:case 36198:case 36298:case 36306:case 35682:return t_;case 35679:case 36299:case 36307:return e_;case 35680:case 36300:case 36308:case 36293:return n_;case 36289:case 36303:case 36311:case 36292:return i_}}function r_(i,t){i.uniform1fv(this.addr,t)}function o_(i,t){let e=br(t,this.size,2);i.uniform2fv(this.addr,e)}function a_(i,t){let e=br(t,this.size,3);i.uniform3fv(this.addr,e)}function l_(i,t){let e=br(t,this.size,4);i.uniform4fv(this.addr,e)}function c_(i,t){let e=br(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function h_(i,t){let e=br(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function u_(i,t){let e=br(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function f_(i,t){i.uniform1iv(this.addr,t)}function d_(i,t){i.uniform2iv(this.addr,t)}function p_(i,t){i.uniform3iv(this.addr,t)}function m_(i,t){i.uniform4iv(this.addr,t)}function g_(i,t){i.uniform1uiv(this.addr,t)}function x_(i,t){i.uniform2uiv(this.addr,t)}function y_(i,t){i.uniform3uiv(this.addr,t)}function __(i,t){i.uniform4uiv(this.addr,t)}function v_(i,t,e){let n=this.cache,s=t.length,r=lc(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),on(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=su:o=Gd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function M_(i,t,e){let n=this.cache,s=t.length,r=lc(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Wd,r[o])}function S_(i,t,e){let n=this.cache,s=t.length,r=lc(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Xd,r[o])}function b_(i,t,e){let n=this.cache,s=t.length,r=lc(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Vd,r[o])}function E_(i){switch(i){case 5126:return r_;case 35664:return o_;case 35665:return a_;case 35666:return l_;case 35674:return c_;case 35675:return h_;case 35676:return u_;case 5124:case 35670:return f_;case 35667:case 35671:return d_;case 35668:case 35672:return p_;case 35669:case 35673:return m_;case 5125:return g_;case 36294:return x_;case 36295:return y_;case 36296:return __;case 35678:case 36198:case 36298:case 36306:case 35682:return v_;case 35679:case 36299:case 36307:return M_;case 35680:case 36300:case 36308:case 36293:return S_;case 36289:case 36303:case 36311:case 36292:return b_}}var ru=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=s_(e.type)}},ou=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=E_(e.type)}},au=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},nu=/(\w+)(\])?(\[|\.)?/g;function Rd(i,t){i.seq.push(t),i.map[t.id]=t}function w_(i,t,e){let n=i.name,s=n.length;for(nu.lastIndex=0;;){let r=nu.exec(n),o=nu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Rd(e,c===void 0?new ru(a,i,t):new ou(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new au(a),Rd(e,h)),e=h}}}var Sr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);w_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Cd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var T_=37297,A_=0;function R_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Id=new re;function C_(i){me._getMatrix(Id,me.workingColorSpace,i);let t=`mat3( ${Id.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(i)){case Zr:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return Qt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Pd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+R_(i.getShaderSource(t),a)}else return r}function I_(i,t){let e=C_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var P_={[Th]:"Linear",[Ah]:"Reinhard",[Rh]:"Cineon",[gr]:"ACESFilmic",[Ih]:"AgX",[Ph]:"Neutral",[Ch]:"Custom"};function L_(i,t){let e=P_[t];return e===void 0?(Qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var rc=new z;function D_(){me.getLuminanceCoefficients(rc);let i=rc.x.toFixed(4),t=rc.y.toFixed(4),e=rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fo).join(`
`)}function U_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function z_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Fo(i){return i!==""}function Ld(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var F_=/^[ \t]*#include +<([\w\d./]+)>/gm;function lu(i){return i.replace(F_,B_)}var O_=new Map;function B_(i,t){let e=ue[t];if(e===void 0){let n=O_.get(t);if(n!==void 0)e=ue[n],Qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return lu(e)}var H_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nd(i){return i.replace(H_,k_)}function k_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ud(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var G_={[Eo]:"SHADOWMAP_TYPE_PCF",[mr]:"SHADOWMAP_TYPE_VSM"};function V_(i){return G_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var W_={[ji]:"ENVMAP_TYPE_CUBE",[vs]:"ENVMAP_TYPE_CUBE",[wo]:"ENVMAP_TYPE_CUBE_UV"};function X_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":W_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Y_={[vs]:"ENVMAP_MODE_REFRACTION"};function q_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Y_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Z_={[ml]:"ENVMAP_BLENDING_MULTIPLY",[Zf]:"ENVMAP_BLENDING_MIX",[$f]:"ENVMAP_BLENDING_ADD"};function $_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Z_[i.combine]||"ENVMAP_BLENDING_NONE"}function J_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function K_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=V_(e),c=X_(e),u=q_(e),h=$_(e),f=J_(e),d=N_(e),p=U_(r),y=s.createProgram(),m,x,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Fo).join(`
`),m.length>0&&(m+=`
`),x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Fo).join(`
`),x.length>0&&(x+=`
`)):(m=[Ud(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fo).join(`
`),x=[Ud(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==jn?"#define TONE_MAPPING":"",e.toneMapping!==jn?ue.tonemapping_pars_fragment:"",e.toneMapping!==jn?L_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,I_("linearToOutputTexel",e.outputColorSpace),D_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fo).join(`
`)),o=lu(o),o=Ld(o,e),o=Dd(o,e),a=lu(a),a=Ld(a,e),a=Dd(a,e),o=Nd(o),a=Nd(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,x=["#define varying in",e.glslVersion===Hh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let w=S+m+o,g=S+x+a,M=Cd(s,s.VERTEX_SHADER,w),v=Cd(s,s.FRAGMENT_SHADER,g);s.attachShader(y,M),s.attachShader(y,v),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function T(I){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(y)||"",N=s.getShaderInfoLog(M)||"",C=s.getShaderInfoLog(v)||"",P=D.trim(),F=N.trim(),O=C.trim(),j=!0,V=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,M,v);else{let $=Pd(s,M,"vertex"),Z=Pd(s,v,"fragment");ee("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+P+`
`+$+`
`+Z)}else P!==""?Qt("WebGLProgram: Program Info Log:",P):(F===""||O==="")&&(V=!1);V&&(I.diagnostics={runnable:j,programLog:P,vertexShader:{log:F,prefix:m},fragmentShader:{log:O,prefix:x}})}s.deleteShader(M),s.deleteShader(v),_=new Sr(s,y),b=z_(s,y)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(y,T_)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=A_++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=M,this.fragmentShader=v,this}var j_=0,cu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new hu(t),e.set(t,n)),n}},hu=class{constructor(t){this.id=j_++,this.code=t,this.usedTimes=0}};function Q_(i){return i===es||i===Po||i===Lo}function t1(i,t,e,n,s,r){let o=new jr,a=new cu,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,b,A,I,D,N){let C=I.fog,P=D.geometry,F=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,O=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,j=t.get(_.envMap||F,O),V=j&&j.mapping===wo?j.image.height:null,$=d[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&Qt("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let Z=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,at=Z!==void 0?Z.length:0,pt=0;P.morphAttributes.position!==void 0&&(pt=1),P.morphAttributes.normal!==void 0&&(pt=2),P.morphAttributes.color!==void 0&&(pt=3);let Jt,kt,Xt,U;if($){let Ue=mi[$];Jt=Ue.vertexShader,kt=Ue.fragmentShader}else{Jt=_.vertexShader,kt=_.fragmentShader;let Ue=a.getVertexShaderStage(_),be=a.getFragmentShaderStage(_);a.update(_,Ue,be),Xt=Ue.id,U=be.id}let k=i.getRenderTarget(),rt=i.state.buffers.depth.getReversed(),gt=D.isInstancedMesh===!0,ut=D.isBatchedMesh===!0,et=!!_.map,vt=!!_.matcap,K=!!j,nt=!!_.aoMap,ct=!!_.lightMap,ht=!!_.bumpMap&&_.wireframe===!1,yt=!!_.normalMap,Gt=!!_.displacementMap,Yt=!!_.emissiveMap,Kt=!!_.metalnessMap,te=!!_.roughnessMap,B=_.anisotropy>0,ve=_.clearcoat>0,ce=_.dispersion>0,L=_.retroreflectivity>0,E=_.iridescence>0,W=_.sheen>0,J=_.transmission>0,it=B&&!!_.anisotropyMap,_t=ve&&!!_.clearcoatMap,Mt=ve&&!!_.clearcoatNormalMap,st=ve&&!!_.clearcoatRoughnessMap,lt=E&&!!_.iridescenceMap,Et=E&&!!_.iridescenceThicknessMap,qt=W&&!!_.sheenColorMap,It=W&&!!_.sheenRoughnessMap,wt=!!_.specularMap,Zt=!!_.specularColorMap,jt=!!_.specularIntensityMap,oe=J&&!!_.transmissionMap,G=J&&!!_.thicknessMap,Tt=!!_.gradientMap,ot=!!_.alphaMap,At=_.alphaTest>0,Ut=!!_.alphaHash,ft=!!_.extensions,$t=jn;_.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&($t=i.toneMapping);let Vt={shaderID:$,shaderType:_.type,shaderName:_.name,vertexShader:Jt,fragmentShader:kt,defines:_.defines,customVertexShaderID:Xt,customFragmentShaderID:U,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:ut,batchingColor:ut&&D._colorsTexture!==null,instancing:gt,instancingColor:gt&&D.instanceColor!==null,instancingMorph:gt&&D.morphTexture!==null,outputColorSpace:k===null?i.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:me.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:et,matcap:vt,envMap:K,envMapMode:K&&j.mapping,envMapCubeUVHeight:V,aoMap:nt,lightMap:ct,bumpMap:ht,normalMap:yt,displacementMap:Gt,emissiveMap:Yt,normalMapObjectSpace:yt&&_.normalMapType===jf,normalMapTangentSpace:yt&&_.normalMapType===Do,packedNormalMap:yt&&_.normalMapType===Do&&Q_(_.normalMap.format),metalnessMap:Kt,roughnessMap:te,anisotropy:B,anisotropyMap:it,clearcoat:ve,clearcoatMap:_t,clearcoatNormalMap:Mt,clearcoatRoughnessMap:st,dispersion:ce,retroreflection:L,iridescence:E,iridescenceMap:lt,iridescenceThicknessMap:Et,sheen:W,sheenColorMap:qt,sheenRoughnessMap:It,specularMap:wt,specularColorMap:Zt,specularIntensityMap:jt,transmission:J,transmissionMap:oe,thicknessMap:G,gradientMap:Tt,opaque:_.transparent===!1&&_.blending===Ki&&_.alphaToCoverage===!1,alphaMap:ot,alphaTest:At,alphaHash:Ut,combine:_.combine,mapUv:et&&p(_.map.channel),aoMapUv:nt&&p(_.aoMap.channel),lightMapUv:ct&&p(_.lightMap.channel),bumpMapUv:ht&&p(_.bumpMap.channel),normalMapUv:yt&&p(_.normalMap.channel),displacementMapUv:Gt&&p(_.displacementMap.channel),emissiveMapUv:Yt&&p(_.emissiveMap.channel),metalnessMapUv:Kt&&p(_.metalnessMap.channel),roughnessMapUv:te&&p(_.roughnessMap.channel),anisotropyMapUv:it&&p(_.anisotropyMap.channel),clearcoatMapUv:_t&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:Mt&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:It&&p(_.sheenRoughnessMap.channel),specularMapUv:wt&&p(_.specularMap.channel),specularColorMapUv:Zt&&p(_.specularColorMap.channel),specularIntensityMapUv:jt&&p(_.specularIntensityMap.channel),transmissionMapUv:oe&&p(_.transmissionMap.channel),thicknessMapUv:G&&p(_.thicknessMap.channel),alphaMapUv:ot&&p(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(yt||B),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!P.attributes.uv&&(et||ot),fog:!!C,useFog:_.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&yt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:rt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:pt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:$t,decodeVideoTexture:et&&_.map.isVideoTexture===!0&&me.getTransfer(_.map.colorSpace)===we,decodeVideoTextureEmissive:Yt&&_.emissiveMap.isVideoTexture===!0&&me.getTransfer(_.emissiveMap.colorSpace)===we,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===$e,flipSided:_.side===sn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ft&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&_.extensions.multiDraw===!0||ut)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Vt.vertexUv1s=l.has(1),Vt.vertexUv2s=l.has(2),Vt.vertexUv3s=l.has(3),l.clear(),Vt}function m(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let A in _.defines)b.push(A),b.push(_.defines[A]);return _.isRawShaderMaterial===!1&&(x(b,_),S(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function x(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function S(_,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function w(_){let b=d[_.type],A;if(b){let I=mi[b];A=gd.clone(I.uniforms)}else A=_.uniforms;return A}function g(_,b){let A=u.get(b);return A!==void 0?++A.usedTimes:(A=new K_(i,b,_,s),c.push(A),u.set(b,A)),A}function M(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function v(_){a.remove(_)}function T(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:w,acquireProgram:g,releaseProgram:M,releaseShaderCache:v,programs:c,dispose:T}}function e1(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function n1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function zd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Fd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,y,m,x){let S=i[t];return S===void 0?(S={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:y,renderOrder:f.renderOrder,z:m,group:x},i[t]=S):(S.id=f.id,S.object=f,S.geometry=d,S.material=p,S.materialVariant=o(f),S.groupOrder=y,S.renderOrder=f.renderOrder,S.z=m,S.group=x),t++,S}function l(f,d,p,y,m,x,S){S.reversedDepth===!0&&(m=-m);let w=a(f,d,p,y,m,x);p.transmission>0?n.push(w):p.transparent===!0?s.push(w):e.push(w)}function c(f,d,p,y,m,x){let S=a(f,d,p,y,m,x);p.transmission>0?n.unshift(S):p.transparent===!0?s.unshift(S):e.unshift(S)}function u(f,d){e.length>1&&e.sort(f||n1),n.length>1&&n.sort(d||zd),s.length>1&&s.sort(d||zd)}function h(){for(let f=t,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function i1(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Fd,i.set(n,[o])):s>=r.length?(o=new Fd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function s1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new z,color:new Ot};break;case"SpotLight":e={position:new z,direction:new z,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function r1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var o1=0;function a1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function l1(i){let t=new s1,e=r1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let s=new z,r=new Se,o=new Se;function a(c){let u=0,h=0,f=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let d=0,p=0,y=0,m=0,x=0,S=0,w=0,g=0,M=0,v=0,T=0,_=0,b=0,A=0;c.sort(a1);for(let D=0,N=c.length;D<N;D++){let C=c[D],P=C.color,F=C.intensity,O=C.distance,j=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===es?j=C.shadow.map.texture:j=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=P.r*F,h+=P.g*F,f+=P.b*F;else if(C.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(C.sh.coefficients[V],F);A++}else if(C.isSunLight){let V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let $=C.shadow,Z=e.get(C);Z.shadowIntensity=$.intensity,Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[p]=Z,n.sunShadowMap[p]=j;let at=$.getViewportCount();for(let pt=0;pt<at;pt++)n.sunShadowMatrix[y+pt]=$.getMatrix(pt),n.sunShadowCascade[y+pt]=$._cascadeData[pt];y+=at,p++}n.sun[d]=V,d++}else if(C.isDirectionalLight){let V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let $=C.shadow,Z=e.get(C);Z.shadowIntensity=$.intensity,Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,n.directionalShadow[m]=Z,n.directionalShadowMap[m]=j,n.directionalShadowMatrix[m]=C.shadow.matrix,M++}n.directional[m]=V,m++}else if(C.isSpotLight){let V=t.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(P).multiplyScalar(F),V.distance=O,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,n.spot[S]=V;let $=C.shadow;if(C.map&&(n.spotLightMap[_]=C.map,_++,$.updateMatrices(C),C.castShadow&&b++),n.spotLightMatrix[S]=$.matrix,C.castShadow){let Z=e.get(C);Z.shadowIntensity=$.intensity,Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,n.spotShadow[S]=Z,n.spotShadowMap[S]=j,T++}S++}else if(C.isRectAreaLight){let V=t.get(C);V.color.copy(P).multiplyScalar(F),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),n.rectArea[w]=V,w++}else if(C.isPointLight){let V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){let $=C.shadow,Z=e.get(C);Z.shadowIntensity=$.intensity,Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,Z.shadowCameraNear=$.camera.near,Z.shadowCameraFar=$.camera.far,n.pointShadow[x]=Z,n.pointShadowMap[x]=j,n.pointShadowMatrix[x]=C.shadow.matrix,v++}n.point[x]=V,x++}else if(C.isHemisphereLight){let V=t.get(C);V.skyColor.copy(C.color).multiplyScalar(F),V.groundColor.copy(C.groundColor).multiplyScalar(F),n.hemi[g]=V,g++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pt.LTC_FLOAT_1,n.rectAreaLTC2=Pt.LTC_FLOAT_2):(n.rectAreaLTC1=Pt.LTC_HALF_1,n.rectAreaLTC2=Pt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let I=n.hash;(I.sunLength!==d||I.directionalLength!==m||I.pointLength!==x||I.spotLength!==S||I.rectAreaLength!==w||I.hemiLength!==g||I.numSunShadows!==p||I.numDirectionalShadows!==M||I.numPointShadows!==v||I.numSpotShadows!==T||I.numSpotMaps!==_||I.numLightProbes!==A)&&(n.sun.length=d,n.directional.length=m,n.spot.length=S,n.rectArea.length=w,n.point.length=x,n.hemi.length=g,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.pointShadowMatrix.length=v,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+_-b,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=A,I.sunLength=d,I.directionalLength=m,I.pointLength=x,I.spotLength=S,I.rectAreaLength=w,I.hemiLength=g,I.numSunShadows=p,I.numDirectionalShadows=M,I.numPointShadows=v,I.numSpotShadows=T,I.numSpotMaps=_,I.numLightProbes=A,n.version=o1++)}function l(c,u){let h=0,f=0,d=0,p=0,y=0,m=0,x=u.matrixWorldInverse;for(let S=0,w=c.length;S<w;S++){let g=c[S];if(g.isSunLight){let M=n.sun[h];M.direction.setFromMatrixPosition(g.matrixWorld),M.direction.transformDirection(x),h++}else if(g.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),f++}else if(g.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),p++}else if(g.isRectAreaLight){let M=n.rectArea[y];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(x),o.identity(),r.copy(g.matrixWorld),r.premultiply(x),o.extractRotation(r),M.halfWidth.set(g.width*.5,0,0),M.halfHeight.set(0,g.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),y++}else if(g.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(x),d++}else if(g.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(g.matrixWorld),M.direction.transformDirection(x),m++}}}return{setup:a,setupView:l,state:n}}function Od(i){let t=new l1(i),e=[],n=[],s=[];function r(f){h.camera=f,e.length=0,n.length=0,s.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function l(f){s.push(f)}function c(){t.setup(e)}function u(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function c1(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Od(i),t.set(s,[a])):r>=o.length?(a=new Od(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var h1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,f1=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],d1=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Bd=new Se,zo=new z,iu=new z;function p1(i,t,e){let n=new lr,s=new xt,r=new xt,o=new Oe,a=new Qa,l=new tl,c={},u=e.maxTextureSize,h={[Ji]:sn,[sn]:Ji,[$e]:$e},f=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:h1,fragmentShader:u1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Pe;p.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new tt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eo;let x=this.type;this.render=function(v,T,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;this.type===pl&&(Qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Eo);let b=i.getRenderTarget(),A=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),D=i.state;D.setBlending(di),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let N=x!==this.type;N&&T.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(P=>P.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,P=v.length;C<P;C++){let F=v[C],O=F.shadow;if(O===void 0){Qt("WebGLShadowMap:",F,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let j=O.getFrameExtents();s.multiply(j),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,O.mapSize.y=r.y));let V=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=V,O.map===null||N===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===mr){if(F.isPointLight){Qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Tn(s.x,s.y,{format:es,type:ti,minFilter:un,magFilter:un,generateMipmaps:!1}),O.map.texture.name=F.name+".shadowMap",O.map.depthTexture=new Vi(s.x,s.y,Bn),O.map.depthTexture.name=F.name+".shadowMapDepth",O.map.depthTexture.format=hi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=ln,O.map.depthTexture.magFilter=ln}else F.isPointLight?(O.map=new oc(s.x),O.map.depthTexture=new Wa(s.x,Qn)):(O.map=new Tn(s.x,s.y),O.map.depthTexture=new Vi(s.x,s.y,Qn)),O.map.depthTexture.name=F.name+".shadowMap",O.map.depthTexture.format=hi,this.type===Eo?(O.map.depthTexture.compareFunction=V?ic:nc,O.map.depthTexture.minFilter=un,O.map.depthTexture.magFilter=un):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=ln,O.map.depthTexture.magFilter=ln);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let $=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();F.isPointLight!==!0&&O.updateMatrices(F,_);for(let Z=0;Z<$;Z++){let at=O.getCamera(Z);if(F.isPointLight){let pt=O.camera,Jt=O.matrix,kt=F.distance||pt.far;kt!==pt.far&&(pt.far=kt,pt.updateProjectionMatrix()),zo.setFromMatrixPosition(F.matrixWorld),pt.position.copy(zo),iu.copy(pt.position),iu.add(f1[Z]),pt.up.copy(d1[Z]),pt.lookAt(iu),pt.updateMatrixWorld(),Jt.makeTranslation(-zo.x,-zo.y,-zo.z),Bd.multiplyMatrices(pt.projectionMatrix,pt.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Bd,pt.coordinateSystem,pt.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,Z),i.clear();else{Z===0&&(i.setRenderTarget(O.map),i.clear());let pt=O.getViewport(Z);o.set(r.x*pt.x,r.y*pt.y,r.x*pt.z,r.y*pt.w),D.viewport(o)}n=O.getFrustum(Z),g(T,_,at,F,this.type)}O.isPointLightShadow!==!0&&this.type===mr&&S(O,_),O.needsUpdate=!1}x=this.type,m.needsUpdate=!1,i.setRenderTarget(b,A,I)};function S(v,T){let _=t.update(y);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,d.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),v.mapPass===null?v.mapPass=new Tn(s.x,s.y,{format:es,type:ti}):(v.mapPass.width!==v.map.width||v.mapPass.height!==v.map.height)&&v.mapPass.setSize(v.map.width,v.map.height),f.uniforms.shadow_pass.value=v.map.depthTexture,f.uniforms.resolution.value.set(v.map.width,v.map.height),f.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(T,null,_,f,y,null),d.uniforms.shadow_pass.value=v.mapPass.texture,d.uniforms.resolution.value.set(v.map.width,v.map.height),d.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(T,null,_,d,y,null)}function w(v,T,_,b){let A=null,I=_.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(I!==void 0)A=I;else if(A=_.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let D=A.uuid,N=T.uuid,C=c[D];C===void 0&&(C={},c[D]=C);let P=C[N];P===void 0&&(P=A.clone(),C[N]=P,T.addEventListener("dispose",M)),A=P}if(A.visible=T.visible,A.wireframe=T.wireframe,b===mr?A.side=T.shadowSide!==null?T.shadowSide:T.side:A.side=T.shadowSide!==null?T.shadowSide:h[T.side],A.alphaMap=T.alphaMap,A.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,A.map=T.map,A.clipShadows=T.clipShadows,A.clippingPlanes=T.clippingPlanes,A.clipIntersection=T.clipIntersection,A.displacementMap=T.displacementMap,A.displacementScale=T.displacementScale,A.displacementBias=T.displacementBias,A.wireframeLinewidth=T.wireframeLinewidth,A.linewidth=T.linewidth,_.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let D=i.properties.get(A);D.light=_}return A}function g(v,T,_,b,A){if(v.visible===!1)return;if(v.layers.test(T.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&A===mr)&&(!v.frustumCulled||v.intersectsFrustum(n))){v.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,v.matrixWorld);let N=t.update(v),C=v.material;if(Array.isArray(C)){let P=N.groups;for(let F=0,O=P.length;F<O;F++){let j=P[F],V=C[j.materialIndex];if(V&&V.visible){let $=w(v,V,b,A);v.onBeforeShadow(i,v,T,_,N,$,j),i.renderBufferDirect(_,null,N,$,v,j),v.onAfterShadow(i,v,T,_,N,$,j)}}}else if(C.visible){let P=w(v,C,b,A);v.onBeforeShadow(i,v,T,_,N,P,null),i.renderBufferDirect(_,null,N,P,v,null),v.onAfterShadow(i,v,T,_,N,P,null)}}let D=v.children;for(let N=0,C=D.length;N<C;N++)g(D[N],T,_,b,A)}function M(v){v.target.removeEventListener("dispose",M);for(let _ in c){let b=c[_],A=v.target.uuid;A in b&&(b[A].dispose(),delete b[A])}}}function m1(i,t){function e(){let G=!1,Tt=new Oe,ot=null,At=new Oe(0,0,0,0);return{setMask:function(Ut){ot!==Ut&&!G&&(i.colorMask(Ut,Ut,Ut,Ut),ot=Ut)},setLocked:function(Ut){G=Ut},setClear:function(Ut,ft,$t,Vt,Ue){Ue===!0&&(Ut*=Vt,ft*=Vt,$t*=Vt),Tt.set(Ut,ft,$t,Vt),At.equals(Tt)===!1&&(i.clearColor(Ut,ft,$t,Vt),At.copy(Tt))},reset:function(){G=!1,ot=null,At.set(-1,0,0,0)}}}function n(){let G=!1,Tt=!1,ot=null,At=null,Ut=null;return{setReversed:function(ft){if(Tt!==ft){let $t=t.get("EXT_clip_control");ft?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT),Tt=ft;let Vt=Ut;Ut=null,this.setClear(Vt)}},getReversed:function(){return Tt},setTest:function(ft){ft?k(i.DEPTH_TEST):rt(i.DEPTH_TEST)},setMask:function(ft){ot!==ft&&!G&&(i.depthMask(ft),ot=ft)},setFunc:function(ft){if(Tt&&(ft=cd[ft]),At!==ft){switch(ft){case La:i.depthFunc(i.NEVER);break;case Da:i.depthFunc(i.ALWAYS);break;case Na:i.depthFunc(i.LESS);break;case Ks:i.depthFunc(i.LEQUAL);break;case Ua:i.depthFunc(i.EQUAL);break;case za:i.depthFunc(i.GEQUAL);break;case Fa:i.depthFunc(i.GREATER);break;case Oa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}At=ft}},setLocked:function(ft){G=ft},setClear:function(ft){Ut!==ft&&(Ut=ft,Tt&&(ft=1-ft),i.clearDepth(ft))},reset:function(){G=!1,ot=null,At=null,Ut=null,Tt=!1}}}function s(){let G=!1,Tt=null,ot=null,At=null,Ut=null,ft=null,$t=null,Vt=null,Ue=null;return{setTest:function(be){G||(be?k(i.STENCIL_TEST):rt(i.STENCIL_TEST))},setMask:function(be){Tt!==be&&!G&&(i.stencilMask(be),Tt=be)},setFunc:function(be,Wn,ri){(ot!==be||At!==Wn||Ut!==ri)&&(i.stencilFunc(be,Wn,ri),ot=be,At=Wn,Ut=ri)},setOp:function(be,Wn,ri){(ft!==be||$t!==Wn||Vt!==ri)&&(i.stencilOp(be,Wn,ri),ft=be,$t=Wn,Vt=ri)},setLocked:function(be){G=be},setClear:function(be){Ue!==be&&(i.clearStencil(be),Ue=be)},reset:function(){G=!1,Tt=null,ot=null,At=null,Ut=null,ft=null,$t=null,Vt=null,Ue=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},f={},d=new WeakMap,p=[],y=null,m=!1,x=null,S=null,w=null,g=null,M=null,v=null,T=null,_=new Ot(0,0,0),b=0,A=!1,I=null,D=null,N=null,C=null,P=null,F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,j=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(V)[1]),O=j>=1):V.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),O=j>=2);let $=null,Z={},at=i.getParameter(i.SCISSOR_BOX),pt=i.getParameter(i.VIEWPORT),Jt=new Oe().fromArray(at),kt=new Oe().fromArray(pt);function Xt(G,Tt,ot,At){let Ut=new Uint8Array(4),ft=i.createTexture();i.bindTexture(G,ft),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<ot;$t++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Tt,0,i.RGBA,1,1,At,0,i.RGBA,i.UNSIGNED_BYTE,Ut):i.texImage2D(Tt+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ut);return ft}let U={};U[i.TEXTURE_2D]=Xt(i.TEXTURE_2D,i.TEXTURE_2D,1),U[i.TEXTURE_CUBE_MAP]=Xt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),U[i.TEXTURE_2D_ARRAY]=Xt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),U[i.TEXTURE_3D]=Xt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),k(i.DEPTH_TEST),o.setFunc(Ks),ht(!1),yt(Mh),k(i.CULL_FACE),nt(di);function k(G){u[G]!==!0&&(i.enable(G),u[G]=!0)}function rt(G){u[G]!==!1&&(i.disable(G),u[G]=!1)}function gt(G,Tt){return f[G]!==Tt?(i.bindFramebuffer(G,Tt),f[G]=Tt,G===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Tt),G===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Tt),!0):!1}function ut(G,Tt){let ot=p,At=!1;if(G){ot=d.get(Tt),ot===void 0&&(ot=[],d.set(Tt,ot));let Ut=G.textures;if(ot.length!==Ut.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,$t=Ut.length;ft<$t;ft++)ot[ft]=i.COLOR_ATTACHMENT0+ft;ot.length=Ut.length,At=!0}}else ot[0]!==i.BACK&&(ot[0]=i.BACK,At=!0);At&&i.drawBuffers(ot)}function et(G){return y!==G?(i.useProgram(G),y=G,!0):!1}let vt={[_s]:i.FUNC_ADD,[Pf]:i.FUNC_SUBTRACT,[Lf]:i.FUNC_REVERSE_SUBTRACT};vt[Df]=i.MIN,vt[Nf]=i.MAX;let K={[Uf]:i.ZERO,[zf]:i.ONE,[Ff]:i.SRC_COLOR,[Eh]:i.SRC_ALPHA,[Vf]:i.SRC_ALPHA_SATURATE,[kf]:i.DST_COLOR,[Bf]:i.DST_ALPHA,[Of]:i.ONE_MINUS_SRC_COLOR,[wh]:i.ONE_MINUS_SRC_ALPHA,[Gf]:i.ONE_MINUS_DST_COLOR,[Hf]:i.ONE_MINUS_DST_ALPHA,[Wf]:i.CONSTANT_COLOR,[Xf]:i.ONE_MINUS_CONSTANT_COLOR,[Yf]:i.CONSTANT_ALPHA,[qf]:i.ONE_MINUS_CONSTANT_ALPHA};function nt(G,Tt,ot,At,Ut,ft,$t,Vt,Ue,be){if(G===di){m===!0&&(rt(i.BLEND),m=!1);return}if(m===!1&&(k(i.BLEND),m=!0),G!==If){if(G!==x||be!==A){if((S!==_s||M!==_s)&&(i.blendEquation(i.FUNC_ADD),S=_s,M=_s),be)switch(G){case Ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ai:i.blendFunc(i.ONE,i.ONE);break;case Sh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ee("WebGLState: Invalid blending: ",G);break}else switch(G){case Ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Sh:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bh:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",G);break}w=null,g=null,v=null,T=null,_.set(0,0,0),b=0,x=G,A=be}return}Ut=Ut||Tt,ft=ft||ot,$t=$t||At,(Tt!==S||Ut!==M)&&(i.blendEquationSeparate(vt[Tt],vt[Ut]),S=Tt,M=Ut),(ot!==w||At!==g||ft!==v||$t!==T)&&(i.blendFuncSeparate(K[ot],K[At],K[ft],K[$t]),w=ot,g=At,v=ft,T=$t),(Vt.equals(_)===!1||Ue!==b)&&(i.blendColor(Vt.r,Vt.g,Vt.b,Ue),_.copy(Vt),b=Ue),x=G,A=!1}function ct(G,Tt){G.side===$e?rt(i.CULL_FACE):k(i.CULL_FACE);let ot=G.side===sn;Tt&&(ot=!ot),ht(ot),G.blending===Ki&&G.transparent===!1?nt(di):nt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let At=G.stencilWrite;a.setTest(At),At&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Yt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?k(i.SAMPLE_ALPHA_TO_COVERAGE):rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(G){I!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),I=G)}function yt(G){G!==Rf?(k(i.CULL_FACE),G!==D&&(G===Mh?i.cullFace(i.BACK):G===Cf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):rt(i.CULL_FACE),D=G}function Gt(G){G!==N&&(O&&i.lineWidth(G),N=G)}function Yt(G,Tt,ot){G?(k(i.POLYGON_OFFSET_FILL),(C!==Tt||P!==ot)&&(C=Tt,P=ot,o.getReversed()&&(Tt=-Tt),i.polygonOffset(Tt,ot))):rt(i.POLYGON_OFFSET_FILL)}function Kt(G){G?k(i.SCISSOR_TEST):rt(i.SCISSOR_TEST)}function te(G){G===void 0&&(G=i.TEXTURE0+F-1),$!==G&&(i.activeTexture(G),$=G)}function B(G,Tt,ot){ot===void 0&&($===null?ot=i.TEXTURE0+F-1:ot=$);let At=Z[ot];At===void 0&&(At={type:void 0,texture:void 0},Z[ot]=At),(At.type!==G||At.texture!==Tt)&&($!==ot&&(i.activeTexture(ot),$=ot),i.bindTexture(G,Tt||U[G]),At.type=G,At.texture=Tt)}function ve(){let G=Z[$];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ce(){try{i.compressedTexImage2D(...arguments)}catch(G){ee("WebGLState:",G)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(G){ee("WebGLState:",G)}}function E(){try{i.texSubImage2D(...arguments)}catch(G){ee("WebGLState:",G)}}function W(){try{i.texSubImage3D(...arguments)}catch(G){ee("WebGLState:",G)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(G){ee("WebGLState:",G)}}function it(){try{i.compressedTexSubImage3D(...arguments)}catch(G){ee("WebGLState:",G)}}function _t(){try{i.texStorage2D(...arguments)}catch(G){ee("WebGLState:",G)}}function Mt(){try{i.texStorage3D(...arguments)}catch(G){ee("WebGLState:",G)}}function st(){try{i.texImage2D(...arguments)}catch(G){ee("WebGLState:",G)}}function lt(){try{i.texImage3D(...arguments)}catch(G){ee("WebGLState:",G)}}function Et(G){return h[G]!==void 0?h[G]:i.getParameter(G)}function qt(G,Tt){h[G]!==Tt&&(i.pixelStorei(G,Tt),h[G]=Tt)}function It(G){Jt.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),Jt.copy(G))}function wt(G){kt.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),kt.copy(G))}function Zt(G,Tt){let ot=c.get(Tt);ot===void 0&&(ot=new WeakMap,c.set(Tt,ot));let At=ot.get(G);At===void 0&&(At=i.getUniformBlockIndex(Tt,G.name),ot.set(G,At))}function jt(G,Tt){let At=c.get(Tt).get(G);l.get(Tt)!==At&&(i.uniformBlockBinding(Tt,At,G.__bindingPointIndex),l.set(Tt,At))}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},$=null,Z={},f={},d=new WeakMap,p=[],y=null,m=!1,x=null,S=null,w=null,g=null,M=null,v=null,T=null,_=new Ot(0,0,0),b=0,A=!1,I=null,D=null,N=null,C=null,P=null,Jt.set(0,0,i.canvas.width,i.canvas.height),kt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:k,disable:rt,bindFramebuffer:gt,drawBuffers:ut,useProgram:et,setBlending:nt,setMaterial:ct,setFlipSided:ht,setCullFace:yt,setLineWidth:Gt,setPolygonOffset:Yt,setScissorTest:Kt,activeTexture:te,bindTexture:B,unbindTexture:ve,compressedTexImage2D:ce,compressedTexImage3D:L,texImage2D:st,texImage3D:lt,pixelStorei:qt,getParameter:Et,updateUBOMapping:Zt,uniformBlockBinding:jt,texStorage2D:_t,texStorage3D:Mt,texSubImage2D:E,texSubImage3D:W,compressedTexSubImage2D:J,compressedTexSubImage3D:it,scissor:It,viewport:wt,reset:oe}}function g1(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xt,u=new WeakMap,h=new Set,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(L,E){return p?new OffscreenCanvas(L,E):$r("canvas")}function m(L,E,W){let J=1,it=ce(L);if((it.width>W||it.height>W)&&(J=W/Math.max(it.width,it.height)),J<1)if(typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&L instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&L instanceof ImageBitmap||typeof VideoFrame!="undefined"&&L instanceof VideoFrame){let _t=Math.floor(J*it.width),Mt=Math.floor(J*it.height);f===void 0&&(f=y(_t,Mt));let st=E?y(_t,Mt):f;return st.width=_t,st.height=Mt,st.getContext("2d").drawImage(L,0,0,_t,Mt),Qt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+_t+"x"+Mt+")."),st}else return"data"in L&&Qt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),L;return L}function x(L){return L.generateMipmaps}function S(L){i.generateMipmap(L)}function w(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function g(L,E,W,J,it,_t=!1){if(L!==null){if(i[L]!==void 0)return i[L];Qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Mt;J&&(Mt=t.get("EXT_texture_norm16"),Mt||Qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let st=E;if(E===i.RED&&(W===i.FLOAT&&(st=i.R32F),W===i.HALF_FLOAT&&(st=i.R16F),W===i.UNSIGNED_BYTE&&(st=i.R8),W===i.UNSIGNED_SHORT&&Mt&&(st=Mt.R16_EXT),W===i.SHORT&&Mt&&(st=Mt.R16_SNORM_EXT)),E===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(st=i.R8UI),W===i.UNSIGNED_SHORT&&(st=i.R16UI),W===i.UNSIGNED_INT&&(st=i.R32UI),W===i.BYTE&&(st=i.R8I),W===i.SHORT&&(st=i.R16I),W===i.INT&&(st=i.R32I)),E===i.RG&&(W===i.FLOAT&&(st=i.RG32F),W===i.HALF_FLOAT&&(st=i.RG16F),W===i.UNSIGNED_BYTE&&(st=i.RG8),W===i.UNSIGNED_SHORT&&Mt&&(st=Mt.RG16_EXT),W===i.SHORT&&Mt&&(st=Mt.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(st=i.RG8UI),W===i.UNSIGNED_SHORT&&(st=i.RG16UI),W===i.UNSIGNED_INT&&(st=i.RG32UI),W===i.BYTE&&(st=i.RG8I),W===i.SHORT&&(st=i.RG16I),W===i.INT&&(st=i.RG32I)),E===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(st=i.RGB8UI),W===i.UNSIGNED_SHORT&&(st=i.RGB16UI),W===i.UNSIGNED_INT&&(st=i.RGB32UI),W===i.BYTE&&(st=i.RGB8I),W===i.SHORT&&(st=i.RGB16I),W===i.INT&&(st=i.RGB32I)),E===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(st=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(st=i.RGBA16UI),W===i.UNSIGNED_INT&&(st=i.RGBA32UI),W===i.BYTE&&(st=i.RGBA8I),W===i.SHORT&&(st=i.RGBA16I),W===i.INT&&(st=i.RGBA32I)),E===i.RGB&&(W===i.UNSIGNED_SHORT&&Mt&&(st=Mt.RGB16_EXT),W===i.SHORT&&Mt&&(st=Mt.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(st=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(st=i.R11F_G11F_B10F)),E===i.RGBA){let lt=_t?Zr:me.getTransfer(it);W===i.FLOAT&&(st=i.RGBA32F),W===i.HALF_FLOAT&&(st=i.RGBA16F),W===i.UNSIGNED_BYTE&&(st=lt===we?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&Mt&&(st=Mt.RGBA16_EXT),W===i.SHORT&&Mt&&(st=Mt.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function M(L,E){let W;return L?E===null||E===Qn||E===yr?W=i.DEPTH24_STENCIL8:E===Bn?W=i.DEPTH32F_STENCIL8:E===xr&&(W=i.DEPTH24_STENCIL8,Qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Qn||E===yr?W=i.DEPTH_COMPONENT24:E===Bn?W=i.DEPTH_COMPONENT32F:E===xr&&(W=i.DEPTH_COMPONENT16),W}function v(L,E){return x(L)===!0||L.isFramebufferTexture&&L.minFilter!==ln&&L.minFilter!==un?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function T(L){let E=L.target;E.removeEventListener("dispose",T),b(E),E.isVideoTexture&&u.delete(E),E.isHTMLTexture&&h.delete(E)}function _(L){let E=L.target;E.removeEventListener("dispose",_),I(E)}function b(L){let E=n.get(L);if(E.__webglInit===void 0)return;let W=L.source,J=d.get(W);if(J){let it=J[E.__cacheKey];it.usedTimes--,it.usedTimes===0&&A(L),Object.keys(J).length===0&&d.delete(W)}n.remove(L)}function A(L){let E=n.get(L);i.deleteTexture(E.__webglTexture);let W=L.source,J=d.get(W);delete J[E.__cacheKey],o.memory.textures--}function I(L){let E=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let it=0;it<E.__webglFramebuffer[J].length;it++)i.deleteFramebuffer(E.__webglFramebuffer[J][it]);else i.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)i.deleteFramebuffer(E.__webglFramebuffer[J]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let W=L.textures;for(let J=0,it=W.length;J<it;J++){let _t=n.get(W[J]);_t.__webglTexture&&(i.deleteTexture(_t.__webglTexture),o.memory.textures--),n.remove(W[J])}n.remove(L)}let D=0;function N(){D=0}function C(){return D}function P(L){D=L}function F(){let L=D;return L>=s.maxTextures&&Qt("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,L}function O(L){let E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function j(L,E){let W=n.get(L);if(L.isVideoTexture&&B(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&W.__version!==L.version){let J=L.image;if(J===null)Qt("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Qt("WebGLRenderer: Texture marked for update but image is incomplete");else{rt(W,L,E);return}}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+E)}function V(L,E){let W=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){rt(W,L,E);return}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+E)}function $(L,E){let W=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){rt(W,L,E);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+E)}function Z(L,E){let W=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&W.__version!==L.version){gt(W,L,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+E)}let at={[js]:i.REPEAT,[li]:i.CLAMP_TO_EDGE,[Ba]:i.MIRRORED_REPEAT},pt={[ln]:i.NEAREST,[Jf]:i.NEAREST_MIPMAP_NEAREST,[To]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[yl]:i.LINEAR_MIPMAP_NEAREST,[Qi]:i.LINEAR_MIPMAP_LINEAR},Jt={[td]:i.NEVER,[rd]:i.ALWAYS,[ed]:i.LESS,[nc]:i.LEQUAL,[nd]:i.EQUAL,[ic]:i.GEQUAL,[id]:i.GREATER,[sd]:i.NOTEQUAL};function kt(L,E){if(E.type===Bn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===un||E.magFilter===yl||E.magFilter===To||E.magFilter===Qi||E.minFilter===un||E.minFilter===yl||E.minFilter===To||E.minFilter===Qi)&&Qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,at[E.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,at[E.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,at[E.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,pt[E.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,pt[E.minFilter]),E.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Jt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ln||E.minFilter!==To&&E.minFilter!==Qi||E.type===Bn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Xt(L,E){let W=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",T));let J=E.source,it=d.get(J);it===void 0&&(it={},d.set(J,it));let _t=O(E);if(_t!==L.__cacheKey){it[_t]===void 0&&(it[_t]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),it[_t].usedTimes++;let Mt=it[L.__cacheKey];Mt!==void 0&&(it[L.__cacheKey].usedTimes--,Mt.usedTimes===0&&A(E)),L.__cacheKey=_t,L.__webglTexture=it[_t].texture}return W}function U(L,E,W){return Math.floor(Math.floor(L/W)/E)}function k(L,E,W,J){let _t=L.updateRanges;if(_t.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,W,J,E.data);else{_t.sort((qt,It)=>qt.start-It.start);let Mt=0;for(let qt=1;qt<_t.length;qt++){let It=_t[Mt],wt=_t[qt],Zt=It.start+It.count,jt=U(wt.start,E.width,4),oe=U(It.start,E.width,4);wt.start<=Zt+1&&jt===oe&&U(wt.start+wt.count-1,E.width,4)===jt?It.count=Math.max(It.count,wt.start+wt.count-It.start):(++Mt,_t[Mt]=wt)}_t.length=Mt+1;let st=e.getParameter(i.UNPACK_ROW_LENGTH),lt=e.getParameter(i.UNPACK_SKIP_PIXELS),Et=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let qt=0,It=_t.length;qt<It;qt++){let wt=_t[qt],Zt=Math.floor(wt.start/4),jt=Math.ceil(wt.count/4),oe=Zt%E.width,G=Math.floor(Zt/E.width),Tt=jt,ot=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,oe),e.pixelStorei(i.UNPACK_SKIP_ROWS,G),e.texSubImage2D(i.TEXTURE_2D,0,oe,G,Tt,ot,W,J,E.data)}L.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,st),e.pixelStorei(i.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Et)}}function rt(L,E,W){let J=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=i.TEXTURE_3D);let it=Xt(L,E),_t=E.source;e.bindTexture(J,L.__webglTexture,i.TEXTURE0+W);let Mt=n.get(_t);if(_t.version!==Mt.__version||it===!0){if(e.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap!="undefined"&&E.image instanceof ImageBitmap)===!1){let ot=me.getPrimaries(me.workingColorSpace),At=E.colorSpace===Ri?null:me.getPrimaries(E.colorSpace),Ut=E.colorSpace===Ri||ot===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut)}e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let lt=m(E.image,!1,s.maxTextureSize);lt=ve(E,lt);let Et=r.convert(E.format,E.colorSpace),qt=r.convert(E.type),It=g(E.internalFormat,Et,qt,E.normalized,E.colorSpace,E.isVideoTexture);kt(J,E);let wt,Zt=E.mipmaps,jt=E.isVideoTexture!==!0,oe=Mt.__version===void 0||it===!0,G=_t.dataReady,Tt=v(E,lt);if(E.isDepthTexture)It=M(E.format===ts,E.type),oe&&(jt?e.texStorage2D(i.TEXTURE_2D,1,It,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,It,lt.width,lt.height,0,Et,qt,null));else if(E.isDataTexture)if(Zt.length>0){jt&&oe&&e.texStorage2D(i.TEXTURE_2D,Tt,It,Zt[0].width,Zt[0].height);for(let ot=0,At=Zt.length;ot<At;ot++)wt=Zt[ot],jt?G&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,wt.width,wt.height,Et,qt,wt.data):e.texImage2D(i.TEXTURE_2D,ot,It,wt.width,wt.height,0,Et,qt,wt.data);E.generateMipmaps=!1}else jt?(oe&&e.texStorage2D(i.TEXTURE_2D,Tt,It,lt.width,lt.height),G&&k(E,lt,Et,qt)):e.texImage2D(i.TEXTURE_2D,0,It,lt.width,lt.height,0,Et,qt,lt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){jt&&oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,It,Zt[0].width,Zt[0].height,lt.depth);for(let ot=0,At=Zt.length;ot<At;ot++)if(wt=Zt[ot],E.format!==Hn)if(Et!==null)if(jt){if(G)if(E.layerUpdates.size>0){let Ut=Yh(wt.width,wt.height,E.format,E.type);for(let ft of E.layerUpdates){let $t=wt.data.subarray(ft*Ut/wt.data.BYTES_PER_ELEMENT,(ft+1)*Ut/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,ft,wt.width,wt.height,1,Et,$t)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,wt.width,wt.height,lt.depth,Et,wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,It,wt.width,wt.height,lt.depth,0,wt.data,0,0);else Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?G&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,wt.width,wt.height,lt.depth,Et,qt,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,It,wt.width,wt.height,lt.depth,0,Et,qt,wt.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{jt&&oe&&e.texStorage2D(i.TEXTURE_2D,Tt,It,Zt[0].width,Zt[0].height);for(let ot=0,At=Zt.length;ot<At;ot++)wt=Zt[ot],E.format!==Hn?Et!==null?jt?G&&e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,wt.width,wt.height,Et,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,It,wt.width,wt.height,0,wt.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?G&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,wt.width,wt.height,Et,qt,wt.data):e.texImage2D(i.TEXTURE_2D,ot,It,wt.width,wt.height,0,Et,qt,wt.data)}else if(E.isDataArrayTexture)if(jt){if(oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,It,lt.width,lt.height,lt.depth),G)if(E.layerUpdates.size>0){let ot=Yh(lt.width,lt.height,E.format,E.type);for(let At of E.layerUpdates){let Ut=lt.data.subarray(At*ot/lt.data.BYTES_PER_ELEMENT,(At+1)*ot/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,At,lt.width,lt.height,1,Et,qt,Ut)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Et,qt,lt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,lt.width,lt.height,lt.depth,0,Et,qt,lt.data);else if(E.isData3DTexture)jt?(oe&&e.texStorage3D(i.TEXTURE_3D,Tt,It,lt.width,lt.height,lt.depth),G&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Et,qt,lt.data)):e.texImage3D(i.TEXTURE_3D,0,It,lt.width,lt.height,lt.depth,0,Et,qt,lt.data);else if(E.isFramebufferTexture){if(oe)if(jt)e.texStorage2D(i.TEXTURE_2D,Tt,It,lt.width,lt.height);else{let ot=lt.width,At=lt.height;for(let Ut=0;Ut<Tt;Ut++)e.texImage2D(i.TEXTURE_2D,Ut,It,ot,At,0,Et,qt,null),ot>>=1,At>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let ot=i.canvas;if(ot.hasAttribute("layoutsubtree")||ot.setAttribute("layoutsubtree","true"),lt.parentNode!==ot){ot.appendChild(lt),h.add(E),ot.onpaint=At=>{let Ut=At.changedElements;for(let ft of h)Ut.includes(ft.image)&&(ft.needsUpdate=!0)},ot.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,lt);else{let Ut=i.RGBA,ft=i.RGBA,$t=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ut,ft,$t,lt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Zt.length>0){if(jt&&oe){let ot=ce(Zt[0]);e.texStorage2D(i.TEXTURE_2D,Tt,It,ot.width,ot.height)}for(let ot=0,At=Zt.length;ot<At;ot++)wt=Zt[ot],jt?G&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,Et,qt,wt):e.texImage2D(i.TEXTURE_2D,ot,It,Et,qt,wt);E.generateMipmaps=!1}else if(jt){if(oe){let ot=ce(lt);e.texStorage2D(i.TEXTURE_2D,Tt,It,ot.width,ot.height)}G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,qt,lt)}else e.texImage2D(i.TEXTURE_2D,0,It,Et,qt,lt);x(E)&&S(J),Mt.__version=_t.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function gt(L,E,W){if(E.image.length!==6)return;let J=Xt(L,E),it=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+W);let _t=n.get(it);if(it.version!==_t.__version||J===!0){e.activeTexture(i.TEXTURE0+W);let Mt=me.getPrimaries(me.workingColorSpace),st=E.colorSpace===Ri?null:me.getPrimaries(E.colorSpace),lt=E.colorSpace===Ri||Mt===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let Et=E.isCompressedTexture||E.image[0].isCompressedTexture,qt=E.image[0]&&E.image[0].isDataTexture,It=[];for(let ft=0;ft<6;ft++)!Et&&!qt?It[ft]=m(E.image[ft],!0,s.maxCubemapSize):It[ft]=qt?E.image[ft].image:E.image[ft],It[ft]=ve(E,It[ft]);let wt=It[0],Zt=r.convert(E.format,E.colorSpace),jt=r.convert(E.type),oe=g(E.internalFormat,Zt,jt,E.normalized,E.colorSpace),G=E.isVideoTexture!==!0,Tt=_t.__version===void 0||J===!0,ot=it.dataReady,At=v(E,wt);kt(i.TEXTURE_CUBE_MAP,E);let Ut;if(Et){G&&Tt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,At,oe,wt.width,wt.height);for(let ft=0;ft<6;ft++){Ut=It[ft].mipmaps;for(let $t=0;$t<Ut.length;$t++){let Vt=Ut[$t];E.format!==Hn?Zt!==null?G?ot&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,$t,0,0,Vt.width,Vt.height,Zt,Vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,$t,oe,Vt.width,Vt.height,0,Vt.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,$t,0,0,Vt.width,Vt.height,Zt,jt,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,$t,oe,Vt.width,Vt.height,0,Zt,jt,Vt.data)}}}else{if(Ut=E.mipmaps,G&&Tt){Ut.length>0&&At++;let ft=ce(It[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,At,oe,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(qt){G?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,It[ft].width,It[ft].height,Zt,jt,It[ft].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,oe,It[ft].width,It[ft].height,0,Zt,jt,It[ft].data);for(let $t=0;$t<Ut.length;$t++){let Ue=Ut[$t].image[ft].image;G?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,$t+1,0,0,Ue.width,Ue.height,Zt,jt,Ue.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,$t+1,oe,Ue.width,Ue.height,0,Zt,jt,Ue.data)}}else{G?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Zt,jt,It[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,oe,Zt,jt,It[ft]);for(let $t=0;$t<Ut.length;$t++){let Vt=Ut[$t];G?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,$t+1,0,0,Zt,jt,Vt.image[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,$t+1,oe,Zt,jt,Vt.image[ft])}}}x(E)&&S(i.TEXTURE_CUBE_MAP),_t.__version=it.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ut(L,E,W,J,it,_t){let Mt=r.convert(W.format,W.colorSpace),st=r.convert(W.type),lt=g(W.internalFormat,Mt,st,W.normalized,W.colorSpace),Et=n.get(E),qt=n.get(W);if(qt.__renderTarget=E,!Et.__hasExternalTextures){let It=Math.max(1,E.width>>_t),wt=Math.max(1,E.height>>_t);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,_t,lt,It,wt,E.depth,0,Mt,st,null):e.texImage2D(it,_t,lt,It,wt,0,Mt,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),te(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,it,qt.__webglTexture,0,Kt(E)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,it,qt.__webglTexture,_t),e.bindFramebuffer(i.FRAMEBUFFER,null)}function et(L,E,W){if(i.bindRenderbuffer(i.RENDERBUFFER,L),E.depthBuffer){let J=E.depthTexture,it=J&&J.isDepthTexture?J.type:null,_t=M(E.stencilBuffer,it),Mt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;te(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt(E),_t,E.width,E.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt(E),_t,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,_t,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,L)}else{let J=E.textures;for(let it=0;it<J.length;it++){let _t=J[it],Mt=r.convert(_t.format,_t.colorSpace),st=r.convert(_t.type),lt=g(_t.internalFormat,Mt,st,_t.normalized,_t.colorSpace);te(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt(E),lt,E.width,E.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt(E),lt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,lt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function vt(L,E,W){let J=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(E.depthTexture);if(it.__renderTarget=E,(!it.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),J){if(it.__webglInit===void 0&&(it.__webglInit=!0,E.depthTexture.addEventListener("dispose",T)),it.__webglTexture===void 0){it.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),kt(i.TEXTURE_CUBE_MAP,E.depthTexture);let Et=r.convert(E.depthTexture.format),qt=r.convert(E.depthTexture.type),It;E.depthTexture.format===hi?It=i.DEPTH_COMPONENT24:E.depthTexture.format===ts&&(It=i.DEPTH24_STENCIL8);for(let wt=0;wt<6;wt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,It,E.width,E.height,0,Et,qt,null)}}else j(E.depthTexture,0);let _t=it.__webglTexture,Mt=Kt(E),st=J?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,lt=E.depthTexture.format===ts?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===hi)te(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,st,_t,0,Mt):i.framebufferTexture2D(i.FRAMEBUFFER,lt,st,_t,0);else if(E.depthTexture.format===ts)te(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,st,_t,0,Mt):i.framebufferTexture2D(i.FRAMEBUFFER,lt,st,_t,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function K(L){let E=n.get(L),W=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){let J=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),J){let it=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,J.removeEventListener("dispose",it)};J.addEventListener("dispose",it),E.__depthDisposeCallback=it}E.__boundDepthTexture=J}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(W)for(let J=0;J<6;J++)vt(E.__webglFramebuffer[J],L,J);else{let J=L.texture.mipmaps;J&&J.length>0?vt(E.__webglFramebuffer[0],L,0):vt(E.__webglFramebuffer,L,0)}else if(W){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]===void 0)E.__webglDepthbuffer[J]=i.createRenderbuffer(),et(E.__webglDepthbuffer[J],L,!1);else{let it=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=E.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,_t),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,_t)}}else{let J=L.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),et(E.__webglDepthbuffer,L,!1);else{let it=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_t),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,_t)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(L,E,W){let J=n.get(L);E!==void 0&&ut(J.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&K(L)}function ct(L){let E=L.texture,W=n.get(L),J=n.get(E);L.addEventListener("dispose",_);let it=L.textures,_t=L.isWebGLCubeRenderTarget===!0,Mt=it.length>1;if(Mt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=E.version,o.memory.textures++),_t){W.__webglFramebuffer=[];for(let st=0;st<6;st++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[st]=[];for(let lt=0;lt<E.mipmaps.length;lt++)W.__webglFramebuffer[st][lt]=i.createFramebuffer()}else W.__webglFramebuffer[st]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let st=0;st<E.mipmaps.length;st++)W.__webglFramebuffer[st]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let st=0,lt=it.length;st<lt;st++){let Et=n.get(it[st]);Et.__webglTexture===void 0&&(Et.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&te(L)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let st=0;st<it.length;st++){let lt=it[st];W.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[st]);let Et=r.convert(lt.format,lt.colorSpace),qt=r.convert(lt.type),It=g(lt.internalFormat,Et,qt,lt.normalized,lt.colorSpace,L.isXRRenderTarget===!0),wt=Kt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,It,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,W.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),et(W.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_t){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),kt(i.TEXTURE_CUBE_MAP,E);for(let st=0;st<6;st++)if(E.mipmaps&&E.mipmaps.length>0)for(let lt=0;lt<E.mipmaps.length;lt++)ut(W.__webglFramebuffer[st][lt],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,lt);else ut(W.__webglFramebuffer[st],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);x(E)&&S(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let st=0,lt=it.length;st<lt;st++){let Et=it[st],qt=n.get(Et),It=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(It=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(It,qt.__webglTexture),kt(It,Et),ut(W.__webglFramebuffer,L,Et,i.COLOR_ATTACHMENT0+st,It,0),x(Et)&&S(It)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(st=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,J.__webglTexture),kt(st,E),E.mipmaps&&E.mipmaps.length>0)for(let lt=0;lt<E.mipmaps.length;lt++)ut(W.__webglFramebuffer[lt],L,E,i.COLOR_ATTACHMENT0,st,lt);else ut(W.__webglFramebuffer,L,E,i.COLOR_ATTACHMENT0,st,0);x(E)&&S(st),e.unbindTexture()}L.depthBuffer&&K(L)}function ht(L){let E=L.textures;for(let W=0,J=E.length;W<J;W++){let it=E[W];if(x(it)){let _t=w(L),Mt=n.get(it).__webglTexture;e.bindTexture(_t,Mt),S(_t),e.unbindTexture()}}}let yt=[],Gt=[];function Yt(L){if(L.samples>0){if(te(L)===!1){let E=L.textures,W=L.width,J=L.height,it=i.COLOR_BUFFER_BIT,_t=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(L),st=E.length>1;if(st)for(let Et=0;Et<E.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);let lt=L.texture.mipmaps;lt&&lt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Et=0;Et<E.length;Et++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[Et]);let qt=n.get(E[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qt,0)}i.blitFramebuffer(0,0,W,J,0,0,W,J,it,i.NEAREST),l===!0&&(yt.length=0,Gt.length=0,yt.push(i.COLOR_ATTACHMENT0+Et),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(yt.push(_t),Gt.push(_t),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Gt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,yt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let Et=0;Et<E.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[Et]);let qt=n.get(E[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let E=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Kt(L){return Math.min(s.maxSamples,L.samples)}function te(L){let E=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function B(L){let E=o.render.frame;u.get(L)!==E&&(u.set(L,E),L.update())}function ve(L,E){let W=L.colorSpace,J=L.format,it=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||W!==qr&&W!==Ri&&(me.getTransfer(W)===we?(J!==Hn||it!==An)&&Qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",W)),E}function ce(L){return typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame!="undefined"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.getTextureUnits=C,this.setTextureUnits=P,this.setTexture2D=j,this.setTexture2DArray=V,this.setTexture3D=$,this.setTextureCube=Z,this.rebindTextures=nt,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=te,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function x1(i,t){function e(n,s=Ri){let r,o=me.getTransfer(s);if(n===An)return i.UNSIGNED_BYTE;if(n===vl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ml)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Uh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Dh)return i.BYTE;if(n===Nh)return i.SHORT;if(n===xr)return i.UNSIGNED_SHORT;if(n===_l)return i.INT;if(n===Qn)return i.UNSIGNED_INT;if(n===Bn)return i.FLOAT;if(n===ti)return i.HALF_FLOAT;if(n===Fh)return i.ALPHA;if(n===Oh)return i.RGB;if(n===Hn)return i.RGBA;if(n===hi)return i.DEPTH_COMPONENT;if(n===ts)return i.DEPTH_STENCIL;if(n===Sl)return i.RED;if(n===bl)return i.RED_INTEGER;if(n===es)return i.RG;if(n===El)return i.RG_INTEGER;if(n===wl)return i.RGBA_INTEGER;if(n===Ao||n===Ro||n===Co||n===Io)if(o===we)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Co)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Io)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Tl||n===Al||n===Rl||n===Cl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Al)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Rl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Il||n===Pl||n===Ll||n===Dl||n===Nl||n===Po||n===Ul)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Il||n===Pl)return o===we?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ll)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Dl)return r.COMPRESSED_R11_EAC;if(n===Nl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Po)return r.COMPRESSED_RG11_EAC;if(n===Ul)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===zl||n===Fl||n===Ol||n===Bl||n===Hl||n===kl||n===Gl||n===Vl||n===Wl||n===Xl||n===Yl||n===ql||n===Zl||n===$l)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===zl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ol)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===kl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Gl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ql)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$l)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jl||n===Kl||n===jl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Jl)return o===we?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Kl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ql||n===tc||n===Lo||n===ec)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ql)return r.COMPRESSED_RED_RGTC1_EXT;if(n===tc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Lo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ec)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===yr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var y1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ao(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new tn({vertexShader:y1,fragmentShader:_1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new tt(new Xe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fu=class extends ui{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,p=null,y=typeof XRWebGLBinding!="undefined",m=new uu,x={},S=e.getContextAttributes(),w=null,g=null,M=[],v=[],T=new xt,_=null,b=null,A=new nn;A.viewport=new Oe;let I=new nn;I.viewport=new Oe;let D=[A,I],N=new fl,C=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let k=M[U];return k===void 0&&(k=new ir,M[U]=k),k.getTargetRaySpace()},this.getControllerGrip=function(U){let k=M[U];return k===void 0&&(k=new ir,M[U]=k),k.getGripSpace()},this.getHand=function(U){let k=M[U];return k===void 0&&(k=new ir,M[U]=k),k.getHandSpace()};function F(U){let k=v.indexOf(U.inputSource);if(k===-1)return;let rt=M[k];rt!==void 0&&(rt.update(U.inputSource,U.frame,c||o),rt.dispatchEvent({type:U.type,data:U.inputSource}))}function O(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",j);for(let U=0;U<M.length;U++){let k=v[U];k!==null&&(v[U]=null,M[U].disconnect(k))}C=null,P=null,m.reset();for(let U in x)delete x[U];if(t.setRenderTarget(w),d=null,f=null,h=null,s=null,g=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(T.width,T.height,!1),b!==null){let U=b.camera;U.fov=b.fov,U.zoom=b.zoom,U.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&Qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,n.isPresenting===!0&&Qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(U){if(s=U,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",O),s.addEventListener("inputsourceschange",j),S.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(T),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,gt=null,ut=null;S.depth&&(ut=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=S.stencil?ts:hi,gt=S.stencil?yr:Qn);let et={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(et),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),g=new Tn(f.textureWidth,f.textureHeight,{format:Hn,type:An,depthTexture:new Vi(f.textureWidth,f.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let rt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),g=new Tn(d.framebufferWidth,d.framebufferHeight,{format:Hn,type:An,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Xt.setContext(s),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(U){for(let k=0;k<U.removed.length;k++){let rt=U.removed[k],gt=v.indexOf(rt);gt>=0&&(v[gt]=null,M[gt].disconnect(rt))}for(let k=0;k<U.added.length;k++){let rt=U.added[k],gt=v.indexOf(rt);if(gt===-1){for(let et=0;et<M.length;et++)if(et>=v.length){v.push(rt),gt=et;break}else if(v[et]===null){v[et]=rt,gt=et;break}if(gt===-1)break}let ut=M[gt];ut&&ut.connect(rt)}}let V=new z,$=new z;function Z(U,k,rt){V.setFromMatrixPosition(k.matrixWorld),$.setFromMatrixPosition(rt.matrixWorld);let gt=V.distanceTo($),ut=k.projectionMatrix.elements,et=rt.projectionMatrix.elements,vt=ut[14]/(ut[10]-1),K=ut[14]/(ut[10]+1),nt=(ut[9]+1)/ut[5],ct=(ut[9]-1)/ut[5],ht=(ut[8]-1)/ut[0],yt=(et[8]+1)/et[0],Gt=vt*ht,Yt=vt*yt,Kt=gt/(-ht+yt),te=Kt*-ht;if(k.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(te),U.translateZ(Kt),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),ut[10]===-1)U.projectionMatrix.copy(k.projectionMatrix),U.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{let B=vt+Kt,ve=K+Kt,ce=Gt-te,L=Yt+(gt-te),E=nt*K/ve*B,W=ct*K/ve*B;U.projectionMatrix.makePerspective(ce,L,E,W,B,ve),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function at(U,k){k===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(k.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(s===null)return;let k=U.near,rt=U.far;m.texture!==null&&(m.depthNear>0&&(k=m.depthNear),m.depthFar>0&&(rt=m.depthFar)),N.near=I.near=A.near=k,N.far=I.far=A.far=rt,(C!==N.near||P!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),C=N.near,P=N.far),N.layers.mask=U.layers.mask|6,A.layers.mask=N.layers.mask&-5,I.layers.mask=N.layers.mask&-3;let gt=U.parent,ut=N.cameras;at(N,gt);for(let et=0;et<ut.length;et++)at(ut[et],gt);ut.length===2?Z(N,A,I):N.projectionMatrix.copy(A.projectionMatrix),b===null&&U.isPerspectiveCamera&&(b={camera:U,fov:U.fov,zoom:U.zoom}),pt(U,N,gt)};function pt(U,k,rt){rt===null?U.matrix.copy(k.matrixWorld):(U.matrix.copy(rt.matrixWorld),U.matrix.invert(),U.matrix.multiply(k.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(k.projectionMatrix),U.projectionMatrixInverse.copy(k.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=er*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(U){l=U,f!==null&&(f.fixedFoveation=U),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=U)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(U){return x[U]};let Jt=null;function kt(U,k){if(u=k.getViewerPose(c||o),p=k,u!==null){let rt=u.views;d!==null&&(t.setRenderTargetFramebuffer(g,d.framebuffer),t.setRenderTarget(g));let gt=!1;rt.length!==N.cameras.length&&(N.cameras.length=0,gt=!0);for(let K=0;K<rt.length;K++){let nt=rt[K],ct=null;if(d!==null)ct=d.getViewport(nt);else{let yt=h.getViewSubImage(f,nt);ct=yt.viewport,K===0&&(t.setRenderTargetTextures(g,yt.colorTexture,yt.depthStencilTexture),t.setRenderTarget(g))}let ht=D[K];ht===void 0&&(ht=new nn,ht.layers.enable(K),ht.viewport=new Oe,D[K]=ht),ht.matrix.fromArray(nt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(nt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(ct.x,ct.y,ct.width,ct.height),K===0&&(N.matrix.copy(ht.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),gt===!0&&N.cameras.push(ht)}let ut=s.enabledFeatures;if(ut&&ut.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){h=n.getBinding();let K=h.getDepthInformation(rt[0]);K&&K.isValid&&K.texture&&m.init(K,s.renderState)}if(ut&&ut.includes("camera-access")&&y){t.state.unbindTexture(),h=n.getBinding();for(let K=0;K<rt.length;K++){let nt=rt[K].camera;if(nt){let ct=x[nt];ct||(ct=new ao,x[nt]=ct);let ht=h.getCameraImage(nt);ct.sourceTexture=ht}}}}for(let rt=0;rt<M.length;rt++){let gt=v[rt],ut=M[rt];gt!==null&&ut!==void 0&&ut.update(gt,k,c||o)}Jt&&Jt(U,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),p=null}let Xt=new Hd;Xt.setAnimationLoop(kt),this.setAnimationLoop=function(U){Jt=U},this.dispose=function(){}}},v1=new Se,Yd=new re;Yd.set(-1,0,0,0,1,0,0,0,1);function M1(i,t){function e(m,x){m.matrixAutoUpdate===!0&&m.updateMatrix(),x.value.copy(m.matrix)}function n(m,x){x.color.getRGB(m.fogColor.value,Vh(i)),x.isFog?(m.fogNear.value=x.near,m.fogFar.value=x.far):x.isFogExp2&&(m.fogDensity.value=x.density)}function s(m,x,S,w,g){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?r(m,x):x.isMeshLambertMaterial?(r(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(r(m,x),h(m,x)):x.isMeshPhongMaterial?(r(m,x),u(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(r(m,x),f(m,x),x.isMeshPhysicalMaterial&&d(m,x,g)):x.isMeshMatcapMaterial?(r(m,x),p(m,x)):x.isMeshDepthMaterial?r(m,x):x.isMeshDistanceMaterial?(r(m,x),y(m,x)):x.isMeshNormalMaterial?r(m,x):x.isLineBasicMaterial?(o(m,x),x.isLineDashedMaterial&&a(m,x)):x.isPointsMaterial?l(m,x,S,w):x.isSpriteMaterial?c(m,x):x.isShadowMaterial?(m.color.value.copy(x.color),m.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function r(m,x){m.opacity.value=x.opacity,x.color&&m.diffuse.value.copy(x.color),x.emissive&&m.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(m.map.value=x.map,e(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,e(x.alphaMap,m.alphaMapTransform)),x.bumpMap&&(m.bumpMap.value=x.bumpMap,e(x.bumpMap,m.bumpMapTransform),m.bumpScale.value=x.bumpScale,x.side===sn&&(m.bumpScale.value*=-1)),x.normalMap&&(m.normalMap.value=x.normalMap,e(x.normalMap,m.normalMapTransform),m.normalScale.value.copy(x.normalScale),x.side===sn&&m.normalScale.value.negate()),x.displacementMap&&(m.displacementMap.value=x.displacementMap,e(x.displacementMap,m.displacementMapTransform),m.displacementScale.value=x.displacementScale,m.displacementBias.value=x.displacementBias),x.emissiveMap&&(m.emissiveMap.value=x.emissiveMap,e(x.emissiveMap,m.emissiveMapTransform)),x.specularMap&&(m.specularMap.value=x.specularMap,e(x.specularMap,m.specularMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest);let S=t.get(x),w=S.envMap,g=S.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(v1.makeRotationFromEuler(g)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Yd),m.reflectivity.value=x.reflectivity,m.ior.value=x.ior,m.refractionRatio.value=x.refractionRatio),x.lightMap&&(m.lightMap.value=x.lightMap,m.lightMapIntensity.value=x.lightMapIntensity,e(x.lightMap,m.lightMapTransform)),x.aoMap&&(m.aoMap.value=x.aoMap,m.aoMapIntensity.value=x.aoMapIntensity,e(x.aoMap,m.aoMapTransform))}function o(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,x.map&&(m.map.value=x.map,e(x.map,m.mapTransform))}function a(m,x){m.dashSize.value=x.dashSize,m.totalSize.value=x.dashSize+x.gapSize,m.scale.value=x.scale}function l(m,x,S,w){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.size.value=x.size*S,m.scale.value=w*.5,x.map&&(m.map.value=x.map,e(x.map,m.uvTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,e(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function c(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.rotation.value=x.rotation,x.map&&(m.map.value=x.map,e(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,e(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function u(m,x){m.specular.value.copy(x.specular),m.shininess.value=Math.max(x.shininess,1e-4)}function h(m,x){x.gradientMap&&(m.gradientMap.value=x.gradientMap)}function f(m,x){m.metalness.value=x.metalness,x.metalnessMap&&(m.metalnessMap.value=x.metalnessMap,e(x.metalnessMap,m.metalnessMapTransform)),m.roughness.value=x.roughness,x.roughnessMap&&(m.roughnessMap.value=x.roughnessMap,e(x.roughnessMap,m.roughnessMapTransform)),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)}function d(m,x,S){m.ior.value=x.ior,x.sheen>0&&(m.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),m.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(m.sheenColorMap.value=x.sheenColorMap,e(x.sheenColorMap,m.sheenColorMapTransform)),x.sheenRoughnessMap&&(m.sheenRoughnessMap.value=x.sheenRoughnessMap,e(x.sheenRoughnessMap,m.sheenRoughnessMapTransform))),x.clearcoat>0&&(m.clearcoat.value=x.clearcoat,m.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(m.clearcoatMap.value=x.clearcoatMap,e(x.clearcoatMap,m.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,e(x.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(m.clearcoatNormalMap.value=x.clearcoatNormalMap,e(x.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===sn&&m.clearcoatNormalScale.value.negate())),x.dispersion>0&&(m.dispersion.value=x.dispersion),x.retroreflectivity>0&&(m.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(m.iridescence.value=x.iridescence,m.iridescenceIOR.value=x.iridescenceIOR,m.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(m.iridescenceMap.value=x.iridescenceMap,e(x.iridescenceMap,m.iridescenceMapTransform)),x.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=x.iridescenceThicknessMap,e(x.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),x.transmission>0&&(m.transmission.value=x.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),x.transmissionMap&&(m.transmissionMap.value=x.transmissionMap,e(x.transmissionMap,m.transmissionMapTransform)),m.thickness.value=x.thickness,x.thicknessMap&&(m.thicknessMap.value=x.thicknessMap,e(x.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=x.attenuationDistance,m.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(m.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(m.anisotropyMap.value=x.anisotropyMap,e(x.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=x.specularIntensity,m.specularColor.value.copy(x.specularColor),x.specularColorMap&&(m.specularColorMap.value=x.specularColorMap,e(x.specularColorMap,m.specularColorMapTransform)),x.specularIntensityMap&&(m.specularIntensityMap.value=x.specularIntensityMap,e(x.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,x){x.matcap&&(m.matcap.value=x.matcap)}function y(m,x){let S=t.get(x).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function S1(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,M){let v=M.program;n.uniformBlockBinding(g,v)}function c(g,M){let v=s[g.id];v===void 0&&(m(g),v=u(g),s[g.id]=v,g.addEventListener("dispose",S));let T=M.program;n.updateUBOMapping(g,T);let _=t.render.frame;r[g.id]!==_&&(f(g),r[g.id]=_)}function u(g){let M=h();g.__bindingPointIndex=M;let v=i.createBuffer(),T=g.__size,_=g.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,T,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function h(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){let M=s[g.id],v=g.uniforms,T=g.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let _=0,b=v.length;_<b;_++){let A=v[_];if(Array.isArray(A))for(let I=0,D=A.length;I<D;I++)d(A[I],_,I,T);else d(A,_,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(g,M,v,T){if(y(g,M,v,T)===!0){let _=g.__offset,b=g.value;if(Array.isArray(b)){let A=0;for(let I=0;I<b.length;I++){let D=b[I],N=x(D);p(D,g.__data,A),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(A+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(b,g.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,g.__data)}}function p(g,M,v){typeof g=="number"||typeof g=="boolean"?M[0]=g:g.isMatrix3?(M[0]=g.elements[0],M[1]=g.elements[1],M[2]=g.elements[2],M[3]=0,M[4]=g.elements[3],M[5]=g.elements[4],M[6]=g.elements[5],M[7]=0,M[8]=g.elements[6],M[9]=g.elements[7],M[10]=g.elements[8],M[11]=0):ArrayBuffer.isView(g)?M.set(new g.constructor(g.buffer,g.byteOffset,M.length)):g.toArray(M,v)}function y(g,M,v,T){let _=g.value,b=M+"_"+v;if(T[b]===void 0)return typeof _=="number"||typeof _=="boolean"?T[b]=_:ArrayBuffer.isView(_)?T[b]=_.slice():T[b]=_.clone(),!0;{let A=T[b];if(typeof _=="number"||typeof _=="boolean"){if(A!==_)return T[b]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(A.equals(_)===!1)return A.copy(_),!0}}return!1}function m(g){let M=g.uniforms,v=0,T=16;for(let b=0,A=M.length;b<A;b++){let I=Array.isArray(M[b])?M[b]:[M[b]];for(let D=0,N=I.length;D<N;D++){let C=I[D],P=Array.isArray(C.value)?C.value:[C.value];for(let F=0,O=P.length;F<O;F++){let j=P[F],V=x(j),$=v%T,Z=$%V.boundary,at=$+Z;v+=Z,at!==0&&T-at<V.storage&&(v+=T-at),C.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=v,v+=V.storage}}}let _=v%T;return _>0&&(v+=T-_),g.__size=v,g.__cache={},this}function x(g){let M={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(M.boundary=4,M.storage=4):g.isVector2?(M.boundary=8,M.storage=8):g.isVector3||g.isColor?(M.boundary=16,M.storage=12):g.isVector4?(M.boundary=16,M.storage=16):g.isMatrix3?(M.boundary=48,M.storage=48):g.isMatrix4?(M.boundary=64,M.storage=64):g.isTexture?Qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(M.boundary=16,M.storage=g.byteLength):Qt("WebGLRenderer: Unsupported uniform value type.",g),M}function S(g){let M=g.target;M.removeEventListener("dispose",S);let v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function w(){for(let g in s)i.deleteBuffer(s[g]);o=[],s={},r={}}return{bind:l,update:c,dispose:w}}var b1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),pi=null;function E1(){return pi===null&&(pi=new so(b1,16,16,es,ti),pi.name="DFG_LUT",pi.minFilter=un,pi.magFilter=un,pi.wrapS=li,pi.wrapT=li,pi.generateMipmaps=!1,pi.needsUpdate=!0),pi}var Oo=class{constructor(t={}){let{canvas:e=od(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=An}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let y=d,m=new Set([wl,El,bl]),x=new Set([An,Qn,xr,yr,vl,Ml]),S=new Uint32Array(4),w=new Int32Array(4),g=new z,M=null,v=null,T=[],_=[],b=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,I=!1,D=null,N=null,C=null,P=null;this._outputColorSpace=Ne;let F=0,O=0,j=null,V=-1,$=null,Z=new Oe,at=new Oe,pt=null,Jt=new Ot(0),kt=0,Xt=e.width,U=e.height,k=1,rt=null,gt=null,ut=new Oe(0,0,Xt,U),et=new Oe(0,0,Xt,U),vt=!1,K=new lr,nt=!1,ct=!1,ht=new Se,yt=new z,Gt=new Oe,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Kt=!1;function te(){return j===null?k:1}let B=n;function ve(R,H){return e.getContext(R,H)}let ce,L,E,W,J,it,_t,Mt,st,lt,Et,qt,It,wt,Zt,jt,oe,G,Tt,ot,At,Ut,ft;try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ue,!1),e.addEventListener("webglcontextrestored",be,!1),e.addEventListener("webglcontextcreationerror",Wn,!1),B===null){let H="webgl2";if(B=ve(H,R),B===null)throw ve(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$t()}catch(R){throw e.removeEventListener("webglcontextlost",Ue,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",Wn,!1),ee("WebGLRenderer: "+R.message),R}function $t(){ce=new Py(B),ce.init(),At=new x1(B,ce),L=new My(B,ce,t,At),E=new m1(B,ce),L.reversedDepthBuffer&&f&&E.buffers.depth.setReversed(!0),N=B.createFramebuffer(),C=B.createFramebuffer(),P=B.createFramebuffer(),W=new Ny(B),J=new e1,it=new g1(B,ce,E,J,L,At,W),_t=new Iy(A),Mt=new zm(B),Ut=new _y(B,Mt),st=new Ly(B,Mt,W,Ut),lt=new zy(B,st,Mt,Ut,W),G=new Uy(B,L,it),Zt=new Sy(J),Et=new t1(A,_t,ce,L,Ut,Zt),qt=new M1(A,J),It=new i1,wt=new c1(ce),oe=new yy(A,_t,E,lt,p,l),jt=new p1(A,lt,L),ft=new S1(B,W,L,E),Tt=new vy(B,ce,W),ot=new Dy(B,ce,W),W.programs=Et.programs,A.capabilities=L,A.extensions=ce,A.properties=J,A.renderLists=It,A.shadowMap=jt,A.state=E,A.info=W}y!==An&&(b=new Oy(y,e.width,e.height,a,s,r));let Vt=new fu(A,B);this.xr=Vt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let R=ce.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=ce.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(R){R!==void 0&&(k=R,this.setSize(Xt,U,!1))},this.getSize=function(R){return R.set(Xt,U)},this.setSize=function(R,H,Q=!0){if(Vt.isPresenting){Qt("WebGLRenderer: Can't change size while VR device is presenting.");return}Xt=R,U=H,e.width=Math.floor(R*k),e.height=Math.floor(H*k),Q===!0&&(e.style.width=R+"px",e.style.height=H+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(Xt*k,U*k).floor()},this.setDrawingBufferSize=function(R,H,Q){Xt=R,U=H,k=Q,e.width=Math.floor(R*Q),e.height=Math.floor(H*Q),this.setViewport(0,0,R,H)},this.setEffects=function(R){if(y===An){ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let H=0;H<R.length;H++)if(R[H].isOutputPass===!0){Qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(Z)},this.getViewport=function(R){return R.copy(ut)},this.setViewport=function(R,H,Q,Y){R.isVector4?ut.set(R.x,R.y,R.z,R.w):ut.set(R,H,Q,Y),E.viewport(Z.copy(ut).multiplyScalar(k).round())},this.getScissor=function(R){return R.copy(et)},this.setScissor=function(R,H,Q,Y){R.isVector4?et.set(R.x,R.y,R.z,R.w):et.set(R,H,Q,Y),E.scissor(at.copy(et).multiplyScalar(k).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(R){E.setScissorTest(vt=R)},this.setOpaqueSort=function(R){rt=R},this.setTransparentSort=function(R){gt=R},this.getClearColor=function(R){return R.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(R=!0,H=!0,Q=!0){let Y=0;if(R){let q=!1;if(j!==null){let Nt=j.texture.format;q=m.has(Nt)}if(q){let Nt=j.texture.type,Ft=x.has(Nt),Lt=oe.getClearColor(),Bt=oe.getClearAlpha(),Wt=Lt.r,he=Lt.g,de=Lt.b;Ft?(S[0]=Wt,S[1]=he,S[2]=de,S[3]=Bt,B.clearBufferuiv(B.COLOR,0,S)):(w[0]=Wt,w[1]=he,w[2]=de,w[3]=Bt,B.clearBufferiv(B.COLOR,0,w))}else Y|=B.COLOR_BUFFER_BIT}H&&(Y|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Y|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&B.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),D=R},this.dispose=function(){e.removeEventListener("webglcontextlost",Ue,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",Wn,!1),oe.dispose(),It.dispose(),wt.dispose(),J.dispose(),_t.dispose(),lt.dispose(),Ut.dispose(),ft.dispose(),Et.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",Ou),Vt.removeEventListener("sessionend",Bu),ls.stop()};function Ue(R){R.preventDefault(),Jr("WebGLRenderer: Context Lost."),I=!0}function be(){Jr("WebGLRenderer: Context Restored."),I=!1;let R=W.autoReset,H=jt.enabled,Q=jt.autoUpdate,Y=jt.needsUpdate,q=jt.type;$t(),W.autoReset=R,jt.enabled=H,jt.autoUpdate=Q,jt.needsUpdate=Y,jt.type=q}function Wn(R){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ri(R){let H=R.target;H.removeEventListener("dispose",ri),n0(H)}function n0(R){i0(R),J.remove(R)}function i0(R){let H=J.get(R).programs;H!==void 0&&(H.forEach(function(Q){Et.releaseProgram(Q)}),R.isShaderMaterial&&Et.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,Q,Y,q,Nt){H===null&&(H=Yt);let Ft=q.isMesh&&q.matrixWorld.determinantAffine()<0,Lt=o0(R,H,Q,Y,q);E.setMaterial(Y,Ft);let Bt=Q.index,Wt=1;if(Y.wireframe===!0){if(Bt=st.getWireframeAttribute(Q),Bt===void 0)return;Wt=2}let he=Q.drawRange,de=Q.attributes.position,Ht=he.start*Wt,Ee=(he.start+he.count)*Wt;Nt!==null&&(Ht=Math.max(Ht,Nt.start*Wt),Ee=Math.min(Ee,(Nt.start+Nt.count)*Wt)),Bt!==null?(Ht=Math.max(Ht,0),Ee=Math.min(Ee,Bt.count)):de!=null&&(Ht=Math.max(Ht,0),Ee=Math.min(Ee,de.count));let Ke=Ee-Ht;if(Ke<0||Ke===1/0)return;Ut.setup(q,Y,Lt,Q,Bt);let Be,De=Tt;if(Bt!==null&&(Be=Mt.get(Bt),De=ot,De.setIndex(Be)),q.isMesh)Y.wireframe===!0?(E.setLineWidth(Y.wireframeLinewidth*te()),De.setMode(B.LINES)):De.setMode(B.TRIANGLES);else if(q.isLine){let fn=Y.linewidth;fn===void 0&&(fn=1),E.setLineWidth(fn*te()),q.isLineSegments?De.setMode(B.LINES):q.isLineLoop?De.setMode(B.LINE_LOOP):De.setMode(B.LINE_STRIP)}else q.isPoints?De.setMode(B.POINTS):q.isSprite&&De.setMode(B.TRIANGLES);if(q.isBatchedMesh)if(ce.get("WEBGL_multi_draw"))De.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let fn=q._multiDrawStarts,zt=q._multiDrawCounts,vn=q._multiDrawCount,Me=Bt?Mt.get(Bt).bytesPerElement:1,Fn=J.get(Y).currentProgram.getUniforms();for(let oi=0;oi<vn;oi++)Fn.setValue(B,"_gl_DrawID",oi),De.render(fn[oi]/Me,zt[oi])}else if(q.isInstancedMesh)De.renderInstances(Ht,Ke,q.count);else if(Q.isInstancedBufferGeometry){let fn=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,zt=Math.min(Q.instanceCount,fn);De.renderInstances(Ht,Ke,zt)}else De.render(Ht,Ke)};function Fu(R,H,Q,Y){D!==null&&R.isNodeMaterial&&D.setObject(Y,R),nt===!0&&Zt.setState(R,Q,!1),R.transparent===!0&&R.side===$e&&R.forceSinglePass===!1?(R.side=sn,R.needsUpdate=!0,na(R,H,Y),R.side=Ji,R.needsUpdate=!0,na(R,H,Y),R.side=$e):na(R,H,Y)}this.compile=function(R,H,Q=null){Q===null&&(Q=R),D!==null&&D.renderStart(R,H,Q),v=wt.get(Q),v.init(H),_.push(v),Q.traverseVisible(function(q){q.isLight&&q.layers.test(H.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),R!==Q&&R.traverseVisible(function(q){q.isLight&&q.layers.test(H.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),v.setupLights(),D!==null&&D.updateLights(v.state.lightsArray),ct=this.localClippingEnabled,nt=Zt.init(this.clippingPlanes,ct),nt===!0&&Zt.setGlobalState(this.clippingPlanes,H),D!==null&&jt.render(v.state.shadowsArray,Q,H);let Y=new Set;return R.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Nt=q.material;if(Nt)if(Array.isArray(Nt))for(let Ft=0;Ft<Nt.length;Ft++){let Lt=Nt[Ft];Fu(Lt,Q,H,q),Y.add(Lt)}else Fu(Nt,Q,H,q),Y.add(Nt)}),v=_.pop(),D!==null&&D.renderEnd(),Y},this.compileAsync=function(R,H,Q=null){let Y=this.compile(R,H,Q);return new Promise(q=>{function Nt(){if(Y.forEach(function(Ft){let Bt=J.get(Ft).currentProgram;(Bt===void 0||Bt.isReady())&&Y.delete(Ft)}),Y.size===0){q(R);return}setTimeout(Nt,10)}ce.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let Uc=null;function s0(R){Uc&&Uc(R)}function Ou(){ls.stop()}function Bu(){ls.start()}let ls=new Hd;ls.setAnimationLoop(s0),typeof self!="undefined"&&ls.setContext(self),this.setAnimationLoop=function(R){Uc=R,Vt.setAnimationLoop(R),R===null?ls.stop():ls.start()},Vt.addEventListener("sessionstart",Ou),Vt.addEventListener("sessionend",Bu),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;D!==null&&D.renderStart(R,H);let Q=Vt.enabled===!0&&Vt.isPresenting===!0,Y=b!==null&&(j===null||Q)&&b.begin(A,j);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(H),H=Vt.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,H,j),v=wt.get(R,_.length),v.init(H),v.state.textureUnits=it.getTextureUnits(),_.push(v),ht.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),K.setFromProjectionMatrix(ht,Jn,H.reversedDepth),ct=this.localClippingEnabled,nt=Zt.init(this.clippingPlanes,ct),M=It.get(R,T.length),M.init(),T.push(M),Vt.enabled===!0&&Vt.isPresenting===!0){let Ft=A.xr.getDepthSensingMesh();Ft!==null&&zc(Ft,H,-1/0,A.sortObjects)}zc(R,H,0,A.sortObjects),M.finish(),D!==null&&D.updateLights(v.state.lightsArray),A.sortObjects===!0&&M.sort(rt,gt),Kt=Vt.enabled===!1||Vt.isPresenting===!1||Vt.hasDepthSensing()===!1,Kt&&oe.addToRenderList(M,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),nt===!0&&Zt.beginShadows();let q=v.state.shadowsArray;if(jt.render(q,R,H),nt===!0&&Zt.endShadows(),(Y&&b.hasRenderPass())===!1){let Ft=M.opaque,Lt=M.transmissive;if(v.setupLights(),H.isArrayCamera){let Bt=H.cameras;if(Lt.length>0)for(let Wt=0,he=Bt.length;Wt<he;Wt++){let de=Bt[Wt];ku(Ft,Lt,R,de)}Kt&&oe.render(R);for(let Wt=0,he=Bt.length;Wt<he;Wt++){let de=Bt[Wt];Hu(M,R,de,de.viewport)}}else Lt.length>0&&ku(Ft,Lt,R,H),Kt&&oe.render(R),Hu(M,R,H)}j!==null&&O===0&&(it.updateMultisampleRenderTarget(j),it.updateRenderTargetMipmap(j)),Y&&b.end(A),R.isScene===!0&&R.onAfterRender(A,R,H),Ut.resetDefaultState(),V=-1,$=null,_.pop(),_.length>0?(v=_[_.length-1],it.setTextureUnits(v.state.textureUnits),nt===!0&&Zt.setGlobalState(A.clippingPlanes,v.state.camera)):v=null,T.pop(),T.length>0?M=T[T.length-1]:M=null,D!==null&&D.renderEnd()};function zc(R,H,Q,Y){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)Q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLightProbeGrid)v.pushLightProbeGrid(R);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(K)){Y&&Gt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ht);let Ft=lt.update(R),Lt=R.material;Lt.visible&&M.push(R,Ft,Lt,Q,Gt.z,null,H)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(K))){let Ft=lt.update(R),Lt=R.material;if(Y&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Gt.copy(R.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),Gt.copy(Ft.boundingSphere.center)),Gt.applyMatrix4(R.matrixWorld).applyMatrix4(ht)),Array.isArray(Lt)){let Bt=Ft.groups;for(let Wt=0,he=Bt.length;Wt<he;Wt++){let de=Bt[Wt],Ht=Lt[de.materialIndex];Ht&&Ht.visible&&M.push(R,Ft,Ht,Q,Gt.z,de,H)}}else Lt.visible&&M.push(R,Ft,Lt,Q,Gt.z,null,H)}}let Nt=R.children;for(let Ft=0,Lt=Nt.length;Ft<Lt;Ft++)zc(Nt[Ft],H,Q,Y)}function Hu(R,H,Q,Y){let{opaque:q,transmissive:Nt,transparent:Ft}=R;v.setupLightsView(Q),nt===!0&&Zt.setGlobalState(A.clippingPlanes,Q),Y&&E.viewport(Z.copy(Y)),q.length>0&&ea(q,H,Q),Nt.length>0&&ea(Nt,H,Q),Ft.length>0&&ea(Ft,H,Q),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function ku(R,H,Q,Y){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[Y.id]===void 0){let Ht=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[Y.id]=new Tn(1,1,{generateMipmaps:!0,type:Ht?ti:An,minFilter:Qi,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:me.workingColorSpace})}let Nt=v.state.transmissionRenderTarget[Y.id],Ft=Y.viewport||Z;Nt.setSize(Ft.z*A.transmissionResolutionScale,Ft.w*A.transmissionResolutionScale);let Lt=A.getRenderTarget(),Bt=A.getActiveCubeFace(),Wt=A.getActiveMipmapLevel();A.setRenderTarget(Nt),A.getClearColor(Jt),kt=A.getClearAlpha(),kt<1&&A.setClearColor(16777215,.5),A.clear(),Kt&&oe.render(Q);let he=A.toneMapping;A.toneMapping=jn;let de=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),v.setupLightsView(Y),nt===!0&&Zt.setGlobalState(A.clippingPlanes,Y),ea(R,Q,Y),it.updateMultisampleRenderTarget(Nt),it.updateRenderTargetMipmap(Nt),ce.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Ee=0,Ke=H.length;Ee<Ke;Ee++){let Be=H[Ee],{object:De,geometry:fn,material:zt,group:vn}=Be;if(zt.side===$e&&De.layers.test(Y.layers)){let Me=zt.side;zt.side=sn,zt.needsUpdate=!0,Gu(De,Q,Y,fn,zt,vn),zt.side=Me,zt.needsUpdate=!0,Ht=!0}}Ht===!0&&(it.updateMultisampleRenderTarget(Nt),it.updateRenderTargetMipmap(Nt))}A.setRenderTarget(Lt,Bt,Wt),A.setClearColor(Jt,kt),de!==void 0&&(Y.viewport=de),A.toneMapping=he}function ea(R,H,Q){let Y=H.isScene===!0?H.overrideMaterial:null;for(let q=0,Nt=R.length;q<Nt;q++){let Ft=R[q],{object:Lt,geometry:Bt,group:Wt}=Ft,he=Ft.material;he.allowOverride===!0&&Y!==null&&(he=Y),Lt.layers.test(Q.layers)&&Gu(Lt,H,Q,Bt,he,Wt)}}function Gu(R,H,Q,Y,q,Nt){D!==null&&q.isNodeMaterial&&D.setObject(R,q),R.onBeforeRender(A,H,Q,Y,q,Nt),R.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(A,H,Q,Y,R,Nt),q.transparent===!0&&q.side===$e&&q.forceSinglePass===!1?(q.side=sn,q.needsUpdate=!0,A.renderBufferDirect(Q,H,Y,q,R,Nt),q.side=Ji,q.needsUpdate=!0,A.renderBufferDirect(Q,H,Y,q,R,Nt),q.side=$e):A.renderBufferDirect(Q,H,Y,q,R,Nt),R.onAfterRender(A,H,Q,Y,q,Nt)}function na(R,H,Q){H.isScene!==!0&&(H=Yt);let Y=J.get(R),q=v.state.lights,Nt=v.state.shadowsArray,Ft=q.state.version,Lt=Et.getParameters(R,q.state,Nt,H,Q,v.state.lightProbeGridArray),Bt=Et.getProgramCacheKey(Lt),Wt=Y.programs;Y.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?H.environment:null,Y.fog=H.fog;let he=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;Y.envMap=_t.get(R.envMap||Y.environment,he),Y.envMapRotation=Y.environment!==null&&R.envMap===null?H.environmentRotation:R.envMapRotation,Wt===void 0&&(R.addEventListener("dispose",ri),Wt=new Map,Y.programs=Wt);let de=Wt.get(Bt);if(de!==void 0){if(Y.currentProgram===de&&Y.lightsStateVersion===Ft)return Wu(R,Lt),de}else Lt.uniforms=Et.getUniforms(R),D!==null&&R.isNodeMaterial&&D.build(R,Q,Lt),R.onBeforeCompile(Lt,A),de=Et.acquireProgram(Lt,Bt),Wt.set(Bt,de),Y.uniforms=Lt.uniforms;let Ht=Y.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ht.clippingPlanes=Zt.uniform),Wu(R,Lt),Y.needsLights=l0(R),Y.lightsStateVersion=Ft,Y.needsLights&&(Ht.ambientLightColor.value=q.state.ambient,Ht.lightProbe.value=q.state.probe,Ht.sunLights.value=q.state.sun,Ht.sunLightShadows.value=q.state.sunShadow,Ht.directionalLights.value=q.state.directional,Ht.directionalLightShadows.value=q.state.directionalShadow,Ht.spotLights.value=q.state.spot,Ht.spotLightShadows.value=q.state.spotShadow,Ht.rectAreaLights.value=q.state.rectArea,Ht.ltc_1.value=q.state.rectAreaLTC1,Ht.ltc_2.value=q.state.rectAreaLTC2,Ht.pointLights.value=q.state.point,Ht.pointLightShadows.value=q.state.pointShadow,Ht.hemisphereLights.value=q.state.hemi,Ht.sunShadowMatrix.value=q.state.sunShadowMatrix,Ht.sunShadowCascade.value=q.state.sunShadowCascade,Ht.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ht.spotLightMatrix.value=q.state.spotLightMatrix,Ht.spotLightMap.value=q.state.spotLightMap,Ht.pointShadowMatrix.value=q.state.pointShadowMatrix),Y.lightProbeGrid=v.state.lightProbeGridArray.length>0,Y.currentProgram=de,Y.uniformsList=null,de}function Vu(R){if(R.uniformsList===null){let H=R.currentProgram.getUniforms();R.uniformsList=Sr.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function Wu(R,H){let Q=J.get(R);Q.outputColorSpace=H.outputColorSpace,Q.batching=H.batching,Q.batchingColor=H.batchingColor,Q.instancing=H.instancing,Q.instancingColor=H.instancingColor,Q.instancingMorph=H.instancingMorph,Q.skinning=H.skinning,Q.morphTargets=H.morphTargets,Q.morphNormals=H.morphNormals,Q.morphColors=H.morphColors,Q.morphTargetsCount=H.morphTargetsCount,Q.numClippingPlanes=H.numClippingPlanes,Q.numIntersection=H.numClipIntersection,Q.vertexAlphas=H.vertexAlphas,Q.vertexTangents=H.vertexTangents,Q.toneMapping=H.toneMapping}function r0(R,H){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;g.setFromMatrixPosition(H.matrixWorld);for(let Q=0,Y=R.length;Q<Y;Q++){let q=R[Q];if(q.texture!==null&&q.boundingBox.containsPoint(g))return q}return null}function o0(R,H,Q,Y,q){H.isScene!==!0&&(H=Yt),it.resetTextureUnits();let Nt=H.fog,Ft=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?H.environment:null,Lt=j===null?A.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:me.workingColorSpace,Bt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Wt=_t.get(Y.envMap||Ft,Bt),he=Y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,de=!!Q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ht=!!Q.morphAttributes.position,Ee=!!Q.morphAttributes.normal,Ke=!!Q.morphAttributes.color,Be=jn;Y.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Be=A.toneMapping);let De=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,fn=De!==void 0?De.length:0,zt=J.get(Y),vn=v.state.lights;if(nt===!0&&(ct===!0||R!==$)){let ze=R===$&&Y.id===V;Zt.setState(Y,R,ze)}let Me=!1;Y.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==vn.state.version||zt.outputColorSpace!==Lt||q.isBatchedMesh&&zt.batching===!1||!q.isBatchedMesh&&zt.batching===!0||q.isBatchedMesh&&zt.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&zt.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&zt.instancing===!1||!q.isInstancedMesh&&zt.instancing===!0||q.isSkinnedMesh&&zt.skinning===!1||!q.isSkinnedMesh&&zt.skinning===!0||q.isInstancedMesh&&zt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&zt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&zt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&zt.instancingMorph===!1&&q.morphTexture!==null||zt.envMap!==Wt||Y.fog===!0&&zt.fog!==Nt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==Zt.numPlanes||zt.numIntersection!==Zt.numIntersection)||zt.vertexAlphas!==he||zt.vertexTangents!==de||zt.morphTargets!==Ht||zt.morphNormals!==Ee||zt.morphColors!==Ke||zt.toneMapping!==Be||zt.morphTargetsCount!==fn||!!zt.lightProbeGrid!=v.state.lightProbeGridArray.length>0)&&(Me=!0):(Me=!0,zt.__version=Y.version);let Fn=zt.currentProgram;Me===!0&&(Fn=na(Y,H,q),D&&Y.isNodeMaterial&&D.onUpdateProgram(Y,Fn,zt));let oi=!1,Ui=!1,Is=!1,Ie=Fn.getUniforms(),Ze=zt.uniforms;if(E.useProgram(Fn.program)&&(oi=!0,Ui=!0,Is=!0),Y.id!==V&&(V=Y.id,Ui=!0),zt.needsLights){let ze=r0(v.state.lightProbeGridArray,q);zt.lightProbeGrid!==ze&&(zt.lightProbeGrid=ze,Ui=!0)}if(oi||$!==R){E.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ie.setValue(B,"projectionMatrix",R.projectionMatrix),Ie.setValue(B,"viewMatrix",R.matrixWorldInverse);let Fi=Ie.map.cameraPosition;Fi!==void 0&&Fi.setValue(B,yt.setFromMatrixPosition(R.matrixWorld)),L.logarithmicDepthBuffer&&Ie.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ie.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),$!==R&&($=R,Ui=!0,Is=!0)}if(zt.needsLights&&(vn.state.sunShadowMap.length>0&&Ie.setValue(B,"sunShadowMap",vn.state.sunShadowMap,it),vn.state.directionalShadowMap.length>0&&Ie.setValue(B,"directionalShadowMap",vn.state.directionalShadowMap,it),vn.state.spotShadowMap.length>0&&Ie.setValue(B,"spotShadowMap",vn.state.spotShadowMap,it),vn.state.pointShadowMap.length>0&&Ie.setValue(B,"pointShadowMap",vn.state.pointShadowMap,it)),q.isSkinnedMesh){Ie.setOptional(B,q,"bindMatrix"),Ie.setOptional(B,q,"bindMatrixInverse");let ze=q.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),Ie.setValue(B,"boneTexture",ze.boneTexture,it))}q.isBatchedMesh&&(Ie.setOptional(B,q,"batchingTexture"),Ie.setValue(B,"batchingTexture",q._matricesTexture,it),Ie.setOptional(B,q,"batchingIdTexture"),Ie.setValue(B,"batchingIdTexture",q._indirectTexture,it),Ie.setOptional(B,q,"batchingColorTexture"),q._colorsTexture!==null&&Ie.setValue(B,"batchingColorTexture",q._colorsTexture,it));let zi=Q.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&G.update(q,Q,Fn),(Ui||zt.receiveShadow!==q.receiveShadow)&&(zt.receiveShadow=q.receiveShadow,Ie.setValue(B,"receiveShadow",q.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&H.environment!==null&&(Ze.envMapIntensity.value=H.environmentIntensity),Ze.dfgLUT!==void 0&&(Ze.dfgLUT.value=E1()),Ui){if(Ie.setValue(B,"toneMappingExposure",A.toneMappingExposure),zt.needsLights&&a0(Ze,Is),Nt&&Y.fog===!0&&qt.refreshFogUniforms(Ze,Nt),qt.refreshMaterialUniforms(Ze,Y,k,U,v.state.transmissionRenderTarget[R.id]),zt.needsLights&&zt.lightProbeGrid){let ze=zt.lightProbeGrid;Ze.probesSH.value=ze.texture,Ze.probesMin.value.copy(ze.boundingBox.min),Ze.probesMax.value.copy(ze.boundingBox.max),Ze.probesResolution.value.copy(ze.resolution)}Sr.upload(B,Vu(zt),Ze,it)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Sr.upload(B,Vu(zt),Ze,it),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ie.setValue(B,"center",q.center),Ie.setValue(B,"modelViewMatrix",q.modelViewMatrix),Ie.setValue(B,"normalMatrix",q.normalMatrix),Ie.setValue(B,"modelMatrix",q.matrixWorld),Y.uniformsGroups!==void 0){let ze=Y.uniformsGroups;for(let Fi=0,Ps=ze.length;Fi<Ps;Fi++){let Yu=ze[Fi];ft.update(Yu,Fn),ft.bind(Yu,Fn)}}return Fn}function a0(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.sunLights.needsUpdate=H,R.sunLightShadows.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function l0(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(R,H,Q){let Y=J.get(R);Y.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),J.get(R.texture).__webglTexture=H,J.get(R.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,H){let Q=J.get(R);Q.__webglFramebuffer=H,Q.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(R,H=0,Q=0){j=R,F=H,O=Q;let Y=null,q=!1,Nt=!1;if(R){let Lt=J.get(R);if(Lt.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(B.FRAMEBUFFER,Lt.__webglFramebuffer),Z.copy(R.viewport),at.copy(R.scissor),pt=R.scissorTest,E.viewport(Z),E.scissor(at),E.setScissorTest(pt),V=-1;return}else if(Lt.__webglFramebuffer===void 0)it.setupRenderTarget(R);else if(Lt.__hasExternalTextures)it.rebindTextures(R,J.get(R.texture).__webglTexture,J.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let he=R.depthTexture;if(Lt.__boundDepthTexture!==he){if(he!==null&&J.has(he)&&(R.width!==he.image.width||R.height!==he.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(R)}}let Bt=R.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Nt=!0);let Wt=J.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Wt[H])?Y=Wt[H][Q]:Y=Wt[H],q=!0):R.samples>0&&it.useMultisampledRTT(R)===!1?Y=J.get(R).__webglMultisampledFramebuffer:Array.isArray(Wt)?Y=Wt[Q]:Y=Wt,Z.copy(R.viewport),at.copy(R.scissor),pt=R.scissorTest}else Z.copy(ut).multiplyScalar(k).floor(),at.copy(et).multiplyScalar(k).floor(),pt=vt;if(Q!==0&&(Y=N),E.bindFramebuffer(B.FRAMEBUFFER,Y)&&E.drawBuffers(R,Y),E.viewport(Z),E.scissor(at),E.setScissorTest(pt),q){let Lt=J.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+H,Lt.__webglTexture,Q)}else if(Nt){let Lt=H;for(let Bt=0;Bt<R.textures.length;Bt++){let Wt=J.get(R.textures[Bt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Bt,Wt.__webglTexture,Q,Lt)}}else if(R!==null&&Q!==0){let Lt=J.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Lt.__webglTexture,Q)}V=-1};function Xu(R){let H=J.get(R);return(H.__readFormat!==R.format||H.__readType!==R.type)&&(H.__readFormat=R.format,H.__readType=R.type,H.__formatReadable=L.textureFormatReadable(R.format),H.__typeReadable=L.textureTypeReadable(R.type)),H}this.readRenderTargetPixels=function(R,H,Q,Y,q,Nt,Ft,Lt=0){if(!(R&&R.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=J.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ft!==void 0&&(Bt=Bt[Ft]),Bt){E.bindFramebuffer(B.FRAMEBUFFER,Bt);try{let Wt=R.textures[Lt],he=Wt.format,de=Wt.type;R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Lt);let Ht=Xu(Wt);if(Ht.__formatReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ht.__typeReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-Y&&Q>=0&&Q<=R.height-q&&B.readPixels(H,Q,Y,q,At.convert(he),At.convert(de),Nt)}finally{let Wt=j!==null?J.get(j).__webglFramebuffer:null;E.bindFramebuffer(B.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(R,H,Q,Y,q,Nt,Ft,Lt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=J.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ft!==void 0&&(Bt=Bt[Ft]),Bt)if(H>=0&&H<=R.width-Y&&Q>=0&&Q<=R.height-q){E.bindFramebuffer(B.FRAMEBUFFER,Bt);let Wt=R.textures[Lt],he=Wt.format,de=Wt.type;R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Lt);let Ht=Xu(Wt);if(Ht.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ht.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ee=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ee),B.bufferData(B.PIXEL_PACK_BUFFER,Nt.byteLength,B.STREAM_READ),B.readPixels(H,Q,Y,q,At.convert(he),At.convert(de),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Ke=j!==null?J.get(j).__webglFramebuffer:null;E.bindFramebuffer(B.FRAMEBUFFER,Ke);let Be=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await ld(B,Be,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ee),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Nt),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(Ee),B.deleteSync(Be),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,H=null,Q=0){let Y=Math.pow(2,-Q),q=Math.floor(R.image.width*Y),Nt=Math.floor(R.image.height*Y),Ft=H!==null?H.x:0,Lt=H!==null?H.y:0;it.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,Q,0,0,Ft,Lt,q,Nt),E.unbindTexture()},this.copyTextureToTexture=function(R,H,Q=null,Y=null,q=0,Nt=0){let Ft,Lt,Bt,Wt,he,de,Ht,Ee,Ke,Be=R.isCompressedTexture?R.mipmaps[Nt]:R.image;if(Q!==null)Ft=Q.max.x-Q.min.x,Lt=Q.max.y-Q.min.y,Bt=Q.isBox3?Q.max.z-Q.min.z:1,Wt=Q.min.x,he=Q.min.y,de=Q.isBox3?Q.min.z:0;else{let Ze=Math.pow(2,-q);Ft=Math.floor(Be.width*Ze),Lt=Math.floor(Be.height*Ze),R.isDataArrayTexture?Bt=Be.depth:R.isData3DTexture?Bt=Math.floor(Be.depth*Ze):Bt=1,Wt=0,he=0,de=0}Y!==null?(Ht=Y.x,Ee=Y.y,Ke=Y.z):(Ht=0,Ee=0,Ke=0);let De=At.convert(H.format),fn=At.convert(H.type),zt;H.isData3DTexture?(it.setTexture3D(H,0),zt=B.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(it.setTexture2DArray(H,0),zt=B.TEXTURE_2D_ARRAY):(it.setTexture2D(H,0),zt=B.TEXTURE_2D),E.activeTexture(B.TEXTURE0),E.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,H.flipY),E.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),E.pixelStorei(B.UNPACK_ALIGNMENT,H.unpackAlignment);let vn=E.getParameter(B.UNPACK_ROW_LENGTH),Me=E.getParameter(B.UNPACK_IMAGE_HEIGHT),Fn=E.getParameter(B.UNPACK_SKIP_PIXELS),oi=E.getParameter(B.UNPACK_SKIP_ROWS),Ui=E.getParameter(B.UNPACK_SKIP_IMAGES);E.pixelStorei(B.UNPACK_ROW_LENGTH,Be.width),E.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Be.height),E.pixelStorei(B.UNPACK_SKIP_PIXELS,Wt),E.pixelStorei(B.UNPACK_SKIP_ROWS,he),E.pixelStorei(B.UNPACK_SKIP_IMAGES,de);let Is=R.isDataArrayTexture||R.isData3DTexture,Ie=H.isDataArrayTexture||H.isData3DTexture;if(R.isDepthTexture){let Ze=J.get(R),zi=J.get(H),ze=J.get(Ze.__renderTarget),Fi=J.get(zi.__renderTarget);E.bindFramebuffer(B.READ_FRAMEBUFFER,ze.__webglFramebuffer),E.bindFramebuffer(B.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let Ps=0;Ps<Bt;Ps++)Is&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,J.get(R).__webglTexture,q,de+Ps),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,J.get(H).__webglTexture,Nt,Ke+Ps)),B.blitFramebuffer(Wt,he,Ft,Lt,Ht,Ee,Ft,Lt,B.DEPTH_BUFFER_BIT,B.NEAREST);E.bindFramebuffer(B.READ_FRAMEBUFFER,null),E.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(q!==0||R.isRenderTargetTexture||J.has(R)){let Ze=J.get(R),zi=J.get(H);E.bindFramebuffer(B.READ_FRAMEBUFFER,C),E.bindFramebuffer(B.DRAW_FRAMEBUFFER,P);for(let ze=0;ze<Bt;ze++)Is?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ze.__webglTexture,q,de+ze):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ze.__webglTexture,q),Ie?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,zi.__webglTexture,Nt,Ke+ze):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,zi.__webglTexture,Nt),q!==0?B.blitFramebuffer(Wt,he,Ft,Lt,Ht,Ee,Ft,Lt,B.COLOR_BUFFER_BIT,B.NEAREST):Ie?B.copyTexSubImage3D(zt,Nt,Ht,Ee,Ke+ze,Wt,he,Ft,Lt):B.copyTexSubImage2D(zt,Nt,Ht,Ee,Wt,he,Ft,Lt);E.bindFramebuffer(B.READ_FRAMEBUFFER,null),E.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Ie?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(zt,Nt,Ht,Ee,Ke,Ft,Lt,Bt,De,fn,Be.data):H.isCompressedArrayTexture?B.compressedTexSubImage3D(zt,Nt,Ht,Ee,Ke,Ft,Lt,Bt,De,Be.data):B.texSubImage3D(zt,Nt,Ht,Ee,Ke,Ft,Lt,Bt,De,fn,Be):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Nt,Ht,Ee,Ft,Lt,De,fn,Be.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Nt,Ht,Ee,Be.width,Be.height,De,Be.data):B.texSubImage2D(B.TEXTURE_2D,Nt,Ht,Ee,Ft,Lt,De,fn,Be);E.pixelStorei(B.UNPACK_ROW_LENGTH,vn),E.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Me),E.pixelStorei(B.UNPACK_SKIP_PIXELS,Fn),E.pixelStorei(B.UNPACK_SKIP_ROWS,oi),E.pixelStorei(B.UNPACK_SKIP_IMAGES,Ui),Nt===0&&H.generateMipmaps&&B.generateMipmap(zt),E.unbindTexture()},this.initRenderTarget=function(R){J.get(R).__webglFramebuffer===void 0&&it.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?it.setTextureCube(R,0):R.isData3DTexture?it.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?it.setTexture2DArray(R,0):it.setTexture2D(R,0),E.unbindTexture()},this.resetState=function(){F=0,O=0,j=null,E.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}};var Bo=class extends wi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new ge;t.deleteAttribute("uv");let e=new se({side:sn}),n=new se,s=new bo(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new tt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new ro(t,n,6),a=new Qe;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new tt(t,Er(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new tt(t,Er(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new tt(t,Er(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new tt(t,Er(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let f=new tt(t,Er(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new tt(t,Er(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Er(i){return new _o({color:0,emissive:16777215,emissiveIntensity:i})}var Ci=[{id:0,name:"Bubbles",tag:"The Royal Bean",color:"#ff5fb4"},{id:1,name:"Ninja",tag:"The Silent Bean",color:"#3b82f6"},{id:2,name:"Dino",tag:"The Chunky Dino",color:"#3ddc84"},{id:3,name:"Robo",tag:"The Bolt Bot",color:"#ffc233"}],Ho=[{id:0,key:"fun",name:"Fun Map",sub:"Chill",stars:1,limit:400,finishZ:-424,finishY:.15,colors:["#80ed99","#4cc9f0"],blurb:"Giant theme park: rides, highways with cars to drive, a SKY SPEEDWAY to win red racers, then the maze. Nothing can kill you!"},{id:1,key:"jungle",name:"Jungle",sub:"Free Roam",stars:1,limit:0,finishZ:-99999,finishY:99999,free:!0,colors:["#6bbf59","#ffd23f"],blurb:"Wild lion, leopard, elephant & horse roam the trees. Beat them with the BAT to tame them as pets and RIDE them - then climb the hill and free the DINOSAUR! No race, just fun."},{id:2,key:"quest",name:"Jungle Quest",sub:"Team Co-op",stars:2,limit:0,finishZ:-99999,finishY:99999,free:!0,quest:!0,colors:["#7b3fe4","#ffd23f"],blurb:"Walk the long road with your team! Solve 5 mazes, stand on the glowing circles together to drop the boulder, beat each beast with the BAT to open the gate - then FREE THE DRAGON! Nobody can die."},{id:3,key:"arena",name:"Small Room",sub:"Bat Fight",stars:1,limit:0,finishZ:-99999,finishY:99999,free:!0,arena:!0,colors:["#cfe3ff","#ffd9a8"],blurb:"One small plain room, everybody in sight. Beat each other with the BAT! A high SLIDE to ride and 4 BUNGEE pads - nothing else."}];var ko=new z;function kn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;ko.copy(t),ko[n]=0,ko.normalize();let c=.5*o/(o+a),u=1-ko.angleTo(i)/l;return Math.sign(ko[e])===1?u*c:a/(o+a)+c+c*(1-u)}var wr=class i extends ge{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new z,c=new z,u=new z(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,y=new z,m=.5/o;for(let x=0,S=0;x<h.length;x+=3,S+=2)switch(l.fromArray(h,x),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),h[x+0]=u.x*Math.sign(l.x)+c.x*r,h[x+1]=u.y*Math.sign(l.y)+c.y*r,h[x+2]=u.z*Math.sign(l.z)+c.z*r,f[x+0]=c.x,f[x+1]=c.y,f[x+2]=c.z,Math.floor(x/p)){case 0:y.set(1,0,0),d[S+0]=kn(y,c,"z","y",r,n),d[S+1]=1-kn(y,c,"y","z",r,e);break;case 1:y.set(-1,0,0),d[S+0]=1-kn(y,c,"z","y",r,n),d[S+1]=1-kn(y,c,"y","z",r,e);break;case 2:y.set(0,1,0),d[S+0]=1-kn(y,c,"x","z",r,t),d[S+1]=kn(y,c,"z","x",r,n);break;case 3:y.set(0,-1,0),d[S+0]=1-kn(y,c,"x","z",r,t),d[S+1]=1-kn(y,c,"z","x",r,n);break;case 4:y.set(0,0,1),d[S+0]=1-kn(y,c,"x","y",r,t),d[S+1]=1-kn(y,c,"y","x",r,e);break;case 5:y.set(0,0,-1),d[S+0]=kn(y,c,"x","y",r,t),d[S+1]=1-kn(y,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};function Zd(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Pe,c=0;for(let u=0;u<i.length;++u){let h=i[u],f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(e){let u=0,h=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let p=0;p<d.count;++p)h.push(d.getX(p)+u);u+=i[f].attributes.position.count}l.setIndex(h)}for(let u in r){let h=qd(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let y=0;y<o[u].length;++y)d.push(o[u][y][f]);let p=qd(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}}return l}function qd(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new Fe(o,e,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/e;for(let f=0,d=u.count;f<d;f++)for(let p=0;p<e;p++){let y=u.getComponent(f,p);a.setComponent(f+h,p,y)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var _e={R:.42,H:1.55,STEP:.34,EDGE:.28,G:34,RUN:9.4,JUMP:12.2,ACC:70,AIR:22,DEC:95,AIR_DEC:9,ICE_ACC:11,ICE_DEC:5.5,TERM:-50,SNAP:.5},ei=(i,t,e)=>i<t?t:i>e?e:i,$d=new Ln,Jd=new Pn,Kd=new Se,jd=new z,Qd=new z,ns=new Ot,Ii=class{constructor(){this.list=[]}add(t,e,n,s,r,o=0,a=0,l=0,c=1,u=1,h=1,f="XYZ"){$d.set(o,a,l,f),Jd.setFromEuler($d),jd.set(e,n,s),Qd.set(c,u,h),Kd.compose(jd,Jd,Qd);let d=t.index?t.toNonIndexed():t.clone();d.attributes.uv&&d.deleteAttribute("uv"),d.applyMatrix4(Kd);let p=d.attributes.position.count,y=new Float32Array(p*3);ns.set(r);for(let m=0;m<p;m++)y[m*3]=ns.r,y[m*3+1]=ns.g,y[m*3+2]=ns.b;d.setAttribute("color",new Fe(y,3)),this.list.push(d)}addGeo(t){t.index&&(t=t.toNonIndexed()),t.attributes.uv&&t.deleteAttribute("uv"),this.list.push(t)}build(t){if(!this.list.length)return null;let e=Zd(this.list,!1);return this.list.length=0,new tt(e,t)}};var cc=class{constructor(t,e=!1){this.theme=t,this.headless=e,this.group=new Dt,this.solids=[],this.ramps=[],this.discs=[],this.hazards=[],this.updaters=[],this.checkpoints=[],this.zones=[],this.pools=[],this.main=new Ii,this.glow=new Ii,this.waterY=-5,this.killY=-9,this.geoCache=new Map,this.matCache=new Map,this.colorIdx=0,this.arrowTexture=null,this.time=0,this.hitOut={nx:0,nz:1,pow:10},this.onEvent=null}rbox(t,e,n,s){let r=Math.max(.02,Math.min(s,t/2-.01,e/2-.01,n/2-.01)),o=`${t.toFixed(2)}|${e.toFixed(2)}|${n.toFixed(2)}|${r.toFixed(2)}`,a=this.geoCache.get(o);return a||(a=Math.min(t,e,n)<.35?new ge(t,e,n):new wr(t,e,n,2,r),this.geoCache.set(o,a)),a}mat(t,e={}){var r,o,a,l;let n=t+JSON.stringify(e),s=this.matCache.get(n);return s||(s=new se({color:t,roughness:(r=e.rough)!=null?r:.38,metalness:(o=e.metal)!=null?o:.02,emissive:(a=e.emissive)!=null?a:0,emissiveIntensity:(l=e.ei)!=null?l:1}),this.matCache.set(n,s)),s}pick(){let t=this.theme.plat;return t[this.colorIdx++%t.length]}addSolid(t,e,n,s,r,o,a={}){let l={x0:t,y0:e,z0:n,x1:s,y1:r,z1:o,active:!0,ice:!!a.ice,conv:a.conv||null,bounce:a.bounce||0,boost:a.boost||0,dx:0,dy:0,dz:0,moving:!1,name:a.name||""};return this.solids.push(l),l}add(t,e=!0,n=!0){return t.castShadow=e,t.receiveShadow=n,this.group.add(t),t}emit(t,e){this.onEvent&&this.onEvent(t,e)}platform(t,e,n,s,r,o={}){var u,h,f;let a=(u=o.h)!=null?u:1.6,l=(h=o.color)!=null?h:this.pick(),c=this.addSolid(t-s/2,e-a,n-r/2,t+s/2,e,n+r/2,o);if(!this.headless){if(this.main.add(this.rbox(s,a,r,.3),t,e-a/2,n,l),o.pad!==!1&&s>2.4&&r>2.4){let d=(f=o.padColor)!=null?f:o.ice?this.theme.icePad:this.theme.pad;this.main.add(this.rbox(s-1.1,.12,r-1.1,.05),t,e+0,n,d)}if(this.theme.edgeGlow){let d=this.theme.edgeGlow;this.glow.add(this.rbox(s+.04,.12,.12,.03),t,e-.08,n+r/2,d),this.glow.add(this.rbox(s+.04,.12,.12,.03),t,e-.08,n-r/2,d),this.glow.add(this.rbox(.12,.12,r+.04,.03),t+s/2,e-.08,n,d),this.glow.add(this.rbox(.12,.12,r+.04,.03),t-s/2,e-.08,n,d)}}return c}disc(t,e,n,s,r={}){var h,f,d,p,y,m,x,S,w;let o=(h=r.omega)!=null?h:0,a=(f=r.h)!=null?f:1.4,l={cx:t,cz:n,top:e,r:s,th:a,omega:o,phase:(d=r.phase)!=null?d:0,bounce:r.bounce||0,push:r.push||null,ice:!!r.ice,theta:(p=r.phase)!=null?p:0,dTheta:0,kind:"disc",squash:0,first:!0};if(this.discs.push(l),this.headless)return l;if(r.bounce){let g=new Dt;g.position.set(t,e,n);let M=new tt(new Rt(s*.55,s*.7,1.4,20),this.mat((y=r.stem)!=null?y:"#fff3d6"));M.position.y=-.7;let v=new tt(new xe(s,28,14,0,Math.PI*2,0,Math.PI/2),this.mat((m=r.color)!=null?m:"#ff3b6b",{rough:.25}));v.scale.y=.45,v.position.y=-.05,g.add(M,v);for(let T=0;T<6;T++){let _=new tt(new xe(.26,10,8),this.mat("#ffffff")),b=T/6*Math.PI*2;_.position.set(Math.cos(b)*s*.62,.34*(1-.3),Math.sin(b)*s*.62),_.scale.y=.4,g.add(_)}return this.add(g),l.mesh=g,this.updaters.push((T,_)=>{l.squash=Math.max(0,l.squash-_*4);let b=1-Math.sin(l.squash*Math.PI)*.35*l.squash;g.scale.set(1+(1-b)*.5,b,1+(1-b)*.5)}),l}let c=(x=r.color)!=null?x:this.pick(),u=new Rt(s,s,a,40);if(o===0)this.main.add(u,t,e-a/2,n,c),this.main.add(new Rt(s-.5,s-.5,.12,40),t,e,n,(S=r.padColor)!=null?S:this.theme.pad),this.theme.edgeGlow&&this.glow.add(new We(s,.07,6,48),t,e-.1,n,this.theme.edgeGlow,Math.PI/2);else{let g=new Dt;g.position.set(t,e,n);let M=new tt(u,this.mat(c));M.position.y=-a/2;let v=new tt(new Rt(s-.5,s-.5,.12,40),this.mat((w=r.padColor)!=null?w:this.theme.pad));g.add(M,v);for(let T=0;T<4;T++){let _=new tt(this.rbox(s*1.6,.14,.6,.05),this.mat(this.theme.hazard2));_.position.y=.06,_.rotation.y=T*Math.PI/4,g.add(_)}if(this.theme.edgeGlow){let T=new tt(new We(s,.08,6,48),new ye({color:this.theme.edgeGlow,toneMapped:!1}));T.rotation.x=Math.PI/2,T.position.y=-.1,g.add(T)}this.add(g),l.mesh=g,this.updaters.push(T=>{g.rotation.y=l.theta})}return l}ramp(t,e,n,s,r,o,a={}){var O,j;let l={x0:t-o/2,x1:t+o/2,zN:e,zF:s,yN:n,yF:r,conv:a.conv||null,ice:!!a.ice,kind:"ramp"};if(this.ramps.push(l),this.headless)return l;let c=Math.min(n,r)-1.6,u=(O=a.color)!=null?O:this.pick(),h=(V,$,Z)=>[V,$,Z],f=h(l.x0,n,e),d=h(l.x1,n,e),p=h(l.x1,r,s),y=h(l.x0,r,s),m=h(l.x0,c,e),x=h(l.x1,c,e),S=h(l.x1,c,s),w=h(l.x0,c,s),g=[],M=(V,$,Z,at)=>{g.push(...V,...$,...Z,...V,...Z,...at)};M(f,y,p,d),M(f,d,x,m),M(p,y,w,S),M(y,f,m,w),M(d,p,S,x);let v=new Pe;v.setAttribute("position",new pe(g,3)),v.computeVertexNormals();let T=g.length/3,_=new Float32Array(T*3);ns.set(u);for(let V=0;V<T;V++)_[V*3]=ns.r,_[V*3+1]=ns.g,_[V*3+2]=ns.b;v.setAttribute("color",new Fe(_,3)),this.main.addGeo(v);let b=e-s,A=r-n,I=Math.hypot(b,A),D=Math.atan2(A,b),N=(e+s)/2,C=(n+r)/2,P=-Math.sin(D),F=Math.cos(D);return this.main.add(this.rbox(o-1.6,.1,I-.6,.04),t,C+F*.02,N+P*.02*0,(j=a.padColor)!=null?j:a.ice?this.theme.icePad:this.theme.pad,D,0,0),l}mover(t,e,n,s,r,o,a={}){var y,m,x;let l=(y=a.h)!=null?y:1.5,c=this.addSolid(t-s/2,e-l,n-r/2,t+s/2,e,n+r/2,a);c.moving=!0,c.first=!0;let u=null;if(!this.headless){if(u=new tt(this.rbox(s,l,r,.28),this.mat((m=a.color)!=null?m:this.pick(),{rough:.3})),a.pad!==!1){let S=new tt(this.rbox(s-1,.12,r-1,.05),this.mat((x=a.padColor)!=null?x:this.theme.pad));S.position.y=l/2,u.add(S)}if(a.stripes){let S=new tt(this.rbox(s+.02,.4,r+.02,.05),this.mat(this.theme.hazard));S.position.y=0,u.add(S)}this.add(u)}let h=0,f=0,d=0,p=S=>{let[w,g,M]=o(S);c.x0=t-s/2+w,c.x1=t+s/2+w,c.y0=e-l+g,c.y1=e+g,c.z0=n-r/2+M,c.z1=n+r/2+M,c.first&&(h=w,f=g,d=M,c.first=!1),c.dx=w-h,c.dy=g-f,c.dz=M-d,h=w,f=g,d=M,u&&u.position.set(t+w,e-l/2+g,n+M)};return p(0),this.updaters.push(S=>p(S)),c}tile(t,e,n,s,r,o={}){var y,m,x,S,w,g;let a=(y=o.period)!=null?y:4.8,l=(m=o.solidT)!=null?m:2.4,c=(x=o.warn)!=null?x:.8,u=(S=o.off)!=null?S:0,h=this.addSolid(t-s/2,e-1,n-r/2,t+s/2,e,n+r/2,o),f=null,d=null;this.headless||(d=new se({color:(w=o.color)!=null?w:this.pick(),roughness:.3,emissive:0}),f=new tt(this.rbox(s,1,r,.22),d),f.position.set(t,e-.5,n),this.add(f));let p=new Ot((g=o.color)!=null?g:"#ffffff");return this.updaters.push(M=>{let v=((M+u)%a+a)%a;v<l?(h.active=!0,f&&(f.visible=!0,f.position.x=t,d.emissive.setRGB(0,0,0))):v<l+c?(h.active=!0,f&&(f.visible=!0,f.position.x=t+Math.sin(M*70)*.07,d.emissive.setRGB(.55,.05,.02))):(h.active=!1,f&&(f.visible=!1))}),h}conveyor(t,e,n,s,r,o,a={}){let l=this.addSolid(t-s/2,e-1.4,n-r/2,t+s/2,e,n+r/2,{...a,conv:[0,o]});if(this.headless)return l;this.main.add(this.rbox(s,1.4,r,.25),t,e-.7,n,this.theme.convBase);let c=new Xe(s-1.2,r-.6),u=this.arrowTexture?this.arrowTexture.clone():null;u&&(u.needsUpdate=!0,u.wrapS=u.wrapT=js,u.repeat.set(Math.max(1,Math.round((s-1.2)/2.4)),Math.max(1,Math.round((r-.6)/2.4))));let h=new tt(c,new se({color:this.theme.belt,map:u,roughness:.6}));h.rotation.x=-Math.PI/2,o>0&&(h.rotation.z=Math.PI),h.position.set(t,e+.03,n),this.add(h,!1,!0);let f=Math.abs(o);return this.updaters.push((d,p)=>{u&&(u.offset.y-=f*p/2.4/(r-.6)*u.repeat.y)}),l}bar(t,e,n,s,r={}){var S,w,g,M,v,T,_;let o=(S=r.w)!=null?S:1.2,a=(w=r.h)!=null?w:1.2,l=(g=r.omega)!=null?g:1.4,c=(M=r.phase)!=null?M:0,u=(v=r.arms)!=null?v:1,h={type:"bar",test:(b,A,I)=>{if(b.y>e+a||b.y+_e.H<e)return!1;let D=b.x-t,N=b.z-n;if(D*D+N*N>(s/2+1.2)*(s/2+1.2))return!1;let C=c+l*A;for(let P=0;P<u;P++){let F=C+P*Math.PI/u,O=Math.cos(F),j=Math.sin(F),V=D*O-N*j,$=D*j+N*O,Z=ei(V,-s/2,s/2),at=ei($,-o/2,o/2),pt=V-Z,Jt=$-at;if(pt*pt+Jt*Jt<_e.R*_e.R){let kt=Math.hypot(D,N)||.001,Xt=l*N,U=-l*D,k=Math.hypot(Xt,U)||1;Xt/=k,U/=k;let rt=Xt+D/kt*.45,gt=U+N/kt*.45,ut=Math.hypot(rt,gt)||1;return I.nx=rt/ut,I.nz=gt/ut,I.pow=ei(6+Math.abs(l)*kt*1.15,9,21),!0}}return!1}};if(this.hazards.push(h),this.headless)return h;let f=new Dt;f.position.set(t,e+a/2,n);let d=Math.max(3,Math.round(s/2.4)),p=s/d,y=this.mat((T=r.color1)!=null?T:this.theme.hazard,{rough:.3}),m=this.mat((_=r.color2)!=null?_:this.theme.hazard2,{rough:.3});for(let b=0;b<u;b++){let A=new Dt;A.rotation.y=b*Math.PI/u;for(let I=0;I<d;I++){let D=new tt(this.rbox(p*.995,a,o,.25),I%2?y:m);D.position.x=-s/2+p*(I+.5),D.castShadow=!0,A.add(D)}f.add(A)}let x=new tt(new Rt(o*.85,o,a+.7,16),this.mat(this.theme.hub));return x.castShadow=!0,f.add(x),this.add(f),this.updaters.push(b=>{f.rotation.y=c+l*b}),h}hammer(t,e,n,s,r={}){var x,S,w,g,M,v,T,_,b;let o=(x=r.amp)!=null?x:1.1,a=(S=r.omega)!=null?S:1.6,l=(w=r.phase)!=null?w:0,c=(g=r.r)!=null?g:1.3,u=(M=r.span)!=null?M:9,h={type:"hammer",test:(A,I,D)=>{let N=o*Math.sin(a*I+l),C=t+s*Math.sin(N),P=e-s*Math.cos(N),F=o*a*Math.cos(a*I+l),O=s*Math.cos(N)*F,j=ei(P,A.y+.15,A.y+_e.H-.1),V=C-A.x,$=P-j,Z=n-A.z,at=_e.R+c;if(V*V+$*$+Z*Z<at*at){let pt=-V,Jt=-Z;pt=(Math.sign(O)||Math.sign(pt)||1)*1,Jt=Jt*.5;let Xt=Math.hypot(pt,Jt);return D.nx=pt/Xt,D.nz=Jt/Xt,D.pow=ei(Math.abs(O)*1.05+6,10,23),!0}return!1}};if(this.hazards.push(h),this.headless)return h;let f=new Dt;f.position.set(t,e,n);let d=new tt(new Rt(.17,.17,s,10),this.mat(this.theme.hub));d.position.y=-s/2;let p=new tt(new xe(c,28,18),this.mat(this.theme.hazard,{rough:.25}));p.position.y=-s;let y=new tt(new We(c*.98,.12,8,28),this.mat(this.theme.hazard2));y.position.y=-s,y.rotation.x=Math.PI/2;let m=y.clone();if(m.rotation.set(0,Math.PI/2,0),f.add(d,p,y,m),f.traverse(A=>{A.isMesh&&(A.castShadow=!0)}),this.add(f),this.updaters.push(A=>{f.rotation.z=o*Math.sin(a*A+l)}),!this.headless){let A=this.theme.hub;this.main.add(this.rbox(.9,e-((v=r.baseY)!=null?v:e-s-1.5)+1.2,.9,.2),t-u,(e+((T=r.baseY)!=null?T:e-s-1.5))/2-0,n,A),this.main.add(this.rbox(.9,e-((_=r.baseY)!=null?_:e-s-1.5)+1.2,.9,.2),t+u,(e+((b=r.baseY)!=null?b:e-s-1.5))/2-0,n,A),this.main.add(this.rbox(u*2+1,.8,.9,.2),t,e+.6,n,A)}return h}balls(t,e,n,s,r,o,a,l,c={}){let u=n-e,h=u/o,f=l.map(()=>({x:t,z:0,y:0,on:!1})),d=[],p=m=>new Ot(m%2?this.theme.hazard:this.theme.hazard2);this.headless||l.forEach((m,x)=>{let S=new xe(r,32,20),w=S.attributes.position,g=w.count,M=new Float32Array(g*3);for(let T=0;T<g;T++){let _=Math.atan2(w.getZ(T),w.getX(T)),A=Math.floor((_+Math.PI)/(Math.PI*2)*8)%2?new Ot(this.theme.hazard):new Ot(this.theme.hazard2);M[T*3]=A.r,M[T*3+1]=A.g,M[T*3+2]=A.b}S.setAttribute("color",new Fe(M,3));let v=new tt(S,new se({vertexColors:!0,roughness:.25}));v.visible=!1,this.add(v),d.push(v)});let y={type:"balls",test:(m,x,S)=>{for(let w=0;w<f.length;w++){let g=f[w];if(!g.on)continue;let M=ei(g.y,m.y+.15,m.y+_e.H-.1),v=g.x-m.x,T=g.y-M,_=g.z-m.z,b=_e.R+r;if(v*v+T*T+_*_<b*b){let A=(m.x-g.x)*.8,I=1,D=Math.hypot(A,I);return S.nx=A/D,S.nz=I/D,S.pow=ei(o*1.1+4,10,20),!0}}return!1}};return this.hazards.push(y),this.updaters.push(m=>{l.forEach((x,S)=>{let w=f[S],g=((m+x)%a+a)%a,M=g<h;w.on=M,M&&(w.z=e+g*o,w.y=s(w.z)+r,w.x=t);let v=d[S];v&&(v.visible=M,M&&(v.position.set(w.x,w.y,w.z),v.rotation.x=w.z/r))})}),y}seesaw(t,e,n,s,r,o,a,l=0){let c={x0:t-s/2,x1:t+s/2,zN:n+r/2,zF:n-r/2,yN:e,yF:e,conv:null,ice:!1,kind:"ramp",seesaw:!0};this.ramps.push(c);let u=p=>{let y=o*Math.sin(2*Math.PI*p/a+l);return c.yN=e+y,c.yF=e-y,y};if(u(0),this.headless)return this.updaters.push(p=>u(p)),c;this.main.add(new Rt(.5,1.1,2.4,8),t,e-1.4,n,this.theme.hub),this.main.add(this.rbox(s*.9,.7,1.4,.2),t,e-2.5,n,this.theme.hazard2);let h=new Dt;h.position.set(t,e-.25,n);let f=new tt(this.rbox(s,.5,r,.2),this.mat(this.pick(),{rough:.35})),d=new tt(this.rbox(s-1.2,.1,r-1.2,.04),this.mat(this.theme.pad));d.position.y=.27,h.add(f,d);for(let p of[-1,1]){let y=new tt(this.rbox(s,.62,1.2,.2),this.mat(this.theme.hazard,{rough:.3}));y.position.set(0,.03,p*(r/2-.6)),h.add(y)}for(let p of[-1,1]){let y=new tt(new Rt(.1,.1,1.1,8),this.mat(this.theme.hub));y.position.set(p*(s/2-.5),.9,0),h.add(y)}return this.add(h),this.updaters.push(p=>{let y=u(p);h.rotation.x=-Math.atan2(y,r/2)}),c}bungee(t,e,n,s,r,o){let a=this.disc(t,n,e,s,{bounce:r,color:this.theme.hazard});if(this.headless)return a;let l=o,c=14;for(let u=0;u<c;u++){let h=u/c*Math.PI*2,f=t+Math.cos(h)*(s*.92),d=e+Math.sin(h)*(s*.92);this.main.add(new Rt(.07,.07,l-n,5),f,(l+n)/2,d,u%2?"#ffffff":this.theme.hazard)}this.main.add(new We(s*.92,.35,8,36),t,l,e,this.theme.accent,Math.PI/2),this.main.add(new We(s*.92,.2,8,36),t,n+.15,e,"#ffffff",Math.PI/2);for(let u=0;u<3;u++){let h=Math.PI/2+u*Math.PI*2/3+.5,f=t+Math.cos(h)*(s+1.4),d=e+Math.sin(h)*(s+1.4);this.main.add(new Rt(.45,.6,l+12,8),f,(l-12)/2,d,u%2?"#ffd23f":"#ffffff")}return this.glow.add(new xe(.9,12,8),t,l+1.6,e,"#ffffff"),a}tube(t,e,n){if(this.headless)return;let s=new z(0,1,0),r=new z,o=new z,a=new z,l=new Pn,c=new Ln;for(let u=0;u<t.length-1;u++){r.set(...t[u]),o.set(...t[u+1]),a.subVectors(o,r);let h=a.length();a.normalize(),l.setFromUnitVectors(s,a),c.setFromQuaternion(l),this.main.add(new Rt(e,e,h*1.02,6),(r.x+o.x)/2,(r.y+o.y)/2,(r.z+o.z)/2,n,c.x,c.y,c.z)}}airpad(t,e,n,s,r,o={}){var f,d;let a={x:t,z:e,r:n,y0:s,y1:s+r,lift:(f=o.lift)!=null?f:90,vmax:(d=o.vmax)!=null?d:9};if(this.zones.push(a),this.headless)return a;this.main.add(new Rt(n*.95,n,.5,28),t,s+.25,e,this.theme.hub),this.glow.add(new We(n*.8,.14,8,36),t,s+.55,e,"#9cf0ff",Math.PI/2);let l=new ye({color:"#8fe9ff",transparent:!0,opacity:.16,depthWrite:!1,side:$e,toneMapped:!1}),c=new tt(new Rt(n*.92,n*.92,r,24,1,!0),l);c.position.set(t,s+r/2,e),c.renderOrder=3,this.group.add(c);let u=new ye({color:"#e6fbff",transparent:!0,opacity:.5,depthWrite:!1,toneMapped:!1}),h=[];for(let p=0;p<5;p++){let y=new tt(new We(n*.85,.08,6,28),u);y.rotation.x=Math.PI/2,y.renderOrder=3,this.group.add(y),h.push(y)}return this.updaters.push(p=>{h.forEach((y,m)=>{let x=(p*.5+m/5)%1;y.position.set(t,s+.6+x*(r-.8),e),y.scale.setScalar(1-x*.25)})}),a}punch(t,e,n,s,r,o,a={}){var w,g;let l=(w=a.period)!=null?w:3.2,c=(g=a.off)!=null?g:0,u=1,h=Math.hypot(s,r)||1;s/=h,r/=h;let f=M=>{let v=((M+c)%l+l)%l/l,T=(_,b,A)=>{let I=Math.max(0,Math.min(1,(A-_)/(b-_)));return I*I*(3-2*I)};return o*(T(.5,.58,v)-T(.78,.95,v))},d={type:"punch",test:(M,v,T)=>{var F;let _=f(v);if(_<.4)return!1;let b=t+s*(_+.5),A=n+r*(_+.5),I=ei(e,M.y+.15,M.y+_e.H-.1),D=b-M.x,N=e-I,C=A-M.z,P=_e.R+u;return D*D+N*N+C*C<P*P?(T.nx=s,T.nz=r,T.pow=(F=a.pow)!=null?F:15,!0):!1}};if(this.hazards.push(d),this.headless)return d;let p=new Dt;p.position.set(t,e,n),p.rotation.y=Math.atan2(s,r);let y=new tt(new Rt(.22,.22,1,8),this.mat(this.theme.hub));y.rotation.x=Math.PI/2;let m=new tt(new xe(u,20,14),this.mat(this.theme.hazard,{rough:.3})),x=new tt(new Rt(.62,.62,.5,14),this.mat("#ffffff"));x.rotation.x=Math.PI/2,x.position.z=-.95;let S=new tt(new xe(.42,12,10),this.mat(this.theme.hazard,{rough:.3}));return S.position.set(.7,.45,-.35),m.add(x,S),x.position.z=-.95,m.scale.set(1,1,1.1),p.add(y,m),p.traverse(M=>{M.isMesh&&(M.castShadow=!0)}),this.add(p,!1,!1),this.main.add(this.rbox(2.2,2.6,1.2,.3),t-s*.3,e,n-r*.3,this.theme.hub,0,Math.atan2(s,r),0),this.updaters.push(M=>{let v=f(M);y.scale.y=Math.max(.01,v+.2),y.position.z=(v+.2)/2,m.position.z=v+.5}),d}ferris(t,e,n,s,r,o){let a=h=>h*Math.PI*2/r;for(let h=0;h<r;h++)this.mover(t,e-s,n,5,5,f=>{let d=o*f+a(h);return[0,s*(1-Math.cos(d)),s*Math.sin(d)]},{h:.7,color:this.theme.plat[h%this.theme.plat.length],pad:!0});if(this.headless)return;let l=new Dt;l.position.set(t,e,n);let c=this.mat("#ffffff",{rough:.35});for(let h of[-1,1]){let f=new tt(new We(s,.28,8,56),c);f.rotation.y=Math.PI/2,f.position.x=h*3.2,l.add(f)}for(let h=0;h<4;h++)for(let f of[-1,1]){let d=new tt(new Rt(.12,.12,s*2,6),this.mat(this.theme.hazard));d.rotation.x=h*Math.PI/4,d.position.x=f*3.2,l.add(d)}let u=new tt(new Rt(.9,.9,7.4,14),this.mat(this.theme.hub));u.rotation.z=Math.PI/2,l.add(u),this.add(l,!0,!1);for(let h of[-1,1])for(let f of[-1,1])this.main.add(this.rbox(.7,e+1,.7,.2),t+h*4.4,(e-1)/2,n+f*s*.55,this.theme.hub,0,0,0,1,1,1);this.updaters.push(h=>{l.rotation.x=-(o*h)})}pirate(t,e,n,s,r,o=.1){let a=o+n;if(this.mover(t,o,e,10,5,c=>{let u=s*Math.sin(2*Math.PI*c/r);return[0,n*(1-Math.cos(u)),n*Math.sin(u)]},{h:.9,color:this.theme.hazard,stripes:!0,pad:!0}),this.headless)return;for(let c of[-1,1])this.main.add(this.rbox(.8,a+2,.8,.2),t+c*6.2,(a+2)/2-.5,e+2.2,this.theme.hub,0,0,.12*c),this.main.add(this.rbox(.8,a+2,.8,.2),t+c*6.2,(a+2)/2-.5,e-2.2,this.theme.hub,0,0,.12*c);this.main.add(this.rbox(14.5,.9,.9,.2),t,a+.4,e,this.theme.accent);let l=new Dt;l.position.set(t,a,e);for(let c of[-1,1]){let u=new tt(new Rt(.16,.16,n,8),this.mat("#ffffff"));u.position.set(c*4.2,-n/2,0),l.add(u)}this.add(l,!0,!1),this.updaters.push(c=>{l.rotation.x=-s*Math.sin(2*Math.PI*c/r)})}dropTower(t,e,n,s=13){let r=o=>{let a=(o%s+s)%s;if(a<1)return 0;if(a<5.5){let l=(a-1)/4.5;return n*(l*l*(3-2*l))}if(a<8.5)return n;if(a<9.4){let l=(a-8.5)/.9;return n*(1-l*l)}return 0};if(this.mover(t,.1,e,6,6,o=>[0,r(o),0],{h:.9,color:this.theme.accent,stripes:!0,pad:!0}),!this.headless){for(let o of[-1,1])for(let a of[-1,1])this.main.add(this.rbox(.7,n+5,.7,.2),t+o*3.6,(n+5)/2-.5,e+a*3.6,"#ffffff");this.main.add(this.rbox(8.2,.8,8.2,.2),t,n+4.6,e,this.theme.hazard),this.glow.add(new xe(.7,10,8),t,n+5.6,e,"#ffffff")}}orbit(t,e,n,s,r,o){for(let a=0;a<r;a++){let l=a*Math.PI*2/r;this.mover(t+n,s,e,4.4,4.4,c=>{let u=o*c+l;return[n*Math.cos(u)-n,.7*Math.sin(c*1.3+l),n*Math.sin(u)]},{h:.8,color:this.theme.plat[a%this.theme.plat.length],pad:!0})}this.headless||(this.main.add(new Rt(.7,.9,s+5,10),t,(s+5)/2-.4,e,this.theme.hub),this.main.add(new Le(2.4,2.2,14),t,s+6,e,this.theme.hazard),this.glow.add(new We(n,.12,6,48),t,s-.5,e,"#ffffff",Math.PI/2))}cannon(t,e,n,s){if(this.disc(t,0,e,2.4,{bounce:n,push:s,color:this.theme.hazard}),this.headless)return;let r=s[1]<0?-1:1;this.main.add(new Rt(1,1.35,5.5,14),t,2.4,e-r*2.8,this.theme.hub,r*.93,0,0),this.main.add(new We(1.1,.2,8,18),t,4.4,e-r*.5,this.theme.accent,Math.PI/2-r*.64,0,0)}checkpoint(t,e,n,s=14){let r={x:t,y:e,z:n,w:s,spawn:[t,e,n+1]};return this.checkpoints.push(r),this.headless||this.arch(t,e,n,s,this.theme.accent,!0),r}arch(t,e,n,s,r,o=!1){let a=o?5.2:8.5;this.main.add(this.rbox(.9,a,.9,.25),t-s/2,e+a/2,n,r),this.main.add(this.rbox(.9,a,.9,.25),t+s/2,e+a/2,n,r),this.main.add(this.rbox(s+.9,o?.9:1.6,o?.9:1.4,.25),t,e+a,n,r),this.glow.add(new xe(.42,12,8),t-s/2,e+a+.8,n,"#ffffff"),this.glow.add(new xe(.42,12,8),t+s/2,e+a+.8,n,"#ffffff")}update(t,e){this.time=t;for(let n of this.updaters)n(t,e);for(let n of this.discs)if(n.omega){let s=n.phase+n.omega*t;n.dTheta=n.first?0:s-n.theta,n.theta=s,n.first=!1}}carry(t){let e=t.ground;if(e){if(e.moving)t.x+=e.dx,t.y+=e.dy,t.z+=e.dz;else if(e.kind==="disc"&&e.omega){let n=t.x-e.cx,s=t.z-e.cz,r=e.dTheta,o=Math.cos(r),a=Math.sin(r);t.x=e.cx+n*o+s*a,t.z=e.cz-n*a+s*o,t.yawOff=(t.yawOff||0)+r}}}checkHazards(t,e){for(let n of this.hazards)if(n.test(t,e,this.hitOut))return this.hitOut;return null}finalize(){if(this.headless)return;let t=this.main.build(new se({vertexColors:!0,roughness:.4,metalness:.02}));t&&(t.castShadow=!0,t.receiveShadow=!0,this.group.add(t));let e=this.glow.build(new ye({vertexColors:!0,toneMapped:!1}));e&&this.group.add(e)}resolveHorizontal(t){let e=_e.R,n=_e.H;for(let s of this.solids){if(!s.active||s.y1<=t.y+_e.STEP||s.y0>=t.y+n||t.x<s.x0-e||t.x>s.x1+e||t.z<s.z0-e||t.z>s.z1+e)continue;let r=ei(t.x,s.x0,s.x1),o=ei(t.z,s.z0,s.z1),a=t.x-r,l=t.z-o,c=a*a+l*l;if(c>=e*e)continue;let u,h;if(c>1e-9){let d=Math.sqrt(c),p=e-d;u=a/d,h=l/d,t.x+=u*p,t.z+=h*p}else{let d=t.x-s.x0,p=s.x1-t.x,y=t.z-s.z0,m=s.z1-t.z,x=Math.min(d,p,y,m);x===d?(t.x=s.x0-e,u=-1,h=0):x===p?(t.x=s.x1+e,u=1,h=0):x===y?(t.z=s.z0-e,u=0,h=-1):(t.z=s.z1+e,u=0,h=1)}let f=t.vx*u+t.vz*h;if(f<0&&(t.vx-=f*u,t.vz-=f*h),s.moving){let d=s.dx*u+s.dz*h;d>0&&(t.vx+=u*Math.min(d/.016,8)*.3,t.vz+=h*Math.min(d/.016,8)*.3)}}for(let s of this.discs){if(t.y+n<=s.top-s.th||t.y>=s.top-_e.STEP)continue;let r=t.x-s.cx,o=t.z-s.cz,a=Math.hypot(r,o),l=s.r+e;if(a<l&&a>1e-6){let c=r/a,u=o/a;t.x=s.cx+c*l,t.z=s.cz+u*l;let h=t.vx*c+t.vz*u;h<0&&(t.vx-=h*c,t.vz-=h*u)}}}findGround(t,e,n){let s=_e.EDGE,r=e+_e.STEP,o=n&&t.noSnap<=0?_e.SNAP:0,a=null,l=-1e9;for(let c of this.solids){if(!c.active)continue;let u=c.y1;u>r||u<=l||t.x<c.x0-s||t.x>c.x1+s||t.z<c.z0-s||t.z>c.z1+s||(t.y<=u+1e-4||t.y<=u+o)&&(a=c,l=u)}for(let c of this.ramps){if(t.x<c.x0-s||t.x>c.x1+s||t.z>c.zN+.3||t.z<c.zF-.3)continue;let u=ei((c.zN-t.z)/(c.zN-c.zF),0,1),h=c.yN+(c.yF-c.yN)*u;h>r||h<l||(t.y<=h+1e-4||t.y<=h+o)&&(a=c,l=h)}for(let c of this.discs){let u=c.top;if(u>r||u<l)continue;let h=t.x-c.cx,f=t.z-c.cz,d=c.r+s*.8;h*h+f*f>d*d||(t.y<=u+1e-4||t.y<=u+o)&&(a=c,l=u)}return a?{s:a,top:l}:null}hitCeiling(t,e){for(let n of this.solids)if(n.active&&!(e+_e.H>n.y0+.02||t.y+_e.H<=n.y0)&&!(t.x<n.x0||t.x>n.x1||t.z<n.z0||t.z>n.z1))return n;return null}};function w1(i,t,e){let n=document.createElement("canvas");n.width=t,n.height=e;let s=n.getContext("2d");if(i==="pk"){s.fillStyle="#01411c",s.fillRect(0,0,t,e),s.fillStyle="#ffffff",s.fillRect(0,0,t*.25,e);let o=t*.625,a=e*.5,l=e*.3;s.beginPath(),s.arc(o,a,l,0,Math.PI*2),s.fillStyle="#ffffff",s.fill(),s.beginPath(),s.arc(o+l*.28,a-l*.12,l*.82,0,Math.PI*2),s.fillStyle="#01411c",s.fill();let c=o+l*.52,u=a-l*.34,h=l*.34,f=h*.4;s.beginPath();for(let d=0;d<10;d++){let p=-Math.PI/2+d*Math.PI/5+.35,y=d%2?f:h;s.lineTo(c+Math.cos(p)*y,u+Math.sin(p)*y)}s.closePath(),s.fillStyle="#ffffff",s.fill()}else s.fillStyle="#000000",s.fillRect(0,0,t,e/3),s.fillStyle="#ffffff",s.fillRect(0,e/3,t,e/3),s.fillStyle="#007a3d",s.fillRect(0,e*2/3,t,e/3),s.beginPath(),s.moveTo(0,0),s.lineTo(t*.33,e/2),s.lineTo(0,e),s.closePath(),s.fillStyle="#ce1126",s.fill();let r=new bn(n);return r.colorSpace=Ne,r.anisotropy=4,r}var tp={};function du(i){return tp[i]||(tp[i]=w1(i,768,512))}function Go(i,t,e){let n=new Dt,s=new tt(new Xe(t,e),new ye({map:du(i),toneMapped:!1,side:$e}));n.add(s);let r=new tt(new ge(t+1.2,e+1.2,.3),new se({color:"#f4f1e8",roughness:.5}));return r.position.z=-.2,n.add(r),n}var T1='"Noto Nastaliq Urdu","Jameel Noori Nastaleeq","Alvi Nastaleeq","Geeza Pro","Segoe UI","Tahoma","Arial",sans-serif',A1='"Lilita One","Fredoka One","Arial Rounded MT Bold","Trebuchet MS",Impact,Arial,sans-serif';function R1(i,t,e={}){let s=Math.round(1024/t),r=document.createElement("canvas");r.width=1024,r.height=s;let o=r.getContext("2d"),a=o.createLinearGradient(0,0,1024,s);a.addColorStop(0,(e.bg||["#1b1464","#3a2d9e"])[0]),a.addColorStop(1,(e.bg||["#1b1464","#3a2d9e"])[1]),o.fillStyle=a,o.fillRect(0,0,1024,s),o.lineWidth=s*.05,o.strokeStyle=e.border||"#ffd23f",o.strokeRect(s*.05,s*.05,1024-s*.1,s-s*.1);let l=e.urdu?T1:A1,c=s*(e.urdu?.36:.5);o.textAlign="center",o.textBaseline="alphabetic",e.urdu&&(o.direction="rtl");let u=1024*(e.urdu?.62:.86),h=s*(e.urdu?.6:.62),f=c*.8,d=c*.2;for(let m=0;m<3;m++){o.font=`${c}px ${l}`;let x=o.measureText(i);f=x.actualBoundingBoxAscent>0?x.actualBoundingBoxAscent:c*.8,d=x.actualBoundingBoxDescent>0?x.actualBoundingBoxDescent:c*.2;let S=Math.min(1,u/Math.max(1,x.width),h/Math.max(1,f+d));if(S>=.99)break;c*=S}let p=s/2+(f-d)/2;o.lineJoin="round",o.lineWidth=c*.12,o.strokeStyle=e.stroke||"#000000",o.strokeText(i,1024/2,p),o.fillStyle=e.fg||"#ffd23f",o.fillText(i,1024/2,p);let y=new bn(r);return y.colorSpace=Ne,y.anisotropy=4,y}function cn(i,t,e,n={}){let s=new Dt;s.add(new tt(new Xe(t,e),new ye({map:R1(i,t/e,n),toneMapped:!1,side:$e})));let r=new tt(new ge(t+.8,e+.8,.3),new se({color:n.frame||"#f4f1e8",roughness:.5}));return r.position.z=-.2,s.add(r),s}var hn=16,Wo=7,Ce=56,Es=-262,ni=-336,gn=-4,Vo=-416;function ep(){let i=[],t=[],e=[],n=[],s=[],r=[],o=[];i.push({ax:38,az:ni-7,bx:38,bz:-410,hw:6,y0:0,y1:hn,g:"ramp+"}),i.push({ax:Ce,az:Vo,bx:Ce,bz:gn,hw:Wo,y0:hn,y1:hn,g:"s2"}),i.push({ax:Ce,az:gn,bx:-Ce,bz:gn,hw:Wo,y0:hn,y1:hn,g:"sx"}),i.push({ax:-Ce,az:gn,bx:-Ce,bz:Vo,hw:Wo,y0:hn,y1:hn,g:"s3"}),t.push({x:47,z:Vo,r:15,y:hn,g:"pa"},{x:Ce,z:gn,r:12,y:hn,g:"pb"},{x:-Ce,z:gn,r:12,y:hn,g:"pc"},{x:-47,z:Vo,r:15,y:hn,g:"pd"});let a=(y,m)=>s.push({k:"barrel",x:y,z:m,r:1.3}),l=(y,m,x)=>{for(let S=m;S<=x+.01;S+=2.4)s.push({k:"block",x:y,z:S,r:1.2})},c=(y,m,x=7)=>{n.push({x:y,z:m,r:x,y:hn})},u=(y,m)=>e.push({x:y,z:m,r:4,y:hn}),h=-Ce,f=2.2;u(Ce,-396),a(Ce-f,-385),a(Ce+f,-375),a(Ce-f,-365),a(Ce+f,-355),u(Ce,-345),l(Ce-3.2,-300,-292),l(Ce+3.2,-284,-276),u(Ce,-255),c(Ce,-235),u(Ce,-190),a(Ce+f,-150),a(Ce-f,-140),a(Ce+f,-130),u(Ce,-100),u(Ce,-22),a(36,gn+f),a(26,gn-f),u(15,gn),u(-15,gn),a(-26,gn+f),a(-36,gn-f),u(h,-25),a(h-f,-45),a(h+f,-55),a(h-f,-65),u(h,-128),c(h,-205),l(h-3.2,-250,-242),l(h+3.2,-234,-226),u(h,-190),c(h,-300),u(h,-338),a(h-f,-350),a(h+f,-358),a(h-f,-366),u(h,-388),r.push({x:Ce,z:-250,w:8},{x:15,z:gn,w:8},{x:h,z:-185,w:8},{x:h,z:-397,w:8});let d={x:-47,z:Vo,r:15},p=[-57,-51,-45,-39].map((y,m)=>({id:4+m,x:y,z:-423,y:hn,yaw:0}));for(let y of[1,-1]){for(let m=-40;m>-405;m-=30)Math.abs(m+26)>20&&Math.abs(m-Es)>11&&Math.abs(m-ni)>11&&o.push({x:y*Ce-10.2,z:m,kind:"gantry",sd:y,span:10.2});y>0&&o.push({x:38-6.6,z:-380,kind:"col"},{x:38+6.6,z:-380,kind:"col"},{x:38-6.6,z:-362,kind:"col"},{x:38+6.6,z:-362,kind:"col"}),o.push({x:y*Ce,z:gn,kind:"plaza"},{x:y*34,z:-421,kind:"plaza"},{x:y*44,z:-404,kind:"plaza"})}return{ground:[],segs:i,plazas:t,boosts:e,slicks:n,defs:s,gates:r,garage:d,racers:p,pillars:o}}function np(i){let t=i.map(e=>({x:e.x,z:e.z,y:hn,r:e.r,vx:0,vz:0}));return()=>t}function ip(i,t,e,n){let s=i.main,r=i.glow,o=i.group,a=hn,l=(g,M,v)=>new ge(g,M,v),c="#2f3342",u="#ff3b3b",h="#ffffff",f=(g,M,v)=>{for(let T of t.segs){if(T.g===v)continue;let _=T.bx-T.ax,b=T.bz-T.az,A=_*_+b*b,I=((g-T.ax)*_+(M-T.az)*b)/A;if(I=Math.max(0,Math.min(1,I)),Math.hypot(g-(T.ax+_*I),M-(T.az+b*I))<T.hw-.5)return!0}for(let T of t.plazas)if(T.g!==v&&Math.hypot(g-T.x,M-T.z)<T.r-.5)return!0;return!1},d=0;for(let g of t.segs){let M=Math.hypot(g.bx-g.ax,g.bz-g.az),v=Math.max(1,Math.ceil(M/12));for(let T=0;T<v;T++,d++){let _=T/v,b=(T+1)/v,A=g.ax+(g.bx-g.ax)*_,I=g.az+(g.bz-g.az)*_,D=g.ax+(g.bx-g.ax)*b,N=g.az+(g.bz-g.az)*b,C=g.y0+(g.y1-g.y0)*_,P=g.y0+(g.y1-g.y0)*b,F=D-A,O=N-I,j=Math.hypot(F,O),V=(A+D)/2,$=(I+N)/2,Z=(C+P)/2,at=-Math.atan2(O,F),pt=Math.atan2(P-C,j),Jt=-O/j,kt=F/j,Xt=Math.hypot(j,P-C);s.add(l(Xt+.3,.9,g.hw*2),V,Z-.45,$,c,0,at,pt,1,1,1,"YXZ");for(let U of[-1,1]){let k=V+Jt*U*(g.hw-.3),rt=$+kt*U*(g.hw-.3);f(k,rt,g.g)||(s.add(l(Xt+.05,1,.55),k,Z+.5,rt,(d+(U>0?1:0))%2?u:h,0,at,pt,1,1,1,"YXZ"),r.add(l(Xt+.05,.12,.2),k-Jt*U*.1,Z+1.1,rt-kt*U*.1,"#22f2ff",0,at,pt,1,1,1,"YXZ"))}d%2===0&&!f(V,$,g.g)&&r.add(l(Math.min(Xt,5)*.55,.04,.3),V,Z+.04,$,"#ffe14a",0,at,pt,1,1,1,"YXZ")}}for(let g of t.plazas){s.add(new Rt(g.r,g.r,.9,40),g.x,g.y-.45,g.z,c);for(let M=0;M<36;M++){let v=M/36*Math.PI*2,T=g.x+Math.cos(v)*(g.r-.3),_=g.z+Math.sin(v)*(g.r-.3);f(T,_,g.g)||s.add(l(2.4,1,.55),T,g.y+.5,_,M%2?u:h,0,-v+Math.PI/2,0)}}for(let g of t.pillars)if(g.kind==="gantry"){for(let M of[-1,1])s.add(new Rt(.55,.7,a-.9,10),g.x+(M>0?2*g.span:0),(a-.9)/2,g.z,"#9aa3b8");s.add(l(2*g.span+1.4,.9,1.4),g.x+g.span,a-1.35,g.z,"#7b84a0")}else g.kind==="col"?s.add(new Rt(.5,.65,a*.85,10),g.x,a*.42,g.z,"#9aa3b8"):s.add(new Rt(1.1,1.5,a-.9,12),g.x,(a-.9)/2,g.z,"#9aa3b8");for(let g of t.boosts){s.add(l(10,.07,8),g.x,g.y+.04,g.z,"#ff9f1c");for(let M=0;M<3;M++)s.add(new Le(1.5,2,3),g.x,g.y+.1,g.z+2-M*2,"#fff3b0",0,Math.PI,0)}let p=new Ii;for(let g of t.slicks)p.add(new Rt(g.r,g.r,.05,28),g.x,g.y+.04,g.z,"#1c1030"),p.add(new Rt(g.r*.62,g.r*.62,.03,24),g.x,g.y+.07,g.z,"#3a1f66");for(let g of t.defs)g.k==="barrel"&&(p.add(new Rt(g.r*.85,g.r*.85,1.5,14),g.x,a+.75,g.z,"#ff7a1a"),p.add(new Rt(g.r*.88,g.r*.88,.28,14),g.x,a+.95,g.z,"#ffffff")),g.k==="block"&&(p.add(l(g.r*2,1.3,g.r*2),g.x,a+.65,g.z,"#aeb4c6"),p.add(l(g.r*2.02,.2,g.r*.7),g.x,a+1.32,g.z,"#ffd23f"));let y=p.build(new se({vertexColors:!0,roughness:.5}));y&&(y.castShadow=!0,o.add(y),i.skyObst=y);let m=(g,M,v,T,_,b,A,I)=>{let D=cn(g,M,v,T);return D.position.set(_,b,A),D.rotation.y=I,o.add(D),D},x={bg:["#22c55e","#0b7a3a"],fg:"#ffffff",stroke:"#053b1c",border:"#ffd23f"};t.gates.forEach((g,M)=>{let v=M===1,T=M===t.gates.length-1;for(let A of[-1,1]){let I=v?g.x:g.x+A*(Wo-.3),D=v?gn+A*(Wo-.3):g.z;s.add(l(.7,7,.7),I,a+3.5,D,"#2b1c6b")}let _=g.x,b=v?gn:g.z;m(T?"FINISH - RACERS UNLOCKED!":`SKY GATE ${M+1}`,T?15:9,T?2.6:2,T?{bg:["#e0001f","#8f0014"],fg:"#ffffff",stroke:"#33000a",border:"#ffd23f"}:x,_,a+7.4,b,v?Math.PI/2:0)});let S={bg:["#ff9f1c","#e0601a"],fg:"#ffffff",stroke:"#4a1c00",border:"#ffffff"};for(let g of[-1,1])s.add(l(.8,8,.8),38+g*7.2,4,ni-12,"#2b1c6b");m("SKY SPEEDWAY \u25B2  WIN A RACER",17,3.2,S,38,8.8,ni-12,0),m("SKY SPEEDWAY \u2192",14,3.2,S,Ce,5.4,ni+20,0);let w=t.garage;for(let g of[-1,1])s.add(l(.8,9,.8),w.x+g*12,a+4.5,w.z-9,"#2b1c6b");m("RACER GARAGE",24,4.6,{bg:["#e0001f","#8f0014"],fg:"#ffffff",stroke:"#33000a",border:"#ffd23f"},w.x,a+10.2,w.z-9,0);for(let g of t.racers)s.add(l(5.2,.07,6.8),g.x,a+.03,g.z,"#e0001f")}var ii={HX:90,ZS:12,ZN:-228},Te={x:52,z:-110,x0:33,x1:71,z0:-176,z1:-76,summitY:15,sx:52,sz:-165},En={lion:{name:"LION",walk:3,run:9,aggro:22,hp:4,r:1.5,ride:1.9,seat:1.65,big:1,sound:"ROAR!"},leopard:{name:"LEOPARD",walk:3.4,run:11,aggro:22,hp:4,r:1.3,ride:2.2,seat:1.45,big:0,sound:"GRRR!"},elephant:{name:"ELEPHANT",walk:2.4,run:6,aggro:18,hp:6,r:2.3,ride:1.35,seat:3.5,big:1,sound:"TOOOT!"},horse:{name:"HORSE",walk:3.2,run:11.5,aggro:15,hp:3,r:1.5,ride:2.3,seat:2.05,big:0,sound:"NEIGH!"},coyote:{name:"COYOTE",walk:3.2,run:9.5,aggro:24,hp:5,r:1.2,ride:2,seat:1.35,big:0,sound:"YIP!"},boar:{name:"WILD BOAR",walk:3,run:9,aggro:24,hp:6,r:1.3,ride:1.9,seat:1.4,big:0,sound:"OINK!"},hyena:{name:"HYENA",walk:3.4,run:11,aggro:24,hp:7,r:1.3,ride:2.2,seat:1.4,big:0,sound:"HAHA!"},bear:{name:"BEAR",walk:2.8,run:8.5,aggro:24,hp:8,r:2,ride:1.6,seat:2.6,big:1,sound:"GROWL!"},gorilla:{name:"GORILLA",walk:3,run:9,aggro:24,hp:9,r:2,ride:1.7,seat:2.7,big:1,sound:"OOH OOH!"},dino:{name:"DINOSAUR",walk:2.6,run:8,aggro:0,hp:6,r:2.7,ride:1.75,seat:3.35,big:1,sound:"RAWR!"}},fc=[{id:0,kind:"lion",x:-50,z:-70},{id:1,kind:"leopard",x:-28,z:-160},{id:2,kind:"elephant",x:15,z:-185},{id:3,kind:"horse",x:-62,z:-115},{id:4,kind:"dino",x:Te.sx,z:Te.sz,y:Te.summitY}],ke={IDLE:0,WALK:1,CHASE:2,ATTACK:3,STAGGER:4,TIED:5,PET:6,RIDDEN:7,HIDDEN:8},dc={defs:fc};function C1(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}var hc=null;function pc(){if(hc)return hc;let i=C1(20260601),t=[];for(let e=0;e<6e3&&t.length<72;e++){let n=-84+i()*168,s=6-i()*226;Math.hypot(n,s)<17||n>Te.x0-5&&n<Te.x1+5&&s>Te.z0-5&&s<Te.z1+5||t.some(r=>Math.hypot(r.x-n,r.z-s)<9)||t.push({x:n,z:s,r:1.25,s:.85+i()*.7,k:Math.floor(i()*3)})}return hc={trees:t,hill:Te},hc}var Xo=(i,t,e=0)=>i>Te.x0-e&&i<Te.x1+e&&t>Te.z0-e&&t<Te.z1+e;function rp(i=fc){return i.map(t=>({id:t.id,kind:t.kind,x:t.x,y:t.y||0,z:t.z,yaw:Math.PI,vx:0,vz:0,st:t.hidden?ke.HIDDEN:t.kind==="dino"?ke.TIED:ke.IDLE,bounds:t.bounds||null,hp:En[t.kind].hp,owner:0,rider:0,tx:t.x,tz:t.z,wait:1+Math.random()*3,cool:1,wind:0,stagger:0,target:0,home:{x:t.x,z:t.z}}))}function pu(i,t,e,n){let s=i.bounds,r=s?s.x0+e:-(ii.HX-e-1),o=s?s.x1-e:ii.HX-e-1,a=s?s.z0+e:ii.ZN+e+1,l=s?s.z1-e:ii.ZS-e-1;i.x=Math.max(r,Math.min(o,i.x)),i.z=Math.max(a,Math.min(l,i.z));for(let c of t.trees){let u=i.x-c.x,h=i.z-c.z,f=Math.hypot(u,h),d=c.r+e*.6;if(f<d){let p=f>1e-4?d/f:1;i.x=c.x+(f>1e-4?u*p:d),i.z=c.z+(f>1e-4?h*p:0)}}if(!n&&!s&&Xo(i.x,i.z,e*.5)){let c=i.x-(Te.x0-e*.5),u=Te.x1+e*.5-i.x,h=i.z-(Te.z0-e*.5),f=Te.z1+e*.5-i.z,d=Math.min(c,u,h,f);d===c?i.x=Te.x0-e*.5:d===u?i.x=Te.x1+e*.5:d===h?i.z=Te.z0-e*.5:i.z=Te.z1+e*.5}}function sp(i,t){for(let e=0;e<12;e++){let n=i.bounds,s=n?1:90,r=n?n.x0+2+Math.random()*(n.x1-n.x0-4):i.home.x+(Math.random()-.5)*s,o=n?n.z0+2+Math.random()*(n.z1-n.z0-4):i.home.z+(Math.random()-.5)*s;if(!(!n&&(Math.abs(r)>ii.HX-8||o>ii.ZS-8||o<ii.ZN+8||Xo(r,o,6)))&&!t.trees.some(a=>Math.hypot(a.x-r,a.z-o)<3.5))return[r,o]}return[i.home.x,i.home.z]}function uc(i,t,e,n,s){let r=t-i.x,o=e-i.z,a=Math.hypot(r,o);if(a<.05)return a;let c=Math.atan2(r,o)-i.yaw;c=Math.atan2(Math.sin(c),Math.cos(c)),i.yaw+=c*(1-Math.exp(-7*s));let u=Math.min(n,a/Math.max(s,.001)),h=Math.max(.15,1-Math.abs(c)/2.2);return i.vx=Math.sin(i.yaw)*u*h,i.vz=Math.cos(i.yaw)*u*h,i.x+=i.vx*s,i.z+=i.vz*s,a}function op(i,t,e,n,s=[]){for(let r of i){let o=En[r.kind],a=r.owner?e.find(u=>u.id===r.owner):null;if(r.vx=r.vz=0,r.st===ke.HIDDEN)continue;if(r.rider){let u=e.find(h=>h.id===r.rider);if(!u)r.rider=0;else{r.x=u.x,r.y=u.y,r.z=u.z,r.yaw=u.r,r.st=ke.RIDDEN;continue}}if(r.cool>0&&(r.cool-=t),r.stagger>0){r.stagger-=t,r.x+=(r.kvx||0)*t,r.z+=(r.kvz||0)*t,r.kvx*=.9,r.kvz*=.9,pu(r,n,o.r,r.kind==="dino"),r.st=ke.STAGGER;continue}if(r.kind==="dino"&&!r.owner){r.st=ke.TIED;continue}if(r.owner){if(r.st=ke.PET,a&&r.y<1.5&&a.y<2.5&&!a.mounted){let u=Math.hypot(a.x-r.x,a.z-r.z);n.petBounds&&(r.bounds=n.petBounds),u>(n.petBounds?16:60)?(r.x=a.x-3,r.z=a.z+3):u>5.5?(uc(r,a.x,a.z,Math.min(o.run,3+u*.9),t),r.st=ke.WALK):u<3&&(uc(r,r.x+(r.x-a.x),r.z+(r.z-a.z),o.walk,t),r.st=ke.WALK),pu(r,n,o.r,!1)}r.y<1.5&&(r.y=0);continue}let l=null,c=o.aggro;for(let u of e){if(u.mounted||u.y>2.5||r.bounds&&(u.x<r.bounds.x0-1||u.x>r.bounds.x1+1||u.z<r.bounds.z0-1||u.z>r.bounds.z1+1))continue;let h=Math.hypot(u.x-r.x,u.z-r.z);h<c&&(c=h,l=u)}if(r.wind>0){if(r.wind-=t,r.st=ke.ATTACK,r.wind<=0){for(let u of e){if(u.mounted||u.y>2.5)continue;let h=u.x-r.x,f=u.z-r.z,d=Math.hypot(h,f);if(d<o.r+2.6){let p=d||1;s.push({k:"bite",id:r.id,pid:u.id,nx:h/p,nz:f/p,big:o.big})}}r.cool=2.6,r.recover=.7}continue}if(r.recover>0){r.recover-=t,r.st=ke.IDLE;continue}l?(r.st=ke.CHASE,uc(r,l.x,l.z,o.run,t)<o.r+2&&r.cool<=0&&(r.wind=.5)):r.wait>0?(r.wait-=t,r.st=ke.IDLE):(r.st=ke.WALK,uc(r,r.tx,r.tz,o.walk,t)<1.2&&(r.wait=2+Math.random()*5,[r.tx,r.tz]=sp(r,n))),pu(r,n,o.r,!1),r.y=0,r.st===ke.WALK&&Math.hypot(r.vx,r.vz)<.2&&([r.tx,r.tz]=sp(r,n))}return s}function ap(i,t,e,n,s=[]){if(i.owner||i.rider||i.st===ke.HIDDEN)return s;let r=En[i.kind];i.hp-=1,i.stagger=.7,i.wind=0,i.cool=1.4;let o=i.x-e,a=i.z-n,l=Math.hypot(o,a)||1,c=i.kind==="dino"?0:6;return i.kvx=o/l*c,i.kvz=a/l*c,s.push({k:"hit",id:i.id,hp:i.hp}),i.hp<=0&&(i.hp=r.hp,i.owner=t,i.st=ke.PET,s.push({k:"tame",id:i.id,pid:t})),s}var mc=[[-7.5,3.5],[7.5,3.5],[0,-8.5]],I1="\u0639\u06A9\u0631\u0645\u06C1";function lp(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function cp(i,t,e){let n=pc(),s=ii.HX,r=ii.ZS,o=ii.ZN,a=r-o,l=!i.headless,c=lp(9137),u=C=>C[Math.floor(c()*C.length)],h=i.main;e.startArch=99,e.jungle=!0,e.spawn={x:0,y:0,z:1.5},i.checkpoints.push({x:0,y:0,z:6,w:14,spawn:[0,0,3]}),i.platform(0,0,(r+o)/2,s*2+4,a+4,{h:2,color:"#5cbf4a",pad:!1});let f=["#2f8a3c","#3fa24a","#267a34","#4bb35a"];for(let C=r+2,P=0;C>o-4;C-=14,P++)for(let F of[-1,1])i.platform(F*(s+1),26,C-7,2,14,{h:26,color:f[(P+(F>0?2:0))%4],pad:!1});i.platform(0,26,r+1,s*2+4,2,{h:26,color:f[1],pad:!1}),i.platform(0,26,o-1,s*2+4,2,{h:26,color:f[3],pad:!1});let d=Te.x,p=Te.z,y=["#8a6a47","#7a5a3a","#6e5236"],m="#63c24c";i.platform(d,5,p-14,32,48,{h:5,color:y[0],padColor:m}),i.platform(d,10,p-37,24,26,{h:10,color:y[1],padColor:m}),i.platform(d,15,p-55,18,18,{h:15,color:y[2],padColor:m}),i.ramp(d-8,p+30,0,p+10,5,9,{color:"#9a7a52",padColor:"#7bd35c"}),i.ramp(d+8,p-4,5,p-24,10,9,{color:"#9a7a52",padColor:"#7bd35c"}),i.ramp(d-6,p-30,10,p-46,15,9,{color:"#9a7a52",padColor:"#7bd35c"});for(let C of n.trees)i.addSolid(C.x-.85*C.s,0,C.z-.85*C.s,C.x+.85*C.s,7*C.s,C.z+.85*C.s);let x=(C,P,F=4)=>!(Math.abs(C)>s-6||P>r-6||P<o+6||Xo(C,P,6)||Math.hypot(C,P)<11||n.trees.some(O=>Math.hypot(O.x-C,O.z-P)<F+O.r)),S=(C,P,F=800)=>{let O=[];for(let j=0;j<F&&O.length<C;j++){let V=(c()-.5)*2*(s-8),$=r-8-c()*(a-16);x(V,$,P)&&!O.some(Z=>Math.hypot(Z[0]-V,Z[1]-$)<P*1.6)&&O.push([V,$])}return O},w=S(7,5);if(w.forEach(([C,P],F)=>i.disc(C,0,P,2.8,{bounce:21+F%3*2,color:u(["#ff5d73","#ff8a3d","#ffd23f","#ff6bd0"])})),e.shrooms=w,!l)return;let g=(C,P=8,F=6)=>new xe(C,P,F),M=(C,P,F,O=8)=>new Rt(C,P,F,O),v=(C,P,F=8)=>new Le(C,P,F),T=["#2e9b3f","#3fb14c","#58c45a","#27863a","#7ccf5a"],_=g(1,5,4),b=(C,P,F,O)=>h.add(_,C,P,F,u(T),c()*3,c()*3,0,O?.9+c()*.6:2+c()*1.5,1.4+c()*1,O?2+c()*1.5:.9+c()*.6);for(let C=2.2;C<26;C+=5.4){for(let P=r-1;P>o+1;P-=4.2)b(-s+.1,C+c()*1.6,P+c(),!0),b(s-.1,C+c()*1.6,P+c(),!0);for(let P=-s+4;P<s-3;P+=4.2)b(P+c(),C+c()*1.6,o+.1,!1),b(P+c(),C+c()*1.6,r-.1,!1)}for(let C=r;C>o;C-=3.4)h.add(v(1.1,2.4,5),-s,26.6,C,"#58c45a"),h.add(v(1.1,2.4,5),s,26.6,C,"#58c45a");for(let C=-s;C<s;C+=3.4)h.add(v(1.1,2.4,5),C,26.6,o,"#58c45a"),h.add(v(1.1,2.4,5),C,26.6,r,"#58c45a");{let C=lp(Math.floor(Date.now()/1e3)%97+1),P=[{rot:Math.PI/2,at:O=>[-s+2.2,r-32-O*(a-64)]},{rot:-Math.PI/2,at:O=>[s-2.2,r-32-O*(a-64)]},{rot:0,at:O=>[-60+O*120,o+2.2]},{rot:Math.PI,at:O=>[-60+O*120,r-2.2]}];for(let O=P.length-1;O>0;O--){let j=Math.floor(C()*(O+1));[P[O],P[j]]=[P[j],P[O]]}let F=["u","h","u","h"];P.forEach((O,j)=>{let $=F[j]==="u"?cn(I1,30,15,{urdu:!0,bg:["#0b6b3a","#01411c"],fg:"#ffffff",stroke:"#00230f",border:"#ffd23f",frame:"#2f6b2a"}):cn("HARIS",34,13,{bg:["#ff8a1c","#c9400b"],fg:"#ffffff",stroke:"#5a1a00",border:"#ffe27a",frame:"#2f6b2a"}),[Z,at]=O.at(.12+C()*.76);$.position.set(Z,10.5+C()*5,at),$.rotation.y=O.rot,i.group.add($)})}for(let C of n.trees){let P=C.s,F=7*P;h.add(M(.5*P,.8*P,F,7),C.x,F/2,C.z,u(["#7a4b27","#6b4423","#8a5a30"]));for(let O=0;O<4;O++)h.add(v(.35*P,1.3*P,5),C.x+Math.cos(O*1.6)*.8*P,.5,C.z+Math.sin(O*1.6)*.8*P,"#6b4423",0,0,Math.cos(O)*.8);if(C.k===0)h.add(g(3.6*P),C.x,F+2.2*P,C.z,u(T)),h.add(g(2.6*P),C.x+2.4*P,F+.6*P,C.z+.6*P,u(T)),h.add(g(2.5*P),C.x-2.2*P,F+.9*P,C.z-.8*P,u(T));else if(C.k===1)for(let O=0;O<4;O++)h.add(v((3.6-O*.7)*P,3.4*P,8),C.x,F*.62+O*2.1*P,C.z,O%2?"#2f8f46":"#27803c");else{h.add(M(.3*P,.5*P,3.2*P,6),C.x,F+1.4*P,C.z,"#8a5a30");for(let O=0;O<7;O++){let j=O*.9;h.add(v(.9*P,5.2*P,4),C.x+Math.cos(j)*2.1*P,F+3.4*P,C.z+Math.sin(j)*2.1*P,u(T),Math.sin(j)*1.25,0,-Math.cos(j)*1.25+0*j)}h.add(g(.55*P,6,5),C.x+.5*P,F+2.9*P,C.z,"#7a4b27"),h.add(g(.55*P,6,5),C.x-.4*P,F+2.8*P,C.z+.4*P,"#7a4b27")}}for(let[C,P]of S(60,1.6,2500)){let F=.8+c()*.9;h.add(g(1.2*F,7,5),C,.7*F,P,u(T),0,0,0,1.3,.8,1.1),h.add(g(.9*F,7,5),C+1*F,.6*F,P+.5*F,u(T))}for(let[C,P]of S(240,.7,3e3))h.add(M(.05,.05,.7,4),C,.35,P,"#3a8f3a"),h.add(g(.26,6,4),C,.78,P,u(["#ff5fa8","#ffd23f","#ffffff","#ff7a1a","#b58cff"]));for(let[C,P]of S(34,2.2,1500)){let F=.8+c()*1.5;h.add(g(1,6,5),C,.4*F,P,u(["#8e9097","#7c7f87","#a5a7ad"]),c(),c(),0,1.4*F,.8*F,1*F)}for(let[C,P]of S(14,2.4,1500)){h.add(M(.25,.3,1,6),C,.5,P,"#fff3e0"),h.add(g(.9,8,5),C,1.1,P,"#e8403d",0,0,0,1,.55,1);for(let F=0;F<4;F++)h.add(g(.14,5,4),C+Math.cos(F*1.6)*.45,1.45,P+Math.sin(F*1.6)*.45,"#ffffff")}for(let C=0;C<620;C++){let P=(c()-.5)*2*(s-2),F=r-2-c()*(a-4);Xo(P,F,0)||h.add(v(.16,.7+c()*.5,4),P,.35,F,u(["#3da043","#56b947","#2f8a3c"]),0,c()*3,(c()-.5)*.5)}let A=Te.sx,I=Te.sz,D=Te.summitY;for(let[C,P]of mc)h.add(M(.28,.34,2.4,7),A+C,D+1.2,I+P,"#6b4423"),h.add(g(.32,6,5),A+C,D+2.45,I+P,"#8a5a30");for(let C=0;C<16;C++){let P=c()*6.28,F=8+c()*5;h.add(g(1,6,5),d+Math.cos(P)*F*1.6,5.5,p-14+Math.sin(P)*F*2.4,u(["#8e9097","#7c7f87"]),c(),c(),0,1.3,.9,1.1)}for(let C=0;C<26;C++){let P=c()*6.28;h.add(v(.7,1.8,5),d+Math.cos(P)*15,5.9+(c()<.3?5:0),p-14+(c()-.5)*40,u(T))}let N=(C,P,F,O,j=16,V=7,$=["#7a4a1e","#5a3412"])=>{let Z=cn(C,j,V,{bg:$,fg:"#fff3c4",stroke:"#2a1204",border:"#ffd23f",frame:"#3b2410"});Z.position.set(P,3.6+V/2,F),Z.rotation.y=O,i.group.add(Z),h.add(M(.3,.3,4+V/2,6),P-j/2+1,(4+V/2)/2,F,"#5a3412"),h.add(M(.3,.3,4+V/2,6),P+j/2-1,(4+V/2)/2,F,"#5a3412")};N("WELCOME TO THE JUNGLE",0,-14,0,20,5.5),N("BEAT ANIMALS WITH THE BAT = NEW PET!",0,-22,0,24,5),N("DINO HILL  >>>",d-8,p+44,0,16,5.5)}var Ae={HW:11,CELL:4.4,COLS:5,ROWS:[5,6,7,8,9],CH:5,PLAZA:16,BOULDER:4,ARENA:40,GATE:3},Ye={MAZE:0,BEAST:1,DRAGON:2,FLY:3,WIN:4},P1=["coyote","boar","hyena","bear","gorilla"],ws=2.3,hp=1.2,gc=null;function Pi(){if(gc)return gc;let i=-10,t=[];for(let n=0;n<Ae.CH;n++){let s=Ae.ROWS[n],r=i,o=i-s*Ae.CELL;t.push({c:n,rows:s,mz0:r,mz1:o,plazaZ:o-8,boulderZ:o-18,arenaZ0:o-20,arenaZ1:o-60,arenaC:o-40,gateZ:o-61.5,next:o-63,arena:{x0:-Ae.HW+.6,x1:Ae.HW-.6,z0:o-60,z1:o-20}}),i=o-63}let e={z0:i,circlesZ:i-10,cageZ:i-34,dragonZ:i-36,endZ:i-50};return gc={chapters:t,dr:e,road:{x0:-Ae.HW+.6,x1:Ae.HW-.6,z0:e.endZ+2,z1:12},startZ:8},gc}var mu=i=>Array.from({length:i},(t,e)=>(e-(i-1)/2)*5.6),up=()=>({ch:0,ph:Ye.MAZE,hold:0,fly:0,occ:[],n:1}),fp=()=>Pi().chapters.map((i,t)=>({id:t,kind:P1[t],x:0,z:i.arenaC,hidden:!0,bounds:i.arena})),dp=()=>({trees:[],petBounds:Pi().road});function L1(i,t){let e=t.chapters[i.id];i.st=0,i.x=0,i.z=e.arenaC,i.y=0,i.tx=0,i.tz=e.arenaC,i.home={x:0,z:e.arenaC},i.wait=.8,i.cool=1.5,i.yaw=0}function D1(i,t,e){return mu(t).map(s=>e.some(r=>r.y<2.5&&Math.hypot(r.x-s,r.z-i)<ws+.2)?1:0)}function pp(i,t,e,n,s,r,o=[]){i.n=Math.max(1,s);let a=i.ph===Ye.MAZE?r.chapters[i.ch].plazaZ:i.ph===Ye.DRAGON?r.dr.circlesZ:null;return a!==null?(i.occ=D1(a,i.n,e),i.occ.every(l=>l)?i.hold+=t:i.hold=0):(i.occ=[],i.hold=0),i.ph===Ye.MAZE&&i.hold>=hp?(i.ph=Ye.BEAST,i.hold=0,L1(n[i.ch],r),o.push({k:"boulder",ch:i.ch})):i.ph===Ye.BEAST&&n[i.ch].owner?(o.push({k:"gate",ch:i.ch,pid:n[i.ch].owner}),i.ch>=Ae.CH-1?(i.ph=Ye.DRAGON,i.ch=Ae.CH):(i.ch++,i.ph=Ye.MAZE)):i.ph===Ye.DRAGON&&i.hold>=hp+.4?(i.ph=Ye.FLY,i.hold=0,i.fly=0,o.push({k:"cage"})):i.ph===Ye.FLY&&(i.fly+=t,i.fly>9&&(i.ph=Ye.WIN,o.push({k:"victory"}))),o}var mp=new Map,N1=i=>{let t=mp.get(i);return t||(t=new se({color:i,roughness:.82,metalness:0}),mp.set(i,t)),t},St={sph:(i,t=12,e=9)=>new xe(i,t,e),cyl:(i,t,e,n=8)=>new Rt(i,t,e,n),cone:(i,t,e=8)=>new Le(i,t,e),box:(i,t,e)=>new ge(i,t,e),cap:(i,t)=>new Wi(i,t,4,10)};function bt(i,t,e,n=0,s=0,r=0,o={}){let a=new tt(t,N1(e));return a.position.set(n,s,r),o.s&&a.scale.set(o.s[0],o.s[1],o.s[2]),o.r&&a.rotation.set(o.r[0],o.r[1],o.r[2]),a.castShadow=!0,i.add(a),a}function Li(i,t,e,n,s,r=.09){for(let o of[-1,1])bt(i,St.sph(r,8,6),"#ffffff",t+o*s,e,n),bt(i,St.sph(r*.55,6,5),"#111111",t+o*s,e,n+r*.62)}function is(i,t,e,n,s,r,o,a){let l=new Dt;return l.position.set(t,e,n),i.add(l),bt(l,St.cyl(s,s*.82,r,7),o,0,-r/2,0),a&&bt(l,St.box(s*2.1,s*.9,s*2.3),a,0,-r+s*.3,s*.25),l}function gi(){let i=new Dt,t=new Dt;return i.add(t),{root:i,inner:t,legs:[],head:null,tail:null}}var Tr={horse(){let i=gi(),t="#8b5a2b",e="#33200f",n=i.inner;bt(n,St.cap(.5,1.35),t,0,1.55,0,{r:[Math.PI/2,0,0],s:[.92,1,1]});for(let[o,a,l]of[[-.3,.8,0],[.3,.8,1],[-.3,-.8,2],[.3,-.8,3]])i.legs[l]=is(n,o,1.2,a,.14,1.2,t,e);bt(n,St.cyl(.22,.3,1.1,8),t,0,2.15,1.15,{r:[.62,0,0]});let s=i.head=new Dt;s.position.set(0,2.55,1.55),n.add(s),bt(s,St.box(.38,.44,.95),t,0,-.1,.35,{r:[.4,0,0]}),bt(s,St.box(.4,.1,.3),"#f3e6d0",0,-.32,.72,{r:[.4,0,0]});for(let o of[-1,1])bt(s,St.cone(.08,.28,5),t,o*.14,.28,-.02);Li(s,0,.1,.22,.21,.07),bt(n,St.box(.1,.9,.3),e,0,2.3,.9,{r:[.62,0,0]});let r=i.tail=new Dt;return r.position.set(0,1.9,-1.25),n.add(r),bt(r,St.cone(.2,1.3,6),e,0,-.55,0,{r:[Math.PI,0,0]}),r.rotation.x=-.35,i},lion(){let i=gi(),t="#d9a441",e="#8a4a14",n=i.inner;bt(n,St.cap(.46,1.1),t,0,1.15,0,{r:[Math.PI/2,0,0]});for(let[o,a,l]of[[-.3,.6,0],[.3,.6,1],[-.3,-.6,2],[.3,-.6,3]])i.legs[l]=is(n,o,.85,a,.17,.85,t,"#a8741f");let s=i.head=new Dt;s.position.set(0,1.6,1.15),n.add(s),bt(s,St.sph(.78,12,9),e,0,-.05,-.18,{s:[1,1,.78]}),bt(s,St.sph(.46,12,9),t,0,0,.25),bt(s,St.box(.34,.24,.3),"#efc977",0,-.12,.62),bt(s,St.sph(.09,6,5),"#2a1408",0,-.03,.78);for(let o of[-1,1])bt(s,St.sph(.13,6,5),t,o*.34,.4,.1);Li(s,0,.12,.6,.17,.07);let r=i.tail=new Dt;return r.position.set(0,1.35,-1),n.add(r),bt(r,St.cyl(.06,.06,1.1,5),t,0,-.5,-.1,{r:[.3,0,0]}),bt(r,St.sph(.17,7,6),e,0,-1.05,-.28),i},leopard(){let i=gi(),t="#e8b948",e="#2a1a0a",n=i.inner,s=bt(n,St.cap(.38,1.35),t,0,1.05,0,{r:[Math.PI/2,0,0]});for(let a=0;a<22;a++){let l=a*2.399%(Math.PI*2),c=-.9+a%11*.18;bt(n,St.sph(.09,5,4),e,Math.sin(l)*.37,1.05+Math.cos(l)*.36,c,{s:[1,1,1.3]})}for(let[a,l,c]of[[-.25,.7,0],[.25,.7,1],[-.25,-.7,2],[.25,-.7,3]])i.legs[c]=is(n,a,.78,l,.14,.78,t,"#b88a2a");let r=i.head=new Dt;r.position.set(0,1.35,1.2),n.add(r),bt(r,St.sph(.34,12,9),t,0,0,.1),bt(r,St.box(.24,.16,.28),"#f4dc9c",0,-.08,.42),bt(r,St.sph(.07,6,5),"#2a1408",0,0,.58);for(let a of[-1,1])bt(r,St.sph(.1,6,5),t,a*.24,.3,0),bt(r,St.sph(.04,5,4),e,a*.13,.15,.3);Li(r,0,.1,.34,.14,.055);let o=i.tail=new Dt;return o.position.set(0,1.2,-1.15),n.add(o),bt(o,St.cyl(.06,.05,1.5,5),t,0,-.1,-.55,{r:[1.15,0,0]}),bt(o,St.sph(.09,5,4),e,0,.5,-.95),bt(o,St.cyl(.05,.05,.6,5),t,0,.78,-1.15,{r:[.5,0,0]}),i},elephant(){let i=gi(),t="#8a919c",e="#737b87",n=i.inner;bt(n,St.sph(1,14,10),t,0,2.3,0,{s:[1.15,1.2,1.7]});for(let[c,u,h]of[[-.68,1,0],[.68,1,1],[-.68,-1,2],[.68,-1,3]])i.legs[h]=is(n,c,1.6,u,.4,1.6,t,"#d8d2c4");let s=i.head=new Dt;s.position.set(0,2.75,1.85),n.add(s),bt(s,St.sph(.82,12,9),t,0,0,.2);let r=-.15,o=.95,a=.3;for(let c=0;c<4;c++)bt(s,St.cyl(a,a*.8,.62,7),e,0,r,o+c*.1,{r:[.15+c*.1,0,0]}),r-=.55,o+=.1,a*=.8;for(let c of[-1,1])bt(s,St.cyl(.95,.95,.09,14),e,c*1,.1,-.2,{r:[0,0,Math.PI/2],s:[1,1,.8]}).rotation.y=c*.35,bt(s,St.cone(.13,.95,6),"#f5f0e0",c*.45,-.38,1.05,{r:[1.15,0,0]});Li(s,0,.3,.88,.4,.09);let l=i.tail=new Dt;return l.position.set(0,2.5,-1.7),n.add(l),bt(l,St.cyl(.05,.04,1,5),e,0,-.45,-.05),bt(l,St.sph(.1,5,4),"#3a3f46",0,-.98,-.05),i},dino(){let i=gi(),t="#4fb04a",e="#d6ee94",n="#ff8a2a",s=i.inner;bt(s,St.sph(1,14,10),t,0,2.2,0,{s:[.95,1,1.55]}),bt(s,St.sph(.9,12,9),e,0,1.95,.2,{s:[.85,.8,1.45]});for(let[a,l,c]of[[-.62,.45,0],[.62,.45,1],[-.62,-.5,2],[.62,-.5,3]])i.legs[c]=is(s,a,1.5,l,.4,1.5,t,"#2f7a30");let r=i.head=new Dt;r.position.set(0,3,1.75),s.add(r),bt(r,St.box(.95,.85,1.3),t,0,.1,.55),bt(r,St.box(.85,.28,1.2),e,0,-.45,.5);for(let a=0;a<6;a++)for(let l of[-1,1])bt(r,St.cone(.06,.2,4),"#ffffff",l*.38,-.28,.05+a*.21,{r:[Math.PI,0,0]});for(let a of[-1,1])bt(r,St.sph(.08,5,4),"#1a3a1a",a*.22,.2,1.2),bt(r,St.cone(.1,.4,5),n,a*.3,.7,.2);Li(r,0,.4,.75,.37,.12);for(let a of[-1,1])bt(s,St.cyl(.1,.07,.6,5),t,a*.55,2.7,1.1,{r:[-.9,0,a*.3]});let o=i.tail=new Dt;o.position.set(0,2.2,-1.4),s.add(o),[[0,0,-.4,.78],[0,.05,-1.2,.6],[0,.12,-1.9,.44],[0,.22,-2.45,.3]].forEach(([a,l,c,u])=>bt(o,St.sph(u,9,7),t,a,l,c));for(let a=0;a<6;a++)bt(s,St.cone(.2-a*.012,.55,4),n,0,3.05-a*.2,-.9-a*.38);return i}};function gp(i,t,e,n={}){let s=i.inner,r=n.slope||0;bt(s,St.cap(.36,1.25),t,0,1.05+r*.5,0,{r:[Math.PI/2+r,0,0]});for(let[l,c,u,h]of[[-.24,.65,0,.85+r],[.24,.65,1,.85+r],[-.24,-.62,2,.8],[.24,-.62,3,.8]])i.legs[u]=is(s,l,h,c,.12,h,e,"#3a2a1a");let o=i.head=new Dt;o.position.set(0,1.4+r*1.1,1.2),s.add(o),bt(o,St.sph(.32,10,8),t,0,0,.1),bt(o,St.box(.2,.18,.5),e,0,-.08,.55),bt(o,St.sph(.07,6,5),"#111111",0,0,.82);for(let l of[-1,1])bt(o,St.cone(n.round?.12:.1,.38,4),t,l*.2,.42,-.02);Li(o,0,.1,.3,.13,.05);let a=i.tail=new Dt;return a.position.set(0,1.2,-1.1),s.add(a),bt(a,St.cone(.14,.95,5),e,0,-.45,-.1,{r:[Math.PI-.5,0,0]}),i}Tr.coyote=()=>{let i=gi();return gp(i,"#b59a72","#8a7350"),i};Tr.hyena=()=>{let i=gi(),t=i.inner;gp(i,"#b79a63","#6b5a35",{slope:.12,round:!0});for(let e=0;e<14;e++)bt(t,St.sph(.08,5,4),"#3a2a12",Math.sin(e*2.1)*.34,1.2+Math.cos(e*2.1)*.3,-.8+e%7*.26,{s:[1,1,1.4]});return i};Tr.boar=()=>{let i=gi(),t="#5c4033",e=i.inner;bt(e,St.cap(.55,1),t,0,1,0,{r:[Math.PI/2,0,0]});for(let[r,o,a]of[[-.32,.55,0],[.32,.55,1],[-.32,-.55,2],[.32,-.55,3]])i.legs[a]=is(e,r,.6,o,.13,.6,t,"#2a1a10");for(let r=0;r<6;r++)bt(e,St.cone(.1,.35,4),"#2a1a10",0,1.62,-.8+r*.32);let n=i.head=new Dt;n.position.set(0,1.1,1.1),e.add(n),bt(n,St.sph(.42,10,8),t,0,0,.1),bt(n,St.cyl(.2,.24,.42,8),"#d9a08c",0,-.05,.55,{r:[Math.PI/2,0,0]});for(let r of[-1,1])bt(n,St.cone(.07,.4,5),"#f5f0e0",r*.2,-.12,.62,{r:[-.6,0,r*.4]}),bt(n,St.cone(.1,.25,4),t,r*.28,.38,0);Li(n,0,.16,.38,.19,.06);let s=i.tail=new Dt;return s.position.set(0,1.2,-1.05),e.add(s),bt(s,St.cyl(.04,.04,.5,4),"#d9a08c",0,-.2,-.05),i};function xp(i,t,e,n={}){let s=i.inner,r=n.s||1;bt(s,St.sph(1,12,9),t,0,1.75*r,0,{s:[.95*r,1*r,1.35*r]});for(let[l,c,u]of[[-.6,.85,0],[.6,.85,1],[-.6,-.8,2],[.6,-.8,3]])i.legs[u]=is(s,l*r,1.2*r,c*r,.3*r,1.2*r,t,"#222222");let o=i.head=new Dt;o.position.set(0,2.2*r,1.45*r),s.add(o),bt(o,St.sph(.62*r,12,9),t,0,0,.1),bt(o,St.sph(.34*r,8,6),e,0,-.14*r,.5*r),bt(o,St.sph(.09*r,6,5),"#111111",0,-.02*r,.8*r);for(let l of[-1,1])bt(o,St.sph(.2*r,8,6),(n.ears,t),l*.46*r,.5*r,0);Li(o,0,.18*r,.5*r,.24*r,.08*r),n.brow&&bt(o,St.box(.9*r,.14*r,.3*r),"#1a1a1e",0,.34*r,.5*r);let a=i.tail=new Dt;return a.position.set(0,1.9*r,-1.4*r),s.add(a),bt(a,St.sph(.2*r,6,5),t,0,0,0),i}Tr.bear=()=>xp(gi(),"#6b4a2f","#d2b48c",{s:1,ears:!0});Tr.gorilla=()=>{let i=gi();return xp(i,"#2d2d33","#6b5a50",{s:1.05,brow:!0}),bt(i.inner,St.sph(.8,10,8),"#3a3a42",0,2,.55,{s:[1,.9,.6]}),i};function yp(){let i=new Dt,t=new Dt;i.add(t);let e="#7b3fe4",n="#ffd27a",s="#ff5fa8";bt(t,St.sph(1,14,10),e,0,3.4,0,{s:[1.7,1.8,3]}),bt(t,St.sph(1,12,9),n,0,2.9,.4,{s:[1.3,1.4,2.6]});for(let[a,l]of[[-1.1,1.4],[1.1,1.4],[-1.1,-1.4],[1.1,-1.4]])bt(t,St.cyl(.55,.45,1.8,8),e,a,1,l),bt(t,St.box(.9,.35,1.2),"#2f1a66",a,.18,l+.2);for(let a=0;a<4;a++)bt(t,St.cyl(.7-a*.06,.8-a*.06,1.2,8),e,0,4.1+a*.8,2.7+a*.65,{r:[.55,0,0]});let r=new Dt;r.position.set(0,7.2,5.3),t.add(r),bt(r,St.box(1.5,1.2,2),e,0,0,.5),bt(r,St.box(1.3,.5,1.8),n,0,-.55,.5);for(let a of[-1,1])bt(r,St.cone(.22,1.5,6),"#fff2c4",a*.6,.95,-.2,{r:[-.5,0,a*-.3]}),Li(r,0,.3,1.3,.5,.2),bt(r,St.sph(.1,6,5),"#222222",a*.25,.1,1.5);for(let a=0;a<7;a++)bt(t,St.cone(.38-a*.025,.9,4),"#ff8a2a",0,5.2-a*.3,-2.4+a*.72-.3,{r:[0,0,0]});[[-3.4,3.2,1],[-4.9,3,.8],[-6.2,2.9,.6],[-7.4,2.9,.4]].forEach(([a,l,c])=>bt(t,St.sph(c,8,6),e,0,l,a)),bt(t,St.cone(.7,1.4,4),s,0,2.9,-8.4,{r:[-Math.PI/2,0,0]});let o=[];for(let a of[-1,1]){let l=new Dt;l.position.set(a*1.5,4.6,.2),t.add(l),bt(l,St.cyl(.18,.12,6.2,6),e,a*3,.4,0,{r:[0,0,Math.PI/2+a*.12]});let c=new Pe,u=[0,.3,1.2],h=[a*6.2,.9,.2],f=[a*5.4,-.6,-3.8],d=[a*1.6,-.9,-3.4];c.setAttribute("position",new pe([...u,...h,...f,...u,...f,...d],3)),c.computeVertexNormals();let p=new tt(c,new se({color:s,roughness:.6,side:$e}));p.castShadow=!0,l.add(p),o.push({g:l,sx:a})}return{root:i,body:t,head:r,wings:o}}function gu(i,t,e=1){i.wings.forEach(n=>{n.g.rotation.z=-n.sx*Math.sin(t*(3+e*6))*(.25+.35*e)}),i.head.rotation.x=Math.sin(t*1.3)*.08,i.body.position.y=Math.sin(t*1.7)*.05*(1-e*.5)}function _p(i){let t=Tr[i]();return t.root.traverse(e=>{e.isMesh&&(e.receiveShadow=!1)}),t.kind=i,t.stride=i==="elephant"||i==="bear"||i==="gorilla"?1.3:i==="dino"?1.5:2.2,t}function vp(i,t,e,n,s,r){let o=Math.min(1,n/3.5),a=Math.min(1.6,.6+n/7),l=i.ph=(i.ph||0)+e*n*i.stride*1.4+e*0,c=(i.kind==="elephant"||i.kind==="dino"||i.kind==="bear"||i.kind==="gorilla"?.42:.7)*o*Math.min(1,a),u=[0,Math.PI,Math.PI,0];i.legs.forEach((f,d)=>{f.rotation.x=Math.sin(l+u[d])*c});let h=i.inner;if(h.position.y=Math.abs(Math.sin(l))*.06*o*(i.kind==="elephant"?1.4:1)+0,h.scale.y=1+Math.sin(t*2.1)*.012,i.head&&(i.head.rotation.x=Math.sin(l*.5+1)*.06*o+Math.sin(t*1.3)*.03,i.head.rotation.y=Math.sin(t*.7)*.12*(1-o)),i.tail&&(i.tail.rotation.z=Math.sin(t*(2+n*.3))*.35),r>0){let f=1-r;h.rotation.x=f<.7?-.5*(f/.7):.35,i.head&&(i.head.rotation.x-=.4)}else h.rotation.x+=(0-h.rotation.x)*Math.min(1,e*10);h.rotation.z=s===4?Math.sin(t*40)*.12:s===5?Math.sin(t*3)*.04:0}function Mp(i){let t=i>>>0||1;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}var ss=[{name:"MEADOW",ground:"#74d05a",path:"#e8d8a0",fence:"#b0763c",hedge:["#3fae4a","#58c25c","#2f9a44"],leaf:["#2e9b3f","#3fb14c","#58c45a","#7ccf5a"]},{name:"FOREST",ground:"#3f9a4a",path:"#cdb887",fence:"#6b4423",hedge:["#2a7a3a","#1f6a30","#35893f"],leaf:["#1f7a34","#2a8a3c","#27803c","#3a9a4a"]},{name:"SWAMP",ground:"#6b7a3a",path:"#a89c68",fence:"#4a4a30",hedge:["#5a6b2a","#4a5a24","#6c7c34"],leaf:["#5a7a2a","#6c8a34","#4a6a24","#7a9a3c"]},{name:"CANYON",ground:"#d79a58",path:"#f0cf98",fence:"#a8532f",hedge:["#c2693a","#b05a30","#d07a45"],leaf:["#c2693a","#d07a45","#b05a30","#e08a50"]},{name:"SNOW",ground:"#f0f8ff",path:"#cfe6f6",fence:"#9fd0f0",hedge:["#d8efff","#bfe3fa","#e9f6ff"],leaf:["#ffffff","#e4f3ff","#d0e9fa","#f4fbff"]},{name:"VOLCANO",ground:"#4a3a3a",path:"#6b5656",fence:"#2b2020",hedge:["#3a2c2c","#2f2323","#443535"],leaf:["#3a2c2c","#4a3535","#2f2323","#5a4444"]}];function U1(i,t){let e=Ae.COLS,n=Array.from({length:i},()=>Array(e+1).fill(!0)),s=Array.from({length:i+1},()=>Array(e).fill(!0)),r=Array.from({length:i},()=>Array(e).fill(!1)),o=e/2|0,a=[[0,o]];for(r[0][o]=!0;a.length;){let[h,f]=a[a.length-1],d=[];if(h+1<i&&!r[h+1][f]&&d.push([h+1,f]),h-1>=0&&!r[h-1][f]&&d.push([h-1,f]),f-1>=0&&!r[h][f-1]&&d.push([h,f-1]),f+1<e&&!r[h][f+1]&&d.push([h,f+1]),!d.length){a.pop();continue}let[p,y]=d[Math.floor(t()*d.length)];p===h+1?s[h+1][f]=!1:p===h-1?s[h][f]=!1:y===f-1?n[h][f]=!1:n[h][f+1]=!1,r[p][y]=!0,a.push([p,y])}s[0][o]=!1,s[i][o]=!1;let l=new Map([[`0,${o}`,null]]),c=[[0,o]];for(;c.length;){let[h,f]=c.shift();for(let[d,p,y]of[[h+1,f,s[h+1][f]],[h-1,f,h>0?s[h][f]:!0],[h,f-1,n[h][f]],[h,f+1,n[h][f+1]]])!y&&d>=0&&d<i&&p>=0&&p<e&&!l.has(`${d},${p}`)&&(l.set(`${d},${p}`,[h,f]),c.push([d,p]))}let u=[];for(let h=[i-1,o];h;h=l.get(`${h[0]},${h[1]}`))u.unshift(h);return{rows:i,V:n,H:s,sol:u}}function Sp(i,t,e,n=1){let s=Pi(),r=!i.headless,o=i.main,a=i.glow,l=Ae.HW,c=Ae.CELL,u=Mp(n>>>0^1540483477),h=g=>g[Math.floor(u()*g.length)],f=s.dr.endZ,d=3.4,p=.8,y=7;e.startArch=99,e.spawn={x:0,y:0,z:3},i.checkpoints.push({x:0,y:0,z:6,w:14,spawn:[0,0,3]}),i.waterY=-40,i.killY=-60;let m=g=>g<Ae.CH?[s.chapters[g].mz0,s.chapters[g].next]:[s.dr.z0,s.dr.endZ];i.platform(0,0,(12+f-2)/2,l*2+6,12-f+2,{h:2,color:ss[0].ground,pad:!1});for(let g=0;g<=Ae.CH;g++){let[M,v]=m(g),T=ss[g],_=g===0?12.5:M,b=g===Ae.CH?f-1:v;for(let A=_,I=0;A>b+.01;A-=12,I++){let D=Math.min(12,A-b);for(let N of[-1,1])i.platform(N*(l+1),y,A-D/2,2,D,{h:y,color:I%2?T.fence:T.hedge[0],pad:!1})}r&&o.add(i.rbox(l*2,.04,_-b,.01),0,.02,(_+b)/2,T.ground)}i.platform(0,y,13,l*2+6,2,{h:y,color:ss[0].fence,pad:!1}),i.platform(0,y,f-1,l*2+6,2,{h:y,color:ss[5].fence,pad:!1});let x={chapters:[],dragon:null};e.mazes=[],e.mazePaths=[];for(let g of s.chapters){let M=ss[g.c],v=Mp(((n>>>0)+1)*7919+g.c*104729),T=U1(g.rows,v);e.mazes.push(T);let _=at=>(at+.5-Ae.COLS/2)*c,b=at=>g.mz0-(at+.5)*c;for(let at=0;at<g.rows;at++)for(let pt=0;pt<=Ae.COLS;pt++)T.V[at][pt]&&i.platform((pt-Ae.COLS/2)*c,d,b(at),p,c+p,{h:d,color:M.hedge[(at+pt)%3],pad:!1});for(let at=0;at<=g.rows;at++)for(let pt=0;pt<Ae.COLS;pt++)T.H[at][pt]&&i.platform(_(pt),d,g.mz0-at*c,c+p,p,{h:d,color:M.hedge[(at+pt+1)%3],pad:!1});e.mazePaths.push(T.sol.map(([at,pt])=>[_(pt),b(at)])),r&&o.add(i.rbox(l*2-.2,.05,g.rows*c,.01),0,.035,(g.mz0+g.mz1)/2,M.path);let A=T.sol,I=[];for(let at=2;at<A.length-1;at++)I.push(at);let D=I.filter(at=>A[at][1]===A[at-1][1]&&A[at][1]===A[at+1][1]),N=[0,1,2,3,4][g.c],C=[0,4,5,6,7][g.c],P=new Set,F=(at,pt,Jt)=>{let kt=[],Xt=at.slice();for(let U=Xt.length-1;U>0;U--){let k=Math.floor(v()*(U+1));[Xt[U],Xt[k]]=[Xt[k],Xt[U]]}for(let U of Xt){if(kt.length>=pt)break;[...P].some(k=>Math.abs(k-U)<Jt)||(P.add(U),kt.push(U))}return kt};for(let at of F(D,N,2)){let[pt,Jt]=A[at];i.conveyor(_(Jt),.05,b(pt),c-1.2,c-p-.2,C)}let O=g.boulderZ,j=g.gateZ,V=i.addSolid(-l,0,O-Ae.BOULDER/2,l,9,O+Ae.BOULDER/2,{name:"boulder"}),$=i.addSolid(-l,0,j-.75,l,7,j+.75,{name:"gate"}),Z={boulder:{solid:V,grp:null},gate:{solid:$,grp:null}};if(r){o.add(i.rbox(l*2-.2,.05,g.mz1-g.arenaZ1+1,.01),0,.035,(g.mz1+g.arenaZ1)/2-.5,M.path);let at=new Dt;at.position.set(0,0,O);let pt=gt=>new se({color:gt,roughness:.95,flatShading:!0}),Jt=["#8d8a84","#7c7a75","#9a968e","#6f6d69"];[[-8.8,3.2,4.2],[-4.4,3,4.4],[0,3.4,4.6],[4.4,3,4.4],[8.8,3.2,4.2],[-6.5,7.4,3.6],[-1.6,7.8,3.8],[3.4,7.6,3.6],[8,7.2,3]].forEach(([gt,ut,et],vt)=>{let K=new tt(new lo(et,1),pt(Jt[vt%4]));K.position.set(gt,ut,(vt%3-1)*.5),K.rotation.set(vt,vt*2,0),K.castShadow=!0,at.add(K)}),i.group.add(at),Z.boulder.grp=at;let kt=new Dt;kt.position.set(0,0,j);let Xt=new se({color:"#8a5a30",roughness:.8}),U=new se({color:"#6b4423",roughness:.8});for(let gt=-l+.9;gt<l;gt+=1.8){let ut=new tt(new ge(1.5,7,1.1),(gt*10|0)%2?Xt:U);ut.position.set(gt,3.5,0),ut.castShadow=!0,kt.add(ut);let et=new tt(new Le(.8,1.2,4),Xt);et.position.set(gt,7.5,0),et.rotation.y=Math.PI/4,kt.add(et)}for(let gt of[1.5,5.2]){let ut=new tt(new ge(l*2,.5,1.5),U);ut.position.set(0,gt,0),kt.add(ut)}i.group.add(kt),Z.gate.grp=kt;let k=(gt,ut,et,vt,K,nt,ct)=>{let ht=cn(gt,K,nt,{bg:ct,fg:"#fff3c4",stroke:"#2a1204",border:"#ffd23f",frame:"#3b2410"});ht.position.set(ut,et,vt),i.group.add(ht)},rt=(gt,ut,et)=>{let vt=new tt(new Rt(.3,.3,et,6),U);vt.position.set(gt,et/2,ut),i.group.add(vt)};k("STAND ON ALL CIRCLES!",0,10.4,g.plazaZ+5.5,14,3,["#7a4a1e","#5a3412"]),rt(-8.6,g.plazaZ+5.5,11),rt(8.6,g.plazaZ+5.5,11),k(`CHAPTER ${g.c+1} - ${M.name}`,0,10.4,g.mz0+0,14,3,["#2c6b3a","#1a4a26"]),rt(-7.2,g.mz0,11),rt(7.2,g.mz0,11),k("BEAT THE BEAST WITH THE BAT!",0,10.4,g.arenaZ0-3,15,3,["#8a2a1e","#5a1a12"]),rt(-7.8,g.arenaZ0-3,11),rt(7.8,g.arenaZ0-3,11)}x.chapters.push(Z)}let S=s.dr,w=i.addSolid(-8,0,S.dragonZ-8,8,11,S.cageZ+6,{name:"cage"});if(x.dragon={solid:w,grp:null,root:null},r){o.add(i.rbox(l*2-.2,.05,S.z0-f,.01),0,.035,(S.z0+f)/2,ss[5].path);let g=new Dt;g.position.set(0,0,(S.cageZ+6+S.dragonZ-8)/2);let M=new se({color:"#22222a",roughness:.5,metalness:.5}),v=S.cageZ+6-(S.dragonZ-8);for(let I=-8;I<=8.01;I+=2){let D=new tt(new Rt(.22,.22,11,6),M);D.position.set(I,5.5,v/2),g.add(D)}for(let I of[-8,8])for(let D=0;D<=v+.01;D+=2.3){let N=new tt(new Rt(.22,.22,11,6),M);N.position.set(I,5.5,D-v/2),g.add(N)}for(let I of[.3,5.5,10.8]){let D=new tt(new ge(16.4,.4,.4),M);D.position.set(0,I,v/2),g.add(D)}let T=new tt(new ge(16.4,.4,v),M);T.position.set(0,11,0),g.add(T),i.group.add(g),x.dragon.grp=g;let _=cn("FREE THE DRAGON!",18,4.2,{bg:["#7a1e5a","#4a1236"],fg:"#fff3c4",stroke:"#200618",border:"#ffd23f",frame:"#3b2410"});_.position.set(0,12,S.circlesZ+6),i.group.add(_);let b=cn("STAND ON ALL CIRCLES!",17,4.2,{bg:["#7a4a1e","#5a3412"],fg:"#fff3c4",stroke:"#2a1204",border:"#ffd23f",frame:"#3b2410"});b.position.set(0,16,S.circlesZ+6),i.group.add(b);let A=cn("JUNGLE QUEST",20,5.2,{bg:["#ff8a1c","#c9400b"],fg:"#ffffff",stroke:"#5a1a00",border:"#ffe27a",frame:"#3b2410"});A.position.set(0,12,2),i.group.add(A),z1(i,s,u,h)}e.quest=x,e.questLayout=s}function z1(i,t,e,n){let s=i.main,r=i.glow,o=Ae.HW,a=(d,p=7,y=5)=>new xe(d,p,y),l=(d,p,y,m=7)=>new Rt(d,p,y,m),c=(d,p,y=7)=>new Le(d,p,y),u=(d,p,y,m,x)=>{let S=7*m;if(d==="round")s.add(l(.5*m,.8*m,S),p,S/2,y,"#7a4b27"),s.add(a(3.6*m),p,S+2*m,y,n(x.leaf)),s.add(a(2.6*m),p+2.3*m,S+.6*m,y+.5*m,n(x.leaf));else if(d==="pine"){s.add(l(.4*m,.6*m,S*.6),p,S*.3,y,"#6b4423");for(let w=0;w<4;w++)s.add(c((3.6-w*.7)*m,3.4*m,8),p,S*.55+w*2.1*m,y,n(x.leaf))}else if(d==="dead"){s.add(l(.3*m,.7*m,S*1.1),p,S*.55,y,"#3a3022");for(let w=0;w<3;w++)s.add(l(.12*m,.25*m,3*m),p+(w-1)*1.1*m,S*(.8+w*.1),y,"#3a3022",0,0,(w-1)*.9)}else if(d==="pillar"){let w=(2.5+e()*2.5)*m,g=(10+e()*14)*m;s.add(i.rbox(w,g,w*.9,.5),p,g/2,y,n(["#c2693a","#b05a30","#d07a45","#e0975a"]),0,e()*3),s.add(i.rbox(w*1.15,1.2,w,.3),p,g*.6,y,"#e8b27a",0,e()*3)}else if(d==="snowpine"){s.add(l(.4*m,.6*m,S*.5),p,S*.25,y,"#5a3a22");for(let w=0;w<4;w++)s.add(c((3.4-w*.7)*m,3.2*m,8),p,S*.45+w*2*m,y,"#2f6f58"),s.add(c((2.6-w*.6)*m,1.6*m,8),p,S*.45+w*2*m+1.1*m,y,"#ffffff")}else{let w=(8+e()*14)*m;s.add(c((3+e()*3)*m,w,6),p,w/2,y,n(["#2d2323","#3a2c2c","#241c1c"]),0,e()*3),r.add(c(.9*m,w*.6,5),p,w*.3,y,"#ff6a1a")}},h=[["round","round","pine"],["pine","pine","round"],["dead","dead","round"],["pillar","pillar","pillar"],["snowpine","snowpine","snowpine"],["rock","rock","rock"]],f=[...t.chapters.map(d=>[d.mz0,d.next]),[t.dr.z0,t.dr.endZ]];f.forEach(([d,p],y)=>{let m=ss[y];for(let x=y===0?14:d;x>(y===Ae.CH?p-12:p);x-=5.2+e()*3.4)for(let S of[-1,1]){let w=S*(o+4.5+e()*20),g=.8+e()*.8;u(n(h[y]),w,x+(e()-.5)*3,g,m),e()<.45&&u(n(h[y]),S*(o+28+e()*30),x+(e()-.5)*6,1.3+e()*1.2,m)}for(let x=0;x<40;x++){let S=(e()<.5?-1:1)*(o-1.2-e()*.9),w=d-e()*(d-p);y===0||y===1?(s.add(l(.05,.05,.7,4),S,.35,w,"#3a8f3a"),s.add(a(.26,6,4),S,.78,w,n(["#ff5fa8","#ffd23f","#ffffff","#ff7a1a","#b58cff"]))):y===2?(s.add(l(.25,.3,.9,6),S,.45,w,"#fff3e0"),s.add(a(.8,8,5),S,1,w,"#8ed36a",0,0,0,1,.55,1)):y===3?s.add(a(1,6,5),S,.3,w,n(["#a8532f","#c2693a"]),e(),e(),0,1.2,.6,1):y===4?s.add(a(1,7,5),S,.3,w,"#ffffff",0,0,0,1.4,.7,1.2):(s.add(a(1,6,5),S,.3,w,"#2d2323",e(),e(),0,1.2,.6,1),r.add(a(.35,6,4),S,.2,w,"#ff6a1a"))}});for(let d=10;d>t.dr.endZ-30;d-=28)for(let p of[-1,1]){let y=Math.min(Ae.CH,Math.max(0,f.findIndex(([x,S])=>d<=x&&d>S))),m=ss[y===-1?0:y];s.add(a(1,12,8),p*(o+110+e()*40),0,d,m.ground,0,0,0,38+e()*24,22+e()*20,30+e()*14)}}var xc=class{constructor(t,e){this.world=t,this.info=e,this.L=Pi(),this.q=e.quest,this.t=0,this.state=this.L.chapters.map(()=>({boulder:"closed",gate:"closed",bt:0,gt:0})),this._fresh=!0,this.cage="closed",this.fly=0,this.n=0,this.occ=[],this.circleZ=null,this.g=new Dt,t.group.add(this.g),this.circles=[];for(let n=0;n<4;n++){let s=new Dt,r=new tt(new Rt(ws,ws,.12,40),new ye({color:"#ffd23f",transparent:!0,opacity:.55,toneMapped:!1})),o=new tt(new We(ws,.14,8,40),new ye({color:"#ffffff",toneMapped:!1}));o.rotation.x=Math.PI/2,o.position.y=.08;let a=new tt(new Rt(ws*.9,ws*.9,5,24,1,!0),new ye({color:"#ffd23f",transparent:!0,opacity:.16,side:$e,depthWrite:!1,toneMapped:!1}));a.position.y=2.5;let l=cn("STAND HERE",3.8,1.2,{bg:["#ffd23f","#ff9f1c"],fg:"#3a1c00",stroke:"#ffffff",border:"#ffffff"});l.position.y=5.4,s.add(r,o,a,l),s.visible=!1,s.userData={disc:r,ring:o,beam:a,lab:l},this.g.add(s),this.circles.push(s)}this.dragon=yp(),this.dragon.root.position.set(0,0,this.L.dr.dragonZ),this.dragon.root.scale.setScalar(1.15),this.g.add(this.dragon.root),this.flags={boulder:[],gate:[]}}openBoulder(t,e){let n=this.state[t];n.boulder==="closed"&&(this.q.chapters[t].boulder.solid.active=!1,e?(n.boulder="gone",this.q.chapters[t].boulder.grp.visible=!1):(n.boulder="falling",n.bt=0))}openGate(t,e){let n=this.state[t];n.gate==="closed"&&(this.q.chapters[t].gate.solid.active=!1,e?(n.gate="open",this.q.chapters[t].gate.grp.position.y=9):(n.gate="rising",n.gt=0))}openCage(t){this.cage==="closed"&&(this.q.dragon.solid.active=!1,this.cage="open",this.fly=t?99:0)}setState(t){for(let s=0;s<Ae.CH;s++)(s<t.ch||s===t.ch&&t.ph!==Ye.MAZE)&&this.openBoulder(s,this._fresh),s<t.ch&&this.openGate(s,this._fresh);t.ph>=Ye.FLY&&this.openCage(this._fresh),this._fresh=!1,this.n=t.n,this.occ=t.occ||[],this.ph=t.ph;let e=t.ph===Ye.MAZE?this.L.chapters[t.ch].plazaZ:t.ph===Ye.DRAGON?this.L.dr.circlesZ:null;this.circleZ=e;let n=mu(Math.max(1,t.n));this.circles.forEach((s,r)=>{s.visible=e!==null&&r<n.length,s.visible&&s.position.set(n[r],.06,e)})}event(t){t.k==="boulder"?this.openBoulder(t.ch,!1):t.k==="gate"?this.openGate(t.ch,!1):t.k==="cage"&&this.openCage(!1)}update(t){this.t+=t;let e=this.t;this.circles.forEach((r,o)=>{if(!r.visible)return;let a=this.occ[o],l=r.userData,c=.5+.5*Math.sin(e*4+o);l.disc.material.color.set(a?"#3dff7a":"#ffd23f"),l.disc.material.opacity=a?.8:.4+.25*c,l.beam.material.color.set(a?"#3dff7a":"#ffd23f"),l.beam.scale.y=a?1.2:1,l.ring.scale.setScalar(1+(a?0:.05*c)),l.lab.visible=!a,l.lab.position.y=5.2+.3*Math.sin(e*2.4+o)}),this.q.chapters.forEach((r,o)=>{let a=this.state[o];if(a.boulder==="falling"){a.bt+=t;let l=r.boulder.grp,c=Math.min(1,a.bt/1.5);l.position.y=-c*c*11,l.position.x=Math.sin(a.bt*40)*.25*(1-c),l.rotation.x=c*.5,c>=1&&(l.visible=!1,a.boulder="gone")}if(a.gate==="rising"){a.gt+=t;let l=r.gate.grp,c=Math.min(1,a.gt/1.4);l.position.y=c*9,c>=1&&(a.gate="open")}});let n=this.dragon,s=this.L;if(this.cage==="closed")gu(n,e,.15),n.root.rotation.y=Math.sin(e*.6)*.15;else{this.fly+=t;let r=this.fly,o=this.q.dragon.grp;o&&(o.position.y=Math.min(r,2)*6,o.visible=r<2.2);let a=Math.max(0,r-1.6)/7.4,l=Math.min(1,a);n.root.rotation.y=Math.PI*Math.min(1,Math.max(0,r-.8)/1.2),n.root.position.set(Math.sin(r*.8)*3*l,l*l*46+Math.min(1,l*4)*3,s.dr.dragonZ-l*150),n.root.scale.setScalar(1.15*(1-l*.55)),gu(n,e,1)}}};var F1={fun:{plat:["#ff6b9d","#ffd23f","#4cc9f0","#80ed99","#ff9f1c"],pad:"#ffffff",icePad:"#ffffff",edgeGlow:null,hazard:"#ff3d68",hazard2:"#fff7d6",hub:"#6a3fa0",accent:"#ffd23f",convBase:"#7a2d9e",belt:"#ffe9a8"},jungle:{plat:["#3f9d4a","#6bbf59","#8b5e3c","#2f7d3a","#a3d36b"],pad:"#c7f08a",icePad:"#ffffff",edgeGlow:null,hazard:"#ff7a1a",hazard2:"#fff7d6",hub:"#5a3a1e",accent:"#ffd23f",convBase:"#5a3a1e",belt:"#a3d36b"},arena:{plat:["#e9d9bd","#e9d9bd","#e9d9bd","#e9d9bd","#e9d9bd"],pad:"#f6efe0",icePad:"#ffffff",edgeGlow:null,hazard:"#ff6b6b",hazard2:"#ffffff",hub:"#8a8f99",accent:"#ffd23f",convBase:"#9aa3b5",belt:"#dfe6f5"},quest:{plat:["#3f9d4a","#6bbf59","#8b5e3c","#2f7d3a","#a3d36b"],pad:"#c7f08a",icePad:"#ffffff",edgeGlow:null,hazard:"#ff4d6d",hazard2:"#fff7d6",hub:"#5a3a1e",accent:"#ffd23f",convBase:"#4a3a5e",belt:"#ffe9a8"}},O1=["fun","jungle","quest","arena"];function bp(i,t=!1,e=null,n=1){let s=O1[i],r=F1[s],o=new cc(r,t);o.arrowTexture=e,o.key=s,o.waterY=-40,o.killY=-60;let a={z:0,y:0},l={key:s,spawn:{x:0,y:0,z:1.5},signs:[],pads:[]};function c(p,y,m={}){var v,T,_;let x=a.z-((v=m.gap)!=null?v:0),S=x-y/2,w=a.y+((T=m.dy)!=null?T:0),g=(_=m.x)!=null?_:0,M=o.platform(g,w,S,p,y,m);return a.z=x-y,a.y=w,{s:M,x:g,cz:S,near:x,far:x-y,top:w,w:p,d:y}}function u(p,y=3.5){return o.checkpoint(p.x,p.top,p.near-y,Math.min(p.w,16))}function h(p,y,m=0){let x=a.z-.9-3;[-4.7+m,4.7+m].forEach((w,g)=>{let M=g*Math.PI,v=b=>{let A=.5-.5*Math.cos(2*Math.PI*b/y+M);return[1.2*Math.sin(2*Math.PI*A),2.3*Math.sin(2*Math.PI*A),-p*A]};o.mover(w,a.y,x,6,6,b=>v(b),{h:1.3,stripes:!0,color:g?r.plat[2]:r.plat[0]});let T=[],_=48;for(let b=0;b<=_;b++){let A=b/_,I=[w+1.2*Math.sin(2*Math.PI*A),2.3*Math.sin(2*Math.PI*A),-p*A];T.push([I[0],a.y-1.5+I[1],x+I[2]])}for(let b of[-2.2,2.2])o.tube(T.map(A=>[A[0]+b,A[1],A[2]]),.14,r.hazard);o.tube(T.map(b=>[b[0],b[1]-.3,b[2]]),.2,r.hub);for(let b=0;b<=_;b+=4){let A=T[b];o.tube([[A[0],A[1]-.3,A[2]],[A[0],a.y-14,A[2]]],.22,r.hub)}}),a.z=x-p-3-.9}function f(){let p=c(22,34,{gap:0,color:r.plat[0]}),y=p.near-12;return o.arch(0,p.top,y,20,r.accent,!1),l.finishZ=y,l.finishY=p.top,l.finishPlat=p,p}if(i===0){l.startArch=-2,a.z=-16,a.y=0,o.platform(0,0,-430/2,140,450,{h:2,color:"#92e66c",pad:!1});for(let U=4,k=0;U>-446;U-=14,k++)for(let rt of[-1,1])o.platform(rt*(140/2+1),22,U-7,2,14,{h:22,color:r.plat[(k+(rt>0?2:0))%r.plat.length],pad:!1});if(o.platform(0,22,11,144,2,{h:22,color:r.plat[1],pad:!1}),o.platform(0,22,-441,144,2,{h:22,color:r.plat[3],pad:!1}),o.headless||o.main.add(o.rbox(12,.03,232,.01),0,.02,-128,"#f8ebb8"),!o.headless){let k="\u0639\u06A9\u0631\u0645\u06C1",rt=(gt,ut,et,vt=12)=>{gt.position.set(ut*69.7,vt,et),gt.rotation.y=ut<0?Math.PI/2:-Math.PI/2,o.group.add(gt)};rt(Go("pk",30,20),-1,-50),rt(Go("ps",30,20),1,-50),rt(Go("ps",30,20),-1,-290),rt(Go("pk",30,20),1,-290),rt(cn("MADE BY HARIS",44,13,{bg:["#ff3d68","#ff9f1c"],fg:"#ffffff",stroke:"#6a1020",border:"#ffd23f"}),-1,-130),rt(cn("MADE BY HARIS",44,13,{bg:["#4cc9f0","#3a2d9e"],fg:"#ffd23f",stroke:"#101040",border:"#ffffff"}),1,-170),rt(cn(k,30,15,{urdu:!0,bg:["#0b6b3a","#01411c"],fg:"#ffffff",stroke:"#00230f",border:"#ffd23f"}),-1,-210),rt(cn(k,30,15,{urdu:!0,bg:["#0b6b3a","#01411c"],fg:"#ffffff",stroke:"#00230f",border:"#ffd23f"}),1,-330)}let m=U=>o.platform(0,.04,U,8,14,{boost:1,color:"#ffd23f",pad:!1,h:.5});o.checkpoint(0,0,-70,16),m(-30),m(-52),[[-16,-26,3.2,20,0],[-22,-36,3.2,24,1],[-14,-46,3.4,28,2],[16,-28,3.2,22,3],[22,-38,3.4,26,4]].forEach(([U,k,rt,gt,ut])=>o.disc(U,0,k,rt,{bounce:gt,color:r.plat[ut]})),o.platform(31,9,-52,12,12,{color:r.plat[1]}),o.disc(20,0,-50,3.4,{bounce:29,color:r.hazard}),o.airpad(-26,-62,3.6,0,15),o.platform(-34,13,-62,8,8,{color:r.plat[2]}),o.orbit(-32,-18,6,1.6,3,.8),o.cannon(22,-14,16,[0,-17]),o.pirate(28,-70,16,.55,6.5),o.dropTower(-32,-82,14,13),o.checkpoint(0,0,-72,16),o.ramp(-14,-72,0,-98,10,8,{color:r.plat[3]}),o.platform(-28,10,-104,30,12,{color:r.plat[1]}),o.punch(-44,11.2,-104,1,0,8,{off:0}),o.punch(-12.2,11.2,-104,-1,0,8,{off:1.6}),[-38,-28,-18].forEach((U,k)=>o.ramp(U,-110,10,-152,0,7,{conv:[0,-14],ice:!0,color:r.plat[k*2%5],padColor:"#ffffff"})),o.platform(26,1.2,-90,14,14,{color:r.plat[4]}),o.punch(17.2,2.4,-90,1,0,7,{off:0}),o.punch(34.8,2.4,-90,-1,0,7,{off:1.6}),o.punch(26,2.4,-98.8,0,1,7,{off:.8}),o.punch(26,2.4,-81.2,0,-1,7,{off:2.4});for(let U=0;U<3;U++)o.seesaw(26,2,-112-U*16,9,12,1.4,3.4+U*.4,U*2.1);m(-118),o.checkpoint(0,0,-150,16),o.ramp(-30,-156,0,-182,8,10,{color:r.plat[2]}),o.platform(-30,8,-188,12,12,{color:r.plat[0]}),o.bungee(-30,-203,0,5.5,30,15),o.ferris(-30,11,-224,9,6,.4),o.ramp(26,-156,0,-164,3,14,{color:r.plat[3]}),a.z=-164,a.y=3,c(16,8,{x:26}),h(36,11,26),c(16,8,{x:26}),o.ramp(26,a.z,3,a.z-8,0,14,{color:r.plat[3]}),o.disc(0,.3,-180,8.5,{omega:.7,color:r.plat[0]}),o.headless||(o.main.add(new Rt(.5,.5,9,10),0,4.8,-180,"#ffffff"),o.main.add(new Le(10,3.2,20),0,10.4,-180,r.hazard)),[-160,-172,-184].forEach((U,k)=>{o.disc(-14,.3,U,3.5,{omega:k%2?1.5:-1.5,color:r.plat[(k+1)%5]}),o.bar(-14,.4,U,6.4,{omega:k%2?-1.1:1.1,h:.9,w:.9})}),o.checkpoint(0,0,-232,16),o.checkpoint(0,0,-244,16);let x=56,S=7,w={x:0,z:(Es+ni)/2},g=-27,M=-420,v=[1,-1],T=[],_=[];for(let U of v)_.push({x:x*U,z:g,r:13,g:"p0"+U},{x:x*U,z:M,r:13,g:"p1"+U}),T.push({ax:x*U,az:g,bx:x*U,bz:M,hw:S,g:"hwy"+U});T.push({ax:-x,az:Es,bx:x,bz:Es,hw:S,g:"con-top"},{ax:-x,az:ni,bx:x,bz:ni,hw:S,g:"con-bot"});let b=[];for(let U of v)for(let k of[-110,-210,-370])b.push({x:x*U,z:k,r:4});let A={segs:T,plazas:_,boosts:[...b,{x:30,z:Es,r:4},{x:-30,z:Es,r:4},{x:30,z:ni,r:4},{x:-30,z:ni,r:4}]};l.track=A,l.cars=[[x-3.5,-33],[x+3.5,-33],[-x-3.5,-33],[-x+3.5,-33]].map(([U,k],rt)=>({id:rt,x:U,z:k,yaw:Math.PI}));let I=ep();if(!o.headless){let U=o.main,k="#3b3f4d",rt=(et,vt,K)=>{for(let nt of T){if(nt.g===K)continue;let ct=nt.bx-nt.ax,ht=nt.bz-nt.az,yt=ct*ct+ht*ht,Gt=((et-nt.ax)*ct+(vt-nt.az)*ht)/yt;if(Gt=Math.max(0,Math.min(1,Gt)),Math.hypot(et-(nt.ax+ct*Gt),vt-(nt.az+ht*Gt))<nt.hw-.4)return!0}for(let nt of _)if(nt.g!==K&&Math.hypot(et-nt.x,vt-nt.z)<nt.r-.4)return!0;return!1},gt=[];T.forEach(et=>{let vt=Math.hypot(et.bx-et.ax,et.bz-et.az),K=Math.max(1,Math.ceil(vt/12));for(let nt=0;nt<K;nt++)gt.push({ax:et.ax+(et.bx-et.ax)*nt/K,az:et.az+(et.bz-et.az)*nt/K,bx:et.ax+(et.bx-et.ax)*(nt+1)/K,bz:et.az+(et.bz-et.az)*(nt+1)/K,hw:et.hw,g:et.g})}),gt.forEach((et,vt)=>{let K=et.bx-et.ax,nt=et.bz-et.az,ct=Math.hypot(K,nt),ht=(et.ax+et.bx)/2,yt=(et.az+et.bz)/2,Gt=-Math.atan2(nt,K),Yt=-nt/ct,Kt=K/ct;U.add(o.rbox(ct+.7,.08,et.hw*2,.02),ht,et.g.startsWith("hwy")?.053:et.g.startsWith("con")?.056:.05,yt,k,0,Gt,0);for(let te of[-1,1]){let B=ht+Yt*te*(et.hw-.45),ve=yt+Kt*te*(et.hw-.45);if(rt(B,ve,et.g)||U.add(o.rbox(ct+.05,.09,.9,.02),B,.1,ve,(vt+(te>0?1:0))%2?"#ff3b3b":"#ffffff",0,Gt,0),vt%2===0){let ce=ht+Yt*te*(et.hw+1.3),L=yt+Kt*te*(et.hw+1.3);rt(ce,L,et.g)||(U.add(new Rt(.75,.75,.7,10),ce,.35,L,"#23252e"),U.add(new Rt(.78,.78,.22,10),ce,.85,L,vt/2%2?"#ff3b3b":"#ffffff"))}}vt%2===0&&!rt(ht,yt,et.g)&&U.add(o.rbox(Math.min(ct,5)*.55,.06,.3,.02),ht,.1,yt,"#ffffff",0,Gt,0)});for(let et of _){U.add(new ms(et.r,48),et.x,.054,et.z,k,-Math.PI/2,0,0);for(let vt=0;vt<40;vt++){let K=vt/40*Math.PI*2,nt=et.x+Math.cos(K)*(et.r-.45),ct=et.z+Math.sin(K)*(et.r-.45);rt(nt,ct,et.g)||U.add(o.rbox(2,.09,.9,.02),nt,.1,ct,vt%2?"#ff3b3b":"#ffffff",0,-K+Math.PI/2,0)}for(let vt=0;vt<20;vt++){let K=vt/20*Math.PI*2,nt=et.x+Math.cos(K)*(et.r+1.3),ct=et.z+Math.sin(K)*(et.r+1.3);rt(nt,ct,et.g)||(U.add(new Rt(.75,.75,.7,10),nt,.35,ct,"#23252e"),U.add(new Rt(.78,.78,.22,10),nt,.85,ct,vt%2?"#ff3b3b":"#ffffff"))}}for(let et of A.boosts){U.add(o.rbox(10,.07,8,.02),et.x,.12,et.z,"#ff9f1c");for(let vt=0;vt<3;vt++)U.add(new Le(1.5,2,3),et.x,.16,et.z+2-vt*2,"#fff3b0",-Math.PI/2*0,Math.PI,0)}for(let et=0;et<5;et++)U.add(o.rbox(26-et*2,1.1,2.4,.1),w.x,.55+et*1.1,w.z-2+et*-2.2,r.plat[et%5]);let ut=["#0b6b3a","#2f7bff","#ffb21e","#a855f7"];l.cars.forEach((et,vt)=>{U.add(o.rbox(7.5,.07,9.5,.03),et.x,.12,et.z,ut[vt]),U.add(o.rbox(6.9,.075,8.9,.03),et.x,.125,et.z,k)});for(let et of v){let vt=x*et;for(let[K,nt]of[[vt-10.5,-14],[vt+10.5,-14],[vt-10.5,-38],[vt+10.5,-38]])U.add(o.rbox(.8,6,.8,.2),K,3,nt,r.plat[1]);U.add(o.rbox(23,.7,27,.2),vt,6.3,g,r.hazard),U.add(o.rbox(21,.4,25,.2),vt,6.75,g,"#ffffff");for(let K=0;K<10;K++)for(let nt=0;nt<2;nt++)U.add(o.rbox(1.4,.07,1.4,.01),vt-6.3+K*1.4,.13,-48-nt*1.4,(K+nt)%2?"#111111":"#ffffff");for(let K of[-1,1])U.add(o.rbox(.8,6.4,.8,.2),vt+K*8.2,3.2,-48,r.plat[1]);U.add(o.rbox(17.6,1,1.2,.2),vt,6.4,-48,r.hazard)}}if(T.push(...I.segs),A.plazas.push(...I.plazas),A.boosts.push(...I.boosts),A.slicks=I.slicks,I.dyn=np(I.defs),A.dyn=I.dyn,l.cars.push(...I.racers),l.sky={y:hn,gates:I.gates,garage:I.garage,racerIds:[4,5,6,7],pillars:I.pillars},o.headless||ip(o,I,r),!o.headless){let U=(rt,gt,ut,et,vt,K,nt,ct)=>{let ht=cn(rt,gt,ut,et);return ht.position.set(vt,K,nt),ht.rotation.y=ct,o.group.add(ht),ht},k={bg:["#1f8de6","#14609f"],fg:"#ffffff",stroke:"#06223d",border:"#ffd23f"};for(let rt of v){let gt=x*rt;U("CAR STATION",20,4.6,k,gt-11.8,8.8,g,-Math.PI/2),U("CAR STATION",20,4.6,k,gt+11.8,8.8,g,Math.PI/2);for(let[ut,et]of[[16,-8],[34,-14]]){let vt=new tt(new Rt(.2,.2,4,8),new se({color:"#e8e8f0"}));vt.position.set(ut*rt,2,et),o.group.add(vt),U(rt>0?"CAR STATION \u2192":"\u2190 CAR STATION",12,3.2,k,ut*rt,4.6,et,0)}U("LONG ROAD \u2192 DRIVE THE WHOLE MAP",22,3.2,{bg:["#ff9f1c","#e0601a"],fg:"#ffffff",stroke:"#4a1c00",border:"#ffffff"},gt,5.2,-60,0)}}let D=8,N=7,C=1.2,P=6,F=-356,O=20261017,j=()=>(O=O*1664525+1013904223>>>0,O/4294967296),V=Array.from({length:N},()=>Array(N+1).fill(!0)),$=Array.from({length:N+1},()=>Array(N).fill(!0)),Z=Array.from({length:N},()=>Array(N).fill(!1)),at=[[0,3]];for(Z[0][3]=!0;at.length;){let[U,k]=at[at.length-1],rt=[];if(U+1<N&&!Z[U+1][k]&&rt.push([U+1,k]),U-1>=0&&!Z[U-1][k]&&rt.push([U-1,k]),k-1>=0&&!Z[U][k-1]&&rt.push([U,k-1]),k+1<N&&!Z[U][k+1]&&rt.push([U,k+1]),!rt.length){at.pop();continue}let[gt,ut]=rt[Math.floor(j()*rt.length)];gt===U+1?$[U+1][k]=!1:gt===U-1?$[U][k]=!1:ut===k-1?V[U][k]=!1:V[U][k+1]=!1,Z[gt][ut]=!0,at.push([gt,ut])}$[0][3]=!1,$[N][3]=!1;let pt=["#3fae4a","#58c25c","#2f9a44"];for(let U=0;U<N;U++)for(let k=0;k<=N;k++)V[U][k]&&o.platform((k-N/2)*D,P,F-(U+.5)*D,C,D+C,{h:P,color:pt[(U+k)%3],pad:!1});for(let U=0;U<=N;U++)for(let k=0;k<N;k++)$[U][k]&&o.platform((k+.5-N/2)*D,P,F-U*D,D+C,C,{h:P,color:pt[(U+k+1)%3],pad:!1});let Jt=new Map,kt=[[0,3]];for(Jt.set("0,3",null);kt.length;){let[U,k]=kt.shift(),rt=[[U+1,k,$[U+1][k]],[U-1,k,U>0?$[U][k]:!0],[U,k-1,V[U][k]],[U,k+1,V[U][k+1]]];for(let[gt,ut,et]of rt)!et&&gt>=0&&gt<N&&ut>=0&&ut<N&&!Jt.has(gt+","+ut)&&(Jt.set(gt+","+ut,[U,k]),kt.push([gt,ut]))}let Xt=[];for(let U=[N-1,3];U;U=Jt.get(U[0]+","+U[1]))Xt.unshift([(U[1]+.5-N/2)*D,F-(U[0]+.5)*D]);l.mazePath=Xt,o.checkpoint(0,0,F+2,16),a.z=F-N*D,a.y=.15,f()}else if(i===3){l.startArch=99,l.spawn={x:0,y:0,z:-10},o.checkpoints.push({x:0,y:0,z:0,w:14,spawn:[0,0,-10]}),o.waterY=-40,o.killY=-60;let p=6,y=-114,m=30,x=["#d9e6f7","#cfe0f5"];o.platform(0,0,(p+y)/2,120,120,{h:2,color:"#efe3c8",pad:!1}),o.platform(-61,m,(p+y)/2,2,124,{h:m,color:x[0],pad:!1}),o.platform(61,m,(p+y)/2,2,124,{h:m,color:x[0],pad:!1}),o.platform(0,m,p+1,124,2,{h:m,color:x[1],pad:!1}),o.platform(0,m,y-1,124,2,{h:m,color:x[1],pad:!1});let S=-40,w=16;o.ramp(S,-6,0,-46,w,8,{color:"#f2a65a",padColor:"#ffe3b8"}),o.platform(S,w,-52,12,12,{h:3,color:"#f2a65a",padColor:"#ffe3b8"}),o.ramp(S,-58,w,-100,0,8,{conv:[0,-14],ice:!0,color:"#5bc0eb",padColor:"#ffffff"}),l.slide={x:S,top:w,zTop:-58,zEnd:-100},l.pads=[[22,-28],[46,-28],[22,-88],[46,-88]];for(let[g,M]of l.pads)o.bungee(g,M,0,5.5,30,15);l.finishZ=-99999,l.finishY=99999,l.finishPlat={far:y}}else i===2?(Sp(o,r,l,n),l.finishZ=-99999,l.finishY=99999,l.finishPlat={far:Pi().dr.endZ}):(cp(o,r,l),l.finishZ=-99999,l.finishY=99999,l.finishPlat={far:-230});o.finalize();let d=l.finishPlat;return l.length=-l.finishZ,l.checkpoints=o.checkpoints,l.endZ=d.far,{world:o,info:l}}function Ep(){return{x:0,y:0,z:0,vx:0,vy:0,vz:0,yaw:Math.PI,grounded:!1,ground:null,coyote:0,jumpBuf:0,stun:0,dive:0,diveCd:0,noSnap:0,hitCd:0,immune:0,boost:0,jumping:!1,noCtrl:0,landSpeed:0,inWater:!1,events:[],moveT:0,yawOff:0,swim:0,waterSurf:0}}var B1=(i,t)=>{let e=(t-i)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e};function yc(i,t,e,n){let s=t-i.vx,r=e-i.vz,o=Math.hypot(s,r);o<=n||o<1e-6?(i.vx=t,i.vz=e):(i.vx+=s/o*n,i.vz+=r/o*n)}function wp(i,t,e,n){t.coyote=t.grounded?.11:t.coyote-e,t.jumpBuf=n.jumpPressed?.13:t.jumpBuf-e,t.immune>0&&(t.immune-=e),t.stun>0&&(t.stun=Math.max(0,t.stun-e),t.stun<=0&&(t.immune=1)),t.dive>0&&(t.dive=Math.max(0,t.dive-e)),t.diveCd>0&&(t.diveCd-=e),t.noSnap>0&&(t.noSnap-=e),t.hitCd>0&&(t.hitCd-=e),t.boost>0&&(t.boost-=e),t.noCtrl>0&&(t.noCtrl-=e);let s=0,r=0;for(let h of i.pools)if(t.x>h.x0&&t.x<h.x1&&t.z>h.z0&&t.z<h.z1){let f=h.surf-t.y;f>.12&&(s=Math.min(1,f/.9),r=h.surf);break}s>.3&&t.swim<=.3&&(t.events.push("splash"),t.waterSurf=r),t.swim=s;let o=t.stun<=0&&t.dive<=0&&t.noCtrl<=0,a=t.ground&&t.ground.ice,l=Math.abs(n.mx)+Math.abs(n.mz)>.01;if(n.divePressed&&t.diveCd<=0&&t.stun<=0&&t.dive<=0){let h=Math.sin(t.yaw),f=Math.cos(t.yaw);t.vx=h*15.5,t.vz=f*15.5,t.vy=t.grounded?7:Math.max(t.vy,3.5),t.grounded=!1,t.ground=null,t.noSnap=.2,t.dive=.85,t.diveCd=1.1,t.events.push("dive")}if(o){let h=_e.RUN*(t.boost>0?1.45:1)*(t.speedMul||1)*(1-.34*s);if(l){let f=t.grounded?a?_e.ICE_ACC:_e.ACC:_e.AIR;yc(t,n.mx*h,n.mz*h,f*e);let d=Math.atan2(n.mx,n.mz);t.yaw+=B1(t.yaw,d)*(1-Math.exp(-20*e))}else t.grounded?yc(t,0,0,(a?_e.ICE_DEC:_e.DEC)*e):yc(t,0,0,_e.AIR_DEC*e)}else{let h=t.grounded?a?1.2:9:.6;yc(t,0,0,h*e)}if(s>.4&&n.jumpPressed&&t.stun<=0?(t.vy=9,t.grounded=!1,t.ground=null,t.noSnap=.2,t.jumpBuf=0,t.events.push("stroke")):t.jumpBuf>0&&(t.grounded||t.coyote>0)&&t.stun<=0&&t.dive<=.45&&(t.vy=_e.JUMP*(t.jumpMul||1),t.grounded=!1,t.ground=null,t.coyote=0,t.jumpBuf=0,t.noSnap=.2,t.jumping=!0,t.events.push("jump")),t.jumping&&!n.jumpHeld&&t.vy>6&&(t.vy-=55*e),t.vy=Math.max(_e.TERM,t.vy-_e.G*e*(t.dive>0&&!t.grounded?.8:1)*(1-.92*s)),s>.05){let h=r-(n.jumpHeld?.3:.95);t.vy+=(h-t.y)*26*e*s,t.vy*=Math.exp(-2.4*e*s)}for(let h of i.zones){let f=t.x-h.x,d=t.z-h.z;if(f*f+d*d<h.r*h.r&&t.y>h.y0-.3&&t.y<h.y1){let p=Math.max(0,(t.y-h.y0)/(h.y1-h.y0)),y=h.vmax*(1-p*p);t.vy<y&&(t.vy=Math.min(y,t.vy+h.lift*e)),t.noSnap=Math.max(t.noSnap,.12),t.air||(t.air=!0,t.events.push("air"))}else t.air=!1}if(t.grounded&&t.ground){let h=t.ground.conv;h&&(t.x+=h[0]*e,t.z+=h[1]*e),t.ground.boost&&(t.boost=.55)}let c=t.grounded,u=t.y;if(t.x+=t.vx*e,t.z+=t.vz*e,i.resolveHorizontal(t),i.resolveHorizontal(t),t.y+=t.vy*e,t.grounded=!1,t.ground=null,t.vy<=0){let h=i.findGround(t,u,c);if(h){let f=-t.vy;t.y=h.top,t.vy=0,t.grounded=!0,t.ground=h.s,t.jumping=!1,h.s.bounce?(t.vy=h.s.bounce,t.grounded=!1,t.ground=null,t.noSnap=.25,t.jumping=!1,h.s.push&&(t.vx=h.s.push[0],t.vz=h.s.push[1],t.noCtrl=.9),h.s.squash!==void 0&&(h.s.squash=1),t.events.push("bounce")):!c&&f>6&&(t.landSpeed=f,t.events.push("land"))}}else{let h=i.hitCeiling(t,u);h&&(t.y=h.y0-_e.H,t.vy=Math.min(0,t.vy*.2))}return t.y<i.waterY-.2&&!t.inWater&&(t.inWater=!0,t.events.push("splash")),t.y<i.killY&&t.events.push("fell"),t}function Ar(i,t,e,n){return i.hitCd>0||i.shield>0?!1:(i.vx=t*n,i.vz=e*n,i.vy=Math.max(i.vy,6.5),i.grounded=!1,i.ground=null,i.noSnap=.25,i.stun=.95,i.dive=0,i.hitCd=.5,i.events.push("hit"),!0)}function _c(i,t,e,n,s){i.x=t,i.y=e,i.z=n,i.vx=i.vy=i.vz=0,i.grounded=!1,i.ground=null,i.stun=0,i.dive=0,i.inWater=!1,i.hitCd=1,i.yaw=s!=null?s:Math.PI,i.noSnap=0,i.boost=0}var H1=(i,t,e)=>i<t?t:i>e?e:i,wn=(i,t={})=>{var e,n,s;return new yo({color:i,roughness:(e=t.r)!=null?e:.3,clearcoat:(n=t.cc)!=null?n:.65,clearcoatRoughness:.25,metalness:(s=t.m)!=null?s:0})},qe=(i,t=.55)=>new se({color:i,roughness:t}),xu=(i,t,e)=>{let n=new tt(new Wi(i,t,6,16),e);return n.castShadow=!0,n},xn=(i,t,e=16,n=12)=>{let s=new tt(new xe(i,e,n),t);return s.castShadow=!0,s},Rp=qe("#ffffff",.25),Cp=qe("#101018",.4);function yu(i,t,e,n,s,r=.55){for(let o of[-1,1]){let a=xn(s,Rp);a.position.set(o*n,t,e);let l=xn(s*r,Cp);l.position.set(0,0,s*.62),a.add(l),i.add(a)}}function Tp(i,t){let e=new Xi;for(let n=0;n<10;n++){let s=-Math.PI/2+n*Math.PI/5,r=n%2?t:i,o=Math.cos(s)*r,a=Math.sin(s)*r;n?e.lineTo(o,a):e.moveTo(o,a)}return e.closePath(),e}var Ap=[{name:"Bubbles",pivotY:.85},{name:"Ninja",pivotY:.95},{name:"Dino",pivotY:.8},{name:"Robo",pivotY:.9}],Ts=class{constructor(t){this.id=t,this.group=new Dt,this.pivot=new Dt,this.inner=new Dt,this.group.add(this.pivot),this.pivot.add(this.inner),this.pivot.position.y=Ap[t].pivotY,this.inner.position.y=-Ap[t].pivotY,this.body=new Dt,this.inner.add(this.body),this.t=Math.random()*10,this.phase=0,this.squash=0,this.tumble=0,this.lean=0,this.dive=0,this.wag=[],this.height=1.7,[this.buildBubbles,this.buildNinja,this.buildDino,this.buildRobo][t].call(this),this.makeBat(),this.makeExtras(),this.group.traverse(e=>{e.isMesh&&(e.castShadow=!0)})}limbs(t,e,n,s,r,o,a,l,c,u,h,f){let d=(p,y,m,x,S,w)=>{let g=new Dt;g.position.set(p,y,0);let M=xu(m,x,S);if(M.position.y=-x/2-m*.6,g.add(M),w){let v=w();g.add(v)}return this.inner.add(g),g};this.legL=d(-t,e,n,s,r,f?()=>{let p=xn(n*1.35,f);return p.scale.set(1,.6,1.5),p.position.set(0,-s-n*.55,n*.7),p}:null),this.legR=d(t,e,n,s,r,f?()=>{let p=xn(n*1.35,f);return p.scale.set(1,.6,1.5),p.position.set(0,-s-n*.55,n*.7),p}:null),this.armL=d(-o,a,l,c,u,h?()=>{let p=xn(l*1.45,h);return p.position.y=-c-l*.9,p}:null),this.armR=d(o,a,l,c,u,h?()=>{let p=xn(l*1.45,h);return p.position.y=-c-l*.9,p}:null),this.handY=-c-l*.9}makeExtras(){let t=this.height,e=new tt(new xe(t*.64,22,14),new ye({color:"#7fd8ff",transparent:!0,opacity:.3,depthWrite:!1}));e.position.y=t*.52,e.visible=!1,this.group.add(e),this.shield=e;let n=wn("#ffd23f",{m:.6,r:.25}),s=new Dt,r=new tt(new Rt(.2,.17,.12,5),n);s.add(r);for(let o=0;o<5;o++){let a=o/5*Math.PI*2,l=new tt(new Le(.06,.2,6),n);l.position.set(Math.cos(a)*.17,.15,Math.sin(a)*.17),s.add(l)}s.position.y=t+.22,s.scale.setScalar(1.15),s.visible=!1,this.group.add(s),this.leadCrown=s}makeBat(){let t=wn("#d9a15a",{r:.45,cc:.3}),e=qe("#3a2412",.7),n=qe("#ff3b3b",.5),s=new Dt,r=new tt(new Rt(.035,.045,.5,10),e);r.position.y=-.18,s.add(r);let o=new tt(new Rt(.05,.125,.8,14),t);o.position.y=-.7,s.add(o);let a=new tt(new xe(.125,12,8),t);a.scale.y=.5,a.position.y=-1.1,s.add(a);let l=new tt(new We(.075,.018,6,16),n);l.rotation.x=Math.PI/2,l.position.y=-.52,s.add(l);let c=new tt(new xe(.06,8,6),e);c.position.y=.07,s.add(c),s.position.set(0,this.handY,.02),s.visible=!1,s.traverse(u=>{u.isMesh&&(u.castShadow=!0)}),this.armR.add(s),this.bat=s}buildBubbles(){let t=wn("#ff5fb4"),e=wn("#d63a8d"),n=xu(.47,.34,t);n.position.y=.3+.64,this.body.add(n),this.limbs(.2,.42,.13,.12,t,.5,.95,.11,.22,t,qe("#ffffff",.3),qe("#7a2cff",.4)),yu(this.body,1.2,.4,.17,.13);for(let a of[-1,1]){let l=xn(.07,qe("#ff8fcf"));l.scale.set(1.4,.8,.5),l.position.set(a*.3,1.04,.4),this.body.add(l)}let s=new tt(new Yi(Tp(.17,.075),{depth:.04,bevelEnabled:!1}),wn("#ffd23f",{m:.3}));s.position.set(0,.8,.455),this.body.add(s);let r=new Dt;r.position.set(0,1.55,.02);let o=new tt(new Rt(.27,.3,.16,20),wn("#ffd23f",{m:.55,r:.2}));r.add(o);for(let a=0;a<5;a++){let l=a/5*Math.PI*2,c=new tt(new Le(.065,.22,8),wn("#ffd23f",{m:.55,r:.2}));c.position.set(Math.cos(l)*.23,.18,Math.sin(l)*.23),r.add(c);let u=xn(.04,qe(a%2?"#35e0ff":"#ff3b6b",.2));u.position.set(Math.cos(l)*.23,.3,Math.sin(l)*.23),r.add(u)}this.body.add(r),this.crown=r,this.height=1.95}buildNinja(){let t=wn("#2f6bff"),e=wn("#14224f",{cc:.3}),n=xu(.36,.76,t);n.position.y=.34+.74,this.body.add(n),this.limbs(.15,.55,.11,.3,e,.42,1.28,.09,.3,t,qe("#14224f"),qe("#0a0a14"));let s=new tt(new Rt(.372,.372,.22,24,1,!0),qe("#0b0b17",.5));s.position.y=1.5,this.body.add(s);let r=new tt(new xe(.372,24,8,0,Math.PI*2,0,Math.PI/2),qe("#0b0b17",.5));r.scale.set(1,.96,1),r.position.y=1.46,this.body.add(r),yu(this.body,1.5,.3,.14,.1,.65);let o=new tt(new We(.31,.05,8,28),qe("#ff2b4a",.4));o.rotation.x=Math.PI/2,o.position.y=1.64,this.body.add(o),this.tails=[];for(let u=0;u<2;u++){let h=new Dt;h.position.set(u?.06:-.06,1.64,-.3);let f=new tt(new ge(.1,.05,.6),qe("#ff2b4a",.4));f.position.z=-.3,h.add(f),this.body.add(h),this.tails.push(h)}let a=new tt(new We(.37,.05,8,28),qe("#ffd23f",.4));a.rotation.x=Math.PI/2,a.position.y=.95,this.body.add(a);let l=new tt(new We(.31,.07,8,24),qe("#ffffff",.5));l.rotation.x=Math.PI/2,l.position.y=1.28,this.body.add(l);let c=new tt(new Yi(Tp(.13,.04),{depth:.03,bevelEnabled:!1}),wn("#d8e2ff",{m:.8,r:.2}));c.scale.set(1,1,1),c.position.set(0,.7,.34),this.body.add(c),this.height=1.95}buildDino(){let t=wn("#3ddc84"),e=wn("#c8ffd9"),n=wn("#ff9f1c"),s=xn(.58,t,28,20);s.scale.set(1,1.08,.98),s.position.y=.3+.62,this.body.add(s);let r=xn(.45,e,22,16);r.scale.set(.85,.95,.5),r.position.set(0,.85,.36),this.body.add(r),this.limbs(.24,.42,.15,.1,t,.52,.85,.09,.12,t,null,qe("#1f9d5b"));for(let c of[this.legL,this.legR])for(let u=-1;u<=1;u++){let h=new tt(new Le(.035,.12,6),Rp);h.rotation.x=Math.PI/2,h.position.set(u*.07,-.22,.36),c.add(h)}let o=xn(.3,t,18,12);o.scale.set(1,.7,.9),o.position.set(0,1,.5),this.body.add(o);for(let c of[-1,1]){let u=xn(.03,Cp,8,6);u.position.set(c*.08,1.08,.76),this.body.add(u)}yu(this.body,1.42,.34,.22,.17,.5);for(let c of[-1,1]){let u=new tt(new Le(.06,.2,8),qe("#fff1c2",.4));u.position.set(c*.2,1.68,.18),u.rotation.z=-c*.25,this.body.add(u)}[.62,.8,1,1.2,1.38].forEach((c,u)=>{let h=[.13,.18,.21,.18,.13][u],f=new tt(new Le(h*.75,h*2,8),n),d=-Math.sqrt(Math.max(.02,.58*.58-(c-.92)*(c-.92)/1.17))-.02;f.position.set(0,c,d),f.rotation.x=-(1.15-u*.2),this.body.add(f)}),this.tail=new Dt,this.tail.position.set(0,.55,-.45);let a=new tt(new Le(.22,.9,12),t);a.rotation.x=-Math.PI/2-.4,a.position.set(0,0,-.4),this.tail.add(a);let l=xn(.07,n);l.position.set(0,-.2,-.78),this.tail.add(l),this.body.add(this.tail),this.height=1.85}buildRobo(){let t=wn("#ffc233"),e=wn("#b4bdcc",{m:.7,r:.25}),n=qe("#1c2233",.4),s=new ye({color:"#4ff3ff"}),r=new tt(new Wi(.46,.4,6,16),t);r.scale.set(1,1,.92),r.position.y=.98,r.castShadow=!0,this.body.add(r);let o=new tt(new ge(.64,.3,.12),n);o.position.set(0,1.28,.4),o.rotation.x=-.12,this.body.add(o);for(let h of[-1,1]){let f=xn(.075,s,10,8);f.scale.set(1,1.15,.5),f.position.set(h*.16,1.29,.47),this.body.add(f)}let a=new tt(new ge(.26,.05,.05),n);a.position.set(0,1.03,.45),this.body.add(a);let l=new tt(new ge(.34,.24,.06),e);l.position.set(0,.76,.43),l.rotation.x=-.05,this.body.add(l);for(let[h,f]of[[-.1,.82],[.1,.82],[-.1,.7],[.1,.7]]){let d=xn(.025,n,6,4);d.position.set(h,f,.47),this.body.add(d)}for(let h of[-1,1]){let f=new tt(new Rt(.1,.1,.16,12),e);f.rotation.z=Math.PI/2,f.position.set(h*.5,1.28,0),f.castShadow=!0,this.body.add(f)}let c=new tt(new Rt(.025,.025,.3,8),e);c.position.set(0,1.78,0),this.body.add(c);let u=xn(.075,qe("#ff3b3b",.3),12,8);u.position.set(0,1.97,0),this.body.add(u),this.limbs(.2,.45,.12,.14,e,.52,.98,.1,.22,e,qe("#ff4d4d",.4),qe("#2b3347",.4)),this.height=2}update(t,e){this.t+=t;let n=H1(e.speed/10.5,0,1.3);e.grounded&&!e.stun&&(this.phase+=t*(5+n*11));let s=Math.sin(this.phase),r=n*.95;if(e.stun>0)this.tumble+=t*11,this.pivot.rotation.x=this.tumble,this.pivot.rotation.z=Math.sin(this.tumble*.5)*.4,this.legL.rotation.x=Math.sin(this.t*16)*1,this.legR.rotation.x=-Math.sin(this.t*16)*1,this.armL.rotation.z=-1.5+Math.sin(this.t*18)*.5,this.armR.rotation.z=1.5-Math.sin(this.t*18)*.5,this.armL.rotation.x=this.armR.rotation.x=0;else{let l=Math.round(this.tumble/(Math.PI*2))*Math.PI*2;this.tumble+=(l-this.tumble)*Math.min(1,t*14),this.pivot.rotation.z*=Math.max(0,1-t*12);let c=e.dive>0?1:0;this.dive+=(c-this.dive)*Math.min(1,t*16);let u=(e.grounded?n*.2:.05)+this.dive*1.35;if(this.lean+=(u-this.lean)*Math.min(1,t*14),this.pivot.rotation.x=this.tumble+this.lean,e.celebrate){let h=Math.abs(Math.sin(this.t*6))*.35;this.body.position.y=h,this.armL.rotation.z=-2.6+Math.sin(this.t*14)*.3,this.armR.rotation.z=2.6-Math.sin(this.t*14)*.3,this.armL.rotation.x=this.armR.rotation.x=0,this.legL.rotation.x=this.legR.rotation.x=0}else if(this.dive>.3)this.armL.rotation.x=this.armR.rotation.x=-2.9,this.armL.rotation.z=-.15,this.armR.rotation.z=.15,this.legL.rotation.x=this.legR.rotation.x=.2;else if(e.grounded){this.legL.rotation.x=s*r,this.legR.rotation.x=-s*r,this.armL.rotation.x=-s*r*.9,this.armR.rotation.x=s*r*.9;let h=Math.sin(this.t*2.2)*.04;this.armL.rotation.z=-.15-h-n*.2,this.armR.rotation.z=.15+h+n*.2}else{let h=e.vy>0;this.legL.rotation.x=h?.7:.35,this.legR.rotation.x=h?-.5:-.2,this.armL.rotation.z=-2.2,this.armR.rotation.z=2.2,this.armL.rotation.x=this.armR.rotation.x=0}e.celebrate||(this.body.position.y=e.grounded?Math.abs(s)*.07*n:0)}if(this.shield.visible=!!e.shield,e.shield){let l=1+Math.sin(this.t*8)*.04;this.shield.scale.set(l,l,l)}if(this.leadCrown.visible=!!e.leader,e.leader&&(this.leadCrown.rotation.y+=t*2.2,this.leadCrown.position.y=this.height+.22+Math.sin(this.t*3)*.05),this.bat.scale.setScalar(e.mega?1.6:1),e.swing>0&&!e.stun){let l=e.swing,c;if(l<.3)c=-2.95*(l/.3);else{let u=(l-.3)/.7;c=-2.95+2.75*(1-(1-u)*(1-u))}this.armR.rotation.x=c,this.armR.rotation.z=.12,this.pivot.rotation.x=this.tumble+this.lean+(l>.3?.28*Math.sin(Math.min(1,(l-.3)/.35)*Math.PI):0),this.bat.visible=!0}else this.bat.visible=!1;e.landed&&(this.squash=1),this.squash=Math.max(0,this.squash-t*5);let o=1-Math.sin(this.squash*Math.PI)*.22*this.squash;!e.grounded&&e.vy>2&&!e.stun&&(o=1.1),!e.grounded&&e.vy<-8&&(o=1.06);let a=1+(1-o)*.55;this.body.scale.set(a,o,a),this.tails&&this.tails.forEach((l,c)=>{l.rotation.x=-.15-n*.5+Math.sin(this.t*9+c)*.12*(.4+n),l.rotation.y=(c?1:-1)*(.15+Math.sin(this.t*7+c*2)*.12)}),this.tail&&(this.tail.rotation.y=Math.sin(this.t*(6+n*6))*(.35+n*.25)),this.crown&&(this.crown.rotation.z=Math.sin(this.t*5)*.05*n)}dispose(){this.group.traverse(t=>{if(t.isMesh){t.geometry.dispose();let e=t.material;(Array.isArray(e)?e:[e]).forEach(n=>n.dispose())}})}};function Rr(i,t="#ffffff"){let e=document.createElement("canvas");e.width=512,e.height=128;let n=e.getContext("2d");n.font='700 64px "Lilita One","Fredoka","Baloo 2","Trebuchet MS",Arial,sans-serif',n.textAlign="center",n.textBaseline="middle";let s=Math.min(480,n.measureText(i).width+56);n.fillStyle="rgba(12,10,36,0.72)";let r=(512-s)/2,o=14,a=100,l=50;n.beginPath(),n.moveTo(r+l,o),n.arcTo(r+s,o,r+s,o+a,l),n.arcTo(r+s,o+a,r,o+a,l),n.arcTo(r,o+a,r,o,l),n.arcTo(r,o,r+s,o,l),n.closePath(),n.fill(),n.lineWidth=6,n.strokeStyle=t,n.stroke(),n.lineWidth=8,n.strokeStyle="rgba(0,0,0,0.65)",n.strokeText(i,256,68,440),n.fillStyle="#ffffff",n.fillText(i,256,68,440);let c=new bn(e);c.colorSpace=Ne,c.anisotropy=4;let u=new no(new or({map:c,transparent:!0,depthTest:!1,depthWrite:!1,fog:!1}));return u.renderOrder=999,u.scale.set(2.8,.7,1),u.userData.base=.7,u}var Zo={fun:{top:"#35a7ff",horizon:"#e8fbff",bottom:"#fff6d8",fog:"#d9f4ff",fogNear:120,fogFar:640,sun:"#fff4d6",sunPos:[-40,90,-60],sunI:2.7,hemiSky:"#d4ecff",hemiGround:"#bfe8a0",hemiI:1.05,exp:1.05,waterA:"#37d7e8",waterB:"#1388c9",water:"water",env:.6},jungle:{top:"#3a9be8",horizon:"#dff6c9",bottom:"#f3ffd9",fog:"#cfeec0",fogNear:70,fogFar:380,sun:"#fff3c8",sunPos:[-50,85,-40],sunI:2.6,hemiSky:"#cfe9ff",hemiGround:"#6fbf5a",hemiI:1.05,exp:1.05,waterA:"#37d7e8",waterB:"#1388c9",water:"water",env:.55},arena:{top:"#3a9be8",horizon:"#dff6c9",bottom:"#f3ffd9",fog:"#cfeec0",fogNear:70,fogFar:380,sun:"#fff3c8",sunPos:[-50,85,-40],sunI:2.6,hemiSky:"#cfe9ff",hemiGround:"#6fbf5a",hemiI:1.05,exp:1.05,waterA:"#37d7e8",waterB:"#1388c9",water:"water",env:.55},quest:{top:"#3a9be8",horizon:"#dff6c9",bottom:"#f3ffd9",fog:"#cfeec0",fogNear:70,fogFar:380,sun:"#fff3c8",sunPos:[-50,85,-40],sunI:2.6,hemiSky:"#cfe9ff",hemiGround:"#6fbf5a",hemiI:1.05,exp:1.05,waterA:"#37d7e8",waterB:"#1388c9",water:"water",env:.55}},_u=null;function Ip(){return _u||(_u=(async()=>{try{await Promise.race([Promise.all([document.fonts.load('400 100px "Lilita One"'),document.fonts.load('400 100px "Fredoka One"'),document.fonts.load('400 100px "Noto Nastaliq Urdu"',"\u0639\u06A9\u0631\u0645\u06C1")]),new Promise(i=>setTimeout(i,2500))])}catch{}})()),_u}var vc='"Lilita One","Fredoka One","Baloo 2","Arial Rounded MT Bold","Trebuchet MS",Impact,Arial,sans-serif';function Mc(i="HARIS",t=null,e=["#fff7a8","#ffc83d","#ff7a1a"]){let n=document.createElement("canvas");n.width=1024,n.height=t?512:400;let s=n.getContext("2d");s.textAlign="center",s.textBaseline="middle";let r=300;for(s.font=`${r}px ${vc}`;s.measureText(i).width>900&&r>80;)r-=10,s.font=`${r}px ${vc}`;let o=t?220:200;s.lineJoin="round",s.shadowColor="rgba(255,190,60,0.9)",s.shadowBlur=40,s.lineWidth=46,s.strokeStyle="rgba(255,170,40,0.35)",s.strokeText(i,512,o),s.shadowBlur=0,s.lineWidth=40,s.strokeStyle="#1b0f4a",s.strokeText(i,512,o),s.lineWidth=18,s.strokeStyle="#ffffff",s.strokeText(i,512,o),s.fillStyle="#b0420b";for(let c=14;c>0;c-=2)s.fillText(i,512,o+c);let a=s.createLinearGradient(0,o-r/2,0,o+r/2);a.addColorStop(0,e[0]),a.addColorStop(.55,e[1]),a.addColorStop(1,e[2]),s.fillStyle=a,s.fillText(i,512,o),s.globalCompositeOperation="source-atop",s.fillStyle="rgba(255,255,255,0.35)",s.fillRect(0,o-r/2,1024,r*.18),s.globalCompositeOperation="source-over",t&&(s.font=`90px ${vc}`,s.lineWidth=16,s.strokeStyle="#1b0f4a",s.strokeText(t,512,440),s.fillStyle="#ffffff",s.fillText(t,512,440));let l=new bn(n);return l.colorSpace=Ne,l.anisotropy=8,l}function k1(i,t="#ff3b6b",e="#ffffff"){let n=document.createElement("canvas");n.width=1024,n.height=256;let s=n.getContext("2d");s.fillStyle=t,s.fillRect(0,0,1024,256);let r=32;s.fillStyle=e;for(let a=0;a<1024;a+=r)for(let l=0;l<256;l+=r)(a+l)/r%2===0&&(l<r||l>=256-r)&&s.fillRect(a,l,r,r);s.font=`150px ${vc}`,s.textAlign="center",s.textBaseline="middle",s.lineJoin="round",s.lineWidth=26,s.strokeStyle="#1b0f4a",s.strokeText(i,512,132),s.fillStyle="#fff",s.fillText(i,512,132);let o=new bn(n);return o.colorSpace=Ne,o.anisotropy=8,o}function Pp(){let i=document.createElement("canvas");i.width=128,i.height=128;let t=i.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,128,128),t.fillStyle="rgba(0,0,0,0.28)",t.beginPath(),t.moveTo(64,14),t.lineTo(108,70),t.lineTo(80,70),t.lineTo(80,112),t.lineTo(48,112),t.lineTo(48,70),t.lineTo(20,70),t.closePath(),t.fill();let e=new bn(i);return e.colorSpace=Ne,e.anisotropy=4,e}function G1(i="rgba(255,255,255,1)",t="rgba(255,255,255,0)"){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d"),s=n.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,i),s.addColorStop(1,t),n.fillStyle=s,n.fillRect(0,0,128,128);let r=new bn(e);return r.colorSpace=Ne,r}function vu(i){let t=new z(...i.sunPos).normalize(),e=new tn({side:sn,depthWrite:!1,fog:!1,uniforms:{top:{value:new Ot(i.top)},horizon:{value:new Ot(i.horizon)},bottom:{value:new Ot(i.bottom)},sunDir:{value:t},sunColor:{value:new Ot(i.sun)}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); gl_Position.z = gl_Position.w; }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom; uniform vec3 sunDir; uniform vec3 sunColor; varying vec3 vD;
      void main(){ float h = vD.y; vec3 c = h>0.0 ? mix(horizon, top, pow(h, 0.55)) : mix(horizon, bottom, pow(-h, 0.45));
        float s = max(dot(normalize(vD), sunDir), 0.0); c += sunColor * (pow(s, 600.0)*3.0 + pow(s, 24.0)*0.35 + pow(s, 6.0)*0.12);
        gl_FragColor = vec4(c, 1.0); }`}),n=new tt(new xe(900,32,16),e);return n.frustumCulled=!1,n.renderOrder=-10,n}function Mu(i,t){let e=new Ot(i.fog),n=i.water==="lava"?1:i.water==="grid"?2:0,s=new tn({uniforms:{time:{value:0},cA:{value:new Ot(i.waterA)},cB:{value:new Ot(i.waterB)},fogC:{value:e},fogN:{value:i.fogNear},fogF:{value:i.fogFar},kind:{value:n}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform float time; uniform vec3 cA; uniform vec3 cB; uniform vec3 fogC; uniform float fogN; uniform float fogF; uniform float kind; varying vec3 vW;
      float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
      float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f); return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
      void main(){
        vec2 p = vW.xz; vec3 col;
        if(kind < 0.5){ float w = vn(p*0.25+vec2(time*0.25,time*0.15))*0.6 + vn(p*0.7-vec2(time*0.4,0.0))*0.4;
          col = mix(cB, cA, w); float ln = smoothstep(0.78,0.95, sin(p.x*0.5+time*1.2+vn(p*0.3)*6.0)*0.5+0.5)*0.25; col += ln; col += pow(vn(p*1.6+time*0.5),6.0)*0.35; }
        else if(kind < 1.5){ float w = vn(p*0.18+vec2(time*0.07,0.0))*0.6 + vn(p*0.55+time*0.1)*0.4; float cr = smoothstep(0.35,0.6,w);
          col = mix(cB*1.25, cA, cr); col = mix(col, vec3(0.16,0.03,0.02), smoothstep(0.62,0.78,vn(p*0.35-time*0.05))*0.85); col += cA*0.25*(0.5+0.5*sin(time*2.0+p.x*0.3)); }
        else { vec2 g = abs(fract(p*0.125)-0.5); float l = smoothstep(0.47,0.5,max(g.x,g.y)); col = cA + cB*l*1.6; col += cB*0.25*pow(vn(p*0.05+time*0.1),2.0); }
        float d = length(vW - cameraPosition); float f = smoothstep(fogN, fogF, d);
        gl_FragColor = vec4(mix(col, fogC, f), 1.0);
      }`}),r=new tt(new Xe(1600,1600),s);return r.rotation.x=-Math.PI/2,r.position.y=t,r.frustumCulled=!1,r.renderOrder=-5,r.userData.mat=s,r}var Yo=class{constructor(t=500){this.max=t,this.n=0,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*3),this.size=new Float32Array(t),this.alpha=new Float32Array(t),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.grav=new Float32Array(t),this.s0=new Float32Array(t);let e=new Pe;e.setAttribute("position",new Fe(this.pos,3).setUsage(_r)),e.setAttribute("color",new Fe(this.col,3).setUsage(_r)),e.setAttribute("size",new Fe(this.size,1).setUsage(_r)),e.setAttribute("alpha",new Fe(this.alpha,1).setUsage(_r)),e.setDrawRange(0,0),this.mat=new tn({transparent:!0,depthWrite:!1,uniforms:{scale:{value:600}},vertexShader:"attribute float size; attribute float alpha; attribute vec3 color; varying float vA; varying vec3 vC; uniform float scale; void main(){ vA=alpha; vC=color; vec4 mv = modelViewMatrix*vec4(position,1.0); gl_PointSize = size*scale/max(1.0,-mv.z); gl_Position = projectionMatrix*mv; }",fragmentShader:"varying float vA; varying vec3 vC; void main(){ vec2 c = gl_PointCoord-0.5; float d = length(c); if(d>0.5) discard; gl_FragColor = vec4(vC, vA*smoothstep(0.5,0.1,d)); }"}),this.points=new hr(e,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,this.geo=e,this._c=new Ot}emit(t,e,n,s,r={}){var a,l,c,u,h,f,d,p;let o=this._c.set((a=r.color)!=null?a:"#ffffff");for(let y=0;y<s;y++){let m=this.n<this.max?this.n++:Math.floor(Math.random()*this.max),x=Math.random()*Math.PI*2,S=((l=r.speed)!=null?l:3)*(.3+Math.random()*.9),w=(c=r.up)!=null?c:3,g=m*3;this.pos[g]=t+(Math.random()-.5)*((u=r.spread)!=null?u:.3),this.pos[g+1]=e,this.pos[g+2]=n+(Math.random()-.5)*((h=r.spread)!=null?h:.3),this.vel[g]=Math.cos(x)*S,this.vel[g+1]=w*(.4+Math.random()*.9),this.vel[g+2]=Math.sin(x)*S;let M=r.rainbow?this._c.setHSL(Math.random(),.9,.6):o;this.col[g]=M.r,this.col[g+1]=M.g,this.col[g+2]=M.b,this.life[m]=this.maxLife[m]=((f=r.life)!=null?f:.6)*(.6+Math.random()*.8),this.s0[m]=((d=r.size)!=null?d:.35)*(.6+Math.random()*.8),this.size[m]=this.s0[m],this.grav[m]=(p=r.gravity)!=null?p:9,this.alpha[m]=1}}update(t){for(let e=0;e<this.n;e++){if(this.life[e]<=0){this.alpha[e]=0,this.size[e]=0;continue}this.life[e]-=t;let n=e*3;this.vel[n+1]-=this.grav[e]*t,this.pos[n]+=this.vel[n]*t,this.pos[n+1]+=this.vel[n+1]*t,this.pos[n+2]+=this.vel[n+2]*t;let s=Math.max(0,this.life[e]/this.maxLife[e]);this.alpha[e]=Math.min(1,s*1.6),this.size[e]=this.s0[e]*(.4+.6*s)}this.geo.setDrawRange(0,this.n),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,this.geo.attributes.size.needsUpdate=!0,this.geo.attributes.alpha.needsUpdate=!0}setScale(t){this.mat.uniforms.scale.value=t*.9}},qo=class{constructor(t,e=350){this.kind=t,this.n=e;let n=new Float32Array(e*3);this.seed=new Float32Array(e*3);for(let o=0;o<e*3;o++)this.seed[o]=Math.random();let s=new Pe;s.setAttribute("position",new Fe(n,3));let r={fun:"#fff6a8",jungle:"#fffbb0",quest:"#fff6c0"};this.mat=new cr({color:r[t]||"#fff",size:t==="frost"?.28:.22,transparent:!0,opacity:.85,depthWrite:!1,map:G1(),blending:t==="neon"||t==="canyon"?Ai:Ki}),this.points=new hr(s,this.mat),this.points.frustumCulled=!1,this.pos=n}update(t,e){let r=this.kind,o=this.pos,a=this.seed;for(let l=0;l<this.n;l++){let c=l*3,u=a[c]*70,h=a[c+1]*36,f=a[c+2]*70;r==="frost"?(h=36-(t*(2+a[c]*2)+a[c+1]*36)%36,u+=Math.sin(t*.7+l)*1.2):r==="canyon"?(h=(t*(1.5+a[c]*2)+a[c+1]*36)%36,u+=Math.sin(t*.9+l)*.8):(h+=Math.sin(t*.6+l)*.8,u+=Math.cos(t*.4+l*1.3)*.8),o[c]=e.x+((u-e.x)%70+70)%70-70/2,o[c+1]=e.y-36/2+h,o[c+2]=e.z+((f-e.z)%70+70)%70-70/2}this.points.geometry.attributes.position.needsUpdate=!0}};function V1(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function Lp(i,t,e,n){let s=Zo[t],r=new Dt;r.name="scenery";let o=V1(t.length*9973+17),a=new Ii,l=new Ii,c=e.length,u=-c-40,h=0,f=82,d=[],p=(M,v)=>(o()<.5?-1:1)*(M+f+o()*(v-M)),y=M=>M[Math.floor(o()*M.length)],m=(M,v=16,T=10)=>new xe(M,v,T),x=(M,v,T,_=14)=>new Rt(M,v,T,_),S=(M,v,T=14)=>new Le(M,v,T);if(t==="fun"){for(let M=0;M<46;M++){let v=70-o()*(c+200),T=p(26,140),_=1+o()*1.8,b=o(),A=h-1;if(b<.4){let I=y(["#ff4d6d","#3ec6e0","#ffd23f","#8b5cf6"]);a.add(x(6*_,6*_,5*_,16),T,A+2.5*_,v,I),a.add(S(6.8*_,5*_,16),T,A+7.5*_,v,"#ffffff"),a.add(S(1.1*_,3*_,8),T,A+11*_,v,I),a.add(x(.12*_,.12*_,4*_,4),T,A+14*_,v,"#ffffff")}else if(b<.7){for(let I=0;I<8;I++)a.add(x(2.2*_,2.2*_,2.4*_,12),T,A+(1.2+I*2.4)*_,v,I%2?"#ffffff":"#ff4d6d");a.add(S(3*_,4*_,12),T,A+21*_,v,"#ffd23f")}else a.add(x(.3*_,.4*_,9*_,6),T,A+4.5*_,v,"#5b2a86"),l.add(m(1.1*_,10,8),T,A+9.6*_,v,y(["#ffe27a","#ff9ccb","#9cf0ff"]))}[[-120,-c*.25],[140,-c*.62],[-130,-c*.9]].forEach(([M,v],T)=>{let _=new Dt;_.position.set(M,h+34,v),_.rotation.y=T%2?.5:-.5;let b=new tt(new We(30,.9,8,48),new se({color:"#ffffff",roughness:.4}));_.add(b);let A=new se({color:"#ff4d6d"});for(let N=0;N<8;N++){let C=new tt(x(.35,.35,60,5),A);C.rotation.z=N*Math.PI/8,_.add(C)}let I=[];for(let N=0;N<12;N++){let C=N/12*Math.PI*2,P=new tt(new ge(4.4,3.4,3.4),new se({color:y(["#ffd23f","#3ec6e0","#ff4d6d","#8bd450"]),roughness:.35}));P.position.set(Math.cos(C)*30,Math.sin(C)*30-2,0),_.add(P),I.push([P,C])}let D=new se({color:"#5b2a86"});for(let N of[-1,1]){let C=new tt(x(1.2,1.6,44,6),D);C.position.set(N*11,-20,0),C.rotation.z=N*-.28,_.add(C)}r.add(_),d.push(N=>{let C=N*.12*(T%2?-1:1);b.rotation.z=C,_.children.forEach(P=>{var F,O;P.geometry&&P.geometry.type==="CylinderGeometry"&&P.position.x===0&&P.position.y===0&&(P.rotation.z=((O=(F=P.userData).b)!=null?O:F.b=P.rotation.z)+C)}),I.forEach(([P,F])=>P.position.set(Math.cos(F+C)*30,Math.sin(F+C)*30-2,0))})});for(let M=0;M<26;M++){let v=new Dt,T=y(["#ff5fa8","#ffd84d","#4dd0ff","#9b7bff","#5ee89a"]),_=new tt(m(1.6,16,12),new se({color:T,roughness:.25}));_.scale.y=1.2;let b=new tt(x(.03,.03,4,4),new ye({color:"#ffffff"}));b.position.y=-3,v.add(_,b),v.position.set(p(14,80),8+o()*34,40-o()*(c+120)),v.userData.ph=o()*6,r.add(v),d.push(A=>{v.position.y+=Math.sin(A*.8+v.userData.ph)*.004,v.rotation.z=Math.sin(A*.6+v.userData.ph)*.08})}}else if(t==="jungle"){for(let M=0;M<90;M++){let v=o()*Math.PI*2,T=120+o()*90,_=150+o()*90,b=Math.cos(v)*T,A=-108+Math.sin(v)*_,I=1.4+o()*2.4;a.add(x(.7*I,1*I,9*I,6),b,4.5*I,A,"#6b4423"),a.add(m(4.4*I,8,6),b,11*I,A,y(["#2e9b3f","#3fb14c","#27863a"]))}for(let M=0;M<16;M++){let v=M/16*Math.PI*2+o()*.3,T=Math.cos(v)*(260+o()*60),_=-108+Math.sin(v)*(300+o()*60),b=1+o()*1.4;a.add(S(40*b,70*b,7),T,30*b,_,y(["#5f9a7a","#6aa88a","#4f8a6c"])),a.add(S(14*b,20*b,7),T,66*b,_,"#ffffff")}for(let M=0;M<26;M++){let v=new Dt,T=(o()-.5)*520,_=-108+(o()-.5)*520,b=85+o()*50,A=3+Math.floor(o()*3);for(let I=0;I<A;I++){let D=new tt(m(7+o()*6,10,8),new ye({color:"#ffffff",transparent:!0,opacity:.9,fog:!1}));D.position.set(I*9-A*4,o()*3,o()*5),D.scale.y=.55,v.add(D)}v.position.set(T,b,_),v.userData.ph=o()*6,r.add(v),d.push(I=>{v.position.x+=.012*(1+v.userData.ph%1),v.position.x>300&&(v.position.x=-300)})}}else if(t==="quest")for(let M=0;M<40;M++){let v=new Dt,T=(o()-.5)*420,_=40-o()*640,b=70+o()*50,A=3+Math.floor(o()*3);for(let I=0;I<A;I++){let D=new tt(m(6+o()*6,10,8),new ye({color:"#ffffff",transparent:!0,opacity:.9,fog:!1}));D.position.set(I*8-A*4,o()*3,o()*5),D.scale.y=.55,v.add(D)}v.position.set(T,b,_),v.userData.ph=o()*6,r.add(v),d.push(I=>{v.position.x+=.012*(1+v.userData.ph%1),v.position.x>260&&(v.position.x=-260)})}let w=a.build(new se({vertexColors:!0,roughness:.55}));w&&(w.castShadow=!1,w.receiveShadow=!1,r.add(w));let g=l.build(new ye({vertexColors:!0,toneMapped:!1}));if(g&&r.add(g),t!=="jungle"&&t!=="quest"&&t!=="arena"){let M=new Dt;M.name="brand",r.add(M);let v=Mc("HARIS","MADE THIS GAME"),T=e.finishPlat,_=I=>new se({color:I,roughness:.4}),b=(I,D,N,C,P)=>{let F=new Dt;F.position.set(0,D,I);let O=_("#2b1c6b");for(let $ of[-1,1]){let Z=new tt(new ge(1.2,9,1.2),O);Z.position.set($*N/2,4.5,0),Z.castShadow=!0,F.add(Z)}let j=new tt(new Xe(N,N/4),new ye({map:k1(C,P),toneMapped:!1,side:$e}));j.position.set(0,8.6,.05),F.add(j);let V=new tt(new ge(N+1.2,.6,1.2),O);V.position.set(0,10.4,0),F.add(V),M.add(F)};b(e.startArch,0,20,"START","#22c55e"),b(e.finishZ+.01,T.top,19,"FINISH","#ef233c");let A=new tt(new Xe(30,15),new ye({map:v,transparent:!0,toneMapped:!1,depthWrite:!1,fog:!1}));A.position.set(0,T.top+21,e.finishZ-.5),M.add(A),d.push(I=>{A.position.y=T.top+21+Math.sin(I*1.2)*.4})}return i.add(r),{group:r,update(M,v){for(let T of d)T(M);r.userData.stars&&r.userData.stars.position.copy(v)},dispose(){i.remove(r),r.traverse(M=>{M.geometry&&M.geometry.dispose(),M.material&&(Array.isArray(M.material)?M.material:[M.material]).forEach(T=>{T.map&&T.map.dispose(),T.dispose()})})}}}var ae=null,As=null,Cr=null,os=null,bc=null,Dp=!1;var Sc=null,rs=null;function Di(){if(ae){ae.state==="suspended"&&ae.resume();return}let i=window.AudioContext||window.webkitAudioContext;if(!i)return;ae=new i,As=ae.createGain(),As.gain.value=Dp?0:.9,As.connect(ae.destination),Cr=ae.createGain(),Cr.gain.value=.7,Cr.connect(As),os=ae.createGain(),os.gain.value=.22,os.connect(As);let t=ae.sampleRate;bc=ae.createBuffer(1,t,ae.sampleRate);let e=bc.getChannelData(0);for(let n=0;n<t;n++)e[n]=Math.random()*2-1}function Np(i){Dp=i,As&&As.gain.setTargetAtTime(i?0:.9,ae.currentTime,.05)}function ie(i,t,e,n,s=.3,r=0,o=Cr){if(!ae)return;let a=ae.currentTime+r,l=ae.createOscillator(),c=ae.createGain();l.type=i,l.frequency.setValueAtTime(t,a),e!==t&&l.frequency.exponentialRampToValueAtTime(Math.max(20,e),a+n),c.gain.setValueAtTime(1e-4,a),c.gain.exponentialRampToValueAtTime(s,a+.012),c.gain.exponentialRampToValueAtTime(1e-4,a+n),l.connect(c),c.connect(o),l.start(a),l.stop(a+n+.05)}function zn(i,t,e,n,s,r=0,o=1){if(!ae)return;let a=ae.currentTime+r,l=ae.createBufferSource();l.buffer=bc,l.loop=!0;let c=ae.createBiquadFilter();c.type=e,c.Q.value=o,c.frequency.setValueAtTime(n,a),c.frequency.exponentialRampToValueAtTime(Math.max(30,s),a+i);let u=ae.createGain();u.gain.setValueAtTime(1e-4,a),u.gain.exponentialRampToValueAtTime(t,a+.015),u.gain.exponentialRampToValueAtTime(1e-4,a+i),l.connect(c),c.connect(u),u.connect(Cr),l.start(a),l.stop(a+i+.05)}var W1=(i,t)=>i+Math.random()*(t-i),Ct={click(){ie("triangle",520,780,.09,.25)},roar(i=1){ie("sawtooth",i?180:260,i?60:110,.5,.22),ie("square",i?120:200,50,.4,.12,.03),zn(.4,.14,"lowpass",800,200)},tame(){ie("triangle",520,780,.12,.25),ie("triangle",660,990,.12,.25,.1),ie("triangle",880,1320,.2,.25,.2)},select(){ie("triangle",660,990,.12,.28),ie("sine",990,1320,.1,.18,.06)},back(){ie("triangle",520,330,.12,.22)},jump(){ie("sine",280,640,.17,.3),ie("triangle",420,880,.12,.08,.02)},land(i=10){let t=Math.min(.5,.12+i*.012);ie("sine",140,60,.12,t),zn(.09,t*.7,"lowpass",900,200)},step(){zn(.045,.07,"bandpass",W1(500,800),300,0,2)},dive(){zn(.3,.22,"bandpass",500,2200,0,1.5),ie("sine",300,520,.2,.15)},bounce(){ie("sine",180,920,.3,.38),ie("triangle",360,1400,.22,.12,.03)},pickup(){ie("triangle",520,1040,.18,.3),ie("sine",780,1560,.24,.2,.07),ie("sine",1170,2340,.2,.12,.14)},swing(){zn(.24,.3,"bandpass",500,2800,0,1.2),ie("sine",380,160,.16,.08)},bonk(){ie("square",190,55,.2,.42),zn(.14,.45,"lowpass",3e3,300),ie("triangle",820,220,.22,.22,.02)},hit(){ie("sawtooth",420,70,.28,.28),zn(.18,.3,"lowpass",1800,150),ie("square",220,110,.15,.12,.04)},door(){ie("square",150,90,.07,.3),ie("square",110,70,.1,.25,.09),zn(.05,.18,"lowpass",2e3,400)},honk(){ie("square",392,392,.34,.2),ie("square",494,494,.34,.2)},honkBig(){ie("sawtooth",130,128,.95,.3),ie("square",164,162,.95,.24),ie("sawtooth",196,194,.95,.22),ie("square",262,258,.95,.14),zn(.12,.12,"lowpass",900,300)},skid(){zn(.18,.1,"bandpass",2600,1800,0,3)},vroom(){ie("sawtooth",70,160,.35,.2),ie("sawtooth",90,210,.3,.1,.05)},splash(){zn(.6,.45,"bandpass",1800,260,0,.8),zn(.3,.2,"highpass",2400,900,.05),ie("sine",220,80,.3,.12)},respawn(){zn(.4,.22,"highpass",400,4e3,0,.7),ie("sine",300,900,.3,.15)},checkpoint(){ie("sine",660,660,.14,.3),ie("sine",990,990,.25,.3,.1),ie("triangle",1320,1320,.3,.1,.18)},tick(){ie("sine",660,660,.14,.4)},go(){[523,659,784].forEach(i=>ie("square",i,i,.5,.14)),ie("sine",1046,1046,.6,.3)},join(){ie("triangle",520,520,.1,.25),ie("triangle",780,780,.14,.25,.09)},finish(){[523,659,784,1046,1318].forEach((i,t)=>{ie("square",i,i,.22,.14,t*.09),ie("triangle",i*2,i*2,.3,.08,t*.09)})},win(){[523,659,784,659,784,1046,1318].forEach((t,e)=>{ie("square",t,t,.24,.13,e*.12),ie("triangle",t/2,t/2,.3,.12,e*.12)})},lose(){[392,349,311,262].forEach((i,t)=>ie("triangle",i,i*.97,.3,.22,t*.17))},warn(){ie("square",880,880,.08,.14)}},X1={major:[0,2,4,7,9,12,14,16],minor:[0,3,5,7,10,12,15,17],lydian:[0,2,4,6,7,9,11,12],dorian:[0,2,3,5,7,9,10,12]},Su=[{bpm:112,root:65,scale:"lydian",prog:[0,5,3,4],lead:"triangle",bright:3400},{bpm:124,root:57,scale:"dorian",prog:[0,3,4,0],lead:"triangle",bright:3e3},{bpm:128,root:62,scale:"lydian",prog:[0,4,5,3],lead:"triangle",bright:3400},{bpm:132,root:64,scale:"major",prog:[0,4,3,4],lead:"triangle",bright:3400},{bpm:120,root:60,scale:"major",prog:[0,3,4,0],lead:"triangle",bright:3e3}],bu=i=>440*Math.pow(2,(i-69)/12);function Eu(i,t,e,n,s,r){let o=ae.createOscillator(),a=ae.createGain(),l=ae.createBiquadFilter();o.type=i,o.frequency.setValueAtTime(t,e),l.type="lowpass",l.frequency.value=r,a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(s,e+.01),a.gain.exponentialRampToValueAtTime(1e-4,e+n),o.connect(l),l.connect(a),a.connect(os),o.start(e),o.stop(e+n+.05)}function Y1(i,t){let e=ae.createBufferSource();e.buffer=bc;let n=ae.createBiquadFilter();n.type="highpass",n.frequency.value=7e3;let s=ae.createGain();s.gain.setValueAtTime(t,i),s.gain.exponentialRampToValueAtTime(1e-4,i+.05),e.connect(n),n.connect(s),s.connect(os),e.start(i),e.stop(i+.06)}function q1(i){let t=ae.createOscillator(),e=ae.createGain();t.frequency.setValueAtTime(150,i),t.frequency.exponentialRampToValueAtTime(40,i+.12),e.gain.setValueAtTime(.55,i),e.gain.exponentialRampToValueAtTime(1e-4,i+.16),t.connect(e),e.connect(os),t.start(i),t.stop(i+.2)}function Ir(i){if(wu(),!ae)return;let t=Su[i]||Su[Su.length-1],e=X1[t.scale],n=60/t.bpm/4,s=1234+i*77,r=()=>(s=s*1664525+1013904223>>>0,s/4294967296),o=[];for(let l=0;l<4;l++){let c=[];for(let u=0;u<16;u++)c.push(u%4===0||r()<.38?Math.floor(r()*6):-1);o.push(c)}rs={i:0,next:ae.currentTime+.1};let a=()=>{if(!(!ae||!rs))for(;rs.next<ae.currentTime+.18;){let l=rs.i,c=l%16,u=Math.floor(l/16)%4,h=t.prog[u]||0,f=rs.next,d=t.root+e[h%e.length]-12;c%4===0&&q1(f),c%2===0&&Y1(f,c%4===2?.1:.05),(c%4===0||c%8===6)&&Eu("triangle",bu(d-12),f,n*3.2,.4,600),c===0&&[0,2,4].forEach(y=>Eu("sine",bu(t.root+e[(h+y)%e.length]),f,n*15,.07,1400));let p=o[u][c];p>=0&&Eu(t.lead,bu(t.root+12+e[(p+h)%e.length]),f,n*1.8,.11,t.bright),rs.next+=n,rs.i++}};Sc=setInterval(a,40),a()}function wu(){Sc&&clearInterval(Sc),Sc=null,rs=null}function Ec(i){os&&os.gain.setTargetAtTime(i?.08:.22,ae.currentTime,.2)}var xi=null;function Up(){if(!ae||xi)return;let i=ae.createGain();i.gain.value=1e-4;let t=ae.createBiquadFilter();t.type="lowpass",t.frequency.value=500;let e=ae.createOscillator(),n=ae.createOscillator();e.type="sawtooth",n.type="square",e.frequency.value=60,n.frequency.value=30,e.connect(t),n.connect(t),t.connect(i),i.connect(Cr),e.start(),n.start(),xi={g:i,f:t,o1:e,o2:n}}function zp(i,t){if(!ae||!xi)return;let e=ae.currentTime,n=Math.max(0,Math.min(1,i)),s=52+n*150+(t?16:0);xi.o1.frequency.setTargetAtTime(s,e,.08),xi.o2.frequency.setTargetAtTime(s*.5,e,.08),xi.f.frequency.setTargetAtTime(380+n*900+(t?300:0),e,.1),xi.g.gain.setTargetAtTime(.05+n*.07+(t?.04:0),e,.1)}function Tu(){if(!xi)return;let i=xi;xi=null;try{i.g.gain.setTargetAtTime(1e-4,ae.currentTime,.05),setTimeout(()=>{try{i.o1.stop(),i.o2.stop()}catch{}},300)}catch{}}var wc=class{constructor(){this.ws=null,this.h={},this.offset=0,this.rtt=0,this.best=1/0,this.connected=!1,this.id=null,this.samples=0}now(){return Date.now()+this.offset}stamp(){let t=Math.round(Date.now()+this.offset);return this.lastStamp=Math.max(t,(this.lastStamp||0)+1),this.lastStamp}on(t,e){this.h[t]=e}connect(){return new Promise((t,e)=>{if(this.connected)return t();let n=location.protocol==="https:"?"wss":"ws",s;try{s=new WebSocket(`${n}://${location.host}/ws`)}catch(o){return e(o)}this.ws=s;let r=setTimeout(()=>{try{s.close()}catch{}e(new Error("timeout"))},8e3);s.onopen=()=>{clearTimeout(r),this.connected=!0;for(let o=0;o<8;o++)setTimeout(()=>this.ping(),o*140);this.pinger=setInterval(()=>this.ping(),2e3),t()},s.onmessage=o=>{let a;try{a=JSON.parse(o.data)}catch{return}if(a.t==="pong")return this.onPong(a);a.t==="joined"&&(this.id=a.id);let l=this.h[a.t];l&&l(a)},s.onclose=()=>{clearTimeout(r);let o=this.connected;this.connected=!1,clearInterval(this.pinger),o&&this.h.close?this.h.close():e(new Error("closed"))},s.onerror=()=>{}})}ping(){this.send({t:"ping",c:Date.now()})}onPong(t){let e=Date.now(),n=e-t.c;this.rtt=this.rtt?this.rtt*.7+n*.3:n;let s=t.s+n/2-e;(n<=this.best*1.25||this.samples<3)&&(this.offset=this.samples<8?n<=this.best?s:this.offset:this.offset*.8+s*.2,this.best=Math.min(this.best,n)),this.samples++,this.samples%10===0&&(this.best=this.best*1.3+2)}send(t){this.ws&&this.ws.readyState===1&&this.ws.send(JSON.stringify(t))}close(){try{this.ws&&this.ws.close()}catch{}this.connected=!1,clearInterval(this.pinger)}};var Op=`
float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f); return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
`;function Bp(i){let t=i.x1-i.x0,e=i.z1-i.z0,n=new tn({transparent:!0,depthWrite:!1,uniforms:{time:{value:0},rect:{value:new Oe(i.x0,i.z0,i.x1,i.z1)},depth:{value:i.surf-i.bottom},sunDir:{value:new z(-.35,.8,-.5).normalize()},skyTop:{value:new Ot("#4aa8ff")},skyHor:{value:new Ot("#e8fbff")},fogC:{value:new Ot("#d9f4ff")},fogN:{value:120},fogF:{value:640},ag:{value:[new z(0,0,0),new z(0,0,0),new z(0,0,0),new z(0,0,0)]}},vertexShader:`uniform float time; varying vec3 vW;
      void main(){ vec4 w = modelMatrix*vec4(position,1.0); w.y += sin(w.x*1.3+time*1.6)*0.018 + sin(w.z*1.7-time*1.3)*0.015; vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }`,fragmentShader:`uniform float time; uniform vec4 rect; uniform float depth; uniform vec3 sunDir; uniform vec3 skyTop; uniform vec3 skyHor; uniform vec3 fogC; uniform float fogN; uniform float fogF; uniform vec3 ag[4]; varying vec3 vW;
      ${Op}
      float hgt(vec2 p){
        float h = vn(p*0.9+vec2(time*0.35,time*0.2))*0.5 + vn(p*2.1-vec2(time*0.5,time*0.3))*0.3 + vn(p*4.7+vec2(time*0.8,-time*0.6))*0.16;
        h += sin(p.x*2.2+time*1.7)*0.05 + sin(p.y*2.7-time*1.4)*0.05;
        for(int i=0;i<4;i++){ if(ag[i].z>0.0){ float r = length(p-ag[i].xy); h += sin(r*9.0-time*7.0)*exp(-r*1.1)*0.22*ag[i].z; } }
        return h;
      }
      void main(){
        vec2 p = vW.xz; float e = 0.06;
        float h0 = hgt(p), hx = hgt(p+vec2(e,0.0)), hz = hgt(p+vec2(0.0,e));
        vec3 n = normalize(vec3(-(hx-h0)/e*0.22, 1.0, -(hz-h0)/e*0.22));
        vec3 V = normalize(cameraPosition - vW);
        float F = 0.03 + 0.97*pow(1.0 - max(dot(n,V),0.0), 4.0);
        vec3 R = reflect(-V, n);
        vec3 sky = mix(skyHor, skyTop, smoothstep(0.0, 0.8, R.y));
        float glint = pow(max(dot(R, normalize(sunDir)), 0.0), 220.0) * 2.4 + pow(max(dot(R, normalize(sunDir)), 0.0), 18.0) * 0.12;
        // refracted pool tiles
        vec2 q = p + n.xz*0.55*depth*0.35;
        vec2 g = abs(fract(q*0.5)-0.5); float tile = smoothstep(0.46,0.5,max(g.x,g.y));
        vec3 deep = vec3(0.02,0.42,0.62), shallow = vec3(0.14,0.82,0.92);
        float eg = min(min(p.x-rect.x, rect.z-p.x), min(p.y-rect.y, rect.w-p.y));      // distance to the pool edge
        float dk = clamp(eg/10.0, 0.0, 1.0);
        vec3 body = mix(shallow, deep, dk*0.85);
        body = mix(body, vec3(0.75,0.97,1.0), tile*0.28);
        // caustic shimmer
        float c = pow(abs(sin((vn(q*1.3+time*0.4)+vn(q*2.9-time*0.3))*5.0)), 6.0); body += c*0.22;
        vec3 col = mix(body, sky, F) + glint;
        float foam = smoothstep(0.75, 0.0, eg) * (0.55 + 0.45*vn(p*3.0+time*0.7));
        foam += smoothstep(0.35,0.0,eg)*0.6;
        for(int i=0;i<4;i++){ if(ag[i].z>0.0){ float r = length(p-ag[i].xy); foam += smoothstep(1.3,0.4,r)*ag[i].z*0.35*vn(p*6.0+time); } }
        col = mix(col, vec3(1.0), clamp(foam,0.0,1.0)*0.85);
        float f = smoothstep(fogN, fogF, length(vW - cameraPosition));
        float alpha = clamp(mix(0.58, 0.97, F) + foam*0.4, 0.0, 1.0);
        gl_FragColor = vec4(mix(col, fogC, f), alpha);
      }`}),s=new Xe(t,e,40,40),r=new tt(s,n);return r.rotation.x=-Math.PI/2,r.position.set((i.x0+i.x1)/2,i.surf,(i.z0+i.z1)/2),r.renderOrder=3,r.frustumCulled=!1,r.userData.pool=i,r}function Hp(i){let t=i.x1-i.x0,e=i.z1-i.z0,n=new tn({transparent:!0,depthWrite:!1,blending:Ai,uniforms:{time:{value:0}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform float time; varying vec3 vW; ${Op}
      void main(){
        vec2 p = vW.xz*0.55; float t = time*0.5, c = 0.0;
        for(int i=0;i<3;i++){ p += vec2(sin(p.y*1.7+t), cos(p.x*1.4-t))*0.55; c += abs(sin(p.x*2.2+p.y*1.8)); }
        c = pow(1.0 - c/3.0, 5.0) * 1.6;
        gl_FragColor = vec4(vec3(0.55,0.95,1.0)*c*0.55, 1.0);
      }`}),s=new tt(new Xe(t,e),n);return s.rotation.x=-Math.PI/2,s.position.set((i.x0+i.x1)/2,i.bottom+.03,(i.z0+i.z1)/2),s.renderOrder=2,s.frustumCulled=!1,s}var si=[{id:0,name:"Sprinter",color:"#0b6b3a",max:27,acc:17,grip:6.5,turn:2.2,hw:.95,hl:2.1},{id:1,name:"Buggy",color:"#2f7bff",max:23,acc:15,grip:8.5,turn:2.5,hw:1.05,hl:1.9},{id:2,name:"Pickup",color:"#ffb21e",max:22,acc:14,grip:7,turn:2,hw:1.05,hl:2.3},{id:3,name:"Bubble",color:"#a855f7",max:24,acc:16,grip:7.5,turn:2.4,hw:.95,hl:1.8},...[4,5,6,7].map(i=>({id:i,name:"Racer",color:"#e0001f",max:42,acc:36,grip:9.5,turn:2.15,hw:1.05,hl:2.35,racer:!0}))];function Gp(i,t,e,n){return{id:i,x:t,z:e,y:0,pitch:0,yaw:n,vx:0,vz:0,speed:0,steer:0,drift:0,driver:-1,bump:0,boost:0,parked:!0,spin:0,crash:0,acc:0}}function kp(i,t,e,n=1.5,s){let r=1e9,o=t,a=e,l=1,c=1,u=0,h=0,f=0,d=s!==void 0;for(let y of i.segs){let m=y.bx-y.ax,x=y.bz-y.az,S=m*m+x*x,w=S>0?((t-y.ax)*m+(e-y.az)*x)/S:0;w=w<0?0:w>1?1:w;let g=y.y0||0,M=y.y1===void 0?g:y.y1,v=g+(M-g)*w;if(d&&Math.abs(v-s)>5)continue;let T=y.ax+m*w,_=y.az+x*w,b=Math.hypot(t-T,e-_),A=y.hw-n;b-A<r&&(r=b-A,o=T,a=_,l=A,c=b,u=v,M!==g&&S>0?(h=(M-g)*m/S,f=(M-g)*x/S):h=f=0)}for(let y of i.plazas||[]){let m=y.y||0;if(d&&Math.abs(m-s)>5)continue;let x=Math.hypot(t-y.x,e-y.z),S=y.r-n;x-S<r&&(r=x-S,o=y.x,a=y.z,l=S,c=x,u=m,h=f=0)}if(r>1e8)return{d:-1,px:t,pz:e,nx:0,nz:1,lim:1,h:d?s:0,gx:0,gz:0};let p=c||1e-6;return{d:r,px:o,pz:a,nx:(t-o)/p,nz:(e-a)/p,lim:l,h:u,gx:h,gz:f}}function Vp(i,t,e,n,s,r=0){let o=si[i.id],a=Math.sin(i.yaw),l=Math.cos(i.yaw),c=-l,u=a,h=i.vx*a+i.vz*l,f=i.vx*c+i.vz*u,d=o.max*(i.boost>0?1.3:1);i.boost>0&&(i.boost-=t),e.gas>.01?h+=(h<0?38:o.acc*(1-Math.max(0,h)/(d+2))+1)*e.gas*t:e.gas<-.01?h+=(h>.5?-34:-11)*-e.gas*t:h-=Math.sign(h)*Math.min(Math.abs(h),4.5*t),e.hb&&(h-=Math.sign(h)*Math.min(Math.abs(h),9*t));{let v=(i.gx||0)*a+(i.gz||0)*l;v&&(h-=9.8*.55*(v/Math.sqrt(1+v*v))*t)}h=Math.max(-9,Math.min(d+(i.boost>0?3:0),h)),i.steer+=(e.steer-i.steer)*Math.min(1,t*9);let p=Math.abs(h),y=Math.min(1,p/5)*(1-.38*Math.min(1,p/d));i.yaw-=i.steer*o.turn*y*Math.sign(h||1)*(e.hb?1.35:1)*t;let m=(e.hb?1.6:o.grip)*(i.slick>0?.22:1);f*=Math.exp(-m*t),i.drift=Math.min(1,Math.abs(f)/5);let x=Math.sin(i.yaw),S=Math.cos(i.yaw),w=-S,g=x;i.vx=x*h+w*f,i.vz=S*h+g*f;for(let v of n.boosts||[])Math.abs(i.x-v.x)<v.r&&Math.abs(i.z-v.z)<v.r&&Math.abs(i.y-(v.y||0))<3&&(i.boost=1.4,h<d&&(i.vx+=x*40*t,i.vz+=S*40*t));i.x+=i.vx*t,i.z+=i.vz*t;let M="";{let v=kp(n,i.x,i.z,1.5,i.y);i.gx=v.gx,i.gz=v.gz;{let T=i.y;i.y+=(v.h-i.y)*Math.min(1,t*14);let _=Math.hypot(i.vx,i.vz)*t;i.pitch+=((_>.001?Math.atan2(i.y-T,_):0)*(i.speed>=0?1:-1)-i.pitch)*Math.min(1,t*10)}for(let T of[1.25,-1.25]){let _=kp(n,i.x+x*T,i.z+S*T,1.6,i.y);if(_.d<=0)continue;i.x-=_.nx*_.d,i.z-=_.nz*_.d;let b=i.vx*_.nx+i.vz*_.nz;if(b>0){let A=-1.35*b*_.nx,I=-(1+.35)*b*_.nz;i.vx+=A,i.vz+=I,i.vx*=.95,i.vz*=.95,i.spin=Math.max(-3,Math.min(3,(i.spin||0)+(S*T*A-x*T*I)*.1)),b>5&&(M="bump"),i.bump=Math.max(i.bump,b)}}}for(let v of s||[]){if((i.x-v.x)**2+(i.z-v.z)**2>36||Math.abs((v.y||0)-i.y)>4)continue;let T=Math.sin(v.yaw),_=Math.cos(v.yaw),b=null;for(let N of[1.05,-1.05])for(let C of[1.05,-1.05]){let P=i.x+x*N,F=i.z+S*N,O=v.x+T*C,j=v.z+_*C,V=P-O,$=F-j,Z=Math.hypot(V,$),at=2.3-Z;at>0&&(!b||at>b.pen)&&(b={pen:at,nx:Z>1e-4?V/Z:x,nz:Z>1e-4?$/Z:S,rx:P-i.x,rz:F-i.z})}if(!b)continue;let A=v.driver===-1||v.parked,I=A?1:.6;i.x+=b.nx*b.pen*I,i.z+=b.nz*b.pen*I;let D=(i.vx-v.vx)*b.nx+(i.vz-v.vz)*b.nz;if(D<0){let N=1.55*-D*(A?1:.55),C=b.nx*N,P=b.nz*N;i.vx+=C,i.vz+=P,i.spin=Math.max(-3.2,Math.min(3.2,(i.spin||0)+(b.rz*C-b.rx*P)*.32)),i.vx*=.94,i.vz*=.94,-D>3.5&&(M=-D>7?"crash":"bump",i.crash=Math.max(i.crash||0,-D))}}if(n.dyn&&!n.free){let v=n.dyn(r);for(let T of v){if(Math.abs(T.y-i.y)>4||(i.x-T.x)**2+(i.z-T.z)**2>30)continue;let _=null;for(let A of[1.05,-1.05]){let I=i.x+x*A,D=i.z+S*A,N=I-T.x,C=D-T.z,P=Math.hypot(N,C),F=1.15+T.r-P;F>0&&(!_||F>_.pen)&&(_={pen:F,nx:P>1e-4?N/P:x,nz:P>1e-4?C/P:S,rx:I-i.x,rz:D-i.z})}if(!_)continue;i.x+=_.nx*_.pen,i.z+=_.nz*_.pen;let b=(i.vx-T.vx)*_.nx+(i.vz-T.vz)*_.nz;if(b<0){let A=1.5*-b,I=_.nx*A,D=_.nz*A;i.vx+=I,i.vz+=D,i.spin=Math.max(-3.4,Math.min(3.4,(i.spin||0)+(_.rz*I-_.rx*D)*.4)),i.vx*=.9,i.vz*=.9,-b>3.5&&(M=-b>7?"crash":"bump",i.crash=Math.max(i.crash||0,-b))}}}i.slick=0;for(let v of(n.free?[]:n.slicks)||[])Math.abs(v.y-i.y)<3&&(i.x-v.x)**2+(i.z-v.z)**2<v.r*v.r&&(i.slick=1);return i.spin&&(i.yaw+=i.spin*t,i.spin*=Math.exp(-3.6*t),Math.abs(i.spin)<.02&&(i.spin=0)),i.speed=i.vx*x+i.vz*S,M}var ne=(i,t,e,n=.12)=>new wr(i,t,e,3,Math.min(n,i/2-.01,t/2-.01,e/2-.01)),yn=(i,t={})=>{var e,n,s;return new se({color:i,roughness:(e=t.r)!=null?e:.35,metalness:(n=t.m)!=null?n:.25,emissive:t.e||0,emissiveIntensity:(s=t.ei)!=null?s:1})},Tc=()=>new se({color:"#9fd8ff",roughness:.05,metalness:.4,transparent:!0,opacity:.55});function Wp(i){let t=si[i],e=new Dt,n=yn("#1b1b22",{r:.8,m:0}),s=yn("#e8eaf2",{r:.25,m:.8}),r=yn("#23252e",{r:.6}),o=(M,v,T,_,b,A=0,I=0,D=0)=>{let N=new tt(M,v);return N.position.set(T,_,b),N.rotation.set(A,I,D),N.castShadow=!0,N.receiveShadow=!0,e.add(N),N},a=i===0?new se({map:du("pk"),roughness:.3,metalness:.15}):yn(t.color,{r:.28,m:.35}),l=yn("#ffffff",{r:.3,m:.1}),c=yn("#fff6c8",{e:"#fff1a8",ei:1.4}),u=yn("#ff3030",{e:"#ff1a1a",ei:1.2}),h=[],f=[],d=.46,p=1,y=1.35,m=-1.3,x={y:.55,z:-.15};if(i===0)d=.44,p=1.02,y=1.45,m=-1.35,x={y:.5,z:-.2},o(ne(1.9,.5,4.3,.22),a,0,.55,0),o(ne(1.7,.34,1.5,.2),a,0,.78,1.35,-.12),o(ne(1.7,.4,1,.2),a,0,.86,-1.6),o(ne(1.5,.5,.12,.05),Tc(),0,1.02,.78,-.55),o(ne(.12,.1,1.5,.04),r,.95,1.16,-1.82),o(ne(.12,.1,1.5,.04),r,-.95,1.16,-1.82),o(ne(2,.09,.45,.04),a,0,1.28,-2),o(ne(.1,.4,.3,.03),r,.7,1.08,-1.95),o(ne(.1,.4,.3,.03),r,-.7,1.08,-1.95),o(ne(.4,.2,.1,.04),c,.65,.68,2.12),o(ne(.4,.2,.1,.04),c,-.65,.68,2.12),o(ne(.45,.14,.1,.04),u,.65,.78,-2.17),o(ne(.45,.14,.1,.04),u,-.65,.78,-2.17);else if(i===1){d=.62,p=1.18,y=1.3,m=-1.25,x={y:.62,z:-.1},o(ne(1.7,.4,3.8,.16),a,0,.62,0),o(ne(1.5,.3,1.2,.14),a,0,.9,1.4),o(ne(1.3,.35,.9,.12),yn("#ffd23f",{r:.4}),0,.95,-1.35);for(let M of[-1,1])o(new Rt(.06,.06,1.7,8),r,M*.78,1.5,-.1,.12,0,0),o(new Rt(.06,.06,1.6,8),r,M*.78,1,.7,.9,0,0),o(new Rt(.06,.06,1.7,8),r,M*.78,1.5,-.1,Math.PI/2,0,0);o(new Rt(.06,.06,1.6,8),r,0,2,-.1,0,0,Math.PI/2),o(new xe(.2,12,8),c,.55,.98,2),o(new xe(.2,12,8),c,-.55,.98,2),o(ne(.4,.12,.1,.04),u,.5,.8,-1.95),o(ne(.4,.12,.1,.04),u,-.5,.8,-1.95)}else if(i===2){d=.55,p=1.1,y=1.55,m=-1.5,x={y:.78,z:.55},o(ne(2,.55,4.7,.2),a,0,.75,0),o(ne(1.9,.75,1.5,.18),a,0,1.28,.55),o(ne(1.5,.45,.1,.05),Tc(),0,1.55,1.3,-.35),o(ne(1.8,.1,1.9,.05),r,0,1.1,-1.35);for(let M of[-1,1])o(ne(.1,.5,1.9,.04),a,M*.97,1.35,-1.35);o(ne(1.8,.5,.1,.04),a,0,1.35,-2.28),o(ne(1.8,.1,.1,.04),yn("#c8ccd8",{m:.8,r:.2}),0,.75,2.4),o(ne(.1,.5,.1,.03),yn("#c8ccd8",{m:.8,r:.2}),.6,.85,2.38),o(ne(.1,.5,.1,.03),yn("#c8ccd8",{m:.8,r:.2}),-.6,.85,2.38),o(ne(.35,.22,.1,.04),c,.7,.98,2.36),o(ne(.35,.22,.1,.04),c,-.7,.98,2.36),o(ne(.3,.2,.1,.04),u,.8,1,-2.36),o(ne(.3,.2,.1,.04),u,-.8,1,-2.36)}else if(i>=4){d=.5,p=1.12,y=1.5,m=-1.5,x={y:.62,z:-.2};let M=yn("#e0001f",{r:.16,m:.55}),v=yn("#15161c",{r:.5,m:.2}),T=yn("#ffffff",{r:.25,m:.1}),_=yn("#ff7a1a",{e:"#ff5a00",ei:2}),b=new Xi;[[-2.4,.3],[-2.4,.84],[-1.7,1],[-.95,.96],[-.8,.66],[.5,.66],[.72,.78],[2.2,.56],[2.46,.44],[2.46,.3]].forEach(([N,C],P)=>P?b.lineTo(N,C):b.moveTo(N,C));let A=new Yi(b,{depth:1.7,bevelEnabled:!0,bevelSize:.1,bevelThickness:.1,bevelSegments:2,steps:1});A.rotateY(-Math.PI/2),A.translate(.85,0,0),o(A,M,0,0,0),o(ne(1.2,.04,1.3,.02),v,0,.7,-.1),o(ne(1,.32,.18,.06),M,0,.88,-1.05),o(ne(1.5,.42,.08,.03),Tc(),0,.98,.6,-.62);for(let N of[-1,1])o(ne(.12,.34,.1,.03),v,N*.76,.9,.62,-.62),o(ne(.42,.34,1.7,.14),M,N*1.03,.6,-1.6),o(ne(.3,.3,.9,.1),M,N*1,.55,1.5),o(ne(.1,.3,.8,.03),v,N*.98,.5,-.35),o(ne(.07,.62,.8,.02),v,N*1.12,1.52,-2.28),o(ne(.09,.62,.09,.02),v,N*.55,1.2,-2.15);o(ne(.46,.03,1.9,.01),T,0,.8,1.4,.07),o(ne(2.3,.1,.8,.03),M,0,1.52,-2.28),o(ne(2.3,.07,.34,.02),v,0,1.45,-2),o(ne(2.3,.08,.55,.03),v,0,.3,2.46),o(ne(1.9,.12,.3,.04),v,0,.3,-2.4);for(let N of[-1,1])o(ne(.42,.14,.1,.04),c,N*.62,.62,2.5),o(ne(.5,.12,.1,.04),u,N*.6,.86,-2.48),o(new Rt(.1,.12,.3,10),v,N*.42,.52,-2.5,Math.PI/2,0,0);let I=new tt(new Xe(2.1,4.6),new ye({color:"#27b6ff",transparent:!0,opacity:.55,blending:Ai,depthWrite:!1,toneMapped:!1}));I.rotation.x=-Math.PI/2,I.position.set(0,.12,0),e.add(I);let D=[];for(let N of[-1,1])for(let[C,P,F]of[[.17,1.3,"#ff6a00"],[.09,.8,"#ffe14a"]]){let O=new Le(C,P,8);O.rotateX(-Math.PI/2),O.translate(0,0,-P/2);let j=new tt(O,new ye({color:F,transparent:!0,opacity:.9,toneMapped:!1}));j.position.set(N*.42,.52,-2.62),e.add(j),D.push(j)}e.userData.flames=D}else{d=.42,p=.98,y=1.15,m=-1.1,x={y:.5,z:-.05},o(new xe(1.15,24,16),a,0,.95,-.05).scale.set(.9,.62,1.55),o(ne(1.6,.14,3.2,.06),l,0,.42,0);for(let v of[-1,1])o(new xe(.27,14,10),c,v*.62,.95,1.72),o(new xe(.2,12,8),u,v*.55,.85,-1.78),o(new Rt(.09,.09,.5,8),r,v*.42,1.55,1.1,.45,0,0);o(ne(1.5,.35,.1,.04),Tc(),0,1.22,.85,-.7),o(ne(.5,.05,2.3,.02),yn("#ff6bd5",{r:.4}),.15,1.52,-.75,0,0,.08)}let S=new Rt(d,d,.42,20),w=new Rt(d*.56,d*.56,.44,12);for(let[M,v,T]of[[1,y,1],[-1,y,1],[1,m,0],[-1,m,0]]){let _=new Dt;_.position.set(M*p,d,v),e.add(_);let b=new Dt;_.add(b);let A=new tt(S,n);A.rotation.z=Math.PI/2,A.castShadow=!0,b.add(A);let I=new tt(w,s);I.rotation.z=Math.PI/2,b.add(I),h.push(b),T&&f.push(_)}let g=new tt(new ms(2.6,20),new ye({color:0,transparent:!0,opacity:.22,depthWrite:!1}));return g.rotation.x=-Math.PI/2,g.position.y=.04,g.scale.set(.9,1.25,1),e.add(g),e.userData={wheels:h,pivots:f,seat:x,spec:t,flames:e.userData.flames},e}function Xp(i,t,e){let n=i.userData;for(let r of n.wheels)r.rotation.x+=t.speed/.5*e;for(let r of n.pivots)r.rotation.y=-t.steer*.5;i.rotation.z=No.clamp(-t.steer*Math.min(1,Math.abs(t.speed)/20)*.07,-.08,.08);let s=(t.speed-(t._ps===void 0?t.speed:t._ps))/Math.max(e,.001);if(t._ps=t.speed,t._sq=(t._sq||0)+(No.clamp(s,-30,30)*.0045-(t._sq||0))*Math.min(1,e*7),i.rotation.x=-(t.pitch||0)-t._sq,n.flames){let r=No.clamp(.2+Math.max(0,t.speed)/45+(t.boost>0?.9:0)+(t.driver!==-1?.15:0),.15,2)*(.85+Math.random()*.3);for(let o of n.flames)o.scale.set(1,1,r),o.visible=t.driver!==-1||t.boost>0}}var Z1={lion:3,leopard:2.7,elephant:5.3,horse:3.8,dino:5.6,coyote:2.7,boar:2.8,hyena:2.8,bear:4.6,gorilla:4.9},Ac=(i,t,e)=>i+(t-i)*e,$1=(i,t,e)=>{let n=(t-i)%(Math.PI*2);return n>Math.PI&&(n-=Math.PI*2),n<-Math.PI&&(n+=Math.PI*2),i+n*e},J1=new Rt(.07,.07,1,5),K1=new se({color:"#c9a063",roughness:.9}),j1=new z(0,1,0),Rc=class{constructor(t){this.r=t,this.multi=t.multi,this.quest=!!t.meta.quest,this.defs=this.quest?fp():fc,dc.defs=this.defs,this.L=this.quest?dp():pc(),this.list=rp(this.defs),this.mount=null,this.mountT=0,this.t=0,this.near=null,this.evAcc=[],this.items=this.list.map(e=>{let n=_p(e.kind);n.root.position.set(e.x,e.y,e.z),n.root.rotation.y=e.yaw,t.scene.add(n.root);let s={a:e,o:n,x:e.x,y:e.y,z:e.z,yaw:e.yaw,speed:0,tag:null,tagKey:"",ropes:[],px:e.x,pz:e.z,hitFx:0};if(e.kind==="dino")for(let r=0;r<mc.length;r++){let o=new tt(J1,K1);o.castShadow=!0,t.scene.add(o),s.ropes.push(o)}return s}),this.names=new Map(t.players.map(e=>[e.id,e.name]))}me(){return this.r.localId}petCount(){let t=0;for(let e of this.list)e.owner===this.me()&&t++;return t}update(t){let e=this.r,n=e.me.body,s=this.me();if(this.t+=t,this.mountT>0&&(this.mountT-=t),!this.multi&&e.levelTime>=0&&!e.over){let l=op(this.list,t,[{id:s,x:n.x,y:n.y,z:n.z,r:n.yaw,mounted:this.mount?1:0}],this.L);this.handle(l)}this.mount&&this.multi&&this.mountT<=0&&this.mount.rider!==s&&this.dismount(!0);for(let l of this.items){let c=l.a,u=En[c.kind],h=this.mount===c;if(h)l.x=n.x,l.y=n.y,l.z=n.z,l.yaw=n.yaw;else if(!this.multi)l.x=c.x,l.y=c.y,l.z=c.z,l.yaw=c.yaw;else{let y=1-Math.exp(-13*t),m=Math.hypot(c.x-l.x,c.z-l.z)>14;l.x=m?c.x:Ac(l.x,c.x,y),l.y=Ac(l.y,c.y,y),l.z=m?c.z:Ac(l.z,c.z,y),l.yaw=$1(l.yaw,c.yaw,1-Math.exp(-10*t))}let f=t>0?Math.hypot(l.x-l.px,l.z-l.pz)/t:0;l.speed=Ac(l.speed,Math.min(f,14),.25),l.px=l.x,l.pz=l.z;let d=l.o,p=d.root;p.position.set(l.x,l.y,l.z),p.rotation.y=l.yaw,p.visible=c.st!==ke.HIDDEN,c.st!==ke.HIDDEN&&(l.atk=c.st===ke.ATTACK?(l.atk||0)+t:0,vp(d,this.t,t,h?Math.min(14,Math.hypot(n.vx,n.vz)):l.speed,c.st,c.st===ke.ATTACK?Math.max(.02,1-l.atk/.5):0),this.updateTag(l,u),l.ropes.length&&this.updateRopes(l),c.st===ke.PET&&c.owner===s&&!h&&Math.random()<t*.35&&e.particles.emit(l.x,l.y+u.seat+.6,l.z,1,{color:"#ff5fa8",speed:.6,up:1.6,life:.9,size:.38}))}let r=null,o=7;if(!this.mount&&!e.over)for(let l of this.items){let c=l.a;if(c.owner!==s||c.rider)continue;let u=Math.hypot(c.x-n.x,c.z-n.z);u<o&&Math.abs(c.y-n.y)<3.5&&n.stun<=0&&(o=u,r=c)}this.near=r;let a=document.body.classList;!!r!==a.contains("near-car")&&a.toggle("near-car",!!r),!!this.mount!==a.contains("riding")&&a.toggle("riding",!!this.mount)}tagKey(t){return t.owner?t.owner===this.me()?"mine":"o"+t.owner:"w"+t.hp}updateTag(t,e){let n=t.a,s=this.tagKey(n);if(s!==t.tagKey){t.tag&&(t.o.root.remove(t.tag),t.tag.material.map.dispose(),t.tag.material.dispose());let r=n.owner===this.me(),o=n.owner?r?"\u2665 MY "+e.name:(this.names.get(n.owner)||"Pet")+"'s "+e.name:`${e.name}  ${n.hp}/${e.hp}`;t.tag=Rr(o,n.owner?r?"#4ade80":"#7cc7ff":"#ff6b3d"),t.tag.position.set(0,Z1[n.kind],0),t.o.root.add(t.tag),t.tagKey=s}this.r.tagScale(t.tag,t.o.root.position,1.15)}updateRopes(t){let e=t.a,n=e.kind==="dino"&&!e.owner;t.o.head.getWorldPosition(this._v||(this._v=new z));let r=this._v;t.ropes.forEach((o,a)=>{if(o.visible=n,!n)return;let l=mc[a],c=Te.sx+l[0],u=Te.sz+l[1],h=Te.summitY+2.3,f=r.x-c,d=r.y-.2-h,p=r.z-u,y=Math.hypot(f,d,p)||1;o.position.set(c+f/2,h+d/2-.15*Math.sin(y*.5),u+p/2),o.scale.set(1,y,1),o.quaternion.setFromUnitVectors(j1,new z(f/y,d/y,p/y))})}batHit(t){let e=Math.sin(t.yaw),n=Math.cos(t.yaw),s=this.me(),r=!1;if(this.mount)return!1;for(let o of this.items){let a=o.a,l=En[a.kind];if(a.owner||a.rider||a.st===ke.HIDDEN)continue;let c=a.x-t.x,u=a.z-t.z,h=Math.hypot(c,u);h>l.r+2.7||Math.abs(a.y-t.y)>3.5||h<.001||(c*e+u*n)/h<-.15||(r=!0,this.multi?this.r.sendNet({t:"ahit",id:a.id}):this.handle(ap(a,s,t.x,t.z)),Ct.bonk(),this.r.particles.emit(a.x,a.y+l.seat*.7,a.z,20,{color:"#ffd23f",speed:6,up:3,life:.5,size:.3}))}return r}handle(t){for(let e of t){let n=this.list[e.id],s=n&&En[n.kind];if(n)if(e.k==="hit"){let r=this.items[e.id];this.r.toast(`${s.name}  ${Math.max(0,e.hp)} hit${e.hp===1?"":"s"} left!`),r&&(r.tagKey=""),Ct.roar(s.big)}else if(e.k==="tame"){let r=e.pid===this.me();this.items[e.id].tagKey="",Ct.tame();let o=this.items[e.id];this.r.particles.emit(n.x,n.y+s.seat,n.z,36,{color:"#ff5fa8",speed:5,up:5,life:1.1,size:.5}),this.r.particles.emit(n.x,n.y+s.seat,n.z,20,{color:"#ffd23f",speed:6,up:6,life:.9,size:.35}),n.kind==="dino"?this.r.toast(r?"\u{1F996} DINOSAUR FREED! It is your pet - press RIDE!":`${this.names.get(e.pid)||"Someone"} freed the DINOSAUR!`):this.r.toast(r?`${s.name} is now YOUR PET!  ${Q1()}`:`${this.names.get(e.pid)||"Someone"} tamed the ${s.name}!`)}else e.k==="bite"&&(e.pid===this.me()&&this.r.onAnimalBite(e),Ct.roar(En[n.kind].big))}}onNet(t){for(let e of t.a){let n=this.list[e[0]];if(!n)continue;let s=n.owner;n.x=e[1],n.y=e[2],n.z=e[3],n.yaw=e[4],n.st=e[5],n.owner=e[6],n.rider=e[7],n.hp=e[8],s!==n.owner||this.items[n.id].tagKey===""?this.items[n.id].tagKey="":this.tagKey(n)!==this.items[n.id].tagKey&&(this.items[n.id].tagKey="")}}onEvent(t){this.handle([t])}setNames(t){for(let e of t)this.names.set(e.id,e.name)}speedK(){return this.mount?En[this.mount.kind].ride:1}flagBits(){return this.mount?8192|this.mount.id<<14:0}seatLocal(t){this.mount&&(t.position.y+=En[this.mount.kind].seat,t.scale.setScalar(.9))}camLift(){return this.mount?En[this.mount.kind].seat:0}toggleMount(){let t=this.r,e=t.me.body,n=this.me();if(t.over||t.levelTime<0||t.menuOpen)return;if(this.mount)return this.dismount(!1);let s=this.near;if(!s){t.toast("Beat an animal with the BAT to tame it first!");return}this.mount=s,s.rider=n,this.mountT=1.5,e.x=s.x,e.z=s.z,e.y=Math.max(e.y,s.y),e.vx=e.vz=0,e.vy=0,this.multi&&t.sendNet({t:"aride",id:s.id,on:1}),Ct.pickup(),t.toast(`Riding the ${En[s.kind].name}!  `+("ontouchstart"in window?"tap RIDE again to get off":"C to get off \u2022 SPACE to jump"))}dismount(t){let e=this.r,n=e.me.body,s=this.mount;s&&(this.mount=null,s.rider=0,this.multi&&!t&&e.sendNet({t:"aride",id:s.id,on:0}),n.x+=Math.cos(n.yaw)*2.4,n.z-=Math.sin(n.yaw)*2.4,n.vy=4,n.grounded=!1,n.hitCd=.3,e.me.model.group.scale.setScalar(1),Ct.pickup())}dispose(){for(let e of this.items){this.r.scene.remove(e.o.root);for(let n of e.ropes)this.r.scene.remove(n)}let t=document.body.classList;t.remove("riding"),t.remove("near-car")}},Q1=()=>"ontouchstart"in window?"Tap RIDE to hop on!":"Press C near it to RIDE!";var dt=i=>document.getElementById(i),Gn=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches||(typeof navigator!="undefined"&&navigator.maxTouchPoints||0)>0,Je={x:0,y:0,jump:!1},_n=(i,t,e)=>i<t?t:i>e?e:i,Rs=(i,t,e)=>i+(t-i)*e,Du=(i,t,e)=>{let n=(t-i)%(Math.PI*2);return n>Math.PI&&(n-=Math.PI*2),n<-Math.PI&&(n+=Math.PI*2),i+n*e},Cc=i=>{let t=Math.floor(i/60),e=i-t*60;return`${t}:${e<10?"0":""}${e.toFixed(2)}`},Au=i=>i===1?"1st":i===2?"2nd":i===3?"3rd":i+"th",tv=["\u{1F947}","\u{1F948}","\u{1F949}"],as=dt("c"),Rn;try{Rn=new Oo({canvas:as,antialias:!0,powerPreference:"high-performance"})}catch(i){throw document.querySelector("#loader p").textContent="WebGL is not available in this browser. Please use a recent Chrome / Edge / Firefox.",i}Rn.outputColorSpace=Ne;Rn.toneMapping=gr;Rn.toneMappingExposure=1.05;Rn.shadowMap.enabled=!0;Rn.shadowMap.type=pl;var Pr=Math.min(window.devicePixelRatio||1,Gn?1.5:2),le={dpr:Gn?Math.min(Pr,1):Math.min(Pr,1.5),t:0,frames:0,good:0,shadows:!0,warm:3};function Cs(){en&&(Rn.setPixelRatio(le.dpr),Rn.setSize(window.innerWidth,window.innerHeight,!1),en.camera.aspect=window.innerWidth/window.innerHeight,en.camera.updateProjectionMatrix(),X&&(X.camera.aspect=window.innerWidth/window.innerHeight,X.camera.updateProjectionMatrix(),X.particles.setScale(Rn.domElement.height)),en.particles.setScale(Rn.domElement.height))}function ev(i){if(le.low)return;if(le.warm>0){le.warm-=i;return}if(le.t+=i,le.frames++,le.t<1.2)return;let t=le.frames/le.t;le.t=0,le.frames=0,t<40?(le.good=0,le.dpr>.7?(le.dpr=Math.max(.7,le.dpr-.2),Cs()):le.shadows&&t<30&&(le.shadows=!1,X&&X.setShadows(!1))):t>58?++le.good>=3&&le.dpr<Math.min(Pr,1.75)&&(le.dpr=Math.min(Math.min(Pr,1.75),le.dpr+.1),le.good=0,Cs()):le.good=0}try{let i=localStorage.getItem("ph_low");le.low=i==="1",i===null&&Gn&&((navigator.hardwareConcurrency||4)<=2||(navigator.deviceMemory||4)<=2)&&(le.low=!0)}catch{le.low=!1}le.low&&(le.dpr=.75,le.shadows=!1);function nv(){le.low?(le.dpr=.75,le.shadows=!1):(le.dpr=Gn?Math.min(Pr,1):Math.min(Pr,1.5),le.shadows=!0,le.warm=3),X&&X.setShadows(le.shadows),Cs()}var iv=new bs(Rn),$p=iv.fromScene(new Bo,.04).texture,mt={screen:"title",mode:"single",name:localStorage.getItem("ph_name")||"",char:+(localStorage.getItem("ph_char")||0),level:0,net:null,room:null,myId:null,pendingJoin:null,muted:!1},X=null,en=null,Cu=[],Jp=i=>+(localStorage.getItem("ph_best_"+i)||0),Iu=class{constructor(){let t=Zo.fun;this.scene=new wi,this.scene.fog=new sr(t.fog,70,420),this.scene.environment=$p,this.scene.environmentIntensity=.7,this.camera=new nn(42,1,.1,1500),this.sky=vu(t),this.scene.add(this.sky),this.water=Mu(t,-3),this.scene.add(this.water),this.scene.add(new xs(t.hemiSky,t.hemiGround,1));let e=new ys(t.sun,2.4);e.position.set(-10,18,14),e.castShadow=!0,e.shadow.mapSize.set(1024,1024);let n=e.shadow.camera;n.left=-12,n.right=12,n.top=12,n.bottom=-12,n.near=1,n.far=60,e.shadow.bias=-4e-4,e.shadow.normalBias=.03,this.scene.add(e),this.sun=e;let s=h=>new se({color:h,roughness:.35}),r=new tt(new Rt(15,14,2,48),s("#ff9ccf"));r.position.y=-1,r.receiveShadow=!0,this.scene.add(r);let o=new tt(new Rt(13,13,.1,48),s("#fff3fb"));o.position.y=.02,o.receiveShadow=!0,this.scene.add(o),this.tops=[.8,1.25,1.25,.8],[[-4.5,.8,"#7be8a0"],[-1.5,1.25,"#5fc2ff"],[1.5,1.25,"#ffd23f"],[4.5,.8,"#ff9ccf"]].forEach(([h,f,d])=>{let p=new tt(new Rt(1.1,1.25,f,32),s(d));p.position.set(h,f/2,-.5),p.castShadow=p.receiveShadow=!0,this.scene.add(p)}),this.slotPos=[[-4.5,.8,-.5],[-1.5,1.25,-.5],[1.5,1.25,-.5],[4.5,.8,-.5]];let a=Mc("HARIS"),l=Mc("HARIS","MADE THIS GAME"),c=new tt(new Xe(11,4.3),new ye({map:a,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2}));c.rotation.x=-Math.PI/2,c.position.set(0,.1,4.4),this.scene.add(c);let u=new tt(new Xe(26,13),new ye({map:l,transparent:!0,depthWrite:!1,toneMapped:!1,fog:!1}));u.position.set(0,9.5,-24),this.scene.add(u),this.banner=u,this.chars=[0,1,2,3].map(h=>{let f=new Ts(h);return this.scene.add(f.group),{c:f,tag:null,name:null,show:!0,scale:1,hop:0}}),this.ambient=new qo("fun",160),this.scene.add(this.ambient.points),this.particles=new Yo(260),this.scene.add(this.particles.points),this.mode="title",this.sel=0,this.t=0,this.lobby=[]}setName(t,e){let n=this.chars[t];n.name!==e&&(n.tag&&(n.c.group.remove(n.tag),n.tag.material.map.dispose(),n.tag.material.dispose(),n.tag=null),n.name=e,e&&(n.tag=Rr(e,Ci[t].color),n.tag.position.set(0,n.c.height+.55,0),n.c.group.add(n.tag)))}setTitle(t=-1){this.mode="title",this.sel=t,this.lobby=[],this.chars.forEach((e,n)=>{e.show=!0,this.setName(n,null)})}setLobby(t){this.mode="lobby",this.lobby=t,this.chars.forEach((e,n)=>{let s=t.findIndex(r=>r.char===n);e.show=s>=0,e.slot=s,this.setName(n,s>=0?t[s].name:null)})}burst(t){let e=this.slotPos[this.slotOf(t)];this.particles.emit(e[0],e[1]+1.4,e[2]+.5,40,{rainbow:!0,speed:4,up:6,life:1,size:.35,gravity:7})}slotOf(t){return this.mode==="lobby"?[1,2,0,3][Math.max(0,this.chars[t].slot)%4]:t}update(t){this.t+=t;let e=this.camera;e.position.set(Math.sin(this.t*.25)*1.8,2.9+Math.sin(this.t*.4)*.15,10.5),e.lookAt(0,1.9,0),this.sky.position.copy(e.position),this.water.material.uniforms.time.value=this.t,this.chars.forEach((n,s)=>{if(n.c.group.visible=n.show,!n.show)return;let r=this.slotPos[this.slotOf(s)],o=this.mode==="title"?Math.floor(this.t/3)%4===s:this.mode!=="lobby"&&this.sel===s;n.scale=Rs(n.scale,o?1.18:1,Math.min(1,t*8)),n.c.group.scale.setScalar(n.scale),n.hop=o?Math.abs(Math.sin(this.t*5))*.25:Rs(n.hop,0,Math.min(1,t*8)),n.c.group.position.set(r[0],r[1]+n.hop,r[2]),n.c.group.rotation.y=Du(n.c.group.rotation.y,this.mode==="lobby"?Math.sin(this.t*.7+s)*.3:Math.sin(this.t*.6+s*2)*.35,Math.min(1,t*4)),n.c.update(t,{speed:0,grounded:!0,vy:0,stun:0,dive:0,celebrate:o||this.mode==="lobby"&&Math.floor(this.t*.5+s)%2===0}),n.tag&&n.tag.scale.set(2.4,.6,1)}),this.ambient.update(this.t,e.position),this.particles.update(t)}},Jo=class{constructor(t,e){this.info=t,this.id=t.id,this.name=t.name,this.model=new Ts(t.char),e.add(this.model.group),this.tag=Rr(t.name,Ci[t.char].color),this.tag.position.set(0,this.model.height+.7,0),this.model.group.add(this.tag),this.snaps=[],this.x=0,this.y=-50,this.z=0,this.yaw=Math.PI,this.speed=0,this.flags=0,this.vy=0,this.vx=0,this.vz=0,this.sw=0,this.ds=[],this.dMin=0,this.jit=0,this.rs=0,this.has=!1,this.finished=!1,this.lastLanded=!1,this.rxAt=Date.now(),this.stunT=0}push(t){t.rs!==this.rs&&(this.snaps.length=0,this.rs=t.rs);let e=this.snaps[this.snaps.length-1];if(this.rxAt=Date.now(),e&&t.ts<=e.ts){if(e.ts-t.ts<400)return;this.snaps.length=0,this.ds.length=0}let n=Date.now(),s=n-t.ts;for(this.ds.push([n,s]);this.ds.length>1&&n-this.ds[0][0]>4e3;)this.ds.shift();let r=1/0;for(let o of this.ds)o[1]<r&&(r=o[1]);this.dMin=r,this.jit=this.jit*.92+Math.abs(s-r)*.08,this.snaps.push(t),this.snaps.length>40&&this.snaps.shift()}renderTime(){return Date.now()-this.dMin-_n(70+this.jit*2.2,70,260)}update(t,e){let n=this.snaps;if(!n.length)return;for(;n.length>2&&n[1].ts<=t;)n.shift();let s=n[0],r=n[1]||n[0],o=0;if(n.length>1){let d=Math.max(1,r.ts-s.ts);o=_n((t-s.ts)/d,0,1+220/d)}let a=Rs(s.x,r.x,o),l=Rs(s.y,r.y,o),c=Rs(s.z,r.z,o);if(!this.has)this.x=a,this.y=l,this.z=c,this.has=!0;else{let d=1-Math.exp(-28*e),p=this.x,y=this.z;this.x+=(a-this.x)*d,this.y+=(l-this.y)*d,this.z+=(c-this.z)*d,e>0&&(this.vx+=((this.x-p)/e-this.vx)*.25,this.vz+=((this.z-y)/e-this.vz)*.25)}this.yaw=Du(this.yaw,r.r,1-Math.exp(-16*e)),this.speed=r.a&8192?0:Rs(s.sp,r.sp,_n(o,0,1)),this.flags=r.a,Date.now()-this.rxAt>700&&(this.flags&=-23,this.speed=0),this.vy=n.length>1?(r.y-s.y)/Math.max(.02,(r.ts-s.ts)/1e3):0;let u=this.model.group;if(u.position.set(this.x,this.y,this.z),u.rotation.y=this.yaw,this.flags&8192){let d=dc.defs[this.flags>>14&7];d&&(u.position.y+=En[d.kind].seat)}this.flags&2?this.stunT=(this.stunT||0)+e:this.stunT=0,this.stunT>1.2&&(this.flags&=-3);let h=!!(this.flags&1),f=h&&!this.lastLanded;this.lastLanded=h,this.sw=this.flags&16?Math.min(1,(this.sw||.001)+e/.42):0,this.model.update(e,{speed:this.speed,grounded:h,vy:this.vy,stun:this.flags&2?1:0,dive:this.flags&4?1:0,celebrate:!!(this.flags&8),swing:this.sw,shield:!!(this.flags&32),leader:!!this.leader,mega:!!(this.flags&128),landed:f})}dispose(t){t.remove(this.model.group),this.tag.material.map.dispose(),this.tag.material.dispose(),this.model.dispose()}},Ge=new Set,Ni={jump:!1,dive:!1},Pc=class i{constructor(t,e,n,s){this.level=t,this.meta=Ho[t],this.multi=s.multi,this.localId=n,this.players=e,this.t0=s.t0,this.phase="countdown",this.finished=!1,this.over=!1,this.finishTime=0,this.finishedMap=new Map,this.camYaw=0,this.camPitch=.34,this.camDist=8.2,this.camPos=new z,this.camTarget=new z,this.camInit=!1,this.sendT=0,this.rs=0,this.cpIdx=0,this.cpCur=null,this.stepDist=0,this.lastCount=99,this.hudT=0,this.hintT=0,this.warnSec=-1,this.levelTime=-4,this.batCd=0,this.swingT=0,this.batPending=!1,this.swingMega=!1,this.fx={turbo:0,jump:0,shield:0,mega:0},this.fxSig="";let r=Zo[this.meta.key],o=this.scene=new wi;o.background=new Ot(r.fog),o.fog=new sr(r.fog,r.fogNear,r.fogFar),o.environment=$p,o.environmentIntensity=r.env,this.camera=new nn(62,window.innerWidth/window.innerHeight,.1,1800);let{world:a,info:l}=bp(t,!1,Pp(),s.seed||1);this.world=a,this.info=l,o.add(a.group),a.onEvent=null,this.sky=vu(r),o.add(this.sky),this.water=Mu(r,a.waterY),o.add(this.water),this.scenery=Lp(o,this.meta.key,l,a),this.poolMeshes=[];for(let d of a.pools){let p=Bp(d),y=p.material.uniforms;y.fogC.value.set(r.fog),y.fogN.value=r.fogNear,y.fogF.value=r.fogFar,y.skyTop.value.set(r.top),y.skyHor.value.set(r.horizon);let m=Hp(d);o.add(p,m),this.poolMeshes.push({wm:p,cm:m,pl:d})}if(this.cars=[],this.drive=null,this.lookT=0,this.nearCar=null,this.hornCd=0,this.skidT=0,l.cars){for(let d of l.cars){let p=Wp(d.id);p.rotation.order="YXZ",p.position.set(d.x,d.y||0,d.z),p.rotation.y=d.yaw,o.add(p);let y=Gp(d.id,d.x,d.z,d.yaw);y.y=d.y||0,this.cars.push({st:y,mesh:p})}this.skyG=0;try{this.racerOk=localStorage.getItem("ph_racer")==="1"}catch{this.racerOk=!1}this.applyFree(),s.multi&&mt.pendingCars&&(this.onCars(mt.pendingCars),mt.pendingCars=null)}o.add(new xs(r.hemiSky,r.hemiGround,r.hemiI));let c=this.sun=new ys(r.sun,r.sunI);this.sunDir=new z(...r.sunPos).normalize().multiplyScalar(90),c.castShadow=le.shadows,c.shadow.mapSize.set(Gn?1024:2048,Gn?1024:2048);let u=c.shadow.camera;u.left=-40,u.right=40,u.top=40,u.bottom=-40,u.near=5,u.far=220,c.shadow.bias=-3e-4,c.shadow.normalBias=.04,o.add(c,c.target),this.particles=new Yo(600),o.add(this.particles.points),this.particles.setScale(Rn.domElement.height),this.ambient=new qo(this.meta.key,320),o.add(this.ambient.points),this.remotes=new Map;let h=e.findIndex(d=>d.id===n);this.slot=Math.max(0,h);let f=e[this.slot]||{name:"Player",char:0};this.me={body:Ep(),model:new Ts(f.char),name:f.name,char:f.char},o.add(this.me.model.group),this.me.model.group.rotation.order="YXZ",this.me.tag=Rr(f.name,Ci[f.char].color),this.me.tag.position.set(0,this.me.model.height+.7,0),this.me.model.group.add(this.me.tag),e.forEach((d,p)=>{d.id!==n&&this.remotes.set(d.id,new Jo(d,o))}),this.spawn(this.slot),this.an=this.meta.free&&!this.meta.arena?new Rc(this):null,document.body.classList.toggle("free-map",!!this.meta.free),this.quest=this.meta.quest?{q:up(),vis:new xc(a,l),L:Pi()}:null,this.victory=0,this.hopT=0,this.buildProgress(),this.buildBoxes(),document.body.classList.add("in-race"),dt("hud-level").textContent=this.meta.name,dt("hud").classList.remove("hidden"),dt("hud-hint").classList.remove("fade"),this.hintT=8,this.setShadows(le.shadows),Ir(t),Ec(!1),this.pos=this.me.body}updateQuest(t){let e=this.quest,n=this.me.body;if(!this.multi&&this.levelTime>=0&&!this.over){let s=pp(e.q,t,[{id:this.localId,x:n.x,y:n.y,z:n.z}],this.an.list,1,e.L,[]);for(let r of s)this.questEvent(r)}e.vis.setState(e.q),e.vis.update(t),this.victory>0&&(this.victory+=t,this.hopT-=t,this.hopT<=0&&n.grounded&&!(this.an&&this.an.mount)&&(this.hopT=.7+Math.random()*.3,n.vy=9.5,n.grounded=!1),Math.random()<t*14&&this.particles.emit(n.x+(Math.random()-.5)*8,n.y+7,n.z+(Math.random()-.5)*8,3,{color:["#ff5fa8","#ffd23f","#4cc9f0","#80ed99"][Math.random()*4|0],speed:2.5,up:-1,life:1.6,size:.4,gravity:3,spread:1}))}questEvent(t){let e=this.quest,n=e.L;if(e.vis.event(t),t.k==="boulder"){let s=n.chapters[t.ch].boulderZ;Ct.roar(1),this.toast("THE BOULDER FALLS! A BEAST APPEARS - hit it with the BAT!"),this.particles.emit(0,3,s,60,{color:"#bdb6a8",speed:8,up:4,life:1.2,size:.8,gravity:4,spread:1})}else t.k==="gate"?(Ct.tame(),this.toast(t.ch>=Ae.CH-1?"BEAST BEATEN! Now free the DRAGON!":"BEAST BEATEN - the GATE opens! Next maze ahead...")):t.k==="cage"?(Ct.roar(1),this.toast("THE DRAGON IS FREE!")):t.k==="victory"&&(this.victory=.001,Ct.go(),this.toast("VICTORY! YOU FREED THE DRAGON!"))}questNet(t){Object.assign(this.quest.q,{ch:t.ch,ph:t.ph,n:t.n,occ:t.occ||[],hold:t.hold||0})}setShadows(t){this.sun.castShadow=t}spawnPoint(t){return[(t-1.5)*3.6,0,this.info.spawn.z]}spawn(t){let[e,n,s]=this.spawnPoint(t);_c(this.me.body,e,n+.02,s,Math.PI),this.cpCur=null,this.cpIdx=0}buildProgress(){let t=document.querySelector("#hud-progress .track");t.querySelectorAll(".dot").forEach(n=>n.remove()),this.dots=new Map;let e=(n,s)=>{let r=document.createElement("div");r.className="dot"+(s?" me":""),r.style.background=Ci[n.char].color,r.innerHTML=`<em>${n.name.replace(/[<>&]/g,"")}</em>`,t.appendChild(r),this.dots.set(n.id,r)};this.players.forEach(n=>e(n,n.id===this.localId))}now(){return this.multi?mt.net.now():performance.now()}look(t,e){this.camYaw-=t*.0024,this.camPitch=_n(this.camPitch+e*.0021,-.15,1.2),this.lookT=1.6}update(t){let e=this.me.body,n=this.world;this.levelTime=(this.now()-this.t0)/1e3;let s=this.levelTime;if(n.update(s,t),n.carry(e),e.yawOff&&(e.yaw+=e.yawOff,e.yawOff=0),s<0){let g=Math.ceil(-s);g!==this.lastCount&&g<=3&&(this.lastCount=g,this.count(String(g)),Ct.tick())}else this.phase==="countdown"&&(this.phase="race",this.count("GO!"),Ct.go(),this.lastCount=0,this.multi&&setTimeout(()=>{X===this&&!this.over&&this.toast(Gn?"Tap BAT to bonk rivals!":"Press B or click to swing the BAT!")},1400),this.cars.length&&setTimeout(()=>{X===this&&!this.over&&!this.drive&&this.toast("\u{1F697} Follow the CAR STATION signs to drive!")},this.multi?4200:1600));let r=s>=0&&!this.over,o=0,a=0;(Ge.has("KeyW")||Ge.has("ArrowUp"))&&o++,(Ge.has("KeyS")||Ge.has("ArrowDown"))&&o--,(Ge.has("KeyD")||Ge.has("ArrowRight"))&&a++,(Ge.has("KeyA")||Ge.has("ArrowLeft"))&&a--,Ge.has("KeyQ")&&(this.camYaw+=1.9*t),Ge.has("KeyE")&&(this.camYaw-=1.9*t),(Je.x||Je.y)&&(a+=Je.x,o+=Je.y);let l=Math.sin(this.camYaw),c=Math.cos(this.camYaw),u=-l*o+c*a,h=-c*o-l*a,f=Math.hypot(u,h);f>1&&(u/=f,h/=f);let d={mx:r?u:0,mz:r?h:0,jumpPressed:r&&Ni.jump,jumpHeld:r&&(Ge.has("Space")||Je.jump),divePressed:r&&Ni.dive};Ni.jump=!1,Ni.dive=!1,this.drive&&e.stun>0&&(e.stun=Math.max(0,e.stun-t)),e.stun>0?(this.stunReal=(this.stunReal||0)+t,this.stunReal>1.25&&(e.stun=0,e.immune=.6,this.stunReal=0)):this.stunReal=0;let p=Math.max(1,Math.ceil(t/(1/90))),y=t/p,m=!1;if(this.drive)this.updateDrive(t,r),e.events.length=0;else for(let g=0;g<p;g++)wp(n,e,y,d),d.jumpPressed=!1,d.divePressed=!1,e.events.length&&(m=this.events(e)||m,e.events.length=0);if(r&&!this.drive){let g=n.checkHazards(e,s);g&&Ar(e,g.nx,g.nz,g.pow)&&(Ct.hit(),this.particles.emit(e.x,e.y+.9,e.z,26,{color:"#ffffff",speed:5,up:3,life:.5,size:.3}),this.particles.emit(e.x,e.y+.9,e.z,14,{color:"#ffd23f",speed:7,up:4,life:.4,size:.25}))}this.drive||this.updateBat(t,e),this.updatePowerups(t,e),this.drive||(this.softCollide(e),this.softCars(e,r)),this.checkpoints(e),!this.finished&&s>=0&&e.z<this.info.finishZ&&e.y>this.info.finishY-3&&Math.abs(e.x)<16&&this.onLocalFinish(),e.grounded&&!e.stun&&!this.drive&&!(e.swim>.3)&&(this.stepDist+=Math.hypot(e.vx,e.vz)*t,this.stepDist>2.4&&(this.stepDist=0,Math.hypot(e.vx,e.vz)>3&&(Ct.step(),this.particles.emit(e.x,e.y+.05,e.z,2,{color:"#ffffff",speed:.8,up:.8,life:.35,size:.22,gravity:1}))));let x=this.me.model,S=x.group,w=e.swim>.3?_n((e.swim-.3)/.4,0,1):0;if(this.drive?this.seatModel(S,this.drive):(S.position.set(e.x,e.y,e.z),S.rotation.y=e.yaw,S.rotation.x=w*.55*_n(Math.hypot(e.vx,e.vz)/3,.25,1),S.scale.setScalar(1),this.an&&this.an.seatLocal(S)),x.update(t,{speed:this.drive||this.an&&this.an.mount?0:Math.hypot(e.vx,e.vz),grounded:this.drive||w>0?!0:e.grounded,vy:this.drive?0:e.vy,stun:this.drive?0:e.stun,dive:this.drive?0:e.dive,celebrate:this.finished||this.over&&this.winnerSelf||this.victory>0,swing:this.swingT,shield:e.shield>0,leader:this.leaderId===this.localId,mega:this.swingMega&&this.swingT>0,landed:m}),this.tagScale(this.me.tag,S.position,.85),this.multi){this.leaderId=this.findLeader();for(let g of this.remotes.values())g.leader=g.id===this.leaderId,g.update(g.snaps.length?g.renderTime():0,t),this.tagScale(g.tag,g.model.group.position,1),g.flags&64&&Math.random()<.6&&this.particles.emit(g.x,g.y+.3,g.z,1,{color:"#5fc2ff",speed:1,up:.5,life:.35,size:.35});this.sendT+=t,this.sendT>=.033&&this.sendSnap()}this.updateCars(t,r),this.an&&this.an.update(t),this.quest&&this.updateQuest(t),this.updateCamera(t),this.updateLights(),this.water.material.uniforms.time.value=performance.now()/1e3,this.water.position.x=this.camera.position.x,this.water.position.z=this.camera.position.z,this.sky.position.copy(this.camera.position),this.scenery.update(s,this.camera.position),this.ambient.update(performance.now()/1e3,this.camera.position),this.particles.update(t),this.hud(t)}events(t){let e=!1;for(let n of t.events)if(n==="jump")Ct.jump(),this.particles.emit(t.x,t.y+.05,t.z,5,{color:"#ffffff",speed:1.5,up:1,life:.35,size:.25,gravity:2});else if(n==="land")Ct.land(t.landSpeed),e=!0,this.particles.emit(t.x,t.y+.05,t.z,Math.min(14,5+t.landSpeed*.4),{color:"#ffffff",speed:2.4,up:1.4,life:.45,size:.3,gravity:3});else if(n==="bounce")Ct.bounce(),e=!0,this.particles.emit(t.x,t.y+.1,t.z,18,{rainbow:!0,speed:3,up:2,life:.6,size:.3});else if(n==="dive")Ct.dive();else if(n==="splash"){Ct.splash();let s=t.swim>0&&t.waterSurf,r=Zo[this.meta.key],o=s?"#ffffff":r.water==="lava"?"#ff9a2a":r.water==="grid"?"#d11cff":"#bfeaff";this.particles.emit(t.x,(s?t.waterSurf:this.world.waterY)+.2,t.z,s?34:40,{color:o,speed:4,up:s?6:9,life:.9,size:.45,gravity:16,spread:.6})}else n==="stroke"?(Ct.jump(),this.particles.emit(t.x,t.waterSurf+.1,t.z,10,{color:"#ffffff",speed:2,up:3,life:.6,size:.3,gravity:10})):n==="fell"&&this.onFell();return e}seatModel(t,e){let n=e.st,s=e.mesh.userData.seat;t.position.set(n.x+Math.sin(n.yaw)*s.z,n.y+s.y,n.z+Math.cos(n.yaw)*s.z),t.rotation.y=n.yaw,t.rotation.x=0,t.scale.setScalar(.8)}nearestFreeCar(t){if(t.stun>0||t.y>1.5||t.swim>.3)return null;let e=null,n=4.6;for(let s of this.cars){if(s.st.driver!==-1&&s!==this.drive||si[s.st.id].racer&&!this.racerOk||Math.abs(t.y-s.st.y)>3)continue;let r=Math.hypot(t.x-s.st.x,t.z-s.st.z);r<n&&(n=r,e=s)}return e}toggleCar(){if(this.an){this.an.toggleMount();return}if(this.over||this.finished||this.levelTime<0||this.menuOpen||!this.cars.length)return;let t=this.me.body;if(this.drive){let e=this.drive,n=e.st;if(Math.abs(n.speed)>5){this.toast("Slow down to get out!");return}if(n.y>1.2){this.toast(this.racerOk?"Not up here - stop on the RACER GARAGE plaza to swap cars":"Finish the SKY SPEEDWAY to win a RACER!");return}let s=Math.cos(n.yaw),r=-Math.sin(n.yaw);_c(t,n.x+s*2.4,.05,n.z+r*2.4,n.yaw),t.hitCd=.3,n.vx=n.vz=n.speed=0,n.driver=-1,n.parked=!0,this.drive=null,document.body.classList.remove("driving"),Tu(),Ct.door(),this.g_g(this.me.model.group),this.multi&&mt.net.send({t:"carpark",c:n.id,x:+n.x.toFixed(2),y:+n.y.toFixed(2),z:+n.z.toFixed(2),r:+n.yaw.toFixed(3)}),this.camYaw=n.yaw+Math.PI,this.camInit=!1}else{let e=this.nearestFreeCar(t);if(!e)return;this.drive=e,e.st.driver=this.localId,e.st.parked=!1,t.vx=t.vz=t.vy=0,t.grounded=!0,document.body.classList.add("driving"),document.body.classList.remove("near-car"),Up(),Ct.door(),Ct.vroom(),this.camPitch=.3,this.camYaw=e.st.yaw+Math.PI,this.toast(si[e.st.id].name.toUpperCase()+"!  "+(Gn?"use the joystick to drive, tap the door to get out":"W/S drive \u2022 A/D steer \u2022 C get out"))}}g_g(t){t.scale.setScalar(1),t.rotation.x=0}skyGates(t){let e=this.info.sky;if(!e||t.y<e.y-4||this.skyG>=e.gates.length)return;let n=this.skyG,s=e.gates[n],r=n===1;if(Math.abs(t.x-s.x)<(r?4:s.w)&&Math.abs(t.z-s.z)<(r?s.w:4))if(this.skyG++,Ct.checkpoint(),this.particles.emit(t.x,t.y+1.5,t.z,24,{color:n===e.gates.length-1?"#ff3b3b":"#7cff3d",speed:6,up:5,life:.8,size:.4}),n===e.gates.length-1){this.racerOk=!0,this.applyFree();try{localStorage.setItem("ph_racer","1")}catch{}Ct.win(),this.toast("\u{1F3C1} SKY SPEEDWAY CLEARED! RED RACERS UNLOCKED & the sky road is now obstacle-free! Stop on the RACER GARAGE plaza and press "+(Gn?"the red car button":"R"))}else this.toast("SKY GATE "+(n+1)+" / "+(e.gates.length-1)+"  \u2713")}applyFree(){this.info.track&&(this.info.track.free=!!this.racerOk),this.world&&this.world.skyObst&&(this.world.skyObst.visible=!this.racerOk)}garageSpot(t){let e=this.info.sky;return!!e&&t.y>e.y-3&&Math.hypot(t.x-e.garage.x,t.z-e.garage.z)<e.garage.r}swapRacer(){if(!this.drive||this.over||this.menuOpen)return;let t=this.drive,e=t.st,n=this.info.sky;if(si[e.id].racer){this.toast("You already drive a RACER!");return}if(!this.racerOk){this.toast("Finish the SKY SPEEDWAY to unlock the RACERS!");return}if(!this.garageSpot(e)){this.toast("Drive to the RACER GARAGE (end of the sky road) to swap");return}if(Math.abs(e.speed)>5){this.toast("Slow down first!");return}let s=null,r=22;for(let o of this.cars){if(!si[o.st.id].racer||o.st.driver!==-1&&o!==t)continue;let a=Math.hypot(e.x-o.st.x,e.z-o.st.z);a<r&&(r=a,s=o)}if(!s){this.toast("All 4 racers are taken - wait for one!");return}e.vx=e.vz=e.speed=0,e.driver=-1,e.parked=!0,this.multi&&mt.net.send({t:"carpark",c:e.id,x:+e.x.toFixed(2),y:+e.y.toFixed(2),z:+e.z.toFixed(2),r:+e.yaw.toFixed(3)}),this.drive=s,s.st.driver=this.localId,s.st.parked=!1,s.st.vx=s.st.vz=s.st.speed=0,Ct.door(),Ct.vroom(),this.shake=.3,this.camYaw=s.st.yaw+Math.PI,this.toast("\u{1F3CE} RACER!  Top speed 150 km/h \u2022 big horn on "+(Gn?"the horn button":"H"))}updateDrive(t,e){let n=this.drive,s=n.st,r=this.me.body,o=0,a=0,l=!1;if(e&&((Ge.has("KeyW")||Ge.has("ArrowUp"))&&o++,(Ge.has("KeyS")||Ge.has("ArrowDown"))&&o--,(Ge.has("KeyD")||Ge.has("ArrowRight"))&&a++,(Ge.has("KeyA")||Ge.has("ArrowLeft"))&&a--,l=Ge.has("Space"),Je.x||Je.y)){let f=Math.sin(this.camYaw),d=Math.cos(this.camYaw),p=-f*Je.y+d*Je.x,y=-d*Je.y-f*Je.x,m=Math.min(1,Math.hypot(p,y));if(m>.12){let x=Math.hypot(p,y)||1;p/=x,y/=x;let S=p*Math.sin(s.yaw)+y*Math.cos(s.yaw),w=-p*Math.cos(s.yaw)+y*Math.sin(s.yaw);S>-.35?(o+=Math.min(1,m*1.25)*(.45+.55*Math.max(0,S)),a+=S<.2?Math.sign(w||1):Math.max(-1,Math.min(1,w*2.4))):(o-=Math.min(1,m*1.25),a+=Math.max(-1,Math.min(1,w*2)))}}let c=this.cars.filter(f=>f!==n).map(f=>f.st),u="",h={gas:_n(o,-1,1),steer:_n(a,-1,1),hb:l};for(let f=0;f<2;f++)u=Vp(s,t/2,h,this.info.track,c,Math.max(0,this.levelTime))||u;if(u==="bump"&&(Ct.land(18),this.particles.emit(s.x,.8,s.z,12,{color:"#ffd23f",speed:4,up:3,life:.4,size:.25}),this.shake=Math.max(this.shake||0,.25)),u==="crash"&&(Ct.land(34),this.particles.emit(s.x,.9,s.z,26,{color:"#ffb347",speed:7,up:5,life:.6,size:.35}),this.shake=Math.max(this.shake||0,Math.min(1,.4+(s.crash||0)*.04)),s.crash=0),r.x=s.x,r.y=s.y,r.z=s.z,r.vx=s.vx,r.vz=s.vz,r.vy=0,r.grounded=!0,r.ground=null,r.yaw=s.yaw,r.stun=0,zp(Math.abs(s.speed)/si[s.id].max,o>0),this.skyGates(s),this.hornCd-=t,this.skidT-=t,s.drift>.55&&Math.abs(s.speed)>8){this.skidT<=0&&(this.skidT=.25,Ct.skid());for(let f of[-1,1])this.particles.emit(s.x-Math.sin(s.yaw)*1.5+Math.cos(s.yaw)*f*.9,.25,s.z-Math.cos(s.yaw)*1.5-Math.sin(s.yaw)*f*.9,1,{color:"#e8e8e8",speed:1.2,up:1.2,life:.5,size:.5,gravity:-.5})}s.boost>0&&Math.random()<.8&&this.particles.emit(s.x-Math.sin(s.yaw)*2.2,.5,s.z-Math.cos(s.yaw)*2.2,1,{color:"#ffb347",speed:2,up:1,life:.35,size:.4})}honk(){if(this.drive&&this.hornCd<=0){let t=si[this.drive.st.id].racer;this.hornCd=t?.9:.4,t?Ct.honkBig():Ct.honk(),t&&(this.shake=Math.max(this.shake||0,.12))}}onCars(t){for(let e of Object.keys(t||{})){let n=this.cars[+e],s=t[e];!n||!s||n===this.drive||(n.st.x=+s.x,n.st.z=+s.z,n.st.y=+s.y||0,n.st.yaw=+s.r,n.mesh.position.set(n.st.x,n.st.y,n.st.z),n.mesh.rotation.y=n.st.yaw)}}softCars(t,e){if(!(!e||this.finished))for(let n of this.cars){if(n===this.drive)continue;let s=n.st,r=si[s.id],o=t.x-s.x,a=t.z-s.z;if(o*o+a*a>40||Math.abs(t.y-s.y)>2.5)continue;let l=Math.sin(s.yaw),c=Math.cos(s.yaw),u=o*l+a*c,h=-o*c+a*l,f=r.hl+.45,d=r.hw+.45;if(Math.abs(u)>=f||Math.abs(h)>=d)continue;if(Math.abs(s.speed)>6&&t.hitCd<=0){let m=Math.sign(s.speed)||1,x=l*m+o*0,S=c*m;x+=-c*Math.sign(h||1)*.5,S+=l*Math.sign(h||1)*.5;let w=Math.hypot(x,S)||1;if(Ar(t,x/w,S/w,15)){this.bonked("HIT BY A CAR!","",t);continue}}let p=f-Math.abs(u),y=d-Math.abs(h);if(p<y){let m=Math.sign(u||1)*p;t.x+=l*m,t.z+=c*m}else{let m=Math.sign(h||1)*y;t.x+=-c*m,t.z+=l*m}}}updateCars(t,e){var a;this.lastDt=t;let n=this.me.body,s=performance.now()/1e3;for(let l of this.cars)l!==this.drive&&(l.st.driver=-1,l.st.speed=0,l.st.vx=l.st.vz=0);let r=[];for(let l of this.remotes.values()){let c=l.model.group;if(c.rotation.order="YXZ",!!l.has)if(l.flags&256){let u=this.cars[l.flags>>9&7];if(u&&u!==this.drive){let h=u.st,f=(l.yaw-((a=h._py)!=null?a:l.yaw)+Math.PI*3)%(Math.PI*2)-Math.PI;h.driver=l.id,h.parked=!1,h.x=l.x,h.z=l.z;{let d=h.y;h.y=l.y||0,h.pitch+=((Math.abs(l.speed)>1?Math.atan2(h.y-d,Math.max(.01,Math.abs(l.speed)*t)):0)-h.pitch)*Math.min(1,t*8)}h.speed=l.speed,h.vx=Math.sin(l.yaw)*l.speed,h.vz=Math.cos(l.yaw)*l.speed,h._py=l.yaw,h.steer+=(_n(-f/Math.max(t,.008)*.45,-1,1)-h.steer)*Math.min(1,t*8),h.yaw=l.yaw,this.seatModel(c,u),this.tagScale(l.tag,c.position,1)}}else c.scale.setScalar(1),c.rotation.x=l.flags&4096?.55:0,l.flags&4096&&r.push([l.x,l.z,.35+Math.min(1,l.speed/8)*.65])}n.swim>.3&&!this.drive&&r.push([n.x,n.z,.35+Math.min(1,Math.hypot(n.vx,n.vz)/8)*.65]),n.swim>.3&&!this.drive&&Math.hypot(n.vx,n.vz)>2&&Math.random()<.5&&this.particles.emit(n.x,n.waterSurf+.08,n.z,1,{color:"#ffffff",speed:1.2,up:1.6,life:.5,size:.28,gravity:6,spread:.5});for(let l of this.poolMeshes){let c=l.wm.material.uniforms;c.time.value=s,l.cm.material.uniforms.time.value=s;for(let u=0;u<4;u++){let h=r[u],f=c.ag.value[u];h?f.set(h[0],h[1],h[2]):f.set(0,0,0)}}{let l=!1;for(let u of this.poolMeshes){let h=u.pl,f=this.camera.position;f.x>h.x0&&f.x<h.x1&&f.z>h.z0&&f.z<h.z1&&f.y<h.surf&&(l=!0)}let c=dt("uw");c&&c.classList.contains("on")!==l&&c.classList.toggle("on",l)}for(let l of this.cars)l.mesh.position.set(l.st.x,l.st.y,l.st.z),l.mesh.rotation.y=l.st.yaw,Xp(l.mesh,l.st,t);let o=!this.an&&!this.drive&&e&&!this.menuOpen&&this.nearestFreeCar(n);!this.an&&!!o!==document.body.classList.contains("near-car")&&document.body.classList.toggle("near-car",!!o);{let l=!!this.drive&&this.racerOk&&!si[this.drive.st.id].racer&&this.garageSpot(this.drive.st)&&Math.abs(this.drive.st.speed)<5;l!==document.body.classList.contains("sky-swap")&&document.body.classList.toggle("sky-swap",l)}if(this.drive){let l=dt("car-speed");if(l){let c=Math.round(Math.abs(this.drive.st.speed)*3.6);l.firstElementChild.textContent!==String(c)&&(l.firstElementChild.textContent=c)}}}onFell(){let t=this.me.body,e=this.cpCur,n=(this.slot-1)*1.6,s,r,o;if(e)s=_n(e.x+n,e.x-e.w/2+1.5,e.x+e.w/2-1.5),r=e.y+.05,o=e.spawn[2];else{let l=this.spawnPoint(this.slot);s=l[0],r=l[1]+.02,o=l[2]}_c(t,s,r,o,Math.PI),this.rs++,Ct.respawn();let a=dt("flash");a.classList.add("on"),setTimeout(()=>a.classList.remove("on"),60),this.particles.emit(s,r+.8,o,30,{rainbow:!0,speed:3,up:3,life:.8,size:.3}),this.camInit=!1,this.camYaw=0}checkpoints(t){let e=this.world.checkpoints;for(;this.cpIdx<e.length&&t.z<e[this.cpIdx].z&&t.y>e[this.cpIdx].y-2.5&&Math.abs(t.x-e[this.cpIdx].x)<e[this.cpIdx].w/2+3;)this.cpCur=e[this.cpIdx],this.cpIdx++,Ct.checkpoint(),this.toast("CHECKPOINT!"),this.particles.emit(t.x,t.y+1,t.z,24,{color:"#ffd23f",speed:3,up:5,life:.8,size:.3})}softCollide(t){if(this.finished)return;let e=_e.R*2+.06;for(let n of this.remotes.values()){if(!n.has||n.flags&8||Date.now()-n.rxAt>500)continue;let s=t.x-n.x,r=t.z-n.z,o=t.y-n.y;if(Math.abs(o)>_e.H*.8)continue;let a=Math.hypot(s,r);if(a>=e)continue;let l,c;if(a>.001)l=s/a,c=r/a;else{let m=t.yaw*7+1;l=Math.cos(m),c=Math.sin(m)}let u=e-a;t.x+=l*u*.62,t.z+=c*u*.62;{let m=Math.sin(t.yaw),x=Math.cos(t.yaw);if(Math.hypot(t.vx,t.vz)>1&&-(m*l+x*c)>.3){let w=-c,g=l,M=m*w+x*g;Math.abs(M)<.3&&(M=-x*w+m*g||1),M=Math.sign(M),t.x+=w*M*u*.55,t.z+=g*M*u*.55}}let h=n.vx||0,f=n.vz||0,d=(t.vx-h)*l+(t.vz-f)*c;if(this.multi&&d<-1.5){let m=performance.now();n.shoveAt>m-80||(n.shoveAt=m,mt.net.send({t:"shove",to:n.id,nx:+(-l).toFixed(3),nz:+(-c).toFixed(3),p:+Math.min(12,-d).toFixed(1)}))}let p=performance.now(),y=!(n.lastContact>p-150);if(n.lastContact=p,d<0&&y){let m=-1.7*d*.5;t.vx+=l*m,t.vz+=c*m,m>2.5&&(t.noCtrl=Math.max(t.noCtrl,.16)),n.flags&4&&-d>7&&t.hitCd<=0&&Ar(t,l,c,11)?this.bonked("TACKLED!",n.name||"",t):-d>6&&t.hitCd<=0&&(Ct.land(6),this.particles.emit(t.x-l*.4,t.y+.9,t.z-c*.4,8,{color:"#ffffff",speed:3,up:2,life:.3,size:.25}))}}}bonked(t,e,n){Ct.bonk(),this.toast(t+(e?"  \u2022 "+e:"")),this.particles.emit(n.x,n.y+1,n.z,22,{color:"#ffffff",speed:6,up:3,life:.5,size:.3}),this.particles.emit(n.x,n.y+1,n.z,14,{color:"#ffd23f",speed:8,up:4,life:.45,size:.28})}sendSnap(){let t=this.me.body;this.sendT=0,this.lastSend=performance.now();let e=(t.grounded?1:0)|(t.stun>0?2:0)|(t.dive>0?4:0)|(this.finished?8:0)|(this.swingT>0?16:0)|(t.shield>0?32:0)|(this.fx.turbo>0?64:0)|(this.swingMega&&this.swingT>0?128:0)|(this.drive?256|this.drive.st.id<<9:0)|(this.an?this.an.flagBits():0)|(t.swim>.4&&!this.drive?4096:0);mt.net.send({t:"s",x:+t.x.toFixed(2),y:+t.y.toFixed(2),z:+t.z.toFixed(2),r:+t.yaw.toFixed(2),a:e,sp:+Math.min(99,Math.hypot(t.vx,t.vz)).toFixed(1),ts:mt.net.stamp(),rs:this.rs})}swing(){return!(this.multi||this.meta.free)||this.over||this.finished||this.levelTime<0||this.batCd>0||this.an&&this.an.mount||this.me.body.stun>0?!1:(this.swingMega=this.fx.mega>0,this.swingMega&&this.fx.mega--,this.batCd=1.1,this.swingT=.001,this.batPending=!0,Ct.swing(),!0)}updateBat(t,e){this.batCd>0&&(this.batCd-=t),this.swingT>0&&(this.swingT+=t/.42,e.stun>0?(this.swingT=0,this.batPending=!1):this.batPending&&this.swingT>=.55&&(this.batPending=!1,this.batHit(e)),this.swingT>=1&&(this.swingT=0))}batHit(t){this.an&&this.an.batHit(t);let e=Math.sin(t.yaw),n=Math.cos(t.yaw);for(let s of this.remotes.values()){if(!s.has||s.flags&8||Date.now()-s.rxAt>800)continue;let r=s.x-t.x,o=s.z-t.z,a=s.y-t.y,l=Math.hypot(r,o);if(l>(this.swingMega?4.4:2.9)||Math.abs(a)>1.7||l<.001||(r*e+o*n)/l<.1)continue;let c=e*.7+r/l*.3,u=n*.7+o/l*.3,h=Math.hypot(c,u)||1;c/=h,u/=h,mt.net.send({t:"bat",to:s.id,nx:+c.toFixed(3),nz:+u.toFixed(3),p:this.swingMega?2:1,ax:+t.x.toFixed(1),az:+t.z.toFixed(1)}),Ct.bonk(),this.toast("BONK!  \u2022 "+(s.name||"")),this.particles.emit(s.x,s.y+1,s.z,24,{color:"#ffd23f",speed:7,up:4,life:.5,size:.3}),this.particles.emit(s.x,s.y+1,s.z,14,{color:"#ffffff",speed:5,up:3,life:.4,size:.25})}}sendNet(t){this.multi&&mt.net.send(t)}onAnimalBite(t){let e=this.me.body;if(this.over||this.levelTime<0)return;if(e.shield>0){this.toast("SHIELD BLOCKED!"),Ct.pickup();return}let n=t.big?1:0,s=this.an&&this.an.list[t.id]?En[this.an.list[t.id].kind]:null;e.immune>0||e.stun>.2||(e.hitCd=0,Ar(e,t.nx,t.nz,n?21:15)&&(e.vy=n?10:8,e.stun=n?.9:.7,this.bonked(s?s.sound:"GRRR!","",e),this.shake=Math.max(this.shake||0,.8)))}onShove(t){let e=this.me.body;if(this.over||this.finished||this.levelTime<0||e.shield>0)return;let n=_n(+t.p||0,0,12),s=+t.nx,r=+t.nz;!Number.isFinite(s)||!Number.isFinite(r)||(e.x+=s*n*.05,e.z+=r*n*.05,e.vx+=s*n*.12,e.vz+=r*n*.12)}onBat(t){let e=this.me.body;if(this.over||this.finished||this.levelTime<0)return;let n=(this.players.find(r=>r.id===t.from)||{}).name||"";if(e.immune>0||e.stun>.2||Number.isFinite(t.ax)&&Number.isFinite(t.az)&&Math.hypot(t.ax-e.x,t.az-e.z)>7)return;if(e.hitCd=0,e.shield>0){this.toast("SHIELD BLOCKED!"),Ct.pickup();return}let s=t.p===2;Ar(e,t.nx,t.nz,s?22:15)&&(e.vy=s?11:9,e.stun=s?1:.75,this.bonked(s?"MEGA BONK!":"BONKED!",n,e))}buildBoxes(){this.boxes=[];let t=[],e=(s,r,o)=>[-4,0,4].forEach(a=>t.push({x:s+a,y:o+1.35,z:r}));e(0,-10,0);let n=1e9;for(let s of this.world.checkpoints)Math.abs(s.z-n)<12||(n=s.z,e(s.x,s.z-5,s.y));if(!i.boxAssets){let s=document.createElement("canvas");s.width=s.height=128;let r=s.getContext("2d"),o=r.createLinearGradient(0,0,128,128);o.addColorStop(0,"#ffe45e"),o.addColorStop(1,"#ff8a1a"),r.fillStyle=o,r.fillRect(0,0,128,128),r.strokeStyle="#fff",r.lineWidth=8,r.strokeRect(6,6,116,116),r.fillStyle="#fff",r.strokeStyle="#7a3500",r.lineWidth=6,r.font="bold 92px Arial",r.textAlign="center",r.textBaseline="middle",r.strokeText("?",64,70),r.fillText("?",64,70);let a=new bn(s);a.colorSpace=Ne,i.boxAssets={geo:new ge(.95,.95,.95),mat:new se({map:a,emissive:"#ff9a00",emissiveIntensity:.55,roughness:.35})}}for(let s of t){let r=new tt(i.boxAssets.geo,i.boxAssets.mat);r.position.set(s.x,s.y,s.z),r.castShadow=!0,this.scene.add(r),this.boxes.push({...s,mesh:r,respawn:0})}}findLeader(){if(this.players.length<2||this.levelTime<4)return-1;let t=this.localId,e=this.finished?1e5:-this.me.body.z;for(let n of this.remotes.values()){if(!n.has)continue;let s=n.flags&8?1e5:-n.z;s>e+.5&&(e=s,t=n.id)}return t}pickup(t,e){t.respawn=9,t.mesh.visible=!1,Ct.pickup();let n=this.multi?["turbo","turbo","turbo","jump","jump","shield","shield","mega","mega","mega"]:["turbo","jump","shield"],s=e||n[Math.random()*n.length|0],r=this.fx,o=this.me.body;return s==="turbo"?(r.turbo=5,this.toast("\u{1F680} TURBO!")):s==="jump"?(r.jump=7,this.toast("\u{1F998} SUPER JUMP!")):s==="shield"?(r.shield=8,this.toast("\u{1F6E1}\uFE0F SHIELD!")):(r.mega=2,this.toast("\u{1F3CF} MEGA BAT x2!")),this.particles.emit(o.x,o.y+1,o.z,26,{rainbow:!0,speed:4,up:4,life:.7,size:.32}),s}updatePowerups(t,e){let n=performance.now()/1e3,s=this.fx;for(let o of this.boxes){if(o.respawn>0){o.respawn-=t,o.respawn<=0&&(o.mesh.visible=!0);continue}o.mesh.rotation.y+=t*2,o.mesh.rotation.x=Math.sin(n*1.5+o.x)*.25,o.mesh.position.y=o.y+Math.sin(n*2.5+o.x)*.15,!(this.finished||this.over||this.levelTime<0)&&Math.abs(e.x-o.x)<1.3&&Math.abs(e.z-o.z)<1.3&&e.y<o.y+.8&&e.y+_e.H>o.y-.5&&this.pickup(o)}for(let o of["turbo","jump","shield"])s[o]>0&&(s[o]=Math.max(0,s[o]-t));e.speedMul=(s.turbo>0?1.4:1)*(this.an?this.an.speedK():1),e.jumpMul=s.jump>0?1.3:1,e.shield=s.shield,s.turbo>0&&Math.hypot(e.vx,e.vz)>3&&Math.random()<.7&&this.particles.emit(e.x,e.y+.3,e.z,1,{color:"#5fc2ff",speed:1,up:.5,life:.35,size:.35});let r=["turbo","jump","shield"].map(o=>s[o]>0?o+Math.ceil(s[o]):"").join("|")+"|"+s.mega;if(r!==this.fxSig){this.fxSig=r;let o=dt("hud-fx");if(!o)return;o.innerHTML="";let a=(l,c)=>{let u=document.createElement("div");u.className="fx",u.textContent=l+" "+c,o.appendChild(u)};s.turbo>0&&a("\u{1F680}",Math.ceil(s.turbo)+"s"),s.jump>0&&a("\u{1F998}",Math.ceil(s.jump)+"s"),s.shield>0&&a("\u{1F6E1}\uFE0F",Math.ceil(s.shield)+"s"),s.mega>0&&a("\u{1F3CF}","x"+s.mega)}}onLocalFinish(){this.finished=!0,this.finishTime=Math.max(0,this.levelTime),Ct.finish();let t=this.info.finishZ;this.particles.emit(0,this.info.finishY+6,t,120,{rainbow:!0,speed:9,up:10,life:1.8,size:.5,gravity:7,spread:10}),this.particles.emit(-9,this.info.finishY+1,t,40,{rainbow:!0,speed:4,up:12,life:1.4,size:.4,gravity:8}),this.particles.emit(9,this.info.finishY+1,t,40,{rainbow:!0,speed:4,up:12,life:1.4,size:.4,gravity:8}),this.multi?this.toast("FINISHED!"):this.endSingle(!1)}endSingle(t){if(this.over)return;this.over=!0,this.winnerSelf=!t;let e=-this.info.finishZ,n=_n(-this.me.body.z/e,0,1),s="";if(!t){let o=this.finishTime,a=Jp(this.level);!a||o<a?(localStorage.setItem("ph_best_"+this.level,String(o)),s=a?"NEW BEST TIME!":"First clear!"):s=`Best: ${Cc(a)}`}let r=[{place:1,name:this.me.name,char:this.me.char,win:!t,tm:t?`${Math.round(n*100)}% of the track`:Cc(this.finishTime),self:!0}];setTimeout(()=>mt.showResults({title:t?"TIME'S UP!":"YOU DID IT!",sub:t?"You ran out of time. Try again!":s,rows:r,single:!0,win:!t}),t?300:1400),Ec(!0),t?Ct.lose():Ct.win()}onFin(t){this.finishedMap.set(t.id,t.place);let e=this.players.find(n=>n.id===t.id);t.id===this.localId?this.toast(`${Au(t.place)} PLACE!`):(this.toast(`${e?e.name:"Player"} finished ${Au(t.place)}!`),Ct.checkpoint())}onEnd(t){this.over=!0;let e=t.winnerId===this.localId;this.winnerSelf=e,Ec(!0),e?Ct.win():Ct.lose();let n=t.results.map(r=>({place:r.place,name:r.name,char:r.char,win:r.id===t.winnerId,self:r.id===this.localId,tm:r.finished?Cc(r.time):`${Math.round(r.progress*100)}% of the track`})),s=t.results[0];setTimeout(()=>mt.showResults({title:e?"YOU WIN!":`${s?s.name:"Nobody"} WINS!`,sub:t.reason==="time"?"Time's up - the nearest player to the finish gate wins!":"First to the finish gate wins!",rows:n,single:!1,win:e}),900)}addRemote(t){this.remotes.has(t.id)||(this.players.push(t),this.remotes.set(t.id,new Jo(t,this.scene)),this.buildProgress(),this.toast(t.name+" joined the race!"))}removeRemote(t){let e=this.remotes.get(t);if(e){e.dispose(this.scene),this.remotes.delete(t);let n=this.dots.get(t);n&&n.remove()}}tagScale(t,e,n){let s=e.distanceTo(this.camera.position),r=_n(s*.07,1,5.2)*n;t.scale.set(2.8*r,.7*r,1),t.visible=s<260}updateCamera(t){let e=this.me.body,n=Math.cos(this.camPitch),s=Math.sin(this.camPitch),r=Math.hypot(e.vx,e.vz);this.camera.fov=Rs(this.camera.fov,62+_n(r-10,0,12)*.9,Math.min(1,t*4)),this.camera.updateProjectionMatrix();let o=this.camDist;if(this.drive){let h=this.drive.st;this.lookT-=t,o=9.2+Math.min(4,Math.abs(h.speed)*.12),this.lookT<=0&&(this.camYaw=Du(this.camYaw,h.yaw+Math.PI,1-Math.exp(-3.2*t)),this.camPitch+=(.28-this.camPitch)*(1-Math.exp(-2*t)))}this.an&&this.an.mount&&(o+=this.an.camLift()*1.1);let a=e.x,l=e.y+(this.drive?1.1:1.35)+(this.an?this.an.camLift()*.7:0),c=e.z;this.camInit||(this.camTarget.set(a,l,c),this.camInit=!0);let u=1-Math.exp(-14*t);if(this.camTarget.x+=(a-this.camTarget.x)*u,this.camTarget.z+=(c-this.camTarget.z)*u,this.camTarget.y+=(l-this.camTarget.y)*(1-Math.exp(-7*t)),this.camera.position.set(this.camTarget.x+Math.sin(this.camYaw)*n*o,this.camTarget.y+s*o+.4,this.camTarget.z+Math.cos(this.camYaw)*n*o),this.shake>.01){let h=this.shake*.5;this.camera.position.x+=(Math.random()-.5)*h,this.camera.position.y+=(Math.random()-.5)*h*.7,this.camera.position.z+=(Math.random()-.5)*h,this.shake*=Math.exp(-7*(this.lastDt||.016))}else this.shake=0;this.camera.lookAt(this.camTarget.x,this.camTarget.y+.2,this.camTarget.z)}updateLights(){let t=this.camTarget;this.sun.position.set(t.x+this.sunDir.x,t.y+this.sunDir.y,t.z+this.sunDir.z),this.sun.target.position.copy(t)}count(t){let e=dt("hud-count");e.textContent=t,e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop")}toast(t){let e=dt("hud-toast");e.textContent=t,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}rank(){var s;let t=this.me.body,e=1,n=(s=this.finishedMap.get(this.localId))!=null?s:this.finished&&!this.multi?1:null;if(n)return n;for(let r of this.remotes.values())(this.finishedMap.get(r.id)||r.has&&r.z<t.z-.5)&&e++;return e}hud(t){if(this.hudT+=t,this.hintT>0&&(this.hintT-=t,this.hintT<=0&&dt("hud-hint").classList.add("fade")),this.hudT<.066)return;this.hudT=0;let e=this.levelTime,n=Math.max(0,Math.floor(e)),s=dt("hud-timer");s.textContent=`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`,s.classList.remove("low");{let c=!this.multi&&!this.meta.free;dt("hud-hint").classList.toggle("single",c),document.body.classList.toggle("single",c)}dt("hud-rank").textContent=this.meta.arena?`${this.players.length} in the room`:this.quest?this.questHud():this.an?`\u2665 ${this.an.petCount()} pet${this.an.petCount()===1?"":"s"}`:this.multi?Au(this.rank())+" / "+this.players.length:`${Math.max(0,Math.round(_n(-this.me.body.z/-this.info.finishZ,0,1)*100))}%`;let r=-this.info.finishZ,o=(c,u)=>{let h=this.dots.get(c);h&&(h.style.left=_n(-u/r,0,1)*100+"%")};o(this.localId,this.me.body.z);for(let c of this.remotes.values())o(c.id,c.has?c.z:0);let a=dt("click-hint"),l=!this.over&&!this.menuOpen&&document.pointerLockElement!==as;l!==a.classList.contains("show")&&a.classList.toggle("show",l);{let c=dt("t-bat");c&&c.classList.toggle("cd",this.batCd>0)}this.multi&&(dt("hud-net").textContent=`ping ${Math.round(mt.net.rtt)} ms`)}questHud(){let t=this.quest.q,e=(t.occ||[]).filter(n=>n).length;return t.ph===Ye.MAZE?`Ch ${t.ch+1}/${Ae.CH} \u2022 Circles ${e}/${t.n}`:t.ph===Ye.BEAST?`Ch ${t.ch+1}/${Ae.CH} \u2022 BEAT THE BEAST!`:t.ph===Ye.DRAGON?`DRAGON \u2022 Circles ${e}/${t.n}`:t.ph===Ye.WIN?"VICTORY!":"FREE!"}render(){Rn.render(this.scene,this.camera)}destroy(){wu(),Tu();{let t=dt("uw");t&&t.classList.remove("on")}document.body.classList.remove("sky-swap"),document.body.classList.remove("driving"),document.body.classList.remove("near-car"),this.an&&this.an.dispose(),document.body.classList.remove("free-map"),document.body.classList.remove("riding"),document.body.classList.remove("in-race"),document.body.classList.remove("single"),dt("pause").classList.add("hidden"),this.menuOpen=!1,dt("hud").classList.add("hidden"),dt("hud-count").textContent="",dt("hud-toast").classList.remove("show");{let t=dt("hud-fx");t&&(t.innerHTML="")}for(let t of this.remotes.values())t.dispose(this.scene);this.me.model.dispose(),this.scenery.dispose(),this.scene.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(n=>{n.map&&n.map.dispose(),n.dispose()})}),this.scene.clear()}},sv=["title","profile","levels","mp","lobby","results","help"];function Vn(i){for(let t of sv){let e=dt("s-"+t);e.classList.toggle("active",t===i),e.classList.remove("hidden")}mt.screen=i}var qp=0;function Ko(i){let t=dt("toast-global");t.textContent=i,t.classList.add("show"),clearTimeout(qp),qp=setTimeout(()=>t.classList.remove("show"),3200)}function Kp(i,t){i.innerHTML="",Ci.forEach(e=>{let n=document.createElement("div");n.className="card",n.dataset.id=e.id,n.innerHTML=`<img alt="${e.name}" src="${Cu[e.id]||""}"><b style="color:${e.color}">${e.name}</b>${t.small?"":`<span>${e.tag}</span>`}`,n.onclick=()=>t.onPick(e.id),i.appendChild(n)})}function Pu(i,t,e){i.querySelectorAll(".card").forEach(n=>{let s=+n.dataset.id;n.classList.toggle("sel",s===t),n.classList.toggle("taken",e&&e.has(s)&&s!==t)})}function jp(i,t){i.innerHTML="",Ho.forEach(e=>{let n=document.createElement("div");n.className="card",n.dataset.id=e.id,n.style.background=`linear-gradient(160deg, ${e.colors[0]}cc, ${e.colors[1]}cc)`;let s=Jp(e.id);n.innerHTML=`<div><h4>${e.id+1}. ${e.name}</h4><div class="stars">${"\u2605".repeat(e.stars)}${"\u2606".repeat(5-e.stars)}</div></div><div class="blurb">${e.blurb}</div><div class="meta">${e.sub} &bull; no time limit${s?" &bull; best "+Cc(s):""}</div>`,n.onclick=()=>t.onPick(e.id),i.appendChild(n)})}function rv(){let i=new Oo({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});i.setSize(256,320,!1),i.outputColorSpace=Ne,i.toneMapping=gr,i.setClearColor(0,0);let t=new wi;t.add(new xs("#ffffff","#b9a4ff",1.6));let e=new ys("#ffffff",2.6);e.position.set(3,5,6),t.add(e);let n=new bs(i);t.environment=n.fromScene(new Bo,.04).texture,t.environmentIntensity=.7;let s=new nn(30,256/320,.1,50);s.position.set(0,1.25,6.6),s.lookAt(0,.98,0);let r=[];for(let o=0;o<Ci.length;o++){let a=new Ts(o);a.group.rotation.y=-.35,t.add(a.group),a.update(.016,{speed:0,grounded:!0,vy:0,stun:0,dive:0,celebrate:!1}),i.render(t,s),r.push(i.domElement.toDataURL("image/png")),t.remove(a.group),a.dispose()}return n.dispose(),i.dispose(),i.forceContextLoss(),r}function $o(i){mt.mode=i,dt("inp-name").value=mt.name,dt("profile-title").textContent="Choose your player",Kp(dt("char-cards"),{onPick:t=>{mt.char=t,Pu(dt("char-cards"),t),en.sel=t,Ct.select(),en.burst(t)}}),Pu(dt("char-cards"),mt.char),en.setTitle(mt.char),en.mode="profile",en.sel=mt.char,Vn("profile")}function ov(){let i=dt("inp-name").value.trim().replace(/[<>&"']/g,"").slice(0,14);return i||(i=["Haris","Speedy","Bouncy","Zippy"][Math.floor(Math.random()*4)]+Math.floor(Math.random()*90+10)),mt.name=i,localStorage.setItem("ph_name",i),localStorage.setItem("ph_char",String(mt.char)),i}function Qp(){jp(dt("level-cards"),{onPick:i=>{Ct.go(),jo(i)}}),Vn("levels")}function jo(i){Di(),X&&(X.destroy(),X=null),mt.level=i,X=new Pc(i,[{id:1,name:mt.name,char:mt.char}],1,{multi:!1,t0:performance.now()+3600,seed:1+Math.floor(Math.random()*1e9)}),Cs(),Vn("none"),dt("s-results").classList.add("hidden"),Qo()}mt.showResults=function(i){let t=dt("res-list");t.innerHTML="",i.rows.forEach(s=>{let r=document.createElement("div");r.className="res-row"+(s.win?" win":"");let o=Ci[s.char];r.innerHTML=`<div class="place">${s.place<=3?tv[s.place-1]:s.place}</div><div class="nm"><i style="background:${o.color}"></i>${s.name.replace(/[<>&]/g,"")}${s.self?" <small>(you)</small>":""}</div><div class="tm">${s.tm}</div>`,t.appendChild(r)}),dt("res-title").textContent=i.title,dt("res-sub").textContent=i.sub||"";let e=dt("b-res-retry"),n=dt("b-res-next");if(i.single)e.style.display="",e.textContent="RETRY",n.style.display="",n.textContent=mt.level<Ho.length-1?"NEXT LEVEL":"LEVELS",n.disabled=!1,mt.resMode="single";else{e.style.display="none";let s=mt.room&&mt.room.hostId===mt.myId;n.style.display="",n.textContent=s?"BACK TO LOBBY":"WAITING FOR HOST...",n.disabled=!s,mt.resMode="multi"}ta(),Vn("results")};dt("b-res-menu").onclick=()=>{Ct.back(),Nu()};dt("b-res-retry").onclick=()=>{Ct.click(),jo(mt.level)};dt("b-res-next").onclick=()=>{Ct.click(),mt.resMode==="single"?mt.level<Ho.length-1?jo(mt.level+1):(X&&X.destroy(),X=null,Qp()):mt.net.send({t:"again"})};function Nu(){X&&(X.destroy(),X=null),mt.net&&mt.room&&mt.net.send({t:"leave"}),mt.room=null,ta(),en.setTitle(),Vn("title")}async function av(){if(mt.net&&mt.net.connected)return mt.net;let i=new wc;return i.on("joined",t=>{mt.myId=t.id}),i.on("lobby",cv),i.on("err",t=>{dt("mp-status").textContent=t.msg,t.retry&&mt.screen==="mp"?(Lc(),Ic=setTimeout(()=>{mt.screen==="mp"&&!mt.room&&Lu("join")},2e3)):Ko(t.msg)}),i.on("go",hv),i.on("s",t=>{if(X&&X.multi){let e=X.remotes.get(t.id);e&&e.push(t)}}),i.on("fin",t=>{X&&X.multi&&X.onFin(t)}),i.on("bat",t=>{X&&X.multi&&X.onBat(t)}),i.on("an",t=>{X&&X.an&&X.an.onNet(t)}),i.on("aev",t=>{X&&X.an&&X.an.onEvent(t)}),i.on("q",t=>{X&&X.quest&&X.questNet(t)}),i.on("qev",t=>{X&&X.quest&&X.questEvent(t)}),i.on("abite",t=>{X&&X.an&&X.onAnimalBite(t)}),i.on("carpark",t=>{X&&X.multi&&X.onCars({[t.c]:t})}),i.on("cars",t=>{X&&X.multi?X.onCars(t.cars):mt.pendingCars=t.cars}),i.on("shove",t=>{X&&X.multi&&X.onShove(t)}),i.on("end",t=>{X&&X.multi&&X.onEnd(t)}),i.on("left",t=>{X&&X.multi&&X.removeRemote(t.id)}),i.on("close",()=>{Ko("Disconnected from server"),X&&(X.destroy(),X=null),mt.room=null,ta(),en.setTitle(),Vn("title")}),await i.connect(),mt.net=i,i}function lv(){dt("mp-status").textContent="",en.setTitle(mt.char),Vn("mp")}var Ic=null;function Lc(){Ic&&(clearTimeout(Ic),Ic=null)}async function Lu(i){Di(),Lc();let t=dt("mp-status");t.textContent="Connecting...";try{let e=await av();i==="create"?e.send({t:"create",name:mt.name,char:mt.char}):e.send({t:"join",name:mt.name,char:mt.char}),t.textContent=i==="create"?"":"Looking for a room..."}catch{t.textContent="Could not connect to the game server. Is it running?",Ko("Could not connect to the game server")}}function cv(i){Lc();let t=!mt.room,e=mt.room;if(mt.room=i,X&&X.multi){for(let n of i.players)n.id!==mt.myId&&!X.remotes.has(n.id)&&(i.phase==="race"||i.phase==="countdown")&&X.addRemote(n);if(i.phase==="lobby"&&mt.screen!=="lobby")X.destroy(),X=null,ta(),Zp(),Vn("lobby"),Ir(6);else if(mt.screen==="results"){let n=i.hostId===mt.myId;mt.resMode==="multi"&&(dt("b-res-next").textContent=n?"BACK TO LOBBY":"WAITING FOR HOST...",dt("b-res-next").disabled=!n)}return}(t||mt.screen==="mp"||mt.screen==="profile"||mt.screen==="title")&&(i.phase==="lobby"||i.phase==="results")&&(Vn("lobby"),Ir(6)),e&&i.players.length>e.players.length&&Ct.join(),Zp()}function Zp(){let i=mt.room;if(!i)return;let t=i.players.find(r=>r.id===mt.myId);t&&(mt.char=t.char),dt("lobby-code").textContent=i.code,dt("lobby-count").textContent=`${i.players.length}/${4}`;let e=dt("lobby-players");e.innerHTML="";for(let r=0;r<4;r++){let o=i.players[r],a=document.createElement("div");a.className="slot"+(o?"":" empty"),a.innerHTML=o?`<i style="background:${Ci[o.char].color}"></i><span>${o.name.replace(/[<>&]/g,"")}</span>${o.id===i.hostId?"<span>\u{1F451}</span>":""}${o.id===mt.myId?'<span class="you">YOU</span>':""}`:'<i style="background:#888"></i><span>Waiting for player...</span>',e.appendChild(a)}let n=new Set(i.players.filter(r=>r.id!==mt.myId).map(r=>r.char));Kp(dt("lobby-chars"),{small:!0,onPick:r=>{n.has(r)||(Ct.select(),mt.net.send({t:"char",char:r}))}}),Pu(dt("lobby-chars"),mt.char,n);let s=i.hostId===mt.myId;jp(dt("lobby-levels"),{onPick:r=>{s&&(Ct.click(),mt.net.send({t:"level",level:r}))}}),dt("lobby-levels").querySelectorAll(".card").forEach(r=>{r.classList.toggle("sel",+r.dataset.id===i.level),s||(r.style.cursor="default")}),dt("lobby-level-note").textContent=s?"(you choose)":"(host chooses)",dt("b-start").disabled=!s,dt("b-start").firstElementChild.textContent=s?"START RACE":"WAITING FOR HOST",dt("lobby-hint").textContent=s?i.players.length<2?"Tell friends to tap MULTIPLAYER on the same link. You can also start alone.":"Everyone ready? Hit start!":"The host will start the race.",en.setLobby(i.players)}function hv(i){Di(),X&&(X.destroy(),X=null);let t=mt.room;if(!t)return;let e=i.order.map(n=>t.players.find(s=>s.id===n)).filter(Boolean);mt.level=i.level,X=new Pc(i.level,e,mt.myId,{multi:!0,t0:i.t0,seed:i.seed}),Cs(),Vn("none"),Qo()}function Qo(){if(X&&!X.over&&document.pointerLockElement!==as)try{let i=as.requestPointerLock();i&&i.catch&&i.catch(()=>{})}catch{}}function ta(){document.pointerLockElement&&document.exitPointerLock()}document.addEventListener("pointerlockchange",()=>{let i=document.pointerLockElement===as;i?Ru=!0:Ru&&X&&!X.over&&!X.menuOpen&&!Gn&&zu(),i||(Ru=!1),dt("click-hint").classList.toggle("show",!!X&&!X.over&&!X.menuOpen&&!i)});var Ru=!1,Dc=!1;as.addEventListener("mousedown",i=>{Dc=!0,X&&!X.over&&(i.button===0&&X.multi&&document.pointerLockElement===as&&!X.menuOpen?X.swing():Qo())});window.addEventListener("mouseup",()=>{Dc=!1});window.addEventListener("mousemove",i=>{X&&!X.over&&(document.pointerLockElement===as||Dc)&&X.look(i.movementX,i.movementY)});dt("click-hint").addEventListener("click",Qo);window.addEventListener("keydown",i=>{if(i.target&&i.target.tagName==="INPUT"){i.code==="Enter"&&(mt.screen==="profile"?dt("b-profile-next").click():mt.screen==="mp"&&dt("b-join").click());return}X&&!X.over&&["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight"].includes(i.code)&&i.preventDefault(),!i.repeat&&(Ge.add(i.code),i.code==="Space"&&(Ni.jump=!0),(i.code==="ShiftLeft"||i.code==="ShiftRight"||i.code==="KeyF")&&(Ni.dive=!0),i.code==="KeyM"&&Uu(),i.code==="KeyB"&&X&&!X.menuOpen&&X.swing(),i.code==="KeyC"&&X&&!X.over&&!i.repeat&&X.toggleCar(),i.code==="KeyH"&&X&&!X.menuOpen&&X.honk(),i.code==="KeyR"&&X&&!X.over&&!i.repeat&&X.swapRacer(),(i.code==="Escape"||i.code==="KeyP")&&X&&!X.over&&(X.menuOpen?Nc():zu()))});window.addEventListener("keyup",i=>Ge.delete(i.code));window.addEventListener("blur",()=>{Ge.clear(),Dc=!1});window.addEventListener("resize",Cs);function Uu(){mt.muted=!mt.muted,Np(mt.muted),dt("b-sound").textContent="SOUND: "+(mt.muted?"OFF":"ON"),e0()}function t0(){dt("p-gfx").textContent="\u{1F5A5} GFX: "+(le.low?"LOW":"AUTO")}function e0(){dt("p-sound").textContent="\u{1F50A} SOUND: "+(mt.muted?"OFF":"ON")}function zu(){!X||X.over||X.menuOpen||(X.menuOpen=!0,X.multi||(X.paused=!0,X.pauseAt=performance.now()),ta(),Ge.clear(),Je.x=Je.y=0,Je.jump=!1,dt("p-title").textContent=X.multi?"Menu":"Paused",dt("p-info").textContent=X.meta.name+(X.multi?"  \u2022  race goes on!":""),t0(),dt("p-retry").classList.toggle("hidden",X.multi),dt("p-full").classList.toggle("hidden",!(document.documentElement&&document.documentElement.requestFullscreen)),e0(),dt("pause").classList.remove("hidden"),dt("click-hint").classList.remove("show"),Ct.click())}function Nc(){!X||!X.menuOpen||(X.paused&&(X.t0+=performance.now()-X.pauseAt,X.paused=!1),X.menuOpen=!1,dt("pause").classList.add("hidden"),Qo())}dt("b-menu").addEventListener("click",()=>X&&X.menuOpen?Nc():zu());dt("p-resume").onclick=()=>{Ct.click(),Nc()};dt("p-sound").onclick=()=>{Di(),Uu(),Ct.click()};dt("p-gfx").onclick=()=>{le.low=!le.low;try{localStorage.setItem("ph_low",le.low?"1":"0")}catch{}Ct.click(),nv(),t0()};dt("p-full").onclick=()=>{let i=document,t=i.documentElement;try{!i.fullscreenElement&&t.requestFullscreen?t.requestFullscreen({navigationUI:"hide"}):i.exitFullscreen&&i.fullscreenElement&&i.exitFullscreen()}catch{}};dt("p-retry").onclick=()=>{Ct.click();let i=mt.level;dt("pause").classList.add("hidden"),X&&(X.menuOpen=!1),jo(i)};dt("p-quit").onclick=()=>{Ct.back(),dt("pause").classList.add("hidden"),Nu()};async function uv(){await Ip(),en=new Iu;try{Cu=rv()}catch{Cu=["","","",""]}Cs(),en.setTitle(),Vn("title"),dt("b-single").onclick=()=>{Di(),Ir(6),Ct.click(),$o("single")},dt("b-multi").onclick=()=>{Di(),Ir(6),Ct.click(),$o("multi")},dt("b-help").onclick=()=>{Di(),Ct.click(),dt("s-help").classList.add("active")},dt("b-help-close").onclick=()=>{Ct.back(),dt("s-help").classList.remove("active")},dt("b-sound").onclick=()=>{Di(),Uu(),Ct.click()},dt("b-profile-back").onclick=()=>{Ct.back(),en.setTitle(),Vn("title")},dt("b-profile-next").onclick=()=>{ov(),Ct.click(),mt.mode==="single"?Qp():lv()},dt("b-levels-back").onclick=()=>{Ct.back(),$o("single")},dt("b-mp-back").onclick=()=>{Ct.back(),Lc(),$o("multi")},dt("b-create").onclick=()=>{Ct.click(),Lu("create")},dt("b-join").onclick=()=>{Ct.click(),Lu("join")},dt("b-leave").onclick=()=>{Ct.back(),Nu()},dt("b-start").onclick=()=>{mt.room&&mt.room.hostId===mt.myId&&(Ct.click(),mt.net.send({t:"start"}))},dt("b-copy").onclick=async()=>{let s=`${location.origin}${location.pathname}?room=${mt.room?mt.room.code:""}`;try{await navigator.clipboard.writeText(s),Ko("Invite link copied!")}catch{prompt("Copy this invite link:",s)}},new URLSearchParams(location.search).get("room")&&($o("multi"),Ko("Pick your name & player, then CONTINUE and JOIN ROOM")),dt("loader").classList.add("done"),setTimeout(()=>dt("loader").remove(),600);let t=performance.now(),e=performance.now();try{let s=new Worker(URL.createObjectURL(new Blob(["setInterval(()=>postMessage(0),50)"],{type:"text/javascript"})));s.onmessage=()=>{if(!X||!X.multi||X.paused)return;let r=performance.now();if(r-e>200){let o=Math.min(.25,(r-e)/1e3);e=r,t=r,X.update(o)}else r-(X.lastSend||0)>100&&X.sendSnap()}}catch{}let n=s=>{requestAnimationFrame(n);let r=Math.min(.1,(s-t)/1e3);t=s,e=performance.now(),ev(r),X?(X.over&&X.menuOpen&&Nc(),X.paused||X.update(r),X.render()):(en.update(r),Rn.render(en.scene,en.camera))};requestAnimationFrame(n)}uv().catch(i=>{console.error(i);let t=document.querySelector("#loader p");t&&(t.textContent="Error: "+i.message)});window.__ph={app:mt,Remote:Jo,startSingle:i=>jo(i),keys:Ge,press:Ni,touch:Je,get race(){return X},get stage(){return en}};(function(){Gn&&document.body.classList.add("touch");let t=dt("touch"),e=dt("joy"),n=dt("joy-knob");if(!t||!e||!n)return;let s=56,r=null,o=null,a=0,l=0,c=0,u=0,h=(p,y)=>{for(let m of p)if(m.identifier===y)return m;return null};t.addEventListener("touchstart",p=>{p.preventDefault();for(let y of p.changedTouches)y.clientX<window.innerWidth*.5&&r===null?(r=y.identifier,a=y.clientX,l=y.clientY,e.style.left=a+"px",e.style.top=l+"px",e.classList.add("on"),n.style.transform="translate(-50%, -50%)"):o===null&&y.clientX>=window.innerWidth*.5&&(o=y.identifier,c=y.clientX,u=y.clientY)},{passive:!1}),t.addEventListener("touchmove",p=>{p.preventDefault();let y=r!==null?h(p.touches,r):null;if(y){let x=y.clientX-a,S=y.clientY-l,w=Math.hypot(x,S);w>s&&(x*=s/w,S*=s/w),n.style.transform=`translate(calc(-50% + ${x}px), calc(-50% + ${S}px))`;let g=x/s,M=S/s,v=Math.hypot(g,M),T=v<.14?0:(v-.14)/.86/v;Je.x=g*T,Je.y=-M*T}let m=o!==null?h(p.touches,o):null;m&&(X&&!X.over&&X.look((m.clientX-c)*1.7,(m.clientY-u)*1.7),c=m.clientX,u=m.clientY)},{passive:!1});let f=p=>{for(let y of p.changedTouches)y.identifier===r&&(r=null,Je.x=Je.y=0,e.classList.remove("on")),y.identifier===o&&(o=null)};t.addEventListener("touchend",f),t.addEventListener("touchcancel",f);let d=(p,y,m)=>{let x=dt(p);if(!x)return;x.addEventListener("touchstart",w=>{w.preventDefault(),w.stopPropagation(),y()},{passive:!1});let S=w=>{w.preventDefault(),w.stopPropagation(),m&&m()};x.addEventListener("touchend",S,{passive:!1}),x.addEventListener("touchcancel",S,{passive:!1})};d("t-jump",()=>{X&&!X.over&&(Ni.jump=!0,Je.jump=!0)},()=>{Je.jump=!1}),d("t-dive",()=>{X&&!X.over&&(Ni.dive=!0)}),d("t-bat",()=>{X&&!X.over&&!X.menuOpen&&X.swing()}),d("c-horn",()=>{X&&X.honk()}),d("b-racer",()=>{X&&X.swapRacer()}),d("b-car",()=>{X&&X.toggleCar()}),d("b-exit",()=>{X&&X.toggleCar()});for(let p of["b-car","b-exit","b-racer"]){let y=dt(p);y&&y.addEventListener("click",()=>{X&&(p==="b-racer"?X.swapRacer():X.toggleCar()),y.blur()})}})();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

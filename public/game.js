(()=>{var Ku=0,$c=1,ju=2;var aa=1,Ko=2,nr=3,zi=0,Je=1,sn=2,ii=0,Oi=1,gi=2,Jc=3,Kc=4,Qu=5;var os=100,tf=101,ef=102,nf=103,sf=104,rf=200,af=201,of=202,lf=203,jc=204,Qc=205,cf=206,hf=207,uf=208,ff=209,df=210,pf=211,mf=212,gf=213,xf=214,mo=0,go=1,xo=2,Os=3,yo=4,_o=5,vo=6,Mo=7,jo=0,yf=1,_f=2,Vn=0,th=1,eh=2,nh=3,ir=4,ih=5,sh=6,rh=7;var ah=300,Bi=301,ls=302,Qo=303,tl=304,oa=306,Bs=1e3,jn=1001,So=1002,tn=1003,vf=1004;var la=1005;var nn=1006,el=1007;var ki=1008;var _n=1009,oh=1010,lh=1011,sr=1012,nl=1013,Wn=1014,Cn=1015,Xn=1016,il=1017,sl=1018,rr=1020,ch=35902,hh=35899,uh=1021,fh=1022,In=1023,ti=1026,Hi=1027,rl=1028,al=1029,Gi=1030,ol=1031;var ll=1033,ca=33776,ha=33777,ua=33778,fa=33779,cl=35840,hl=35841,ul=35842,fl=35843,dl=36196,pl=37492,ml=37496,gl=37488,xl=37489,da=37490,yl=37491,_l=37808,vl=37809,Ml=37810,Sl=37811,bl=37812,El=37813,wl=37814,Tl=37815,Al=37816,Rl=37817,Cl=37818,Il=37819,Pl=37820,Ll=37821,Dl=36492,Nl=36494,Ul=36495,Fl=36283,zl=36284,pa=36285,Ol=36286;var Ir=2300,bo=2301,fo=2302,Fc=2303,zc=2400,Oc=2401,Bc=2402;var Mf=3200;var ma=0,Sf=1,xi="",Ce="srgb",Pr="srgb-linear",Lr="linear",ve="srgb";var po=7680;var bf=519,Ef=512,wf=513,Tf=514,Bl=515,Af=516,Rf=517,kl=518,Cf=519,dh=35044,ar=35048;var ph="300 es",Hn=2e3,ks=2001;function pp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function mp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function If(){let i=Dr("canvas");return i.style.display="block",i}var xu={},Hs=null;function Nr(...i){let t="THREE."+i.shift();Hs?Hs("log",t,...i):console.log(t,...i)}function Pf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Kt(...i){i=Pf(i);let t="THREE."+i.shift();if(Hs)Hs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Qt(...i){i=Pf(i);let t="THREE."+i.shift();if(Hs)Hs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ts(...i){let t=i.join(" ");t in xu||(xu[t]=!0,Kt(...i))}function Lf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Df={[mo]:go,[xo]:vo,[yo]:Mo,[Os]:_o,[go]:mo,[vo]:xo,[Mo]:yo,[_o]:Os},ei=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yu=1234567,Tr=Math.PI/180,Gs=180/Math.PI;function Qn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function ce(i,t,e){return Math.max(t,Math.min(e,i))}function mh(i,t){return(i%t+t)%t}function gp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function xp(i,t,e){return i!==t?(e-i)/(t-i):0}function Ar(i,t,e){return(1-e)*i+e*t}function yp(i,t,e,n){return Ar(i,t,1-Math.exp(-e*n))}function _p(i,t=1){return t-Math.abs(mh(i,t*2)-t)}function vp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Mp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Sp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function bp(i,t){return i+Math.random()*(t-i)}function Ep(i){return i*(.5-Math.random())}function wp(i){i!==void 0&&(yu=i);let t=yu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Tp(i){return i*Tr}function Ap(i){return i*Gs}function Rp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Cp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ip(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Pp(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),d=r((n-t)/2),x=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*x,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*x,o*c);break;case"ZYZ":i.set(l*x,l*d,o*h,o*c);break;default:Kt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function kn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ga={DEG2RAD:Tr,RAD2DEG:Gs,generateUUID:Qn,clamp:ce,euclideanModulo:mh,mapLinear:gp,inverseLerp:xp,lerp:Ar,damp:yp,pingpong:_p,smoothstep:vp,smootherstep:Mp,randInt:Sp,randFloat:bp,randFloatSpread:Ep,seededRandom:wp,degToRad:Tp,radToDeg:Ap,isPowerOfTwo:Rp,ceilPowerOfTwo:Cp,floorPowerOfTwo:Ip,setQuaternionFromProperEuler:Pp,normalize:Se,denormalize:kn},Mh=class Mh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Mh.prototype.isVector2=!0;var gt=Mh,bn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],d=r[a+1],x=r[a+2],y=r[a+3];if(u!==y||l!==f||c!==d||h!==x){let p=l*f+c*d+h*x+u*y;p<0&&(f=-f,d=-d,x=-x,y=-y,p=-p);let m=1-o;if(p<.9995){let S=Math.acos(p),A=Math.sin(S);m=Math.sin(m*S)/A,o=Math.sin(o*S)/A,l=l*m+f*o,c=c*m+d*o,h=h*m+x*o,u=u*m+y*o}else{l=l*m+f*o,c=c*m+d*o,h=h*m+x*o,u=u*m+y*o;let S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],x=r[a+3];return t[e]=o*x+h*u+l*d-c*f,t[e+1]=l*x+h*f+c*u-o*d,t[e+2]=c*x+h*d+o*f-l*u,t[e+3]=h*x-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),d=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u-f*d*x;break;case"YXZ":this._x=f*h*u+c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u+f*d*x;break;case"ZXY":this._x=f*h*u-c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u-f*d*x;break;case"ZYX":this._x=f*h*u-c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u+f*d*x;break;case"YZX":this._x=f*h*u+c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u-f*d*x;break;case"XZY":this._x=f*h*u-c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u+f*d*x;break;default:Kt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Sh=class Sh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_u.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_u.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return uc.copy(this).projectOnVector(t),this.sub(uc)}reflect(t){return this.sub(uc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sh.prototype.isVector3=!0;var B=Sh,uc=new B,_u=new bn,bh=class bh{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],x=n[8],y=s[0],p=s[3],m=s[6],S=s[1],A=s[4],g=s[7],E=s[2],b=s[5],L=s[8];return r[0]=a*y+o*S+l*E,r[3]=a*p+o*A+l*b,r[6]=a*m+o*g+l*L,r[1]=c*y+h*S+u*E,r[4]=c*p+h*A+u*b,r[7]=c*m+h*g+u*L,r[2]=f*y+d*S+x*E,r[5]=f*p+d*A+x*b,r[8]=f*m+d*g+x*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,x=e*u+n*f+s*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return t[0]=u*y,t[1]=(s*c-h*n)*y,t[2]=(o*n-s*a)*y,t[3]=f*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=d*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return ts("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fc.makeScale(t,e)),this}rotate(t){return ts("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fc.makeRotation(-t)),this}translate(t,e){return ts("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};bh.prototype.isMatrix3=!0;var ee=bh,fc=new ee,vu=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mu=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lp(){let i={enabled:!0,workingColorSpace:Pr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ve&&(s.r=di(s.r),s.g=di(s.g),s.b=di(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ve&&(s.r=zs(s.r),s.g=zs(s.g),s.b=zs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xi?Lr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ts("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ts("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Pr]:{primaries:t,whitePoint:n,transfer:Lr,toXYZ:vu,fromXYZ:Mu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:t,whitePoint:n,transfer:ve,toXYZ:vu,fromXYZ:Mu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}}),i}var fe=Lp();function di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var _s,Eo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{_s===void 0&&(_s=Dr("canvas")),_s.width=t.width,_s.height=t.height;let s=_s.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=_s}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Dr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=di(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(di(e[n]/255)*255):e[n]=di(e[n]);return{data:e,width:t.width,height:t.height}}else return Kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Dp=0,Vs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=Qn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(dc(s[a].image)):r.push(dc(s[a]))}else r=dc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function dc(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Eo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Kt("Texture: Unable to serialize Texture."),{})}var Np=0,pc=new B,mn=class i extends ei{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=jn,s=jn,r=nn,a=ki,o=In,l=_n,c=i.DEFAULT_ANISOTROPY,h=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=Qn(),this.name="",this.source=new Vs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(pc).x}get height(){return this.source.getSize(pc).y}get depth(){return this.source.getSize(pc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Kt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ah)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bs:t.x=t.x-Math.floor(t.x);break;case jn:t.x=t.x<0?0:1;break;case So:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bs:t.y=t.y-Math.floor(t.y);break;case jn:t.y=t.y<0?0:1;break;case So:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=ah;mn.DEFAULT_ANISOTROPY=1;var Eh=class Eh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],x=l[9],y=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(x+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,g=(d+1)/2,E=(m+1)/2,b=(h+f)/4,L=(u+y)/4,_=(x+p)/4;return A>g&&A>E?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=b/n,r=L/n):g>E?g<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),n=b/s,r=_/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=L/r,s=_/r),this.set(n,s,r,e),this}let S=Math.sqrt((p-x)*(p-x)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(p-x)/S,this.y=(u-y)/S,this.z=(f-h)/S,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Eh.prototype.isVector4=!0;var Ne=Eh,wo=class extends ei{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new mn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Vs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},yn=class extends wo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ur=class extends mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var To=class extends mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Jo=class Jo{constructor(t,e,n,s,r,a,o,l,c,h,u,f,d,x,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,d,x,y,p)}set(t,e,n,s,r,a,o,l,c,h,u,f,d,x,y,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=x,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jo().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/vs.setFromMatrixColumn(t,0).length(),r=1/vs.setFromMatrixColumn(t,1).length(),a=1/vs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,d=a*u,x=o*h,y=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+x*c,e[5]=f-y*c,e[9]=-o*l,e[2]=y-f*c,e[6]=x+d*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,x=c*h,y=c*u;e[0]=f+y*o,e[4]=x*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-x,e[6]=y+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,x=c*h,y=c*u;e[0]=f-y*o,e[4]=-a*u,e[8]=x+d*o,e[1]=d+x*o,e[5]=a*h,e[9]=y-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,d=a*u,x=o*h,y=o*u;e[0]=l*h,e[4]=x*c-d,e[8]=f*c+y,e[1]=l*u,e[5]=y*c+f,e[9]=d*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,d=a*c,x=o*l,y=o*c;e[0]=l*h,e[4]=y-f*u,e[8]=x*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+x,e[10]=f-y*u}else if(t.order==="XZY"){let f=a*l,d=a*c,x=o*l,y=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+y,e[5]=a*h,e[9]=d*u-x,e[2]=x*u-d,e[6]=o*h,e[10]=y*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Up,t,Fp)}lookAt(t,e,n){let s=this.elements;return Mn.subVectors(t,e),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Ti.crossVectors(n,Mn),Ti.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Ti.crossVectors(n,Mn)),Ti.normalize(),Ba.crossVectors(Mn,Ti),s[0]=Ti.x,s[4]=Ba.x,s[8]=Mn.x,s[1]=Ti.y,s[5]=Ba.y,s[9]=Mn.y,s[2]=Ti.z,s[6]=Ba.z,s[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],x=n[2],y=n[6],p=n[10],m=n[14],S=n[3],A=n[7],g=n[11],E=n[15],b=s[0],L=s[4],_=s[8],w=s[12],D=s[1],U=s[5],M=s[9],P=s[13],I=s[2],C=s[6],N=s[10],F=s[14],k=s[3],O=s[7],Y=s[11],X=s[15];return r[0]=a*b+o*D+l*I+c*k,r[4]=a*L+o*U+l*C+c*O,r[8]=a*_+o*M+l*N+c*Y,r[12]=a*w+o*P+l*F+c*X,r[1]=h*b+u*D+f*I+d*k,r[5]=h*L+u*U+f*C+d*O,r[9]=h*_+u*M+f*N+d*Y,r[13]=h*w+u*P+f*F+d*X,r[2]=x*b+y*D+p*I+m*k,r[6]=x*L+y*U+p*C+m*O,r[10]=x*_+y*M+p*N+m*Y,r[14]=x*w+y*P+p*F+m*X,r[3]=S*b+A*D+g*I+E*k,r[7]=S*L+A*U+g*C+E*O,r[11]=S*_+A*M+g*N+E*Y,r[15]=S*w+A*P+g*F+E*X,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],x=t[3],y=t[7],p=t[11],m=t[15],S=l*d-c*f,A=o*d-c*u,g=o*f-l*u,E=a*d-c*h,b=a*f-l*h,L=a*u-o*h;return e*(y*S-p*A+m*g)-n*(x*S-p*E+m*b)+s*(x*A-y*E+m*L)-r*(x*g-y*b+p*L)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],x=t[12],y=t[13],p=t[14],m=t[15],S=e*o-n*a,A=e*l-s*a,g=e*c-r*a,E=n*l-s*o,b=n*c-r*o,L=s*c-r*l,_=h*y-u*x,w=h*p-f*x,D=h*m-d*x,U=u*p-f*y,M=u*m-d*y,P=f*m-d*p,I=S*P-A*M+g*U+E*D-b*w+L*_;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/I;return t[0]=(o*P-l*M+c*U)*C,t[1]=(s*M-n*P-r*U)*C,t[2]=(y*L-p*b+m*E)*C,t[3]=(f*b-u*L-d*E)*C,t[4]=(l*D-a*P-c*w)*C,t[5]=(e*P-s*D+r*w)*C,t[6]=(p*g-x*L-m*A)*C,t[7]=(h*L-f*g+d*A)*C,t[8]=(a*M-o*D+c*_)*C,t[9]=(n*D-e*M-r*_)*C,t[10]=(x*b-y*g+m*S)*C,t[11]=(u*g-h*b-d*S)*C,t[12]=(o*w-a*U-l*_)*C,t[13]=(e*U-n*w+s*_)*C,t[14]=(y*A-x*E-p*S)*C,t[15]=(h*E-u*A+f*S)*C,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,x=r*u,y=a*h,p=a*u,m=o*u,S=l*c,A=l*h,g=l*u,E=n.x,b=n.y,L=n.z;return s[0]=(1-(y+m))*E,s[1]=(d+g)*E,s[2]=(x-A)*E,s[3]=0,s[4]=(d-g)*b,s[5]=(1-(f+m))*b,s[6]=(p+S)*b,s[7]=0,s[8]=(x+A)*L,s[9]=(p-S)*L,s[10]=(1-(f+y))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=vs.set(s[0],s[1],s[2]).length(),o=vs.set(s[4],s[5],s[6]).length(),l=vs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Fn.copy(this);let c=1/a,h=1/o,u=1/l;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=h,Fn.elements[5]*=h,Fn.elements[6]*=h,Fn.elements[8]*=u,Fn.elements[9]*=u,Fn.elements[10]*=u,e.setFromRotationMatrix(Fn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Hn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),x,y;if(l)x=r/(a-r),y=a*r/(a-r);else if(o===Hn)x=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===ks)x=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Hn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),x,y;if(l)x=1/(a-r),y=a/(a-r);else if(o===Hn)x=-2/(a-r),y=-(a+r)/(a-r);else if(o===ks)x=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Jo.prototype.isMatrix4=!0;var xe=Jo,vs=new B,Fn=new xe,Up=new B(0,0,0),Fp=new B(1,1,1),Ti=new B,Ba=new B,Mn=new B,Su=new xe,bu=new bn,En=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ce(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Su.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Su,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bu.setFromEuler(this),this.setFromQuaternion(bu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};En.DEFAULT_ORDER="XYZ";var Fr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},zp=0,Eu=new B,Ms=new bn,oi=new xe,ka=new B,gr=new B,Op=new B,Bp=new bn,wu=new B(1,0,0),Tu=new B(0,1,0),Au=new B(0,0,1),Ru={type:"added"},kp={type:"removed"},Ss={type:"childadded",child:null},mc={type:"childremoved",child:null},Ye=class i extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new B,e=new En,n=new bn,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new ee}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ms.setFromAxisAngle(t,e),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(t,e){return Ms.setFromAxisAngle(t,e),this.quaternion.premultiply(Ms),this}rotateX(t){return this.rotateOnAxis(wu,t)}rotateY(t){return this.rotateOnAxis(Tu,t)}rotateZ(t){return this.rotateOnAxis(Au,t)}translateOnAxis(t,e){return Eu.copy(t).applyQuaternion(this.quaternion),this.position.add(Eu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wu,t)}translateY(t){return this.translateOnAxis(Tu,t)}translateZ(t){return this.translateOnAxis(Au,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ka.copy(t):ka.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(gr,ka,this.up):oi.lookAt(ka,gr,this.up),this.quaternion.setFromRotationMatrix(oi),s&&(oi.extractRotation(s.matrixWorld),Ms.setFromRotationMatrix(oi),this.quaternion.premultiply(Ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ru),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kp),mc.child=t,this.dispatchEvent(mc),mc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ru),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,t,Op),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,Bp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ye.DEFAULT_UP=new B(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ie=class extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},Hp={type:"move"},Ws=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,n),m=this._getHandJoint(c,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,x=.005;c.inputState.pinching&&f>d+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Nf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},Ha={h:0,s:0,l:0};function gc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Dt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=fe.workingColorSpace){if(t=mh(t,1),e=ce(e,0,1),n=ce(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=gc(a,r,t+1/3),this.g=gc(a,r,t),this.b=gc(a,r,t-1/3)}return fe.colorSpaceToWorking(this,s),this}setStyle(t,e=Ce){function n(r){r!==void 0&&parseFloat(r)<1&&Kt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Kt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){let n=Nf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}copyLinearToSRGB(t){return this.r=zs(t.r),this.g=zs(t.g),this.b=zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return fe.workingToColorSpace(on.copy(this),t),Math.round(ce(on.r*255,0,255))*65536+Math.round(ce(on.g*255,0,255))*256+Math.round(ce(on.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.workingToColorSpace(on.copy(this),e);let n=on.r,s=on.g,r=on.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=fe.workingColorSpace){return fe.workingToColorSpace(on.copy(this),e),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=Ce){fe.workingToColorSpace(on.copy(this),t);let e=on.r,n=on.g,s=on.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ai),this.setHSL(Ai.h+t,Ai.s+e,Ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ai),t.getHSL(Ha);let n=Ar(Ai.h,Ha.h,e),s=Ar(Ai.s,Ha.s,e),r=Ar(Ai.l,Ha.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new Dt;Dt.NAMES=Nf;var Xs=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Dt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},pi=class extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},zn=new B,li=new B,xc=new B,ci=new B,bs=new B,Es=new B,Cu=new B,yc=new B,_c=new B,vc=new B,Mc=new Ne,Sc=new Ne,bc=new Ne,fi=class i{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),zn.subVectors(t,e),s.cross(zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){zn.subVectors(s,e),li.subVectors(n,e),xc.subVectors(t,e);let a=zn.dot(zn),o=zn.dot(li),l=zn.dot(xc),c=li.dot(li),h=li.dot(xc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,x=(a*h-o*l)*f;return r.set(1-d-x,x,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ci.x),l.addScaledVector(a,ci.y),l.addScaledVector(o,ci.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Mc.setScalar(0),Sc.setScalar(0),bc.setScalar(0),Mc.fromBufferAttribute(t,e),Sc.fromBufferAttribute(t,n),bc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Mc,r.x),a.addScaledVector(Sc,r.y),a.addScaledVector(bc,r.z),a}static isFrontFacing(t,e,n,s){return zn.subVectors(n,e),li.subVectors(t,e),zn.cross(li).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),zn.cross(li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;bs.subVectors(s,n),Es.subVectors(r,n),yc.subVectors(t,n);let l=bs.dot(yc),c=Es.dot(yc);if(l<=0&&c<=0)return e.copy(n);_c.subVectors(t,s);let h=bs.dot(_c),u=Es.dot(_c);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(bs,a);vc.subVectors(t,r);let d=bs.dot(vc),x=Es.dot(vc);if(x>=0&&d<=x)return e.copy(r);let y=d*c-l*x;if(y<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(n).addScaledVector(Es,o);let p=h*x-d*u;if(p<=0&&u-h>=0&&d-x>=0)return Cu.subVectors(r,s),o=(u-h)/(u-h+(d-x)),e.copy(s).addScaledVector(Cu,o);let m=1/(p+y+f);return a=y*m,o=f*m,e.copy(n).addScaledVector(bs,a).addScaledVector(Es,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ni=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(On.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(On.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=On.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,On):On.fromBufferAttribute(r,a),On.applyMatrix4(t.matrixWorld),this.expandByPoint(On);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ga.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ga.copy(n.boundingBox)),Ga.applyMatrix4(t.matrixWorld),this.union(Ga)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,On),On.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xr),Va.subVectors(this.max,xr),ws.subVectors(t.a,xr),Ts.subVectors(t.b,xr),As.subVectors(t.c,xr),Ri.subVectors(Ts,ws),Ci.subVectors(As,Ts),$i.subVectors(ws,As);let e=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-$i.z,$i.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,$i.z,0,-$i.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-$i.y,$i.x,0];return!Ec(e,ws,Ts,As,Va)||(e=[1,0,0,0,1,0,0,0,1],!Ec(e,ws,Ts,As,Va))?!1:(Wa.crossVectors(Ri,Ci),e=[Wa.x,Wa.y,Wa.z],Ec(e,ws,Ts,As,Va))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,On).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(On).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},hi=[new B,new B,new B,new B,new B,new B,new B,new B],On=new B,Ga=new ni,ws=new B,Ts=new B,As=new B,Ri=new B,Ci=new B,$i=new B,xr=new B,Va=new B,Wa=new B,Ji=new B;function Ec(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ji.fromArray(i,r);let o=s.x*Math.abs(Ji.x)+s.y*Math.abs(Ji.y)+s.z*Math.abs(Ji.z),l=t.dot(Ji),c=e.dot(Ji),h=n.dot(Ji);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Xe=new B,Xa=new gt,Gp=0,Ie=class extends ei{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=dh,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Xa.fromBufferAttribute(this,e),Xa.applyMatrix3(t),this.setXY(e,Xa.x,Xa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix3(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=kn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=kn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=kn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=kn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=kn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var zr=class extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Or=class extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var pe=class extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}},Vp=new ni,yr=new B,wc=new B,mi=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Vp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yr.subVectors(t,this.center);let e=yr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(yr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yr.copy(t.center).add(wc)),this.expandByPoint(yr.copy(t.center).sub(wc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Wp=0,Rn=new xe,Tc=new Ye,Rs=new B,Sn=new ni,_r=new ni,Qe=new B,Pe=class i extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pp(t)?Or:zr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return Tc.lookAt(t),Tc.updateMatrix(),this.applyMatrix4(Tc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];_r.setFromBufferAttribute(o),this.morphTargetsRelative?(Qe.addVectors(Sn.min,_r.min),Sn.expandByPoint(Qe),Qe.addVectors(Sn.max,_r.max),Sn.expandByPoint(Qe)):(Sn.expandByPoint(_r.min),Sn.expandByPoint(_r.max))}Sn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Qe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Qe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Qe.fromBufferAttribute(o,c),l&&(Rs.fromBufferAttribute(t,c),Qe.add(Rs)),s=Math.max(s,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ie(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new B,l[_]=new B;let c=new B,h=new B,u=new B,f=new gt,d=new gt,x=new gt,y=new B,p=new B;function m(_,w,D){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,D),f.fromBufferAttribute(r,_),d.fromBufferAttribute(r,w),x.fromBufferAttribute(r,D),h.sub(c),u.sub(c),d.sub(f),x.sub(f);let U=1/(d.x*x.y-x.x*d.y);isFinite(U)&&(y.copy(h).multiplyScalar(x.y).addScaledVector(u,-d.y).multiplyScalar(U),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-x.x).multiplyScalar(U),o[_].add(y),o[w].add(y),o[D].add(y),l[_].add(p),l[w].add(p),l[D].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let _=0,w=S.length;_<w;++_){let D=S[_],U=D.start,M=D.count;for(let P=U,I=U+M;P<I;P+=3)m(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let A=new B,g=new B,E=new B,b=new B;function L(_){E.fromBufferAttribute(s,_),b.copy(E);let w=o[_];A.copy(w),A.sub(E.multiplyScalar(E.dot(w))).normalize(),g.crossVectors(b,w);let U=g.dot(l[_])<0?-1:1;a.setXYZW(_,A.x,A.y,A.z,U)}for(let _=0,w=S.length;_<w;++_){let D=S[_],U=D.start,M=D.count;for(let P=U,I=U+M;P<I;P+=3)L(t.getX(P+0)),L(t.getX(P+1)),L(t.getX(P+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,h=new B,u=new B;if(t)for(let f=0,d=t.count;f<d;f+=3){let x=t.getX(f+0),y=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,x=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?d=l[y]*o.data.stride+o.offset:d=l[y]*h;for(let m=0;m<h;m++)f[x++]=c[d++]}return new Ie(f,h,u)}if(this.index===null)return Kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Br=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=dh,this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},pn=new B,Ys=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyMatrix4(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyNormalMatrix(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.transformDirection(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=kn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=kn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=kn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=kn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=kn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array),r=Se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Nr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ie(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Nr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ac=new B,Xp=new B,Yp=new ee,Bn=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ac.subVectors(n,e).cross(Xp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ac),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Yp.getNormalMatrix(t),s=this.coplanarPoint(Ac).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},qp=0,Gn=class extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=Qn(),this.name="",this.type="Material",this.blending=Oi,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jc,this.blendDst=Qc,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=po,this.stencilZFail=po,this.stencilZPass=po,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Kt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Dt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Bn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new gt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new gt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},qs=class extends Gn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Cs,vr=new B,Is=new B,Ps=new B,Ls=new gt,Mr=new gt,Uf=new xe,Ya=new B,Sr=new B,qa=new B,Iu=new gt,Rc=new gt,Pu=new gt,kr=class extends Ye{constructor(t=new qs){if(super(),this.isSprite=!0,this.type="Sprite",Cs===void 0){Cs=new Pe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Br(e,5);Cs.setIndex([0,1,2,0,2,3]),Cs.setAttribute("position",new Ys(n,3,0,!1)),Cs.setAttribute("uv",new Ys(n,2,3,!1))}this.geometry=Cs,this.material=t,this.center=new gt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Qt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Is.setFromMatrixScale(this.matrixWorld),Uf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ps.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Is.multiplyScalar(-Ps.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Za(Ya.set(-.5,-.5,0),Ps,a,Is,s,r),Za(Sr.set(.5,-.5,0),Ps,a,Is,s,r),Za(qa.set(.5,.5,0),Ps,a,Is,s,r),Iu.set(0,0),Rc.set(1,0),Pu.set(1,1);let o=t.ray.intersectTriangle(Ya,Sr,qa,!1,vr);if(o===null&&(Za(Sr.set(-.5,.5,0),Ps,a,Is,s,r),Rc.set(0,1),o=t.ray.intersectTriangle(Ya,qa,Sr,!1,vr),o===null))return;let l=t.ray.origin.distanceTo(vr);l<t.near||l>t.far||e.push({distance:l,point:vr.clone(),uv:fi.getInterpolation(vr,Ya,Sr,qa,Iu,Rc,Pu,new gt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Za(i,t,e,n,s,r){Ls.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Mr.x=r*Ls.x-s*Ls.y,Mr.y=s*Ls.x+r*Ls.y):Mr.copy(Ls),i.copy(t),i.x+=Mr.x,i.y+=Mr.y,i.applyMatrix4(Uf)}var ui=new B,Cc=new B,$a=new B,Ja=new B,Hr=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ui.copy(this.origin).addScaledVector(this.direction,e),ui.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Cc.copy(t).add(e).multiplyScalar(.5),$a.copy(e).sub(t).normalize(),Ja.copy(this.origin).sub(Cc);let r=t.distanceTo(e)*.5,a=-this.direction.dot($a),o=Ja.dot(this.direction),l=-Ja.dot($a),c=Ja.lengthSq(),h=Math.abs(1-a*a),u,f,d,x;if(h>0)if(u=a*l-o,f=a*o-l,x=r*h,u>=0)if(f>=-x)if(f<=x){let y=1/h;u*=y,f*=y,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-x?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=x?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Cc).addScaledVector($a,f),d}intersectSphere(t,e){if(t.radius<0)return null;ui.subVectors(t.center,this.origin);let n=ui.dot(this.direction),s=ui.dot(ui)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ui)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,f=t.y-a.y,d=t.z-a.z,x=e.x-a.x,y=e.y-a.y,p=e.z-a.z,m=n.x-a.x,S=n.y-a.y,A=n.z-a.z,g=Math.abs(l),E=Math.abs(c),b=Math.abs(h),L,_,w,D,U,M,P,I,C,N,F,k;if(g>=E&&g>=b?(w=l,M=u,C=x,k=m,l>=0?(L=c,_=h,D=f,U=d,P=y,I=p,N=S,F=A):(L=h,_=c,D=d,U=f,P=p,I=y,N=A,F=S)):E>=b?(w=c,M=f,C=y,k=S,c>=0?(L=h,_=l,D=d,U=u,P=p,I=x,N=A,F=m):(L=l,_=h,D=u,U=d,P=x,I=p,N=m,F=A)):(w=h,M=d,C=p,k=A,h>=0?(L=l,_=c,D=u,U=f,P=x,I=y,N=m,F=S):(L=c,_=l,D=f,U=u,P=y,I=x,N=S,F=m)),w===0)return null;let O=L/w,Y=_/w,X=1/w,at=D-O*M,ot=U-Y*M,Ct=P-O*C,zt=I-Y*C,Zt=N-O*k,q=F-Y*k,et=Zt*zt-q*Ct,yt=at*q-ot*Zt,Wt=Ct*ot-zt*at;if(s){if(et<0||yt<0||Wt<0)return null}else if((et<0||yt<0||Wt<0)&&(et>0||yt>0||Wt>0))return null;let wt=et+yt+Wt;if(wt===0)return null;let jt=X*(et*M+yt*C+Wt*k);return(wt>0?jt<0:jt>0)?null:this.at(jt/wt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},be=class extends Gn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Lu=new xe,Ki=new Hr,Ka=new mi,Du=new B,ja=new B,Qa=new B,to=new B,Ic=new B,eo=new B,Nu=new B,no=new B,nt=class extends Ye{constructor(t=new Pe,e=new be){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){eo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Ic.fromBufferAttribute(u,t),a?eo.addScaledVector(Ic,h):eo.addScaledVector(Ic.sub(e),h))}e.add(eo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ka.copy(n.boundingSphere),Ka.applyMatrix4(r),Ki.copy(t.ray).recast(t.near),!(Ka.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(Ka,Du)===null||Ki.origin.distanceToSquared(Du)>(t.far-t.near)**2))&&(Lu.copy(r).invert(),Ki.copy(t.ray).applyMatrix4(Lu),!(n.boundingBox!==null&&Ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ki)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,y=f.length;x<y;x++){let p=f[x],m=a[p.materialIndex],S=Math.max(p.start,d.start),A=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let g=S,E=A;g<E;g+=3){let b=o.getX(g),L=o.getX(g+1),_=o.getX(g+2);s=io(this,m,t,n,c,h,u,b,L,_),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let p=x,m=y;p<m;p+=3){let S=o.getX(p),A=o.getX(p+1),g=o.getX(p+2);s=io(this,a,t,n,c,h,u,S,A,g),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,y=f.length;x<y;x++){let p=f[x],m=a[p.materialIndex],S=Math.max(p.start,d.start),A=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let g=S,E=A;g<E;g+=3){let b=g,L=g+1,_=g+2;s=io(this,m,t,n,c,h,u,b,L,_),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let p=x,m=y;p<m;p+=3){let S=p,A=p+1,g=p+2;s=io(this,a,t,n,c,h,u,S,A,g),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Zp(i,t,e,n,s,r,a,o){let l;if(t.side===Je?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===zi,o),l===null)return null;no.copy(o),no.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(no);return c<e.near||c>e.far?null:{distance:c,point:no.clone(),object:i}}function io(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ja),i.getVertexPosition(l,Qa),i.getVertexPosition(c,to);let h=Zp(i,t,e,n,ja,Qa,to,Nu);if(h){let u=new B;fi.getBarycoord(Nu,ja,Qa,to,u),s&&(h.uv=fi.getInterpolatedAttribute(s,o,l,c,u,new gt)),r&&(h.uv1=fi.getInterpolatedAttribute(r,o,l,c,u,new gt)),a&&(h.normal=fi.getInterpolatedAttribute(a,o,l,c,u,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new B,materialIndex:0};fi.getNormal(ja,Qa,to,f.normal),h.face=f,h.barycoord=u}return h}var Gr=class extends mn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=tn,h=tn,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zs=class extends Ie{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ds=new xe,Uu=new xe,so=[],Fu=new ni,$p=new xe,br=new nt,Er=new mi,Vr=class extends nt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Zs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,$p)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ni),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ds),Fu.copy(t.boundingBox).applyMatrix4(Ds),this.boundingBox.union(Fu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new mi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ds),Er.copy(t.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(Er)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(br.geometry=this.geometry,br.material=this.material,br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Er.copy(this.boundingSphere),Er.applyMatrix4(n),t.ray.intersectsSphere(Er)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ds),Uu.multiplyMatrices(n,Ds),br.matrixWorld=Uu,br.raycast(t,so);for(let a=0,o=so.length;a<o;a++){let l=so[a];l.instanceId=r,l.object=this,e.push(l)}so.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Zs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Gr(new Float32Array(s*this.count),s,this.count,rl,Cn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ji=new mi,Jp=new gt(.5,.5),ro=new B,$s=class{constructor(t=new Bn,e=new Bn,n=new Bn,s=new Bn,r=new Bn,a=new Bn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],x=r[8],y=r[9],p=r[10],m=r[11],S=r[12],A=r[13],g=r[14],E=r[15];if(s[0].setComponents(c-a,d-h,m-x,E-S).normalize(),s[1].setComponents(c+a,d+h,m+x,E+S).normalize(),s[2].setComponents(c+o,d+u,m+y,E+A).normalize(),s[3].setComponents(c-o,d-u,m-y,E-A).normalize(),n)s[4].setComponents(l,f,p,g).normalize(),s[5].setComponents(c-l,d-f,m-p,E-g).normalize();else if(s[4].setComponents(c-l,d-f,m-p,E-g).normalize(),e===Hn)s[5].setComponents(c+l,d+f,m+p,E+g).normalize();else if(e===ks)s[5].setComponents(l,f,p,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(t){ji.center.set(0,0,0);let e=Jp.distanceTo(t.center);return ji.radius=.7071067811865476+e,ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ro.x=s.normal.x>0?t.max.x:t.min.x,ro.y=s.normal.y>0?t.max.y:t.min.y,ro.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ro)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var es=class extends Gn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},zu=new xe,kc=new Hr,ao=new mi,oo=new B,ns=class extends Ye{constructor(t=new Pe,e=new es){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(s),ao.radius+=r,t.ray.intersectsSphere(ao)===!1)return;zu.copy(s).invert(),kc.copy(t.ray).applyMatrix4(zu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let x=f,y=d;x<y;x++){let p=c.getX(x);oo.fromBufferAttribute(u,p),Ou(oo,p,l,s,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let x=f,y=d;x<y;x++)oo.fromBufferAttribute(u,x),Ou(oo,x,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ou(i,t,e,n,s,r,a){let o=kc.distanceSqToPoint(i);if(o<e){let l=new B;kc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Wr=class extends mn{constructor(t=[],e=Bi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},gn=class extends mn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Pi=class extends mn{constructor(t,e,n=Wn,s,r,a,o=tn,l=tn,c,h=ti,u=1){if(h!==ti&&h!==Hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Vs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ao=class extends Pi{constructor(t,e=Wn,n=Bi,s,r,a=tn,o=tn,l,c=ti){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Xr=class extends mn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ae=class i extends Pe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(u,2));function x(y,p,m,S,A,g,E,b,L,_,w){let D=g/L,U=E/_,M=g/2,P=E/2,I=b/2,C=L+1,N=_+1,F=0,k=0,O=new B;for(let Y=0;Y<N;Y++){let X=Y*U-P;for(let at=0;at<C;at++){let ot=at*D-M;O[y]=ot*S,O[p]=X*A,O[m]=I,c.push(O.x,O.y,O.z),O[y]=0,O[p]=0,O[m]=b>0?1:-1,h.push(O.x,O.y,O.z),u.push(at/L),u.push(1-Y/_),F+=1}}for(let Y=0;Y<_;Y++)for(let X=0;X<L;X++){let at=f+X+C*Y,ot=f+X+C*(Y+1),Ct=f+(X+1)+C*(Y+1),zt=f+(X+1)+C*Y;l.push(at,ot,zt),l.push(ot,Ct,zt),k+=6}o.addGroup(d,k,w),d+=k,f+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Js=class i extends Pe{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,u=Math.PI/2*t,f=e,d=2*u+f,x=n*2+r,y=s+1,p=new B,m=new B;for(let S=0;S<=x;S++){let A=0,g=0,E=0,b=0;if(S<=n){let w=S/n,D=w*Math.PI/2;g=-h-t*Math.cos(D),E=t*Math.sin(D),b=-t*Math.cos(D),A=w*u}else if(S<=n+r){let w=(S-n)/r;g=-h+w*e,E=t,b=0,A=u+w*f}else{let w=(S-n-r)/n,D=w*Math.PI/2;g=h+t*Math.sin(D),E=t*Math.cos(D),b=t*Math.sin(D),A=u+f+w*u}let L=Math.max(0,Math.min(1,A/d)),_=0;S===0?_=.5/s:S===x&&(_=-.5/s);for(let w=0;w<=s;w++){let D=w/s,U=D*Math.PI*2,M=Math.sin(U),P=Math.cos(U);m.x=-E*P,m.y=g,m.z=E*M,o.push(m.x,m.y,m.z),p.set(-E*P,b,E*M),p.normalize(),l.push(p.x,p.y,p.z),c.push(D+_,L)}if(S>0){let w=(S-1)*y;for(let D=0;D<s;D++){let U=w+D,M=w+D+1,P=S*y+D,I=S*y+D+1;a.push(U,M,P),a.push(M,I,P)}}}this.setIndex(a),this.setAttribute("position",new pe(o,3)),this.setAttribute("normal",new pe(l,3)),this.setAttribute("uv",new pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},is=class i extends Pe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new B,h=new gt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new pe(a,3)),this.setAttribute("normal",new pe(o,3)),this.setAttribute("uv",new pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Nt=class i extends Pe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],x=0,y=[],p=n/2,m=0;S(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new pe(u,3)),this.setAttribute("normal",new pe(f,3)),this.setAttribute("uv",new pe(d,2));function S(){let g=new B,E=new B,b=0,L=(e-t)/n;for(let _=0;_<=r;_++){let w=[],D=_/r,U=D*(e-t)+t;for(let M=0;M<=s;M++){let P=M/s,I=P*l+o,C=Math.sin(I),N=Math.cos(I);E.x=U*C,E.y=-D*n+p,E.z=U*N,u.push(E.x,E.y,E.z),g.set(C,L,N).normalize(),f.push(g.x,g.y,g.z),d.push(P,1-D),w.push(x++)}y.push(w)}for(let _=0;_<s;_++)for(let w=0;w<r;w++){let D=y[w][_],U=y[w+1][_],M=y[w+1][_+1],P=y[w][_+1];(t>0||w!==0)&&(h.push(D,U,P),b+=3),(e>0||w!==r-1)&&(h.push(U,M,P),b+=3)}c.addGroup(m,b,0),m+=b}function A(g){let E=x,b=new gt,L=new B,_=0,w=g===!0?t:e,D=g===!0?1:-1;for(let M=1;M<=s;M++)u.push(0,p*D,0),f.push(0,D,0),d.push(.5,.5),x++;let U=x;for(let M=0;M<=s;M++){let I=M/s*l+o,C=Math.cos(I),N=Math.sin(I);L.x=w*N,L.y=p*D,L.z=w*C,u.push(L.x,L.y,L.z),f.push(0,D,0),b.x=C*.5+.5,b.y=N*.5*D+.5,d.push(b.x,b.y),x++}for(let M=0;M<s;M++){let P=E+M,I=U+M;g===!0?h.push(I,I+1,P):h.push(I+1,I,P),_+=3}c.addGroup(m,_,g===!0?1:2),m+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ge=class i extends Nt{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ro=class i extends Pe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new pe(r,3)),this.setAttribute("normal",new pe(r.slice(),3)),this.setAttribute("uv",new pe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let A=new B,g=new B,E=new B;for(let b=0;b<e.length;b+=3)d(e[b+0],A),d(e[b+1],g),d(e[b+2],E),l(A,g,E,S)}function l(S,A,g,E){let b=E+1,L=[];for(let _=0;_<=b;_++){L[_]=[];let w=S.clone().lerp(g,_/b),D=A.clone().lerp(g,_/b),U=b-_;for(let M=0;M<=U;M++)M===0&&_===b?L[_][M]=w:L[_][M]=w.clone().lerp(D,M/U)}for(let _=0;_<b;_++)for(let w=0;w<2*(b-_)-1;w++){let D=Math.floor(w/2);w%2===0?(f(L[_][D+1]),f(L[_+1][D]),f(L[_][D])):(f(L[_][D+1]),f(L[_+1][D+1]),f(L[_+1][D]))}}function c(S){let A=new B;for(let g=0;g<r.length;g+=3)A.x=r[g+0],A.y=r[g+1],A.z=r[g+2],A.normalize().multiplyScalar(S),r[g+0]=A.x,r[g+1]=A.y,r[g+2]=A.z}function h(){let S=new B;for(let A=0;A<r.length;A+=3){S.x=r[A+0],S.y=r[A+1],S.z=r[A+2];let g=p(S)/2/Math.PI+.5,E=m(S)/Math.PI+.5;a.push(g,1-E)}x(),u()}function u(){for(let S=0;S<a.length;S+=6){let A=a[S+0],g=a[S+2],E=a[S+4],b=Math.max(A,g,E),L=Math.min(A,g,E);b>.9&&L<.1&&(A<.2&&(a[S+0]+=1),g<.2&&(a[S+2]+=1),E<.2&&(a[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function d(S,A){let g=S*3;A.x=t[g+0],A.y=t[g+1],A.z=t[g+2]}function x(){let S=new B,A=new B,g=new B,E=new B,b=new gt,L=new gt,_=new gt;for(let w=0,D=0;w<r.length;w+=9,D+=6){S.set(r[w+0],r[w+1],r[w+2]),A.set(r[w+3],r[w+4],r[w+5]),g.set(r[w+6],r[w+7],r[w+8]),b.set(a[D+0],a[D+1]),L.set(a[D+2],a[D+3]),_.set(a[D+4],a[D+5]),E.copy(S).add(A).add(g).divideScalar(3);let U=p(E);y(b,D+0,S,U),y(L,D+2,A,U),y(_,D+4,g,U)}}function y(S,A,g,E){E<0&&S.x===1&&(a[A]=S.x-1),g.x===0&&g.z===0&&(a[A]=E/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Kt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new gt:new B);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new B,s=[],r=[],a=[],o=new B,l=new xe;for(let d=0;d<=t;d++){let x=d/t;s[d]=this.getTangentAt(x,new B)}r[0]=new B,a[0]=new B;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(ce(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,x))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ce(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],d*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ks=class extends wn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new gt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Co=class extends Ks{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function gh(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Bu=new B,ku=new B,Pc=new gh,Lc=new gh,Dc=new gh,Io=class extends wn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new B){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(ku.subVectors(s[0],s[1]).add(s[0]),c=ku);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Bu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Bu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(u),d),y=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);y<1e-4&&(y=1),x<1e-4&&(x=y),p<1e-4&&(p=y),Pc.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,x,y,p),Lc.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,x,y,p),Dc.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,x,y,p)}else this.curveType==="catmullrom"&&(Pc.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Lc.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Dc.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Pc.calc(l),Lc.calc(l),Dc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new B().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Hu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Kp(i,t){let e=1-i;return e*e*t}function jp(i,t){return 2*(1-i)*i*t}function Qp(i,t){return i*i*t}function Rr(i,t,e,n){return Kp(i,t)+jp(i,e)+Qp(i,n)}function tm(i,t){let e=1-i;return e*e*e*t}function em(i,t){let e=1-i;return 3*e*e*i*t}function nm(i,t){return 3*(1-i)*i*i*t}function im(i,t){return i*i*i*t}function Cr(i,t,e,n,s){return tm(i,t)+em(i,e)+nm(i,n)+im(i,s)}var Yr=class extends wn{constructor(t=new gt,e=new gt,n=new gt,s=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new gt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Cr(t,s.x,r.x,a.x,o.x),Cr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Po=class extends wn{constructor(t=new B,e=new B,n=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new B){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Cr(t,s.x,r.x,a.x,o.x),Cr(t,s.y,r.y,a.y,o.y),Cr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},qr=class extends wn{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Lo=class extends wn{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zr=class extends wn{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Rr(t,s.x,r.x,a.x),Rr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Do=class extends wn{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Rr(t,s.x,r.x,a.x),Rr(t,s.y,r.y,a.y),Rr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$r=class extends wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Hu(o,l.x,c.x,h.x,u.x),Hu(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new gt().fromArray(s))}return this}},Hc=Object.freeze({__proto__:null,ArcCurve:Co,CatmullRomCurve3:Io,CubicBezierCurve:Yr,CubicBezierCurve3:Po,EllipseCurve:Ks,LineCurve:qr,LineCurve3:Lo,QuadraticBezierCurve:Zr,QuadraticBezierCurve3:Do,SplineCurve:$r}),No=class extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Hc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Hc[s.type]().fromJSON(s))}return this}},Jr=class extends No{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new qr(this.currentPoint.clone(),new gt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Zr(this.currentPoint.clone(),new gt(t,e),new gt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Yr(this.currentPoint.clone(),new gt(t,e),new gt(n,s),new gt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new $r(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Ks(t,e,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Li=class extends Jr{constructor(t){super(t),this.uuid=Qn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Jr().fromJSON(s))}return this}};function sm(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Ff(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=cm(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,u=l;for(let f=e;f<s;f+=e){let d=i[f],x=i[f+1];d<o&&(o=d),x<l&&(l=x),d>h&&(h=d),x>u&&(u=x)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Kr(r,a,e,o,l,c,0),a}function Ff(i,t,e,n,s){let r;if(s===vm(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Gu(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Gu(a/n|0,i[a],i[a+1],r);return r&&js(r,r.next)&&(Qr(r),r=r.next),r}function ss(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(js(e,e.next)||Oe(e.prev,e,e.next)===0)){if(Qr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Kr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&pm(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?am(i,n,s,r):rm(i)){t.push(l.i,i.i,c.i),Qr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=om(ss(i),t),Kr(i,t,e,n,s,r,2)):a===2&&lm(i,t,e,n,s,r):Kr(ss(i),t,e,n,s,r,1);break}}}function rm(i){let t=i.prev,e=i,n=i.next;if(Oe(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),f=Math.max(s,r,a),d=Math.max(o,l,c),x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=f&&x.y>=u&&x.y<=d&&wr(s,o,r,l,a,c,x.x,x.y)&&Oe(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function am(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Oe(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,d=Math.min(o,l,c),x=Math.min(h,u,f),y=Math.max(o,l,c),p=Math.max(h,u,f),m=Gc(d,x,t,e,n),S=Gc(y,p,t,e,n),A=i.prevZ,g=i.nextZ;for(;A&&A.z>=m&&g&&g.z<=S;){if(A.x>=d&&A.x<=y&&A.y>=x&&A.y<=p&&A!==s&&A!==a&&wr(o,h,l,u,c,f,A.x,A.y)&&Oe(A.prev,A,A.next)>=0||(A=A.prevZ,g.x>=d&&g.x<=y&&g.y>=x&&g.y<=p&&g!==s&&g!==a&&wr(o,h,l,u,c,f,g.x,g.y)&&Oe(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;A&&A.z>=m;){if(A.x>=d&&A.x<=y&&A.y>=x&&A.y<=p&&A!==s&&A!==a&&wr(o,h,l,u,c,f,A.x,A.y)&&Oe(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;g&&g.z<=S;){if(g.x>=d&&g.x<=y&&g.y>=x&&g.y<=p&&g!==s&&g!==a&&wr(o,h,l,u,c,f,g.x,g.y)&&Oe(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function om(i,t){let e=i;do{let n=e.prev,s=e.next.next;!js(n,s)&&Of(n,e,e.next,s)&&jr(n,s)&&jr(s,n)&&(t.push(n.i,e.i,s.i),Qr(e),Qr(e.next),e=i=s),e=e.next}while(e!==i);return ss(e)}function lm(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&xm(a,o)){let l=Bf(a,o);a=ss(a,a.next),l=ss(l,l.next),Kr(a,t,e,n,s,r,0),Kr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function cm(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Ff(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(gm(c))}s.sort(hm);for(let r=0;r<s.length;r++)e=um(s[r],e);return e}function hm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function um(i,t){let e=fm(i,t);if(!e)return t;let n=Bf(e,i);return ss(n,n.next),ss(e,e.next)}function fm(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(js(i,e))return e;do{if(js(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&zf(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);jr(e,i)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&dm(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function dm(i,t){return Oe(i.prev,i,t.prev)<0&&Oe(t.next,i,i.next)<0}function pm(i,t,e,n){let s=i;do s.z===0&&(s.z=Gc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,mm(s)}function mm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Gc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function gm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function zf(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function wr(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&zf(i,t,e,n,s,r,a,o)}function xm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!ym(i,t)&&(jr(i,t)&&jr(t,i)&&_m(i,t)&&(Oe(i.prev,i,t.prev)||Oe(i,t.prev,t))||js(i,t)&&Oe(i.prev,i,i.next)>0&&Oe(t.prev,t,t.next)>0)}function Oe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function js(i,t){return i.x===t.x&&i.y===t.y}function Of(i,t,e,n){let s=co(Oe(i,t,e)),r=co(Oe(i,t,n)),a=co(Oe(e,n,i)),o=co(Oe(e,n,t));return!!(s!==r&&a!==o||s===0&&lo(i,e,t)||r===0&&lo(i,n,t)||a===0&&lo(e,i,n)||o===0&&lo(e,t,n))}function lo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function co(i){return i>0?1:i<0?-1:0}function ym(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Of(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function jr(i,t){return Oe(i.prev,i,i.next)<0?Oe(i,t,i.next)>=0&&Oe(i,i.prev,t)>=0:Oe(i,t,i.prev)<0||Oe(i,i.next,t)<0}function _m(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Bf(i,t){let e=Vc(i.i,i.x,i.y),n=Vc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Gu(i,t,e,n){let s=Vc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Qr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Vc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function vm(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Wc=class{static triangulate(t,e,n=2){return sm(t,e,n)}},Qi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Vu(t),Wu(n,t);let a=t.length;e.forEach(Vu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Wu(n,e[l]);let o=Wc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Vu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Wu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Di=class i extends Pe{constructor(t=new Li([new gt(.5,.5),new gt(-.5,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new pe(s,3)),this.setAttribute("uv",new pe(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Mm,A,g=!1,E,b,L,_;if(m){A=m.getSpacedPoints(h),g=!0,f=!1;let it=m.isCatmullRomCurve3?m.closed:!1;E=m.computeFrenetFrames(h,it),b=new B,L=new B,_=new B}f||(p=0,d=0,x=0,y=0);let w=o.extractPoints(c),D=w.shape,U=w.holes;if(!Qi.isClockWise(D)){D=D.reverse();for(let it=0,ct=U.length;it<ct;it++){let dt=U[it];Qi.isClockWise(dt)&&(U[it]=dt.reverse())}}function P(it){let dt=10000000000000001e-36,mt=it[0];for(let _t=1;_t<=it.length;_t++){let $t=_t%it.length,Xt=it[$t],J=Xt.x-mt.x,lt=Xt.y-mt.y,z=J*J+lt*lt,Yt=Math.max(Math.abs(Xt.x),Math.abs(Xt.y),Math.abs(mt.x),Math.abs(mt.y)),Gt=dt*Yt*Yt;if(z<=Gt){it.splice($t,1),_t--;continue}mt=Xt}}P(D),U.forEach(P);let I=U.length,C=D;for(let it=0;it<I;it++){let ct=U[it];D=D.concat(ct)}function N(it,ct,dt){return ct||Qt("ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(ct,dt)}let F=D.length;function k(it,ct,dt){let mt,_t,$t,Xt=it.x-ct.x,J=it.y-ct.y,lt=dt.x-it.x,z=dt.y-it.y,Yt=Xt*Xt+J*J,Gt=Xt*z-J*lt;if(Math.abs(Gt)>Number.EPSILON){let R=Math.sqrt(Yt),v=Math.sqrt(lt*lt+z*z),H=ct.x-J/R,G=ct.y+Xt/R,K=dt.x-z/v,ut=dt.y+lt/v,xt=((K-H)*z-(ut-G)*lt)/(Xt*z-J*lt);mt=H+Xt*xt-it.x,_t=G+J*xt-it.y;let tt=mt*mt+_t*_t;if(tt<=2)return new gt(mt,_t);$t=Math.sqrt(tt/2)}else{let R=!1;Xt>Number.EPSILON?lt>Number.EPSILON&&(R=!0):Xt<-Number.EPSILON?lt<-Number.EPSILON&&(R=!0):Math.sign(J)===Math.sign(z)&&(R=!0),R?(mt=-J,_t=Xt,$t=Math.sqrt(Yt)):(mt=Xt,_t=J,$t=Math.sqrt(Yt/2))}return new gt(mt/$t,_t/$t)}let O=[];for(let it=0,ct=C.length,dt=ct-1,mt=it+1;it<ct;it++,dt++,mt++)dt===ct&&(dt=0),mt===ct&&(mt=0),O[it]=k(C[it],C[dt],C[mt]);let Y=[],X,at=O.concat();for(let it=0,ct=I;it<ct;it++){let dt=U[it];X=[];for(let mt=0,_t=dt.length,$t=_t-1,Xt=mt+1;mt<_t;mt++,$t++,Xt++)$t===_t&&($t=0),Xt===_t&&(Xt=0),X[mt]=k(dt[mt],dt[$t],dt[Xt]);Y.push(X),at=at.concat(X)}let ot;if(p===0)ot=Qi.triangulateShape(C,U);else{let it=[],ct=[];for(let dt=0;dt<p;dt++){let mt=dt/p,_t=d*Math.cos(mt*Math.PI/2),$t=x*Math.sin(mt*Math.PI/2)+y;for(let Xt=0,J=C.length;Xt<J;Xt++){let lt=N(C[Xt],O[Xt],$t);yt(lt.x,lt.y,-_t),mt===0&&it.push(lt)}for(let Xt=0,J=I;Xt<J;Xt++){let lt=U[Xt];X=Y[Xt];let z=[];for(let Yt=0,Gt=lt.length;Yt<Gt;Yt++){let R=N(lt[Yt],X[Yt],$t);yt(R.x,R.y,-_t),mt===0&&z.push(R)}mt===0&&ct.push(z)}}ot=Qi.triangulateShape(it,ct)}let Ct=ot.length,zt=x+y;for(let it=0;it<F;it++){let ct=f?N(D[it],at[it],zt):D[it];g?(L.copy(E.normals[0]).multiplyScalar(ct.x),b.copy(E.binormals[0]).multiplyScalar(ct.y),_.copy(A[0]).add(L).add(b),yt(_.x,_.y,_.z)):yt(ct.x,ct.y,0)}for(let it=1;it<=h;it++)for(let ct=0;ct<F;ct++){let dt=f?N(D[ct],at[ct],zt):D[ct];g?(L.copy(E.normals[it]).multiplyScalar(dt.x),b.copy(E.binormals[it]).multiplyScalar(dt.y),_.copy(A[it]).add(L).add(b),yt(_.x,_.y,_.z)):yt(dt.x,dt.y,u/h*it)}for(let it=p-1;it>=0;it--){let ct=it/p,dt=d*Math.cos(ct*Math.PI/2),mt=x*Math.sin(ct*Math.PI/2)+y;for(let _t=0,$t=C.length;_t<$t;_t++){let Xt=N(C[_t],O[_t],mt);yt(Xt.x,Xt.y,u+dt)}for(let _t=0,$t=U.length;_t<$t;_t++){let Xt=U[_t];X=Y[_t];for(let J=0,lt=Xt.length;J<lt;J++){let z=N(Xt[J],X[J],mt);g?yt(z.x,z.y+A[h-1].y,A[h-1].x+dt):yt(z.x,z.y,u+dt)}}}Zt(),q();function Zt(){let it=s.length/3;if(f){let ct=0,dt=F*ct;for(let mt=0;mt<Ct;mt++){let _t=ot[mt];Wt(_t[2]+dt,_t[1]+dt,_t[0]+dt)}ct=h+p*2,dt=F*ct;for(let mt=0;mt<Ct;mt++){let _t=ot[mt];Wt(_t[0]+dt,_t[1]+dt,_t[2]+dt)}}else{for(let ct=0;ct<Ct;ct++){let dt=ot[ct];Wt(dt[2],dt[1],dt[0])}for(let ct=0;ct<Ct;ct++){let dt=ot[ct];Wt(dt[0]+F*h,dt[1]+F*h,dt[2]+F*h)}}n.addGroup(it,s.length/3-it,0)}function q(){let it=s.length/3,ct=0;et(C,ct),ct+=C.length;for(let dt=0,mt=U.length;dt<mt;dt++){let _t=U[dt];et(_t,ct),ct+=_t.length}n.addGroup(it,s.length/3-it,1)}function et(it,ct){let dt=it.length;for(;--dt>=0;){let mt=dt,_t=dt-1;_t<0&&(_t=it.length-1);for(let $t=0,Xt=h+p*2;$t<Xt;$t++){let J=F*$t,lt=F*($t+1),z=ct+mt+J,Yt=ct+_t+J,Gt=ct+_t+lt,R=ct+mt+lt;wt(z,Yt,Gt,R)}}}function yt(it,ct,dt){l.push(it),l.push(ct),l.push(dt)}function Wt(it,ct,dt){jt(it),jt(ct),jt(dt);let mt=s.length/3,_t=S.generateTopUV(n,s,mt-3,mt-2,mt-1);de(_t[0]),de(_t[1]),de(_t[2])}function wt(it,ct,dt,mt){jt(it),jt(ct),jt(mt),jt(ct),jt(dt),jt(mt);let _t=s.length/3,$t=S.generateSideWallUV(n,s,_t-6,_t-3,_t-2,_t-1);de($t[0]),de($t[1]),de($t[3]),de($t[1]),de($t[2]),de($t[3])}function jt(it){s.push(l[it*3+0]),s.push(l[it*3+1]),s.push(l[it*3+2])}function de(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Sm(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Hc[s.type]().fromJSON(s)),new i(n,t.options)}},Mm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new gt(r,a),new gt(o,l),new gt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],x=t[s*3+2],y=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new gt(a,1-l),new gt(c,1-u),new gt(f,1-x),new gt(y,1-m)]:[new gt(o,1-l),new gt(h,1-u),new gt(d,1-x),new gt(p,1-m)]}};function Sm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Qs=class i extends Ro{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Be=class i extends Pe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,d=[],x=[],y=[],p=[];for(let m=0;m<h;m++){let S=m*f-a;for(let A=0;A<c;A++){let g=A*u-r;x.push(g,-S,0),y.push(0,0,1),p.push(A/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){let A=S+c*m,g=S+c*(m+1),E=S+1+c*(m+1),b=S+1+c*m;d.push(A,g,b),d.push(g,E,b)}this.setIndex(d),this.setAttribute("position",new pe(x,3)),this.setAttribute("normal",new pe(y,3)),this.setAttribute("uv",new pe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ee=class i extends Pe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new B,f=new B,d=[],x=[],y=[],p=[];for(let m=0;m<=n;m++){let S=[],A=m/n,g=a+A*o,E=t*Math.cos(g),b=Math.sqrt(t*t-E*E),L=0;m===0&&a===0?L=.5/e:m===n&&l===Math.PI&&(L=-.5/e);for(let _=0;_<=e;_++){let w=_/e,D=s+w*r;u.x=-b*Math.cos(D),u.y=E,u.z=b*Math.sin(D),x.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),p.push(w+L,1-A),S.push(c++)}h.push(S)}for(let m=0;m<n;m++)for(let S=0;S<e;S++){let A=h[m][S+1],g=h[m][S],E=h[m+1][S],b=h[m+1][S+1];(m!==0||a>0)&&d.push(A,g,b),(m!==n-1||l<Math.PI)&&d.push(g,E,b)}this.setIndex(d),this.setAttribute("position",new pe(x,3)),this.setAttribute("normal",new pe(y,3)),this.setAttribute("uv",new pe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Me=class i extends Pe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=new B,d=new B,x=new B;for(let y=0;y<=n;y++){let p=a+y/n*o;for(let m=0;m<=s;m++){let S=m/s*r;d.x=(t+e*Math.cos(p))*Math.cos(S),d.y=(t+e*Math.cos(p))*Math.sin(S),d.z=e*Math.sin(p),c.push(d.x,d.y,d.z),f.x=t*Math.cos(S),f.y=t*Math.sin(S),x.subVectors(d,f).normalize(),h.push(x.x,x.y,x.z),u.push(m/s),u.push(y/n)}}for(let y=1;y<=n;y++)for(let p=1;p<=s;p++){let m=(s+1)*y+p-1,S=(s+1)*(y-1)+p-1,A=(s+1)*(y-1)+p,g=(s+1)*y+p;l.push(m,S,g),l.push(S,A,g)}this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function cs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Xu(s))s.isRenderTargetTexture?(Kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Xu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function ln(i){let t={};for(let e=0;e<i.length;e++){let n=cs(i[e]);for(let s in n)t[s]=n[s]}return t}function Xu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function bm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function xh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}var kf={clone:cs,merge:ln},Em=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qe=class extends Gn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Em,this.fragmentShader=wm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cs(t.uniforms),this.uniformsGroups=bm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Dt().setHex(s.value);break;case"v2":this.uniforms[n].value=new gt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new B().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ne().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ee().fromArray(s.value);break;case"m4":this.uniforms[n].value=new xe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Uo=class extends qe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},he=class extends Gn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ma,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ta=class extends he{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ce(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var ea=class extends Gn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ma,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=jo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Fo=class extends Gn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},zo=class extends Gn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ns(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Nc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ni=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Oo=class extends Ni{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zc,endingEnd:zc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Oc:r=t,o=2*e-n;break;case Bc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Oc:a=t,l=2*n-e;break;case Bc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,x=(n-e)/(s-e),y=x*x,p=y*x,m=-f*p+2*f*y-f*x,S=(1+f)*p+(-1.5-2*f)*y+(-.5+f)*x+1,A=(-1-d)*p+(1.5+d)*y+.5*x,g=d*p-d*y;for(let E=0;E!==o;++E)r[E]=m*a[h+E]+S*a[c+E]+A*a[l+E]+g*a[u+E];return r}},Bo=class extends Ni{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},ko=class extends Ni{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ho=class extends Ni{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let x=(n-e)/(s-e),y=1-x;for(let p=0;p!==o;++p)r[p]=a[c+p]*y+a[l+p]*x;return r}let f=o*2,d=t-1;for(let x=0;x!==o;++x){let y=a[c+x],p=a[l+x],m=d*f+x*2,S=u[m],A=u[m+1],g=t*f+x*2,E=h[g],b=h[g+1],L=Am(n,e,S,E,s);r[x]=Hf(L,y,A,b,p)}return r}};function Hf(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Tm(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Am(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Hf(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Tm(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Tn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ns(e,this.TimeBufferType),this.values=Ns(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ns(t.times,Array),values:Ns(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Nc(t.settings)&&(n.settings={inTangents:Ns(t.settings.inTangents,Array),outTangents:Ns(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ko(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Bo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Oo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ho(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ir:e=this.InterpolantFactoryMethodDiscrete;break;case bo:e=this.InterpolantFactoryMethodLinear;break;case fo:e=this.InterpolantFactoryMethodSmooth;break;case Fc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Kt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ir;case this.InterpolantFactoryMethodLinear:return bo;case this.InterpolantFactoryMethodSmooth:return fo;case this.InterpolantFactoryMethodBezier:return Fc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Nc(this.settings)&&(Yu(this.settings.inTangents,t),Yu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Qt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Qt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Qt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&mp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Qt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===fo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,f=u-n,d=u+n;for(let x=0;x!==n;++x){let y=e[u+x];if(y!==e[f+x]||y!==e[d+x]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Nc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Yu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Tn.prototype.ValueTypeName="";Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=bo;var Ui=class extends Tn{constructor(t,e,n){super(t,e,n)}};Ui.prototype.ValueTypeName="bool";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=Ir;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Go=class extends Tn{constructor(t,e,n,s){super(t,e,n,s)}};Go.prototype.ValueTypeName="color";var Vo=class extends Tn{constructor(t,e,n,s){super(t,e,n,s)}};Vo.prototype.ValueTypeName="number";var Wo=class extends Ni{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)bn.slerpFlat(r,0,a,c-o,a,c,l);return r}},na=class extends Tn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Wo(this.times,this.values,this.getValueSize(),t)}};na.prototype.ValueTypeName="quaternion";na.prototype.InterpolantFactoryMethodSmooth=void 0;var Fi=class extends Tn{constructor(t,e,n){super(t,e,n)}};Fi.prototype.ValueTypeName="string";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=Ir;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Xo=class extends Tn{constructor(t,e,n,s){super(t,e,n,s)}};Xo.prototype.ValueTypeName="vector";var Yo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],x=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Gf=new Yo,qo=class{constructor(t){this.manager=t!==void 0?t:Gf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};qo.DEFAULT_MATERIAL_NAME="__DEFAULT";var tr=class extends Ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},rs=class extends tr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Uc=new xe,qu=new B,Zu=new B,ia=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $s,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;qu.setFromMatrixPosition(t.matrixWorld),e.position.copy(qu),Zu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Uc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Uc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===ks||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Uc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ho=new B,uo=new bn,Kn=new B,sa=class extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ho,uo,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ho,uo,Kn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ho,uo,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ho,uo,Kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ii=new B,$u=new gt,Ju=new gt,$e=class extends sa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Gs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Tr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gs*2*Math.atan(Math.tan(Tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z)}getViewSize(t,e){return this.getViewBounds(t,$u,Ju),e.subVectors(Ju,$u)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Tr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Xc=class extends ia{constructor(){super(new $e(90,1,.5,500)),this.isPointLightShadow=!0}},ra=class extends tr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Xc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},er=class extends sa{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Yc=class extends ia{constructor(){super(new er(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},as=class extends tr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new Yc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Us=-90,Fs=1,Zo=class extends Ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $e(Us,Fs,t,e);s.layers=this.layers,this.add(s);let r=new $e(Us,Fs,t,e);r.layers=this.layers,this.add(r);let a=new $e(Us,Fs,t,e);a.layers=this.layers,this.add(a);let o=new $e(Us,Fs,t,e);o.layers=this.layers,this.add(o);let l=new $e(Us,Fs,t,e);l.layers=this.layers,this.add(l);let c=new $e(Us,Fs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},$o=class extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var yh="\\[\\]\\.:\\/",Rm=new RegExp("["+yh+"]","g"),_h="[^"+yh+"]",Cm="[^"+yh.replace("\\.","")+"]",Im=/((?:WC+[\/:])*)/.source.replace("WC",_h),Pm=/(WCOD+)?/.source.replace("WCOD",Cm),Lm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_h),Dm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_h),Nm=new RegExp("^"+Im+Pm+Lm+Dm+"$"),Um=["material","materials","bones","map"],qc=class{constructor(t,e,n){let s=n||Fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Fe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Rm,"")}static parseTrackName(t){let e=Nm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Um.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Qt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fe.Composite=qc;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rv=new Float32Array(1);var wh=class wh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};wh.prototype.isMatrix2=!0;var Zc=wh;function vh(i,t,e,n){let s=Fm(n);switch(e){case uh:return i*t;case rl:return i*t/s.components*s.byteLength;case al:return i*t/s.components*s.byteLength;case Gi:return i*t*2/s.components*s.byteLength;case ol:return i*t*2/s.components*s.byteLength;case fh:return i*t*3/s.components*s.byteLength;case In:return i*t*4/s.components*s.byteLength;case ll:return i*t*4/s.components*s.byteLength;case ca:case ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ua:case fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case hl:case fl:return Math.max(i,16)*Math.max(t,8)/4;case cl:case ul:return Math.max(i,8)*Math.max(t,8)/2;case dl:case pl:case gl:case xl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ml:case da:case yl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _l:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ml:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case bl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case El:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case wl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Tl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Al:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Il:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Pl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ll:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Dl:case Nl:case Ul:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Fl:case zl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case pa:case Ol:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Fm(i){switch(i){case _n:case oh:return{byteLength:1,components:1};case sr:case lh:case Xn:return{byteLength:2,components:1};case il:case sl:return{byteLength:2,components:4};case Wn:case nl:case Cn:return{byteLength:4,components:1};case ch:case hh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function hd(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Hm(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,x)=>d.start-x.start);let f=0;for(let d=1;d<u.length;d++){let x=u[f],y=u[d];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++f,u[f]=y)}u.length=f+1;for(let d=0,x=u.length;d<x;d++){let y=u[d];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Gm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vm=`#ifdef USE_ALPHAHASH
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
#endif`,Wm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ym=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zm=`#ifdef USE_AOMAP
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
#endif`,$m=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jm=`#ifdef USE_BATCHING
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
#endif`,Km=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,t0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,e0=`#ifdef USE_IRIDESCENCE
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
#endif`,n0=`#ifdef USE_BUMPMAP
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
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,o0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,l0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,c0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,h0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,u0=`#define PI 3.141592653589793
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
} // validated`,f0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,d0=`vec3 transformedNormal = objectNormal;
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
#endif`,p0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,x0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,y0="gl_FragColor = linearToOutputTexel( gl_FragColor );",_0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,v0=`#ifdef USE_ENVMAP
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
#endif`,M0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,S0=`#ifdef USE_ENVMAP
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
#endif`,b0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,E0=`#ifdef USE_ENVMAP
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
#endif`,w0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,T0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,A0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,R0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,C0=`#ifdef USE_GRADIENTMAP
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
}`,I0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,P0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,L0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,D0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,N0=`#ifdef USE_ENVMAP
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
#endif`,U0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,F0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,z0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,O0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B0=`PhysicalMaterial material;
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
#endif`,k0=`uniform sampler2D dfgLUT;
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
}`,H0=`
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
#endif`,G0=`#if defined( RE_IndirectDiffuse )
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
#endif`,V0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,W0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,X0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Y0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,J0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,j0=`#if defined( USE_POINTS_UV )
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
#endif`,Q0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ng=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ig=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sg=`#ifdef USE_MORPHTARGETS
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
#endif`,rg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ag=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,og=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ug=`#ifdef USE_NORMALMAP
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
#endif`,fg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_g=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Eg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ag=`float getShadowMask() {
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
}`,Rg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cg=`#ifdef USE_SKINNING
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
#endif`,Ig=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pg=`#ifdef USE_SKINNING
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
#endif`,Lg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ng=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ug=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fg=`#ifdef USE_TRANSMISSION
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
#endif`,zg=`#ifdef USE_TRANSMISSION
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
#endif`,Og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Gg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vg=`uniform sampler2D t2D;
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
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zg=`#include <common>
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
}`,$g=`#if DEPTH_PACKING == 3200
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
}`,Jg=`#define DISTANCE
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
}`,Kg=`#define DISTANCE
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
}`,jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tx=`uniform float scale;
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
}`,ex=`uniform vec3 diffuse;
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
}`,nx=`#include <common>
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
}`,ix=`uniform vec3 diffuse;
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
}`,sx=`#define LAMBERT
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
}`,rx=`#define LAMBERT
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
}`,ax=`#define MATCAP
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
}`,ox=`#define MATCAP
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
}`,lx=`#define NORMAL
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
}`,cx=`#define NORMAL
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
}`,hx=`#define PHONG
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
}`,ux=`#define PHONG
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
}`,fx=`#define STANDARD
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
}`,dx=`#define STANDARD
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
}`,px=`#define TOON
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
}`,mx=`#define TOON
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
}`,gx=`uniform float size;
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
}`,xx=`uniform vec3 diffuse;
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
}`,yx=`#include <common>
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
}`,_x=`uniform vec3 color;
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
}`,vx=`uniform float rotation;
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
}`,Mx=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:Gm,alphahash_pars_fragment:Vm,alphamap_fragment:Wm,alphamap_pars_fragment:Xm,alphatest_fragment:Ym,alphatest_pars_fragment:qm,aomap_fragment:Zm,aomap_pars_fragment:$m,batching_pars_vertex:Jm,batching_vertex:Km,begin_vertex:jm,beginnormal_vertex:Qm,bsdfs:t0,iridescence_fragment:e0,bumpmap_pars_fragment:n0,clipping_planes_fragment:i0,clipping_planes_pars_fragment:s0,clipping_planes_pars_vertex:r0,clipping_planes_vertex:a0,color_fragment:o0,color_pars_fragment:l0,color_pars_vertex:c0,color_vertex:h0,common:u0,cube_uv_reflection_fragment:f0,defaultnormal_vertex:d0,displacementmap_pars_vertex:p0,displacementmap_vertex:m0,emissivemap_fragment:g0,emissivemap_pars_fragment:x0,colorspace_fragment:y0,colorspace_pars_fragment:_0,envmap_fragment:v0,envmap_common_pars_fragment:M0,envmap_pars_fragment:S0,envmap_pars_vertex:b0,envmap_physical_pars_fragment:N0,envmap_vertex:E0,fog_vertex:w0,fog_pars_vertex:T0,fog_fragment:A0,fog_pars_fragment:R0,gradientmap_pars_fragment:C0,lightmap_pars_fragment:I0,lights_lambert_fragment:P0,lights_lambert_pars_fragment:L0,lights_pars_begin:D0,lights_toon_fragment:U0,lights_toon_pars_fragment:F0,lights_phong_fragment:z0,lights_phong_pars_fragment:O0,lights_physical_fragment:B0,lights_physical_pars_fragment:k0,lights_fragment_begin:H0,lights_fragment_maps:G0,lights_fragment_end:V0,lightprobes_pars_fragment:W0,logdepthbuf_fragment:X0,logdepthbuf_pars_fragment:Y0,logdepthbuf_pars_vertex:q0,logdepthbuf_vertex:Z0,map_fragment:$0,map_pars_fragment:J0,map_particle_fragment:K0,map_particle_pars_fragment:j0,metalnessmap_fragment:Q0,metalnessmap_pars_fragment:tg,morphinstance_vertex:eg,morphcolor_vertex:ng,morphnormal_vertex:ig,morphtarget_pars_vertex:sg,morphtarget_vertex:rg,normal_fragment_begin:ag,normal_fragment_maps:og,normal_pars_fragment:lg,normal_pars_vertex:cg,normal_vertex:hg,normalmap_pars_fragment:ug,clearcoat_normal_fragment_begin:fg,clearcoat_normal_fragment_maps:dg,clearcoat_pars_fragment:pg,iridescence_pars_fragment:mg,opaque_fragment:gg,packing:xg,premultiplied_alpha_fragment:yg,project_vertex:_g,dithering_fragment:vg,dithering_pars_fragment:Mg,roughnessmap_fragment:Sg,roughnessmap_pars_fragment:bg,shadowmap_pars_fragment:Eg,shadowmap_pars_vertex:wg,shadowmap_vertex:Tg,shadowmask_pars_fragment:Ag,skinbase_vertex:Rg,skinning_pars_vertex:Cg,skinning_vertex:Ig,skinnormal_vertex:Pg,specularmap_fragment:Lg,specularmap_pars_fragment:Dg,tonemapping_fragment:Ng,tonemapping_pars_fragment:Ug,transmission_fragment:Fg,transmission_pars_fragment:zg,uv_pars_fragment:Og,uv_pars_vertex:Bg,uv_vertex:kg,worldpos_vertex:Hg,background_vert:Gg,background_frag:Vg,backgroundCube_vert:Wg,backgroundCube_frag:Xg,cube_vert:Yg,cube_frag:qg,depth_vert:Zg,depth_frag:$g,distance_vert:Jg,distance_frag:Kg,equirect_vert:jg,equirect_frag:Qg,linedashed_vert:tx,linedashed_frag:ex,meshbasic_vert:nx,meshbasic_frag:ix,meshlambert_vert:sx,meshlambert_frag:rx,meshmatcap_vert:ax,meshmatcap_frag:ox,meshnormal_vert:lx,meshnormal_frag:cx,meshphong_vert:hx,meshphong_frag:ux,meshphysical_vert:fx,meshphysical_frag:dx,meshtoon_vert:px,meshtoon_frag:mx,points_vert:gx,points_frag:xx,shadow_vert:yx,shadow_frag:_x,sprite_vert:vx,sprite_frag:Mx},Tt={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},ri={basic:{uniforms:ln([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:ln([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Dt(0)},envMapIntensity:{value:1}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:ln([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:ln([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:ln([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:ln([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:ln([Tt.points,Tt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:ln([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:ln([Tt.common,Tt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:ln([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:ln([Tt.sprite,Tt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distance:{uniforms:ln([Tt.common,Tt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distance_vert,fragmentShader:le.distance_frag},shadow:{uniforms:ln([Tt.lights,Tt.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};ri.physical={uniforms:ln([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};var Hl={r:0,b:0,g:0},Sx=new xe,ud=new ee;ud.set(-1,0,0,0,1,0,0,0,1);function bx(i,t,e,n,s,r){let a=new Dt(0),o=s===!0?0:1,l,c,h=null,u=0,f=null;function d(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){let g=S.backgroundBlurriness>0;A=t.get(A,g)}return A}function x(S){let A=!1,g=d(S);g===null?p(a,o):g&&g.isColor&&(p(g,1),A=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(S,A){let g=d(A);g&&(g.isCubeTexture||g.mapping===oa)?(c===void 0&&(c=new nt(new Ae(1,1,1),new qe({name:"BackgroundCubeMaterial",uniforms:cs(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Sx.makeRotationFromEuler(A.backgroundRotation)).transpose(),g.isCubeTexture&&g.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ud),c.material.toneMapped=fe.getTransfer(g.colorSpace)!==ve,(h!==g||u!==g.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=g,u=g.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new nt(new Be(2,2),new qe({name:"BackgroundMaterial",uniforms:cs(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=fe.getTransfer(g.colorSpace)!==ve,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||u!==g.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=g,u=g.version,f=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,A){S.getRGB(Hl,xh(i)),e.buffers.color.setClear(Hl.r,Hl.g,Hl.b,A,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,A=1){a.set(S),o=A,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,p(a,o)},render:x,addToRenderList:y,dispose:m}}function Ex(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(U,M,P,I,C){let N=!1,F=u(U,I,P,M);r!==F&&(r=F,c(r.object)),N=d(U,I,P,C),N&&x(U,I,P,C),C!==null&&t.update(C,i.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,g(U,M,P,I),C!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(C).buffer))}function l(){return i.createVertexArray()}function c(U){return i.bindVertexArray(U)}function h(U){return i.deleteVertexArray(U)}function u(U,M,P,I){let C=I.wireframe===!0,N=n[M.id];N===void 0&&(N={},n[M.id]=N);let F=U.isInstancedMesh===!0?U.id:0,k=N[F];k===void 0&&(k={},N[F]=k);let O=k[P.id];O===void 0&&(O={},k[P.id]=O);let Y=O[C];return Y===void 0&&(Y=f(l()),O[C]=Y),Y}function f(U){let M=[],P=[],I=[];for(let C=0;C<e;C++)M[C]=0,P[C]=0,I[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:P,attributeDivisors:I,object:U,attributes:{},index:null}}function d(U,M,P,I){let C=r.attributes,N=M.attributes,F=0,k=P.getAttributes();for(let O in k)if(k[O].location>=0){let X=C[O],at=N[O];if(at===void 0&&(O==="instanceMatrix"&&U.instanceMatrix&&(at=U.instanceMatrix),O==="instanceColor"&&U.instanceColor&&(at=U.instanceColor)),X===void 0||X.attribute!==at||at&&X.data!==at.data)return!0;F++}return r.attributesNum!==F||r.index!==I}function x(U,M,P,I){let C={},N=M.attributes,F=0,k=P.getAttributes();for(let O in k)if(k[O].location>=0){let X=N[O];X===void 0&&(O==="instanceMatrix"&&U.instanceMatrix&&(X=U.instanceMatrix),O==="instanceColor"&&U.instanceColor&&(X=U.instanceColor));let at={};at.attribute=X,X&&X.data&&(at.data=X.data),C[O]=at,F++}r.attributes=C,r.attributesNum=F,r.index=I}function y(){let U=r.newAttributes;for(let M=0,P=U.length;M<P;M++)U[M]=0}function p(U){m(U,0)}function m(U,M){let P=r.newAttributes,I=r.enabledAttributes,C=r.attributeDivisors;P[U]=1,I[U]===0&&(i.enableVertexAttribArray(U),I[U]=1),C[U]!==M&&(i.vertexAttribDivisor(U,M),C[U]=M)}function S(){let U=r.newAttributes,M=r.enabledAttributes;for(let P=0,I=M.length;P<I;P++)M[P]!==U[P]&&(i.disableVertexAttribArray(P),M[P]=0)}function A(U,M,P,I,C,N,F){F===!0?i.vertexAttribIPointer(U,M,P,C,N):i.vertexAttribPointer(U,M,P,I,C,N)}function g(U,M,P,I){y();let C=I.attributes,N=P.getAttributes(),F=M.defaultAttributeValues;for(let k in N){let O=N[k];if(O.location>=0){let Y=C[k];if(Y===void 0&&(k==="instanceMatrix"&&U.instanceMatrix&&(Y=U.instanceMatrix),k==="instanceColor"&&U.instanceColor&&(Y=U.instanceColor)),Y!==void 0){let X=Y.normalized,at=Y.itemSize,ot=t.get(Y);if(ot===void 0)continue;let Ct=ot.buffer,zt=ot.type,Zt=ot.bytesPerElement,q=zt===i.INT||zt===i.UNSIGNED_INT||Y.gpuType===nl;if(Y.isInterleavedBufferAttribute){let et=Y.data,yt=et.stride,Wt=Y.offset;if(et.isInstancedInterleavedBuffer){for(let wt=0;wt<O.locationSize;wt++)m(O.location+wt,et.meshPerAttribute);U.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let wt=0;wt<O.locationSize;wt++)p(O.location+wt);i.bindBuffer(i.ARRAY_BUFFER,Ct);for(let wt=0;wt<O.locationSize;wt++)A(O.location+wt,at/O.locationSize,zt,X,yt*Zt,(Wt+at/O.locationSize*wt)*Zt,q)}else{if(Y.isInstancedBufferAttribute){for(let et=0;et<O.locationSize;et++)m(O.location+et,Y.meshPerAttribute);U.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let et=0;et<O.locationSize;et++)p(O.location+et);i.bindBuffer(i.ARRAY_BUFFER,Ct);for(let et=0;et<O.locationSize;et++)A(O.location+et,at/O.locationSize,zt,X,at*Zt,at/O.locationSize*et*Zt,q)}}else if(F!==void 0){let X=F[k];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(O.location,X);break;case 3:i.vertexAttrib3fv(O.location,X);break;case 4:i.vertexAttrib4fv(O.location,X);break;default:i.vertexAttrib1fv(O.location,X)}}}}S()}function E(){w();for(let U in n){let M=n[U];for(let P in M){let I=M[P];for(let C in I){let N=I[C];for(let F in N)h(N[F].object),delete N[F];delete I[C]}}delete n[U]}}function b(U){if(n[U.id]===void 0)return;let M=n[U.id];for(let P in M){let I=M[P];for(let C in I){let N=I[C];for(let F in N)h(N[F].object),delete N[F];delete I[C]}}delete n[U.id]}function L(U){for(let M in n){let P=n[M];for(let I in P){let C=P[I];if(C[U.id]===void 0)continue;let N=C[U.id];for(let F in N)h(N[F].object),delete N[F];delete C[U.id]}}}function _(U){for(let M in n){let P=n[M],I=U.isInstancedMesh===!0?U.id:0,C=P[I];if(C!==void 0){for(let N in C){let F=C[N];for(let k in F)h(F[k].object),delete F[k];delete C[N]}delete P[I],Object.keys(P).length===0&&delete n[M]}}}function w(){D(),a=!0,r!==s&&(r=s,c(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:D,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:L,initAttributes:y,enableAttribute:p,disableUnusedAttributes:S}}function wx(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Tx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==In&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){let _=L===Xn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==_n&&L!==Cn&&!_&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Kt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:g,maxSamples:E,samples:b}}function Ax(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Bn,o=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let x=u.clippingPlanes,y=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||x===null||x.length===0||r&&!p)r?h(null):c();else{let S=r?0:n,A=S*4,g=m.clippingState||null;l.value=g,g=h(x,f,A,d);for(let E=0;E!==A;++E)g[E]=e[E];m.clippingState=g,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,x){let y=u!==null?u.length:0,p=null;if(y!==0){if(p=l.value,x!==!0||p===null){let m=d+y*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let A=0,g=d;A!==y;++A,g+=4)a.copy(u[A]).applyMatrix4(S,o),a.normal.toArray(p,g),p[g+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}var lr=4,Rx=6,Cx=20,Ix=256,xa=new er,Vf=new Dt,Th=null,Ah=0,Rh=0,Ch=!1,Px=new B,hs=new B,us=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Px}=r;Th=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Th,Ah,Rh),this._renderer.xr.enabled=Ch,t.scissorTest=!1,or(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Bi||t.mapping===ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Th=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Xn,format:In,colorSpace:Pr,depthBuffer:!1},s=Wf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Lx(r)),this._blurMaterial=Nx(r,t,e),this._ggxMaterial=Dx(r,t,e)}return s}_compileMaterial(t){let e=new nt(new Pe,t);this._renderer.compile(e,xa)}_sceneToCubeUV(t,e,n,s,r){let l=new $e(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Vf),u.toneMapping=Vn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new nt(new Ae,new be({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,p=y.material,m=!1,S=t.background;S?S.isColor&&(p.color.copy(S),t.background=null,m=!0):(p.color.copy(Vf),m=!0);for(let A=0;A<6;A++){let g=A%3;g===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[A],r.y,r.z)):g===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[A]));let E=this._cubeSize;or(s,g*E,A>2?E:0,E,E),u.setRenderTarget(s),m&&u.render(y,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Bi||t.mapping===ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;or(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,xa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:x}=this,y=this._sizeLods[n],p=3*y*(n>x-lr?n-x+lr:0),m=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=x-e,or(r,p,m,3*y,2*y),s.setRenderTarget(r),s.render(o,xa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,or(t,p,m,3*y,2*y),s.setRenderTarget(t),s.render(o,xa)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-lr?s-this._lodMax+lr:0),f=4*(this._cubeSize-h);or(e,u,f,3*h,2*h),a.setRenderTarget(e),a.render(l,xa)}};function Lx(i){let t=[],e=[],n=i,s=i-lr+1+Rx;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,x=new Float32Array(d*f*u),y=new Float32Array(d*f*u);for(let m=0;m<u;m++){let S=m%3*2/3-1,A=m>2?0:-1,g=[S,A,0,S+2/3,A,0,S+2/3,A+1,0,S,A,0,S+2/3,A+1,0,S,A+1,0];x.set(g,d*f*m);for(let E=0;E<f;E++){let b=h[E*2]*2-1,L=h[E*2+1]*2-1;m===0?hs.set(1,L,b):m===1?hs.set(-b,1,-L):m===2?hs.set(-b,L,1):m===3?hs.set(-1,L,-b):m===4?hs.set(-b,-1,L):hs.set(b,L,-1),hs.toArray(y,(m*f+E)*d)}}let p=new Pe;p.setAttribute("position",new Ie(x,d)),p.setAttribute("outputDirection",new Ie(y,d)),e.push(new nt(p,null)),n>lr&&n--}return{lodMeshes:e,sizeLods:t}}function Wf(i,t,e){let n=new yn(i,t,e);return n.texture.mapping=oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function or(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Dx(i,t,e){return new qe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ix,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wl(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Nx(i,t,e){return new qe({name:"SphericalGaussianBlur",defines:{SAMPLES:Cx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Wl(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Xf(){return new qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wl(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Yf(){return new qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Wl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Vl=class extends yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Wr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ae(5,5,5),r=new qe({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:ii});r.uniforms.tEquirect.value=e;let a=new nt(s,r),o=e.minFilter;return e.minFilter===ki&&(e.minFilter=nn),new Zo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Ux(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Qo||d===tl)if(t.has(f)){let x=t.get(f).texture;return o(x,f.mapping)}else{let x=f.image;if(x&&x.height>0){let y=new Vl(x.height);return y.fromEquirectangularTexture(i,f),t.set(f,y),f.addEventListener("dispose",c),o(y.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let d=f.mapping,x=d===Qo||d===tl,y=d===Bi||d===ls;if(x||y){let p=e.get(f),m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new us(i)),p=x?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{let S=f.image;return x&&S&&S.height>0||y&&S&&l(S)?(n===null&&(n=new us(i)),p=x?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function o(f,d){return d===Qo?f.mapping=Bi:d===tl&&(f.mapping=ls),f}function l(f){let d=0,x=6;for(let y=0;y<x;y++)f[y]!==void 0&&d++;return d===x}function c(f){let d=f.target;d.removeEventListener("dispose",c);let x=t.get(d);x!==void 0&&(t.delete(d),x.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let x=e.get(d);x!==void 0&&(e.delete(d),x.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Fx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ts("WebGLRenderer: "+n+" extension not supported."),s}}}function zx(i,t,e,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let x in f.attributes)t.remove(f.attributes[x]);f.removeEventListener("dispose",a),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,x=u.attributes.position,y=0;if(x===void 0)return;if(d!==null){let S=d.array;y=d.version;for(let A=0,g=S.length;A<g;A+=3){let E=S[A+0],b=S[A+1],L=S[A+2];f.push(E,b,b,L,L,E)}}else{let S=x.array;y=x.version;for(let A=0,g=S.length/3-1;A<g;A+=3){let E=A+0,b=A+1,L=A+2;f.push(E,b,b,L,L,E)}}let p=new(x.count>=65535?Or:zr)(f,1);p.version=y;let m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Ox(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*a),e.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*a,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let y=0;for(let p=0;p<d;p++)y+=f[p];e.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Bx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Qt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function kx(i,t,e){let n=new WeakMap,s=new Ne;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let w=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],A=0;d===!0&&(A=1),x===!0&&(A=2),y===!0&&(A=3);let g=o.attributes.position.count*A,E=1;g>t.maxTextureSize&&(E=Math.ceil(g/t.maxTextureSize),g=t.maxTextureSize);let b=new Float32Array(g*E*4*u),L=new Ur(b,g,E,u);L.type=Cn,L.needsUpdate=!0;let _=A*4;for(let D=0;D<u;D++){let U=p[D],M=m[D],P=S[D],I=g*E*4*D;for(let C=0;C<U.count;C++){let N=C*_;d===!0&&(s.fromBufferAttribute(U,C),b[I+N+0]=s.x,b[I+N+1]=s.y,b[I+N+2]=s.z,b[I+N+3]=0),x===!0&&(s.fromBufferAttribute(M,C),b[I+N+4]=s.x,b[I+N+5]=s.y,b[I+N+6]=s.z,b[I+N+7]=0),y===!0&&(s.fromBufferAttribute(P,C),b[I+N+8]=s.x,b[I+N+9]=s.y,b[I+N+10]=s.z,b[I+N+11]=P.itemSize===4?s.w:1)}}f={count:u,texture:L,size:new gt(g,E)},n.set(o,f),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let x=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Hx(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Gx={[th]:"LINEAR_TONE_MAPPING",[eh]:"REINHARD_TONE_MAPPING",[nh]:"CINEON_TONE_MAPPING",[ir]:"ACES_FILMIC_TONE_MAPPING",[sh]:"AGX_TONE_MAPPING",[rh]:"NEUTRAL_TONE_MAPPING",[ih]:"CUSTOM_TONE_MAPPING"};function Vx(i,t,e,n,s,r){let a=new yn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Pe;c.setAttribute("position",new pe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new pe([0,2,0,0,2,0],2));let h=new Uo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new nt(c,h),f=new er(-1,1,1,-1,0,1),d=null,x=null,y=!1,p,m=null,S=[],A=!1;this.setSize=function(g,E){a.setSize(g,E),o!==null&&o.setSize(g,E),l!==null&&l.setSize(g,E);for(let b=0;b<S.length;b++){let L=S[b];L.setSize&&L.setSize(g,E)}},this.setEffects=function(g){S=g,A=S.length>0&&S[0].isRenderPass===!0;let E=a.width,b=a.height;S.length>0&&o===null&&(o=new yn(E,b,{type:Xn,depthBuffer:!1,stencilBuffer:!1}),l=new yn(E,b,{type:Xn,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<S.length;L++){let _=S[L];_.setSize&&_.setSize(E,b)}},this.begin=function(g,E){if(y||g.toneMapping===Vn&&S.length===0)return!1;if(m=E,E!==null){let b=E.width,L=E.height;(a.width!==b||a.height!==L)&&this.setSize(b,L)}return A===!1&&g.setRenderTarget(a),p=g.toneMapping,g.toneMapping=Vn,!0},this.hasRenderPass=function(){return A},this.end=function(g,E){g.toneMapping=p,y=!0;let b=a,L=o;for(let _=0;_<S.length;_++){let w=S[_];w.enabled!==!1&&(w.render(g,L,b,E),w.needsSwap!==!1&&(b=L,L=L===o?l:o))}if(d!==g.outputColorSpace||x!==g.toneMapping){d=g.outputColorSpace,x=g.toneMapping,h.defines={},fe.getTransfer(d)===ve&&(h.defines.SRGB_TRANSFER="");let _=Gx[x];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,g.setRenderTarget(m),g.render(u,f),m=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var fd=new mn,Lh=new Pi(1,1),dd=new Ur,pd=new To,md=new Wr,qf=[],Zf=[],$f=new Float32Array(16),Jf=new Float32Array(9),Kf=new Float32Array(4);function hr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=qf[s];if(r===void 0&&(r=new Float32Array(s),qf[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function je(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Xl(i,t){let e=Zf[t];e===void 0&&(e=new Int32Array(t),Zf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Wx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Xx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2fv(this.addr,t),je(e,t)}}function Yx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ke(e,t))return;i.uniform3fv(this.addr,t),je(e,t)}}function qx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4fv(this.addr,t),je(e,t)}}function Zx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),je(e,t)}else{if(Ke(e,n))return;Kf.set(n),i.uniformMatrix2fv(this.addr,!1,Kf),je(e,n)}}function $x(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),je(e,t)}else{if(Ke(e,n))return;Jf.set(n),i.uniformMatrix3fv(this.addr,!1,Jf),je(e,n)}}function Jx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),je(e,t)}else{if(Ke(e,n))return;$f.set(n),i.uniformMatrix4fv(this.addr,!1,$f),je(e,n)}}function Kx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function jx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2iv(this.addr,t),je(e,t)}}function Qx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;i.uniform3iv(this.addr,t),je(e,t)}}function ty(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4iv(this.addr,t),je(e,t)}}function ey(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ny(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2uiv(this.addr,t),je(e,t)}}function iy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;i.uniform3uiv(this.addr,t),je(e,t)}}function sy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4uiv(this.addr,t),je(e,t)}}function ry(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Lh.compareFunction=e.isReversedDepthBuffer()?kl:Bl,r=Lh):r=fd,e.setTexture2D(t||r,s)}function ay(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||pd,s)}function oy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||md,s)}function ly(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||dd,s)}function cy(i){switch(i){case 5126:return Wx;case 35664:return Xx;case 35665:return Yx;case 35666:return qx;case 35674:return Zx;case 35675:return $x;case 35676:return Jx;case 5124:case 35670:return Kx;case 35667:case 35671:return jx;case 35668:case 35672:return Qx;case 35669:case 35673:return ty;case 5125:return ey;case 36294:return ny;case 36295:return iy;case 36296:return sy;case 35678:case 36198:case 36298:case 36306:case 35682:return ry;case 35679:case 36299:case 36307:return ay;case 35680:case 36300:case 36308:case 36293:return oy;case 36289:case 36303:case 36311:case 36292:return ly}}function hy(i,t){i.uniform1fv(this.addr,t)}function uy(i,t){let e=hr(t,this.size,2);i.uniform2fv(this.addr,e)}function fy(i,t){let e=hr(t,this.size,3);i.uniform3fv(this.addr,e)}function dy(i,t){let e=hr(t,this.size,4);i.uniform4fv(this.addr,e)}function py(i,t){let e=hr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function my(i,t){let e=hr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function gy(i,t){let e=hr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function xy(i,t){i.uniform1iv(this.addr,t)}function yy(i,t){i.uniform2iv(this.addr,t)}function _y(i,t){i.uniform3iv(this.addr,t)}function vy(i,t){i.uniform4iv(this.addr,t)}function My(i,t){i.uniform1uiv(this.addr,t)}function Sy(i,t){i.uniform2uiv(this.addr,t)}function by(i,t){i.uniform3uiv(this.addr,t)}function Ey(i,t){i.uniform4uiv(this.addr,t)}function wy(i,t,e){let n=this.cache,s=t.length,r=Xl(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),je(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Lh:a=fd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Ty(i,t,e){let n=this.cache,s=t.length,r=Xl(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),je(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||pd,r[a])}function Ay(i,t,e){let n=this.cache,s=t.length,r=Xl(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),je(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||md,r[a])}function Ry(i,t,e){let n=this.cache,s=t.length,r=Xl(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),je(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||dd,r[a])}function Cy(i){switch(i){case 5126:return hy;case 35664:return uy;case 35665:return fy;case 35666:return dy;case 35674:return py;case 35675:return my;case 35676:return gy;case 5124:case 35670:return xy;case 35667:case 35671:return yy;case 35668:case 35672:return _y;case 35669:case 35673:return vy;case 5125:return My;case 36294:return Sy;case 36295:return by;case 36296:return Ey;case 35678:case 36198:case 36298:case 36306:case 35682:return wy;case 35679:case 36299:case 36307:return Ty;case 35680:case 36300:case 36308:case 36293:return Ay;case 36289:case 36303:case 36311:case 36292:return Ry}}var Dh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=cy(e.type)}},Nh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cy(e.type)}},Uh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ih=/(\w+)(\])?(\[|\.)?/g;function jf(i,t){i.seq.push(t),i.map[t.id]=t}function Iy(i,t,e){let n=i.name,s=n.length;for(Ih.lastIndex=0;;){let r=Ih.exec(n),a=Ih.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){jf(e,c===void 0?new Dh(o,i,t):new Nh(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Uh(o),jf(e,u)),e=u}}}var cr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Iy(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Qf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Py=37297,Ly=0;function Dy(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var td=new ee;function Ny(i){fe._getMatrix(td,fe.workingColorSpace,i);let t=`mat3( ${td.elements.map(e=>e.toFixed(4))} )`;switch(fe.getTransfer(i)){case Lr:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return Kt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ed(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Dy(i.getShaderSource(t),o)}else return r}function Uy(i,t){let e=Ny(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Fy={[th]:"Linear",[eh]:"Reinhard",[nh]:"Cineon",[ir]:"ACESFilmic",[sh]:"AgX",[rh]:"Neutral",[ih]:"Custom"};function zy(i,t){let e=Fy[t];return e===void 0?(Kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Gl=new B;function Oy(){fe.getLuminanceCoefficients(Gl);let i=Gl.x.toFixed(4),t=Gl.y.toFixed(4),e=Gl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function By(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_a).join(`
`)}function ky(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Hy(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function _a(i){return i!==""}function nd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function id(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Gy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fh(i){return i.replace(Gy,Wy)}var Vy=new Map;function Wy(i,t){let e=le[t];if(e===void 0){let n=Vy.get(t);if(n!==void 0)e=le[n],Kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Fh(e)}var Xy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sd(i){return i.replace(Xy,Yy)}function Yy(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var qy={[aa]:"SHADOWMAP_TYPE_PCF",[nr]:"SHADOWMAP_TYPE_VSM"};function Zy(i){return qy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var $y={[Bi]:"ENVMAP_TYPE_CUBE",[ls]:"ENVMAP_TYPE_CUBE",[oa]:"ENVMAP_TYPE_CUBE_UV"};function Jy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":$y[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ky={[ls]:"ENVMAP_MODE_REFRACTION"};function jy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ky[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Qy={[jo]:"ENVMAP_BLENDING_MULTIPLY",[yf]:"ENVMAP_BLENDING_MIX",[_f]:"ENVMAP_BLENDING_ADD"};function t_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Qy[i.combine]||"ENVMAP_BLENDING_NONE"}function e_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function n_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Zy(e),c=Jy(e),h=jy(e),u=t_(e),f=e_(e),d=By(e),x=ky(r),y=s.createProgram(),p,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(_a).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(_a).join(`
`),m.length>0&&(m+=`
`)):(p=[rd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_a).join(`
`),m=[rd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vn?"#define TONE_MAPPING":"",e.toneMapping!==Vn?le.tonemapping_pars_fragment:"",e.toneMapping!==Vn?zy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,Uy("linearToOutputTexel",e.outputColorSpace),Oy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_a).join(`
`)),a=Fh(a),a=nd(a,e),a=id(a,e),o=Fh(o),o=nd(o,e),o=id(o,e),a=sd(a),o=sd(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===ph?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ph?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let A=S+p+a,g=S+m+o,E=Qf(s,s.VERTEX_SHADER,A),b=Qf(s,s.FRAGMENT_SHADER,g);s.attachShader(y,E),s.attachShader(y,b),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function L(U){if(i.debug.checkShaderErrors){let M=s.getProgramInfoLog(y)||"",P=s.getShaderInfoLog(E)||"",I=s.getShaderInfoLog(b)||"",C=M.trim(),N=P.trim(),F=I.trim(),k=!0,O=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,E,b);else{let Y=ed(s,E,"vertex"),X=ed(s,b,"fragment");Qt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+C+`
`+Y+`
`+X)}else C!==""?Kt("WebGLProgram: Program Info Log:",C):(N===""||F==="")&&(O=!1);O&&(U.diagnostics={runnable:k,programLog:C,vertexShader:{log:N,prefix:p},fragmentShader:{log:F,prefix:m}})}s.deleteShader(E),s.deleteShader(b),_=new cr(s,y),w=Hy(s,y)}let _;this.getUniforms=function(){return _===void 0&&L(this),_};let w;this.getAttributes=function(){return w===void 0&&L(this),w};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(y,Py)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ly++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=b,this}var i_=0,zh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Oh(t),e.set(t,n)),n}},Oh=class{constructor(t){this.id=i_++,this.code=t,this.usedTimes=0}};function s_(i){return i===Gi||i===da||i===pa}function r_(i,t,e,n,s,r){let a=new Fr,o=new zh,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,w,D,U,M,P){let I=U.fog,C=M.geometry,N=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?U.environment:null,F=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,k=t.get(_.envMap||N,F),O=k&&k.mapping===oa?k.image.height:null,Y=d[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&Kt("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let X=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,at=X!==void 0?X.length:0,ot=0;C.morphAttributes.position!==void 0&&(ot=1),C.morphAttributes.normal!==void 0&&(ot=2),C.morphAttributes.color!==void 0&&(ot=3);let Ct,zt,Zt,q;if(Y){let Le=ri[Y];Ct=Le.vertexShader,zt=Le.fragmentShader}else{Ct=_.vertexShader,zt=_.fragmentShader;let Le=o.getVertexShaderStage(_),ye=o.getFragmentShaderStage(_);o.update(_,Le,ye),Zt=Le.id,q=ye.id}let et=i.getRenderTarget(),yt=i.state.buffers.depth.getReversed(),Wt=M.isInstancedMesh===!0,wt=M.isBatchedMesh===!0,jt=!!_.map,de=!!_.matcap,it=!!k,ct=!!_.aoMap,dt=!!_.lightMap,mt=!!_.bumpMap&&_.wireframe===!1,_t=!!_.normalMap,$t=!!_.displacementMap,Xt=!!_.emissiveMap,J=!!_.metalnessMap,lt=!!_.roughnessMap,z=_.anisotropy>0,Yt=_.clearcoat>0,Gt=_.dispersion>0,R=_.retroreflectivity>0,v=_.iridescence>0,H=_.sheen>0,G=_.transmission>0,K=z&&!!_.anisotropyMap,ut=Yt&&!!_.clearcoatMap,xt=Yt&&!!_.clearcoatNormalMap,tt=Yt&&!!_.clearcoatRoughnessMap,st=v&&!!_.iridescenceMap,vt=v&&!!_.iridescenceThicknessMap,Ft=H&&!!_.sheenColorMap,St=H&&!!_.sheenRoughnessMap,Mt=!!_.specularMap,kt=!!_.specularColorMap,Jt=!!_.specularIntensityMap,se=G&&!!_.transmissionMap,W=G&&!!_.thicknessMap,bt=!!_.gradientMap,rt=!!_.alphaMap,Et=_.alphaTest>0,It=!!_.alphaHash,ht=!!_.extensions,qt=Vn;_.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(qt=i.toneMapping);let Ht={shaderID:Y,shaderType:_.type,shaderName:_.name,vertexShader:Ct,fragmentShader:zt,defines:_.defines,customVertexShaderID:Zt,customFragmentShaderID:q,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:wt,batchingColor:wt&&M._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&M.instanceColor!==null,instancingMorph:Wt&&M.morphTexture!==null,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:fe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:jt,matcap:de,envMap:it,envMapMode:it&&k.mapping,envMapCubeUVHeight:O,aoMap:ct,lightMap:dt,bumpMap:mt,normalMap:_t,displacementMap:$t,emissiveMap:Xt,normalMapObjectSpace:_t&&_.normalMapType===Sf,normalMapTangentSpace:_t&&_.normalMapType===ma,packedNormalMap:_t&&_.normalMapType===ma&&s_(_.normalMap.format),metalnessMap:J,roughnessMap:lt,anisotropy:z,anisotropyMap:K,clearcoat:Yt,clearcoatMap:ut,clearcoatNormalMap:xt,clearcoatRoughnessMap:tt,dispersion:Gt,retroreflection:R,iridescence:v,iridescenceMap:st,iridescenceThicknessMap:vt,sheen:H,sheenColorMap:Ft,sheenRoughnessMap:St,specularMap:Mt,specularColorMap:kt,specularIntensityMap:Jt,transmission:G,transmissionMap:se,thicknessMap:W,gradientMap:bt,opaque:_.transparent===!1&&_.blending===Oi&&_.alphaToCoverage===!1,alphaMap:rt,alphaTest:Et,alphaHash:It,combine:_.combine,mapUv:jt&&x(_.map.channel),aoMapUv:ct&&x(_.aoMap.channel),lightMapUv:dt&&x(_.lightMap.channel),bumpMapUv:mt&&x(_.bumpMap.channel),normalMapUv:_t&&x(_.normalMap.channel),displacementMapUv:$t&&x(_.displacementMap.channel),emissiveMapUv:Xt&&x(_.emissiveMap.channel),metalnessMapUv:J&&x(_.metalnessMap.channel),roughnessMapUv:lt&&x(_.roughnessMap.channel),anisotropyMapUv:K&&x(_.anisotropyMap.channel),clearcoatMapUv:ut&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:xt&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:St&&x(_.sheenRoughnessMap.channel),specularMapUv:Mt&&x(_.specularMap.channel),specularColorMapUv:kt&&x(_.specularColorMap.channel),specularIntensityMapUv:Jt&&x(_.specularIntensityMap.channel),transmissionMapUv:se&&x(_.transmissionMap.channel),thicknessMapUv:W&&x(_.thicknessMap.channel),alphaMapUv:rt&&x(_.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(_t||z),vertexNormals:!!C.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:M.isPoints===!0&&!!C.attributes.uv&&(jt||rt),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||C.attributes.normal===void 0&&_t===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:yt,skinning:M.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:ot,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:P.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:qt,decodeVideoTexture:jt&&_.map.isVideoTexture===!0&&fe.getTransfer(_.map.colorSpace)===ve,decodeVideoTextureEmissive:Xt&&_.emissiveMap.isVideoTexture===!0&&fe.getTransfer(_.emissiveMap.colorSpace)===ve,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===sn,flipSided:_.side===Je,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ht&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&_.extensions.multiDraw===!0||wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ht.vertexUv1s=l.has(1),Ht.vertexUv2s=l.has(2),Ht.vertexUv3s=l.has(3),l.clear(),Ht}function p(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let D in _.defines)w.push(D),w.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(m(w,_),S(w,_),w.push(i.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function m(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function S(_,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function A(_){let w=d[_.type],D;if(w){let U=ri[w];D=kf.clone(U.uniforms)}else D=_.uniforms;return D}function g(_,w){let D=h.get(w);return D!==void 0?++D.usedTimes:(D=new n_(i,w,_,s),c.push(D),h.set(w,D)),D}function E(_){if(--_.usedTimes===0){let w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){o.remove(_)}function L(){o.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:A,acquireProgram:g,releaseProgram:E,releaseShaderCache:b,programs:c,dispose:L}}function a_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function o_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function ad(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function od(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,x,y,p,m){let S=i[t];return S===void 0?(S={id:f.id,object:f,geometry:d,material:x,materialVariant:a(f),groupOrder:y,renderOrder:f.renderOrder,z:p,group:m},i[t]=S):(S.id=f.id,S.object=f,S.geometry=d,S.material=x,S.materialVariant=a(f),S.groupOrder=y,S.renderOrder=f.renderOrder,S.z=p,S.group=m),t++,S}function l(f,d,x,y,p,m,S){S.reversedDepth===!0&&(p=-p);let A=o(f,d,x,y,p,m);x.transmission>0?n.push(A):x.transparent===!0?s.push(A):e.push(A)}function c(f,d,x,y,p,m){let S=o(f,d,x,y,p,m);x.transmission>0?n.unshift(S):x.transparent===!0?s.unshift(S):e.unshift(S)}function h(f,d){e.length>1&&e.sort(f||o_),n.length>1&&n.sort(d||ad),s.length>1&&s.sort(d||ad)}function u(){for(let f=t,d=i.length;f<d;f++){let x=i[f];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function l_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new od,i.set(n,[a])):s>=r.length?(a=new od,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function c_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new B,color:new Dt};break;case"SpotLight":e={position:new B,direction:new B,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function h_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var u_=0;function f_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function d_(i){let t=new c_,e=h_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let s=new B,r=new xe,a=new xe;function o(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,x=0,y=0,p=0,m=0,S=0,A=0,g=0,E=0,b=0,L=0,_=0,w=0,D=0;c.sort(f_);for(let M=0,P=c.length;M<P;M++){let I=c[M],C=I.color,N=I.intensity,F=I.distance,k=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Gi?k=I.shadow.map.texture:k=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=C.r*N,u+=C.g*N,f+=C.b*N;else if(I.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(I.sh.coefficients[O],N);D++}else if(I.isSunLight){let O=t.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Y=I.shadow,X=e.get(I);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[x]=X,n.sunShadowMap[x]=k;let at=Y.getViewportCount();for(let ot=0;ot<at;ot++)n.sunShadowMatrix[y+ot]=Y.getMatrix(ot),n.sunShadowCascade[y+ot]=Y._cascadeData[ot];y+=at,x++}n.sun[d]=O,d++}else if(I.isDirectionalLight){let O=t.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Y=I.shadow,X=e.get(I);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=k,n.directionalShadowMatrix[p]=I.shadow.matrix,E++}n.directional[p]=O,p++}else if(I.isSpotLight){let O=t.get(I);O.position.setFromMatrixPosition(I.matrixWorld),O.color.copy(C).multiplyScalar(N),O.distance=F,O.coneCos=Math.cos(I.angle),O.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),O.decay=I.decay,n.spot[S]=O;let Y=I.shadow;if(I.map&&(n.spotLightMap[_]=I.map,_++,Y.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[S]=Y.matrix,I.castShadow){let X=e.get(I);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,n.spotShadow[S]=X,n.spotShadowMap[S]=k,L++}S++}else if(I.isRectAreaLight){let O=t.get(I);O.color.copy(C).multiplyScalar(N),O.halfWidth.set(I.width*.5,0,0),O.halfHeight.set(0,I.height*.5,0),n.rectArea[A]=O,A++}else if(I.isPointLight){let O=t.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),O.distance=I.distance,O.decay=I.decay,I.castShadow){let Y=I.shadow,X=e.get(I);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,X.shadowCameraNear=Y.camera.near,X.shadowCameraFar=Y.camera.far,n.pointShadow[m]=X,n.pointShadowMap[m]=k,n.pointShadowMatrix[m]=I.shadow.matrix,b++}n.point[m]=O,m++}else if(I.isHemisphereLight){let O=t.get(I);O.skyColor.copy(I.color).multiplyScalar(N),O.groundColor.copy(I.groundColor).multiplyScalar(N),n.hemi[g]=O,g++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let U=n.hash;(U.sunLength!==d||U.directionalLength!==p||U.pointLength!==m||U.spotLength!==S||U.rectAreaLength!==A||U.hemiLength!==g||U.numSunShadows!==x||U.numDirectionalShadows!==E||U.numPointShadows!==b||U.numSpotShadows!==L||U.numSpotMaps!==_||U.numLightProbes!==D)&&(n.sun.length=d,n.directional.length=p,n.spot.length=S,n.rectArea.length=A,n.point.length=m,n.hemi.length=g,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=L,n.spotShadowMap.length=L,n.spotLightMatrix.length=L+_-w,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=D,U.sunLength=d,U.directionalLength=p,U.pointLength=m,U.spotLength=S,U.rectAreaLength=A,U.hemiLength=g,U.numSunShadows=x,U.numDirectionalShadows=E,U.numPointShadows=b,U.numSpotShadows=L,U.numSpotMaps=_,U.numLightProbes=D,n.version=u_++)}function l(c,h){let u=0,f=0,d=0,x=0,y=0,p=0,m=h.matrixWorldInverse;for(let S=0,A=c.length;S<A;S++){let g=c[S];if(g.isSunLight){let E=n.sun[u];E.direction.setFromMatrixPosition(g.matrixWorld),E.direction.transformDirection(m),u++}else if(g.isDirectionalLight){let E=n.directional[f];E.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),f++}else if(g.isSpotLight){let E=n.spot[x];E.position.setFromMatrixPosition(g.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),x++}else if(g.isRectAreaLight){let E=n.rectArea[y];E.position.setFromMatrixPosition(g.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(g.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(g.width*.5,0,0),E.halfHeight.set(0,g.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),y++}else if(g.isPointLight){let E=n.point[d];E.position.setFromMatrixPosition(g.matrixWorld),E.position.applyMatrix4(m),d++}else if(g.isHemisphereLight){let E=n.hemi[p];E.direction.setFromMatrixPosition(g.matrixWorld),E.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function ld(i){let t=new d_(i),e=[],n=[],s=[];function r(f){u.camera=f,e.length=0,n.length=0,s.length=0}function a(f){e.push(f)}function o(f){n.push(f)}function l(f){s.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function p_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new ld(i),t.set(s,[o])):r>=a.length?(o=new ld(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var m_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g_=`uniform sampler2D shadow_pass;
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
}`,x_=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],y_=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],cd=new xe,ya=new B,Ph=new B;function __(i,t,e){let n=new $s,s=new gt,r=new gt,a=new Ne,o=new Fo,l=new zo,c={},h=e.maxTextureSize,u={[zi]:Je,[Je]:zi,[sn]:sn},f=new qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:m_,fragmentShader:g_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let x=new Pe;x.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new nt(x,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=aa;let m=this.type;this.render=function(b,L,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===Ko&&(Kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=aa);let w=i.getRenderTarget(),D=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),M=i.state;M.setBlending(ii),M.buffers.depth.getReversed()===!0?M.buffers.color.setClear(0,0,0,0):M.buffers.color.setClear(1,1,1,1),M.buffers.depth.setTest(!0),M.setScissorTest(!1);let P=m!==this.type;P&&L.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(C=>C.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,C=b.length;I<C;I++){let N=b[I],F=N.shadow;if(F===void 0){Kt("WebGLShadowMap:",N,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let k=F.getFrameExtents();s.multiply(k),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/k.x),s.x=r.x*k.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/k.y),s.y=r.y*k.y,F.mapSize.y=r.y));let O=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=O,F.map===null||P===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===nr){if(N.isPointLight){Kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new yn(s.x,s.y,{format:Gi,type:Xn,minFilter:nn,magFilter:nn,generateMipmaps:!1}),F.map.texture.name=N.name+".shadowMap",F.map.depthTexture=new Pi(s.x,s.y,Cn),F.map.depthTexture.name=N.name+".shadowMapDepth",F.map.depthTexture.format=ti,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=tn,F.map.depthTexture.magFilter=tn}else N.isPointLight?(F.map=new Vl(s.x),F.map.depthTexture=new Ao(s.x,Wn)):(F.map=new yn(s.x,s.y),F.map.depthTexture=new Pi(s.x,s.y,Wn)),F.map.depthTexture.name=N.name+".shadowMap",F.map.depthTexture.format=ti,this.type===aa?(F.map.depthTexture.compareFunction=O?kl:Bl,F.map.depthTexture.minFilter=nn,F.map.depthTexture.magFilter=nn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=tn,F.map.depthTexture.magFilter=tn);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y)&&F.map.setSize(s.x,s.y);let Y=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();N.isPointLight!==!0&&F.updateMatrices(N,_);for(let X=0;X<Y;X++){let at=F.getCamera(X);if(N.isPointLight){let ot=F.camera,Ct=F.matrix,zt=N.distance||ot.far;zt!==ot.far&&(ot.far=zt,ot.updateProjectionMatrix()),ya.setFromMatrixPosition(N.matrixWorld),ot.position.copy(ya),Ph.copy(ot.position),Ph.add(x_[X]),ot.up.copy(y_[X]),ot.lookAt(Ph),ot.updateMatrixWorld(),Ct.makeTranslation(-ya.x,-ya.y,-ya.z),cd.multiplyMatrices(ot.projectionMatrix,ot.matrixWorldInverse),F._frustum.setFromProjectionMatrix(cd,ot.coordinateSystem,ot.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,X),i.clear();else{X===0&&(i.setRenderTarget(F.map),i.clear());let ot=F.getViewport(X);a.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),M.viewport(a)}n=F.getFrustum(X),g(L,_,at,N,this.type)}F.isPointLightShadow!==!0&&this.type===nr&&S(F,_),F.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(w,D,U)};function S(b,L){let _=t.update(y);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new yn(s.x,s.y,{format:Gi,type:Xn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(L,null,_,f,y,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(L,null,_,d,y,null)}function A(b,L,_,w){let D=null,U=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(U!==void 0)D=U;else if(D=_.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let M=D.uuid,P=L.uuid,I=c[M];I===void 0&&(I={},c[M]=I);let C=I[P];C===void 0&&(C=D.clone(),I[P]=C,L.addEventListener("dispose",E)),D=C}if(D.visible=L.visible,D.wireframe=L.wireframe,w===nr?D.side=L.shadowSide!==null?L.shadowSide:L.side:D.side=L.shadowSide!==null?L.shadowSide:u[L.side],D.alphaMap=L.alphaMap,D.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,D.map=L.map,D.clipShadows=L.clipShadows,D.clippingPlanes=L.clippingPlanes,D.clipIntersection=L.clipIntersection,D.displacementMap=L.displacementMap,D.displacementScale=L.displacementScale,D.displacementBias=L.displacementBias,D.wireframeLinewidth=L.wireframeLinewidth,D.linewidth=L.linewidth,_.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let M=i.properties.get(D);M.light=_}return D}function g(b,L,_,w,D){if(b.visible===!1)return;if(b.layers.test(L.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&D===nr)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);let P=t.update(b),I=b.material;if(Array.isArray(I)){let C=P.groups;for(let N=0,F=C.length;N<F;N++){let k=C[N],O=I[k.materialIndex];if(O&&O.visible){let Y=A(b,O,w,D);b.onBeforeShadow(i,b,L,_,P,Y,k),i.renderBufferDirect(_,null,P,Y,b,k),b.onAfterShadow(i,b,L,_,P,Y,k)}}}else if(I.visible){let C=A(b,I,w,D);b.onBeforeShadow(i,b,L,_,P,C,null),i.renderBufferDirect(_,null,P,C,b,null),b.onAfterShadow(i,b,L,_,P,C,null)}}let M=b.children;for(let P=0,I=M.length;P<I;P++)g(M[P],L,_,w,D)}function E(b){b.target.removeEventListener("dispose",E);for(let _ in c){let w=c[_],D=b.target.uuid;D in w&&(w[D].dispose(),delete w[D])}}}function v_(i,t){function e(){let W=!1,bt=new Ne,rt=null,Et=new Ne(0,0,0,0);return{setMask:function(It){rt!==It&&!W&&(i.colorMask(It,It,It,It),rt=It)},setLocked:function(It){W=It},setClear:function(It,ht,qt,Ht,Le){Le===!0&&(It*=Ht,ht*=Ht,qt*=Ht),bt.set(It,ht,qt,Ht),Et.equals(bt)===!1&&(i.clearColor(It,ht,qt,Ht),Et.copy(bt))},reset:function(){W=!1,rt=null,Et.set(-1,0,0,0)}}}function n(){let W=!1,bt=!1,rt=null,Et=null,It=null;return{setReversed:function(ht){if(bt!==ht){let qt=t.get("EXT_clip_control");ht?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT),bt=ht;let Ht=It;It=null,this.setClear(Ht)}},getReversed:function(){return bt},setTest:function(ht){ht?et(i.DEPTH_TEST):yt(i.DEPTH_TEST)},setMask:function(ht){rt!==ht&&!W&&(i.depthMask(ht),rt=ht)},setFunc:function(ht){if(bt&&(ht=Df[ht]),Et!==ht){switch(ht){case mo:i.depthFunc(i.NEVER);break;case go:i.depthFunc(i.ALWAYS);break;case xo:i.depthFunc(i.LESS);break;case Os:i.depthFunc(i.LEQUAL);break;case yo:i.depthFunc(i.EQUAL);break;case _o:i.depthFunc(i.GEQUAL);break;case vo:i.depthFunc(i.GREATER);break;case Mo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Et=ht}},setLocked:function(ht){W=ht},setClear:function(ht){It!==ht&&(It=ht,bt&&(ht=1-ht),i.clearDepth(ht))},reset:function(){W=!1,rt=null,Et=null,It=null,bt=!1}}}function s(){let W=!1,bt=null,rt=null,Et=null,It=null,ht=null,qt=null,Ht=null,Le=null;return{setTest:function(ye){W||(ye?et(i.STENCIL_TEST):yt(i.STENCIL_TEST))},setMask:function(ye){bt!==ye&&!W&&(i.stencilMask(ye),bt=ye)},setFunc:function(ye,Un,$n){(rt!==ye||Et!==Un||It!==$n)&&(i.stencilFunc(ye,Un,$n),rt=ye,Et=Un,It=$n)},setOp:function(ye,Un,$n){(ht!==ye||qt!==Un||Ht!==$n)&&(i.stencilOp(ye,Un,$n),ht=ye,qt=Un,Ht=$n)},setLocked:function(ye){W=ye},setClear:function(ye){Le!==ye&&(i.clearStencil(ye),Le=ye)},reset:function(){W=!1,bt=null,rt=null,Et=null,It=null,ht=null,qt=null,Ht=null,Le=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,x=[],y=null,p=!1,m=null,S=null,A=null,g=null,E=null,b=null,L=null,_=new Dt(0,0,0),w=0,D=!1,U=null,M=null,P=null,I=null,C=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,k=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(O)[1]),F=k>=1):O.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),F=k>=2);let Y=null,X={},at=i.getParameter(i.SCISSOR_BOX),ot=i.getParameter(i.VIEWPORT),Ct=new Ne().fromArray(at),zt=new Ne().fromArray(ot);function Zt(W,bt,rt,Et){let It=new Uint8Array(4),ht=i.createTexture();i.bindTexture(W,ht),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qt=0;qt<rt;qt++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(bt,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,It):i.texImage2D(bt+qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,It);return ht}let q={};q[i.TEXTURE_2D]=Zt(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=Zt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=Zt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=Zt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(i.DEPTH_TEST),a.setFunc(Os),mt(!1),_t($c),et(i.CULL_FACE),ct(ii);function et(W){h[W]!==!0&&(i.enable(W),h[W]=!0)}function yt(W){h[W]!==!1&&(i.disable(W),h[W]=!1)}function Wt(W,bt){return f[W]!==bt?(i.bindFramebuffer(W,bt),f[W]=bt,W===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=bt),W===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=bt),!0):!1}function wt(W,bt){let rt=x,Et=!1;if(W){rt=d.get(bt),rt===void 0&&(rt=[],d.set(bt,rt));let It=W.textures;if(rt.length!==It.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,qt=It.length;ht<qt;ht++)rt[ht]=i.COLOR_ATTACHMENT0+ht;rt.length=It.length,Et=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,Et=!0);Et&&i.drawBuffers(rt)}function jt(W){return y!==W?(i.useProgram(W),y=W,!0):!1}let de={[os]:i.FUNC_ADD,[tf]:i.FUNC_SUBTRACT,[ef]:i.FUNC_REVERSE_SUBTRACT};de[nf]=i.MIN,de[sf]=i.MAX;let it={[rf]:i.ZERO,[af]:i.ONE,[of]:i.SRC_COLOR,[jc]:i.SRC_ALPHA,[df]:i.SRC_ALPHA_SATURATE,[uf]:i.DST_COLOR,[cf]:i.DST_ALPHA,[lf]:i.ONE_MINUS_SRC_COLOR,[Qc]:i.ONE_MINUS_SRC_ALPHA,[ff]:i.ONE_MINUS_DST_COLOR,[hf]:i.ONE_MINUS_DST_ALPHA,[pf]:i.CONSTANT_COLOR,[mf]:i.ONE_MINUS_CONSTANT_COLOR,[gf]:i.CONSTANT_ALPHA,[xf]:i.ONE_MINUS_CONSTANT_ALPHA};function ct(W,bt,rt,Et,It,ht,qt,Ht,Le,ye){if(W===ii){p===!0&&(yt(i.BLEND),p=!1);return}if(p===!1&&(et(i.BLEND),p=!0),W!==Qu){if(W!==m||ye!==D){if((S!==os||E!==os)&&(i.blendEquation(i.FUNC_ADD),S=os,E=os),ye)switch(W){case Oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gi:i.blendFunc(i.ONE,i.ONE);break;case Jc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qt("WebGLState: Invalid blending: ",W);break}else switch(W){case Oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Jc:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kc:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",W);break}A=null,g=null,b=null,L=null,_.set(0,0,0),w=0,m=W,D=ye}return}It=It||bt,ht=ht||rt,qt=qt||Et,(bt!==S||It!==E)&&(i.blendEquationSeparate(de[bt],de[It]),S=bt,E=It),(rt!==A||Et!==g||ht!==b||qt!==L)&&(i.blendFuncSeparate(it[rt],it[Et],it[ht],it[qt]),A=rt,g=Et,b=ht,L=qt),(Ht.equals(_)===!1||Le!==w)&&(i.blendColor(Ht.r,Ht.g,Ht.b,Le),_.copy(Ht),w=Le),m=W,D=!1}function dt(W,bt){W.side===sn?yt(i.CULL_FACE):et(i.CULL_FACE);let rt=W.side===Je;bt&&(rt=!rt),mt(rt),W.blending===Oi&&W.transparent===!1?ct(ii):ct(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),a.setFunc(W.depthFunc),a.setTest(W.depthTest),a.setMask(W.depthWrite),r.setMask(W.colorWrite);let Et=W.stencilWrite;o.setTest(Et),Et&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Xt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):yt(i.SAMPLE_ALPHA_TO_COVERAGE)}function mt(W){U!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),U=W)}function _t(W){W!==Ku?(et(i.CULL_FACE),W!==M&&(W===$c?i.cullFace(i.BACK):W===ju?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):yt(i.CULL_FACE),M=W}function $t(W){W!==P&&(F&&i.lineWidth(W),P=W)}function Xt(W,bt,rt){W?(et(i.POLYGON_OFFSET_FILL),(I!==bt||C!==rt)&&(I=bt,C=rt,a.getReversed()&&(bt=-bt),i.polygonOffset(bt,rt))):yt(i.POLYGON_OFFSET_FILL)}function J(W){W?et(i.SCISSOR_TEST):yt(i.SCISSOR_TEST)}function lt(W){W===void 0&&(W=i.TEXTURE0+N-1),Y!==W&&(i.activeTexture(W),Y=W)}function z(W,bt,rt){rt===void 0&&(Y===null?rt=i.TEXTURE0+N-1:rt=Y);let Et=X[rt];Et===void 0&&(Et={type:void 0,texture:void 0},X[rt]=Et),(Et.type!==W||Et.texture!==bt)&&(Y!==rt&&(i.activeTexture(rt),Y=rt),i.bindTexture(W,bt||q[W]),Et.type=W,Et.texture=bt)}function Yt(){let W=X[Y];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Gt(){try{i.compressedTexImage2D(...arguments)}catch(W){Qt("WebGLState:",W)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(W){Qt("WebGLState:",W)}}function v(){try{i.texSubImage2D(...arguments)}catch(W){Qt("WebGLState:",W)}}function H(){try{i.texSubImage3D(...arguments)}catch(W){Qt("WebGLState:",W)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(W){Qt("WebGLState:",W)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(W){Qt("WebGLState:",W)}}function ut(){try{i.texStorage2D(...arguments)}catch(W){Qt("WebGLState:",W)}}function xt(){try{i.texStorage3D(...arguments)}catch(W){Qt("WebGLState:",W)}}function tt(){try{i.texImage2D(...arguments)}catch(W){Qt("WebGLState:",W)}}function st(){try{i.texImage3D(...arguments)}catch(W){Qt("WebGLState:",W)}}function vt(W){return u[W]!==void 0?u[W]:i.getParameter(W)}function Ft(W,bt){u[W]!==bt&&(i.pixelStorei(W,bt),u[W]=bt)}function St(W){Ct.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),Ct.copy(W))}function Mt(W){zt.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),zt.copy(W))}function kt(W,bt){let rt=c.get(bt);rt===void 0&&(rt=new WeakMap,c.set(bt,rt));let Et=rt.get(W);Et===void 0&&(Et=i.getUniformBlockIndex(bt,W.name),rt.set(W,Et))}function Jt(W,bt){let Et=c.get(bt).get(W);l.get(bt)!==Et&&(i.uniformBlockBinding(bt,Et,W.__bindingPointIndex),l.set(bt,Et))}function se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},Y=null,X={},f={},d=new WeakMap,x=[],y=null,p=!1,m=null,S=null,A=null,g=null,E=null,b=null,L=null,_=new Dt(0,0,0),w=0,D=!1,U=null,M=null,P=null,I=null,C=null,Ct.set(0,0,i.canvas.width,i.canvas.height),zt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:yt,bindFramebuffer:Wt,drawBuffers:wt,useProgram:jt,setBlending:ct,setMaterial:dt,setFlipSided:mt,setCullFace:_t,setLineWidth:$t,setPolygonOffset:Xt,setScissorTest:J,activeTexture:lt,bindTexture:z,unbindTexture:Yt,compressedTexImage2D:Gt,compressedTexImage3D:R,texImage2D:tt,texImage3D:st,pixelStorei:Ft,getParameter:vt,updateUBOMapping:kt,uniformBlockBinding:Jt,texStorage2D:ut,texStorage3D:xt,texSubImage2D:v,texSubImage3D:H,compressedTexSubImage2D:G,compressedTexSubImage3D:K,scissor:St,viewport:Mt,reset:se}}function M_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,h=new WeakMap,u=new Set,f,d=new WeakMap,x=!1;try{x=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,v){return x?new OffscreenCanvas(R,v):Dr("canvas")}function p(R,v,H){let G=1,K=Gt(R);if((K.width>H||K.height>H)&&(G=H/Math.max(K.width,K.height)),G<1)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap||typeof VideoFrame!="undefined"&&R instanceof VideoFrame){let ut=Math.floor(G*K.width),xt=Math.floor(G*K.height);f===void 0&&(f=y(ut,xt));let tt=v?y(ut,xt):f;return tt.width=ut,tt.height=xt,tt.getContext("2d").drawImage(R,0,0,ut,xt),Kt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ut+"x"+xt+")."),tt}else return"data"in R&&Kt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function m(R){return R.generateMipmaps}function S(R){i.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function g(R,v,H,G,K,ut=!1){if(R!==null){if(i[R]!==void 0)return i[R];Kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let xt;G&&(xt=t.get("EXT_texture_norm16"),xt||Kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=v;if(v===i.RED&&(H===i.FLOAT&&(tt=i.R32F),H===i.HALF_FLOAT&&(tt=i.R16F),H===i.UNSIGNED_BYTE&&(tt=i.R8),H===i.UNSIGNED_SHORT&&xt&&(tt=xt.R16_EXT),H===i.SHORT&&xt&&(tt=xt.R16_SNORM_EXT)),v===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.R8UI),H===i.UNSIGNED_SHORT&&(tt=i.R16UI),H===i.UNSIGNED_INT&&(tt=i.R32UI),H===i.BYTE&&(tt=i.R8I),H===i.SHORT&&(tt=i.R16I),H===i.INT&&(tt=i.R32I)),v===i.RG&&(H===i.FLOAT&&(tt=i.RG32F),H===i.HALF_FLOAT&&(tt=i.RG16F),H===i.UNSIGNED_BYTE&&(tt=i.RG8),H===i.UNSIGNED_SHORT&&xt&&(tt=xt.RG16_EXT),H===i.SHORT&&xt&&(tt=xt.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.RG8UI),H===i.UNSIGNED_SHORT&&(tt=i.RG16UI),H===i.UNSIGNED_INT&&(tt=i.RG32UI),H===i.BYTE&&(tt=i.RG8I),H===i.SHORT&&(tt=i.RG16I),H===i.INT&&(tt=i.RG32I)),v===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),H===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),H===i.UNSIGNED_INT&&(tt=i.RGB32UI),H===i.BYTE&&(tt=i.RGB8I),H===i.SHORT&&(tt=i.RGB16I),H===i.INT&&(tt=i.RGB32I)),v===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),H===i.UNSIGNED_INT&&(tt=i.RGBA32UI),H===i.BYTE&&(tt=i.RGBA8I),H===i.SHORT&&(tt=i.RGBA16I),H===i.INT&&(tt=i.RGBA32I)),v===i.RGB&&(H===i.UNSIGNED_SHORT&&xt&&(tt=xt.RGB16_EXT),H===i.SHORT&&xt&&(tt=xt.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(tt=i.R11F_G11F_B10F)),v===i.RGBA){let st=ut?Lr:fe.getTransfer(K);H===i.FLOAT&&(tt=i.RGBA32F),H===i.HALF_FLOAT&&(tt=i.RGBA16F),H===i.UNSIGNED_BYTE&&(tt=st===ve?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&xt&&(tt=xt.RGBA16_EXT),H===i.SHORT&&xt&&(tt=xt.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function E(R,v){let H;return R?v===null||v===Wn||v===rr?H=i.DEPTH24_STENCIL8:v===Cn?H=i.DEPTH32F_STENCIL8:v===sr&&(H=i.DEPTH24_STENCIL8,Kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Wn||v===rr?H=i.DEPTH_COMPONENT24:v===Cn?H=i.DEPTH_COMPONENT32F:v===sr&&(H=i.DEPTH_COMPONENT16),H}function b(R,v){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==tn&&R.minFilter!==nn?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function L(R){let v=R.target;v.removeEventListener("dispose",L),w(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&u.delete(v)}function _(R){let v=R.target;v.removeEventListener("dispose",_),U(v)}function w(R){let v=n.get(R);if(v.__webglInit===void 0)return;let H=R.source,G=d.get(H);if(G){let K=G[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&D(R),Object.keys(G).length===0&&d.delete(H)}n.remove(R)}function D(R){let v=n.get(R);i.deleteTexture(v.__webglTexture);let H=R.source,G=d.get(H);delete G[v.__cacheKey],a.memory.textures--}function U(R){let v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(v.__webglFramebuffer[G]))for(let K=0;K<v.__webglFramebuffer[G].length;K++)i.deleteFramebuffer(v.__webglFramebuffer[G][K]);else i.deleteFramebuffer(v.__webglFramebuffer[G]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[G])}else{if(Array.isArray(v.__webglFramebuffer))for(let G=0;G<v.__webglFramebuffer.length;G++)i.deleteFramebuffer(v.__webglFramebuffer[G]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let G=0;G<v.__webglColorRenderbuffer.length;G++)v.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[G]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let H=R.textures;for(let G=0,K=H.length;G<K;G++){let ut=n.get(H[G]);ut.__webglTexture&&(i.deleteTexture(ut.__webglTexture),a.memory.textures--),n.remove(H[G])}n.remove(R)}let M=0;function P(){M=0}function I(){return M}function C(R){M=R}function N(){let R=M;return R>=s.maxTextures&&Kt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),M+=1,R}function F(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function k(R,v){let H=n.get(R);if(R.isVideoTexture&&z(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&H.__version!==R.version){let G=R.image;if(G===null)Kt("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Kt("WebGLRenderer: Texture marked for update but image is incomplete");else{yt(H,R,v);return}}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+v)}function O(R,v){let H=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){yt(H,R,v);return}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+v)}function Y(R,v){let H=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){yt(H,R,v);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+v)}function X(R,v){let H=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&H.__version!==R.version){Wt(H,R,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+v)}let at={[Bs]:i.REPEAT,[jn]:i.CLAMP_TO_EDGE,[So]:i.MIRRORED_REPEAT},ot={[tn]:i.NEAREST,[vf]:i.NEAREST_MIPMAP_NEAREST,[la]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[el]:i.LINEAR_MIPMAP_NEAREST,[ki]:i.LINEAR_MIPMAP_LINEAR},Ct={[Ef]:i.NEVER,[Cf]:i.ALWAYS,[wf]:i.LESS,[Bl]:i.LEQUAL,[Tf]:i.EQUAL,[kl]:i.GEQUAL,[Af]:i.GREATER,[Rf]:i.NOTEQUAL};function zt(R,v){if(v.type===Cn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===nn||v.magFilter===el||v.magFilter===la||v.magFilter===ki||v.minFilter===nn||v.minFilter===el||v.minFilter===la||v.minFilter===ki)&&Kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,at[v.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,at[v.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,at[v.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ot[v.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ot[v.minFilter]),v.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Ct[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===tn||v.minFilter!==la&&v.minFilter!==ki||v.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Zt(R,v){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",L));let G=v.source,K=d.get(G);K===void 0&&(K={},d.set(G,K));let ut=F(v);if(ut!==R.__cacheKey){K[ut]===void 0&&(K[ut]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),K[ut].usedTimes++;let xt=K[R.__cacheKey];xt!==void 0&&(K[R.__cacheKey].usedTimes--,xt.usedTimes===0&&D(v)),R.__cacheKey=ut,R.__webglTexture=K[ut].texture}return H}function q(R,v,H){return Math.floor(Math.floor(R/H)/v)}function et(R,v,H,G){let ut=R.updateRanges;if(ut.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,H,G,v.data);else{ut.sort((Ft,St)=>Ft.start-St.start);let xt=0;for(let Ft=1;Ft<ut.length;Ft++){let St=ut[xt],Mt=ut[Ft],kt=St.start+St.count,Jt=q(Mt.start,v.width,4),se=q(St.start,v.width,4);Mt.start<=kt+1&&Jt===se&&q(Mt.start+Mt.count-1,v.width,4)===Jt?St.count=Math.max(St.count,Mt.start+Mt.count-St.start):(++xt,ut[xt]=Mt)}ut.length=xt+1;let tt=e.getParameter(i.UNPACK_ROW_LENGTH),st=e.getParameter(i.UNPACK_SKIP_PIXELS),vt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Ft=0,St=ut.length;Ft<St;Ft++){let Mt=ut[Ft],kt=Math.floor(Mt.start/4),Jt=Math.ceil(Mt.count/4),se=kt%v.width,W=Math.floor(kt/v.width),bt=Jt,rt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,se),e.pixelStorei(i.UNPACK_SKIP_ROWS,W),e.texSubImage2D(i.TEXTURE_2D,0,se,W,bt,rt,H,G,v.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,tt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,st),e.pixelStorei(i.UNPACK_SKIP_ROWS,vt)}}function yt(R,v,H){let G=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(G=i.TEXTURE_3D);let K=Zt(R,v),ut=v.source;e.bindTexture(G,R.__webglTexture,i.TEXTURE0+H);let xt=n.get(ut);if(ut.version!==xt.__version||K===!0){if(e.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap!="undefined"&&v.image instanceof ImageBitmap)===!1){let rt=fe.getPrimaries(fe.workingColorSpace),Et=v.colorSpace===xi?null:fe.getPrimaries(v.colorSpace),It=v.colorSpace===xi||rt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let st=p(v.image,!1,s.maxTextureSize);st=Yt(v,st);let vt=r.convert(v.format,v.colorSpace),Ft=r.convert(v.type),St=g(v.internalFormat,vt,Ft,v.normalized,v.colorSpace,v.isVideoTexture);zt(G,v);let Mt,kt=v.mipmaps,Jt=v.isVideoTexture!==!0,se=xt.__version===void 0||K===!0,W=ut.dataReady,bt=b(v,st);if(v.isDepthTexture)St=E(v.format===Hi,v.type),se&&(Jt?e.texStorage2D(i.TEXTURE_2D,1,St,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,St,st.width,st.height,0,vt,Ft,null));else if(v.isDataTexture)if(kt.length>0){Jt&&se&&e.texStorage2D(i.TEXTURE_2D,bt,St,kt[0].width,kt[0].height);for(let rt=0,Et=kt.length;rt<Et;rt++)Mt=kt[rt],Jt?W&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Mt.width,Mt.height,vt,Ft,Mt.data):e.texImage2D(i.TEXTURE_2D,rt,St,Mt.width,Mt.height,0,vt,Ft,Mt.data);v.generateMipmaps=!1}else Jt?(se&&e.texStorage2D(i.TEXTURE_2D,bt,St,st.width,st.height),W&&et(v,st,vt,Ft)):e.texImage2D(i.TEXTURE_2D,0,St,st.width,st.height,0,vt,Ft,st.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Jt&&se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,St,kt[0].width,kt[0].height,st.depth);for(let rt=0,Et=kt.length;rt<Et;rt++)if(Mt=kt[rt],v.format!==In)if(vt!==null)if(Jt){if(W)if(v.layerUpdates.size>0){let It=vh(Mt.width,Mt.height,v.format,v.type);for(let ht of v.layerUpdates){let qt=Mt.data.subarray(ht*It/Mt.data.BYTES_PER_ELEMENT,(ht+1)*It/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,ht,Mt.width,Mt.height,1,vt,qt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,Mt.width,Mt.height,st.depth,vt,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,St,Mt.width,Mt.height,st.depth,0,Mt.data,0,0);else Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?W&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,Mt.width,Mt.height,st.depth,vt,Ft,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,St,Mt.width,Mt.height,st.depth,0,vt,Ft,Mt.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Jt&&se&&e.texStorage2D(i.TEXTURE_2D,bt,St,kt[0].width,kt[0].height);for(let rt=0,Et=kt.length;rt<Et;rt++)Mt=kt[rt],v.format!==In?vt!==null?Jt?W&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,Mt.width,Mt.height,vt,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,St,Mt.width,Mt.height,0,Mt.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?W&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Mt.width,Mt.height,vt,Ft,Mt.data):e.texImage2D(i.TEXTURE_2D,rt,St,Mt.width,Mt.height,0,vt,Ft,Mt.data)}else if(v.isDataArrayTexture)if(Jt){if(se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,St,st.width,st.height,st.depth),W)if(v.layerUpdates.size>0){let rt=vh(st.width,st.height,v.format,v.type);for(let Et of v.layerUpdates){let It=st.data.subarray(Et*rt/st.data.BYTES_PER_ELEMENT,(Et+1)*rt/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Et,st.width,st.height,1,vt,Ft,It)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,vt,Ft,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,St,st.width,st.height,st.depth,0,vt,Ft,st.data);else if(v.isData3DTexture)Jt?(se&&e.texStorage3D(i.TEXTURE_3D,bt,St,st.width,st.height,st.depth),W&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,vt,Ft,st.data)):e.texImage3D(i.TEXTURE_3D,0,St,st.width,st.height,st.depth,0,vt,Ft,st.data);else if(v.isFramebufferTexture){if(se)if(Jt)e.texStorage2D(i.TEXTURE_2D,bt,St,st.width,st.height);else{let rt=st.width,Et=st.height;for(let It=0;It<bt;It++)e.texImage2D(i.TEXTURE_2D,It,St,rt,Et,0,vt,Ft,null),rt>>=1,Et>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let rt=i.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),st.parentNode!==rt){rt.appendChild(st),u.add(v),rt.onpaint=Et=>{let It=Et.changedElements;for(let ht of u)It.includes(ht.image)&&(ht.needsUpdate=!0)},rt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,st);else{let It=i.RGBA,ht=i.RGBA,qt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,It,ht,qt,st)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(kt.length>0){if(Jt&&se){let rt=Gt(kt[0]);e.texStorage2D(i.TEXTURE_2D,bt,St,rt.width,rt.height)}for(let rt=0,Et=kt.length;rt<Et;rt++)Mt=kt[rt],Jt?W&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,vt,Ft,Mt):e.texImage2D(i.TEXTURE_2D,rt,St,vt,Ft,Mt);v.generateMipmaps=!1}else if(Jt){if(se){let rt=Gt(st);e.texStorage2D(i.TEXTURE_2D,bt,St,rt.width,rt.height)}W&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Ft,st)}else e.texImage2D(i.TEXTURE_2D,0,St,vt,Ft,st);m(v)&&S(G),xt.__version=ut.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Wt(R,v,H){if(v.image.length!==6)return;let G=Zt(R,v),K=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+H);let ut=n.get(K);if(K.version!==ut.__version||G===!0){e.activeTexture(i.TEXTURE0+H);let xt=fe.getPrimaries(fe.workingColorSpace),tt=v.colorSpace===xi?null:fe.getPrimaries(v.colorSpace),st=v.colorSpace===xi||xt===tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let vt=v.isCompressedTexture||v.image[0].isCompressedTexture,Ft=v.image[0]&&v.image[0].isDataTexture,St=[];for(let ht=0;ht<6;ht++)!vt&&!Ft?St[ht]=p(v.image[ht],!0,s.maxCubemapSize):St[ht]=Ft?v.image[ht].image:v.image[ht],St[ht]=Yt(v,St[ht]);let Mt=St[0],kt=r.convert(v.format,v.colorSpace),Jt=r.convert(v.type),se=g(v.internalFormat,kt,Jt,v.normalized,v.colorSpace),W=v.isVideoTexture!==!0,bt=ut.__version===void 0||G===!0,rt=K.dataReady,Et=b(v,Mt);zt(i.TEXTURE_CUBE_MAP,v);let It;if(vt){W&&bt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,se,Mt.width,Mt.height);for(let ht=0;ht<6;ht++){It=St[ht].mipmaps;for(let qt=0;qt<It.length;qt++){let Ht=It[qt];v.format!==In?kt!==null?W?rt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,qt,0,0,Ht.width,Ht.height,kt,Ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,qt,se,Ht.width,Ht.height,0,Ht.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,qt,0,0,Ht.width,Ht.height,kt,Jt,Ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,qt,se,Ht.width,Ht.height,0,kt,Jt,Ht.data)}}}else{if(It=v.mipmaps,W&&bt){It.length>0&&Et++;let ht=Gt(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,se,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(Ft){W?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,St[ht].width,St[ht].height,kt,Jt,St[ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,se,St[ht].width,St[ht].height,0,kt,Jt,St[ht].data);for(let qt=0;qt<It.length;qt++){let Le=It[qt].image[ht].image;W?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,qt+1,0,0,Le.width,Le.height,kt,Jt,Le.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,qt+1,se,Le.width,Le.height,0,kt,Jt,Le.data)}}else{W?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,kt,Jt,St[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,se,kt,Jt,St[ht]);for(let qt=0;qt<It.length;qt++){let Ht=It[qt];W?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,qt+1,0,0,kt,Jt,Ht.image[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,qt+1,se,kt,Jt,Ht.image[ht])}}}m(v)&&S(i.TEXTURE_CUBE_MAP),ut.__version=K.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function wt(R,v,H,G,K,ut){let xt=r.convert(H.format,H.colorSpace),tt=r.convert(H.type),st=g(H.internalFormat,xt,tt,H.normalized,H.colorSpace),vt=n.get(v),Ft=n.get(H);if(Ft.__renderTarget=v,!vt.__hasExternalTextures){let St=Math.max(1,v.width>>ut),Mt=Math.max(1,v.height>>ut);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,ut,st,St,Mt,v.depth,0,xt,tt,null):e.texImage2D(K,ut,st,St,Mt,0,xt,tt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),lt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,K,Ft.__webglTexture,0,J(v)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,K,Ft.__webglTexture,ut),e.bindFramebuffer(i.FRAMEBUFFER,null)}function jt(R,v,H){if(i.bindRenderbuffer(i.RENDERBUFFER,R),v.depthBuffer){let G=v.depthTexture,K=G&&G.isDepthTexture?G.type:null,ut=E(v.stencilBuffer,K),xt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;lt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J(v),ut,v.width,v.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,J(v),ut,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ut,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,R)}else{let G=v.textures;for(let K=0;K<G.length;K++){let ut=G[K],xt=r.convert(ut.format,ut.colorSpace),tt=r.convert(ut.type),st=g(ut.internalFormat,xt,tt,ut.normalized,ut.colorSpace);lt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J(v),st,v.width,v.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,J(v),st,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,st,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function de(R,v,H){let G=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(v.depthTexture);if(K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G){if(K.__webglInit===void 0&&(K.__webglInit=!0,v.depthTexture.addEventListener("dispose",L)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),zt(i.TEXTURE_CUBE_MAP,v.depthTexture);let vt=r.convert(v.depthTexture.format),Ft=r.convert(v.depthTexture.type),St;v.depthTexture.format===ti?St=i.DEPTH_COMPONENT24:v.depthTexture.format===Hi&&(St=i.DEPTH24_STENCIL8);for(let Mt=0;Mt<6;Mt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,St,v.width,v.height,0,vt,Ft,null)}}else k(v.depthTexture,0);let ut=K.__webglTexture,xt=J(v),tt=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,st=v.depthTexture.format===Hi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===ti)lt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,tt,ut,0,xt):i.framebufferTexture2D(i.FRAMEBUFFER,st,tt,ut,0);else if(v.depthTexture.format===Hi)lt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,tt,ut,0,xt):i.framebufferTexture2D(i.FRAMEBUFFER,st,tt,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(R){let v=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let G=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),G){let K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,G.removeEventListener("dispose",K)};G.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=G}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(H)for(let G=0;G<6;G++)de(v.__webglFramebuffer[G],R,G);else{let G=R.texture.mipmaps;G&&G.length>0?de(v.__webglFramebuffer[0],R,0):de(v.__webglFramebuffer,R,0)}else if(H){v.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[G]),v.__webglDepthbuffer[G]===void 0)v.__webglDepthbuffer[G]=i.createRenderbuffer(),jt(v.__webglDepthbuffer[G],R,!1);else{let K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=v.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ut)}}else{let G=R.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),jt(v.__webglDepthbuffer,R,!1);else{let K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ut)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(R,v,H){let G=n.get(R);v!==void 0&&wt(G.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&it(R)}function dt(R){let v=R.texture,H=n.get(R),G=n.get(v);R.addEventListener("dispose",_);let K=R.textures,ut=R.isWebGLCubeRenderTarget===!0,xt=K.length>1;if(xt||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=v.version,a.memory.textures++),ut){H.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[tt]=[];for(let st=0;st<v.mipmaps.length;st++)H.__webglFramebuffer[tt][st]=i.createFramebuffer()}else H.__webglFramebuffer[tt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let tt=0;tt<v.mipmaps.length;tt++)H.__webglFramebuffer[tt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(xt)for(let tt=0,st=K.length;tt<st;tt++){let vt=n.get(K[tt]);vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&lt(R)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let tt=0;tt<K.length;tt++){let st=K[tt];H.__webglColorRenderbuffer[tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[tt]);let vt=r.convert(st.format,st.colorSpace),Ft=r.convert(st.type),St=g(st.internalFormat,vt,Ft,st.normalized,st.colorSpace,R.isXRRenderTarget===!0),Mt=J(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,St,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+tt,i.RENDERBUFFER,H.__webglColorRenderbuffer[tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),jt(H.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ut){e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),zt(i.TEXTURE_CUBE_MAP,v);for(let tt=0;tt<6;tt++)if(v.mipmaps&&v.mipmaps.length>0)for(let st=0;st<v.mipmaps.length;st++)wt(H.__webglFramebuffer[tt][st],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,st);else wt(H.__webglFramebuffer[tt],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);m(v)&&S(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let tt=0,st=K.length;tt<st;tt++){let vt=K[tt],Ft=n.get(vt),St=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(St=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,Ft.__webglTexture),zt(St,vt),wt(H.__webglFramebuffer,R,vt,i.COLOR_ATTACHMENT0+tt,St,0),m(vt)&&S(St)}e.unbindTexture()}else{let tt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(tt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(tt,G.__webglTexture),zt(tt,v),v.mipmaps&&v.mipmaps.length>0)for(let st=0;st<v.mipmaps.length;st++)wt(H.__webglFramebuffer[st],R,v,i.COLOR_ATTACHMENT0,tt,st);else wt(H.__webglFramebuffer,R,v,i.COLOR_ATTACHMENT0,tt,0);m(v)&&S(tt),e.unbindTexture()}R.depthBuffer&&it(R)}function mt(R){let v=R.textures;for(let H=0,G=v.length;H<G;H++){let K=v[H];if(m(K)){let ut=A(R),xt=n.get(K).__webglTexture;e.bindTexture(ut,xt),S(ut),e.unbindTexture()}}}let _t=[],$t=[];function Xt(R){if(R.samples>0){if(lt(R)===!1){let v=R.textures,H=R.width,G=R.height,K=i.COLOR_BUFFER_BIT,ut=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(R),tt=v.length>1;if(tt)for(let vt=0;vt<v.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer);let st=R.texture.mipmaps;st&&st.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let vt=0;vt<v.length;vt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),tt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[vt]);let Ft=n.get(v[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ft,0)}i.blitFramebuffer(0,0,H,G,0,0,H,G,K,i.NEAREST),l===!0&&(_t.length=0,$t.length=0,_t.push(i.COLOR_ATTACHMENT0+vt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(_t.push(ut),$t.push(ut),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,$t)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_t))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),tt)for(let vt=0;vt<v.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,xt.__webglColorRenderbuffer[vt]);let Ft=n.get(v[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,Ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let v=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function J(R){return Math.min(s.maxSamples,R.samples)}function lt(R){let v=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function z(R){let v=a.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function Yt(R,v){let H=R.colorSpace,G=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==Pr&&H!==xi&&(fe.getTransfer(H)===ve?(G!==In||K!==_n)&&Kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",H)),v}function Gt(R){return typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame!="undefined"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=P,this.getTextureUnits=I,this.setTextureUnits=C,this.setTexture2D=k,this.setTexture2DArray=O,this.setTexture3D=Y,this.setTextureCube=X,this.rebindTextures=ct,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=lt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function S_(i,t){function e(n,s=xi){let r,a=fe.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===il)return i.UNSIGNED_SHORT_4_4_4_4;if(n===sl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ch)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===oh)return i.BYTE;if(n===lh)return i.SHORT;if(n===sr)return i.UNSIGNED_SHORT;if(n===nl)return i.INT;if(n===Wn)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===Xn)return i.HALF_FLOAT;if(n===uh)return i.ALPHA;if(n===fh)return i.RGB;if(n===In)return i.RGBA;if(n===ti)return i.DEPTH_COMPONENT;if(n===Hi)return i.DEPTH_STENCIL;if(n===rl)return i.RED;if(n===al)return i.RED_INTEGER;if(n===Gi)return i.RG;if(n===ol)return i.RG_INTEGER;if(n===ll)return i.RGBA_INTEGER;if(n===ca||n===ha||n===ua||n===fa)if(a===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ca)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ca)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ua)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cl||n===hl||n===ul||n===fl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ul)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dl||n===pl||n===ml||n===gl||n===xl||n===da||n===yl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===dl||n===pl)return a===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ml)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===gl)return r.COMPRESSED_R11_EAC;if(n===xl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===da)return r.COMPRESSED_RG11_EAC;if(n===yl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===_l||n===vl||n===Ml||n===Sl||n===bl||n===El||n===wl||n===Tl||n===Al||n===Rl||n===Cl||n===Il||n===Pl||n===Ll)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_l)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ml)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===El)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Al)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Rl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Cl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Il)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ll)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Dl||n===Nl||n===Ul)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Dl)return a===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ul)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fl||n===zl||n===pa||n===Ol)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===zl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ol)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var b_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E_=`
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

}`,Bh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Xr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new qe({vertexShader:b_,fragmentShader:E_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new nt(new Be(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},kh=class extends ei{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,x=null,y=typeof XRWebGLBinding!="undefined",p=new Bh,m={},S=e.getContextAttributes(),A=null,g=null,E=[],b=[],L=new gt,_=null,w=null,D=new $e;D.viewport=new Ne;let U=new $e;U.viewport=new Ne;let M=[D,U],P=new $o,I=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let et=E[q];return et===void 0&&(et=new Ws,E[q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(q){let et=E[q];return et===void 0&&(et=new Ws,E[q]=et),et.getGripSpace()},this.getHand=function(q){let et=E[q];return et===void 0&&(et=new Ws,E[q]=et),et.getHandSpace()};function N(q){let et=b.indexOf(q.inputSource);if(et===-1)return;let yt=E[et];yt!==void 0&&(yt.update(q.inputSource,q.frame,c||a),yt.dispatchEvent({type:q.type,data:q.inputSource}))}function F(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",k);for(let q=0;q<E.length;q++){let et=b[q];et!==null&&(b[q]=null,E[q].disconnect(et))}I=null,C=null,p.reset();for(let q in m)delete m[q];if(t.setRenderTarget(A),d=null,f=null,u=null,s=null,g=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(L.width,L.height,!1),w!==null){let q=w.camera;q.fov=w.fov,q.zoom=w.zoom,q.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",F),s.addEventListener("inputsourceschange",k),S.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(L),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Wt=null,wt=null;S.depth&&(wt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=S.stencil?Hi:ti,Wt=S.stencil?rr:Wn);let jt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(jt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),g=new yn(f.textureWidth,f.textureHeight,{format:In,type:_n,depthTexture:new Pi(f.textureWidth,f.textureHeight,Wt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let yt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),g=new yn(d.framebufferWidth,d.framebufferHeight,{format:In,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Zt.setContext(s),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function k(q){for(let et=0;et<q.removed.length;et++){let yt=q.removed[et],Wt=b.indexOf(yt);Wt>=0&&(b[Wt]=null,E[Wt].disconnect(yt))}for(let et=0;et<q.added.length;et++){let yt=q.added[et],Wt=b.indexOf(yt);if(Wt===-1){for(let jt=0;jt<E.length;jt++)if(jt>=b.length){b.push(yt),Wt=jt;break}else if(b[jt]===null){b[jt]=yt,Wt=jt;break}if(Wt===-1)break}let wt=E[Wt];wt&&wt.connect(yt)}}let O=new B,Y=new B;function X(q,et,yt){O.setFromMatrixPosition(et.matrixWorld),Y.setFromMatrixPosition(yt.matrixWorld);let Wt=O.distanceTo(Y),wt=et.projectionMatrix.elements,jt=yt.projectionMatrix.elements,de=wt[14]/(wt[10]-1),it=wt[14]/(wt[10]+1),ct=(wt[9]+1)/wt[5],dt=(wt[9]-1)/wt[5],mt=(wt[8]-1)/wt[0],_t=(jt[8]+1)/jt[0],$t=de*mt,Xt=de*_t,J=Wt/(-mt+_t),lt=J*-mt;if(et.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(lt),q.translateZ(J),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),wt[10]===-1)q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let z=de+J,Yt=it+J,Gt=$t-lt,R=Xt+(Wt-lt),v=ct*it/Yt*z,H=dt*it/Yt*z;q.projectionMatrix.makePerspective(Gt,R,v,H,z,Yt),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function at(q,et){et===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(et.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let et=q.near,yt=q.far;p.texture!==null&&(p.depthNear>0&&(et=p.depthNear),p.depthFar>0&&(yt=p.depthFar)),P.near=U.near=D.near=et,P.far=U.far=D.far=yt,(I!==P.near||C!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),I=P.near,C=P.far),P.layers.mask=q.layers.mask|6,D.layers.mask=P.layers.mask&-5,U.layers.mask=P.layers.mask&-3;let Wt=q.parent,wt=P.cameras;at(P,Wt);for(let jt=0;jt<wt.length;jt++)at(wt[jt],Wt);wt.length===2?X(P,D,U):P.projectionMatrix.copy(D.projectionMatrix),w===null&&q.isPerspectiveCamera&&(w={camera:q,fov:q.fov,zoom:q.zoom}),ot(q,P,Wt)};function ot(q,et,yt){yt===null?q.matrix.copy(et.matrixWorld):(q.matrix.copy(yt.matrixWorld),q.matrix.invert(),q.matrix.multiply(et.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Gs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(P)},this.getCameraTexture=function(q){return m[q]};let Ct=null;function zt(q,et){if(h=et.getViewerPose(c||a),x=et,h!==null){let yt=h.views;d!==null&&(t.setRenderTargetFramebuffer(g,d.framebuffer),t.setRenderTarget(g));let Wt=!1;yt.length!==P.cameras.length&&(P.cameras.length=0,Wt=!0);for(let it=0;it<yt.length;it++){let ct=yt[it],dt=null;if(d!==null)dt=d.getViewport(ct);else{let _t=u.getViewSubImage(f,ct);dt=_t.viewport,it===0&&(t.setRenderTargetTextures(g,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(g))}let mt=M[it];mt===void 0&&(mt=new $e,mt.layers.enable(it),mt.viewport=new Ne,M[it]=mt),mt.matrix.fromArray(ct.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(ct.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(dt.x,dt.y,dt.width,dt.height),it===0&&(P.matrix.copy(mt.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Wt===!0&&P.cameras.push(mt)}let wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let it=u.getDepthInformation(yt[0]);it&&it.isValid&&it.texture&&p.init(it,s.renderState)}if(wt&&wt.includes("camera-access")&&y){t.state.unbindTexture(),u=n.getBinding();for(let it=0;it<yt.length;it++){let ct=yt[it].camera;if(ct){let dt=m[ct];dt||(dt=new Xr,m[ct]=dt);let mt=u.getCameraImage(ct);dt.sourceTexture=mt}}}}for(let yt=0;yt<E.length;yt++){let Wt=b[yt],wt=E[yt];Wt!==null&&wt!==void 0&&wt.update(Wt,et,c||a)}Ct&&Ct(q,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),x=null}let Zt=new hd;Zt.setAnimationLoop(zt),this.setAnimationLoop=function(q){Ct=q},this.dispose=function(){}}},w_=new xe,gd=new ee;gd.set(-1,0,0,0,1,0,0,0,1);function T_(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,xh(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,S,A,g){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,g)):m.isMeshMatcapMaterial?(r(p,m),x(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,S,A):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Je&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Je&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let S=t.get(m),A=S.envMap,g=S.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(w_.makeRotationFromEuler(g)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(gd),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,A){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=A*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Je&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let S=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function A_(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,E){let b=E.program;n.uniformBlockBinding(g,b)}function c(g,E){let b=s[g.id];b===void 0&&(p(g),b=h(g),s[g.id]=b,g.addEventListener("dispose",S));let L=E.program;n.updateUBOMapping(g,L);let _=t.render.frame;r[g.id]!==_&&(f(g),r[g.id]=_)}function h(g){let E=u();g.__bindingPointIndex=E;let b=i.createBuffer(),L=g.__size,_=g.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,L,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,b),b}function u(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return Qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){let E=s[g.id],b=g.uniforms,L=g.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let _=0,w=b.length;_<w;_++){let D=b[_];if(Array.isArray(D))for(let U=0,M=D.length;U<M;U++)d(D[U],_,U,L);else d(D,_,0,L)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(g,E,b,L){if(y(g,E,b,L)===!0){let _=g.__offset,w=g.value;if(Array.isArray(w)){let D=0;for(let U=0;U<w.length;U++){let M=w[U],P=m(M);x(M,g.__data,D),typeof M!="number"&&typeof M!="boolean"&&!M.isMatrix3&&!ArrayBuffer.isView(M)&&(D+=P.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(w,g.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,g.__data)}}function x(g,E,b){typeof g=="number"||typeof g=="boolean"?E[0]=g:g.isMatrix3?(E[0]=g.elements[0],E[1]=g.elements[1],E[2]=g.elements[2],E[3]=0,E[4]=g.elements[3],E[5]=g.elements[4],E[6]=g.elements[5],E[7]=0,E[8]=g.elements[6],E[9]=g.elements[7],E[10]=g.elements[8],E[11]=0):ArrayBuffer.isView(g)?E.set(new g.constructor(g.buffer,g.byteOffset,E.length)):g.toArray(E,b)}function y(g,E,b,L){let _=g.value,w=E+"_"+b;if(L[w]===void 0)return typeof _=="number"||typeof _=="boolean"?L[w]=_:ArrayBuffer.isView(_)?L[w]=_.slice():L[w]=_.clone(),!0;{let D=L[w];if(typeof _=="number"||typeof _=="boolean"){if(D!==_)return L[w]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(D.equals(_)===!1)return D.copy(_),!0}}return!1}function p(g){let E=g.uniforms,b=0,L=16;for(let w=0,D=E.length;w<D;w++){let U=Array.isArray(E[w])?E[w]:[E[w]];for(let M=0,P=U.length;M<P;M++){let I=U[M],C=Array.isArray(I.value)?I.value:[I.value];for(let N=0,F=C.length;N<F;N++){let k=C[N],O=m(k),Y=b%L,X=Y%O.boundary,at=Y+X;b+=X,at!==0&&L-at<O.storage&&(b+=L-at),I.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=b,b+=O.storage}}}let _=b%L;return _>0&&(b+=L-_),g.__size=b,g.__cache={},this}function m(g){let E={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(E.boundary=4,E.storage=4):g.isVector2?(E.boundary=8,E.storage=8):g.isVector3||g.isColor?(E.boundary=16,E.storage=12):g.isVector4?(E.boundary=16,E.storage=16):g.isMatrix3?(E.boundary=48,E.storage=48):g.isMatrix4?(E.boundary=64,E.storage=64):g.isTexture?Kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(E.boundary=16,E.storage=g.byteLength):Kt("WebGLRenderer: Unsupported uniform value type.",g),E}function S(g){let E=g.target;E.removeEventListener("dispose",S);let b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function A(){for(let g in s)i.deleteBuffer(s[g]);a=[],s={},r={}}return{bind:l,update:c,dispose:A}}var R_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),si=null;function C_(){return si===null&&(si=new Gr(R_,16,16,Gi,Xn),si.name="DFG_LUT",si.minFilter=nn,si.magFilter=nn,si.wrapS=jn,si.wrapT=jn,si.generateMipmaps=!1,si.needsUpdate=!0),si}var va=class{constructor(t={}){let{canvas:e=If(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=_n}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let y=d,p=new Set([ll,ol,al]),m=new Set([_n,Wn,sr,rr,il,sl]),S=new Uint32Array(4),A=new Int32Array(4),g=new B,E=null,b=null,L=[],_=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,U=!1,M=null,P=null,I=null,C=null;this._outputColorSpace=Ce;let N=0,F=0,k=null,O=-1,Y=null,X=new Ne,at=new Ne,ot=null,Ct=new Dt(0),zt=0,Zt=e.width,q=e.height,et=1,yt=null,Wt=null,wt=new Ne(0,0,Zt,q),jt=new Ne(0,0,Zt,q),de=!1,it=new $s,ct=!1,dt=!1,mt=new xe,_t=new B,$t=new Ne,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},J=!1;function lt(){return k===null?et:1}let z=n;function Yt(T,V){return e.getContext(T,V)}let Gt,R,v,H,G,K,ut,xt,tt,st,vt,Ft,St,Mt,kt,Jt,se,W,bt,rt,Et,It,ht;try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Le,!1),e.addEventListener("webglcontextrestored",ye,!1),e.addEventListener("webglcontextcreationerror",Un,!1),z===null){let V="webgl2";if(z=Yt(V,T),z===null)throw Yt(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qt()}catch(T){throw e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",ye,!1),e.removeEventListener("webglcontextcreationerror",Un,!1),Qt("WebGLRenderer: "+T.message),T}function qt(){Gt=new Fx(z),Gt.init(),Et=new S_(z,Gt),R=new Tx(z,Gt,t,Et),v=new v_(z,Gt),R.reversedDepthBuffer&&f&&v.buffers.depth.setReversed(!0),P=z.createFramebuffer(),I=z.createFramebuffer(),C=z.createFramebuffer(),H=new Bx(z),G=new a_,K=new M_(z,Gt,v,G,R,Et,H),ut=new Ux(D),xt=new Hm(z),It=new Ex(z,xt),tt=new zx(z,xt,H,It),st=new Hx(z,tt,xt,It,H),W=new kx(z,R,K),kt=new Ax(G),vt=new r_(D,ut,Gt,R,It,kt),Ft=new T_(D,G),St=new l_,Mt=new p_(Gt),se=new bx(D,ut,v,st,x,l),Jt=new __(D,st,R),ht=new A_(z,H,R,v),bt=new wx(z,Gt,H),rt=new Ox(z,Gt,H),H.programs=vt.programs,D.capabilities=R,D.extensions=Gt,D.properties=G,D.renderLists=St,D.shadowMap=Jt,D.state=v,D.info=H}y!==_n&&(w=new Vx(y,e.width,e.height,o,s,r));let Ht=new kh(D,z);this.xr=Ht,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let T=Gt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Gt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(T){T!==void 0&&(et=T,this.setSize(Zt,q,!1))},this.getSize=function(T){return T.set(Zt,q)},this.setSize=function(T,V,j=!0){if(Ht.isPresenting){Kt("WebGLRenderer: Can't change size while VR device is presenting.");return}Zt=T,q=V,e.width=Math.floor(T*et),e.height=Math.floor(V*et),j===!0&&(e.style.width=T+"px",e.style.height=V+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(Zt*et,q*et).floor()},this.setDrawingBufferSize=function(T,V,j){Zt=T,q=V,et=j,e.width=Math.floor(T*j),e.height=Math.floor(V*j),this.setViewport(0,0,T,V)},this.setEffects=function(T){if(y===_n){Qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let V=0;V<T.length;V++)if(T[V].isOutputPass===!0){Kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(X)},this.getViewport=function(T){return T.copy(wt)},this.setViewport=function(T,V,j,Z){T.isVector4?wt.set(T.x,T.y,T.z,T.w):wt.set(T,V,j,Z),v.viewport(X.copy(wt).multiplyScalar(et).round())},this.getScissor=function(T){return T.copy(jt)},this.setScissor=function(T,V,j,Z){T.isVector4?jt.set(T.x,T.y,T.z,T.w):jt.set(T,V,j,Z),v.scissor(at.copy(jt).multiplyScalar(et).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(T){v.setScissorTest(de=T)},this.setOpaqueSort=function(T){yt=T},this.setTransparentSort=function(T){Wt=T},this.getClearColor=function(T){return T.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(T=!0,V=!0,j=!0){let Z=0;if(T){let $=!1;if(k!==null){let Rt=k.texture.format;$=p.has(Rt)}if($){let Rt=k.texture.type,Lt=m.has(Rt),At=se.getClearColor(),Ot=se.getClearAlpha(),Vt=At.r,oe=At.g,ue=At.b;Lt?(S[0]=Vt,S[1]=oe,S[2]=ue,S[3]=Ot,z.clearBufferuiv(z.COLOR,0,S)):(A[0]=Vt,A[1]=oe,A[2]=ue,A[3]=Ot,z.clearBufferiv(z.COLOR,0,A))}else Z|=z.COLOR_BUFFER_BIT}V&&(Z|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(Z|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&z.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),M=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",ye,!1),e.removeEventListener("webglcontextcreationerror",Un,!1),se.dispose(),St.dispose(),Mt.dispose(),G.dispose(),ut.dispose(),st.dispose(),It.dispose(),ht.dispose(),vt.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",lu),Ht.removeEventListener("sessionend",cu),Zi.stop()};function Le(T){T.preventDefault(),Nr("WebGLRenderer: Context Lost."),U=!0}function ye(){Nr("WebGLRenderer: Context Restored."),U=!1;let T=H.autoReset,V=Jt.enabled,j=Jt.autoUpdate,Z=Jt.needsUpdate,$=Jt.type;qt(),H.autoReset=T,Jt.enabled=V,Jt.autoUpdate=j,Jt.needsUpdate=Z,Jt.type=$}function Un(T){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function $n(T){let V=T.target;V.removeEventListener("dispose",$n),op(V)}function op(T){lp(T),G.remove(T)}function lp(T){let V=G.get(T).programs;V!==void 0&&(V.forEach(function(j){vt.releaseProgram(j)}),T.isShaderMaterial&&vt.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,j,Z,$,Rt){V===null&&(V=Xt);let Lt=$.isMesh&&$.matrixWorld.determinantAffine()<0,At=up(T,V,j,Z,$);v.setMaterial(Z,Lt);let Ot=j.index,Vt=1;if(Z.wireframe===!0){if(Ot=tt.getWireframeAttribute(j),Ot===void 0)return;Vt=2}let oe=j.drawRange,ue=j.attributes.position,Bt=oe.start*Vt,_e=(oe.start+oe.count)*Vt;Rt!==null&&(Bt=Math.max(Bt,Rt.start*Vt),_e=Math.min(_e,(Rt.start+Rt.count)*Vt)),Ot!==null?(Bt=Math.max(Bt,0),_e=Math.min(_e,Ot.count)):ue!=null&&(Bt=Math.max(Bt,0),_e=Math.min(_e,ue.count));let We=_e-Bt;if(We<0||We===1/0)return;It.setup($,Z,At,j,Ot);let Ue,Re=bt;if(Ot!==null&&(Ue=xt.get(Ot),Re=rt,Re.setIndex(Ue)),$.isMesh)Z.wireframe===!0?(v.setLineWidth(Z.wireframeLinewidth*lt()),Re.setMode(z.LINES)):Re.setMode(z.TRIANGLES);else if($.isLine){let rn=Z.linewidth;rn===void 0&&(rn=1),v.setLineWidth(rn*lt()),$.isLineSegments?Re.setMode(z.LINES):$.isLineLoop?Re.setMode(z.LINE_LOOP):Re.setMode(z.LINE_STRIP)}else $.isPoints?Re.setMode(z.POINTS):$.isSprite&&Re.setMode(z.TRIANGLES);if($.isBatchedMesh)if(Gt.get("WEBGL_multi_draw"))Re.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let rn=$._multiDrawStarts,Pt=$._multiDrawCounts,dn=$._multiDrawCount,ge=Ot?xt.get(Ot).bytesPerElement:1,An=G.get(Z).currentProgram.getUniforms();for(let Jn=0;Jn<dn;Jn++)An.setValue(z,"_gl_DrawID",Jn),Re.render(rn[Jn]/ge,Pt[Jn])}else if($.isInstancedMesh)Re.renderInstances(Bt,We,$.count);else if(j.isInstancedBufferGeometry){let rn=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Pt=Math.min(j.instanceCount,rn);Re.renderInstances(Bt,We,Pt)}else Re.render(Bt,We)};function ou(T,V,j,Z){M!==null&&T.isNodeMaterial&&M.setObject(Z,T),ct===!0&&kt.setState(T,j,!1),T.transparent===!0&&T.side===sn&&T.forceSinglePass===!1?(T.side=Je,T.needsUpdate=!0,Oa(T,V,Z),T.side=zi,T.needsUpdate=!0,Oa(T,V,Z),T.side=sn):Oa(T,V,Z)}this.compile=function(T,V,j=null){j===null&&(j=T),M!==null&&M.renderStart(T,V,j),b=Mt.get(j),b.init(V),_.push(b),j.traverseVisible(function($){$.isLight&&$.layers.test(V.layers)&&(b.pushLight($),$.castShadow&&b.pushShadow($))}),T!==j&&T.traverseVisible(function($){$.isLight&&$.layers.test(V.layers)&&(b.pushLight($),$.castShadow&&b.pushShadow($))}),b.setupLights(),M!==null&&M.updateLights(b.state.lightsArray),dt=this.localClippingEnabled,ct=kt.init(this.clippingPlanes,dt),ct===!0&&kt.setGlobalState(this.clippingPlanes,V),M!==null&&Jt.render(b.state.shadowsArray,j,V);let Z=new Set;return T.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Rt=$.material;if(Rt)if(Array.isArray(Rt))for(let Lt=0;Lt<Rt.length;Lt++){let At=Rt[Lt];ou(At,j,V,$),Z.add(At)}else ou(Rt,j,V,$),Z.add(Rt)}),b=_.pop(),M!==null&&M.renderEnd(),Z},this.compileAsync=function(T,V,j=null){let Z=this.compile(T,V,j);return new Promise($=>{function Rt(){if(Z.forEach(function(Lt){let Ot=G.get(Lt).currentProgram;(Ot===void 0||Ot.isReady())&&Z.delete(Lt)}),Z.size===0){$(T);return}setTimeout(Rt,10)}Gt.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let cc=null;function cp(T){cc&&cc(T)}function lu(){Zi.stop()}function cu(){Zi.start()}let Zi=new hd;Zi.setAnimationLoop(cp),typeof self!="undefined"&&Zi.setContext(self),this.setAnimationLoop=function(T){cc=T,Ht.setAnimationLoop(T),T===null?Zi.stop():Zi.start()},Ht.addEventListener("sessionstart",lu),Ht.addEventListener("sessionend",cu),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;M!==null&&M.renderStart(T,V);let j=Ht.enabled===!0&&Ht.isPresenting===!0,Z=w!==null&&(k===null||j)&&w.begin(D,k);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(V),V=Ht.getCamera()),T.isScene===!0&&T.onBeforeRender(D,T,V,k),b=Mt.get(T,_.length),b.init(V),b.state.textureUnits=K.getTextureUnits(),_.push(b),mt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),it.setFromProjectionMatrix(mt,Hn,V.reversedDepth),dt=this.localClippingEnabled,ct=kt.init(this.clippingPlanes,dt),E=St.get(T,L.length),E.init(),L.push(E),Ht.enabled===!0&&Ht.isPresenting===!0){let Lt=D.xr.getDepthSensingMesh();Lt!==null&&hc(Lt,V,-1/0,D.sortObjects)}hc(T,V,0,D.sortObjects),E.finish(),M!==null&&M.updateLights(b.state.lightsArray),D.sortObjects===!0&&E.sort(yt,Wt),J=Ht.enabled===!1||Ht.isPresenting===!1||Ht.hasDepthSensing()===!1,J&&se.addToRenderList(E,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ct===!0&&kt.beginShadows();let $=b.state.shadowsArray;if(Jt.render($,T,V),ct===!0&&kt.endShadows(),(Z&&w.hasRenderPass())===!1){let Lt=E.opaque,At=E.transmissive;if(b.setupLights(),V.isArrayCamera){let Ot=V.cameras;if(At.length>0)for(let Vt=0,oe=Ot.length;Vt<oe;Vt++){let ue=Ot[Vt];uu(Lt,At,T,ue)}J&&se.render(T);for(let Vt=0,oe=Ot.length;Vt<oe;Vt++){let ue=Ot[Vt];hu(E,T,ue,ue.viewport)}}else At.length>0&&uu(Lt,At,T,V),J&&se.render(T),hu(E,T,V)}k!==null&&F===0&&(K.updateMultisampleRenderTarget(k),K.updateRenderTargetMipmap(k)),Z&&w.end(D),T.isScene===!0&&T.onAfterRender(D,T,V),It.resetDefaultState(),O=-1,Y=null,_.pop(),_.length>0?(b=_[_.length-1],K.setTextureUnits(b.state.textureUnits),ct===!0&&kt.setGlobalState(D.clippingPlanes,b.state.camera)):b=null,L.pop(),L.length>0?E=L[L.length-1]:E=null,M!==null&&M.renderEnd()};function hc(T,V,j,Z){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLightProbeGrid)b.pushLightProbeGrid(T);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(it)){Z&&$t.setFromMatrixPosition(T.matrixWorld).applyMatrix4(mt);let Lt=st.update(T),At=T.material;At.visible&&E.push(T,Lt,At,j,$t.z,null,V)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(it))){let Lt=st.update(T),At=T.material;if(Z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),$t.copy(T.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),$t.copy(Lt.boundingSphere.center)),$t.applyMatrix4(T.matrixWorld).applyMatrix4(mt)),Array.isArray(At)){let Ot=Lt.groups;for(let Vt=0,oe=Ot.length;Vt<oe;Vt++){let ue=Ot[Vt],Bt=At[ue.materialIndex];Bt&&Bt.visible&&E.push(T,Lt,Bt,j,$t.z,ue,V)}}else At.visible&&E.push(T,Lt,At,j,$t.z,null,V)}}let Rt=T.children;for(let Lt=0,At=Rt.length;Lt<At;Lt++)hc(Rt[Lt],V,j,Z)}function hu(T,V,j,Z){let{opaque:$,transmissive:Rt,transparent:Lt}=T;b.setupLightsView(j),ct===!0&&kt.setGlobalState(D.clippingPlanes,j),Z&&v.viewport(X.copy(Z)),$.length>0&&za($,V,j),Rt.length>0&&za(Rt,V,j),Lt.length>0&&za(Lt,V,j),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function uu(T,V,j,Z){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Z.id]===void 0){let Bt=Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Z.id]=new yn(1,1,{generateMipmaps:!0,type:Bt?Xn:_n,minFilter:ki,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:fe.workingColorSpace})}let Rt=b.state.transmissionRenderTarget[Z.id],Lt=Z.viewport||X;Rt.setSize(Lt.z*D.transmissionResolutionScale,Lt.w*D.transmissionResolutionScale);let At=D.getRenderTarget(),Ot=D.getActiveCubeFace(),Vt=D.getActiveMipmapLevel();D.setRenderTarget(Rt),D.getClearColor(Ct),zt=D.getClearAlpha(),zt<1&&D.setClearColor(16777215,.5),D.clear(),J&&se.render(j);let oe=D.toneMapping;D.toneMapping=Vn;let ue=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),b.setupLightsView(Z),ct===!0&&kt.setGlobalState(D.clippingPlanes,Z),za(T,j,Z),K.updateMultisampleRenderTarget(Rt),K.updateRenderTargetMipmap(Rt),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let _e=0,We=V.length;_e<We;_e++){let Ue=V[_e],{object:Re,geometry:rn,material:Pt,group:dn}=Ue;if(Pt.side===sn&&Re.layers.test(Z.layers)){let ge=Pt.side;Pt.side=Je,Pt.needsUpdate=!0,fu(Re,j,Z,rn,Pt,dn),Pt.side=ge,Pt.needsUpdate=!0,Bt=!0}}Bt===!0&&(K.updateMultisampleRenderTarget(Rt),K.updateRenderTargetMipmap(Rt))}D.setRenderTarget(At,Ot,Vt),D.setClearColor(Ct,zt),ue!==void 0&&(Z.viewport=ue),D.toneMapping=oe}function za(T,V,j){let Z=V.isScene===!0?V.overrideMaterial:null;for(let $=0,Rt=T.length;$<Rt;$++){let Lt=T[$],{object:At,geometry:Ot,group:Vt}=Lt,oe=Lt.material;oe.allowOverride===!0&&Z!==null&&(oe=Z),At.layers.test(j.layers)&&fu(At,V,j,Ot,oe,Vt)}}function fu(T,V,j,Z,$,Rt){M!==null&&$.isNodeMaterial&&M.setObject(T,$),T.onBeforeRender(D,V,j,Z,$,Rt),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(D,V,j,Z,T,Rt),$.transparent===!0&&$.side===sn&&$.forceSinglePass===!1?($.side=Je,$.needsUpdate=!0,D.renderBufferDirect(j,V,Z,$,T,Rt),$.side=zi,$.needsUpdate=!0,D.renderBufferDirect(j,V,Z,$,T,Rt),$.side=sn):D.renderBufferDirect(j,V,Z,$,T,Rt),T.onAfterRender(D,V,j,Z,$,Rt)}function Oa(T,V,j){V.isScene!==!0&&(V=Xt);let Z=G.get(T),$=b.state.lights,Rt=b.state.shadowsArray,Lt=$.state.version,At=vt.getParameters(T,$.state,Rt,V,j,b.state.lightProbeGridArray),Ot=vt.getProgramCacheKey(At),Vt=Z.programs;Z.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,Z.fog=V.fog;let oe=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;Z.envMap=ut.get(T.envMap||Z.environment,oe),Z.envMapRotation=Z.environment!==null&&T.envMap===null?V.environmentRotation:T.envMapRotation,Vt===void 0&&(T.addEventListener("dispose",$n),Vt=new Map,Z.programs=Vt);let ue=Vt.get(Ot);if(ue!==void 0){if(Z.currentProgram===ue&&Z.lightsStateVersion===Lt)return pu(T,At),ue}else At.uniforms=vt.getUniforms(T),M!==null&&T.isNodeMaterial&&M.build(T,j,At),T.onBeforeCompile(At,D),ue=vt.acquireProgram(At,Ot),Vt.set(Ot,ue),Z.uniforms=At.uniforms;let Bt=Z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Bt.clippingPlanes=kt.uniform),pu(T,At),Z.needsLights=dp(T),Z.lightsStateVersion=Lt,Z.needsLights&&(Bt.ambientLightColor.value=$.state.ambient,Bt.lightProbe.value=$.state.probe,Bt.sunLights.value=$.state.sun,Bt.sunLightShadows.value=$.state.sunShadow,Bt.directionalLights.value=$.state.directional,Bt.directionalLightShadows.value=$.state.directionalShadow,Bt.spotLights.value=$.state.spot,Bt.spotLightShadows.value=$.state.spotShadow,Bt.rectAreaLights.value=$.state.rectArea,Bt.ltc_1.value=$.state.rectAreaLTC1,Bt.ltc_2.value=$.state.rectAreaLTC2,Bt.pointLights.value=$.state.point,Bt.pointLightShadows.value=$.state.pointShadow,Bt.hemisphereLights.value=$.state.hemi,Bt.sunShadowMatrix.value=$.state.sunShadowMatrix,Bt.sunShadowCascade.value=$.state.sunShadowCascade,Bt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Bt.spotLightMatrix.value=$.state.spotLightMatrix,Bt.spotLightMap.value=$.state.spotLightMap,Bt.pointShadowMatrix.value=$.state.pointShadowMatrix),Z.lightProbeGrid=b.state.lightProbeGridArray.length>0,Z.currentProgram=ue,Z.uniformsList=null,ue}function du(T){if(T.uniformsList===null){let V=T.currentProgram.getUniforms();T.uniformsList=cr.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function pu(T,V){let j=G.get(T);j.outputColorSpace=V.outputColorSpace,j.batching=V.batching,j.batchingColor=V.batchingColor,j.instancing=V.instancing,j.instancingColor=V.instancingColor,j.instancingMorph=V.instancingMorph,j.skinning=V.skinning,j.morphTargets=V.morphTargets,j.morphNormals=V.morphNormals,j.morphColors=V.morphColors,j.morphTargetsCount=V.morphTargetsCount,j.numClippingPlanes=V.numClippingPlanes,j.numIntersection=V.numClipIntersection,j.vertexAlphas=V.vertexAlphas,j.vertexTangents=V.vertexTangents,j.toneMapping=V.toneMapping}function hp(T,V){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;g.setFromMatrixPosition(V.matrixWorld);for(let j=0,Z=T.length;j<Z;j++){let $=T[j];if($.texture!==null&&$.boundingBox.containsPoint(g))return $}return null}function up(T,V,j,Z,$){V.isScene!==!0&&(V=Xt),K.resetTextureUnits();let Rt=V.fog,Lt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?V.environment:null,At=k===null?D.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:fe.workingColorSpace,Ot=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Vt=ut.get(Z.envMap||Lt,Ot),oe=Z.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ue=!!j.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Bt=!!j.morphAttributes.position,_e=!!j.morphAttributes.normal,We=!!j.morphAttributes.color,Ue=Vn;Z.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ue=D.toneMapping);let Re=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,rn=Re!==void 0?Re.length:0,Pt=G.get(Z),dn=b.state.lights;if(ct===!0&&(dt===!0||T!==Y)){let De=T===Y&&Z.id===O;kt.setState(Z,T,De)}let ge=!1;Z.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==dn.state.version||Pt.outputColorSpace!==At||$.isBatchedMesh&&Pt.batching===!1||!$.isBatchedMesh&&Pt.batching===!0||$.isBatchedMesh&&Pt.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Pt.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Pt.instancing===!1||!$.isInstancedMesh&&Pt.instancing===!0||$.isSkinnedMesh&&Pt.skinning===!1||!$.isSkinnedMesh&&Pt.skinning===!0||$.isInstancedMesh&&Pt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Pt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Pt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Pt.instancingMorph===!1&&$.morphTexture!==null||Pt.envMap!==Vt||Z.fog===!0&&Pt.fog!==Rt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==kt.numPlanes||Pt.numIntersection!==kt.numIntersection)||Pt.vertexAlphas!==oe||Pt.vertexTangents!==ue||Pt.morphTargets!==Bt||Pt.morphNormals!==_e||Pt.morphColors!==We||Pt.toneMapping!==Ue||Pt.morphTargetsCount!==rn||!!Pt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ge=!0):(ge=!0,Pt.__version=Z.version);let An=Pt.currentProgram;ge===!0&&(An=Oa(Z,V,$),M&&Z.isNodeMaterial&&M.onUpdateProgram(Z,An,Pt));let Jn=!1,bi=!1,xs=!1,Te=An.getUniforms(),He=Pt.uniforms;if(v.useProgram(An.program)&&(Jn=!0,bi=!0,xs=!0),Z.id!==O&&(O=Z.id,bi=!0),Pt.needsLights){let De=hp(b.state.lightProbeGridArray,$);Pt.lightProbeGrid!==De&&(Pt.lightProbeGrid=De,bi=!0)}if(Jn||Y!==T){v.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Te.setValue(z,"projectionMatrix",T.projectionMatrix),Te.setValue(z,"viewMatrix",T.matrixWorldInverse);let wi=Te.map.cameraPosition;wi!==void 0&&wi.setValue(z,_t.setFromMatrixPosition(T.matrixWorld)),R.logarithmicDepthBuffer&&Te.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Te.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),Y!==T&&(Y=T,bi=!0,xs=!0)}if(Pt.needsLights&&(dn.state.sunShadowMap.length>0&&Te.setValue(z,"sunShadowMap",dn.state.sunShadowMap,K),dn.state.directionalShadowMap.length>0&&Te.setValue(z,"directionalShadowMap",dn.state.directionalShadowMap,K),dn.state.spotShadowMap.length>0&&Te.setValue(z,"spotShadowMap",dn.state.spotShadowMap,K),dn.state.pointShadowMap.length>0&&Te.setValue(z,"pointShadowMap",dn.state.pointShadowMap,K)),$.isSkinnedMesh){Te.setOptional(z,$,"bindMatrix"),Te.setOptional(z,$,"bindMatrixInverse");let De=$.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),Te.setValue(z,"boneTexture",De.boneTexture,K))}$.isBatchedMesh&&(Te.setOptional(z,$,"batchingTexture"),Te.setValue(z,"batchingTexture",$._matricesTexture,K),Te.setOptional(z,$,"batchingIdTexture"),Te.setValue(z,"batchingIdTexture",$._indirectTexture,K),Te.setOptional(z,$,"batchingColorTexture"),$._colorsTexture!==null&&Te.setValue(z,"batchingColorTexture",$._colorsTexture,K));let Ei=j.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&W.update($,j,An),(bi||Pt.receiveShadow!==$.receiveShadow)&&(Pt.receiveShadow=$.receiveShadow,Te.setValue(z,"receiveShadow",$.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&V.environment!==null&&(He.envMapIntensity.value=V.environmentIntensity),He.dfgLUT!==void 0&&(He.dfgLUT.value=C_()),bi){if(Te.setValue(z,"toneMappingExposure",D.toneMappingExposure),Pt.needsLights&&fp(He,xs),Rt&&Z.fog===!0&&Ft.refreshFogUniforms(He,Rt),Ft.refreshMaterialUniforms(He,Z,et,q,b.state.transmissionRenderTarget[T.id]),Pt.needsLights&&Pt.lightProbeGrid){let De=Pt.lightProbeGrid;He.probesSH.value=De.texture,He.probesMin.value.copy(De.boundingBox.min),He.probesMax.value.copy(De.boundingBox.max),He.probesResolution.value.copy(De.resolution)}cr.upload(z,du(Pt),He,K)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(cr.upload(z,du(Pt),He,K),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Te.setValue(z,"center",$.center),Te.setValue(z,"modelViewMatrix",$.modelViewMatrix),Te.setValue(z,"normalMatrix",$.normalMatrix),Te.setValue(z,"modelMatrix",$.matrixWorld),Z.uniformsGroups!==void 0){let De=Z.uniformsGroups;for(let wi=0,ys=De.length;wi<ys;wi++){let gu=De[wi];ht.update(gu,An),ht.bind(gu,An)}}return An}function fp(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.sunLights.needsUpdate=V,T.sunLightShadows.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function dp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(T,V,j){let Z=G.get(T);Z.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),G.get(T.texture).__webglTexture=V,G.get(T.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:j,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,V){let j=G.get(T);j.__webglFramebuffer=V,j.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,j=0){k=T,N=V,F=j;let Z=null,$=!1,Rt=!1;if(T){let At=G.get(T);if(At.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(z.FRAMEBUFFER,At.__webglFramebuffer),X.copy(T.viewport),at.copy(T.scissor),ot=T.scissorTest,v.viewport(X),v.scissor(at),v.setScissorTest(ot),O=-1;return}else if(At.__webglFramebuffer===void 0)K.setupRenderTarget(T);else if(At.__hasExternalTextures)K.rebindTextures(T,G.get(T.texture).__webglTexture,G.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let oe=T.depthTexture;if(At.__boundDepthTexture!==oe){if(oe!==null&&G.has(oe)&&(T.width!==oe.image.width||T.height!==oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(T)}}let Ot=T.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(Rt=!0);let Vt=G.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Vt[V])?Z=Vt[V][j]:Z=Vt[V],$=!0):T.samples>0&&K.useMultisampledRTT(T)===!1?Z=G.get(T).__webglMultisampledFramebuffer:Array.isArray(Vt)?Z=Vt[j]:Z=Vt,X.copy(T.viewport),at.copy(T.scissor),ot=T.scissorTest}else X.copy(wt).multiplyScalar(et).floor(),at.copy(jt).multiplyScalar(et).floor(),ot=de;if(j!==0&&(Z=P),v.bindFramebuffer(z.FRAMEBUFFER,Z)&&v.drawBuffers(T,Z),v.viewport(X),v.scissor(at),v.setScissorTest(ot),$){let At=G.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+V,At.__webglTexture,j)}else if(Rt){let At=V;for(let Ot=0;Ot<T.textures.length;Ot++){let Vt=G.get(T.textures[Ot]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ot,Vt.__webglTexture,j,At)}}else if(T!==null&&j!==0){let At=G.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,At.__webglTexture,j)}O=-1};function mu(T){let V=G.get(T);return(V.__readFormat!==T.format||V.__readType!==T.type)&&(V.__readFormat=T.format,V.__readType=T.type,V.__formatReadable=R.textureFormatReadable(T.format),V.__typeReadable=R.textureTypeReadable(T.type)),V}this.readRenderTargetPixels=function(T,V,j,Z,$,Rt,Lt,At=0){if(!(T&&T.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=G.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot){v.bindFramebuffer(z.FRAMEBUFFER,Ot);try{let Vt=T.textures[At],oe=Vt.format,ue=Vt.type;T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+At);let Bt=mu(Vt);if(Bt.__formatReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Bt.__typeReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-Z&&j>=0&&j<=T.height-$&&z.readPixels(V,j,Z,$,Et.convert(oe),Et.convert(ue),Rt)}finally{let Vt=k!==null?G.get(k).__webglFramebuffer:null;v.bindFramebuffer(z.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(T,V,j,Z,$,Rt,Lt,At=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=G.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot)if(V>=0&&V<=T.width-Z&&j>=0&&j<=T.height-$){v.bindFramebuffer(z.FRAMEBUFFER,Ot);let Vt=T.textures[At],oe=Vt.format,ue=Vt.type;T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+At);let Bt=mu(Vt);if(Bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _e=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,_e),z.bufferData(z.PIXEL_PACK_BUFFER,Rt.byteLength,z.STREAM_READ),z.readPixels(V,j,Z,$,Et.convert(oe),Et.convert(ue),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let We=k!==null?G.get(k).__webglFramebuffer:null;v.bindFramebuffer(z.FRAMEBUFFER,We);let Ue=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Lf(z,Ue,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,_e),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Rt),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(_e),z.deleteSync(Ue),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,V=null,j=0){let Z=Math.pow(2,-j),$=Math.floor(T.image.width*Z),Rt=Math.floor(T.image.height*Z),Lt=V!==null?V.x:0,At=V!==null?V.y:0;K.setTexture2D(T,0),z.copyTexSubImage2D(z.TEXTURE_2D,j,0,0,Lt,At,$,Rt),v.unbindTexture()},this.copyTextureToTexture=function(T,V,j=null,Z=null,$=0,Rt=0){let Lt,At,Ot,Vt,oe,ue,Bt,_e,We,Ue=T.isCompressedTexture?T.mipmaps[Rt]:T.image;if(j!==null)Lt=j.max.x-j.min.x,At=j.max.y-j.min.y,Ot=j.isBox3?j.max.z-j.min.z:1,Vt=j.min.x,oe=j.min.y,ue=j.isBox3?j.min.z:0;else{let He=Math.pow(2,-$);Lt=Math.floor(Ue.width*He),At=Math.floor(Ue.height*He),T.isDataArrayTexture?Ot=Ue.depth:T.isData3DTexture?Ot=Math.floor(Ue.depth*He):Ot=1,Vt=0,oe=0,ue=0}Z!==null?(Bt=Z.x,_e=Z.y,We=Z.z):(Bt=0,_e=0,We=0);let Re=Et.convert(V.format),rn=Et.convert(V.type),Pt;V.isData3DTexture?(K.setTexture3D(V,0),Pt=z.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(K.setTexture2DArray(V,0),Pt=z.TEXTURE_2D_ARRAY):(K.setTexture2D(V,0),Pt=z.TEXTURE_2D),v.activeTexture(z.TEXTURE0),v.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,V.flipY),v.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),v.pixelStorei(z.UNPACK_ALIGNMENT,V.unpackAlignment);let dn=v.getParameter(z.UNPACK_ROW_LENGTH),ge=v.getParameter(z.UNPACK_IMAGE_HEIGHT),An=v.getParameter(z.UNPACK_SKIP_PIXELS),Jn=v.getParameter(z.UNPACK_SKIP_ROWS),bi=v.getParameter(z.UNPACK_SKIP_IMAGES);v.pixelStorei(z.UNPACK_ROW_LENGTH,Ue.width),v.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ue.height),v.pixelStorei(z.UNPACK_SKIP_PIXELS,Vt),v.pixelStorei(z.UNPACK_SKIP_ROWS,oe),v.pixelStorei(z.UNPACK_SKIP_IMAGES,ue);let xs=T.isDataArrayTexture||T.isData3DTexture,Te=V.isDataArrayTexture||V.isData3DTexture;if(T.isDepthTexture){let He=G.get(T),Ei=G.get(V),De=G.get(He.__renderTarget),wi=G.get(Ei.__renderTarget);v.bindFramebuffer(z.READ_FRAMEBUFFER,De.__webglFramebuffer),v.bindFramebuffer(z.DRAW_FRAMEBUFFER,wi.__webglFramebuffer);for(let ys=0;ys<Ot;ys++)xs&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,G.get(T).__webglTexture,$,ue+ys),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,G.get(V).__webglTexture,Rt,We+ys)),z.blitFramebuffer(Vt,oe,Lt,At,Bt,_e,Lt,At,z.DEPTH_BUFFER_BIT,z.NEAREST);v.bindFramebuffer(z.READ_FRAMEBUFFER,null),v.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if($!==0||T.isRenderTargetTexture||G.has(T)){let He=G.get(T),Ei=G.get(V);v.bindFramebuffer(z.READ_FRAMEBUFFER,I),v.bindFramebuffer(z.DRAW_FRAMEBUFFER,C);for(let De=0;De<Ot;De++)xs?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,He.__webglTexture,$,ue+De):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,He.__webglTexture,$),Te?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ei.__webglTexture,Rt,We+De):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ei.__webglTexture,Rt),$!==0?z.blitFramebuffer(Vt,oe,Lt,At,Bt,_e,Lt,At,z.COLOR_BUFFER_BIT,z.NEAREST):Te?z.copyTexSubImage3D(Pt,Rt,Bt,_e,We+De,Vt,oe,Lt,At):z.copyTexSubImage2D(Pt,Rt,Bt,_e,Vt,oe,Lt,At);v.bindFramebuffer(z.READ_FRAMEBUFFER,null),v.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Te?T.isDataTexture||T.isData3DTexture?z.texSubImage3D(Pt,Rt,Bt,_e,We,Lt,At,Ot,Re,rn,Ue.data):V.isCompressedArrayTexture?z.compressedTexSubImage3D(Pt,Rt,Bt,_e,We,Lt,At,Ot,Re,Ue.data):z.texSubImage3D(Pt,Rt,Bt,_e,We,Lt,At,Ot,Re,rn,Ue):T.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Rt,Bt,_e,Lt,At,Re,rn,Ue.data):T.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Rt,Bt,_e,Ue.width,Ue.height,Re,Ue.data):z.texSubImage2D(z.TEXTURE_2D,Rt,Bt,_e,Lt,At,Re,rn,Ue);v.pixelStorei(z.UNPACK_ROW_LENGTH,dn),v.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ge),v.pixelStorei(z.UNPACK_SKIP_PIXELS,An),v.pixelStorei(z.UNPACK_SKIP_ROWS,Jn),v.pixelStorei(z.UNPACK_SKIP_IMAGES,bi),Rt===0&&V.generateMipmaps&&z.generateMipmap(Pt),v.unbindTexture()},this.initRenderTarget=function(T){G.get(T).__webglFramebuffer===void 0&&K.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?K.setTextureCube(T,0):T.isData3DTexture?K.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?K.setTexture2DArray(T,0):K.setTexture2D(T,0),v.unbindTexture()},this.resetState=function(){N=0,F=0,k=null,v.reset(),It.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=fe._getDrawingBufferColorSpace(t),e.unpackColorSpace=fe._getUnpackColorSpace()}};var Ma=class extends pi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Ae;t.deleteAttribute("uv");let e=new he({side:Je}),n=new he,s=new ra(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new nt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Vr(t,n,6),o=new Ye;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new nt(t,ur(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new nt(t,ur(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new nt(t,ur(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new nt(t,ur(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new nt(t,ur(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new nt(t,ur(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function ur(i){return new ea({color:0,emissive:16777215,emissiveIntensity:i})}var _i=[{id:0,name:"Bubbles",tag:"The Royal Bean",color:"#ff5fb4"},{id:1,name:"Ninja",tag:"The Silent Bean",color:"#3b82f6"},{id:2,name:"Dino",tag:"The Chunky Dino",color:"#3ddc84"},{id:3,name:"Robo",tag:"The Bolt Bot",color:"#ffc233"}],Sa=[{id:0,key:"candy",name:"Candy Meadow",sub:"Easy",stars:1,limit:110,finishZ:-321.9,finishY:0,colors:["#ff7ab8","#7be8ff"],blurb:"Sweet hills, bouncy mushrooms, spinning bars"},{id:1,key:"canyon",name:"Sunset Canyon",sub:"Medium",stars:2,limit:130,finishZ:-314,finishY:5,colors:["#ff8a3d","#8b2fc9"],blurb:"Lava, hammers, conveyors and rolling balls"},{id:2,key:"frost",name:"Frozen Peak",sub:"Hard",stars:3,limit:150,finishZ:-332.7,finishY:10.5,colors:["#9fe3ff","#3b82f6"],blurb:"Slippery ice, snowballs, lifts and bounce pads"},{id:3,key:"neon",name:"Neon Space",sub:"Insane",stars:4,limit:170,finishZ:-412.5,finishY:5,colors:["#22f2ff","#ff2bd6"],blurb:"Vanishing tiles, giant fans and pistons in space"},{id:4,key:"fair",name:"Funfair Frenzy",sub:"Extreme",stars:5,limit:180,finishZ:-421.6,finishY:0,colors:["#ffd23f","#ff4d6d"],blurb:"Seesaws, bungee bounce, roller coaster and pitfalls"},{id:5,key:"fun",name:"Fun Map",sub:"Chill",stars:1,limit:400,finishZ:-424,finishY:.15,colors:["#80ed99","#4cc9f0"],blurb:"Giant theme park: rides, highways with cars to drive, a SKY SPEEDWAY to win red racers, then the maze. Nothing can kill you!"}];var ba=new B;function Pn(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;ba.copy(t),ba[n]=0,ba.normalize();let c=.5*a/(a+o),h=1-ba.angleTo(i)/l;return Math.sign(ba[e])===1?h*c:o/(a+o)+c+c*(1-h)}var fr=class i extends Ae{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new B,c=new B,h=new B(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,x=u.length/6,y=new B,p=.5/a;for(let m=0,S=0;m<u.length;m+=3,S+=2)switch(l.fromArray(u,m),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),u[m+0]=h.x*Math.sign(l.x)+c.x*r,u[m+1]=h.y*Math.sign(l.y)+c.y*r,u[m+2]=h.z*Math.sign(l.z)+c.z*r,f[m+0]=c.x,f[m+1]=c.y,f[m+2]=c.z,Math.floor(m/x)){case 0:y.set(1,0,0),d[S+0]=Pn(y,c,"z","y",r,n),d[S+1]=1-Pn(y,c,"y","z",r,e);break;case 1:y.set(-1,0,0),d[S+0]=1-Pn(y,c,"z","y",r,n),d[S+1]=1-Pn(y,c,"y","z",r,e);break;case 2:y.set(0,1,0),d[S+0]=1-Pn(y,c,"x","z",r,t),d[S+1]=Pn(y,c,"z","x",r,n);break;case 3:y.set(0,-1,0),d[S+0]=1-Pn(y,c,"x","z",r,t),d[S+1]=1-Pn(y,c,"z","x",r,n);break;case 4:y.set(0,0,1),d[S+0]=1-Pn(y,c,"x","y",r,t),d[S+1]=1-Pn(y,c,"y","x",r,e);break;case 5:y.set(0,0,-1),d[S+0]=Pn(y,c,"x","y",r,t),d[S+1]=1-Pn(y,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};function yd(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Pe,c=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let x=0;x<d.count;++x)u.push(d.getX(x)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=xd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let y=0;y<a[h].length;++y)d.push(a[h][y][f]);let x=xd(d);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}}return l}function xd(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new Ie(a,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let x=0;x<e;x++){let y=h.getComponent(f,x);o.setComponent(f+u,x,y)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var me={R:.42,H:1.55,STEP:.34,EDGE:.28,G:34,RUN:9.4,JUMP:12.2,ACC:70,AIR:22,DEC:95,AIR_DEC:9,ICE_ACC:11,ICE_DEC:5.5,TERM:-50,SNAP:.5},Yn=(i,t,e)=>i<t?t:i>e?e:i,_d=new En,vd=new bn,Md=new xe,Sd=new B,bd=new B,Vi=new Dt,vi=class{constructor(){this.list=[]}add(t,e,n,s,r,a=0,o=0,l=0,c=1,h=1,u=1,f="XYZ"){_d.set(a,o,l,f),vd.setFromEuler(_d),Sd.set(e,n,s),bd.set(c,h,u),Md.compose(Sd,vd,bd);let d=t.index?t.toNonIndexed():t.clone();d.attributes.uv&&d.deleteAttribute("uv"),d.applyMatrix4(Md);let x=d.attributes.position.count,y=new Float32Array(x*3);Vi.set(r);for(let p=0;p<x;p++)y[p*3]=Vi.r,y[p*3+1]=Vi.g,y[p*3+2]=Vi.b;d.setAttribute("color",new Ie(y,3)),this.list.push(d)}addGeo(t){t.index&&(t=t.toNonIndexed()),t.attributes.uv&&t.deleteAttribute("uv"),this.list.push(t)}build(t){if(!this.list.length)return null;let e=yd(this.list,!1);return this.list.length=0,new nt(e,t)}};var Yl=class{constructor(t,e=!1){this.theme=t,this.headless=e,this.group=new ie,this.solids=[],this.ramps=[],this.discs=[],this.hazards=[],this.updaters=[],this.checkpoints=[],this.zones=[],this.pools=[],this.main=new vi,this.glow=new vi,this.waterY=-5,this.killY=-9,this.geoCache=new Map,this.matCache=new Map,this.colorIdx=0,this.arrowTexture=null,this.time=0,this.hitOut={nx:0,nz:1,pow:10},this.onEvent=null}rbox(t,e,n,s){let r=Math.max(.02,Math.min(s,t/2-.01,e/2-.01,n/2-.01)),a=`${t.toFixed(2)}|${e.toFixed(2)}|${n.toFixed(2)}|${r.toFixed(2)}`,o=this.geoCache.get(a);return o||(o=Math.min(t,e,n)<.35?new Ae(t,e,n):new fr(t,e,n,2,r),this.geoCache.set(a,o)),o}mat(t,e={}){var r,a,o,l;let n=t+JSON.stringify(e),s=this.matCache.get(n);return s||(s=new he({color:t,roughness:(r=e.rough)!=null?r:.38,metalness:(a=e.metal)!=null?a:.02,emissive:(o=e.emissive)!=null?o:0,emissiveIntensity:(l=e.ei)!=null?l:1}),this.matCache.set(n,s)),s}pick(){let t=this.theme.plat;return t[this.colorIdx++%t.length]}addSolid(t,e,n,s,r,a,o={}){let l={x0:t,y0:e,z0:n,x1:s,y1:r,z1:a,active:!0,ice:!!o.ice,conv:o.conv||null,bounce:o.bounce||0,boost:o.boost||0,dx:0,dy:0,dz:0,moving:!1,name:o.name||""};return this.solids.push(l),l}add(t,e=!0,n=!0){return t.castShadow=e,t.receiveShadow=n,this.group.add(t),t}emit(t,e){this.onEvent&&this.onEvent(t,e)}platform(t,e,n,s,r,a={}){var h,u,f;let o=(h=a.h)!=null?h:1.6,l=(u=a.color)!=null?u:this.pick(),c=this.addSolid(t-s/2,e-o,n-r/2,t+s/2,e,n+r/2,a);if(!this.headless){if(this.main.add(this.rbox(s,o,r,.3),t,e-o/2,n,l),a.pad!==!1&&s>2.4&&r>2.4){let d=(f=a.padColor)!=null?f:a.ice?this.theme.icePad:this.theme.pad;this.main.add(this.rbox(s-1.1,.12,r-1.1,.05),t,e+0,n,d)}if(this.theme.edgeGlow){let d=this.theme.edgeGlow;this.glow.add(this.rbox(s+.04,.12,.12,.03),t,e-.08,n+r/2,d),this.glow.add(this.rbox(s+.04,.12,.12,.03),t,e-.08,n-r/2,d),this.glow.add(this.rbox(.12,.12,r+.04,.03),t+s/2,e-.08,n,d),this.glow.add(this.rbox(.12,.12,r+.04,.03),t-s/2,e-.08,n,d)}}return c}disc(t,e,n,s,r={}){var u,f,d,x,y,p,m,S,A;let a=(u=r.omega)!=null?u:0,o=(f=r.h)!=null?f:1.4,l={cx:t,cz:n,top:e,r:s,th:o,omega:a,phase:(d=r.phase)!=null?d:0,bounce:r.bounce||0,push:r.push||null,ice:!!r.ice,theta:(x=r.phase)!=null?x:0,dTheta:0,kind:"disc",squash:0,first:!0};if(this.discs.push(l),this.headless)return l;if(r.bounce){let g=new ie;g.position.set(t,e,n);let E=new nt(new Nt(s*.55,s*.7,1.4,20),this.mat((y=r.stem)!=null?y:"#fff3d6"));E.position.y=-.7;let b=new nt(new Ee(s,28,14,0,Math.PI*2,0,Math.PI/2),this.mat((p=r.color)!=null?p:"#ff3b6b",{rough:.25}));b.scale.y=.45,b.position.y=-.05,g.add(E,b);for(let L=0;L<6;L++){let _=new nt(new Ee(.26,10,8),this.mat("#ffffff")),w=L/6*Math.PI*2;_.position.set(Math.cos(w)*s*.62,.34*(1-.3),Math.sin(w)*s*.62),_.scale.y=.4,g.add(_)}return this.add(g),l.mesh=g,this.updaters.push((L,_)=>{l.squash=Math.max(0,l.squash-_*4);let w=1-Math.sin(l.squash*Math.PI)*.35*l.squash;g.scale.set(1+(1-w)*.5,w,1+(1-w)*.5)}),l}let c=(m=r.color)!=null?m:this.pick(),h=new Nt(s,s,o,40);if(a===0)this.main.add(h,t,e-o/2,n,c),this.main.add(new Nt(s-.5,s-.5,.12,40),t,e,n,(S=r.padColor)!=null?S:this.theme.pad),this.theme.edgeGlow&&this.glow.add(new Me(s,.07,6,48),t,e-.1,n,this.theme.edgeGlow,Math.PI/2);else{let g=new ie;g.position.set(t,e,n);let E=new nt(h,this.mat(c));E.position.y=-o/2;let b=new nt(new Nt(s-.5,s-.5,.12,40),this.mat((A=r.padColor)!=null?A:this.theme.pad));g.add(E,b);for(let L=0;L<4;L++){let _=new nt(this.rbox(s*1.6,.14,.6,.05),this.mat(this.theme.hazard2));_.position.y=.06,_.rotation.y=L*Math.PI/4,g.add(_)}if(this.theme.edgeGlow){let L=new nt(new Me(s,.08,6,48),new be({color:this.theme.edgeGlow,toneMapped:!1}));L.rotation.x=Math.PI/2,L.position.y=-.1,g.add(L)}this.add(g),l.mesh=g,this.updaters.push(L=>{g.rotation.y=l.theta})}return l}ramp(t,e,n,s,r,a,o={}){var F,k;let l={x0:t-a/2,x1:t+a/2,zN:e,zF:s,yN:n,yF:r,conv:o.conv||null,ice:!!o.ice,kind:"ramp"};if(this.ramps.push(l),this.headless)return l;let c=Math.min(n,r)-1.6,h=(F=o.color)!=null?F:this.pick(),u=(O,Y,X)=>[O,Y,X],f=u(l.x0,n,e),d=u(l.x1,n,e),x=u(l.x1,r,s),y=u(l.x0,r,s),p=u(l.x0,c,e),m=u(l.x1,c,e),S=u(l.x1,c,s),A=u(l.x0,c,s),g=[],E=(O,Y,X,at)=>{g.push(...O,...Y,...X,...O,...X,...at)};E(f,y,x,d),E(f,d,m,p),E(x,y,A,S),E(y,f,p,A),E(d,x,S,m);let b=new Pe;b.setAttribute("position",new pe(g,3)),b.computeVertexNormals();let L=g.length/3,_=new Float32Array(L*3);Vi.set(h);for(let O=0;O<L;O++)_[O*3]=Vi.r,_[O*3+1]=Vi.g,_[O*3+2]=Vi.b;b.setAttribute("color",new Ie(_,3)),this.main.addGeo(b);let w=e-s,D=r-n,U=Math.hypot(w,D),M=Math.atan2(D,w),P=(e+s)/2,I=(n+r)/2,C=-Math.sin(M),N=Math.cos(M);return this.main.add(this.rbox(a-1.6,.1,U-.6,.04),t,I+N*.02,P+C*.02*0,(k=o.padColor)!=null?k:o.ice?this.theme.icePad:this.theme.pad,M,0,0),l}mover(t,e,n,s,r,a,o={}){var y,p,m;let l=(y=o.h)!=null?y:1.5,c=this.addSolid(t-s/2,e-l,n-r/2,t+s/2,e,n+r/2,o);c.moving=!0,c.first=!0;let h=null;if(!this.headless){if(h=new nt(this.rbox(s,l,r,.28),this.mat((p=o.color)!=null?p:this.pick(),{rough:.3})),o.pad!==!1){let S=new nt(this.rbox(s-1,.12,r-1,.05),this.mat((m=o.padColor)!=null?m:this.theme.pad));S.position.y=l/2,h.add(S)}if(o.stripes){let S=new nt(this.rbox(s+.02,.4,r+.02,.05),this.mat(this.theme.hazard));S.position.y=0,h.add(S)}this.add(h)}let u=0,f=0,d=0,x=S=>{let[A,g,E]=a(S);c.x0=t-s/2+A,c.x1=t+s/2+A,c.y0=e-l+g,c.y1=e+g,c.z0=n-r/2+E,c.z1=n+r/2+E,c.first&&(u=A,f=g,d=E,c.first=!1),c.dx=A-u,c.dy=g-f,c.dz=E-d,u=A,f=g,d=E,h&&h.position.set(t+A,e-l/2+g,n+E)};return x(0),this.updaters.push(S=>x(S)),c}tile(t,e,n,s,r,a={}){var y,p,m,S,A,g;let o=(y=a.period)!=null?y:4.8,l=(p=a.solidT)!=null?p:2.4,c=(m=a.warn)!=null?m:.8,h=(S=a.off)!=null?S:0,u=this.addSolid(t-s/2,e-1,n-r/2,t+s/2,e,n+r/2,a),f=null,d=null;this.headless||(d=new he({color:(A=a.color)!=null?A:this.pick(),roughness:.3,emissive:0}),f=new nt(this.rbox(s,1,r,.22),d),f.position.set(t,e-.5,n),this.add(f));let x=new Dt((g=a.color)!=null?g:"#ffffff");return this.updaters.push(E=>{let b=((E+h)%o+o)%o;b<l?(u.active=!0,f&&(f.visible=!0,f.position.x=t,d.emissive.setRGB(0,0,0))):b<l+c?(u.active=!0,f&&(f.visible=!0,f.position.x=t+Math.sin(E*70)*.07,d.emissive.setRGB(.55,.05,.02))):(u.active=!1,f&&(f.visible=!1))}),u}conveyor(t,e,n,s,r,a,o={}){let l=this.addSolid(t-s/2,e-1.4,n-r/2,t+s/2,e,n+r/2,{...o,conv:[0,a]});if(this.headless)return l;this.main.add(this.rbox(s,1.4,r,.25),t,e-.7,n,this.theme.convBase);let c=new Be(s-1.2,r-.6),h=this.arrowTexture?this.arrowTexture.clone():null;h&&(h.needsUpdate=!0,h.wrapS=h.wrapT=Bs,h.repeat.set(Math.max(1,Math.round((s-1.2)/2.4)),Math.max(1,Math.round((r-.6)/2.4))));let u=new nt(c,new he({color:this.theme.belt,map:h,roughness:.6}));u.rotation.x=-Math.PI/2,a>0&&(u.rotation.z=Math.PI),u.position.set(t,e+.03,n),this.add(u,!1,!0);let f=Math.abs(a);return this.updaters.push((d,x)=>{h&&(h.offset.y-=f*x/2.4/(r-.6)*h.repeat.y)}),l}bar(t,e,n,s,r={}){var S,A,g,E,b,L,_;let a=(S=r.w)!=null?S:1.2,o=(A=r.h)!=null?A:1.2,l=(g=r.omega)!=null?g:1.4,c=(E=r.phase)!=null?E:0,h=(b=r.arms)!=null?b:1,u={type:"bar",test:(w,D,U)=>{if(w.y>e+o||w.y+me.H<e)return!1;let M=w.x-t,P=w.z-n;if(M*M+P*P>(s/2+1.2)*(s/2+1.2))return!1;let I=c+l*D;for(let C=0;C<h;C++){let N=I+C*Math.PI/h,F=Math.cos(N),k=Math.sin(N),O=M*F-P*k,Y=M*k+P*F,X=Yn(O,-s/2,s/2),at=Yn(Y,-a/2,a/2),ot=O-X,Ct=Y-at;if(ot*ot+Ct*Ct<me.R*me.R){let zt=Math.hypot(M,P)||.001,Zt=l*P,q=-l*M,et=Math.hypot(Zt,q)||1;Zt/=et,q/=et;let yt=Zt+M/zt*.45,Wt=q+P/zt*.45,wt=Math.hypot(yt,Wt)||1;return U.nx=yt/wt,U.nz=Wt/wt,U.pow=Yn(6+Math.abs(l)*zt*1.15,9,21),!0}}return!1}};if(this.hazards.push(u),this.headless)return u;let f=new ie;f.position.set(t,e+o/2,n);let d=Math.max(3,Math.round(s/2.4)),x=s/d,y=this.mat((L=r.color1)!=null?L:this.theme.hazard,{rough:.3}),p=this.mat((_=r.color2)!=null?_:this.theme.hazard2,{rough:.3});for(let w=0;w<h;w++){let D=new ie;D.rotation.y=w*Math.PI/h;for(let U=0;U<d;U++){let M=new nt(this.rbox(x*.995,o,a,.25),U%2?y:p);M.position.x=-s/2+x*(U+.5),M.castShadow=!0,D.add(M)}f.add(D)}let m=new nt(new Nt(a*.85,a,o+.7,16),this.mat(this.theme.hub));return m.castShadow=!0,f.add(m),this.add(f),this.updaters.push(w=>{f.rotation.y=c+l*w}),u}hammer(t,e,n,s,r={}){var m,S,A,g,E,b,L,_,w;let a=(m=r.amp)!=null?m:1.1,o=(S=r.omega)!=null?S:1.6,l=(A=r.phase)!=null?A:0,c=(g=r.r)!=null?g:1.3,h=(E=r.span)!=null?E:9,u={type:"hammer",test:(D,U,M)=>{let P=a*Math.sin(o*U+l),I=t+s*Math.sin(P),C=e-s*Math.cos(P),N=a*o*Math.cos(o*U+l),F=s*Math.cos(P)*N,k=Yn(C,D.y+.15,D.y+me.H-.1),O=I-D.x,Y=C-k,X=n-D.z,at=me.R+c;if(O*O+Y*Y+X*X<at*at){let ot=-O,Ct=-X;ot=(Math.sign(F)||Math.sign(ot)||1)*1,Ct=Ct*.5;let Zt=Math.hypot(ot,Ct);return M.nx=ot/Zt,M.nz=Ct/Zt,M.pow=Yn(Math.abs(F)*1.05+6,10,23),!0}return!1}};if(this.hazards.push(u),this.headless)return u;let f=new ie;f.position.set(t,e,n);let d=new nt(new Nt(.17,.17,s,10),this.mat(this.theme.hub));d.position.y=-s/2;let x=new nt(new Ee(c,28,18),this.mat(this.theme.hazard,{rough:.25}));x.position.y=-s;let y=new nt(new Me(c*.98,.12,8,28),this.mat(this.theme.hazard2));y.position.y=-s,y.rotation.x=Math.PI/2;let p=y.clone();if(p.rotation.set(0,Math.PI/2,0),f.add(d,x,y,p),f.traverse(D=>{D.isMesh&&(D.castShadow=!0)}),this.add(f),this.updaters.push(D=>{f.rotation.z=a*Math.sin(o*D+l)}),!this.headless){let D=this.theme.hub;this.main.add(this.rbox(.9,e-((b=r.baseY)!=null?b:e-s-1.5)+1.2,.9,.2),t-h,(e+((L=r.baseY)!=null?L:e-s-1.5))/2-0,n,D),this.main.add(this.rbox(.9,e-((_=r.baseY)!=null?_:e-s-1.5)+1.2,.9,.2),t+h,(e+((w=r.baseY)!=null?w:e-s-1.5))/2-0,n,D),this.main.add(this.rbox(h*2+1,.8,.9,.2),t,e+.6,n,D)}return u}balls(t,e,n,s,r,a,o,l,c={}){let h=n-e,u=h/a,f=l.map(()=>({x:t,z:0,y:0,on:!1})),d=[],x=p=>new Dt(p%2?this.theme.hazard:this.theme.hazard2);this.headless||l.forEach((p,m)=>{let S=new Ee(r,32,20),A=S.attributes.position,g=A.count,E=new Float32Array(g*3);for(let L=0;L<g;L++){let _=Math.atan2(A.getZ(L),A.getX(L)),D=Math.floor((_+Math.PI)/(Math.PI*2)*8)%2?new Dt(this.theme.hazard):new Dt(this.theme.hazard2);E[L*3]=D.r,E[L*3+1]=D.g,E[L*3+2]=D.b}S.setAttribute("color",new Ie(E,3));let b=new nt(S,new he({vertexColors:!0,roughness:.25}));b.visible=!1,this.add(b),d.push(b)});let y={type:"balls",test:(p,m,S)=>{for(let A=0;A<f.length;A++){let g=f[A];if(!g.on)continue;let E=Yn(g.y,p.y+.15,p.y+me.H-.1),b=g.x-p.x,L=g.y-E,_=g.z-p.z,w=me.R+r;if(b*b+L*L+_*_<w*w){let D=(p.x-g.x)*.8,U=1,M=Math.hypot(D,U);return S.nx=D/M,S.nz=U/M,S.pow=Yn(a*1.1+4,10,20),!0}}return!1}};return this.hazards.push(y),this.updaters.push(p=>{l.forEach((m,S)=>{let A=f[S],g=((p+m)%o+o)%o,E=g<u;A.on=E,E&&(A.z=e+g*a,A.y=s(A.z)+r,A.x=t);let b=d[S];b&&(b.visible=E,E&&(b.position.set(A.x,A.y,A.z),b.rotation.x=A.z/r))})}),y}seesaw(t,e,n,s,r,a,o,l=0){let c={x0:t-s/2,x1:t+s/2,zN:n+r/2,zF:n-r/2,yN:e,yF:e,conv:null,ice:!1,kind:"ramp",seesaw:!0};this.ramps.push(c);let h=x=>{let y=a*Math.sin(2*Math.PI*x/o+l);return c.yN=e+y,c.yF=e-y,y};if(h(0),this.headless)return this.updaters.push(x=>h(x)),c;this.main.add(new Nt(.5,1.1,2.4,8),t,e-1.4,n,this.theme.hub),this.main.add(this.rbox(s*.9,.7,1.4,.2),t,e-2.5,n,this.theme.hazard2);let u=new ie;u.position.set(t,e-.25,n);let f=new nt(this.rbox(s,.5,r,.2),this.mat(this.pick(),{rough:.35})),d=new nt(this.rbox(s-1.2,.1,r-1.2,.04),this.mat(this.theme.pad));d.position.y=.27,u.add(f,d);for(let x of[-1,1]){let y=new nt(this.rbox(s,.62,1.2,.2),this.mat(this.theme.hazard,{rough:.3}));y.position.set(0,.03,x*(r/2-.6)),u.add(y)}for(let x of[-1,1]){let y=new nt(new Nt(.1,.1,1.1,8),this.mat(this.theme.hub));y.position.set(x*(s/2-.5),.9,0),u.add(y)}return this.add(u),this.updaters.push(x=>{let y=h(x);u.rotation.x=-Math.atan2(y,r/2)}),c}bungee(t,e,n,s,r,a){let o=this.disc(t,n,e,s,{bounce:r,color:this.theme.hazard});if(this.headless)return o;let l=a,c=14;for(let h=0;h<c;h++){let u=h/c*Math.PI*2,f=t+Math.cos(u)*(s*.92),d=e+Math.sin(u)*(s*.92);this.main.add(new Nt(.07,.07,l-n,5),f,(l+n)/2,d,h%2?"#ffffff":this.theme.hazard)}this.main.add(new Me(s*.92,.35,8,36),t,l,e,this.theme.accent,Math.PI/2),this.main.add(new Me(s*.92,.2,8,36),t,n+.15,e,"#ffffff",Math.PI/2);for(let h=0;h<3;h++){let u=Math.PI/2+h*Math.PI*2/3+.5,f=t+Math.cos(u)*(s+1.4),d=e+Math.sin(u)*(s+1.4);this.main.add(new Nt(.45,.6,l+12,8),f,(l-12)/2,d,h%2?"#ffd23f":"#ffffff")}return this.glow.add(new Ee(.9,12,8),t,l+1.6,e,"#ffffff"),o}tube(t,e,n){if(this.headless)return;let s=new B(0,1,0),r=new B,a=new B,o=new B,l=new bn,c=new En;for(let h=0;h<t.length-1;h++){r.set(...t[h]),a.set(...t[h+1]),o.subVectors(a,r);let u=o.length();o.normalize(),l.setFromUnitVectors(s,o),c.setFromQuaternion(l),this.main.add(new Nt(e,e,u*1.02,6),(r.x+a.x)/2,(r.y+a.y)/2,(r.z+a.z)/2,n,c.x,c.y,c.z)}}airpad(t,e,n,s,r,a={}){var f,d;let o={x:t,z:e,r:n,y0:s,y1:s+r,lift:(f=a.lift)!=null?f:90,vmax:(d=a.vmax)!=null?d:9};if(this.zones.push(o),this.headless)return o;this.main.add(new Nt(n*.95,n,.5,28),t,s+.25,e,this.theme.hub),this.glow.add(new Me(n*.8,.14,8,36),t,s+.55,e,"#9cf0ff",Math.PI/2);let l=new be({color:"#8fe9ff",transparent:!0,opacity:.16,depthWrite:!1,side:sn,toneMapped:!1}),c=new nt(new Nt(n*.92,n*.92,r,24,1,!0),l);c.position.set(t,s+r/2,e),c.renderOrder=3,this.group.add(c);let h=new be({color:"#e6fbff",transparent:!0,opacity:.5,depthWrite:!1,toneMapped:!1}),u=[];for(let x=0;x<5;x++){let y=new nt(new Me(n*.85,.08,6,28),h);y.rotation.x=Math.PI/2,y.renderOrder=3,this.group.add(y),u.push(y)}return this.updaters.push(x=>{u.forEach((y,p)=>{let m=(x*.5+p/5)%1;y.position.set(t,s+.6+m*(r-.8),e),y.scale.setScalar(1-m*.25)})}),o}punch(t,e,n,s,r,a,o={}){var A,g;let l=(A=o.period)!=null?A:3.2,c=(g=o.off)!=null?g:0,h=1,u=Math.hypot(s,r)||1;s/=u,r/=u;let f=E=>{let b=((E+c)%l+l)%l/l,L=(_,w,D)=>{let U=Math.max(0,Math.min(1,(D-_)/(w-_)));return U*U*(3-2*U)};return a*(L(.5,.58,b)-L(.78,.95,b))},d={type:"punch",test:(E,b,L)=>{var N;let _=f(b);if(_<.4)return!1;let w=t+s*(_+.5),D=n+r*(_+.5),U=Yn(e,E.y+.15,E.y+me.H-.1),M=w-E.x,P=e-U,I=D-E.z,C=me.R+h;return M*M+P*P+I*I<C*C?(L.nx=s,L.nz=r,L.pow=(N=o.pow)!=null?N:15,!0):!1}};if(this.hazards.push(d),this.headless)return d;let x=new ie;x.position.set(t,e,n),x.rotation.y=Math.atan2(s,r);let y=new nt(new Nt(.22,.22,1,8),this.mat(this.theme.hub));y.rotation.x=Math.PI/2;let p=new nt(new Ee(h,20,14),this.mat(this.theme.hazard,{rough:.3})),m=new nt(new Nt(.62,.62,.5,14),this.mat("#ffffff"));m.rotation.x=Math.PI/2,m.position.z=-.95;let S=new nt(new Ee(.42,12,10),this.mat(this.theme.hazard,{rough:.3}));return S.position.set(.7,.45,-.35),p.add(m,S),m.position.z=-.95,p.scale.set(1,1,1.1),x.add(y,p),x.traverse(E=>{E.isMesh&&(E.castShadow=!0)}),this.add(x,!1,!1),this.main.add(this.rbox(2.2,2.6,1.2,.3),t-s*.3,e,n-r*.3,this.theme.hub,0,Math.atan2(s,r),0),this.updaters.push(E=>{let b=f(E);y.scale.y=Math.max(.01,b+.2),y.position.z=(b+.2)/2,p.position.z=b+.5}),d}ferris(t,e,n,s,r,a){let o=u=>u*Math.PI*2/r;for(let u=0;u<r;u++)this.mover(t,e-s,n,5,5,f=>{let d=a*f+o(u);return[0,s*(1-Math.cos(d)),s*Math.sin(d)]},{h:.7,color:this.theme.plat[u%this.theme.plat.length],pad:!0});if(this.headless)return;let l=new ie;l.position.set(t,e,n);let c=this.mat("#ffffff",{rough:.35});for(let u of[-1,1]){let f=new nt(new Me(s,.28,8,56),c);f.rotation.y=Math.PI/2,f.position.x=u*3.2,l.add(f)}for(let u=0;u<4;u++)for(let f of[-1,1]){let d=new nt(new Nt(.12,.12,s*2,6),this.mat(this.theme.hazard));d.rotation.x=u*Math.PI/4,d.position.x=f*3.2,l.add(d)}let h=new nt(new Nt(.9,.9,7.4,14),this.mat(this.theme.hub));h.rotation.z=Math.PI/2,l.add(h),this.add(l,!0,!1);for(let u of[-1,1])for(let f of[-1,1])this.main.add(this.rbox(.7,e+1,.7,.2),t+u*4.4,(e-1)/2,n+f*s*.55,this.theme.hub,0,0,0,1,1,1);this.updaters.push(u=>{l.rotation.x=-(a*u)})}pirate(t,e,n,s,r,a=.1){let o=a+n;if(this.mover(t,a,e,10,5,c=>{let h=s*Math.sin(2*Math.PI*c/r);return[0,n*(1-Math.cos(h)),n*Math.sin(h)]},{h:.9,color:this.theme.hazard,stripes:!0,pad:!0}),this.headless)return;for(let c of[-1,1])this.main.add(this.rbox(.8,o+2,.8,.2),t+c*6.2,(o+2)/2-.5,e+2.2,this.theme.hub,0,0,.12*c),this.main.add(this.rbox(.8,o+2,.8,.2),t+c*6.2,(o+2)/2-.5,e-2.2,this.theme.hub,0,0,.12*c);this.main.add(this.rbox(14.5,.9,.9,.2),t,o+.4,e,this.theme.accent);let l=new ie;l.position.set(t,o,e);for(let c of[-1,1]){let h=new nt(new Nt(.16,.16,n,8),this.mat("#ffffff"));h.position.set(c*4.2,-n/2,0),l.add(h)}this.add(l,!0,!1),this.updaters.push(c=>{l.rotation.x=-s*Math.sin(2*Math.PI*c/r)})}dropTower(t,e,n,s=13){let r=a=>{let o=(a%s+s)%s;if(o<1)return 0;if(o<5.5){let l=(o-1)/4.5;return n*(l*l*(3-2*l))}if(o<8.5)return n;if(o<9.4){let l=(o-8.5)/.9;return n*(1-l*l)}return 0};if(this.mover(t,.1,e,6,6,a=>[0,r(a),0],{h:.9,color:this.theme.accent,stripes:!0,pad:!0}),!this.headless){for(let a of[-1,1])for(let o of[-1,1])this.main.add(this.rbox(.7,n+5,.7,.2),t+a*3.6,(n+5)/2-.5,e+o*3.6,"#ffffff");this.main.add(this.rbox(8.2,.8,8.2,.2),t,n+4.6,e,this.theme.hazard),this.glow.add(new Ee(.7,10,8),t,n+5.6,e,"#ffffff")}}orbit(t,e,n,s,r,a){for(let o=0;o<r;o++){let l=o*Math.PI*2/r;this.mover(t+n,s,e,4.4,4.4,c=>{let h=a*c+l;return[n*Math.cos(h)-n,.7*Math.sin(c*1.3+l),n*Math.sin(h)]},{h:.8,color:this.theme.plat[o%this.theme.plat.length],pad:!0})}this.headless||(this.main.add(new Nt(.7,.9,s+5,10),t,(s+5)/2-.4,e,this.theme.hub),this.main.add(new Ge(2.4,2.2,14),t,s+6,e,this.theme.hazard),this.glow.add(new Me(n,.12,6,48),t,s-.5,e,"#ffffff",Math.PI/2))}cannon(t,e,n,s){if(this.disc(t,0,e,2.4,{bounce:n,push:s,color:this.theme.hazard}),this.headless)return;let r=s[1]<0?-1:1;this.main.add(new Nt(1,1.35,5.5,14),t,2.4,e-r*2.8,this.theme.hub,r*.93,0,0),this.main.add(new Me(1.1,.2,8,18),t,4.4,e-r*.5,this.theme.accent,Math.PI/2-r*.64,0,0)}checkpoint(t,e,n,s=14){let r={x:t,y:e,z:n,w:s,spawn:[t,e,n+1]};return this.checkpoints.push(r),this.headless||this.arch(t,e,n,s,this.theme.accent,!0),r}arch(t,e,n,s,r,a=!1){let o=a?5.2:8.5;this.main.add(this.rbox(.9,o,.9,.25),t-s/2,e+o/2,n,r),this.main.add(this.rbox(.9,o,.9,.25),t+s/2,e+o/2,n,r),this.main.add(this.rbox(s+.9,a?.9:1.6,a?.9:1.4,.25),t,e+o,n,r),this.glow.add(new Ee(.42,12,8),t-s/2,e+o+.8,n,"#ffffff"),this.glow.add(new Ee(.42,12,8),t+s/2,e+o+.8,n,"#ffffff")}update(t,e){this.time=t;for(let n of this.updaters)n(t,e);for(let n of this.discs)if(n.omega){let s=n.phase+n.omega*t;n.dTheta=n.first?0:s-n.theta,n.theta=s,n.first=!1}}carry(t){let e=t.ground;if(e){if(e.moving)t.x+=e.dx,t.y+=e.dy,t.z+=e.dz;else if(e.kind==="disc"&&e.omega){let n=t.x-e.cx,s=t.z-e.cz,r=e.dTheta,a=Math.cos(r),o=Math.sin(r);t.x=e.cx+n*a+s*o,t.z=e.cz-n*o+s*a,t.yawOff=(t.yawOff||0)+r}}}checkHazards(t,e){for(let n of this.hazards)if(n.test(t,e,this.hitOut))return this.hitOut;return null}finalize(){if(this.headless)return;let t=this.main.build(new he({vertexColors:!0,roughness:.4,metalness:.02}));t&&(t.castShadow=!0,t.receiveShadow=!0,this.group.add(t));let e=this.glow.build(new be({vertexColors:!0,toneMapped:!1}));e&&this.group.add(e)}resolveHorizontal(t){let e=me.R,n=me.H;for(let s of this.solids){if(!s.active||s.y1<=t.y+me.STEP||s.y0>=t.y+n||t.x<s.x0-e||t.x>s.x1+e||t.z<s.z0-e||t.z>s.z1+e)continue;let r=Yn(t.x,s.x0,s.x1),a=Yn(t.z,s.z0,s.z1),o=t.x-r,l=t.z-a,c=o*o+l*l;if(c>=e*e)continue;let h,u;if(c>1e-9){let d=Math.sqrt(c),x=e-d;h=o/d,u=l/d,t.x+=h*x,t.z+=u*x}else{let d=t.x-s.x0,x=s.x1-t.x,y=t.z-s.z0,p=s.z1-t.z,m=Math.min(d,x,y,p);m===d?(t.x=s.x0-e,h=-1,u=0):m===x?(t.x=s.x1+e,h=1,u=0):m===y?(t.z=s.z0-e,h=0,u=-1):(t.z=s.z1+e,h=0,u=1)}let f=t.vx*h+t.vz*u;if(f<0&&(t.vx-=f*h,t.vz-=f*u),s.moving){let d=s.dx*h+s.dz*u;d>0&&(t.vx+=h*Math.min(d/.016,8)*.3,t.vz+=u*Math.min(d/.016,8)*.3)}}for(let s of this.discs){if(t.y+n<=s.top-s.th||t.y>=s.top-me.STEP)continue;let r=t.x-s.cx,a=t.z-s.cz,o=Math.hypot(r,a),l=s.r+e;if(o<l&&o>1e-6){let c=r/o,h=a/o;t.x=s.cx+c*l,t.z=s.cz+h*l;let u=t.vx*c+t.vz*h;u<0&&(t.vx-=u*c,t.vz-=u*h)}}}findGround(t,e,n){let s=me.EDGE,r=e+me.STEP,a=n&&t.noSnap<=0?me.SNAP:0,o=null,l=-1e9;for(let c of this.solids){if(!c.active)continue;let h=c.y1;h>r||h<=l||t.x<c.x0-s||t.x>c.x1+s||t.z<c.z0-s||t.z>c.z1+s||(t.y<=h+1e-4||t.y<=h+a)&&(o=c,l=h)}for(let c of this.ramps){if(t.x<c.x0-s||t.x>c.x1+s||t.z>c.zN+.3||t.z<c.zF-.3)continue;let h=Yn((c.zN-t.z)/(c.zN-c.zF),0,1),u=c.yN+(c.yF-c.yN)*h;u>r||u<l||(t.y<=u+1e-4||t.y<=u+a)&&(o=c,l=u)}for(let c of this.discs){let h=c.top;if(h>r||h<l)continue;let u=t.x-c.cx,f=t.z-c.cz,d=c.r+s*.8;u*u+f*f>d*d||(t.y<=h+1e-4||t.y<=h+a)&&(o=c,l=h)}return o?{s:o,top:l}:null}hitCeiling(t,e){for(let n of this.solids)if(n.active&&!(e+me.H>n.y0+.02||t.y+me.H<=n.y0)&&!(t.x<n.x0||t.x>n.x1||t.z<n.z0||t.z>n.z1))return n;return null}};function I_(i,t,e){let n=document.createElement("canvas");n.width=t,n.height=e;let s=n.getContext("2d");if(i==="pk"){s.fillStyle="#01411c",s.fillRect(0,0,t,e),s.fillStyle="#ffffff",s.fillRect(0,0,t*.25,e);let a=t*.625,o=e*.5,l=e*.3;s.beginPath(),s.arc(a,o,l,0,Math.PI*2),s.fillStyle="#ffffff",s.fill(),s.beginPath(),s.arc(a+l*.28,o-l*.12,l*.82,0,Math.PI*2),s.fillStyle="#01411c",s.fill();let c=a+l*.52,h=o-l*.34,u=l*.34,f=u*.4;s.beginPath();for(let d=0;d<10;d++){let x=-Math.PI/2+d*Math.PI/5+.35,y=d%2?f:u;s.lineTo(c+Math.cos(x)*y,h+Math.sin(x)*y)}s.closePath(),s.fillStyle="#ffffff",s.fill()}else s.fillStyle="#000000",s.fillRect(0,0,t,e/3),s.fillStyle="#ffffff",s.fillRect(0,e/3,t,e/3),s.fillStyle="#007a3d",s.fillRect(0,e*2/3,t,e/3),s.beginPath(),s.moveTo(0,0),s.lineTo(t*.33,e/2),s.lineTo(0,e),s.closePath(),s.fillStyle="#ce1126",s.fill();let r=new gn(n);return r.colorSpace=Ce,r.anisotropy=4,r}var Ed={};function Hh(i){return Ed[i]||(Ed[i]=I_(i,768,512))}function Ea(i,t,e){let n=new ie,s=new nt(new Be(t,e),new be({map:Hh(i),toneMapped:!1,side:sn}));n.add(s);let r=new nt(new Ae(t+1.2,e+1.2,.3),new he({color:"#f4f1e8",roughness:.5}));return r.position.z=-.2,n.add(r),n}var P_='"Noto Nastaliq Urdu","Jameel Noori Nastaleeq","Alvi Nastaleeq","Geeza Pro","Segoe UI","Tahoma","Arial",sans-serif',L_='"Lilita One","Fredoka One","Arial Rounded MT Bold","Trebuchet MS",Impact,Arial,sans-serif';function D_(i,t,e={}){let s=Math.round(1024/t),r=document.createElement("canvas");r.width=1024,r.height=s;let a=r.getContext("2d"),o=a.createLinearGradient(0,0,1024,s);o.addColorStop(0,(e.bg||["#1b1464","#3a2d9e"])[0]),o.addColorStop(1,(e.bg||["#1b1464","#3a2d9e"])[1]),a.fillStyle=o,a.fillRect(0,0,1024,s),a.lineWidth=s*.05,a.strokeStyle=e.border||"#ffd23f",a.strokeRect(s*.05,s*.05,1024-s*.1,s-s*.1);let l=e.urdu?P_:L_,c=s*(e.urdu?.36:.5);a.textAlign="center",a.textBaseline="alphabetic",e.urdu&&(a.direction="rtl");let h=1024*(e.urdu?.62:.86),u=s*(e.urdu?.6:.62),f=c*.8,d=c*.2;for(let p=0;p<3;p++){a.font=`${c}px ${l}`;let m=a.measureText(i);f=m.actualBoundingBoxAscent>0?m.actualBoundingBoxAscent:c*.8,d=m.actualBoundingBoxDescent>0?m.actualBoundingBoxDescent:c*.2;let S=Math.min(1,h/Math.max(1,m.width),u/Math.max(1,f+d));if(S>=.99)break;c*=S}let x=s/2+(f-d)/2;a.lineJoin="round",a.lineWidth=c*.12,a.strokeStyle=e.stroke||"#000000",a.strokeText(i,1024/2,x),a.fillStyle=e.fg||"#ffd23f",a.fillText(i,1024/2,x);let y=new gn(r);return y.colorSpace=Ce,y.anisotropy=4,y}function Wi(i,t,e,n={}){let s=new ie;s.add(new nt(new Be(t,e),new be({map:D_(i,t/e,n),toneMapped:!1,side:sn})));let r=new nt(new Ae(t+.8,e+.8,.3),new he({color:n.frame||"#f4f1e8",roughness:.5}));return r.position.z=-.2,s.add(r),s}var en=16,Ta=7,we=56,fs=-262,qn=-336,cn=-4,wa=-416;function wd(){let i=[],t=[],e=[],n=[],s=[],r=[],a=[];i.push({ax:38,az:qn-7,bx:38,bz:-410,hw:6,y0:0,y1:en,g:"ramp+"}),i.push({ax:we,az:wa,bx:we,bz:cn,hw:Ta,y0:en,y1:en,g:"s2"}),i.push({ax:we,az:cn,bx:-we,bz:cn,hw:Ta,y0:en,y1:en,g:"sx"}),i.push({ax:-we,az:cn,bx:-we,bz:wa,hw:Ta,y0:en,y1:en,g:"s3"}),t.push({x:47,z:wa,r:15,y:en,g:"pa"},{x:we,z:cn,r:12,y:en,g:"pb"},{x:-we,z:cn,r:12,y:en,g:"pc"},{x:-47,z:wa,r:15,y:en,g:"pd"});let o=(y,p)=>s.push({k:"barrel",x:y,z:p,r:1.3}),l=(y,p,m)=>{for(let S=p;S<=m+.01;S+=2.4)s.push({k:"block",x:y,z:S,r:1.2})},c=(y,p,m=7)=>{n.push({x:y,z:p,r:m,y:en})},h=(y,p)=>e.push({x:y,z:p,r:4,y:en}),u=-we,f=2.2;h(we,-396),o(we-f,-385),o(we+f,-375),o(we-f,-365),o(we+f,-355),h(we,-345),l(we-3.2,-300,-292),l(we+3.2,-284,-276),h(we,-255),c(we,-235),h(we,-190),o(we+f,-150),o(we-f,-140),o(we+f,-130),h(we,-100),h(we,-22),o(36,cn+f),o(26,cn-f),h(15,cn),h(-15,cn),o(-26,cn+f),o(-36,cn-f),h(u,-25),o(u-f,-45),o(u+f,-55),o(u-f,-65),h(u,-128),c(u,-205),l(u-3.2,-250,-242),l(u+3.2,-234,-226),h(u,-190),c(u,-300),h(u,-338),o(u-f,-350),o(u+f,-358),o(u-f,-366),h(u,-388),r.push({x:we,z:-250,w:8},{x:15,z:cn,w:8},{x:u,z:-185,w:8},{x:u,z:-397,w:8});let d={x:-47,z:wa,r:15},x=[-57,-51,-45,-39].map((y,p)=>({id:4+p,x:y,z:-423,y:en,yaw:0}));for(let y of[1,-1]){for(let p=-40;p>-405;p-=30)Math.abs(p+26)>20&&Math.abs(p-fs)>11&&Math.abs(p-qn)>11&&a.push({x:y*we-10.2,z:p,kind:"gantry",sd:y,span:10.2});y>0&&a.push({x:38-6.6,z:-380,kind:"col"},{x:38+6.6,z:-380,kind:"col"},{x:38-6.6,z:-362,kind:"col"},{x:38+6.6,z:-362,kind:"col"}),a.push({x:y*we,z:cn,kind:"plaza"},{x:y*34,z:-421,kind:"plaza"},{x:y*44,z:-404,kind:"plaza"})}return{ground:[],segs:i,plazas:t,boosts:e,slicks:n,defs:s,gates:r,garage:d,racers:x,pillars:a}}function Td(i){let t=i.map(e=>({x:e.x,z:e.z,y:en,r:e.r,vx:0,vz:0}));return()=>t}function Ad(i,t,e,n){let s=i.main,r=i.glow,a=i.group,o=en,l=(g,E,b)=>new Ae(g,E,b),c="#2f3342",h="#ff3b3b",u="#ffffff",f=(g,E,b)=>{for(let L of t.segs){if(L.g===b)continue;let _=L.bx-L.ax,w=L.bz-L.az,D=_*_+w*w,U=((g-L.ax)*_+(E-L.az)*w)/D;if(U=Math.max(0,Math.min(1,U)),Math.hypot(g-(L.ax+_*U),E-(L.az+w*U))<L.hw-.5)return!0}for(let L of t.plazas)if(L.g!==b&&Math.hypot(g-L.x,E-L.z)<L.r-.5)return!0;return!1},d=0;for(let g of t.segs){let E=Math.hypot(g.bx-g.ax,g.bz-g.az),b=Math.max(1,Math.ceil(E/12));for(let L=0;L<b;L++,d++){let _=L/b,w=(L+1)/b,D=g.ax+(g.bx-g.ax)*_,U=g.az+(g.bz-g.az)*_,M=g.ax+(g.bx-g.ax)*w,P=g.az+(g.bz-g.az)*w,I=g.y0+(g.y1-g.y0)*_,C=g.y0+(g.y1-g.y0)*w,N=M-D,F=P-U,k=Math.hypot(N,F),O=(D+M)/2,Y=(U+P)/2,X=(I+C)/2,at=-Math.atan2(F,N),ot=Math.atan2(C-I,k),Ct=-F/k,zt=N/k,Zt=Math.hypot(k,C-I);s.add(l(Zt+.3,.9,g.hw*2),O,X-.45,Y,c,0,at,ot,1,1,1,"YXZ");for(let q of[-1,1]){let et=O+Ct*q*(g.hw-.3),yt=Y+zt*q*(g.hw-.3);f(et,yt,g.g)||(s.add(l(Zt+.05,1,.55),et,X+.5,yt,(d+(q>0?1:0))%2?h:u,0,at,ot,1,1,1,"YXZ"),r.add(l(Zt+.05,.12,.2),et-Ct*q*.1,X+1.1,yt-zt*q*.1,"#22f2ff",0,at,ot,1,1,1,"YXZ"))}d%2===0&&!f(O,Y,g.g)&&r.add(l(Math.min(Zt,5)*.55,.04,.3),O,X+.04,Y,"#ffe14a",0,at,ot,1,1,1,"YXZ")}}for(let g of t.plazas){s.add(new Nt(g.r,g.r,.9,40),g.x,g.y-.45,g.z,c);for(let E=0;E<36;E++){let b=E/36*Math.PI*2,L=g.x+Math.cos(b)*(g.r-.3),_=g.z+Math.sin(b)*(g.r-.3);f(L,_,g.g)||s.add(l(2.4,1,.55),L,g.y+.5,_,E%2?h:u,0,-b+Math.PI/2,0)}}for(let g of t.pillars)if(g.kind==="gantry"){for(let E of[-1,1])s.add(new Nt(.55,.7,o-.9,10),g.x+(E>0?2*g.span:0),(o-.9)/2,g.z,"#9aa3b8");s.add(l(2*g.span+1.4,.9,1.4),g.x+g.span,o-1.35,g.z,"#7b84a0")}else g.kind==="col"?s.add(new Nt(.5,.65,o*.85,10),g.x,o*.42,g.z,"#9aa3b8"):s.add(new Nt(1.1,1.5,o-.9,12),g.x,(o-.9)/2,g.z,"#9aa3b8");for(let g of t.boosts){s.add(l(10,.07,8),g.x,g.y+.04,g.z,"#ff9f1c");for(let E=0;E<3;E++)s.add(new Ge(1.5,2,3),g.x,g.y+.1,g.z+2-E*2,"#fff3b0",0,Math.PI,0)}let x=new vi;for(let g of t.slicks)x.add(new Nt(g.r,g.r,.05,28),g.x,g.y+.04,g.z,"#1c1030"),x.add(new Nt(g.r*.62,g.r*.62,.03,24),g.x,g.y+.07,g.z,"#3a1f66");for(let g of t.defs)g.k==="barrel"&&(x.add(new Nt(g.r*.85,g.r*.85,1.5,14),g.x,o+.75,g.z,"#ff7a1a"),x.add(new Nt(g.r*.88,g.r*.88,.28,14),g.x,o+.95,g.z,"#ffffff")),g.k==="block"&&(x.add(l(g.r*2,1.3,g.r*2),g.x,o+.65,g.z,"#aeb4c6"),x.add(l(g.r*2.02,.2,g.r*.7),g.x,o+1.32,g.z,"#ffd23f"));let y=x.build(new he({vertexColors:!0,roughness:.5}));y&&(y.castShadow=!0,a.add(y),i.skyObst=y);let p=(g,E,b,L,_,w,D,U)=>{let M=Wi(g,E,b,L);return M.position.set(_,w,D),M.rotation.y=U,a.add(M),M},m={bg:["#22c55e","#0b7a3a"],fg:"#ffffff",stroke:"#053b1c",border:"#ffd23f"};t.gates.forEach((g,E)=>{let b=E===1,L=E===t.gates.length-1;for(let D of[-1,1]){let U=b?g.x:g.x+D*(Ta-.3),M=b?cn+D*(Ta-.3):g.z;s.add(l(.7,7,.7),U,o+3.5,M,"#2b1c6b")}let _=g.x,w=b?cn:g.z;p(L?"FINISH - RACERS UNLOCKED!":`SKY GATE ${E+1}`,L?15:9,L?2.6:2,L?{bg:["#e0001f","#8f0014"],fg:"#ffffff",stroke:"#33000a",border:"#ffd23f"}:m,_,o+7.4,w,b?Math.PI/2:0)});let S={bg:["#ff9f1c","#e0601a"],fg:"#ffffff",stroke:"#4a1c00",border:"#ffffff"};for(let g of[-1,1])s.add(l(.8,8,.8),38+g*7.2,4,qn-12,"#2b1c6b");p("SKY SPEEDWAY \u25B2  WIN A RACER",17,3.2,S,38,8.8,qn-12,0),p("SKY SPEEDWAY \u2192",14,3.2,S,we,5.4,qn+20,0);let A=t.garage;for(let g of[-1,1])s.add(l(.8,9,.8),A.x+g*12,o+4.5,A.z-9,"#2b1c6b");p("RACER GARAGE",24,4.6,{bg:["#e0001f","#8f0014"],fg:"#ffffff",stroke:"#33000a",border:"#ffd23f"},A.x,o+10.2,A.z-9,0);for(let g of t.racers)s.add(l(5.2,.07,6.8),g.x,o+.03,g.z,"#e0001f")}var N_={candy:{plat:["#ff7ab8","#ffb347","#5ad6c4","#a78bfa","#ffd84d"],pad:"#fff6fc",icePad:"#e8fbff",hazard:"#ff3b6b",hazard2:"#ffffff",hub:"#6b4de6",accent:"#ffdc3a",convBase:"#7a56e8",belt:"#ffe8f4"},canyon:{plat:["#e0793a","#f2b05e","#c4503d","#b8452f","#f5c77e"],pad:"#ffe6c2",icePad:"#fff",hazard:"#4b2a9e",hazard2:"#ffd23f",hub:"#4a2a1c",accent:"#ffd23f",convBase:"#5a2d1e",belt:"#ffb35e"},frost:{plat:["#d6efff","#9fd6ff","#bfe9ff","#8ec5f5","#f4fbff"],pad:"#ffffff",icePad:"#f4fcff",hazard:"#ff4d6d",hazard2:"#ffffff",hub:"#2f5d9e",accent:"#ff8a5b",convBase:"#3a6db0",belt:"#cfe9ff"},fair:{plat:["#ff5d73","#ffd23f","#3ec6e0","#8bd450","#ff9f43"],pad:"#fff7e0",icePad:"#fff",edgeGlow:null,hazard:"#ff2d55",hazard2:"#fff6d6",hub:"#5b2a86",accent:"#ffd23f",convBase:"#7a2d9e",belt:"#ffe9a8"},fun:{plat:["#ff6b9d","#ffd23f","#4cc9f0","#80ed99","#ff9f1c"],pad:"#ffffff",icePad:"#ffffff",edgeGlow:null,hazard:"#ff3d68",hazard2:"#fff7d6",hub:"#6a3fa0",accent:"#ffd23f",convBase:"#7a2d9e",belt:"#ffe9a8"},neon:{plat:["#2a1d6e","#3a1785","#1f2f7a","#4c1a7c","#2f2273"],pad:"#4a36b0",icePad:"#4a36b0",edgeGlow:"#22f2ff",hazard:"#ff2bd6",hazard2:"#22f2ff",hub:"#0e0a2e",accent:"#7cff3d",convBase:"#18104a",belt:"#3a2a9a"}},U_=["candy","canyon","frost","neon","fair","fun"],F_=(i,t,e)=>{let n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function Rd(i,t=!1,e=null){let n=U_[i],s=N_[n],r=new Yl(s,t);r.arrowTexture=e,r.key=n,r.waterY=i===5?-40:-5.5,r.killY=i===5?-60:-9.5;let a={z:0,y:0},o={key:n,spawn:{x:0,y:0,z:1.5},signs:[],pads:[]};function l(M,P,I={}){var Y,X,at;let C=a.z-((Y=I.gap)!=null?Y:0),N=C-P/2,F=a.y+((X=I.dy)!=null?X:0),k=(at=I.x)!=null?at:0,O=r.platform(k,F,N,M,P,I);return a.z=C-P,a.y=F,{s:O,x:k,cz:N,near:C,far:C-P,top:F,w:M,d:P}}function c(M,P=3.5){return r.checkpoint(M.x,M.top,M.near-P,Math.min(M.w,16))}let h=()=>{a.z=6,a.y=0;let M=l(18,22);return o.startArch=M.near-8,M};function u(M,P,I,C,N={}){let F;for(let k=0;k<M;k++)F=l(P,P,{gap:I,x:Math.sin(k*2.1+.6)*C,...N});return F}function f(M,P,I=12,C={}){let N=r.ramp(0,a.z,a.y,a.z-M,a.y+P,I,C);return a.z-=M,a.y+=P,N}function d(M,P,I,C,N,F){let k=M/(P+1);for(let O=0;O<P;O++){let Y=a.z-k*(O+1),X=O*Math.PI;r.mover(0,a.y,Y,I,C,at=>[N*Math.sin(at*2*Math.PI/F+X),0,0])}a.z-=M}function x(M,P,I,C,N,F){let k=M/(P+1);for(let O=0;O<P;O++){let Y=a.z-k*(O+1),X=O*Math.PI*.9;r.mover(0,a.y,Y,I,C,at=>[0,N*(.5-.5*Math.cos(at*2*Math.PI/F+X)),0],{stripes:!0})}a.z-=M}function y(M,P,I){for(let C=0;C<M;C++){let N=a.z-4.5-C*P;r.disc(C%2?2:-2,a.y,N,2.5,{bounce:I,color:C%2?s.hazard:s.accent})}a.z-=9+(M-1)*P}function p(M,P,I,C,N){for(let F=0;F<M;F++){let k=a.z-C-P;r.disc(0,a.y,k,P,{omega:I[F%I.length],phase:F*1.3}),N&&r.bar(0,a.y+.12,k,P*1.9,{omega:-N*(F%2?-1:1),h:1,w:1,phase:F}),a.z=k-P}}function m(M,P,I,C=0){let N=l(P,M*I+8,{gap:C});for(let F=0;F<M;F++){let k=N.near-7-F*I,O=3,Y=P/O;for(let X=0;X<O;X++){let at=F*1.7+X*2.1,ot=3.4+X%2*.6;r.mover(N.x-P/2+Y*(X+.5),N.top+3.4,k,Y-.08,.9,Ct=>[0,2.9*F_(.35,.62,.5+.5*Math.sin(Ct*2*Math.PI/ot+at)),0],{h:3.4,stripes:!0,pad:!1,color:s.hazard2})}}return N}function S(M,P,I,C,N,F=0,k=1.5){let O=l(M,P,{gap:F});for(let Y=0;Y<I;Y++)r.hammer(O.x,O.top+C+1.45,O.near-7-Y*N,C,{amp:1.2,omega:k+.08*Y,phase:Y*1.9,span:M/2+.8,baseY:O.top,r:1.3});return O}function A(M,P,I,C=0){let N=l(M,P,{gap:C}),F=M/2;for(let k=0;k<I;k++){let O=N.near-7-k*((P-12)/Math.max(1,I-1)||8),Y=5.5,X=F-Y/2,at=3.2+k%2*.5;r.mover(N.x-F+Y/2,N.top+2.6,O,Y,1.1,ot=>[X*(.5-.5*Math.cos(ot*2*Math.PI/at+k))*2*(k%2,1),0,0],{h:2.6,stripes:!0,pad:!1,color:s.hazard2}),r.mover(N.x+F-Y/2,N.top+2.6,O-3.2,Y,1.1,ot=>[-X*(.5-.5*Math.cos(ot*2*Math.PI/(at+.4)+k+1))*2,0,0],{h:2.6,stripes:!0,pad:!1,color:s.hazard2})}return N}function g(M,P,I,C=2.2,N=1.8){for(let F=0;F<M;F++){let k=a.z-C-I/2-F*(I+N);for(let O=0;O<P;O++){let Y=(O-(P-1)/2)*(I+1.4);r.platform(Y,a.y,k,I,I,{color:s.plat[(F+O)%s.plat.length]})}}a.z-=C+M*I+(M-1)*N}function E(M,P,I,C,N,F){let k=f(M,P,I),O=X=>k.yN+(k.yF-k.yN)*((k.zN-X)/(k.zN-k.zF));return[-I*.32,0,I*.32].forEach((X,at)=>r.balls(X,k.zF,k.zN-2,O,F,C,N,[at*N/3],{})),k}function b(M,P,I,C,N,F=1.4){let k=a.z-F,O=k-P/2,Y=r.seesaw(0,a.y,O,M,P,I,C,N);return a.z=k-P,Y}function L(M,P,I=0){a.z-=I,M.forEach((C,N)=>{let F=a.z-P/2-N*P;for(let k=0;k<C.length;k++)C[k]==="#"&&r.platform((k-(C.length-1)/2)*P,a.y,F,P,P,{color:s.plat[(N+k)%s.plat.length],pad:!0})}),a.z-=M.length*P}function _(M,P,I,C){r.bungee(0,a.z-P,a.y-I,5.5,C,a.y+15),a.z-=M}function w(M,P,I=0){let C=a.z-.9-3;[-4.7+I,4.7+I].forEach((F,k)=>{let O=k*Math.PI,Y=ot=>{let Ct=.5-.5*Math.cos(2*Math.PI*ot/P+O);return[1.2*Math.sin(2*Math.PI*Ct),2.3*Math.sin(2*Math.PI*Ct),-M*Ct]};r.mover(F,a.y,C,6,6,ot=>Y(ot),{h:1.3,stripes:!0,color:k?s.plat[2]:s.plat[0]});let X=[],at=48;for(let ot=0;ot<=at;ot++){let Ct=ot/at,zt=[F+1.2*Math.sin(2*Math.PI*Ct),2.3*Math.sin(2*Math.PI*Ct),-M*Ct];X.push([zt[0],a.y-1.5+zt[1],C+zt[2]])}for(let ot of[-2.2,2.2])r.tube(X.map(Ct=>[Ct[0]+ot,Ct[1],Ct[2]]),.14,s.hazard);r.tube(X.map(ot=>[ot[0],ot[1]-.3,ot[2]]),.2,s.hub);for(let ot=0;ot<=at;ot+=4){let Ct=X[ot];r.tube([[Ct[0],Ct[1]-.3,Ct[2]],[Ct[0],a.y-14,Ct[2]]],.22,s.hub)}}),a.z=C-M-3-.9}function D(){let M=l(22,34,{gap:0,color:s.plat[0]}),P=M.near-12;return r.arch(0,M.top,P,20,s.accent,!1),o.finishZ=P,o.finishY=M.top,o.finishPlat=M,M}if(i===0){h(),u(5,6,3,3.2);let M=l(16,10,{gap:3});c(M,3),M=l(18,34,{gap:2.5}),r.bar(M.x,M.top,M.near-10,18,{omega:1.3,h:1,w:1.1}),r.bar(M.x,M.top,M.near-24,18,{omega:-1.6,h:1,w:1.1,phase:1}),c(M,3.5),f(14,3,12),M=l(14,10),c(M,3),d(20,2,6.2,6.2,5,5.2),M=l(14,10),c(M,3),y(3,9,16.5),M=l(14,10),c(M,3),p(3,5,[.9,-1,1.1],2.6),M=l(16,10,{gap:2.6}),c(M,3),M=m(3,18,11,1),f(16,-3,12),D()}else if(i===1){h(),u(3,7,3,2.6);let M=l(18,10,{gap:3});c(M,3),M=S(18,36,3,8,11,2.5,1.5),M=l(14,8,{gap:3}),c(M,3),M=r.conveyor(0,a.y,a.z-15,14,30,5),r.bar(0,a.y,a.z-10,14,{omega:1.5,h:1}),r.bar(0,a.y,a.z-23,14,{omega:-1.8,h:1,phase:2}),a.z-=30,M=l(14,8),c(M,3),g(6,3,4.6),M=l(14,8,{gap:2.2}),c(M,3),E(40,5,14,11,6,1.5),M=l(22,28),r.bar(M.x,M.top,M.near-14,22,{omega:1.05,arms:2,h:1.1}),c(M,3),M=A(16,36,3,2.5),D()}else if(i===2){h();let M=l(10,40,{gap:2.5,ice:!0});r.bar(M.x,M.top,M.near-14,10,{omega:.9,h:.95,w:1}),r.bar(M.x,M.top,M.near-28,10,{omega:-1.1,h:.95,w:1,phase:1.5}),u(4,6.5,3.2,2.5,{ice:!0}),M=l(16,10,{gap:3.2,ice:!0}),c(M,3),p(3,6,[.8,-1,1.2],2.8,1.9),M=l(18,10,{gap:2.8}),c(M,3),E(36,6,14,12,5.4,1.4),M=l(16,10),c(M,3),x(18,2,6.2,6.2,3.2,4.4),M=l(14,10),c(M,3),r.disc(0,a.y,a.z-4,3,{bounce:22,color:s.hazard}),M=l(16,12,{gap:11,dy:4.5}),c(M,3),M=l(12,24,{ice:!0}),r.bar(M.x,M.top,M.near-12,12,{omega:1.4,h:1}),M=l(22,32,{ice:!0}),r.bar(M.x,M.top,M.near-16,22,{omega:-1.25,arms:2,h:1.1}),D()}else if(i===4){h();let M;for(let P=0;P<3;P++)b(9,12,1.4,3.4+P*.5,P*2.1),M=l(12,6,{gap:1.4});c(M,3),L(["#####","#.#.#","##.##",".#.#.",".##..","..#.#",".###.","#####"],3.2,1.2),r.checkpoint(0,a.y,a.z+1.6,14),f(30,8,12),M=l(12,12),c(M,3),_(20,9,9,32),M=l(16,14),c(M,3),f(30,-8,12),M=l(16,8),c(M,3),w(44,12),M=l(16,10),c(M,3),g(5,3,4.6,2.2,1.7),M=l(14,8,{gap:2.2}),c(M,3),p(3,6,[.9,-1.1,1],2.6,1.6),M=l(16,10,{gap:2.6}),c(M,3),M=l(22,30),r.bar(M.x,M.top,M.near-15,22,{omega:1.2,arms:2,h:1.1}),D()}else if(i===5){o.startArch=-2,a.z=-16,a.y=0,r.platform(0,0,-430/2,140,450,{h:2,color:"#92e66c",pad:!1});for(let J=4,lt=0;J>-446;J-=14,lt++)for(let z of[-1,1])r.platform(z*(140/2+1),22,J-7,2,14,{h:22,color:s.plat[(lt+(z>0?2:0))%s.plat.length],pad:!1});if(r.platform(0,22,11,144,2,{h:22,color:s.plat[1],pad:!1}),r.platform(0,22,-441,144,2,{h:22,color:s.plat[3],pad:!1}),r.headless||r.main.add(r.rbox(12,.03,232,.01),0,.02,-128,"#f8ebb8"),!r.headless){let lt="\u0639\u06A9\u0631\u0645\u06C1",z=(Yt,Gt,R,v=12)=>{Yt.position.set(Gt*69.7,v,R),Yt.rotation.y=Gt<0?Math.PI/2:-Math.PI/2,r.group.add(Yt)};z(Ea("pk",30,20),-1,-50),z(Ea("ps",30,20),1,-50),z(Ea("ps",30,20),-1,-290),z(Ea("pk",30,20),1,-290),z(Wi("MADE BY HARIS",44,13,{bg:["#ff3d68","#ff9f1c"],fg:"#ffffff",stroke:"#6a1020",border:"#ffd23f"}),-1,-130),z(Wi("MADE BY HARIS",44,13,{bg:["#4cc9f0","#3a2d9e"],fg:"#ffd23f",stroke:"#101040",border:"#ffffff"}),1,-170),z(Wi(lt,30,15,{urdu:!0,bg:["#0b6b3a","#01411c"],fg:"#ffffff",stroke:"#00230f",border:"#ffd23f"}),-1,-210),z(Wi(lt,30,15,{urdu:!0,bg:["#0b6b3a","#01411c"],fg:"#ffffff",stroke:"#00230f",border:"#ffd23f"}),1,-330)}let I=J=>r.platform(0,.04,J,8,14,{boost:1,color:"#ffd23f",pad:!1,h:.5});r.checkpoint(0,0,-70,16),I(-30),I(-52),[[-16,-26,3.2,20,0],[-22,-36,3.2,24,1],[-14,-46,3.4,28,2],[16,-28,3.2,22,3],[22,-38,3.4,26,4]].forEach(([J,lt,z,Yt,Gt])=>r.disc(J,0,lt,z,{bounce:Yt,color:s.plat[Gt]})),r.platform(31,9,-52,12,12,{color:s.plat[1]}),r.disc(20,0,-50,3.4,{bounce:29,color:s.hazard}),r.airpad(-26,-62,3.6,0,15),r.platform(-34,13,-62,8,8,{color:s.plat[2]}),r.orbit(-32,-18,6,1.6,3,.8),r.cannon(22,-14,16,[0,-17]),r.pirate(28,-70,16,.55,6.5),r.dropTower(-32,-82,14,13),r.checkpoint(0,0,-72,16),r.ramp(-14,-72,0,-98,10,8,{color:s.plat[3]}),r.platform(-28,10,-104,30,12,{color:s.plat[1]}),r.punch(-44,11.2,-104,1,0,8,{off:0}),r.punch(-12.2,11.2,-104,-1,0,8,{off:1.6}),[-38,-28,-18].forEach((J,lt)=>r.ramp(J,-110,10,-152,0,7,{conv:[0,-14],ice:!0,color:s.plat[lt*2%5],padColor:"#ffffff"})),r.platform(26,1.2,-90,14,14,{color:s.plat[4]}),r.punch(17.2,2.4,-90,1,0,7,{off:0}),r.punch(34.8,2.4,-90,-1,0,7,{off:1.6}),r.punch(26,2.4,-98.8,0,1,7,{off:.8}),r.punch(26,2.4,-81.2,0,-1,7,{off:2.4});for(let J=0;J<3;J++)r.seesaw(26,2,-112-J*16,9,12,1.4,3.4+J*.4,J*2.1);I(-118),r.checkpoint(0,0,-150,16),r.ramp(-30,-156,0,-182,8,10,{color:s.plat[2]}),r.platform(-30,8,-188,12,12,{color:s.plat[0]}),r.bungee(-30,-203,0,5.5,30,15),r.ferris(-30,11,-224,9,6,.4),r.ramp(26,-156,0,-164,3,14,{color:s.plat[3]}),a.z=-164,a.y=3,l(16,8,{x:26}),w(36,11,26),l(16,8,{x:26}),r.ramp(26,a.z,3,a.z-8,0,14,{color:s.plat[3]}),r.disc(0,.3,-180,8.5,{omega:.7,color:s.plat[0]}),r.headless||(r.main.add(new Nt(.5,.5,9,10),0,4.8,-180,"#ffffff"),r.main.add(new Ge(10,3.2,20),0,10.4,-180,s.hazard)),[-160,-172,-184].forEach((J,lt)=>{r.disc(-14,.3,J,3.5,{omega:lt%2?1.5:-1.5,color:s.plat[(lt+1)%5]}),r.bar(-14,.4,J,6.4,{omega:lt%2?-1.1:1.1,h:.9,w:.9})}),r.checkpoint(0,0,-232,16),r.checkpoint(0,0,-244,16);let C=56,N=7,F={x:0,z:(fs+qn)/2},k=-27,O=-420,Y=[1,-1],X=[],at=[];for(let J of Y)at.push({x:C*J,z:k,r:13,g:"p0"+J},{x:C*J,z:O,r:13,g:"p1"+J}),X.push({ax:C*J,az:k,bx:C*J,bz:O,hw:N,g:"hwy"+J});X.push({ax:-C,az:fs,bx:C,bz:fs,hw:N,g:"con-top"},{ax:-C,az:qn,bx:C,bz:qn,hw:N,g:"con-bot"});let ot=[];for(let J of Y)for(let lt of[-110,-210,-370])ot.push({x:C*J,z:lt,r:4});let Ct={segs:X,plazas:at,boosts:[...ot,{x:30,z:fs,r:4},{x:-30,z:fs,r:4},{x:30,z:qn,r:4},{x:-30,z:qn,r:4}]};o.track=Ct,o.cars=[[C-3.5,-33],[C+3.5,-33],[-C-3.5,-33],[-C+3.5,-33]].map(([J,lt],z)=>({id:z,x:J,z:lt,yaw:Math.PI}));let zt=wd();if(!r.headless){let J=r.main,lt="#3b3f4d",z=(R,v,H)=>{for(let G of X){if(G.g===H)continue;let K=G.bx-G.ax,ut=G.bz-G.az,xt=K*K+ut*ut,tt=((R-G.ax)*K+(v-G.az)*ut)/xt;if(tt=Math.max(0,Math.min(1,tt)),Math.hypot(R-(G.ax+K*tt),v-(G.az+ut*tt))<G.hw-.4)return!0}for(let G of at)if(G.g!==H&&Math.hypot(R-G.x,v-G.z)<G.r-.4)return!0;return!1},Yt=[];X.forEach(R=>{let v=Math.hypot(R.bx-R.ax,R.bz-R.az),H=Math.max(1,Math.ceil(v/12));for(let G=0;G<H;G++)Yt.push({ax:R.ax+(R.bx-R.ax)*G/H,az:R.az+(R.bz-R.az)*G/H,bx:R.ax+(R.bx-R.ax)*(G+1)/H,bz:R.az+(R.bz-R.az)*(G+1)/H,hw:R.hw,g:R.g})}),Yt.forEach((R,v)=>{let H=R.bx-R.ax,G=R.bz-R.az,K=Math.hypot(H,G),ut=(R.ax+R.bx)/2,xt=(R.az+R.bz)/2,tt=-Math.atan2(G,H),st=-G/K,vt=H/K;J.add(r.rbox(K+.7,.08,R.hw*2,.02),ut,R.g.startsWith("hwy")?.053:R.g.startsWith("con")?.056:.05,xt,lt,0,tt,0);for(let Ft of[-1,1]){let St=ut+st*Ft*(R.hw-.45),Mt=xt+vt*Ft*(R.hw-.45);if(z(St,Mt,R.g)||J.add(r.rbox(K+.05,.09,.9,.02),St,.1,Mt,(v+(Ft>0?1:0))%2?"#ff3b3b":"#ffffff",0,tt,0),v%2===0){let kt=ut+st*Ft*(R.hw+1.3),Jt=xt+vt*Ft*(R.hw+1.3);z(kt,Jt,R.g)||(J.add(new Nt(.75,.75,.7,10),kt,.35,Jt,"#23252e"),J.add(new Nt(.78,.78,.22,10),kt,.85,Jt,v/2%2?"#ff3b3b":"#ffffff"))}}v%2===0&&!z(ut,xt,R.g)&&J.add(r.rbox(Math.min(K,5)*.55,.06,.3,.02),ut,.1,xt,"#ffffff",0,tt,0)});for(let R of at){J.add(new is(R.r,48),R.x,.054,R.z,lt,-Math.PI/2,0,0);for(let v=0;v<40;v++){let H=v/40*Math.PI*2,G=R.x+Math.cos(H)*(R.r-.45),K=R.z+Math.sin(H)*(R.r-.45);z(G,K,R.g)||J.add(r.rbox(2,.09,.9,.02),G,.1,K,v%2?"#ff3b3b":"#ffffff",0,-H+Math.PI/2,0)}for(let v=0;v<20;v++){let H=v/20*Math.PI*2,G=R.x+Math.cos(H)*(R.r+1.3),K=R.z+Math.sin(H)*(R.r+1.3);z(G,K,R.g)||(J.add(new Nt(.75,.75,.7,10),G,.35,K,"#23252e"),J.add(new Nt(.78,.78,.22,10),G,.85,K,v%2?"#ff3b3b":"#ffffff"))}}for(let R of Ct.boosts){J.add(r.rbox(10,.07,8,.02),R.x,.12,R.z,"#ff9f1c");for(let v=0;v<3;v++)J.add(new Ge(1.5,2,3),R.x,.16,R.z+2-v*2,"#fff3b0",-Math.PI/2*0,Math.PI,0)}for(let R=0;R<5;R++)J.add(r.rbox(26-R*2,1.1,2.4,.1),F.x,.55+R*1.1,F.z-2+R*-2.2,s.plat[R%5]);let Gt=["#0b6b3a","#2f7bff","#ffb21e","#a855f7"];o.cars.forEach((R,v)=>{J.add(r.rbox(7.5,.07,9.5,.03),R.x,.12,R.z,Gt[v]),J.add(r.rbox(6.9,.075,8.9,.03),R.x,.125,R.z,lt)});for(let R of Y){let v=C*R;for(let[H,G]of[[v-10.5,-14],[v+10.5,-14],[v-10.5,-38],[v+10.5,-38]])J.add(r.rbox(.8,6,.8,.2),H,3,G,s.plat[1]);J.add(r.rbox(23,.7,27,.2),v,6.3,k,s.hazard),J.add(r.rbox(21,.4,25,.2),v,6.75,k,"#ffffff");for(let H=0;H<10;H++)for(let G=0;G<2;G++)J.add(r.rbox(1.4,.07,1.4,.01),v-6.3+H*1.4,.13,-48-G*1.4,(H+G)%2?"#111111":"#ffffff");for(let H of[-1,1])J.add(r.rbox(.8,6.4,.8,.2),v+H*8.2,3.2,-48,s.plat[1]);J.add(r.rbox(17.6,1,1.2,.2),v,6.4,-48,s.hazard)}}if(X.push(...zt.segs),Ct.plazas.push(...zt.plazas),Ct.boosts.push(...zt.boosts),Ct.slicks=zt.slicks,zt.dyn=Td(zt.defs),Ct.dyn=zt.dyn,o.cars.push(...zt.racers),o.sky={y:en,gates:zt.gates,garage:zt.garage,racerIds:[4,5,6,7],pillars:zt.pillars},r.headless||Ad(r,zt,s),!r.headless){let J=(z,Yt,Gt,R,v,H,G,K)=>{let ut=Wi(z,Yt,Gt,R);return ut.position.set(v,H,G),ut.rotation.y=K,r.group.add(ut),ut},lt={bg:["#1f8de6","#14609f"],fg:"#ffffff",stroke:"#06223d",border:"#ffd23f"};for(let z of Y){let Yt=C*z;J("CAR STATION",20,4.6,lt,Yt-11.8,8.8,k,-Math.PI/2),J("CAR STATION",20,4.6,lt,Yt+11.8,8.8,k,Math.PI/2);for(let[Gt,R]of[[16,-8],[34,-14]]){let v=new nt(new Nt(.2,.2,4,8),new he({color:"#e8e8f0"}));v.position.set(Gt*z,2,R),r.group.add(v),J(z>0?"CAR STATION \u2192":"\u2190 CAR STATION",12,3.2,lt,Gt*z,4.6,R,0)}J("LONG ROAD \u2192 DRIVE THE WHOLE MAP",22,3.2,{bg:["#ff9f1c","#e0601a"],fg:"#ffffff",stroke:"#4a1c00",border:"#ffffff"},Yt,5.2,-60,0)}}let Zt=8,q=7,et=1.2,yt=6,Wt=-356,wt=20261017,jt=()=>(wt=wt*1664525+1013904223>>>0,wt/4294967296),de=Array.from({length:q},()=>Array(q+1).fill(!0)),it=Array.from({length:q+1},()=>Array(q).fill(!0)),ct=Array.from({length:q},()=>Array(q).fill(!1)),dt=[[0,3]];for(ct[0][3]=!0;dt.length;){let[J,lt]=dt[dt.length-1],z=[];if(J+1<q&&!ct[J+1][lt]&&z.push([J+1,lt]),J-1>=0&&!ct[J-1][lt]&&z.push([J-1,lt]),lt-1>=0&&!ct[J][lt-1]&&z.push([J,lt-1]),lt+1<q&&!ct[J][lt+1]&&z.push([J,lt+1]),!z.length){dt.pop();continue}let[Yt,Gt]=z[Math.floor(jt()*z.length)];Yt===J+1?it[J+1][lt]=!1:Yt===J-1?it[J][lt]=!1:Gt===lt-1?de[J][lt]=!1:de[J][lt+1]=!1,ct[Yt][Gt]=!0,dt.push([Yt,Gt])}it[0][3]=!1,it[q][3]=!1;let mt=["#3fae4a","#58c25c","#2f9a44"];for(let J=0;J<q;J++)for(let lt=0;lt<=q;lt++)de[J][lt]&&r.platform((lt-q/2)*Zt,yt,Wt-(J+.5)*Zt,et,Zt+et,{h:yt,color:mt[(J+lt)%3],pad:!1});for(let J=0;J<=q;J++)for(let lt=0;lt<q;lt++)it[J][lt]&&r.platform((lt+.5-q/2)*Zt,yt,Wt-J*Zt,Zt+et,et,{h:yt,color:mt[(J+lt+1)%3],pad:!1});let _t=new Map,$t=[[0,3]];for(_t.set("0,3",null);$t.length;){let[J,lt]=$t.shift(),z=[[J+1,lt,it[J+1][lt]],[J-1,lt,J>0?it[J][lt]:!0],[J,lt-1,de[J][lt]],[J,lt+1,de[J][lt+1]]];for(let[Yt,Gt,R]of z)!R&&Yt>=0&&Yt<q&&Gt>=0&&Gt<q&&!_t.has(Yt+","+Gt)&&(_t.set(Yt+","+Gt,[J,lt]),$t.push([Yt,Gt]))}let Xt=[];for(let J=[q-1,3];J;J=_t.get(J[0]+","+J[1]))Xt.unshift([(J[1]+.5-q/2)*Zt,Wt-(J[0]+.5)*Zt]);o.mazePath=Xt,r.checkpoint(0,0,Wt+2,16),a.z=Wt-q*Zt,a.y=.15,D()}else{h();for(let P=0;P<4;P++)l(2.8,12,{gap:3.3,x:P%2?2.6:-2.6});let M=l(18,12,{gap:3.3});c(M,3),g(6,3,4.4,2.2,1.9),M=l(16,10,{gap:2.2}),c(M,3),p(3,6.5,[1,-1.2,1.4],2.8,1.7),M=l(16,10,{gap:2.8}),c(M,3),M=r.conveyor(0,a.y,a.z-17,14,34,6),r.hammer(0,a.y+8.5,a.z-10,7,{amp:1.2,omega:1.7,phase:0,span:8,baseY:a.y,r:1.2}),r.hammer(0,a.y+8.5,a.z-24,7,{amp:1.2,omega:1.7,phase:2.2,span:8,baseY:a.y,r:1.2}),a.z-=34,M=l(16,10),c(M,3),M=A(18,38,3,0),c(M,3),d(18,2,6,6,5.5,4.4),M=l(14,8),c(M,3),x(20,2,6,6,3.4,4),M=l(14,10),c(M,3),r.disc(0,a.y,a.z-4,3,{bounce:24,color:s.hazard}),M=l(16,12,{gap:11.5,dy:5}),c(M,3),M=l(22,36),r.bar(M.x,M.top,M.near-18,22,{omega:1.25,arms:3,h:1.15}),D()}r.finalize();let U=o.finishPlat;return o.length=-o.finishZ,o.checkpoints=r.checkpoints,o.endZ=U.far,{world:r,info:o}}function Cd(){return{x:0,y:0,z:0,vx:0,vy:0,vz:0,yaw:Math.PI,grounded:!1,ground:null,coyote:0,jumpBuf:0,stun:0,dive:0,diveCd:0,noSnap:0,hitCd:0,boost:0,jumping:!1,noCtrl:0,landSpeed:0,inWater:!1,events:[],moveT:0,yawOff:0,swim:0,waterSurf:0}}var z_=(i,t)=>{let e=(t-i)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e};function ql(i,t,e,n){let s=t-i.vx,r=e-i.vz,a=Math.hypot(s,r);a<=n||a<1e-6?(i.vx=t,i.vz=e):(i.vx+=s/a*n,i.vz+=r/a*n)}function Id(i,t,e,n){t.coyote=t.grounded?.11:t.coyote-e,t.jumpBuf=n.jumpPressed?.13:t.jumpBuf-e,t.stun>0&&(t.stun=Math.max(0,t.stun-e)),t.dive>0&&(t.dive=Math.max(0,t.dive-e)),t.diveCd>0&&(t.diveCd-=e),t.noSnap>0&&(t.noSnap-=e),t.hitCd>0&&(t.hitCd-=e),t.boost>0&&(t.boost-=e),t.noCtrl>0&&(t.noCtrl-=e);let s=0,r=0;for(let u of i.pools)if(t.x>u.x0&&t.x<u.x1&&t.z>u.z0&&t.z<u.z1){let f=u.surf-t.y;f>.12&&(s=Math.min(1,f/.9),r=u.surf);break}s>.3&&t.swim<=.3&&(t.events.push("splash"),t.waterSurf=r),t.swim=s;let a=t.stun<=0&&t.dive<=0&&t.noCtrl<=0,o=t.ground&&t.ground.ice,l=Math.abs(n.mx)+Math.abs(n.mz)>.01;if(n.divePressed&&t.diveCd<=0&&t.stun<=0&&t.dive<=0){let u=Math.sin(t.yaw),f=Math.cos(t.yaw);t.vx=u*15.5,t.vz=f*15.5,t.vy=t.grounded?7:Math.max(t.vy,3.5),t.grounded=!1,t.ground=null,t.noSnap=.2,t.dive=.85,t.diveCd=1.1,t.events.push("dive")}if(a){let u=me.RUN*(t.boost>0?1.45:1)*(t.speedMul||1)*(1-.34*s);if(l){let f=t.grounded?o?me.ICE_ACC:me.ACC:me.AIR;ql(t,n.mx*u,n.mz*u,f*e);let d=Math.atan2(n.mx,n.mz);t.yaw+=z_(t.yaw,d)*(1-Math.exp(-20*e))}else t.grounded?ql(t,0,0,(o?me.ICE_DEC:me.DEC)*e):ql(t,0,0,me.AIR_DEC*e)}else{let u=t.grounded?o?1.2:9:.6;ql(t,0,0,u*e)}if(s>.4&&n.jumpPressed&&t.stun<=0?(t.vy=9,t.grounded=!1,t.ground=null,t.noSnap=.2,t.jumpBuf=0,t.events.push("stroke")):t.jumpBuf>0&&(t.grounded||t.coyote>0)&&t.stun<=0&&t.dive<=.45&&(t.vy=me.JUMP*(t.jumpMul||1),t.grounded=!1,t.ground=null,t.coyote=0,t.jumpBuf=0,t.noSnap=.2,t.jumping=!0,t.events.push("jump")),t.jumping&&!n.jumpHeld&&t.vy>6&&(t.vy-=55*e),t.vy=Math.max(me.TERM,t.vy-me.G*e*(t.dive>0&&!t.grounded?.8:1)*(1-.92*s)),s>.05){let u=r-(n.jumpHeld?.3:.95);t.vy+=(u-t.y)*26*e*s,t.vy*=Math.exp(-2.4*e*s)}for(let u of i.zones){let f=t.x-u.x,d=t.z-u.z;if(f*f+d*d<u.r*u.r&&t.y>u.y0-.3&&t.y<u.y1){let x=Math.max(0,(t.y-u.y0)/(u.y1-u.y0)),y=u.vmax*(1-x*x);t.vy<y&&(t.vy=Math.min(y,t.vy+u.lift*e)),t.noSnap=Math.max(t.noSnap,.12),t.air||(t.air=!0,t.events.push("air"))}else t.air=!1}if(t.grounded&&t.ground){let u=t.ground.conv;u&&(t.x+=u[0]*e,t.z+=u[1]*e),t.ground.boost&&(t.boost=.55)}let c=t.grounded,h=t.y;if(t.x+=t.vx*e,t.z+=t.vz*e,i.resolveHorizontal(t),i.resolveHorizontal(t),t.y+=t.vy*e,t.grounded=!1,t.ground=null,t.vy<=0){let u=i.findGround(t,h,c);if(u){let f=-t.vy;t.y=u.top,t.vy=0,t.grounded=!0,t.ground=u.s,t.jumping=!1,u.s.bounce?(t.vy=u.s.bounce,t.grounded=!1,t.ground=null,t.noSnap=.25,t.jumping=!1,u.s.push&&(t.vx=u.s.push[0],t.vz=u.s.push[1],t.noCtrl=.9),u.s.squash!==void 0&&(u.s.squash=1),t.events.push("bounce")):!c&&f>6&&(t.landSpeed=f,t.events.push("land"))}}else{let u=i.hitCeiling(t,h);u&&(t.y=u.y0-me.H,t.vy=Math.min(0,t.vy*.2))}return t.y<i.waterY-.2&&!t.inWater&&(t.inWater=!0,t.events.push("splash")),t.y<i.killY&&t.events.push("fell"),t}function Aa(i,t,e,n){return i.hitCd>0||i.shield>0?!1:(i.vx=t*n,i.vz=e*n,i.vy=Math.max(i.vy,6.5),i.grounded=!1,i.ground=null,i.noSnap=.25,i.stun=.95,i.dive=0,i.hitCd=.5,i.events.push("hit"),!0)}function Zl(i,t,e,n,s){i.x=t,i.y=e,i.z=n,i.vx=i.vy=i.vz=0,i.grounded=!1,i.ground=null,i.stun=0,i.dive=0,i.inWater=!1,i.hitCd=1,i.yaw=s!=null?s:Math.PI,i.noSnap=0,i.boost=0}var O_=(i,t,e)=>i<t?t:i>e?e:i,xn=(i,t={})=>{var e,n,s;return new ta({color:i,roughness:(e=t.r)!=null?e:.3,clearcoat:(n=t.cc)!=null?n:.65,clearcoatRoughness:.25,metalness:(s=t.m)!=null?s:0})},ke=(i,t=.55)=>new he({color:i,roughness:t}),Gh=(i,t,e)=>{let n=new nt(new Js(i,t,6,16),e);return n.castShadow=!0,n},hn=(i,t,e=16,n=12)=>{let s=new nt(new Ee(i,e,n),t);return s.castShadow=!0,s},Dd=ke("#ffffff",.25),Nd=ke("#101018",.4);function Vh(i,t,e,n,s,r=.55){for(let a of[-1,1]){let o=hn(s,Dd);o.position.set(a*n,t,e);let l=hn(s*r,Nd);l.position.set(0,0,s*.62),o.add(l),i.add(o)}}function Pd(i,t){let e=new Li;for(let n=0;n<10;n++){let s=-Math.PI/2+n*Math.PI/5,r=n%2?t:i,a=Math.cos(s)*r,o=Math.sin(s)*r;n?e.lineTo(a,o):e.moveTo(a,o)}return e.closePath(),e}var Ld=[{name:"Bubbles",pivotY:.85},{name:"Ninja",pivotY:.95},{name:"Dino",pivotY:.8},{name:"Robo",pivotY:.9}],ds=class{constructor(t){this.id=t,this.group=new ie,this.pivot=new ie,this.inner=new ie,this.group.add(this.pivot),this.pivot.add(this.inner),this.pivot.position.y=Ld[t].pivotY,this.inner.position.y=-Ld[t].pivotY,this.body=new ie,this.inner.add(this.body),this.t=Math.random()*10,this.phase=0,this.squash=0,this.tumble=0,this.lean=0,this.dive=0,this.wag=[],this.height=1.7,[this.buildBubbles,this.buildNinja,this.buildDino,this.buildRobo][t].call(this),this.makeBat(),this.makeExtras(),this.group.traverse(e=>{e.isMesh&&(e.castShadow=!0)})}limbs(t,e,n,s,r,a,o,l,c,h,u,f){let d=(x,y,p,m,S,A)=>{let g=new ie;g.position.set(x,y,0);let E=Gh(p,m,S);if(E.position.y=-m/2-p*.6,g.add(E),A){let b=A();g.add(b)}return this.inner.add(g),g};this.legL=d(-t,e,n,s,r,f?()=>{let x=hn(n*1.35,f);return x.scale.set(1,.6,1.5),x.position.set(0,-s-n*.55,n*.7),x}:null),this.legR=d(t,e,n,s,r,f?()=>{let x=hn(n*1.35,f);return x.scale.set(1,.6,1.5),x.position.set(0,-s-n*.55,n*.7),x}:null),this.armL=d(-a,o,l,c,h,u?()=>{let x=hn(l*1.45,u);return x.position.y=-c-l*.9,x}:null),this.armR=d(a,o,l,c,h,u?()=>{let x=hn(l*1.45,u);return x.position.y=-c-l*.9,x}:null),this.handY=-c-l*.9}makeExtras(){let t=this.height,e=new nt(new Ee(t*.64,22,14),new be({color:"#7fd8ff",transparent:!0,opacity:.3,depthWrite:!1}));e.position.y=t*.52,e.visible=!1,this.group.add(e),this.shield=e;let n=xn("#ffd23f",{m:.6,r:.25}),s=new ie,r=new nt(new Nt(.2,.17,.12,5),n);s.add(r);for(let a=0;a<5;a++){let o=a/5*Math.PI*2,l=new nt(new Ge(.06,.2,6),n);l.position.set(Math.cos(o)*.17,.15,Math.sin(o)*.17),s.add(l)}s.position.y=t+.22,s.scale.setScalar(1.15),s.visible=!1,this.group.add(s),this.leadCrown=s}makeBat(){let t=xn("#d9a15a",{r:.45,cc:.3}),e=ke("#3a2412",.7),n=ke("#ff3b3b",.5),s=new ie,r=new nt(new Nt(.035,.045,.5,10),e);r.position.y=-.18,s.add(r);let a=new nt(new Nt(.05,.125,.8,14),t);a.position.y=-.7,s.add(a);let o=new nt(new Ee(.125,12,8),t);o.scale.y=.5,o.position.y=-1.1,s.add(o);let l=new nt(new Me(.075,.018,6,16),n);l.rotation.x=Math.PI/2,l.position.y=-.52,s.add(l);let c=new nt(new Ee(.06,8,6),e);c.position.y=.07,s.add(c),s.position.set(0,this.handY,.02),s.visible=!1,s.traverse(h=>{h.isMesh&&(h.castShadow=!0)}),this.armR.add(s),this.bat=s}buildBubbles(){let t=xn("#ff5fb4"),e=xn("#d63a8d"),n=Gh(.47,.34,t);n.position.y=.3+.64,this.body.add(n),this.limbs(.2,.42,.13,.12,t,.5,.95,.11,.22,t,ke("#ffffff",.3),ke("#7a2cff",.4)),Vh(this.body,1.2,.4,.17,.13);for(let o of[-1,1]){let l=hn(.07,ke("#ff8fcf"));l.scale.set(1.4,.8,.5),l.position.set(o*.3,1.04,.4),this.body.add(l)}let s=new nt(new Di(Pd(.17,.075),{depth:.04,bevelEnabled:!1}),xn("#ffd23f",{m:.3}));s.position.set(0,.8,.455),this.body.add(s);let r=new ie;r.position.set(0,1.55,.02);let a=new nt(new Nt(.27,.3,.16,20),xn("#ffd23f",{m:.55,r:.2}));r.add(a);for(let o=0;o<5;o++){let l=o/5*Math.PI*2,c=new nt(new Ge(.065,.22,8),xn("#ffd23f",{m:.55,r:.2}));c.position.set(Math.cos(l)*.23,.18,Math.sin(l)*.23),r.add(c);let h=hn(.04,ke(o%2?"#35e0ff":"#ff3b6b",.2));h.position.set(Math.cos(l)*.23,.3,Math.sin(l)*.23),r.add(h)}this.body.add(r),this.crown=r,this.height=1.95}buildNinja(){let t=xn("#2f6bff"),e=xn("#14224f",{cc:.3}),n=Gh(.36,.76,t);n.position.y=.34+.74,this.body.add(n),this.limbs(.15,.55,.11,.3,e,.42,1.28,.09,.3,t,ke("#14224f"),ke("#0a0a14"));let s=new nt(new Nt(.372,.372,.22,24,1,!0),ke("#0b0b17",.5));s.position.y=1.5,this.body.add(s);let r=new nt(new Ee(.372,24,8,0,Math.PI*2,0,Math.PI/2),ke("#0b0b17",.5));r.scale.set(1,.96,1),r.position.y=1.46,this.body.add(r),Vh(this.body,1.5,.3,.14,.1,.65);let a=new nt(new Me(.31,.05,8,28),ke("#ff2b4a",.4));a.rotation.x=Math.PI/2,a.position.y=1.64,this.body.add(a),this.tails=[];for(let h=0;h<2;h++){let u=new ie;u.position.set(h?.06:-.06,1.64,-.3);let f=new nt(new Ae(.1,.05,.6),ke("#ff2b4a",.4));f.position.z=-.3,u.add(f),this.body.add(u),this.tails.push(u)}let o=new nt(new Me(.37,.05,8,28),ke("#ffd23f",.4));o.rotation.x=Math.PI/2,o.position.y=.95,this.body.add(o);let l=new nt(new Me(.31,.07,8,24),ke("#ffffff",.5));l.rotation.x=Math.PI/2,l.position.y=1.28,this.body.add(l);let c=new nt(new Di(Pd(.13,.04),{depth:.03,bevelEnabled:!1}),xn("#d8e2ff",{m:.8,r:.2}));c.scale.set(1,1,1),c.position.set(0,.7,.34),this.body.add(c),this.height=1.95}buildDino(){let t=xn("#3ddc84"),e=xn("#c8ffd9"),n=xn("#ff9f1c"),s=hn(.58,t,28,20);s.scale.set(1,1.08,.98),s.position.y=.3+.62,this.body.add(s);let r=hn(.45,e,22,16);r.scale.set(.85,.95,.5),r.position.set(0,.85,.36),this.body.add(r),this.limbs(.24,.42,.15,.1,t,.52,.85,.09,.12,t,null,ke("#1f9d5b"));for(let c of[this.legL,this.legR])for(let h=-1;h<=1;h++){let u=new nt(new Ge(.035,.12,6),Dd);u.rotation.x=Math.PI/2,u.position.set(h*.07,-.22,.36),c.add(u)}let a=hn(.3,t,18,12);a.scale.set(1,.7,.9),a.position.set(0,1,.5),this.body.add(a);for(let c of[-1,1]){let h=hn(.03,Nd,8,6);h.position.set(c*.08,1.08,.76),this.body.add(h)}Vh(this.body,1.42,.34,.22,.17,.5);for(let c of[-1,1]){let h=new nt(new Ge(.06,.2,8),ke("#fff1c2",.4));h.position.set(c*.2,1.68,.18),h.rotation.z=-c*.25,this.body.add(h)}[.62,.8,1,1.2,1.38].forEach((c,h)=>{let u=[.13,.18,.21,.18,.13][h],f=new nt(new Ge(u*.75,u*2,8),n),d=-Math.sqrt(Math.max(.02,.58*.58-(c-.92)*(c-.92)/1.17))-.02;f.position.set(0,c,d),f.rotation.x=-(1.15-h*.2),this.body.add(f)}),this.tail=new ie,this.tail.position.set(0,.55,-.45);let o=new nt(new Ge(.22,.9,12),t);o.rotation.x=-Math.PI/2-.4,o.position.set(0,0,-.4),this.tail.add(o);let l=hn(.07,n);l.position.set(0,-.2,-.78),this.tail.add(l),this.body.add(this.tail),this.height=1.85}buildRobo(){let t=xn("#ffc233"),e=xn("#b4bdcc",{m:.7,r:.25}),n=ke("#1c2233",.4),s=new be({color:"#4ff3ff"}),r=new nt(new Js(.46,.4,6,16),t);r.scale.set(1,1,.92),r.position.y=.98,r.castShadow=!0,this.body.add(r);let a=new nt(new Ae(.64,.3,.12),n);a.position.set(0,1.28,.4),a.rotation.x=-.12,this.body.add(a);for(let u of[-1,1]){let f=hn(.075,s,10,8);f.scale.set(1,1.15,.5),f.position.set(u*.16,1.29,.47),this.body.add(f)}let o=new nt(new Ae(.26,.05,.05),n);o.position.set(0,1.03,.45),this.body.add(o);let l=new nt(new Ae(.34,.24,.06),e);l.position.set(0,.76,.43),l.rotation.x=-.05,this.body.add(l);for(let[u,f]of[[-.1,.82],[.1,.82],[-.1,.7],[.1,.7]]){let d=hn(.025,n,6,4);d.position.set(u,f,.47),this.body.add(d)}for(let u of[-1,1]){let f=new nt(new Nt(.1,.1,.16,12),e);f.rotation.z=Math.PI/2,f.position.set(u*.5,1.28,0),f.castShadow=!0,this.body.add(f)}let c=new nt(new Nt(.025,.025,.3,8),e);c.position.set(0,1.78,0),this.body.add(c);let h=hn(.075,ke("#ff3b3b",.3),12,8);h.position.set(0,1.97,0),this.body.add(h),this.limbs(.2,.45,.12,.14,e,.52,.98,.1,.22,e,ke("#ff4d4d",.4),ke("#2b3347",.4)),this.height=2}update(t,e){this.t+=t;let n=O_(e.speed/10.5,0,1.3);e.grounded&&!e.stun&&(this.phase+=t*(5+n*11));let s=Math.sin(this.phase),r=n*.95;if(e.stun>0)this.tumble+=t*11,this.pivot.rotation.x=this.tumble,this.pivot.rotation.z=Math.sin(this.tumble*.5)*.4,this.legL.rotation.x=Math.sin(this.t*16)*1,this.legR.rotation.x=-Math.sin(this.t*16)*1,this.armL.rotation.z=-1.5+Math.sin(this.t*18)*.5,this.armR.rotation.z=1.5-Math.sin(this.t*18)*.5,this.armL.rotation.x=this.armR.rotation.x=0;else{let l=Math.round(this.tumble/(Math.PI*2))*Math.PI*2;this.tumble+=(l-this.tumble)*Math.min(1,t*14),this.pivot.rotation.z*=Math.max(0,1-t*12);let c=e.dive>0?1:0;this.dive+=(c-this.dive)*Math.min(1,t*16);let h=(e.grounded?n*.2:.05)+this.dive*1.35;if(this.lean+=(h-this.lean)*Math.min(1,t*14),this.pivot.rotation.x=this.tumble+this.lean,e.celebrate){let u=Math.abs(Math.sin(this.t*6))*.35;this.body.position.y=u,this.armL.rotation.z=-2.6+Math.sin(this.t*14)*.3,this.armR.rotation.z=2.6-Math.sin(this.t*14)*.3,this.armL.rotation.x=this.armR.rotation.x=0,this.legL.rotation.x=this.legR.rotation.x=0}else if(this.dive>.3)this.armL.rotation.x=this.armR.rotation.x=-2.9,this.armL.rotation.z=-.15,this.armR.rotation.z=.15,this.legL.rotation.x=this.legR.rotation.x=.2;else if(e.grounded){this.legL.rotation.x=s*r,this.legR.rotation.x=-s*r,this.armL.rotation.x=-s*r*.9,this.armR.rotation.x=s*r*.9;let u=Math.sin(this.t*2.2)*.04;this.armL.rotation.z=-.15-u-n*.2,this.armR.rotation.z=.15+u+n*.2}else{let u=e.vy>0;this.legL.rotation.x=u?.7:.35,this.legR.rotation.x=u?-.5:-.2,this.armL.rotation.z=-2.2,this.armR.rotation.z=2.2,this.armL.rotation.x=this.armR.rotation.x=0}e.celebrate||(this.body.position.y=e.grounded?Math.abs(s)*.07*n:0)}if(this.shield.visible=!!e.shield,e.shield){let l=1+Math.sin(this.t*8)*.04;this.shield.scale.set(l,l,l)}if(this.leadCrown.visible=!!e.leader,e.leader&&(this.leadCrown.rotation.y+=t*2.2,this.leadCrown.position.y=this.height+.22+Math.sin(this.t*3)*.05),this.bat.scale.setScalar(e.mega?1.6:1),e.swing>0&&!e.stun){let l=e.swing,c;if(l<.3)c=-2.95*(l/.3);else{let h=(l-.3)/.7;c=-2.95+2.75*(1-(1-h)*(1-h))}this.armR.rotation.x=c,this.armR.rotation.z=.12,this.pivot.rotation.x=this.tumble+this.lean+(l>.3?.28*Math.sin(Math.min(1,(l-.3)/.35)*Math.PI):0),this.bat.visible=!0}else this.bat.visible=!1;e.landed&&(this.squash=1),this.squash=Math.max(0,this.squash-t*5);let a=1-Math.sin(this.squash*Math.PI)*.22*this.squash;!e.grounded&&e.vy>2&&!e.stun&&(a=1.1),!e.grounded&&e.vy<-8&&(a=1.06);let o=1+(1-a)*.55;this.body.scale.set(o,a,o),this.tails&&this.tails.forEach((l,c)=>{l.rotation.x=-.15-n*.5+Math.sin(this.t*9+c)*.12*(.4+n),l.rotation.y=(c?1:-1)*(.15+Math.sin(this.t*7+c*2)*.12)}),this.tail&&(this.tail.rotation.y=Math.sin(this.t*(6+n*6))*(.35+n*.25)),this.crown&&(this.crown.rotation.z=Math.sin(this.t*5)*.05*n)}dispose(){this.group.traverse(t=>{if(t.isMesh){t.geometry.dispose();let e=t.material;(Array.isArray(e)?e:[e]).forEach(n=>n.dispose())}})}};function $l(i,t="#ffffff"){let e=document.createElement("canvas");e.width=512,e.height=128;let n=e.getContext("2d");n.font='700 64px "Lilita One","Fredoka","Baloo 2","Trebuchet MS",Arial,sans-serif',n.textAlign="center",n.textBaseline="middle";let s=Math.min(480,n.measureText(i).width+56);n.fillStyle="rgba(12,10,36,0.72)";let r=(512-s)/2,a=14,o=100,l=50;n.beginPath(),n.moveTo(r+l,a),n.arcTo(r+s,a,r+s,a+o,l),n.arcTo(r+s,a+o,r,a+o,l),n.arcTo(r,a+o,r,a,l),n.arcTo(r,a,r+s,a,l),n.closePath(),n.fill(),n.lineWidth=6,n.strokeStyle=t,n.stroke(),n.lineWidth=8,n.strokeStyle="rgba(0,0,0,0.65)",n.strokeText(i,256,68,440),n.fillStyle="#ffffff",n.fillText(i,256,68,440);let c=new gn(e);c.colorSpace=Ce,c.anisotropy=4;let h=new kr(new qs({map:c,transparent:!0,depthTest:!1,depthWrite:!1,fog:!1}));return h.renderOrder=999,h.scale.set(2.8,.7,1),h.userData.base=.7,h}var Ia={candy:{top:"#3fb0ff",horizon:"#ffd6ee",bottom:"#ffe9f6",fog:"#ffd9ef",fogNear:90,fogFar:520,sun:"#fff1cf",sunPos:[-60,90,-40],sunI:2.5,hemiSky:"#d6eeff",hemiGround:"#ffc2e6",hemiI:1,exp:1.05,waterA:"#2ec8ff",waterB:"#168ae0",water:"water",env:.55},canyon:{top:"#47207a",horizon:"#ff9a52",bottom:"#ffcf8a",fog:"#ffa769",fogNear:80,fogFar:460,sun:"#ffb06b",sunPos:[80,45,-70],sunI:2.7,hemiSky:"#ffd0a6",hemiGround:"#a8402f",hemiI:.9,exp:1,waterA:"#ff4a12",waterB:"#ffc21a",water:"lava",env:.45},frost:{top:"#4aa6ff",horizon:"#e4f4ff",bottom:"#ffffff",fog:"#d8ecff",fogNear:80,fogFar:480,sun:"#fff6ea",sunPos:[50,80,-40],sunI:2.4,hemiSky:"#dff1ff",hemiGround:"#9fc9ee",hemiI:1.1,exp:1.08,waterA:"#2a8fd6",waterB:"#0b4d8c",water:"water",env:.65},fair:{top:"#2f8bff",horizon:"#fff0c2",bottom:"#ffe9b0",fog:"#ffe6bd",fogNear:90,fogFar:520,sun:"#fff0cf",sunPos:[-50,85,-50],sunI:2.6,hemiSky:"#cfe6ff",hemiGround:"#ffd9a0",hemiI:1,exp:1.05,waterA:"#2fe0c8",waterB:"#0e8fb0",water:"water",env:.55},fun:{top:"#35a7ff",horizon:"#e8fbff",bottom:"#fff6d8",fog:"#d9f4ff",fogNear:120,fogFar:640,sun:"#fff4d6",sunPos:[-40,90,-60],sunI:2.7,hemiSky:"#d4ecff",hemiGround:"#bfe8a0",hemiI:1.05,exp:1.05,waterA:"#37d7e8",waterB:"#1388c9",water:"water",env:.6},neon:{top:"#04010d",horizon:"#3b0c70",bottom:"#12033a",fog:"#1d0750",fogNear:60,fogFar:380,sun:"#a58bff",sunPos:[-40,70,-30],sunI:1.5,hemiSky:"#6c4cff",hemiGround:"#1a0a3a",hemiI:.95,exp:1.15,waterA:"#2b0b5e",waterB:"#d11cff",water:"grid",env:.5}},Wh=null;function Ud(){return Wh||(Wh=(async()=>{try{await Promise.race([Promise.all([document.fonts.load('400 100px "Lilita One"'),document.fonts.load('400 100px "Fredoka One"'),document.fonts.load('400 100px "Noto Nastaliq Urdu"',"\u0639\u06A9\u0631\u0645\u06C1")]),new Promise(i=>setTimeout(i,2500))])}catch{}})()),Wh}var Jl='"Lilita One","Fredoka One","Baloo 2","Arial Rounded MT Bold","Trebuchet MS",Impact,Arial,sans-serif';function Kl(i="HARIS",t=null,e=["#fff7a8","#ffc83d","#ff7a1a"]){let n=document.createElement("canvas");n.width=1024,n.height=t?512:400;let s=n.getContext("2d");s.textAlign="center",s.textBaseline="middle";let r=300;for(s.font=`${r}px ${Jl}`;s.measureText(i).width>900&&r>80;)r-=10,s.font=`${r}px ${Jl}`;let a=t?220:200;s.lineJoin="round",s.shadowColor="rgba(255,190,60,0.9)",s.shadowBlur=40,s.lineWidth=46,s.strokeStyle="rgba(255,170,40,0.35)",s.strokeText(i,512,a),s.shadowBlur=0,s.lineWidth=40,s.strokeStyle="#1b0f4a",s.strokeText(i,512,a),s.lineWidth=18,s.strokeStyle="#ffffff",s.strokeText(i,512,a),s.fillStyle="#b0420b";for(let c=14;c>0;c-=2)s.fillText(i,512,a+c);let o=s.createLinearGradient(0,a-r/2,0,a+r/2);o.addColorStop(0,e[0]),o.addColorStop(.55,e[1]),o.addColorStop(1,e[2]),s.fillStyle=o,s.fillText(i,512,a),s.globalCompositeOperation="source-atop",s.fillStyle="rgba(255,255,255,0.35)",s.fillRect(0,a-r/2,1024,r*.18),s.globalCompositeOperation="source-over",t&&(s.font=`90px ${Jl}`,s.lineWidth=16,s.strokeStyle="#1b0f4a",s.strokeText(t,512,440),s.fillStyle="#ffffff",s.fillText(t,512,440));let l=new gn(n);return l.colorSpace=Ce,l.anisotropy=8,l}function B_(i,t="#ff3b6b",e="#ffffff"){let n=document.createElement("canvas");n.width=1024,n.height=256;let s=n.getContext("2d");s.fillStyle=t,s.fillRect(0,0,1024,256);let r=32;s.fillStyle=e;for(let o=0;o<1024;o+=r)for(let l=0;l<256;l+=r)(o+l)/r%2===0&&(l<r||l>=256-r)&&s.fillRect(o,l,r,r);s.font=`150px ${Jl}`,s.textAlign="center",s.textBaseline="middle",s.lineJoin="round",s.lineWidth=26,s.strokeStyle="#1b0f4a",s.strokeText(i,512,132),s.fillStyle="#fff",s.fillText(i,512,132);let a=new gn(n);return a.colorSpace=Ce,a.anisotropy=8,a}function Fd(){let i=document.createElement("canvas");i.width=128,i.height=128;let t=i.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,128,128),t.fillStyle="rgba(0,0,0,0.28)",t.beginPath(),t.moveTo(64,14),t.lineTo(108,70),t.lineTo(80,70),t.lineTo(80,112),t.lineTo(48,112),t.lineTo(48,70),t.lineTo(20,70),t.closePath(),t.fill();let e=new gn(i);return e.colorSpace=Ce,e.anisotropy=4,e}function k_(i="rgba(255,255,255,1)",t="rgba(255,255,255,0)"){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d"),s=n.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,i),s.addColorStop(1,t),n.fillStyle=s,n.fillRect(0,0,128,128);let r=new gn(e);return r.colorSpace=Ce,r}function Xh(i){let t=new B(...i.sunPos).normalize(),e=new qe({side:Je,depthWrite:!1,fog:!1,uniforms:{top:{value:new Dt(i.top)},horizon:{value:new Dt(i.horizon)},bottom:{value:new Dt(i.bottom)},sunDir:{value:t},sunColor:{value:new Dt(i.sun)}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); gl_Position.z = gl_Position.w; }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom; uniform vec3 sunDir; uniform vec3 sunColor; varying vec3 vD;
      void main(){ float h = vD.y; vec3 c = h>0.0 ? mix(horizon, top, pow(h, 0.55)) : mix(horizon, bottom, pow(-h, 0.45));
        float s = max(dot(normalize(vD), sunDir), 0.0); c += sunColor * (pow(s, 600.0)*3.0 + pow(s, 24.0)*0.35 + pow(s, 6.0)*0.12);
        gl_FragColor = vec4(c, 1.0); }`}),n=new nt(new Ee(900,32,16),e);return n.frustumCulled=!1,n.renderOrder=-10,n}function Yh(i,t){let e=new Dt(i.fog),n=i.water==="lava"?1:i.water==="grid"?2:0,s=new qe({uniforms:{time:{value:0},cA:{value:new Dt(i.waterA)},cB:{value:new Dt(i.waterB)},fogC:{value:e},fogN:{value:i.fogNear},fogF:{value:i.fogFar},kind:{value:n}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform float time; uniform vec3 cA; uniform vec3 cB; uniform vec3 fogC; uniform float fogN; uniform float fogF; uniform float kind; varying vec3 vW;
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
      }`}),r=new nt(new Be(1600,1600),s);return r.rotation.x=-Math.PI/2,r.position.y=t,r.frustumCulled=!1,r.renderOrder=-5,r.userData.mat=s,r}var Ra=class{constructor(t=500){this.max=t,this.n=0,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*3),this.size=new Float32Array(t),this.alpha=new Float32Array(t),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.grav=new Float32Array(t),this.s0=new Float32Array(t);let e=new Pe;e.setAttribute("position",new Ie(this.pos,3).setUsage(ar)),e.setAttribute("color",new Ie(this.col,3).setUsage(ar)),e.setAttribute("size",new Ie(this.size,1).setUsage(ar)),e.setAttribute("alpha",new Ie(this.alpha,1).setUsage(ar)),e.setDrawRange(0,0),this.mat=new qe({transparent:!0,depthWrite:!1,uniforms:{scale:{value:600}},vertexShader:"attribute float size; attribute float alpha; attribute vec3 color; varying float vA; varying vec3 vC; uniform float scale; void main(){ vA=alpha; vC=color; vec4 mv = modelViewMatrix*vec4(position,1.0); gl_PointSize = size*scale/max(1.0,-mv.z); gl_Position = projectionMatrix*mv; }",fragmentShader:"varying float vA; varying vec3 vC; void main(){ vec2 c = gl_PointCoord-0.5; float d = length(c); if(d>0.5) discard; gl_FragColor = vec4(vC, vA*smoothstep(0.5,0.1,d)); }"}),this.points=new ns(e,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,this.geo=e,this._c=new Dt}emit(t,e,n,s,r={}){var o,l,c,h,u,f,d,x;let a=this._c.set((o=r.color)!=null?o:"#ffffff");for(let y=0;y<s;y++){let p=this.n<this.max?this.n++:Math.floor(Math.random()*this.max),m=Math.random()*Math.PI*2,S=((l=r.speed)!=null?l:3)*(.3+Math.random()*.9),A=(c=r.up)!=null?c:3,g=p*3;this.pos[g]=t+(Math.random()-.5)*((h=r.spread)!=null?h:.3),this.pos[g+1]=e,this.pos[g+2]=n+(Math.random()-.5)*((u=r.spread)!=null?u:.3),this.vel[g]=Math.cos(m)*S,this.vel[g+1]=A*(.4+Math.random()*.9),this.vel[g+2]=Math.sin(m)*S;let E=r.rainbow?this._c.setHSL(Math.random(),.9,.6):a;this.col[g]=E.r,this.col[g+1]=E.g,this.col[g+2]=E.b,this.life[p]=this.maxLife[p]=((f=r.life)!=null?f:.6)*(.6+Math.random()*.8),this.s0[p]=((d=r.size)!=null?d:.35)*(.6+Math.random()*.8),this.size[p]=this.s0[p],this.grav[p]=(x=r.gravity)!=null?x:9,this.alpha[p]=1}}update(t){for(let e=0;e<this.n;e++){if(this.life[e]<=0){this.alpha[e]=0,this.size[e]=0;continue}this.life[e]-=t;let n=e*3;this.vel[n+1]-=this.grav[e]*t,this.pos[n]+=this.vel[n]*t,this.pos[n+1]+=this.vel[n+1]*t,this.pos[n+2]+=this.vel[n+2]*t;let s=Math.max(0,this.life[e]/this.maxLife[e]);this.alpha[e]=Math.min(1,s*1.6),this.size[e]=this.s0[e]*(.4+.6*s)}this.geo.setDrawRange(0,this.n),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,this.geo.attributes.size.needsUpdate=!0,this.geo.attributes.alpha.needsUpdate=!0}setScale(t){this.mat.uniforms.scale.value=t*.9}},Ca=class{constructor(t,e=350){this.kind=t,this.n=e;let n=new Float32Array(e*3);this.seed=new Float32Array(e*3);for(let a=0;a<e*3;a++)this.seed[a]=Math.random();let s=new Pe;s.setAttribute("position",new Ie(n,3));let r={frost:"#ffffff",canyon:"#ffb347",candy:"#fff6a8",neon:"#7cf9ff",fair:"#ffd6f0",fun:"#fff6a8"};this.mat=new es({color:r[t]||"#fff",size:t==="frost"?.28:.22,transparent:!0,opacity:.85,depthWrite:!1,map:k_(),blending:t==="neon"||t==="canyon"?gi:Oi}),this.points=new ns(s,this.mat),this.points.frustumCulled=!1,this.pos=n}update(t,e){let r=this.kind,a=this.pos,o=this.seed;for(let l=0;l<this.n;l++){let c=l*3,h=o[c]*70,u=o[c+1]*36,f=o[c+2]*70;r==="frost"?(u=36-(t*(2+o[c]*2)+o[c+1]*36)%36,h+=Math.sin(t*.7+l)*1.2):r==="canyon"?(u=(t*(1.5+o[c]*2)+o[c+1]*36)%36,h+=Math.sin(t*.9+l)*.8):(u+=Math.sin(t*.6+l)*.8,h+=Math.cos(t*.4+l*1.3)*.8),a[c]=e.x+((h-e.x)%70+70)%70-70/2,a[c+1]=e.y-36/2+u,a[c+2]=e.z+((f-e.z)%70+70)%70-70/2}this.points.geometry.attributes.position.needsUpdate=!0}};function H_(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function zd(i,t,e,n){let s=Ia[t],r=new ie;r.name="scenery";let a=H_(t.length*9973+17),o=new vi,l=new vi,c=e.length,h=-c-40,u=t==="fun"?0:n.waterY,f=t==="fun"?82:0,d=[],x=(M,P)=>(a()<.5?-1:1)*(M+f+a()*(P-M)),y=M=>M[Math.floor(a()*M.length)],p=(M,P=16,I=10)=>new Ee(M,P,I),m=(M,P,I,C=14)=>new Nt(M,P,I,C),S=(M,P,I=14)=>new Ge(M,P,I),A={candy:["#ff9bd0","#7be8c8","#ffd479","#b9a4ff"],canyon:["#d9743b","#e8a15a","#b9472f"],frost:["#e5f4ff","#a8d8ff","#ffffff"],neon:["#2d1c78","#4a1a86","#1f2f8a"],fair:["#8bd450","#ffd23f","#ff9bd0","#7be8ff"],fun:["#8bd450","#ffd23f","#ff9bd0","#7be8ff"]}[t];for(let M=0;M<26;M++){let P=60-a()*(c+160),I=x(38,150),C=-4+a()*40,N=5+a()*14,F=y(A);o.add(m(N,N*.9,N*.25,20),I,C,P,F),o.add(S(N*.9,N*1.3,20),I,C-N*.25/2-N*.65,P,t==="frost"?"#9fc8ee":t==="neon"?"#241a60":"#8a5a3a",Math.PI),t==="neon"&&l.add(new Me(N,.18,6,32),I,C+N*.13,P,y(["#22f2ff","#ff2bd6"]),Math.PI/2)}if(t==="candy"){for(let P=0;P<70;P++){let I=70-a()*(c+200),C=x(26,130),N=1+a()*2.2,F=a(),k=u-1;if(F<.35){let O=y(["#ff5fa8","#ffb347","#8f7bff","#3fd6c2","#ffd84d"]);o.add(m(.45*N,.45*N,12*N,8),C,k+6*N,I,"#fff3f8"),o.add(p(3.4*N,20,14),C,k+13.5*N,I,O,0,0,0,1,1,.45),o.add(new Me(2.2*N,.35*N,8,24),C,k+13.5*N,I+1.45*N,"#ffffff"),o.add(new Me(1.1*N,.3*N,8,20),C,k+13.5*N,I+1.5*N,"#ffffff")}else F<.65?(o.add(p(4*N,18,12),C,k,I,y(["#ff6b9e","#6be8c4","#ffd24d","#a58bff"]),0,0,0,1,.85,1),o.add(m(.9*N,1.3*N,.6*N,10),C,k+3.2*N,I,"#ffffff")):F<.85?(o.add(m(2.8*N,2*N,3.2*N,14),C,k+1.6*N,I,y(["#ffd29b","#c9a0ff","#8be0ff"])),o.add(p(3.1*N,16,10),C,k+4*N,I,"#ff9ccb",0,0,0,1,.8,1),o.add(p(.7*N,10,8),C,k+6.1*N,I,"#ff2d55")):(o.add(new Me(4.2*N,1.9*N,12,28),C,k+2*N,I,"#ffbd6b",Math.PI/2-.4),o.add(new Me(4.2*N,1.9*N,12,28),C,k+2.5*N,I,y(["#ff7ab8","#7be8ff"]),Math.PI/2-.4,0,0,1.03,1.03,.6))}let M=["#ff3b3b","#ff9a3b","#ffe03b","#4ddc6a","#3bb0ff","#9b6bff"];[-.12,-.5,-.88].forEach(P=>M.forEach((I,C)=>o.add(new Me(46-C*1.6,.9,6,48,Math.PI),0,u-2,P*c-8,I,0,0,0,1,1.4,1)));for(let P=0;P<22;P++){let I=new ie,C=y(["#ff5fa8","#ffd84d","#4dd0ff","#9b7bff","#5ee89a"]),N=new nt(p(1.6,16,12),new he({color:C,roughness:.25}));N.scale.y=1.2;let F=new nt(S(.25,.4,8),new he({color:C}));F.position.y=-1.9,F.rotation.x=Math.PI;let k=new nt(m(.03,.03,4,4),new be({color:"#ffffff"}));k.position.y=-4,I.add(N,F,k),I.position.set(x(14,70),8+a()*30,40-a()*(c+120)),I.userData.ph=a()*6,r.add(I),d.push(O=>{I.position.y+=Math.sin(O*.8+I.userData.ph)*.004,I.rotation.z=Math.sin(O*.6+I.userData.ph)*.08})}}else if(t==="canyon"){for(let M=0;M<60;M++){let P=70-a()*(c+200),I=x(28,150),C=1+a()*2.4,N=a(),F=u-2;if(N<.55){let k=3+Math.floor(a()*3);for(let O=0;O<k;O++)o.add(m(5*C-O*.35*C,5.3*C-O*.3*C,4*C,12),I,F+2*C+O*4*C,P,["#b8452f","#d9743b","#e8a15a","#c4503d","#f0b46a"][(O+M)%5])}else N<.85?o.add(S(2.4*C,16*C,7),I,F+8*C,P,y(["#9c3f2c","#c4573a","#7a2f3d"])):o.add(new Me(6*C,2*C,8,20,Math.PI),I,F,P,"#d2693b",0,a()*3)}l.add(p(34,24,16),120,52,-c-140,"#ffd27a"),l.add(p(34,24,16),-150,40,-60,"#ffb35e")}else if(t==="frost")for(let M=0;M<80;M++){let P=70-a()*(c+200),I=x(26,150),C=1+a()*2.2,N=a(),F=u-2;if(N<.3)o.add(S(14*C,30*C,8),I,F+15*C,P,"#bcd8f2"),o.add(S(6.5*C,12*C,8),I,F+24*C,P,"#ffffff");else if(N<.8){for(let k=0;k<4;k++)o.add(S(3.4*C-k*.65*C,4.4*C,9),I,F+(3+k*2.6)*C,P,k%2?"#2f7d6f":"#3a9684"),o.add(S(2.4*C-k*.5*C,2*C,9),I,F+(4.4+k*2.6)*C,P,"#ffffff");o.add(m(.5*C,.6*C,3*C,6),I,F+1.4*C,P,"#6b4a34")}else l.add(new Qs(3*C,0),I,F+5*C+a()*10,P,"#bfe8ff",0,a()*3,0,.7,1.8,.7)}else if(t==="fair"||t==="fun"){for(let M=0;M<46;M++){let P=70-a()*(c+200),I=x(26,140),C=1+a()*1.8,N=a(),F=u-1;if(N<.4){let k=y(["#ff4d6d","#3ec6e0","#ffd23f","#8b5cf6"]);o.add(m(6*C,6*C,5*C,16),I,F+2.5*C,P,k),o.add(S(6.8*C,5*C,16),I,F+7.5*C,P,"#ffffff"),o.add(S(1.1*C,3*C,8),I,F+11*C,P,k),o.add(m(.12*C,.12*C,4*C,4),I,F+14*C,P,"#ffffff")}else if(N<.7){for(let k=0;k<8;k++)o.add(m(2.2*C,2.2*C,2.4*C,12),I,F+(1.2+k*2.4)*C,P,k%2?"#ffffff":"#ff4d6d");o.add(S(3*C,4*C,12),I,F+21*C,P,"#ffd23f")}else o.add(m(.3*C,.4*C,9*C,6),I,F+4.5*C,P,"#5b2a86"),l.add(p(1.1*C,10,8),I,F+9.6*C,P,y(["#ffe27a","#ff9ccb","#9cf0ff"]))}[[-120,-c*.25],[140,-c*.62],[-130,-c*.9]].forEach(([M,P],I)=>{let C=new ie;C.position.set(M,u+34,P),C.rotation.y=I%2?.5:-.5;let N=new nt(new Me(30,.9,8,48),new he({color:"#ffffff",roughness:.4}));C.add(N);let F=new he({color:"#ff4d6d"});for(let Y=0;Y<8;Y++){let X=new nt(m(.35,.35,60,5),F);X.rotation.z=Y*Math.PI/8,C.add(X)}let k=[];for(let Y=0;Y<12;Y++){let X=Y/12*Math.PI*2,at=new nt(new Ae(4.4,3.4,3.4),new he({color:y(["#ffd23f","#3ec6e0","#ff4d6d","#8bd450"]),roughness:.35}));at.position.set(Math.cos(X)*30,Math.sin(X)*30-2,0),C.add(at),k.push([at,X])}let O=new he({color:"#5b2a86"});for(let Y of[-1,1]){let X=new nt(m(1.2,1.6,44,6),O);X.position.set(Y*11,-20,0),X.rotation.z=Y*-.28,C.add(X)}r.add(C),d.push(Y=>{let X=Y*.12*(I%2?-1:1);N.rotation.z=X,C.children.forEach(at=>{var ot,Ct;at.geometry&&at.geometry.type==="CylinderGeometry"&&at.position.x===0&&at.position.y===0&&(at.rotation.z=((Ct=(ot=at.userData).b)!=null?Ct:ot.b=at.rotation.z)+X)}),k.forEach(([at,ot])=>at.position.set(Math.cos(ot+X)*30,Math.sin(ot+X)*30-2,0))})});for(let M=0;M<26;M++){let P=new ie,I=y(["#ff5fa8","#ffd84d","#4dd0ff","#9b7bff","#5ee89a"]),C=new nt(p(1.6,16,12),new he({color:I,roughness:.25}));C.scale.y=1.2;let N=new nt(m(.03,.03,4,4),new be({color:"#ffffff"}));N.position.y=-3,P.add(C,N),P.position.set(x(14,80),8+a()*34,40-a()*(c+120)),P.userData.ph=a()*6,r.add(P),d.push(F=>{P.position.y+=Math.sin(F*.8+P.userData.ph)*.004,P.rotation.z=Math.sin(F*.6+P.userData.ph)*.08})}}else{for(let N=0;N<70;N++){let F=70-a()*(c+200),k=x(24,140),O=1+a()*2.2,Y=a(),X=y(["#22f2ff","#ff2bd6","#7cff3d","#ffe03b"]);Y<.35?(o.add(m(1.4*O,1.8*O,24*O,6),k,u+10*O,F,"#190f4d"),l.add(m(1.5*O,1.5*O,.6,6),k,u+6*O,F,X),l.add(m(1.5*O,1.5*O,.6,6),k,u+14*O,F,X)):Y<.7?l.add(new Qs(2.4*O,0),k,6+a()*40,F,X,a()*3,a()*3,0):l.add(new Me(5*O,.35,6,40),k,10+a()*30,F,X,a()*3,a()*3,0)}o.add(p(60,32,24),-170,90,-c*.55,"#3a1a8c"),l.add(new Me(95,1.5,6,80),-170,90,-c*.55,"#ff2bd6",Math.PI/2-.35,0,.2),l.add(p(26,20,16),200,120,-c*.2,"#ff7ad9");let M=900,P=new Float32Array(M*3);for(let N=0;N<M;N++){let F=a()*Math.PI*2,k=Math.acos(a()*1.6-.2),O=800;P[N*3]=Math.sin(k)*Math.cos(F)*O,P[N*3+1]=Math.cos(k)*O,P[N*3+2]=Math.sin(k)*Math.sin(F)*O}let I=new Pe;I.setAttribute("position",new Ie(P,3));let C=new ns(I,new es({color:"#ffffff",size:2.2,sizeAttenuation:!1,fog:!1,depthWrite:!1}));C.frustumCulled=!1,C.renderOrder=-9,r.add(C),r.userData.stars=C}let g=o.build(new he({vertexColors:!0,roughness:.55}));g&&(g.castShadow=!1,g.receiveShadow=!1,r.add(g));let E=l.build(new be({vertexColors:!0,toneMapped:!1}));E&&r.add(E);let b=new ie;b.name="brand",r.add(b);let L=Kl("HARIS","MADE THIS GAME"),_=e.finishPlat,w=M=>new he({color:M,roughness:.4}),D=(M,P,I,C,N)=>{let F=new ie;F.position.set(0,P,M);let k=w("#2b1c6b");for(let X of[-1,1]){let at=new nt(new Ae(1.2,9,1.2),k);at.position.set(X*I/2,4.5,0),at.castShadow=!0,F.add(at)}let O=new nt(new Be(I,I/4),new be({map:B_(C,N),toneMapped:!1,side:sn}));O.position.set(0,8.6,.05),F.add(O);let Y=new nt(new Ae(I+1.2,.6,1.2),k);Y.position.set(0,10.4,0),F.add(Y),b.add(F)};D(e.startArch,0,20,"START","#22c55e"),D(e.finishZ+.01,_.top,19,"FINISH","#ef233c");let U=new nt(new Be(30,15),new be({map:L,transparent:!0,toneMapped:!1,depthWrite:!1,fog:!1}));return U.position.set(0,_.top+21,e.finishZ-.5),b.add(U),d.push(M=>{U.position.y=_.top+21+Math.sin(M*1.2)*.4}),i.add(r),{group:r,update(M,P){for(let I of d)I(M);r.userData.stars&&r.userData.stars.position.copy(P)},dispose(){i.remove(r),r.traverse(M=>{M.geometry&&M.geometry.dispose(),M.material&&(Array.isArray(M.material)?M.material:[M.material]).forEach(I=>{I.map&&I.map.dispose(),I.dispose()})})}}}var re=null,ps=null,dr=null,Yi=null,Ql=null,Bd=!1;var jl=null,Xi=null;function Mi(){if(re){re.state==="suspended"&&re.resume();return}let i=window.AudioContext||window.webkitAudioContext;if(!i)return;re=new i,ps=re.createGain(),ps.gain.value=Bd?0:.9,ps.connect(re.destination),dr=re.createGain(),dr.gain.value=.7,dr.connect(ps),Yi=re.createGain(),Yi.gain.value=.22,Yi.connect(ps);let t=re.sampleRate;Ql=re.createBuffer(1,t,re.sampleRate);let e=Ql.getChannelData(0);for(let n=0;n<t;n++)e[n]=Math.random()*2-1}function kd(i){Bd=i,ps&&ps.gain.setTargetAtTime(i?0:.9,re.currentTime,.05)}function ne(i,t,e,n,s=.3,r=0,a=dr){if(!re)return;let o=re.currentTime+r,l=re.createOscillator(),c=re.createGain();l.type=i,l.frequency.setValueAtTime(t,o),e!==t&&l.frequency.exponentialRampToValueAtTime(Math.max(20,e),o+n),c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(s,o+.012),c.gain.exponentialRampToValueAtTime(1e-4,o+n),l.connect(c),c.connect(a),l.start(o),l.stop(o+n+.05)}function Ln(i,t,e,n,s,r=0,a=1){if(!re)return;let o=re.currentTime+r,l=re.createBufferSource();l.buffer=Ql,l.loop=!0;let c=re.createBiquadFilter();c.type=e,c.Q.value=a,c.frequency.setValueAtTime(n,o),c.frequency.exponentialRampToValueAtTime(Math.max(30,s),o+i);let h=re.createGain();h.gain.setValueAtTime(1e-4,o),h.gain.exponentialRampToValueAtTime(t,o+.015),h.gain.exponentialRampToValueAtTime(1e-4,o+i),l.connect(c),c.connect(h),h.connect(dr),l.start(o),l.stop(o+i+.05)}var G_=(i,t)=>i+Math.random()*(t-i),Ut={click(){ne("triangle",520,780,.09,.25)},select(){ne("triangle",660,990,.12,.28),ne("sine",990,1320,.1,.18,.06)},back(){ne("triangle",520,330,.12,.22)},jump(){ne("sine",280,640,.17,.3),ne("triangle",420,880,.12,.08,.02)},land(i=10){let t=Math.min(.5,.12+i*.012);ne("sine",140,60,.12,t),Ln(.09,t*.7,"lowpass",900,200)},step(){Ln(.045,.07,"bandpass",G_(500,800),300,0,2)},dive(){Ln(.3,.22,"bandpass",500,2200,0,1.5),ne("sine",300,520,.2,.15)},bounce(){ne("sine",180,920,.3,.38),ne("triangle",360,1400,.22,.12,.03)},pickup(){ne("triangle",520,1040,.18,.3),ne("sine",780,1560,.24,.2,.07),ne("sine",1170,2340,.2,.12,.14)},swing(){Ln(.24,.3,"bandpass",500,2800,0,1.2),ne("sine",380,160,.16,.08)},bonk(){ne("square",190,55,.2,.42),Ln(.14,.45,"lowpass",3e3,300),ne("triangle",820,220,.22,.22,.02)},hit(){ne("sawtooth",420,70,.28,.28),Ln(.18,.3,"lowpass",1800,150),ne("square",220,110,.15,.12,.04)},door(){ne("square",150,90,.07,.3),ne("square",110,70,.1,.25,.09),Ln(.05,.18,"lowpass",2e3,400)},honk(){ne("square",392,392,.34,.2),ne("square",494,494,.34,.2)},honkBig(){ne("sawtooth",130,128,.95,.3),ne("square",164,162,.95,.24),ne("sawtooth",196,194,.95,.22),ne("square",262,258,.95,.14),Ln(.12,.12,"lowpass",900,300)},skid(){Ln(.18,.1,"bandpass",2600,1800,0,3)},vroom(){ne("sawtooth",70,160,.35,.2),ne("sawtooth",90,210,.3,.1,.05)},splash(){Ln(.6,.45,"bandpass",1800,260,0,.8),Ln(.3,.2,"highpass",2400,900,.05),ne("sine",220,80,.3,.12)},respawn(){Ln(.4,.22,"highpass",400,4e3,0,.7),ne("sine",300,900,.3,.15)},checkpoint(){ne("sine",660,660,.14,.3),ne("sine",990,990,.25,.3,.1),ne("triangle",1320,1320,.3,.1,.18)},tick(){ne("sine",660,660,.14,.4)},go(){[523,659,784].forEach(i=>ne("square",i,i,.5,.14)),ne("sine",1046,1046,.6,.3)},join(){ne("triangle",520,520,.1,.25),ne("triangle",780,780,.14,.25,.09)},finish(){[523,659,784,1046,1318].forEach((i,t)=>{ne("square",i,i,.22,.14,t*.09),ne("triangle",i*2,i*2,.3,.08,t*.09)})},win(){[523,659,784,659,784,1046,1318].forEach((t,e)=>{ne("square",t,t,.24,.13,e*.12),ne("triangle",t/2,t/2,.3,.12,e*.12)})},lose(){[392,349,311,262].forEach((i,t)=>ne("triangle",i,i*.97,.3,.22,t*.17))},warn(){ne("square",880,880,.08,.14)}},V_={major:[0,2,4,7,9,12,14,16],minor:[0,3,5,7,10,12,15,17],lydian:[0,2,4,6,7,9,11,12],dorian:[0,2,3,5,7,9,10,12]},Od=[{bpm:132,root:60,scale:"major",prog:[0,5,3,4],lead:"square",bright:3200},{bpm:118,root:57,scale:"minor",prog:[0,0,3,4],lead:"sawtooth",bright:2200},{bpm:108,root:62,scale:"lydian",prog:[0,4,5,3],lead:"triangle",bright:4200},{bpm:140,root:55,scale:"dorian",prog:[0,3,0,5],lead:"sawtooth",bright:2600},{bpm:126,root:62,scale:"major",prog:[0,4,5,3],lead:"square",bright:3600},{bpm:112,root:65,scale:"lydian",prog:[0,5,3,4],lead:"triangle",bright:3400},{bpm:120,root:60,scale:"major",prog:[0,3,4,0],lead:"triangle",bright:3e3}],qh=i=>440*Math.pow(2,(i-69)/12);function Zh(i,t,e,n,s,r){let a=re.createOscillator(),o=re.createGain(),l=re.createBiquadFilter();a.type=i,a.frequency.setValueAtTime(t,e),l.type="lowpass",l.frequency.value=r,o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(s,e+.01),o.gain.exponentialRampToValueAtTime(1e-4,e+n),a.connect(l),l.connect(o),o.connect(Yi),a.start(e),a.stop(e+n+.05)}function W_(i,t){let e=re.createBufferSource();e.buffer=Ql;let n=re.createBiquadFilter();n.type="highpass",n.frequency.value=7e3;let s=re.createGain();s.gain.setValueAtTime(t,i),s.gain.exponentialRampToValueAtTime(1e-4,i+.05),e.connect(n),n.connect(s),s.connect(Yi),e.start(i),e.stop(i+.06)}function X_(i){let t=re.createOscillator(),e=re.createGain();t.frequency.setValueAtTime(150,i),t.frequency.exponentialRampToValueAtTime(40,i+.12),e.gain.setValueAtTime(.55,i),e.gain.exponentialRampToValueAtTime(1e-4,i+.16),t.connect(e),e.connect(Yi),t.start(i),t.stop(i+.2)}function pr(i){if($h(),!re)return;let t=Od[i]||Od[6],e=V_[t.scale],n=60/t.bpm/4,s=1234+i*77,r=()=>(s=s*1664525+1013904223>>>0,s/4294967296),a=[];for(let l=0;l<4;l++){let c=[];for(let h=0;h<16;h++)c.push(h%4===0||r()<.38?Math.floor(r()*6):-1);a.push(c)}Xi={i:0,next:re.currentTime+.1};let o=()=>{if(!(!re||!Xi))for(;Xi.next<re.currentTime+.18;){let l=Xi.i,c=l%16,h=Math.floor(l/16)%4,u=t.prog[h]||0,f=Xi.next,d=t.root+e[u%e.length]-12;c%4===0&&X_(f),c%2===0&&W_(f,c%4===2?.1:.05),(c%4===0||c%8===6)&&Zh("triangle",qh(d-12),f,n*3.2,.4,600),c===0&&[0,2,4].forEach(y=>Zh("sine",qh(t.root+e[(u+y)%e.length]),f,n*15,.07,1400));let x=a[h][c];x>=0&&Zh(t.lead,qh(t.root+12+e[(x+u)%e.length]),f,n*1.8,.11,t.bright),Xi.next+=n,Xi.i++}};jl=setInterval(o,40),o()}function $h(){jl&&clearInterval(jl),jl=null,Xi=null}function tc(i){Yi&&Yi.gain.setTargetAtTime(i?.08:.22,re.currentTime,.2)}var ai=null;function Hd(){if(!re||ai)return;let i=re.createGain();i.gain.value=1e-4;let t=re.createBiquadFilter();t.type="lowpass",t.frequency.value=500;let e=re.createOscillator(),n=re.createOscillator();e.type="sawtooth",n.type="square",e.frequency.value=60,n.frequency.value=30,e.connect(t),n.connect(t),t.connect(i),i.connect(dr),e.start(),n.start(),ai={g:i,f:t,o1:e,o2:n}}function Gd(i,t){if(!re||!ai)return;let e=re.currentTime,n=Math.max(0,Math.min(1,i)),s=52+n*150+(t?16:0);ai.o1.frequency.setTargetAtTime(s,e,.08),ai.o2.frequency.setTargetAtTime(s*.5,e,.08),ai.f.frequency.setTargetAtTime(380+n*900+(t?300:0),e,.1),ai.g.gain.setTargetAtTime(.05+n*.07+(t?.04:0),e,.1)}function Jh(){if(!ai)return;let i=ai;ai=null;try{i.g.gain.setTargetAtTime(1e-4,re.currentTime,.05),setTimeout(()=>{try{i.o1.stop(),i.o2.stop()}catch{}},300)}catch{}}var ec=class{constructor(){this.ws=null,this.h={},this.offset=0,this.rtt=0,this.best=1/0,this.connected=!1,this.id=null,this.samples=0}now(){return Date.now()+this.offset}on(t,e){this.h[t]=e}connect(){return new Promise((t,e)=>{if(this.connected)return t();let n=location.protocol==="https:"?"wss":"ws",s;try{s=new WebSocket(`${n}://${location.host}/ws`)}catch(a){return e(a)}this.ws=s;let r=setTimeout(()=>{try{s.close()}catch{}e(new Error("timeout"))},8e3);s.onopen=()=>{clearTimeout(r),this.connected=!0;for(let a=0;a<8;a++)setTimeout(()=>this.ping(),a*140);this.pinger=setInterval(()=>this.ping(),2e3),t()},s.onmessage=a=>{let o;try{o=JSON.parse(a.data)}catch{return}if(o.t==="pong")return this.onPong(o);o.t==="joined"&&(this.id=o.id);let l=this.h[o.t];l&&l(o)},s.onclose=()=>{clearTimeout(r);let a=this.connected;this.connected=!1,clearInterval(this.pinger),a&&this.h.close?this.h.close():e(new Error("closed"))},s.onerror=()=>{}})}ping(){this.send({t:"ping",c:Date.now()})}onPong(t){let e=Date.now(),n=e-t.c;this.rtt=this.rtt?this.rtt*.7+n*.3:n;let s=t.s+n/2-e;(n<=this.best*1.25||this.samples<3)&&(this.offset=this.samples<8?n<=this.best?s:this.offset:this.offset*.8+s*.2,this.best=Math.min(this.best,n)),this.samples++,this.samples%10===0&&(this.best=this.best*1.3+2)}send(t){this.ws&&this.ws.readyState===1&&this.ws.send(JSON.stringify(t))}close(){try{this.ws&&this.ws.close()}catch{}this.connected=!1,clearInterval(this.pinger)}};var Vd=`
float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f); return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
`;function Wd(i){let t=i.x1-i.x0,e=i.z1-i.z0,n=new qe({transparent:!0,depthWrite:!1,uniforms:{time:{value:0},rect:{value:new Ne(i.x0,i.z0,i.x1,i.z1)},depth:{value:i.surf-i.bottom},sunDir:{value:new B(-.35,.8,-.5).normalize()},skyTop:{value:new Dt("#4aa8ff")},skyHor:{value:new Dt("#e8fbff")},fogC:{value:new Dt("#d9f4ff")},fogN:{value:120},fogF:{value:640},ag:{value:[new B(0,0,0),new B(0,0,0),new B(0,0,0),new B(0,0,0)]}},vertexShader:`uniform float time; varying vec3 vW;
      void main(){ vec4 w = modelMatrix*vec4(position,1.0); w.y += sin(w.x*1.3+time*1.6)*0.018 + sin(w.z*1.7-time*1.3)*0.015; vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }`,fragmentShader:`uniform float time; uniform vec4 rect; uniform float depth; uniform vec3 sunDir; uniform vec3 skyTop; uniform vec3 skyHor; uniform vec3 fogC; uniform float fogN; uniform float fogF; uniform vec3 ag[4]; varying vec3 vW;
      ${Vd}
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
      }`}),s=new Be(t,e,40,40),r=new nt(s,n);return r.rotation.x=-Math.PI/2,r.position.set((i.x0+i.x1)/2,i.surf,(i.z0+i.z1)/2),r.renderOrder=3,r.frustumCulled=!1,r.userData.pool=i,r}function Xd(i){let t=i.x1-i.x0,e=i.z1-i.z0,n=new qe({transparent:!0,depthWrite:!1,blending:gi,uniforms:{time:{value:0}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform float time; varying vec3 vW; ${Vd}
      void main(){
        vec2 p = vW.xz*0.55; float t = time*0.5, c = 0.0;
        for(int i=0;i<3;i++){ p += vec2(sin(p.y*1.7+t), cos(p.x*1.4-t))*0.55; c += abs(sin(p.x*2.2+p.y*1.8)); }
        c = pow(1.0 - c/3.0, 5.0) * 1.6;
        gl_FragColor = vec4(vec3(0.55,0.95,1.0)*c*0.55, 1.0);
      }`}),s=new nt(new Be(t,e),n);return s.rotation.x=-Math.PI/2,s.position.set((i.x0+i.x1)/2,i.bottom+.03,(i.z0+i.z1)/2),s.renderOrder=2,s.frustumCulled=!1,s}var Zn=[{id:0,name:"Sprinter",color:"#0b6b3a",max:27,acc:17,grip:6.5,turn:2.2,hw:.95,hl:2.1},{id:1,name:"Buggy",color:"#2f7bff",max:23,acc:15,grip:8.5,turn:2.5,hw:1.05,hl:1.9},{id:2,name:"Pickup",color:"#ffb21e",max:22,acc:14,grip:7,turn:2,hw:1.05,hl:2.3},{id:3,name:"Bubble",color:"#a855f7",max:24,acc:16,grip:7.5,turn:2.4,hw:.95,hl:1.8},...[4,5,6,7].map(i=>({id:i,name:"Racer",color:"#e0001f",max:42,acc:36,grip:9.5,turn:2.15,hw:1.05,hl:2.35,racer:!0}))];function qd(i,t,e,n){return{id:i,x:t,z:e,y:0,pitch:0,yaw:n,vx:0,vz:0,speed:0,steer:0,drift:0,driver:-1,bump:0,boost:0,parked:!0,spin:0,crash:0,acc:0}}function Yd(i,t,e,n=1.5,s){let r=1e9,a=t,o=e,l=1,c=1,h=0,u=0,f=0,d=s!==void 0;for(let y of i.segs){let p=y.bx-y.ax,m=y.bz-y.az,S=p*p+m*m,A=S>0?((t-y.ax)*p+(e-y.az)*m)/S:0;A=A<0?0:A>1?1:A;let g=y.y0||0,E=y.y1===void 0?g:y.y1,b=g+(E-g)*A;if(d&&Math.abs(b-s)>5)continue;let L=y.ax+p*A,_=y.az+m*A,w=Math.hypot(t-L,e-_),D=y.hw-n;w-D<r&&(r=w-D,a=L,o=_,l=D,c=w,h=b,E!==g&&S>0?(u=(E-g)*p/S,f=(E-g)*m/S):u=f=0)}for(let y of i.plazas||[]){let p=y.y||0;if(d&&Math.abs(p-s)>5)continue;let m=Math.hypot(t-y.x,e-y.z),S=y.r-n;m-S<r&&(r=m-S,a=y.x,o=y.z,l=S,c=m,h=p,u=f=0)}if(r>1e8)return{d:-1,px:t,pz:e,nx:0,nz:1,lim:1,h:d?s:0,gx:0,gz:0};let x=c||1e-6;return{d:r,px:a,pz:o,nx:(t-a)/x,nz:(e-o)/x,lim:l,h,gx:u,gz:f}}function Zd(i,t,e,n,s,r=0){let a=Zn[i.id],o=Math.sin(i.yaw),l=Math.cos(i.yaw),c=-l,h=o,u=i.vx*o+i.vz*l,f=i.vx*c+i.vz*h,d=a.max*(i.boost>0?1.3:1);i.boost>0&&(i.boost-=t),e.gas>.01?u+=(u<0?38:a.acc*(1-Math.max(0,u)/(d+2))+1)*e.gas*t:e.gas<-.01?u+=(u>.5?-34:-11)*-e.gas*t:u-=Math.sign(u)*Math.min(Math.abs(u),4.5*t),e.hb&&(u-=Math.sign(u)*Math.min(Math.abs(u),9*t));{let b=(i.gx||0)*o+(i.gz||0)*l;b&&(u-=9.8*.55*(b/Math.sqrt(1+b*b))*t)}u=Math.max(-9,Math.min(d+(i.boost>0?3:0),u)),i.steer+=(e.steer-i.steer)*Math.min(1,t*9);let x=Math.abs(u),y=Math.min(1,x/5)*(1-.38*Math.min(1,x/d));i.yaw-=i.steer*a.turn*y*Math.sign(u||1)*(e.hb?1.35:1)*t;let p=(e.hb?1.6:a.grip)*(i.slick>0?.22:1);f*=Math.exp(-p*t),i.drift=Math.min(1,Math.abs(f)/5);let m=Math.sin(i.yaw),S=Math.cos(i.yaw),A=-S,g=m;i.vx=m*u+A*f,i.vz=S*u+g*f;for(let b of n.boosts||[])Math.abs(i.x-b.x)<b.r&&Math.abs(i.z-b.z)<b.r&&Math.abs(i.y-(b.y||0))<3&&(i.boost=1.4,u<d&&(i.vx+=m*40*t,i.vz+=S*40*t));i.x+=i.vx*t,i.z+=i.vz*t;let E="";{let b=Yd(n,i.x,i.z,1.5,i.y);i.gx=b.gx,i.gz=b.gz;{let L=i.y;i.y+=(b.h-i.y)*Math.min(1,t*14);let _=Math.hypot(i.vx,i.vz)*t;i.pitch+=((_>.001?Math.atan2(i.y-L,_):0)*(i.speed>=0?1:-1)-i.pitch)*Math.min(1,t*10)}for(let L of[1.25,-1.25]){let _=Yd(n,i.x+m*L,i.z+S*L,1.6,i.y);if(_.d<=0)continue;i.x-=_.nx*_.d,i.z-=_.nz*_.d;let w=i.vx*_.nx+i.vz*_.nz;if(w>0){let D=-1.35*w*_.nx,U=-(1+.35)*w*_.nz;i.vx+=D,i.vz+=U,i.vx*=.95,i.vz*=.95,i.spin=Math.max(-3,Math.min(3,(i.spin||0)+(S*L*D-m*L*U)*.1)),w>5&&(E="bump"),i.bump=Math.max(i.bump,w)}}}for(let b of s||[]){if((i.x-b.x)**2+(i.z-b.z)**2>36||Math.abs((b.y||0)-i.y)>4)continue;let L=Math.sin(b.yaw),_=Math.cos(b.yaw),w=null;for(let P of[1.05,-1.05])for(let I of[1.05,-1.05]){let C=i.x+m*P,N=i.z+S*P,F=b.x+L*I,k=b.z+_*I,O=C-F,Y=N-k,X=Math.hypot(O,Y),at=2.3-X;at>0&&(!w||at>w.pen)&&(w={pen:at,nx:X>1e-4?O/X:m,nz:X>1e-4?Y/X:S,rx:C-i.x,rz:N-i.z})}if(!w)continue;let D=b.driver===-1||b.parked,U=D?1:.6;i.x+=w.nx*w.pen*U,i.z+=w.nz*w.pen*U;let M=(i.vx-b.vx)*w.nx+(i.vz-b.vz)*w.nz;if(M<0){let P=1.55*-M*(D?1:.55),I=w.nx*P,C=w.nz*P;i.vx+=I,i.vz+=C,i.spin=Math.max(-3.2,Math.min(3.2,(i.spin||0)+(w.rz*I-w.rx*C)*.32)),i.vx*=.94,i.vz*=.94,-M>3.5&&(E=-M>7?"crash":"bump",i.crash=Math.max(i.crash||0,-M))}}if(n.dyn&&!n.free){let b=n.dyn(r);for(let L of b){if(Math.abs(L.y-i.y)>4||(i.x-L.x)**2+(i.z-L.z)**2>30)continue;let _=null;for(let D of[1.05,-1.05]){let U=i.x+m*D,M=i.z+S*D,P=U-L.x,I=M-L.z,C=Math.hypot(P,I),N=1.15+L.r-C;N>0&&(!_||N>_.pen)&&(_={pen:N,nx:C>1e-4?P/C:m,nz:C>1e-4?I/C:S,rx:U-i.x,rz:M-i.z})}if(!_)continue;i.x+=_.nx*_.pen,i.z+=_.nz*_.pen;let w=(i.vx-L.vx)*_.nx+(i.vz-L.vz)*_.nz;if(w<0){let D=1.5*-w,U=_.nx*D,M=_.nz*D;i.vx+=U,i.vz+=M,i.spin=Math.max(-3.4,Math.min(3.4,(i.spin||0)+(_.rz*U-_.rx*M)*.4)),i.vx*=.9,i.vz*=.9,-w>3.5&&(E=-w>7?"crash":"bump",i.crash=Math.max(i.crash||0,-w))}}}i.slick=0;for(let b of(n.free?[]:n.slicks)||[])Math.abs(b.y-i.y)<3&&(i.x-b.x)**2+(i.z-b.z)**2<b.r*b.r&&(i.slick=1);return i.spin&&(i.yaw+=i.spin*t,i.spin*=Math.exp(-3.6*t),Math.abs(i.spin)<.02&&(i.spin=0)),i.speed=i.vx*m+i.vz*S,E}var te=(i,t,e,n=.12)=>new fr(i,t,e,3,Math.min(n,i/2-.01,t/2-.01,e/2-.01)),un=(i,t={})=>{var e,n,s;return new he({color:i,roughness:(e=t.r)!=null?e:.35,metalness:(n=t.m)!=null?n:.25,emissive:t.e||0,emissiveIntensity:(s=t.ei)!=null?s:1})},nc=()=>new he({color:"#9fd8ff",roughness:.05,metalness:.4,transparent:!0,opacity:.55});function $d(i){let t=Zn[i],e=new ie,n=un("#1b1b22",{r:.8,m:0}),s=un("#e8eaf2",{r:.25,m:.8}),r=un("#23252e",{r:.6}),a=(E,b,L,_,w,D=0,U=0,M=0)=>{let P=new nt(E,b);return P.position.set(L,_,w),P.rotation.set(D,U,M),P.castShadow=!0,P.receiveShadow=!0,e.add(P),P},o=i===0?new he({map:Hh("pk"),roughness:.3,metalness:.15}):un(t.color,{r:.28,m:.35}),l=un("#ffffff",{r:.3,m:.1}),c=un("#fff6c8",{e:"#fff1a8",ei:1.4}),h=un("#ff3030",{e:"#ff1a1a",ei:1.2}),u=[],f=[],d=.46,x=1,y=1.35,p=-1.3,m={y:.55,z:-.15};if(i===0)d=.44,x=1.02,y=1.45,p=-1.35,m={y:.5,z:-.2},a(te(1.9,.5,4.3,.22),o,0,.55,0),a(te(1.7,.34,1.5,.2),o,0,.78,1.35,-.12),a(te(1.7,.4,1,.2),o,0,.86,-1.6),a(te(1.5,.5,.12,.05),nc(),0,1.02,.78,-.55),a(te(.12,.1,1.5,.04),r,.95,1.16,-1.82),a(te(.12,.1,1.5,.04),r,-.95,1.16,-1.82),a(te(2,.09,.45,.04),o,0,1.28,-2),a(te(.1,.4,.3,.03),r,.7,1.08,-1.95),a(te(.1,.4,.3,.03),r,-.7,1.08,-1.95),a(te(.4,.2,.1,.04),c,.65,.68,2.12),a(te(.4,.2,.1,.04),c,-.65,.68,2.12),a(te(.45,.14,.1,.04),h,.65,.78,-2.17),a(te(.45,.14,.1,.04),h,-.65,.78,-2.17);else if(i===1){d=.62,x=1.18,y=1.3,p=-1.25,m={y:.62,z:-.1},a(te(1.7,.4,3.8,.16),o,0,.62,0),a(te(1.5,.3,1.2,.14),o,0,.9,1.4),a(te(1.3,.35,.9,.12),un("#ffd23f",{r:.4}),0,.95,-1.35);for(let E of[-1,1])a(new Nt(.06,.06,1.7,8),r,E*.78,1.5,-.1,.12,0,0),a(new Nt(.06,.06,1.6,8),r,E*.78,1,.7,.9,0,0),a(new Nt(.06,.06,1.7,8),r,E*.78,1.5,-.1,Math.PI/2,0,0);a(new Nt(.06,.06,1.6,8),r,0,2,-.1,0,0,Math.PI/2),a(new Ee(.2,12,8),c,.55,.98,2),a(new Ee(.2,12,8),c,-.55,.98,2),a(te(.4,.12,.1,.04),h,.5,.8,-1.95),a(te(.4,.12,.1,.04),h,-.5,.8,-1.95)}else if(i===2){d=.55,x=1.1,y=1.55,p=-1.5,m={y:.78,z:.55},a(te(2,.55,4.7,.2),o,0,.75,0),a(te(1.9,.75,1.5,.18),o,0,1.28,.55),a(te(1.5,.45,.1,.05),nc(),0,1.55,1.3,-.35),a(te(1.8,.1,1.9,.05),r,0,1.1,-1.35);for(let E of[-1,1])a(te(.1,.5,1.9,.04),o,E*.97,1.35,-1.35);a(te(1.8,.5,.1,.04),o,0,1.35,-2.28),a(te(1.8,.1,.1,.04),un("#c8ccd8",{m:.8,r:.2}),0,.75,2.4),a(te(.1,.5,.1,.03),un("#c8ccd8",{m:.8,r:.2}),.6,.85,2.38),a(te(.1,.5,.1,.03),un("#c8ccd8",{m:.8,r:.2}),-.6,.85,2.38),a(te(.35,.22,.1,.04),c,.7,.98,2.36),a(te(.35,.22,.1,.04),c,-.7,.98,2.36),a(te(.3,.2,.1,.04),h,.8,1,-2.36),a(te(.3,.2,.1,.04),h,-.8,1,-2.36)}else if(i>=4){d=.5,x=1.12,y=1.5,p=-1.5,m={y:.62,z:-.2};let E=un("#e0001f",{r:.16,m:.55}),b=un("#15161c",{r:.5,m:.2}),L=un("#ffffff",{r:.25,m:.1}),_=un("#ff7a1a",{e:"#ff5a00",ei:2}),w=new Li;[[-2.4,.3],[-2.4,.84],[-1.7,1],[-.95,.96],[-.8,.66],[.5,.66],[.72,.78],[2.2,.56],[2.46,.44],[2.46,.3]].forEach(([P,I],C)=>C?w.lineTo(P,I):w.moveTo(P,I));let D=new Di(w,{depth:1.7,bevelEnabled:!0,bevelSize:.1,bevelThickness:.1,bevelSegments:2,steps:1});D.rotateY(-Math.PI/2),D.translate(.85,0,0),a(D,E,0,0,0),a(te(1.2,.04,1.3,.02),b,0,.7,-.1),a(te(1,.32,.18,.06),E,0,.88,-1.05),a(te(1.5,.42,.08,.03),nc(),0,.98,.6,-.62);for(let P of[-1,1])a(te(.12,.34,.1,.03),b,P*.76,.9,.62,-.62),a(te(.42,.34,1.7,.14),E,P*1.03,.6,-1.6),a(te(.3,.3,.9,.1),E,P*1,.55,1.5),a(te(.1,.3,.8,.03),b,P*.98,.5,-.35),a(te(.07,.62,.8,.02),b,P*1.12,1.52,-2.28),a(te(.09,.62,.09,.02),b,P*.55,1.2,-2.15);a(te(.46,.03,1.9,.01),L,0,.8,1.4,.07),a(te(2.3,.1,.8,.03),E,0,1.52,-2.28),a(te(2.3,.07,.34,.02),b,0,1.45,-2),a(te(2.3,.08,.55,.03),b,0,.3,2.46),a(te(1.9,.12,.3,.04),b,0,.3,-2.4);for(let P of[-1,1])a(te(.42,.14,.1,.04),c,P*.62,.62,2.5),a(te(.5,.12,.1,.04),h,P*.6,.86,-2.48),a(new Nt(.1,.12,.3,10),b,P*.42,.52,-2.5,Math.PI/2,0,0);let U=new nt(new Be(2.1,4.6),new be({color:"#27b6ff",transparent:!0,opacity:.55,blending:gi,depthWrite:!1,toneMapped:!1}));U.rotation.x=-Math.PI/2,U.position.set(0,.12,0),e.add(U);let M=[];for(let P of[-1,1])for(let[I,C,N]of[[.17,1.3,"#ff6a00"],[.09,.8,"#ffe14a"]]){let F=new Ge(I,C,8);F.rotateX(-Math.PI/2),F.translate(0,0,-C/2);let k=new nt(F,new be({color:N,transparent:!0,opacity:.9,toneMapped:!1}));k.position.set(P*.42,.52,-2.62),e.add(k),M.push(k)}e.userData.flames=M}else{d=.42,x=.98,y=1.15,p=-1.1,m={y:.5,z:-.05},a(new Ee(1.15,24,16),o,0,.95,-.05).scale.set(.9,.62,1.55),a(te(1.6,.14,3.2,.06),l,0,.42,0);for(let b of[-1,1])a(new Ee(.27,14,10),c,b*.62,.95,1.72),a(new Ee(.2,12,8),h,b*.55,.85,-1.78),a(new Nt(.09,.09,.5,8),r,b*.42,1.55,1.1,.45,0,0);a(te(1.5,.35,.1,.04),nc(),0,1.22,.85,-.7),a(te(.5,.05,2.3,.02),un("#ff6bd5",{r:.4}),.15,1.52,-.75,0,0,.08)}let S=new Nt(d,d,.42,20),A=new Nt(d*.56,d*.56,.44,12);for(let[E,b,L]of[[1,y,1],[-1,y,1],[1,p,0],[-1,p,0]]){let _=new ie;_.position.set(E*x,d,b),e.add(_);let w=new ie;_.add(w);let D=new nt(S,n);D.rotation.z=Math.PI/2,D.castShadow=!0,w.add(D);let U=new nt(A,s);U.rotation.z=Math.PI/2,w.add(U),u.push(w),L&&f.push(_)}let g=new nt(new is(2.6,20),new be({color:0,transparent:!0,opacity:.22,depthWrite:!1}));return g.rotation.x=-Math.PI/2,g.position.y=.04,g.scale.set(.9,1.25,1),e.add(g),e.userData={wheels:u,pivots:f,seat:m,spec:t,flames:e.userData.flames},e}function Jd(i,t,e){let n=i.userData;for(let r of n.wheels)r.rotation.x+=t.speed/.5*e;for(let r of n.pivots)r.rotation.y=-t.steer*.5;i.rotation.z=ga.clamp(-t.steer*Math.min(1,Math.abs(t.speed)/20)*.07,-.08,.08);let s=(t.speed-(t._ps===void 0?t.speed:t._ps))/Math.max(e,.001);if(t._ps=t.speed,t._sq=(t._sq||0)+(ga.clamp(s,-30,30)*.0045-(t._sq||0))*Math.min(1,e*7),i.rotation.x=-(t.pitch||0)-t._sq,n.flames){let r=ga.clamp(.2+Math.max(0,t.speed)/45+(t.boost>0?.9:0)+(t.driver!==-1?.15:0),.15,2)*(.85+Math.random()*.3);for(let a of n.flames)a.scale.set(1,1,r),a.visible=t.driver!==-1||t.boost>0}}var ft=i=>document.getElementById(i),Dn=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches||(typeof navigator!="undefined"&&navigator.maxTouchPoints||0)>0,Ve={x:0,y:0,jump:!1},fn=(i,t,e)=>i<t?t:i>e?e:i,ms=(i,t,e)=>i+(t-i)*e,iu=(i,t,e)=>{let n=(t-i)%(Math.PI*2);return n>Math.PI&&(n-=Math.PI*2),n<-Math.PI&&(n+=Math.PI*2),i+n*e},ic=i=>{let t=Math.floor(i/60),e=i-t*60;return`${t}:${e<10?"0":""}${e.toFixed(2)}`},Kh=i=>i===1?"1st":i===2?"2nd":i===3?"3rd":i+"th",q_=["\u{1F947}","\u{1F948}","\u{1F949}"],qi=ft("c"),vn;try{vn=new va({canvas:qi,antialias:!0,powerPreference:"high-performance"})}catch(i){throw document.querySelector("#loader p").textContent="WebGL is not available in this browser. Please use a recent Chrome / Edge / Firefox.",i}vn.outputColorSpace=Ce;vn.toneMapping=ir;vn.toneMappingExposure=1.05;vn.shadowMap.enabled=!0;vn.shadowMap.type=Ko;var mr=Math.min(window.devicePixelRatio||1,Dn?1.5:2),ae={dpr:Dn?Math.min(mr,1):Math.min(mr,1.5),t:0,frames:0,good:0,shadows:!0,warm:3};function gs(){Ze&&(vn.setPixelRatio(ae.dpr),vn.setSize(window.innerWidth,window.innerHeight,!1),Ze.camera.aspect=window.innerWidth/window.innerHeight,Ze.camera.updateProjectionMatrix(),Q&&(Q.camera.aspect=window.innerWidth/window.innerHeight,Q.camera.updateProjectionMatrix(),Q.particles.setScale(vn.domElement.height)),Ze.particles.setScale(vn.domElement.height))}function Z_(i){if(ae.low)return;if(ae.warm>0){ae.warm-=i;return}if(ae.t+=i,ae.frames++,ae.t<1.2)return;let t=ae.frames/ae.t;ae.t=0,ae.frames=0,t<40?(ae.good=0,ae.dpr>.7?(ae.dpr=Math.max(.7,ae.dpr-.2),gs()):ae.shadows&&t<30&&(ae.shadows=!1,Q&&Q.setShadows(!1))):t>58?++ae.good>=3&&ae.dpr<Math.min(mr,1.75)&&(ae.dpr=Math.min(Math.min(mr,1.75),ae.dpr+.1),ae.good=0,gs()):ae.good=0}try{let i=localStorage.getItem("ph_low");ae.low=i==="1",i===null&&Dn&&((navigator.hardwareConcurrency||4)<=2||(navigator.deviceMemory||4)<=2)&&(ae.low=!0)}catch{ae.low=!1}ae.low&&(ae.dpr=.75,ae.shadows=!1);function $_(){ae.low?(ae.dpr=.75,ae.shadows=!1):(ae.dpr=Dn?Math.min(mr,1):Math.min(mr,1.5),ae.shadows=!0,ae.warm=3),Q&&Q.setShadows(ae.shadows),gs()}var J_=new us(vn),tp=J_.fromScene(new Ma,.04).texture,pt={screen:"title",mode:"single",name:localStorage.getItem("ph_name")||"",char:+(localStorage.getItem("ph_char")||0),level:0,net:null,room:null,myId:null,pendingJoin:null,muted:!1},Q=null,Ze=null,Qh=[],ep=i=>+(localStorage.getItem("ph_best_"+i)||0),tu=class{constructor(){let t=Ia.candy;this.scene=new pi,this.scene.fog=new Xs(t.fog,70,420),this.scene.environment=tp,this.scene.environmentIntensity=.7,this.camera=new $e(42,1,.1,1500),this.sky=Xh(t),this.scene.add(this.sky),this.water=Yh(t,-3),this.scene.add(this.water),this.scene.add(new rs(t.hemiSky,t.hemiGround,1));let e=new as(t.sun,2.4);e.position.set(-10,18,14),e.castShadow=!0,e.shadow.mapSize.set(1024,1024);let n=e.shadow.camera;n.left=-12,n.right=12,n.top=12,n.bottom=-12,n.near=1,n.far=60,e.shadow.bias=-4e-4,e.shadow.normalBias=.03,this.scene.add(e),this.sun=e;let s=u=>new he({color:u,roughness:.35}),r=new nt(new Nt(15,14,2,48),s("#ff9ccf"));r.position.y=-1,r.receiveShadow=!0,this.scene.add(r);let a=new nt(new Nt(13,13,.1,48),s("#fff3fb"));a.position.y=.02,a.receiveShadow=!0,this.scene.add(a),this.tops=[.8,1.25,1.25,.8],[[-4.5,.8,"#7be8a0"],[-1.5,1.25,"#5fc2ff"],[1.5,1.25,"#ffd23f"],[4.5,.8,"#ff9ccf"]].forEach(([u,f,d])=>{let x=new nt(new Nt(1.1,1.25,f,32),s(d));x.position.set(u,f/2,-.5),x.castShadow=x.receiveShadow=!0,this.scene.add(x)}),this.slotPos=[[-4.5,.8,-.5],[-1.5,1.25,-.5],[1.5,1.25,-.5],[4.5,.8,-.5]];let o=Kl("HARIS"),l=Kl("HARIS","MADE THIS GAME"),c=new nt(new Be(11,4.3),new be({map:o,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2}));c.rotation.x=-Math.PI/2,c.position.set(0,.1,4.4),this.scene.add(c);let h=new nt(new Be(26,13),new be({map:l,transparent:!0,depthWrite:!1,toneMapped:!1,fog:!1}));h.position.set(0,9.5,-24),this.scene.add(h),this.banner=h,this.chars=[0,1,2,3].map(u=>{let f=new ds(u);return this.scene.add(f.group),{c:f,tag:null,name:null,show:!0,scale:1,hop:0}}),this.ambient=new Ca("candy",160),this.scene.add(this.ambient.points),this.particles=new Ra(260),this.scene.add(this.particles.points),this.mode="title",this.sel=0,this.t=0,this.lobby=[]}setName(t,e){let n=this.chars[t];n.name!==e&&(n.tag&&(n.c.group.remove(n.tag),n.tag.material.map.dispose(),n.tag.material.dispose(),n.tag=null),n.name=e,e&&(n.tag=$l(e,_i[t].color),n.tag.position.set(0,n.c.height+.55,0),n.c.group.add(n.tag)))}setTitle(t=-1){this.mode="title",this.sel=t,this.lobby=[],this.chars.forEach((e,n)=>{e.show=!0,this.setName(n,null)})}setLobby(t){this.mode="lobby",this.lobby=t,this.chars.forEach((e,n)=>{let s=t.findIndex(r=>r.char===n);e.show=s>=0,e.slot=s,this.setName(n,s>=0?t[s].name:null)})}burst(t){let e=this.slotPos[this.slotOf(t)];this.particles.emit(e[0],e[1]+1.4,e[2]+.5,40,{rainbow:!0,speed:4,up:6,life:1,size:.35,gravity:7})}slotOf(t){return this.mode==="lobby"?[1,2,0,3][Math.max(0,this.chars[t].slot)%4]:t}update(t){this.t+=t;let e=this.camera;e.position.set(Math.sin(this.t*.25)*1.8,2.9+Math.sin(this.t*.4)*.15,10.5),e.lookAt(0,1.9,0),this.sky.position.copy(e.position),this.water.material.uniforms.time.value=this.t,this.chars.forEach((n,s)=>{if(n.c.group.visible=n.show,!n.show)return;let r=this.slotPos[this.slotOf(s)],a=this.mode==="title"?Math.floor(this.t/3)%4===s:this.mode!=="lobby"&&this.sel===s;n.scale=ms(n.scale,a?1.18:1,Math.min(1,t*8)),n.c.group.scale.setScalar(n.scale),n.hop=a?Math.abs(Math.sin(this.t*5))*.25:ms(n.hop,0,Math.min(1,t*8)),n.c.group.position.set(r[0],r[1]+n.hop,r[2]),n.c.group.rotation.y=iu(n.c.group.rotation.y,this.mode==="lobby"?Math.sin(this.t*.7+s)*.3:Math.sin(this.t*.6+s*2)*.35,Math.min(1,t*4)),n.c.update(t,{speed:0,grounded:!0,vy:0,stun:0,dive:0,celebrate:a||this.mode==="lobby"&&Math.floor(this.t*.5+s)%2===0}),n.tag&&n.tag.scale.set(2.4,.6,1)}),this.ambient.update(this.t,e.position),this.particles.update(t)}},La=class{constructor(t,e){this.info=t,this.id=t.id,this.name=t.name,this.model=new ds(t.char),e.add(this.model.group),this.tag=$l(t.name,_i[t.char].color),this.tag.position.set(0,this.model.height+.7,0),this.model.group.add(this.tag),this.snaps=[],this.x=0,this.y=-50,this.z=0,this.yaw=Math.PI,this.speed=0,this.flags=0,this.vy=0,this.vx=0,this.vz=0,this.sw=0,this.ds=[],this.dMin=0,this.jit=0,this.rs=0,this.has=!1,this.finished=!1,this.lastLanded=!1}push(t){t.rs!==this.rs&&(this.snaps.length=0,this.rs=t.rs);let e=this.snaps[this.snaps.length-1];if(e&&t.ts<=e.ts)return;let n=Date.now(),s=n-t.ts;for(this.ds.push([n,s]);this.ds.length>1&&n-this.ds[0][0]>4e3;)this.ds.shift();let r=1/0;for(let a of this.ds)a[1]<r&&(r=a[1]);this.dMin=r,this.jit=this.jit*.92+Math.abs(s-r)*.08,this.snaps.push(t),this.snaps.length>40&&this.snaps.shift()}renderTime(){return Date.now()-this.dMin-fn(70+this.jit*2.2,70,260)}update(t,e){let n=this.snaps;if(!n.length)return;for(;n.length>2&&n[1].ts<=t;)n.shift();let s=n[0],r=n[1]||n[0],a=0;if(n.length>1){let d=Math.max(1,r.ts-s.ts);a=fn((t-s.ts)/d,0,1+220/d)}let o=ms(s.x,r.x,a),l=ms(s.y,r.y,a),c=ms(s.z,r.z,a);if(!this.has)this.x=o,this.y=l,this.z=c,this.has=!0;else{let d=1-Math.exp(-28*e),x=this.x,y=this.z;this.x+=(o-this.x)*d,this.y+=(l-this.y)*d,this.z+=(c-this.z)*d,e>0&&(this.vx+=((this.x-x)/e-this.vx)*.25,this.vz+=((this.z-y)/e-this.vz)*.25)}this.yaw=iu(this.yaw,r.r,1-Math.exp(-16*e)),this.speed=ms(s.sp,r.sp,fn(a,0,1)),this.flags=r.a,this.vy=n.length>1?(r.y-s.y)/Math.max(.02,(r.ts-s.ts)/1e3):0;let h=this.model.group;h.position.set(this.x,this.y,this.z),h.rotation.y=this.yaw;let u=!!(this.flags&1),f=u&&!this.lastLanded;this.lastLanded=u,this.sw=this.flags&16?Math.min(1,(this.sw||.001)+e/.42):0,this.model.update(e,{speed:this.speed,grounded:u,vy:this.vy,stun:this.flags&2?1:0,dive:this.flags&4?1:0,celebrate:!!(this.flags&8),swing:this.sw,shield:!!(this.flags&32),leader:!!this.leader,mega:!!(this.flags&128),landed:f})}dispose(t){t.remove(this.model.group),this.tag.material.map.dispose(),this.tag.material.dispose(),this.model.dispose()}},ze=new Set,Si={jump:!1,dive:!1},rc=class i{constructor(t,e,n,s){this.level=t,this.meta=Sa[t],this.multi=s.multi,this.localId=n,this.players=e,this.t0=s.t0,this.phase="countdown",this.finished=!1,this.over=!1,this.finishTime=0,this.finishedMap=new Map,this.camYaw=0,this.camPitch=.34,this.camDist=8.2,this.camPos=new B,this.camTarget=new B,this.camInit=!1,this.sendT=0,this.rs=0,this.cpIdx=0,this.cpCur=null,this.stepDist=0,this.lastCount=99,this.hudT=0,this.hintT=0,this.warnSec=-1,this.levelTime=-4,this.batCd=0,this.swingT=0,this.batPending=!1,this.swingMega=!1,this.fx={turbo:0,jump:0,shield:0,mega:0},this.fxSig="";let r=Ia[this.meta.key],a=this.scene=new pi;a.background=new Dt(r.fog),a.fog=new Xs(r.fog,r.fogNear,r.fogFar),a.environment=tp,a.environmentIntensity=r.env,this.camera=new $e(62,window.innerWidth/window.innerHeight,.1,1800);let{world:o,info:l}=Rd(t,!1,Fd());this.world=o,this.info=l,a.add(o.group),o.onEvent=null,this.sky=Xh(r),a.add(this.sky),this.water=Yh(r,o.waterY),a.add(this.water),this.scenery=zd(a,this.meta.key,l,o),this.poolMeshes=[];for(let d of o.pools){let x=Wd(d),y=x.material.uniforms;y.fogC.value.set(r.fog),y.fogN.value=r.fogNear,y.fogF.value=r.fogFar,y.skyTop.value.set(r.top),y.skyHor.value.set(r.horizon);let p=Xd(d);a.add(x,p),this.poolMeshes.push({wm:x,cm:p,pl:d})}if(this.cars=[],this.drive=null,this.lookT=0,this.nearCar=null,this.hornCd=0,this.skidT=0,l.cars){for(let d of l.cars){let x=$d(d.id);x.rotation.order="YXZ",x.position.set(d.x,d.y||0,d.z),x.rotation.y=d.yaw,a.add(x);let y=qd(d.id,d.x,d.z,d.yaw);y.y=d.y||0,this.cars.push({st:y,mesh:x})}this.skyG=0;try{this.racerOk=localStorage.getItem("ph_racer")==="1"}catch{this.racerOk=!1}this.applyFree(),s.multi&&pt.pendingCars&&(this.onCars(pt.pendingCars),pt.pendingCars=null)}a.add(new rs(r.hemiSky,r.hemiGround,r.hemiI));let c=this.sun=new as(r.sun,r.sunI);this.sunDir=new B(...r.sunPos).normalize().multiplyScalar(90),c.castShadow=ae.shadows,c.shadow.mapSize.set(Dn?1024:2048,Dn?1024:2048);let h=c.shadow.camera;h.left=-40,h.right=40,h.top=40,h.bottom=-40,h.near=5,h.far=220,c.shadow.bias=-3e-4,c.shadow.normalBias=.04,a.add(c,c.target),this.particles=new Ra(600),a.add(this.particles.points),this.particles.setScale(vn.domElement.height),this.ambient=new Ca(this.meta.key,320),a.add(this.ambient.points),this.remotes=new Map;let u=e.findIndex(d=>d.id===n);this.slot=Math.max(0,u);let f=e[this.slot]||{name:"Player",char:0};this.me={body:Cd(),model:new ds(f.char),name:f.name,char:f.char},a.add(this.me.model.group),this.me.model.group.rotation.order="YXZ",this.me.tag=$l(f.name,_i[f.char].color),this.me.tag.position.set(0,this.me.model.height+.7,0),this.me.model.group.add(this.me.tag),e.forEach((d,x)=>{d.id!==n&&this.remotes.set(d.id,new La(d,a))}),this.spawn(this.slot),this.buildProgress(),this.buildBoxes(),document.body.classList.add("in-race"),ft("hud-level").textContent=this.meta.name,ft("hud").classList.remove("hidden"),ft("hud-hint").classList.remove("fade"),this.hintT=8,this.setShadows(ae.shadows),pr(t),tc(!1),this.pos=this.me.body}setShadows(t){this.sun.castShadow=t}spawnPoint(t){return[(t-1.5)*3.6,0,this.info.spawn.z]}spawn(t){let[e,n,s]=this.spawnPoint(t);Zl(this.me.body,e,n+.02,s,Math.PI),this.cpCur=null,this.cpIdx=0}buildProgress(){let t=document.querySelector("#hud-progress .track");t.querySelectorAll(".dot").forEach(n=>n.remove()),this.dots=new Map;let e=(n,s)=>{let r=document.createElement("div");r.className="dot"+(s?" me":""),r.style.background=_i[n.char].color,r.innerHTML=`<em>${n.name.replace(/[<>&]/g,"")}</em>`,t.appendChild(r),this.dots.set(n.id,r)};this.players.forEach(n=>e(n,n.id===this.localId))}now(){return this.multi?pt.net.now():performance.now()}look(t,e){this.camYaw-=t*.0024,this.camPitch=fn(this.camPitch+e*.0021,-.15,1.2),this.lookT=1.6}update(t){let e=this.me.body,n=this.world;this.levelTime=(this.now()-this.t0)/1e3;let s=this.levelTime;if(n.update(s,t),n.carry(e),e.yawOff&&(e.yaw+=e.yawOff,e.yawOff=0),s<0){let g=Math.ceil(-s);g!==this.lastCount&&g<=3&&(this.lastCount=g,this.count(String(g)),Ut.tick())}else this.phase==="countdown"&&(this.phase="race",this.count("GO!"),Ut.go(),this.lastCount=0,this.multi&&setTimeout(()=>{Q===this&&!this.over&&this.toast(Dn?"Tap BAT to bonk rivals!":"Press B or click to swing the BAT!")},1400),this.cars.length&&setTimeout(()=>{Q===this&&!this.over&&!this.drive&&this.toast("\u{1F697} Follow the CAR STATION signs to drive!")},this.multi?4200:1600));let r=s>=0&&!this.over,a=0,o=0;(ze.has("KeyW")||ze.has("ArrowUp"))&&a++,(ze.has("KeyS")||ze.has("ArrowDown"))&&a--,(ze.has("KeyD")||ze.has("ArrowRight"))&&o++,(ze.has("KeyA")||ze.has("ArrowLeft"))&&o--,ze.has("KeyQ")&&(this.camYaw+=1.9*t),ze.has("KeyE")&&(this.camYaw-=1.9*t),(Ve.x||Ve.y)&&(o+=Ve.x,a+=Ve.y);let l=Math.sin(this.camYaw),c=Math.cos(this.camYaw),h=-l*a+c*o,u=-c*a-l*o,f=Math.hypot(h,u);f>1&&(h/=f,u/=f);let d={mx:r?h:0,mz:r?u:0,jumpPressed:r&&Si.jump,jumpHeld:r&&(ze.has("Space")||Ve.jump),divePressed:r&&Si.dive};Si.jump=!1,Si.dive=!1;let x=Math.max(1,Math.ceil(t/(1/90))),y=t/x,p=!1;if(this.drive)this.updateDrive(t,r),e.events.length=0;else for(let g=0;g<x;g++)Id(n,e,y,d),d.jumpPressed=!1,d.divePressed=!1,e.events.length&&(p=this.events(e)||p,e.events.length=0);if(r&&!this.drive){let g=n.checkHazards(e,s);g&&Aa(e,g.nx,g.nz,g.pow)&&(Ut.hit(),this.particles.emit(e.x,e.y+.9,e.z,26,{color:"#ffffff",speed:5,up:3,life:.5,size:.3}),this.particles.emit(e.x,e.y+.9,e.z,14,{color:"#ffd23f",speed:7,up:4,life:.4,size:.25}))}this.drive||this.updateBat(t,e),this.updatePowerups(t,e),this.drive||(this.softCollide(e),this.softCars(e,r)),this.checkpoints(e),!this.finished&&s>=0&&e.z<this.info.finishZ&&e.y>this.info.finishY-3&&Math.abs(e.x)<16&&this.onLocalFinish(),e.grounded&&!e.stun&&!this.drive&&!(e.swim>.3)&&(this.stepDist+=Math.hypot(e.vx,e.vz)*t,this.stepDist>2.4&&(this.stepDist=0,Math.hypot(e.vx,e.vz)>3&&(Ut.step(),this.particles.emit(e.x,e.y+.05,e.z,2,{color:"#ffffff",speed:.8,up:.8,life:.35,size:.22,gravity:1}))));let m=this.me.model,S=m.group,A=e.swim>.3?fn((e.swim-.3)/.4,0,1):0;if(this.drive?this.seatModel(S,this.drive):(S.position.set(e.x,e.y,e.z),S.rotation.y=e.yaw,S.rotation.x=A*.55*fn(Math.hypot(e.vx,e.vz)/3,.25,1),S.scale.setScalar(1)),m.update(t,{speed:this.drive?0:Math.hypot(e.vx,e.vz),grounded:this.drive||A>0?!0:e.grounded,vy:this.drive?0:e.vy,stun:this.drive?0:e.stun,dive:this.drive?0:e.dive,celebrate:this.finished||this.over&&this.winnerSelf,swing:this.swingT,shield:e.shield>0,leader:this.leaderId===this.localId,mega:this.swingMega&&this.swingT>0,landed:p}),this.tagScale(this.me.tag,S.position,.85),this.multi){this.leaderId=this.findLeader();for(let g of this.remotes.values())g.leader=g.id===this.leaderId,g.update(g.snaps.length?g.renderTime():0,t),this.tagScale(g.tag,g.model.group.position,1),g.flags&64&&Math.random()<.6&&this.particles.emit(g.x,g.y+.3,g.z,1,{color:"#5fc2ff",speed:1,up:.5,life:.35,size:.35});if(this.sendT+=t,this.sendT>=.033){this.sendT=0;let g=(e.grounded?1:0)|(e.stun>0?2:0)|(e.dive>0?4:0)|(this.finished?8:0)|(this.swingT>0?16:0)|(e.shield>0?32:0)|(this.fx.turbo>0?64:0)|(this.swingMega&&this.swingT>0?128:0)|(this.drive?256|this.drive.st.id<<9:0)|(e.swim>.4&&!this.drive?4096:0);pt.net.send({t:"s",x:+e.x.toFixed(2),y:+e.y.toFixed(2),z:+e.z.toFixed(2),r:+e.yaw.toFixed(2),a:g,sp:+Math.min(99,Math.hypot(e.vx,e.vz)).toFixed(1),ts:Math.round(pt.net.now()),rs:this.rs})}}this.updateCars(t,r),this.updateCamera(t),this.updateLights(),this.water.material.uniforms.time.value=performance.now()/1e3,this.water.position.x=this.camera.position.x,this.water.position.z=this.camera.position.z,this.sky.position.copy(this.camera.position),this.scenery.update(s,this.camera.position),this.ambient.update(performance.now()/1e3,this.camera.position),this.particles.update(t),this.hud(t)}events(t){let e=!1;for(let n of t.events)if(n==="jump")Ut.jump(),this.particles.emit(t.x,t.y+.05,t.z,5,{color:"#ffffff",speed:1.5,up:1,life:.35,size:.25,gravity:2});else if(n==="land")Ut.land(t.landSpeed),e=!0,this.particles.emit(t.x,t.y+.05,t.z,Math.min(14,5+t.landSpeed*.4),{color:"#ffffff",speed:2.4,up:1.4,life:.45,size:.3,gravity:3});else if(n==="bounce")Ut.bounce(),e=!0,this.particles.emit(t.x,t.y+.1,t.z,18,{rainbow:!0,speed:3,up:2,life:.6,size:.3});else if(n==="dive")Ut.dive();else if(n==="splash"){Ut.splash();let s=t.swim>0&&t.waterSurf,r=Ia[this.meta.key],a=s?"#ffffff":r.water==="lava"?"#ff9a2a":r.water==="grid"?"#d11cff":"#bfeaff";this.particles.emit(t.x,(s?t.waterSurf:this.world.waterY)+.2,t.z,s?34:40,{color:a,speed:4,up:s?6:9,life:.9,size:.45,gravity:16,spread:.6})}else n==="stroke"?(Ut.jump(),this.particles.emit(t.x,t.waterSurf+.1,t.z,10,{color:"#ffffff",speed:2,up:3,life:.6,size:.3,gravity:10})):n==="fell"&&this.onFell();return e}seatModel(t,e){let n=e.st,s=e.mesh.userData.seat;t.position.set(n.x+Math.sin(n.yaw)*s.z,n.y+s.y,n.z+Math.cos(n.yaw)*s.z),t.rotation.y=n.yaw,t.rotation.x=0,t.scale.setScalar(.8)}nearestFreeCar(t){if(t.stun>0||t.y>1.5||t.swim>.3)return null;let e=null,n=4.6;for(let s of this.cars){if(s.st.driver!==-1&&s!==this.drive||Zn[s.st.id].racer&&!this.racerOk||Math.abs(t.y-s.st.y)>3)continue;let r=Math.hypot(t.x-s.st.x,t.z-s.st.z);r<n&&(n=r,e=s)}return e}toggleCar(){if(this.over||this.finished||this.levelTime<0||this.menuOpen||!this.cars.length)return;let t=this.me.body;if(this.drive){let e=this.drive,n=e.st;if(Math.abs(n.speed)>5){this.toast("Slow down to get out!");return}if(n.y>1.2){this.toast(this.racerOk?"Not up here - stop on the RACER GARAGE plaza to swap cars":"Finish the SKY SPEEDWAY to win a RACER!");return}let s=Math.cos(n.yaw),r=-Math.sin(n.yaw);Zl(t,n.x+s*2.4,.05,n.z+r*2.4,n.yaw),t.hitCd=.3,n.vx=n.vz=n.speed=0,n.driver=-1,n.parked=!0,this.drive=null,document.body.classList.remove("driving"),Jh(),Ut.door(),this.g_g(this.me.model.group),this.multi&&pt.net.send({t:"carpark",c:n.id,x:+n.x.toFixed(2),y:+n.y.toFixed(2),z:+n.z.toFixed(2),r:+n.yaw.toFixed(3)}),this.camYaw=n.yaw+Math.PI,this.camInit=!1}else{let e=this.nearestFreeCar(t);if(!e)return;this.drive=e,e.st.driver=this.localId,e.st.parked=!1,t.vx=t.vz=t.vy=0,t.grounded=!0,document.body.classList.add("driving"),document.body.classList.remove("near-car"),Hd(),Ut.door(),Ut.vroom(),this.camPitch=.3,this.camYaw=e.st.yaw+Math.PI,this.toast(Zn[e.st.id].name.toUpperCase()+"!  "+(Dn?"use the joystick to drive, tap the door to get out":"W/S drive \u2022 A/D steer \u2022 C get out"))}}g_g(t){t.scale.setScalar(1),t.rotation.x=0}skyGates(t){let e=this.info.sky;if(!e||t.y<e.y-4||this.skyG>=e.gates.length)return;let n=this.skyG,s=e.gates[n],r=n===1;if(Math.abs(t.x-s.x)<(r?4:s.w)&&Math.abs(t.z-s.z)<(r?s.w:4))if(this.skyG++,Ut.checkpoint(),this.particles.emit(t.x,t.y+1.5,t.z,24,{color:n===e.gates.length-1?"#ff3b3b":"#7cff3d",speed:6,up:5,life:.8,size:.4}),n===e.gates.length-1){this.racerOk=!0,this.applyFree();try{localStorage.setItem("ph_racer","1")}catch{}Ut.win(),this.toast("\u{1F3C1} SKY SPEEDWAY CLEARED! RED RACERS UNLOCKED & the sky road is now obstacle-free! Stop on the RACER GARAGE plaza and press "+(Dn?"the red car button":"R"))}else this.toast("SKY GATE "+(n+1)+" / "+(e.gates.length-1)+"  \u2713")}applyFree(){this.info.track&&(this.info.track.free=!!this.racerOk),this.world&&this.world.skyObst&&(this.world.skyObst.visible=!this.racerOk)}garageSpot(t){let e=this.info.sky;return!!e&&t.y>e.y-3&&Math.hypot(t.x-e.garage.x,t.z-e.garage.z)<e.garage.r}swapRacer(){if(!this.drive||this.over||this.menuOpen)return;let t=this.drive,e=t.st,n=this.info.sky;if(Zn[e.id].racer){this.toast("You already drive a RACER!");return}if(!this.racerOk){this.toast("Finish the SKY SPEEDWAY to unlock the RACERS!");return}if(!this.garageSpot(e)){this.toast("Drive to the RACER GARAGE (end of the sky road) to swap");return}if(Math.abs(e.speed)>5){this.toast("Slow down first!");return}let s=null,r=22;for(let a of this.cars){if(!Zn[a.st.id].racer||a.st.driver!==-1&&a!==t)continue;let o=Math.hypot(e.x-a.st.x,e.z-a.st.z);o<r&&(r=o,s=a)}if(!s){this.toast("All 4 racers are taken - wait for one!");return}e.vx=e.vz=e.speed=0,e.driver=-1,e.parked=!0,this.multi&&pt.net.send({t:"carpark",c:e.id,x:+e.x.toFixed(2),y:+e.y.toFixed(2),z:+e.z.toFixed(2),r:+e.yaw.toFixed(3)}),this.drive=s,s.st.driver=this.localId,s.st.parked=!1,s.st.vx=s.st.vz=s.st.speed=0,Ut.door(),Ut.vroom(),this.shake=.3,this.camYaw=s.st.yaw+Math.PI,this.toast("\u{1F3CE} RACER!  Top speed 150 km/h \u2022 big horn on "+(Dn?"the horn button":"H"))}updateDrive(t,e){let n=this.drive,s=n.st,r=this.me.body,a=0,o=0,l=!1;if(e&&((ze.has("KeyW")||ze.has("ArrowUp"))&&a++,(ze.has("KeyS")||ze.has("ArrowDown"))&&a--,(ze.has("KeyD")||ze.has("ArrowRight"))&&o++,(ze.has("KeyA")||ze.has("ArrowLeft"))&&o--,l=ze.has("Space"),Ve.x||Ve.y)){let f=Math.sin(this.camYaw),d=Math.cos(this.camYaw),x=-f*Ve.y+d*Ve.x,y=-d*Ve.y-f*Ve.x,p=Math.min(1,Math.hypot(x,y));if(p>.12){let m=Math.hypot(x,y)||1;x/=m,y/=m;let S=x*Math.sin(s.yaw)+y*Math.cos(s.yaw),A=-x*Math.cos(s.yaw)+y*Math.sin(s.yaw);S>-.35?(a+=Math.min(1,p*1.25)*(.45+.55*Math.max(0,S)),o+=S<.2?Math.sign(A||1):Math.max(-1,Math.min(1,A*2.4))):(a-=Math.min(1,p*1.25),o+=Math.max(-1,Math.min(1,A*2)))}}let c=this.cars.filter(f=>f!==n).map(f=>f.st),h="",u={gas:fn(a,-1,1),steer:fn(o,-1,1),hb:l};for(let f=0;f<2;f++)h=Zd(s,t/2,u,this.info.track,c,Math.max(0,this.levelTime))||h;if(h==="bump"&&(Ut.land(18),this.particles.emit(s.x,.8,s.z,12,{color:"#ffd23f",speed:4,up:3,life:.4,size:.25}),this.shake=Math.max(this.shake||0,.25)),h==="crash"&&(Ut.land(34),this.particles.emit(s.x,.9,s.z,26,{color:"#ffb347",speed:7,up:5,life:.6,size:.35}),this.shake=Math.max(this.shake||0,Math.min(1,.4+(s.crash||0)*.04)),s.crash=0),r.x=s.x,r.y=s.y,r.z=s.z,r.vx=s.vx,r.vz=s.vz,r.vy=0,r.grounded=!0,r.ground=null,r.yaw=s.yaw,r.stun=0,Gd(Math.abs(s.speed)/Zn[s.id].max,a>0),this.skyGates(s),this.hornCd-=t,this.skidT-=t,s.drift>.55&&Math.abs(s.speed)>8){this.skidT<=0&&(this.skidT=.25,Ut.skid());for(let f of[-1,1])this.particles.emit(s.x-Math.sin(s.yaw)*1.5+Math.cos(s.yaw)*f*.9,.25,s.z-Math.cos(s.yaw)*1.5-Math.sin(s.yaw)*f*.9,1,{color:"#e8e8e8",speed:1.2,up:1.2,life:.5,size:.5,gravity:-.5})}s.boost>0&&Math.random()<.8&&this.particles.emit(s.x-Math.sin(s.yaw)*2.2,.5,s.z-Math.cos(s.yaw)*2.2,1,{color:"#ffb347",speed:2,up:1,life:.35,size:.4})}honk(){if(this.drive&&this.hornCd<=0){let t=Zn[this.drive.st.id].racer;this.hornCd=t?.9:.4,t?Ut.honkBig():Ut.honk(),t&&(this.shake=Math.max(this.shake||0,.12))}}onCars(t){for(let e of Object.keys(t||{})){let n=this.cars[+e],s=t[e];!n||!s||n===this.drive||(n.st.x=+s.x,n.st.z=+s.z,n.st.y=+s.y||0,n.st.yaw=+s.r,n.mesh.position.set(n.st.x,n.st.y,n.st.z),n.mesh.rotation.y=n.st.yaw)}}softCars(t,e){if(!(!e||this.finished))for(let n of this.cars){if(n===this.drive)continue;let s=n.st,r=Zn[s.id],a=t.x-s.x,o=t.z-s.z;if(a*a+o*o>40||Math.abs(t.y-s.y)>2.5)continue;let l=Math.sin(s.yaw),c=Math.cos(s.yaw),h=a*l+o*c,u=-a*c+o*l,f=r.hl+.45,d=r.hw+.45;if(Math.abs(h)>=f||Math.abs(u)>=d)continue;if(Math.abs(s.speed)>6&&t.hitCd<=0){let p=Math.sign(s.speed)||1,m=l*p+a*0,S=c*p;m+=-c*Math.sign(u||1)*.5,S+=l*Math.sign(u||1)*.5;let A=Math.hypot(m,S)||1;if(Aa(t,m/A,S/A,15)){this.bonked("HIT BY A CAR!","",t);continue}}let x=f-Math.abs(h),y=d-Math.abs(u);if(x<y){let p=Math.sign(h||1)*x;t.x+=l*p,t.z+=c*p}else{let p=Math.sign(u||1)*y;t.x+=-c*p,t.z+=l*p}}}updateCars(t,e){var o;this.lastDt=t;let n=this.me.body,s=performance.now()/1e3;for(let l of this.cars)l!==this.drive&&(l.st.driver=-1,l.st.speed=0,l.st.vx=l.st.vz=0);let r=[];for(let l of this.remotes.values()){let c=l.model.group;if(c.rotation.order="YXZ",!!l.has)if(l.flags&256){let h=this.cars[l.flags>>9&7];if(h&&h!==this.drive){let u=h.st,f=(l.yaw-((o=u._py)!=null?o:l.yaw)+Math.PI*3)%(Math.PI*2)-Math.PI;u.driver=l.id,u.parked=!1,u.x=l.x,u.z=l.z;{let d=u.y;u.y=l.y||0,u.pitch+=((Math.abs(l.speed)>1?Math.atan2(u.y-d,Math.max(.01,Math.abs(l.speed)*t)):0)-u.pitch)*Math.min(1,t*8)}u.speed=l.speed,u.vx=Math.sin(l.yaw)*l.speed,u.vz=Math.cos(l.yaw)*l.speed,u._py=l.yaw,u.steer+=(fn(-f/Math.max(t,.008)*.45,-1,1)-u.steer)*Math.min(1,t*8),u.yaw=l.yaw,this.seatModel(c,h),this.tagScale(l.tag,c.position,1)}}else c.scale.setScalar(1),c.rotation.x=l.flags&4096?.55:0,l.flags&4096&&r.push([l.x,l.z,.35+Math.min(1,l.speed/8)*.65])}n.swim>.3&&!this.drive&&r.push([n.x,n.z,.35+Math.min(1,Math.hypot(n.vx,n.vz)/8)*.65]),n.swim>.3&&!this.drive&&Math.hypot(n.vx,n.vz)>2&&Math.random()<.5&&this.particles.emit(n.x,n.waterSurf+.08,n.z,1,{color:"#ffffff",speed:1.2,up:1.6,life:.5,size:.28,gravity:6,spread:.5});for(let l of this.poolMeshes){let c=l.wm.material.uniforms;c.time.value=s,l.cm.material.uniforms.time.value=s;for(let h=0;h<4;h++){let u=r[h],f=c.ag.value[h];u?f.set(u[0],u[1],u[2]):f.set(0,0,0)}}{let l=!1;for(let h of this.poolMeshes){let u=h.pl,f=this.camera.position;f.x>u.x0&&f.x<u.x1&&f.z>u.z0&&f.z<u.z1&&f.y<u.surf&&(l=!0)}let c=ft("uw");c&&c.classList.contains("on")!==l&&c.classList.toggle("on",l)}for(let l of this.cars)l.mesh.position.set(l.st.x,l.st.y,l.st.z),l.mesh.rotation.y=l.st.yaw,Jd(l.mesh,l.st,t);let a=!this.drive&&e&&!this.menuOpen&&this.nearestFreeCar(n);!!a!==document.body.classList.contains("near-car")&&document.body.classList.toggle("near-car",!!a);{let l=!!this.drive&&this.racerOk&&!Zn[this.drive.st.id].racer&&this.garageSpot(this.drive.st)&&Math.abs(this.drive.st.speed)<5;l!==document.body.classList.contains("sky-swap")&&document.body.classList.toggle("sky-swap",l)}if(this.drive){let l=ft("car-speed");if(l){let c=Math.round(Math.abs(this.drive.st.speed)*3.6);l.firstElementChild.textContent!==String(c)&&(l.firstElementChild.textContent=c)}}}onFell(){let t=this.me.body,e=this.cpCur,n=(this.slot-1)*1.6,s,r,a;if(e)s=fn(e.x+n,e.x-e.w/2+1.5,e.x+e.w/2-1.5),r=e.y+.05,a=e.spawn[2];else{let l=this.spawnPoint(this.slot);s=l[0],r=l[1]+.02,a=l[2]}Zl(t,s,r,a,Math.PI),this.rs++,Ut.respawn();let o=ft("flash");o.classList.add("on"),setTimeout(()=>o.classList.remove("on"),60),this.particles.emit(s,r+.8,a,30,{rainbow:!0,speed:3,up:3,life:.8,size:.3}),this.camInit=!1,this.camYaw=0}checkpoints(t){let e=this.world.checkpoints;for(;this.cpIdx<e.length&&t.z<e[this.cpIdx].z&&t.y>e[this.cpIdx].y-2.5&&Math.abs(t.x-e[this.cpIdx].x)<e[this.cpIdx].w/2+3;)this.cpCur=e[this.cpIdx],this.cpIdx++,Ut.checkpoint(),this.toast("CHECKPOINT!"),this.particles.emit(t.x,t.y+1,t.z,24,{color:"#ffd23f",speed:3,up:5,life:.8,size:.3})}softCollide(t){if(this.finished)return;let e=me.R*2+.06;for(let n of this.remotes.values()){if(!n.has||n.flags&8)continue;let s=t.x-n.x,r=t.z-n.z,a=t.y-n.y;if(Math.abs(a)>me.H*.8)continue;let o=Math.hypot(s,r);if(o>=e)continue;let l,c;if(o>.001)l=s/o,c=r/o;else{let p=t.yaw*7+1;l=Math.cos(p),c=Math.sin(p)}let h=e-o;t.x+=l*h*.62,t.z+=c*h*.62;{let p=Math.sin(t.yaw),m=Math.cos(t.yaw);if(Math.hypot(t.vx,t.vz)>1&&-(p*l+m*c)>.3){let A=-c,g=l,E=p*A+m*g;Math.abs(E)<.3&&(E=-m*A+p*g||1),E=Math.sign(E),t.x+=A*E*h*.55,t.z+=g*E*h*.55}}let u=n.vx||0,f=n.vz||0,d=(t.vx-u)*l+(t.vz-f)*c;if(this.multi&&d<-1.5){let p=performance.now();n.shoveAt>p-80||(n.shoveAt=p,pt.net.send({t:"shove",to:n.id,nx:+(-l).toFixed(3),nz:+(-c).toFixed(3),p:+Math.min(12,-d).toFixed(1)}))}let x=performance.now(),y=!(n.lastContact>x-150);if(n.lastContact=x,d<0&&y){let p=-1.7*d*.5;t.vx+=l*p,t.vz+=c*p,p>2.5&&(t.noCtrl=Math.max(t.noCtrl,.16)),n.flags&4&&-d>7&&t.hitCd<=0&&Aa(t,l,c,11)?this.bonked("TACKLED!",n.name||"",t):-d>6&&t.hitCd<=0&&(Ut.land(6),this.particles.emit(t.x-l*.4,t.y+.9,t.z-c*.4,8,{color:"#ffffff",speed:3,up:2,life:.3,size:.25}))}}}bonked(t,e,n){Ut.bonk(),this.toast(t+(e?"  \u2022 "+e:"")),this.particles.emit(n.x,n.y+1,n.z,22,{color:"#ffffff",speed:6,up:3,life:.5,size:.3}),this.particles.emit(n.x,n.y+1,n.z,14,{color:"#ffd23f",speed:8,up:4,life:.45,size:.28})}swing(){return!this.multi||this.over||this.finished||this.levelTime<0||this.batCd>0||this.me.body.stun>0?!1:(this.swingMega=this.fx.mega>0,this.swingMega&&this.fx.mega--,this.batCd=1.1,this.swingT=.001,this.batPending=!0,Ut.swing(),!0)}updateBat(t,e){this.batCd>0&&(this.batCd-=t),this.swingT>0&&(this.swingT+=t/.42,e.stun>0?(this.swingT=0,this.batPending=!1):this.batPending&&this.swingT>=.55&&(this.batPending=!1,this.batHit(e)),this.swingT>=1&&(this.swingT=0))}batHit(t){let e=Math.sin(t.yaw),n=Math.cos(t.yaw);for(let s of this.remotes.values()){if(!s.has||s.flags&8)continue;let r=s.x-t.x,a=s.z-t.z,o=s.y-t.y,l=Math.hypot(r,a);if(l>(this.swingMega?4.4:2.9)||Math.abs(o)>1.7||l<.001||(r*e+a*n)/l<.1)continue;let c=e*.7+r/l*.3,h=n*.7+a/l*.3,u=Math.hypot(c,h)||1;c/=u,h/=u,pt.net.send({t:"bat",to:s.id,nx:+c.toFixed(3),nz:+h.toFixed(3),p:this.swingMega?2:1}),Ut.bonk(),this.toast("BONK!  \u2022 "+(s.name||"")),this.particles.emit(s.x,s.y+1,s.z,24,{color:"#ffd23f",speed:7,up:4,life:.5,size:.3}),this.particles.emit(s.x,s.y+1,s.z,14,{color:"#ffffff",speed:5,up:3,life:.4,size:.25})}}onShove(t){let e=this.me.body;if(this.over||this.finished||this.levelTime<0||e.shield>0)return;let n=fn(+t.p||0,0,12),s=+t.nx,r=+t.nz;!Number.isFinite(s)||!Number.isFinite(r)||(e.x+=s*n*.05,e.z+=r*n*.05,e.vx+=s*n*.12,e.vz+=r*n*.12)}onBat(t){let e=this.me.body;if(this.over||this.finished||this.levelTime<0)return;let n=(this.players.find(r=>r.id===t.from)||{}).name||"";if(e.hitCd=0,e.shield>0){this.toast("SHIELD BLOCKED!"),Ut.pickup();return}let s=t.p===2;Aa(e,t.nx,t.nz,s?22:15)&&(e.vy=s?11:9,e.stun=s?1:.75,this.bonked(s?"MEGA BONK!":"BONKED!",n,e))}buildBoxes(){this.boxes=[];let t=[],e=(s,r,a)=>[-4,0,4].forEach(o=>t.push({x:s+o,y:a+1.35,z:r}));e(0,-10,0);let n=1e9;for(let s of this.world.checkpoints)Math.abs(s.z-n)<12||(n=s.z,e(s.x,s.z-5,s.y));if(!i.boxAssets){let s=document.createElement("canvas");s.width=s.height=128;let r=s.getContext("2d"),a=r.createLinearGradient(0,0,128,128);a.addColorStop(0,"#ffe45e"),a.addColorStop(1,"#ff8a1a"),r.fillStyle=a,r.fillRect(0,0,128,128),r.strokeStyle="#fff",r.lineWidth=8,r.strokeRect(6,6,116,116),r.fillStyle="#fff",r.strokeStyle="#7a3500",r.lineWidth=6,r.font="bold 92px Arial",r.textAlign="center",r.textBaseline="middle",r.strokeText("?",64,70),r.fillText("?",64,70);let o=new gn(s);o.colorSpace=Ce,i.boxAssets={geo:new Ae(.95,.95,.95),mat:new he({map:o,emissive:"#ff9a00",emissiveIntensity:.55,roughness:.35})}}for(let s of t){let r=new nt(i.boxAssets.geo,i.boxAssets.mat);r.position.set(s.x,s.y,s.z),r.castShadow=!0,this.scene.add(r),this.boxes.push({...s,mesh:r,respawn:0})}}findLeader(){if(this.players.length<2||this.levelTime<4)return-1;let t=this.localId,e=this.finished?1e5:-this.me.body.z;for(let n of this.remotes.values()){if(!n.has)continue;let s=n.flags&8?1e5:-n.z;s>e+.5&&(e=s,t=n.id)}return t}pickup(t,e){t.respawn=9,t.mesh.visible=!1,Ut.pickup();let n=this.multi?["turbo","turbo","turbo","jump","jump","shield","shield","mega","mega","mega"]:["turbo","jump","shield"],s=e||n[Math.random()*n.length|0],r=this.fx,a=this.me.body;return s==="turbo"?(r.turbo=5,this.toast("\u{1F680} TURBO!")):s==="jump"?(r.jump=7,this.toast("\u{1F998} SUPER JUMP!")):s==="shield"?(r.shield=8,this.toast("\u{1F6E1}\uFE0F SHIELD!")):(r.mega=2,this.toast("\u{1F3CF} MEGA BAT x2!")),this.particles.emit(a.x,a.y+1,a.z,26,{rainbow:!0,speed:4,up:4,life:.7,size:.32}),s}updatePowerups(t,e){let n=performance.now()/1e3,s=this.fx;for(let a of this.boxes){if(a.respawn>0){a.respawn-=t,a.respawn<=0&&(a.mesh.visible=!0);continue}a.mesh.rotation.y+=t*2,a.mesh.rotation.x=Math.sin(n*1.5+a.x)*.25,a.mesh.position.y=a.y+Math.sin(n*2.5+a.x)*.15,!(this.finished||this.over||this.levelTime<0)&&Math.abs(e.x-a.x)<1.3&&Math.abs(e.z-a.z)<1.3&&e.y<a.y+.8&&e.y+me.H>a.y-.5&&this.pickup(a)}for(let a of["turbo","jump","shield"])s[a]>0&&(s[a]=Math.max(0,s[a]-t));e.speedMul=s.turbo>0?1.4:1,e.jumpMul=s.jump>0?1.3:1,e.shield=s.shield,s.turbo>0&&Math.hypot(e.vx,e.vz)>3&&Math.random()<.7&&this.particles.emit(e.x,e.y+.3,e.z,1,{color:"#5fc2ff",speed:1,up:.5,life:.35,size:.35});let r=["turbo","jump","shield"].map(a=>s[a]>0?a+Math.ceil(s[a]):"").join("|")+"|"+s.mega;if(r!==this.fxSig){this.fxSig=r;let a=ft("hud-fx");if(!a)return;a.innerHTML="";let o=(l,c)=>{let h=document.createElement("div");h.className="fx",h.textContent=l+" "+c,a.appendChild(h)};s.turbo>0&&o("\u{1F680}",Math.ceil(s.turbo)+"s"),s.jump>0&&o("\u{1F998}",Math.ceil(s.jump)+"s"),s.shield>0&&o("\u{1F6E1}\uFE0F",Math.ceil(s.shield)+"s"),s.mega>0&&o("\u{1F3CF}","x"+s.mega)}}onLocalFinish(){this.finished=!0,this.finishTime=Math.max(0,this.levelTime),Ut.finish();let t=this.info.finishZ;this.particles.emit(0,this.info.finishY+6,t,120,{rainbow:!0,speed:9,up:10,life:1.8,size:.5,gravity:7,spread:10}),this.particles.emit(-9,this.info.finishY+1,t,40,{rainbow:!0,speed:4,up:12,life:1.4,size:.4,gravity:8}),this.particles.emit(9,this.info.finishY+1,t,40,{rainbow:!0,speed:4,up:12,life:1.4,size:.4,gravity:8}),this.multi?this.toast("FINISHED!"):this.endSingle(!1)}endSingle(t){if(this.over)return;this.over=!0,this.winnerSelf=!t;let e=-this.info.finishZ,n=fn(-this.me.body.z/e,0,1),s="";if(!t){let a=this.finishTime,o=ep(this.level);!o||a<o?(localStorage.setItem("ph_best_"+this.level,String(a)),s=o?"NEW BEST TIME!":"First clear!"):s=`Best: ${ic(o)}`}let r=[{place:1,name:this.me.name,char:this.me.char,win:!t,tm:t?`${Math.round(n*100)}% of the track`:ic(this.finishTime),self:!0}];setTimeout(()=>pt.showResults({title:t?"TIME'S UP!":"YOU DID IT!",sub:t?"You ran out of time. Try again!":s,rows:r,single:!0,win:!t}),t?300:1400),tc(!0),t?Ut.lose():Ut.win()}onFin(t){this.finishedMap.set(t.id,t.place);let e=this.players.find(n=>n.id===t.id);t.id===this.localId?this.toast(`${Kh(t.place)} PLACE!`):(this.toast(`${e?e.name:"Player"} finished ${Kh(t.place)}!`),Ut.checkpoint())}onEnd(t){this.over=!0;let e=t.winnerId===this.localId;this.winnerSelf=e,tc(!0),e?Ut.win():Ut.lose();let n=t.results.map(r=>({place:r.place,name:r.name,char:r.char,win:r.id===t.winnerId,self:r.id===this.localId,tm:r.finished?ic(r.time):`${Math.round(r.progress*100)}% of the track`})),s=t.results[0];setTimeout(()=>pt.showResults({title:e?"YOU WIN!":`${s?s.name:"Nobody"} WINS!`,sub:t.reason==="time"?"Time's up - the nearest player to the finish gate wins!":"First to the finish gate wins!",rows:n,single:!1,win:e}),900)}addRemote(t){this.remotes.has(t.id)||(this.players.push(t),this.remotes.set(t.id,new La(t,this.scene)),this.buildProgress(),this.toast(t.name+" joined the race!"))}removeRemote(t){let e=this.remotes.get(t);if(e){e.dispose(this.scene),this.remotes.delete(t);let n=this.dots.get(t);n&&n.remove()}}tagScale(t,e,n){let s=e.distanceTo(this.camera.position),r=fn(s*.07,1,5.2)*n;t.scale.set(2.8*r,.7*r,1),t.visible=s<260}updateCamera(t){let e=this.me.body,n=Math.cos(this.camPitch),s=Math.sin(this.camPitch),r=Math.hypot(e.vx,e.vz);this.camera.fov=ms(this.camera.fov,62+fn(r-10,0,12)*.9,Math.min(1,t*4)),this.camera.updateProjectionMatrix();let a=this.camDist;if(this.drive){let u=this.drive.st;this.lookT-=t,a=9.2+Math.min(4,Math.abs(u.speed)*.12),this.lookT<=0&&(this.camYaw=iu(this.camYaw,u.yaw+Math.PI,1-Math.exp(-3.2*t)),this.camPitch+=(.28-this.camPitch)*(1-Math.exp(-2*t)))}let o=e.x,l=e.y+(this.drive?1.1:1.35),c=e.z;this.camInit||(this.camTarget.set(o,l,c),this.camInit=!0);let h=1-Math.exp(-14*t);if(this.camTarget.x+=(o-this.camTarget.x)*h,this.camTarget.z+=(c-this.camTarget.z)*h,this.camTarget.y+=(l-this.camTarget.y)*(1-Math.exp(-7*t)),this.camera.position.set(this.camTarget.x+Math.sin(this.camYaw)*n*a,this.camTarget.y+s*a+.4,this.camTarget.z+Math.cos(this.camYaw)*n*a),this.shake>.01){let u=this.shake*.5;this.camera.position.x+=(Math.random()-.5)*u,this.camera.position.y+=(Math.random()-.5)*u*.7,this.camera.position.z+=(Math.random()-.5)*u,this.shake*=Math.exp(-7*(this.lastDt||.016))}else this.shake=0;this.camera.lookAt(this.camTarget.x,this.camTarget.y+.2,this.camTarget.z)}updateLights(){let t=this.camTarget;this.sun.position.set(t.x+this.sunDir.x,t.y+this.sunDir.y,t.z+this.sunDir.z),this.sun.target.position.copy(t)}count(t){let e=ft("hud-count");e.textContent=t,e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop")}toast(t){let e=ft("hud-toast");e.textContent=t,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}rank(){var s;let t=this.me.body,e=1,n=(s=this.finishedMap.get(this.localId))!=null?s:this.finished&&!this.multi?1:null;if(n)return n;for(let r of this.remotes.values())(this.finishedMap.get(r.id)||r.has&&r.z<t.z-.5)&&e++;return e}hud(t){if(this.hudT+=t,this.hintT>0&&(this.hintT-=t,this.hintT<=0&&ft("hud-hint").classList.add("fade")),this.hudT<.066)return;this.hudT=0;let e=this.levelTime,n=Math.max(0,Math.floor(e)),s=ft("hud-timer");s.textContent=`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`,s.classList.remove("low"),ft("hud-hint").classList.toggle("single",!this.multi),document.body.classList.toggle("single",!this.multi),ft("hud-rank").textContent=this.multi?Kh(this.rank())+" / "+this.players.length:`${Math.max(0,Math.round(fn(-this.me.body.z/-this.info.finishZ,0,1)*100))}%`;let r=-this.info.finishZ,a=(c,h)=>{let u=this.dots.get(c);u&&(u.style.left=fn(-h/r,0,1)*100+"%")};a(this.localId,this.me.body.z);for(let c of this.remotes.values())a(c.id,c.has?c.z:0);let o=ft("click-hint"),l=!this.over&&!this.menuOpen&&document.pointerLockElement!==qi;l!==o.classList.contains("show")&&o.classList.toggle("show",l);{let c=ft("t-bat");c&&c.classList.toggle("cd",this.batCd>0)}this.multi&&(ft("hud-net").textContent=`ping ${Math.round(pt.net.rtt)} ms`)}render(){vn.render(this.scene,this.camera)}destroy(){$h(),Jh();{let t=ft("uw");t&&t.classList.remove("on")}document.body.classList.remove("sky-swap"),document.body.classList.remove("driving"),document.body.classList.remove("near-car"),document.body.classList.remove("in-race"),document.body.classList.remove("single"),ft("pause").classList.add("hidden"),this.menuOpen=!1,ft("hud").classList.add("hidden"),ft("hud-count").textContent="",ft("hud-toast").classList.remove("show");{let t=ft("hud-fx");t&&(t.innerHTML="")}for(let t of this.remotes.values())t.dispose(this.scene);this.me.model.dispose(),this.scenery.dispose(),this.scene.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(n=>{n.map&&n.map.dispose(),n.dispose()})}),this.scene.clear()}},K_=["title","profile","levels","mp","lobby","results","help"];function Nn(i){for(let t of K_){let e=ft("s-"+t);e.classList.toggle("active",t===i),e.classList.remove("hidden")}pt.screen=i}var jd=0;function Da(i){let t=ft("toast-global");t.textContent=i,t.classList.add("show"),clearTimeout(jd),jd=setTimeout(()=>t.classList.remove("show"),3200)}function np(i,t){i.innerHTML="",_i.forEach(e=>{let n=document.createElement("div");n.className="card",n.dataset.id=e.id,n.innerHTML=`<img alt="${e.name}" src="${Qh[e.id]||""}"><b style="color:${e.color}">${e.name}</b>${t.small?"":`<span>${e.tag}</span>`}`,n.onclick=()=>t.onPick(e.id),i.appendChild(n)})}function eu(i,t,e){i.querySelectorAll(".card").forEach(n=>{let s=+n.dataset.id;n.classList.toggle("sel",s===t),n.classList.toggle("taken",e&&e.has(s)&&s!==t)})}function ip(i,t){i.innerHTML="",Sa.forEach(e=>{let n=document.createElement("div");n.className="card",n.dataset.id=e.id,n.style.background=`linear-gradient(160deg, ${e.colors[0]}cc, ${e.colors[1]}cc)`;let s=ep(e.id);n.innerHTML=`<div><h4>${e.id+1}. ${e.name}</h4><div class="stars">${"\u2605".repeat(e.stars)}${"\u2606".repeat(5-e.stars)}</div></div><div class="blurb">${e.blurb}</div><div class="meta">${e.sub} &bull; no time limit${s?" &bull; best "+ic(s):""}</div>`,n.onclick=()=>t.onPick(e.id),i.appendChild(n)})}function j_(){let i=new va({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});i.setSize(256,320,!1),i.outputColorSpace=Ce,i.toneMapping=ir,i.setClearColor(0,0);let t=new pi;t.add(new rs("#ffffff","#b9a4ff",1.6));let e=new as("#ffffff",2.6);e.position.set(3,5,6),t.add(e);let n=new us(i);t.environment=n.fromScene(new Ma,.04).texture,t.environmentIntensity=.7;let s=new $e(30,256/320,.1,50);s.position.set(0,1.25,6.6),s.lookAt(0,.98,0);let r=[];for(let a=0;a<_i.length;a++){let o=new ds(a);o.group.rotation.y=-.35,t.add(o.group),o.update(.016,{speed:0,grounded:!0,vy:0,stun:0,dive:0,celebrate:!1}),i.render(t,s),r.push(i.domElement.toDataURL("image/png")),t.remove(o.group),o.dispose()}return n.dispose(),i.dispose(),i.forceContextLoss(),r}function Pa(i){pt.mode=i,ft("inp-name").value=pt.name,ft("profile-title").textContent="Choose your player",np(ft("char-cards"),{onPick:t=>{pt.char=t,eu(ft("char-cards"),t),Ze.sel=t,Ut.select(),Ze.burst(t)}}),eu(ft("char-cards"),pt.char),Ze.setTitle(pt.char),Ze.mode="profile",Ze.sel=pt.char,Nn("profile")}function Q_(){let i=ft("inp-name").value.trim().replace(/[<>&"']/g,"").slice(0,14);return i||(i=["Haris","Speedy","Bouncy","Zippy"][Math.floor(Math.random()*4)]+Math.floor(Math.random()*90+10)),pt.name=i,localStorage.setItem("ph_name",i),localStorage.setItem("ph_char",String(pt.char)),i}function sp(){ip(ft("level-cards"),{onPick:i=>{Ut.go(),Na(i)}}),Nn("levels")}function Na(i){Mi(),Q&&(Q.destroy(),Q=null),pt.level=i,Q=new rc(i,[{id:1,name:pt.name,char:pt.char}],1,{multi:!1,t0:performance.now()+3600}),gs(),Nn("none"),ft("s-results").classList.add("hidden"),Ua()}pt.showResults=function(i){let t=ft("res-list");t.innerHTML="",i.rows.forEach(s=>{let r=document.createElement("div");r.className="res-row"+(s.win?" win":"");let a=_i[s.char];r.innerHTML=`<div class="place">${s.place<=3?q_[s.place-1]:s.place}</div><div class="nm"><i style="background:${a.color}"></i>${s.name.replace(/[<>&]/g,"")}${s.self?" <small>(you)</small>":""}</div><div class="tm">${s.tm}</div>`,t.appendChild(r)}),ft("res-title").textContent=i.title,ft("res-sub").textContent=i.sub||"";let e=ft("b-res-retry"),n=ft("b-res-next");if(i.single)e.style.display="",e.textContent="RETRY",n.style.display="",n.textContent=pt.level<Sa.length-1?"NEXT LEVEL":"LEVELS",n.disabled=!1,pt.resMode="single";else{e.style.display="none";let s=pt.room&&pt.room.hostId===pt.myId;n.style.display="",n.textContent=s?"BACK TO LOBBY":"WAITING FOR HOST...",n.disabled=!s,pt.resMode="multi"}Fa(),Nn("results")};ft("b-res-menu").onclick=()=>{Ut.back(),su()};ft("b-res-retry").onclick=()=>{Ut.click(),Na(pt.level)};ft("b-res-next").onclick=()=>{Ut.click(),pt.resMode==="single"?pt.level<Sa.length-1?Na(pt.level+1):(Q&&Q.destroy(),Q=null,sp()):pt.net.send({t:"again"})};function su(){Q&&(Q.destroy(),Q=null),pt.net&&pt.room&&pt.net.send({t:"leave"}),pt.room=null,Fa(),Ze.setTitle(),Nn("title")}async function tv(){if(pt.net&&pt.net.connected)return pt.net;let i=new ec;return i.on("joined",t=>{pt.myId=t.id}),i.on("lobby",nv),i.on("err",t=>{ft("mp-status").textContent=t.msg,t.retry&&pt.screen==="mp"?(ac(),sc=setTimeout(()=>{pt.screen==="mp"&&!pt.room&&nu("join")},2e3)):Da(t.msg)}),i.on("go",iv),i.on("s",t=>{if(Q&&Q.multi){let e=Q.remotes.get(t.id);e&&e.push(t)}}),i.on("fin",t=>{Q&&Q.multi&&Q.onFin(t)}),i.on("bat",t=>{Q&&Q.multi&&Q.onBat(t)}),i.on("carpark",t=>{Q&&Q.multi&&Q.onCars({[t.c]:t})}),i.on("cars",t=>{Q&&Q.multi?Q.onCars(t.cars):pt.pendingCars=t.cars}),i.on("shove",t=>{Q&&Q.multi&&Q.onShove(t)}),i.on("end",t=>{Q&&Q.multi&&Q.onEnd(t)}),i.on("left",t=>{Q&&Q.multi&&Q.removeRemote(t.id)}),i.on("close",()=>{Da("Disconnected from server"),Q&&(Q.destroy(),Q=null),pt.room=null,Fa(),Ze.setTitle(),Nn("title")}),await i.connect(),pt.net=i,i}function ev(){ft("mp-status").textContent="",Ze.setTitle(pt.char),Nn("mp")}var sc=null;function ac(){sc&&(clearTimeout(sc),sc=null)}async function nu(i){Mi(),ac();let t=ft("mp-status");t.textContent="Connecting...";try{let e=await tv();i==="create"?e.send({t:"create",name:pt.name,char:pt.char}):e.send({t:"join",name:pt.name,char:pt.char}),t.textContent=i==="create"?"":"Looking for a room..."}catch{t.textContent="Could not connect to the game server. Is it running?",Da("Could not connect to the game server")}}function nv(i){ac();let t=!pt.room,e=pt.room;if(pt.room=i,Q&&Q.multi){for(let n of i.players)n.id!==pt.myId&&!Q.remotes.has(n.id)&&(i.phase==="race"||i.phase==="countdown")&&Q.addRemote(n);if(i.phase==="lobby"&&pt.screen!=="lobby")Q.destroy(),Q=null,Fa(),Qd(),Nn("lobby"),pr(6);else if(pt.screen==="results"){let n=i.hostId===pt.myId;pt.resMode==="multi"&&(ft("b-res-next").textContent=n?"BACK TO LOBBY":"WAITING FOR HOST...",ft("b-res-next").disabled=!n)}return}(t||pt.screen==="mp"||pt.screen==="profile"||pt.screen==="title")&&(i.phase==="lobby"||i.phase==="results")&&(Nn("lobby"),pr(6)),e&&i.players.length>e.players.length&&Ut.join(),Qd()}function Qd(){let i=pt.room;if(!i)return;let t=i.players.find(r=>r.id===pt.myId);t&&(pt.char=t.char),ft("lobby-code").textContent=i.code,ft("lobby-count").textContent=`${i.players.length}/${4}`;let e=ft("lobby-players");e.innerHTML="";for(let r=0;r<4;r++){let a=i.players[r],o=document.createElement("div");o.className="slot"+(a?"":" empty"),o.innerHTML=a?`<i style="background:${_i[a.char].color}"></i><span>${a.name.replace(/[<>&]/g,"")}</span>${a.id===i.hostId?"<span>\u{1F451}</span>":""}${a.id===pt.myId?'<span class="you">YOU</span>':""}`:'<i style="background:#888"></i><span>Waiting for player...</span>',e.appendChild(o)}let n=new Set(i.players.filter(r=>r.id!==pt.myId).map(r=>r.char));np(ft("lobby-chars"),{small:!0,onPick:r=>{n.has(r)||(Ut.select(),pt.net.send({t:"char",char:r}))}}),eu(ft("lobby-chars"),pt.char,n);let s=i.hostId===pt.myId;ip(ft("lobby-levels"),{onPick:r=>{s&&(Ut.click(),pt.net.send({t:"level",level:r}))}}),ft("lobby-levels").querySelectorAll(".card").forEach(r=>{r.classList.toggle("sel",+r.dataset.id===i.level),s||(r.style.cursor="default")}),ft("lobby-level-note").textContent=s?"(you choose)":"(host chooses)",ft("b-start").disabled=!s,ft("b-start").firstElementChild.textContent=s?"START RACE":"WAITING FOR HOST",ft("lobby-hint").textContent=s?i.players.length<2?"Tell friends to tap MULTIPLAYER on the same link. You can also start alone.":"Everyone ready? Hit start!":"The host will start the race.",Ze.setLobby(i.players)}function iv(i){Mi(),Q&&(Q.destroy(),Q=null);let t=pt.room;if(!t)return;let e=i.order.map(n=>t.players.find(s=>s.id===n)).filter(Boolean);pt.level=i.level,Q=new rc(i.level,e,pt.myId,{multi:!0,t0:i.t0}),gs(),Nn("none"),Ua()}function Ua(){if(Q&&!Q.over&&document.pointerLockElement!==qi)try{let i=qi.requestPointerLock();i&&i.catch&&i.catch(()=>{})}catch{}}function Fa(){document.pointerLockElement&&document.exitPointerLock()}document.addEventListener("pointerlockchange",()=>{let i=document.pointerLockElement===qi;i?jh=!0:jh&&Q&&!Q.over&&!Q.menuOpen&&!Dn&&au(),i||(jh=!1),ft("click-hint").classList.toggle("show",!!Q&&!Q.over&&!Q.menuOpen&&!i)});var jh=!1,oc=!1;qi.addEventListener("mousedown",i=>{oc=!0,Q&&!Q.over&&(i.button===0&&Q.multi&&document.pointerLockElement===qi&&!Q.menuOpen?Q.swing():Ua())});window.addEventListener("mouseup",()=>{oc=!1});window.addEventListener("mousemove",i=>{Q&&!Q.over&&(document.pointerLockElement===qi||oc)&&Q.look(i.movementX,i.movementY)});ft("click-hint").addEventListener("click",Ua);window.addEventListener("keydown",i=>{if(i.target&&i.target.tagName==="INPUT"){i.code==="Enter"&&(pt.screen==="profile"?ft("b-profile-next").click():pt.screen==="mp"&&ft("b-join").click());return}Q&&!Q.over&&["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight"].includes(i.code)&&i.preventDefault(),!i.repeat&&(ze.add(i.code),i.code==="Space"&&(Si.jump=!0),(i.code==="ShiftLeft"||i.code==="ShiftRight"||i.code==="KeyF")&&(Si.dive=!0),i.code==="KeyM"&&ru(),i.code==="KeyB"&&Q&&!Q.menuOpen&&Q.swing(),i.code==="KeyC"&&Q&&!Q.over&&!i.repeat&&Q.toggleCar(),i.code==="KeyH"&&Q&&!Q.menuOpen&&Q.honk(),i.code==="KeyR"&&Q&&!Q.over&&!i.repeat&&Q.swapRacer(),(i.code==="Escape"||i.code==="KeyP")&&Q&&!Q.over&&(Q.menuOpen?lc():au()))});window.addEventListener("keyup",i=>ze.delete(i.code));window.addEventListener("blur",()=>{ze.clear(),oc=!1});window.addEventListener("resize",gs);function ru(){pt.muted=!pt.muted,kd(pt.muted),ft("b-sound").textContent="SOUND: "+(pt.muted?"OFF":"ON"),ap()}function rp(){ft("p-gfx").textContent="\u{1F5A5} GFX: "+(ae.low?"LOW":"AUTO")}function ap(){ft("p-sound").textContent="\u{1F50A} SOUND: "+(pt.muted?"OFF":"ON")}function au(){!Q||Q.over||Q.menuOpen||(Q.menuOpen=!0,Q.multi||(Q.paused=!0,Q.pauseAt=performance.now()),Fa(),ze.clear(),Ve.x=Ve.y=0,Ve.jump=!1,ft("p-title").textContent=Q.multi?"Menu":"Paused",ft("p-info").textContent=Q.meta.name+(Q.multi?"  \u2022  race goes on!":""),rp(),ft("p-retry").classList.toggle("hidden",Q.multi),ft("p-full").classList.toggle("hidden",!(document.documentElement&&document.documentElement.requestFullscreen)),ap(),ft("pause").classList.remove("hidden"),ft("click-hint").classList.remove("show"),Ut.click())}function lc(){!Q||!Q.menuOpen||(Q.paused&&(Q.t0+=performance.now()-Q.pauseAt,Q.paused=!1),Q.menuOpen=!1,ft("pause").classList.add("hidden"),Ua())}ft("b-menu").addEventListener("click",()=>Q&&Q.menuOpen?lc():au());ft("p-resume").onclick=()=>{Ut.click(),lc()};ft("p-sound").onclick=()=>{Mi(),ru(),Ut.click()};ft("p-gfx").onclick=()=>{ae.low=!ae.low;try{localStorage.setItem("ph_low",ae.low?"1":"0")}catch{}Ut.click(),$_(),rp()};ft("p-full").onclick=()=>{let i=document,t=i.documentElement;try{!i.fullscreenElement&&t.requestFullscreen?t.requestFullscreen({navigationUI:"hide"}):i.exitFullscreen&&i.fullscreenElement&&i.exitFullscreen()}catch{}};ft("p-retry").onclick=()=>{Ut.click();let i=pt.level;ft("pause").classList.add("hidden"),Q&&(Q.menuOpen=!1),Na(i)};ft("p-quit").onclick=()=>{Ut.back(),ft("pause").classList.add("hidden"),su()};async function sv(){await Ud(),Ze=new tu;try{Qh=j_()}catch{Qh=["","","",""]}gs(),Ze.setTitle(),Nn("title"),ft("b-single").onclick=()=>{Mi(),pr(6),Ut.click(),Pa("single")},ft("b-multi").onclick=()=>{Mi(),pr(6),Ut.click(),Pa("multi")},ft("b-help").onclick=()=>{Mi(),Ut.click(),ft("s-help").classList.add("active")},ft("b-help-close").onclick=()=>{Ut.back(),ft("s-help").classList.remove("active")},ft("b-sound").onclick=()=>{Mi(),ru(),Ut.click()},ft("b-profile-back").onclick=()=>{Ut.back(),Ze.setTitle(),Nn("title")},ft("b-profile-next").onclick=()=>{Q_(),Ut.click(),pt.mode==="single"?sp():ev()},ft("b-levels-back").onclick=()=>{Ut.back(),Pa("single")},ft("b-mp-back").onclick=()=>{Ut.back(),ac(),Pa("multi")},ft("b-create").onclick=()=>{Ut.click(),nu("create")},ft("b-join").onclick=()=>{Ut.click(),nu("join")},ft("b-leave").onclick=()=>{Ut.back(),su()},ft("b-start").onclick=()=>{pt.room&&pt.room.hostId===pt.myId&&(Ut.click(),pt.net.send({t:"start"}))},ft("b-copy").onclick=async()=>{let n=`${location.origin}${location.pathname}?room=${pt.room?pt.room.code:""}`;try{await navigator.clipboard.writeText(n),Da("Invite link copied!")}catch{prompt("Copy this invite link:",n)}},new URLSearchParams(location.search).get("room")&&(Pa("multi"),Da("Pick your name & player, then CONTINUE and JOIN ROOM")),ft("loader").classList.add("done"),setTimeout(()=>ft("loader").remove(),600);let t=performance.now(),e=n=>{requestAnimationFrame(e);let s=Math.min(.05,(n-t)/1e3);t=n,Z_(s),Q?(Q.over&&Q.menuOpen&&lc(),Q.paused||Q.update(s),Q.render()):(Ze.update(s),vn.render(Ze.scene,Ze.camera))};requestAnimationFrame(e)}sv().catch(i=>{console.error(i);let t=document.querySelector("#loader p");t&&(t.textContent="Error: "+i.message)});window.__ph={app:pt,Remote:La,startSingle:i=>Na(i),keys:ze,press:Si,touch:Ve,get race(){return Q},get stage(){return Ze}};(function(){Dn&&document.body.classList.add("touch");let t=ft("touch"),e=ft("joy"),n=ft("joy-knob");if(!t||!e||!n)return;let s=56,r=null,a=null,o=0,l=0,c=0,h=0,u=(x,y)=>{for(let p of x)if(p.identifier===y)return p;return null};t.addEventListener("touchstart",x=>{x.preventDefault();for(let y of x.changedTouches)y.clientX<window.innerWidth*.5&&r===null?(r=y.identifier,o=y.clientX,l=y.clientY,e.style.left=o+"px",e.style.top=l+"px",e.classList.add("on"),n.style.transform="translate(-50%, -50%)"):a===null&&y.clientX>=window.innerWidth*.5&&(a=y.identifier,c=y.clientX,h=y.clientY)},{passive:!1}),t.addEventListener("touchmove",x=>{x.preventDefault();let y=r!==null?u(x.touches,r):null;if(y){let m=y.clientX-o,S=y.clientY-l,A=Math.hypot(m,S);A>s&&(m*=s/A,S*=s/A),n.style.transform=`translate(calc(-50% + ${m}px), calc(-50% + ${S}px))`;let g=m/s,E=S/s,b=Math.hypot(g,E),L=b<.14?0:(b-.14)/.86/b;Ve.x=g*L,Ve.y=-E*L}let p=a!==null?u(x.touches,a):null;p&&(Q&&!Q.over&&Q.look((p.clientX-c)*1.7,(p.clientY-h)*1.7),c=p.clientX,h=p.clientY)},{passive:!1});let f=x=>{for(let y of x.changedTouches)y.identifier===r&&(r=null,Ve.x=Ve.y=0,e.classList.remove("on")),y.identifier===a&&(a=null)};t.addEventListener("touchend",f),t.addEventListener("touchcancel",f);let d=(x,y,p)=>{let m=ft(x);if(!m)return;m.addEventListener("touchstart",A=>{A.preventDefault(),A.stopPropagation(),y()},{passive:!1});let S=A=>{A.preventDefault(),A.stopPropagation(),p&&p()};m.addEventListener("touchend",S,{passive:!1}),m.addEventListener("touchcancel",S,{passive:!1})};d("t-jump",()=>{Q&&!Q.over&&(Si.jump=!0,Ve.jump=!0)},()=>{Ve.jump=!1}),d("t-dive",()=>{Q&&!Q.over&&(Si.dive=!0)}),d("t-bat",()=>{Q&&!Q.over&&!Q.menuOpen&&Q.swing()}),d("c-horn",()=>{Q&&Q.honk()}),d("b-racer",()=>{Q&&Q.swapRacer()}),d("b-car",()=>{Q&&Q.toggleCar()}),d("b-exit",()=>{Q&&Q.toggleCar()});for(let x of["b-car","b-exit","b-racer"]){let y=ft(x);y&&y.addEventListener("click",()=>{Q&&(x==="b-racer"?Q.swapRacer():Q.toggleCar()),y.blur()})}})();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

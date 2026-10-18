(()=>{function ou(){return{hang:null,cd:0,tip:{}}}function au(i,t,e,n,s,r,o,a,l=!1){e.cd=Math.max(0,e.cd-s),e.pend=l?.9:Math.max(0,(e.pend||0)-s),!r&&!l&&(e.lock=!1),l&&(e.lock=!1);let c=e.tip;if(!e.hang){if(!(a&&(r||e.pend>0)&&!e.lock&&e.cd<=0&&t.stun<=0))return!1;for(let u of i.swings)if(i.swingTip(u,n,c),Math.hypot(c.x-t.x,c.y-(t.y+1.55),c.z-t.z)<3.4){e.hang={sw:u,ox:Math.max(-1,Math.min(1,t.x-u.x)),t:0},e.grabbed=!0,e.pend=0,t.vx=t.vz=t.vy=0,t.grounded=!1,t.inWater=!1,t.jumping=!1;break}if(!e.hang)return!1}let h=e.hang;h.t+=s,i.swingTip(h.sw,n,c);let f=l&&h.t>.3;if(!a||t.stun>0||o||f){let u=o?1.18:1;return t.x=h.sw.x+h.ox,t.z=c.z,t.y=c.y-1.65,t.vx=0,t.vz=c.vz*u,t.vy=c.vy*u+(o?7:1.5),t.grounded=!1,t.noCtrl=0,e.hang=null,e.cd=.45,e.lock=!0,e.released=o?"jump":"let go",!1}return t.x=h.sw.x+h.ox,t.z=c.z,t.y=c.y-1.65,t.vx=0,t.vz=c.vz,t.vy=c.vy,t.grounded=!1,t.yaw=c.vz<0?Math.PI:0,!0}var Gu=0,Ph=1,Vu=2;var Co=1,_l=2,yr=3,ts=0,ln=1,$e=2,gi=0,es=1,Pi=2,Lh=3,Dh=4,Wu=5;var Es=100,Xu=101,Yu=102,qu=103,Zu=104,$u=200,Ju=201,Ku=202,ju=203,Nh=204,zh=205,Qu=206,td=207,ed=208,nd=209,id=210,sd=211,rd=212,od=213,ad=214,Oa=0,Ba=1,Ha=2,tr=3,ka=4,Ga=5,Va=6,Wa=7,Ml=0,ld=1,cd=2,ei=0,Uh=1,Fh=2,Oh=3,vr=4,Bh=5,Hh=6,kh=7;var Gh=300,ns=301,bs=302,El=303,bl=304,Io=306,er=1e3,fi=1001,Xa=1002,un=1003,hd=1004;var Po=1005;var pn=1006,Sl=1007;var is=1008;var Pn=1009,Vh=1010,Wh=1011,_r=1012,wl=1013,ni=1014,Vn=1015,ii=1016,Tl=1017,Al=1018,Mr=1020,Xh=35902,Yh=35899,qh=1021,Zh=1022,Wn=1023,di=1026,ss=1027,Rl=1028,Cl=1029,rs=1030,Il=1031;var Pl=1033,Lo=33776,Do=33777,No=33778,zo=33779,Ll=35840,Dl=35841,Nl=35842,zl=35843,Ul=36196,Fl=37492,Ol=37496,Bl=37488,Hl=37489,Uo=37490,kl=37491,Gl=37808,Vl=37809,Wl=37810,Xl=37811,Yl=37812,ql=37813,Zl=37814,$l=37815,Jl=37816,Kl=37817,jl=37818,Ql=37819,tc=37820,ec=37821,nc=36492,ic=36494,sc=36495,rc=36283,oc=36284,Fo=36285,ac=36286;var Kr=2300,Ya=2301,Ua=2302,yh=2303,vh=2400,_h=2401,Mh=2402;var fd=3200;var Oo=0,ud=1,Li="",Fe="srgb",jr="srgb-linear",Qr="linear",Ae="srgb";var Fa=7680;var dd=519,pd=512,md=513,gd=514,lc=515,xd=516,yd=517,cc=518,vd=519,$h=35044,Er=35048;var Jh="300 es",Qn=2e3,nr=2001;function z0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function U0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function to(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _d(){let i=to("canvas");return i.style.display="block",i}var lu={},ir=null;function eo(...i){let t="THREE."+i.shift();ir?ir("log",t,...i):console.log(t,...i)}function Md(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ee(...i){i=Md(i);let t="THREE."+i.shift();if(ir)ir("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function se(...i){i=Md(i);let t="THREE."+i.shift();if(ir)ir("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ys(...i){let t=i.join(" ");t in lu||(lu[t]=!0,ee(...i))}function Ed(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var bd={[Oa]:Ba,[Ha]:Va,[ka]:Wa,[tr]:Ga,[Ba]:Oa,[Va]:Ha,[Wa]:ka,[Ga]:tr},pi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cu=1234567,qr=Math.PI/180,sr=180/Math.PI;function ui(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]+"-"+gn[t&255]+gn[t>>8&255]+"-"+gn[t>>16&15|64]+gn[t>>24&255]+"-"+gn[e&63|128]+gn[e>>8&255]+"-"+gn[e>>16&255]+gn[e>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function me(i,t,e){return Math.max(t,Math.min(e,i))}function Kh(i,t){return(i%t+t)%t}function F0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function O0(i,t,e){return i!==t?(e-i)/(t-i):0}function Zr(i,t,e){return(1-e)*i+e*t}function B0(i,t,e,n){return Zr(i,t,1-Math.exp(-e*n))}function H0(i,t=1){return t-Math.abs(Kh(i,t*2)-t)}function k0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function G0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function V0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function W0(i,t){return i+Math.random()*(t-i)}function X0(i){return i*(.5-Math.random())}function Y0(i){i!==void 0&&(cu=i);let t=cu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function q0(i){return i*qr}function Z0(i){return i*sr}function $0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function J0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function K0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function j0(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),f=r((t-n)/2),u=o((t-n)/2),d=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*f,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*f,a*c);break;case"ZXZ":i.set(l*f,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*d,a*h,a*c);break;default:ee("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function jn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ie(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Bo={DEG2RAD:qr,RAD2DEG:sr,generateUUID:ui,clamp:me,euclideanModulo:Kh,mapLinear:F0,inverseLerp:O0,lerp:Zr,damp:B0,pingpong:H0,smoothstep:k0,smootherstep:G0,randInt:V0,randFloat:W0,randFloatSpread:X0,seededRandom:Y0,degToRad:q0,radToDeg:Z0,isPowerOfTwo:$0,ceilPowerOfTwo:J0,floorPowerOfTwo:K0,setQuaternionFromProperEuler:j0,normalize:Ie,denormalize:jn},sf=class sf{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};sf.prototype.isVector2=!0;var Mt=sf,Un=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[o+0],d=r[o+1],m=r[o+2],y=r[o+3];if(f!==y||l!==u||c!==d||h!==m){let p=l*u+c*d+h*m+f*y;p<0&&(u=-u,d=-d,m=-m,y=-y,p=-p);let g=1-a;if(p<.9995){let E=Math.acos(p),S=Math.sin(E);g=Math.sin(g*E)/S,a=Math.sin(a*E)/S,l=l*g+u*a,c=c*g+d*a,h=h*g+m*a,f=f*g+y*a}else{l=l*g+u*a,c=c*g+d*a,h=h*g+m*a,f=f*g+y*a;let E=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=E,c*=E,h*=E,f*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[o],u=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+h*f+l*d-c*u,t[e+1]=l*m+h*u+c*f-a*d,t[e+2]=c*m+h*d+a*u-l*f,t[e+3]=h*m-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(r/2),u=l(n/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"YZX":this._x=u*h*f+c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f-u*d*m;break;case"XZY":this._x=u*h*f-c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f+u*d*m;break;default:ee("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},rf=class rf{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return qc.copy(this).projectOnVector(t),this.sub(qc)}reflect(t){return this.sub(qc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};rf.prototype.isVector3=!0;var O=rf,qc=new O,hu=new Un,of=class of{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],m=n[8],y=s[0],p=s[3],g=s[6],E=s[1],S=s[4],x=s[7],_=s[2],M=s[5],w=s[8];return r[0]=o*y+a*E+l*_,r[3]=o*p+a*S+l*M,r[6]=o*g+a*x+l*w,r[1]=c*y+h*E+f*_,r[4]=c*p+h*S+f*M,r[7]=c*g+h*x+f*w,r[2]=u*y+d*E+m*_,r[5]=u*p+d*S+m*M,r[8]=u*g+d*x+m*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,u=a*l-h*r,d=c*r-o*l,m=e*f+n*u+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return t[0]=f*y,t[1]=(s*c-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=d*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return ys("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zc.makeScale(t,e)),this}rotate(t){return ys("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zc.makeRotation(-t)),this}translate(t,e){return ys("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};of.prototype.isMatrix3=!0;var oe=of,Zc=new oe,fu=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uu=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Q0(){let i={enabled:!0,workingColorSpace:jr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ae&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ae&&(s.r=Qs(s.r),s.g=Qs(s.g),s.b=Qs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Li?Qr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ys("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ys("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[jr]:{primaries:t,whitePoint:n,transfer:Qr,toXYZ:fu,fromXYZ:uu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:t,whitePoint:n,transfer:Ae,toXYZ:fu,fromXYZ:uu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}}),i}var ye=Q0();function Ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var zs,qa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{zs===void 0&&(zs=to("canvas")),zs.width=t.width,zs.height=t.height;let s=zs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=zs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=to("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ai(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ai(e[n]/255)*255):e[n]=Ai(e[n]);return{data:e,width:t.width,height:t.height}}else return ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},tm=0,rr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=ui(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push($c(s[o].image)):r.push($c(s[o]))}else r=$c(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function $c(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?qa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ee("Texture: Unable to serialize Texture."),{})}var em=0,Jc=new O,Tn=class i extends pi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=fi,s=fi,r=pn,o=is,a=Wn,l=Pn,c=i.DEFAULT_ANISOTROPY,h=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=ui(),this.name="",this.source=new rr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jc).x}get height(){return this.source.getSize(Jc).y}get depth(){return this.source.getSize(Jc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ee(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ee(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case er:t.x=t.x-Math.floor(t.x);break;case fi:t.x=t.x<0?0:1;break;case Xa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case er:t.y=t.y-Math.floor(t.y);break;case fi:t.y=t.y<0?0:1;break;case Xa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=Gh;Tn.DEFAULT_ANISOTROPY=1;var af=class af{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],m=l[9],y=l[2],p=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-y)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+y)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,x=(d+1)/2,_=(g+1)/2,M=(h+u)/4,w=(f+y)/4,v=(m+p)/4;return S>x&&S>_?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=M/n,r=w/n):x>_?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=M/s,r=v/s):_<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(_),n=w/r,s=v/r),this.set(n,s,r,e),this}let E=Math.sqrt((p-m)*(p-m)+(f-y)*(f-y)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(p-m)/E,this.y=(f-y)/E,this.z=(u-h)/E,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this.w=me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this.w=me(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};af.prototype.isVector4=!0;var Ge=af,Za=class extends pi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ge(0,0,t,e),this.scissorTest=!1,this.viewport=new Ge(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Tn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new rr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},In=class extends Za{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},no=class extends Tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var $a=class extends Tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var vl=class vl{constructor(t,e,n,s,r,o,a,l,c,h,f,u,d,m,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,f,u,d,m,y,p)}set(t,e,n,s,r,o,a,l,c,h,f,u,d,m,y,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=f,g[14]=u,g[3]=d,g[7]=m,g[11]=y,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Us.setFromMatrixColumn(t,0).length(),r=1/Us.setFromMatrixColumn(t,1).length(),o=1/Us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=o*h,d=o*f,m=a*h,y=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+m*c,e[5]=u-y*c,e[9]=-a*l,e[2]=y-u*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,m=c*h,y=c*f;e[0]=u+y*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-m,e[6]=y+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,m=c*h,y=c*f;e[0]=u-y*a,e[4]=-o*f,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*h,e[9]=y-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,d=o*f,m=a*h,y=a*f;e[0]=l*h,e[4]=m*c-d,e[8]=u*c+y,e[1]=l*f,e[5]=y*c+u,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,d=o*c,m=a*l,y=a*c;e[0]=l*h,e[4]=y-u*f,e[8]=m*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*f+m,e[10]=u-y*f}else if(t.order==="XZY"){let u=o*l,d=o*c,m=a*l,y=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+y,e[5]=o*h,e[9]=d*f-m,e[2]=m*f-d,e[6]=a*h,e[10]=y*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(nm,t,im)}lookAt(t,e,n){let s=this.elements;return Nn.subVectors(t,e),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),Gi.crossVectors(n,Nn),Gi.lengthSq()===0&&(Math.abs(n.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),Gi.crossVectors(n,Nn)),Gi.normalize(),ca.crossVectors(Nn,Gi),s[0]=Gi.x,s[4]=ca.x,s[8]=Nn.x,s[1]=Gi.y,s[5]=ca.y,s[9]=Nn.y,s[2]=Gi.z,s[6]=ca.z,s[10]=Nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],m=n[2],y=n[6],p=n[10],g=n[14],E=n[3],S=n[7],x=n[11],_=n[15],M=s[0],w=s[4],v=s[8],b=s[12],A=s[1],P=s[5],L=s[9],D=s[13],R=s[2],C=s[6],z=s[10],F=s[14],K=s[3],V=s[7],J=s[11],Z=s[15];return r[0]=o*M+a*A+l*R+c*K,r[4]=o*w+a*P+l*C+c*V,r[8]=o*v+a*L+l*z+c*J,r[12]=o*b+a*D+l*F+c*Z,r[1]=h*M+f*A+u*R+d*K,r[5]=h*w+f*P+u*C+d*V,r[9]=h*v+f*L+u*z+d*J,r[13]=h*b+f*D+u*F+d*Z,r[2]=m*M+y*A+p*R+g*K,r[6]=m*w+y*P+p*C+g*V,r[10]=m*v+y*L+p*z+g*J,r[14]=m*b+y*D+p*F+g*Z,r[3]=E*M+S*A+x*R+_*K,r[7]=E*w+S*P+x*C+_*V,r[11]=E*v+S*L+x*z+_*J,r[15]=E*b+S*D+x*F+_*Z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],m=t[3],y=t[7],p=t[11],g=t[15],E=l*d-c*u,S=a*d-c*f,x=a*u-l*f,_=o*d-c*h,M=o*u-l*h,w=o*f-a*h;return e*(y*E-p*S+g*x)-n*(m*E-p*_+g*M)+s*(m*S-y*_+g*w)-r*(m*x-y*M+p*w)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],m=t[12],y=t[13],p=t[14],g=t[15],E=e*a-n*o,S=e*l-s*o,x=e*c-r*o,_=n*l-s*a,M=n*c-r*a,w=s*c-r*l,v=h*y-f*m,b=h*p-u*m,A=h*g-d*m,P=f*p-u*y,L=f*g-d*y,D=u*g-d*p,R=E*D-S*L+x*P+_*A-M*b+w*v;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/R;return t[0]=(a*D-l*L+c*P)*C,t[1]=(s*L-n*D-r*P)*C,t[2]=(y*w-p*M+g*_)*C,t[3]=(u*M-f*w-d*_)*C,t[4]=(l*A-o*D-c*b)*C,t[5]=(e*D-s*A+r*b)*C,t[6]=(p*x-m*w-g*S)*C,t[7]=(h*w-u*x+d*S)*C,t[8]=(o*L-a*A+c*v)*C,t[9]=(n*A-e*L-r*v)*C,t[10]=(m*M-y*x+g*E)*C,t[11]=(f*x-h*M-d*E)*C,t[12]=(a*b-o*P-l*v)*C,t[13]=(e*P-n*b+s*v)*C,t[14]=(y*S-m*_-p*E)*C,t[15]=(h*_-f*S+u*E)*C,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,u=r*c,d=r*h,m=r*f,y=o*h,p=o*f,g=a*f,E=l*c,S=l*h,x=l*f,_=n.x,M=n.y,w=n.z;return s[0]=(1-(y+g))*_,s[1]=(d+x)*_,s[2]=(m-S)*_,s[3]=0,s[4]=(d-x)*M,s[5]=(1-(u+g))*M,s[6]=(p+E)*M,s[7]=0,s[8]=(m+S)*w,s[9]=(p-E)*w,s[10]=(1-(u+y))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Us.set(s[0],s[1],s[2]).length(),a=Us.set(s[4],s[5],s[6]).length(),l=Us.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Zn.copy(this);let c=1/o,h=1/a,f=1/l;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=h,Zn.elements[5]*=h,Zn.elements[6]*=h,Zn.elements[8]*=f,Zn.elements[9]*=f,Zn.elements[10]*=f,e.setFromRotationMatrix(Zn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Qn,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),m,y;if(l)m=r/(o-r),y=o*r/(o-r);else if(a===Qn)m=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===nr)m=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Qn,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),d=-(n+s)/(n-s),m,y;if(l)m=1/(o-r),y=o/(o-r);else if(a===Qn)m=-2/(o-r),y=-(o+r)/(o-r);else if(a===nr)m=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};vl.prototype.isMatrix4=!0;var Se=vl,Us=new O,Zn=new Se,nm=new O(0,0,0),im=new O(1,1,1),Gi=new O,ca=new O,Nn=new O,du=new Se,pu=new Un,Fn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(me(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return du.makeRotationFromQuaternion(t),this.setFromRotationMatrix(du,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pu.setFromEuler(this),this.setFromQuaternion(pu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fn.DEFAULT_ORDER="XYZ";var io=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},sm=0,mu=new O,Fs=new Un,Mi=new Se,ha=new O,Fr=new O,rm=new O,om=new Un,gu=new O(1,0,0),xu=new O(0,1,0),yu=new O(0,0,1),vu={type:"added"},am={type:"removed"},Os={type:"childadded",child:null},Kc={type:"childremoved",child:null},nn=class i extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new O,e=new Fn,n=new Un,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new oe}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new io,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.premultiply(Fs),this}rotateX(t){return this.rotateOnAxis(gu,t)}rotateY(t){return this.rotateOnAxis(xu,t)}rotateZ(t){return this.rotateOnAxis(yu,t)}translateOnAxis(t,e){return mu.copy(t).applyQuaternion(this.quaternion),this.position.add(mu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gu,t)}translateY(t){return this.translateOnAxis(xu,t)}translateZ(t){return this.translateOnAxis(yu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ha.copy(t):ha.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Fr,ha,this.up):Mi.lookAt(ha,Fr,this.up),this.quaternion.setFromRotationMatrix(Mi),s&&(Mi.extractRotation(s.matrixWorld),Fs.setFromRotationMatrix(Mi),this.quaternion.premultiply(Fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(se("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vu),Os.child=t,this.dispatchEvent(Os),Os.child=null):se("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(am),Kc.child=t,this.dispatchEvent(Kc),Kc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vu),Os.child=t,this.dispatchEvent(Os),Os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,t,rm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,om,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};nn.DEFAULT_UP=new O(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yt=class extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}},lm={type:"move"},or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,n),g=this._getHandJoint(c,y);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new yt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},fa={h:0,s:0,l:0};function jc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ht=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ye.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ye.workingColorSpace){return this.r=t,this.g=e,this.b=n,ye.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ye.workingColorSpace){if(t=Kh(t,1),e=me(e,0,1),n=me(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=jc(o,r,t+1/3),this.g=jc(o,r,t),this.b=jc(o,r,t-1/3)}return ye.colorSpaceToWorking(this,s),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&ee("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ee("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);ee("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){let n=Sd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ee("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}copyLinearToSRGB(t){return this.r=Qs(t.r),this.g=Qs(t.g),this.b=Qs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return ye.workingToColorSpace(xn.copy(this),t),Math.round(me(xn.r*255,0,255))*65536+Math.round(me(xn.g*255,0,255))*256+Math.round(me(xn.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ye.workingColorSpace){ye.workingToColorSpace(xn.copy(this),e);let n=xn.r,s=xn.g,r=xn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ye.workingColorSpace){return ye.workingToColorSpace(xn.copy(this),e),t.r=xn.r,t.g=xn.g,t.b=xn.b,t}getStyle(t=Fe){ye.workingToColorSpace(xn.copy(this),t);let e=xn.r,n=xn.g,s=xn.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Vi),this.setHSL(Vi.h+t,Vi.s+e,Vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vi),t.getHSL(fa);let n=Zr(Vi.h,fa.h,e),s=Zr(Vi.s,fa.s,e),r=Zr(Vi.l,fa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new Ht;Ht.NAMES=Sd;var ar=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ht(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ri=class extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},$n=new O,Ei=new O,Qc=new O,bi=new O,Bs=new O,Hs=new O,_u=new O,th=new O,eh=new O,nh=new O,ih=new Ge,sh=new Ge,rh=new Ge,Ti=class i{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),$n.subVectors(t,e),s.cross($n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){$n.subVectors(s,e),Ei.subVectors(n,e),Qc.subVectors(t,e);let o=$n.dot($n),a=$n.dot(Ei),l=$n.dot(Qc),c=Ei.dot(Ei),h=Ei.dot(Qc),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(a,bi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return ih.setScalar(0),sh.setScalar(0),rh.setScalar(0),ih.fromBufferAttribute(t,e),sh.fromBufferAttribute(t,n),rh.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ih,r.x),o.addScaledVector(sh,r.y),o.addScaledVector(rh,r.z),o}static isFrontFacing(t,e,n,s){return $n.subVectors(n,e),Ei.subVectors(t,e),$n.cross(Ei).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $n.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),$n.cross(Ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Bs.subVectors(s,n),Hs.subVectors(r,n),th.subVectors(t,n);let l=Bs.dot(th),c=Hs.dot(th);if(l<=0&&c<=0)return e.copy(n);eh.subVectors(t,s);let h=Bs.dot(eh),f=Hs.dot(eh);if(h>=0&&f<=h)return e.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Bs,o);nh.subVectors(t,r);let d=Bs.dot(nh),m=Hs.dot(nh);if(m>=0&&d<=m)return e.copy(r);let y=d*c-l*m;if(y<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Hs,a);let p=h*m-d*f;if(p<=0&&f-h>=0&&d-m>=0)return _u.subVectors(r,s),a=(f-h)/(f-h+(d-m)),e.copy(s).addScaledVector(_u,a);let g=1/(p+y+u);return o=y*g,a=u*g,e.copy(n).addScaledVector(Bs,o).addScaledVector(Hs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},mi=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Jn):Jn.fromBufferAttribute(r,o),Jn.applyMatrix4(t.matrixWorld),this.expandByPoint(Jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ua.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ua.copy(n.boundingBox)),ua.applyMatrix4(t.matrixWorld),this.union(ua)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Jn),Jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Or),da.subVectors(this.max,Or),ks.subVectors(t.a,Or),Gs.subVectors(t.b,Or),Vs.subVectors(t.c,Or),Wi.subVectors(Gs,ks),Xi.subVectors(Vs,Gs),ds.subVectors(ks,Vs);let e=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-ds.z,ds.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,ds.z,0,-ds.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-ds.y,ds.x,0];return!oh(e,ks,Gs,Vs,da)||(e=[1,0,0,0,1,0,0,0,1],!oh(e,ks,Gs,Vs,da))?!1:(pa.crossVectors(Wi,Xi),e=[pa.x,pa.y,pa.z],oh(e,ks,Gs,Vs,da))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Si=[new O,new O,new O,new O,new O,new O,new O,new O],Jn=new O,ua=new mi,ks=new O,Gs=new O,Vs=new O,Wi=new O,Xi=new O,ds=new O,Or=new O,da=new O,pa=new O,ps=new O;function oh(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ps.fromArray(i,r);let a=s.x*Math.abs(ps.x)+s.y*Math.abs(ps.y)+s.z*Math.abs(ps.z),l=t.dot(ps),c=e.dot(ps),h=n.dot(ps);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var en=new O,ma=new Mt,cm=0,ke=class extends pi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$h,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ma.fromBufferAttribute(this,e),ma.applyMatrix3(t),this.setXY(e,ma.x,ma.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=jn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=jn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=jn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=jn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array),r=Ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var so=class extends ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ro=class extends ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var xe=class extends ke{constructor(t,e,n){super(new Float32Array(t),e,n)}},hm=new mi,Br=new O,ah=new O,Ci=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):hm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Br.subVectors(t,this.center);let e=Br.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Br,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ah.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Br.copy(t.center).add(ah)),this.expandByPoint(Br.copy(t.center).sub(ah))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},fm=0,Gn=new Se,lh=new nn,Ws=new O,zn=new mi,Hr=new mi,fn=new O,ze=class i extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(z0(t)?ro:so)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new oe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Gn.makeRotationFromQuaternion(t),this.applyMatrix4(Gn),this}rotateX(t){return Gn.makeRotationX(t),this.applyMatrix4(Gn),this}rotateY(t){return Gn.makeRotationY(t),this.applyMatrix4(Gn),this}rotateZ(t){return Gn.makeRotationZ(t),this.applyMatrix4(Gn),this}translate(t,e,n){return Gn.makeTranslation(t,e,n),this.applyMatrix4(Gn),this}scale(t,e,n){return Gn.makeScale(t,e,n),this.applyMatrix4(Gn),this}lookAt(t){return lh.lookAt(t),lh.updateMatrix(),this.applyMatrix4(lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];zn.setFromBufferAttribute(r),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&se('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(zn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Hr.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(zn.min,Hr.min),zn.expandByPoint(fn),fn.addVectors(zn.max,Hr.max),zn.expandByPoint(fn)):(zn.expandByPoint(Hr.min),zn.expandByPoint(Hr.max))}zn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)fn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(fn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)fn.fromBufferAttribute(a,c),l&&(Ws.fromBufferAttribute(t,c),fn.add(Ws)),s=Math.max(s,n.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&se('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){se("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new ke(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new O,l[v]=new O;let c=new O,h=new O,f=new O,u=new Mt,d=new Mt,m=new Mt,y=new O,p=new O;function g(v,b,A){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,b),f.fromBufferAttribute(n,A),u.fromBufferAttribute(r,v),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,A),h.sub(c),f.sub(c),d.sub(u),m.sub(u);let P=1/(d.x*m.y-m.x*d.y);isFinite(P)&&(y.copy(h).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(P),p.copy(f).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(P),a[v].add(y),a[b].add(y),a[A].add(y),l[v].add(p),l[b].add(p),l[A].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let v=0,b=E.length;v<b;++v){let A=E[v],P=A.start,L=A.count;for(let D=P,R=P+L;D<R;D+=3)g(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let S=new O,x=new O,_=new O,M=new O;function w(v){_.fromBufferAttribute(s,v),M.copy(_);let b=a[v];S.copy(b),S.sub(_.multiplyScalar(_.dot(b))).normalize(),x.crossVectors(M,b);let P=x.dot(l[v])<0?-1:1;o.setXYZW(v,S.x,S.y,S.z,P)}for(let v=0,b=E.length;v<b;++v){let A=E[v],P=A.start,L=A.count;for(let D=P,R=P+L;D<R;D+=3)w(t.getX(D+0)),w(t.getX(D+1)),w(t.getX(D+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,h=new O,f=new O;if(t)for(let u=0,d=t.count;u<d;u+=3){let m=t.getX(u+0),y=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,p),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)fn.fromBufferAttribute(t,e),fn.normalize(),t.setXYZ(e,fn.x,fn.y,fn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),d=0,m=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?d=l[y]*a.data.stride+a.offset:d=l[y]*h;for(let g=0;g<h;g++)u[m++]=c[d++]}return new ke(u,h,f)}if(this.index===null)return ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},oo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=$h,this.updateRanges=[],this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},wn=new O,lr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.applyMatrix4(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.applyNormalMatrix(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.transformDirection(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ie(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=jn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=jn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=jn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=jn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array),r=Ie(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){eo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ke(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){eo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ch=new O,um=new O,dm=new oe,Kn=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ch.subVectors(n,e).cross(um.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(ch),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||dm.getNormalMatrix(t),s=this.coplanarPoint(ch).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},pm=0,ti=class extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=es,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nh,this.blendDst=zh,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fa,this.stencilZFail=Fa,this.stencilZPass=Fa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ee(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ee(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ht().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Kn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Mt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Mt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},cr=class extends ti{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Xs,kr=new O,Ys=new O,qs=new O,Zs=new Mt,Gr=new Mt,wd=new Se,ga=new O,Vr=new O,xa=new O,Mu=new Mt,hh=new Mt,Eu=new Mt,ao=class extends nn{constructor(t=new cr){if(super(),this.isSprite=!0,this.type="Sprite",Xs===void 0){Xs=new ze;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new oo(e,5);Xs.setIndex([0,1,2,0,2,3]),Xs.setAttribute("position",new lr(n,3,0,!1)),Xs.setAttribute("uv",new lr(n,2,3,!1))}this.geometry=Xs,this.material=t,this.center=new Mt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&se('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ys.setFromMatrixScale(this.matrixWorld),wd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),qs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ys.multiplyScalar(-qs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;ya(ga.set(-.5,-.5,0),qs,o,Ys,s,r),ya(Vr.set(.5,-.5,0),qs,o,Ys,s,r),ya(xa.set(.5,.5,0),qs,o,Ys,s,r),Mu.set(0,0),hh.set(1,0),Eu.set(1,1);let a=t.ray.intersectTriangle(ga,Vr,xa,!1,kr);if(a===null&&(ya(Vr.set(-.5,.5,0),qs,o,Ys,s,r),hh.set(0,1),a=t.ray.intersectTriangle(ga,xa,Vr,!1,kr),a===null))return;let l=t.ray.origin.distanceTo(kr);l<t.near||l>t.far||e.push({distance:l,point:kr.clone(),uv:Ti.getInterpolation(kr,ga,Vr,xa,Mu,hh,Eu,new Mt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ya(i,t,e,n,s,r){Zs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Gr.x=r*Zs.x-s*Zs.y,Gr.y=s*Zs.x+r*Zs.y):Gr.copy(Zs),i.copy(t),i.x+=Gr.x,i.y+=Gr.y,i.applyMatrix4(wd)}var wi=new O,fh=new O,va=new O,_a=new O,lo=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wi.copy(this.origin).addScaledVector(this.direction,e),wi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){fh.copy(t).add(e).multiplyScalar(.5),va.copy(e).sub(t).normalize(),_a.copy(this.origin).sub(fh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(va),a=_a.dot(this.direction),l=-_a.dot(va),c=_a.lengthSq(),h=Math.abs(1-o*o),f,u,d,m;if(h>0)if(f=o*l-a,u=o*a-l,m=r*h,f>=0)if(u>=-m)if(u<=m){let y=1/h;f*=y,u*=y,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(fh).addScaledVector(va,u),d}intersectSphere(t,e){if(t.radius<0)return null;wi.subVectors(t.center,this.origin);let n=wi.dot(this.direction),s=wi.dot(wi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,wi)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=t.x-o.x,u=t.y-o.y,d=t.z-o.z,m=e.x-o.x,y=e.y-o.y,p=e.z-o.z,g=n.x-o.x,E=n.y-o.y,S=n.z-o.z,x=Math.abs(l),_=Math.abs(c),M=Math.abs(h),w,v,b,A,P,L,D,R,C,z,F,K;if(x>=_&&x>=M?(b=l,L=f,C=m,K=g,l>=0?(w=c,v=h,A=u,P=d,D=y,R=p,z=E,F=S):(w=h,v=c,A=d,P=u,D=p,R=y,z=S,F=E)):_>=M?(b=c,L=u,C=y,K=E,c>=0?(w=h,v=l,A=d,P=f,D=p,R=m,z=S,F=g):(w=l,v=h,A=f,P=d,D=m,R=p,z=g,F=S)):(b=h,L=d,C=p,K=S,h>=0?(w=l,v=c,A=f,P=u,D=m,R=y,z=g,F=E):(w=c,v=l,A=u,P=f,D=y,R=m,z=E,F=g)),b===0)return null;let V=w/b,J=v/b,Z=1/b,ot=A-V*L,mt=P-J*L,Yt=D-V*C,At=R-J*C,kt=z-V*K,U=F-J*K,H=kt*At-U*Yt,rt=ot*U-mt*kt,_t=Yt*mt-At*ot;if(s){if(H<0||rt<0||_t<0)return null}else if((H<0||rt<0||_t<0)&&(H>0||rt>0||_t>0))return null;let ft=H+rt+_t;if(ft===0)return null;let Y=Z*(H*L+rt*C+_t*K);return(ft>0?Y<0:Y>0)?null:this.at(Y/ft,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ae=class extends ti{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=Ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},bu=new Se,ms=new lo,Ma=new Ci,Su=new O,Ea=new O,ba=new O,Sa=new O,uh=new O,wa=new O,wu=new O,Ta=new O,k=class extends nn{constructor(t=new ze,e=new ae){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){wa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(uh.fromBufferAttribute(f,t),o?wa.addScaledVector(uh,h):wa.addScaledVector(uh.sub(e),h))}e.add(wa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(r),ms.copy(t.ray).recast(t.near),!(Ma.containsPoint(ms.origin)===!1&&(ms.intersectSphere(Ma,Su)===null||ms.origin.distanceToSquared(Su)>(t.far-t.near)**2))&&(bu.copy(r).invert(),ms.copy(t.ray).applyMatrix4(bu),!(n.boundingBox!==null&&ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ms)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,y=u.length;m<y;m++){let p=u[m],g=o[p.materialIndex],E=Math.max(p.start,d.start),S=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let x=E,_=S;x<_;x+=3){let M=a.getX(x),w=a.getX(x+1),v=a.getX(x+2);s=Aa(this,g,t,n,c,h,f,M,w,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let p=m,g=y;p<g;p+=3){let E=a.getX(p),S=a.getX(p+1),x=a.getX(p+2);s=Aa(this,o,t,n,c,h,f,E,S,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,y=u.length;m<y;m++){let p=u[m],g=o[p.materialIndex],E=Math.max(p.start,d.start),S=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let x=E,_=S;x<_;x+=3){let M=x,w=x+1,v=x+2;s=Aa(this,g,t,n,c,h,f,M,w,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let p=m,g=y;p<g;p+=3){let E=p,S=p+1,x=p+2;s=Aa(this,o,t,n,c,h,f,E,S,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function mm(i,t,e,n,s,r,o,a){let l;if(t.side===ln?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ts,a),l===null)return null;Ta.copy(a),Ta.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ta);return c<e.near||c>e.far?null:{distance:c,point:Ta.clone(),object:i}}function Aa(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Ea),i.getVertexPosition(l,ba),i.getVertexPosition(c,Sa);let h=mm(i,t,e,n,Ea,ba,Sa,wu);if(h){let f=new O;Ti.getBarycoord(wu,Ea,ba,Sa,f),s&&(h.uv=Ti.getInterpolatedAttribute(s,a,l,c,f,new Mt)),r&&(h.uv1=Ti.getInterpolatedAttribute(r,a,l,c,f,new Mt)),o&&(h.normal=Ti.getInterpolatedAttribute(o,a,l,c,f,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new O,materialIndex:0};Ti.getNormal(Ea,ba,Sa,u.normal),h.face=u,h.barycoord=f}return h}var co=class extends Tn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=un,h=un,f,u){super(null,o,a,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hr=class extends ke{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},$s=new Se,Tu=new Se,Ra=[],Au=new mi,gm=new Se,Wr=new k,Xr=new Ci,ho=class extends k{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new hr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,gm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new mi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$s),Au.copy(t.boundingBox).applyMatrix4($s),this.boundingBox.union(Au)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ci),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$s),Xr.copy(t.boundingSphere).applyMatrix4($s),this.boundingSphere.union(Xr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Wr.geometry=this.geometry,Wr.material=this.material,Wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xr.copy(this.boundingSphere),Xr.applyMatrix4(n),t.ray.intersectsSphere(Xr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,$s),Tu.multiplyMatrices(n,$s),Wr.matrixWorld=Tu,Wr.raycast(t,Ra);for(let o=0,a=Ra.length;o<a;o++){let l=Ra[o];l.instanceId=r,l.object=this,e.push(l)}Ra.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new hr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new co(new Float32Array(s*this.count),s,this.count,Rl,Vn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},gs=new Ci,xm=new Mt(.5,.5),Ca=new O,fr=class{constructor(t=new Kn,e=new Kn,n=new Kn,s=new Kn,r=new Kn,o=new Kn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],m=r[8],y=r[9],p=r[10],g=r[11],E=r[12],S=r[13],x=r[14],_=r[15];if(s[0].setComponents(c-o,d-h,g-m,_-E).normalize(),s[1].setComponents(c+o,d+h,g+m,_+E).normalize(),s[2].setComponents(c+a,d+f,g+y,_+S).normalize(),s[3].setComponents(c-a,d-f,g-y,_-S).normalize(),n)s[4].setComponents(l,u,p,x).normalize(),s[5].setComponents(c-l,d-u,g-p,_-x).normalize();else if(s[4].setComponents(c-l,d-u,g-p,_-x).normalize(),e===Qn)s[5].setComponents(c+l,d+u,g+p,_+x).normalize();else if(e===nr)s[5].setComponents(l,u,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(t){gs.center.set(0,0,0);let e=xm.distanceTo(t.center);return gs.radius=.7071067811865476+e,gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ca.x=s.normal.x>0?t.max.x:t.min.x,Ca.y=s.normal.y>0?t.max.y:t.min.y,Ca.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ca)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ur=class extends ti{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ru=new Se,Eh=new lo,Ia=new Ci,Pa=new O,dr=class extends nn{constructor(t=new ze,e=new ur){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(s),Ia.radius+=r,t.ray.intersectsSphere(Ia)===!1)return;Ru.copy(s).invert(),Eh.copy(t.ray).applyMatrix4(Ru);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=u,y=d;m<y;m++){let p=c.getX(m);Pa.fromBufferAttribute(f,p),Cu(Pa,p,l,s,t,e,this)}}else{let u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let m=u,y=d;m<y;m++)Pa.fromBufferAttribute(f,m),Cu(Pa,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Cu(i,t,e,n,s,r,o){let a=Eh.distanceSqToPoint(i);if(a<e){let l=new O;Eh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var fo=class extends Tn{constructor(t=[],e=ns,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},An=class extends Tn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var qi=class extends Tn{constructor(t,e,n=ni,s,r,o,a=un,l=un,c,h=di,f=1){if(h!==di&&h!==ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new rr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ja=class extends qi{constructor(t,e=ni,n=ns,s,r,o=un,a=un,l,c=di){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},uo=class extends Tn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},jt=class i extends ze{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(f,2));function m(y,p,g,E,S,x,_,M,w,v,b){let A=x/w,P=_/v,L=x/2,D=_/2,R=M/2,C=w+1,z=v+1,F=0,K=0,V=new O;for(let J=0;J<z;J++){let Z=J*P-D;for(let ot=0;ot<C;ot++){let mt=ot*A-L;V[y]=mt*E,V[p]=Z*S,V[g]=R,c.push(V.x,V.y,V.z),V[y]=0,V[p]=0,V[g]=M>0?1:-1,h.push(V.x,V.y,V.z),f.push(ot/w),f.push(1-J/v),F+=1}}for(let J=0;J<v;J++)for(let Z=0;Z<w;Z++){let ot=u+Z+C*J,mt=u+Z+C*(J+1),Yt=u+(Z+1)+C*(J+1),At=u+(Z+1)+C*J;l.push(ot,mt,At),l.push(mt,Yt,At),K+=6}a.addGroup(d,K,b),d+=K,u+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Zi=class i extends ze{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,f=Math.PI/2*t,u=e,d=2*f+u,m=n*2+r,y=s+1,p=new O,g=new O;for(let E=0;E<=m;E++){let S=0,x=0,_=0,M=0;if(E<=n){let b=E/n,A=b*Math.PI/2;x=-h-t*Math.cos(A),_=t*Math.sin(A),M=-t*Math.cos(A),S=b*f}else if(E<=n+r){let b=(E-n)/r;x=-h+b*e,_=t,M=0,S=f+b*u}else{let b=(E-n-r)/n,A=b*Math.PI/2;x=h+t*Math.sin(A),_=t*Math.cos(A),M=t*Math.sin(A),S=f+u+b*f}let w=Math.max(0,Math.min(1,S/d)),v=0;E===0?v=.5/s:E===m&&(v=-.5/s);for(let b=0;b<=s;b++){let A=b/s,P=A*Math.PI*2,L=Math.sin(P),D=Math.cos(P);g.x=-_*D,g.y=x,g.z=_*L,a.push(g.x,g.y,g.z),p.set(-_*D,M,_*L),p.normalize(),l.push(p.x,p.y,p.z),c.push(A+v,w)}if(E>0){let b=(E-1)*y;for(let A=0;A<s;A++){let P=b+A,L=b+A+1,D=E*y+A,R=E*y+A+1;o.push(P,L,D),o.push(L,R,D)}}}this.setIndex(o),this.setAttribute("position",new xe(a,3)),this.setAttribute("normal",new xe(l,3)),this.setAttribute("uv",new xe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ii=class i extends ze{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new O,h=new Mt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){let d=n+f/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new xe(o,3)),this.setAttribute("normal",new xe(a,3)),this.setAttribute("uv",new xe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},gt=class i extends ze{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],m=0,y=[],p=n/2,g=0;E(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new xe(f,3)),this.setAttribute("normal",new xe(u,3)),this.setAttribute("uv",new xe(d,2));function E(){let x=new O,_=new O,M=0,w=(e-t)/n;for(let v=0;v<=r;v++){let b=[],A=v/r,P=A*(e-t)+t;for(let L=0;L<=s;L++){let D=L/s,R=D*l+a,C=Math.sin(R),z=Math.cos(R);_.x=P*C,_.y=-A*n+p,_.z=P*z,f.push(_.x,_.y,_.z),x.set(C,w,z).normalize(),u.push(x.x,x.y,x.z),d.push(D,1-A),b.push(m++)}y.push(b)}for(let v=0;v<s;v++)for(let b=0;b<r;b++){let A=y[b][v],P=y[b+1][v],L=y[b+1][v+1],D=y[b][v+1];(t>0||b!==0)&&(h.push(A,P,D),M+=3),(e>0||b!==r-1)&&(h.push(P,L,D),M+=3)}c.addGroup(g,M,0),g+=M}function S(x){let _=m,M=new Mt,w=new O,v=0,b=x===!0?t:e,A=x===!0?1:-1;for(let L=1;L<=s;L++)f.push(0,p*A,0),u.push(0,A,0),d.push(.5,.5),m++;let P=m;for(let L=0;L<=s;L++){let R=L/s*l+a,C=Math.cos(R),z=Math.sin(R);w.x=b*z,w.y=p*A,w.z=b*C,f.push(w.x,w.y,w.z),u.push(0,A,0),M.x=C*.5+.5,M.y=z*.5*A+.5,d.push(M.x,M.y),m++}for(let L=0;L<s;L++){let D=_+L,R=P+L;x===!0?h.push(R,R+1,D):h.push(R+1,R,D),v+=3}c.addGroup(g,v,x===!0?1:2),g+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},be=class i extends gt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ka=class i extends ze{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new xe(r,3)),this.setAttribute("normal",new xe(r.slice(),3)),this.setAttribute("uv",new xe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){let S=new O,x=new O,_=new O;for(let M=0;M<e.length;M+=3)d(e[M+0],S),d(e[M+1],x),d(e[M+2],_),l(S,x,_,E)}function l(E,S,x,_){let M=_+1,w=[];for(let v=0;v<=M;v++){w[v]=[];let b=E.clone().lerp(x,v/M),A=S.clone().lerp(x,v/M),P=M-v;for(let L=0;L<=P;L++)L===0&&v===M?w[v][L]=b:w[v][L]=b.clone().lerp(A,L/P)}for(let v=0;v<M;v++)for(let b=0;b<2*(M-v)-1;b++){let A=Math.floor(b/2);b%2===0?(u(w[v][A+1]),u(w[v+1][A]),u(w[v][A])):(u(w[v][A+1]),u(w[v+1][A+1]),u(w[v+1][A]))}}function c(E){let S=new O;for(let x=0;x<r.length;x+=3)S.x=r[x+0],S.y=r[x+1],S.z=r[x+2],S.normalize().multiplyScalar(E),r[x+0]=S.x,r[x+1]=S.y,r[x+2]=S.z}function h(){let E=new O;for(let S=0;S<r.length;S+=3){E.x=r[S+0],E.y=r[S+1],E.z=r[S+2];let x=p(E)/2/Math.PI+.5,_=g(E)/Math.PI+.5;o.push(x,1-_)}m(),f()}function f(){for(let E=0;E<o.length;E+=6){let S=o[E+0],x=o[E+2],_=o[E+4],M=Math.max(S,x,_),w=Math.min(S,x,_);M>.9&&w<.1&&(S<.2&&(o[E+0]+=1),x<.2&&(o[E+2]+=1),_<.2&&(o[E+4]+=1))}}function u(E){r.push(E.x,E.y,E.z)}function d(E,S){let x=E*3;S.x=t[x+0],S.y=t[x+1],S.z=t[x+2]}function m(){let E=new O,S=new O,x=new O,_=new O,M=new Mt,w=new Mt,v=new Mt;for(let b=0,A=0;b<r.length;b+=9,A+=6){E.set(r[b+0],r[b+1],r[b+2]),S.set(r[b+3],r[b+4],r[b+5]),x.set(r[b+6],r[b+7],r[b+8]),M.set(o[A+0],o[A+1]),w.set(o[A+2],o[A+3]),v.set(o[A+4],o[A+5]),_.copy(E).add(S).add(x).divideScalar(3);let P=p(_);y(M,A+0,E,P),y(w,A+2,S,P),y(v,A+4,x,P)}}function y(E,S,x,_){_<0&&E.x===1&&(o[S]=E.x-1),x.x===0&&x.z===0&&(o[S]=_/2/Math.PI+.5)}function p(E){return Math.atan2(E.z,-E.x)}function g(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},po=class i extends Ka{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var On=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ee("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Mt:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new O,s=[],r=[],o=[],a=new O,l=new Se;for(let d=0;d<=t;d++){let m=d/t;s[d]=this.getTangentAt(m,new O)}r[0]=new O,o[0]=new O;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(me(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(me(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},pr=class extends On{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Mt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ja=class extends pr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function jh(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,d*=h,s(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Iu=new O,Pu=new O,dh=new jh,ph=new jh,mh=new jh,Qa=class extends On{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new O){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Pu.subVectors(s[0],s[1]).add(s[0]),c=Pu);let f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Iu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Iu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);y<1e-4&&(y=1),m<1e-4&&(m=y),p<1e-4&&(p=y),dh.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,m,y,p),ph.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,m,y,p),mh.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,m,y,p)}else this.curveType==="catmullrom"&&(dh.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),ph.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),mh.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(dh.calc(l),ph.calc(l),mh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Lu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function ym(i,t){let e=1-i;return e*e*t}function vm(i,t){return 2*(1-i)*i*t}function _m(i,t){return i*i*t}function $r(i,t,e,n){return ym(i,t)+vm(i,e)+_m(i,n)}function Mm(i,t){let e=1-i;return e*e*e*t}function Em(i,t){let e=1-i;return 3*e*e*i*t}function bm(i,t){return 3*(1-i)*i*i*t}function Sm(i,t){return i*i*i*t}function Jr(i,t,e,n,s){return Mm(i,t)+Em(i,e)+bm(i,n)+Sm(i,s)}var mo=class extends On{constructor(t=new Mt,e=new Mt,n=new Mt,s=new Mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Mt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Jr(t,s.x,r.x,o.x,a.x),Jr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},tl=class extends On{constructor(t=new O,e=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new O){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Jr(t,s.x,r.x,o.x,a.x),Jr(t,s.y,r.y,o.y,a.y),Jr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},go=class extends On{constructor(t=new Mt,e=new Mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Mt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},el=class extends On{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xo=class extends On{constructor(t=new Mt,e=new Mt,n=new Mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Mt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set($r(t,s.x,r.x,o.x),$r(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},nl=class extends On{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set($r(t,s.x,r.x,o.x),$r(t,s.y,r.y,o.y),$r(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yo=class extends On{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Mt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Lu(a,l.x,c.x,h.x,f.x),Lu(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Mt().fromArray(s))}return this}},bh=Object.freeze({__proto__:null,ArcCurve:ja,CatmullRomCurve3:Qa,CubicBezierCurve:mo,CubicBezierCurve3:tl,EllipseCurve:pr,LineCurve:go,LineCurve3:el,QuadraticBezierCurve:xo,QuadraticBezierCurve3:nl,SplineCurve:yo}),il=class extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new bh[s.type]().fromJSON(s))}return this}},vo=class extends il{constructor(t){super(),this.type="Path",this.currentPoint=new Mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new go(this.currentPoint.clone(),new Mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new xo(this.currentPoint.clone(),new Mt(t,e),new Mt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new mo(this.currentPoint.clone(),new Mt(t,e),new Mt(n,s),new Mt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new yo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new pr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},$i=class extends vo{constructor(t){super(t),this.uuid=ui(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new vo().fromJSON(s))}return this}};function wm(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Td(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Im(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,f=l;for(let u=e;u<s;u+=e){let d=i[u],m=i[u+1];d<a&&(a=d),m<l&&(l=m),d>h&&(h=d),m>f&&(f=m)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return _o(r,o,e,a,l,c,0),o}function Td(i,t,e,n,s){let r;if(s===km(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Du(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Du(o/n|0,i[o],i[o+1],r);return r&&mr(r,r.next)&&(Eo(r),r=r.next),r}function vs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(mr(e,e.next)||Ze(e.prev,e,e.next)===0)){if(Eo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function _o(i,t,e,n,s,r,o){if(!i)return;!o&&r&&zm(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Am(i,n,s,r):Tm(i)){t.push(l.i,i.i,c.i),Eo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Rm(vs(i),t),_o(i,t,e,n,s,r,2)):o===2&&Cm(i,t,e,n,s,r):_o(vs(i),t,e,n,s,r,1);break}}}function Tm(i){let t=i.prev,e=i,n=i.next;if(Ze(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),f=Math.min(a,l,c),u=Math.max(s,r,o),d=Math.max(a,l,c),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=d&&Yr(s,a,r,l,o,c,m.x,m.y)&&Ze(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Am(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ze(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,u=o.y,d=Math.min(a,l,c),m=Math.min(h,f,u),y=Math.max(a,l,c),p=Math.max(h,f,u),g=Sh(d,m,t,e,n),E=Sh(y,p,t,e,n),S=i.prevZ,x=i.nextZ;for(;S&&S.z>=g&&x&&x.z<=E;){if(S.x>=d&&S.x<=y&&S.y>=m&&S.y<=p&&S!==s&&S!==o&&Yr(a,h,l,f,c,u,S.x,S.y)&&Ze(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=d&&x.x<=y&&x.y>=m&&x.y<=p&&x!==s&&x!==o&&Yr(a,h,l,f,c,u,x.x,x.y)&&Ze(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=g;){if(S.x>=d&&S.x<=y&&S.y>=m&&S.y<=p&&S!==s&&S!==o&&Yr(a,h,l,f,c,u,S.x,S.y)&&Ze(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=E;){if(x.x>=d&&x.x<=y&&x.y>=m&&x.y<=p&&x!==s&&x!==o&&Yr(a,h,l,f,c,u,x.x,x.y)&&Ze(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Rm(i,t){let e=i;do{let n=e.prev,s=e.next.next;!mr(n,s)&&Rd(n,e,e.next,s)&&Mo(n,s)&&Mo(s,n)&&(t.push(n.i,e.i,s.i),Eo(e),Eo(e.next),e=i=s),e=e.next}while(e!==i);return vs(e)}function Cm(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Om(o,a)){let l=Cd(o,a);o=vs(o,o.next),l=vs(l,l.next),_o(o,t,e,n,s,r,0),_o(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Im(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Td(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Fm(c))}s.sort(Pm);for(let r=0;r<s.length;r++)e=Lm(s[r],e);return e}function Pm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Lm(i,t){let e=Dm(i,t);if(!e)return t;let n=Cd(e,i);return vs(n,n.next),vs(e,e.next)}function Dm(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(mr(i,e))return e;do{if(mr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Ad(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);Mo(e,i)&&(f<h||f===h&&(e.x>o.x||e.x===o.x&&Nm(o,e)))&&(o=e,h=f)}e=e.next}while(e!==a);return o}function Nm(i,t){return Ze(i.prev,i,t.prev)<0&&Ze(t.next,i,i.next)<0}function zm(i,t,e,n){let s=i;do s.z===0&&(s.z=Sh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Um(s)}function Um(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Sh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Fm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ad(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Yr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Ad(i,t,e,n,s,r,o,a)}function Om(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Bm(i,t)&&(Mo(i,t)&&Mo(t,i)&&Hm(i,t)&&(Ze(i.prev,i,t.prev)||Ze(i,t.prev,t))||mr(i,t)&&Ze(i.prev,i,i.next)>0&&Ze(t.prev,t,t.next)>0)}function Ze(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function mr(i,t){return i.x===t.x&&i.y===t.y}function Rd(i,t,e,n){let s=Da(Ze(i,t,e)),r=Da(Ze(i,t,n)),o=Da(Ze(e,n,i)),a=Da(Ze(e,n,t));return!!(s!==r&&o!==a||s===0&&La(i,e,t)||r===0&&La(i,n,t)||o===0&&La(e,i,n)||a===0&&La(e,t,n))}function La(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Da(i){return i>0?1:i<0?-1:0}function Bm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Rd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Mo(i,t){return Ze(i.prev,i,i.next)<0?Ze(i,t,i.next)>=0&&Ze(i,i.prev,t)>=0:Ze(i,t,i.prev)<0||Ze(i,i.next,t)<0}function Hm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Cd(i,t){let e=wh(i.i,i.x,i.y),n=wh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Du(i,t,e,n){let s=wh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Eo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function wh(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function km(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Th=class{static triangulate(t,e,n=2){return wm(t,e,n)}},xs=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Nu(t),zu(n,t);let o=t.length;e.forEach(Nu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,zu(n,e[l]);let a=Th.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Nu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function zu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ji=class i extends ze{constructor(t=new $i([new Mt(.5,.5),new Mt(-.5,.5),new Mt(-.5,-.5),new Mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new xe(s,3)),this.setAttribute("uv",new xe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:Gm,S,x=!1,_,M,w,v;if(g){S=g.getSpacedPoints(h),x=!0,u=!1;let $=g.isCatmullRomCurve3?g.closed:!1;_=g.computeFrenetFrames(h,$),M=new O,w=new O,v=new O}u||(p=0,d=0,m=0,y=0);let b=a.extractPoints(c),A=b.shape,P=b.holes;if(!xs.isClockWise(A)){A=A.reverse();for(let $=0,et=P.length;$<et;$++){let ct=P[$];xs.isClockWise(ct)&&(P[$]=ct.reverse())}}function D($){let ct=10000000000000001e-36,lt=$[0];for(let xt=1;xt<=$.length;xt++){let Ot=xt%$.length,Gt=$[Ot],Qt=Gt.x-lt.x,ie=Gt.y-lt.y,B=Qt*Qt+ie*ie,_e=Math.max(Math.abs(Gt.x),Math.abs(Gt.y),Math.abs(lt.x),Math.abs(lt.y)),fe=ct*_e*_e;if(B<=fe){$.splice(Ot,1),xt--;continue}lt=Gt}}D(A),P.forEach(D);let R=P.length,C=A;for(let $=0;$<R;$++){let et=P[$];A=A.concat(et)}function z($,et,ct){return et||se("ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(et,ct)}let F=A.length;function K($,et,ct){let lt,xt,Ot,Gt=$.x-et.x,Qt=$.y-et.y,ie=ct.x-$.x,B=ct.y-$.y,_e=Gt*Gt+Qt*Qt,fe=Gt*B-Qt*ie;if(Math.abs(fe)>Number.EPSILON){let N=Math.sqrt(_e),T=Math.sqrt(ie*ie+B*B),q=et.x-Qt/N,tt=et.y+Gt/N,it=ct.x-B/T,bt=ct.y+ie/T,St=((it-q)*B-(bt-tt)*ie)/(Gt*B-Qt*ie);lt=q+Gt*St-$.x,xt=tt+Qt*St-$.y;let st=lt*lt+xt*xt;if(st<=2)return new Mt(lt,xt);Ot=Math.sqrt(st/2)}else{let N=!1;Gt>Number.EPSILON?ie>Number.EPSILON&&(N=!0):Gt<-Number.EPSILON?ie<-Number.EPSILON&&(N=!0):Math.sign(Qt)===Math.sign(B)&&(N=!0),N?(lt=-Qt,xt=Gt,Ot=Math.sqrt(_e)):(lt=Gt,xt=Qt,Ot=Math.sqrt(_e/2))}return new Mt(lt/Ot,xt/Ot)}let V=[];for(let $=0,et=C.length,ct=et-1,lt=$+1;$<et;$++,ct++,lt++)ct===et&&(ct=0),lt===et&&(lt=0),V[$]=K(C[$],C[ct],C[lt]);let J=[],Z,ot=V.concat();for(let $=0,et=R;$<et;$++){let ct=P[$];Z=[];for(let lt=0,xt=ct.length,Ot=xt-1,Gt=lt+1;lt<xt;lt++,Ot++,Gt++)Ot===xt&&(Ot=0),Gt===xt&&(Gt=0),Z[lt]=K(ct[lt],ct[Ot],ct[Gt]);J.push(Z),ot=ot.concat(Z)}let mt;if(p===0)mt=xs.triangulateShape(C,P);else{let $=[],et=[];for(let ct=0;ct<p;ct++){let lt=ct/p,xt=d*Math.cos(lt*Math.PI/2),Ot=m*Math.sin(lt*Math.PI/2)+y;for(let Gt=0,Qt=C.length;Gt<Qt;Gt++){let ie=z(C[Gt],V[Gt],Ot);rt(ie.x,ie.y,-xt),lt===0&&$.push(ie)}for(let Gt=0,Qt=R;Gt<Qt;Gt++){let ie=P[Gt];Z=J[Gt];let B=[];for(let _e=0,fe=ie.length;_e<fe;_e++){let N=z(ie[_e],Z[_e],Ot);rt(N.x,N.y,-xt),lt===0&&B.push(N)}lt===0&&et.push(B)}}mt=xs.triangulateShape($,et)}let Yt=mt.length,At=m+y;for(let $=0;$<F;$++){let et=u?z(A[$],ot[$],At):A[$];x?(w.copy(_.normals[0]).multiplyScalar(et.x),M.copy(_.binormals[0]).multiplyScalar(et.y),v.copy(S[0]).add(w).add(M),rt(v.x,v.y,v.z)):rt(et.x,et.y,0)}for(let $=1;$<=h;$++)for(let et=0;et<F;et++){let ct=u?z(A[et],ot[et],At):A[et];x?(w.copy(_.normals[$]).multiplyScalar(ct.x),M.copy(_.binormals[$]).multiplyScalar(ct.y),v.copy(S[$]).add(w).add(M),rt(v.x,v.y,v.z)):rt(ct.x,ct.y,f/h*$)}for(let $=p-1;$>=0;$--){let et=$/p,ct=d*Math.cos(et*Math.PI/2),lt=m*Math.sin(et*Math.PI/2)+y;for(let xt=0,Ot=C.length;xt<Ot;xt++){let Gt=z(C[xt],V[xt],lt);rt(Gt.x,Gt.y,f+ct)}for(let xt=0,Ot=P.length;xt<Ot;xt++){let Gt=P[xt];Z=J[xt];for(let Qt=0,ie=Gt.length;Qt<ie;Qt++){let B=z(Gt[Qt],Z[Qt],lt);x?rt(B.x,B.y+S[h-1].y,S[h-1].x+ct):rt(B.x,B.y,f+ct)}}}kt(),U();function kt(){let $=s.length/3;if(u){let et=0,ct=F*et;for(let lt=0;lt<Yt;lt++){let xt=mt[lt];_t(xt[2]+ct,xt[1]+ct,xt[0]+ct)}et=h+p*2,ct=F*et;for(let lt=0;lt<Yt;lt++){let xt=mt[lt];_t(xt[0]+ct,xt[1]+ct,xt[2]+ct)}}else{for(let et=0;et<Yt;et++){let ct=mt[et];_t(ct[2],ct[1],ct[0])}for(let et=0;et<Yt;et++){let ct=mt[et];_t(ct[0]+F*h,ct[1]+F*h,ct[2]+F*h)}}n.addGroup($,s.length/3-$,0)}function U(){let $=s.length/3,et=0;H(C,et),et+=C.length;for(let ct=0,lt=P.length;ct<lt;ct++){let xt=P[ct];H(xt,et),et+=xt.length}n.addGroup($,s.length/3-$,1)}function H($,et){let ct=$.length;for(;--ct>=0;){let lt=ct,xt=ct-1;xt<0&&(xt=$.length-1);for(let Ot=0,Gt=h+p*2;Ot<Gt;Ot++){let Qt=F*Ot,ie=F*(Ot+1),B=et+lt+Qt,_e=et+xt+Qt,fe=et+xt+ie,N=et+lt+ie;ft(B,_e,fe,N)}}}function rt($,et,ct){l.push($),l.push(et),l.push(ct)}function _t($,et,ct){Y($),Y(et),Y(ct);let lt=s.length/3,xt=E.generateTopUV(n,s,lt-3,lt-2,lt-1);ut(xt[0]),ut(xt[1]),ut(xt[2])}function ft($,et,ct,lt){Y($),Y(et),Y(lt),Y(et),Y(ct),Y(lt);let xt=s.length/3,Ot=E.generateSideWallUV(n,s,xt-6,xt-3,xt-2,xt-1);ut(Ot[0]),ut(Ot[1]),ut(Ot[3]),ut(Ot[1]),ut(Ot[2]),ut(Ot[3])}function Y($){s.push(l[$*3+0]),s.push(l[$*3+1]),s.push(l[$*3+2])}function ut($){r.push($.x),r.push($.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Vm(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new bh[s.type]().fromJSON(s)),new i(n,t.options)}},Gm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Mt(r,o),new Mt(a,l),new Mt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[s*3],d=t[s*3+1],m=t[s*3+2],y=t[r*3],p=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Mt(o,1-l),new Mt(c,1-f),new Mt(u,1-m),new Mt(y,1-g)]:[new Mt(a,1-l),new Mt(h,1-f),new Mt(d,1-m),new Mt(p,1-g)]}};function Vm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var qe=class i extends ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=t/a,u=e/l,d=[],m=[],y=[],p=[];for(let g=0;g<h;g++){let E=g*u-o;for(let S=0;S<c;S++){let x=S*f-r;m.push(x,-E,0),y.push(0,0,1),p.push(S/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let E=0;E<a;E++){let S=E+c*g,x=E+c*(g+1),_=E+1+c*(g+1),M=E+1+c*g;d.push(S,x,M),d.push(x,_,M)}this.setIndex(d),this.setAttribute("position",new xe(m,3)),this.setAttribute("normal",new xe(y,3)),this.setAttribute("uv",new xe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var ue=class i extends ze{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new O,u=new O,d=[],m=[],y=[],p=[];for(let g=0;g<=n;g++){let E=[],S=g/n,x=o+S*a,_=t*Math.cos(x),M=Math.sqrt(t*t-_*_),w=0;g===0&&o===0?w=.5/e:g===n&&l===Math.PI&&(w=-.5/e);for(let v=0;v<=e;v++){let b=v/e,A=s+b*r;f.x=-M*Math.cos(A),f.y=_,f.z=M*Math.sin(A),m.push(f.x,f.y,f.z),u.copy(f).normalize(),y.push(u.x,u.y,u.z),p.push(b+w,1-S),E.push(c++)}h.push(E)}for(let g=0;g<n;g++)for(let E=0;E<e;E++){let S=h[g][E+1],x=h[g][E],_=h[g+1][E],M=h[g+1][E+1];(g!==0||o>0)&&d.push(S,x,M),(g!==n-1||l<Math.PI)&&d.push(x,_,M)}this.setIndex(d),this.setAttribute("position",new xe(m,3)),this.setAttribute("normal",new xe(y,3)),this.setAttribute("uv",new xe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Pe=class i extends ze{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new O,d=new O,m=new O;for(let y=0;y<=n;y++){let p=o+y/n*a;for(let g=0;g<=s;g++){let E=g/s*r;d.x=(t+e*Math.cos(p))*Math.cos(E),d.y=(t+e*Math.cos(p))*Math.sin(E),d.z=e*Math.sin(p),c.push(d.x,d.y,d.z),u.x=t*Math.cos(E),u.y=t*Math.sin(E),m.subVectors(d,u).normalize(),h.push(m.x,m.y,m.z),f.push(g/s),f.push(y/n)}}for(let y=1;y<=n;y++)for(let p=1;p<=s;p++){let g=(s+1)*y+p-1,E=(s+1)*(y-1)+p-1,S=(s+1)*(y-1)+p,x=(s+1)*y+p;l.push(g,E,x),l.push(E,S,x)}this.setIndex(l),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Ss(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Uu(s))s.isRenderTargetTexture?(ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Uu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function yn(i){let t={};for(let e=0;e<i.length;e++){let n=Ss(i[e]);for(let s in n)t[s]=n[s]}return t}function Uu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Wm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Qh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ye.workingColorSpace}var Id={clone:Ss,merge:yn},Xm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ym=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sn=class extends ti{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xm,this.fragmentShader=Ym,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ss(t.uniforms),this.uniformsGroups=Wm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ht().setHex(s.value);break;case"v2":this.uniforms[n].value=new Mt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ge().fromArray(s.value);break;case"m3":this.uniforms[n].value=new oe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Se().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},sl=class extends sn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Xt=class extends ti{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oo,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},bo=class extends Xt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var So=class extends ti{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oo,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=Ml,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},rl=class extends ti{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ol=class extends ti{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Js(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function gh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ki=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},al=class extends Ki{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vh,endingEnd:vh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case _h:r=t,a=2*e-n;break;case Mh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case _h:o=t,l=2*n-e;break;case Mh:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,m=(n-e)/(s-e),y=m*m,p=y*m,g=-u*p+2*u*y-u*m,E=(1+u)*p+(-1.5-2*u)*y+(-.5+u)*m+1,S=(-1-d)*p+(1.5+d)*y+.5*m,x=d*p-d*y;for(let _=0;_!==a;++_)r[_]=g*o[h+_]+E*o[c+_]+S*o[l+_]+x*o[f+_];return r}},ll=class extends Ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),f=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*f+o[l+u]*h;return r}},cl=class extends Ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},hl=class extends Ki{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let m=(n-e)/(s-e),y=1-m;for(let p=0;p!==a;++p)r[p]=o[c+p]*y+o[l+p]*m;return r}let u=a*2,d=t-1;for(let m=0;m!==a;++m){let y=o[c+m],p=o[l+m],g=d*u+m*2,E=f[g],S=f[g+1],x=t*u+m*2,_=h[x],M=h[x+1],w=Zm(n,e,E,_,s);r[m]=Pd(w,y,S,M,p)}return r}};function Pd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function qm(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Zm(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Pd(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=qm(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Bn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Js(e,this.TimeBufferType),this.values=Js(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Js(t.times,Array),values:Js(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),gh(t.settings)&&(n.settings={inTangents:Js(t.settings.inTangents,Array),outTangents:Js(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new cl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ll(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new al(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new hl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Kr:e=this.InterpolantFactoryMethodDiscrete;break;case Ya:e=this.InterpolantFactoryMethodLinear;break;case Ua:e=this.InterpolantFactoryMethodSmooth;break;case yh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ee("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Kr;case this.InterpolantFactoryMethodLinear:return Ya;case this.InterpolantFactoryMethodSmooth:return Ua;case this.InterpolantFactoryMethodBezier:return yh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;gh(this.settings)&&(Fu(this.settings.inTangents,t),Fu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(se("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(se("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){se("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){se("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&U0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){se("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ua,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let f=a*n,u=f-n,d=f+n;for(let m=0;m!==n;++m){let y=e[f+m];if(y!==e[u+m]||y!==e[d+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,u=o*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,gh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Fu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Bn.prototype.ValueTypeName="";Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=Ya;var ji=class extends Bn{constructor(t,e,n){super(t,e,n)}};ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=Kr;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var fl=class extends Bn{constructor(t,e,n,s){super(t,e,n,s)}};fl.prototype.ValueTypeName="color";var ul=class extends Bn{constructor(t,e,n,s){super(t,e,n,s)}};ul.prototype.ValueTypeName="number";var dl=class extends Ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Un.slerpFlat(r,0,o,c-a,o,c,l);return r}},wo=class extends Bn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new dl(this.times,this.values,this.getValueSize(),t)}};wo.prototype.ValueTypeName="quaternion";wo.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends Bn{constructor(t,e,n){super(t,e,n)}};Qi.prototype.ValueTypeName="string";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Kr;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var pl=class extends Bn{constructor(t,e,n,s){super(t,e,n,s)}};pl.prototype.ValueTypeName="vector";var ml=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],m=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ld=new ml,gl=class{constructor(t){this.manager=t!==void 0?t:Ld,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};gl.DEFAULT_MATERIAL_NAME="__DEFAULT";var gr=class extends nn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},_s=class extends gr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},xh=new Se,Ou=new O,Bu=new O,To=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fr,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Ou.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ou),Bu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){xh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(xh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===nr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(xh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Na=new O,za=new Un,hi=new O,Ao=class extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Na,za,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Na,za,hi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Na,za,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Na,za,hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Yi=new O,Hu=new Mt,ku=new Mt,an=class extends Ao{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=sr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(qr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sr*2*Math.atan(Math.tan(qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z)}getViewSize(t,e){return this.getViewBounds(t,Hu,ku),e.subVectors(ku,Hu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(qr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ah=class extends To{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0}},Ro=class extends gr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ah}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},xr=class extends Ao{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Rh=class extends To{constructor(){super(new xr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ms=class extends gr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new Rh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ks=-90,js=1,xl=class extends nn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new an(Ks,js,t,e);s.layers=this.layers,this.add(s);let r=new an(Ks,js,t,e);r.layers=this.layers,this.add(r);let o=new an(Ks,js,t,e);o.layers=this.layers,this.add(o);let a=new an(Ks,js,t,e);a.layers=this.layers,this.add(a);let l=new an(Ks,js,t,e);l.layers=this.layers,this.add(l);let c=new an(Ks,js,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},yl=class extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var tf="\\[\\]\\.:\\/",$m=new RegExp("["+tf+"]","g"),ef="[^"+tf+"]",Jm="[^"+tf.replace("\\.","")+"]",Km=/((?:WC+[\/:])*)/.source.replace("WC",ef),jm=/(WCOD+)?/.source.replace("WCOD",Jm),Qm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ef),tg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ef),eg=new RegExp("^"+Km+jm+Qm+tg+"$"),ng=["material","materials","bones","map"],Ch=class{constructor(t,e,n){let s=n||We.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},We=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace($m,"")}static parseTrackName(t){let e=eg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ng.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ee("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){se("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){se("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){se("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){se("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){se("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){se("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){se("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;se("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){se("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){se("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};We.Composite=Ch;We.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};We.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};We.prototype.GetterByBindingType=[We.prototype._getValue_direct,We.prototype._getValue_array,We.prototype._getValue_arrayElement,We.prototype._getValue_toArray];We.prototype.SetterByBindingTypeAndVersioning=[[We.prototype._setValue_direct,We.prototype._setValue_direct_setNeedsUpdate,We.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[We.prototype._setValue_array,We.prototype._setValue_array_setNeedsUpdate,We.prototype._setValue_array_setMatrixWorldNeedsUpdate],[We.prototype._setValue_arrayElement,We.prototype._setValue_arrayElement_setNeedsUpdate,We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[We.prototype._setValue_fromArray,We.prototype._setValue_fromArray_setNeedsUpdate,We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var J_=new Float32Array(1);var lf=class lf{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};lf.prototype.isMatrix2=!0;var Ih=lf;function nf(i,t,e,n){let s=ig(n);switch(e){case qh:return i*t;case Rl:return i*t/s.components*s.byteLength;case Cl:return i*t/s.components*s.byteLength;case rs:return i*t*2/s.components*s.byteLength;case Il:return i*t*2/s.components*s.byteLength;case Zh:return i*t*3/s.components*s.byteLength;case Wn:return i*t*4/s.components*s.byteLength;case Pl:return i*t*4/s.components*s.byteLength;case Lo:case Do:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case No:case zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dl:case zl:return Math.max(i,16)*Math.max(t,8)/4;case Ll:case Nl:return Math.max(i,8)*Math.max(t,8)/2;case Ul:case Fl:case Bl:case Hl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ol:case Uo:case kl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Gl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Wl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Xl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ql:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case $l:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Jl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Kl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case jl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case tc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ec:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case nc:case ic:case sc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case rc:case oc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Fo:case ac:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ig(i){switch(i){case Pn:case Vh:return{byteLength:1,components:1};case _r:case Wh:case ii:return{byteLength:2,components:1};case Tl:case Al:return{byteLength:2,components:4};case ni:case wl:case Vn:return{byteLength:4,components:1};case Xh:case Yh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function tp(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function lg(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){let m=f[u],y=f[d];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++u,f[u]=y)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){let y=f[d];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var cg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hg=`#ifdef USE_ALPHAHASH
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
#endif`,fg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ug=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mg=`#ifdef USE_AOMAP
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
#endif`,gg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xg=`#ifdef USE_BATCHING
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
#endif`,yg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_g=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Eg=`#ifdef USE_IRIDESCENCE
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
#endif`,bg=`#ifdef USE_BUMPMAP
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
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Cg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ig=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Pg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Lg=`#define PI 3.141592653589793
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
} // validated`,Dg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ng=`vec3 transformedNormal = objectNormal;
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
#endif`,zg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ug=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Og=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kg=`#ifdef USE_ENVMAP
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
#endif`,Gg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vg=`#ifdef USE_ENVMAP
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
#endif`,Wg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xg=`#ifdef USE_ENVMAP
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
#endif`,Yg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$g=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jg=`#ifdef USE_GRADIENTMAP
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
}`,Kg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ex=`#ifdef USE_ENVMAP
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
#endif`,nx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ix=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ox=`PhysicalMaterial material;
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
#endif`,ax=`uniform sampler2D dfgLUT;
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
}`,lx=`
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
#endif`,cx=`#if defined( RE_IndirectDiffuse )
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
#endif`,hx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ux=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,px=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vx=`#if defined( USE_POINTS_UV )
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
#endif`,_x=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ex=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wx=`#ifdef USE_MORPHTARGETS
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
#endif`,Tx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ax=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Px=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Lx=`#ifdef USE_NORMALMAP
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
#endif`,Dx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ux=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ox=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zx=`float getShadowMask() {
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
}`,$x=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jx=`#ifdef USE_SKINNING
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
#endif`,Kx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jx=`#ifdef USE_SKINNING
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
#endif`,Qx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,i1=`#ifdef USE_TRANSMISSION
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
#endif`,s1=`#ifdef USE_TRANSMISSION
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
#endif`,r1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,c1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h1=`uniform sampler2D t2D;
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
}`,f1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,d1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m1=`#include <common>
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
}`,g1=`#if DEPTH_PACKING == 3200
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
}`,x1=`#define DISTANCE
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
}`,y1=`#define DISTANCE
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
}`,v1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M1=`uniform float scale;
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
}`,E1=`uniform vec3 diffuse;
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
}`,b1=`#include <common>
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
}`,S1=`uniform vec3 diffuse;
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
}`,w1=`#define LAMBERT
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
}`,T1=`#define LAMBERT
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
}`,A1=`#define MATCAP
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
}`,R1=`#define MATCAP
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
}`,C1=`#define NORMAL
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
}`,I1=`#define NORMAL
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
}`,P1=`#define PHONG
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
}`,L1=`#define PHONG
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
}`,D1=`#define STANDARD
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
}`,N1=`#define STANDARD
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
}`,z1=`#define TOON
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
}`,U1=`#define TOON
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
}`,F1=`uniform float size;
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
}`,O1=`uniform vec3 diffuse;
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
}`,B1=`#include <common>
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
}`,H1=`uniform vec3 color;
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
}`,k1=`uniform float rotation;
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
}`,G1=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:cg,alphahash_pars_fragment:hg,alphamap_fragment:fg,alphamap_pars_fragment:ug,alphatest_fragment:dg,alphatest_pars_fragment:pg,aomap_fragment:mg,aomap_pars_fragment:gg,batching_pars_vertex:xg,batching_vertex:yg,begin_vertex:vg,beginnormal_vertex:_g,bsdfs:Mg,iridescence_fragment:Eg,bumpmap_pars_fragment:bg,clipping_planes_fragment:Sg,clipping_planes_pars_fragment:wg,clipping_planes_pars_vertex:Tg,clipping_planes_vertex:Ag,color_fragment:Rg,color_pars_fragment:Cg,color_pars_vertex:Ig,color_vertex:Pg,common:Lg,cube_uv_reflection_fragment:Dg,defaultnormal_vertex:Ng,displacementmap_pars_vertex:zg,displacementmap_vertex:Ug,emissivemap_fragment:Fg,emissivemap_pars_fragment:Og,colorspace_fragment:Bg,colorspace_pars_fragment:Hg,envmap_fragment:kg,envmap_common_pars_fragment:Gg,envmap_pars_fragment:Vg,envmap_pars_vertex:Wg,envmap_physical_pars_fragment:ex,envmap_vertex:Xg,fog_vertex:Yg,fog_pars_vertex:qg,fog_fragment:Zg,fog_pars_fragment:$g,gradientmap_pars_fragment:Jg,lightmap_pars_fragment:Kg,lights_lambert_fragment:jg,lights_lambert_pars_fragment:Qg,lights_pars_begin:tx,lights_toon_fragment:nx,lights_toon_pars_fragment:ix,lights_phong_fragment:sx,lights_phong_pars_fragment:rx,lights_physical_fragment:ox,lights_physical_pars_fragment:ax,lights_fragment_begin:lx,lights_fragment_maps:cx,lights_fragment_end:hx,lightprobes_pars_fragment:fx,logdepthbuf_fragment:ux,logdepthbuf_pars_fragment:dx,logdepthbuf_pars_vertex:px,logdepthbuf_vertex:mx,map_fragment:gx,map_pars_fragment:xx,map_particle_fragment:yx,map_particle_pars_fragment:vx,metalnessmap_fragment:_x,metalnessmap_pars_fragment:Mx,morphinstance_vertex:Ex,morphcolor_vertex:bx,morphnormal_vertex:Sx,morphtarget_pars_vertex:wx,morphtarget_vertex:Tx,normal_fragment_begin:Ax,normal_fragment_maps:Rx,normal_pars_fragment:Cx,normal_pars_vertex:Ix,normal_vertex:Px,normalmap_pars_fragment:Lx,clearcoat_normal_fragment_begin:Dx,clearcoat_normal_fragment_maps:Nx,clearcoat_pars_fragment:zx,iridescence_pars_fragment:Ux,opaque_fragment:Fx,packing:Ox,premultiplied_alpha_fragment:Bx,project_vertex:Hx,dithering_fragment:kx,dithering_pars_fragment:Gx,roughnessmap_fragment:Vx,roughnessmap_pars_fragment:Wx,shadowmap_pars_fragment:Xx,shadowmap_pars_vertex:Yx,shadowmap_vertex:qx,shadowmask_pars_fragment:Zx,skinbase_vertex:$x,skinning_pars_vertex:Jx,skinning_vertex:Kx,skinnormal_vertex:jx,specularmap_fragment:Qx,specularmap_pars_fragment:t1,tonemapping_fragment:e1,tonemapping_pars_fragment:n1,transmission_fragment:i1,transmission_pars_fragment:s1,uv_pars_fragment:r1,uv_pars_vertex:o1,uv_vertex:a1,worldpos_vertex:l1,background_vert:c1,background_frag:h1,backgroundCube_vert:f1,backgroundCube_frag:u1,cube_vert:d1,cube_frag:p1,depth_vert:m1,depth_frag:g1,distance_vert:x1,distance_frag:y1,equirect_vert:v1,equirect_frag:_1,linedashed_vert:M1,linedashed_frag:E1,meshbasic_vert:b1,meshbasic_frag:S1,meshlambert_vert:w1,meshlambert_frag:T1,meshmatcap_vert:A1,meshmatcap_frag:R1,meshnormal_vert:C1,meshnormal_frag:I1,meshphong_vert:P1,meshphong_frag:L1,meshphysical_vert:D1,meshphysical_frag:N1,meshtoon_vert:z1,meshtoon_frag:U1,points_vert:F1,points_frag:O1,shadow_vert:B1,shadow_frag:H1,sprite_vert:k1,sprite_frag:G1},Dt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},yi={basic:{uniforms:yn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:yn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Ht(0)},envMapIntensity:{value:1}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:yn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:yn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:yn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:yn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:yn([Dt.points,Dt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:yn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:yn([Dt.common,Dt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:yn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:yn([Dt.sprite,Dt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distance:{uniforms:yn([Dt.common,Dt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distance_vert,fragmentShader:pe.distance_frag},shadow:{uniforms:yn([Dt.lights,Dt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};yi.physical={uniforms:yn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};var hc={r:0,b:0,g:0},V1=new Se,ep=new oe;ep.set(-1,0,0,0,1,0,0,0,1);function W1(i,t,e,n,s,r){let o=new Ht(0),a=s===!0?0:1,l,c,h=null,f=0,u=null;function d(E){let S=E.isScene===!0?E.background:null;if(S&&S.isTexture){let x=E.backgroundBlurriness>0;S=t.get(S,x)}return S}function m(E){let S=!1,x=d(E);x===null?p(o,a):x&&x.isColor&&(p(x,1),S=!0);let _=i.xr.getEnvironmentBlendMode();_==="additive"?e.buffers.color.setClear(0,0,0,1,r):_==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(E,S){let x=d(S);x&&(x.isCubeTexture||x.mapping===Io)?(c===void 0&&(c=new k(new jt(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:Ss(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(_,M,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(V1.makeRotationFromEuler(S.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ep),c.material.toneMapped=ye.getTransfer(x.colorSpace)!==Ae,(h!==x||f!==x.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,u=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new k(new qe(2,2),new sn({name:"BackgroundMaterial",uniforms:Ss(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ye.getTransfer(x.colorSpace)!==Ae,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,f=x.version,u=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,S){E.getRGB(hc,Qh(i)),e.buffers.color.setClear(hc.r,hc.g,hc.b,S,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,S=1){o.set(E),a=S,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(E){a=E,p(o,a)},render:m,addToRenderList:y,dispose:g}}function X1(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(P,L,D,R,C){let z=!1,F=f(P,R,D,L);r!==F&&(r=F,c(r.object)),z=d(P,R,D,C),z&&m(P,R,D,C),C!==null&&t.update(C,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,x(P,L,D,R),C!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(C).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function f(P,L,D,R){let C=R.wireframe===!0,z=n[L.id];z===void 0&&(z={},n[L.id]=z);let F=P.isInstancedMesh===!0?P.id:0,K=z[F];K===void 0&&(K={},z[F]=K);let V=K[D.id];V===void 0&&(V={},K[D.id]=V);let J=V[C];return J===void 0&&(J=u(l()),V[C]=J),J}function u(P){let L=[],D=[],R=[];for(let C=0;C<e;C++)L[C]=0,D[C]=0,R[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:D,attributeDivisors:R,object:P,attributes:{},index:null}}function d(P,L,D,R){let C=r.attributes,z=L.attributes,F=0,K=D.getAttributes();for(let V in K)if(K[V].location>=0){let Z=C[V],ot=z[V];if(ot===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(ot=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(ot=P.instanceColor)),Z===void 0||Z.attribute!==ot||ot&&Z.data!==ot.data)return!0;F++}return r.attributesNum!==F||r.index!==R}function m(P,L,D,R){let C={},z=L.attributes,F=0,K=D.getAttributes();for(let V in K)if(K[V].location>=0){let Z=z[V];Z===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor));let ot={};ot.attribute=Z,Z&&Z.data&&(ot.data=Z.data),C[V]=ot,F++}r.attributes=C,r.attributesNum=F,r.index=R}function y(){let P=r.newAttributes;for(let L=0,D=P.length;L<D;L++)P[L]=0}function p(P){g(P,0)}function g(P,L){let D=r.newAttributes,R=r.enabledAttributes,C=r.attributeDivisors;D[P]=1,R[P]===0&&(i.enableVertexAttribArray(P),R[P]=1),C[P]!==L&&(i.vertexAttribDivisor(P,L),C[P]=L)}function E(){let P=r.newAttributes,L=r.enabledAttributes;for(let D=0,R=L.length;D<R;D++)L[D]!==P[D]&&(i.disableVertexAttribArray(D),L[D]=0)}function S(P,L,D,R,C,z,F){F===!0?i.vertexAttribIPointer(P,L,D,C,z):i.vertexAttribPointer(P,L,D,R,C,z)}function x(P,L,D,R){y();let C=R.attributes,z=D.getAttributes(),F=L.defaultAttributeValues;for(let K in z){let V=z[K];if(V.location>=0){let J=C[K];if(J===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),J!==void 0){let Z=J.normalized,ot=J.itemSize,mt=t.get(J);if(mt===void 0)continue;let Yt=mt.buffer,At=mt.type,kt=mt.bytesPerElement,U=At===i.INT||At===i.UNSIGNED_INT||J.gpuType===wl;if(J.isInterleavedBufferAttribute){let H=J.data,rt=H.stride,_t=J.offset;if(H.isInstancedInterleavedBuffer){for(let ft=0;ft<V.locationSize;ft++)g(V.location+ft,H.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ft=0;ft<V.locationSize;ft++)p(V.location+ft);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let ft=0;ft<V.locationSize;ft++)S(V.location+ft,ot/V.locationSize,At,Z,rt*kt,(_t+ot/V.locationSize*ft)*kt,U)}else{if(J.isInstancedBufferAttribute){for(let H=0;H<V.locationSize;H++)g(V.location+H,J.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let H=0;H<V.locationSize;H++)p(V.location+H);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let H=0;H<V.locationSize;H++)S(V.location+H,ot/V.locationSize,At,Z,ot*kt,ot/V.locationSize*H*kt,U)}}else if(F!==void 0){let Z=F[K];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(V.location,Z);break;case 3:i.vertexAttrib3fv(V.location,Z);break;case 4:i.vertexAttrib4fv(V.location,Z);break;default:i.vertexAttrib1fv(V.location,Z)}}}}E()}function _(){b();for(let P in n){let L=n[P];for(let D in L){let R=L[D];for(let C in R){let z=R[C];for(let F in z)h(z[F].object),delete z[F];delete R[C]}}delete n[P]}}function M(P){if(n[P.id]===void 0)return;let L=n[P.id];for(let D in L){let R=L[D];for(let C in R){let z=R[C];for(let F in z)h(z[F].object),delete z[F];delete R[C]}}delete n[P.id]}function w(P){for(let L in n){let D=n[L];for(let R in D){let C=D[R];if(C[P.id]===void 0)continue;let z=C[P.id];for(let F in z)h(z[F].object),delete z[F];delete C[P.id]}}}function v(P){for(let L in n){let D=n[L],R=P.isInstancedMesh===!0?P.id:0,C=D[R];if(C!==void 0){for(let z in C){let F=C[z];for(let K in F)h(F[K].object),delete F[K];delete C[z]}delete D[R],Object.keys(D).length===0&&delete n[L]}}}function b(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:A,dispose:_,releaseStatesOfGeometry:M,releaseStatesOfObject:v,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:p,disableUnusedAttributes:E}}function Y1(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function q1(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Wn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let v=w===ii&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Pn&&w!==Vn&&!v&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(ee("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&ee("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:x,maxSamples:_,samples:M}}function Z1(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Kn,a=new oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let m=f.clippingPlanes,y=f.clipIntersection,p=f.clipShadows,g=i.get(f);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{let E=r?0:n,S=E*4,x=g.clippingState||null;l.value=x,x=h(m,u,S,d);for(let _=0;_!==S;++_)x[_]=e[_];g.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,m){let y=f!==null?f.length:0,p=null;if(y!==0){if(p=l.value,m!==!0||p===null){let g=d+y*4,E=u.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<g)&&(p=new Float32Array(g));for(let S=0,x=d;S!==y;++S,x+=4)o.copy(f[S]).applyMatrix4(E,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}var Sr=4,$1=6,J1=20,K1=256,Ho=new xr,Dd=new Ht,cf=null,hf=0,ff=0,uf=!1,j1=new O,ws=new O,Ts=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=j1}=r;cf=this._renderer.getRenderTarget(),hf=this._renderer.getActiveCubeFace(),ff=this._renderer.getActiveMipmapLevel(),uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ud(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(cf,hf,ff),this._renderer.xr.enabled=uf,t.scissorTest=!1,br(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ns||t.mapping===bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cf=this._renderer.getRenderTarget(),hf=this._renderer.getActiveCubeFace(),ff=this._renderer.getActiveMipmapLevel(),uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:ii,format:Wn,colorSpace:jr,depthBuffer:!1},s=Nd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Q1(r)),this._blurMaterial=ey(r,t,e),this._ggxMaterial=ty(r,t,e)}return s}_compileMaterial(t){let e=new k(new ze,t);this._renderer.compile(e,Ho)}_sceneToCubeUV(t,e,n,s,r){let l=new an(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(Dd),f.toneMapping=ei,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new k(new jt,new ae({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,p=y.material,g=!1,E=t.background;E?E.isColor&&(p.color.copy(E),t.background=null,g=!0):(p.color.copy(Dd),g=!0);for(let S=0;S<6;S++){let x=S%3;x===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):x===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));let _=this._cubeSize;br(s,x*_,S>2?_:0,_,_),f.setRenderTarget(s),g&&f.render(y,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=E}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ns||t.mapping===bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ud()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;br(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ho)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:m}=this,y=this._sizeLods[n],p=3*y*(n>m-Sr?n-m+Sr:0),g=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=m-e,br(r,p,g,3*y,2*y),s.setRenderTarget(r),s.render(a,Ho),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,br(t,p,g,3*y,2*y),s.setRenderTarget(t),s.render(a,Ho)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-Sr?s-this._lodMax+Sr:0),u=4*(this._cubeSize-h);br(e,f,u,3*h,2*h),o.setRenderTarget(e),o.render(l,Ho)}};function Q1(i){let t=[],e=[],n=i,s=i-Sr+1+$1;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,m=new Float32Array(d*u*f),y=new Float32Array(d*u*f);for(let g=0;g<f;g++){let E=g%3*2/3-1,S=g>2?0:-1,x=[E,S,0,E+2/3,S,0,E+2/3,S+1,0,E,S,0,E+2/3,S+1,0,E,S+1,0];m.set(x,d*u*g);for(let _=0;_<u;_++){let M=h[_*2]*2-1,w=h[_*2+1]*2-1;g===0?ws.set(1,w,M):g===1?ws.set(-M,1,-w):g===2?ws.set(-M,w,1):g===3?ws.set(-1,w,-M):g===4?ws.set(-M,-1,w):ws.set(M,w,-1),ws.toArray(y,(g*u+_)*d)}}let p=new ze;p.setAttribute("position",new ke(m,d)),p.setAttribute("outputDirection",new ke(y,d)),e.push(new k(p,null)),n>Sr&&n--}return{lodMeshes:e,sizeLods:t}}function Nd(i,t,e){let n=new In(i,t,e);return n.texture.mapping=Io,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function br(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ty(i,t,e){return new sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:K1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:dc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function ey(i,t,e){return new sn({name:"SphericalGaussianBlur",defines:{SAMPLES:J1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:dc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function zd(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Ud(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function dc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var uc=class extends In{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new fo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new jt(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:Ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:gi});r.uniforms.tEquirect.value=e;let o=new k(s,r),a=e.minFilter;return e.minFilter===is&&(e.minFilter=pn),new xl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function ny(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?o(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===El||d===bl)if(t.has(u)){let m=t.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let y=new uc(m.height);return y.fromEquirectangularTexture(i,u),t.set(u,y),u.addEventListener("dispose",c),a(y.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let d=u.mapping,m=d===El||d===bl,y=d===ns||d===bs;if(m||y){let p=e.get(u),g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Ts(i)),p=m?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let E=u.image;return m&&E&&E.height>0||y&&E&&l(E)?(n===null&&(n=new Ts(i)),p=m?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,d){return d===El?u.mapping=ns:d===bl&&(u.mapping=bs),u}function l(u){let d=0,m=6;for(let y=0;y<m;y++)u[y]!==void 0&&d++;return d===m}function c(u){let d=u.target;d.removeEventListener("dispose",c);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function iy(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ys("WebGLRenderer: "+n+" extension not supported."),s}}}function sy(i,t,e,n){let s={},r=new WeakMap;function o(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete s[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)t.update(u[d],i.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,m=f.attributes.position,y=0;if(m===void 0)return;if(d!==null){let E=d.array;y=d.version;for(let S=0,x=E.length;S<x;S+=3){let _=E[S+0],M=E[S+1],w=E[S+2];u.push(_,M,M,w,w,_)}}else{let E=m.array;y=m.version;for(let S=0,x=E.length/3-1;S<x;S+=3){let _=S+0,M=S+1,w=S+2;u.push(_,M,M,w,w,_)}}let p=new(m.count>=65535?ro:so)(u,1);p.version=y;let g=r.get(f);g&&t.remove(g),r.set(f,p)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function ry(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*o),e.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*o,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let y=0;for(let p=0;p<d;p++)y+=u[p];e.update(y,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function oy(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:se("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ay(i,t,e){let n=new WeakMap,s=new Ge;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let b=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],S=0;d===!0&&(S=1),m===!0&&(S=2),y===!0&&(S=3);let x=a.attributes.position.count*S,_=1;x>t.maxTextureSize&&(_=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let M=new Float32Array(x*_*4*f),w=new no(M,x,_,f);w.type=Vn,w.needsUpdate=!0;let v=S*4;for(let A=0;A<f;A++){let P=p[A],L=g[A],D=E[A],R=x*_*4*A;for(let C=0;C<P.count;C++){let z=C*v;d===!0&&(s.fromBufferAttribute(P,C),M[R+z+0]=s.x,M[R+z+1]=s.y,M[R+z+2]=s.z,M[R+z+3]=0),m===!0&&(s.fromBufferAttribute(L,C),M[R+z+4]=s.x,M[R+z+5]=s.y,M[R+z+6]=s.z,M[R+z+7]=0),y===!0&&(s.fromBufferAttribute(D,C),M[R+z+8]=s.x,M[R+z+9]=s.y,M[R+z+10]=s.z,M[R+z+11]=D.itemSize===4?s.w:1)}}u={count:f,texture:w,size:new Mt(x,_)},n.set(a,u),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function ly(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var cy={[Uh]:"LINEAR_TONE_MAPPING",[Fh]:"REINHARD_TONE_MAPPING",[Oh]:"CINEON_TONE_MAPPING",[vr]:"ACES_FILMIC_TONE_MAPPING",[Hh]:"AGX_TONE_MAPPING",[kh]:"NEUTRAL_TONE_MAPPING",[Bh]:"CUSTOM_TONE_MAPPING"};function hy(i,t,e,n,s,r){let o=new In(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new ze;c.setAttribute("position",new xe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new xe([0,2,0,0,2,0],2));let h=new sl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new k(c,h),u=new xr(-1,1,1,-1,0,1),d=null,m=null,y=!1,p,g=null,E=[],S=!1;this.setSize=function(x,_){o.setSize(x,_),a!==null&&a.setSize(x,_),l!==null&&l.setSize(x,_);for(let M=0;M<E.length;M++){let w=E[M];w.setSize&&w.setSize(x,_)}},this.setEffects=function(x){E=x,S=E.length>0&&E[0].isRenderPass===!0;let _=o.width,M=o.height;E.length>0&&a===null&&(a=new In(_,M,{type:ii,depthBuffer:!1,stencilBuffer:!1}),l=new In(_,M,{type:ii,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<E.length;w++){let v=E[w];v.setSize&&v.setSize(_,M)}},this.begin=function(x,_){if(y||x.toneMapping===ei&&E.length===0)return!1;if(g=_,_!==null){let M=_.width,w=_.height;(o.width!==M||o.height!==w)&&this.setSize(M,w)}return S===!1&&x.setRenderTarget(o),p=x.toneMapping,x.toneMapping=ei,!0},this.hasRenderPass=function(){return S},this.end=function(x,_){x.toneMapping=p,y=!0;let M=o,w=a;for(let v=0;v<E.length;v++){let b=E[v];b.enabled!==!1&&(b.render(x,w,M,_),b.needsSwap!==!1&&(M=w,w=w===a?l:a))}if(d!==x.outputColorSpace||m!==x.toneMapping){d=x.outputColorSpace,m=x.toneMapping,h.defines={},ye.getTransfer(d)===Ae&&(h.defines.SRGB_TRANSFER="");let v=cy[m];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,x.setRenderTarget(g),x.render(f,u),g=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var np=new Tn,mf=new qi(1,1),ip=new no,sp=new $a,rp=new fo,Fd=[],Od=[],Bd=new Float32Array(16),Hd=new Float32Array(9),kd=new Float32Array(4);function Tr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Fd[s];if(r===void 0&&(r=new Float32Array(s),Fd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function cn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function hn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function pc(i,t){let e=Od[t];e===void 0&&(e=new Int32Array(t),Od[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function fy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function uy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;i.uniform2fv(this.addr,t),hn(e,t)}}function dy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(cn(e,t))return;i.uniform3fv(this.addr,t),hn(e,t)}}function py(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;i.uniform4fv(this.addr,t),hn(e,t)}}function my(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),hn(e,t)}else{if(cn(e,n))return;kd.set(n),i.uniformMatrix2fv(this.addr,!1,kd),hn(e,n)}}function gy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),hn(e,t)}else{if(cn(e,n))return;Hd.set(n),i.uniformMatrix3fv(this.addr,!1,Hd),hn(e,n)}}function xy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),hn(e,t)}else{if(cn(e,n))return;Bd.set(n),i.uniformMatrix4fv(this.addr,!1,Bd),hn(e,n)}}function yy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function vy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;i.uniform2iv(this.addr,t),hn(e,t)}}function _y(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;i.uniform3iv(this.addr,t),hn(e,t)}}function My(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;i.uniform4iv(this.addr,t),hn(e,t)}}function Ey(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function by(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;i.uniform2uiv(this.addr,t),hn(e,t)}}function Sy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;i.uniform3uiv(this.addr,t),hn(e,t)}}function wy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;i.uniform4uiv(this.addr,t),hn(e,t)}}function Ty(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(mf.compareFunction=e.isReversedDepthBuffer()?cc:lc,r=mf):r=np,e.setTexture2D(t||r,s)}function Ay(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||sp,s)}function Ry(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||rp,s)}function Cy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ip,s)}function Iy(i){switch(i){case 5126:return fy;case 35664:return uy;case 35665:return dy;case 35666:return py;case 35674:return my;case 35675:return gy;case 35676:return xy;case 5124:case 35670:return yy;case 35667:case 35671:return vy;case 35668:case 35672:return _y;case 35669:case 35673:return My;case 5125:return Ey;case 36294:return by;case 36295:return Sy;case 36296:return wy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ty;case 35679:case 36299:case 36307:return Ay;case 35680:case 36300:case 36308:case 36293:return Ry;case 36289:case 36303:case 36311:case 36292:return Cy}}function Py(i,t){i.uniform1fv(this.addr,t)}function Ly(i,t){let e=Tr(t,this.size,2);i.uniform2fv(this.addr,e)}function Dy(i,t){let e=Tr(t,this.size,3);i.uniform3fv(this.addr,e)}function Ny(i,t){let e=Tr(t,this.size,4);i.uniform4fv(this.addr,e)}function zy(i,t){let e=Tr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Uy(i,t){let e=Tr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Fy(i,t){let e=Tr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Oy(i,t){i.uniform1iv(this.addr,t)}function By(i,t){i.uniform2iv(this.addr,t)}function Hy(i,t){i.uniform3iv(this.addr,t)}function ky(i,t){i.uniform4iv(this.addr,t)}function Gy(i,t){i.uniform1uiv(this.addr,t)}function Vy(i,t){i.uniform2uiv(this.addr,t)}function Wy(i,t){i.uniform3uiv(this.addr,t)}function Xy(i,t){i.uniform4uiv(this.addr,t)}function Yy(i,t,e){let n=this.cache,s=t.length,r=pc(e,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=mf:o=np;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function qy(i,t,e){let n=this.cache,s=t.length,r=pc(e,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||sp,r[o])}function Zy(i,t,e){let n=this.cache,s=t.length,r=pc(e,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||rp,r[o])}function $y(i,t,e){let n=this.cache,s=t.length,r=pc(e,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ip,r[o])}function Jy(i){switch(i){case 5126:return Py;case 35664:return Ly;case 35665:return Dy;case 35666:return Ny;case 35674:return zy;case 35675:return Uy;case 35676:return Fy;case 5124:case 35670:return Oy;case 35667:case 35671:return By;case 35668:case 35672:return Hy;case 35669:case 35673:return ky;case 5125:return Gy;case 36294:return Vy;case 36295:return Wy;case 36296:return Xy;case 35678:case 36198:case 36298:case 36306:case 35682:return Yy;case 35679:case 36299:case 36307:return qy;case 35680:case 36300:case 36308:case 36293:return Zy;case 36289:case 36303:case 36311:case 36292:return $y}}var gf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Iy(e.type)}},xf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jy(e.type)}},yf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},df=/(\w+)(\])?(\[|\.)?/g;function Gd(i,t){i.seq.push(t),i.map[t.id]=t}function Ky(i,t,e){let n=i.name,s=n.length;for(df.lastIndex=0;;){let r=df.exec(n),o=df.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Gd(e,c===void 0?new gf(a,i,t):new xf(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new yf(a),Gd(e,f)),e=f}}}var wr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Ky(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Vd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var jy=37297,Qy=0;function tv(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Wd=new oe;function ev(i){ye._getMatrix(Wd,ye.workingColorSpace,i);let t=`mat3( ${Wd.elements.map(e=>e.toFixed(4))} )`;switch(ye.getTransfer(i)){case Qr:return[t,"LinearTransferOETF"];case Ae:return[t,"sRGBTransferOETF"];default:return ee("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Xd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+tv(i.getShaderSource(t),a)}else return r}function nv(i,t){let e=ev(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var iv={[Uh]:"Linear",[Fh]:"Reinhard",[Oh]:"Cineon",[vr]:"ACESFilmic",[Hh]:"AgX",[kh]:"Neutral",[Bh]:"Custom"};function sv(i,t){let e=iv[t];return e===void 0?(ee("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var fc=new O;function rv(){ye.getLuminanceCoefficients(fc);let i=fc.x.toFixed(4),t=fc.y.toFixed(4),e=fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ov(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function av(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function lv(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Go(i){return i!==""}function Yd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var cv=/^[ \t]*#include +<([\w\d./]+)>/gm;function vf(i){return i.replace(cv,fv)}var hv=new Map;function fv(i,t){let e=pe[t];if(e===void 0){let n=hv.get(t);if(n!==void 0)e=pe[n],ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return vf(e)}var uv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zd(i){return i.replace(uv,dv)}function dv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $d(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var pv={[Co]:"SHADOWMAP_TYPE_PCF",[yr]:"SHADOWMAP_TYPE_VSM"};function mv(i){return pv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var gv={[ns]:"ENVMAP_TYPE_CUBE",[bs]:"ENVMAP_TYPE_CUBE",[Io]:"ENVMAP_TYPE_CUBE_UV"};function xv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":gv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var yv={[bs]:"ENVMAP_MODE_REFRACTION"};function vv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":yv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var _v={[Ml]:"ENVMAP_BLENDING_MULTIPLY",[ld]:"ENVMAP_BLENDING_MIX",[cd]:"ENVMAP_BLENDING_ADD"};function Mv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":_v[i.combine]||"ENVMAP_BLENDING_NONE"}function Ev(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function bv(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=mv(e),c=xv(e),h=vv(e),f=Mv(e),u=Ev(e),d=ov(e),m=av(r),y=s.createProgram(),p,g,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Go).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Go).join(`
`),g.length>0&&(g+=`
`)):(p=[$d(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),g=[$d(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?pe.tonemapping_pars_fragment:"",e.toneMapping!==ei?sv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,nv("linearToOutputTexel",e.outputColorSpace),rv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Go).join(`
`)),o=vf(o),o=Yd(o,e),o=qd(o,e),a=vf(a),a=Yd(a,e),a=qd(a,e),o=Zd(o),a=Zd(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===Jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let S=E+p+o,x=E+g+a,_=Vd(s,s.VERTEX_SHADER,S),M=Vd(s,s.FRAGMENT_SHADER,x);s.attachShader(y,_),s.attachShader(y,M),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function w(P){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(y)||"",D=s.getShaderInfoLog(_)||"",R=s.getShaderInfoLog(M)||"",C=L.trim(),z=D.trim(),F=R.trim(),K=!0,V=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,_,M);else{let J=Xd(s,_,"vertex"),Z=Xd(s,M,"fragment");se("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+C+`
`+J+`
`+Z)}else C!==""?ee("WebGLProgram: Program Info Log:",C):(z===""||F==="")&&(V=!1);V&&(P.diagnostics={runnable:K,programLog:C,vertexShader:{log:z,prefix:p},fragmentShader:{log:F,prefix:g}})}s.deleteShader(_),s.deleteShader(M),v=new wr(s,y),b=lv(s,y)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(y,jy)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qy++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=_,this.fragmentShader=M,this}var Sv=0,_f=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Mf(t),e.set(t,n)),n}},Mf=class{constructor(t){this.id=Sv++,this.code=t,this.usedTimes=0}};function wv(i){return i===rs||i===Uo||i===Fo}function Tv(i,t,e,n,s,r){let o=new io,a=new _f,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function y(v,b,A,P,L,D){let R=P.fog,C=L.geometry,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,F=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,K=t.get(v.envMap||z,F),V=K&&K.mapping===Io?K.image.height:null,J=d[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&ee("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let Z=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,ot=Z!==void 0?Z.length:0,mt=0;C.morphAttributes.position!==void 0&&(mt=1),C.morphAttributes.normal!==void 0&&(mt=2),C.morphAttributes.color!==void 0&&(mt=3);let Yt,At,kt,U;if(J){let Be=yi[J];Yt=Be.vertexShader,At=Be.fragmentShader}else{Yt=v.vertexShader,At=v.fragmentShader;let Be=a.getVertexShaderStage(v),we=a.getFragmentShaderStage(v);a.update(v,Be,we),kt=Be.id,U=we.id}let H=i.getRenderTarget(),rt=i.state.buffers.depth.getReversed(),_t=L.isInstancedMesh===!0,ft=L.isBatchedMesh===!0,Y=!!v.map,ut=!!v.matcap,$=!!K,et=!!v.aoMap,ct=!!v.lightMap,lt=!!v.bumpMap&&v.wireframe===!1,xt=!!v.normalMap,Ot=!!v.displacementMap,Gt=!!v.emissiveMap,Qt=!!v.metalnessMap,ie=!!v.roughnessMap,B=v.anisotropy>0,_e=v.clearcoat>0,fe=v.dispersion>0,N=v.retroreflectivity>0,T=v.iridescence>0,q=v.sheen>0,tt=v.transmission>0,it=B&&!!v.anisotropyMap,bt=_e&&!!v.clearcoatMap,St=_e&&!!v.clearcoatNormalMap,st=_e&&!!v.clearcoatRoughnessMap,ht=T&&!!v.iridescenceMap,Rt=T&&!!v.iridescenceThicknessMap,$t=q&&!!v.sheenColorMap,Lt=q&&!!v.sheenRoughnessMap,Ct=!!v.specularMap,Jt=!!v.specularColorMap,te=!!v.specularIntensityMap,le=tt&&!!v.transmissionMap,W=tt&&!!v.thicknessMap,It=!!v.gradientMap,at=!!v.alphaMap,Pt=v.alphaTest>0,Ut=!!v.alphaHash,dt=!!v.extensions,Kt=ei;v.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Kt=i.toneMapping);let qt={shaderID:J,shaderType:v.type,shaderName:v.name,vertexShader:Yt,fragmentShader:At,defines:v.defines,customVertexShaderID:kt,customFragmentShaderID:U,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:ft,batchingColor:ft&&L._colorsTexture!==null,instancing:_t,instancingColor:_t&&L.instanceColor!==null,instancingMorph:_t&&L.morphTexture!==null,outputColorSpace:H===null?i.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:ye.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Y,matcap:ut,envMap:$,envMapMode:$&&K.mapping,envMapCubeUVHeight:V,aoMap:et,lightMap:ct,bumpMap:lt,normalMap:xt,displacementMap:Ot,emissiveMap:Gt,normalMapObjectSpace:xt&&v.normalMapType===ud,normalMapTangentSpace:xt&&v.normalMapType===Oo,packedNormalMap:xt&&v.normalMapType===Oo&&wv(v.normalMap.format),metalnessMap:Qt,roughnessMap:ie,anisotropy:B,anisotropyMap:it,clearcoat:_e,clearcoatMap:bt,clearcoatNormalMap:St,clearcoatRoughnessMap:st,dispersion:fe,retroreflection:N,iridescence:T,iridescenceMap:ht,iridescenceThicknessMap:Rt,sheen:q,sheenColorMap:$t,sheenRoughnessMap:Lt,specularMap:Ct,specularColorMap:Jt,specularIntensityMap:te,transmission:tt,transmissionMap:le,thicknessMap:W,gradientMap:It,opaque:v.transparent===!1&&v.blending===es&&v.alphaToCoverage===!1,alphaMap:at,alphaTest:Pt,alphaHash:Ut,combine:v.combine,mapUv:Y&&m(v.map.channel),aoMapUv:et&&m(v.aoMap.channel),lightMapUv:ct&&m(v.lightMap.channel),bumpMapUv:lt&&m(v.bumpMap.channel),normalMapUv:xt&&m(v.normalMap.channel),displacementMapUv:Ot&&m(v.displacementMap.channel),emissiveMapUv:Gt&&m(v.emissiveMap.channel),metalnessMapUv:Qt&&m(v.metalnessMap.channel),roughnessMapUv:ie&&m(v.roughnessMap.channel),anisotropyMapUv:it&&m(v.anisotropyMap.channel),clearcoatMapUv:bt&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:St&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&m(v.sheenRoughnessMap.channel),specularMapUv:Ct&&m(v.specularMap.channel),specularColorMapUv:Jt&&m(v.specularColorMap.channel),specularIntensityMapUv:te&&m(v.specularIntensityMap.channel),transmissionMapUv:le&&m(v.transmissionMap.channel),thicknessMapUv:W&&m(v.thicknessMap.channel),alphaMapUv:at&&m(v.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(xt||B),vertexNormals:!!C.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!C.attributes.uv&&(Y||at),fog:!!R,useFog:v.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||C.attributes.normal===void 0&&xt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:rt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:mt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Kt,decodeVideoTexture:Y&&v.map.isVideoTexture===!0&&ye.getTransfer(v.map.colorSpace)===Ae,decodeVideoTextureEmissive:Gt&&v.emissiveMap.isVideoTexture===!0&&ye.getTransfer(v.emissiveMap.colorSpace)===Ae,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===$e,flipSided:v.side===ln,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:dt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&v.extensions.multiDraw===!0||ft)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return qt.vertexUv1s=l.has(1),qt.vertexUv2s=l.has(2),qt.vertexUv3s=l.has(3),l.clear(),qt}function p(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let A in v.defines)b.push(A),b.push(v.defines[A]);return v.isRawShaderMaterial===!1&&(g(b,v),E(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function g(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numSunLights),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numSunLightShadows),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function E(v,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function S(v){let b=d[v.type],A;if(b){let P=yi[b];A=Id.clone(P.uniforms)}else A=v.uniforms;return A}function x(v,b){let A=h.get(b);return A!==void 0?++A.usedTimes:(A=new bv(i,b,v,s),c.push(A),h.set(b,A)),A}function _(v){if(--v.usedTimes===0){let b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function M(v){a.remove(v)}function w(){a.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:S,acquireProgram:x,releaseProgram:_,releaseShaderCache:M,programs:c,dispose:w}}function Av(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Rv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Jd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Kd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,m,y,p,g){let E=i[t];return E===void 0?(E={id:u.id,object:u,geometry:d,material:m,materialVariant:o(u),groupOrder:y,renderOrder:u.renderOrder,z:p,group:g},i[t]=E):(E.id=u.id,E.object=u,E.geometry=d,E.material=m,E.materialVariant=o(u),E.groupOrder=y,E.renderOrder=u.renderOrder,E.z=p,E.group=g),t++,E}function l(u,d,m,y,p,g,E){E.reversedDepth===!0&&(p=-p);let S=a(u,d,m,y,p,g);m.transmission>0?n.push(S):m.transparent===!0?s.push(S):e.push(S)}function c(u,d,m,y,p,g){let E=a(u,d,m,y,p,g);m.transmission>0?n.unshift(E):m.transparent===!0?s.unshift(E):e.unshift(E)}function h(u,d){e.length>1&&e.sort(u||Rv),n.length>1&&n.sort(d||Jd),s.length>1&&s.sort(d||Jd)}function f(){for(let u=t,d=i.length;u<d;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function Cv(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Kd,i.set(n,[o])):s>=r.length?(o=new Kd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Iv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new Ht};break;case"SpotLight":e={position:new O,direction:new O,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function Pv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Lv=0;function Dv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Nv(i){let t=new Iv,e=Pv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let s=new O,r=new Se,o=new Se;function a(c){let h=0,f=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let d=0,m=0,y=0,p=0,g=0,E=0,S=0,x=0,_=0,M=0,w=0,v=0,b=0,A=0;c.sort(Dv);for(let L=0,D=c.length;L<D;L++){let R=c[L],C=R.color,z=R.intensity,F=R.distance,K=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===rs?K=R.shadow.map.texture:K=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=C.r*z,f+=C.g*z,u+=C.b*z;else if(R.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(R.sh.coefficients[V],z);A++}else if(R.isSunLight){let V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let J=R.shadow,Z=e.get(R);Z.shadowIntensity=J.intensity,Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[m]=Z,n.sunShadowMap[m]=K;let ot=J.getViewportCount();for(let mt=0;mt<ot;mt++)n.sunShadowMatrix[y+mt]=J.getMatrix(mt),n.sunShadowCascade[y+mt]=J._cascadeData[mt];y+=ot,m++}n.sun[d]=V,d++}else if(R.isDirectionalLight){let V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let J=R.shadow,Z=e.get(R);Z.shadowIntensity=J.intensity,Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,n.directionalShadow[p]=Z,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=R.shadow.matrix,_++}n.directional[p]=V,p++}else if(R.isSpotLight){let V=t.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(C).multiplyScalar(z),V.distance=F,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,n.spot[E]=V;let J=R.shadow;if(R.map&&(n.spotLightMap[v]=R.map,v++,J.updateMatrices(R),R.castShadow&&b++),n.spotLightMatrix[E]=J.matrix,R.castShadow){let Z=e.get(R);Z.shadowIntensity=J.intensity,Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,n.spotShadow[E]=Z,n.spotShadowMap[E]=K,w++}E++}else if(R.isRectAreaLight){let V=t.get(R);V.color.copy(C).multiplyScalar(z),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),n.rectArea[S]=V,S++}else if(R.isPointLight){let V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){let J=R.shadow,Z=e.get(R);Z.shadowIntensity=J.intensity,Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,Z.shadowCameraNear=J.camera.near,Z.shadowCameraFar=J.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=R.shadow.matrix,M++}n.point[g]=V,g++}else if(R.isHemisphereLight){let V=t.get(R);V.skyColor.copy(R.color).multiplyScalar(z),V.groundColor.copy(R.groundColor).multiplyScalar(z),n.hemi[x]=V,x++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Dt.LTC_FLOAT_1,n.rectAreaLTC2=Dt.LTC_FLOAT_2):(n.rectAreaLTC1=Dt.LTC_HALF_1,n.rectAreaLTC2=Dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let P=n.hash;(P.sunLength!==d||P.directionalLength!==p||P.pointLength!==g||P.spotLength!==E||P.rectAreaLength!==S||P.hemiLength!==x||P.numSunShadows!==m||P.numDirectionalShadows!==_||P.numPointShadows!==M||P.numSpotShadows!==w||P.numSpotMaps!==v||P.numLightProbes!==A)&&(n.sun.length=d,n.directional.length=p,n.spot.length=E,n.rectArea.length=S,n.point.length=g,n.hemi.length=x,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.directionalShadowMatrix.length=_,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+v-b,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=A,P.sunLength=d,P.directionalLength=p,P.pointLength=g,P.spotLength=E,P.rectAreaLength=S,P.hemiLength=x,P.numSunShadows=m,P.numDirectionalShadows=_,P.numPointShadows=M,P.numSpotShadows=w,P.numSpotMaps=v,P.numLightProbes=A,n.version=Lv++)}function l(c,h){let f=0,u=0,d=0,m=0,y=0,p=0,g=h.matrixWorldInverse;for(let E=0,S=c.length;E<S;E++){let x=c[E];if(x.isSunLight){let _=n.sun[f];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(g),f++}else if(x.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),u++}else if(x.isSpotLight){let _=n.spot[m];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),m++}else if(x.isRectAreaLight){let _=n.rectArea[y];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(x.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),y++}else if(x.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){let _=n.hemi[p];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:n}}function jd(i){let t=new Nv(i),e=[],n=[],s=[];function r(u){f.camera=u,e.length=0,n.length=0,s.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function zv(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new jd(i),t.set(s,[a])):r>=o.length?(a=new jd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Uv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fv=`uniform sampler2D shadow_pass;
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
}`,Ov=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],Bv=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Qd=new Se,ko=new O,pf=new O;function Hv(i,t,e){let n=new fr,s=new Mt,r=new Mt,o=new Ge,a=new rl,l=new ol,c={},h=e.maxTextureSize,f={[ts]:ln,[ln]:ts,[$e]:$e},u=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:Uv,fragmentShader:Fv}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let m=new ze;m.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new k(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Co;let g=this.type;this.render=function(M,w,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;this.type===_l&&(ee("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Co);let b=i.getRenderTarget(),A=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),L=i.state;L.setBlending(gi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let D=g!==this.type;D&&w.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(C=>C.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,C=M.length;R<C;R++){let z=M[R],F=z.shadow;if(F===void 0){ee("WebGLShadowMap:",z,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let K=F.getFrameExtents();s.multiply(K),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,F.mapSize.y=r.y));let V=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=V,F.map===null||D===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===yr){if(z.isPointLight){ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new In(s.x,s.y,{format:rs,type:ii,minFilter:pn,magFilter:pn,generateMipmaps:!1}),F.map.texture.name=z.name+".shadowMap",F.map.depthTexture=new qi(s.x,s.y,Vn),F.map.depthTexture.name=z.name+".shadowMapDepth",F.map.depthTexture.format=di,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=un,F.map.depthTexture.magFilter=un}else z.isPointLight?(F.map=new uc(s.x),F.map.depthTexture=new Ja(s.x,ni)):(F.map=new In(s.x,s.y),F.map.depthTexture=new qi(s.x,s.y,ni)),F.map.depthTexture.name=z.name+".shadowMap",F.map.depthTexture.format=di,this.type===Co?(F.map.depthTexture.compareFunction=V?cc:lc,F.map.depthTexture.minFilter=pn,F.map.depthTexture.magFilter=pn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=un,F.map.depthTexture.magFilter=un);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y)&&F.map.setSize(s.x,s.y);let J=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();z.isPointLight!==!0&&F.updateMatrices(z,v);for(let Z=0;Z<J;Z++){let ot=F.getCamera(Z);if(z.isPointLight){let mt=F.camera,Yt=F.matrix,At=z.distance||mt.far;At!==mt.far&&(mt.far=At,mt.updateProjectionMatrix()),ko.setFromMatrixPosition(z.matrixWorld),mt.position.copy(ko),pf.copy(mt.position),pf.add(Ov[Z]),mt.up.copy(Bv[Z]),mt.lookAt(pf),mt.updateMatrixWorld(),Yt.makeTranslation(-ko.x,-ko.y,-ko.z),Qd.multiplyMatrices(mt.projectionMatrix,mt.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Qd,mt.coordinateSystem,mt.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,Z),i.clear();else{Z===0&&(i.setRenderTarget(F.map),i.clear());let mt=F.getViewport(Z);o.set(r.x*mt.x,r.y*mt.y,r.x*mt.z,r.y*mt.w),L.viewport(o)}n=F.getFrustum(Z),x(w,v,ot,z,this.type)}F.isPointLightShadow!==!0&&this.type===yr&&E(F,v),F.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(b,A,P)};function E(M,w){let v=t.update(y);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null?M.mapPass=new In(s.x,s.y,{format:rs,type:ii}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(w,null,v,u,y,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(w,null,v,d,y,null)}function S(M,w,v,b){let A=null,P=v.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)A=P;else if(A=v.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let L=A.uuid,D=w.uuid,R=c[L];R===void 0&&(R={},c[L]=R);let C=R[D];C===void 0&&(C=A.clone(),R[D]=C,w.addEventListener("dispose",_)),A=C}if(A.visible=w.visible,A.wireframe=w.wireframe,b===yr?A.side=w.shadowSide!==null?w.shadowSide:w.side:A.side=w.shadowSide!==null?w.shadowSide:f[w.side],A.alphaMap=w.alphaMap,A.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,A.map=w.map,A.clipShadows=w.clipShadows,A.clippingPlanes=w.clippingPlanes,A.clipIntersection=w.clipIntersection,A.displacementMap=w.displacementMap,A.displacementScale=w.displacementScale,A.displacementBias=w.displacementBias,A.wireframeLinewidth=w.wireframeLinewidth,A.linewidth=w.linewidth,v.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let L=i.properties.get(A);L.light=v}return A}function x(M,w,v,b,A){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&A===yr)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,M.matrixWorld);let D=t.update(M),R=M.material;if(Array.isArray(R)){let C=D.groups;for(let z=0,F=C.length;z<F;z++){let K=C[z],V=R[K.materialIndex];if(V&&V.visible){let J=S(M,V,b,A);M.onBeforeShadow(i,M,w,v,D,J,K),i.renderBufferDirect(v,null,D,J,M,K),M.onAfterShadow(i,M,w,v,D,J,K)}}}else if(R.visible){let C=S(M,R,b,A);M.onBeforeShadow(i,M,w,v,D,C,null),i.renderBufferDirect(v,null,D,C,M,null),M.onAfterShadow(i,M,w,v,D,C,null)}}let L=M.children;for(let D=0,R=L.length;D<R;D++)x(L[D],w,v,b,A)}function _(M){M.target.removeEventListener("dispose",_);for(let v in c){let b=c[v],A=M.target.uuid;A in b&&(b[A].dispose(),delete b[A])}}}function kv(i,t){function e(){let W=!1,It=new Ge,at=null,Pt=new Ge(0,0,0,0);return{setMask:function(Ut){at!==Ut&&!W&&(i.colorMask(Ut,Ut,Ut,Ut),at=Ut)},setLocked:function(Ut){W=Ut},setClear:function(Ut,dt,Kt,qt,Be){Be===!0&&(Ut*=qt,dt*=qt,Kt*=qt),It.set(Ut,dt,Kt,qt),Pt.equals(It)===!1&&(i.clearColor(Ut,dt,Kt,qt),Pt.copy(It))},reset:function(){W=!1,at=null,Pt.set(-1,0,0,0)}}}function n(){let W=!1,It=!1,at=null,Pt=null,Ut=null;return{setReversed:function(dt){if(It!==dt){let Kt=t.get("EXT_clip_control");dt?Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.ZERO_TO_ONE_EXT):Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.NEGATIVE_ONE_TO_ONE_EXT),It=dt;let qt=Ut;Ut=null,this.setClear(qt)}},getReversed:function(){return It},setTest:function(dt){dt?H(i.DEPTH_TEST):rt(i.DEPTH_TEST)},setMask:function(dt){at!==dt&&!W&&(i.depthMask(dt),at=dt)},setFunc:function(dt){if(It&&(dt=bd[dt]),Pt!==dt){switch(dt){case Oa:i.depthFunc(i.NEVER);break;case Ba:i.depthFunc(i.ALWAYS);break;case Ha:i.depthFunc(i.LESS);break;case tr:i.depthFunc(i.LEQUAL);break;case ka:i.depthFunc(i.EQUAL);break;case Ga:i.depthFunc(i.GEQUAL);break;case Va:i.depthFunc(i.GREATER);break;case Wa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pt=dt}},setLocked:function(dt){W=dt},setClear:function(dt){Ut!==dt&&(Ut=dt,It&&(dt=1-dt),i.clearDepth(dt))},reset:function(){W=!1,at=null,Pt=null,Ut=null,It=!1}}}function s(){let W=!1,It=null,at=null,Pt=null,Ut=null,dt=null,Kt=null,qt=null,Be=null;return{setTest:function(we){W||(we?H(i.STENCIL_TEST):rt(i.STENCIL_TEST))},setMask:function(we){It!==we&&!W&&(i.stencilMask(we),It=we)},setFunc:function(we,qn,li){(at!==we||Pt!==qn||Ut!==li)&&(i.stencilFunc(we,qn,li),at=we,Pt=qn,Ut=li)},setOp:function(we,qn,li){(dt!==we||Kt!==qn||qt!==li)&&(i.stencilOp(we,qn,li),dt=we,Kt=qn,qt=li)},setLocked:function(we){W=we},setClear:function(we){Be!==we&&(i.clearStencil(we),Be=we)},reset:function(){W=!1,It=null,at=null,Pt=null,Ut=null,dt=null,Kt=null,qt=null,Be=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,m=[],y=null,p=!1,g=null,E=null,S=null,x=null,_=null,M=null,w=null,v=new Ht(0,0,0),b=0,A=!1,P=null,L=null,D=null,R=null,C=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,K=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),F=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),F=K>=2);let J=null,Z={},ot=i.getParameter(i.SCISSOR_BOX),mt=i.getParameter(i.VIEWPORT),Yt=new Ge().fromArray(ot),At=new Ge().fromArray(mt);function kt(W,It,at,Pt){let Ut=new Uint8Array(4),dt=i.createTexture();i.bindTexture(W,dt),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Kt=0;Kt<at;Kt++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(It,0,i.RGBA,1,1,Pt,0,i.RGBA,i.UNSIGNED_BYTE,Ut):i.texImage2D(It+Kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ut);return dt}let U={};U[i.TEXTURE_2D]=kt(i.TEXTURE_2D,i.TEXTURE_2D,1),U[i.TEXTURE_CUBE_MAP]=kt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),U[i.TEXTURE_2D_ARRAY]=kt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),U[i.TEXTURE_3D]=kt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),H(i.DEPTH_TEST),o.setFunc(tr),lt(!1),xt(Ph),H(i.CULL_FACE),et(gi);function H(W){h[W]!==!0&&(i.enable(W),h[W]=!0)}function rt(W){h[W]!==!1&&(i.disable(W),h[W]=!1)}function _t(W,It){return u[W]!==It?(i.bindFramebuffer(W,It),u[W]=It,W===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=It),W===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=It),!0):!1}function ft(W,It){let at=m,Pt=!1;if(W){at=d.get(It),at===void 0&&(at=[],d.set(It,at));let Ut=W.textures;if(at.length!==Ut.length||at[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Kt=Ut.length;dt<Kt;dt++)at[dt]=i.COLOR_ATTACHMENT0+dt;at.length=Ut.length,Pt=!0}}else at[0]!==i.BACK&&(at[0]=i.BACK,Pt=!0);Pt&&i.drawBuffers(at)}function Y(W){return y!==W?(i.useProgram(W),y=W,!0):!1}let ut={[Es]:i.FUNC_ADD,[Xu]:i.FUNC_SUBTRACT,[Yu]:i.FUNC_REVERSE_SUBTRACT};ut[qu]=i.MIN,ut[Zu]=i.MAX;let $={[$u]:i.ZERO,[Ju]:i.ONE,[Ku]:i.SRC_COLOR,[Nh]:i.SRC_ALPHA,[id]:i.SRC_ALPHA_SATURATE,[ed]:i.DST_COLOR,[Qu]:i.DST_ALPHA,[ju]:i.ONE_MINUS_SRC_COLOR,[zh]:i.ONE_MINUS_SRC_ALPHA,[nd]:i.ONE_MINUS_DST_COLOR,[td]:i.ONE_MINUS_DST_ALPHA,[sd]:i.CONSTANT_COLOR,[rd]:i.ONE_MINUS_CONSTANT_COLOR,[od]:i.CONSTANT_ALPHA,[ad]:i.ONE_MINUS_CONSTANT_ALPHA};function et(W,It,at,Pt,Ut,dt,Kt,qt,Be,we){if(W===gi){p===!0&&(rt(i.BLEND),p=!1);return}if(p===!1&&(H(i.BLEND),p=!0),W!==Wu){if(W!==g||we!==A){if((E!==Es||_!==Es)&&(i.blendEquation(i.FUNC_ADD),E=Es,_=Es),we)switch(W){case es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pi:i.blendFunc(i.ONE,i.ONE);break;case Lh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:se("WebGLState: Invalid blending: ",W);break}else switch(W){case es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Lh:se("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dh:se("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:se("WebGLState: Invalid blending: ",W);break}S=null,x=null,M=null,w=null,v.set(0,0,0),b=0,g=W,A=we}return}Ut=Ut||It,dt=dt||at,Kt=Kt||Pt,(It!==E||Ut!==_)&&(i.blendEquationSeparate(ut[It],ut[Ut]),E=It,_=Ut),(at!==S||Pt!==x||dt!==M||Kt!==w)&&(i.blendFuncSeparate($[at],$[Pt],$[dt],$[Kt]),S=at,x=Pt,M=dt,w=Kt),(qt.equals(v)===!1||Be!==b)&&(i.blendColor(qt.r,qt.g,qt.b,Be),v.copy(qt),b=Be),g=W,A=!1}function ct(W,It){W.side===$e?rt(i.CULL_FACE):H(i.CULL_FACE);let at=W.side===ln;It&&(at=!at),lt(at),W.blending===es&&W.transparent===!1?et(gi):et(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let Pt=W.stencilWrite;a.setTest(Pt),Pt&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Gt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?H(i.SAMPLE_ALPHA_TO_COVERAGE):rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function lt(W){P!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),P=W)}function xt(W){W!==Gu?(H(i.CULL_FACE),W!==L&&(W===Ph?i.cullFace(i.BACK):W===Vu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):rt(i.CULL_FACE),L=W}function Ot(W){W!==D&&(F&&i.lineWidth(W),D=W)}function Gt(W,It,at){W?(H(i.POLYGON_OFFSET_FILL),(R!==It||C!==at)&&(R=It,C=at,o.getReversed()&&(It=-It),i.polygonOffset(It,at))):rt(i.POLYGON_OFFSET_FILL)}function Qt(W){W?H(i.SCISSOR_TEST):rt(i.SCISSOR_TEST)}function ie(W){W===void 0&&(W=i.TEXTURE0+z-1),J!==W&&(i.activeTexture(W),J=W)}function B(W,It,at){at===void 0&&(J===null?at=i.TEXTURE0+z-1:at=J);let Pt=Z[at];Pt===void 0&&(Pt={type:void 0,texture:void 0},Z[at]=Pt),(Pt.type!==W||Pt.texture!==It)&&(J!==at&&(i.activeTexture(at),J=at),i.bindTexture(W,It||U[W]),Pt.type=W,Pt.texture=It)}function _e(){let W=Z[J];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function fe(){try{i.compressedTexImage2D(...arguments)}catch(W){se("WebGLState:",W)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(W){se("WebGLState:",W)}}function T(){try{i.texSubImage2D(...arguments)}catch(W){se("WebGLState:",W)}}function q(){try{i.texSubImage3D(...arguments)}catch(W){se("WebGLState:",W)}}function tt(){try{i.compressedTexSubImage2D(...arguments)}catch(W){se("WebGLState:",W)}}function it(){try{i.compressedTexSubImage3D(...arguments)}catch(W){se("WebGLState:",W)}}function bt(){try{i.texStorage2D(...arguments)}catch(W){se("WebGLState:",W)}}function St(){try{i.texStorage3D(...arguments)}catch(W){se("WebGLState:",W)}}function st(){try{i.texImage2D(...arguments)}catch(W){se("WebGLState:",W)}}function ht(){try{i.texImage3D(...arguments)}catch(W){se("WebGLState:",W)}}function Rt(W){return f[W]!==void 0?f[W]:i.getParameter(W)}function $t(W,It){f[W]!==It&&(i.pixelStorei(W,It),f[W]=It)}function Lt(W){Yt.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),Yt.copy(W))}function Ct(W){At.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),At.copy(W))}function Jt(W,It){let at=c.get(It);at===void 0&&(at=new WeakMap,c.set(It,at));let Pt=at.get(W);Pt===void 0&&(Pt=i.getUniformBlockIndex(It,W.name),at.set(W,Pt))}function te(W,It){let Pt=c.get(It).get(W);l.get(It)!==Pt&&(i.uniformBlockBinding(It,Pt,W.__bindingPointIndex),l.set(It,Pt))}function le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},J=null,Z={},u={},d=new WeakMap,m=[],y=null,p=!1,g=null,E=null,S=null,x=null,_=null,M=null,w=null,v=new Ht(0,0,0),b=0,A=!1,P=null,L=null,D=null,R=null,C=null,Yt.set(0,0,i.canvas.width,i.canvas.height),At.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:H,disable:rt,bindFramebuffer:_t,drawBuffers:ft,useProgram:Y,setBlending:et,setMaterial:ct,setFlipSided:lt,setCullFace:xt,setLineWidth:Ot,setPolygonOffset:Gt,setScissorTest:Qt,activeTexture:ie,bindTexture:B,unbindTexture:_e,compressedTexImage2D:fe,compressedTexImage3D:N,texImage2D:st,texImage3D:ht,pixelStorei:$t,getParameter:Rt,updateUBOMapping:Jt,uniformBlockBinding:te,texStorage2D:bt,texStorage3D:St,texSubImage2D:T,texSubImage3D:q,compressedTexSubImage2D:tt,compressedTexSubImage3D:it,scissor:Lt,viewport:Ct,reset:le}}function Gv(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Mt,h=new WeakMap,f=new Set,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(N,T){return m?new OffscreenCanvas(N,T):to("canvas")}function p(N,T,q){let tt=1,it=fe(N);if((it.width>q||it.height>q)&&(tt=q/Math.max(it.width,it.height)),tt<1)if(typeof HTMLImageElement!="undefined"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&N instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&N instanceof ImageBitmap||typeof VideoFrame!="undefined"&&N instanceof VideoFrame){let bt=Math.floor(tt*it.width),St=Math.floor(tt*it.height);u===void 0&&(u=y(bt,St));let st=T?y(bt,St):u;return st.width=bt,st.height=St,st.getContext("2d").drawImage(N,0,0,bt,St),ee("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+bt+"x"+St+")."),st}else return"data"in N&&ee("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),N;return N}function g(N){return N.generateMipmaps}function E(N){i.generateMipmap(N)}function S(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(N,T,q,tt,it,bt=!1){if(N!==null){if(i[N]!==void 0)return i[N];ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let St;tt&&(St=t.get("EXT_texture_norm16"),St||ee("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let st=T;if(T===i.RED&&(q===i.FLOAT&&(st=i.R32F),q===i.HALF_FLOAT&&(st=i.R16F),q===i.UNSIGNED_BYTE&&(st=i.R8),q===i.UNSIGNED_SHORT&&St&&(st=St.R16_EXT),q===i.SHORT&&St&&(st=St.R16_SNORM_EXT)),T===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(st=i.R8UI),q===i.UNSIGNED_SHORT&&(st=i.R16UI),q===i.UNSIGNED_INT&&(st=i.R32UI),q===i.BYTE&&(st=i.R8I),q===i.SHORT&&(st=i.R16I),q===i.INT&&(st=i.R32I)),T===i.RG&&(q===i.FLOAT&&(st=i.RG32F),q===i.HALF_FLOAT&&(st=i.RG16F),q===i.UNSIGNED_BYTE&&(st=i.RG8),q===i.UNSIGNED_SHORT&&St&&(st=St.RG16_EXT),q===i.SHORT&&St&&(st=St.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(st=i.RG8UI),q===i.UNSIGNED_SHORT&&(st=i.RG16UI),q===i.UNSIGNED_INT&&(st=i.RG32UI),q===i.BYTE&&(st=i.RG8I),q===i.SHORT&&(st=i.RG16I),q===i.INT&&(st=i.RG32I)),T===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(st=i.RGB8UI),q===i.UNSIGNED_SHORT&&(st=i.RGB16UI),q===i.UNSIGNED_INT&&(st=i.RGB32UI),q===i.BYTE&&(st=i.RGB8I),q===i.SHORT&&(st=i.RGB16I),q===i.INT&&(st=i.RGB32I)),T===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(st=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(st=i.RGBA16UI),q===i.UNSIGNED_INT&&(st=i.RGBA32UI),q===i.BYTE&&(st=i.RGBA8I),q===i.SHORT&&(st=i.RGBA16I),q===i.INT&&(st=i.RGBA32I)),T===i.RGB&&(q===i.UNSIGNED_SHORT&&St&&(st=St.RGB16_EXT),q===i.SHORT&&St&&(st=St.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(st=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(st=i.R11F_G11F_B10F)),T===i.RGBA){let ht=bt?Qr:ye.getTransfer(it);q===i.FLOAT&&(st=i.RGBA32F),q===i.HALF_FLOAT&&(st=i.RGBA16F),q===i.UNSIGNED_BYTE&&(st=ht===Ae?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&St&&(st=St.RGBA16_EXT),q===i.SHORT&&St&&(st=St.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function _(N,T){let q;return N?T===null||T===ni||T===Mr?q=i.DEPTH24_STENCIL8:T===Vn?q=i.DEPTH32F_STENCIL8:T===_r&&(q=i.DEPTH24_STENCIL8,ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ni||T===Mr?q=i.DEPTH_COMPONENT24:T===Vn?q=i.DEPTH_COMPONENT32F:T===_r&&(q=i.DEPTH_COMPONENT16),q}function M(N,T){return g(N)===!0||N.isFramebufferTexture&&N.minFilter!==un&&N.minFilter!==pn?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function w(N){let T=N.target;T.removeEventListener("dispose",w),b(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&f.delete(T)}function v(N){let T=N.target;T.removeEventListener("dispose",v),P(T)}function b(N){let T=n.get(N);if(T.__webglInit===void 0)return;let q=N.source,tt=d.get(q);if(tt){let it=tt[T.__cacheKey];it.usedTimes--,it.usedTimes===0&&A(N),Object.keys(tt).length===0&&d.delete(q)}n.remove(N)}function A(N){let T=n.get(N);i.deleteTexture(T.__webglTexture);let q=N.source,tt=d.get(q);delete tt[T.__cacheKey],o.memory.textures--}function P(N){let T=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(T.__webglFramebuffer[tt]))for(let it=0;it<T.__webglFramebuffer[tt].length;it++)i.deleteFramebuffer(T.__webglFramebuffer[tt][it]);else i.deleteFramebuffer(T.__webglFramebuffer[tt]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[tt])}else{if(Array.isArray(T.__webglFramebuffer))for(let tt=0;tt<T.__webglFramebuffer.length;tt++)i.deleteFramebuffer(T.__webglFramebuffer[tt]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let tt=0;tt<T.__webglColorRenderbuffer.length;tt++)T.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[tt]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let q=N.textures;for(let tt=0,it=q.length;tt<it;tt++){let bt=n.get(q[tt]);bt.__webglTexture&&(i.deleteTexture(bt.__webglTexture),o.memory.textures--),n.remove(q[tt])}n.remove(N)}let L=0;function D(){L=0}function R(){return L}function C(N){L=N}function z(){let N=L;return N>=s.maxTextures&&ee("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,N}function F(N){let T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function K(N,T){let q=n.get(N);if(N.isVideoTexture&&B(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&q.__version!==N.version){let tt=N.image;if(tt===null)ee("WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)ee("WebGLRenderer: Texture marked for update but image is incomplete");else{rt(q,N,T);return}}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+T)}function V(N,T){let q=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){rt(q,N,T);return}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+T)}function J(N,T){let q=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){rt(q,N,T);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+T)}function Z(N,T){let q=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&q.__version!==N.version){_t(q,N,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+T)}let ot={[er]:i.REPEAT,[fi]:i.CLAMP_TO_EDGE,[Xa]:i.MIRRORED_REPEAT},mt={[un]:i.NEAREST,[hd]:i.NEAREST_MIPMAP_NEAREST,[Po]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[Sl]:i.LINEAR_MIPMAP_NEAREST,[is]:i.LINEAR_MIPMAP_LINEAR},Yt={[pd]:i.NEVER,[vd]:i.ALWAYS,[md]:i.LESS,[lc]:i.LEQUAL,[gd]:i.EQUAL,[cc]:i.GEQUAL,[xd]:i.GREATER,[yd]:i.NOTEQUAL};function At(N,T){if(T.type===Vn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===pn||T.magFilter===Sl||T.magFilter===Po||T.magFilter===is||T.minFilter===pn||T.minFilter===Sl||T.minFilter===Po||T.minFilter===is)&&ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,ot[T.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,ot[T.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,ot[T.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,mt[T.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,mt[T.minFilter]),T.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,Yt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===un||T.minFilter!==Po&&T.minFilter!==is||T.type===Vn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(N,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function kt(N,T){let q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",w));let tt=T.source,it=d.get(tt);it===void 0&&(it={},d.set(tt,it));let bt=F(T);if(bt!==N.__cacheKey){it[bt]===void 0&&(it[bt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),it[bt].usedTimes++;let St=it[N.__cacheKey];St!==void 0&&(it[N.__cacheKey].usedTimes--,St.usedTimes===0&&A(T)),N.__cacheKey=bt,N.__webglTexture=it[bt].texture}return q}function U(N,T,q){return Math.floor(Math.floor(N/q)/T)}function H(N,T,q,tt){let bt=N.updateRanges;if(bt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,q,tt,T.data);else{bt.sort(($t,Lt)=>$t.start-Lt.start);let St=0;for(let $t=1;$t<bt.length;$t++){let Lt=bt[St],Ct=bt[$t],Jt=Lt.start+Lt.count,te=U(Ct.start,T.width,4),le=U(Lt.start,T.width,4);Ct.start<=Jt+1&&te===le&&U(Ct.start+Ct.count-1,T.width,4)===te?Lt.count=Math.max(Lt.count,Ct.start+Ct.count-Lt.start):(++St,bt[St]=Ct)}bt.length=St+1;let st=e.getParameter(i.UNPACK_ROW_LENGTH),ht=e.getParameter(i.UNPACK_SKIP_PIXELS),Rt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let $t=0,Lt=bt.length;$t<Lt;$t++){let Ct=bt[$t],Jt=Math.floor(Ct.start/4),te=Math.ceil(Ct.count/4),le=Jt%T.width,W=Math.floor(Jt/T.width),It=te,at=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,le),e.pixelStorei(i.UNPACK_SKIP_ROWS,W),e.texSubImage2D(i.TEXTURE_2D,0,le,W,It,at,q,tt,T.data)}N.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,st),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(i.UNPACK_SKIP_ROWS,Rt)}}function rt(N,T,q){let tt=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(tt=i.TEXTURE_3D);let it=kt(N,T),bt=T.source;e.bindTexture(tt,N.__webglTexture,i.TEXTURE0+q);let St=n.get(bt);if(bt.version!==St.__version||it===!0){if(e.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap!="undefined"&&T.image instanceof ImageBitmap)===!1){let at=ye.getPrimaries(ye.workingColorSpace),Pt=T.colorSpace===Li?null:ye.getPrimaries(T.colorSpace),Ut=T.colorSpace===Li||at===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut)}e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let ht=p(T.image,!1,s.maxTextureSize);ht=_e(T,ht);let Rt=r.convert(T.format,T.colorSpace),$t=r.convert(T.type),Lt=x(T.internalFormat,Rt,$t,T.normalized,T.colorSpace,T.isVideoTexture);At(tt,T);let Ct,Jt=T.mipmaps,te=T.isVideoTexture!==!0,le=St.__version===void 0||it===!0,W=bt.dataReady,It=M(T,ht);if(T.isDepthTexture)Lt=_(T.format===ss,T.type),le&&(te?e.texStorage2D(i.TEXTURE_2D,1,Lt,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,Lt,ht.width,ht.height,0,Rt,$t,null));else if(T.isDataTexture)if(Jt.length>0){te&&le&&e.texStorage2D(i.TEXTURE_2D,It,Lt,Jt[0].width,Jt[0].height);for(let at=0,Pt=Jt.length;at<Pt;at++)Ct=Jt[at],te?W&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,Ct.width,Ct.height,Rt,$t,Ct.data):e.texImage2D(i.TEXTURE_2D,at,Lt,Ct.width,Ct.height,0,Rt,$t,Ct.data);T.generateMipmaps=!1}else te?(le&&e.texStorage2D(i.TEXTURE_2D,It,Lt,ht.width,ht.height),W&&H(T,ht,Rt,$t)):e.texImage2D(i.TEXTURE_2D,0,Lt,ht.width,ht.height,0,Rt,$t,ht.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){te&&le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Lt,Jt[0].width,Jt[0].height,ht.depth);for(let at=0,Pt=Jt.length;at<Pt;at++)if(Ct=Jt[at],T.format!==Wn)if(Rt!==null)if(te){if(W)if(T.layerUpdates.size>0){let Ut=nf(Ct.width,Ct.height,T.format,T.type);for(let dt of T.layerUpdates){let Kt=Ct.data.subarray(dt*Ut/Ct.data.BYTES_PER_ELEMENT,(dt+1)*Ut/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,dt,Ct.width,Ct.height,1,Rt,Kt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,Ct.width,Ct.height,ht.depth,Rt,Ct.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,Lt,Ct.width,Ct.height,ht.depth,0,Ct.data,0,0);else ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?W&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,Ct.width,Ct.height,ht.depth,Rt,$t,Ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,Lt,Ct.width,Ct.height,ht.depth,0,Rt,$t,Ct.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{te&&le&&e.texStorage2D(i.TEXTURE_2D,It,Lt,Jt[0].width,Jt[0].height);for(let at=0,Pt=Jt.length;at<Pt;at++)Ct=Jt[at],T.format!==Wn?Rt!==null?te?W&&e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,Ct.width,Ct.height,Rt,Ct.data):e.compressedTexImage2D(i.TEXTURE_2D,at,Lt,Ct.width,Ct.height,0,Ct.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?W&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,Ct.width,Ct.height,Rt,$t,Ct.data):e.texImage2D(i.TEXTURE_2D,at,Lt,Ct.width,Ct.height,0,Rt,$t,Ct.data)}else if(T.isDataArrayTexture)if(te){if(le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Lt,ht.width,ht.height,ht.depth),W)if(T.layerUpdates.size>0){let at=nf(ht.width,ht.height,T.format,T.type);for(let Pt of T.layerUpdates){let Ut=ht.data.subarray(Pt*at/ht.data.BYTES_PER_ELEMENT,(Pt+1)*at/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Pt,ht.width,ht.height,1,Rt,$t,Ut)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Rt,$t,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,ht.width,ht.height,ht.depth,0,Rt,$t,ht.data);else if(T.isData3DTexture)te?(le&&e.texStorage3D(i.TEXTURE_3D,It,Lt,ht.width,ht.height,ht.depth),W&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Rt,$t,ht.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,ht.width,ht.height,ht.depth,0,Rt,$t,ht.data);else if(T.isFramebufferTexture){if(le)if(te)e.texStorage2D(i.TEXTURE_2D,It,Lt,ht.width,ht.height);else{let at=ht.width,Pt=ht.height;for(let Ut=0;Ut<It;Ut++)e.texImage2D(i.TEXTURE_2D,Ut,Lt,at,Pt,0,Rt,$t,null),at>>=1,Pt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let at=i.canvas;if(at.hasAttribute("layoutsubtree")||at.setAttribute("layoutsubtree","true"),ht.parentNode!==at){at.appendChild(ht),f.add(T),at.onpaint=Pt=>{let Ut=Pt.changedElements;for(let dt of f)Ut.includes(dt.image)&&(dt.needsUpdate=!0)},at.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ht);else{let Ut=i.RGBA,dt=i.RGBA,Kt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ut,dt,Kt,ht)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Jt.length>0){if(te&&le){let at=fe(Jt[0]);e.texStorage2D(i.TEXTURE_2D,It,Lt,at.width,at.height)}for(let at=0,Pt=Jt.length;at<Pt;at++)Ct=Jt[at],te?W&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,Rt,$t,Ct):e.texImage2D(i.TEXTURE_2D,at,Lt,Rt,$t,Ct);T.generateMipmaps=!1}else if(te){if(le){let at=fe(ht);e.texStorage2D(i.TEXTURE_2D,It,Lt,at.width,at.height)}W&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt,$t,ht)}else e.texImage2D(i.TEXTURE_2D,0,Lt,Rt,$t,ht);g(T)&&E(tt),St.__version=bt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function _t(N,T,q){if(T.image.length!==6)return;let tt=kt(N,T),it=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+q);let bt=n.get(it);if(it.version!==bt.__version||tt===!0){e.activeTexture(i.TEXTURE0+q);let St=ye.getPrimaries(ye.workingColorSpace),st=T.colorSpace===Li?null:ye.getPrimaries(T.colorSpace),ht=T.colorSpace===Li||St===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Rt=T.isCompressedTexture||T.image[0].isCompressedTexture,$t=T.image[0]&&T.image[0].isDataTexture,Lt=[];for(let dt=0;dt<6;dt++)!Rt&&!$t?Lt[dt]=p(T.image[dt],!0,s.maxCubemapSize):Lt[dt]=$t?T.image[dt].image:T.image[dt],Lt[dt]=_e(T,Lt[dt]);let Ct=Lt[0],Jt=r.convert(T.format,T.colorSpace),te=r.convert(T.type),le=x(T.internalFormat,Jt,te,T.normalized,T.colorSpace),W=T.isVideoTexture!==!0,It=bt.__version===void 0||tt===!0,at=it.dataReady,Pt=M(T,Ct);At(i.TEXTURE_CUBE_MAP,T);let Ut;if(Rt){W&&It&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,le,Ct.width,Ct.height);for(let dt=0;dt<6;dt++){Ut=Lt[dt].mipmaps;for(let Kt=0;Kt<Ut.length;Kt++){let qt=Ut[Kt];T.format!==Wn?Jt!==null?W?at&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Kt,0,0,qt.width,qt.height,Jt,qt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Kt,le,qt.width,qt.height,0,qt.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Kt,0,0,qt.width,qt.height,Jt,te,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Kt,le,qt.width,qt.height,0,Jt,te,qt.data)}}}else{if(Ut=T.mipmaps,W&&It){Ut.length>0&&Pt++;let dt=fe(Lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,le,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if($t){W?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Lt[dt].width,Lt[dt].height,Jt,te,Lt[dt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,le,Lt[dt].width,Lt[dt].height,0,Jt,te,Lt[dt].data);for(let Kt=0;Kt<Ut.length;Kt++){let Be=Ut[Kt].image[dt].image;W?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Kt+1,0,0,Be.width,Be.height,Jt,te,Be.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Kt+1,le,Be.width,Be.height,0,Jt,te,Be.data)}}else{W?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Jt,te,Lt[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,le,Jt,te,Lt[dt]);for(let Kt=0;Kt<Ut.length;Kt++){let qt=Ut[Kt];W?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Kt+1,0,0,Jt,te,qt.image[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Kt+1,le,Jt,te,qt.image[dt])}}}g(T)&&E(i.TEXTURE_CUBE_MAP),bt.__version=it.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function ft(N,T,q,tt,it,bt){let St=r.convert(q.format,q.colorSpace),st=r.convert(q.type),ht=x(q.internalFormat,St,st,q.normalized,q.colorSpace),Rt=n.get(T),$t=n.get(q);if($t.__renderTarget=T,!Rt.__hasExternalTextures){let Lt=Math.max(1,T.width>>bt),Ct=Math.max(1,T.height>>bt);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,bt,ht,Lt,Ct,T.depth,0,St,st,null):e.texImage2D(it,bt,ht,Lt,Ct,0,St,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,N),ie(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,it,$t.__webglTexture,0,Qt(T)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,it,$t.__webglTexture,bt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Y(N,T,q){if(i.bindRenderbuffer(i.RENDERBUFFER,N),T.depthBuffer){let tt=T.depthTexture,it=tt&&tt.isDepthTexture?tt.type:null,bt=_(T.stencilBuffer,it),St=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ie(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt(T),bt,T.width,T.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt(T),bt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,bt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,N)}else{let tt=T.textures;for(let it=0;it<tt.length;it++){let bt=tt[it],St=r.convert(bt.format,bt.colorSpace),st=r.convert(bt.type),ht=x(bt.internalFormat,St,st,bt.normalized,bt.colorSpace);ie(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt(T),ht,T.width,T.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt(T),ht,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ht,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ut(N,T,q){let tt=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(T.depthTexture);if(it.__renderTarget=T,(!it.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),tt){if(it.__webglInit===void 0&&(it.__webglInit=!0,T.depthTexture.addEventListener("dispose",w)),it.__webglTexture===void 0){it.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),At(i.TEXTURE_CUBE_MAP,T.depthTexture);let Rt=r.convert(T.depthTexture.format),$t=r.convert(T.depthTexture.type),Lt;T.depthTexture.format===di?Lt=i.DEPTH_COMPONENT24:T.depthTexture.format===ss&&(Lt=i.DEPTH24_STENCIL8);for(let Ct=0;Ct<6;Ct++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,Lt,T.width,T.height,0,Rt,$t,null)}}else K(T.depthTexture,0);let bt=it.__webglTexture,St=Qt(T),st=tt?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,ht=T.depthTexture.format===ss?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===di)ie(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,st,bt,0,St):i.framebufferTexture2D(i.FRAMEBUFFER,ht,st,bt,0);else if(T.depthTexture.format===ss)ie(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,st,bt,0,St):i.framebufferTexture2D(i.FRAMEBUFFER,ht,st,bt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $(N){let T=n.get(N),q=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){let tt=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),tt){let it=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,tt.removeEventListener("dispose",it)};tt.addEventListener("dispose",it),T.__depthDisposeCallback=it}T.__boundDepthTexture=tt}if(N.depthTexture&&!T.__autoAllocateDepthBuffer)if(q)for(let tt=0;tt<6;tt++)ut(T.__webglFramebuffer[tt],N,tt);else{let tt=N.texture.mipmaps;tt&&tt.length>0?ut(T.__webglFramebuffer[0],N,0):ut(T.__webglFramebuffer,N,0)}else if(q){T.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[tt]),T.__webglDepthbuffer[tt]===void 0)T.__webglDepthbuffer[tt]=i.createRenderbuffer(),Y(T.__webglDepthbuffer[tt],N,!1);else{let it=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=T.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,bt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,bt)}}else{let tt=N.texture.mipmaps;if(tt&&tt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Y(T.__webglDepthbuffer,N,!1);else{let it=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,bt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,bt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function et(N,T,q){let tt=n.get(N);T!==void 0&&ft(tt.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&$(N)}function ct(N){let T=N.texture,q=n.get(N),tt=n.get(T);N.addEventListener("dispose",v);let it=N.textures,bt=N.isWebGLCubeRenderTarget===!0,St=it.length>1;if(St||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=T.version,o.memory.textures++),bt){q.__webglFramebuffer=[];for(let st=0;st<6;st++)if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer[st]=[];for(let ht=0;ht<T.mipmaps.length;ht++)q.__webglFramebuffer[st][ht]=i.createFramebuffer()}else q.__webglFramebuffer[st]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer=[];for(let st=0;st<T.mipmaps.length;st++)q.__webglFramebuffer[st]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(St)for(let st=0,ht=it.length;st<ht;st++){let Rt=n.get(it[st]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&ie(N)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let st=0;st<it.length;st++){let ht=it[st];q.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[st]);let Rt=r.convert(ht.format,ht.colorSpace),$t=r.convert(ht.type),Lt=x(ht.internalFormat,Rt,$t,ht.normalized,ht.colorSpace,N.isXRRenderTarget===!0),Ct=Qt(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,Lt,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,q.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Y(q.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(bt){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),At(i.TEXTURE_CUBE_MAP,T);for(let st=0;st<6;st++)if(T.mipmaps&&T.mipmaps.length>0)for(let ht=0;ht<T.mipmaps.length;ht++)ft(q.__webglFramebuffer[st][ht],N,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,ht);else ft(q.__webglFramebuffer[st],N,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);g(T)&&E(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let st=0,ht=it.length;st<ht;st++){let Rt=it[st],$t=n.get(Rt),Lt=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Lt=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Lt,$t.__webglTexture),At(Lt,Rt),ft(q.__webglFramebuffer,N,Rt,i.COLOR_ATTACHMENT0+st,Lt,0),g(Rt)&&E(Lt)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(st=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,tt.__webglTexture),At(st,T),T.mipmaps&&T.mipmaps.length>0)for(let ht=0;ht<T.mipmaps.length;ht++)ft(q.__webglFramebuffer[ht],N,T,i.COLOR_ATTACHMENT0,st,ht);else ft(q.__webglFramebuffer,N,T,i.COLOR_ATTACHMENT0,st,0);g(T)&&E(st),e.unbindTexture()}N.depthBuffer&&$(N)}function lt(N){let T=N.textures;for(let q=0,tt=T.length;q<tt;q++){let it=T[q];if(g(it)){let bt=S(N),St=n.get(it).__webglTexture;e.bindTexture(bt,St),E(bt),e.unbindTexture()}}}let xt=[],Ot=[];function Gt(N){if(N.samples>0){if(ie(N)===!1){let T=N.textures,q=N.width,tt=N.height,it=i.COLOR_BUFFER_BIT,bt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(N),st=T.length>1;if(st)for(let Rt=0;Rt<T.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer);let ht=N.texture.mipmaps;ht&&ht.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let Rt=0;Rt<T.length;Rt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[Rt]);let $t=n.get(T[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$t,0)}i.blitFramebuffer(0,0,q,tt,0,0,q,tt,it,i.NEAREST),l===!0&&(xt.length=0,Ot.length=0,xt.push(i.COLOR_ATTACHMENT0+Rt),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(xt.push(bt),Ot.push(bt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ot)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let Rt=0;Rt<T.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,St.__webglColorRenderbuffer[Rt]);let $t=n.get(T[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,$t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let T=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Qt(N){return Math.min(s.maxSamples,N.samples)}function ie(N){let T=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function B(N){let T=o.render.frame;h.get(N)!==T&&(h.set(N,T),N.update())}function _e(N,T){let q=N.colorSpace,tt=N.format,it=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||q!==jr&&q!==Li&&(ye.getTransfer(q)===Ae?(tt!==Wn||it!==Pn)&&ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):se("WebGLTextures: Unsupported texture color space:",q)),T}function fe(N){return typeof HTMLImageElement!="undefined"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame!="undefined"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=D,this.getTextureUnits=R,this.setTextureUnits=C,this.setTexture2D=K,this.setTexture2DArray=V,this.setTexture3D=J,this.setTextureCube=Z,this.rebindTextures=et,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=ie,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Vv(i,t){function e(n,s=Li){let r,o=ye.getTransfer(s);if(n===Pn)return i.UNSIGNED_BYTE;if(n===Tl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Al)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vh)return i.BYTE;if(n===Wh)return i.SHORT;if(n===_r)return i.UNSIGNED_SHORT;if(n===wl)return i.INT;if(n===ni)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===ii)return i.HALF_FLOAT;if(n===qh)return i.ALPHA;if(n===Zh)return i.RGB;if(n===Wn)return i.RGBA;if(n===di)return i.DEPTH_COMPONENT;if(n===ss)return i.DEPTH_STENCIL;if(n===Rl)return i.RED;if(n===Cl)return i.RED_INTEGER;if(n===rs)return i.RG;if(n===Il)return i.RG_INTEGER;if(n===Pl)return i.RGBA_INTEGER;if(n===Lo||n===Do||n===No||n===zo)if(o===Ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Lo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Lo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Do)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ll||n===Dl||n===Nl||n===zl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Dl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ul||n===Fl||n===Ol||n===Bl||n===Hl||n===Uo||n===kl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ul||n===Fl)return o===Ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ol)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Bl)return r.COMPRESSED_R11_EAC;if(n===Hl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Uo)return r.COMPRESSED_RG11_EAC;if(n===kl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Gl||n===Vl||n===Wl||n===Xl||n===Yl||n===ql||n===Zl||n===$l||n===Jl||n===Kl||n===jl||n===Ql||n===tc||n===ec)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Gl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ql)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$l)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ql)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ec)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nc||n===ic||n===sc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===nc)return o===Ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ic)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rc||n===oc||n===Fo||n===ac)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===rc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===oc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ac)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Mr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Wv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xv=`
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

}`,Ef=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new uo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new sn({vertexShader:Wv,fragmentShader:Xv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new k(new qe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bf=class extends pi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,m=null,y=typeof XRWebGLBinding!="undefined",p=new Ef,g={},E=e.getContextAttributes(),S=null,x=null,_=[],M=[],w=new Mt,v=null,b=null,A=new an;A.viewport=new Ge;let P=new an;P.viewport=new Ge;let L=[A,P],D=new yl,R=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let H=_[U];return H===void 0&&(H=new or,_[U]=H),H.getTargetRaySpace()},this.getControllerGrip=function(U){let H=_[U];return H===void 0&&(H=new or,_[U]=H),H.getGripSpace()},this.getHand=function(U){let H=_[U];return H===void 0&&(H=new or,_[U]=H),H.getHandSpace()};function z(U){let H=M.indexOf(U.inputSource);if(H===-1)return;let rt=_[H];rt!==void 0&&(rt.update(U.inputSource,U.frame,c||o),rt.dispatchEvent({type:U.type,data:U.inputSource}))}function F(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",K);for(let U=0;U<_.length;U++){let H=M[U];H!==null&&(M[U]=null,_[U].disconnect(H))}R=null,C=null,p.reset();for(let U in g)delete g[U];if(t.setRenderTarget(S),d=null,u=null,f=null,s=null,x=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(w.width,w.height,!1),b!==null){let U=b.camera;U.fov=b.fov,U.zoom=b.zoom,U.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,n.isPresenting===!0&&ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(U){if(s=U,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",F),s.addEventListener("inputsourceschange",K),E.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(w),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,_t=null,ft=null;E.depth&&(ft=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=E.stencil?ss:di,_t=E.stencil?Mr:ni);let Y={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Y),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new In(u.textureWidth,u.textureHeight,{format:Wn,type:Pn,depthTexture:new qi(u.textureWidth,u.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let rt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new In(d.framebufferWidth,d.framebufferHeight,{format:Wn,type:Pn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),kt.setContext(s),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function K(U){for(let H=0;H<U.removed.length;H++){let rt=U.removed[H],_t=M.indexOf(rt);_t>=0&&(M[_t]=null,_[_t].disconnect(rt))}for(let H=0;H<U.added.length;H++){let rt=U.added[H],_t=M.indexOf(rt);if(_t===-1){for(let Y=0;Y<_.length;Y++)if(Y>=M.length){M.push(rt),_t=Y;break}else if(M[Y]===null){M[Y]=rt,_t=Y;break}if(_t===-1)break}let ft=_[_t];ft&&ft.connect(rt)}}let V=new O,J=new O;function Z(U,H,rt){V.setFromMatrixPosition(H.matrixWorld),J.setFromMatrixPosition(rt.matrixWorld);let _t=V.distanceTo(J),ft=H.projectionMatrix.elements,Y=rt.projectionMatrix.elements,ut=ft[14]/(ft[10]-1),$=ft[14]/(ft[10]+1),et=(ft[9]+1)/ft[5],ct=(ft[9]-1)/ft[5],lt=(ft[8]-1)/ft[0],xt=(Y[8]+1)/Y[0],Ot=ut*lt,Gt=ut*xt,Qt=_t/(-lt+xt),ie=Qt*-lt;if(H.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(ie),U.translateZ(Qt),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),ft[10]===-1)U.projectionMatrix.copy(H.projectionMatrix),U.projectionMatrixInverse.copy(H.projectionMatrixInverse);else{let B=ut+Qt,_e=$+Qt,fe=Ot-ie,N=Gt+(_t-ie),T=et*$/_e*B,q=ct*$/_e*B;U.projectionMatrix.makePerspective(fe,N,T,q,B,_e),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function ot(U,H){H===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(H.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(s===null)return;let H=U.near,rt=U.far;p.texture!==null&&(p.depthNear>0&&(H=p.depthNear),p.depthFar>0&&(rt=p.depthFar)),D.near=P.near=A.near=H,D.far=P.far=A.far=rt,(R!==D.near||C!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),R=D.near,C=D.far),D.layers.mask=U.layers.mask|6,A.layers.mask=D.layers.mask&-5,P.layers.mask=D.layers.mask&-3;let _t=U.parent,ft=D.cameras;ot(D,_t);for(let Y=0;Y<ft.length;Y++)ot(ft[Y],_t);ft.length===2?Z(D,A,P):D.projectionMatrix.copy(A.projectionMatrix),b===null&&U.isPerspectiveCamera&&(b={camera:U,fov:U.fov,zoom:U.zoom}),mt(U,D,_t)};function mt(U,H,rt){rt===null?U.matrix.copy(H.matrixWorld):(U.matrix.copy(rt.matrixWorld),U.matrix.invert(),U.matrix.multiply(H.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(H.projectionMatrix),U.projectionMatrixInverse.copy(H.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=sr*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(U){l=U,u!==null&&(u.fixedFoveation=U),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=U)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(D)},this.getCameraTexture=function(U){return g[U]};let Yt=null;function At(U,H){if(h=H.getViewerPose(c||o),m=H,h!==null){let rt=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let _t=!1;rt.length!==D.cameras.length&&(D.cameras.length=0,_t=!0);for(let $=0;$<rt.length;$++){let et=rt[$],ct=null;if(d!==null)ct=d.getViewport(et);else{let xt=f.getViewSubImage(u,et);ct=xt.viewport,$===0&&(t.setRenderTargetTextures(x,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(x))}let lt=L[$];lt===void 0&&(lt=new an,lt.layers.enable($),lt.viewport=new Ge,L[$]=lt),lt.matrix.fromArray(et.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(et.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(ct.x,ct.y,ct.width,ct.height),$===0&&(D.matrix.copy(lt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),_t===!0&&D.cameras.push(lt)}let ft=s.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=n.getBinding();let $=f.getDepthInformation(rt[0]);$&&$.isValid&&$.texture&&p.init($,s.renderState)}if(ft&&ft.includes("camera-access")&&y){t.state.unbindTexture(),f=n.getBinding();for(let $=0;$<rt.length;$++){let et=rt[$].camera;if(et){let ct=g[et];ct||(ct=new uo,g[et]=ct);let lt=f.getCameraImage(et);ct.sourceTexture=lt}}}}for(let rt=0;rt<_.length;rt++){let _t=M[rt],ft=_[rt];_t!==null&&ft!==void 0&&ft.update(_t,H,c||o)}Yt&&Yt(U,H),H.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:H}),m=null}let kt=new tp;kt.setAnimationLoop(At),this.setAnimationLoop=function(U){Yt=U},this.dispose=function(){}}},Yv=new Se,op=new oe;op.set(-1,0,0,0,1,0,0,0,1);function qv(i,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Qh(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,E,S,x){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),f(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),u(p,g),g.isMeshPhysicalMaterial&&d(p,g,x)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),y(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,E,S):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===ln&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===ln&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let E=t.get(g),S=E.envMap,x=E.envMapRotation;S&&(p.envMap.value=S,p.envMapRotation.value.setFromMatrix4(Yv.makeRotationFromEuler(x)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(op),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,E,S){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*E,p.scale.value=S*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function f(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,E){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===ln&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function y(p,g){let E=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Zv(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){let M=_.program;n.uniformBlockBinding(x,M)}function c(x,_){let M=s[x.id];M===void 0&&(p(x),M=h(x),s[x.id]=M,x.addEventListener("dispose",E));let w=_.program;n.updateUBOMapping(x,w);let v=t.render.frame;r[x.id]!==v&&(u(x),r[x.id]=v)}function h(x){let _=f();x.__bindingPointIndex=_;let M=i.createBuffer(),w=x.__size,v=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,w,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,M),M}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return se("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let _=s[x.id],M=x.uniforms,w=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let v=0,b=M.length;v<b;v++){let A=M[v];if(Array.isArray(A))for(let P=0,L=A.length;P<L;P++)d(A[P],v,P,w);else d(A,v,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,_,M,w){if(y(x,_,M,w)===!0){let v=x.__offset,b=x.value;if(Array.isArray(b)){let A=0;for(let P=0;P<b.length;P++){let L=b[P],D=g(L);m(L,x.__data,A),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(A+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(b,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,x.__data)}}function m(x,_,M){typeof x=="number"||typeof x=="boolean"?_[0]=x:x.isMatrix3?(_[0]=x.elements[0],_[1]=x.elements[1],_[2]=x.elements[2],_[3]=0,_[4]=x.elements[3],_[5]=x.elements[4],_[6]=x.elements[5],_[7]=0,_[8]=x.elements[6],_[9]=x.elements[7],_[10]=x.elements[8],_[11]=0):ArrayBuffer.isView(x)?_.set(new x.constructor(x.buffer,x.byteOffset,_.length)):x.toArray(_,M)}function y(x,_,M,w){let v=x.value,b=_+"_"+M;if(w[b]===void 0)return typeof v=="number"||typeof v=="boolean"?w[b]=v:ArrayBuffer.isView(v)?w[b]=v.slice():w[b]=v.clone(),!0;{let A=w[b];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return w[b]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(A.equals(v)===!1)return A.copy(v),!0}}return!1}function p(x){let _=x.uniforms,M=0,w=16;for(let b=0,A=_.length;b<A;b++){let P=Array.isArray(_[b])?_[b]:[_[b]];for(let L=0,D=P.length;L<D;L++){let R=P[L],C=Array.isArray(R.value)?R.value:[R.value];for(let z=0,F=C.length;z<F;z++){let K=C[z],V=g(K),J=M%w,Z=J%V.boundary,ot=J+Z;M+=Z,ot!==0&&w-ot<V.storage&&(M+=w-ot),R.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=M,M+=V.storage}}}let v=M%w;return v>0&&(M+=w-v),x.__size=M,x.__cache={},this}function g(x){let _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(_.boundary=16,_.storage=x.byteLength):ee("WebGLRenderer: Unsupported uniform value type.",x),_}function E(x){let _=x.target;_.removeEventListener("dispose",E);let M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function S(){for(let x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:S}}var $v=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),xi=null;function Jv(){return xi===null&&(xi=new co($v,16,16,rs,ii),xi.name="DFG_LUT",xi.minFilter=pn,xi.magFilter=pn,xi.wrapS=fi,xi.wrapT=fi,xi.generateMipmaps=!1,xi.needsUpdate=!0),xi}var Vo=class{constructor(t={}){let{canvas:e=_d(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Pn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let y=d,p=new Set([Pl,Il,Cl]),g=new Set([Pn,ni,_r,Mr,Tl,Al]),E=new Uint32Array(4),S=new Int32Array(4),x=new O,_=null,M=null,w=[],v=[],b=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,P=!1,L=null,D=null,R=null,C=null;this._outputColorSpace=Fe;let z=0,F=0,K=null,V=-1,J=null,Z=new Ge,ot=new Ge,mt=null,Yt=new Ht(0),At=0,kt=e.width,U=e.height,H=1,rt=null,_t=null,ft=new Ge(0,0,kt,U),Y=new Ge(0,0,kt,U),ut=!1,$=new fr,et=!1,ct=!1,lt=new Se,xt=new O,Ot=new Ge,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qt=!1;function ie(){return K===null?H:1}let B=n;function _e(I,G){return e.getContext(I,G)}let fe,N,T,q,tt,it,bt,St,st,ht,Rt,$t,Lt,Ct,Jt,te,le,W,It,at,Pt,Ut,dt;try{let I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Be,!1),e.addEventListener("webglcontextrestored",we,!1),e.addEventListener("webglcontextcreationerror",qn,!1),B===null){let G="webgl2";if(B=_e(G,I),B===null)throw _e(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Kt()}catch(I){throw e.removeEventListener("webglcontextlost",Be,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",qn,!1),se("WebGLRenderer: "+I.message),I}function Kt(){fe=new iy(B),fe.init(),Pt=new Vv(B,fe),N=new q1(B,fe,t,Pt),T=new kv(B,fe),N.reversedDepthBuffer&&u&&T.buffers.depth.setReversed(!0),D=B.createFramebuffer(),R=B.createFramebuffer(),C=B.createFramebuffer(),q=new oy(B),tt=new Av,it=new Gv(B,fe,T,tt,N,Pt,q),bt=new ny(A),St=new lg(B),Ut=new X1(B,St),st=new sy(B,St,q,Ut),ht=new ly(B,st,St,Ut,q),W=new ay(B,N,it),Jt=new Z1(tt),Rt=new Tv(A,bt,fe,N,Ut,Jt),$t=new qv(A,tt),Lt=new Cv,Ct=new zv(fe),le=new W1(A,bt,T,ht,m,l),te=new Hv(A,ht,N),dt=new Zv(B,q,N,T),It=new Y1(B,fe,q),at=new ry(B,fe,q),q.programs=Rt.programs,A.capabilities=N,A.extensions=fe,A.properties=tt,A.renderLists=Lt,A.shadowMap=te,A.state=T,A.info=q}y!==Pn&&(b=new hy(y,e.width,e.height,a,s,r));let qt=new bf(A,B);this.xr=qt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let I=fe.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=fe.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(I){I!==void 0&&(H=I,this.setSize(kt,U,!1))},this.getSize=function(I){return I.set(kt,U)},this.setSize=function(I,G,nt=!0){if(qt.isPresenting){ee("WebGLRenderer: Can't change size while VR device is presenting.");return}kt=I,U=G,e.width=Math.floor(I*H),e.height=Math.floor(G*H),nt===!0&&(e.style.width=I+"px",e.style.height=G+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,I,G)},this.getDrawingBufferSize=function(I){return I.set(kt*H,U*H).floor()},this.setDrawingBufferSize=function(I,G,nt){kt=I,U=G,H=nt,e.width=Math.floor(I*nt),e.height=Math.floor(G*nt),this.setViewport(0,0,I,G)},this.setEffects=function(I){if(y===Pn){se("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let G=0;G<I.length;G++)if(I[G].isOutputPass===!0){ee("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(Z)},this.getViewport=function(I){return I.copy(ft)},this.setViewport=function(I,G,nt,j){I.isVector4?ft.set(I.x,I.y,I.z,I.w):ft.set(I,G,nt,j),T.viewport(Z.copy(ft).multiplyScalar(H).round())},this.getScissor=function(I){return I.copy(Y)},this.setScissor=function(I,G,nt,j){I.isVector4?Y.set(I.x,I.y,I.z,I.w):Y.set(I,G,nt,j),T.scissor(ot.copy(Y).multiplyScalar(H).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(I){T.setScissorTest(ut=I)},this.setOpaqueSort=function(I){rt=I},this.setTransparentSort=function(I){_t=I},this.getClearColor=function(I){return I.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(I=!0,G=!0,nt=!0){let j=0;if(I){let Q=!1;if(K!==null){let zt=K.texture.format;Q=p.has(zt)}if(Q){let zt=K.texture.type,Bt=g.has(zt),Nt=le.getClearColor(),Vt=le.getClearAlpha(),Zt=Nt.r,de=Nt.g,ge=Nt.b;Bt?(E[0]=Zt,E[1]=de,E[2]=ge,E[3]=Vt,B.clearBufferuiv(B.COLOR,0,E)):(S[0]=Zt,S[1]=de,S[2]=ge,S[3]=Vt,B.clearBufferiv(B.COLOR,0,S))}else j|=B.COLOR_BUFFER_BIT}G&&(j|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),nt&&(j|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&B.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),L=I},this.dispose=function(){e.removeEventListener("webglcontextlost",Be,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",qn,!1),le.dispose(),Lt.dispose(),Ct.dispose(),tt.dispose(),bt.dispose(),ht.dispose(),Ut.dispose(),dt.dispose(),Rt.dispose(),qt.dispose(),qt.removeEventListener("sessionstart",Kf),qt.removeEventListener("sessionend",jf),us.stop()};function Be(I){I.preventDefault(),eo("WebGLRenderer: Context Lost."),P=!0}function we(){eo("WebGLRenderer: Context Restored."),P=!1;let I=q.autoReset,G=te.enabled,nt=te.autoUpdate,j=te.needsUpdate,Q=te.type;Kt(),q.autoReset=I,te.enabled=G,te.autoUpdate=nt,te.needsUpdate=j,te.type=Q}function qn(I){se("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function li(I){let G=I.target;G.removeEventListener("dispose",li),R0(G)}function R0(I){C0(I),tt.remove(I)}function C0(I){let G=tt.get(I).programs;G!==void 0&&(G.forEach(function(nt){Rt.releaseProgram(nt)}),I.isShaderMaterial&&Rt.releaseShaderCache(I))}this.renderBufferDirect=function(I,G,nt,j,Q,zt){G===null&&(G=Gt);let Bt=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Nt=L0(I,G,nt,j,Q);T.setMaterial(j,Bt);let Vt=nt.index,Zt=1;if(j.wireframe===!0){if(Vt=st.getWireframeAttribute(nt),Vt===void 0)return;Zt=2}let de=nt.drawRange,ge=nt.attributes.position,Wt=de.start*Zt,Te=(de.start+de.count)*Zt;zt!==null&&(Wt=Math.max(Wt,zt.start*Zt),Te=Math.min(Te,(zt.start+zt.count)*Zt)),Vt!==null?(Wt=Math.max(Wt,0),Te=Math.min(Te,Vt.count)):ge!=null&&(Wt=Math.max(Wt,0),Te=Math.min(Te,ge.count));let tn=Te-Wt;if(tn<0||tn===1/0)return;Ut.setup(Q,j,Nt,nt,Vt);let Ve,Ue=It;if(Vt!==null&&(Ve=St.get(Vt),Ue=at,Ue.setIndex(Ve)),Q.isMesh)j.wireframe===!0?(T.setLineWidth(j.wireframeLinewidth*ie()),Ue.setMode(B.LINES)):Ue.setMode(B.TRIANGLES);else if(Q.isLine){let mn=j.linewidth;mn===void 0&&(mn=1),T.setLineWidth(mn*ie()),Q.isLineSegments?Ue.setMode(B.LINES):Q.isLineLoop?Ue.setMode(B.LINE_LOOP):Ue.setMode(B.LINE_STRIP)}else Q.isPoints?Ue.setMode(B.POINTS):Q.isSprite&&Ue.setMode(B.TRIANGLES);if(Q.isBatchedMesh)if(fe.get("WEBGL_multi_draw"))Ue.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let mn=Q._multiDrawStarts,Ft=Q._multiDrawCounts,Sn=Q._multiDrawCount,Me=Vt?St.get(Vt).bytesPerElement:1,kn=tt.get(j).currentProgram.getUniforms();for(let ci=0;ci<Sn;ci++)kn.setValue(B,"_gl_DrawID",ci),Ue.render(mn[ci]/Me,Ft[ci])}else if(Q.isInstancedMesh)Ue.renderInstances(Wt,tn,Q.count);else if(nt.isInstancedBufferGeometry){let mn=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,Ft=Math.min(nt.instanceCount,mn);Ue.renderInstances(Wt,tn,Ft)}else Ue.render(Wt,tn)};function Jf(I,G,nt,j){L!==null&&I.isNodeMaterial&&L.setObject(j,I),et===!0&&Jt.setState(I,nt,!1),I.transparent===!0&&I.side===$e&&I.forceSinglePass===!1?(I.side=ln,I.needsUpdate=!0,la(I,G,j),I.side=ts,I.needsUpdate=!0,la(I,G,j),I.side=$e):la(I,G,j)}this.compile=function(I,G,nt=null){nt===null&&(nt=I),L!==null&&L.renderStart(I,G,nt),M=Ct.get(nt),M.init(G),v.push(M),nt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(G.layers)&&(M.pushLight(Q),Q.castShadow&&M.pushShadow(Q))}),I!==nt&&I.traverseVisible(function(Q){Q.isLight&&Q.layers.test(G.layers)&&(M.pushLight(Q),Q.castShadow&&M.pushShadow(Q))}),M.setupLights(),L!==null&&L.updateLights(M.state.lightsArray),ct=this.localClippingEnabled,et=Jt.init(this.clippingPlanes,ct),et===!0&&Jt.setGlobalState(this.clippingPlanes,G),L!==null&&te.render(M.state.shadowsArray,nt,G);let j=new Set;return I.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let zt=Q.material;if(zt)if(Array.isArray(zt))for(let Bt=0;Bt<zt.length;Bt++){let Nt=zt[Bt];Jf(Nt,nt,G,Q),j.add(Nt)}else Jf(zt,nt,G,Q),j.add(zt)}),M=v.pop(),L!==null&&L.renderEnd(),j},this.compileAsync=function(I,G,nt=null){let j=this.compile(I,G,nt);return new Promise(Q=>{function zt(){if(j.forEach(function(Bt){let Vt=tt.get(Bt).currentProgram;(Vt===void 0||Vt.isReady())&&j.delete(Bt)}),j.size===0){Q(I);return}setTimeout(zt,10)}fe.get("KHR_parallel_shader_compile")!==null?zt():setTimeout(zt,10)})};let Xc=null;function I0(I){Xc&&Xc(I)}function Kf(){us.stop()}function jf(){us.start()}let us=new tp;us.setAnimationLoop(I0),typeof self!="undefined"&&us.setContext(self),this.setAnimationLoop=function(I){Xc=I,qt.setAnimationLoop(I),I===null?us.stop():us.start()},qt.addEventListener("sessionstart",Kf),qt.addEventListener("sessionend",jf),this.render=function(I,G){if(G!==void 0&&G.isCamera!==!0){se("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;L!==null&&L.renderStart(I,G);let nt=qt.enabled===!0&&qt.isPresenting===!0,j=b!==null&&(K===null||nt)&&b.begin(A,K);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),qt.enabled===!0&&qt.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(qt.cameraAutoUpdate===!0&&qt.updateCamera(G),G=qt.getCamera()),I.isScene===!0&&I.onBeforeRender(A,I,G,K),M=Ct.get(I,v.length),M.init(G),M.state.textureUnits=it.getTextureUnits(),v.push(M),lt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),$.setFromProjectionMatrix(lt,Qn,G.reversedDepth),ct=this.localClippingEnabled,et=Jt.init(this.clippingPlanes,ct),_=Lt.get(I,w.length),_.init(),w.push(_),qt.enabled===!0&&qt.isPresenting===!0){let Bt=A.xr.getDepthSensingMesh();Bt!==null&&Yc(Bt,G,-1/0,A.sortObjects)}Yc(I,G,0,A.sortObjects),_.finish(),L!==null&&L.updateLights(M.state.lightsArray),A.sortObjects===!0&&_.sort(rt,_t),Qt=qt.enabled===!1||qt.isPresenting===!1||qt.hasDepthSensing()===!1,Qt&&le.addToRenderList(_,I),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),et===!0&&Jt.beginShadows();let Q=M.state.shadowsArray;if(te.render(Q,I,G),et===!0&&Jt.endShadows(),(j&&b.hasRenderPass())===!1){let Bt=_.opaque,Nt=_.transmissive;if(M.setupLights(),G.isArrayCamera){let Vt=G.cameras;if(Nt.length>0)for(let Zt=0,de=Vt.length;Zt<de;Zt++){let ge=Vt[Zt];tu(Bt,Nt,I,ge)}Qt&&le.render(I);for(let Zt=0,de=Vt.length;Zt<de;Zt++){let ge=Vt[Zt];Qf(_,I,ge,ge.viewport)}}else Nt.length>0&&tu(Bt,Nt,I,G),Qt&&le.render(I),Qf(_,I,G)}K!==null&&F===0&&(it.updateMultisampleRenderTarget(K),it.updateRenderTargetMipmap(K)),j&&b.end(A),I.isScene===!0&&I.onAfterRender(A,I,G),Ut.resetDefaultState(),V=-1,J=null,v.pop(),v.length>0?(M=v[v.length-1],it.setTextureUnits(M.state.textureUnits),et===!0&&Jt.setGlobalState(A.clippingPlanes,M.state.camera)):M=null,w.pop(),w.length>0?_=w[w.length-1]:_=null,L!==null&&L.renderEnd()};function Yc(I,G,nt,j){if(I.visible===!1)return;if(I.layers.test(G.layers)){if(I.isGroup)nt=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(G);else if(I.isLightProbeGrid)M.pushLightProbeGrid(I);else if(I.isLight)M.pushLight(I),I.castShadow&&M.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||I.intersectsFrustum($)){j&&Ot.setFromMatrixPosition(I.matrixWorld).applyMatrix4(lt);let Bt=ht.update(I),Nt=I.material;Nt.visible&&_.push(I,Bt,Nt,nt,Ot.z,null,G)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||I.intersectsFrustum($))){let Bt=ht.update(I),Nt=I.material;if(j&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Ot.copy(I.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),Ot.copy(Bt.boundingSphere.center)),Ot.applyMatrix4(I.matrixWorld).applyMatrix4(lt)),Array.isArray(Nt)){let Vt=Bt.groups;for(let Zt=0,de=Vt.length;Zt<de;Zt++){let ge=Vt[Zt],Wt=Nt[ge.materialIndex];Wt&&Wt.visible&&_.push(I,Bt,Wt,nt,Ot.z,ge,G)}}else Nt.visible&&_.push(I,Bt,Nt,nt,Ot.z,null,G)}}let zt=I.children;for(let Bt=0,Nt=zt.length;Bt<Nt;Bt++)Yc(zt[Bt],G,nt,j)}function Qf(I,G,nt,j){let{opaque:Q,transmissive:zt,transparent:Bt}=I;M.setupLightsView(nt),et===!0&&Jt.setGlobalState(A.clippingPlanes,nt),j&&T.viewport(Z.copy(j)),Q.length>0&&aa(Q,G,nt),zt.length>0&&aa(zt,G,nt),Bt.length>0&&aa(Bt,G,nt),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function tu(I,G,nt,j){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[j.id]===void 0){let Wt=fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[j.id]=new In(1,1,{generateMipmaps:!0,type:Wt?ii:Pn,minFilter:is,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ye.workingColorSpace})}let zt=M.state.transmissionRenderTarget[j.id],Bt=j.viewport||Z;zt.setSize(Bt.z*A.transmissionResolutionScale,Bt.w*A.transmissionResolutionScale);let Nt=A.getRenderTarget(),Vt=A.getActiveCubeFace(),Zt=A.getActiveMipmapLevel();A.setRenderTarget(zt),A.getClearColor(Yt),At=A.getClearAlpha(),At<1&&A.setClearColor(16777215,.5),A.clear(),Qt&&le.render(nt);let de=A.toneMapping;A.toneMapping=ei;let ge=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),M.setupLightsView(j),et===!0&&Jt.setGlobalState(A.clippingPlanes,j),aa(I,nt,j),it.updateMultisampleRenderTarget(zt),it.updateRenderTargetMipmap(zt),fe.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Te=0,tn=G.length;Te<tn;Te++){let Ve=G[Te],{object:Ue,geometry:mn,material:Ft,group:Sn}=Ve;if(Ft.side===$e&&Ue.layers.test(j.layers)){let Me=Ft.side;Ft.side=ln,Ft.needsUpdate=!0,eu(Ue,nt,j,mn,Ft,Sn),Ft.side=Me,Ft.needsUpdate=!0,Wt=!0}}Wt===!0&&(it.updateMultisampleRenderTarget(zt),it.updateRenderTargetMipmap(zt))}A.setRenderTarget(Nt,Vt,Zt),A.setClearColor(Yt,At),ge!==void 0&&(j.viewport=ge),A.toneMapping=de}function aa(I,G,nt){let j=G.isScene===!0?G.overrideMaterial:null;for(let Q=0,zt=I.length;Q<zt;Q++){let Bt=I[Q],{object:Nt,geometry:Vt,group:Zt}=Bt,de=Bt.material;de.allowOverride===!0&&j!==null&&(de=j),Nt.layers.test(nt.layers)&&eu(Nt,G,nt,Vt,de,Zt)}}function eu(I,G,nt,j,Q,zt){L!==null&&Q.isNodeMaterial&&L.setObject(I,Q),I.onBeforeRender(A,G,nt,j,Q,zt),I.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),Q.onBeforeRender(A,G,nt,j,I,zt),Q.transparent===!0&&Q.side===$e&&Q.forceSinglePass===!1?(Q.side=ln,Q.needsUpdate=!0,A.renderBufferDirect(nt,G,j,Q,I,zt),Q.side=ts,Q.needsUpdate=!0,A.renderBufferDirect(nt,G,j,Q,I,zt),Q.side=$e):A.renderBufferDirect(nt,G,j,Q,I,zt),I.onAfterRender(A,G,nt,j,Q,zt)}function la(I,G,nt){G.isScene!==!0&&(G=Gt);let j=tt.get(I),Q=M.state.lights,zt=M.state.shadowsArray,Bt=Q.state.version,Nt=Rt.getParameters(I,Q.state,zt,G,nt,M.state.lightProbeGridArray),Vt=Rt.getProgramCacheKey(Nt),Zt=j.programs;j.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?G.environment:null,j.fog=G.fog;let de=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;j.envMap=bt.get(I.envMap||j.environment,de),j.envMapRotation=j.environment!==null&&I.envMap===null?G.environmentRotation:I.envMapRotation,Zt===void 0&&(I.addEventListener("dispose",li),Zt=new Map,j.programs=Zt);let ge=Zt.get(Vt);if(ge!==void 0){if(j.currentProgram===ge&&j.lightsStateVersion===Bt)return iu(I,Nt),ge}else Nt.uniforms=Rt.getUniforms(I),L!==null&&I.isNodeMaterial&&L.build(I,nt,Nt),I.onBeforeCompile(Nt,A),ge=Rt.acquireProgram(Nt,Vt),Zt.set(Vt,ge),j.uniforms=Nt.uniforms;let Wt=j.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Wt.clippingPlanes=Jt.uniform),iu(I,Nt),j.needsLights=N0(I),j.lightsStateVersion=Bt,j.needsLights&&(Wt.ambientLightColor.value=Q.state.ambient,Wt.lightProbe.value=Q.state.probe,Wt.sunLights.value=Q.state.sun,Wt.sunLightShadows.value=Q.state.sunShadow,Wt.directionalLights.value=Q.state.directional,Wt.directionalLightShadows.value=Q.state.directionalShadow,Wt.spotLights.value=Q.state.spot,Wt.spotLightShadows.value=Q.state.spotShadow,Wt.rectAreaLights.value=Q.state.rectArea,Wt.ltc_1.value=Q.state.rectAreaLTC1,Wt.ltc_2.value=Q.state.rectAreaLTC2,Wt.pointLights.value=Q.state.point,Wt.pointLightShadows.value=Q.state.pointShadow,Wt.hemisphereLights.value=Q.state.hemi,Wt.sunShadowMatrix.value=Q.state.sunShadowMatrix,Wt.sunShadowCascade.value=Q.state.sunShadowCascade,Wt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Wt.spotLightMatrix.value=Q.state.spotLightMatrix,Wt.spotLightMap.value=Q.state.spotLightMap,Wt.pointShadowMatrix.value=Q.state.pointShadowMatrix),j.lightProbeGrid=M.state.lightProbeGridArray.length>0,j.currentProgram=ge,j.uniformsList=null,ge}function nu(I){if(I.uniformsList===null){let G=I.currentProgram.getUniforms();I.uniformsList=wr.seqWithValue(G.seq,I.uniforms)}return I.uniformsList}function iu(I,G){let nt=tt.get(I);nt.outputColorSpace=G.outputColorSpace,nt.batching=G.batching,nt.batchingColor=G.batchingColor,nt.instancing=G.instancing,nt.instancingColor=G.instancingColor,nt.instancingMorph=G.instancingMorph,nt.skinning=G.skinning,nt.morphTargets=G.morphTargets,nt.morphNormals=G.morphNormals,nt.morphColors=G.morphColors,nt.morphTargetsCount=G.morphTargetsCount,nt.numClippingPlanes=G.numClippingPlanes,nt.numIntersection=G.numClipIntersection,nt.vertexAlphas=G.vertexAlphas,nt.vertexTangents=G.vertexTangents,nt.toneMapping=G.toneMapping}function P0(I,G){if(I.length===0)return null;if(I.length===1)return I[0].texture!==null?I[0]:null;x.setFromMatrixPosition(G.matrixWorld);for(let nt=0,j=I.length;nt<j;nt++){let Q=I[nt];if(Q.texture!==null&&Q.boundingBox.containsPoint(x))return Q}return null}function L0(I,G,nt,j,Q){G.isScene!==!0&&(G=Gt),it.resetTextureUnits();let zt=G.fog,Bt=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?G.environment:null,Nt=K===null?A.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ye.workingColorSpace,Vt=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Zt=bt.get(j.envMap||Bt,Vt),de=j.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,ge=!!nt.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Wt=!!nt.morphAttributes.position,Te=!!nt.morphAttributes.normal,tn=!!nt.morphAttributes.color,Ve=ei;j.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ve=A.toneMapping);let Ue=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,mn=Ue!==void 0?Ue.length:0,Ft=tt.get(j),Sn=M.state.lights;if(et===!0&&(ct===!0||I!==J)){let He=I===J&&j.id===V;Jt.setState(j,I,He)}let Me=!1;j.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==Sn.state.version||Ft.outputColorSpace!==Nt||Q.isBatchedMesh&&Ft.batching===!1||!Q.isBatchedMesh&&Ft.batching===!0||Q.isBatchedMesh&&Ft.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&Ft.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&Ft.instancing===!1||!Q.isInstancedMesh&&Ft.instancing===!0||Q.isSkinnedMesh&&Ft.skinning===!1||!Q.isSkinnedMesh&&Ft.skinning===!0||Q.isInstancedMesh&&Ft.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ft.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Ft.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Ft.instancingMorph===!1&&Q.morphTexture!==null||Ft.envMap!==Zt||j.fog===!0&&Ft.fog!==zt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==Jt.numPlanes||Ft.numIntersection!==Jt.numIntersection)||Ft.vertexAlphas!==de||Ft.vertexTangents!==ge||Ft.morphTargets!==Wt||Ft.morphNormals!==Te||Ft.morphColors!==tn||Ft.toneMapping!==Ve||Ft.morphTargetsCount!==mn||!!Ft.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Me=!0):(Me=!0,Ft.__version=j.version);let kn=Ft.currentProgram;Me===!0&&(kn=la(j,G,Q),L&&j.isNodeMaterial&&L.onUpdateProgram(j,kn,Ft));let ci=!1,Bi=!1,Ds=!1,Ne=kn.getUniforms(),Qe=Ft.uniforms;if(T.useProgram(kn.program)&&(ci=!0,Bi=!0,Ds=!0),j.id!==V&&(V=j.id,Bi=!0),Ft.needsLights){let He=P0(M.state.lightProbeGridArray,Q);Ft.lightProbeGrid!==He&&(Ft.lightProbeGrid=He,Bi=!0)}if(ci||J!==I){T.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),Ne.setValue(B,"projectionMatrix",I.projectionMatrix),Ne.setValue(B,"viewMatrix",I.matrixWorldInverse);let ki=Ne.map.cameraPosition;ki!==void 0&&ki.setValue(B,xt.setFromMatrixPosition(I.matrixWorld)),N.logarithmicDepthBuffer&&Ne.setValue(B,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ne.setValue(B,"isOrthographic",I.isOrthographicCamera===!0),J!==I&&(J=I,Bi=!0,Ds=!0)}if(Ft.needsLights&&(Sn.state.sunShadowMap.length>0&&Ne.setValue(B,"sunShadowMap",Sn.state.sunShadowMap,it),Sn.state.directionalShadowMap.length>0&&Ne.setValue(B,"directionalShadowMap",Sn.state.directionalShadowMap,it),Sn.state.spotShadowMap.length>0&&Ne.setValue(B,"spotShadowMap",Sn.state.spotShadowMap,it),Sn.state.pointShadowMap.length>0&&Ne.setValue(B,"pointShadowMap",Sn.state.pointShadowMap,it)),Q.isSkinnedMesh){Ne.setOptional(B,Q,"bindMatrix"),Ne.setOptional(B,Q,"bindMatrixInverse");let He=Q.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),Ne.setValue(B,"boneTexture",He.boneTexture,it))}Q.isBatchedMesh&&(Ne.setOptional(B,Q,"batchingTexture"),Ne.setValue(B,"batchingTexture",Q._matricesTexture,it),Ne.setOptional(B,Q,"batchingIdTexture"),Ne.setValue(B,"batchingIdTexture",Q._indirectTexture,it),Ne.setOptional(B,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ne.setValue(B,"batchingColorTexture",Q._colorsTexture,it));let Hi=nt.morphAttributes;if((Hi.position!==void 0||Hi.normal!==void 0||Hi.color!==void 0)&&W.update(Q,nt,kn),(Bi||Ft.receiveShadow!==Q.receiveShadow)&&(Ft.receiveShadow=Q.receiveShadow,Ne.setValue(B,"receiveShadow",Q.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&G.environment!==null&&(Qe.envMapIntensity.value=G.environmentIntensity),Qe.dfgLUT!==void 0&&(Qe.dfgLUT.value=Jv()),Bi){if(Ne.setValue(B,"toneMappingExposure",A.toneMappingExposure),Ft.needsLights&&D0(Qe,Ds),zt&&j.fog===!0&&$t.refreshFogUniforms(Qe,zt),$t.refreshMaterialUniforms(Qe,j,H,U,M.state.transmissionRenderTarget[I.id]),Ft.needsLights&&Ft.lightProbeGrid){let He=Ft.lightProbeGrid;Qe.probesSH.value=He.texture,Qe.probesMin.value.copy(He.boundingBox.min),Qe.probesMax.value.copy(He.boundingBox.max),Qe.probesResolution.value.copy(He.resolution)}wr.upload(B,nu(Ft),Qe,it)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(wr.upload(B,nu(Ft),Qe,it),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ne.setValue(B,"center",Q.center),Ne.setValue(B,"modelViewMatrix",Q.modelViewMatrix),Ne.setValue(B,"normalMatrix",Q.normalMatrix),Ne.setValue(B,"modelMatrix",Q.matrixWorld),j.uniformsGroups!==void 0){let He=j.uniformsGroups;for(let ki=0,Ns=He.length;ki<Ns;ki++){let ru=He[ki];dt.update(ru,kn),dt.bind(ru,kn)}}return kn}function D0(I,G){I.ambientLightColor.needsUpdate=G,I.lightProbe.needsUpdate=G,I.sunLights.needsUpdate=G,I.sunLightShadows.needsUpdate=G,I.directionalLights.needsUpdate=G,I.directionalLightShadows.needsUpdate=G,I.pointLights.needsUpdate=G,I.pointLightShadows.needsUpdate=G,I.spotLights.needsUpdate=G,I.spotLightShadows.needsUpdate=G,I.rectAreaLights.needsUpdate=G,I.hemisphereLights.needsUpdate=G}function N0(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(I,G,nt){let j=tt.get(I);j.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),tt.get(I.texture).__webglTexture=G,tt.get(I.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:nt,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,G){let nt=tt.get(I);nt.__webglFramebuffer=G,nt.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(I,G=0,nt=0){K=I,z=G,F=nt;let j=null,Q=!1,zt=!1;if(I){let Nt=tt.get(I);if(Nt.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(B.FRAMEBUFFER,Nt.__webglFramebuffer),Z.copy(I.viewport),ot.copy(I.scissor),mt=I.scissorTest,T.viewport(Z),T.scissor(ot),T.setScissorTest(mt),V=-1;return}else if(Nt.__webglFramebuffer===void 0)it.setupRenderTarget(I);else if(Nt.__hasExternalTextures)it.rebindTextures(I,tt.get(I.texture).__webglTexture,tt.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let de=I.depthTexture;if(Nt.__boundDepthTexture!==de){if(de!==null&&tt.has(de)&&(I.width!==de.image.width||I.height!==de.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(I)}}let Vt=I.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(zt=!0);let Zt=tt.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Zt[G])?j=Zt[G][nt]:j=Zt[G],Q=!0):I.samples>0&&it.useMultisampledRTT(I)===!1?j=tt.get(I).__webglMultisampledFramebuffer:Array.isArray(Zt)?j=Zt[nt]:j=Zt,Z.copy(I.viewport),ot.copy(I.scissor),mt=I.scissorTest}else Z.copy(ft).multiplyScalar(H).floor(),ot.copy(Y).multiplyScalar(H).floor(),mt=ut;if(nt!==0&&(j=D),T.bindFramebuffer(B.FRAMEBUFFER,j)&&T.drawBuffers(I,j),T.viewport(Z),T.scissor(ot),T.setScissorTest(mt),Q){let Nt=tt.get(I.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+G,Nt.__webglTexture,nt)}else if(zt){let Nt=G;for(let Vt=0;Vt<I.textures.length;Vt++){let Zt=tt.get(I.textures[Vt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Vt,Zt.__webglTexture,nt,Nt)}}else if(I!==null&&nt!==0){let Nt=tt.get(I.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Nt.__webglTexture,nt)}V=-1};function su(I){let G=tt.get(I);return(G.__readFormat!==I.format||G.__readType!==I.type)&&(G.__readFormat=I.format,G.__readType=I.type,G.__formatReadable=N.textureFormatReadable(I.format),G.__typeReadable=N.textureTypeReadable(I.type)),G}this.readRenderTargetPixels=function(I,G,nt,j,Q,zt,Bt,Nt=0){if(!(I&&I.isWebGLRenderTarget)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=tt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Bt!==void 0&&(Vt=Vt[Bt]),Vt){T.bindFramebuffer(B.FRAMEBUFFER,Vt);try{let Zt=I.textures[Nt],de=Zt.format,ge=Zt.type;I.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Nt);let Wt=su(Zt);if(Wt.__formatReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Wt.__typeReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=I.width-j&&nt>=0&&nt<=I.height-Q&&B.readPixels(G,nt,j,Q,Pt.convert(de),Pt.convert(ge),zt)}finally{let Zt=K!==null?tt.get(K).__webglFramebuffer:null;T.bindFramebuffer(B.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(I,G,nt,j,Q,zt,Bt,Nt=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=tt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Bt!==void 0&&(Vt=Vt[Bt]),Vt)if(G>=0&&G<=I.width-j&&nt>=0&&nt<=I.height-Q){T.bindFramebuffer(B.FRAMEBUFFER,Vt);let Zt=I.textures[Nt],de=Zt.format,ge=Zt.type;I.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Nt);let Wt=su(Zt);if(Wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Te=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Te),B.bufferData(B.PIXEL_PACK_BUFFER,zt.byteLength,B.STREAM_READ),B.readPixels(G,nt,j,Q,Pt.convert(de),Pt.convert(ge),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let tn=K!==null?tt.get(K).__webglFramebuffer:null;T.bindFramebuffer(B.FRAMEBUFFER,tn);let Ve=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Ed(B,Ve,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Te),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,zt),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(Te),B.deleteSync(Ve),zt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,G=null,nt=0){let j=Math.pow(2,-nt),Q=Math.floor(I.image.width*j),zt=Math.floor(I.image.height*j),Bt=G!==null?G.x:0,Nt=G!==null?G.y:0;it.setTexture2D(I,0),B.copyTexSubImage2D(B.TEXTURE_2D,nt,0,0,Bt,Nt,Q,zt),T.unbindTexture()},this.copyTextureToTexture=function(I,G,nt=null,j=null,Q=0,zt=0){let Bt,Nt,Vt,Zt,de,ge,Wt,Te,tn,Ve=I.isCompressedTexture?I.mipmaps[zt]:I.image;if(nt!==null)Bt=nt.max.x-nt.min.x,Nt=nt.max.y-nt.min.y,Vt=nt.isBox3?nt.max.z-nt.min.z:1,Zt=nt.min.x,de=nt.min.y,ge=nt.isBox3?nt.min.z:0;else{let Qe=Math.pow(2,-Q);Bt=Math.floor(Ve.width*Qe),Nt=Math.floor(Ve.height*Qe),I.isDataArrayTexture?Vt=Ve.depth:I.isData3DTexture?Vt=Math.floor(Ve.depth*Qe):Vt=1,Zt=0,de=0,ge=0}j!==null?(Wt=j.x,Te=j.y,tn=j.z):(Wt=0,Te=0,tn=0);let Ue=Pt.convert(G.format),mn=Pt.convert(G.type),Ft;G.isData3DTexture?(it.setTexture3D(G,0),Ft=B.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(it.setTexture2DArray(G,0),Ft=B.TEXTURE_2D_ARRAY):(it.setTexture2D(G,0),Ft=B.TEXTURE_2D),T.activeTexture(B.TEXTURE0),T.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,G.flipY),T.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),T.pixelStorei(B.UNPACK_ALIGNMENT,G.unpackAlignment);let Sn=T.getParameter(B.UNPACK_ROW_LENGTH),Me=T.getParameter(B.UNPACK_IMAGE_HEIGHT),kn=T.getParameter(B.UNPACK_SKIP_PIXELS),ci=T.getParameter(B.UNPACK_SKIP_ROWS),Bi=T.getParameter(B.UNPACK_SKIP_IMAGES);T.pixelStorei(B.UNPACK_ROW_LENGTH,Ve.width),T.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ve.height),T.pixelStorei(B.UNPACK_SKIP_PIXELS,Zt),T.pixelStorei(B.UNPACK_SKIP_ROWS,de),T.pixelStorei(B.UNPACK_SKIP_IMAGES,ge);let Ds=I.isDataArrayTexture||I.isData3DTexture,Ne=G.isDataArrayTexture||G.isData3DTexture;if(I.isDepthTexture){let Qe=tt.get(I),Hi=tt.get(G),He=tt.get(Qe.__renderTarget),ki=tt.get(Hi.__renderTarget);T.bindFramebuffer(B.READ_FRAMEBUFFER,He.__webglFramebuffer),T.bindFramebuffer(B.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let Ns=0;Ns<Vt;Ns++)Ds&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,tt.get(I).__webglTexture,Q,ge+Ns),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,tt.get(G).__webglTexture,zt,tn+Ns)),B.blitFramebuffer(Zt,de,Bt,Nt,Wt,Te,Bt,Nt,B.DEPTH_BUFFER_BIT,B.NEAREST);T.bindFramebuffer(B.READ_FRAMEBUFFER,null),T.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Q!==0||I.isRenderTargetTexture||tt.has(I)){let Qe=tt.get(I),Hi=tt.get(G);T.bindFramebuffer(B.READ_FRAMEBUFFER,R),T.bindFramebuffer(B.DRAW_FRAMEBUFFER,C);for(let He=0;He<Vt;He++)Ds?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Qe.__webglTexture,Q,ge+He):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Qe.__webglTexture,Q),Ne?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Hi.__webglTexture,zt,tn+He):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Hi.__webglTexture,zt),Q!==0?B.blitFramebuffer(Zt,de,Bt,Nt,Wt,Te,Bt,Nt,B.COLOR_BUFFER_BIT,B.NEAREST):Ne?B.copyTexSubImage3D(Ft,zt,Wt,Te,tn+He,Zt,de,Bt,Nt):B.copyTexSubImage2D(Ft,zt,Wt,Te,Zt,de,Bt,Nt);T.bindFramebuffer(B.READ_FRAMEBUFFER,null),T.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Ne?I.isDataTexture||I.isData3DTexture?B.texSubImage3D(Ft,zt,Wt,Te,tn,Bt,Nt,Vt,Ue,mn,Ve.data):G.isCompressedArrayTexture?B.compressedTexSubImage3D(Ft,zt,Wt,Te,tn,Bt,Nt,Vt,Ue,Ve.data):B.texSubImage3D(Ft,zt,Wt,Te,tn,Bt,Nt,Vt,Ue,mn,Ve):I.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,zt,Wt,Te,Bt,Nt,Ue,mn,Ve.data):I.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,zt,Wt,Te,Ve.width,Ve.height,Ue,Ve.data):B.texSubImage2D(B.TEXTURE_2D,zt,Wt,Te,Bt,Nt,Ue,mn,Ve);T.pixelStorei(B.UNPACK_ROW_LENGTH,Sn),T.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Me),T.pixelStorei(B.UNPACK_SKIP_PIXELS,kn),T.pixelStorei(B.UNPACK_SKIP_ROWS,ci),T.pixelStorei(B.UNPACK_SKIP_IMAGES,Bi),zt===0&&G.generateMipmaps&&B.generateMipmap(Ft),T.unbindTexture()},this.initRenderTarget=function(I){tt.get(I).__webglFramebuffer===void 0&&it.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?it.setTextureCube(I,0):I.isData3DTexture?it.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?it.setTexture2DArray(I,0):it.setTexture2D(I,0),T.unbindTexture()},this.resetState=function(){z=0,F=0,K=null,T.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ye._getDrawingBufferColorSpace(t),e.unpackColorSpace=ye._getUnpackColorSpace()}};var Wo=class extends Ri{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new jt;t.deleteAttribute("uv");let e=new Xt({side:ln}),n=new Xt,s=new Ro(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new k(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new ho(t,n,6),a=new nn;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new k(t,Ar(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new k(t,Ar(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new k(t,Ar(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new k(t,Ar(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let u=new k(t,Ar(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let d=new k(t,Ar(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ar(i){return new So({color:0,emissive:16777215,emissiveIntensity:i})}var Di=[{id:0,name:"Bubbles",tag:"The Royal Bean",color:"#ff5fb4"},{id:1,name:"Ninja",tag:"The Silent Bean",color:"#3b82f6"},{id:2,name:"Dino",tag:"The Chunky Dino",color:"#3ddc84"},{id:3,name:"Robo",tag:"The Bolt Bot",color:"#ffc233"}],Xo=[{id:0,key:"fun",name:"Fun Map",sub:"Chill",stars:1,limit:400,finishZ:-424,finishY:.15,colors:["#80ed99","#4cc9f0"],blurb:"Giant theme park: rides, highways with cars to drive, a SKY SPEEDWAY to win red racers, then the maze. Nothing can kill you!"},{id:1,key:"jungle",name:"Jungle",sub:"Free Roam",stars:1,limit:0,finishZ:-99999,finishY:99999,free:!0,colors:["#6bbf59","#ffd23f"],blurb:"Wild lion, leopard, elephant & horse roam the trees. Beat them with the BAT to tame them as pets and RIDE them - then climb the hill and free the DINOSAUR! No race, just fun."},{id:2,key:"quest",name:"Jungle Quest",sub:"Team Co-op",stars:2,limit:0,finishZ:-99999,finishY:99999,free:!0,quest:!0,colors:["#7b3fe4","#ffd23f"],blurb:"Walk the long road with your team! Solve 5 mazes, stand on the glowing circles together to drop the boulder, beat each beast with the BAT to open the gate - then FREE THE DRAGON! Nobody can die."},{id:3,key:"arena",name:"Small Room",sub:"Bat Fight",stars:1,limit:0,finishZ:-99999,finishY:99999,free:!0,arena:!0,colors:["#cfe3ff","#ffd9a8"],blurb:"One small plain room, everybody in sight. Beat each other with the BAT! A high SLIDE to ride and 4 BUNGEE pads - nothing else."},{id:4,key:"maze",name:"Maze",sub:"Obstacle Race",stars:3,limit:900,finishZ:-715.5,finishY:0,colors:["#ff6b9d","#4cc9f0"],blurb:"A long candy-park race: doors to dash through, water to hop over, giant fans, GRAB-SWINGS, a boat ride, huge hammers and seesaws. Be first to the finish!"},{id:5,key:"annoy",name:"Annoying Maze",sub:"Tricky Race",stars:4,limit:900,finishZ:-297,finishY:0,colors:["#b58cff","#ff6b9d"],blurb:"5 coloured tunnels (only one goes through!), 2 ferris wheels, a fan over the water, trampolines, flag platforms with giant slamming blades, 5 cutters - and a tiny safe lane on the right."},{id:6,key:"hunt",name:"Jungle Hunt",sub:"Gun Co-op",stars:4,limit:0,finishZ:-99999,finishY:99999,free:!0,hunt:!0,colors:["#2e9b3f","#ff8a1c"],blurb:"Grab the GUN (unlimited bullets, auto-aim) and work as a team! Shoot the beast packs, then solve the MACHINES together: weight plates & a huge gear door, a counterweight lift... Nobody can die. More chapters coming!"}];var Yo=new O;function Xn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Yo.copy(t),Yo[n]=0,Yo.normalize();let c=.5*o/(o+a),h=1-Yo.angleTo(i)/l;return Math.sign(Yo[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Rr=class i extends jt{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new O,c=new O,h=new O(t,e,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,m=f.length/6,y=new O,p=.5/o;for(let g=0,E=0;g<f.length;g+=3,E+=2)switch(l.fromArray(f,g),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),f[g+0]=h.x*Math.sign(l.x)+c.x*r,f[g+1]=h.y*Math.sign(l.y)+c.y*r,f[g+2]=h.z*Math.sign(l.z)+c.z*r,u[g+0]=c.x,u[g+1]=c.y,u[g+2]=c.z,Math.floor(g/m)){case 0:y.set(1,0,0),d[E+0]=Xn(y,c,"z","y",r,n),d[E+1]=1-Xn(y,c,"y","z",r,e);break;case 1:y.set(-1,0,0),d[E+0]=1-Xn(y,c,"z","y",r,n),d[E+1]=1-Xn(y,c,"y","z",r,e);break;case 2:y.set(0,1,0),d[E+0]=1-Xn(y,c,"x","z",r,t),d[E+1]=Xn(y,c,"z","x",r,n);break;case 3:y.set(0,-1,0),d[E+0]=1-Xn(y,c,"x","z",r,t),d[E+1]=1-Xn(y,c,"z","x",r,n);break;case 4:y.set(0,0,1),d[E+0]=1-Xn(y,c,"x","y",r,t),d[E+1]=1-Xn(y,c,"y","x",r,e);break;case 5:y.set(0,0,-1),d[E+0]=Xn(y,c,"x","y",r,t),d[E+1]=1-Xn(y,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};function lp(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new ze,c=0;for(let h=0;h<i.length;++h){let f=i[h],u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,f=[];for(let u=0;u<i.length;++u){let d=i[u].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+h);h+=i[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=ap(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let y=0;y<o[h].length;++y)d.push(o[h][y][u]);let m=ap(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function ap(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new ke(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let f=l/e;for(let u=0,d=h.count;u<d;u++)for(let m=0;m<e;m++){let y=h.getComponent(u,m);a.setComponent(u+f,m,y)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function Kv(i,t,e){let n=document.createElement("canvas");n.width=t,n.height=e;let s=n.getContext("2d");if(i==="pk"){s.fillStyle="#01411c",s.fillRect(0,0,t,e),s.fillStyle="#ffffff",s.fillRect(0,0,t*.25,e);let o=t*.625,a=e*.5,l=e*.31;s.beginPath(),s.arc(o,a,l,0,Math.PI*2),s.fillStyle="#ffffff",s.fill(),s.beginPath(),s.arc(o+l*.27,a-l*.14,l*.8,0,Math.PI*2),s.fillStyle="#01411c",s.fill();let c=o+l*.46,h=a-l*.36,f=l*.36,u=f*.382;s.beginPath();for(let d=0;d<10;d++){let m=-Math.PI/2+d*Math.PI/5+.52,y=d%2?u:f;s.lineTo(c+Math.cos(m)*y,h+Math.sin(m)*y)}s.closePath(),s.fillStyle="#ffffff",s.fill()}else i==="es"?(s.fillStyle="#aa151b",s.fillRect(0,0,t,e),s.fillStyle="#f1bf00",s.fillRect(0,e/4,t,e/2),jv(s,t*.36,e*.5,e*.42)):(s.fillStyle="#000000",s.fillRect(0,0,t,e/3),s.fillStyle="#ffffff",s.fillRect(0,e/3,t,e/3),s.fillStyle="#007a3d",s.fillRect(0,e*2/3,t,e/3),s.beginPath(),s.moveTo(0,0),s.lineTo(t*.33,e/2),s.lineTo(0,e),s.closePath(),s.fillStyle="#ce1126",s.fill());let r=new An(n);return r.colorSpace=Fe,r.anisotropy=4,r}function jv(i,t,e,n){let s="#d9a400",r="#c8102e",o="#0b3d91",a="#f4f4f4",l="#7a2a8a";for(let g of[-1,1])i.fillStyle="#ffffff",i.fillRect(t+g*n*.98-n*.09,e-n*.62,n*.18,n*1.18),i.fillStyle="#b6b6b6",i.fillRect(t+g*n*.98+(g>0?0:-n*.03),e-n*.62,n*.03,n*1.18),i.fillStyle=s,i.fillRect(t+g*n*.98-n*.14,e-n*.7,n*.28,n*.1),i.fillRect(t+g*n*.98-n*.14,e+n*.54,n*.28,n*.08),i.beginPath(),i.arc(t+g*n*.98,e-n*.78,n*.1,0,Math.PI*2),i.fillStyle=s,i.fill(),i.fillStyle=r,i.fillRect(t+g*n*.98-n*.1,e-n*.52,n*.2,n*.1);i.fillStyle=r,i.fillRect(t-n*.95,e+n*.1,n*1.9,n*.16),i.fillStyle="#ffffff",i.fillRect(t-n*.9,e+n*.13,n*1.8,n*.04);let c=n*1.16,h=n*1.3,f=t-c/2,u=e-h*.45;i.save(),i.beginPath(),i.moveTo(f,u),i.lineTo(f+c,u),i.lineTo(f+c,u+h*.55),i.quadraticCurveTo(f+c,u+h,t,u+h),i.quadraticCurveTo(f,u+h,f,u+h*.55),i.closePath(),i.clip(),i.fillStyle=r,i.fillRect(f,u,c/2,h*.5),i.fillStyle=a,i.fillRect(f+c/2,u,c/2,h*.5),i.fillStyle=s,i.fillRect(f,u+h*.5,c/2,h*.5);for(let g=0;g<4;g++)i.fillStyle=r,i.fillRect(f+c*.07+g*c*.115,u+h*.5,c*.055,h*.5);i.fillStyle=r,i.fillRect(f+c/2,u+h*.5,c/2,h*.5),i.strokeStyle=s,i.lineWidth=n*.03,i.beginPath(),i.moveTo(f+c/2,u+h*.5),i.lineTo(f+c,u+h*.5),i.moveTo(f+c*.75,u+h*.5),i.lineTo(f+c*.75,u+h),i.moveTo(f+c/2,u+h*.75),i.lineTo(f+c,u+h*.75),i.stroke(),i.fillStyle=s;let d=f+c*.25,m=u+h*.27;i.fillRect(d-c*.11,m-h*.02,c*.22,h*.17),i.fillRect(d-c*.06,m-h*.1,c*.12,h*.1);for(let g of[-.11,-.04,.03])i.fillRect(d+c*g,m-h*.15,c*.04,h*.06);i.fillStyle=o,i.fillRect(d-c*.025,m+h*.05,c*.05,h*.1),i.fillStyle=l;let y=f+c*.75,p=u+h*.27;i.beginPath(),i.ellipse(y,p,c*.1,h*.1,0,0,Math.PI*2),i.fill(),i.beginPath(),i.arc(y+c*.08,p-h*.09,c*.05,0,Math.PI*2),i.fill(),i.fillRect(y-c*.12,p+h*.04,c*.05,h*.1),i.fillRect(y+c*.05,p+h*.04,c*.05,h*.1),i.fillStyle=r,i.beginPath(),i.arc(t,u+h*.9,c*.08,0,Math.PI*2),i.fill(),i.fillStyle="#2e7d32",i.fillRect(t-c*.02,u+h*.8,c*.04,h*.05),i.restore(),i.strokeStyle="#1a1a1a",i.lineWidth=n*.025,i.beginPath(),i.moveTo(f,u),i.lineTo(f+c,u),i.lineTo(f+c,u+h*.55),i.quadraticCurveTo(f+c,u+h,t,u+h),i.quadraticCurveTo(f,u+h,f,u+h*.55),i.closePath(),i.stroke(),i.beginPath(),i.ellipse(t,e+h*.02,c*.17,h*.2,0,0,Math.PI*2),i.fillStyle=o,i.fill(),i.lineWidth=n*.025,i.strokeStyle=r,i.stroke(),i.fillStyle=a;for(let[g,E]of[[-.06,-.06],[.06,-.06],[0,.07]])i.beginPath(),i.arc(t+c*g,e+h*(.02+E),c*.03,0,Math.PI*2),i.fill();i.fillStyle=s,i.beginPath(),i.moveTo(t-c*.28,u-h*.02),i.lineTo(t-c*.28,u-h*.2),i.lineTo(t-c*.14,u-h*.12),i.lineTo(t,u-h*.24),i.lineTo(t+c*.14,u-h*.12),i.lineTo(t+c*.28,u-h*.2),i.lineTo(t+c*.28,u-h*.02),i.closePath(),i.fill(),i.beginPath(),i.arc(t,u-h*.3,c*.06,0,Math.PI*2),i.fill(),i.fillStyle=r,i.fillRect(t-c*.2,u-h*.11,c*.4,h*.05)}var cp={};function qo(i){return cp[i]||(cp[i]=Kv(i,768,512))}function Zo(i,t,e){let n=new yt,s=new k(new qe(t,e),new ae({map:qo(i),toneMapped:!1,side:$e}));n.add(s);let r=new k(new jt(t+1.2,e+1.2,.3),new Xt({color:"#f4f1e8",roughness:.5}));return r.position.z=-.2,n.add(r),n}var Qv='"Noto Nastaliq Urdu","Jameel Noori Nastaleeq","Alvi Nastaleeq","Geeza Pro","Segoe UI","Tahoma","Arial",sans-serif',t_='"Lilita One","Fredoka One","Arial Rounded MT Bold","Trebuchet MS",Impact,Arial,sans-serif';function e_(i,t,e={}){let s=Math.round(1024/t),r=document.createElement("canvas");r.width=1024,r.height=s;let o=r.getContext("2d"),a=o.createLinearGradient(0,0,1024,s);a.addColorStop(0,(e.bg||["#1b1464","#3a2d9e"])[0]),a.addColorStop(1,(e.bg||["#1b1464","#3a2d9e"])[1]),o.fillStyle=a,o.fillRect(0,0,1024,s),o.lineWidth=s*.05,o.strokeStyle=e.border||"#ffd23f",o.strokeRect(s*.05,s*.05,1024-s*.1,s-s*.1);let l=e.urdu?Qv:t_,c=s*(e.urdu?.36:.5);o.textAlign="center",o.textBaseline="alphabetic",e.urdu&&(o.direction="rtl");let h=1024*(e.urdu?.62:.86),f=s*(e.urdu?.6:.62),u=c*.8,d=c*.2;for(let p=0;p<3;p++){o.font=`${c}px ${l}`;let g=o.measureText(i);u=g.actualBoundingBoxAscent>0?g.actualBoundingBoxAscent:c*.8,d=g.actualBoundingBoxDescent>0?g.actualBoundingBoxDescent:c*.2;let E=Math.min(1,h/Math.max(1,g.width),f/Math.max(1,u+d));if(E>=.99)break;c*=E}let m=s/2+(u-d)/2;o.lineJoin="round",o.lineWidth=c*.12,o.strokeStyle=e.stroke||"#000000",o.strokeText(i,1024/2,m),o.fillStyle=e.fg||"#ffd23f",o.fillText(i,1024/2,m);let y=new An(r);return y.colorSpace=Fe,y.anisotropy=4,y}function Xe(i,t,e,n={}){let s=new yt;s.add(new k(new qe(t,e),new ae({map:e_(i,t/e,n),toneMapped:!1,side:$e})));let r=new k(new jt(t+.8,e+.8,.3),new Xt({color:n.frame||"#f4f1e8",roughness:.5}));return r.position.z=-.2,s.add(r),s}var ve={R:.42,H:1.55,STEP:.34,EDGE:.28,G:34,RUN:9.4,JUMP:12.2,ACC:70,AIR:22,DEC:95,AIR_DEC:9,ICE_ACC:11,ICE_DEC:5.5,TERM:-50,SNAP:.5},si=(i,t,e)=>i<t?t:i>e?e:i,hp=new Fn,fp=new Un,up=new Se,dp=new O,pp=new O,os=new Ht,Ni=class{constructor(){this.list=[]}add(t,e,n,s,r,o=0,a=0,l=0,c=1,h=1,f=1,u="XYZ"){hp.set(o,a,l,u),fp.setFromEuler(hp),dp.set(e,n,s),pp.set(c,h,f),up.compose(dp,fp,pp);let d=t.index?t.toNonIndexed():t.clone();d.attributes.uv&&d.deleteAttribute("uv"),d.applyMatrix4(up);let m=d.attributes.position.count,y=new Float32Array(m*3);os.set(r);for(let p=0;p<m;p++)y[p*3]=os.r,y[p*3+1]=os.g,y[p*3+2]=os.b;d.setAttribute("color",new ke(y,3)),this.list.push(d)}addGeo(t){t.index&&(t=t.toNonIndexed()),t.attributes.uv&&t.deleteAttribute("uv"),this.list.push(t)}build(t){if(!this.list.length)return null;let e=lp(this.list,!1);return this.list.length=0,new k(e,t)}};var mc=class{constructor(t,e=!1){this.theme=t,this.headless=e,this.group=new yt,this.solids=[],this.ramps=[],this.discs=[],this.hazards=[],this.updaters=[],this.checkpoints=[],this.zones=[],this.pools=[],this.winds=[],this.swings=[],this.main=new Ni,this.glow=new Ni,this.waterY=-5,this.killY=-9,this.geoCache=new Map,this.matCache=new Map,this.colorIdx=0,this.arrowTexture=null,this.time=0,this.hitOut={nx:0,nz:1,pow:10},this.onEvent=null}rbox(t,e,n,s){let r=Math.max(.02,Math.min(s,t/2-.01,e/2-.01,n/2-.01)),o=`${t.toFixed(2)}|${e.toFixed(2)}|${n.toFixed(2)}|${r.toFixed(2)}`,a=this.geoCache.get(o);return a||(a=Math.min(t,e,n)<.35?new jt(t,e,n):new Rr(t,e,n,2,r),this.geoCache.set(o,a)),a}mat(t,e={}){var r,o,a,l;let n=t+JSON.stringify(e),s=this.matCache.get(n);return s||(s=new Xt({color:t,roughness:(r=e.rough)!=null?r:.38,metalness:(o=e.metal)!=null?o:.02,emissive:(a=e.emissive)!=null?a:0,emissiveIntensity:(l=e.ei)!=null?l:1}),this.matCache.set(n,s)),s}pick(){let t=this.theme.plat;return t[this.colorIdx++%t.length]}addSolid(t,e,n,s,r,o,a={}){let l={x0:t,y0:e,z0:n,x1:s,y1:r,z1:o,active:!0,ice:!!a.ice,conv:a.conv||null,bounce:a.bounce||0,boost:a.boost||0,dx:0,dy:0,dz:0,moving:!1,name:a.name||""};return this.solids.push(l),l}add(t,e=!0,n=!0){return t.castShadow=e,t.receiveShadow=n,this.group.add(t),t}emit(t,e){this.onEvent&&this.onEvent(t,e)}platform(t,e,n,s,r,o={}){var h,f,u;let a=(h=o.h)!=null?h:1.6,l=(f=o.color)!=null?f:this.pick(),c=this.addSolid(t-s/2,e-a,n-r/2,t+s/2,e,n+r/2,o);if(!this.headless){if(this.main.add(this.rbox(s,a,r,.3),t,e-a/2,n,l),o.pad!==!1&&s>2.4&&r>2.4){let d=(u=o.padColor)!=null?u:o.ice?this.theme.icePad:this.theme.pad;this.main.add(this.rbox(s-1.1,.12,r-1.1,.05),t,e+0,n,d)}if(this.theme.edgeGlow){let d=this.theme.edgeGlow;this.glow.add(this.rbox(s+.04,.12,.12,.03),t,e-.08,n+r/2,d),this.glow.add(this.rbox(s+.04,.12,.12,.03),t,e-.08,n-r/2,d),this.glow.add(this.rbox(.12,.12,r+.04,.03),t+s/2,e-.08,n,d),this.glow.add(this.rbox(.12,.12,r+.04,.03),t-s/2,e-.08,n,d)}}return c}disc(t,e,n,s,r={}){var f,u,d,m,y,p,g,E,S,x;let o=(f=r.omega)!=null?f:0,a=(u=r.h)!=null?u:1.4,l={cx:t,cz:n,top:e,r:s,th:a,omega:o,phase:(d=r.phase)!=null?d:0,bounce:r.bounce||0,push:r.push||null,ice:!!r.ice,theta:(m=r.phase)!=null?m:0,dTheta:0,kind:"disc",squash:0,first:!0};if(this.discs.push(l),this.headless)return l;if(r.fan){let _=new yt;_.position.set(t,e,n);let M=new k(new Pe(s,.32,10,40),this.mat((y=r.color)!=null?y:"#ff3d68",{rough:.3}));M.rotation.x=Math.PI/2,_.add(M);let w=new k(new gt(s-.2,s-.2,.18,40),this.mat("#dff6ff",{rough:.5}));w.position.y=-.12,_.add(w);let v=new yt;for(let D=0;D<4;D++){let R=new k(this.rbox(s*.95,.12,1.1,.04),this.mat(D%2?"#ffffff":"#ffd23f"));R.position.set(s*.5,.08,0);let C=new yt;C.rotation.y=D*Math.PI/2,C.add(R),v.add(C)}let b=new k(new gt(.55,.55,.5,14),this.mat("#ffffff"));b.position.y=.1,_.add(b,v),this.add(_);let A=new k(new gt(.5,.7,14,10),this.mat(this.theme.hub));A.position.set(t,e-8,n),this.group.add(A);let P=new ae({color:"#ffffff",transparent:!0,opacity:.45,depthWrite:!1,toneMapped:!1}),L=[];for(let D=0;D<6;D++){let R=new k(new jt(.07,1.6,.07),P);this.group.add(R),L.push({m:R,k:D/6,a:D*1.9})}return l.mesh=_,this.updaters.push((D,R)=>{v.rotation.y=-D*14,l.squash=Math.max(0,l.squash-R*4);for(let C of L){let z=(C.k+D*.7)%1;C.m.position.set(t+Math.cos(C.a)*s*.6*(.3+z),e+.3+z*5,n+Math.sin(C.a)*s*.6*(.3+z)),P.opacity=.4}}),l}if(r.bounce){let _=new yt;_.position.set(t,e,n);let M=new k(new gt(s*.55,s*.7,1.4,20),this.mat((p=r.stem)!=null?p:"#fff3d6"));M.position.y=-.7;let w=new k(new ue(s,28,14,0,Math.PI*2,0,Math.PI/2),this.mat((g=r.color)!=null?g:"#ff3b6b",{rough:.25}));w.scale.y=.45,w.position.y=-.05,_.add(M,w);for(let v=0;v<6;v++){let b=new k(new ue(.26,10,8),this.mat("#ffffff")),A=v/6*Math.PI*2;b.position.set(Math.cos(A)*s*.62,.34*(1-.3),Math.sin(A)*s*.62),b.scale.y=.4,_.add(b)}return this.add(_),l.mesh=_,this.updaters.push((v,b)=>{l.squash=Math.max(0,l.squash-b*4);let A=1-Math.sin(l.squash*Math.PI)*.35*l.squash;_.scale.set(1+(1-A)*.5,A,1+(1-A)*.5)}),l}let c=(E=r.color)!=null?E:this.pick(),h=new gt(s,s,a,40);if(o===0)this.main.add(h,t,e-a/2,n,c),this.main.add(new gt(s-.5,s-.5,.12,40),t,e,n,(S=r.padColor)!=null?S:this.theme.pad),this.theme.edgeGlow&&this.glow.add(new Pe(s,.07,6,48),t,e-.1,n,this.theme.edgeGlow,Math.PI/2);else{let _=new yt;_.position.set(t,e,n);let M=new k(h,this.mat(c));M.position.y=-a/2;let w=new k(new gt(s-.5,s-.5,.12,40),this.mat((x=r.padColor)!=null?x:this.theme.pad));_.add(M,w);for(let v=0;v<4;v++){let b=new k(this.rbox(s*1.6,.14,.6,.05),this.mat(this.theme.hazard2));b.position.y=.06,b.rotation.y=v*Math.PI/4,_.add(b)}if(this.theme.edgeGlow){let v=new k(new Pe(s,.08,6,48),new ae({color:this.theme.edgeGlow,toneMapped:!1}));v.rotation.x=Math.PI/2,v.position.y=-.1,_.add(v)}this.add(_),l.mesh=_,this.updaters.push(v=>{_.rotation.y=l.theta})}return l}ramp(t,e,n,s,r,o,a={}){var F,K;let l={x0:t-o/2,x1:t+o/2,zN:e,zF:s,yN:n,yF:r,conv:a.conv||null,ice:!!a.ice,kind:"ramp"};if(this.ramps.push(l),this.headless)return l;let c=Math.min(n,r)-1.6,h=(F=a.color)!=null?F:this.pick(),f=(V,J,Z)=>[V,J,Z],u=f(l.x0,n,e),d=f(l.x1,n,e),m=f(l.x1,r,s),y=f(l.x0,r,s),p=f(l.x0,c,e),g=f(l.x1,c,e),E=f(l.x1,c,s),S=f(l.x0,c,s),x=[],_=(V,J,Z,ot)=>{x.push(...V,...J,...Z,...V,...Z,...ot)};_(u,y,m,d),_(u,d,g,p),_(m,y,S,E),_(y,u,p,S),_(d,m,E,g);let M=new ze;M.setAttribute("position",new xe(x,3)),M.computeVertexNormals();let w=x.length/3,v=new Float32Array(w*3);os.set(h);for(let V=0;V<w;V++)v[V*3]=os.r,v[V*3+1]=os.g,v[V*3+2]=os.b;M.setAttribute("color",new ke(v,3)),this.main.addGeo(M);let b=e-s,A=r-n,P=Math.hypot(b,A),L=Math.atan2(A,b),D=(e+s)/2,R=(n+r)/2,C=-Math.sin(L),z=Math.cos(L);return this.main.add(this.rbox(o-1.6,.1,P-.6,.04),t,R+z*.02,D+C*.02*0,(K=a.padColor)!=null?K:a.ice?this.theme.icePad:this.theme.pad,L,0,0),l}mover(t,e,n,s,r,o,a={}){var y,p,g;let l=(y=a.h)!=null?y:1.5,c=this.addSolid(t-s/2,e-l,n-r/2,t+s/2,e,n+r/2,a);c.moving=!0,c.first=!0;let h=null;if(!this.headless){if(h=new k(this.rbox(s,l,r,.28),this.mat((p=a.color)!=null?p:this.pick(),{rough:.3})),a.pad!==!1){let E=new k(this.rbox(s-1,.12,r-1,.05),this.mat((g=a.padColor)!=null?g:this.theme.pad));E.position.y=l/2,h.add(E)}if(a.stripes){let E=new k(this.rbox(s+.02,.4,r+.02,.05),this.mat(this.theme.hazard));E.position.y=0,h.add(E)}this.add(h)}let f=0,u=0,d=0,m=E=>{let[S,x,_]=o(E);c.x0=t-s/2+S,c.x1=t+s/2+S,c.y0=e-l+x,c.y1=e+x,c.z0=n-r/2+_,c.z1=n+r/2+_,c.first&&(f=S,u=x,d=_,c.first=!1),c.dx=S-f,c.dy=x-u,c.dz=_-d,f=S,u=x,d=_,h&&h.position.set(t+S,e-l/2+x,n+_)};return m(0),this.updaters.push(E=>m(E)),c}tile(t,e,n,s,r,o={}){var y,p,g,E,S,x;let a=(y=o.period)!=null?y:4.8,l=(p=o.solidT)!=null?p:2.4,c=(g=o.warn)!=null?g:.8,h=(E=o.off)!=null?E:0,f=this.addSolid(t-s/2,e-1,n-r/2,t+s/2,e,n+r/2,o),u=null,d=null;this.headless||(d=new Xt({color:(S=o.color)!=null?S:this.pick(),roughness:.3,emissive:0}),u=new k(this.rbox(s,1,r,.22),d),u.position.set(t,e-.5,n),this.add(u));let m=new Ht((x=o.color)!=null?x:"#ffffff");return this.updaters.push(_=>{let M=((_+h)%a+a)%a;M<l?(f.active=!0,u&&(u.visible=!0,u.position.x=t,d.emissive.setRGB(0,0,0))):M<l+c?(f.active=!0,u&&(u.visible=!0,u.position.x=t+Math.sin(_*70)*.07,d.emissive.setRGB(.55,.05,.02))):(f.active=!1,u&&(u.visible=!1))}),f}conveyor(t,e,n,s,r,o,a={}){let l=this.addSolid(t-s/2,e-1.4,n-r/2,t+s/2,e,n+r/2,{...a,conv:[0,o]});if(this.headless)return l;this.main.add(this.rbox(s,1.4,r,.25),t,e-.7,n,this.theme.convBase);let c=new qe(s-1.2,r-.6),h=this.arrowTexture?this.arrowTexture.clone():null;h&&(h.needsUpdate=!0,h.wrapS=h.wrapT=er,h.repeat.set(Math.max(1,Math.round((s-1.2)/2.4)),Math.max(1,Math.round((r-.6)/2.4))));let f=new k(c,new Xt({color:this.theme.belt,map:h,roughness:.6}));f.rotation.x=-Math.PI/2,o>0&&(f.rotation.z=Math.PI),f.position.set(t,e+.03,n),this.add(f,!1,!0);let u=Math.abs(o);return this.updaters.push((d,m)=>{h&&(h.offset.y-=u*m/2.4/(r-.6)*h.repeat.y)}),l}bar(t,e,n,s,r={}){var E,S,x,_,M,w,v;let o=(E=r.w)!=null?E:1.2,a=(S=r.h)!=null?S:1.2,l=(x=r.omega)!=null?x:1.4,c=(_=r.phase)!=null?_:0,h=(M=r.arms)!=null?M:1,f={type:"bar",test:(b,A,P)=>{if(b.y>e+a||b.y+ve.H<e)return!1;let L=b.x-t,D=b.z-n;if(L*L+D*D>(s/2+1.2)*(s/2+1.2))return!1;let R=c+l*A;for(let C=0;C<h;C++){let z=R+C*Math.PI/h,F=Math.cos(z),K=Math.sin(z),V=L*F-D*K,J=L*K+D*F,Z=si(V,-s/2,s/2),ot=si(J,-o/2,o/2),mt=V-Z,Yt=J-ot;if(mt*mt+Yt*Yt<ve.R*ve.R){let At=Math.hypot(L,D)||.001,kt=l*D,U=-l*L,H=Math.hypot(kt,U)||1;kt/=H,U/=H;let rt=kt+L/At*.45,_t=U+D/At*.45,ft=Math.hypot(rt,_t)||1;return P.nx=rt/ft,P.nz=_t/ft,P.pow=si(6+Math.abs(l)*At*1.15,9,21),!0}}return!1}};if(this.hazards.push(f),this.headless)return f;let u=new yt;u.position.set(t,e+a/2,n);let d=Math.max(3,Math.round(s/2.4)),m=s/d,y=this.mat((w=r.color1)!=null?w:this.theme.hazard,{rough:.3}),p=this.mat((v=r.color2)!=null?v:this.theme.hazard2,{rough:.3});for(let b=0;b<h;b++){let A=new yt;A.rotation.y=b*Math.PI/h;for(let P=0;P<d;P++){let L=new k(this.rbox(m*.995,a,o,.25),P%2?y:p);L.position.x=-s/2+m*(P+.5),L.castShadow=!0,A.add(L)}u.add(A)}let g=new k(new gt(o*.85,o,a+.7,16),this.mat(this.theme.hub));return g.castShadow=!0,u.add(g),this.add(u),this.updaters.push(b=>{u.rotation.y=c+l*b}),f}hammer(t,e,n,s,r={}){var g,E,S,x,_,M,w,v,b;let o=(g=r.amp)!=null?g:1.1,a=(E=r.omega)!=null?E:1.6,l=(S=r.phase)!=null?S:0,c=(x=r.r)!=null?x:1.3,h=(_=r.span)!=null?_:9,f={type:"hammer",test:(A,P,L)=>{let D=o*Math.sin(a*P+l),R=t+s*Math.sin(D),C=e-s*Math.cos(D),z=o*a*Math.cos(a*P+l),F=s*Math.cos(D)*z,K=si(C,A.y+.15,A.y+ve.H-.1),V=R-A.x,J=C-K,Z=n-A.z,ot=ve.R+c;if(V*V+J*J+Z*Z<ot*ot){let mt=-V,Yt=-Z;mt=(Math.sign(F)||Math.sign(mt)||1)*1,Yt=Yt*.5;let kt=Math.hypot(mt,Yt);return L.nx=mt/kt,L.nz=Yt/kt,L.pow=si(Math.abs(F)*1.05+6,10,23),!0}return!1}};if(this.hazards.push(f),this.headless)return f;let u=new yt;u.position.set(t,e,n);let d=new k(new gt(.17,.17,s,10),this.mat(this.theme.hub));d.position.y=-s/2;let m=new k(new ue(c,28,18),this.mat(this.theme.hazard,{rough:.25}));m.position.y=-s;let y=new k(new Pe(c*.98,.12,8,28),this.mat(this.theme.hazard2));y.position.y=-s,y.rotation.x=Math.PI/2;let p=y.clone();if(p.rotation.set(0,Math.PI/2,0),u.add(d,m,y,p),u.traverse(A=>{A.isMesh&&(A.castShadow=!0)}),this.add(u),this.updaters.push(A=>{u.rotation.z=o*Math.sin(a*A+l)}),!this.headless){let A=this.theme.hub;this.main.add(this.rbox(.9,e-((M=r.baseY)!=null?M:e-s-1.5)+1.2,.9,.2),t-h,(e+((w=r.baseY)!=null?w:e-s-1.5))/2-0,n,A),this.main.add(this.rbox(.9,e-((v=r.baseY)!=null?v:e-s-1.5)+1.2,.9,.2),t+h,(e+((b=r.baseY)!=null?b:e-s-1.5))/2-0,n,A),this.main.add(this.rbox(h*2+1,.8,.9,.2),t,e+.6,n,A)}return f}balls(t,e,n,s,r,o,a,l,c={}){let h=n-e,f=h/o,u=l.map(()=>({x:t,z:0,y:0,on:!1})),d=[],m=p=>new Ht(p%2?this.theme.hazard:this.theme.hazard2);this.headless||l.forEach((p,g)=>{let E=new ue(r,32,20),S=E.attributes.position,x=S.count,_=new Float32Array(x*3);for(let w=0;w<x;w++){let v=Math.atan2(S.getZ(w),S.getX(w)),A=Math.floor((v+Math.PI)/(Math.PI*2)*8)%2?new Ht(this.theme.hazard):new Ht(this.theme.hazard2);_[w*3]=A.r,_[w*3+1]=A.g,_[w*3+2]=A.b}E.setAttribute("color",new ke(_,3));let M=new k(E,new Xt({vertexColors:!0,roughness:.25}));M.visible=!1,this.add(M),d.push(M)});let y={type:"balls",test:(p,g,E)=>{for(let S=0;S<u.length;S++){let x=u[S];if(!x.on)continue;let _=si(x.y,p.y+.15,p.y+ve.H-.1),M=x.x-p.x,w=x.y-_,v=x.z-p.z,b=ve.R+r;if(M*M+w*w+v*v<b*b){let A=(p.x-x.x)*.8,P=1,L=Math.hypot(A,P);return E.nx=A/L,E.nz=P/L,E.pow=si(o*1.1+4,10,20),!0}}return!1}};return this.hazards.push(y),this.updaters.push(p=>{l.forEach((g,E)=>{let S=u[E],x=((p+g)%a+a)%a,_=x<f;S.on=_,_&&(S.z=e+x*o,S.y=s(S.z)+r,S.x=t);let M=d[E];M&&(M.visible=_,_&&(M.position.set(S.x,S.y,S.z),M.rotation.x=S.z/r))})}),y}seesaw(t,e,n,s,r,o,a,l=0){let c={x0:t-s/2,x1:t+s/2,zN:n+r/2,zF:n-r/2,yN:e,yF:e,conv:null,ice:!1,kind:"ramp",seesaw:!0};this.ramps.push(c);let h=m=>{let y=o*Math.sin(2*Math.PI*m/a+l);return c.yN=e+y,c.yF=e-y,y};if(h(0),this.headless)return this.updaters.push(m=>h(m)),c;this.main.add(new gt(.5,1.1,2.4,8),t,e-1.4,n,this.theme.hub),this.main.add(this.rbox(s*.9,.7,1.4,.2),t,e-2.5,n,this.theme.hazard2);let f=new yt;f.position.set(t,e-.25,n);let u=new k(this.rbox(s,.5,r,.2),this.mat(this.pick(),{rough:.35})),d=new k(this.rbox(s-1.2,.1,r-1.2,.04),this.mat(this.theme.pad));d.position.y=.27,f.add(u,d);for(let m of[-1,1]){let y=new k(this.rbox(s,.62,1.2,.2),this.mat(this.theme.hazard,{rough:.3}));y.position.set(0,.03,m*(r/2-.6)),f.add(y)}for(let m of[-1,1]){let y=new k(new gt(.1,.1,1.1,8),this.mat(this.theme.hub));y.position.set(m*(s/2-.5),.9,0),f.add(y)}return this.add(f),this.updaters.push(m=>{let y=h(m);f.rotation.x=-Math.atan2(y,r/2)}),c}bungee(t,e,n,s,r,o){let a=this.disc(t,n,e,s,{bounce:r,color:this.theme.hazard});if(this.headless)return a;let l=o,c=14;for(let h=0;h<c;h++){let f=h/c*Math.PI*2,u=t+Math.cos(f)*(s*.92),d=e+Math.sin(f)*(s*.92);this.main.add(new gt(.07,.07,l-n,5),u,(l+n)/2,d,h%2?"#ffffff":this.theme.hazard)}this.main.add(new Pe(s*.92,.35,8,36),t,l,e,this.theme.accent,Math.PI/2),this.main.add(new Pe(s*.92,.2,8,36),t,n+.15,e,"#ffffff",Math.PI/2);for(let h=0;h<3;h++){let f=Math.PI/2+h*Math.PI*2/3+.5,u=t+Math.cos(f)*(s+1.4),d=e+Math.sin(f)*(s+1.4);this.main.add(new gt(.45,.6,l+12,8),u,(l-12)/2,d,h%2?"#ffd23f":"#ffffff")}return this.glow.add(new ue(.9,12,8),t,l+1.6,e,"#ffffff"),a}tube(t,e,n){if(this.headless)return;let s=new O(0,1,0),r=new O,o=new O,a=new O,l=new Un,c=new Fn;for(let h=0;h<t.length-1;h++){r.set(...t[h]),o.set(...t[h+1]),a.subVectors(o,r);let f=a.length();a.normalize(),l.setFromUnitVectors(s,a),c.setFromQuaternion(l),this.main.add(new gt(e,e,f*1.02,6),(r.x+o.x)/2,(r.y+o.y)/2,(r.z+o.z)/2,n,c.x,c.y,c.z)}}airpad(t,e,n,s,r,o={}){var u,d;let a={x:t,z:e,r:n,y0:s,y1:s+r,lift:(u=o.lift)!=null?u:90,vmax:(d=o.vmax)!=null?d:9};if(this.zones.push(a),this.headless)return a;this.main.add(new gt(n*.95,n,.5,28),t,s+.25,e,this.theme.hub),this.glow.add(new Pe(n*.8,.14,8,36),t,s+.55,e,"#9cf0ff",Math.PI/2);let l=new ae({color:"#8fe9ff",transparent:!0,opacity:.16,depthWrite:!1,side:$e,toneMapped:!1}),c=new k(new gt(n*.92,n*.92,r,24,1,!0),l);c.position.set(t,s+r/2,e),c.renderOrder=3,this.group.add(c);let h=new ae({color:"#e6fbff",transparent:!0,opacity:.5,depthWrite:!1,toneMapped:!1}),f=[];for(let m=0;m<5;m++){let y=new k(new Pe(n*.85,.08,6,28),h);y.rotation.x=Math.PI/2,y.renderOrder=3,this.group.add(y),f.push(y)}return this.updaters.push(m=>{f.forEach((y,p)=>{let g=(m*.5+p/5)%1;y.position.set(t,s+.6+g*(r-.8),e),y.scale.setScalar(1-g*.25)})}),a}punch(t,e,n,s,r,o,a={}){var S,x;let l=(S=a.period)!=null?S:3.2,c=(x=a.off)!=null?x:0,h=1,f=Math.hypot(s,r)||1;s/=f,r/=f;let u=_=>{let M=((_+c)%l+l)%l/l,w=(v,b,A)=>{let P=Math.max(0,Math.min(1,(A-v)/(b-v)));return P*P*(3-2*P)};return o*(w(.5,.58,M)-w(.78,.95,M))},d={type:"punch",test:(_,M,w)=>{var z;let v=u(M);if(v<.4)return!1;let b=t+s*(v+.5),A=n+r*(v+.5),P=si(e,_.y+.15,_.y+ve.H-.1),L=b-_.x,D=e-P,R=A-_.z,C=ve.R+h;return L*L+D*D+R*R<C*C?(w.nx=s,w.nz=r,w.pow=(z=a.pow)!=null?z:15,!0):!1}};if(this.hazards.push(d),this.headless)return d;let m=new yt;m.position.set(t,e,n),m.rotation.y=Math.atan2(s,r);let y=new k(new gt(.22,.22,1,8),this.mat(this.theme.hub));y.rotation.x=Math.PI/2;let p=new k(new ue(h,20,14),this.mat(this.theme.hazard,{rough:.3})),g=new k(new gt(.62,.62,.5,14),this.mat("#ffffff"));g.rotation.x=Math.PI/2,g.position.z=-.95;let E=new k(new ue(.42,12,10),this.mat(this.theme.hazard,{rough:.3}));return E.position.set(.7,.45,-.35),p.add(g,E),g.position.z=-.95,p.scale.set(1,1,1.1),m.add(y,p),m.traverse(_=>{_.isMesh&&(_.castShadow=!0)}),this.add(m,!1,!1),this.main.add(this.rbox(2.2,2.6,1.2,.3),t-s*.3,e,n-r*.3,this.theme.hub,0,Math.atan2(s,r),0),this.updaters.push(_=>{let M=u(_);y.scale.y=Math.max(.01,M+.2),y.position.z=(M+.2)/2,p.position.z=M+.5}),d}ferris(t,e,n,s,r,o){let a=f=>f*Math.PI*2/r;for(let f=0;f<r;f++)this.mover(t,e-s,n,5,5,u=>{let d=o*u+a(f);return[0,s*(1-Math.cos(d)),s*Math.sin(d)]},{h:.7,color:this.theme.plat[f%this.theme.plat.length],pad:!0});if(this.headless)return;let l=new yt;l.position.set(t,e,n);let c=this.mat("#ffffff",{rough:.35});for(let f of[-1,1]){let u=new k(new Pe(s,.28,8,56),c);u.rotation.y=Math.PI/2,u.position.x=f*3.2,l.add(u)}for(let f=0;f<4;f++)for(let u of[-1,1]){let d=new k(new gt(.12,.12,s*2,6),this.mat(this.theme.hazard));d.rotation.x=f*Math.PI/4,d.position.x=u*3.2,l.add(d)}let h=new k(new gt(.9,.9,7.4,14),this.mat(this.theme.hub));h.rotation.z=Math.PI/2,l.add(h),this.add(l,!0,!1);for(let f of[-1,1])for(let u of[-1,1])this.main.add(this.rbox(.7,e+1,.7,.2),t+f*4.4,(e-1)/2,n+u*s*.55,this.theme.hub,0,0,0,1,1,1);this.updaters.push(f=>{l.rotation.x=-(o*f)})}pirate(t,e,n,s,r,o=.1){let a=o+n;if(this.mover(t,o,e,10,5,c=>{let h=s*Math.sin(2*Math.PI*c/r);return[0,n*(1-Math.cos(h)),n*Math.sin(h)]},{h:.9,color:this.theme.hazard,stripes:!0,pad:!0}),this.headless)return;for(let c of[-1,1])this.main.add(this.rbox(.8,a+2,.8,.2),t+c*6.2,(a+2)/2-.5,e+2.2,this.theme.hub,0,0,.12*c),this.main.add(this.rbox(.8,a+2,.8,.2),t+c*6.2,(a+2)/2-.5,e-2.2,this.theme.hub,0,0,.12*c);this.main.add(this.rbox(14.5,.9,.9,.2),t,a+.4,e,this.theme.accent);let l=new yt;l.position.set(t,a,e);for(let c of[-1,1]){let h=new k(new gt(.16,.16,n,8),this.mat("#ffffff"));h.position.set(c*4.2,-n/2,0),l.add(h)}this.add(l,!0,!1),this.updaters.push(c=>{l.rotation.x=-s*Math.sin(2*Math.PI*c/r)})}dropTower(t,e,n,s=13){let r=o=>{let a=(o%s+s)%s;if(a<1)return 0;if(a<5.5){let l=(a-1)/4.5;return n*(l*l*(3-2*l))}if(a<8.5)return n;if(a<9.4){let l=(a-8.5)/.9;return n*(1-l*l)}return 0};if(this.mover(t,.1,e,6,6,o=>[0,r(o),0],{h:.9,color:this.theme.accent,stripes:!0,pad:!0}),!this.headless){for(let o of[-1,1])for(let a of[-1,1])this.main.add(this.rbox(.7,n+5,.7,.2),t+o*3.6,(n+5)/2-.5,e+a*3.6,"#ffffff");this.main.add(this.rbox(8.2,.8,8.2,.2),t,n+4.6,e,this.theme.hazard),this.glow.add(new ue(.7,10,8),t,n+5.6,e,"#ffffff")}}orbit(t,e,n,s,r,o){for(let a=0;a<r;a++){let l=a*Math.PI*2/r;this.mover(t+n,s,e,4.4,4.4,c=>{let h=o*c+l;return[n*Math.cos(h)-n,.7*Math.sin(c*1.3+l),n*Math.sin(h)]},{h:.8,color:this.theme.plat[a%this.theme.plat.length],pad:!0})}this.headless||(this.main.add(new gt(.7,.9,s+5,10),t,(s+5)/2-.4,e,this.theme.hub),this.main.add(new be(2.4,2.2,14),t,s+6,e,this.theme.hazard),this.glow.add(new Pe(n,.12,6,48),t,s-.5,e,"#ffffff",Math.PI/2))}cannon(t,e,n,s){if(this.disc(t,0,e,2.4,{bounce:n,push:s,color:this.theme.hazard}),this.headless)return;let r=s[1]<0?-1:1;this.main.add(new gt(1,1.35,5.5,14),t,2.4,e-r*2.8,this.theme.hub,r*.93,0,0),this.main.add(new Pe(1.1,.2,8,18),t,4.4,e-r*.5,this.theme.accent,Math.PI/2-r*.64,0,0)}flagShuttle(t,e,n,s,r,o,a,l,c,h={}){var L,D;let f=R=>-s*(.5-.5*Math.cos(2*Math.PI*R/r+o)),u=r/4,d=r/2,m=(L=h.slabZ)!=null?L:3,y=R=>((R-u+d/2)%d+d)%d-d/2,p=R=>{let C=y(R),z=11,F=4.2,K=.35;return C<-5?z:C<-4.4?z+(F-z)*((C+5)/.6):C<-.4?F:C<-.15?F+(K-F)*((C+.4)/.25):C<.6?K:C<1.4?K+(F-K)*((C-.6)/.8):F+(z-F)*Math.min(1,(C-1.4)/.6)},g=this.mover(t,e,n,a,l,R=>[0,0,f(R)],{h:.8,color:(D=h.color)!=null?D:"#f4efe6",pad:!1}),E={type:"blade",test:(R,C,z)=>{let F=y(C);if(F<-.3||F>.25)return!1;let K=n+f(C),V=R.x-t,J=R.z-K;if(Math.abs(V)>a/2+.3||Math.abs(J)>m+.4||R.y>e+3.2||R.y+1.55<e)return!1;z.nx=(Math.sign(V)||1)*.25,z.nz=Math.sign(J)||1;let Z=Math.hypot(z.nx,z.nz);return z.nx/=Z,z.nz/=Z,z.pow=15,!0}};if(this.hazards.push(E),this.shuttles=this.shuttles||[],this.shuttles.push({cx:t,top:e,cz0:n,D:s,T:r,phase:o,w:a,dp:l,pos:f,tau:y,bladeH:p,slabZ:m}),this.headless)return g;let S=new yt;this.add(S);let x=new k(new qe(a-1.2,(a-1.2)*.667),new ae({map:qo(c),toneMapped:!1}));x.rotation.x=-Math.PI/2,x.position.y=.06,S.add(x);let _=new ae({color:"#1e6bff",transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}),M=new yt;M.position.y=.1,[[0,0,2.6],[1.9,1.3,1.1],[-2,1.5,.9],[1.4,-1.9,1],[-1.6,-1.6,.8],[.2,2.6,.7]].forEach(([R,C,z])=>{let F=new k(new Ii(z,18),_);F.rotation.x=-Math.PI/2,F.position.set(R,0,C),M.add(F)}),S.add(M);for(let R of[-1,1]){let C=new k(this.rbox(.6,12.5,.6,.15),this.mat(this.theme.hub));C.position.set(R*(a/2+.1),6.2,0),S.add(C)}let w=new k(this.rbox(a+1.2,.7,.8,.15),this.mat(this.theme.hub));w.position.y=12.6,S.add(w);let v=new yt,b=new k(this.rbox(a-.6,.5,m*2,.1),this.mat("#c9d3df",{rough:.2}));v.add(b);for(let R=0;R<8;R++){let C=new k(new be(.55,.9,4),this.mat("#eef3f8",{rough:.15}));C.rotation.x=Math.PI,C.position.set(-(a-1.6)/2+R*((a-1.6)/7),-.65,0),v.add(C)}let A=new k(new gt(.15,.15,12,6),this.mat("#8a8f99"));A.position.y=6,v.add(A);let P=new k(new qe(a-.6,m*2),new ae({color:"#ff3d3d",transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}));return P.rotation.x=-Math.PI/2,P.position.y=.09,S.add(P),S.add(v),this.updaters.push(R=>{let C=f(R);S.position.set(t,e+.4,n+C);let z=p(R),F=y(R);v.position.y=z+.5+(F>-1.2&&F<-.4?Math.sin(R*40)*.06:0),P.material.opacity=F>-4.4&&F<-.1?.18+.12*Math.sin(R*12):0,_.opacity=F>-.15&&F<3.4?Math.min(.85,(3.4-F)/3):0}),g}fan(t,e,n,s,r,o,a,l){let c={x0:t,x1:e,z0:n,z1:s,y0:r,y1:o,ax:a,az:l};if(this.winds.push(c),this.headless)return c;let h=(t+e)/2,f=(n+s)/2,u=Math.sign(a)||0,d=Math.sign(l)||0,m=u?u>0?t-.8:e+.8:h,y=d?d>0?n-.8:s+.8:f,p=r+2.2;this.main.add(new gt(.3,.45,9.4,8),m,r-3.1,y,this.theme.hub);let g=new yt;g.position.set(m,p,y),g.rotation.y=u?u>0?Math.PI/2:-Math.PI/2:d>0?0:Math.PI;let E=new k(new Pe(1.6,.18,8,28),this.mat(this.theme.hazard));g.add(E);let S=new k(new gt(.4,.4,.5,12),this.mat("#ffffff"));S.rotation.x=Math.PI/2,g.add(S);let x=new yt;for(let v=0;v<4;v++){let b=new k(this.rbox(.6,1.4,.1,.04),this.mat(v%2?"#ffffff":this.theme.accent));b.position.y=.9;let A=new yt;A.rotation.z=v*Math.PI/2,A.add(b),x.add(A)}g.add(x),this.add(g);let _=new ae({color:"#ffffff",transparent:!0,opacity:.5,depthWrite:!1,toneMapped:!1}),M=[],w=Math.abs(u)?e-t:s-n;for(let v=0;v<7;v++){let b=new k(new jt(u?2.2:.07,.07,u?.07:2.2),_);this.group.add(b),M.push({m:b,k:v/7,o:v*.37%1})}return this.updaters.push(v=>{x.rotation.z=v*16;for(let b of M){let A=(b.k+v*.55)%1,P=A*w;b.m.position.set(u?u>0?t+P:e-P:t+(e-t)*b.o,r+.8+b.o*7%1*(o-r-1.2),d?d>0?n+P:s-P:n+(s-n)*b.o)}}),c}swing(t,e,n,s,r,o,a=0,l){let c={x:t,y:e,z:n,len:s,amp:r,om:2*Math.PI/o,ph:a};if(this.swings.push(c),this.headless)return c;let h=l!=null?l:this.theme.hazard,f=3;for(let p of[-1,1])this.main.add(this.rbox(.8,e+1,.8,.2),t+p*f,(e-1)/2+.5,n,this.theme.hub);this.main.add(this.rbox(f*2+.8,.8,.8,.2),t,e+.4,n,this.theme.hub),this.glow.add(new ue(.35,10,8),t-f,e+1.2,n,"#ffffff"),this.glow.add(new ue(.35,10,8),t+f,e+1.2,n,"#ffffff");let u=new yt;u.position.set(t,e,n);let d=new k(new gt(.11,.11,s,6),this.mat("#fff2c4"));d.position.y=-s/2,u.add(d);let m=new k(new gt(.3,.3,3,12),this.mat("#ffd23f",{rough:.3}));m.rotation.z=Math.PI/2,m.position.y=-s,u.add(m);for(let p of[-1,1]){let g=new k(new ue(.3,10,8),this.mat("#ffffff"));g.position.set(p*1.5,-s,0),u.add(g)}let y=new k(new Pe(.28,.07,6,16),this.mat("#ffd23f"));return y.position.y=-s+0,y.rotation.y=Math.PI/2,u.add(y),this.add(u),c.mesh=u,this.updaters.push(p=>{u.rotation.x=-this.swingAngle(c,p)}),c}swingAngle(t,e){return t.amp*Math.sin(t.om*e+t.ph)}swingTip(t,e,n={}){let s=this.swingAngle(t,e),r=t.amp*t.om*Math.cos(t.om*e+t.ph);return n.x=t.x,n.y=t.y-t.len*Math.cos(s),n.z=t.z+t.len*Math.sin(s),n.vz=t.len*r*Math.cos(s),n.vy=t.len*r*Math.sin(s),n}doorWall(t,e,n,s,r,o,a={}){var u,d;let l=(u=a.h)!=null?u:4.2,c=s/r,h=(d=a.colors)!=null?d:["#ff6b9d","#ffd23f","#4cc9f0","#80ed99","#ff9f1c","#b58cff","#ff7a7a"],f=[];for(let m=0;m<r;m++){let y=t-s/2+c*(m+.5),p=o[m]?this.addSolid(y-c/2+.05,e,n-.4,y+c/2-.05,e+l,n+.4,{name:"fakedoor"}):null,g={x:y,z:n,i:m,fake:!!o[m],solid:p,open:0,mesh:null};if(!this.headless){let E=new yt;E.position.set(y-c/2+.05,e,n);let S=new k(this.rbox(c-.1,l,.5,.12),this.mat(h[m%h.length],{rough:.35}));S.position.set((c-.1)/2,l/2,0),E.add(S);let x=new k(new ue(.2,8,6),this.mat("#ffffff"));x.position.set(c-.5,l*.45,.35),E.add(x);let _=new k(this.rbox(c-.5,.35,.56,.05),this.mat("#ffffff"));_.position.set((c-.1)/2,l*.82,0),E.add(_),this.add(E),g.mesh=E}f.push(g)}return this.headless||(this.main.add(this.rbox(.9,l+1.2,1,.2),t-s/2-.45,e+(l+1.2)/2,n,this.theme.hub),this.main.add(this.rbox(.9,l+1.2,1,.2),t+s/2+.45,e+(l+1.2)/2,n,this.theme.hub),this.main.add(this.rbox(s+1.8,1,1,.2),t,e+l+.5,n,this.theme.hub)),this.doorWalls=this.doorWalls||[],this.doorWalls.push({cx:t,cz:n,w:s,doors:f}),this.updaters.push((m,y)=>{let p=this.nearPlayers||[];for(let g of f){if(!g.mesh)continue;let E=0;if(!g.fake)for(let S of p)Math.abs(S.z-n)<3.2&&Math.abs(S.x-g.x)<c*.9&&(E=1);g.open+=(E-g.open)*Math.min(1,y*9),g.mesh.rotation.y=-g.open*1.45,g.fake}}),f}checkpoint(t,e,n,s=14){let r={x:t,y:e,z:n,w:s,spawn:[t,e,n+1]};return this.checkpoints.push(r),this.headless||this.arch(t,e,n,s,this.theme.accent,!0),r}arch(t,e,n,s,r,o=!1){let a=o?5.2:8.5;this.main.add(this.rbox(.9,a,.9,.25),t-s/2,e+a/2,n,r),this.main.add(this.rbox(.9,a,.9,.25),t+s/2,e+a/2,n,r),this.main.add(this.rbox(s+.9,o?.9:1.6,o?.9:1.4,.25),t,e+a,n,r),this.glow.add(new ue(.42,12,8),t-s/2,e+a+.8,n,"#ffffff"),this.glow.add(new ue(.42,12,8),t+s/2,e+a+.8,n,"#ffffff")}update(t,e){this.time=t;for(let n of this.updaters)n(t,e);for(let n of this.discs)if(n.omega){let s=n.phase+n.omega*t;n.dTheta=n.first?0:s-n.theta,n.theta=s,n.first=!1}}carry(t){let e=t.ground;if(e){if(e.moving)t.x+=e.dx,t.y+=e.dy,t.z+=e.dz;else if(e.kind==="disc"&&e.omega){let n=t.x-e.cx,s=t.z-e.cz,r=e.dTheta,o=Math.cos(r),a=Math.sin(r);t.x=e.cx+n*o+s*a,t.z=e.cz-n*a+s*o,t.yawOff=(t.yawOff||0)+r}}}checkHazards(t,e){for(let n of this.hazards)if(n.test(t,e,this.hitOut))return this.hitOut;return null}finalize(){if(this.headless)return;let t=this.main.build(new Xt({vertexColors:!0,roughness:.4,metalness:.02}));t&&(t.castShadow=!0,t.receiveShadow=!0,this.group.add(t));let e=this.glow.build(new ae({vertexColors:!0,toneMapped:!1}));e&&this.group.add(e)}resolveHorizontal(t){let e=ve.R,n=ve.H;for(let s of this.solids){if(!s.active||s.y1<=t.y+ve.STEP||s.y0>=t.y+n||t.x<s.x0-e||t.x>s.x1+e||t.z<s.z0-e||t.z>s.z1+e)continue;let r=si(t.x,s.x0,s.x1),o=si(t.z,s.z0,s.z1),a=t.x-r,l=t.z-o,c=a*a+l*l;if(c>=e*e)continue;let h,f;if(c>1e-9){let d=Math.sqrt(c),m=e-d;h=a/d,f=l/d,t.x+=h*m,t.z+=f*m}else{let d=t.x-s.x0,m=s.x1-t.x,y=t.z-s.z0,p=s.z1-t.z,g=Math.min(d,m,y,p);g===d?(t.x=s.x0-e,h=-1,f=0):g===m?(t.x=s.x1+e,h=1,f=0):g===y?(t.z=s.z0-e,h=0,f=-1):(t.z=s.z1+e,h=0,f=1)}let u=t.vx*h+t.vz*f;if(u<0&&(t.vx-=u*h,t.vz-=u*f),s.moving){let d=s.dx*h+s.dz*f;d>0&&(t.vx+=h*Math.min(d/.016,8)*.3,t.vz+=f*Math.min(d/.016,8)*.3)}}for(let s of this.discs){if(t.y+n<=s.top-s.th||t.y>=s.top-ve.STEP)continue;let r=t.x-s.cx,o=t.z-s.cz,a=Math.hypot(r,o),l=s.r+e;if(a<l&&a>1e-6){let c=r/a,h=o/a;t.x=s.cx+c*l,t.z=s.cz+h*l;let f=t.vx*c+t.vz*h;f<0&&(t.vx-=f*c,t.vz-=f*h)}}}findGround(t,e,n){let s=ve.EDGE,r=e+ve.STEP,o=n&&t.noSnap<=0?ve.SNAP:0,a=null,l=-1e9;for(let c of this.solids){if(!c.active)continue;let h=c.y1;h>r||h<=l||t.x<c.x0-s||t.x>c.x1+s||t.z<c.z0-s||t.z>c.z1+s||(t.y<=h+1e-4||t.y<=h+o)&&(a=c,l=h)}for(let c of this.ramps){if(t.x<c.x0-s||t.x>c.x1+s||t.z>c.zN+.3||t.z<c.zF-.3)continue;let h=si((c.zN-t.z)/(c.zN-c.zF),0,1),f=c.yN+(c.yF-c.yN)*h;f>r||f<l||(t.y<=f+1e-4||t.y<=f+o)&&(a=c,l=f)}for(let c of this.discs){let h=c.top;if(h>r||h<l)continue;let f=t.x-c.cx,u=t.z-c.cz,d=c.r+s*.8;f*f+u*u>d*d||(t.y<=h+1e-4||t.y<=h+o)&&(a=c,l=h)}return a?{s:a,top:l}:null}hitCeiling(t,e){for(let n of this.solids)if(n.active&&!(e+ve.H>n.y0+.02||t.y+ve.H<=n.y0)&&!(t.x<n.x0||t.x>n.x1||t.z<n.z0||t.z>n.z1))return n;return null}};var dn=16,Jo=7,Le=56,As=-262,ri=-336,vn=-4,$o=-416;function mp(){let i=[],t=[],e=[],n=[],s=[],r=[],o=[];i.push({ax:38,az:ri-7,bx:38,bz:-410,hw:6,y0:0,y1:dn,g:"ramp+"}),i.push({ax:Le,az:$o,bx:Le,bz:vn,hw:Jo,y0:dn,y1:dn,g:"s2"}),i.push({ax:Le,az:vn,bx:-Le,bz:vn,hw:Jo,y0:dn,y1:dn,g:"sx"}),i.push({ax:-Le,az:vn,bx:-Le,bz:$o,hw:Jo,y0:dn,y1:dn,g:"s3"}),t.push({x:47,z:$o,r:15,y:dn,g:"pa"},{x:Le,z:vn,r:12,y:dn,g:"pb"},{x:-Le,z:vn,r:12,y:dn,g:"pc"},{x:-47,z:$o,r:15,y:dn,g:"pd"});let a=(y,p)=>s.push({k:"barrel",x:y,z:p,r:1.3}),l=(y,p,g)=>{for(let E=p;E<=g+.01;E+=2.4)s.push({k:"block",x:y,z:E,r:1.2})},c=(y,p,g=7)=>{n.push({x:y,z:p,r:g,y:dn})},h=(y,p)=>e.push({x:y,z:p,r:4,y:dn}),f=-Le,u=2.2;h(Le,-396),a(Le-u,-385),a(Le+u,-375),a(Le-u,-365),a(Le+u,-355),h(Le,-345),l(Le-3.2,-300,-292),l(Le+3.2,-284,-276),h(Le,-255),c(Le,-235),h(Le,-190),a(Le+u,-150),a(Le-u,-140),a(Le+u,-130),h(Le,-100),h(Le,-22),a(36,vn+u),a(26,vn-u),h(15,vn),h(-15,vn),a(-26,vn+u),a(-36,vn-u),h(f,-25),a(f-u,-45),a(f+u,-55),a(f-u,-65),h(f,-128),c(f,-205),l(f-3.2,-250,-242),l(f+3.2,-234,-226),h(f,-190),c(f,-300),h(f,-338),a(f-u,-350),a(f+u,-358),a(f-u,-366),h(f,-388),r.push({x:Le,z:-250,w:8},{x:15,z:vn,w:8},{x:f,z:-185,w:8},{x:f,z:-397,w:8});let d={x:-47,z:$o,r:15},m=[-57,-51,-45,-39].map((y,p)=>({id:4+p,x:y,z:-423,y:dn,yaw:0}));for(let y of[1,-1]){for(let p=-40;p>-405;p-=30)Math.abs(p+26)>20&&Math.abs(p-As)>11&&Math.abs(p-ri)>11&&o.push({x:y*Le-10.2,z:p,kind:"gantry",sd:y,span:10.2});y>0&&o.push({x:38-6.6,z:-380,kind:"col"},{x:38+6.6,z:-380,kind:"col"},{x:38-6.6,z:-362,kind:"col"},{x:38+6.6,z:-362,kind:"col"}),o.push({x:y*Le,z:vn,kind:"plaza"},{x:y*34,z:-421,kind:"plaza"},{x:y*44,z:-404,kind:"plaza"})}return{ground:[],segs:i,plazas:t,boosts:e,slicks:n,defs:s,gates:r,garage:d,racers:m,pillars:o}}function gp(i){let t=i.map(e=>({x:e.x,z:e.z,y:dn,r:e.r,vx:0,vz:0}));return()=>t}function xp(i,t,e,n){let s=i.main,r=i.glow,o=i.group,a=dn,l=(x,_,M)=>new jt(x,_,M),c="#2f3342",h="#ff3b3b",f="#ffffff",u=(x,_,M)=>{for(let w of t.segs){if(w.g===M)continue;let v=w.bx-w.ax,b=w.bz-w.az,A=v*v+b*b,P=((x-w.ax)*v+(_-w.az)*b)/A;if(P=Math.max(0,Math.min(1,P)),Math.hypot(x-(w.ax+v*P),_-(w.az+b*P))<w.hw-.5)return!0}for(let w of t.plazas)if(w.g!==M&&Math.hypot(x-w.x,_-w.z)<w.r-.5)return!0;return!1},d=0;for(let x of t.segs){let _=Math.hypot(x.bx-x.ax,x.bz-x.az),M=Math.max(1,Math.ceil(_/12));for(let w=0;w<M;w++,d++){let v=w/M,b=(w+1)/M,A=x.ax+(x.bx-x.ax)*v,P=x.az+(x.bz-x.az)*v,L=x.ax+(x.bx-x.ax)*b,D=x.az+(x.bz-x.az)*b,R=x.y0+(x.y1-x.y0)*v,C=x.y0+(x.y1-x.y0)*b,z=L-A,F=D-P,K=Math.hypot(z,F),V=(A+L)/2,J=(P+D)/2,Z=(R+C)/2,ot=-Math.atan2(F,z),mt=Math.atan2(C-R,K),Yt=-F/K,At=z/K,kt=Math.hypot(K,C-R);s.add(l(kt+.3,.9,x.hw*2),V,Z-.45,J,c,0,ot,mt,1,1,1,"YXZ");for(let U of[-1,1]){let H=V+Yt*U*(x.hw-.3),rt=J+At*U*(x.hw-.3);u(H,rt,x.g)||(s.add(l(kt+.05,1,.55),H,Z+.5,rt,(d+(U>0?1:0))%2?h:f,0,ot,mt,1,1,1,"YXZ"),r.add(l(kt+.05,.12,.2),H-Yt*U*.1,Z+1.1,rt-At*U*.1,"#22f2ff",0,ot,mt,1,1,1,"YXZ"))}d%2===0&&!u(V,J,x.g)&&r.add(l(Math.min(kt,5)*.55,.04,.3),V,Z+.04,J,"#ffe14a",0,ot,mt,1,1,1,"YXZ")}}for(let x of t.plazas){s.add(new gt(x.r,x.r,.9,40),x.x,x.y-.45,x.z,c);for(let _=0;_<36;_++){let M=_/36*Math.PI*2,w=x.x+Math.cos(M)*(x.r-.3),v=x.z+Math.sin(M)*(x.r-.3);u(w,v,x.g)||s.add(l(2.4,1,.55),w,x.y+.5,v,_%2?h:f,0,-M+Math.PI/2,0)}}for(let x of t.pillars)if(x.kind==="gantry"){for(let _ of[-1,1])s.add(new gt(.55,.7,a-.9,10),x.x+(_>0?2*x.span:0),(a-.9)/2,x.z,"#9aa3b8");s.add(l(2*x.span+1.4,.9,1.4),x.x+x.span,a-1.35,x.z,"#7b84a0")}else x.kind==="col"?s.add(new gt(.5,.65,a*.85,10),x.x,a*.42,x.z,"#9aa3b8"):s.add(new gt(1.1,1.5,a-.9,12),x.x,(a-.9)/2,x.z,"#9aa3b8");for(let x of t.boosts){s.add(l(10,.07,8),x.x,x.y+.04,x.z,"#ff9f1c");for(let _=0;_<3;_++)s.add(new be(1.5,2,3),x.x,x.y+.1,x.z+2-_*2,"#fff3b0",0,Math.PI,0)}let m=new Ni;for(let x of t.slicks)m.add(new gt(x.r,x.r,.05,28),x.x,x.y+.04,x.z,"#1c1030"),m.add(new gt(x.r*.62,x.r*.62,.03,24),x.x,x.y+.07,x.z,"#3a1f66");for(let x of t.defs)x.k==="barrel"&&(m.add(new gt(x.r*.85,x.r*.85,1.5,14),x.x,a+.75,x.z,"#ff7a1a"),m.add(new gt(x.r*.88,x.r*.88,.28,14),x.x,a+.95,x.z,"#ffffff")),x.k==="block"&&(m.add(l(x.r*2,1.3,x.r*2),x.x,a+.65,x.z,"#aeb4c6"),m.add(l(x.r*2.02,.2,x.r*.7),x.x,a+1.32,x.z,"#ffd23f"));let y=m.build(new Xt({vertexColors:!0,roughness:.5}));y&&(y.castShadow=!0,o.add(y),i.skyObst=y);let p=(x,_,M,w,v,b,A,P)=>{let L=Xe(x,_,M,w);return L.position.set(v,b,A),L.rotation.y=P,o.add(L),L},g={bg:["#22c55e","#0b7a3a"],fg:"#ffffff",stroke:"#053b1c",border:"#ffd23f"};t.gates.forEach((x,_)=>{let M=_===1,w=_===t.gates.length-1;for(let A of[-1,1]){let P=M?x.x:x.x+A*(Jo-.3),L=M?vn+A*(Jo-.3):x.z;s.add(l(.7,7,.7),P,a+3.5,L,"#2b1c6b")}let v=x.x,b=M?vn:x.z;p(w?"FINISH - RACERS UNLOCKED!":`SKY GATE ${_+1}`,w?15:9,w?2.6:2,w?{bg:["#e0001f","#8f0014"],fg:"#ffffff",stroke:"#33000a",border:"#ffd23f"}:g,v,a+7.4,b,M?Math.PI/2:0)});let E={bg:["#ff9f1c","#e0601a"],fg:"#ffffff",stroke:"#4a1c00",border:"#ffffff"};for(let x of[-1,1])s.add(l(.8,8,.8),38+x*7.2,4,ri-12,"#2b1c6b");p("SKY SPEEDWAY \u25B2  WIN A RACER",17,3.2,E,38,8.8,ri-12,0),p("SKY SPEEDWAY \u2192",14,3.2,E,Le,5.4,ri+20,0);let S=t.garage;for(let x of[-1,1])s.add(l(.8,9,.8),S.x+x*12,a+4.5,S.z-9,"#2b1c6b");p("RACER GARAGE",24,4.6,{bg:["#e0001f","#8f0014"],fg:"#ffffff",stroke:"#33000a",border:"#ffd23f"},S.x,a+10.2,S.z-9,0);for(let x of t.racers)s.add(l(5.2,.07,6.8),x.x,a+.03,x.z,"#e0001f")}var oi={HX:90,ZS:12,ZN:-228},Re={x:52,z:-110,x0:33,x1:71,z0:-176,z1:-76,summitY:15,sx:52,sz:-165},rn={lion:{name:"LION",walk:3,run:9,aggro:22,hp:4,r:1.5,ride:1.9,seat:1.65,big:1,sound:"ROAR!"},leopard:{name:"LEOPARD",walk:3.4,run:11,aggro:22,hp:4,r:1.3,ride:2.2,seat:1.45,big:0,sound:"GRRR!"},elephant:{name:"ELEPHANT",walk:2.4,run:6,aggro:18,hp:6,r:2.3,ride:1.35,seat:3.5,big:1,sound:"TOOOT!"},horse:{name:"HORSE",walk:3.2,run:11.5,aggro:15,hp:3,r:1.5,ride:2.3,seat:2.05,big:0,sound:"NEIGH!"},coyote:{name:"COYOTE",walk:3.2,run:9.5,aggro:24,hp:5,r:1.2,ride:2,seat:1.35,big:0,sound:"YIP!"},boar:{name:"WILD BOAR",walk:3,run:9,aggro:24,hp:6,r:1.3,ride:1.9,seat:1.4,big:0,sound:"OINK!"},hyena:{name:"HYENA",walk:3.4,run:11,aggro:24,hp:7,r:1.3,ride:2.2,seat:1.4,big:0,sound:"HAHA!"},bear:{name:"BEAR",walk:2.8,run:8.5,aggro:24,hp:8,r:2,ride:1.6,seat:2.6,big:1,sound:"GROWL!"},gorilla:{name:"GORILLA",walk:3,run:9,aggro:24,hp:9,r:2,ride:1.7,seat:2.7,big:1,sound:"OOH OOH!"},dino:{name:"DINOSAUR",walk:2.6,run:8,aggro:0,hp:6,r:2.7,ride:1.75,seat:3.35,big:1,sound:"RAWR!"}},yc=[{id:0,kind:"lion",x:-50,z:-70},{id:1,kind:"leopard",x:-28,z:-160},{id:2,kind:"elephant",x:15,z:-185},{id:3,kind:"horse",x:-62,z:-115},{id:4,kind:"dino",x:Re.sx,z:Re.sz,y:Re.summitY}],Ee={IDLE:0,WALK:1,CHASE:2,ATTACK:3,STAGGER:4,TIED:5,PET:6,RIDDEN:7,HIDDEN:8},vc={defs:yc};function n_(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}var gc=null;function _c(){if(gc)return gc;let i=n_(20260601),t=[];for(let e=0;e<6e3&&t.length<72;e++){let n=-84+i()*168,s=6-i()*226;Math.hypot(n,s)<17||n>Re.x0-5&&n<Re.x1+5&&s>Re.z0-5&&s<Re.z1+5||t.some(r=>Math.hypot(r.x-n,r.z-s)<9)||t.push({x:n,z:s,r:1.25,s:.85+i()*.7,k:Math.floor(i()*3)})}return gc={trees:t,hill:Re},gc}var Ko=(i,t,e=0)=>i>Re.x0-e&&i<Re.x1+e&&t>Re.z0-e&&t<Re.z1+e;function vp(i=yc){return i.map(t=>({id:t.id,kind:t.kind,x:t.x,y:t.y||0,z:t.z,yaw:Math.PI,vx:0,vz:0,st:t.hidden?Ee.HIDDEN:t.kind==="dino"?Ee.TIED:Ee.IDLE,bounds:t.bounds||null,hp:rn[t.kind].hp,owner:0,rider:0,tx:t.x,tz:t.z,wait:1+Math.random()*3,cool:1,wind:0,stagger:0,target:0,home:{x:t.x,z:t.z}}))}function Sf(i,t,e,n){let s=i.bounds,r=s?s.x0+e:-(oi.HX-e-1),o=s?s.x1-e:oi.HX-e-1,a=s?s.z0+e:oi.ZN+e+1,l=s?s.z1-e:oi.ZS-e-1;i.x=Math.max(r,Math.min(o,i.x)),i.z=Math.max(a,Math.min(l,i.z));for(let c of t.trees){let h=i.x-c.x,f=i.z-c.z,u=Math.hypot(h,f),d=c.r+e*.6;if(u<d){let m=u>1e-4?d/u:1;i.x=c.x+(u>1e-4?h*m:d),i.z=c.z+(u>1e-4?f*m:0)}}if(!n&&!s&&Ko(i.x,i.z,e*.5)){let c=i.x-(Re.x0-e*.5),h=Re.x1+e*.5-i.x,f=i.z-(Re.z0-e*.5),u=Re.z1+e*.5-i.z,d=Math.min(c,h,f,u);d===c?i.x=Re.x0-e*.5:d===h?i.x=Re.x1+e*.5:d===f?i.z=Re.z0-e*.5:i.z=Re.z1+e*.5}}function yp(i,t){for(let e=0;e<12;e++){let n=i.bounds,s=n?1:90,r=n?n.x0+2+Math.random()*(n.x1-n.x0-4):i.home.x+(Math.random()-.5)*s,o=n?n.z0+2+Math.random()*(n.z1-n.z0-4):i.home.z+(Math.random()-.5)*s;if(!(!n&&(Math.abs(r)>oi.HX-8||o>oi.ZS-8||o<oi.ZN+8||Ko(r,o,6)))&&!t.trees.some(a=>Math.hypot(a.x-r,a.z-o)<3.5))return[r,o]}return[i.home.x,i.home.z]}function xc(i,t,e,n,s){let r=t-i.x,o=e-i.z,a=Math.hypot(r,o);if(a<.05)return a;let c=Math.atan2(r,o)-i.yaw;c=Math.atan2(Math.sin(c),Math.cos(c)),i.yaw+=c*(1-Math.exp(-7*s));let h=Math.min(n,a/Math.max(s,.001)),f=Math.max(.15,1-Math.abs(c)/2.2);return i.vx=Math.sin(i.yaw)*h*f,i.vz=Math.cos(i.yaw)*h*f,i.x+=i.vx*s,i.z+=i.vz*s,a}function _p(i,t,e,n,s=[]){for(let r of i){let o=rn[r.kind],a=r.owner?e.find(h=>h.id===r.owner):null;if(r.vx=r.vz=0,r.st===Ee.HIDDEN)continue;if(r.rider){let h=e.find(f=>f.id===r.rider);if(!h)r.rider=0;else{r.x=h.x,r.y=h.y,r.z=h.z,r.yaw=h.r,r.st=Ee.RIDDEN;continue}}if(r.cool>0&&(r.cool-=t),r.stagger>0){r.stagger-=t,r.x+=(r.kvx||0)*t,r.z+=(r.kvz||0)*t,r.kvx*=.9,r.kvz*=.9,Sf(r,n,o.r,r.kind==="dino"),r.st=Ee.STAGGER;continue}if(r.kind==="dino"&&!r.owner){r.st=Ee.TIED;continue}if(r.owner){if(r.st=Ee.PET,a&&r.y<1.5&&a.y<2.5&&!a.mounted){let h=Math.hypot(a.x-r.x,a.z-r.z);n.petBounds&&(r.bounds=n.petBounds),h>(n.petBounds?16:60)?(r.x=a.x-3,r.z=a.z+3):h>5.5?(xc(r,a.x,a.z,Math.min(o.run,3+h*.9),t),r.st=Ee.WALK):h<3&&(xc(r,r.x+(r.x-a.x),r.z+(r.z-a.z),o.walk,t),r.st=Ee.WALK),Sf(r,n,o.r,!1)}r.y<1.5&&(r.y=0);continue}let l=null,c=o.aggro;for(let h of e){if(h.mounted||h.y>2.5||r.bounds&&(h.x<r.bounds.x0-1||h.x>r.bounds.x1+1||h.z<r.bounds.z0-1||h.z>r.bounds.z1+1))continue;let f=Math.hypot(h.x-r.x,h.z-r.z);f<c&&(c=f,l=h)}if(r.wind>0){if(r.wind-=t,r.st=Ee.ATTACK,r.wind<=0){for(let h of e){if(h.mounted||h.y>2.5)continue;let f=h.x-r.x,u=h.z-r.z,d=Math.hypot(f,u);if(d<o.r+2.6){let m=d||1;s.push({k:"bite",id:r.id,pid:h.id,nx:f/m,nz:u/m,big:o.big})}}r.cool=2.6,r.recover=.7}continue}if(r.recover>0){r.recover-=t,r.st=Ee.IDLE;continue}l?(r.st=Ee.CHASE,xc(r,l.x,l.z,o.run,t)<o.r+2&&r.cool<=0&&(r.wind=.5)):r.wait>0?(r.wait-=t,r.st=Ee.IDLE):(r.st=Ee.WALK,xc(r,r.tx,r.tz,o.walk,t)<1.2&&(r.wait=2+Math.random()*5,[r.tx,r.tz]=yp(r,n))),Sf(r,n,o.r,!1),r.y=0,r.st===Ee.WALK&&Math.hypot(r.vx,r.vz)<.2&&([r.tx,r.tz]=yp(r,n))}return s}function Mp(i,t,e,n,s=[]){if(i.owner||i.rider||i.st===Ee.HIDDEN)return s;let r=rn[i.kind];i.hp-=1,i.stagger=.7,i.wind=0,i.cool=1.4;let o=i.x-e,a=i.z-n,l=Math.hypot(o,a)||1,c=i.kind==="dino"?0:6;return i.kvx=o/l*c,i.kvz=a/l*c,s.push({k:"hit",id:i.id,hp:i.hp}),i.hp<=0&&(i.hp=r.hp,i.owner=t,i.st=Ee.PET,s.push({k:"tame",id:i.id,pid:t})),s}var Mc=[[-7.5,3.5],[7.5,3.5],[0,-8.5]],i_="\u0639\u06A9\u0631\u0645\u06C1";function Ep(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function bp(i,t,e){let n=_c(),s=oi.HX,r=oi.ZS,o=oi.ZN,a=r-o,l=!i.headless,c=Ep(9137),h=R=>R[Math.floor(c()*R.length)],f=i.main;e.startArch=99,e.jungle=!0,e.spawn={x:0,y:0,z:1.5},i.checkpoints.push({x:0,y:0,z:6,w:14,spawn:[0,0,3]}),i.platform(0,0,(r+o)/2,s*2+4,a+4,{h:2,color:"#5cbf4a",pad:!1});let u=["#2f8a3c","#3fa24a","#267a34","#4bb35a"];for(let R=r+2,C=0;R>o-4;R-=14,C++)for(let z of[-1,1])i.platform(z*(s+1),26,R-7,2,14,{h:26,color:u[(C+(z>0?2:0))%4],pad:!1});i.platform(0,26,r+1,s*2+4,2,{h:26,color:u[1],pad:!1}),i.platform(0,26,o-1,s*2+4,2,{h:26,color:u[3],pad:!1});let d=Re.x,m=Re.z,y=["#8a6a47","#7a5a3a","#6e5236"],p="#63c24c";i.platform(d,5,m-14,32,48,{h:5,color:y[0],padColor:p}),i.platform(d,10,m-37,24,26,{h:10,color:y[1],padColor:p}),i.platform(d,15,m-55,18,18,{h:15,color:y[2],padColor:p}),i.ramp(d-8,m+30,0,m+10,5,9,{color:"#9a7a52",padColor:"#7bd35c"}),i.ramp(d+8,m-4,5,m-24,10,9,{color:"#9a7a52",padColor:"#7bd35c"}),i.ramp(d-6,m-30,10,m-46,15,9,{color:"#9a7a52",padColor:"#7bd35c"});for(let R of n.trees)i.addSolid(R.x-.85*R.s,0,R.z-.85*R.s,R.x+.85*R.s,7*R.s,R.z+.85*R.s);let g=(R,C,z=4)=>!(Math.abs(R)>s-6||C>r-6||C<o+6||Ko(R,C,6)||Math.hypot(R,C)<11||n.trees.some(F=>Math.hypot(F.x-R,F.z-C)<z+F.r)),E=(R,C,z=800)=>{let F=[];for(let K=0;K<z&&F.length<R;K++){let V=(c()-.5)*2*(s-8),J=r-8-c()*(a-16);g(V,J,C)&&!F.some(Z=>Math.hypot(Z[0]-V,Z[1]-J)<C*1.6)&&F.push([V,J])}return F},S=E(7,5);if(S.forEach(([R,C],z)=>i.disc(R,0,C,2.8,{bounce:21+z%3*2,color:h(["#ff5d73","#ff8a3d","#ffd23f","#ff6bd0"])})),e.shrooms=S,!l)return;let x=(R,C=8,z=6)=>new ue(R,C,z),_=(R,C,z,F=8)=>new gt(R,C,z,F),M=(R,C,z=8)=>new be(R,C,z),w=["#2e9b3f","#3fb14c","#58c45a","#27863a","#7ccf5a"],v=x(1,5,4),b=(R,C,z,F)=>f.add(v,R,C,z,h(w),c()*3,c()*3,0,F?.9+c()*.6:2+c()*1.5,1.4+c()*1,F?2+c()*1.5:.9+c()*.6);for(let R=2.2;R<26;R+=5.4){for(let C=r-1;C>o+1;C-=4.2)b(-s+.1,R+c()*1.6,C+c(),!0),b(s-.1,R+c()*1.6,C+c(),!0);for(let C=-s+4;C<s-3;C+=4.2)b(C+c(),R+c()*1.6,o+.1,!1),b(C+c(),R+c()*1.6,r-.1,!1)}for(let R=r;R>o;R-=3.4)f.add(M(1.1,2.4,5),-s,26.6,R,"#58c45a"),f.add(M(1.1,2.4,5),s,26.6,R,"#58c45a");for(let R=-s;R<s;R+=3.4)f.add(M(1.1,2.4,5),R,26.6,o,"#58c45a"),f.add(M(1.1,2.4,5),R,26.6,r,"#58c45a");{let R=Ep(Math.floor(Date.now()/1e3)%97+1),C=[{rot:Math.PI/2,at:F=>[-s+2.2,r-32-F*(a-64)]},{rot:-Math.PI/2,at:F=>[s-2.2,r-32-F*(a-64)]},{rot:0,at:F=>[-60+F*120,o+2.2]},{rot:Math.PI,at:F=>[-60+F*120,r-2.2]}];for(let F=C.length-1;F>0;F--){let K=Math.floor(R()*(F+1));[C[F],C[K]]=[C[K],C[F]]}let z=["u","h","u","h"];C.forEach((F,K)=>{let J=z[K]==="u"?Xe(i_,30,15,{urdu:!0,bg:["#0b6b3a","#01411c"],fg:"#ffffff",stroke:"#00230f",border:"#ffd23f",frame:"#2f6b2a"}):Xe("HARIS",34,13,{bg:["#ff8a1c","#c9400b"],fg:"#ffffff",stroke:"#5a1a00",border:"#ffe27a",frame:"#2f6b2a"}),[Z,ot]=F.at(.12+R()*.76);J.position.set(Z,10.5+R()*5,ot),J.rotation.y=F.rot,i.group.add(J)})}for(let R of n.trees){let C=R.s,z=7*C;f.add(_(.5*C,.8*C,z,7),R.x,z/2,R.z,h(["#7a4b27","#6b4423","#8a5a30"]));for(let F=0;F<4;F++)f.add(M(.35*C,1.3*C,5),R.x+Math.cos(F*1.6)*.8*C,.5,R.z+Math.sin(F*1.6)*.8*C,"#6b4423",0,0,Math.cos(F)*.8);if(R.k===0)f.add(x(3.6*C),R.x,z+2.2*C,R.z,h(w)),f.add(x(2.6*C),R.x+2.4*C,z+.6*C,R.z+.6*C,h(w)),f.add(x(2.5*C),R.x-2.2*C,z+.9*C,R.z-.8*C,h(w));else if(R.k===1)for(let F=0;F<4;F++)f.add(M((3.6-F*.7)*C,3.4*C,8),R.x,z*.62+F*2.1*C,R.z,F%2?"#2f8f46":"#27803c");else{f.add(_(.3*C,.5*C,3.2*C,6),R.x,z+1.4*C,R.z,"#8a5a30");for(let F=0;F<7;F++){let K=F*.9;f.add(M(.9*C,5.2*C,4),R.x+Math.cos(K)*2.1*C,z+3.4*C,R.z+Math.sin(K)*2.1*C,h(w),Math.sin(K)*1.25,0,-Math.cos(K)*1.25+0*K)}f.add(x(.55*C,6,5),R.x+.5*C,z+2.9*C,R.z,"#7a4b27"),f.add(x(.55*C,6,5),R.x-.4*C,z+2.8*C,R.z+.4*C,"#7a4b27")}}for(let[R,C]of E(60,1.6,2500)){let z=.8+c()*.9;f.add(x(1.2*z,7,5),R,.7*z,C,h(w),0,0,0,1.3,.8,1.1),f.add(x(.9*z,7,5),R+1*z,.6*z,C+.5*z,h(w))}for(let[R,C]of E(240,.7,3e3))f.add(_(.05,.05,.7,4),R,.35,C,"#3a8f3a"),f.add(x(.26,6,4),R,.78,C,h(["#ff5fa8","#ffd23f","#ffffff","#ff7a1a","#b58cff"]));for(let[R,C]of E(34,2.2,1500)){let z=.8+c()*1.5;f.add(x(1,6,5),R,.4*z,C,h(["#8e9097","#7c7f87","#a5a7ad"]),c(),c(),0,1.4*z,.8*z,1*z)}for(let[R,C]of E(14,2.4,1500)){f.add(_(.25,.3,1,6),R,.5,C,"#fff3e0"),f.add(x(.9,8,5),R,1.1,C,"#e8403d",0,0,0,1,.55,1);for(let z=0;z<4;z++)f.add(x(.14,5,4),R+Math.cos(z*1.6)*.45,1.45,C+Math.sin(z*1.6)*.45,"#ffffff")}for(let R=0;R<620;R++){let C=(c()-.5)*2*(s-2),z=r-2-c()*(a-4);Ko(C,z,0)||f.add(M(.16,.7+c()*.5,4),C,.35,z,h(["#3da043","#56b947","#2f8a3c"]),0,c()*3,(c()-.5)*.5)}let A=Re.sx,P=Re.sz,L=Re.summitY;for(let[R,C]of Mc)f.add(_(.28,.34,2.4,7),A+R,L+1.2,P+C,"#6b4423"),f.add(x(.32,6,5),A+R,L+2.45,P+C,"#8a5a30");for(let R=0;R<16;R++){let C=c()*6.28,z=8+c()*5;f.add(x(1,6,5),d+Math.cos(C)*z*1.6,5.5,m-14+Math.sin(C)*z*2.4,h(["#8e9097","#7c7f87"]),c(),c(),0,1.3,.9,1.1)}for(let R=0;R<26;R++){let C=c()*6.28;f.add(M(.7,1.8,5),d+Math.cos(C)*15,5.9+(c()<.3?5:0),m-14+(c()-.5)*40,h(w))}let D=(R,C,z,F,K=16,V=7,J=["#7a4a1e","#5a3412"])=>{let Z=Xe(R,K,V,{bg:J,fg:"#fff3c4",stroke:"#2a1204",border:"#ffd23f",frame:"#3b2410"});Z.position.set(C,3.6+V/2,z),Z.rotation.y=F,i.group.add(Z),f.add(_(.3,.3,4+V/2,6),C-K/2+1,(4+V/2)/2,z,"#5a3412"),f.add(_(.3,.3,4+V/2,6),C+K/2-1,(4+V/2)/2,z,"#5a3412")};D("WELCOME TO THE JUNGLE",0,-14,0,20,5.5),D("BEAT ANIMALS WITH THE BAT = NEW PET!",0,-22,0,24,5),D("DINO HILL  >>>",d-8,m+44,0,16,5.5)}var Ce={HW:11,CELL:4.4,COLS:5,ROWS:[5,6,7,8,9],CH:5,PLAZA:16,BOULDER:4,ARENA:40,GATE:3},Je={MAZE:0,BEAST:1,DRAGON:2,FLY:3,WIN:4},s_=["coyote","boar","hyena","bear","gorilla"],Rs=2.3,Sp=1.2,Ec=null;function zi(){if(Ec)return Ec;let i=-10,t=[];for(let n=0;n<Ce.CH;n++){let s=Ce.ROWS[n],r=i,o=i-s*Ce.CELL;t.push({c:n,rows:s,mz0:r,mz1:o,plazaZ:o-8,boulderZ:o-18,arenaZ0:o-20,arenaZ1:o-60,arenaC:o-40,gateZ:o-61.5,next:o-63,arena:{x0:-Ce.HW+.6,x1:Ce.HW-.6,z0:o-60,z1:o-20}}),i=o-63}let e={z0:i,circlesZ:i-10,cageZ:i-34,dragonZ:i-36,endZ:i-50};return Ec={chapters:t,dr:e,road:{x0:-Ce.HW+.6,x1:Ce.HW-.6,z0:e.endZ+2,z1:12},startZ:8},Ec}var wf=i=>Array.from({length:i},(t,e)=>(e-(i-1)/2)*5.6),wp=()=>({ch:0,ph:Je.MAZE,hold:0,fly:0,occ:[],n:1}),Tp=()=>zi().chapters.map((i,t)=>({id:t,kind:s_[t],x:0,z:i.arenaC,hidden:!0,bounds:i.arena})),Ap=()=>({trees:[],petBounds:zi().road});function r_(i,t){let e=t.chapters[i.id];i.st=0,i.x=0,i.z=e.arenaC,i.y=0,i.tx=0,i.tz=e.arenaC,i.home={x:0,z:e.arenaC},i.wait=.8,i.cool=1.5,i.yaw=0}function o_(i,t,e){return wf(t).map(s=>e.some(r=>r.y<2.5&&Math.hypot(r.x-s,r.z-i)<Rs+.2)?1:0)}function Rp(i,t,e,n,s,r,o=[]){i.n=Math.max(1,s);let a=i.ph===Je.MAZE?r.chapters[i.ch].plazaZ:i.ph===Je.DRAGON?r.dr.circlesZ:null;return a!==null?(i.occ=o_(a,i.n,e),i.occ.every(l=>l)?i.hold+=t:i.hold=0):(i.occ=[],i.hold=0),i.ph===Je.MAZE&&i.hold>=Sp?(i.ph=Je.BEAST,i.hold=0,r_(n[i.ch],r),o.push({k:"boulder",ch:i.ch})):i.ph===Je.BEAST&&n[i.ch].owner?(o.push({k:"gate",ch:i.ch,pid:n[i.ch].owner}),i.ch>=Ce.CH-1?(i.ph=Je.DRAGON,i.ch=Ce.CH):(i.ch++,i.ph=Je.MAZE)):i.ph===Je.DRAGON&&i.hold>=Sp+.4?(i.ph=Je.FLY,i.hold=0,i.fly=0,o.push({k:"cage"})):i.ph===Je.FLY&&(i.fly+=t,i.fly>9&&(i.ph=Je.WIN,o.push({k:"victory"}))),o}var Cp=new Map,a_=i=>{let t=Cp.get(i);return t||(t=new Xt({color:i,roughness:.82,metalness:0}),Cp.set(i,t)),t},wt={sph:(i,t=12,e=9)=>new ue(i,t,e),cyl:(i,t,e,n=8)=>new gt(i,t,e,n),cone:(i,t,e=8)=>new be(i,t,e),box:(i,t,e)=>new jt(i,t,e),cap:(i,t)=>new Zi(i,t,4,10)};function Tt(i,t,e,n=0,s=0,r=0,o={}){let a=new k(t,a_(e));return a.position.set(n,s,r),o.s&&a.scale.set(o.s[0],o.s[1],o.s[2]),o.r&&a.rotation.set(o.r[0],o.r[1],o.r[2]),a.castShadow=!0,i.add(a),a}function Ui(i,t,e,n,s,r=.09){for(let o of[-1,1])Tt(i,wt.sph(r,8,6),"#ffffff",t+o*s,e,n),Tt(i,wt.sph(r*.55,6,5),"#111111",t+o*s,e,n+r*.62)}function as(i,t,e,n,s,r,o,a){let l=new yt;return l.position.set(t,e,n),i.add(l),Tt(l,wt.cyl(s,s*.82,r,7),o,0,-r/2,0),a&&Tt(l,wt.box(s*2.1,s*.9,s*2.3),a,0,-r+s*.3,s*.25),l}function vi(){let i=new yt,t=new yt;return i.add(t),{root:i,inner:t,legs:[],head:null,tail:null}}var Cr={horse(){let i=vi(),t="#8b5a2b",e="#33200f",n=i.inner;Tt(n,wt.cap(.5,1.35),t,0,1.55,0,{r:[Math.PI/2,0,0],s:[.92,1,1]});for(let[o,a,l]of[[-.3,.8,0],[.3,.8,1],[-.3,-.8,2],[.3,-.8,3]])i.legs[l]=as(n,o,1.2,a,.14,1.2,t,e);Tt(n,wt.cyl(.22,.3,1.1,8),t,0,2.15,1.15,{r:[.62,0,0]});let s=i.head=new yt;s.position.set(0,2.55,1.55),n.add(s),Tt(s,wt.box(.38,.44,.95),t,0,-.1,.35,{r:[.4,0,0]}),Tt(s,wt.box(.4,.1,.3),"#f3e6d0",0,-.32,.72,{r:[.4,0,0]});for(let o of[-1,1])Tt(s,wt.cone(.08,.28,5),t,o*.14,.28,-.02);Ui(s,0,.1,.22,.21,.07),Tt(n,wt.box(.1,.9,.3),e,0,2.3,.9,{r:[.62,0,0]});let r=i.tail=new yt;return r.position.set(0,1.9,-1.25),n.add(r),Tt(r,wt.cone(.2,1.3,6),e,0,-.55,0,{r:[Math.PI,0,0]}),r.rotation.x=-.35,i},lion(){let i=vi(),t="#d9a441",e="#8a4a14",n=i.inner;Tt(n,wt.cap(.46,1.1),t,0,1.15,0,{r:[Math.PI/2,0,0]});for(let[o,a,l]of[[-.3,.6,0],[.3,.6,1],[-.3,-.6,2],[.3,-.6,3]])i.legs[l]=as(n,o,.85,a,.17,.85,t,"#a8741f");let s=i.head=new yt;s.position.set(0,1.6,1.15),n.add(s),Tt(s,wt.sph(.78,12,9),e,0,-.05,-.18,{s:[1,1,.78]}),Tt(s,wt.sph(.46,12,9),t,0,0,.25),Tt(s,wt.box(.34,.24,.3),"#efc977",0,-.12,.62),Tt(s,wt.sph(.09,6,5),"#2a1408",0,-.03,.78);for(let o of[-1,1])Tt(s,wt.sph(.13,6,5),t,o*.34,.4,.1);Ui(s,0,.12,.6,.17,.07);let r=i.tail=new yt;return r.position.set(0,1.35,-1),n.add(r),Tt(r,wt.cyl(.06,.06,1.1,5),t,0,-.5,-.1,{r:[.3,0,0]}),Tt(r,wt.sph(.17,7,6),e,0,-1.05,-.28),i},leopard(){let i=vi(),t="#e8b948",e="#2a1a0a",n=i.inner,s=Tt(n,wt.cap(.38,1.35),t,0,1.05,0,{r:[Math.PI/2,0,0]});for(let a=0;a<22;a++){let l=a*2.399%(Math.PI*2),c=-.9+a%11*.18;Tt(n,wt.sph(.09,5,4),e,Math.sin(l)*.37,1.05+Math.cos(l)*.36,c,{s:[1,1,1.3]})}for(let[a,l,c]of[[-.25,.7,0],[.25,.7,1],[-.25,-.7,2],[.25,-.7,3]])i.legs[c]=as(n,a,.78,l,.14,.78,t,"#b88a2a");let r=i.head=new yt;r.position.set(0,1.35,1.2),n.add(r),Tt(r,wt.sph(.34,12,9),t,0,0,.1),Tt(r,wt.box(.24,.16,.28),"#f4dc9c",0,-.08,.42),Tt(r,wt.sph(.07,6,5),"#2a1408",0,0,.58);for(let a of[-1,1])Tt(r,wt.sph(.1,6,5),t,a*.24,.3,0),Tt(r,wt.sph(.04,5,4),e,a*.13,.15,.3);Ui(r,0,.1,.34,.14,.055);let o=i.tail=new yt;return o.position.set(0,1.2,-1.15),n.add(o),Tt(o,wt.cyl(.06,.05,1.5,5),t,0,-.1,-.55,{r:[1.15,0,0]}),Tt(o,wt.sph(.09,5,4),e,0,.5,-.95),Tt(o,wt.cyl(.05,.05,.6,5),t,0,.78,-1.15,{r:[.5,0,0]}),i},elephant(){let i=vi(),t="#8a919c",e="#737b87",n=i.inner;Tt(n,wt.sph(1,14,10),t,0,2.3,0,{s:[1.15,1.2,1.7]});for(let[c,h,f]of[[-.68,1,0],[.68,1,1],[-.68,-1,2],[.68,-1,3]])i.legs[f]=as(n,c,1.6,h,.4,1.6,t,"#d8d2c4");let s=i.head=new yt;s.position.set(0,2.75,1.85),n.add(s),Tt(s,wt.sph(.82,12,9),t,0,0,.2);let r=-.15,o=.95,a=.3;for(let c=0;c<4;c++)Tt(s,wt.cyl(a,a*.8,.62,7),e,0,r,o+c*.1,{r:[.15+c*.1,0,0]}),r-=.55,o+=.1,a*=.8;for(let c of[-1,1])Tt(s,wt.cyl(.95,.95,.09,14),e,c*1,.1,-.2,{r:[0,0,Math.PI/2],s:[1,1,.8]}).rotation.y=c*.35,Tt(s,wt.cone(.13,.95,6),"#f5f0e0",c*.45,-.38,1.05,{r:[1.15,0,0]});Ui(s,0,.3,.88,.4,.09);let l=i.tail=new yt;return l.position.set(0,2.5,-1.7),n.add(l),Tt(l,wt.cyl(.05,.04,1,5),e,0,-.45,-.05),Tt(l,wt.sph(.1,5,4),"#3a3f46",0,-.98,-.05),i},dino(){let i=vi(),t="#4fb04a",e="#d6ee94",n="#ff8a2a",s=i.inner;Tt(s,wt.sph(1,14,10),t,0,2.2,0,{s:[.95,1,1.55]}),Tt(s,wt.sph(.9,12,9),e,0,1.95,.2,{s:[.85,.8,1.45]});for(let[a,l,c]of[[-.62,.45,0],[.62,.45,1],[-.62,-.5,2],[.62,-.5,3]])i.legs[c]=as(s,a,1.5,l,.4,1.5,t,"#2f7a30");let r=i.head=new yt;r.position.set(0,3,1.75),s.add(r),Tt(r,wt.box(.95,.85,1.3),t,0,.1,.55),Tt(r,wt.box(.85,.28,1.2),e,0,-.45,.5);for(let a=0;a<6;a++)for(let l of[-1,1])Tt(r,wt.cone(.06,.2,4),"#ffffff",l*.38,-.28,.05+a*.21,{r:[Math.PI,0,0]});for(let a of[-1,1])Tt(r,wt.sph(.08,5,4),"#1a3a1a",a*.22,.2,1.2),Tt(r,wt.cone(.1,.4,5),n,a*.3,.7,.2);Ui(r,0,.4,.75,.37,.12);for(let a of[-1,1])Tt(s,wt.cyl(.1,.07,.6,5),t,a*.55,2.7,1.1,{r:[-.9,0,a*.3]});let o=i.tail=new yt;o.position.set(0,2.2,-1.4),s.add(o),[[0,0,-.4,.78],[0,.05,-1.2,.6],[0,.12,-1.9,.44],[0,.22,-2.45,.3]].forEach(([a,l,c,h])=>Tt(o,wt.sph(h,9,7),t,a,l,c));for(let a=0;a<6;a++)Tt(s,wt.cone(.2-a*.012,.55,4),n,0,3.05-a*.2,-.9-a*.38);return i}};function Ip(i,t,e,n={}){let s=i.inner,r=n.slope||0;Tt(s,wt.cap(.36,1.25),t,0,1.05+r*.5,0,{r:[Math.PI/2+r,0,0]});for(let[l,c,h,f]of[[-.24,.65,0,.85+r],[.24,.65,1,.85+r],[-.24,-.62,2,.8],[.24,-.62,3,.8]])i.legs[h]=as(s,l,f,c,.12,f,e,"#3a2a1a");let o=i.head=new yt;o.position.set(0,1.4+r*1.1,1.2),s.add(o),Tt(o,wt.sph(.32,10,8),t,0,0,.1),Tt(o,wt.box(.2,.18,.5),e,0,-.08,.55),Tt(o,wt.sph(.07,6,5),"#111111",0,0,.82);for(let l of[-1,1])Tt(o,wt.cone(n.round?.12:.1,.38,4),t,l*.2,.42,-.02);Ui(o,0,.1,.3,.13,.05);let a=i.tail=new yt;return a.position.set(0,1.2,-1.1),s.add(a),Tt(a,wt.cone(.14,.95,5),e,0,-.45,-.1,{r:[Math.PI-.5,0,0]}),i}Cr.coyote=()=>{let i=vi();return Ip(i,"#b59a72","#8a7350"),i};Cr.hyena=()=>{let i=vi(),t=i.inner;Ip(i,"#b79a63","#6b5a35",{slope:.12,round:!0});for(let e=0;e<14;e++)Tt(t,wt.sph(.08,5,4),"#3a2a12",Math.sin(e*2.1)*.34,1.2+Math.cos(e*2.1)*.3,-.8+e%7*.26,{s:[1,1,1.4]});return i};Cr.boar=()=>{let i=vi(),t="#5c4033",e=i.inner;Tt(e,wt.cap(.55,1),t,0,1,0,{r:[Math.PI/2,0,0]});for(let[r,o,a]of[[-.32,.55,0],[.32,.55,1],[-.32,-.55,2],[.32,-.55,3]])i.legs[a]=as(e,r,.6,o,.13,.6,t,"#2a1a10");for(let r=0;r<6;r++)Tt(e,wt.cone(.1,.35,4),"#2a1a10",0,1.62,-.8+r*.32);let n=i.head=new yt;n.position.set(0,1.1,1.1),e.add(n),Tt(n,wt.sph(.42,10,8),t,0,0,.1),Tt(n,wt.cyl(.2,.24,.42,8),"#d9a08c",0,-.05,.55,{r:[Math.PI/2,0,0]});for(let r of[-1,1])Tt(n,wt.cone(.07,.4,5),"#f5f0e0",r*.2,-.12,.62,{r:[-.6,0,r*.4]}),Tt(n,wt.cone(.1,.25,4),t,r*.28,.38,0);Ui(n,0,.16,.38,.19,.06);let s=i.tail=new yt;return s.position.set(0,1.2,-1.05),e.add(s),Tt(s,wt.cyl(.04,.04,.5,4),"#d9a08c",0,-.2,-.05),i};function Pp(i,t,e,n={}){let s=i.inner,r=n.s||1;Tt(s,wt.sph(1,12,9),t,0,1.75*r,0,{s:[.95*r,1*r,1.35*r]});for(let[l,c,h]of[[-.6,.85,0],[.6,.85,1],[-.6,-.8,2],[.6,-.8,3]])i.legs[h]=as(s,l*r,1.2*r,c*r,.3*r,1.2*r,t,"#222222");let o=i.head=new yt;o.position.set(0,2.2*r,1.45*r),s.add(o),Tt(o,wt.sph(.62*r,12,9),t,0,0,.1),Tt(o,wt.sph(.34*r,8,6),e,0,-.14*r,.5*r),Tt(o,wt.sph(.09*r,6,5),"#111111",0,-.02*r,.8*r);for(let l of[-1,1])Tt(o,wt.sph(.2*r,8,6),(n.ears,t),l*.46*r,.5*r,0);Ui(o,0,.18*r,.5*r,.24*r,.08*r),n.brow&&Tt(o,wt.box(.9*r,.14*r,.3*r),"#1a1a1e",0,.34*r,.5*r);let a=i.tail=new yt;return a.position.set(0,1.9*r,-1.4*r),s.add(a),Tt(a,wt.sph(.2*r,6,5),t,0,0,0),i}Cr.bear=()=>Pp(vi(),"#6b4a2f","#d2b48c",{s:1,ears:!0});Cr.gorilla=()=>{let i=vi();return Pp(i,"#2d2d33","#6b5a50",{s:1.05,brow:!0}),Tt(i.inner,wt.sph(.8,10,8),"#3a3a42",0,2,.55,{s:[1,.9,.6]}),i};function Lp(){let i=new yt,t=new yt;i.add(t);let e="#7b3fe4",n="#ffd27a",s="#ff5fa8";Tt(t,wt.sph(1,14,10),e,0,3.4,0,{s:[1.7,1.8,3]}),Tt(t,wt.sph(1,12,9),n,0,2.9,.4,{s:[1.3,1.4,2.6]});for(let[a,l]of[[-1.1,1.4],[1.1,1.4],[-1.1,-1.4],[1.1,-1.4]])Tt(t,wt.cyl(.55,.45,1.8,8),e,a,1,l),Tt(t,wt.box(.9,.35,1.2),"#2f1a66",a,.18,l+.2);for(let a=0;a<4;a++)Tt(t,wt.cyl(.7-a*.06,.8-a*.06,1.2,8),e,0,4.1+a*.8,2.7+a*.65,{r:[.55,0,0]});let r=new yt;r.position.set(0,7.2,5.3),t.add(r),Tt(r,wt.box(1.5,1.2,2),e,0,0,.5),Tt(r,wt.box(1.3,.5,1.8),n,0,-.55,.5);for(let a of[-1,1])Tt(r,wt.cone(.22,1.5,6),"#fff2c4",a*.6,.95,-.2,{r:[-.5,0,a*-.3]}),Ui(r,0,.3,1.3,.5,.2),Tt(r,wt.sph(.1,6,5),"#222222",a*.25,.1,1.5);for(let a=0;a<7;a++)Tt(t,wt.cone(.38-a*.025,.9,4),"#ff8a2a",0,5.2-a*.3,-2.4+a*.72-.3,{r:[0,0,0]});[[-3.4,3.2,1],[-4.9,3,.8],[-6.2,2.9,.6],[-7.4,2.9,.4]].forEach(([a,l,c])=>Tt(t,wt.sph(c,8,6),e,0,l,a)),Tt(t,wt.cone(.7,1.4,4),s,0,2.9,-8.4,{r:[-Math.PI/2,0,0]});let o=[];for(let a of[-1,1]){let l=new yt;l.position.set(a*1.5,4.6,.2),t.add(l),Tt(l,wt.cyl(.18,.12,6.2,6),e,a*3,.4,0,{r:[0,0,Math.PI/2+a*.12]});let c=new ze,h=[0,.3,1.2],f=[a*6.2,.9,.2],u=[a*5.4,-.6,-3.8],d=[a*1.6,-.9,-3.4];c.setAttribute("position",new xe([...h,...f,...u,...h,...u,...d],3)),c.computeVertexNormals();let m=new k(c,new Xt({color:s,roughness:.6,side:$e}));m.castShadow=!0,l.add(m),o.push({g:l,sx:a})}return{root:i,body:t,head:r,wings:o}}function Tf(i,t,e=1){i.wings.forEach(n=>{n.g.rotation.z=-n.sx*Math.sin(t*(3+e*6))*(.25+.35*e)}),i.head.rotation.x=Math.sin(t*1.3)*.08,i.body.position.y=Math.sin(t*1.7)*.05*(1-e*.5)}function Dp(i){let t=Cr[i]();return t.root.traverse(e=>{e.isMesh&&(e.receiveShadow=!1)}),t.kind=i,t.stride=i==="elephant"||i==="bear"||i==="gorilla"?1.3:i==="dino"?1.5:2.2,t}function Np(i,t,e,n,s,r){let o=Math.min(1,n/3.5),a=Math.min(1.6,.6+n/7),l=i.ph=(i.ph||0)+e*n*i.stride*1.4+e*0,c=(i.kind==="elephant"||i.kind==="dino"||i.kind==="bear"||i.kind==="gorilla"?.42:.7)*o*Math.min(1,a),h=[0,Math.PI,Math.PI,0];i.legs.forEach((u,d)=>{u.rotation.x=Math.sin(l+h[d])*c});let f=i.inner;if(f.position.y=Math.abs(Math.sin(l))*.06*o*(i.kind==="elephant"?1.4:1)+0,f.scale.y=1+Math.sin(t*2.1)*.012,i.head&&(i.head.rotation.x=Math.sin(l*.5+1)*.06*o+Math.sin(t*1.3)*.03,i.head.rotation.y=Math.sin(t*.7)*.12*(1-o)),i.tail&&(i.tail.rotation.z=Math.sin(t*(2+n*.3))*.35),r>0){let u=1-r;f.rotation.x=u<.7?-.5*(u/.7):.35,i.head&&(i.head.rotation.x-=.4)}else f.rotation.x+=(0-f.rotation.x)*Math.min(1,e*10);f.rotation.z=s===4?Math.sin(t*40)*.12:s===5?Math.sin(t*3)*.04:0}function zp(i){let t=i>>>0||1;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}var ls=[{name:"MEADOW",ground:"#74d05a",path:"#e8d8a0",fence:"#b0763c",hedge:["#3fae4a","#58c25c","#2f9a44"],leaf:["#2e9b3f","#3fb14c","#58c45a","#7ccf5a"]},{name:"FOREST",ground:"#3f9a4a",path:"#cdb887",fence:"#6b4423",hedge:["#2a7a3a","#1f6a30","#35893f"],leaf:["#1f7a34","#2a8a3c","#27803c","#3a9a4a"]},{name:"SWAMP",ground:"#6b7a3a",path:"#a89c68",fence:"#4a4a30",hedge:["#5a6b2a","#4a5a24","#6c7c34"],leaf:["#5a7a2a","#6c8a34","#4a6a24","#7a9a3c"]},{name:"CANYON",ground:"#d79a58",path:"#f0cf98",fence:"#a8532f",hedge:["#c2693a","#b05a30","#d07a45"],leaf:["#c2693a","#d07a45","#b05a30","#e08a50"]},{name:"SNOW",ground:"#f0f8ff",path:"#cfe6f6",fence:"#9fd0f0",hedge:["#d8efff","#bfe3fa","#e9f6ff"],leaf:["#ffffff","#e4f3ff","#d0e9fa","#f4fbff"]},{name:"VOLCANO",ground:"#4a3a3a",path:"#6b5656",fence:"#2b2020",hedge:["#3a2c2c","#2f2323","#443535"],leaf:["#3a2c2c","#4a3535","#2f2323","#5a4444"]}];function l_(i,t){let e=Ce.COLS,n=Array.from({length:i},()=>Array(e+1).fill(!0)),s=Array.from({length:i+1},()=>Array(e).fill(!0)),r=Array.from({length:i},()=>Array(e).fill(!1)),o=e/2|0,a=[[0,o]];for(r[0][o]=!0;a.length;){let[f,u]=a[a.length-1],d=[];if(f+1<i&&!r[f+1][u]&&d.push([f+1,u]),f-1>=0&&!r[f-1][u]&&d.push([f-1,u]),u-1>=0&&!r[f][u-1]&&d.push([f,u-1]),u+1<e&&!r[f][u+1]&&d.push([f,u+1]),!d.length){a.pop();continue}let[m,y]=d[Math.floor(t()*d.length)];m===f+1?s[f+1][u]=!1:m===f-1?s[f][u]=!1:y===u-1?n[f][u]=!1:n[f][u+1]=!1,r[m][y]=!0,a.push([m,y])}s[0][o]=!1,s[i][o]=!1;let l=new Map([[`0,${o}`,null]]),c=[[0,o]];for(;c.length;){let[f,u]=c.shift();for(let[d,m,y]of[[f+1,u,s[f+1][u]],[f-1,u,f>0?s[f][u]:!0],[f,u-1,n[f][u]],[f,u+1,n[f][u+1]]])!y&&d>=0&&d<i&&m>=0&&m<e&&!l.has(`${d},${m}`)&&(l.set(`${d},${m}`,[f,u]),c.push([d,m]))}let h=[];for(let f=[i-1,o];f;f=l.get(`${f[0]},${f[1]}`))h.unshift(f);return{rows:i,V:n,H:s,sol:h}}function Up(i,t,e,n=1){let s=zi(),r=!i.headless,o=i.main,a=i.glow,l=Ce.HW,c=Ce.CELL,h=zp(n>>>0^1540483477),f=x=>x[Math.floor(h()*x.length)],u=s.dr.endZ,d=3.4,m=.8,y=7;e.startArch=99,e.spawn={x:0,y:0,z:3},i.checkpoints.push({x:0,y:0,z:6,w:14,spawn:[0,0,3]}),i.waterY=-40,i.killY=-60;let p=x=>x<Ce.CH?[s.chapters[x].mz0,s.chapters[x].next]:[s.dr.z0,s.dr.endZ];i.platform(0,0,(12+u-2)/2,l*2+6,12-u+2,{h:2,color:ls[0].ground,pad:!1});for(let x=0;x<=Ce.CH;x++){let[_,M]=p(x),w=ls[x],v=x===0?12.5:_,b=x===Ce.CH?u-1:M;for(let A=v,P=0;A>b+.01;A-=12,P++){let L=Math.min(12,A-b);for(let D of[-1,1])i.platform(D*(l+1),y,A-L/2,2,L,{h:y,color:P%2?w.fence:w.hedge[0],pad:!1})}r&&o.add(i.rbox(l*2,.04,v-b,.01),0,.02,(v+b)/2,w.ground)}i.platform(0,y,13,l*2+6,2,{h:y,color:ls[0].fence,pad:!1}),i.platform(0,y,u-1,l*2+6,2,{h:y,color:ls[5].fence,pad:!1});let g={chapters:[],dragon:null};e.mazes=[],e.mazePaths=[];for(let x of s.chapters){let _=ls[x.c],M=zp(((n>>>0)+1)*7919+x.c*104729),w=l_(x.rows,M);e.mazes.push(w);let v=ot=>(ot+.5-Ce.COLS/2)*c,b=ot=>x.mz0-(ot+.5)*c;for(let ot=0;ot<x.rows;ot++)for(let mt=0;mt<=Ce.COLS;mt++)w.V[ot][mt]&&i.platform((mt-Ce.COLS/2)*c,d,b(ot),m,c+m,{h:d,color:_.hedge[(ot+mt)%3],pad:!1});for(let ot=0;ot<=x.rows;ot++)for(let mt=0;mt<Ce.COLS;mt++)w.H[ot][mt]&&i.platform(v(mt),d,x.mz0-ot*c,c+m,m,{h:d,color:_.hedge[(ot+mt+1)%3],pad:!1});e.mazePaths.push(w.sol.map(([ot,mt])=>[v(mt),b(ot)])),r&&o.add(i.rbox(l*2-.2,.05,x.rows*c,.01),0,.035,(x.mz0+x.mz1)/2,_.path);let A=w.sol,P=[];for(let ot=2;ot<A.length-1;ot++)P.push(ot);let L=P.filter(ot=>A[ot][1]===A[ot-1][1]&&A[ot][1]===A[ot+1][1]),D=[0,1,2,3,4][x.c],R=[0,4,5,6,7][x.c],C=new Set,z=(ot,mt,Yt)=>{let At=[],kt=ot.slice();for(let U=kt.length-1;U>0;U--){let H=Math.floor(M()*(U+1));[kt[U],kt[H]]=[kt[H],kt[U]]}for(let U of kt){if(At.length>=mt)break;[...C].some(H=>Math.abs(H-U)<Yt)||(C.add(U),At.push(U))}return At};for(let ot of z(L,D,2)){let[mt,Yt]=A[ot];i.conveyor(v(Yt),.05,b(mt),c-1.2,c-m-.2,R)}let F=x.boulderZ,K=x.gateZ,V=i.addSolid(-l,0,F-Ce.BOULDER/2,l,9,F+Ce.BOULDER/2,{name:"boulder"}),J=i.addSolid(-l,0,K-.75,l,7,K+.75,{name:"gate"}),Z={boulder:{solid:V,grp:null},gate:{solid:J,grp:null}};if(r){o.add(i.rbox(l*2-.2,.05,x.mz1-x.arenaZ1+1,.01),0,.035,(x.mz1+x.arenaZ1)/2-.5,_.path);let ot=new yt;ot.position.set(0,0,F);let mt=_t=>new Xt({color:_t,roughness:.95,flatShading:!0}),Yt=["#8d8a84","#7c7a75","#9a968e","#6f6d69"];[[-8.8,3.2,4.2],[-4.4,3,4.4],[0,3.4,4.6],[4.4,3,4.4],[8.8,3.2,4.2],[-6.5,7.4,3.6],[-1.6,7.8,3.8],[3.4,7.6,3.6],[8,7.2,3]].forEach(([_t,ft,Y],ut)=>{let $=new k(new po(Y,1),mt(Yt[ut%4]));$.position.set(_t,ft,(ut%3-1)*.5),$.rotation.set(ut,ut*2,0),$.castShadow=!0,ot.add($)}),i.group.add(ot),Z.boulder.grp=ot;let At=new yt;At.position.set(0,0,K);let kt=new Xt({color:"#8a5a30",roughness:.8}),U=new Xt({color:"#6b4423",roughness:.8});for(let _t=-l+.9;_t<l;_t+=1.8){let ft=new k(new jt(1.5,7,1.1),(_t*10|0)%2?kt:U);ft.position.set(_t,3.5,0),ft.castShadow=!0,At.add(ft);let Y=new k(new be(.8,1.2,4),kt);Y.position.set(_t,7.5,0),Y.rotation.y=Math.PI/4,At.add(Y)}for(let _t of[1.5,5.2]){let ft=new k(new jt(l*2,.5,1.5),U);ft.position.set(0,_t,0),At.add(ft)}i.group.add(At),Z.gate.grp=At;let H=(_t,ft,Y,ut,$,et,ct)=>{let lt=Xe(_t,$,et,{bg:ct,fg:"#fff3c4",stroke:"#2a1204",border:"#ffd23f",frame:"#3b2410"});lt.position.set(ft,Y,ut),i.group.add(lt)},rt=(_t,ft,Y)=>{let ut=new k(new gt(.3,.3,Y,6),U);ut.position.set(_t,Y/2,ft),i.group.add(ut)};H("STAND ON ALL CIRCLES!",0,10.4,x.plazaZ+5.5,14,3,["#7a4a1e","#5a3412"]),rt(-8.6,x.plazaZ+5.5,11),rt(8.6,x.plazaZ+5.5,11),H(`CHAPTER ${x.c+1} - ${_.name}`,0,10.4,x.mz0+0,14,3,["#2c6b3a","#1a4a26"]),rt(-7.2,x.mz0,11),rt(7.2,x.mz0,11),H("BEAT THE BEAST WITH THE BAT!",0,10.4,x.arenaZ0-3,15,3,["#8a2a1e","#5a1a12"]),rt(-7.8,x.arenaZ0-3,11),rt(7.8,x.arenaZ0-3,11)}g.chapters.push(Z)}let E=s.dr,S=i.addSolid(-8,0,E.dragonZ-8,8,11,E.cageZ+6,{name:"cage"});if(g.dragon={solid:S,grp:null,root:null},r){o.add(i.rbox(l*2-.2,.05,E.z0-u,.01),0,.035,(E.z0+u)/2,ls[5].path);let x=new yt;x.position.set(0,0,(E.cageZ+6+E.dragonZ-8)/2);let _=new Xt({color:"#22222a",roughness:.5,metalness:.5}),M=E.cageZ+6-(E.dragonZ-8);for(let P=-8;P<=8.01;P+=2){let L=new k(new gt(.22,.22,11,6),_);L.position.set(P,5.5,M/2),x.add(L)}for(let P of[-8,8])for(let L=0;L<=M+.01;L+=2.3){let D=new k(new gt(.22,.22,11,6),_);D.position.set(P,5.5,L-M/2),x.add(D)}for(let P of[.3,5.5,10.8]){let L=new k(new jt(16.4,.4,.4),_);L.position.set(0,P,M/2),x.add(L)}let w=new k(new jt(16.4,.4,M),_);w.position.set(0,11,0),x.add(w),i.group.add(x),g.dragon.grp=x;let v=Xe("FREE THE DRAGON!",18,4.2,{bg:["#7a1e5a","#4a1236"],fg:"#fff3c4",stroke:"#200618",border:"#ffd23f",frame:"#3b2410"});v.position.set(0,12,E.circlesZ+6),i.group.add(v);let b=Xe("STAND ON ALL CIRCLES!",17,4.2,{bg:["#7a4a1e","#5a3412"],fg:"#fff3c4",stroke:"#2a1204",border:"#ffd23f",frame:"#3b2410"});b.position.set(0,16,E.circlesZ+6),i.group.add(b);let A=Xe("JUNGLE QUEST",20,5.2,{bg:["#ff8a1c","#c9400b"],fg:"#ffffff",stroke:"#5a1a00",border:"#ffe27a",frame:"#3b2410"});A.position.set(0,12,2),i.group.add(A),c_(i,s,h,f)}e.quest=g,e.questLayout=s}function c_(i,t,e,n){let s=i.main,r=i.glow,o=Ce.HW,a=(d,m=7,y=5)=>new ue(d,m,y),l=(d,m,y,p=7)=>new gt(d,m,y,p),c=(d,m,y=7)=>new be(d,m,y),h=(d,m,y,p,g)=>{let E=7*p;if(d==="round")s.add(l(.5*p,.8*p,E),m,E/2,y,"#7a4b27"),s.add(a(3.6*p),m,E+2*p,y,n(g.leaf)),s.add(a(2.6*p),m+2.3*p,E+.6*p,y+.5*p,n(g.leaf));else if(d==="pine"){s.add(l(.4*p,.6*p,E*.6),m,E*.3,y,"#6b4423");for(let S=0;S<4;S++)s.add(c((3.6-S*.7)*p,3.4*p,8),m,E*.55+S*2.1*p,y,n(g.leaf))}else if(d==="dead"){s.add(l(.3*p,.7*p,E*1.1),m,E*.55,y,"#3a3022");for(let S=0;S<3;S++)s.add(l(.12*p,.25*p,3*p),m+(S-1)*1.1*p,E*(.8+S*.1),y,"#3a3022",0,0,(S-1)*.9)}else if(d==="pillar"){let S=(2.5+e()*2.5)*p,x=(10+e()*14)*p;s.add(i.rbox(S,x,S*.9,.5),m,x/2,y,n(["#c2693a","#b05a30","#d07a45","#e0975a"]),0,e()*3),s.add(i.rbox(S*1.15,1.2,S,.3),m,x*.6,y,"#e8b27a",0,e()*3)}else if(d==="snowpine"){s.add(l(.4*p,.6*p,E*.5),m,E*.25,y,"#5a3a22");for(let S=0;S<4;S++)s.add(c((3.4-S*.7)*p,3.2*p,8),m,E*.45+S*2*p,y,"#2f6f58"),s.add(c((2.6-S*.6)*p,1.6*p,8),m,E*.45+S*2*p+1.1*p,y,"#ffffff")}else{let S=(8+e()*14)*p;s.add(c((3+e()*3)*p,S,6),m,S/2,y,n(["#2d2323","#3a2c2c","#241c1c"]),0,e()*3),r.add(c(.9*p,S*.6,5),m,S*.3,y,"#ff6a1a")}},f=[["round","round","pine"],["pine","pine","round"],["dead","dead","round"],["pillar","pillar","pillar"],["snowpine","snowpine","snowpine"],["rock","rock","rock"]],u=[...t.chapters.map(d=>[d.mz0,d.next]),[t.dr.z0,t.dr.endZ]];u.forEach(([d,m],y)=>{let p=ls[y];for(let g=y===0?14:d;g>(y===Ce.CH?m-12:m);g-=5.2+e()*3.4)for(let E of[-1,1]){let S=E*(o+4.5+e()*20),x=.8+e()*.8;h(n(f[y]),S,g+(e()-.5)*3,x,p),e()<.45&&h(n(f[y]),E*(o+28+e()*30),g+(e()-.5)*6,1.3+e()*1.2,p)}for(let g=0;g<40;g++){let E=(e()<.5?-1:1)*(o-1.2-e()*.9),S=d-e()*(d-m);y===0||y===1?(s.add(l(.05,.05,.7,4),E,.35,S,"#3a8f3a"),s.add(a(.26,6,4),E,.78,S,n(["#ff5fa8","#ffd23f","#ffffff","#ff7a1a","#b58cff"]))):y===2?(s.add(l(.25,.3,.9,6),E,.45,S,"#fff3e0"),s.add(a(.8,8,5),E,1,S,"#8ed36a",0,0,0,1,.55,1)):y===3?s.add(a(1,6,5),E,.3,S,n(["#a8532f","#c2693a"]),e(),e(),0,1.2,.6,1):y===4?s.add(a(1,7,5),E,.3,S,"#ffffff",0,0,0,1.4,.7,1.2):(s.add(a(1,6,5),E,.3,S,"#2d2323",e(),e(),0,1.2,.6,1),r.add(a(.35,6,4),E,.2,S,"#ff6a1a"))}});for(let d=10;d>t.dr.endZ-30;d-=28)for(let m of[-1,1]){let y=Math.min(Ce.CH,Math.max(0,u.findIndex(([g,E])=>d<=g&&d>E))),p=ls[y===-1?0:y];s.add(a(1,12,8),m*(o+110+e()*40),0,d,p.ground,0,0,0,38+e()*24,22+e()*20,30+e()*14)}}var bc=class{constructor(t,e){this.world=t,this.info=e,this.L=zi(),this.q=e.quest,this.t=0,this.state=this.L.chapters.map(()=>({boulder:"closed",gate:"closed",bt:0,gt:0})),this._fresh=!0,this.cage="closed",this.fly=0,this.n=0,this.occ=[],this.circleZ=null,this.g=new yt,t.group.add(this.g),this.circles=[];for(let n=0;n<4;n++){let s=new yt,r=new k(new gt(Rs,Rs,.12,40),new ae({color:"#ffd23f",transparent:!0,opacity:.55,toneMapped:!1})),o=new k(new Pe(Rs,.14,8,40),new ae({color:"#ffffff",toneMapped:!1}));o.rotation.x=Math.PI/2,o.position.y=.08;let a=new k(new gt(Rs*.9,Rs*.9,5,24,1,!0),new ae({color:"#ffd23f",transparent:!0,opacity:.16,side:$e,depthWrite:!1,toneMapped:!1}));a.position.y=2.5;let l=Xe("STAND HERE",3.8,1.2,{bg:["#ffd23f","#ff9f1c"],fg:"#3a1c00",stroke:"#ffffff",border:"#ffffff"});l.position.y=5.4,s.add(r,o,a,l),s.visible=!1,s.userData={disc:r,ring:o,beam:a,lab:l},this.g.add(s),this.circles.push(s)}this.dragon=Lp(),this.dragon.root.position.set(0,0,this.L.dr.dragonZ),this.dragon.root.scale.setScalar(1.15),this.g.add(this.dragon.root),this.flags={boulder:[],gate:[]}}openBoulder(t,e){let n=this.state[t];n.boulder==="closed"&&(this.q.chapters[t].boulder.solid.active=!1,e?(n.boulder="gone",this.q.chapters[t].boulder.grp.visible=!1):(n.boulder="falling",n.bt=0))}openGate(t,e){let n=this.state[t];n.gate==="closed"&&(this.q.chapters[t].gate.solid.active=!1,e?(n.gate="open",this.q.chapters[t].gate.grp.position.y=9):(n.gate="rising",n.gt=0))}openCage(t){this.cage==="closed"&&(this.q.dragon.solid.active=!1,this.cage="open",this.fly=t?99:0)}setState(t){for(let s=0;s<Ce.CH;s++)(s<t.ch||s===t.ch&&t.ph!==Je.MAZE)&&this.openBoulder(s,this._fresh),s<t.ch&&this.openGate(s,this._fresh);t.ph>=Je.FLY&&this.openCage(this._fresh),this._fresh=!1,this.n=t.n,this.occ=t.occ||[],this.ph=t.ph;let e=t.ph===Je.MAZE?this.L.chapters[t.ch].plazaZ:t.ph===Je.DRAGON?this.L.dr.circlesZ:null;this.circleZ=e;let n=wf(Math.max(1,t.n));this.circles.forEach((s,r)=>{s.visible=e!==null&&r<n.length,s.visible&&s.position.set(n[r],.06,e)})}event(t){t.k==="boulder"?this.openBoulder(t.ch,!1):t.k==="gate"?this.openGate(t.ch,!1):t.k==="cage"&&this.openCage(!1)}update(t){this.t+=t;let e=this.t;this.circles.forEach((r,o)=>{if(!r.visible)return;let a=this.occ[o],l=r.userData,c=.5+.5*Math.sin(e*4+o);l.disc.material.color.set(a?"#3dff7a":"#ffd23f"),l.disc.material.opacity=a?.8:.4+.25*c,l.beam.material.color.set(a?"#3dff7a":"#ffd23f"),l.beam.scale.y=a?1.2:1,l.ring.scale.setScalar(1+(a?0:.05*c)),l.lab.visible=!a,l.lab.position.y=5.2+.3*Math.sin(e*2.4+o)}),this.q.chapters.forEach((r,o)=>{let a=this.state[o];if(a.boulder==="falling"){a.bt+=t;let l=r.boulder.grp,c=Math.min(1,a.bt/1.5);l.position.y=-c*c*11,l.position.x=Math.sin(a.bt*40)*.25*(1-c),l.rotation.x=c*.5,c>=1&&(l.visible=!1,a.boulder="gone")}if(a.gate==="rising"){a.gt+=t;let l=r.gate.grp,c=Math.min(1,a.gt/1.4);l.position.y=c*9,c>=1&&(a.gate="open")}});let n=this.dragon,s=this.L;if(this.cage==="closed")Tf(n,e,.15),n.root.rotation.y=Math.sin(e*.6)*.15;else{this.fly+=t;let r=this.fly,o=this.q.dragon.grp;o&&(o.position.y=Math.min(r,2)*6,o.visible=r<2.2);let a=Math.max(0,r-1.6)/7.4,l=Math.min(1,a);n.root.rotation.y=Math.PI*Math.min(1,Math.max(0,r-.8)/1.2),n.root.position.set(Math.sin(r*.8)*3*l,l*l*46+Math.min(1,l*4)*3,s.dr.dragonZ-l*150),n.root.scale.setScalar(1.15*(1-l*.55)),Tf(n,e,1)}}};var Ye={HW:12,CH:2,STEP:160,SLOTS:6,ARENA_LEN:56,LIFT_H:9},Ke={WAIT:0,BEAST:1,MACH:2,DONE:3},h_=[["coyote","boar"],["hyena","bear"]],cs=2.3,Sc=null;function Ir(){if(Sc)return Sc;let i=[];for(let e=0;e<Ye.CH;e++){let n=-14-e*Ye.STEP;i.push({c:e,z0:n,trigZ:n-4,arenaC:n-34,arena:{x0:-Ye.HW+1,x1:Ye.HW-1,z0:n-6-Ye.ARENA_LEN,z1:n-6},gateZ:n-66,machZ:n-84,nextZ:n-Ye.STEP+4,end:n-Ye.STEP})}let t=i[Ye.CH-1];return Sc={chapters:i,endZ:t.end-24,road:{x0:-Ye.HW+.6,x1:Ye.HW-.6,z0:t.end-24,z1:12},startZ:8,lift:{x:-5.5,z:t.z0-100,w:6,d:6,cliffZ0:t.z0-102.5,cliffZ1:t.z0-128,panX:6.2,panZ:t.z0-84,panR:3.2},doorZ:i[0].z0-112},Sc}var Af=i=>Array.from({length:i},(t,e)=>(e-(i-1)/2)*5.6),Op=()=>({ch:0,ph:Ke.WAIT,n:1,hold:0,occ:[],m:[{v:0,done:0},{v:0,done:0,wa:0,wb:0}],left:0}),Bp=()=>{let i=Ir(),t=[];for(let e of i.chapters)for(let n=0;n<Ye.SLOTS;n++)t.push({id:e.c*Ye.SLOTS+n,kind:h_[e.c][n%2],x:0,z:e.arenaC,hidden:!0,bounds:e.arena});return t},Hp=()=>({trees:[],petBounds:Ir().road}),f_=i=>Math.min(Ye.SLOTS,2+Math.max(1,i));function u_(i,t,e){let n=(e%3-1)*6+(Math.random()-.5)*2,s=t.arenaC+(e<3?-8:8)+(Math.random()-.5)*6;i.st=Ee.IDLE,i.dead=0,i.hp=rn[i.kind].hp,i.x=n,i.z=s,i.y=0,i.tx=n,i.tz=s,i.home={x:n,z:s},i.wait=.6,i.cool=1.6,i.yaw=0}function kp(i,t,e=[]){return!i||i.st===Ee.HIDDEN||i.dead||i.owner||(i.hp-=1,i.stagger=.16,i.wind=0,i.cool=Math.max(i.cool||0,.5),e.push({k:"hit",id:i.id,hp:i.hp}),i.hp<=0&&(i.dead=1,i.st=Ee.HIDDEN,e.push({k:"kill",id:i.id,pid:t}))),e}var Fp=(i,t,e,n)=>i.y<3&&Math.hypot(i.x-t,i.z-e)<n;function Gp(i,t,e,n,s,r,o=[]){if(i.n=Math.max(1,Math.min(4,s)),i.occ=[],i.hold=i.ph===Ke.MACH?i.hold:0,i.ph===Ke.DONE)return o;let a=r.chapters[i.ch],l=i.ch*Ye.SLOTS;if(i.ph===Ke.WAIT){if(e.some(c=>c.z<a.trigZ)){let c=f_(i.n);for(let h=0;h<c;h++)u_(n[l+h],a,h);i.ph=Ke.BEAST,i.left=c,o.push({k:"wave",ch:i.ch,n:c})}}else if(i.ph===Ke.BEAST){let c=0;for(let h=0;h<Ye.SLOTS;h++){let f=n[l+h];f.st!==Ee.HIDDEN&&!f.dead&&c++}i.left=c,c===0&&(i.ph=Ke.MACH,i.hold=0,o.push({k:"gate",ch:i.ch}))}else if(i.ph===Ke.MACH){let c=i.m[i.ch];if(i.ch===0){let h=Af(i.n);i.occ=h.map(f=>e.some(u=>Fp(u,f,a.machZ,cs+.2))?1:0),c.done||(i.occ.every(f=>f)?i.hold+=t:i.hold=Math.max(0,i.hold-t*2),i.hold>=1&&(c.done=1,o.push({k:"door",ch:0}))),c.v=Math.max(0,Math.min(1,c.v+(c.done?t/3:0)))}else{let h=r.lift,f=c.v*Ye.LIFT_H;c.wa=e.filter(p=>Math.abs(p.x-h.x)<h.w/2&&Math.abs(p.z-h.z)<h.d/2&&p.y>f-1.2&&p.y<f+3).length,c.wb=e.filter(p=>Fp(p,h.panX,h.panZ,h.panR)).length;let u=1.5+c.wb-c.wa,d=c.wa+c.wb===0?0:u>0?1:0,m=d-c.v,y=t*.4;c.v=Math.abs(m)<y?d:c.v+Math.sign(m)*y,c.v>.98&&!c.done&&(c.done=1,o.push({k:"lift",ch:1}))}}return(i.ph===Ke.MACH||i.ph===Ke.BEAST)&&e.some(c=>c.z<a.nextZ)&&i.ph===Ke.MACH&&(i.ch>=Ye.CH-1?(i.ph=Ke.DONE,o.push({k:"end"})):(i.ch++,i.ph=Ke.WAIT,i.hold=0,o.push({k:"chapter",ch:i.ch}))),o}function Vp(i,t){i.ch=t.ch,i.ph=t.ph,i.n=t.n,i.hold=t.hold||0,i.occ=t.occ||[],i.left=t.left||0,(t.m||[]).forEach((e,n)=>{i.m[n]&&Object.assign(i.m[n],{v:e[0],done:e[1],wa:e[2],wb:e[3]})})}function d_(i){let t=i>>>0||1;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}var Pr={ground:"#4cae4c",path:"#e2cf98",fence:"#6b4423",hedge:["#2a8a3c","#35993f","#1f7a34"],leaf:["#1f7a34","#2a8a3c","#3fae4a","#58c25c"]},Rf={ground:"#5a8f3a",path:"#cdb887",fence:"#5a3a22",hedge:["#3a7a34","#2f6a2c","#4a8a3a"],leaf:["#2f6a2c","#3a7a34","#58903a","#6aa045"]};function Wp(i,t,e,n=1){let s=Ir(),r=!i.headless,o=i.main,a=Ye.HW,l=s.endZ,c=d_(n>>>0^2654435761),h=y=>y[Math.floor(c()*y.length)],f=Op(),u={st:f,disp:[0,0],solids:[],L:s};e.hunt=u,e.startArch=99,e.spawn={x:0,y:0,z:3},i.checkpoints.push({x:0,y:0,z:6,w:14,spawn:[0,0,3]}),i.waterY=-40,i.killY=-60;let d=7;i.platform(0,0,(12+l-2)/2,a*2+6,12-l+2,{h:2,color:Pr.ground,pad:!1}),i.platform(0,d,13,a*2+6,2,{h:d,color:Pr.fence,pad:!1}),i.platform(0,d,l-1,a*2+6,2,{h:d,color:Rf.fence,pad:!1});let m=y=>y<s.lift.cliffZ0+4&&y>s.lift.cliffZ1-28;for(let y=12.5,p=0;y>l-.5;y-=12,p++){let g=Math.min(12,y-l),E=y<s.chapters[1].z0+6?Rf:Pr,S=m(y-g/2);for(let x of[-1,1])i.platform(x*(a+1),S?14:d,y-g/2,2,g,{h:S?14:d,color:p%2?E.fence:E.hedge[0],pad:!1})}r&&(o.add(i.rbox(a*2,.04,12-l,.01),0,.02,(12+l)/2,Pr.ground),o.add(i.rbox(a*2-3,.05,12-l,.01),0,.035,(12+l)/2,Pr.path));for(let y of s.chapters){let p=i.addSolid(-a,0,y.gateZ-.75,a,7,y.gateZ+.75,{name:"gate"}),g=null;if(r){g=new yt,g.position.set(0,0,y.gateZ);let E=new Xt({color:"#4a4f58",roughness:.5,metalness:.6});for(let _=-a+.4;_<=a;_+=1.6){let M=new k(new gt(.2,.2,7.4,6),E);M.position.set(_,3.7,0),M.castShadow=!0,g.add(M)}for(let _ of[.6,3.4,6.8]){let M=new k(new jt(a*2,.35,.45),E);M.position.set(0,_,0),g.add(M)}i.group.add(g);let S=Xe("SHOOT ALL THE BEASTS!",17,3.6,{bg:["#9a2a1a","#5a1208"],fg:"#fff3c4",stroke:"#200808",border:"#ffd23f",frame:"#3b2410"});S.position.set(0,10.5,y.gateZ),i.group.add(S);let x=Xe(`CHAPTER ${y.c+1}`,14,3.6,{bg:["#1f7a34","#0f4a1c"],fg:"#ffffff",stroke:"#052a0e",border:"#ffe27a",frame:"#3b2410"});x.position.set(0,11,y.z0+2),i.group.add(x)}u.solids[y.c]={gate:p,gateGrp:g,gateT:0},i.checkpoints.push({x:0,y:0,z:y.z0-2,w:14,spawn:[0,0,y.z0-3]}),i.checkpoints.push({x:0,y:0,z:y.gateZ-6,w:14,spawn:[0,0,y.gateZ-7]})}{let y=s.chapters[0],p=s.doorZ,g=i.addSolid(-a,0,p-1.2,a,10,p+1.2,{name:"door"});if(u.solids[0].door=g,r){let E=new yt;E.position.set(0,0,p);let S=new Xt({color:"#8d8a84",roughness:.95,flatShading:!0}),x=new k(new jt(a*2,10,2.2),S);x.position.y=5,x.castShadow=!0,E.add(x);for(let w=0;w<5;w++){let v=new k(new jt(3.2,3.2,.3),new Xt({color:["#7c7a75","#9a968e","#6f6d69"][w%3],roughness:1,flatShading:!0}));v.position.set(-9.6+w*4.8,3+w%2*3.6,1.2),E.add(v)}i.group.add(E),u.doorGrp=E;let _=Xe("A HEAVY DOOR!  EVERYBODY STAND ON A PLATE",20,3.6,{bg:["#7a4a1e","#5a3412"],fg:"#fff3c4",stroke:"#2a1204",border:"#ffd23f",frame:"#3b2410"});_.position.set(0,13.5,y.machZ-8),i.group.add(_),u.gears=[];for(let w of[-1,1]){let v=wc(3.2,12,"#b8863b");v.position.set(w*(a-1.5),12.6,p-2.4),i.group.add(v),u.gears.push({g:v,dir:w,k:3});let b=wc(1.8,8,"#8a6a30");b.position.set(w*(a-6.1),12.6,p-2.4),i.group.add(b),u.gears.push({g:b,dir:-w,k:-5.3})}let M=new k(new jt(a*2,.6,.6),new Xt({color:"#5a3a1e",roughness:.8}));M.position.set(0,12.6,p-2.4),i.group.add(M)}if(u.plates=[],r)for(let E=0;E<4;E++){let S=new yt,x=new k(new gt(cs+.35,cs+.45,.22,36),new Xt({color:"#6a6e78",roughness:.6,metalness:.4})),_=new k(new gt(cs,cs,.2,36),new ae({color:"#ffd23f",toneMapped:!1}));_.position.y=.06;let M=new k(new gt(cs*.9,cs*.9,5,24,1,!0),new ae({color:"#ffd23f",transparent:!0,opacity:.16,side:$e,depthWrite:!1,toneMapped:!1}));M.position.y=2.6,S.add(x,_,M),S.visible=!1,S.userData={pad:_,beam:M},i.group.add(S),u.plates.push(S)}}{let y=s.chapters[1],p=s.lift,g=Ye.LIFT_H,E=p.cliffZ0-p.cliffZ1;if(i.platform(0,g,(p.cliffZ0+p.cliffZ1)/2,a*2,E,{h:g,color:"#7a6a4a",pad:!0,padColor:"#9a8a62"}),i.ramp(0,p.cliffZ1,g,y.z0-152,0,a*2-2,{}),i.mover(p.x,.15,p.z,p.w,p.d,()=>[0,u.disp[1]*g,0],{h:.6,color:"#c9a063",padColor:"#e8cf90"}),r){let S=new Xt({color:"#6b4423",roughness:.9}),x=new Xt({color:"#c9a063",roughness:.9}),_=g+6;for(let C of[p.x-3.6,p.x+3.6]){let z=new k(new jt(.8,_,.8),S);z.position.set(C,_/2,p.z-3.4),z.castShadow=!0,i.group.add(z)}let M=new k(new jt(p.panX-p.x+8,.7,.8),S);M.position.set((p.panX+p.x)/2,_,p.z-3.4),i.group.add(M);for(let C of[p.panX-2.4,p.panX+2.4]){let z=new k(new jt(.8,_,.8),S);z.position.set(C,_/2,p.panZ-4),i.group.add(z)}u.gears=[];let w=wc(3,12,"#b8863b");w.position.set(p.x,_-1.2,p.z-3.9),i.group.add(w),u.gears.push({g:w,dir:1,k:1});let v=wc(2.2,10,"#8a6a30");v.position.set(p.x+5.2,_-1.2,p.z-3.9),i.group.add(v),u.gears.push({g:v,dir:-1,k:1.36}),u.ropeA=new k(new gt(.09,.09,1,5),x),i.group.add(u.ropeA),u.ropeA2=new k(new gt(.09,.09,1,5),x),i.group.add(u.ropeA2),u.stone=new k(new jt(2.6,2.6,2.6),new Xt({color:"#8d8a84",roughness:.95,flatShading:!0})),u.stone.castShadow=!0,i.group.add(u.stone),u.ropeB=new k(new gt(.09,.09,1,5),x),i.group.add(u.ropeB);let b=new yt;b.position.set(p.panX,.12,p.panZ);let A=new k(new gt(p.panR+.3,p.panR+.4,.3,36),new Xt({color:"#6a6e78",roughness:.6,metalness:.4})),P=new k(new gt(p.panR,p.panR,.22,36),new ae({color:"#4cc9f0",toneMapped:!1}));P.position.y=.08;let L=Xe("FRIENDS STAND HERE",4.6,1.3,{bg:["#1e88c9","#0f4a7a"],fg:"#ffffff",stroke:"#041a2e",border:"#ffffff"});L.position.y=2.2,b.add(A,P,L),i.group.add(b),u.pan={g:b,pad:P};let D=Xe("COUNTERWEIGHT LIFT!  RIDE UP - FRIENDS STAND ON THE PAN",24,3.6,{bg:["#7a4a1e","#5a3412"],fg:"#fff3c4",stroke:"#2a1204",border:"#ffd23f",frame:"#3b2410"});D.position.set(0,15,y.machZ+6),i.group.add(D);let R=Xe("MORE CHAPTERS COMING SOON!",22,4,{bg:["#7a1e5a","#4a1236"],fg:"#fff3c4",stroke:"#200618",border:"#ffd23f",frame:"#3b2410"});R.position.set(0,9,l+4),i.group.add(R)}}r&&p_(i,s,c,h)}function wc(i,t,e){let n=new yt,s=new Xt({color:e,roughness:.45,metalness:.65}),r=new k(new gt(i,i,.7,28),s);r.rotation.x=Math.PI/2,n.add(r);for(let a=0;a<t;a++){let l=a/t*Math.PI*2,c=new k(new jt(i*.34,i*.3,.7),s);c.position.set(Math.cos(l)*(i+i*.1),Math.sin(l)*(i+i*.1),0),c.rotation.z=l,n.add(c)}let o=new k(new gt(i*.28,i*.28,.95,12),new Xt({color:"#3a3a40",metalness:.7,roughness:.4}));return o.rotation.x=Math.PI/2,n.add(o),n}function p_(i,t,e,n){let s=i.main,r=Ye.HW,o=(l,c=7,h=5)=>new ue(l,c,h),a=(l,c,h,f=7)=>new gt(l,c,h,f);for(let l=14;l>t.endZ-10;l-=5+e()*3.4){let c=l<t.chapters[1].z0+6?Rf:Pr;for(let h of[-1,1]){let f=h*(r+4.5+e()*20),u=.8+e()*.9,d=7*u,m=l+(e()-.5)*3;if(e()<.3){s.add(a(.35*u,.55*u,d*1.2),f,d*.6,m,"#8a6a3a",0,0,h*.12);for(let y=0;y<6;y++)s.add(new be(.7*u,5*u,4),f+Math.cos(y)*2*u,d*1.2+.2,m+Math.sin(y)*2*u,n(c.leaf),Math.sin(y)*1.1,0,-Math.cos(y)*1.1)}else s.add(a(.5*u,.8*u,d),f,d/2,m,"#7a4b27"),s.add(o(3.6*u),f,d+2*u,m,n(c.leaf)),s.add(o(2.6*u),f+2.3*u,d+.6*u,m+.5*u,n(c.leaf));if(e()<.45){let y=9*(1.3+e());s.add(a(.9,1.4,y),h*(r+28+e()*30),y/2,l,"#6b4423"),s.add(o(7+e()*3),h*(r+28+e()*30),y+3,l,n(c.leaf))}}}for(let l=0;l<200;l++){let c=(e()<.5?-1:1)*(r-1.2-e()*.9),h=8-e()*(8-t.endZ);e()<.5?(s.add(a(.05,.05,.7,4),c,.35,h,"#3a8f3a"),s.add(o(.26,6,4),c,.78,h,n(["#ff5fa8","#ffd23f","#ffffff","#ff7a1a","#b58cff"]))):s.add(o(1,6,5),c,.5,h,n(["#2a8a3c","#35993f"]),0,0,0,1.2,.7,1.1)}for(let l=10;l>t.endZ-30;l-=30)for(let c of[-1,1])s.add(o(1,12,8),c*(r+110+e()*40),0,l,"#3f8f45",0,0,0,38+e()*24,22+e()*20,30+e()*14)}var Tc=class{constructor(t,e,n){this.world=t,this.info=e,this.h=e.hunt,this.L=this.h.L,this.t=0,this._fresh=!0,this.tr=[],this.scene=n,this.trGeo=new gt(.06,.06,1,5)}openGate(t,e){let n=this.h.solids[t];!n||n.gateT>0||(n.gate.active=!1,n.gateT=e?1.4:.001,e&&n.gateGrp&&(n.gateGrp.position.y=9))}event(t){t.k==="gate"&&this.openGate(t.ch,!1)}setState(){let t=this.h.st;for(let e=0;e<Ye.CH;e++)(e<t.ch||e===t.ch&&t.ph>=Ke.MACH)&&this.openGate(e,this._fresh);this._fresh=!1}tracer(t,e,n,s,r,o,a="#ffe27a"){let l=s-t,c=r-e,h=o-n,f=Math.hypot(l,c,h)||1,u=new k(this.trGeo,new ae({color:a,transparent:!0,opacity:1,toneMapped:!1,depthWrite:!1}));u.position.set((t+s)/2,(e+r)/2,(n+o)/2),u.scale.set(1,f,1),u.quaternion.setFromUnitVectors(new O(0,1,0),new O(l/f,c/f,h/f)),this.scene.add(u),this.tr.push({m:u,t:0})}update(t){this.t+=t;let e=this.t,n=this.h,s=n.st,r=this.L;this.setState();let o=1-Math.exp(-10*t);n.disp[0]+=(s.m[0].v-n.disp[0])*o,n.disp[1]+=(s.m[1].v-n.disp[1])*o;for(let d of n.solids)d.gateT>0&&d.gateT<1.4&&d.gateGrp&&(d.gateT+=t,d.gateGrp.position.y=Math.min(1,d.gateT/1.4)*9);let a=n.disp[0],l=n.solids[0].door;l&&(l.y0=a*10.2,l.active=a<.97,n.doorGrp&&(n.doorGrp.position.y=a*10.2));let c=s.ch===0&&s.ph===Ke.MACH&&!s.m[0].done,h=s.n,f=Af(h),u=r.chapters[0];if((n.plates||[]).forEach((d,m)=>{if(d.visible=m<f.length&&s.ch===0&&s.ph>=Ke.MACH,!d.visible)return;d.position.set(f[m],.12,u.machZ);let y=s.m[0].done||s.occ&&s.occ[m],p=d.userData,g=.5+.5*Math.sin(e*4+m);p.pad.material.color.set(y?"#3dff7a":"#ffd23f"),p.pad.position.y=y?-.02:.06+.02*g,p.beam.material.color.set(y?"#3dff7a":"#ffd23f"),p.beam.visible=!!c}),n.gears){let d=s.ch===0||s.ph===Ke.WAIT?a:n.disp[1];for(let m of n.gears)m.g.rotation.z=m.dir*d*m.k*14+(m.k>0?0:.26)}if(n.stone){let d=r.lift,m=Ye.LIFT_H,y=n.disp[1],p=m+6-1.2,g=y*m,E=p-3.4-y*0,S=14-y*7;n.stone.position.set(d.panX,S,d.panZ),n.pan.g.position.y=.12-(s.m[1].wb?.12:0),n.pan.pad.material.color.set(s.m[1].wb?"#3dff7a":"#4cc9f0");let x=(w,v,b,A,P,L,D)=>{let R=P-v,C=L-b,z=D-A,F=Math.hypot(R,C,z)||1;w.position.set((v+P)/2,(b+L)/2,(A+D)/2),w.scale.set(1,F,1),w.quaternion.setFromUnitVectors(new O(0,1,0),new O(R/F,C/F,z/F))},_=d.z-3.9,M=m+4.8;x(n.ropeA,d.x-2.6,g+.6,d.z,d.x,M,_),x(n.ropeA2,d.x+2.6,g+.6,d.z,d.x,M,_),x(n.ropeB,d.panX,S+1.3,d.panZ,d.x+5.2,M,_)}for(let d=this.tr.length-1;d>=0;d--){let m=this.tr[d];m.t+=t,m.m.material.opacity=Math.max(0,1-m.t/.14),m.t>.14&&(this.scene.remove(m.m),m.m.material.dispose(),this.tr.splice(d,1))}}dispose(){for(let t of this.tr)this.scene.remove(t.m),t.m.material.dispose();this.tr=[],this.trGeo.dispose()}};var m_={fun:{plat:["#ff6b9d","#ffd23f","#4cc9f0","#80ed99","#ff9f1c"],pad:"#ffffff",icePad:"#ffffff",edgeGlow:null,hazard:"#ff3d68",hazard2:"#fff7d6",hub:"#6a3fa0",accent:"#ffd23f",convBase:"#7a2d9e",belt:"#ffe9a8"},jungle:{plat:["#3f9d4a","#6bbf59","#8b5e3c","#2f7d3a","#a3d36b"],pad:"#c7f08a",icePad:"#ffffff",edgeGlow:null,hazard:"#ff7a1a",hazard2:"#fff7d6",hub:"#5a3a1e",accent:"#ffd23f",convBase:"#5a3a1e",belt:"#a3d36b"},arena:{plat:["#e9d9bd","#e9d9bd","#e9d9bd","#e9d9bd","#e9d9bd"],pad:"#f6efe0",icePad:"#ffffff",edgeGlow:null,hazard:"#ff6b6b",hazard2:"#ffffff",hub:"#8a8f99",accent:"#ffd23f",convBase:"#9aa3b5",belt:"#dfe6f5"},maze:{plat:["#ff6b9d","#ffd23f","#4cc9f0","#80ed99","#b58cff"],pad:"#ffffff",icePad:"#ffffff",edgeGlow:null,hazard:"#ff3d68",hazard2:"#fff7d6",hub:"#8a4fd1",accent:"#ffd23f",convBase:"#7a2d9e",belt:"#ffe9a8"},annoy:{plat:["#ff6b9d","#ffd23f","#4cc9f0","#80ed99","#b58cff"],pad:"#ffffff",icePad:"#ffffff",edgeGlow:null,hazard:"#ff3d68",hazard2:"#fff7d6",hub:"#5b2d9e",accent:"#ffd23f",convBase:"#7a2d9e",belt:"#ffe9a8"},hunt:{plat:["#3f9d4a","#6bbf59","#8b5e3c","#2f7d3a","#a3d36b"],pad:"#c7f08a",icePad:"#ffffff",edgeGlow:null,hazard:"#ff4d6d",hazard2:"#fff7d6",hub:"#5a3a1e",accent:"#ffd23f",convBase:"#4a3a5e",belt:"#ffe9a8"},quest:{plat:["#3f9d4a","#6bbf59","#8b5e3c","#2f7d3a","#a3d36b"],pad:"#c7f08a",icePad:"#ffffff",edgeGlow:null,hazard:"#ff4d6d",hazard2:"#fff7d6",hub:"#5a3a1e",accent:"#ffd23f",convBase:"#4a3a5e",belt:"#ffe9a8"}},g_=["fun","jungle","quest","arena","maze","annoy","hunt"],Xp=37,x_=28,y_=15,Yp=26,v_=11,qp=28,__=15,M_=12;function Zp(i,t=!1,e=null,n=1){let s=g_[i],r=m_[s],o=new mc(r,t);o.arrowTexture=e,o.key=s,o.waterY=-40,o.killY=-60;let a={z:0,y:0},l={key:s,spawn:{x:0,y:0,z:1.5},signs:[],pads:[]};function c(m,y,p={}){var M,w,v;let g=a.z-((M=p.gap)!=null?M:0),E=g-y/2,S=a.y+((w=p.dy)!=null?w:0),x=(v=p.x)!=null?v:0,_=o.platform(x,S,E,m,y,p);return a.z=g-y,a.y=S,{s:_,x,cz:E,near:g,far:g-y,top:S,w:m,d:y}}function h(m,y=3.5){return o.checkpoint(m.x,m.top,m.near-y,Math.min(m.w,16))}function f(m,y,p=0){let g=a.z-.9-3;[-4.7+p,4.7+p].forEach((S,x)=>{let _=x*Math.PI,M=b=>{let A=.5-.5*Math.cos(2*Math.PI*b/y+_);return[1.2*Math.sin(2*Math.PI*A),2.3*Math.sin(2*Math.PI*A),-m*A]};o.mover(S,a.y,g,6,6,b=>M(b),{h:1.3,stripes:!0,color:x?r.plat[2]:r.plat[0]});let w=[],v=48;for(let b=0;b<=v;b++){let A=b/v,P=[S+1.2*Math.sin(2*Math.PI*A),2.3*Math.sin(2*Math.PI*A),-m*A];w.push([P[0],a.y-1.5+P[1],g+P[2]])}for(let b of[-2.2,2.2])o.tube(w.map(A=>[A[0]+b,A[1],A[2]]),.14,r.hazard);o.tube(w.map(b=>[b[0],b[1]-.3,b[2]]),.2,r.hub);for(let b=0;b<=v;b+=4){let A=w[b];o.tube([[A[0],A[1]-.3,A[2]],[A[0],a.y-14,A[2]]],.22,r.hub)}}),a.z=g-m-3-.9}function u(){let m=c(22,34,{gap:0,color:r.plat[0]}),y=m.near-12;return o.arch(0,m.top,y,20,r.accent,!1),l.finishZ=y,l.finishY=m.top,l.finishPlat=m,m}if(i===0){l.startArch=-2,a.z=-16,a.y=0,o.platform(0,0,-430/2,140,450,{h:2,color:"#92e66c",pad:!1});for(let U=4,H=0;U>-446;U-=14,H++)for(let rt of[-1,1])o.platform(rt*(140/2+1),22,U-7,2,14,{h:22,color:r.plat[(H+(rt>0?2:0))%r.plat.length],pad:!1});if(o.platform(0,22,11,144,2,{h:22,color:r.plat[1],pad:!1}),o.platform(0,22,-441,144,2,{h:22,color:r.plat[3],pad:!1}),o.headless||o.main.add(o.rbox(12,.03,232,.01),0,.02,-128,"#f8ebb8"),!o.headless){let H="\u0639\u06A9\u0631\u0645\u06C1",rt=(_t,ft,Y,ut=12)=>{_t.position.set(ft*69.7,ut,Y),_t.rotation.y=ft<0?Math.PI/2:-Math.PI/2,o.group.add(_t)};rt(Zo("pk",30,20),-1,-50),rt(Zo("ps",30,20),1,-50),rt(Zo("ps",30,20),-1,-290),rt(Zo("pk",30,20),1,-290),rt(Xe("MADE BY HARIS",44,13,{bg:["#ff3d68","#ff9f1c"],fg:"#ffffff",stroke:"#6a1020",border:"#ffd23f"}),-1,-130),rt(Xe("MADE BY HARIS",44,13,{bg:["#4cc9f0","#3a2d9e"],fg:"#ffd23f",stroke:"#101040",border:"#ffffff"}),1,-170),rt(Xe(H,30,15,{urdu:!0,bg:["#0b6b3a","#01411c"],fg:"#ffffff",stroke:"#00230f",border:"#ffd23f"}),-1,-210),rt(Xe(H,30,15,{urdu:!0,bg:["#0b6b3a","#01411c"],fg:"#ffffff",stroke:"#00230f",border:"#ffd23f"}),1,-330)}let p=U=>o.platform(0,.04,U,8,14,{boost:1,color:"#ffd23f",pad:!1,h:.5});o.checkpoint(0,0,-70,16),p(-30),p(-52),[[-16,-26,3.2,20,0],[-22,-36,3.2,24,1],[-14,-46,3.4,28,2],[16,-28,3.2,22,3],[22,-38,3.4,26,4]].forEach(([U,H,rt,_t,ft])=>o.disc(U,0,H,rt,{bounce:_t,color:r.plat[ft]})),o.platform(31,9,-52,12,12,{color:r.plat[1]}),o.disc(20,0,-50,3.4,{bounce:29,color:r.hazard}),o.airpad(-26,-62,3.6,0,15),o.platform(-34,13,-62,8,8,{color:r.plat[2]}),o.orbit(-32,-18,6,1.6,3,.8),o.cannon(22,-14,16,[0,-17]),o.pirate(28,-70,16,.55,6.5),o.dropTower(-32,-82,14,13),o.checkpoint(0,0,-72,16),o.ramp(-14,-72,0,-98,10,8,{color:r.plat[3]}),o.platform(-28,10,-104,30,12,{color:r.plat[1]}),o.punch(-44,11.2,-104,1,0,8,{off:0}),o.punch(-12.2,11.2,-104,-1,0,8,{off:1.6}),[-38,-28,-18].forEach((U,H)=>o.ramp(U,-110,10,-152,0,7,{conv:[0,-14],ice:!0,color:r.plat[H*2%5],padColor:"#ffffff"})),o.platform(26,1.2,-90,14,14,{color:r.plat[4]}),o.punch(17.2,2.4,-90,1,0,7,{off:0}),o.punch(34.8,2.4,-90,-1,0,7,{off:1.6}),o.punch(26,2.4,-98.8,0,1,7,{off:.8}),o.punch(26,2.4,-81.2,0,-1,7,{off:2.4});for(let U=0;U<3;U++)o.seesaw(26,2,-112-U*16,9,12,1.4,3.4+U*.4,U*2.1);p(-118),o.checkpoint(0,0,-150,16),o.ramp(-30,-156,0,-182,8,10,{color:r.plat[2]}),o.platform(-30,8,-188,12,12,{color:r.plat[0]}),o.bungee(-30,-203,0,5.5,30,15),o.ferris(-30,11,-224,9,6,.4),o.ramp(26,-156,0,-164,3,14,{color:r.plat[3]}),a.z=-164,a.y=3,c(16,8,{x:26}),f(36,11,26),c(16,8,{x:26}),o.ramp(26,a.z,3,a.z-8,0,14,{color:r.plat[3]}),o.disc(0,.3,-180,8.5,{omega:.7,color:r.plat[0]}),o.headless||(o.main.add(new gt(.5,.5,9,10),0,4.8,-180,"#ffffff"),o.main.add(new be(10,3.2,20),0,10.4,-180,r.hazard)),[-160,-172,-184].forEach((U,H)=>{o.disc(-14,.3,U,3.5,{omega:H%2?1.5:-1.5,color:r.plat[(H+1)%5]}),o.bar(-14,.4,U,6.4,{omega:H%2?-1.1:1.1,h:.9,w:.9})}),o.checkpoint(0,0,-232,16),o.checkpoint(0,0,-244,16);let g=56,E=7,S={x:0,z:(As+ri)/2},x=-27,_=-420,M=[1,-1],w=[],v=[];for(let U of M)v.push({x:g*U,z:x,r:13,g:"p0"+U},{x:g*U,z:_,r:13,g:"p1"+U}),w.push({ax:g*U,az:x,bx:g*U,bz:_,hw:E,g:"hwy"+U});w.push({ax:-g,az:As,bx:g,bz:As,hw:E,g:"con-top"},{ax:-g,az:ri,bx:g,bz:ri,hw:E,g:"con-bot"});let b=[];for(let U of M)for(let H of[-110,-210,-370])b.push({x:g*U,z:H,r:4});let A={segs:w,plazas:v,boosts:[...b,{x:30,z:As,r:4},{x:-30,z:As,r:4},{x:30,z:ri,r:4},{x:-30,z:ri,r:4}]};l.track=A,l.cars=[[g-3.5,-33],[g+3.5,-33],[-g-3.5,-33],[-g+3.5,-33]].map(([U,H],rt)=>({id:rt,x:U,z:H,yaw:Math.PI}));let P=mp();if(!o.headless){let U=o.main,H="#3b3f4d",rt=(Y,ut,$)=>{for(let et of w){if(et.g===$)continue;let ct=et.bx-et.ax,lt=et.bz-et.az,xt=ct*ct+lt*lt,Ot=((Y-et.ax)*ct+(ut-et.az)*lt)/xt;if(Ot=Math.max(0,Math.min(1,Ot)),Math.hypot(Y-(et.ax+ct*Ot),ut-(et.az+lt*Ot))<et.hw-.4)return!0}for(let et of v)if(et.g!==$&&Math.hypot(Y-et.x,ut-et.z)<et.r-.4)return!0;return!1},_t=[];w.forEach(Y=>{let ut=Math.hypot(Y.bx-Y.ax,Y.bz-Y.az),$=Math.max(1,Math.ceil(ut/12));for(let et=0;et<$;et++)_t.push({ax:Y.ax+(Y.bx-Y.ax)*et/$,az:Y.az+(Y.bz-Y.az)*et/$,bx:Y.ax+(Y.bx-Y.ax)*(et+1)/$,bz:Y.az+(Y.bz-Y.az)*(et+1)/$,hw:Y.hw,g:Y.g})}),_t.forEach((Y,ut)=>{let $=Y.bx-Y.ax,et=Y.bz-Y.az,ct=Math.hypot($,et),lt=(Y.ax+Y.bx)/2,xt=(Y.az+Y.bz)/2,Ot=-Math.atan2(et,$),Gt=-et/ct,Qt=$/ct;U.add(o.rbox(ct+.7,.08,Y.hw*2,.02),lt,Y.g.startsWith("hwy")?.053:Y.g.startsWith("con")?.056:.05,xt,H,0,Ot,0);for(let ie of[-1,1]){let B=lt+Gt*ie*(Y.hw-.45),_e=xt+Qt*ie*(Y.hw-.45);if(rt(B,_e,Y.g)||U.add(o.rbox(ct+.05,.09,.9,.02),B,.1,_e,(ut+(ie>0?1:0))%2?"#ff3b3b":"#ffffff",0,Ot,0),ut%2===0){let fe=lt+Gt*ie*(Y.hw+1.3),N=xt+Qt*ie*(Y.hw+1.3);rt(fe,N,Y.g)||(U.add(new gt(.75,.75,.7,10),fe,.35,N,"#23252e"),U.add(new gt(.78,.78,.22,10),fe,.85,N,ut/2%2?"#ff3b3b":"#ffffff"))}}ut%2===0&&!rt(lt,xt,Y.g)&&U.add(o.rbox(Math.min(ct,5)*.55,.06,.3,.02),lt,.1,xt,"#ffffff",0,Ot,0)});for(let Y of v){U.add(new Ii(Y.r,48),Y.x,.054,Y.z,H,-Math.PI/2,0,0);for(let ut=0;ut<40;ut++){let $=ut/40*Math.PI*2,et=Y.x+Math.cos($)*(Y.r-.45),ct=Y.z+Math.sin($)*(Y.r-.45);rt(et,ct,Y.g)||U.add(o.rbox(2,.09,.9,.02),et,.1,ct,ut%2?"#ff3b3b":"#ffffff",0,-$+Math.PI/2,0)}for(let ut=0;ut<20;ut++){let $=ut/20*Math.PI*2,et=Y.x+Math.cos($)*(Y.r+1.3),ct=Y.z+Math.sin($)*(Y.r+1.3);rt(et,ct,Y.g)||(U.add(new gt(.75,.75,.7,10),et,.35,ct,"#23252e"),U.add(new gt(.78,.78,.22,10),et,.85,ct,ut%2?"#ff3b3b":"#ffffff"))}}for(let Y of A.boosts){U.add(o.rbox(10,.07,8,.02),Y.x,.12,Y.z,"#ff9f1c");for(let ut=0;ut<3;ut++)U.add(new be(1.5,2,3),Y.x,.16,Y.z+2-ut*2,"#fff3b0",-Math.PI/2*0,Math.PI,0)}for(let Y=0;Y<5;Y++)U.add(o.rbox(26-Y*2,1.1,2.4,.1),S.x,.55+Y*1.1,S.z-2+Y*-2.2,r.plat[Y%5]);let ft=["#0b6b3a","#2f7bff","#ffb21e","#a855f7"];l.cars.forEach((Y,ut)=>{U.add(o.rbox(7.5,.07,9.5,.03),Y.x,.12,Y.z,ft[ut]),U.add(o.rbox(6.9,.075,8.9,.03),Y.x,.125,Y.z,H)});for(let Y of M){let ut=g*Y;for(let[$,et]of[[ut-10.5,-14],[ut+10.5,-14],[ut-10.5,-38],[ut+10.5,-38]])U.add(o.rbox(.8,6,.8,.2),$,3,et,r.plat[1]);U.add(o.rbox(23,.7,27,.2),ut,6.3,x,r.hazard),U.add(o.rbox(21,.4,25,.2),ut,6.75,x,"#ffffff");for(let $=0;$<10;$++)for(let et=0;et<2;et++)U.add(o.rbox(1.4,.07,1.4,.01),ut-6.3+$*1.4,.13,-48-et*1.4,($+et)%2?"#111111":"#ffffff");for(let $ of[-1,1])U.add(o.rbox(.8,6.4,.8,.2),ut+$*8.2,3.2,-48,r.plat[1]);U.add(o.rbox(17.6,1,1.2,.2),ut,6.4,-48,r.hazard)}}if(w.push(...P.segs),A.plazas.push(...P.plazas),A.boosts.push(...P.boosts),A.slicks=P.slicks,P.dyn=gp(P.defs),A.dyn=P.dyn,l.cars.push(...P.racers),l.sky={y:dn,gates:P.gates,garage:P.garage,racerIds:[4,5,6,7],pillars:P.pillars},o.headless||xp(o,P,r),!o.headless){let U=(rt,_t,ft,Y,ut,$,et,ct)=>{let lt=Xe(rt,_t,ft,Y);return lt.position.set(ut,$,et),lt.rotation.y=ct,o.group.add(lt),lt},H={bg:["#1f8de6","#14609f"],fg:"#ffffff",stroke:"#06223d",border:"#ffd23f"};for(let rt of M){let _t=g*rt;U("CAR STATION",20,4.6,H,_t-11.8,8.8,x,-Math.PI/2),U("CAR STATION",20,4.6,H,_t+11.8,8.8,x,Math.PI/2);for(let[ft,Y]of[[16,-8],[34,-14]]){let ut=new k(new gt(.2,.2,4,8),new Xt({color:"#e8e8f0"}));ut.position.set(ft*rt,2,Y),o.group.add(ut),U(rt>0?"CAR STATION \u2192":"\u2190 CAR STATION",12,3.2,H,ft*rt,4.6,Y,0)}U("LONG ROAD \u2192 DRIVE THE WHOLE MAP",22,3.2,{bg:["#ff9f1c","#e0601a"],fg:"#ffffff",stroke:"#4a1c00",border:"#ffffff"},_t,5.2,-60,0)}}let L=8,D=7,R=1.2,C=6,z=-356,F=20261017,K=()=>(F=F*1664525+1013904223>>>0,F/4294967296),V=Array.from({length:D},()=>Array(D+1).fill(!0)),J=Array.from({length:D+1},()=>Array(D).fill(!0)),Z=Array.from({length:D},()=>Array(D).fill(!1)),ot=[[0,3]];for(Z[0][3]=!0;ot.length;){let[U,H]=ot[ot.length-1],rt=[];if(U+1<D&&!Z[U+1][H]&&rt.push([U+1,H]),U-1>=0&&!Z[U-1][H]&&rt.push([U-1,H]),H-1>=0&&!Z[U][H-1]&&rt.push([U,H-1]),H+1<D&&!Z[U][H+1]&&rt.push([U,H+1]),!rt.length){ot.pop();continue}let[_t,ft]=rt[Math.floor(K()*rt.length)];_t===U+1?J[U+1][H]=!1:_t===U-1?J[U][H]=!1:ft===H-1?V[U][H]=!1:V[U][H+1]=!1,Z[_t][ft]=!0,ot.push([_t,ft])}J[0][3]=!1,J[D][3]=!1;let mt=["#3fae4a","#58c25c","#2f9a44"];for(let U=0;U<D;U++)for(let H=0;H<=D;H++)V[U][H]&&o.platform((H-D/2)*L,C,z-(U+.5)*L,R,L+R,{h:C,color:mt[(U+H)%3],pad:!1});for(let U=0;U<=D;U++)for(let H=0;H<D;H++)J[U][H]&&o.platform((H+.5-D/2)*L,C,z-U*L,L+R,R,{h:C,color:mt[(U+H+1)%3],pad:!1});let Yt=new Map,At=[[0,3]];for(Yt.set("0,3",null);At.length;){let[U,H]=At.shift(),rt=[[U+1,H,J[U+1][H]],[U-1,H,U>0?J[U][H]:!0],[U,H-1,V[U][H]],[U,H+1,V[U][H+1]]];for(let[_t,ft,Y]of rt)!Y&&_t>=0&&_t<D&&ft>=0&&ft<D&&!Yt.has(_t+","+ft)&&(Yt.set(_t+","+ft,[U,H]),At.push([_t,ft]))}let kt=[];for(let U=[D-1,3];U;U=Yt.get(U[0]+","+U[1]))kt.unshift([(U[1]+.5-D/2)*L,z-(U[0]+.5)*L]);l.mazePath=kt,o.checkpoint(0,0,z+2,16),a.z=z-D*L,a.y=.15,u()}else if(i===4){o.waterY=-3,o.killY=-9,l.startArch=3;let m=((n|0)*9301+49297)%233280,y=()=>(m=(m*9301+49297)%233280)/233280,p=r.plat,g=c(22,22,{gap:-4,color:p[3]});h(g,4);let E=c(21,30,{color:p[1]}),S=(Y,ut)=>{let $=Array.from({length:Y},()=>y()<.62);return $.every(Boolean)&&($[ut]=!1),$};o.doorWall(0,E.top,E.near-7,21,7,S(7,2+Math.floor(y()*3))),o.doorWall(0,E.top,E.near-20,21,5,S(5,Math.floor(y()*5))),h(E,27);let x=5,_=a.z-5;for(let Y=0;Y<x;Y++)for(let ut=0;ut<3;ut++)o.tile((ut-1)*7.5,a.y,_-Y*8,5.4,5.4,{period:7,solidT:5.2,warn:1.2,off:ut*2.33+Y*1.3,color:p[(Y+ut)%5]});a.z=_-(x-1)*8-5.4/2-3.2;let M=c(20,14,{color:p[2]});h(M,4);let w=c(10,56,{color:p[4]});[[6,14,1],[20,28,-1],[34,42,1],[46,54,-1]].forEach(([Y,ut,$])=>o.fan(($>0,-5),5,w.near-ut,w.near-Y,w.top-.5,w.top+5,$*4.6,0)),h(w,54);let v=c(16,12,{color:p[0]}),b=(Y,ut,$=4.2)=>{let et=a.z,ct=c(9,10,{gap:Y,color:p[Math.floor(y()*5)]});return o.swing(0,ct.top+8.5,et-Y/2,9,.95,$,ut),ct};b(14,0);let A=b(15,1.9);h(A,4);let P=b(16,3.9,4.6),L=c(14,12,{color:p[1],gap:0});h(L,4);let D=c(14,10,{color:p[2]}),R=34,C=18,z=D.top,F=D.far-5.5;if(o.mover(0,z,F,9,7,Y=>{let ut=.5-.5*Math.cos(2*Math.PI*Y/C);return[0,0,-R*ut]},{h:1.2,color:"#b5651d",padColor:"#e8c48a",stripes:!1}),!o.headless){let Y=new yt;o.add(Y);let ut=new k(new be(2,3.2,4),o.mat("#b5651d"));ut.rotation.x=-Math.PI/2,ut.rotation.z=Math.PI/4,ut.position.set(0,-.3,-5.1),Y.add(ut);let $=new k(new gt(.12,.12,4.5,8),o.mat("#ffffff"));$.position.set(0,2.2,1.6),Y.add($);let et=new k(new jt(.1,1.1,1.8),o.mat(r.hazard));et.position.set(0,3.9,.7),Y.add(et);let ct=[-1,1].map(lt=>{let xt=new yt;xt.position.set(lt*4.5,.9,0);let Ot=new k(new jt(.16,.16,5.4),o.mat("#7a4a1e"));Ot.position.set(lt*1.2,0,0),Ot.rotation.y=0;let Gt=new k(new jt(.9,.12,1.4),o.mat("#ffd23f"));return Gt.position.set(lt*2,0,0),xt.add(Ot,Gt),xt.rotation.y=lt*1.5,Y.add(xt),{pv:xt,sd:lt}});o.updaters.push(lt=>{let xt=.5-.5*Math.cos(2*Math.PI*lt/C);Y.position.set(0,z,F-R*xt),ct.forEach(({pv:Ot,sd:Gt})=>{Ot.rotation.z=Math.sin(lt*3.2)*.35*Gt}),et.rotation.y=Math.sin(lt*5)*.2})}a.z=D.far-45;let K=c(14,12,{gap:0,color:p[3]});h(K,4),l.cannon={x:-4.5,z:D.far+3.5,vy:Xp,push:[0,-x_]},o.cannon(l.cannon.x,l.cannon.z,Xp,l.cannon.push),l.boatFar=K;let V=c(14,44,{color:p[0]});[8,22,36].forEach((Y,ut)=>o.hammer(0,V.top+11.6,V.near-Y,10,{amp:1,omega:1.5,phase:ut*2.1,r:2,span:9,baseY:V.top-.5})),h(V,42);let J=c(12,8,{color:p[4]});for(let Y=0;Y<4;Y++)o.seesaw(0,a.y+.4,a.z-5.5-Y*13.5,8,11,.9,3.6+Y%2*.6,Y*2.1);a.z-=4*13.5+0;let Z=c(14,10,{color:p[2],gap:0});h(Z,4);let ot=c(14,64,{color:p[3]});[[-4.6,[0,1.9]],[0,[.95,2.85]],[4.6,[1.9,3.8]]].forEach(([Y,ut])=>o.balls(Y,ot.far,ot.near,()=>0,1.5,10,3.8,ut)),h(ot,60);let mt=c(10,8,{color:p[1]}),Yt=a.z-1.3-9.5;o.disc(0,0,Yt,9.5,{color:p[4]}),o.bar(0,.4,Yt,17,{omega:1,h:.9,w:1,arms:1}),a.z=Yt-9.5-1.3;let At=c(12,8,{color:p[2],gap:0});h(At,4);let kt=c(14,12,{color:p[0]});o.disc(0,0,kt.far+1.5,3.2,{bounce:30,color:r.hazard});let U=c(12,12,{gap:7,dy:7,color:p[4]});o.disc(0,7,U.far+1.5,3.2,{bounce:30,color:r.hazard});let H=c(12,12,{gap:7,dy:7,color:p[1]});h(H,4),o.ramp(0,H.far,14,H.far-46,0,8,{conv:[0,-14],ice:!0,color:p[2],padColor:"#ffffff"}),a.z=H.far-46,a.y=0;let rt=c(14,12,{gap:0,color:p[3]});h(rt,4);let _t=b(15,.7,3.8),ft=b(16,2.8,4);h(ft,4),u()}else if(i===5){o.waterY=-1.5,o.killY=-8,l.startArch=3;let m=((n|0)*7919+12345)%233280,y=()=>(m=(m*9301+49297)%233280)/233280,p=r.plat,g=c(36,22,{gap:-4,color:p[3]});h(g,4);let E=16,S=a.z-E/2,x=["#e63946","#f5f5f5","#2b2b2b","#2ecc71","#3a86ff"],_=["red","white","black","green","blue"],M=Math.floor(y()*5);l.tunnelReal=M,l.tunnelNames=_;for(let At=0;At<5;At++){let kt=(At-2)*7;o.platform(kt,0,S,7,E,{color:x[At],pad:!1}),o.platform(kt,5,S,7,E,{h:.5,color:x[At],pad:!1}),At!==M&&o.platform(kt,4.5,S-E/2+.5,6,1,{h:4.5,color:x[At],pad:!1})}for(let At=-3;At<=2;At++)o.platform(At*7+3.5,4.5,S,1,E,{h:4.5,color:"#e8e2f5",pad:!1});a.z=S-E/2;let w=c(36,10,{color:p[1]});h(w,4);let v=8,b=.55,A=c(10,8,{color:p[2]}),P=a.z-1.5;o.ferris(0,v,P-0,v,6,b);let L=P-v-3.5,D=L-14;o.platform(0,v,(L+D)/2,8,14,{color:p[0],h:1}),o.checkpoint(0,v,L-3.5,8);let R=D-1-2.5-v;o.ferris(0,v,R,v,6,b),a.z=R-1.5,a.y=0;let C=c(10,10,{color:p[4],gap:0});h(C,4),l.ferris={cz1:P,cz2:R,R:v,om:b,deckNear:L,deckFar:D};let z=y_;l.fan={x:0,z:a.z-z/2,top:0,vy:Yp,push:[0,-v_]},o.disc(0,0,l.fan.z,4.8,{bounce:Yp,push:l.fan.push,fan:!0,color:r.hazard});let F=c(14,22,{gap:z,color:p[0]});h(F,3),o.disc(-3.5,0,F.near-7,2.2,{bounce:18,color:p[1]}),o.disc(3.5,0,F.near-11,2.2,{bounce:20,color:p[2]}),l.tramp={x:0,z:F.far+2.5,vy:qp,push:[0,-__]},o.disc(0,0,l.tramp.z,2.4,{bounce:qp,push:l.tramp.push,color:r.hazard});let K=c(22,10,{gap:M_,color:p[3]});h(K,3);let V=34,J=5,Z=24,ot=K.far-2-J;o.flagShuttle(-5.5,0,ot,V,Z,0,9,10,"pk"),o.flagShuttle(5.5,0,ot,V,Z,Math.PI,9,10,"es"),l.shuttle={z0:ot,D:V,T:Z,dp:10},a.z=ot-V-J-2,a.y=0;let mt=c(22,12,{gap:0,color:p[1]});h(mt,4);let Yt=c(22,64,{color:p[2]});for(let At=0;At<5;At++)o.bar(-3,.1,Yt.near-9-At*10.5,16,{omega:At%2?-1.25:1.25,h:2.4,w:1,arms:1,phase:At*1.3});o.platform(8.3,.04,Yt.cz,5,62,{color:"#7be495",pad:!1,h:.3}),l.cutters={x:-3,len:16,safeX:[5.9,10.8]},h(Yt,60),u()}else if(i===3){l.startArch=99,l.spawn={x:0,y:0,z:-10},o.checkpoints.push({x:0,y:0,z:0,w:14,spawn:[0,0,-10]}),o.waterY=-40,o.killY=-60;let m=6,y=-114,p=30,g=["#d9e6f7","#cfe0f5"];o.platform(0,0,(m+y)/2,120,120,{h:2,color:"#efe3c8",pad:!1}),o.platform(-61,p,(m+y)/2,2,124,{h:p,color:g[0],pad:!1}),o.platform(61,p,(m+y)/2,2,124,{h:p,color:g[0],pad:!1}),o.platform(0,p,m+1,124,2,{h:p,color:g[1],pad:!1}),o.platform(0,p,y-1,124,2,{h:p,color:g[1],pad:!1});let E=-40,S=16;o.ramp(E,-6,0,-46,S,8,{color:"#f2a65a",padColor:"#ffe3b8"}),o.platform(E,S,-52,12,12,{h:3,color:"#f2a65a",padColor:"#ffe3b8"}),o.ramp(E,-58,S,-100,0,8,{conv:[0,-14],ice:!0,color:"#5bc0eb",padColor:"#ffffff"}),l.slide={x:E,top:S,zTop:-58,zEnd:-100},l.pads=[[22,-28],[46,-28],[22,-88],[46,-88]];for(let[x,_]of l.pads)o.bungee(x,_,0,5.5,30,15);l.finishZ=-99999,l.finishY=99999,l.finishPlat={far:y}}else i===6?(Wp(o,r,l,n),l.finishZ=-99999,l.finishY=99999,l.finishPlat={far:Ir().endZ}):i===2?(Up(o,r,l,n),l.finishZ=-99999,l.finishY=99999,l.finishPlat={far:zi().dr.endZ}):(bp(o,r,l),l.finishZ=-99999,l.finishY=99999,l.finishPlat={far:-230});o.finalize();let d=l.finishPlat;return l.length=-l.finishZ,l.checkpoints=o.checkpoints,l.endZ=d.far,{world:o,info:l}}function $p(){return{x:0,y:0,z:0,vx:0,vy:0,vz:0,yaw:Math.PI,grounded:!1,ground:null,coyote:0,jumpBuf:0,stun:0,dive:0,diveCd:0,noSnap:0,hitCd:0,immune:0,boost:0,jumping:!1,noCtrl:0,landSpeed:0,inWater:!1,events:[],moveT:0,yawOff:0,swim:0,waterSurf:0}}var E_=(i,t)=>{let e=(t-i)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e};function Ac(i,t,e,n){let s=t-i.vx,r=e-i.vz,o=Math.hypot(s,r);o<=n||o<1e-6?(i.vx=t,i.vz=e):(i.vx+=s/o*n,i.vz+=r/o*n)}function Jp(i,t,e,n){t.coyote=t.grounded?.11:t.coyote-e,t.jumpBuf=n.jumpPressed?.13:t.jumpBuf-e,t.immune>0&&(t.immune-=e),t.stun>0&&(t.stun=Math.max(0,t.stun-e),t.stun<=0&&(t.immune=1)),t.dive>0&&(t.dive=Math.max(0,t.dive-e)),t.diveCd>0&&(t.diveCd-=e),t.noSnap>0&&(t.noSnap-=e),t.hitCd>0&&(t.hitCd-=e),t.boost>0&&(t.boost-=e),t.noCtrl>0&&(t.noCtrl-=e);let s=0,r=0;for(let f of i.pools)if(t.x>f.x0&&t.x<f.x1&&t.z>f.z0&&t.z<f.z1){let u=f.surf-t.y;u>.12&&(s=Math.min(1,u/.9),r=f.surf);break}s>.3&&t.swim<=.3&&(t.events.push("splash"),t.waterSurf=r),t.swim=s;let o=t.stun<=0&&t.dive<=0&&t.noCtrl<=0,a=t.ground&&t.ground.ice,l=Math.abs(n.mx)+Math.abs(n.mz)>.01;if(n.divePressed&&t.diveCd<=0&&t.stun<=0&&t.dive<=0){let f=Math.sin(t.yaw),u=Math.cos(t.yaw);t.vx=f*15.5,t.vz=u*15.5,t.vy=t.grounded?7:Math.max(t.vy,3.5),t.grounded=!1,t.ground=null,t.noSnap=.2,t.dive=.85,t.diveCd=1.1,t.events.push("dive")}if(o){let f=ve.RUN*(t.boost>0?1.45:1)*(t.speedMul||1)*(1-.34*s);if(l){let u=t.grounded?a?ve.ICE_ACC:ve.ACC:ve.AIR;Ac(t,n.mx*f,n.mz*f,u*e);let d=Math.atan2(n.mx,n.mz);t.yaw+=E_(t.yaw,d)*(1-Math.exp(-20*e))}else t.grounded?Ac(t,0,0,(a?ve.ICE_DEC:ve.DEC)*e):Ac(t,0,0,ve.AIR_DEC*e)}else{let f=t.grounded?a?1.2:9:.6;Ac(t,0,0,f*e)}if(s>.4&&n.jumpPressed&&t.stun<=0?(t.vy=9,t.grounded=!1,t.ground=null,t.noSnap=.2,t.jumpBuf=0,t.events.push("stroke")):t.jumpBuf>0&&(t.grounded||t.coyote>0)&&t.stun<=0&&t.dive<=.45&&(t.vy=ve.JUMP*(t.jumpMul||1),t.grounded=!1,t.ground=null,t.coyote=0,t.jumpBuf=0,t.noSnap=.2,t.jumping=!0,t.events.push("jump")),t.jumping&&!n.jumpHeld&&t.vy>6&&(t.vy-=55*e),t.vy=Math.max(ve.TERM,t.vy-ve.G*e*(t.dive>0&&!t.grounded?.8:1)*(1-.92*s)),s>.05){let f=r-(n.jumpHeld?.3:.95);t.vy+=(f-t.y)*26*e*s,t.vy*=Math.exp(-2.4*e*s)}for(let f of i.zones){let u=t.x-f.x,d=t.z-f.z;if(u*u+d*d<f.r*f.r&&t.y>f.y0-.3&&t.y<f.y1){let m=Math.max(0,(t.y-f.y0)/(f.y1-f.y0)),y=f.vmax*(1-m*m);t.vy<y&&(t.vy=Math.min(y,t.vy+f.lift*e)),t.noSnap=Math.max(t.noSnap,.12),t.air||(t.air=!0,t.events.push("air"))}else t.air=!1}for(let f of i.winds)if(t.x>f.x0&&t.x<f.x1&&t.z>f.z0&&t.z<f.z1&&t.y>f.y0-.5&&t.y<f.y1){let u=t.grounded?1:.75;t.x+=f.ax*u*e,t.z+=f.az*u*e}if(t.grounded&&t.ground){let f=t.ground.conv;f&&(t.x+=f[0]*e,t.z+=f[1]*e),t.ground.boost&&(t.boost=.55)}let c=t.grounded,h=t.y;if(t.x+=t.vx*e,t.z+=t.vz*e,i.resolveHorizontal(t),i.resolveHorizontal(t),t.y+=t.vy*e,t.grounded=!1,t.ground=null,t.vy<=0){let f=i.findGround(t,h,c);if(f){let u=-t.vy;t.y=f.top,t.vy=0,t.grounded=!0,t.ground=f.s,t.jumping=!1,f.s.bounce?(t.vy=f.s.bounce,t.grounded=!1,t.ground=null,t.noSnap=.25,t.jumping=!1,f.s.push&&(t.vx=f.s.push[0],t.vz=f.s.push[1],t.noCtrl=.9),f.s.squash!==void 0&&(f.s.squash=1),t.events.push("bounce")):!c&&u>6&&(t.landSpeed=u,t.events.push("land"))}}else{let f=i.hitCeiling(t,h);f&&(t.y=f.y0-ve.H,t.vy=Math.min(0,t.vy*.2))}return t.y<i.waterY-.2&&!t.inWater&&(t.inWater=!0,t.events.push("splash")),t.y<i.killY&&t.events.push("fell"),t}function Lr(i,t,e,n){return i.hitCd>0||i.shield>0?!1:(i.vx=t*n,i.vz=e*n,i.vy=Math.max(i.vy,6.5),i.grounded=!1,i.ground=null,i.noSnap=.25,i.stun=.95,i.dive=0,i.hitCd=.5,i.events.push("hit"),!0)}function Rc(i,t,e,n,s){i.x=t,i.y=e,i.z=n,i.vx=i.vy=i.vz=0,i.grounded=!1,i.ground=null,i.stun=0,i.dive=0,i.inWater=!1,i.hitCd=1,i.yaw=s!=null?s:Math.PI,i.noSnap=0,i.boost=0}var b_=(i,t,e)=>i<t?t:i>e?e:i,Cn=(i,t={})=>{var e,n,s;return new bo({color:i,roughness:(e=t.r)!=null?e:.3,clearcoat:(n=t.cc)!=null?n:.65,clearcoatRoughness:.25,metalness:(s=t.m)!=null?s:0})},je=(i,t=.55)=>new Xt({color:i,roughness:t}),Cf=(i,t,e)=>{let n=new k(new Zi(i,t,6,16),e);return n.castShadow=!0,n},_n=(i,t,e=16,n=12)=>{let s=new k(new ue(i,e,n),t);return s.castShadow=!0,s},Qp=je("#ffffff",.25),t0=je("#101018",.4);function If(i,t,e,n,s,r=.55){for(let o of[-1,1]){let a=_n(s,Qp);a.position.set(o*n,t,e);let l=_n(s*r,t0);l.position.set(0,0,s*.62),a.add(l),i.add(a)}}function Kp(i,t){let e=new $i;for(let n=0;n<10;n++){let s=-Math.PI/2+n*Math.PI/5,r=n%2?t:i,o=Math.cos(s)*r,a=Math.sin(s)*r;n?e.lineTo(o,a):e.moveTo(o,a)}return e.closePath(),e}var jp=[{name:"Bubbles",pivotY:.85},{name:"Ninja",pivotY:.95},{name:"Dino",pivotY:.8},{name:"Robo",pivotY:.9}],Cs=class{constructor(t){this.id=t,this.group=new yt,this.pivot=new yt,this.inner=new yt,this.group.add(this.pivot),this.pivot.add(this.inner),this.pivot.position.y=jp[t].pivotY,this.inner.position.y=-jp[t].pivotY,this.body=new yt,this.inner.add(this.body),this.t=Math.random()*10,this.phase=0,this.squash=0,this.tumble=0,this.lean=0,this.dive=0,this.wag=[],this.height=1.7,[this.buildBubbles,this.buildNinja,this.buildDino,this.buildRobo][t].call(this),this.makeBat(),this.makeExtras(),this.group.traverse(e=>{e.isMesh&&(e.castShadow=!0)})}limbs(t,e,n,s,r,o,a,l,c,h,f,u){let d=(m,y,p,g,E,S)=>{let x=new yt;x.position.set(m,y,0);let _=Cf(p,g,E);if(_.position.y=-g/2-p*.6,x.add(_),S){let M=S();x.add(M)}return this.inner.add(x),x};this.legL=d(-t,e,n,s,r,u?()=>{let m=_n(n*1.35,u);return m.scale.set(1,.6,1.5),m.position.set(0,-s-n*.55,n*.7),m}:null),this.legR=d(t,e,n,s,r,u?()=>{let m=_n(n*1.35,u);return m.scale.set(1,.6,1.5),m.position.set(0,-s-n*.55,n*.7),m}:null),this.armL=d(-o,a,l,c,h,f?()=>{let m=_n(l*1.45,f);return m.position.y=-c-l*.9,m}:null),this.armR=d(o,a,l,c,h,f?()=>{let m=_n(l*1.45,f);return m.position.y=-c-l*.9,m}:null),this.handY=-c-l*.9}makeExtras(){let t=this.height,e=new k(new ue(t*.64,22,14),new ae({color:"#7fd8ff",transparent:!0,opacity:.3,depthWrite:!1}));e.position.y=t*.52,e.visible=!1,this.group.add(e),this.shield=e;let n=Cn("#ffd23f",{m:.6,r:.25}),s=new yt,r=new k(new gt(.2,.17,.12,5),n);s.add(r);for(let o=0;o<5;o++){let a=o/5*Math.PI*2,l=new k(new be(.06,.2,6),n);l.position.set(Math.cos(a)*.17,.15,Math.sin(a)*.17),s.add(l)}s.position.y=t+.22,s.scale.setScalar(1.15),s.visible=!1,this.group.add(s),this.leadCrown=s}makeBat(){let t=Cn("#d9a15a",{r:.45,cc:.3}),e=je("#3a2412",.7),n=je("#ff3b3b",.5),s=new yt,r=new k(new gt(.035,.045,.5,10),e);r.position.y=-.18,s.add(r);let o=new k(new gt(.05,.125,.8,14),t);o.position.y=-.7,s.add(o);let a=new k(new ue(.125,12,8),t);a.scale.y=.5,a.position.y=-1.1,s.add(a);let l=new k(new Pe(.075,.018,6,16),n);l.rotation.x=Math.PI/2,l.position.y=-.52,s.add(l);let c=new k(new ue(.06,8,6),e);c.position.y=.07,s.add(c),s.position.set(0,this.handY,.02),s.visible=!1,s.traverse(h=>{h.isMesh&&(h.castShadow=!0)}),this.armR.add(s),this.bat=s}buildBubbles(){let t=Cn("#ff5fb4"),e=Cn("#d63a8d"),n=Cf(.47,.34,t);n.position.y=.3+.64,this.body.add(n),this.limbs(.2,.42,.13,.12,t,.5,.95,.11,.22,t,je("#ffffff",.3),je("#7a2cff",.4)),If(this.body,1.2,.4,.17,.13);for(let a of[-1,1]){let l=_n(.07,je("#ff8fcf"));l.scale.set(1.4,.8,.5),l.position.set(a*.3,1.04,.4),this.body.add(l)}let s=new k(new Ji(Kp(.17,.075),{depth:.04,bevelEnabled:!1}),Cn("#ffd23f",{m:.3}));s.position.set(0,.8,.455),this.body.add(s);let r=new yt;r.position.set(0,1.55,.02);let o=new k(new gt(.27,.3,.16,20),Cn("#ffd23f",{m:.55,r:.2}));r.add(o);for(let a=0;a<5;a++){let l=a/5*Math.PI*2,c=new k(new be(.065,.22,8),Cn("#ffd23f",{m:.55,r:.2}));c.position.set(Math.cos(l)*.23,.18,Math.sin(l)*.23),r.add(c);let h=_n(.04,je(a%2?"#35e0ff":"#ff3b6b",.2));h.position.set(Math.cos(l)*.23,.3,Math.sin(l)*.23),r.add(h)}this.body.add(r),this.crown=r,this.height=1.95}buildNinja(){let t=Cn("#2f6bff"),e=Cn("#14224f",{cc:.3}),n=Cf(.36,.76,t);n.position.y=.34+.74,this.body.add(n),this.limbs(.15,.55,.11,.3,e,.42,1.28,.09,.3,t,je("#14224f"),je("#0a0a14"));let s=new k(new gt(.372,.372,.22,24,1,!0),je("#0b0b17",.5));s.position.y=1.5,this.body.add(s);let r=new k(new ue(.372,24,8,0,Math.PI*2,0,Math.PI/2),je("#0b0b17",.5));r.scale.set(1,.96,1),r.position.y=1.46,this.body.add(r),If(this.body,1.5,.3,.14,.1,.65);let o=new k(new Pe(.31,.05,8,28),je("#ff2b4a",.4));o.rotation.x=Math.PI/2,o.position.y=1.64,this.body.add(o),this.tails=[];for(let h=0;h<2;h++){let f=new yt;f.position.set(h?.06:-.06,1.64,-.3);let u=new k(new jt(.1,.05,.6),je("#ff2b4a",.4));u.position.z=-.3,f.add(u),this.body.add(f),this.tails.push(f)}let a=new k(new Pe(.37,.05,8,28),je("#ffd23f",.4));a.rotation.x=Math.PI/2,a.position.y=.95,this.body.add(a);let l=new k(new Pe(.31,.07,8,24),je("#ffffff",.5));l.rotation.x=Math.PI/2,l.position.y=1.28,this.body.add(l);let c=new k(new Ji(Kp(.13,.04),{depth:.03,bevelEnabled:!1}),Cn("#d8e2ff",{m:.8,r:.2}));c.scale.set(1,1,1),c.position.set(0,.7,.34),this.body.add(c),this.height=1.95}buildDino(){let t=Cn("#3ddc84"),e=Cn("#c8ffd9"),n=Cn("#ff9f1c"),s=_n(.58,t,28,20);s.scale.set(1,1.08,.98),s.position.y=.3+.62,this.body.add(s);let r=_n(.45,e,22,16);r.scale.set(.85,.95,.5),r.position.set(0,.85,.36),this.body.add(r),this.limbs(.24,.42,.15,.1,t,.52,.85,.09,.12,t,null,je("#1f9d5b"));for(let c of[this.legL,this.legR])for(let h=-1;h<=1;h++){let f=new k(new be(.035,.12,6),Qp);f.rotation.x=Math.PI/2,f.position.set(h*.07,-.22,.36),c.add(f)}let o=_n(.3,t,18,12);o.scale.set(1,.7,.9),o.position.set(0,1,.5),this.body.add(o);for(let c of[-1,1]){let h=_n(.03,t0,8,6);h.position.set(c*.08,1.08,.76),this.body.add(h)}If(this.body,1.42,.34,.22,.17,.5);for(let c of[-1,1]){let h=new k(new be(.06,.2,8),je("#fff1c2",.4));h.position.set(c*.2,1.68,.18),h.rotation.z=-c*.25,this.body.add(h)}[.62,.8,1,1.2,1.38].forEach((c,h)=>{let f=[.13,.18,.21,.18,.13][h],u=new k(new be(f*.75,f*2,8),n),d=-Math.sqrt(Math.max(.02,.58*.58-(c-.92)*(c-.92)/1.17))-.02;u.position.set(0,c,d),u.rotation.x=-(1.15-h*.2),this.body.add(u)}),this.tail=new yt,this.tail.position.set(0,.55,-.45);let a=new k(new be(.22,.9,12),t);a.rotation.x=-Math.PI/2-.4,a.position.set(0,0,-.4),this.tail.add(a);let l=_n(.07,n);l.position.set(0,-.2,-.78),this.tail.add(l),this.body.add(this.tail),this.height=1.85}buildRobo(){let t=Cn("#ffc233"),e=Cn("#b4bdcc",{m:.7,r:.25}),n=je("#1c2233",.4),s=new ae({color:"#4ff3ff"}),r=new k(new Zi(.46,.4,6,16),t);r.scale.set(1,1,.92),r.position.y=.98,r.castShadow=!0,this.body.add(r);let o=new k(new jt(.64,.3,.12),n);o.position.set(0,1.28,.4),o.rotation.x=-.12,this.body.add(o);for(let f of[-1,1]){let u=_n(.075,s,10,8);u.scale.set(1,1.15,.5),u.position.set(f*.16,1.29,.47),this.body.add(u)}let a=new k(new jt(.26,.05,.05),n);a.position.set(0,1.03,.45),this.body.add(a);let l=new k(new jt(.34,.24,.06),e);l.position.set(0,.76,.43),l.rotation.x=-.05,this.body.add(l);for(let[f,u]of[[-.1,.82],[.1,.82],[-.1,.7],[.1,.7]]){let d=_n(.025,n,6,4);d.position.set(f,u,.47),this.body.add(d)}for(let f of[-1,1]){let u=new k(new gt(.1,.1,.16,12),e);u.rotation.z=Math.PI/2,u.position.set(f*.5,1.28,0),u.castShadow=!0,this.body.add(u)}let c=new k(new gt(.025,.025,.3,8),e);c.position.set(0,1.78,0),this.body.add(c);let h=_n(.075,je("#ff3b3b",.3),12,8);h.position.set(0,1.97,0),this.body.add(h),this.limbs(.2,.45,.12,.14,e,.52,.98,.1,.22,e,je("#ff4d4d",.4),je("#2b3347",.4)),this.height=2}update(t,e){this.t+=t;let n=b_(e.speed/10.5,0,1.3);e.grounded&&!e.stun&&(this.phase+=t*(5+n*11));let s=Math.sin(this.phase),r=n*.95;if(e.stun>0)this.tumble+=t*11,this.pivot.rotation.x=this.tumble,this.pivot.rotation.z=Math.sin(this.tumble*.5)*.4,this.legL.rotation.x=Math.sin(this.t*16)*1,this.legR.rotation.x=-Math.sin(this.t*16)*1,this.armL.rotation.z=-1.5+Math.sin(this.t*18)*.5,this.armR.rotation.z=1.5-Math.sin(this.t*18)*.5,this.armL.rotation.x=this.armR.rotation.x=0;else{let l=Math.round(this.tumble/(Math.PI*2))*Math.PI*2;this.tumble+=(l-this.tumble)*Math.min(1,t*14),this.pivot.rotation.z*=Math.max(0,1-t*12);let c=e.dive>0?1:0;this.dive+=(c-this.dive)*Math.min(1,t*16);let h=(e.grounded?n*.2:.05)+this.dive*1.35;if(this.lean+=(h-this.lean)*Math.min(1,t*14),this.pivot.rotation.x=this.tumble+this.lean,e.celebrate){let f=Math.abs(Math.sin(this.t*6))*.35;this.body.position.y=f,this.armL.rotation.z=-2.6+Math.sin(this.t*14)*.3,this.armR.rotation.z=2.6-Math.sin(this.t*14)*.3,this.armL.rotation.x=this.armR.rotation.x=0,this.legL.rotation.x=this.legR.rotation.x=0}else if(this.dive>.3)this.armL.rotation.x=this.armR.rotation.x=-2.9,this.armL.rotation.z=-.15,this.armR.rotation.z=.15,this.legL.rotation.x=this.legR.rotation.x=.2;else if(e.grounded){this.legL.rotation.x=s*r,this.legR.rotation.x=-s*r,this.armL.rotation.x=-s*r*.9,this.armR.rotation.x=s*r*.9;let f=Math.sin(this.t*2.2)*.04;this.armL.rotation.z=-.15-f-n*.2,this.armR.rotation.z=.15+f+n*.2}else{let f=e.vy>0;this.legL.rotation.x=f?.7:.35,this.legR.rotation.x=f?-.5:-.2,this.armL.rotation.z=-2.2,this.armR.rotation.z=2.2,this.armL.rotation.x=this.armR.rotation.x=0}e.celebrate||(this.body.position.y=e.grounded?Math.abs(s)*.07*n:0)}if(this.shield.visible=!!e.shield,e.shield){let l=1+Math.sin(this.t*8)*.04;this.shield.scale.set(l,l,l)}if(this.leadCrown.visible=!!e.leader,e.leader&&(this.leadCrown.rotation.y+=t*2.2,this.leadCrown.position.y=this.height+.22+Math.sin(this.t*3)*.05),this.bat.scale.setScalar(e.mega?1.6:1),e.swing>0&&!e.stun){let l=e.swing,c;if(l<.3)c=-2.95*(l/.3);else{let h=(l-.3)/.7;c=-2.95+2.75*(1-(1-h)*(1-h))}this.armR.rotation.x=c,this.armR.rotation.z=.12,this.pivot.rotation.x=this.tumble+this.lean+(l>.3?.28*Math.sin(Math.min(1,(l-.3)/.35)*Math.PI):0),this.bat.visible=!0}else this.bat.visible=!1;e.landed&&(this.squash=1),this.squash=Math.max(0,this.squash-t*5);let o=1-Math.sin(this.squash*Math.PI)*.22*this.squash;!e.grounded&&e.vy>2&&!e.stun&&(o=1.1),!e.grounded&&e.vy<-8&&(o=1.06);let a=1+(1-o)*.55;this.body.scale.set(a,o,a),this.tails&&this.tails.forEach((l,c)=>{l.rotation.x=-.15-n*.5+Math.sin(this.t*9+c)*.12*(.4+n),l.rotation.y=(c?1:-1)*(.15+Math.sin(this.t*7+c*2)*.12)}),this.tail&&(this.tail.rotation.y=Math.sin(this.t*(6+n*6))*(.35+n*.25)),this.crown&&(this.crown.rotation.z=Math.sin(this.t*5)*.05*n)}dispose(){this.group.traverse(t=>{if(t.isMesh){t.geometry.dispose();let e=t.material;(Array.isArray(e)?e:[e]).forEach(n=>n.dispose())}})}};function Dr(i,t="#ffffff"){let e=document.createElement("canvas");e.width=512,e.height=128;let n=e.getContext("2d");n.font='700 64px "Lilita One","Fredoka","Baloo 2","Trebuchet MS",Arial,sans-serif',n.textAlign="center",n.textBaseline="middle";let s=Math.min(480,n.measureText(i).width+56);n.fillStyle="rgba(12,10,36,0.72)";let r=(512-s)/2,o=14,a=100,l=50;n.beginPath(),n.moveTo(r+l,o),n.arcTo(r+s,o,r+s,o+a,l),n.arcTo(r+s,o+a,r,o+a,l),n.arcTo(r,o+a,r,o,l),n.arcTo(r,o,r+s,o,l),n.closePath(),n.fill(),n.lineWidth=6,n.strokeStyle=t,n.stroke(),n.lineWidth=8,n.strokeStyle="rgba(0,0,0,0.65)",n.strokeText(i,256,68,440),n.fillStyle="#ffffff",n.fillText(i,256,68,440);let c=new An(e);c.colorSpace=Fe,c.anisotropy=4;let h=new ao(new cr({map:c,transparent:!0,depthTest:!1,depthWrite:!1,fog:!1}));return h.renderOrder=999,h.scale.set(2.8,.7,1),h.userData.base=.7,h}var ta={fun:{top:"#35a7ff",horizon:"#e8fbff",bottom:"#fff6d8",fog:"#d9f4ff",fogNear:120,fogFar:640,sun:"#fff4d6",sunPos:[-40,90,-60],sunI:2.7,hemiSky:"#d4ecff",hemiGround:"#bfe8a0",hemiI:1.05,exp:1.05,waterA:"#37d7e8",waterB:"#1388c9",water:"water",env:.6},jungle:{top:"#3a9be8",horizon:"#dff6c9",bottom:"#f3ffd9",fog:"#cfeec0",fogNear:70,fogFar:380,sun:"#fff3c8",sunPos:[-50,85,-40],sunI:2.6,hemiSky:"#cfe9ff",hemiGround:"#6fbf5a",hemiI:1.05,exp:1.05,waterA:"#37d7e8",waterB:"#1388c9",water:"water",env:.55},annoy:{top:"#4a3aa8",horizon:"#ffb3d1",bottom:"#ffe9f3",fog:"#f5b8dc",fogNear:90,fogFar:520,sun:"#ffe0c8",sunPos:[-40,70,-60],sunI:2.4,hemiSky:"#e8d6ff",hemiGround:"#ffb7dc",hemiI:1.05,exp:1.05,waterA:"#7fe8ff",waterB:"#2b9be8",water:"water",env:.6},maze:{top:"#5cc8ff",horizon:"#ffe0f0",bottom:"#fff4fb",fog:"#ffd6ea",fogNear:90,fogFar:520,sun:"#fff0d8",sunPos:[-40,90,-60],sunI:2.7,hemiSky:"#ffe6f6",hemiGround:"#ffb7dc",hemiI:1.1,exp:1.05,waterA:"#7fe8ff",waterB:"#2b9be8",water:"water",env:.6},arena:{top:"#3a9be8",horizon:"#dff6c9",bottom:"#f3ffd9",fog:"#cfeec0",fogNear:70,fogFar:380,sun:"#fff3c8",sunPos:[-50,85,-40],sunI:2.6,hemiSky:"#cfe9ff",hemiGround:"#6fbf5a",hemiI:1.05,exp:1.05,waterA:"#37d7e8",waterB:"#1388c9",water:"water",env:.55},hunt:{top:"#2f8fd8",horizon:"#d6f0b8",bottom:"#eefad0",fog:"#bfe3a8",fogNear:60,fogFar:340,sun:"#fff0c0",sunPos:[-50,80,-40],sunI:2.5,hemiSky:"#cfe9ff",hemiGround:"#5fae52",hemiI:1.05,exp:1.02,waterA:"#37d7e8",waterB:"#1388c9",water:"water",env:.55},quest:{top:"#3a9be8",horizon:"#dff6c9",bottom:"#f3ffd9",fog:"#cfeec0",fogNear:70,fogFar:380,sun:"#fff3c8",sunPos:[-50,85,-40],sunI:2.6,hemiSky:"#cfe9ff",hemiGround:"#6fbf5a",hemiI:1.05,exp:1.05,waterA:"#37d7e8",waterB:"#1388c9",water:"water",env:.55}},Pf=null;function e0(){return Pf||(Pf=(async()=>{try{await Promise.race([Promise.all([document.fonts.load('400 100px "Lilita One"'),document.fonts.load('400 100px "Fredoka One"'),document.fonts.load('400 100px "Noto Nastaliq Urdu"',"\u0639\u06A9\u0631\u0645\u06C1")]),new Promise(i=>setTimeout(i,2500))])}catch{}})()),Pf}var Cc='"Lilita One","Fredoka One","Baloo 2","Arial Rounded MT Bold","Trebuchet MS",Impact,Arial,sans-serif';function Ic(i="HARIS",t=null,e=["#fff7a8","#ffc83d","#ff7a1a"]){let n=document.createElement("canvas");n.width=1024,n.height=t?512:400;let s=n.getContext("2d");s.textAlign="center",s.textBaseline="middle";let r=300;for(s.font=`${r}px ${Cc}`;s.measureText(i).width>900&&r>80;)r-=10,s.font=`${r}px ${Cc}`;let o=t?220:200;s.lineJoin="round",s.shadowColor="rgba(255,190,60,0.9)",s.shadowBlur=40,s.lineWidth=46,s.strokeStyle="rgba(255,170,40,0.35)",s.strokeText(i,512,o),s.shadowBlur=0,s.lineWidth=40,s.strokeStyle="#1b0f4a",s.strokeText(i,512,o),s.lineWidth=18,s.strokeStyle="#ffffff",s.strokeText(i,512,o),s.fillStyle="#b0420b";for(let c=14;c>0;c-=2)s.fillText(i,512,o+c);let a=s.createLinearGradient(0,o-r/2,0,o+r/2);a.addColorStop(0,e[0]),a.addColorStop(.55,e[1]),a.addColorStop(1,e[2]),s.fillStyle=a,s.fillText(i,512,o),s.globalCompositeOperation="source-atop",s.fillStyle="rgba(255,255,255,0.35)",s.fillRect(0,o-r/2,1024,r*.18),s.globalCompositeOperation="source-over",t&&(s.font=`90px ${Cc}`,s.lineWidth=16,s.strokeStyle="#1b0f4a",s.strokeText(t,512,440),s.fillStyle="#ffffff",s.fillText(t,512,440));let l=new An(n);return l.colorSpace=Fe,l.anisotropy=8,l}function S_(i,t="#ff3b6b",e="#ffffff"){let n=document.createElement("canvas");n.width=1024,n.height=256;let s=n.getContext("2d");s.fillStyle=t,s.fillRect(0,0,1024,256);let r=32;s.fillStyle=e;for(let a=0;a<1024;a+=r)for(let l=0;l<256;l+=r)(a+l)/r%2===0&&(l<r||l>=256-r)&&s.fillRect(a,l,r,r);s.font=`150px ${Cc}`,s.textAlign="center",s.textBaseline="middle",s.lineJoin="round",s.lineWidth=26,s.strokeStyle="#1b0f4a",s.strokeText(i,512,132),s.fillStyle="#fff",s.fillText(i,512,132);let o=new An(n);return o.colorSpace=Fe,o.anisotropy=8,o}function n0(){let i=document.createElement("canvas");i.width=128,i.height=128;let t=i.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,128,128),t.fillStyle="rgba(0,0,0,0.28)",t.beginPath(),t.moveTo(64,14),t.lineTo(108,70),t.lineTo(80,70),t.lineTo(80,112),t.lineTo(48,112),t.lineTo(48,70),t.lineTo(20,70),t.closePath(),t.fill();let e=new An(i);return e.colorSpace=Fe,e.anisotropy=4,e}function w_(i="rgba(255,255,255,1)",t="rgba(255,255,255,0)"){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d"),s=n.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,i),s.addColorStop(1,t),n.fillStyle=s,n.fillRect(0,0,128,128);let r=new An(e);return r.colorSpace=Fe,r}function Lf(i){let t=new O(...i.sunPos).normalize(),e=new sn({side:ln,depthWrite:!1,fog:!1,uniforms:{top:{value:new Ht(i.top)},horizon:{value:new Ht(i.horizon)},bottom:{value:new Ht(i.bottom)},sunDir:{value:t},sunColor:{value:new Ht(i.sun)}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); gl_Position.z = gl_Position.w; }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom; uniform vec3 sunDir; uniform vec3 sunColor; varying vec3 vD;
      void main(){ float h = vD.y; vec3 c = h>0.0 ? mix(horizon, top, pow(h, 0.55)) : mix(horizon, bottom, pow(-h, 0.45));
        float s = max(dot(normalize(vD), sunDir), 0.0); c += sunColor * (pow(s, 600.0)*3.0 + pow(s, 24.0)*0.35 + pow(s, 6.0)*0.12);
        gl_FragColor = vec4(c, 1.0); }`}),n=new k(new ue(900,32,16),e);return n.frustumCulled=!1,n.renderOrder=-10,n}function Df(i,t){let e=new Ht(i.fog),n=i.water==="lava"?1:i.water==="grid"?2:0,s=new sn({uniforms:{time:{value:0},cA:{value:new Ht(i.waterA)},cB:{value:new Ht(i.waterB)},fogC:{value:e},fogN:{value:i.fogNear},fogF:{value:i.fogFar},kind:{value:n}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform float time; uniform vec3 cA; uniform vec3 cB; uniform vec3 fogC; uniform float fogN; uniform float fogF; uniform float kind; varying vec3 vW;
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
      }`}),r=new k(new qe(1600,1600),s);return r.rotation.x=-Math.PI/2,r.position.y=t,r.frustumCulled=!1,r.renderOrder=-5,r.userData.mat=s,r}var jo=class{constructor(t=500){this.max=t,this.n=0,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*3),this.size=new Float32Array(t),this.alpha=new Float32Array(t),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.grav=new Float32Array(t),this.s0=new Float32Array(t);let e=new ze;e.setAttribute("position",new ke(this.pos,3).setUsage(Er)),e.setAttribute("color",new ke(this.col,3).setUsage(Er)),e.setAttribute("size",new ke(this.size,1).setUsage(Er)),e.setAttribute("alpha",new ke(this.alpha,1).setUsage(Er)),e.setDrawRange(0,0),this.mat=new sn({transparent:!0,depthWrite:!1,uniforms:{scale:{value:600}},vertexShader:"attribute float size; attribute float alpha; attribute vec3 color; varying float vA; varying vec3 vC; uniform float scale; void main(){ vA=alpha; vC=color; vec4 mv = modelViewMatrix*vec4(position,1.0); gl_PointSize = size*scale/max(1.0,-mv.z); gl_Position = projectionMatrix*mv; }",fragmentShader:"varying float vA; varying vec3 vC; void main(){ vec2 c = gl_PointCoord-0.5; float d = length(c); if(d>0.5) discard; gl_FragColor = vec4(vC, vA*smoothstep(0.5,0.1,d)); }"}),this.points=new dr(e,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,this.geo=e,this._c=new Ht}emit(t,e,n,s,r={}){var a,l,c,h,f,u,d,m;let o=this._c.set((a=r.color)!=null?a:"#ffffff");for(let y=0;y<s;y++){let p=this.n<this.max?this.n++:Math.floor(Math.random()*this.max),g=Math.random()*Math.PI*2,E=((l=r.speed)!=null?l:3)*(.3+Math.random()*.9),S=(c=r.up)!=null?c:3,x=p*3;this.pos[x]=t+(Math.random()-.5)*((h=r.spread)!=null?h:.3),this.pos[x+1]=e,this.pos[x+2]=n+(Math.random()-.5)*((f=r.spread)!=null?f:.3),this.vel[x]=Math.cos(g)*E,this.vel[x+1]=S*(.4+Math.random()*.9),this.vel[x+2]=Math.sin(g)*E;let _=r.rainbow?this._c.setHSL(Math.random(),.9,.6):o;this.col[x]=_.r,this.col[x+1]=_.g,this.col[x+2]=_.b,this.life[p]=this.maxLife[p]=((u=r.life)!=null?u:.6)*(.6+Math.random()*.8),this.s0[p]=((d=r.size)!=null?d:.35)*(.6+Math.random()*.8),this.size[p]=this.s0[p],this.grav[p]=(m=r.gravity)!=null?m:9,this.alpha[p]=1}}update(t){for(let e=0;e<this.n;e++){if(this.life[e]<=0){this.alpha[e]=0,this.size[e]=0;continue}this.life[e]-=t;let n=e*3;this.vel[n+1]-=this.grav[e]*t,this.pos[n]+=this.vel[n]*t,this.pos[n+1]+=this.vel[n+1]*t,this.pos[n+2]+=this.vel[n+2]*t;let s=Math.max(0,this.life[e]/this.maxLife[e]);this.alpha[e]=Math.min(1,s*1.6),this.size[e]=this.s0[e]*(.4+.6*s)}this.geo.setDrawRange(0,this.n),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,this.geo.attributes.size.needsUpdate=!0,this.geo.attributes.alpha.needsUpdate=!0}setScale(t){this.mat.uniforms.scale.value=t*.9}},Qo=class{constructor(t,e=350){this.kind=t,this.n=e;let n=new Float32Array(e*3);this.seed=new Float32Array(e*3);for(let o=0;o<e*3;o++)this.seed[o]=Math.random();let s=new ze;s.setAttribute("position",new ke(n,3));let r={fun:"#fff6a8",jungle:"#fffbb0",quest:"#fff6c0",hunt:"#fff6c0",maze:"#ffe6f6",annoy:"#ffe6f6"};this.mat=new ur({color:r[t]||"#fff",size:t==="frost"?.28:.22,transparent:!0,opacity:.85,depthWrite:!1,map:w_(),blending:t==="neon"||t==="canyon"?Pi:es}),this.points=new dr(s,this.mat),this.points.frustumCulled=!1,this.pos=n}update(t,e){let r=this.kind,o=this.pos,a=this.seed;for(let l=0;l<this.n;l++){let c=l*3,h=a[c]*70,f=a[c+1]*36,u=a[c+2]*70;r==="frost"?(f=36-(t*(2+a[c]*2)+a[c+1]*36)%36,h+=Math.sin(t*.7+l)*1.2):r==="canyon"?(f=(t*(1.5+a[c]*2)+a[c+1]*36)%36,h+=Math.sin(t*.9+l)*.8):(f+=Math.sin(t*.6+l)*.8,h+=Math.cos(t*.4+l*1.3)*.8),o[c]=e.x+((h-e.x)%70+70)%70-70/2,o[c+1]=e.y-36/2+f,o[c+2]=e.z+((u-e.z)%70+70)%70-70/2}this.points.geometry.attributes.position.needsUpdate=!0}};function T_(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function i0(i,t,e,n){let s=ta[t],r=new yt;r.name="scenery";let o=T_(t.length*9973+17),a=new Ni,l=new Ni,c=e.length,h=-c-40,f=0,u=82,d=[],m=(_,M)=>(o()<.5?-1:1)*(_+u+o()*(M-_)),y=_=>_[Math.floor(o()*_.length)],p=(_,M=16,w=10)=>new ue(_,M,w),g=(_,M,w,v=14)=>new gt(_,M,w,v),E=(_,M,w=14)=>new be(_,M,w);if(t==="fun"){for(let _=0;_<46;_++){let M=70-o()*(c+200),w=m(26,140),v=1+o()*1.8,b=o(),A=f-1;if(b<.4){let P=y(["#ff4d6d","#3ec6e0","#ffd23f","#8b5cf6"]);a.add(g(6*v,6*v,5*v,16),w,A+2.5*v,M,P),a.add(E(6.8*v,5*v,16),w,A+7.5*v,M,"#ffffff"),a.add(E(1.1*v,3*v,8),w,A+11*v,M,P),a.add(g(.12*v,.12*v,4*v,4),w,A+14*v,M,"#ffffff")}else if(b<.7){for(let P=0;P<8;P++)a.add(g(2.2*v,2.2*v,2.4*v,12),w,A+(1.2+P*2.4)*v,M,P%2?"#ffffff":"#ff4d6d");a.add(E(3*v,4*v,12),w,A+21*v,M,"#ffd23f")}else a.add(g(.3*v,.4*v,9*v,6),w,A+4.5*v,M,"#5b2a86"),l.add(p(1.1*v,10,8),w,A+9.6*v,M,y(["#ffe27a","#ff9ccb","#9cf0ff"]))}[[-120,-c*.25],[140,-c*.62],[-130,-c*.9]].forEach(([_,M],w)=>{let v=new yt;v.position.set(_,f+34,M),v.rotation.y=w%2?.5:-.5;let b=new k(new Pe(30,.9,8,48),new Xt({color:"#ffffff",roughness:.4}));v.add(b);let A=new Xt({color:"#ff4d6d"});for(let D=0;D<8;D++){let R=new k(g(.35,.35,60,5),A);R.rotation.z=D*Math.PI/8,v.add(R)}let P=[];for(let D=0;D<12;D++){let R=D/12*Math.PI*2,C=new k(new jt(4.4,3.4,3.4),new Xt({color:y(["#ffd23f","#3ec6e0","#ff4d6d","#8bd450"]),roughness:.35}));C.position.set(Math.cos(R)*30,Math.sin(R)*30-2,0),v.add(C),P.push([C,R])}let L=new Xt({color:"#5b2a86"});for(let D of[-1,1]){let R=new k(g(1.2,1.6,44,6),L);R.position.set(D*11,-20,0),R.rotation.z=D*-.28,v.add(R)}r.add(v),d.push(D=>{let R=D*.12*(w%2?-1:1);b.rotation.z=R,v.children.forEach(C=>{var z,F;C.geometry&&C.geometry.type==="CylinderGeometry"&&C.position.x===0&&C.position.y===0&&(C.rotation.z=((F=(z=C.userData).b)!=null?F:z.b=C.rotation.z)+R)}),P.forEach(([C,z])=>C.position.set(Math.cos(z+R)*30,Math.sin(z+R)*30-2,0))})});for(let _=0;_<26;_++){let M=new yt,w=y(["#ff5fa8","#ffd84d","#4dd0ff","#9b7bff","#5ee89a"]),v=new k(p(1.6,16,12),new Xt({color:w,roughness:.25}));v.scale.y=1.2;let b=new k(g(.03,.03,4,4),new ae({color:"#ffffff"}));b.position.y=-3,M.add(v,b),M.position.set(m(14,80),8+o()*34,40-o()*(c+120)),M.userData.ph=o()*6,r.add(M),d.push(A=>{M.position.y+=Math.sin(A*.8+M.userData.ph)*.004,M.rotation.z=Math.sin(A*.6+M.userData.ph)*.08})}}else if(t==="jungle"){for(let _=0;_<90;_++){let M=o()*Math.PI*2,w=120+o()*90,v=150+o()*90,b=Math.cos(M)*w,A=-108+Math.sin(M)*v,P=1.4+o()*2.4;a.add(g(.7*P,1*P,9*P,6),b,4.5*P,A,"#6b4423"),a.add(p(4.4*P,8,6),b,11*P,A,y(["#2e9b3f","#3fb14c","#27863a"]))}for(let _=0;_<16;_++){let M=_/16*Math.PI*2+o()*.3,w=Math.cos(M)*(260+o()*60),v=-108+Math.sin(M)*(300+o()*60),b=1+o()*1.4;a.add(E(40*b,70*b,7),w,30*b,v,y(["#5f9a7a","#6aa88a","#4f8a6c"])),a.add(E(14*b,20*b,7),w,66*b,v,"#ffffff")}for(let _=0;_<26;_++){let M=new yt,w=(o()-.5)*520,v=-108+(o()-.5)*520,b=85+o()*50,A=3+Math.floor(o()*3);for(let P=0;P<A;P++){let L=new k(p(7+o()*6,10,8),new ae({color:"#ffffff",transparent:!0,opacity:.9,fog:!1}));L.position.set(P*9-A*4,o()*3,o()*5),L.scale.y=.55,M.add(L)}M.position.set(w,b,v),M.userData.ph=o()*6,r.add(M),d.push(P=>{M.position.x+=.012*(1+M.userData.ph%1),M.position.x>300&&(M.position.x=-300)})}}else if(t==="quest"||t==="hunt"||t==="maze"||t==="annoy")for(let _=0;_<40;_++){let M=new yt,w=(o()-.5)*420,v=40-o()*(t==="maze"?860:640),b=70+o()*50,A=3+Math.floor(o()*3);for(let P=0;P<A;P++){let L=new k(p(6+o()*6,10,8),new ae({color:"#ffffff",transparent:!0,opacity:.9,fog:!1}));L.position.set(P*8-A*4,o()*3,o()*5),L.scale.y=.55,M.add(L)}M.position.set(w,b,v),M.userData.ph=o()*6,r.add(M),d.push(P=>{M.position.x+=.012*(1+M.userData.ph%1),M.position.x>260&&(M.position.x=-260)})}if(t==="maze"){let _=["#ff6b9d","#ffd23f","#4cc9f0","#80ed99","#b58cff","#ff9f1c"];for(let M=0;M<100;M++){let w=30-M*8.6-o()*4,v=M%2?1:-1,b=v*(24+o()*55),A=_[Math.floor(o()*_.length)],P=Math.floor(o()*3),L=.8+o()*.9;P===0?(a.add(g(.6*L,.6*L,16*L,8),b,-3+8*L,w,"#ffffff"),a.add(p(4.4*L,18,12),b,-3+17*L,w,A),a.add(new Pe(3*L,.55*L,8,20),b,-3+17*L,w+3.4*L,"#ffffff")):P===1?(a.add(new Pe(5*L,2.2*L,10,22).rotateX(Math.PI/2),b,-2.2+2.2*L,w,"#e8b878"),a.add(new Pe(5*L,1.7*L,10,22).rotateX(Math.PI/2),b,-2.2+3.1*L,w,A)):(a.add(E(3.4*L,9*L,14).rotateX(Math.PI),b,-3+4.5*L,w,"#e8b878"),a.add(p(3.8*L,16,10),b,-3+10*L,w,A),a.add(p(1.2*L,10,8),b,-3+14*L,w,"#ff3d68"))}}let S=a.build(new Xt({vertexColors:!0,roughness:.55}));S&&(S.castShadow=!1,S.receiveShadow=!1,r.add(S));let x=l.build(new ae({vertexColors:!0,toneMapped:!1}));if(x&&r.add(x),t!=="jungle"&&t!=="quest"&&t!=="arena"&&t!=="hunt"){let _=new yt;_.name="brand",r.add(_);let M=Ic("HARIS","MADE THIS GAME"),w=e.finishPlat,v=P=>new Xt({color:P,roughness:.4}),b=(P,L,D,R,C)=>{let z=new yt;z.position.set(0,L,P);let F=v("#2b1c6b");for(let J of[-1,1]){let Z=new k(new jt(1.2,9,1.2),F);Z.position.set(J*D/2,4.5,0),Z.castShadow=!0,z.add(Z)}let K=new k(new qe(D,D/4),new ae({map:S_(R,C),toneMapped:!1,side:$e}));K.position.set(0,8.6,.05),z.add(K);let V=new k(new jt(D+1.2,.6,1.2),F);V.position.set(0,10.4,0),z.add(V),_.add(z)};b(e.startArch,0,20,"START","#22c55e"),b(e.finishZ+.01,w.top,19,"FINISH","#ef233c");let A=new k(new qe(30,15),new ae({map:M,transparent:!0,toneMapped:!1,depthWrite:!1,fog:!1}));A.position.set(0,w.top+21,e.finishZ-.5),_.add(A),d.push(P=>{A.position.y=w.top+21+Math.sin(P*1.2)*.4})}return i.add(r),{group:r,update(_,M){for(let w of d)w(_);r.userData.stars&&r.userData.stars.position.copy(M)},dispose(){i.remove(r),r.traverse(_=>{_.geometry&&_.geometry.dispose(),_.material&&(Array.isArray(_.material)?_.material:[_.material]).forEach(w=>{w.map&&w.map.dispose(),w.dispose()})})}}}var ce=null,Is=null,Nr=null,fs=null,Lc=null,s0=!1;var Pc=null,hs=null;function Fi(){if(ce){ce.state==="suspended"&&ce.resume();return}let i=window.AudioContext||window.webkitAudioContext;if(!i)return;ce=new i,Is=ce.createGain(),Is.gain.value=s0?0:.9,Is.connect(ce.destination),Nr=ce.createGain(),Nr.gain.value=.7,Nr.connect(Is),fs=ce.createGain(),fs.gain.value=.22,fs.connect(Is);let t=ce.sampleRate;Lc=ce.createBuffer(1,t,ce.sampleRate);let e=Lc.getChannelData(0);for(let n=0;n<t;n++)e[n]=Math.random()*2-1}function r0(i){s0=i,Is&&Is.gain.setTargetAtTime(i?0:.9,ce.currentTime,.05)}function ne(i,t,e,n,s=.3,r=0,o=Nr){if(!ce)return;let a=ce.currentTime+r,l=ce.createOscillator(),c=ce.createGain();l.type=i,l.frequency.setValueAtTime(t,a),e!==t&&l.frequency.exponentialRampToValueAtTime(Math.max(20,e),a+n),c.gain.setValueAtTime(1e-4,a),c.gain.exponentialRampToValueAtTime(s,a+.012),c.gain.exponentialRampToValueAtTime(1e-4,a+n),l.connect(c),c.connect(o),l.start(a),l.stop(a+n+.05)}function Ln(i,t,e,n,s,r=0,o=1){if(!ce)return;let a=ce.currentTime+r,l=ce.createBufferSource();l.buffer=Lc,l.loop=!0;let c=ce.createBiquadFilter();c.type=e,c.Q.value=o,c.frequency.setValueAtTime(n,a),c.frequency.exponentialRampToValueAtTime(Math.max(30,s),a+i);let h=ce.createGain();h.gain.setValueAtTime(1e-4,a),h.gain.exponentialRampToValueAtTime(t,a+.015),h.gain.exponentialRampToValueAtTime(1e-4,a+i),l.connect(c),c.connect(h),h.connect(Nr),l.start(a),l.stop(a+i+.05)}var A_=(i,t)=>i+Math.random()*(t-i),Et={click(){ne("triangle",520,780,.09,.25)},roar(i=1){ne("sawtooth",i?180:260,i?60:110,.5,.22),ne("square",i?120:200,50,.4,.12,.03),Ln(.4,.14,"lowpass",800,200)},tame(){ne("triangle",520,780,.12,.25),ne("triangle",660,990,.12,.25,.1),ne("triangle",880,1320,.2,.25,.2)},select(){ne("triangle",660,990,.12,.28),ne("sine",990,1320,.1,.18,.06)},back(){ne("triangle",520,330,.12,.22)},jump(){ne("sine",280,640,.17,.3),ne("triangle",420,880,.12,.08,.02)},land(i=10){let t=Math.min(.5,.12+i*.012);ne("sine",140,60,.12,t),Ln(.09,t*.7,"lowpass",900,200)},step(){Ln(.045,.07,"bandpass",A_(500,800),300,0,2)},dive(){Ln(.3,.22,"bandpass",500,2200,0,1.5),ne("sine",300,520,.2,.15)},bounce(){ne("sine",180,920,.3,.38),ne("triangle",360,1400,.22,.12,.03)},pickup(){ne("triangle",520,1040,.18,.3),ne("sine",780,1560,.24,.2,.07),ne("sine",1170,2340,.2,.12,.14)},swing(){Ln(.24,.3,"bandpass",500,2800,0,1.2),ne("sine",380,160,.16,.08)},shot(){ne("sawtooth",900,140,.11,.3),Ln(.09,.4,"highpass",2500,900),ne("square",200,60,.12,.18)},bonk(){ne("square",190,55,.2,.42),Ln(.14,.45,"lowpass",3e3,300),ne("triangle",820,220,.22,.22,.02)},hit(){ne("sawtooth",420,70,.28,.28),Ln(.18,.3,"lowpass",1800,150),ne("square",220,110,.15,.12,.04)},door(){ne("square",150,90,.07,.3),ne("square",110,70,.1,.25,.09),Ln(.05,.18,"lowpass",2e3,400)},honk(){ne("square",392,392,.34,.2),ne("square",494,494,.34,.2)},honkBig(){ne("sawtooth",130,128,.95,.3),ne("square",164,162,.95,.24),ne("sawtooth",196,194,.95,.22),ne("square",262,258,.95,.14),Ln(.12,.12,"lowpass",900,300)},skid(){Ln(.18,.1,"bandpass",2600,1800,0,3)},vroom(){ne("sawtooth",70,160,.35,.2),ne("sawtooth",90,210,.3,.1,.05)},splash(){Ln(.6,.45,"bandpass",1800,260,0,.8),Ln(.3,.2,"highpass",2400,900,.05),ne("sine",220,80,.3,.12)},respawn(){Ln(.4,.22,"highpass",400,4e3,0,.7),ne("sine",300,900,.3,.15)},checkpoint(){ne("sine",660,660,.14,.3),ne("sine",990,990,.25,.3,.1),ne("triangle",1320,1320,.3,.1,.18)},tick(){ne("sine",660,660,.14,.4)},go(){[523,659,784].forEach(i=>ne("square",i,i,.5,.14)),ne("sine",1046,1046,.6,.3)},join(){ne("triangle",520,520,.1,.25),ne("triangle",780,780,.14,.25,.09)},finish(){[523,659,784,1046,1318].forEach((i,t)=>{ne("square",i,i,.22,.14,t*.09),ne("triangle",i*2,i*2,.3,.08,t*.09)})},win(){[523,659,784,659,784,1046,1318].forEach((t,e)=>{ne("square",t,t,.24,.13,e*.12),ne("triangle",t/2,t/2,.3,.12,e*.12)})},lose(){[392,349,311,262].forEach((i,t)=>ne("triangle",i,i*.97,.3,.22,t*.17))},warn(){ne("square",880,880,.08,.14)}},R_={major:[0,2,4,7,9,12,14,16],minor:[0,3,5,7,10,12,15,17],lydian:[0,2,4,6,7,9,11,12],dorian:[0,2,3,5,7,9,10,12]},Nf=[{bpm:112,root:65,scale:"lydian",prog:[0,5,3,4],lead:"triangle",bright:3400},{bpm:124,root:57,scale:"dorian",prog:[0,3,4,0],lead:"triangle",bright:3e3},{bpm:128,root:62,scale:"lydian",prog:[0,4,5,3],lead:"triangle",bright:3400},{bpm:132,root:64,scale:"major",prog:[0,4,3,4],lead:"triangle",bright:3400},{bpm:138,root:67,scale:"major",prog:[0,5,3,4],lead:"triangle",bright:3800},{bpm:126,root:59,scale:"minor",prog:[0,5,3,4],lead:"triangle",bright:3200},{bpm:130,root:55,scale:"dorian",prog:[0,5,3,4],lead:"triangle",bright:3300},{bpm:120,root:60,scale:"major",prog:[0,3,4,0],lead:"triangle",bright:3e3}],zf=i=>440*Math.pow(2,(i-69)/12);function Uf(i,t,e,n,s,r){let o=ce.createOscillator(),a=ce.createGain(),l=ce.createBiquadFilter();o.type=i,o.frequency.setValueAtTime(t,e),l.type="lowpass",l.frequency.value=r,a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(s,e+.01),a.gain.exponentialRampToValueAtTime(1e-4,e+n),o.connect(l),l.connect(a),a.connect(fs),o.start(e),o.stop(e+n+.05)}function C_(i,t){let e=ce.createBufferSource();e.buffer=Lc;let n=ce.createBiquadFilter();n.type="highpass",n.frequency.value=7e3;let s=ce.createGain();s.gain.setValueAtTime(t,i),s.gain.exponentialRampToValueAtTime(1e-4,i+.05),e.connect(n),n.connect(s),s.connect(fs),e.start(i),e.stop(i+.06)}function I_(i){let t=ce.createOscillator(),e=ce.createGain();t.frequency.setValueAtTime(150,i),t.frequency.exponentialRampToValueAtTime(40,i+.12),e.gain.setValueAtTime(.55,i),e.gain.exponentialRampToValueAtTime(1e-4,i+.16),t.connect(e),e.connect(fs),t.start(i),t.stop(i+.2)}function zr(i){if(Ff(),!ce)return;let t=Nf[i]||Nf[Nf.length-1],e=R_[t.scale],n=60/t.bpm/4,s=1234+i*77,r=()=>(s=s*1664525+1013904223>>>0,s/4294967296),o=[];for(let l=0;l<4;l++){let c=[];for(let h=0;h<16;h++)c.push(h%4===0||r()<.38?Math.floor(r()*6):-1);o.push(c)}hs={i:0,next:ce.currentTime+.1};let a=()=>{if(!(!ce||!hs))for(;hs.next<ce.currentTime+.18;){let l=hs.i,c=l%16,h=Math.floor(l/16)%4,f=t.prog[h]||0,u=hs.next,d=t.root+e[f%e.length]-12;c%4===0&&I_(u),c%2===0&&C_(u,c%4===2?.1:.05),(c%4===0||c%8===6)&&Uf("triangle",zf(d-12),u,n*3.2,.4,600),c===0&&[0,2,4].forEach(y=>Uf("sine",zf(t.root+e[(f+y)%e.length]),u,n*15,.07,1400));let m=o[h][c];m>=0&&Uf(t.lead,zf(t.root+12+e[(m+f)%e.length]),u,n*1.8,.11,t.bright),hs.next+=n,hs.i++}};Pc=setInterval(a,40),a()}function Ff(){Pc&&clearInterval(Pc),Pc=null,hs=null}function Dc(i){fs&&fs.gain.setTargetAtTime(i?.08:.22,ce.currentTime,.2)}var _i=null;function o0(){if(!ce||_i)return;let i=ce.createGain();i.gain.value=1e-4;let t=ce.createBiquadFilter();t.type="lowpass",t.frequency.value=500;let e=ce.createOscillator(),n=ce.createOscillator();e.type="sawtooth",n.type="square",e.frequency.value=60,n.frequency.value=30,e.connect(t),n.connect(t),t.connect(i),i.connect(Nr),e.start(),n.start(),_i={g:i,f:t,o1:e,o2:n}}function a0(i,t){if(!ce||!_i)return;let e=ce.currentTime,n=Math.max(0,Math.min(1,i)),s=52+n*150+(t?16:0);_i.o1.frequency.setTargetAtTime(s,e,.08),_i.o2.frequency.setTargetAtTime(s*.5,e,.08),_i.f.frequency.setTargetAtTime(380+n*900+(t?300:0),e,.1),_i.g.gain.setTargetAtTime(.05+n*.07+(t?.04:0),e,.1)}function Of(){if(!_i)return;let i=_i;_i=null;try{i.g.gain.setTargetAtTime(1e-4,ce.currentTime,.05),setTimeout(()=>{try{i.o1.stop(),i.o2.stop()}catch{}},300)}catch{}}var Nc=class{constructor(){this.ws=null,this.h={},this.offset=0,this.rtt=0,this.best=1/0,this.connected=!1,this.id=null,this.samples=0}now(){return Date.now()+this.offset}stamp(){let t=Math.round(Date.now()+this.offset);return this.lastStamp=Math.max(t,(this.lastStamp||0)+1),this.lastStamp}on(t,e){this.h[t]=e}connect(){return new Promise((t,e)=>{if(this.connected)return t();let n=location.protocol==="https:"?"wss":"ws",s;try{s=new WebSocket(`${n}://${location.host}/ws`)}catch(o){return e(o)}this.ws=s;let r=setTimeout(()=>{try{s.close()}catch{}e(new Error("timeout"))},8e3);s.onopen=()=>{clearTimeout(r),this.connected=!0;for(let o=0;o<8;o++)setTimeout(()=>this.ping(),o*140);this.pinger=setInterval(()=>this.ping(),2e3),t()},s.onmessage=o=>{let a;try{a=JSON.parse(o.data)}catch{return}if(a.t==="pong")return this.onPong(a);a.t==="joined"&&(this.id=a.id);let l=this.h[a.t];l&&l(a)},s.onclose=()=>{clearTimeout(r);let o=this.connected;this.connected=!1,clearInterval(this.pinger),o&&this.h.close?this.h.close():e(new Error("closed"))},s.onerror=()=>{}})}ping(){this.send({t:"ping",c:Date.now()})}onPong(t){let e=Date.now(),n=e-t.c;this.rtt=this.rtt?this.rtt*.7+n*.3:n;let s=t.s+n/2-e;(n<=this.best*1.25||this.samples<3)&&(this.offset=this.samples<8?n<=this.best?s:this.offset:this.offset*.8+s*.2,this.best=Math.min(this.best,n)),this.samples++,this.samples%10===0&&(this.best=this.best*1.3+2)}send(t){this.ws&&this.ws.readyState===1&&this.ws.send(JSON.stringify(t))}close(){try{this.ws&&this.ws.close()}catch{}this.connected=!1,clearInterval(this.pinger)}};var c0=`
float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f); return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
`;function h0(i){let t=i.x1-i.x0,e=i.z1-i.z0,n=new sn({transparent:!0,depthWrite:!1,uniforms:{time:{value:0},rect:{value:new Ge(i.x0,i.z0,i.x1,i.z1)},depth:{value:i.surf-i.bottom},sunDir:{value:new O(-.35,.8,-.5).normalize()},skyTop:{value:new Ht("#4aa8ff")},skyHor:{value:new Ht("#e8fbff")},fogC:{value:new Ht("#d9f4ff")},fogN:{value:120},fogF:{value:640},ag:{value:[new O(0,0,0),new O(0,0,0),new O(0,0,0),new O(0,0,0)]}},vertexShader:`uniform float time; varying vec3 vW;
      void main(){ vec4 w = modelMatrix*vec4(position,1.0); w.y += sin(w.x*1.3+time*1.6)*0.018 + sin(w.z*1.7-time*1.3)*0.015; vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }`,fragmentShader:`uniform float time; uniform vec4 rect; uniform float depth; uniform vec3 sunDir; uniform vec3 skyTop; uniform vec3 skyHor; uniform vec3 fogC; uniform float fogN; uniform float fogF; uniform vec3 ag[4]; varying vec3 vW;
      ${c0}
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
      }`}),s=new qe(t,e,40,40),r=new k(s,n);return r.rotation.x=-Math.PI/2,r.position.set((i.x0+i.x1)/2,i.surf,(i.z0+i.z1)/2),r.renderOrder=3,r.frustumCulled=!1,r.userData.pool=i,r}function f0(i){let t=i.x1-i.x0,e=i.z1-i.z0,n=new sn({transparent:!0,depthWrite:!1,blending:Pi,uniforms:{time:{value:0}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform float time; varying vec3 vW; ${c0}
      void main(){
        vec2 p = vW.xz*0.55; float t = time*0.5, c = 0.0;
        for(int i=0;i<3;i++){ p += vec2(sin(p.y*1.7+t), cos(p.x*1.4-t))*0.55; c += abs(sin(p.x*2.2+p.y*1.8)); }
        c = pow(1.0 - c/3.0, 5.0) * 1.6;
        gl_FragColor = vec4(vec3(0.55,0.95,1.0)*c*0.55, 1.0);
      }`}),s=new k(new qe(t,e),n);return s.rotation.x=-Math.PI/2,s.position.set((i.x0+i.x1)/2,i.bottom+.03,(i.z0+i.z1)/2),s.renderOrder=2,s.frustumCulled=!1,s}var ai=[{id:0,name:"Sprinter",color:"#0b6b3a",max:27,acc:17,grip:6.5,turn:2.2,hw:.95,hl:2.1},{id:1,name:"Buggy",color:"#2f7bff",max:23,acc:15,grip:8.5,turn:2.5,hw:1.05,hl:1.9},{id:2,name:"Pickup",color:"#ffb21e",max:22,acc:14,grip:7,turn:2,hw:1.05,hl:2.3},{id:3,name:"Bubble",color:"#a855f7",max:24,acc:16,grip:7.5,turn:2.4,hw:.95,hl:1.8},...[4,5,6,7].map(i=>({id:i,name:"Racer",color:"#e0001f",max:42,acc:36,grip:9.5,turn:2.15,hw:1.05,hl:2.35,racer:!0}))];function d0(i,t,e,n){return{id:i,x:t,z:e,y:0,pitch:0,yaw:n,vx:0,vz:0,speed:0,steer:0,drift:0,driver:-1,bump:0,boost:0,parked:!0,spin:0,crash:0,acc:0}}function u0(i,t,e,n=1.5,s){let r=1e9,o=t,a=e,l=1,c=1,h=0,f=0,u=0,d=s!==void 0;for(let y of i.segs){let p=y.bx-y.ax,g=y.bz-y.az,E=p*p+g*g,S=E>0?((t-y.ax)*p+(e-y.az)*g)/E:0;S=S<0?0:S>1?1:S;let x=y.y0||0,_=y.y1===void 0?x:y.y1,M=x+(_-x)*S;if(d&&Math.abs(M-s)>5)continue;let w=y.ax+p*S,v=y.az+g*S,b=Math.hypot(t-w,e-v),A=y.hw-n;b-A<r&&(r=b-A,o=w,a=v,l=A,c=b,h=M,_!==x&&E>0?(f=(_-x)*p/E,u=(_-x)*g/E):f=u=0)}for(let y of i.plazas||[]){let p=y.y||0;if(d&&Math.abs(p-s)>5)continue;let g=Math.hypot(t-y.x,e-y.z),E=y.r-n;g-E<r&&(r=g-E,o=y.x,a=y.z,l=E,c=g,h=p,f=u=0)}if(r>1e8)return{d:-1,px:t,pz:e,nx:0,nz:1,lim:1,h:d?s:0,gx:0,gz:0};let m=c||1e-6;return{d:r,px:o,pz:a,nx:(t-o)/m,nz:(e-a)/m,lim:l,h,gx:f,gz:u}}function p0(i,t,e,n,s,r=0){let o=ai[i.id],a=Math.sin(i.yaw),l=Math.cos(i.yaw),c=-l,h=a,f=i.vx*a+i.vz*l,u=i.vx*c+i.vz*h,d=o.max*(i.boost>0?1.3:1);i.boost>0&&(i.boost-=t),e.gas>.01?f+=(f<0?38:o.acc*(1-Math.max(0,f)/(d+2))+1)*e.gas*t:e.gas<-.01?f+=(f>.5?-34:-11)*-e.gas*t:f-=Math.sign(f)*Math.min(Math.abs(f),4.5*t),e.hb&&(f-=Math.sign(f)*Math.min(Math.abs(f),9*t));{let M=(i.gx||0)*a+(i.gz||0)*l;M&&(f-=9.8*.55*(M/Math.sqrt(1+M*M))*t)}f=Math.max(-9,Math.min(d+(i.boost>0?3:0),f)),i.steer+=(e.steer-i.steer)*Math.min(1,t*9);let m=Math.abs(f),y=Math.min(1,m/5)*(1-.38*Math.min(1,m/d));i.yaw-=i.steer*o.turn*y*Math.sign(f||1)*(e.hb?1.35:1)*t;let p=(e.hb?1.6:o.grip)*(i.slick>0?.22:1);u*=Math.exp(-p*t),i.drift=Math.min(1,Math.abs(u)/5);let g=Math.sin(i.yaw),E=Math.cos(i.yaw),S=-E,x=g;i.vx=g*f+S*u,i.vz=E*f+x*u;for(let M of n.boosts||[])Math.abs(i.x-M.x)<M.r&&Math.abs(i.z-M.z)<M.r&&Math.abs(i.y-(M.y||0))<3&&(i.boost=1.4,f<d&&(i.vx+=g*40*t,i.vz+=E*40*t));i.x+=i.vx*t,i.z+=i.vz*t;let _="";{let M=u0(n,i.x,i.z,1.5,i.y);i.gx=M.gx,i.gz=M.gz;{let w=i.y;i.y+=(M.h-i.y)*Math.min(1,t*14);let v=Math.hypot(i.vx,i.vz)*t;i.pitch+=((v>.001?Math.atan2(i.y-w,v):0)*(i.speed>=0?1:-1)-i.pitch)*Math.min(1,t*10)}for(let w of[1.25,-1.25]){let v=u0(n,i.x+g*w,i.z+E*w,1.6,i.y);if(v.d<=0)continue;i.x-=v.nx*v.d,i.z-=v.nz*v.d;let b=i.vx*v.nx+i.vz*v.nz;if(b>0){let A=-1.35*b*v.nx,P=-(1+.35)*b*v.nz;i.vx+=A,i.vz+=P,i.vx*=.95,i.vz*=.95,i.spin=Math.max(-3,Math.min(3,(i.spin||0)+(E*w*A-g*w*P)*.1)),b>5&&(_="bump"),i.bump=Math.max(i.bump,b)}}}for(let M of s||[]){if((i.x-M.x)**2+(i.z-M.z)**2>36||Math.abs((M.y||0)-i.y)>4)continue;let w=Math.sin(M.yaw),v=Math.cos(M.yaw),b=null;for(let D of[1.05,-1.05])for(let R of[1.05,-1.05]){let C=i.x+g*D,z=i.z+E*D,F=M.x+w*R,K=M.z+v*R,V=C-F,J=z-K,Z=Math.hypot(V,J),ot=2.3-Z;ot>0&&(!b||ot>b.pen)&&(b={pen:ot,nx:Z>1e-4?V/Z:g,nz:Z>1e-4?J/Z:E,rx:C-i.x,rz:z-i.z})}if(!b)continue;let A=M.driver===-1||M.parked,P=A?1:.6;i.x+=b.nx*b.pen*P,i.z+=b.nz*b.pen*P;let L=(i.vx-M.vx)*b.nx+(i.vz-M.vz)*b.nz;if(L<0){let D=1.55*-L*(A?1:.55),R=b.nx*D,C=b.nz*D;i.vx+=R,i.vz+=C,i.spin=Math.max(-3.2,Math.min(3.2,(i.spin||0)+(b.rz*R-b.rx*C)*.32)),i.vx*=.94,i.vz*=.94,-L>3.5&&(_=-L>7?"crash":"bump",i.crash=Math.max(i.crash||0,-L))}}if(n.dyn&&!n.free){let M=n.dyn(r);for(let w of M){if(Math.abs(w.y-i.y)>4||(i.x-w.x)**2+(i.z-w.z)**2>30)continue;let v=null;for(let A of[1.05,-1.05]){let P=i.x+g*A,L=i.z+E*A,D=P-w.x,R=L-w.z,C=Math.hypot(D,R),z=1.15+w.r-C;z>0&&(!v||z>v.pen)&&(v={pen:z,nx:C>1e-4?D/C:g,nz:C>1e-4?R/C:E,rx:P-i.x,rz:L-i.z})}if(!v)continue;i.x+=v.nx*v.pen,i.z+=v.nz*v.pen;let b=(i.vx-w.vx)*v.nx+(i.vz-w.vz)*v.nz;if(b<0){let A=1.5*-b,P=v.nx*A,L=v.nz*A;i.vx+=P,i.vz+=L,i.spin=Math.max(-3.4,Math.min(3.4,(i.spin||0)+(v.rz*P-v.rx*L)*.4)),i.vx*=.9,i.vz*=.9,-b>3.5&&(_=-b>7?"crash":"bump",i.crash=Math.max(i.crash||0,-b))}}}i.slick=0;for(let M of(n.free?[]:n.slicks)||[])Math.abs(M.y-i.y)<3&&(i.x-M.x)**2+(i.z-M.z)**2<M.r*M.r&&(i.slick=1);return i.spin&&(i.yaw+=i.spin*t,i.spin*=Math.exp(-3.6*t),Math.abs(i.spin)<.02&&(i.spin=0)),i.speed=i.vx*g+i.vz*E,_}var re=(i,t,e,n=.12)=>new Rr(i,t,e,3,Math.min(n,i/2-.01,t/2-.01,e/2-.01)),Mn=(i,t={})=>{var e,n,s;return new Xt({color:i,roughness:(e=t.r)!=null?e:.35,metalness:(n=t.m)!=null?n:.25,emissive:t.e||0,emissiveIntensity:(s=t.ei)!=null?s:1})},zc=()=>new Xt({color:"#9fd8ff",roughness:.05,metalness:.4,transparent:!0,opacity:.55});function m0(i){let t=ai[i],e=new yt,n=Mn("#1b1b22",{r:.8,m:0}),s=Mn("#e8eaf2",{r:.25,m:.8}),r=Mn("#23252e",{r:.6}),o=(_,M,w,v,b,A=0,P=0,L=0)=>{let D=new k(_,M);return D.position.set(w,v,b),D.rotation.set(A,P,L),D.castShadow=!0,D.receiveShadow=!0,e.add(D),D},a=i===0?new Xt({map:qo("pk"),roughness:.3,metalness:.15}):Mn(t.color,{r:.28,m:.35}),l=Mn("#ffffff",{r:.3,m:.1}),c=Mn("#fff6c8",{e:"#fff1a8",ei:1.4}),h=Mn("#ff3030",{e:"#ff1a1a",ei:1.2}),f=[],u=[],d=.46,m=1,y=1.35,p=-1.3,g={y:.55,z:-.15};if(i===0)d=.44,m=1.02,y=1.45,p=-1.35,g={y:.5,z:-.2},o(re(1.9,.5,4.3,.22),a,0,.55,0),o(re(1.7,.34,1.5,.2),a,0,.78,1.35,-.12),o(re(1.7,.4,1,.2),a,0,.86,-1.6),o(re(1.5,.5,.12,.05),zc(),0,1.02,.78,-.55),o(re(.12,.1,1.5,.04),r,.95,1.16,-1.82),o(re(.12,.1,1.5,.04),r,-.95,1.16,-1.82),o(re(2,.09,.45,.04),a,0,1.28,-2),o(re(.1,.4,.3,.03),r,.7,1.08,-1.95),o(re(.1,.4,.3,.03),r,-.7,1.08,-1.95),o(re(.4,.2,.1,.04),c,.65,.68,2.12),o(re(.4,.2,.1,.04),c,-.65,.68,2.12),o(re(.45,.14,.1,.04),h,.65,.78,-2.17),o(re(.45,.14,.1,.04),h,-.65,.78,-2.17);else if(i===1){d=.62,m=1.18,y=1.3,p=-1.25,g={y:.62,z:-.1},o(re(1.7,.4,3.8,.16),a,0,.62,0),o(re(1.5,.3,1.2,.14),a,0,.9,1.4),o(re(1.3,.35,.9,.12),Mn("#ffd23f",{r:.4}),0,.95,-1.35);for(let _ of[-1,1])o(new gt(.06,.06,1.7,8),r,_*.78,1.5,-.1,.12,0,0),o(new gt(.06,.06,1.6,8),r,_*.78,1,.7,.9,0,0),o(new gt(.06,.06,1.7,8),r,_*.78,1.5,-.1,Math.PI/2,0,0);o(new gt(.06,.06,1.6,8),r,0,2,-.1,0,0,Math.PI/2),o(new ue(.2,12,8),c,.55,.98,2),o(new ue(.2,12,8),c,-.55,.98,2),o(re(.4,.12,.1,.04),h,.5,.8,-1.95),o(re(.4,.12,.1,.04),h,-.5,.8,-1.95)}else if(i===2){d=.55,m=1.1,y=1.55,p=-1.5,g={y:.78,z:.55},o(re(2,.55,4.7,.2),a,0,.75,0),o(re(1.9,.75,1.5,.18),a,0,1.28,.55),o(re(1.5,.45,.1,.05),zc(),0,1.55,1.3,-.35),o(re(1.8,.1,1.9,.05),r,0,1.1,-1.35);for(let _ of[-1,1])o(re(.1,.5,1.9,.04),a,_*.97,1.35,-1.35);o(re(1.8,.5,.1,.04),a,0,1.35,-2.28),o(re(1.8,.1,.1,.04),Mn("#c8ccd8",{m:.8,r:.2}),0,.75,2.4),o(re(.1,.5,.1,.03),Mn("#c8ccd8",{m:.8,r:.2}),.6,.85,2.38),o(re(.1,.5,.1,.03),Mn("#c8ccd8",{m:.8,r:.2}),-.6,.85,2.38),o(re(.35,.22,.1,.04),c,.7,.98,2.36),o(re(.35,.22,.1,.04),c,-.7,.98,2.36),o(re(.3,.2,.1,.04),h,.8,1,-2.36),o(re(.3,.2,.1,.04),h,-.8,1,-2.36)}else if(i>=4){d=.5,m=1.12,y=1.5,p=-1.5,g={y:.62,z:-.2};let _=Mn("#e0001f",{r:.16,m:.55}),M=Mn("#15161c",{r:.5,m:.2}),w=Mn("#ffffff",{r:.25,m:.1}),v=Mn("#ff7a1a",{e:"#ff5a00",ei:2}),b=new $i;[[-2.4,.3],[-2.4,.84],[-1.7,1],[-.95,.96],[-.8,.66],[.5,.66],[.72,.78],[2.2,.56],[2.46,.44],[2.46,.3]].forEach(([D,R],C)=>C?b.lineTo(D,R):b.moveTo(D,R));let A=new Ji(b,{depth:1.7,bevelEnabled:!0,bevelSize:.1,bevelThickness:.1,bevelSegments:2,steps:1});A.rotateY(-Math.PI/2),A.translate(.85,0,0),o(A,_,0,0,0),o(re(1.2,.04,1.3,.02),M,0,.7,-.1),o(re(1,.32,.18,.06),_,0,.88,-1.05),o(re(1.5,.42,.08,.03),zc(),0,.98,.6,-.62);for(let D of[-1,1])o(re(.12,.34,.1,.03),M,D*.76,.9,.62,-.62),o(re(.42,.34,1.7,.14),_,D*1.03,.6,-1.6),o(re(.3,.3,.9,.1),_,D*1,.55,1.5),o(re(.1,.3,.8,.03),M,D*.98,.5,-.35),o(re(.07,.62,.8,.02),M,D*1.12,1.52,-2.28),o(re(.09,.62,.09,.02),M,D*.55,1.2,-2.15);o(re(.46,.03,1.9,.01),w,0,.8,1.4,.07),o(re(2.3,.1,.8,.03),_,0,1.52,-2.28),o(re(2.3,.07,.34,.02),M,0,1.45,-2),o(re(2.3,.08,.55,.03),M,0,.3,2.46),o(re(1.9,.12,.3,.04),M,0,.3,-2.4);for(let D of[-1,1])o(re(.42,.14,.1,.04),c,D*.62,.62,2.5),o(re(.5,.12,.1,.04),h,D*.6,.86,-2.48),o(new gt(.1,.12,.3,10),M,D*.42,.52,-2.5,Math.PI/2,0,0);let P=new k(new qe(2.1,4.6),new ae({color:"#27b6ff",transparent:!0,opacity:.55,blending:Pi,depthWrite:!1,toneMapped:!1}));P.rotation.x=-Math.PI/2,P.position.set(0,.12,0),e.add(P);let L=[];for(let D of[-1,1])for(let[R,C,z]of[[.17,1.3,"#ff6a00"],[.09,.8,"#ffe14a"]]){let F=new be(R,C,8);F.rotateX(-Math.PI/2),F.translate(0,0,-C/2);let K=new k(F,new ae({color:z,transparent:!0,opacity:.9,toneMapped:!1}));K.position.set(D*.42,.52,-2.62),e.add(K),L.push(K)}e.userData.flames=L}else{d=.42,m=.98,y=1.15,p=-1.1,g={y:.5,z:-.05},o(new ue(1.15,24,16),a,0,.95,-.05).scale.set(.9,.62,1.55),o(re(1.6,.14,3.2,.06),l,0,.42,0);for(let M of[-1,1])o(new ue(.27,14,10),c,M*.62,.95,1.72),o(new ue(.2,12,8),h,M*.55,.85,-1.78),o(new gt(.09,.09,.5,8),r,M*.42,1.55,1.1,.45,0,0);o(re(1.5,.35,.1,.04),zc(),0,1.22,.85,-.7),o(re(.5,.05,2.3,.02),Mn("#ff6bd5",{r:.4}),.15,1.52,-.75,0,0,.08)}let E=new gt(d,d,.42,20),S=new gt(d*.56,d*.56,.44,12);for(let[_,M,w]of[[1,y,1],[-1,y,1],[1,p,0],[-1,p,0]]){let v=new yt;v.position.set(_*m,d,M),e.add(v);let b=new yt;v.add(b);let A=new k(E,n);A.rotation.z=Math.PI/2,A.castShadow=!0,b.add(A);let P=new k(S,s);P.rotation.z=Math.PI/2,b.add(P),f.push(b),w&&u.push(v)}let x=new k(new Ii(2.6,20),new ae({color:0,transparent:!0,opacity:.22,depthWrite:!1}));return x.rotation.x=-Math.PI/2,x.position.y=.04,x.scale.set(.9,1.25,1),e.add(x),e.userData={wheels:f,pivots:u,seat:g,spec:t,flames:e.userData.flames},e}function g0(i,t,e){let n=i.userData;for(let r of n.wheels)r.rotation.x+=t.speed/.5*e;for(let r of n.pivots)r.rotation.y=-t.steer*.5;i.rotation.z=Bo.clamp(-t.steer*Math.min(1,Math.abs(t.speed)/20)*.07,-.08,.08);let s=(t.speed-(t._ps===void 0?t.speed:t._ps))/Math.max(e,.001);if(t._ps=t.speed,t._sq=(t._sq||0)+(Bo.clamp(s,-30,30)*.0045-(t._sq||0))*Math.min(1,e*7),i.rotation.x=-(t.pitch||0)-t._sq,n.flames){let r=Bo.clamp(.2+Math.max(0,t.speed)/45+(t.boost>0?.9:0)+(t.driver!==-1?.15:0),.15,2)*(.85+Math.random()*.3);for(let o of n.flames)o.scale.set(1,1,r),o.visible=t.driver!==-1||t.boost>0}}var P_={lion:3,leopard:2.7,elephant:5.3,horse:3.8,dino:5.6,coyote:2.7,boar:2.8,hyena:2.8,bear:4.6,gorilla:4.9},Uc=(i,t,e)=>i+(t-i)*e,L_=(i,t,e)=>{let n=(t-i)%(Math.PI*2);return n>Math.PI&&(n-=Math.PI*2),n<-Math.PI&&(n+=Math.PI*2),i+n*e},D_=new gt(.07,.07,1,5),N_=new Xt({color:"#c9a063",roughness:.9}),z_=new O(0,1,0),Fc=class{constructor(t){this.r=t,this.multi=t.multi,this.quest=!!t.meta.quest,this.hunt=!!t.meta.hunt,this.defs=this.hunt?Bp():this.quest?Tp():yc,vc.defs=this.defs,this.L=this.hunt?Hp():this.quest?Ap():_c(),this.list=vp(this.defs),this.mount=null,this.mountT=0,this.t=0,this.near=null,this.evAcc=[],this.items=this.list.map(e=>{let n=Dp(e.kind);n.root.position.set(e.x,e.y,e.z),n.root.rotation.y=e.yaw,t.scene.add(n.root);let s={a:e,o:n,x:e.x,y:e.y,z:e.z,yaw:e.yaw,speed:0,tag:null,tagKey:"",ropes:[],px:e.x,pz:e.z,hitFx:0};if(e.kind==="dino")for(let r=0;r<Mc.length;r++){let o=new k(D_,N_);o.castShadow=!0,t.scene.add(o),s.ropes.push(o)}return s}),this.names=new Map(t.players.map(e=>[e.id,e.name]))}me(){return this.r.localId}petCount(){let t=0;for(let e of this.list)e.owner===this.me()&&t++;return t}update(t){let e=this.r,n=e.me.body,s=this.me();if(this.t+=t,this.mountT>0&&(this.mountT-=t),!this.multi&&e.levelTime>=0&&!e.over){let l=_p(this.list,t,[{id:s,x:n.x,y:n.y,z:n.z,r:n.yaw,mounted:this.mount?1:0}],this.L);this.handle(l)}this.mount&&this.multi&&this.mountT<=0&&this.mount.rider!==s&&this.dismount(!0);for(let l of this.items){let c=l.a,h=rn[c.kind],f=this.mount===c;if(f)l.x=n.x,l.y=n.y,l.z=n.z,l.yaw=n.yaw;else if(!this.multi)l.x=c.x,l.y=c.y,l.z=c.z,l.yaw=c.yaw;else{let y=1-Math.exp(-13*t),p=Math.hypot(c.x-l.x,c.z-l.z)>14;l.x=p?c.x:Uc(l.x,c.x,y),l.y=Uc(l.y,c.y,y),l.z=p?c.z:Uc(l.z,c.z,y),l.yaw=L_(l.yaw,c.yaw,1-Math.exp(-10*t))}let u=t>0?Math.hypot(l.x-l.px,l.z-l.pz)/t:0;l.speed=Uc(l.speed,Math.min(u,14),.25),l.px=l.x,l.pz=l.z;let d=l.o,m=d.root;m.position.set(l.x,l.y,l.z),m.rotation.y=l.yaw,m.visible=c.st!==Ee.HIDDEN,c.st!==Ee.HIDDEN&&(l.atk=c.st===Ee.ATTACK?(l.atk||0)+t:0,Np(d,this.t,t,f?Math.min(14,Math.hypot(n.vx,n.vz)):l.speed,c.st,c.st===Ee.ATTACK?Math.max(.02,1-l.atk/.5):0),this.updateTag(l,h),l.ropes.length&&this.updateRopes(l),c.st===Ee.PET&&c.owner===s&&!f&&Math.random()<t*.35&&e.particles.emit(l.x,l.y+h.seat+.6,l.z,1,{color:"#ff5fa8",speed:.6,up:1.6,life:.9,size:.38}))}let r=null,o=7;if(!this.mount&&!e.over)for(let l of this.items){let c=l.a;if(c.owner!==s||c.rider)continue;let h=Math.hypot(c.x-n.x,c.z-n.z);h<o&&Math.abs(c.y-n.y)<3.5&&n.stun<=0&&(o=h,r=c)}this.near=r;let a=document.body.classList;!!r!==a.contains("near-car")&&a.toggle("near-car",!!r),!!this.mount!==a.contains("riding")&&a.toggle("riding",!!this.mount)}tagKey(t){return t.owner?t.owner===this.me()?"mine":"o"+t.owner:"w"+t.hp}updateTag(t,e){let n=t.a,s=this.tagKey(n);if(s!==t.tagKey){t.tag&&(t.o.root.remove(t.tag),t.tag.material.map.dispose(),t.tag.material.dispose());let r=n.owner===this.me(),o=n.owner?r?"\u2665 MY "+e.name:(this.names.get(n.owner)||"Pet")+"'s "+e.name:`${e.name}  ${n.hp}/${e.hp}`;t.tag=Dr(o,n.owner?r?"#4ade80":"#7cc7ff":"#ff6b3d"),t.tag.position.set(0,P_[n.kind],0),t.o.root.add(t.tag),t.tagKey=s}this.r.tagScale(t.tag,t.o.root.position,1.15)}updateRopes(t){let e=t.a,n=e.kind==="dino"&&!e.owner;t.o.head.getWorldPosition(this._v||(this._v=new O));let r=this._v;t.ropes.forEach((o,a)=>{if(o.visible=n,!n)return;let l=Mc[a],c=Re.sx+l[0],h=Re.sz+l[1],f=Re.summitY+2.3,u=r.x-c,d=r.y-.2-f,m=r.z-h,y=Math.hypot(u,d,m)||1;o.position.set(c+u/2,f+d/2-.15*Math.sin(y*.5),h+m/2),o.scale.set(1,y,1),o.quaternion.setFromUnitVectors(z_,new O(u/y,d/y,m/y))})}batHit(t){let e=Math.sin(t.yaw),n=Math.cos(t.yaw),s=this.me(),r=!1;if(this.mount)return!1;for(let o of this.items){let a=o.a,l=rn[a.kind];if(a.owner||a.rider||a.st===Ee.HIDDEN)continue;let c=a.x-t.x,h=a.z-t.z,f=Math.hypot(c,h);f>l.r+2.7||Math.abs(a.y-t.y)>3.5||f<.001||(c*e+h*n)/f<-.15||(r=!0,this.multi?this.r.sendNet({t:"ahit",id:a.id}):this.handle(Mp(a,s,t.x,t.z)),Et.bonk(),this.r.particles.emit(a.x,a.y+l.seat*.7,a.z,20,{color:"#ffd23f",speed:6,up:3,life:.5,size:.3}))}return r}handle(t){for(let e of t){let n=this.list[e.id],s=n&&rn[n.kind];if(n){if(this.hunt&&(e.k==="hit"||e.k==="kill")){let r=this.items[e.id];r&&(r.tagKey=""),e.k==="hit"?(n.hp=e.hp,Et.hit&&Et.hit()):(n.st=Ee.HIDDEN,n.dead=1,Et.roar(s.big),this.r.particles.emit(n.x,n.y+s.seat*.7,n.z,40,{color:"#ffd23f",speed:6,up:5,life:.9,size:.5}),this.r.particles.emit(n.x,n.y+s.seat*.7,n.z,20,{color:"#ffffff",speed:4,up:3,life:.7,size:.4}));continue}if(e.k==="hit"){let r=this.items[e.id];this.r.toast(`${s.name}  ${Math.max(0,e.hp)} hit${e.hp===1?"":"s"} left!`),r&&(r.tagKey=""),Et.roar(s.big)}else if(e.k==="tame"){let r=e.pid===this.me();this.items[e.id].tagKey="",Et.tame();let o=this.items[e.id];this.r.particles.emit(n.x,n.y+s.seat,n.z,36,{color:"#ff5fa8",speed:5,up:5,life:1.1,size:.5}),this.r.particles.emit(n.x,n.y+s.seat,n.z,20,{color:"#ffd23f",speed:6,up:6,life:.9,size:.35}),n.kind==="dino"?this.r.toast(r?"\u{1F996} DINOSAUR FREED! It is your pet - press RIDE!":`${this.names.get(e.pid)||"Someone"} freed the DINOSAUR!`):this.r.toast(r?`${s.name} is now YOUR PET!  ${U_()}`:`${this.names.get(e.pid)||"Someone"} tamed the ${s.name}!`)}else e.k==="bite"&&(e.pid===this.me()&&this.r.onAnimalBite(e),Et.roar(rn[n.kind].big))}}}onNet(t){for(let e of t.a){let n=this.list[e[0]];if(!n)continue;let s=n.owner;n.x=e[1],n.y=e[2],n.z=e[3],n.yaw=e[4],n.st=e[5],n.owner=e[6],n.rider=e[7],n.hp=e[8],s!==n.owner||this.items[n.id].tagKey===""?this.items[n.id].tagKey="":this.tagKey(n)!==this.items[n.id].tagKey&&(this.items[n.id].tagKey="")}}onEvent(t){this.handle([t])}setNames(t){for(let e of t)this.names.set(e.id,e.name)}speedK(){return this.mount?rn[this.mount.kind].ride:1}flagBits(){return this.mount?8192|this.mount.id<<14:0}seatLocal(t){this.mount&&(t.position.y+=rn[this.mount.kind].seat,t.scale.setScalar(.9))}camLift(){return this.mount?rn[this.mount.kind].seat:0}toggleMount(){let t=this.r,e=t.me.body,n=this.me();if(t.over||t.levelTime<0||t.menuOpen)return;if(this.mount)return this.dismount(!1);let s=this.near;if(!s){t.toast("Beat an animal with the BAT to tame it first!");return}this.mount=s,s.rider=n,this.mountT=1.5,e.x=s.x,e.z=s.z,e.y=Math.max(e.y,s.y),e.vx=e.vz=0,e.vy=0,this.multi&&t.sendNet({t:"aride",id:s.id,on:1}),Et.pickup(),t.toast(`Riding the ${rn[s.kind].name}!  `+("ontouchstart"in window?"tap RIDE again to get off":"C to get off \u2022 SPACE to jump"))}dismount(t){let e=this.r,n=e.me.body,s=this.mount;s&&(this.mount=null,s.rider=0,this.multi&&!t&&e.sendNet({t:"aride",id:s.id,on:0}),n.x+=Math.cos(n.yaw)*2.4,n.z-=Math.sin(n.yaw)*2.4,n.vy=4,n.grounded=!1,n.hitCd=.3,e.me.model.group.scale.setScalar(1),Et.pickup())}dispose(){for(let e of this.items){this.r.scene.remove(e.o.root);for(let n of e.ropes)this.r.scene.remove(n)}let t=document.body.classList;t.remove("riding"),t.remove("near-car")}},U_=()=>"ontouchstart"in window?"Tap RIDE to hop on!":"Press C near it to RIDE!";var Oc={rate:.26,range:48,cone:.75};function Bf(){let i=new yt,t=new Xt({color:"#2b2f3a",roughness:.4,metalness:.7}),e=new Xt({color:"#d9822b",roughness:.5,metalness:.3}),n=new k(new jt(.16,.2,.62),t);n.position.set(0,0,.3);let s=new k(new gt(.05,.05,.5,8),e);s.rotation.x=Math.PI/2,s.position.set(0,.05,.75);let r=new k(new jt(.13,.28,.14),t);return r.position.set(0,-.2,.14),r.rotation.x=.25,i.add(n,s,r),i.position.set(.36,.95,.18),i.traverse(o=>{o.isMesh&&(o.castShadow=!0)}),i}function x0(i,t,e){let n=null,s=1e9,r=Math.sin(e),o=Math.cos(e);for(let a of i){if(a.st===Ee.HIDDEN||a.owner||a.dead)continue;let l=a.x-t.x,c=a.z-t.z,h=Math.hypot(l,c)-rn[a.kind].r*.5;if(h>Oc.range||Math.abs(a.y-t.y)>6||h<-1)continue;let f=Math.acos(Math.max(-1,Math.min(1,(l*r+c*o)/(Math.hypot(l,c)||1))));if(f>Oc.cone)continue;let u=f*20+h;u<s&&(s=u,n=a)}return n}var pt=i=>document.getElementById(i),Hn=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches||(typeof navigator!="undefined"&&navigator.maxTouchPoints||0)>0,De={x:0,y:0,jump:!1,grab:!1},En=(i,t,e)=>i<t?t:i>e?e:i,Ps=(i,t,e)=>i+(t-i)*e,Yf=(i,t,e)=>{let n=(t-i)%(Math.PI*2);return n>Math.PI&&(n-=Math.PI*2),n<-Math.PI&&(n+=Math.PI*2),i+n*e},Bc=i=>{let t=Math.floor(i/60),e=i-t*60;return`${t}:${e<10?"0":""}${e.toFixed(2)}`},Hf=i=>i===1?"1st":i===2?"2nd":i===3?"3rd":i+"th",F_=["\u{1F947}","\u{1F948}","\u{1F949}"],Oi=pt("c"),Dn;try{Dn=new Vo({canvas:Oi,antialias:!0,powerPreference:"high-performance"})}catch(i){throw document.querySelector("#loader p").textContent="WebGL is not available in this browser. Please use a recent Chrome / Edge / Firefox.",i}Dn.outputColorSpace=Fe;Dn.toneMapping=vr;Dn.toneMappingExposure=1.05;Dn.shadowMap.enabled=!0;Dn.shadowMap.type=_l;var Ur=Math.min(window.devicePixelRatio||1,Hn?1.5:2),he={dpr:Hn?Math.min(Ur,1):Math.min(Ur,1.5),t:0,frames:0,good:0,shadows:!0,warm:3};function Ls(){on&&(Dn.setPixelRatio(he.dpr),Dn.setSize(window.innerWidth,window.innerHeight,!1),on.camera.aspect=window.innerWidth/window.innerHeight,on.camera.updateProjectionMatrix(),X&&(X.camera.aspect=window.innerWidth/window.innerHeight,X.camera.updateProjectionMatrix(),X.particles.setScale(Dn.domElement.height)),on.particles.setScale(Dn.domElement.height))}function O_(i){if(he.low)return;if(he.warm>0){he.warm-=i;return}if(he.t+=i,he.frames++,he.t<1.2)return;let t=he.frames/he.t;he.t=0,he.frames=0,t<40?(he.good=0,he.dpr>.7?(he.dpr=Math.max(.7,he.dpr-.2),Ls()):he.shadows&&t<30&&(he.shadows=!1,X&&X.setShadows(!1))):t>58?++he.good>=3&&he.dpr<Math.min(Ur,1.75)&&(he.dpr=Math.min(Math.min(Ur,1.75),he.dpr+.1),he.good=0,Ls()):he.good=0}try{let i=localStorage.getItem("ph_low");he.low=i==="1",i===null&&Hn&&((navigator.hardwareConcurrency||4)<=2||(navigator.deviceMemory||4)<=2)&&(he.low=!0)}catch{he.low=!1}he.low&&(he.dpr=.75,he.shadows=!1);function B_(){he.low?(he.dpr=.75,he.shadows=!1):(he.dpr=Hn?Math.min(Ur,1):Math.min(Ur,1.5),he.shadows=!0,he.warm=3),X&&X.setShadows(he.shadows),Ls()}var H_=new Ts(Dn),M0=H_.fromScene(new Wo,.04).texture,vt={screen:"title",mode:"single",name:localStorage.getItem("ph_name")||"",char:+(localStorage.getItem("ph_char")||0),level:0,net:null,room:null,myId:null,pendingJoin:null,muted:!1},X=null,on=null,Gf=[],E0=i=>+(localStorage.getItem("ph_best_"+i)||0),Vf=class{constructor(){let t=ta.fun;this.scene=new Ri,this.scene.fog=new ar(t.fog,70,420),this.scene.environment=M0,this.scene.environmentIntensity=.7,this.camera=new an(42,1,.1,1500),this.sky=Lf(t),this.scene.add(this.sky),this.water=Df(t,-3),this.scene.add(this.water),this.scene.add(new _s(t.hemiSky,t.hemiGround,1));let e=new Ms(t.sun,2.4);e.position.set(-10,18,14),e.castShadow=!0,e.shadow.mapSize.set(1024,1024);let n=e.shadow.camera;n.left=-12,n.right=12,n.top=12,n.bottom=-12,n.near=1,n.far=60,e.shadow.bias=-4e-4,e.shadow.normalBias=.03,this.scene.add(e),this.sun=e;let s=f=>new Xt({color:f,roughness:.35}),r=new k(new gt(15,14,2,48),s("#ff9ccf"));r.position.y=-1,r.receiveShadow=!0,this.scene.add(r);let o=new k(new gt(13,13,.1,48),s("#fff3fb"));o.position.y=.02,o.receiveShadow=!0,this.scene.add(o),this.tops=[.8,1.25,1.25,.8],[[-4.5,.8,"#7be8a0"],[-1.5,1.25,"#5fc2ff"],[1.5,1.25,"#ffd23f"],[4.5,.8,"#ff9ccf"]].forEach(([f,u,d])=>{let m=new k(new gt(1.1,1.25,u,32),s(d));m.position.set(f,u/2,-.5),m.castShadow=m.receiveShadow=!0,this.scene.add(m)}),this.slotPos=[[-4.5,.8,-.5],[-1.5,1.25,-.5],[1.5,1.25,-.5],[4.5,.8,-.5]];let a=Ic("HARIS"),l=Ic("HARIS","MADE THIS GAME"),c=new k(new qe(11,4.3),new ae({map:a,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2}));c.rotation.x=-Math.PI/2,c.position.set(0,.1,4.4),this.scene.add(c);let h=new k(new qe(26,13),new ae({map:l,transparent:!0,depthWrite:!1,toneMapped:!1,fog:!1}));h.position.set(0,9.5,-24),this.scene.add(h),this.banner=h,this.chars=[0,1,2,3].map(f=>{let u=new Cs(f);return this.scene.add(u.group),{c:u,tag:null,name:null,show:!0,scale:1,hop:0}}),this.ambient=new Qo("fun",160),this.scene.add(this.ambient.points),this.particles=new jo(260),this.scene.add(this.particles.points),this.mode="title",this.sel=0,this.t=0,this.lobby=[]}setName(t,e){let n=this.chars[t];n.name!==e&&(n.tag&&(n.c.group.remove(n.tag),n.tag.material.map.dispose(),n.tag.material.dispose(),n.tag=null),n.name=e,e&&(n.tag=Dr(e,Di[t].color),n.tag.position.set(0,n.c.height+.55,0),n.c.group.add(n.tag)))}setTitle(t=-1){this.mode="title",this.sel=t,this.lobby=[],this.chars.forEach((e,n)=>{e.show=!0,this.setName(n,null)})}setLobby(t){this.mode="lobby",this.lobby=t,this.chars.forEach((e,n)=>{let s=t.findIndex(r=>r.char===n);e.show=s>=0,e.slot=s,this.setName(n,s>=0?t[s].name:null)})}burst(t){let e=this.slotPos[this.slotOf(t)];this.particles.emit(e[0],e[1]+1.4,e[2]+.5,40,{rainbow:!0,speed:4,up:6,life:1,size:.35,gravity:7})}slotOf(t){return this.mode==="lobby"?[1,2,0,3][Math.max(0,this.chars[t].slot)%4]:t}update(t){this.t+=t;let e=this.camera;e.position.set(Math.sin(this.t*.25)*1.8,2.9+Math.sin(this.t*.4)*.15,10.5),e.lookAt(0,1.9,0),this.sky.position.copy(e.position),this.water.material.uniforms.time.value=this.t,this.chars.forEach((n,s)=>{if(n.c.group.visible=n.show,!n.show)return;let r=this.slotPos[this.slotOf(s)],o=this.mode==="title"?Math.floor(this.t/3)%4===s:this.mode!=="lobby"&&this.sel===s;n.scale=Ps(n.scale,o?1.18:1,Math.min(1,t*8)),n.c.group.scale.setScalar(n.scale),n.hop=o?Math.abs(Math.sin(this.t*5))*.25:Ps(n.hop,0,Math.min(1,t*8)),n.c.group.position.set(r[0],r[1]+n.hop,r[2]),n.c.group.rotation.y=Yf(n.c.group.rotation.y,this.mode==="lobby"?Math.sin(this.t*.7+s)*.3:Math.sin(this.t*.6+s*2)*.35,Math.min(1,t*4)),n.c.update(t,{speed:0,grounded:!0,vy:0,stun:0,dive:0,celebrate:o||this.mode==="lobby"&&Math.floor(this.t*.5+s)%2===0}),n.tag&&n.tag.scale.set(2.4,.6,1)}),this.ambient.update(this.t,e.position),this.particles.update(t)}},na=class{constructor(t,e){this.info=t,this.id=t.id,this.name=t.name,this.model=new Cs(t.char),e.add(this.model.group),this.tag=Dr(t.name,Di[t.char].color),this.tag.position.set(0,this.model.height+.7,0),this.model.group.add(this.tag),this.snaps=[],this.x=0,this.y=-50,this.z=0,this.yaw=Math.PI,this.speed=0,this.flags=0,this.vy=0,this.vx=0,this.vz=0,this.sw=0,this.ds=[],this.dMin=0,this.jit=0,this.rs=0,this.has=!1,this.finished=!1,this.lastLanded=!1,this.rxAt=Date.now(),this.stunT=0}push(t){t.rs!==this.rs&&(this.snaps.length=0,this.rs=t.rs);let e=this.snaps[this.snaps.length-1];if(this.rxAt=Date.now(),e&&t.ts<=e.ts){if(e.ts-t.ts<400)return;this.snaps.length=0,this.ds.length=0}let n=Date.now(),s=n-t.ts;for(this.ds.push([n,s]);this.ds.length>1&&n-this.ds[0][0]>4e3;)this.ds.shift();let r=1/0;for(let o of this.ds)o[1]<r&&(r=o[1]);this.dMin=r,this.jit=this.jit*.92+Math.abs(s-r)*.08,this.snaps.push(t),this.snaps.length>40&&this.snaps.shift()}renderTime(){return Date.now()-this.dMin-En(70+this.jit*2.2,70,260)}update(t,e){let n=this.snaps;if(!n.length)return;for(;n.length>2&&n[1].ts<=t;)n.shift();let s=n[0],r=n[1]||n[0],o=0;if(n.length>1){let d=Math.max(1,r.ts-s.ts);o=En((t-s.ts)/d,0,1+220/d)}let a=Ps(s.x,r.x,o),l=Ps(s.y,r.y,o),c=Ps(s.z,r.z,o);if(!this.has)this.x=a,this.y=l,this.z=c,this.has=!0;else{let d=1-Math.exp(-28*e),m=this.x,y=this.z;this.x+=(a-this.x)*d,this.y+=(l-this.y)*d,this.z+=(c-this.z)*d,e>0&&(this.vx+=((this.x-m)/e-this.vx)*.25,this.vz+=((this.z-y)/e-this.vz)*.25)}this.yaw=Yf(this.yaw,r.r,1-Math.exp(-16*e)),this.speed=r.a&8192?0:Ps(s.sp,r.sp,En(o,0,1)),this.flags=r.a,Date.now()-this.rxAt>700&&(this.flags&=-23,this.speed=0),this.vy=n.length>1?(r.y-s.y)/Math.max(.02,(r.ts-s.ts)/1e3):0;let h=this.model.group;if(h.position.set(this.x,this.y,this.z),h.rotation.y=this.yaw,this.flags&8192){let d=vc.defs[this.flags>>14&7];d&&(h.position.y+=rn[d.kind].seat)}this.flags&2?this.stunT=(this.stunT||0)+e:this.stunT=0,this.stunT>1.2&&(this.flags&=-3);let f=!!(this.flags&1),u=f&&!this.lastLanded;this.lastLanded=f,this.sw=this.flags&16?Math.min(1,(this.sw||.001)+e/.42):0,this.model.update(e,{speed:this.speed,grounded:f,vy:this.vy,stun:this.flags&2?1:0,dive:this.flags&4?1:0,celebrate:!!(this.flags&8),swing:this.sw,shield:!!(this.flags&32),leader:!!this.leader,mega:!!(this.flags&128),landed:u})}dispose(t){t.remove(this.model.group),this.tag.material.map.dispose(),this.tag.material.dispose(),this.model.dispose()}},Oe=new Set,bn={jump:!1,dive:!1,grab:!1},kc=class i{constructor(t,e,n,s){this.level=t,this.meta=Xo[t],this.multi=s.multi,this.localId=n,this.players=e,this.t0=s.t0,this.phase="countdown",this.finished=!1,this.over=!1,this.finishTime=0,this.finishedMap=new Map,this.camYaw=0,this.camPitch=.34,this.camDist=8.2,this.camPos=new O,this.camTarget=new O,this.camInit=!1,this.sendT=0,this.rs=0,this.cpIdx=0,this.cpCur=null,this.stepDist=0,this.lastCount=99,this.hudT=0,this.hintT=0,this.warnSec=-1,this.hang=null,this.hangCd=0,this.hangHint=!1,this.levelTime=-4,this.batCd=0,this.swingT=0,this.batPending=!1,this.swingMega=!1,this.fx={turbo:0,jump:0,shield:0,mega:0},this.fxSig="";let r=ta[this.meta.key],o=this.scene=new Ri;o.background=new Ht(r.fog),o.fog=new ar(r.fog,r.fogNear,r.fogFar),o.environment=M0,o.environmentIntensity=r.env,this.camera=new an(62,window.innerWidth/window.innerHeight,.1,1800);let{world:a,info:l}=Zp(t,!1,n0(),s.seed||1);this.world=a,this.info=l,o.add(a.group),a.onEvent=null,this.sky=Lf(r),o.add(this.sky),this.water=Df(r,a.waterY),o.add(this.water),this.scenery=i0(o,this.meta.key,l,a),this.poolMeshes=[];for(let d of a.pools){let m=h0(d),y=m.material.uniforms;y.fogC.value.set(r.fog),y.fogN.value=r.fogNear,y.fogF.value=r.fogFar,y.skyTop.value.set(r.top),y.skyHor.value.set(r.horizon);let p=f0(d);o.add(m,p),this.poolMeshes.push({wm:m,cm:p,pl:d})}if(this.cars=[],this.drive=null,this.lookT=0,this.nearCar=null,this.hornCd=0,this.skidT=0,l.cars){for(let d of l.cars){let m=m0(d.id);m.rotation.order="YXZ",m.position.set(d.x,d.y||0,d.z),m.rotation.y=d.yaw,o.add(m);let y=d0(d.id,d.x,d.z,d.yaw);y.y=d.y||0,this.cars.push({st:y,mesh:m})}this.skyG=0;try{this.racerOk=localStorage.getItem("ph_racer")==="1"}catch{this.racerOk=!1}this.applyFree(),s.multi&&vt.pendingCars&&(this.onCars(vt.pendingCars),vt.pendingCars=null)}o.add(new _s(r.hemiSky,r.hemiGround,r.hemiI));let c=this.sun=new Ms(r.sun,r.sunI);this.sunDir=new O(...r.sunPos).normalize().multiplyScalar(90),c.castShadow=he.shadows,c.shadow.mapSize.set(Hn?1024:2048,Hn?1024:2048);let h=c.shadow.camera;h.left=-40,h.right=40,h.top=40,h.bottom=-40,h.near=5,h.far=220,c.shadow.bias=-3e-4,c.shadow.normalBias=.04,o.add(c,c.target),this.particles=new jo(600),o.add(this.particles.points),this.particles.setScale(Dn.domElement.height),this.ambient=new Qo(this.meta.key,320),o.add(this.ambient.points),this.remotes=new Map;let f=e.findIndex(d=>d.id===n);this.slot=Math.max(0,f);let u=e[this.slot]||{name:"Player",char:0};if(this.me={body:$p(),model:new Cs(u.char),name:u.name,char:u.char},o.add(this.me.model.group),this.me.model.group.rotation.order="YXZ",this.me.tag=Dr(u.name,Di[u.char].color),this.me.tag.position.set(0,this.me.model.height+.7,0),this.me.model.group.add(this.me.tag),e.forEach((d,m)=>{d.id!==n&&this.remotes.set(d.id,new na(d,o))}),this.spawn(this.slot),this.an=this.meta.free&&!this.meta.arena?new Fc(this):null,document.body.classList.toggle("free-map",!!this.meta.free),this.quest=this.meta.quest?{q:wp(),vis:new bc(a,l),L:zi()}:null,this.victory=0,this.hopT=0,this.hunt=this.meta.hunt?{vis:new Tc(a,l,o),h:l.hunt.st,L:l.hunt.L}:null,this.gunCd=0,this.fireHeld=!1,document.body.classList.toggle("hunt-map",!!this.hunt),this.hunt){this.me.model.group.add(Bf());for(let d of this.remotes.values())d.model.group.add(Bf())}this.buildProgress(),this.buildBoxes(),document.body.classList.add("in-race"),pt("hud-level").textContent=this.meta.name,pt("hud").classList.remove("hidden"),pt("hud-hint").classList.remove("fade"),this.hintT=8,this.setShadows(he.shadows),zr(t),Dc(!1),this.pos=this.me.body}updateQuest(t){let e=this.quest,n=this.me.body;if(!this.multi&&this.levelTime>=0&&!this.over){let s=Rp(e.q,t,[{id:this.localId,x:n.x,y:n.y,z:n.z}],this.an.list,1,e.L,[]);for(let r of s)this.questEvent(r)}e.vis.setState(e.q),e.vis.update(t),this.victory>0&&(this.victory+=t,this.hopT-=t,this.hopT<=0&&n.grounded&&!(this.an&&this.an.mount)&&(this.hopT=.7+Math.random()*.3,n.vy=9.5,n.grounded=!1),Math.random()<t*14&&this.particles.emit(n.x+(Math.random()-.5)*8,n.y+7,n.z+(Math.random()-.5)*8,3,{color:["#ff5fa8","#ffd23f","#4cc9f0","#80ed99"][Math.random()*4|0],speed:2.5,up:-1,life:1.6,size:.4,gravity:3,spread:1}))}questEvent(t){let e=this.quest,n=e.L;if(e.vis.event(t),t.k==="boulder"){let s=n.chapters[t.ch].boulderZ;Et.roar(1),this.toast("THE BOULDER FALLS! A BEAST APPEARS - hit it with the BAT!"),this.particles.emit(0,3,s,60,{color:"#bdb6a8",speed:8,up:4,life:1.2,size:.8,gravity:4,spread:1})}else t.k==="gate"?(Et.tame(),this.toast(t.ch>=Ce.CH-1?"BEAST BEATEN! Now free the DRAGON!":"BEAST BEATEN - the GATE opens! Next maze ahead...")):t.k==="cage"?(Et.roar(1),this.toast("THE DRAGON IS FREE!")):t.k==="victory"&&(this.victory=.001,Et.go(),this.toast("VICTORY! YOU FREED THE DRAGON!"))}questNet(t){Object.assign(this.quest.q,{ch:t.ch,ph:t.ph,n:t.n,occ:t.occ||[],hold:t.hold||0})}updateHunt(t){let e=this.hunt,n=this.me.body;if(this.gunCd>0&&(this.gunCd-=t),!this.multi&&this.levelTime>=0&&!this.over)for(let s of Gp(e.h,t,[{id:this.localId,x:n.x,y:n.y,z:n.z}],this.an.list,1,e.L,[]))this.huntEvent(s);(this.fireHeld||Oe.has("KeyB")||De.fire)&&this.fire(),e.vis.update(t)}huntEvent(t){this.hunt.vis.event(t),t.k==="wave"?(Et.roar(1),this.toast(`CHAPTER ${t.ch+1}: ${t.n} BEASTS! SHOOT THEM ALL!`)):t.k==="gate"?(Et.tame(),this.toast("ALL BEASTS DOWN! THE GATE OPENS - now the MACHINE...")):t.k==="door"?(Et.door(),this.toast("THE GEARS TURN - THE HEAVY DOOR RISES!")):t.k==="lift"?(Et.tame(),this.toast("TOP OF THE CLIFF! Friends: ride up too!")):t.k==="chapter"?(Et.go(),this.toast(`CHAPTER ${t.ch+1}!`)):t.k==="end"&&(Et.go(),this.toast("YOU MADE IT! MORE CHAPTERS COMING SOON!"))}huntNet(t){Vp(this.hunt.h,t)}huntHud(){let t=this.hunt.h,e=`Ch ${t.ch+1}/${Ye.CH}`;return t.ph===Ke.WAIT?`${e} \u2022 GO ON!`:t.ph===Ke.BEAST?`${e} \u2022 BEASTS LEFT: ${t.left}`:t.ph===Ke.MACH?t.ch===0?`${e} \u2022 PLATES ${(t.occ||[]).filter(n=>n).length}/${t.n}`:`${e} \u2022 LIFT!`:"THE END (for now)"}fire(){let t=this.hunt;if(!t||this.over||this.levelTime<0||this.menuOpen||this.drive||this.gunCd>0)return;let e=this.me.body;if(e.stun>0)return;this.gunCd=Oc.rate;let n=this.camYaw+Math.PI,s=x0(this.an.list,e,n),r=s?Math.atan2(s.x-e.x,s.z-e.z):n;e.yaw=r;let o=d=>+d.toFixed(1),a=e.x+Math.sin(r)*.95+Math.cos(r)*.36,l=e.y+1.2,c=e.z+Math.cos(r)*.95-Math.sin(r)*.36,h,f,u;if(s){let d=rn[s.kind];h=s.x,f=s.y+d.seat*.55,u=s.z}else h=a+Math.sin(r)*32,f=l,u=c+Math.cos(r)*32;t.vis.tracer(a,l,c,h,f,u),Et.shot(),this.particles.emit(a,l,c,5,{color:"#ffe27a",speed:3,up:1,life:.2,size:.25}),s&&this.particles.emit(h,f,u,8,{color:"#ff6b3d",speed:4,up:2,life:.3,size:.3}),this.multi?this.sendNet({t:"shoot",id:s?s.id:-1,ox:o(a),oy:o(l),oz:o(c),tx:o(h),ty:o(f),tz:o(u)}):s&&this.an.handle(kp(s,this.localId))}setShadows(t){this.sun.castShadow=t}spawnPoint(t){return[(t-1.5)*3.6,0,this.info.spawn.z]}spawn(t){let[e,n,s]=this.spawnPoint(t);Rc(this.me.body,e,n+.02,s,Math.PI),this.cpCur=null,this.cpIdx=0}buildProgress(){let t=document.querySelector("#hud-progress .track");t.querySelectorAll(".dot").forEach(n=>n.remove()),this.dots=new Map;let e=(n,s)=>{let r=document.createElement("div");r.className="dot"+(s?" me":""),r.style.background=Di[n.char].color,r.innerHTML=`<em>${n.name.replace(/[<>&]/g,"")}</em>`,t.appendChild(r),this.dots.set(n.id,r)};this.players.forEach(n=>e(n,n.id===this.localId))}now(){return this.multi?vt.net.now():performance.now()}look(t,e){this.camYaw-=t*.0024,this.camPitch=En(this.camPitch+e*.0021,-.15,1.2),this.lookT=1.6}update(t){let e=this.me.body,n=this.world;this.levelTime=(this.now()-this.t0)/1e3;let s=this.levelTime;if(n.update(s,t),n.carry(e),e.yawOff&&(e.yaw+=e.yawOff,e.yawOff=0),s<0){let _=Math.ceil(-s);_!==this.lastCount&&_<=3&&(this.lastCount=_,this.count(String(_)),Et.tick())}else this.phase==="countdown"&&(this.phase="race",this.count("GO!"),Et.go(),this.lastCount=0,this.multi&&setTimeout(()=>{X===this&&!this.over&&this.toast(Hn?"Tap BAT to bonk rivals!":"Press B or click to swing the BAT!")},1400),this.cars.length&&setTimeout(()=>{X===this&&!this.over&&!this.drive&&this.toast("\u{1F697} Follow the CAR STATION signs to drive!")},this.multi?4200:1600));let r=s>=0&&!this.over,o=0,a=0;(Oe.has("KeyW")||Oe.has("ArrowUp"))&&o++,(Oe.has("KeyS")||Oe.has("ArrowDown"))&&o--,(Oe.has("KeyD")||Oe.has("ArrowRight"))&&a++,(Oe.has("KeyA")||Oe.has("ArrowLeft"))&&a--,Oe.has("KeyQ")&&(this.camYaw+=1.9*t),Oe.has("KeyE")&&(this.camYaw-=1.9*t),(De.x||De.y)&&(a+=De.x,o+=De.y);let l=Math.sin(this.camYaw),c=Math.cos(this.camYaw),h=-l*o+c*a,f=-c*o-l*a,u=Math.hypot(h,f);u>1&&(h/=u,f/=u);let d={mx:r?h:0,mz:r?f:0,jumpPressed:r&&bn.jump,jumpHeld:r&&(Oe.has("Space")||De.jump),divePressed:r&&bn.dive};bn.jump=!1,bn.dive=!1,this.drive&&e.stun>0&&(e.stun=Math.max(0,e.stun-t)),e.stun>0?(this.stunReal=(this.stunReal||0)+t,this.stunReal>1.25&&(e.stun=0,e.immune=.6,this.stunReal=0)):this.stunReal=0;let m=Math.max(1,Math.ceil(t/(1/90))),y=t/m,p=!1;n.nearPlayers=[e,...this.remotes.values()];let g=this.updateSwing(t,s,e,d,r);if(this.drive)this.updateDrive(t,r),e.events.length=0;else if(g)e.events.length=0;else for(let _=0;_<m;_++)Jp(n,e,y,d),d.jumpPressed=!1,d.divePressed=!1,e.events.length&&(p=this.events(e)||p,e.events.length=0);if(r&&!this.drive){let _=n.checkHazards(e,s);_&&Lr(e,_.nx,_.nz,_.pow)&&(Et.hit(),this.particles.emit(e.x,e.y+.9,e.z,26,{color:"#ffffff",speed:5,up:3,life:.5,size:.3}),this.particles.emit(e.x,e.y+.9,e.z,14,{color:"#ffd23f",speed:7,up:4,life:.4,size:.25}))}this.drive||this.updateBat(t,e),this.updatePowerups(t,e),this.drive||(this.softCollide(e),this.softCars(e,r)),this.checkpoints(e),!this.finished&&s>=0&&e.z<this.info.finishZ&&e.y>this.info.finishY-3&&Math.abs(e.x)<16&&this.onLocalFinish(),e.grounded&&!e.stun&&!this.drive&&!(e.swim>.3)&&(this.stepDist+=Math.hypot(e.vx,e.vz)*t,this.stepDist>2.4&&(this.stepDist=0,Math.hypot(e.vx,e.vz)>3&&(Et.step(),this.particles.emit(e.x,e.y+.05,e.z,2,{color:"#ffffff",speed:.8,up:.8,life:.35,size:.22,gravity:1}))));let E=this.me.model,S=E.group,x=e.swim>.3?En((e.swim-.3)/.4,0,1):0;if(this.drive?this.seatModel(S,this.drive):(S.position.set(e.x,e.y,e.z),S.rotation.y=e.yaw,S.rotation.x=x*.55*En(Math.hypot(e.vx,e.vz)/3,.25,1),S.scale.setScalar(1),this.an&&this.an.seatLocal(S)),E.update(t,{speed:this.drive||this.an&&this.an.mount?0:Math.hypot(e.vx,e.vz),grounded:this.drive||x>0?!0:e.grounded&&!this.hang,vy:this.drive?0:e.vy,stun:this.drive?0:e.stun,dive:this.drive?0:e.dive,celebrate:this.finished||this.over&&this.winnerSelf||this.victory>0,swing:this.swingT,shield:e.shield>0,leader:this.leaderId===this.localId,mega:this.swingMega&&this.swingT>0,landed:p}),this.tagScale(this.me.tag,S.position,.85),this.multi){this.leaderId=this.findLeader();for(let _ of this.remotes.values())_.leader=_.id===this.leaderId,_.update(_.snaps.length?_.renderTime():0,t),this.tagScale(_.tag,_.model.group.position,1),_.flags&64&&Math.random()<.6&&this.particles.emit(_.x,_.y+.3,_.z,1,{color:"#5fc2ff",speed:1,up:.5,life:.35,size:.35});this.sendT+=t,this.sendT>=.033&&this.sendSnap()}this.updateCars(t,r),this.an&&this.an.update(t),this.quest&&this.updateQuest(t),this.hunt&&this.updateHunt(t),this.updateCamera(t),this.updateLights(),this.water.material.uniforms.time.value=performance.now()/1e3,this.water.position.x=this.camera.position.x,this.water.position.z=this.camera.position.z,this.sky.position.copy(this.camera.position),this.scenery.update(s,this.camera.position),this.ambient.update(performance.now()/1e3,this.camera.position),this.particles.update(t),this.hud(t)}events(t){let e=!1;for(let n of t.events)if(n==="jump")Et.jump(),this.particles.emit(t.x,t.y+.05,t.z,5,{color:"#ffffff",speed:1.5,up:1,life:.35,size:.25,gravity:2});else if(n==="land")Et.land(t.landSpeed),e=!0,this.particles.emit(t.x,t.y+.05,t.z,Math.min(14,5+t.landSpeed*.4),{color:"#ffffff",speed:2.4,up:1.4,life:.45,size:.3,gravity:3});else if(n==="bounce")Et.bounce(),e=!0,this.particles.emit(t.x,t.y+.1,t.z,18,{rainbow:!0,speed:3,up:2,life:.6,size:.3});else if(n==="dive")Et.dive();else if(n==="splash"){Et.splash();let s=t.swim>0&&t.waterSurf,r=ta[this.meta.key],o=s?"#ffffff":r.water==="lava"?"#ff9a2a":r.water==="grid"?"#d11cff":"#bfeaff";this.particles.emit(t.x,(s?t.waterSurf:this.world.waterY)+.2,t.z,s?34:40,{color:o,speed:4,up:s?6:9,life:.9,size:.45,gravity:16,spread:.6})}else n==="stroke"?(Et.jump(),this.particles.emit(t.x,t.waterSurf+.1,t.z,10,{color:"#ffffff",speed:2,up:3,life:.6,size:.3,gravity:10})):n==="fell"&&this.onFell();return e}seatModel(t,e){let n=e.st,s=e.mesh.userData.seat;t.position.set(n.x+Math.sin(n.yaw)*s.z,n.y+s.y,n.z+Math.cos(n.yaw)*s.z),t.rotation.y=n.yaw,t.rotation.x=0,t.scale.setScalar(.8)}nearestFreeCar(t){if(t.stun>0||t.y>1.5||t.swim>.3)return null;let e=null,n=4.6;for(let s of this.cars){if(s.st.driver!==-1&&s!==this.drive||ai[s.st.id].racer&&!this.racerOk||Math.abs(t.y-s.st.y)>3)continue;let r=Math.hypot(t.x-s.st.x,t.z-s.st.z);r<n&&(n=r,e=s)}return e}toggleCar(){if(this.an){this.an.toggleMount();return}if(this.over||this.finished||this.levelTime<0||this.menuOpen||!this.cars.length)return;let t=this.me.body;if(this.drive){let e=this.drive,n=e.st;if(Math.abs(n.speed)>5){this.toast("Slow down to get out!");return}if(n.y>1.2){this.toast(this.racerOk?"Not up here - stop on the RACER GARAGE plaza to swap cars":"Finish the SKY SPEEDWAY to win a RACER!");return}let s=Math.cos(n.yaw),r=-Math.sin(n.yaw);Rc(t,n.x+s*2.4,.05,n.z+r*2.4,n.yaw),t.hitCd=.3,n.vx=n.vz=n.speed=0,n.driver=-1,n.parked=!0,this.drive=null,document.body.classList.remove("driving"),Of(),Et.door(),this.g_g(this.me.model.group),this.multi&&vt.net.send({t:"carpark",c:n.id,x:+n.x.toFixed(2),y:+n.y.toFixed(2),z:+n.z.toFixed(2),r:+n.yaw.toFixed(3)}),this.camYaw=n.yaw+Math.PI,this.camInit=!1}else{let e=this.nearestFreeCar(t);if(!e)return;this.drive=e,e.st.driver=this.localId,e.st.parked=!1,t.vx=t.vz=t.vy=0,t.grounded=!0,document.body.classList.add("driving"),document.body.classList.remove("near-car"),document.body.classList.remove("near-swing"),o0(),Et.door(),Et.vroom(),this.camPitch=.3,this.camYaw=e.st.yaw+Math.PI,this.toast(ai[e.st.id].name.toUpperCase()+"!  "+(Hn?"use the joystick to drive, tap the door to get out":"W/S drive \u2022 A/D steer \u2022 C get out"))}}g_g(t){t.scale.setScalar(1),t.rotation.x=0}skyGates(t){let e=this.info.sky;if(!e||t.y<e.y-4||this.skyG>=e.gates.length)return;let n=this.skyG,s=e.gates[n],r=n===1;if(Math.abs(t.x-s.x)<(r?4:s.w)&&Math.abs(t.z-s.z)<(r?s.w:4))if(this.skyG++,Et.checkpoint(),this.particles.emit(t.x,t.y+1.5,t.z,24,{color:n===e.gates.length-1?"#ff3b3b":"#7cff3d",speed:6,up:5,life:.8,size:.4}),n===e.gates.length-1){this.racerOk=!0,this.applyFree();try{localStorage.setItem("ph_racer","1")}catch{}Et.win(),this.toast("\u{1F3C1} SKY SPEEDWAY CLEARED! RED RACERS UNLOCKED & the sky road is now obstacle-free! Stop on the RACER GARAGE plaza and press "+(Hn?"the red car button":"R"))}else this.toast("SKY GATE "+(n+1)+" / "+(e.gates.length-1)+"  \u2713")}applyFree(){this.info.track&&(this.info.track.free=!!this.racerOk),this.world&&this.world.skyObst&&(this.world.skyObst.visible=!this.racerOk)}garageSpot(t){let e=this.info.sky;return!!e&&t.y>e.y-3&&Math.hypot(t.x-e.garage.x,t.z-e.garage.z)<e.garage.r}swapRacer(){if(!this.drive||this.over||this.menuOpen)return;let t=this.drive,e=t.st,n=this.info.sky;if(ai[e.id].racer){this.toast("You already drive a RACER!");return}if(!this.racerOk){this.toast("Finish the SKY SPEEDWAY to unlock the RACERS!");return}if(!this.garageSpot(e)){this.toast("Drive to the RACER GARAGE (end of the sky road) to swap");return}if(Math.abs(e.speed)>5){this.toast("Slow down first!");return}let s=null,r=22;for(let o of this.cars){if(!ai[o.st.id].racer||o.st.driver!==-1&&o!==t)continue;let a=Math.hypot(e.x-o.st.x,e.z-o.st.z);a<r&&(r=a,s=o)}if(!s){this.toast("All 4 racers are taken - wait for one!");return}e.vx=e.vz=e.speed=0,e.driver=-1,e.parked=!0,this.multi&&vt.net.send({t:"carpark",c:e.id,x:+e.x.toFixed(2),y:+e.y.toFixed(2),z:+e.z.toFixed(2),r:+e.yaw.toFixed(3)}),this.drive=s,s.st.driver=this.localId,s.st.parked=!1,s.st.vx=s.st.vz=s.st.speed=0,Et.door(),Et.vroom(),this.shake=.3,this.camYaw=s.st.yaw+Math.PI,this.toast("\u{1F3CE} RACER!  Top speed 150 km/h \u2022 big horn on "+(Hn?"the horn button":"H"))}updateDrive(t,e){let n=this.drive,s=n.st,r=this.me.body,o=0,a=0,l=!1;if(e&&((Oe.has("KeyW")||Oe.has("ArrowUp"))&&o++,(Oe.has("KeyS")||Oe.has("ArrowDown"))&&o--,(Oe.has("KeyD")||Oe.has("ArrowRight"))&&a++,(Oe.has("KeyA")||Oe.has("ArrowLeft"))&&a--,l=Oe.has("Space"),De.x||De.y)){let u=Math.sin(this.camYaw),d=Math.cos(this.camYaw),m=-u*De.y+d*De.x,y=-d*De.y-u*De.x,p=Math.min(1,Math.hypot(m,y));if(p>.12){let g=Math.hypot(m,y)||1;m/=g,y/=g;let E=m*Math.sin(s.yaw)+y*Math.cos(s.yaw),S=-m*Math.cos(s.yaw)+y*Math.sin(s.yaw);E>-.35?(o+=Math.min(1,p*1.25)*(.45+.55*Math.max(0,E)),a+=E<.2?Math.sign(S||1):Math.max(-1,Math.min(1,S*2.4))):(o-=Math.min(1,p*1.25),a+=Math.max(-1,Math.min(1,S*2)))}}let c=this.cars.filter(u=>u!==n).map(u=>u.st),h="",f={gas:En(o,-1,1),steer:En(a,-1,1),hb:l};for(let u=0;u<2;u++)h=p0(s,t/2,f,this.info.track,c,Math.max(0,this.levelTime))||h;if(h==="bump"&&(Et.land(18),this.particles.emit(s.x,.8,s.z,12,{color:"#ffd23f",speed:4,up:3,life:.4,size:.25}),this.shake=Math.max(this.shake||0,.25)),h==="crash"&&(Et.land(34),this.particles.emit(s.x,.9,s.z,26,{color:"#ffb347",speed:7,up:5,life:.6,size:.35}),this.shake=Math.max(this.shake||0,Math.min(1,.4+(s.crash||0)*.04)),s.crash=0),r.x=s.x,r.y=s.y,r.z=s.z,r.vx=s.vx,r.vz=s.vz,r.vy=0,r.grounded=!0,r.ground=null,r.yaw=s.yaw,r.stun=0,a0(Math.abs(s.speed)/ai[s.id].max,o>0),this.skyGates(s),this.hornCd-=t,this.skidT-=t,s.drift>.55&&Math.abs(s.speed)>8){this.skidT<=0&&(this.skidT=.25,Et.skid());for(let u of[-1,1])this.particles.emit(s.x-Math.sin(s.yaw)*1.5+Math.cos(s.yaw)*u*.9,.25,s.z-Math.cos(s.yaw)*1.5-Math.sin(s.yaw)*u*.9,1,{color:"#e8e8e8",speed:1.2,up:1.2,life:.5,size:.5,gravity:-.5})}s.boost>0&&Math.random()<.8&&this.particles.emit(s.x-Math.sin(s.yaw)*2.2,.5,s.z-Math.cos(s.yaw)*2.2,1,{color:"#ffb347",speed:2,up:1,life:.35,size:.4})}honk(){if(this.drive&&this.hornCd<=0){let t=ai[this.drive.st.id].racer;this.hornCd=t?.9:.4,t?Et.honkBig():Et.honk(),t&&(this.shake=Math.max(this.shake||0,.12))}}onCars(t){for(let e of Object.keys(t||{})){let n=this.cars[+e],s=t[e];!n||!s||n===this.drive||(n.st.x=+s.x,n.st.z=+s.z,n.st.y=+s.y||0,n.st.yaw=+s.r,n.mesh.position.set(n.st.x,n.st.y,n.st.z),n.mesh.rotation.y=n.st.yaw)}}softCars(t,e){if(!(!e||this.finished))for(let n of this.cars){if(n===this.drive)continue;let s=n.st,r=ai[s.id],o=t.x-s.x,a=t.z-s.z;if(o*o+a*a>40||Math.abs(t.y-s.y)>2.5)continue;let l=Math.sin(s.yaw),c=Math.cos(s.yaw),h=o*l+a*c,f=-o*c+a*l,u=r.hl+.45,d=r.hw+.45;if(Math.abs(h)>=u||Math.abs(f)>=d)continue;if(Math.abs(s.speed)>6&&t.hitCd<=0){let p=Math.sign(s.speed)||1,g=l*p+o*0,E=c*p;g+=-c*Math.sign(f||1)*.5,E+=l*Math.sign(f||1)*.5;let S=Math.hypot(g,E)||1;if(Lr(t,g/S,E/S,15)){this.bonked("HIT BY A CAR!","",t);continue}}let m=u-Math.abs(h),y=d-Math.abs(f);if(m<y){let p=Math.sign(h||1)*m;t.x+=l*p,t.z+=c*p}else{let p=Math.sign(f||1)*y;t.x+=-c*p,t.z+=l*p}}}updateCars(t,e){var a;this.lastDt=t;let n=this.me.body,s=performance.now()/1e3;for(let l of this.cars)l!==this.drive&&(l.st.driver=-1,l.st.speed=0,l.st.vx=l.st.vz=0);let r=[];for(let l of this.remotes.values()){let c=l.model.group;if(c.rotation.order="YXZ",!!l.has)if(l.flags&256){let h=this.cars[l.flags>>9&7];if(h&&h!==this.drive){let f=h.st,u=(l.yaw-((a=f._py)!=null?a:l.yaw)+Math.PI*3)%(Math.PI*2)-Math.PI;f.driver=l.id,f.parked=!1,f.x=l.x,f.z=l.z;{let d=f.y;f.y=l.y||0,f.pitch+=((Math.abs(l.speed)>1?Math.atan2(f.y-d,Math.max(.01,Math.abs(l.speed)*t)):0)-f.pitch)*Math.min(1,t*8)}f.speed=l.speed,f.vx=Math.sin(l.yaw)*l.speed,f.vz=Math.cos(l.yaw)*l.speed,f._py=l.yaw,f.steer+=(En(-u/Math.max(t,.008)*.45,-1,1)-f.steer)*Math.min(1,t*8),f.yaw=l.yaw,this.seatModel(c,h),this.tagScale(l.tag,c.position,1)}}else c.scale.setScalar(1),c.rotation.x=l.flags&4096?.55:0,l.flags&4096&&r.push([l.x,l.z,.35+Math.min(1,l.speed/8)*.65])}n.swim>.3&&!this.drive&&r.push([n.x,n.z,.35+Math.min(1,Math.hypot(n.vx,n.vz)/8)*.65]),n.swim>.3&&!this.drive&&Math.hypot(n.vx,n.vz)>2&&Math.random()<.5&&this.particles.emit(n.x,n.waterSurf+.08,n.z,1,{color:"#ffffff",speed:1.2,up:1.6,life:.5,size:.28,gravity:6,spread:.5});for(let l of this.poolMeshes){let c=l.wm.material.uniforms;c.time.value=s,l.cm.material.uniforms.time.value=s;for(let h=0;h<4;h++){let f=r[h],u=c.ag.value[h];f?u.set(f[0],f[1],f[2]):u.set(0,0,0)}}{let l=!1;for(let h of this.poolMeshes){let f=h.pl,u=this.camera.position;u.x>f.x0&&u.x<f.x1&&u.z>f.z0&&u.z<f.z1&&u.y<f.surf&&(l=!0)}let c=pt("uw");c&&c.classList.contains("on")!==l&&c.classList.toggle("on",l)}for(let l of this.cars)l.mesh.position.set(l.st.x,l.st.y,l.st.z),l.mesh.rotation.y=l.st.yaw,g0(l.mesh,l.st,t);let o=!this.an&&!this.drive&&e&&!this.menuOpen&&this.nearestFreeCar(n);!this.an&&!!o!==document.body.classList.contains("near-car")&&document.body.classList.toggle("near-car",!!o);{let l=!!this.drive&&this.racerOk&&!ai[this.drive.st.id].racer&&this.garageSpot(this.drive.st)&&Math.abs(this.drive.st.speed)<5;l!==document.body.classList.contains("sky-swap")&&document.body.classList.toggle("sky-swap",l)}if(this.drive){let l=pt("car-speed");if(l){let c=Math.round(Math.abs(this.drive.st.speed)*3.6);l.firstElementChild.textContent!==String(c)&&(l.firstElementChild.textContent=c)}}}onFell(){let t=this.me.body,e=this.cpCur,n=(this.slot-1)*1.6,s,r,o;if(e)s=En(e.x+n,e.x-e.w/2+1.5,e.x+e.w/2-1.5),r=e.y+.05,o=e.spawn[2];else{let l=this.spawnPoint(this.slot);s=l[0],r=l[1]+.02,o=l[2]}Rc(t,s,r,o,Math.PI),this.rs++,Et.respawn();let a=pt("flash");a.classList.add("on"),setTimeout(()=>a.classList.remove("on"),60),this.particles.emit(s,r+.8,o,30,{rainbow:!0,speed:3,up:3,life:.8,size:.3}),this.camInit=!1,this.camYaw=0}checkpoints(t){let e=this.world.checkpoints;for(;this.cpIdx<e.length&&t.z<e[this.cpIdx].z&&t.y>e[this.cpIdx].y-2.5&&Math.abs(t.x-e[this.cpIdx].x)<e[this.cpIdx].w/2+3;)this.cpCur=e[this.cpIdx],this.cpIdx++,Et.checkpoint(),this.toast("CHECKPOINT!"),this.particles.emit(t.x,t.y+1,t.z,24,{color:"#ffd23f",speed:3,up:5,life:.8,size:.3})}softCollide(t){if(this.finished)return;let e=ve.R*2+.06;for(let n of this.remotes.values()){if(!n.has||n.flags&8||Date.now()-n.rxAt>500)continue;let s=t.x-n.x,r=t.z-n.z,o=t.y-n.y;if(Math.abs(o)>ve.H*.8)continue;let a=Math.hypot(s,r);if(a>=e)continue;let l,c;if(a>.001)l=s/a,c=r/a;else{let p=t.yaw*7+1;l=Math.cos(p),c=Math.sin(p)}let h=e-a;t.x+=l*h*.62,t.z+=c*h*.62;{let p=Math.sin(t.yaw),g=Math.cos(t.yaw);if(Math.hypot(t.vx,t.vz)>1&&-(p*l+g*c)>.3){let S=-c,x=l,_=p*S+g*x;Math.abs(_)<.3&&(_=-g*S+p*x||1),_=Math.sign(_),t.x+=S*_*h*.55,t.z+=x*_*h*.55}}let f=n.vx||0,u=n.vz||0,d=(t.vx-f)*l+(t.vz-u)*c;if(this.multi&&d<-1.5){let p=performance.now();n.shoveAt>p-80||(n.shoveAt=p,vt.net.send({t:"shove",to:n.id,nx:+(-l).toFixed(3),nz:+(-c).toFixed(3),p:+Math.min(12,-d).toFixed(1)}))}let m=performance.now(),y=!(n.lastContact>m-150);if(n.lastContact=m,d<0&&y){let p=-1.7*d*.5;t.vx+=l*p,t.vz+=c*p,p>2.5&&(t.noCtrl=Math.max(t.noCtrl,.16)),n.flags&4&&-d>7&&t.hitCd<=0&&Lr(t,l,c,11)?this.bonked("TACKLED!",n.name||"",t):-d>6&&t.hitCd<=0&&(Et.land(6),this.particles.emit(t.x-l*.4,t.y+.9,t.z-c*.4,8,{color:"#ffffff",speed:3,up:2,life:.3,size:.25}))}}}bonked(t,e,n){Et.bonk(),this.toast(t+(e?"  \u2022 "+e:"")),this.particles.emit(n.x,n.y+1,n.z,22,{color:"#ffffff",speed:6,up:3,life:.5,size:.3}),this.particles.emit(n.x,n.y+1,n.z,14,{color:"#ffd23f",speed:8,up:4,life:.45,size:.28})}updateSwing(t,e,n,s,r){let o=this.world,a=o.swings;if(!a||!a.length)return!1;let l=this.swSt||(this.swSt=ou()),c=1e9;for(let p of a)c=Math.min(c,Math.hypot(p.x-n.x,p.y-p.len*.6-n.y,p.z-n.z));let h=(!!l.hang||c<a[0].len+7)&&!this.drive&&!this.over;h!==document.body.classList.contains("near-swing")&&document.body.classList.toggle("near-swing",h),h&&!this.hangHint&&(this.hangHint=!0,this.toast(Hn?"Tap GRAB when the swing is close - tap JUMP to let go!":"Press G to grab the swing - press SPACE to let go!"));let f=!!l.hang,u=Oe.has("KeyG")||De.grab,d=s.jumpPressed,m=bn.grab;bn.grab=!1;let y=au(o,n,l,e,t,u&&!this.drive,d,r,m&&!this.drive);if(!!l.hang!=!!this.hangLbl){this.hangLbl=!!l.hang;let p=document.querySelector("#b-grab em");p&&(p.textContent=l.hang?"JUMP TO LET GO":"GRAB")}return!f&&l.hang&&(Et.land(6),this.particles.emit(n.x,n.y+1.6,n.z,10,{color:"#ffffff",speed:3,up:2,life:.4,size:.25})),f&&!l.hang&&(Et.jump&&Et.jump(),s.jumpPressed=!1,bn.jump=!1),this.hang=l.hang,y&&(s.jumpPressed=!1,bn.jump=!1,n.stunReal=0,this.stunReal=0),y}sendSnap(){let t=this.me.body;this.sendT=0,this.lastSend=performance.now();let e=(t.grounded?1:0)|(t.stun>0?2:0)|(t.dive>0?4:0)|(this.finished?8:0)|(this.swingT>0?16:0)|(t.shield>0?32:0)|(this.fx.turbo>0?64:0)|(this.swingMega&&this.swingT>0?128:0)|(this.drive?256|this.drive.st.id<<9:0)|(this.an?this.an.flagBits():0)|(t.swim>.4&&!this.drive?4096:0)|(this.hang?1048576:0);vt.net.send({t:"s",x:+t.x.toFixed(2),y:+t.y.toFixed(2),z:+t.z.toFixed(2),r:+t.yaw.toFixed(2),a:e,sp:+Math.min(99,Math.hypot(t.vx,t.vz)).toFixed(1),ts:vt.net.stamp(),rs:this.rs})}swing(){return this.hunt||!(this.multi||this.meta.free)||this.over||this.finished||this.levelTime<0||this.batCd>0||this.an&&this.an.mount||this.me.body.stun>0?!1:(this.swingMega=this.fx.mega>0,this.swingMega&&this.fx.mega--,this.batCd=1.1,this.swingT=.001,this.batPending=!0,Et.swing(),!0)}updateBat(t,e){this.batCd>0&&(this.batCd-=t),this.swingT>0&&(this.swingT+=t/.42,e.stun>0?(this.swingT=0,this.batPending=!1):this.batPending&&this.swingT>=.55&&(this.batPending=!1,this.batHit(e)),this.swingT>=1&&(this.swingT=0))}batHit(t){this.an&&this.an.batHit(t);let e=Math.sin(t.yaw),n=Math.cos(t.yaw);for(let s of this.remotes.values()){if(!s.has||s.flags&8||Date.now()-s.rxAt>800)continue;let r=s.x-t.x,o=s.z-t.z,a=s.y-t.y,l=Math.hypot(r,o);if(l>(this.swingMega?4.4:2.9)||Math.abs(a)>1.7||l<.001||(r*e+o*n)/l<.1)continue;let c=e*.7+r/l*.3,h=n*.7+o/l*.3,f=Math.hypot(c,h)||1;c/=f,h/=f,vt.net.send({t:"bat",to:s.id,nx:+c.toFixed(3),nz:+h.toFixed(3),p:this.swingMega?2:1,ax:+t.x.toFixed(1),az:+t.z.toFixed(1)}),Et.bonk(),this.toast("BONK!  \u2022 "+(s.name||"")),this.particles.emit(s.x,s.y+1,s.z,24,{color:"#ffd23f",speed:7,up:4,life:.5,size:.3}),this.particles.emit(s.x,s.y+1,s.z,14,{color:"#ffffff",speed:5,up:3,life:.4,size:.25})}}sendNet(t){this.multi&&vt.net.send(t)}onAnimalBite(t){let e=this.me.body;if(this.over||this.levelTime<0)return;if(e.shield>0){this.toast("SHIELD BLOCKED!"),Et.pickup();return}let n=t.big?1:0,s=this.an&&this.an.list[t.id]?rn[this.an.list[t.id].kind]:null;e.immune>0||e.stun>.2||(e.hitCd=0,Lr(e,t.nx,t.nz,n?21:15)&&(e.vy=n?10:8,e.stun=n?.9:.7,this.bonked(s?s.sound:"GRRR!","",e),this.shake=Math.max(this.shake||0,.8)))}onShove(t){let e=this.me.body;if(this.over||this.finished||this.levelTime<0||e.shield>0)return;let n=En(+t.p||0,0,12),s=+t.nx,r=+t.nz;!Number.isFinite(s)||!Number.isFinite(r)||(e.x+=s*n*.05,e.z+=r*n*.05,e.vx+=s*n*.12,e.vz+=r*n*.12)}onBat(t){let e=this.me.body;if(this.over||this.finished||this.levelTime<0)return;let n=(this.players.find(r=>r.id===t.from)||{}).name||"";if(e.immune>0||e.stun>.2||Number.isFinite(t.ax)&&Number.isFinite(t.az)&&Math.hypot(t.ax-e.x,t.az-e.z)>7)return;if(e.hitCd=0,e.shield>0){this.toast("SHIELD BLOCKED!"),Et.pickup();return}let s=t.p===2;Lr(e,t.nx,t.nz,s?22:15)&&(e.vy=s?11:9,e.stun=s?1:.75,this.bonked(s?"MEGA BONK!":"BONKED!",n,e))}buildBoxes(){this.boxes=[];let t=[],e=(s,r,o)=>[-4,0,4].forEach(a=>t.push({x:s+a,y:o+1.35,z:r}));e(0,-10,0);let n=1e9;for(let s of this.world.checkpoints)Math.abs(s.z-n)<12||(n=s.z,e(s.x,s.z-5,s.y));if(!i.boxAssets){let s=document.createElement("canvas");s.width=s.height=128;let r=s.getContext("2d"),o=r.createLinearGradient(0,0,128,128);o.addColorStop(0,"#ffe45e"),o.addColorStop(1,"#ff8a1a"),r.fillStyle=o,r.fillRect(0,0,128,128),r.strokeStyle="#fff",r.lineWidth=8,r.strokeRect(6,6,116,116),r.fillStyle="#fff",r.strokeStyle="#7a3500",r.lineWidth=6,r.font="bold 92px Arial",r.textAlign="center",r.textBaseline="middle",r.strokeText("?",64,70),r.fillText("?",64,70);let a=new An(s);a.colorSpace=Fe,i.boxAssets={geo:new jt(.95,.95,.95),mat:new Xt({map:a,emissive:"#ff9a00",emissiveIntensity:.55,roughness:.35})}}for(let s of t){let r=new k(i.boxAssets.geo,i.boxAssets.mat);r.position.set(s.x,s.y,s.z),r.castShadow=!0,this.scene.add(r),this.boxes.push({...s,mesh:r,respawn:0})}}findLeader(){if(this.players.length<2||this.levelTime<4)return-1;let t=this.localId,e=this.finished?1e5:-this.me.body.z;for(let n of this.remotes.values()){if(!n.has)continue;let s=n.flags&8?1e5:-n.z;s>e+.5&&(e=s,t=n.id)}return t}pickup(t,e){t.respawn=9,t.mesh.visible=!1,Et.pickup();let n=this.multi?["turbo","turbo","turbo","jump","jump","shield","shield","mega","mega","mega"]:["turbo","jump","shield"],s=e||n[Math.random()*n.length|0],r=this.fx,o=this.me.body;return s==="turbo"?(r.turbo=5,this.toast("\u{1F680} TURBO!")):s==="jump"?(r.jump=7,this.toast("\u{1F998} SUPER JUMP!")):s==="shield"?(r.shield=8,this.toast("\u{1F6E1}\uFE0F SHIELD!")):(r.mega=2,this.toast("\u{1F3CF} MEGA BAT x2!")),this.particles.emit(o.x,o.y+1,o.z,26,{rainbow:!0,speed:4,up:4,life:.7,size:.32}),s}updatePowerups(t,e){let n=performance.now()/1e3,s=this.fx;for(let o of this.boxes){if(o.respawn>0){o.respawn-=t,o.respawn<=0&&(o.mesh.visible=!0);continue}o.mesh.rotation.y+=t*2,o.mesh.rotation.x=Math.sin(n*1.5+o.x)*.25,o.mesh.position.y=o.y+Math.sin(n*2.5+o.x)*.15,!(this.finished||this.over||this.levelTime<0)&&Math.abs(e.x-o.x)<1.3&&Math.abs(e.z-o.z)<1.3&&e.y<o.y+.8&&e.y+ve.H>o.y-.5&&this.pickup(o)}for(let o of["turbo","jump","shield"])s[o]>0&&(s[o]=Math.max(0,s[o]-t));e.speedMul=(s.turbo>0?1.4:1)*(this.an?this.an.speedK():1),e.jumpMul=s.jump>0?1.3:1,e.shield=s.shield,s.turbo>0&&Math.hypot(e.vx,e.vz)>3&&Math.random()<.7&&this.particles.emit(e.x,e.y+.3,e.z,1,{color:"#5fc2ff",speed:1,up:.5,life:.35,size:.35});let r=["turbo","jump","shield"].map(o=>s[o]>0?o+Math.ceil(s[o]):"").join("|")+"|"+s.mega;if(r!==this.fxSig){this.fxSig=r;let o=pt("hud-fx");if(!o)return;o.innerHTML="";let a=(l,c)=>{let h=document.createElement("div");h.className="fx",h.textContent=l+" "+c,o.appendChild(h)};s.turbo>0&&a("\u{1F680}",Math.ceil(s.turbo)+"s"),s.jump>0&&a("\u{1F998}",Math.ceil(s.jump)+"s"),s.shield>0&&a("\u{1F6E1}\uFE0F",Math.ceil(s.shield)+"s"),s.mega>0&&a("\u{1F3CF}","x"+s.mega)}}onLocalFinish(){this.finished=!0,this.finishTime=Math.max(0,this.levelTime),Et.finish();let t=this.info.finishZ;this.particles.emit(0,this.info.finishY+6,t,120,{rainbow:!0,speed:9,up:10,life:1.8,size:.5,gravity:7,spread:10}),this.particles.emit(-9,this.info.finishY+1,t,40,{rainbow:!0,speed:4,up:12,life:1.4,size:.4,gravity:8}),this.particles.emit(9,this.info.finishY+1,t,40,{rainbow:!0,speed:4,up:12,life:1.4,size:.4,gravity:8}),this.multi?this.toast("FINISHED!"):this.endSingle(!1)}endSingle(t){if(this.over)return;this.over=!0,this.winnerSelf=!t;let e=-this.info.finishZ,n=En(-this.me.body.z/e,0,1),s="";if(!t){let o=this.finishTime,a=E0(this.level);!a||o<a?(localStorage.setItem("ph_best_"+this.level,String(o)),s=a?"NEW BEST TIME!":"First clear!"):s=`Best: ${Bc(a)}`}let r=[{place:1,name:this.me.name,char:this.me.char,win:!t,tm:t?`${Math.round(n*100)}% of the track`:Bc(this.finishTime),self:!0}];setTimeout(()=>vt.showResults({title:t?"TIME'S UP!":"YOU DID IT!",sub:t?"You ran out of time. Try again!":s,rows:r,single:!0,win:!t}),t?300:1400),Dc(!0),t?Et.lose():Et.win()}onFin(t){this.finishedMap.set(t.id,t.place);let e=this.players.find(n=>n.id===t.id);t.id===this.localId?this.toast(`${Hf(t.place)} PLACE!`):(this.toast(`${e?e.name:"Player"} finished ${Hf(t.place)}!`),Et.checkpoint())}onEnd(t){this.over=!0;let e=t.winnerId===this.localId;this.winnerSelf=e,Dc(!0),e?Et.win():Et.lose();let n=t.results.map(r=>({place:r.place,name:r.name,char:r.char,win:r.id===t.winnerId,self:r.id===this.localId,tm:r.finished?Bc(r.time):`${Math.round(r.progress*100)}% of the track`})),s=t.results[0];setTimeout(()=>vt.showResults({title:e?"YOU WIN!":`${s?s.name:"Nobody"} WINS!`,sub:t.reason==="time"?"Time's up - the nearest player to the finish gate wins!":"First to the finish gate wins!",rows:n,single:!1,win:e}),900)}addRemote(t){this.remotes.has(t.id)||(this.players.push(t),this.remotes.set(t.id,new na(t,this.scene)),this.buildProgress(),this.toast(t.name+" joined the race!"))}removeRemote(t){let e=this.remotes.get(t);if(e){e.dispose(this.scene),this.remotes.delete(t);let n=this.dots.get(t);n&&n.remove()}}tagScale(t,e,n){let s=e.distanceTo(this.camera.position),r=En(s*.07,1,5.2)*n;t.scale.set(2.8*r,.7*r,1),t.visible=s<260}updateCamera(t){let e=this.me.body,n=Math.cos(this.camPitch),s=Math.sin(this.camPitch),r=Math.hypot(e.vx,e.vz);this.camera.fov=Ps(this.camera.fov,62+En(r-10,0,12)*.9,Math.min(1,t*4)),this.camera.updateProjectionMatrix();let o=this.camDist;if(this.drive){let f=this.drive.st;this.lookT-=t,o=9.2+Math.min(4,Math.abs(f.speed)*.12),this.lookT<=0&&(this.camYaw=Yf(this.camYaw,f.yaw+Math.PI,1-Math.exp(-3.2*t)),this.camPitch+=(.28-this.camPitch)*(1-Math.exp(-2*t)))}this.an&&this.an.mount&&(o+=this.an.camLift()*1.1);let a=e.x,l=e.y+(this.drive?1.1:1.35)+(this.an?this.an.camLift()*.7:0),c=e.z;this.camInit||(this.camTarget.set(a,l,c),this.camInit=!0);let h=1-Math.exp(-14*t);if(this.camTarget.x+=(a-this.camTarget.x)*h,this.camTarget.z+=(c-this.camTarget.z)*h,this.camTarget.y+=(l-this.camTarget.y)*(1-Math.exp(-7*t)),this.camera.position.set(this.camTarget.x+Math.sin(this.camYaw)*n*o,this.camTarget.y+s*o+.4,this.camTarget.z+Math.cos(this.camYaw)*n*o),this.shake>.01){let f=this.shake*.5;this.camera.position.x+=(Math.random()-.5)*f,this.camera.position.y+=(Math.random()-.5)*f*.7,this.camera.position.z+=(Math.random()-.5)*f,this.shake*=Math.exp(-7*(this.lastDt||.016))}else this.shake=0;this.camera.lookAt(this.camTarget.x,this.camTarget.y+.2,this.camTarget.z)}updateLights(){let t=this.camTarget;this.sun.position.set(t.x+this.sunDir.x,t.y+this.sunDir.y,t.z+this.sunDir.z),this.sun.target.position.copy(t)}count(t){let e=pt("hud-count");e.textContent=t,e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop")}toast(t){let e=pt("hud-toast");e.textContent=t,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}rank(){var s;let t=this.me.body,e=1,n=(s=this.finishedMap.get(this.localId))!=null?s:this.finished&&!this.multi?1:null;if(n)return n;for(let r of this.remotes.values())(this.finishedMap.get(r.id)||r.has&&r.z<t.z-.5)&&e++;return e}hud(t){if(this.hudT+=t,this.hintT>0&&(this.hintT-=t,this.hintT<=0&&pt("hud-hint").classList.add("fade")),this.hudT<.066)return;this.hudT=0;let e=this.levelTime,n=Math.max(0,Math.floor(e)),s=pt("hud-timer");s.textContent=`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`,s.classList.remove("low");{let c=!this.multi&&!this.meta.free;pt("hud-hint").classList.toggle("single",c),document.body.classList.toggle("single",c)}pt("hud-rank").textContent=this.meta.arena?`${this.players.length} in the room`:this.quest?this.questHud():this.hunt?this.huntHud():this.an?`\u2665 ${this.an.petCount()} pet${this.an.petCount()===1?"":"s"}`:this.multi?Hf(this.rank())+" / "+this.players.length:`${Math.max(0,Math.round(En(-this.me.body.z/-this.info.finishZ,0,1)*100))}%`;let r=-this.info.finishZ,o=(c,h)=>{let f=this.dots.get(c);f&&(f.style.left=En(-h/r,0,1)*100+"%")};o(this.localId,this.me.body.z);for(let c of this.remotes.values())o(c.id,c.has?c.z:0);let a=pt("click-hint"),l=!this.over&&!this.menuOpen&&document.pointerLockElement!==Oi;l!==a.classList.contains("show")&&a.classList.toggle("show",l);{let c=pt("t-bat");c&&c.classList.toggle("cd",this.batCd>0)}this.multi&&(pt("hud-net").textContent=`ping ${Math.round(vt.net.rtt)} ms`)}questHud(){let t=this.quest.q,e=(t.occ||[]).filter(n=>n).length;return t.ph===Je.MAZE?`Ch ${t.ch+1}/${Ce.CH} \u2022 Circles ${e}/${t.n}`:t.ph===Je.BEAST?`Ch ${t.ch+1}/${Ce.CH} \u2022 BEAT THE BEAST!`:t.ph===Je.DRAGON?`DRAGON \u2022 Circles ${e}/${t.n}`:t.ph===Je.WIN?"VICTORY!":"FREE!"}render(){Dn.render(this.scene,this.camera)}destroy(){Ff(),Of();{let t=pt("uw");t&&t.classList.remove("on")}document.body.classList.remove("sky-swap"),document.body.classList.remove("driving"),document.body.classList.remove("near-car"),document.body.classList.remove("near-swing"),this.hunt&&this.hunt.vis.dispose(),document.body.classList.remove("hunt-map"),this.an&&this.an.dispose(),document.body.classList.remove("free-map"),document.body.classList.remove("riding"),document.body.classList.remove("in-race"),document.body.classList.remove("single"),pt("pause").classList.add("hidden"),this.menuOpen=!1,pt("hud").classList.add("hidden"),pt("hud-count").textContent="",pt("hud-toast").classList.remove("show");{let t=pt("hud-fx");t&&(t.innerHTML="")}for(let t of this.remotes.values())t.dispose(this.scene);this.me.model.dispose(),this.scenery.dispose(),this.scene.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(n=>{n.map&&n.map.dispose(),n.dispose()})}),this.scene.clear()}},k_=["title","profile","levels","mp","lobby","results","help"];function Yn(i){for(let t of k_){let e=pt("s-"+t);e.classList.toggle("active",t===i),e.classList.remove("hidden")}vt.screen=i}var v0=0;function ia(i){let t=pt("toast-global");t.textContent=i,t.classList.add("show"),clearTimeout(v0),v0=setTimeout(()=>t.classList.remove("show"),3200)}function b0(i,t){i.innerHTML="",Di.forEach(e=>{let n=document.createElement("div");n.className="card",n.dataset.id=e.id,n.innerHTML=`<img alt="${e.name}" src="${Gf[e.id]||""}"><b style="color:${e.color}">${e.name}</b>${t.small?"":`<span>${e.tag}</span>`}`,n.onclick=()=>t.onPick(e.id),i.appendChild(n)})}function Wf(i,t,e){i.querySelectorAll(".card").forEach(n=>{let s=+n.dataset.id;n.classList.toggle("sel",s===t),n.classList.toggle("taken",e&&e.has(s)&&s!==t)})}function S0(i,t){i.innerHTML="",Xo.forEach(e=>{let n=document.createElement("div");n.className="card",n.dataset.id=e.id,n.style.background=`linear-gradient(160deg, ${e.colors[0]}cc, ${e.colors[1]}cc)`;let s=E0(e.id);n.innerHTML=`<div><h4>${e.id+1}. ${e.name}</h4><div class="stars">${"\u2605".repeat(e.stars)}${"\u2606".repeat(5-e.stars)}</div></div><div class="blurb">${e.blurb}</div><div class="meta">${e.sub} &bull; no time limit${s?" &bull; best "+Bc(s):""}</div>`,n.onclick=()=>t.onPick(e.id),i.appendChild(n)})}function G_(){let i=new Vo({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});i.setSize(256,320,!1),i.outputColorSpace=Fe,i.toneMapping=vr,i.setClearColor(0,0);let t=new Ri;t.add(new _s("#ffffff","#b9a4ff",1.6));let e=new Ms("#ffffff",2.6);e.position.set(3,5,6),t.add(e);let n=new Ts(i);t.environment=n.fromScene(new Wo,.04).texture,t.environmentIntensity=.7;let s=new an(30,256/320,.1,50);s.position.set(0,1.25,6.6),s.lookAt(0,.98,0);let r=[];for(let o=0;o<Di.length;o++){let a=new Cs(o);a.group.rotation.y=-.35,t.add(a.group),a.update(.016,{speed:0,grounded:!0,vy:0,stun:0,dive:0,celebrate:!1}),i.render(t,s),r.push(i.domElement.toDataURL("image/png")),t.remove(a.group),a.dispose()}return n.dispose(),i.dispose(),i.forceContextLoss(),r}function ea(i){vt.mode=i,pt("inp-name").value=vt.name,pt("profile-title").textContent="Choose your player",b0(pt("char-cards"),{onPick:t=>{vt.char=t,Wf(pt("char-cards"),t),on.sel=t,Et.select(),on.burst(t)}}),Wf(pt("char-cards"),vt.char),on.setTitle(vt.char),on.mode="profile",on.sel=vt.char,Yn("profile")}function V_(){let i=pt("inp-name").value.trim().replace(/[<>&"']/g,"").slice(0,14);return i||(i=["Haris","Speedy","Bouncy","Zippy"][Math.floor(Math.random()*4)]+Math.floor(Math.random()*90+10)),vt.name=i,localStorage.setItem("ph_name",i),localStorage.setItem("ph_char",String(vt.char)),i}function w0(){S0(pt("level-cards"),{onPick:i=>{Et.go(),sa(i)}}),Yn("levels")}function sa(i){Fi(),X&&(X.destroy(),X=null),vt.level=i,X=new kc(i,[{id:1,name:vt.name,char:vt.char}],1,{multi:!1,t0:performance.now()+3600,seed:1+Math.floor(Math.random()*1e9)}),Ls(),Yn("none"),pt("s-results").classList.add("hidden"),ra()}vt.showResults=function(i){let t=pt("res-list");t.innerHTML="",i.rows.forEach(s=>{let r=document.createElement("div");r.className="res-row"+(s.win?" win":"");let o=Di[s.char];r.innerHTML=`<div class="place">${s.place<=3?F_[s.place-1]:s.place}</div><div class="nm"><i style="background:${o.color}"></i>${s.name.replace(/[<>&]/g,"")}${s.self?" <small>(you)</small>":""}</div><div class="tm">${s.tm}</div>`,t.appendChild(r)}),pt("res-title").textContent=i.title,pt("res-sub").textContent=i.sub||"";let e=pt("b-res-retry"),n=pt("b-res-next");if(i.single)e.style.display="",e.textContent="RETRY",n.style.display="",n.textContent=vt.level<Xo.length-1?"NEXT LEVEL":"LEVELS",n.disabled=!1,vt.resMode="single";else{e.style.display="none";let s=vt.room&&vt.room.hostId===vt.myId;n.style.display="",n.textContent=s?"BACK TO LOBBY":"WAITING FOR HOST...",n.disabled=!s,vt.resMode="multi"}oa(),Yn("results")};pt("b-res-menu").onclick=()=>{Et.back(),qf()};pt("b-res-retry").onclick=()=>{Et.click(),sa(vt.level)};pt("b-res-next").onclick=()=>{Et.click(),vt.resMode==="single"?vt.level<Xo.length-1?sa(vt.level+1):(X&&X.destroy(),X=null,w0()):vt.net.send({t:"again"})};function qf(){X&&(X.destroy(),X=null),vt.net&&vt.room&&vt.net.send({t:"leave"}),vt.room=null,oa(),on.setTitle(),Yn("title")}async function W_(){if(vt.net&&vt.net.connected)return vt.net;let i=new Nc;return i.on("joined",t=>{vt.myId=t.id}),i.on("lobby",Y_),i.on("err",t=>{pt("mp-status").textContent=t.msg,t.retry&&vt.screen==="mp"?(Gc(),Hc=setTimeout(()=>{vt.screen==="mp"&&!vt.room&&Xf("join")},2e3)):ia(t.msg)}),i.on("go",q_),i.on("s",t=>{if(X&&X.multi){let e=X.remotes.get(t.id);e&&e.push(t)}}),i.on("fin",t=>{X&&X.multi&&X.onFin(t)}),i.on("bat",t=>{X&&X.multi&&X.onBat(t)}),i.on("an",t=>{X&&X.an&&X.an.onNet(t)}),i.on("aev",t=>{X&&X.an&&X.an.onEvent(t)}),i.on("h",t=>{X&&X.hunt&&X.huntNet(t)}),i.on("hev",t=>{X&&X.hunt&&X.huntEvent(t)}),i.on("shot",t=>{X&&X.hunt&&[t.ox,t.oy,t.oz,t.tx,t.ty,t.tz].every(Number.isFinite)&&(X.hunt.vis.tracer(t.ox,t.oy,t.oz,t.tx,t.ty,t.tz),Et.shot())}),i.on("q",t=>{X&&X.quest&&X.questNet(t)}),i.on("qev",t=>{X&&X.quest&&X.questEvent(t)}),i.on("abite",t=>{X&&X.an&&X.onAnimalBite(t)}),i.on("carpark",t=>{X&&X.multi&&X.onCars({[t.c]:t})}),i.on("cars",t=>{X&&X.multi?X.onCars(t.cars):vt.pendingCars=t.cars}),i.on("shove",t=>{X&&X.multi&&X.onShove(t)}),i.on("end",t=>{X&&X.multi&&X.onEnd(t)}),i.on("left",t=>{X&&X.multi&&X.removeRemote(t.id)}),i.on("close",()=>{ia("Disconnected from server"),X&&(X.destroy(),X=null),vt.room=null,oa(),on.setTitle(),Yn("title")}),await i.connect(),vt.net=i,i}function X_(){pt("mp-status").textContent="",on.setTitle(vt.char),Yn("mp")}var Hc=null;function Gc(){Hc&&(clearTimeout(Hc),Hc=null)}async function Xf(i){Fi(),Gc();let t=pt("mp-status");t.textContent="Connecting...";try{let e=await W_();i==="create"?e.send({t:"create",name:vt.name,char:vt.char}):e.send({t:"join",name:vt.name,char:vt.char}),t.textContent=i==="create"?"":"Looking for a room..."}catch{t.textContent="Could not connect to the game server. Is it running?",ia("Could not connect to the game server")}}function Y_(i){Gc();let t=!vt.room,e=vt.room;if(vt.room=i,X&&X.multi){for(let n of i.players)n.id!==vt.myId&&!X.remotes.has(n.id)&&(i.phase==="race"||i.phase==="countdown")&&X.addRemote(n);if(i.phase==="lobby"&&vt.screen!=="lobby")X.destroy(),X=null,oa(),_0(),Yn("lobby"),zr(6);else if(vt.screen==="results"){let n=i.hostId===vt.myId;vt.resMode==="multi"&&(pt("b-res-next").textContent=n?"BACK TO LOBBY":"WAITING FOR HOST...",pt("b-res-next").disabled=!n)}return}(t||vt.screen==="mp"||vt.screen==="profile"||vt.screen==="title")&&(i.phase==="lobby"||i.phase==="results")&&(Yn("lobby"),zr(6)),e&&i.players.length>e.players.length&&Et.join(),_0()}function _0(){let i=vt.room;if(!i)return;let t=i.players.find(r=>r.id===vt.myId);t&&(vt.char=t.char),pt("lobby-code").textContent=i.code,pt("lobby-count").textContent=`${i.players.length}/${4}`;let e=pt("lobby-players");e.innerHTML="";for(let r=0;r<4;r++){let o=i.players[r],a=document.createElement("div");a.className="slot"+(o?"":" empty"),a.innerHTML=o?`<i style="background:${Di[o.char].color}"></i><span>${o.name.replace(/[<>&]/g,"")}</span>${o.id===i.hostId?"<span>\u{1F451}</span>":""}${o.id===vt.myId?'<span class="you">YOU</span>':""}`:'<i style="background:#888"></i><span>Waiting for player...</span>',e.appendChild(a)}let n=new Set(i.players.filter(r=>r.id!==vt.myId).map(r=>r.char));b0(pt("lobby-chars"),{small:!0,onPick:r=>{n.has(r)||(Et.select(),vt.net.send({t:"char",char:r}))}}),Wf(pt("lobby-chars"),vt.char,n);let s=i.hostId===vt.myId;S0(pt("lobby-levels"),{onPick:r=>{s&&(Et.click(),vt.net.send({t:"level",level:r}))}}),pt("lobby-levels").querySelectorAll(".card").forEach(r=>{r.classList.toggle("sel",+r.dataset.id===i.level),s||(r.style.cursor="default")}),pt("lobby-level-note").textContent=s?"(you choose)":"(host chooses)",pt("b-start").disabled=!s,pt("b-start").firstElementChild.textContent=s?"START RACE":"WAITING FOR HOST",pt("lobby-hint").textContent=s?i.players.length<2?"Tell friends to tap MULTIPLAYER on the same link. You can also start alone.":"Everyone ready? Hit start!":"The host will start the race.",on.setLobby(i.players)}function q_(i){Fi(),X&&(X.destroy(),X=null);let t=vt.room;if(!t)return;let e=i.order.map(n=>t.players.find(s=>s.id===n)).filter(Boolean);vt.level=i.level,X=new kc(i.level,e,vt.myId,{multi:!0,t0:i.t0,seed:i.seed}),Ls(),Yn("none"),ra()}function ra(){if(X&&!X.over&&document.pointerLockElement!==Oi)try{let i=Oi.requestPointerLock();i&&i.catch&&i.catch(()=>{})}catch{}}function oa(){document.pointerLockElement&&document.exitPointerLock()}document.addEventListener("pointerlockchange",()=>{let i=document.pointerLockElement===Oi;i?kf=!0:kf&&X&&!X.over&&!X.menuOpen&&!Hn&&$f(),i||(kf=!1),pt("click-hint").classList.toggle("show",!!X&&!X.over&&!X.menuOpen&&!i)});var kf=!1,Vc=!1;Oi.addEventListener("mousedown",i=>{Vc=!0,X&&!X.over&&(i.button===0&&X.hunt&&document.pointerLockElement===Oi&&!X.menuOpen?X.fireHeld=!0:i.button===0&&X.multi&&document.pointerLockElement===Oi&&!X.menuOpen?X.swing():ra())});window.addEventListener("mouseup",()=>{Vc=!1,X&&(X.fireHeld=!1)});window.addEventListener("mousemove",i=>{X&&!X.over&&(document.pointerLockElement===Oi||Vc)&&X.look(i.movementX,i.movementY)});pt("click-hint").addEventListener("click",ra);window.addEventListener("keydown",i=>{if(i.target&&i.target.tagName==="INPUT"){i.code==="Enter"&&(vt.screen==="profile"?pt("b-profile-next").click():vt.screen==="mp"&&pt("b-join").click());return}X&&!X.over&&["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight"].includes(i.code)&&i.preventDefault(),!i.repeat&&(Oe.add(i.code),i.code==="Space"&&(bn.jump=!0),(i.code==="ShiftLeft"||i.code==="ShiftRight"||i.code==="KeyF")&&(bn.dive=!0),i.code==="KeyM"&&Zf(),i.code==="KeyG"&&(bn.grab=!0),i.code==="KeyB"&&X&&!X.menuOpen&&(X.hunt?X.fire():X.swing()),i.code==="KeyC"&&X&&!X.over&&!i.repeat&&X.toggleCar(),i.code==="KeyH"&&X&&!X.menuOpen&&X.honk(),i.code==="KeyR"&&X&&!X.over&&!i.repeat&&X.swapRacer(),(i.code==="Escape"||i.code==="KeyP")&&X&&!X.over&&(X.menuOpen?Wc():$f()))});window.addEventListener("keyup",i=>Oe.delete(i.code));window.addEventListener("blur",()=>{Oe.clear(),Vc=!1});window.addEventListener("resize",Ls);function Zf(){vt.muted=!vt.muted,r0(vt.muted),pt("b-sound").textContent="SOUND: "+(vt.muted?"OFF":"ON"),A0()}function T0(){pt("p-gfx").textContent="\u{1F5A5} GFX: "+(he.low?"LOW":"AUTO")}function A0(){pt("p-sound").textContent="\u{1F50A} SOUND: "+(vt.muted?"OFF":"ON")}function $f(){!X||X.over||X.menuOpen||(X.menuOpen=!0,X.multi||(X.paused=!0,X.pauseAt=performance.now()),oa(),Oe.clear(),De.x=De.y=0,De.jump=!1,pt("p-title").textContent=X.multi?"Menu":"Paused",pt("p-info").textContent=X.meta.name+(X.multi?"  \u2022  race goes on!":""),T0(),pt("p-retry").classList.toggle("hidden",X.multi),pt("p-full").classList.toggle("hidden",!(document.documentElement&&document.documentElement.requestFullscreen)),A0(),pt("pause").classList.remove("hidden"),pt("click-hint").classList.remove("show"),Et.click())}function Wc(){!X||!X.menuOpen||(X.paused&&(X.t0+=performance.now()-X.pauseAt,X.paused=!1),X.menuOpen=!1,pt("pause").classList.add("hidden"),ra())}pt("b-menu").addEventListener("click",()=>X&&X.menuOpen?Wc():$f());pt("p-resume").onclick=()=>{Et.click(),Wc()};pt("p-sound").onclick=()=>{Fi(),Zf(),Et.click()};pt("p-gfx").onclick=()=>{he.low=!he.low;try{localStorage.setItem("ph_low",he.low?"1":"0")}catch{}Et.click(),B_(),T0()};pt("p-full").onclick=()=>{let i=document,t=i.documentElement;try{!i.fullscreenElement&&t.requestFullscreen?t.requestFullscreen({navigationUI:"hide"}):i.exitFullscreen&&i.fullscreenElement&&i.exitFullscreen()}catch{}};pt("p-retry").onclick=()=>{Et.click();let i=vt.level;pt("pause").classList.add("hidden"),X&&(X.menuOpen=!1),sa(i)};pt("p-quit").onclick=()=>{Et.back(),pt("pause").classList.add("hidden"),qf()};async function Z_(){await e0(),on=new Vf;try{Gf=G_()}catch{Gf=["","","",""]}Ls(),on.setTitle(),Yn("title"),pt("b-single").onclick=()=>{Fi(),zr(6),Et.click(),ea("single")},pt("b-multi").onclick=()=>{Fi(),zr(6),Et.click(),ea("multi")},pt("b-help").onclick=()=>{Fi(),Et.click(),pt("s-help").classList.add("active")},pt("b-help-close").onclick=()=>{Et.back(),pt("s-help").classList.remove("active")},pt("b-sound").onclick=()=>{Fi(),Zf(),Et.click()},pt("b-profile-back").onclick=()=>{Et.back(),on.setTitle(),Yn("title")},pt("b-profile-next").onclick=()=>{V_(),Et.click(),vt.mode==="single"?w0():X_()},pt("b-levels-back").onclick=()=>{Et.back(),ea("single")},pt("b-mp-back").onclick=()=>{Et.back(),Gc(),ea("multi")},pt("b-create").onclick=()=>{Et.click(),Xf("create")},pt("b-join").onclick=()=>{Et.click(),Xf("join")},pt("b-leave").onclick=()=>{Et.back(),qf()},pt("b-start").onclick=()=>{vt.room&&vt.room.hostId===vt.myId&&(Et.click(),vt.net.send({t:"start"}))},pt("b-copy").onclick=async()=>{let s=`${location.origin}${location.pathname}?room=${vt.room?vt.room.code:""}`;try{await navigator.clipboard.writeText(s),ia("Invite link copied!")}catch{prompt("Copy this invite link:",s)}},new URLSearchParams(location.search).get("room")&&(ea("multi"),ia("Pick your name & player, then CONTINUE and JOIN ROOM")),pt("loader").classList.add("done"),setTimeout(()=>pt("loader").remove(),600);let t=performance.now(),e=performance.now();try{let s=new Worker(URL.createObjectURL(new Blob(["setInterval(()=>postMessage(0),50)"],{type:"text/javascript"})));s.onmessage=()=>{if(!X||!X.multi||X.paused)return;let r=performance.now();if(r-e>200){let o=Math.min(.25,(r-e)/1e3);e=r,t=r,X.update(o)}else r-(X.lastSend||0)>100&&X.sendSnap()}}catch{}let n=s=>{requestAnimationFrame(n);let r=Math.min(.1,(s-t)/1e3);t=s,e=performance.now(),O_(r),X?(X.over&&X.menuOpen&&Wc(),X.paused||X.update(r),X.render()):(on.update(r),Dn.render(on.scene,on.camera))};requestAnimationFrame(n)}Z_().catch(i=>{console.error(i);let t=document.querySelector("#loader p");t&&(t.textContent="Error: "+i.message)});window.__ph={app:vt,Remote:na,startSingle:i=>sa(i),keys:Oe,press:bn,touch:De,get race(){return X},get stage(){return on}};(function(){Hn&&document.body.classList.add("touch");let t=pt("touch"),e=pt("joy"),n=pt("joy-knob");if(!t||!e||!n)return;let s=56,r=null,o=null,a=0,l=0,c=0,h=0,f=(m,y)=>{for(let p of m)if(p.identifier===y)return p;return null};t.addEventListener("touchstart",m=>{m.preventDefault();for(let y of m.changedTouches)y.clientX<window.innerWidth*.5&&r===null?(r=y.identifier,a=y.clientX,l=y.clientY,e.style.left=a+"px",e.style.top=l+"px",e.classList.add("on"),n.style.transform="translate(-50%, -50%)"):o===null&&y.clientX>=window.innerWidth*.5&&(o=y.identifier,c=y.clientX,h=y.clientY)},{passive:!1}),t.addEventListener("touchmove",m=>{m.preventDefault();let y=r!==null?f(m.touches,r):null;if(y){let g=y.clientX-a,E=y.clientY-l,S=Math.hypot(g,E);S>s&&(g*=s/S,E*=s/S),n.style.transform=`translate(calc(-50% + ${g}px), calc(-50% + ${E}px))`;let x=g/s,_=E/s,M=Math.hypot(x,_),w=M<.14?0:(M-.14)/.86/M;De.x=x*w,De.y=-_*w}let p=o!==null?f(m.touches,o):null;p&&(X&&!X.over&&X.look((p.clientX-c)*1.7,(p.clientY-h)*1.7),c=p.clientX,h=p.clientY)},{passive:!1});let u=m=>{for(let y of m.changedTouches)y.identifier===r&&(r=null,De.x=De.y=0,e.classList.remove("on")),y.identifier===o&&(o=null)};t.addEventListener("touchend",u),t.addEventListener("touchcancel",u);let d=(m,y,p)=>{let g=pt(m);if(!g)return;g.addEventListener("touchstart",S=>{S.preventDefault(),S.stopPropagation(),y()},{passive:!1});let E=S=>{S.preventDefault(),S.stopPropagation(),p&&p()};g.addEventListener("touchend",E,{passive:!1}),g.addEventListener("touchcancel",E,{passive:!1})};d("t-jump",()=>{X&&!X.over&&(bn.jump=!0,De.jump=!0)},()=>{De.jump=!1}),d("t-dive",()=>{X&&!X.over&&(bn.dive=!0)}),d("t-fire",()=>{De.fire=!0,X&&!X.over&&!X.menuOpen&&X.fire()},()=>{De.fire=!1}),d("t-bat",()=>{X&&!X.over&&!X.menuOpen&&X.swing()}),d("c-horn",()=>{X&&X.honk()}),d("b-racer",()=>{X&&X.swapRacer()}),d("b-grab",()=>{De.grab=!0,bn.grab=!0},()=>{De.grab=!1});{let m=pt("b-grab");m&&(m.addEventListener("mousedown",y=>{y.preventDefault(),De.grab=!0,bn.grab=!0}),window.addEventListener("mouseup",()=>{De.grab=!1}))}d("b-car",()=>{X&&X.toggleCar()}),d("b-exit",()=>{X&&X.toggleCar()});for(let m of["b-car","b-exit","b-racer"]){let y=pt(m);y&&y.addEventListener("click",()=>{X&&(m==="b-racer"?X.swapRacer():X.toggleCar()),y.blur()})}})();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

(()=>{function du(){return{hang:null,cd:0,tip:{}}}function pu(i,t,e,n,s,r,o,a,c=!1){e.cd=Math.max(0,e.cd-s),e.pend=c?.9:Math.max(0,(e.pend||0)-s),!r&&!c&&(e.lock=!1),c&&(e.lock=!1);let l=e.tip;if(!e.hang){if(!(a&&(r||e.pend>0)&&!e.lock&&e.cd<=0&&t.stun<=0))return!1;for(let f of i.swings)if(i.swingTip(f,n,l),Math.hypot(l.x-t.x,l.y-(t.y+1.55),l.z-t.z)<3.4){e.hang={sw:f,ox:Math.max(-1,Math.min(1,t.x-f.x)),t:0},e.grabbed=!0,e.pend=0,t.vx=t.vz=t.vy=0,t.grounded=!1,t.inWater=!1,t.jumping=!1;break}if(!e.hang)return!1}let h=e.hang;h.t+=s,i.swingTip(h.sw,n,l);let u=c&&h.t>.3;if(!a||t.stun>0||o||u){let f=o?1.18:1;return t.x=h.sw.x+h.ox,t.z=l.z,t.y=l.y-1.65,t.vx=0,t.vz=l.vz*f,t.vy=l.vy*f+(o?7:1.5),t.grounded=!1,t.noCtrl=0,e.hang=null,e.cd=.45,e.lock=!0,e.released=o?"jump":"let go",!1}return t.x=h.sw.x+h.ox,t.z=l.z,t.y=l.y-1.65,t.vx=0,t.vz=l.vz,t.vy=l.vy,t.grounded=!1,t.yaw=l.vz<0?Math.PI:0,!0}var $u=0,Fh=1,Ku=2;var zo=1,Tl=2,Er=3,is=0,ln=1,$e=2,yi=0,ss=1,Di=2,Oh=3,Bh=4,Ju=5;var ws=100,ju=101,Qu=102,td=103,ed=104,nd=200,id=201,sd=202,rd=203,Hh=204,kh=205,od=206,ad=207,ld=208,cd=209,hd=210,fd=211,ud=212,dd=213,pd=214,Xa=0,Ya=1,qa=2,sr=3,Za=4,$a=5,Ka=6,Ja=7,Al=0,md=1,gd=2,ii=0,Gh=1,Vh=2,Wh=3,br=4,Xh=5,Yh=6,qh=7;var Zh=300,rs=301,Ts=302,Rl=303,Cl=304,Uo=306,rr=1e3,di=1001,ja=1002,dn=1003,xd=1004;var Fo=1005;var mn=1006,Il=1007;var os=1008;var Dn=1009,$h=1010,Kh=1011,Sr=1012,Pl=1013,si=1014,Xn=1015,ri=1016,Ll=1017,Dl=1018,wr=1020,Jh=35902,jh=35899,Qh=1021,tf=1022,Yn=1023,mi=1026,as=1027,Nl=1028,zl=1029,ls=1030,Ul=1031;var Fl=1033,Oo=33776,Bo=33777,Ho=33778,ko=33779,Ol=35840,Bl=35841,Hl=35842,kl=35843,Gl=36196,Vl=37492,Wl=37496,Xl=37488,Yl=37489,Go=37490,ql=37491,Zl=37808,$l=37809,Kl=37810,Jl=37811,jl=37812,Ql=37813,tc=37814,ec=37815,nc=37816,ic=37817,sc=37818,rc=37819,oc=37820,ac=37821,lc=36492,cc=36494,hc=36495,fc=36283,uc=36284,Vo=36285,dc=36286;var eo=2300,Qa=2301,Va=2302,Sh=2303,wh=2400,Th=2401,Ah=2402;var yd=3200;var Wo=0,vd=1,Ni="",Be="srgb",no="srgb-linear",io="linear",Re="srgb";var Wa=7680;var _d=519,Md=512,Ed=513,bd=514,pc=515,Sd=516,wd=517,mc=518,Td=519,ef=35044,Tr=35048;var nf="300 es",ei=2e3,or=2001;function X0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Y0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function so(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ad(){let i=so("canvas");return i.style.display="block",i}var mu={},ar=null;function ro(...i){let t="THREE."+i.shift();ar?ar("log",t,...i):console.log(t,...i)}function Rd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ee(...i){i=Rd(i);let t="THREE."+i.shift();if(ar)ar("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function se(...i){i=Rd(i);let t="THREE."+i.shift();if(ar)ar("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ms(...i){let t=i.join(" ");t in mu||(mu[t]=!0,ee(...i))}function Cd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Id={[Xa]:Ya,[qa]:Ka,[Za]:Ja,[sr]:$a,[Ya]:Xa,[Ka]:qa,[Ja]:Za,[$a]:sr},gi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gu=1234567,Jr=Math.PI/180,lr=180/Math.PI;function pi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]+"-"+xn[t&255]+xn[t>>8&255]+"-"+xn[t>>16&15|64]+xn[t>>24&255]+"-"+xn[e&63|128]+xn[e>>8&255]+"-"+xn[e>>16&255]+xn[e>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function me(i,t,e){return Math.max(t,Math.min(e,i))}function sf(i,t){return(i%t+t)%t}function q0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Z0(i,t,e){return i!==t?(e-i)/(t-i):0}function jr(i,t,e){return(1-e)*i+e*t}function $0(i,t,e,n){return jr(i,t,1-Math.exp(-e*n))}function K0(i,t=1){return t-Math.abs(sf(i,t*2)-t)}function J0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function j0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Q0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function tm(i,t){return i+Math.random()*(t-i)}function em(i){return i*(.5-Math.random())}function nm(i){i!==void 0&&(gu=i);let t=gu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function im(i){return i*Jr}function sm(i){return i*lr}function rm(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function om(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function am(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function lm(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*h,a*l);break;default:ee("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ti(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Pe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Xo={DEG2RAD:Jr,RAD2DEG:lr,generateUUID:pi,clamp:me,euclideanModulo:sf,mapLinear:q0,inverseLerp:Z0,lerp:jr,damp:$0,pingpong:K0,smoothstep:J0,smootherstep:j0,randInt:Q0,randFloat:tm,randFloatSpread:em,seededRandom:nm,degToRad:im,radToDeg:sm,isPowerOfTwo:rm,ceilPowerOfTwo:om,floorPowerOfTwo:am,setQuaternionFromProperEuler:lm,normalize:Pe,denormalize:ti},hf=class hf{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hf.prototype.isVector2=!0;var Et=hf,On=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],y=r[o+3];if(u!==y||c!==f||l!==d||h!==g){let p=c*f+l*d+h*g+u*y;p<0&&(f=-f,d=-d,g=-g,y=-y,p=-p);let m=1-a;if(p<.9995){let E=Math.acos(p),S=Math.sin(E);m=Math.sin(m*E)/S,a=Math.sin(a*E)/S,c=c*m+f*a,l=l*m+d*a,h=h*m+g*a,u=u*m+y*a}else{c=c*m+f*a,l=l*m+d*a,h=h*m+g*a,u=u*m+y*a;let E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-a*d,t[e+2]=l*g+h*d+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:ee("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ff=class ff{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qc.copy(this).projectOnVector(t),this.sub(Qc)}reflect(t){return this.sub(Qc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ff.prototype.isVector3=!0;var O=ff,Qc=new O,xu=new On,uf=class uf{constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],y=s[0],p=s[3],m=s[6],E=s[1],S=s[4],x=s[7],_=s[2],M=s[5],w=s[8];return r[0]=o*y+a*E+c*_,r[3]=o*p+a*S+c*M,r[6]=o*m+a*x+c*w,r[1]=l*y+h*E+u*_,r[4]=l*p+h*S+u*M,r[7]=l*m+h*x+u*w,r[2]=f*y+d*E+g*_,r[5]=f*p+d*S+g*M,r[8]=f*m+d*x+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(s*l-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=f*y,t[4]=(h*e-s*c)*y,t[5]=(s*r-a*e)*y,t[6]=d*y,t[7]=(n*c-l*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Ms("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(th.makeScale(t,e)),this}rotate(t){return Ms("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(th.makeRotation(-t)),this}translate(t,e){return Ms("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(th.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};uf.prototype.isMatrix3=!0;var ae=uf,th=new ae,yu=new ae().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vu=new ae().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cm(){let i={enabled:!0,workingColorSpace:no,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Re&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Re&&(s.r=ir(s.r),s.g=ir(s.g),s.b=ir(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ni?io:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ms("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ms("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[no]:{primaries:t,whitePoint:n,transfer:io,toXYZ:yu,fromXYZ:vu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:t,whitePoint:n,transfer:Re,toXYZ:yu,fromXYZ:vu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}}),i}var ye=cm();function Ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ir(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Bs,tl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Bs===void 0&&(Bs=so("canvas")),Bs.width=t.width,Bs.height=t.height;let s=Bs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Bs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=so("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ci(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ci(e[n]/255)*255):e[n]=Ci(e[n]);return{data:e,width:t.width,height:t.height}}else return ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},hm=0,cr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=pi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(eh(s[o].image)):r.push(eh(s[o]))}else r=eh(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function eh(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?tl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ee("Texture: Unable to serialize Texture."),{})}var fm=0,nh=new O,An=class i extends gi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=di,s=di,r=mn,o=os,a=Yn,c=Dn,l=i.DEFAULT_ANISOTROPY,h=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=pi(),this.name="",this.source=new cr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(nh).x}get height(){return this.source.getSize(nh).y}get depth(){return this.source.getSize(nh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ee(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ee(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rr:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case ja:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rr:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case ja:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Zh;An.DEFAULT_ANISOTROPY=1;var df=class df{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],y=c[2],p=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(l+1)/2,x=(d+1)/2,_=(m+1)/2,M=(h+f)/4,w=(u+y)/4,v=(g+p)/4;return S>x&&S>_?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=M/n,r=w/n):x>_?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=M/s,r=v/s):_<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(_),n=w/r,s=v/r),this.set(n,s,r,e),this}let E=Math.sqrt((p-g)*(p-g)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(u-y)/E,this.z=(f-h)/E,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this.w=me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this.w=me(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};df.prototype.isVector4=!0;var Xe=df,el=class extends gi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Xe(0,0,t,e),this.scissorTest=!1,this.viewport=new Xe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new An(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new cr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ln=class extends el{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},oo=class extends An{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var nl=class extends An{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var wl=class wl{constructor(t,e,n,s,r,o,a,c,l,h,u,f,d,g,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,f,d,g,y,p)}set(t,e,n,s,r,o,a,c,l,h,u,f,d,g,y,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Hs.setFromMatrixColumn(t,0).length(),r=1/Hs.setFromMatrixColumn(t,1).length(),o=1/Hs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,y=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-y*l,e[9]=-a*c,e[2]=y-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,g=l*h,y=l*u;e[0]=f+y*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=y+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,g=l*h,y=l*u;e[0]=f-y*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=y-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,y=a*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+y,e[1]=c*u,e[5]=y*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*l,g=a*c,y=a*l;e[0]=c*h,e[4]=y-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-y*u}else if(t.order==="XZY"){let f=o*c,d=o*l,g=a*c,y=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+y,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=y*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(um,t,dm)}lookAt(t,e,n){let s=this.elements;return Un.subVectors(t,e),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Xi.crossVectors(n,Un),Xi.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Xi.crossVectors(n,Un)),Xi.normalize(),ga.crossVectors(Un,Xi),s[0]=Xi.x,s[4]=ga.x,s[8]=Un.x,s[1]=Xi.y,s[5]=ga.y,s[9]=Un.y,s[2]=Xi.z,s[6]=ga.z,s[10]=Un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],y=n[6],p=n[10],m=n[14],E=n[3],S=n[7],x=n[11],_=n[15],M=s[0],w=s[4],v=s[8],b=s[12],A=s[1],P=s[5],L=s[9],D=s[13],R=s[2],C=s[6],z=s[10],F=s[14],J=s[3],V=s[7],K=s[11],Z=s[15];return r[0]=o*M+a*A+c*R+l*J,r[4]=o*w+a*P+c*C+l*V,r[8]=o*v+a*L+c*z+l*K,r[12]=o*b+a*D+c*F+l*Z,r[1]=h*M+u*A+f*R+d*J,r[5]=h*w+u*P+f*C+d*V,r[9]=h*v+u*L+f*z+d*K,r[13]=h*b+u*D+f*F+d*Z,r[2]=g*M+y*A+p*R+m*J,r[6]=g*w+y*P+p*C+m*V,r[10]=g*v+y*L+p*z+m*K,r[14]=g*b+y*D+p*F+m*Z,r[3]=E*M+S*A+x*R+_*J,r[7]=E*w+S*P+x*C+_*V,r[11]=E*v+S*L+x*z+_*K,r[15]=E*b+S*D+x*F+_*Z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],y=t[7],p=t[11],m=t[15],E=c*d-l*f,S=a*d-l*u,x=a*f-c*u,_=o*d-l*h,M=o*f-c*h,w=o*u-a*h;return e*(y*E-p*S+m*x)-n*(g*E-p*_+m*M)+s*(g*S-y*_+m*w)-r*(g*x-y*M+p*w)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],h=t[10];return e*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],y=t[13],p=t[14],m=t[15],E=e*a-n*o,S=e*c-s*o,x=e*l-r*o,_=n*c-s*a,M=n*l-r*a,w=s*l-r*c,v=h*y-u*g,b=h*p-f*g,A=h*m-d*g,P=u*p-f*y,L=u*m-d*y,D=f*m-d*p,R=E*D-S*L+x*P+_*A-M*b+w*v;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/R;return t[0]=(a*D-c*L+l*P)*C,t[1]=(s*L-n*D-r*P)*C,t[2]=(y*w-p*M+m*_)*C,t[3]=(f*M-u*w-d*_)*C,t[4]=(c*A-o*D-l*b)*C,t[5]=(e*D-s*A+r*b)*C,t[6]=(p*x-g*w-m*S)*C,t[7]=(h*w-f*x+d*S)*C,t[8]=(o*L-a*A+l*v)*C,t[9]=(n*A-e*L-r*v)*C,t[10]=(g*M-y*x+m*E)*C,t[11]=(u*x-h*M-d*E)*C,t[12]=(a*b-o*P-c*v)*C,t[13]=(e*P-n*b+s*v)*C,t[14]=(y*S-g*_-p*E)*C,t[15]=(h*_-u*S+f*E)*C,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,y=o*h,p=o*u,m=a*u,E=c*l,S=c*h,x=c*u,_=n.x,M=n.y,w=n.z;return s[0]=(1-(y+m))*_,s[1]=(d+x)*_,s[2]=(g-S)*_,s[3]=0,s[4]=(d-x)*M,s[5]=(1-(f+m))*M,s[6]=(p+E)*M,s[7]=0,s[8]=(g+S)*w,s[9]=(p-E)*w,s[10]=(1-(f+y))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Hs.set(s[0],s[1],s[2]).length(),a=Hs.set(s[4],s[5],s[6]).length(),c=Hs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Kn.copy(this);let l=1/o,h=1/a,u=1/c;return Kn.elements[0]*=l,Kn.elements[1]*=l,Kn.elements[2]*=l,Kn.elements[4]*=h,Kn.elements[5]*=h,Kn.elements[6]*=h,Kn.elements[8]*=u,Kn.elements[9]*=u,Kn.elements[10]*=u,e.setFromRotationMatrix(Kn),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=ei,c=!1){let l=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),g,y;if(c)g=r/(o-r),y=o*r/(o-r);else if(a===ei)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===or)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ei,c=!1){let l=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),g,y;if(c)g=1/(o-r),y=o/(o-r);else if(a===ei)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===or)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};wl.prototype.isMatrix4=!0;var Se=wl,Hs=new O,Kn=new Se,um=new O(0,0,0),dm=new O(1,1,1),Xi=new O,ga=new O,Un=new O,_u=new Se,Mu=new On,Bn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(me(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(me(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return _u.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_u,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Mu.setFromEuler(this),this.setFromQuaternion(Mu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bn.DEFAULT_ORDER="XYZ";var ao=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},pm=0,Eu=new O,ks=new On,bi=new Se,xa=new O,kr=new O,mm=new O,gm=new On,bu=new O(1,0,0),Su=new O(0,1,0),wu=new O(0,0,1),Tu={type:"added"},xm={type:"removed"},Gs={type:"childadded",child:null},ih={type:"childremoved",child:null},nn=class i extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new O,e=new Bn,n=new On,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new ae}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ao,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.multiply(ks),this}rotateOnWorldAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.premultiply(ks),this}rotateX(t){return this.rotateOnAxis(bu,t)}rotateY(t){return this.rotateOnAxis(Su,t)}rotateZ(t){return this.rotateOnAxis(wu,t)}translateOnAxis(t,e){return Eu.copy(t).applyQuaternion(this.quaternion),this.position.add(Eu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bu,t)}translateY(t){return this.translateOnAxis(Su,t)}translateZ(t){return this.translateOnAxis(wu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xa.copy(t):xa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(kr,xa,this.up):bi.lookAt(xa,kr,this.up),this.quaternion.setFromRotationMatrix(bi),s&&(bi.extractRotation(s.matrixWorld),ks.setFromRotationMatrix(bi),this.quaternion.premultiply(ks.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(se("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Tu),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null):se("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xm),ih.child=t,this.dispatchEvent(ih),ih.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Tu),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,t,mm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,gm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};nn.DEFAULT_UP=new O(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xt=class extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}},ym={type:"move"},hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,n),m=this._getHandJoint(l,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ym)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new xt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},ya={h:0,s:0,l:0};function sh(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ye.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ye.workingColorSpace){return this.r=t,this.g=e,this.b=n,ye.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ye.workingColorSpace){if(t=sf(t,1),e=me(e,0,1),n=me(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=sh(o,r,t+1/3),this.g=sh(o,r,t),this.b=sh(o,r,t-1/3)}return ye.colorSpaceToWorking(this,s),this}setStyle(t,e=Be){function n(r){r!==void 0&&parseFloat(r)<1&&ee("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ee("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);ee("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){let n=Pd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ee("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ci(t.r),this.g=Ci(t.g),this.b=Ci(t.b),this}copyLinearToSRGB(t){return this.r=ir(t.r),this.g=ir(t.g),this.b=ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return ye.workingToColorSpace(yn.copy(this),t),Math.round(me(yn.r*255,0,255))*65536+Math.round(me(yn.g*255,0,255))*256+Math.round(me(yn.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ye.workingColorSpace){ye.workingToColorSpace(yn.copy(this),e);let n=yn.r,s=yn.g,r=yn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ye.workingColorSpace){return ye.workingToColorSpace(yn.copy(this),e),t.r=yn.r,t.g=yn.g,t.b=yn.b,t}getStyle(t=Be){ye.workingToColorSpace(yn.copy(this),t);let e=yn.r,n=yn.g,s=yn.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Yi),this.setHSL(Yi.h+t,Yi.s+e,Yi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Yi),t.getHSL(ya);let n=jr(Yi.h,ya.h,e),s=jr(Yi.s,ya.s,e),r=jr(Yi.l,ya.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new kt;kt.NAMES=Pd;var fr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ii=class extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Jn=new O,Si=new O,rh=new O,wi=new O,Vs=new O,Ws=new O,Au=new O,oh=new O,ah=new O,lh=new O,ch=new Xe,hh=new Xe,fh=new Xe,Ri=class i{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Jn.subVectors(t,e),s.cross(Jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Jn.subVectors(s,e),Si.subVectors(n,e),rh.subVectors(t,e);let o=Jn.dot(Jn),a=Jn.dot(Si),c=Jn.dot(rh),l=Si.dot(Si),h=Si.dot(rh),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,wi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,wi.x),c.addScaledVector(o,wi.y),c.addScaledVector(a,wi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return ch.setScalar(0),hh.setScalar(0),fh.setScalar(0),ch.fromBufferAttribute(t,e),hh.fromBufferAttribute(t,n),fh.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ch,r.x),o.addScaledVector(hh,r.y),o.addScaledVector(fh,r.z),o}static isFrontFacing(t,e,n,s){return Jn.subVectors(n,e),Si.subVectors(t,e),Jn.cross(Si).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Jn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Jn.cross(Si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Vs.subVectors(s,n),Ws.subVectors(r,n),oh.subVectors(t,n);let c=Vs.dot(oh),l=Ws.dot(oh);if(c<=0&&l<=0)return e.copy(n);ah.subVectors(t,s);let h=Vs.dot(ah),u=Ws.dot(ah);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Vs,o);lh.subVectors(t,r);let d=Vs.dot(lh),g=Ws.dot(lh);if(g>=0&&d<=g)return e.copy(r);let y=d*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Ws,a);let p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return Au.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(Au,a);let m=1/(p+y+f);return o=y*m,a=f*m,e.copy(n).addScaledVector(Vs,o).addScaledVector(Ws,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},xi=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,jn):jn.fromBufferAttribute(r,o),jn.applyMatrix4(t.matrixWorld),this.expandByPoint(jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),va.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),va.copy(n.boundingBox)),va.applyMatrix4(t.matrixWorld),this.union(va)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,jn),jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gr),_a.subVectors(this.max,Gr),Xs.subVectors(t.a,Gr),Ys.subVectors(t.b,Gr),qs.subVectors(t.c,Gr),qi.subVectors(Ys,Xs),Zi.subVectors(qs,Ys),gs.subVectors(Xs,qs);let e=[0,-qi.z,qi.y,0,-Zi.z,Zi.y,0,-gs.z,gs.y,qi.z,0,-qi.x,Zi.z,0,-Zi.x,gs.z,0,-gs.x,-qi.y,qi.x,0,-Zi.y,Zi.x,0,-gs.y,gs.x,0];return!uh(e,Xs,Ys,qs,_a)||(e=[1,0,0,0,1,0,0,0,1],!uh(e,Xs,Ys,qs,_a))?!1:(Ma.crossVectors(qi,Zi),e=[Ma.x,Ma.y,Ma.z],uh(e,Xs,Ys,qs,_a))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ti=[new O,new O,new O,new O,new O,new O,new O,new O],jn=new O,va=new xi,Xs=new O,Ys=new O,qs=new O,qi=new O,Zi=new O,gs=new O,Gr=new O,_a=new O,Ma=new O,xs=new O;function uh(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){xs.fromArray(i,r);let a=s.x*Math.abs(xs.x)+s.y*Math.abs(xs.y)+s.z*Math.abs(xs.z),c=t.dot(xs),l=e.dot(xs),h=n.dot(xs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var en=new O,Ea=new Et,vm=0,We=class extends gi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ef,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ea.fromBufferAttribute(this,e),Ea.applyMatrix3(t),this.setXY(e,Ea.x,Ea.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ti(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ti(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ti(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ti(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ti(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var lo=class extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var co=class extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var xe=class extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}},_m=new xi,Vr=new O,dh=new O,Pi=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):_m.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vr.subVectors(t,this.center);let e=Vr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Vr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vr.copy(t.center).add(dh)),this.expandByPoint(Vr.copy(t.center).sub(dh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Mm=0,Wn=new Se,ph=new nn,Zs=new O,Fn=new xi,Wr=new xi,un=new O,ze=class i extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(X0(t)?co:lo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ae().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Wn.makeRotationFromQuaternion(t),this.applyMatrix4(Wn),this}rotateX(t){return Wn.makeRotationX(t),this.applyMatrix4(Wn),this}rotateY(t){return Wn.makeRotationY(t),this.applyMatrix4(Wn),this}rotateZ(t){return Wn.makeRotationZ(t),this.applyMatrix4(Wn),this}translate(t,e,n){return Wn.makeTranslation(t,e,n),this.applyMatrix4(Wn),this}scale(t,e,n){return Wn.makeScale(t,e,n),this.applyMatrix4(Wn),this}lookAt(t){return ph.lookAt(t),ph.updateMatrix(),this.applyMatrix4(ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&se('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Wr.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(Fn.min,Wr.min),Fn.expandByPoint(un),un.addVectors(Fn.max,Wr.max),Fn.expandByPoint(un)):(Fn.expandByPoint(Wr.min),Fn.expandByPoint(Wr.max))}Fn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)un.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(un));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)un.fromBufferAttribute(a,l),c&&(Zs.fromBufferAttribute(t,l),un.add(Zs)),s=Math.max(s,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&se('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){se("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new We(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let v=0;v<n.count;v++)a[v]=new O,c[v]=new O;let l=new O,h=new O,u=new O,f=new Et,d=new Et,g=new Et,y=new O,p=new O;function m(v,b,A){l.fromBufferAttribute(n,v),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,A),f.fromBufferAttribute(r,v),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,A),h.sub(l),u.sub(l),d.sub(f),g.sub(f);let P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(P),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(P),a[v].add(y),a[b].add(y),a[A].add(y),c[v].add(p),c[b].add(p),c[A].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let v=0,b=E.length;v<b;++v){let A=E[v],P=A.start,L=A.count;for(let D=P,R=P+L;D<R;D+=3)m(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let S=new O,x=new O,_=new O,M=new O;function w(v){_.fromBufferAttribute(s,v),M.copy(_);let b=a[v];S.copy(b),S.sub(_.multiplyScalar(_.dot(b))).normalize(),x.crossVectors(M,b);let P=x.dot(c[v])<0?-1:1;o.setXYZW(v,S.x,S.y,S.z,P)}for(let v=0,b=E.length;v<b;++v){let A=E[v],P=A.start,L=A.count;for(let D=P,R=P+L;D<R;D+=3)w(t.getX(D+0)),w(t.getX(D+1)),w(t.getX(D+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new O,r=new O,o=new O,a=new O,c=new O,l=new O,h=new O,u=new O;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),y=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)un.fromBufferAttribute(t,e),un.normalize(),t.setXYZ(e,un.x,un.y,un.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let y=0,p=c.length;y<p;y++){a.isInterleavedBufferAttribute?d=c[y]*a.data.stride+a.offset:d=c[y]*h;for(let m=0;m<h;m++)f[g++]=l[d++]}return new We(f,h,u)}if(this.index===null)return ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ho=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ef,this.updateRanges=[],this.version=0,this.uuid=pi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Tn=new O,ur=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Tn.fromBufferAttribute(this,e),Tn.applyMatrix4(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Tn.fromBufferAttribute(this,e),Tn.applyNormalMatrix(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Tn.fromBufferAttribute(this,e),Tn.transformDirection(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ti(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ti(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ti(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ti(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ti(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array),r=Pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ro("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new We(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ro("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},mh=new O,Em=new O,bm=new ae,Qn=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=mh.subVectors(n,e).cross(Em.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(mh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||bm.getNormalMatrix(t),s=this.coplanarPoint(mh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Sm=0,ni=class extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=ss,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hh,this.blendDst=kh,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_d,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wa,this.stencilZFail=Wa,this.stencilZPass=Wa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ee(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ee(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Qn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Et().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Et().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},dr=class extends ni{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},$s,Xr=new O,Ks=new O,Js=new O,js=new Et,Yr=new Et,Ld=new Se,ba=new O,qr=new O,Sa=new O,Ru=new Et,gh=new Et,Cu=new Et,fo=class extends nn{constructor(t=new dr){if(super(),this.isSprite=!0,this.type="Sprite",$s===void 0){$s=new ze;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ho(e,5);$s.setIndex([0,1,2,0,2,3]),$s.setAttribute("position",new ur(n,3,0,!1)),$s.setAttribute("uv",new ur(n,2,3,!1))}this.geometry=$s,this.material=t,this.center=new Et(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&se('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ks.setFromMatrixScale(this.matrixWorld),Ld.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Js.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ks.multiplyScalar(-Js.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;wa(ba.set(-.5,-.5,0),Js,o,Ks,s,r),wa(qr.set(.5,-.5,0),Js,o,Ks,s,r),wa(Sa.set(.5,.5,0),Js,o,Ks,s,r),Ru.set(0,0),gh.set(1,0),Cu.set(1,1);let a=t.ray.intersectTriangle(ba,qr,Sa,!1,Xr);if(a===null&&(wa(qr.set(-.5,.5,0),Js,o,Ks,s,r),gh.set(0,1),a=t.ray.intersectTriangle(ba,Sa,qr,!1,Xr),a===null))return;let c=t.ray.origin.distanceTo(Xr);c<t.near||c>t.far||e.push({distance:c,point:Xr.clone(),uv:Ri.getInterpolation(Xr,ba,qr,Sa,Ru,gh,Cu,new Et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function wa(i,t,e,n,s,r){js.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Yr.x=r*js.x-s*js.y,Yr.y=s*js.x+r*js.y):Yr.copy(js),i.copy(t),i.x+=Yr.x,i.y+=Yr.y,i.applyMatrix4(Ld)}var Ai=new O,xh=new O,Ta=new O,Aa=new O,uo=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ai.copy(this.origin).addScaledVector(this.direction,e),Ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){xh.copy(t).add(e).multiplyScalar(.5),Ta.copy(e).sub(t).normalize(),Aa.copy(this.origin).sub(xh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ta),a=Aa.dot(this.direction),c=-Aa.dot(Ta),l=Aa.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let y=1/h;u*=y,f*=y,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(xh).addScaledVector(Ta,f),d}intersectSphere(t,e){if(t.radius<0)return null;Ai.subVectors(t.center,this.origin);let n=Ai.dot(this.direction),s=Ai.dot(Ai)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ai)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,d=t.z-o.z,g=e.x-o.x,y=e.y-o.y,p=e.z-o.z,m=n.x-o.x,E=n.y-o.y,S=n.z-o.z,x=Math.abs(c),_=Math.abs(l),M=Math.abs(h),w,v,b,A,P,L,D,R,C,z,F,J;if(x>=_&&x>=M?(b=c,L=u,C=g,J=m,c>=0?(w=l,v=h,A=f,P=d,D=y,R=p,z=E,F=S):(w=h,v=l,A=d,P=f,D=p,R=y,z=S,F=E)):_>=M?(b=l,L=f,C=y,J=E,l>=0?(w=h,v=c,A=d,P=u,D=p,R=g,z=S,F=m):(w=c,v=h,A=u,P=d,D=g,R=p,z=m,F=S)):(b=h,L=d,C=p,J=S,h>=0?(w=c,v=l,A=u,P=f,D=g,R=y,z=m,F=E):(w=l,v=c,A=f,P=u,D=y,R=g,z=E,F=m)),b===0)return null;let V=w/b,K=v/b,Z=1/b,ot=A-V*L,gt=P-K*L,Yt=D-V*C,At=R-K*C,Gt=z-V*J,U=F-K*J,k=Gt*At-U*Yt,rt=ot*U-gt*Gt,Mt=Yt*gt-At*ot;if(s){if(k<0||rt<0||Mt<0)return null}else if((k<0||rt<0||Mt<0)&&(k>0||rt>0||Mt>0))return null;let ut=k+rt+Mt;if(ut===0)return null;let Y=Z*(k*L+rt*C+Mt*J);return(ut>0?Y<0:Y>0)?null:this.at(Y/ut,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oe=class extends ni{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Iu=new Se,ys=new uo,Ra=new Pi,Pu=new O,Ca=new O,Ia=new O,Pa=new O,yh=new O,La=new O,Lu=new O,Da=new O,B=class extends nn{constructor(t=new ze,e=new oe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){La.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(yh.fromBufferAttribute(u,t),o?La.addScaledVector(yh,h):La.addScaledVector(yh.sub(e),h))}e.add(La)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(r),ys.copy(t.ray).recast(t.near),!(Ra.containsPoint(ys.origin)===!1&&(ys.intersectSphere(Ra,Pu)===null||ys.origin.distanceToSquared(Pu)>(t.far-t.near)**2))&&(Iu.copy(r).invert(),ys.copy(t.ray).applyMatrix4(Iu),!(n.boundingBox!==null&&ys.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ys)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let p=f[g],m=o[p.materialIndex],E=Math.max(p.start,d.start),S=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let x=E,_=S;x<_;x+=3){let M=a.getX(x),w=a.getX(x+1),v=a.getX(x+2);s=Na(this,m,t,n,l,h,u,M,w,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let p=g,m=y;p<m;p+=3){let E=a.getX(p),S=a.getX(p+1),x=a.getX(p+2);s=Na(this,o,t,n,l,h,u,E,S,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let p=f[g],m=o[p.materialIndex],E=Math.max(p.start,d.start),S=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let x=E,_=S;x<_;x+=3){let M=x,w=x+1,v=x+2;s=Na(this,m,t,n,l,h,u,M,w,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let p=g,m=y;p<m;p+=3){let E=p,S=p+1,x=p+2;s=Na(this,o,t,n,l,h,u,E,S,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function wm(i,t,e,n,s,r,o,a){let c;if(t.side===ln?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===is,a),c===null)return null;Da.copy(a),Da.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Da);return l<e.near||l>e.far?null:{distance:l,point:Da.clone(),object:i}}function Na(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Ca),i.getVertexPosition(c,Ia),i.getVertexPosition(l,Pa);let h=wm(i,t,e,n,Ca,Ia,Pa,Lu);if(h){let u=new O;Ri.getBarycoord(Lu,Ca,Ia,Pa,u),s&&(h.uv=Ri.getInterpolatedAttribute(s,a,c,l,u,new Et)),r&&(h.uv1=Ri.getInterpolatedAttribute(r,a,c,l,u,new Et)),o&&(h.normal=Ri.getInterpolatedAttribute(o,a,c,l,u,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new O,materialIndex:0};Ri.getNormal(Ca,Ia,Pa,f.normal),h.face=f,h.barycoord=u}return h}var po=class extends An{constructor(t=null,e=1,n=1,s,r,o,a,c,l=dn,h=dn,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pr=class extends We{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Qs=new Se,Du=new Se,za=[],Nu=new xi,Tm=new Se,Zr=new B,$r=new Pi,mo=class extends B{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new pr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Tm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new xi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qs),Nu.copy(t.boundingBox).applyMatrix4(Qs),this.boundingBox.union(Nu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qs),$r.copy(t.boundingSphere).applyMatrix4(Qs),this.boundingSphere.union($r)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Zr.geometry=this.geometry,Zr.material=this.material,Zr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$r.copy(this.boundingSphere),$r.applyMatrix4(n),t.ray.intersectsSphere($r)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qs),Du.multiplyMatrices(n,Qs),Zr.matrixWorld=Du,Zr.raycast(t,za);for(let o=0,a=za.length;o<a;o++){let c=za[o];c.instanceId=r,c.object=this,e.push(c)}za.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new pr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new po(new Float32Array(s*this.count),s,this.count,Nl,Xn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},vs=new Pi,Am=new Et(.5,.5),Ua=new O,mr=class{constructor(t=new Qn,e=new Qn,n=new Qn,s=new Qn,r=new Qn,o=new Qn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ei,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],y=r[9],p=r[10],m=r[11],E=r[12],S=r[13],x=r[14],_=r[15];if(s[0].setComponents(l-o,d-h,m-g,_-E).normalize(),s[1].setComponents(l+o,d+h,m+g,_+E).normalize(),s[2].setComponents(l+a,d+u,m+y,_+S).normalize(),s[3].setComponents(l-a,d-u,m-y,_-S).normalize(),n)s[4].setComponents(c,f,p,x).normalize(),s[5].setComponents(l-c,d-f,m-p,_-x).normalize();else if(s[4].setComponents(l-c,d-f,m-p,_-x).normalize(),e===ei)s[5].setComponents(l+c,d+f,m+p,_+x).normalize();else if(e===or)s[5].setComponents(c,f,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(t){vs.center.set(0,0,0);let e=Am.distanceTo(t.center);return vs.radius=.7071067811865476+e,vs.applyMatrix4(t.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ua.x=s.normal.x>0?t.max.x:t.min.x,Ua.y=s.normal.y>0?t.max.y:t.min.y,Ua.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var gr=class extends ni{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},zu=new Se,Rh=new uo,Fa=new Pi,Oa=new O,xr=class extends nn{constructor(t=new ze,e=new gr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(s),Fa.radius+=r,t.ray.intersectsSphere(Fa)===!1)return;zu.copy(s).invert(),Rh.copy(t.ray).applyMatrix4(zu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,y=d;g<y;g++){let p=l.getX(g);Oa.fromBufferAttribute(u,p),Uu(Oa,p,c,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,y=d;g<y;g++)Oa.fromBufferAttribute(u,g),Uu(Oa,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Uu(i,t,e,n,s,r,o){let a=Rh.distanceSqToPoint(i);if(a<e){let c=new O;Rh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var go=class extends An{constructor(t=[],e=rs,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Rn=class extends An{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ki=class extends An{constructor(t,e,n=si,s,r,o,a=dn,c=dn,l,h=mi,u=1){if(h!==mi&&h!==as)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new cr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},il=class extends Ki{constructor(t,e=si,n=rs,s,r,o=dn,a=dn,c,l=mi){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},xo=class extends An{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},qt=class i extends ze{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(u,2));function g(y,p,m,E,S,x,_,M,w,v,b){let A=x/w,P=_/v,L=x/2,D=_/2,R=M/2,C=w+1,z=v+1,F=0,J=0,V=new O;for(let K=0;K<z;K++){let Z=K*P-D;for(let ot=0;ot<C;ot++){let gt=ot*A-L;V[y]=gt*E,V[p]=Z*S,V[m]=R,l.push(V.x,V.y,V.z),V[y]=0,V[p]=0,V[m]=M>0?1:-1,h.push(V.x,V.y,V.z),u.push(ot/w),u.push(1-K/v),F+=1}}for(let K=0;K<v;K++)for(let Z=0;Z<w;Z++){let ot=f+Z+C*K,gt=f+Z+C*(K+1),Yt=f+(Z+1)+C*(K+1),At=f+(Z+1)+C*K;c.push(ot,gt,At),c.push(gt,Yt,At),J+=6}a.addGroup(d,J,b),d+=J,f+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ji=class i extends ze{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],l=[],h=e/2,u=Math.PI/2*t,f=e,d=2*u+f,g=n*2+r,y=s+1,p=new O,m=new O;for(let E=0;E<=g;E++){let S=0,x=0,_=0,M=0;if(E<=n){let b=E/n,A=b*Math.PI/2;x=-h-t*Math.cos(A),_=t*Math.sin(A),M=-t*Math.cos(A),S=b*u}else if(E<=n+r){let b=(E-n)/r;x=-h+b*e,_=t,M=0,S=u+b*f}else{let b=(E-n-r)/n,A=b*Math.PI/2;x=h+t*Math.sin(A),_=t*Math.cos(A),M=t*Math.sin(A),S=u+f+b*u}let w=Math.max(0,Math.min(1,S/d)),v=0;E===0?v=.5/s:E===g&&(v=-.5/s);for(let b=0;b<=s;b++){let A=b/s,P=A*Math.PI*2,L=Math.sin(P),D=Math.cos(P);m.x=-_*D,m.y=x,m.z=_*L,a.push(m.x,m.y,m.z),p.set(-_*D,M,_*L),p.normalize(),c.push(p.x,p.y,p.z),l.push(A+v,w)}if(E>0){let b=(E-1)*y;for(let A=0;A<s;A++){let P=b+A,L=b+A+1,D=E*y+A,R=E*y+A+1;o.push(P,L,D),o.push(L,R,D)}}}this.setIndex(o),this.setAttribute("position",new xe(a,3)),this.setAttribute("normal",new xe(c,3)),this.setAttribute("uv",new xe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Li=class i extends ze{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new O,h=new Et;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new xe(o,3)),this.setAttribute("normal",new xe(a,3)),this.setAttribute("uv",new xe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ft=class i extends ze{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,y=[],p=n/2,m=0;E(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new xe(u,3)),this.setAttribute("normal",new xe(f,3)),this.setAttribute("uv",new xe(d,2));function E(){let x=new O,_=new O,M=0,w=(e-t)/n;for(let v=0;v<=r;v++){let b=[],A=v/r,P=A*(e-t)+t;for(let L=0;L<=s;L++){let D=L/s,R=D*c+a,C=Math.sin(R),z=Math.cos(R);_.x=P*C,_.y=-A*n+p,_.z=P*z,u.push(_.x,_.y,_.z),x.set(C,w,z).normalize(),f.push(x.x,x.y,x.z),d.push(D,1-A),b.push(g++)}y.push(b)}for(let v=0;v<s;v++)for(let b=0;b<r;b++){let A=y[b][v],P=y[b+1][v],L=y[b+1][v+1],D=y[b][v+1];(t>0||b!==0)&&(h.push(A,P,D),M+=3),(e>0||b!==r-1)&&(h.push(P,L,D),M+=3)}l.addGroup(m,M,0),m+=M}function S(x){let _=g,M=new Et,w=new O,v=0,b=x===!0?t:e,A=x===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,p*A,0),f.push(0,A,0),d.push(.5,.5),g++;let P=g;for(let L=0;L<=s;L++){let R=L/s*c+a,C=Math.cos(R),z=Math.sin(R);w.x=b*z,w.y=p*A,w.z=b*C,u.push(w.x,w.y,w.z),f.push(0,A,0),M.x=C*.5+.5,M.y=z*.5*A+.5,d.push(M.x,M.y),g++}for(let L=0;L<s;L++){let D=_+L,R=P+L;x===!0?h.push(R,R+1,D):h.push(R+1,R,D),v+=3}l.addGroup(m,v,x===!0?1:2),m+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},be=class i extends ft{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},yo=class i extends ze{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new xe(r,3)),this.setAttribute("normal",new xe(r.slice(),3)),this.setAttribute("uv",new xe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){let S=new O,x=new O,_=new O;for(let M=0;M<e.length;M+=3)d(e[M+0],S),d(e[M+1],x),d(e[M+2],_),c(S,x,_,E)}function c(E,S,x,_){let M=_+1,w=[];for(let v=0;v<=M;v++){w[v]=[];let b=E.clone().lerp(x,v/M),A=S.clone().lerp(x,v/M),P=M-v;for(let L=0;L<=P;L++)L===0&&v===M?w[v][L]=b:w[v][L]=b.clone().lerp(A,L/P)}for(let v=0;v<M;v++)for(let b=0;b<2*(M-v)-1;b++){let A=Math.floor(b/2);b%2===0?(f(w[v][A+1]),f(w[v+1][A]),f(w[v][A])):(f(w[v][A+1]),f(w[v+1][A+1]),f(w[v+1][A]))}}function l(E){let S=new O;for(let x=0;x<r.length;x+=3)S.x=r[x+0],S.y=r[x+1],S.z=r[x+2],S.normalize().multiplyScalar(E),r[x+0]=S.x,r[x+1]=S.y,r[x+2]=S.z}function h(){let E=new O;for(let S=0;S<r.length;S+=3){E.x=r[S+0],E.y=r[S+1],E.z=r[S+2];let x=p(E)/2/Math.PI+.5,_=m(E)/Math.PI+.5;o.push(x,1-_)}g(),u()}function u(){for(let E=0;E<o.length;E+=6){let S=o[E+0],x=o[E+2],_=o[E+4],M=Math.max(S,x,_),w=Math.min(S,x,_);M>.9&&w<.1&&(S<.2&&(o[E+0]+=1),x<.2&&(o[E+2]+=1),_<.2&&(o[E+4]+=1))}}function f(E){r.push(E.x,E.y,E.z)}function d(E,S){let x=E*3;S.x=t[x+0],S.y=t[x+1],S.z=t[x+2]}function g(){let E=new O,S=new O,x=new O,_=new O,M=new Et,w=new Et,v=new Et;for(let b=0,A=0;b<r.length;b+=9,A+=6){E.set(r[b+0],r[b+1],r[b+2]),S.set(r[b+3],r[b+4],r[b+5]),x.set(r[b+6],r[b+7],r[b+8]),M.set(o[A+0],o[A+1]),w.set(o[A+2],o[A+3]),v.set(o[A+4],o[A+5]),_.copy(E).add(S).add(x).divideScalar(3);let P=p(_);y(M,A+0,E,P),y(w,A+2,S,P),y(v,A+4,x,P)}}function y(E,S,x,_){_<0&&E.x===1&&(o[S]=E.x-1),x.x===0&&x.z===0&&(o[S]=_/2/Math.PI+.5)}function p(E){return Math.atan2(E.z,-E.x)}function m(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},vo=class i extends yo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ee("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Et:new O);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new O,s=[],r=[],o=[],a=new O,c=new Se;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new O)}r[0]=new O,o[0]=new O;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(me(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(me(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},yr=class extends Hn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Et){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},sl=class extends yr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function rf(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Fu=new O,Ou=new O,vh=new rf,_h=new rf,Mh=new rf,rl=class extends Hn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new O){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Ou.subVectors(s[0],s[1]).add(s[0]),l=Ou);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Fu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Fu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),d),y=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),vh.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,y,p),_h.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,y,p),Mh.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,y,p)}else this.curveType==="catmullrom"&&(vh.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),_h.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Mh.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(vh.calc(c),_h.calc(c),Mh.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Bu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Rm(i,t){let e=1-i;return e*e*t}function Cm(i,t){return 2*(1-i)*i*t}function Im(i,t){return i*i*t}function Qr(i,t,e,n){return Rm(i,t)+Cm(i,e)+Im(i,n)}function Pm(i,t){let e=1-i;return e*e*e*t}function Lm(i,t){let e=1-i;return 3*e*e*i*t}function Dm(i,t){return 3*(1-i)*i*i*t}function Nm(i,t){return i*i*i*t}function to(i,t,e,n,s){return Pm(i,t)+Lm(i,e)+Dm(i,n)+Nm(i,s)}var _o=class extends Hn{constructor(t=new Et,e=new Et,n=new Et,s=new Et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Et){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(to(t,s.x,r.x,o.x,a.x),to(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ol=class extends Hn{constructor(t=new O,e=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new O){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(to(t,s.x,r.x,o.x,a.x),to(t,s.y,r.y,o.y,a.y),to(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Mo=class extends Hn{constructor(t=new Et,e=new Et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Et){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},al=class extends Hn{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Eo=class extends Hn{constructor(t=new Et,e=new Et,n=new Et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Et){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Qr(t,s.x,r.x,o.x),Qr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ll=class extends Hn{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Qr(t,s.x,r.x,o.x),Qr(t,s.y,r.y,o.y),Qr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bo=class extends Hn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Et){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Bu(a,c.x,l.x,h.x,u.x),Bu(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Et().fromArray(s))}return this}},Ch=Object.freeze({__proto__:null,ArcCurve:sl,CatmullRomCurve3:rl,CubicBezierCurve:_o,CubicBezierCurve3:ol,EllipseCurve:yr,LineCurve:Mo,LineCurve3:al,QuadraticBezierCurve:Eo,QuadraticBezierCurve3:ll,SplineCurve:bo}),cl=class extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ch[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ch[s.type]().fromJSON(s))}return this}},So=class extends cl{constructor(t){super(),this.type="Path",this.currentPoint=new Et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Mo(this.currentPoint.clone(),new Et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Eo(this.currentPoint.clone(),new Et(t,e),new Et(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new _o(this.currentPoint.clone(),new Et(t,e),new Et(n,s),new Et(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new bo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new yr(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ji=class extends So{constructor(t){super(t),this.uuid=pi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new So().fromJSON(s))}return this}};function zm(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Dd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Hm(i,t,r,e)),i.length>80*e){a=i[0],c=i[1];let h=a,u=c;for(let f=e;f<s;f+=e){let d=i[f],g=i[f+1];d<a&&(a=d),g<c&&(c=g),d>h&&(h=d),g>u&&(u=g)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return wo(r,o,e,a,c,l,0),o}function Dd(i,t,e,n,s){let r;if(s===Jm(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Hu(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Hu(o/n|0,i[o],i[o+1],r);return r&&vr(r,r.next)&&(Ao(r),r=r.next),r}function Es(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(vr(e,e.next)||Ke(e.prev,e,e.next)===0)){if(Ao(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function wo(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Xm(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Fm(i,n,s,r):Um(i)){t.push(c.i,i.i,l.i),Ao(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Om(Es(i),t),wo(i,t,e,n,s,r,2)):o===2&&Bm(i,t,e,n,s,r):wo(Es(i),t,e,n,s,r,1);break}}}function Um(i){let t=i.prev,e=i,n=i.next;if(Ke(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),f=Math.max(s,r,o),d=Math.max(a,c,l),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Kr(s,a,r,c,o,l,g.x,g.y)&&Ke(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Fm(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ke(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,c,l),g=Math.min(h,u,f),y=Math.max(a,c,l),p=Math.max(h,u,f),m=Ih(d,g,t,e,n),E=Ih(y,p,t,e,n),S=i.prevZ,x=i.nextZ;for(;S&&S.z>=m&&x&&x.z<=E;){if(S.x>=d&&S.x<=y&&S.y>=g&&S.y<=p&&S!==s&&S!==o&&Kr(a,h,c,u,l,f,S.x,S.y)&&Ke(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=d&&x.x<=y&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&Kr(a,h,c,u,l,f,x.x,x.y)&&Ke(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=m;){if(S.x>=d&&S.x<=y&&S.y>=g&&S.y<=p&&S!==s&&S!==o&&Kr(a,h,c,u,l,f,S.x,S.y)&&Ke(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=E;){if(x.x>=d&&x.x<=y&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&Kr(a,h,c,u,l,f,x.x,x.y)&&Ke(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Om(i,t){let e=i;do{let n=e.prev,s=e.next.next;!vr(n,s)&&zd(n,e,e.next,s)&&To(n,s)&&To(s,n)&&(t.push(n.i,e.i,s.i),Ao(e),Ao(e.next),e=i=s),e=e.next}while(e!==i);return Es(e)}function Bm(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Zm(o,a)){let c=Ud(o,a);o=Es(o,o.next),c=Es(c,c.next),wo(o,t,e,n,s,r,0),wo(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Hm(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Dd(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(qm(l))}s.sort(km);for(let r=0;r<s.length;r++)e=Gm(s[r],e);return e}function km(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Gm(i,t){let e=Vm(i,t);if(!e)return t;let n=Ud(e,i);return Es(n,n.next),Es(e,e.next)}function Vm(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(vr(i,e))return e;do{if(vr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Nd(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);To(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Wm(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Wm(i,t){return Ke(i.prev,i,t.prev)<0&&Ke(t.next,i,i.next)<0}function Xm(i,t,e,n){let s=i;do s.z===0&&(s.z=Ih(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ym(s)}function Ym(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Ih(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function qm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Nd(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Kr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Nd(i,t,e,n,s,r,o,a)}function Zm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!$m(i,t)&&(To(i,t)&&To(t,i)&&Km(i,t)&&(Ke(i.prev,i,t.prev)||Ke(i,t.prev,t))||vr(i,t)&&Ke(i.prev,i,i.next)>0&&Ke(t.prev,t,t.next)>0)}function Ke(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function vr(i,t){return i.x===t.x&&i.y===t.y}function zd(i,t,e,n){let s=Ha(Ke(i,t,e)),r=Ha(Ke(i,t,n)),o=Ha(Ke(e,n,i)),a=Ha(Ke(e,n,t));return!!(s!==r&&o!==a||s===0&&Ba(i,e,t)||r===0&&Ba(i,n,t)||o===0&&Ba(e,i,n)||a===0&&Ba(e,t,n))}function Ba(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ha(i){return i>0?1:i<0?-1:0}function $m(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&zd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function To(i,t){return Ke(i.prev,i,i.next)<0?Ke(i,t,i.next)>=0&&Ke(i,i.prev,t)>=0:Ke(i,t,i.prev)<0||Ke(i,i.next,t)<0}function Km(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ud(i,t){let e=Ph(i.i,i.x,i.y),n=Ph(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Hu(i,t,e,n){let s=Ph(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ao(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ph(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Jm(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Lh=class{static triangulate(t,e,n=2){return zm(t,e,n)}},_s=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];ku(t),Gu(n,t);let o=t.length;e.forEach(ku);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Gu(n,e[c]);let a=Lh.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function ku(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Gu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Qi=class i extends ze{constructor(t=new ji([new Et(.5,.5),new Et(-.5,.5),new Et(-.5,-.5),new Et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new xe(s,3)),this.setAttribute("uv",new xe(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:jm,S,x=!1,_,M,w,v;if(m){S=m.getSpacedPoints(h),x=!0,f=!1;let $=m.isCatmullRomCurve3?m.closed:!1;_=m.computeFrenetFrames(h,$),M=new O,w=new O,v=new O}f||(p=0,d=0,g=0,y=0);let b=a.extractPoints(l),A=b.shape,P=b.holes;if(!_s.isClockWise(A)){A=A.reverse();for(let $=0,et=P.length;$<et;$++){let ct=P[$];_s.isClockWise(ct)&&(P[$]=ct.reverse())}}function D($){let ct=10000000000000001e-36,lt=$[0];for(let yt=1;yt<=$.length;yt++){let Bt=yt%$.length,Vt=$[Bt],Qt=Vt.x-lt.x,ie=Vt.y-lt.y,H=Qt*Qt+ie*ie,_e=Math.max(Math.abs(Vt.x),Math.abs(Vt.y),Math.abs(lt.x),Math.abs(lt.y)),fe=ct*_e*_e;if(H<=fe){$.splice(Bt,1),yt--;continue}lt=Vt}}D(A),P.forEach(D);let R=P.length,C=A;for(let $=0;$<R;$++){let et=P[$];A=A.concat(et)}function z($,et,ct){return et||se("ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(et,ct)}let F=A.length;function J($,et,ct){let lt,yt,Bt,Vt=$.x-et.x,Qt=$.y-et.y,ie=ct.x-$.x,H=ct.y-$.y,_e=Vt*Vt+Qt*Qt,fe=Vt*H-Qt*ie;if(Math.abs(fe)>Number.EPSILON){let N=Math.sqrt(_e),T=Math.sqrt(ie*ie+H*H),q=et.x-Qt/N,tt=et.y+Vt/N,it=ct.x-H/T,bt=ct.y+ie/T,St=((it-q)*H-(bt-tt)*ie)/(Vt*H-Qt*ie);lt=q+Vt*St-$.x,yt=tt+Qt*St-$.y;let st=lt*lt+yt*yt;if(st<=2)return new Et(lt,yt);Bt=Math.sqrt(st/2)}else{let N=!1;Vt>Number.EPSILON?ie>Number.EPSILON&&(N=!0):Vt<-Number.EPSILON?ie<-Number.EPSILON&&(N=!0):Math.sign(Qt)===Math.sign(H)&&(N=!0),N?(lt=-Qt,yt=Vt,Bt=Math.sqrt(_e)):(lt=Vt,yt=Qt,Bt=Math.sqrt(_e/2))}return new Et(lt/Bt,yt/Bt)}let V=[];for(let $=0,et=C.length,ct=et-1,lt=$+1;$<et;$++,ct++,lt++)ct===et&&(ct=0),lt===et&&(lt=0),V[$]=J(C[$],C[ct],C[lt]);let K=[],Z,ot=V.concat();for(let $=0,et=R;$<et;$++){let ct=P[$];Z=[];for(let lt=0,yt=ct.length,Bt=yt-1,Vt=lt+1;lt<yt;lt++,Bt++,Vt++)Bt===yt&&(Bt=0),Vt===yt&&(Vt=0),Z[lt]=J(ct[lt],ct[Bt],ct[Vt]);K.push(Z),ot=ot.concat(Z)}let gt;if(p===0)gt=_s.triangulateShape(C,P);else{let $=[],et=[];for(let ct=0;ct<p;ct++){let lt=ct/p,yt=d*Math.cos(lt*Math.PI/2),Bt=g*Math.sin(lt*Math.PI/2)+y;for(let Vt=0,Qt=C.length;Vt<Qt;Vt++){let ie=z(C[Vt],V[Vt],Bt);rt(ie.x,ie.y,-yt),lt===0&&$.push(ie)}for(let Vt=0,Qt=R;Vt<Qt;Vt++){let ie=P[Vt];Z=K[Vt];let H=[];for(let _e=0,fe=ie.length;_e<fe;_e++){let N=z(ie[_e],Z[_e],Bt);rt(N.x,N.y,-yt),lt===0&&H.push(N)}lt===0&&et.push(H)}}gt=_s.triangulateShape($,et)}let Yt=gt.length,At=g+y;for(let $=0;$<F;$++){let et=f?z(A[$],ot[$],At):A[$];x?(w.copy(_.normals[0]).multiplyScalar(et.x),M.copy(_.binormals[0]).multiplyScalar(et.y),v.copy(S[0]).add(w).add(M),rt(v.x,v.y,v.z)):rt(et.x,et.y,0)}for(let $=1;$<=h;$++)for(let et=0;et<F;et++){let ct=f?z(A[et],ot[et],At):A[et];x?(w.copy(_.normals[$]).multiplyScalar(ct.x),M.copy(_.binormals[$]).multiplyScalar(ct.y),v.copy(S[$]).add(w).add(M),rt(v.x,v.y,v.z)):rt(ct.x,ct.y,u/h*$)}for(let $=p-1;$>=0;$--){let et=$/p,ct=d*Math.cos(et*Math.PI/2),lt=g*Math.sin(et*Math.PI/2)+y;for(let yt=0,Bt=C.length;yt<Bt;yt++){let Vt=z(C[yt],V[yt],lt);rt(Vt.x,Vt.y,u+ct)}for(let yt=0,Bt=P.length;yt<Bt;yt++){let Vt=P[yt];Z=K[yt];for(let Qt=0,ie=Vt.length;Qt<ie;Qt++){let H=z(Vt[Qt],Z[Qt],lt);x?rt(H.x,H.y+S[h-1].y,S[h-1].x+ct):rt(H.x,H.y,u+ct)}}}Gt(),U();function Gt(){let $=s.length/3;if(f){let et=0,ct=F*et;for(let lt=0;lt<Yt;lt++){let yt=gt[lt];Mt(yt[2]+ct,yt[1]+ct,yt[0]+ct)}et=h+p*2,ct=F*et;for(let lt=0;lt<Yt;lt++){let yt=gt[lt];Mt(yt[0]+ct,yt[1]+ct,yt[2]+ct)}}else{for(let et=0;et<Yt;et++){let ct=gt[et];Mt(ct[2],ct[1],ct[0])}for(let et=0;et<Yt;et++){let ct=gt[et];Mt(ct[0]+F*h,ct[1]+F*h,ct[2]+F*h)}}n.addGroup($,s.length/3-$,0)}function U(){let $=s.length/3,et=0;k(C,et),et+=C.length;for(let ct=0,lt=P.length;ct<lt;ct++){let yt=P[ct];k(yt,et),et+=yt.length}n.addGroup($,s.length/3-$,1)}function k($,et){let ct=$.length;for(;--ct>=0;){let lt=ct,yt=ct-1;yt<0&&(yt=$.length-1);for(let Bt=0,Vt=h+p*2;Bt<Vt;Bt++){let Qt=F*Bt,ie=F*(Bt+1),H=et+lt+Qt,_e=et+yt+Qt,fe=et+yt+ie,N=et+lt+ie;ut(H,_e,fe,N)}}}function rt($,et,ct){c.push($),c.push(et),c.push(ct)}function Mt($,et,ct){Y($),Y(et),Y(ct);let lt=s.length/3,yt=E.generateTopUV(n,s,lt-3,lt-2,lt-1);pt(yt[0]),pt(yt[1]),pt(yt[2])}function ut($,et,ct,lt){Y($),Y(et),Y(lt),Y(et),Y(ct),Y(lt);let yt=s.length/3,Bt=E.generateSideWallUV(n,s,yt-6,yt-3,yt-2,yt-1);pt(Bt[0]),pt(Bt[1]),pt(Bt[3]),pt(Bt[1]),pt(Bt[2]),pt(Bt[3])}function Y($){s.push(c[$*3+0]),s.push(c[$*3+1]),s.push(c[$*3+2])}function pt($){r.push($.x),r.push($.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Qm(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ch[s.type]().fromJSON(s)),new i(n,t.options)}},jm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new Et(r,o),new Et(a,c),new Et(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],y=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Et(o,1-c),new Et(l,1-u),new Et(f,1-g),new Et(y,1-m)]:[new Et(a,1-c),new Et(h,1-u),new Et(d,1-g),new Et(p,1-m)]}};function Qm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ro=class i extends yo{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Ze=class i extends ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,d=[],g=[],y=[],p=[];for(let m=0;m<h;m++){let E=m*f-o;for(let S=0;S<l;S++){let x=S*u-r;g.push(x,-E,0),y.push(0,0,1),p.push(S/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let E=0;E<a;E++){let S=E+l*m,x=E+l*(m+1),_=E+1+l*(m+1),M=E+1+l*m;d.push(S,x,M),d.push(x,_,M)}this.setIndex(d),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(y,3)),this.setAttribute("uv",new xe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var ue=class i extends ze{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new O,f=new O,d=[],g=[],y=[],p=[];for(let m=0;m<=n;m++){let E=[],S=m/n,x=o+S*a,_=t*Math.cos(x),M=Math.sqrt(t*t-_*_),w=0;m===0&&o===0?w=.5/e:m===n&&c===Math.PI&&(w=-.5/e);for(let v=0;v<=e;v++){let b=v/e,A=s+b*r;u.x=-M*Math.cos(A),u.y=_,u.z=M*Math.sin(A),g.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),p.push(b+w,1-S),E.push(l++)}h.push(E)}for(let m=0;m<n;m++)for(let E=0;E<e;E++){let S=h[m][E+1],x=h[m][E],_=h[m+1][E],M=h[m+1][E+1];(m!==0||o>0)&&d.push(S,x,M),(m!==n-1||c<Math.PI)&&d.push(x,_,M)}this.setIndex(d),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(y,3)),this.setAttribute("uv",new xe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var we=class i extends ze{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],u=[],f=new O,d=new O,g=new O;for(let y=0;y<=n;y++){let p=o+y/n*a;for(let m=0;m<=s;m++){let E=m/s*r;d.x=(t+e*Math.cos(p))*Math.cos(E),d.y=(t+e*Math.cos(p))*Math.sin(E),d.z=e*Math.sin(p),l.push(d.x,d.y,d.z),f.x=t*Math.cos(E),f.y=t*Math.sin(E),g.subVectors(d,f).normalize(),h.push(g.x,g.y,g.z),u.push(m/s),u.push(y/n)}}for(let y=1;y<=n;y++)for(let p=1;p<=s;p++){let m=(s+1)*y+p-1,E=(s+1)*(y-1)+p-1,S=(s+1)*(y-1)+p,x=(s+1)*y+p;c.push(m,E,x),c.push(E,S,x)}this.setIndex(c),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function As(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Vu(s))s.isRenderTargetTexture?(ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Vu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function vn(i){let t={};for(let e=0;e<i.length;e++){let n=As(i[e]);for(let s in n)t[s]=n[s]}return t}function Vu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function tg(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function of(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ye.workingColorSpace}var Fd={clone:As,merge:vn},eg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ng=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sn=class extends ni{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eg,this.fragmentShader=ng,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=As(t.uniforms),this.uniformsGroups=tg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new kt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Et().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Xe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ae().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Se().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},hl=class extends sn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ut=class extends ni{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wo,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Co=class extends Ut{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Et(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Io=class extends ni{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wo,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Al,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},fl=class extends ni{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ul=class extends ni{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function tr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Eh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ts=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},dl=class extends ts{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wh,endingEnd:wh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Th:r=t,a=2*e-n;break;case Ah:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Th:o=t,c=2*n-e;break;case Ah:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),y=g*g,p=y*g,m=-f*p+2*f*y-f*g,E=(1+f)*p+(-1.5-2*f)*y+(-.5+f)*g+1,S=(-1-d)*p+(1.5+d)*y+.5*g,x=d*p-d*y;for(let _=0;_!==a;++_)r[_]=m*o[h+_]+E*o[l+_]+S*o[c+_]+x*o[u+_];return r}},pl=class extends ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},ml=class extends ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},gl=class extends ts{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-e)/(s-e),y=1-g;for(let p=0;p!==a;++p)r[p]=o[l+p]*y+o[c+p]*g;return r}let f=a*2,d=t-1;for(let g=0;g!==a;++g){let y=o[l+g],p=o[c+g],m=d*f+g*2,E=u[m],S=u[m+1],x=t*f+g*2,_=h[x],M=h[x+1],w=sg(n,e,E,_,s);r[g]=Od(w,y,S,M,p)}return r}};function Od(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function ig(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function sg(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Od(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let c=ig(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var kn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=tr(e,this.TimeBufferType),this.values=tr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:tr(t.times,Array),values:tr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Eh(t.settings)&&(n.settings={inTangents:tr(t.settings.inTangents,Array),outTangents:tr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ml(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new gl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case eo:e=this.InterpolantFactoryMethodDiscrete;break;case Qa:e=this.InterpolantFactoryMethodLinear;break;case Va:e=this.InterpolantFactoryMethodSmooth;break;case Sh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ee("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return eo;case this.InterpolantFactoryMethodLinear:return Qa;case this.InterpolantFactoryMethodSmooth:return Va;case this.InterpolantFactoryMethodBezier:return Sh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Eh(this.settings)&&(Wu(this.settings.inTangents,t),Wu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(se("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(se("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){se("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){se("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Y0(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){se("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Va,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let y=e[u+g];if(y!==e[f+g]||y!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Eh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Wu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=Qa;var es=class extends kn{constructor(t,e,n){super(t,e,n)}};es.prototype.ValueTypeName="bool";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=eo;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var xl=class extends kn{constructor(t,e,n,s){super(t,e,n,s)}};xl.prototype.ValueTypeName="color";var yl=class extends kn{constructor(t,e,n,s){super(t,e,n,s)}};yl.prototype.ValueTypeName="number";var vl=class extends ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)On.slerpFlat(r,0,o,l-a,o,l,c);return r}},Po=class extends kn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new vl(this.times,this.values,this.getValueSize(),t)}};Po.prototype.ValueTypeName="quaternion";Po.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends kn{constructor(t,e,n){super(t,e,n)}};ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=eo;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var _l=class extends kn{constructor(t,e,n,s){super(t,e,n,s)}};_l.prototype.ValueTypeName="vector";var Ml=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Bd=new Ml,El=class{constructor(t){this.manager=t!==void 0?t:Bd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};El.DEFAULT_MATERIAL_NAME="__DEFAULT";var _r=class extends nn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},bs=class extends _r{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},bh=new Se,Xu=new O,Yu=new O,Lo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mr,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new Xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Xu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xu),Yu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Yu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){bh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(bh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===or||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(bh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ka=new O,Ga=new On,ui=new O,Do=class extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ka,Ga,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ka,Ga,ui.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ka,Ga,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ka,Ga,ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},$i=new O,qu=new Et,Zu=new Et,an=class extends Do{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=lr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return lr*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($i.x,$i.y).multiplyScalar(-t/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-t/$i.z)}getViewSize(t,e){return this.getViewBounds(t,qu,Zu),e.subVectors(Zu,qu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Jr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Dh=class extends Lo{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0}},No=class extends _r{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Dh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Mr=class extends Do{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Nh=class extends Lo{constructor(){super(new Mr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ss=class extends _r{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new Nh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var er=-90,nr=1,bl=class extends nn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new an(er,nr,t,e);s.layers=this.layers,this.add(s);let r=new an(er,nr,t,e);r.layers=this.layers,this.add(r);let o=new an(er,nr,t,e);o.layers=this.layers,this.add(o);let a=new an(er,nr,t,e);a.layers=this.layers,this.add(a);let c=new an(er,nr,t,e);c.layers=this.layers,this.add(c);let l=new an(er,nr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===or)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Sl=class extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var af="\\[\\]\\.:\\/",rg=new RegExp("["+af+"]","g"),lf="[^"+af+"]",og="[^"+af.replace("\\.","")+"]",ag=/((?:WC+[\/:])*)/.source.replace("WC",lf),lg=/(WCOD+)?/.source.replace("WCOD",og),cg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lf),hg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lf),fg=new RegExp("^"+ag+lg+cg+hg+"$"),ug=["material","materials","bones","map"],zh=class{constructor(t,e,n){let s=n||qe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},qe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(rg,"")}static parseTrackName(t){let e=fg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ug.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ee("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){se("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){se("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){se("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){se("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){se("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){se("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){se("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;se("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){se("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){se("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};qe.Composite=zh;qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qe.prototype.GetterByBindingType=[qe.prototype._getValue_direct,qe.prototype._getValue_array,qe.prototype._getValue_arrayElement,qe.prototype._getValue_toArray];qe.prototype.SetterByBindingTypeAndVersioning=[[qe.prototype._setValue_direct,qe.prototype._setValue_direct_setNeedsUpdate,qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_array,qe.prototype._setValue_array_setNeedsUpdate,qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_arrayElement,qe.prototype._setValue_arrayElement_setNeedsUpdate,qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_fromArray,qe.prototype._setValue_fromArray_setNeedsUpdate,qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hM=new Float32Array(1);var pf=class pf{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};pf.prototype.isMatrix2=!0;var Uh=pf;function cf(i,t,e,n){let s=dg(n);switch(e){case Qh:return i*t;case Nl:return i*t/s.components*s.byteLength;case zl:return i*t/s.components*s.byteLength;case ls:return i*t*2/s.components*s.byteLength;case Ul:return i*t*2/s.components*s.byteLength;case tf:return i*t*3/s.components*s.byteLength;case Yn:return i*t*4/s.components*s.byteLength;case Fl:return i*t*4/s.components*s.byteLength;case Oo:case Bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ho:case ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bl:case kl:return Math.max(i,16)*Math.max(t,8)/4;case Ol:case Hl:return Math.max(i,8)*Math.max(t,8)/2;case Gl:case Vl:case Xl:case Yl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wl:case Go:case ql:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $l:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Kl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case jl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case tc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ec:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case nc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ic:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case sc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case rc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case oc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ac:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case lc:case cc:case hc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case fc:case uc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Vo:case dc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dg(i){switch(i){case Dn:case $h:return{byteLength:1,components:1};case Sr:case Kh:case ri:return{byteLength:2,components:1};case Ll:case Dl:return{byteLength:2,components:4};case si:case Pl:case Xn:return{byteLength:4,components:1};case Jh:case jh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function ap(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function yg(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],y=u[d];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,u[f]=y)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let y=u[d];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var vg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_g=`#ifdef USE_ALPHAHASH
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
#endif`,Mg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Eg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wg=`#ifdef USE_AOMAP
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
#endif`,Tg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ag=`#ifdef USE_BATCHING
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
#endif`,Rg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ig=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lg=`#ifdef USE_IRIDESCENCE
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
#endif`,Dg=`#ifdef USE_BUMPMAP
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
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Og=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Bg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Hg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Gg=`#define PI 3.141592653589793
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
} // validated`,Vg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wg=`vec3 transformedNormal = objectNormal;
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
#endif`,Xg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$g="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jg=`#ifdef USE_ENVMAP
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
#endif`,jg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Qg=`#ifdef USE_ENVMAP
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
#endif`,tx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ex=`#ifdef USE_ENVMAP
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
#endif`,nx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ix=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ox=`#ifdef USE_GRADIENTMAP
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
}`,ax=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,fx=`#ifdef USE_ENVMAP
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
#endif`,ux=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,px=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gx=`PhysicalMaterial material;
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
#endif`,xx=`uniform sampler2D dfgLUT;
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
}`,yx=`
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
#endif`,vx=`#if defined( RE_IndirectDiffuse )
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
#endif`,_x=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ex=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ax=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cx=`#if defined( USE_POINTS_UV )
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
#endif`,Ix=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Px=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zx=`#ifdef USE_MORPHTARGETS
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
#endif`,Ux=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ox=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Gx=`#ifdef USE_NORMALMAP
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
#endif`,Vx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$x=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,t1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,e1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,i1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,s1=`float getShadowMask() {
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
}`,r1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,o1=`#ifdef USE_SKINNING
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
#endif`,a1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,l1=`#ifdef USE_SKINNING
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
#endif`,c1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,h1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,d1=`#ifdef USE_TRANSMISSION
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
#endif`,p1=`#ifdef USE_TRANSMISSION
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
#endif`,m1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,v1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_1=`uniform sampler2D t2D;
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
}`,M1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,b1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w1=`#include <common>
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
}`,T1=`#if DEPTH_PACKING == 3200
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
}`,A1=`#define DISTANCE
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
}`,R1=`#define DISTANCE
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
}`,C1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,I1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P1=`uniform float scale;
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
}`,L1=`uniform vec3 diffuse;
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
}`,D1=`#include <common>
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
}`,N1=`uniform vec3 diffuse;
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
}`,z1=`#define LAMBERT
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
}`,U1=`#define LAMBERT
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
}`,F1=`#define MATCAP
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
}`,O1=`#define MATCAP
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
}`,B1=`#define NORMAL
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
}`,H1=`#define NORMAL
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
}`,k1=`#define PHONG
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
}`,G1=`#define PHONG
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
}`,V1=`#define STANDARD
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
}`,W1=`#define STANDARD
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
}`,X1=`#define TOON
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
}`,Y1=`#define TOON
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
}`,q1=`uniform float size;
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
}`,Z1=`uniform vec3 diffuse;
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
}`,$1=`#include <common>
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
}`,K1=`uniform vec3 color;
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
}`,J1=`uniform float rotation;
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
}`,j1=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:vg,alphahash_pars_fragment:_g,alphamap_fragment:Mg,alphamap_pars_fragment:Eg,alphatest_fragment:bg,alphatest_pars_fragment:Sg,aomap_fragment:wg,aomap_pars_fragment:Tg,batching_pars_vertex:Ag,batching_vertex:Rg,begin_vertex:Cg,beginnormal_vertex:Ig,bsdfs:Pg,iridescence_fragment:Lg,bumpmap_pars_fragment:Dg,clipping_planes_fragment:Ng,clipping_planes_pars_fragment:zg,clipping_planes_pars_vertex:Ug,clipping_planes_vertex:Fg,color_fragment:Og,color_pars_fragment:Bg,color_pars_vertex:Hg,color_vertex:kg,common:Gg,cube_uv_reflection_fragment:Vg,defaultnormal_vertex:Wg,displacementmap_pars_vertex:Xg,displacementmap_vertex:Yg,emissivemap_fragment:qg,emissivemap_pars_fragment:Zg,colorspace_fragment:$g,colorspace_pars_fragment:Kg,envmap_fragment:Jg,envmap_common_pars_fragment:jg,envmap_pars_fragment:Qg,envmap_pars_vertex:tx,envmap_physical_pars_fragment:fx,envmap_vertex:ex,fog_vertex:nx,fog_pars_vertex:ix,fog_fragment:sx,fog_pars_fragment:rx,gradientmap_pars_fragment:ox,lightmap_pars_fragment:ax,lights_lambert_fragment:lx,lights_lambert_pars_fragment:cx,lights_pars_begin:hx,lights_toon_fragment:ux,lights_toon_pars_fragment:dx,lights_phong_fragment:px,lights_phong_pars_fragment:mx,lights_physical_fragment:gx,lights_physical_pars_fragment:xx,lights_fragment_begin:yx,lights_fragment_maps:vx,lights_fragment_end:_x,lightprobes_pars_fragment:Mx,logdepthbuf_fragment:Ex,logdepthbuf_pars_fragment:bx,logdepthbuf_pars_vertex:Sx,logdepthbuf_vertex:wx,map_fragment:Tx,map_pars_fragment:Ax,map_particle_fragment:Rx,map_particle_pars_fragment:Cx,metalnessmap_fragment:Ix,metalnessmap_pars_fragment:Px,morphinstance_vertex:Lx,morphcolor_vertex:Dx,morphnormal_vertex:Nx,morphtarget_pars_vertex:zx,morphtarget_vertex:Ux,normal_fragment_begin:Fx,normal_fragment_maps:Ox,normal_pars_fragment:Bx,normal_pars_vertex:Hx,normal_vertex:kx,normalmap_pars_fragment:Gx,clearcoat_normal_fragment_begin:Vx,clearcoat_normal_fragment_maps:Wx,clearcoat_pars_fragment:Xx,iridescence_pars_fragment:Yx,opaque_fragment:qx,packing:Zx,premultiplied_alpha_fragment:$x,project_vertex:Kx,dithering_fragment:Jx,dithering_pars_fragment:jx,roughnessmap_fragment:Qx,roughnessmap_pars_fragment:t1,shadowmap_pars_fragment:e1,shadowmap_pars_vertex:n1,shadowmap_vertex:i1,shadowmask_pars_fragment:s1,skinbase_vertex:r1,skinning_pars_vertex:o1,skinning_vertex:a1,skinnormal_vertex:l1,specularmap_fragment:c1,specularmap_pars_fragment:h1,tonemapping_fragment:f1,tonemapping_pars_fragment:u1,transmission_fragment:d1,transmission_pars_fragment:p1,uv_pars_fragment:m1,uv_pars_vertex:g1,uv_vertex:x1,worldpos_vertex:y1,background_vert:v1,background_frag:_1,backgroundCube_vert:M1,backgroundCube_frag:E1,cube_vert:b1,cube_frag:S1,depth_vert:w1,depth_frag:T1,distance_vert:A1,distance_frag:R1,equirect_vert:C1,equirect_frag:I1,linedashed_vert:P1,linedashed_frag:L1,meshbasic_vert:D1,meshbasic_frag:N1,meshlambert_vert:z1,meshlambert_frag:U1,meshmatcap_vert:F1,meshmatcap_frag:O1,meshnormal_vert:B1,meshnormal_frag:H1,meshphong_vert:k1,meshphong_frag:G1,meshphysical_vert:V1,meshphysical_frag:W1,meshtoon_vert:X1,meshtoon_frag:Y1,points_vert:q1,points_frag:Z1,shadow_vert:$1,shadow_frag:K1,sprite_vert:J1,sprite_frag:j1},Dt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},envMapRotation:{value:new ae},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},_i={basic:{uniforms:vn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:vn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new kt(0)},envMapIntensity:{value:1}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:vn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:vn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:vn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new kt(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:vn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:vn([Dt.points,Dt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:vn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:vn([Dt.common,Dt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:vn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:vn([Dt.sprite,Dt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ae}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distance:{uniforms:vn([Dt.common,Dt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distance_vert,fragmentShader:pe.distance_frag},shadow:{uniforms:vn([Dt.lights,Dt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};_i.physical={uniforms:vn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};var gc={r:0,b:0,g:0},Q1=new Se,lp=new ae;lp.set(-1,0,0,0,1,0,0,0,1);function ty(i,t,e,n,s,r){let o=new kt(0),a=s===!0?0:1,c,l,h=null,u=0,f=null;function d(E){let S=E.isScene===!0?E.background:null;if(S&&S.isTexture){let x=E.backgroundBlurriness>0;S=t.get(S,x)}return S}function g(E){let S=!1,x=d(E);x===null?p(o,a):x&&x.isColor&&(p(x,1),S=!0);let _=i.xr.getEnvironmentBlendMode();_==="additive"?e.buffers.color.setClear(0,0,0,1,r):_==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(E,S){let x=d(S);x&&(x.isCubeTexture||x.mapping===Uo)?(l===void 0&&(l=new B(new qt(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:As(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(_,M,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Q1.makeRotationFromEuler(S.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(lp),l.material.toneMapped=ye.getTransfer(x.colorSpace)!==Re,(h!==x||u!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,u=x.version,f=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new B(new Ze(2,2),new sn({name:"BackgroundMaterial",uniforms:As(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ye.getTransfer(x.colorSpace)!==Re,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,f=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,S){E.getRGB(gc,of(i)),e.buffers.color.setClear(gc.r,gc.g,gc.b,S,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,S=1){o.set(E),a=S,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(E){a=E,p(o,a)},render:g,addToRenderList:y,dispose:m}}function ey(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(P,L,D,R,C){let z=!1,F=u(P,R,D,L);r!==F&&(r=F,l(r.object)),z=d(P,R,D,C),z&&g(P,R,D,C),C!==null&&t.update(C,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,x(P,L,D,R),C!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(C).buffer))}function c(){return i.createVertexArray()}function l(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function u(P,L,D,R){let C=R.wireframe===!0,z=n[L.id];z===void 0&&(z={},n[L.id]=z);let F=P.isInstancedMesh===!0?P.id:0,J=z[F];J===void 0&&(J={},z[F]=J);let V=J[D.id];V===void 0&&(V={},J[D.id]=V);let K=V[C];return K===void 0&&(K=f(c()),V[C]=K),K}function f(P){let L=[],D=[],R=[];for(let C=0;C<e;C++)L[C]=0,D[C]=0,R[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:D,attributeDivisors:R,object:P,attributes:{},index:null}}function d(P,L,D,R){let C=r.attributes,z=L.attributes,F=0,J=D.getAttributes();for(let V in J)if(J[V].location>=0){let Z=C[V],ot=z[V];if(ot===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(ot=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(ot=P.instanceColor)),Z===void 0||Z.attribute!==ot||ot&&Z.data!==ot.data)return!0;F++}return r.attributesNum!==F||r.index!==R}function g(P,L,D,R){let C={},z=L.attributes,F=0,J=D.getAttributes();for(let V in J)if(J[V].location>=0){let Z=z[V];Z===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor));let ot={};ot.attribute=Z,Z&&Z.data&&(ot.data=Z.data),C[V]=ot,F++}r.attributes=C,r.attributesNum=F,r.index=R}function y(){let P=r.newAttributes;for(let L=0,D=P.length;L<D;L++)P[L]=0}function p(P){m(P,0)}function m(P,L){let D=r.newAttributes,R=r.enabledAttributes,C=r.attributeDivisors;D[P]=1,R[P]===0&&(i.enableVertexAttribArray(P),R[P]=1),C[P]!==L&&(i.vertexAttribDivisor(P,L),C[P]=L)}function E(){let P=r.newAttributes,L=r.enabledAttributes;for(let D=0,R=L.length;D<R;D++)L[D]!==P[D]&&(i.disableVertexAttribArray(D),L[D]=0)}function S(P,L,D,R,C,z,F){F===!0?i.vertexAttribIPointer(P,L,D,C,z):i.vertexAttribPointer(P,L,D,R,C,z)}function x(P,L,D,R){y();let C=R.attributes,z=D.getAttributes(),F=L.defaultAttributeValues;for(let J in z){let V=z[J];if(V.location>=0){let K=C[J];if(K===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(K=P.instanceColor)),K!==void 0){let Z=K.normalized,ot=K.itemSize,gt=t.get(K);if(gt===void 0)continue;let Yt=gt.buffer,At=gt.type,Gt=gt.bytesPerElement,U=At===i.INT||At===i.UNSIGNED_INT||K.gpuType===Pl;if(K.isInterleavedBufferAttribute){let k=K.data,rt=k.stride,Mt=K.offset;if(k.isInstancedInterleavedBuffer){for(let ut=0;ut<V.locationSize;ut++)m(V.location+ut,k.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ut=0;ut<V.locationSize;ut++)p(V.location+ut);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let ut=0;ut<V.locationSize;ut++)S(V.location+ut,ot/V.locationSize,At,Z,rt*Gt,(Mt+ot/V.locationSize*ut)*Gt,U)}else{if(K.isInstancedBufferAttribute){for(let k=0;k<V.locationSize;k++)m(V.location+k,K.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let k=0;k<V.locationSize;k++)p(V.location+k);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let k=0;k<V.locationSize;k++)S(V.location+k,ot/V.locationSize,At,Z,ot*Gt,ot/V.locationSize*k*Gt,U)}}else if(F!==void 0){let Z=F[J];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(V.location,Z);break;case 3:i.vertexAttrib3fv(V.location,Z);break;case 4:i.vertexAttrib4fv(V.location,Z);break;default:i.vertexAttrib1fv(V.location,Z)}}}}E()}function _(){b();for(let P in n){let L=n[P];for(let D in L){let R=L[D];for(let C in R){let z=R[C];for(let F in z)h(z[F].object),delete z[F];delete R[C]}}delete n[P]}}function M(P){if(n[P.id]===void 0)return;let L=n[P.id];for(let D in L){let R=L[D];for(let C in R){let z=R[C];for(let F in z)h(z[F].object),delete z[F];delete R[C]}}delete n[P.id]}function w(P){for(let L in n){let D=n[L];for(let R in D){let C=D[R];if(C[P.id]===void 0)continue;let z=C[P.id];for(let F in z)h(z[F].object),delete z[F];delete C[P.id]}}}function v(P){for(let L in n){let D=n[L],R=P.isInstancedMesh===!0?P.id:0,C=D[R];if(C!==void 0){for(let z in C){let F=C[z];for(let J in F)h(F[J].object),delete F[J];delete C[z]}delete D[R],Object.keys(D).length===0&&delete n[L]}}}function b(){A(),o=!0,r!==s&&(r=s,l(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:A,dispose:_,releaseStatesOfGeometry:M,releaseStatesOfObject:v,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:p,disableUnusedAttributes:E}}function ny(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function a(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let f=0;for(let d=0;d<h;d++)f+=l[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function iy(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Yn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let v=w===ri&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Dn&&w!==Xn&&!v&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(ee("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&ee("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:x,maxSamples:_,samples:M}}function sy(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Qn,a=new ae,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,y=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{let E=r?0:n,S=E*4,x=m.clippingState||null;c.value=x,x=h(g,f,S,d);for(let _=0;_!==S;++_)x[_]=e[_];m.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let y=u!==null?u.length:0,p=null;if(y!==0){if(p=c.value,g!==!0||p===null){let m=d+y*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,x=d;S!==y;++S,x+=4)o.copy(u[S]).applyMatrix4(E,a),o.normal.toArray(p,x),p[x+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}var Rr=4,ry=6,oy=20,ay=256,Yo=new Mr,Hd=new kt,mf=null,gf=0,xf=0,yf=!1,ly=new O,Rs=new O,Cs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=ly}=r;mf=this._renderer.getRenderTarget(),gf=this._renderer.getActiveCubeFace(),xf=this._renderer.getActiveMipmapLevel(),yf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(mf,gf,xf),this._renderer.xr.enabled=yf,t.scissorTest=!1,Ar(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rs||t.mapping===Ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mf=this._renderer.getRenderTarget(),gf=this._renderer.getActiveCubeFace(),xf=this._renderer.getActiveMipmapLevel(),yf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:ri,format:Yn,colorSpace:no,depthBuffer:!1},s=kd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=cy(r)),this._blurMaterial=fy(r,t,e),this._ggxMaterial=hy(r,t,e)}return s}_compileMaterial(t){let e=new B(new ze,t);this._renderer.compile(e,Yo)}_sceneToCubeUV(t,e,n,s,r){let c=new an(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Hd),u.toneMapping=ii,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new B(new qt,new oe({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,p=y.material,m=!1,E=t.background;E?E.isColor&&(p.color.copy(E),t.background=null,m=!0):(p.color.copy(Hd),m=!0);for(let S=0;S<6;S++){let x=S%3;x===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[S],r.y,r.z)):x===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[S]));let _=this._cubeSize;Ar(s,x*_,S>2?_:0,_,_),u.setRenderTarget(s),m&&u.render(y,c),u.render(t,c)}u.toneMapping=d,u.autoClear=f,t.background=E}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===rs||t.mapping===Ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Ar(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Yo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),f=l*1.25,d=u*f,{_lodMax:g}=this,y=this._sizeLods[n],p=3*y*(n>g-Rr?n-g+Rr:0),m=4*(this._cubeSize-y);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=g-e,Ar(r,p,m,3*y,2*y),s.setRenderTarget(r),s.render(a,Yo),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,Ar(t,p,m,3*y,2*y),s.setRenderTarget(t),s.render(a,Yo)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-Rr?s-this._lodMax+Rr:0),f=4*(this._cubeSize-h);Ar(e,u,f,3*h,2*h),o.setRenderTarget(e),o.render(c,Yo)}};function cy(i){let t=[],e=[],n=i,s=i-Rr+1+ry;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),c=-a,l=1+a,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,f=6,d=3,g=new Float32Array(d*f*u),y=new Float32Array(d*f*u);for(let m=0;m<u;m++){let E=m%3*2/3-1,S=m>2?0:-1,x=[E,S,0,E+2/3,S,0,E+2/3,S+1,0,E,S,0,E+2/3,S+1,0,E,S+1,0];g.set(x,d*f*m);for(let _=0;_<f;_++){let M=h[_*2]*2-1,w=h[_*2+1]*2-1;m===0?Rs.set(1,w,M):m===1?Rs.set(-M,1,-w):m===2?Rs.set(-M,w,1):m===3?Rs.set(-1,w,-M):m===4?Rs.set(-M,-1,w):Rs.set(M,w,-1),Rs.toArray(y,(m*f+_)*d)}}let p=new ze;p.setAttribute("position",new We(g,d)),p.setAttribute("outputDirection",new We(y,d)),e.push(new B(p,null)),n>Rr&&n--}return{lodMeshes:e,sizeLods:t}}function kd(i,t,e){let n=new Ln(i,t,e);return n.texture.mapping=Uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ar(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function hy(i,t,e){return new sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ay,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vc(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function fy(i,t,e){return new sn({name:"SphericalGaussianBlur",defines:{SAMPLES:oy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:vc(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Gd(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vc(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Vd(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function vc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var yc=class extends Ln{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new go(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qt(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:As(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:yi});r.uniforms.tEquirect.value=e;let o=new B(s,r),a=e.minFilter;return e.minFilter===os&&(e.minFilter=mn),new bl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function uy(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Rl||d===Cl)if(t.has(f)){let g=t.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let y=new yc(g.height);return y.fromEquirectangularTexture(i,f),t.set(f,y),f.addEventListener("dispose",l),a(y.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,g=d===Rl||d===Cl,y=d===rs||d===Ts;if(g||y){let p=e.get(f),m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new Cs(i)),p=g?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{let E=f.image;return g&&E&&E.height>0||y&&E&&c(E)?(n===null&&(n=new Cs(i)),p=g?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function a(f,d){return d===Rl?f.mapping=rs:d===Cl&&(f.mapping=Ts),f}function c(f){let d=0,g=6;for(let y=0;y<g;y++)f[y]!==void 0&&d++;return d===g}function l(f){let d=f.target;d.removeEventListener("dispose",l);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function dy(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ms("WebGLRenderer: "+n+" extension not supported."),s}}}function py(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function l(u){let f=[],d=u.index,g=u.attributes.position,y=0;if(g===void 0)return;if(d!==null){let E=d.array;y=d.version;for(let S=0,x=E.length;S<x;S+=3){let _=E[S+0],M=E[S+1],w=E[S+2];f.push(_,M,M,w,w,_)}}else{let E=g.array;y=g.version;for(let S=0,x=E.length/3-1;S<x;S+=3){let _=S+0,M=S+1,w=S+2;f.push(_,M,M,w,w,_)}}let p=new(g.count>=65535?co:lo)(f,1);p.version=y;let m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function my(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function l(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*o,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let y=0;for(let p=0;p<d;p++)y+=f[p];e.update(y,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function gy(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:se("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function xy(i,t,e){let n=new WeakMap,s=new Xe;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let b=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],S=0;d===!0&&(S=1),g===!0&&(S=2),y===!0&&(S=3);let x=a.attributes.position.count*S,_=1;x>t.maxTextureSize&&(_=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let M=new Float32Array(x*_*4*u),w=new oo(M,x,_,u);w.type=Xn,w.needsUpdate=!0;let v=S*4;for(let A=0;A<u;A++){let P=p[A],L=m[A],D=E[A],R=x*_*4*A;for(let C=0;C<P.count;C++){let z=C*v;d===!0&&(s.fromBufferAttribute(P,C),M[R+z+0]=s.x,M[R+z+1]=s.y,M[R+z+2]=s.z,M[R+z+3]=0),g===!0&&(s.fromBufferAttribute(L,C),M[R+z+4]=s.x,M[R+z+5]=s.y,M[R+z+6]=s.z,M[R+z+7]=0),y===!0&&(s.fromBufferAttribute(D,C),M[R+z+8]=s.x,M[R+z+9]=s.y,M[R+z+10]=s.z,M[R+z+11]=D.itemSize===4?s.w:1)}}f={count:u,texture:w,size:new Et(x,_)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let y=0;y<l.length;y++)d+=l[y];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function yy(i,t,e,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,u=l.geometry,f=t.get(l,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var vy={[Gh]:"LINEAR_TONE_MAPPING",[Vh]:"REINHARD_TONE_MAPPING",[Wh]:"CINEON_TONE_MAPPING",[br]:"ACES_FILMIC_TONE_MAPPING",[Yh]:"AGX_TONE_MAPPING",[qh]:"NEUTRAL_TONE_MAPPING",[Xh]:"CUSTOM_TONE_MAPPING"};function _y(i,t,e,n,s,r){let o=new Ln(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new ze;l.setAttribute("position",new xe([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new xe([0,2,0,0,2,0],2));let h=new hl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new B(l,h),f=new Mr(-1,1,1,-1,0,1),d=null,g=null,y=!1,p,m=null,E=[],S=!1;this.setSize=function(x,_){o.setSize(x,_),a!==null&&a.setSize(x,_),c!==null&&c.setSize(x,_);for(let M=0;M<E.length;M++){let w=E[M];w.setSize&&w.setSize(x,_)}},this.setEffects=function(x){E=x,S=E.length>0&&E[0].isRenderPass===!0;let _=o.width,M=o.height;E.length>0&&a===null&&(a=new Ln(_,M,{type:ri,depthBuffer:!1,stencilBuffer:!1}),c=new Ln(_,M,{type:ri,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<E.length;w++){let v=E[w];v.setSize&&v.setSize(_,M)}},this.begin=function(x,_){if(y||x.toneMapping===ii&&E.length===0)return!1;if(m=_,_!==null){let M=_.width,w=_.height;(o.width!==M||o.height!==w)&&this.setSize(M,w)}return S===!1&&x.setRenderTarget(o),p=x.toneMapping,x.toneMapping=ii,!0},this.hasRenderPass=function(){return S},this.end=function(x,_){x.toneMapping=p,y=!0;let M=o,w=a;for(let v=0;v<E.length;v++){let b=E[v];b.enabled!==!1&&(b.render(x,w,M,_),b.needsSwap!==!1&&(M=w,w=w===a?c:a))}if(d!==x.outputColorSpace||g!==x.toneMapping){d=x.outputColorSpace,g=x.toneMapping,h.defines={},ye.getTransfer(d)===Re&&(h.defines.SRGB_TRANSFER="");let v=vy[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,x.setRenderTarget(m),x.render(u,f),m=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var cp=new An,Mf=new Ki(1,1),hp=new oo,fp=new nl,up=new go,Wd=[],Xd=[],Yd=new Float32Array(16),qd=new Float32Array(9),Zd=new Float32Array(4);function Ir(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Wd[s];if(r===void 0&&(r=new Float32Array(s),Wd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function cn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function hn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function _c(i,t){let e=Xd[t];e===void 0&&(e=new Int32Array(t),Xd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function My(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ey(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;i.uniform2fv(this.addr,t),hn(e,t)}}function by(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(cn(e,t))return;i.uniform3fv(this.addr,t),hn(e,t)}}function Sy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;i.uniform4fv(this.addr,t),hn(e,t)}}function wy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),hn(e,t)}else{if(cn(e,n))return;Zd.set(n),i.uniformMatrix2fv(this.addr,!1,Zd),hn(e,n)}}function Ty(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),hn(e,t)}else{if(cn(e,n))return;qd.set(n),i.uniformMatrix3fv(this.addr,!1,qd),hn(e,n)}}function Ay(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),hn(e,t)}else{if(cn(e,n))return;Yd.set(n),i.uniformMatrix4fv(this.addr,!1,Yd),hn(e,n)}}function Ry(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Cy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;i.uniform2iv(this.addr,t),hn(e,t)}}function Iy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;i.uniform3iv(this.addr,t),hn(e,t)}}function Py(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;i.uniform4iv(this.addr,t),hn(e,t)}}function Ly(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Dy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;i.uniform2uiv(this.addr,t),hn(e,t)}}function Ny(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;i.uniform3uiv(this.addr,t),hn(e,t)}}function zy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;i.uniform4uiv(this.addr,t),hn(e,t)}}function Uy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Mf.compareFunction=e.isReversedDepthBuffer()?mc:pc,r=Mf):r=cp,e.setTexture2D(t||r,s)}function Fy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||fp,s)}function Oy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||up,s)}function By(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||hp,s)}function Hy(i){switch(i){case 5126:return My;case 35664:return Ey;case 35665:return by;case 35666:return Sy;case 35674:return wy;case 35675:return Ty;case 35676:return Ay;case 5124:case 35670:return Ry;case 35667:case 35671:return Cy;case 35668:case 35672:return Iy;case 35669:case 35673:return Py;case 5125:return Ly;case 36294:return Dy;case 36295:return Ny;case 36296:return zy;case 35678:case 36198:case 36298:case 36306:case 35682:return Uy;case 35679:case 36299:case 36307:return Fy;case 35680:case 36300:case 36308:case 36293:return Oy;case 36289:case 36303:case 36311:case 36292:return By}}function ky(i,t){i.uniform1fv(this.addr,t)}function Gy(i,t){let e=Ir(t,this.size,2);i.uniform2fv(this.addr,e)}function Vy(i,t){let e=Ir(t,this.size,3);i.uniform3fv(this.addr,e)}function Wy(i,t){let e=Ir(t,this.size,4);i.uniform4fv(this.addr,e)}function Xy(i,t){let e=Ir(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Yy(i,t){let e=Ir(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function qy(i,t){let e=Ir(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Zy(i,t){i.uniform1iv(this.addr,t)}function $y(i,t){i.uniform2iv(this.addr,t)}function Ky(i,t){i.uniform3iv(this.addr,t)}function Jy(i,t){i.uniform4iv(this.addr,t)}function jy(i,t){i.uniform1uiv(this.addr,t)}function Qy(i,t){i.uniform2uiv(this.addr,t)}function tv(i,t){i.uniform3uiv(this.addr,t)}function ev(i,t){i.uniform4uiv(this.addr,t)}function nv(i,t,e){let n=this.cache,s=t.length,r=_c(e,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Mf:o=cp;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function iv(i,t,e){let n=this.cache,s=t.length,r=_c(e,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||fp,r[o])}function sv(i,t,e){let n=this.cache,s=t.length,r=_c(e,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||up,r[o])}function rv(i,t,e){let n=this.cache,s=t.length,r=_c(e,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||hp,r[o])}function ov(i){switch(i){case 5126:return ky;case 35664:return Gy;case 35665:return Vy;case 35666:return Wy;case 35674:return Xy;case 35675:return Yy;case 35676:return qy;case 5124:case 35670:return Zy;case 35667:case 35671:return $y;case 35668:case 35672:return Ky;case 35669:case 35673:return Jy;case 5125:return jy;case 36294:return Qy;case 36295:return tv;case 36296:return ev;case 35678:case 36198:case 36298:case 36306:case 35682:return nv;case 35679:case 36299:case 36307:return iv;case 35680:case 36300:case 36308:case 36293:return sv;case 36289:case 36303:case 36311:case 36292:return rv}}var Ef=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Hy(e.type)}},bf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ov(e.type)}},Sf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},vf=/(\w+)(\])?(\[|\.)?/g;function $d(i,t){i.seq.push(t),i.map[t.id]=t}function av(i,t,e){let n=i.name,s=n.length;for(vf.lastIndex=0;;){let r=vf.exec(n),o=vf.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){$d(e,l===void 0?new Ef(a,i,t):new bf(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Sf(a),$d(e,u)),e=u}}}var Cr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);av(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Kd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var lv=37297,cv=0;function hv(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Jd=new ae;function fv(i){ye._getMatrix(Jd,ye.workingColorSpace,i);let t=`mat3( ${Jd.elements.map(e=>e.toFixed(4))} )`;switch(ye.getTransfer(i)){case io:return[t,"LinearTransferOETF"];case Re:return[t,"sRGBTransferOETF"];default:return ee("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function jd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+hv(i.getShaderSource(t),a)}else return r}function uv(i,t){let e=fv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var dv={[Gh]:"Linear",[Vh]:"Reinhard",[Wh]:"Cineon",[br]:"ACESFilmic",[Yh]:"AgX",[qh]:"Neutral",[Xh]:"Custom"};function pv(i,t){let e=dv[t];return e===void 0?(ee("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var xc=new O;function mv(){ye.getLuminanceCoefficients(xc);let i=xc.x.toFixed(4),t=xc.y.toFixed(4),e=xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zo).join(`
`)}function xv(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function yv(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Zo(i){return i!==""}function Qd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var vv=/^[ \t]*#include +<([\w\d./]+)>/gm;function wf(i){return i.replace(vv,Mv)}var _v=new Map;function Mv(i,t){let e=pe[t];if(e===void 0){let n=_v.get(t);if(n!==void 0)e=pe[n],ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return wf(e)}var Ev=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ep(i){return i.replace(Ev,bv)}function bv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function np(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Sv={[zo]:"SHADOWMAP_TYPE_PCF",[Er]:"SHADOWMAP_TYPE_VSM"};function wv(i){return Sv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Tv={[rs]:"ENVMAP_TYPE_CUBE",[Ts]:"ENVMAP_TYPE_CUBE",[Uo]:"ENVMAP_TYPE_CUBE_UV"};function Av(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Tv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Rv={[Ts]:"ENVMAP_MODE_REFRACTION"};function Cv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Rv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Iv={[Al]:"ENVMAP_BLENDING_MULTIPLY",[md]:"ENVMAP_BLENDING_MIX",[gd]:"ENVMAP_BLENDING_ADD"};function Pv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Iv[i.combine]||"ENVMAP_BLENDING_NONE"}function Lv(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Dv(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=wv(e),l=Av(e),h=Cv(e),u=Pv(e),f=Lv(e),d=gv(e),g=xv(r),y=s.createProgram(),p,m,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Zo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Zo).join(`
`),m.length>0&&(m+=`
`)):(p=[np(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zo).join(`
`),m=[np(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?pe.tonemapping_pars_fragment:"",e.toneMapping!==ii?pv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,uv("linearToOutputTexel",e.outputColorSpace),mv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zo).join(`
`)),o=wf(o),o=Qd(o,e),o=tp(o,e),a=wf(a),a=Qd(a,e),a=tp(a,e),o=ep(o),a=ep(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===nf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=E+p+o,x=E+m+a,_=Kd(s,s.VERTEX_SHADER,S),M=Kd(s,s.FRAGMENT_SHADER,x);s.attachShader(y,_),s.attachShader(y,M),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function w(P){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(y)||"",D=s.getShaderInfoLog(_)||"",R=s.getShaderInfoLog(M)||"",C=L.trim(),z=D.trim(),F=R.trim(),J=!0,V=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,_,M);else{let K=jd(s,_,"vertex"),Z=jd(s,M,"fragment");se("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+C+`
`+K+`
`+Z)}else C!==""?ee("WebGLProgram: Program Info Log:",C):(z===""||F==="")&&(V=!1);V&&(P.diagnostics={runnable:J,programLog:C,vertexShader:{log:z,prefix:p},fragmentShader:{log:F,prefix:m}})}s.deleteShader(_),s.deleteShader(M),v=new Cr(s,y),b=yv(s,y)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(y,lv)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cv++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=_,this.fragmentShader=M,this}var Nv=0,Tf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Af(t),e.set(t,n)),n}},Af=class{constructor(t){this.id=Nv++,this.code=t,this.usedTimes=0}};function zv(i){return i===ls||i===Go||i===Vo}function Uv(i,t,e,n,s,r){let o=new ao,a=new Tf,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function y(v,b,A,P,L,D){let R=P.fog,C=L.geometry,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,F=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,J=t.get(v.envMap||z,F),V=J&&J.mapping===Uo?J.image.height:null,K=d[v.type];v.precision!==null&&(f=n.getMaxPrecision(v.precision),f!==v.precision&&ee("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let Z=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,ot=Z!==void 0?Z.length:0,gt=0;C.morphAttributes.position!==void 0&&(gt=1),C.morphAttributes.normal!==void 0&&(gt=2),C.morphAttributes.color!==void 0&&(gt=3);let Yt,At,Gt,U;if(K){let Ge=_i[K];Yt=Ge.vertexShader,At=Ge.fragmentShader}else{Yt=v.vertexShader,At=v.fragmentShader;let Ge=a.getVertexShaderStage(v),Te=a.getFragmentShaderStage(v);a.update(v,Ge,Te),Gt=Ge.id,U=Te.id}let k=i.getRenderTarget(),rt=i.state.buffers.depth.getReversed(),Mt=L.isInstancedMesh===!0,ut=L.isBatchedMesh===!0,Y=!!v.map,pt=!!v.matcap,$=!!J,et=!!v.aoMap,ct=!!v.lightMap,lt=!!v.bumpMap&&v.wireframe===!1,yt=!!v.normalMap,Bt=!!v.displacementMap,Vt=!!v.emissiveMap,Qt=!!v.metalnessMap,ie=!!v.roughnessMap,H=v.anisotropy>0,_e=v.clearcoat>0,fe=v.dispersion>0,N=v.retroreflectivity>0,T=v.iridescence>0,q=v.sheen>0,tt=v.transmission>0,it=H&&!!v.anisotropyMap,bt=_e&&!!v.clearcoatMap,St=_e&&!!v.clearcoatNormalMap,st=_e&&!!v.clearcoatRoughnessMap,ht=T&&!!v.iridescenceMap,Rt=T&&!!v.iridescenceThicknessMap,Kt=q&&!!v.sheenColorMap,Lt=q&&!!v.sheenRoughnessMap,Ct=!!v.specularMap,Jt=!!v.specularColorMap,te=!!v.specularIntensityMap,le=tt&&!!v.transmissionMap,W=tt&&!!v.thicknessMap,It=!!v.gradientMap,at=!!v.alphaMap,Pt=v.alphaTest>0,Ft=!!v.alphaHash,mt=!!v.extensions,jt=ii;v.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(jt=i.toneMapping);let Zt={shaderID:K,shaderType:v.type,shaderName:v.name,vertexShader:Yt,fragmentShader:At,defines:v.defines,customVertexShaderID:Gt,customFragmentShaderID:U,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:ut,batchingColor:ut&&L._colorsTexture!==null,instancing:Mt,instancingColor:Mt&&L.instanceColor!==null,instancingMorph:Mt&&L.morphTexture!==null,outputColorSpace:k===null?i.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:ye.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Y,matcap:pt,envMap:$,envMapMode:$&&J.mapping,envMapCubeUVHeight:V,aoMap:et,lightMap:ct,bumpMap:lt,normalMap:yt,displacementMap:Bt,emissiveMap:Vt,normalMapObjectSpace:yt&&v.normalMapType===vd,normalMapTangentSpace:yt&&v.normalMapType===Wo,packedNormalMap:yt&&v.normalMapType===Wo&&zv(v.normalMap.format),metalnessMap:Qt,roughnessMap:ie,anisotropy:H,anisotropyMap:it,clearcoat:_e,clearcoatMap:bt,clearcoatNormalMap:St,clearcoatRoughnessMap:st,dispersion:fe,retroreflection:N,iridescence:T,iridescenceMap:ht,iridescenceThicknessMap:Rt,sheen:q,sheenColorMap:Kt,sheenRoughnessMap:Lt,specularMap:Ct,specularColorMap:Jt,specularIntensityMap:te,transmission:tt,transmissionMap:le,thicknessMap:W,gradientMap:It,opaque:v.transparent===!1&&v.blending===ss&&v.alphaToCoverage===!1,alphaMap:at,alphaTest:Pt,alphaHash:Ft,combine:v.combine,mapUv:Y&&g(v.map.channel),aoMapUv:et&&g(v.aoMap.channel),lightMapUv:ct&&g(v.lightMap.channel),bumpMapUv:lt&&g(v.bumpMap.channel),normalMapUv:yt&&g(v.normalMap.channel),displacementMapUv:Bt&&g(v.displacementMap.channel),emissiveMapUv:Vt&&g(v.emissiveMap.channel),metalnessMapUv:Qt&&g(v.metalnessMap.channel),roughnessMapUv:ie&&g(v.roughnessMap.channel),anisotropyMapUv:it&&g(v.anisotropyMap.channel),clearcoatMapUv:bt&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:St&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&g(v.sheenRoughnessMap.channel),specularMapUv:Ct&&g(v.specularMap.channel),specularColorMapUv:Jt&&g(v.specularColorMap.channel),specularIntensityMapUv:te&&g(v.specularIntensityMap.channel),transmissionMapUv:le&&g(v.transmissionMap.channel),thicknessMapUv:W&&g(v.thicknessMap.channel),alphaMapUv:at&&g(v.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(yt||H),vertexNormals:!!C.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!C.attributes.uv&&(Y||at),fog:!!R,useFog:v.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||C.attributes.normal===void 0&&yt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:rt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:gt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:jt,decodeVideoTexture:Y&&v.map.isVideoTexture===!0&&ye.getTransfer(v.map.colorSpace)===Re,decodeVideoTextureEmissive:Vt&&v.emissiveMap.isVideoTexture===!0&&ye.getTransfer(v.emissiveMap.colorSpace)===Re,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===$e,flipSided:v.side===ln,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:mt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&v.extensions.multiDraw===!0||ut)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Zt.vertexUv1s=c.has(1),Zt.vertexUv2s=c.has(2),Zt.vertexUv3s=c.has(3),c.clear(),Zt}function p(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let A in v.defines)b.push(A),b.push(v.defines[A]);return v.isRawShaderMaterial===!1&&(m(b,v),E(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function m(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numSunLights),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numSunLightShadows),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function E(v,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function S(v){let b=d[v.type],A;if(b){let P=_i[b];A=Fd.clone(P.uniforms)}else A=v.uniforms;return A}function x(v,b){let A=h.get(b);return A!==void 0?++A.usedTimes:(A=new Dv(i,b,v,s),l.push(A),h.set(b,A)),A}function _(v){if(--v.usedTimes===0){let b=l.indexOf(v);l[b]=l[l.length-1],l.pop(),h.delete(v.cacheKey),v.destroy()}}function M(v){a.remove(v)}function w(){a.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:S,acquireProgram:x,releaseProgram:_,releaseShaderCache:M,programs:l,dispose:w}}function Fv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Ov(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function ip(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function sp(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,g,y,p,m){let E=i[t];return E===void 0?(E={id:f.id,object:f,geometry:d,material:g,materialVariant:o(f),groupOrder:y,renderOrder:f.renderOrder,z:p,group:m},i[t]=E):(E.id=f.id,E.object=f,E.geometry=d,E.material=g,E.materialVariant=o(f),E.groupOrder=y,E.renderOrder=f.renderOrder,E.z=p,E.group=m),t++,E}function c(f,d,g,y,p,m,E){E.reversedDepth===!0&&(p=-p);let S=a(f,d,g,y,p,m);g.transmission>0?n.push(S):g.transparent===!0?s.push(S):e.push(S)}function l(f,d,g,y,p,m){let E=a(f,d,g,y,p,m);g.transmission>0?n.unshift(E):g.transparent===!0?s.unshift(E):e.unshift(E)}function h(f,d){e.length>1&&e.sort(f||Ov),n.length>1&&n.sort(d||ip),s.length>1&&s.sort(d||ip)}function u(){for(let f=t,d=i.length;f<d;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function Bv(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new sp,i.set(n,[o])):s>=r.length?(o=new sp,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Hv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new kt};break;case"SpotLight":e={position:new O,direction:new O,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function kv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Gv=0;function Vv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Wv(i){let t=new Hv,e=kv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new O);let s=new O,r=new Se,o=new Se;function a(l){let h=0,u=0,f=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let d=0,g=0,y=0,p=0,m=0,E=0,S=0,x=0,_=0,M=0,w=0,v=0,b=0,A=0;l.sort(Vv);for(let L=0,D=l.length;L<D;L++){let R=l[L],C=R.color,z=R.intensity,F=R.distance,J=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===ls?J=R.shadow.map.texture:J=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=C.r*z,u+=C.g*z,f+=C.b*z;else if(R.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(R.sh.coefficients[V],z);A++}else if(R.isSunLight){let V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let K=R.shadow,Z=e.get(R);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[g]=Z,n.sunShadowMap[g]=J;let ot=K.getViewportCount();for(let gt=0;gt<ot;gt++)n.sunShadowMatrix[y+gt]=K.getMatrix(gt),n.sunShadowCascade[y+gt]=K._cascadeData[gt];y+=ot,g++}n.sun[d]=V,d++}else if(R.isDirectionalLight){let V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let K=R.shadow,Z=e.get(R);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,n.directionalShadow[p]=Z,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=R.shadow.matrix,_++}n.directional[p]=V,p++}else if(R.isSpotLight){let V=t.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(C).multiplyScalar(z),V.distance=F,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,n.spot[E]=V;let K=R.shadow;if(R.map&&(n.spotLightMap[v]=R.map,v++,K.updateMatrices(R),R.castShadow&&b++),n.spotLightMatrix[E]=K.matrix,R.castShadow){let Z=e.get(R);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,n.spotShadow[E]=Z,n.spotShadowMap[E]=J,w++}E++}else if(R.isRectAreaLight){let V=t.get(R);V.color.copy(C).multiplyScalar(z),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),n.rectArea[S]=V,S++}else if(R.isPointLight){let V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){let K=R.shadow,Z=e.get(R);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,Z.shadowCameraNear=K.camera.near,Z.shadowCameraFar=K.camera.far,n.pointShadow[m]=Z,n.pointShadowMap[m]=J,n.pointShadowMatrix[m]=R.shadow.matrix,M++}n.point[m]=V,m++}else if(R.isHemisphereLight){let V=t.get(R);V.skyColor.copy(R.color).multiplyScalar(z),V.groundColor.copy(R.groundColor).multiplyScalar(z),n.hemi[x]=V,x++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Dt.LTC_FLOAT_1,n.rectAreaLTC2=Dt.LTC_FLOAT_2):(n.rectAreaLTC1=Dt.LTC_HALF_1,n.rectAreaLTC2=Dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let P=n.hash;(P.sunLength!==d||P.directionalLength!==p||P.pointLength!==m||P.spotLength!==E||P.rectAreaLength!==S||P.hemiLength!==x||P.numSunShadows!==g||P.numDirectionalShadows!==_||P.numPointShadows!==M||P.numSpotShadows!==w||P.numSpotMaps!==v||P.numLightProbes!==A)&&(n.sun.length=d,n.directional.length=p,n.spot.length=E,n.rectArea.length=S,n.point.length=m,n.hemi.length=x,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.directionalShadowMatrix.length=_,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+v-b,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=A,P.sunLength=d,P.directionalLength=p,P.pointLength=m,P.spotLength=E,P.rectAreaLength=S,P.hemiLength=x,P.numSunShadows=g,P.numDirectionalShadows=_,P.numPointShadows=M,P.numSpotShadows=w,P.numSpotMaps=v,P.numLightProbes=A,n.version=Gv++)}function c(l,h){let u=0,f=0,d=0,g=0,y=0,p=0,m=h.matrixWorldInverse;for(let E=0,S=l.length;E<S;E++){let x=l[E];if(x.isSunLight){let _=n.sun[u];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),u++}else if(x.isDirectionalLight){let _=n.directional[f];_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(x.isSpotLight){let _=n.spot[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),g++}else if(x.isRectAreaLight){let _=n.rectArea[y];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),y++}else if(x.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){let _=n.hemi[p];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),p++}}}return{setup:a,setupView:c,state:n}}function rp(i){let t=new Wv(i),e=[],n=[],s=[];function r(f){u.camera=f,e.length=0,n.length=0,s.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function c(f){s.push(f)}function l(){t.setup(e)}function h(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Xv(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new rp(i),t.set(s,[a])):r>=o.length?(a=new rp(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Yv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qv=`uniform sampler2D shadow_pass;
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
}`,Zv=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],$v=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],op=new Se,qo=new O,_f=new O;function Kv(i,t,e){let n=new mr,s=new Et,r=new Et,o=new Xe,a=new fl,c=new ul,l={},h=e.maxTextureSize,u={[is]:ln,[ln]:is,[$e]:$e},f=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:Yv,fragmentShader:qv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new ze;g.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new B(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zo;let m=this.type;this.render=function(M,w,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;this.type===Tl&&(ee("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=zo);let b=i.getRenderTarget(),A=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),L=i.state;L.setBlending(yi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let D=m!==this.type;D&&w.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(C=>C.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,C=M.length;R<C;R++){let z=M[R],F=z.shadow;if(F===void 0){ee("WebGLShadowMap:",z,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let J=F.getFrameExtents();s.multiply(J),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,F.mapSize.y=r.y));let V=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=V,F.map===null||D===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Er){if(z.isPointLight){ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Ln(s.x,s.y,{format:ls,type:ri,minFilter:mn,magFilter:mn,generateMipmaps:!1}),F.map.texture.name=z.name+".shadowMap",F.map.depthTexture=new Ki(s.x,s.y,Xn),F.map.depthTexture.name=z.name+".shadowMapDepth",F.map.depthTexture.format=mi,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=dn,F.map.depthTexture.magFilter=dn}else z.isPointLight?(F.map=new yc(s.x),F.map.depthTexture=new il(s.x,si)):(F.map=new Ln(s.x,s.y),F.map.depthTexture=new Ki(s.x,s.y,si)),F.map.depthTexture.name=z.name+".shadowMap",F.map.depthTexture.format=mi,this.type===zo?(F.map.depthTexture.compareFunction=V?mc:pc,F.map.depthTexture.minFilter=mn,F.map.depthTexture.magFilter=mn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=dn,F.map.depthTexture.magFilter=dn);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y)&&F.map.setSize(s.x,s.y);let K=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();z.isPointLight!==!0&&F.updateMatrices(z,v);for(let Z=0;Z<K;Z++){let ot=F.getCamera(Z);if(z.isPointLight){let gt=F.camera,Yt=F.matrix,At=z.distance||gt.far;At!==gt.far&&(gt.far=At,gt.updateProjectionMatrix()),qo.setFromMatrixPosition(z.matrixWorld),gt.position.copy(qo),_f.copy(gt.position),_f.add(Zv[Z]),gt.up.copy($v[Z]),gt.lookAt(_f),gt.updateMatrixWorld(),Yt.makeTranslation(-qo.x,-qo.y,-qo.z),op.multiplyMatrices(gt.projectionMatrix,gt.matrixWorldInverse),F._frustum.setFromProjectionMatrix(op,gt.coordinateSystem,gt.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,Z),i.clear();else{Z===0&&(i.setRenderTarget(F.map),i.clear());let gt=F.getViewport(Z);o.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),L.viewport(o)}n=F.getFrustum(Z),x(w,v,ot,z,this.type)}F.isPointLightShadow!==!0&&this.type===Er&&E(F,v),F.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(b,A,P)};function E(M,w){let v=t.update(y);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null?M.mapPass=new Ln(s.x,s.y,{format:ls,type:ri}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),f.uniforms.shadow_pass.value=M.map.depthTexture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(w,null,v,f,y,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(w,null,v,d,y,null)}function S(M,w,v,b){let A=null,P=v.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)A=P;else if(A=v.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let L=A.uuid,D=w.uuid,R=l[L];R===void 0&&(R={},l[L]=R);let C=R[D];C===void 0&&(C=A.clone(),R[D]=C,w.addEventListener("dispose",_)),A=C}if(A.visible=w.visible,A.wireframe=w.wireframe,b===Er?A.side=w.shadowSide!==null?w.shadowSide:w.side:A.side=w.shadowSide!==null?w.shadowSide:u[w.side],A.alphaMap=w.alphaMap,A.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,A.map=w.map,A.clipShadows=w.clipShadows,A.clippingPlanes=w.clippingPlanes,A.clipIntersection=w.clipIntersection,A.displacementMap=w.displacementMap,A.displacementScale=w.displacementScale,A.displacementBias=w.displacementBias,A.wireframeLinewidth=w.wireframeLinewidth,A.linewidth=w.linewidth,v.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let L=i.properties.get(A);L.light=v}return A}function x(M,w,v,b,A){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&A===Er)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,M.matrixWorld);let D=t.update(M),R=M.material;if(Array.isArray(R)){let C=D.groups;for(let z=0,F=C.length;z<F;z++){let J=C[z],V=R[J.materialIndex];if(V&&V.visible){let K=S(M,V,b,A);M.onBeforeShadow(i,M,w,v,D,K,J),i.renderBufferDirect(v,null,D,K,M,J),M.onAfterShadow(i,M,w,v,D,K,J)}}}else if(R.visible){let C=S(M,R,b,A);M.onBeforeShadow(i,M,w,v,D,C,null),i.renderBufferDirect(v,null,D,C,M,null),M.onAfterShadow(i,M,w,v,D,C,null)}}let L=M.children;for(let D=0,R=L.length;D<R;D++)x(L[D],w,v,b,A)}function _(M){M.target.removeEventListener("dispose",_);for(let v in l){let b=l[v],A=M.target.uuid;A in b&&(b[A].dispose(),delete b[A])}}}function Jv(i,t){function e(){let W=!1,It=new Xe,at=null,Pt=new Xe(0,0,0,0);return{setMask:function(Ft){at!==Ft&&!W&&(i.colorMask(Ft,Ft,Ft,Ft),at=Ft)},setLocked:function(Ft){W=Ft},setClear:function(Ft,mt,jt,Zt,Ge){Ge===!0&&(Ft*=Zt,mt*=Zt,jt*=Zt),It.set(Ft,mt,jt,Zt),Pt.equals(It)===!1&&(i.clearColor(Ft,mt,jt,Zt),Pt.copy(It))},reset:function(){W=!1,at=null,Pt.set(-1,0,0,0)}}}function n(){let W=!1,It=!1,at=null,Pt=null,Ft=null;return{setReversed:function(mt){if(It!==mt){let jt=t.get("EXT_clip_control");mt?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT),It=mt;let Zt=Ft;Ft=null,this.setClear(Zt)}},getReversed:function(){return It},setTest:function(mt){mt?k(i.DEPTH_TEST):rt(i.DEPTH_TEST)},setMask:function(mt){at!==mt&&!W&&(i.depthMask(mt),at=mt)},setFunc:function(mt){if(It&&(mt=Id[mt]),Pt!==mt){switch(mt){case Xa:i.depthFunc(i.NEVER);break;case Ya:i.depthFunc(i.ALWAYS);break;case qa:i.depthFunc(i.LESS);break;case sr:i.depthFunc(i.LEQUAL);break;case Za:i.depthFunc(i.EQUAL);break;case $a:i.depthFunc(i.GEQUAL);break;case Ka:i.depthFunc(i.GREATER);break;case Ja:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pt=mt}},setLocked:function(mt){W=mt},setClear:function(mt){Ft!==mt&&(Ft=mt,It&&(mt=1-mt),i.clearDepth(mt))},reset:function(){W=!1,at=null,Pt=null,Ft=null,It=!1}}}function s(){let W=!1,It=null,at=null,Pt=null,Ft=null,mt=null,jt=null,Zt=null,Ge=null;return{setTest:function(Te){W||(Te?k(i.STENCIL_TEST):rt(i.STENCIL_TEST))},setMask:function(Te){It!==Te&&!W&&(i.stencilMask(Te),It=Te)},setFunc:function(Te,$n,hi){(at!==Te||Pt!==$n||Ft!==hi)&&(i.stencilFunc(Te,$n,hi),at=Te,Pt=$n,Ft=hi)},setOp:function(Te,$n,hi){(mt!==Te||jt!==$n||Zt!==hi)&&(i.stencilOp(Te,$n,hi),mt=Te,jt=$n,Zt=hi)},setLocked:function(Te){W=Te},setClear:function(Te){Ge!==Te&&(i.clearStencil(Te),Ge=Te)},reset:function(){W=!1,It=null,at=null,Pt=null,Ft=null,mt=null,jt=null,Zt=null,Ge=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},f={},d=new WeakMap,g=[],y=null,p=!1,m=null,E=null,S=null,x=null,_=null,M=null,w=null,v=new kt(0,0,0),b=0,A=!1,P=null,L=null,D=null,R=null,C=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,J=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(V)[1]),F=J>=1):V.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),F=J>=2);let K=null,Z={},ot=i.getParameter(i.SCISSOR_BOX),gt=i.getParameter(i.VIEWPORT),Yt=new Xe().fromArray(ot),At=new Xe().fromArray(gt);function Gt(W,It,at,Pt){let Ft=new Uint8Array(4),mt=i.createTexture();i.bindTexture(W,mt),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let jt=0;jt<at;jt++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(It,0,i.RGBA,1,1,Pt,0,i.RGBA,i.UNSIGNED_BYTE,Ft):i.texImage2D(It+jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ft);return mt}let U={};U[i.TEXTURE_2D]=Gt(i.TEXTURE_2D,i.TEXTURE_2D,1),U[i.TEXTURE_CUBE_MAP]=Gt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),U[i.TEXTURE_2D_ARRAY]=Gt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),U[i.TEXTURE_3D]=Gt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),k(i.DEPTH_TEST),o.setFunc(sr),lt(!1),yt(Fh),k(i.CULL_FACE),et(yi);function k(W){h[W]!==!0&&(i.enable(W),h[W]=!0)}function rt(W){h[W]!==!1&&(i.disable(W),h[W]=!1)}function Mt(W,It){return f[W]!==It?(i.bindFramebuffer(W,It),f[W]=It,W===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=It),W===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=It),!0):!1}function ut(W,It){let at=g,Pt=!1;if(W){at=d.get(It),at===void 0&&(at=[],d.set(It,at));let Ft=W.textures;if(at.length!==Ft.length||at[0]!==i.COLOR_ATTACHMENT0){for(let mt=0,jt=Ft.length;mt<jt;mt++)at[mt]=i.COLOR_ATTACHMENT0+mt;at.length=Ft.length,Pt=!0}}else at[0]!==i.BACK&&(at[0]=i.BACK,Pt=!0);Pt&&i.drawBuffers(at)}function Y(W){return y!==W?(i.useProgram(W),y=W,!0):!1}let pt={[ws]:i.FUNC_ADD,[ju]:i.FUNC_SUBTRACT,[Qu]:i.FUNC_REVERSE_SUBTRACT};pt[td]=i.MIN,pt[ed]=i.MAX;let $={[nd]:i.ZERO,[id]:i.ONE,[sd]:i.SRC_COLOR,[Hh]:i.SRC_ALPHA,[hd]:i.SRC_ALPHA_SATURATE,[ld]:i.DST_COLOR,[od]:i.DST_ALPHA,[rd]:i.ONE_MINUS_SRC_COLOR,[kh]:i.ONE_MINUS_SRC_ALPHA,[cd]:i.ONE_MINUS_DST_COLOR,[ad]:i.ONE_MINUS_DST_ALPHA,[fd]:i.CONSTANT_COLOR,[ud]:i.ONE_MINUS_CONSTANT_COLOR,[dd]:i.CONSTANT_ALPHA,[pd]:i.ONE_MINUS_CONSTANT_ALPHA};function et(W,It,at,Pt,Ft,mt,jt,Zt,Ge,Te){if(W===yi){p===!0&&(rt(i.BLEND),p=!1);return}if(p===!1&&(k(i.BLEND),p=!0),W!==Ju){if(W!==m||Te!==A){if((E!==ws||_!==ws)&&(i.blendEquation(i.FUNC_ADD),E=ws,_=ws),Te)switch(W){case ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Di:i.blendFunc(i.ONE,i.ONE);break;case Oh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:se("WebGLState: Invalid blending: ",W);break}else switch(W){case ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Oh:se("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bh:se("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:se("WebGLState: Invalid blending: ",W);break}S=null,x=null,M=null,w=null,v.set(0,0,0),b=0,m=W,A=Te}return}Ft=Ft||It,mt=mt||at,jt=jt||Pt,(It!==E||Ft!==_)&&(i.blendEquationSeparate(pt[It],pt[Ft]),E=It,_=Ft),(at!==S||Pt!==x||mt!==M||jt!==w)&&(i.blendFuncSeparate($[at],$[Pt],$[mt],$[jt]),S=at,x=Pt,M=mt,w=jt),(Zt.equals(v)===!1||Ge!==b)&&(i.blendColor(Zt.r,Zt.g,Zt.b,Ge),v.copy(Zt),b=Ge),m=W,A=!1}function ct(W,It){W.side===$e?rt(i.CULL_FACE):k(i.CULL_FACE);let at=W.side===ln;It&&(at=!at),lt(at),W.blending===ss&&W.transparent===!1?et(yi):et(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let Pt=W.stencilWrite;a.setTest(Pt),Pt&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Vt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?k(i.SAMPLE_ALPHA_TO_COVERAGE):rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function lt(W){P!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),P=W)}function yt(W){W!==$u?(k(i.CULL_FACE),W!==L&&(W===Fh?i.cullFace(i.BACK):W===Ku?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):rt(i.CULL_FACE),L=W}function Bt(W){W!==D&&(F&&i.lineWidth(W),D=W)}function Vt(W,It,at){W?(k(i.POLYGON_OFFSET_FILL),(R!==It||C!==at)&&(R=It,C=at,o.getReversed()&&(It=-It),i.polygonOffset(It,at))):rt(i.POLYGON_OFFSET_FILL)}function Qt(W){W?k(i.SCISSOR_TEST):rt(i.SCISSOR_TEST)}function ie(W){W===void 0&&(W=i.TEXTURE0+z-1),K!==W&&(i.activeTexture(W),K=W)}function H(W,It,at){at===void 0&&(K===null?at=i.TEXTURE0+z-1:at=K);let Pt=Z[at];Pt===void 0&&(Pt={type:void 0,texture:void 0},Z[at]=Pt),(Pt.type!==W||Pt.texture!==It)&&(K!==at&&(i.activeTexture(at),K=at),i.bindTexture(W,It||U[W]),Pt.type=W,Pt.texture=It)}function _e(){let W=Z[K];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function fe(){try{i.compressedTexImage2D(...arguments)}catch(W){se("WebGLState:",W)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(W){se("WebGLState:",W)}}function T(){try{i.texSubImage2D(...arguments)}catch(W){se("WebGLState:",W)}}function q(){try{i.texSubImage3D(...arguments)}catch(W){se("WebGLState:",W)}}function tt(){try{i.compressedTexSubImage2D(...arguments)}catch(W){se("WebGLState:",W)}}function it(){try{i.compressedTexSubImage3D(...arguments)}catch(W){se("WebGLState:",W)}}function bt(){try{i.texStorage2D(...arguments)}catch(W){se("WebGLState:",W)}}function St(){try{i.texStorage3D(...arguments)}catch(W){se("WebGLState:",W)}}function st(){try{i.texImage2D(...arguments)}catch(W){se("WebGLState:",W)}}function ht(){try{i.texImage3D(...arguments)}catch(W){se("WebGLState:",W)}}function Rt(W){return u[W]!==void 0?u[W]:i.getParameter(W)}function Kt(W,It){u[W]!==It&&(i.pixelStorei(W,It),u[W]=It)}function Lt(W){Yt.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),Yt.copy(W))}function Ct(W){At.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),At.copy(W))}function Jt(W,It){let at=l.get(It);at===void 0&&(at=new WeakMap,l.set(It,at));let Pt=at.get(W);Pt===void 0&&(Pt=i.getUniformBlockIndex(It,W.name),at.set(W,Pt))}function te(W,It){let Pt=l.get(It).get(W);c.get(It)!==Pt&&(i.uniformBlockBinding(It,Pt,W.__bindingPointIndex),c.set(It,Pt))}function le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},K=null,Z={},f={},d=new WeakMap,g=[],y=null,p=!1,m=null,E=null,S=null,x=null,_=null,M=null,w=null,v=new kt(0,0,0),b=0,A=!1,P=null,L=null,D=null,R=null,C=null,Yt.set(0,0,i.canvas.width,i.canvas.height),At.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:k,disable:rt,bindFramebuffer:Mt,drawBuffers:ut,useProgram:Y,setBlending:et,setMaterial:ct,setFlipSided:lt,setCullFace:yt,setLineWidth:Bt,setPolygonOffset:Vt,setScissorTest:Qt,activeTexture:ie,bindTexture:H,unbindTexture:_e,compressedTexImage2D:fe,compressedTexImage3D:N,texImage2D:st,texImage3D:ht,pixelStorei:Kt,getParameter:Rt,updateUBOMapping:Jt,uniformBlockBinding:te,texStorage2D:bt,texStorage3D:St,texSubImage2D:T,texSubImage3D:q,compressedTexSubImage2D:tt,compressedTexSubImage3D:it,scissor:Lt,viewport:Ct,reset:le}}function jv(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Et,h=new WeakMap,u=new Set,f,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(N,T){return g?new OffscreenCanvas(N,T):so("canvas")}function p(N,T,q){let tt=1,it=fe(N);if((it.width>q||it.height>q)&&(tt=q/Math.max(it.width,it.height)),tt<1)if(typeof HTMLImageElement!="undefined"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&N instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&N instanceof ImageBitmap||typeof VideoFrame!="undefined"&&N instanceof VideoFrame){let bt=Math.floor(tt*it.width),St=Math.floor(tt*it.height);f===void 0&&(f=y(bt,St));let st=T?y(bt,St):f;return st.width=bt,st.height=St,st.getContext("2d").drawImage(N,0,0,bt,St),ee("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+bt+"x"+St+")."),st}else return"data"in N&&ee("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),N;return N}function m(N){return N.generateMipmaps}function E(N){i.generateMipmap(N)}function S(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(N,T,q,tt,it,bt=!1){if(N!==null){if(i[N]!==void 0)return i[N];ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let St;tt&&(St=t.get("EXT_texture_norm16"),St||ee("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let st=T;if(T===i.RED&&(q===i.FLOAT&&(st=i.R32F),q===i.HALF_FLOAT&&(st=i.R16F),q===i.UNSIGNED_BYTE&&(st=i.R8),q===i.UNSIGNED_SHORT&&St&&(st=St.R16_EXT),q===i.SHORT&&St&&(st=St.R16_SNORM_EXT)),T===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(st=i.R8UI),q===i.UNSIGNED_SHORT&&(st=i.R16UI),q===i.UNSIGNED_INT&&(st=i.R32UI),q===i.BYTE&&(st=i.R8I),q===i.SHORT&&(st=i.R16I),q===i.INT&&(st=i.R32I)),T===i.RG&&(q===i.FLOAT&&(st=i.RG32F),q===i.HALF_FLOAT&&(st=i.RG16F),q===i.UNSIGNED_BYTE&&(st=i.RG8),q===i.UNSIGNED_SHORT&&St&&(st=St.RG16_EXT),q===i.SHORT&&St&&(st=St.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(st=i.RG8UI),q===i.UNSIGNED_SHORT&&(st=i.RG16UI),q===i.UNSIGNED_INT&&(st=i.RG32UI),q===i.BYTE&&(st=i.RG8I),q===i.SHORT&&(st=i.RG16I),q===i.INT&&(st=i.RG32I)),T===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(st=i.RGB8UI),q===i.UNSIGNED_SHORT&&(st=i.RGB16UI),q===i.UNSIGNED_INT&&(st=i.RGB32UI),q===i.BYTE&&(st=i.RGB8I),q===i.SHORT&&(st=i.RGB16I),q===i.INT&&(st=i.RGB32I)),T===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(st=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(st=i.RGBA16UI),q===i.UNSIGNED_INT&&(st=i.RGBA32UI),q===i.BYTE&&(st=i.RGBA8I),q===i.SHORT&&(st=i.RGBA16I),q===i.INT&&(st=i.RGBA32I)),T===i.RGB&&(q===i.UNSIGNED_SHORT&&St&&(st=St.RGB16_EXT),q===i.SHORT&&St&&(st=St.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(st=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(st=i.R11F_G11F_B10F)),T===i.RGBA){let ht=bt?io:ye.getTransfer(it);q===i.FLOAT&&(st=i.RGBA32F),q===i.HALF_FLOAT&&(st=i.RGBA16F),q===i.UNSIGNED_BYTE&&(st=ht===Re?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&St&&(st=St.RGBA16_EXT),q===i.SHORT&&St&&(st=St.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function _(N,T){let q;return N?T===null||T===si||T===wr?q=i.DEPTH24_STENCIL8:T===Xn?q=i.DEPTH32F_STENCIL8:T===Sr&&(q=i.DEPTH24_STENCIL8,ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===si||T===wr?q=i.DEPTH_COMPONENT24:T===Xn?q=i.DEPTH_COMPONENT32F:T===Sr&&(q=i.DEPTH_COMPONENT16),q}function M(N,T){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==dn&&N.minFilter!==mn?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function w(N){let T=N.target;T.removeEventListener("dispose",w),b(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&u.delete(T)}function v(N){let T=N.target;T.removeEventListener("dispose",v),P(T)}function b(N){let T=n.get(N);if(T.__webglInit===void 0)return;let q=N.source,tt=d.get(q);if(tt){let it=tt[T.__cacheKey];it.usedTimes--,it.usedTimes===0&&A(N),Object.keys(tt).length===0&&d.delete(q)}n.remove(N)}function A(N){let T=n.get(N);i.deleteTexture(T.__webglTexture);let q=N.source,tt=d.get(q);delete tt[T.__cacheKey],o.memory.textures--}function P(N){let T=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(T.__webglFramebuffer[tt]))for(let it=0;it<T.__webglFramebuffer[tt].length;it++)i.deleteFramebuffer(T.__webglFramebuffer[tt][it]);else i.deleteFramebuffer(T.__webglFramebuffer[tt]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[tt])}else{if(Array.isArray(T.__webglFramebuffer))for(let tt=0;tt<T.__webglFramebuffer.length;tt++)i.deleteFramebuffer(T.__webglFramebuffer[tt]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let tt=0;tt<T.__webglColorRenderbuffer.length;tt++)T.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[tt]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let q=N.textures;for(let tt=0,it=q.length;tt<it;tt++){let bt=n.get(q[tt]);bt.__webglTexture&&(i.deleteTexture(bt.__webglTexture),o.memory.textures--),n.remove(q[tt])}n.remove(N)}let L=0;function D(){L=0}function R(){return L}function C(N){L=N}function z(){let N=L;return N>=s.maxTextures&&ee("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,N}function F(N){let T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function J(N,T){let q=n.get(N);if(N.isVideoTexture&&H(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&q.__version!==N.version){let tt=N.image;if(tt===null)ee("WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)ee("WebGLRenderer: Texture marked for update but image is incomplete");else{rt(q,N,T);return}}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+T)}function V(N,T){let q=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){rt(q,N,T);return}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+T)}function K(N,T){let q=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){rt(q,N,T);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+T)}function Z(N,T){let q=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&q.__version!==N.version){Mt(q,N,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+T)}let ot={[rr]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[ja]:i.MIRRORED_REPEAT},gt={[dn]:i.NEAREST,[xd]:i.NEAREST_MIPMAP_NEAREST,[Fo]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[Il]:i.LINEAR_MIPMAP_NEAREST,[os]:i.LINEAR_MIPMAP_LINEAR},Yt={[Md]:i.NEVER,[Td]:i.ALWAYS,[Ed]:i.LESS,[pc]:i.LEQUAL,[bd]:i.EQUAL,[mc]:i.GEQUAL,[Sd]:i.GREATER,[wd]:i.NOTEQUAL};function At(N,T){if(T.type===Xn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===mn||T.magFilter===Il||T.magFilter===Fo||T.magFilter===os||T.minFilter===mn||T.minFilter===Il||T.minFilter===Fo||T.minFilter===os)&&ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,ot[T.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,ot[T.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,ot[T.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,gt[T.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,gt[T.minFilter]),T.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,Yt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===dn||T.minFilter!==Fo&&T.minFilter!==os||T.type===Xn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(N,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Gt(N,T){let q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",w));let tt=T.source,it=d.get(tt);it===void 0&&(it={},d.set(tt,it));let bt=F(T);if(bt!==N.__cacheKey){it[bt]===void 0&&(it[bt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),it[bt].usedTimes++;let St=it[N.__cacheKey];St!==void 0&&(it[N.__cacheKey].usedTimes--,St.usedTimes===0&&A(T)),N.__cacheKey=bt,N.__webglTexture=it[bt].texture}return q}function U(N,T,q){return Math.floor(Math.floor(N/q)/T)}function k(N,T,q,tt){let bt=N.updateRanges;if(bt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,q,tt,T.data);else{bt.sort((Kt,Lt)=>Kt.start-Lt.start);let St=0;for(let Kt=1;Kt<bt.length;Kt++){let Lt=bt[St],Ct=bt[Kt],Jt=Lt.start+Lt.count,te=U(Ct.start,T.width,4),le=U(Lt.start,T.width,4);Ct.start<=Jt+1&&te===le&&U(Ct.start+Ct.count-1,T.width,4)===te?Lt.count=Math.max(Lt.count,Ct.start+Ct.count-Lt.start):(++St,bt[St]=Ct)}bt.length=St+1;let st=e.getParameter(i.UNPACK_ROW_LENGTH),ht=e.getParameter(i.UNPACK_SKIP_PIXELS),Rt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let Kt=0,Lt=bt.length;Kt<Lt;Kt++){let Ct=bt[Kt],Jt=Math.floor(Ct.start/4),te=Math.ceil(Ct.count/4),le=Jt%T.width,W=Math.floor(Jt/T.width),It=te,at=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,le),e.pixelStorei(i.UNPACK_SKIP_ROWS,W),e.texSubImage2D(i.TEXTURE_2D,0,le,W,It,at,q,tt,T.data)}N.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,st),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(i.UNPACK_SKIP_ROWS,Rt)}}function rt(N,T,q){let tt=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(tt=i.TEXTURE_3D);let it=Gt(N,T),bt=T.source;e.bindTexture(tt,N.__webglTexture,i.TEXTURE0+q);let St=n.get(bt);if(bt.version!==St.__version||it===!0){if(e.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap!="undefined"&&T.image instanceof ImageBitmap)===!1){let at=ye.getPrimaries(ye.workingColorSpace),Pt=T.colorSpace===Ni?null:ye.getPrimaries(T.colorSpace),Ft=T.colorSpace===Ni||at===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft)}e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let ht=p(T.image,!1,s.maxTextureSize);ht=_e(T,ht);let Rt=r.convert(T.format,T.colorSpace),Kt=r.convert(T.type),Lt=x(T.internalFormat,Rt,Kt,T.normalized,T.colorSpace,T.isVideoTexture);At(tt,T);let Ct,Jt=T.mipmaps,te=T.isVideoTexture!==!0,le=St.__version===void 0||it===!0,W=bt.dataReady,It=M(T,ht);if(T.isDepthTexture)Lt=_(T.format===as,T.type),le&&(te?e.texStorage2D(i.TEXTURE_2D,1,Lt,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,Lt,ht.width,ht.height,0,Rt,Kt,null));else if(T.isDataTexture)if(Jt.length>0){te&&le&&e.texStorage2D(i.TEXTURE_2D,It,Lt,Jt[0].width,Jt[0].height);for(let at=0,Pt=Jt.length;at<Pt;at++)Ct=Jt[at],te?W&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,Ct.width,Ct.height,Rt,Kt,Ct.data):e.texImage2D(i.TEXTURE_2D,at,Lt,Ct.width,Ct.height,0,Rt,Kt,Ct.data);T.generateMipmaps=!1}else te?(le&&e.texStorage2D(i.TEXTURE_2D,It,Lt,ht.width,ht.height),W&&k(T,ht,Rt,Kt)):e.texImage2D(i.TEXTURE_2D,0,Lt,ht.width,ht.height,0,Rt,Kt,ht.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){te&&le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Lt,Jt[0].width,Jt[0].height,ht.depth);for(let at=0,Pt=Jt.length;at<Pt;at++)if(Ct=Jt[at],T.format!==Yn)if(Rt!==null)if(te){if(W)if(T.layerUpdates.size>0){let Ft=cf(Ct.width,Ct.height,T.format,T.type);for(let mt of T.layerUpdates){let jt=Ct.data.subarray(mt*Ft/Ct.data.BYTES_PER_ELEMENT,(mt+1)*Ft/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,mt,Ct.width,Ct.height,1,Rt,jt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,Ct.width,Ct.height,ht.depth,Rt,Ct.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,Lt,Ct.width,Ct.height,ht.depth,0,Ct.data,0,0);else ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?W&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,Ct.width,Ct.height,ht.depth,Rt,Kt,Ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,Lt,Ct.width,Ct.height,ht.depth,0,Rt,Kt,Ct.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{te&&le&&e.texStorage2D(i.TEXTURE_2D,It,Lt,Jt[0].width,Jt[0].height);for(let at=0,Pt=Jt.length;at<Pt;at++)Ct=Jt[at],T.format!==Yn?Rt!==null?te?W&&e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,Ct.width,Ct.height,Rt,Ct.data):e.compressedTexImage2D(i.TEXTURE_2D,at,Lt,Ct.width,Ct.height,0,Ct.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?W&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,Ct.width,Ct.height,Rt,Kt,Ct.data):e.texImage2D(i.TEXTURE_2D,at,Lt,Ct.width,Ct.height,0,Rt,Kt,Ct.data)}else if(T.isDataArrayTexture)if(te){if(le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Lt,ht.width,ht.height,ht.depth),W)if(T.layerUpdates.size>0){let at=cf(ht.width,ht.height,T.format,T.type);for(let Pt of T.layerUpdates){let Ft=ht.data.subarray(Pt*at/ht.data.BYTES_PER_ELEMENT,(Pt+1)*at/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Pt,ht.width,ht.height,1,Rt,Kt,Ft)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Rt,Kt,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,ht.width,ht.height,ht.depth,0,Rt,Kt,ht.data);else if(T.isData3DTexture)te?(le&&e.texStorage3D(i.TEXTURE_3D,It,Lt,ht.width,ht.height,ht.depth),W&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Rt,Kt,ht.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,ht.width,ht.height,ht.depth,0,Rt,Kt,ht.data);else if(T.isFramebufferTexture){if(le)if(te)e.texStorage2D(i.TEXTURE_2D,It,Lt,ht.width,ht.height);else{let at=ht.width,Pt=ht.height;for(let Ft=0;Ft<It;Ft++)e.texImage2D(i.TEXTURE_2D,Ft,Lt,at,Pt,0,Rt,Kt,null),at>>=1,Pt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let at=i.canvas;if(at.hasAttribute("layoutsubtree")||at.setAttribute("layoutsubtree","true"),ht.parentNode!==at){at.appendChild(ht),u.add(T),at.onpaint=Pt=>{let Ft=Pt.changedElements;for(let mt of u)Ft.includes(mt.image)&&(mt.needsUpdate=!0)},at.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ht);else{let Ft=i.RGBA,mt=i.RGBA,jt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ft,mt,jt,ht)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Jt.length>0){if(te&&le){let at=fe(Jt[0]);e.texStorage2D(i.TEXTURE_2D,It,Lt,at.width,at.height)}for(let at=0,Pt=Jt.length;at<Pt;at++)Ct=Jt[at],te?W&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,Rt,Kt,Ct):e.texImage2D(i.TEXTURE_2D,at,Lt,Rt,Kt,Ct);T.generateMipmaps=!1}else if(te){if(le){let at=fe(ht);e.texStorage2D(i.TEXTURE_2D,It,Lt,at.width,at.height)}W&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt,Kt,ht)}else e.texImage2D(i.TEXTURE_2D,0,Lt,Rt,Kt,ht);m(T)&&E(tt),St.__version=bt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Mt(N,T,q){if(T.image.length!==6)return;let tt=Gt(N,T),it=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+q);let bt=n.get(it);if(it.version!==bt.__version||tt===!0){e.activeTexture(i.TEXTURE0+q);let St=ye.getPrimaries(ye.workingColorSpace),st=T.colorSpace===Ni?null:ye.getPrimaries(T.colorSpace),ht=T.colorSpace===Ni||St===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Rt=T.isCompressedTexture||T.image[0].isCompressedTexture,Kt=T.image[0]&&T.image[0].isDataTexture,Lt=[];for(let mt=0;mt<6;mt++)!Rt&&!Kt?Lt[mt]=p(T.image[mt],!0,s.maxCubemapSize):Lt[mt]=Kt?T.image[mt].image:T.image[mt],Lt[mt]=_e(T,Lt[mt]);let Ct=Lt[0],Jt=r.convert(T.format,T.colorSpace),te=r.convert(T.type),le=x(T.internalFormat,Jt,te,T.normalized,T.colorSpace),W=T.isVideoTexture!==!0,It=bt.__version===void 0||tt===!0,at=it.dataReady,Pt=M(T,Ct);At(i.TEXTURE_CUBE_MAP,T);let Ft;if(Rt){W&&It&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,le,Ct.width,Ct.height);for(let mt=0;mt<6;mt++){Ft=Lt[mt].mipmaps;for(let jt=0;jt<Ft.length;jt++){let Zt=Ft[jt];T.format!==Yn?Jt!==null?W?at&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,jt,0,0,Zt.width,Zt.height,Jt,Zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,jt,le,Zt.width,Zt.height,0,Zt.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,jt,0,0,Zt.width,Zt.height,Jt,te,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,jt,le,Zt.width,Zt.height,0,Jt,te,Zt.data)}}}else{if(Ft=T.mipmaps,W&&It){Ft.length>0&&Pt++;let mt=fe(Lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,le,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(Kt){W?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Lt[mt].width,Lt[mt].height,Jt,te,Lt[mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,le,Lt[mt].width,Lt[mt].height,0,Jt,te,Lt[mt].data);for(let jt=0;jt<Ft.length;jt++){let Ge=Ft[jt].image[mt].image;W?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,jt+1,0,0,Ge.width,Ge.height,Jt,te,Ge.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,jt+1,le,Ge.width,Ge.height,0,Jt,te,Ge.data)}}else{W?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Jt,te,Lt[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,le,Jt,te,Lt[mt]);for(let jt=0;jt<Ft.length;jt++){let Zt=Ft[jt];W?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,jt+1,0,0,Jt,te,Zt.image[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,jt+1,le,Jt,te,Zt.image[mt])}}}m(T)&&E(i.TEXTURE_CUBE_MAP),bt.__version=it.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function ut(N,T,q,tt,it,bt){let St=r.convert(q.format,q.colorSpace),st=r.convert(q.type),ht=x(q.internalFormat,St,st,q.normalized,q.colorSpace),Rt=n.get(T),Kt=n.get(q);if(Kt.__renderTarget=T,!Rt.__hasExternalTextures){let Lt=Math.max(1,T.width>>bt),Ct=Math.max(1,T.height>>bt);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,bt,ht,Lt,Ct,T.depth,0,St,st,null):e.texImage2D(it,bt,ht,Lt,Ct,0,St,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,N),ie(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,it,Kt.__webglTexture,0,Qt(T)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,it,Kt.__webglTexture,bt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Y(N,T,q){if(i.bindRenderbuffer(i.RENDERBUFFER,N),T.depthBuffer){let tt=T.depthTexture,it=tt&&tt.isDepthTexture?tt.type:null,bt=_(T.stencilBuffer,it),St=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ie(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt(T),bt,T.width,T.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt(T),bt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,bt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,N)}else{let tt=T.textures;for(let it=0;it<tt.length;it++){let bt=tt[it],St=r.convert(bt.format,bt.colorSpace),st=r.convert(bt.type),ht=x(bt.internalFormat,St,st,bt.normalized,bt.colorSpace);ie(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt(T),ht,T.width,T.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt(T),ht,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ht,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pt(N,T,q){let tt=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(T.depthTexture);if(it.__renderTarget=T,(!it.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),tt){if(it.__webglInit===void 0&&(it.__webglInit=!0,T.depthTexture.addEventListener("dispose",w)),it.__webglTexture===void 0){it.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),At(i.TEXTURE_CUBE_MAP,T.depthTexture);let Rt=r.convert(T.depthTexture.format),Kt=r.convert(T.depthTexture.type),Lt;T.depthTexture.format===mi?Lt=i.DEPTH_COMPONENT24:T.depthTexture.format===as&&(Lt=i.DEPTH24_STENCIL8);for(let Ct=0;Ct<6;Ct++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,Lt,T.width,T.height,0,Rt,Kt,null)}}else J(T.depthTexture,0);let bt=it.__webglTexture,St=Qt(T),st=tt?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,ht=T.depthTexture.format===as?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===mi)ie(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,st,bt,0,St):i.framebufferTexture2D(i.FRAMEBUFFER,ht,st,bt,0);else if(T.depthTexture.format===as)ie(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,st,bt,0,St):i.framebufferTexture2D(i.FRAMEBUFFER,ht,st,bt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $(N){let T=n.get(N),q=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){let tt=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),tt){let it=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,tt.removeEventListener("dispose",it)};tt.addEventListener("dispose",it),T.__depthDisposeCallback=it}T.__boundDepthTexture=tt}if(N.depthTexture&&!T.__autoAllocateDepthBuffer)if(q)for(let tt=0;tt<6;tt++)pt(T.__webglFramebuffer[tt],N,tt);else{let tt=N.texture.mipmaps;tt&&tt.length>0?pt(T.__webglFramebuffer[0],N,0):pt(T.__webglFramebuffer,N,0)}else if(q){T.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[tt]),T.__webglDepthbuffer[tt]===void 0)T.__webglDepthbuffer[tt]=i.createRenderbuffer(),Y(T.__webglDepthbuffer[tt],N,!1);else{let it=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=T.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,bt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,bt)}}else{let tt=N.texture.mipmaps;if(tt&&tt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Y(T.__webglDepthbuffer,N,!1);else{let it=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,bt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,bt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function et(N,T,q){let tt=n.get(N);T!==void 0&&ut(tt.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&$(N)}function ct(N){let T=N.texture,q=n.get(N),tt=n.get(T);N.addEventListener("dispose",v);let it=N.textures,bt=N.isWebGLCubeRenderTarget===!0,St=it.length>1;if(St||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=T.version,o.memory.textures++),bt){q.__webglFramebuffer=[];for(let st=0;st<6;st++)if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer[st]=[];for(let ht=0;ht<T.mipmaps.length;ht++)q.__webglFramebuffer[st][ht]=i.createFramebuffer()}else q.__webglFramebuffer[st]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer=[];for(let st=0;st<T.mipmaps.length;st++)q.__webglFramebuffer[st]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(St)for(let st=0,ht=it.length;st<ht;st++){let Rt=n.get(it[st]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&ie(N)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let st=0;st<it.length;st++){let ht=it[st];q.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[st]);let Rt=r.convert(ht.format,ht.colorSpace),Kt=r.convert(ht.type),Lt=x(ht.internalFormat,Rt,Kt,ht.normalized,ht.colorSpace,N.isXRRenderTarget===!0),Ct=Qt(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,Lt,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,q.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Y(q.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(bt){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),At(i.TEXTURE_CUBE_MAP,T);for(let st=0;st<6;st++)if(T.mipmaps&&T.mipmaps.length>0)for(let ht=0;ht<T.mipmaps.length;ht++)ut(q.__webglFramebuffer[st][ht],N,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,ht);else ut(q.__webglFramebuffer[st],N,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);m(T)&&E(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let st=0,ht=it.length;st<ht;st++){let Rt=it[st],Kt=n.get(Rt),Lt=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Lt=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Lt,Kt.__webglTexture),At(Lt,Rt),ut(q.__webglFramebuffer,N,Rt,i.COLOR_ATTACHMENT0+st,Lt,0),m(Rt)&&E(Lt)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(st=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,tt.__webglTexture),At(st,T),T.mipmaps&&T.mipmaps.length>0)for(let ht=0;ht<T.mipmaps.length;ht++)ut(q.__webglFramebuffer[ht],N,T,i.COLOR_ATTACHMENT0,st,ht);else ut(q.__webglFramebuffer,N,T,i.COLOR_ATTACHMENT0,st,0);m(T)&&E(st),e.unbindTexture()}N.depthBuffer&&$(N)}function lt(N){let T=N.textures;for(let q=0,tt=T.length;q<tt;q++){let it=T[q];if(m(it)){let bt=S(N),St=n.get(it).__webglTexture;e.bindTexture(bt,St),E(bt),e.unbindTexture()}}}let yt=[],Bt=[];function Vt(N){if(N.samples>0){if(ie(N)===!1){let T=N.textures,q=N.width,tt=N.height,it=i.COLOR_BUFFER_BIT,bt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(N),st=T.length>1;if(st)for(let Rt=0;Rt<T.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer);let ht=N.texture.mipmaps;ht&&ht.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let Rt=0;Rt<T.length;Rt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[Rt]);let Kt=n.get(T[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Kt,0)}i.blitFramebuffer(0,0,q,tt,0,0,q,tt,it,i.NEAREST),c===!0&&(yt.length=0,Bt.length=0,yt.push(i.COLOR_ATTACHMENT0+Rt),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(yt.push(bt),Bt.push(bt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Bt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,yt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let Rt=0;Rt<T.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,St.__webglColorRenderbuffer[Rt]);let Kt=n.get(T[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,Kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&c){let T=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Qt(N){return Math.min(s.maxSamples,N.samples)}function ie(N){let T=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function H(N){let T=o.render.frame;h.get(N)!==T&&(h.set(N,T),N.update())}function _e(N,T){let q=N.colorSpace,tt=N.format,it=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||q!==no&&q!==Ni&&(ye.getTransfer(q)===Re?(tt!==Yn||it!==Dn)&&ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):se("WebGLTextures: Unsupported texture color space:",q)),T}function fe(N){return typeof HTMLImageElement!="undefined"&&N instanceof HTMLImageElement?(l.width=N.naturalWidth||N.width,l.height=N.naturalHeight||N.height):typeof VideoFrame!="undefined"&&N instanceof VideoFrame?(l.width=N.displayWidth,l.height=N.displayHeight):(l.width=N.width,l.height=N.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=D,this.getTextureUnits=R,this.setTextureUnits=C,this.setTexture2D=J,this.setTexture2DArray=V,this.setTexture3D=K,this.setTextureCube=Z,this.rebindTextures=et,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=ie,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Qv(i,t){function e(n,s=Ni){let r,o=ye.getTransfer(s);if(n===Dn)return i.UNSIGNED_BYTE;if(n===Ll)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Dl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===$h)return i.BYTE;if(n===Kh)return i.SHORT;if(n===Sr)return i.UNSIGNED_SHORT;if(n===Pl)return i.INT;if(n===si)return i.UNSIGNED_INT;if(n===Xn)return i.FLOAT;if(n===ri)return i.HALF_FLOAT;if(n===Qh)return i.ALPHA;if(n===tf)return i.RGB;if(n===Yn)return i.RGBA;if(n===mi)return i.DEPTH_COMPONENT;if(n===as)return i.DEPTH_STENCIL;if(n===Nl)return i.RED;if(n===zl)return i.RED_INTEGER;if(n===ls)return i.RG;if(n===Ul)return i.RG_INTEGER;if(n===Fl)return i.RGBA_INTEGER;if(n===Oo||n===Bo||n===Ho||n===ko)if(o===Re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Oo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Oo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Bo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ho)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ko)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ol||n===Bl||n===Hl||n===kl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gl||n===Vl||n===Wl||n===Xl||n===Yl||n===Go||n===ql)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Gl||n===Vl)return o===Re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Xl)return r.COMPRESSED_R11_EAC;if(n===Yl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Go)return r.COMPRESSED_RG11_EAC;if(n===ql)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Zl||n===$l||n===Kl||n===Jl||n===jl||n===Ql||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Zl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$l)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ql)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tc)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ec)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nc)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ic)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sc)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rc)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oc)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ac)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lc||n===cc||n===hc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===lc)return o===Re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===hc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fc||n===uc||n===Vo||n===dc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===fc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===wr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var t_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e_=`
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

}`,Rf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new xo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new sn({vertexShader:t_,fragmentShader:e_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new B(new Ze(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Cf=class extends gi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,y=typeof XRWebGLBinding!="undefined",p=new Rf,m={},E=e.getContextAttributes(),S=null,x=null,_=[],M=[],w=new Et,v=null,b=null,A=new an;A.viewport=new Xe;let P=new an;P.viewport=new Xe;let L=[A,P],D=new Sl,R=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let k=_[U];return k===void 0&&(k=new hr,_[U]=k),k.getTargetRaySpace()},this.getControllerGrip=function(U){let k=_[U];return k===void 0&&(k=new hr,_[U]=k),k.getGripSpace()},this.getHand=function(U){let k=_[U];return k===void 0&&(k=new hr,_[U]=k),k.getHandSpace()};function z(U){let k=M.indexOf(U.inputSource);if(k===-1)return;let rt=_[k];rt!==void 0&&(rt.update(U.inputSource,U.frame,l||o),rt.dispatchEvent({type:U.type,data:U.inputSource}))}function F(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",J);for(let U=0;U<_.length;U++){let k=M[U];k!==null&&(M[U]=null,_[U].disconnect(k))}R=null,C=null,p.reset();for(let U in m)delete m[U];if(t.setRenderTarget(S),d=null,f=null,u=null,s=null,x=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(w.width,w.height,!1),b!==null){let U=b.camera;U.fov=b.fov,U.zoom=b.zoom,U.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,n.isPresenting===!0&&ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(U){l=U},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(U){if(s=U,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",F),s.addEventListener("inputsourceschange",J),E.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(w),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,Mt=null,ut=null;E.depth&&(ut=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=E.stencil?as:mi,Mt=E.stencil?wr:si);let Y={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Y),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new Ln(f.textureWidth,f.textureHeight,{format:Yn,type:Dn,depthTexture:new Ki(f.textureWidth,f.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let rt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Ln(d.framebufferWidth,d.framebufferHeight,{format:Yn,type:Dn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Gt.setContext(s),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function J(U){for(let k=0;k<U.removed.length;k++){let rt=U.removed[k],Mt=M.indexOf(rt);Mt>=0&&(M[Mt]=null,_[Mt].disconnect(rt))}for(let k=0;k<U.added.length;k++){let rt=U.added[k],Mt=M.indexOf(rt);if(Mt===-1){for(let Y=0;Y<_.length;Y++)if(Y>=M.length){M.push(rt),Mt=Y;break}else if(M[Y]===null){M[Y]=rt,Mt=Y;break}if(Mt===-1)break}let ut=_[Mt];ut&&ut.connect(rt)}}let V=new O,K=new O;function Z(U,k,rt){V.setFromMatrixPosition(k.matrixWorld),K.setFromMatrixPosition(rt.matrixWorld);let Mt=V.distanceTo(K),ut=k.projectionMatrix.elements,Y=rt.projectionMatrix.elements,pt=ut[14]/(ut[10]-1),$=ut[14]/(ut[10]+1),et=(ut[9]+1)/ut[5],ct=(ut[9]-1)/ut[5],lt=(ut[8]-1)/ut[0],yt=(Y[8]+1)/Y[0],Bt=pt*lt,Vt=pt*yt,Qt=Mt/(-lt+yt),ie=Qt*-lt;if(k.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(ie),U.translateZ(Qt),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),ut[10]===-1)U.projectionMatrix.copy(k.projectionMatrix),U.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{let H=pt+Qt,_e=$+Qt,fe=Bt-ie,N=Vt+(Mt-ie),T=et*$/_e*H,q=ct*$/_e*H;U.projectionMatrix.makePerspective(fe,N,T,q,H,_e),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function ot(U,k){k===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(k.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(s===null)return;let k=U.near,rt=U.far;p.texture!==null&&(p.depthNear>0&&(k=p.depthNear),p.depthFar>0&&(rt=p.depthFar)),D.near=P.near=A.near=k,D.far=P.far=A.far=rt,(R!==D.near||C!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),R=D.near,C=D.far),D.layers.mask=U.layers.mask|6,A.layers.mask=D.layers.mask&-5,P.layers.mask=D.layers.mask&-3;let Mt=U.parent,ut=D.cameras;ot(D,Mt);for(let Y=0;Y<ut.length;Y++)ot(ut[Y],Mt);ut.length===2?Z(D,A,P):D.projectionMatrix.copy(A.projectionMatrix),b===null&&U.isPerspectiveCamera&&(b={camera:U,fov:U.fov,zoom:U.zoom}),gt(U,D,Mt)};function gt(U,k,rt){rt===null?U.matrix.copy(k.matrixWorld):(U.matrix.copy(rt.matrixWorld),U.matrix.invert(),U.matrix.multiply(k.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(k.projectionMatrix),U.projectionMatrixInverse.copy(k.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=lr*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(U){c=U,f!==null&&(f.fixedFoveation=U),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=U)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(D)},this.getCameraTexture=function(U){return m[U]};let Yt=null;function At(U,k){if(h=k.getViewerPose(l||o),g=k,h!==null){let rt=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let Mt=!1;rt.length!==D.cameras.length&&(D.cameras.length=0,Mt=!0);for(let $=0;$<rt.length;$++){let et=rt[$],ct=null;if(d!==null)ct=d.getViewport(et);else{let yt=u.getViewSubImage(f,et);ct=yt.viewport,$===0&&(t.setRenderTargetTextures(x,yt.colorTexture,yt.depthStencilTexture),t.setRenderTarget(x))}let lt=L[$];lt===void 0&&(lt=new an,lt.layers.enable($),lt.viewport=new Xe,L[$]=lt),lt.matrix.fromArray(et.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(et.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(ct.x,ct.y,ct.width,ct.height),$===0&&(D.matrix.copy(lt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Mt===!0&&D.cameras.push(lt)}let ut=s.enabledFeatures;if(ut&&ut.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let $=u.getDepthInformation(rt[0]);$&&$.isValid&&$.texture&&p.init($,s.renderState)}if(ut&&ut.includes("camera-access")&&y){t.state.unbindTexture(),u=n.getBinding();for(let $=0;$<rt.length;$++){let et=rt[$].camera;if(et){let ct=m[et];ct||(ct=new xo,m[et]=ct);let lt=u.getCameraImage(et);ct.sourceTexture=lt}}}}for(let rt=0;rt<_.length;rt++){let Mt=M[rt],ut=_[rt];Mt!==null&&ut!==void 0&&ut.update(Mt,k,l||o)}Yt&&Yt(U,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),g=null}let Gt=new ap;Gt.setAnimationLoop(At),this.setAnimationLoop=function(U){Yt=U},this.dispose=function(){}}},n_=new Se,dp=new ae;dp.set(-1,0,0,0,1,0,0,0,1);function i_(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,of(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,E,S,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,x)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,E,S):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===ln&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===ln&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let E=t.get(m),S=E.envMap,x=E.envMapRotation;S&&(p.envMap.value=S,p.envMapRotation.value.setFromMatrix4(n_.makeRotationFromEuler(x)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(dp),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,E,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*E,p.scale.value=S*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,E){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ln&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let E=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function s_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,_){let M=_.program;n.uniformBlockBinding(x,M)}function l(x,_){let M=s[x.id];M===void 0&&(p(x),M=h(x),s[x.id]=M,x.addEventListener("dispose",E));let w=_.program;n.updateUBOMapping(x,w);let v=t.render.frame;r[x.id]!==v&&(f(x),r[x.id]=v)}function h(x){let _=u();x.__bindingPointIndex=_;let M=i.createBuffer(),w=x.__size,v=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,w,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,M),M}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return se("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){let _=s[x.id],M=x.uniforms,w=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let v=0,b=M.length;v<b;v++){let A=M[v];if(Array.isArray(A))for(let P=0,L=A.length;P<L;P++)d(A[P],v,P,w);else d(A,v,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,_,M,w){if(y(x,_,M,w)===!0){let v=x.__offset,b=x.value;if(Array.isArray(b)){let A=0;for(let P=0;P<b.length;P++){let L=b[P],D=m(L);g(L,x.__data,A),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(A+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(b,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,x.__data)}}function g(x,_,M){typeof x=="number"||typeof x=="boolean"?_[0]=x:x.isMatrix3?(_[0]=x.elements[0],_[1]=x.elements[1],_[2]=x.elements[2],_[3]=0,_[4]=x.elements[3],_[5]=x.elements[4],_[6]=x.elements[5],_[7]=0,_[8]=x.elements[6],_[9]=x.elements[7],_[10]=x.elements[8],_[11]=0):ArrayBuffer.isView(x)?_.set(new x.constructor(x.buffer,x.byteOffset,_.length)):x.toArray(_,M)}function y(x,_,M,w){let v=x.value,b=_+"_"+M;if(w[b]===void 0)return typeof v=="number"||typeof v=="boolean"?w[b]=v:ArrayBuffer.isView(v)?w[b]=v.slice():w[b]=v.clone(),!0;{let A=w[b];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return w[b]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(A.equals(v)===!1)return A.copy(v),!0}}return!1}function p(x){let _=x.uniforms,M=0,w=16;for(let b=0,A=_.length;b<A;b++){let P=Array.isArray(_[b])?_[b]:[_[b]];for(let L=0,D=P.length;L<D;L++){let R=P[L],C=Array.isArray(R.value)?R.value:[R.value];for(let z=0,F=C.length;z<F;z++){let J=C[z],V=m(J),K=M%w,Z=K%V.boundary,ot=K+Z;M+=Z,ot!==0&&w-ot<V.storage&&(M+=w-ot),R.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=M,M+=V.storage}}}let v=M%w;return v>0&&(M+=w-v),x.__size=M,x.__cache={},this}function m(x){let _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(_.boundary=16,_.storage=x.byteLength):ee("WebGLRenderer: Unsupported uniform value type.",x),_}function E(x){let _=x.target;_.removeEventListener("dispose",E);let M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function S(){for(let x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:S}}var r_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vi=null;function o_(){return vi===null&&(vi=new po(r_,16,16,ls,ri),vi.name="DFG_LUT",vi.minFilter=mn,vi.magFilter=mn,vi.wrapS=di,vi.wrapT=di,vi.generateMipmaps=!1,vi.needsUpdate=!0),vi}var $o=class{constructor(t={}){let{canvas:e=Ad(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Dn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let y=d,p=new Set([Fl,Ul,zl]),m=new Set([Dn,si,Sr,wr,Ll,Dl]),E=new Uint32Array(4),S=new Int32Array(4),x=new O,_=null,M=null,w=[],v=[],b=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,P=!1,L=null,D=null,R=null,C=null;this._outputColorSpace=Be;let z=0,F=0,J=null,V=-1,K=null,Z=new Xe,ot=new Xe,gt=null,Yt=new kt(0),At=0,Gt=e.width,U=e.height,k=1,rt=null,Mt=null,ut=new Xe(0,0,Gt,U),Y=new Xe(0,0,Gt,U),pt=!1,$=new mr,et=!1,ct=!1,lt=new Se,yt=new O,Bt=new Xe,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qt=!1;function ie(){return J===null?k:1}let H=n;function _e(I,G){return e.getContext(I,G)}let fe,N,T,q,tt,it,bt,St,st,ht,Rt,Kt,Lt,Ct,Jt,te,le,W,It,at,Pt,Ft,mt;try{let I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ge,!1),e.addEventListener("webglcontextrestored",Te,!1),e.addEventListener("webglcontextcreationerror",$n,!1),H===null){let G="webgl2";if(H=_e(G,I),H===null)throw _e(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}jt()}catch(I){throw e.removeEventListener("webglcontextlost",Ge,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",$n,!1),se("WebGLRenderer: "+I.message),I}function jt(){fe=new dy(H),fe.init(),Pt=new Qv(H,fe),N=new iy(H,fe,t,Pt),T=new Jv(H,fe),N.reversedDepthBuffer&&f&&T.buffers.depth.setReversed(!0),D=H.createFramebuffer(),R=H.createFramebuffer(),C=H.createFramebuffer(),q=new gy(H),tt=new Fv,it=new jv(H,fe,T,tt,N,Pt,q),bt=new uy(A),St=new yg(H),Ft=new ey(H,St),st=new py(H,St,q,Ft),ht=new yy(H,st,St,Ft,q),W=new xy(H,N,it),Jt=new sy(tt),Rt=new Uv(A,bt,fe,N,Ft,Jt),Kt=new i_(A,tt),Lt=new Bv,Ct=new Xv(fe),le=new ty(A,bt,T,ht,g,c),te=new Kv(A,ht,N),mt=new s_(H,q,N,T),It=new ny(H,fe,q),at=new my(H,fe,q),q.programs=Rt.programs,A.capabilities=N,A.extensions=fe,A.properties=tt,A.renderLists=Lt,A.shadowMap=te,A.state=T,A.info=q}y!==Dn&&(b=new _y(y,e.width,e.height,a,s,r));let Zt=new Cf(A,H);this.xr=Zt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let I=fe.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=fe.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(I){I!==void 0&&(k=I,this.setSize(Gt,U,!1))},this.getSize=function(I){return I.set(Gt,U)},this.setSize=function(I,G,nt=!0){if(Zt.isPresenting){ee("WebGLRenderer: Can't change size while VR device is presenting.");return}Gt=I,U=G,e.width=Math.floor(I*k),e.height=Math.floor(G*k),nt===!0&&(e.style.width=I+"px",e.style.height=G+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,I,G)},this.getDrawingBufferSize=function(I){return I.set(Gt*k,U*k).floor()},this.setDrawingBufferSize=function(I,G,nt){Gt=I,U=G,k=nt,e.width=Math.floor(I*nt),e.height=Math.floor(G*nt),this.setViewport(0,0,I,G)},this.setEffects=function(I){if(y===Dn){se("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let G=0;G<I.length;G++)if(I[G].isOutputPass===!0){ee("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(Z)},this.getViewport=function(I){return I.copy(ut)},this.setViewport=function(I,G,nt,j){I.isVector4?ut.set(I.x,I.y,I.z,I.w):ut.set(I,G,nt,j),T.viewport(Z.copy(ut).multiplyScalar(k).round())},this.getScissor=function(I){return I.copy(Y)},this.setScissor=function(I,G,nt,j){I.isVector4?Y.set(I.x,I.y,I.z,I.w):Y.set(I,G,nt,j),T.scissor(ot.copy(Y).multiplyScalar(k).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(I){T.setScissorTest(pt=I)},this.setOpaqueSort=function(I){rt=I},this.setTransparentSort=function(I){Mt=I},this.getClearColor=function(I){return I.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(I=!0,G=!0,nt=!0){let j=0;if(I){let Q=!1;if(J!==null){let zt=J.texture.format;Q=p.has(zt)}if(Q){let zt=J.texture.type,Ht=m.has(zt),Nt=le.getClearColor(),Wt=le.getClearAlpha(),$t=Nt.r,de=Nt.g,ge=Nt.b;Ht?(E[0]=$t,E[1]=de,E[2]=ge,E[3]=Wt,H.clearBufferuiv(H.COLOR,0,E)):(S[0]=$t,S[1]=de,S[2]=ge,S[3]=Wt,H.clearBufferiv(H.COLOR,0,S))}else j|=H.COLOR_BUFFER_BIT}G&&(j|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),nt&&(j|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&H.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),L=I},this.dispose=function(){e.removeEventListener("webglcontextlost",Ge,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",$n,!1),le.dispose(),Lt.dispose(),Ct.dispose(),tt.dispose(),bt.dispose(),ht.dispose(),Ft.dispose(),mt.dispose(),Rt.dispose(),Zt.dispose(),Zt.removeEventListener("sessionstart",su),Zt.removeEventListener("sessionend",ru),ms.stop()};function Ge(I){I.preventDefault(),ro("WebGLRenderer: Context Lost."),P=!0}function Te(){ro("WebGLRenderer: Context Restored."),P=!1;let I=q.autoReset,G=te.enabled,nt=te.autoUpdate,j=te.needsUpdate,Q=te.type;jt(),q.autoReset=I,te.enabled=G,te.autoUpdate=nt,te.needsUpdate=j,te.type=Q}function $n(I){se("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function hi(I){let G=I.target;G.removeEventListener("dispose",hi),O0(G)}function O0(I){B0(I),tt.remove(I)}function B0(I){let G=tt.get(I).programs;G!==void 0&&(G.forEach(function(nt){Rt.releaseProgram(nt)}),I.isShaderMaterial&&Rt.releaseShaderCache(I))}this.renderBufferDirect=function(I,G,nt,j,Q,zt){G===null&&(G=Vt);let Ht=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Nt=G0(I,G,nt,j,Q);T.setMaterial(j,Ht);let Wt=nt.index,$t=1;if(j.wireframe===!0){if(Wt=st.getWireframeAttribute(nt),Wt===void 0)return;$t=2}let de=nt.drawRange,ge=nt.attributes.position,Xt=de.start*$t,Ae=(de.start+de.count)*$t;zt!==null&&(Xt=Math.max(Xt,zt.start*$t),Ae=Math.min(Ae,(zt.start+zt.count)*$t)),Wt!==null?(Xt=Math.max(Xt,0),Ae=Math.min(Ae,Wt.count)):ge!=null&&(Xt=Math.max(Xt,0),Ae=Math.min(Ae,ge.count));let tn=Ae-Xt;if(tn<0||tn===1/0)return;Ft.setup(Q,j,Nt,nt,Wt);let Ye,Oe=It;if(Wt!==null&&(Ye=St.get(Wt),Oe=at,Oe.setIndex(Ye)),Q.isMesh)j.wireframe===!0?(T.setLineWidth(j.wireframeLinewidth*ie()),Oe.setMode(H.LINES)):Oe.setMode(H.TRIANGLES);else if(Q.isLine){let gn=j.linewidth;gn===void 0&&(gn=1),T.setLineWidth(gn*ie()),Q.isLineSegments?Oe.setMode(H.LINES):Q.isLineLoop?Oe.setMode(H.LINE_LOOP):Oe.setMode(H.LINE_STRIP)}else Q.isPoints?Oe.setMode(H.POINTS):Q.isSprite&&Oe.setMode(H.TRIANGLES);if(Q.isBatchedMesh)if(fe.get("WEBGL_multi_draw"))Oe.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let gn=Q._multiDrawStarts,Ot=Q._multiDrawCounts,wn=Q._multiDrawCount,Me=Wt?St.get(Wt).bytesPerElement:1,Vn=tt.get(j).currentProgram.getUniforms();for(let fi=0;fi<wn;fi++)Vn.setValue(H,"_gl_DrawID",fi),Oe.render(gn[fi]/Me,Ot[fi])}else if(Q.isInstancedMesh)Oe.renderInstances(Xt,tn,Q.count);else if(nt.isInstancedBufferGeometry){let gn=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,Ot=Math.min(nt.instanceCount,gn);Oe.renderInstances(Xt,tn,Ot)}else Oe.render(Xt,tn)};function iu(I,G,nt,j){L!==null&&I.isNodeMaterial&&L.setObject(j,I),et===!0&&Jt.setState(I,nt,!1),I.transparent===!0&&I.side===$e&&I.forceSinglePass===!1?(I.side=ln,I.needsUpdate=!0,ma(I,G,j),I.side=is,I.needsUpdate=!0,ma(I,G,j),I.side=$e):ma(I,G,j)}this.compile=function(I,G,nt=null){nt===null&&(nt=I),L!==null&&L.renderStart(I,G,nt),M=Ct.get(nt),M.init(G),v.push(M),nt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(G.layers)&&(M.pushLight(Q),Q.castShadow&&M.pushShadow(Q))}),I!==nt&&I.traverseVisible(function(Q){Q.isLight&&Q.layers.test(G.layers)&&(M.pushLight(Q),Q.castShadow&&M.pushShadow(Q))}),M.setupLights(),L!==null&&L.updateLights(M.state.lightsArray),ct=this.localClippingEnabled,et=Jt.init(this.clippingPlanes,ct),et===!0&&Jt.setGlobalState(this.clippingPlanes,G),L!==null&&te.render(M.state.shadowsArray,nt,G);let j=new Set;return I.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let zt=Q.material;if(zt)if(Array.isArray(zt))for(let Ht=0;Ht<zt.length;Ht++){let Nt=zt[Ht];iu(Nt,nt,G,Q),j.add(Nt)}else iu(zt,nt,G,Q),j.add(zt)}),M=v.pop(),L!==null&&L.renderEnd(),j},this.compileAsync=function(I,G,nt=null){let j=this.compile(I,G,nt);return new Promise(Q=>{function zt(){if(j.forEach(function(Ht){let Wt=tt.get(Ht).currentProgram;(Wt===void 0||Wt.isReady())&&j.delete(Ht)}),j.size===0){Q(I);return}setTimeout(zt,10)}fe.get("KHR_parallel_shader_compile")!==null?zt():setTimeout(zt,10)})};let Jc=null;function H0(I){Jc&&Jc(I)}function su(){ms.stop()}function ru(){ms.start()}let ms=new ap;ms.setAnimationLoop(H0),typeof self!="undefined"&&ms.setContext(self),this.setAnimationLoop=function(I){Jc=I,Zt.setAnimationLoop(I),I===null?ms.stop():ms.start()},Zt.addEventListener("sessionstart",su),Zt.addEventListener("sessionend",ru),this.render=function(I,G){if(G!==void 0&&G.isCamera!==!0){se("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;L!==null&&L.renderStart(I,G);let nt=Zt.enabled===!0&&Zt.isPresenting===!0,j=b!==null&&(J===null||nt)&&b.begin(A,J);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Zt.enabled===!0&&Zt.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Zt.cameraAutoUpdate===!0&&Zt.updateCamera(G),G=Zt.getCamera()),I.isScene===!0&&I.onBeforeRender(A,I,G,J),M=Ct.get(I,v.length),M.init(G),M.state.textureUnits=it.getTextureUnits(),v.push(M),lt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),$.setFromProjectionMatrix(lt,ei,G.reversedDepth),ct=this.localClippingEnabled,et=Jt.init(this.clippingPlanes,ct),_=Lt.get(I,w.length),_.init(),w.push(_),Zt.enabled===!0&&Zt.isPresenting===!0){let Ht=A.xr.getDepthSensingMesh();Ht!==null&&jc(Ht,G,-1/0,A.sortObjects)}jc(I,G,0,A.sortObjects),_.finish(),L!==null&&L.updateLights(M.state.lightsArray),A.sortObjects===!0&&_.sort(rt,Mt),Qt=Zt.enabled===!1||Zt.isPresenting===!1||Zt.hasDepthSensing()===!1,Qt&&le.addToRenderList(_,I),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),et===!0&&Jt.beginShadows();let Q=M.state.shadowsArray;if(te.render(Q,I,G),et===!0&&Jt.endShadows(),(j&&b.hasRenderPass())===!1){let Ht=_.opaque,Nt=_.transmissive;if(M.setupLights(),G.isArrayCamera){let Wt=G.cameras;if(Nt.length>0)for(let $t=0,de=Wt.length;$t<de;$t++){let ge=Wt[$t];au(Ht,Nt,I,ge)}Qt&&le.render(I);for(let $t=0,de=Wt.length;$t<de;$t++){let ge=Wt[$t];ou(_,I,ge,ge.viewport)}}else Nt.length>0&&au(Ht,Nt,I,G),Qt&&le.render(I),ou(_,I,G)}J!==null&&F===0&&(it.updateMultisampleRenderTarget(J),it.updateRenderTargetMipmap(J)),j&&b.end(A),I.isScene===!0&&I.onAfterRender(A,I,G),Ft.resetDefaultState(),V=-1,K=null,v.pop(),v.length>0?(M=v[v.length-1],it.setTextureUnits(M.state.textureUnits),et===!0&&Jt.setGlobalState(A.clippingPlanes,M.state.camera)):M=null,w.pop(),w.length>0?_=w[w.length-1]:_=null,L!==null&&L.renderEnd()};function jc(I,G,nt,j){if(I.visible===!1)return;if(I.layers.test(G.layers)){if(I.isGroup)nt=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(G);else if(I.isLightProbeGrid)M.pushLightProbeGrid(I);else if(I.isLight)M.pushLight(I),I.castShadow&&M.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||I.intersectsFrustum($)){j&&Bt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(lt);let Ht=ht.update(I),Nt=I.material;Nt.visible&&_.push(I,Ht,Nt,nt,Bt.z,null,G)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||I.intersectsFrustum($))){let Ht=ht.update(I),Nt=I.material;if(j&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Bt.copy(I.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),Bt.copy(Ht.boundingSphere.center)),Bt.applyMatrix4(I.matrixWorld).applyMatrix4(lt)),Array.isArray(Nt)){let Wt=Ht.groups;for(let $t=0,de=Wt.length;$t<de;$t++){let ge=Wt[$t],Xt=Nt[ge.materialIndex];Xt&&Xt.visible&&_.push(I,Ht,Xt,nt,Bt.z,ge,G)}}else Nt.visible&&_.push(I,Ht,Nt,nt,Bt.z,null,G)}}let zt=I.children;for(let Ht=0,Nt=zt.length;Ht<Nt;Ht++)jc(zt[Ht],G,nt,j)}function ou(I,G,nt,j){let{opaque:Q,transmissive:zt,transparent:Ht}=I;M.setupLightsView(nt),et===!0&&Jt.setGlobalState(A.clippingPlanes,nt),j&&T.viewport(Z.copy(j)),Q.length>0&&pa(Q,G,nt),zt.length>0&&pa(zt,G,nt),Ht.length>0&&pa(Ht,G,nt),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function au(I,G,nt,j){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[j.id]===void 0){let Xt=fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[j.id]=new Ln(1,1,{generateMipmaps:!0,type:Xt?ri:Dn,minFilter:os,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ye.workingColorSpace})}let zt=M.state.transmissionRenderTarget[j.id],Ht=j.viewport||Z;zt.setSize(Ht.z*A.transmissionResolutionScale,Ht.w*A.transmissionResolutionScale);let Nt=A.getRenderTarget(),Wt=A.getActiveCubeFace(),$t=A.getActiveMipmapLevel();A.setRenderTarget(zt),A.getClearColor(Yt),At=A.getClearAlpha(),At<1&&A.setClearColor(16777215,.5),A.clear(),Qt&&le.render(nt);let de=A.toneMapping;A.toneMapping=ii;let ge=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),M.setupLightsView(j),et===!0&&Jt.setGlobalState(A.clippingPlanes,j),pa(I,nt,j),it.updateMultisampleRenderTarget(zt),it.updateRenderTargetMipmap(zt),fe.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Ae=0,tn=G.length;Ae<tn;Ae++){let Ye=G[Ae],{object:Oe,geometry:gn,material:Ot,group:wn}=Ye;if(Ot.side===$e&&Oe.layers.test(j.layers)){let Me=Ot.side;Ot.side=ln,Ot.needsUpdate=!0,lu(Oe,nt,j,gn,Ot,wn),Ot.side=Me,Ot.needsUpdate=!0,Xt=!0}}Xt===!0&&(it.updateMultisampleRenderTarget(zt),it.updateRenderTargetMipmap(zt))}A.setRenderTarget(Nt,Wt,$t),A.setClearColor(Yt,At),ge!==void 0&&(j.viewport=ge),A.toneMapping=de}function pa(I,G,nt){let j=G.isScene===!0?G.overrideMaterial:null;for(let Q=0,zt=I.length;Q<zt;Q++){let Ht=I[Q],{object:Nt,geometry:Wt,group:$t}=Ht,de=Ht.material;de.allowOverride===!0&&j!==null&&(de=j),Nt.layers.test(nt.layers)&&lu(Nt,G,nt,Wt,de,$t)}}function lu(I,G,nt,j,Q,zt){L!==null&&Q.isNodeMaterial&&L.setObject(I,Q),I.onBeforeRender(A,G,nt,j,Q,zt),I.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),Q.onBeforeRender(A,G,nt,j,I,zt),Q.transparent===!0&&Q.side===$e&&Q.forceSinglePass===!1?(Q.side=ln,Q.needsUpdate=!0,A.renderBufferDirect(nt,G,j,Q,I,zt),Q.side=is,Q.needsUpdate=!0,A.renderBufferDirect(nt,G,j,Q,I,zt),Q.side=$e):A.renderBufferDirect(nt,G,j,Q,I,zt),I.onAfterRender(A,G,nt,j,Q,zt)}function ma(I,G,nt){G.isScene!==!0&&(G=Vt);let j=tt.get(I),Q=M.state.lights,zt=M.state.shadowsArray,Ht=Q.state.version,Nt=Rt.getParameters(I,Q.state,zt,G,nt,M.state.lightProbeGridArray),Wt=Rt.getProgramCacheKey(Nt),$t=j.programs;j.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?G.environment:null,j.fog=G.fog;let de=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;j.envMap=bt.get(I.envMap||j.environment,de),j.envMapRotation=j.environment!==null&&I.envMap===null?G.environmentRotation:I.envMapRotation,$t===void 0&&(I.addEventListener("dispose",hi),$t=new Map,j.programs=$t);let ge=$t.get(Wt);if(ge!==void 0){if(j.currentProgram===ge&&j.lightsStateVersion===Ht)return hu(I,Nt),ge}else Nt.uniforms=Rt.getUniforms(I),L!==null&&I.isNodeMaterial&&L.build(I,nt,Nt),I.onBeforeCompile(Nt,A),ge=Rt.acquireProgram(Nt,Wt),$t.set(Wt,ge),j.uniforms=Nt.uniforms;let Xt=j.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Xt.clippingPlanes=Jt.uniform),hu(I,Nt),j.needsLights=W0(I),j.lightsStateVersion=Ht,j.needsLights&&(Xt.ambientLightColor.value=Q.state.ambient,Xt.lightProbe.value=Q.state.probe,Xt.sunLights.value=Q.state.sun,Xt.sunLightShadows.value=Q.state.sunShadow,Xt.directionalLights.value=Q.state.directional,Xt.directionalLightShadows.value=Q.state.directionalShadow,Xt.spotLights.value=Q.state.spot,Xt.spotLightShadows.value=Q.state.spotShadow,Xt.rectAreaLights.value=Q.state.rectArea,Xt.ltc_1.value=Q.state.rectAreaLTC1,Xt.ltc_2.value=Q.state.rectAreaLTC2,Xt.pointLights.value=Q.state.point,Xt.pointLightShadows.value=Q.state.pointShadow,Xt.hemisphereLights.value=Q.state.hemi,Xt.sunShadowMatrix.value=Q.state.sunShadowMatrix,Xt.sunShadowCascade.value=Q.state.sunShadowCascade,Xt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Xt.spotLightMatrix.value=Q.state.spotLightMatrix,Xt.spotLightMap.value=Q.state.spotLightMap,Xt.pointShadowMatrix.value=Q.state.pointShadowMatrix),j.lightProbeGrid=M.state.lightProbeGridArray.length>0,j.currentProgram=ge,j.uniformsList=null,ge}function cu(I){if(I.uniformsList===null){let G=I.currentProgram.getUniforms();I.uniformsList=Cr.seqWithValue(G.seq,I.uniforms)}return I.uniformsList}function hu(I,G){let nt=tt.get(I);nt.outputColorSpace=G.outputColorSpace,nt.batching=G.batching,nt.batchingColor=G.batchingColor,nt.instancing=G.instancing,nt.instancingColor=G.instancingColor,nt.instancingMorph=G.instancingMorph,nt.skinning=G.skinning,nt.morphTargets=G.morphTargets,nt.morphNormals=G.morphNormals,nt.morphColors=G.morphColors,nt.morphTargetsCount=G.morphTargetsCount,nt.numClippingPlanes=G.numClippingPlanes,nt.numIntersection=G.numClipIntersection,nt.vertexAlphas=G.vertexAlphas,nt.vertexTangents=G.vertexTangents,nt.toneMapping=G.toneMapping}function k0(I,G){if(I.length===0)return null;if(I.length===1)return I[0].texture!==null?I[0]:null;x.setFromMatrixPosition(G.matrixWorld);for(let nt=0,j=I.length;nt<j;nt++){let Q=I[nt];if(Q.texture!==null&&Q.boundingBox.containsPoint(x))return Q}return null}function G0(I,G,nt,j,Q){G.isScene!==!0&&(G=Vt),it.resetTextureUnits();let zt=G.fog,Ht=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?G.environment:null,Nt=J===null?A.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ye.workingColorSpace,Wt=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,$t=bt.get(j.envMap||Ht,Wt),de=j.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,ge=!!nt.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Xt=!!nt.morphAttributes.position,Ae=!!nt.morphAttributes.normal,tn=!!nt.morphAttributes.color,Ye=ii;j.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ye=A.toneMapping);let Oe=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,gn=Oe!==void 0?Oe.length:0,Ot=tt.get(j),wn=M.state.lights;if(et===!0&&(ct===!0||I!==K)){let Ve=I===K&&j.id===V;Jt.setState(j,I,Ve)}let Me=!1;j.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==wn.state.version||Ot.outputColorSpace!==Nt||Q.isBatchedMesh&&Ot.batching===!1||!Q.isBatchedMesh&&Ot.batching===!0||Q.isBatchedMesh&&Ot.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&Ot.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&Ot.instancing===!1||!Q.isInstancedMesh&&Ot.instancing===!0||Q.isSkinnedMesh&&Ot.skinning===!1||!Q.isSkinnedMesh&&Ot.skinning===!0||Q.isInstancedMesh&&Ot.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ot.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Ot.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Ot.instancingMorph===!1&&Q.morphTexture!==null||Ot.envMap!==$t||j.fog===!0&&Ot.fog!==zt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==Jt.numPlanes||Ot.numIntersection!==Jt.numIntersection)||Ot.vertexAlphas!==de||Ot.vertexTangents!==ge||Ot.morphTargets!==Xt||Ot.morphNormals!==Ae||Ot.morphColors!==tn||Ot.toneMapping!==Ye||Ot.morphTargetsCount!==gn||!!Ot.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Me=!0):(Me=!0,Ot.__version=j.version);let Vn=Ot.currentProgram;Me===!0&&(Vn=ma(j,G,Q),L&&j.isNodeMaterial&&L.onUpdateProgram(j,Vn,Ot));let fi=!1,Gi=!1,Fs=!1,Ne=Vn.getUniforms(),Qe=Ot.uniforms;if(T.useProgram(Vn.program)&&(fi=!0,Gi=!0,Fs=!0),j.id!==V&&(V=j.id,Gi=!0),Ot.needsLights){let Ve=k0(M.state.lightProbeGridArray,Q);Ot.lightProbeGrid!==Ve&&(Ot.lightProbeGrid=Ve,Gi=!0)}if(fi||K!==I){T.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),Ne.setValue(H,"projectionMatrix",I.projectionMatrix),Ne.setValue(H,"viewMatrix",I.matrixWorldInverse);let Wi=Ne.map.cameraPosition;Wi!==void 0&&Wi.setValue(H,yt.setFromMatrixPosition(I.matrixWorld)),N.logarithmicDepthBuffer&&Ne.setValue(H,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ne.setValue(H,"isOrthographic",I.isOrthographicCamera===!0),K!==I&&(K=I,Gi=!0,Fs=!0)}if(Ot.needsLights&&(wn.state.sunShadowMap.length>0&&Ne.setValue(H,"sunShadowMap",wn.state.sunShadowMap,it),wn.state.directionalShadowMap.length>0&&Ne.setValue(H,"directionalShadowMap",wn.state.directionalShadowMap,it),wn.state.spotShadowMap.length>0&&Ne.setValue(H,"spotShadowMap",wn.state.spotShadowMap,it),wn.state.pointShadowMap.length>0&&Ne.setValue(H,"pointShadowMap",wn.state.pointShadowMap,it)),Q.isSkinnedMesh){Ne.setOptional(H,Q,"bindMatrix"),Ne.setOptional(H,Q,"bindMatrixInverse");let Ve=Q.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),Ne.setValue(H,"boneTexture",Ve.boneTexture,it))}Q.isBatchedMesh&&(Ne.setOptional(H,Q,"batchingTexture"),Ne.setValue(H,"batchingTexture",Q._matricesTexture,it),Ne.setOptional(H,Q,"batchingIdTexture"),Ne.setValue(H,"batchingIdTexture",Q._indirectTexture,it),Ne.setOptional(H,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ne.setValue(H,"batchingColorTexture",Q._colorsTexture,it));let Vi=nt.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&W.update(Q,nt,Vn),(Gi||Ot.receiveShadow!==Q.receiveShadow)&&(Ot.receiveShadow=Q.receiveShadow,Ne.setValue(H,"receiveShadow",Q.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&G.environment!==null&&(Qe.envMapIntensity.value=G.environmentIntensity),Qe.dfgLUT!==void 0&&(Qe.dfgLUT.value=o_()),Gi){if(Ne.setValue(H,"toneMappingExposure",A.toneMappingExposure),Ot.needsLights&&V0(Qe,Fs),zt&&j.fog===!0&&Kt.refreshFogUniforms(Qe,zt),Kt.refreshMaterialUniforms(Qe,j,k,U,M.state.transmissionRenderTarget[I.id]),Ot.needsLights&&Ot.lightProbeGrid){let Ve=Ot.lightProbeGrid;Qe.probesSH.value=Ve.texture,Qe.probesMin.value.copy(Ve.boundingBox.min),Qe.probesMax.value.copy(Ve.boundingBox.max),Qe.probesResolution.value.copy(Ve.resolution)}Cr.upload(H,cu(Ot),Qe,it)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Cr.upload(H,cu(Ot),Qe,it),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ne.setValue(H,"center",Q.center),Ne.setValue(H,"modelViewMatrix",Q.modelViewMatrix),Ne.setValue(H,"normalMatrix",Q.normalMatrix),Ne.setValue(H,"modelMatrix",Q.matrixWorld),j.uniformsGroups!==void 0){let Ve=j.uniformsGroups;for(let Wi=0,Os=Ve.length;Wi<Os;Wi++){let uu=Ve[Wi];mt.update(uu,Vn),mt.bind(uu,Vn)}}return Vn}function V0(I,G){I.ambientLightColor.needsUpdate=G,I.lightProbe.needsUpdate=G,I.sunLights.needsUpdate=G,I.sunLightShadows.needsUpdate=G,I.directionalLights.needsUpdate=G,I.directionalLightShadows.needsUpdate=G,I.pointLights.needsUpdate=G,I.pointLightShadows.needsUpdate=G,I.spotLights.needsUpdate=G,I.spotLightShadows.needsUpdate=G,I.rectAreaLights.needsUpdate=G,I.hemisphereLights.needsUpdate=G}function W0(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(I,G,nt){let j=tt.get(I);j.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),tt.get(I.texture).__webglTexture=G,tt.get(I.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:nt,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,G){let nt=tt.get(I);nt.__webglFramebuffer=G,nt.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(I,G=0,nt=0){J=I,z=G,F=nt;let j=null,Q=!1,zt=!1;if(I){let Nt=tt.get(I);if(Nt.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(H.FRAMEBUFFER,Nt.__webglFramebuffer),Z.copy(I.viewport),ot.copy(I.scissor),gt=I.scissorTest,T.viewport(Z),T.scissor(ot),T.setScissorTest(gt),V=-1;return}else if(Nt.__webglFramebuffer===void 0)it.setupRenderTarget(I);else if(Nt.__hasExternalTextures)it.rebindTextures(I,tt.get(I.texture).__webglTexture,tt.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let de=I.depthTexture;if(Nt.__boundDepthTexture!==de){if(de!==null&&tt.has(de)&&(I.width!==de.image.width||I.height!==de.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(I)}}let Wt=I.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(zt=!0);let $t=tt.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray($t[G])?j=$t[G][nt]:j=$t[G],Q=!0):I.samples>0&&it.useMultisampledRTT(I)===!1?j=tt.get(I).__webglMultisampledFramebuffer:Array.isArray($t)?j=$t[nt]:j=$t,Z.copy(I.viewport),ot.copy(I.scissor),gt=I.scissorTest}else Z.copy(ut).multiplyScalar(k).floor(),ot.copy(Y).multiplyScalar(k).floor(),gt=pt;if(nt!==0&&(j=D),T.bindFramebuffer(H.FRAMEBUFFER,j)&&T.drawBuffers(I,j),T.viewport(Z),T.scissor(ot),T.setScissorTest(gt),Q){let Nt=tt.get(I.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+G,Nt.__webglTexture,nt)}else if(zt){let Nt=G;for(let Wt=0;Wt<I.textures.length;Wt++){let $t=tt.get(I.textures[Wt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Wt,$t.__webglTexture,nt,Nt)}}else if(I!==null&&nt!==0){let Nt=tt.get(I.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Nt.__webglTexture,nt)}V=-1};function fu(I){let G=tt.get(I);return(G.__readFormat!==I.format||G.__readType!==I.type)&&(G.__readFormat=I.format,G.__readType=I.type,G.__formatReadable=N.textureFormatReadable(I.format),G.__typeReadable=N.textureTypeReadable(I.type)),G}this.readRenderTargetPixels=function(I,G,nt,j,Q,zt,Ht,Nt=0){if(!(I&&I.isWebGLRenderTarget)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=tt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ht!==void 0&&(Wt=Wt[Ht]),Wt){T.bindFramebuffer(H.FRAMEBUFFER,Wt);try{let $t=I.textures[Nt],de=$t.format,ge=$t.type;I.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Nt);let Xt=fu($t);if(Xt.__formatReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Xt.__typeReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=I.width-j&&nt>=0&&nt<=I.height-Q&&H.readPixels(G,nt,j,Q,Pt.convert(de),Pt.convert(ge),zt)}finally{let $t=J!==null?tt.get(J).__webglFramebuffer:null;T.bindFramebuffer(H.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(I,G,nt,j,Q,zt,Ht,Nt=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=tt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ht!==void 0&&(Wt=Wt[Ht]),Wt)if(G>=0&&G<=I.width-j&&nt>=0&&nt<=I.height-Q){T.bindFramebuffer(H.FRAMEBUFFER,Wt);let $t=I.textures[Nt],de=$t.format,ge=$t.type;I.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Nt);let Xt=fu($t);if(Xt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Xt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ae=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ae),H.bufferData(H.PIXEL_PACK_BUFFER,zt.byteLength,H.STREAM_READ),H.readPixels(G,nt,j,Q,Pt.convert(de),Pt.convert(ge),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let tn=J!==null?tt.get(J).__webglFramebuffer:null;T.bindFramebuffer(H.FRAMEBUFFER,tn);let Ye=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Cd(H,Ye,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ae),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,zt),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(Ae),H.deleteSync(Ye),zt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,G=null,nt=0){let j=Math.pow(2,-nt),Q=Math.floor(I.image.width*j),zt=Math.floor(I.image.height*j),Ht=G!==null?G.x:0,Nt=G!==null?G.y:0;it.setTexture2D(I,0),H.copyTexSubImage2D(H.TEXTURE_2D,nt,0,0,Ht,Nt,Q,zt),T.unbindTexture()},this.copyTextureToTexture=function(I,G,nt=null,j=null,Q=0,zt=0){let Ht,Nt,Wt,$t,de,ge,Xt,Ae,tn,Ye=I.isCompressedTexture?I.mipmaps[zt]:I.image;if(nt!==null)Ht=nt.max.x-nt.min.x,Nt=nt.max.y-nt.min.y,Wt=nt.isBox3?nt.max.z-nt.min.z:1,$t=nt.min.x,de=nt.min.y,ge=nt.isBox3?nt.min.z:0;else{let Qe=Math.pow(2,-Q);Ht=Math.floor(Ye.width*Qe),Nt=Math.floor(Ye.height*Qe),I.isDataArrayTexture?Wt=Ye.depth:I.isData3DTexture?Wt=Math.floor(Ye.depth*Qe):Wt=1,$t=0,de=0,ge=0}j!==null?(Xt=j.x,Ae=j.y,tn=j.z):(Xt=0,Ae=0,tn=0);let Oe=Pt.convert(G.format),gn=Pt.convert(G.type),Ot;G.isData3DTexture?(it.setTexture3D(G,0),Ot=H.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(it.setTexture2DArray(G,0),Ot=H.TEXTURE_2D_ARRAY):(it.setTexture2D(G,0),Ot=H.TEXTURE_2D),T.activeTexture(H.TEXTURE0),T.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,G.flipY),T.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),T.pixelStorei(H.UNPACK_ALIGNMENT,G.unpackAlignment);let wn=T.getParameter(H.UNPACK_ROW_LENGTH),Me=T.getParameter(H.UNPACK_IMAGE_HEIGHT),Vn=T.getParameter(H.UNPACK_SKIP_PIXELS),fi=T.getParameter(H.UNPACK_SKIP_ROWS),Gi=T.getParameter(H.UNPACK_SKIP_IMAGES);T.pixelStorei(H.UNPACK_ROW_LENGTH,Ye.width),T.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ye.height),T.pixelStorei(H.UNPACK_SKIP_PIXELS,$t),T.pixelStorei(H.UNPACK_SKIP_ROWS,de),T.pixelStorei(H.UNPACK_SKIP_IMAGES,ge);let Fs=I.isDataArrayTexture||I.isData3DTexture,Ne=G.isDataArrayTexture||G.isData3DTexture;if(I.isDepthTexture){let Qe=tt.get(I),Vi=tt.get(G),Ve=tt.get(Qe.__renderTarget),Wi=tt.get(Vi.__renderTarget);T.bindFramebuffer(H.READ_FRAMEBUFFER,Ve.__webglFramebuffer),T.bindFramebuffer(H.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let Os=0;Os<Wt;Os++)Fs&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,tt.get(I).__webglTexture,Q,ge+Os),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,tt.get(G).__webglTexture,zt,tn+Os)),H.blitFramebuffer($t,de,Ht,Nt,Xt,Ae,Ht,Nt,H.DEPTH_BUFFER_BIT,H.NEAREST);T.bindFramebuffer(H.READ_FRAMEBUFFER,null),T.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Q!==0||I.isRenderTargetTexture||tt.has(I)){let Qe=tt.get(I),Vi=tt.get(G);T.bindFramebuffer(H.READ_FRAMEBUFFER,R),T.bindFramebuffer(H.DRAW_FRAMEBUFFER,C);for(let Ve=0;Ve<Wt;Ve++)Fs?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Qe.__webglTexture,Q,ge+Ve):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Qe.__webglTexture,Q),Ne?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Vi.__webglTexture,zt,tn+Ve):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Vi.__webglTexture,zt),Q!==0?H.blitFramebuffer($t,de,Ht,Nt,Xt,Ae,Ht,Nt,H.COLOR_BUFFER_BIT,H.NEAREST):Ne?H.copyTexSubImage3D(Ot,zt,Xt,Ae,tn+Ve,$t,de,Ht,Nt):H.copyTexSubImage2D(Ot,zt,Xt,Ae,$t,de,Ht,Nt);T.bindFramebuffer(H.READ_FRAMEBUFFER,null),T.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ne?I.isDataTexture||I.isData3DTexture?H.texSubImage3D(Ot,zt,Xt,Ae,tn,Ht,Nt,Wt,Oe,gn,Ye.data):G.isCompressedArrayTexture?H.compressedTexSubImage3D(Ot,zt,Xt,Ae,tn,Ht,Nt,Wt,Oe,Ye.data):H.texSubImage3D(Ot,zt,Xt,Ae,tn,Ht,Nt,Wt,Oe,gn,Ye):I.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,zt,Xt,Ae,Ht,Nt,Oe,gn,Ye.data):I.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,zt,Xt,Ae,Ye.width,Ye.height,Oe,Ye.data):H.texSubImage2D(H.TEXTURE_2D,zt,Xt,Ae,Ht,Nt,Oe,gn,Ye);T.pixelStorei(H.UNPACK_ROW_LENGTH,wn),T.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Me),T.pixelStorei(H.UNPACK_SKIP_PIXELS,Vn),T.pixelStorei(H.UNPACK_SKIP_ROWS,fi),T.pixelStorei(H.UNPACK_SKIP_IMAGES,Gi),zt===0&&G.generateMipmaps&&H.generateMipmap(Ot),T.unbindTexture()},this.initRenderTarget=function(I){tt.get(I).__webglFramebuffer===void 0&&it.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?it.setTextureCube(I,0):I.isData3DTexture?it.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?it.setTexture2DArray(I,0):it.setTexture2D(I,0),T.unbindTexture()},this.resetState=function(){z=0,F=0,J=null,T.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ye._getDrawingBufferColorSpace(t),e.unpackColorSpace=ye._getUnpackColorSpace()}};var Ko=class extends Ii{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new qt;t.deleteAttribute("uv");let e=new Ut({side:ln}),n=new Ut,s=new No(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new B(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new mo(t,n,6),a=new nn;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let c=new B(t,Pr(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new B(t,Pr(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new B(t,Pr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new B(t,Pr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new B(t,Pr(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new B(t,Pr(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Pr(i){return new Io({color:0,emissive:16777215,emissiveIntensity:i})}var zi=[{id:0,name:"Bubbles",tag:"The Royal Bean",color:"#ff5fb4"},{id:1,name:"Ninja",tag:"The Silent Bean",color:"#3b82f6"},{id:2,name:"Dino",tag:"The Chunky Dino",color:"#3ddc84"},{id:3,name:"Robo",tag:"The Bolt Bot",color:"#ffc233"}],Jo=[{id:0,key:"fun",name:"Fun Map",sub:"Chill",stars:1,limit:400,finishZ:-424,finishY:.15,colors:["#80ed99","#4cc9f0"],blurb:"Giant theme park: rides, highways with cars to drive, a SKY SPEEDWAY to win red racers, then the maze. Nothing can kill you!"},{id:1,key:"jungle",name:"Jungle",sub:"Free Roam",stars:1,limit:0,finishZ:-99999,finishY:99999,free:!0,colors:["#6bbf59","#ffd23f"],blurb:"Wild lion, leopard, elephant & horse roam the trees. Beat them with the BAT to tame them as pets and RIDE them - then climb the hill and free the DINOSAUR! No race, just fun."},{id:2,key:"quest",name:"Jungle Quest",sub:"Team Co-op",stars:2,limit:0,finishZ:-99999,finishY:99999,free:!0,quest:!0,colors:["#7b3fe4","#ffd23f"],blurb:"Walk the long road with your team! Solve 5 mazes, stand on the glowing circles together to drop the boulder, beat each beast with the BAT to open the gate - then FREE THE DRAGON! Nobody can die."},{id:3,key:"arena",name:"Small Room",sub:"Bat Fight",stars:1,limit:0,finishZ:-99999,finishY:99999,free:!0,arena:!0,hidden:!0,colors:["#cfe3ff","#ffd9a8"],blurb:"One small plain room, everybody in sight. Beat each other with the BAT! A high SLIDE to ride and 4 BUNGEE pads - nothing else."},{id:4,key:"maze",name:"Maze",sub:"Obstacle Race",stars:3,limit:900,finishZ:-715.5,finishY:0,colors:["#ff6b9d","#4cc9f0"],blurb:"A long candy-park race: doors to dash through, water to hop over, giant fans, GRAB-SWINGS, a boat ride, huge hammers and seesaws. Be first to the finish!"},{id:5,key:"annoy",name:"Annoying Maze",sub:"Tricky Race",stars:4,limit:900,finishZ:-297,finishY:0,colors:["#b58cff","#ff6b9d"],blurb:"5 coloured tunnels (only one goes through!), 2 ferris wheels, a fan over the water, trampolines, flag platforms with giant slamming blades, 5 cutters - and a tiny safe lane on the right."},{id:6,key:"hunt",name:"Jungle Hunt",sub:"Gun Co-op",stars:4,limit:0,finishZ:-99999,finishY:99999,free:!0,hunt:!0,colors:["#2e9b3f","#ff8a1c"],blurb:"Grab the GUN (unlimited bullets, auto-aim) and work as a TEAM through 6 chapters: shoot the beast packs, then solve machines together - weight plates & gear door, counterweight lift, crushers (swap who holds the plate), a cannon over a canyon, a pump bridge and a final colour-pad riddle. Nobody can die!"}];var jo=new O;function qn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;jo.copy(t),jo[n]=0,jo.normalize();let l=.5*o/(o+a),h=1-jo.angleTo(i)/c;return Math.sign(jo[e])===1?h*l:a/(o+a)+l+l*(1-h)}var Lr=class i extends qt{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new O,l=new O,h=new O(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,g=u.length/6,y=new O,p=.5/o;for(let m=0,E=0;m<u.length;m+=3,E+=2)switch(c.fromArray(u,m),l.copy(c),l.x-=Math.sign(l.x)*p,l.y-=Math.sign(l.y)*p,l.z-=Math.sign(l.z)*p,l.normalize(),u[m+0]=h.x*Math.sign(c.x)+l.x*r,u[m+1]=h.y*Math.sign(c.y)+l.y*r,u[m+2]=h.z*Math.sign(c.z)+l.z*r,f[m+0]=l.x,f[m+1]=l.y,f[m+2]=l.z,Math.floor(m/g)){case 0:y.set(1,0,0),d[E+0]=qn(y,l,"z","y",r,n),d[E+1]=1-qn(y,l,"y","z",r,e);break;case 1:y.set(-1,0,0),d[E+0]=1-qn(y,l,"z","y",r,n),d[E+1]=1-qn(y,l,"y","z",r,e);break;case 2:y.set(0,1,0),d[E+0]=1-qn(y,l,"x","z",r,t),d[E+1]=qn(y,l,"z","x",r,n);break;case 3:y.set(0,-1,0),d[E+0]=1-qn(y,l,"x","z",r,t),d[E+1]=1-qn(y,l,"z","x",r,n);break;case 4:y.set(0,0,1),d[E+0]=1-qn(y,l,"x","y",r,t),d[E+1]=1-qn(y,l,"y","x",r,e);break;case 5:y.set(0,0,-1),d[E+0]=qn(y,l,"x","y",r,t),d[E+1]=1-qn(y,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};function mp(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new ze,l=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=pp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let y=0;y<o[h].length;++y)d.push(o[h][y][f]);let g=pp(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}function pp(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new We(o,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){let y=h.getComponent(f,g);a.setComponent(f+u,g,y)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function a_(i,t,e){let n=document.createElement("canvas");n.width=t,n.height=e;let s=n.getContext("2d");if(i==="pk"){s.fillStyle="#01411c",s.fillRect(0,0,t,e),s.fillStyle="#ffffff",s.fillRect(0,0,t*.25,e);let o=t*.625,a=e*.5,c=e*.31;s.beginPath(),s.arc(o,a,c,0,Math.PI*2),s.fillStyle="#ffffff",s.fill(),s.beginPath(),s.arc(o+c*.27,a-c*.14,c*.8,0,Math.PI*2),s.fillStyle="#01411c",s.fill();let l=o+c*.46,h=a-c*.36,u=c*.36,f=u*.382;s.beginPath();for(let d=0;d<10;d++){let g=-Math.PI/2+d*Math.PI/5+.52,y=d%2?f:u;s.lineTo(l+Math.cos(g)*y,h+Math.sin(g)*y)}s.closePath(),s.fillStyle="#ffffff",s.fill()}else i==="es"?(s.fillStyle="#aa151b",s.fillRect(0,0,t,e),s.fillStyle="#f1bf00",s.fillRect(0,e/4,t,e/2),l_(s,t*.36,e*.5,e*.42)):(s.fillStyle="#000000",s.fillRect(0,0,t,e/3),s.fillStyle="#ffffff",s.fillRect(0,e/3,t,e/3),s.fillStyle="#007a3d",s.fillRect(0,e*2/3,t,e/3),s.beginPath(),s.moveTo(0,0),s.lineTo(t*.33,e/2),s.lineTo(0,e),s.closePath(),s.fillStyle="#ce1126",s.fill());let r=new Rn(n);return r.colorSpace=Be,r.anisotropy=4,r}function l_(i,t,e,n){let s="#d9a400",r="#c8102e",o="#0b3d91",a="#f4f4f4",c="#7a2a8a";for(let m of[-1,1])i.fillStyle="#ffffff",i.fillRect(t+m*n*.98-n*.09,e-n*.62,n*.18,n*1.18),i.fillStyle="#b6b6b6",i.fillRect(t+m*n*.98+(m>0?0:-n*.03),e-n*.62,n*.03,n*1.18),i.fillStyle=s,i.fillRect(t+m*n*.98-n*.14,e-n*.7,n*.28,n*.1),i.fillRect(t+m*n*.98-n*.14,e+n*.54,n*.28,n*.08),i.beginPath(),i.arc(t+m*n*.98,e-n*.78,n*.1,0,Math.PI*2),i.fillStyle=s,i.fill(),i.fillStyle=r,i.fillRect(t+m*n*.98-n*.1,e-n*.52,n*.2,n*.1);i.fillStyle=r,i.fillRect(t-n*.95,e+n*.1,n*1.9,n*.16),i.fillStyle="#ffffff",i.fillRect(t-n*.9,e+n*.13,n*1.8,n*.04);let l=n*1.16,h=n*1.3,u=t-l/2,f=e-h*.45;i.save(),i.beginPath(),i.moveTo(u,f),i.lineTo(u+l,f),i.lineTo(u+l,f+h*.55),i.quadraticCurveTo(u+l,f+h,t,f+h),i.quadraticCurveTo(u,f+h,u,f+h*.55),i.closePath(),i.clip(),i.fillStyle=r,i.fillRect(u,f,l/2,h*.5),i.fillStyle=a,i.fillRect(u+l/2,f,l/2,h*.5),i.fillStyle=s,i.fillRect(u,f+h*.5,l/2,h*.5);for(let m=0;m<4;m++)i.fillStyle=r,i.fillRect(u+l*.07+m*l*.115,f+h*.5,l*.055,h*.5);i.fillStyle=r,i.fillRect(u+l/2,f+h*.5,l/2,h*.5),i.strokeStyle=s,i.lineWidth=n*.03,i.beginPath(),i.moveTo(u+l/2,f+h*.5),i.lineTo(u+l,f+h*.5),i.moveTo(u+l*.75,f+h*.5),i.lineTo(u+l*.75,f+h),i.moveTo(u+l/2,f+h*.75),i.lineTo(u+l,f+h*.75),i.stroke(),i.fillStyle=s;let d=u+l*.25,g=f+h*.27;i.fillRect(d-l*.11,g-h*.02,l*.22,h*.17),i.fillRect(d-l*.06,g-h*.1,l*.12,h*.1);for(let m of[-.11,-.04,.03])i.fillRect(d+l*m,g-h*.15,l*.04,h*.06);i.fillStyle=o,i.fillRect(d-l*.025,g+h*.05,l*.05,h*.1),i.fillStyle=c;let y=u+l*.75,p=f+h*.27;i.beginPath(),i.ellipse(y,p,l*.1,h*.1,0,0,Math.PI*2),i.fill(),i.beginPath(),i.arc(y+l*.08,p-h*.09,l*.05,0,Math.PI*2),i.fill(),i.fillRect(y-l*.12,p+h*.04,l*.05,h*.1),i.fillRect(y+l*.05,p+h*.04,l*.05,h*.1),i.fillStyle=r,i.beginPath(),i.arc(t,f+h*.9,l*.08,0,Math.PI*2),i.fill(),i.fillStyle="#2e7d32",i.fillRect(t-l*.02,f+h*.8,l*.04,h*.05),i.restore(),i.strokeStyle="#1a1a1a",i.lineWidth=n*.025,i.beginPath(),i.moveTo(u,f),i.lineTo(u+l,f),i.lineTo(u+l,f+h*.55),i.quadraticCurveTo(u+l,f+h,t,f+h),i.quadraticCurveTo(u,f+h,u,f+h*.55),i.closePath(),i.stroke(),i.beginPath(),i.ellipse(t,e+h*.02,l*.17,h*.2,0,0,Math.PI*2),i.fillStyle=o,i.fill(),i.lineWidth=n*.025,i.strokeStyle=r,i.stroke(),i.fillStyle=a;for(let[m,E]of[[-.06,-.06],[.06,-.06],[0,.07]])i.beginPath(),i.arc(t+l*m,e+h*(.02+E),l*.03,0,Math.PI*2),i.fill();i.fillStyle=s,i.beginPath(),i.moveTo(t-l*.28,f-h*.02),i.lineTo(t-l*.28,f-h*.2),i.lineTo(t-l*.14,f-h*.12),i.lineTo(t,f-h*.24),i.lineTo(t+l*.14,f-h*.12),i.lineTo(t+l*.28,f-h*.2),i.lineTo(t+l*.28,f-h*.02),i.closePath(),i.fill(),i.beginPath(),i.arc(t,f-h*.3,l*.06,0,Math.PI*2),i.fill(),i.fillStyle=r,i.fillRect(t-l*.2,f-h*.11,l*.4,h*.05)}var gp={};function Qo(i){return gp[i]||(gp[i]=a_(i,768,512))}function ta(i,t,e){let n=new xt,s=new B(new Ze(t,e),new oe({map:Qo(i),toneMapped:!1,side:$e}));n.add(s);let r=new B(new qt(t+1.2,e+1.2,.3),new Ut({color:"#f4f1e8",roughness:.5}));return r.position.z=-.2,n.add(r),n}var c_='"Noto Nastaliq Urdu","Jameel Noori Nastaleeq","Alvi Nastaleeq","Geeza Pro","Segoe UI","Tahoma","Arial",sans-serif',h_='"Lilita One","Fredoka One","Arial Rounded MT Bold","Trebuchet MS",Impact,Arial,sans-serif';function f_(i,t,e={}){let s=Math.round(1024/t),r=document.createElement("canvas");r.width=1024,r.height=s;let o=r.getContext("2d"),a=o.createLinearGradient(0,0,1024,s);a.addColorStop(0,(e.bg||["#1b1464","#3a2d9e"])[0]),a.addColorStop(1,(e.bg||["#1b1464","#3a2d9e"])[1]),o.fillStyle=a,o.fillRect(0,0,1024,s),o.lineWidth=s*.05,o.strokeStyle=e.border||"#ffd23f",o.strokeRect(s*.05,s*.05,1024-s*.1,s-s*.1);let c=e.urdu?c_:h_,l=s*(e.urdu?.36:.5);o.textAlign="center",o.textBaseline="alphabetic",e.urdu&&(o.direction="rtl");let h=1024*(e.urdu?.62:.86),u=s*(e.urdu?.6:.62),f=l*.8,d=l*.2;for(let p=0;p<3;p++){o.font=`${l}px ${c}`;let m=o.measureText(i);f=m.actualBoundingBoxAscent>0?m.actualBoundingBoxAscent:l*.8,d=m.actualBoundingBoxDescent>0?m.actualBoundingBoxDescent:l*.2;let E=Math.min(1,h/Math.max(1,m.width),u/Math.max(1,f+d));if(E>=.99)break;l*=E}let g=s/2+(f-d)/2;o.lineJoin="round",o.lineWidth=l*.12,o.strokeStyle=e.stroke||"#000000",o.strokeText(i,1024/2,g),o.fillStyle=e.fg||"#ffd23f",o.fillText(i,1024/2,g);let y=new Rn(r);return y.colorSpace=Be,y.anisotropy=4,y}function He(i,t,e,n={}){let s=new xt;s.add(new B(new Ze(t,e),new oe({map:f_(i,t/e,n),toneMapped:!1,side:$e})));let r=new B(new qt(t+.8,e+.8,.3),new Ut({color:n.frame||"#f4f1e8",roughness:.5}));return r.position.z=-.2,s.add(r),s}var ve={R:.42,H:1.55,STEP:.34,EDGE:.28,G:34,RUN:9.4,JUMP:12.2,ACC:70,AIR:22,DEC:95,AIR_DEC:9,ICE_ACC:11,ICE_DEC:5.5,TERM:-50,SNAP:.5},oi=(i,t,e)=>i<t?t:i>e?e:i,xp=new Bn,yp=new On,vp=new Se,_p=new O,Mp=new O,cs=new kt,Ui=class{constructor(){this.list=[]}add(t,e,n,s,r,o=0,a=0,c=0,l=1,h=1,u=1,f="XYZ"){xp.set(o,a,c,f),yp.setFromEuler(xp),_p.set(e,n,s),Mp.set(l,h,u),vp.compose(_p,yp,Mp);let d=t.index?t.toNonIndexed():t.clone();d.attributes.uv&&d.deleteAttribute("uv"),d.applyMatrix4(vp);let g=d.attributes.position.count,y=new Float32Array(g*3);cs.set(r);for(let p=0;p<g;p++)y[p*3]=cs.r,y[p*3+1]=cs.g,y[p*3+2]=cs.b;d.setAttribute("color",new We(y,3)),this.list.push(d)}addGeo(t){t.index&&(t=t.toNonIndexed()),t.attributes.uv&&t.deleteAttribute("uv"),this.list.push(t)}build(t){if(!this.list.length)return null;let e=mp(this.list,!1);return this.list.length=0,new B(e,t)}};var Mc=class{constructor(t,e=!1){this.theme=t,this.headless=e,this.group=new xt,this.solids=[],this.ramps=[],this.discs=[],this.hazards=[],this.updaters=[],this.checkpoints=[],this.zones=[],this.pools=[],this.winds=[],this.swings=[],this.main=new Ui,this.glow=new Ui,this.waterY=-5,this.killY=-9,this.geoCache=new Map,this.matCache=new Map,this.colorIdx=0,this.arrowTexture=null,this.time=0,this.hitOut={nx:0,nz:1,pow:10},this.onEvent=null}rbox(t,e,n,s){let r=Math.max(.02,Math.min(s,t/2-.01,e/2-.01,n/2-.01)),o=`${t.toFixed(2)}|${e.toFixed(2)}|${n.toFixed(2)}|${r.toFixed(2)}`,a=this.geoCache.get(o);return a||(a=Math.min(t,e,n)<.35?new qt(t,e,n):new Lr(t,e,n,2,r),this.geoCache.set(o,a)),a}mat(t,e={}){var r,o,a,c;let n=t+JSON.stringify(e),s=this.matCache.get(n);return s||(s=new Ut({color:t,roughness:(r=e.rough)!=null?r:.38,metalness:(o=e.metal)!=null?o:.02,emissive:(a=e.emissive)!=null?a:0,emissiveIntensity:(c=e.ei)!=null?c:1}),this.matCache.set(n,s)),s}pick(){let t=this.theme.plat;return t[this.colorIdx++%t.length]}addSolid(t,e,n,s,r,o,a={}){let c={x0:t,y0:e,z0:n,x1:s,y1:r,z1:o,active:!0,ice:!!a.ice,conv:a.conv||null,bounce:a.bounce||0,boost:a.boost||0,dx:0,dy:0,dz:0,moving:!1,name:a.name||""};return this.solids.push(c),c}add(t,e=!0,n=!0){return t.castShadow=e,t.receiveShadow=n,this.group.add(t),t}emit(t,e){this.onEvent&&this.onEvent(t,e)}platform(t,e,n,s,r,o={}){var h,u,f;let a=(h=o.h)!=null?h:1.6,c=(u=o.color)!=null?u:this.pick(),l=this.addSolid(t-s/2,e-a,n-r/2,t+s/2,e,n+r/2,o);if(!this.headless){if(this.main.add(this.rbox(s,a,r,.3),t,e-a/2,n,c),o.pad!==!1&&s>2.4&&r>2.4){let d=(f=o.padColor)!=null?f:o.ice?this.theme.icePad:this.theme.pad;this.main.add(this.rbox(s-1.1,.12,r-1.1,.05),t,e+0,n,d)}if(this.theme.edgeGlow){let d=this.theme.edgeGlow;this.glow.add(this.rbox(s+.04,.12,.12,.03),t,e-.08,n+r/2,d),this.glow.add(this.rbox(s+.04,.12,.12,.03),t,e-.08,n-r/2,d),this.glow.add(this.rbox(.12,.12,r+.04,.03),t+s/2,e-.08,n,d),this.glow.add(this.rbox(.12,.12,r+.04,.03),t-s/2,e-.08,n,d)}}return l}disc(t,e,n,s,r={}){var u,f,d,g,y,p,m,E,S,x;let o=(u=r.omega)!=null?u:0,a=(f=r.h)!=null?f:1.4,c={cx:t,cz:n,top:e,r:s,th:a,omega:o,phase:(d=r.phase)!=null?d:0,bounce:r.bounce||0,push:r.push||null,ice:!!r.ice,theta:(g=r.phase)!=null?g:0,dTheta:0,kind:"disc",squash:0,first:!0};if(this.discs.push(c),this.headless)return c;if(r.fan){let _=new xt;_.position.set(t,e,n);let M=new B(new we(s,.32,10,40),this.mat((y=r.color)!=null?y:"#ff3d68",{rough:.3}));M.rotation.x=Math.PI/2,_.add(M);let w=new B(new ft(s-.2,s-.2,.18,40),this.mat("#dff6ff",{rough:.5}));w.position.y=-.12,_.add(w);let v=new xt;for(let D=0;D<4;D++){let R=new B(this.rbox(s*.95,.12,1.1,.04),this.mat(D%2?"#ffffff":"#ffd23f"));R.position.set(s*.5,.08,0);let C=new xt;C.rotation.y=D*Math.PI/2,C.add(R),v.add(C)}let b=new B(new ft(.55,.55,.5,14),this.mat("#ffffff"));b.position.y=.1,_.add(b,v),this.add(_);let A=new B(new ft(.5,.7,14,10),this.mat(this.theme.hub));A.position.set(t,e-8,n),this.group.add(A);let P=new oe({color:"#ffffff",transparent:!0,opacity:.45,depthWrite:!1,toneMapped:!1}),L=[];for(let D=0;D<6;D++){let R=new B(new qt(.07,1.6,.07),P);this.group.add(R),L.push({m:R,k:D/6,a:D*1.9})}return c.mesh=_,this.updaters.push((D,R)=>{v.rotation.y=-D*14,c.squash=Math.max(0,c.squash-R*4);for(let C of L){let z=(C.k+D*.7)%1;C.m.position.set(t+Math.cos(C.a)*s*.6*(.3+z),e+.3+z*5,n+Math.sin(C.a)*s*.6*(.3+z)),P.opacity=.4}}),c}if(r.bounce){let _=new xt;_.position.set(t,e,n);let M=new B(new ft(s*.55,s*.7,1.4,20),this.mat((p=r.stem)!=null?p:"#fff3d6"));M.position.y=-.7;let w=new B(new ue(s,28,14,0,Math.PI*2,0,Math.PI/2),this.mat((m=r.color)!=null?m:"#ff3b6b",{rough:.25}));w.scale.y=.45,w.position.y=-.05,_.add(M,w);for(let v=0;v<6;v++){let b=new B(new ue(.26,10,8),this.mat("#ffffff")),A=v/6*Math.PI*2;b.position.set(Math.cos(A)*s*.62,.34*(1-.3),Math.sin(A)*s*.62),b.scale.y=.4,_.add(b)}return this.add(_),c.mesh=_,this.updaters.push((v,b)=>{c.squash=Math.max(0,c.squash-b*4);let A=1-Math.sin(c.squash*Math.PI)*.35*c.squash;_.scale.set(1+(1-A)*.5,A,1+(1-A)*.5)}),c}let l=(E=r.color)!=null?E:this.pick(),h=new ft(s,s,a,40);if(o===0)this.main.add(h,t,e-a/2,n,l),this.main.add(new ft(s-.5,s-.5,.12,40),t,e,n,(S=r.padColor)!=null?S:this.theme.pad),this.theme.edgeGlow&&this.glow.add(new we(s,.07,6,48),t,e-.1,n,this.theme.edgeGlow,Math.PI/2);else{let _=new xt;_.position.set(t,e,n);let M=new B(h,this.mat(l));M.position.y=-a/2;let w=new B(new ft(s-.5,s-.5,.12,40),this.mat((x=r.padColor)!=null?x:this.theme.pad));_.add(M,w);for(let v=0;v<4;v++){let b=new B(this.rbox(s*1.6,.14,.6,.05),this.mat(this.theme.hazard2));b.position.y=.06,b.rotation.y=v*Math.PI/4,_.add(b)}if(this.theme.edgeGlow){let v=new B(new we(s,.08,6,48),new oe({color:this.theme.edgeGlow,toneMapped:!1}));v.rotation.x=Math.PI/2,v.position.y=-.1,_.add(v)}this.add(_),c.mesh=_,this.updaters.push(v=>{_.rotation.y=c.theta})}return c}ramp(t,e,n,s,r,o,a={}){var F,J;let c={x0:t-o/2,x1:t+o/2,zN:e,zF:s,yN:n,yF:r,conv:a.conv||null,ice:!!a.ice,kind:"ramp"};if(this.ramps.push(c),this.headless)return c;let l=Math.min(n,r)-1.6,h=(F=a.color)!=null?F:this.pick(),u=(V,K,Z)=>[V,K,Z],f=u(c.x0,n,e),d=u(c.x1,n,e),g=u(c.x1,r,s),y=u(c.x0,r,s),p=u(c.x0,l,e),m=u(c.x1,l,e),E=u(c.x1,l,s),S=u(c.x0,l,s),x=[],_=(V,K,Z,ot)=>{x.push(...V,...K,...Z,...V,...Z,...ot)};_(f,y,g,d),_(f,d,m,p),_(g,y,S,E),_(y,f,p,S),_(d,g,E,m);let M=new ze;M.setAttribute("position",new xe(x,3)),M.computeVertexNormals();let w=x.length/3,v=new Float32Array(w*3);cs.set(h);for(let V=0;V<w;V++)v[V*3]=cs.r,v[V*3+1]=cs.g,v[V*3+2]=cs.b;M.setAttribute("color",new We(v,3)),this.main.addGeo(M);let b=e-s,A=r-n,P=Math.hypot(b,A),L=Math.atan2(A,b),D=(e+s)/2,R=(n+r)/2,C=-Math.sin(L),z=Math.cos(L);return this.main.add(this.rbox(o-1.6,.1,P-.6,.04),t,R+z*.02,D+C*.02*0,(J=a.padColor)!=null?J:a.ice?this.theme.icePad:this.theme.pad,L,0,0),c}mover(t,e,n,s,r,o,a={}){var y,p,m;let c=(y=a.h)!=null?y:1.5,l=this.addSolid(t-s/2,e-c,n-r/2,t+s/2,e,n+r/2,a);l.moving=!0,l.first=!0;let h=null;if(!this.headless){if(h=new B(this.rbox(s,c,r,.28),this.mat((p=a.color)!=null?p:this.pick(),{rough:.3})),a.pad!==!1){let E=new B(this.rbox(s-1,.12,r-1,.05),this.mat((m=a.padColor)!=null?m:this.theme.pad));E.position.y=c/2,h.add(E)}if(a.stripes){let E=new B(this.rbox(s+.02,.4,r+.02,.05),this.mat(this.theme.hazard));E.position.y=0,h.add(E)}this.add(h)}let u=0,f=0,d=0,g=E=>{let[S,x,_]=o(E);l.x0=t-s/2+S,l.x1=t+s/2+S,l.y0=e-c+x,l.y1=e+x,l.z0=n-r/2+_,l.z1=n+r/2+_,l.first&&(u=S,f=x,d=_,l.first=!1),l.dx=S-u,l.dy=x-f,l.dz=_-d,u=S,f=x,d=_,h&&h.position.set(t+S,e-c/2+x,n+_)};return g(0),this.updaters.push(E=>g(E)),l}tile(t,e,n,s,r,o={}){var y,p,m,E,S,x;let a=(y=o.period)!=null?y:4.8,c=(p=o.solidT)!=null?p:2.4,l=(m=o.warn)!=null?m:.8,h=(E=o.off)!=null?E:0,u=this.addSolid(t-s/2,e-1,n-r/2,t+s/2,e,n+r/2,o),f=null,d=null;this.headless||(d=new Ut({color:(S=o.color)!=null?S:this.pick(),roughness:.3,emissive:0}),f=new B(this.rbox(s,1,r,.22),d),f.position.set(t,e-.5,n),this.add(f));let g=new kt((x=o.color)!=null?x:"#ffffff");return this.updaters.push(_=>{let M=((_+h)%a+a)%a;M<c?(u.active=!0,f&&(f.visible=!0,f.position.x=t,d.emissive.setRGB(0,0,0))):M<c+l?(u.active=!0,f&&(f.visible=!0,f.position.x=t+Math.sin(_*70)*.07,d.emissive.setRGB(.55,.05,.02))):(u.active=!1,f&&(f.visible=!1))}),u}conveyor(t,e,n,s,r,o,a={}){let c=this.addSolid(t-s/2,e-1.4,n-r/2,t+s/2,e,n+r/2,{...a,conv:[0,o]});if(this.headless)return c;this.main.add(this.rbox(s,1.4,r,.25),t,e-.7,n,this.theme.convBase);let l=new Ze(s-1.2,r-.6),h=this.arrowTexture?this.arrowTexture.clone():null;h&&(h.needsUpdate=!0,h.wrapS=h.wrapT=rr,h.repeat.set(Math.max(1,Math.round((s-1.2)/2.4)),Math.max(1,Math.round((r-.6)/2.4))));let u=new B(l,new Ut({color:this.theme.belt,map:h,roughness:.6}));u.rotation.x=-Math.PI/2,o>0&&(u.rotation.z=Math.PI),u.position.set(t,e+.03,n),this.add(u,!1,!0);let f=Math.abs(o);return this.updaters.push((d,g)=>{h&&(h.offset.y-=f*g/2.4/(r-.6)*h.repeat.y)}),c}bar(t,e,n,s,r={}){var E,S,x,_,M,w,v;let o=(E=r.w)!=null?E:1.2,a=(S=r.h)!=null?S:1.2,c=(x=r.omega)!=null?x:1.4,l=(_=r.phase)!=null?_:0,h=(M=r.arms)!=null?M:1,u={type:"bar",test:(b,A,P)=>{if(b.y>e+a||b.y+ve.H<e)return!1;let L=b.x-t,D=b.z-n;if(L*L+D*D>(s/2+1.2)*(s/2+1.2))return!1;let R=l+c*A;for(let C=0;C<h;C++){let z=R+C*Math.PI/h,F=Math.cos(z),J=Math.sin(z),V=L*F-D*J,K=L*J+D*F,Z=oi(V,-s/2,s/2),ot=oi(K,-o/2,o/2),gt=V-Z,Yt=K-ot;if(gt*gt+Yt*Yt<ve.R*ve.R){let At=Math.hypot(L,D)||.001,Gt=c*D,U=-c*L,k=Math.hypot(Gt,U)||1;Gt/=k,U/=k;let rt=Gt+L/At*.45,Mt=U+D/At*.45,ut=Math.hypot(rt,Mt)||1;return P.nx=rt/ut,P.nz=Mt/ut,P.pow=oi(6+Math.abs(c)*At*1.15,9,21),!0}}return!1}};if(this.hazards.push(u),this.headless)return u;let f=new xt;f.position.set(t,e+a/2,n);let d=Math.max(3,Math.round(s/2.4)),g=s/d,y=this.mat((w=r.color1)!=null?w:this.theme.hazard,{rough:.3}),p=this.mat((v=r.color2)!=null?v:this.theme.hazard2,{rough:.3});for(let b=0;b<h;b++){let A=new xt;A.rotation.y=b*Math.PI/h;for(let P=0;P<d;P++){let L=new B(this.rbox(g*.995,a,o,.25),P%2?y:p);L.position.x=-s/2+g*(P+.5),L.castShadow=!0,A.add(L)}f.add(A)}let m=new B(new ft(o*.85,o,a+.7,16),this.mat(this.theme.hub));return m.castShadow=!0,f.add(m),this.add(f),this.updaters.push(b=>{f.rotation.y=l+c*b}),u}hammer(t,e,n,s,r={}){var m,E,S,x,_,M,w,v,b;let o=(m=r.amp)!=null?m:1.1,a=(E=r.omega)!=null?E:1.6,c=(S=r.phase)!=null?S:0,l=(x=r.r)!=null?x:1.3,h=(_=r.span)!=null?_:9,u={type:"hammer",test:(A,P,L)=>{let D=o*Math.sin(a*P+c),R=t+s*Math.sin(D),C=e-s*Math.cos(D),z=o*a*Math.cos(a*P+c),F=s*Math.cos(D)*z,J=oi(C,A.y+.15,A.y+ve.H-.1),V=R-A.x,K=C-J,Z=n-A.z,ot=ve.R+l;if(V*V+K*K+Z*Z<ot*ot){let gt=-V,Yt=-Z;gt=(Math.sign(F)||Math.sign(gt)||1)*1,Yt=Yt*.5;let Gt=Math.hypot(gt,Yt);return L.nx=gt/Gt,L.nz=Yt/Gt,L.pow=oi(Math.abs(F)*1.05+6,10,23),!0}return!1}};if(this.hazards.push(u),this.headless)return u;let f=new xt;f.position.set(t,e,n);let d=new B(new ft(.17,.17,s,10),this.mat(this.theme.hub));d.position.y=-s/2;let g=new B(new ue(l,28,18),this.mat(this.theme.hazard,{rough:.25}));g.position.y=-s;let y=new B(new we(l*.98,.12,8,28),this.mat(this.theme.hazard2));y.position.y=-s,y.rotation.x=Math.PI/2;let p=y.clone();if(p.rotation.set(0,Math.PI/2,0),f.add(d,g,y,p),f.traverse(A=>{A.isMesh&&(A.castShadow=!0)}),this.add(f),this.updaters.push(A=>{f.rotation.z=o*Math.sin(a*A+c)}),!this.headless){let A=this.theme.hub;this.main.add(this.rbox(.9,e-((M=r.baseY)!=null?M:e-s-1.5)+1.2,.9,.2),t-h,(e+((w=r.baseY)!=null?w:e-s-1.5))/2-0,n,A),this.main.add(this.rbox(.9,e-((v=r.baseY)!=null?v:e-s-1.5)+1.2,.9,.2),t+h,(e+((b=r.baseY)!=null?b:e-s-1.5))/2-0,n,A),this.main.add(this.rbox(h*2+1,.8,.9,.2),t,e+.6,n,A)}return u}balls(t,e,n,s,r,o,a,c,l={}){let h=n-e,u=h/o,f=c.map(()=>({x:t,z:0,y:0,on:!1})),d=[],g=p=>new kt(p%2?this.theme.hazard:this.theme.hazard2);this.headless||c.forEach((p,m)=>{let E=new ue(r,32,20),S=E.attributes.position,x=S.count,_=new Float32Array(x*3);for(let w=0;w<x;w++){let v=Math.atan2(S.getZ(w),S.getX(w)),A=Math.floor((v+Math.PI)/(Math.PI*2)*8)%2?new kt(this.theme.hazard):new kt(this.theme.hazard2);_[w*3]=A.r,_[w*3+1]=A.g,_[w*3+2]=A.b}E.setAttribute("color",new We(_,3));let M=new B(E,new Ut({vertexColors:!0,roughness:.25}));M.visible=!1,this.add(M),d.push(M)});let y={type:"balls",test:(p,m,E)=>{for(let S=0;S<f.length;S++){let x=f[S];if(!x.on)continue;let _=oi(x.y,p.y+.15,p.y+ve.H-.1),M=x.x-p.x,w=x.y-_,v=x.z-p.z,b=ve.R+r;if(M*M+w*w+v*v<b*b){let A=(p.x-x.x)*.8,P=1,L=Math.hypot(A,P);return E.nx=A/L,E.nz=P/L,E.pow=oi(o*1.1+4,10,20),!0}}return!1}};return this.hazards.push(y),this.updaters.push(p=>{c.forEach((m,E)=>{let S=f[E],x=((p+m)%a+a)%a,_=x<u;S.on=_,_&&(S.z=e+x*o,S.y=s(S.z)+r,S.x=t);let M=d[E];M&&(M.visible=_,_&&(M.position.set(S.x,S.y,S.z),M.rotation.x=S.z/r))})}),y}seesaw(t,e,n,s,r,o,a,c=0){let l={x0:t-s/2,x1:t+s/2,zN:n+r/2,zF:n-r/2,yN:e,yF:e,conv:null,ice:!1,kind:"ramp",seesaw:!0};this.ramps.push(l);let h=g=>{let y=o*Math.sin(2*Math.PI*g/a+c);return l.yN=e+y,l.yF=e-y,y};if(h(0),this.headless)return this.updaters.push(g=>h(g)),l;this.main.add(new ft(.5,1.1,2.4,8),t,e-1.4,n,this.theme.hub),this.main.add(this.rbox(s*.9,.7,1.4,.2),t,e-2.5,n,this.theme.hazard2);let u=new xt;u.position.set(t,e-.25,n);let f=new B(this.rbox(s,.5,r,.2),this.mat(this.pick(),{rough:.35})),d=new B(this.rbox(s-1.2,.1,r-1.2,.04),this.mat(this.theme.pad));d.position.y=.27,u.add(f,d);for(let g of[-1,1]){let y=new B(this.rbox(s,.62,1.2,.2),this.mat(this.theme.hazard,{rough:.3}));y.position.set(0,.03,g*(r/2-.6)),u.add(y)}for(let g of[-1,1]){let y=new B(new ft(.1,.1,1.1,8),this.mat(this.theme.hub));y.position.set(g*(s/2-.5),.9,0),u.add(y)}return this.add(u),this.updaters.push(g=>{let y=h(g);u.rotation.x=-Math.atan2(y,r/2)}),l}bungee(t,e,n,s,r,o){let a=this.disc(t,n,e,s,{bounce:r,color:this.theme.hazard});if(this.headless)return a;let c=o,l=14;for(let h=0;h<l;h++){let u=h/l*Math.PI*2,f=t+Math.cos(u)*(s*.92),d=e+Math.sin(u)*(s*.92);this.main.add(new ft(.07,.07,c-n,5),f,(c+n)/2,d,h%2?"#ffffff":this.theme.hazard)}this.main.add(new we(s*.92,.35,8,36),t,c,e,this.theme.accent,Math.PI/2),this.main.add(new we(s*.92,.2,8,36),t,n+.15,e,"#ffffff",Math.PI/2);for(let h=0;h<3;h++){let u=Math.PI/2+h*Math.PI*2/3+.5,f=t+Math.cos(u)*(s+1.4),d=e+Math.sin(u)*(s+1.4);this.main.add(new ft(.45,.6,c+12,8),f,(c-12)/2,d,h%2?"#ffd23f":"#ffffff")}return this.glow.add(new ue(.9,12,8),t,c+1.6,e,"#ffffff"),a}tube(t,e,n){if(this.headless)return;let s=new O(0,1,0),r=new O,o=new O,a=new O,c=new On,l=new Bn;for(let h=0;h<t.length-1;h++){r.set(...t[h]),o.set(...t[h+1]),a.subVectors(o,r);let u=a.length();a.normalize(),c.setFromUnitVectors(s,a),l.setFromQuaternion(c),this.main.add(new ft(e,e,u*1.02,6),(r.x+o.x)/2,(r.y+o.y)/2,(r.z+o.z)/2,n,l.x,l.y,l.z)}}airpad(t,e,n,s,r,o={}){var f,d;let a={x:t,z:e,r:n,y0:s,y1:s+r,lift:(f=o.lift)!=null?f:90,vmax:(d=o.vmax)!=null?d:9};if(this.zones.push(a),this.headless)return a;this.main.add(new ft(n*.95,n,.5,28),t,s+.25,e,this.theme.hub),this.glow.add(new we(n*.8,.14,8,36),t,s+.55,e,"#9cf0ff",Math.PI/2);let c=new oe({color:"#8fe9ff",transparent:!0,opacity:.16,depthWrite:!1,side:$e,toneMapped:!1}),l=new B(new ft(n*.92,n*.92,r,24,1,!0),c);l.position.set(t,s+r/2,e),l.renderOrder=3,this.group.add(l);let h=new oe({color:"#e6fbff",transparent:!0,opacity:.5,depthWrite:!1,toneMapped:!1}),u=[];for(let g=0;g<5;g++){let y=new B(new we(n*.85,.08,6,28),h);y.rotation.x=Math.PI/2,y.renderOrder=3,this.group.add(y),u.push(y)}return this.updaters.push(g=>{u.forEach((y,p)=>{let m=(g*.5+p/5)%1;y.position.set(t,s+.6+m*(r-.8),e),y.scale.setScalar(1-m*.25)})}),a}punch(t,e,n,s,r,o,a={}){var S,x;let c=(S=a.period)!=null?S:3.2,l=(x=a.off)!=null?x:0,h=1,u=Math.hypot(s,r)||1;s/=u,r/=u;let f=_=>{let M=((_+l)%c+c)%c/c,w=(v,b,A)=>{let P=Math.max(0,Math.min(1,(A-v)/(b-v)));return P*P*(3-2*P)};return o*(w(.5,.58,M)-w(.78,.95,M))},d={type:"punch",test:(_,M,w)=>{var z;let v=f(M);if(v<.4)return!1;let b=t+s*(v+.5),A=n+r*(v+.5),P=oi(e,_.y+.15,_.y+ve.H-.1),L=b-_.x,D=e-P,R=A-_.z,C=ve.R+h;return L*L+D*D+R*R<C*C?(w.nx=s,w.nz=r,w.pow=(z=a.pow)!=null?z:15,!0):!1}};if(this.hazards.push(d),this.headless)return d;let g=new xt;g.position.set(t,e,n),g.rotation.y=Math.atan2(s,r);let y=new B(new ft(.22,.22,1,8),this.mat(this.theme.hub));y.rotation.x=Math.PI/2;let p=new B(new ue(h,20,14),this.mat(this.theme.hazard,{rough:.3})),m=new B(new ft(.62,.62,.5,14),this.mat("#ffffff"));m.rotation.x=Math.PI/2,m.position.z=-.95;let E=new B(new ue(.42,12,10),this.mat(this.theme.hazard,{rough:.3}));return E.position.set(.7,.45,-.35),p.add(m,E),m.position.z=-.95,p.scale.set(1,1,1.1),g.add(y,p),g.traverse(_=>{_.isMesh&&(_.castShadow=!0)}),this.add(g,!1,!1),this.main.add(this.rbox(2.2,2.6,1.2,.3),t-s*.3,e,n-r*.3,this.theme.hub,0,Math.atan2(s,r),0),this.updaters.push(_=>{let M=f(_);y.scale.y=Math.max(.01,M+.2),y.position.z=(M+.2)/2,p.position.z=M+.5}),d}ferris(t,e,n,s,r,o){let a=u=>u*Math.PI*2/r;for(let u=0;u<r;u++)this.mover(t,e-s,n,5,5,f=>{let d=o*f+a(u);return[0,s*(1-Math.cos(d)),s*Math.sin(d)]},{h:.7,color:this.theme.plat[u%this.theme.plat.length],pad:!0});if(this.headless)return;let c=new xt;c.position.set(t,e,n);let l=this.mat("#ffffff",{rough:.35});for(let u of[-1,1]){let f=new B(new we(s,.28,8,56),l);f.rotation.y=Math.PI/2,f.position.x=u*3.2,c.add(f)}for(let u=0;u<4;u++)for(let f of[-1,1]){let d=new B(new ft(.12,.12,s*2,6),this.mat(this.theme.hazard));d.rotation.x=u*Math.PI/4,d.position.x=f*3.2,c.add(d)}let h=new B(new ft(.9,.9,7.4,14),this.mat(this.theme.hub));h.rotation.z=Math.PI/2,c.add(h),this.add(c,!0,!1);for(let u of[-1,1])for(let f of[-1,1])this.main.add(this.rbox(.7,e+1,.7,.2),t+u*4.4,(e-1)/2,n+f*s*.55,this.theme.hub,0,0,0,1,1,1);this.updaters.push(u=>{c.rotation.x=-(o*u)})}pirate(t,e,n,s,r,o=.1){let a=o+n;if(this.mover(t,o,e,10,5,l=>{let h=s*Math.sin(2*Math.PI*l/r);return[0,n*(1-Math.cos(h)),n*Math.sin(h)]},{h:.9,color:this.theme.hazard,stripes:!0,pad:!0}),this.headless)return;for(let l of[-1,1])this.main.add(this.rbox(.8,a+2,.8,.2),t+l*6.2,(a+2)/2-.5,e+2.2,this.theme.hub,0,0,.12*l),this.main.add(this.rbox(.8,a+2,.8,.2),t+l*6.2,(a+2)/2-.5,e-2.2,this.theme.hub,0,0,.12*l);this.main.add(this.rbox(14.5,.9,.9,.2),t,a+.4,e,this.theme.accent);let c=new xt;c.position.set(t,a,e);for(let l of[-1,1]){let h=new B(new ft(.16,.16,n,8),this.mat("#ffffff"));h.position.set(l*4.2,-n/2,0),c.add(h)}this.add(c,!0,!1),this.updaters.push(l=>{c.rotation.x=-s*Math.sin(2*Math.PI*l/r)})}dropTower(t,e,n,s=13){let r=o=>{let a=(o%s+s)%s;if(a<1)return 0;if(a<5.5){let c=(a-1)/4.5;return n*(c*c*(3-2*c))}if(a<8.5)return n;if(a<9.4){let c=(a-8.5)/.9;return n*(1-c*c)}return 0};if(this.mover(t,.1,e,6,6,o=>[0,r(o),0],{h:.9,color:this.theme.accent,stripes:!0,pad:!0}),!this.headless){for(let o of[-1,1])for(let a of[-1,1])this.main.add(this.rbox(.7,n+5,.7,.2),t+o*3.6,(n+5)/2-.5,e+a*3.6,"#ffffff");this.main.add(this.rbox(8.2,.8,8.2,.2),t,n+4.6,e,this.theme.hazard),this.glow.add(new ue(.7,10,8),t,n+5.6,e,"#ffffff")}}orbit(t,e,n,s,r,o){for(let a=0;a<r;a++){let c=a*Math.PI*2/r;this.mover(t+n,s,e,4.4,4.4,l=>{let h=o*l+c;return[n*Math.cos(h)-n,.7*Math.sin(l*1.3+c),n*Math.sin(h)]},{h:.8,color:this.theme.plat[a%this.theme.plat.length],pad:!0})}this.headless||(this.main.add(new ft(.7,.9,s+5,10),t,(s+5)/2-.4,e,this.theme.hub),this.main.add(new be(2.4,2.2,14),t,s+6,e,this.theme.hazard),this.glow.add(new we(n,.12,6,48),t,s-.5,e,"#ffffff",Math.PI/2))}cannon(t,e,n,s){if(this.disc(t,0,e,2.4,{bounce:n,push:s,color:this.theme.hazard}),this.headless)return;let r=s[1]<0?-1:1;this.main.add(new ft(1,1.35,5.5,14),t,2.4,e-r*2.8,this.theme.hub,r*.93,0,0),this.main.add(new we(1.1,.2,8,18),t,4.4,e-r*.5,this.theme.accent,Math.PI/2-r*.64,0,0)}flagShuttle(t,e,n,s,r,o,a,c,l,h={}){var L,D;let u=R=>-s*(.5-.5*Math.cos(2*Math.PI*R/r+o)),f=r/4,d=r/2,g=(L=h.slabZ)!=null?L:3,y=R=>((R-f+d/2)%d+d)%d-d/2,p=R=>{let C=y(R),z=11,F=4.2,J=.35;return C<-5?z:C<-4.4?z+(F-z)*((C+5)/.6):C<-.4?F:C<-.15?F+(J-F)*((C+.4)/.25):C<.6?J:C<1.4?J+(F-J)*((C-.6)/.8):F+(z-F)*Math.min(1,(C-1.4)/.6)},m=this.mover(t,e,n,a,c,R=>[0,0,u(R)],{h:.8,color:(D=h.color)!=null?D:"#f4efe6",pad:!1}),E={type:"blade",test:(R,C,z)=>{let F=y(C);if(F<-.3||F>.25)return!1;let J=n+u(C),V=R.x-t,K=R.z-J;if(Math.abs(V)>a/2+.3||Math.abs(K)>g+.4||R.y>e+3.2||R.y+1.55<e)return!1;z.nx=(Math.sign(V)||1)*.25,z.nz=Math.sign(K)||1;let Z=Math.hypot(z.nx,z.nz);return z.nx/=Z,z.nz/=Z,z.pow=15,!0}};if(this.hazards.push(E),this.shuttles=this.shuttles||[],this.shuttles.push({cx:t,top:e,cz0:n,D:s,T:r,phase:o,w:a,dp:c,pos:u,tau:y,bladeH:p,slabZ:g}),this.headless)return m;let S=new xt;this.add(S);let x=new B(new Ze(a-1.2,(a-1.2)*.667),new oe({map:Qo(l),toneMapped:!1}));x.rotation.x=-Math.PI/2,x.position.y=.06,S.add(x);let _=new oe({color:"#1e6bff",transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}),M=new xt;M.position.y=.1,[[0,0,2.6],[1.9,1.3,1.1],[-2,1.5,.9],[1.4,-1.9,1],[-1.6,-1.6,.8],[.2,2.6,.7]].forEach(([R,C,z])=>{let F=new B(new Li(z,18),_);F.rotation.x=-Math.PI/2,F.position.set(R,0,C),M.add(F)}),S.add(M);for(let R of[-1,1]){let C=new B(this.rbox(.6,12.5,.6,.15),this.mat(this.theme.hub));C.position.set(R*(a/2+.1),6.2,0),S.add(C)}let w=new B(this.rbox(a+1.2,.7,.8,.15),this.mat(this.theme.hub));w.position.y=12.6,S.add(w);let v=new xt,b=new B(this.rbox(a-.6,.5,g*2,.1),this.mat("#c9d3df",{rough:.2}));v.add(b);for(let R=0;R<8;R++){let C=new B(new be(.55,.9,4),this.mat("#eef3f8",{rough:.15}));C.rotation.x=Math.PI,C.position.set(-(a-1.6)/2+R*((a-1.6)/7),-.65,0),v.add(C)}let A=new B(new ft(.15,.15,12,6),this.mat("#8a8f99"));A.position.y=6,v.add(A);let P=new B(new Ze(a-.6,g*2),new oe({color:"#ff3d3d",transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}));return P.rotation.x=-Math.PI/2,P.position.y=.09,S.add(P),S.add(v),this.updaters.push(R=>{let C=u(R);S.position.set(t,e+.4,n+C);let z=p(R),F=y(R);v.position.y=z+.5+(F>-1.2&&F<-.4?Math.sin(R*40)*.06:0),P.material.opacity=F>-4.4&&F<-.1?.18+.12*Math.sin(R*12):0,_.opacity=F>-.15&&F<3.4?Math.min(.85,(3.4-F)/3):0}),m}fan(t,e,n,s,r,o,a,c){let l={x0:t,x1:e,z0:n,z1:s,y0:r,y1:o,ax:a,az:c};if(this.winds.push(l),this.headless)return l;let h=(t+e)/2,u=(n+s)/2,f=Math.sign(a)||0,d=Math.sign(c)||0,g=f?f>0?t-.8:e+.8:h,y=d?d>0?n-.8:s+.8:u,p=r+2.2;this.main.add(new ft(.3,.45,9.4,8),g,r-3.1,y,this.theme.hub);let m=new xt;m.position.set(g,p,y),m.rotation.y=f?f>0?Math.PI/2:-Math.PI/2:d>0?0:Math.PI;let E=new B(new we(1.6,.18,8,28),this.mat(this.theme.hazard));m.add(E);let S=new B(new ft(.4,.4,.5,12),this.mat("#ffffff"));S.rotation.x=Math.PI/2,m.add(S);let x=new xt;for(let v=0;v<4;v++){let b=new B(this.rbox(.6,1.4,.1,.04),this.mat(v%2?"#ffffff":this.theme.accent));b.position.y=.9;let A=new xt;A.rotation.z=v*Math.PI/2,A.add(b),x.add(A)}m.add(x),this.add(m);let _=new oe({color:"#ffffff",transparent:!0,opacity:.5,depthWrite:!1,toneMapped:!1}),M=[],w=Math.abs(f)?e-t:s-n;for(let v=0;v<7;v++){let b=new B(new qt(f?2.2:.07,.07,f?.07:2.2),_);this.group.add(b),M.push({m:b,k:v/7,o:v*.37%1})}return this.updaters.push(v=>{x.rotation.z=v*16;for(let b of M){let A=(b.k+v*.55)%1,P=A*w;b.m.position.set(f?f>0?t+P:e-P:t+(e-t)*b.o,r+.8+b.o*7%1*(o-r-1.2),d?d>0?n+P:s-P:n+(s-n)*b.o)}}),l}swing(t,e,n,s,r,o,a=0,c){let l={x:t,y:e,z:n,len:s,amp:r,om:2*Math.PI/o,ph:a};if(this.swings.push(l),this.headless)return l;let h=c!=null?c:this.theme.hazard,u=3;for(let p of[-1,1])this.main.add(this.rbox(.8,e+1,.8,.2),t+p*u,(e-1)/2+.5,n,this.theme.hub);this.main.add(this.rbox(u*2+.8,.8,.8,.2),t,e+.4,n,this.theme.hub),this.glow.add(new ue(.35,10,8),t-u,e+1.2,n,"#ffffff"),this.glow.add(new ue(.35,10,8),t+u,e+1.2,n,"#ffffff");let f=new xt;f.position.set(t,e,n);let d=new B(new ft(.11,.11,s,6),this.mat("#fff2c4"));d.position.y=-s/2,f.add(d);let g=new B(new ft(.3,.3,3,12),this.mat("#ffd23f",{rough:.3}));g.rotation.z=Math.PI/2,g.position.y=-s,f.add(g);for(let p of[-1,1]){let m=new B(new ue(.3,10,8),this.mat("#ffffff"));m.position.set(p*1.5,-s,0),f.add(m)}let y=new B(new we(.28,.07,6,16),this.mat("#ffd23f"));return y.position.y=-s+0,y.rotation.y=Math.PI/2,f.add(y),this.add(f),l.mesh=f,this.updaters.push(p=>{f.rotation.x=-this.swingAngle(l,p)}),l}swingAngle(t,e){return t.amp*Math.sin(t.om*e+t.ph)}swingTip(t,e,n={}){let s=this.swingAngle(t,e),r=t.amp*t.om*Math.cos(t.om*e+t.ph);return n.x=t.x,n.y=t.y-t.len*Math.cos(s),n.z=t.z+t.len*Math.sin(s),n.vz=t.len*r*Math.cos(s),n.vy=t.len*r*Math.sin(s),n}doorWall(t,e,n,s,r,o,a={}){var f,d;let c=(f=a.h)!=null?f:4.2,l=s/r,h=(d=a.colors)!=null?d:["#ff6b9d","#ffd23f","#4cc9f0","#80ed99","#ff9f1c","#b58cff","#ff7a7a"],u=[];for(let g=0;g<r;g++){let y=t-s/2+l*(g+.5),p=o[g]?this.addSolid(y-l/2+.05,e,n-.4,y+l/2-.05,e+c,n+.4,{name:"fakedoor"}):null,m={x:y,z:n,i:g,fake:!!o[g],solid:p,open:0,mesh:null};if(!this.headless){let E=new xt;E.position.set(y-l/2+.05,e,n);let S=new B(this.rbox(l-.1,c,.5,.12),this.mat(h[g%h.length],{rough:.35}));S.position.set((l-.1)/2,c/2,0),E.add(S);let x=new B(new ue(.2,8,6),this.mat("#ffffff"));x.position.set(l-.5,c*.45,.35),E.add(x);let _=new B(this.rbox(l-.5,.35,.56,.05),this.mat("#ffffff"));_.position.set((l-.1)/2,c*.82,0),E.add(_),this.add(E),m.mesh=E}u.push(m)}return this.headless||(this.main.add(this.rbox(.9,c+1.2,1,.2),t-s/2-.45,e+(c+1.2)/2,n,this.theme.hub),this.main.add(this.rbox(.9,c+1.2,1,.2),t+s/2+.45,e+(c+1.2)/2,n,this.theme.hub),this.main.add(this.rbox(s+1.8,1,1,.2),t,e+c+.5,n,this.theme.hub)),this.doorWalls=this.doorWalls||[],this.doorWalls.push({cx:t,cz:n,w:s,doors:u}),this.updaters.push((g,y)=>{let p=this.nearPlayers||[];for(let m of u){if(!m.mesh)continue;let E=0;if(!m.fake)for(let S of p)Math.abs(S.z-n)<3.2&&Math.abs(S.x-m.x)<l*.9&&(E=1);m.open+=(E-m.open)*Math.min(1,y*9),m.mesh.rotation.y=-m.open*1.45,m.fake}}),u}checkpoint(t,e,n,s=14){let r={x:t,y:e,z:n,w:s,spawn:[t,e,n+1]};return this.checkpoints.push(r),this.headless||this.arch(t,e,n,s,this.theme.accent,!0),r}arch(t,e,n,s,r,o=!1){let a=o?5.2:8.5;this.main.add(this.rbox(.9,a,.9,.25),t-s/2,e+a/2,n,r),this.main.add(this.rbox(.9,a,.9,.25),t+s/2,e+a/2,n,r),this.main.add(this.rbox(s+.9,o?.9:1.6,o?.9:1.4,.25),t,e+a,n,r),this.glow.add(new ue(.42,12,8),t-s/2,e+a+.8,n,"#ffffff"),this.glow.add(new ue(.42,12,8),t+s/2,e+a+.8,n,"#ffffff")}update(t,e){this.time=t;for(let n of this.updaters)n(t,e);for(let n of this.discs)if(n.omega){let s=n.phase+n.omega*t;n.dTheta=n.first?0:s-n.theta,n.theta=s,n.first=!1}}carry(t){let e=t.ground;if(e){if(e.moving)t.x+=e.dx,t.y+=e.dy,t.z+=e.dz;else if(e.kind==="disc"&&e.omega){let n=t.x-e.cx,s=t.z-e.cz,r=e.dTheta,o=Math.cos(r),a=Math.sin(r);t.x=e.cx+n*o+s*a,t.z=e.cz-n*a+s*o,t.yawOff=(t.yawOff||0)+r}}}checkHazards(t,e){for(let n of this.hazards)if(n.test(t,e,this.hitOut))return this.hitOut;return null}finalize(){if(this.headless)return;let t=this.main.build(new Ut({vertexColors:!0,roughness:.4,metalness:.02}));t&&(t.castShadow=!0,t.receiveShadow=!0,this.group.add(t));let e=this.glow.build(new oe({vertexColors:!0,toneMapped:!1}));e&&this.group.add(e)}resolveHorizontal(t){let e=ve.R,n=ve.H;for(let s of this.solids){if(!s.active||s.y1<=t.y+ve.STEP||s.y0>=t.y+n||t.x<s.x0-e||t.x>s.x1+e||t.z<s.z0-e||t.z>s.z1+e)continue;let r=oi(t.x,s.x0,s.x1),o=oi(t.z,s.z0,s.z1),a=t.x-r,c=t.z-o,l=a*a+c*c;if(l>=e*e)continue;let h,u;if(l>1e-9){let d=Math.sqrt(l),g=e-d;h=a/d,u=c/d,t.x+=h*g,t.z+=u*g}else{let d=t.x-s.x0,g=s.x1-t.x,y=t.z-s.z0,p=s.z1-t.z,m=Math.min(d,g,y,p);m===d?(t.x=s.x0-e,h=-1,u=0):m===g?(t.x=s.x1+e,h=1,u=0):m===y?(t.z=s.z0-e,h=0,u=-1):(t.z=s.z1+e,h=0,u=1)}let f=t.vx*h+t.vz*u;if(f<0&&(t.vx-=f*h,t.vz-=f*u),s.moving){let d=s.dx*h+s.dz*u;d>0&&(t.vx+=h*Math.min(d/.016,8)*.3,t.vz+=u*Math.min(d/.016,8)*.3)}}for(let s of this.discs){if(t.y+n<=s.top-s.th||t.y>=s.top-ve.STEP)continue;let r=t.x-s.cx,o=t.z-s.cz,a=Math.hypot(r,o),c=s.r+e;if(a<c&&a>1e-6){let l=r/a,h=o/a;t.x=s.cx+l*c,t.z=s.cz+h*c;let u=t.vx*l+t.vz*h;u<0&&(t.vx-=u*l,t.vz-=u*h)}}}findGround(t,e,n){let s=ve.EDGE,r=e+ve.STEP,o=n&&t.noSnap<=0?ve.SNAP:0,a=null,c=-1e9;for(let l of this.solids){if(!l.active)continue;let h=l.y1;h>r||h<=c||t.x<l.x0-s||t.x>l.x1+s||t.z<l.z0-s||t.z>l.z1+s||(t.y<=h+1e-4||t.y<=h+o)&&(a=l,c=h)}for(let l of this.ramps){if(t.x<l.x0-s||t.x>l.x1+s||t.z>l.zN+.3||t.z<l.zF-.3)continue;let h=oi((l.zN-t.z)/(l.zN-l.zF),0,1),u=l.yN+(l.yF-l.yN)*h;u>r||u<c||(t.y<=u+1e-4||t.y<=u+o)&&(a=l,c=u)}for(let l of this.discs){let h=l.top;if(h>r||h<c)continue;let u=t.x-l.cx,f=t.z-l.cz,d=l.r+s*.8;u*u+f*f>d*d||(t.y<=h+1e-4||t.y<=h+o)&&(a=l,c=h)}return a?{s:a,top:c}:null}hitCeiling(t,e){for(let n of this.solids)if(n.active&&!(e+ve.H>n.y0+.02||t.y+ve.H<=n.y0)&&!(t.x<n.x0||t.x>n.x1||t.z<n.z0||t.z>n.z1))return n;return null}};var pn=16,na=7,Le=56,Is=-262,ai=-336,_n=-4,ea=-416;function Ep(){let i=[],t=[],e=[],n=[],s=[],r=[],o=[];i.push({ax:38,az:ai-7,bx:38,bz:-410,hw:6,y0:0,y1:pn,g:"ramp+"}),i.push({ax:Le,az:ea,bx:Le,bz:_n,hw:na,y0:pn,y1:pn,g:"s2"}),i.push({ax:Le,az:_n,bx:-Le,bz:_n,hw:na,y0:pn,y1:pn,g:"sx"}),i.push({ax:-Le,az:_n,bx:-Le,bz:ea,hw:na,y0:pn,y1:pn,g:"s3"}),t.push({x:47,z:ea,r:15,y:pn,g:"pa"},{x:Le,z:_n,r:12,y:pn,g:"pb"},{x:-Le,z:_n,r:12,y:pn,g:"pc"},{x:-47,z:ea,r:15,y:pn,g:"pd"});let a=(y,p)=>s.push({k:"barrel",x:y,z:p,r:1.3}),c=(y,p,m)=>{for(let E=p;E<=m+.01;E+=2.4)s.push({k:"block",x:y,z:E,r:1.2})},l=(y,p,m=7)=>{n.push({x:y,z:p,r:m,y:pn})},h=(y,p)=>e.push({x:y,z:p,r:4,y:pn}),u=-Le,f=2.2;h(Le,-396),a(Le-f,-385),a(Le+f,-375),a(Le-f,-365),a(Le+f,-355),h(Le,-345),c(Le-3.2,-300,-292),c(Le+3.2,-284,-276),h(Le,-255),l(Le,-235),h(Le,-190),a(Le+f,-150),a(Le-f,-140),a(Le+f,-130),h(Le,-100),h(Le,-22),a(36,_n+f),a(26,_n-f),h(15,_n),h(-15,_n),a(-26,_n+f),a(-36,_n-f),h(u,-25),a(u-f,-45),a(u+f,-55),a(u-f,-65),h(u,-128),l(u,-205),c(u-3.2,-250,-242),c(u+3.2,-234,-226),h(u,-190),l(u,-300),h(u,-338),a(u-f,-350),a(u+f,-358),a(u-f,-366),h(u,-388),r.push({x:Le,z:-250,w:8},{x:15,z:_n,w:8},{x:u,z:-185,w:8},{x:u,z:-397,w:8});let d={x:-47,z:ea,r:15},g=[-57,-51,-45,-39].map((y,p)=>({id:4+p,x:y,z:-423,y:pn,yaw:0}));for(let y of[1,-1]){for(let p=-40;p>-405;p-=30)Math.abs(p+26)>20&&Math.abs(p-Is)>11&&Math.abs(p-ai)>11&&o.push({x:y*Le-10.2,z:p,kind:"gantry",sd:y,span:10.2});y>0&&o.push({x:38-6.6,z:-380,kind:"col"},{x:38+6.6,z:-380,kind:"col"},{x:38-6.6,z:-362,kind:"col"},{x:38+6.6,z:-362,kind:"col"}),o.push({x:y*Le,z:_n,kind:"plaza"},{x:y*34,z:-421,kind:"plaza"},{x:y*44,z:-404,kind:"plaza"})}return{ground:[],segs:i,plazas:t,boosts:e,slicks:n,defs:s,gates:r,garage:d,racers:g,pillars:o}}function bp(i){let t=i.map(e=>({x:e.x,z:e.z,y:pn,r:e.r,vx:0,vz:0}));return()=>t}function Sp(i,t,e,n){let s=i.main,r=i.glow,o=i.group,a=pn,c=(x,_,M)=>new qt(x,_,M),l="#2f3342",h="#ff3b3b",u="#ffffff",f=(x,_,M)=>{for(let w of t.segs){if(w.g===M)continue;let v=w.bx-w.ax,b=w.bz-w.az,A=v*v+b*b,P=((x-w.ax)*v+(_-w.az)*b)/A;if(P=Math.max(0,Math.min(1,P)),Math.hypot(x-(w.ax+v*P),_-(w.az+b*P))<w.hw-.5)return!0}for(let w of t.plazas)if(w.g!==M&&Math.hypot(x-w.x,_-w.z)<w.r-.5)return!0;return!1},d=0;for(let x of t.segs){let _=Math.hypot(x.bx-x.ax,x.bz-x.az),M=Math.max(1,Math.ceil(_/12));for(let w=0;w<M;w++,d++){let v=w/M,b=(w+1)/M,A=x.ax+(x.bx-x.ax)*v,P=x.az+(x.bz-x.az)*v,L=x.ax+(x.bx-x.ax)*b,D=x.az+(x.bz-x.az)*b,R=x.y0+(x.y1-x.y0)*v,C=x.y0+(x.y1-x.y0)*b,z=L-A,F=D-P,J=Math.hypot(z,F),V=(A+L)/2,K=(P+D)/2,Z=(R+C)/2,ot=-Math.atan2(F,z),gt=Math.atan2(C-R,J),Yt=-F/J,At=z/J,Gt=Math.hypot(J,C-R);s.add(c(Gt+.3,.9,x.hw*2),V,Z-.45,K,l,0,ot,gt,1,1,1,"YXZ");for(let U of[-1,1]){let k=V+Yt*U*(x.hw-.3),rt=K+At*U*(x.hw-.3);f(k,rt,x.g)||(s.add(c(Gt+.05,1,.55),k,Z+.5,rt,(d+(U>0?1:0))%2?h:u,0,ot,gt,1,1,1,"YXZ"),r.add(c(Gt+.05,.12,.2),k-Yt*U*.1,Z+1.1,rt-At*U*.1,"#22f2ff",0,ot,gt,1,1,1,"YXZ"))}d%2===0&&!f(V,K,x.g)&&r.add(c(Math.min(Gt,5)*.55,.04,.3),V,Z+.04,K,"#ffe14a",0,ot,gt,1,1,1,"YXZ")}}for(let x of t.plazas){s.add(new ft(x.r,x.r,.9,40),x.x,x.y-.45,x.z,l);for(let _=0;_<36;_++){let M=_/36*Math.PI*2,w=x.x+Math.cos(M)*(x.r-.3),v=x.z+Math.sin(M)*(x.r-.3);f(w,v,x.g)||s.add(c(2.4,1,.55),w,x.y+.5,v,_%2?h:u,0,-M+Math.PI/2,0)}}for(let x of t.pillars)if(x.kind==="gantry"){for(let _ of[-1,1])s.add(new ft(.55,.7,a-.9,10),x.x+(_>0?2*x.span:0),(a-.9)/2,x.z,"#9aa3b8");s.add(c(2*x.span+1.4,.9,1.4),x.x+x.span,a-1.35,x.z,"#7b84a0")}else x.kind==="col"?s.add(new ft(.5,.65,a*.85,10),x.x,a*.42,x.z,"#9aa3b8"):s.add(new ft(1.1,1.5,a-.9,12),x.x,(a-.9)/2,x.z,"#9aa3b8");for(let x of t.boosts){s.add(c(10,.07,8),x.x,x.y+.04,x.z,"#ff9f1c");for(let _=0;_<3;_++)s.add(new be(1.5,2,3),x.x,x.y+.1,x.z+2-_*2,"#fff3b0",0,Math.PI,0)}let g=new Ui;for(let x of t.slicks)g.add(new ft(x.r,x.r,.05,28),x.x,x.y+.04,x.z,"#1c1030"),g.add(new ft(x.r*.62,x.r*.62,.03,24),x.x,x.y+.07,x.z,"#3a1f66");for(let x of t.defs)x.k==="barrel"&&(g.add(new ft(x.r*.85,x.r*.85,1.5,14),x.x,a+.75,x.z,"#ff7a1a"),g.add(new ft(x.r*.88,x.r*.88,.28,14),x.x,a+.95,x.z,"#ffffff")),x.k==="block"&&(g.add(c(x.r*2,1.3,x.r*2),x.x,a+.65,x.z,"#aeb4c6"),g.add(c(x.r*2.02,.2,x.r*.7),x.x,a+1.32,x.z,"#ffd23f"));let y=g.build(new Ut({vertexColors:!0,roughness:.5}));y&&(y.castShadow=!0,o.add(y),i.skyObst=y);let p=(x,_,M,w,v,b,A,P)=>{let L=He(x,_,M,w);return L.position.set(v,b,A),L.rotation.y=P,o.add(L),L},m={bg:["#22c55e","#0b7a3a"],fg:"#ffffff",stroke:"#053b1c",border:"#ffd23f"};t.gates.forEach((x,_)=>{let M=_===1,w=_===t.gates.length-1;for(let A of[-1,1]){let P=M?x.x:x.x+A*(na-.3),L=M?_n+A*(na-.3):x.z;s.add(c(.7,7,.7),P,a+3.5,L,"#2b1c6b")}let v=x.x,b=M?_n:x.z;p(w?"FINISH - RACERS UNLOCKED!":`SKY GATE ${_+1}`,w?15:9,w?2.6:2,w?{bg:["#e0001f","#8f0014"],fg:"#ffffff",stroke:"#33000a",border:"#ffd23f"}:m,v,a+7.4,b,M?Math.PI/2:0)});let E={bg:["#ff9f1c","#e0601a"],fg:"#ffffff",stroke:"#4a1c00",border:"#ffffff"};for(let x of[-1,1])s.add(c(.8,8,.8),38+x*7.2,4,ai-12,"#2b1c6b");p("SKY SPEEDWAY \u25B2  WIN A RACER",17,3.2,E,38,8.8,ai-12,0),p("SKY SPEEDWAY \u2192",14,3.2,E,Le,5.4,ai+20,0);let S=t.garage;for(let x of[-1,1])s.add(c(.8,9,.8),S.x+x*12,a+4.5,S.z-9,"#2b1c6b");p("RACER GARAGE",24,4.6,{bg:["#e0001f","#8f0014"],fg:"#ffffff",stroke:"#33000a",border:"#ffd23f"},S.x,a+10.2,S.z-9,0);for(let x of t.racers)s.add(c(5.2,.07,6.8),x.x,a+.03,x.z,"#e0001f")}var li={HX:90,ZS:12,ZN:-228},Ce={x:52,z:-110,x0:33,x1:71,z0:-176,z1:-76,summitY:15,sx:52,sz:-165},rn={lion:{name:"LION",walk:3,run:9,aggro:22,hp:4,r:1.5,ride:1.9,seat:1.65,big:1,sound:"ROAR!"},leopard:{name:"LEOPARD",walk:3.4,run:11,aggro:22,hp:4,r:1.3,ride:2.2,seat:1.45,big:0,sound:"GRRR!"},elephant:{name:"ELEPHANT",walk:2.4,run:6,aggro:18,hp:6,r:2.3,ride:1.35,seat:3.5,big:1,sound:"TOOOT!"},horse:{name:"HORSE",walk:3.2,run:11.5,aggro:15,hp:3,r:1.5,ride:2.3,seat:2.05,big:0,sound:"NEIGH!"},coyote:{name:"COYOTE",walk:3.2,run:9.5,aggro:24,hp:5,r:1.2,ride:2,seat:1.35,big:0,sound:"YIP!"},boar:{name:"WILD BOAR",walk:3,run:9,aggro:24,hp:6,r:1.3,ride:1.9,seat:1.4,big:0,sound:"OINK!"},hyena:{name:"HYENA",walk:3.4,run:11,aggro:24,hp:7,r:1.3,ride:2.2,seat:1.4,big:0,sound:"HAHA!"},bear:{name:"BEAR",walk:2.8,run:8.5,aggro:24,hp:8,r:2,ride:1.6,seat:2.6,big:1,sound:"GROWL!"},gorilla:{name:"GORILLA",walk:3,run:9,aggro:24,hp:9,r:2,ride:1.7,seat:2.7,big:1,sound:"OOH OOH!"},dino:{name:"DINOSAUR",walk:2.6,run:8,aggro:0,hp:6,r:2.7,ride:1.75,seat:3.35,big:1,sound:"RAWR!"}},Sc=[{id:0,kind:"lion",x:-50,z:-70},{id:1,kind:"leopard",x:-28,z:-160},{id:2,kind:"elephant",x:15,z:-185},{id:3,kind:"horse",x:-62,z:-115},{id:4,kind:"dino",x:Ce.sx,z:Ce.sz,y:Ce.summitY}],Ee={IDLE:0,WALK:1,CHASE:2,ATTACK:3,STAGGER:4,TIED:5,PET:6,RIDDEN:7,HIDDEN:8},wc={defs:Sc};function u_(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}var Ec=null;function Tc(){if(Ec)return Ec;let i=u_(20260601),t=[];for(let e=0;e<6e3&&t.length<72;e++){let n=-84+i()*168,s=6-i()*226;Math.hypot(n,s)<17||n>Ce.x0-5&&n<Ce.x1+5&&s>Ce.z0-5&&s<Ce.z1+5||t.some(r=>Math.hypot(r.x-n,r.z-s)<9)||t.push({x:n,z:s,r:1.25,s:.85+i()*.7,k:Math.floor(i()*3)})}return Ec={trees:t,hill:Ce},Ec}var ia=(i,t,e=0)=>i>Ce.x0-e&&i<Ce.x1+e&&t>Ce.z0-e&&t<Ce.z1+e;function Tp(i=Sc){return i.map(t=>({id:t.id,kind:t.kind,x:t.x,y:t.y||0,z:t.z,yaw:Math.PI,vx:0,vz:0,st:t.hidden?Ee.HIDDEN:t.kind==="dino"?Ee.TIED:Ee.IDLE,bounds:t.bounds||null,hp:rn[t.kind].hp,owner:0,rider:0,tx:t.x,tz:t.z,wait:1+Math.random()*3,cool:1,wind:0,stagger:0,target:0,home:{x:t.x,z:t.z}}))}function If(i,t,e,n){let s=i.bounds,r=s?s.x0+e:-(li.HX-e-1),o=s?s.x1-e:li.HX-e-1,a=s?s.z0+e:li.ZN+e+1,c=s?s.z1-e:li.ZS-e-1;i.x=Math.max(r,Math.min(o,i.x)),i.z=Math.max(a,Math.min(c,i.z));for(let l of t.trees){let h=i.x-l.x,u=i.z-l.z,f=Math.hypot(h,u),d=l.r+e*.6;if(f<d){let g=f>1e-4?d/f:1;i.x=l.x+(f>1e-4?h*g:d),i.z=l.z+(f>1e-4?u*g:0)}}if(!n&&!s&&ia(i.x,i.z,e*.5)){let l=i.x-(Ce.x0-e*.5),h=Ce.x1+e*.5-i.x,u=i.z-(Ce.z0-e*.5),f=Ce.z1+e*.5-i.z,d=Math.min(l,h,u,f);d===l?i.x=Ce.x0-e*.5:d===h?i.x=Ce.x1+e*.5:d===u?i.z=Ce.z0-e*.5:i.z=Ce.z1+e*.5}}function wp(i,t){for(let e=0;e<12;e++){let n=i.bounds,s=n?1:90,r=n?n.x0+2+Math.random()*(n.x1-n.x0-4):i.home.x+(Math.random()-.5)*s,o=n?n.z0+2+Math.random()*(n.z1-n.z0-4):i.home.z+(Math.random()-.5)*s;if(!(!n&&(Math.abs(r)>li.HX-8||o>li.ZS-8||o<li.ZN+8||ia(r,o,6)))&&!t.trees.some(a=>Math.hypot(a.x-r,a.z-o)<3.5))return[r,o]}return[i.home.x,i.home.z]}function bc(i,t,e,n,s){let r=t-i.x,o=e-i.z,a=Math.hypot(r,o);if(a<.05)return a;let l=Math.atan2(r,o)-i.yaw;l=Math.atan2(Math.sin(l),Math.cos(l)),i.yaw+=l*(1-Math.exp(-7*s));let h=Math.min(n,a/Math.max(s,.001)),u=Math.max(.15,1-Math.abs(l)/2.2);return i.vx=Math.sin(i.yaw)*h*u,i.vz=Math.cos(i.yaw)*h*u,i.x+=i.vx*s,i.z+=i.vz*s,a}function Ap(i,t,e,n,s=[]){for(let r of i){let o=rn[r.kind],a=r.owner?e.find(h=>h.id===r.owner):null;if(r.vx=r.vz=0,r.st===Ee.HIDDEN)continue;if(r.rider){let h=e.find(u=>u.id===r.rider);if(!h)r.rider=0;else{r.x=h.x,r.y=h.y,r.z=h.z,r.yaw=h.r,r.st=Ee.RIDDEN;continue}}if(r.cool>0&&(r.cool-=t),r.stagger>0){r.stagger-=t,r.x+=(r.kvx||0)*t,r.z+=(r.kvz||0)*t,r.kvx*=.9,r.kvz*=.9,If(r,n,o.r,r.kind==="dino"),r.st=Ee.STAGGER;continue}if(r.kind==="dino"&&!r.owner){r.st=Ee.TIED;continue}if(r.owner){if(r.st=Ee.PET,a&&r.y<1.5&&a.y<2.5&&!a.mounted){let h=Math.hypot(a.x-r.x,a.z-r.z);n.petBounds&&(r.bounds=n.petBounds),h>(n.petBounds?16:60)?(r.x=a.x-3,r.z=a.z+3):h>5.5?(bc(r,a.x,a.z,Math.min(o.run,3+h*.9),t),r.st=Ee.WALK):h<3&&(bc(r,r.x+(r.x-a.x),r.z+(r.z-a.z),o.walk,t),r.st=Ee.WALK),If(r,n,o.r,!1)}r.y<1.5&&(r.y=0);continue}let c=null,l=o.aggro;for(let h of e){if(h.mounted||h.y>2.5||r.bounds&&(h.x<r.bounds.x0-1||h.x>r.bounds.x1+1||h.z<r.bounds.z0-1||h.z>r.bounds.z1+1))continue;let u=Math.hypot(h.x-r.x,h.z-r.z);u<l&&(l=u,c=h)}if(r.wind>0){if(r.wind-=t,r.st=Ee.ATTACK,r.wind<=0){for(let h of e){if(h.mounted||h.y>2.5)continue;let u=h.x-r.x,f=h.z-r.z,d=Math.hypot(u,f);if(d<o.r+2.6){let g=d||1;s.push({k:"bite",id:r.id,pid:h.id,nx:u/g,nz:f/g,big:o.big})}}r.cool=2.6,r.recover=.7}continue}if(r.recover>0){r.recover-=t,r.st=Ee.IDLE;continue}c?(r.st=Ee.CHASE,bc(r,c.x,c.z,o.run,t)<o.r+2&&r.cool<=0&&(r.wind=.5)):r.wait>0?(r.wait-=t,r.st=Ee.IDLE):(r.st=Ee.WALK,bc(r,r.tx,r.tz,o.walk,t)<1.2&&(r.wait=2+Math.random()*5,[r.tx,r.tz]=wp(r,n))),If(r,n,o.r,!1),r.y=0,r.st===Ee.WALK&&Math.hypot(r.vx,r.vz)<.2&&([r.tx,r.tz]=wp(r,n))}return s}function Rp(i,t,e,n,s=[]){if(i.owner||i.rider||i.st===Ee.HIDDEN)return s;let r=rn[i.kind];i.hp-=1,i.stagger=.7,i.wind=0,i.cool=1.4;let o=i.x-e,a=i.z-n,c=Math.hypot(o,a)||1,l=i.kind==="dino"?0:6;return i.kvx=o/c*l,i.kvz=a/c*l,s.push({k:"hit",id:i.id,hp:i.hp}),i.hp<=0&&(i.hp=r.hp,i.owner=t,i.st=Ee.PET,s.push({k:"tame",id:i.id,pid:t})),s}var Ac=[[-7.5,3.5],[7.5,3.5],[0,-8.5]],d_="\u0639\u06A9\u0631\u0645\u06C1";function Cp(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function Ip(i,t,e){let n=Tc(),s=li.HX,r=li.ZS,o=li.ZN,a=r-o,c=!i.headless,l=Cp(9137),h=R=>R[Math.floor(l()*R.length)],u=i.main;e.startArch=99,e.jungle=!0,e.spawn={x:0,y:0,z:1.5},i.checkpoints.push({x:0,y:0,z:6,w:14,spawn:[0,0,3]}),i.platform(0,0,(r+o)/2,s*2+4,a+4,{h:2,color:"#5cbf4a",pad:!1});let f=["#2f8a3c","#3fa24a","#267a34","#4bb35a"];for(let R=r+2,C=0;R>o-4;R-=14,C++)for(let z of[-1,1])i.platform(z*(s+1),26,R-7,2,14,{h:26,color:f[(C+(z>0?2:0))%4],pad:!1});i.platform(0,26,r+1,s*2+4,2,{h:26,color:f[1],pad:!1}),i.platform(0,26,o-1,s*2+4,2,{h:26,color:f[3],pad:!1});let d=Ce.x,g=Ce.z,y=["#8a6a47","#7a5a3a","#6e5236"],p="#63c24c";i.platform(d,5,g-14,32,48,{h:5,color:y[0],padColor:p}),i.platform(d,10,g-37,24,26,{h:10,color:y[1],padColor:p}),i.platform(d,15,g-55,18,18,{h:15,color:y[2],padColor:p}),i.ramp(d-8,g+30,0,g+10,5,9,{color:"#9a7a52",padColor:"#7bd35c"}),i.ramp(d+8,g-4,5,g-24,10,9,{color:"#9a7a52",padColor:"#7bd35c"}),i.ramp(d-6,g-30,10,g-46,15,9,{color:"#9a7a52",padColor:"#7bd35c"});for(let R of n.trees)i.addSolid(R.x-.85*R.s,0,R.z-.85*R.s,R.x+.85*R.s,7*R.s,R.z+.85*R.s);let m=(R,C,z=4)=>!(Math.abs(R)>s-6||C>r-6||C<o+6||ia(R,C,6)||Math.hypot(R,C)<11||n.trees.some(F=>Math.hypot(F.x-R,F.z-C)<z+F.r)),E=(R,C,z=800)=>{let F=[];for(let J=0;J<z&&F.length<R;J++){let V=(l()-.5)*2*(s-8),K=r-8-l()*(a-16);m(V,K,C)&&!F.some(Z=>Math.hypot(Z[0]-V,Z[1]-K)<C*1.6)&&F.push([V,K])}return F},S=E(7,5);if(S.forEach(([R,C],z)=>i.disc(R,0,C,2.8,{bounce:21+z%3*2,color:h(["#ff5d73","#ff8a3d","#ffd23f","#ff6bd0"])})),e.shrooms=S,!c)return;let x=(R,C=8,z=6)=>new ue(R,C,z),_=(R,C,z,F=8)=>new ft(R,C,z,F),M=(R,C,z=8)=>new be(R,C,z),w=["#2e9b3f","#3fb14c","#58c45a","#27863a","#7ccf5a"],v=x(1,5,4),b=(R,C,z,F)=>u.add(v,R,C,z,h(w),l()*3,l()*3,0,F?.9+l()*.6:2+l()*1.5,1.4+l()*1,F?2+l()*1.5:.9+l()*.6);for(let R=2.2;R<26;R+=5.4){for(let C=r-1;C>o+1;C-=4.2)b(-s+.1,R+l()*1.6,C+l(),!0),b(s-.1,R+l()*1.6,C+l(),!0);for(let C=-s+4;C<s-3;C+=4.2)b(C+l(),R+l()*1.6,o+.1,!1),b(C+l(),R+l()*1.6,r-.1,!1)}for(let R=r;R>o;R-=3.4)u.add(M(1.1,2.4,5),-s,26.6,R,"#58c45a"),u.add(M(1.1,2.4,5),s,26.6,R,"#58c45a");for(let R=-s;R<s;R+=3.4)u.add(M(1.1,2.4,5),R,26.6,o,"#58c45a"),u.add(M(1.1,2.4,5),R,26.6,r,"#58c45a");{let R=Cp(Math.floor(Date.now()/1e3)%97+1),C=[{rot:Math.PI/2,at:F=>[-s+2.2,r-32-F*(a-64)]},{rot:-Math.PI/2,at:F=>[s-2.2,r-32-F*(a-64)]},{rot:0,at:F=>[-60+F*120,o+2.2]},{rot:Math.PI,at:F=>[-60+F*120,r-2.2]}];for(let F=C.length-1;F>0;F--){let J=Math.floor(R()*(F+1));[C[F],C[J]]=[C[J],C[F]]}let z=["u","h","u","h"];C.forEach((F,J)=>{let K=z[J]==="u"?He(d_,30,15,{urdu:!0,bg:["#0b6b3a","#01411c"],fg:"#ffffff",stroke:"#00230f",border:"#ffd23f",frame:"#2f6b2a"}):He("HARIS",34,13,{bg:["#ff8a1c","#c9400b"],fg:"#ffffff",stroke:"#5a1a00",border:"#ffe27a",frame:"#2f6b2a"}),[Z,ot]=F.at(.12+R()*.76);K.position.set(Z,10.5+R()*5,ot),K.rotation.y=F.rot,i.group.add(K)})}for(let R of n.trees){let C=R.s,z=7*C;u.add(_(.5*C,.8*C,z,7),R.x,z/2,R.z,h(["#7a4b27","#6b4423","#8a5a30"]));for(let F=0;F<4;F++)u.add(M(.35*C,1.3*C,5),R.x+Math.cos(F*1.6)*.8*C,.5,R.z+Math.sin(F*1.6)*.8*C,"#6b4423",0,0,Math.cos(F)*.8);if(R.k===0)u.add(x(3.6*C),R.x,z+2.2*C,R.z,h(w)),u.add(x(2.6*C),R.x+2.4*C,z+.6*C,R.z+.6*C,h(w)),u.add(x(2.5*C),R.x-2.2*C,z+.9*C,R.z-.8*C,h(w));else if(R.k===1)for(let F=0;F<4;F++)u.add(M((3.6-F*.7)*C,3.4*C,8),R.x,z*.62+F*2.1*C,R.z,F%2?"#2f8f46":"#27803c");else{u.add(_(.3*C,.5*C,3.2*C,6),R.x,z+1.4*C,R.z,"#8a5a30");for(let F=0;F<7;F++){let J=F*.9;u.add(M(.9*C,5.2*C,4),R.x+Math.cos(J)*2.1*C,z+3.4*C,R.z+Math.sin(J)*2.1*C,h(w),Math.sin(J)*1.25,0,-Math.cos(J)*1.25+0*J)}u.add(x(.55*C,6,5),R.x+.5*C,z+2.9*C,R.z,"#7a4b27"),u.add(x(.55*C,6,5),R.x-.4*C,z+2.8*C,R.z+.4*C,"#7a4b27")}}for(let[R,C]of E(60,1.6,2500)){let z=.8+l()*.9;u.add(x(1.2*z,7,5),R,.7*z,C,h(w),0,0,0,1.3,.8,1.1),u.add(x(.9*z,7,5),R+1*z,.6*z,C+.5*z,h(w))}for(let[R,C]of E(240,.7,3e3))u.add(_(.05,.05,.7,4),R,.35,C,"#3a8f3a"),u.add(x(.26,6,4),R,.78,C,h(["#ff5fa8","#ffd23f","#ffffff","#ff7a1a","#b58cff"]));for(let[R,C]of E(34,2.2,1500)){let z=.8+l()*1.5;u.add(x(1,6,5),R,.4*z,C,h(["#8e9097","#7c7f87","#a5a7ad"]),l(),l(),0,1.4*z,.8*z,1*z)}for(let[R,C]of E(14,2.4,1500)){u.add(_(.25,.3,1,6),R,.5,C,"#fff3e0"),u.add(x(.9,8,5),R,1.1,C,"#e8403d",0,0,0,1,.55,1);for(let z=0;z<4;z++)u.add(x(.14,5,4),R+Math.cos(z*1.6)*.45,1.45,C+Math.sin(z*1.6)*.45,"#ffffff")}for(let R=0;R<620;R++){let C=(l()-.5)*2*(s-2),z=r-2-l()*(a-4);ia(C,z,0)||u.add(M(.16,.7+l()*.5,4),C,.35,z,h(["#3da043","#56b947","#2f8a3c"]),0,l()*3,(l()-.5)*.5)}let A=Ce.sx,P=Ce.sz,L=Ce.summitY;for(let[R,C]of Ac)u.add(_(.28,.34,2.4,7),A+R,L+1.2,P+C,"#6b4423"),u.add(x(.32,6,5),A+R,L+2.45,P+C,"#8a5a30");for(let R=0;R<16;R++){let C=l()*6.28,z=8+l()*5;u.add(x(1,6,5),d+Math.cos(C)*z*1.6,5.5,g-14+Math.sin(C)*z*2.4,h(["#8e9097","#7c7f87"]),l(),l(),0,1.3,.9,1.1)}for(let R=0;R<26;R++){let C=l()*6.28;u.add(M(.7,1.8,5),d+Math.cos(C)*15,5.9+(l()<.3?5:0),g-14+(l()-.5)*40,h(w))}let D=(R,C,z,F,J=16,V=7,K=["#7a4a1e","#5a3412"])=>{let Z=He(R,J,V,{bg:K,fg:"#fff3c4",stroke:"#2a1204",border:"#ffd23f",frame:"#3b2410"});Z.position.set(C,3.6+V/2,z),Z.rotation.y=F,i.group.add(Z),u.add(_(.3,.3,4+V/2,6),C-J/2+1,(4+V/2)/2,z,"#5a3412"),u.add(_(.3,.3,4+V/2,6),C+J/2-1,(4+V/2)/2,z,"#5a3412")};D("WELCOME TO THE JUNGLE",0,-14,0,20,5.5),D("BEAT ANIMALS WITH THE BAT = NEW PET!",0,-22,0,24,5),D("DINO HILL  >>>",d-8,g+44,0,16,5.5)}var Ie={HW:11,CELL:4.4,COLS:5,ROWS:[5,6,7,8,9],CH:5,PLAZA:16,BOULDER:4,ARENA:40,GATE:3},Je={MAZE:0,BEAST:1,DRAGON:2,FLY:3,WIN:4},p_=["coyote","boar","hyena","bear","gorilla"],Ps=2.3,Pp=1.2,Rc=null;function Fi(){if(Rc)return Rc;let i=-10,t=[];for(let n=0;n<Ie.CH;n++){let s=Ie.ROWS[n],r=i,o=i-s*Ie.CELL;t.push({c:n,rows:s,mz0:r,mz1:o,plazaZ:o-8,boulderZ:o-18,arenaZ0:o-20,arenaZ1:o-60,arenaC:o-40,gateZ:o-61.5,next:o-63,arena:{x0:-Ie.HW+.6,x1:Ie.HW-.6,z0:o-60,z1:o-20}}),i=o-63}let e={z0:i,circlesZ:i-10,cageZ:i-34,dragonZ:i-36,endZ:i-50};return Rc={chapters:t,dr:e,road:{x0:-Ie.HW+.6,x1:Ie.HW-.6,z0:e.endZ+2,z1:12},startZ:8},Rc}var Pf=i=>Array.from({length:i},(t,e)=>(e-(i-1)/2)*5.6),Lp=()=>({ch:0,ph:Je.MAZE,hold:0,fly:0,occ:[],n:1}),Dp=()=>Fi().chapters.map((i,t)=>({id:t,kind:p_[t],x:0,z:i.arenaC,hidden:!0,bounds:i.arena})),Np=()=>({trees:[],petBounds:Fi().road});function m_(i,t){let e=t.chapters[i.id];i.st=0,i.x=0,i.z=e.arenaC,i.y=0,i.tx=0,i.tz=e.arenaC,i.home={x:0,z:e.arenaC},i.wait=.8,i.cool=1.5,i.yaw=0}function g_(i,t,e){return Pf(t).map(s=>e.some(r=>r.y<2.5&&Math.hypot(r.x-s,r.z-i)<Ps+.2)?1:0)}function zp(i,t,e,n,s,r,o=[]){i.n=Math.max(1,s);let a=i.ph===Je.MAZE?r.chapters[i.ch].plazaZ:i.ph===Je.DRAGON?r.dr.circlesZ:null;return a!==null?(i.occ=g_(a,i.n,e),i.occ.every(c=>c)?i.hold+=t:i.hold=0):(i.occ=[],i.hold=0),i.ph===Je.MAZE&&i.hold>=Pp?(i.ph=Je.BEAST,i.hold=0,m_(n[i.ch],r),o.push({k:"boulder",ch:i.ch})):i.ph===Je.BEAST&&n[i.ch].owner?(o.push({k:"gate",ch:i.ch,pid:n[i.ch].owner}),i.ch>=Ie.CH-1?(i.ph=Je.DRAGON,i.ch=Ie.CH):(i.ch++,i.ph=Je.MAZE)):i.ph===Je.DRAGON&&i.hold>=Pp+.4?(i.ph=Je.FLY,i.hold=0,i.fly=0,o.push({k:"cage"})):i.ph===Je.FLY&&(i.fly+=t,i.fly>9&&(i.ph=Je.WIN,o.push({k:"victory"}))),o}var Up=new Map,x_=i=>{let t=Up.get(i);return t||(t=new Ut({color:i,roughness:.82,metalness:0}),Up.set(i,t)),t},wt={sph:(i,t=12,e=9)=>new ue(i,t,e),cyl:(i,t,e,n=8)=>new ft(i,t,e,n),cone:(i,t,e=8)=>new be(i,t,e),box:(i,t,e)=>new qt(i,t,e),cap:(i,t)=>new Ji(i,t,4,10)};function Tt(i,t,e,n=0,s=0,r=0,o={}){let a=new B(t,x_(e));return a.position.set(n,s,r),o.s&&a.scale.set(o.s[0],o.s[1],o.s[2]),o.r&&a.rotation.set(o.r[0],o.r[1],o.r[2]),a.castShadow=!0,i.add(a),a}function Oi(i,t,e,n,s,r=.09){for(let o of[-1,1])Tt(i,wt.sph(r,8,6),"#ffffff",t+o*s,e,n),Tt(i,wt.sph(r*.55,6,5),"#111111",t+o*s,e,n+r*.62)}function hs(i,t,e,n,s,r,o,a){let c=new xt;return c.position.set(t,e,n),i.add(c),Tt(c,wt.cyl(s,s*.82,r,7),o,0,-r/2,0),a&&Tt(c,wt.box(s*2.1,s*.9,s*2.3),a,0,-r+s*.3,s*.25),c}function Mi(){let i=new xt,t=new xt;return i.add(t),{root:i,inner:t,legs:[],head:null,tail:null}}var Dr={horse(){let i=Mi(),t="#8b5a2b",e="#33200f",n=i.inner;Tt(n,wt.cap(.5,1.35),t,0,1.55,0,{r:[Math.PI/2,0,0],s:[.92,1,1]});for(let[o,a,c]of[[-.3,.8,0],[.3,.8,1],[-.3,-.8,2],[.3,-.8,3]])i.legs[c]=hs(n,o,1.2,a,.14,1.2,t,e);Tt(n,wt.cyl(.22,.3,1.1,8),t,0,2.15,1.15,{r:[.62,0,0]});let s=i.head=new xt;s.position.set(0,2.55,1.55),n.add(s),Tt(s,wt.box(.38,.44,.95),t,0,-.1,.35,{r:[.4,0,0]}),Tt(s,wt.box(.4,.1,.3),"#f3e6d0",0,-.32,.72,{r:[.4,0,0]});for(let o of[-1,1])Tt(s,wt.cone(.08,.28,5),t,o*.14,.28,-.02);Oi(s,0,.1,.22,.21,.07),Tt(n,wt.box(.1,.9,.3),e,0,2.3,.9,{r:[.62,0,0]});let r=i.tail=new xt;return r.position.set(0,1.9,-1.25),n.add(r),Tt(r,wt.cone(.2,1.3,6),e,0,-.55,0,{r:[Math.PI,0,0]}),r.rotation.x=-.35,i},lion(){let i=Mi(),t="#d9a441",e="#8a4a14",n=i.inner;Tt(n,wt.cap(.46,1.1),t,0,1.15,0,{r:[Math.PI/2,0,0]});for(let[o,a,c]of[[-.3,.6,0],[.3,.6,1],[-.3,-.6,2],[.3,-.6,3]])i.legs[c]=hs(n,o,.85,a,.17,.85,t,"#a8741f");let s=i.head=new xt;s.position.set(0,1.6,1.15),n.add(s),Tt(s,wt.sph(.78,12,9),e,0,-.05,-.18,{s:[1,1,.78]}),Tt(s,wt.sph(.46,12,9),t,0,0,.25),Tt(s,wt.box(.34,.24,.3),"#efc977",0,-.12,.62),Tt(s,wt.sph(.09,6,5),"#2a1408",0,-.03,.78);for(let o of[-1,1])Tt(s,wt.sph(.13,6,5),t,o*.34,.4,.1);Oi(s,0,.12,.6,.17,.07);let r=i.tail=new xt;return r.position.set(0,1.35,-1),n.add(r),Tt(r,wt.cyl(.06,.06,1.1,5),t,0,-.5,-.1,{r:[.3,0,0]}),Tt(r,wt.sph(.17,7,6),e,0,-1.05,-.28),i},leopard(){let i=Mi(),t="#e8b948",e="#2a1a0a",n=i.inner,s=Tt(n,wt.cap(.38,1.35),t,0,1.05,0,{r:[Math.PI/2,0,0]});for(let a=0;a<22;a++){let c=a*2.399%(Math.PI*2),l=-.9+a%11*.18;Tt(n,wt.sph(.09,5,4),e,Math.sin(c)*.37,1.05+Math.cos(c)*.36,l,{s:[1,1,1.3]})}for(let[a,c,l]of[[-.25,.7,0],[.25,.7,1],[-.25,-.7,2],[.25,-.7,3]])i.legs[l]=hs(n,a,.78,c,.14,.78,t,"#b88a2a");let r=i.head=new xt;r.position.set(0,1.35,1.2),n.add(r),Tt(r,wt.sph(.34,12,9),t,0,0,.1),Tt(r,wt.box(.24,.16,.28),"#f4dc9c",0,-.08,.42),Tt(r,wt.sph(.07,6,5),"#2a1408",0,0,.58);for(let a of[-1,1])Tt(r,wt.sph(.1,6,5),t,a*.24,.3,0),Tt(r,wt.sph(.04,5,4),e,a*.13,.15,.3);Oi(r,0,.1,.34,.14,.055);let o=i.tail=new xt;return o.position.set(0,1.2,-1.15),n.add(o),Tt(o,wt.cyl(.06,.05,1.5,5),t,0,-.1,-.55,{r:[1.15,0,0]}),Tt(o,wt.sph(.09,5,4),e,0,.5,-.95),Tt(o,wt.cyl(.05,.05,.6,5),t,0,.78,-1.15,{r:[.5,0,0]}),i},elephant(){let i=Mi(),t="#8a919c",e="#737b87",n=i.inner;Tt(n,wt.sph(1,14,10),t,0,2.3,0,{s:[1.15,1.2,1.7]});for(let[l,h,u]of[[-.68,1,0],[.68,1,1],[-.68,-1,2],[.68,-1,3]])i.legs[u]=hs(n,l,1.6,h,.4,1.6,t,"#d8d2c4");let s=i.head=new xt;s.position.set(0,2.75,1.85),n.add(s),Tt(s,wt.sph(.82,12,9),t,0,0,.2);let r=-.15,o=.95,a=.3;for(let l=0;l<4;l++)Tt(s,wt.cyl(a,a*.8,.62,7),e,0,r,o+l*.1,{r:[.15+l*.1,0,0]}),r-=.55,o+=.1,a*=.8;for(let l of[-1,1])Tt(s,wt.cyl(.95,.95,.09,14),e,l*1,.1,-.2,{r:[0,0,Math.PI/2],s:[1,1,.8]}).rotation.y=l*.35,Tt(s,wt.cone(.13,.95,6),"#f5f0e0",l*.45,-.38,1.05,{r:[1.15,0,0]});Oi(s,0,.3,.88,.4,.09);let c=i.tail=new xt;return c.position.set(0,2.5,-1.7),n.add(c),Tt(c,wt.cyl(.05,.04,1,5),e,0,-.45,-.05),Tt(c,wt.sph(.1,5,4),"#3a3f46",0,-.98,-.05),i},dino(){let i=Mi(),t="#4fb04a",e="#d6ee94",n="#ff8a2a",s=i.inner;Tt(s,wt.sph(1,14,10),t,0,2.2,0,{s:[.95,1,1.55]}),Tt(s,wt.sph(.9,12,9),e,0,1.95,.2,{s:[.85,.8,1.45]});for(let[a,c,l]of[[-.62,.45,0],[.62,.45,1],[-.62,-.5,2],[.62,-.5,3]])i.legs[l]=hs(s,a,1.5,c,.4,1.5,t,"#2f7a30");let r=i.head=new xt;r.position.set(0,3,1.75),s.add(r),Tt(r,wt.box(.95,.85,1.3),t,0,.1,.55),Tt(r,wt.box(.85,.28,1.2),e,0,-.45,.5);for(let a=0;a<6;a++)for(let c of[-1,1])Tt(r,wt.cone(.06,.2,4),"#ffffff",c*.38,-.28,.05+a*.21,{r:[Math.PI,0,0]});for(let a of[-1,1])Tt(r,wt.sph(.08,5,4),"#1a3a1a",a*.22,.2,1.2),Tt(r,wt.cone(.1,.4,5),n,a*.3,.7,.2);Oi(r,0,.4,.75,.37,.12);for(let a of[-1,1])Tt(s,wt.cyl(.1,.07,.6,5),t,a*.55,2.7,1.1,{r:[-.9,0,a*.3]});let o=i.tail=new xt;o.position.set(0,2.2,-1.4),s.add(o),[[0,0,-.4,.78],[0,.05,-1.2,.6],[0,.12,-1.9,.44],[0,.22,-2.45,.3]].forEach(([a,c,l,h])=>Tt(o,wt.sph(h,9,7),t,a,c,l));for(let a=0;a<6;a++)Tt(s,wt.cone(.2-a*.012,.55,4),n,0,3.05-a*.2,-.9-a*.38);return i}};function Fp(i,t,e,n={}){let s=i.inner,r=n.slope||0;Tt(s,wt.cap(.36,1.25),t,0,1.05+r*.5,0,{r:[Math.PI/2+r,0,0]});for(let[c,l,h,u]of[[-.24,.65,0,.85+r],[.24,.65,1,.85+r],[-.24,-.62,2,.8],[.24,-.62,3,.8]])i.legs[h]=hs(s,c,u,l,.12,u,e,"#3a2a1a");let o=i.head=new xt;o.position.set(0,1.4+r*1.1,1.2),s.add(o),Tt(o,wt.sph(.32,10,8),t,0,0,.1),Tt(o,wt.box(.2,.18,.5),e,0,-.08,.55),Tt(o,wt.sph(.07,6,5),"#111111",0,0,.82);for(let c of[-1,1])Tt(o,wt.cone(n.round?.12:.1,.38,4),t,c*.2,.42,-.02);Oi(o,0,.1,.3,.13,.05);let a=i.tail=new xt;return a.position.set(0,1.2,-1.1),s.add(a),Tt(a,wt.cone(.14,.95,5),e,0,-.45,-.1,{r:[Math.PI-.5,0,0]}),i}Dr.coyote=()=>{let i=Mi();return Fp(i,"#b59a72","#8a7350"),i};Dr.hyena=()=>{let i=Mi(),t=i.inner;Fp(i,"#b79a63","#6b5a35",{slope:.12,round:!0});for(let e=0;e<14;e++)Tt(t,wt.sph(.08,5,4),"#3a2a12",Math.sin(e*2.1)*.34,1.2+Math.cos(e*2.1)*.3,-.8+e%7*.26,{s:[1,1,1.4]});return i};Dr.boar=()=>{let i=Mi(),t="#5c4033",e=i.inner;Tt(e,wt.cap(.55,1),t,0,1,0,{r:[Math.PI/2,0,0]});for(let[r,o,a]of[[-.32,.55,0],[.32,.55,1],[-.32,-.55,2],[.32,-.55,3]])i.legs[a]=hs(e,r,.6,o,.13,.6,t,"#2a1a10");for(let r=0;r<6;r++)Tt(e,wt.cone(.1,.35,4),"#2a1a10",0,1.62,-.8+r*.32);let n=i.head=new xt;n.position.set(0,1.1,1.1),e.add(n),Tt(n,wt.sph(.42,10,8),t,0,0,.1),Tt(n,wt.cyl(.2,.24,.42,8),"#d9a08c",0,-.05,.55,{r:[Math.PI/2,0,0]});for(let r of[-1,1])Tt(n,wt.cone(.07,.4,5),"#f5f0e0",r*.2,-.12,.62,{r:[-.6,0,r*.4]}),Tt(n,wt.cone(.1,.25,4),t,r*.28,.38,0);Oi(n,0,.16,.38,.19,.06);let s=i.tail=new xt;return s.position.set(0,1.2,-1.05),e.add(s),Tt(s,wt.cyl(.04,.04,.5,4),"#d9a08c",0,-.2,-.05),i};function Op(i,t,e,n={}){let s=i.inner,r=n.s||1;Tt(s,wt.sph(1,12,9),t,0,1.75*r,0,{s:[.95*r,1*r,1.35*r]});for(let[c,l,h]of[[-.6,.85,0],[.6,.85,1],[-.6,-.8,2],[.6,-.8,3]])i.legs[h]=hs(s,c*r,1.2*r,l*r,.3*r,1.2*r,t,"#222222");let o=i.head=new xt;o.position.set(0,2.2*r,1.45*r),s.add(o),Tt(o,wt.sph(.62*r,12,9),t,0,0,.1),Tt(o,wt.sph(.34*r,8,6),e,0,-.14*r,.5*r),Tt(o,wt.sph(.09*r,6,5),"#111111",0,-.02*r,.8*r);for(let c of[-1,1])Tt(o,wt.sph(.2*r,8,6),(n.ears,t),c*.46*r,.5*r,0);Oi(o,0,.18*r,.5*r,.24*r,.08*r),n.brow&&Tt(o,wt.box(.9*r,.14*r,.3*r),"#1a1a1e",0,.34*r,.5*r);let a=i.tail=new xt;return a.position.set(0,1.9*r,-1.4*r),s.add(a),Tt(a,wt.sph(.2*r,6,5),t,0,0,0),i}Dr.bear=()=>Op(Mi(),"#6b4a2f","#d2b48c",{s:1,ears:!0});Dr.gorilla=()=>{let i=Mi();return Op(i,"#2d2d33","#6b5a50",{s:1.05,brow:!0}),Tt(i.inner,wt.sph(.8,10,8),"#3a3a42",0,2,.55,{s:[1,.9,.6]}),i};function Bp(){let i=new xt,t=new xt;i.add(t);let e="#7b3fe4",n="#ffd27a",s="#ff5fa8";Tt(t,wt.sph(1,14,10),e,0,3.4,0,{s:[1.7,1.8,3]}),Tt(t,wt.sph(1,12,9),n,0,2.9,.4,{s:[1.3,1.4,2.6]});for(let[a,c]of[[-1.1,1.4],[1.1,1.4],[-1.1,-1.4],[1.1,-1.4]])Tt(t,wt.cyl(.55,.45,1.8,8),e,a,1,c),Tt(t,wt.box(.9,.35,1.2),"#2f1a66",a,.18,c+.2);for(let a=0;a<4;a++)Tt(t,wt.cyl(.7-a*.06,.8-a*.06,1.2,8),e,0,4.1+a*.8,2.7+a*.65,{r:[.55,0,0]});let r=new xt;r.position.set(0,7.2,5.3),t.add(r),Tt(r,wt.box(1.5,1.2,2),e,0,0,.5),Tt(r,wt.box(1.3,.5,1.8),n,0,-.55,.5);for(let a of[-1,1])Tt(r,wt.cone(.22,1.5,6),"#fff2c4",a*.6,.95,-.2,{r:[-.5,0,a*-.3]}),Oi(r,0,.3,1.3,.5,.2),Tt(r,wt.sph(.1,6,5),"#222222",a*.25,.1,1.5);for(let a=0;a<7;a++)Tt(t,wt.cone(.38-a*.025,.9,4),"#ff8a2a",0,5.2-a*.3,-2.4+a*.72-.3,{r:[0,0,0]});[[-3.4,3.2,1],[-4.9,3,.8],[-6.2,2.9,.6],[-7.4,2.9,.4]].forEach(([a,c,l])=>Tt(t,wt.sph(l,8,6),e,0,c,a)),Tt(t,wt.cone(.7,1.4,4),s,0,2.9,-8.4,{r:[-Math.PI/2,0,0]});let o=[];for(let a of[-1,1]){let c=new xt;c.position.set(a*1.5,4.6,.2),t.add(c),Tt(c,wt.cyl(.18,.12,6.2,6),e,a*3,.4,0,{r:[0,0,Math.PI/2+a*.12]});let l=new ze,h=[0,.3,1.2],u=[a*6.2,.9,.2],f=[a*5.4,-.6,-3.8],d=[a*1.6,-.9,-3.4];l.setAttribute("position",new xe([...h,...u,...f,...h,...f,...d],3)),l.computeVertexNormals();let g=new B(l,new Ut({color:s,roughness:.6,side:$e}));g.castShadow=!0,c.add(g),o.push({g:c,sx:a})}return{root:i,body:t,head:r,wings:o}}function Lf(i,t,e=1){i.wings.forEach(n=>{n.g.rotation.z=-n.sx*Math.sin(t*(3+e*6))*(.25+.35*e)}),i.head.rotation.x=Math.sin(t*1.3)*.08,i.body.position.y=Math.sin(t*1.7)*.05*(1-e*.5)}function Hp(i){let t=Dr[i]();return t.root.traverse(e=>{e.isMesh&&(e.receiveShadow=!1)}),t.kind=i,t.stride=i==="elephant"||i==="bear"||i==="gorilla"?1.3:i==="dino"?1.5:2.2,t}function kp(i,t,e,n,s,r){let o=Math.min(1,n/3.5),a=Math.min(1.6,.6+n/7),c=i.ph=(i.ph||0)+e*n*i.stride*1.4+e*0,l=(i.kind==="elephant"||i.kind==="dino"||i.kind==="bear"||i.kind==="gorilla"?.42:.7)*o*Math.min(1,a),h=[0,Math.PI,Math.PI,0];i.legs.forEach((f,d)=>{f.rotation.x=Math.sin(c+h[d])*l});let u=i.inner;if(u.position.y=Math.abs(Math.sin(c))*.06*o*(i.kind==="elephant"?1.4:1)+0,u.scale.y=1+Math.sin(t*2.1)*.012,i.head&&(i.head.rotation.x=Math.sin(c*.5+1)*.06*o+Math.sin(t*1.3)*.03,i.head.rotation.y=Math.sin(t*.7)*.12*(1-o)),i.tail&&(i.tail.rotation.z=Math.sin(t*(2+n*.3))*.35),r>0){let f=1-r;u.rotation.x=f<.7?-.5*(f/.7):.35,i.head&&(i.head.rotation.x-=.4)}else u.rotation.x+=(0-u.rotation.x)*Math.min(1,e*10);u.rotation.z=s===4?Math.sin(t*40)*.12:s===5?Math.sin(t*3)*.04:0}function Gp(i){let t=i>>>0||1;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}var fs=[{name:"MEADOW",ground:"#74d05a",path:"#e8d8a0",fence:"#b0763c",hedge:["#3fae4a","#58c25c","#2f9a44"],leaf:["#2e9b3f","#3fb14c","#58c45a","#7ccf5a"]},{name:"FOREST",ground:"#3f9a4a",path:"#cdb887",fence:"#6b4423",hedge:["#2a7a3a","#1f6a30","#35893f"],leaf:["#1f7a34","#2a8a3c","#27803c","#3a9a4a"]},{name:"SWAMP",ground:"#6b7a3a",path:"#a89c68",fence:"#4a4a30",hedge:["#5a6b2a","#4a5a24","#6c7c34"],leaf:["#5a7a2a","#6c8a34","#4a6a24","#7a9a3c"]},{name:"CANYON",ground:"#d79a58",path:"#f0cf98",fence:"#a8532f",hedge:["#c2693a","#b05a30","#d07a45"],leaf:["#c2693a","#d07a45","#b05a30","#e08a50"]},{name:"SNOW",ground:"#f0f8ff",path:"#cfe6f6",fence:"#9fd0f0",hedge:["#d8efff","#bfe3fa","#e9f6ff"],leaf:["#ffffff","#e4f3ff","#d0e9fa","#f4fbff"]},{name:"VOLCANO",ground:"#4a3a3a",path:"#6b5656",fence:"#2b2020",hedge:["#3a2c2c","#2f2323","#443535"],leaf:["#3a2c2c","#4a3535","#2f2323","#5a4444"]}];function y_(i,t){let e=Ie.COLS,n=Array.from({length:i},()=>Array(e+1).fill(!0)),s=Array.from({length:i+1},()=>Array(e).fill(!0)),r=Array.from({length:i},()=>Array(e).fill(!1)),o=e/2|0,a=[[0,o]];for(r[0][o]=!0;a.length;){let[u,f]=a[a.length-1],d=[];if(u+1<i&&!r[u+1][f]&&d.push([u+1,f]),u-1>=0&&!r[u-1][f]&&d.push([u-1,f]),f-1>=0&&!r[u][f-1]&&d.push([u,f-1]),f+1<e&&!r[u][f+1]&&d.push([u,f+1]),!d.length){a.pop();continue}let[g,y]=d[Math.floor(t()*d.length)];g===u+1?s[u+1][f]=!1:g===u-1?s[u][f]=!1:y===f-1?n[u][f]=!1:n[u][f+1]=!1,r[g][y]=!0,a.push([g,y])}s[0][o]=!1,s[i][o]=!1;let c=new Map([[`0,${o}`,null]]),l=[[0,o]];for(;l.length;){let[u,f]=l.shift();for(let[d,g,y]of[[u+1,f,s[u+1][f]],[u-1,f,u>0?s[u][f]:!0],[u,f-1,n[u][f]],[u,f+1,n[u][f+1]]])!y&&d>=0&&d<i&&g>=0&&g<e&&!c.has(`${d},${g}`)&&(c.set(`${d},${g}`,[u,f]),l.push([d,g]))}let h=[];for(let u=[i-1,o];u;u=c.get(`${u[0]},${u[1]}`))h.unshift(u);return{rows:i,V:n,H:s,sol:h}}function Vp(i,t,e,n=1){let s=Fi(),r=!i.headless,o=i.main,a=i.glow,c=Ie.HW,l=Ie.CELL,h=Gp(n>>>0^1540483477),u=x=>x[Math.floor(h()*x.length)],f=s.dr.endZ,d=3.4,g=.8,y=7;e.startArch=99,e.spawn={x:0,y:0,z:3},i.checkpoints.push({x:0,y:0,z:6,w:14,spawn:[0,0,3]}),i.waterY=-40,i.killY=-60;let p=x=>x<Ie.CH?[s.chapters[x].mz0,s.chapters[x].next]:[s.dr.z0,s.dr.endZ];i.platform(0,0,(12+f-2)/2,c*2+6,12-f+2,{h:2,color:fs[0].ground,pad:!1});for(let x=0;x<=Ie.CH;x++){let[_,M]=p(x),w=fs[x],v=x===0?12.5:_,b=x===Ie.CH?f-1:M;for(let A=v,P=0;A>b+.01;A-=12,P++){let L=Math.min(12,A-b);for(let D of[-1,1])i.platform(D*(c+1),y,A-L/2,2,L,{h:y,color:P%2?w.fence:w.hedge[0],pad:!1})}r&&o.add(i.rbox(c*2,.04,v-b,.01),0,.02,(v+b)/2,w.ground)}i.platform(0,y,13,c*2+6,2,{h:y,color:fs[0].fence,pad:!1}),i.platform(0,y,f-1,c*2+6,2,{h:y,color:fs[5].fence,pad:!1});let m={chapters:[],dragon:null};e.mazes=[],e.mazePaths=[];for(let x of s.chapters){let _=fs[x.c],M=Gp(((n>>>0)+1)*7919+x.c*104729),w=y_(x.rows,M);e.mazes.push(w);let v=ot=>(ot+.5-Ie.COLS/2)*l,b=ot=>x.mz0-(ot+.5)*l;for(let ot=0;ot<x.rows;ot++)for(let gt=0;gt<=Ie.COLS;gt++)w.V[ot][gt]&&i.platform((gt-Ie.COLS/2)*l,d,b(ot),g,l+g,{h:d,color:_.hedge[(ot+gt)%3],pad:!1});for(let ot=0;ot<=x.rows;ot++)for(let gt=0;gt<Ie.COLS;gt++)w.H[ot][gt]&&i.platform(v(gt),d,x.mz0-ot*l,l+g,g,{h:d,color:_.hedge[(ot+gt+1)%3],pad:!1});e.mazePaths.push(w.sol.map(([ot,gt])=>[v(gt),b(ot)])),r&&o.add(i.rbox(c*2-.2,.05,x.rows*l,.01),0,.035,(x.mz0+x.mz1)/2,_.path);let A=w.sol,P=[];for(let ot=2;ot<A.length-1;ot++)P.push(ot);let L=P.filter(ot=>A[ot][1]===A[ot-1][1]&&A[ot][1]===A[ot+1][1]),D=[0,1,2,3,4][x.c],R=[0,4,5,6,7][x.c],C=new Set,z=(ot,gt,Yt)=>{let At=[],Gt=ot.slice();for(let U=Gt.length-1;U>0;U--){let k=Math.floor(M()*(U+1));[Gt[U],Gt[k]]=[Gt[k],Gt[U]]}for(let U of Gt){if(At.length>=gt)break;[...C].some(k=>Math.abs(k-U)<Yt)||(C.add(U),At.push(U))}return At};for(let ot of z(L,D,2)){let[gt,Yt]=A[ot];i.conveyor(v(Yt),.05,b(gt),l-1.2,l-g-.2,R)}let F=x.boulderZ,J=x.gateZ,V=i.addSolid(-c,0,F-Ie.BOULDER/2,c,9,F+Ie.BOULDER/2,{name:"boulder"}),K=i.addSolid(-c,0,J-.75,c,7,J+.75,{name:"gate"}),Z={boulder:{solid:V,grp:null},gate:{solid:K,grp:null}};if(r){o.add(i.rbox(c*2-.2,.05,x.mz1-x.arenaZ1+1,.01),0,.035,(x.mz1+x.arenaZ1)/2-.5,_.path);let ot=new xt;ot.position.set(0,0,F);let gt=Mt=>new Ut({color:Mt,roughness:.95,flatShading:!0}),Yt=["#8d8a84","#7c7a75","#9a968e","#6f6d69"];[[-8.8,3.2,4.2],[-4.4,3,4.4],[0,3.4,4.6],[4.4,3,4.4],[8.8,3.2,4.2],[-6.5,7.4,3.6],[-1.6,7.8,3.8],[3.4,7.6,3.6],[8,7.2,3]].forEach(([Mt,ut,Y],pt)=>{let $=new B(new vo(Y,1),gt(Yt[pt%4]));$.position.set(Mt,ut,(pt%3-1)*.5),$.rotation.set(pt,pt*2,0),$.castShadow=!0,ot.add($)}),i.group.add(ot),Z.boulder.grp=ot;let At=new xt;At.position.set(0,0,J);let Gt=new Ut({color:"#8a5a30",roughness:.8}),U=new Ut({color:"#6b4423",roughness:.8});for(let Mt=-c+.9;Mt<c;Mt+=1.8){let ut=new B(new qt(1.5,7,1.1),(Mt*10|0)%2?Gt:U);ut.position.set(Mt,3.5,0),ut.castShadow=!0,At.add(ut);let Y=new B(new be(.8,1.2,4),Gt);Y.position.set(Mt,7.5,0),Y.rotation.y=Math.PI/4,At.add(Y)}for(let Mt of[1.5,5.2]){let ut=new B(new qt(c*2,.5,1.5),U);ut.position.set(0,Mt,0),At.add(ut)}i.group.add(At),Z.gate.grp=At;let k=(Mt,ut,Y,pt,$,et,ct)=>{let lt=He(Mt,$,et,{bg:ct,fg:"#fff3c4",stroke:"#2a1204",border:"#ffd23f",frame:"#3b2410"});lt.position.set(ut,Y,pt),i.group.add(lt)},rt=(Mt,ut,Y)=>{let pt=new B(new ft(.3,.3,Y,6),U);pt.position.set(Mt,Y/2,ut),i.group.add(pt)};k("STAND ON ALL CIRCLES!",0,10.4,x.plazaZ+5.5,14,3,["#7a4a1e","#5a3412"]),rt(-8.6,x.plazaZ+5.5,11),rt(8.6,x.plazaZ+5.5,11),k(`CHAPTER ${x.c+1} - ${_.name}`,0,10.4,x.mz0+0,14,3,["#2c6b3a","#1a4a26"]),rt(-7.2,x.mz0,11),rt(7.2,x.mz0,11),k("BEAT THE BEAST WITH THE BAT!",0,10.4,x.arenaZ0-3,15,3,["#8a2a1e","#5a1a12"]),rt(-7.8,x.arenaZ0-3,11),rt(7.8,x.arenaZ0-3,11)}m.chapters.push(Z)}let E=s.dr,S=i.addSolid(-8,0,E.dragonZ-8,8,11,E.cageZ+6,{name:"cage"});if(m.dragon={solid:S,grp:null,root:null},r){o.add(i.rbox(c*2-.2,.05,E.z0-f,.01),0,.035,(E.z0+f)/2,fs[5].path);let x=new xt;x.position.set(0,0,(E.cageZ+6+E.dragonZ-8)/2);let _=new Ut({color:"#22222a",roughness:.5,metalness:.5}),M=E.cageZ+6-(E.dragonZ-8);for(let P=-8;P<=8.01;P+=2){let L=new B(new ft(.22,.22,11,6),_);L.position.set(P,5.5,M/2),x.add(L)}for(let P of[-8,8])for(let L=0;L<=M+.01;L+=2.3){let D=new B(new ft(.22,.22,11,6),_);D.position.set(P,5.5,L-M/2),x.add(D)}for(let P of[.3,5.5,10.8]){let L=new B(new qt(16.4,.4,.4),_);L.position.set(0,P,M/2),x.add(L)}let w=new B(new qt(16.4,.4,M),_);w.position.set(0,11,0),x.add(w),i.group.add(x),m.dragon.grp=x;let v=He("FREE THE DRAGON!",18,4.2,{bg:["#7a1e5a","#4a1236"],fg:"#fff3c4",stroke:"#200618",border:"#ffd23f",frame:"#3b2410"});v.position.set(0,12,E.circlesZ+6),i.group.add(v);let b=He("STAND ON ALL CIRCLES!",17,4.2,{bg:["#7a4a1e","#5a3412"],fg:"#fff3c4",stroke:"#2a1204",border:"#ffd23f",frame:"#3b2410"});b.position.set(0,16,E.circlesZ+6),i.group.add(b);let A=He("JUNGLE QUEST",20,5.2,{bg:["#ff8a1c","#c9400b"],fg:"#ffffff",stroke:"#5a1a00",border:"#ffe27a",frame:"#3b2410"});A.position.set(0,12,2),i.group.add(A),v_(i,s,h,u)}e.quest=m,e.questLayout=s}function v_(i,t,e,n){let s=i.main,r=i.glow,o=Ie.HW,a=(d,g=7,y=5)=>new ue(d,g,y),c=(d,g,y,p=7)=>new ft(d,g,y,p),l=(d,g,y=7)=>new be(d,g,y),h=(d,g,y,p,m)=>{let E=7*p;if(d==="round")s.add(c(.5*p,.8*p,E),g,E/2,y,"#7a4b27"),s.add(a(3.6*p),g,E+2*p,y,n(m.leaf)),s.add(a(2.6*p),g+2.3*p,E+.6*p,y+.5*p,n(m.leaf));else if(d==="pine"){s.add(c(.4*p,.6*p,E*.6),g,E*.3,y,"#6b4423");for(let S=0;S<4;S++)s.add(l((3.6-S*.7)*p,3.4*p,8),g,E*.55+S*2.1*p,y,n(m.leaf))}else if(d==="dead"){s.add(c(.3*p,.7*p,E*1.1),g,E*.55,y,"#3a3022");for(let S=0;S<3;S++)s.add(c(.12*p,.25*p,3*p),g+(S-1)*1.1*p,E*(.8+S*.1),y,"#3a3022",0,0,(S-1)*.9)}else if(d==="pillar"){let S=(2.5+e()*2.5)*p,x=(10+e()*14)*p;s.add(i.rbox(S,x,S*.9,.5),g,x/2,y,n(["#c2693a","#b05a30","#d07a45","#e0975a"]),0,e()*3),s.add(i.rbox(S*1.15,1.2,S,.3),g,x*.6,y,"#e8b27a",0,e()*3)}else if(d==="snowpine"){s.add(c(.4*p,.6*p,E*.5),g,E*.25,y,"#5a3a22");for(let S=0;S<4;S++)s.add(l((3.4-S*.7)*p,3.2*p,8),g,E*.45+S*2*p,y,"#2f6f58"),s.add(l((2.6-S*.6)*p,1.6*p,8),g,E*.45+S*2*p+1.1*p,y,"#ffffff")}else{let S=(8+e()*14)*p;s.add(l((3+e()*3)*p,S,6),g,S/2,y,n(["#2d2323","#3a2c2c","#241c1c"]),0,e()*3),r.add(l(.9*p,S*.6,5),g,S*.3,y,"#ff6a1a")}},u=[["round","round","pine"],["pine","pine","round"],["dead","dead","round"],["pillar","pillar","pillar"],["snowpine","snowpine","snowpine"],["rock","rock","rock"]],f=[...t.chapters.map(d=>[d.mz0,d.next]),[t.dr.z0,t.dr.endZ]];f.forEach(([d,g],y)=>{let p=fs[y];for(let m=y===0?14:d;m>(y===Ie.CH?g-12:g);m-=5.2+e()*3.4)for(let E of[-1,1]){let S=E*(o+4.5+e()*20),x=.8+e()*.8;h(n(u[y]),S,m+(e()-.5)*3,x,p),e()<.45&&h(n(u[y]),E*(o+28+e()*30),m+(e()-.5)*6,1.3+e()*1.2,p)}for(let m=0;m<40;m++){let E=(e()<.5?-1:1)*(o-1.2-e()*.9),S=d-e()*(d-g);y===0||y===1?(s.add(c(.05,.05,.7,4),E,.35,S,"#3a8f3a"),s.add(a(.26,6,4),E,.78,S,n(["#ff5fa8","#ffd23f","#ffffff","#ff7a1a","#b58cff"]))):y===2?(s.add(c(.25,.3,.9,6),E,.45,S,"#fff3e0"),s.add(a(.8,8,5),E,1,S,"#8ed36a",0,0,0,1,.55,1)):y===3?s.add(a(1,6,5),E,.3,S,n(["#a8532f","#c2693a"]),e(),e(),0,1.2,.6,1):y===4?s.add(a(1,7,5),E,.3,S,"#ffffff",0,0,0,1.4,.7,1.2):(s.add(a(1,6,5),E,.3,S,"#2d2323",e(),e(),0,1.2,.6,1),r.add(a(.35,6,4),E,.2,S,"#ff6a1a"))}});for(let d=10;d>t.dr.endZ-30;d-=28)for(let g of[-1,1]){let y=Math.min(Ie.CH,Math.max(0,f.findIndex(([m,E])=>d<=m&&d>E))),p=fs[y===-1?0:y];s.add(a(1,12,8),g*(o+110+e()*40),0,d,p.ground,0,0,0,38+e()*24,22+e()*20,30+e()*14)}}var Cc=class{constructor(t,e){this.world=t,this.info=e,this.L=Fi(),this.q=e.quest,this.t=0,this.state=this.L.chapters.map(()=>({boulder:"closed",gate:"closed",bt:0,gt:0})),this._fresh=!0,this.cage="closed",this.fly=0,this.n=0,this.occ=[],this.circleZ=null,this.g=new xt,t.group.add(this.g),this.circles=[];for(let n=0;n<4;n++){let s=new xt,r=new B(new ft(Ps,Ps,.12,40),new oe({color:"#ffd23f",transparent:!0,opacity:.55,toneMapped:!1})),o=new B(new we(Ps,.14,8,40),new oe({color:"#ffffff",toneMapped:!1}));o.rotation.x=Math.PI/2,o.position.y=.08;let a=new B(new ft(Ps*.9,Ps*.9,5,24,1,!0),new oe({color:"#ffd23f",transparent:!0,opacity:.16,side:$e,depthWrite:!1,toneMapped:!1}));a.position.y=2.5;let c=He("STAND HERE",3.8,1.2,{bg:["#ffd23f","#ff9f1c"],fg:"#3a1c00",stroke:"#ffffff",border:"#ffffff"});c.position.y=5.4,s.add(r,o,a,c),s.visible=!1,s.userData={disc:r,ring:o,beam:a,lab:c},this.g.add(s),this.circles.push(s)}this.dragon=Bp(),this.dragon.root.position.set(0,0,this.L.dr.dragonZ),this.dragon.root.scale.setScalar(1.15),this.g.add(this.dragon.root),this.flags={boulder:[],gate:[]}}openBoulder(t,e){let n=this.state[t];n.boulder==="closed"&&(this.q.chapters[t].boulder.solid.active=!1,e?(n.boulder="gone",this.q.chapters[t].boulder.grp.visible=!1):(n.boulder="falling",n.bt=0))}openGate(t,e){let n=this.state[t];n.gate==="closed"&&(this.q.chapters[t].gate.solid.active=!1,e?(n.gate="open",this.q.chapters[t].gate.grp.position.y=9):(n.gate="rising",n.gt=0))}openCage(t){this.cage==="closed"&&(this.q.dragon.solid.active=!1,this.cage="open",this.fly=t?99:0)}setState(t){for(let s=0;s<Ie.CH;s++)(s<t.ch||s===t.ch&&t.ph!==Je.MAZE)&&this.openBoulder(s,this._fresh),s<t.ch&&this.openGate(s,this._fresh);t.ph>=Je.FLY&&this.openCage(this._fresh),this._fresh=!1,this.n=t.n,this.occ=t.occ||[],this.ph=t.ph;let e=t.ph===Je.MAZE?this.L.chapters[t.ch].plazaZ:t.ph===Je.DRAGON?this.L.dr.circlesZ:null;this.circleZ=e;let n=Pf(Math.max(1,t.n));this.circles.forEach((s,r)=>{s.visible=e!==null&&r<n.length,s.visible&&s.position.set(n[r],.06,e)})}event(t){t.k==="boulder"?this.openBoulder(t.ch,!1):t.k==="gate"?this.openGate(t.ch,!1):t.k==="cage"&&this.openCage(!1)}update(t){this.t+=t;let e=this.t;this.circles.forEach((r,o)=>{if(!r.visible)return;let a=this.occ[o],c=r.userData,l=.5+.5*Math.sin(e*4+o);c.disc.material.color.set(a?"#3dff7a":"#ffd23f"),c.disc.material.opacity=a?.8:.4+.25*l,c.beam.material.color.set(a?"#3dff7a":"#ffd23f"),c.beam.scale.y=a?1.2:1,c.ring.scale.setScalar(1+(a?0:.05*l)),c.lab.visible=!a,c.lab.position.y=5.2+.3*Math.sin(e*2.4+o)}),this.q.chapters.forEach((r,o)=>{let a=this.state[o];if(a.boulder==="falling"){a.bt+=t;let c=r.boulder.grp,l=Math.min(1,a.bt/1.5);c.position.y=-l*l*11,c.position.x=Math.sin(a.bt*40)*.25*(1-l),c.rotation.x=l*.5,l>=1&&(c.visible=!1,a.boulder="gone")}if(a.gate==="rising"){a.gt+=t;let c=r.gate.grp,l=Math.min(1,a.gt/1.4);c.position.y=l*9,l>=1&&(a.gate="open")}});let n=this.dragon,s=this.L;if(this.cage==="closed")Lf(n,e,.15),n.root.rotation.y=Math.sin(e*.6)*.15;else{this.fly+=t;let r=this.fly,o=this.q.dragon.grp;o&&(o.position.y=Math.min(r,2)*6,o.visible=r<2.2);let a=Math.max(0,r-1.6)/7.4,c=Math.min(1,a);n.root.rotation.y=Math.PI*Math.min(1,Math.max(0,r-.8)/1.2),n.root.position.set(Math.sin(r*.8)*3*c,c*c*46+Math.min(1,c*4)*3,s.dr.dragonZ-c*150),n.root.scale.setScalar(1.15*(1-c*.55)),Lf(n,e,1)}}};var Fe={HW:12,CH:6,STEP:160,SLOTS:6,ARENA_LEN:56,LIFT_H:9},Ue={WAIT:0,BEAST:1,MACH:2,DONE:3},__=[["coyote","boar"],["hyena","bear"],["boar","hyena"],["bear","coyote"],["gorilla","hyena"],["gorilla","bear"]],In=2.3,fn={P:3.4,PSOLO:7,UP:7.2,LOW:.3,R:1.7},Ic={vy:26,vz:36},Wp=4,Df=i=>[i>>6&3,i>>4&3,i>>2&3,i&3];function Nf(i,t,e,n=0){let s=e?fn.PSOLO:fn.P,r=((i/s+t/3)%1+1)%1,o=e?.3:.5,a=.25,c=a+.1,l=c+o,h=l+.1,u=r<a?fn.UP:r<c?fn.UP+(fn.LOW-fn.UP)*((r-a)/.1):r<l?fn.LOW:r<h?fn.LOW+(fn.UP-fn.LOW)*((r-l)/.1):fn.UP;return fn.UP-(fn.UP-u)*(1-n)}var Ls=null;function Nr(){if(Ls)return Ls;let i=[];for(let n=0;n<Fe.CH;n++){let s=-14-n*Fe.STEP;i.push({c:n,z0:s,trigZ:s-4,arenaC:s-34,arena:{x0:-Fe.HW+1,x1:Fe.HW-1,z0:s-6-Fe.ARENA_LEN,z1:s-6},gateZ:s-66,machZ:s-84,nextZ:s-Fe.STEP+4,end:s-Fe.STEP})}let t=n=>i[n].z0,e=i[Fe.CH-1];return Ls={chapters:i,endZ:e.end-24,road:{x0:-Fe.HW+.6,x1:Fe.HW-.6,z0:e.end-24,z1:12},startZ:8,lift:{x:-5.5,z:t(1)-100,w:6,d:6,cliffZ0:t(1)-102.5,cliffZ1:t(1)-128,panX:6.2,panZ:t(1)-84,panR:3.2},doorZ:i[0].z0-112,crush:{zs:[t(2)-94,t(2)-108,t(2)-122],p1:{x:-8,z:t(2)-78},p2:{x:8,z:t(2)-138}},cannon:{gap:[t(3)-86,t(3)-118],pad:{x:0,z:t(3)-79},tn:{x:-8,z:t(3)-74},tf:{x:8,z:t(3)-132},farZ:t(3)-120},pump:{gap:[t(4)-86,t(4)-122],pl:{x:-5.5,z:t(4)-76},pr:{x:5.5,z:t(4)-76}},simon:{pads:[-9,-3,3,9].map(n=>({x:n,z:t(5)-84})),doorZ:t(5)-112,R:2}},Ls.holes=[Ls.cannon.gap,Ls.pump.gap],Ls}var zf=i=>Array.from({length:i},(t,e)=>(e-(i-1)/2)*5.6),Xp=()=>({ch:0,ph:Ue.WAIT,n:1,hold:0,occ:[],left:0,m:Array.from({length:Fe.CH},(i,t)=>({v:0,done:0,wa:0,wb:0,wc:0,a:t===5?Math.random()*4<<6|Math.random()*4<<4|Math.random()*4<<2|Math.random()*4:0}))}),Yp=()=>{let i=Nr(),t=[];for(let e of i.chapters)for(let n=0;n<Fe.SLOTS;n++)t.push({id:e.c*Fe.SLOTS+n,kind:__[e.c][n%2],x:0,z:e.arenaC,hidden:!0,bounds:e.arena});return t},qp=()=>({trees:[],petBounds:Nr().road}),M_=i=>Math.min(Fe.SLOTS,2+Math.max(1,i));function E_(i,t,e){let n=(e%3-1)*6+(Math.random()-.5)*2,s=t.arenaC+(e<3?-8:8)+(Math.random()-.5)*6;i.st=Ee.IDLE,i.dead=0,i.hp=rn[i.kind].hp,i.x=n,i.z=s,i.y=0,i.tx=n,i.tz=s,i.home={x:n,z:s},i.wait=.6,i.cool=1.6,i.yaw=0}function Zp(i,t,e=[]){return!i||i.st===Ee.HIDDEN||i.dead||i.owner||(i.hp-=1,i.stagger=.16,i.wind=0,i.cool=Math.max(i.cool||0,.5),e.push({k:"hit",id:i.id,hp:i.hp}),i.hp<=0&&(i.dead=1,i.st=Ee.HIDDEN,e.push({k:"kill",id:i.id,pid:t}))),e}var Bi=(i,t,e,n)=>i.y<3&&Math.hypot(i.x-t,i.z-e)<n;function $p(i,t,e,n,s,r,o=[]){if(i.n=Math.max(1,Math.min(4,s)),i.occ=[],i.hold=i.ph===Ue.MACH?i.hold:0,i.ph===Ue.DONE)return o;let a=r.chapters[i.ch],c=i.ch*Fe.SLOTS;if(i.ph===Ue.WAIT){if(e.some(l=>l.z<a.trigZ)){let l=M_(i.n);for(let h=0;h<l;h++)E_(n[c+h],a,h);i.ph=Ue.BEAST,i.left=l,o.push({k:"wave",ch:i.ch,n:l})}}else if(i.ph===Ue.BEAST){let l=0;for(let h=0;h<Fe.SLOTS;h++){let u=n[c+h];u.st!==Ee.HIDDEN&&!u.dead&&l++}i.left=l,l===0&&(i.ph=Ue.MACH,i.hold=0,o.push({k:"gate",ch:i.ch}))}else if(i.ph===Ue.MACH){let l=i.m[i.ch];if(i.ch===0){let h=zf(i.n);i.occ=h.map(u=>e.some(f=>Bi(f,u,a.machZ,In+.2))?1:0),l.done||(i.occ.every(u=>u)?i.hold+=t:i.hold=Math.max(0,i.hold-t*2),i.hold>=1&&(l.done=1,o.push({k:"door",ch:0}))),l.v=Math.max(0,Math.min(1,l.v+(l.done?t/3:0)))}else if(i.ch===1){let h=r.lift,u=l.v*Fe.LIFT_H;l.wa=e.filter(p=>Math.abs(p.x-h.x)<h.w/2&&Math.abs(p.z-h.z)<h.d/2&&p.y>u-1.2&&p.y<u+3).length,l.wb=e.filter(p=>Bi(p,h.panX,h.panZ,h.panR)).length;let f=1.5+l.wb-l.wa,d=l.wa+l.wb===0?0:f>0?1:0,g=d-l.v,y=t*.4;l.v=Math.abs(g)<y?d:l.v+Math.sign(g)*y,l.v>.98&&!l.done&&(l.done=1,o.push({k:"lift",ch:1}))}else if(i.ch===2){let h=r.crush;l.v=(l.v+t)%1e3,l.wb=e.some(f=>Bi(f,h.p1.x,h.p1.z,In+.2))?1:0,l.wc=e.some(f=>Bi(f,h.p2.x,h.p2.z,In+.2))?1:0;let u=i.n>1&&(l.wb||l.wc)?1:0;u!==l.wa&&o.push({k:"freeze",ch:2,on:u}),l.wa=u,!l.done&&e.some(f=>f.z<h.zs[2]-5)&&(l.done=1)}else if(i.ch===3){let h=r.cannon;l.wb=e.some(f=>Bi(f,h.tn.x,h.tn.z,In+.2))?1:0,l.wc=e.some(f=>Bi(f,h.tf.x,h.tf.z,In+.2))?1:0;let u=i.n===1||l.wb||l.wc?1:0;u!==l.wa&&o.push({k:"armed",ch:3,on:u}),l.wa=u,!l.done&&e.some(f=>f.z<h.farZ-2&&f.y<3)&&(l.done=1)}else if(i.ch===4){let h=r.pump,u=e.some(d=>Bi(d,h.pl.x,h.pl.z,In+.2)),f=e.some(d=>Bi(d,h.pr.x,h.pr.z,In+.2));if(l.wb=u?1:0,l.wc=f?1:0,l.done)l.pv=(u?1:0)|(f?2:0);else{for(let[d,g]of[[u,1],[f,2]])d&&!(l.pv&g)&&l.last!==g&&(l.last=g,l.v=Math.min(1,l.v+.125),o.push({k:"pump",ch:4,v:l.v}));l.pv=(u?1:0)|(f?2:0),l.v>=1&&(l.done=1,o.push({k:"bridge",ch:4}))}}else if(i.ch===5){let h=r.simon,u=Df(l.a),f=h.pads.reduce((d,g,y)=>d|(e.some(p=>Bi(p,g.x,g.z,h.R+.2))?1<<y:0),0);if(l.wb=f,!l.done){for(let d=0;d<Wp;d++)if(f>>d&1&&!((l.pv||0)>>d&1))if(u[l.v]===d){if(l.v++,o.push({k:"note",ch:5,i:d,step:l.v}),l.v>=Wp){l.done=1,o.push({k:"solved",ch:5});break}}else l.v>0,l.v=0,l.wc=(l.wc+1)%100,o.push({k:"wrong",ch:5,i:d});l.pv=f}}}return(i.ph===Ue.MACH||i.ph===Ue.BEAST)&&e.some(l=>l.z<a.nextZ)&&i.ph===Ue.MACH&&(i.ch>=Fe.CH-1?(i.ph=Ue.DONE,o.push({k:"end"})):(i.ch++,i.ph=Ue.WAIT,i.hold=0,o.push({k:"chapter",ch:i.ch}))),o}function Kp(i,t){i.ch=t.ch,i.ph=t.ph,i.n=t.n,i.hold=t.hold||0,i.occ=t.occ||[],i.left=t.left||0,(t.m||[]).forEach((e,n)=>{i.m[n]&&Object.assign(i.m[n],{v:e[0],done:e[1],wa:e[2],wb:e[3],wc:e[4]||0,a:e[5]||0})})}function b_(i){let t=i>>>0||1;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}var zr={ground:"#4cae4c",path:"#e2cf98",fence:"#6b4423",hedge:["#2a8a3c","#35993f","#1f7a34"],leaf:["#1f7a34","#2a8a3c","#3fae4a","#58c25c"]},jp={ground:"#5a8f3a",path:"#cdb887",fence:"#5a3a22",hedge:["#3a7a34","#2f6a2c","#4a8a3a"],leaf:["#2f6a2c","#3a7a34","#58903a","#6aa045"]},S_={ground:"#6b7a3a",path:"#a89c68",fence:"#4a4a30",hedge:["#5a6b2a","#4a5a24","#6c7c34"],leaf:["#5a7a2a","#6c8a34","#4a6a24","#7a9a3c"]},w_={ground:"#8a8a3a",path:"#d8c48a",fence:"#8a5a2a",hedge:["#c2693a","#b05a30","#d07a45"],leaf:["#c2693a","#d79a3a","#b05a30","#e0b050"]},T_={ground:"#3f8a6a",path:"#b8d0b0",fence:"#2a5a4a",hedge:["#2a7a6a","#1f6a5a","#35896f"],leaf:["#1f7a6a","#2a8a7a","#3a9a8a","#58b0a0"]},A_={ground:"#5a4a4a",path:"#8a7468",fence:"#2b2020",hedge:["#3a2c2c","#2f2323","#443535"],leaf:["#4a3535","#5a4444","#6a2a2a","#7a3a3a"]},Qp=[zr,jp,S_,w_,T_,A_],Pc=["#ff4d4d","#4d9bff","#3ddc6a","#ffd23f"];function us(i,t="#ffd23f"){let e=new xt,n=new B(new ft(i+.35,i+.45,.22,36),new Ut({color:"#6a6e78",roughness:.6,metalness:.4})),s=new B(new ft(i,i,.2,36),new oe({color:t,toneMapped:!1}));s.position.y=.06;let r=new B(new ft(i*.9,i*.9,5,24,1,!0),new oe({color:t,transparent:!0,opacity:.16,side:$e,depthWrite:!1,toneMapped:!1}));return r.position.y=2.6,e.add(n,s,r),e.userData={pad:s,beam:r},e}function t0(i,t,e,n=1){let s=Nr(),r=!i.headless,o=i.main,a=Fe.HW,c=s.endZ,l=b_(n>>>0^2654435761),h=p=>p[Math.floor(l()*p.length)],u=Xp(),f={st:u,disp:[0,0,0,0,0,0],solids:[],L:s,clock:0,fz:0,doors:{},plates:{},extra:{}};e.hunt=f,e.startArch=99,e.spawn={x:0,y:0,z:3},i.checkpoints.push({x:0,y:0,z:6,w:14,spawn:[0,0,3]}),i.waterY=-40,i.killY=-60;let d=7;{let p=12,m=s.holes.slice().sort((E,S)=>S[0]-E[0]);for(let[E,S]of m)i.platform(0,0,(p+E)/2,a*2+6,p-E,{h:2,color:zr.ground,pad:!1}),p=S;i.platform(0,0,(p+c-2)/2,a*2+6,p-c+2,{h:2,color:zr.ground,pad:!1})}i.platform(0,d,13,a*2+6,2,{h:d,color:zr.fence,pad:!1}),i.platform(0,d,c-1,a*2+6,2,{h:d,color:jp.fence,pad:!1});let g=p=>p<s.lift.cliffZ0+4&&p>s.lift.cliffZ1-28;for(let p=12.5,m=0;p>c-.5;p-=12,m++){let E=Math.min(12,p-c),S=Qp[Math.min(5,Math.max(0,Math.floor((14-p)/Fe.STEP)))],x=g(p-E/2);for(let _ of[-1,1])i.platform(_*(a+1),x?14:d,p-E/2,2,E,{h:x?14:d,color:m%2?S.fence:S.hedge[0],pad:!1})}if(r){let p=12,m=s.holes.slice().sort((S,x)=>x[0]-S[0]),E=(S,x)=>{o.add(i.rbox(a*2,.04,S-x,.01),0,.02,(S+x)/2,zr.ground),o.add(i.rbox(a*2-3,.05,S-x,.01),0,.035,(S+x)/2,zr.path)};for(let[S,x]of m){E(p,S),p=x;let _=new B(new qt(a*2+6,.2,S-x),new Ut({color:"#2a78b8",roughness:.3,transparent:!0,opacity:.9}));_.position.set(0,-14,(S+x)/2),i.group.add(_)}E(p,c)}for(let p of s.chapters){let m=i.addSolid(-a,0,p.gateZ-.75,a,7,p.gateZ+.75,{name:"gate"}),E=null;if(r){E=new xt,E.position.set(0,0,p.gateZ);let S=new Ut({color:"#4a4f58",roughness:.5,metalness:.6});for(let M=-a+.4;M<=a;M+=1.6){let w=new B(new ft(.2,.2,7.4,6),S);w.position.set(M,3.7,0),w.castShadow=!0,E.add(w)}for(let M of[.6,3.4,6.8]){let w=new B(new qt(a*2,.35,.45),S);w.position.set(0,M,0),E.add(w)}i.group.add(E);let x=He("SHOOT ALL THE BEASTS!",17,3.6,{bg:["#9a2a1a","#5a1208"],fg:"#fff3c4",stroke:"#200808",border:"#ffd23f",frame:"#3b2410"});x.position.set(0,10.5,p.gateZ),i.group.add(x);let _=He(`CHAPTER ${p.c+1}`,14,3.6,{bg:["#1f7a34","#0f4a1c"],fg:"#ffffff",stroke:"#052a0e",border:"#ffe27a",frame:"#3b2410"});_.position.set(0,11,p.z0+2),i.group.add(_)}f.solids[p.c]={gate:m,gateGrp:E,gateT:0},i.checkpoints.push({x:0,y:0,z:p.z0-2,w:14,spawn:[0,0,p.z0-3]}),i.checkpoints.push({x:0,y:0,z:p.gateZ-6,w:14,spawn:[0,0,p.gateZ-7]})}{let p=s.chapters[0],m=s.doorZ,E=i.addSolid(-a,0,m-1.2,a,10,m+1.2,{name:"door"});if(f.solids[0].door=E,f.doors[0]={solid:E,grp:null,vi:0},r){let S=new xt;S.position.set(0,0,m);let x=new Ut({color:"#8d8a84",roughness:.95,flatShading:!0}),_=new B(new qt(a*2,10,2.2),x);_.position.y=5,_.castShadow=!0,S.add(_);for(let v=0;v<5;v++){let b=new B(new qt(3.2,3.2,.3),new Ut({color:["#7c7a75","#9a968e","#6f6d69"][v%3],roughness:1,flatShading:!0}));b.position.set(-9.6+v*4.8,3+v%2*3.6,1.2),S.add(b)}i.group.add(S),f.doors[0].grp=S;let M=He("A HEAVY DOOR!  EVERYBODY STAND ON A PLATE",20,3.6,{bg:["#7a4a1e","#5a3412"],fg:"#fff3c4",stroke:"#2a1204",border:"#ffd23f",frame:"#3b2410"});M.position.set(0,13.5,p.machZ-8),i.group.add(M),f.gears=[];for(let v of[-1,1]){let b=sa(3.2,12,"#b8863b");b.position.set(v*(a-1.5),12.6,m-2.4),i.group.add(b),f.gears.push({g:b,dir:v,k:3});let A=sa(1.8,8,"#8a6a30");A.position.set(v*(a-6.1),12.6,m-2.4),i.group.add(A),f.gears.push({g:A,dir:-v,k:-5.3})}let w=new B(new qt(a*2,.6,.6),new Ut({color:"#5a3a1e",roughness:.8}));w.position.set(0,12.6,m-2.4),i.group.add(w)}if(f.plates0=[],r)for(let S=0;S<4;S++){let x=us(In);x.visible=!1,i.group.add(x),f.plates0.push(x)}}{let p=s.chapters[1],m=s.lift,E=Fe.LIFT_H,S=m.cliffZ0-m.cliffZ1;if(i.platform(0,E,(m.cliffZ0+m.cliffZ1)/2,a*2,S,{h:E,color:"#7a6a4a",pad:!0,padColor:"#9a8a62"}),i.ramp(0,m.cliffZ1,E,p.z0-152,0,a*2-2,{}),i.mover(m.x,.15,m.z,m.w,m.d,()=>[0,f.disp[1]*E,0],{h:.6,color:"#c9a063",padColor:"#e8cf90"}),r){let x=new Ut({color:"#6b4423",roughness:.9}),_=new Ut({color:"#c9a063",roughness:.9}),M=E+6;for(let C of[m.x-3.6,m.x+3.6]){let z=new B(new qt(.8,M,.8),x);z.position.set(C,M/2,m.z-3.4),z.castShadow=!0,i.group.add(z)}let w=new B(new qt(m.panX-m.x+8,.7,.8),x);w.position.set((m.panX+m.x)/2,M,m.z-3.4),i.group.add(w);for(let C of[m.panX-2.4,m.panX+2.4]){let z=new B(new qt(.8,M,.8),x);z.position.set(C,M/2,m.panZ-4),i.group.add(z)}f.gears=[];let v=sa(3,12,"#b8863b");v.position.set(m.x,M-1.2,m.z-3.9),i.group.add(v),f.gears.push({g:v,dir:1,k:1});let b=sa(2.2,10,"#8a6a30");b.position.set(m.x+5.2,M-1.2,m.z-3.9),i.group.add(b),f.gears.push({g:b,dir:-1,k:1.36}),f.ropeA=new B(new ft(.09,.09,1,5),_),i.group.add(f.ropeA),f.ropeA2=new B(new ft(.09,.09,1,5),_),i.group.add(f.ropeA2),f.stone=new B(new qt(2.6,2.6,2.6),new Ut({color:"#8d8a84",roughness:.95,flatShading:!0})),f.stone.castShadow=!0,i.group.add(f.stone),f.ropeB=new B(new ft(.09,.09,1,5),_),i.group.add(f.ropeB);let A=new xt;A.position.set(m.panX,.12,m.panZ);let P=new B(new ft(m.panR+.3,m.panR+.4,.3,36),new Ut({color:"#6a6e78",roughness:.6,metalness:.4})),L=new B(new ft(m.panR,m.panR,.22,36),new oe({color:"#4cc9f0",toneMapped:!1}));L.position.y=.08;let D=He("FRIENDS STAND HERE",4.6,1.3,{bg:["#1e88c9","#0f4a7a"],fg:"#ffffff",stroke:"#041a2e",border:"#ffffff"});D.position.y=2.2,A.add(P,L,D),i.group.add(A),f.pan={g:A,pad:L};let R=He("COUNTERWEIGHT LIFT!  RIDE UP - FRIENDS STAND ON THE PAN",24,3.6,{bg:["#7a4a1e","#5a3412"],fg:"#fff3c4",stroke:"#2a1204",border:"#ffd23f",frame:"#3b2410"});R.position.set(0,15,p.machZ+6),i.group.add(R)}}let y=(p,m,E,S,x,_=["#7a4a1e","#5a3412"])=>{if(!r)return;let M=He(p,m,3.6,{bg:_,fg:"#fff3c4",stroke:"#2a1204",border:"#ffd23f",frame:"#3b2410"});M.position.set(E,S,x),i.group.add(M)};{let p=s.chapters[2],m=s.crush;if(f.crush={zs:m.zs},i.hazards.push({type:"crusher",test:(E,S,x)=>{let _=u.n<2;for(let M=0;M<m.zs.length;M++){let w=Nf(f.clock,M,_,f.fz);if(w>2.6||Math.abs(E.z-m.zs[M])>fn.R+.4||E.y+1.55<w-.1||E.y>w+1.4)continue;x.nx=.15,x.nz=Math.sign(E.z-m.zs[M])||1;let v=Math.hypot(x.nx,x.nz);return x.nx/=v,x.nz/=v,x.pow=17,!0}return!1}}),r){let E=new Ut({color:"#4a4f58",roughness:.45,metalness:.6}),S=new Ut({color:"#d9b021",roughness:.5});f.crush.beams=m.zs.map(x=>{let _=new xt;_.position.set(0,fn.UP,x);let M=new B(new qt(a*2-.4,1.4,fn.R*2),E);M.castShadow=!0,_.add(M);for(let v=-5;v<=5;v++){let b=new B(new qt(1.1,1.42,fn.R*2+.02),v%2?S:E);b.position.x=v*2.1,_.add(b)}let w=new B(new qt(a*2-.4,.2,.2),new oe({color:"#ff3d3d",toneMapped:!1}));w.position.set(0,-.8,0),_.add(w),_.userData.glow=w;for(let v of[-1,1]){let b=new B(new ft(.35,.35,12,10),E);b.position.set(v*(a-1.2),6.5,0),_.add(b)}i.group.add(_);for(let v of[-1,1]){let b=new B(new qt(1.6,14,2.6),new Ut({color:"#5a5e68",roughness:.7}));b.position.set(v*(a-1.2),7,x),i.group.add(b)}return _}),f.crush.p1=us(In,"#ffd23f"),f.crush.p1.position.set(m.p1.x,.12,m.p1.z),i.group.add(f.crush.p1),f.crush.p2=us(In,"#ffd23f"),f.crush.p2.position.set(m.p2.x,.12,m.p2.z),i.group.add(f.crush.p2),y("CRUSHERS!  A FRIEND HOLDS A PLATE - THEN SWAP!",22,0,12,m.p1.z+8),y("HOLD THIS PLATE",8,m.p1.x,5,m.p1.z-1,["#1e88c9","#0f4a7a"]),y("THEN THE LAST ONE HOLDS HERE",14,m.p2.x,5,m.p2.z+1,["#1e88c9","#0f4a7a"])}}{let p=s.chapters[3],m=s.cannon,[E,S]=m.gap;if(f.cannonDisc=i.disc(m.pad.x,0,m.pad.z,2.4,{bounce:0,push:[0,-Ic.vz],color:"#ff6a1a"}),r){let x=new Ut({color:"#4a4f58",roughness:.45,metalness:.6}),_=new Ut({color:"#d9822b",roughness:.4,metalness:.5}),M=new B(new ft(1,1.35,5.5,16),x);M.position.set(m.pad.x,2.6,m.pad.z+2.8),M.rotation.x=-.93,M.castShadow=!0,i.group.add(M);let w=new B(new we(1.1,.2,8,18),_);w.position.set(m.pad.x,4.6,m.pad.z+.6),w.rotation.x=Math.PI/2-.64,i.group.add(w);let v=new B(new ft(2.4,2.4,.16,30),new oe({color:"#ff6a1a",toneMapped:!1}));v.position.set(m.pad.x,.1,m.pad.z),i.group.add(v),f.extra.padG=v,f.extra.tn=us(In,"#4cc9f0"),f.extra.tn.position.set(m.tn.x,.12,m.tn.z),i.group.add(f.extra.tn),f.extra.tf=us(In,"#4cc9f0"),f.extra.tf.position.set(m.tf.x,.12,m.tf.z),i.group.add(f.extra.tf),y("CANNON CANYON!  STAND ON THE BLUE PLATE TO FIRE THE CANNON",26,0,12,m.pad.z+10),y("FIRE PLATE",6,m.tn.x,5,m.tn.z-1,["#1e88c9","#0f4a7a"]),y("SEND THE LAST ONE BACK ACROSS!",14,m.tf.x,5,m.tf.z+1,["#1e88c9","#0f4a7a"])}i.checkpoints.push({x:0,y:0,z:m.farZ-4,w:14,spawn:[0,0,m.farZ-5]})}{let p=s.pump,[m,E]=p.gap,S=3,x=(m-E)/S;for(let _=0;_<S;_++)i.mover(0,0,m-x*(_+.5),a*2-.5,x+.6,()=>[0,-(1-f.disp[4])*10,0],{h:1.2,color:"#c9a063",padColor:"#e8cf90",pad:!0});if(r){f.extra.pl=us(In,"#4cc9f0"),f.extra.pl.position.set(p.pl.x,.12,p.pl.z),i.group.add(f.extra.pl),f.extra.pr=us(In,"#ff9f1c"),f.extra.pr.position.set(p.pr.x,.12,p.pr.z),i.group.add(f.extra.pr);let _=new B(new ft(1.1,1.1,8,20,1,!0),new Ut({color:"#cfeaff",transparent:!0,opacity:.35,side:$e}));_.position.set(0,4.2,p.pl.z-1),i.group.add(_);let M=new B(new ft(.95,.95,1,20),new oe({color:"#35b7ff",toneMapped:!1}));M.position.set(0,.2,p.pl.z-1),i.group.add(M),f.extra.wat=M;let w=new B(new ft(1.3,1.3,.5,20),new Ut({color:"#4a4f58",metalness:.6,roughness:.4}));w.position.set(0,8.4,p.pl.z-1),i.group.add(w);let v=new B(new ft(1.4,1.5,.4,20),new Ut({color:"#4a4f58",metalness:.6,roughness:.4}));v.position.set(0,.2,p.pl.z-1),i.group.add(v);let b=sa(4.2,14,"#6b8fb8");b.position.set(-a+1.5,5.2,p.pl.z-1),b.rotation.y=Math.PI/2,i.group.add(b),f.extra.wheel=b;for(let P=0;P<8;P++){let L=new B(new qt(.4,1.6,2.4),new Ut({color:"#8a5a2a"})),D=P*Math.PI/4;L.position.set(0,Math.sin(D)*4.6,Math.cos(D)*4.6),L.rotation.x=-D,b.add(L)}y("PUMP BRIDGE!  STEP LEFT PLATE, RIGHT PLATE, LEFT... (hop in turns!)",28,0,12.5,p.pl.z+8);let A=He("PRESSURE",4,1,{bg:["#1e88c9","#0f4a7a"],fg:"#fff",stroke:"#041a2e",border:"#fff"});A.position.set(0,9.6,p.pl.z-1),i.group.add(A)}}{let p=s.simon,m=i.addSolid(-a,0,p.doorZ-1.2,a,10,p.doorZ+1.2,{name:"door5"});if(f.doors[5]={solid:m,grp:null,vi:0},f.simon={pads:[]},r){let E=new xt;E.position.set(0,0,p.doorZ);let S=new B(new qt(a*2,10,2.2),new Ut({color:"#7a6a8a",roughness:.9,flatShading:!0}));S.position.y=5,S.castShadow=!0,E.add(S);for(let _=0;_<4;_++){let M=new B(new Ro(1.2),new oe({color:Pc[_],toneMapped:!1}));M.position.set(-7.2+_*4.8,5,1.3),E.add(M)}i.group.add(E),f.doors[5].grp=E,p.pads.forEach((_,M)=>{let w=us(p.R,Pc[M]);w.position.set(_.x,.12,_.z),i.group.add(w),f.simon.pads.push(w)}),y("FINAL RIDDLE!  WATCH THE PADS, THEN STAND ON THEM IN THE SAME ORDER",30,0,12.5,p.pads[0].z+8,["#7a1e5a","#4a1236"]);let x=He("THE END... FOR NOW!",20,4,{bg:["#7a1e5a","#4a1236"],fg:"#fff3c4",stroke:"#200618",border:"#ffd23f",frame:"#3b2410"});x.position.set(0,9,s.chapters[5].end-14),i.group.add(x)}}r&&R_(i,s,l,h)}function sa(i,t,e){let n=new xt,s=new Ut({color:e,roughness:.45,metalness:.65}),r=new B(new ft(i,i,.7,28),s);r.rotation.x=Math.PI/2,n.add(r);for(let a=0;a<t;a++){let c=a/t*Math.PI*2,l=new B(new qt(i*.34,i*.3,.7),s);l.position.set(Math.cos(c)*(i+i*.1),Math.sin(c)*(i+i*.1),0),l.rotation.z=c,n.add(l)}let o=new B(new ft(i*.28,i*.28,.95,12),new Ut({color:"#3a3a40",metalness:.7,roughness:.4}));return o.rotation.x=Math.PI/2,n.add(o),n}function R_(i,t,e,n){let s=i.main,r=Fe.HW,o=(c,l=7,h=5)=>new ue(c,l,h),a=(c,l,h,u=7)=>new ft(c,l,h,u);for(let c=14;c>t.endZ-10;c-=5+e()*3.4){let l=Qp[Math.min(5,Math.max(0,Math.floor((14-c)/Fe.STEP)))];for(let h of[-1,1]){let u=h*(r+4.5+e()*20),f=.8+e()*.9,d=7*f,g=c+(e()-.5)*3;if(e()<.3){s.add(a(.35*f,.55*f,d*1.2),u,d*.6,g,"#8a6a3a",0,0,h*.12);for(let y=0;y<6;y++)s.add(new be(.7*f,5*f,4),u+Math.cos(y)*2*f,d*1.2+.2,g+Math.sin(y)*2*f,n(l.leaf),Math.sin(y)*1.1,0,-Math.cos(y)*1.1)}else s.add(a(.5*f,.8*f,d),u,d/2,g,"#7a4b27"),s.add(o(3.6*f),u,d+2*f,g,n(l.leaf)),s.add(o(2.6*f),u+2.3*f,d+.6*f,g+.5*f,n(l.leaf));if(e()<.45){let y=9*(1.3+e());s.add(a(.9,1.4,y),h*(r+28+e()*30),y/2,c,"#6b4423"),s.add(o(7+e()*3),h*(r+28+e()*30),y+3,c,n(l.leaf))}}}for(let c=0;c<200;c++){let l=(e()<.5?-1:1)*(r-1.2-e()*.9),h=8-e()*(8-t.endZ);e()<.5?(s.add(a(.05,.05,.7,4),l,.35,h,"#3a8f3a"),s.add(o(.26,6,4),l,.78,h,n(["#ff5fa8","#ffd23f","#ffffff","#ff7a1a","#b58cff"]))):s.add(o(1,6,5),l,.5,h,n(["#2a8a3c","#35993f"]),0,0,0,1.2,.7,1.1)}for(let c=10;c>t.endZ-30;c-=30)for(let l of[-1,1])s.add(o(1,12,8),l*(r+110+e()*40),0,c,"#3f8f45",0,0,0,38+e()*24,22+e()*20,30+e()*14)}var Jp=new O(0,1,0),Lc=class{constructor(t,e,n){this.world=t,this.info=e,this.h=e.hunt,this.L=this.h.L,this.t=0,this._fresh=!0,this.tr=[],this.scene=n,this.wrongT=0,this.lastWrong=0,this.pumpK=0,this.trGeo=new ft(.06,.06,1,5)}openGate(t,e){let n=this.h.solids[t];!n||n.gateT>0||(n.gate.active=!1,n.gateT=e?1.4:.001,e&&n.gateGrp&&(n.gateGrp.position.y=9))}event(t){t.k==="gate"?this.openGate(t.ch,!1):t.k==="wrong"&&(this.wrongT=.5)}setState(){let t=this.h.st;for(let e=0;e<Fe.CH;e++)(e<t.ch||e===t.ch&&t.ph>=Ue.MACH)&&this.openGate(e,this._fresh);this._fresh=!1}tracer(t,e,n,s,r,o,a="#ffe27a"){let c=s-t,l=r-e,h=o-n,u=Math.hypot(c,l,h)||1,f=new B(this.trGeo,new oe({color:a,transparent:!0,opacity:1,toneMapped:!1,depthWrite:!1}));f.position.set((t+s)/2,(e+r)/2,(n+o)/2),f.scale.set(1,u,1),f.quaternion.setFromUnitVectors(Jp,new O(c/u,l/u,h/u)),this.scene.add(f),this.tr.push({m:f,t:0})}light(t,e,n=!0){if(!t)return;t.visible=n;let s=t.userData;s.pad.material.color.set(e?"#3dff7a":s.base||(s.base="#"+s.pad.material.color.getHexString())),s.pad.position.y=e?-.02:.06,s.beam.material.color.set(e?"#3dff7a":s.base)}update(t){this.t+=t;let e=this.t,n=this.h,s=n.st,r=this.L,o=s.m;this.setState();let a=1-Math.exp(-10*t);n.disp[0]+=(o[0].v-n.disp[0])*a,n.disp[1]+=(o[1].v-n.disp[1])*a,n.disp[4]+=(o[4].v-n.disp[4])*a,n.disp[5]+=((o[5].done?1:0)-n.disp[5])*(1-Math.exp(-2.2*t));for(let f of n.solids)f.gateT>0&&f.gateT<1.4&&f.gateGrp&&(f.gateT+=t,f.gateGrp.position.y=Math.min(1,f.gateT/1.4)*9);for(let f of[0,5]){let d=n.doors[f],g=n.disp[f];d&&(d.solid.y0=g*10.2,d.solid.active=g<.97,d.grp&&(d.grp.position.y=g*10.2))}let c=f=>s.ch===f&&s.ph>=Ue.MACH,l=zf(s.n),h=r.chapters[0],u=s.ch===0&&s.ph===Ue.MACH&&!o[0].done;if((n.plates0||[]).forEach((f,d)=>{if(f.visible=d<l.length&&c(0),!f.visible)return;f.position.set(l[d],.12,h.machZ);let g=o[0].done||s.occ&&s.occ[d];this.light(f,g),f.userData.beam.visible=!!u}),n.gears){let f=s.ch===0||s.ph===Ue.WAIT?n.disp[0]:n.disp[1];for(let d of n.gears)d.g.rotation.z=d.dir*f*d.k*14+(d.k>0?0:.26)}if(n.stone){let f=r.lift,d=Fe.LIFT_H,g=n.disp[1],y=g*d,p=14-g*7,m=d+4.8,E=f.z-3.9,S=o[1];n.stone.position.set(f.panX,p,f.panZ),n.pan.g.position.y=.12-(S.wb?.12:0),n.pan.pad.material.color.set(S.wb?"#3dff7a":"#4cc9f0");let x=(_,M,w,v,b,A,P)=>{let L=b-M,D=A-w,R=P-v,C=Math.hypot(L,D,R)||1;_.position.set((M+b)/2,(w+A)/2,(v+P)/2),_.scale.set(1,C,1),_.quaternion.setFromUnitVectors(Jp,new O(L/C,D/C,R/C))};x(n.ropeA,f.x-2.6,y+.6,f.z,f.x,m,E),x(n.ropeA2,f.x+2.6,y+.6,f.z,f.x,m,E),x(n.ropeB,f.panX,p+1.3,f.panZ,f.x+5.2,m,E)}if(n.crush){let f=o[2];if(n.clock+=t,s.ch===2&&s.ph>=Ue.MACH){let g=f.v-n.clock;g>500&&(g-=1e3),g<-500&&(g+=1e3),Math.abs(g)>.4?n.clock=f.v:n.clock+=g*.08}n.fz+=((f.wa?1:0)-n.fz)*(1-Math.exp(-5*t));let d=s.n<2;n.crush.beams&&(n.crush.beams.forEach((g,y)=>{let p=Nf(n.clock,y,d,n.fz);g.position.y=p;let m=p>2.6&&p<fn.UP-.3;g.userData.glow.material.color.set(m?"#ffffff":p<=2.6?"#ff2020":"#ff3d3d")}),this.light(n.crush.p1,!!f.wb),this.light(n.crush.p2,!!f.wc),n.crush.p1.userData.beam.visible=n.crush.p2.userData.beam.visible=s.n>1)}if(n.cannonDisc){let f=o[3],d=(s.ch===3&&s.ph>=Ue.MACH||s.ch>3)&&!!f.wa;n.cannonDisc.bounce=d?Ic.vy:0,n.cannonDisc.push=[0,-Ic.vz],n.extra.padG&&n.extra.padG.material.color.set(d?"#3dff7a":"#ff6a1a"),this.light(n.extra.tn,!!f.wb),this.light(n.extra.tf,!!f.wc),n.extra.tn&&(n.extra.tn.userData.beam.visible=n.extra.tf.userData.beam.visible=s.n>1)}if(n.extra.wat){let f=o[4],d=n.disp[4],g=Math.max(.05,d*8);n.extra.wat.scale.y=g,n.extra.wat.position.y=.4+g/2,this.pumpK+=(d-this.pumpK)*(1-Math.exp(-4*t)),n.extra.wheel.rotation.x=this.pumpK*14+Math.sin(e*2)*.02,this.light(n.extra.pl,!!f.wb),this.light(n.extra.pr,!!f.wc),n.extra.pl.userData.beam.visible=n.extra.pr.userData.beam.visible=!f.done}if(n.simon){let f=o[5],d=Df(f.a);f.wc!==this.lastWrong&&(this.lastWrong=f.wc,this.wrongT=.5),this.wrongT=Math.max(0,this.wrongT-t);let g=!f.done&&e%8<3.2,y=Math.floor(e%8/.8),p=g&&e%.8<.55?d[y]:-1;n.simon.pads.forEach((m,E)=>{let S=m.userData,x=f.wb>>E&1,_=f.done||x||p===E,M=this.wrongT>0?"#ff2020":Pc[E];S.pad.material.color.set(_?"#ffffff":M),S.beam.material.color.set(_?Pc[E]:M),S.beam.visible=_,S.pad.position.y=x?-.02:.06+(p===E?.12:0),S.beam.scale.y=p===E?1.4:1})}for(let f=this.tr.length-1;f>=0;f--){let d=this.tr[f];d.t+=t,d.m.material.opacity=Math.max(0,1-d.t/.14),d.t>.14&&(this.scene.remove(d.m),d.m.material.dispose(),this.tr.splice(f,1))}}dispose(){for(let t of this.tr)this.scene.remove(t.m),t.m.material.dispose();this.tr=[],this.trGeo.dispose()}};var C_={fun:{plat:["#ff6b9d","#ffd23f","#4cc9f0","#80ed99","#ff9f1c"],pad:"#ffffff",icePad:"#ffffff",edgeGlow:null,hazard:"#ff3d68",hazard2:"#fff7d6",hub:"#6a3fa0",accent:"#ffd23f",convBase:"#7a2d9e",belt:"#ffe9a8"},jungle:{plat:["#3f9d4a","#6bbf59","#8b5e3c","#2f7d3a","#a3d36b"],pad:"#c7f08a",icePad:"#ffffff",edgeGlow:null,hazard:"#ff7a1a",hazard2:"#fff7d6",hub:"#5a3a1e",accent:"#ffd23f",convBase:"#5a3a1e",belt:"#a3d36b"},arena:{plat:["#e9d9bd","#e9d9bd","#e9d9bd","#e9d9bd","#e9d9bd"],pad:"#f6efe0",icePad:"#ffffff",edgeGlow:null,hazard:"#ff6b6b",hazard2:"#ffffff",hub:"#8a8f99",accent:"#ffd23f",convBase:"#9aa3b5",belt:"#dfe6f5"},maze:{plat:["#ff6b9d","#ffd23f","#4cc9f0","#80ed99","#b58cff"],pad:"#ffffff",icePad:"#ffffff",edgeGlow:null,hazard:"#ff3d68",hazard2:"#fff7d6",hub:"#8a4fd1",accent:"#ffd23f",convBase:"#7a2d9e",belt:"#ffe9a8"},annoy:{plat:["#ff6b9d","#ffd23f","#4cc9f0","#80ed99","#b58cff"],pad:"#ffffff",icePad:"#ffffff",edgeGlow:null,hazard:"#ff3d68",hazard2:"#fff7d6",hub:"#5b2d9e",accent:"#ffd23f",convBase:"#7a2d9e",belt:"#ffe9a8"},hunt:{plat:["#3f9d4a","#6bbf59","#8b5e3c","#2f7d3a","#a3d36b"],pad:"#c7f08a",icePad:"#ffffff",edgeGlow:null,hazard:"#ff4d6d",hazard2:"#fff7d6",hub:"#5a3a1e",accent:"#ffd23f",convBase:"#4a3a5e",belt:"#ffe9a8"},quest:{plat:["#3f9d4a","#6bbf59","#8b5e3c","#2f7d3a","#a3d36b"],pad:"#c7f08a",icePad:"#ffffff",edgeGlow:null,hazard:"#ff4d6d",hazard2:"#fff7d6",hub:"#5a3a1e",accent:"#ffd23f",convBase:"#4a3a5e",belt:"#ffe9a8"}},I_=["fun","jungle","quest","arena","maze","annoy","hunt"],e0=37,P_=28,L_=15,n0=26,D_=11,i0=28,N_=15,z_=12;function s0(i,t=!1,e=null,n=1){let s=I_[i],r=C_[s],o=new Mc(r,t);o.arrowTexture=e,o.key=s,o.waterY=-40,o.killY=-60;let a={z:0,y:0},c={key:s,spawn:{x:0,y:0,z:1.5},signs:[],pads:[]};function l(g,y,p={}){var M,w,v;let m=a.z-((M=p.gap)!=null?M:0),E=m-y/2,S=a.y+((w=p.dy)!=null?w:0),x=(v=p.x)!=null?v:0,_=o.platform(x,S,E,g,y,p);return a.z=m-y,a.y=S,{s:_,x,cz:E,near:m,far:m-y,top:S,w:g,d:y}}function h(g,y=3.5){return o.checkpoint(g.x,g.top,g.near-y,Math.min(g.w,16))}function u(g,y,p=0){let m=a.z-.9-3;[-4.7+p,4.7+p].forEach((S,x)=>{let _=x*Math.PI,M=b=>{let A=.5-.5*Math.cos(2*Math.PI*b/y+_);return[1.2*Math.sin(2*Math.PI*A),2.3*Math.sin(2*Math.PI*A),-g*A]};o.mover(S,a.y,m,6,6,b=>M(b),{h:1.3,stripes:!0,color:x?r.plat[2]:r.plat[0]});let w=[],v=48;for(let b=0;b<=v;b++){let A=b/v,P=[S+1.2*Math.sin(2*Math.PI*A),2.3*Math.sin(2*Math.PI*A),-g*A];w.push([P[0],a.y-1.5+P[1],m+P[2]])}for(let b of[-2.2,2.2])o.tube(w.map(A=>[A[0]+b,A[1],A[2]]),.14,r.hazard);o.tube(w.map(b=>[b[0],b[1]-.3,b[2]]),.2,r.hub);for(let b=0;b<=v;b+=4){let A=w[b];o.tube([[A[0],A[1]-.3,A[2]],[A[0],a.y-14,A[2]]],.22,r.hub)}}),a.z=m-g-3-.9}function f(){let g=l(22,34,{gap:0,color:r.plat[0]}),y=g.near-12;return o.arch(0,g.top,y,20,r.accent,!1),c.finishZ=y,c.finishY=g.top,c.finishPlat=g,g}if(i===0){c.startArch=-2,a.z=-16,a.y=0,o.platform(0,0,-430/2,140,450,{h:2,color:"#92e66c",pad:!1});for(let U=4,k=0;U>-446;U-=14,k++)for(let rt of[-1,1])o.platform(rt*(140/2+1),22,U-7,2,14,{h:22,color:r.plat[(k+(rt>0?2:0))%r.plat.length],pad:!1});if(o.platform(0,22,11,144,2,{h:22,color:r.plat[1],pad:!1}),o.platform(0,22,-441,144,2,{h:22,color:r.plat[3],pad:!1}),o.headless||o.main.add(o.rbox(12,.03,232,.01),0,.02,-128,"#f8ebb8"),!o.headless){let k="\u0639\u06A9\u0631\u0645\u06C1",rt=(Mt,ut,Y,pt=12)=>{Mt.position.set(ut*69.7,pt,Y),Mt.rotation.y=ut<0?Math.PI/2:-Math.PI/2,o.group.add(Mt)};rt(ta("pk",30,20),-1,-50),rt(ta("ps",30,20),1,-50),rt(ta("ps",30,20),-1,-290),rt(ta("pk",30,20),1,-290),rt(He("MADE BY HARIS",44,13,{bg:["#ff3d68","#ff9f1c"],fg:"#ffffff",stroke:"#6a1020",border:"#ffd23f"}),-1,-130),rt(He("MADE BY HARIS",44,13,{bg:["#4cc9f0","#3a2d9e"],fg:"#ffd23f",stroke:"#101040",border:"#ffffff"}),1,-170),rt(He(k,30,15,{urdu:!0,bg:["#0b6b3a","#01411c"],fg:"#ffffff",stroke:"#00230f",border:"#ffd23f"}),-1,-210),rt(He(k,30,15,{urdu:!0,bg:["#0b6b3a","#01411c"],fg:"#ffffff",stroke:"#00230f",border:"#ffd23f"}),1,-330)}let p=U=>o.platform(0,.04,U,8,14,{boost:1,color:"#ffd23f",pad:!1,h:.5});o.checkpoint(0,0,-70,16),p(-30),p(-52),[[-16,-26,3.2,20,0],[-22,-36,3.2,24,1],[-14,-46,3.4,28,2],[16,-28,3.2,22,3],[22,-38,3.4,26,4]].forEach(([U,k,rt,Mt,ut])=>o.disc(U,0,k,rt,{bounce:Mt,color:r.plat[ut]})),o.platform(31,9,-52,12,12,{color:r.plat[1]}),o.disc(20,0,-50,3.4,{bounce:29,color:r.hazard}),o.airpad(-26,-62,3.6,0,15),o.platform(-34,13,-62,8,8,{color:r.plat[2]}),o.orbit(-32,-18,6,1.6,3,.8),o.cannon(22,-14,16,[0,-17]),o.pirate(28,-70,16,.55,6.5),o.dropTower(-32,-82,14,13),o.checkpoint(0,0,-72,16),o.ramp(-14,-72,0,-98,10,8,{color:r.plat[3]}),o.platform(-28,10,-104,30,12,{color:r.plat[1]}),o.punch(-44,11.2,-104,1,0,8,{off:0}),o.punch(-12.2,11.2,-104,-1,0,8,{off:1.6}),[-38,-28,-18].forEach((U,k)=>o.ramp(U,-110,10,-152,0,7,{conv:[0,-14],ice:!0,color:r.plat[k*2%5],padColor:"#ffffff"})),o.platform(26,1.2,-90,14,14,{color:r.plat[4]}),o.punch(17.2,2.4,-90,1,0,7,{off:0}),o.punch(34.8,2.4,-90,-1,0,7,{off:1.6}),o.punch(26,2.4,-98.8,0,1,7,{off:.8}),o.punch(26,2.4,-81.2,0,-1,7,{off:2.4});for(let U=0;U<3;U++)o.seesaw(26,2,-112-U*16,9,12,1.4,3.4+U*.4,U*2.1);p(-118),o.checkpoint(0,0,-150,16),o.ramp(-30,-156,0,-182,8,10,{color:r.plat[2]}),o.platform(-30,8,-188,12,12,{color:r.plat[0]}),o.bungee(-30,-203,0,5.5,30,15),o.ferris(-30,11,-224,9,6,.4),o.ramp(26,-156,0,-164,3,14,{color:r.plat[3]}),a.z=-164,a.y=3,l(16,8,{x:26}),u(36,11,26),l(16,8,{x:26}),o.ramp(26,a.z,3,a.z-8,0,14,{color:r.plat[3]}),o.disc(0,.3,-180,8.5,{omega:.7,color:r.plat[0]}),o.headless||(o.main.add(new ft(.5,.5,9,10),0,4.8,-180,"#ffffff"),o.main.add(new be(10,3.2,20),0,10.4,-180,r.hazard)),[-160,-172,-184].forEach((U,k)=>{o.disc(-14,.3,U,3.5,{omega:k%2?1.5:-1.5,color:r.plat[(k+1)%5]}),o.bar(-14,.4,U,6.4,{omega:k%2?-1.1:1.1,h:.9,w:.9})}),o.checkpoint(0,0,-232,16),o.checkpoint(0,0,-244,16);let m=56,E=7,S={x:0,z:(Is+ai)/2},x=-27,_=-420,M=[1,-1],w=[],v=[];for(let U of M)v.push({x:m*U,z:x,r:13,g:"p0"+U},{x:m*U,z:_,r:13,g:"p1"+U}),w.push({ax:m*U,az:x,bx:m*U,bz:_,hw:E,g:"hwy"+U});w.push({ax:-m,az:Is,bx:m,bz:Is,hw:E,g:"con-top"},{ax:-m,az:ai,bx:m,bz:ai,hw:E,g:"con-bot"});let b=[];for(let U of M)for(let k of[-110,-210,-370])b.push({x:m*U,z:k,r:4});let A={segs:w,plazas:v,boosts:[...b,{x:30,z:Is,r:4},{x:-30,z:Is,r:4},{x:30,z:ai,r:4},{x:-30,z:ai,r:4}]};c.track=A,c.cars=[[m-3.5,-33],[m+3.5,-33],[-m-3.5,-33],[-m+3.5,-33]].map(([U,k],rt)=>({id:rt,x:U,z:k,yaw:Math.PI}));let P=Ep();if(!o.headless){let U=o.main,k="#3b3f4d",rt=(Y,pt,$)=>{for(let et of w){if(et.g===$)continue;let ct=et.bx-et.ax,lt=et.bz-et.az,yt=ct*ct+lt*lt,Bt=((Y-et.ax)*ct+(pt-et.az)*lt)/yt;if(Bt=Math.max(0,Math.min(1,Bt)),Math.hypot(Y-(et.ax+ct*Bt),pt-(et.az+lt*Bt))<et.hw-.4)return!0}for(let et of v)if(et.g!==$&&Math.hypot(Y-et.x,pt-et.z)<et.r-.4)return!0;return!1},Mt=[];w.forEach(Y=>{let pt=Math.hypot(Y.bx-Y.ax,Y.bz-Y.az),$=Math.max(1,Math.ceil(pt/12));for(let et=0;et<$;et++)Mt.push({ax:Y.ax+(Y.bx-Y.ax)*et/$,az:Y.az+(Y.bz-Y.az)*et/$,bx:Y.ax+(Y.bx-Y.ax)*(et+1)/$,bz:Y.az+(Y.bz-Y.az)*(et+1)/$,hw:Y.hw,g:Y.g})}),Mt.forEach((Y,pt)=>{let $=Y.bx-Y.ax,et=Y.bz-Y.az,ct=Math.hypot($,et),lt=(Y.ax+Y.bx)/2,yt=(Y.az+Y.bz)/2,Bt=-Math.atan2(et,$),Vt=-et/ct,Qt=$/ct;U.add(o.rbox(ct+.7,.08,Y.hw*2,.02),lt,Y.g.startsWith("hwy")?.053:Y.g.startsWith("con")?.056:.05,yt,k,0,Bt,0);for(let ie of[-1,1]){let H=lt+Vt*ie*(Y.hw-.45),_e=yt+Qt*ie*(Y.hw-.45);if(rt(H,_e,Y.g)||U.add(o.rbox(ct+.05,.09,.9,.02),H,.1,_e,(pt+(ie>0?1:0))%2?"#ff3b3b":"#ffffff",0,Bt,0),pt%2===0){let fe=lt+Vt*ie*(Y.hw+1.3),N=yt+Qt*ie*(Y.hw+1.3);rt(fe,N,Y.g)||(U.add(new ft(.75,.75,.7,10),fe,.35,N,"#23252e"),U.add(new ft(.78,.78,.22,10),fe,.85,N,pt/2%2?"#ff3b3b":"#ffffff"))}}pt%2===0&&!rt(lt,yt,Y.g)&&U.add(o.rbox(Math.min(ct,5)*.55,.06,.3,.02),lt,.1,yt,"#ffffff",0,Bt,0)});for(let Y of v){U.add(new Li(Y.r,48),Y.x,.054,Y.z,k,-Math.PI/2,0,0);for(let pt=0;pt<40;pt++){let $=pt/40*Math.PI*2,et=Y.x+Math.cos($)*(Y.r-.45),ct=Y.z+Math.sin($)*(Y.r-.45);rt(et,ct,Y.g)||U.add(o.rbox(2,.09,.9,.02),et,.1,ct,pt%2?"#ff3b3b":"#ffffff",0,-$+Math.PI/2,0)}for(let pt=0;pt<20;pt++){let $=pt/20*Math.PI*2,et=Y.x+Math.cos($)*(Y.r+1.3),ct=Y.z+Math.sin($)*(Y.r+1.3);rt(et,ct,Y.g)||(U.add(new ft(.75,.75,.7,10),et,.35,ct,"#23252e"),U.add(new ft(.78,.78,.22,10),et,.85,ct,pt%2?"#ff3b3b":"#ffffff"))}}for(let Y of A.boosts){U.add(o.rbox(10,.07,8,.02),Y.x,.12,Y.z,"#ff9f1c");for(let pt=0;pt<3;pt++)U.add(new be(1.5,2,3),Y.x,.16,Y.z+2-pt*2,"#fff3b0",-Math.PI/2*0,Math.PI,0)}for(let Y=0;Y<5;Y++)U.add(o.rbox(26-Y*2,1.1,2.4,.1),S.x,.55+Y*1.1,S.z-2+Y*-2.2,r.plat[Y%5]);let ut=["#0b6b3a","#2f7bff","#ffb21e","#a855f7"];c.cars.forEach((Y,pt)=>{U.add(o.rbox(7.5,.07,9.5,.03),Y.x,.12,Y.z,ut[pt]),U.add(o.rbox(6.9,.075,8.9,.03),Y.x,.125,Y.z,k)});for(let Y of M){let pt=m*Y;for(let[$,et]of[[pt-10.5,-14],[pt+10.5,-14],[pt-10.5,-38],[pt+10.5,-38]])U.add(o.rbox(.8,6,.8,.2),$,3,et,r.plat[1]);U.add(o.rbox(23,.7,27,.2),pt,6.3,x,r.hazard),U.add(o.rbox(21,.4,25,.2),pt,6.75,x,"#ffffff");for(let $=0;$<10;$++)for(let et=0;et<2;et++)U.add(o.rbox(1.4,.07,1.4,.01),pt-6.3+$*1.4,.13,-48-et*1.4,($+et)%2?"#111111":"#ffffff");for(let $ of[-1,1])U.add(o.rbox(.8,6.4,.8,.2),pt+$*8.2,3.2,-48,r.plat[1]);U.add(o.rbox(17.6,1,1.2,.2),pt,6.4,-48,r.hazard)}}if(w.push(...P.segs),A.plazas.push(...P.plazas),A.boosts.push(...P.boosts),A.slicks=P.slicks,P.dyn=bp(P.defs),A.dyn=P.dyn,c.cars.push(...P.racers),c.sky={y:pn,gates:P.gates,garage:P.garage,racerIds:[4,5,6,7],pillars:P.pillars},o.headless||Sp(o,P,r),!o.headless){let U=(rt,Mt,ut,Y,pt,$,et,ct)=>{let lt=He(rt,Mt,ut,Y);return lt.position.set(pt,$,et),lt.rotation.y=ct,o.group.add(lt),lt},k={bg:["#1f8de6","#14609f"],fg:"#ffffff",stroke:"#06223d",border:"#ffd23f"};for(let rt of M){let Mt=m*rt;U("CAR STATION",20,4.6,k,Mt-11.8,8.8,x,-Math.PI/2),U("CAR STATION",20,4.6,k,Mt+11.8,8.8,x,Math.PI/2);for(let[ut,Y]of[[16,-8],[34,-14]]){let pt=new B(new ft(.2,.2,4,8),new Ut({color:"#e8e8f0"}));pt.position.set(ut*rt,2,Y),o.group.add(pt),U(rt>0?"CAR STATION \u2192":"\u2190 CAR STATION",12,3.2,k,ut*rt,4.6,Y,0)}U("LONG ROAD \u2192 DRIVE THE WHOLE MAP",22,3.2,{bg:["#ff9f1c","#e0601a"],fg:"#ffffff",stroke:"#4a1c00",border:"#ffffff"},Mt,5.2,-60,0)}}let L=8,D=7,R=1.2,C=6,z=-356,F=20261017,J=()=>(F=F*1664525+1013904223>>>0,F/4294967296),V=Array.from({length:D},()=>Array(D+1).fill(!0)),K=Array.from({length:D+1},()=>Array(D).fill(!0)),Z=Array.from({length:D},()=>Array(D).fill(!1)),ot=[[0,3]];for(Z[0][3]=!0;ot.length;){let[U,k]=ot[ot.length-1],rt=[];if(U+1<D&&!Z[U+1][k]&&rt.push([U+1,k]),U-1>=0&&!Z[U-1][k]&&rt.push([U-1,k]),k-1>=0&&!Z[U][k-1]&&rt.push([U,k-1]),k+1<D&&!Z[U][k+1]&&rt.push([U,k+1]),!rt.length){ot.pop();continue}let[Mt,ut]=rt[Math.floor(J()*rt.length)];Mt===U+1?K[U+1][k]=!1:Mt===U-1?K[U][k]=!1:ut===k-1?V[U][k]=!1:V[U][k+1]=!1,Z[Mt][ut]=!0,ot.push([Mt,ut])}K[0][3]=!1,K[D][3]=!1;let gt=["#3fae4a","#58c25c","#2f9a44"];for(let U=0;U<D;U++)for(let k=0;k<=D;k++)V[U][k]&&o.platform((k-D/2)*L,C,z-(U+.5)*L,R,L+R,{h:C,color:gt[(U+k)%3],pad:!1});for(let U=0;U<=D;U++)for(let k=0;k<D;k++)K[U][k]&&o.platform((k+.5-D/2)*L,C,z-U*L,L+R,R,{h:C,color:gt[(U+k+1)%3],pad:!1});let Yt=new Map,At=[[0,3]];for(Yt.set("0,3",null);At.length;){let[U,k]=At.shift(),rt=[[U+1,k,K[U+1][k]],[U-1,k,U>0?K[U][k]:!0],[U,k-1,V[U][k]],[U,k+1,V[U][k+1]]];for(let[Mt,ut,Y]of rt)!Y&&Mt>=0&&Mt<D&&ut>=0&&ut<D&&!Yt.has(Mt+","+ut)&&(Yt.set(Mt+","+ut,[U,k]),At.push([Mt,ut]))}let Gt=[];for(let U=[D-1,3];U;U=Yt.get(U[0]+","+U[1]))Gt.unshift([(U[1]+.5-D/2)*L,z-(U[0]+.5)*L]);c.mazePath=Gt,o.checkpoint(0,0,z+2,16),a.z=z-D*L,a.y=.15,f()}else if(i===4){o.waterY=-3,o.killY=-9,c.startArch=3;let g=((n|0)*9301+49297)%233280,y=()=>(g=(g*9301+49297)%233280)/233280,p=r.plat,m=l(22,22,{gap:-4,color:p[3]});h(m,4);let E=l(21,30,{color:p[1]}),S=(Y,pt)=>{let $=Array.from({length:Y},()=>y()<.62);return $.every(Boolean)&&($[pt]=!1),$};o.doorWall(0,E.top,E.near-7,21,7,S(7,2+Math.floor(y()*3))),o.doorWall(0,E.top,E.near-20,21,5,S(5,Math.floor(y()*5))),h(E,27);let x=5,_=a.z-5;for(let Y=0;Y<x;Y++)for(let pt=0;pt<3;pt++)o.tile((pt-1)*7.5,a.y,_-Y*8,5.4,5.4,{period:7,solidT:5.2,warn:1.2,off:pt*2.33+Y*1.3,color:p[(Y+pt)%5]});a.z=_-(x-1)*8-5.4/2-3.2;let M=l(20,14,{color:p[2]});h(M,4);let w=l(10,56,{color:p[4]});[[6,14,1],[20,28,-1],[34,42,1],[46,54,-1]].forEach(([Y,pt,$])=>o.fan(($>0,-5),5,w.near-pt,w.near-Y,w.top-.5,w.top+5,$*4.6,0)),h(w,54);let v=l(16,12,{color:p[0]}),b=(Y,pt,$=4.2)=>{let et=a.z,ct=l(9,10,{gap:Y,color:p[Math.floor(y()*5)]});return o.swing(0,ct.top+8.5,et-Y/2,9,.95,$,pt),ct};b(14,0);let A=b(15,1.9);h(A,4);let P=b(16,3.9,4.6),L=l(14,12,{color:p[1],gap:0});h(L,4);let D=l(14,10,{color:p[2]}),R=34,C=18,z=D.top,F=D.far-5.5;if(o.mover(0,z,F,9,7,Y=>{let pt=.5-.5*Math.cos(2*Math.PI*Y/C);return[0,0,-R*pt]},{h:1.2,color:"#b5651d",padColor:"#e8c48a",stripes:!1}),!o.headless){let Y=new xt;o.add(Y);let pt=new B(new be(2,3.2,4),o.mat("#b5651d"));pt.rotation.x=-Math.PI/2,pt.rotation.z=Math.PI/4,pt.position.set(0,-.3,-5.1),Y.add(pt);let $=new B(new ft(.12,.12,4.5,8),o.mat("#ffffff"));$.position.set(0,2.2,1.6),Y.add($);let et=new B(new qt(.1,1.1,1.8),o.mat(r.hazard));et.position.set(0,3.9,.7),Y.add(et);let ct=[-1,1].map(lt=>{let yt=new xt;yt.position.set(lt*4.5,.9,0);let Bt=new B(new qt(.16,.16,5.4),o.mat("#7a4a1e"));Bt.position.set(lt*1.2,0,0),Bt.rotation.y=0;let Vt=new B(new qt(.9,.12,1.4),o.mat("#ffd23f"));return Vt.position.set(lt*2,0,0),yt.add(Bt,Vt),yt.rotation.y=lt*1.5,Y.add(yt),{pv:yt,sd:lt}});o.updaters.push(lt=>{let yt=.5-.5*Math.cos(2*Math.PI*lt/C);Y.position.set(0,z,F-R*yt),ct.forEach(({pv:Bt,sd:Vt})=>{Bt.rotation.z=Math.sin(lt*3.2)*.35*Vt}),et.rotation.y=Math.sin(lt*5)*.2})}a.z=D.far-45;let J=l(14,12,{gap:0,color:p[3]});h(J,4),c.cannon={x:-4.5,z:D.far+3.5,vy:e0,push:[0,-P_]},o.cannon(c.cannon.x,c.cannon.z,e0,c.cannon.push),c.boatFar=J;let V=l(14,44,{color:p[0]});[8,22,36].forEach((Y,pt)=>o.hammer(0,V.top+11.6,V.near-Y,10,{amp:1,omega:1.5,phase:pt*2.1,r:2,span:9,baseY:V.top-.5})),h(V,42);let K=l(12,8,{color:p[4]});for(let Y=0;Y<4;Y++)o.seesaw(0,a.y+.4,a.z-5.5-Y*13.5,8,11,.9,3.6+Y%2*.6,Y*2.1);a.z-=4*13.5+0;let Z=l(14,10,{color:p[2],gap:0});h(Z,4);let ot=l(14,64,{color:p[3]});[[-4.6,[0,1.9]],[0,[.95,2.85]],[4.6,[1.9,3.8]]].forEach(([Y,pt])=>o.balls(Y,ot.far,ot.near,()=>0,1.5,10,3.8,pt)),h(ot,60);let gt=l(10,8,{color:p[1]}),Yt=a.z-1.3-9.5;o.disc(0,0,Yt,9.5,{color:p[4]}),o.bar(0,.4,Yt,17,{omega:1,h:.9,w:1,arms:1}),a.z=Yt-9.5-1.3;let At=l(12,8,{color:p[2],gap:0});h(At,4);let Gt=l(14,12,{color:p[0]});o.disc(0,0,Gt.far+1.5,3.2,{bounce:30,color:r.hazard});let U=l(12,12,{gap:7,dy:7,color:p[4]});o.disc(0,7,U.far+1.5,3.2,{bounce:30,color:r.hazard});let k=l(12,12,{gap:7,dy:7,color:p[1]});h(k,4),o.ramp(0,k.far,14,k.far-46,0,8,{conv:[0,-14],ice:!0,color:p[2],padColor:"#ffffff"}),a.z=k.far-46,a.y=0;let rt=l(14,12,{gap:0,color:p[3]});h(rt,4);let Mt=b(15,.7,3.8),ut=b(16,2.8,4);h(ut,4),f()}else if(i===5){o.waterY=-1.5,o.killY=-8,c.startArch=3;let g=((n|0)*7919+12345)%233280,y=()=>(g=(g*9301+49297)%233280)/233280,p=r.plat,m=l(36,22,{gap:-4,color:p[3]});h(m,4);let E=16,S=a.z-E/2,x=["#e63946","#f5f5f5","#2b2b2b","#2ecc71","#3a86ff"],_=["red","white","black","green","blue"],M=Math.floor(y()*5);c.tunnelReal=M,c.tunnelNames=_;for(let At=0;At<5;At++){let Gt=(At-2)*7;o.platform(Gt,0,S,7,E,{color:x[At],pad:!1}),o.platform(Gt,5,S,7,E,{h:.5,color:x[At],pad:!1}),At!==M&&o.platform(Gt,4.5,S-E/2+.5,6,1,{h:4.5,color:x[At],pad:!1})}for(let At=-3;At<=2;At++)o.platform(At*7+3.5,4.5,S,1,E,{h:4.5,color:"#e8e2f5",pad:!1});a.z=S-E/2;let w=l(36,10,{color:p[1]});h(w,4);let v=8,b=.55,A=l(10,8,{color:p[2]}),P=a.z-1.5;o.ferris(0,v,P-0,v,6,b);let L=P-v-3.5,D=L-14;o.platform(0,v,(L+D)/2,8,14,{color:p[0],h:1}),o.checkpoint(0,v,L-3.5,8);let R=D-1-2.5-v;o.ferris(0,v,R,v,6,b),a.z=R-1.5,a.y=0;let C=l(10,10,{color:p[4],gap:0});h(C,4),c.ferris={cz1:P,cz2:R,R:v,om:b,deckNear:L,deckFar:D};let z=L_;c.fan={x:0,z:a.z-z/2,top:0,vy:n0,push:[0,-D_]},o.disc(0,0,c.fan.z,4.8,{bounce:n0,push:c.fan.push,fan:!0,color:r.hazard});let F=l(14,22,{gap:z,color:p[0]});h(F,3),o.disc(-3.5,0,F.near-7,2.2,{bounce:18,color:p[1]}),o.disc(3.5,0,F.near-11,2.2,{bounce:20,color:p[2]}),c.tramp={x:0,z:F.far+2.5,vy:i0,push:[0,-N_]},o.disc(0,0,c.tramp.z,2.4,{bounce:i0,push:c.tramp.push,color:r.hazard});let J=l(22,10,{gap:z_,color:p[3]});h(J,3);let V=34,K=5,Z=24,ot=J.far-2-K;o.flagShuttle(-5.5,0,ot,V,Z,0,9,10,"pk"),o.flagShuttle(5.5,0,ot,V,Z,Math.PI,9,10,"es"),c.shuttle={z0:ot,D:V,T:Z,dp:10},a.z=ot-V-K-2,a.y=0;let gt=l(22,12,{gap:0,color:p[1]});h(gt,4);let Yt=l(22,64,{color:p[2]});for(let At=0;At<5;At++)o.bar(-3,.1,Yt.near-9-At*10.5,16,{omega:At%2?-1.25:1.25,h:2.4,w:1,arms:1,phase:At*1.3});o.platform(8.3,.04,Yt.cz,5,62,{color:"#7be495",pad:!1,h:.3}),c.cutters={x:-3,len:16,safeX:[5.9,10.8]},h(Yt,60),f()}else if(i===3){c.startArch=99,c.spawn={x:0,y:0,z:-10},o.checkpoints.push({x:0,y:0,z:0,w:14,spawn:[0,0,-10]}),o.waterY=-40,o.killY=-60;let g=6,y=-114,p=30,m=["#d9e6f7","#cfe0f5"];o.platform(0,0,(g+y)/2,120,120,{h:2,color:"#efe3c8",pad:!1}),o.platform(-61,p,(g+y)/2,2,124,{h:p,color:m[0],pad:!1}),o.platform(61,p,(g+y)/2,2,124,{h:p,color:m[0],pad:!1}),o.platform(0,p,g+1,124,2,{h:p,color:m[1],pad:!1}),o.platform(0,p,y-1,124,2,{h:p,color:m[1],pad:!1});let E=-40,S=16;o.ramp(E,-6,0,-46,S,8,{color:"#f2a65a",padColor:"#ffe3b8"}),o.platform(E,S,-52,12,12,{h:3,color:"#f2a65a",padColor:"#ffe3b8"}),o.ramp(E,-58,S,-100,0,8,{conv:[0,-14],ice:!0,color:"#5bc0eb",padColor:"#ffffff"}),c.slide={x:E,top:S,zTop:-58,zEnd:-100},c.pads=[[22,-28],[46,-28],[22,-88],[46,-88]];for(let[x,_]of c.pads)o.bungee(x,_,0,5.5,30,15);c.finishZ=-99999,c.finishY=99999,c.finishPlat={far:y}}else i===6?(t0(o,r,c,n),c.finishZ=-99999,c.finishY=99999,c.finishPlat={far:Nr().endZ}):i===2?(Vp(o,r,c,n),c.finishZ=-99999,c.finishY=99999,c.finishPlat={far:Fi().dr.endZ}):(Ip(o,r,c),c.finishZ=-99999,c.finishY=99999,c.finishPlat={far:-230});o.finalize();let d=c.finishPlat;return c.length=-c.finishZ,c.checkpoints=o.checkpoints,c.endZ=d.far,{world:o,info:c}}function r0(){return{x:0,y:0,z:0,vx:0,vy:0,vz:0,yaw:Math.PI,grounded:!1,ground:null,coyote:0,jumpBuf:0,stun:0,dive:0,diveCd:0,noSnap:0,hitCd:0,immune:0,boost:0,jumping:!1,noCtrl:0,landSpeed:0,inWater:!1,events:[],moveT:0,yawOff:0,swim:0,waterSurf:0}}var U_=(i,t)=>{let e=(t-i)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e};function Dc(i,t,e,n){let s=t-i.vx,r=e-i.vz,o=Math.hypot(s,r);o<=n||o<1e-6?(i.vx=t,i.vz=e):(i.vx+=s/o*n,i.vz+=r/o*n)}function o0(i,t,e,n){t.coyote=t.grounded?.11:t.coyote-e,t.jumpBuf=n.jumpPressed?.13:t.jumpBuf-e,t.immune>0&&(t.immune-=e),t.stun>0&&(t.stun=Math.max(0,t.stun-e),t.stun<=0&&(t.immune=1)),t.dive>0&&(t.dive=Math.max(0,t.dive-e)),t.diveCd>0&&(t.diveCd-=e),t.noSnap>0&&(t.noSnap-=e),t.hitCd>0&&(t.hitCd-=e),t.boost>0&&(t.boost-=e),t.noCtrl>0&&(t.noCtrl-=e);let s=0,r=0;for(let u of i.pools)if(t.x>u.x0&&t.x<u.x1&&t.z>u.z0&&t.z<u.z1){let f=u.surf-t.y;f>.12&&(s=Math.min(1,f/.9),r=u.surf);break}s>.3&&t.swim<=.3&&(t.events.push("splash"),t.waterSurf=r),t.swim=s;let o=t.stun<=0&&t.dive<=0&&t.noCtrl<=0,a=t.ground&&t.ground.ice,c=Math.abs(n.mx)+Math.abs(n.mz)>.01;if(n.divePressed&&t.diveCd<=0&&t.stun<=0&&t.dive<=0){let u=Math.sin(t.yaw),f=Math.cos(t.yaw);t.vx=u*15.5,t.vz=f*15.5,t.vy=t.grounded?7:Math.max(t.vy,3.5),t.grounded=!1,t.ground=null,t.noSnap=.2,t.dive=.85,t.diveCd=1.1,t.events.push("dive")}if(o){let u=ve.RUN*(t.boost>0?1.45:1)*(t.speedMul||1)*(1-.34*s);if(c){let f=t.grounded?a?ve.ICE_ACC:ve.ACC:ve.AIR;Dc(t,n.mx*u,n.mz*u,f*e);let d=Math.atan2(n.mx,n.mz);t.yaw+=U_(t.yaw,d)*(1-Math.exp(-20*e))}else t.grounded?Dc(t,0,0,(a?ve.ICE_DEC:ve.DEC)*e):Dc(t,0,0,ve.AIR_DEC*e)}else{let u=t.grounded?a?1.2:9:.6;Dc(t,0,0,u*e)}if(s>.4&&n.jumpPressed&&t.stun<=0?(t.vy=9,t.grounded=!1,t.ground=null,t.noSnap=.2,t.jumpBuf=0,t.events.push("stroke")):t.jumpBuf>0&&(t.grounded||t.coyote>0)&&t.stun<=0&&t.dive<=.45&&(t.vy=ve.JUMP*(t.jumpMul||1),t.grounded=!1,t.ground=null,t.coyote=0,t.jumpBuf=0,t.noSnap=.2,t.jumping=!0,t.events.push("jump")),t.jumping&&!n.jumpHeld&&t.vy>6&&(t.vy-=55*e),t.vy=Math.max(ve.TERM,t.vy-ve.G*e*(t.dive>0&&!t.grounded?.8:1)*(1-.92*s)),s>.05){let u=r-(n.jumpHeld?.3:.95);t.vy+=(u-t.y)*26*e*s,t.vy*=Math.exp(-2.4*e*s)}for(let u of i.zones){let f=t.x-u.x,d=t.z-u.z;if(f*f+d*d<u.r*u.r&&t.y>u.y0-.3&&t.y<u.y1){let g=Math.max(0,(t.y-u.y0)/(u.y1-u.y0)),y=u.vmax*(1-g*g);t.vy<y&&(t.vy=Math.min(y,t.vy+u.lift*e)),t.noSnap=Math.max(t.noSnap,.12),t.air||(t.air=!0,t.events.push("air"))}else t.air=!1}for(let u of i.winds)if(t.x>u.x0&&t.x<u.x1&&t.z>u.z0&&t.z<u.z1&&t.y>u.y0-.5&&t.y<u.y1){let f=t.grounded?1:.75;t.x+=u.ax*f*e,t.z+=u.az*f*e}if(t.grounded&&t.ground){let u=t.ground.conv;u&&(t.x+=u[0]*e,t.z+=u[1]*e),t.ground.boost&&(t.boost=.55)}let l=t.grounded,h=t.y;if(t.x+=t.vx*e,t.z+=t.vz*e,i.resolveHorizontal(t),i.resolveHorizontal(t),t.y+=t.vy*e,t.grounded=!1,t.ground=null,t.vy<=0){let u=i.findGround(t,h,l);if(u){let f=-t.vy;t.y=u.top,t.vy=0,t.grounded=!0,t.ground=u.s,t.jumping=!1,u.s.bounce?(t.vy=u.s.bounce,t.grounded=!1,t.ground=null,t.noSnap=.25,t.jumping=!1,u.s.push&&(t.vx=u.s.push[0],t.vz=u.s.push[1],t.noCtrl=.9),u.s.squash!==void 0&&(u.s.squash=1),t.events.push("bounce")):!l&&f>6&&(t.landSpeed=f,t.events.push("land"))}}else{let u=i.hitCeiling(t,h);u&&(t.y=u.y0-ve.H,t.vy=Math.min(0,t.vy*.2))}return t.y<i.waterY-.2&&!t.inWater&&(t.inWater=!0,t.events.push("splash")),t.y<i.killY&&t.events.push("fell"),t}function Ur(i,t,e,n){return i.hitCd>0||i.shield>0?!1:(i.vx=t*n,i.vz=e*n,i.vy=Math.max(i.vy,6.5),i.grounded=!1,i.ground=null,i.noSnap=.25,i.stun=.95,i.dive=0,i.hitCd=.5,i.events.push("hit"),!0)}function Nc(i,t,e,n,s){i.x=t,i.y=e,i.z=n,i.vx=i.vy=i.vz=0,i.grounded=!1,i.ground=null,i.stun=0,i.dive=0,i.inWater=!1,i.hitCd=1,i.yaw=s!=null?s:Math.PI,i.noSnap=0,i.boost=0}var F_=(i,t,e)=>i<t?t:i>e?e:i,Pn=(i,t={})=>{var e,n,s;return new Co({color:i,roughness:(e=t.r)!=null?e:.3,clearcoat:(n=t.cc)!=null?n:.65,clearcoatRoughness:.25,metalness:(s=t.m)!=null?s:0})},je=(i,t=.55)=>new Ut({color:i,roughness:t}),Uf=(i,t,e)=>{let n=new B(new Ji(i,t,6,16),e);return n.castShadow=!0,n},Mn=(i,t,e=16,n=12)=>{let s=new B(new ue(i,e,n),t);return s.castShadow=!0,s},c0=je("#ffffff",.25),h0=je("#101018",.4);function Ff(i,t,e,n,s,r=.55){for(let o of[-1,1]){let a=Mn(s,c0);a.position.set(o*n,t,e);let c=Mn(s*r,h0);c.position.set(0,0,s*.62),a.add(c),i.add(a)}}function a0(i,t){let e=new ji;for(let n=0;n<10;n++){let s=-Math.PI/2+n*Math.PI/5,r=n%2?t:i,o=Math.cos(s)*r,a=Math.sin(s)*r;n?e.lineTo(o,a):e.moveTo(o,a)}return e.closePath(),e}var l0=[{name:"Bubbles",pivotY:.85},{name:"Ninja",pivotY:.95},{name:"Dino",pivotY:.8},{name:"Robo",pivotY:.9}],Ds=class{constructor(t){this.id=t,this.group=new xt,this.pivot=new xt,this.inner=new xt,this.group.add(this.pivot),this.pivot.add(this.inner),this.pivot.position.y=l0[t].pivotY,this.inner.position.y=-l0[t].pivotY,this.body=new xt,this.inner.add(this.body),this.t=Math.random()*10,this.phase=0,this.squash=0,this.tumble=0,this.lean=0,this.dive=0,this.wag=[],this.height=1.7,[this.buildBubbles,this.buildNinja,this.buildDino,this.buildRobo][t].call(this),this.makeBat(),this.makeExtras(),this.group.traverse(e=>{e.isMesh&&(e.castShadow=!0)})}limbs(t,e,n,s,r,o,a,c,l,h,u,f){let d=(g,y,p,m,E,S)=>{let x=new xt;x.position.set(g,y,0);let _=Uf(p,m,E);if(_.position.y=-m/2-p*.6,x.add(_),S){let M=S();x.add(M)}return this.inner.add(x),x};this.legL=d(-t,e,n,s,r,f?()=>{let g=Mn(n*1.35,f);return g.scale.set(1,.6,1.5),g.position.set(0,-s-n*.55,n*.7),g}:null),this.legR=d(t,e,n,s,r,f?()=>{let g=Mn(n*1.35,f);return g.scale.set(1,.6,1.5),g.position.set(0,-s-n*.55,n*.7),g}:null),this.armL=d(-o,a,c,l,h,u?()=>{let g=Mn(c*1.45,u);return g.position.y=-l-c*.9,g}:null),this.armR=d(o,a,c,l,h,u?()=>{let g=Mn(c*1.45,u);return g.position.y=-l-c*.9,g}:null),this.handY=-l-c*.9}makeExtras(){let t=this.height,e=new B(new ue(t*.64,22,14),new oe({color:"#7fd8ff",transparent:!0,opacity:.3,depthWrite:!1}));e.position.y=t*.52,e.visible=!1,this.group.add(e),this.shield=e;let n=Pn("#ffd23f",{m:.6,r:.25}),s=new xt,r=new B(new ft(.2,.17,.12,5),n);s.add(r);for(let o=0;o<5;o++){let a=o/5*Math.PI*2,c=new B(new be(.06,.2,6),n);c.position.set(Math.cos(a)*.17,.15,Math.sin(a)*.17),s.add(c)}s.position.y=t+.22,s.scale.setScalar(1.15),s.visible=!1,this.group.add(s),this.leadCrown=s}makeBat(){let t=Pn("#d9a15a",{r:.45,cc:.3}),e=je("#3a2412",.7),n=je("#ff3b3b",.5),s=new xt,r=new B(new ft(.035,.045,.5,10),e);r.position.y=-.18,s.add(r);let o=new B(new ft(.05,.125,.8,14),t);o.position.y=-.7,s.add(o);let a=new B(new ue(.125,12,8),t);a.scale.y=.5,a.position.y=-1.1,s.add(a);let c=new B(new we(.075,.018,6,16),n);c.rotation.x=Math.PI/2,c.position.y=-.52,s.add(c);let l=new B(new ue(.06,8,6),e);l.position.y=.07,s.add(l),s.position.set(0,this.handY,.02),s.visible=!1,s.traverse(h=>{h.isMesh&&(h.castShadow=!0)}),this.armR.add(s),this.bat=s}buildBubbles(){let t=Pn("#ff5fb4"),e=Pn("#d63a8d"),n=Uf(.47,.34,t);n.position.y=.3+.64,this.body.add(n),this.limbs(.2,.42,.13,.12,t,.5,.95,.11,.22,t,je("#ffffff",.3),je("#7a2cff",.4)),Ff(this.body,1.2,.4,.17,.13);for(let a of[-1,1]){let c=Mn(.07,je("#ff8fcf"));c.scale.set(1.4,.8,.5),c.position.set(a*.3,1.04,.4),this.body.add(c)}let s=new B(new Qi(a0(.17,.075),{depth:.04,bevelEnabled:!1}),Pn("#ffd23f",{m:.3}));s.position.set(0,.8,.455),this.body.add(s);let r=new xt;r.position.set(0,1.55,.02);let o=new B(new ft(.27,.3,.16,20),Pn("#ffd23f",{m:.55,r:.2}));r.add(o);for(let a=0;a<5;a++){let c=a/5*Math.PI*2,l=new B(new be(.065,.22,8),Pn("#ffd23f",{m:.55,r:.2}));l.position.set(Math.cos(c)*.23,.18,Math.sin(c)*.23),r.add(l);let h=Mn(.04,je(a%2?"#35e0ff":"#ff3b6b",.2));h.position.set(Math.cos(c)*.23,.3,Math.sin(c)*.23),r.add(h)}this.body.add(r),this.crown=r,this.height=1.95}buildNinja(){let t=Pn("#2f6bff"),e=Pn("#14224f",{cc:.3}),n=Uf(.36,.76,t);n.position.y=.34+.74,this.body.add(n),this.limbs(.15,.55,.11,.3,e,.42,1.28,.09,.3,t,je("#14224f"),je("#0a0a14"));let s=new B(new ft(.372,.372,.22,24,1,!0),je("#0b0b17",.5));s.position.y=1.5,this.body.add(s);let r=new B(new ue(.372,24,8,0,Math.PI*2,0,Math.PI/2),je("#0b0b17",.5));r.scale.set(1,.96,1),r.position.y=1.46,this.body.add(r),Ff(this.body,1.5,.3,.14,.1,.65);let o=new B(new we(.31,.05,8,28),je("#ff2b4a",.4));o.rotation.x=Math.PI/2,o.position.y=1.64,this.body.add(o),this.tails=[];for(let h=0;h<2;h++){let u=new xt;u.position.set(h?.06:-.06,1.64,-.3);let f=new B(new qt(.1,.05,.6),je("#ff2b4a",.4));f.position.z=-.3,u.add(f),this.body.add(u),this.tails.push(u)}let a=new B(new we(.37,.05,8,28),je("#ffd23f",.4));a.rotation.x=Math.PI/2,a.position.y=.95,this.body.add(a);let c=new B(new we(.31,.07,8,24),je("#ffffff",.5));c.rotation.x=Math.PI/2,c.position.y=1.28,this.body.add(c);let l=new B(new Qi(a0(.13,.04),{depth:.03,bevelEnabled:!1}),Pn("#d8e2ff",{m:.8,r:.2}));l.scale.set(1,1,1),l.position.set(0,.7,.34),this.body.add(l),this.height=1.95}buildDino(){let t=Pn("#3ddc84"),e=Pn("#c8ffd9"),n=Pn("#ff9f1c"),s=Mn(.58,t,28,20);s.scale.set(1,1.08,.98),s.position.y=.3+.62,this.body.add(s);let r=Mn(.45,e,22,16);r.scale.set(.85,.95,.5),r.position.set(0,.85,.36),this.body.add(r),this.limbs(.24,.42,.15,.1,t,.52,.85,.09,.12,t,null,je("#1f9d5b"));for(let l of[this.legL,this.legR])for(let h=-1;h<=1;h++){let u=new B(new be(.035,.12,6),c0);u.rotation.x=Math.PI/2,u.position.set(h*.07,-.22,.36),l.add(u)}let o=Mn(.3,t,18,12);o.scale.set(1,.7,.9),o.position.set(0,1,.5),this.body.add(o);for(let l of[-1,1]){let h=Mn(.03,h0,8,6);h.position.set(l*.08,1.08,.76),this.body.add(h)}Ff(this.body,1.42,.34,.22,.17,.5);for(let l of[-1,1]){let h=new B(new be(.06,.2,8),je("#fff1c2",.4));h.position.set(l*.2,1.68,.18),h.rotation.z=-l*.25,this.body.add(h)}[.62,.8,1,1.2,1.38].forEach((l,h)=>{let u=[.13,.18,.21,.18,.13][h],f=new B(new be(u*.75,u*2,8),n),d=-Math.sqrt(Math.max(.02,.58*.58-(l-.92)*(l-.92)/1.17))-.02;f.position.set(0,l,d),f.rotation.x=-(1.15-h*.2),this.body.add(f)}),this.tail=new xt,this.tail.position.set(0,.55,-.45);let a=new B(new be(.22,.9,12),t);a.rotation.x=-Math.PI/2-.4,a.position.set(0,0,-.4),this.tail.add(a);let c=Mn(.07,n);c.position.set(0,-.2,-.78),this.tail.add(c),this.body.add(this.tail),this.height=1.85}buildRobo(){let t=Pn("#ffc233"),e=Pn("#b4bdcc",{m:.7,r:.25}),n=je("#1c2233",.4),s=new oe({color:"#4ff3ff"}),r=new B(new Ji(.46,.4,6,16),t);r.scale.set(1,1,.92),r.position.y=.98,r.castShadow=!0,this.body.add(r);let o=new B(new qt(.64,.3,.12),n);o.position.set(0,1.28,.4),o.rotation.x=-.12,this.body.add(o);for(let u of[-1,1]){let f=Mn(.075,s,10,8);f.scale.set(1,1.15,.5),f.position.set(u*.16,1.29,.47),this.body.add(f)}let a=new B(new qt(.26,.05,.05),n);a.position.set(0,1.03,.45),this.body.add(a);let c=new B(new qt(.34,.24,.06),e);c.position.set(0,.76,.43),c.rotation.x=-.05,this.body.add(c);for(let[u,f]of[[-.1,.82],[.1,.82],[-.1,.7],[.1,.7]]){let d=Mn(.025,n,6,4);d.position.set(u,f,.47),this.body.add(d)}for(let u of[-1,1]){let f=new B(new ft(.1,.1,.16,12),e);f.rotation.z=Math.PI/2,f.position.set(u*.5,1.28,0),f.castShadow=!0,this.body.add(f)}let l=new B(new ft(.025,.025,.3,8),e);l.position.set(0,1.78,0),this.body.add(l);let h=Mn(.075,je("#ff3b3b",.3),12,8);h.position.set(0,1.97,0),this.body.add(h),this.limbs(.2,.45,.12,.14,e,.52,.98,.1,.22,e,je("#ff4d4d",.4),je("#2b3347",.4)),this.height=2}update(t,e){this.t+=t;let n=F_(e.speed/10.5,0,1.3);e.grounded&&!e.stun&&(this.phase+=t*(5+n*11));let s=Math.sin(this.phase),r=n*.95;if(e.stun>0)this.tumble+=t*11,this.pivot.rotation.x=this.tumble,this.pivot.rotation.z=Math.sin(this.tumble*.5)*.4,this.legL.rotation.x=Math.sin(this.t*16)*1,this.legR.rotation.x=-Math.sin(this.t*16)*1,this.armL.rotation.z=-1.5+Math.sin(this.t*18)*.5,this.armR.rotation.z=1.5-Math.sin(this.t*18)*.5,this.armL.rotation.x=this.armR.rotation.x=0;else{let c=Math.round(this.tumble/(Math.PI*2))*Math.PI*2;this.tumble+=(c-this.tumble)*Math.min(1,t*14),this.pivot.rotation.z*=Math.max(0,1-t*12);let l=e.dive>0?1:0;this.dive+=(l-this.dive)*Math.min(1,t*16);let h=(e.grounded?n*.2:.05)+this.dive*1.35;if(this.lean+=(h-this.lean)*Math.min(1,t*14),this.pivot.rotation.x=this.tumble+this.lean,e.celebrate){let u=Math.abs(Math.sin(this.t*6))*.35;this.body.position.y=u,this.armL.rotation.z=-2.6+Math.sin(this.t*14)*.3,this.armR.rotation.z=2.6-Math.sin(this.t*14)*.3,this.armL.rotation.x=this.armR.rotation.x=0,this.legL.rotation.x=this.legR.rotation.x=0}else if(this.dive>.3)this.armL.rotation.x=this.armR.rotation.x=-2.9,this.armL.rotation.z=-.15,this.armR.rotation.z=.15,this.legL.rotation.x=this.legR.rotation.x=.2;else if(e.grounded){this.legL.rotation.x=s*r,this.legR.rotation.x=-s*r,this.armL.rotation.x=-s*r*.9,this.armR.rotation.x=s*r*.9;let u=Math.sin(this.t*2.2)*.04;this.armL.rotation.z=-.15-u-n*.2,this.armR.rotation.z=.15+u+n*.2}else{let u=e.vy>0;this.legL.rotation.x=u?.7:.35,this.legR.rotation.x=u?-.5:-.2,this.armL.rotation.z=-2.2,this.armR.rotation.z=2.2,this.armL.rotation.x=this.armR.rotation.x=0}e.celebrate||(this.body.position.y=e.grounded?Math.abs(s)*.07*n:0)}if(this.shield.visible=!!e.shield,e.shield){let c=1+Math.sin(this.t*8)*.04;this.shield.scale.set(c,c,c)}if(this.leadCrown.visible=!!e.leader,e.leader&&(this.leadCrown.rotation.y+=t*2.2,this.leadCrown.position.y=this.height+.22+Math.sin(this.t*3)*.05),this.bat.scale.setScalar(e.mega?1.6:1),e.swing>0&&!e.stun){let c=e.swing,l;if(c<.3)l=-2.95*(c/.3);else{let h=(c-.3)/.7;l=-2.95+2.75*(1-(1-h)*(1-h))}this.armR.rotation.x=l,this.armR.rotation.z=.12,this.pivot.rotation.x=this.tumble+this.lean+(c>.3?.28*Math.sin(Math.min(1,(c-.3)/.35)*Math.PI):0),this.bat.visible=!0}else this.bat.visible=!1;e.landed&&(this.squash=1),this.squash=Math.max(0,this.squash-t*5);let o=1-Math.sin(this.squash*Math.PI)*.22*this.squash;!e.grounded&&e.vy>2&&!e.stun&&(o=1.1),!e.grounded&&e.vy<-8&&(o=1.06);let a=1+(1-o)*.55;this.body.scale.set(a,o,a),this.tails&&this.tails.forEach((c,l)=>{c.rotation.x=-.15-n*.5+Math.sin(this.t*9+l)*.12*(.4+n),c.rotation.y=(l?1:-1)*(.15+Math.sin(this.t*7+l*2)*.12)}),this.tail&&(this.tail.rotation.y=Math.sin(this.t*(6+n*6))*(.35+n*.25)),this.crown&&(this.crown.rotation.z=Math.sin(this.t*5)*.05*n)}dispose(){this.group.traverse(t=>{if(t.isMesh){t.geometry.dispose();let e=t.material;(Array.isArray(e)?e:[e]).forEach(n=>n.dispose())}})}};function Fr(i,t="#ffffff"){let e=document.createElement("canvas");e.width=512,e.height=128;let n=e.getContext("2d");n.font='700 64px "Lilita One","Fredoka","Baloo 2","Trebuchet MS",Arial,sans-serif',n.textAlign="center",n.textBaseline="middle";let s=Math.min(480,n.measureText(i).width+56);n.fillStyle="rgba(12,10,36,0.72)";let r=(512-s)/2,o=14,a=100,c=50;n.beginPath(),n.moveTo(r+c,o),n.arcTo(r+s,o,r+s,o+a,c),n.arcTo(r+s,o+a,r,o+a,c),n.arcTo(r,o+a,r,o,c),n.arcTo(r,o,r+s,o,c),n.closePath(),n.fill(),n.lineWidth=6,n.strokeStyle=t,n.stroke(),n.lineWidth=8,n.strokeStyle="rgba(0,0,0,0.65)",n.strokeText(i,256,68,440),n.fillStyle="#ffffff",n.fillText(i,256,68,440);let l=new Rn(e);l.colorSpace=Be,l.anisotropy=4;let h=new fo(new dr({map:l,transparent:!0,depthTest:!1,depthWrite:!1,fog:!1}));return h.renderOrder=999,h.scale.set(2.8,.7,1),h.userData.base=.7,h}var aa={fun:{top:"#35a7ff",horizon:"#e8fbff",bottom:"#fff6d8",fog:"#d9f4ff",fogNear:120,fogFar:640,sun:"#fff4d6",sunPos:[-40,90,-60],sunI:2.7,hemiSky:"#d4ecff",hemiGround:"#bfe8a0",hemiI:1.05,exp:1.05,waterA:"#37d7e8",waterB:"#1388c9",water:"water",env:.6},jungle:{top:"#3a9be8",horizon:"#dff6c9",bottom:"#f3ffd9",fog:"#cfeec0",fogNear:70,fogFar:380,sun:"#fff3c8",sunPos:[-50,85,-40],sunI:2.6,hemiSky:"#cfe9ff",hemiGround:"#6fbf5a",hemiI:1.05,exp:1.05,waterA:"#37d7e8",waterB:"#1388c9",water:"water",env:.55},annoy:{top:"#4a3aa8",horizon:"#ffb3d1",bottom:"#ffe9f3",fog:"#f5b8dc",fogNear:90,fogFar:520,sun:"#ffe0c8",sunPos:[-40,70,-60],sunI:2.4,hemiSky:"#e8d6ff",hemiGround:"#ffb7dc",hemiI:1.05,exp:1.05,waterA:"#7fe8ff",waterB:"#2b9be8",water:"water",env:.6},maze:{top:"#5cc8ff",horizon:"#ffe0f0",bottom:"#fff4fb",fog:"#ffd6ea",fogNear:90,fogFar:520,sun:"#fff0d8",sunPos:[-40,90,-60],sunI:2.7,hemiSky:"#ffe6f6",hemiGround:"#ffb7dc",hemiI:1.1,exp:1.05,waterA:"#7fe8ff",waterB:"#2b9be8",water:"water",env:.6},arena:{top:"#3a9be8",horizon:"#dff6c9",bottom:"#f3ffd9",fog:"#cfeec0",fogNear:70,fogFar:380,sun:"#fff3c8",sunPos:[-50,85,-40],sunI:2.6,hemiSky:"#cfe9ff",hemiGround:"#6fbf5a",hemiI:1.05,exp:1.05,waterA:"#37d7e8",waterB:"#1388c9",water:"water",env:.55},hunt:{top:"#2f8fd8",horizon:"#d6f0b8",bottom:"#eefad0",fog:"#bfe3a8",fogNear:60,fogFar:340,sun:"#fff0c0",sunPos:[-50,80,-40],sunI:2.5,hemiSky:"#cfe9ff",hemiGround:"#5fae52",hemiI:1.05,exp:1.02,waterA:"#37d7e8",waterB:"#1388c9",water:"water",env:.55},quest:{top:"#3a9be8",horizon:"#dff6c9",bottom:"#f3ffd9",fog:"#cfeec0",fogNear:70,fogFar:380,sun:"#fff3c8",sunPos:[-50,85,-40],sunI:2.6,hemiSky:"#cfe9ff",hemiGround:"#6fbf5a",hemiI:1.05,exp:1.05,waterA:"#37d7e8",waterB:"#1388c9",water:"water",env:.55}},Of=null;function f0(){return Of||(Of=(async()=>{try{await Promise.race([Promise.all([document.fonts.load('400 100px "Lilita One"'),document.fonts.load('400 100px "Fredoka One"'),document.fonts.load('400 100px "Noto Nastaliq Urdu"',"\u0639\u06A9\u0631\u0645\u06C1")]),new Promise(i=>setTimeout(i,2500))])}catch{}})()),Of}var zc='"Lilita One","Fredoka One","Baloo 2","Arial Rounded MT Bold","Trebuchet MS",Impact,Arial,sans-serif';function Uc(i="HARIS",t=null,e=["#fff7a8","#ffc83d","#ff7a1a"]){let n=document.createElement("canvas");n.width=1024,n.height=t?512:400;let s=n.getContext("2d");s.textAlign="center",s.textBaseline="middle";let r=300;for(s.font=`${r}px ${zc}`;s.measureText(i).width>900&&r>80;)r-=10,s.font=`${r}px ${zc}`;let o=t?220:200;s.lineJoin="round",s.shadowColor="rgba(255,190,60,0.9)",s.shadowBlur=40,s.lineWidth=46,s.strokeStyle="rgba(255,170,40,0.35)",s.strokeText(i,512,o),s.shadowBlur=0,s.lineWidth=40,s.strokeStyle="#1b0f4a",s.strokeText(i,512,o),s.lineWidth=18,s.strokeStyle="#ffffff",s.strokeText(i,512,o),s.fillStyle="#b0420b";for(let l=14;l>0;l-=2)s.fillText(i,512,o+l);let a=s.createLinearGradient(0,o-r/2,0,o+r/2);a.addColorStop(0,e[0]),a.addColorStop(.55,e[1]),a.addColorStop(1,e[2]),s.fillStyle=a,s.fillText(i,512,o),s.globalCompositeOperation="source-atop",s.fillStyle="rgba(255,255,255,0.35)",s.fillRect(0,o-r/2,1024,r*.18),s.globalCompositeOperation="source-over",t&&(s.font=`90px ${zc}`,s.lineWidth=16,s.strokeStyle="#1b0f4a",s.strokeText(t,512,440),s.fillStyle="#ffffff",s.fillText(t,512,440));let c=new Rn(n);return c.colorSpace=Be,c.anisotropy=8,c}function O_(i,t="#ff3b6b",e="#ffffff"){let n=document.createElement("canvas");n.width=1024,n.height=256;let s=n.getContext("2d");s.fillStyle=t,s.fillRect(0,0,1024,256);let r=32;s.fillStyle=e;for(let a=0;a<1024;a+=r)for(let c=0;c<256;c+=r)(a+c)/r%2===0&&(c<r||c>=256-r)&&s.fillRect(a,c,r,r);s.font=`150px ${zc}`,s.textAlign="center",s.textBaseline="middle",s.lineJoin="round",s.lineWidth=26,s.strokeStyle="#1b0f4a",s.strokeText(i,512,132),s.fillStyle="#fff",s.fillText(i,512,132);let o=new Rn(n);return o.colorSpace=Be,o.anisotropy=8,o}function u0(){let i=document.createElement("canvas");i.width=128,i.height=128;let t=i.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,128,128),t.fillStyle="rgba(0,0,0,0.28)",t.beginPath(),t.moveTo(64,14),t.lineTo(108,70),t.lineTo(80,70),t.lineTo(80,112),t.lineTo(48,112),t.lineTo(48,70),t.lineTo(20,70),t.closePath(),t.fill();let e=new Rn(i);return e.colorSpace=Be,e.anisotropy=4,e}function B_(i="rgba(255,255,255,1)",t="rgba(255,255,255,0)"){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d"),s=n.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,i),s.addColorStop(1,t),n.fillStyle=s,n.fillRect(0,0,128,128);let r=new Rn(e);return r.colorSpace=Be,r}function Bf(i){let t=new O(...i.sunPos).normalize(),e=new sn({side:ln,depthWrite:!1,fog:!1,uniforms:{top:{value:new kt(i.top)},horizon:{value:new kt(i.horizon)},bottom:{value:new kt(i.bottom)},sunDir:{value:t},sunColor:{value:new kt(i.sun)}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); gl_Position.z = gl_Position.w; }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom; uniform vec3 sunDir; uniform vec3 sunColor; varying vec3 vD;
      void main(){ float h = vD.y; vec3 c = h>0.0 ? mix(horizon, top, pow(h, 0.55)) : mix(horizon, bottom, pow(-h, 0.45));
        float s = max(dot(normalize(vD), sunDir), 0.0); c += sunColor * (pow(s, 600.0)*3.0 + pow(s, 24.0)*0.35 + pow(s, 6.0)*0.12);
        gl_FragColor = vec4(c, 1.0); }`}),n=new B(new ue(900,32,16),e);return n.frustumCulled=!1,n.renderOrder=-10,n}function Hf(i,t){let e=new kt(i.fog),n=i.water==="lava"?1:i.water==="grid"?2:0,s=new sn({uniforms:{time:{value:0},cA:{value:new kt(i.waterA)},cB:{value:new kt(i.waterB)},fogC:{value:e},fogN:{value:i.fogNear},fogF:{value:i.fogFar},kind:{value:n}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform float time; uniform vec3 cA; uniform vec3 cB; uniform vec3 fogC; uniform float fogN; uniform float fogF; uniform float kind; varying vec3 vW;
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
      }`}),r=new B(new Ze(1600,1600),s);return r.rotation.x=-Math.PI/2,r.position.y=t,r.frustumCulled=!1,r.renderOrder=-5,r.userData.mat=s,r}var ra=class{constructor(t=500){this.max=t,this.n=0,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*3),this.size=new Float32Array(t),this.alpha=new Float32Array(t),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.grav=new Float32Array(t),this.s0=new Float32Array(t);let e=new ze;e.setAttribute("position",new We(this.pos,3).setUsage(Tr)),e.setAttribute("color",new We(this.col,3).setUsage(Tr)),e.setAttribute("size",new We(this.size,1).setUsage(Tr)),e.setAttribute("alpha",new We(this.alpha,1).setUsage(Tr)),e.setDrawRange(0,0),this.mat=new sn({transparent:!0,depthWrite:!1,uniforms:{scale:{value:600}},vertexShader:"attribute float size; attribute float alpha; attribute vec3 color; varying float vA; varying vec3 vC; uniform float scale; void main(){ vA=alpha; vC=color; vec4 mv = modelViewMatrix*vec4(position,1.0); gl_PointSize = size*scale/max(1.0,-mv.z); gl_Position = projectionMatrix*mv; }",fragmentShader:"varying float vA; varying vec3 vC; void main(){ vec2 c = gl_PointCoord-0.5; float d = length(c); if(d>0.5) discard; gl_FragColor = vec4(vC, vA*smoothstep(0.5,0.1,d)); }"}),this.points=new xr(e,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,this.geo=e,this._c=new kt}emit(t,e,n,s,r={}){var a,c,l,h,u,f,d,g;let o=this._c.set((a=r.color)!=null?a:"#ffffff");for(let y=0;y<s;y++){let p=this.n<this.max?this.n++:Math.floor(Math.random()*this.max),m=Math.random()*Math.PI*2,E=((c=r.speed)!=null?c:3)*(.3+Math.random()*.9),S=(l=r.up)!=null?l:3,x=p*3;this.pos[x]=t+(Math.random()-.5)*((h=r.spread)!=null?h:.3),this.pos[x+1]=e,this.pos[x+2]=n+(Math.random()-.5)*((u=r.spread)!=null?u:.3),this.vel[x]=Math.cos(m)*E,this.vel[x+1]=S*(.4+Math.random()*.9),this.vel[x+2]=Math.sin(m)*E;let _=r.rainbow?this._c.setHSL(Math.random(),.9,.6):o;this.col[x]=_.r,this.col[x+1]=_.g,this.col[x+2]=_.b,this.life[p]=this.maxLife[p]=((f=r.life)!=null?f:.6)*(.6+Math.random()*.8),this.s0[p]=((d=r.size)!=null?d:.35)*(.6+Math.random()*.8),this.size[p]=this.s0[p],this.grav[p]=(g=r.gravity)!=null?g:9,this.alpha[p]=1}}update(t){for(let e=0;e<this.n;e++){if(this.life[e]<=0){this.alpha[e]=0,this.size[e]=0;continue}this.life[e]-=t;let n=e*3;this.vel[n+1]-=this.grav[e]*t,this.pos[n]+=this.vel[n]*t,this.pos[n+1]+=this.vel[n+1]*t,this.pos[n+2]+=this.vel[n+2]*t;let s=Math.max(0,this.life[e]/this.maxLife[e]);this.alpha[e]=Math.min(1,s*1.6),this.size[e]=this.s0[e]*(.4+.6*s)}this.geo.setDrawRange(0,this.n),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,this.geo.attributes.size.needsUpdate=!0,this.geo.attributes.alpha.needsUpdate=!0}setScale(t){this.mat.uniforms.scale.value=t*.9}},oa=class{constructor(t,e=350){this.kind=t,this.n=e;let n=new Float32Array(e*3);this.seed=new Float32Array(e*3);for(let o=0;o<e*3;o++)this.seed[o]=Math.random();let s=new ze;s.setAttribute("position",new We(n,3));let r={fun:"#fff6a8",jungle:"#fffbb0",quest:"#fff6c0",hunt:"#fff6c0",maze:"#ffe6f6",annoy:"#ffe6f6"};this.mat=new gr({color:r[t]||"#fff",size:t==="frost"?.28:.22,transparent:!0,opacity:.85,depthWrite:!1,map:B_(),blending:t==="neon"||t==="canyon"?Di:ss}),this.points=new xr(s,this.mat),this.points.frustumCulled=!1,this.pos=n}update(t,e){let r=this.kind,o=this.pos,a=this.seed;for(let c=0;c<this.n;c++){let l=c*3,h=a[l]*70,u=a[l+1]*36,f=a[l+2]*70;r==="frost"?(u=36-(t*(2+a[l]*2)+a[l+1]*36)%36,h+=Math.sin(t*.7+c)*1.2):r==="canyon"?(u=(t*(1.5+a[l]*2)+a[l+1]*36)%36,h+=Math.sin(t*.9+c)*.8):(u+=Math.sin(t*.6+c)*.8,h+=Math.cos(t*.4+c*1.3)*.8),o[l]=e.x+((h-e.x)%70+70)%70-70/2,o[l+1]=e.y-36/2+u,o[l+2]=e.z+((f-e.z)%70+70)%70-70/2}this.points.geometry.attributes.position.needsUpdate=!0}};function H_(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function d0(i,t,e,n){let s=aa[t],r=new xt;r.name="scenery";let o=H_(t.length*9973+17),a=new Ui,c=new Ui,l=e.length,h=-l-40,u=0,f=82,d=[],g=(_,M)=>(o()<.5?-1:1)*(_+f+o()*(M-_)),y=_=>_[Math.floor(o()*_.length)],p=(_,M=16,w=10)=>new ue(_,M,w),m=(_,M,w,v=14)=>new ft(_,M,w,v),E=(_,M,w=14)=>new be(_,M,w);if(t==="fun"){for(let _=0;_<46;_++){let M=70-o()*(l+200),w=g(26,140),v=1+o()*1.8,b=o(),A=u-1;if(b<.4){let P=y(["#ff4d6d","#3ec6e0","#ffd23f","#8b5cf6"]);a.add(m(6*v,6*v,5*v,16),w,A+2.5*v,M,P),a.add(E(6.8*v,5*v,16),w,A+7.5*v,M,"#ffffff"),a.add(E(1.1*v,3*v,8),w,A+11*v,M,P),a.add(m(.12*v,.12*v,4*v,4),w,A+14*v,M,"#ffffff")}else if(b<.7){for(let P=0;P<8;P++)a.add(m(2.2*v,2.2*v,2.4*v,12),w,A+(1.2+P*2.4)*v,M,P%2?"#ffffff":"#ff4d6d");a.add(E(3*v,4*v,12),w,A+21*v,M,"#ffd23f")}else a.add(m(.3*v,.4*v,9*v,6),w,A+4.5*v,M,"#5b2a86"),c.add(p(1.1*v,10,8),w,A+9.6*v,M,y(["#ffe27a","#ff9ccb","#9cf0ff"]))}[[-120,-l*.25],[140,-l*.62],[-130,-l*.9]].forEach(([_,M],w)=>{let v=new xt;v.position.set(_,u+34,M),v.rotation.y=w%2?.5:-.5;let b=new B(new we(30,.9,8,48),new Ut({color:"#ffffff",roughness:.4}));v.add(b);let A=new Ut({color:"#ff4d6d"});for(let D=0;D<8;D++){let R=new B(m(.35,.35,60,5),A);R.rotation.z=D*Math.PI/8,v.add(R)}let P=[];for(let D=0;D<12;D++){let R=D/12*Math.PI*2,C=new B(new qt(4.4,3.4,3.4),new Ut({color:y(["#ffd23f","#3ec6e0","#ff4d6d","#8bd450"]),roughness:.35}));C.position.set(Math.cos(R)*30,Math.sin(R)*30-2,0),v.add(C),P.push([C,R])}let L=new Ut({color:"#5b2a86"});for(let D of[-1,1]){let R=new B(m(1.2,1.6,44,6),L);R.position.set(D*11,-20,0),R.rotation.z=D*-.28,v.add(R)}r.add(v),d.push(D=>{let R=D*.12*(w%2?-1:1);b.rotation.z=R,v.children.forEach(C=>{var z,F;C.geometry&&C.geometry.type==="CylinderGeometry"&&C.position.x===0&&C.position.y===0&&(C.rotation.z=((F=(z=C.userData).b)!=null?F:z.b=C.rotation.z)+R)}),P.forEach(([C,z])=>C.position.set(Math.cos(z+R)*30,Math.sin(z+R)*30-2,0))})});for(let _=0;_<26;_++){let M=new xt,w=y(["#ff5fa8","#ffd84d","#4dd0ff","#9b7bff","#5ee89a"]),v=new B(p(1.6,16,12),new Ut({color:w,roughness:.25}));v.scale.y=1.2;let b=new B(m(.03,.03,4,4),new oe({color:"#ffffff"}));b.position.y=-3,M.add(v,b),M.position.set(g(14,80),8+o()*34,40-o()*(l+120)),M.userData.ph=o()*6,r.add(M),d.push(A=>{M.position.y+=Math.sin(A*.8+M.userData.ph)*.004,M.rotation.z=Math.sin(A*.6+M.userData.ph)*.08})}}else if(t==="jungle"){for(let _=0;_<90;_++){let M=o()*Math.PI*2,w=120+o()*90,v=150+o()*90,b=Math.cos(M)*w,A=-108+Math.sin(M)*v,P=1.4+o()*2.4;a.add(m(.7*P,1*P,9*P,6),b,4.5*P,A,"#6b4423"),a.add(p(4.4*P,8,6),b,11*P,A,y(["#2e9b3f","#3fb14c","#27863a"]))}for(let _=0;_<16;_++){let M=_/16*Math.PI*2+o()*.3,w=Math.cos(M)*(260+o()*60),v=-108+Math.sin(M)*(300+o()*60),b=1+o()*1.4;a.add(E(40*b,70*b,7),w,30*b,v,y(["#5f9a7a","#6aa88a","#4f8a6c"])),a.add(E(14*b,20*b,7),w,66*b,v,"#ffffff")}for(let _=0;_<26;_++){let M=new xt,w=(o()-.5)*520,v=-108+(o()-.5)*520,b=85+o()*50,A=3+Math.floor(o()*3);for(let P=0;P<A;P++){let L=new B(p(7+o()*6,10,8),new oe({color:"#ffffff",transparent:!0,opacity:.9,fog:!1}));L.position.set(P*9-A*4,o()*3,o()*5),L.scale.y=.55,M.add(L)}M.position.set(w,b,v),M.userData.ph=o()*6,r.add(M),d.push(P=>{M.position.x+=.012*(1+M.userData.ph%1),M.position.x>300&&(M.position.x=-300)})}}else if(t==="quest"||t==="hunt"||t==="maze"||t==="annoy")for(let _=0;_<40;_++){let M=new xt,w=(o()-.5)*420,v=40-o()*(t==="maze"?860:640),b=70+o()*50,A=3+Math.floor(o()*3);for(let P=0;P<A;P++){let L=new B(p(6+o()*6,10,8),new oe({color:"#ffffff",transparent:!0,opacity:.9,fog:!1}));L.position.set(P*8-A*4,o()*3,o()*5),L.scale.y=.55,M.add(L)}M.position.set(w,b,v),M.userData.ph=o()*6,r.add(M),d.push(P=>{M.position.x+=.012*(1+M.userData.ph%1),M.position.x>260&&(M.position.x=-260)})}if(t==="maze"){let _=["#ff6b9d","#ffd23f","#4cc9f0","#80ed99","#b58cff","#ff9f1c"];for(let M=0;M<100;M++){let w=30-M*8.6-o()*4,v=M%2?1:-1,b=v*(24+o()*55),A=_[Math.floor(o()*_.length)],P=Math.floor(o()*3),L=.8+o()*.9;P===0?(a.add(m(.6*L,.6*L,16*L,8),b,-3+8*L,w,"#ffffff"),a.add(p(4.4*L,18,12),b,-3+17*L,w,A),a.add(new we(3*L,.55*L,8,20),b,-3+17*L,w+3.4*L,"#ffffff")):P===1?(a.add(new we(5*L,2.2*L,10,22).rotateX(Math.PI/2),b,-2.2+2.2*L,w,"#e8b878"),a.add(new we(5*L,1.7*L,10,22).rotateX(Math.PI/2),b,-2.2+3.1*L,w,A)):(a.add(E(3.4*L,9*L,14).rotateX(Math.PI),b,-3+4.5*L,w,"#e8b878"),a.add(p(3.8*L,16,10),b,-3+10*L,w,A),a.add(p(1.2*L,10,8),b,-3+14*L,w,"#ff3d68"))}}let S=a.build(new Ut({vertexColors:!0,roughness:.55}));S&&(S.castShadow=!1,S.receiveShadow=!1,r.add(S));let x=c.build(new oe({vertexColors:!0,toneMapped:!1}));if(x&&r.add(x),t!=="jungle"&&t!=="quest"&&t!=="arena"&&t!=="hunt"){let _=new xt;_.name="brand",r.add(_);let M=Uc("HARIS","MADE THIS GAME"),w=e.finishPlat,v=P=>new Ut({color:P,roughness:.4}),b=(P,L,D,R,C)=>{let z=new xt;z.position.set(0,L,P);let F=v("#2b1c6b");for(let K of[-1,1]){let Z=new B(new qt(1.2,9,1.2),F);Z.position.set(K*D/2,4.5,0),Z.castShadow=!0,z.add(Z)}let J=new B(new Ze(D,D/4),new oe({map:O_(R,C),toneMapped:!1,side:$e}));J.position.set(0,8.6,.05),z.add(J);let V=new B(new qt(D+1.2,.6,1.2),F);V.position.set(0,10.4,0),z.add(V),_.add(z)};b(e.startArch,0,20,"START","#22c55e"),b(e.finishZ+.01,w.top,19,"FINISH","#ef233c");let A=new B(new Ze(30,15),new oe({map:M,transparent:!0,toneMapped:!1,depthWrite:!1,fog:!1}));A.position.set(0,w.top+21,e.finishZ-.5),_.add(A),d.push(P=>{A.position.y=w.top+21+Math.sin(P*1.2)*.4})}return i.add(r),{group:r,update(_,M){for(let w of d)w(_);r.userData.stars&&r.userData.stars.position.copy(M)},dispose(){i.remove(r),r.traverse(_=>{_.geometry&&_.geometry.dispose(),_.material&&(Array.isArray(_.material)?_.material:[_.material]).forEach(w=>{w.map&&w.map.dispose(),w.dispose()})})}}}var ce=null,Ns=null,Or=null,ps=null,Oc=null,p0=!1;var Fc=null,ds=null;function Hi(){if(ce){ce.state==="suspended"&&ce.resume();return}let i=window.AudioContext||window.webkitAudioContext;if(!i)return;ce=new i,Ns=ce.createGain(),Ns.gain.value=p0?0:.9,Ns.connect(ce.destination),Or=ce.createGain(),Or.gain.value=.7,Or.connect(Ns),ps=ce.createGain(),ps.gain.value=.22,ps.connect(Ns);let t=ce.sampleRate;Oc=ce.createBuffer(1,t,ce.sampleRate);let e=Oc.getChannelData(0);for(let n=0;n<t;n++)e[n]=Math.random()*2-1}function m0(i){p0=i,Ns&&Ns.gain.setTargetAtTime(i?0:.9,ce.currentTime,.05)}function ne(i,t,e,n,s=.3,r=0,o=Or){if(!ce)return;let a=ce.currentTime+r,c=ce.createOscillator(),l=ce.createGain();c.type=i,c.frequency.setValueAtTime(t,a),e!==t&&c.frequency.exponentialRampToValueAtTime(Math.max(20,e),a+n),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(s,a+.012),l.gain.exponentialRampToValueAtTime(1e-4,a+n),c.connect(l),l.connect(o),c.start(a),c.stop(a+n+.05)}function Nn(i,t,e,n,s,r=0,o=1){if(!ce)return;let a=ce.currentTime+r,c=ce.createBufferSource();c.buffer=Oc,c.loop=!0;let l=ce.createBiquadFilter();l.type=e,l.Q.value=o,l.frequency.setValueAtTime(n,a),l.frequency.exponentialRampToValueAtTime(Math.max(30,s),a+i);let h=ce.createGain();h.gain.setValueAtTime(1e-4,a),h.gain.exponentialRampToValueAtTime(t,a+.015),h.gain.exponentialRampToValueAtTime(1e-4,a+i),c.connect(l),l.connect(h),h.connect(Or),c.start(a),c.stop(a+i+.05)}var k_=(i,t)=>i+Math.random()*(t-i),vt={click(){ne("triangle",520,780,.09,.25)},roar(i=1){ne("sawtooth",i?180:260,i?60:110,.5,.22),ne("square",i?120:200,50,.4,.12,.03),Nn(.4,.14,"lowpass",800,200)},tame(){ne("triangle",520,780,.12,.25),ne("triangle",660,990,.12,.25,.1),ne("triangle",880,1320,.2,.25,.2)},select(){ne("triangle",660,990,.12,.28),ne("sine",990,1320,.1,.18,.06)},back(){ne("triangle",520,330,.12,.22)},jump(){ne("sine",280,640,.17,.3),ne("triangle",420,880,.12,.08,.02)},land(i=10){let t=Math.min(.5,.12+i*.012);ne("sine",140,60,.12,t),Nn(.09,t*.7,"lowpass",900,200)},step(){Nn(.045,.07,"bandpass",k_(500,800),300,0,2)},dive(){Nn(.3,.22,"bandpass",500,2200,0,1.5),ne("sine",300,520,.2,.15)},bounce(){ne("sine",180,920,.3,.38),ne("triangle",360,1400,.22,.12,.03)},pickup(){ne("triangle",520,1040,.18,.3),ne("sine",780,1560,.24,.2,.07),ne("sine",1170,2340,.2,.12,.14)},swing(){Nn(.24,.3,"bandpass",500,2800,0,1.2),ne("sine",380,160,.16,.08)},shot(){ne("sawtooth",900,140,.11,.3),Nn(.09,.4,"highpass",2500,900),ne("square",200,60,.12,.18)},bonk(){ne("square",190,55,.2,.42),Nn(.14,.45,"lowpass",3e3,300),ne("triangle",820,220,.22,.22,.02)},hit(){ne("sawtooth",420,70,.28,.28),Nn(.18,.3,"lowpass",1800,150),ne("square",220,110,.15,.12,.04)},door(){ne("square",150,90,.07,.3),ne("square",110,70,.1,.25,.09),Nn(.05,.18,"lowpass",2e3,400)},honk(){ne("square",392,392,.34,.2),ne("square",494,494,.34,.2)},honkBig(){ne("sawtooth",130,128,.95,.3),ne("square",164,162,.95,.24),ne("sawtooth",196,194,.95,.22),ne("square",262,258,.95,.14),Nn(.12,.12,"lowpass",900,300)},skid(){Nn(.18,.1,"bandpass",2600,1800,0,3)},vroom(){ne("sawtooth",70,160,.35,.2),ne("sawtooth",90,210,.3,.1,.05)},splash(){Nn(.6,.45,"bandpass",1800,260,0,.8),Nn(.3,.2,"highpass",2400,900,.05),ne("sine",220,80,.3,.12)},respawn(){Nn(.4,.22,"highpass",400,4e3,0,.7),ne("sine",300,900,.3,.15)},checkpoint(){ne("sine",660,660,.14,.3),ne("sine",990,990,.25,.3,.1),ne("triangle",1320,1320,.3,.1,.18)},tick(){ne("sine",660,660,.14,.4)},go(){[523,659,784].forEach(i=>ne("square",i,i,.5,.14)),ne("sine",1046,1046,.6,.3)},join(){ne("triangle",520,520,.1,.25),ne("triangle",780,780,.14,.25,.09)},finish(){[523,659,784,1046,1318].forEach((i,t)=>{ne("square",i,i,.22,.14,t*.09),ne("triangle",i*2,i*2,.3,.08,t*.09)})},win(){[523,659,784,659,784,1046,1318].forEach((t,e)=>{ne("square",t,t,.24,.13,e*.12),ne("triangle",t/2,t/2,.3,.12,e*.12)})},lose(){[392,349,311,262].forEach((i,t)=>ne("triangle",i,i*.97,.3,.22,t*.17))},warn(){ne("square",880,880,.08,.14)}},G_={major:[0,2,4,7,9,12,14,16],minor:[0,3,5,7,10,12,15,17],lydian:[0,2,4,6,7,9,11,12],dorian:[0,2,3,5,7,9,10,12]},kf=[{bpm:112,root:65,scale:"lydian",prog:[0,5,3,4],lead:"triangle",bright:3400},{bpm:124,root:57,scale:"dorian",prog:[0,3,4,0],lead:"triangle",bright:3e3},{bpm:128,root:62,scale:"lydian",prog:[0,4,5,3],lead:"triangle",bright:3400},{bpm:132,root:64,scale:"major",prog:[0,4,3,4],lead:"triangle",bright:3400},{bpm:138,root:67,scale:"major",prog:[0,5,3,4],lead:"triangle",bright:3800},{bpm:126,root:59,scale:"minor",prog:[0,5,3,4],lead:"triangle",bright:3200},{bpm:130,root:55,scale:"dorian",prog:[0,5,3,4],lead:"triangle",bright:3300},{bpm:120,root:60,scale:"major",prog:[0,3,4,0],lead:"triangle",bright:3e3}],Gf=i=>440*Math.pow(2,(i-69)/12);function Vf(i,t,e,n,s,r){let o=ce.createOscillator(),a=ce.createGain(),c=ce.createBiquadFilter();o.type=i,o.frequency.setValueAtTime(t,e),c.type="lowpass",c.frequency.value=r,a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(s,e+.01),a.gain.exponentialRampToValueAtTime(1e-4,e+n),o.connect(c),c.connect(a),a.connect(ps),o.start(e),o.stop(e+n+.05)}function V_(i,t){let e=ce.createBufferSource();e.buffer=Oc;let n=ce.createBiquadFilter();n.type="highpass",n.frequency.value=7e3;let s=ce.createGain();s.gain.setValueAtTime(t,i),s.gain.exponentialRampToValueAtTime(1e-4,i+.05),e.connect(n),n.connect(s),s.connect(ps),e.start(i),e.stop(i+.06)}function W_(i){let t=ce.createOscillator(),e=ce.createGain();t.frequency.setValueAtTime(150,i),t.frequency.exponentialRampToValueAtTime(40,i+.12),e.gain.setValueAtTime(.55,i),e.gain.exponentialRampToValueAtTime(1e-4,i+.16),t.connect(e),e.connect(ps),t.start(i),t.stop(i+.2)}function Br(i){if(Wf(),!ce)return;let t=kf[i]||kf[kf.length-1],e=G_[t.scale],n=60/t.bpm/4,s=1234+i*77,r=()=>(s=s*1664525+1013904223>>>0,s/4294967296),o=[];for(let c=0;c<4;c++){let l=[];for(let h=0;h<16;h++)l.push(h%4===0||r()<.38?Math.floor(r()*6):-1);o.push(l)}ds={i:0,next:ce.currentTime+.1};let a=()=>{if(!(!ce||!ds))for(;ds.next<ce.currentTime+.18;){let c=ds.i,l=c%16,h=Math.floor(c/16)%4,u=t.prog[h]||0,f=ds.next,d=t.root+e[u%e.length]-12;l%4===0&&W_(f),l%2===0&&V_(f,l%4===2?.1:.05),(l%4===0||l%8===6)&&Vf("triangle",Gf(d-12),f,n*3.2,.4,600),l===0&&[0,2,4].forEach(y=>Vf("sine",Gf(t.root+e[(u+y)%e.length]),f,n*15,.07,1400));let g=o[h][l];g>=0&&Vf(t.lead,Gf(t.root+12+e[(g+u)%e.length]),f,n*1.8,.11,t.bright),ds.next+=n,ds.i++}};Fc=setInterval(a,40),a()}function Wf(){Fc&&clearInterval(Fc),Fc=null,ds=null}function Bc(i){ps&&ps.gain.setTargetAtTime(i?.08:.22,ce.currentTime,.2)}var Ei=null;function g0(){if(!ce||Ei)return;let i=ce.createGain();i.gain.value=1e-4;let t=ce.createBiquadFilter();t.type="lowpass",t.frequency.value=500;let e=ce.createOscillator(),n=ce.createOscillator();e.type="sawtooth",n.type="square",e.frequency.value=60,n.frequency.value=30,e.connect(t),n.connect(t),t.connect(i),i.connect(Or),e.start(),n.start(),Ei={g:i,f:t,o1:e,o2:n}}function x0(i,t){if(!ce||!Ei)return;let e=ce.currentTime,n=Math.max(0,Math.min(1,i)),s=52+n*150+(t?16:0);Ei.o1.frequency.setTargetAtTime(s,e,.08),Ei.o2.frequency.setTargetAtTime(s*.5,e,.08),Ei.f.frequency.setTargetAtTime(380+n*900+(t?300:0),e,.1),Ei.g.gain.setTargetAtTime(.05+n*.07+(t?.04:0),e,.1)}function Xf(){if(!Ei)return;let i=Ei;Ei=null;try{i.g.gain.setTargetAtTime(1e-4,ce.currentTime,.05),setTimeout(()=>{try{i.o1.stop(),i.o2.stop()}catch{}},300)}catch{}}var Hc=class{constructor(){this.ws=null,this.h={},this.offset=0,this.rtt=0,this.best=1/0,this.connected=!1,this.id=null,this.samples=0}now(){return Date.now()+this.offset}stamp(){let t=Math.round(Date.now()+this.offset);return this.lastStamp=Math.max(t,(this.lastStamp||0)+1),this.lastStamp}on(t,e){this.h[t]=e}connect(){return new Promise((t,e)=>{if(this.connected)return t();let n=location.protocol==="https:"?"wss":"ws",s;try{s=new WebSocket(`${n}://${location.host}/ws`)}catch(o){return e(o)}this.ws=s;let r=setTimeout(()=>{try{s.close()}catch{}e(new Error("timeout"))},8e3);s.onopen=()=>{clearTimeout(r),this.connected=!0;for(let o=0;o<8;o++)setTimeout(()=>this.ping(),o*140);this.pinger=setInterval(()=>this.ping(),2e3),t()},s.onmessage=o=>{let a;try{a=JSON.parse(o.data)}catch{return}if(a.t==="pong")return this.onPong(a);a.t==="joined"&&(this.id=a.id);let c=this.h[a.t];c&&c(a)},s.onclose=()=>{clearTimeout(r);let o=this.connected;this.connected=!1,clearInterval(this.pinger),o&&this.h.close?this.h.close():e(new Error("closed"))},s.onerror=()=>{}})}ping(){this.send({t:"ping",c:Date.now()})}onPong(t){let e=Date.now(),n=e-t.c;this.rtt=this.rtt?this.rtt*.7+n*.3:n;let s=t.s+n/2-e;(n<=this.best*1.25||this.samples<3)&&(this.offset=this.samples<8?n<=this.best?s:this.offset:this.offset*.8+s*.2,this.best=Math.min(this.best,n)),this.samples++,this.samples%10===0&&(this.best=this.best*1.3+2)}send(t){this.ws&&this.ws.readyState===1&&this.ws.send(JSON.stringify(t))}close(){try{this.ws&&this.ws.close()}catch{}this.connected=!1,clearInterval(this.pinger)}};var v0=`
float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f); return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
`;function _0(i){let t=i.x1-i.x0,e=i.z1-i.z0,n=new sn({transparent:!0,depthWrite:!1,uniforms:{time:{value:0},rect:{value:new Xe(i.x0,i.z0,i.x1,i.z1)},depth:{value:i.surf-i.bottom},sunDir:{value:new O(-.35,.8,-.5).normalize()},skyTop:{value:new kt("#4aa8ff")},skyHor:{value:new kt("#e8fbff")},fogC:{value:new kt("#d9f4ff")},fogN:{value:120},fogF:{value:640},ag:{value:[new O(0,0,0),new O(0,0,0),new O(0,0,0),new O(0,0,0)]}},vertexShader:`uniform float time; varying vec3 vW;
      void main(){ vec4 w = modelMatrix*vec4(position,1.0); w.y += sin(w.x*1.3+time*1.6)*0.018 + sin(w.z*1.7-time*1.3)*0.015; vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }`,fragmentShader:`uniform float time; uniform vec4 rect; uniform float depth; uniform vec3 sunDir; uniform vec3 skyTop; uniform vec3 skyHor; uniform vec3 fogC; uniform float fogN; uniform float fogF; uniform vec3 ag[4]; varying vec3 vW;
      ${v0}
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
      }`}),s=new Ze(t,e,40,40),r=new B(s,n);return r.rotation.x=-Math.PI/2,r.position.set((i.x0+i.x1)/2,i.surf,(i.z0+i.z1)/2),r.renderOrder=3,r.frustumCulled=!1,r.userData.pool=i,r}function M0(i){let t=i.x1-i.x0,e=i.z1-i.z0,n=new sn({transparent:!0,depthWrite:!1,blending:Di,uniforms:{time:{value:0}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform float time; varying vec3 vW; ${v0}
      void main(){
        vec2 p = vW.xz*0.55; float t = time*0.5, c = 0.0;
        for(int i=0;i<3;i++){ p += vec2(sin(p.y*1.7+t), cos(p.x*1.4-t))*0.55; c += abs(sin(p.x*2.2+p.y*1.8)); }
        c = pow(1.0 - c/3.0, 5.0) * 1.6;
        gl_FragColor = vec4(vec3(0.55,0.95,1.0)*c*0.55, 1.0);
      }`}),s=new B(new Ze(t,e),n);return s.rotation.x=-Math.PI/2,s.position.set((i.x0+i.x1)/2,i.bottom+.03,(i.z0+i.z1)/2),s.renderOrder=2,s.frustumCulled=!1,s}var ci=[{id:0,name:"Sprinter",color:"#0b6b3a",max:27,acc:17,grip:6.5,turn:2.2,hw:.95,hl:2.1},{id:1,name:"Buggy",color:"#2f7bff",max:23,acc:15,grip:8.5,turn:2.5,hw:1.05,hl:1.9},{id:2,name:"Pickup",color:"#ffb21e",max:22,acc:14,grip:7,turn:2,hw:1.05,hl:2.3},{id:3,name:"Bubble",color:"#a855f7",max:24,acc:16,grip:7.5,turn:2.4,hw:.95,hl:1.8},...[4,5,6,7].map(i=>({id:i,name:"Racer",color:"#e0001f",max:42,acc:36,grip:9.5,turn:2.15,hw:1.05,hl:2.35,racer:!0}))];function b0(i,t,e,n){return{id:i,x:t,z:e,y:0,pitch:0,yaw:n,vx:0,vz:0,speed:0,steer:0,drift:0,driver:-1,bump:0,boost:0,parked:!0,spin:0,crash:0,acc:0}}function E0(i,t,e,n=1.5,s){let r=1e9,o=t,a=e,c=1,l=1,h=0,u=0,f=0,d=s!==void 0;for(let y of i.segs){let p=y.bx-y.ax,m=y.bz-y.az,E=p*p+m*m,S=E>0?((t-y.ax)*p+(e-y.az)*m)/E:0;S=S<0?0:S>1?1:S;let x=y.y0||0,_=y.y1===void 0?x:y.y1,M=x+(_-x)*S;if(d&&Math.abs(M-s)>5)continue;let w=y.ax+p*S,v=y.az+m*S,b=Math.hypot(t-w,e-v),A=y.hw-n;b-A<r&&(r=b-A,o=w,a=v,c=A,l=b,h=M,_!==x&&E>0?(u=(_-x)*p/E,f=(_-x)*m/E):u=f=0)}for(let y of i.plazas||[]){let p=y.y||0;if(d&&Math.abs(p-s)>5)continue;let m=Math.hypot(t-y.x,e-y.z),E=y.r-n;m-E<r&&(r=m-E,o=y.x,a=y.z,c=E,l=m,h=p,u=f=0)}if(r>1e8)return{d:-1,px:t,pz:e,nx:0,nz:1,lim:1,h:d?s:0,gx:0,gz:0};let g=l||1e-6;return{d:r,px:o,pz:a,nx:(t-o)/g,nz:(e-a)/g,lim:c,h,gx:u,gz:f}}function S0(i,t,e,n,s,r=0){let o=ci[i.id],a=Math.sin(i.yaw),c=Math.cos(i.yaw),l=-c,h=a,u=i.vx*a+i.vz*c,f=i.vx*l+i.vz*h,d=o.max*(i.boost>0?1.3:1);i.boost>0&&(i.boost-=t),e.gas>.01?u+=(u<0?38:o.acc*(1-Math.max(0,u)/(d+2))+1)*e.gas*t:e.gas<-.01?u+=(u>.5?-34:-11)*-e.gas*t:u-=Math.sign(u)*Math.min(Math.abs(u),4.5*t),e.hb&&(u-=Math.sign(u)*Math.min(Math.abs(u),9*t));{let M=(i.gx||0)*a+(i.gz||0)*c;M&&(u-=9.8*.55*(M/Math.sqrt(1+M*M))*t)}u=Math.max(-9,Math.min(d+(i.boost>0?3:0),u)),i.steer+=(e.steer-i.steer)*Math.min(1,t*9);let g=Math.abs(u),y=Math.min(1,g/5)*(1-.38*Math.min(1,g/d));i.yaw-=i.steer*o.turn*y*Math.sign(u||1)*(e.hb?1.35:1)*t;let p=(e.hb?1.6:o.grip)*(i.slick>0?.22:1);f*=Math.exp(-p*t),i.drift=Math.min(1,Math.abs(f)/5);let m=Math.sin(i.yaw),E=Math.cos(i.yaw),S=-E,x=m;i.vx=m*u+S*f,i.vz=E*u+x*f;for(let M of n.boosts||[])Math.abs(i.x-M.x)<M.r&&Math.abs(i.z-M.z)<M.r&&Math.abs(i.y-(M.y||0))<3&&(i.boost=1.4,u<d&&(i.vx+=m*40*t,i.vz+=E*40*t));i.x+=i.vx*t,i.z+=i.vz*t;let _="";{let M=E0(n,i.x,i.z,1.5,i.y);i.gx=M.gx,i.gz=M.gz;{let w=i.y;i.y+=(M.h-i.y)*Math.min(1,t*14);let v=Math.hypot(i.vx,i.vz)*t;i.pitch+=((v>.001?Math.atan2(i.y-w,v):0)*(i.speed>=0?1:-1)-i.pitch)*Math.min(1,t*10)}for(let w of[1.25,-1.25]){let v=E0(n,i.x+m*w,i.z+E*w,1.6,i.y);if(v.d<=0)continue;i.x-=v.nx*v.d,i.z-=v.nz*v.d;let b=i.vx*v.nx+i.vz*v.nz;if(b>0){let A=-1.35*b*v.nx,P=-(1+.35)*b*v.nz;i.vx+=A,i.vz+=P,i.vx*=.95,i.vz*=.95,i.spin=Math.max(-3,Math.min(3,(i.spin||0)+(E*w*A-m*w*P)*.1)),b>5&&(_="bump"),i.bump=Math.max(i.bump,b)}}}for(let M of s||[]){if((i.x-M.x)**2+(i.z-M.z)**2>36||Math.abs((M.y||0)-i.y)>4)continue;let w=Math.sin(M.yaw),v=Math.cos(M.yaw),b=null;for(let D of[1.05,-1.05])for(let R of[1.05,-1.05]){let C=i.x+m*D,z=i.z+E*D,F=M.x+w*R,J=M.z+v*R,V=C-F,K=z-J,Z=Math.hypot(V,K),ot=2.3-Z;ot>0&&(!b||ot>b.pen)&&(b={pen:ot,nx:Z>1e-4?V/Z:m,nz:Z>1e-4?K/Z:E,rx:C-i.x,rz:z-i.z})}if(!b)continue;let A=M.driver===-1||M.parked,P=A?1:.6;i.x+=b.nx*b.pen*P,i.z+=b.nz*b.pen*P;let L=(i.vx-M.vx)*b.nx+(i.vz-M.vz)*b.nz;if(L<0){let D=1.55*-L*(A?1:.55),R=b.nx*D,C=b.nz*D;i.vx+=R,i.vz+=C,i.spin=Math.max(-3.2,Math.min(3.2,(i.spin||0)+(b.rz*R-b.rx*C)*.32)),i.vx*=.94,i.vz*=.94,-L>3.5&&(_=-L>7?"crash":"bump",i.crash=Math.max(i.crash||0,-L))}}if(n.dyn&&!n.free){let M=n.dyn(r);for(let w of M){if(Math.abs(w.y-i.y)>4||(i.x-w.x)**2+(i.z-w.z)**2>30)continue;let v=null;for(let A of[1.05,-1.05]){let P=i.x+m*A,L=i.z+E*A,D=P-w.x,R=L-w.z,C=Math.hypot(D,R),z=1.15+w.r-C;z>0&&(!v||z>v.pen)&&(v={pen:z,nx:C>1e-4?D/C:m,nz:C>1e-4?R/C:E,rx:P-i.x,rz:L-i.z})}if(!v)continue;i.x+=v.nx*v.pen,i.z+=v.nz*v.pen;let b=(i.vx-w.vx)*v.nx+(i.vz-w.vz)*v.nz;if(b<0){let A=1.5*-b,P=v.nx*A,L=v.nz*A;i.vx+=P,i.vz+=L,i.spin=Math.max(-3.4,Math.min(3.4,(i.spin||0)+(v.rz*P-v.rx*L)*.4)),i.vx*=.9,i.vz*=.9,-b>3.5&&(_=-b>7?"crash":"bump",i.crash=Math.max(i.crash||0,-b))}}}i.slick=0;for(let M of(n.free?[]:n.slicks)||[])Math.abs(M.y-i.y)<3&&(i.x-M.x)**2+(i.z-M.z)**2<M.r*M.r&&(i.slick=1);return i.spin&&(i.yaw+=i.spin*t,i.spin*=Math.exp(-3.6*t),Math.abs(i.spin)<.02&&(i.spin=0)),i.speed=i.vx*m+i.vz*E,_}var re=(i,t,e,n=.12)=>new Lr(i,t,e,3,Math.min(n,i/2-.01,t/2-.01,e/2-.01)),En=(i,t={})=>{var e,n,s;return new Ut({color:i,roughness:(e=t.r)!=null?e:.35,metalness:(n=t.m)!=null?n:.25,emissive:t.e||0,emissiveIntensity:(s=t.ei)!=null?s:1})},kc=()=>new Ut({color:"#9fd8ff",roughness:.05,metalness:.4,transparent:!0,opacity:.55});function w0(i){let t=ci[i],e=new xt,n=En("#1b1b22",{r:.8,m:0}),s=En("#e8eaf2",{r:.25,m:.8}),r=En("#23252e",{r:.6}),o=(_,M,w,v,b,A=0,P=0,L=0)=>{let D=new B(_,M);return D.position.set(w,v,b),D.rotation.set(A,P,L),D.castShadow=!0,D.receiveShadow=!0,e.add(D),D},a=i===0?new Ut({map:Qo("pk"),roughness:.3,metalness:.15}):En(t.color,{r:.28,m:.35}),c=En("#ffffff",{r:.3,m:.1}),l=En("#fff6c8",{e:"#fff1a8",ei:1.4}),h=En("#ff3030",{e:"#ff1a1a",ei:1.2}),u=[],f=[],d=.46,g=1,y=1.35,p=-1.3,m={y:.55,z:-.15};if(i===0)d=.44,g=1.02,y=1.45,p=-1.35,m={y:.5,z:-.2},o(re(1.9,.5,4.3,.22),a,0,.55,0),o(re(1.7,.34,1.5,.2),a,0,.78,1.35,-.12),o(re(1.7,.4,1,.2),a,0,.86,-1.6),o(re(1.5,.5,.12,.05),kc(),0,1.02,.78,-.55),o(re(.12,.1,1.5,.04),r,.95,1.16,-1.82),o(re(.12,.1,1.5,.04),r,-.95,1.16,-1.82),o(re(2,.09,.45,.04),a,0,1.28,-2),o(re(.1,.4,.3,.03),r,.7,1.08,-1.95),o(re(.1,.4,.3,.03),r,-.7,1.08,-1.95),o(re(.4,.2,.1,.04),l,.65,.68,2.12),o(re(.4,.2,.1,.04),l,-.65,.68,2.12),o(re(.45,.14,.1,.04),h,.65,.78,-2.17),o(re(.45,.14,.1,.04),h,-.65,.78,-2.17);else if(i===1){d=.62,g=1.18,y=1.3,p=-1.25,m={y:.62,z:-.1},o(re(1.7,.4,3.8,.16),a,0,.62,0),o(re(1.5,.3,1.2,.14),a,0,.9,1.4),o(re(1.3,.35,.9,.12),En("#ffd23f",{r:.4}),0,.95,-1.35);for(let _ of[-1,1])o(new ft(.06,.06,1.7,8),r,_*.78,1.5,-.1,.12,0,0),o(new ft(.06,.06,1.6,8),r,_*.78,1,.7,.9,0,0),o(new ft(.06,.06,1.7,8),r,_*.78,1.5,-.1,Math.PI/2,0,0);o(new ft(.06,.06,1.6,8),r,0,2,-.1,0,0,Math.PI/2),o(new ue(.2,12,8),l,.55,.98,2),o(new ue(.2,12,8),l,-.55,.98,2),o(re(.4,.12,.1,.04),h,.5,.8,-1.95),o(re(.4,.12,.1,.04),h,-.5,.8,-1.95)}else if(i===2){d=.55,g=1.1,y=1.55,p=-1.5,m={y:.78,z:.55},o(re(2,.55,4.7,.2),a,0,.75,0),o(re(1.9,.75,1.5,.18),a,0,1.28,.55),o(re(1.5,.45,.1,.05),kc(),0,1.55,1.3,-.35),o(re(1.8,.1,1.9,.05),r,0,1.1,-1.35);for(let _ of[-1,1])o(re(.1,.5,1.9,.04),a,_*.97,1.35,-1.35);o(re(1.8,.5,.1,.04),a,0,1.35,-2.28),o(re(1.8,.1,.1,.04),En("#c8ccd8",{m:.8,r:.2}),0,.75,2.4),o(re(.1,.5,.1,.03),En("#c8ccd8",{m:.8,r:.2}),.6,.85,2.38),o(re(.1,.5,.1,.03),En("#c8ccd8",{m:.8,r:.2}),-.6,.85,2.38),o(re(.35,.22,.1,.04),l,.7,.98,2.36),o(re(.35,.22,.1,.04),l,-.7,.98,2.36),o(re(.3,.2,.1,.04),h,.8,1,-2.36),o(re(.3,.2,.1,.04),h,-.8,1,-2.36)}else if(i>=4){d=.5,g=1.12,y=1.5,p=-1.5,m={y:.62,z:-.2};let _=En("#e0001f",{r:.16,m:.55}),M=En("#15161c",{r:.5,m:.2}),w=En("#ffffff",{r:.25,m:.1}),v=En("#ff7a1a",{e:"#ff5a00",ei:2}),b=new ji;[[-2.4,.3],[-2.4,.84],[-1.7,1],[-.95,.96],[-.8,.66],[.5,.66],[.72,.78],[2.2,.56],[2.46,.44],[2.46,.3]].forEach(([D,R],C)=>C?b.lineTo(D,R):b.moveTo(D,R));let A=new Qi(b,{depth:1.7,bevelEnabled:!0,bevelSize:.1,bevelThickness:.1,bevelSegments:2,steps:1});A.rotateY(-Math.PI/2),A.translate(.85,0,0),o(A,_,0,0,0),o(re(1.2,.04,1.3,.02),M,0,.7,-.1),o(re(1,.32,.18,.06),_,0,.88,-1.05),o(re(1.5,.42,.08,.03),kc(),0,.98,.6,-.62);for(let D of[-1,1])o(re(.12,.34,.1,.03),M,D*.76,.9,.62,-.62),o(re(.42,.34,1.7,.14),_,D*1.03,.6,-1.6),o(re(.3,.3,.9,.1),_,D*1,.55,1.5),o(re(.1,.3,.8,.03),M,D*.98,.5,-.35),o(re(.07,.62,.8,.02),M,D*1.12,1.52,-2.28),o(re(.09,.62,.09,.02),M,D*.55,1.2,-2.15);o(re(.46,.03,1.9,.01),w,0,.8,1.4,.07),o(re(2.3,.1,.8,.03),_,0,1.52,-2.28),o(re(2.3,.07,.34,.02),M,0,1.45,-2),o(re(2.3,.08,.55,.03),M,0,.3,2.46),o(re(1.9,.12,.3,.04),M,0,.3,-2.4);for(let D of[-1,1])o(re(.42,.14,.1,.04),l,D*.62,.62,2.5),o(re(.5,.12,.1,.04),h,D*.6,.86,-2.48),o(new ft(.1,.12,.3,10),M,D*.42,.52,-2.5,Math.PI/2,0,0);let P=new B(new Ze(2.1,4.6),new oe({color:"#27b6ff",transparent:!0,opacity:.55,blending:Di,depthWrite:!1,toneMapped:!1}));P.rotation.x=-Math.PI/2,P.position.set(0,.12,0),e.add(P);let L=[];for(let D of[-1,1])for(let[R,C,z]of[[.17,1.3,"#ff6a00"],[.09,.8,"#ffe14a"]]){let F=new be(R,C,8);F.rotateX(-Math.PI/2),F.translate(0,0,-C/2);let J=new B(F,new oe({color:z,transparent:!0,opacity:.9,toneMapped:!1}));J.position.set(D*.42,.52,-2.62),e.add(J),L.push(J)}e.userData.flames=L}else{d=.42,g=.98,y=1.15,p=-1.1,m={y:.5,z:-.05},o(new ue(1.15,24,16),a,0,.95,-.05).scale.set(.9,.62,1.55),o(re(1.6,.14,3.2,.06),c,0,.42,0);for(let M of[-1,1])o(new ue(.27,14,10),l,M*.62,.95,1.72),o(new ue(.2,12,8),h,M*.55,.85,-1.78),o(new ft(.09,.09,.5,8),r,M*.42,1.55,1.1,.45,0,0);o(re(1.5,.35,.1,.04),kc(),0,1.22,.85,-.7),o(re(.5,.05,2.3,.02),En("#ff6bd5",{r:.4}),.15,1.52,-.75,0,0,.08)}let E=new ft(d,d,.42,20),S=new ft(d*.56,d*.56,.44,12);for(let[_,M,w]of[[1,y,1],[-1,y,1],[1,p,0],[-1,p,0]]){let v=new xt;v.position.set(_*g,d,M),e.add(v);let b=new xt;v.add(b);let A=new B(E,n);A.rotation.z=Math.PI/2,A.castShadow=!0,b.add(A);let P=new B(S,s);P.rotation.z=Math.PI/2,b.add(P),u.push(b),w&&f.push(v)}let x=new B(new Li(2.6,20),new oe({color:0,transparent:!0,opacity:.22,depthWrite:!1}));return x.rotation.x=-Math.PI/2,x.position.y=.04,x.scale.set(.9,1.25,1),e.add(x),e.userData={wheels:u,pivots:f,seat:m,spec:t,flames:e.userData.flames},e}function T0(i,t,e){let n=i.userData;for(let r of n.wheels)r.rotation.x+=t.speed/.5*e;for(let r of n.pivots)r.rotation.y=-t.steer*.5;i.rotation.z=Xo.clamp(-t.steer*Math.min(1,Math.abs(t.speed)/20)*.07,-.08,.08);let s=(t.speed-(t._ps===void 0?t.speed:t._ps))/Math.max(e,.001);if(t._ps=t.speed,t._sq=(t._sq||0)+(Xo.clamp(s,-30,30)*.0045-(t._sq||0))*Math.min(1,e*7),i.rotation.x=-(t.pitch||0)-t._sq,n.flames){let r=Xo.clamp(.2+Math.max(0,t.speed)/45+(t.boost>0?.9:0)+(t.driver!==-1?.15:0),.15,2)*(.85+Math.random()*.3);for(let o of n.flames)o.scale.set(1,1,r),o.visible=t.driver!==-1||t.boost>0}}var X_={lion:3,leopard:2.7,elephant:5.3,horse:3.8,dino:5.6,coyote:2.7,boar:2.8,hyena:2.8,bear:4.6,gorilla:4.9},Gc=(i,t,e)=>i+(t-i)*e,Y_=(i,t,e)=>{let n=(t-i)%(Math.PI*2);return n>Math.PI&&(n-=Math.PI*2),n<-Math.PI&&(n+=Math.PI*2),i+n*e},q_=new ft(.07,.07,1,5),Z_=new Ut({color:"#c9a063",roughness:.9}),$_=new O(0,1,0),Vc=class{constructor(t){this.r=t,this.multi=t.multi,this.quest=!!t.meta.quest,this.hunt=!!t.meta.hunt,this.defs=this.hunt?Yp():this.quest?Dp():Sc,wc.defs=this.defs,this.L=this.hunt?qp():this.quest?Np():Tc(),this.list=Tp(this.defs),this.mount=null,this.mountT=0,this.t=0,this.near=null,this.evAcc=[],this.items=this.list.map(e=>{let n=Hp(e.kind);n.root.position.set(e.x,e.y,e.z),n.root.rotation.y=e.yaw,t.scene.add(n.root);let s={a:e,o:n,x:e.x,y:e.y,z:e.z,yaw:e.yaw,speed:0,tag:null,tagKey:"",ropes:[],px:e.x,pz:e.z,hitFx:0};if(e.kind==="dino")for(let r=0;r<Ac.length;r++){let o=new B(q_,Z_);o.castShadow=!0,t.scene.add(o),s.ropes.push(o)}return s}),this.names=new Map(t.players.map(e=>[e.id,e.name]))}me(){return this.r.localId}petCount(){let t=0;for(let e of this.list)e.owner===this.me()&&t++;return t}update(t){let e=this.r,n=e.me.body,s=this.me();if(this.t+=t,this.mountT>0&&(this.mountT-=t),!this.multi&&e.levelTime>=0&&!e.over){let c=Ap(this.list,t,[{id:s,x:n.x,y:n.y,z:n.z,r:n.yaw,mounted:this.mount?1:0}],this.L);this.handle(c)}this.mount&&this.multi&&this.mountT<=0&&this.mount.rider!==s&&this.dismount(!0);for(let c of this.items){let l=c.a,h=rn[l.kind],u=this.mount===l;if(u)c.x=n.x,c.y=n.y,c.z=n.z,c.yaw=n.yaw;else if(!this.multi)c.x=l.x,c.y=l.y,c.z=l.z,c.yaw=l.yaw;else{let y=1-Math.exp(-13*t),p=Math.hypot(l.x-c.x,l.z-c.z)>14;c.x=p?l.x:Gc(c.x,l.x,y),c.y=Gc(c.y,l.y,y),c.z=p?l.z:Gc(c.z,l.z,y),c.yaw=Y_(c.yaw,l.yaw,1-Math.exp(-10*t))}let f=t>0?Math.hypot(c.x-c.px,c.z-c.pz)/t:0;c.speed=Gc(c.speed,Math.min(f,14),.25),c.px=c.x,c.pz=c.z;let d=c.o,g=d.root;g.position.set(c.x,c.y,c.z),g.rotation.y=c.yaw,g.visible=l.st!==Ee.HIDDEN,l.st!==Ee.HIDDEN&&(c.atk=l.st===Ee.ATTACK?(c.atk||0)+t:0,kp(d,this.t,t,u?Math.min(14,Math.hypot(n.vx,n.vz)):c.speed,l.st,l.st===Ee.ATTACK?Math.max(.02,1-c.atk/.5):0),this.updateTag(c,h),c.ropes.length&&this.updateRopes(c),l.st===Ee.PET&&l.owner===s&&!u&&Math.random()<t*.35&&e.particles.emit(c.x,c.y+h.seat+.6,c.z,1,{color:"#ff5fa8",speed:.6,up:1.6,life:.9,size:.38}))}let r=null,o=7;if(!this.mount&&!e.over)for(let c of this.items){let l=c.a;if(l.owner!==s||l.rider)continue;let h=Math.hypot(l.x-n.x,l.z-n.z);h<o&&Math.abs(l.y-n.y)<3.5&&n.stun<=0&&(o=h,r=l)}this.near=r;let a=document.body.classList;!!r!==a.contains("near-car")&&a.toggle("near-car",!!r),!!this.mount!==a.contains("riding")&&a.toggle("riding",!!this.mount)}tagKey(t){return t.owner?t.owner===this.me()?"mine":"o"+t.owner:"w"+t.hp}updateTag(t,e){let n=t.a,s=this.tagKey(n);if(s!==t.tagKey){t.tag&&(t.o.root.remove(t.tag),t.tag.material.map.dispose(),t.tag.material.dispose());let r=n.owner===this.me(),o=n.owner?r?"\u2665 MY "+e.name:(this.names.get(n.owner)||"Pet")+"'s "+e.name:`${e.name}  ${n.hp}/${e.hp}`;t.tag=Fr(o,n.owner?r?"#4ade80":"#7cc7ff":"#ff6b3d"),t.tag.position.set(0,X_[n.kind],0),t.o.root.add(t.tag),t.tagKey=s}this.r.tagScale(t.tag,t.o.root.position,1.15)}updateRopes(t){let e=t.a,n=e.kind==="dino"&&!e.owner;t.o.head.getWorldPosition(this._v||(this._v=new O));let r=this._v;t.ropes.forEach((o,a)=>{if(o.visible=n,!n)return;let c=Ac[a],l=Ce.sx+c[0],h=Ce.sz+c[1],u=Ce.summitY+2.3,f=r.x-l,d=r.y-.2-u,g=r.z-h,y=Math.hypot(f,d,g)||1;o.position.set(l+f/2,u+d/2-.15*Math.sin(y*.5),h+g/2),o.scale.set(1,y,1),o.quaternion.setFromUnitVectors($_,new O(f/y,d/y,g/y))})}batHit(t){let e=Math.sin(t.yaw),n=Math.cos(t.yaw),s=this.me(),r=!1;if(this.mount)return!1;for(let o of this.items){let a=o.a,c=rn[a.kind];if(a.owner||a.rider||a.st===Ee.HIDDEN)continue;let l=a.x-t.x,h=a.z-t.z,u=Math.hypot(l,h);u>c.r+2.7||Math.abs(a.y-t.y)>3.5||u<.001||(l*e+h*n)/u<-.15||(r=!0,this.multi?this.r.sendNet({t:"ahit",id:a.id}):this.handle(Rp(a,s,t.x,t.z)),vt.bonk(),this.r.particles.emit(a.x,a.y+c.seat*.7,a.z,20,{color:"#ffd23f",speed:6,up:3,life:.5,size:.3}))}return r}handle(t){for(let e of t){let n=this.list[e.id],s=n&&rn[n.kind];if(n){if(this.hunt&&(e.k==="hit"||e.k==="kill")){let r=this.items[e.id];r&&(r.tagKey=""),e.k==="hit"?(n.hp=e.hp,vt.hit&&vt.hit()):(n.st=Ee.HIDDEN,n.dead=1,vt.roar(s.big),this.r.particles.emit(n.x,n.y+s.seat*.7,n.z,40,{color:"#ffd23f",speed:6,up:5,life:.9,size:.5}),this.r.particles.emit(n.x,n.y+s.seat*.7,n.z,20,{color:"#ffffff",speed:4,up:3,life:.7,size:.4}));continue}if(e.k==="hit"){let r=this.items[e.id];this.r.toast(`${s.name}  ${Math.max(0,e.hp)} hit${e.hp===1?"":"s"} left!`),r&&(r.tagKey=""),vt.roar(s.big)}else if(e.k==="tame"){let r=e.pid===this.me();this.items[e.id].tagKey="",vt.tame();let o=this.items[e.id];this.r.particles.emit(n.x,n.y+s.seat,n.z,36,{color:"#ff5fa8",speed:5,up:5,life:1.1,size:.5}),this.r.particles.emit(n.x,n.y+s.seat,n.z,20,{color:"#ffd23f",speed:6,up:6,life:.9,size:.35}),n.kind==="dino"?this.r.toast(r?"\u{1F996} DINOSAUR FREED! It is your pet - press RIDE!":`${this.names.get(e.pid)||"Someone"} freed the DINOSAUR!`):this.r.toast(r?`${s.name} is now YOUR PET!  ${K_()}`:`${this.names.get(e.pid)||"Someone"} tamed the ${s.name}!`)}else e.k==="bite"&&(e.pid===this.me()&&this.r.onAnimalBite(e),vt.roar(rn[n.kind].big))}}}onNet(t){for(let e of t.a){let n=this.list[e[0]];if(!n)continue;let s=n.owner;n.x=e[1],n.y=e[2],n.z=e[3],n.yaw=e[4],n.st=e[5],n.owner=e[6],n.rider=e[7],n.hp=e[8],s!==n.owner||this.items[n.id].tagKey===""?this.items[n.id].tagKey="":this.tagKey(n)!==this.items[n.id].tagKey&&(this.items[n.id].tagKey="")}}onEvent(t){this.handle([t])}setNames(t){for(let e of t)this.names.set(e.id,e.name)}speedK(){return this.mount?rn[this.mount.kind].ride:1}flagBits(){return this.mount?8192|this.mount.id<<14:0}seatLocal(t){this.mount&&(t.position.y+=rn[this.mount.kind].seat,t.scale.setScalar(.9))}camLift(){return this.mount?rn[this.mount.kind].seat:0}toggleMount(){let t=this.r,e=t.me.body,n=this.me();if(t.over||t.levelTime<0||t.menuOpen)return;if(this.mount)return this.dismount(!1);let s=this.near;if(!s){t.toast("Beat an animal with the BAT to tame it first!");return}this.mount=s,s.rider=n,this.mountT=1.5,e.x=s.x,e.z=s.z,e.y=Math.max(e.y,s.y),e.vx=e.vz=0,e.vy=0,this.multi&&t.sendNet({t:"aride",id:s.id,on:1}),vt.pickup(),t.toast(`Riding the ${rn[s.kind].name}!  `+("ontouchstart"in window?"tap RIDE again to get off":"C to get off \u2022 SPACE to jump"))}dismount(t){let e=this.r,n=e.me.body,s=this.mount;s&&(this.mount=null,s.rider=0,this.multi&&!t&&e.sendNet({t:"aride",id:s.id,on:0}),n.x+=Math.cos(n.yaw)*2.4,n.z-=Math.sin(n.yaw)*2.4,n.vy=4,n.grounded=!1,n.hitCd=.3,e.me.model.group.scale.setScalar(1),vt.pickup())}dispose(){for(let e of this.items){this.r.scene.remove(e.o.root);for(let n of e.ropes)this.r.scene.remove(n)}let t=document.body.classList;t.remove("riding"),t.remove("near-car")}},K_=()=>"ontouchstart"in window?"Tap RIDE to hop on!":"Press C near it to RIDE!";var Wc={rate:.26,range:48,cone:.75};function Yf(){let i=new xt,t=new Ut({color:"#2b2f3a",roughness:.4,metalness:.7}),e=new Ut({color:"#d9822b",roughness:.5,metalness:.3}),n=new B(new qt(.16,.2,.62),t);n.position.set(0,0,.3);let s=new B(new ft(.05,.05,.5,8),e);s.rotation.x=Math.PI/2,s.position.set(0,.05,.75);let r=new B(new qt(.13,.28,.14),t);return r.position.set(0,-.2,.14),r.rotation.x=.25,i.add(n,s,r),i.position.set(.36,.95,.18),i.traverse(o=>{o.isMesh&&(o.castShadow=!0)}),i}function A0(i,t,e){let n=null,s=1e9,r=Math.sin(e),o=Math.cos(e);for(let a of i){if(a.st===Ee.HIDDEN||a.owner||a.dead)continue;let c=a.x-t.x,l=a.z-t.z,h=Math.hypot(c,l)-rn[a.kind].r*.5;if(h>Wc.range||Math.abs(a.y-t.y)>6||h<-1)continue;let u=Math.acos(Math.max(-1,Math.min(1,(c*r+l*o)/(Math.hypot(c,l)||1))));if(u>Wc.cone)continue;let f=u*20+h;f<s&&(s=f,n=a)}return n}var dt=i=>document.getElementById(i),Gn=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches||(typeof navigator!="undefined"&&navigator.maxTouchPoints||0)>0,De={x:0,y:0,jump:!1,grab:!1},bn=(i,t,e)=>i<t?t:i>e?e:i,zs=(i,t,e)=>i+(t-i)*e,Qf=(i,t,e)=>{let n=(t-i)%(Math.PI*2);return n>Math.PI&&(n-=Math.PI*2),n<-Math.PI&&(n+=Math.PI*2),i+n*e},Xc=i=>{let t=Math.floor(i/60),e=i-t*60;return`${t}:${e<10?"0":""}${e.toFixed(2)}`},qf=i=>i===1?"1st":i===2?"2nd":i===3?"3rd":i+"th",J_=["\u{1F947}","\u{1F948}","\u{1F949}"],ki=dt("c"),zn;try{zn=new $o({canvas:ki,antialias:!0,powerPreference:"high-performance"})}catch(i){throw document.querySelector("#loader p").textContent="WebGL is not available in this browser. Please use a recent Chrome / Edge / Firefox.",i}zn.outputColorSpace=Be;zn.toneMapping=br;zn.toneMappingExposure=1.05;zn.shadowMap.enabled=!0;zn.shadowMap.type=Tl;var Hr=Math.min(window.devicePixelRatio||1,Gn?1.5:2),he={dpr:Gn?Math.min(Hr,1):Math.min(Hr,1.5),t:0,frames:0,good:0,shadows:!0,warm:3};function Us(){on&&(zn.setPixelRatio(he.dpr),zn.setSize(window.innerWidth,window.innerHeight,!1),on.camera.aspect=window.innerWidth/window.innerHeight,on.camera.updateProjectionMatrix(),X&&(X.camera.aspect=window.innerWidth/window.innerHeight,X.camera.updateProjectionMatrix(),X.particles.setScale(zn.domElement.height)),on.particles.setScale(zn.domElement.height))}function j_(i){if(he.low)return;if(he.warm>0){he.warm-=i;return}if(he.t+=i,he.frames++,he.t<1.2)return;let t=he.frames/he.t;he.t=0,he.frames=0,t<40?(he.good=0,he.dpr>.7?(he.dpr=Math.max(.7,he.dpr-.2),Us()):he.shadows&&t<30&&(he.shadows=!1,X&&X.setShadows(!1))):t>58?++he.good>=3&&he.dpr<Math.min(Hr,1.75)&&(he.dpr=Math.min(Math.min(Hr,1.75),he.dpr+.1),he.good=0,Us()):he.good=0}try{let i=localStorage.getItem("ph_low");he.low=i==="1",i===null&&Gn&&((navigator.hardwareConcurrency||4)<=2||(navigator.deviceMemory||4)<=2)&&(he.low=!0)}catch{he.low=!1}he.low&&(he.dpr=.75,he.shadows=!1);function Q_(){he.low?(he.dpr=.75,he.shadows=!1):(he.dpr=Gn?Math.min(Hr,1):Math.min(Hr,1.5),he.shadows=!0,he.warm=3),X&&X.setShadows(he.shadows),Us()}var tM=new Cs(zn),P0=tM.fromScene(new Ko,.04).texture,_t={screen:"title",mode:"single",name:localStorage.getItem("ph_name")||"",char:+(localStorage.getItem("ph_char")||0),level:0,net:null,room:null,myId:null,pendingJoin:null,muted:!1},X=null,on=null,$f=[],L0=i=>+(localStorage.getItem("ph_best_"+i)||0),Kf=class{constructor(){let t=aa.fun;this.scene=new Ii,this.scene.fog=new fr(t.fog,70,420),this.scene.environment=P0,this.scene.environmentIntensity=.7,this.camera=new an(42,1,.1,1500),this.sky=Bf(t),this.scene.add(this.sky),this.water=Hf(t,-3),this.scene.add(this.water),this.scene.add(new bs(t.hemiSky,t.hemiGround,1));let e=new Ss(t.sun,2.4);e.position.set(-10,18,14),e.castShadow=!0,e.shadow.mapSize.set(1024,1024);let n=e.shadow.camera;n.left=-12,n.right=12,n.top=12,n.bottom=-12,n.near=1,n.far=60,e.shadow.bias=-4e-4,e.shadow.normalBias=.03,this.scene.add(e),this.sun=e;let s=u=>new Ut({color:u,roughness:.35}),r=new B(new ft(15,14,2,48),s("#ff9ccf"));r.position.y=-1,r.receiveShadow=!0,this.scene.add(r);let o=new B(new ft(13,13,.1,48),s("#fff3fb"));o.position.y=.02,o.receiveShadow=!0,this.scene.add(o),this.tops=[.8,1.25,1.25,.8],[[-4.5,.8,"#7be8a0"],[-1.5,1.25,"#5fc2ff"],[1.5,1.25,"#ffd23f"],[4.5,.8,"#ff9ccf"]].forEach(([u,f,d])=>{let g=new B(new ft(1.1,1.25,f,32),s(d));g.position.set(u,f/2,-.5),g.castShadow=g.receiveShadow=!0,this.scene.add(g)}),this.slotPos=[[-4.5,.8,-.5],[-1.5,1.25,-.5],[1.5,1.25,-.5],[4.5,.8,-.5]];let a=Uc("HARIS"),c=Uc("HARIS","MADE THIS GAME"),l=new B(new Ze(11,4.3),new oe({map:a,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2}));l.rotation.x=-Math.PI/2,l.position.set(0,.1,4.4),this.scene.add(l);let h=new B(new Ze(26,13),new oe({map:c,transparent:!0,depthWrite:!1,toneMapped:!1,fog:!1}));h.position.set(0,9.5,-24),this.scene.add(h),this.banner=h,this.chars=[0,1,2,3].map(u=>{let f=new Ds(u);return this.scene.add(f.group),{c:f,tag:null,name:null,show:!0,scale:1,hop:0}}),this.ambient=new oa("fun",160),this.scene.add(this.ambient.points),this.particles=new ra(260),this.scene.add(this.particles.points),this.mode="title",this.sel=0,this.t=0,this.lobby=[]}setName(t,e){let n=this.chars[t];n.name!==e&&(n.tag&&(n.c.group.remove(n.tag),n.tag.material.map.dispose(),n.tag.material.dispose(),n.tag=null),n.name=e,e&&(n.tag=Fr(e,zi[t].color),n.tag.position.set(0,n.c.height+.55,0),n.c.group.add(n.tag)))}setTitle(t=-1){this.mode="title",this.sel=t,this.lobby=[],this.chars.forEach((e,n)=>{e.show=!0,this.setName(n,null)})}setLobby(t){this.mode="lobby",this.lobby=t,this.chars.forEach((e,n)=>{let s=t.findIndex(r=>r.char===n);e.show=s>=0,e.slot=s,this.setName(n,s>=0?t[s].name:null)})}burst(t){let e=this.slotPos[this.slotOf(t)];this.particles.emit(e[0],e[1]+1.4,e[2]+.5,40,{rainbow:!0,speed:4,up:6,life:1,size:.35,gravity:7})}slotOf(t){return this.mode==="lobby"?[1,2,0,3][Math.max(0,this.chars[t].slot)%4]:t}update(t){this.t+=t;let e=this.camera;e.position.set(Math.sin(this.t*.25)*1.8,2.9+Math.sin(this.t*.4)*.15,10.5),e.lookAt(0,1.9,0),this.sky.position.copy(e.position),this.water.material.uniforms.time.value=this.t,this.chars.forEach((n,s)=>{if(n.c.group.visible=n.show,!n.show)return;let r=this.slotPos[this.slotOf(s)],o=this.mode==="title"?Math.floor(this.t/3)%4===s:this.mode!=="lobby"&&this.sel===s;n.scale=zs(n.scale,o?1.18:1,Math.min(1,t*8)),n.c.group.scale.setScalar(n.scale),n.hop=o?Math.abs(Math.sin(this.t*5))*.25:zs(n.hop,0,Math.min(1,t*8)),n.c.group.position.set(r[0],r[1]+n.hop,r[2]),n.c.group.rotation.y=Qf(n.c.group.rotation.y,this.mode==="lobby"?Math.sin(this.t*.7+s)*.3:Math.sin(this.t*.6+s*2)*.35,Math.min(1,t*4)),n.c.update(t,{speed:0,grounded:!0,vy:0,stun:0,dive:0,celebrate:o||this.mode==="lobby"&&Math.floor(this.t*.5+s)%2===0}),n.tag&&n.tag.scale.set(2.4,.6,1)}),this.ambient.update(this.t,e.position),this.particles.update(t)}},ca=class{constructor(t,e){this.info=t,this.id=t.id,this.name=t.name,this.model=new Ds(t.char),e.add(this.model.group),this.tag=Fr(t.name,zi[t.char].color),this.tag.position.set(0,this.model.height+.7,0),this.model.group.add(this.tag),this.snaps=[],this.x=0,this.y=-50,this.z=0,this.yaw=Math.PI,this.speed=0,this.flags=0,this.vy=0,this.vx=0,this.vz=0,this.sw=0,this.ds=[],this.dMin=0,this.jit=0,this.rs=0,this.has=!1,this.finished=!1,this.lastLanded=!1,this.rxAt=Date.now(),this.stunT=0}push(t){t.rs!==this.rs&&(this.snaps.length=0,this.rs=t.rs);let e=this.snaps[this.snaps.length-1];if(this.rxAt=Date.now(),e&&t.ts<=e.ts){if(e.ts-t.ts<400)return;this.snaps.length=0,this.ds.length=0}let n=Date.now(),s=n-t.ts;for(this.ds.push([n,s]);this.ds.length>1&&n-this.ds[0][0]>4e3;)this.ds.shift();let r=1/0;for(let o of this.ds)o[1]<r&&(r=o[1]);this.dMin=r,this.jit=this.jit*.92+Math.abs(s-r)*.08,this.snaps.push(t),this.snaps.length>40&&this.snaps.shift()}renderTime(){return Date.now()-this.dMin-bn(70+this.jit*2.2,70,260)}update(t,e){let n=this.snaps;if(!n.length)return;for(;n.length>2&&n[1].ts<=t;)n.shift();let s=n[0],r=n[1]||n[0],o=0;if(n.length>1){let d=Math.max(1,r.ts-s.ts);o=bn((t-s.ts)/d,0,1+220/d)}let a=zs(s.x,r.x,o),c=zs(s.y,r.y,o),l=zs(s.z,r.z,o);if(!this.has)this.x=a,this.y=c,this.z=l,this.has=!0;else{let d=1-Math.exp(-28*e),g=this.x,y=this.z;this.x+=(a-this.x)*d,this.y+=(c-this.y)*d,this.z+=(l-this.z)*d,e>0&&(this.vx+=((this.x-g)/e-this.vx)*.25,this.vz+=((this.z-y)/e-this.vz)*.25)}this.yaw=Qf(this.yaw,r.r,1-Math.exp(-16*e)),this.speed=r.a&8192?0:zs(s.sp,r.sp,bn(o,0,1)),this.flags=r.a,Date.now()-this.rxAt>700&&(this.flags&=-23,this.speed=0),this.vy=n.length>1?(r.y-s.y)/Math.max(.02,(r.ts-s.ts)/1e3):0;let h=this.model.group;if(h.position.set(this.x,this.y,this.z),h.rotation.y=this.yaw,this.flags&8192){let d=wc.defs[this.flags>>14&7];d&&(h.position.y+=rn[d.kind].seat)}this.flags&2?this.stunT=(this.stunT||0)+e:this.stunT=0,this.stunT>1.2&&(this.flags&=-3);let u=!!(this.flags&1),f=u&&!this.lastLanded;this.lastLanded=u,this.sw=this.flags&16?Math.min(1,(this.sw||.001)+e/.42):0,this.model.update(e,{speed:this.speed,grounded:u,vy:this.vy,stun:this.flags&2?1:0,dive:this.flags&4?1:0,celebrate:!!(this.flags&8),swing:this.sw,shield:!!(this.flags&32),leader:!!this.leader,mega:!!(this.flags&128),landed:f})}dispose(t){t.remove(this.model.group),this.tag.material.map.dispose(),this.tag.material.dispose(),this.model.dispose()}},ke=new Set,Sn={jump:!1,dive:!1,grab:!1},qc=class i{constructor(t,e,n,s){this.level=t,this.meta=Jo[t],this.multi=s.multi,this.localId=n,this.players=e,this.t0=s.t0,this.phase="countdown",this.finished=!1,this.over=!1,this.finishTime=0,this.finishedMap=new Map,this.camYaw=0,this.camPitch=.34,this.camDist=8.2,this.camPos=new O,this.camTarget=new O,this.camInit=!1,this.sendT=0,this.rs=0,this.cpIdx=0,this.cpCur=null,this.stepDist=0,this.lastCount=99,this.hudT=0,this.hintT=0,this.warnSec=-1,this.hang=null,this.hangCd=0,this.hangHint=!1,this.levelTime=-4,this.batCd=0,this.swingT=0,this.batPending=!1,this.swingMega=!1,this.fx={turbo:0,jump:0,shield:0,mega:0},this.fxSig="";let r=aa[this.meta.key],o=this.scene=new Ii;o.background=new kt(r.fog),o.fog=new fr(r.fog,r.fogNear,r.fogFar),o.environment=P0,o.environmentIntensity=r.env,this.camera=new an(62,window.innerWidth/window.innerHeight,.1,1800);let{world:a,info:c}=s0(t,!1,u0(),s.seed||1);this.world=a,this.info=c,o.add(a.group),a.onEvent=null,this.sky=Bf(r),o.add(this.sky),this.water=Hf(r,a.waterY),o.add(this.water),this.scenery=d0(o,this.meta.key,c,a),this.poolMeshes=[];for(let d of a.pools){let g=_0(d),y=g.material.uniforms;y.fogC.value.set(r.fog),y.fogN.value=r.fogNear,y.fogF.value=r.fogFar,y.skyTop.value.set(r.top),y.skyHor.value.set(r.horizon);let p=M0(d);o.add(g,p),this.poolMeshes.push({wm:g,cm:p,pl:d})}if(this.cars=[],this.drive=null,this.lookT=0,this.nearCar=null,this.hornCd=0,this.skidT=0,c.cars){for(let d of c.cars){let g=w0(d.id);g.rotation.order="YXZ",g.position.set(d.x,d.y||0,d.z),g.rotation.y=d.yaw,o.add(g);let y=b0(d.id,d.x,d.z,d.yaw);y.y=d.y||0,this.cars.push({st:y,mesh:g})}this.skyG=0;try{this.racerOk=localStorage.getItem("ph_racer")==="1"}catch{this.racerOk=!1}this.applyFree(),s.multi&&_t.pendingCars&&(this.onCars(_t.pendingCars),_t.pendingCars=null)}o.add(new bs(r.hemiSky,r.hemiGround,r.hemiI));let l=this.sun=new Ss(r.sun,r.sunI);this.sunDir=new O(...r.sunPos).normalize().multiplyScalar(90),l.castShadow=he.shadows,l.shadow.mapSize.set(Gn?1024:2048,Gn?1024:2048);let h=l.shadow.camera;h.left=-40,h.right=40,h.top=40,h.bottom=-40,h.near=5,h.far=220,l.shadow.bias=-3e-4,l.shadow.normalBias=.04,o.add(l,l.target),this.particles=new ra(600),o.add(this.particles.points),this.particles.setScale(zn.domElement.height),this.ambient=new oa(this.meta.key,320),o.add(this.ambient.points),this.remotes=new Map;let u=e.findIndex(d=>d.id===n);this.slot=Math.max(0,u);let f=e[this.slot]||{name:"Player",char:0};if(this.me={body:r0(),model:new Ds(f.char),name:f.name,char:f.char},o.add(this.me.model.group),this.me.model.group.rotation.order="YXZ",this.me.tag=Fr(f.name,zi[f.char].color),this.me.tag.position.set(0,this.me.model.height+.7,0),this.me.model.group.add(this.me.tag),e.forEach((d,g)=>{d.id!==n&&this.remotes.set(d.id,new ca(d,o))}),this.spawn(this.slot),this.an=this.meta.free&&!this.meta.arena?new Vc(this):null,document.body.classList.toggle("free-map",!!this.meta.free),this.quest=this.meta.quest?{q:Lp(),vis:new Cc(a,c),L:Fi()}:null,this.victory=0,this.hopT=0,this.hunt=this.meta.hunt?{vis:new Lc(a,c,o),h:c.hunt.st,L:c.hunt.L}:null,this.gunCd=0,this.fireHeld=!1,document.body.classList.toggle("hunt-map",!!this.hunt),this.hunt){this.me.model.group.add(Yf());for(let d of this.remotes.values())d.model.group.add(Yf())}this.buildProgress(),this.buildBoxes(),document.body.classList.add("in-race"),dt("hud-level").textContent=this.meta.name,dt("hud").classList.remove("hidden"),dt("hud-hint").classList.remove("fade"),this.hintT=8,this.setShadows(he.shadows),Br(t),Bc(!1),this.pos=this.me.body}updateQuest(t){let e=this.quest,n=this.me.body;if(!this.multi&&this.levelTime>=0&&!this.over){let s=zp(e.q,t,[{id:this.localId,x:n.x,y:n.y,z:n.z}],this.an.list,1,e.L,[]);for(let r of s)this.questEvent(r)}e.vis.setState(e.q),e.vis.update(t),this.victory>0&&(this.victory+=t,this.hopT-=t,this.hopT<=0&&n.grounded&&!(this.an&&this.an.mount)&&(this.hopT=.7+Math.random()*.3,n.vy=9.5,n.grounded=!1),Math.random()<t*14&&this.particles.emit(n.x+(Math.random()-.5)*8,n.y+7,n.z+(Math.random()-.5)*8,3,{color:["#ff5fa8","#ffd23f","#4cc9f0","#80ed99"][Math.random()*4|0],speed:2.5,up:-1,life:1.6,size:.4,gravity:3,spread:1}))}questEvent(t){let e=this.quest,n=e.L;if(e.vis.event(t),t.k==="boulder"){let s=n.chapters[t.ch].boulderZ;vt.roar(1),this.toast("THE BOULDER FALLS! A BEAST APPEARS - hit it with the BAT!"),this.particles.emit(0,3,s,60,{color:"#bdb6a8",speed:8,up:4,life:1.2,size:.8,gravity:4,spread:1})}else t.k==="gate"?(vt.tame(),this.toast(t.ch>=Ie.CH-1?"BEAST BEATEN! Now free the DRAGON!":"BEAST BEATEN - the GATE opens! Next maze ahead...")):t.k==="cage"?(vt.roar(1),this.toast("THE DRAGON IS FREE!")):t.k==="victory"&&(this.victory=.001,vt.go(),this.toast("VICTORY! YOU FREED THE DRAGON!"))}questNet(t){Object.assign(this.quest.q,{ch:t.ch,ph:t.ph,n:t.n,occ:t.occ||[],hold:t.hold||0})}updateHunt(t){let e=this.hunt,n=this.me.body;if(this.gunCd>0&&(this.gunCd-=t),!this.multi&&this.levelTime>=0&&!this.over)for(let s of $p(e.h,t,[{id:this.localId,x:n.x,y:n.y,z:n.z}],this.an.list,1,e.L,[]))this.huntEvent(s);(this.fireHeld||ke.has("KeyB")||De.fire)&&this.fire(),e.vis.update(t),e.h.ph===Ue.DONE&&Math.random()<t*14&&this.particles.emit(n.x+(Math.random()-.5)*8,n.y+7,n.z+(Math.random()-.5)*8,3,{color:["#ff5fa8","#ffd23f","#4cc9f0","#80ed99"][Math.random()*4|0],speed:2.5,up:-1,life:1.6,size:.4,gravity:3})}huntEvent(t){this.hunt.vis.event(t),t.k==="wave"?(vt.roar(1),this.toast(`CHAPTER ${t.ch+1}: ${t.n} BEASTS! SHOOT THEM ALL!`)):t.k==="gate"?(vt.tame(),this.toast("ALL BEASTS DOWN! THE GATE OPENS - now the MACHINE...")):t.k==="door"?(vt.door(),this.toast("THE GEARS TURN - THE HEAVY DOOR RISES!")):t.k==="lift"?(vt.tame(),this.toast("TOP OF THE CLIFF! Friends: ride up too!")):t.k==="freeze"?this.toast(t.on?"CRUSHERS RETRACTED - RUN! (keep the plate held)":"The crushers are back!"):t.k==="armed"?this.toast(t.on?"CANNON ARMED - jump on the orange pad!":"Cannon off - a friend must stand on a blue plate"):t.k==="pump"?(vt.pickup(),this.hunt.vis.pumpK=Math.max(0,t.v-.2)):t.k==="bridge"?(vt.tame(),this.toast("THE BRIDGE RISES!")):t.k==="note"?(vt.pickup(),this.toast(`\u266A ${t.step}/4`)):t.k==="wrong"?(vt.hit&&vt.hit(),this.toast("WRONG PAD - start again!")):t.k==="solved"?(vt.tame(),this.toast("RIDDLE SOLVED - THE DOOR OPENS!")):t.k==="chapter"?(vt.go(),this.toast(`CHAPTER ${t.ch+1}!`)):t.k==="end"&&(vt.go(),this.toast("VICTORY! YOU BEAT THE JUNGLE HUNT!"))}huntNet(t){Kp(this.hunt.h,t)}huntObjective(){let t=this.hunt.h,e=t.m[t.ch],n=t.n<2;if(t.ph===Ue.DONE)return"YOU WIN! Great teamwork!";if(t.ph===Ue.WAIT)return t.ch===0?"Walk forward along the road. HOLD CLICK (or FIRE) to shoot beasts.":"Keep going down the road.";if(t.ph===Ue.BEAST)return`Shoot ALL the beasts (${t.left} left) - hold CLICK / FIRE. The gate opens when they are gone.`;switch(t.ch){case 0:return`Everybody stand on a glowing plate (${(t.occ||[]).filter(s=>s).length}/${t.n}) and wait 1 second.`;case 1:return n?"Step on the wooden lift and ride up to the cliff top.":"Ride the lift up! If it will not rise, a friend must stand on the blue pan.";case 2:return n?"Wait until a beam lifts, then run through the crushers.":e.wa?"Crushers are stopped - everybody RUN! Last one: stand on the far plate first.":"One friend stands on the yellow plate to stop the crushers. Others run through and hold the far plate.";case 3:return n?"Jump on the orange pad - the cannon throws you over the canyon.":e.wa?"Cannon ready - jump on the orange pad! Then stand on the far blue plate for the last friend.":"A friend stands on a blue plate to fire the cannon. Others jump on the orange pad.";case 4:return e.done?"The bridge is up - cross it!":`Step on the LEFT plate, then the RIGHT plate, again and again to pump (${Math.round(e.v*100)}%). Hop in turns with a friend!`;default:return e.done?"Riddle solved - the door is open!":`Watch the flashing pads, then stand on them in the SAME order (${Math.round(e.v)}/4). Wrong pad = start again.`}}huntHud(){let t=this.hunt.h,e=`Ch ${t.ch+1}/${Fe.CH}`;if(t.ph===Ue.WAIT)return`${e} \u2022 GO ON!`;if(t.ph===Ue.BEAST)return`${e} \u2022 BEASTS LEFT: ${t.left}`;if(t.ph===Ue.MACH){let n=t.m[t.ch];return t.ch===0?`${e} \u2022 PLATES ${(t.occ||[]).filter(s=>s).length}/${t.n}`:t.ch===1?`${e} \u2022 COUNTERWEIGHT LIFT`:t.ch===2?`${e} \u2022 CRUSHERS ${n.wa?"(HELD!)":"- hold a plate"}`:t.ch===3?`${e} \u2022 CANNON ${n.wa?"READY!":"- friend on a blue plate"}`:t.ch===4?`${e} \u2022 PRESSURE ${Math.round(n.v*100)}%`:`${e} \u2022 PADS ${n.done?"SOLVED":Math.round(n.v)+"/4"}`}return"THE END (for now)"}fire(){let t=this.hunt;if(!t||this.over||this.levelTime<0||this.menuOpen||this.drive||this.gunCd>0)return;let e=this.me.body;if(e.stun>0)return;this.gunCd=Wc.rate;let n=this.camYaw+Math.PI,s=A0(this.an.list,e,n),r=s?Math.atan2(s.x-e.x,s.z-e.z):n;e.yaw=r;let o=d=>+d.toFixed(1),a=e.x+Math.sin(r)*.95+Math.cos(r)*.36,c=e.y+1.2,l=e.z+Math.cos(r)*.95-Math.sin(r)*.36,h,u,f;if(s){let d=rn[s.kind];h=s.x,u=s.y+d.seat*.55,f=s.z}else h=a+Math.sin(r)*32,u=c,f=l+Math.cos(r)*32;t.vis.tracer(a,c,l,h,u,f),vt.shot(),this.particles.emit(a,c,l,5,{color:"#ffe27a",speed:3,up:1,life:.2,size:.25}),s&&this.particles.emit(h,u,f,8,{color:"#ff6b3d",speed:4,up:2,life:.3,size:.3}),this.multi?this.sendNet({t:"shoot",id:s?s.id:-1,ox:o(a),oy:o(c),oz:o(l),tx:o(h),ty:o(u),tz:o(f)}):s&&this.an.handle(Zp(s,this.localId))}setShadows(t){this.sun.castShadow=t}spawnPoint(t){return[(t-1.5)*3.6,0,this.info.spawn.z]}spawn(t){let[e,n,s]=this.spawnPoint(t);Nc(this.me.body,e,n+.02,s,Math.PI),this.cpCur=null,this.cpIdx=0}buildProgress(){let t=document.querySelector("#hud-progress .track");t.querySelectorAll(".dot").forEach(n=>n.remove()),this.dots=new Map;let e=(n,s)=>{let r=document.createElement("div");r.className="dot"+(s?" me":""),r.style.background=zi[n.char].color,r.innerHTML=`<em>${n.name.replace(/[<>&]/g,"")}</em>`,t.appendChild(r),this.dots.set(n.id,r)};this.players.forEach(n=>e(n,n.id===this.localId))}now(){return this.multi?_t.net.now():performance.now()}look(t,e){this.camYaw-=t*.0024,this.camPitch=bn(this.camPitch+e*.0021,-.15,1.2),this.lookT=1.6}update(t){let e=this.me.body,n=this.world;this.levelTime=(this.now()-this.t0)/1e3;let s=this.levelTime;if(n.update(s,t),n.carry(e),e.yawOff&&(e.yaw+=e.yawOff,e.yawOff=0),s<0){let _=Math.ceil(-s);_!==this.lastCount&&_<=3&&(this.lastCount=_,this.count(String(_)),vt.tick())}else this.phase==="countdown"&&(this.phase="race",this.count("GO!"),vt.go(),this.lastCount=0,this.multi&&setTimeout(()=>{X===this&&!this.over&&this.toast(Gn?"Tap BAT to bonk rivals!":"Press B or click to swing the BAT!")},1400),this.cars.length&&setTimeout(()=>{X===this&&!this.over&&!this.drive&&this.toast("\u{1F697} Follow the CAR STATION signs to drive!")},this.multi?4200:1600));let r=s>=0&&!this.over,o=0,a=0;(ke.has("KeyW")||ke.has("ArrowUp"))&&o++,(ke.has("KeyS")||ke.has("ArrowDown"))&&o--,(ke.has("KeyD")||ke.has("ArrowRight"))&&a++,(ke.has("KeyA")||ke.has("ArrowLeft"))&&a--,ke.has("KeyQ")&&(this.camYaw+=1.9*t),ke.has("KeyE")&&(this.camYaw-=1.9*t),(De.x||De.y)&&(a+=De.x,o+=De.y);let c=Math.sin(this.camYaw),l=Math.cos(this.camYaw),h=-c*o+l*a,u=-l*o-c*a,f=Math.hypot(h,u);f>1&&(h/=f,u/=f);let d={mx:r?h:0,mz:r?u:0,jumpPressed:r&&Sn.jump,jumpHeld:r&&(ke.has("Space")||De.jump),divePressed:r&&Sn.dive};Sn.jump=!1,Sn.dive=!1,this.drive&&e.stun>0&&(e.stun=Math.max(0,e.stun-t)),e.stun>0?(this.stunReal=(this.stunReal||0)+t,this.stunReal>1.25&&(e.stun=0,e.immune=.6,this.stunReal=0)):this.stunReal=0;let g=Math.max(1,Math.ceil(t/(1/90))),y=t/g,p=!1;n.nearPlayers=[e,...this.remotes.values()];let m=this.updateSwing(t,s,e,d,r);if(this.drive)this.updateDrive(t,r),e.events.length=0;else if(m)e.events.length=0;else for(let _=0;_<g;_++)o0(n,e,y,d),d.jumpPressed=!1,d.divePressed=!1,e.events.length&&(p=this.events(e)||p,e.events.length=0);if(r&&!this.drive){let _=n.checkHazards(e,s);_&&Ur(e,_.nx,_.nz,_.pow)&&(vt.hit(),this.particles.emit(e.x,e.y+.9,e.z,26,{color:"#ffffff",speed:5,up:3,life:.5,size:.3}),this.particles.emit(e.x,e.y+.9,e.z,14,{color:"#ffd23f",speed:7,up:4,life:.4,size:.25}))}this.drive||this.updateBat(t,e),this.updatePowerups(t,e),this.drive||(this.softCollide(e),this.softCars(e,r)),this.checkpoints(e),!this.finished&&s>=0&&e.z<this.info.finishZ&&e.y>this.info.finishY-3&&Math.abs(e.x)<16&&this.onLocalFinish(),e.grounded&&!e.stun&&!this.drive&&!(e.swim>.3)&&(this.stepDist+=Math.hypot(e.vx,e.vz)*t,this.stepDist>2.4&&(this.stepDist=0,Math.hypot(e.vx,e.vz)>3&&(vt.step(),this.particles.emit(e.x,e.y+.05,e.z,2,{color:"#ffffff",speed:.8,up:.8,life:.35,size:.22,gravity:1}))));let E=this.me.model,S=E.group,x=e.swim>.3?bn((e.swim-.3)/.4,0,1):0;if(this.drive?this.seatModel(S,this.drive):(S.position.set(e.x,e.y,e.z),S.rotation.y=e.yaw,S.rotation.x=x*.55*bn(Math.hypot(e.vx,e.vz)/3,.25,1),S.scale.setScalar(1),this.an&&this.an.seatLocal(S)),E.update(t,{speed:this.drive||this.an&&this.an.mount?0:Math.hypot(e.vx,e.vz),grounded:this.drive||x>0?!0:e.grounded&&!this.hang,vy:this.drive?0:e.vy,stun:this.drive?0:e.stun,dive:this.drive?0:e.dive,celebrate:this.finished||this.over&&this.winnerSelf||this.victory>0,swing:this.swingT,shield:e.shield>0,leader:this.leaderId===this.localId,mega:this.swingMega&&this.swingT>0,landed:p}),this.tagScale(this.me.tag,S.position,.85),this.multi){this.leaderId=this.findLeader();for(let _ of this.remotes.values())_.leader=_.id===this.leaderId,_.update(_.snaps.length?_.renderTime():0,t),this.tagScale(_.tag,_.model.group.position,1),_.flags&64&&Math.random()<.6&&this.particles.emit(_.x,_.y+.3,_.z,1,{color:"#5fc2ff",speed:1,up:.5,life:.35,size:.35});this.sendT+=t,this.sendT>=.033&&this.sendSnap()}this.updateCars(t,r),this.an&&this.an.update(t),this.quest&&this.updateQuest(t),this.hunt&&this.updateHunt(t),this.updateCamera(t),this.updateLights(),this.water.material.uniforms.time.value=performance.now()/1e3,this.water.position.x=this.camera.position.x,this.water.position.z=this.camera.position.z,this.sky.position.copy(this.camera.position),this.scenery.update(s,this.camera.position),this.ambient.update(performance.now()/1e3,this.camera.position),this.particles.update(t),this.hud(t)}events(t){let e=!1;for(let n of t.events)if(n==="jump")vt.jump(),this.particles.emit(t.x,t.y+.05,t.z,5,{color:"#ffffff",speed:1.5,up:1,life:.35,size:.25,gravity:2});else if(n==="land")vt.land(t.landSpeed),e=!0,this.particles.emit(t.x,t.y+.05,t.z,Math.min(14,5+t.landSpeed*.4),{color:"#ffffff",speed:2.4,up:1.4,life:.45,size:.3,gravity:3});else if(n==="bounce")vt.bounce(),e=!0,this.particles.emit(t.x,t.y+.1,t.z,18,{rainbow:!0,speed:3,up:2,life:.6,size:.3});else if(n==="dive")vt.dive();else if(n==="splash"){vt.splash();let s=t.swim>0&&t.waterSurf,r=aa[this.meta.key],o=s?"#ffffff":r.water==="lava"?"#ff9a2a":r.water==="grid"?"#d11cff":"#bfeaff";this.particles.emit(t.x,(s?t.waterSurf:this.world.waterY)+.2,t.z,s?34:40,{color:o,speed:4,up:s?6:9,life:.9,size:.45,gravity:16,spread:.6})}else n==="stroke"?(vt.jump(),this.particles.emit(t.x,t.waterSurf+.1,t.z,10,{color:"#ffffff",speed:2,up:3,life:.6,size:.3,gravity:10})):n==="fell"&&this.onFell();return e}seatModel(t,e){let n=e.st,s=e.mesh.userData.seat;t.position.set(n.x+Math.sin(n.yaw)*s.z,n.y+s.y,n.z+Math.cos(n.yaw)*s.z),t.rotation.y=n.yaw,t.rotation.x=0,t.scale.setScalar(.8)}nearestFreeCar(t){if(t.stun>0||t.y>1.5||t.swim>.3)return null;let e=null,n=4.6;for(let s of this.cars){if(s.st.driver!==-1&&s!==this.drive||ci[s.st.id].racer&&!this.racerOk||Math.abs(t.y-s.st.y)>3)continue;let r=Math.hypot(t.x-s.st.x,t.z-s.st.z);r<n&&(n=r,e=s)}return e}toggleCar(){if(this.an){this.an.toggleMount();return}if(this.over||this.finished||this.levelTime<0||this.menuOpen||!this.cars.length)return;let t=this.me.body;if(this.drive){let e=this.drive,n=e.st;if(Math.abs(n.speed)>5){this.toast("Slow down to get out!");return}if(n.y>1.2){this.toast(this.racerOk?"Not up here - stop on the RACER GARAGE plaza to swap cars":"Finish the SKY SPEEDWAY to win a RACER!");return}let s=Math.cos(n.yaw),r=-Math.sin(n.yaw);Nc(t,n.x+s*2.4,.05,n.z+r*2.4,n.yaw),t.hitCd=.3,n.vx=n.vz=n.speed=0,n.driver=-1,n.parked=!0,this.drive=null,document.body.classList.remove("driving"),Xf(),vt.door(),this.g_g(this.me.model.group),this.multi&&_t.net.send({t:"carpark",c:n.id,x:+n.x.toFixed(2),y:+n.y.toFixed(2),z:+n.z.toFixed(2),r:+n.yaw.toFixed(3)}),this.camYaw=n.yaw+Math.PI,this.camInit=!1}else{let e=this.nearestFreeCar(t);if(!e)return;this.drive=e,e.st.driver=this.localId,e.st.parked=!1,t.vx=t.vz=t.vy=0,t.grounded=!0,document.body.classList.add("driving"),document.body.classList.remove("near-car"),document.body.classList.remove("near-swing"),g0(),vt.door(),vt.vroom(),this.camPitch=.3,this.camYaw=e.st.yaw+Math.PI,this.toast(ci[e.st.id].name.toUpperCase()+"!  "+(Gn?"use the joystick to drive, tap the door to get out":"W/S drive \u2022 A/D steer \u2022 C get out"))}}g_g(t){t.scale.setScalar(1),t.rotation.x=0}skyGates(t){let e=this.info.sky;if(!e||t.y<e.y-4||this.skyG>=e.gates.length)return;let n=this.skyG,s=e.gates[n],r=n===1;if(Math.abs(t.x-s.x)<(r?4:s.w)&&Math.abs(t.z-s.z)<(r?s.w:4))if(this.skyG++,vt.checkpoint(),this.particles.emit(t.x,t.y+1.5,t.z,24,{color:n===e.gates.length-1?"#ff3b3b":"#7cff3d",speed:6,up:5,life:.8,size:.4}),n===e.gates.length-1){this.racerOk=!0,this.applyFree();try{localStorage.setItem("ph_racer","1")}catch{}vt.win(),this.toast("\u{1F3C1} SKY SPEEDWAY CLEARED! RED RACERS UNLOCKED & the sky road is now obstacle-free! Stop on the RACER GARAGE plaza and press "+(Gn?"the red car button":"R"))}else this.toast("SKY GATE "+(n+1)+" / "+(e.gates.length-1)+"  \u2713")}applyFree(){this.info.track&&(this.info.track.free=!!this.racerOk),this.world&&this.world.skyObst&&(this.world.skyObst.visible=!this.racerOk)}garageSpot(t){let e=this.info.sky;return!!e&&t.y>e.y-3&&Math.hypot(t.x-e.garage.x,t.z-e.garage.z)<e.garage.r}swapRacer(){if(!this.drive||this.over||this.menuOpen)return;let t=this.drive,e=t.st,n=this.info.sky;if(ci[e.id].racer){this.toast("You already drive a RACER!");return}if(!this.racerOk){this.toast("Finish the SKY SPEEDWAY to unlock the RACERS!");return}if(!this.garageSpot(e)){this.toast("Drive to the RACER GARAGE (end of the sky road) to swap");return}if(Math.abs(e.speed)>5){this.toast("Slow down first!");return}let s=null,r=22;for(let o of this.cars){if(!ci[o.st.id].racer||o.st.driver!==-1&&o!==t)continue;let a=Math.hypot(e.x-o.st.x,e.z-o.st.z);a<r&&(r=a,s=o)}if(!s){this.toast("All 4 racers are taken - wait for one!");return}e.vx=e.vz=e.speed=0,e.driver=-1,e.parked=!0,this.multi&&_t.net.send({t:"carpark",c:e.id,x:+e.x.toFixed(2),y:+e.y.toFixed(2),z:+e.z.toFixed(2),r:+e.yaw.toFixed(3)}),this.drive=s,s.st.driver=this.localId,s.st.parked=!1,s.st.vx=s.st.vz=s.st.speed=0,vt.door(),vt.vroom(),this.shake=.3,this.camYaw=s.st.yaw+Math.PI,this.toast("\u{1F3CE} RACER!  Top speed 150 km/h \u2022 big horn on "+(Gn?"the horn button":"H"))}updateDrive(t,e){let n=this.drive,s=n.st,r=this.me.body,o=0,a=0,c=!1;if(e&&((ke.has("KeyW")||ke.has("ArrowUp"))&&o++,(ke.has("KeyS")||ke.has("ArrowDown"))&&o--,(ke.has("KeyD")||ke.has("ArrowRight"))&&a++,(ke.has("KeyA")||ke.has("ArrowLeft"))&&a--,c=ke.has("Space"),De.x||De.y)){let f=Math.sin(this.camYaw),d=Math.cos(this.camYaw),g=-f*De.y+d*De.x,y=-d*De.y-f*De.x,p=Math.min(1,Math.hypot(g,y));if(p>.12){let m=Math.hypot(g,y)||1;g/=m,y/=m;let E=g*Math.sin(s.yaw)+y*Math.cos(s.yaw),S=-g*Math.cos(s.yaw)+y*Math.sin(s.yaw);E>-.35?(o+=Math.min(1,p*1.25)*(.45+.55*Math.max(0,E)),a+=E<.2?Math.sign(S||1):Math.max(-1,Math.min(1,S*2.4))):(o-=Math.min(1,p*1.25),a+=Math.max(-1,Math.min(1,S*2)))}}let l=this.cars.filter(f=>f!==n).map(f=>f.st),h="",u={gas:bn(o,-1,1),steer:bn(a,-1,1),hb:c};for(let f=0;f<2;f++)h=S0(s,t/2,u,this.info.track,l,Math.max(0,this.levelTime))||h;if(h==="bump"&&(vt.land(18),this.particles.emit(s.x,.8,s.z,12,{color:"#ffd23f",speed:4,up:3,life:.4,size:.25}),this.shake=Math.max(this.shake||0,.25)),h==="crash"&&(vt.land(34),this.particles.emit(s.x,.9,s.z,26,{color:"#ffb347",speed:7,up:5,life:.6,size:.35}),this.shake=Math.max(this.shake||0,Math.min(1,.4+(s.crash||0)*.04)),s.crash=0),r.x=s.x,r.y=s.y,r.z=s.z,r.vx=s.vx,r.vz=s.vz,r.vy=0,r.grounded=!0,r.ground=null,r.yaw=s.yaw,r.stun=0,x0(Math.abs(s.speed)/ci[s.id].max,o>0),this.skyGates(s),this.hornCd-=t,this.skidT-=t,s.drift>.55&&Math.abs(s.speed)>8){this.skidT<=0&&(this.skidT=.25,vt.skid());for(let f of[-1,1])this.particles.emit(s.x-Math.sin(s.yaw)*1.5+Math.cos(s.yaw)*f*.9,.25,s.z-Math.cos(s.yaw)*1.5-Math.sin(s.yaw)*f*.9,1,{color:"#e8e8e8",speed:1.2,up:1.2,life:.5,size:.5,gravity:-.5})}s.boost>0&&Math.random()<.8&&this.particles.emit(s.x-Math.sin(s.yaw)*2.2,.5,s.z-Math.cos(s.yaw)*2.2,1,{color:"#ffb347",speed:2,up:1,life:.35,size:.4})}honk(){if(this.drive&&this.hornCd<=0){let t=ci[this.drive.st.id].racer;this.hornCd=t?.9:.4,t?vt.honkBig():vt.honk(),t&&(this.shake=Math.max(this.shake||0,.12))}}onCars(t){for(let e of Object.keys(t||{})){let n=this.cars[+e],s=t[e];!n||!s||n===this.drive||(n.st.x=+s.x,n.st.z=+s.z,n.st.y=+s.y||0,n.st.yaw=+s.r,n.mesh.position.set(n.st.x,n.st.y,n.st.z),n.mesh.rotation.y=n.st.yaw)}}softCars(t,e){if(!(!e||this.finished))for(let n of this.cars){if(n===this.drive)continue;let s=n.st,r=ci[s.id],o=t.x-s.x,a=t.z-s.z;if(o*o+a*a>40||Math.abs(t.y-s.y)>2.5)continue;let c=Math.sin(s.yaw),l=Math.cos(s.yaw),h=o*c+a*l,u=-o*l+a*c,f=r.hl+.45,d=r.hw+.45;if(Math.abs(h)>=f||Math.abs(u)>=d)continue;if(Math.abs(s.speed)>6&&t.hitCd<=0){let p=Math.sign(s.speed)||1,m=c*p+o*0,E=l*p;m+=-l*Math.sign(u||1)*.5,E+=c*Math.sign(u||1)*.5;let S=Math.hypot(m,E)||1;if(Ur(t,m/S,E/S,15)){this.bonked("HIT BY A CAR!","",t);continue}}let g=f-Math.abs(h),y=d-Math.abs(u);if(g<y){let p=Math.sign(h||1)*g;t.x+=c*p,t.z+=l*p}else{let p=Math.sign(u||1)*y;t.x+=-l*p,t.z+=c*p}}}updateCars(t,e){var a;this.lastDt=t;let n=this.me.body,s=performance.now()/1e3;for(let c of this.cars)c!==this.drive&&(c.st.driver=-1,c.st.speed=0,c.st.vx=c.st.vz=0);let r=[];for(let c of this.remotes.values()){let l=c.model.group;if(l.rotation.order="YXZ",!!c.has)if(c.flags&256){let h=this.cars[c.flags>>9&7];if(h&&h!==this.drive){let u=h.st,f=(c.yaw-((a=u._py)!=null?a:c.yaw)+Math.PI*3)%(Math.PI*2)-Math.PI;u.driver=c.id,u.parked=!1,u.x=c.x,u.z=c.z;{let d=u.y;u.y=c.y||0,u.pitch+=((Math.abs(c.speed)>1?Math.atan2(u.y-d,Math.max(.01,Math.abs(c.speed)*t)):0)-u.pitch)*Math.min(1,t*8)}u.speed=c.speed,u.vx=Math.sin(c.yaw)*c.speed,u.vz=Math.cos(c.yaw)*c.speed,u._py=c.yaw,u.steer+=(bn(-f/Math.max(t,.008)*.45,-1,1)-u.steer)*Math.min(1,t*8),u.yaw=c.yaw,this.seatModel(l,h),this.tagScale(c.tag,l.position,1)}}else l.scale.setScalar(1),l.rotation.x=c.flags&4096?.55:0,c.flags&4096&&r.push([c.x,c.z,.35+Math.min(1,c.speed/8)*.65])}n.swim>.3&&!this.drive&&r.push([n.x,n.z,.35+Math.min(1,Math.hypot(n.vx,n.vz)/8)*.65]),n.swim>.3&&!this.drive&&Math.hypot(n.vx,n.vz)>2&&Math.random()<.5&&this.particles.emit(n.x,n.waterSurf+.08,n.z,1,{color:"#ffffff",speed:1.2,up:1.6,life:.5,size:.28,gravity:6,spread:.5});for(let c of this.poolMeshes){let l=c.wm.material.uniforms;l.time.value=s,c.cm.material.uniforms.time.value=s;for(let h=0;h<4;h++){let u=r[h],f=l.ag.value[h];u?f.set(u[0],u[1],u[2]):f.set(0,0,0)}}{let c=!1;for(let h of this.poolMeshes){let u=h.pl,f=this.camera.position;f.x>u.x0&&f.x<u.x1&&f.z>u.z0&&f.z<u.z1&&f.y<u.surf&&(c=!0)}let l=dt("uw");l&&l.classList.contains("on")!==c&&l.classList.toggle("on",c)}for(let c of this.cars)c.mesh.position.set(c.st.x,c.st.y,c.st.z),c.mesh.rotation.y=c.st.yaw,T0(c.mesh,c.st,t);let o=!this.an&&!this.drive&&e&&!this.menuOpen&&this.nearestFreeCar(n);!this.an&&!!o!==document.body.classList.contains("near-car")&&document.body.classList.toggle("near-car",!!o);{let c=!!this.drive&&this.racerOk&&!ci[this.drive.st.id].racer&&this.garageSpot(this.drive.st)&&Math.abs(this.drive.st.speed)<5;c!==document.body.classList.contains("sky-swap")&&document.body.classList.toggle("sky-swap",c)}if(this.drive){let c=dt("car-speed");if(c){let l=Math.round(Math.abs(this.drive.st.speed)*3.6);c.firstElementChild.textContent!==String(l)&&(c.firstElementChild.textContent=l)}}}onFell(){let t=this.me.body,e=this.cpCur,n=(this.slot-1)*1.6,s,r,o;if(e)s=bn(e.x+n,e.x-e.w/2+1.5,e.x+e.w/2-1.5),r=e.y+.05,o=e.spawn[2];else{let c=this.spawnPoint(this.slot);s=c[0],r=c[1]+.02,o=c[2]}Nc(t,s,r,o,Math.PI),this.rs++,vt.respawn();let a=dt("flash");a.classList.add("on"),setTimeout(()=>a.classList.remove("on"),60),this.particles.emit(s,r+.8,o,30,{rainbow:!0,speed:3,up:3,life:.8,size:.3}),this.camInit=!1,this.camYaw=0}checkpoints(t){let e=this.world.checkpoints;for(;this.cpIdx<e.length&&t.z<e[this.cpIdx].z&&t.y>e[this.cpIdx].y-2.5&&Math.abs(t.x-e[this.cpIdx].x)<e[this.cpIdx].w/2+3;)this.cpCur=e[this.cpIdx],this.cpIdx++,vt.checkpoint(),this.toast("CHECKPOINT!"),this.particles.emit(t.x,t.y+1,t.z,24,{color:"#ffd23f",speed:3,up:5,life:.8,size:.3})}softCollide(t){if(this.finished)return;let e=ve.R*2+.06;for(let n of this.remotes.values()){if(!n.has||n.flags&8||Date.now()-n.rxAt>500)continue;let s=t.x-n.x,r=t.z-n.z,o=t.y-n.y;if(Math.abs(o)>ve.H*.8)continue;let a=Math.hypot(s,r);if(a>=e)continue;let c,l;if(a>.001)c=s/a,l=r/a;else{let p=t.yaw*7+1;c=Math.cos(p),l=Math.sin(p)}let h=e-a;t.x+=c*h*.62,t.z+=l*h*.62;{let p=Math.sin(t.yaw),m=Math.cos(t.yaw);if(Math.hypot(t.vx,t.vz)>1&&-(p*c+m*l)>.3){let S=-l,x=c,_=p*S+m*x;Math.abs(_)<.3&&(_=-m*S+p*x||1),_=Math.sign(_),t.x+=S*_*h*.55,t.z+=x*_*h*.55}}let u=n.vx||0,f=n.vz||0,d=(t.vx-u)*c+(t.vz-f)*l;if(this.multi&&d<-1.5){let p=performance.now();n.shoveAt>p-80||(n.shoveAt=p,_t.net.send({t:"shove",to:n.id,nx:+(-c).toFixed(3),nz:+(-l).toFixed(3),p:+Math.min(12,-d).toFixed(1)}))}let g=performance.now(),y=!(n.lastContact>g-150);if(n.lastContact=g,d<0&&y){let p=-1.7*d*.5;t.vx+=c*p,t.vz+=l*p,p>2.5&&(t.noCtrl=Math.max(t.noCtrl,.16)),n.flags&4&&-d>7&&t.hitCd<=0&&Ur(t,c,l,11)?this.bonked("TACKLED!",n.name||"",t):-d>6&&t.hitCd<=0&&(vt.land(6),this.particles.emit(t.x-c*.4,t.y+.9,t.z-l*.4,8,{color:"#ffffff",speed:3,up:2,life:.3,size:.25}))}}}bonked(t,e,n){vt.bonk(),this.toast(t+(e?"  \u2022 "+e:"")),this.particles.emit(n.x,n.y+1,n.z,22,{color:"#ffffff",speed:6,up:3,life:.5,size:.3}),this.particles.emit(n.x,n.y+1,n.z,14,{color:"#ffd23f",speed:8,up:4,life:.45,size:.28})}updateSwing(t,e,n,s,r){let o=this.world,a=o.swings;if(!a||!a.length)return!1;let c=this.swSt||(this.swSt=du()),l=1e9;for(let p of a)l=Math.min(l,Math.hypot(p.x-n.x,p.y-p.len*.6-n.y,p.z-n.z));let h=(!!c.hang||l<a[0].len+7)&&!this.drive&&!this.over;h!==document.body.classList.contains("near-swing")&&document.body.classList.toggle("near-swing",h),h&&!this.hangHint&&(this.hangHint=!0,this.toast(Gn?"Tap GRAB when the swing is close - tap JUMP to let go!":"Press G to grab the swing - press SPACE to let go!"));let u=!!c.hang,f=ke.has("KeyG")||De.grab,d=s.jumpPressed,g=Sn.grab;Sn.grab=!1;let y=pu(o,n,c,e,t,f&&!this.drive,d,r,g&&!this.drive);if(!!c.hang!=!!this.hangLbl){this.hangLbl=!!c.hang;let p=document.querySelector("#b-grab em");p&&(p.textContent=c.hang?"JUMP TO LET GO":"GRAB")}return!u&&c.hang&&(vt.land(6),this.particles.emit(n.x,n.y+1.6,n.z,10,{color:"#ffffff",speed:3,up:2,life:.4,size:.25})),u&&!c.hang&&(vt.jump&&vt.jump(),s.jumpPressed=!1,Sn.jump=!1),this.hang=c.hang,y&&(s.jumpPressed=!1,Sn.jump=!1,n.stunReal=0,this.stunReal=0),y}sendSnap(){let t=this.me.body;this.sendT=0,this.lastSend=performance.now();let e=(t.grounded?1:0)|(t.stun>0?2:0)|(t.dive>0?4:0)|(this.finished?8:0)|(this.swingT>0?16:0)|(t.shield>0?32:0)|(this.fx.turbo>0?64:0)|(this.swingMega&&this.swingT>0?128:0)|(this.drive?256|this.drive.st.id<<9:0)|(this.an?this.an.flagBits():0)|(t.swim>.4&&!this.drive?4096:0)|(this.hang?1048576:0);_t.net.send({t:"s",x:+t.x.toFixed(2),y:+t.y.toFixed(2),z:+t.z.toFixed(2),r:+t.yaw.toFixed(2),a:e,sp:+Math.min(99,Math.hypot(t.vx,t.vz)).toFixed(1),ts:_t.net.stamp(),rs:this.rs})}swing(){return this.hunt||!(this.multi||this.meta.free)||this.over||this.finished||this.levelTime<0||this.batCd>0||this.an&&this.an.mount||this.me.body.stun>0?!1:(this.swingMega=this.fx.mega>0,this.swingMega&&this.fx.mega--,this.batCd=1.1,this.swingT=.001,this.batPending=!0,vt.swing(),!0)}updateBat(t,e){this.batCd>0&&(this.batCd-=t),this.swingT>0&&(this.swingT+=t/.42,e.stun>0?(this.swingT=0,this.batPending=!1):this.batPending&&this.swingT>=.55&&(this.batPending=!1,this.batHit(e)),this.swingT>=1&&(this.swingT=0))}batHit(t){this.an&&this.an.batHit(t);let e=Math.sin(t.yaw),n=Math.cos(t.yaw);for(let s of this.remotes.values()){if(!s.has||s.flags&8||Date.now()-s.rxAt>800)continue;let r=s.x-t.x,o=s.z-t.z,a=s.y-t.y,c=Math.hypot(r,o);if(c>(this.swingMega?4.4:2.9)||Math.abs(a)>1.7||c<.001||(r*e+o*n)/c<.1)continue;let l=e*.7+r/c*.3,h=n*.7+o/c*.3,u=Math.hypot(l,h)||1;l/=u,h/=u,_t.net.send({t:"bat",to:s.id,nx:+l.toFixed(3),nz:+h.toFixed(3),p:this.swingMega?2:1,ax:+t.x.toFixed(1),az:+t.z.toFixed(1)}),vt.bonk(),this.toast("BONK!  \u2022 "+(s.name||"")),this.particles.emit(s.x,s.y+1,s.z,24,{color:"#ffd23f",speed:7,up:4,life:.5,size:.3}),this.particles.emit(s.x,s.y+1,s.z,14,{color:"#ffffff",speed:5,up:3,life:.4,size:.25})}}sendNet(t){this.multi&&_t.net.send(t)}onAnimalBite(t){let e=this.me.body;if(this.over||this.levelTime<0)return;if(e.shield>0){this.toast("SHIELD BLOCKED!"),vt.pickup();return}let n=t.big?1:0,s=this.an&&this.an.list[t.id]?rn[this.an.list[t.id].kind]:null;e.immune>0||e.stun>.2||(e.hitCd=0,Ur(e,t.nx,t.nz,n?21:15)&&(e.vy=n?10:8,e.stun=n?.9:.7,this.bonked(s?s.sound:"GRRR!","",e),this.shake=Math.max(this.shake||0,.8)))}onShove(t){let e=this.me.body;if(this.over||this.finished||this.levelTime<0||e.shield>0)return;let n=bn(+t.p||0,0,12),s=+t.nx,r=+t.nz;!Number.isFinite(s)||!Number.isFinite(r)||(e.x+=s*n*.05,e.z+=r*n*.05,e.vx+=s*n*.12,e.vz+=r*n*.12)}onBat(t){let e=this.me.body;if(this.over||this.finished||this.levelTime<0)return;let n=(this.players.find(r=>r.id===t.from)||{}).name||"";if(e.immune>0||e.stun>.2||Number.isFinite(t.ax)&&Number.isFinite(t.az)&&Math.hypot(t.ax-e.x,t.az-e.z)>7)return;if(e.hitCd=0,e.shield>0){this.toast("SHIELD BLOCKED!"),vt.pickup();return}let s=t.p===2;Ur(e,t.nx,t.nz,s?22:15)&&(e.vy=s?11:9,e.stun=s?1:.75,this.bonked(s?"MEGA BONK!":"BONKED!",n,e))}buildBoxes(){this.boxes=[];let t=[],e=(s,r,o)=>[-4,0,4].forEach(a=>t.push({x:s+a,y:o+1.35,z:r}));e(0,-10,0);let n=1e9;for(let s of this.world.checkpoints)Math.abs(s.z-n)<12||(n=s.z,e(s.x,s.z-5,s.y));if(!i.boxAssets){let s=document.createElement("canvas");s.width=s.height=128;let r=s.getContext("2d"),o=r.createLinearGradient(0,0,128,128);o.addColorStop(0,"#ffe45e"),o.addColorStop(1,"#ff8a1a"),r.fillStyle=o,r.fillRect(0,0,128,128),r.strokeStyle="#fff",r.lineWidth=8,r.strokeRect(6,6,116,116),r.fillStyle="#fff",r.strokeStyle="#7a3500",r.lineWidth=6,r.font="bold 92px Arial",r.textAlign="center",r.textBaseline="middle",r.strokeText("?",64,70),r.fillText("?",64,70);let a=new Rn(s);a.colorSpace=Be,i.boxAssets={geo:new qt(.95,.95,.95),mat:new Ut({map:a,emissive:"#ff9a00",emissiveIntensity:.55,roughness:.35})}}for(let s of t){let r=new B(i.boxAssets.geo,i.boxAssets.mat);r.position.set(s.x,s.y,s.z),r.castShadow=!0,this.scene.add(r),this.boxes.push({...s,mesh:r,respawn:0})}}findLeader(){if(this.players.length<2||this.levelTime<4)return-1;let t=this.localId,e=this.finished?1e5:-this.me.body.z;for(let n of this.remotes.values()){if(!n.has)continue;let s=n.flags&8?1e5:-n.z;s>e+.5&&(e=s,t=n.id)}return t}pickup(t,e){t.respawn=9,t.mesh.visible=!1,vt.pickup();let n=this.multi?["turbo","turbo","turbo","jump","jump","shield","shield","mega","mega","mega"]:["turbo","jump","shield"],s=e||n[Math.random()*n.length|0],r=this.fx,o=this.me.body;return s==="turbo"?(r.turbo=5,this.toast("\u{1F680} TURBO!")):s==="jump"?(r.jump=7,this.toast("\u{1F998} SUPER JUMP!")):s==="shield"?(r.shield=8,this.toast("\u{1F6E1}\uFE0F SHIELD!")):(r.mega=2,this.toast("\u{1F3CF} MEGA BAT x2!")),this.particles.emit(o.x,o.y+1,o.z,26,{rainbow:!0,speed:4,up:4,life:.7,size:.32}),s}updatePowerups(t,e){let n=performance.now()/1e3,s=this.fx;for(let o of this.boxes){if(o.respawn>0){o.respawn-=t,o.respawn<=0&&(o.mesh.visible=!0);continue}o.mesh.rotation.y+=t*2,o.mesh.rotation.x=Math.sin(n*1.5+o.x)*.25,o.mesh.position.y=o.y+Math.sin(n*2.5+o.x)*.15,!(this.finished||this.over||this.levelTime<0)&&Math.abs(e.x-o.x)<1.3&&Math.abs(e.z-o.z)<1.3&&e.y<o.y+.8&&e.y+ve.H>o.y-.5&&this.pickup(o)}for(let o of["turbo","jump","shield"])s[o]>0&&(s[o]=Math.max(0,s[o]-t));e.speedMul=(s.turbo>0?1.4:1)*(this.an?this.an.speedK():1),e.jumpMul=s.jump>0?1.3:1,e.shield=s.shield,s.turbo>0&&Math.hypot(e.vx,e.vz)>3&&Math.random()<.7&&this.particles.emit(e.x,e.y+.3,e.z,1,{color:"#5fc2ff",speed:1,up:.5,life:.35,size:.35});let r=["turbo","jump","shield"].map(o=>s[o]>0?o+Math.ceil(s[o]):"").join("|")+"|"+s.mega;if(r!==this.fxSig){this.fxSig=r;let o=dt("hud-fx");if(!o)return;o.innerHTML="";let a=(c,l)=>{let h=document.createElement("div");h.className="fx",h.textContent=c+" "+l,o.appendChild(h)};s.turbo>0&&a("\u{1F680}",Math.ceil(s.turbo)+"s"),s.jump>0&&a("\u{1F998}",Math.ceil(s.jump)+"s"),s.shield>0&&a("\u{1F6E1}\uFE0F",Math.ceil(s.shield)+"s"),s.mega>0&&a("\u{1F3CF}","x"+s.mega)}}onLocalFinish(){this.finished=!0,this.finishTime=Math.max(0,this.levelTime),vt.finish();let t=this.info.finishZ;this.particles.emit(0,this.info.finishY+6,t,120,{rainbow:!0,speed:9,up:10,life:1.8,size:.5,gravity:7,spread:10}),this.particles.emit(-9,this.info.finishY+1,t,40,{rainbow:!0,speed:4,up:12,life:1.4,size:.4,gravity:8}),this.particles.emit(9,this.info.finishY+1,t,40,{rainbow:!0,speed:4,up:12,life:1.4,size:.4,gravity:8}),this.multi?this.toast("FINISHED!"):this.endSingle(!1)}endSingle(t){if(this.over)return;this.over=!0,this.winnerSelf=!t;let e=-this.info.finishZ,n=bn(-this.me.body.z/e,0,1),s="";if(!t){let o=this.finishTime,a=L0(this.level);!a||o<a?(localStorage.setItem("ph_best_"+this.level,String(o)),s=a?"NEW BEST TIME!":"First clear!"):s=`Best: ${Xc(a)}`}let r=[{place:1,name:this.me.name,char:this.me.char,win:!t,tm:t?`${Math.round(n*100)}% of the track`:Xc(this.finishTime),self:!0}];setTimeout(()=>_t.showResults({title:t?"TIME'S UP!":"YOU DID IT!",sub:t?"You ran out of time. Try again!":s,rows:r,single:!0,win:!t}),t?300:1400),Bc(!0),t?vt.lose():vt.win()}onFin(t){this.finishedMap.set(t.id,t.place);let e=this.players.find(n=>n.id===t.id);t.id===this.localId?this.toast(`${qf(t.place)} PLACE!`):(this.toast(`${e?e.name:"Player"} finished ${qf(t.place)}!`),vt.checkpoint())}onEnd(t){this.over=!0;let e=t.winnerId===this.localId;this.winnerSelf=e,Bc(!0),e?vt.win():vt.lose();let n=t.results.map(r=>({place:r.place,name:r.name,char:r.char,win:r.id===t.winnerId,self:r.id===this.localId,tm:r.finished?Xc(r.time):`${Math.round(r.progress*100)}% of the track`})),s=t.results[0];setTimeout(()=>_t.showResults({title:e?"YOU WIN!":`${s?s.name:"Nobody"} WINS!`,sub:t.reason==="time"?"Time's up - the nearest player to the finish gate wins!":"First to the finish gate wins!",rows:n,single:!1,win:e}),900)}addRemote(t){this.remotes.has(t.id)||(this.players.push(t),this.remotes.set(t.id,new ca(t,this.scene)),this.buildProgress(),this.toast(t.name+" joined the race!"))}removeRemote(t){let e=this.remotes.get(t);if(e){e.dispose(this.scene),this.remotes.delete(t);let n=this.dots.get(t);n&&n.remove()}}tagScale(t,e,n){let s=e.distanceTo(this.camera.position),r=bn(s*.07,1,5.2)*n;t.scale.set(2.8*r,.7*r,1),t.visible=s<260}updateCamera(t){let e=this.me.body,n=Math.cos(this.camPitch),s=Math.sin(this.camPitch),r=Math.hypot(e.vx,e.vz);this.camera.fov=zs(this.camera.fov,62+bn(r-10,0,12)*.9,Math.min(1,t*4)),this.camera.updateProjectionMatrix();let o=this.camDist;if(this.drive){let u=this.drive.st;this.lookT-=t,o=9.2+Math.min(4,Math.abs(u.speed)*.12),this.lookT<=0&&(this.camYaw=Qf(this.camYaw,u.yaw+Math.PI,1-Math.exp(-3.2*t)),this.camPitch+=(.28-this.camPitch)*(1-Math.exp(-2*t)))}this.an&&this.an.mount&&(o+=this.an.camLift()*1.1);let a=e.x,c=e.y+(this.drive?1.1:1.35)+(this.an?this.an.camLift()*.7:0),l=e.z;this.camInit||(this.camTarget.set(a,c,l),this.camInit=!0);let h=1-Math.exp(-14*t);if(this.camTarget.x+=(a-this.camTarget.x)*h,this.camTarget.z+=(l-this.camTarget.z)*h,this.camTarget.y+=(c-this.camTarget.y)*(1-Math.exp(-7*t)),this.camera.position.set(this.camTarget.x+Math.sin(this.camYaw)*n*o,this.camTarget.y+s*o+.4,this.camTarget.z+Math.cos(this.camYaw)*n*o),this.shake>.01){let u=this.shake*.5;this.camera.position.x+=(Math.random()-.5)*u,this.camera.position.y+=(Math.random()-.5)*u*.7,this.camera.position.z+=(Math.random()-.5)*u,this.shake*=Math.exp(-7*(this.lastDt||.016))}else this.shake=0;this.camera.lookAt(this.camTarget.x,this.camTarget.y+.2,this.camTarget.z)}updateLights(){let t=this.camTarget;this.sun.position.set(t.x+this.sunDir.x,t.y+this.sunDir.y,t.z+this.sunDir.z),this.sun.target.position.copy(t)}count(t){let e=dt("hud-count");e.textContent=t,e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop")}toast(t){let e=dt("hud-toast");e.textContent=t,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}rank(){var s;let t=this.me.body,e=1,n=(s=this.finishedMap.get(this.localId))!=null?s:this.finished&&!this.multi?1:null;if(n)return n;for(let r of this.remotes.values())(this.finishedMap.get(r.id)||r.has&&r.z<t.z-.5)&&e++;return e}hud(t){if(this.hudT+=t,this.hintT>0&&(this.hintT-=t,this.hintT<=0&&dt("hud-hint").classList.add("fade")),this.hudT<.066)return;this.hudT=0;let e=this.levelTime,n=Math.max(0,Math.floor(e)),s=dt("hud-timer");s.textContent=`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`,s.classList.remove("low");{let l=!this.multi&&!this.meta.free;dt("hud-hint").classList.toggle("single",l),document.body.classList.toggle("single",l)}if(this.hunt){let l=dt("hud-obj"),h=this.huntObjective();l.classList.remove("hidden"),dt("hud-obj-t").textContent!==h&&(dt("hud-obj-t").textContent=h)}else dt("hud-obj").classList.add("hidden");dt("hud-rank").textContent=this.meta.arena?`${this.players.length} in the room`:this.quest?this.questHud():this.hunt?this.huntHud():this.an?`\u2665 ${this.an.petCount()} pet${this.an.petCount()===1?"":"s"}`:this.multi?qf(this.rank())+" / "+this.players.length:`${Math.max(0,Math.round(bn(-this.me.body.z/-this.info.finishZ,0,1)*100))}%`;let r=-this.info.finishZ,o=(l,h)=>{let u=this.dots.get(l);u&&(u.style.left=bn(-h/r,0,1)*100+"%")};o(this.localId,this.me.body.z);for(let l of this.remotes.values())o(l.id,l.has?l.z:0);let a=dt("click-hint"),c=!this.over&&!this.menuOpen&&document.pointerLockElement!==ki;c!==a.classList.contains("show")&&a.classList.toggle("show",c);{let l=dt("t-bat");l&&l.classList.toggle("cd",this.batCd>0)}this.multi&&(dt("hud-net").textContent=`ping ${Math.round(_t.net.rtt)} ms`)}questHud(){let t=this.quest.q,e=(t.occ||[]).filter(n=>n).length;return t.ph===Je.MAZE?`Ch ${t.ch+1}/${Ie.CH} \u2022 Circles ${e}/${t.n}`:t.ph===Je.BEAST?`Ch ${t.ch+1}/${Ie.CH} \u2022 BEAT THE BEAST!`:t.ph===Je.DRAGON?`DRAGON \u2022 Circles ${e}/${t.n}`:t.ph===Je.WIN?"VICTORY!":"FREE!"}render(){zn.render(this.scene,this.camera)}destroy(){Wf(),Xf();{let t=dt("uw");t&&t.classList.remove("on")}document.body.classList.remove("sky-swap"),document.body.classList.remove("driving"),document.body.classList.remove("near-car"),document.body.classList.remove("near-swing"),this.hunt&&this.hunt.vis.dispose(),document.body.classList.remove("hunt-map"),this.an&&this.an.dispose(),document.body.classList.remove("free-map"),document.body.classList.remove("riding"),document.body.classList.remove("in-race"),document.body.classList.remove("single"),dt("pause").classList.add("hidden"),this.menuOpen=!1,dt("hud").classList.add("hidden"),dt("hud-count").textContent="",dt("hud-toast").classList.remove("show");{let t=dt("hud-fx");t&&(t.innerHTML="")}for(let t of this.remotes.values())t.dispose(this.scene);this.me.model.dispose(),this.scenery.dispose(),this.scene.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(n=>{n.map&&n.map.dispose(),n.dispose()})}),this.scene.clear()}},eM=["title","profile","levels","mp","lobby","results","help"];function Zn(i){for(let t of eM){let e=dt("s-"+t);e.classList.toggle("active",t===i),e.classList.remove("hidden")}_t.screen=i}var C0=0;function ha(i){let t=dt("toast-global");t.textContent=i,t.classList.add("show"),clearTimeout(C0),C0=setTimeout(()=>t.classList.remove("show"),3200)}function D0(i,t){i.innerHTML="",zi.forEach(e=>{let n=document.createElement("div");n.className="card",n.dataset.id=e.id,n.innerHTML=`<img alt="${e.name}" src="${$f[e.id]||""}"><b style="color:${e.color}">${e.name}</b>${t.small?"":`<span>${e.tag}</span>`}`,n.onclick=()=>t.onPick(e.id),i.appendChild(n)})}function Jf(i,t,e){i.querySelectorAll(".card").forEach(n=>{let s=+n.dataset.id;n.classList.toggle("sel",s===t),n.classList.toggle("taken",e&&e.has(s)&&s!==t)})}function N0(i,t){i.innerHTML="";let e=0;Jo.forEach(n=>{if(n.hidden)return;e++;let s=document.createElement("div");s.className="card",s.dataset.id=n.id,s.style.background=`linear-gradient(160deg, ${n.colors[0]}cc, ${n.colors[1]}cc)`;let r=L0(n.id);s.innerHTML=`<div><h4>${e}. ${n.name}</h4><div class="stars">${"\u2605".repeat(n.stars)}${"\u2606".repeat(5-n.stars)}</div></div><div class="blurb">${n.blurb}</div><div class="meta">${n.sub} &bull; no time limit${r?" &bull; best "+Xc(r):""}</div>`,s.onclick=()=>t.onPick(n.id),i.appendChild(s)})}function nM(){let i=new $o({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});i.setSize(256,320,!1),i.outputColorSpace=Be,i.toneMapping=br,i.setClearColor(0,0);let t=new Ii;t.add(new bs("#ffffff","#b9a4ff",1.6));let e=new Ss("#ffffff",2.6);e.position.set(3,5,6),t.add(e);let n=new Cs(i);t.environment=n.fromScene(new Ko,.04).texture,t.environmentIntensity=.7;let s=new an(30,256/320,.1,50);s.position.set(0,1.25,6.6),s.lookAt(0,.98,0);let r=[];for(let o=0;o<zi.length;o++){let a=new Ds(o);a.group.rotation.y=-.35,t.add(a.group),a.update(.016,{speed:0,grounded:!0,vy:0,stun:0,dive:0,celebrate:!1}),i.render(t,s),r.push(i.domElement.toDataURL("image/png")),t.remove(a.group),a.dispose()}return n.dispose(),i.dispose(),i.forceContextLoss(),r}function la(i){_t.mode=i,dt("inp-name").value=_t.name,dt("profile-title").textContent="Choose your player",D0(dt("char-cards"),{onPick:t=>{_t.char=t,Jf(dt("char-cards"),t),on.sel=t,vt.select(),on.burst(t)}}),Jf(dt("char-cards"),_t.char),on.setTitle(_t.char),on.mode="profile",on.sel=_t.char,Zn("profile")}function iM(){let i=dt("inp-name").value.trim().replace(/[<>&"']/g,"").slice(0,14);return i||(i=["Haris","Speedy","Bouncy","Zippy"][Math.floor(Math.random()*4)]+Math.floor(Math.random()*90+10)),_t.name=i,localStorage.setItem("ph_name",i),localStorage.setItem("ph_char",String(_t.char)),i}function z0(){N0(dt("level-cards"),{onPick:i=>{vt.go(),fa(i)}}),Zn("levels")}function fa(i){Hi(),X&&(X.destroy(),X=null),_t.level=i,X=new qc(i,[{id:1,name:_t.name,char:_t.char}],1,{multi:!1,t0:performance.now()+3600,seed:1+Math.floor(Math.random()*1e9)}),Us(),Zn("none"),dt("s-results").classList.add("hidden"),ua()}_t.showResults=function(i){let t=dt("res-list");t.innerHTML="",i.rows.forEach(s=>{let r=document.createElement("div");r.className="res-row"+(s.win?" win":"");let o=zi[s.char];r.innerHTML=`<div class="place">${s.place<=3?J_[s.place-1]:s.place}</div><div class="nm"><i style="background:${o.color}"></i>${s.name.replace(/[<>&]/g,"")}${s.self?" <small>(you)</small>":""}</div><div class="tm">${s.tm}</div>`,t.appendChild(r)}),dt("res-title").textContent=i.title,dt("res-sub").textContent=i.sub||"";let e=dt("b-res-retry"),n=dt("b-res-next");if(i.single)e.style.display="",e.textContent="RETRY",n.style.display="",n.textContent=_t.level<Jo.length-1?"NEXT LEVEL":"LEVELS",n.disabled=!1,_t.resMode="single";else{e.style.display="none";let s=_t.room&&_t.room.hostId===_t.myId;n.style.display="",n.textContent=s?"BACK TO LOBBY":"WAITING FOR HOST...",n.disabled=!s,_t.resMode="multi"}da(),Zn("results")};dt("b-res-menu").onclick=()=>{vt.back(),tu()};dt("b-res-retry").onclick=()=>{vt.click(),fa(_t.level)};dt("b-res-next").onclick=()=>{vt.click(),_t.resMode==="single"?_t.level<Jo.length-1?fa(_t.level+1):(X&&X.destroy(),X=null,z0()):_t.net.send({t:"again"})};function tu(){X&&(X.destroy(),X=null),_t.net&&_t.room&&_t.net.send({t:"leave"}),_t.room=null,da(),on.setTitle(),Zn("title")}async function sM(){if(_t.net&&_t.net.connected)return _t.net;let i=new Hc;return i.on("joined",t=>{_t.myId=t.id}),i.on("lobby",oM),i.on("err",t=>{dt("mp-status").textContent=t.msg,t.retry&&_t.screen==="mp"?(Zc(),Yc=setTimeout(()=>{_t.screen==="mp"&&!_t.room&&jf("join")},2e3)):ha(t.msg)}),i.on("go",aM),i.on("s",t=>{if(X&&X.multi){let e=X.remotes.get(t.id);e&&e.push(t)}}),i.on("fin",t=>{X&&X.multi&&X.onFin(t)}),i.on("bat",t=>{X&&X.multi&&X.onBat(t)}),i.on("an",t=>{X&&X.an&&X.an.onNet(t)}),i.on("aev",t=>{X&&X.an&&X.an.onEvent(t)}),i.on("h",t=>{X&&X.hunt&&X.huntNet(t)}),i.on("hev",t=>{X&&X.hunt&&X.huntEvent(t)}),i.on("shot",t=>{X&&X.hunt&&[t.ox,t.oy,t.oz,t.tx,t.ty,t.tz].every(Number.isFinite)&&(X.hunt.vis.tracer(t.ox,t.oy,t.oz,t.tx,t.ty,t.tz),vt.shot())}),i.on("q",t=>{X&&X.quest&&X.questNet(t)}),i.on("qev",t=>{X&&X.quest&&X.questEvent(t)}),i.on("abite",t=>{X&&X.an&&X.onAnimalBite(t)}),i.on("carpark",t=>{X&&X.multi&&X.onCars({[t.c]:t})}),i.on("cars",t=>{X&&X.multi?X.onCars(t.cars):_t.pendingCars=t.cars}),i.on("shove",t=>{X&&X.multi&&X.onShove(t)}),i.on("end",t=>{X&&X.multi&&X.onEnd(t)}),i.on("left",t=>{X&&X.multi&&X.removeRemote(t.id)}),i.on("close",()=>{ha("Disconnected from server"),X&&(X.destroy(),X=null),_t.room=null,da(),on.setTitle(),Zn("title")}),await i.connect(),_t.net=i,i}function rM(){dt("mp-status").textContent="",on.setTitle(_t.char),Zn("mp")}var Yc=null;function Zc(){Yc&&(clearTimeout(Yc),Yc=null)}async function jf(i){Hi(),Zc();let t=dt("mp-status");t.textContent="Connecting...";try{let e=await sM();i==="create"?e.send({t:"create",name:_t.name,char:_t.char}):e.send({t:"join",name:_t.name,char:_t.char}),t.textContent=i==="create"?"":"Looking for a room..."}catch{t.textContent="Could not connect to the game server. Is it running?",ha("Could not connect to the game server")}}function oM(i){Zc();let t=!_t.room,e=_t.room;if(_t.room=i,X&&X.multi){for(let n of i.players)n.id!==_t.myId&&!X.remotes.has(n.id)&&(i.phase==="race"||i.phase==="countdown")&&X.addRemote(n);if(i.phase==="lobby"&&_t.screen!=="lobby")X.destroy(),X=null,da(),I0(),Zn("lobby"),Br(99);else if(_t.screen==="results"){let n=i.hostId===_t.myId;_t.resMode==="multi"&&(dt("b-res-next").textContent=n?"BACK TO LOBBY":"WAITING FOR HOST...",dt("b-res-next").disabled=!n)}return}(t||_t.screen==="mp"||_t.screen==="profile"||_t.screen==="title")&&(i.phase==="lobby"||i.phase==="results")&&(Zn("lobby"),Br(99)),e&&i.players.length>e.players.length&&vt.join(),I0()}function I0(){let i=_t.room;if(!i)return;let t=i.players.find(r=>r.id===_t.myId);t&&(_t.char=t.char),dt("lobby-code").textContent=i.code,dt("lobby-count").textContent=`${i.players.length}/${4}`;let e=dt("lobby-players");e.innerHTML="";for(let r=0;r<4;r++){let o=i.players[r],a=document.createElement("div");a.className="slot"+(o?"":" empty"),a.innerHTML=o?`<i style="background:${zi[o.char].color}"></i><span>${o.name.replace(/[<>&]/g,"")}</span>${o.id===i.hostId?"<span>\u{1F451}</span>":""}${o.id===_t.myId?'<span class="you">YOU</span>':""}`:'<i style="background:#888"></i><span>Waiting for player...</span>',e.appendChild(a)}let n=new Set(i.players.filter(r=>r.id!==_t.myId).map(r=>r.char));D0(dt("lobby-chars"),{small:!0,onPick:r=>{n.has(r)||(vt.select(),_t.net.send({t:"char",char:r}))}}),Jf(dt("lobby-chars"),_t.char,n);let s=i.hostId===_t.myId;N0(dt("lobby-levels"),{onPick:r=>{s&&(vt.click(),_t.net.send({t:"level",level:r}))}}),dt("lobby-levels").querySelectorAll(".card").forEach(r=>{r.classList.toggle("sel",+r.dataset.id===i.level),s||(r.style.cursor="default")}),dt("lobby-level-note").textContent=s?"(you choose)":"(host chooses)",dt("b-start").disabled=!s,dt("b-start").firstElementChild.textContent=s?"START RACE":"WAITING FOR HOST",dt("lobby-hint").textContent=s?i.players.length<2?"Tell friends to tap MULTIPLAYER on the same link. You can also start alone.":"Everyone ready? Hit start!":"The host will start the race.",on.setLobby(i.players)}function aM(i){Hi(),X&&(X.destroy(),X=null);let t=_t.room;if(!t)return;let e=i.order.map(n=>t.players.find(s=>s.id===n)).filter(Boolean);_t.level=i.level,X=new qc(i.level,e,_t.myId,{multi:!0,t0:i.t0,seed:i.seed}),Us(),Zn("none"),ua()}function ua(){if(X&&!X.over&&document.pointerLockElement!==ki)try{let i=ki.requestPointerLock();i&&i.catch&&i.catch(()=>{})}catch{}}function da(){document.pointerLockElement&&document.exitPointerLock()}document.addEventListener("pointerlockchange",()=>{let i=document.pointerLockElement===ki;i?Zf=!0:Zf&&X&&!X.over&&!X.menuOpen&&!Gn&&nu(),i||(Zf=!1),dt("click-hint").classList.toggle("show",!!X&&!X.over&&!X.menuOpen&&!i)});var Zf=!1,$c=!1;ki.addEventListener("mousedown",i=>{$c=!0,X&&!X.over&&(i.button===0&&X.hunt&&document.pointerLockElement===ki&&!X.menuOpen?X.fireHeld=!0:i.button===0&&X.multi&&document.pointerLockElement===ki&&!X.menuOpen?X.swing():ua())});window.addEventListener("mouseup",()=>{$c=!1,X&&(X.fireHeld=!1)});window.addEventListener("mousemove",i=>{X&&!X.over&&(document.pointerLockElement===ki||$c)&&X.look(i.movementX,i.movementY)});dt("click-hint").addEventListener("click",ua);window.addEventListener("keydown",i=>{if(i.target&&i.target.tagName==="INPUT"){i.code==="Enter"&&(_t.screen==="profile"?dt("b-profile-next").click():_t.screen==="mp"&&dt("b-join").click());return}X&&!X.over&&["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight"].includes(i.code)&&i.preventDefault(),!i.repeat&&(ke.add(i.code),i.code==="Space"&&(Sn.jump=!0),(i.code==="ShiftLeft"||i.code==="ShiftRight"||i.code==="KeyF")&&(Sn.dive=!0),i.code==="KeyM"&&eu(),i.code==="KeyG"&&(Sn.grab=!0),i.code==="KeyB"&&X&&!X.menuOpen&&(X.hunt?X.fire():X.swing()),i.code==="KeyC"&&X&&!X.over&&!i.repeat&&X.toggleCar(),i.code==="KeyH"&&X&&!X.menuOpen&&X.honk(),i.code==="KeyR"&&X&&!X.over&&!i.repeat&&X.swapRacer(),(i.code==="Escape"||i.code==="KeyP")&&X&&!X.over&&(X.menuOpen?Kc():nu()))});window.addEventListener("keyup",i=>ke.delete(i.code));window.addEventListener("blur",()=>{ke.clear(),$c=!1});window.addEventListener("resize",Us);function eu(){_t.muted=!_t.muted,m0(_t.muted),dt("b-sound").textContent="SOUND: "+(_t.muted?"OFF":"ON"),F0()}function U0(){dt("p-gfx").textContent="\u{1F5A5} GFX: "+(he.low?"LOW":"AUTO")}function F0(){dt("p-sound").textContent="\u{1F50A} SOUND: "+(_t.muted?"OFF":"ON")}function nu(){!X||X.over||X.menuOpen||(X.menuOpen=!0,X.multi||(X.paused=!0,X.pauseAt=performance.now()),da(),ke.clear(),De.x=De.y=0,De.jump=!1,dt("p-title").textContent=X.multi?"Menu":"Paused",dt("p-info").textContent=X.meta.name+(X.multi?"  \u2022  race goes on!":""),U0(),dt("p-retry").classList.toggle("hidden",X.multi),dt("p-full").classList.toggle("hidden",!(document.documentElement&&document.documentElement.requestFullscreen)),F0(),dt("pause").classList.remove("hidden"),dt("click-hint").classList.remove("show"),vt.click())}function Kc(){!X||!X.menuOpen||(X.paused&&(X.t0+=performance.now()-X.pauseAt,X.paused=!1),X.menuOpen=!1,dt("pause").classList.add("hidden"),ua())}dt("b-menu").addEventListener("click",()=>X&&X.menuOpen?Kc():nu());dt("p-resume").onclick=()=>{vt.click(),Kc()};dt("p-sound").onclick=()=>{Hi(),eu(),vt.click()};dt("p-gfx").onclick=()=>{he.low=!he.low;try{localStorage.setItem("ph_low",he.low?"1":"0")}catch{}vt.click(),Q_(),U0()};dt("p-full").onclick=()=>{let i=document,t=i.documentElement;try{!i.fullscreenElement&&t.requestFullscreen?t.requestFullscreen({navigationUI:"hide"}):i.exitFullscreen&&i.fullscreenElement&&i.exitFullscreen()}catch{}};dt("p-retry").onclick=()=>{vt.click();let i=_t.level;dt("pause").classList.add("hidden"),X&&(X.menuOpen=!1),fa(i)};dt("p-quit").onclick=()=>{vt.back(),dt("pause").classList.add("hidden"),tu()};async function lM(){await f0(),on=new Kf;try{$f=nM()}catch{$f=["","","",""]}Us(),on.setTitle(),Zn("title"),dt("b-single").onclick=()=>{Hi(),Br(99),vt.click(),la("single")},dt("b-multi").onclick=()=>{Hi(),Br(99),vt.click(),la("multi")},dt("b-help").onclick=()=>{Hi(),vt.click(),dt("s-help").classList.add("active")},dt("b-help-close").onclick=()=>{vt.back(),dt("s-help").classList.remove("active")},dt("b-sound").onclick=()=>{Hi(),eu(),vt.click()},dt("b-profile-back").onclick=()=>{vt.back(),on.setTitle(),Zn("title")},dt("b-profile-next").onclick=()=>{iM(),vt.click(),_t.mode==="single"?z0():rM()},dt("b-levels-back").onclick=()=>{vt.back(),la("single")},dt("b-mp-back").onclick=()=>{vt.back(),Zc(),la("multi")},dt("b-create").onclick=()=>{vt.click(),jf("create")},dt("b-join").onclick=()=>{vt.click(),jf("join")},dt("b-leave").onclick=()=>{vt.back(),tu()},dt("b-start").onclick=()=>{_t.room&&_t.room.hostId===_t.myId&&(vt.click(),_t.net.send({t:"start"}))},dt("b-copy").onclick=async()=>{let s=`${location.origin}${location.pathname}?room=${_t.room?_t.room.code:""}`;try{await navigator.clipboard.writeText(s),ha("Invite link copied!")}catch{prompt("Copy this invite link:",s)}},new URLSearchParams(location.search).get("room")&&(la("multi"),ha("Pick your name & player, then CONTINUE and JOIN ROOM")),dt("loader").classList.add("done"),setTimeout(()=>dt("loader").remove(),600);let t=performance.now(),e=performance.now();try{let s=new Worker(URL.createObjectURL(new Blob(["setInterval(()=>postMessage(0),50)"],{type:"text/javascript"})));s.onmessage=()=>{if(!X||!X.multi||X.paused)return;let r=performance.now();if(r-e>200){let o=Math.min(.25,(r-e)/1e3);e=r,t=r,X.update(o)}else r-(X.lastSend||0)>100&&X.sendSnap()}}catch{}let n=s=>{requestAnimationFrame(n);let r=Math.min(.1,(s-t)/1e3);t=s,e=performance.now(),j_(r),X?(X.over&&X.menuOpen&&Kc(),X.paused||X.update(r),X.render()):(on.update(r),zn.render(on.scene,on.camera))};requestAnimationFrame(n)}lM().catch(i=>{console.error(i);let t=document.querySelector("#loader p");t&&(t.textContent="Error: "+i.message)});window.__ph={app:_t,Remote:ca,startSingle:i=>fa(i),keys:ke,press:Sn,touch:De,get race(){return X},get stage(){return on}};(function(){Gn&&document.body.classList.add("touch");let t=dt("touch"),e=dt("joy"),n=dt("joy-knob");if(!t||!e||!n)return;let s=56,r=null,o=null,a=0,c=0,l=0,h=0,u=(g,y)=>{for(let p of g)if(p.identifier===y)return p;return null};t.addEventListener("touchstart",g=>{g.preventDefault();for(let y of g.changedTouches)y.clientX<window.innerWidth*.5&&r===null?(r=y.identifier,a=y.clientX,c=y.clientY,e.style.left=a+"px",e.style.top=c+"px",e.classList.add("on"),n.style.transform="translate(-50%, -50%)"):o===null&&y.clientX>=window.innerWidth*.5&&(o=y.identifier,l=y.clientX,h=y.clientY)},{passive:!1}),t.addEventListener("touchmove",g=>{g.preventDefault();let y=r!==null?u(g.touches,r):null;if(y){let m=y.clientX-a,E=y.clientY-c,S=Math.hypot(m,E);S>s&&(m*=s/S,E*=s/S),n.style.transform=`translate(calc(-50% + ${m}px), calc(-50% + ${E}px))`;let x=m/s,_=E/s,M=Math.hypot(x,_),w=M<.14?0:(M-.14)/.86/M;De.x=x*w,De.y=-_*w}let p=o!==null?u(g.touches,o):null;p&&(X&&!X.over&&X.look((p.clientX-l)*1.7,(p.clientY-h)*1.7),l=p.clientX,h=p.clientY)},{passive:!1});let f=g=>{for(let y of g.changedTouches)y.identifier===r&&(r=null,De.x=De.y=0,e.classList.remove("on")),y.identifier===o&&(o=null)};t.addEventListener("touchend",f),t.addEventListener("touchcancel",f);let d=(g,y,p)=>{let m=dt(g);if(!m)return;m.addEventListener("touchstart",S=>{S.preventDefault(),S.stopPropagation(),y()},{passive:!1});let E=S=>{S.preventDefault(),S.stopPropagation(),p&&p()};m.addEventListener("touchend",E,{passive:!1}),m.addEventListener("touchcancel",E,{passive:!1})};d("t-jump",()=>{X&&!X.over&&(Sn.jump=!0,De.jump=!0)},()=>{De.jump=!1}),d("t-dive",()=>{X&&!X.over&&(Sn.dive=!0)}),d("t-fire",()=>{De.fire=!0,X&&!X.over&&!X.menuOpen&&X.fire()},()=>{De.fire=!1}),d("t-bat",()=>{X&&!X.over&&!X.menuOpen&&X.swing()}),d("c-horn",()=>{X&&X.honk()}),d("b-racer",()=>{X&&X.swapRacer()}),d("b-grab",()=>{De.grab=!0,Sn.grab=!0},()=>{De.grab=!1});{let g=dt("b-grab");g&&(g.addEventListener("mousedown",y=>{y.preventDefault(),De.grab=!0,Sn.grab=!0}),window.addEventListener("mouseup",()=>{De.grab=!1}))}d("b-car",()=>{X&&X.toggleCar()}),d("b-exit",()=>{X&&X.toggleCar()});for(let g of["b-car","b-exit","b-racer"]){let y=dt(g);y&&y.addEventListener("click",()=>{X&&(g==="b-racer"?X.swapRacer():X.toggleCar()),y.blur()})}})();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

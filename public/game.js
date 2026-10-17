(()=>{var pf=0,ch=1,mf=2;var po=1,ol=2,ar=3,Xi=0,Qe=1,ln=2,hi=0,Yi=1,Ei=2,hh=3,uh=4,gf=5;var fs=100,xf=101,yf=102,_f=103,vf=104,Mf=200,Sf=201,bf=202,Ef=203,fh=204,dh=205,wf=206,Tf=207,Af=208,Rf=209,Cf=210,If=211,Pf=212,Lf=213,Df=214,wa=0,Ta=1,Aa=2,Vs=3,Ra=4,Ca=5,Ia=6,Pa=7,al=0,Nf=1,Uf=2,Jn=0,ph=1,mh=2,gh=3,lr=4,xh=5,yh=6,_h=7;var vh=300,qi=301,ds=302,ll=303,cl=304,mo=306,Ws=1e3,ri=1001,La=1002,rn=1003,zf=1004;var go=1005;var an=1006,hl=1007;var Zi=1008;var En=1009,Mh=1010,Sh=1011,cr=1012,ul=1013,Kn=1014,Un=1015,jn=1016,fl=1017,dl=1018,hr=1020,bh=35902,Eh=35899,wh=1021,Th=1022,zn=1023,ai=1026,$i=1027,pl=1028,ml=1029,Ji=1030,gl=1031;var xl=1033,xo=33776,yo=33777,_o=33778,vo=33779,yl=35840,_l=35841,vl=35842,Ml=35843,Sl=36196,bl=37492,El=37496,wl=37488,Tl=37489,Mo=37490,Al=37491,Rl=37808,Cl=37809,Il=37810,Pl=37811,Ll=37812,Dl=37813,Nl=37814,Ul=37815,zl=37816,Fl=37817,Ol=37818,Bl=37819,kl=37820,Hl=37821,Gl=36492,Vl=36494,Wl=36495,Xl=36283,Yl=36284,So=36285,ql=36286;var Fr=2300,Da=2301,ba=2302,Jc=2303,Kc=2400,jc=2401,Qc=2402;var Ff=3200;var bo=0,Of=1,wi="",Pe="srgb",Or="srgb-linear",Br="linear",be="srgb";var Ea=7680;var Bf=519,kf=512,Hf=513,Gf=514,Zl=515,Vf=516,Wf=517,$l=518,Xf=519,Ah=35044,ur=35048;var Rh="300 es",Zn=2e3,Xs=2001;function kp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Hp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yf(){let i=kr("canvas");return i.style.display="block",i}var Du={},Ys=null;function Hr(...i){let t="THREE."+i.shift();Ys?Ys("log",t,...i):console.log(t,...i)}function qf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function $t(...i){i=qf(i);let t="THREE."+i.shift();if(Ys)Ys("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Jt(...i){i=qf(i);let t="THREE."+i.shift();if(Ys)Ys("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function as(...i){let t=i.join(" ");t in Du||(Du[t]=!0,$t(...i))}function Zf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var $f={[wa]:Ta,[Aa]:Ia,[Ra]:Pa,[Vs]:Ca,[Ta]:wa,[Ia]:Aa,[Pa]:Ra,[Ca]:Vs},li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nu=1234567,Dr=Math.PI/180,qs=180/Math.PI;function oi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]+"-"+hn[t&255]+hn[t>>8&255]+"-"+hn[t>>16&15|64]+hn[t>>24&255]+"-"+hn[e&63|128]+hn[e>>8&255]+"-"+hn[e>>16&255]+hn[e>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function fe(i,t,e){return Math.max(t,Math.min(e,i))}function Ch(i,t){return(i%t+t)%t}function Gp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Vp(i,t,e){return i!==t?(e-i)/(t-i):0}function Nr(i,t,e){return(1-e)*i+e*t}function Wp(i,t,e,n){return Nr(i,t,1-Math.exp(-e*n))}function Xp(i,t=1){return t-Math.abs(Ch(i,t*2)-t)}function Yp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function qp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Zp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function $p(i,t){return i+Math.random()*(t-i)}function Jp(i){return i*(.5-Math.random())}function Kp(i){i!==void 0&&(Nu=i);let t=Nu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function jp(i){return i*Dr}function Qp(i){return i*qs}function tm(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function em(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function nm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function im(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*d,a*h,a*c);break;default:$t("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function qn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Eo={DEG2RAD:Dr,RAD2DEG:qs,generateUUID:oi,clamp:fe,euclideanModulo:Ch,mapLinear:Gp,inverseLerp:Vp,lerp:Nr,damp:Wp,pingpong:Xp,smoothstep:Yp,smootherstep:qp,randInt:Zp,randFloat:$p,randFloatSpread:Jp,seededRandom:Kp,degToRad:jp,radToDeg:Qp,isPowerOfTwo:tm,ceilPowerOfTwo:em,floorPowerOfTwo:nm,setQuaternionFromProperEuler:im,normalize:Te,denormalize:qn},Uh=class Uh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Uh.prototype.isVector2=!0;var xt=Uh,Rn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],m=r[o+2],_=r[o+3];if(u!==_||l!==f||c!==d||h!==m){let p=l*f+c*d+h*m+u*_;p<0&&(f=-f,d=-d,m=-m,_=-_,p=-p);let g=1-a;if(p<.9995){let E=Math.acos(p),R=Math.sin(E);g=Math.sin(g*E)/R,a=Math.sin(a*E)/R,l=l*g+f*a,c=c*g+d*a,h=h*g+m*a,u=u*g+_*a}else{l=l*g+f*a,c=c*g+d*a,h=h*g+m*a,u=u*g+_*a;let E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+h*u+l*d-c*f,t[e+1]=l*m+h*f+c*u-a*d,t[e+2]=c*m+h*d+a*f-l*u,t[e+3]=h*m-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:$t("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},zh=class zh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return wc.copy(this).projectOnVector(t),this.sub(wc)}reflect(t){return this.sub(wc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zh.prototype.isVector3=!0;var z=zh,wc=new z,Uu=new Rn,Fh=class Fh{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],_=s[0],p=s[3],g=s[6],E=s[1],R=s[4],x=s[7],M=s[2],v=s[5],w=s[8];return r[0]=o*_+a*E+l*M,r[3]=o*p+a*R+l*v,r[6]=o*g+a*x+l*w,r[1]=c*_+h*E+u*M,r[4]=c*p+h*R+u*v,r[7]=c*g+h*x+u*w,r[2]=f*_+d*E+m*M,r[5]=f*p+d*R+m*v,r[8]=f*g+d*x+m*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,m=e*u+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return as("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Tc.makeScale(t,e)),this}rotate(t){return as("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Tc.makeRotation(-t)),this}translate(t,e){return as("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Tc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Fh.prototype.isMatrix3=!0;var se=Fh,Tc=new se,zu=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fu=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sm(){let i={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===be&&(s.r=Mi(s.r),s.g=Mi(s.g),s.b=Mi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===be&&(s.r=Gs(s.r),s.g=Gs(s.g),s.b=Gs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===wi?Br:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return as("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return as("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Or]:{primaries:t,whitePoint:n,transfer:Br,toXYZ:zu,fromXYZ:Fu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:t,whitePoint:n,transfer:be,toXYZ:zu,fromXYZ:Fu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}}),i}var pe=sm();function Mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Es,Na=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Es===void 0&&(Es=kr("canvas")),Es.width=t.width,Es.height=t.height;let s=Es.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Es}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=kr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Mi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mi(e[n]/255)*255):e[n]=Mi(e[n]);return{data:e,width:t.width,height:t.height}}else return $t("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},rm=0,Zs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=oi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ac(s[o].image)):r.push(Ac(s[o]))}else r=Ac(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ac(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Na.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:($t("Texture: Unable to serialize Texture."),{})}var om=0,Rc=new z,_n=class i extends li{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ri,s=ri,r=an,o=Zi,a=zn,l=En,c=i.DEFAULT_ANISOTROPY,h=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=oi(),this.name="",this.source=new Zs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Rc).x}get height(){return this.source.getSize(Rc).y}get depth(){return this.source.getSize(Rc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){$t(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){$t(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ws:t.x=t.x-Math.floor(t.x);break;case ri:t.x=t.x<0?0:1;break;case La:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ws:t.y=t.y-Math.floor(t.y);break;case ri:t.y=t.y<0?0:1;break;case La:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=vh;_n.DEFAULT_ANISOTROPY=1;var Oh=class Oh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(c+1)/2,x=(d+1)/2,M=(g+1)/2,v=(h+f)/4,w=(u+_)/4,y=(m+p)/4;return R>x&&R>M?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=v/n,r=w/n):x>M?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=v/s,r=y/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=w/r,s=y/r),this.set(n,s,r,e),this}let E=Math.sqrt((p-m)*(p-m)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(p-m)/E,this.y=(u-_)/E,this.z=(f-h)/E,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this.w=fe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this.w=fe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Oh.prototype.isVector4=!0;var Ue=Oh,Ua=class extends li{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new _n(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Zs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},bn=class extends Ua{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Gr=class extends _n{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var za=class extends _n{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var rl=class rl{constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,m,_,p)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,m,_,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ws.setFromMatrixColumn(t,0).length(),r=1/ws.setFromMatrixColumn(t,1).length(),o=1/ws.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,m=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+m*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,m=c*h,_=c*u;e[0]=f+_*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-m,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,m=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,m=a*h,_=a*u;e[0]=l*h,e[4]=m*c-d,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=m*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+m,e[10]=f-_*u}else if(t.order==="XZY"){let f=o*l,d=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(am,t,lm)}lookAt(t,e,n){let s=this.elements;return Tn.subVectors(t,e),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Di.crossVectors(n,Tn),Di.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Di.crossVectors(n,Tn)),Di.normalize(),Jo.crossVectors(Tn,Di),s[0]=Di.x,s[4]=Jo.x,s[8]=Tn.x,s[1]=Di.y,s[5]=Jo.y,s[9]=Tn.y,s[2]=Di.z,s[6]=Jo.z,s[10]=Tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],_=n[6],p=n[10],g=n[14],E=n[3],R=n[7],x=n[11],M=n[15],v=s[0],w=s[4],y=s[8],b=s[12],C=s[1],P=s[5],D=s[9],N=s[13],A=s[2],I=s[6],U=s[10],O=s[14],tt=s[3],G=s[7],K=s[11],J=s[15];return r[0]=o*v+a*C+l*A+c*tt,r[4]=o*w+a*P+l*I+c*G,r[8]=o*y+a*D+l*U+c*K,r[12]=o*b+a*N+l*O+c*J,r[1]=h*v+u*C+f*A+d*tt,r[5]=h*w+u*P+f*I+d*G,r[9]=h*y+u*D+f*U+d*K,r[13]=h*b+u*N+f*O+d*J,r[2]=m*v+_*C+p*A+g*tt,r[6]=m*w+_*P+p*I+g*G,r[10]=m*y+_*D+p*U+g*K,r[14]=m*b+_*N+p*O+g*J,r[3]=E*v+R*C+x*A+M*tt,r[7]=E*w+R*P+x*I+M*G,r[11]=E*y+R*D+x*U+M*K,r[15]=E*b+R*N+x*O+M*J,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],_=t[7],p=t[11],g=t[15],E=l*d-c*f,R=a*d-c*u,x=a*f-l*u,M=o*d-c*h,v=o*f-l*h,w=o*u-a*h;return e*(_*E-p*R+g*x)-n*(m*E-p*M+g*v)+s*(m*R-_*M+g*w)-r*(m*x-_*v+p*w)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],_=t[13],p=t[14],g=t[15],E=e*a-n*o,R=e*l-s*o,x=e*c-r*o,M=n*l-s*a,v=n*c-r*a,w=s*c-r*l,y=h*_-u*m,b=h*p-f*m,C=h*g-d*m,P=u*p-f*_,D=u*g-d*_,N=f*g-d*p,A=E*N-R*D+x*P+M*C-v*b+w*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/A;return t[0]=(a*N-l*D+c*P)*I,t[1]=(s*D-n*N-r*P)*I,t[2]=(_*w-p*v+g*M)*I,t[3]=(f*v-u*w-d*M)*I,t[4]=(l*C-o*N-c*b)*I,t[5]=(e*N-s*C+r*b)*I,t[6]=(p*x-m*w-g*R)*I,t[7]=(h*w-f*x+d*R)*I,t[8]=(o*D-a*C+c*y)*I,t[9]=(n*C-e*D-r*y)*I,t[10]=(m*v-_*x+g*E)*I,t[11]=(u*x-h*v-d*E)*I,t[12]=(a*b-o*P-l*y)*I,t[13]=(e*P-n*b+s*y)*I,t[14]=(_*R-m*M-p*E)*I,t[15]=(h*M-u*R+f*E)*I,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,m=r*u,_=o*h,p=o*u,g=a*u,E=l*c,R=l*h,x=l*u,M=n.x,v=n.y,w=n.z;return s[0]=(1-(_+g))*M,s[1]=(d+x)*M,s[2]=(m-R)*M,s[3]=0,s[4]=(d-x)*v,s[5]=(1-(f+g))*v,s[6]=(p+E)*v,s[7]=0,s[8]=(m+R)*w,s[9]=(p-E)*w,s[10]=(1-(f+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=ws.set(s[0],s[1],s[2]).length(),a=ws.set(s[4],s[5],s[6]).length(),l=ws.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Vn.copy(this);let c=1/o,h=1/a,u=1/l;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=h,Vn.elements[5]*=h,Vn.elements[6]*=h,Vn.elements[8]*=u,Vn.elements[9]*=u,Vn.elements[10]*=u,e.setFromRotationMatrix(Vn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Zn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),m,_;if(l)m=r/(o-r),_=o*r/(o-r);else if(a===Zn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Xs)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Zn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),m,_;if(l)m=1/(o-r),_=o/(o-r);else if(a===Zn)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===Xs)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};rl.prototype.isMatrix4=!0;var ve=rl,ws=new z,Vn=new ve,am=new z(0,0,0),lm=new z(1,1,1),Di=new z,Jo=new z,Tn=new z,Ou=new ve,Bu=new Rn,Cn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(fe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:$t("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ou.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ou,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bu.setFromEuler(this),this.setFromQuaternion(Bu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Cn.DEFAULT_ORDER="XYZ";var Vr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},cm=0,ku=new z,Ts=new Rn,mi=new ve,Ko=new z,br=new z,hm=new z,um=new Rn,Hu=new z(1,0,0),Gu=new z(0,1,0),Vu=new z(0,0,1),Wu={type:"added"},fm={type:"removed"},As={type:"childadded",child:null},Cc={type:"childremoved",child:null},$e=class i extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new z,e=new Cn,n=new Rn,s=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new se}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.premultiply(Ts),this}rotateX(t){return this.rotateOnAxis(Hu,t)}rotateY(t){return this.rotateOnAxis(Gu,t)}rotateZ(t){return this.rotateOnAxis(Vu,t)}translateOnAxis(t,e){return ku.copy(t).applyQuaternion(this.quaternion),this.position.add(ku.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hu,t)}translateY(t){return this.translateOnAxis(Gu,t)}translateZ(t){return this.translateOnAxis(Vu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ko.copy(t):Ko.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(br,Ko,this.up):mi.lookAt(Ko,br,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),Ts.setFromRotationMatrix(mi),this.quaternion.premultiply(Ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wu),As.child=t,this.dispatchEvent(As),As.child=null):Jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(fm),Cc.child=t,this.dispatchEvent(Cc),Cc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wu),As.child=t,this.dispatchEvent(As),As.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,t,hm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,um,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};$e.DEFAULT_UP=new z(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wt=class extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}},dm={type:"move"},$s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Wt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Jf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},jo={h:0,s:0,l:0};function Ic(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ut=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=pe.workingColorSpace){if(t=Ch(t,1),e=fe(e,0,1),n=fe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ic(o,r,t+1/3),this.g=Ic(o,r,t),this.b=Ic(o,r,t-1/3)}return pe.colorSpaceToWorking(this,s),this}setStyle(t,e=Pe){function n(r){r!==void 0&&parseFloat(r)<1&&$t("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:$t("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);$t("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){let n=Jf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):$t("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}copyLinearToSRGB(t){return this.r=Gs(t.r),this.g=Gs(t.g),this.b=Gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return pe.workingToColorSpace(un.copy(this),t),Math.round(fe(un.r*255,0,255))*65536+Math.round(fe(un.g*255,0,255))*256+Math.round(fe(un.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.workingToColorSpace(un.copy(this),e);let n=un.r,s=un.g,r=un.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.workingToColorSpace(un.copy(this),e),t.r=un.r,t.g=un.g,t.b=un.b,t}getStyle(t=Pe){pe.workingToColorSpace(un.copy(this),t);let e=un.r,n=un.g,s=un.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ni),this.setHSL(Ni.h+t,Ni.s+e,Ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ni),t.getHSL(jo);let n=Nr(Ni.h,jo.h,e),s=Nr(Ni.s,jo.s,e),r=Nr(Ni.l,jo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},un=new Ut;Ut.NAMES=Jf;var Js=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Si=class extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Wn=new z,gi=new z,Pc=new z,xi=new z,Rs=new z,Cs=new z,Xu=new z,Lc=new z,Dc=new z,Nc=new z,Uc=new Ue,zc=new Ue,Fc=new Ue,vi=class i{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Wn.subVectors(t,e),s.cross(Wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Wn.subVectors(s,e),gi.subVectors(n,e),Pc.subVectors(t,e);let o=Wn.dot(Wn),a=Wn.dot(gi),l=Wn.dot(Pc),c=gi.dot(gi),h=gi.dot(Pc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xi.x),l.addScaledVector(o,xi.y),l.addScaledVector(a,xi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Uc.setScalar(0),zc.setScalar(0),Fc.setScalar(0),Uc.fromBufferAttribute(t,e),zc.fromBufferAttribute(t,n),Fc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Uc,r.x),o.addScaledVector(zc,r.y),o.addScaledVector(Fc,r.z),o}static isFrontFacing(t,e,n,s){return Wn.subVectors(n,e),gi.subVectors(t,e),Wn.cross(gi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Wn.cross(gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Rs.subVectors(s,n),Cs.subVectors(r,n),Lc.subVectors(t,n);let l=Rs.dot(Lc),c=Cs.dot(Lc);if(l<=0&&c<=0)return e.copy(n);Dc.subVectors(t,s);let h=Rs.dot(Dc),u=Cs.dot(Dc);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Rs,o);Nc.subVectors(t,r);let d=Rs.dot(Nc),m=Cs.dot(Nc);if(m>=0&&d<=m)return e.copy(r);let _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Cs,a);let p=h*m-d*u;if(p<=0&&u-h>=0&&d-m>=0)return Xu.subVectors(r,s),a=(u-h)/(u-h+(d-m)),e.copy(s).addScaledVector(Xu,a);let g=1/(p+_+f);return o=_*g,a=f*g,e.copy(n).addScaledVector(Rs,o).addScaledVector(Cs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ci=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Xn):Xn.fromBufferAttribute(r,o),Xn.applyMatrix4(t.matrixWorld),this.expandByPoint(Xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qo.copy(n.boundingBox)),Qo.applyMatrix4(t.matrixWorld),this.union(Qo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xn),Xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Er),ta.subVectors(this.max,Er),Is.subVectors(t.a,Er),Ps.subVectors(t.b,Er),Ls.subVectors(t.c,Er),Ui.subVectors(Ps,Is),zi.subVectors(Ls,Ps),ns.subVectors(Is,Ls);let e=[0,-Ui.z,Ui.y,0,-zi.z,zi.y,0,-ns.z,ns.y,Ui.z,0,-Ui.x,zi.z,0,-zi.x,ns.z,0,-ns.x,-Ui.y,Ui.x,0,-zi.y,zi.x,0,-ns.y,ns.x,0];return!Oc(e,Is,Ps,Ls,ta)||(e=[1,0,0,0,1,0,0,0,1],!Oc(e,Is,Ps,Ls,ta))?!1:(ea.crossVectors(Ui,zi),e=[ea.x,ea.y,ea.z],Oc(e,Is,Ps,Ls,ta))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},yi=[new z,new z,new z,new z,new z,new z,new z,new z],Xn=new z,Qo=new ci,Is=new z,Ps=new z,Ls=new z,Ui=new z,zi=new z,ns=new z,Er=new z,ta=new z,ea=new z,is=new z;function Oc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){is.fromArray(i,r);let a=s.x*Math.abs(is.x)+s.y*Math.abs(is.y)+s.z*Math.abs(is.z),l=t.dot(is),c=e.dot(is),h=n.dot(is);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ze=new z,na=new xt,pm=0,Ne=class extends li{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ah,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)na.fromBufferAttribute(this,e),na.applyMatrix3(t),this.setXY(e,na.x,na.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix3(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=qn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array),r=Te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Wr=class extends Ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Xr=class extends Ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var _e=class extends Ne{constructor(t,e,n){super(new Float32Array(t),e,n)}},mm=new ci,wr=new z,Bc=new z,bi=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):mm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wr.subVectors(t,this.center);let e=wr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(wr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Bc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wr.copy(t.center).add(Bc)),this.expandByPoint(wr.copy(t.center).sub(Bc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},gm=0,Nn=new ve,kc=new $e,Ds=new z,An=new ci,Tr=new ci,sn=new z,Oe=class i extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kp(t)?Xr:Wr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new se().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Nn.makeRotationFromQuaternion(t),this.applyMatrix4(Nn),this}rotateX(t){return Nn.makeRotationX(t),this.applyMatrix4(Nn),this}rotateY(t){return Nn.makeRotationY(t),this.applyMatrix4(Nn),this}rotateZ(t){return Nn.makeRotationZ(t),this.applyMatrix4(Nn),this}translate(t,e,n){return Nn.makeTranslation(t,e,n),this.applyMatrix4(Nn),this}scale(t,e,n){return Nn.makeScale(t,e,n),this.applyMatrix4(Nn),this}lookAt(t){return kc.lookAt(t),kc.updateMatrix(),this.applyMatrix4(kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _e(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&$t("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];An.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let n=this.boundingSphere.center;if(An.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Tr.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(An.min,Tr.min),An.expandByPoint(sn),sn.addVectors(An.max,Tr.max),An.expandByPoint(sn)):(An.expandByPoint(Tr.min),An.expandByPoint(Tr.max))}An.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)sn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(sn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)sn.fromBufferAttribute(a,c),l&&(Ds.fromBufferAttribute(t,c),sn.add(Ds)),s=Math.max(s,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ne(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new z,l[y]=new z;let c=new z,h=new z,u=new z,f=new xt,d=new xt,m=new xt,_=new z,p=new z;function g(y,b,C){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,C),f.fromBufferAttribute(r,y),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,C),h.sub(c),u.sub(c),d.sub(f),m.sub(f);let P=1/(d.x*m.y-m.x*d.y);isFinite(P)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(P),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(P),a[y].add(_),a[b].add(_),a[C].add(_),l[y].add(p),l[b].add(p),l[C].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let y=0,b=E.length;y<b;++y){let C=E[y],P=C.start,D=C.count;for(let N=P,A=P+D;N<A;N+=3)g(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let R=new z,x=new z,M=new z,v=new z;function w(y){M.fromBufferAttribute(s,y),v.copy(M);let b=a[y];R.copy(b),R.sub(M.multiplyScalar(M.dot(b))).normalize(),x.crossVectors(v,b);let P=x.dot(l[y])<0?-1:1;o.setXYZW(y,R.x,R.y,R.z,P)}for(let y=0,b=E.length;y<b;++y){let C=E[y],P=C.start,D=C.count;for(let N=P,A=P+D;N<A;N+=3)w(t.getX(N+0)),w(t.getX(N+1)),w(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,h=new z,u=new z;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)sn.fromBufferAttribute(t,e),sn.normalize(),t.setXYZ(e,sn.x,sn.y,sn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,m=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let g=0;g<h;g++)f[m++]=c[d++]}return new Ne(f,h,u)}if(this.index===null)return $t("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ah,this.updateRanges=[],this.version=0,this.uuid=oi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},yn=new z,Ks=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyMatrix4(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyNormalMatrix(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.transformDirection(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=qn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=qn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=qn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=qn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=qn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array),r=Te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Hr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ne(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Hr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Hc=new z,xm=new z,ym=new se,Yn=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Hc.subVectors(n,e).cross(xm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Hc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ym.getNormalMatrix(t),s=this.coplanarPoint(Hc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},_m=0,$n=class extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=oi(),this.name="",this.type="Material",this.blending=Yi,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fh,this.blendDst=dh,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ea,this.stencilZFail=Ea,this.stencilZPass=Ea,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){$t(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){$t(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ut().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Yn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new xt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},js=class extends $n{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ns,Ar=new z,Us=new z,zs=new z,Fs=new xt,Rr=new xt,Kf=new ve,ia=new z,Cr=new z,sa=new z,Yu=new xt,Gc=new xt,qu=new xt,qr=class extends $e{constructor(t=new js){if(super(),this.isSprite=!0,this.type="Sprite",Ns===void 0){Ns=new Oe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Yr(e,5);Ns.setIndex([0,1,2,0,2,3]),Ns.setAttribute("position",new Ks(n,3,0,!1)),Ns.setAttribute("uv",new Ks(n,2,3,!1))}this.geometry=Ns,this.material=t,this.center=new xt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Jt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Us.setFromMatrixScale(this.matrixWorld),Kf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),zs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Us.multiplyScalar(-zs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;ra(ia.set(-.5,-.5,0),zs,o,Us,s,r),ra(Cr.set(.5,-.5,0),zs,o,Us,s,r),ra(sa.set(.5,.5,0),zs,o,Us,s,r),Yu.set(0,0),Gc.set(1,0),qu.set(1,1);let a=t.ray.intersectTriangle(ia,Cr,sa,!1,Ar);if(a===null&&(ra(Cr.set(-.5,.5,0),zs,o,Us,s,r),Gc.set(0,1),a=t.ray.intersectTriangle(ia,sa,Cr,!1,Ar),a===null))return;let l=t.ray.origin.distanceTo(Ar);l<t.near||l>t.far||e.push({distance:l,point:Ar.clone(),uv:vi.getInterpolation(Ar,ia,Cr,sa,Yu,Gc,qu,new xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ra(i,t,e,n,s,r){Fs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Rr.x=r*Fs.x-s*Fs.y,Rr.y=s*Fs.x+r*Fs.y):Rr.copy(Fs),i.copy(t),i.x+=Rr.x,i.y+=Rr.y,i.applyMatrix4(Kf)}var _i=new z,Vc=new z,oa=new z,aa=new z,Zr=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_i)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=_i.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_i.copy(this.origin).addScaledVector(this.direction,e),_i.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Vc.copy(t).add(e).multiplyScalar(.5),oa.copy(e).sub(t).normalize(),aa.copy(this.origin).sub(Vc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(oa),a=aa.dot(this.direction),l=-aa.dot(oa),c=aa.lengthSq(),h=Math.abs(1-o*o),u,f,d,m;if(h>0)if(u=o*l-a,f=o*a-l,m=r*h,u>=0)if(f>=-m)if(f<=m){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Vc).addScaledVector(oa,f),d}intersectSphere(t,e){if(t.radius<0)return null;_i.subVectors(t.center,this.origin);let n=_i.dot(this.direction),s=_i.dot(_i)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,_i)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,d=t.z-o.z,m=e.x-o.x,_=e.y-o.y,p=e.z-o.z,g=n.x-o.x,E=n.y-o.y,R=n.z-o.z,x=Math.abs(l),M=Math.abs(c),v=Math.abs(h),w,y,b,C,P,D,N,A,I,U,O,tt;if(x>=M&&x>=v?(b=l,D=u,I=m,tt=g,l>=0?(w=c,y=h,C=f,P=d,N=_,A=p,U=E,O=R):(w=h,y=c,C=d,P=f,N=p,A=_,U=R,O=E)):M>=v?(b=c,D=f,I=_,tt=E,c>=0?(w=h,y=l,C=d,P=u,N=p,A=m,U=R,O=g):(w=l,y=h,C=u,P=d,N=m,A=p,U=g,O=R)):(b=h,D=d,I=p,tt=R,h>=0?(w=l,y=c,C=u,P=f,N=m,A=_,U=g,O=E):(w=c,y=l,C=f,P=u,N=_,A=m,U=E,O=g)),b===0)return null;let G=w/b,K=y/b,J=1/b,vt=C-G*D,yt=P-K*D,ee=N-G*I,Qt=A-K*I,j=U-G*tt,B=O-K*tt,W=j*Qt-B*ee,lt=vt*B-yt*j,At=ee*yt-Qt*vt;if(s){if(W<0||lt<0||At<0)return null}else if((W<0||lt<0||At<0)&&(W>0||lt>0||At>0))return null;let Z=W+lt+At;if(Z===0)return null;let pt=J*(W*D+lt*I+At*tt);return(Z>0?pt<0:pt>0)?null:this.at(pt/Z,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ae=class extends $n{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Zu=new ve,ss=new Zr,la=new bi,$u=new z,ca=new z,ha=new z,ua=new z,Wc=new z,fa=new z,Ju=new z,da=new z,st=class extends $e{constructor(t=new Oe,e=new Ae){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){fa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Wc.fromBufferAttribute(u,t),o?fa.addScaledVector(Wc,h):fa.addScaledVector(Wc.sub(e),h))}e.add(fa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(r),ss.copy(t.ray).recast(t.near),!(la.containsPoint(ss.origin)===!1&&(ss.intersectSphere(la,$u)===null||ss.origin.distanceToSquared($u)>(t.far-t.near)**2))&&(Zu.copy(r).invert(),ss.copy(t.ray).applyMatrix4(Zu),!(n.boundingBox!==null&&ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ss)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let p=f[m],g=o[p.materialIndex],E=Math.max(p.start,d.start),R=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let x=E,M=R;x<M;x+=3){let v=a.getX(x),w=a.getX(x+1),y=a.getX(x+2);s=pa(this,g,t,n,c,h,u,v,w,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=m,g=_;p<g;p+=3){let E=a.getX(p),R=a.getX(p+1),x=a.getX(p+2);s=pa(this,o,t,n,c,h,u,E,R,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let p=f[m],g=o[p.materialIndex],E=Math.max(p.start,d.start),R=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let x=E,M=R;x<M;x+=3){let v=x,w=x+1,y=x+2;s=pa(this,g,t,n,c,h,u,v,w,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=m,g=_;p<g;p+=3){let E=p,R=p+1,x=p+2;s=pa(this,o,t,n,c,h,u,E,R,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function vm(i,t,e,n,s,r,o,a){let l;if(t.side===Qe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Xi,a),l===null)return null;da.copy(a),da.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(da);return c<e.near||c>e.far?null:{distance:c,point:da.clone(),object:i}}function pa(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ca),i.getVertexPosition(l,ha),i.getVertexPosition(c,ua);let h=vm(i,t,e,n,ca,ha,ua,Ju);if(h){let u=new z;vi.getBarycoord(Ju,ca,ha,ua,u),s&&(h.uv=vi.getInterpolatedAttribute(s,a,l,c,u,new xt)),r&&(h.uv1=vi.getInterpolatedAttribute(r,a,l,c,u,new xt)),o&&(h.normal=vi.getInterpolatedAttribute(o,a,l,c,u,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new z,materialIndex:0};vi.getNormal(ca,ha,ua,f.normal),h.face=f,h.barycoord=u}return h}var $r=class extends _n{constructor(t=null,e=1,n=1,s,r,o,a,l,c=rn,h=rn,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qs=class extends Ne{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Os=new ve,Ku=new ve,ma=[],ju=new ci,Mm=new ve,Ir=new st,Pr=new bi,Jr=class extends st{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Qs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Mm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ci),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Os),ju.copy(t.boundingBox).applyMatrix4(Os),this.boundingBox.union(ju)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new bi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Os),Pr.copy(t.boundingSphere).applyMatrix4(Os),this.boundingSphere.union(Pr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ir.geometry=this.geometry,Ir.material=this.material,Ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pr.copy(this.boundingSphere),Pr.applyMatrix4(n),t.ray.intersectsSphere(Pr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Os),Ku.multiplyMatrices(n,Os),Ir.matrixWorld=Ku,Ir.raycast(t,ma);for(let o=0,a=ma.length;o<a;o++){let l=ma[o];l.instanceId=r,l.object=this,e.push(l)}ma.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Qs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new $r(new Float32Array(s*this.count),s,this.count,pl,Un));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},rs=new bi,Sm=new xt(.5,.5),ga=new z,tr=class{constructor(t=new Yn,e=new Yn,n=new Yn,s=new Yn,r=new Yn,o=new Yn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Zn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],m=r[8],_=r[9],p=r[10],g=r[11],E=r[12],R=r[13],x=r[14],M=r[15];if(s[0].setComponents(c-o,d-h,g-m,M-E).normalize(),s[1].setComponents(c+o,d+h,g+m,M+E).normalize(),s[2].setComponents(c+a,d+u,g+_,M+R).normalize(),s[3].setComponents(c-a,d-u,g-_,M-R).normalize(),n)s[4].setComponents(l,f,p,x).normalize(),s[5].setComponents(c-l,d-f,g-p,M-x).normalize();else if(s[4].setComponents(c-l,d-f,g-p,M-x).normalize(),e===Zn)s[5].setComponents(c+l,d+f,g+p,M+x).normalize();else if(e===Xs)s[5].setComponents(l,f,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(t){rs.center.set(0,0,0);let e=Sm.distanceTo(t.center);return rs.radius=.7071067811865476+e,rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ga.x=s.normal.x>0?t.max.x:t.min.x,ga.y=s.normal.y>0?t.max.y:t.min.y,ga.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ga)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var er=class extends $n{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Qu=new ve,th=new Zr,xa=new bi,ya=new z,nr=class extends $e{constructor(t=new Oe,e=new er){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(s),xa.radius+=r,t.ray.intersectsSphere(xa)===!1)return;Qu.copy(s).invert(),th.copy(t.ray).applyMatrix4(Qu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,_=d;m<_;m++){let p=c.getX(m);ya.fromBufferAttribute(u,p),tf(ya,p,l,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,_=d;m<_;m++)ya.fromBufferAttribute(u,m),tf(ya,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function tf(i,t,e,n,s,r,o){let a=th.distanceSqToPoint(i);if(a<e){let l=new z;th.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Kr=class extends _n{constructor(t=[],e=qi,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},vn=class extends _n{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Oi=class extends _n{constructor(t,e,n=Kn,s,r,o,a=rn,l=rn,c,h=ai,u=1){if(h!==ai&&h!==$i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Zs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Fa=class extends Oi{constructor(t,e=Kn,n=qi,s,r,o=rn,a=rn,l,c=ai){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},jr=class extends _n{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ee=class i extends Oe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(u,2));function m(_,p,g,E,R,x,M,v,w,y,b){let C=x/w,P=M/y,D=x/2,N=M/2,A=v/2,I=w+1,U=y+1,O=0,tt=0,G=new z;for(let K=0;K<U;K++){let J=K*P-N;for(let vt=0;vt<I;vt++){let yt=vt*C-D;G[_]=yt*E,G[p]=J*R,G[g]=A,c.push(G.x,G.y,G.z),G[_]=0,G[p]=0,G[g]=v>0?1:-1,h.push(G.x,G.y,G.z),u.push(vt/w),u.push(1-K/y),O+=1}}for(let K=0;K<y;K++)for(let J=0;J<w;J++){let vt=f+J+I*K,yt=f+J+I*(K+1),ee=f+(J+1)+I*(K+1),Qt=f+(J+1)+I*K;l.push(vt,yt,Qt),l.push(yt,ee,Qt),tt+=6}a.addGroup(d,tt,b),d+=tt,f+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Bi=class i extends Oe{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,f=e,d=2*u+f,m=n*2+r,_=s+1,p=new z,g=new z;for(let E=0;E<=m;E++){let R=0,x=0,M=0,v=0;if(E<=n){let b=E/n,C=b*Math.PI/2;x=-h-t*Math.cos(C),M=t*Math.sin(C),v=-t*Math.cos(C),R=b*u}else if(E<=n+r){let b=(E-n)/r;x=-h+b*e,M=t,v=0,R=u+b*f}else{let b=(E-n-r)/n,C=b*Math.PI/2;x=h+t*Math.sin(C),M=t*Math.cos(C),v=t*Math.sin(C),R=u+f+b*u}let w=Math.max(0,Math.min(1,R/d)),y=0;E===0?y=.5/s:E===m&&(y=-.5/s);for(let b=0;b<=s;b++){let C=b/s,P=C*Math.PI*2,D=Math.sin(P),N=Math.cos(P);g.x=-M*N,g.y=x,g.z=M*D,a.push(g.x,g.y,g.z),p.set(-M*N,v,M*D),p.normalize(),l.push(p.x,p.y,p.z),c.push(C+y,w)}if(E>0){let b=(E-1)*_;for(let C=0;C<s;C++){let P=b+C,D=b+C+1,N=E*_+C,A=E*_+C+1;o.push(P,D,N),o.push(D,A,N)}}}this.setIndex(o),this.setAttribute("position",new _e(a,3)),this.setAttribute("normal",new _e(l,3)),this.setAttribute("uv",new _e(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},ls=class i extends Oe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new z,h=new xt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new _e(o,3)),this.setAttribute("normal",new _e(a,3)),this.setAttribute("uv",new _e(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Lt=class i extends Oe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],m=0,_=[],p=n/2,g=0;E(),o===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new _e(u,3)),this.setAttribute("normal",new _e(f,3)),this.setAttribute("uv",new _e(d,2));function E(){let x=new z,M=new z,v=0,w=(e-t)/n;for(let y=0;y<=r;y++){let b=[],C=y/r,P=C*(e-t)+t;for(let D=0;D<=s;D++){let N=D/s,A=N*l+a,I=Math.sin(A),U=Math.cos(A);M.x=P*I,M.y=-C*n+p,M.z=P*U,u.push(M.x,M.y,M.z),x.set(I,w,U).normalize(),f.push(x.x,x.y,x.z),d.push(N,1-C),b.push(m++)}_.push(b)}for(let y=0;y<s;y++)for(let b=0;b<r;b++){let C=_[b][y],P=_[b+1][y],D=_[b+1][y+1],N=_[b][y+1];(t>0||b!==0)&&(h.push(C,P,N),v+=3),(e>0||b!==r-1)&&(h.push(P,D,N),v+=3)}c.addGroup(g,v,0),g+=v}function R(x){let M=m,v=new xt,w=new z,y=0,b=x===!0?t:e,C=x===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,p*C,0),f.push(0,C,0),d.push(.5,.5),m++;let P=m;for(let D=0;D<=s;D++){let A=D/s*l+a,I=Math.cos(A),U=Math.sin(A);w.x=b*U,w.y=p*C,w.z=b*I,u.push(w.x,w.y,w.z),f.push(0,C,0),v.x=I*.5+.5,v.y=U*.5*C+.5,d.push(v.x,v.y),m++}for(let D=0;D<s;D++){let N=M+D,A=P+D;x===!0?h.push(A,A+1,N):h.push(A+1,A,N),y+=3}c.addGroup(g,y,x===!0?1:2),g+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Be=class i extends Lt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var In=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$t("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new xt:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new z,s=[],r=[],o=[],a=new z,l=new ve;for(let d=0;d<=t;d++){let m=d/t;s[d]=this.getTangentAt(m,new z)}r[0]=new z,o[0]=new z;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(fe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(fe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ir=class extends In{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new xt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Oa=class extends ir{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ih(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var ef=new z,nf=new z,Xc=new Ih,Yc=new Ih,qc=new Ih,Ba=class extends In{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new z){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(nf.subVectors(s[0],s[1]).add(s[0]),c=nf);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ef.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ef),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),m<1e-4&&(m=_),p<1e-4&&(p=_),Xc.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,_,p),Yc.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,_,p),qc.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,_,p)}else this.curveType==="catmullrom"&&(Xc.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Yc.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),qc.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Xc.calc(l),Yc.calc(l),qc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function sf(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function bm(i,t){let e=1-i;return e*e*t}function Em(i,t){return 2*(1-i)*i*t}function wm(i,t){return i*i*t}function Ur(i,t,e,n){return bm(i,t)+Em(i,e)+wm(i,n)}function Tm(i,t){let e=1-i;return e*e*e*t}function Am(i,t){let e=1-i;return 3*e*e*i*t}function Rm(i,t){return 3*(1-i)*i*i*t}function Cm(i,t){return i*i*i*t}function zr(i,t,e,n,s){return Tm(i,t)+Am(i,e)+Rm(i,n)+Cm(i,s)}var Qr=class extends In{constructor(t=new xt,e=new xt,n=new xt,s=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new xt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(zr(t,s.x,r.x,o.x,a.x),zr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ka=class extends In{constructor(t=new z,e=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new z){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(zr(t,s.x,r.x,o.x,a.x),zr(t,s.y,r.y,o.y,a.y),zr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},to=class extends In{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ha=class extends In{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},eo=class extends In{constructor(t=new xt,e=new xt,n=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new xt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ur(t,s.x,r.x,o.x),Ur(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ga=class extends In{constructor(t=new z,e=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new z){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ur(t,s.x,r.x,o.x),Ur(t,s.y,r.y,o.y),Ur(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},no=class extends In{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(sf(a,l.x,c.x,h.x,u.x),sf(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new xt().fromArray(s))}return this}},eh=Object.freeze({__proto__:null,ArcCurve:Oa,CatmullRomCurve3:Ba,CubicBezierCurve:Qr,CubicBezierCurve3:ka,EllipseCurve:ir,LineCurve:to,LineCurve3:Ha,QuadraticBezierCurve:eo,QuadraticBezierCurve3:Ga,SplineCurve:no}),Va=class extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new eh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new eh[s.type]().fromJSON(s))}return this}},io=class extends Va{constructor(t){super(),this.type="Path",this.currentPoint=new xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new to(this.currentPoint.clone(),new xt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new eo(this.currentPoint.clone(),new xt(t,e),new xt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Qr(this.currentPoint.clone(),new xt(t,e),new xt(n,s),new xt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new no(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new ir(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ki=class extends io{constructor(t){super(t),this.uuid=oi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new io().fromJSON(s))}return this}};function Im(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=jf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Um(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let f=e;f<s;f+=e){let d=i[f],m=i[f+1];d<a&&(a=d),m<l&&(l=m),d>h&&(h=d),m>u&&(u=m)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return so(r,o,e,a,l,c,0),o}function jf(i,t,e,n,s){let r;if(s===Ym(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=rf(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=rf(o/n|0,i[o],i[o+1],r);return r&&sr(r,r.next)&&(oo(r),r=r.next),r}function cs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(sr(e,e.next)||He(e.prev,e,e.next)===0)){if(oo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function so(i,t,e,n,s,r,o){if(!i)return;!o&&r&&km(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Lm(i,n,s,r):Pm(i)){t.push(l.i,i.i,c.i),oo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Dm(cs(i),t),so(i,t,e,n,s,r,2)):o===2&&Nm(i,t,e,n,s,r):so(cs(i),t,e,n,s,r,1);break}}}function Pm(i){let t=i.prev,e=i,n=i.next;if(He(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&Lr(s,a,r,l,o,c,m.x,m.y)&&He(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Lm(i,t,e,n){let s=i.prev,r=i,o=i.next;if(He(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),m=Math.min(h,u,f),_=Math.max(a,l,c),p=Math.max(h,u,f),g=nh(d,m,t,e,n),E=nh(_,p,t,e,n),R=i.prevZ,x=i.nextZ;for(;R&&R.z>=g&&x&&x.z<=E;){if(R.x>=d&&R.x<=_&&R.y>=m&&R.y<=p&&R!==s&&R!==o&&Lr(a,h,l,u,c,f,R.x,R.y)&&He(R.prev,R,R.next)>=0||(R=R.prevZ,x.x>=d&&x.x<=_&&x.y>=m&&x.y<=p&&x!==s&&x!==o&&Lr(a,h,l,u,c,f,x.x,x.y)&&He(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;R&&R.z>=g;){if(R.x>=d&&R.x<=_&&R.y>=m&&R.y<=p&&R!==s&&R!==o&&Lr(a,h,l,u,c,f,R.x,R.y)&&He(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;x&&x.z<=E;){if(x.x>=d&&x.x<=_&&x.y>=m&&x.y<=p&&x!==s&&x!==o&&Lr(a,h,l,u,c,f,x.x,x.y)&&He(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Dm(i,t){let e=i;do{let n=e.prev,s=e.next.next;!sr(n,s)&&td(n,e,e.next,s)&&ro(n,s)&&ro(s,n)&&(t.push(n.i,e.i,s.i),oo(e),oo(e.next),e=i=s),e=e.next}while(e!==i);return cs(e)}function Nm(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Vm(o,a)){let l=ed(o,a);o=cs(o,o.next),l=cs(l,l.next),so(o,t,e,n,s,r,0),so(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Um(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=jf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Gm(c))}s.sort(zm);for(let r=0;r<s.length;r++)e=Fm(s[r],e);return e}function zm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Fm(i,t){let e=Om(i,t);if(!e)return t;let n=ed(e,i);return cs(n,n.next),cs(e,e.next)}function Om(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(sr(i,e))return e;do{if(sr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Qf(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);ro(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Bm(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Bm(i,t){return He(i.prev,i,t.prev)<0&&He(t.next,i,i.next)<0}function km(i,t,e,n){let s=i;do s.z===0&&(s.z=nh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Hm(s)}function Hm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function nh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Gm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Qf(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Lr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Qf(i,t,e,n,s,r,o,a)}function Vm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Wm(i,t)&&(ro(i,t)&&ro(t,i)&&Xm(i,t)&&(He(i.prev,i,t.prev)||He(i,t.prev,t))||sr(i,t)&&He(i.prev,i,i.next)>0&&He(t.prev,t,t.next)>0)}function He(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function sr(i,t){return i.x===t.x&&i.y===t.y}function td(i,t,e,n){let s=va(He(i,t,e)),r=va(He(i,t,n)),o=va(He(e,n,i)),a=va(He(e,n,t));return!!(s!==r&&o!==a||s===0&&_a(i,e,t)||r===0&&_a(i,n,t)||o===0&&_a(e,i,n)||a===0&&_a(e,t,n))}function _a(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function va(i){return i>0?1:i<0?-1:0}function Wm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&td(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ro(i,t){return He(i.prev,i,i.next)<0?He(i,t,i.next)>=0&&He(i,i.prev,t)>=0:He(i,t,i.prev)<0||He(i,i.next,t)<0}function Xm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ed(i,t){let e=ih(i.i,i.x,i.y),n=ih(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function rf(i,t,e,n){let s=ih(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function oo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ih(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ym(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var sh=class{static triangulate(t,e,n=2){return Im(t,e,n)}},os=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];of(t),af(n,t);let o=t.length;e.forEach(of);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,af(n,e[l]);let a=sh.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function of(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function af(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Hi=class i extends Oe{constructor(t=new ki([new xt(.5,.5),new xt(-.5,.5),new xt(-.5,-.5),new xt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new _e(s,3)),this.setAttribute("uv",new _e(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:qm,R,x=!1,M,v,w,y;if(g){R=g.getSpacedPoints(h),x=!0,f=!1;let q=g.isCatmullRomCurve3?g.closed:!1;M=g.computeFrenetFrames(h,q),v=new z,w=new z,y=new z}f||(p=0,d=0,m=0,_=0);let b=a.extractPoints(c),C=b.shape,P=b.holes;if(!os.isClockWise(C)){C=C.reverse();for(let q=0,ot=P.length;q<ot;q++){let ct=P[q];os.isClockWise(ct)&&(P[q]=ct.reverse())}}function N(q){let ct=10000000000000001e-36,ft=q[0];for(let mt=1;mt<=q.length;mt++){let Yt=mt%q.length,Ht=q[Yt],qt=Ht.x-ft.x,te=Ht.y-ft.y,F=qt*qt+te*te,me=Math.max(Math.abs(Ht.x),Math.abs(Ht.y),Math.abs(ft.x),Math.abs(ft.y)),le=ct*me*me;if(F<=le){q.splice(Yt,1),mt--;continue}ft=Ht}}N(C),P.forEach(N);let A=P.length,I=C;for(let q=0;q<A;q++){let ot=P[q];C=C.concat(ot)}function U(q,ot,ct){return ot||Jt("ExtrudeGeometry: vec does not exist"),q.clone().addScaledVector(ot,ct)}let O=C.length;function tt(q,ot,ct){let ft,mt,Yt,Ht=q.x-ot.x,qt=q.y-ot.y,te=ct.x-q.x,F=ct.y-q.y,me=Ht*Ht+qt*qt,le=Ht*F-qt*te;if(Math.abs(le)>Number.EPSILON){let L=Math.sqrt(me),S=Math.sqrt(te*te+F*F),V=ot.x-qt/L,$=ot.y+Ht/L,nt=ct.x-F/S,gt=ct.y+te/S,_t=((nt-V)*F-(gt-$)*te)/(Ht*F-qt*te);ft=V+Ht*_t-q.x,mt=$+qt*_t-q.y;let it=ft*ft+mt*mt;if(it<=2)return new xt(ft,mt);Yt=Math.sqrt(it/2)}else{let L=!1;Ht>Number.EPSILON?te>Number.EPSILON&&(L=!0):Ht<-Number.EPSILON?te<-Number.EPSILON&&(L=!0):Math.sign(qt)===Math.sign(F)&&(L=!0),L?(ft=-qt,mt=Ht,Yt=Math.sqrt(me)):(ft=Ht,mt=qt,Yt=Math.sqrt(me/2))}return new xt(ft/Yt,mt/Yt)}let G=[];for(let q=0,ot=I.length,ct=ot-1,ft=q+1;q<ot;q++,ct++,ft++)ct===ot&&(ct=0),ft===ot&&(ft=0),G[q]=tt(I[q],I[ct],I[ft]);let K=[],J,vt=G.concat();for(let q=0,ot=A;q<ot;q++){let ct=P[q];J=[];for(let ft=0,mt=ct.length,Yt=mt-1,Ht=ft+1;ft<mt;ft++,Yt++,Ht++)Yt===mt&&(Yt=0),Ht===mt&&(Ht=0),J[ft]=tt(ct[ft],ct[Yt],ct[Ht]);K.push(J),vt=vt.concat(J)}let yt;if(p===0)yt=os.triangulateShape(I,P);else{let q=[],ot=[];for(let ct=0;ct<p;ct++){let ft=ct/p,mt=d*Math.cos(ft*Math.PI/2),Yt=m*Math.sin(ft*Math.PI/2)+_;for(let Ht=0,qt=I.length;Ht<qt;Ht++){let te=U(I[Ht],G[Ht],Yt);lt(te.x,te.y,-mt),ft===0&&q.push(te)}for(let Ht=0,qt=A;Ht<qt;Ht++){let te=P[Ht];J=K[Ht];let F=[];for(let me=0,le=te.length;me<le;me++){let L=U(te[me],J[me],Yt);lt(L.x,L.y,-mt),ft===0&&F.push(L)}ft===0&&ot.push(F)}}yt=os.triangulateShape(q,ot)}let ee=yt.length,Qt=m+_;for(let q=0;q<O;q++){let ot=f?U(C[q],vt[q],Qt):C[q];x?(w.copy(M.normals[0]).multiplyScalar(ot.x),v.copy(M.binormals[0]).multiplyScalar(ot.y),y.copy(R[0]).add(w).add(v),lt(y.x,y.y,y.z)):lt(ot.x,ot.y,0)}for(let q=1;q<=h;q++)for(let ot=0;ot<O;ot++){let ct=f?U(C[ot],vt[ot],Qt):C[ot];x?(w.copy(M.normals[q]).multiplyScalar(ct.x),v.copy(M.binormals[q]).multiplyScalar(ct.y),y.copy(R[q]).add(w).add(v),lt(y.x,y.y,y.z)):lt(ct.x,ct.y,u/h*q)}for(let q=p-1;q>=0;q--){let ot=q/p,ct=d*Math.cos(ot*Math.PI/2),ft=m*Math.sin(ot*Math.PI/2)+_;for(let mt=0,Yt=I.length;mt<Yt;mt++){let Ht=U(I[mt],G[mt],ft);lt(Ht.x,Ht.y,u+ct)}for(let mt=0,Yt=P.length;mt<Yt;mt++){let Ht=P[mt];J=K[mt];for(let qt=0,te=Ht.length;qt<te;qt++){let F=U(Ht[qt],J[qt],ft);x?lt(F.x,F.y+R[h-1].y,R[h-1].x+ct):lt(F.x,F.y,u+ct)}}}j(),B();function j(){let q=s.length/3;if(f){let ot=0,ct=O*ot;for(let ft=0;ft<ee;ft++){let mt=yt[ft];At(mt[2]+ct,mt[1]+ct,mt[0]+ct)}ot=h+p*2,ct=O*ot;for(let ft=0;ft<ee;ft++){let mt=yt[ft];At(mt[0]+ct,mt[1]+ct,mt[2]+ct)}}else{for(let ot=0;ot<ee;ot++){let ct=yt[ot];At(ct[2],ct[1],ct[0])}for(let ot=0;ot<ee;ot++){let ct=yt[ot];At(ct[0]+O*h,ct[1]+O*h,ct[2]+O*h)}}n.addGroup(q,s.length/3-q,0)}function B(){let q=s.length/3,ot=0;W(I,ot),ot+=I.length;for(let ct=0,ft=P.length;ct<ft;ct++){let mt=P[ct];W(mt,ot),ot+=mt.length}n.addGroup(q,s.length/3-q,1)}function W(q,ot){let ct=q.length;for(;--ct>=0;){let ft=ct,mt=ct-1;mt<0&&(mt=q.length-1);for(let Yt=0,Ht=h+p*2;Yt<Ht;Yt++){let qt=O*Yt,te=O*(Yt+1),F=ot+ft+qt,me=ot+mt+qt,le=ot+mt+te,L=ot+ft+te;Z(F,me,le,L)}}}function lt(q,ot,ct){l.push(q),l.push(ot),l.push(ct)}function At(q,ot,ct){pt(q),pt(ot),pt(ct);let ft=s.length/3,mt=E.generateTopUV(n,s,ft-3,ft-2,ft-1);Ot(mt[0]),Ot(mt[1]),Ot(mt[2])}function Z(q,ot,ct,ft){pt(q),pt(ot),pt(ft),pt(ot),pt(ct),pt(ft);let mt=s.length/3,Yt=E.generateSideWallUV(n,s,mt-6,mt-3,mt-2,mt-1);Ot(Yt[0]),Ot(Yt[1]),Ot(Yt[3]),Ot(Yt[1]),Ot(Yt[2]),Ot(Yt[3])}function pt(q){s.push(l[q*3+0]),s.push(l[q*3+1]),s.push(l[q*3+2])}function Ot(q){r.push(q.x),r.push(q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Zm(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new eh[s.type]().fromJSON(s)),new i(n,t.options)}},qm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new xt(r,o),new xt(a,l),new xt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],m=t[s*3+2],_=t[r*3],p=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new xt(o,1-l),new xt(c,1-u),new xt(f,1-m),new xt(_,1-g)]:[new xt(a,1-l),new xt(h,1-u),new xt(d,1-m),new xt(p,1-g)]}};function Zm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ge=class i extends Oe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],m=[],_=[],p=[];for(let g=0;g<h;g++){let E=g*f-o;for(let R=0;R<c;R++){let x=R*u-r;m.push(x,-E,0),_.push(0,0,1),p.push(R/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let E=0;E<a;E++){let R=E+c*g,x=E+c*(g+1),M=E+1+c*(g+1),v=E+1+c*g;d.push(R,x,v),d.push(x,M,v)}this.setIndex(d),this.setAttribute("position",new _e(m,3)),this.setAttribute("normal",new _e(_,3)),this.setAttribute("uv",new _e(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var ye=class i extends Oe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new z,f=new z,d=[],m=[],_=[],p=[];for(let g=0;g<=n;g++){let E=[],R=g/n,x=o+R*a,M=t*Math.cos(x),v=Math.sqrt(t*t-M*M),w=0;g===0&&o===0?w=.5/e:g===n&&l===Math.PI&&(w=-.5/e);for(let y=0;y<=e;y++){let b=y/e,C=s+b*r;u.x=-v*Math.cos(C),u.y=M,u.z=v*Math.sin(C),m.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),p.push(b+w,1-R),E.push(c++)}h.push(E)}for(let g=0;g<n;g++)for(let E=0;E<e;E++){let R=h[g][E+1],x=h[g][E],M=h[g+1][E],v=h[g+1][E+1];(g!==0||o>0)&&d.push(R,x,v),(g!==n-1||l<Math.PI)&&d.push(x,M,v)}this.setIndex(d),this.setAttribute("position",new _e(m,3)),this.setAttribute("normal",new _e(_,3)),this.setAttribute("uv",new _e(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Xe=class i extends Oe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=new z,d=new z,m=new z;for(let _=0;_<=n;_++){let p=o+_/n*a;for(let g=0;g<=s;g++){let E=g/s*r;d.x=(t+e*Math.cos(p))*Math.cos(E),d.y=(t+e*Math.cos(p))*Math.sin(E),d.z=e*Math.sin(p),c.push(d.x,d.y,d.z),f.x=t*Math.cos(E),f.y=t*Math.sin(E),m.subVectors(d,f).normalize(),h.push(m.x,m.y,m.z),u.push(g/s),u.push(_/n)}}for(let _=1;_<=n;_++)for(let p=1;p<=s;p++){let g=(s+1)*_+p-1,E=(s+1)*(_-1)+p-1,R=(s+1)*(_-1)+p,x=(s+1)*_+p;l.push(g,E,x),l.push(E,R,x)}this.setIndex(l),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function ps(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(lf(s))s.isRenderTargetTexture?($t("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(lf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function fn(i){let t={};for(let e=0;e<i.length;e++){let n=ps(i[e]);for(let s in n)t[s]=n[s]}return t}function lf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function $m(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ph(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}var nd={clone:ps,merge:fn},Jm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Km=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Je=class extends $n{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jm,this.fragmentShader=Km,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ps(t.uniforms),this.uniformsGroups=$m(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ut().setHex(s.value);break;case"v2":this.uniforms[n].value=new xt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ue().fromArray(s.value);break;case"m3":this.uniforms[n].value=new se().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ve().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Wa=class extends Je{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ce=class extends $n{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bo,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ao=class extends ce{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return fe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var lo=class extends $n{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bo,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=al,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Xa=class extends $n{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ff,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ya=class extends $n{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Bs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Zc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Gi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},qa=class extends Gi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kc,endingEnd:Kc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case jc:r=t,a=2*e-n;break;case Qc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case jc:o=t,l=2*n-e;break;case Qc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(s-e),_=m*m,p=_*m,g=-f*p+2*f*_-f*m,E=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*m+1,R=(-1-d)*p+(1.5+d)*_+.5*m,x=d*p-d*_;for(let M=0;M!==a;++M)r[M]=g*o[h+M]+E*o[c+M]+R*o[l+M]+x*o[u+M];return r}},Za=class extends Gi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},$a=class extends Gi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ja=class extends Gi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-e)/(s-e),_=1-m;for(let p=0;p!==a;++p)r[p]=o[c+p]*_+o[l+p]*m;return r}let f=a*2,d=t-1;for(let m=0;m!==a;++m){let _=o[c+m],p=o[l+m],g=d*f+m*2,E=u[g],R=u[g+1],x=t*f+m*2,M=h[x],v=h[x+1],w=Qm(n,e,E,M,s);r[m]=id(w,_,R,v,p)}return r}};function id(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function jm(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Qm(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=id(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=jm(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Pn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Bs(e,this.TimeBufferType),this.values=Bs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Bs(t.times,Array),values:Bs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Zc(t.settings)&&(n.settings={inTangents:Bs(t.settings.inTangents,Array),outTangents:Bs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new $a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Za(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ja(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Fr:e=this.InterpolantFactoryMethodDiscrete;break;case Da:e=this.InterpolantFactoryMethodLinear;break;case ba:e=this.InterpolantFactoryMethodSmooth;break;case Jc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return $t("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fr;case this.InterpolantFactoryMethodLinear:return Da;case this.InterpolantFactoryMethodSmooth:return ba;case this.InterpolantFactoryMethodBezier:return Jc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Zc(this.settings)&&(cf(this.settings.inTangents,t),cf(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Jt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Jt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Jt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Jt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Hp(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Jt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ba,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let _=e[u+m];if(_!==e[f+m]||_!==e[d+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Zc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function cf(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Pn.prototype.ValueTypeName="";Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=Da;var Vi=class extends Pn{constructor(t,e,n){super(t,e,n)}};Vi.prototype.ValueTypeName="bool";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=Fr;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ka=class extends Pn{constructor(t,e,n,s){super(t,e,n,s)}};Ka.prototype.ValueTypeName="color";var ja=class extends Pn{constructor(t,e,n,s){super(t,e,n,s)}};ja.prototype.ValueTypeName="number";var Qa=class extends Gi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Rn.slerpFlat(r,0,o,c-a,o,c,l);return r}},co=class extends Pn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Qa(this.times,this.values,this.getValueSize(),t)}};co.prototype.ValueTypeName="quaternion";co.prototype.InterpolantFactoryMethodSmooth=void 0;var Wi=class extends Pn{constructor(t,e,n){super(t,e,n)}};Wi.prototype.ValueTypeName="string";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=Fr;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var tl=class extends Pn{constructor(t,e,n,s){super(t,e,n,s)}};tl.prototype.ValueTypeName="vector";var el=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},sd=new el,nl=class{constructor(t){this.manager=t!==void 0?t:sd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};nl.DEFAULT_MATERIAL_NAME="__DEFAULT";var rr=class extends $e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},hs=class extends rr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},$c=new ve,hf=new z,uf=new z,ho=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tr,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;hf.setFromMatrixPosition(t.matrixWorld),e.position.copy(hf),uf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(uf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){$c.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix($c,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Xs||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply($c)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ma=new z,Sa=new Rn,si=new z,uo=class extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=Zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ma,Sa,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ma,Sa,si.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ma,Sa,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ma,Sa,si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Fi=new z,ff=new xt,df=new xt,je=class extends uo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z)}getViewSize(t,e){return this.getViewBounds(t,ff,df),e.subVectors(df,ff)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Dr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var rh=class extends ho{constructor(){super(new je(90,1,.5,500)),this.isPointLightShadow=!0}},fo=class extends rr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new rh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},or=class extends uo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},oh=class extends ho{constructor(){super(new or(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},us=class extends rr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new oh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ks=-90,Hs=1,il=class extends $e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new je(ks,Hs,t,e);s.layers=this.layers,this.add(s);let r=new je(ks,Hs,t,e);r.layers=this.layers,this.add(r);let o=new je(ks,Hs,t,e);o.layers=this.layers,this.add(o);let a=new je(ks,Hs,t,e);a.layers=this.layers,this.add(a);let l=new je(ks,Hs,t,e);l.layers=this.layers,this.add(l);let c=new je(ks,Hs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},sl=class extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Lh="\\[\\]\\.:\\/",t0=new RegExp("["+Lh+"]","g"),Dh="[^"+Lh+"]",e0="[^"+Lh.replace("\\.","")+"]",n0=/((?:WC+[\/:])*)/.source.replace("WC",Dh),i0=/(WCOD+)?/.source.replace("WCOD",e0),s0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dh),r0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dh),o0=new RegExp("^"+n0+i0+s0+r0+"$"),a0=["material","materials","bones","map"],ah=class{constructor(t,e,n){let s=n||Fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Fe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(t0,"")}static parseTrackName(t){let e=o0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);a0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){$t("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Jt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fe.Composite=ah;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Bv=new Float32Array(1);var Bh=class Bh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Bh.prototype.isMatrix2=!0;var lh=Bh;function Nh(i,t,e,n){let s=l0(n);switch(e){case wh:return i*t;case pl:return i*t/s.components*s.byteLength;case ml:return i*t/s.components*s.byteLength;case Ji:return i*t*2/s.components*s.byteLength;case gl:return i*t*2/s.components*s.byteLength;case Th:return i*t*3/s.components*s.byteLength;case zn:return i*t*4/s.components*s.byteLength;case xl:return i*t*4/s.components*s.byteLength;case xo:case yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _o:case vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _l:case Ml:return Math.max(i,16)*Math.max(t,8)/4;case yl:case vl:return Math.max(i,8)*Math.max(t,8)/2;case Sl:case bl:case wl:case Tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case El:case Mo:case Al:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Cl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Il:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ul:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case zl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ol:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case kl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Hl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Gl:case Vl:case Wl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Xl:case Yl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case So:case ql:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function l0(i){switch(i){case En:case Mh:return{byteLength:1,components:1};case cr:case Sh:case jn:return{byteLength:2,components:1};case fl:case dl:return{byteLength:2,components:4};case Kn:case ul:case Un:return{byteLength:4,components:1};case bh:case Eh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?$t("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Td(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function d0(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],_=u[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let _=u[d];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var p0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,m0=`#ifdef USE_ALPHAHASH
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
#endif`,g0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,x0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,y0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v0=`#ifdef USE_AOMAP
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
#endif`,M0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,S0=`#ifdef USE_BATCHING
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
#endif`,b0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,E0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,w0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,A0=`#ifdef USE_IRIDESCENCE
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
#endif`,R0=`#ifdef USE_BUMPMAP
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
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,N0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,U0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,F0=`#define PI 3.141592653589793
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
} // validated`,O0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,B0=`vec3 transformedNormal = objectNormal;
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
#endif`,k0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,H0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,G0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,V0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,W0="gl_FragColor = linearToOutputTexel( gl_FragColor );",X0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Y0=`#ifdef USE_ENVMAP
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
#endif`,q0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Z0=`#ifdef USE_ENVMAP
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
#endif`,$0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,J0=`#ifdef USE_ENVMAP
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
#endif`,K0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,j0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Q0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eg=`#ifdef USE_GRADIENTMAP
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
}`,ng=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ig=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,og=`#ifdef USE_ENVMAP
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
#endif`,ag=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ug=`PhysicalMaterial material;
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
#endif`,fg=`uniform sampler2D dfgLUT;
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
}`,dg=`
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
#endif`,pg=`#if defined( RE_IndirectDiffuse )
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
#endif`,mg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,xg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_g=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Eg=`#if defined( USE_POINTS_UV )
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
#endif`,wg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ag=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ig=`#ifdef USE_MORPHTARGETS
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
#endif`,Pg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Fg=`#ifdef USE_NORMALMAP
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
#endif`,Og=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$g=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qg=`float getShadowMask() {
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
}`,tx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ex=`#ifdef USE_SKINNING
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
#endif`,nx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ix=`#ifdef USE_SKINNING
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
#endif`,sx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ox=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ax=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lx=`#ifdef USE_TRANSMISSION
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
#endif`,cx=`#ifdef USE_TRANSMISSION
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
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,px=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mx=`uniform sampler2D t2D;
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
}`,gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_x=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vx=`#include <common>
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
}`,Mx=`#if DEPTH_PACKING == 3200
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
}`,Sx=`#define DISTANCE
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
}`,bx=`#define DISTANCE
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
}`,Ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tx=`uniform float scale;
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
}`,Ax=`uniform vec3 diffuse;
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
}`,Rx=`#include <common>
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
}`,Cx=`uniform vec3 diffuse;
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
}`,Ix=`#define LAMBERT
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
}`,Px=`#define LAMBERT
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
}`,Lx=`#define MATCAP
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
}`,Dx=`#define MATCAP
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
}`,Nx=`#define NORMAL
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
}`,Ux=`#define NORMAL
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
}`,zx=`#define PHONG
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
}`,Fx=`#define PHONG
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
}`,Ox=`#define STANDARD
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
}`,Bx=`#define STANDARD
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
}`,kx=`#define TOON
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
}`,Hx=`#define TOON
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
}`,Gx=`uniform float size;
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
}`,Vx=`uniform vec3 diffuse;
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
}`,Wx=`#include <common>
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
}`,Xx=`uniform vec3 color;
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
}`,Yx=`uniform float rotation;
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
}`,qx=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:p0,alphahash_pars_fragment:m0,alphamap_fragment:g0,alphamap_pars_fragment:x0,alphatest_fragment:y0,alphatest_pars_fragment:_0,aomap_fragment:v0,aomap_pars_fragment:M0,batching_pars_vertex:S0,batching_vertex:b0,begin_vertex:E0,beginnormal_vertex:w0,bsdfs:T0,iridescence_fragment:A0,bumpmap_pars_fragment:R0,clipping_planes_fragment:C0,clipping_planes_pars_fragment:I0,clipping_planes_pars_vertex:P0,clipping_planes_vertex:L0,color_fragment:D0,color_pars_fragment:N0,color_pars_vertex:U0,color_vertex:z0,common:F0,cube_uv_reflection_fragment:O0,defaultnormal_vertex:B0,displacementmap_pars_vertex:k0,displacementmap_vertex:H0,emissivemap_fragment:G0,emissivemap_pars_fragment:V0,colorspace_fragment:W0,colorspace_pars_fragment:X0,envmap_fragment:Y0,envmap_common_pars_fragment:q0,envmap_pars_fragment:Z0,envmap_pars_vertex:$0,envmap_physical_pars_fragment:og,envmap_vertex:J0,fog_vertex:K0,fog_pars_vertex:j0,fog_fragment:Q0,fog_pars_fragment:tg,gradientmap_pars_fragment:eg,lightmap_pars_fragment:ng,lights_lambert_fragment:ig,lights_lambert_pars_fragment:sg,lights_pars_begin:rg,lights_toon_fragment:ag,lights_toon_pars_fragment:lg,lights_phong_fragment:cg,lights_phong_pars_fragment:hg,lights_physical_fragment:ug,lights_physical_pars_fragment:fg,lights_fragment_begin:dg,lights_fragment_maps:pg,lights_fragment_end:mg,lightprobes_pars_fragment:gg,logdepthbuf_fragment:xg,logdepthbuf_pars_fragment:yg,logdepthbuf_pars_vertex:_g,logdepthbuf_vertex:vg,map_fragment:Mg,map_pars_fragment:Sg,map_particle_fragment:bg,map_particle_pars_fragment:Eg,metalnessmap_fragment:wg,metalnessmap_pars_fragment:Tg,morphinstance_vertex:Ag,morphcolor_vertex:Rg,morphnormal_vertex:Cg,morphtarget_pars_vertex:Ig,morphtarget_vertex:Pg,normal_fragment_begin:Lg,normal_fragment_maps:Dg,normal_pars_fragment:Ng,normal_pars_vertex:Ug,normal_vertex:zg,normalmap_pars_fragment:Fg,clearcoat_normal_fragment_begin:Og,clearcoat_normal_fragment_maps:Bg,clearcoat_pars_fragment:kg,iridescence_pars_fragment:Hg,opaque_fragment:Gg,packing:Vg,premultiplied_alpha_fragment:Wg,project_vertex:Xg,dithering_fragment:Yg,dithering_pars_fragment:qg,roughnessmap_fragment:Zg,roughnessmap_pars_fragment:$g,shadowmap_pars_fragment:Jg,shadowmap_pars_vertex:Kg,shadowmap_vertex:jg,shadowmask_pars_fragment:Qg,skinbase_vertex:tx,skinning_pars_vertex:ex,skinning_vertex:nx,skinnormal_vertex:ix,specularmap_fragment:sx,specularmap_pars_fragment:rx,tonemapping_fragment:ox,tonemapping_pars_fragment:ax,transmission_fragment:lx,transmission_pars_fragment:cx,uv_pars_fragment:hx,uv_pars_vertex:ux,uv_vertex:fx,worldpos_vertex:dx,background_vert:px,background_frag:mx,backgroundCube_vert:gx,backgroundCube_frag:xx,cube_vert:yx,cube_frag:_x,depth_vert:vx,depth_frag:Mx,distance_vert:Sx,distance_frag:bx,equirect_vert:Ex,equirect_frag:wx,linedashed_vert:Tx,linedashed_frag:Ax,meshbasic_vert:Rx,meshbasic_frag:Cx,meshlambert_vert:Ix,meshlambert_frag:Px,meshmatcap_vert:Lx,meshmatcap_frag:Dx,meshnormal_vert:Nx,meshnormal_frag:Ux,meshphong_vert:zx,meshphong_frag:Fx,meshphysical_vert:Ox,meshphysical_frag:Bx,meshtoon_vert:kx,meshtoon_frag:Hx,points_vert:Gx,points_frag:Vx,shadow_vert:Wx,shadow_frag:Xx,sprite_vert:Yx,sprite_frag:qx},Tt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},fi={basic:{uniforms:fn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:fn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:fn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:fn([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:fn([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:fn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:fn([Tt.points,Tt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:fn([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:fn([Tt.common,Tt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:fn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:fn([Tt.sprite,Tt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distance:{uniforms:fn([Tt.common,Tt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distance_vert,fragmentShader:ue.distance_frag},shadow:{uniforms:fn([Tt.lights,Tt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};fi.physical={uniforms:fn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};var Jl={r:0,b:0,g:0},Zx=new ve,Ad=new se;Ad.set(-1,0,0,0,1,0,0,0,1);function $x(i,t,e,n,s,r){let o=new Ut(0),a=s===!0?0:1,l,c,h=null,u=0,f=null;function d(E){let R=E.isScene===!0?E.background:null;if(R&&R.isTexture){let x=E.backgroundBlurriness>0;R=t.get(R,x)}return R}function m(E){let R=!1,x=d(E);x===null?p(o,a):x&&x.isColor&&(p(x,1),R=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(E,R){let x=d(R);x&&(x.isCubeTexture||x.mapping===mo)?(c===void 0&&(c=new st(new Ee(1,1,1),new Je({name:"BackgroundCubeMaterial",uniforms:ps(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,v,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Zx.makeRotationFromEuler(R.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ad),c.material.toneMapped=pe.getTransfer(x.colorSpace)!==be,(h!==x||u!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,f=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new st(new Ge(2,2),new Je({name:"BackgroundMaterial",uniforms:ps(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=pe.getTransfer(x.colorSpace)!==be,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,u=x.version,f=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,R){E.getRGB(Jl,Ph(i)),e.buffers.color.setClear(Jl.r,Jl.g,Jl.b,R,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,R=1){o.set(E),a=R,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(E){a=E,p(o,a)},render:m,addToRenderList:_,dispose:g}}function Jx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(P,D,N,A,I){let U=!1,O=u(P,A,N,D);r!==O&&(r=O,c(r.object)),U=d(P,A,N,I),U&&m(P,A,N,I),I!==null&&t.update(I,i.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,x(P,D,N,A),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function u(P,D,N,A){let I=A.wireframe===!0,U=n[D.id];U===void 0&&(U={},n[D.id]=U);let O=P.isInstancedMesh===!0?P.id:0,tt=U[O];tt===void 0&&(tt={},U[O]=tt);let G=tt[N.id];G===void 0&&(G={},tt[N.id]=G);let K=G[I];return K===void 0&&(K=f(l()),G[I]=K),K}function f(P){let D=[],N=[],A=[];for(let I=0;I<e;I++)D[I]=0,N[I]=0,A[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:A,object:P,attributes:{},index:null}}function d(P,D,N,A){let I=r.attributes,U=D.attributes,O=0,tt=N.getAttributes();for(let G in tt)if(tt[G].location>=0){let J=I[G],vt=U[G];if(vt===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(vt=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(vt=P.instanceColor)),J===void 0||J.attribute!==vt||vt&&J.data!==vt.data)return!0;O++}return r.attributesNum!==O||r.index!==A}function m(P,D,N,A){let I={},U=D.attributes,O=0,tt=N.getAttributes();for(let G in tt)if(tt[G].location>=0){let J=U[G];J===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(J=P.instanceColor));let vt={};vt.attribute=J,J&&J.data&&(vt.data=J.data),I[G]=vt,O++}r.attributes=I,r.attributesNum=O,r.index=A}function _(){let P=r.newAttributes;for(let D=0,N=P.length;D<N;D++)P[D]=0}function p(P){g(P,0)}function g(P,D){let N=r.newAttributes,A=r.enabledAttributes,I=r.attributeDivisors;N[P]=1,A[P]===0&&(i.enableVertexAttribArray(P),A[P]=1),I[P]!==D&&(i.vertexAttribDivisor(P,D),I[P]=D)}function E(){let P=r.newAttributes,D=r.enabledAttributes;for(let N=0,A=D.length;N<A;N++)D[N]!==P[N]&&(i.disableVertexAttribArray(N),D[N]=0)}function R(P,D,N,A,I,U,O){O===!0?i.vertexAttribIPointer(P,D,N,I,U):i.vertexAttribPointer(P,D,N,A,I,U)}function x(P,D,N,A){_();let I=A.attributes,U=N.getAttributes(),O=D.defaultAttributeValues;for(let tt in U){let G=U[tt];if(G.location>=0){let K=I[tt];if(K===void 0&&(tt==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),tt==="instanceColor"&&P.instanceColor&&(K=P.instanceColor)),K!==void 0){let J=K.normalized,vt=K.itemSize,yt=t.get(K);if(yt===void 0)continue;let ee=yt.buffer,Qt=yt.type,j=yt.bytesPerElement,B=Qt===i.INT||Qt===i.UNSIGNED_INT||K.gpuType===ul;if(K.isInterleavedBufferAttribute){let W=K.data,lt=W.stride,At=K.offset;if(W.isInstancedInterleavedBuffer){for(let Z=0;Z<G.locationSize;Z++)g(G.location+Z,W.meshPerAttribute);P.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Z=0;Z<G.locationSize;Z++)p(G.location+Z);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let Z=0;Z<G.locationSize;Z++)R(G.location+Z,vt/G.locationSize,Qt,J,lt*j,(At+vt/G.locationSize*Z)*j,B)}else{if(K.isInstancedBufferAttribute){for(let W=0;W<G.locationSize;W++)g(G.location+W,K.meshPerAttribute);P.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let W=0;W<G.locationSize;W++)p(G.location+W);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let W=0;W<G.locationSize;W++)R(G.location+W,vt/G.locationSize,Qt,J,vt*j,vt/G.locationSize*W*j,B)}}else if(O!==void 0){let J=O[tt];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(G.location,J);break;case 3:i.vertexAttrib3fv(G.location,J);break;case 4:i.vertexAttrib4fv(G.location,J);break;default:i.vertexAttrib1fv(G.location,J)}}}}E()}function M(){b();for(let P in n){let D=n[P];for(let N in D){let A=D[N];for(let I in A){let U=A[I];for(let O in U)h(U[O].object),delete U[O];delete A[I]}}delete n[P]}}function v(P){if(n[P.id]===void 0)return;let D=n[P.id];for(let N in D){let A=D[N];for(let I in A){let U=A[I];for(let O in U)h(U[O].object),delete U[O];delete A[I]}}delete n[P.id]}function w(P){for(let D in n){let N=n[D];for(let A in N){let I=N[A];if(I[P.id]===void 0)continue;let U=I[P.id];for(let O in U)h(U[O].object),delete U[O];delete I[P.id]}}}function y(P){for(let D in n){let N=n[D],A=P.isInstancedMesh===!0?P.id:0,I=N[A];if(I!==void 0){for(let U in I){let O=I[U];for(let tt in O)h(O[tt].object),delete O[tt];delete I[U]}delete N[A],Object.keys(N).length===0&&delete n[D]}}}function b(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:C,dispose:M,releaseStatesOfGeometry:v,releaseStatesOfObject:y,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:p,disableUnusedAttributes:E}}function Kx(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function jx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==zn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let y=w===jn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==En&&w!==Un&&!y&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&($t("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&$t("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),v=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:E,maxVaryings:R,maxFragmentUniforms:x,maxSamples:M,samples:v}}function Qx(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Yn,a=new se,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,g=i.get(u);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{let E=r?0:n,R=E*4,x=g.clippingState||null;l.value=x,x=h(m,f,R,d);for(let M=0;M!==R;++M)x[M]=e[M];g.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){let _=u!==null?u.length:0,p=null;if(_!==0){if(p=l.value,m!==!0||p===null){let g=d+_*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<g)&&(p=new Float32Array(g));for(let R=0,x=d;R!==_;++R,x+=4)o.copy(u[R]).applyMatrix4(E,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}var dr=4,ty=6,ey=20,ny=256,wo=new or,rd=new Ut,kh=null,Hh=0,Gh=0,Vh=!1,iy=new z,ms=new z,gs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=iy}=r;kh=this._renderer.getRenderTarget(),Hh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ld(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(kh,Hh,Gh),this._renderer.xr.enabled=Vh,t.scissorTest=!1,fr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qi||t.mapping===ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kh=this._renderer.getRenderTarget(),Hh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:jn,format:zn,colorSpace:Or,depthBuffer:!1},s=od(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=od(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=sy(r)),this._blurMaterial=oy(r,t,e),this._ggxMaterial=ry(r,t,e)}return s}_compileMaterial(t){let e=new st(new Oe,t);this._renderer.compile(e,wo)}_sceneToCubeUV(t,e,n,s,r){let l=new je(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(rd),u.toneMapping=Jn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new st(new Ee,new Ae({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,p=_.material,g=!1,E=t.background;E?E.isColor&&(p.color.copy(E),t.background=null,g=!0):(p.color.copy(rd),g=!0);for(let R=0;R<6;R++){let x=R%3;x===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[R],r.y,r.z)):x===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[R]));let M=this._cubeSize;fr(s,x*M,R>2?M:0,M,M),u.setRenderTarget(s),g&&u.render(_,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=E}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===qi||t.mapping===ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ld()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ad());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;fr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,wo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:m}=this,_=this._sizeLods[n],p=3*_*(n>m-dr?n-m+dr:0),g=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=m-e,fr(r,p,g,3*_,2*_),s.setRenderTarget(r),s.render(a,wo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,fr(t,p,g,3*_,2*_),s.setRenderTarget(t),s.render(a,wo)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-dr?s-this._lodMax+dr:0),f=4*(this._cubeSize-h);fr(e,u,f,3*h,2*h),o.setRenderTarget(e),o.render(l,wo)}};function sy(i){let t=[],e=[],n=i,s=i-dr+1+ty;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,m=new Float32Array(d*f*u),_=new Float32Array(d*f*u);for(let g=0;g<u;g++){let E=g%3*2/3-1,R=g>2?0:-1,x=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];m.set(x,d*f*g);for(let M=0;M<f;M++){let v=h[M*2]*2-1,w=h[M*2+1]*2-1;g===0?ms.set(1,w,v):g===1?ms.set(-v,1,-w):g===2?ms.set(-v,w,1):g===3?ms.set(-1,w,-v):g===4?ms.set(-v,-1,w):ms.set(v,w,-1),ms.toArray(_,(g*f+M)*d)}}let p=new Oe;p.setAttribute("position",new Ne(m,d)),p.setAttribute("outputDirection",new Ne(_,d)),e.push(new st(p,null)),n>dr&&n--}return{lodMeshes:e,sizeLods:t}}function od(i,t,e){let n=new bn(i,t,e);return n.texture.mapping=mo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ry(i,t,e){return new Je({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ny,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ql(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function oy(i,t,e){return new Je({name:"SphericalGaussianBlur",defines:{SAMPLES:ey,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ql(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function ad(){return new Je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ql(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function ld(){return new Je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Ql(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var jl=class extends bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Kr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ee(5,5,5),r=new Je({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:hi});r.uniforms.tEquirect.value=e;let o=new st(s,r),a=e.minFilter;return e.minFilter===Zi&&(e.minFilter=an),new il(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function ay(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===ll||d===cl)if(t.has(f)){let m=t.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let _=new jl(m.height);return _.fromEquirectangularTexture(i,f),t.set(f,_),f.addEventListener("dispose",c),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,m=d===ll||d===cl,_=d===qi||d===ds;if(m||_){let p=e.get(f),g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new gs(i)),p=m?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{let E=f.image;return m&&E&&E.height>0||_&&E&&l(E)?(n===null&&(n=new gs(i)),p=m?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function a(f,d){return d===ll?f.mapping=qi:d===cl&&(f.mapping=ds),f}function l(f){let d=0,m=6;for(let _=0;_<m;_++)f[_]!==void 0&&d++;return d===m}function c(f){let d=f.target;d.removeEventListener("dispose",c);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function ly(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&as("WebGLRenderer: "+n+" extension not supported."),s}}}function cy(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,m=u.attributes.position,_=0;if(m===void 0)return;if(d!==null){let E=d.array;_=d.version;for(let R=0,x=E.length;R<x;R+=3){let M=E[R+0],v=E[R+1],w=E[R+2];f.push(M,v,v,w,w,M)}}else{let E=m.array;_=m.version;for(let R=0,x=E.length/3-1;R<x;R+=3){let M=R+0,v=R+1,w=R+2;f.push(M,v,v,w,w,M)}}let p=new(m.count>=65535?Xr:Wr)(f,1);p.version=_;let g=r.get(u);g&&t.remove(g),r.set(u,p)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function hy(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*o,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let _=0;for(let p=0;p<d;p++)_+=f[p];e.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function uy(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Jt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function fy(i,t,e){let n=new WeakMap,s=new Ue;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let b=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],R=0;d===!0&&(R=1),m===!0&&(R=2),_===!0&&(R=3);let x=a.attributes.position.count*R,M=1;x>t.maxTextureSize&&(M=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let v=new Float32Array(x*M*4*u),w=new Gr(v,x,M,u);w.type=Un,w.needsUpdate=!0;let y=R*4;for(let C=0;C<u;C++){let P=p[C],D=g[C],N=E[C],A=x*M*4*C;for(let I=0;I<P.count;I++){let U=I*y;d===!0&&(s.fromBufferAttribute(P,I),v[A+U+0]=s.x,v[A+U+1]=s.y,v[A+U+2]=s.z,v[A+U+3]=0),m===!0&&(s.fromBufferAttribute(D,I),v[A+U+4]=s.x,v[A+U+5]=s.y,v[A+U+6]=s.z,v[A+U+7]=0),_===!0&&(s.fromBufferAttribute(N,I),v[A+U+8]=s.x,v[A+U+9]=s.y,v[A+U+10]=s.z,v[A+U+11]=N.itemSize===4?s.w:1)}}f={count:u,texture:w,size:new xt(x,M)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function dy(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var py={[ph]:"LINEAR_TONE_MAPPING",[mh]:"REINHARD_TONE_MAPPING",[gh]:"CINEON_TONE_MAPPING",[lr]:"ACES_FILMIC_TONE_MAPPING",[yh]:"AGX_TONE_MAPPING",[_h]:"NEUTRAL_TONE_MAPPING",[xh]:"CUSTOM_TONE_MAPPING"};function my(i,t,e,n,s,r){let o=new bn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Oe;c.setAttribute("position",new _e([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new _e([0,2,0,0,2,0],2));let h=new Wa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new st(c,h),f=new or(-1,1,1,-1,0,1),d=null,m=null,_=!1,p,g=null,E=[],R=!1;this.setSize=function(x,M){o.setSize(x,M),a!==null&&a.setSize(x,M),l!==null&&l.setSize(x,M);for(let v=0;v<E.length;v++){let w=E[v];w.setSize&&w.setSize(x,M)}},this.setEffects=function(x){E=x,R=E.length>0&&E[0].isRenderPass===!0;let M=o.width,v=o.height;E.length>0&&a===null&&(a=new bn(M,v,{type:jn,depthBuffer:!1,stencilBuffer:!1}),l=new bn(M,v,{type:jn,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<E.length;w++){let y=E[w];y.setSize&&y.setSize(M,v)}},this.begin=function(x,M){if(_||x.toneMapping===Jn&&E.length===0)return!1;if(g=M,M!==null){let v=M.width,w=M.height;(o.width!==v||o.height!==w)&&this.setSize(v,w)}return R===!1&&x.setRenderTarget(o),p=x.toneMapping,x.toneMapping=Jn,!0},this.hasRenderPass=function(){return R},this.end=function(x,M){x.toneMapping=p,_=!0;let v=o,w=a;for(let y=0;y<E.length;y++){let b=E[y];b.enabled!==!1&&(b.render(x,w,v,M),b.needsSwap!==!1&&(v=w,w=w===a?l:a))}if(d!==x.outputColorSpace||m!==x.toneMapping){d=x.outputColorSpace,m=x.toneMapping,h.defines={},pe.getTransfer(d)===be&&(h.defines.SRGB_TRANSFER="");let y=py[m];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=v.texture,x.setRenderTarget(g),x.render(u,f),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Rd=new _n,Yh=new Oi(1,1),Cd=new Gr,Id=new za,Pd=new Kr,cd=[],hd=[],ud=new Float32Array(16),fd=new Float32Array(9),dd=new Float32Array(4);function mr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=cd[s];if(r===void 0&&(r=new Float32Array(s),cd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function tn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function en(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function tc(i,t){let e=hd[t];e===void 0&&(e=new Int32Array(t),hd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function gy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function xy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2fv(this.addr,t),en(e,t)}}function yy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(tn(e,t))return;i.uniform3fv(this.addr,t),en(e,t)}}function _y(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4fv(this.addr,t),en(e,t)}}function vy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;dd.set(n),i.uniformMatrix2fv(this.addr,!1,dd),en(e,n)}}function My(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;fd.set(n),i.uniformMatrix3fv(this.addr,!1,fd),en(e,n)}}function Sy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;ud.set(n),i.uniformMatrix4fv(this.addr,!1,ud),en(e,n)}}function by(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ey(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2iv(this.addr,t),en(e,t)}}function wy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;i.uniform3iv(this.addr,t),en(e,t)}}function Ty(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4iv(this.addr,t),en(e,t)}}function Ay(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ry(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2uiv(this.addr,t),en(e,t)}}function Cy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;i.uniform3uiv(this.addr,t),en(e,t)}}function Iy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4uiv(this.addr,t),en(e,t)}}function Py(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Yh.compareFunction=e.isReversedDepthBuffer()?$l:Zl,r=Yh):r=Rd,e.setTexture2D(t||r,s)}function Ly(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Id,s)}function Dy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Pd,s)}function Ny(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Cd,s)}function Uy(i){switch(i){case 5126:return gy;case 35664:return xy;case 35665:return yy;case 35666:return _y;case 35674:return vy;case 35675:return My;case 35676:return Sy;case 5124:case 35670:return by;case 35667:case 35671:return Ey;case 35668:case 35672:return wy;case 35669:case 35673:return Ty;case 5125:return Ay;case 36294:return Ry;case 36295:return Cy;case 36296:return Iy;case 35678:case 36198:case 36298:case 36306:case 35682:return Py;case 35679:case 36299:case 36307:return Ly;case 35680:case 36300:case 36308:case 36293:return Dy;case 36289:case 36303:case 36311:case 36292:return Ny}}function zy(i,t){i.uniform1fv(this.addr,t)}function Fy(i,t){let e=mr(t,this.size,2);i.uniform2fv(this.addr,e)}function Oy(i,t){let e=mr(t,this.size,3);i.uniform3fv(this.addr,e)}function By(i,t){let e=mr(t,this.size,4);i.uniform4fv(this.addr,e)}function ky(i,t){let e=mr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Hy(i,t){let e=mr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Gy(i,t){let e=mr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Vy(i,t){i.uniform1iv(this.addr,t)}function Wy(i,t){i.uniform2iv(this.addr,t)}function Xy(i,t){i.uniform3iv(this.addr,t)}function Yy(i,t){i.uniform4iv(this.addr,t)}function qy(i,t){i.uniform1uiv(this.addr,t)}function Zy(i,t){i.uniform2uiv(this.addr,t)}function $y(i,t){i.uniform3uiv(this.addr,t)}function Jy(i,t){i.uniform4uiv(this.addr,t)}function Ky(i,t,e){let n=this.cache,s=t.length,r=tc(e,s);tn(n,r)||(i.uniform1iv(this.addr,r),en(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Yh:o=Rd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function jy(i,t,e){let n=this.cache,s=t.length,r=tc(e,s);tn(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Id,r[o])}function Qy(i,t,e){let n=this.cache,s=t.length,r=tc(e,s);tn(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Pd,r[o])}function t_(i,t,e){let n=this.cache,s=t.length,r=tc(e,s);tn(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Cd,r[o])}function e_(i){switch(i){case 5126:return zy;case 35664:return Fy;case 35665:return Oy;case 35666:return By;case 35674:return ky;case 35675:return Hy;case 35676:return Gy;case 5124:case 35670:return Vy;case 35667:case 35671:return Wy;case 35668:case 35672:return Xy;case 35669:case 35673:return Yy;case 5125:return qy;case 36294:return Zy;case 36295:return $y;case 36296:return Jy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ky;case 35679:case 36299:case 36307:return jy;case 35680:case 36300:case 36308:case 36293:return Qy;case 36289:case 36303:case 36311:case 36292:return t_}}var qh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Uy(e.type)}},Zh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=e_(e.type)}},$h=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Wh=/(\w+)(\])?(\[|\.)?/g;function pd(i,t){i.seq.push(t),i.map[t.id]=t}function n_(i,t,e){let n=i.name,s=n.length;for(Wh.lastIndex=0;;){let r=Wh.exec(n),o=Wh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){pd(e,c===void 0?new qh(a,i,t):new Zh(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new $h(a),pd(e,u)),e=u}}}var pr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);n_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function md(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var i_=37297,s_=0;function r_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var gd=new se;function o_(i){pe._getMatrix(gd,pe.workingColorSpace,i);let t=`mat3( ${gd.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(i)){case Br:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return $t("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function xd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+r_(i.getShaderSource(t),a)}else return r}function a_(i,t){let e=o_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var l_={[ph]:"Linear",[mh]:"Reinhard",[gh]:"Cineon",[lr]:"ACESFilmic",[yh]:"AgX",[_h]:"Neutral",[xh]:"Custom"};function c_(i,t){let e=l_[t];return e===void 0?($t("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Kl=new z;function h_(){pe.getLuminanceCoefficients(Kl);let i=Kl.x.toFixed(4),t=Kl.y.toFixed(4),e=Kl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function u_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ao).join(`
`)}function f_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function d_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ao(i){return i!==""}function yd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _d(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var p_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jh(i){return i.replace(p_,g_)}var m_=new Map;function g_(i,t){let e=ue[t];if(e===void 0){let n=m_.get(t);if(n!==void 0)e=ue[n],$t('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Jh(e)}var x_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vd(i){return i.replace(x_,y_)}function y_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Md(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var __={[po]:"SHADOWMAP_TYPE_PCF",[ar]:"SHADOWMAP_TYPE_VSM"};function v_(i){return __[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var M_={[qi]:"ENVMAP_TYPE_CUBE",[ds]:"ENVMAP_TYPE_CUBE",[mo]:"ENVMAP_TYPE_CUBE_UV"};function S_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":M_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var b_={[ds]:"ENVMAP_MODE_REFRACTION"};function E_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":b_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var w_={[al]:"ENVMAP_BLENDING_MULTIPLY",[Nf]:"ENVMAP_BLENDING_MIX",[Uf]:"ENVMAP_BLENDING_ADD"};function T_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":w_[i.combine]||"ENVMAP_BLENDING_NONE"}function A_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function R_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=v_(e),c=S_(e),h=E_(e),u=T_(e),f=A_(e),d=u_(e),m=f_(r),_=s.createProgram(),p,g,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ao).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ao).join(`
`),g.length>0&&(g+=`
`)):(p=[Md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ao).join(`
`),g=[Md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jn?"#define TONE_MAPPING":"",e.toneMapping!==Jn?ue.tonemapping_pars_fragment:"",e.toneMapping!==Jn?c_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,a_("linearToOutputTexel",e.outputColorSpace),h_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ao).join(`
`)),o=Jh(o),o=yd(o,e),o=_d(o,e),a=Jh(a),a=yd(a,e),a=_d(a,e),o=vd(o),a=vd(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===Rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let R=E+p+o,x=E+g+a,M=md(s,s.VERTEX_SHADER,R),v=md(s,s.FRAGMENT_SHADER,x);s.attachShader(_,M),s.attachShader(_,v),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(P){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(_)||"",N=s.getShaderInfoLog(M)||"",A=s.getShaderInfoLog(v)||"",I=D.trim(),U=N.trim(),O=A.trim(),tt=!0,G=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,M,v);else{let K=xd(s,M,"vertex"),J=xd(s,v,"fragment");Jt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+K+`
`+J)}else I!==""?$t("WebGLProgram: Program Info Log:",I):(U===""||O==="")&&(G=!1);G&&(P.diagnostics={runnable:tt,programLog:I,vertexShader:{log:U,prefix:p},fragmentShader:{log:O,prefix:g}})}s.deleteShader(M),s.deleteShader(v),y=new pr(s,_),b=d_(s,_)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(_,i_)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=s_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=v,this}var C_=0,Kh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new jh(t),e.set(t,n)),n}},jh=class{constructor(t){this.id=C_++,this.code=t,this.usedTimes=0}};function I_(i){return i===Ji||i===Mo||i===So}function P_(i,t,e,n,s,r){let o=new Vr,a=new Kh,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,b,C,P,D,N){let A=P.fog,I=D.geometry,U=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,O=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,tt=t.get(y.envMap||U,O),G=tt&&tt.mapping===mo?tt.image.height:null,K=d[y.type];y.precision!==null&&(f=n.getMaxPrecision(y.precision),f!==y.precision&&$t("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let J=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,vt=J!==void 0?J.length:0,yt=0;I.morphAttributes.position!==void 0&&(yt=1),I.morphAttributes.normal!==void 0&&(yt=2),I.morphAttributes.color!==void 0&&(yt=3);let ee,Qt,j,B;if(K){let Le=fi[K];ee=Le.vertexShader,Qt=Le.fragmentShader}else{ee=y.vertexShader,Qt=y.fragmentShader;let Le=a.getVertexShaderStage(y),Me=a.getFragmentShaderStage(y);a.update(y,Le,Me),j=Le.id,B=Me.id}let W=i.getRenderTarget(),lt=i.state.buffers.depth.getReversed(),At=D.isInstancedMesh===!0,Z=D.isBatchedMesh===!0,pt=!!y.map,Ot=!!y.matcap,q=!!tt,ot=!!y.aoMap,ct=!!y.lightMap,ft=!!y.bumpMap&&y.wireframe===!1,mt=!!y.normalMap,Yt=!!y.displacementMap,Ht=!!y.emissiveMap,qt=!!y.metalnessMap,te=!!y.roughnessMap,F=y.anisotropy>0,me=y.clearcoat>0,le=y.dispersion>0,L=y.retroreflectivity>0,S=y.iridescence>0,V=y.sheen>0,$=y.transmission>0,nt=F&&!!y.anisotropyMap,gt=me&&!!y.clearcoatMap,_t=me&&!!y.clearcoatNormalMap,it=me&&!!y.clearcoatRoughnessMap,at=S&&!!y.iridescenceMap,Mt=S&&!!y.iridescenceThicknessMap,Gt=V&&!!y.sheenColorMap,wt=V&&!!y.sheenRoughnessMap,St=!!y.specularMap,Vt=!!y.specularColorMap,Zt=!!y.specularIntensityMap,re=$&&!!y.transmissionMap,H=$&&!!y.thicknessMap,bt=!!y.gradientMap,rt=!!y.alphaMap,Et=y.alphaTest>0,Pt=!!y.alphaHash,ht=!!y.extensions,Xt=Jn;y.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Xt=i.toneMapping);let Bt={shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:ee,fragmentShader:Qt,defines:y.defines,customVertexShaderID:j,customFragmentShaderID:B,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Z,batchingColor:Z&&D._colorsTexture!==null,instancing:At,instancingColor:At&&D.instanceColor!==null,instancingMorph:At&&D.morphTexture!==null,outputColorSpace:W===null?i.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:pe.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:pt,matcap:Ot,envMap:q,envMapMode:q&&tt.mapping,envMapCubeUVHeight:G,aoMap:ot,lightMap:ct,bumpMap:ft,normalMap:mt,displacementMap:Yt,emissiveMap:Ht,normalMapObjectSpace:mt&&y.normalMapType===Of,normalMapTangentSpace:mt&&y.normalMapType===bo,packedNormalMap:mt&&y.normalMapType===bo&&I_(y.normalMap.format),metalnessMap:qt,roughnessMap:te,anisotropy:F,anisotropyMap:nt,clearcoat:me,clearcoatMap:gt,clearcoatNormalMap:_t,clearcoatRoughnessMap:it,dispersion:le,retroreflection:L,iridescence:S,iridescenceMap:at,iridescenceThicknessMap:Mt,sheen:V,sheenColorMap:Gt,sheenRoughnessMap:wt,specularMap:St,specularColorMap:Vt,specularIntensityMap:Zt,transmission:$,transmissionMap:re,thicknessMap:H,gradientMap:bt,opaque:y.transparent===!1&&y.blending===Yi&&y.alphaToCoverage===!1,alphaMap:rt,alphaTest:Et,alphaHash:Pt,combine:y.combine,mapUv:pt&&m(y.map.channel),aoMapUv:ot&&m(y.aoMap.channel),lightMapUv:ct&&m(y.lightMap.channel),bumpMapUv:ft&&m(y.bumpMap.channel),normalMapUv:mt&&m(y.normalMap.channel),displacementMapUv:Yt&&m(y.displacementMap.channel),emissiveMapUv:Ht&&m(y.emissiveMap.channel),metalnessMapUv:qt&&m(y.metalnessMap.channel),roughnessMapUv:te&&m(y.roughnessMap.channel),anisotropyMapUv:nt&&m(y.anisotropyMap.channel),clearcoatMapUv:gt&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:_t&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:wt&&m(y.sheenRoughnessMap.channel),specularMapUv:St&&m(y.specularMap.channel),specularColorMapUv:Vt&&m(y.specularColorMap.channel),specularIntensityMapUv:Zt&&m(y.specularIntensityMap.channel),transmissionMapUv:re&&m(y.transmissionMap.channel),thicknessMapUv:H&&m(y.thicknessMap.channel),alphaMapUv:rt&&m(y.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(mt||F),vertexNormals:!!I.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(pt||rt),fog:!!A,useFog:y.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||I.attributes.normal===void 0&&mt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:lt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:yt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xt,decodeVideoTexture:pt&&y.map.isVideoTexture===!0&&pe.getTransfer(y.map.colorSpace)===be,decodeVideoTextureEmissive:Ht&&y.emissiveMap.isVideoTexture===!0&&pe.getTransfer(y.emissiveMap.colorSpace)===be,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ln,flipSided:y.side===Qe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ht&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&y.extensions.multiDraw===!0||Z)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Bt.vertexUv1s=l.has(1),Bt.vertexUv2s=l.has(2),Bt.vertexUv3s=l.has(3),l.clear(),Bt}function p(y){let b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(let C in y.defines)b.push(C),b.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(g(b,y),E(b,y),b.push(i.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function g(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numSunLights),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numSunLightShadows),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function E(y,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function R(y){let b=d[y.type],C;if(b){let P=fi[b];C=nd.clone(P.uniforms)}else C=y.uniforms;return C}function x(y,b){let C=h.get(b);return C!==void 0?++C.usedTimes:(C=new R_(i,b,y,s),c.push(C),h.set(b,C)),C}function M(y){if(--y.usedTimes===0){let b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function v(y){a.remove(y)}function w(){a.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:R,acquireProgram:x,releaseProgram:M,releaseShaderCache:v,programs:c,dispose:w}}function L_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function D_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Sd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function bd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,m,_,p,g){let E=i[t];return E===void 0?(E={id:f.id,object:f,geometry:d,material:m,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:p,group:g},i[t]=E):(E.id=f.id,E.object=f,E.geometry=d,E.material=m,E.materialVariant=o(f),E.groupOrder=_,E.renderOrder=f.renderOrder,E.z=p,E.group=g),t++,E}function l(f,d,m,_,p,g,E){E.reversedDepth===!0&&(p=-p);let R=a(f,d,m,_,p,g);m.transmission>0?n.push(R):m.transparent===!0?s.push(R):e.push(R)}function c(f,d,m,_,p,g){let E=a(f,d,m,_,p,g);m.transmission>0?n.unshift(E):m.transparent===!0?s.unshift(E):e.unshift(E)}function h(f,d){e.length>1&&e.sort(f||D_),n.length>1&&n.sort(d||Sd),s.length>1&&s.sort(d||Sd)}function u(){for(let f=t,d=i.length;f<d;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function N_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new bd,i.set(n,[o])):s>=r.length?(o=new bd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function U_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new z,color:new Ut};break;case"SpotLight":e={position:new z,direction:new z,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function z_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var F_=0;function O_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function B_(i){let t=new U_,e=z_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let s=new z,r=new ve,o=new ve;function a(c){let h=0,u=0,f=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let d=0,m=0,_=0,p=0,g=0,E=0,R=0,x=0,M=0,v=0,w=0,y=0,b=0,C=0;c.sort(O_);for(let D=0,N=c.length;D<N;D++){let A=c[D],I=A.color,U=A.intensity,O=A.distance,tt=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===Ji?tt=A.shadow.map.texture:tt=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)h+=I.r*U,u+=I.g*U,f+=I.b*U;else if(A.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(A.sh.coefficients[G],U);C++}else if(A.isSunLight){let G=t.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let K=A.shadow,J=e.get(A);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[m]=J,n.sunShadowMap[m]=tt;let vt=K.getViewportCount();for(let yt=0;yt<vt;yt++)n.sunShadowMatrix[_+yt]=K.getMatrix(yt),n.sunShadowCascade[_+yt]=K._cascadeData[yt];_+=vt,m++}n.sun[d]=G,d++}else if(A.isDirectionalLight){let G=t.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let K=A.shadow,J=e.get(A);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,n.directionalShadow[p]=J,n.directionalShadowMap[p]=tt,n.directionalShadowMatrix[p]=A.shadow.matrix,M++}n.directional[p]=G,p++}else if(A.isSpotLight){let G=t.get(A);G.position.setFromMatrixPosition(A.matrixWorld),G.color.copy(I).multiplyScalar(U),G.distance=O,G.coneCos=Math.cos(A.angle),G.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),G.decay=A.decay,n.spot[E]=G;let K=A.shadow;if(A.map&&(n.spotLightMap[y]=A.map,y++,K.updateMatrices(A),A.castShadow&&b++),n.spotLightMatrix[E]=K.matrix,A.castShadow){let J=e.get(A);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,n.spotShadow[E]=J,n.spotShadowMap[E]=tt,w++}E++}else if(A.isRectAreaLight){let G=t.get(A);G.color.copy(I).multiplyScalar(U),G.halfWidth.set(A.width*.5,0,0),G.halfHeight.set(0,A.height*.5,0),n.rectArea[R]=G,R++}else if(A.isPointLight){let G=t.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),G.distance=A.distance,G.decay=A.decay,A.castShadow){let K=A.shadow,J=e.get(A);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,J.shadowCameraNear=K.camera.near,J.shadowCameraFar=K.camera.far,n.pointShadow[g]=J,n.pointShadowMap[g]=tt,n.pointShadowMatrix[g]=A.shadow.matrix,v++}n.point[g]=G,g++}else if(A.isHemisphereLight){let G=t.get(A);G.skyColor.copy(A.color).multiplyScalar(U),G.groundColor.copy(A.groundColor).multiplyScalar(U),n.hemi[x]=G,x++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let P=n.hash;(P.sunLength!==d||P.directionalLength!==p||P.pointLength!==g||P.spotLength!==E||P.rectAreaLength!==R||P.hemiLength!==x||P.numSunShadows!==m||P.numDirectionalShadows!==M||P.numPointShadows!==v||P.numSpotShadows!==w||P.numSpotMaps!==y||P.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=p,n.spot.length=E,n.rectArea.length=R,n.point.length=g,n.hemi.length=x,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.pointShadowMatrix.length=v,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+y-b,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=C,P.sunLength=d,P.directionalLength=p,P.pointLength=g,P.spotLength=E,P.rectAreaLength=R,P.hemiLength=x,P.numSunShadows=m,P.numDirectionalShadows=M,P.numPointShadows=v,P.numSpotShadows=w,P.numSpotMaps=y,P.numLightProbes=C,n.version=F_++)}function l(c,h){let u=0,f=0,d=0,m=0,_=0,p=0,g=h.matrixWorldInverse;for(let E=0,R=c.length;E<R;E++){let x=c[E];if(x.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(g),u++}else if(x.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),f++}else if(x.isSpotLight){let M=n.spot[m];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),m++}else if(x.isRectAreaLight){let M=n.rectArea[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),o.identity(),r.copy(x.matrixWorld),r.premultiply(g),o.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){let M=n.hemi[p];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:n}}function Ed(i){let t=new B_(i),e=[],n=[],s=[];function r(f){u.camera=f,e.length=0,n.length=0,s.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function l(f){s.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function k_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Ed(i),t.set(s,[a])):r>=o.length?(a=new Ed(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var H_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G_=`uniform sampler2D shadow_pass;
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
}`,V_=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],W_=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],wd=new ve,To=new z,Xh=new z;function X_(i,t,e){let n=new tr,s=new xt,r=new xt,o=new Ue,a=new Xa,l=new Ya,c={},h=e.maxTextureSize,u={[Xi]:Qe,[Qe]:Xi,[ln]:ln},f=new Je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:H_,fragmentShader:G_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new Oe;m.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new st(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=po;let g=this.type;this.render=function(v,w,y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||v.length===0)return;this.type===ol&&($t("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=po);let b=i.getRenderTarget(),C=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),D=i.state;D.setBlending(hi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let N=g!==this.type;N&&w.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(I=>I.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,I=v.length;A<I;A++){let U=v[A],O=U.shadow;if(O===void 0){$t("WebGLShadowMap:",U,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let tt=O.getFrameExtents();s.multiply(tt),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/tt.x),s.x=r.x*tt.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/tt.y),s.y=r.y*tt.y,O.mapSize.y=r.y));let G=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=G,O.map===null||N===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===ar){if(U.isPointLight){$t("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new bn(s.x,s.y,{format:Ji,type:jn,minFilter:an,magFilter:an,generateMipmaps:!1}),O.map.texture.name=U.name+".shadowMap",O.map.depthTexture=new Oi(s.x,s.y,Un),O.map.depthTexture.name=U.name+".shadowMapDepth",O.map.depthTexture.format=ai,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=rn,O.map.depthTexture.magFilter=rn}else U.isPointLight?(O.map=new jl(s.x),O.map.depthTexture=new Fa(s.x,Kn)):(O.map=new bn(s.x,s.y),O.map.depthTexture=new Oi(s.x,s.y,Kn)),O.map.depthTexture.name=U.name+".shadowMap",O.map.depthTexture.format=ai,this.type===po?(O.map.depthTexture.compareFunction=G?$l:Zl,O.map.depthTexture.minFilter=an,O.map.depthTexture.magFilter=an):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=rn,O.map.depthTexture.magFilter=rn);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let K=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();U.isPointLight!==!0&&O.updateMatrices(U,y);for(let J=0;J<K;J++){let vt=O.getCamera(J);if(U.isPointLight){let yt=O.camera,ee=O.matrix,Qt=U.distance||yt.far;Qt!==yt.far&&(yt.far=Qt,yt.updateProjectionMatrix()),To.setFromMatrixPosition(U.matrixWorld),yt.position.copy(To),Xh.copy(yt.position),Xh.add(V_[J]),yt.up.copy(W_[J]),yt.lookAt(Xh),yt.updateMatrixWorld(),ee.makeTranslation(-To.x,-To.y,-To.z),wd.multiplyMatrices(yt.projectionMatrix,yt.matrixWorldInverse),O._frustum.setFromProjectionMatrix(wd,yt.coordinateSystem,yt.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,J),i.clear();else{J===0&&(i.setRenderTarget(O.map),i.clear());let yt=O.getViewport(J);o.set(r.x*yt.x,r.y*yt.y,r.x*yt.z,r.y*yt.w),D.viewport(o)}n=O.getFrustum(J),x(w,y,vt,U,this.type)}O.isPointLightShadow!==!0&&this.type===ar&&E(O,y),O.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(b,C,P)};function E(v,w){let y=t.update(_);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,d.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),v.mapPass===null?v.mapPass=new bn(s.x,s.y,{format:Ji,type:jn}):(v.mapPass.width!==v.map.width||v.mapPass.height!==v.map.height)&&v.mapPass.setSize(v.map.width,v.map.height),f.uniforms.shadow_pass.value=v.map.depthTexture,f.uniforms.resolution.value.set(v.map.width,v.map.height),f.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(w,null,y,f,_,null),d.uniforms.shadow_pass.value=v.mapPass.texture,d.uniforms.resolution.value.set(v.map.width,v.map.height),d.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(w,null,y,d,_,null)}function R(v,w,y,b){let C=null,P=y.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(P!==void 0)C=P;else if(C=y.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let D=C.uuid,N=w.uuid,A=c[D];A===void 0&&(A={},c[D]=A);let I=A[N];I===void 0&&(I=C.clone(),A[N]=I,w.addEventListener("dispose",M)),C=I}if(C.visible=w.visible,C.wireframe=w.wireframe,b===ar?C.side=w.shadowSide!==null?w.shadowSide:w.side:C.side=w.shadowSide!==null?w.shadowSide:u[w.side],C.alphaMap=w.alphaMap,C.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,C.map=w.map,C.clipShadows=w.clipShadows,C.clippingPlanes=w.clippingPlanes,C.clipIntersection=w.clipIntersection,C.displacementMap=w.displacementMap,C.displacementScale=w.displacementScale,C.displacementBias=w.displacementBias,C.wireframeLinewidth=w.wireframeLinewidth,C.linewidth=w.linewidth,y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let D=i.properties.get(C);D.light=y}return C}function x(v,w,y,b,C){if(v.visible===!1)return;if(v.layers.test(w.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&C===ar)&&(!v.frustumCulled||v.intersectsFrustum(n))){v.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,v.matrixWorld);let N=t.update(v),A=v.material;if(Array.isArray(A)){let I=N.groups;for(let U=0,O=I.length;U<O;U++){let tt=I[U],G=A[tt.materialIndex];if(G&&G.visible){let K=R(v,G,b,C);v.onBeforeShadow(i,v,w,y,N,K,tt),i.renderBufferDirect(y,null,N,K,v,tt),v.onAfterShadow(i,v,w,y,N,K,tt)}}}else if(A.visible){let I=R(v,A,b,C);v.onBeforeShadow(i,v,w,y,N,I,null),i.renderBufferDirect(y,null,N,I,v,null),v.onAfterShadow(i,v,w,y,N,I,null)}}let D=v.children;for(let N=0,A=D.length;N<A;N++)x(D[N],w,y,b,C)}function M(v){v.target.removeEventListener("dispose",M);for(let y in c){let b=c[y],C=v.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function Y_(i,t){function e(){let H=!1,bt=new Ue,rt=null,Et=new Ue(0,0,0,0);return{setMask:function(Pt){rt!==Pt&&!H&&(i.colorMask(Pt,Pt,Pt,Pt),rt=Pt)},setLocked:function(Pt){H=Pt},setClear:function(Pt,ht,Xt,Bt,Le){Le===!0&&(Pt*=Bt,ht*=Bt,Xt*=Bt),bt.set(Pt,ht,Xt,Bt),Et.equals(bt)===!1&&(i.clearColor(Pt,ht,Xt,Bt),Et.copy(bt))},reset:function(){H=!1,rt=null,Et.set(-1,0,0,0)}}}function n(){let H=!1,bt=!1,rt=null,Et=null,Pt=null;return{setReversed:function(ht){if(bt!==ht){let Xt=t.get("EXT_clip_control");ht?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),bt=ht;let Bt=Pt;Pt=null,this.setClear(Bt)}},getReversed:function(){return bt},setTest:function(ht){ht?W(i.DEPTH_TEST):lt(i.DEPTH_TEST)},setMask:function(ht){rt!==ht&&!H&&(i.depthMask(ht),rt=ht)},setFunc:function(ht){if(bt&&(ht=$f[ht]),Et!==ht){switch(ht){case wa:i.depthFunc(i.NEVER);break;case Ta:i.depthFunc(i.ALWAYS);break;case Aa:i.depthFunc(i.LESS);break;case Vs:i.depthFunc(i.LEQUAL);break;case Ra:i.depthFunc(i.EQUAL);break;case Ca:i.depthFunc(i.GEQUAL);break;case Ia:i.depthFunc(i.GREATER);break;case Pa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Et=ht}},setLocked:function(ht){H=ht},setClear:function(ht){Pt!==ht&&(Pt=ht,bt&&(ht=1-ht),i.clearDepth(ht))},reset:function(){H=!1,rt=null,Et=null,Pt=null,bt=!1}}}function s(){let H=!1,bt=null,rt=null,Et=null,Pt=null,ht=null,Xt=null,Bt=null,Le=null;return{setTest:function(Me){H||(Me?W(i.STENCIL_TEST):lt(i.STENCIL_TEST))},setMask:function(Me){bt!==Me&&!H&&(i.stencilMask(Me),bt=Me)},setFunc:function(Me,Gn,ni){(rt!==Me||Et!==Gn||Pt!==ni)&&(i.stencilFunc(Me,Gn,ni),rt=Me,Et=Gn,Pt=ni)},setOp:function(Me,Gn,ni){(ht!==Me||Xt!==Gn||Bt!==ni)&&(i.stencilOp(Me,Gn,ni),ht=Me,Xt=Gn,Bt=ni)},setLocked:function(Me){H=Me},setClear:function(Me){Le!==Me&&(i.clearStencil(Me),Le=Me)},reset:function(){H=!1,bt=null,rt=null,Et=null,Pt=null,ht=null,Xt=null,Bt=null,Le=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,m=[],_=null,p=!1,g=null,E=null,R=null,x=null,M=null,v=null,w=null,y=new Ut(0,0,0),b=0,C=!1,P=null,D=null,N=null,A=null,I=null,U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,tt=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(G)[1]),O=tt>=1):G.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),O=tt>=2);let K=null,J={},vt=i.getParameter(i.SCISSOR_BOX),yt=i.getParameter(i.VIEWPORT),ee=new Ue().fromArray(vt),Qt=new Ue().fromArray(yt);function j(H,bt,rt,Et){let Pt=new Uint8Array(4),ht=i.createTexture();i.bindTexture(H,ht),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<rt;Xt++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(bt,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,Pt):i.texImage2D(bt+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pt);return ht}let B={};B[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),B[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),B[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),W(i.DEPTH_TEST),o.setFunc(Vs),ft(!1),mt(ch),W(i.CULL_FACE),ot(hi);function W(H){h[H]!==!0&&(i.enable(H),h[H]=!0)}function lt(H){h[H]!==!1&&(i.disable(H),h[H]=!1)}function At(H,bt){return f[H]!==bt?(i.bindFramebuffer(H,bt),f[H]=bt,H===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=bt),H===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=bt),!0):!1}function Z(H,bt){let rt=m,Et=!1;if(H){rt=d.get(bt),rt===void 0&&(rt=[],d.set(bt,rt));let Pt=H.textures;if(rt.length!==Pt.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Xt=Pt.length;ht<Xt;ht++)rt[ht]=i.COLOR_ATTACHMENT0+ht;rt.length=Pt.length,Et=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,Et=!0);Et&&i.drawBuffers(rt)}function pt(H){return _!==H?(i.useProgram(H),_=H,!0):!1}let Ot={[fs]:i.FUNC_ADD,[xf]:i.FUNC_SUBTRACT,[yf]:i.FUNC_REVERSE_SUBTRACT};Ot[_f]=i.MIN,Ot[vf]=i.MAX;let q={[Mf]:i.ZERO,[Sf]:i.ONE,[bf]:i.SRC_COLOR,[fh]:i.SRC_ALPHA,[Cf]:i.SRC_ALPHA_SATURATE,[Af]:i.DST_COLOR,[wf]:i.DST_ALPHA,[Ef]:i.ONE_MINUS_SRC_COLOR,[dh]:i.ONE_MINUS_SRC_ALPHA,[Rf]:i.ONE_MINUS_DST_COLOR,[Tf]:i.ONE_MINUS_DST_ALPHA,[If]:i.CONSTANT_COLOR,[Pf]:i.ONE_MINUS_CONSTANT_COLOR,[Lf]:i.CONSTANT_ALPHA,[Df]:i.ONE_MINUS_CONSTANT_ALPHA};function ot(H,bt,rt,Et,Pt,ht,Xt,Bt,Le,Me){if(H===hi){p===!0&&(lt(i.BLEND),p=!1);return}if(p===!1&&(W(i.BLEND),p=!0),H!==gf){if(H!==g||Me!==C){if((E!==fs||M!==fs)&&(i.blendEquation(i.FUNC_ADD),E=fs,M=fs),Me)switch(H){case Yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ei:i.blendFunc(i.ONE,i.ONE);break;case hh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Jt("WebGLState: Invalid blending: ",H);break}else switch(H){case Yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ei:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case hh:Jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uh:Jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Jt("WebGLState: Invalid blending: ",H);break}R=null,x=null,v=null,w=null,y.set(0,0,0),b=0,g=H,C=Me}return}Pt=Pt||bt,ht=ht||rt,Xt=Xt||Et,(bt!==E||Pt!==M)&&(i.blendEquationSeparate(Ot[bt],Ot[Pt]),E=bt,M=Pt),(rt!==R||Et!==x||ht!==v||Xt!==w)&&(i.blendFuncSeparate(q[rt],q[Et],q[ht],q[Xt]),R=rt,x=Et,v=ht,w=Xt),(Bt.equals(y)===!1||Le!==b)&&(i.blendColor(Bt.r,Bt.g,Bt.b,Le),y.copy(Bt),b=Le),g=H,C=!1}function ct(H,bt){H.side===ln?lt(i.CULL_FACE):W(i.CULL_FACE);let rt=H.side===Qe;bt&&(rt=!rt),ft(rt),H.blending===Yi&&H.transparent===!1?ot(hi):ot(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let Et=H.stencilWrite;a.setTest(Et),Et&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ht(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?W(i.SAMPLE_ALPHA_TO_COVERAGE):lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ft(H){P!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),P=H)}function mt(H){H!==pf?(W(i.CULL_FACE),H!==D&&(H===ch?i.cullFace(i.BACK):H===mf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):lt(i.CULL_FACE),D=H}function Yt(H){H!==N&&(O&&i.lineWidth(H),N=H)}function Ht(H,bt,rt){H?(W(i.POLYGON_OFFSET_FILL),(A!==bt||I!==rt)&&(A=bt,I=rt,o.getReversed()&&(bt=-bt),i.polygonOffset(bt,rt))):lt(i.POLYGON_OFFSET_FILL)}function qt(H){H?W(i.SCISSOR_TEST):lt(i.SCISSOR_TEST)}function te(H){H===void 0&&(H=i.TEXTURE0+U-1),K!==H&&(i.activeTexture(H),K=H)}function F(H,bt,rt){rt===void 0&&(K===null?rt=i.TEXTURE0+U-1:rt=K);let Et=J[rt];Et===void 0&&(Et={type:void 0,texture:void 0},J[rt]=Et),(Et.type!==H||Et.texture!==bt)&&(K!==rt&&(i.activeTexture(rt),K=rt),i.bindTexture(H,bt||B[H]),Et.type=H,Et.texture=bt)}function me(){let H=J[K];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function le(){try{i.compressedTexImage2D(...arguments)}catch(H){Jt("WebGLState:",H)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(H){Jt("WebGLState:",H)}}function S(){try{i.texSubImage2D(...arguments)}catch(H){Jt("WebGLState:",H)}}function V(){try{i.texSubImage3D(...arguments)}catch(H){Jt("WebGLState:",H)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(H){Jt("WebGLState:",H)}}function nt(){try{i.compressedTexSubImage3D(...arguments)}catch(H){Jt("WebGLState:",H)}}function gt(){try{i.texStorage2D(...arguments)}catch(H){Jt("WebGLState:",H)}}function _t(){try{i.texStorage3D(...arguments)}catch(H){Jt("WebGLState:",H)}}function it(){try{i.texImage2D(...arguments)}catch(H){Jt("WebGLState:",H)}}function at(){try{i.texImage3D(...arguments)}catch(H){Jt("WebGLState:",H)}}function Mt(H){return u[H]!==void 0?u[H]:i.getParameter(H)}function Gt(H,bt){u[H]!==bt&&(i.pixelStorei(H,bt),u[H]=bt)}function wt(H){ee.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),ee.copy(H))}function St(H){Qt.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),Qt.copy(H))}function Vt(H,bt){let rt=c.get(bt);rt===void 0&&(rt=new WeakMap,c.set(bt,rt));let Et=rt.get(H);Et===void 0&&(Et=i.getUniformBlockIndex(bt,H.name),rt.set(H,Et))}function Zt(H,bt){let Et=c.get(bt).get(H);l.get(bt)!==Et&&(i.uniformBlockBinding(bt,Et,H.__bindingPointIndex),l.set(bt,Et))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},K=null,J={},f={},d=new WeakMap,m=[],_=null,p=!1,g=null,E=null,R=null,x=null,M=null,v=null,w=null,y=new Ut(0,0,0),b=0,C=!1,P=null,D=null,N=null,A=null,I=null,ee.set(0,0,i.canvas.width,i.canvas.height),Qt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:W,disable:lt,bindFramebuffer:At,drawBuffers:Z,useProgram:pt,setBlending:ot,setMaterial:ct,setFlipSided:ft,setCullFace:mt,setLineWidth:Yt,setPolygonOffset:Ht,setScissorTest:qt,activeTexture:te,bindTexture:F,unbindTexture:me,compressedTexImage2D:le,compressedTexImage3D:L,texImage2D:it,texImage3D:at,pixelStorei:Gt,getParameter:Mt,updateUBOMapping:Vt,uniformBlockBinding:Zt,texStorage2D:gt,texStorage3D:_t,texSubImage2D:S,texSubImage3D:V,compressedTexSubImage2D:$,compressedTexSubImage3D:nt,scissor:wt,viewport:St,reset:re}}function q_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xt,h=new WeakMap,u=new Set,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,S){return m?new OffscreenCanvas(L,S):kr("canvas")}function p(L,S,V){let $=1,nt=le(L);if((nt.width>V||nt.height>V)&&($=V/Math.max(nt.width,nt.height)),$<1)if(typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&L instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&L instanceof ImageBitmap||typeof VideoFrame!="undefined"&&L instanceof VideoFrame){let gt=Math.floor($*nt.width),_t=Math.floor($*nt.height);f===void 0&&(f=_(gt,_t));let it=S?_(gt,_t):f;return it.width=gt,it.height=_t,it.getContext("2d").drawImage(L,0,0,gt,_t),$t("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+gt+"x"+_t+")."),it}else return"data"in L&&$t("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),L;return L}function g(L){return L.generateMipmaps}function E(L){i.generateMipmap(L)}function R(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(L,S,V,$,nt,gt=!1){if(L!==null){if(i[L]!==void 0)return i[L];$t("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let _t;$&&(_t=t.get("EXT_texture_norm16"),_t||$t("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=S;if(S===i.RED&&(V===i.FLOAT&&(it=i.R32F),V===i.HALF_FLOAT&&(it=i.R16F),V===i.UNSIGNED_BYTE&&(it=i.R8),V===i.UNSIGNED_SHORT&&_t&&(it=_t.R16_EXT),V===i.SHORT&&_t&&(it=_t.R16_SNORM_EXT)),S===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(it=i.R8UI),V===i.UNSIGNED_SHORT&&(it=i.R16UI),V===i.UNSIGNED_INT&&(it=i.R32UI),V===i.BYTE&&(it=i.R8I),V===i.SHORT&&(it=i.R16I),V===i.INT&&(it=i.R32I)),S===i.RG&&(V===i.FLOAT&&(it=i.RG32F),V===i.HALF_FLOAT&&(it=i.RG16F),V===i.UNSIGNED_BYTE&&(it=i.RG8),V===i.UNSIGNED_SHORT&&_t&&(it=_t.RG16_EXT),V===i.SHORT&&_t&&(it=_t.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(it=i.RG8UI),V===i.UNSIGNED_SHORT&&(it=i.RG16UI),V===i.UNSIGNED_INT&&(it=i.RG32UI),V===i.BYTE&&(it=i.RG8I),V===i.SHORT&&(it=i.RG16I),V===i.INT&&(it=i.RG32I)),S===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(it=i.RGB8UI),V===i.UNSIGNED_SHORT&&(it=i.RGB16UI),V===i.UNSIGNED_INT&&(it=i.RGB32UI),V===i.BYTE&&(it=i.RGB8I),V===i.SHORT&&(it=i.RGB16I),V===i.INT&&(it=i.RGB32I)),S===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),V===i.UNSIGNED_INT&&(it=i.RGBA32UI),V===i.BYTE&&(it=i.RGBA8I),V===i.SHORT&&(it=i.RGBA16I),V===i.INT&&(it=i.RGBA32I)),S===i.RGB&&(V===i.UNSIGNED_SHORT&&_t&&(it=_t.RGB16_EXT),V===i.SHORT&&_t&&(it=_t.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(it=i.R11F_G11F_B10F)),S===i.RGBA){let at=gt?Br:pe.getTransfer(nt);V===i.FLOAT&&(it=i.RGBA32F),V===i.HALF_FLOAT&&(it=i.RGBA16F),V===i.UNSIGNED_BYTE&&(it=at===be?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&_t&&(it=_t.RGBA16_EXT),V===i.SHORT&&_t&&(it=_t.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function M(L,S){let V;return L?S===null||S===Kn||S===hr?V=i.DEPTH24_STENCIL8:S===Un?V=i.DEPTH32F_STENCIL8:S===cr&&(V=i.DEPTH24_STENCIL8,$t("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Kn||S===hr?V=i.DEPTH_COMPONENT24:S===Un?V=i.DEPTH_COMPONENT32F:S===cr&&(V=i.DEPTH_COMPONENT16),V}function v(L,S){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==rn&&L.minFilter!==an?Math.log2(Math.max(S.width,S.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?S.mipmaps.length:1}function w(L){let S=L.target;S.removeEventListener("dispose",w),b(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&u.delete(S)}function y(L){let S=L.target;S.removeEventListener("dispose",y),P(S)}function b(L){let S=n.get(L);if(S.__webglInit===void 0)return;let V=L.source,$=d.get(V);if($){let nt=$[S.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&C(L),Object.keys($).length===0&&d.delete(V)}n.remove(L)}function C(L){let S=n.get(L);i.deleteTexture(S.__webglTexture);let V=L.source,$=d.get(V);delete $[S.__cacheKey],o.memory.textures--}function P(L){let S=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let nt=0;nt<S.__webglFramebuffer[$].length;nt++)i.deleteFramebuffer(S.__webglFramebuffer[$][nt]);else i.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)i.deleteFramebuffer(S.__webglFramebuffer[$]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let V=L.textures;for(let $=0,nt=V.length;$<nt;$++){let gt=n.get(V[$]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove(V[$])}n.remove(L)}let D=0;function N(){D=0}function A(){return D}function I(L){D=L}function U(){let L=D;return L>=s.maxTextures&&$t("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,L}function O(L){let S=[];return S.push(L.wrapS),S.push(L.wrapT),S.push(L.wrapR||0),S.push(L.magFilter),S.push(L.minFilter),S.push(L.anisotropy),S.push(L.internalFormat),S.push(L.format),S.push(L.type),S.push(L.generateMipmaps),S.push(L.premultiplyAlpha),S.push(L.flipY),S.push(L.unpackAlignment),S.push(L.colorSpace),S.join()}function tt(L,S){let V=n.get(L);if(L.isVideoTexture&&F(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&V.__version!==L.version){let $=L.image;if($===null)$t("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)$t("WebGLRenderer: Texture marked for update but image is incomplete");else{lt(V,L,S);return}}else L.isExternalTexture&&(V.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+S)}function G(L,S){let V=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){lt(V,L,S);return}else L.isExternalTexture&&(V.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+S)}function K(L,S){let V=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){lt(V,L,S);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+S)}function J(L,S){let V=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&V.__version!==L.version){At(V,L,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+S)}let vt={[Ws]:i.REPEAT,[ri]:i.CLAMP_TO_EDGE,[La]:i.MIRRORED_REPEAT},yt={[rn]:i.NEAREST,[zf]:i.NEAREST_MIPMAP_NEAREST,[go]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[hl]:i.LINEAR_MIPMAP_NEAREST,[Zi]:i.LINEAR_MIPMAP_LINEAR},ee={[kf]:i.NEVER,[Xf]:i.ALWAYS,[Hf]:i.LESS,[Zl]:i.LEQUAL,[Gf]:i.EQUAL,[$l]:i.GEQUAL,[Vf]:i.GREATER,[Wf]:i.NOTEQUAL};function Qt(L,S){if(S.type===Un&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===an||S.magFilter===hl||S.magFilter===go||S.magFilter===Zi||S.minFilter===an||S.minFilter===hl||S.minFilter===go||S.minFilter===Zi)&&$t("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,vt[S.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,vt[S.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,vt[S.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,yt[S.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,yt[S.minFilter]),S.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,ee[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===rn||S.minFilter!==go&&S.minFilter!==Zi||S.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function j(L,S){let V=!1;L.__webglInit===void 0&&(L.__webglInit=!0,S.addEventListener("dispose",w));let $=S.source,nt=d.get($);nt===void 0&&(nt={},d.set($,nt));let gt=O(S);if(gt!==L.__cacheKey){nt[gt]===void 0&&(nt[gt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),nt[gt].usedTimes++;let _t=nt[L.__cacheKey];_t!==void 0&&(nt[L.__cacheKey].usedTimes--,_t.usedTimes===0&&C(S)),L.__cacheKey=gt,L.__webglTexture=nt[gt].texture}return V}function B(L,S,V){return Math.floor(Math.floor(L/V)/S)}function W(L,S,V,$){let gt=L.updateRanges;if(gt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,V,$,S.data);else{gt.sort((Gt,wt)=>Gt.start-wt.start);let _t=0;for(let Gt=1;Gt<gt.length;Gt++){let wt=gt[_t],St=gt[Gt],Vt=wt.start+wt.count,Zt=B(St.start,S.width,4),re=B(wt.start,S.width,4);St.start<=Vt+1&&Zt===re&&B(St.start+St.count-1,S.width,4)===Zt?wt.count=Math.max(wt.count,St.start+St.count-wt.start):(++_t,gt[_t]=St)}gt.length=_t+1;let it=e.getParameter(i.UNPACK_ROW_LENGTH),at=e.getParameter(i.UNPACK_SKIP_PIXELS),Mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let Gt=0,wt=gt.length;Gt<wt;Gt++){let St=gt[Gt],Vt=Math.floor(St.start/4),Zt=Math.ceil(St.count/4),re=Vt%S.width,H=Math.floor(Vt/S.width),bt=Zt,rt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,re),e.pixelStorei(i.UNPACK_SKIP_ROWS,H),e.texSubImage2D(i.TEXTURE_2D,0,re,H,bt,rt,V,$,S.data)}L.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,it),e.pixelStorei(i.UNPACK_SKIP_PIXELS,at),e.pixelStorei(i.UNPACK_SKIP_ROWS,Mt)}}function lt(L,S,V){let $=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=i.TEXTURE_3D);let nt=j(L,S),gt=S.source;e.bindTexture($,L.__webglTexture,i.TEXTURE0+V);let _t=n.get(gt);if(gt.version!==_t.__version||nt===!0){if(e.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap!="undefined"&&S.image instanceof ImageBitmap)===!1){let rt=pe.getPrimaries(pe.workingColorSpace),Et=S.colorSpace===wi?null:pe.getPrimaries(S.colorSpace),Pt=S.colorSpace===wi||rt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt)}e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let at=p(S.image,!1,s.maxTextureSize);at=me(S,at);let Mt=r.convert(S.format,S.colorSpace),Gt=r.convert(S.type),wt=x(S.internalFormat,Mt,Gt,S.normalized,S.colorSpace,S.isVideoTexture);Qt($,S);let St,Vt=S.mipmaps,Zt=S.isVideoTexture!==!0,re=_t.__version===void 0||nt===!0,H=gt.dataReady,bt=v(S,at);if(S.isDepthTexture)wt=M(S.format===$i,S.type),re&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,wt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,wt,at.width,at.height,0,Mt,Gt,null));else if(S.isDataTexture)if(Vt.length>0){Zt&&re&&e.texStorage2D(i.TEXTURE_2D,bt,wt,Vt[0].width,Vt[0].height);for(let rt=0,Et=Vt.length;rt<Et;rt++)St=Vt[rt],Zt?H&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,St.width,St.height,Mt,Gt,St.data):e.texImage2D(i.TEXTURE_2D,rt,wt,St.width,St.height,0,Mt,Gt,St.data);S.generateMipmaps=!1}else Zt?(re&&e.texStorage2D(i.TEXTURE_2D,bt,wt,at.width,at.height),H&&W(S,at,Mt,Gt)):e.texImage2D(i.TEXTURE_2D,0,wt,at.width,at.height,0,Mt,Gt,at.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Zt&&re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,wt,Vt[0].width,Vt[0].height,at.depth);for(let rt=0,Et=Vt.length;rt<Et;rt++)if(St=Vt[rt],S.format!==zn)if(Mt!==null)if(Zt){if(H)if(S.layerUpdates.size>0){let Pt=Nh(St.width,St.height,S.format,S.type);for(let ht of S.layerUpdates){let Xt=St.data.subarray(ht*Pt/St.data.BYTES_PER_ELEMENT,(ht+1)*Pt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,ht,St.width,St.height,1,Mt,Xt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,St.width,St.height,at.depth,Mt,St.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,wt,St.width,St.height,at.depth,0,St.data,0,0);else $t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?H&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,St.width,St.height,at.depth,Mt,Gt,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,wt,St.width,St.height,at.depth,0,Mt,Gt,St.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Zt&&re&&e.texStorage2D(i.TEXTURE_2D,bt,wt,Vt[0].width,Vt[0].height);for(let rt=0,Et=Vt.length;rt<Et;rt++)St=Vt[rt],S.format!==zn?Mt!==null?Zt?H&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,St.width,St.height,Mt,St.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,wt,St.width,St.height,0,St.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?H&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,St.width,St.height,Mt,Gt,St.data):e.texImage2D(i.TEXTURE_2D,rt,wt,St.width,St.height,0,Mt,Gt,St.data)}else if(S.isDataArrayTexture)if(Zt){if(re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,wt,at.width,at.height,at.depth),H)if(S.layerUpdates.size>0){let rt=Nh(at.width,at.height,S.format,S.type);for(let Et of S.layerUpdates){let Pt=at.data.subarray(Et*rt/at.data.BYTES_PER_ELEMENT,(Et+1)*rt/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Et,at.width,at.height,1,Mt,Gt,Pt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,Mt,Gt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,wt,at.width,at.height,at.depth,0,Mt,Gt,at.data);else if(S.isData3DTexture)Zt?(re&&e.texStorage3D(i.TEXTURE_3D,bt,wt,at.width,at.height,at.depth),H&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,Mt,Gt,at.data)):e.texImage3D(i.TEXTURE_3D,0,wt,at.width,at.height,at.depth,0,Mt,Gt,at.data);else if(S.isFramebufferTexture){if(re)if(Zt)e.texStorage2D(i.TEXTURE_2D,bt,wt,at.width,at.height);else{let rt=at.width,Et=at.height;for(let Pt=0;Pt<bt;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,wt,rt,Et,0,Mt,Gt,null),rt>>=1,Et>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let rt=i.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),at.parentNode!==rt){rt.appendChild(at),u.add(S),rt.onpaint=Et=>{let Pt=Et.changedElements;for(let ht of u)Pt.includes(ht.image)&&(ht.needsUpdate=!0)},rt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,at);else{let Pt=i.RGBA,ht=i.RGBA,Xt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Pt,ht,Xt,at)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Vt.length>0){if(Zt&&re){let rt=le(Vt[0]);e.texStorage2D(i.TEXTURE_2D,bt,wt,rt.width,rt.height)}for(let rt=0,Et=Vt.length;rt<Et;rt++)St=Vt[rt],Zt?H&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Mt,Gt,St):e.texImage2D(i.TEXTURE_2D,rt,wt,Mt,Gt,St);S.generateMipmaps=!1}else if(Zt){if(re){let rt=le(at);e.texStorage2D(i.TEXTURE_2D,bt,wt,rt.width,rt.height)}H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,Gt,at)}else e.texImage2D(i.TEXTURE_2D,0,wt,Mt,Gt,at);g(S)&&E($),_t.__version=gt.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function At(L,S,V){if(S.image.length!==6)return;let $=j(L,S),nt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+V);let gt=n.get(nt);if(nt.version!==gt.__version||$===!0){e.activeTexture(i.TEXTURE0+V);let _t=pe.getPrimaries(pe.workingColorSpace),it=S.colorSpace===wi?null:pe.getPrimaries(S.colorSpace),at=S.colorSpace===wi||_t===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let Mt=S.isCompressedTexture||S.image[0].isCompressedTexture,Gt=S.image[0]&&S.image[0].isDataTexture,wt=[];for(let ht=0;ht<6;ht++)!Mt&&!Gt?wt[ht]=p(S.image[ht],!0,s.maxCubemapSize):wt[ht]=Gt?S.image[ht].image:S.image[ht],wt[ht]=me(S,wt[ht]);let St=wt[0],Vt=r.convert(S.format,S.colorSpace),Zt=r.convert(S.type),re=x(S.internalFormat,Vt,Zt,S.normalized,S.colorSpace),H=S.isVideoTexture!==!0,bt=gt.__version===void 0||$===!0,rt=nt.dataReady,Et=v(S,St);Qt(i.TEXTURE_CUBE_MAP,S);let Pt;if(Mt){H&&bt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,re,St.width,St.height);for(let ht=0;ht<6;ht++){Pt=wt[ht].mipmaps;for(let Xt=0;Xt<Pt.length;Xt++){let Bt=Pt[Xt];S.format!==zn?Vt!==null?H?rt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Xt,0,0,Bt.width,Bt.height,Vt,Bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Xt,re,Bt.width,Bt.height,0,Bt.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Xt,0,0,Bt.width,Bt.height,Vt,Zt,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Xt,re,Bt.width,Bt.height,0,Vt,Zt,Bt.data)}}}else{if(Pt=S.mipmaps,H&&bt){Pt.length>0&&Et++;let ht=le(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,re,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(Gt){H?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,wt[ht].width,wt[ht].height,Vt,Zt,wt[ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,re,wt[ht].width,wt[ht].height,0,Vt,Zt,wt[ht].data);for(let Xt=0;Xt<Pt.length;Xt++){let Le=Pt[Xt].image[ht].image;H?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Xt+1,0,0,Le.width,Le.height,Vt,Zt,Le.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Xt+1,re,Le.width,Le.height,0,Vt,Zt,Le.data)}}else{H?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Vt,Zt,wt[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,re,Vt,Zt,wt[ht]);for(let Xt=0;Xt<Pt.length;Xt++){let Bt=Pt[Xt];H?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Xt+1,0,0,Vt,Zt,Bt.image[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Xt+1,re,Vt,Zt,Bt.image[ht])}}}g(S)&&E(i.TEXTURE_CUBE_MAP),gt.__version=nt.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function Z(L,S,V,$,nt,gt){let _t=r.convert(V.format,V.colorSpace),it=r.convert(V.type),at=x(V.internalFormat,_t,it,V.normalized,V.colorSpace),Mt=n.get(S),Gt=n.get(V);if(Gt.__renderTarget=S,!Mt.__hasExternalTextures){let wt=Math.max(1,S.width>>gt),St=Math.max(1,S.height>>gt);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,gt,at,wt,St,S.depth,0,_t,it,null):e.texImage2D(nt,gt,at,wt,St,0,_t,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),te(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,nt,Gt.__webglTexture,0,qt(S)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,nt,Gt.__webglTexture,gt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(L,S,V){if(i.bindRenderbuffer(i.RENDERBUFFER,L),S.depthBuffer){let $=S.depthTexture,nt=$&&$.isDepthTexture?$.type:null,gt=M(S.stencilBuffer,nt),_t=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;te(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt(S),gt,S.width,S.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt(S),gt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,gt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,L)}else{let $=S.textures;for(let nt=0;nt<$.length;nt++){let gt=$[nt],_t=r.convert(gt.format,gt.colorSpace),it=r.convert(gt.type),at=x(gt.internalFormat,_t,it,gt.normalized,gt.colorSpace);te(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt(S),at,S.width,S.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt(S),at,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,at,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ot(L,S,V){let $=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let nt=n.get(S.depthTexture);if(nt.__renderTarget=S,(!nt.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$){if(nt.__webglInit===void 0&&(nt.__webglInit=!0,S.depthTexture.addEventListener("dispose",w)),nt.__webglTexture===void 0){nt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),Qt(i.TEXTURE_CUBE_MAP,S.depthTexture);let Mt=r.convert(S.depthTexture.format),Gt=r.convert(S.depthTexture.type),wt;S.depthTexture.format===ai?wt=i.DEPTH_COMPONENT24:S.depthTexture.format===$i&&(wt=i.DEPTH24_STENCIL8);for(let St=0;St<6;St++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,wt,S.width,S.height,0,Mt,Gt,null)}}else tt(S.depthTexture,0);let gt=nt.__webglTexture,_t=qt(S),it=$?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,at=S.depthTexture.format===$i?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===ai)te(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,it,gt,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,at,it,gt,0);else if(S.depthTexture.format===$i)te(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,it,gt,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,at,it,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function q(L){let S=n.get(L),V=L.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==L.depthTexture){let $=L.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){let nt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",nt)};$.addEventListener("dispose",nt),S.__depthDisposeCallback=nt}S.__boundDepthTexture=$}if(L.depthTexture&&!S.__autoAllocateDepthBuffer)if(V)for(let $=0;$<6;$++)Ot(S.__webglFramebuffer[$],L,$);else{let $=L.texture.mipmaps;$&&$.length>0?Ot(S.__webglFramebuffer[0],L,0):Ot(S.__webglFramebuffer,L,0)}else if(V){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=i.createRenderbuffer(),pt(S.__webglDepthbuffer[$],L,!1);else{let nt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=S.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,gt)}}else{let $=L.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),pt(S.__webglDepthbuffer,L,!1);else{let nt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,gt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(L,S,V){let $=n.get(L);S!==void 0&&Z($.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&q(L)}function ct(L){let S=L.texture,V=n.get(L),$=n.get(S);L.addEventListener("dispose",y);let nt=L.textures,gt=L.isWebGLCubeRenderTarget===!0,_t=nt.length>1;if(_t||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=S.version,o.memory.textures++),gt){V.__webglFramebuffer=[];for(let it=0;it<6;it++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[it]=[];for(let at=0;at<S.mipmaps.length;at++)V.__webglFramebuffer[it][at]=i.createFramebuffer()}else V.__webglFramebuffer[it]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let it=0;it<S.mipmaps.length;it++)V.__webglFramebuffer[it]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(_t)for(let it=0,at=nt.length;it<at;it++){let Mt=n.get(nt[it]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&te(L)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let it=0;it<nt.length;it++){let at=nt[it];V.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[it]);let Mt=r.convert(at.format,at.colorSpace),Gt=r.convert(at.type),wt=x(at.internalFormat,Mt,Gt,at.normalized,at.colorSpace,L.isXRRenderTarget===!0),St=qt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,St,wt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,V.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(V.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(gt){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Qt(i.TEXTURE_CUBE_MAP,S);for(let it=0;it<6;it++)if(S.mipmaps&&S.mipmaps.length>0)for(let at=0;at<S.mipmaps.length;at++)Z(V.__webglFramebuffer[it][at],L,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,at);else Z(V.__webglFramebuffer[it],L,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);g(S)&&E(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let it=0,at=nt.length;it<at;it++){let Mt=nt[it],Gt=n.get(Mt),wt=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(wt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(wt,Gt.__webglTexture),Qt(wt,Mt),Z(V.__webglFramebuffer,L,Mt,i.COLOR_ATTACHMENT0+it,wt,0),g(Mt)&&E(wt)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(it=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,$.__webglTexture),Qt(it,S),S.mipmaps&&S.mipmaps.length>0)for(let at=0;at<S.mipmaps.length;at++)Z(V.__webglFramebuffer[at],L,S,i.COLOR_ATTACHMENT0,it,at);else Z(V.__webglFramebuffer,L,S,i.COLOR_ATTACHMENT0,it,0);g(S)&&E(it),e.unbindTexture()}L.depthBuffer&&q(L)}function ft(L){let S=L.textures;for(let V=0,$=S.length;V<$;V++){let nt=S[V];if(g(nt)){let gt=R(L),_t=n.get(nt).__webglTexture;e.bindTexture(gt,_t),E(gt),e.unbindTexture()}}}let mt=[],Yt=[];function Ht(L){if(L.samples>0){if(te(L)===!1){let S=L.textures,V=L.width,$=L.height,nt=i.COLOR_BUFFER_BIT,gt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(L),it=S.length>1;if(it)for(let Mt=0;Mt<S.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer);let at=L.texture.mipmaps;at&&at.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let Mt=0;Mt<S.length;Mt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[Mt]);let Gt=n.get(S[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,V,$,0,0,V,$,nt,i.NEAREST),l===!0&&(mt.length=0,Yt.length=0,mt.push(i.COLOR_ATTACHMENT0+Mt),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(mt.push(gt),Yt.push(gt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Yt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,mt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let Mt=0;Mt<S.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,_t.__webglColorRenderbuffer[Mt]);let Gt=n.get(S[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let S=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function qt(L){return Math.min(s.maxSamples,L.samples)}function te(L){let S=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function F(L){let S=o.render.frame;h.get(L)!==S&&(h.set(L,S),L.update())}function me(L,S){let V=L.colorSpace,$=L.format,nt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||V!==Or&&V!==wi&&(pe.getTransfer(V)===be?($!==zn||nt!==En)&&$t("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Jt("WebGLTextures: Unsupported texture color space:",V)),S}function le(L){return typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame!="undefined"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=N,this.getTextureUnits=A,this.setTextureUnits=I,this.setTexture2D=tt,this.setTexture2DArray=G,this.setTexture3D=K,this.setTextureCube=J,this.rebindTextures=ot,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=te,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Z_(i,t){function e(n,s=wi){let r,o=pe.getTransfer(s);if(n===En)return i.UNSIGNED_BYTE;if(n===fl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Eh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Mh)return i.BYTE;if(n===Sh)return i.SHORT;if(n===cr)return i.UNSIGNED_SHORT;if(n===ul)return i.INT;if(n===Kn)return i.UNSIGNED_INT;if(n===Un)return i.FLOAT;if(n===jn)return i.HALF_FLOAT;if(n===wh)return i.ALPHA;if(n===Th)return i.RGB;if(n===zn)return i.RGBA;if(n===ai)return i.DEPTH_COMPONENT;if(n===$i)return i.DEPTH_STENCIL;if(n===pl)return i.RED;if(n===ml)return i.RED_INTEGER;if(n===Ji)return i.RG;if(n===gl)return i.RG_INTEGER;if(n===xl)return i.RGBA_INTEGER;if(n===xo||n===yo||n===_o||n===vo)if(o===be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yl||n===_l||n===vl||n===Ml)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_l)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ml)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sl||n===bl||n===El||n===wl||n===Tl||n===Mo||n===Al)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sl||n===bl)return o===be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===El)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===wl)return r.COMPRESSED_R11_EAC;if(n===Tl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Mo)return r.COMPRESSED_RG11_EAC;if(n===Al)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Rl||n===Cl||n===Il||n===Pl||n===Ll||n===Dl||n===Nl||n===Ul||n===zl||n===Fl||n===Ol||n===Bl||n===kl||n===Hl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Rl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Il)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ll)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Dl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ul)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ol)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===kl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gl||n===Vl||n===Wl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Gl)return o===be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xl||n===Yl||n===So||n===ql)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Yl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===So)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var $_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J_=`
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

}`,Qh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new jr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Je({vertexShader:$_,fragmentShader:J_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new st(new Ge(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},tu=class extends li{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null,_=typeof XRWebGLBinding!="undefined",p=new Qh,g={},E=e.getContextAttributes(),R=null,x=null,M=[],v=[],w=new xt,y=null,b=null,C=new je;C.viewport=new Ue;let P=new je;P.viewport=new Ue;let D=[C,P],N=new sl,A=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let W=M[B];return W===void 0&&(W=new $s,M[B]=W),W.getTargetRaySpace()},this.getControllerGrip=function(B){let W=M[B];return W===void 0&&(W=new $s,M[B]=W),W.getGripSpace()},this.getHand=function(B){let W=M[B];return W===void 0&&(W=new $s,M[B]=W),W.getHandSpace()};function U(B){let W=v.indexOf(B.inputSource);if(W===-1)return;let lt=M[W];lt!==void 0&&(lt.update(B.inputSource,B.frame,c||o),lt.dispatchEvent({type:B.type,data:B.inputSource}))}function O(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",tt);for(let B=0;B<M.length;B++){let W=v[B];W!==null&&(v[B]=null,M[B].disconnect(W))}A=null,I=null,p.reset();for(let B in g)delete g[B];if(t.setRenderTarget(R),d=null,f=null,u=null,s=null,x=null,j.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(w.width,w.height,!1),b!==null){let B=b.camera;B.fov=b.fov,B.zoom=b.zoom,B.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&$t("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&$t("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",O),s.addEventListener("inputsourceschange",tt),E.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let lt=null,At=null,Z=null;E.depth&&(Z=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=E.stencil?$i:ai,At=E.stencil?hr:Kn);let pt={colorFormat:e.RGBA8,depthFormat:Z,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(pt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new bn(f.textureWidth,f.textureHeight,{format:zn,type:En,depthTexture:new Oi(f.textureWidth,f.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let lt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,lt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new bn(d.framebufferWidth,d.framebufferHeight,{format:zn,type:En,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),j.setContext(s),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function tt(B){for(let W=0;W<B.removed.length;W++){let lt=B.removed[W],At=v.indexOf(lt);At>=0&&(v[At]=null,M[At].disconnect(lt))}for(let W=0;W<B.added.length;W++){let lt=B.added[W],At=v.indexOf(lt);if(At===-1){for(let pt=0;pt<M.length;pt++)if(pt>=v.length){v.push(lt),At=pt;break}else if(v[pt]===null){v[pt]=lt,At=pt;break}if(At===-1)break}let Z=M[At];Z&&Z.connect(lt)}}let G=new z,K=new z;function J(B,W,lt){G.setFromMatrixPosition(W.matrixWorld),K.setFromMatrixPosition(lt.matrixWorld);let At=G.distanceTo(K),Z=W.projectionMatrix.elements,pt=lt.projectionMatrix.elements,Ot=Z[14]/(Z[10]-1),q=Z[14]/(Z[10]+1),ot=(Z[9]+1)/Z[5],ct=(Z[9]-1)/Z[5],ft=(Z[8]-1)/Z[0],mt=(pt[8]+1)/pt[0],Yt=Ot*ft,Ht=Ot*mt,qt=At/(-ft+mt),te=qt*-ft;if(W.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(te),B.translateZ(qt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),Z[10]===-1)B.projectionMatrix.copy(W.projectionMatrix),B.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{let F=Ot+qt,me=q+qt,le=Yt-te,L=Ht+(At-te),S=ot*q/me*F,V=ct*q/me*F;B.projectionMatrix.makePerspective(le,L,S,V,F,me),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function vt(B,W){W===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(W.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let W=B.near,lt=B.far;p.texture!==null&&(p.depthNear>0&&(W=p.depthNear),p.depthFar>0&&(lt=p.depthFar)),N.near=P.near=C.near=W,N.far=P.far=C.far=lt,(A!==N.near||I!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),A=N.near,I=N.far),N.layers.mask=B.layers.mask|6,C.layers.mask=N.layers.mask&-5,P.layers.mask=N.layers.mask&-3;let At=B.parent,Z=N.cameras;vt(N,At);for(let pt=0;pt<Z.length;pt++)vt(Z[pt],At);Z.length===2?J(N,C,P):N.projectionMatrix.copy(C.projectionMatrix),b===null&&B.isPerspectiveCamera&&(b={camera:B,fov:B.fov,zoom:B.zoom}),yt(B,N,At)};function yt(B,W,lt){lt===null?B.matrix.copy(W.matrixWorld):(B.matrix.copy(lt.matrixWorld),B.matrix.invert(),B.matrix.multiply(W.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(W.projectionMatrix),B.projectionMatrixInverse.copy(W.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=qs*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(B){l=B,f!==null&&(f.fixedFoveation=B),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=B)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(N)},this.getCameraTexture=function(B){return g[B]};let ee=null;function Qt(B,W){if(h=W.getViewerPose(c||o),m=W,h!==null){let lt=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let At=!1;lt.length!==N.cameras.length&&(N.cameras.length=0,At=!0);for(let q=0;q<lt.length;q++){let ot=lt[q],ct=null;if(d!==null)ct=d.getViewport(ot);else{let mt=u.getViewSubImage(f,ot);ct=mt.viewport,q===0&&(t.setRenderTargetTextures(x,mt.colorTexture,mt.depthStencilTexture),t.setRenderTarget(x))}let ft=D[q];ft===void 0&&(ft=new je,ft.layers.enable(q),ft.viewport=new Ue,D[q]=ft),ft.matrix.fromArray(ot.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(ot.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(ct.x,ct.y,ct.width,ct.height),q===0&&(N.matrix.copy(ft.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),At===!0&&N.cameras.push(ft)}let Z=s.enabledFeatures;if(Z&&Z.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let q=u.getDepthInformation(lt[0]);q&&q.isValid&&q.texture&&p.init(q,s.renderState)}if(Z&&Z.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let q=0;q<lt.length;q++){let ot=lt[q].camera;if(ot){let ct=g[ot];ct||(ct=new jr,g[ot]=ct);let ft=u.getCameraImage(ot);ct.sourceTexture=ft}}}}for(let lt=0;lt<M.length;lt++){let At=v[lt],Z=M[lt];At!==null&&Z!==void 0&&Z.update(At,W,c||o)}ee&&ee(B,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),m=null}let j=new Td;j.setAnimationLoop(Qt),this.setAnimationLoop=function(B){ee=B},this.dispose=function(){}}},K_=new ve,Ld=new se;Ld.set(-1,0,0,0,1,0,0,0,1);function j_(i,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Ph(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,E,R,x){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),f(p,g),g.isMeshPhysicalMaterial&&d(p,g,x)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,E,R):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Qe&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Qe&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let E=t.get(g),R=E.envMap,x=E.envMapRotation;R&&(p.envMap.value=R,p.envMapRotation.value.setFromMatrix4(K_.makeRotationFromEuler(x)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Ld),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,E,R){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*E,p.scale.value=R*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,E){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Qe&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){let E=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Q_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){let v=M.program;n.uniformBlockBinding(x,v)}function c(x,M){let v=s[x.id];v===void 0&&(p(x),v=h(x),s[x.id]=v,x.addEventListener("dispose",E));let w=M.program;n.updateUBOMapping(x,w);let y=t.render.frame;r[x.id]!==y&&(f(x),r[x.id]=y)}function h(x){let M=u();x.__bindingPointIndex=M;let v=i.createBuffer(),w=x.__size,y=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,w,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){let M=s[x.id],v=x.uniforms,w=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let y=0,b=v.length;y<b;y++){let C=v[y];if(Array.isArray(C))for(let P=0,D=C.length;P<D;P++)d(C[P],y,P,w);else d(C,y,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,M,v,w){if(_(x,M,v,w)===!0){let y=x.__offset,b=x.value;if(Array.isArray(b)){let C=0;for(let P=0;P<b.length;P++){let D=b[P],N=g(D);m(D,x.__data,C),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(C+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(b,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,x.__data)}}function m(x,M,v){typeof x=="number"||typeof x=="boolean"?M[0]=x:x.isMatrix3?(M[0]=x.elements[0],M[1]=x.elements[1],M[2]=x.elements[2],M[3]=0,M[4]=x.elements[3],M[5]=x.elements[4],M[6]=x.elements[5],M[7]=0,M[8]=x.elements[6],M[9]=x.elements[7],M[10]=x.elements[8],M[11]=0):ArrayBuffer.isView(x)?M.set(new x.constructor(x.buffer,x.byteOffset,M.length)):x.toArray(M,v)}function _(x,M,v,w){let y=x.value,b=M+"_"+v;if(w[b]===void 0)return typeof y=="number"||typeof y=="boolean"?w[b]=y:ArrayBuffer.isView(y)?w[b]=y.slice():w[b]=y.clone(),!0;{let C=w[b];if(typeof y=="number"||typeof y=="boolean"){if(C!==y)return w[b]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(C.equals(y)===!1)return C.copy(y),!0}}return!1}function p(x){let M=x.uniforms,v=0,w=16;for(let b=0,C=M.length;b<C;b++){let P=Array.isArray(M[b])?M[b]:[M[b]];for(let D=0,N=P.length;D<N;D++){let A=P[D],I=Array.isArray(A.value)?A.value:[A.value];for(let U=0,O=I.length;U<O;U++){let tt=I[U],G=g(tt),K=v%w,J=K%G.boundary,vt=K+J;v+=J,vt!==0&&w-vt<G.storage&&(v+=w-vt),A.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=v,v+=G.storage}}}let y=v%w;return y>0&&(v+=w-y),x.__size=v,x.__cache={},this}function g(x){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?$t("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):$t("WebGLRenderer: Unsupported uniform value type.",x),M}function E(x){let M=x.target;M.removeEventListener("dispose",E);let v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function R(){for(let x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:R}}var tv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ui=null;function ev(){return ui===null&&(ui=new $r(tv,16,16,Ji,jn),ui.name="DFG_LUT",ui.minFilter=an,ui.magFilter=an,ui.wrapS=ri,ui.wrapT=ri,ui.generateMipmaps=!1,ui.needsUpdate=!0),ui}var Ro=class{constructor(t={}){let{canvas:e=Yf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=En}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let _=d,p=new Set([xl,gl,ml]),g=new Set([En,Kn,cr,hr,fl,dl]),E=new Uint32Array(4),R=new Int32Array(4),x=new z,M=null,v=null,w=[],y=[],b=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,P=!1,D=null,N=null,A=null,I=null;this._outputColorSpace=Pe;let U=0,O=0,tt=null,G=-1,K=null,J=new Ue,vt=new Ue,yt=null,ee=new Ut(0),Qt=0,j=e.width,B=e.height,W=1,lt=null,At=null,Z=new Ue(0,0,j,B),pt=new Ue(0,0,j,B),Ot=!1,q=new tr,ot=!1,ct=!1,ft=new ve,mt=new z,Yt=new Ue,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qt=!1;function te(){return tt===null?W:1}let F=n;function me(T,k){return e.getContext(T,k)}let le,L,S,V,$,nt,gt,_t,it,at,Mt,Gt,wt,St,Vt,Zt,re,H,bt,rt,Et,Pt,ht;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Le,!1),e.addEventListener("webglcontextrestored",Me,!1),e.addEventListener("webglcontextcreationerror",Gn,!1),F===null){let k="webgl2";if(F=me(k,T),F===null)throw me(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xt()}catch(T){throw e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",Gn,!1),Jt("WebGLRenderer: "+T.message),T}function Xt(){le=new ly(F),le.init(),Et=new Z_(F,le),L=new jx(F,le,t,Et),S=new Y_(F,le),L.reversedDepthBuffer&&f&&S.buffers.depth.setReversed(!0),N=F.createFramebuffer(),A=F.createFramebuffer(),I=F.createFramebuffer(),V=new uy(F),$=new L_,nt=new q_(F,le,S,$,L,Et,V),gt=new ay(C),_t=new d0(F),Pt=new Jx(F,_t),it=new cy(F,_t,V,Pt),at=new dy(F,it,_t,Pt,V),H=new fy(F,L,nt),Vt=new Qx($),Mt=new P_(C,gt,le,L,Pt,Vt),Gt=new j_(C,$),wt=new N_,St=new k_(le),re=new $x(C,gt,S,at,m,l),Zt=new X_(C,at,L),ht=new Q_(F,V,L,S),bt=new Kx(F,le,V),rt=new hy(F,le,V),V.programs=Mt.programs,C.capabilities=L,C.extensions=le,C.properties=$,C.renderLists=wt,C.shadowMap=Zt,C.state=S,C.info=V}_!==En&&(b=new my(_,e.width,e.height,a,s,r));let Bt=new tu(C,F);this.xr=Bt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let T=le.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=le.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(j,B,!1))},this.getSize=function(T){return T.set(j,B)},this.setSize=function(T,k,et=!0){if(Bt.isPresenting){$t("WebGLRenderer: Can't change size while VR device is presenting.");return}j=T,B=k,e.width=Math.floor(T*W),e.height=Math.floor(k*W),et===!0&&(e.style.width=T+"px",e.style.height=k+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(j*W,B*W).floor()},this.setDrawingBufferSize=function(T,k,et){j=T,B=k,W=et,e.width=Math.floor(T*et),e.height=Math.floor(k*et),this.setViewport(0,0,T,k)},this.setEffects=function(T){if(_===En){Jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let k=0;k<T.length;k++)if(T[k].isOutputPass===!0){$t("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(J)},this.getViewport=function(T){return T.copy(Z)},this.setViewport=function(T,k,et,X){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,k,et,X),S.viewport(J.copy(Z).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy(pt)},this.setScissor=function(T,k,et,X){T.isVector4?pt.set(T.x,T.y,T.z,T.w):pt.set(T,k,et,X),S.scissor(vt.copy(pt).multiplyScalar(W).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(T){S.setScissorTest(Ot=T)},this.setOpaqueSort=function(T){lt=T},this.setTransparentSort=function(T){At=T},this.getClearColor=function(T){return T.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(T=!0,k=!0,et=!0){let X=0;if(T){let Y=!1;if(tt!==null){let Ct=tt.texture.format;Y=p.has(Ct)}if(Y){let Ct=tt.texture.type,Nt=g.has(Ct),Rt=re.getClearColor(),zt=re.getClearAlpha(),kt=Rt.r,he=Rt.g,de=Rt.b;Nt?(E[0]=kt,E[1]=he,E[2]=de,E[3]=zt,F.clearBufferuiv(F.COLOR,0,E)):(R[0]=kt,R[1]=he,R[2]=de,R[3]=zt,F.clearBufferiv(F.COLOR,0,R))}else X|=F.COLOR_BUFFER_BIT}k&&(X|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),et&&(X|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&F.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),D=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",Gn,!1),re.dispose(),wt.dispose(),St.dispose(),$.dispose(),gt.dispose(),at.dispose(),Pt.dispose(),ht.dispose(),Mt.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",Eu),Bt.removeEventListener("sessionend",wu),es.stop()};function Le(T){T.preventDefault(),Hr("WebGLRenderer: Context Lost."),P=!0}function Me(){Hr("WebGLRenderer: Context Restored."),P=!1;let T=V.autoReset,k=Zt.enabled,et=Zt.autoUpdate,X=Zt.needsUpdate,Y=Zt.type;Xt(),V.autoReset=T,Zt.enabled=k,Zt.autoUpdate=et,Zt.needsUpdate=X,Zt.type=Y}function Gn(T){Jt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ni(T){let k=T.target;k.removeEventListener("dispose",ni),Dp(k)}function Dp(T){Np(T),$.remove(T)}function Np(T){let k=$.get(T).programs;k!==void 0&&(k.forEach(function(et){Mt.releaseProgram(et)}),T.isShaderMaterial&&Mt.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,et,X,Y,Ct){k===null&&(k=Ht);let Nt=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Rt=Fp(T,k,et,X,Y);S.setMaterial(X,Nt);let zt=et.index,kt=1;if(X.wireframe===!0){if(zt=it.getWireframeAttribute(et),zt===void 0)return;kt=2}let he=et.drawRange,de=et.attributes.position,Ft=he.start*kt,Se=(he.start+he.count)*kt;Ct!==null&&(Ft=Math.max(Ft,Ct.start*kt),Se=Math.min(Se,(Ct.start+Ct.count)*kt)),zt!==null?(Ft=Math.max(Ft,0),Se=Math.min(Se,zt.count)):de!=null&&(Ft=Math.max(Ft,0),Se=Math.min(Se,de.count));let qe=Se-Ft;if(qe<0||qe===1/0)return;Pt.setup(Y,X,Rt,et,zt);let ze,Ie=bt;if(zt!==null&&(ze=_t.get(zt),Ie=rt,Ie.setIndex(ze)),Y.isMesh)X.wireframe===!0?(S.setLineWidth(X.wireframeLinewidth*te()),Ie.setMode(F.LINES)):Ie.setMode(F.TRIANGLES);else if(Y.isLine){let cn=X.linewidth;cn===void 0&&(cn=1),S.setLineWidth(cn*te()),Y.isLineSegments?Ie.setMode(F.LINES):Y.isLineLoop?Ie.setMode(F.LINE_LOOP):Ie.setMode(F.LINE_STRIP)}else Y.isPoints?Ie.setMode(F.POINTS):Y.isSprite&&Ie.setMode(F.TRIANGLES);if(Y.isBatchedMesh)if(le.get("WEBGL_multi_draw"))Ie.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let cn=Y._multiDrawStarts,Dt=Y._multiDrawCounts,xn=Y._multiDrawCount,xe=zt?_t.get(zt).bytesPerElement:1,Dn=$.get(X).currentProgram.getUniforms();for(let ii=0;ii<xn;ii++)Dn.setValue(F,"_gl_DrawID",ii),Ie.render(cn[ii]/xe,Dt[ii])}else if(Y.isInstancedMesh)Ie.renderInstances(Ft,qe,Y.count);else if(et.isInstancedBufferGeometry){let cn=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Dt=Math.min(et.instanceCount,cn);Ie.renderInstances(Ft,qe,Dt)}else Ie.render(Ft,qe)};function bu(T,k,et,X){D!==null&&T.isNodeMaterial&&D.setObject(X,T),ot===!0&&Vt.setState(T,et,!1),T.transparent===!0&&T.side===ln&&T.forceSinglePass===!1?(T.side=Qe,T.needsUpdate=!0,$o(T,k,X),T.side=Xi,T.needsUpdate=!0,$o(T,k,X),T.side=ln):$o(T,k,X)}this.compile=function(T,k,et=null){et===null&&(et=T),D!==null&&D.renderStart(T,k,et),v=St.get(et),v.init(k),y.push(v),et.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),T!==et&&T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),v.setupLights(),D!==null&&D.updateLights(v.state.lightsArray),ct=this.localClippingEnabled,ot=Vt.init(this.clippingPlanes,ct),ot===!0&&Vt.setGlobalState(this.clippingPlanes,k),D!==null&&Zt.render(v.state.shadowsArray,et,k);let X=new Set;return T.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let Ct=Y.material;if(Ct)if(Array.isArray(Ct))for(let Nt=0;Nt<Ct.length;Nt++){let Rt=Ct[Nt];bu(Rt,et,k,Y),X.add(Rt)}else bu(Ct,et,k,Y),X.add(Ct)}),v=y.pop(),D!==null&&D.renderEnd(),X},this.compileAsync=function(T,k,et=null){let X=this.compile(T,k,et);return new Promise(Y=>{function Ct(){if(X.forEach(function(Nt){let zt=$.get(Nt).currentProgram;(zt===void 0||zt.isReady())&&X.delete(Nt)}),X.size===0){Y(T);return}setTimeout(Ct,10)}le.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let bc=null;function Up(T){bc&&bc(T)}function Eu(){es.stop()}function wu(){es.start()}let es=new Td;es.setAnimationLoop(Up),typeof self!="undefined"&&es.setContext(self),this.setAnimationLoop=function(T){bc=T,Bt.setAnimationLoop(T),T===null?es.stop():es.start()},Bt.addEventListener("sessionstart",Eu),Bt.addEventListener("sessionend",wu),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){Jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;D!==null&&D.renderStart(T,k);let et=Bt.enabled===!0&&Bt.isPresenting===!0,X=b!==null&&(tt===null||et)&&b.begin(C,tt);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(k),k=Bt.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,k,tt),v=St.get(T,y.length),v.init(k),v.state.textureUnits=nt.getTextureUnits(),y.push(v),ft.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),q.setFromProjectionMatrix(ft,Zn,k.reversedDepth),ct=this.localClippingEnabled,ot=Vt.init(this.clippingPlanes,ct),M=wt.get(T,w.length),M.init(),w.push(M),Bt.enabled===!0&&Bt.isPresenting===!0){let Nt=C.xr.getDepthSensingMesh();Nt!==null&&Ec(Nt,k,-1/0,C.sortObjects)}Ec(T,k,0,C.sortObjects),M.finish(),D!==null&&D.updateLights(v.state.lightsArray),C.sortObjects===!0&&M.sort(lt,At),qt=Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1,qt&&re.addToRenderList(M,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ot===!0&&Vt.beginShadows();let Y=v.state.shadowsArray;if(Zt.render(Y,T,k),ot===!0&&Vt.endShadows(),(X&&b.hasRenderPass())===!1){let Nt=M.opaque,Rt=M.transmissive;if(v.setupLights(),k.isArrayCamera){let zt=k.cameras;if(Rt.length>0)for(let kt=0,he=zt.length;kt<he;kt++){let de=zt[kt];Au(Nt,Rt,T,de)}qt&&re.render(T);for(let kt=0,he=zt.length;kt<he;kt++){let de=zt[kt];Tu(M,T,de,de.viewport)}}else Rt.length>0&&Au(Nt,Rt,T,k),qt&&re.render(T),Tu(M,T,k)}tt!==null&&O===0&&(nt.updateMultisampleRenderTarget(tt),nt.updateRenderTargetMipmap(tt)),X&&b.end(C),T.isScene===!0&&T.onAfterRender(C,T,k),Pt.resetDefaultState(),G=-1,K=null,y.pop(),y.length>0?(v=y[y.length-1],nt.setTextureUnits(v.state.textureUnits),ot===!0&&Vt.setGlobalState(C.clippingPlanes,v.state.camera)):v=null,w.pop(),w.length>0?M=w[w.length-1]:M=null,D!==null&&D.renderEnd()};function Ec(T,k,et,X){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)et=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLightProbeGrid)v.pushLightProbeGrid(T);else if(T.isLight)v.pushLight(T),T.castShadow&&v.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(q)){X&&Yt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ft);let Nt=at.update(T),Rt=T.material;Rt.visible&&M.push(T,Nt,Rt,et,Yt.z,null,k)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(q))){let Nt=at.update(T),Rt=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Yt.copy(T.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),Yt.copy(Nt.boundingSphere.center)),Yt.applyMatrix4(T.matrixWorld).applyMatrix4(ft)),Array.isArray(Rt)){let zt=Nt.groups;for(let kt=0,he=zt.length;kt<he;kt++){let de=zt[kt],Ft=Rt[de.materialIndex];Ft&&Ft.visible&&M.push(T,Nt,Ft,et,Yt.z,de,k)}}else Rt.visible&&M.push(T,Nt,Rt,et,Yt.z,null,k)}}let Ct=T.children;for(let Nt=0,Rt=Ct.length;Nt<Rt;Nt++)Ec(Ct[Nt],k,et,X)}function Tu(T,k,et,X){let{opaque:Y,transmissive:Ct,transparent:Nt}=T;v.setupLightsView(et),ot===!0&&Vt.setGlobalState(C.clippingPlanes,et),X&&S.viewport(J.copy(X)),Y.length>0&&Zo(Y,k,et),Ct.length>0&&Zo(Ct,k,et),Nt.length>0&&Zo(Nt,k,et),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Au(T,k,et,X){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[X.id]===void 0){let Ft=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[X.id]=new bn(1,1,{generateMipmaps:!0,type:Ft?jn:En,minFilter:Zi,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pe.workingColorSpace})}let Ct=v.state.transmissionRenderTarget[X.id],Nt=X.viewport||J;Ct.setSize(Nt.z*C.transmissionResolutionScale,Nt.w*C.transmissionResolutionScale);let Rt=C.getRenderTarget(),zt=C.getActiveCubeFace(),kt=C.getActiveMipmapLevel();C.setRenderTarget(Ct),C.getClearColor(ee),Qt=C.getClearAlpha(),Qt<1&&C.setClearColor(16777215,.5),C.clear(),qt&&re.render(et);let he=C.toneMapping;C.toneMapping=Jn;let de=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),v.setupLightsView(X),ot===!0&&Vt.setGlobalState(C.clippingPlanes,X),Zo(T,et,X),nt.updateMultisampleRenderTarget(Ct),nt.updateRenderTargetMipmap(Ct),le.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let Se=0,qe=k.length;Se<qe;Se++){let ze=k[Se],{object:Ie,geometry:cn,material:Dt,group:xn}=ze;if(Dt.side===ln&&Ie.layers.test(X.layers)){let xe=Dt.side;Dt.side=Qe,Dt.needsUpdate=!0,Ru(Ie,et,X,cn,Dt,xn),Dt.side=xe,Dt.needsUpdate=!0,Ft=!0}}Ft===!0&&(nt.updateMultisampleRenderTarget(Ct),nt.updateRenderTargetMipmap(Ct))}C.setRenderTarget(Rt,zt,kt),C.setClearColor(ee,Qt),de!==void 0&&(X.viewport=de),C.toneMapping=he}function Zo(T,k,et){let X=k.isScene===!0?k.overrideMaterial:null;for(let Y=0,Ct=T.length;Y<Ct;Y++){let Nt=T[Y],{object:Rt,geometry:zt,group:kt}=Nt,he=Nt.material;he.allowOverride===!0&&X!==null&&(he=X),Rt.layers.test(et.layers)&&Ru(Rt,k,et,zt,he,kt)}}function Ru(T,k,et,X,Y,Ct){D!==null&&Y.isNodeMaterial&&D.setObject(T,Y),T.onBeforeRender(C,k,et,X,Y,Ct),T.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(C,k,et,X,T,Ct),Y.transparent===!0&&Y.side===ln&&Y.forceSinglePass===!1?(Y.side=Qe,Y.needsUpdate=!0,C.renderBufferDirect(et,k,X,Y,T,Ct),Y.side=Xi,Y.needsUpdate=!0,C.renderBufferDirect(et,k,X,Y,T,Ct),Y.side=ln):C.renderBufferDirect(et,k,X,Y,T,Ct),T.onAfterRender(C,k,et,X,Y,Ct)}function $o(T,k,et){k.isScene!==!0&&(k=Ht);let X=$.get(T),Y=v.state.lights,Ct=v.state.shadowsArray,Nt=Y.state.version,Rt=Mt.getParameters(T,Y.state,Ct,k,et,v.state.lightProbeGridArray),zt=Mt.getProgramCacheKey(Rt),kt=X.programs;X.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?k.environment:null,X.fog=k.fog;let he=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;X.envMap=gt.get(T.envMap||X.environment,he),X.envMapRotation=X.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,kt===void 0&&(T.addEventListener("dispose",ni),kt=new Map,X.programs=kt);let de=kt.get(zt);if(de!==void 0){if(X.currentProgram===de&&X.lightsStateVersion===Nt)return Iu(T,Rt),de}else Rt.uniforms=Mt.getUniforms(T),D!==null&&T.isNodeMaterial&&D.build(T,et,Rt),T.onBeforeCompile(Rt,C),de=Mt.acquireProgram(Rt,zt),kt.set(zt,de),X.uniforms=Rt.uniforms;let Ft=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ft.clippingPlanes=Vt.uniform),Iu(T,Rt),X.needsLights=Bp(T),X.lightsStateVersion=Nt,X.needsLights&&(Ft.ambientLightColor.value=Y.state.ambient,Ft.lightProbe.value=Y.state.probe,Ft.sunLights.value=Y.state.sun,Ft.sunLightShadows.value=Y.state.sunShadow,Ft.directionalLights.value=Y.state.directional,Ft.directionalLightShadows.value=Y.state.directionalShadow,Ft.spotLights.value=Y.state.spot,Ft.spotLightShadows.value=Y.state.spotShadow,Ft.rectAreaLights.value=Y.state.rectArea,Ft.ltc_1.value=Y.state.rectAreaLTC1,Ft.ltc_2.value=Y.state.rectAreaLTC2,Ft.pointLights.value=Y.state.point,Ft.pointLightShadows.value=Y.state.pointShadow,Ft.hemisphereLights.value=Y.state.hemi,Ft.sunShadowMatrix.value=Y.state.sunShadowMatrix,Ft.sunShadowCascade.value=Y.state.sunShadowCascade,Ft.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ft.spotLightMatrix.value=Y.state.spotLightMatrix,Ft.spotLightMap.value=Y.state.spotLightMap,Ft.pointShadowMatrix.value=Y.state.pointShadowMatrix),X.lightProbeGrid=v.state.lightProbeGridArray.length>0,X.currentProgram=de,X.uniformsList=null,de}function Cu(T){if(T.uniformsList===null){let k=T.currentProgram.getUniforms();T.uniformsList=pr.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function Iu(T,k){let et=$.get(T);et.outputColorSpace=k.outputColorSpace,et.batching=k.batching,et.batchingColor=k.batchingColor,et.instancing=k.instancing,et.instancingColor=k.instancingColor,et.instancingMorph=k.instancingMorph,et.skinning=k.skinning,et.morphTargets=k.morphTargets,et.morphNormals=k.morphNormals,et.morphColors=k.morphColors,et.morphTargetsCount=k.morphTargetsCount,et.numClippingPlanes=k.numClippingPlanes,et.numIntersection=k.numClipIntersection,et.vertexAlphas=k.vertexAlphas,et.vertexTangents=k.vertexTangents,et.toneMapping=k.toneMapping}function zp(T,k){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;x.setFromMatrixPosition(k.matrixWorld);for(let et=0,X=T.length;et<X;et++){let Y=T[et];if(Y.texture!==null&&Y.boundingBox.containsPoint(x))return Y}return null}function Fp(T,k,et,X,Y){k.isScene!==!0&&(k=Ht),nt.resetTextureUnits();let Ct=k.fog,Nt=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?k.environment:null,Rt=tt===null?C.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:pe.workingColorSpace,zt=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,kt=gt.get(X.envMap||Nt,zt),he=X.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,de=!!et.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ft=!!et.morphAttributes.position,Se=!!et.morphAttributes.normal,qe=!!et.morphAttributes.color,ze=Jn;X.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(ze=C.toneMapping);let Ie=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,cn=Ie!==void 0?Ie.length:0,Dt=$.get(X),xn=v.state.lights;if(ot===!0&&(ct===!0||T!==K)){let De=T===K&&X.id===G;Vt.setState(X,T,De)}let xe=!1;X.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==xn.state.version||Dt.outputColorSpace!==Rt||Y.isBatchedMesh&&Dt.batching===!1||!Y.isBatchedMesh&&Dt.batching===!0||Y.isBatchedMesh&&Dt.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Dt.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Dt.instancing===!1||!Y.isInstancedMesh&&Dt.instancing===!0||Y.isSkinnedMesh&&Dt.skinning===!1||!Y.isSkinnedMesh&&Dt.skinning===!0||Y.isInstancedMesh&&Dt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Dt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Dt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Dt.instancingMorph===!1&&Y.morphTexture!==null||Dt.envMap!==kt||X.fog===!0&&Dt.fog!==Ct||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==Vt.numPlanes||Dt.numIntersection!==Vt.numIntersection)||Dt.vertexAlphas!==he||Dt.vertexTangents!==de||Dt.morphTargets!==Ft||Dt.morphNormals!==Se||Dt.morphColors!==qe||Dt.toneMapping!==ze||Dt.morphTargetsCount!==cn||!!Dt.lightProbeGrid!=v.state.lightProbeGridArray.length>0)&&(xe=!0):(xe=!0,Dt.__version=X.version);let Dn=Dt.currentProgram;xe===!0&&(Dn=$o(X,k,Y),D&&X.isNodeMaterial&&D.onUpdateProgram(X,Dn,Dt));let ii=!1,Ii=!1,Ss=!1,Ce=Dn.getUniforms(),We=Dt.uniforms;if(S.useProgram(Dn.program)&&(ii=!0,Ii=!0,Ss=!0),X.id!==G&&(G=X.id,Ii=!0),Dt.needsLights){let De=zp(v.state.lightProbeGridArray,Y);Dt.lightProbeGrid!==De&&(Dt.lightProbeGrid=De,Ii=!0)}if(ii||K!==T){S.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ce.setValue(F,"projectionMatrix",T.projectionMatrix),Ce.setValue(F,"viewMatrix",T.matrixWorldInverse);let Li=Ce.map.cameraPosition;Li!==void 0&&Li.setValue(F,mt.setFromMatrixPosition(T.matrixWorld)),L.logarithmicDepthBuffer&&Ce.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ce.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),K!==T&&(K=T,Ii=!0,Ss=!0)}if(Dt.needsLights&&(xn.state.sunShadowMap.length>0&&Ce.setValue(F,"sunShadowMap",xn.state.sunShadowMap,nt),xn.state.directionalShadowMap.length>0&&Ce.setValue(F,"directionalShadowMap",xn.state.directionalShadowMap,nt),xn.state.spotShadowMap.length>0&&Ce.setValue(F,"spotShadowMap",xn.state.spotShadowMap,nt),xn.state.pointShadowMap.length>0&&Ce.setValue(F,"pointShadowMap",xn.state.pointShadowMap,nt)),Y.isSkinnedMesh){Ce.setOptional(F,Y,"bindMatrix"),Ce.setOptional(F,Y,"bindMatrixInverse");let De=Y.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),Ce.setValue(F,"boneTexture",De.boneTexture,nt))}Y.isBatchedMesh&&(Ce.setOptional(F,Y,"batchingTexture"),Ce.setValue(F,"batchingTexture",Y._matricesTexture,nt),Ce.setOptional(F,Y,"batchingIdTexture"),Ce.setValue(F,"batchingIdTexture",Y._indirectTexture,nt),Ce.setOptional(F,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ce.setValue(F,"batchingColorTexture",Y._colorsTexture,nt));let Pi=et.morphAttributes;if((Pi.position!==void 0||Pi.normal!==void 0||Pi.color!==void 0)&&H.update(Y,et,Dn),(Ii||Dt.receiveShadow!==Y.receiveShadow)&&(Dt.receiveShadow=Y.receiveShadow,Ce.setValue(F,"receiveShadow",Y.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&k.environment!==null&&(We.envMapIntensity.value=k.environmentIntensity),We.dfgLUT!==void 0&&(We.dfgLUT.value=ev()),Ii){if(Ce.setValue(F,"toneMappingExposure",C.toneMappingExposure),Dt.needsLights&&Op(We,Ss),Ct&&X.fog===!0&&Gt.refreshFogUniforms(We,Ct),Gt.refreshMaterialUniforms(We,X,W,B,v.state.transmissionRenderTarget[T.id]),Dt.needsLights&&Dt.lightProbeGrid){let De=Dt.lightProbeGrid;We.probesSH.value=De.texture,We.probesMin.value.copy(De.boundingBox.min),We.probesMax.value.copy(De.boundingBox.max),We.probesResolution.value.copy(De.resolution)}pr.upload(F,Cu(Dt),We,nt)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(pr.upload(F,Cu(Dt),We,nt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ce.setValue(F,"center",Y.center),Ce.setValue(F,"modelViewMatrix",Y.modelViewMatrix),Ce.setValue(F,"normalMatrix",Y.normalMatrix),Ce.setValue(F,"modelMatrix",Y.matrixWorld),X.uniformsGroups!==void 0){let De=X.uniformsGroups;for(let Li=0,bs=De.length;Li<bs;Li++){let Lu=De[Li];ht.update(Lu,Dn),ht.bind(Lu,Dn)}}return Dn}function Op(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.sunLights.needsUpdate=k,T.sunLightShadows.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function Bp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(T,k,et){let X=$.get(T);X.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),$.get(T.texture).__webglTexture=k,$.get(T.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:et,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,k){let et=$.get(T);et.__webglFramebuffer=k,et.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,et=0){tt=T,U=k,O=et;let X=null,Y=!1,Ct=!1;if(T){let Rt=$.get(T);if(Rt.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(F.FRAMEBUFFER,Rt.__webglFramebuffer),J.copy(T.viewport),vt.copy(T.scissor),yt=T.scissorTest,S.viewport(J),S.scissor(vt),S.setScissorTest(yt),G=-1;return}else if(Rt.__webglFramebuffer===void 0)nt.setupRenderTarget(T);else if(Rt.__hasExternalTextures)nt.rebindTextures(T,$.get(T.texture).__webglTexture,$.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let he=T.depthTexture;if(Rt.__boundDepthTexture!==he){if(he!==null&&$.has(he)&&(T.width!==he.image.width||T.height!==he.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(T)}}let zt=T.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Ct=!0);let kt=$.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(kt[k])?X=kt[k][et]:X=kt[k],Y=!0):T.samples>0&&nt.useMultisampledRTT(T)===!1?X=$.get(T).__webglMultisampledFramebuffer:Array.isArray(kt)?X=kt[et]:X=kt,J.copy(T.viewport),vt.copy(T.scissor),yt=T.scissorTest}else J.copy(Z).multiplyScalar(W).floor(),vt.copy(pt).multiplyScalar(W).floor(),yt=Ot;if(et!==0&&(X=N),S.bindFramebuffer(F.FRAMEBUFFER,X)&&S.drawBuffers(T,X),S.viewport(J),S.scissor(vt),S.setScissorTest(yt),Y){let Rt=$.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,Rt.__webglTexture,et)}else if(Ct){let Rt=k;for(let zt=0;zt<T.textures.length;zt++){let kt=$.get(T.textures[zt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+zt,kt.__webglTexture,et,Rt)}}else if(T!==null&&et!==0){let Rt=$.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Rt.__webglTexture,et)}G=-1};function Pu(T){let k=$.get(T);return(k.__readFormat!==T.format||k.__readType!==T.type)&&(k.__readFormat=T.format,k.__readType=T.type,k.__formatReadable=L.textureFormatReadable(T.format),k.__typeReadable=L.textureTypeReadable(T.type)),k}this.readRenderTargetPixels=function(T,k,et,X,Y,Ct,Nt,Rt=0){if(!(T&&T.isWebGLRenderTarget)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=$.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Nt!==void 0&&(zt=zt[Nt]),zt){S.bindFramebuffer(F.FRAMEBUFFER,zt);try{let kt=T.textures[Rt],he=kt.format,de=kt.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Rt);let Ft=Pu(kt);if(Ft.__formatReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ft.__typeReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-X&&et>=0&&et<=T.height-Y&&F.readPixels(k,et,X,Y,Et.convert(he),Et.convert(de),Ct)}finally{let kt=tt!==null?$.get(tt).__webglFramebuffer:null;S.bindFramebuffer(F.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(T,k,et,X,Y,Ct,Nt,Rt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=$.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Nt!==void 0&&(zt=zt[Nt]),zt)if(k>=0&&k<=T.width-X&&et>=0&&et<=T.height-Y){S.bindFramebuffer(F.FRAMEBUFFER,zt);let kt=T.textures[Rt],he=kt.format,de=kt.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Rt);let Ft=Pu(kt);if(Ft.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ft.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Se=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Se),F.bufferData(F.PIXEL_PACK_BUFFER,Ct.byteLength,F.STREAM_READ),F.readPixels(k,et,X,Y,Et.convert(he),Et.convert(de),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let qe=tt!==null?$.get(tt).__webglFramebuffer:null;S.bindFramebuffer(F.FRAMEBUFFER,qe);let ze=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Zf(F,ze,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Se),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Ct),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Se),F.deleteSync(ze),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,k=null,et=0){let X=Math.pow(2,-et),Y=Math.floor(T.image.width*X),Ct=Math.floor(T.image.height*X),Nt=k!==null?k.x:0,Rt=k!==null?k.y:0;nt.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,et,0,0,Nt,Rt,Y,Ct),S.unbindTexture()},this.copyTextureToTexture=function(T,k,et=null,X=null,Y=0,Ct=0){let Nt,Rt,zt,kt,he,de,Ft,Se,qe,ze=T.isCompressedTexture?T.mipmaps[Ct]:T.image;if(et!==null)Nt=et.max.x-et.min.x,Rt=et.max.y-et.min.y,zt=et.isBox3?et.max.z-et.min.z:1,kt=et.min.x,he=et.min.y,de=et.isBox3?et.min.z:0;else{let We=Math.pow(2,-Y);Nt=Math.floor(ze.width*We),Rt=Math.floor(ze.height*We),T.isDataArrayTexture?zt=ze.depth:T.isData3DTexture?zt=Math.floor(ze.depth*We):zt=1,kt=0,he=0,de=0}X!==null?(Ft=X.x,Se=X.y,qe=X.z):(Ft=0,Se=0,qe=0);let Ie=Et.convert(k.format),cn=Et.convert(k.type),Dt;k.isData3DTexture?(nt.setTexture3D(k,0),Dt=F.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(nt.setTexture2DArray(k,0),Dt=F.TEXTURE_2D_ARRAY):(nt.setTexture2D(k,0),Dt=F.TEXTURE_2D),S.activeTexture(F.TEXTURE0),S.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),S.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),S.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);let xn=S.getParameter(F.UNPACK_ROW_LENGTH),xe=S.getParameter(F.UNPACK_IMAGE_HEIGHT),Dn=S.getParameter(F.UNPACK_SKIP_PIXELS),ii=S.getParameter(F.UNPACK_SKIP_ROWS),Ii=S.getParameter(F.UNPACK_SKIP_IMAGES);S.pixelStorei(F.UNPACK_ROW_LENGTH,ze.width),S.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ze.height),S.pixelStorei(F.UNPACK_SKIP_PIXELS,kt),S.pixelStorei(F.UNPACK_SKIP_ROWS,he),S.pixelStorei(F.UNPACK_SKIP_IMAGES,de);let Ss=T.isDataArrayTexture||T.isData3DTexture,Ce=k.isDataArrayTexture||k.isData3DTexture;if(T.isDepthTexture){let We=$.get(T),Pi=$.get(k),De=$.get(We.__renderTarget),Li=$.get(Pi.__renderTarget);S.bindFramebuffer(F.READ_FRAMEBUFFER,De.__webglFramebuffer),S.bindFramebuffer(F.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let bs=0;bs<zt;bs++)Ss&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,$.get(T).__webglTexture,Y,de+bs),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,$.get(k).__webglTexture,Ct,qe+bs)),F.blitFramebuffer(kt,he,Nt,Rt,Ft,Se,Nt,Rt,F.DEPTH_BUFFER_BIT,F.NEAREST);S.bindFramebuffer(F.READ_FRAMEBUFFER,null),S.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Y!==0||T.isRenderTargetTexture||$.has(T)){let We=$.get(T),Pi=$.get(k);S.bindFramebuffer(F.READ_FRAMEBUFFER,A),S.bindFramebuffer(F.DRAW_FRAMEBUFFER,I);for(let De=0;De<zt;De++)Ss?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,We.__webglTexture,Y,de+De):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,We.__webglTexture,Y),Ce?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pi.__webglTexture,Ct,qe+De):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Pi.__webglTexture,Ct),Y!==0?F.blitFramebuffer(kt,he,Nt,Rt,Ft,Se,Nt,Rt,F.COLOR_BUFFER_BIT,F.NEAREST):Ce?F.copyTexSubImage3D(Dt,Ct,Ft,Se,qe+De,kt,he,Nt,Rt):F.copyTexSubImage2D(Dt,Ct,Ft,Se,kt,he,Nt,Rt);S.bindFramebuffer(F.READ_FRAMEBUFFER,null),S.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ce?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(Dt,Ct,Ft,Se,qe,Nt,Rt,zt,Ie,cn,ze.data):k.isCompressedArrayTexture?F.compressedTexSubImage3D(Dt,Ct,Ft,Se,qe,Nt,Rt,zt,Ie,ze.data):F.texSubImage3D(Dt,Ct,Ft,Se,qe,Nt,Rt,zt,Ie,cn,ze):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Ct,Ft,Se,Nt,Rt,Ie,cn,ze.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Ct,Ft,Se,ze.width,ze.height,Ie,ze.data):F.texSubImage2D(F.TEXTURE_2D,Ct,Ft,Se,Nt,Rt,Ie,cn,ze);S.pixelStorei(F.UNPACK_ROW_LENGTH,xn),S.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xe),S.pixelStorei(F.UNPACK_SKIP_PIXELS,Dn),S.pixelStorei(F.UNPACK_SKIP_ROWS,ii),S.pixelStorei(F.UNPACK_SKIP_IMAGES,Ii),Ct===0&&k.generateMipmaps&&F.generateMipmap(Dt),S.unbindTexture()},this.initRenderTarget=function(T){$.get(T).__webglFramebuffer===void 0&&nt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?nt.setTextureCube(T,0):T.isData3DTexture?nt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?nt.setTexture2DArray(T,0):nt.setTexture2D(T,0),S.unbindTexture()},this.resetState=function(){U=0,O=0,tt=null,S.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}};var Co=class extends Si{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Ee;t.deleteAttribute("uv");let e=new ce({side:Qe}),n=new ce,s=new fo(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new st(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Jr(t,n,6),a=new $e;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new st(t,gr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new st(t,gr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new st(t,gr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new st(t,gr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new st(t,gr(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new st(t,gr(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function gr(i){return new lo({color:0,emissive:16777215,emissiveIntensity:i})}var Ti=[{id:0,name:"Bubbles",tag:"The Royal Bean",color:"#ff5fb4"},{id:1,name:"Ninja",tag:"The Silent Bean",color:"#3b82f6"},{id:2,name:"Dino",tag:"The Chunky Dino",color:"#3ddc84"},{id:3,name:"Robo",tag:"The Bolt Bot",color:"#ffc233"}],Io=[{id:0,key:"fun",name:"Fun Map",sub:"Chill",stars:1,limit:400,finishZ:-424,finishY:.15,colors:["#80ed99","#4cc9f0"],blurb:"Giant theme park: rides, highways with cars to drive, a SKY SPEEDWAY to win red racers, then the maze. Nothing can kill you!"},{id:1,key:"jungle",name:"Jungle",sub:"Free Roam",stars:1,limit:0,finishZ:-99999,finishY:99999,free:!0,colors:["#6bbf59","#ffd23f"],blurb:"Wild lion, leopard, elephant & horse roam the trees. Beat them with the BAT to tame them as pets and RIDE them - then climb the hill and free the DINOSAUR! No race, just fun."}];var Po=new z;function On(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Po.copy(t),Po[n]=0,Po.normalize();let c=.5*o/(o+a),h=1-Po.angleTo(i)/l;return Math.sign(Po[e])===1?h*c:a/(o+a)+c+c*(1-h)}var xr=class i extends Ee{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new z,c=new z,h=new z(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,m=u.length/6,_=new z,p=.5/o;for(let g=0,E=0;g<u.length;g+=3,E+=2)switch(l.fromArray(u,g),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),u[g+0]=h.x*Math.sign(l.x)+c.x*r,u[g+1]=h.y*Math.sign(l.y)+c.y*r,u[g+2]=h.z*Math.sign(l.z)+c.z*r,f[g+0]=c.x,f[g+1]=c.y,f[g+2]=c.z,Math.floor(g/m)){case 0:_.set(1,0,0),d[E+0]=On(_,c,"z","y",r,n),d[E+1]=1-On(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),d[E+0]=1-On(_,c,"z","y",r,n),d[E+1]=1-On(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),d[E+0]=1-On(_,c,"x","z",r,t),d[E+1]=On(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),d[E+0]=1-On(_,c,"x","z",r,t),d[E+1]=1-On(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),d[E+0]=1-On(_,c,"x","y",r,t),d[E+1]=1-On(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),d[E+0]=On(_,c,"x","y",r,t),d[E+1]=1-On(_,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};function Nd(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Oe,c=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Dd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);let m=Dd(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function Dd(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Ne(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<e;m++){let _=h.getComponent(f,m);a.setComponent(f+u,m,_)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var ge={R:.42,H:1.55,STEP:.34,EDGE:.28,G:34,RUN:9.4,JUMP:12.2,ACC:70,AIR:22,DEC:95,AIR_DEC:9,ICE_ACC:11,ICE_DEC:5.5,TERM:-50,SNAP:.5},Qn=(i,t,e)=>i<t?t:i>e?e:i,Ud=new Cn,zd=new Rn,Fd=new ve,Od=new z,Bd=new z,Ki=new Ut,Ai=class{constructor(){this.list=[]}add(t,e,n,s,r,o=0,a=0,l=0,c=1,h=1,u=1,f="XYZ"){Ud.set(o,a,l,f),zd.setFromEuler(Ud),Od.set(e,n,s),Bd.set(c,h,u),Fd.compose(Od,zd,Bd);let d=t.index?t.toNonIndexed():t.clone();d.attributes.uv&&d.deleteAttribute("uv"),d.applyMatrix4(Fd);let m=d.attributes.position.count,_=new Float32Array(m*3);Ki.set(r);for(let p=0;p<m;p++)_[p*3]=Ki.r,_[p*3+1]=Ki.g,_[p*3+2]=Ki.b;d.setAttribute("color",new Ne(_,3)),this.list.push(d)}addGeo(t){t.index&&(t=t.toNonIndexed()),t.attributes.uv&&t.deleteAttribute("uv"),this.list.push(t)}build(t){if(!this.list.length)return null;let e=Nd(this.list,!1);return this.list.length=0,new st(e,t)}};var ec=class{constructor(t,e=!1){this.theme=t,this.headless=e,this.group=new Wt,this.solids=[],this.ramps=[],this.discs=[],this.hazards=[],this.updaters=[],this.checkpoints=[],this.zones=[],this.pools=[],this.main=new Ai,this.glow=new Ai,this.waterY=-5,this.killY=-9,this.geoCache=new Map,this.matCache=new Map,this.colorIdx=0,this.arrowTexture=null,this.time=0,this.hitOut={nx:0,nz:1,pow:10},this.onEvent=null}rbox(t,e,n,s){let r=Math.max(.02,Math.min(s,t/2-.01,e/2-.01,n/2-.01)),o=`${t.toFixed(2)}|${e.toFixed(2)}|${n.toFixed(2)}|${r.toFixed(2)}`,a=this.geoCache.get(o);return a||(a=Math.min(t,e,n)<.35?new Ee(t,e,n):new xr(t,e,n,2,r),this.geoCache.set(o,a)),a}mat(t,e={}){var r,o,a,l;let n=t+JSON.stringify(e),s=this.matCache.get(n);return s||(s=new ce({color:t,roughness:(r=e.rough)!=null?r:.38,metalness:(o=e.metal)!=null?o:.02,emissive:(a=e.emissive)!=null?a:0,emissiveIntensity:(l=e.ei)!=null?l:1}),this.matCache.set(n,s)),s}pick(){let t=this.theme.plat;return t[this.colorIdx++%t.length]}addSolid(t,e,n,s,r,o,a={}){let l={x0:t,y0:e,z0:n,x1:s,y1:r,z1:o,active:!0,ice:!!a.ice,conv:a.conv||null,bounce:a.bounce||0,boost:a.boost||0,dx:0,dy:0,dz:0,moving:!1,name:a.name||""};return this.solids.push(l),l}add(t,e=!0,n=!0){return t.castShadow=e,t.receiveShadow=n,this.group.add(t),t}emit(t,e){this.onEvent&&this.onEvent(t,e)}platform(t,e,n,s,r,o={}){var h,u,f;let a=(h=o.h)!=null?h:1.6,l=(u=o.color)!=null?u:this.pick(),c=this.addSolid(t-s/2,e-a,n-r/2,t+s/2,e,n+r/2,o);if(!this.headless){if(this.main.add(this.rbox(s,a,r,.3),t,e-a/2,n,l),o.pad!==!1&&s>2.4&&r>2.4){let d=(f=o.padColor)!=null?f:o.ice?this.theme.icePad:this.theme.pad;this.main.add(this.rbox(s-1.1,.12,r-1.1,.05),t,e+0,n,d)}if(this.theme.edgeGlow){let d=this.theme.edgeGlow;this.glow.add(this.rbox(s+.04,.12,.12,.03),t,e-.08,n+r/2,d),this.glow.add(this.rbox(s+.04,.12,.12,.03),t,e-.08,n-r/2,d),this.glow.add(this.rbox(.12,.12,r+.04,.03),t+s/2,e-.08,n,d),this.glow.add(this.rbox(.12,.12,r+.04,.03),t-s/2,e-.08,n,d)}}return c}disc(t,e,n,s,r={}){var u,f,d,m,_,p,g,E,R;let o=(u=r.omega)!=null?u:0,a=(f=r.h)!=null?f:1.4,l={cx:t,cz:n,top:e,r:s,th:a,omega:o,phase:(d=r.phase)!=null?d:0,bounce:r.bounce||0,push:r.push||null,ice:!!r.ice,theta:(m=r.phase)!=null?m:0,dTheta:0,kind:"disc",squash:0,first:!0};if(this.discs.push(l),this.headless)return l;if(r.bounce){let x=new Wt;x.position.set(t,e,n);let M=new st(new Lt(s*.55,s*.7,1.4,20),this.mat((_=r.stem)!=null?_:"#fff3d6"));M.position.y=-.7;let v=new st(new ye(s,28,14,0,Math.PI*2,0,Math.PI/2),this.mat((p=r.color)!=null?p:"#ff3b6b",{rough:.25}));v.scale.y=.45,v.position.y=-.05,x.add(M,v);for(let w=0;w<6;w++){let y=new st(new ye(.26,10,8),this.mat("#ffffff")),b=w/6*Math.PI*2;y.position.set(Math.cos(b)*s*.62,.34*(1-.3),Math.sin(b)*s*.62),y.scale.y=.4,x.add(y)}return this.add(x),l.mesh=x,this.updaters.push((w,y)=>{l.squash=Math.max(0,l.squash-y*4);let b=1-Math.sin(l.squash*Math.PI)*.35*l.squash;x.scale.set(1+(1-b)*.5,b,1+(1-b)*.5)}),l}let c=(g=r.color)!=null?g:this.pick(),h=new Lt(s,s,a,40);if(o===0)this.main.add(h,t,e-a/2,n,c),this.main.add(new Lt(s-.5,s-.5,.12,40),t,e,n,(E=r.padColor)!=null?E:this.theme.pad),this.theme.edgeGlow&&this.glow.add(new Xe(s,.07,6,48),t,e-.1,n,this.theme.edgeGlow,Math.PI/2);else{let x=new Wt;x.position.set(t,e,n);let M=new st(h,this.mat(c));M.position.y=-a/2;let v=new st(new Lt(s-.5,s-.5,.12,40),this.mat((R=r.padColor)!=null?R:this.theme.pad));x.add(M,v);for(let w=0;w<4;w++){let y=new st(this.rbox(s*1.6,.14,.6,.05),this.mat(this.theme.hazard2));y.position.y=.06,y.rotation.y=w*Math.PI/4,x.add(y)}if(this.theme.edgeGlow){let w=new st(new Xe(s,.08,6,48),new Ae({color:this.theme.edgeGlow,toneMapped:!1}));w.rotation.x=Math.PI/2,w.position.y=-.1,x.add(w)}this.add(x),l.mesh=x,this.updaters.push(w=>{x.rotation.y=l.theta})}return l}ramp(t,e,n,s,r,o,a={}){var O,tt;let l={x0:t-o/2,x1:t+o/2,zN:e,zF:s,yN:n,yF:r,conv:a.conv||null,ice:!!a.ice,kind:"ramp"};if(this.ramps.push(l),this.headless)return l;let c=Math.min(n,r)-1.6,h=(O=a.color)!=null?O:this.pick(),u=(G,K,J)=>[G,K,J],f=u(l.x0,n,e),d=u(l.x1,n,e),m=u(l.x1,r,s),_=u(l.x0,r,s),p=u(l.x0,c,e),g=u(l.x1,c,e),E=u(l.x1,c,s),R=u(l.x0,c,s),x=[],M=(G,K,J,vt)=>{x.push(...G,...K,...J,...G,...J,...vt)};M(f,_,m,d),M(f,d,g,p),M(m,_,R,E),M(_,f,p,R),M(d,m,E,g);let v=new Oe;v.setAttribute("position",new _e(x,3)),v.computeVertexNormals();let w=x.length/3,y=new Float32Array(w*3);Ki.set(h);for(let G=0;G<w;G++)y[G*3]=Ki.r,y[G*3+1]=Ki.g,y[G*3+2]=Ki.b;v.setAttribute("color",new Ne(y,3)),this.main.addGeo(v);let b=e-s,C=r-n,P=Math.hypot(b,C),D=Math.atan2(C,b),N=(e+s)/2,A=(n+r)/2,I=-Math.sin(D),U=Math.cos(D);return this.main.add(this.rbox(o-1.6,.1,P-.6,.04),t,A+U*.02,N+I*.02*0,(tt=a.padColor)!=null?tt:a.ice?this.theme.icePad:this.theme.pad,D,0,0),l}mover(t,e,n,s,r,o,a={}){var _,p,g;let l=(_=a.h)!=null?_:1.5,c=this.addSolid(t-s/2,e-l,n-r/2,t+s/2,e,n+r/2,a);c.moving=!0,c.first=!0;let h=null;if(!this.headless){if(h=new st(this.rbox(s,l,r,.28),this.mat((p=a.color)!=null?p:this.pick(),{rough:.3})),a.pad!==!1){let E=new st(this.rbox(s-1,.12,r-1,.05),this.mat((g=a.padColor)!=null?g:this.theme.pad));E.position.y=l/2,h.add(E)}if(a.stripes){let E=new st(this.rbox(s+.02,.4,r+.02,.05),this.mat(this.theme.hazard));E.position.y=0,h.add(E)}this.add(h)}let u=0,f=0,d=0,m=E=>{let[R,x,M]=o(E);c.x0=t-s/2+R,c.x1=t+s/2+R,c.y0=e-l+x,c.y1=e+x,c.z0=n-r/2+M,c.z1=n+r/2+M,c.first&&(u=R,f=x,d=M,c.first=!1),c.dx=R-u,c.dy=x-f,c.dz=M-d,u=R,f=x,d=M,h&&h.position.set(t+R,e-l/2+x,n+M)};return m(0),this.updaters.push(E=>m(E)),c}tile(t,e,n,s,r,o={}){var _,p,g,E,R,x;let a=(_=o.period)!=null?_:4.8,l=(p=o.solidT)!=null?p:2.4,c=(g=o.warn)!=null?g:.8,h=(E=o.off)!=null?E:0,u=this.addSolid(t-s/2,e-1,n-r/2,t+s/2,e,n+r/2,o),f=null,d=null;this.headless||(d=new ce({color:(R=o.color)!=null?R:this.pick(),roughness:.3,emissive:0}),f=new st(this.rbox(s,1,r,.22),d),f.position.set(t,e-.5,n),this.add(f));let m=new Ut((x=o.color)!=null?x:"#ffffff");return this.updaters.push(M=>{let v=((M+h)%a+a)%a;v<l?(u.active=!0,f&&(f.visible=!0,f.position.x=t,d.emissive.setRGB(0,0,0))):v<l+c?(u.active=!0,f&&(f.visible=!0,f.position.x=t+Math.sin(M*70)*.07,d.emissive.setRGB(.55,.05,.02))):(u.active=!1,f&&(f.visible=!1))}),u}conveyor(t,e,n,s,r,o,a={}){let l=this.addSolid(t-s/2,e-1.4,n-r/2,t+s/2,e,n+r/2,{...a,conv:[0,o]});if(this.headless)return l;this.main.add(this.rbox(s,1.4,r,.25),t,e-.7,n,this.theme.convBase);let c=new Ge(s-1.2,r-.6),h=this.arrowTexture?this.arrowTexture.clone():null;h&&(h.needsUpdate=!0,h.wrapS=h.wrapT=Ws,h.repeat.set(Math.max(1,Math.round((s-1.2)/2.4)),Math.max(1,Math.round((r-.6)/2.4))));let u=new st(c,new ce({color:this.theme.belt,map:h,roughness:.6}));u.rotation.x=-Math.PI/2,o>0&&(u.rotation.z=Math.PI),u.position.set(t,e+.03,n),this.add(u,!1,!0);let f=Math.abs(o);return this.updaters.push((d,m)=>{h&&(h.offset.y-=f*m/2.4/(r-.6)*h.repeat.y)}),l}bar(t,e,n,s,r={}){var E,R,x,M,v,w,y;let o=(E=r.w)!=null?E:1.2,a=(R=r.h)!=null?R:1.2,l=(x=r.omega)!=null?x:1.4,c=(M=r.phase)!=null?M:0,h=(v=r.arms)!=null?v:1,u={type:"bar",test:(b,C,P)=>{if(b.y>e+a||b.y+ge.H<e)return!1;let D=b.x-t,N=b.z-n;if(D*D+N*N>(s/2+1.2)*(s/2+1.2))return!1;let A=c+l*C;for(let I=0;I<h;I++){let U=A+I*Math.PI/h,O=Math.cos(U),tt=Math.sin(U),G=D*O-N*tt,K=D*tt+N*O,J=Qn(G,-s/2,s/2),vt=Qn(K,-o/2,o/2),yt=G-J,ee=K-vt;if(yt*yt+ee*ee<ge.R*ge.R){let Qt=Math.hypot(D,N)||.001,j=l*N,B=-l*D,W=Math.hypot(j,B)||1;j/=W,B/=W;let lt=j+D/Qt*.45,At=B+N/Qt*.45,Z=Math.hypot(lt,At)||1;return P.nx=lt/Z,P.nz=At/Z,P.pow=Qn(6+Math.abs(l)*Qt*1.15,9,21),!0}}return!1}};if(this.hazards.push(u),this.headless)return u;let f=new Wt;f.position.set(t,e+a/2,n);let d=Math.max(3,Math.round(s/2.4)),m=s/d,_=this.mat((w=r.color1)!=null?w:this.theme.hazard,{rough:.3}),p=this.mat((y=r.color2)!=null?y:this.theme.hazard2,{rough:.3});for(let b=0;b<h;b++){let C=new Wt;C.rotation.y=b*Math.PI/h;for(let P=0;P<d;P++){let D=new st(this.rbox(m*.995,a,o,.25),P%2?_:p);D.position.x=-s/2+m*(P+.5),D.castShadow=!0,C.add(D)}f.add(C)}let g=new st(new Lt(o*.85,o,a+.7,16),this.mat(this.theme.hub));return g.castShadow=!0,f.add(g),this.add(f),this.updaters.push(b=>{f.rotation.y=c+l*b}),u}hammer(t,e,n,s,r={}){var g,E,R,x,M,v,w,y,b;let o=(g=r.amp)!=null?g:1.1,a=(E=r.omega)!=null?E:1.6,l=(R=r.phase)!=null?R:0,c=(x=r.r)!=null?x:1.3,h=(M=r.span)!=null?M:9,u={type:"hammer",test:(C,P,D)=>{let N=o*Math.sin(a*P+l),A=t+s*Math.sin(N),I=e-s*Math.cos(N),U=o*a*Math.cos(a*P+l),O=s*Math.cos(N)*U,tt=Qn(I,C.y+.15,C.y+ge.H-.1),G=A-C.x,K=I-tt,J=n-C.z,vt=ge.R+c;if(G*G+K*K+J*J<vt*vt){let yt=-G,ee=-J;yt=(Math.sign(O)||Math.sign(yt)||1)*1,ee=ee*.5;let j=Math.hypot(yt,ee);return D.nx=yt/j,D.nz=ee/j,D.pow=Qn(Math.abs(O)*1.05+6,10,23),!0}return!1}};if(this.hazards.push(u),this.headless)return u;let f=new Wt;f.position.set(t,e,n);let d=new st(new Lt(.17,.17,s,10),this.mat(this.theme.hub));d.position.y=-s/2;let m=new st(new ye(c,28,18),this.mat(this.theme.hazard,{rough:.25}));m.position.y=-s;let _=new st(new Xe(c*.98,.12,8,28),this.mat(this.theme.hazard2));_.position.y=-s,_.rotation.x=Math.PI/2;let p=_.clone();if(p.rotation.set(0,Math.PI/2,0),f.add(d,m,_,p),f.traverse(C=>{C.isMesh&&(C.castShadow=!0)}),this.add(f),this.updaters.push(C=>{f.rotation.z=o*Math.sin(a*C+l)}),!this.headless){let C=this.theme.hub;this.main.add(this.rbox(.9,e-((v=r.baseY)!=null?v:e-s-1.5)+1.2,.9,.2),t-h,(e+((w=r.baseY)!=null?w:e-s-1.5))/2-0,n,C),this.main.add(this.rbox(.9,e-((y=r.baseY)!=null?y:e-s-1.5)+1.2,.9,.2),t+h,(e+((b=r.baseY)!=null?b:e-s-1.5))/2-0,n,C),this.main.add(this.rbox(h*2+1,.8,.9,.2),t,e+.6,n,C)}return u}balls(t,e,n,s,r,o,a,l,c={}){let h=n-e,u=h/o,f=l.map(()=>({x:t,z:0,y:0,on:!1})),d=[],m=p=>new Ut(p%2?this.theme.hazard:this.theme.hazard2);this.headless||l.forEach((p,g)=>{let E=new ye(r,32,20),R=E.attributes.position,x=R.count,M=new Float32Array(x*3);for(let w=0;w<x;w++){let y=Math.atan2(R.getZ(w),R.getX(w)),C=Math.floor((y+Math.PI)/(Math.PI*2)*8)%2?new Ut(this.theme.hazard):new Ut(this.theme.hazard2);M[w*3]=C.r,M[w*3+1]=C.g,M[w*3+2]=C.b}E.setAttribute("color",new Ne(M,3));let v=new st(E,new ce({vertexColors:!0,roughness:.25}));v.visible=!1,this.add(v),d.push(v)});let _={type:"balls",test:(p,g,E)=>{for(let R=0;R<f.length;R++){let x=f[R];if(!x.on)continue;let M=Qn(x.y,p.y+.15,p.y+ge.H-.1),v=x.x-p.x,w=x.y-M,y=x.z-p.z,b=ge.R+r;if(v*v+w*w+y*y<b*b){let C=(p.x-x.x)*.8,P=1,D=Math.hypot(C,P);return E.nx=C/D,E.nz=P/D,E.pow=Qn(o*1.1+4,10,20),!0}}return!1}};return this.hazards.push(_),this.updaters.push(p=>{l.forEach((g,E)=>{let R=f[E],x=((p+g)%a+a)%a,M=x<u;R.on=M,M&&(R.z=e+x*o,R.y=s(R.z)+r,R.x=t);let v=d[E];v&&(v.visible=M,M&&(v.position.set(R.x,R.y,R.z),v.rotation.x=R.z/r))})}),_}seesaw(t,e,n,s,r,o,a,l=0){let c={x0:t-s/2,x1:t+s/2,zN:n+r/2,zF:n-r/2,yN:e,yF:e,conv:null,ice:!1,kind:"ramp",seesaw:!0};this.ramps.push(c);let h=m=>{let _=o*Math.sin(2*Math.PI*m/a+l);return c.yN=e+_,c.yF=e-_,_};if(h(0),this.headless)return this.updaters.push(m=>h(m)),c;this.main.add(new Lt(.5,1.1,2.4,8),t,e-1.4,n,this.theme.hub),this.main.add(this.rbox(s*.9,.7,1.4,.2),t,e-2.5,n,this.theme.hazard2);let u=new Wt;u.position.set(t,e-.25,n);let f=new st(this.rbox(s,.5,r,.2),this.mat(this.pick(),{rough:.35})),d=new st(this.rbox(s-1.2,.1,r-1.2,.04),this.mat(this.theme.pad));d.position.y=.27,u.add(f,d);for(let m of[-1,1]){let _=new st(this.rbox(s,.62,1.2,.2),this.mat(this.theme.hazard,{rough:.3}));_.position.set(0,.03,m*(r/2-.6)),u.add(_)}for(let m of[-1,1]){let _=new st(new Lt(.1,.1,1.1,8),this.mat(this.theme.hub));_.position.set(m*(s/2-.5),.9,0),u.add(_)}return this.add(u),this.updaters.push(m=>{let _=h(m);u.rotation.x=-Math.atan2(_,r/2)}),c}bungee(t,e,n,s,r,o){let a=this.disc(t,n,e,s,{bounce:r,color:this.theme.hazard});if(this.headless)return a;let l=o,c=14;for(let h=0;h<c;h++){let u=h/c*Math.PI*2,f=t+Math.cos(u)*(s*.92),d=e+Math.sin(u)*(s*.92);this.main.add(new Lt(.07,.07,l-n,5),f,(l+n)/2,d,h%2?"#ffffff":this.theme.hazard)}this.main.add(new Xe(s*.92,.35,8,36),t,l,e,this.theme.accent,Math.PI/2),this.main.add(new Xe(s*.92,.2,8,36),t,n+.15,e,"#ffffff",Math.PI/2);for(let h=0;h<3;h++){let u=Math.PI/2+h*Math.PI*2/3+.5,f=t+Math.cos(u)*(s+1.4),d=e+Math.sin(u)*(s+1.4);this.main.add(new Lt(.45,.6,l+12,8),f,(l-12)/2,d,h%2?"#ffd23f":"#ffffff")}return this.glow.add(new ye(.9,12,8),t,l+1.6,e,"#ffffff"),a}tube(t,e,n){if(this.headless)return;let s=new z(0,1,0),r=new z,o=new z,a=new z,l=new Rn,c=new Cn;for(let h=0;h<t.length-1;h++){r.set(...t[h]),o.set(...t[h+1]),a.subVectors(o,r);let u=a.length();a.normalize(),l.setFromUnitVectors(s,a),c.setFromQuaternion(l),this.main.add(new Lt(e,e,u*1.02,6),(r.x+o.x)/2,(r.y+o.y)/2,(r.z+o.z)/2,n,c.x,c.y,c.z)}}airpad(t,e,n,s,r,o={}){var f,d;let a={x:t,z:e,r:n,y0:s,y1:s+r,lift:(f=o.lift)!=null?f:90,vmax:(d=o.vmax)!=null?d:9};if(this.zones.push(a),this.headless)return a;this.main.add(new Lt(n*.95,n,.5,28),t,s+.25,e,this.theme.hub),this.glow.add(new Xe(n*.8,.14,8,36),t,s+.55,e,"#9cf0ff",Math.PI/2);let l=new Ae({color:"#8fe9ff",transparent:!0,opacity:.16,depthWrite:!1,side:ln,toneMapped:!1}),c=new st(new Lt(n*.92,n*.92,r,24,1,!0),l);c.position.set(t,s+r/2,e),c.renderOrder=3,this.group.add(c);let h=new Ae({color:"#e6fbff",transparent:!0,opacity:.5,depthWrite:!1,toneMapped:!1}),u=[];for(let m=0;m<5;m++){let _=new st(new Xe(n*.85,.08,6,28),h);_.rotation.x=Math.PI/2,_.renderOrder=3,this.group.add(_),u.push(_)}return this.updaters.push(m=>{u.forEach((_,p)=>{let g=(m*.5+p/5)%1;_.position.set(t,s+.6+g*(r-.8),e),_.scale.setScalar(1-g*.25)})}),a}punch(t,e,n,s,r,o,a={}){var R,x;let l=(R=a.period)!=null?R:3.2,c=(x=a.off)!=null?x:0,h=1,u=Math.hypot(s,r)||1;s/=u,r/=u;let f=M=>{let v=((M+c)%l+l)%l/l,w=(y,b,C)=>{let P=Math.max(0,Math.min(1,(C-y)/(b-y)));return P*P*(3-2*P)};return o*(w(.5,.58,v)-w(.78,.95,v))},d={type:"punch",test:(M,v,w)=>{var U;let y=f(v);if(y<.4)return!1;let b=t+s*(y+.5),C=n+r*(y+.5),P=Qn(e,M.y+.15,M.y+ge.H-.1),D=b-M.x,N=e-P,A=C-M.z,I=ge.R+h;return D*D+N*N+A*A<I*I?(w.nx=s,w.nz=r,w.pow=(U=a.pow)!=null?U:15,!0):!1}};if(this.hazards.push(d),this.headless)return d;let m=new Wt;m.position.set(t,e,n),m.rotation.y=Math.atan2(s,r);let _=new st(new Lt(.22,.22,1,8),this.mat(this.theme.hub));_.rotation.x=Math.PI/2;let p=new st(new ye(h,20,14),this.mat(this.theme.hazard,{rough:.3})),g=new st(new Lt(.62,.62,.5,14),this.mat("#ffffff"));g.rotation.x=Math.PI/2,g.position.z=-.95;let E=new st(new ye(.42,12,10),this.mat(this.theme.hazard,{rough:.3}));return E.position.set(.7,.45,-.35),p.add(g,E),g.position.z=-.95,p.scale.set(1,1,1.1),m.add(_,p),m.traverse(M=>{M.isMesh&&(M.castShadow=!0)}),this.add(m,!1,!1),this.main.add(this.rbox(2.2,2.6,1.2,.3),t-s*.3,e,n-r*.3,this.theme.hub,0,Math.atan2(s,r),0),this.updaters.push(M=>{let v=f(M);_.scale.y=Math.max(.01,v+.2),_.position.z=(v+.2)/2,p.position.z=v+.5}),d}ferris(t,e,n,s,r,o){let a=u=>u*Math.PI*2/r;for(let u=0;u<r;u++)this.mover(t,e-s,n,5,5,f=>{let d=o*f+a(u);return[0,s*(1-Math.cos(d)),s*Math.sin(d)]},{h:.7,color:this.theme.plat[u%this.theme.plat.length],pad:!0});if(this.headless)return;let l=new Wt;l.position.set(t,e,n);let c=this.mat("#ffffff",{rough:.35});for(let u of[-1,1]){let f=new st(new Xe(s,.28,8,56),c);f.rotation.y=Math.PI/2,f.position.x=u*3.2,l.add(f)}for(let u=0;u<4;u++)for(let f of[-1,1]){let d=new st(new Lt(.12,.12,s*2,6),this.mat(this.theme.hazard));d.rotation.x=u*Math.PI/4,d.position.x=f*3.2,l.add(d)}let h=new st(new Lt(.9,.9,7.4,14),this.mat(this.theme.hub));h.rotation.z=Math.PI/2,l.add(h),this.add(l,!0,!1);for(let u of[-1,1])for(let f of[-1,1])this.main.add(this.rbox(.7,e+1,.7,.2),t+u*4.4,(e-1)/2,n+f*s*.55,this.theme.hub,0,0,0,1,1,1);this.updaters.push(u=>{l.rotation.x=-(o*u)})}pirate(t,e,n,s,r,o=.1){let a=o+n;if(this.mover(t,o,e,10,5,c=>{let h=s*Math.sin(2*Math.PI*c/r);return[0,n*(1-Math.cos(h)),n*Math.sin(h)]},{h:.9,color:this.theme.hazard,stripes:!0,pad:!0}),this.headless)return;for(let c of[-1,1])this.main.add(this.rbox(.8,a+2,.8,.2),t+c*6.2,(a+2)/2-.5,e+2.2,this.theme.hub,0,0,.12*c),this.main.add(this.rbox(.8,a+2,.8,.2),t+c*6.2,(a+2)/2-.5,e-2.2,this.theme.hub,0,0,.12*c);this.main.add(this.rbox(14.5,.9,.9,.2),t,a+.4,e,this.theme.accent);let l=new Wt;l.position.set(t,a,e);for(let c of[-1,1]){let h=new st(new Lt(.16,.16,n,8),this.mat("#ffffff"));h.position.set(c*4.2,-n/2,0),l.add(h)}this.add(l,!0,!1),this.updaters.push(c=>{l.rotation.x=-s*Math.sin(2*Math.PI*c/r)})}dropTower(t,e,n,s=13){let r=o=>{let a=(o%s+s)%s;if(a<1)return 0;if(a<5.5){let l=(a-1)/4.5;return n*(l*l*(3-2*l))}if(a<8.5)return n;if(a<9.4){let l=(a-8.5)/.9;return n*(1-l*l)}return 0};if(this.mover(t,.1,e,6,6,o=>[0,r(o),0],{h:.9,color:this.theme.accent,stripes:!0,pad:!0}),!this.headless){for(let o of[-1,1])for(let a of[-1,1])this.main.add(this.rbox(.7,n+5,.7,.2),t+o*3.6,(n+5)/2-.5,e+a*3.6,"#ffffff");this.main.add(this.rbox(8.2,.8,8.2,.2),t,n+4.6,e,this.theme.hazard),this.glow.add(new ye(.7,10,8),t,n+5.6,e,"#ffffff")}}orbit(t,e,n,s,r,o){for(let a=0;a<r;a++){let l=a*Math.PI*2/r;this.mover(t+n,s,e,4.4,4.4,c=>{let h=o*c+l;return[n*Math.cos(h)-n,.7*Math.sin(c*1.3+l),n*Math.sin(h)]},{h:.8,color:this.theme.plat[a%this.theme.plat.length],pad:!0})}this.headless||(this.main.add(new Lt(.7,.9,s+5,10),t,(s+5)/2-.4,e,this.theme.hub),this.main.add(new Be(2.4,2.2,14),t,s+6,e,this.theme.hazard),this.glow.add(new Xe(n,.12,6,48),t,s-.5,e,"#ffffff",Math.PI/2))}cannon(t,e,n,s){if(this.disc(t,0,e,2.4,{bounce:n,push:s,color:this.theme.hazard}),this.headless)return;let r=s[1]<0?-1:1;this.main.add(new Lt(1,1.35,5.5,14),t,2.4,e-r*2.8,this.theme.hub,r*.93,0,0),this.main.add(new Xe(1.1,.2,8,18),t,4.4,e-r*.5,this.theme.accent,Math.PI/2-r*.64,0,0)}checkpoint(t,e,n,s=14){let r={x:t,y:e,z:n,w:s,spawn:[t,e,n+1]};return this.checkpoints.push(r),this.headless||this.arch(t,e,n,s,this.theme.accent,!0),r}arch(t,e,n,s,r,o=!1){let a=o?5.2:8.5;this.main.add(this.rbox(.9,a,.9,.25),t-s/2,e+a/2,n,r),this.main.add(this.rbox(.9,a,.9,.25),t+s/2,e+a/2,n,r),this.main.add(this.rbox(s+.9,o?.9:1.6,o?.9:1.4,.25),t,e+a,n,r),this.glow.add(new ye(.42,12,8),t-s/2,e+a+.8,n,"#ffffff"),this.glow.add(new ye(.42,12,8),t+s/2,e+a+.8,n,"#ffffff")}update(t,e){this.time=t;for(let n of this.updaters)n(t,e);for(let n of this.discs)if(n.omega){let s=n.phase+n.omega*t;n.dTheta=n.first?0:s-n.theta,n.theta=s,n.first=!1}}carry(t){let e=t.ground;if(e){if(e.moving)t.x+=e.dx,t.y+=e.dy,t.z+=e.dz;else if(e.kind==="disc"&&e.omega){let n=t.x-e.cx,s=t.z-e.cz,r=e.dTheta,o=Math.cos(r),a=Math.sin(r);t.x=e.cx+n*o+s*a,t.z=e.cz-n*a+s*o,t.yawOff=(t.yawOff||0)+r}}}checkHazards(t,e){for(let n of this.hazards)if(n.test(t,e,this.hitOut))return this.hitOut;return null}finalize(){if(this.headless)return;let t=this.main.build(new ce({vertexColors:!0,roughness:.4,metalness:.02}));t&&(t.castShadow=!0,t.receiveShadow=!0,this.group.add(t));let e=this.glow.build(new Ae({vertexColors:!0,toneMapped:!1}));e&&this.group.add(e)}resolveHorizontal(t){let e=ge.R,n=ge.H;for(let s of this.solids){if(!s.active||s.y1<=t.y+ge.STEP||s.y0>=t.y+n||t.x<s.x0-e||t.x>s.x1+e||t.z<s.z0-e||t.z>s.z1+e)continue;let r=Qn(t.x,s.x0,s.x1),o=Qn(t.z,s.z0,s.z1),a=t.x-r,l=t.z-o,c=a*a+l*l;if(c>=e*e)continue;let h,u;if(c>1e-9){let d=Math.sqrt(c),m=e-d;h=a/d,u=l/d,t.x+=h*m,t.z+=u*m}else{let d=t.x-s.x0,m=s.x1-t.x,_=t.z-s.z0,p=s.z1-t.z,g=Math.min(d,m,_,p);g===d?(t.x=s.x0-e,h=-1,u=0):g===m?(t.x=s.x1+e,h=1,u=0):g===_?(t.z=s.z0-e,h=0,u=-1):(t.z=s.z1+e,h=0,u=1)}let f=t.vx*h+t.vz*u;if(f<0&&(t.vx-=f*h,t.vz-=f*u),s.moving){let d=s.dx*h+s.dz*u;d>0&&(t.vx+=h*Math.min(d/.016,8)*.3,t.vz+=u*Math.min(d/.016,8)*.3)}}for(let s of this.discs){if(t.y+n<=s.top-s.th||t.y>=s.top-ge.STEP)continue;let r=t.x-s.cx,o=t.z-s.cz,a=Math.hypot(r,o),l=s.r+e;if(a<l&&a>1e-6){let c=r/a,h=o/a;t.x=s.cx+c*l,t.z=s.cz+h*l;let u=t.vx*c+t.vz*h;u<0&&(t.vx-=u*c,t.vz-=u*h)}}}findGround(t,e,n){let s=ge.EDGE,r=e+ge.STEP,o=n&&t.noSnap<=0?ge.SNAP:0,a=null,l=-1e9;for(let c of this.solids){if(!c.active)continue;let h=c.y1;h>r||h<=l||t.x<c.x0-s||t.x>c.x1+s||t.z<c.z0-s||t.z>c.z1+s||(t.y<=h+1e-4||t.y<=h+o)&&(a=c,l=h)}for(let c of this.ramps){if(t.x<c.x0-s||t.x>c.x1+s||t.z>c.zN+.3||t.z<c.zF-.3)continue;let h=Qn((c.zN-t.z)/(c.zN-c.zF),0,1),u=c.yN+(c.yF-c.yN)*h;u>r||u<l||(t.y<=u+1e-4||t.y<=u+o)&&(a=c,l=u)}for(let c of this.discs){let h=c.top;if(h>r||h<l)continue;let u=t.x-c.cx,f=t.z-c.cz,d=c.r+s*.8;u*u+f*f>d*d||(t.y<=h+1e-4||t.y<=h+o)&&(a=c,l=h)}return a?{s:a,top:l}:null}hitCeiling(t,e){for(let n of this.solids)if(n.active&&!(e+ge.H>n.y0+.02||t.y+ge.H<=n.y0)&&!(t.x<n.x0||t.x>n.x1||t.z<n.z0||t.z>n.z1))return n;return null}};function nv(i,t,e){let n=document.createElement("canvas");n.width=t,n.height=e;let s=n.getContext("2d");if(i==="pk"){s.fillStyle="#01411c",s.fillRect(0,0,t,e),s.fillStyle="#ffffff",s.fillRect(0,0,t*.25,e);let o=t*.625,a=e*.5,l=e*.3;s.beginPath(),s.arc(o,a,l,0,Math.PI*2),s.fillStyle="#ffffff",s.fill(),s.beginPath(),s.arc(o+l*.28,a-l*.12,l*.82,0,Math.PI*2),s.fillStyle="#01411c",s.fill();let c=o+l*.52,h=a-l*.34,u=l*.34,f=u*.4;s.beginPath();for(let d=0;d<10;d++){let m=-Math.PI/2+d*Math.PI/5+.35,_=d%2?f:u;s.lineTo(c+Math.cos(m)*_,h+Math.sin(m)*_)}s.closePath(),s.fillStyle="#ffffff",s.fill()}else s.fillStyle="#000000",s.fillRect(0,0,t,e/3),s.fillStyle="#ffffff",s.fillRect(0,e/3,t,e/3),s.fillStyle="#007a3d",s.fillRect(0,e*2/3,t,e/3),s.beginPath(),s.moveTo(0,0),s.lineTo(t*.33,e/2),s.lineTo(0,e),s.closePath(),s.fillStyle="#ce1126",s.fill();let r=new vn(n);return r.colorSpace=Pe,r.anisotropy=4,r}var kd={};function eu(i){return kd[i]||(kd[i]=nv(i,768,512))}function Lo(i,t,e){let n=new Wt,s=new st(new Ge(t,e),new Ae({map:eu(i),toneMapped:!1,side:ln}));n.add(s);let r=new st(new Ee(t+1.2,e+1.2,.3),new ce({color:"#f4f1e8",roughness:.5}));return r.position.z=-.2,n.add(r),n}var iv='"Noto Nastaliq Urdu","Jameel Noori Nastaleeq","Alvi Nastaleeq","Geeza Pro","Segoe UI","Tahoma","Arial",sans-serif',sv='"Lilita One","Fredoka One","Arial Rounded MT Bold","Trebuchet MS",Impact,Arial,sans-serif';function rv(i,t,e={}){let s=Math.round(1024/t),r=document.createElement("canvas");r.width=1024,r.height=s;let o=r.getContext("2d"),a=o.createLinearGradient(0,0,1024,s);a.addColorStop(0,(e.bg||["#1b1464","#3a2d9e"])[0]),a.addColorStop(1,(e.bg||["#1b1464","#3a2d9e"])[1]),o.fillStyle=a,o.fillRect(0,0,1024,s),o.lineWidth=s*.05,o.strokeStyle=e.border||"#ffd23f",o.strokeRect(s*.05,s*.05,1024-s*.1,s-s*.1);let l=e.urdu?iv:sv,c=s*(e.urdu?.36:.5);o.textAlign="center",o.textBaseline="alphabetic",e.urdu&&(o.direction="rtl");let h=1024*(e.urdu?.62:.86),u=s*(e.urdu?.6:.62),f=c*.8,d=c*.2;for(let p=0;p<3;p++){o.font=`${c}px ${l}`;let g=o.measureText(i);f=g.actualBoundingBoxAscent>0?g.actualBoundingBoxAscent:c*.8,d=g.actualBoundingBoxDescent>0?g.actualBoundingBoxDescent:c*.2;let E=Math.min(1,h/Math.max(1,g.width),u/Math.max(1,f+d));if(E>=.99)break;c*=E}let m=s/2+(f-d)/2;o.lineJoin="round",o.lineWidth=c*.12,o.strokeStyle=e.stroke||"#000000",o.strokeText(i,1024/2,m),o.fillStyle=e.fg||"#ffd23f",o.fillText(i,1024/2,m);let _=new vn(r);return _.colorSpace=Pe,_.anisotropy=4,_}function Bn(i,t,e,n={}){let s=new Wt;s.add(new st(new Ge(t,e),new Ae({map:rv(i,t/e,n),toneMapped:!1,side:ln})));let r=new st(new Ee(t+.8,e+.8,.3),new ce({color:n.frame||"#f4f1e8",roughness:.5}));return r.position.z=-.2,s.add(r),s}var on=16,No=7,Re=56,xs=-262,ti=-336,dn=-4,Do=-416;function Hd(){let i=[],t=[],e=[],n=[],s=[],r=[],o=[];i.push({ax:38,az:ti-7,bx:38,bz:-410,hw:6,y0:0,y1:on,g:"ramp+"}),i.push({ax:Re,az:Do,bx:Re,bz:dn,hw:No,y0:on,y1:on,g:"s2"}),i.push({ax:Re,az:dn,bx:-Re,bz:dn,hw:No,y0:on,y1:on,g:"sx"}),i.push({ax:-Re,az:dn,bx:-Re,bz:Do,hw:No,y0:on,y1:on,g:"s3"}),t.push({x:47,z:Do,r:15,y:on,g:"pa"},{x:Re,z:dn,r:12,y:on,g:"pb"},{x:-Re,z:dn,r:12,y:on,g:"pc"},{x:-47,z:Do,r:15,y:on,g:"pd"});let a=(_,p)=>s.push({k:"barrel",x:_,z:p,r:1.3}),l=(_,p,g)=>{for(let E=p;E<=g+.01;E+=2.4)s.push({k:"block",x:_,z:E,r:1.2})},c=(_,p,g=7)=>{n.push({x:_,z:p,r:g,y:on})},h=(_,p)=>e.push({x:_,z:p,r:4,y:on}),u=-Re,f=2.2;h(Re,-396),a(Re-f,-385),a(Re+f,-375),a(Re-f,-365),a(Re+f,-355),h(Re,-345),l(Re-3.2,-300,-292),l(Re+3.2,-284,-276),h(Re,-255),c(Re,-235),h(Re,-190),a(Re+f,-150),a(Re-f,-140),a(Re+f,-130),h(Re,-100),h(Re,-22),a(36,dn+f),a(26,dn-f),h(15,dn),h(-15,dn),a(-26,dn+f),a(-36,dn-f),h(u,-25),a(u-f,-45),a(u+f,-55),a(u-f,-65),h(u,-128),c(u,-205),l(u-3.2,-250,-242),l(u+3.2,-234,-226),h(u,-190),c(u,-300),h(u,-338),a(u-f,-350),a(u+f,-358),a(u-f,-366),h(u,-388),r.push({x:Re,z:-250,w:8},{x:15,z:dn,w:8},{x:u,z:-185,w:8},{x:u,z:-397,w:8});let d={x:-47,z:Do,r:15},m=[-57,-51,-45,-39].map((_,p)=>({id:4+p,x:_,z:-423,y:on,yaw:0}));for(let _ of[1,-1]){for(let p=-40;p>-405;p-=30)Math.abs(p+26)>20&&Math.abs(p-xs)>11&&Math.abs(p-ti)>11&&o.push({x:_*Re-10.2,z:p,kind:"gantry",sd:_,span:10.2});_>0&&o.push({x:38-6.6,z:-380,kind:"col"},{x:38+6.6,z:-380,kind:"col"},{x:38-6.6,z:-362,kind:"col"},{x:38+6.6,z:-362,kind:"col"}),o.push({x:_*Re,z:dn,kind:"plaza"},{x:_*34,z:-421,kind:"plaza"},{x:_*44,z:-404,kind:"plaza"})}return{ground:[],segs:i,plazas:t,boosts:e,slicks:n,defs:s,gates:r,garage:d,racers:m,pillars:o}}function Gd(i){let t=i.map(e=>({x:e.x,z:e.z,y:on,r:e.r,vx:0,vz:0}));return()=>t}function Vd(i,t,e,n){let s=i.main,r=i.glow,o=i.group,a=on,l=(x,M,v)=>new Ee(x,M,v),c="#2f3342",h="#ff3b3b",u="#ffffff",f=(x,M,v)=>{for(let w of t.segs){if(w.g===v)continue;let y=w.bx-w.ax,b=w.bz-w.az,C=y*y+b*b,P=((x-w.ax)*y+(M-w.az)*b)/C;if(P=Math.max(0,Math.min(1,P)),Math.hypot(x-(w.ax+y*P),M-(w.az+b*P))<w.hw-.5)return!0}for(let w of t.plazas)if(w.g!==v&&Math.hypot(x-w.x,M-w.z)<w.r-.5)return!0;return!1},d=0;for(let x of t.segs){let M=Math.hypot(x.bx-x.ax,x.bz-x.az),v=Math.max(1,Math.ceil(M/12));for(let w=0;w<v;w++,d++){let y=w/v,b=(w+1)/v,C=x.ax+(x.bx-x.ax)*y,P=x.az+(x.bz-x.az)*y,D=x.ax+(x.bx-x.ax)*b,N=x.az+(x.bz-x.az)*b,A=x.y0+(x.y1-x.y0)*y,I=x.y0+(x.y1-x.y0)*b,U=D-C,O=N-P,tt=Math.hypot(U,O),G=(C+D)/2,K=(P+N)/2,J=(A+I)/2,vt=-Math.atan2(O,U),yt=Math.atan2(I-A,tt),ee=-O/tt,Qt=U/tt,j=Math.hypot(tt,I-A);s.add(l(j+.3,.9,x.hw*2),G,J-.45,K,c,0,vt,yt,1,1,1,"YXZ");for(let B of[-1,1]){let W=G+ee*B*(x.hw-.3),lt=K+Qt*B*(x.hw-.3);f(W,lt,x.g)||(s.add(l(j+.05,1,.55),W,J+.5,lt,(d+(B>0?1:0))%2?h:u,0,vt,yt,1,1,1,"YXZ"),r.add(l(j+.05,.12,.2),W-ee*B*.1,J+1.1,lt-Qt*B*.1,"#22f2ff",0,vt,yt,1,1,1,"YXZ"))}d%2===0&&!f(G,K,x.g)&&r.add(l(Math.min(j,5)*.55,.04,.3),G,J+.04,K,"#ffe14a",0,vt,yt,1,1,1,"YXZ")}}for(let x of t.plazas){s.add(new Lt(x.r,x.r,.9,40),x.x,x.y-.45,x.z,c);for(let M=0;M<36;M++){let v=M/36*Math.PI*2,w=x.x+Math.cos(v)*(x.r-.3),y=x.z+Math.sin(v)*(x.r-.3);f(w,y,x.g)||s.add(l(2.4,1,.55),w,x.y+.5,y,M%2?h:u,0,-v+Math.PI/2,0)}}for(let x of t.pillars)if(x.kind==="gantry"){for(let M of[-1,1])s.add(new Lt(.55,.7,a-.9,10),x.x+(M>0?2*x.span:0),(a-.9)/2,x.z,"#9aa3b8");s.add(l(2*x.span+1.4,.9,1.4),x.x+x.span,a-1.35,x.z,"#7b84a0")}else x.kind==="col"?s.add(new Lt(.5,.65,a*.85,10),x.x,a*.42,x.z,"#9aa3b8"):s.add(new Lt(1.1,1.5,a-.9,12),x.x,(a-.9)/2,x.z,"#9aa3b8");for(let x of t.boosts){s.add(l(10,.07,8),x.x,x.y+.04,x.z,"#ff9f1c");for(let M=0;M<3;M++)s.add(new Be(1.5,2,3),x.x,x.y+.1,x.z+2-M*2,"#fff3b0",0,Math.PI,0)}let m=new Ai;for(let x of t.slicks)m.add(new Lt(x.r,x.r,.05,28),x.x,x.y+.04,x.z,"#1c1030"),m.add(new Lt(x.r*.62,x.r*.62,.03,24),x.x,x.y+.07,x.z,"#3a1f66");for(let x of t.defs)x.k==="barrel"&&(m.add(new Lt(x.r*.85,x.r*.85,1.5,14),x.x,a+.75,x.z,"#ff7a1a"),m.add(new Lt(x.r*.88,x.r*.88,.28,14),x.x,a+.95,x.z,"#ffffff")),x.k==="block"&&(m.add(l(x.r*2,1.3,x.r*2),x.x,a+.65,x.z,"#aeb4c6"),m.add(l(x.r*2.02,.2,x.r*.7),x.x,a+1.32,x.z,"#ffd23f"));let _=m.build(new ce({vertexColors:!0,roughness:.5}));_&&(_.castShadow=!0,o.add(_),i.skyObst=_);let p=(x,M,v,w,y,b,C,P)=>{let D=Bn(x,M,v,w);return D.position.set(y,b,C),D.rotation.y=P,o.add(D),D},g={bg:["#22c55e","#0b7a3a"],fg:"#ffffff",stroke:"#053b1c",border:"#ffd23f"};t.gates.forEach((x,M)=>{let v=M===1,w=M===t.gates.length-1;for(let C of[-1,1]){let P=v?x.x:x.x+C*(No-.3),D=v?dn+C*(No-.3):x.z;s.add(l(.7,7,.7),P,a+3.5,D,"#2b1c6b")}let y=x.x,b=v?dn:x.z;p(w?"FINISH - RACERS UNLOCKED!":`SKY GATE ${M+1}`,w?15:9,w?2.6:2,w?{bg:["#e0001f","#8f0014"],fg:"#ffffff",stroke:"#33000a",border:"#ffd23f"}:g,y,a+7.4,b,v?Math.PI/2:0)});let E={bg:["#ff9f1c","#e0601a"],fg:"#ffffff",stroke:"#4a1c00",border:"#ffffff"};for(let x of[-1,1])s.add(l(.8,8,.8),38+x*7.2,4,ti-12,"#2b1c6b");p("SKY SPEEDWAY \u25B2  WIN A RACER",17,3.2,E,38,8.8,ti-12,0),p("SKY SPEEDWAY \u2192",14,3.2,E,Re,5.4,ti+20,0);let R=t.garage;for(let x of[-1,1])s.add(l(.8,9,.8),R.x+x*12,a+4.5,R.z-9,"#2b1c6b");p("RACER GARAGE",24,4.6,{bg:["#e0001f","#8f0014"],fg:"#ffffff",stroke:"#33000a",border:"#ffd23f"},R.x,a+10.2,R.z-9,0);for(let x of t.racers)s.add(l(5.2,.07,6.8),x.x,a+.03,x.z,"#e0001f")}var di={HX:90,ZS:12,ZN:-228},we={x:52,z:-110,x0:33,x1:71,z0:-176,z1:-76,summitY:15,sx:52,sz:-165},Mn={lion:{name:"LION",walk:3,run:9,aggro:22,hp:4,r:1.5,ride:1.9,seat:1.65,big:1,sound:"ROAR!"},leopard:{name:"LEOPARD",walk:3.4,run:11,aggro:22,hp:4,r:1.3,ride:2.2,seat:1.45,big:0,sound:"GRRR!"},elephant:{name:"ELEPHANT",walk:2.4,run:6,aggro:18,hp:6,r:2.3,ride:1.35,seat:3.5,big:1,sound:"TOOOT!"},horse:{name:"HORSE",walk:3.2,run:11.5,aggro:15,hp:3,r:1.5,ride:2.3,seat:2.05,big:0,sound:"NEIGH!"},dino:{name:"DINOSAUR",walk:2.6,run:8,aggro:0,hp:6,r:2.7,ride:1.75,seat:3.35,big:1,sound:"RAWR!"}},iu=[{id:0,kind:"lion",x:-50,z:-70},{id:1,kind:"leopard",x:-28,z:-160},{id:2,kind:"elephant",x:15,z:-185},{id:3,kind:"horse",x:-62,z:-115},{id:4,kind:"dino",x:we.sx,z:we.sz,y:we.summitY}],nn={IDLE:0,WALK:1,CHASE:2,ATTACK:3,STAGGER:4,TIED:5,PET:6,RIDDEN:7};function ov(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}var nc=null;function sc(){if(nc)return nc;let i=ov(20260601),t=[];for(let e=0;e<6e3&&t.length<72;e++){let n=-84+i()*168,s=6-i()*226;Math.hypot(n,s)<17||n>we.x0-5&&n<we.x1+5&&s>we.z0-5&&s<we.z1+5||t.some(r=>Math.hypot(r.x-n,r.z-s)<9)||t.push({x:n,z:s,r:1.25,s:.85+i()*.7,k:Math.floor(i()*3)})}return nc={trees:t,hill:we},nc}var Uo=(i,t,e=0)=>i>we.x0-e&&i<we.x1+e&&t>we.z0-e&&t<we.z1+e;function Xd(){return iu.map(i=>({id:i.id,kind:i.kind,x:i.x,y:i.y||0,z:i.z,yaw:Math.PI,vx:0,vz:0,st:i.kind==="dino"?nn.TIED:nn.IDLE,hp:Mn[i.kind].hp,owner:0,rider:0,tx:i.x,tz:i.z,wait:1+Math.random()*3,cool:1,wind:0,stagger:0,target:0,home:{x:i.x,z:i.z}}))}function nu(i,t,e,n){let s=di.HX-e-1;i.x=Math.max(-s,Math.min(s,i.x)),i.z=Math.max(di.ZN+e+1,Math.min(di.ZS-e-1,i.z));for(let r of t.trees){let o=i.x-r.x,a=i.z-r.z,l=Math.hypot(o,a),c=r.r+e*.6;if(l<c){let h=l>1e-4?c/l:1;i.x=r.x+(l>1e-4?o*h:c),i.z=r.z+(l>1e-4?a*h:0)}}if(!n&&Uo(i.x,i.z,e*.5)){let r=i.x-(we.x0-e*.5),o=we.x1+e*.5-i.x,a=i.z-(we.z0-e*.5),l=we.z1+e*.5-i.z,c=Math.min(r,o,a,l);c===r?i.x=we.x0-e*.5:c===o?i.x=we.x1+e*.5:c===a?i.z=we.z0-e*.5:i.z=we.z1+e*.5}}function Wd(i,t){for(let e=0;e<12;e++){let n=i.home.x+(Math.random()-.5)*90,s=i.home.z+(Math.random()-.5)*90;if(!(Math.abs(n)>di.HX-8||s>di.ZS-8||s<di.ZN+8||Uo(n,s,6))&&!t.trees.some(r=>Math.hypot(r.x-n,r.z-s)<3.5))return[n,s]}return[i.home.x,i.home.z]}function ic(i,t,e,n,s){let r=t-i.x,o=e-i.z,a=Math.hypot(r,o);if(a<.05)return a;let c=Math.atan2(r,o)-i.yaw;c=Math.atan2(Math.sin(c),Math.cos(c)),i.yaw+=c*(1-Math.exp(-7*s));let h=Math.min(n,a/Math.max(s,.001)),u=Math.max(.15,1-Math.abs(c)/2.2);return i.vx=Math.sin(i.yaw)*h*u,i.vz=Math.cos(i.yaw)*h*u,i.x+=i.vx*s,i.z+=i.vz*s,a}function Yd(i,t,e,n,s=[]){for(let r of i){let o=Mn[r.kind],a=r.owner?e.find(h=>h.id===r.owner):null;if(r.vx=r.vz=0,r.rider){let h=e.find(u=>u.id===r.rider);if(!h)r.rider=0;else{r.x=h.x,r.y=h.y,r.z=h.z,r.yaw=h.r,r.st=nn.RIDDEN;continue}}if(r.cool>0&&(r.cool-=t),r.stagger>0){r.stagger-=t,r.x+=(r.kvx||0)*t,r.z+=(r.kvz||0)*t,r.kvx*=.9,r.kvz*=.9,nu(r,n,o.r,r.kind==="dino"),r.st=nn.STAGGER;continue}if(r.kind==="dino"&&!r.owner){r.st=nn.TIED;continue}if(r.owner){if(r.st=nn.PET,a&&r.y<1.5&&a.y<2.5&&!a.mounted){let h=Math.hypot(a.x-r.x,a.z-r.z);h>60?(r.x=a.x-4,r.z=a.z-4):h>5.5?(ic(r,a.x,a.z,Math.min(o.run,3+h*.9),t),r.st=nn.WALK):h<3&&(ic(r,r.x+(r.x-a.x),r.z+(r.z-a.z),o.walk,t),r.st=nn.WALK),nu(r,n,o.r,!1)}r.y<1.5&&(r.y=0);continue}let l=null,c=o.aggro;for(let h of e){if(h.mounted||h.y>2.5)continue;let u=Math.hypot(h.x-r.x,h.z-r.z);u<c&&(c=u,l=h)}if(r.wind>0){if(r.wind-=t,r.st=nn.ATTACK,r.wind<=0){for(let h of e){if(h.mounted||h.y>2.5)continue;let u=h.x-r.x,f=h.z-r.z,d=Math.hypot(u,f);if(d<o.r+2.6){let m=d||1;s.push({k:"bite",id:r.id,pid:h.id,nx:u/m,nz:f/m,big:o.big})}}r.cool=2.6,r.recover=.7}continue}if(r.recover>0){r.recover-=t,r.st=nn.IDLE;continue}l?(r.st=nn.CHASE,ic(r,l.x,l.z,o.run,t)<o.r+2&&r.cool<=0&&(r.wind=.5)):r.wait>0?(r.wait-=t,r.st=nn.IDLE):(r.st=nn.WALK,ic(r,r.tx,r.tz,o.walk,t)<1.2&&(r.wait=2+Math.random()*5,[r.tx,r.tz]=Wd(r,n))),nu(r,n,o.r,!1),r.y=0,r.st===nn.WALK&&Math.hypot(r.vx,r.vz)<.2&&([r.tx,r.tz]=Wd(r,n))}return s}function qd(i,t,e,n,s=[]){if(i.owner||i.rider)return s;let r=Mn[i.kind];i.hp-=1,i.stagger=.7,i.wind=0,i.cool=1.4;let o=i.x-e,a=i.z-n,l=Math.hypot(o,a)||1,c=i.kind==="dino"?0:6;return i.kvx=o/l*c,i.kvz=a/l*c,s.push({k:"hit",id:i.id,hp:i.hp}),i.hp<=0&&(i.hp=r.hp,i.owner=t,i.st=nn.PET,s.push({k:"tame",id:i.id,pid:t})),s}var rc=[[-7.5,3.5],[7.5,3.5],[0,-8.5]],av="\u0639\u06A9\u0631\u0645\u06C1";function Zd(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function $d(i,t,e){let n=sc(),s=di.HX,r=di.ZS,o=di.ZN,a=r-o,l=!i.headless,c=Zd(9137),h=A=>A[Math.floor(c()*A.length)],u=i.main;e.startArch=99,e.jungle=!0,e.spawn={x:0,y:0,z:1.5},i.checkpoints.push({x:0,y:0,z:6,w:14,spawn:[0,0,3]}),i.platform(0,0,(r+o)/2,s*2+4,a+4,{h:2,color:"#5cbf4a",pad:!1});let f=["#2f8a3c","#3fa24a","#267a34","#4bb35a"];for(let A=r+2,I=0;A>o-4;A-=14,I++)for(let U of[-1,1])i.platform(U*(s+1),26,A-7,2,14,{h:26,color:f[(I+(U>0?2:0))%4],pad:!1});i.platform(0,26,r+1,s*2+4,2,{h:26,color:f[1],pad:!1}),i.platform(0,26,o-1,s*2+4,2,{h:26,color:f[3],pad:!1});let d=we.x,m=we.z,_=["#8a6a47","#7a5a3a","#6e5236"],p="#63c24c";i.platform(d,5,m-14,32,48,{h:5,color:_[0],padColor:p}),i.platform(d,10,m-37,24,26,{h:10,color:_[1],padColor:p}),i.platform(d,15,m-55,18,18,{h:15,color:_[2],padColor:p}),i.ramp(d-8,m+30,0,m+10,5,9,{color:"#9a7a52",padColor:"#7bd35c"}),i.ramp(d+8,m-4,5,m-24,10,9,{color:"#9a7a52",padColor:"#7bd35c"}),i.ramp(d-6,m-30,10,m-46,15,9,{color:"#9a7a52",padColor:"#7bd35c"});for(let A of n.trees)i.addSolid(A.x-.85*A.s,0,A.z-.85*A.s,A.x+.85*A.s,7*A.s,A.z+.85*A.s);let g=(A,I,U=4)=>!(Math.abs(A)>s-6||I>r-6||I<o+6||Uo(A,I,6)||Math.hypot(A,I)<11||n.trees.some(O=>Math.hypot(O.x-A,O.z-I)<U+O.r)),E=(A,I,U=800)=>{let O=[];for(let tt=0;tt<U&&O.length<A;tt++){let G=(c()-.5)*2*(s-8),K=r-8-c()*(a-16);g(G,K,I)&&!O.some(J=>Math.hypot(J[0]-G,J[1]-K)<I*1.6)&&O.push([G,K])}return O},R=E(7,5);if(R.forEach(([A,I],U)=>i.disc(A,0,I,2.8,{bounce:21+U%3*2,color:h(["#ff5d73","#ff8a3d","#ffd23f","#ff6bd0"])})),e.shrooms=R,!l)return;let x=(A,I=8,U=6)=>new ye(A,I,U),M=(A,I,U,O=8)=>new Lt(A,I,U,O),v=(A,I,U=8)=>new Be(A,I,U),w=["#2e9b3f","#3fb14c","#58c45a","#27863a","#7ccf5a"],y=x(1,5,4),b=(A,I,U,O)=>u.add(y,A,I,U,h(w),c()*3,c()*3,0,O?.9+c()*.6:2+c()*1.5,1.4+c()*1,O?2+c()*1.5:.9+c()*.6);for(let A=2.2;A<26;A+=5.4){for(let I=r-1;I>o+1;I-=4.2)b(-s+.1,A+c()*1.6,I+c(),!0),b(s-.1,A+c()*1.6,I+c(),!0);for(let I=-s+4;I<s-3;I+=4.2)b(I+c(),A+c()*1.6,o+.1,!1),b(I+c(),A+c()*1.6,r-.1,!1)}for(let A=r;A>o;A-=3.4)u.add(v(1.1,2.4,5),-s,26.6,A,"#58c45a"),u.add(v(1.1,2.4,5),s,26.6,A,"#58c45a");for(let A=-s;A<s;A+=3.4)u.add(v(1.1,2.4,5),A,26.6,o,"#58c45a"),u.add(v(1.1,2.4,5),A,26.6,r,"#58c45a");{let A=Zd(Math.floor(Date.now()/1e3)%97+1),I=[{rot:Math.PI/2,at:O=>[-s+2.2,r-32-O*(a-64)]},{rot:-Math.PI/2,at:O=>[s-2.2,r-32-O*(a-64)]},{rot:0,at:O=>[-60+O*120,o+2.2]},{rot:Math.PI,at:O=>[-60+O*120,r-2.2]}];for(let O=I.length-1;O>0;O--){let tt=Math.floor(A()*(O+1));[I[O],I[tt]]=[I[tt],I[O]]}let U=["u","h","u","h"];I.forEach((O,tt)=>{let K=U[tt]==="u"?Bn(av,30,15,{urdu:!0,bg:["#0b6b3a","#01411c"],fg:"#ffffff",stroke:"#00230f",border:"#ffd23f",frame:"#2f6b2a"}):Bn("HARIS",34,13,{bg:["#ff8a1c","#c9400b"],fg:"#ffffff",stroke:"#5a1a00",border:"#ffe27a",frame:"#2f6b2a"}),[J,vt]=O.at(.12+A()*.76);K.position.set(J,10.5+A()*5,vt),K.rotation.y=O.rot,i.group.add(K)})}for(let A of n.trees){let I=A.s,U=7*I;u.add(M(.5*I,.8*I,U,7),A.x,U/2,A.z,h(["#7a4b27","#6b4423","#8a5a30"]));for(let O=0;O<4;O++)u.add(v(.35*I,1.3*I,5),A.x+Math.cos(O*1.6)*.8*I,.5,A.z+Math.sin(O*1.6)*.8*I,"#6b4423",0,0,Math.cos(O)*.8);if(A.k===0)u.add(x(3.6*I),A.x,U+2.2*I,A.z,h(w)),u.add(x(2.6*I),A.x+2.4*I,U+.6*I,A.z+.6*I,h(w)),u.add(x(2.5*I),A.x-2.2*I,U+.9*I,A.z-.8*I,h(w));else if(A.k===1)for(let O=0;O<4;O++)u.add(v((3.6-O*.7)*I,3.4*I,8),A.x,U*.62+O*2.1*I,A.z,O%2?"#2f8f46":"#27803c");else{u.add(M(.3*I,.5*I,3.2*I,6),A.x,U+1.4*I,A.z,"#8a5a30");for(let O=0;O<7;O++){let tt=O*.9;u.add(v(.9*I,5.2*I,4),A.x+Math.cos(tt)*2.1*I,U+3.4*I,A.z+Math.sin(tt)*2.1*I,h(w),Math.sin(tt)*1.25,0,-Math.cos(tt)*1.25+0*tt)}u.add(x(.55*I,6,5),A.x+.5*I,U+2.9*I,A.z,"#7a4b27"),u.add(x(.55*I,6,5),A.x-.4*I,U+2.8*I,A.z+.4*I,"#7a4b27")}}for(let[A,I]of E(60,1.6,2500)){let U=.8+c()*.9;u.add(x(1.2*U,7,5),A,.7*U,I,h(w),0,0,0,1.3,.8,1.1),u.add(x(.9*U,7,5),A+1*U,.6*U,I+.5*U,h(w))}for(let[A,I]of E(240,.7,3e3))u.add(M(.05,.05,.7,4),A,.35,I,"#3a8f3a"),u.add(x(.26,6,4),A,.78,I,h(["#ff5fa8","#ffd23f","#ffffff","#ff7a1a","#b58cff"]));for(let[A,I]of E(34,2.2,1500)){let U=.8+c()*1.5;u.add(x(1,6,5),A,.4*U,I,h(["#8e9097","#7c7f87","#a5a7ad"]),c(),c(),0,1.4*U,.8*U,1*U)}for(let[A,I]of E(14,2.4,1500)){u.add(M(.25,.3,1,6),A,.5,I,"#fff3e0"),u.add(x(.9,8,5),A,1.1,I,"#e8403d",0,0,0,1,.55,1);for(let U=0;U<4;U++)u.add(x(.14,5,4),A+Math.cos(U*1.6)*.45,1.45,I+Math.sin(U*1.6)*.45,"#ffffff")}for(let A=0;A<620;A++){let I=(c()-.5)*2*(s-2),U=r-2-c()*(a-4);Uo(I,U,0)||u.add(v(.16,.7+c()*.5,4),I,.35,U,h(["#3da043","#56b947","#2f8a3c"]),0,c()*3,(c()-.5)*.5)}let C=we.sx,P=we.sz,D=we.summitY;for(let[A,I]of rc)u.add(M(.28,.34,2.4,7),C+A,D+1.2,P+I,"#6b4423"),u.add(x(.32,6,5),C+A,D+2.45,P+I,"#8a5a30");for(let A=0;A<16;A++){let I=c()*6.28,U=8+c()*5;u.add(x(1,6,5),d+Math.cos(I)*U*1.6,5.5,m-14+Math.sin(I)*U*2.4,h(["#8e9097","#7c7f87"]),c(),c(),0,1.3,.9,1.1)}for(let A=0;A<26;A++){let I=c()*6.28;u.add(v(.7,1.8,5),d+Math.cos(I)*15,5.9+(c()<.3?5:0),m-14+(c()-.5)*40,h(w))}let N=(A,I,U,O,tt=16,G=7,K=["#7a4a1e","#5a3412"])=>{let J=Bn(A,tt,G,{bg:K,fg:"#fff3c4",stroke:"#2a1204",border:"#ffd23f",frame:"#3b2410"});J.position.set(I,3.6+G/2,U),J.rotation.y=O,i.group.add(J),u.add(M(.3,.3,4+G/2,6),I-tt/2+1,(4+G/2)/2,U,"#5a3412"),u.add(M(.3,.3,4+G/2,6),I+tt/2-1,(4+G/2)/2,U,"#5a3412")};N("WELCOME TO THE JUNGLE",0,-14,0,20,5.5),N("BEAT ANIMALS WITH THE BAT = NEW PET!",0,-22,0,24,5),N("DINO HILL  >>>",d-8,m+44,0,16,5.5)}var lv={fun:{plat:["#ff6b9d","#ffd23f","#4cc9f0","#80ed99","#ff9f1c"],pad:"#ffffff",icePad:"#ffffff",edgeGlow:null,hazard:"#ff3d68",hazard2:"#fff7d6",hub:"#6a3fa0",accent:"#ffd23f",convBase:"#7a2d9e",belt:"#ffe9a8"},jungle:{plat:["#3f9d4a","#6bbf59","#8b5e3c","#2f7d3a","#a3d36b"],pad:"#c7f08a",icePad:"#ffffff",edgeGlow:null,hazard:"#ff7a1a",hazard2:"#fff7d6",hub:"#5a3a1e",accent:"#ffd23f",convBase:"#5a3a1e",belt:"#a3d36b"}},cv=["fun","jungle"];function Jd(i,t=!1,e=null){let n=cv[i],s=lv[n],r=new ec(s,t);r.arrowTexture=e,r.key=n,r.waterY=-40,r.killY=-60;let o={z:0,y:0},a={key:n,spawn:{x:0,y:0,z:1.5},signs:[],pads:[]};function l(d,m,_={}){var M,v,w;let p=o.z-((M=_.gap)!=null?M:0),g=p-m/2,E=o.y+((v=_.dy)!=null?v:0),R=(w=_.x)!=null?w:0,x=r.platform(R,E,g,d,m,_);return o.z=p-m,o.y=E,{s:x,x:R,cz:g,near:p,far:p-m,top:E,w:d,d:m}}function c(d,m=3.5){return r.checkpoint(d.x,d.top,d.near-m,Math.min(d.w,16))}function h(d,m,_=0){let p=o.z-.9-3;[-4.7+_,4.7+_].forEach((E,R)=>{let x=R*Math.PI,M=y=>{let b=.5-.5*Math.cos(2*Math.PI*y/m+x);return[1.2*Math.sin(2*Math.PI*b),2.3*Math.sin(2*Math.PI*b),-d*b]};r.mover(E,o.y,p,6,6,y=>M(y),{h:1.3,stripes:!0,color:R?s.plat[2]:s.plat[0]});let v=[],w=48;for(let y=0;y<=w;y++){let b=y/w,C=[E+1.2*Math.sin(2*Math.PI*b),2.3*Math.sin(2*Math.PI*b),-d*b];v.push([C[0],o.y-1.5+C[1],p+C[2]])}for(let y of[-2.2,2.2])r.tube(v.map(b=>[b[0]+y,b[1],b[2]]),.14,s.hazard);r.tube(v.map(y=>[y[0],y[1]-.3,y[2]]),.2,s.hub);for(let y=0;y<=w;y+=4){let b=v[y];r.tube([[b[0],b[1]-.3,b[2]],[b[0],o.y-14,b[2]]],.22,s.hub)}}),o.z=p-d-3-.9}function u(){let d=l(22,34,{gap:0,color:s.plat[0]}),m=d.near-12;return r.arch(0,d.top,m,20,s.accent,!1),a.finishZ=m,a.finishY=d.top,a.finishPlat=d,d}if(i===0){a.startArch=-2,o.z=-16,o.y=0,r.platform(0,0,-430/2,140,450,{h:2,color:"#92e66c",pad:!1});for(let j=4,B=0;j>-446;j-=14,B++)for(let W of[-1,1])r.platform(W*(140/2+1),22,j-7,2,14,{h:22,color:s.plat[(B+(W>0?2:0))%s.plat.length],pad:!1});if(r.platform(0,22,11,144,2,{h:22,color:s.plat[1],pad:!1}),r.platform(0,22,-441,144,2,{h:22,color:s.plat[3],pad:!1}),r.headless||r.main.add(r.rbox(12,.03,232,.01),0,.02,-128,"#f8ebb8"),!r.headless){let B="\u0639\u06A9\u0631\u0645\u06C1",W=(lt,At,Z,pt=12)=>{lt.position.set(At*69.7,pt,Z),lt.rotation.y=At<0?Math.PI/2:-Math.PI/2,r.group.add(lt)};W(Lo("pk",30,20),-1,-50),W(Lo("ps",30,20),1,-50),W(Lo("ps",30,20),-1,-290),W(Lo("pk",30,20),1,-290),W(Bn("MADE BY HARIS",44,13,{bg:["#ff3d68","#ff9f1c"],fg:"#ffffff",stroke:"#6a1020",border:"#ffd23f"}),-1,-130),W(Bn("MADE BY HARIS",44,13,{bg:["#4cc9f0","#3a2d9e"],fg:"#ffd23f",stroke:"#101040",border:"#ffffff"}),1,-170),W(Bn(B,30,15,{urdu:!0,bg:["#0b6b3a","#01411c"],fg:"#ffffff",stroke:"#00230f",border:"#ffd23f"}),-1,-210),W(Bn(B,30,15,{urdu:!0,bg:["#0b6b3a","#01411c"],fg:"#ffffff",stroke:"#00230f",border:"#ffd23f"}),1,-330)}let _=j=>r.platform(0,.04,j,8,14,{boost:1,color:"#ffd23f",pad:!1,h:.5});r.checkpoint(0,0,-70,16),_(-30),_(-52),[[-16,-26,3.2,20,0],[-22,-36,3.2,24,1],[-14,-46,3.4,28,2],[16,-28,3.2,22,3],[22,-38,3.4,26,4]].forEach(([j,B,W,lt,At])=>r.disc(j,0,B,W,{bounce:lt,color:s.plat[At]})),r.platform(31,9,-52,12,12,{color:s.plat[1]}),r.disc(20,0,-50,3.4,{bounce:29,color:s.hazard}),r.airpad(-26,-62,3.6,0,15),r.platform(-34,13,-62,8,8,{color:s.plat[2]}),r.orbit(-32,-18,6,1.6,3,.8),r.cannon(22,-14,16,[0,-17]),r.pirate(28,-70,16,.55,6.5),r.dropTower(-32,-82,14,13),r.checkpoint(0,0,-72,16),r.ramp(-14,-72,0,-98,10,8,{color:s.plat[3]}),r.platform(-28,10,-104,30,12,{color:s.plat[1]}),r.punch(-44,11.2,-104,1,0,8,{off:0}),r.punch(-12.2,11.2,-104,-1,0,8,{off:1.6}),[-38,-28,-18].forEach((j,B)=>r.ramp(j,-110,10,-152,0,7,{conv:[0,-14],ice:!0,color:s.plat[B*2%5],padColor:"#ffffff"})),r.platform(26,1.2,-90,14,14,{color:s.plat[4]}),r.punch(17.2,2.4,-90,1,0,7,{off:0}),r.punch(34.8,2.4,-90,-1,0,7,{off:1.6}),r.punch(26,2.4,-98.8,0,1,7,{off:.8}),r.punch(26,2.4,-81.2,0,-1,7,{off:2.4});for(let j=0;j<3;j++)r.seesaw(26,2,-112-j*16,9,12,1.4,3.4+j*.4,j*2.1);_(-118),r.checkpoint(0,0,-150,16),r.ramp(-30,-156,0,-182,8,10,{color:s.plat[2]}),r.platform(-30,8,-188,12,12,{color:s.plat[0]}),r.bungee(-30,-203,0,5.5,30,15),r.ferris(-30,11,-224,9,6,.4),r.ramp(26,-156,0,-164,3,14,{color:s.plat[3]}),o.z=-164,o.y=3,l(16,8,{x:26}),h(36,11,26),l(16,8,{x:26}),r.ramp(26,o.z,3,o.z-8,0,14,{color:s.plat[3]}),r.disc(0,.3,-180,8.5,{omega:.7,color:s.plat[0]}),r.headless||(r.main.add(new Lt(.5,.5,9,10),0,4.8,-180,"#ffffff"),r.main.add(new Be(10,3.2,20),0,10.4,-180,s.hazard)),[-160,-172,-184].forEach((j,B)=>{r.disc(-14,.3,j,3.5,{omega:B%2?1.5:-1.5,color:s.plat[(B+1)%5]}),r.bar(-14,.4,j,6.4,{omega:B%2?-1.1:1.1,h:.9,w:.9})}),r.checkpoint(0,0,-232,16),r.checkpoint(0,0,-244,16);let p=56,g=7,E={x:0,z:(xs+ti)/2},R=-27,x=-420,M=[1,-1],v=[],w=[];for(let j of M)w.push({x:p*j,z:R,r:13,g:"p0"+j},{x:p*j,z:x,r:13,g:"p1"+j}),v.push({ax:p*j,az:R,bx:p*j,bz:x,hw:g,g:"hwy"+j});v.push({ax:-p,az:xs,bx:p,bz:xs,hw:g,g:"con-top"},{ax:-p,az:ti,bx:p,bz:ti,hw:g,g:"con-bot"});let y=[];for(let j of M)for(let B of[-110,-210,-370])y.push({x:p*j,z:B,r:4});let b={segs:v,plazas:w,boosts:[...y,{x:30,z:xs,r:4},{x:-30,z:xs,r:4},{x:30,z:ti,r:4},{x:-30,z:ti,r:4}]};a.track=b,a.cars=[[p-3.5,-33],[p+3.5,-33],[-p-3.5,-33],[-p+3.5,-33]].map(([j,B],W)=>({id:W,x:j,z:B,yaw:Math.PI}));let C=Hd();if(!r.headless){let j=r.main,B="#3b3f4d",W=(Z,pt,Ot)=>{for(let q of v){if(q.g===Ot)continue;let ot=q.bx-q.ax,ct=q.bz-q.az,ft=ot*ot+ct*ct,mt=((Z-q.ax)*ot+(pt-q.az)*ct)/ft;if(mt=Math.max(0,Math.min(1,mt)),Math.hypot(Z-(q.ax+ot*mt),pt-(q.az+ct*mt))<q.hw-.4)return!0}for(let q of w)if(q.g!==Ot&&Math.hypot(Z-q.x,pt-q.z)<q.r-.4)return!0;return!1},lt=[];v.forEach(Z=>{let pt=Math.hypot(Z.bx-Z.ax,Z.bz-Z.az),Ot=Math.max(1,Math.ceil(pt/12));for(let q=0;q<Ot;q++)lt.push({ax:Z.ax+(Z.bx-Z.ax)*q/Ot,az:Z.az+(Z.bz-Z.az)*q/Ot,bx:Z.ax+(Z.bx-Z.ax)*(q+1)/Ot,bz:Z.az+(Z.bz-Z.az)*(q+1)/Ot,hw:Z.hw,g:Z.g})}),lt.forEach((Z,pt)=>{let Ot=Z.bx-Z.ax,q=Z.bz-Z.az,ot=Math.hypot(Ot,q),ct=(Z.ax+Z.bx)/2,ft=(Z.az+Z.bz)/2,mt=-Math.atan2(q,Ot),Yt=-q/ot,Ht=Ot/ot;j.add(r.rbox(ot+.7,.08,Z.hw*2,.02),ct,Z.g.startsWith("hwy")?.053:Z.g.startsWith("con")?.056:.05,ft,B,0,mt,0);for(let qt of[-1,1]){let te=ct+Yt*qt*(Z.hw-.45),F=ft+Ht*qt*(Z.hw-.45);if(W(te,F,Z.g)||j.add(r.rbox(ot+.05,.09,.9,.02),te,.1,F,(pt+(qt>0?1:0))%2?"#ff3b3b":"#ffffff",0,mt,0),pt%2===0){let me=ct+Yt*qt*(Z.hw+1.3),le=ft+Ht*qt*(Z.hw+1.3);W(me,le,Z.g)||(j.add(new Lt(.75,.75,.7,10),me,.35,le,"#23252e"),j.add(new Lt(.78,.78,.22,10),me,.85,le,pt/2%2?"#ff3b3b":"#ffffff"))}}pt%2===0&&!W(ct,ft,Z.g)&&j.add(r.rbox(Math.min(ot,5)*.55,.06,.3,.02),ct,.1,ft,"#ffffff",0,mt,0)});for(let Z of w){j.add(new ls(Z.r,48),Z.x,.054,Z.z,B,-Math.PI/2,0,0);for(let pt=0;pt<40;pt++){let Ot=pt/40*Math.PI*2,q=Z.x+Math.cos(Ot)*(Z.r-.45),ot=Z.z+Math.sin(Ot)*(Z.r-.45);W(q,ot,Z.g)||j.add(r.rbox(2,.09,.9,.02),q,.1,ot,pt%2?"#ff3b3b":"#ffffff",0,-Ot+Math.PI/2,0)}for(let pt=0;pt<20;pt++){let Ot=pt/20*Math.PI*2,q=Z.x+Math.cos(Ot)*(Z.r+1.3),ot=Z.z+Math.sin(Ot)*(Z.r+1.3);W(q,ot,Z.g)||(j.add(new Lt(.75,.75,.7,10),q,.35,ot,"#23252e"),j.add(new Lt(.78,.78,.22,10),q,.85,ot,pt%2?"#ff3b3b":"#ffffff"))}}for(let Z of b.boosts){j.add(r.rbox(10,.07,8,.02),Z.x,.12,Z.z,"#ff9f1c");for(let pt=0;pt<3;pt++)j.add(new Be(1.5,2,3),Z.x,.16,Z.z+2-pt*2,"#fff3b0",-Math.PI/2*0,Math.PI,0)}for(let Z=0;Z<5;Z++)j.add(r.rbox(26-Z*2,1.1,2.4,.1),E.x,.55+Z*1.1,E.z-2+Z*-2.2,s.plat[Z%5]);let At=["#0b6b3a","#2f7bff","#ffb21e","#a855f7"];a.cars.forEach((Z,pt)=>{j.add(r.rbox(7.5,.07,9.5,.03),Z.x,.12,Z.z,At[pt]),j.add(r.rbox(6.9,.075,8.9,.03),Z.x,.125,Z.z,B)});for(let Z of M){let pt=p*Z;for(let[Ot,q]of[[pt-10.5,-14],[pt+10.5,-14],[pt-10.5,-38],[pt+10.5,-38]])j.add(r.rbox(.8,6,.8,.2),Ot,3,q,s.plat[1]);j.add(r.rbox(23,.7,27,.2),pt,6.3,R,s.hazard),j.add(r.rbox(21,.4,25,.2),pt,6.75,R,"#ffffff");for(let Ot=0;Ot<10;Ot++)for(let q=0;q<2;q++)j.add(r.rbox(1.4,.07,1.4,.01),pt-6.3+Ot*1.4,.13,-48-q*1.4,(Ot+q)%2?"#111111":"#ffffff");for(let Ot of[-1,1])j.add(r.rbox(.8,6.4,.8,.2),pt+Ot*8.2,3.2,-48,s.plat[1]);j.add(r.rbox(17.6,1,1.2,.2),pt,6.4,-48,s.hazard)}}if(v.push(...C.segs),b.plazas.push(...C.plazas),b.boosts.push(...C.boosts),b.slicks=C.slicks,C.dyn=Gd(C.defs),b.dyn=C.dyn,a.cars.push(...C.racers),a.sky={y:on,gates:C.gates,garage:C.garage,racerIds:[4,5,6,7],pillars:C.pillars},r.headless||Vd(r,C,s),!r.headless){let j=(W,lt,At,Z,pt,Ot,q,ot)=>{let ct=Bn(W,lt,At,Z);return ct.position.set(pt,Ot,q),ct.rotation.y=ot,r.group.add(ct),ct},B={bg:["#1f8de6","#14609f"],fg:"#ffffff",stroke:"#06223d",border:"#ffd23f"};for(let W of M){let lt=p*W;j("CAR STATION",20,4.6,B,lt-11.8,8.8,R,-Math.PI/2),j("CAR STATION",20,4.6,B,lt+11.8,8.8,R,Math.PI/2);for(let[At,Z]of[[16,-8],[34,-14]]){let pt=new st(new Lt(.2,.2,4,8),new ce({color:"#e8e8f0"}));pt.position.set(At*W,2,Z),r.group.add(pt),j(W>0?"CAR STATION \u2192":"\u2190 CAR STATION",12,3.2,B,At*W,4.6,Z,0)}j("LONG ROAD \u2192 DRIVE THE WHOLE MAP",22,3.2,{bg:["#ff9f1c","#e0601a"],fg:"#ffffff",stroke:"#4a1c00",border:"#ffffff"},lt,5.2,-60,0)}}let P=8,D=7,N=1.2,A=6,I=-356,U=20261017,O=()=>(U=U*1664525+1013904223>>>0,U/4294967296),tt=Array.from({length:D},()=>Array(D+1).fill(!0)),G=Array.from({length:D+1},()=>Array(D).fill(!0)),K=Array.from({length:D},()=>Array(D).fill(!1)),J=[[0,3]];for(K[0][3]=!0;J.length;){let[j,B]=J[J.length-1],W=[];if(j+1<D&&!K[j+1][B]&&W.push([j+1,B]),j-1>=0&&!K[j-1][B]&&W.push([j-1,B]),B-1>=0&&!K[j][B-1]&&W.push([j,B-1]),B+1<D&&!K[j][B+1]&&W.push([j,B+1]),!W.length){J.pop();continue}let[lt,At]=W[Math.floor(O()*W.length)];lt===j+1?G[j+1][B]=!1:lt===j-1?G[j][B]=!1:At===B-1?tt[j][B]=!1:tt[j][B+1]=!1,K[lt][At]=!0,J.push([lt,At])}G[0][3]=!1,G[D][3]=!1;let vt=["#3fae4a","#58c25c","#2f9a44"];for(let j=0;j<D;j++)for(let B=0;B<=D;B++)tt[j][B]&&r.platform((B-D/2)*P,A,I-(j+.5)*P,N,P+N,{h:A,color:vt[(j+B)%3],pad:!1});for(let j=0;j<=D;j++)for(let B=0;B<D;B++)G[j][B]&&r.platform((B+.5-D/2)*P,A,I-j*P,P+N,N,{h:A,color:vt[(j+B+1)%3],pad:!1});let yt=new Map,ee=[[0,3]];for(yt.set("0,3",null);ee.length;){let[j,B]=ee.shift(),W=[[j+1,B,G[j+1][B]],[j-1,B,j>0?G[j][B]:!0],[j,B-1,tt[j][B]],[j,B+1,tt[j][B+1]]];for(let[lt,At,Z]of W)!Z&&lt>=0&&lt<D&&At>=0&&At<D&&!yt.has(lt+","+At)&&(yt.set(lt+","+At,[j,B]),ee.push([lt,At]))}let Qt=[];for(let j=[D-1,3];j;j=yt.get(j[0]+","+j[1]))Qt.unshift([(j[1]+.5-D/2)*P,I-(j[0]+.5)*P]);a.mazePath=Qt,r.checkpoint(0,0,I+2,16),o.z=I-D*P,o.y=.15,u()}else $d(r,s,a),a.finishZ=-99999,a.finishY=99999,a.finishPlat={far:-230};r.finalize();let f=a.finishPlat;return a.length=-a.finishZ,a.checkpoints=r.checkpoints,a.endZ=f.far,{world:r,info:a}}function Kd(){return{x:0,y:0,z:0,vx:0,vy:0,vz:0,yaw:Math.PI,grounded:!1,ground:null,coyote:0,jumpBuf:0,stun:0,dive:0,diveCd:0,noSnap:0,hitCd:0,boost:0,jumping:!1,noCtrl:0,landSpeed:0,inWater:!1,events:[],moveT:0,yawOff:0,swim:0,waterSurf:0}}var hv=(i,t)=>{let e=(t-i)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e};function oc(i,t,e,n){let s=t-i.vx,r=e-i.vz,o=Math.hypot(s,r);o<=n||o<1e-6?(i.vx=t,i.vz=e):(i.vx+=s/o*n,i.vz+=r/o*n)}function jd(i,t,e,n){t.coyote=t.grounded?.11:t.coyote-e,t.jumpBuf=n.jumpPressed?.13:t.jumpBuf-e,t.stun>0&&(t.stun=Math.max(0,t.stun-e)),t.dive>0&&(t.dive=Math.max(0,t.dive-e)),t.diveCd>0&&(t.diveCd-=e),t.noSnap>0&&(t.noSnap-=e),t.hitCd>0&&(t.hitCd-=e),t.boost>0&&(t.boost-=e),t.noCtrl>0&&(t.noCtrl-=e);let s=0,r=0;for(let u of i.pools)if(t.x>u.x0&&t.x<u.x1&&t.z>u.z0&&t.z<u.z1){let f=u.surf-t.y;f>.12&&(s=Math.min(1,f/.9),r=u.surf);break}s>.3&&t.swim<=.3&&(t.events.push("splash"),t.waterSurf=r),t.swim=s;let o=t.stun<=0&&t.dive<=0&&t.noCtrl<=0,a=t.ground&&t.ground.ice,l=Math.abs(n.mx)+Math.abs(n.mz)>.01;if(n.divePressed&&t.diveCd<=0&&t.stun<=0&&t.dive<=0){let u=Math.sin(t.yaw),f=Math.cos(t.yaw);t.vx=u*15.5,t.vz=f*15.5,t.vy=t.grounded?7:Math.max(t.vy,3.5),t.grounded=!1,t.ground=null,t.noSnap=.2,t.dive=.85,t.diveCd=1.1,t.events.push("dive")}if(o){let u=ge.RUN*(t.boost>0?1.45:1)*(t.speedMul||1)*(1-.34*s);if(l){let f=t.grounded?a?ge.ICE_ACC:ge.ACC:ge.AIR;oc(t,n.mx*u,n.mz*u,f*e);let d=Math.atan2(n.mx,n.mz);t.yaw+=hv(t.yaw,d)*(1-Math.exp(-20*e))}else t.grounded?oc(t,0,0,(a?ge.ICE_DEC:ge.DEC)*e):oc(t,0,0,ge.AIR_DEC*e)}else{let u=t.grounded?a?1.2:9:.6;oc(t,0,0,u*e)}if(s>.4&&n.jumpPressed&&t.stun<=0?(t.vy=9,t.grounded=!1,t.ground=null,t.noSnap=.2,t.jumpBuf=0,t.events.push("stroke")):t.jumpBuf>0&&(t.grounded||t.coyote>0)&&t.stun<=0&&t.dive<=.45&&(t.vy=ge.JUMP*(t.jumpMul||1),t.grounded=!1,t.ground=null,t.coyote=0,t.jumpBuf=0,t.noSnap=.2,t.jumping=!0,t.events.push("jump")),t.jumping&&!n.jumpHeld&&t.vy>6&&(t.vy-=55*e),t.vy=Math.max(ge.TERM,t.vy-ge.G*e*(t.dive>0&&!t.grounded?.8:1)*(1-.92*s)),s>.05){let u=r-(n.jumpHeld?.3:.95);t.vy+=(u-t.y)*26*e*s,t.vy*=Math.exp(-2.4*e*s)}for(let u of i.zones){let f=t.x-u.x,d=t.z-u.z;if(f*f+d*d<u.r*u.r&&t.y>u.y0-.3&&t.y<u.y1){let m=Math.max(0,(t.y-u.y0)/(u.y1-u.y0)),_=u.vmax*(1-m*m);t.vy<_&&(t.vy=Math.min(_,t.vy+u.lift*e)),t.noSnap=Math.max(t.noSnap,.12),t.air||(t.air=!0,t.events.push("air"))}else t.air=!1}if(t.grounded&&t.ground){let u=t.ground.conv;u&&(t.x+=u[0]*e,t.z+=u[1]*e),t.ground.boost&&(t.boost=.55)}let c=t.grounded,h=t.y;if(t.x+=t.vx*e,t.z+=t.vz*e,i.resolveHorizontal(t),i.resolveHorizontal(t),t.y+=t.vy*e,t.grounded=!1,t.ground=null,t.vy<=0){let u=i.findGround(t,h,c);if(u){let f=-t.vy;t.y=u.top,t.vy=0,t.grounded=!0,t.ground=u.s,t.jumping=!1,u.s.bounce?(t.vy=u.s.bounce,t.grounded=!1,t.ground=null,t.noSnap=.25,t.jumping=!1,u.s.push&&(t.vx=u.s.push[0],t.vz=u.s.push[1],t.noCtrl=.9),u.s.squash!==void 0&&(u.s.squash=1),t.events.push("bounce")):!c&&f>6&&(t.landSpeed=f,t.events.push("land"))}}else{let u=i.hitCeiling(t,h);u&&(t.y=u.y0-ge.H,t.vy=Math.min(0,t.vy*.2))}return t.y<i.waterY-.2&&!t.inWater&&(t.inWater=!0,t.events.push("splash")),t.y<i.killY&&t.events.push("fell"),t}function yr(i,t,e,n){return i.hitCd>0||i.shield>0?!1:(i.vx=t*n,i.vz=e*n,i.vy=Math.max(i.vy,6.5),i.grounded=!1,i.ground=null,i.noSnap=.25,i.stun=.95,i.dive=0,i.hitCd=.5,i.events.push("hit"),!0)}function ac(i,t,e,n,s){i.x=t,i.y=e,i.z=n,i.vx=i.vy=i.vz=0,i.grounded=!1,i.ground=null,i.stun=0,i.dive=0,i.inWater=!1,i.hitCd=1,i.yaw=s!=null?s:Math.PI,i.noSnap=0,i.boost=0}var uv=(i,t,e)=>i<t?t:i>e?e:i,Sn=(i,t={})=>{var e,n,s;return new ao({color:i,roughness:(e=t.r)!=null?e:.3,clearcoat:(n=t.cc)!=null?n:.65,clearcoatRoughness:.25,metalness:(s=t.m)!=null?s:0})},Ve=(i,t=.55)=>new ce({color:i,roughness:t}),su=(i,t,e)=>{let n=new st(new Bi(i,t,6,16),e);return n.castShadow=!0,n},pn=(i,t,e=16,n=12)=>{let s=new st(new ye(i,e,n),t);return s.castShadow=!0,s},ep=Ve("#ffffff",.25),np=Ve("#101018",.4);function ru(i,t,e,n,s,r=.55){for(let o of[-1,1]){let a=pn(s,ep);a.position.set(o*n,t,e);let l=pn(s*r,np);l.position.set(0,0,s*.62),a.add(l),i.add(a)}}function Qd(i,t){let e=new ki;for(let n=0;n<10;n++){let s=-Math.PI/2+n*Math.PI/5,r=n%2?t:i,o=Math.cos(s)*r,a=Math.sin(s)*r;n?e.lineTo(o,a):e.moveTo(o,a)}return e.closePath(),e}var tp=[{name:"Bubbles",pivotY:.85},{name:"Ninja",pivotY:.95},{name:"Dino",pivotY:.8},{name:"Robo",pivotY:.9}],ys=class{constructor(t){this.id=t,this.group=new Wt,this.pivot=new Wt,this.inner=new Wt,this.group.add(this.pivot),this.pivot.add(this.inner),this.pivot.position.y=tp[t].pivotY,this.inner.position.y=-tp[t].pivotY,this.body=new Wt,this.inner.add(this.body),this.t=Math.random()*10,this.phase=0,this.squash=0,this.tumble=0,this.lean=0,this.dive=0,this.wag=[],this.height=1.7,[this.buildBubbles,this.buildNinja,this.buildDino,this.buildRobo][t].call(this),this.makeBat(),this.makeExtras(),this.group.traverse(e=>{e.isMesh&&(e.castShadow=!0)})}limbs(t,e,n,s,r,o,a,l,c,h,u,f){let d=(m,_,p,g,E,R)=>{let x=new Wt;x.position.set(m,_,0);let M=su(p,g,E);if(M.position.y=-g/2-p*.6,x.add(M),R){let v=R();x.add(v)}return this.inner.add(x),x};this.legL=d(-t,e,n,s,r,f?()=>{let m=pn(n*1.35,f);return m.scale.set(1,.6,1.5),m.position.set(0,-s-n*.55,n*.7),m}:null),this.legR=d(t,e,n,s,r,f?()=>{let m=pn(n*1.35,f);return m.scale.set(1,.6,1.5),m.position.set(0,-s-n*.55,n*.7),m}:null),this.armL=d(-o,a,l,c,h,u?()=>{let m=pn(l*1.45,u);return m.position.y=-c-l*.9,m}:null),this.armR=d(o,a,l,c,h,u?()=>{let m=pn(l*1.45,u);return m.position.y=-c-l*.9,m}:null),this.handY=-c-l*.9}makeExtras(){let t=this.height,e=new st(new ye(t*.64,22,14),new Ae({color:"#7fd8ff",transparent:!0,opacity:.3,depthWrite:!1}));e.position.y=t*.52,e.visible=!1,this.group.add(e),this.shield=e;let n=Sn("#ffd23f",{m:.6,r:.25}),s=new Wt,r=new st(new Lt(.2,.17,.12,5),n);s.add(r);for(let o=0;o<5;o++){let a=o/5*Math.PI*2,l=new st(new Be(.06,.2,6),n);l.position.set(Math.cos(a)*.17,.15,Math.sin(a)*.17),s.add(l)}s.position.y=t+.22,s.scale.setScalar(1.15),s.visible=!1,this.group.add(s),this.leadCrown=s}makeBat(){let t=Sn("#d9a15a",{r:.45,cc:.3}),e=Ve("#3a2412",.7),n=Ve("#ff3b3b",.5),s=new Wt,r=new st(new Lt(.035,.045,.5,10),e);r.position.y=-.18,s.add(r);let o=new st(new Lt(.05,.125,.8,14),t);o.position.y=-.7,s.add(o);let a=new st(new ye(.125,12,8),t);a.scale.y=.5,a.position.y=-1.1,s.add(a);let l=new st(new Xe(.075,.018,6,16),n);l.rotation.x=Math.PI/2,l.position.y=-.52,s.add(l);let c=new st(new ye(.06,8,6),e);c.position.y=.07,s.add(c),s.position.set(0,this.handY,.02),s.visible=!1,s.traverse(h=>{h.isMesh&&(h.castShadow=!0)}),this.armR.add(s),this.bat=s}buildBubbles(){let t=Sn("#ff5fb4"),e=Sn("#d63a8d"),n=su(.47,.34,t);n.position.y=.3+.64,this.body.add(n),this.limbs(.2,.42,.13,.12,t,.5,.95,.11,.22,t,Ve("#ffffff",.3),Ve("#7a2cff",.4)),ru(this.body,1.2,.4,.17,.13);for(let a of[-1,1]){let l=pn(.07,Ve("#ff8fcf"));l.scale.set(1.4,.8,.5),l.position.set(a*.3,1.04,.4),this.body.add(l)}let s=new st(new Hi(Qd(.17,.075),{depth:.04,bevelEnabled:!1}),Sn("#ffd23f",{m:.3}));s.position.set(0,.8,.455),this.body.add(s);let r=new Wt;r.position.set(0,1.55,.02);let o=new st(new Lt(.27,.3,.16,20),Sn("#ffd23f",{m:.55,r:.2}));r.add(o);for(let a=0;a<5;a++){let l=a/5*Math.PI*2,c=new st(new Be(.065,.22,8),Sn("#ffd23f",{m:.55,r:.2}));c.position.set(Math.cos(l)*.23,.18,Math.sin(l)*.23),r.add(c);let h=pn(.04,Ve(a%2?"#35e0ff":"#ff3b6b",.2));h.position.set(Math.cos(l)*.23,.3,Math.sin(l)*.23),r.add(h)}this.body.add(r),this.crown=r,this.height=1.95}buildNinja(){let t=Sn("#2f6bff"),e=Sn("#14224f",{cc:.3}),n=su(.36,.76,t);n.position.y=.34+.74,this.body.add(n),this.limbs(.15,.55,.11,.3,e,.42,1.28,.09,.3,t,Ve("#14224f"),Ve("#0a0a14"));let s=new st(new Lt(.372,.372,.22,24,1,!0),Ve("#0b0b17",.5));s.position.y=1.5,this.body.add(s);let r=new st(new ye(.372,24,8,0,Math.PI*2,0,Math.PI/2),Ve("#0b0b17",.5));r.scale.set(1,.96,1),r.position.y=1.46,this.body.add(r),ru(this.body,1.5,.3,.14,.1,.65);let o=new st(new Xe(.31,.05,8,28),Ve("#ff2b4a",.4));o.rotation.x=Math.PI/2,o.position.y=1.64,this.body.add(o),this.tails=[];for(let h=0;h<2;h++){let u=new Wt;u.position.set(h?.06:-.06,1.64,-.3);let f=new st(new Ee(.1,.05,.6),Ve("#ff2b4a",.4));f.position.z=-.3,u.add(f),this.body.add(u),this.tails.push(u)}let a=new st(new Xe(.37,.05,8,28),Ve("#ffd23f",.4));a.rotation.x=Math.PI/2,a.position.y=.95,this.body.add(a);let l=new st(new Xe(.31,.07,8,24),Ve("#ffffff",.5));l.rotation.x=Math.PI/2,l.position.y=1.28,this.body.add(l);let c=new st(new Hi(Qd(.13,.04),{depth:.03,bevelEnabled:!1}),Sn("#d8e2ff",{m:.8,r:.2}));c.scale.set(1,1,1),c.position.set(0,.7,.34),this.body.add(c),this.height=1.95}buildDino(){let t=Sn("#3ddc84"),e=Sn("#c8ffd9"),n=Sn("#ff9f1c"),s=pn(.58,t,28,20);s.scale.set(1,1.08,.98),s.position.y=.3+.62,this.body.add(s);let r=pn(.45,e,22,16);r.scale.set(.85,.95,.5),r.position.set(0,.85,.36),this.body.add(r),this.limbs(.24,.42,.15,.1,t,.52,.85,.09,.12,t,null,Ve("#1f9d5b"));for(let c of[this.legL,this.legR])for(let h=-1;h<=1;h++){let u=new st(new Be(.035,.12,6),ep);u.rotation.x=Math.PI/2,u.position.set(h*.07,-.22,.36),c.add(u)}let o=pn(.3,t,18,12);o.scale.set(1,.7,.9),o.position.set(0,1,.5),this.body.add(o);for(let c of[-1,1]){let h=pn(.03,np,8,6);h.position.set(c*.08,1.08,.76),this.body.add(h)}ru(this.body,1.42,.34,.22,.17,.5);for(let c of[-1,1]){let h=new st(new Be(.06,.2,8),Ve("#fff1c2",.4));h.position.set(c*.2,1.68,.18),h.rotation.z=-c*.25,this.body.add(h)}[.62,.8,1,1.2,1.38].forEach((c,h)=>{let u=[.13,.18,.21,.18,.13][h],f=new st(new Be(u*.75,u*2,8),n),d=-Math.sqrt(Math.max(.02,.58*.58-(c-.92)*(c-.92)/1.17))-.02;f.position.set(0,c,d),f.rotation.x=-(1.15-h*.2),this.body.add(f)}),this.tail=new Wt,this.tail.position.set(0,.55,-.45);let a=new st(new Be(.22,.9,12),t);a.rotation.x=-Math.PI/2-.4,a.position.set(0,0,-.4),this.tail.add(a);let l=pn(.07,n);l.position.set(0,-.2,-.78),this.tail.add(l),this.body.add(this.tail),this.height=1.85}buildRobo(){let t=Sn("#ffc233"),e=Sn("#b4bdcc",{m:.7,r:.25}),n=Ve("#1c2233",.4),s=new Ae({color:"#4ff3ff"}),r=new st(new Bi(.46,.4,6,16),t);r.scale.set(1,1,.92),r.position.y=.98,r.castShadow=!0,this.body.add(r);let o=new st(new Ee(.64,.3,.12),n);o.position.set(0,1.28,.4),o.rotation.x=-.12,this.body.add(o);for(let u of[-1,1]){let f=pn(.075,s,10,8);f.scale.set(1,1.15,.5),f.position.set(u*.16,1.29,.47),this.body.add(f)}let a=new st(new Ee(.26,.05,.05),n);a.position.set(0,1.03,.45),this.body.add(a);let l=new st(new Ee(.34,.24,.06),e);l.position.set(0,.76,.43),l.rotation.x=-.05,this.body.add(l);for(let[u,f]of[[-.1,.82],[.1,.82],[-.1,.7],[.1,.7]]){let d=pn(.025,n,6,4);d.position.set(u,f,.47),this.body.add(d)}for(let u of[-1,1]){let f=new st(new Lt(.1,.1,.16,12),e);f.rotation.z=Math.PI/2,f.position.set(u*.5,1.28,0),f.castShadow=!0,this.body.add(f)}let c=new st(new Lt(.025,.025,.3,8),e);c.position.set(0,1.78,0),this.body.add(c);let h=pn(.075,Ve("#ff3b3b",.3),12,8);h.position.set(0,1.97,0),this.body.add(h),this.limbs(.2,.45,.12,.14,e,.52,.98,.1,.22,e,Ve("#ff4d4d",.4),Ve("#2b3347",.4)),this.height=2}update(t,e){this.t+=t;let n=uv(e.speed/10.5,0,1.3);e.grounded&&!e.stun&&(this.phase+=t*(5+n*11));let s=Math.sin(this.phase),r=n*.95;if(e.stun>0)this.tumble+=t*11,this.pivot.rotation.x=this.tumble,this.pivot.rotation.z=Math.sin(this.tumble*.5)*.4,this.legL.rotation.x=Math.sin(this.t*16)*1,this.legR.rotation.x=-Math.sin(this.t*16)*1,this.armL.rotation.z=-1.5+Math.sin(this.t*18)*.5,this.armR.rotation.z=1.5-Math.sin(this.t*18)*.5,this.armL.rotation.x=this.armR.rotation.x=0;else{let l=Math.round(this.tumble/(Math.PI*2))*Math.PI*2;this.tumble+=(l-this.tumble)*Math.min(1,t*14),this.pivot.rotation.z*=Math.max(0,1-t*12);let c=e.dive>0?1:0;this.dive+=(c-this.dive)*Math.min(1,t*16);let h=(e.grounded?n*.2:.05)+this.dive*1.35;if(this.lean+=(h-this.lean)*Math.min(1,t*14),this.pivot.rotation.x=this.tumble+this.lean,e.celebrate){let u=Math.abs(Math.sin(this.t*6))*.35;this.body.position.y=u,this.armL.rotation.z=-2.6+Math.sin(this.t*14)*.3,this.armR.rotation.z=2.6-Math.sin(this.t*14)*.3,this.armL.rotation.x=this.armR.rotation.x=0,this.legL.rotation.x=this.legR.rotation.x=0}else if(this.dive>.3)this.armL.rotation.x=this.armR.rotation.x=-2.9,this.armL.rotation.z=-.15,this.armR.rotation.z=.15,this.legL.rotation.x=this.legR.rotation.x=.2;else if(e.grounded){this.legL.rotation.x=s*r,this.legR.rotation.x=-s*r,this.armL.rotation.x=-s*r*.9,this.armR.rotation.x=s*r*.9;let u=Math.sin(this.t*2.2)*.04;this.armL.rotation.z=-.15-u-n*.2,this.armR.rotation.z=.15+u+n*.2}else{let u=e.vy>0;this.legL.rotation.x=u?.7:.35,this.legR.rotation.x=u?-.5:-.2,this.armL.rotation.z=-2.2,this.armR.rotation.z=2.2,this.armL.rotation.x=this.armR.rotation.x=0}e.celebrate||(this.body.position.y=e.grounded?Math.abs(s)*.07*n:0)}if(this.shield.visible=!!e.shield,e.shield){let l=1+Math.sin(this.t*8)*.04;this.shield.scale.set(l,l,l)}if(this.leadCrown.visible=!!e.leader,e.leader&&(this.leadCrown.rotation.y+=t*2.2,this.leadCrown.position.y=this.height+.22+Math.sin(this.t*3)*.05),this.bat.scale.setScalar(e.mega?1.6:1),e.swing>0&&!e.stun){let l=e.swing,c;if(l<.3)c=-2.95*(l/.3);else{let h=(l-.3)/.7;c=-2.95+2.75*(1-(1-h)*(1-h))}this.armR.rotation.x=c,this.armR.rotation.z=.12,this.pivot.rotation.x=this.tumble+this.lean+(l>.3?.28*Math.sin(Math.min(1,(l-.3)/.35)*Math.PI):0),this.bat.visible=!0}else this.bat.visible=!1;e.landed&&(this.squash=1),this.squash=Math.max(0,this.squash-t*5);let o=1-Math.sin(this.squash*Math.PI)*.22*this.squash;!e.grounded&&e.vy>2&&!e.stun&&(o=1.1),!e.grounded&&e.vy<-8&&(o=1.06);let a=1+(1-o)*.55;this.body.scale.set(a,o,a),this.tails&&this.tails.forEach((l,c)=>{l.rotation.x=-.15-n*.5+Math.sin(this.t*9+c)*.12*(.4+n),l.rotation.y=(c?1:-1)*(.15+Math.sin(this.t*7+c*2)*.12)}),this.tail&&(this.tail.rotation.y=Math.sin(this.t*(6+n*6))*(.35+n*.25)),this.crown&&(this.crown.rotation.z=Math.sin(this.t*5)*.05*n)}dispose(){this.group.traverse(t=>{if(t.isMesh){t.geometry.dispose();let e=t.material;(Array.isArray(e)?e:[e]).forEach(n=>n.dispose())}})}};function _r(i,t="#ffffff"){let e=document.createElement("canvas");e.width=512,e.height=128;let n=e.getContext("2d");n.font='700 64px "Lilita One","Fredoka","Baloo 2","Trebuchet MS",Arial,sans-serif',n.textAlign="center",n.textBaseline="middle";let s=Math.min(480,n.measureText(i).width+56);n.fillStyle="rgba(12,10,36,0.72)";let r=(512-s)/2,o=14,a=100,l=50;n.beginPath(),n.moveTo(r+l,o),n.arcTo(r+s,o,r+s,o+a,l),n.arcTo(r+s,o+a,r,o+a,l),n.arcTo(r,o+a,r,o,l),n.arcTo(r,o,r+s,o,l),n.closePath(),n.fill(),n.lineWidth=6,n.strokeStyle=t,n.stroke(),n.lineWidth=8,n.strokeStyle="rgba(0,0,0,0.65)",n.strokeText(i,256,68,440),n.fillStyle="#ffffff",n.fillText(i,256,68,440);let c=new vn(e);c.colorSpace=Pe,c.anisotropy=4;let h=new qr(new js({map:c,transparent:!0,depthTest:!1,depthWrite:!1,fog:!1}));return h.renderOrder=999,h.scale.set(2.8,.7,1),h.userData.base=.7,h}var Oo={fun:{top:"#35a7ff",horizon:"#e8fbff",bottom:"#fff6d8",fog:"#d9f4ff",fogNear:120,fogFar:640,sun:"#fff4d6",sunPos:[-40,90,-60],sunI:2.7,hemiSky:"#d4ecff",hemiGround:"#bfe8a0",hemiI:1.05,exp:1.05,waterA:"#37d7e8",waterB:"#1388c9",water:"water",env:.6},jungle:{top:"#3a9be8",horizon:"#dff6c9",bottom:"#f3ffd9",fog:"#cfeec0",fogNear:70,fogFar:380,sun:"#fff3c8",sunPos:[-50,85,-40],sunI:2.6,hemiSky:"#cfe9ff",hemiGround:"#6fbf5a",hemiI:1.05,exp:1.05,waterA:"#37d7e8",waterB:"#1388c9",water:"water",env:.55}},ou=null;function ip(){return ou||(ou=(async()=>{try{await Promise.race([Promise.all([document.fonts.load('400 100px "Lilita One"'),document.fonts.load('400 100px "Fredoka One"'),document.fonts.load('400 100px "Noto Nastaliq Urdu"',"\u0639\u06A9\u0631\u0645\u06C1")]),new Promise(i=>setTimeout(i,2500))])}catch{}})()),ou}var lc='"Lilita One","Fredoka One","Baloo 2","Arial Rounded MT Bold","Trebuchet MS",Impact,Arial,sans-serif';function cc(i="HARIS",t=null,e=["#fff7a8","#ffc83d","#ff7a1a"]){let n=document.createElement("canvas");n.width=1024,n.height=t?512:400;let s=n.getContext("2d");s.textAlign="center",s.textBaseline="middle";let r=300;for(s.font=`${r}px ${lc}`;s.measureText(i).width>900&&r>80;)r-=10,s.font=`${r}px ${lc}`;let o=t?220:200;s.lineJoin="round",s.shadowColor="rgba(255,190,60,0.9)",s.shadowBlur=40,s.lineWidth=46,s.strokeStyle="rgba(255,170,40,0.35)",s.strokeText(i,512,o),s.shadowBlur=0,s.lineWidth=40,s.strokeStyle="#1b0f4a",s.strokeText(i,512,o),s.lineWidth=18,s.strokeStyle="#ffffff",s.strokeText(i,512,o),s.fillStyle="#b0420b";for(let c=14;c>0;c-=2)s.fillText(i,512,o+c);let a=s.createLinearGradient(0,o-r/2,0,o+r/2);a.addColorStop(0,e[0]),a.addColorStop(.55,e[1]),a.addColorStop(1,e[2]),s.fillStyle=a,s.fillText(i,512,o),s.globalCompositeOperation="source-atop",s.fillStyle="rgba(255,255,255,0.35)",s.fillRect(0,o-r/2,1024,r*.18),s.globalCompositeOperation="source-over",t&&(s.font=`90px ${lc}`,s.lineWidth=16,s.strokeStyle="#1b0f4a",s.strokeText(t,512,440),s.fillStyle="#ffffff",s.fillText(t,512,440));let l=new vn(n);return l.colorSpace=Pe,l.anisotropy=8,l}function fv(i,t="#ff3b6b",e="#ffffff"){let n=document.createElement("canvas");n.width=1024,n.height=256;let s=n.getContext("2d");s.fillStyle=t,s.fillRect(0,0,1024,256);let r=32;s.fillStyle=e;for(let a=0;a<1024;a+=r)for(let l=0;l<256;l+=r)(a+l)/r%2===0&&(l<r||l>=256-r)&&s.fillRect(a,l,r,r);s.font=`150px ${lc}`,s.textAlign="center",s.textBaseline="middle",s.lineJoin="round",s.lineWidth=26,s.strokeStyle="#1b0f4a",s.strokeText(i,512,132),s.fillStyle="#fff",s.fillText(i,512,132);let o=new vn(n);return o.colorSpace=Pe,o.anisotropy=8,o}function sp(){let i=document.createElement("canvas");i.width=128,i.height=128;let t=i.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,128,128),t.fillStyle="rgba(0,0,0,0.28)",t.beginPath(),t.moveTo(64,14),t.lineTo(108,70),t.lineTo(80,70),t.lineTo(80,112),t.lineTo(48,112),t.lineTo(48,70),t.lineTo(20,70),t.closePath(),t.fill();let e=new vn(i);return e.colorSpace=Pe,e.anisotropy=4,e}function dv(i="rgba(255,255,255,1)",t="rgba(255,255,255,0)"){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d"),s=n.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,i),s.addColorStop(1,t),n.fillStyle=s,n.fillRect(0,0,128,128);let r=new vn(e);return r.colorSpace=Pe,r}function au(i){let t=new z(...i.sunPos).normalize(),e=new Je({side:Qe,depthWrite:!1,fog:!1,uniforms:{top:{value:new Ut(i.top)},horizon:{value:new Ut(i.horizon)},bottom:{value:new Ut(i.bottom)},sunDir:{value:t},sunColor:{value:new Ut(i.sun)}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); gl_Position.z = gl_Position.w; }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom; uniform vec3 sunDir; uniform vec3 sunColor; varying vec3 vD;
      void main(){ float h = vD.y; vec3 c = h>0.0 ? mix(horizon, top, pow(h, 0.55)) : mix(horizon, bottom, pow(-h, 0.45));
        float s = max(dot(normalize(vD), sunDir), 0.0); c += sunColor * (pow(s, 600.0)*3.0 + pow(s, 24.0)*0.35 + pow(s, 6.0)*0.12);
        gl_FragColor = vec4(c, 1.0); }`}),n=new st(new ye(900,32,16),e);return n.frustumCulled=!1,n.renderOrder=-10,n}function lu(i,t){let e=new Ut(i.fog),n=i.water==="lava"?1:i.water==="grid"?2:0,s=new Je({uniforms:{time:{value:0},cA:{value:new Ut(i.waterA)},cB:{value:new Ut(i.waterB)},fogC:{value:e},fogN:{value:i.fogNear},fogF:{value:i.fogFar},kind:{value:n}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform float time; uniform vec3 cA; uniform vec3 cB; uniform vec3 fogC; uniform float fogN; uniform float fogF; uniform float kind; varying vec3 vW;
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
      }`}),r=new st(new Ge(1600,1600),s);return r.rotation.x=-Math.PI/2,r.position.y=t,r.frustumCulled=!1,r.renderOrder=-5,r.userData.mat=s,r}var zo=class{constructor(t=500){this.max=t,this.n=0,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*3),this.size=new Float32Array(t),this.alpha=new Float32Array(t),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.grav=new Float32Array(t),this.s0=new Float32Array(t);let e=new Oe;e.setAttribute("position",new Ne(this.pos,3).setUsage(ur)),e.setAttribute("color",new Ne(this.col,3).setUsage(ur)),e.setAttribute("size",new Ne(this.size,1).setUsage(ur)),e.setAttribute("alpha",new Ne(this.alpha,1).setUsage(ur)),e.setDrawRange(0,0),this.mat=new Je({transparent:!0,depthWrite:!1,uniforms:{scale:{value:600}},vertexShader:"attribute float size; attribute float alpha; attribute vec3 color; varying float vA; varying vec3 vC; uniform float scale; void main(){ vA=alpha; vC=color; vec4 mv = modelViewMatrix*vec4(position,1.0); gl_PointSize = size*scale/max(1.0,-mv.z); gl_Position = projectionMatrix*mv; }",fragmentShader:"varying float vA; varying vec3 vC; void main(){ vec2 c = gl_PointCoord-0.5; float d = length(c); if(d>0.5) discard; gl_FragColor = vec4(vC, vA*smoothstep(0.5,0.1,d)); }"}),this.points=new nr(e,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,this.geo=e,this._c=new Ut}emit(t,e,n,s,r={}){var a,l,c,h,u,f,d,m;let o=this._c.set((a=r.color)!=null?a:"#ffffff");for(let _=0;_<s;_++){let p=this.n<this.max?this.n++:Math.floor(Math.random()*this.max),g=Math.random()*Math.PI*2,E=((l=r.speed)!=null?l:3)*(.3+Math.random()*.9),R=(c=r.up)!=null?c:3,x=p*3;this.pos[x]=t+(Math.random()-.5)*((h=r.spread)!=null?h:.3),this.pos[x+1]=e,this.pos[x+2]=n+(Math.random()-.5)*((u=r.spread)!=null?u:.3),this.vel[x]=Math.cos(g)*E,this.vel[x+1]=R*(.4+Math.random()*.9),this.vel[x+2]=Math.sin(g)*E;let M=r.rainbow?this._c.setHSL(Math.random(),.9,.6):o;this.col[x]=M.r,this.col[x+1]=M.g,this.col[x+2]=M.b,this.life[p]=this.maxLife[p]=((f=r.life)!=null?f:.6)*(.6+Math.random()*.8),this.s0[p]=((d=r.size)!=null?d:.35)*(.6+Math.random()*.8),this.size[p]=this.s0[p],this.grav[p]=(m=r.gravity)!=null?m:9,this.alpha[p]=1}}update(t){for(let e=0;e<this.n;e++){if(this.life[e]<=0){this.alpha[e]=0,this.size[e]=0;continue}this.life[e]-=t;let n=e*3;this.vel[n+1]-=this.grav[e]*t,this.pos[n]+=this.vel[n]*t,this.pos[n+1]+=this.vel[n+1]*t,this.pos[n+2]+=this.vel[n+2]*t;let s=Math.max(0,this.life[e]/this.maxLife[e]);this.alpha[e]=Math.min(1,s*1.6),this.size[e]=this.s0[e]*(.4+.6*s)}this.geo.setDrawRange(0,this.n),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,this.geo.attributes.size.needsUpdate=!0,this.geo.attributes.alpha.needsUpdate=!0}setScale(t){this.mat.uniforms.scale.value=t*.9}},Fo=class{constructor(t,e=350){this.kind=t,this.n=e;let n=new Float32Array(e*3);this.seed=new Float32Array(e*3);for(let o=0;o<e*3;o++)this.seed[o]=Math.random();let s=new Oe;s.setAttribute("position",new Ne(n,3));let r={fun:"#fff6a8",jungle:"#fffbb0"};this.mat=new er({color:r[t]||"#fff",size:t==="frost"?.28:.22,transparent:!0,opacity:.85,depthWrite:!1,map:dv(),blending:t==="neon"||t==="canyon"?Ei:Yi}),this.points=new nr(s,this.mat),this.points.frustumCulled=!1,this.pos=n}update(t,e){let r=this.kind,o=this.pos,a=this.seed;for(let l=0;l<this.n;l++){let c=l*3,h=a[c]*70,u=a[c+1]*36,f=a[c+2]*70;r==="frost"?(u=36-(t*(2+a[c]*2)+a[c+1]*36)%36,h+=Math.sin(t*.7+l)*1.2):r==="canyon"?(u=(t*(1.5+a[c]*2)+a[c+1]*36)%36,h+=Math.sin(t*.9+l)*.8):(u+=Math.sin(t*.6+l)*.8,h+=Math.cos(t*.4+l*1.3)*.8),o[c]=e.x+((h-e.x)%70+70)%70-70/2,o[c+1]=e.y-36/2+u,o[c+2]=e.z+((f-e.z)%70+70)%70-70/2}this.points.geometry.attributes.position.needsUpdate=!0}};function pv(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function rp(i,t,e,n){let s=Oo[t],r=new Wt;r.name="scenery";let o=pv(t.length*9973+17),a=new Ai,l=new Ai,c=e.length,h=-c-40,u=0,f=82,d=[],m=(M,v)=>(o()<.5?-1:1)*(M+f+o()*(v-M)),_=M=>M[Math.floor(o()*M.length)],p=(M,v=16,w=10)=>new ye(M,v,w),g=(M,v,w,y=14)=>new Lt(M,v,w,y),E=(M,v,w=14)=>new Be(M,v,w);if(t==="fun"){for(let M=0;M<46;M++){let v=70-o()*(c+200),w=m(26,140),y=1+o()*1.8,b=o(),C=u-1;if(b<.4){let P=_(["#ff4d6d","#3ec6e0","#ffd23f","#8b5cf6"]);a.add(g(6*y,6*y,5*y,16),w,C+2.5*y,v,P),a.add(E(6.8*y,5*y,16),w,C+7.5*y,v,"#ffffff"),a.add(E(1.1*y,3*y,8),w,C+11*y,v,P),a.add(g(.12*y,.12*y,4*y,4),w,C+14*y,v,"#ffffff")}else if(b<.7){for(let P=0;P<8;P++)a.add(g(2.2*y,2.2*y,2.4*y,12),w,C+(1.2+P*2.4)*y,v,P%2?"#ffffff":"#ff4d6d");a.add(E(3*y,4*y,12),w,C+21*y,v,"#ffd23f")}else a.add(g(.3*y,.4*y,9*y,6),w,C+4.5*y,v,"#5b2a86"),l.add(p(1.1*y,10,8),w,C+9.6*y,v,_(["#ffe27a","#ff9ccb","#9cf0ff"]))}[[-120,-c*.25],[140,-c*.62],[-130,-c*.9]].forEach(([M,v],w)=>{let y=new Wt;y.position.set(M,u+34,v),y.rotation.y=w%2?.5:-.5;let b=new st(new Xe(30,.9,8,48),new ce({color:"#ffffff",roughness:.4}));y.add(b);let C=new ce({color:"#ff4d6d"});for(let N=0;N<8;N++){let A=new st(g(.35,.35,60,5),C);A.rotation.z=N*Math.PI/8,y.add(A)}let P=[];for(let N=0;N<12;N++){let A=N/12*Math.PI*2,I=new st(new Ee(4.4,3.4,3.4),new ce({color:_(["#ffd23f","#3ec6e0","#ff4d6d","#8bd450"]),roughness:.35}));I.position.set(Math.cos(A)*30,Math.sin(A)*30-2,0),y.add(I),P.push([I,A])}let D=new ce({color:"#5b2a86"});for(let N of[-1,1]){let A=new st(g(1.2,1.6,44,6),D);A.position.set(N*11,-20,0),A.rotation.z=N*-.28,y.add(A)}r.add(y),d.push(N=>{let A=N*.12*(w%2?-1:1);b.rotation.z=A,y.children.forEach(I=>{var U,O;I.geometry&&I.geometry.type==="CylinderGeometry"&&I.position.x===0&&I.position.y===0&&(I.rotation.z=((O=(U=I.userData).b)!=null?O:U.b=I.rotation.z)+A)}),P.forEach(([I,U])=>I.position.set(Math.cos(U+A)*30,Math.sin(U+A)*30-2,0))})});for(let M=0;M<26;M++){let v=new Wt,w=_(["#ff5fa8","#ffd84d","#4dd0ff","#9b7bff","#5ee89a"]),y=new st(p(1.6,16,12),new ce({color:w,roughness:.25}));y.scale.y=1.2;let b=new st(g(.03,.03,4,4),new Ae({color:"#ffffff"}));b.position.y=-3,v.add(y,b),v.position.set(m(14,80),8+o()*34,40-o()*(c+120)),v.userData.ph=o()*6,r.add(v),d.push(C=>{v.position.y+=Math.sin(C*.8+v.userData.ph)*.004,v.rotation.z=Math.sin(C*.6+v.userData.ph)*.08})}}else if(t==="jungle"){for(let M=0;M<90;M++){let v=o()*Math.PI*2,w=120+o()*90,y=150+o()*90,b=Math.cos(v)*w,C=-108+Math.sin(v)*y,P=1.4+o()*2.4;a.add(g(.7*P,1*P,9*P,6),b,4.5*P,C,"#6b4423"),a.add(p(4.4*P,8,6),b,11*P,C,_(["#2e9b3f","#3fb14c","#27863a"]))}for(let M=0;M<16;M++){let v=M/16*Math.PI*2+o()*.3,w=Math.cos(v)*(260+o()*60),y=-108+Math.sin(v)*(300+o()*60),b=1+o()*1.4;a.add(E(40*b,70*b,7),w,30*b,y,_(["#5f9a7a","#6aa88a","#4f8a6c"])),a.add(E(14*b,20*b,7),w,66*b,y,"#ffffff")}for(let M=0;M<26;M++){let v=new Wt,w=(o()-.5)*520,y=-108+(o()-.5)*520,b=85+o()*50,C=3+Math.floor(o()*3);for(let P=0;P<C;P++){let D=new st(p(7+o()*6,10,8),new Ae({color:"#ffffff",transparent:!0,opacity:.9,fog:!1}));D.position.set(P*9-C*4,o()*3,o()*5),D.scale.y=.55,v.add(D)}v.position.set(w,b,y),v.userData.ph=o()*6,r.add(v),d.push(P=>{v.position.x+=.012*(1+v.userData.ph%1),v.position.x>300&&(v.position.x=-300)})}}let R=a.build(new ce({vertexColors:!0,roughness:.55}));R&&(R.castShadow=!1,R.receiveShadow=!1,r.add(R));let x=l.build(new Ae({vertexColors:!0,toneMapped:!1}));if(x&&r.add(x),t!=="jungle"){let M=new Wt;M.name="brand",r.add(M);let v=cc("HARIS","MADE THIS GAME"),w=e.finishPlat,y=P=>new ce({color:P,roughness:.4}),b=(P,D,N,A,I)=>{let U=new Wt;U.position.set(0,D,P);let O=y("#2b1c6b");for(let K of[-1,1]){let J=new st(new Ee(1.2,9,1.2),O);J.position.set(K*N/2,4.5,0),J.castShadow=!0,U.add(J)}let tt=new st(new Ge(N,N/4),new Ae({map:fv(A,I),toneMapped:!1,side:ln}));tt.position.set(0,8.6,.05),U.add(tt);let G=new st(new Ee(N+1.2,.6,1.2),O);G.position.set(0,10.4,0),U.add(G),M.add(U)};b(e.startArch,0,20,"START","#22c55e"),b(e.finishZ+.01,w.top,19,"FINISH","#ef233c");let C=new st(new Ge(30,15),new Ae({map:v,transparent:!0,toneMapped:!1,depthWrite:!1,fog:!1}));C.position.set(0,w.top+21,e.finishZ-.5),M.add(C),d.push(P=>{C.position.y=w.top+21+Math.sin(P*1.2)*.4})}return i.add(r),{group:r,update(M,v){for(let w of d)w(M);r.userData.stars&&r.userData.stars.position.copy(v)},dispose(){i.remove(r),r.traverse(M=>{M.geometry&&M.geometry.dispose(),M.material&&(Array.isArray(M.material)?M.material:[M.material]).forEach(w=>{w.map&&w.map.dispose(),w.dispose()})})}}}var oe=null,_s=null,vr=null,Qi=null,uc=null,ap=!1;var hc=null,ji=null;function Ri(){if(oe){oe.state==="suspended"&&oe.resume();return}let i=window.AudioContext||window.webkitAudioContext;if(!i)return;oe=new i,_s=oe.createGain(),_s.gain.value=ap?0:.9,_s.connect(oe.destination),vr=oe.createGain(),vr.gain.value=.7,vr.connect(_s),Qi=oe.createGain(),Qi.gain.value=.22,Qi.connect(_s);let t=oe.sampleRate;uc=oe.createBuffer(1,t,oe.sampleRate);let e=uc.getChannelData(0);for(let n=0;n<t;n++)e[n]=Math.random()*2-1}function lp(i){ap=i,_s&&_s.gain.setTargetAtTime(i?0:.9,oe.currentTime,.05)}function jt(i,t,e,n,s=.3,r=0,o=vr){if(!oe)return;let a=oe.currentTime+r,l=oe.createOscillator(),c=oe.createGain();l.type=i,l.frequency.setValueAtTime(t,a),e!==t&&l.frequency.exponentialRampToValueAtTime(Math.max(20,e),a+n),c.gain.setValueAtTime(1e-4,a),c.gain.exponentialRampToValueAtTime(s,a+.012),c.gain.exponentialRampToValueAtTime(1e-4,a+n),l.connect(c),c.connect(o),l.start(a),l.stop(a+n+.05)}function Ln(i,t,e,n,s,r=0,o=1){if(!oe)return;let a=oe.currentTime+r,l=oe.createBufferSource();l.buffer=uc,l.loop=!0;let c=oe.createBiquadFilter();c.type=e,c.Q.value=o,c.frequency.setValueAtTime(n,a),c.frequency.exponentialRampToValueAtTime(Math.max(30,s),a+i);let h=oe.createGain();h.gain.setValueAtTime(1e-4,a),h.gain.exponentialRampToValueAtTime(t,a+.015),h.gain.exponentialRampToValueAtTime(1e-4,a+i),l.connect(c),c.connect(h),h.connect(vr),l.start(a),l.stop(a+i+.05)}var mv=(i,t)=>i+Math.random()*(t-i),It={click(){jt("triangle",520,780,.09,.25)},roar(i=1){jt("sawtooth",i?180:260,i?60:110,.5,.22),jt("square",i?120:200,50,.4,.12,.03),Ln(.4,.14,"lowpass",800,200)},tame(){jt("triangle",520,780,.12,.25),jt("triangle",660,990,.12,.25,.1),jt("triangle",880,1320,.2,.25,.2)},select(){jt("triangle",660,990,.12,.28),jt("sine",990,1320,.1,.18,.06)},back(){jt("triangle",520,330,.12,.22)},jump(){jt("sine",280,640,.17,.3),jt("triangle",420,880,.12,.08,.02)},land(i=10){let t=Math.min(.5,.12+i*.012);jt("sine",140,60,.12,t),Ln(.09,t*.7,"lowpass",900,200)},step(){Ln(.045,.07,"bandpass",mv(500,800),300,0,2)},dive(){Ln(.3,.22,"bandpass",500,2200,0,1.5),jt("sine",300,520,.2,.15)},bounce(){jt("sine",180,920,.3,.38),jt("triangle",360,1400,.22,.12,.03)},pickup(){jt("triangle",520,1040,.18,.3),jt("sine",780,1560,.24,.2,.07),jt("sine",1170,2340,.2,.12,.14)},swing(){Ln(.24,.3,"bandpass",500,2800,0,1.2),jt("sine",380,160,.16,.08)},bonk(){jt("square",190,55,.2,.42),Ln(.14,.45,"lowpass",3e3,300),jt("triangle",820,220,.22,.22,.02)},hit(){jt("sawtooth",420,70,.28,.28),Ln(.18,.3,"lowpass",1800,150),jt("square",220,110,.15,.12,.04)},door(){jt("square",150,90,.07,.3),jt("square",110,70,.1,.25,.09),Ln(.05,.18,"lowpass",2e3,400)},honk(){jt("square",392,392,.34,.2),jt("square",494,494,.34,.2)},honkBig(){jt("sawtooth",130,128,.95,.3),jt("square",164,162,.95,.24),jt("sawtooth",196,194,.95,.22),jt("square",262,258,.95,.14),Ln(.12,.12,"lowpass",900,300)},skid(){Ln(.18,.1,"bandpass",2600,1800,0,3)},vroom(){jt("sawtooth",70,160,.35,.2),jt("sawtooth",90,210,.3,.1,.05)},splash(){Ln(.6,.45,"bandpass",1800,260,0,.8),Ln(.3,.2,"highpass",2400,900,.05),jt("sine",220,80,.3,.12)},respawn(){Ln(.4,.22,"highpass",400,4e3,0,.7),jt("sine",300,900,.3,.15)},checkpoint(){jt("sine",660,660,.14,.3),jt("sine",990,990,.25,.3,.1),jt("triangle",1320,1320,.3,.1,.18)},tick(){jt("sine",660,660,.14,.4)},go(){[523,659,784].forEach(i=>jt("square",i,i,.5,.14)),jt("sine",1046,1046,.6,.3)},join(){jt("triangle",520,520,.1,.25),jt("triangle",780,780,.14,.25,.09)},finish(){[523,659,784,1046,1318].forEach((i,t)=>{jt("square",i,i,.22,.14,t*.09),jt("triangle",i*2,i*2,.3,.08,t*.09)})},win(){[523,659,784,659,784,1046,1318].forEach((t,e)=>{jt("square",t,t,.24,.13,e*.12),jt("triangle",t/2,t/2,.3,.12,e*.12)})},lose(){[392,349,311,262].forEach((i,t)=>jt("triangle",i,i*.97,.3,.22,t*.17))},warn(){jt("square",880,880,.08,.14)}},gv={major:[0,2,4,7,9,12,14,16],minor:[0,3,5,7,10,12,15,17],lydian:[0,2,4,6,7,9,11,12],dorian:[0,2,3,5,7,9,10,12]},op=[{bpm:112,root:65,scale:"lydian",prog:[0,5,3,4],lead:"triangle",bright:3400},{bpm:124,root:57,scale:"dorian",prog:[0,3,4,0],lead:"triangle",bright:3e3},{bpm:120,root:60,scale:"major",prog:[0,3,4,0],lead:"triangle",bright:3e3}],cu=i=>440*Math.pow(2,(i-69)/12);function hu(i,t,e,n,s,r){let o=oe.createOscillator(),a=oe.createGain(),l=oe.createBiquadFilter();o.type=i,o.frequency.setValueAtTime(t,e),l.type="lowpass",l.frequency.value=r,a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(s,e+.01),a.gain.exponentialRampToValueAtTime(1e-4,e+n),o.connect(l),l.connect(a),a.connect(Qi),o.start(e),o.stop(e+n+.05)}function xv(i,t){let e=oe.createBufferSource();e.buffer=uc;let n=oe.createBiquadFilter();n.type="highpass",n.frequency.value=7e3;let s=oe.createGain();s.gain.setValueAtTime(t,i),s.gain.exponentialRampToValueAtTime(1e-4,i+.05),e.connect(n),n.connect(s),s.connect(Qi),e.start(i),e.stop(i+.06)}function yv(i){let t=oe.createOscillator(),e=oe.createGain();t.frequency.setValueAtTime(150,i),t.frequency.exponentialRampToValueAtTime(40,i+.12),e.gain.setValueAtTime(.55,i),e.gain.exponentialRampToValueAtTime(1e-4,i+.16),t.connect(e),e.connect(Qi),t.start(i),t.stop(i+.2)}function Mr(i){if(uu(),!oe)return;let t=op[i]||op[2],e=gv[t.scale],n=60/t.bpm/4,s=1234+i*77,r=()=>(s=s*1664525+1013904223>>>0,s/4294967296),o=[];for(let l=0;l<4;l++){let c=[];for(let h=0;h<16;h++)c.push(h%4===0||r()<.38?Math.floor(r()*6):-1);o.push(c)}ji={i:0,next:oe.currentTime+.1};let a=()=>{if(!(!oe||!ji))for(;ji.next<oe.currentTime+.18;){let l=ji.i,c=l%16,h=Math.floor(l/16)%4,u=t.prog[h]||0,f=ji.next,d=t.root+e[u%e.length]-12;c%4===0&&yv(f),c%2===0&&xv(f,c%4===2?.1:.05),(c%4===0||c%8===6)&&hu("triangle",cu(d-12),f,n*3.2,.4,600),c===0&&[0,2,4].forEach(_=>hu("sine",cu(t.root+e[(u+_)%e.length]),f,n*15,.07,1400));let m=o[h][c];m>=0&&hu(t.lead,cu(t.root+12+e[(m+u)%e.length]),f,n*1.8,.11,t.bright),ji.next+=n,ji.i++}};hc=setInterval(a,40),a()}function uu(){hc&&clearInterval(hc),hc=null,ji=null}function fc(i){Qi&&Qi.gain.setTargetAtTime(i?.08:.22,oe.currentTime,.2)}var pi=null;function cp(){if(!oe||pi)return;let i=oe.createGain();i.gain.value=1e-4;let t=oe.createBiquadFilter();t.type="lowpass",t.frequency.value=500;let e=oe.createOscillator(),n=oe.createOscillator();e.type="sawtooth",n.type="square",e.frequency.value=60,n.frequency.value=30,e.connect(t),n.connect(t),t.connect(i),i.connect(vr),e.start(),n.start(),pi={g:i,f:t,o1:e,o2:n}}function hp(i,t){if(!oe||!pi)return;let e=oe.currentTime,n=Math.max(0,Math.min(1,i)),s=52+n*150+(t?16:0);pi.o1.frequency.setTargetAtTime(s,e,.08),pi.o2.frequency.setTargetAtTime(s*.5,e,.08),pi.f.frequency.setTargetAtTime(380+n*900+(t?300:0),e,.1),pi.g.gain.setTargetAtTime(.05+n*.07+(t?.04:0),e,.1)}function fu(){if(!pi)return;let i=pi;pi=null;try{i.g.gain.setTargetAtTime(1e-4,oe.currentTime,.05),setTimeout(()=>{try{i.o1.stop(),i.o2.stop()}catch{}},300)}catch{}}var dc=class{constructor(){this.ws=null,this.h={},this.offset=0,this.rtt=0,this.best=1/0,this.connected=!1,this.id=null,this.samples=0}now(){return Date.now()+this.offset}on(t,e){this.h[t]=e}connect(){return new Promise((t,e)=>{if(this.connected)return t();let n=location.protocol==="https:"?"wss":"ws",s;try{s=new WebSocket(`${n}://${location.host}/ws`)}catch(o){return e(o)}this.ws=s;let r=setTimeout(()=>{try{s.close()}catch{}e(new Error("timeout"))},8e3);s.onopen=()=>{clearTimeout(r),this.connected=!0;for(let o=0;o<8;o++)setTimeout(()=>this.ping(),o*140);this.pinger=setInterval(()=>this.ping(),2e3),t()},s.onmessage=o=>{let a;try{a=JSON.parse(o.data)}catch{return}if(a.t==="pong")return this.onPong(a);a.t==="joined"&&(this.id=a.id);let l=this.h[a.t];l&&l(a)},s.onclose=()=>{clearTimeout(r);let o=this.connected;this.connected=!1,clearInterval(this.pinger),o&&this.h.close?this.h.close():e(new Error("closed"))},s.onerror=()=>{}})}ping(){this.send({t:"ping",c:Date.now()})}onPong(t){let e=Date.now(),n=e-t.c;this.rtt=this.rtt?this.rtt*.7+n*.3:n;let s=t.s+n/2-e;(n<=this.best*1.25||this.samples<3)&&(this.offset=this.samples<8?n<=this.best?s:this.offset:this.offset*.8+s*.2,this.best=Math.min(this.best,n)),this.samples++,this.samples%10===0&&(this.best=this.best*1.3+2)}send(t){this.ws&&this.ws.readyState===1&&this.ws.send(JSON.stringify(t))}close(){try{this.ws&&this.ws.close()}catch{}this.connected=!1,clearInterval(this.pinger)}};var fp=`
float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f); return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
`;function dp(i){let t=i.x1-i.x0,e=i.z1-i.z0,n=new Je({transparent:!0,depthWrite:!1,uniforms:{time:{value:0},rect:{value:new Ue(i.x0,i.z0,i.x1,i.z1)},depth:{value:i.surf-i.bottom},sunDir:{value:new z(-.35,.8,-.5).normalize()},skyTop:{value:new Ut("#4aa8ff")},skyHor:{value:new Ut("#e8fbff")},fogC:{value:new Ut("#d9f4ff")},fogN:{value:120},fogF:{value:640},ag:{value:[new z(0,0,0),new z(0,0,0),new z(0,0,0),new z(0,0,0)]}},vertexShader:`uniform float time; varying vec3 vW;
      void main(){ vec4 w = modelMatrix*vec4(position,1.0); w.y += sin(w.x*1.3+time*1.6)*0.018 + sin(w.z*1.7-time*1.3)*0.015; vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }`,fragmentShader:`uniform float time; uniform vec4 rect; uniform float depth; uniform vec3 sunDir; uniform vec3 skyTop; uniform vec3 skyHor; uniform vec3 fogC; uniform float fogN; uniform float fogF; uniform vec3 ag[4]; varying vec3 vW;
      ${fp}
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
      }`}),s=new Ge(t,e,40,40),r=new st(s,n);return r.rotation.x=-Math.PI/2,r.position.set((i.x0+i.x1)/2,i.surf,(i.z0+i.z1)/2),r.renderOrder=3,r.frustumCulled=!1,r.userData.pool=i,r}function pp(i){let t=i.x1-i.x0,e=i.z1-i.z0,n=new Je({transparent:!0,depthWrite:!1,blending:Ei,uniforms:{time:{value:0}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform float time; varying vec3 vW; ${fp}
      void main(){
        vec2 p = vW.xz*0.55; float t = time*0.5, c = 0.0;
        for(int i=0;i<3;i++){ p += vec2(sin(p.y*1.7+t), cos(p.x*1.4-t))*0.55; c += abs(sin(p.x*2.2+p.y*1.8)); }
        c = pow(1.0 - c/3.0, 5.0) * 1.6;
        gl_FragColor = vec4(vec3(0.55,0.95,1.0)*c*0.55, 1.0);
      }`}),s=new st(new Ge(t,e),n);return s.rotation.x=-Math.PI/2,s.position.set((i.x0+i.x1)/2,i.bottom+.03,(i.z0+i.z1)/2),s.renderOrder=2,s.frustumCulled=!1,s}var ei=[{id:0,name:"Sprinter",color:"#0b6b3a",max:27,acc:17,grip:6.5,turn:2.2,hw:.95,hl:2.1},{id:1,name:"Buggy",color:"#2f7bff",max:23,acc:15,grip:8.5,turn:2.5,hw:1.05,hl:1.9},{id:2,name:"Pickup",color:"#ffb21e",max:22,acc:14,grip:7,turn:2,hw:1.05,hl:2.3},{id:3,name:"Bubble",color:"#a855f7",max:24,acc:16,grip:7.5,turn:2.4,hw:.95,hl:1.8},...[4,5,6,7].map(i=>({id:i,name:"Racer",color:"#e0001f",max:42,acc:36,grip:9.5,turn:2.15,hw:1.05,hl:2.35,racer:!0}))];function gp(i,t,e,n){return{id:i,x:t,z:e,y:0,pitch:0,yaw:n,vx:0,vz:0,speed:0,steer:0,drift:0,driver:-1,bump:0,boost:0,parked:!0,spin:0,crash:0,acc:0}}function mp(i,t,e,n=1.5,s){let r=1e9,o=t,a=e,l=1,c=1,h=0,u=0,f=0,d=s!==void 0;for(let _ of i.segs){let p=_.bx-_.ax,g=_.bz-_.az,E=p*p+g*g,R=E>0?((t-_.ax)*p+(e-_.az)*g)/E:0;R=R<0?0:R>1?1:R;let x=_.y0||0,M=_.y1===void 0?x:_.y1,v=x+(M-x)*R;if(d&&Math.abs(v-s)>5)continue;let w=_.ax+p*R,y=_.az+g*R,b=Math.hypot(t-w,e-y),C=_.hw-n;b-C<r&&(r=b-C,o=w,a=y,l=C,c=b,h=v,M!==x&&E>0?(u=(M-x)*p/E,f=(M-x)*g/E):u=f=0)}for(let _ of i.plazas||[]){let p=_.y||0;if(d&&Math.abs(p-s)>5)continue;let g=Math.hypot(t-_.x,e-_.z),E=_.r-n;g-E<r&&(r=g-E,o=_.x,a=_.z,l=E,c=g,h=p,u=f=0)}if(r>1e8)return{d:-1,px:t,pz:e,nx:0,nz:1,lim:1,h:d?s:0,gx:0,gz:0};let m=c||1e-6;return{d:r,px:o,pz:a,nx:(t-o)/m,nz:(e-a)/m,lim:l,h,gx:u,gz:f}}function xp(i,t,e,n,s,r=0){let o=ei[i.id],a=Math.sin(i.yaw),l=Math.cos(i.yaw),c=-l,h=a,u=i.vx*a+i.vz*l,f=i.vx*c+i.vz*h,d=o.max*(i.boost>0?1.3:1);i.boost>0&&(i.boost-=t),e.gas>.01?u+=(u<0?38:o.acc*(1-Math.max(0,u)/(d+2))+1)*e.gas*t:e.gas<-.01?u+=(u>.5?-34:-11)*-e.gas*t:u-=Math.sign(u)*Math.min(Math.abs(u),4.5*t),e.hb&&(u-=Math.sign(u)*Math.min(Math.abs(u),9*t));{let v=(i.gx||0)*a+(i.gz||0)*l;v&&(u-=9.8*.55*(v/Math.sqrt(1+v*v))*t)}u=Math.max(-9,Math.min(d+(i.boost>0?3:0),u)),i.steer+=(e.steer-i.steer)*Math.min(1,t*9);let m=Math.abs(u),_=Math.min(1,m/5)*(1-.38*Math.min(1,m/d));i.yaw-=i.steer*o.turn*_*Math.sign(u||1)*(e.hb?1.35:1)*t;let p=(e.hb?1.6:o.grip)*(i.slick>0?.22:1);f*=Math.exp(-p*t),i.drift=Math.min(1,Math.abs(f)/5);let g=Math.sin(i.yaw),E=Math.cos(i.yaw),R=-E,x=g;i.vx=g*u+R*f,i.vz=E*u+x*f;for(let v of n.boosts||[])Math.abs(i.x-v.x)<v.r&&Math.abs(i.z-v.z)<v.r&&Math.abs(i.y-(v.y||0))<3&&(i.boost=1.4,u<d&&(i.vx+=g*40*t,i.vz+=E*40*t));i.x+=i.vx*t,i.z+=i.vz*t;let M="";{let v=mp(n,i.x,i.z,1.5,i.y);i.gx=v.gx,i.gz=v.gz;{let w=i.y;i.y+=(v.h-i.y)*Math.min(1,t*14);let y=Math.hypot(i.vx,i.vz)*t;i.pitch+=((y>.001?Math.atan2(i.y-w,y):0)*(i.speed>=0?1:-1)-i.pitch)*Math.min(1,t*10)}for(let w of[1.25,-1.25]){let y=mp(n,i.x+g*w,i.z+E*w,1.6,i.y);if(y.d<=0)continue;i.x-=y.nx*y.d,i.z-=y.nz*y.d;let b=i.vx*y.nx+i.vz*y.nz;if(b>0){let C=-1.35*b*y.nx,P=-(1+.35)*b*y.nz;i.vx+=C,i.vz+=P,i.vx*=.95,i.vz*=.95,i.spin=Math.max(-3,Math.min(3,(i.spin||0)+(E*w*C-g*w*P)*.1)),b>5&&(M="bump"),i.bump=Math.max(i.bump,b)}}}for(let v of s||[]){if((i.x-v.x)**2+(i.z-v.z)**2>36||Math.abs((v.y||0)-i.y)>4)continue;let w=Math.sin(v.yaw),y=Math.cos(v.yaw),b=null;for(let N of[1.05,-1.05])for(let A of[1.05,-1.05]){let I=i.x+g*N,U=i.z+E*N,O=v.x+w*A,tt=v.z+y*A,G=I-O,K=U-tt,J=Math.hypot(G,K),vt=2.3-J;vt>0&&(!b||vt>b.pen)&&(b={pen:vt,nx:J>1e-4?G/J:g,nz:J>1e-4?K/J:E,rx:I-i.x,rz:U-i.z})}if(!b)continue;let C=v.driver===-1||v.parked,P=C?1:.6;i.x+=b.nx*b.pen*P,i.z+=b.nz*b.pen*P;let D=(i.vx-v.vx)*b.nx+(i.vz-v.vz)*b.nz;if(D<0){let N=1.55*-D*(C?1:.55),A=b.nx*N,I=b.nz*N;i.vx+=A,i.vz+=I,i.spin=Math.max(-3.2,Math.min(3.2,(i.spin||0)+(b.rz*A-b.rx*I)*.32)),i.vx*=.94,i.vz*=.94,-D>3.5&&(M=-D>7?"crash":"bump",i.crash=Math.max(i.crash||0,-D))}}if(n.dyn&&!n.free){let v=n.dyn(r);for(let w of v){if(Math.abs(w.y-i.y)>4||(i.x-w.x)**2+(i.z-w.z)**2>30)continue;let y=null;for(let C of[1.05,-1.05]){let P=i.x+g*C,D=i.z+E*C,N=P-w.x,A=D-w.z,I=Math.hypot(N,A),U=1.15+w.r-I;U>0&&(!y||U>y.pen)&&(y={pen:U,nx:I>1e-4?N/I:g,nz:I>1e-4?A/I:E,rx:P-i.x,rz:D-i.z})}if(!y)continue;i.x+=y.nx*y.pen,i.z+=y.nz*y.pen;let b=(i.vx-w.vx)*y.nx+(i.vz-w.vz)*y.nz;if(b<0){let C=1.5*-b,P=y.nx*C,D=y.nz*C;i.vx+=P,i.vz+=D,i.spin=Math.max(-3.4,Math.min(3.4,(i.spin||0)+(y.rz*P-y.rx*D)*.4)),i.vx*=.9,i.vz*=.9,-b>3.5&&(M=-b>7?"crash":"bump",i.crash=Math.max(i.crash||0,-b))}}}i.slick=0;for(let v of(n.free?[]:n.slicks)||[])Math.abs(v.y-i.y)<3&&(i.x-v.x)**2+(i.z-v.z)**2<v.r*v.r&&(i.slick=1);return i.spin&&(i.yaw+=i.spin*t,i.spin*=Math.exp(-3.6*t),Math.abs(i.spin)<.02&&(i.spin=0)),i.speed=i.vx*g+i.vz*E,M}var Kt=(i,t,e,n=.12)=>new xr(i,t,e,3,Math.min(n,i/2-.01,t/2-.01,e/2-.01)),mn=(i,t={})=>{var e,n,s;return new ce({color:i,roughness:(e=t.r)!=null?e:.35,metalness:(n=t.m)!=null?n:.25,emissive:t.e||0,emissiveIntensity:(s=t.ei)!=null?s:1})},pc=()=>new ce({color:"#9fd8ff",roughness:.05,metalness:.4,transparent:!0,opacity:.55});function yp(i){let t=ei[i],e=new Wt,n=mn("#1b1b22",{r:.8,m:0}),s=mn("#e8eaf2",{r:.25,m:.8}),r=mn("#23252e",{r:.6}),o=(M,v,w,y,b,C=0,P=0,D=0)=>{let N=new st(M,v);return N.position.set(w,y,b),N.rotation.set(C,P,D),N.castShadow=!0,N.receiveShadow=!0,e.add(N),N},a=i===0?new ce({map:eu("pk"),roughness:.3,metalness:.15}):mn(t.color,{r:.28,m:.35}),l=mn("#ffffff",{r:.3,m:.1}),c=mn("#fff6c8",{e:"#fff1a8",ei:1.4}),h=mn("#ff3030",{e:"#ff1a1a",ei:1.2}),u=[],f=[],d=.46,m=1,_=1.35,p=-1.3,g={y:.55,z:-.15};if(i===0)d=.44,m=1.02,_=1.45,p=-1.35,g={y:.5,z:-.2},o(Kt(1.9,.5,4.3,.22),a,0,.55,0),o(Kt(1.7,.34,1.5,.2),a,0,.78,1.35,-.12),o(Kt(1.7,.4,1,.2),a,0,.86,-1.6),o(Kt(1.5,.5,.12,.05),pc(),0,1.02,.78,-.55),o(Kt(.12,.1,1.5,.04),r,.95,1.16,-1.82),o(Kt(.12,.1,1.5,.04),r,-.95,1.16,-1.82),o(Kt(2,.09,.45,.04),a,0,1.28,-2),o(Kt(.1,.4,.3,.03),r,.7,1.08,-1.95),o(Kt(.1,.4,.3,.03),r,-.7,1.08,-1.95),o(Kt(.4,.2,.1,.04),c,.65,.68,2.12),o(Kt(.4,.2,.1,.04),c,-.65,.68,2.12),o(Kt(.45,.14,.1,.04),h,.65,.78,-2.17),o(Kt(.45,.14,.1,.04),h,-.65,.78,-2.17);else if(i===1){d=.62,m=1.18,_=1.3,p=-1.25,g={y:.62,z:-.1},o(Kt(1.7,.4,3.8,.16),a,0,.62,0),o(Kt(1.5,.3,1.2,.14),a,0,.9,1.4),o(Kt(1.3,.35,.9,.12),mn("#ffd23f",{r:.4}),0,.95,-1.35);for(let M of[-1,1])o(new Lt(.06,.06,1.7,8),r,M*.78,1.5,-.1,.12,0,0),o(new Lt(.06,.06,1.6,8),r,M*.78,1,.7,.9,0,0),o(new Lt(.06,.06,1.7,8),r,M*.78,1.5,-.1,Math.PI/2,0,0);o(new Lt(.06,.06,1.6,8),r,0,2,-.1,0,0,Math.PI/2),o(new ye(.2,12,8),c,.55,.98,2),o(new ye(.2,12,8),c,-.55,.98,2),o(Kt(.4,.12,.1,.04),h,.5,.8,-1.95),o(Kt(.4,.12,.1,.04),h,-.5,.8,-1.95)}else if(i===2){d=.55,m=1.1,_=1.55,p=-1.5,g={y:.78,z:.55},o(Kt(2,.55,4.7,.2),a,0,.75,0),o(Kt(1.9,.75,1.5,.18),a,0,1.28,.55),o(Kt(1.5,.45,.1,.05),pc(),0,1.55,1.3,-.35),o(Kt(1.8,.1,1.9,.05),r,0,1.1,-1.35);for(let M of[-1,1])o(Kt(.1,.5,1.9,.04),a,M*.97,1.35,-1.35);o(Kt(1.8,.5,.1,.04),a,0,1.35,-2.28),o(Kt(1.8,.1,.1,.04),mn("#c8ccd8",{m:.8,r:.2}),0,.75,2.4),o(Kt(.1,.5,.1,.03),mn("#c8ccd8",{m:.8,r:.2}),.6,.85,2.38),o(Kt(.1,.5,.1,.03),mn("#c8ccd8",{m:.8,r:.2}),-.6,.85,2.38),o(Kt(.35,.22,.1,.04),c,.7,.98,2.36),o(Kt(.35,.22,.1,.04),c,-.7,.98,2.36),o(Kt(.3,.2,.1,.04),h,.8,1,-2.36),o(Kt(.3,.2,.1,.04),h,-.8,1,-2.36)}else if(i>=4){d=.5,m=1.12,_=1.5,p=-1.5,g={y:.62,z:-.2};let M=mn("#e0001f",{r:.16,m:.55}),v=mn("#15161c",{r:.5,m:.2}),w=mn("#ffffff",{r:.25,m:.1}),y=mn("#ff7a1a",{e:"#ff5a00",ei:2}),b=new ki;[[-2.4,.3],[-2.4,.84],[-1.7,1],[-.95,.96],[-.8,.66],[.5,.66],[.72,.78],[2.2,.56],[2.46,.44],[2.46,.3]].forEach(([N,A],I)=>I?b.lineTo(N,A):b.moveTo(N,A));let C=new Hi(b,{depth:1.7,bevelEnabled:!0,bevelSize:.1,bevelThickness:.1,bevelSegments:2,steps:1});C.rotateY(-Math.PI/2),C.translate(.85,0,0),o(C,M,0,0,0),o(Kt(1.2,.04,1.3,.02),v,0,.7,-.1),o(Kt(1,.32,.18,.06),M,0,.88,-1.05),o(Kt(1.5,.42,.08,.03),pc(),0,.98,.6,-.62);for(let N of[-1,1])o(Kt(.12,.34,.1,.03),v,N*.76,.9,.62,-.62),o(Kt(.42,.34,1.7,.14),M,N*1.03,.6,-1.6),o(Kt(.3,.3,.9,.1),M,N*1,.55,1.5),o(Kt(.1,.3,.8,.03),v,N*.98,.5,-.35),o(Kt(.07,.62,.8,.02),v,N*1.12,1.52,-2.28),o(Kt(.09,.62,.09,.02),v,N*.55,1.2,-2.15);o(Kt(.46,.03,1.9,.01),w,0,.8,1.4,.07),o(Kt(2.3,.1,.8,.03),M,0,1.52,-2.28),o(Kt(2.3,.07,.34,.02),v,0,1.45,-2),o(Kt(2.3,.08,.55,.03),v,0,.3,2.46),o(Kt(1.9,.12,.3,.04),v,0,.3,-2.4);for(let N of[-1,1])o(Kt(.42,.14,.1,.04),c,N*.62,.62,2.5),o(Kt(.5,.12,.1,.04),h,N*.6,.86,-2.48),o(new Lt(.1,.12,.3,10),v,N*.42,.52,-2.5,Math.PI/2,0,0);let P=new st(new Ge(2.1,4.6),new Ae({color:"#27b6ff",transparent:!0,opacity:.55,blending:Ei,depthWrite:!1,toneMapped:!1}));P.rotation.x=-Math.PI/2,P.position.set(0,.12,0),e.add(P);let D=[];for(let N of[-1,1])for(let[A,I,U]of[[.17,1.3,"#ff6a00"],[.09,.8,"#ffe14a"]]){let O=new Be(A,I,8);O.rotateX(-Math.PI/2),O.translate(0,0,-I/2);let tt=new st(O,new Ae({color:U,transparent:!0,opacity:.9,toneMapped:!1}));tt.position.set(N*.42,.52,-2.62),e.add(tt),D.push(tt)}e.userData.flames=D}else{d=.42,m=.98,_=1.15,p=-1.1,g={y:.5,z:-.05},o(new ye(1.15,24,16),a,0,.95,-.05).scale.set(.9,.62,1.55),o(Kt(1.6,.14,3.2,.06),l,0,.42,0);for(let v of[-1,1])o(new ye(.27,14,10),c,v*.62,.95,1.72),o(new ye(.2,12,8),h,v*.55,.85,-1.78),o(new Lt(.09,.09,.5,8),r,v*.42,1.55,1.1,.45,0,0);o(Kt(1.5,.35,.1,.04),pc(),0,1.22,.85,-.7),o(Kt(.5,.05,2.3,.02),mn("#ff6bd5",{r:.4}),.15,1.52,-.75,0,0,.08)}let E=new Lt(d,d,.42,20),R=new Lt(d*.56,d*.56,.44,12);for(let[M,v,w]of[[1,_,1],[-1,_,1],[1,p,0],[-1,p,0]]){let y=new Wt;y.position.set(M*m,d,v),e.add(y);let b=new Wt;y.add(b);let C=new st(E,n);C.rotation.z=Math.PI/2,C.castShadow=!0,b.add(C);let P=new st(R,s);P.rotation.z=Math.PI/2,b.add(P),u.push(b),w&&f.push(y)}let x=new st(new ls(2.6,20),new Ae({color:0,transparent:!0,opacity:.22,depthWrite:!1}));return x.rotation.x=-Math.PI/2,x.position.y=.04,x.scale.set(.9,1.25,1),e.add(x),e.userData={wheels:u,pivots:f,seat:g,spec:t,flames:e.userData.flames},e}function _p(i,t,e){let n=i.userData;for(let r of n.wheels)r.rotation.x+=t.speed/.5*e;for(let r of n.pivots)r.rotation.y=-t.steer*.5;i.rotation.z=Eo.clamp(-t.steer*Math.min(1,Math.abs(t.speed)/20)*.07,-.08,.08);let s=(t.speed-(t._ps===void 0?t.speed:t._ps))/Math.max(e,.001);if(t._ps=t.speed,t._sq=(t._sq||0)+(Eo.clamp(s,-30,30)*.0045-(t._sq||0))*Math.min(1,e*7),i.rotation.x=-(t.pitch||0)-t._sq,n.flames){let r=Eo.clamp(.2+Math.max(0,t.speed)/45+(t.boost>0?.9:0)+(t.driver!==-1?.15:0),.15,2)*(.85+Math.random()*.3);for(let o of n.flames)o.scale.set(1,1,r),o.visible=t.driver!==-1||t.boost>0}}var vp=new Map,_v=i=>{let t=vp.get(i);return t||(t=new ce({color:i,roughness:.82,metalness:0}),vp.set(i,t)),t},ne={sph:(i,t=12,e=9)=>new ye(i,t,e),cyl:(i,t,e,n=8)=>new Lt(i,t,e,n),cone:(i,t,e=8)=>new Be(i,t,e),box:(i,t,e)=>new Ee(i,t,e),cap:(i,t)=>new Bi(i,t,4,10)};function ie(i,t,e,n=0,s=0,r=0,o={}){let a=new st(t,_v(e));return a.position.set(n,s,r),o.s&&a.scale.set(o.s[0],o.s[1],o.s[2]),o.r&&a.rotation.set(o.r[0],o.r[1],o.r[2]),a.castShadow=!0,i.add(a),a}function Bo(i,t,e,n,s,r=.09){for(let o of[-1,1])ie(i,ne.sph(r,8,6),"#ffffff",t+o*s,e,n),ie(i,ne.sph(r*.55,6,5),"#111111",t+o*s,e,n+r*.62)}function ko(i,t,e,n,s,r,o,a){let l=new Wt;return l.position.set(t,e,n),i.add(l),ie(l,ne.cyl(s,s*.82,r,7),o,0,-r/2,0),a&&ie(l,ne.box(s*2.1,s*.9,s*2.3),a,0,-r+s*.3,s*.25),l}function Ho(){let i=new Wt,t=new Wt;return i.add(t),{root:i,inner:t,legs:[],head:null,tail:null}}var vv={horse(){let i=Ho(),t="#8b5a2b",e="#33200f",n=i.inner;ie(n,ne.cap(.5,1.35),t,0,1.55,0,{r:[Math.PI/2,0,0],s:[.92,1,1]});for(let[o,a,l]of[[-.3,.8,0],[.3,.8,1],[-.3,-.8,2],[.3,-.8,3]])i.legs[l]=ko(n,o,1.2,a,.14,1.2,t,e);ie(n,ne.cyl(.22,.3,1.1,8),t,0,2.15,1.15,{r:[.62,0,0]});let s=i.head=new Wt;s.position.set(0,2.55,1.55),n.add(s),ie(s,ne.box(.38,.44,.95),t,0,-.1,.35,{r:[.4,0,0]}),ie(s,ne.box(.4,.1,.3),"#f3e6d0",0,-.32,.72,{r:[.4,0,0]});for(let o of[-1,1])ie(s,ne.cone(.08,.28,5),t,o*.14,.28,-.02);Bo(s,0,.1,.22,.21,.07),ie(n,ne.box(.1,.9,.3),e,0,2.3,.9,{r:[.62,0,0]});let r=i.tail=new Wt;return r.position.set(0,1.9,-1.25),n.add(r),ie(r,ne.cone(.2,1.3,6),e,0,-.55,0,{r:[Math.PI,0,0]}),r.rotation.x=-.35,i},lion(){let i=Ho(),t="#d9a441",e="#8a4a14",n=i.inner;ie(n,ne.cap(.46,1.1),t,0,1.15,0,{r:[Math.PI/2,0,0]});for(let[o,a,l]of[[-.3,.6,0],[.3,.6,1],[-.3,-.6,2],[.3,-.6,3]])i.legs[l]=ko(n,o,.85,a,.17,.85,t,"#a8741f");let s=i.head=new Wt;s.position.set(0,1.6,1.15),n.add(s),ie(s,ne.sph(.78,12,9),e,0,-.05,-.18,{s:[1,1,.78]}),ie(s,ne.sph(.46,12,9),t,0,0,.25),ie(s,ne.box(.34,.24,.3),"#efc977",0,-.12,.62),ie(s,ne.sph(.09,6,5),"#2a1408",0,-.03,.78);for(let o of[-1,1])ie(s,ne.sph(.13,6,5),t,o*.34,.4,.1);Bo(s,0,.12,.6,.17,.07);let r=i.tail=new Wt;return r.position.set(0,1.35,-1),n.add(r),ie(r,ne.cyl(.06,.06,1.1,5),t,0,-.5,-.1,{r:[.3,0,0]}),ie(r,ne.sph(.17,7,6),e,0,-1.05,-.28),i},leopard(){let i=Ho(),t="#e8b948",e="#2a1a0a",n=i.inner,s=ie(n,ne.cap(.38,1.35),t,0,1.05,0,{r:[Math.PI/2,0,0]});for(let a=0;a<22;a++){let l=a*2.399%(Math.PI*2),c=-.9+a%11*.18;ie(n,ne.sph(.09,5,4),e,Math.sin(l)*.37,1.05+Math.cos(l)*.36,c,{s:[1,1,1.3]})}for(let[a,l,c]of[[-.25,.7,0],[.25,.7,1],[-.25,-.7,2],[.25,-.7,3]])i.legs[c]=ko(n,a,.78,l,.14,.78,t,"#b88a2a");let r=i.head=new Wt;r.position.set(0,1.35,1.2),n.add(r),ie(r,ne.sph(.34,12,9),t,0,0,.1),ie(r,ne.box(.24,.16,.28),"#f4dc9c",0,-.08,.42),ie(r,ne.sph(.07,6,5),"#2a1408",0,0,.58);for(let a of[-1,1])ie(r,ne.sph(.1,6,5),t,a*.24,.3,0),ie(r,ne.sph(.04,5,4),e,a*.13,.15,.3);Bo(r,0,.1,.34,.14,.055);let o=i.tail=new Wt;return o.position.set(0,1.2,-1.15),n.add(o),ie(o,ne.cyl(.06,.05,1.5,5),t,0,-.1,-.55,{r:[1.15,0,0]}),ie(o,ne.sph(.09,5,4),e,0,.5,-.95),ie(o,ne.cyl(.05,.05,.6,5),t,0,.78,-1.15,{r:[.5,0,0]}),i},elephant(){let i=Ho(),t="#8a919c",e="#737b87",n=i.inner;ie(n,ne.sph(1,14,10),t,0,2.3,0,{s:[1.15,1.2,1.7]});for(let[c,h,u]of[[-.68,1,0],[.68,1,1],[-.68,-1,2],[.68,-1,3]])i.legs[u]=ko(n,c,1.6,h,.4,1.6,t,"#d8d2c4");let s=i.head=new Wt;s.position.set(0,2.75,1.85),n.add(s),ie(s,ne.sph(.82,12,9),t,0,0,.2);let r=-.15,o=.95,a=.3;for(let c=0;c<4;c++)ie(s,ne.cyl(a,a*.8,.62,7),e,0,r,o+c*.1,{r:[.15+c*.1,0,0]}),r-=.55,o+=.1,a*=.8;for(let c of[-1,1])ie(s,ne.cyl(.95,.95,.09,14),e,c*1,.1,-.2,{r:[0,0,Math.PI/2],s:[1,1,.8]}).rotation.y=c*.35,ie(s,ne.cone(.13,.95,6),"#f5f0e0",c*.45,-.38,1.05,{r:[1.15,0,0]});Bo(s,0,.3,.88,.4,.09);let l=i.tail=new Wt;return l.position.set(0,2.5,-1.7),n.add(l),ie(l,ne.cyl(.05,.04,1,5),e,0,-.45,-.05),ie(l,ne.sph(.1,5,4),"#3a3f46",0,-.98,-.05),i},dino(){let i=Ho(),t="#4fb04a",e="#d6ee94",n="#ff8a2a",s=i.inner;ie(s,ne.sph(1,14,10),t,0,2.2,0,{s:[.95,1,1.55]}),ie(s,ne.sph(.9,12,9),e,0,1.95,.2,{s:[.85,.8,1.45]});for(let[a,l,c]of[[-.62,.45,0],[.62,.45,1],[-.62,-.5,2],[.62,-.5,3]])i.legs[c]=ko(s,a,1.5,l,.4,1.5,t,"#2f7a30");let r=i.head=new Wt;r.position.set(0,3,1.75),s.add(r),ie(r,ne.box(.95,.85,1.3),t,0,.1,.55),ie(r,ne.box(.85,.28,1.2),e,0,-.45,.5);for(let a=0;a<6;a++)for(let l of[-1,1])ie(r,ne.cone(.06,.2,4),"#ffffff",l*.38,-.28,.05+a*.21,{r:[Math.PI,0,0]});for(let a of[-1,1])ie(r,ne.sph(.08,5,4),"#1a3a1a",a*.22,.2,1.2),ie(r,ne.cone(.1,.4,5),n,a*.3,.7,.2);Bo(r,0,.4,.75,.37,.12);for(let a of[-1,1])ie(s,ne.cyl(.1,.07,.6,5),t,a*.55,2.7,1.1,{r:[-.9,0,a*.3]});let o=i.tail=new Wt;o.position.set(0,2.2,-1.4),s.add(o),[[0,0,-.4,.78],[0,.05,-1.2,.6],[0,.12,-1.9,.44],[0,.22,-2.45,.3]].forEach(([a,l,c,h])=>ie(o,ne.sph(h,9,7),t,a,l,c));for(let a=0;a<6;a++)ie(s,ne.cone(.2-a*.012,.55,4),n,0,3.05-a*.2,-.9-a*.38);return i}};function Mp(i){let t=vv[i]();return t.root.traverse(e=>{e.isMesh&&(e.receiveShadow=!1)}),t.kind=i,t.stride=i==="elephant"?1.3:i==="dino"?1.5:2.2,t}function Sp(i,t,e,n,s,r){let o=Math.min(1,n/3.5),a=Math.min(1.6,.6+n/7),l=i.ph=(i.ph||0)+e*n*i.stride*1.4+e*0,c=(i.kind==="elephant"||i.kind==="dino"?.42:.7)*o*Math.min(1,a),h=[0,Math.PI,Math.PI,0];i.legs.forEach((f,d)=>{f.rotation.x=Math.sin(l+h[d])*c});let u=i.inner;if(u.position.y=Math.abs(Math.sin(l))*.06*o*(i.kind==="elephant"?1.4:1)+0,u.scale.y=1+Math.sin(t*2.1)*.012,i.head&&(i.head.rotation.x=Math.sin(l*.5+1)*.06*o+Math.sin(t*1.3)*.03,i.head.rotation.y=Math.sin(t*.7)*.12*(1-o)),i.tail&&(i.tail.rotation.z=Math.sin(t*(2+n*.3))*.35),r>0){let f=1-r;u.rotation.x=f<.7?-.5*(f/.7):.35,i.head&&(i.head.rotation.x-=.4)}else u.rotation.x+=(0-u.rotation.x)*Math.min(1,e*10);u.rotation.z=s===4?Math.sin(t*40)*.12:s===5?Math.sin(t*3)*.04:0}var Mv={lion:3,leopard:2.7,elephant:5.3,horse:3.8,dino:5.6},mc=(i,t,e)=>i+(t-i)*e,Sv=(i,t,e)=>{let n=(t-i)%(Math.PI*2);return n>Math.PI&&(n-=Math.PI*2),n<-Math.PI&&(n+=Math.PI*2),i+n*e},bv=new Lt(.07,.07,1,5),Ev=new ce({color:"#c9a063",roughness:.9}),wv=new z(0,1,0),gc=class{constructor(t){this.r=t,this.multi=t.multi,this.L=sc(),this.list=Xd(),this.mount=null,this.mountT=0,this.t=0,this.near=null,this.evAcc=[],this.items=this.list.map(e=>{let n=Mp(e.kind);n.root.position.set(e.x,e.y,e.z),n.root.rotation.y=e.yaw,t.scene.add(n.root);let s={a:e,o:n,x:e.x,y:e.y,z:e.z,yaw:e.yaw,speed:0,tag:null,tagKey:"",ropes:[],px:e.x,pz:e.z,hitFx:0};if(e.kind==="dino")for(let r=0;r<rc.length;r++){let o=new st(bv,Ev);o.castShadow=!0,t.scene.add(o),s.ropes.push(o)}return s}),this.names=new Map(t.players.map(e=>[e.id,e.name]))}me(){return this.r.localId}petCount(){let t=0;for(let e of this.list)e.owner===this.me()&&t++;return t}update(t){let e=this.r,n=e.me.body,s=this.me();if(this.t+=t,this.mountT>0&&(this.mountT-=t),!this.multi&&e.levelTime>=0&&!e.over){let l=Yd(this.list,t,[{id:s,x:n.x,y:n.y,z:n.z,r:n.yaw,mounted:this.mount?1:0}],this.L);this.handle(l)}this.mount&&this.multi&&this.mountT<=0&&this.mount.rider!==s&&this.dismount(!0);for(let l of this.items){let c=l.a,h=Mn[c.kind],u=this.mount===c;if(u)l.x=n.x,l.y=n.y,l.z=n.z,l.yaw=n.yaw;else if(!this.multi)l.x=c.x,l.y=c.y,l.z=c.z,l.yaw=c.yaw;else{let _=1-Math.exp(-13*t),p=Math.hypot(c.x-l.x,c.z-l.z)>14;l.x=p?c.x:mc(l.x,c.x,_),l.y=mc(l.y,c.y,_),l.z=p?c.z:mc(l.z,c.z,_),l.yaw=Sv(l.yaw,c.yaw,1-Math.exp(-10*t))}let f=t>0?Math.hypot(l.x-l.px,l.z-l.pz)/t:0;l.speed=mc(l.speed,Math.min(f,14),.25),l.px=l.x,l.pz=l.z;let d=l.o,m=d.root;m.position.set(l.x,l.y,l.z),m.rotation.y=l.yaw,l.atk=c.st===nn.ATTACK?(l.atk||0)+t:0,Sp(d,this.t,t,u?Math.min(14,Math.hypot(n.vx,n.vz)):l.speed,c.st,c.st===nn.ATTACK?Math.max(.02,1-l.atk/.5):0),this.updateTag(l,h),l.ropes.length&&this.updateRopes(l),c.st===nn.PET&&c.owner===s&&!u&&Math.random()<t*.35&&e.particles.emit(l.x,l.y+h.seat+.6,l.z,1,{color:"#ff5fa8",speed:.6,up:1.6,life:.9,size:.38})}let r=null,o=7;if(!this.mount&&!e.over)for(let l of this.items){let c=l.a;if(c.owner!==s||c.rider)continue;let h=Math.hypot(c.x-n.x,c.z-n.z);h<o&&Math.abs(c.y-n.y)<3.5&&n.stun<=0&&(o=h,r=c)}this.near=r;let a=document.body.classList;!!r!==a.contains("near-car")&&a.toggle("near-car",!!r),!!this.mount!==a.contains("riding")&&a.toggle("riding",!!this.mount)}tagKey(t){return t.owner?t.owner===this.me()?"mine":"o"+t.owner:"w"+t.hp}updateTag(t,e){let n=t.a,s=this.tagKey(n);if(s!==t.tagKey){t.tag&&(t.o.root.remove(t.tag),t.tag.material.map.dispose(),t.tag.material.dispose());let r=n.owner===this.me(),o=n.owner?r?"\u2665 MY "+e.name:(this.names.get(n.owner)||"Pet")+"'s "+e.name:`${e.name}  ${n.hp}/${e.hp}`;t.tag=_r(o,n.owner?r?"#4ade80":"#7cc7ff":"#ff6b3d"),t.tag.position.set(0,Mv[n.kind],0),t.o.root.add(t.tag),t.tagKey=s}this.r.tagScale(t.tag,t.o.root.position,1.15)}updateRopes(t){let e=t.a,n=e.kind==="dino"&&!e.owner;t.o.head.getWorldPosition(this._v||(this._v=new z));let r=this._v;t.ropes.forEach((o,a)=>{if(o.visible=n,!n)return;let l=rc[a],c=we.sx+l[0],h=we.sz+l[1],u=we.summitY+2.3,f=r.x-c,d=r.y-.2-u,m=r.z-h,_=Math.hypot(f,d,m)||1;o.position.set(c+f/2,u+d/2-.15*Math.sin(_*.5),h+m/2),o.scale.set(1,_,1),o.quaternion.setFromUnitVectors(wv,new z(f/_,d/_,m/_))})}batHit(t){let e=Math.sin(t.yaw),n=Math.cos(t.yaw),s=this.me(),r=!1;if(this.mount)return!1;for(let o of this.items){let a=o.a,l=Mn[a.kind];if(a.owner||a.rider)continue;let c=a.x-t.x,h=a.z-t.z,u=Math.hypot(c,h);u>l.r+2.7||Math.abs(a.y-t.y)>3.5||u<.001||(c*e+h*n)/u<-.15||(r=!0,this.multi?this.r.sendNet({t:"ahit",id:a.id}):this.handle(qd(a,s,t.x,t.z)),It.bonk(),this.r.particles.emit(a.x,a.y+l.seat*.7,a.z,20,{color:"#ffd23f",speed:6,up:3,life:.5,size:.3}))}return r}handle(t){for(let e of t){let n=this.list[e.id],s=n&&Mn[n.kind];if(n)if(e.k==="hit"){let r=this.items[e.id];this.r.toast(`${s.name}  ${Math.max(0,e.hp)} hit${e.hp===1?"":"s"} left!`),r&&(r.tagKey=""),It.roar(s.big)}else if(e.k==="tame"){let r=e.pid===this.me();this.items[e.id].tagKey="",It.tame();let o=this.items[e.id];this.r.particles.emit(n.x,n.y+s.seat,n.z,36,{color:"#ff5fa8",speed:5,up:5,life:1.1,size:.5}),this.r.particles.emit(n.x,n.y+s.seat,n.z,20,{color:"#ffd23f",speed:6,up:6,life:.9,size:.35}),n.kind==="dino"?this.r.toast(r?"\u{1F996} DINOSAUR FREED! It is your pet - press RIDE!":`${this.names.get(e.pid)||"Someone"} freed the DINOSAUR!`):this.r.toast(r?`${s.name} is now YOUR PET!  ${Tv()}`:`${this.names.get(e.pid)||"Someone"} tamed the ${s.name}!`)}else e.k==="bite"&&(e.pid===this.me()&&this.r.onAnimalBite(e),It.roar(Mn[n.kind].big))}}onNet(t){for(let e of t.a){let n=this.list[e[0]];if(!n)continue;let s=n.owner;n.x=e[1],n.y=e[2],n.z=e[3],n.yaw=e[4],n.st=e[5],n.owner=e[6],n.rider=e[7],n.hp=e[8],s!==n.owner||this.items[n.id].tagKey===""?this.items[n.id].tagKey="":this.tagKey(n)!==this.items[n.id].tagKey&&(this.items[n.id].tagKey="")}}onEvent(t){this.handle([t])}setNames(t){for(let e of t)this.names.set(e.id,e.name)}speedK(){return this.mount?Mn[this.mount.kind].ride:1}flagBits(){return this.mount?8192|this.mount.id<<14:0}seatLocal(t){this.mount&&(t.position.y+=Mn[this.mount.kind].seat,t.scale.setScalar(.9))}camLift(){return this.mount?Mn[this.mount.kind].seat:0}toggleMount(){let t=this.r,e=t.me.body,n=this.me();if(t.over||t.levelTime<0||t.menuOpen)return;if(this.mount)return this.dismount(!1);let s=this.near;if(!s){t.toast("Beat an animal with the BAT to tame it first!");return}this.mount=s,s.rider=n,this.mountT=1.5,e.x=s.x,e.z=s.z,e.y=Math.max(e.y,s.y),e.vx=e.vz=0,e.vy=0,this.multi&&t.sendNet({t:"aride",id:s.id,on:1}),It.pickup(),t.toast(`Riding the ${Mn[s.kind].name}!  `+("ontouchstart"in window?"tap RIDE again to get off":"C to get off \u2022 SPACE to jump"))}dismount(t){let e=this.r,n=e.me.body,s=this.mount;s&&(this.mount=null,s.rider=0,this.multi&&!t&&e.sendNet({t:"aride",id:s.id,on:0}),n.x+=Math.cos(n.yaw)*2.4,n.z-=Math.sin(n.yaw)*2.4,n.vy=4,n.grounded=!1,n.hitCd=.3,e.me.model.group.scale.setScalar(1),It.pickup())}dispose(){for(let e of this.items){this.r.scene.remove(e.o.root);for(let n of e.ropes)this.r.scene.remove(n)}let t=document.body.classList;t.remove("riding"),t.remove("near-car")}},Tv=()=>"ontouchstart"in window?"Tap RIDE to hop on!":"Press C near it to RIDE!";var ut=i=>document.getElementById(i),kn=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches||(typeof navigator!="undefined"&&navigator.maxTouchPoints||0)>0,Ye={x:0,y:0,jump:!1},gn=(i,t,e)=>i<t?t:i>e?e:i,vs=(i,t,e)=>i+(t-i)*e,_u=(i,t,e)=>{let n=(t-i)%(Math.PI*2);return n>Math.PI&&(n-=Math.PI*2),n<-Math.PI&&(n+=Math.PI*2),i+n*e},xc=i=>{let t=Math.floor(i/60),e=i-t*60;return`${t}:${e<10?"0":""}${e.toFixed(2)}`},du=i=>i===1?"1st":i===2?"2nd":i===3?"3rd":i+"th",Av=["\u{1F947}","\u{1F948}","\u{1F949}"],ts=ut("c"),wn;try{wn=new Ro({canvas:ts,antialias:!0,powerPreference:"high-performance"})}catch(i){throw document.querySelector("#loader p").textContent="WebGL is not available in this browser. Please use a recent Chrome / Edge / Firefox.",i}wn.outputColorSpace=Pe;wn.toneMapping=lr;wn.toneMappingExposure=1.05;wn.shadowMap.enabled=!0;wn.shadowMap.type=ol;var Sr=Math.min(window.devicePixelRatio||1,kn?1.5:2),ae={dpr:kn?Math.min(Sr,1):Math.min(Sr,1.5),t:0,frames:0,good:0,shadows:!0,warm:3};function Ms(){Ke&&(wn.setPixelRatio(ae.dpr),wn.setSize(window.innerWidth,window.innerHeight,!1),Ke.camera.aspect=window.innerWidth/window.innerHeight,Ke.camera.updateProjectionMatrix(),Q&&(Q.camera.aspect=window.innerWidth/window.innerHeight,Q.camera.updateProjectionMatrix(),Q.particles.setScale(wn.domElement.height)),Ke.particles.setScale(wn.domElement.height))}function Rv(i){if(ae.low)return;if(ae.warm>0){ae.warm-=i;return}if(ae.t+=i,ae.frames++,ae.t<1.2)return;let t=ae.frames/ae.t;ae.t=0,ae.frames=0,t<40?(ae.good=0,ae.dpr>.7?(ae.dpr=Math.max(.7,ae.dpr-.2),Ms()):ae.shadows&&t<30&&(ae.shadows=!1,Q&&Q.setShadows(!1))):t>58?++ae.good>=3&&ae.dpr<Math.min(Sr,1.75)&&(ae.dpr=Math.min(Math.min(Sr,1.75),ae.dpr+.1),ae.good=0,Ms()):ae.good=0}try{let i=localStorage.getItem("ph_low");ae.low=i==="1",i===null&&kn&&((navigator.hardwareConcurrency||4)<=2||(navigator.deviceMemory||4)<=2)&&(ae.low=!0)}catch{ae.low=!1}ae.low&&(ae.dpr=.75,ae.shadows=!1);function Cv(){ae.low?(ae.dpr=.75,ae.shadows=!1):(ae.dpr=kn?Math.min(Sr,1):Math.min(Sr,1.5),ae.shadows=!0,ae.warm=3),Q&&Q.setShadows(ae.shadows),Ms()}var Iv=new gs(wn),Tp=Iv.fromScene(new Co,.04).texture,dt={screen:"title",mode:"single",name:localStorage.getItem("ph_name")||"",char:+(localStorage.getItem("ph_char")||0),level:0,net:null,room:null,myId:null,pendingJoin:null,muted:!1},Q=null,Ke=null,mu=[],Ap=i=>+(localStorage.getItem("ph_best_"+i)||0),gu=class{constructor(){let t=Oo.fun;this.scene=new Si,this.scene.fog=new Js(t.fog,70,420),this.scene.environment=Tp,this.scene.environmentIntensity=.7,this.camera=new je(42,1,.1,1500),this.sky=au(t),this.scene.add(this.sky),this.water=lu(t,-3),this.scene.add(this.water),this.scene.add(new hs(t.hemiSky,t.hemiGround,1));let e=new us(t.sun,2.4);e.position.set(-10,18,14),e.castShadow=!0,e.shadow.mapSize.set(1024,1024);let n=e.shadow.camera;n.left=-12,n.right=12,n.top=12,n.bottom=-12,n.near=1,n.far=60,e.shadow.bias=-4e-4,e.shadow.normalBias=.03,this.scene.add(e),this.sun=e;let s=u=>new ce({color:u,roughness:.35}),r=new st(new Lt(15,14,2,48),s("#ff9ccf"));r.position.y=-1,r.receiveShadow=!0,this.scene.add(r);let o=new st(new Lt(13,13,.1,48),s("#fff3fb"));o.position.y=.02,o.receiveShadow=!0,this.scene.add(o),this.tops=[.8,1.25,1.25,.8],[[-4.5,.8,"#7be8a0"],[-1.5,1.25,"#5fc2ff"],[1.5,1.25,"#ffd23f"],[4.5,.8,"#ff9ccf"]].forEach(([u,f,d])=>{let m=new st(new Lt(1.1,1.25,f,32),s(d));m.position.set(u,f/2,-.5),m.castShadow=m.receiveShadow=!0,this.scene.add(m)}),this.slotPos=[[-4.5,.8,-.5],[-1.5,1.25,-.5],[1.5,1.25,-.5],[4.5,.8,-.5]];let a=cc("HARIS"),l=cc("HARIS","MADE THIS GAME"),c=new st(new Ge(11,4.3),new Ae({map:a,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2}));c.rotation.x=-Math.PI/2,c.position.set(0,.1,4.4),this.scene.add(c);let h=new st(new Ge(26,13),new Ae({map:l,transparent:!0,depthWrite:!1,toneMapped:!1,fog:!1}));h.position.set(0,9.5,-24),this.scene.add(h),this.banner=h,this.chars=[0,1,2,3].map(u=>{let f=new ys(u);return this.scene.add(f.group),{c:f,tag:null,name:null,show:!0,scale:1,hop:0}}),this.ambient=new Fo("fun",160),this.scene.add(this.ambient.points),this.particles=new zo(260),this.scene.add(this.particles.points),this.mode="title",this.sel=0,this.t=0,this.lobby=[]}setName(t,e){let n=this.chars[t];n.name!==e&&(n.tag&&(n.c.group.remove(n.tag),n.tag.material.map.dispose(),n.tag.material.dispose(),n.tag=null),n.name=e,e&&(n.tag=_r(e,Ti[t].color),n.tag.position.set(0,n.c.height+.55,0),n.c.group.add(n.tag)))}setTitle(t=-1){this.mode="title",this.sel=t,this.lobby=[],this.chars.forEach((e,n)=>{e.show=!0,this.setName(n,null)})}setLobby(t){this.mode="lobby",this.lobby=t,this.chars.forEach((e,n)=>{let s=t.findIndex(r=>r.char===n);e.show=s>=0,e.slot=s,this.setName(n,s>=0?t[s].name:null)})}burst(t){let e=this.slotPos[this.slotOf(t)];this.particles.emit(e[0],e[1]+1.4,e[2]+.5,40,{rainbow:!0,speed:4,up:6,life:1,size:.35,gravity:7})}slotOf(t){return this.mode==="lobby"?[1,2,0,3][Math.max(0,this.chars[t].slot)%4]:t}update(t){this.t+=t;let e=this.camera;e.position.set(Math.sin(this.t*.25)*1.8,2.9+Math.sin(this.t*.4)*.15,10.5),e.lookAt(0,1.9,0),this.sky.position.copy(e.position),this.water.material.uniforms.time.value=this.t,this.chars.forEach((n,s)=>{if(n.c.group.visible=n.show,!n.show)return;let r=this.slotPos[this.slotOf(s)],o=this.mode==="title"?Math.floor(this.t/3)%4===s:this.mode!=="lobby"&&this.sel===s;n.scale=vs(n.scale,o?1.18:1,Math.min(1,t*8)),n.c.group.scale.setScalar(n.scale),n.hop=o?Math.abs(Math.sin(this.t*5))*.25:vs(n.hop,0,Math.min(1,t*8)),n.c.group.position.set(r[0],r[1]+n.hop,r[2]),n.c.group.rotation.y=_u(n.c.group.rotation.y,this.mode==="lobby"?Math.sin(this.t*.7+s)*.3:Math.sin(this.t*.6+s*2)*.35,Math.min(1,t*4)),n.c.update(t,{speed:0,grounded:!0,vy:0,stun:0,dive:0,celebrate:o||this.mode==="lobby"&&Math.floor(this.t*.5+s)%2===0}),n.tag&&n.tag.scale.set(2.4,.6,1)}),this.ambient.update(this.t,e.position),this.particles.update(t)}},Vo=class{constructor(t,e){this.info=t,this.id=t.id,this.name=t.name,this.model=new ys(t.char),e.add(this.model.group),this.tag=_r(t.name,Ti[t.char].color),this.tag.position.set(0,this.model.height+.7,0),this.model.group.add(this.tag),this.snaps=[],this.x=0,this.y=-50,this.z=0,this.yaw=Math.PI,this.speed=0,this.flags=0,this.vy=0,this.vx=0,this.vz=0,this.sw=0,this.ds=[],this.dMin=0,this.jit=0,this.rs=0,this.has=!1,this.finished=!1,this.lastLanded=!1}push(t){t.rs!==this.rs&&(this.snaps.length=0,this.rs=t.rs);let e=this.snaps[this.snaps.length-1];if(e&&t.ts<=e.ts)return;let n=Date.now(),s=n-t.ts;for(this.ds.push([n,s]);this.ds.length>1&&n-this.ds[0][0]>4e3;)this.ds.shift();let r=1/0;for(let o of this.ds)o[1]<r&&(r=o[1]);this.dMin=r,this.jit=this.jit*.92+Math.abs(s-r)*.08,this.snaps.push(t),this.snaps.length>40&&this.snaps.shift()}renderTime(){return Date.now()-this.dMin-gn(70+this.jit*2.2,70,260)}update(t,e){let n=this.snaps;if(!n.length)return;for(;n.length>2&&n[1].ts<=t;)n.shift();let s=n[0],r=n[1]||n[0],o=0;if(n.length>1){let d=Math.max(1,r.ts-s.ts);o=gn((t-s.ts)/d,0,1+220/d)}let a=vs(s.x,r.x,o),l=vs(s.y,r.y,o),c=vs(s.z,r.z,o);if(!this.has)this.x=a,this.y=l,this.z=c,this.has=!0;else{let d=1-Math.exp(-28*e),m=this.x,_=this.z;this.x+=(a-this.x)*d,this.y+=(l-this.y)*d,this.z+=(c-this.z)*d,e>0&&(this.vx+=((this.x-m)/e-this.vx)*.25,this.vz+=((this.z-_)/e-this.vz)*.25)}this.yaw=_u(this.yaw,r.r,1-Math.exp(-16*e)),this.speed=r.a&8192?0:vs(s.sp,r.sp,gn(o,0,1)),this.flags=r.a,this.vy=n.length>1?(r.y-s.y)/Math.max(.02,(r.ts-s.ts)/1e3):0;let h=this.model.group;if(h.position.set(this.x,this.y,this.z),h.rotation.y=this.yaw,this.flags&8192){let d=iu[this.flags>>14&7];d&&(h.position.y+=Mn[d.kind].seat)}let u=!!(this.flags&1),f=u&&!this.lastLanded;this.lastLanded=u,this.sw=this.flags&16?Math.min(1,(this.sw||.001)+e/.42):0,this.model.update(e,{speed:this.speed,grounded:u,vy:this.vy,stun:this.flags&2?1:0,dive:this.flags&4?1:0,celebrate:!!(this.flags&8),swing:this.sw,shield:!!(this.flags&32),leader:!!this.leader,mega:!!(this.flags&128),landed:f})}dispose(t){t.remove(this.model.group),this.tag.material.map.dispose(),this.tag.material.dispose(),this.model.dispose()}},ke=new Set,Ci={jump:!1,dive:!1},_c=class i{constructor(t,e,n,s){this.level=t,this.meta=Io[t],this.multi=s.multi,this.localId=n,this.players=e,this.t0=s.t0,this.phase="countdown",this.finished=!1,this.over=!1,this.finishTime=0,this.finishedMap=new Map,this.camYaw=0,this.camPitch=.34,this.camDist=8.2,this.camPos=new z,this.camTarget=new z,this.camInit=!1,this.sendT=0,this.rs=0,this.cpIdx=0,this.cpCur=null,this.stepDist=0,this.lastCount=99,this.hudT=0,this.hintT=0,this.warnSec=-1,this.levelTime=-4,this.batCd=0,this.swingT=0,this.batPending=!1,this.swingMega=!1,this.fx={turbo:0,jump:0,shield:0,mega:0},this.fxSig="";let r=Oo[this.meta.key],o=this.scene=new Si;o.background=new Ut(r.fog),o.fog=new Js(r.fog,r.fogNear,r.fogFar),o.environment=Tp,o.environmentIntensity=r.env,this.camera=new je(62,window.innerWidth/window.innerHeight,.1,1800);let{world:a,info:l}=Jd(t,!1,sp());this.world=a,this.info=l,o.add(a.group),a.onEvent=null,this.sky=au(r),o.add(this.sky),this.water=lu(r,a.waterY),o.add(this.water),this.scenery=rp(o,this.meta.key,l,a),this.poolMeshes=[];for(let d of a.pools){let m=dp(d),_=m.material.uniforms;_.fogC.value.set(r.fog),_.fogN.value=r.fogNear,_.fogF.value=r.fogFar,_.skyTop.value.set(r.top),_.skyHor.value.set(r.horizon);let p=pp(d);o.add(m,p),this.poolMeshes.push({wm:m,cm:p,pl:d})}if(this.cars=[],this.drive=null,this.lookT=0,this.nearCar=null,this.hornCd=0,this.skidT=0,l.cars){for(let d of l.cars){let m=yp(d.id);m.rotation.order="YXZ",m.position.set(d.x,d.y||0,d.z),m.rotation.y=d.yaw,o.add(m);let _=gp(d.id,d.x,d.z,d.yaw);_.y=d.y||0,this.cars.push({st:_,mesh:m})}this.skyG=0;try{this.racerOk=localStorage.getItem("ph_racer")==="1"}catch{this.racerOk=!1}this.applyFree(),s.multi&&dt.pendingCars&&(this.onCars(dt.pendingCars),dt.pendingCars=null)}o.add(new hs(r.hemiSky,r.hemiGround,r.hemiI));let c=this.sun=new us(r.sun,r.sunI);this.sunDir=new z(...r.sunPos).normalize().multiplyScalar(90),c.castShadow=ae.shadows,c.shadow.mapSize.set(kn?1024:2048,kn?1024:2048);let h=c.shadow.camera;h.left=-40,h.right=40,h.top=40,h.bottom=-40,h.near=5,h.far=220,c.shadow.bias=-3e-4,c.shadow.normalBias=.04,o.add(c,c.target),this.particles=new zo(600),o.add(this.particles.points),this.particles.setScale(wn.domElement.height),this.ambient=new Fo(this.meta.key,320),o.add(this.ambient.points),this.remotes=new Map;let u=e.findIndex(d=>d.id===n);this.slot=Math.max(0,u);let f=e[this.slot]||{name:"Player",char:0};this.me={body:Kd(),model:new ys(f.char),name:f.name,char:f.char},o.add(this.me.model.group),this.me.model.group.rotation.order="YXZ",this.me.tag=_r(f.name,Ti[f.char].color),this.me.tag.position.set(0,this.me.model.height+.7,0),this.me.model.group.add(this.me.tag),e.forEach((d,m)=>{d.id!==n&&this.remotes.set(d.id,new Vo(d,o))}),this.spawn(this.slot),this.an=this.meta.free?new gc(this):null,document.body.classList.toggle("free-map",!!this.meta.free),this.buildProgress(),this.buildBoxes(),document.body.classList.add("in-race"),ut("hud-level").textContent=this.meta.name,ut("hud").classList.remove("hidden"),ut("hud-hint").classList.remove("fade"),this.hintT=8,this.setShadows(ae.shadows),Mr(t),fc(!1),this.pos=this.me.body}setShadows(t){this.sun.castShadow=t}spawnPoint(t){return[(t-1.5)*3.6,0,this.info.spawn.z]}spawn(t){let[e,n,s]=this.spawnPoint(t);ac(this.me.body,e,n+.02,s,Math.PI),this.cpCur=null,this.cpIdx=0}buildProgress(){let t=document.querySelector("#hud-progress .track");t.querySelectorAll(".dot").forEach(n=>n.remove()),this.dots=new Map;let e=(n,s)=>{let r=document.createElement("div");r.className="dot"+(s?" me":""),r.style.background=Ti[n.char].color,r.innerHTML=`<em>${n.name.replace(/[<>&]/g,"")}</em>`,t.appendChild(r),this.dots.set(n.id,r)};this.players.forEach(n=>e(n,n.id===this.localId))}now(){return this.multi?dt.net.now():performance.now()}look(t,e){this.camYaw-=t*.0024,this.camPitch=gn(this.camPitch+e*.0021,-.15,1.2),this.lookT=1.6}update(t){let e=this.me.body,n=this.world;this.levelTime=(this.now()-this.t0)/1e3;let s=this.levelTime;if(n.update(s,t),n.carry(e),e.yawOff&&(e.yaw+=e.yawOff,e.yawOff=0),s<0){let x=Math.ceil(-s);x!==this.lastCount&&x<=3&&(this.lastCount=x,this.count(String(x)),It.tick())}else this.phase==="countdown"&&(this.phase="race",this.count("GO!"),It.go(),this.lastCount=0,this.multi&&setTimeout(()=>{Q===this&&!this.over&&this.toast(kn?"Tap BAT to bonk rivals!":"Press B or click to swing the BAT!")},1400),this.cars.length&&setTimeout(()=>{Q===this&&!this.over&&!this.drive&&this.toast("\u{1F697} Follow the CAR STATION signs to drive!")},this.multi?4200:1600));let r=s>=0&&!this.over,o=0,a=0;(ke.has("KeyW")||ke.has("ArrowUp"))&&o++,(ke.has("KeyS")||ke.has("ArrowDown"))&&o--,(ke.has("KeyD")||ke.has("ArrowRight"))&&a++,(ke.has("KeyA")||ke.has("ArrowLeft"))&&a--,ke.has("KeyQ")&&(this.camYaw+=1.9*t),ke.has("KeyE")&&(this.camYaw-=1.9*t),(Ye.x||Ye.y)&&(a+=Ye.x,o+=Ye.y);let l=Math.sin(this.camYaw),c=Math.cos(this.camYaw),h=-l*o+c*a,u=-c*o-l*a,f=Math.hypot(h,u);f>1&&(h/=f,u/=f);let d={mx:r?h:0,mz:r?u:0,jumpPressed:r&&Ci.jump,jumpHeld:r&&(ke.has("Space")||Ye.jump),divePressed:r&&Ci.dive};Ci.jump=!1,Ci.dive=!1;let m=Math.max(1,Math.ceil(t/(1/90))),_=t/m,p=!1;if(this.drive)this.updateDrive(t,r),e.events.length=0;else for(let x=0;x<m;x++)jd(n,e,_,d),d.jumpPressed=!1,d.divePressed=!1,e.events.length&&(p=this.events(e)||p,e.events.length=0);if(r&&!this.drive){let x=n.checkHazards(e,s);x&&yr(e,x.nx,x.nz,x.pow)&&(It.hit(),this.particles.emit(e.x,e.y+.9,e.z,26,{color:"#ffffff",speed:5,up:3,life:.5,size:.3}),this.particles.emit(e.x,e.y+.9,e.z,14,{color:"#ffd23f",speed:7,up:4,life:.4,size:.25}))}this.drive||this.updateBat(t,e),this.updatePowerups(t,e),this.drive||(this.softCollide(e),this.softCars(e,r)),this.checkpoints(e),!this.finished&&s>=0&&e.z<this.info.finishZ&&e.y>this.info.finishY-3&&Math.abs(e.x)<16&&this.onLocalFinish(),e.grounded&&!e.stun&&!this.drive&&!(e.swim>.3)&&(this.stepDist+=Math.hypot(e.vx,e.vz)*t,this.stepDist>2.4&&(this.stepDist=0,Math.hypot(e.vx,e.vz)>3&&(It.step(),this.particles.emit(e.x,e.y+.05,e.z,2,{color:"#ffffff",speed:.8,up:.8,life:.35,size:.22,gravity:1}))));let g=this.me.model,E=g.group,R=e.swim>.3?gn((e.swim-.3)/.4,0,1):0;if(this.drive?this.seatModel(E,this.drive):(E.position.set(e.x,e.y,e.z),E.rotation.y=e.yaw,E.rotation.x=R*.55*gn(Math.hypot(e.vx,e.vz)/3,.25,1),E.scale.setScalar(1),this.an&&this.an.seatLocal(E)),g.update(t,{speed:this.drive||this.an&&this.an.mount?0:Math.hypot(e.vx,e.vz),grounded:this.drive||R>0?!0:e.grounded,vy:this.drive?0:e.vy,stun:this.drive?0:e.stun,dive:this.drive?0:e.dive,celebrate:this.finished||this.over&&this.winnerSelf,swing:this.swingT,shield:e.shield>0,leader:this.leaderId===this.localId,mega:this.swingMega&&this.swingT>0,landed:p}),this.tagScale(this.me.tag,E.position,.85),this.multi){this.leaderId=this.findLeader();for(let x of this.remotes.values())x.leader=x.id===this.leaderId,x.update(x.snaps.length?x.renderTime():0,t),this.tagScale(x.tag,x.model.group.position,1),x.flags&64&&Math.random()<.6&&this.particles.emit(x.x,x.y+.3,x.z,1,{color:"#5fc2ff",speed:1,up:.5,life:.35,size:.35});if(this.sendT+=t,this.sendT>=.033){this.sendT=0;let x=(e.grounded?1:0)|(e.stun>0?2:0)|(e.dive>0?4:0)|(this.finished?8:0)|(this.swingT>0?16:0)|(e.shield>0?32:0)|(this.fx.turbo>0?64:0)|(this.swingMega&&this.swingT>0?128:0)|(this.drive?256|this.drive.st.id<<9:0)|(this.an?this.an.flagBits():0)|(e.swim>.4&&!this.drive?4096:0);dt.net.send({t:"s",x:+e.x.toFixed(2),y:+e.y.toFixed(2),z:+e.z.toFixed(2),r:+e.yaw.toFixed(2),a:x,sp:+Math.min(99,Math.hypot(e.vx,e.vz)).toFixed(1),ts:Math.round(dt.net.now()),rs:this.rs})}}this.updateCars(t,r),this.an&&this.an.update(t),this.updateCamera(t),this.updateLights(),this.water.material.uniforms.time.value=performance.now()/1e3,this.water.position.x=this.camera.position.x,this.water.position.z=this.camera.position.z,this.sky.position.copy(this.camera.position),this.scenery.update(s,this.camera.position),this.ambient.update(performance.now()/1e3,this.camera.position),this.particles.update(t),this.hud(t)}events(t){let e=!1;for(let n of t.events)if(n==="jump")It.jump(),this.particles.emit(t.x,t.y+.05,t.z,5,{color:"#ffffff",speed:1.5,up:1,life:.35,size:.25,gravity:2});else if(n==="land")It.land(t.landSpeed),e=!0,this.particles.emit(t.x,t.y+.05,t.z,Math.min(14,5+t.landSpeed*.4),{color:"#ffffff",speed:2.4,up:1.4,life:.45,size:.3,gravity:3});else if(n==="bounce")It.bounce(),e=!0,this.particles.emit(t.x,t.y+.1,t.z,18,{rainbow:!0,speed:3,up:2,life:.6,size:.3});else if(n==="dive")It.dive();else if(n==="splash"){It.splash();let s=t.swim>0&&t.waterSurf,r=Oo[this.meta.key],o=s?"#ffffff":r.water==="lava"?"#ff9a2a":r.water==="grid"?"#d11cff":"#bfeaff";this.particles.emit(t.x,(s?t.waterSurf:this.world.waterY)+.2,t.z,s?34:40,{color:o,speed:4,up:s?6:9,life:.9,size:.45,gravity:16,spread:.6})}else n==="stroke"?(It.jump(),this.particles.emit(t.x,t.waterSurf+.1,t.z,10,{color:"#ffffff",speed:2,up:3,life:.6,size:.3,gravity:10})):n==="fell"&&this.onFell();return e}seatModel(t,e){let n=e.st,s=e.mesh.userData.seat;t.position.set(n.x+Math.sin(n.yaw)*s.z,n.y+s.y,n.z+Math.cos(n.yaw)*s.z),t.rotation.y=n.yaw,t.rotation.x=0,t.scale.setScalar(.8)}nearestFreeCar(t){if(t.stun>0||t.y>1.5||t.swim>.3)return null;let e=null,n=4.6;for(let s of this.cars){if(s.st.driver!==-1&&s!==this.drive||ei[s.st.id].racer&&!this.racerOk||Math.abs(t.y-s.st.y)>3)continue;let r=Math.hypot(t.x-s.st.x,t.z-s.st.z);r<n&&(n=r,e=s)}return e}toggleCar(){if(this.an){this.an.toggleMount();return}if(this.over||this.finished||this.levelTime<0||this.menuOpen||!this.cars.length)return;let t=this.me.body;if(this.drive){let e=this.drive,n=e.st;if(Math.abs(n.speed)>5){this.toast("Slow down to get out!");return}if(n.y>1.2){this.toast(this.racerOk?"Not up here - stop on the RACER GARAGE plaza to swap cars":"Finish the SKY SPEEDWAY to win a RACER!");return}let s=Math.cos(n.yaw),r=-Math.sin(n.yaw);ac(t,n.x+s*2.4,.05,n.z+r*2.4,n.yaw),t.hitCd=.3,n.vx=n.vz=n.speed=0,n.driver=-1,n.parked=!0,this.drive=null,document.body.classList.remove("driving"),fu(),It.door(),this.g_g(this.me.model.group),this.multi&&dt.net.send({t:"carpark",c:n.id,x:+n.x.toFixed(2),y:+n.y.toFixed(2),z:+n.z.toFixed(2),r:+n.yaw.toFixed(3)}),this.camYaw=n.yaw+Math.PI,this.camInit=!1}else{let e=this.nearestFreeCar(t);if(!e)return;this.drive=e,e.st.driver=this.localId,e.st.parked=!1,t.vx=t.vz=t.vy=0,t.grounded=!0,document.body.classList.add("driving"),document.body.classList.remove("near-car"),cp(),It.door(),It.vroom(),this.camPitch=.3,this.camYaw=e.st.yaw+Math.PI,this.toast(ei[e.st.id].name.toUpperCase()+"!  "+(kn?"use the joystick to drive, tap the door to get out":"W/S drive \u2022 A/D steer \u2022 C get out"))}}g_g(t){t.scale.setScalar(1),t.rotation.x=0}skyGates(t){let e=this.info.sky;if(!e||t.y<e.y-4||this.skyG>=e.gates.length)return;let n=this.skyG,s=e.gates[n],r=n===1;if(Math.abs(t.x-s.x)<(r?4:s.w)&&Math.abs(t.z-s.z)<(r?s.w:4))if(this.skyG++,It.checkpoint(),this.particles.emit(t.x,t.y+1.5,t.z,24,{color:n===e.gates.length-1?"#ff3b3b":"#7cff3d",speed:6,up:5,life:.8,size:.4}),n===e.gates.length-1){this.racerOk=!0,this.applyFree();try{localStorage.setItem("ph_racer","1")}catch{}It.win(),this.toast("\u{1F3C1} SKY SPEEDWAY CLEARED! RED RACERS UNLOCKED & the sky road is now obstacle-free! Stop on the RACER GARAGE plaza and press "+(kn?"the red car button":"R"))}else this.toast("SKY GATE "+(n+1)+" / "+(e.gates.length-1)+"  \u2713")}applyFree(){this.info.track&&(this.info.track.free=!!this.racerOk),this.world&&this.world.skyObst&&(this.world.skyObst.visible=!this.racerOk)}garageSpot(t){let e=this.info.sky;return!!e&&t.y>e.y-3&&Math.hypot(t.x-e.garage.x,t.z-e.garage.z)<e.garage.r}swapRacer(){if(!this.drive||this.over||this.menuOpen)return;let t=this.drive,e=t.st,n=this.info.sky;if(ei[e.id].racer){this.toast("You already drive a RACER!");return}if(!this.racerOk){this.toast("Finish the SKY SPEEDWAY to unlock the RACERS!");return}if(!this.garageSpot(e)){this.toast("Drive to the RACER GARAGE (end of the sky road) to swap");return}if(Math.abs(e.speed)>5){this.toast("Slow down first!");return}let s=null,r=22;for(let o of this.cars){if(!ei[o.st.id].racer||o.st.driver!==-1&&o!==t)continue;let a=Math.hypot(e.x-o.st.x,e.z-o.st.z);a<r&&(r=a,s=o)}if(!s){this.toast("All 4 racers are taken - wait for one!");return}e.vx=e.vz=e.speed=0,e.driver=-1,e.parked=!0,this.multi&&dt.net.send({t:"carpark",c:e.id,x:+e.x.toFixed(2),y:+e.y.toFixed(2),z:+e.z.toFixed(2),r:+e.yaw.toFixed(3)}),this.drive=s,s.st.driver=this.localId,s.st.parked=!1,s.st.vx=s.st.vz=s.st.speed=0,It.door(),It.vroom(),this.shake=.3,this.camYaw=s.st.yaw+Math.PI,this.toast("\u{1F3CE} RACER!  Top speed 150 km/h \u2022 big horn on "+(kn?"the horn button":"H"))}updateDrive(t,e){let n=this.drive,s=n.st,r=this.me.body,o=0,a=0,l=!1;if(e&&((ke.has("KeyW")||ke.has("ArrowUp"))&&o++,(ke.has("KeyS")||ke.has("ArrowDown"))&&o--,(ke.has("KeyD")||ke.has("ArrowRight"))&&a++,(ke.has("KeyA")||ke.has("ArrowLeft"))&&a--,l=ke.has("Space"),Ye.x||Ye.y)){let f=Math.sin(this.camYaw),d=Math.cos(this.camYaw),m=-f*Ye.y+d*Ye.x,_=-d*Ye.y-f*Ye.x,p=Math.min(1,Math.hypot(m,_));if(p>.12){let g=Math.hypot(m,_)||1;m/=g,_/=g;let E=m*Math.sin(s.yaw)+_*Math.cos(s.yaw),R=-m*Math.cos(s.yaw)+_*Math.sin(s.yaw);E>-.35?(o+=Math.min(1,p*1.25)*(.45+.55*Math.max(0,E)),a+=E<.2?Math.sign(R||1):Math.max(-1,Math.min(1,R*2.4))):(o-=Math.min(1,p*1.25),a+=Math.max(-1,Math.min(1,R*2)))}}let c=this.cars.filter(f=>f!==n).map(f=>f.st),h="",u={gas:gn(o,-1,1),steer:gn(a,-1,1),hb:l};for(let f=0;f<2;f++)h=xp(s,t/2,u,this.info.track,c,Math.max(0,this.levelTime))||h;if(h==="bump"&&(It.land(18),this.particles.emit(s.x,.8,s.z,12,{color:"#ffd23f",speed:4,up:3,life:.4,size:.25}),this.shake=Math.max(this.shake||0,.25)),h==="crash"&&(It.land(34),this.particles.emit(s.x,.9,s.z,26,{color:"#ffb347",speed:7,up:5,life:.6,size:.35}),this.shake=Math.max(this.shake||0,Math.min(1,.4+(s.crash||0)*.04)),s.crash=0),r.x=s.x,r.y=s.y,r.z=s.z,r.vx=s.vx,r.vz=s.vz,r.vy=0,r.grounded=!0,r.ground=null,r.yaw=s.yaw,r.stun=0,hp(Math.abs(s.speed)/ei[s.id].max,o>0),this.skyGates(s),this.hornCd-=t,this.skidT-=t,s.drift>.55&&Math.abs(s.speed)>8){this.skidT<=0&&(this.skidT=.25,It.skid());for(let f of[-1,1])this.particles.emit(s.x-Math.sin(s.yaw)*1.5+Math.cos(s.yaw)*f*.9,.25,s.z-Math.cos(s.yaw)*1.5-Math.sin(s.yaw)*f*.9,1,{color:"#e8e8e8",speed:1.2,up:1.2,life:.5,size:.5,gravity:-.5})}s.boost>0&&Math.random()<.8&&this.particles.emit(s.x-Math.sin(s.yaw)*2.2,.5,s.z-Math.cos(s.yaw)*2.2,1,{color:"#ffb347",speed:2,up:1,life:.35,size:.4})}honk(){if(this.drive&&this.hornCd<=0){let t=ei[this.drive.st.id].racer;this.hornCd=t?.9:.4,t?It.honkBig():It.honk(),t&&(this.shake=Math.max(this.shake||0,.12))}}onCars(t){for(let e of Object.keys(t||{})){let n=this.cars[+e],s=t[e];!n||!s||n===this.drive||(n.st.x=+s.x,n.st.z=+s.z,n.st.y=+s.y||0,n.st.yaw=+s.r,n.mesh.position.set(n.st.x,n.st.y,n.st.z),n.mesh.rotation.y=n.st.yaw)}}softCars(t,e){if(!(!e||this.finished))for(let n of this.cars){if(n===this.drive)continue;let s=n.st,r=ei[s.id],o=t.x-s.x,a=t.z-s.z;if(o*o+a*a>40||Math.abs(t.y-s.y)>2.5)continue;let l=Math.sin(s.yaw),c=Math.cos(s.yaw),h=o*l+a*c,u=-o*c+a*l,f=r.hl+.45,d=r.hw+.45;if(Math.abs(h)>=f||Math.abs(u)>=d)continue;if(Math.abs(s.speed)>6&&t.hitCd<=0){let p=Math.sign(s.speed)||1,g=l*p+o*0,E=c*p;g+=-c*Math.sign(u||1)*.5,E+=l*Math.sign(u||1)*.5;let R=Math.hypot(g,E)||1;if(yr(t,g/R,E/R,15)){this.bonked("HIT BY A CAR!","",t);continue}}let m=f-Math.abs(h),_=d-Math.abs(u);if(m<_){let p=Math.sign(h||1)*m;t.x+=l*p,t.z+=c*p}else{let p=Math.sign(u||1)*_;t.x+=-c*p,t.z+=l*p}}}updateCars(t,e){var a;this.lastDt=t;let n=this.me.body,s=performance.now()/1e3;for(let l of this.cars)l!==this.drive&&(l.st.driver=-1,l.st.speed=0,l.st.vx=l.st.vz=0);let r=[];for(let l of this.remotes.values()){let c=l.model.group;if(c.rotation.order="YXZ",!!l.has)if(l.flags&256){let h=this.cars[l.flags>>9&7];if(h&&h!==this.drive){let u=h.st,f=(l.yaw-((a=u._py)!=null?a:l.yaw)+Math.PI*3)%(Math.PI*2)-Math.PI;u.driver=l.id,u.parked=!1,u.x=l.x,u.z=l.z;{let d=u.y;u.y=l.y||0,u.pitch+=((Math.abs(l.speed)>1?Math.atan2(u.y-d,Math.max(.01,Math.abs(l.speed)*t)):0)-u.pitch)*Math.min(1,t*8)}u.speed=l.speed,u.vx=Math.sin(l.yaw)*l.speed,u.vz=Math.cos(l.yaw)*l.speed,u._py=l.yaw,u.steer+=(gn(-f/Math.max(t,.008)*.45,-1,1)-u.steer)*Math.min(1,t*8),u.yaw=l.yaw,this.seatModel(c,h),this.tagScale(l.tag,c.position,1)}}else c.scale.setScalar(1),c.rotation.x=l.flags&4096?.55:0,l.flags&4096&&r.push([l.x,l.z,.35+Math.min(1,l.speed/8)*.65])}n.swim>.3&&!this.drive&&r.push([n.x,n.z,.35+Math.min(1,Math.hypot(n.vx,n.vz)/8)*.65]),n.swim>.3&&!this.drive&&Math.hypot(n.vx,n.vz)>2&&Math.random()<.5&&this.particles.emit(n.x,n.waterSurf+.08,n.z,1,{color:"#ffffff",speed:1.2,up:1.6,life:.5,size:.28,gravity:6,spread:.5});for(let l of this.poolMeshes){let c=l.wm.material.uniforms;c.time.value=s,l.cm.material.uniforms.time.value=s;for(let h=0;h<4;h++){let u=r[h],f=c.ag.value[h];u?f.set(u[0],u[1],u[2]):f.set(0,0,0)}}{let l=!1;for(let h of this.poolMeshes){let u=h.pl,f=this.camera.position;f.x>u.x0&&f.x<u.x1&&f.z>u.z0&&f.z<u.z1&&f.y<u.surf&&(l=!0)}let c=ut("uw");c&&c.classList.contains("on")!==l&&c.classList.toggle("on",l)}for(let l of this.cars)l.mesh.position.set(l.st.x,l.st.y,l.st.z),l.mesh.rotation.y=l.st.yaw,_p(l.mesh,l.st,t);let o=!this.an&&!this.drive&&e&&!this.menuOpen&&this.nearestFreeCar(n);!this.an&&!!o!==document.body.classList.contains("near-car")&&document.body.classList.toggle("near-car",!!o);{let l=!!this.drive&&this.racerOk&&!ei[this.drive.st.id].racer&&this.garageSpot(this.drive.st)&&Math.abs(this.drive.st.speed)<5;l!==document.body.classList.contains("sky-swap")&&document.body.classList.toggle("sky-swap",l)}if(this.drive){let l=ut("car-speed");if(l){let c=Math.round(Math.abs(this.drive.st.speed)*3.6);l.firstElementChild.textContent!==String(c)&&(l.firstElementChild.textContent=c)}}}onFell(){let t=this.me.body,e=this.cpCur,n=(this.slot-1)*1.6,s,r,o;if(e)s=gn(e.x+n,e.x-e.w/2+1.5,e.x+e.w/2-1.5),r=e.y+.05,o=e.spawn[2];else{let l=this.spawnPoint(this.slot);s=l[0],r=l[1]+.02,o=l[2]}ac(t,s,r,o,Math.PI),this.rs++,It.respawn();let a=ut("flash");a.classList.add("on"),setTimeout(()=>a.classList.remove("on"),60),this.particles.emit(s,r+.8,o,30,{rainbow:!0,speed:3,up:3,life:.8,size:.3}),this.camInit=!1,this.camYaw=0}checkpoints(t){let e=this.world.checkpoints;for(;this.cpIdx<e.length&&t.z<e[this.cpIdx].z&&t.y>e[this.cpIdx].y-2.5&&Math.abs(t.x-e[this.cpIdx].x)<e[this.cpIdx].w/2+3;)this.cpCur=e[this.cpIdx],this.cpIdx++,It.checkpoint(),this.toast("CHECKPOINT!"),this.particles.emit(t.x,t.y+1,t.z,24,{color:"#ffd23f",speed:3,up:5,life:.8,size:.3})}softCollide(t){if(this.finished)return;let e=ge.R*2+.06;for(let n of this.remotes.values()){if(!n.has||n.flags&8)continue;let s=t.x-n.x,r=t.z-n.z,o=t.y-n.y;if(Math.abs(o)>ge.H*.8)continue;let a=Math.hypot(s,r);if(a>=e)continue;let l,c;if(a>.001)l=s/a,c=r/a;else{let p=t.yaw*7+1;l=Math.cos(p),c=Math.sin(p)}let h=e-a;t.x+=l*h*.62,t.z+=c*h*.62;{let p=Math.sin(t.yaw),g=Math.cos(t.yaw);if(Math.hypot(t.vx,t.vz)>1&&-(p*l+g*c)>.3){let R=-c,x=l,M=p*R+g*x;Math.abs(M)<.3&&(M=-g*R+p*x||1),M=Math.sign(M),t.x+=R*M*h*.55,t.z+=x*M*h*.55}}let u=n.vx||0,f=n.vz||0,d=(t.vx-u)*l+(t.vz-f)*c;if(this.multi&&d<-1.5){let p=performance.now();n.shoveAt>p-80||(n.shoveAt=p,dt.net.send({t:"shove",to:n.id,nx:+(-l).toFixed(3),nz:+(-c).toFixed(3),p:+Math.min(12,-d).toFixed(1)}))}let m=performance.now(),_=!(n.lastContact>m-150);if(n.lastContact=m,d<0&&_){let p=-1.7*d*.5;t.vx+=l*p,t.vz+=c*p,p>2.5&&(t.noCtrl=Math.max(t.noCtrl,.16)),n.flags&4&&-d>7&&t.hitCd<=0&&yr(t,l,c,11)?this.bonked("TACKLED!",n.name||"",t):-d>6&&t.hitCd<=0&&(It.land(6),this.particles.emit(t.x-l*.4,t.y+.9,t.z-c*.4,8,{color:"#ffffff",speed:3,up:2,life:.3,size:.25}))}}}bonked(t,e,n){It.bonk(),this.toast(t+(e?"  \u2022 "+e:"")),this.particles.emit(n.x,n.y+1,n.z,22,{color:"#ffffff",speed:6,up:3,life:.5,size:.3}),this.particles.emit(n.x,n.y+1,n.z,14,{color:"#ffd23f",speed:8,up:4,life:.45,size:.28})}swing(){return!(this.multi||this.meta.free)||this.over||this.finished||this.levelTime<0||this.batCd>0||this.an&&this.an.mount||this.me.body.stun>0?!1:(this.swingMega=this.fx.mega>0,this.swingMega&&this.fx.mega--,this.batCd=1.1,this.swingT=.001,this.batPending=!0,It.swing(),!0)}updateBat(t,e){this.batCd>0&&(this.batCd-=t),this.swingT>0&&(this.swingT+=t/.42,e.stun>0?(this.swingT=0,this.batPending=!1):this.batPending&&this.swingT>=.55&&(this.batPending=!1,this.batHit(e)),this.swingT>=1&&(this.swingT=0))}batHit(t){this.an&&this.an.batHit(t);let e=Math.sin(t.yaw),n=Math.cos(t.yaw);for(let s of this.remotes.values()){if(!s.has||s.flags&8)continue;let r=s.x-t.x,o=s.z-t.z,a=s.y-t.y,l=Math.hypot(r,o);if(l>(this.swingMega?4.4:2.9)||Math.abs(a)>1.7||l<.001||(r*e+o*n)/l<.1)continue;let c=e*.7+r/l*.3,h=n*.7+o/l*.3,u=Math.hypot(c,h)||1;c/=u,h/=u,dt.net.send({t:"bat",to:s.id,nx:+c.toFixed(3),nz:+h.toFixed(3),p:this.swingMega?2:1}),It.bonk(),this.toast("BONK!  \u2022 "+(s.name||"")),this.particles.emit(s.x,s.y+1,s.z,24,{color:"#ffd23f",speed:7,up:4,life:.5,size:.3}),this.particles.emit(s.x,s.y+1,s.z,14,{color:"#ffffff",speed:5,up:3,life:.4,size:.25})}}sendNet(t){this.multi&&dt.net.send(t)}onAnimalBite(t){let e=this.me.body;if(this.over||this.levelTime<0)return;if(e.shield>0){this.toast("SHIELD BLOCKED!"),It.pickup();return}let n=t.big?1:0,s=this.an&&this.an.list[t.id]?Mn[this.an.list[t.id].kind]:null;e.hitCd=0,yr(e,t.nx,t.nz,n?21:15)&&(e.vy=n?10:8,e.stun=n?.9:.7,this.bonked(s?s.sound:"GRRR!","",e),this.shake=Math.max(this.shake||0,.8))}onShove(t){let e=this.me.body;if(this.over||this.finished||this.levelTime<0||e.shield>0)return;let n=gn(+t.p||0,0,12),s=+t.nx,r=+t.nz;!Number.isFinite(s)||!Number.isFinite(r)||(e.x+=s*n*.05,e.z+=r*n*.05,e.vx+=s*n*.12,e.vz+=r*n*.12)}onBat(t){let e=this.me.body;if(this.over||this.finished||this.levelTime<0)return;let n=(this.players.find(r=>r.id===t.from)||{}).name||"";if(e.hitCd=0,e.shield>0){this.toast("SHIELD BLOCKED!"),It.pickup();return}let s=t.p===2;yr(e,t.nx,t.nz,s?22:15)&&(e.vy=s?11:9,e.stun=s?1:.75,this.bonked(s?"MEGA BONK!":"BONKED!",n,e))}buildBoxes(){this.boxes=[];let t=[],e=(s,r,o)=>[-4,0,4].forEach(a=>t.push({x:s+a,y:o+1.35,z:r}));e(0,-10,0);let n=1e9;for(let s of this.world.checkpoints)Math.abs(s.z-n)<12||(n=s.z,e(s.x,s.z-5,s.y));if(!i.boxAssets){let s=document.createElement("canvas");s.width=s.height=128;let r=s.getContext("2d"),o=r.createLinearGradient(0,0,128,128);o.addColorStop(0,"#ffe45e"),o.addColorStop(1,"#ff8a1a"),r.fillStyle=o,r.fillRect(0,0,128,128),r.strokeStyle="#fff",r.lineWidth=8,r.strokeRect(6,6,116,116),r.fillStyle="#fff",r.strokeStyle="#7a3500",r.lineWidth=6,r.font="bold 92px Arial",r.textAlign="center",r.textBaseline="middle",r.strokeText("?",64,70),r.fillText("?",64,70);let a=new vn(s);a.colorSpace=Pe,i.boxAssets={geo:new Ee(.95,.95,.95),mat:new ce({map:a,emissive:"#ff9a00",emissiveIntensity:.55,roughness:.35})}}for(let s of t){let r=new st(i.boxAssets.geo,i.boxAssets.mat);r.position.set(s.x,s.y,s.z),r.castShadow=!0,this.scene.add(r),this.boxes.push({...s,mesh:r,respawn:0})}}findLeader(){if(this.players.length<2||this.levelTime<4)return-1;let t=this.localId,e=this.finished?1e5:-this.me.body.z;for(let n of this.remotes.values()){if(!n.has)continue;let s=n.flags&8?1e5:-n.z;s>e+.5&&(e=s,t=n.id)}return t}pickup(t,e){t.respawn=9,t.mesh.visible=!1,It.pickup();let n=this.multi?["turbo","turbo","turbo","jump","jump","shield","shield","mega","mega","mega"]:["turbo","jump","shield"],s=e||n[Math.random()*n.length|0],r=this.fx,o=this.me.body;return s==="turbo"?(r.turbo=5,this.toast("\u{1F680} TURBO!")):s==="jump"?(r.jump=7,this.toast("\u{1F998} SUPER JUMP!")):s==="shield"?(r.shield=8,this.toast("\u{1F6E1}\uFE0F SHIELD!")):(r.mega=2,this.toast("\u{1F3CF} MEGA BAT x2!")),this.particles.emit(o.x,o.y+1,o.z,26,{rainbow:!0,speed:4,up:4,life:.7,size:.32}),s}updatePowerups(t,e){let n=performance.now()/1e3,s=this.fx;for(let o of this.boxes){if(o.respawn>0){o.respawn-=t,o.respawn<=0&&(o.mesh.visible=!0);continue}o.mesh.rotation.y+=t*2,o.mesh.rotation.x=Math.sin(n*1.5+o.x)*.25,o.mesh.position.y=o.y+Math.sin(n*2.5+o.x)*.15,!(this.finished||this.over||this.levelTime<0)&&Math.abs(e.x-o.x)<1.3&&Math.abs(e.z-o.z)<1.3&&e.y<o.y+.8&&e.y+ge.H>o.y-.5&&this.pickup(o)}for(let o of["turbo","jump","shield"])s[o]>0&&(s[o]=Math.max(0,s[o]-t));e.speedMul=(s.turbo>0?1.4:1)*(this.an?this.an.speedK():1),e.jumpMul=s.jump>0?1.3:1,e.shield=s.shield,s.turbo>0&&Math.hypot(e.vx,e.vz)>3&&Math.random()<.7&&this.particles.emit(e.x,e.y+.3,e.z,1,{color:"#5fc2ff",speed:1,up:.5,life:.35,size:.35});let r=["turbo","jump","shield"].map(o=>s[o]>0?o+Math.ceil(s[o]):"").join("|")+"|"+s.mega;if(r!==this.fxSig){this.fxSig=r;let o=ut("hud-fx");if(!o)return;o.innerHTML="";let a=(l,c)=>{let h=document.createElement("div");h.className="fx",h.textContent=l+" "+c,o.appendChild(h)};s.turbo>0&&a("\u{1F680}",Math.ceil(s.turbo)+"s"),s.jump>0&&a("\u{1F998}",Math.ceil(s.jump)+"s"),s.shield>0&&a("\u{1F6E1}\uFE0F",Math.ceil(s.shield)+"s"),s.mega>0&&a("\u{1F3CF}","x"+s.mega)}}onLocalFinish(){this.finished=!0,this.finishTime=Math.max(0,this.levelTime),It.finish();let t=this.info.finishZ;this.particles.emit(0,this.info.finishY+6,t,120,{rainbow:!0,speed:9,up:10,life:1.8,size:.5,gravity:7,spread:10}),this.particles.emit(-9,this.info.finishY+1,t,40,{rainbow:!0,speed:4,up:12,life:1.4,size:.4,gravity:8}),this.particles.emit(9,this.info.finishY+1,t,40,{rainbow:!0,speed:4,up:12,life:1.4,size:.4,gravity:8}),this.multi?this.toast("FINISHED!"):this.endSingle(!1)}endSingle(t){if(this.over)return;this.over=!0,this.winnerSelf=!t;let e=-this.info.finishZ,n=gn(-this.me.body.z/e,0,1),s="";if(!t){let o=this.finishTime,a=Ap(this.level);!a||o<a?(localStorage.setItem("ph_best_"+this.level,String(o)),s=a?"NEW BEST TIME!":"First clear!"):s=`Best: ${xc(a)}`}let r=[{place:1,name:this.me.name,char:this.me.char,win:!t,tm:t?`${Math.round(n*100)}% of the track`:xc(this.finishTime),self:!0}];setTimeout(()=>dt.showResults({title:t?"TIME'S UP!":"YOU DID IT!",sub:t?"You ran out of time. Try again!":s,rows:r,single:!0,win:!t}),t?300:1400),fc(!0),t?It.lose():It.win()}onFin(t){this.finishedMap.set(t.id,t.place);let e=this.players.find(n=>n.id===t.id);t.id===this.localId?this.toast(`${du(t.place)} PLACE!`):(this.toast(`${e?e.name:"Player"} finished ${du(t.place)}!`),It.checkpoint())}onEnd(t){this.over=!0;let e=t.winnerId===this.localId;this.winnerSelf=e,fc(!0),e?It.win():It.lose();let n=t.results.map(r=>({place:r.place,name:r.name,char:r.char,win:r.id===t.winnerId,self:r.id===this.localId,tm:r.finished?xc(r.time):`${Math.round(r.progress*100)}% of the track`})),s=t.results[0];setTimeout(()=>dt.showResults({title:e?"YOU WIN!":`${s?s.name:"Nobody"} WINS!`,sub:t.reason==="time"?"Time's up - the nearest player to the finish gate wins!":"First to the finish gate wins!",rows:n,single:!1,win:e}),900)}addRemote(t){this.remotes.has(t.id)||(this.players.push(t),this.remotes.set(t.id,new Vo(t,this.scene)),this.buildProgress(),this.toast(t.name+" joined the race!"))}removeRemote(t){let e=this.remotes.get(t);if(e){e.dispose(this.scene),this.remotes.delete(t);let n=this.dots.get(t);n&&n.remove()}}tagScale(t,e,n){let s=e.distanceTo(this.camera.position),r=gn(s*.07,1,5.2)*n;t.scale.set(2.8*r,.7*r,1),t.visible=s<260}updateCamera(t){let e=this.me.body,n=Math.cos(this.camPitch),s=Math.sin(this.camPitch),r=Math.hypot(e.vx,e.vz);this.camera.fov=vs(this.camera.fov,62+gn(r-10,0,12)*.9,Math.min(1,t*4)),this.camera.updateProjectionMatrix();let o=this.camDist;if(this.drive){let u=this.drive.st;this.lookT-=t,o=9.2+Math.min(4,Math.abs(u.speed)*.12),this.lookT<=0&&(this.camYaw=_u(this.camYaw,u.yaw+Math.PI,1-Math.exp(-3.2*t)),this.camPitch+=(.28-this.camPitch)*(1-Math.exp(-2*t)))}this.an&&this.an.mount&&(o+=this.an.camLift()*1.1);let a=e.x,l=e.y+(this.drive?1.1:1.35)+(this.an?this.an.camLift()*.7:0),c=e.z;this.camInit||(this.camTarget.set(a,l,c),this.camInit=!0);let h=1-Math.exp(-14*t);if(this.camTarget.x+=(a-this.camTarget.x)*h,this.camTarget.z+=(c-this.camTarget.z)*h,this.camTarget.y+=(l-this.camTarget.y)*(1-Math.exp(-7*t)),this.camera.position.set(this.camTarget.x+Math.sin(this.camYaw)*n*o,this.camTarget.y+s*o+.4,this.camTarget.z+Math.cos(this.camYaw)*n*o),this.shake>.01){let u=this.shake*.5;this.camera.position.x+=(Math.random()-.5)*u,this.camera.position.y+=(Math.random()-.5)*u*.7,this.camera.position.z+=(Math.random()-.5)*u,this.shake*=Math.exp(-7*(this.lastDt||.016))}else this.shake=0;this.camera.lookAt(this.camTarget.x,this.camTarget.y+.2,this.camTarget.z)}updateLights(){let t=this.camTarget;this.sun.position.set(t.x+this.sunDir.x,t.y+this.sunDir.y,t.z+this.sunDir.z),this.sun.target.position.copy(t)}count(t){let e=ut("hud-count");e.textContent=t,e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop")}toast(t){let e=ut("hud-toast");e.textContent=t,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}rank(){var s;let t=this.me.body,e=1,n=(s=this.finishedMap.get(this.localId))!=null?s:this.finished&&!this.multi?1:null;if(n)return n;for(let r of this.remotes.values())(this.finishedMap.get(r.id)||r.has&&r.z<t.z-.5)&&e++;return e}hud(t){if(this.hudT+=t,this.hintT>0&&(this.hintT-=t,this.hintT<=0&&ut("hud-hint").classList.add("fade")),this.hudT<.066)return;this.hudT=0;let e=this.levelTime,n=Math.max(0,Math.floor(e)),s=ut("hud-timer");s.textContent=`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`,s.classList.remove("low");{let c=!this.multi&&!this.meta.free;ut("hud-hint").classList.toggle("single",c),document.body.classList.toggle("single",c)}ut("hud-rank").textContent=this.an?`\u2665 ${this.an.petCount()} pet${this.an.petCount()===1?"":"s"}`:this.multi?du(this.rank())+" / "+this.players.length:`${Math.max(0,Math.round(gn(-this.me.body.z/-this.info.finishZ,0,1)*100))}%`;let r=-this.info.finishZ,o=(c,h)=>{let u=this.dots.get(c);u&&(u.style.left=gn(-h/r,0,1)*100+"%")};o(this.localId,this.me.body.z);for(let c of this.remotes.values())o(c.id,c.has?c.z:0);let a=ut("click-hint"),l=!this.over&&!this.menuOpen&&document.pointerLockElement!==ts;l!==a.classList.contains("show")&&a.classList.toggle("show",l);{let c=ut("t-bat");c&&c.classList.toggle("cd",this.batCd>0)}this.multi&&(ut("hud-net").textContent=`ping ${Math.round(dt.net.rtt)} ms`)}render(){wn.render(this.scene,this.camera)}destroy(){uu(),fu();{let t=ut("uw");t&&t.classList.remove("on")}document.body.classList.remove("sky-swap"),document.body.classList.remove("driving"),document.body.classList.remove("near-car"),this.an&&this.an.dispose(),document.body.classList.remove("free-map"),document.body.classList.remove("riding"),document.body.classList.remove("in-race"),document.body.classList.remove("single"),ut("pause").classList.add("hidden"),this.menuOpen=!1,ut("hud").classList.add("hidden"),ut("hud-count").textContent="",ut("hud-toast").classList.remove("show");{let t=ut("hud-fx");t&&(t.innerHTML="")}for(let t of this.remotes.values())t.dispose(this.scene);this.me.model.dispose(),this.scenery.dispose(),this.scene.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(n=>{n.map&&n.map.dispose(),n.dispose()})}),this.scene.clear()}},Pv=["title","profile","levels","mp","lobby","results","help"];function Hn(i){for(let t of Pv){let e=ut("s-"+t);e.classList.toggle("active",t===i),e.classList.remove("hidden")}dt.screen=i}var Ep=0;function Wo(i){let t=ut("toast-global");t.textContent=i,t.classList.add("show"),clearTimeout(Ep),Ep=setTimeout(()=>t.classList.remove("show"),3200)}function Rp(i,t){i.innerHTML="",Ti.forEach(e=>{let n=document.createElement("div");n.className="card",n.dataset.id=e.id,n.innerHTML=`<img alt="${e.name}" src="${mu[e.id]||""}"><b style="color:${e.color}">${e.name}</b>${t.small?"":`<span>${e.tag}</span>`}`,n.onclick=()=>t.onPick(e.id),i.appendChild(n)})}function xu(i,t,e){i.querySelectorAll(".card").forEach(n=>{let s=+n.dataset.id;n.classList.toggle("sel",s===t),n.classList.toggle("taken",e&&e.has(s)&&s!==t)})}function Cp(i,t){i.innerHTML="",Io.forEach(e=>{let n=document.createElement("div");n.className="card",n.dataset.id=e.id,n.style.background=`linear-gradient(160deg, ${e.colors[0]}cc, ${e.colors[1]}cc)`;let s=Ap(e.id);n.innerHTML=`<div><h4>${e.id+1}. ${e.name}</h4><div class="stars">${"\u2605".repeat(e.stars)}${"\u2606".repeat(5-e.stars)}</div></div><div class="blurb">${e.blurb}</div><div class="meta">${e.sub} &bull; no time limit${s?" &bull; best "+xc(s):""}</div>`,n.onclick=()=>t.onPick(e.id),i.appendChild(n)})}function Lv(){let i=new Ro({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});i.setSize(256,320,!1),i.outputColorSpace=Pe,i.toneMapping=lr,i.setClearColor(0,0);let t=new Si;t.add(new hs("#ffffff","#b9a4ff",1.6));let e=new us("#ffffff",2.6);e.position.set(3,5,6),t.add(e);let n=new gs(i);t.environment=n.fromScene(new Co,.04).texture,t.environmentIntensity=.7;let s=new je(30,256/320,.1,50);s.position.set(0,1.25,6.6),s.lookAt(0,.98,0);let r=[];for(let o=0;o<Ti.length;o++){let a=new ys(o);a.group.rotation.y=-.35,t.add(a.group),a.update(.016,{speed:0,grounded:!0,vy:0,stun:0,dive:0,celebrate:!1}),i.render(t,s),r.push(i.domElement.toDataURL("image/png")),t.remove(a.group),a.dispose()}return n.dispose(),i.dispose(),i.forceContextLoss(),r}function Go(i){dt.mode=i,ut("inp-name").value=dt.name,ut("profile-title").textContent="Choose your player",Rp(ut("char-cards"),{onPick:t=>{dt.char=t,xu(ut("char-cards"),t),Ke.sel=t,It.select(),Ke.burst(t)}}),xu(ut("char-cards"),dt.char),Ke.setTitle(dt.char),Ke.mode="profile",Ke.sel=dt.char,Hn("profile")}function Dv(){let i=ut("inp-name").value.trim().replace(/[<>&"']/g,"").slice(0,14);return i||(i=["Haris","Speedy","Bouncy","Zippy"][Math.floor(Math.random()*4)]+Math.floor(Math.random()*90+10)),dt.name=i,localStorage.setItem("ph_name",i),localStorage.setItem("ph_char",String(dt.char)),i}function Ip(){Cp(ut("level-cards"),{onPick:i=>{It.go(),Xo(i)}}),Hn("levels")}function Xo(i){Ri(),Q&&(Q.destroy(),Q=null),dt.level=i,Q=new _c(i,[{id:1,name:dt.name,char:dt.char}],1,{multi:!1,t0:performance.now()+3600}),Ms(),Hn("none"),ut("s-results").classList.add("hidden"),Yo()}dt.showResults=function(i){let t=ut("res-list");t.innerHTML="",i.rows.forEach(s=>{let r=document.createElement("div");r.className="res-row"+(s.win?" win":"");let o=Ti[s.char];r.innerHTML=`<div class="place">${s.place<=3?Av[s.place-1]:s.place}</div><div class="nm"><i style="background:${o.color}"></i>${s.name.replace(/[<>&]/g,"")}${s.self?" <small>(you)</small>":""}</div><div class="tm">${s.tm}</div>`,t.appendChild(r)}),ut("res-title").textContent=i.title,ut("res-sub").textContent=i.sub||"";let e=ut("b-res-retry"),n=ut("b-res-next");if(i.single)e.style.display="",e.textContent="RETRY",n.style.display="",n.textContent=dt.level<Io.length-1?"NEXT LEVEL":"LEVELS",n.disabled=!1,dt.resMode="single";else{e.style.display="none";let s=dt.room&&dt.room.hostId===dt.myId;n.style.display="",n.textContent=s?"BACK TO LOBBY":"WAITING FOR HOST...",n.disabled=!s,dt.resMode="multi"}qo(),Hn("results")};ut("b-res-menu").onclick=()=>{It.back(),vu()};ut("b-res-retry").onclick=()=>{It.click(),Xo(dt.level)};ut("b-res-next").onclick=()=>{It.click(),dt.resMode==="single"?dt.level<Io.length-1?Xo(dt.level+1):(Q&&Q.destroy(),Q=null,Ip()):dt.net.send({t:"again"})};function vu(){Q&&(Q.destroy(),Q=null),dt.net&&dt.room&&dt.net.send({t:"leave"}),dt.room=null,qo(),Ke.setTitle(),Hn("title")}async function Nv(){if(dt.net&&dt.net.connected)return dt.net;let i=new dc;return i.on("joined",t=>{dt.myId=t.id}),i.on("lobby",zv),i.on("err",t=>{ut("mp-status").textContent=t.msg,t.retry&&dt.screen==="mp"?(vc(),yc=setTimeout(()=>{dt.screen==="mp"&&!dt.room&&yu("join")},2e3)):Wo(t.msg)}),i.on("go",Fv),i.on("s",t=>{if(Q&&Q.multi){let e=Q.remotes.get(t.id);e&&e.push(t)}}),i.on("fin",t=>{Q&&Q.multi&&Q.onFin(t)}),i.on("bat",t=>{Q&&Q.multi&&Q.onBat(t)}),i.on("an",t=>{Q&&Q.an&&Q.an.onNet(t)}),i.on("aev",t=>{Q&&Q.an&&Q.an.onEvent(t)}),i.on("abite",t=>{Q&&Q.an&&Q.onAnimalBite(t)}),i.on("carpark",t=>{Q&&Q.multi&&Q.onCars({[t.c]:t})}),i.on("cars",t=>{Q&&Q.multi?Q.onCars(t.cars):dt.pendingCars=t.cars}),i.on("shove",t=>{Q&&Q.multi&&Q.onShove(t)}),i.on("end",t=>{Q&&Q.multi&&Q.onEnd(t)}),i.on("left",t=>{Q&&Q.multi&&Q.removeRemote(t.id)}),i.on("close",()=>{Wo("Disconnected from server"),Q&&(Q.destroy(),Q=null),dt.room=null,qo(),Ke.setTitle(),Hn("title")}),await i.connect(),dt.net=i,i}function Uv(){ut("mp-status").textContent="",Ke.setTitle(dt.char),Hn("mp")}var yc=null;function vc(){yc&&(clearTimeout(yc),yc=null)}async function yu(i){Ri(),vc();let t=ut("mp-status");t.textContent="Connecting...";try{let e=await Nv();i==="create"?e.send({t:"create",name:dt.name,char:dt.char}):e.send({t:"join",name:dt.name,char:dt.char}),t.textContent=i==="create"?"":"Looking for a room..."}catch{t.textContent="Could not connect to the game server. Is it running?",Wo("Could not connect to the game server")}}function zv(i){vc();let t=!dt.room,e=dt.room;if(dt.room=i,Q&&Q.multi){for(let n of i.players)n.id!==dt.myId&&!Q.remotes.has(n.id)&&(i.phase==="race"||i.phase==="countdown")&&Q.addRemote(n);if(i.phase==="lobby"&&dt.screen!=="lobby")Q.destroy(),Q=null,qo(),wp(),Hn("lobby"),Mr(6);else if(dt.screen==="results"){let n=i.hostId===dt.myId;dt.resMode==="multi"&&(ut("b-res-next").textContent=n?"BACK TO LOBBY":"WAITING FOR HOST...",ut("b-res-next").disabled=!n)}return}(t||dt.screen==="mp"||dt.screen==="profile"||dt.screen==="title")&&(i.phase==="lobby"||i.phase==="results")&&(Hn("lobby"),Mr(6)),e&&i.players.length>e.players.length&&It.join(),wp()}function wp(){let i=dt.room;if(!i)return;let t=i.players.find(r=>r.id===dt.myId);t&&(dt.char=t.char),ut("lobby-code").textContent=i.code,ut("lobby-count").textContent=`${i.players.length}/${4}`;let e=ut("lobby-players");e.innerHTML="";for(let r=0;r<4;r++){let o=i.players[r],a=document.createElement("div");a.className="slot"+(o?"":" empty"),a.innerHTML=o?`<i style="background:${Ti[o.char].color}"></i><span>${o.name.replace(/[<>&]/g,"")}</span>${o.id===i.hostId?"<span>\u{1F451}</span>":""}${o.id===dt.myId?'<span class="you">YOU</span>':""}`:'<i style="background:#888"></i><span>Waiting for player...</span>',e.appendChild(a)}let n=new Set(i.players.filter(r=>r.id!==dt.myId).map(r=>r.char));Rp(ut("lobby-chars"),{small:!0,onPick:r=>{n.has(r)||(It.select(),dt.net.send({t:"char",char:r}))}}),xu(ut("lobby-chars"),dt.char,n);let s=i.hostId===dt.myId;Cp(ut("lobby-levels"),{onPick:r=>{s&&(It.click(),dt.net.send({t:"level",level:r}))}}),ut("lobby-levels").querySelectorAll(".card").forEach(r=>{r.classList.toggle("sel",+r.dataset.id===i.level),s||(r.style.cursor="default")}),ut("lobby-level-note").textContent=s?"(you choose)":"(host chooses)",ut("b-start").disabled=!s,ut("b-start").firstElementChild.textContent=s?"START RACE":"WAITING FOR HOST",ut("lobby-hint").textContent=s?i.players.length<2?"Tell friends to tap MULTIPLAYER on the same link. You can also start alone.":"Everyone ready? Hit start!":"The host will start the race.",Ke.setLobby(i.players)}function Fv(i){Ri(),Q&&(Q.destroy(),Q=null);let t=dt.room;if(!t)return;let e=i.order.map(n=>t.players.find(s=>s.id===n)).filter(Boolean);dt.level=i.level,Q=new _c(i.level,e,dt.myId,{multi:!0,t0:i.t0}),Ms(),Hn("none"),Yo()}function Yo(){if(Q&&!Q.over&&document.pointerLockElement!==ts)try{let i=ts.requestPointerLock();i&&i.catch&&i.catch(()=>{})}catch{}}function qo(){document.pointerLockElement&&document.exitPointerLock()}document.addEventListener("pointerlockchange",()=>{let i=document.pointerLockElement===ts;i?pu=!0:pu&&Q&&!Q.over&&!Q.menuOpen&&!kn&&Su(),i||(pu=!1),ut("click-hint").classList.toggle("show",!!Q&&!Q.over&&!Q.menuOpen&&!i)});var pu=!1,Mc=!1;ts.addEventListener("mousedown",i=>{Mc=!0,Q&&!Q.over&&(i.button===0&&Q.multi&&document.pointerLockElement===ts&&!Q.menuOpen?Q.swing():Yo())});window.addEventListener("mouseup",()=>{Mc=!1});window.addEventListener("mousemove",i=>{Q&&!Q.over&&(document.pointerLockElement===ts||Mc)&&Q.look(i.movementX,i.movementY)});ut("click-hint").addEventListener("click",Yo);window.addEventListener("keydown",i=>{if(i.target&&i.target.tagName==="INPUT"){i.code==="Enter"&&(dt.screen==="profile"?ut("b-profile-next").click():dt.screen==="mp"&&ut("b-join").click());return}Q&&!Q.over&&["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight"].includes(i.code)&&i.preventDefault(),!i.repeat&&(ke.add(i.code),i.code==="Space"&&(Ci.jump=!0),(i.code==="ShiftLeft"||i.code==="ShiftRight"||i.code==="KeyF")&&(Ci.dive=!0),i.code==="KeyM"&&Mu(),i.code==="KeyB"&&Q&&!Q.menuOpen&&Q.swing(),i.code==="KeyC"&&Q&&!Q.over&&!i.repeat&&Q.toggleCar(),i.code==="KeyH"&&Q&&!Q.menuOpen&&Q.honk(),i.code==="KeyR"&&Q&&!Q.over&&!i.repeat&&Q.swapRacer(),(i.code==="Escape"||i.code==="KeyP")&&Q&&!Q.over&&(Q.menuOpen?Sc():Su()))});window.addEventListener("keyup",i=>ke.delete(i.code));window.addEventListener("blur",()=>{ke.clear(),Mc=!1});window.addEventListener("resize",Ms);function Mu(){dt.muted=!dt.muted,lp(dt.muted),ut("b-sound").textContent="SOUND: "+(dt.muted?"OFF":"ON"),Lp()}function Pp(){ut("p-gfx").textContent="\u{1F5A5} GFX: "+(ae.low?"LOW":"AUTO")}function Lp(){ut("p-sound").textContent="\u{1F50A} SOUND: "+(dt.muted?"OFF":"ON")}function Su(){!Q||Q.over||Q.menuOpen||(Q.menuOpen=!0,Q.multi||(Q.paused=!0,Q.pauseAt=performance.now()),qo(),ke.clear(),Ye.x=Ye.y=0,Ye.jump=!1,ut("p-title").textContent=Q.multi?"Menu":"Paused",ut("p-info").textContent=Q.meta.name+(Q.multi?"  \u2022  race goes on!":""),Pp(),ut("p-retry").classList.toggle("hidden",Q.multi),ut("p-full").classList.toggle("hidden",!(document.documentElement&&document.documentElement.requestFullscreen)),Lp(),ut("pause").classList.remove("hidden"),ut("click-hint").classList.remove("show"),It.click())}function Sc(){!Q||!Q.menuOpen||(Q.paused&&(Q.t0+=performance.now()-Q.pauseAt,Q.paused=!1),Q.menuOpen=!1,ut("pause").classList.add("hidden"),Yo())}ut("b-menu").addEventListener("click",()=>Q&&Q.menuOpen?Sc():Su());ut("p-resume").onclick=()=>{It.click(),Sc()};ut("p-sound").onclick=()=>{Ri(),Mu(),It.click()};ut("p-gfx").onclick=()=>{ae.low=!ae.low;try{localStorage.setItem("ph_low",ae.low?"1":"0")}catch{}It.click(),Cv(),Pp()};ut("p-full").onclick=()=>{let i=document,t=i.documentElement;try{!i.fullscreenElement&&t.requestFullscreen?t.requestFullscreen({navigationUI:"hide"}):i.exitFullscreen&&i.fullscreenElement&&i.exitFullscreen()}catch{}};ut("p-retry").onclick=()=>{It.click();let i=dt.level;ut("pause").classList.add("hidden"),Q&&(Q.menuOpen=!1),Xo(i)};ut("p-quit").onclick=()=>{It.back(),ut("pause").classList.add("hidden"),vu()};async function Ov(){await ip(),Ke=new gu;try{mu=Lv()}catch{mu=["","","",""]}Ms(),Ke.setTitle(),Hn("title"),ut("b-single").onclick=()=>{Ri(),Mr(6),It.click(),Go("single")},ut("b-multi").onclick=()=>{Ri(),Mr(6),It.click(),Go("multi")},ut("b-help").onclick=()=>{Ri(),It.click(),ut("s-help").classList.add("active")},ut("b-help-close").onclick=()=>{It.back(),ut("s-help").classList.remove("active")},ut("b-sound").onclick=()=>{Ri(),Mu(),It.click()},ut("b-profile-back").onclick=()=>{It.back(),Ke.setTitle(),Hn("title")},ut("b-profile-next").onclick=()=>{Dv(),It.click(),dt.mode==="single"?Ip():Uv()},ut("b-levels-back").onclick=()=>{It.back(),Go("single")},ut("b-mp-back").onclick=()=>{It.back(),vc(),Go("multi")},ut("b-create").onclick=()=>{It.click(),yu("create")},ut("b-join").onclick=()=>{It.click(),yu("join")},ut("b-leave").onclick=()=>{It.back(),vu()},ut("b-start").onclick=()=>{dt.room&&dt.room.hostId===dt.myId&&(It.click(),dt.net.send({t:"start"}))},ut("b-copy").onclick=async()=>{let n=`${location.origin}${location.pathname}?room=${dt.room?dt.room.code:""}`;try{await navigator.clipboard.writeText(n),Wo("Invite link copied!")}catch{prompt("Copy this invite link:",n)}},new URLSearchParams(location.search).get("room")&&(Go("multi"),Wo("Pick your name & player, then CONTINUE and JOIN ROOM")),ut("loader").classList.add("done"),setTimeout(()=>ut("loader").remove(),600);let t=performance.now(),e=n=>{requestAnimationFrame(e);let s=Math.min(.05,(n-t)/1e3);t=n,Rv(s),Q?(Q.over&&Q.menuOpen&&Sc(),Q.paused||Q.update(s),Q.render()):(Ke.update(s),wn.render(Ke.scene,Ke.camera))};requestAnimationFrame(e)}Ov().catch(i=>{console.error(i);let t=document.querySelector("#loader p");t&&(t.textContent="Error: "+i.message)});window.__ph={app:dt,Remote:Vo,startSingle:i=>Xo(i),keys:ke,press:Ci,touch:Ye,get race(){return Q},get stage(){return Ke}};(function(){kn&&document.body.classList.add("touch");let t=ut("touch"),e=ut("joy"),n=ut("joy-knob");if(!t||!e||!n)return;let s=56,r=null,o=null,a=0,l=0,c=0,h=0,u=(m,_)=>{for(let p of m)if(p.identifier===_)return p;return null};t.addEventListener("touchstart",m=>{m.preventDefault();for(let _ of m.changedTouches)_.clientX<window.innerWidth*.5&&r===null?(r=_.identifier,a=_.clientX,l=_.clientY,e.style.left=a+"px",e.style.top=l+"px",e.classList.add("on"),n.style.transform="translate(-50%, -50%)"):o===null&&_.clientX>=window.innerWidth*.5&&(o=_.identifier,c=_.clientX,h=_.clientY)},{passive:!1}),t.addEventListener("touchmove",m=>{m.preventDefault();let _=r!==null?u(m.touches,r):null;if(_){let g=_.clientX-a,E=_.clientY-l,R=Math.hypot(g,E);R>s&&(g*=s/R,E*=s/R),n.style.transform=`translate(calc(-50% + ${g}px), calc(-50% + ${E}px))`;let x=g/s,M=E/s,v=Math.hypot(x,M),w=v<.14?0:(v-.14)/.86/v;Ye.x=x*w,Ye.y=-M*w}let p=o!==null?u(m.touches,o):null;p&&(Q&&!Q.over&&Q.look((p.clientX-c)*1.7,(p.clientY-h)*1.7),c=p.clientX,h=p.clientY)},{passive:!1});let f=m=>{for(let _ of m.changedTouches)_.identifier===r&&(r=null,Ye.x=Ye.y=0,e.classList.remove("on")),_.identifier===o&&(o=null)};t.addEventListener("touchend",f),t.addEventListener("touchcancel",f);let d=(m,_,p)=>{let g=ut(m);if(!g)return;g.addEventListener("touchstart",R=>{R.preventDefault(),R.stopPropagation(),_()},{passive:!1});let E=R=>{R.preventDefault(),R.stopPropagation(),p&&p()};g.addEventListener("touchend",E,{passive:!1}),g.addEventListener("touchcancel",E,{passive:!1})};d("t-jump",()=>{Q&&!Q.over&&(Ci.jump=!0,Ye.jump=!0)},()=>{Ye.jump=!1}),d("t-dive",()=>{Q&&!Q.over&&(Ci.dive=!0)}),d("t-bat",()=>{Q&&!Q.over&&!Q.menuOpen&&Q.swing()}),d("c-horn",()=>{Q&&Q.honk()}),d("b-racer",()=>{Q&&Q.swapRacer()}),d("b-car",()=>{Q&&Q.toggleCar()}),d("b-exit",()=>{Q&&Q.toggleCar()});for(let m of["b-car","b-exit","b-racer"]){let _=ut(m);_&&_.addEventListener("click",()=>{Q&&(m==="b-racer"?Q.swapRacer():Q.toggleCar()),_.blur()})}})();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

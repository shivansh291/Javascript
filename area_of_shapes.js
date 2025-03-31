const shapes = {
  square : function (a){
    return a*a
  },
  rectangle : function (l,b){
    return 2*(l+b)
  },
  triange : function (b,h){
    return 1/2*b*h
  },
  circle : function (r){
    return Number((Math.PI*r*r).toFixed(2))
  },
  cylinder : function (r,h){
    return Number(((2*Math.PI*r)*(r+h)).toFixed(2))
  },
  cone : function(r,h){
    return Number(((Math.PI*r)*(r+(Math.sqrt((h*h)+(r*r))))).toFixed(2))
  }
}

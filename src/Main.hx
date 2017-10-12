import Test;
import Webpack;



@:keep
@:keepInit
@:native('ff')
@:expose 
class A {

  public static function funfola() {
    return 'ff';
  }  
}


@:enum @:expose
abstract Tipo(String) from String to String {
  var a = 'a';
  var b = 'b';
} 


@:keep
@:keepInit

@:expose 
class Main {


  @:expose public static function p(x:Int) {
    return x+1;
  }
  

  public static function dd() {
    trace('succhiatore');
  }



  @:expose 
  public static function ee(x:Tipo) {
  
    Webpack.load(Test).then(function(_) {
        Test.m();
    });


  }
  

  public static function main() {}

 
}
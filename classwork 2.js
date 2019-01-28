What will you see in the console for the following example?
var a = 1;
function b() {
    a = 10;
    return;
    function a() {}
}
b();
console.log(a);



in scoop we will see a=10 b=0 because its not gobal scoop.
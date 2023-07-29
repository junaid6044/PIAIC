var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.print = function () {
        console.log("App's Print function is working");
    };
    return App;
}());
var app1 = new App();
app1.print();

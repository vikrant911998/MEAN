var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bank = /** @class */ (function () {
    function Bank(id) {
        this.id = id;
    }
    Bank.prototype.showId = function () {
        console.log(this.id);
    };
    return Bank;
}());
var HDFC = /** @class */ (function (_super) {
    __extends(HDFC, _super);
    function HDFC(id, name) {
        var _this = _super.call(this, id) || this;
        _this.name = name;
        return _this;
    }
    HDFC.prototype.showName = function () {
        console.log(this.name);
    };
    return HDFC;
}(Bank));
var temp = new HDFC(101, "Rahul");
temp.showId();
temp.showName();

var React = require('react');
var ReactDOM = require('react-dom');

var ArrayContent = React.createClass({
    _valid: function (numberStr) {
        var n = Number(numberStr);
        if(!isNaN(n)){
            return n;
        }else{
            return "f";
        }
    },

    _findBalancePosition: function (numberArray) {
        var msg = "";
        var sum = 0;
        for(var n in numberArray){
            sum += numberArray[n];
        }

        if(sum % 2 != 0){
            msg = "-1";
        }else{
            var balanceNuber = sum / 2;
            var increaseNum = 0;
            for(var i in numberArray){
                increaseNum += numberArray[i];
                if(increaseNum < balanceNuber){
                    continue;
                }
                if(increaseNum == balanceNuber){
                    msg = i;
                    break;
                }
            }
        }

        alert(msg);
    },

    handleClick: function () {
        var numbersStr = this.refs.arrayNumbers.value;
        var numbersStrArray = numbersStr.split('，');
        var numberArray = [];
        var ret = true;

        for(var numberStr in numbersStrArray){
            var rs = this._valid(numbersStrArray[numberStr]);
            if( rs == "f"){
                ret = false;
                break;
            }else{
                numberArray.push(rs);
            }
        }

        if(ret){
            this._findBalancePosition(numberArray);
        }else{
            alert("请输入正确的数组！");
        }

    },

    render: function () {
        return (
            <div>
                <input id="arrayNumbers" ref="arrayNumbers" type="text" placeholder="请输入数组数字，以中文逗号（，）分隔" className="form-control"/>
                <p>
                    <button id="confirmBtn" onClick={this.handleClick} className="btn btn-primary">确认</button>
                </p>
            </div>
        );
    }
});

ReactDOM.render(
    <ArrayContent />,
    document.getElementById("content")
);

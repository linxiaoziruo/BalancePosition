console.log('1');

var ArrayContent = React.createClass({
    _checkNumber: function (numberStr) {
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
            sum += n;
        }

        if(sum % 2 != 0){
            msg = "-1";
        }else{
            var balanceNuber = sum / 2;
            var increaseNum = 0;
            for(var i=0; i<numberArray.length; i++){
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

    handleClick: function (numberStr) {
        var numbersStr = this.refs.arrayNumbers.value;
        var numbersStrArray = numberStr.split('，');
        var numberArray = [];
        var ret = true;

        for(numberStr in numbersStrArray){
            var rs = this._checkNumber(numberStr);
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
                <input id="arrayNumbers" ref="arrayNumbers" type="text" placeholder="请输入数组数字，以中文逗号（，）分隔" class="form-control"/>
                <p>
                    <button id="confirmBtn" onclick={this.handleClick} class="btn btn-primary">确认</button>
                </p>
            </div>
        );
    }
});

ReactDOM.render(
    <ArrayContent />,
    document.getElementById("content")
);

//case switch
    function caseSwitch(val)
    {
        var answer = "";
        switch(val){
            case 1:
            answer = "alpha";
            break;
            case 2:
            answer = "beta";
            break;
            case 3:
            answer = "gamma";
            break;
            case 4:
            answer = "delta";
            default:
            answer = "invalid entry";
        }
        return answer;
    }
    console.log(caseSwitch(1));
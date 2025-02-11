function trueOrFalse(val){
    if (val === 0 || val === -0 || val === null || val === NaN || val === undefined || val === NaN || val === ""){
      return "false";
    }
    else  {
        return "true";
    
    }

}
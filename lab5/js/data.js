function Formdata(data) {
    if(data.name != null && data.name.value.length < 3){
        alert("Please enter a valid name");
        return false;
    }
    if(data.phone != null && data.phone.value.length === 0){
        alert("Please enter a valid phone number");
        return false;
    }
    if(!(/^[0-9-+()s]+z/.test(data.phone.value+"z"))){
        alert("Please enter a valid phone number");
        return false;
    }
}
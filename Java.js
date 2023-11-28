//Javascript program to store info on customer and output literal string to console log
//Chelsey penton QAP4

const motelCustomer = {
firstName: "Jane",
lastName: "Doe",
birthDate: 1995,
gender: "Woman",
roomPreference: ["Queen","Pet Friendly"],
paymentMethod: "Credit Card",
mailingAddress: {
    streetAddress: "10 AirportHeights Drive",
    city: "St. John's",
    province: "Newfoundland",
    postalCode: "A0G 2X0",
},
phoneNumber: "709-555-5555",

//motel stay function
motelStayDates: {
    checkInDate: "2023-10-12",
    checkOutDate: "2023-10-17"
},

//Age function
getAge: function(){
    const today = new Date();
    const birthYear = new Date(this.birthDate, 1, 1).getFullYear();
    return today.getFullYear() - birthYear;
},

//Stay Duration function
calculateStayTime: function() {
    const checkInDate = new Date(this.motelStayDates.checkInDate);
    const checkOutDate = new Date(this.motelStayDates.checkOutDate);
    const millisecondsInADay = 24 * 60 * 60 * 1000;
    return Math.round((checkOutDate - checkInDate) / millisecondsInADay);
},


//Literal string function
getDescription: function() {
    return `${this.firstName}${this.lastName} is a ${this.getAge()} year old ${this.gender} from ${this.mailingAddress.city} will be staying at Sleep Tite Motel for ${this.calculateStayTime()} days, if you wish to contact them call ${this.phoneNumber}. They prefer ${this.roomPreference.join(',')} types of rooms.`
}
}

console.log(motelCustomer.getDescription());
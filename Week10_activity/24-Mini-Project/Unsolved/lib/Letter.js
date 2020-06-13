class Letter {
    visible(Letter) {
        const specialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
       return specialChar.test(Letter);
    }
 
 
}
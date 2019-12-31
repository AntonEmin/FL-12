function isLeapYear (temp) {
  let date = new Date(temp);
  if (isNaN(date)) {
    console.log('Invalid date')
  } else {
    let year = date.getFullYear();
    if (year % 400 === 0) {
      return `${year} is a leap year`;
    } else if ( year % 100 === 0) {
      return `${year} is not a leap year`
    } else if (year % 4 === 0) {
      return `${year} is a leap year`
    } else {
     return `${year} is not a leap year`
    }
  }
}
isLeapYear('2020-01-01 00:00:00');
isLeapYear('2020-01-01 00:00:00777');
isLeapYear(1213131313);
isLeapYear(12131313139999999999994534);
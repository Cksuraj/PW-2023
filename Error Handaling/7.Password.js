// creating class of username and password 
class User {
  constructor(username, password) {
    this.username = username;
    this._password = password;
  }

  get password() {
    return this._password.replace(/./g, '*');
  }

  // useing set password to to check wiht newpassword 
  set password(newPassword) {
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;
    if (passwordRegex.test(newPassword)) {
      this._password = newPassword;
    } else {
      console.error('Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter.');
    }
  }
}


const user = new User('johndoe', 'MyPassword123');
console.log(user.password); // "*************"
user.password = 'newpassword';
console.log(user.password); // "*************"
user.password = 'short';
// "Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter."



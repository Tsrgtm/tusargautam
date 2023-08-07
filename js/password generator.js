function generatePassword() {
  const length = parseInt(document.getElementById("password-length").value);
  const includeUppercase = document.getElementById("include-uppercase").checked;
  const includeNumbers = document.getElementById("include-numbers").checked;
  const includeSpecial = document.getElementById("include-special").checked;

  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()-=_+[]{}|;:,.<>?";

  let validChars = lowercaseChars;
  if (includeUppercase) validChars += uppercaseChars;
  if (includeNumbers) validChars += numberChars;
  if (includeSpecial) validChars += specialChars;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * validChars.length);
    password += validChars.charAt(randomIndex);
  }

  document.getElementById("generated-password").value = password;
}

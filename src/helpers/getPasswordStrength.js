// Based on https://stackoverflow.com/a/11268104
export const scorePassword = pass => {
  let score = 0;
  if (!pass || pass.length < 5) return score;

  // award every unique letter until 5 repetitions
  let letters = {};
  for (let i = 0; i < pass.length; i++) {
    letters[pass[i]] = (letters[pass[i]] || 0) + 1;
    score += 5.0 / letters[pass[i]];
  }

  // bonus points for mixing it up
  let variations = {
    digits: /\d/.test(pass),
    lower: /[a-z]/.test(pass),
    upper: /[A-Z]/.test(pass),
    nonWords: /\W/.test(pass)
  };

  let variationCount = 0;
  for (let check in variations) {
    variationCount += variations[check];
  }
  score += (variationCount - 1) * 10;

  return Math.min(4, parseInt(score / 20, 10));
};

const getPasswordStrength = passwordValue => {
  let score = scorePassword(passwordValue);
  let passwordStrengthValues = {
    0: 'Very Weak',
    1: 'Weak',
    2: 'Medium',
    3: 'Strong',
    4: 'Very Strong'
  };

  return passwordStrengthValues[score];
};

export default getPasswordStrength;

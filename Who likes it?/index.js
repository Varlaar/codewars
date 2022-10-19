// 1 way

function likes(names) {
  switch (names.length) {
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;

    case 2:
      return `${names[0]} and ${names[1]} like this`;

    case 1:
      return `${names[0]} likes this`;

    case 0:
      return "no one likes this";

    default:
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}


// 2 way

function likes(names) {
    return {
      0: 'no one likes this',
      1: `${names[0]} likes this`, 
      2: `${names[0]} and ${names[1]} like this`, 
      3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
      4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
    }[Math.min(4, names.length)]
  }
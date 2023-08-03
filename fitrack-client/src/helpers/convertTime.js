// Convert minutes to hours and minutes

export function timeConvert(n) {
  const num = n;
  let hours = num / 60;
  let rhours = Math.floor(hours);
  let minutes = (hours - rhours) * 60;
  let rminutes = Math.round(minutes);
  if (rhours > 0) {
    return rhours + ' hr(s) and ' + rminutes + ' min(s).';
  } else {
    return rminutes + ' min(s).';
  }
}

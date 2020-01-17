export function msDateToJavascriptDate(ds) {
  const dobj = ds.match(/(-?\d+)|([+-])|(\d{4})/g);
  const T = parseInt(dobj[0], 10);
  const tz = dobj[1];
  let off = dobj[2];

  if (off) {
    off = parseInt(off.substring(0, 2), 10) * 3600000 + parseInt(off.substring(2), 10) * 60000;
    if (tz === '-') off *= -1;
  } else off = 0;
  return new Date(T + off);
}

export function javascriptDatetoMsDate(value: Date): string {
  return '/Date(' + value.getTime() + ')/';
}

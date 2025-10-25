import dayjs from 'dayjs';

export const sayHello = (str: string) => {
  const s = 'xshuliner say' + str + '(' + dayjs() + ')';

  console.log(s);
  return s;
};

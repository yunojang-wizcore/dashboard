export function* range(l:number):IterableIterator<number> {
  let i = -1;

  while(++i < l) {
    yield i;
  }  
}

export const map = <A,R>(f:(arg:A,idx:number)=>R,iter:IterableIterator<A>):R[] => {
  const res:R[] = [];
  let i = -1;

  for (const a of iter) {
    res.push(f(a, ++i));
  }

  return res;
}
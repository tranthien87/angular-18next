export const addClassToObject = (state: {[index: string]: boolean}, classes: Array<string>) => {
  if(classes.length > 0){
    state[classes.join(' ')] = true;
  }
}

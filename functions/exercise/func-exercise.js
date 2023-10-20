
function makeLine(size){
        let line = '';
        for (let i = 0; i < size; i++) {
          line += '#';
          
        }
        return line;
    }
    makeLine();
    //console.log(makeLine(5));

    function makeSquare (length){
      let square = "";
      for (let i=0; i< length; i++ ){
        square += (makeLine(length)+ "\n")
      }
      return square;
    }
    //console.log(makeSquare(8));

   function makeRectangle(width,height){
         let rectangle = '';
            for (let i = 0; i < height; i++) {
              rectangle += (makeLine(width) + '\n');
            }
            return rectangle;
          
    };
    // console.log(makeRectangle(5,4));

    function makeDownwardStairs(height) {
      let stairs = '';
      for (let i = 0; i < height; i++) {
        stairs += (makeLine(i+1) + '\n');
      }
      return stairs.slice(0, -1);
    }
    // console.log(makeDownwardStairs(4));

    function makeSpaceLine(numSpaces, numChars){
      let spaceLine = "";
      for(let i=0; i <numSpaces; I++){
        spaceLine + " " +spaceLine + " "+
      }
      return spaceLine;
    }
    console.log(makeSpaceLine)
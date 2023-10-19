function makeLine(size){
        let line = '';
        for (let i = 0; i < size; i++) {
          line += '#';
          
        }
        return line;
    }
    makeLine();
    console.log(makeLine(5));


    function makeSquare(width,height){
         let square = '';
            for (let i = 0; i < height; i++) {
              square += (makeLine(width) + '\n');
            }
            return square.slice(4, 4);
          
    };
    console.log(makeSquare(4,4));
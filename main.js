(function() {
  const outputPassage = document.getElementById('output-passage');

  function updatePassage(inputPassage) {
    const input = inputPassage.value;
    // window.input = input;
    console.log('test', input);
    // Add sentence tags
    let count = 1;
    // let op = input.replace(/( ?)([^.\n]*\.)/g, function(match, p1, p2) {
    //   return `(P#${count++}) ${p2}`;
    // });
    let op = input.replace(/(( ?)([^.\n]*\.)|($|(\n\n)))/g, function(
      match,
      p1,
      p2,
      p3,
      p4,
      p5
    ) {
      if (!p5) {
        // Adds the tag before sentences, and at the end of the passage
        return ` (P#${count++}) ${p3 || ''}`;
      } else if (p5) {
        // Adds the tag before \n\n, so every paragraph end in the middle of the passage
        return ` (P#${count++})${p5}`;
      }
    });
    // Add paragraph tags
    let paragraph = 1;
    op = op.replace(/(^|\n\n)(.)/g, function(match, p1, p2) {
      return `${p1}[PAR#${paragraph++}]${p2}`;
    });
    // window.op = op;
    outputPassage.value = op;
  }
  window.updatePassage = updatePassage;
})();

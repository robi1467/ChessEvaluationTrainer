var board2 = Chessboard('board2', {
  draggable: true,
  dropOffBoard: 'trash',
  sparePieces: true
})
function getRandomPositionBoard(){
  return null;
}

$('#startBtn').on('click', board2.start)
$('#getNewPositionBtn').on('click', function() {
  board2.position('5k2/3K4/4P3/8/8/8/8/8');
})
$('#clearBtn').on('click', board2.clear)


  
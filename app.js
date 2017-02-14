var highlightYear = function highlightYear() {
  var highlights = ['highlight-one', 'highlight-two'];
  var groups = [
    { start: 2, length: 5 },
    { start: 7, length: 7 }
  ];
  var rowIdx, colIdx = 3;
  var selector;
  for (var i = 0; i < groups.length; i++) {
    for (var j = 0; j < groups[i].length; j++) {
      rowIdx = groups[i].start + j;
      selector = 'tr:nth-child(' + rowIdx + ') td:nth-child(' + colIdx + ')';
      $(selector).addClass(highlights[i % 2]);
    }
  }
}

var highlightAllByYear = function highlightAllByYear() {
  var highlights = ['highlight-one', 'highlight-two'];
  var groups = [
    { start: 2, length: 5 },
    { start: 7, length: 7 }
  ];
  var rowIdx;
  for (var i = 0; i < groups.length; i++) {
    for (var j = 0; j < groups[i].length; j++) {
      rowIdx = groups[i].start + j;
      $('tr:nth-child(' + rowIdx + ')').children().addClass(highlights[i % 2]);
    }
  }
}

var animateSeparate = function animateSeparate() {
  $('.blank').addClass('separate');
}

var separateGroups = function separateGroups() {
  var indices = [1, 6];
  var rowIdx;
  var blankRow = '<tr><td class="blank"></td></tr>';
  for (var i = 0; i < indices.length; i++) {
    rowIdx = indices[i] + i;
    $(blankRow).insertAfter('tr:nth-child(' + rowIdx + ')');
  }
  setTimeout(animateSeparate, 10);
}

var unhighlightCells = function unhighlightCells() {
  $('.highlight-one').removeClass();
  $('.highlight-two').removeClass();
}

var highlightCourse = function highlightCourse() {
  var highlights = ['highlight-one', 'highlight-two'];
  var groups = [
    { start: 3, length: 2 },
    { start: 5, length: 3 },
    { start: 9, length: 4 },
    { start: 13, length: 3 }
  ];
  var rowIdx, colIdx = 4;
  var selector;
  for (var i = 0; i < groups.length; i++) {
    for (var j = 0; j < groups[i].length; j++) {
      rowIdx = groups[i].start + j;
      selector = 'tr:nth-child(' + rowIdx + ') td:nth-child(' + colIdx + ')';
      $(selector).addClass(highlights[i % 2]);
    }
  }
}

var highlightAllByCourse = function highlightAllByCourse() {
  var highlights = ['highlight-one', 'highlight-two'];
  var groups = [
    { start: 3, length: 2 },
    { start: 5, length: 3 },
    { start: 9, length: 4 },
    { start: 13, length: 3 }
  ];
  var rowIdx;
  for (var i = 0; i < groups.length; i++) {
    for (var j = 0; j < groups[i].length; j++) {
      rowIdx = groups[i].start + j;
      $('tr:nth-child(' + rowIdx + ')').children().addClass(highlights[i % 2]);
    }
  }
}

var highlightDeletionCols = function highlightDeletionCols() {
  var numRows = 16;
  var colIdxs = [0, 2];
  var excludes = [2, 8];
  for (var i = 1; i < numRows; i++) {
    if (excludes.indexOf(i) === -1) {
      $('tr:nth-child(' + i + ')').children()
                                  .slice(colIdxs[0], colIdxs[1])
                                  .addClass('highlight-deletion');
    }
  }
}

var animateDeletion = function animateDeletion() {
  $('.highlight-deletion').addClass('hidden');
  function remove() {
    $('.highlight-deletion').remove()
  }
  setTimeout(remove, 400);
}

var deleteCols = function deleteCols() {
  $('.highlight-deletion').addClass('reset');
  setTimeout(animateDeletion, 10);
}

var animateInsertion = function animateInsertion() {
  $('.reset').addClass('highlight-insertion');
  $('.reset').removeClass('reset hidden fade');
}

var insertAggregate = function insertAggregate() {
  var col = [
    '<td>Avg GPA</td>',
    '<td rowspan="2">3.65</td>',
    '<td rowspan="3">3.29</td>',
    '<td rowspan="4">3.59</td>',
    '<td rowspan="3">3.66</td>'
  ];
  var indices = [1, 3, 5, 9, 13];
  var start;
  for (var i = 0; i < indices.length; i++) {
    start = indices[i];
    cell = $(col[i]).insertAfter('tr:nth-child(' + start + ') td:last-child');
    cell.addClass('reset hidden');
  }
  setTimeout(animateInsertion, 10);
}

var unhighlightAggregate = function unhighlightAggregate() {
  $('.highlight-insertion').removeClass();
  var highlights = ['highlight-one', 'highlight-two'];
  var indices = [3, 5, 9, 13];
  var start;

  for (var i = 0; i < indices.length; i++) {
    start = indices[i]
    $('tr:nth-child(' + start + ') td:last-child').addClass(highlights[i % 2]);
  }
}

var highlightDeletionCol = function highlightDeletionCol() {
  var numRows = 16;
  var colIdx = 2;
  var excludes = [2, 8];
  for (var i = 1; i < numRows; i++) {
    if (excludes.indexOf(i) === -1) {
      $('tr:nth-child(' + i + ')').children()
                                  .slice(colIdx, colIdx + 1)
                                  .addClass('highlight-deletion');
    }
  }
}

var aggregateRows = function aggregateRows() {
  var groups = [
    { start: 3, length: 2 },
    { start: 5, length: 3 },
    { start: 9, length: 4 },
    { start: 13, length: 3 }
  ];
  var rowIdx;
  for (var i = 0; i < groups.length; i++) {
    for (var j = 1; j < groups[i].length; j++) {
      rowIdx = groups[i].start + j;
      $('tr:nth-child(' + rowIdx + ') td').addClass('squash');
    }
  }
  $('.squash').empty();
  function remove() {
    $('td').removeAttr('rowspan');
    $('.squash').parent().remove();
  }
  setTimeout(remove, 300);
}

var mergeRows = function mergeRows() {
  $('.blank').parent().remove();
}

var animateMerge = function animateMerge() {
  $('.separate').removeClass('separate');
  setTimeout(mergeRows, 400);
}

var highlightYear2 = function highlightYear2() {
  var highlights = ['highlight-one', 'highlight-two'];
  var groups = [
    { start: 2, length: 2 },
    { start: 4, length: 2 }
  ];
  var rowIdx, colIdx = 1;
  var selector;
  for (var i = 0; i < groups.length; i++) {
    for (var j = 0; j < groups[i].length; j++) {
      rowIdx = groups[i].start + j;
      selector = 'tr:nth-child(' + rowIdx + ') td:nth-child(' + colIdx + ')';
      $(selector).addClass(highlights[i % 2]);
    }
  }
}

var highlightAllByYear2 = function highlightAllByYear2() {
  var highlights = ['highlight-one', 'highlight-two'];
  var groups = [
    { start: 2, length: 2 },
    { start: 4, length: 2 }
  ];
  var rowIdx;
  for (var i = 0; i < groups.length; i++) {
    for (var j = 0; j < groups[i].length; j++) {
      rowIdx = groups[i].start + j;
      $('tr:nth-child(' + rowIdx + ')').children().addClass(highlights[i % 2]);
    }
  }
}

var resetTransition = function resetTransition() {
  $('.no-transition').removeClass('no-transition');
}

var mergeCells = function mergeCells() {
  var highlights = ['highlight-one', 'highlight-two'];
  var groups = [
    { start: 2, length: 2 },
    { start: 4, length: 2 }
  ];
  var selector;
  for (var i = 0; i < groups.length; i++) {
    selector = 'tr:nth-child(' + groups[i].start + ') td:first-child';
    $(selector).addClass('empty');
    $(selector).html(function(idx, old) {
      return '<div class="replacer ' + highlights[i % 2] + '">' + old + '</div>';
    });
  }
  function change() {
    $('.empty').addClass('no-transition');
    $('.empty').removeClass('empty');
    $('.replacer').replaceWith(function() {
      return $(this).text();
    });
    var start, length;
    for (var i = 0; i < groups.length; i++) {
      start = groups[i].start;
      length = groups[i].length;
      $('tr:nth-child(' + start + ') td:first-child').attr('rowspan', length);
      for (var j = start + 1; j < start + length; j++) {
        $('tr:nth-child(' + j + ') td:first-child').remove();
      }
    }
    setTimeout(resetTransition, 100);
  }
  function cover() {
    $('.replacer').addClass('cover');
    setTimeout(change, 400);
  }
  setTimeout(cover, 10);
}

var separateRows = function separateRows() {
  var rowIdxs = [1, 3];
  var idx, blank;
  for (var i = 0; i < rowIdxs.length; i++) {
    idx = rowIdxs[i] + i;
    blank = '<tr><td class="blank"></td></tr>';
    $(blank).insertAfter('tr:nth-child(' + idx + ')');
  }
  setTimeout(animateSeparate, 10);
}

var separateCols = function separateCols() {
  var groups = [
    { start: 3, length: 2 },
    { start: 6, length: 2 }
  ];
  var start;
  var blank = '<td class="blank col-blank"></td>';
  $(blank).insertAfter('tr:first-child td:first-child');
  for (var i = 0; i < groups.length; i++) {
    start = groups[i].start;
    length = groups[i].length;
    $(blank).insertAfter('tr:nth-child(' + start + ') td:first-child');
    for (var j = start + 1; j < start + length; j++) {
      $(blank).insertBefore('tr:nth-child(' + j + ') td:first-child');
    }
  }
  function animateSeparateCols() {
    $('.col-blank').addClass('separate-cols');
  }
  setTimeout(animateSeparateCols, 10);
}

var highlightDeletionHeader = function highlightDeletionHeader() {
  var colIdx = 2;
  $('tr:first-child td').slice(colIdx).addClass('highlight-deletion');
}

var deleteHeaders = function deleteHeaders() {
  var colIdx = 2;
  $('tr:first-child td').slice(colIdx).addClass('reset hidden fade');
  function remove() {
    $('.fade').remove();
  }
  setTimeout(remove, 400);
}

var highlightRotate = function highlightRotate() {
  var groups = [
    { start: 3, length: 2 },
    { start: 6, length: 2 }
  ];
  var colIdx = 3;
  var start;
  for (var i = 0; i < groups.length; i++) {
    start = groups[i].start;
    length = groups[i].length;
    $('tr:nth-child(' + start + ') td:nth-child(' + colIdx + ')').addClass('rotate-top');
    $('tr:nth-child(' + (start + length - 1) + ') td:nth-child(' + colIdx + ')').addClass('rotate-bottom');
  }

  function reveal() {
    $('.rotate-top, .rotate-bottom').addClass('reveal');
  }

  setTimeout(reveal, 10);
}

var rotateCells = function rotateCells() {
  var groups = [
    { start: 3, length: 2 },
    { start: 6, length: 2 }
  ];

  function prepareRotate() {
    var start;
    var topLeft, topRight, bottomLeft, bottomRight;
    var topLeftText, topRightText, bottomLeftText, bottomRightText;

    for (var i = 0; i < groups.length; i++) {
      start = groups[i].start;
      topLeft = $('tr:nth-child(' + start + ') td:nth-child(3)');
      topRight = $('tr:nth-child(' + start + ') td:nth-child(4)');
      bottomLeft = $('tr:nth-child(' + (start + 1) + ') td:nth-child(2)');
      bottomRight = $('tr:nth-child(' + (start + 1) + ') td:nth-child(3)');
      topLeftText = topLeft.text();
      topRightText = topRight.text();
      bottomLeftText = bottomLeft.text();
      bottomRightText = bottomRight.text();
      topLeft.text(bottomLeftText);
      topRight.text(topLeftText);
      bottomLeft.text(bottomRightText);
      bottomRight.text(topRightText);
    }
  }
  function rotateText() {
    var t = $(this).text();
    $(this).html('<div class="rotate-text">' + t + '</div>');
  }

  $('.rotate-top').removeClass('rotate-top reveal');
  $('.rotate-bottom').removeClass('rotate-bottom reveal');
  prepareRotate();
  var start, length;
  for (var i = 0; i < groups.length; i++) {
    start = groups[i].start;
    length = groups[i].length;
    $('tr:nth-child(' + start + ')').children().slice(2).each(rotateText);
    for (var j = start + 1; j < start + length; j++) {
      $('tr:nth-child(' + j + ')').children().slice(1).each(rotateText);
    }
  }
}

// awful hardcoding below
var animateRotateCells = function animateRotateCells() {
    var tableOne = '<table class="rotate-table"> \
                 <tbody> \
                   <tr><td class="highlight-one rotate-top reveal">CSE</td><td class="highlight-one">3.65</td></tr> \
                   <tr><td class="highlight-one">ECE</td><td class="highlight-one rotate-bottom reveal">3.29</td></tr> \
                 </tbody> \
               </table>';
    var tableTwo = '<table class="rotate-table"> \
                 <tbody> \
                   <tr><td class="highlight-two rotate-top reveal">CSE</td><td class="highlight-two">3.59</td></tr> \
                   <tr><td class="highlight-two">ECE</td><td class="highlight-two rotate-bottom reveal">3.66</td></tr> \
                 </tbody> \
               </table>';
    var parents = $('.rotate-top')
    $(parents[0]).prepend(tableOne);
    $(parents[1]).prepend(tableTwo);
    var groups = [
      { start: 3, length: 2 },
      { start: 6, length: 2 }
    ];
    var start, length;
    for (var i = 0; i < groups.length; i++) {
        start = groups[i].start;
        length = groups[i].length;
        $('tr:nth-child(' + start + ')').children().slice(2).addClass('invisible no-transition');
        for (var j = start + 1; j < start + length; j++) {
            $('tr:nth-child(' + j + ')').children().slice(1).addClass('invisible no-transition');
        }
    }

    function rotate() {
        $('.rotate-table').addClass('rotate-right');

        function finishRotate() {
            $('.rotate-table').remove();
            $('.invisible').removeClass('invisible');
            rotateCells();
            setTimeout(resetTransition, 100);
        }
        setTimeout(finishRotate, 300);
    }

    setTimeout(rotate, 100);
}

var rotateTextHighlight = function rotateTextHighlight() {
  $('.rotate-text').addClass('rotate-text-highlight');
  function reveal() {
    $('.rotate-text-highlight').addClass('reveal');
  }
  setTimeout(reveal, 10);
}

var unrotateText = function unrotateText() {
  var t = document.createTextNode($(this).text());
  $(t).insertAfter($(this));
  var p = $(this).parent();
  $(this).remove();
  p.hide().show(0);
}

var unrotateCells = function unrotateCells() {
  $('.rotate-text').addClass('rotate-left');
  function unrotate() {
    $('.rotate-text').each(unrotateText);
  }
  setTimeout(unrotate, 300);
}

var highlightDeletionCells = function highlightDeletionCells() {
  var rowIdxs = [3, 6];
  var colIdx = 2;
  for (var i = 0; i < rowIdxs.length; i++) {
    $('tr:nth-child(' + rowIdxs[i] + ')').children()
                                         .slice(colIdx)
                                         .addClass('highlight-deletion');
  }
}

var deleteCells = function deleteCells() {
  var h1 = $('tr:nth-child(3) td:nth-child(3)').clone().removeClass().addClass('reset hidden fade');
  var h2 = $('tr:nth-child(3) td:nth-child(4)').clone().removeClass().addClass('reset hidden fade');
  $('tr:first-child').append(h1).append(h2);
  setTimeout(animateInsertion, 10);

  $('.highlight-deletion').addClass('squash-header');
  function animateDeletionHeaders() {
    $('.squash-header').empty();
    var rowIdxs = [3, 6];
    var t, start;
    for (var i = 0; i < rowIdxs.length; i++) {
      start = rowIdxs[i] - i;
      t = $('tr:nth-child(' + start + ') td:first-child').clone().removeAttr('rowspan');
      $('tr:nth-child(' + start + ')').remove();
      $('tr:nth-child(' + start + ')').prepend(t);
    }
  }
  setTimeout(animateDeletionHeaders, 300);
}

var unhighlightHeader = function unhighlightHeader() {
  $('.highlight-insertion').removeClass();
}

var animateMergeCols = function animateMergeCols() {
  $('.col-blank.separate-cols').removeClass('separate-cols');
  function mergeCols() {
    $('.col-blank').remove();
  }
  setTimeout(mergeCols, 400);
}

var steps = [
  highlightYear,
  highlightAllByYear,
  separateGroups,
  unhighlightCells,
  highlightCourse,
  highlightAllByCourse,
  highlightDeletionCols,
  deleteCols,
  insertAggregate,
  unhighlightAggregate,
  highlightDeletionCol,
  deleteCols,
  aggregateRows,
  animateMerge,
  unhighlightCells,
  highlightYear2,
  highlightAllByYear2,
  mergeCells,
  separateRows,
  separateCols,
  highlightDeletionHeader,
  deleteHeaders,
  highlightRotate,
  animateRotateCells,
  rotateTextHighlight,
  unrotateCells,
  highlightDeletionCells,
  deleteCells,
  unhighlightHeader,
  animateMergeCols,
  animateMerge,
  unhighlightCells,
];

var i = 0;
var intervalID;

var next = function next() {
  if (i < steps.length) {
    console.log('step', i);
    steps[i]();
    i += 1;
  } else if (i === steps.length) {
    clearInterval(intervalID);
  }
}

var play = function play() {
  console.log('starting pivot demo');
  intervalID = window.setInterval(next, 1200);
};

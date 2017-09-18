var field = [
    [
        {type: 'rook', color: 'white'},
        {type: 'knight', color: 'white'},
        {type: 'bishop', color: 'white'},
        {type: 'queen', color: 'white'},
        {type: 'king', color: 'white'},
        {type: 'bishop', color: 'white'},
        {type: 'knight', color: 'white'},
        {type: 'rook', color: 'white'}
    ],
    [
        {type: 'pawn', color: 'white'},
        {type: 'pawn', color: 'white'},
        {type: 'pawn', color: 'white'},
        {type: 'pawn', color: 'white'},
        {type: 'pawn', color: 'white'},
        {type: 'pawn', color: 'white'},
        {type: 'pawn', color: 'white'},
        {type: 'pawn', color: 'white'}
    ],

    [{}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}],

    [
        {type: 'pawn', color: 'black'},
        {type: 'pawn', color: 'black'},
        {type: 'pawn', color: 'black'},
        {type: 'pawn', color: 'black'},
        {type: 'pawn', color: 'black'},
        {type: 'pawn', color: 'black'},
        {type: 'pawn', color: 'black'},
        {type: 'pawn', color: 'black'}
    ],
    [
        {type: 'rook', color: 'black'},
        {type: 'knight', color: 'black'},
        {type: 'bishop', color: 'black'},
        {type: 'queen', color: 'black'},
        {type: 'king', color: 'black'},
        {type: 'bishop', color: 'black'},
        {type: 'knight', color: 'black'},
        {type: 'rook', color: 'black'}
    ]
];

var fieldHTML = '';

for (rowId = 0; rowId < field.length; rowId++) {
    fieldHTML += '<div class="row">';

    for (colId = 0; colId < field[rowId].length; colId++) {
        fieldHTML += '<div class="cell">';
        fieldHTML += '<img src="img/';

        switch (field[rowId][colId].type) {
            case 'rook':
                fieldHTML += 'rook';
                break;
            case 'knight':
                fieldHTML += 'knight';
                break;
            case 'bishop':
                fieldHTML += 'bishop';
                break;
            case 'queen':
                fieldHTML += 'queen';
                break;
            case 'king':
                fieldHTML += 'king';
                break;
            case 'pawn':
                fieldHTML += 'pawn';
                break;
        }

        fieldHTML += '-' + field[rowId][colId].color + '.png">';
        fieldHTML += '</div>';
    }

    fieldHTML += '</div>';
}

document.getElementById('field').innerHTML = fieldHTML;

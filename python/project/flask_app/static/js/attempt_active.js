// API INFORMATION

const url = 'https://chess-puzzles.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5a09955db8msh47fde216f765d5ep1fbeecjsna22838aa082f',
		'X-RapidAPI-Host': 'chess-puzzles.p.rapidapi.com'
	}
};

// GETTING RANDOM PUZZLE AND CONSTRUCTING BOARD
var solution = null
var puzzle_info = null

// ---------------------------------------------------------------------------------------
async function getPuzzle() {
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		console.log("FULL PUZZLE INFORMATION FROM API: ", result.puzzles[0]);
		solution = result.puzzles[0].moves;
		console.log("SOLUTION TO PUZZLE: ", solution);
		const fen = result.puzzles[0].fen
		puzzle_info = convertPuzzle(fen)
		console.log('PUZZLE INFORMATION CONVERTED: ', puzzle_info);
		currentBoard(puzzle_info)

	} catch (error) {
		console.error(error);
	}
}

// CONVERTING API INFORMATION INTO DICTIONARY WITH GRID AND RELEVENT INFORMATION

function isAlpha(str) {
	let regex = /^[a-zA-Z]+$/;
	return regex.test(str);
}
function isNumeric(str) {
	let regex = /^\d+$/;
	return regex.test(str)
}

// ---------------------------------------------------------------------------------------
function convertPuzzle(data) {
	let puzzle_info = {
		"chess_board": [[],[],[],[],[],[],[],[]],
		"active_color": "",
		"w_castle": {
			'q_side': false,
			'k_side': false
		},
		"b_castle": {
			'q_side': false,
			'k_side': false
		},
		"en_passant": ""
	}

	let data_slice = "";
	let space_count = 0;
	let row_count = 0;
	for(let i = 0; i < data.length; i++) {
		if(isNumeric(data[i])) {
			for(let j = 0; j < Number(data[i]); j++) {
				puzzle_info["chess_board"][row_count].push('--');
			}
		}
		else if(isAlpha(data[i])) {
			if(data[i] === data[i].toLowerCase()) {
				puzzle_info["chess_board"][row_count].push(`b${data[i].toUpperCase()}`)
			}
			else if(data[i] === data[i].toUpperCase()) {
				puzzle_info["chess_board"][row_count].push(`w${data[i]}`)
			}
		}
		else if(data[i] === '/') {
			row_count += 1
			continue
		}
		else {
			data_slice = data.slice(i+1)
			break
		}
	}
	for(let j = 0; j < data_slice.length; j++) {
		let square = ""
		if(data_slice[j] === " ") {
			space_count += 1
			continue
		}
		if(space_count === 0) {
			puzzle_info["active_color"] = data_slice[j]
		}
		else if(space_count === 1) {
			if(data_slice[j] === 'K') {
				puzzle_info["w_castle"]["k_side"] = true
			}
			else if(data_slice[j] === 'Q') {
				puzzle_info["w_castle"]["q_side"] = true
			}
			else if(data_slice[j] === 'k') {
				puzzle_info["b_castle"]["k_side"] = true
			}
			else if(data_slice[j] === 'q') {
				puzzle_info["b_castle"]["q_side"] = true
			}
		}
		else if(space_count === 2) {
			if(data_slice[j] !== '-') {
				square += data_slice[j]
				if(square.length > 1) {
					puzzle_info["en_passant"] = square
				}
			}
			else {
				puzzle_info["en_passant"] = data_slice[j]
				break
			}
		}
	}
	return puzzle_info
}

// ---------------------------------------------------------------------------------------
// USES "chess_board" FROM PUZZLE CONVERTER TO CONSTRUCT CURRENT POSITION IN HTML

function currentBoard(data) {
	let chess_board = "";
	for(let i = 0, j = 7; i < 8; i++, j--) {
		if(data["active_color"] == "w") {
			// give each square an id name of it's position on the board
			if(i % 2 == 0) {
				chess_board += `<tr><td onclick="movePiece(this)" id="${i}0"><img src="static//css/images/${data['chess_board'][i][0]}.png" alt=""></td><td onclick="movePiece(this)" id="${i}1" class="green"><img src="static//css/images/${data['chess_board'][i][1]}.png" alt=""></td><td onclick="movePiece(this)" id="${i}2"><img src="static//css/images/${data['chess_board'][i][2]}.png" alt=""></td><td onclick="movePiece(this)" id="${i}3" class="green"><img src="static//css/images/${data['chess_board'][i][3]}.png" alt=""></td><td onclick="movePiece(this)" id="${i}4"><img src="static//css/images/${data['chess_board'][i][4]}.png" alt=""></td><td onclick="movePiece(this)" id="${i}5" class="green"><img src="static//css/images/${data['chess_board'][i][5]}.png" alt=""></td><td onclick="movePiece(this)" id="${i}6"><img src="static//css/images/${data['chess_board'][i][6]}.png" alt=""></td><td onclick="movePiece(this)" id="${i}7" class="green"><img src="static//css/images/${data['chess_board'][i][7]}.png" alt=""></td></tr>`;
			}
			else {
				chess_board += `<tr><td onclick="movePiece(this)" id="${i}0" class="green"><img src="static//css/images/${data['chess_board'][i][0]}.png" alt=""></td><td onclick="movePiece(this)" id="${i}1"><img src="static//css/images/${data['chess_board'][i][1]}.png" alt=""></td><td onclick="movePiece(this)" id="${i}2" class="green"><img src="static//css/images/${data['chess_board'][i][2]}.png" alt=""></td><td onclick="movePiece(this)" id="${i}3"><img src="static//css/images/${data['chess_board'][i][3]}.png" alt=""></td><td onclick="movePiece(this)" id="${i}4" class="green"><img src="static//css/images/${data['chess_board'][i][4]}.png" alt=""></td><td onclick="movePiece(this)" id="${i}5"><img src="static//css/images/${data['chess_board'][i][5]}.png" alt=""></td><td onclick="movePiece(this)" id="${i}6" class="green"><img src="static//css/images/${data['chess_board'][i][6]}.png" alt=""></td><td onclick="movePiece(this)" id="${i}7"><img src="static//css/images/${data['chess_board'][i][7]}.png" alt=""></td></tr>`;
			}
		}
		else {
			if(i % 2 == 0) {
				chess_board += `<tr><td onclick="movePiece(this)" id="${j}7"><img src="static//css/images/${data['chess_board'][j][7]}.png" alt=""></td><td onclick="movePiece(this)" id="${j}6" class="green"><img src="static//css/images/${data['chess_board'][j][6]}.png" alt=""></td><td onclick="movePiece(this)" id="${j}5"><img src="static//css/images/${data['chess_board'][j][5]}.png" alt=""></td><td onclick="movePiece(this)" id="${j}4" class="green"><img src="static//css/images/${data['chess_board'][j][4]}.png" alt=""></td><td onclick="movePiece(this)" id="${j}3"><img src="static//css/images/${data['chess_board'][j][3]}.png" alt=""></td><td onclick="movePiece(this)" id="${j}2" class="green"><img src="static//css/images/${data['chess_board'][j][2]}.png" alt=""></td><td onclick="movePiece(this)" id="${j}1"><img src="static//css/images/${data['chess_board'][j][1]}.png" alt=""></td><td onclick="movePiece(this)" id="${j}0" class="green"><img src="static//css/images/${data['chess_board'][j][0]}.png" alt=""></td></tr>`;
			}
			else {
				chess_board += `<tr><td onclick="movePiece(this)" id="${j}7" class="green"><img src="static//css/images/${data['chess_board'][j][7]}.png" alt=""></td><td onclick="movePiece(this)" id="${j}6"><img src="static//css/images/${data['chess_board'][j][6]}.png" alt=""></td><td onclick="movePiece(this)" id="${j}5" class="green"><img src="static//css/images/${data['chess_board'][j][5]}.png" alt=""></td><td onclick="movePiece(this)" id="${j}4"><img src="static//css/images/${data['chess_board'][j][4]}.png" alt=""></td><td onclick="movePiece(this)" id="${j}3" class="green"><img src="static//css/images/${data['chess_board'][j][3]}.png" alt=""></td><td onclick="movePiece(this)" id="${j}2"><img src="static//css/images/${data['chess_board'][j][2]}.png" alt=""></td><td onclick="movePiece(this)" id="${j}1" class="green"><img src="static//css/images/${data['chess_board'][j][1]}.png" alt=""></td><td onclick="movePiece(this)" id="${j}0"><img src="static//css/images/${data['chess_board'][j][0]}.png" alt=""></td></tr>`;
			}
		}
	}
	document.getElementById('board').innerHTML = chess_board
}

// FETCHES AND CONSTRUCTS STARTING PUZZLE ON PAGE LOAD

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// getPuzzle()

var puzzles = {
	puzzleid: "HxxIU",
	fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 0",
	moves: ["c3d5","e6d5","c2c8","f8c8"],
	rating: 1683,
	ratingdeviation: 74,
	themes: ["advantage","hangingPiece","middlegame","short"]
}

puzzle_info = convertPuzzle(puzzles["fen"])
console.log(puzzle_info)

currentBoard(puzzle_info)
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// SETTING VARIABLES EQUAL TO SQUARE'S INNER HTML FOR CONVENIENCE 

// const blank = '<img src="static//css/images/--.png" alt="">'
// const bP = '<img src="static//css/images/bP.png" alt="">'
// const bR = '<img src="static//css/images/bR.png" alt="">'
// const bN = '<img src="static//css/images/bN.png" alt="">'
// const bB = '<img src="static//css/images/bB.png" alt="">'
// const bK = '<img src="static//css/images/bK.png" alt="">'
// const bQ = '<img src="static//css/images/bQ.png" alt="">'
// const wP = '<img src="static//css/images/wP.png" alt="">'
// const wR = '<img src="static//css/images/wR.png" alt="">'
// const wN = '<img src="static//css/images/wN.png" alt="">'
// const wB = '<img src="static//css/images/wB.png" alt="">'
// const wK = '<img src="static//css/images/wK.png" alt="">'
// const wQ = '<img src="static//css/images/wQ.png" alt="">'



var click_count = 0
var start_sq = ""
var start_piece = ""
var start_r = null
var start_c = null
var end_sq = ""
var end_piece = ""
var end_r = null
var end_c = null
var possible_moves = null
var w_castle = null
var b_castle = null
var en_passant = null
var en_passant_count = 0


// ---------------------------------------------------------------------------------------
// MOVES PIECES

function movePiece(element) {
	// logging clicks and loading info
	click_count += 1
	w_castle = puzzle_info["w_castle"]
	b_castle = puzzle_info["b_castle"]
	en_passant = puzzle_info["en_passant"]
	// let reset_puzzle = puzzle_info
	let test_puzzle = JSON.parse(JSON.stringify(puzzle_info))
	let cool_puzzle = {...puzzle_info}
	let king_check = true

	// logging first square and piece
	if(click_count === 1) {
		start_sq = element.id
		start_r = Number(start_sq[0])
		start_c = Number(start_sq[1])
		start_piece = test_puzzle["chess_board"][start_r][start_c]
		console.log("START SQUARE, START PIECE: ", start_sq, start_piece)
		console.log("START PIECE COLOR: ", start_piece[0])
		king_check=false


		// checking what moves are possible
		if(possibleMoves(start_sq, start_piece, test_puzzle)) {
			possible_moves = possibleMoves(start_sq, start_piece, test_puzzle)

			// changing color of possible move squares
			for(let i = 0; i < possible_moves.length; i++) {
				let temp = document.getElementById(possible_moves[i])
				temp.style.backgroundColor = "rgb(255, 255, 145)"
			}
			console.log("POSSIBLE MOVES: ", possible_moves)
		}
		else {
			console.log("NO POSSIBLE MOVES")
			click_count = 0
			start_sq = ""
			start_piece = ""
		}
	}
	// logging end square and piece 
	else {
		end_sq = element.id
		end_r = Number(end_sq[0])
		end_c = Number(end_sq[1])
		end_piece = test_puzzle["chess_board"][end_r][end_c]
	}
	
	// making move if there have been end square is in possible moves list
	if(click_count === 2 && possible_moves.includes(end_sq)) {
		// checking for castling (w)
		if (start_piece === 'wK' && (end_sq === '76' || end_sq === '72')) {
			if(end_sq === '76') {
				test_puzzle["chess_board"][7][7] = '--'
				test_puzzle["chess_board"][7][5] = 'wR'
				test_puzzle["w_castle"]["q_side"] = false
				test_puzzle["w_castle"]["k_side"] = false
			}
			else {
				test_puzzle["chess_board"][7][0] = '--'
				test_puzzle["chess_board"][7][3] = 'wR'
				test_puzzle["w_castle"]["q_side"] = false
				test_puzzle["w_castle"]["k_side"] = false
			}
		}
		// checking for castling (b)
		else if (start_piece === 'bK' && (end_sq === '06' || end_sq === '02')) {
			if(end_sq === '06') {
				test_puzzle["chess_board"][0][7] = '--'
				test_puzzle["chess_board"][0][5] = 'bR'
				test_puzzle["b_castle"]["q_side"] = false
				test_puzzle["b_castle"]["k_side"] = false
			}
			else {
				test_puzzle["chess_board"][0][0] = '--'
				test_puzzle["chess_board"][0][3] = 'bR'
				test_puzzle["b_castle"]["q_side"] = false
				test_puzzle["b_castle"]["k_side"] = false
			}
		}
		// setting en passant if necessary
		else if (start_piece[1] === 'P' && (start_r - end_r === 2 || start_r - end_r === -2)) {
			if (start_piece[0] === 'w') {
				test_puzzle["en_passant"] = `${end_r+1}${end_c}`
				console.log("EN PASSANT SET TO: ", test_puzzle["en_passant"])
			}
			else {
				test_puzzle["en_passant"] = `${end_r-1}${end_c}`
				console.log("EN PASSANT SET TO: ", test_puzzle["en_passant"])
			}
		}
		// checking for en passant (w and b)
		else if (start_piece[1] === 'P' && end_sq === en_passant) {
			if(start_piece[0] === 'w') {
				test_puzzle["chess_board"][end_r + 1][end_c] = '--'
			}
			else {
				test_puzzle["chess_board"][end_r - 1][end_c] = '--'
			}
		}
		test_puzzle["chess_board"][start_r][start_c] = '--'
		test_puzzle["chess_board"][end_r][end_c] = start_piece

		// checking if king is in check before setting puzzle_info equal to test_puzzle 
		if(!kingCheck(start_piece[0], test_puzzle)) {

			puzzle_info = JSON.parse(JSON.stringify(test_puzzle))
			console.log("PUZZLE INFO HAS BEEN SET EQUAL TO TEST PUZZLE")
			currentBoard(puzzle_info)
			console.log('UPDATED BOARD: ', puzzle_info["chess_board"])
			king_check=false
		}
	}

	console.log('is king in check?', king_check)
	// resetting color of squares if second click is not in possible moves list
	if ((click_count === 2 && !possible_moves.includes(end_sq)) || king_check === true) {
		console.log('reset square color actived')
		console.log(puzzle_info)
		console.log(`Are they the same?? ${puzzle_info==test_puzzle}`)
		console.log("puzzle info :", puzzle_info["chess_board"], "test puzzle:", test_puzzle["chess_board"], cool_puzzle["chess_board"])
		currentBoard(puzzle_info)
	}

	// resetting info once there has been 2 clicks
	if(click_count > 1 || king_check === true) {
		console.log('reset info activated')
		click_count = 0
		start_sq = ""
		start_piece = ""
		end_sq = ""
		end_piece = ""
		possible_moves = null
		if(en_passant !== '-') {
			en_passant_count += 1
		}
		if(en_passant_count > 0) {
			puzzle_info["en_passant"] = '-'
			en_passant_count = 0
		}
	}
}
// ---------------------------------------------------------------------------------------
// CHECKS WHETHER OR NOT PLAYER'S KING IS IN CHECK BEFORE MAKING MOVE
function kingCheck(color, test_puzzle) {
	let king_square = []
	let in_check = false

	// finding king square
	for(i=0; i < 8; i++) {
		for(j=0; j < 8; j++) {
			if (test_puzzle["chess_board"][i][j] === `${color}K`) {
				king_square = [i, j]
			}
		}
	}
	// checking if any opposing piece is attacking king square
	for(i=0; i<8; i++) {
		for(j=0; j<8; j++) {
			if (test_puzzle["chess_board"][i][j][0] !== color) {
				let attack_squares = possibleMoves(`${i}${j}`, test_puzzle["chess_board"][i][j], test_puzzle)
				if(attack_squares) {
					if(attack_squares.includes(`${king_square[0]}${king_square[1]}`)) {
						in_check = true
					}
				}
			}
		}
	}
	console.log("KING CHECK RAN")
	return in_check
}


// ---------------------------------------------------------------------------------------
// CHECKS WHAT end_sq's ARE LEGAL MOVES BASED ON start_sq

function possibleMoves(square, piece, test_puzzle) {
	let possible_moves = []
	let r = Number(square[0])
	let c = Number(square[1])

	// blank square
	if(piece === '--') {
		return false
	}

	// white pawn
	else if(piece === 'wP') {
		// one foward
		if(test_puzzle["chess_board"][r-1][c] === '--') {
			possible_moves.push(`${r-1}${c}`)
		}
		// two forward
		if(r === 6 && test_puzzle["chess_board"][r-2][c] === '--') {
			possible_moves.push(`${r-2}${c}`)
		}
		// left and right captures (including en passant)
		if(c !== 7 && (test_puzzle["chess_board"][r-1][c+1][0] === 'b' || en_passant === `${r-1}${c+1}`)) {
			console.log("SEEING IF EN PASSANT AND SQUARE MATCH", en_passant, `${r-1}${c+1}`)
			possible_moves.push(`${r-1}${c+1}`)
		}
		if(c !== 0 && (test_puzzle["chess_board"][r-1][c-1][0] === 'b' || en_passant === `${r-1}${c-1}`)) {
			console.log("SEEING IF EN PASSANT AND SQUARE MATCH", en_passant, `${r-1}${c-1}`)
			possible_moves.push(`${r-1}${c-1}`)
		}

		if(possible_moves.length > 0) {
			return possible_moves
		}
	}

	// black pawn
	else if (piece === 'bP') {
		// one foward
		if(test_puzzle["chess_board"][r+1][c] === '--') {
			possible_moves.push(`${r+1}${c}`)
		}
		// two forward
		if(r === 1 && test_puzzle["chess_board"][r+2][c] === '--') {
			possible_moves.push(`${r+2}${c}`)
		}
		// left and right captures (including en passant)
		if(c !== 7 && (test_puzzle["chess_board"][r+1][c+1][0] === 'w' || en_passant === `${r+1}${c+1}`)) {
			console.log("SEEING IF EN PASSANT AND SQUARE MATCH", en_passant, `${r+1}${c+1}`)
			possible_moves.push(`${r+1}${c+1}`)
		}
		if(c !== 0 && (test_puzzle["chess_board"][r+1][c-1][0] === 'w' || en_passant === `${r+1}${c-1}`)) {
			console.log("SEEING IF EN PASSANT AND SQUARE MATCH", en_passant, `${r+1}${c-1}`)
			possible_moves.push(`${r+1}${c-1}`)
		}

		if(possible_moves.length > 0) {
			return possible_moves
		}
	}

	// white knight
	else if (piece === 'wN') {
		// all checks making sure end square is on board, and either contains black piece or is vacant
		if (r + 1 < 8 && c - 2 >= 0) {
			if (test_puzzle["chess_board"][r+1][c-2] === '--' || test_puzzle["chess_board"][r+1][c-2][0] === 'b') {
				possible_moves.push(`${r+1}${c-2}`)
			}
		}
		if (r + 2 < 8 && c - 1 >= 0) {
			if (test_puzzle["chess_board"][r+2][c-1] === '--' || test_puzzle["chess_board"][r+2][c-1][0] === 'b') {
				possible_moves.push(`${r+2}${c-1}`)
			}
		}
		if (r + 1 < 8 && c + 2 < 8) {
			if (test_puzzle["chess_board"][r+1][c+2] === '--' || test_puzzle["chess_board"][r+1][c+2][0] === 'b') {
				possible_moves.push(`${r+1}${c+2}`)
			}
		}
		if (r + 2 < 8 && c + 1 < 8) {
			if (test_puzzle["chess_board"][r+2][c+1] === '--' || test_puzzle["chess_board"][r+2][c+1][0] === 'b') {
				possible_moves.push(`${r+2}${c+1}`)
			}
		}
		if (r - 1 >= 0 && c - 2 >= 0) {
			if (test_puzzle["chess_board"][r-1][c-2] === '--' || test_puzzle["chess_board"][r-1][c-2][0] === 'b') {
				possible_moves.push(`${r-1}${c-2}`)
			}
		}
		if (r - 2 >= 0 && c - 1 >= 0) {
			if (test_puzzle["chess_board"][r-2][c-1] === '--' || test_puzzle["chess_board"][r-2][c-1][0] === 'b') {
				possible_moves.push(`${r-2}${c-1}`)
			}
		}
		if (r - 2 >= 0 && c + 1 < 8) {
			if (test_puzzle["chess_board"][r-2][c+1] === '--' || test_puzzle["chess_board"][r-2][c+1][0] === 'b') {
				possible_moves.push(`${r-2}${c+1}`)
			}
		}
		if (r - 1 >= 0 && c + 2 < 8) {
			if (test_puzzle["chess_board"][r-1][c+2] === '--' || test_puzzle["chess_board"][r-1][c+2][0] === 'b') {
				possible_moves.push(`${r-1}${c+2}`)
			}
		}
		if (possible_moves.length > 0) {
			return possible_moves
		}
	}

	// black knight
	else if (piece === 'bN') {
		// all checks making sure end square is on board, and either contains white piece or is vacant
		if (r + 1 < 8 && c - 2 >= 0) {
			if (test_puzzle["chess_board"][r+1][c-2] === '--' || test_puzzle["chess_board"][r+1][c-2][0] === 'w') {
				possible_moves.push(`${r+1}${c-2}`)
			}
		}
		if (r + 2 < 8 && c - 1 >= 0) {
			if (test_puzzle["chess_board"][r+2][c-1] === '--' || test_puzzle["chess_board"][r+2][c-1][0] === 'w') {
				possible_moves.push(`${r+2}${c-1}`)
			}
		}
		if (r + 1 < 8 && c + 2 < 8) {
			if (test_puzzle["chess_board"][r+1][c+2] === '--' || test_puzzle["chess_board"][r+1][c+2][0] === 'w') {
				possible_moves.push(`${r+1}${c+2}`)
			}
		}
		if (r + 2 < 8 && c + 1 < 8) {
			if (test_puzzle["chess_board"][r+2][c+1] === '--' || test_puzzle["chess_board"][r+2][c+1][0] === 'w') {
				possible_moves.push(`${r+2}${c+1}`)
			}
		}
		if (r - 1 >= 0 && c - 2 >= 0) {
			if (test_puzzle["chess_board"][r-1][c-2] === '--' || test_puzzle["chess_board"][r-1][c-2][0] === 'w') {
				possible_moves.push(`${r-1}${c-2}`)
			}
		}
		if (r - 2 >= 0 && c - 1 >= 0) {
			if (test_puzzle["chess_board"][r-2][c-1] === '--' || test_puzzle["chess_board"][r-2][c-1][0] === 'w') {
				possible_moves.push(`${r-2}${c-1}`)
			}
		}
		if (r - 2 >= 0 && c + 1 < 8) {
			if (test_puzzle["chess_board"][r-2][c+1] === '--' || test_puzzle["chess_board"][r-2][c+1][0] === 'w') {
				possible_moves.push(`${r-2}${c+1}`)
			}
		}
		if (r - 1 >= 0 && c + 2 < 8) {
			if (test_puzzle["chess_board"][r-1][c+2] === '--' || test_puzzle["chess_board"][r-1][c+2][0] === 'w') {
				possible_moves.push(`${r-1}${c+2}`)
			}
		}
		if (possible_moves.length > 0) {
			return possible_moves
		}
	}

	// white bishop 
	else if (piece === 'wB') {
		let clearPath1 = true
		let clearPath2 = true
		let clearPath3 = true
		let clearPath4 = true
		// mapping every clear square in all four directions going outward from start square
		for(let i = 1; i < 8; i++) {
			// checking that path is still clear and i isn't large enough to go outside bounds of chess board
			if(clearPath1 && i <= r && i <= c) {
				// checking if square is vacant
				if(test_puzzle["chess_board"][r-i][c-i] === '--') {
					possible_moves.push(`${r-i}${c-i}`)
				}
				// checking if square is occupied by enemy piece, adding it as possible move and closing path
				else if (test_puzzle["chess_board"][r-i][c-i][0] === 'b') {
					possible_moves.push(`${r-i}${c-i}`)
					clearPath1 = false
				}
				// closes path and does not add square as possible move if occupied by friendly piece
				else {
					clearPath1 = false
				}
			}
			if(clearPath2 && i <= r && c+i < 8) {
				if(test_puzzle["chess_board"][r-i][c+i] === '--') {
					possible_moves.push(`${r-i}${c+i}`)
				}
				else if (test_puzzle["chess_board"][r-i][c+i][0] === 'b') {
					possible_moves.push(`${r-i}${c+i}`)
					clearPath2 = false
				}
				else {
					clearPath2 = false
				}
			}
			if(clearPath3 && r+i < 8 && c+i < 8) {
				if(test_puzzle["chess_board"][r+i][c+i] === '--') {
					possible_moves.push(`${r+i}${c+i}`)
				}
				else if (test_puzzle["chess_board"][r+i][c+i][0] === 'b') {
					possible_moves.push(`${r+i}${c+i}`)
					clearPath3 = false
				}
				else {
					clearPath3 = false
				}
			}
			if(clearPath4 && r+i < 8 && i <= c) {
				if(test_puzzle["chess_board"][r+i][c-i] === '--') {
					possible_moves.push(`${r+i}${c-i}`)
				}
				else if (test_puzzle["chess_board"][r+i][c-i][0] === 'b') {
					possible_moves.push(`${r+i}${c-i}`)
					clearPath4 = false
				}
				else {
					clearPath4 = false
				}
			}
		}
		if (possible_moves.length > 0) {
			return possible_moves
		}
	}

	// black bishop 
	else if (piece === 'bB') {
		let clearPath1 = true
		let clearPath2 = true
		let clearPath3 = true
		let clearPath4 = true
		// mapping every clear square in all four directions going outward from start square
		for(let i = 1; i < 8; i++) {
			// checking that path is still clear and i isn't large enough to go outside bounds of chess board
			if(clearPath1 && i <= r && i <= c) {
				// checking if square is vacant
				if(test_puzzle["chess_board"][r-i][c-i] === '--') {
					possible_moves.push(`${r-i}${c-i}`)
				}
				// checking if square is occupied by enemy piece, adding it as possible move and closing path
				else if (test_puzzle["chess_board"][r-i][c-i][0] === 'w') {
					possible_moves.push(`${r-i}${c-i}`)
					clearPath1 = false
				}
				// closes path and does not add square as possible move if occupied by friendly piece
				else {
					clearPath1 = false
				}
			}
			if(clearPath2 && i <= r && c+i < 8) {
				if(test_puzzle["chess_board"][r-i][c+i] === '--') {
					possible_moves.push(`${r-i}${c+i}`)
				}
				else if (test_puzzle["chess_board"][r-i][c+i][0] === 'w') {
					possible_moves.push(`${r-i}${c+i}`)
					clearPath2 = false
				}
				else {
					clearPath2 = false
				}
			}
			if(clearPath3 && r+i < 8 && c+i < 8) {
				if(test_puzzle["chess_board"][r+i][c+i] === '--') {
					possible_moves.push(`${r+i}${c+i}`)
				}
				else if (test_puzzle["chess_board"][r+i][c+i][0] === 'w') {
					possible_moves.push(`${r+i}${c+i}`)
					clearPath3 = false
				}
				else {
					clearPath3 = false
				}
			}
			if(clearPath4 && r+i < 8 && i <= c) {
				if(test_puzzle["chess_board"][r+i][c-i] === '--') {
					possible_moves.push(`${r+i}${c-i}`)
				}
				else if (test_puzzle["chess_board"][r+i][c-i][0] === 'w') {
					possible_moves.push(`${r+i}${c-i}`)
					clearPath4 = false
				}
				else {
					clearPath4 = false
				}
			}
		}
		if (possible_moves.length > 0) {
			return possible_moves
		}
	}

	// white rook
	else if (piece === 'wR') {
		let clearPath1 = true
		let clearPath2 = true
		let clearPath3 = true
		let clearPath4 = true
		// mapping every clear square in all four directions going outward from start square
		for(let i = 1; i < 8; i++) {
			// checking that path is still clear and i isn't large enough to go outside bounds of chess board
			if(clearPath1 && r+i < 8) {
				// checking if square is vacant
				if(test_puzzle["chess_board"][r+i][c] === '--') {
					possible_moves.push(`${r+i}${c}`)
				}
				// checking if square is occupied by enemy piece, adding it as possible move and closing path
				else if (test_puzzle["chess_board"][r+i][c][0] === 'b') {
					possible_moves.push(`${r+i}${c}`)
					clearPath1 = false
				}
				// closes path and does not add square as possible move if occupied by friendly piece
				else {
					clearPath1 = false
				}
			}
			if(clearPath2 && r >= i) {
				if(test_puzzle["chess_board"][r-i][c] === '--') {
					possible_moves.push(`${r-i}${c}`)
				}
				else if (test_puzzle["chess_board"][r-i][c][0] === 'b') {
					possible_moves.push(`${r-i}${c}`)
					clearPath2 = false
				}
				else {
					clearPath2 = false
				}
			}
			if(clearPath3 && c+i < 8) {
				if(test_puzzle["chess_board"][r][c+i] === '--') {
					possible_moves.push(`${r}${c+i}`)
				}
				else if (test_puzzle["chess_board"][r][c+i][0] === 'b') {
					possible_moves.push(`${r}${c+i}`)
					clearPath3 = false
				}
				else {
					clearPath3 = false
				}
			}
			if(clearPath4 && c >= i) {
				if(test_puzzle["chess_board"][r][c-i] === '--') {
					possible_moves.push(`${r}${c-i}`)
				}
				else if (test_puzzle["chess_board"][r][c-i][0] === 'b') {
					possible_moves.push(`${r}${c-i}`)
					clearPath4 = false
				}
				else {
					clearPath4 = false
				}
			}
		}
		if (possible_moves.length > 0) {
			return possible_moves
		}
	}

	// black rook
	else if (piece === 'bR') {
		let clearPath1 = true
		let clearPath2 = true
		let clearPath3 = true
		let clearPath4 = true
		// mapping every clear square in all four directions going outward from start square
		for(let i = 1; i < 8; i++) {
			// checking that path is still clear and i isn't large enough to go outside bounds of chess board
			if(clearPath1 && r+i < 8) {
				// checking if square is vacant
				if(test_puzzle["chess_board"][r+i][c] === '--') {
					possible_moves.push(`${r+i}${c}`)
				}
				// checking if square is occupied by enemy piece, adding it as possible move and closing path
				else if (test_puzzle["chess_board"][r+i][c][0] === 'w') {
					possible_moves.push(`${r+i}${c}`)
					clearPath1 = false
				}
				// closes path and does not add square as possible move if occupied by friendly piece
				else {
					clearPath1 = false
				}
			}
			if(clearPath2 && r >= i) {
				if(test_puzzle["chess_board"][r-i][c] === '--') {
					possible_moves.push(`${r-i}${c}`)
				}
				else if (test_puzzle["chess_board"][r-i][c][0] === 'w') {
					possible_moves.push(`${r-i}${c}`)
					clearPath2 = false
				}
				else {
					clearPath2 = false
				}
			}
			if(clearPath3 && c+i < 8) {
				if(test_puzzle["chess_board"][r][c+i] === '--') {
					possible_moves.push(`${r}${c+i}`)
				}
				else if (test_puzzle["chess_board"][r][c+i][0] === 'w') {
					possible_moves.push(`${r}${c+i}`)
					clearPath3 = false
				}
				else {
					clearPath3 = false
				}
			}
			if(clearPath4 && c >= i) {
				if(test_puzzle["chess_board"][r][c-i] === '--') {
					possible_moves.push(`${r}${c-i}`)
				}
				else if (test_puzzle["chess_board"][r][c-i][0] === 'w') {
					possible_moves.push(`${r}${c-i}`)
					clearPath4 = false
				}
				else {
					clearPath4 = false
				}
			}
		}
		if (possible_moves.length > 0) {
			return possible_moves
		}
	}

	// queen
	else if (piece[1] === 'Q') {
		let clearPath1 = true
		let clearPath2 = true
		let clearPath3 = true
		let clearPath4 = true
		let clearPath5 = true
		let clearPath6 = true
		let clearPath7 = true
		let clearPath8 = true
		// mapping every clear square horizontally and vertically from start square
		for(let i = 1; i < 8; i++) {
			// checking that path is still clear and i isn't large enough to go outside bounds of chess board
			if(clearPath1 && r+i < 8) {
				// checking if square is vacant
				if(test_puzzle["chess_board"][r+i][c] === '--') {
					possible_moves.push(`${r+i}${c}`)
				}
				// checking if square is occupied by enemy piece, adding it as possible move and closing path
				else if (test_puzzle["chess_board"][r+i][c][0] === 'w' && piece[0] === 'b') {
					possible_moves.push(`${r+i}${c}`)
					clearPath1 = false
				}
				else if (test_puzzle["chess_board"][r+i][c][0] === 'b' && piece[0] === 'w') {
					possible_moves.push(`${r+i}${c}`)
					clearPath1 = false
				}
				// closes path and does not add square as possible move if occupied by friendly piece
				else {
					clearPath1 = false
				}
			}
			if(clearPath2 && r >= i) {
				if(test_puzzle["chess_board"][r-i][c] === '--') {
					possible_moves.push(`${r-i}${c}`)
				}
				else if (test_puzzle["chess_board"][r-i][c][0] === 'w' && piece[0] === 'b') {
					possible_moves.push(`${r-i}${c}`)
					clearPath2 = false
				}
				else if (test_puzzle["chess_board"][r-i][c][0] === 'b' && piece[0] === 'w') {
					possible_moves.push(`${r-i}${c}`)
					clearPath2 = false
				}
				else {
					clearPath2 = false
				}
			}
			if(clearPath3 && c >= i) {
				if(test_puzzle["chess_board"][r][c-i] === '--') {
					possible_moves.push(`${r}${c-i}`)
				}
				else if (test_puzzle["chess_board"][r][c-i][0] === 'w' && piece[0] === 'b') {
					possible_moves.push(`${r}${c-i}`)
					clearPath3 = false
				}
				else if (test_puzzle["chess_board"][r][c-i][0] === 'b' && piece[0] === 'w') {
					possible_moves.push(`${r}${c-i}`)
					clearPath3 = false
				}
				else {
					clearPath3 = false
				}
			}
			if(clearPath4 && c+i < 8) {
				if(test_puzzle["chess_board"][r][c+i] === '--') {
					possible_moves.push(`${r}${c+i}`)
				}
				else if (test_puzzle["chess_board"][r][c+i][0] === 'w' && piece[0] === 'b') {
					possible_moves.push(`${r}${c+i}`)
					clearPath4 = false
				}
				else if (test_puzzle["chess_board"][r][c+i][0] === 'b' && piece[0] === 'w') {
					possible_moves.push(`${r}${c+i}`)
					clearPath3 = false
				}
				else {
					clearPath4 = false
				}
			}
			// mapping every square horizontally and vertically from start square
			if(clearPath5 && i <= r && c+i < 8) {
				if(test_puzzle["chess_board"][r-i][c+i] === '--') {
					possible_moves.push(`${r-i}${c+i}`)
				}
				else if (test_puzzle["chess_board"][r-i][c+i][0] === 'w' && piece[0] === 'b') {
					possible_moves.push(`${r-i}${c+i}`)
					clearPath5 = false
				}
				else if (test_puzzle["chess_board"][r-i][c+i][0] === 'b' && piece[0] === 'w') {
					possible_moves.push(`${r-i}${c+i}`)
					clearPath5 = false
				}
				else {
					clearPath5 = false
				}
			}
			if(clearPath6 && i <= r && i <= c) {
				if(test_puzzle["chess_board"][r-i][c-i] === '--') {
					possible_moves.push(`${r-i}${c-i}`)
				}
				else if (test_puzzle["chess_board"][r-i][c-i][0] === 'w' && piece[0] === 'b') {
					possible_moves.push(`${r-i}${c-i}`)
					clearPath6 = false
				}
				else if (test_puzzle["chess_board"][r-i][c-i][0] === 'b' && piece[0] === 'w') {
					possible_moves.push(`${r-i}${c-i}`)
					clearPath6 = false
				}
				else {
					clearPath6 = false
				}
			}
			if(clearPath7 && r+i < 8 && i <= c) {
				if(test_puzzle["chess_board"][r+i][c-i] === '--') {
					possible_moves.push(`${r+i}${c-i}`)
				}
				else if (test_puzzle["chess_board"][r+i][c-i][0] === 'w' && piece[0] === 'b') {
					possible_moves.push(`${r+i}${c-i}`)
					clearPath7 = false
				}
				else if (test_puzzle["chess_board"][r+i][c-i][0] === 'b' && piece[0] === 'w') {
					possible_moves.push(`${r+i}${c-i}`)
					clearPath7 = false
				}
				else {
					clearPath7 = false
				}
			}
			if(clearPath8 && r+i < 8 && c+i < 8) {
				if(test_puzzle["chess_board"][r+i][c+i] === '--') {
					possible_moves.push(`${r+i}${c+i}`)
				}
				else if (test_puzzle["chess_board"][r+i][c+i][0] === 'w' && piece[0] === 'b') {
					possible_moves.push(`${r+i}${c+i}`)
					clearPath8 = false
				}
				else if (test_puzzle["chess_board"][r+i][c+i][0] === 'b' && piece[0] === 'w') {
					possible_moves.push(`${r+i}${c+i}`)
					clearPath8 = false
				}
				else {
					clearPath8 = false
				}
			}
		}
		if (possible_moves.length > 0) {
			return possible_moves
		}
	}
		
	// king
	else if (piece[1] === 'K') {
		// mapping every clear square adjacent to king
		// above (white's perspective)
		if (r >= 1) {
			if(test_puzzle["chess_board"][r-1][c] === '--') {
				possible_moves.push(`${r-1}${c}`)
			}
			else if(test_puzzle["chess_board"][r-1][c][0] === 'w' && piece[0] === 'b') {
				possible_moves.push(`${r-1}${c}`)
			}
			else if(test_puzzle["chess_board"][r-1][c][0] === 'b' && piece[0] === 'w') {
				possible_moves.push(`${r-1}${c}`)
			}
		}
		// below
		if (r <= 6) {
			if(test_puzzle["chess_board"][r+1][c] === '--') {
				possible_moves.push(`${r+1}${c}`)
			}
			else if(test_puzzle["chess_board"][r+1][c][0] === 'w' && piece[0] === 'b') {
				possible_moves.push(`${r+1}${c}`)
			}
			else if(test_puzzle["chess_board"][r+1][c][0] === 'b' && piece[0] === 'w') {
				possible_moves.push(`${r+1}${c}`)
			}
		}
		// below right
		if (r <= 6 && c <= 6) {
			if(test_puzzle["chess_board"][r+1][c+1] === '--') {
				possible_moves.push(`${r+1}${c+1}`)
			}
			else if(test_puzzle["chess_board"][r+1][c+1][0] === 'w' && piece[0] === 'b') {
				possible_moves.push(`${r+1}${c+1}`)
			}
			else if(test_puzzle["chess_board"][r+1][c+1][0] === 'b' && piece[0] === 'w') {
				possible_moves.push(`${r+1}${c+1}`)
			}
		}
		// above right
		if (r >= 1 && c <= 6) {
			if(test_puzzle["chess_board"][r-1][c+1] === '--') {
				possible_moves.push(`${r-1}${c+1}`)
			}
			else if(test_puzzle["chess_board"][r-1][c+1][0] === 'w' && piece[0] === 'b') {
				possible_moves.push(`${r-1}${c+1}`)
			}
			else if(test_puzzle["chess_board"][r-1][c+1][0] === 'b' && piece[0] === 'w') {
				possible_moves.push(`${r-1}${c+1}`)
			}
		}
		// above left
		if (r >= 1 && c >= 1) {
			if(test_puzzle["chess_board"][r-1][c-1] === '--') {
				possible_moves.push(`${r-1}${c-1}`)
			}
			else if(test_puzzle["chess_board"][r-1][c-1][0] === 'w' && piece[0] === 'b') {
				possible_moves.push(`${r-1}${c-1}`)
			}
			else if(test_puzzle["chess_board"][r-1][c-1][0] === 'b' && piece[0] === 'w') {
				possible_moves.push(`${r-1}${c-1}`)
			}
		}
		// below left
		if (r <= 6 && c >= 1) {
			if(test_puzzle["chess_board"][r+1][c-1] === '--') {
				possible_moves.push(`${r+1}${c-1}`)
			}
			else if(test_puzzle["chess_board"][r+1][c-1][0] === 'w' && piece[0] === 'b') {
				possible_moves.push(`${r+1}${c-1}`)
			}
			else if(test_puzzle["chess_board"][r+1][c-1][0] === 'b' && piece[0] === 'w') {
				possible_moves.push(`${r+1}${c-1}`)
			}
		}
		// left
		if (c >= 1) {
			if(test_puzzle["chess_board"][r][c-1] === '--') {
				possible_moves.push(`${r}${c-1}`)
			}
			else if(test_puzzle["chess_board"][r][c-1][0] === 'w' && piece[0] === 'b') {
				possible_moves.push(`${r}${c-1}`)
			}
			else if(test_puzzle["chess_board"][r][c-1][0] === 'b' && piece[0] === 'w') {
				possible_moves.push(`${r}${c-1}`)
			}
		}
		// right
		if (c <= 6) {
			if(test_puzzle["chess_board"][r][c+1] === '--') {
				possible_moves.push(`${r}${c+1}`)
			}
			else if(test_puzzle["chess_board"][r][c+1][0] === 'w' && piece[0] === 'b') {
				possible_moves.push(`${r}${c+1}`)
			}
			else if(test_puzzle["chess_board"][r][c+1][0] === 'b' && piece[0] === 'w') {
				possible_moves.push(`${r}${c+1}`)
			}
		}
		// castling
		if (piece[0] === 'w') {
			if (w_castle["k_side"] === true && (test_puzzle["chess_board"][7][5] === "--" && test_puzzle["chess_board"][7][6] === "--")) {
				possible_moves.push("76")
			}
			if (w_castle["q_side"] === true && (test_puzzle["chess_board"][7][3] === "--" && test_puzzle["chess_board"][7][2] === "--" && test_puzzle["chess_board"][7][1] === "--")) {
				possible_moves.push("72")
			}
		}
		else if (piece[0] === 'b') {
			if (b_castle["k_side"] === true && (test_puzzle["chess_board"][0][5] === "--" && test_puzzle["chess_board"][0][6] === "--")) {
				possible_moves.push("06")
			}
			if (b_castle["q_side"] === true && (test_puzzle["chess_board"][0][3] === "--" && test_puzzle["chess_board"][0][2] === "--" && test_puzzle["chess_board"][0][1] === "--")) {
				possible_moves.push("02")
			}
		}
		if (possible_moves.length > 0) {
			return possible_moves
		}
	}

	// return false if there are no possible moves
	return false
}

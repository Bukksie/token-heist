const { assert } = require('chai')
const wasm_tester = require('circom_tester').wasm

describe('circuit', function () {
	let circuit

	before(async function () {
		circuit = await wasm_tester('circuit.circom')
	})

	it('Should generate the witness successfully', async function () {
		let input = {
			unsolved: [
				[0, 0, 0, 0, 0, 6, 0, 0, 0],
				[0, 0, 7, 2, 0, 0, 8, 0, 0],
				[9, 0, 6, 8, 0, 0, 0, 1, 0],
				[3, 0, 0, 7, 0, 0, 0, 2, 9],
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[4, 0, 0, 5, 0, 0, 0, 7, 0],
				[6, 5, 0, 1, 0, 0, 0, 0, 0],
				[8, 0, 1, 0, 5, 0, 3, 0, 0],
				[7, 9, 2, 0, 0, 0, 0, 0, 4],
			],
			solved: [
				[1, 8, 4, 3, 7, 6, 2, 9, 5],
				[5, 3, 7, 2, 9, 1, 8, 4, 6],
				[9, 2, 6, 8, 4, 5, 7, 1, 3],
				[3, 6, 5, 7, 1, 8, 4, 2, 9],
				[2, 7, 8, 4, 6, 9, 5, 3, 1],
				[4, 1, 9, 5, 3, 2, 6, 7, 8],
				[6, 5, 3, 1, 2, 4, 9, 8, 7],
				[8, 4, 1, 9, 5, 7, 3, 6, 2],
				[7, 9, 2, 6, 8, 3, 1, 5, 4],
			],
		}
		const witness = await circuit.calculateWitness(input)
		await circuit.assertOut(witness, {})
	})
})

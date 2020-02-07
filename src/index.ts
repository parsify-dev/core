import pPipe from 'p-pipe';

export default class Parsify {
	constructor(public readonly plugins?: ReadonlyArray<(expression: string) => Promise<any>>) { }

	/**
	* @param expression Expression you want to parse
	* @return Parsing result
	*/
	async parse(expression: string): Promise<any> {
		// Do not parse comments (expressions, that start with either `#` or `//`)
		if (/^#|\/\//i.exec(expression)) {
			return;
		}

		// Pipe the expression through plugins
		if (this.plugins && (this.plugins).length > 0) {
			return pPipe(...this.plugins)(expression);
		}

		return expression;
	}
}
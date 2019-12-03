const getOptions = {
	headers: new Headers({
		'Access-Control-Allow-Origin': '*'
	}),
	method: 'GET',
	mode: 'cors'
};

export class TestDataService {

	static createRecord() {
	}

	static deleteRecord() {}

	static getMethods() {
		const data = [
			{'Id': 1, 'Name': 'Course'},
			{'Id': 2, 'Name': 'Book'},
			{'Id': 3, 'Name': 'Netflix'}
		];
		return Promise.resolve(data);
	}

	static getQuestions() {
		const data = [{Id:1, QuestionText:'Why is Ben moving?'}];
		return Promise.resolve(data);
	}

	static getRecordSummary() {
		return fetch('../../../data/cpd_records.json', getOptions).then(r => r.json());
	}

	static getSubjects() {
		const data = [
			{'Id': 1, 'Name': 'Math'},
			{'Id': 2, 'Name': 'Art'},
			{'Id': 3, 'Name': 'Mortgages'}
		];
		return Promise.resolve(data);
	}

	static getTypes() {
		return ['Structured', 'Unstructured'];
	}
}

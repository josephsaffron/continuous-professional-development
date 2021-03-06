const getOptions = {
	headers: new Headers({
		'Access-Control-Allow-Origin': '*'
	}),
	method: 'GET',
	mode: 'cors'
};

const deletedSubjects = [];

export class DemoCpdService {

	static createMethod() {}

	static createQuestion() {}

	static createRecord() {}

	static createSubject() {}

	static deleteMethod() {}

	static deleteQuestion() {}

	static deleteRecord() {}

	static deleteSubject(subjectId) {
		deletedSubjects.push(subjectId);
	}

	static dismissRecord() {}

	static downloadBlob(blob, fileName) {
		let url;
		if (window.navigator.msSaveOrOpenBlob) {
			window.navigator.msSaveOrOpenBlob(blob, fileName);
			return;
		} else {
			url = window.URL.createObjectURL(blob);
		}
		const a = document.createElement('a');
		a.style.display = 'none';
		a.href = url;
		a.download = fileName;
		document.body.appendChild(a);
		a.click();
		window.URL.revokeObjectURL(url);
		document.body.removeChild(a);
	}

	static async getAttachment(attachment) {
		let blob;
		if (attachment.href) {
			blob = new Blob([JSON.stringify({key: 'value'})], {type : 'application/json'});
		} else if (attachment instanceof File) {
			blob = attachment;
		}
		this.downloadBlob(blob, attachment.name);
	}

	static getCsvExport() {
		const now = new Date();
		const fileName = `${this.userDisplayName}_${now.toLocaleDateString()}_${now.toLocaleTimeString()}.csv`;
		const blob = new Blob([JSON.stringify({key: 'value'})], {type : 'application/json'});
		this.downloadBlob(blob, fileName);
	}

	static getJobTitle() {
		return Promise.resolve('Cool Job');
	}

	static getJobTitleDefaults() {
		return fetch('../../../../data/job_targets.json', getOptions).then(r => r.json());
	}

	static getMethods() {
		const data = [
			{'Id': 1, 'Name': 'Course'},
			{'Id': 2, 'Name': 'Book'},
			{'Id': 3, 'Name': 'Netflix'}
		];
		return Promise.resolve(data);
	}

	static getMyTeam() {
		return fetch('../../../../data/reports.json', getOptions).then(r => r.json());
	}

	static getPendingRecords() {
		return fetch('../../../../data/awards.json', getOptions).then(r => r.json());
	}

	static getProgress() {
		return fetch('../../../../data/target_progress.json', getOptions).then(r => r.json());
	}

	static getQuestions() {
		const data = [
			{Id:1, QuestionText:'Why is Ben moving?', SortOrder: 1},
			{Id:2, QuestionText:"Why don't Tom's monitors work?"},
			{Id:3, QuestionText:'When do snacks come?'},
			{Id:4, QuestionText:'What did you learn?', InUse: true}
		];
		return Promise.resolve(data);
	}

	static async getRecord(recordId) {
		const records = await fetch('../../../../data/recordDictionary.json', getOptions).then(r => r.json());
		return Promise.resolve(records[recordId]);
	}

	static getRecordSummary() {
		return this.getRequest('../../../../data/cpd_records.json');
	}

	static getRequest(url) {
		return fetch(url, getOptions).then(r => r.json());
	}

	static getSubjects() {
		const data = [
			{'Id': 1, 'Name': 'Math'},
			{'Id': 2, 'Name': 'Art'},
			{'Id': 3, 'Name': 'Mortgages'}
		];
		return Promise.resolve(data.filter(x => deletedSubjects.indexOf(`${x.Id}`) === -1));
	}

	static getSubjectTargets(jobTitle) {
		if (jobTitle) {
			return fetch('../../../../data/job_title_target.json', getOptions).then(r => r.json());
		}
		return fetch('../../../../data/personal_target.json', getOptions).then(r => r.json());
	}

	static async getTargetRecords() {
		return fetch('../../../../data/record_array.json', getOptions).then(r => r.json());
	}

	static getTypes() {
		return [
			{
				Id: 0,
				Name: 'Unstructured'
			},
			{
				Id: 1,
				Name: 'Structured'
			}
		];
	}

	static getUserInfo() {
		return Promise.resolve('First Last');
	}

	static getWhoAmI() {
		return Promise.resolve({Identifier: 12});
	}

	static printRecordLink() {}

	static restoreRecord() {}

	static updateMethod() {}

	static updateQuestion() {}

	static updateRecord() {}

	static updateSubject() {}

	static updateTarget() {
		return Promise.resolve();
	}

	static updateTargetDate(jobTitle, date) {
		alert(`${jobTitle}, ${date}`);
		return Promise.resolve();
	}
}

import Route from '@ember/routing/route';

export default Route.extend({

	model() {
		let person = this.store.createRecord('person', {
			id: 1,
			firstName: 'Rails is Omakase',
			lastName: 'Lorem ipsum'
		});

	return this.store.peekRecord('person', person.id);
	}

});

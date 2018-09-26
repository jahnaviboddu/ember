import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        let people = this.store.createRecord('people', {
            firstName: 'Rails is Omakase',
            lastName: 'Lorem ipsum'
          });
          people.save();
        return this.store.findAll('people');
    }
});

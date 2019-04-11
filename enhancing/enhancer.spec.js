const enhancer = require('./enhancer.js');
// test away!


describe('the enhancer module', () => {

  describe('the repair function', () => {
    const expected = {
      name: expect.anything(),
      durability: 100,
      enhancement: expect.anything()
    };
    const item = {
      name: 'Steve',
      durability: 50,
      enhancement: 10
    }

    it('should return an item with 100 durability', () => {
      expect(enhancer.repair(item)).toEqual(expect.objectContaining({...item, durability: 100}));
    });
  });
});
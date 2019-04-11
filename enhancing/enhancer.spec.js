const enhancer = require('./enhancer.js');
// test away!


describe('the enhancer module', () => {
  const item = {
    name: 'Steve',
    durability: 50,
    enhancement: 10
  }

  describe('the repair function', () => {
    const expected = {
      name: expect.anything(),
      durability: 100,
      enhancement: expect.anything()
    };
    // const item = {
    //   name: 'Steve',
    //   durability: 50,
    //   enhancement: 10
    // }

    it('should return an item with 100 durability', () => {
      expect(enhancer.repair(item)).toEqual(expect.objectContaining({...item, durability: 100}));
    });
  });

  describe('the success function', () => {

    it('should return a new item with +1 to enhancement', () => {
      expect(enhancer.succeed(item)).toEqual(expect.objectContaining({...item, enhancement: 11}))
    })
  })
});
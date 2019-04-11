const enhancer = require('./enhancer.js');
// test away!


describe('the enhancer module', () => {
  const item = {
    name: 'Steve',
    durability: 50,
    enhancement: 10
  };

  const item2 = {
    name: 'Jared',
    durability: 75,
    enhancement: 15
  };

  const item3 = {
    name: 'Sally',
    durability: 40,
    enhancement: 18
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
    });
  });

  describe('the fail function', () => {
    
    it('should return a new item some attribute reduced', () => {
      expect(enhancer.fail(item)).toEqual(expect.objectContaining({...item, durability: 45}));
      expect(enhancer.fail(item2)).toEqual(expect.objectContaining({...item2, durability: 65}));
      expect(enhancer.fail(item3)).toEqual(expect.objectContaining({...item3, durability: 30, enhancement: 17}));
    })
  })
});
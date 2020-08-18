'use strict';

class Model {
  constructor(schema) {
    this.schema = schema;
  }
  async create(cluster) {
    try {
      let clusterToAdd = new this.schema(cluster);
      return await clusterToAdd.save();
    } catch (e) {
      console.error('muggle error', e);
      return false;
    }
  }
  ////////////////////////////*****************TO USE IT FOR AUTH0 USER NAME.*/
  async readBySub(sub) {
    try {
      let record = await this.schema.find({ sub });
      console.log('record', record);
      return record;
    } catch (e) {
      console.error(
        'house elves went on a strike , could not find your potion!!',
        e
      );
      return false;
    }
  }
  //////////////////////////****************** */
  async readById(_id) {
    try {
      let record = await this.schema.findOne({ _id });
      return record;
    } catch (e) {
      console.error(
        'house elves went on a strike , could not find your potion!!',
        e
      );
      return false;
    }
  }
  async read(query) {
    try {
      let result = await this.schema.find(query);

      return result;
    } catch (e) {
      console.error('professor snape blew up the dungeon', e);
      return false;
    }
  }
  async update(_id, changedRecord) {
    try {
      await this.schema.findByIdAndUpdate(_id, changedRecord);
      return await this.readById(_id);
    } catch (e) {
      console.error('owl post lost your update', e);
      return false;
    }
  }
  async delete(_id) {
    try {
      await this.schema.deleteOne({ _id });
      return _id;
    } catch (e) {
      console.error('Expelliarmus - your potion cannot be deleted', e);
      return false;
    }
  }
}

module.exports = Model;

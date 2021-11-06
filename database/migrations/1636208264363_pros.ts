import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Pros extends BaseSchema {
  protected tableName = 'pros'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title')
      table.boolean('is_completed')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

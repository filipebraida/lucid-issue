import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'

import Profile from 'App/Models/Profile'

export default class User extends BaseModel {
  public static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  public id: BigInt

  @column()
  public profileId: number | null

  @hasOne(() => Profile, {
    localKey: 'profileId',
    foreignKey: 'id',
  })
  public profile: HasOne<typeof Profile>

  @hasMany(() => Profile)
  public profiles: HasMany<typeof Profile>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

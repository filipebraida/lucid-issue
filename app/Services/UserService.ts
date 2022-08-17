import User from 'App/Models/User'
import Profile from 'App/Models/Profile'

export default class UserService {
    public static async createUser(id: BigInt) {
        var user = await User.find(id)

        if (user) {
          return user
        }
    
        user = new User()
        user.id = id
    
        user = await user.save()
    
        return user
    }

    // Problem One
    public static async allUsers() {
        const users = await User.query().preload('profile')
        
        console.log('-- Problem:')
        for await (const user of users) {
            console.log('User ' + user.id)
            console.log(user.profile)
        }

        console.log('Fix temporary:')

        for await (const user of users) {
            await user.load('profile')
        }

        for await (const user of users) {
            console.log('User ' + user.id)
            console.log(user.profile)
        }

        return users
    }

    // Problem Two
    public static async findProfile(idUser: BigInt) {
        const profiles = await Profile.query().where('idUser', idUser)

        return profiles
    }

    public static async addProfile(id: BigInt) {
        const user = await User.findOrFail(id)

        var profile = new Profile()
        profile.userId = user.id

        profile = await profile.save()

        user.profileId = profile.id

        await user.save()

        return profile
    }
}
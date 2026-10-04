import conf from "../conf/conf"
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint(conf.AppWriteUrl)
            .setProject(conf.ProjectId);
        this.account = new Account(this.client)
    }
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                // call another method
                return this.Login({ email, password })
            } else {
                return userAccount;
            }
        } catch (err) {
            throw err
        }
    }

    async Login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get()

        } catch (error) {
            console.log("Error in getCurrentUser", error)
        }
        return null;
    }

    async Logout() {
        try {
            return await this.account.deleteSessions()
        }
        catch (error) {
            console.log("Error in Logout", error)
        }
    }
}

const authservice = new AuthService();

export default authservice;
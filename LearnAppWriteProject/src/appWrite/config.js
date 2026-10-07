import conf from "../conf/conf"
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;
    Constructor() {
        this.client
            .setEndpoint(conf.AppWriteUrl)
            .setProject(conf.ProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);

    }

    async createPost({ title, slug, content, featuredImage, userId, status }) {
        try {
            return await this.databases.createDocument(
                conf.DatabaseId,
                conf.CollectionId,
                slug,
                {
                    title,
                    slug,
                    content,
                    featuredImage,
                    userId,
                    status
                }
            )
        } catch (err) {
            console.log("Error in createPost", err)
        }

    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.DatabaseId,
                conf.CollectionId,
                slug,
                {
                    title,
                    slug,
                    content,
                    featuredImage,
                    userId,
                    status
                }
            )
        }
        catch (err) {
            console.log("Error in updatePost", err)
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.DatabaseId,
                conf.CollectionId,
                slug

            )
            return true
        } catch (err) {
            console.log("Error in deletePost", err)
            return false
        }

    }

    async getPost(slug) {
        try {
            await this.databases.getDocument(
                conf.DatabaseId,
                conf.CollectionId,
                slug
            )
            return true
        } catch (err) {
            console.log("Error in getPost", err)
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                queries,

            )

        } catch (err) {
            console.log("Error in getPosts", err)
            return false
        }
    }

    // upload services

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                file
            )
        } catch (err) {
            console.log("Error in uploadFile", err)
            return false
        }
    }

    async deleteFile(fileId) {
        try {
            this.bucket.deleteFile(
                conf.appWriteBucketId,
                fileId
            )
            return true

        } catch (err) {
            console.log("Error in deleteFile", err)
            return false
        }
    }

    getFilePreviewUrl(fileId) {
        return this.bucket.getFilePreview(
            conf.appWriteBucketId,
            fileId
        );
    }


}

const service = new Service();
export default service
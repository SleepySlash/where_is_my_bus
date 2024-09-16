const sdk = require("node-appwrite");
import { Query } from "appwrite";

const client = new sdk.Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject(process.env.NEXT_PUBLIC_PROJECT_ID!) // Your project ID
  .setKey(process.env.NEXT_PUBLIC_API_KEY!); // Your secret API key

const users = new sdk.Users(client);
const databases = new sdk.Databases(client);

export const findDocumentsByRoll = async (roll: String) => {
  try {
    const result = await databases.listDocuments(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_USERS_COLLECTION_ID!,
      [Query.equal("RollNumber", String(roll))]
    );

    return result.documents;
  } catch (error) {
    console.error("Failed to find document:", error);
    return [];
  }
};

export const deleteUserInAuth = async (userId: String) => {
  try {
    await users.delete(String(userId));
    console.log("User account deleted successfully");
  } catch (error) {
    console.error("Failed to delete user account:", error);
  }
};

export const deleteDocumentById = async (documentId: String) => {
  try {
    console.log("Got here");
    console.log("Document ID: ", documentId);
    await databases.deleteDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_USERS_COLLECTION_ID!,
      documentId
    );
    console.log("Document deleted successfully");
  } catch (error) {
    console.error("Failed to delete document:", error);
  }
};

export const DeleteUserByUserId = async (
  userId: String,
  role: String,
  roll: String,
  docId: String
) => {
  if (role != "Student") {
    deleteUserInAuth(userId);
    deleteDocumentById(docId);
  } else {
    const documents = await findDocumentsByRoll(roll);
    for (let i = 0; i < documents.length; i++) {
      deleteUserInAuth(documents[i].UserId);
      deleteDocumentById(documents[i].$id);
    }
  }
  // window.location.reload();
};

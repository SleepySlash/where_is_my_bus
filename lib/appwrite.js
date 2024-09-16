import { Client, Account, Databases } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);
// const users = new Users(client);
// const users = new Users(client);

// const findDocumentsByRoll = async (roll) => {
//   try {
//     const result = await databases.listDocuments(
//       process.env.NEXT_PUBLIC_DATABASE_ID,
//       process.env.NEXT_PUBLIC_USERS_COLLECTION_ID,
//       [Query.equal("RollNumber", roll)]
//     );

//     return result.documents;
//   } catch (error) {
//     console.error("Failed to find document:", error);
//     return [];
//   }
// };

// const deleteUserInAuth = async (userId) => {
//   try {
//     await users.delete(userId);
//     console.log("User account deleted successfully");
//   } catch (error) {
//     console.error("Failed to delete user account:", error);
//   }
// };

// const deleteDocumentById = async (documentId) => {
//   try {
//     await databases.deleteDocument(
//       process.env.NEXT_PUBLIC_DATABASE_ID,
//       process.env.NEXT_PUBLIC_USERS_COLLECTION_ID,
//       documentId
//     );
//     console.log("Document deleted successfully");
//   } catch (error) {
//     console.error("Failed to delete document:", error);
//   }
// };

// export const DeleteUserByUserId = async (userId, role, roll, docId) => {
//   if (role != "Student") {
//     deleteUserInAuth(userId);
//     deleteDocumentById(docId);
//   } else {
//     const documents = await findDocumentsByRoll(roll);
//     for (let i = 0; i < documents.length; i++) {
//       deleteUserInAuth(documents[i].UserId);
//       deleteDocumentById(documents[i].$id);
//     }
//   }
//   // window.location.reload();
// };

export { ID } from "appwrite";

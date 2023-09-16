import argon2 from "argon2"

export default async function hashpass(unhashedPassword: string): Promise<string> {
	let hash
	try {
		hash = await argon2.hash(unhashedPassword)
	} catch (error) {
		console.log("something went wrong hashing the password", error)
	}
	if (!hash) {
		throw new Error("something went wrong hashing the password")
	}
	return hash
}

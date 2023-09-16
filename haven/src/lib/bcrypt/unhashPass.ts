import argon2 from "argon2"

export default async function unhashPass(unhashedPassword: string, hashedPassword: string) {
	return await argon2.verify(hashedPassword, unhashedPassword)
}

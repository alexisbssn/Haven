import bcrypt from "bcrypt"

export default function unhashPass(unhashedPassword: string, hashedPassword: string): Promise<boolean> {
	return bcrypt.compare(unhashedPassword, hashedPassword).then((result) => result)
}

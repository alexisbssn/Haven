import bcrypt from "bcrypt"

export default function hashpass(unhashedPassword: string): Promise<string> {
	return bcrypt.hash(unhashedPassword, 10).then((hash) => hash)
}

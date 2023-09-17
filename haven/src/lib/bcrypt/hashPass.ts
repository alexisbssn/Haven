
export default async function hashpass(unhashedPassword: string): Promise<string> {
    return Bun.password.hash(unhashedPassword, {
        algorithm: "bcrypt",
        cost: 10
    })
}

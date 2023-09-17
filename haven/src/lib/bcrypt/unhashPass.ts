export default async function unhashPass(
  unhashedPassword: string,
  hashedPassword: string,
): Promise<boolean> {
  return Bun.password.verify(unhashedPassword, hashedPassword)
}

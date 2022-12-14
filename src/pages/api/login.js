export default async function handler(req, res) {
    const { username, password } = req.body;
    if (!username) {
        return
    } else {
        res.status(200).json({ message: {username : username, password: password} });
    }
}
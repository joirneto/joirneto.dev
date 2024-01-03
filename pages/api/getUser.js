import getUser from "../../utils/getUser";

const apiGetUser = async(req, res) => {
    const data = await getUser('joirneto');
}

export default apiGetUser;
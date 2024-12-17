import axios from '../utils/axios'

const generateImage = (data: { inputText: String }) =>
    axios.post('/text2img', data).then(
        (response) => response,
        (error) => error
    )


const imageService = {
    generateImage,
}

export default imageService;

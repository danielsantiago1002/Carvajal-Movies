import axios from "axios"

const token ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzg5ZDkxNWM0MDcxNWU1YzZkOTcxNTQ1NDYxZTJiYiIsInN1YiI6IjYwZTBiMzBiMjU4ODIzMDA1ZDc5N2VkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FNRlAAOXPAIucTYplgDTonJn91pGp7IM7b1Jp54SP5M"

export default axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers: {
        Authorization:`Bearer ${token}`,
    }
})
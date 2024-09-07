import axios from "axios";

 const axiosPublic=axios.create({
    baseURL:'https://ibos-serverside.vercel.app'
})
const useAxiosPublic=()=>{
    return axiosPublic;
}
export default useAxiosPublic;